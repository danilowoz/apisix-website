"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47206],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25680:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),i=["components"],s={title:"Apache APISIX 2.6.0-Release Officially Released",slug:"2021/05/25/apache-apisix-2.6.0-release",author:"Zexuan Luo",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["API gateway","APISIX","Apache APISIX","Release Notes"],description:"Apache APISIX 2.6.0-Release is officially released! You are welcome to download and use it.",tags:["Release"]},l=void 0,u={permalink:"/blog/2021/05/25/apache-apisix-2.6.0-release",source:"@site/blog/2021/05/25/Apache APISIX 2.6.0-Release.md",title:"Apache APISIX 2.6.0-Release Officially Released",description:"Apache APISIX 2.6.0-Release is officially released! You are welcome to download and use it.",date:"2021-05-25T00:00:00.000Z",formattedDate:"May 25, 2021",tags:[{label:"Release",permalink:"/blog/tags/release"}],readingTime:3.565,truncated:!0,authors:[{name:"Zexuan Luo",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Experience sharing from Apache APISIX committer - Interview with Summer of Programming",permalink:"/blog/2021/06/03/experience-share-from-apache-apisix-committer"},nextItem:{title:"How to use API Gateway to process 1 billion traffic daily for Tencent?",permalink:"/blog/2021/05/24/tencent-games"}},p={authorsImageUrls:[void 0]},c=[{value:"Release Notes",id:"release-notes",children:[{value:"New feature: APISIX now supports writing custom plugins in other languages",id:"new-feature-apisix-now-supports-writing-custom-plugins-in-other-languages",children:[]},{value:"Security enhancement: change the Prometheus default port to no longer expose the port to the data plane",id:"security-enhancement-change-the-prometheus-default-port-to-no-longer-expose-the-port-to-the-data-plane",children:[]},{value:"Support: Ecological full support for Nacos service discovery",id:"support-ecological-full-support-for-nacos-service-discovery",children:[]},{value:"Support: Configuring DNS resolver for IPv6",id:"support-configuring-dns-resolver-for-ipv6",children:[]}]},{value:"Download",id:"download",children:[]},{value:"Documentation Update",id:"documentation-update",children:[]}],d={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX 2.6.0-Release is officially released! Welcome to download and use.")),(0,a.kt)("h2",{id:"release-notes"},"Release Notes"),(0,a.kt)("h3",{id:"new-feature-apisix-now-supports-writing-custom-plugins-in-other-languages"},"New feature: APISIX now supports writing custom plugins in other languages"),(0,a.kt)("p",null,"APISIX now supports writing plug-ins in Lua to perform custom logic during proxy requests, such as calling webhook to notify external systems, performing special authentication logic, and so on. However, there are cases where developers may want to write plugins in languages other than Lua."),(0,a.kt)("p",null,"For example, developers are not familiar with Lua and want to write plugins in a language they are familiar with, or third-party teams only provide the Java SDK and there is no way to use it inside Lua plugins."),(0,a.kt)("p",null,"Starting from version 2.6, APISIX supports running plugins written in languages other than Lua with the help of plugin runner. The architecture diagram is as follows."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639462480260-86431748-7dcd-4643-816b-92104ec5a666.png",alt:"2021-05-25-1"})),(0,a.kt)("p",null,"APISIX will run the plugin runner as a sidecar."),(0,a.kt)("p",null,"They communicate with each other using RPC, with APISIX sending the request data and configuration and plugin runner loading the user's custom plugin, processing that data and telling APISIX what to do with the requests. Currently, it supports executing logic written in non-Lua languages before the proxy request goes upstream. Later on there will be support for rewriting responses in non-Lua languages."),(0,a.kt)("p",null,"APISIX now places two entry points for the plugin runner to send RPCs: ext-plugin-pre-req, which runs before the Lua plugin logic is executed, and ext-plugin-post-req, which runs after the Lua plugin is executed and before the proxy request goes upstream. Both entries can be dynamically switched on and off at the route level."),(0,a.kt)("p",null,"Assuming we have ext-plugin-pre-req enabled for some requests, and the plugin runner has the validator and rewrite plugins loaded, then for each matching request, it will trigger an RPC call to the plugin runner, first executing the Based on the result, APISIX can determine whether to continue executing the request or reject it. If the request continues, it will run the Lua plugins built into APISIX, such as the flow and speed limiting plugins. If ext-plugin-post-req is enabled, the opposite is true."),(0,a.kt)("p",null,"The plugin runner for Java and Go is already in development. The Java version of the plugin runner is expected to be available within this week, and the Go version of the plugin runner will be completed in June."),(0,a.kt)("h3",{id:"security-enhancement-change-the-prometheus-default-port-to-no-longer-expose-the-port-to-the-data-plane"},"Security enhancement: change the Prometheus default port to no longer expose the port to the data plane"),(0,a.kt)("p",null,"Previously, by default, Prometheus data would be exposed to the port on the data plane, and although you could restrict IP access by configuring the plugin interceptor, there was still the problem of insecurity by default. So starting with 2.6, a new port is dedicated to exposing metrics and by default only listens to 127.0.0.1 ."),(0,a.kt)("p",null,"Prior to 2.6, Prometheus collected APISIX metrics on the data side of the port (default port 9080)."),(0,a.kt)("p",null,"The new port is port 9091 and only listens to 127.0.0.1. You need to change the listening address to your server's intranet address and add a firewall rule to ensure that only Prometheus can access it."),(0,a.kt)("h3",{id:"support-ecological-full-support-for-nacos-service-discovery"},"Support: Ecological full support for Nacos service discovery"),(0,a.kt)("p",null,"APISIX adds support for the Nacos service discovery feature."),(0,a.kt)("p",null,"Users only need to enable the Nacos service discovery function and set the service name in the upstream configuration, and APISIX will periodically get the instance address of the corresponding service in Nacos based on the service name in the background. In this way, there is no need to configure the specific upstream node address inside APISIX, only inside Nacos.\nCurrently, the following external services are supported by APISIX built-in service discovery function."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"DNS"),(0,a.kt)("li",{parentName:"ol"},"Consul KV mode"),(0,a.kt)("li",{parentName:"ol"},"Eureka"),(0,a.kt)("li",{parentName:"ol"},"Nacos")),(0,a.kt)("h3",{id:"support-configuring-dns-resolver-for-ipv6"},"Support: Configuring DNS resolver for IPv6"),(0,a.kt)("p",null,"Previously, when configuring DNS resolver for APISIX, only IPv4 servers could be configured. Since version 2.6, we have added support for IPv6 DNS servers."),(0,a.kt)("p",null,"Now when configuring DNS resolver, you can write IPv6 server address."),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("p",null,"To download the Apache APISIX 2.6.0-Release source code and binary installation package, please visit the download page: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://apisix.apache.org/downloads/"),"."),(0,a.kt)("h2",{id:"documentation-update"},"Documentation Update"),(0,a.kt)("p",null,"During this release, we are also continuously updating and releasing new documentation for use, and welcome your valuable comments."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://apisix.apache.org/docs/apisix/getting-started/")),(0,a.kt)("p",null,"For more details, see the Changelog for version 2.6 and the Apache APISIX commits on GitHub."))}h.isMDXComponent=!0}}]);