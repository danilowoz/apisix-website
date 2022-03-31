"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49394],{35318:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return g}});var r=n(27378);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),h=l(n),g=i,m=h["".concat(c,".").concat(g)]||h[g]||p[g]||a;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=h;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:i,o[1]=u;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12043:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(25773),i=n(30808),a=(n(27378),n(35318)),o=["components"],u={title:"Forward-auth, Another Choice for Authentication Function",authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","Authentication","Plugin","Ecosystem"],description:"This article describes the use of `forward-auth`, a new plugin in Apache APISIX, and provides detailed instructions on how to use this cleanly designed authentication model.",tags:["Technology","Ecosystem","Authentication"]},c=void 0,l={permalink:"/blog/2022/01/26/apisix-integrate-forward-auth-plugin",source:"@site/blog/2022/01/26/apisix-integrate-forward-auth-plugin.md",title:"Forward-auth, Another Choice for Authentication Function",description:"This article describes the use of `forward-auth`, a new plugin in Apache APISIX, and provides detailed instructions on how to use this cleanly designed authentication model.",date:"2022-01-26T00:00:00.000Z",formattedDate:"January 26, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"},{label:"Authentication",permalink:"/blog/tags/authentication"}],readingTime:3.31,truncated:!0,authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4",imageURL:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Integrating Splunk HTTP Event Collector with API Gateway",permalink:"/blog/2022/02/10/splunk-apisix-integration"},nextItem:{title:"Integrating Apache APISIX with gRPC-Web",permalink:"/blog/2022/01/25/apisix-grpc-web-integration"}},s={authorsImageUrls:[void 0,void 0]},p=[],h={toc:p};function g(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article describes the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"forward-auth"),", a new plugin in Apache APISIX, and provides detailed instructions on how to use this cleanly designed authentication model.")))}g.isMDXComponent=!0}}]);