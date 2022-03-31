"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38379],{35318:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(27378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||l;return t?n.createElement(d,o(o({ref:r},c),{},{components:t})):n.createElement(d,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},87735:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=t(25773),a=t(30808),l=(t(27378),t(35318)),o=["components"],i={title:"log-rotate"},s=void 0,p={unversionedId:"plugins/log-rotate",id:"version-2.4/plugins/log-rotate",isDocsHomePage:!1,title:"log-rotate",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.4/plugins/log-rotate.md",sourceDirName:"plugins",slug:"/plugins/log-rotate",permalink:"/docs/apisix/2.4/plugins/log-rotate",editUrl:null,tags:[],version:"2.4",frontMatter:{title:"log-rotate"},sidebar:"version-2.4/docs",previous:{title:"syslog",permalink:"/docs/apisix/2.4/plugins/syslog"},next:{title:"Admin API",permalink:"/docs/apisix/2.4/admin-api"}},c=[{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[{value:"Example",id:"example",children:[]}]}],u={toc:c};function g(e){var r=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,"The plug-in can automatically rotate access and error log files in the log directory at regular intervals."),(0,l.kt)("p",null,"Specify how often logs are rotated every interval and how many logs have been kept recently.\nWhen the number of log files exceeds the remaining number, the old files are automatically deleted."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"60 * 60"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"How often to rotate the log in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_kept"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"24 * 7"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"How many historical logs can be kept at most. When this number is exceeded, old files will be deleted automatically.")))),(0,l.kt)("p",null,"After this plug-in is enabled, the log file will be automatically rotated according to the configuration.\nFor example, the following example is a sample based on ",(0,l.kt)("inlineCode",{parentName:"p"},"interval: 10")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"max_kept: 10"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ll logs\ntotal 44K\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-32-40_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:32 2020-03-20_20-32-40_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-32-50_access.log\n-rw-r--r--. 1 resty resty 2.8K Mar 20 20:32 2020-03-20_20-32-50_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-33-00_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-00_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-10_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-10_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-20_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-20_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-30_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-30_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-40_access.log\n-rw-r--r--. 1 resty resty 2.8K Mar 20 20:33 2020-03-20_20-33-40_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-50_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-50_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-34-00_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:34 2020-03-20_20-34-00_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:34 2020-03-20_20-34-10_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:34 2020-03-20_20-34-10_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:34 access.log\n-rw-r--r--. 1 resty resty 1.5K Mar 20 21:31 error.log\n")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("h4",{id:"enable-plugin"},"Enable plugin"),(0,l.kt)("p",null,"Enable the plug-in ",(0,l.kt)("inlineCode",{parentName:"p"},"log-rotate")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", then this plugin can work fine.\nIt does not need to be bound in any route or service."),(0,l.kt)("p",null,"Here is an example of ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n    # the plugins you enabled\n    - log-rotate\n\nplugin_attr:\n    log-rotate:\n        interval: 3600    # rotate interval (unit: second)\n        max_kept: 168     # max number of log files will be kept\n")),(0,l.kt)("h4",{id:"disable-plugin"},"Disable plugin"),(0,l.kt)("p",null,"Remove the plugin ",(0,l.kt)("inlineCode",{parentName:"p"},"log-rotate")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."))}g.isMDXComponent=!0}}]);