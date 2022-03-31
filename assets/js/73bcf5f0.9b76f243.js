"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15218],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),g=l(n),f=a,m=g["".concat(c,".").concat(f)]||g[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},83149:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],u={title:"How to Write an Apache APISIX Plugin in Java",slug:"2021/06/21/use-java-to-write-apache-apisix-plugins",author:"Zhengsong Tu",authorURL:"https://github.com/tzssangglass",authorImageURL:"https://avatars.githubusercontent.com/u/30819887?v=4",keywords:["APISIX","Apache APISIX","Java","plugin"],description:"Apache APISIX now supports writing plugins in Java! You can now write plugins in a programming language you are familiar with.",tags:["Practical Case"]},c=void 0,l={permalink:"/blog/2021/06/21/use-java-to-write-apache-apisix-plugins",source:"@site/blog/2021/06/21/use-Java-to-write-Apache-APISIX-plugins.md",title:"How to Write an Apache APISIX Plugin in Java",description:"Apache APISIX now supports writing plugins in Java! You can now write plugins in a programming language you are familiar with.",date:"2021-06-21T00:00:00.000Z",formattedDate:"June 21, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:5.58,truncated:!0,authors:[{name:"Zhengsong Tu",url:"https://github.com/tzssangglass",imageURL:"https://avatars.githubusercontent.com/u/30819887?v=4"}],prevItem:{title:"Deploy Apache APISIX and Apache APISIX Ingress Controller on Rancher",permalink:"/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast"},nextItem:{title:"The first GA release of Apache APISIX Ingress Controller v1.0 is now available!",permalink:"/blog/2021/06/18/first-ga-version-v1.0-of-apache-apisix-ingress-controller-released"}},p={authorsImageUrls:[void 0]},s=[],g={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache APISIX now supports writing plugins in Java! You can now write plugins in a programming language you are familiar with.")))}f.isMDXComponent=!0}}]);