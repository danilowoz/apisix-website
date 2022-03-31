"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4620],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,h=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),i=["components"],c={title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",author:"Junxu Chen",authorURL:"https://github.com/nic-chen",authorImageURL:"https://avatars.githubusercontent.com/u/33000667?v=4",keywords:["API Gateway","APISIX","Apache APISIX","Envoy","Envoy filter"],description:"Envoy is an L7 proxy and communication bus designed for large modern service oriented architectures. A pluggable filter chain mechanism allows filters to be written to perform different tasks and inserted into the main server.",tags:["Technology"]},l=void 0,u={permalink:"/zh/blog/2020/12/16/another-way-to-implement-envoy-filter",source:"@site/blog/2020/12/16/another-way-to-implement-envoy-filter.md",title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",description:"Envoy is an L7 proxy and communication bus designed for large modern service oriented architectures. A pluggable filter chain mechanism allows filters to be written to perform different tasks and inserted into the main server.",date:"2020-12-16T00:00:00.000Z",formattedDate:"2020\u5e7412\u670816\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:4.72,truncated:!0,authors:[{name:"Junxu Chen",url:"https://github.com/nic-chen",imageURL:"https://avatars.githubusercontent.com/u/33000667?v=4"}],prevItem:{title:"\u521d\u63a2 Kubernetes Service APIs",permalink:"/zh/blog/2020/12/18/first-look-at-kubernetes-service-api"},nextItem:{title:"\u8d1d\u58f3\u627e\u623f\uff1a\u5982\u4f55\u57fa\u4e8e Apache APISIX \u642d\u5efa\u7f51\u5173",permalink:"/zh/blog/2020/12/11/beike-how-to-build-gateway-based-on-apache-apisix"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article explains how to run Apache APISIX plugins in Envoy.")))}m.isMDXComponent=!0}}]);