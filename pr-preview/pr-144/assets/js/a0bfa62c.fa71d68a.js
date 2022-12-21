"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[7722],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={title:"Node-RED",metaTitle:"Node-RED Flow: Phycus --\x3e TeselaGen",sidebar_position:4},l="Phycus-TeselaGen Integration",i={unversionedId:"examples/node-red-phycus",id:"examples/node-red-phycus",title:"Node-RED",description:"This is a real-world Node-RED integration between FSML partners Phycus and TeselaGen.",source:"@site/docs/examples/node-red-phycus.md",sourceDirName:"examples",slug:"/examples/node-red-phycus",permalink:"/pr-preview/pr-144/examples/node-red-phycus",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/examples/node-red-phycus.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Node-RED",metaTitle:"Node-RED Flow: Phycus --\x3e TeselaGen",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Parser Plugin",permalink:"/pr-preview/pr-144/examples/plugin-phycus"}},s={},p=[{value:"Node-RED Server",id:"node-red-server",level:2},{value:"Node-RED Flow",id:"node-red-flow",level:2},{value:"FSML TeselaGen Exporter Plugin",id:"fsml-teselagen-exporter-plugin",level:2},{value:"Import FSML into TeselaGen",id:"import-fsml-into-teselagen",level:2},{value:"Log into the Teselaegn Biomade app",id:"log-into-the-teselaegn-biomade-app",level:4},{value:"Import TeselaGen Integration file",id:"import-teselagen-integration-file",level:4},{value:"Run TeselaGen Integration Flow",id:"run-teselagen-integration-flow",level:4},{value:"FSML Manifest imported as a TeselaGen Data Grid",id:"fsml-manifest-imported-as-a-teselagen-data-grid",level:3},{value:"Demo",id:"demo",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"phycus-teselagen-integration"},"Phycus-TeselaGen Integration"),(0,o.kt)("p",null,"This is a real-world Node-RED integration between FSML partners ",(0,o.kt)("strong",{parentName:"p"},"Phycus")," and ",(0,o.kt)("strong",{parentName:"p"},"TeselaGen"),"."),(0,o.kt)("p",null,"Here we show how to leverage the Node-RED technology to integrate the Applikon Bioreactor data from ",(0,o.kt)("strong",{parentName:"p"},"Phycus")," into ",(0,o.kt)("strong",{parentName:"p"},"TeselaGen")," TEST module."),(0,o.kt)("p",null,"This .zip file is necessary to carry on with this example and those are available in the following link:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/TeselaGen/fsml.org/main/website/static/phycus-tg-nodered-example-01.zip"},(0,o.kt)("strong",{parentName:"a"},"phycusTeselagenNodeRed.zip")))),(0,o.kt)("h2",{id:"node-red-server"},"Node-RED Server"),(0,o.kt)("p",null,"In order to get started with using Node-RED flows you will need a Node-RED server running."),(0,o.kt)("p",null,"TeselaGen offers one such server at ",(0,o.kt)("a",{parentName:"p",href:"https://biomade.teselagen.com/node-red-editor"},"https://biomade.teselagen.com/node-red-editor")," to all Biomade members logged into TeselaGen."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE: If you are a Biomade member looking to get an account to the app feel free to contact the TeselaGen Team at ",(0,o.kt)("a",{parentName:"em",href:"mailto:fsml@teselagen.com"},"fsml@teselagen.com"),".")),(0,o.kt)("h2",{id:"node-red-flow"},"Node-RED Flow"),(0,o.kt)("p",null,"Included in the ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/TeselaGen/fsml.org/main/website/static/phycus-tg-nodered-example-01.zip"},(0,o.kt)("strong",{parentName:"a"},"phycusTeselagenNodeRed.zip"))," file you will find the Node-RED Flow JSON file called ",(0,o.kt)("inlineCode",{parentName:"p"},"phycus-teselagen-flow.json")," that you can import into any Node-RED editor as new Node-Red flow. The flow should like the following screenshot:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11540280/208500500-dd94e3b9-861c-41be-b749-d49fbb3647b8.png",alt:"image"})),(0,o.kt)("p",null,"As you can observe, the Flow is pretty simple with just a few functional nodes and I/O http ones."),(0,o.kt)("p",null,"The first function node (FSML --\x3e TG) contains code that imports an npm package called ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/tg-exporter"},"tgExporter")," that exports an ",(0,o.kt)("a",{parentName:"p",href:"/software/plugins/exporter"},"FSML Plugin Exporter"),". It takes in an FSML Manifest and returns a TeselaGen Data Grid ",(0,o.kt)("em",{parentName:"p"},"(a data grid in TeselaGen is a an object specific to TeselaGen used to represent data as data cells)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'/** FSML --\x3e TG Node-Red Function Node. **/\n\n// Imports the tgExporter public npm package which exports an FSML Plugin Exporter\nconst tgExporter = global.get("tgExporter")\n\nconst { manifest } = msg.payload\n\nmsg.payload = tgExporter.run(manifest)\n\nreturn msg;\n')),(0,o.kt)("p",null,"The second functional node called ",(0,o.kt)("inlineCode",{parentName:"p"},"Prepare Data grid Body")," is just TeselaGen specific code to format the body request of a POST /data-grids endpoint to create a Data Grid in TeselaGen's TEST Module app."),(0,o.kt)("h2",{id:"fsml-teselagen-exporter-plugin"},"FSML TeselaGen Exporter Plugin"),(0,o.kt)("p",null,"The first function node in the above flow, imports the ",(0,o.kt)("inlineCode",{parentName:"p"},"tgExporter")," npm package. This publicly available and works by generating a TeselaGen Data Grid by parsing any\xa0FSML data manifest. The implementation of such Exporter can be seen below:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"TeselaGen's FSML Plugin Exporter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"\nimport * as fs from 'fs';\nimport lodash from 'lodash';\nimport * as fsml_utils from 'fsml-utils';\nimport * as fsml_standard from 'fsml-standard';\nimport papaparse from 'papaparse';\n\nconst { get, flatMap } = lodash;\n\nconst tgExporter = {\n  name: 'tgExporter',\n  type: 'exporter',\n  run: (manifest) => {\n\n    // Leverages the FSML SDK to validate the provided manifest object.\n    const { isValid } = fsml_utils.validateType(\n      fsml_standard.Manifest,\n      manifest\n    );\n    if (!isValid) throw new Error('Invalid FSML manifest');\n    const manifestRows = get(manifest, 'supplementalInfo.data[0].rows');\n\n    const dataRows = manifestRows.map((row) =>\n      row.values.map((rowValue) => rowValue.value)\n    );\n\n    const dataGridCells = flatMap(\n      dataRows.map((dataRow, rowPosition) =>\n        dataRow.map((cellValue, columnPosition) => ({\n          rowPosition,\n          columnPosition,\n          value: cellValue,\n        }))\n      )\n    );\n\n    const dataGrid = {\n      name: 'fsml-datagrid',\n      dataCells: dataGridCells,\n    };\n\n    const csvData = papaparse.unparse(dataRows);\n\n    const csvDataBuffer = Buffer.from(csvData, 'utf-8');\n\n    return { data: dataGrid, file: csvDataBuffer };\n  },\n};\n\nexport default tgExporter;\n"))),(0,o.kt)("p",null,"The above implementation leverages the FSML SDK for validation and parsing of an FSML Manifest file. The SDK is distributed into the following publicly available npm packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/fsml-standard"},"fsml-standard"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Exports all the FSML manifest schemas to build different parts of the FSML manifest."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/fsml-plugins"},"fsml-plugins"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Exports some typing functions for easier implementation of different FSML Plugins, mostly beneficial for TypeScript developers."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/fsml-utils"},"fsml-utils"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Exports several utility function to work with FSML, such as the ",(0,o.kt)("inlineCode",{parentName:"li"},"validateType")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"createTemplateForType")," functions")))),(0,o.kt)("h2",{id:"import-fsml-into-teselagen"},"Import FSML into TeselaGen"),(0,o.kt)("p",null,"Now, we are going to trigger the above Node-RED flow to get the FSML Phycus manifest into a TeselaGen Data Grid. Since Node-RED flows are essentially HTTP endpoints, we can trigger them with any kind of tool that allows calling http requests. If you are a Biomade member you can leverage TeselaGen's Biomade app, if not you can hit the endpoint of any Node-RED server you might have access to."),(0,o.kt)("p",null,"The next steps of the example are for Biomade members only."),(0,o.kt)("h4",{id:"log-into-the-teselaegn-biomade-app"},"Log into the Teselaegn Biomade app"),(0,o.kt)("p",null,"Head to ",(0,o.kt)("a",{parentName:"p",href:"https://biomade.teselagen.com"},"https://biomade.teselagen.com")," and log in with your credentials ",(0,o.kt)("em",{parentName:"p"},"(if you are a Biomade member and don't own an account, contact ",(0,o.kt)("a",{parentName:"em",href:"mailto:fsml@teselagen.com"},"fsml@teselagen.com")," to get one)"),"."),(0,o.kt)("h4",{id:"import-teselagen-integration-file"},"Import TeselaGen Integration file"),(0,o.kt)("p",null,"After logging into the app, head to ",(0,o.kt)("a",{parentName:"p",href:"https://biomade.teselagen.com/test/client/settings/integrations-management"},"Setting > Integrations"),", you shall see the Integrations Management Panel, where you can upload an existing Integration. Included in the ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/TeselaGen/fsml.org/main/website/static/phycus-tg-nodered-example-01.zip"},(0,o.kt)("strong",{parentName:"a"},"phycusTeselagenNodeRed.zip"))," file you should find a JSON file called ",(0,o.kt)("inlineCode",{parentName:"p"},"phycus-teselagen-integration.json")," that you can use to uploading in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Upload Existing")," button shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11540280/208506273-4404bd53-5547-4d44-ae2a-49eb0019774c.png",alt:"image"})),(0,o.kt)("p",null,"After so, and if you scroll down to the ",(0,o.kt)("inlineCode",{parentName:"p"},"API Integration")," subsection you shall a see a new TeselaGen Integration called ",(0,o.kt)("inlineCode",{parentName:"p"},"fsml")," as shown here."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11540280/208506733-ba409a13-f9a5-404a-b93f-51f8a2ca1860.png",alt:"image"})),(0,o.kt)("p",null,"The TeselaGen app runs its own dedicated Node-RED Server, you can open its Node-RED editor and look at the Node-RED flow by clicking in the View in Node Red button shown above, which should take you the same Node-RED flow explained at the beginning."),(0,o.kt)("h4",{id:"run-teselagen-integration-flow"},"Run TeselaGen Integration Flow"),(0,o.kt)("p",null,"Now that your integration is created, you can run it by calling TeselaGen's Integrations API. Documentation on it can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://biomade.teselagen.com/test/cli-api/docs/#/Integrations/NodeRedCallIntegration"},"TeselaGen API Docs"),". Here you can understand how to construct the HTTP request."),(0,o.kt)("p",null,"Essentially you need to make a POST request like the following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," POST https://biomade.teselagen.com//test/cli-api/integrations?name=fsml\n\n body:  {\n  manifest: PASTE YOUR FSML MANIFEST JSON HERE.\n }\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE: you will need your API token in order to get authorization to the TeselaGen API. To do so head to ","[Settings > API Password > Generate API OTP]",", this will generate a one-time-password token that together with your email you can authenticate to TeselaGen's API.")),(0,o.kt)("h3",{id:"fsml-manifest-imported-as-a-teselagen-data-grid"},"FSML Manifest imported as a TeselaGen Data Grid"),(0,o.kt)("p",null,"Finally, after calling the Node-RED flow you can see how the Applikon Bioreactor data is imported as a Data Grid in TeselaGen's TEST Module by heading to ",(0,o.kt)("a",{parentName:"p",href:"https://biomade.teselagen.com/test/client/data-grids"},"TEST > Experimental Data > Data Grids"),", you can open the Data grid and shall see the actual data imported."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11540280/208513113-f3b7d72d-092e-47cc-9bb0-a3e30f05e2bc.png",alt:"image"})),(0,o.kt)("h3",{id:"demo"},"Demo"),(0,o.kt)("p",null,"Here's a link to a demo video going through this very same example;"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.loom.com/share/1ff9058a3f1143308d7ca1d1dcd55e02"},"Demo")))}m.isMDXComponent=!0}}]);