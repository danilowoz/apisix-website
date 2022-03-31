"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97901],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),h=o,d=f["".concat(u,".").concat(h)]||f[h]||p[h]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22388:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(25773),o=n(30808),i=(n(27378),n(35318)),a=["components"],s={title:"Apache APISIX's integration with Azure Serverless",author:"Bisakh Mondal",authorURL:"https://github.com/bisakhmondal",authorImageURL:"https://avatars.githubusercontent.com/u/41498427?v=4",keywords:["Apache APISIX","Azure Functions","Microsoft","Serverless"],description:"This article talks about the recent addition of a new plugin `azure-functions`, and gives detailed instructions on how to integrate Azure Functions, which is a widely used serverless solution, into the Apache APISIX serverless suite.",tags:["Technology"]},u=void 0,c={permalink:"/blog/2021/12/01/apisix-supports-azure-functions",source:"@site/blog/2021/12/01/apisix-supports-azure-functions.md",title:"Apache APISIX's integration with Azure Serverless",description:"This article talks about the recent addition of a new plugin `azure-functions`, and gives detailed instructions on how to integrate Azure Functions, which is a widely used serverless solution, into the Apache APISIX serverless suite.",date:"2021-12-01T00:00:00.000Z",formattedDate:"December 1, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:6.975,truncated:!0,authors:[{name:"Bisakh Mondal",url:"https://github.com/bisakhmondal",imageURL:"https://avatars.githubusercontent.com/u/41498427?v=4"}],prevItem:{title:"Biweekly Report\uff5c11.15-11.30 Feature Highlights Update in Progress",permalink:"/blog/2021/12/02/weekly-report-1130"},nextItem:{title:"Apache APISIX 2.11.0 is officially released with more new features",permalink:"/blog/2021/12/01/release-apache-apisix-2.11"}},l={authorsImageUrls:[void 0]},p=[],f={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article talks about the recent addition of a new plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-functions"),", and gives detailed instructions on how to integrate Azure Functions, which is a widely used serverless solution, into the Apache APISIX serverless suite.")))}h.isMDXComponent=!0}}]);