"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19231],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42459:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],o={title:"splunk-hec-logging"},u=void 0,p={unversionedId:"plugins/splunk-hec-logging",id:"version-2.12/plugins/splunk-hec-logging",isDocsHomePage:!1,title:"splunk-hec-logging",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.12/plugins/splunk-hec-logging.md",sourceDirName:"plugins",slug:"/plugins/splunk-hec-logging",permalink:"/docs/apisix/2.12/plugins/splunk-hec-logging",editUrl:null,tags:[],version:"2.12",frontMatter:{title:"splunk-hec-logging"},sidebar:"version-2.12/docs",previous:{title:"google-cloud-logging",permalink:"/docs/apisix/2.12/plugins/google-cloud-logging"},next:{title:"serverless",permalink:"/docs/apisix/2.12/plugins/serverless"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"Full configuration",id:"full-configuration",children:[]},{value:"Minimize configuration",id:"minimize-configuration",children:[]}]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},(0,l.kt)("strong",{parentName:"a"},"Name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,l.kt)("strong",{parentName:"a"},"How To Enable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test-plugin"},(0,l.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,l.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," plugin is used to forward the request log of ",(0,l.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Splunk HTTP Event Collector (HEC)")," for analysis and storage. After the plugin is enabled, ",(0,l.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," will obtain request context information in ",(0,l.kt)("inlineCode",{parentName:"p"},"Log Phase")," serialize it into ",(0,l.kt)("a",{parentName:"p",href:"https://docs.splunk.com/Documentation/Splunk/latest/Data/FormateventsforHTTPEventCollector#Event_metadata"},"Splunk Event Data format")," and submit it to the batch queue. When the maximum processing capacity of each batch of the batch processing queue or the maximum time to refresh the buffer is triggered, the data in the queue will be submitted to ",(0,l.kt)("inlineCode",{parentName:"p"},"Splunk HEC"),"."),(0,l.kt)("p",null,"For more info on Batch-Processor in Apache APISIX please refer to:\n",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/2.12/batch-processor"},"Batch-Processor")),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Splunk HEC endpoint configuration info")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.uri"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Splunk HEC event collector API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.token"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Splunk HEC authentication token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.channel"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Splunk HEC send data channel identifier, refer to: ",(0,l.kt)("a",{parentName:"td",href:"https://docs.splunk.com/Documentation/Splunk/8.2.3/Data/AboutHECIDXAck"},"About HTTP Event Collector Indexer Acknowledgment"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Splunk HEC send data timeout, time unit: (seconds)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"enable ",(0,l.kt)("inlineCode",{parentName:"td"},"SSL")," verification, option as per ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"OpenResty docs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"max number of retries before removing from the processing pipe line")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry_delay"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"number of seconds the process execution should be delayed if the execution fails")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buffer_duration"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"max age in seconds of the oldest entry in a batch before the batch must be processed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inactive_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"max age in seconds when the buffer will be flushed if inactive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_max_size"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"max size of each batch")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"The following is an example of how to enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," for a specific route."),(0,l.kt)("h3",{id:"full-configuration"},"Full configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "splunk-hec-logging":{\n            "endpoint":{\n                "uri":"http://127.0.0.1:8088/services/collector",\n                "token":"BD274822-96AA-4DA6-90EC-18940FB2414C",\n                "channel":"FE0ECFAD-13D5-401B-847D-77833BD77131",\n                "timeout":60\n            },\n            "buffer_duration":60,\n            "max_retry_count":0,\n            "retry_delay":1,\n            "inactive_timeout":2,\n            "batch_max_size":10\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/splunk.do"\n}\'\n')),(0,l.kt)("h3",{id:"minimize-configuration"},"Minimize configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "splunk-hec-logging":{\n            "endpoint":{\n                "uri":"http://127.0.0.1:8088/services/collector",\n                "token":"BD274822-96AA-4DA6-90EC-18940FB2414C"\n            }\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/splunk.do"\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Send request to route configured with the ",(0,l.kt)("inlineCode",{parentName:"li"},"splunk-hec-logging")," plugin")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/splunk.do?q=hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Login to Splunk Dashboard to search and view")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.12/docs/assets/images/plugin/splunk-hec-admin-en.png",alt:"splunk hec search view"})),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"Disabling the ",(0,l.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," plugin is very simple, just remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," configuration corresponding to ",(0,l.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);