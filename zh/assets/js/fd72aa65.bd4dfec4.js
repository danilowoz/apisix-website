"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51771],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89181:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=r(25773),i=r(30808),o=(r(27378),r(35318)),c=["components"],a={title:"Ingress APISIX Use Examples"},s=void 0,l={unversionedId:"practices/index",id:"practices/index",isDocsHomePage:!1,title:"Ingress APISIX Use Examples",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/practices/index.md",sourceDirName:"practices",slug:"/practices/index",permalink:"/zh/docs/ingress-controller/practices/index",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/practices/index.md",tags:[],version:"current",frontMatter:{title:"Ingress APISIX Use Examples"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/zh/docs/ingress-controller/getting-started"},next:{title:"How to quickly check the synchronization status of CRD",permalink:"/zh/docs/ingress-controller/practices/check-crd-status"}},p=[],u={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is an index page about use examples of Ingress APISIX. Read them if you're trying to learn Ingress APISIX."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/ingress-controller/practices/the-hard-way"},"APISIX Ingress Controller the Hard Way"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/ingress-controller/practices/proxy-the-httpbin-service"},"Proxy the httpbin service"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/ingress-controller/practices/proxy-the-httpbin-service-with-ingress"},"Proxy the httpbin service with the native Ingress"),".")))}f.isMDXComponent=!0}}]);