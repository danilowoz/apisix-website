"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33565],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),y=a,g=m["".concat(c,".").concat(y)]||m[y]||s[y]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],l={title:"Upgrade of observability capabilities, API Gateway Apache APISIX integrates OpenTelemetry",authors:[{name:"Haochao Zhuang",title:"Author",url:"https://github.com/dmsolr",image_url:"https://avatars.githubusercontent.com/u/29735230?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","API Gateway","OpenTelemetry","Observability","Ecosystem"],description:"This article introduces you to the Apache APISIX `opentelemetry` plugin concept and how to enable and deploy the `opentelemetry` plugin.",tags:["Technology","Ecosystem","Observability"]},c=void 0,u={permalink:"/blog/2022/02/28/apisix-integration-opentelemetry-plugin",source:"@site/blog/2022/02/28/apisix-integration-opentelemetry-plugin.md",title:"Upgrade of observability capabilities, API Gateway Apache APISIX integrates OpenTelemetry",description:"This article introduces you to the Apache APISIX `opentelemetry` plugin concept and how to enable and deploy the `opentelemetry` plugin.",date:"2022-02-28T00:00:00.000Z",formattedDate:"February 28, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"},{label:"Observability",permalink:"/blog/tags/observability"}],readingTime:7.97,truncated:!0,authors:[{name:"Haochao Zhuang",title:"Author",url:"https://github.com/dmsolr",image_url:"https://avatars.githubusercontent.com/u/29735230?v=4",imageURL:"https://avatars.githubusercontent.com/u/29735230?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"API Gateway Apache APISIX provides enhancements on API Management",permalink:"/blog/2022/03/01/apisix-integration-public-api-plugin"},nextItem:{title:"How to Integrate API Gateway and Consul?",permalink:"/blog/2022/02/25/consul-api-gateway"}},p={authorsImageUrls:[void 0,void 0]},s=[],m={toc:s};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article introduces you to the Apache APISIX ",(0,o.kt)("inlineCode",{parentName:"p"},"opentelemetry")," plugin concept and how to enable and deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},"opentelemetry")," plugin.")))}y.isMDXComponent=!0}}]);