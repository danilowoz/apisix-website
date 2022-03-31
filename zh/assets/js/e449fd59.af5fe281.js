"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12653],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=s(r),f=o,m=g["".concat(u,".").concat(f)]||g[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},43351:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),c=["components"],i={title:"\u4ece 0 \u5230 1\uff0cAPISIX Ingress \u52a0\u5165\u793e\u533a\u540e\u7684\u53d1\u5c55\u4e0e\u6536\u83b7",slug:"2021/10/26/apisix-ingress",author:"\u91d1\u536b",authorURL:"https://github.com/gxthrj",authorImageURL:"https://avatars.githubusercontent.com/u/4413028?v=4",keywords:["Apache APISIX","APISIX Ingress Controller","Kubernetes","Apache"],description:"\u672c\u6587\u63cf\u8ff0\u4e86 APISIX Ingress \u7684\u6210\u957f\u5386\u7a0b\uff0c\u4ee5\u53ca APISIX Ingress \u52a0\u5165\u793e\u533a\u540e\u7684\u529f\u80fd\u63d0\u5347\u4e0e\u793e\u533a\u5e2e\u52a9\u7b49\u591a\u65b9\u9762\u7ec6\u8282\u6536\u83b7\u3002",tags:["Technology"]},u=void 0,s={permalink:"/zh/blog/2021/10/26/apisix-ingress",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/10/26/APISIX-Ingress.md",title:"\u4ece 0 \u5230 1\uff0cAPISIX Ingress \u52a0\u5165\u793e\u533a\u540e\u7684\u53d1\u5c55\u4e0e\u6536\u83b7",description:"\u672c\u6587\u63cf\u8ff0\u4e86 APISIX Ingress \u7684\u6210\u957f\u5386\u7a0b\uff0c\u4ee5\u53ca APISIX Ingress \u52a0\u5165\u793e\u533a\u540e\u7684\u529f\u80fd\u63d0\u5347\u4e0e\u793e\u533a\u5e2e\u52a9\u7b49\u591a\u65b9\u9762\u7ec6\u8282\u6536\u83b7\u3002",date:"2021-10-26T00:00:00.000Z",formattedDate:"2021\u5e7410\u670826\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:13.95,truncated:!0,authors:[{name:"\u91d1\u536b",url:"https://github.com/gxthrj",imageURL:"https://avatars.githubusercontent.com/u/4413028?v=4"}],prevItem:{title:"Apache APISIX \u6269\u5c55\u6307\u5357",permalink:"/zh/blog/2021/10/26/extension-guide"},nextItem:{title:"\u6559\u7a0b\u7bc7\uff1a\u5982\u4f55\u5728 Apache APISIX Ingress Controller \u4e2d\u4f7f\u7528 Cert Manager \u7ba1\u7406\u8bc1\u4e66",permalink:"/zh/blog/2021/10/22/cert-manager-in-ingress"}},l={authorsImageUrls:[void 0]},p=[],g={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u63cf\u8ff0\u4e86 APISIX Ingress \u7684\u6210\u957f\u5386\u7a0b\uff0c\u4ee5\u53ca APISIX Ingress \u52a0\u5165\u793e\u533a\u540e\u7684\u529f\u80fd\u63d0\u5347\u4e0e\u793e\u533a\u5e2e\u52a9\u7b49\u591a\u65b9\u9762\u7ec6\u8282\u6536\u83b7\u3002")))}f.isMDXComponent=!0}}]);