"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83946],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30948:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(25773),o=a(30808),i=(a(27378),a(35318)),r=["components"],s={title:"The Road to Customized Development of Sina Weibo API Gateway",slug:"2021/07/06/the-road-to-customization-of-sina-weibo-api-gateway-based-on-apache-apisix",author:"Yong Nie",keywords:["Apache APISIX","Sina","Weibo","Usser Case","API Gateway"],description:"Sina Weibo\u2019s previous HTTP API gateway was built based on Nginx, which brought up a series of problems. After some research, we chose Apache APISIX, which is dynamic, efficient and stable to meet the fast response requirements of the business.",tags:["User Case"]},l=void 0,c={permalink:"/blog/2021/07/06/the-road-to-customization-of-sina-weibo-api-gateway-based-on-apache-apisix",source:"@site/blog/2021/07/14/the-road-to-customization-of-Sina-Weibo-API-gateway-based-on-Apache-APISIX.md",title:"The Road to Customized Development of Sina Weibo API Gateway",description:"Sina Weibo\u2019s previous HTTP API gateway was built based on Nginx, which brought up a series of problems. After some research, we chose Apache APISIX, which is dynamic, efficient and stable to meet the fast response requirements of the business.",date:"2021-07-14T00:00:00.000Z",formattedDate:"July 14, 2021",tags:[{label:"User Case",permalink:"/blog/tags/user-case"}],readingTime:12.42,truncated:!0,authors:[{name:"Yong Nie"}],prevItem:{title:"Apache APISIX x Kubernetes: Just Right\uff5cLive",permalink:"/blog/2021/07/21/apache-apisix-kubernetes"},nextItem:{title:"Apache APISIX has over 200 contributors in GitHub main repo! ",permalink:"/blog/2021/07/06/celebrate-200-contributors"}},u={authorsImageUrls:[void 0]},p=[{value:"Background Information",id:"background-information",children:[]},{value:"Why Did We Choose Custom Development?",id:"why-did-we-choose-custom-development",children:[]},{value:"What Did We Change in the Control Plane of Apache\xa0APISIX?",id:"what-did-we-change-in-the-control-plane-of-apacheapisix",children:[{value:"Support Saas-based Services",id:"support-saas-based-services",children:[]},{value:"Add Audit Function",id:"add-audit-function",children:[]},{value:"Support Canary Release",id:"support-canary-release",children:[]},{value:"Support Fast\xa0Import",id:"support-fastimport",children:[]}]},{value:"What Did We Change in the Data Plane of Apache\xa0APISIX?",id:"what-did-we-change-in-the-data-plane-of-apacheapisix",children:[{value:"Modification of Installation Package",id:"modification-of-installation-package",children:[]},{value:"Custom Development of\xa0Code",id:"custom-development-ofcode",children:[]},{value:"Support Consul\xa0KV",id:"support-consulkv",children:[]}]},{value:"Problems Encountered during Customization",id:"problems-encountered-during-customization",children:[{value:"High Costs for Migration",id:"high-costs-for-migration",children:[]},{value:"High Costs for\xa0Upgrades",id:"high-costs-forupgrades",children:[]},{value:"Feeding the Community",id:"feeding-the-community",children:[]}]}],d={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sina Weibo\u2019s previous HTTP API gateway was built based on Nginx, which brought up a series of problems. After some research, we chose Apache APISIX, which is dynamic, efficient and stable to meet the fast response requirements of the business.")),(0,i.kt)("p",null,"Sina Weibo\u2019s previous HTTP API gateway was built based on Nginx, and all routing rules were stored in Nginx configuration files, which brought a series of problems: long upgrade steps, inflexibility and difficulty in troubleshooting problems when adding, deleting, changing or tracking services. After some research, we chose the closest expected, cloud-based micro-service API gateway: Apache APISIX, which is dynamic, efficient and stable to meet the rapid response requirements of the business."),(0,i.kt)("h2",{id:"background-information"},"Background Information"),(0,i.kt)("p",null,"In Sina Weibo, if an operation engineer wants to create an API service, he/she needs to write it in the Nginx configuration file first, submit it to the git code repository, and wait for other operation engineer responsible for the online checkout to confirm the success of the audit before they can push the deployment to the line, and then brutally notify Nginx to reload it, and only then is the service change successful."),(0,i.kt)("p",null,"The whole process is long and inefficient, and cannot meet the trend of low-code DevOps operation and maintenance. Therefore, we expect to have a management backend portal, where operation engineer can operate all the http api routing and other configurations in the UI interface."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125594900-d4c01fb7-3af4-4e8c-8779-f3f16b7f0bca.png",alt:"Sina Weibo Publish Process"})),(0,i.kt)("p",null,"After some research, we chose the closest to the expected cloud-based micro-services API gateway: Apache APISIX."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Based on Nginx, the technology stack is unified before and after the canary release upgrade, security, stability, etc. are guaranteed."),(0,i.kt)("li",{parentName:"ol"},"Built-in unified control surface, unified management of multiple proxy services."),(0,i.kt)("li",{parentName:"ol"},"Dynamic API call, you can complete the common resource modifications in real time, compared to the traditional Nginx configuration + reload way progress is obvious."),(0,i.kt)("li",{parentName:"ol"},"Rich routing options to meet the needs of Sina Weibo routing."),(0,i.kt)("li",{parentName:"ol"},"Good scalability, support Consul kv."),(0,i.kt)("li",{parentName:"ol"},"Good performance.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125596483-aee21ac7-a902-4e44-abc4-8bfda4f51f82.png",alt:"Apache APISIX Architecture"})),(0,i.kt)("h2",{id:"why-did-we-choose-custom-development"},"Why Did We Choose Custom Development?"),(0,i.kt)("p",null,"In the actual business situation, we cannot use Apache APISIX directly for the following reasons."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Apache APISIX does not support SaaS multi-tenancy, and there are many upper-layer applications that actually need to be operated and maintained, and each business line development or operation and maintenance student only needs to manage and maintain their own rules, upstreams and other rules, which are not associated with each other."),(0,i.kt)("li",{parentName:"ol"},"When the routing rules are published online, they need fast roll back support if problems arise."),(0,i.kt)("li",{parentName:"ol"},"When creating or editing existing routing rules, we are not so sure about publishing them directly to the wire, and then we need it to be able to support canary release to a specified gateway instance for simulation or local testing."),(0,i.kt)("li",{parentName:"ol"},"The need for API gateways to be able to support Consul KV-style service registration and discovery mechanisms.")),(0,i.kt)("p",null,"None of these requirements are currently supported built-in by Apache APISIX, so custom development is the only way to make Apache APISIX truly usable within Weibo."),(0,i.kt)("h2",{id:"what-did-we-change-in-the-control-plane-of-apacheapisix"},"What Did We Change in the Control Plane of Apache\xa0APISIX?"),(0,i.kt)("p",null,"For our custom development, we used Apache APISIX version 1.5, and Apache APISIX Dashboard compatible with Apache APISIX version 1.5."),(0,i.kt)("p",null,"The goal of custom development is simple and clear, that is, completely zero code, UI, all seven layers of HTTP API service creation, editing, updating, up and down and all other actions must be done on the Dashboard. Therefore, in the actual environment, we forbid development and operation and operation engineer to call APISIX Admin API directly. If we skip the Dashboard and call APISIX Admin API directly, it will lead to the gateway operation not being audited at the UI level, so we cannot take the workflow, and naturally, there is not much security to speak of."),(0,i.kt)("p",null,"There is a slightly special case, operations and maintenance need to call the API to complete the bulk import of services, you can call the H5 Dashboard API to complete, so as to comply with the unified workflow."),(0,i.kt)("h3",{id:"support-saas-based-services"},"Support Saas-based Services"),(0,i.kt)("p",null,"A complete database of product lines and business lines is available at the enterprise level, and each specific product line and business line can be represented by a saas_id value. Then, before creating the gateway configuration data for insertion into the ETCD, a saas_id value is plugged in and all the data has a SaaS attribution in terms of logical attributes."),(0,i.kt)("p",null,"Users, roles and the actual product line of operation are then associated with the following correspondence."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646899698131-8e90270e-9849-435e-b776-0827c04b293c.png",alt:"Users, roles and product association"})),(0,i.kt)("p",null,"A user can be assigned to undertake different operations and maintenance roles to manage and maintain different product lines of services."),(0,i.kt)("p",null,"The administrator role is very easy to understand, the core role of operation and maintenance services, for service addition / deletion / update / check; in addition, we have the concept of read-only users, read-only users are generally used to view the service configuration, view the workflow, debugging and so on."),(0,i.kt)("h3",{id:"add-audit-function"},"Add Audit Function"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646899698135-0b92ed91-0803-4f2c-8d4b-6873c19fa492.png",alt:"Audit Function1"})),(0,i.kt)("p",null,"In the open source version, a route can be published directly after it is created or modified."),(0,i.kt)("p",null,"In our custom version, after a route is created or modified, it needs to go through an audit workflow before it can be published, which lengthens the process, but we think it is more credible to publish after the authorization is reviewed at the enterprise level."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900059586-f7feca14-57ed-417b-aadc-ca02e31bfa47.png",alt:"Audit Function2"})),(0,i.kt)("p",null,"When creating routing rules, they must be reviewed by default. To take into account efficiency, when entering new services, you can choose the no-review, fast-publishing channel and click the publish button directly."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900090210-6f08f1e5-fc62-4148-9d5a-879bc96a54d2.png",alt:"Audit Function3"})),(0,i.kt)("p",null,"When an important API route has problems after a certain adjustment rule release goes live, you can select the previous version of the routing rule for a quick roll back, with the granularity of a single route roll back that will not affect other routing rules."),(0,i.kt)("p",null,"The internal processing flow of a single route roll back is shown in the following figure."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900126327-f297be1b-c7e5-4991-9fea-0e1e87bea937.png",alt:"Audit Function4"})),(0,i.kt)("p",null,"We need to create version database storage for each release of a single route. This way, when we do a full release after the audit, each release will generate a version number and the corresponding full configuration data; then the version list grows. When we need to roll back, go to the version list and select a corresponding version to rollback; in a sense, the roll back is actually a special form of full release."),(0,i.kt)("h3",{id:"support-canary-release"},"Support Canary Release"),(0,i.kt)("p",null,"Our custom-developed canary release feature is different from what the community generally understands as canary release, and is less risky compared to full deployment. When a change to a routing rule is large, we can choose to publish and take effect only on a specific limited number of gateway instances, instead of publishing and taking effect on all gateway instances, thus reducing the scope of the release, lowering the risk, and enabling fast trial and error."),(0,i.kt)("p",null,"Although canary release is a low-frequency behavior, there is still a state transition between it and full volume release."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900161267-83d3bb57-596c-4e23-8fa3-4999739a77ca.png",alt:"Support Canary Release1"})),(0,i.kt)("p",null,"When the percentage of canary release decreases to 0%, it is the state of full release; when the canary release rises to 100%, it is the next full release, and this is its state transition.\nThe full canary release feature requires some API support exposed on the gateway instance in addition to the administrative backend support."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900188100-bf697358-4d6a-44d7-ab3d-223728e860b2.png",alt:"Support Canary Release2"})),(0,i.kt)("p",null,"The above screenshot shows the screenshot when operating canary release to select a specific gateway instance."),(0,i.kt)("p",null,"The full canary release feature requires some API support exposed on the gateway instance in addition to the administrative backend support."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900211377-0c1df098-c5be-4c69-bda6-eabd1518f0f5.png",alt:"Support Canary Release3"})),(0,i.kt)("p",null,"Canary release API fixed URI, the unified path is /admin/services/gray/{SAAS_ID}/ routes. Different HTTP Method presents different business meanings, POST means create, DELETE means to stop canary release, GET means to view."),(0,i.kt)("h4",{id:"activation-process"},"Activation Process"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900248884-ca1757d7-e6c0-45a3-a677-d29184b494d8.png",alt:"Activation Process"})),(0,i.kt)("p",null,"An API is published from the gateway level, and after receiving the data the worker process checks the legitimacy of the data sent, and the legitimate data is broadcast to all worker processes via events. Then the canary release API is called and the canary release rules are added and take effect when the next request is processed."),(0,i.kt)("h4",{id:"deactivation-process"},"Deactivation Process"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900280677-87a90d54-c78d-4660-afab-33bbc433010d.png",alt:"Deactivation Process"})),(0,i.kt)("p",null,"The deactivation process is basically the same as the canary release distribution process. The API for canary release distribution is called by the DELETE method and broadcasted to all work processes. If it exists in the route table, delete it and try to restore it from the ETCD. If the canary release is deactivated, make sure that the original ETCD can be restored without affecting the normal service."),(0,i.kt)("h3",{id:"support-fastimport"},"Support Fast\xa0Import"),(0,i.kt)("p",null,"In addition to supporting the creation of routes on the management page, many operation engineer are still more accustomed to using scripts to import. We have a large number of HTTP API services, and it would be very time-consuming to manually enter them one by one. If you import through scripts, you can reduce a lot of service migration resistance."),(0,i.kt)("p",null,"By exposing the Go Import HTTP API for the management backend, the operation engineer can fill in the assigned token, SaaS ID and related UIDs in the ready-made Bash Script file to import the services into the management backend more quickly. The subsequent operation of importing services still needs to be done in the management backend H5 interface."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125597641-54bf1649-0238-4973-8501-48c1cead328e.png",alt:"Fast\xa0Import"})),(0,i.kt)("h2",{id:"what-did-we-change-in-the-data-plane-of-apacheapisix"},"What Did We Change in the Data Plane of Apache\xa0APISIX?"),(0,i.kt)("p",null,"Custom development based on the Apache APISIX data surface requires a number of code path rules to be followed. In particular, the code for the Apache APISIX gateway and the custom code are stored in separate paths, and the two work together and can each be iterated independently."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900844425-46711779-fa2c-4242-a3c4-311fd5ea2563.png",alt:"Changes in the Data Plane"})),(0,i.kt)("h3",{id:"modification-of-installation-package"},"Modification of Installation Package"),(0,i.kt)("p",null,"So when packaging, not only custom code, but also dependencies, configuration, etc. all need to be packaged together for distribution. As for the output format, you can either choose Docker or type it into a tarball, as required."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900306141-5f85e7e9-3e13-4477-957c-657d5435bdef.png",alt:"Modification of Installation Package"})),(0,i.kt)("h3",{id:"custom-development-ofcode"},"Custom Development of\xa0Code"),(0,i.kt)("p",null,"Some custom modules need to be loaded first when they are initialized, so that the code intrusion into Apache APISIX becomes minimal, requiring only modifications to the Nginx.conf file."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900356726-16c7b794-c5d9-43a4-af60-7dc675f56dc7.png",alt:"Custom Development of\xa0Code1"})),(0,i.kt)("p",null,"For example, if you need to stuff an upstream object with a saas_id attribute field, you can call the following method at initialize time."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900387986-d7036503-98a9-4cb8-a47e-27e7ae83796b.png",alt:"Custom Development of\xa0Code2"})),(0,i.kt)("p",null,"You need to be called in the initworker_by_lua* phase to complete the initialization for similar modifications."),(0,i.kt)("p",null,"Another scenario: how to directly rewrite the implementation of a currently existing module. For example, if you have a debug module and now you need to refactor its initialization logic, i.e. rewrite the init_worker function."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125598066-fd0da722-7fb0-44a2-99cd-15bf07fd1ad6.png",alt:"Custom Development of\xa0Code3"})),(0,i.kt)("p",null,"The advantage of this approach is that it not only keeps the original physical API files intact, but also adds custom API-specific logic rewrites, thus reducing the cost of later code management and bringing great convenience for subsequent upgrades."),(0,i.kt)("p",null,"If you have similar needs in a production environment, you can refer to the above approach."),(0,i.kt)("h3",{id:"support-consulkv"},"Support Consul\xa0KV"),(0,i.kt)("p",null,"Currently, most of Weibo services use Consul KV as a service registration and discovery mechanism. Previously, Apache APISIX did not support the Consul KV method of service discovery mechanism, so a ",(0,i.kt)("inlineCode",{parentName:"p"},"consul_kv.lua")," module needs to be added to the gateway layer, and a UI interface needs to be provided in the management backend as follows."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900423967-5b5db4c1-1c2c-495c-88ef-e0f4937bcef8.png",alt:"Support Consul\xa0KV1"})),(0,i.kt)("p",null,"In the upstream list in the console, everything is filled in at a glance, and the metadata of all registered nodes is automatically presented when the mouse is moved over the registered service address, which greatly facilitates the daily operation of our operation engineers."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900450031-bf0109c1-c859-4fbd-9a47-967c193d27ff.png",alt:"Support Consul\xa0KV2"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"consul_kv.lua")," module is relatively simple to configure at the gateway level, supporting multiple connections to different Consul clusters at the same time, but this is also due to the requirements of the actual environment."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646900471956-9490a2d0-256d-4f15-b24e-6f8204a60a17.png",alt:"Support Consul\xa0KV3"})),(0,i.kt)("p",null,"This code has now been merged into the APISIX master branch and is included in version 2.4."),(0,i.kt)("p",null,"The module's process model uses a subscription publishing model, where each gateway instance has one and only one process that polls multiple Consul service clusters with long connections and broadcasts new data to all business sub-processes as it becomes available."),(0,i.kt)("h2",{id:"problems-encountered-during-customization"},"Problems Encountered during Customization"),(0,i.kt)("h3",{id:"high-costs-for-migration"},"High Costs for Migration"),(0,i.kt)("p",null,"At the operation and maintenance level, we are actually facing a problem of migration cost."),(0,i.kt)("p",null,"Any new thing appeared, used to replace the existing foundation, will not be a smooth ride, but need to go through a period of time slowly familiar with, improve knowledge, and then keep trial and error, slowly move forward, and gradually eliminate all kinds of doubts in our minds. Only after a period of stable operation and various problems have been solved, will the next step of more rapid replacement phase be entered. There is no doubt that the use of APISIX in Weibo is still in the stage of gradual advancement, and we are still familiarizing ourselves with it, learning it, and gaining a deeper understanding of it, while solving various migration problems in order to find the best practice path."),(0,i.kt)("p",null,"For example, during the migration process, you need to import various upstream and routing rules from the Nginx.conf file into the gateway system administration backend one by one, which is a very tedious and manual process."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/23514812/125598279-1fa93710-e5a0-4dc4-b42b-46b02f66f6a8.png",alt:"High Costs for Migration"})),(0,i.kt)("p",null,"At the same time, we will also encounter Nginx various complex variable judgment statements, at present, we mainly find one to solve one, and continue to accumulate experience."),(0,i.kt)("h3",{id:"high-costs-forupgrades"},"High Costs for\xa0Upgrades"),(0,i.kt)("p",null,"High level of customization, resulting in higher costs for subsequent upgrades. We are currently experiencing the same problem as everyone else, many people should be based on version 1.x Apache APISIX how to upgrade to 2.0, we also have a Dashboard of private custom development, the subsequent upgrade costs should be higher."),(0,i.kt)("h3",{id:"feeding-the-community"},"Feeding the Community"),(0,i.kt)("p",null,"The final part is about the Apache APISIX community. We have been thinking about how to feed features of interest to the Apache APISIX community for everyone to use and modify together."),(0,i.kt)("p",null,"It is an objective fact that our custom development is driven primarily by actual internal Weibo requirements, and there is some variation from the evolution driven by the Apache APISIX community. However, excluding code that contains sensitive data, there are always common needs at the code level for more general functionality that the enterprise and open source communities can push together to make more stable and mature. For example, a common Consul KV service discovery module, handling of some highly available profiles, and fixes for other issues."),(0,i.kt)("p",null,"These common requirements are typically polished internally for a period of time until they fully satisfy internal requirements, and then gradually submitted to the community open source branch, but this also requires a process."))}h.isMDXComponent=!0}}]);