"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:r,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const s={sidebar_label:"Openapi",title:"Openapi"},i=void 0,a={unversionedId:"protocols/simple-rest-json/openapi",id:"protocols/simple-rest-json/openapi",title:"Openapi",description:'At build-time, when encountering a service annotated with the alloy#simpleRestJson protocol, Smithy4s will automatically generate an openapi "view" for this service.',source:"@site/../docs/target/jvm-2.13/mdoc/03-protocols/04-simple-rest-json/04-openapi.md",sourceDirName:"03-protocols/04-simple-rest-json",slug:"/protocols/simple-rest-json/openapi",permalink:"/smithy4s/docs/protocols/simple-rest-json/openapi",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/03-protocols/04-simple-rest-json/04-openapi.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Openapi",title:"Openapi"},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/smithy4s/docs/protocols/simple-rest-json/client"},next:{title:"Compliance Tests",permalink:"/smithy4s/docs/protocols/compliance-tests"}},l={},p=[{value:"Swagger UI",id:"swagger-ui",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At build-time, when encountering a service annotated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"alloy#simpleRestJson"),' protocol, Smithy4s will automatically generate an openapi "view" for this service.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'namespace smithy4s.example\n\nuse alloy#simpleRestJson\n\n@simpleRestJson\nservice HelloWorldService {\n  version: "1.0.0"\n  operations: [Hello]\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"smithy4s-http4s-swagger")," module provides a one liner function to serve swagger-ui using that generated openapi view. By default, the documentation is routed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," path."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  // version sourced from the plugin\n  "com.disneystreaming.smithy4s"  %% "smithy4s-http4s-swagger" % smithy4sVersion.value\n)\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Docs.scala"),", create an instance of the documentation ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpRoutes"),". There are multiple ways to do that. Pick the one you need:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import org.http4s._\nimport cats.effect.IO\n// the package under which the scala code was generated\nimport smithy4s.hello._\n\nobject Docs {\n  //simplest\n  val myDocRoutes: HttpRoutes[IO] =\n    smithy4s.http4s.swagger.docs[IO](HelloWorldService)\n\n  // documentation served at /custom-docs\n  val customPath: HttpRoutes[IO] =\n    smithy4s.http4s.swagger.docs.withPath("custom-docs")(HelloWorldService)\n\n  // documentation served at /docs with multiple service specification defined.\n  val multipleServices: HttpRoutes[IO] =\n    smithy4s.http4s.swagger.docs[IO](HelloWorldService, HelloWorldService)\n\n  // documentation served at /custom-docs with swagger assets from `/swagger-ui-path`\n  // (from the classpath) being used.\n  val customSetup =\n     smithy4s.http4s.swagger.docs[IO]\n      .withPath("custom-docs")\n      .withSwaggerUiResources("/META-INF/custom-swagger-ui")(HelloWorldService)\n}\n')),(0,r.kt)("p",null,"As a reminder, http4s' ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpRoutes")," can be composed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<+>")," operator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import smithy4s.http4s._\nimport smithy4s.http4s.swagger.docs\nimport cats.effect.IO\nimport cats.implicits._\nimport org.http4s.implicits._\nimport smithy4s.hello._\n\n// ...\nval docRoutes = docs[IO](HelloWorldService)\nval app = SimpleRestJsonBuilder\n  .routes(HelloWorldImpl)\n  .make\n  .map(serviceRoutes => docRoutes <+> serviceRoutes)\n  .map(_.orNotFound)\n")),(0,r.kt)("h2",{id:"swagger-ui"},"Swagger UI"),(0,r.kt)("p",null,"When you visit your documentation page, you'll be served with a Swagger UI application that looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Swagger UI preview",src:n(1673).Z,width:"1470",height:"602"})),(0,r.kt)("p",null,"If your documentation route supports multiple service, the dropdown in the top bar (top right) should allow you to select other specifications:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Swagger UI specification dropdown selection",src:n(7033).Z,width:"610",height:"87"})))}u.isMDXComponent=!0},7033:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/swagger-ui-dropdown-1ad491502e4aa34fa52369cb3c412605.png"},1673:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/swagger-ui-fe440bb646500cc5c76ea4e5978a0b09.png"}}]);