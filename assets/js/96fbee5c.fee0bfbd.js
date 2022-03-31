"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85102],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9751:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(25773),i=n(30808),o=(n(27378),n(35318)),p=["components"],a={title:"Plugin interceptors"},c=void 0,l={unversionedId:"plugin-interceptors",id:"version-2.6/plugin-interceptors",isDocsHomePage:!1,title:"Plugin interceptors",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/plugin-interceptors.md",sourceDirName:".",slug:"/plugin-interceptors",permalink:"/docs/apisix/2.6/plugin-interceptors",editUrl:null,tags:[],version:"2.6",frontMatter:{title:"Plugin interceptors"},sidebar:"version-2.6/docs",previous:{title:"Plugin Develop",permalink:"/docs/apisix/2.6/plugin-develop"},next:{title:"Debug Function",permalink:"/docs/apisix/2.6/debug-function"}},u=[],s={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some plugins will register API to serve their purposes."),(0,o.kt)("p",null,"Since these API are not added as regular ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/2.6/admin-api"},"Route"),", we can't add\nplugins to protect them. To solve the problem, we add a new concept called 'interceptors'\nto run rules to protect them."),(0,o.kt)("p",null,"Here is an example to limit the access of ",(0,o.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics")," (a route introduced via plugin prometheus)\nto clients in ",(0,o.kt)("inlineCode",{parentName:"p"},"10.0.0.0/24"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/prometheus -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n{\n    "interceptors": [\n        {\n            "name": "ip-restriction",\n            "conf": {\n                "whitelist": ["10.0.0.0/24"]\n            }\n        }\n    ]\n}\'\n')),(0,o.kt)("p",null,"You can see that the interceptors are configured like the plugins. The ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," is\nthe name of plugin which you want to run and the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf")," is the configuration of the\nplugin."),(0,o.kt)("p",null,"Currently we only support a subset of plugins which can be run as interceptors."),(0,o.kt)("p",null,"Supported interceptors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/apisix/2.6/plugins/ip-restriction"},"ip-restriction"))))}f.isMDXComponent=!0}}]);