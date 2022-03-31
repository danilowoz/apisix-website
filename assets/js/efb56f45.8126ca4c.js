"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89746],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=o(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92100:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),s=["components"],l={title:"prometheus"},p=void 0,o={unversionedId:"plugins/prometheus",id:"version-2.9/plugins/prometheus",isDocsHomePage:!1,title:"prometheus",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.9/plugins/prometheus.md",sourceDirName:"plugins",slug:"/plugins/prometheus",permalink:"/docs/apisix/2.9/plugins/prometheus",editUrl:null,tags:[],version:"2.9",frontMatter:{title:"prometheus"},sidebar:"version-2.9/docs",previous:{title:"client-control",permalink:"/docs/apisix/2.9/plugins/client-control"},next:{title:"Zipkin",permalink:"/docs/apisix/2.9/plugins/zipkin"}},u=[{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How to enable it",id:"how-to-enable-it",children:[]},{value:"How to fetch the metric data",id:"how-to-fetch-the-metric-data",children:[]},{value:"How to specify export uri",id:"how-to-specify-export-uri",children:[{value:"Grafana dashboard",id:"grafana-dashboard",children:[]},{value:"Available metrics",id:"available-metrics",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This plugin exposes metrics in Prometheus Exposition format."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prefer_name"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", would print route/service ",(0,i.kt)("inlineCode",{parentName:"td"},"name")," instead of ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," in Prometheus metric.")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"This plugin will add ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics")," to expose the metrics."),(0,i.kt)("p",null,"The metrics are exposed via a separate Prometheus server address.\nBy default, the address is ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9091"),". You can change it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"plugin_attr:\n  prometheus:\n    export_addr:\n      ip: ${{INTRANET_IP}}\n      port: 9092\n")),(0,i.kt)("p",null,"Assume environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"INTRANET_IP")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"172.1.1.1"),", now APISIX will export the metrics via ",(0,i.kt)("inlineCode",{parentName:"p"},"172.1.1.1:9092"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before version ",(0,i.kt)("inlineCode",{parentName:"strong"},"2.6"),", the metrics are exposed via the data panel port,\nyou may need to use ",(0,i.kt)("a",{parentName:"strong",href:"/docs/apisix/2.9/plugin-interceptors"},"interceptors")," to protect it.")),(0,i.kt)("p",null,"If you still want this behavior, you can configure it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"plugin_attr:\n  prometheus:\n    enable_export_server: false\n")),(0,i.kt)("h2",{id:"how-to-enable-it"},"How to enable it"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," plugin could be enable with empty table.\nNotice, ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," could be duplicated for multiple routes/services, so when set ",(0,i.kt)("inlineCode",{parentName:"p"},"prefer_name")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", take care of naming format or it could be misleading."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "prometheus":{}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"APISIX Dashboard")," to complete the above operations through the web console."),(0,i.kt)("p",null,"First, add a Route:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.9/docs/assets/images/plugin/prometheus-1.png",alt:null})),(0,i.kt)("p",null,"Then add prometheus plugin:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.9/docs/assets/images/plugin/prometheus-2.png",alt:null})),(0,i.kt)("h2",{id:"how-to-fetch-the-metric-data"},"How to fetch the metric data"),(0,i.kt)("p",null,"We fetch the metric data from the specified url ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -i http://127.0.0.1:9091/apisix/prometheus/metrics\n")),(0,i.kt)("p",null,"Puts this URL address into prometheus, and it will automatically fetch\nthese metric data."),(0,i.kt)("p",null,"For example like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'apisix'\n    metrics_path: '/apisix/prometheus/metrics'\n    static_configs:\n    - targets: ['127.0.0.1:9091']\n")),(0,i.kt)("p",null,"And we can check the status at prometheus console:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.9/docs/assets/images/plugin/prometheus01.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.9/docs/assets/images/plugin/prometheus02.png",alt:null})),(0,i.kt)("h2",{id:"how-to-specify-export-uri"},"How to specify export uri"),(0,i.kt)("p",null,"We can change the default export uri in the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_attr")," section of ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"export_uri"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'"/apisix/prometheus/metrics"'),(0,i.kt)("td",{parentName:"tr",align:null},"uri to get the prometheus metrics")))),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  prometheus:\n    export_uri: /apisix/metrics\n")),(0,i.kt)("h3",{id:"grafana-dashboard"},"Grafana dashboard"),(0,i.kt)("p",null,"Metrics exported by the plugin can be graphed in Grafana using a drop in dashboard."),(0,i.kt)("p",null,"Downloads ",(0,i.kt)("a",{parentName:"p",href:"../../../assets/other/json/apisix-grafana-dashboard.json"},"Grafana dashboard meta")," and imports it to Grafana\u3002"),(0,i.kt)("p",null,"Or you can goto ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/11719"},"Grafana official")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Grafana")," meta data."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.9/docs/assets/images/plugin/grafana-1.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.9/docs/assets/images/plugin/grafana-2.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.9/docs/assets/images/plugin/grafana-3.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.9/docs/assets/images/plugin/grafana-4.png",alt:null})),(0,i.kt)("h3",{id:"available-metrics"},"Available metrics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Status codes"),": HTTP status code returned from upstream services. These status code available per service and across all services."),(0,i.kt)("p",{parentName:"li"},"  Attributes\uff1a"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"code"),(0,i.kt)("td",{parentName:"tr",align:null},"The HTTP status code returned by the upstream service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"route"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"route_id")," of the matched route is request. If it does not match, the default value is an empty string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"matched_uri"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"uri")," of the route matching the request, if it does not match, the default value is an empty string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"matched_host"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"host")," of the route that matches the request. If it does not match, the default value is an empty string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"service"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"service_id")," of the route matched by the request. When the route lacks service_id, the default is ",(0,i.kt)("inlineCode",{parentName:"td"},"$host"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"consumer"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"consumer_name")," of the consumer that matches the request. If it does not match, the default value is an empty string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"node"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"ip")," of the upstream node."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Bandwidth"),": Total Bandwidth (egress/ingress) flowing through APISIX. The total bandwidth of per service can be counted."),(0,i.kt)("p",{parentName:"li"},"  Attributes\uff1a"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of bandwidth(egress/ingress).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"route"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"route_id")," of the matched route is request. If it does not match, the default value is an empty string..")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"service"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"service_id")," of the route matched by the request. When the route lacks service_id, the default is ",(0,i.kt)("inlineCode",{parentName:"td"},"$host"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"consumer"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"consumer_name")," of the consumer that matches the request. If it does not match, the default value is an empty string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"node"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"ip")," of the upstream node."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"etcd reachability"),": A gauge type with a value of 0 or 1, representing if etcd can be reached by a APISIX or not, where ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," is available, and ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," is unavailable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Connections"),": Various Nginx connection metrics like active, reading, writing, and number of accepted connections.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Batch process entries"),": A gauge type, when we use plugins and the plugin used batch process to send data, such as: sys logger, http logger, sls logger, tcp logger, udp logger and zipkin, then the entries which hasn't been sent in batch process will be counted in the metrics.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Latency"),": The per service histogram of request time in different dimensions."),(0,i.kt)("p",{parentName:"li"},"  Attributes\uff1a"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"The value can be ",(0,i.kt)("inlineCode",{parentName:"td"},"apisix"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"upstream")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"request"),", which means http latency caused by apisix, upstream, or their sum.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"service"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"service_id")," of the route matched by the request. When the route lacks service_id, the default is ",(0,i.kt)("inlineCode",{parentName:"td"},"$host"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"consumer"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"consumer_name")," of the consumer that matches the request. If it does not match, the default value is an empty string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"node"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"ip")," of the upstream node."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Info"),": the information of APISIX node."))),(0,i.kt)("p",null,"Here is the original metric data of APISIX:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9091/apisix/prometheus/metrics\n# HELP apisix_bandwidth Total bandwidth in bytes consumed per service in Apisix\n# TYPE apisix_bandwidth counter\napisix_bandwidth{type="egress",route="",service="",consumer="",node=""} 8417\napisix_bandwidth{type="egress",route="1",service="",consumer="",node="127.0.0.1"} 1420\napisix_bandwidth{type="egress",route="2",service="",consumer="",node="127.0.0.1"} 1420\napisix_bandwidth{type="ingress",route="",service="",consumer="",node=""} 189\napisix_bandwidth{type="ingress",route="1",service="",consumer="",node="127.0.0.1"} 332\napisix_bandwidth{type="ingress",route="2",service="",consumer="",node="127.0.0.1"} 332\n# HELP apisix_etcd_modify_indexes Etcd modify index for APISIX keys\n# TYPE apisix_etcd_modify_indexes gauge\napisix_etcd_modify_indexes{key="consumers"} 0\napisix_etcd_modify_indexes{key="global_rules"} 0\napisix_etcd_modify_indexes{key="max_modify_index"} 222\napisix_etcd_modify_indexes{key="prev_index"} 35\napisix_etcd_modify_indexes{key="protos"} 0\napisix_etcd_modify_indexes{key="routes"} 222\napisix_etcd_modify_indexes{key="services"} 0\napisix_etcd_modify_indexes{key="ssls"} 0\napisix_etcd_modify_indexes{key="stream_routes"} 0\napisix_etcd_modify_indexes{key="upstreams"} 0\napisix_etcd_modify_indexes{key="x_etcd_index"} 223\n# HELP apisix_batch_process_entries batch process remaining entries\n# TYPE apisix_batch_process_entries gauge\napisix_batch_process_entries{name="http-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sls-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="tcp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="udp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sys-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="zipkin_report",route_id="9",server_addr="127.0.0.1"} 1\n# HELP apisix_etcd_reachable Config server etcd reachable from Apisix, 0 is unreachable\n# TYPE apisix_etcd_reachable gauge\napisix_etcd_reachable 1\n# HELP apisix_http_status HTTP status codes per service in Apisix\n# TYPE apisix_http_status counter\napisix_http_status{code="200",route="1",matched_uri="/hello",matched_host="",service="",consumer="",node="127.0.0.1"} 4\napisix_http_status{code="200",route="2",matched_uri="/world",matched_host="",service="",consumer="",node="127.0.0.1"} 4\napisix_http_status{code="404",route="",matched_uri="",matched_host="",service="",consumer="",node=""} 1\n# HELP apisix_nginx_http_current_connections Number of HTTP connections\n# TYPE apisix_nginx_http_current_connections gauge\napisix_nginx_http_current_connections{state="accepted"} 11994\napisix_nginx_http_current_connections{state="active"} 2\napisix_nginx_http_current_connections{state="handled"} 11994\napisix_nginx_http_current_connections{state="reading"} 0\napisix_nginx_http_current_connections{state="total"} 1191780\napisix_nginx_http_current_connections{state="waiting"} 1\napisix_nginx_http_current_connections{state="writing"} 1\n# HELP apisix_nginx_metric_errors_total Number of nginx-lua-prometheus errors\n# TYPE apisix_nginx_metric_errors_total counter\napisix_nginx_metric_errors_total 0\n# HELP apisix_http_latency HTTP request latency in milliseconds per service in APISIX\n# TYPE apisix_http_latency histogram\napisix_http_latency_bucket{type="apisix",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="apisix",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\napisix_http_latency_bucket{type="request",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="request",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\napisix_http_latency_bucket{type="upstream",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="upstream",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\n...\n# HELP apisix_node_info Info of APISIX node\n# TYPE apisix_node_info gauge\napisix_node_info{hostname="desktop-2022q8f-wsl"} 1\n')),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);