"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15053],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,g=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18279:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),c=["components"],i={title:"\u4fdd\u59c6\u7ea7\u6559\u7a0b\uff0c\u4ece\u6982\u5ff5\u5230\u5b9e\u8df5\u5e2e\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX Ingress",author:"\u5f20\u664b\u6d9b",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://avatars.githubusercontent.com/u/3264292?v=4",date:new Date("2021-10-09T00:00:00.000Z"),keywords:["Apache APISIX","Ingress","Kubernetes","\u81ea\u5b9a\u4e49\u8d44\u6e90"],description:"\u672c\u6587\u4ece\u7406\u8bba\u548c\u5b9e\u8df5\u4e24\u4e2a\u89d2\u5ea6\uff0c\u5bf9 Apache APISIX Ingress \u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u63cf\u8ff0\u4e0e\u8bb2\u89e3",tags:["Technology"]},u=void 0,p={permalink:"/zh/blog/2021/10/09/apisix-ingress-techblog",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/10/09/apisix-ingress-techblog.md",title:"\u4fdd\u59c6\u7ea7\u6559\u7a0b\uff0c\u4ece\u6982\u5ff5\u5230\u5b9e\u8df5\u5e2e\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX Ingress",description:"\u672c\u6587\u4ece\u7406\u8bba\u548c\u5b9e\u8df5\u4e24\u4e2a\u89d2\u5ea6\uff0c\u5bf9 Apache APISIX Ingress \u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u63cf\u8ff0\u4e0e\u8bb2\u89e3",date:"2021-10-09T00:00:00.000Z",formattedDate:"2021\u5e7410\u67089\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:14.34,truncated:!0,authors:[{name:"\u5f20\u664b\u6d9b",url:"https://github.com/tao12345666333",imageURL:"https://avatars.githubusercontent.com/u/3264292?v=4"}],prevItem:{title:"Apache APISIX \u793e\u533a\u65b0\u91cc\u7a0b\u7891\u2014\u2014\u5168\u7403\u8d21\u732e\u8005\u7a81\u7834 300 \u4f4d\uff01",permalink:"/zh/blog/2021/10/13/celebrating-300-contributors-of-apisix"},nextItem:{title:"Apache APISIX \u793e\u533a\u6210\u5458\u52a9\u529b openEuler \u53d1\u5e03\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248",permalink:"/zh/blog/2021/10/01/openeuler"}},l={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005\u5f20\u664b\u6d9b\uff0cApache APISIX Committer\u3001Kubernetes Ingress Nginx Reviewer\uff0c\u591a\u4e2a\u4e91\u539f\u751f\u5f00\u6e90\u9879\u76ee\u7684\u8d21\u732e\u8005\u3002")))}m.isMDXComponent=!0}}]);