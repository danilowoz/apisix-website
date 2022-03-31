"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5880],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,y=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,c(c({ref:t},l),{},{components:r})):n.createElement(y,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95971:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),c=["components"],u={title:"\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\u65b0\u5ba0\uff0c\u91d1\u5c71\u529e\u516c\u643a\u624b Apache APISIX \u6253\u9020\u7f51\u5173\u5b9e\u8df5\u65b0\u4f53\u9a8c",slug:"2021/09/28/wps-usercase",author:"\u5f20\u5f3a",keywords:["Apache APISIX","API \u7f51\u5173","\u91d1\u5c71\u529e\u516c","WPS"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u91d1\u5c71\u529e\u516c\u5982\u4f55\u4f7f\u7528 Apache APISIX \u5e94\u5bf9\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\uff0c\u540c\u65f6\u57fa\u4e8e Apache APISIX \u66f4\u65b0\u4e0e\u6539\u8fdb\u7f51\u5173\u5b9e\u8df5\u5c42\u9762\u7684\u5185\u5bb9\u3002",tags:["User Case"]},i=void 0,p={permalink:"/zh/blog/2021/09/28/wps-usercase",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/09/28/WPS-usercase.md",title:"\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\u65b0\u5ba0\uff0c\u91d1\u5c71\u529e\u516c\u643a\u624b Apache APISIX \u6253\u9020\u7f51\u5173\u5b9e\u8df5\u65b0\u4f53\u9a8c",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u91d1\u5c71\u529e\u516c\u5982\u4f55\u4f7f\u7528 Apache APISIX \u5e94\u5bf9\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\uff0c\u540c\u65f6\u57fa\u4e8e Apache APISIX \u66f4\u65b0\u4e0e\u6539\u8fdb\u7f51\u5173\u5b9e\u8df5\u5c42\u9762\u7684\u5185\u5bb9\u3002",date:"2021-09-28T00:00:00.000Z",formattedDate:"2021\u5e749\u670828\u65e5",tags:[{label:"User Case",permalink:"/zh/blog/tags/user-case"}],readingTime:11.645,truncated:!0,authors:[{name:"\u5f20\u5f3a"}],prevItem:{title:"Apache APISIX 2.10.0 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u7b2c\u4e00\u4e2a LTS \u7248\u672c\uff01",permalink:"/zh/blog/2021/09/29/release-apache-apisix-2.10"},nextItem:{title:"Apache APISIX Ingress \u4e3a\u4f55\u6210\u4e3a\u53c8\u62cd\u4e91\u6253\u9020\u5bb9\u5668\u7f51\u5173\u7684\u65b0\u9009\u62e9\uff1f",permalink:"/zh/blog/2021/09/24/youpaicloud-usercase"}},l={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7531\u91d1\u5c71\u529e\u516c\u4e2d\u53f0\u90e8\u95e8 SRE \u7f51\u7edc\u8d1f\u8d23\u4eba\u5f20\u5f3a\u4ecb\u7ecd\u4e86\u91d1\u5c71\u529e\u516c\u5982\u4f55\u4f7f\u7528 Apache APISIX \u5e94\u5bf9\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\uff0c\u540c\u65f6\u57fa\u4e8e Apache APISIX \u66f4\u65b0\u4e0e\u6539\u8fdb\u7f51\u5173\u5b9e\u8df5\u5c42\u9762\u7684\u5185\u5bb9\u3002")))}m.isMDXComponent=!0}}]);