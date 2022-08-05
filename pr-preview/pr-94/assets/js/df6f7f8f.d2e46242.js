"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"Architecture"},o="Overview",l={unversionedId:"background/technical-architecture",id:"background/technical-architecture",title:"Architecture",description:"Our initial approach is to embody the Fermentation Systems Modeling Language in existing frameworks and languages.",source:"@site/docs/background/technical-architecture.md",sourceDirName:"background",slug:"/background/technical-architecture",permalink:"/pr-preview/pr-94/background/technical-architecture",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/background/technical-architecture.md",tags:[],version:"current",frontMatter:{title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Inspiration",permalink:"/pr-preview/pr-94/background/inspiration"},next:{title:"Examples",permalink:"/pr-preview/pr-94/examples/"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Our initial approach is to embody the Fermentation Systems Modeling Language in existing frameworks and languages."),(0,a.kt)("p",null,"We have chosen the JavaScript or more specifically TypeScript language because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It\u2019s portable"),(0,a.kt)("li",{parentName:"ul"},"It\u2019s web friendly"),(0,a.kt)("li",{parentName:"ul"},"It\u2019s widely used"),(0,a.kt)("li",{parentName:"ul"},"It\u2019s extensible"),(0,a.kt)("li",{parentName:"ul"},"It provide static typing"),(0,a.kt)("li",{parentName:"ul"},"We have familiarity with it")),(0,a.kt)("p",null,"In order to provide a very high level of cross platform adoption we\u2019re developing using the TypeBox framework which enables static transpile time typing of code in the associated tools as well as generating a JSON Schema which can be used by a wide variety of languages besides JavaScript and TypeScript."),(0,a.kt)("p",null,"Our initial implementation is using the Deno runtime instead of Node.js because Deno provides native TypeScript support and can target and compile code into a portable executable (as well as WASM)."),(0,a.kt)("h1",{id:"tooling"},"Tooling"),(0,a.kt)("p",null,"We plan to develop the following tools to enable using the language."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SDK - An isomorphic (usable on server or in a browser) software development kit / package that will provide the ability to generate, parse, validate, and support rendering of protocol manifests."),(0,a.kt)("li",{parentName:"ul"},"JSON Schema - A specification file that can be used to validate protocol manifests. JSON Schema supports a variety of formats such as JSON, YAML, and TOML."),(0,a.kt)("li",{parentName:"ul"},"CLI - A portable command line tool that can be used to access the functionality of the SDK."),(0,a.kt)("li",{parentName:"ul"},"Editing Tools - A collection of tools to assist users in editing manifest files."),(0,a.kt)("li",{parentName:"ul"},"Conversion Tools - A collection of tools and scripts to assist users in converting from one source format to another."),(0,a.kt)("li",{parentName:"ul"},"TeselaGen Integrations - Integrate tools into TeselaGen Platform")))}u.isMDXComponent=!0}}]);