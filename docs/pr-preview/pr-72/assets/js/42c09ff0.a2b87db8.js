"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[8782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,d=m["".concat(p,".").concat(u)]||m[u]||f[u]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"PDF YAML Manifest",metaTitle:"FSML PDF Protocol with a YAML generated manifest",metaDescription:"FSML PDF Protocol with a YAML generated manifest"},i="PDF Protocol with YAML Manifest",l={unversionedId:"examples/pdf-yaml-example",id:"examples/pdf-yaml-example",title:"PDF YAML Manifest",description:"Below is a contrived example of what it will look like if a user has an existing protocol in a PDF file and wants to generate a protocol manifest in the YAML format.",source:"@site/docs/examples/pdf-yaml-example.md",sourceDirName:"examples",slug:"/examples/pdf-yaml-example",permalink:"/pr-preview/pr-72/examples/pdf-yaml-example",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/pdf-yaml-example.md",tags:[],version:"current",frontMatter:{title:"PDF YAML Manifest",metaTitle:"FSML PDF Protocol with a YAML generated manifest",metaDescription:"FSML PDF Protocol with a YAML generated manifest"},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/pr-preview/pr-72/examples/"},next:{title:"Model",permalink:"/pr-preview/pr-72/model/"}},p={},s=[],c={toc:s};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pdf-protocol-with-yaml-manifest"},"PDF Protocol with YAML Manifest"),(0,a.kt)("p",null,"Below is a contrived example of what it will look like if a user has an existing protocol in a PDF file and wants to generate a protocol manifest in the YAML format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# ID is the hash of the file\nId: pdf-100d924bd6d9b0472fde5c3a2e6ad12c9e19c3b916022d11a728d40abf6af59d\n\n# Who issued the ID\nIdentityAuthority: FileHashSHA256\n# If this file was part of a system like TeselaGen's then it would point to that instead\n\n# Defaults to the filename without extension\nName: myprotocol\n\n# Where can I find this protocol's source content\nContentReferences:\n  - ContentFormat: pdf\n    ContentURI: http://someonlinedrive.com/myprotocol.pdf\n")))}f.isMDXComponent=!0}}]);