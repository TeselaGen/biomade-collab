"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Inspiration"},o="Overview",s={unversionedId:"background/inspiration",id:"background/inspiration",title:"Inspiration",description:"We want to make sure that we build upon previous successes. To this end, much of our design has taken inspiration from a variety of well used technologies. The two main sources of inspiration are HTML and NCBI.",source:"@site/docs/background/inspiration.md",sourceDirName:"background",slug:"/background/inspiration",permalink:"/pr-preview/pr-108/background/inspiration",draft:!1,editUrl:"https://github.com/TeselaGen/fsml.org/tree/main/website/docs/background/inspiration.md",tags:[],version:"current",frontMatter:{title:"Inspiration"},sidebar:"tutorialSidebar",previous:{title:"Design Principles",permalink:"/pr-preview/pr-108/background/design-principles"},next:{title:"Architecture",permalink:"/pr-preview/pr-108/background/technical-architecture"}},c={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"We want to make sure that we build upon previous successes. To this end, much of our design has taken inspiration from a variety of well used technologies. The two main sources of inspiration are HTML and NCBI."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HTML")," - is a specification that is formalized through usage. Unlike other language specifications which are formalized first and then must be adopted. Most HTML language features are proposed and then become standardized through implementation and usage. We want to take a similar approach by providing a small set of core standardized language sections accompanied by a much larger set of optional sections which may or may not get adopted and used."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NCBI")," - has tackled the enormous task of cataloging a wide variety of scientific research. This research comes in many different formats. One of the strategies used by NCBI is to create a standardized summary which then references the specific piece of research in its native format. We plan to adopt this pattern as well. Instead of requiring protocols to first be converted into a new format we will instead create a standardized summary or manifest that references the original protocol."))}l.isMDXComponent=!0}}]);