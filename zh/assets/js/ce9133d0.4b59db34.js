"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50215],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(n),m=o,h=g["".concat(u,".").concat(m)]||g[m]||s[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},21591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),i=["components"],c={title:"\u518d\u63a5\u518d\u5389\uff01Apache APISIX \u96c6\u6210 Open Policy Agent",authors:[{name:"\u767d\u6cfd\u5e73",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","Open Policy Agent","OPA","API \u7f51\u5173"],description:"\u672c\u6587\u4ee5 HTTP API \u4e3a\u4f8b\u4e3a\u5927\u5bb6\u4ecb\u7ecd `opa` \u63d2\u4ef6\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u5c06 Apache APISIX \u4e0e OPA \u8fdb\u884c\u96c6\u6210\uff0c\u5b9e\u73b0\u540e\u7aef\u670d\u52a1\u7684\u8ba4\u8bc1\u6388\u6743\u89e3\u8026\u3002",tags:["Technology","Authentication"]},u=void 0,l={permalink:"/zh/blog/2021/12/24/open-policy-agent",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/12/24/open-policy-agent.md",title:"\u518d\u63a5\u518d\u5389\uff01Apache APISIX \u96c6\u6210 Open Policy Agent",description:"\u672c\u6587\u4ee5 HTTP API \u4e3a\u4f8b\u4e3a\u5927\u5bb6\u4ecb\u7ecd `opa` \u63d2\u4ef6\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u5c06 Apache APISIX \u4e0e OPA \u8fdb\u884c\u96c6\u6210\uff0c\u5b9e\u73b0\u540e\u7aef\u670d\u52a1\u7684\u8ba4\u8bc1\u6388\u6743\u89e3\u8026\u3002",date:"2021-12-24T00:00:00.000Z",formattedDate:"2021\u5e7412\u670824\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Authentication",permalink:"/zh/blog/tags/authentication"}],readingTime:6.035,truncated:!0,authors:[{name:"\u767d\u6cfd\u5e73",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4",imageURL:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"\u751f\u6001\u4e30\u5bcc\u6301\u7eed\u8fdb\u884c\u4e2d\uff0cApache OpenWhisk \u96c6\u6210\u95ea\u4eae\u767b\u573a",permalink:"/zh/blog/2021/12/24/apisix-integrate-openwhisk-plugin"},nextItem:{title:"\u6377\u62a5\u9891\u4f20\uff01Apache APISIX \u73b0\u5df2\u652f\u6301\u5bf9\u63a5 Google Cloud Logging",permalink:"/zh/blog/2021/12/22/google-logging"}},p={authorsImageUrls:[void 0,void 0]},s=[],g={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ee5 HTTP API \u4e3a\u4f8b\u4e3a\u5927\u5bb6\u4ecb\u7ecd ",(0,a.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u5c06 Apache APISIX \u4e0e OPA \u8fdb\u884c\u96c6\u6210\uff0c\u5b9e\u73b0\u540e\u7aef\u670d\u52a1\u7684\u8ba4\u8bc1\u6388\u6743\u89e3\u8026\u3002")))}m.isMDXComponent=!0}}]);