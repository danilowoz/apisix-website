"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71697],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6436:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=n(25773),a=n(30808),r=(n(27378),n(35318)),o=["components"],l={title:"Plugin"},s=void 0,p={unversionedId:"terminology/plugin",id:"terminology/plugin",isDocsHomePage:!1,title:"Plugin",description:"\x3c!--",source:"@site/docs/apisix/terminology/plugin.md",sourceDirName:"terminology",slug:"/terminology/plugin",permalink:"/zh/docs/apisix/next/terminology/plugin",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/terminology/plugin.md",tags:[],version:"current",frontMatter:{title:"Plugin"},sidebar:"docs",previous:{title:"Global Rule",permalink:"/zh/docs/apisix/next/terminology/global-rule"},next:{title:"Route",permalink:"/zh/docs/apisix/next/terminology/route"}},c=[{value:"Description",id:"description",children:[{value:"Hot reload in stand-alone mode",id:"hot-reload-in-stand-alone-mode",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This represents the configuration of the plugins that are executed during the HTTP request/response lifecycle. A ",(0,r.kt)("strong",{parentName:"p"},"Plugin")," configuration can be bound directly to a ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/terminology/route"},(0,r.kt)("inlineCode",{parentName:"a"},"Route")),", a ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/terminology/service"},(0,r.kt)("inlineCode",{parentName:"a"},"Service"))," or a ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/terminology/consumer"},(0,r.kt)("inlineCode",{parentName:"a"},"Consumer")),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While configuring the same plugin, only one copy of the configuration is valid. The order of precedence is always ",(0,r.kt)("inlineCode",{parentName:"p"},"Consumer")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Service"),"."),(0,r.kt)("p",{parentName:"div"},"While ",(0,r.kt)("a",{parentName:"p",href:"./apisix.md#configuring-apisix"},"configuring APISIX"),", you can declare the Plugins that are supported by the local APISIX node. This acts as a whitelisting mechanism as Plugins that are not in this whitelist will be automatically ignored. So, this feature can be used to temporarily turn off/turn on specific plugins."),(0,r.kt)("h2",{parentName:"div",id:"adding-a-plugin"},"Adding a Plugin"),(0,r.kt)("p",{parentName:"div"},"For adding new plugins based on existing plugins, copy the data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," node from the default configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," to your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),")."),(0,r.kt)("p",{parentName:"div"},"In a request, a Plugin is only executed once. This is true even if it is bound to multiple different objects like Routes and Services. The order in which Plugins are run is determined by its configured priorities:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local _M = {\n    version = 0.1,\n    priority = 0, -- the priority of this plugin will be 0\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n")),(0,r.kt)("p",{parentName:"div"},"A Plugin configuration is submitted as part of the Route or Service and is placed under ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins"),". It internally uses the Plugin name as the hash key to holding the configuration items for the different Plugins."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        },\n        "prometheus": {}\n    }\n}\n')),(0,r.kt)("p",{parentName:"div"},"Not all Plugins have specific configuration items (for example, ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/prometheus/"},"prometheus"),"). In such cases, an empty object identifier can be used."),(0,r.kt)("p",{parentName:"div"},"A warning level log as shown below indicates that the request was rejected by the Plugin."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ip-restriction exits with http status code 403\n")),(0,r.kt)("h2",{parentName:"div",id:"hot-reload"},"Hot Reload"),(0,r.kt)("p",{parentName:"div"},"APISIX Plugins are hot-loaded. This means that there is no need to restart the service if you add, delete, modify plugins, or even if you update the plugin code. To hot-reload, you can send an HTTP request through the ",(0,r.kt)("a",{parentName:"p",href:"../admin-api.md"},"Admin API"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")))),(0,r.kt)("p",null,"If a configured Plugin is disabled, then its execution will be skipped."),(0,r.kt)("h3",{id:"hot-reload-in-stand-alone-mode"},"Hot reload in stand-alone mode"),(0,r.kt)("p",null,"For hot-reloading in stand-alone mode, see the plugin related section in ",(0,r.kt)("a",{parentName:"p",href:"../stand-alone.md"},"stand alone mode"),"."))}u.isMDXComponent=!0}}]);