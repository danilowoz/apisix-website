"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64894],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=a(n),f=o,v=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(v,u(u({ref:t},p),{},{components:n})):r.createElement(v,u({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var a=2;a<i;a++)u[a]=n[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1522:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return p}});var r=n(25773),o=n(30808),i=(n(27378),n(35318)),u=["components"],l={title:"Developer Guide"},c=void 0,a={unversionedId:"developer-guide",id:"version-0.1.0/developer-guide",isDocsHomePage:!1,title:"Developer Guide",description:"\x3c!--",source:"@site/docs-apisix-go-plugin-runner_versioned_docs/version-0.1.0/developer-guide.md",sourceDirName:".",slug:"/developer-guide",permalink:"/docs/go-plugin-runner/0.1.0/developer-guide",editUrl:null,tags:[],version:"0.1.0",frontMatter:{title:"Developer Guide"},sidebar:"version-0.1.0/docs",previous:{title:"Getting started",permalink:"/docs/go-plugin-runner/0.1.0/getting-started"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Build",id:"build",children:[]},{value:"Test",id:"test",children:[]}],d={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This documentation explains how to develop this project."),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"make build"),". Then you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock APISIX_CONF_EXPIRE_TIME=3600 ./go-runner run"),"\nto start it."),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"make test"),"."))}s.isMDXComponent=!0}}]);