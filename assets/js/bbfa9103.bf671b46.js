"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21377],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(r),g=o,f=h["".concat(l,".").concat(g)]||h[g]||u[g]||a;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},98784:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),c=["components"],i={title:"Deploy Apache APISIX and Apache APISIX Ingress Controller on Rancher",author:"Jintao Zhang",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://avatars.githubusercontent.com/u/3264292?v=4",keywords:["APISIX","Rancher","Helm Chart","API Gateway"],description:"This article shows the procedure of installing and deploying Apache APISIX and Apache APISIX Ingress Controller in the Rancher App Store (Catalog), and how to proxy Kubernetes services through them.",tags:["Practical Case"]},l=void 0,p={permalink:"/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast",source:"@site/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast.md",title:"Deploy Apache APISIX and Apache APISIX Ingress Controller on Rancher",description:"This article shows the procedure of installing and deploying Apache APISIX and Apache APISIX Ingress Controller in the Rancher App Store (Catalog), and how to proxy Kubernetes services through them.",date:"2021-06-23T00:00:00.000Z",formattedDate:"June 23, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:3.655,truncated:!0,authors:[{name:"Jintao Zhang",url:"https://github.com/tao12345666333",imageURL:"https://avatars.githubusercontent.com/u/3264292?v=4"}],prevItem:{title:"Why do you need Apache APISIX when you have NGINX and Kong?",permalink:"/blog/2021/06/28/why-we-need-apache-apisix"},nextItem:{title:"How to Write an Apache APISIX Plugin in Java",permalink:"/blog/2021/06/21/use-java-to-write-apache-apisix-plugins"}},s={authorsImageUrls:[void 0]},u=[],h={toc:u};function g(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article shows the procedure of installing and deploying Apache APISIX and Apache APISIX Ingress Controller in the Rancher App Store (Catalog), and how to proxy Kubernetes services through them.")))}g.isMDXComponent=!0}}]);