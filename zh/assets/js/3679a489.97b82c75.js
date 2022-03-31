"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87855],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(n),f=o,d=g["".concat(u,".").concat(f)]||g[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},10860:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),i=["components"],c={title:"APISIX-Datadog \u63d2\u4ef6\u53d1\u5e03\uff0c\u52a9\u529b\u7528\u6237\u63d0\u9ad8\u7cfb\u7edf\u7684\u53ef\u89c2\u6d4b\u6027",author:"Bisakh Mondal",authorURL:"https://github.com/bisakhmondal",authorImageURL:"https://avatars.githubusercontent.com/u/41498427?v=4",keywords:["Apache APISIX","Datadog","\u53ef\u89c2\u6d4b\u6027","Cloud Monitoring"],description:"Apache APISIX \u6700\u8fd1\u53d1\u5e03\u4e86\u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6\uff1aAPISIX-Datadog\uff0c\u4ee5\u63d0\u4f9b\u4e0e Datadog \u76d1\u63a7\u5e73\u53f0\u7684\u96c6\u6210\u3002\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86 APISIX-Datadog \u63d2\u4ef6\u7684\u5b9e\u73b0\u539f\u7406\u53ca\u529f\u80fd\u3002",tags:["Technology","Monitoring"]},u=void 0,l={permalink:"/zh/blog/2021/11/12/apisix-datadog",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/11/12/apisix-datadog.md",title:"APISIX-Datadog \u63d2\u4ef6\u53d1\u5e03\uff0c\u52a9\u529b\u7528\u6237\u63d0\u9ad8\u7cfb\u7edf\u7684\u53ef\u89c2\u6d4b\u6027",description:"Apache APISIX \u6700\u8fd1\u53d1\u5e03\u4e86\u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6\uff1aAPISIX-Datadog\uff0c\u4ee5\u63d0\u4f9b\u4e0e Datadog \u76d1\u63a7\u5e73\u53f0\u7684\u96c6\u6210\u3002\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86 APISIX-Datadog \u63d2\u4ef6\u7684\u5b9e\u73b0\u539f\u7406\u53ca\u529f\u80fd\u3002",date:"2021-11-12T00:00:00.000Z",formattedDate:"2021\u5e7411\u670812\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Monitoring",permalink:"/zh/blog/tags/monitoring"}],readingTime:8.765,truncated:!0,authors:[{name:"Bisakh Mondal",url:"https://github.com/bisakhmondal",imageURL:"https://avatars.githubusercontent.com/u/41498427?v=4"}],prevItem:{title:"\u793e\u533a\u5468\u62a5\uff5c11.1-11.14 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/zh/blog/2021/11/16/weekly-report-1114"},nextItem:{title:"\u6d45\u8c08 Apache APISIX \u7684\u53ef\u89c2\u6d4b\u6027",permalink:"/zh/blog/2021/11/04/skywalking"}},p={authorsImageUrls:[void 0]},s=[],g={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX \u6700\u8fd1\u53d1\u5e03\u4e86\u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/next/plugins/datadog"},"APISIX-Datadog"),"\uff0c\u4ee5\u63d0\u4f9b\u4e0e Datadog \u76d1\u63a7\u5e73\u53f0\u7684\u96c6\u6210\u3002\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86 APISIX-Datadog \u63d2\u4ef6\u7684\u5b9e\u73b0\u539f\u7406\u53ca\u529f\u80fd\u3002")))}f.isMDXComponent=!0}}]);