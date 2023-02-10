"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[4539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Known Issues",title:"Known Issues"},s=void 0,a={unversionedId:"known-issues",id:"known-issues",title:"Known Issues",description:"Here is a list of known issues in upstream libraries, documented in case you encounter them.",source:"@site/../docs/target/jvm-2.13/mdoc/known-issues.md",sourceDirName:".",slug:"/known-issues",permalink:"/smithy4s/docs/known-issues",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/known-issues.md",tags:[],version:"current",frontMatter:{sidebar_label:"Known Issues",title:"Known Issues"},sidebar:"tutorialSidebar",previous:{title:"Credits",permalink:"/smithy4s/docs/credits"}},l={},c=[{value:"HttpUriConflict Validation - Open",id:"httpuriconflict-validation---open",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is a list of known issues in upstream libraries, documented in case you encounter them."),(0,o.kt)("h2",{id:"httpuriconflict-validation---open"},"HttpUriConflict Validation - Open"),(0,o.kt)("p",null,"Currently, the validator that checks for ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpUriConflict")," is overly constraining. This means that it currently reports conflicts between URIs where there is actually no conflict. For example, operations with the following two ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," traits currently report a conflict:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smithy"},'@http(method: "GET", uri: "/hello")\n\n@http(method: "GET", uri: "/{name}/greet")\n')),(0,o.kt)("p",null,"There is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/awslabs/smithy/issues/1029"},"issue open")," on the Smithy repository where you can track progress on this being resolved."))}m.isMDXComponent=!0}}]);