"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23936],{35318:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return f}});var r=t(27378);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=r.createContext({}),a=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},p=function(n){var e=a(n.components);return r.createElement(l.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),d=a(t),f=i,g=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(g,c(c({ref:e},p),{},{components:t})):r.createElement(g,c({ref:e},p))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,c=new Array(o);c[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=n,u.mdxType="string"==typeof n?n:i,c[1]=u;for(var a=2;a<o;a++)c[a]=t[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},24807:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return a},toc:function(){return p}});var r=t(25773),i=t(30808),o=(t(27378),t(35318)),c=["components"],u={title:"Plugin Config"},l=void 0,a={unversionedId:"architecture-design/plugin-config",id:"version-2.5/architecture-design/plugin-config",isDocsHomePage:!1,title:"Plugin Config",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.5/architecture-design/plugin-config.md",sourceDirName:"architecture-design",slug:"/architecture-design/plugin-config",permalink:"/docs/apisix/2.5/architecture-design/plugin-config",editUrl:null,tags:[],version:"2.5",frontMatter:{title:"Plugin Config"},sidebar:"version-2.5/docs",previous:{title:"Global rule",permalink:"/docs/apisix/2.5/architecture-design/global-rule"},next:{title:"Router",permalink:"/docs/apisix/2.5/architecture-design/router"}},p=[],s={toc:p};function d(n){var e=n.components,t=(0,i.Z)(n,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To reuse common plugin configurations, you can extract them into a plugin config and\nbind it with a route directly."),(0,o.kt)("p",null,"For instance, you can do something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# create a plugin config\n$ curl http://127.0.0.1:9080/apisix/admin/plugin_configs/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "desc": "blah",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\'\n\n# bind it to route\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"When we can't find the corresponding plugin config with the id, the requests hit the route will be terminated with HTTP status code 503."),(0,o.kt)("p",null,"When a route already have ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," field configured, the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," in the plugin config\nwill be merged into it. The same plugin in the plugin config will override one in the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins"),"."),(0,o.kt)("p",null,"For example, when we configure a plugin config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "desc": "I am plugin_config 1",\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n    "plugins": {\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 20,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"is equal to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);