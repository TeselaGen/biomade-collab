"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[8602],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(o),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2983:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={title:"Core Sections"},a="Overview",s={unversionedId:"model/manifest/core-sections",id:"model/manifest/core-sections",title:"Core Sections",description:"Core sections are sections that must be present in all manifest files. They represent the minimum that is required to model a protocol using FSML.",source:"@site/docs/model/manifest/core-sections.md",sourceDirName:"model/manifest",slug:"/model/manifest/core-sections",permalink:"/pr-preview/pr-104/model/manifest/core-sections",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/model/manifest/core-sections.md",tags:[],version:"current",frontMatter:{title:"Core Sections"},sidebar:"tutorialSidebar",previous:{title:"Manifest",permalink:"/pr-preview/pr-104/model/manifest/"},next:{title:"Supplemental Sections",permalink:"/pr-preview/pr-104/model/manifest/supplemental-sections"}},l={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Core sections are sections that must be present in all manifest files. They represent the minimum that is required to model a protocol using FSML."),(0,n.kt)("h1",{id:"version"},"Version"),(0,n.kt)("p",null,"This section describes the version of the specification format that this content adheres to."),(0,n.kt)("h1",{id:"identification"},"Identification"),(0,n.kt)("p",null,"Every manifest must provide a way to uniquely identify a protocol. This can come in 2 main ways:"),(0,n.kt)("p",null,"Content Identification - in this case an identifier (hash) is generated from the protocol content itself."),(0,n.kt)("p",null,"Authoritative Identification - in this an authority such as a software platform issues an ID to the protocol."),(0,n.kt)("h1",{id:"source-content"},"Source Content"),(0,n.kt)("p",null,"Every manifest must provide URL\u2019s (or relative file paths if in an archive) to the various sources of content that comprise this protocol. Additionally the mime type of each content source should be annotated if possible. In most cases these will be links to files or HTTP GET URL\u2019s that will serve up the content on demand."),(0,n.kt)("h1",{id:"utility-score"},"Utility Score"),(0,n.kt)("p",null,"The intent behind a protocol can vary greatly based on the use case that precipitated its creation. For example a protocol that is used in a highly regulated production environment is going to be focused on including content that is different from the content in protocols used in a development environment where researchers are focused on trying to optimize the performance of the protocol."),(0,n.kt)("p",null,"The Utility Score attempts to represent at a high level the ability for a protocol to be useful in a particular situation. The Utility Score is a set of scores for specific categories of \u201cutility\u201d that are then normalized and aggregated together. A perfect utility score would represent a protocol that is very flexible and can be utilized in a wide variety of situations whereas lower utility scores mean a protocol only works well in certain situations."),(0,n.kt)("p",null,"Listed below are the categories of utility that we\u2019re currently planning to include in the first version of the specification. These are subject to change as we work through the process of determining how to calculate them."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Readable")," - How readable is this by a person (does it have an HTML rendering method)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parsability")," - How easily can this be parsed by a program in a standardized automated fashion (is it formatted in a machine readable source such as JSON)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Scalability")," - How easily can this be scaled to yield different amounts of product"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Automatible")," - How easily can this protocol be run on lab automation equipment"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Viability")," - How many times has this been successfully executed"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Traceability")," - How well can someone trace the source of this protocol, it\u2019s history, and any authorship restrictions (copyrights and/or licenses)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameterization")," - How many of the attributes of this protocol are specified in a way that they can be parsed into individual sets or ranges of parameters for analysis."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Transferability")," - How easily can this protocol be transferred from one system to another"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Executability")," - How much information is provided regarding the requirements (lab space, equipment, etc.) needed to execute the protocol"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Predictability")," - How much information is provided to be able to predict the amount of time and resources needed to execute a protocol as well as the expected yield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Relevance")," - Is this protocol still relevant or has it been superseded by another protocol"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Queryable")," - How easily can this protocol be organized in a storage scheme and queried for."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Comparability")," - How easily can this protocol be compared to another \u201csimilar\u201d protocol"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Clarity")," - How clear or easy to understand are the instructions in the protocol. This specifically focuses on terminology or phrases that aren\u2019t found in common usage or the domain dictionary."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flexibility")," - How many optional configurations does the protocol provide to support various situations.")))}u.isMDXComponent=!0}}]);