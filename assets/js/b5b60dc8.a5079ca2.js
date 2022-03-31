"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4466],{35318:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=p(t),m=a,f=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=h;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},48347:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=t(25773),a=t(30808),o=(t(27378),t(35318)),c=["components"],i={title:"Apache APISIX v.s Envoy: Which Has the Better Performance?",slug:"2021/06/10/apache-apisix-and-envoy-performance-comparison",author:"Yuansheng Wang",authorURL:"https://github.com/membphis",authorImageURL:"https://avatars.githubusercontent.com/u/6814606?v=4",keywords:["APISIX","Envoy","Apache APISIX","Service Mesh","API Gateway","Performance"],description:"This article introduces the performance comparison between Apache APISIX and Envoy under certain conditions. In general, APISIX is slightly better than Envoy in terms of response latency and QPS, and APISIX has more advantages than Enovy when multiple worker processes are enabled due to the collaborative approach of NGINX in high concurrency scenarios. The performance and latency of APISIX makes it a massive throughput capability in handling north-south traffic.",tags:["Technology"]},s=void 0,p={permalink:"/blog/2021/06/10/apache-apisix-and-envoy-performance-comparison",source:"@site/blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison.md",title:"Apache APISIX v.s Envoy: Which Has the Better Performance?",description:"This article introduces the performance comparison between Apache APISIX and Envoy under certain conditions. In general, APISIX is slightly better than Envoy in terms of response latency and QPS, and APISIX has more advantages than Enovy when multiple worker processes are enabled due to the collaborative approach of NGINX in high concurrency scenarios. The performance and latency of APISIX makes it a massive throughput capability in handling north-south traffic.",date:"2021-06-10T00:00:00.000Z",formattedDate:"June 10, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:5.98,truncated:!0,authors:[{name:"Yuansheng Wang",url:"https://github.com/membphis",imageURL:"https://avatars.githubusercontent.com/u/6814606?v=4"}],prevItem:{title:"Chaos Mesh Helps Apache APISIX Improve Stability",permalink:"/blog/2021/06/16/chaos-mesh-helps-apache-apisix-improve-stability"},nextItem:{title:"Apache APISIX not affected by NGINX CVE-2021-23017",permalink:"/blog/2021/06/07/apache-apisix-not-affected-by-nginx-cve-2021-23017"}},l={authorsImageUrls:[void 0]},u=[],h={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article introduces the performance comparison between Apache APISIX and Envoy under certain conditions. In general, APISIX is slightly better than Envoy in terms of response latency and QPS, and APISIX has more advantages than Enovy when multiple worker processes are enabled due to the collaborative approach of NGINX in high concurrency scenarios. The performance and latency of APISIX makes it a massive throughput capability in handling north-south traffic.")))}m.isMDXComponent=!0}}]);