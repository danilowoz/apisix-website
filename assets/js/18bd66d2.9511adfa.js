"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71683],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,b=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(b,u(u({ref:t},p),{},{components:r})):n.createElement(b,u({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9563:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var n=r(25773),o=r(30808),i=(r(27378),r(35318)),u=["components"],a={title:"How to build Apache APISIX in ARM Ubuntu",authors:[{name:"Qi Guo",title:"Author",url:"https://github.com/guoqqqi",image_url:"https://avatars.githubusercontent.com/u/72343596?v=4"}],keywords:["Apache APISIX","arm","ubuntu","Apple Macbook Pro M1"],description:"By reading this article, you will learn how to build Apache APISIX (M1 chip environment) in ARM Ubuntu from source code.",tags:["Technology"]},c=void 0,l={permalink:"/blog/2022/01/11/building-apisix-in-ubuntu-for-arm",source:"@site/blog/2022/01/11/building-apisix-in-ubuntu-for-arm.md",title:"How to build Apache APISIX in ARM Ubuntu",description:"By reading this article, you will learn how to build Apache APISIX (M1 chip environment) in ARM Ubuntu from source code.",date:"2022-01-11T00:00:00.000Z",formattedDate:"January 11, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:4.48,truncated:!0,authors:[{name:"Qi Guo",title:"Author",url:"https://github.com/guoqqqi",image_url:"https://avatars.githubusercontent.com/u/72343596?v=4",imageURL:"https://avatars.githubusercontent.com/u/72343596?v=4"}],prevItem:{title:"Webinar | From API to Database: A Comprehensive Solution to Perform Online Load Test on Your Distributed System",permalink:"/blog/2022/01/11/apisix-with-shardingsphere-meetup"},nextItem:{title:"Biweekly Report\uff5c12.16-12.31 Feature Highlights Update in Progress",permalink:"/blog/2022/01/05/weekly-report-1231"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"By reading this article you will learn how to build Apache APISIX (M1 chip environment) in ARM Ubuntu from source code. The ARM Ubuntu system is installed with the help of ",(0,i.kt)("a",{parentName:"p",href:"https://multipass.run/"},"https://multipass.run/"),".")))}f.isMDXComponent=!0}}]);