"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32528],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,b=f["".concat(u,".").concat(m)]||f[m]||l[m]||a;return n?r.createElement(b,c(c({ref:t},s),{},{components:n})):r.createElement(b,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),c=["components"],i={title:"Apache APISIX x Kubernetes\uff1a\u6070\u5230\u597d\u5904\uff5c\u76f4\u64ad\u9884\u544a",slug:"2021/07/21/apache-apisix-kubernetes",author:"Apache APISIX \u793e\u533a",keywords:["API \u7f51\u5173","APISIX","Kubernetes","\u76f4\u64ad\u9884\u544a"],description:"\u76f4\u64ad\u9884\u544a\uff1a\u5317\u4eac\u65f6\u95f4 2021 \u5e74 7 \u6708 23 \u65e5\u661f\u671f\u4e94 00:00\uff0cApache APISIX committer \u5f20\u664b\u6d9b\u5c06\u5728 Data on Kubernetes Community \u7684 Meetup \u4e0a\uff0c\u9762\u5411\u5168\u7403\u5f00\u53d1\u8005\u505a\u4e3b\u9898\u4e3a\u300aRun Apache APISIX in Kubernetes\u300b\u7684\u5206\u4eab\u3002",tags:["Events"]},u=void 0,p={permalink:"/zh/blog/2021/07/21/apache-apisix-kubernetes",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/07/21/Apache-APISIX-Kubernetes.md",title:"Apache APISIX x Kubernetes\uff1a\u6070\u5230\u597d\u5904\uff5c\u76f4\u64ad\u9884\u544a",description:"\u76f4\u64ad\u9884\u544a\uff1a\u5317\u4eac\u65f6\u95f4 2021 \u5e74 7 \u6708 23 \u65e5\u661f\u671f\u4e94 00:00\uff0cApache APISIX committer \u5f20\u664b\u6d9b\u5c06\u5728 Data on Kubernetes Community \u7684 Meetup \u4e0a\uff0c\u9762\u5411\u5168\u7403\u5f00\u53d1\u8005\u505a\u4e3b\u9898\u4e3a\u300aRun Apache APISIX in Kubernetes\u300b\u7684\u5206\u4eab\u3002",date:"2021-07-21T00:00:00.000Z",formattedDate:"2021\u5e747\u670821\u65e5",tags:[{label:"Events",permalink:"/zh/blog/tags/events"}],readingTime:2.965,truncated:!0,authors:[{name:"Apache APISIX \u793e\u533a"}],prevItem:{title:"ApacheCon Asia 2021\uff1aApache APISIX \u6280\u672f\u8bae\u9898\u4e00\u89c8",permalink:"/zh/blog/2021/07/25/apachecon-asia"},nextItem:{title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",permalink:"/zh/blog/2021/07/06/the-road-to-customization-of-sina-weibo-api-gateway-based-on-apache-apisix"}},s={authorsImageUrls:[void 0]},l=[],f={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5317\u4eac\u65f6\u95f4 2021 \u5e74 7 \u6708 23 \u65e5\u661f\u671f\u4e94 00:00\uff0c Apache APISIX committer \u5f20\u664b\u6d9b\u5c06\u5728 Data on Kubernetes Community \u7684 Meetup \u4e0a\uff0c\u9762\u5411\u5168\u7403\u5f00\u53d1\u8005\u505a\u4e3b\u9898\u4e3a\u300aRun Apache APISIX in Kubernetes\u300b\u7684\u5206\u4eab\u3002")))}m.isMDXComponent=!0}}]);