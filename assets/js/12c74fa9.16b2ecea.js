"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27526],{35318:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),g=d(n),m=r,k=g["".concat(p,".").concat(m)]||g[m]||s[m]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},35017:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],o={title:"error-log-logger"},p=void 0,d={unversionedId:"plugins/error-log-logger",id:"version-2.13/plugins/error-log-logger",isDocsHomePage:!1,title:"error-log-logger",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/error-log-logger.md",sourceDirName:"plugins",slug:"/plugins/error-log-logger",permalink:"/docs/apisix/plugins/error-log-logger",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"error-log-logger"},sidebar:"version-2.13/docs",previous:{title:"log-rotate",permalink:"/docs/apisix/plugins/log-rotate"},next:{title:"sls-logger",permalink:"/docs/apisix/plugins/sls-logger"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable And Disable",id:"how-to-enable-and-disable",children:[{value:"Enable plugin",id:"enable-plugin",children:[]},{value:"Disable plugin",id:"disable-plugin",children:[]}]},{value:"How to set the TCP server address",id:"how-to-set-the-tcp-server-address",children:[]},{value:"How to set the SkyWalking OAP server address",id:"how-to-set-the-skywalking-oap-server-address",children:[]},{value:"How to set the clickhouse",id:"how-to-set-the-clickhouse",children:[]}],s={toc:u};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"error-log-logger")," is a plugin which pushes the log data of APISIX's ",(0,l.kt)("inlineCode",{parentName:"p"},"error.log")," to TCP servers or ",(0,l.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/"},"Apache SkyWalking"),"."),(0,l.kt)("p",null,"This plugin will provide the ability to send the log data which selected by the level to Monitoring tools and other TCP servers, and SkyWalking over HTTP."),(0,l.kt)("p",null,"This plugin provides the ability as a batch to push the log data to your external TCP servers or monitoring tools. If not receive the log data, don't worry, it will automatically send the logs after the timer function expires in our Batch Processor."),(0,l.kt)("p",null,"For more info on Batch-Processor in Apache APISIX please refer.\n",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor"},"Batch-Processor")),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IP address or the Hostname of the TCP server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.port"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"Target upstream port.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.tls"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Control whether to perform SSL verification.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.tls_server_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The server name for the new TLS extension  SNI.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skywalking.endpoint_addr"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:12900/v3/logs"},"http://127.0.0.1:12900/v3/logs")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the http endpoint of Skywalking.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skywalking.service_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"APISIX"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"service name for skywalking reporter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skywalking.service_instance_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"APISIX Instance Name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Service instance name for skywalking reporter, set it to ",(0,l.kt)("inlineCode",{parentName:"td"},"$hostname")," to get local hostname directly.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.endpoint_addr"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:8213"},"http://127.0.0.1:8213")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse HTTP endpoint, default ",(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:8213"},"http://127.0.0.1:8213"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.database"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse for error log DB name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.logtable"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse for error log table name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("inlineCode",{parentName:"td"},"Deprecated"),", use ",(0,l.kt)("inlineCode",{parentName:"td"},"tcp.host")," instead) IP address or the Hostname of the TCP server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("inlineCode",{parentName:"td"},"Deprecated"),", use ",(0,l.kt)("inlineCode",{parentName:"td"},"tcp.port")," instead) Target upstream port.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("inlineCode",{parentName:"td"},"Deprecated"),", use ",(0,l.kt)("inlineCode",{parentName:"td"},"tcp.tls")," instead) Control whether to perform SSL verification.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_server_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"(",(0,l.kt)("inlineCode",{parentName:"td"},"Deprecated"),", use ",(0,l.kt)("inlineCode",{parentName:"td"},"tcp.tls_server_name")," instead) The server name for the new TLS extension SNI.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout for the upstream to connect and send, unit: second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"Time for keeping the cosocket alive, unit: second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"level"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"WARN"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The filter's log level, default warn, choose the level in ",'["STDERR", "EMERG", "ALERT", "CRIT", "ERR", "ERROR", "WARN", "NOTICE", "INFO", "DEBUG"]',", the value ERR equals ERROR.")))),(0,l.kt)("p",null,"The plugin supports the use of batch processors to aggregate and process entries(logs/data) in a batch. This avoids frequent data submissions by the plugin, which by default the batch processor submits data every ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"1000"),". For information or custom batch processor parameter settings, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor#configuration"},"Batch-Processor")," configuration section."),(0,l.kt)("h2",{id:"how-to-enable-and-disable"},"How To Enable And Disable"),(0,l.kt)("p",null,"The error-log-logger is a global plugin of APISIX."),(0,l.kt)("h3",{id:"enable-plugin"},"Enable plugin"),(0,l.kt)("p",null,"Enable the plug-in ",(0,l.kt)("inlineCode",{parentName:"p"},"error-log-logger")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", then this plugin can work fine.\nIt does not need to be bound in any route or service."),(0,l.kt)("p",null,"Here is an example of ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:                          # plugin list\n  ... ...\n  - request-id\n  - hmac-auth\n  - api-breaker\n  - error-log-logger              # enable plugin `error-log-logger\n")),(0,l.kt)("h3",{id:"disable-plugin"},"Disable plugin"),(0,l.kt)("p",null,"Remove or comment out the plugin ",(0,l.kt)("inlineCode",{parentName:"p"},"error-log-logger")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:                          # plugin list\n  ... ...\n  - request-id\n  - hmac-auth\n  - api-breaker\n  #- error-log-logger              # enable plugin `error-log-logger\n")),(0,l.kt)("h2",{id:"how-to-set-the-tcp-server-address"},"How to set the TCP server address"),(0,l.kt)("p",null,"Step: update the attributes of the plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/error-log-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "tcp": {\n    "host": "127.0.0.1",\n    "port": 1999\n  },\n  "inactive_timeout": 1\n}\'\n')),(0,l.kt)("h2",{id:"how-to-set-the-skywalking-oap-server-address"},"How to set the SkyWalking OAP server address"),(0,l.kt)("p",null,"Step: update the attributes of the plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/error-log-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "skywalking": {\n    "endpoint_addr":"http://127.0.0.1:12800/v3/logs"\n  },\n  "inactive_timeout": 1\n}\'\n')),(0,l.kt)("h2",{id:"how-to-set-the-clickhouse"},"How to set the clickhouse"),(0,l.kt)("p",null,"The plugin sends the error log as a string to the ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," field of the clickhouse table.\n",(0,l.kt)("em",{parentName:"p"},"TODO Here save error log as a whole string to clickhouse 'data' column. We will add more columns in the future."),"\nStep: update the attributes of the plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/error-log-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "clickhouse": {\n      "user": "default",\n      "password": "a",\n      "database": "error_log",\n      "logtable": "t",\n      "endpoint_addr": "http://127.0.0.1:8123"\n  }\n}\'\n')))}g.isMDXComponent=!0}}]);