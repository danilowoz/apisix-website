"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66384],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),h=i,g=m["".concat(s,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12273:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(25773),i=r(30808),a=(r(27378),r(35318)),o=["components"],c={title:"Apache APISIX and CoreDNS open new doors for service discovery",authors:[{name:"Zijie Chen",title:"Author",url:"https://github.com/CP3cham",image_url:"https://avatars.githubusercontent.com/u/87352162?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","API Gateway","CoreDNS","Service Discovery","Service Register","Ecosystem"],description:"Apache APISIX is a dynamic, real-time, high-performance cloud-native API gateway that provides rich traffic management functions such as load balancing, dynamic upstream, grayscale publishing, service interruption, identity authentication, and observability. As a cloud native API gateway, Apache APISIX also integrates multiple service discovery capabilities. This article will show you how to configure CoreDNS in Apache APISIX.",tags:["Technology","Ecosystem","Service Discovery"]},s=void 0,l={permalink:"/blog/2022/03/04/apisix-uses-coredns-enable-service-discovery",source:"@site/blog/2022/03/04/apisix-uses-coredns-enable-service-discovery.md",title:"Apache APISIX and CoreDNS open new doors for service discovery",description:"Apache APISIX is a dynamic, real-time, high-performance cloud-native API gateway that provides rich traffic management functions such as load balancing, dynamic upstream, grayscale publishing, service interruption, identity authentication, and observability. As a cloud native API gateway, Apache APISIX also integrates multiple service discovery capabilities. This article will show you how to configure CoreDNS in Apache APISIX.",date:"2022-03-04T00:00:00.000Z",formattedDate:"March 4, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"},{label:"Service Discovery",permalink:"/blog/tags/service-discovery"}],readingTime:8.885,truncated:!0,authors:[{name:"Zijie Chen",title:"Author",url:"https://github.com/CP3cham",image_url:"https://avatars.githubusercontent.com/u/87352162?v=4",imageURL:"https://avatars.githubusercontent.com/u/87352162?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"Making It Simple, Apache APISIX Integrates ClickHouse to Improve Logging Efficiency",permalink:"/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier"},nextItem:{title:"How to Use Gitpod to Develop API Gateway?",permalink:"/blog/2022/03/03/develop-apisix-with-gitpod"}},u={authorsImageUrls:[void 0,void 0]},p=[],m={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX is a dynamic, real-time, high-performance cloud-native API gateway that provides rich traffic management functions such as load balancing, dynamic upstream, grayscale publishing, service interruption, identity authentication, and observability. As a cloud native API gateway, Apache APISIX also integrates multiple service discovery capabilities. This article will show you how to configure CoreDNS in Apache APISIX.")))}h.isMDXComponent=!0}}]);