"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39416],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25517:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(25773),i=n(30808),o=(n(27378),n(35318)),r=["components"],l={title:"FAQ"},s=void 0,p={unversionedId:"FAQ",id:"version-2.12/FAQ",isDocsHomePage:!1,title:"FAQ",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.12/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/apisix/2.12/FAQ",editUrl:null,tags:[],version:"2.12",frontMatter:{title:"FAQ"},sidebar:"version-2.12/docs",previous:{title:"Control API",permalink:"/docs/apisix/2.12/control-api"},next:{title:"Integration service discovery registry",permalink:"/docs/apisix/2.12/discovery"}},c=[{value:"Why a new API gateway?",id:"why-a-new-api-gateway",children:[]},{value:"What are the differences between Apache APISIX and other API gateways?",id:"what-are-the-differences-between-apache-apisix-and-other-api-gateways",children:[]},{value:"What&#39;s the performance of Apache APISIX?",id:"whats-the-performance-of-apache-apisix",children:[]},{value:"Does Apache APISIX have a user interface\uff1f",id:"does-apache-apisix-have-a-user-interface",children:[]},{value:"Can I write my own plugin?",id:"can-i-write-my-own-plugin",children:[]},{value:"Why we choose etcd as the configuration center?",id:"why-we-choose-etcd-as-the-configuration-center",children:[]},{value:"Why is it that installing Apache APISIX dependencies with Luarocks causes timeout, slow or unsuccessful installation?",id:"why-is-it-that-installing-apache-apisix-dependencies-with-luarocks-causes-timeout-slow-or-unsuccessful-installation",children:[]},{value:"How to support gray release via Apache APISIX?",id:"how-to-support-gray-release-via-apache-apisix",children:[]},{value:"How to redirect http to https via Apache APISIX?",id:"how-to-redirect-http-to-https-via-apache-apisix",children:[]},{value:"How to change the log level?",id:"how-to-change-the-log-level",children:[]},{value:"How to reload your own plugin?",id:"how-to-reload-your-own-plugin",children:[]},{value:"How to make Apache APISIX listen on multiple ports when handling HTTP or HTTPS requests?",id:"how-to-make-apache-apisix-listen-on-multiple-ports-when-handling-http-or-https-requests",children:[]},{value:"How does Apache APISIX use etcd to achieve millisecond-level configuration synchronization",id:"how-does-apache-apisix-use-etcd-to-achieve-millisecond-level-configuration-synchronization",children:[]},{value:"How to customize the Apache APISIX instance id?",id:"how-to-customize-the-apache-apisix-instance-id",children:[]},{value:"Why there are a lot of &quot;failed to fetch data from etcd, failed to read etcd dir, etcd key: xxxxxx&quot; errors in error.log?",id:"why-there-are-a-lot-of-failed-to-fetch-data-from-etcd-failed-to-read-etcd-dir-etcd-key-xxxxxx-errors-in-errorlog",children:[]},{value:"How to set up high available Apache APISIX clusters?",id:"how-to-set-up-high-available-apache-apisix-clusters",children:[]},{value:"Why does the <code>make deps</code> command fail in source installation?",id:"why-does-the-make-deps-command-fail-in-source-installation",children:[]},{value:"How to access Apache APISIX Dashboard through Apache APISIX proxy",id:"how-to-access-apache-apisix-dashboard-through-apache-apisix-proxy",children:[]},{value:"How to use route <code>uri</code> for regular matching",id:"how-to-use-route-uri-for-regular-matching",children:[]},{value:"Does the upstream node support configuring the FQDN address",id:"does-the-upstream-node-support-configuring-the-fqdn-address",children:[]},{value:"What is the <code>X-API-KEY</code> of Admin API? Can it be modified?",id:"what-is-the-x-api-key-of-admin-api-can-it-be-modified",children:[]},{value:"How to allow all IPs to access Admin API",id:"how-to-allow-all-ips-to-access-admin-api",children:[]},{value:"How to auto renew SSL cert via acme.sh",id:"how-to-auto-renew-ssl-cert-via-acmesh",children:[]},{value:"How to strip route prefix for path matching",id:"how-to-strip-route-prefix-for-path-matching",children:[]},{value:"How to fix <code>unable to get local issuer certificate</code> error",id:"how-to-fix-unable-to-get-local-issuer-certificate-error",children:[]},{value:"How to fix <code>module &#39;resty.worker.events&#39; not found</code> error",id:"how-to-fix-module-restyworkerevents-not-found-error",children:[]},{value:"What is the difference between <code>plugin-metadata</code> and <code>plugin-configs</code>",id:"what-is-the-difference-between-plugin-metadata-and-plugin-configs",children:[]}],d={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-a-new-api-gateway"},"Why a new API gateway?"),(0,o.kt)("p",null,"There are new requirements for API gateways in the field of microservices: higher flexibility, higher performance requirements, and cloud native."),(0,o.kt)("h2",{id:"what-are-the-differences-between-apache-apisix-and-other-api-gateways"},"What are the differences between Apache APISIX and other API gateways?"),(0,o.kt)("p",null,"Apache APISIX is based on etcd to save and synchronize configuration, not relational databases such as Postgres or MySQL."),(0,o.kt)("p",null,"This not only eliminates polling, makes the code more concise, but also makes configuration synchronization more real-time. At the same time, there will be no single point in the system, which is more usable."),(0,o.kt)("p",null,"In addition, Apache APISIX has dynamic routing and hot loading of plug-ins, which is especially suitable for API management under micro-service system."),(0,o.kt)("h2",{id:"whats-the-performance-of-apache-apisix"},"What's the performance of Apache APISIX?"),(0,o.kt)("p",null,"One of the goals of Apache APISIX design and development is the highest performance in the industry. Specific test data can be found here\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/2.12/benchmark"},"benchmark")),(0,o.kt)("p",null,"Apache APISIX is the highest performance API gateway with a single-core QPS of 23,000, with an average delay of only 0.6 milliseconds."),(0,o.kt)("h2",{id:"does-apache-apisix-have-a-user-interface"},"Does Apache APISIX have a user interface\uff1f"),(0,o.kt)("p",null,"Yes. Apache APISIX has an experimental feature called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"Apache APISIX Dashboard"),", which is an independent project apart from Apache APISIX. You can deploy Apache APISIX Dashboard to operate Apache APISIX through the user interface."),(0,o.kt)("h2",{id:"can-i-write-my-own-plugin"},"Can I write my own plugin?"),(0,o.kt)("p",null,"Of course, Apache APISIX provides flexible custom plugins for developers and businesses to write their own logic."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/2.12/plugin-develop"},"How to write plugin")),(0,o.kt)("h2",{id:"why-we-choose-etcd-as-the-configuration-center"},"Why we choose etcd as the configuration center?"),(0,o.kt)("p",null,"For the configuration center, configuration storage is only the most basic function, and Apache APISIX also needs the following features:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Cluster"),(0,o.kt)("li",{parentName:"ol"},"Transactions"),(0,o.kt)("li",{parentName:"ol"},"Multi-version Concurrency Control"),(0,o.kt)("li",{parentName:"ol"},"Change Notification"),(0,o.kt)("li",{parentName:"ol"},"High Performance")),(0,o.kt)("p",null,"See more ",(0,o.kt)("a",{parentName:"p",href:"https://etcd.io/docs/latest/learning/why/#comparison-chart"},"etcd why"),"."),(0,o.kt)("h2",{id:"why-is-it-that-installing-apache-apisix-dependencies-with-luarocks-causes-timeout-slow-or-unsuccessful-installation"},"Why is it that installing Apache APISIX dependencies with Luarocks causes timeout, slow or unsuccessful installation?"),(0,o.kt)("p",null,"There are two possibilities when encountering slow luarocks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Server used for luarocks installation is blocked")),(0,o.kt)("p",null,"For the first problem, you can use https_proxy or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--server")," option to specify a luarocks server that you can access or access faster.\nRun the ",(0,o.kt)("inlineCode",{parentName:"p"},"luarocks config rocks_servers")," command(this command is supported after luarocks 3.0) to see which server are available.\nFor China mainland users, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"luarocks.cn")," as the luarocks server."),(0,o.kt)("p",null,"We already provide a wrapper in the Makefile to simplify your job:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make deps ENV_LUAROCKS_SERVER=https://luarocks.cn\n")),(0,o.kt)("p",null,"If using a proxy doesn't solve this problem, you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose")," option during installation to see exactly how slow it is."),(0,o.kt)("h2",{id:"how-to-support-gray-release-via-apache-apisix"},"How to support gray release via Apache APISIX?"),(0,o.kt)("p",null,"An example, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo.com/product/index.html?id=204&page=2"),", gray release based on ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," in the query string in URL as a condition\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Group A\uff1aid <= 1000"),(0,o.kt)("li",{parentName:"ol"},"Group B\uff1aid > 1000")),(0,o.kt)("p",null,"There are two different ways to do this\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"vars")," field of route to do it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "vars": [\n        ["arg_id", "<=", "1000"]\n    ],\n    "plugins": {\n        "redirect": {\n            "uri": "/test?group_id=1"\n        }\n    }\n}\'\n\ncurl -i http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "vars": [\n        ["arg_id", ">", "1000"]\n    ],\n    "plugins": {\n        "redirect": {\n            "uri": "/test?group_id=2"\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"Here is the operator list of current ",(0,o.kt)("inlineCode",{parentName:"p"},"lua-resty-radixtree"),"\uff1a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-radixtree#operator-list"},"https://github.com/api7/lua-resty-radixtree#operator-list")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"traffic-split")," plugin to do it.")),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/2.12/plugins/traffic-split"},"traffic-split.md")," plugin documentation for usage examples."),(0,o.kt)("h2",{id:"how-to-redirect-http-to-https-via-apache-apisix"},"How to redirect http to https via Apache APISIX?"),(0,o.kt)("p",null,"An example, redirect ",(0,o.kt)("inlineCode",{parentName:"p"},"http://foo.com")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://foo.com")),(0,o.kt)("p",null,"There are several different ways to do this."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Directly use the ",(0,o.kt)("inlineCode",{parentName:"li"},"http_to_https")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"redirect")," plugin\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "host": "foo.com",\n    "plugins": {\n        "redirect": {\n            "http_to_https": true\n        }\n    }\n}\'\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Use with advanced routing rule ",(0,o.kt)("inlineCode",{parentName:"li"},"vars")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"redirect")," plugin:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "host": "foo.com",\n    "vars": [\n        [\n            "scheme",\n            "==",\n            "http"\n        ]\n    ],\n    "plugins": {\n        "redirect": {\n            "uri": "https://$host$request_uri",\n            "ret_code": 301\n        }\n    }\n}\'\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"serverless")," plugin\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "serverless-pre-function": {\n            "phase": "rewrite",\n            "functions": ["return function() if ngx.var.scheme == \\"http\\" and ngx.var.host == \\"foo.com\\" then ngx.header[\\"Location\\"] = \\"https://foo.com\\" .. ngx.var.request_uri; ngx.exit(ngx.HTTP_MOVED_PERMANENTLY); end; end"]\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"Then test it to see if it works\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -H 'Host: foo.com' http://127.0.0.1:9080/hello\n")),(0,o.kt)("p",null,"The response body should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HTTP/1.1 301 Moved Permanently\nDate: Mon, 18 May 2020 02:56:04 GMT\nContent-Type: text/html\nContent-Length: 166\nConnection: keep-alive\nLocation: https://foo.com/hello\nServer: APISIX web server\n\n<html>\n<head><title>301 Moved Permanently</title></head>\n<body>\n<center><h1>301 Moved Permanently</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,o.kt)("h2",{id:"how-to-change-the-log-level"},"How to change the log level?"),(0,o.kt)("p",null,"The default log level for Apache APISIX is ",(0,o.kt)("inlineCode",{parentName:"p"},"warn"),". However You can change the log level to ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," if you want to trace the messages print by ",(0,o.kt)("inlineCode",{parentName:"p"},"core.log.info"),"."),(0,o.kt)("p",null,"Steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modify the parameter ",(0,o.kt)("inlineCode",{parentName:"li"},'error_log_level: "warn"')," to ",(0,o.kt)("inlineCode",{parentName:"li"},'error_log_level: "info"')," in conf/config.yaml.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'nginx_config:\n  error_log_level: "info"\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Reload or restart Apache APISIX")),(0,o.kt)("p",null,"Now you can trace the info level log in logs/error.log."),(0,o.kt)("h2",{id:"how-to-reload-your-own-plugin"},"How to reload your own plugin?"),(0,o.kt)("p",null,"The Apache APISIX plugin supports hot reloading.\nSee the ",(0,o.kt)("inlineCode",{parentName:"p"},"Hot reload")," section in ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/2.12/plugins"},"plugins")," for how to do that."),(0,o.kt)("h2",{id:"how-to-make-apache-apisix-listen-on-multiple-ports-when-handling-http-or-https-requests"},"How to make Apache APISIX listen on multiple ports when handling HTTP or HTTPS requests?"),(0,o.kt)("p",null,"By default, Apache APISIX only listens on port 9080 when handling HTTP requests. If you want Apache APISIX to listen on multiple ports, you need to modify the relevant parameters in the configuration file as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify the parameter of HTTP port listen ",(0,o.kt)("inlineCode",{parentName:"p"},"node_listen")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", for example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"}," apisix:\n   node_listen:\n     - 9080\n     - 9081\n     - 9082\n")),(0,o.kt)("p",{parentName:"li"},"Handling HTTPS requests is similar, modify the parameter of HTTPS port listen ",(0,o.kt)("inlineCode",{parentName:"p"},"ssl.listen_port")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", for example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"apisix:\n  ssl:\n    listen_port:\n      - 9443\n      - 9444\n      - 9445\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reload or restart Apache APISIX"))),(0,o.kt)("h2",{id:"how-does-apache-apisix-use-etcd-to-achieve-millisecond-level-configuration-synchronization"},"How does Apache APISIX use etcd to achieve millisecond-level configuration synchronization"),(0,o.kt)("p",null,"etcd provides subscription functions to monitor whether the specified keyword or directory is changed (for example: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-etcd/blob/master/api_v3.md#watch"},"watch"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-etcd/blob/master/api_v3.md#watchdir"},"watchdir"),")."),(0,o.kt)("p",null,"Apache APISIX uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-etcd/blob/master/api_v3.md#watchdir"},"etcd.watchdir")," to monitor directory content changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If there is no data update in the monitoring directory: the process will be blocked until timeout or other errors occurred."),(0,o.kt)("li",{parentName:"ul"},"If the monitoring directory has data updates: etcd will return the new subscribed data immediately (in milliseconds), and Apache APISIX will update it to the memory cache.")),(0,o.kt)("p",null,"With the help of etcd which incremental notification feature is millisecond-level, Apache APISIX achieve millisecond-level of configuration synchronization."),(0,o.kt)("h2",{id:"how-to-customize-the-apache-apisix-instance-id"},"How to customize the Apache APISIX instance id?"),(0,o.kt)("p",null,"By default, Apache APISIX will read the instance id from ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/apisix.uid"),". If it is not found, and no id is configured, Apache APISIX will generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid")," as the instance id."),(0,o.kt)("p",null,"If you want to specify a meaningful id to bind Apache APISIX instance to your internal system, you can configure it in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```\napisix:\n  id: "your-meaningful-id"\n```\n')),(0,o.kt)("h2",{id:"why-there-are-a-lot-of-failed-to-fetch-data-from-etcd-failed-to-read-etcd-dir-etcd-key-xxxxxx-errors-in-errorlog"},'Why there are a lot of "failed to fetch data from etcd, failed to read etcd dir, etcd key: xxxxxx" errors in error.log?'),(0,o.kt)("p",null,"First please make sure the network between Apache APISIX and etcd cluster is not partitioned."),(0,o.kt)("p",null,"If the network is healthy, please check whether your etcd cluster enables the ",(0,o.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/dev-guide/api_grpc_gateway/"},"gRPC gateway"),".  However, The default case for this feature is different when use command line options or configuration file to start etcd server."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When command line options is in use, this feature is enabled by default, the related option is ",(0,o.kt)("inlineCode",{parentName:"li"},"--enable-grpc-gateway"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"etcd --enable-grpc-gateway --data-dir=/path/to/data\n")),(0,o.kt)("p",null,"Note this option is not shown in the output of ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd --help"),"."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"When configuration file is used, this feature is disabled by default, please enable ",(0,o.kt)("inlineCode",{parentName:"li"},"enable-grpc-gateway")," explicitly.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'# etcd.json\n{\n    "enable-grpc-gateway": true,\n    "data-dir": "/path/to/data"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"# etcd.conf.yml\nenable-grpc-gateway: true\n")),(0,o.kt)("p",null,"Indeed this distinction was eliminated by etcd in their master branch, but not backport to announced versions, so be care when deploy your etcd cluster."),(0,o.kt)("h2",{id:"how-to-set-up-high-available-apache-apisix-clusters"},"How to set up high available Apache APISIX clusters?"),(0,o.kt)("p",null,"The high availability of Apache APISIX can be divided into two parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The data plane of Apache APISIX is stateless and can be elastically scaled at will. Just add a layer of LB in front.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The control plane of Apache APISIX relies on the highly available implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd cluster")," and does not require any relational database dependency."))),(0,o.kt)("h2",{id:"why-does-the-make-deps-command-fail-in-source-installation"},"Why does the ",(0,o.kt)("inlineCode",{parentName:"h2"},"make deps")," command fail in source installation?"),(0,o.kt)("p",null,"When executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"make deps")," command, an error such as the one shown below occurs. This is caused by the missing openresty's ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl")," development kit, you need to install it first. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/2.12/install-dependencies"},"install dependencies")," document for installation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ make deps\n......\nError: Failed installing dependency: https://luarocks.org/luasec-0.9-1.src.rock - Could not find header file for OPENSSL\n  No file openssl/ssl.h in /usr/local/include\nYou may have to install OPENSSL in your system and/or pass OPENSSL_DIR or OPENSSL_INCDIR to the luarocks command.\nExample: luarocks install luasec OPENSSL_DIR=/usr/local\nmake: *** [deps] Error 1\n")),(0,o.kt)("h2",{id:"how-to-access-apache-apisix-dashboard-through-apache-apisix-proxy"},"How to access Apache APISIX Dashboard through Apache APISIX proxy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Keep the Apache APISIX proxy port and Admin API port different(or disable Admin API). For example, do the following configuration in ",(0,o.kt)("inlineCode",{parentName:"li"},"conf/config.yaml"),".")),(0,o.kt)("p",null,"The Admin API use a separate port 9180:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  port_admin: 9180            # use a separate port\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add proxy route of Apache APISIX Dashboard:")),(0,o.kt)("p",null,"Note: The Apache APISIX Dashboard service here is listening on ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9000"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uris":[ "/*" ],\n    "name":"apisix_proxy_dashboard",\n    "upstream":{\n        "nodes":[\n            {\n                "host":"127.0.0.1",\n                "port":9000,\n                "weight":1\n            }\n        ],\n        "type":"roundrobin"\n    }\n}\'\n')),(0,o.kt)("h2",{id:"how-to-use-route-uri-for-regular-matching"},"How to use route ",(0,o.kt)("inlineCode",{parentName:"h2"},"uri")," for regular matching"),(0,o.kt)("p",null,"The regular matching of uri is achieved through the ",(0,o.kt)("inlineCode",{parentName:"p"},"vars")," field of route."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "vars": [\n        ["uri", "~~", "^/[a-z]+$"]\n    ],\n    "upstream": {\n            "type": "roundrobin",\n            "nodes": {\n                "127.0.0.1:1980": 1\n            }\n    }\n}\'\n')),(0,o.kt)("p",null,"Test request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# The uri matched successfully\n$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\n...\n\n# The uri match failed\n$ curl http://127.0.0.1:9080/12ab -i\nHTTP/1.1 404 Not Found\n...\n")),(0,o.kt)("p",null,"In route, we can achieve more condition matching by combining ",(0,o.kt)("inlineCode",{parentName:"p"},"uri")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"vars")," field. For more details of using ",(0,o.kt)("inlineCode",{parentName:"p"},"vars"),", please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr"),"."),(0,o.kt)("h2",{id:"does-the-upstream-node-support-configuring-the-fqdn-address"},"Does the upstream node support configuring the ",(0,o.kt)("a",{parentName:"h2",href:"https://en.wikipedia.org/wiki/Fully_qualified_domain_name"},"FQDN")," address"),(0,o.kt)("p",null,"This is supported. Here is an example where the ",(0,o.kt)("inlineCode",{parentName:"p"},"FQDN")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"httpbin.default.svc.cluster.local")," (a Kubernetes Service):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/ip",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.default.svc.cluster.local": 1\n        }\n    }\n}\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Test request\n$ curl http://127.0.0.1:9080/ip -i\nHTTP/1.1 200 OK\n...\n")),(0,o.kt)("h2",{id:"what-is-the-x-api-key-of-admin-api-can-it-be-modified"},"What is the ",(0,o.kt)("inlineCode",{parentName:"h2"},"X-API-KEY")," of Admin API? Can it be modified?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"X-API-KEY")," of Admin API refers to the ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix.admin_key.key")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.yaml")," file, and the default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"edd1c9f034335f136f87ad84b625c8f1"),". It is the access token of the Admin API.")),(0,o.kt)("p",null,"Note: There are security risks in using the default API token. It is recommended to update it when deploying to a production environment."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"X-API-KEY")," can be modified.")),(0,o.kt)("p",null,"For example: make the following changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix.admin_key.key")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," file and reload Apache APISIX."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  admin_key\n    -\n      name: "admin"\n      key: abcdefghabcdefgh\n      role: admin\n')),(0,o.kt)("p",null,"Access the Admin API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: abcdefghabcdefgh\' -X PUT -d \'\n{\n    "uris":[ "/*" ],\n    "name":"admin-token-test",\n    "upstream":{\n        "nodes":[\n            {\n                "host":"127.0.0.1",\n                "port":1980,\n                "weight":1\n            }\n        ],\n        "type":"roundrobin"\n    }\n}\'\n\nHTTP/1.1 200 OK\n......\n')),(0,o.kt)("p",null,"The route was created successfully. It means that the modification of ",(0,o.kt)("inlineCode",{parentName:"p"},"X-API-KEY")," takes effect."),(0,o.kt)("h2",{id:"how-to-allow-all-ips-to-access-admin-api"},"How to allow all IPs to access Admin API"),(0,o.kt)("p",null,"By default, Apache APISIX only allows the IP range of ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.0/24")," to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin API"),". If you want to allow all IP access, then you only need to add the following configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  allow_admin:\n    - 0.0.0.0/0\n")),(0,o.kt)("p",null,"Restart or reload Apache APISIX, all IPs can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin API"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: You can use this method in a non-production environment to allow all clients from anywhere to access your ",(0,o.kt)("inlineCode",{parentName:"strong"},"Apache APISIX")," instances, but it is not safe to use it in a production environment. In production environment, please only authorize specific IP addresses or address ranges to access your instance.")),(0,o.kt)("h2",{id:"how-to-auto-renew-ssl-cert-via-acmesh"},"How to auto renew SSL cert via acme.sh"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl --output /root/.acme.sh/renew-hook-update-apisix.sh --silent https://gist.githubusercontent.com/anjia0532/9ebf8011322f43e3f5037bc2af3aeaa6/raw/65b359a4eed0ae990f9188c2afa22bacd8471652/renew-hook-update-apisix.sh\n\n$ chmod +x /root/.acme.sh/renew-hook-update-apisix.sh\n\n$ acme.sh  --issue  --staging  -d demo.domain --renew-hook "/root/.acme.sh/renew-hook-update-apisix.sh  -h http://apisix-admin:port -p /root/.acme.sh/demo.domain/demo.domain.cer -k /root/.acme.sh/demo.domain/demo.domain.key -a xxxxxxxxxxxxx"\n\n$ acme.sh --renew --domain demo.domain\n\n')),(0,o.kt)("p",null,"Blog ",(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6965778290619449351"},"https://juejin.cn/post/6965778290619449351")," has detail setup."),(0,o.kt)("h2",{id:"how-to-strip-route-prefix-for-path-matching"},"How to strip route prefix for path matching"),(0,o.kt)("p",null,"To strip route prefix before forwarding to upstream, for example from ",(0,o.kt)("inlineCode",{parentName:"p"},"/foo/get")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"/get"),", could be achieved through plugin ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy-rewrite"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/foo/*",\n    "plugins": {\n        "proxy-rewrite": {\n            "regex_uri": ["^/foo/(.*)","/$1"]\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.org:80": 1\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"Test request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/foo/get -i\nHTTP/1.1 200 OK\n...\n{\n  ...\n  "url": "http://127.0.0.1/get"\n}\n')),(0,o.kt)("h2",{id:"how-to-fix-unable-to-get-local-issuer-certificate-error"},"How to fix ",(0,o.kt)("inlineCode",{parentName:"h2"},"unable to get local issuer certificate")," error"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\napisix:\n  ssl:\n    ssl_trusted_certificate: /path/to/certs/ca-certificates.crt\n# ...\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Whenever trying to connect TLS services with cosocket, if APISIX does not trust the peer's TLS service certificate, you should set ",(0,o.kt)("inlineCode",{parentName:"li"},"apisix.ssl.ssl_trusted_certificate"))),(0,o.kt)("p",null,"As an example, if using Nacos as a service discovery in APISIX, Nacos has TLS protocol enabled, i.e. Nacos configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"host")," starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://"),", so you need to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix.ssl.ssl_trusted_certificate")," and use the same CA certificate as Nacos."),(0,o.kt)("h2",{id:"how-to-fix-module-restyworkerevents-not-found-error"},"How to fix ",(0,o.kt)("inlineCode",{parentName:"h2"},"module 'resty.worker.events' not found")," error"),(0,o.kt)("p",null,"Installing APISIX under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/root")," directory causes this problem. Because the worker process is run by the user ",(0,o.kt)("inlineCode",{parentName:"p"},"nobody"),", it does not have enough permissions to access the files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/root")," directory. You need to change the APISIX installation directory, and it is recommended to install it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local")," directory."),(0,o.kt)("h2",{id:"what-is-the-difference-between-plugin-metadata-and-plugin-configs"},"What is the difference between ",(0,o.kt)("inlineCode",{parentName:"h2"},"plugin-metadata")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"plugin-configs")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"plugin-metadata")," is the metadata of the plugin, which is shared by all configuration instances of the plugin. When writing a plugin. If there are some property changes that need to take effect for all configuration instances of the plugin, then it is appropriate to put them in ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin-metadata"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"plugin-configs")," is a collection of configuration instances of multiple different plugins. If you want to reuse a common set of plugin configuration instances, you can extract them into a Plugin Config and bind them to the corresponding routes."),(0,o.kt)("p",null,"The difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin-metadata")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin-configs"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plugin configuration instance scope: ",(0,o.kt)("inlineCode",{parentName:"li"},"plugin-metadata")," works on all configuration instances of this plugin. ",(0,o.kt)("inlineCode",{parentName:"li"},"plugin-configs")," works on the plugin configuration instances under configured it."),(0,o.kt)("li",{parentName:"ul"},"Binding entities: ",(0,o.kt)("inlineCode",{parentName:"li"},"plugin-metadata")," take effect on the entities bound to all configuration instances of this plugin. ",(0,o.kt)("inlineCode",{parentName:"li"},"plugin-configs")," take effect on the routes bound to this ",(0,o.kt)("inlineCode",{parentName:"li"},"plugin-configs"),".")))}h.isMDXComponent=!0}}]);