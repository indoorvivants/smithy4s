"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[6157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_label:"Unwrapping",title:"New types (and unwrapping)"},o=void 0,s={unversionedId:"codegen/customisation/unwrapping",id:"codegen/customisation/unwrapping",title:"New types (and unwrapping)",description:"By default, smithy4s will wrap all standalone primitive types in a Newtype. A standalone primitive type is one that is defined like the following:",source:"@site/../docs/target/jvm-2.13/mdoc/04-codegen/01-customisation/05-unwrapping.md",sourceDirName:"04-codegen/01-customisation",slug:"/codegen/customisation/unwrapping",permalink:"/smithy4s/docs/codegen/customisation/unwrapping",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/04-codegen/01-customisation/05-unwrapping.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Unwrapping",title:"New types (and unwrapping)"},sidebar:"tutorialSidebar",previous:{title:"Type refinements",permalink:"/smithy4s/docs/codegen/customisation/refinements"},next:{title:"Default rendering",permalink:"/smithy4s/docs/codegen/customisation/default-rendering"}},l={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, smithy4s will wrap all standalone primitive types in a Newtype. A standalone primitive type is one that is defined like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"string Email // standalone primitive\n\nstructure Test {\n  email: Email\n  other: String // not a standalone primitive\n}\n")),(0,i.kt)("p",null,"Given this example, smithy4s would generate something like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Test(email: Email, other: String)\n")),(0,i.kt)("p",null,"This wrapping may be undesirable in some circumstances. As such, we've provided the ",(0,i.kt)("inlineCode",{parentName:"p"},"smithy4s.meta#unwrap")," trait. This trait tells the smithy4s code generation to not wrap these types in a newtype when they are used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"use smithy4s.meta#unwrap\n\n@unwrap\nstring Email\n\nstructure Test {\n  email: Email\n  other: String\n}\n")),(0,i.kt)("p",null,"This would now generate something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Test(email: String, other: String)\n")),(0,i.kt)("p",null,"This can be particularly useful when working with refinement types (see above for details on refinements). By default, any type that is ",(0,i.kt)("inlineCode",{parentName:"p"},"refined")," will be generated inside of a newtype. If you don't want this, you can mark the type with the ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap")," trait."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@trait(selector: "string")\nstructure emailFormat {}\n\n@emailFormat\n@unwrap\nstring Email\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default, smithy4s renders collection types as unwrapped EXCEPT when the collection has been refined. In this case, the collection will be rendered within a newtype by default. If you wish your refined collection be rendered unwrapped, you can accomplish this using the same ",(0,i.kt)("inlineCode",{parentName:"p"},"@unwrap")," trait annotation on it.")))}m.isMDXComponent=!0}}]);