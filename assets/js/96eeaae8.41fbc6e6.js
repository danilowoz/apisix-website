"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10852],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1936:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(25773),i=n(30808),o=(n(27378),n(35318)),c=["components"],a={title:"Script"},p=void 0,l={unversionedId:"terminology/script",id:"terminology/script",isDocsHomePage:!1,title:"Script",description:"\x3c!--",source:"@site/docs/apisix/terminology/script.md",sourceDirName:"terminology",slug:"/terminology/script",permalink:"/docs/apisix/next/terminology/script",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/terminology/script.md",tags:[],version:"current",frontMatter:{title:"Script"},sidebar:"docs",previous:{title:"Router",permalink:"/docs/apisix/next/terminology/router"},next:{title:"Service",permalink:"/docs/apisix/next/terminology/service"}},s=[{value:"Description",id:"description",children:[]}],u={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Scripts lets you write arbitrary Lua code or directly call existing plugins and execute them during the HTTP request/response lifecycle."),(0,o.kt)("p",null,"A Script configuration can be directly bound to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/next/terminology/route"},"Route"),"."),(0,o.kt)("p",null,"Scripts and ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/next/terminology/plugin"},"Plugins")," are mutually exclusive, and a Script is executed before a Plugin. This means that after configuring a Script, the Plugin configured on the Route will ",(0,o.kt)("strong",{parentName:"p"},"not")," be executed."),(0,o.kt)("p",null,"Scripts also have a concept of execution phase which supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"access"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"header_filter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"body_filter"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," phase. The corresponding phase will be executed automatically by the system in the Script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "script": "local _M = {} \\n function _M.access(api_ctx) \\n ngx.log(ngx.INFO,\\"hit access phase\\") \\n end \\nreturn _M"\n}\n')))}f.isMDXComponent=!0}}]);