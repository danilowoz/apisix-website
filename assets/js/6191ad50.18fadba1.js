"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54566],{35318:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||s;return n?a.createElement(g,r(r({ref:t},h),{},{components:n})):a.createElement(g,r({ref:t},h))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(25773),i=n(30808),s=(n(27378),n(35318)),r=["components"],o={title:"Why is Apache APISIX Ingress a new option for building container gateways into the UPYUN?",author:"Zhuo Chen",keywords:["Apache APISIX","Apache APISIX Ingress","UPYUN","Container gateway"],description:"This article describes the update and adjustment of UPYUN's internal gateway architecture after you selected Apache Apisix Ingress, and shares some of the practice scenarios in use.",tags:["User Case"]},c=void 0,l={permalink:"/blog/2021/09/24/youpaicloud-usercase",source:"@site/blog/2021/09/24/youpaicloud-usercase.md",title:"Why is Apache APISIX Ingress a new option for building container gateways into the UPYUN?",description:"This article describes the update and adjustment of UPYUN's internal gateway architecture after you selected Apache Apisix Ingress, and shares some of the practice scenarios in use.",date:"2021-09-24T00:00:00.000Z",formattedDate:"September 24, 2021",tags:[{label:"User Case",permalink:"/blog/tags/user-case"}],readingTime:8.785,truncated:!0,authors:[{name:"Zhuo Chen"}],prevItem:{title:"WPS has teamed up with Apache APISIX to create a new gateway experience",permalink:"/blog/2021/09/28/wps-usercase"},nextItem:{title:"Apache APISIX helps DIAN to facilitate cloud native solution",permalink:"/blog/2021/09/18/xiaodian-usercase"}},h={authorsImageUrls:[void 0]},u=[{value:"Background",id:"background",children:[]},{value:"Research Phase",id:"research-phase",children:[]},{value:"Why Apache APISIX Ingress",id:"why-apache-apisix-ingress",children:[{value:"Internal Cause",id:"internal-cause",children:[]},{value:"Efficiency of Maintenance",id:"efficiency-of-maintenance",children:[]}]},{value:"Tuning Update Based on Apache APISIX Ingress",id:"tuning-update-based-on-apache-apisix-ingress",children:[{value:"Restructuring",id:"restructuring",children:[]},{value:"Apache APISIX Ingress Controller",id:"apache-apisix-ingress-controller",children:[]},{value:"Functional Enhancement",id:"functional-enhancement",children:[]}]},{value:"Practice the Solution Using Apache APISIX Ingress",id:"practice-the-solution-using-apache-apisix-ingress",children:[{value:"Scenario 1: K8s Application Changes",id:"scenario-1-k8s-application-changes",children:[]},{value:"Scenario 2: Upstream Health Screening Problem",id:"scenario-2-upstream-health-screening-problem",children:[]},{value:"Scenario\uff1amTLS Connecting to ETCD",id:"scenariomtls-connecting-to-etcd",children:[]}]},{value:"Future Expectations",id:"future-expectations",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This article describes the update and adjustment of UPYUN's internal gateway architecture after you selected Apache Apisix Ingress, and shares some of the practice scenarios in use. Chen Zhuo, a cloud development engineer, is responsible for cloud storage, cloud processing, and gateway application development.")),(0,s.kt)("h2",{id:"background"},"Background"),(0,s.kt)("p",null,"The range of Ingress products on the market has grown and the range of options has expanded considerably. These products fall into roughly two architectural categories. One, like K8s Ingress and Apache APISIX Ingress, are based on traditional agents such as Nginx and OpenResty, and use k8s-Client and Golang to do Controller. There is also an emerging class of agents and controllers using the Golang language, such as Traefik."),(0,s.kt)("p",null,"Ingress-Nginx is still used by most businesses in UPYUN, and the overall architecture is as follows."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469775377-8303128c-e8a6-4594-a87b-ac6942f4895e.png",alt:"Ingress-Nginx architecture"})),(0,s.kt)("p",null,"The lower layer is data plane OpenResty. The upper Controller listens primarily for resource changes from APIServer and generates ",(0,s.kt)("inlineCode",{parentName:"p"},"nginx.conf")," configuration file, and then Reload OpenResty. If the POD IP changes, the Upstream Upstream node replacement can be transmitted directly to the OpenResty Lua code via the HTTP interface."),(0,s.kt)("p",null,"The extensibility of Ingress-Nginx is achieved mainly through Annotations, and the configuration file itself has simple syntax and routing rules. Lua can be configured on demand, and the extension of the Lua plug in improves Operability of customization."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469835090-20c409f6-0416-4b2f-9ad7-4c836638f892.png",alt:"Ingress-Nginx extensibility"})),(0,s.kt)("p",null,"But Ingress-Nginx has some drawbacks, such as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The development of plug-ins depends on complex components, poor portability"),(0,s.kt)("li",{parentName:"ul"},"Weak semantic ability"),(0,s.kt)("li",{parentName:"ul"},"Any change to Ingress requires Reload, which is unfriendly to long links")),(0,s.kt)("p",null,"These issues caused some confusion in maintaining the existing logic, so we started looking for alternatives to the relevant container gateways."),(0,s.kt)("h2",{id:"research-phase"},"Research Phase"),(0,s.kt)("p",null,"In choosing an alternative to Ingress-Nginx, we focused on Traefik and Apache APISIX Ingress."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469875567-61dd6fbd-757f-419f-a769-99e6aaf46f0c.png",alt:"Traefik"})),(0,s.kt)("p",null,"Traefik is cloud-native, with extremely simple configuration files, a distributed configuration, and support for a variety of automated configuration discovery. Not only support K8s, ETCD, Golang eco-language support is better, and the development cost is lower, iteration and testing ability is better. But it falls short at other levels, such as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Weak expansibility"),(0,s.kt)("li",{parentName:"ul"},"Reload is not supported"),(0,s.kt)("li",{parentName:"ul"},"Not as good as Nginx in terms of performance and functionality (though it\u2019s also less expensive)")),(0,s.kt)("p",null,"Unlike Nginx, which is rich in plugins and instructions, you can solve a problem by adding an instruction, and you may need to pair an Nginx with Traefik when you deploy online."),(0,s.kt)("p",null,"In summary, although Traefik has advantages on operations, we are worried about its drawbacks on extension and operational efficiency concerns, so we did not choose Traefik."),(0,s.kt)("h2",{id:"why-apache-apisix-ingress"},"Why Apache APISIX Ingress"),(0,s.kt)("h3",{id:"internal-cause"},"Internal Cause"),(0,s.kt)("p",null,"Apache APISIX\u2019s cluster of gateways, which were previously replaced from Kong, is currently hosted in multiple data centers within the company. Later, based on the Apache APISIX plug-in system, we developed some internal plug-in, such as internal permission system check, precision rate limit and so on."),(0,s.kt)("h3",{id:"efficiency-of-maintenance"},"Efficiency of Maintenance"),(0,s.kt)("p",null,"We also have some K8s clusters, and the cluster gateway in these containers is using Ingress Nginx. When the plug-in system wasn\u2019t supported before, we customized some of the plug-ins on Ingress Nginx. So Apache APISIX and Nginx have a lot of overlap in their internal data center and container gateways."),(0,s.kt)("p",null,"To avoid subsequent development and maintenance, we want to replace all of the Ingress Nginx container internal gateways with Apache APISIX Ingress to achieve component unification at the gateway level."),(0,s.kt)("h2",{id:"tuning-update-based-on-apache-apisix-ingress"},"Tuning Update Based on Apache APISIX Ingress"),(0,s.kt)("p",null,"Currently Apache APISIX Ingress is in the early stages of UPYUN. Because of the rapid iteration of Apache APISIX Ingress, we haven\u2019t yet applied it to some important businesses, just to try it out in a new cluster."),(0,s.kt)("h3",{id:"restructuring"},"Restructuring"),(0,s.kt)("p",null,"With Apache APISIX Ingress, the internal architecture looks like this."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469909488-3685d104-e458-4145-8ccb-6cecbd383161.png",alt:"After using APISIX Ingress architecture"})),(0,s.kt)("p",null,"Unlike the aforementioned Ingress-Nginx architecture, the underlying data surface has been replaced with the Apache APISIX cluster. The upper Controller listens for APIServer changes and then distributes the configuration resources through the ETCD to all nodes in the entire Apache APISIX cluster."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469956257-b9cb6a91-a082-437c-9395-d62ffb75280f.png",alt:"Profile comparison"})),(0,s.kt)("p",null,"Because Apache APISIX supports dynamic routing changes, it is different from Ingress-Nginx on the right. In Apache APISIX, the same Location is used when traffic enters, and routing is done in Lua Code, which is easy to deploy. And the right Ingress-Nginx compared to its ",(0,s.kt)("inlineCode",{parentName:"p"},"nginx.conf")," configuration file is complex and requires a Reload for every Ingress change."),(0,s.kt)("h3",{id:"apache-apisix-ingress-controller"},"Apache APISIX Ingress Controller"),(0,s.kt)("p",null,"Apache APISIX Ingress Controller relies on Apache APISIX\u2019s dynamic routing capabilities for its functional implementation. It monitors resource changes at APIServer, performs data structure conversion, data validation, and DIFF computation, and finally applies it to the Apache APISIX Admin API."),(0,s.kt)("p",null,"Apache APISIX Ingress Controller also has a highly available scheme, implemented directly through the leader-election mechanism of K8s, without the need to introduce additional external components."),(0,s.kt)("h4",{id:"declarative-configuration"},"Declarative Configuration"),(0,s.kt)("p",null,"Currently Apache APISIX Ingress Controller supports two declarative configurations, Ingress Resource and CRD Resource. The former is more suitable for the replacement of gateway controls from Ingress-Nginx and is the most cost-effective in terms of conversion costs. However, its shortcomings are obvious, such as too weak semantic ability, no specific specifications, and capacity development can only be achieved through annotations."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469994485-209d3a21-d761-4b2c-a974-c913b443b0d2.png",alt:"Ingress Resource"})),(0,s.kt)("p",null,"UPYUN selected the second declarative configuration, the more semantic CRD Resource. Structured data can be configured this way, with the capabilities that Apache APISIX supports."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470033850-b619da2f-5926-44ca-95bb-69ee1cdaf209.png",alt:"CRD Resource"})),(0,s.kt)("p",null,"If you want to learn more about Apache APISIX Ingress Controller dry goods, see Apache Apisix PMC Zhang Chao\u2019s ",(0,s.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1eB4y1u7i1?spm_id_from=333.999.0.0"},"sharing video")," on Meetup."),(0,s.kt)("h3",{id:"functional-enhancement"},"Functional Enhancement"),(0,s.kt)("h4",{id:"effect-1-log-level-efficiency"},"Effect 1: Log Level Efficiency"),(0,s.kt)("p",null,"We currently have multiple Apache APISIX clusters in our company, including the data center gateway and the container gateway that all started using Apache APISIX uniformly so that they can be consolidated into a set of logic for subsequent processing/consumption of related logs."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470075980-46d13ac7-babb-40a5-b105-73f1105d16e7.png",alt:"Log level"})),(0,s.kt)("p",null,"Of course, Apache APISIX\u2019s logging plug-in support is also very rich. Internally we use Kafka-Logger, which allows you to customize the log format. Like the other log plug-ins in the figure below, custom formats may not yet be supported due to the number of users, partners with relevant needs are welcome to use and submit PR to extend the current logging plug-in functionality."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470099306-ffc74dfb-384b-4014-a0b4-14267dcf7bce.png",alt:"Plug-in list"})),(0,s.kt)("h4",{id:"effect-two-improve-the-monitoring-and-health-check"},"Effect Two: Improve the Monitoring and Health Check"),(0,s.kt)("p",null,"At the monitoring level, Apache APISIX also supports Prometheus, SkyWalking, and so on, and we use Prometheus internally."),(0,s.kt)("p",null,"Apache APISIX is a basic proxy for the monitoring and request of APP status codes. But Apache APISIX\u2019s own health checks are not well controlled. What we\u2019re doing now is deploying a service inside K8s and generating multiple pods, applying that service to Apache APISIX Ingress, and then checking the entire link to see if Apache APISIX is healthy."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470120106-3e577e2e-ea43-4f50-8e3c-066b5f1e7238.png",alt:"Health check"})),(0,s.kt)("h2",{id:"practice-the-solution-using-apache-apisix-ingress"},"Practice the Solution Using Apache APISIX Ingress"),(0,s.kt)("h3",{id:"scenario-1-k8s-application-changes"},"Scenario 1: K8s Application Changes"),(0,s.kt)("p",null,"In using K8s with Apache APISIX Ingress, you need to do the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The selection of update strategy suggests using rolling update to ensure that most of the POD is available, but also need to consider the problem of stable load"),(0,s.kt)("li",{parentName:"ul"},"We should start K8s internal health check for POD to ensure the business availability of POD and avoid the POD being unable to provide the normal service after the request"),(0,s.kt)("li",{parentName:"ul"},"Make most endpoints available on Apache APISIX Upstream")),(0,s.kt)("p",null,"In practice, we also encounter the problem of transmission delay. The POD update path is shown below, after the POD Ready through the layer-by-layer steps of information transfer, some of the links in the middle may appear delay problems. In some extreme cases, the link time may be increased by a few seconds and the Endpoint update may not be up to date."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470165257-cb16e489-b546-4451-917a-6c72648769d8.png",alt:"Link issue"})),(0,s.kt)("p",null,"The solution in this case is to wait a few seconds after the first batch of POD becomes Ready before continuing with the next batch when the update occurs. The goal is to ensure that most endpoints in the Apache APISIX Upstream are available."),(0,s.kt)("h3",{id:"scenario-2-upstream-health-screening-problem"},"Scenario 2: Upstream Health Screening Problem"),(0,s.kt)("p",null,"Due to APIServer\u2019s state-oriented design, there are also latency issues when synchronizing with Apache APISIX, which can result in \u201c502 error status warnings\u201dduring the update process. Problems like this require a health check at the gateway level for the Upstream Endpoint."),(0,s.kt)("p",null,"First of all, an Upstream Endpoint health check is not practical because Endpoint is too time consuming. The monitoring check at the HTTP layer is not suitable for the operation because the status code can not be determined."),(0,s.kt)("p",null,"The best way to do this is to do a passive health check based on TCP at the gateway level. If your network connection time out is not reachable, consider the POD as a problem that needs to be degraded. This allows for independent control without touching other parts of the business, as long as you check at the TCP level."),(0,s.kt)("h3",{id:"scenariomtls-connecting-to-etcd"},"Scenario\uff1amTLS Connecting to ETCD"),(0,s.kt)("p",null,"Because the Apache APISIX cluster uses one-way authentication by default, using Apache APISIX as a container gateway might turn on two-way authentication by default when connecting to the same ETCD cluster with K8s (which uses two-way authentication in K8s ETCD) , this in turn led to the following certificate issues:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470191228-5c2a3666-8d21-4b19-a5be-e09e7db4d488.png",alt:"Certificate issues"})),(0,s.kt)("p",null,"Instead of connecting directly to the ETCD via gRPC, Apache APISIX first connects to the gRPC-gateway inside the ETCD via the HTTP protocol, and then to the real gRPC Server. There\u2019s an extra component in the middle, so there\u2019s an extra two-way validation."),(0,s.kt)("p",null,"A client certificate is required when the gRPC-gateway connects to the gRPC Server. The ETCD does not provide a configuration for this certificate, but uses the Server certificate of the gRPC Server directly. This is equivalent to a certificate being validated both on the client and the server. If your gRPC server server-side certificate has an extension enabled (indicating that the certificate can only be used for server-side validation) , remove the extension, or add an extension that can also be used for client-side validation."),(0,s.kt)("p",null,"At the same time, the bottom layer of OpenResty does not support mTLS. When you need to connect to an upstream service or ETCD via mTLS, you need to use apisix-nginx-module to build an OpenResty after patch. Apisix-build-tools can find related build scripts."),(0,s.kt)("h2",{id:"future-expectations"},"Future Expectations"),(0,s.kt)("p",null,"While we are currently only using Apache APISIX Ingress in the testing phase, we believe that in the near future, with the application of an iterative feature update and internal architecture migration, apache APISIX Ingress will be applied uniformly to all container gateways to UPYUN."))}d.isMDXComponent=!0}}]);