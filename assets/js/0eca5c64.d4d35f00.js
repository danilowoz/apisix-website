"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54307],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||g[h]||i;return n?o.createElement(m,c(c({ref:t},u),{},{components:n})):o.createElement(m,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72111:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return g}});var o=n(25773),r=n(30808),i=(n(27378),n(35318)),c=["components"],a={title:"Making It Simple, Apache APISIX Integrates ClickHouse to Improve Logging Efficiency",authors:[{name:"Zhendong Qi",title:"Author",url:"https://github.com/zhendongcmss",image_url:"https://github.com/zhendongcmss.png"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png"}],keywords:["Apache APISIX","API Gateway","ClickHouse","Logging","Ecosystem"],description:"The author of this article, Zhendong Qi, is from China Mobile Cloud Competence Center. He has extensive experience in distributed object storage software development and has participated in the construction of several resource pools in the mobile cloud. This article describes how community contributor Zhendong Qi contributed `clickhouse-logger` to Apache APISIX and how he used the plugin to simplify the business architecture and improve the efficiency of logging.",tags:["Technology","Logging","Ecosystem"]},s=void 0,l={permalink:"/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier",source:"@site/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier.md",title:"Making It Simple, Apache APISIX Integrates ClickHouse to Improve Logging Efficiency",description:"The author of this article, Zhendong Qi, is from China Mobile Cloud Competence Center. He has extensive experience in distributed object storage software development and has participated in the construction of several resource pools in the mobile cloud. This article describes how community contributor Zhendong Qi contributed `clickhouse-logger` to Apache APISIX and how he used the plugin to simplify the business architecture and improve the efficiency of logging.",date:"2022-03-04T00:00:00.000Z",formattedDate:"March 4, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Logging",permalink:"/blog/tags/logging"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:6.615,truncated:!0,authors:[{name:"Zhendong Qi",title:"Author",url:"https://github.com/zhendongcmss",image_url:"https://github.com/zhendongcmss.png",imageURL:"https://github.com/zhendongcmss.png"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png",imageURL:"https://github.com/yzeng25.png"}],prevItem:{title:"How to Integrate API Gateway with Eureka?",permalink:"/blog/2022/03/05/apisix-integration-eureka-service-discovery"},nextItem:{title:"Apache APISIX and CoreDNS open new doors for service discovery",permalink:"/blog/2022/03/04/apisix-uses-coredns-enable-service-discovery"}},u={authorsImageUrls:[void 0,void 0]},g=[],p={toc:g};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The author of this article, Zhendong Qi, is from China Mobile Cloud Competence Center. He has extensive experience in distributed object storage software development and has participated in the construction of several resource pools in the mobile cloud. This article describes how community contributor Zhendong Qi contributed ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," to Apache APISIX and how he used the plugin to simplify the business architecture and improve the efficiency of logging.")))}h.isMDXComponent=!0}}]);