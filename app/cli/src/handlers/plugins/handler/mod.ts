import { TManifest } from "@fsml/packages/standard/manifest/manifest.ts";
import { IPlugin, isExporter, isParser } from "@fsml/packages/plugins/mod.ts";
import {
  addModuleToRegistry,
  getRegisteredModule,
  removeModuleFromRegistry,
  updateModuleRegistry,
} from "../registry.ts";
import {
  IPluginHandlerOptions,
  TPluginRegistry,
} from "../../../types/plugin.ts";

import {
  defaultCacher,
  defaultResolver,
  defaultVersionResolver,
} from "./utils.ts";

const PluginHandler = (opts: IPluginHandlerOptions) => {
  const {
    module: pluginBaseModule,
    versionResolver = defaultVersionResolver,
    urlResolver = defaultResolver,
    moduleCacher = defaultCacher,
  } = opts;

  async function _import(): Promise<IPlugin> {
    const pluginRegistry = await getRegisteredModule(pluginBaseModule);
    const plugin: IPlugin = await import(pluginRegistry.url);
    return plugin;
  }

  async function cache(): Promise<boolean> {
    const moduleRegistry = await getRegisteredModule(pluginBaseModule);
    if (!moduleRegistry) return false;
    let isCached = false;
    try {
      isCached = await moduleCacher(moduleRegistry);
    } catch (error) {
      console.error(error);
    } finally {
      if (isCached) {
        await updateModuleRegistry({
          ...moduleRegistry,
          cached: true,
        });
      }
    }
    return isCached;
  }

  async function install(): Promise<TPluginRegistry> {
    const resolvedVersion = await versionResolver({
      ...pluginBaseModule,
      version: pluginBaseModule.version || "latest",
    });

    const { url, uriScheme } = await urlResolver({
      ...pluginBaseModule,
      version: resolvedVersion,
    });

    const newModule: TPluginRegistry = {
      name: pluginBaseModule.name,
      version: resolvedVersion,
      url,
      uriScheme,
      cached: false,
    };

    await addModuleToRegistry(newModule);

    return newModule;
  }

  async function uninstall(): Promise<boolean> {
    await removeModuleFromRegistry(pluginBaseModule);
    return true;
  }

  async function upgrade(version: string): Promise<TPluginRegistry> {
    const moduleRegistry = await getRegisteredModule(pluginBaseModule);

    const resolvedVersion = await versionResolver({
      ...pluginBaseModule,
      version,
    });

    const { url, uriScheme } = await urlResolver({
      ...pluginBaseModule,
      version: resolvedVersion,
    });

    const moduleRegsitry_updated = {
      ...moduleRegistry,
      url,
      uriScheme,
      version: resolvedVersion,
    };

    await updateModuleRegistry(moduleRegsitry_updated);

    return moduleRegsitry_updated;
  }

  async function run(args: Record<string, unknown>): Promise<unknown> {
    const plugin = await _import();

    if (isParser(plugin)) {
      const filepath = args.filepath as string;
      const result = await plugin.run(filepath);
      return result;
    }

    if (isExporter(plugin)) {
      const manifest = args.manifest as TManifest;
      const result = await plugin.run(manifest);
      return result;
    }

    return `Error running plugin '${plugin.name}': Unrecognized plugin type.`;
  }

  return { install, uninstall, cache, import: _import, upgrade, run };
};

export default PluginHandler;
