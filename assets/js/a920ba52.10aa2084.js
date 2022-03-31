"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57202],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=["components"],o={title:"Making It Simple, Apache APISIX Integrates ClickHouse to Improve Logging Efficiency",authors:[{name:"Zhendong Qi",title:"Author",url:"https://github.com/zhendongcmss",image_url:"https://github.com/zhendongcmss.png"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png"}],keywords:["Apache APISIX","API Gateway","ClickHouse","Logging","Ecosystem"],description:"The author of this article, Zhendong Qi, is from China Mobile Cloud Competence Center. He has extensive experience in distributed object storage software development and has participated in the construction of several resource pools in the mobile cloud. This article describes how community contributor Zhendong Qi contributed `clickhouse-logger` to Apache APISIX and how he used the plugin to simplify the business architecture and improve the efficiency of logging.",tags:["Technology","Logging","Ecosystem"]},s=void 0,u={permalink:"/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier",source:"@site/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier.md",title:"Making It Simple, Apache APISIX Integrates ClickHouse to Improve Logging Efficiency",description:"The author of this article, Zhendong Qi, is from China Mobile Cloud Competence Center. He has extensive experience in distributed object storage software development and has participated in the construction of several resource pools in the mobile cloud. This article describes how community contributor Zhendong Qi contributed `clickhouse-logger` to Apache APISIX and how he used the plugin to simplify the business architecture and improve the efficiency of logging.",date:"2022-03-04T00:00:00.000Z",formattedDate:"March 4, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Logging",permalink:"/blog/tags/logging"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:6.615,truncated:!0,authors:[{name:"Zhendong Qi",title:"Author",url:"https://github.com/zhendongcmss",image_url:"https://github.com/zhendongcmss.png",imageURL:"https://github.com/zhendongcmss.png"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png",imageURL:"https://github.com/yzeng25.png"}],prevItem:{title:"How to Integrate API Gateway with Eureka?",permalink:"/blog/2022/03/05/apisix-integration-eureka-service-discovery"},nextItem:{title:"Apache APISIX and CoreDNS open new doors for service discovery",permalink:"/blog/2022/03/04/apisix-uses-coredns-enable-service-discovery"}},c={authorsImageUrls:[void 0,void 0]},p=[{value:"Background Information",id:"background-information",children:[]},{value:"How It Works",id:"how-it-works",children:[]},{value:"How to Use the ClickHouse Plugin",id:"how-to-use-the-clickhouse-plugin",children:[{value:"Enable the ClickHouse Plugin",id:"enable-the-clickhouse-plugin",children:[]},{value:"Test the ClickHouse Plugin",id:"test-the-clickhouse-plugin",children:[]},{value:"Advanced Skill: Configure Log Format",id:"advanced-skill-configure-log-format",children:[]},{value:"Advanced Skill: Connect Grafana with ClickHouse",id:"advanced-skill-connect-grafana-with-clickhouse",children:[]},{value:"Disable the ClickHouse Plugin",id:"disable-the-clickhouse-plugin",children:[]}]},{value:"Summary",id:"summary",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The author of this article, Zhendong Qi, is from China Mobile Cloud Competence Center. He has extensive experience in distributed object storage software development and has participated in the construction of several resource pools in the mobile cloud. This article describes how community contributor Zhendong Qi contributed ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," to Apache APISIX and how he used the plugin to simplify the business architecture and improve the efficiency of logging.")),(0,i.kt)("h2",{id:"background-information"},"Background Information"),(0,i.kt)("p",null,"Apache APISIX is a dynamic, real-time, high-performance API gateway that provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more. It not only has many useful plugins, but also supports plugin dynamic change and hot reload."),(0,i.kt)("p",null,"Developed by Yandex and open sourced in 2016, ClickHouse is not only a database, but also a database management system that allows creating tables and databases, loading data and running queries at runtime without reconfiguring or restarting services."),(0,i.kt)("p",null,"As more and more companies start to migrate their business to the cloud, how to efficiently implement log sending and receiving and log analysis to enhance the observabilities of the system becomes a challenge. China Mobile Cloud Competence Center, as a company providing public cloud services, the architecture of the initial Apache APISIX-based business log sending and receiving and analysis system is roughly like this."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646363723740-f92d6a39-64e0-4464-8c44-c73832362bf6.png",alt:"initial bussiness architecture"})),(0,i.kt)("p",null,"As the business grows, the above solution is not only oddly expensive to maintain, but also difficult to meet our needs for fine-grained data analysis. Since the data received by rsyslog is a string rather than a JSON format log, it makes log analysis difficult."),(0,i.kt)("p",null,'There is a famous saying in computing that "any problem can be solved by adding an indirect middle layer". We actually considered adding another intermediate layer between ',(0,i.kt)("inlineCode",{parentName:"p"},"tcp-logger")," and rsyslog to convert strings to JSON, but this is obviously not a permanent solution."),(0,i.kt)("p",null,'So let\'s look at the problem differently: if we consider the existing architecture of "tcp-logger+rsyslog+Promtail+Loki" as a huge middle layer, then no matter how many additional middle layers we add in between, it only solves the immediate problem. In the meantime, it makes it more bloated and difficult to maintain. Is there a product on the market that can directly replace "tcp-logger+rsyslog+Promtail+Loki"?'),(0,i.kt)("p",null,"With this question in mind, we spent some time researching and ended up choosing ClickHouse for several reasons."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"ClickHouse provides HTTP interface for easy calling of other modules."),(0,i.kt)("li",{parentName:"ol"},"ClickHouse-based analysis toolbox is very mature and can meet our needs for log analysis."),(0,i.kt)("li",{parentName:"ol"},"ClickHouse supports the use of object storage as a storage engine, very convenient."),(0,i.kt)("li",{parentName:"ol"},'There is no need to repeat the "tool-building" process.')),(0,i.kt)("p",null,"There is only one problem left to solve: how to implement the interface between Apache APISIX and ClickHouse? A good way to do this is in the form of a plugin. As a member of the Apache APISIX community, I rarely speak up in the community. Seeing the recent progress in the ecosystem of Apache APISIX, I was actually a bit excited to use Apache APISIX, but I haven't contributed any code to the community yet, so I thought I'd like to take this opportunity to add some fire to the community's ecosystem development."),(0,i.kt)("h2",{id:"how-it-works"},"How It Works"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," plugin acts as an middle layer between Apache APISIX and ClickHouse. As mentioned above, we use Apache APISIX as a seven-layer load balancer and requests passing through Apache APISIX generate logs, such as access log and error log. The ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," collects the logs and organizes them according to the log format set by its own metadata. Finally, it relies on a batch processor to send the collated logs to ClickHouse in bulk."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646363936994-c2646095-1ea4-4c1f-8cad-1dcecfc41df3.png",alt:"clickhouse-logger architecture"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-logger"),' serves as a replacement for "tcp-logger+rsyslog+Promtail+Loki" in our scenario. Eliminating the need for format conversion and data forwarding between multiple components, log data requests can be pushed directly to the ClickHouse server.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646364005040-93d70286-e7e6-4fb5-a164-1de1c865ce2b.png",alt:"improved bussiness architecture"})),(0,i.kt)("h2",{id:"how-to-use-the-clickhouse-plugin"},"How to Use the ClickHouse Plugin"),(0,i.kt)("p",null,"Here is a sample process to enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," plugin in a route."),(0,i.kt)("h3",{id:"enable-the-clickhouse-plugin"},"Enable the ClickHouse Plugin"),(0,i.kt)("p",null,"Run the ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," command to enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," plugin for the specified route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "clickhouse-logger": {\n                "user": "default",\n                "password": "a",\n                "database": "default",\n                "logtable": "test",\n                "endpoint_addr": "http://127.0.0.1:8123"\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,i.kt)("p",null,"The parameters of clickhouse-logger are listed in the chart below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Range"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"endpoint_addr"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"ClickHouse server endpoint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"database"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"The database used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"logtable"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the table to write to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"user"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"User for ClickHouse.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Password for ClickHouse.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"The time to keep the connection active after sending the request.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},'"clickhouse-logger"'),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique identifier that identifies the logger.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"batch_max_size"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"100"),(0,i.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"Set the maximum number of logs to be sent each time, and when the maximum number of logs reaches the set value, all logs will be automatically pushed to ",(0,i.kt)("inlineCode",{parentName:"td"},"clickhouse"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum number of retries before being removed from the processing pipeline.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"retry_delay"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,i.kt)("td",{parentName:"tr",align:null},"If the execution fails, the execution of the process should be delayed for a number of seconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"[true,false]"),(0,i.kt)("td",{parentName:"tr",align:null},"Validate the certificate.")))),(0,i.kt)("h3",{id:"test-the-clickhouse-plugin"},"Test the ClickHouse Plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," command to test the plugin."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the following result is returned, it means it is successfully enabled."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\nhello, world\n")))),(0,i.kt)("h3",{id:"advanced-skill-configure-log-format"},"Advanced Skill: Configure Log Format"),(0,i.kt)("p",null,"You can set a custom log format using the ",(0,i.kt)("inlineCode",{parentName:"p"},"log_format")," metadata, as shown in the example below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"log_format")," metadata parameter."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/clickhouse-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Declare the log format as a key-value pair in JSON format. For the value part, only strings are supported. If it starts with",(0,i.kt)("inlineCode",{parentName:"p"},"$"),", it indicates that it is to get ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/apisix-variable"},"APISIX built-in variables")," or ",(0,i.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/varindex.html"},"Nginx built-in variables"),". In particular, ",(0,i.kt)("strong",{parentName:"p"},"this setting is global"),", meaning that specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"log_format")," will take effect on all routes or services bound to ",(0,i.kt)("inlineCode",{parentName:"p"},"http-logger"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a table for ClickHouse to write in."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE default.test (\n  `host` String,\n  `client_ip` String,\n  `route_id` String,\n  `@timestamp` String,\n  PRIMARY KEY(`@timestamp`)\n) ENGINE = MergeTree()\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Execute ",(0,i.kt)("inlineCode",{parentName:"p"},"select * from default.test;")," on ClickHouse, you will get data similar to the following."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u250c\u2500host\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500client_ip\u2500\u252c\u2500route_id\u2500\u252c\u2500@timestamp\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 127.0.0.1 \u2502 127.0.0.1 \u2502    1     \u2502 2022-01-17T10:03:10+08:00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))),(0,i.kt)("h3",{id:"advanced-skill-connect-grafana-with-clickhouse"},"Advanced Skill: Connect Grafana with ClickHouse"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable the clickhouse-logger plugin globally."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/global_rules/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "clickhouse-logger": {\n            "timeout": 3,\n            "retry_delay": 1,\n            "batch_max_size": 100,\n            "user": "default",\n            "password": "a",\n            "database": "default",\n            "logtable": "t",  "max_retry_count": 1,\n            "endpoint_addr": "http://127.0.0.1:8123"\n        }\n    }\n}\'\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the log_format metadata parameter. log_format must be in the same format as the database table structure, otherwise it will cause write failure."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},' curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/clickhouse-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "upstream_header_time": "$upstream_header_time",\n        "upstream_connect_time": "$upstream_connect_time",\n        "status": "$status",\n        "host": "$host",\n        "body_bytes_sent": "$body_bytes_sent",\n        "request": "$request",\n        "remote_user": "$remote_user",\n        "client_ip": "$remote_addr",\n        "content_length": "$content_length",\n        "local_time": "$fmt_ms_time_local",\n        "http_referer": "$http_referer",\n        "http_x_amz_target": "$http_x_amz_target",\n        "http_x_request_id": "$http_x_request_id",\n        "upstream_response_time": "$upstream_response_time",\n        "upstream_status": "$upstream_status",\n        "http_user_agent": "$http_user_agent",\n        "request_time": "$request_time",\n        "upstream_addr": "$upstream_addr",\n        "http_host": "$http_host",\n        "content_type": "$content_type"\n    }\n}\'\n')))),(0,i.kt)("p",null,"Here are some screenshots of the dashboard after interfacing with Clickhouse using Grafana."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646366781343-ab2848fe-d10a-4222-a90d-79f4fe58999a.png",alt:"Grafana-1"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646366807867-4391a9ff-8b71-411c-8353-38957a5a2da1.png",alt:"Grafana-2"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646366832282-e8f24c63-c914-4051-8239-582bc3e58f50.png",alt:"Grafana-3"})),(0,i.kt)("h3",{id:"disable-the-clickhouse-plugin"},"Disable the ClickHouse Plugin"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," can be disabled by removing the appropriate configuration in the plugin configuration. Since the Apache APISIX plugin is hot-loaded, the configuration can be updated without a restart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"The above is the whole process of developing ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," for Apache APISIX, and how to implement it with Grafana to achieve the same observability with simpler architechure and worlflows. I hope more people in the community will be willing to step out of their comfort zones, switching from followers to contributors is much easier than you think."))}d.isMDXComponent=!0}}]);