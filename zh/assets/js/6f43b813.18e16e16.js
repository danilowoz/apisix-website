"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[899],{35318:function(e,t,n){n.d(t,{Zo:function(){return I},kt:function(){return g}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},I=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,I=p(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,h=u["".concat(l,".").concat(g)]||u[g]||o[g]||s;return n?a.createElement(h,i(i({ref:t},I),{},{components:n})):a.createElement(h,i({ref:t},I))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return I},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return o}});var a=n(25773),r=n(30808),s=(n(27378),n(35318)),i=["components"],p={title:"\u4fdd\u59c6\u7ea7\u6559\u7a0b\uff0c\u4ece\u6982\u5ff5\u5230\u5b9e\u8df5\u5e2e\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX Ingress",author:"\u5f20\u664b\u6d9b",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://avatars.githubusercontent.com/u/3264292?v=4",date:new Date("2021-10-09T00:00:00.000Z"),keywords:["Apache APISIX","Ingress","Kubernetes","\u81ea\u5b9a\u4e49\u8d44\u6e90"],description:"\u672c\u6587\u4ece\u7406\u8bba\u548c\u5b9e\u8df5\u4e24\u4e2a\u89d2\u5ea6\uff0c\u5bf9 Apache APISIX Ingress \u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u63cf\u8ff0\u4e0e\u8bb2\u89e3",tags:["Technology"]},l=void 0,c={permalink:"/zh/blog/2021/10/09/apisix-ingress-techblog",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/10/09/apisix-ingress-techblog.md",title:"\u4fdd\u59c6\u7ea7\u6559\u7a0b\uff0c\u4ece\u6982\u5ff5\u5230\u5b9e\u8df5\u5e2e\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX Ingress",description:"\u672c\u6587\u4ece\u7406\u8bba\u548c\u5b9e\u8df5\u4e24\u4e2a\u89d2\u5ea6\uff0c\u5bf9 Apache APISIX Ingress \u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u63cf\u8ff0\u4e0e\u8bb2\u89e3",date:"2021-10-09T00:00:00.000Z",formattedDate:"2021\u5e7410\u67089\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:14.34,truncated:!0,authors:[{name:"\u5f20\u664b\u6d9b",url:"https://github.com/tao12345666333",imageURL:"https://avatars.githubusercontent.com/u/3264292?v=4"}],prevItem:{title:"Apache APISIX \u793e\u533a\u65b0\u91cc\u7a0b\u7891\u2014\u2014\u5168\u7403\u8d21\u732e\u8005\u7a81\u7834 300 \u4f4d\uff01",permalink:"/zh/blog/2021/10/13/celebrating-300-contributors-of-apisix"},nextItem:{title:"Apache APISIX \u793e\u533a\u6210\u5458\u52a9\u529b openEuler \u53d1\u5e03\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248",permalink:"/zh/blog/2021/10/01/openeuler"}},I={authorsImageUrls:[void 0]},o=[{value:"Apache APISIX Ingress \u6982\u89c8",id:"apache-apisix-ingress-\u6982\u89c8",children:[{value:"Apache APISIX Ingress \u5b9a\u4e49",id:"apache-apisix-ingress-\u5b9a\u4e49",children:[]},{value:"Apache APISIX \u7b80\u8ff0",id:"apache-apisix-\u7b80\u8ff0",children:[]}]},{value:"APISIX Ingress vs K8s Ingress Nginx",id:"apisix-ingress-vs-k8s-ingress-nginx",children:[{value:"\u914d\u7f6e\u5c42\u9762",id:"\u914d\u7f6e\u5c42\u9762",children:[]},{value:"\u4e30\u5bcc\u5ea6",id:"\u4e30\u5bcc\u5ea6",children:[]},{value:"\u67b6\u6784\u5206\u79bb",id:"\u67b6\u6784\u5206\u79bb",children:[]}]},{value:"APISIX Ingress \u7279\u6027\u8be6\u89e3",id:"apisix-ingress-\u7279\u6027\u8be6\u89e3",children:[{value:"CRD \u6269\u5c55",id:"crd-\u6269\u5c55",children:[]},{value:"\u81ea\u5b9a\u4e49\u8d44\u6e90",id:"\u81ea\u5b9a\u4e49\u8d44\u6e90",children:[]}]},{value:"APISIX Ingress \u4e0a\u624b\u5b9e\u8df5",id:"apisix-ingress-\u4e0a\u624b\u5b9e\u8df5",children:[{value:"\u5b9e\u8df5\u573a\u666f\u4e00\uff1a\u6d41\u91cf\u5207\u5206",id:"\u5b9e\u8df5\u573a\u666f\u4e00\u6d41\u91cf\u5207\u5206",children:[]},{value:"\u5b9e\u8df5\u573a\u666f\u4e8c\uff1a\u914d\u7f6e\u8ba4\u8bc1",id:"\u5b9e\u8df5\u573a\u666f\u4e8c\u914d\u7f6e\u8ba4\u8bc1",children:[]},{value:"\u5b9e\u8df5\u573a\u666f\u4e09\uff1aK8s \u8d44\u6e90\u6269\u5c55",id:"\u5b9e\u8df5\u573a\u666f\u4e09k8s-\u8d44\u6e90\u6269\u5c55",children:[]}]},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",children:[]}],u={toc:o};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005\u5f20\u664b\u6d9b\uff0cApache APISIX Committer\u3001Kubernetes Ingress Nginx Reviewer\uff0c\u591a\u4e2a\u4e91\u539f\u751f\u5f00\u6e90\u9879\u76ee\u7684\u8d21\u732e\u8005\u3002")),(0,s.kt)("h2",{id:"apache-apisix-ingress-\u6982\u89c8"},"Apache APISIX Ingress \u6982\u89c8"),(0,s.kt)("h3",{id:"apache-apisix-ingress-\u5b9a\u4e49"},"Apache APISIX Ingress \u5b9a\u4e49"),(0,s.kt)("p",null,"\u5728 K8s \u751f\u6001\u4e2d\uff0cIngress \u4f5c\u4e3a\u8868\u793a K8s \u6d41\u91cf\u5165\u53e3\u7684\u4e00\u79cd\u8d44\u6e90\uff0c\u60f3\u8981\u8ba9\u5176\u751f\u6548\uff0c\u5c31\u9700\u8981\u6709\u4e00\u4e2a Ingress Controller \u53bb\u76d1\u542c K8s \u4e2d\u7684 Ingress \u8d44\u6e90\uff0c\u5e76\u5bf9\u8fd9\u4e9b\u8d44\u6e90\u8fdb\u884c\u76f8\u5e94\u89c4\u5219\u7684\u89e3\u6790\u548c\u5b9e\u9645\u627f\u8f7d\u6d41\u91cf\u3002\u5728\u5f53\u4e0b\u8d8b\u52bf\u4e2d\uff0c\u50cf Kubernetes Ingress Nginx \u5c31\u662f\u4f7f\u7528\u6700\u5e7f\u6cdb\u7684 Ingress Controller \u5b9e\u73b0\u3002"),(0,s.kt)("p",null,"\u800c APISIX Ingress \u5219\u662f\u53e6\u4e00\u79cd Ingress Controller \u7684\u5b9e\u73b0\u3002\u8ddf Kubernetes Ingress Nginx \u7684\u533a\u522b\u4e3b\u8981\u5728\u4e8e APISIX Ingress \u662f\u4ee5 Apache APISIX \u4f5c\u4e3a\u5b9e\u9645\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\u7684\u6570\u636e\u9762\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5f53\u7528\u6237\u8bf7\u6c42\u5230\u5177\u4f53\u7684\u67d0\u4e00\u4e2a\u670d\u52a1/API/\u7f51\u9875\u65f6\uff0c\u901a\u8fc7\u5916\u90e8\u4ee3\u7406\u5c06\u6574\u4e2a\u4e1a\u52a1\u6d41\u91cf/\u7528\u6237\u8bf7\u6c42\u4f20\u8f93\u5230 K8s \u96c6\u7fa4\uff0c\u7136\u540e\u7ecf\u8fc7 APISIX Ingress \u8fdb\u884c\u540e\u7eed\u5904\u7406\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765366863-8964a75c-0c16-4683-ad9b-c8c83ac64ec6.png",alt:"APISIX Ingress \u67b6\u6784"})),(0,s.kt)("p",null,"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u5230\uff0cAPISIX Ingress \u5206\u6210\u4e86\u4e24\u90e8\u5206\u3002\u4e00\u90e8\u5206\u662f APISIX Ingress Controller\uff0c\u4f5c\u4e3a\u63a7\u5236\u9762\u5b83\u5c06\u5b8c\u6210\u914d\u7f6e\u7ba1\u7406\u4e0e\u5206\u53d1\u3002\u53e6\u4e00\u90e8\u5206 APISIX Proxy Pod \u8d1f\u8d23\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\uff0c\u5b83\u662f\u901a\u8fc7 CRD(Custom Resource Definitions) \u7684\u65b9\u5f0f\u5b9e\u73b0\u7684\u3002Apache APISIX Ingress \u9664\u4e86\u652f\u6301\u81ea\u5b9a\u4e49\u8d44\u6e90\u5916\uff0c\u8fd8\u652f\u6301\u539f\u751f\u7684 K8s Ingress \u8d44\u6e90\u3002"),(0,s.kt)("h3",{id:"apache-apisix-\u7b80\u8ff0"},"Apache APISIX \u7b80\u8ff0"),(0,s.kt)("p",null,"\u524d\u8fb9\u6211\u4eec\u63d0\u5230\u4e86 APISIX Ingress \u662f\u91c7\u7528 Apache APISIX \u4f5c\u4e3a\u5b9e\u9645\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\u7684\u6570\u636e\u9762\uff0c\u90a3\u4e48 Apache APISIX \u9879\u76ee\u53c8\u662f\u505a\u4ec0\u4e48\u7684\u5462\uff1f"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765402660-6b20dd1c-bef6-4dcb-974e-fa80334e0623.png",alt:"Apache APISIX \u67b6\u6784"})),(0,s.kt)("p",null,"Apache APISIX \u662f Apache \u57fa\u91d1\u4f1a\u65d7\u4e0b\u7684\u9876\u7ea7\u5f00\u6e90\u9879\u76ee\uff0c\u4e5f\u662f\u5f53\u524d\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90\u7f51\u5173\u9879\u76ee\u3002\u4f5c\u4e3a\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684\u5f00\u6e90 API \u7f51\u5173\uff0cApache APISIX \u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002"),(0,s.kt)("p",null,"Apache APISIX \u53ef\u4ee5\u5e2e\u52a9\u4f01\u4e1a\u5feb\u901f\u3001\u5b89\u5168\u5730\u5904\u7406 API \u548c\u5fae\u670d\u52a1\u6d41\u91cf\uff0c\u6bd4\u5982\u9650\u6d41\u8ba4\u8bc1\u3001\u65e5\u5fd7\u5b89\u5168\u529f\u80fd\uff0c\u4ee5\u53ca\u652f\u6301\u4e30\u5bcc\u7684\u81ea\u5b9a\u4e49\u63d2\u4ef6\u3002\u76ee\u524d\u4e5f\u4e0e\u5f88\u591a\u5f00\u6e90\u9879\u76ee\u5982 Apache SkyWalking\u3001Prometheus \u7b49\u4e4b\u7c7b\u7684\u7ec4\u4ef6\u8fdb\u884c\u4e86\u76f8\u5173\u96c6\u6210\u3002"),(0,s.kt)("h2",{id:"apisix-ingress-vs-k8s-ingress-nginx"},"APISIX Ingress vs K8s Ingress Nginx"),(0,s.kt)("p",null,"\u56e0\u4e3a\u672c\u4eba\u540c\u65f6\u53c2\u4e0e\u5230\u4e86 APISIX Ingress \u4e0e K8s Ingress Nginx \u4e24\u4e2a\u9879\u76ee\u7684\u5f00\u53d1\u548c\u7ef4\u62a4\uff0c\u6240\u4ee5\u5f88\u591a\u4eba\u4e5f\u4f1a\u95ee\u6211\uff0c\u8fd9\u4e24\u4e2a\u9879\u76ee\u505a\u6bd4\u8f83\u7684\u8bdd\uff0c\u5230\u5e95\u8be5\u5982\u4f55\u9009\u62e9\uff1f\u6216\u8005\u8bf4\u4e3a\u4ec0\u4e48\u6709\u4e86 K8s Ingress Nginx \u8fd8\u8981\u518d\u505a APISIX Ingress\u3002"),(0,s.kt)("h3",{id:"\u914d\u7f6e\u5c42\u9762"},"\u914d\u7f6e\u5c42\u9762"),(0,s.kt)("p",null,"\u5728 APISIX Ingress \u4e2d\uff0c\u6211\u4eec\u589e\u52a0\u4e86\u4e00\u4e9b\u4e30\u5bcc\u4e14\u7075\u6d3b\u7684\u914d\u7f6e\uff0c\u6bd4\u5982\u901a\u8fc7\u5355\u4e2a\u914d\u7f6e\u6587\u4ef6\u53bb\u5b9e\u73b0\u7070\u5ea6\u90e8\u7f72\u3002\u4f46\u5728 K8s Ingress Nginx \u4e2d\u53bb\u5b9e\u73b0\u5982\u4e0a\u6548\u679c\u7684\u8bdd\uff0c\u6700\u5c11\u4e5f\u9700\u8981\u6709\u4e24\u4e2a Ingress \u8d44\u6e90\u6587\u4ef6\u624d\u53ef\u4ee5\u5b8c\u6210\u3002"),(0,s.kt)("h3",{id:"\u4e30\u5bcc\u5ea6"},"\u4e30\u5bcc\u5ea6"),(0,s.kt)("p",null,"\u5728\u4e30\u5bcc\u5ea6\u4e0a\uff0c\u7531\u4e8e Apache APISIX \u672c\u8eab\u7684\u81ea\u5e26\u529f\u80fd\u4e30\u5bcc\u4e14\u5141\u8bb8\u591a\u79cd\u63d2\u4ef6\u6269\u5c55\u4f7f\u7528\uff0c\u6240\u4ee5\u4f7f\u7528 APISIX Ingress \u5c31\u53ef\u4ee5\u7701\u53bb\u81ea\u5df1\u989d\u5916\u914d\u7f6e\u529f\u80fd\u7684\u7e41\u7410\u6b65\u9aa4\uff0c\u53ef\u4ee5\u5c06\u66f4\u591a\u7684\u65f6\u95f4\u6295\u5165\u5230\u5b9e\u9645\u5f00\u53d1\u4e2d\u3002"),(0,s.kt)("h3",{id:"\u67b6\u6784\u5206\u79bb"},"\u67b6\u6784\u5206\u79bb"),(0,s.kt)("p",null,"APISIX Ingress \u91c7\u7528\u4e86\u6570\u636e\u9762\u4e0e\u63a7\u5236\u9762\u7684\u5206\u79bb\u67b6\u6784\uff0c\u6240\u4ee5\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u5c06\u6570\u636e\u9762\u90e8\u7f72\u5728 K8s \u96c6\u7fa4\u5185\u90e8/\u5916\u90e8\u3002\u4f46 K8s Ingress Nginx \u662f\u5c06\u63a7\u5236\u9762\u548c\u6570\u636e\u9762\u653e\u5728\u4e86\u540c\u4e00\u4e2a Pod \u4e2d\uff0c\u5982\u679c Pod \u6216\u63a7\u5236\u9762\u51fa\u73b0\u4e00\u70b9\u95ea\u5931\uff0c\u6574\u4e2a Pod \u5c31\u4f1a\u6302\u6389\uff0c\u8fdb\u800c\u5f71\u54cd\u5230\u4e1a\u52a1\u6d41\u91cf\u3002"),(0,s.kt)("p",null,"\u8fd9\u79cd\u67b6\u6784\u5206\u79bb\uff0c\u7ed9\u7528\u6237\u63d0\u4f9b\u4e86\u6bd4\u8f83\u65b9\u4fbf\u7684\u90e8\u7f72\u9009\u62e9\uff0c\u540c\u65f6\u5728\u4e1a\u52a1\u67b6\u6784\u8c03\u6574\u573a\u666f\u4e0b\uff0c\u4e5f\u65b9\u4fbf\u8fdb\u884c\u76f8\u5173\u6570\u636e\u7684\u8fc1\u79fb\u4e0e\u4f7f\u7528\u3002"),(0,s.kt)("h2",{id:"apisix-ingress-\u7279\u6027\u8be6\u89e3"},"APISIX Ingress \u7279\u6027\u8be6\u89e3"),(0,s.kt)("p",null,"\u7531\u4e8e Apache APISIX \u662f\u4e00\u4e2a\u5168\u52a8\u6001\u7684\u9ad8\u6027\u80fd\u7f51\u5173\uff0c\u6240\u4ee5\u5728 APISIX Ingress \u81ea\u8eab\u5c31\u652f\u6301\u4e86\u5168\u52a8\u6001\uff0c\u5305\u62ec\u8def\u7531\u3001SSL \u8bc1\u4e66\u3001\u4e0a\u6e38\u4ee5\u53ca\u63d2\u4ef6\u7b49\u7b49\u3002"),(0,s.kt)("p",null,"\u540c\u65f6 APISIX Ingress \u8fd8\u5177\u6709\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u652f\u6301 CRD\uff0c\u66f4\u5bb9\u6613\u7406\u89e3\u58f0\u660e\u5f0f\u914d\u7f6e\uff1b\u540c\u65f6\u72b6\u6001\u68c0\u67e5\u53ef\u4fdd\u8bc1\u5feb\u901f\u638c\u63e1\u58f0\u660e\u914d\u7f6e\u7684\u540c\u6b65\u72b6\u6001"),(0,s.kt)("li",{parentName:"ul"},"\u652f\u6301\u9ad8\u7ea7\u8def\u7531\u5339\u914d\u89c4\u5219\u4ee5\u53ca\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u53ef\u4e0e Apache APISIX \u5b98\u65b9 50 \u591a\u4e2a\u63d2\u4ef6 & \u5ba2\u6237\u81ea\u5b9a\u4e49\u63d2\u4ef6\u8fdb\u884c\u6269\u5c55\u4f7f\u7528"),(0,s.kt)("li",{parentName:"ul"},"\u652f\u6301 K8s \u539f\u751f Ingress \u914d\u7f6e"),(0,s.kt)("li",{parentName:"ul"},"\u652f\u6301\u6d41\u91cf\u5207\u5206"),(0,s.kt)("li",{parentName:"ul"},"\u652f\u6301 gRPC plaintext \u4e0e TCP 4 \u5c42\u4ee3\u7406"),(0,s.kt)("li",{parentName:"ul"},"\u670d\u52a1\u81ea\u52a8\u6ce8\u518c\u53d1\u73b0\uff0c\u65e0\u60e7\u6269\u7f29\u5bb9"),(0,s.kt)("li",{parentName:"ul"},"\u66f4\u7075\u6d3b\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u81ea\u5e26\u5065\u5eb7\u68c0\u67e5\u529f\u80fd")),(0,s.kt)("p",null,"\u4ee5\u4e0b\u6211\u4eec\u5c06\u4ece CRD \u4e0e\u81ea\u5b9a\u4e49\u8d44\u6e90\u5c42\u9762\u8fdb\u884c\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002"),(0,s.kt)("h3",{id:"crd-\u6269\u5c55"},"CRD \u6269\u5c55"),(0,s.kt)("p",null,"\u5728\u524d\u9762\u7684\u4ecb\u7ecd\u4e2d\u6211\u4eec\u63d0\u5230\u4e86 CRD\uff0c\u90a3\u4e48 APISIX Ingress \u662f\u5982\u4f55\u4f7f\u7528 CRD \u6269\u5c55\u7684\uff1f"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765449155-0e25f1d0-e62a-4c4f-ab9a-019f609ed5fb.png",alt:"CRD \u6269\u5c55"})),(0,s.kt)("p",null,"\u4ece\u7528\u6237\u5c42\u9762\u6765\u770b\uff0c\u5f53 Client \u53d1\u8d77\u8bf7\u6c42\uff0c\u5230\u8fbe Apache APISIX \u540e\uff0c\u4f1a\u76f4\u63a5\u628a\u76f8\u5e94\u7684\u4e1a\u52a1\u6d41\u91cf\u4f20\u8f93\u5230\u540e\u7aef\uff08\u5982 Service Pod\uff09\uff0c\u4ece\u800c\u5b8c\u6210\u8f6c\u53d1\u8fc7\u7a0b\u3002\u6b64\u8fc7\u7a0b\u4e0d\u9700\u8981\u7ecf\u8fc7 Ingress Controller\uff0c\u8fd9\u6837\u505a\u53ef\u4ee5\u4fdd\u8bc1\u4e00\u65e6\u6709\u95ee\u9898\u51fa\u73b0\uff0c\u6216\u8005\u662f\u8fdb\u884c\u53d8\u66f4\u3001\u6269\u7f29\u5bb9\u6216\u8005\u8fc1\u79fb\u5904\u7406\u7b49\uff0c\u90fd\u4e0d\u4f1a\u5f71\u54cd\u5230\u7528\u6237\u548c\u4e1a\u52a1\u6d41\u91cf\u3002"),(0,s.kt)("p",null,"\u540c\u65f6\u5728\u914d\u7f6e\u7aef\uff0c\u7528\u6237\u901a\u8fc7 kubectl apply\uff0c\u53ef\u5c06\u81ea\u5b9a\u4e49 CRD \u914d\u7f6e\u5e94\u7528\u5230 K8s \u96c6\u7fa4\u3002Ingress Controller \u4f1a\u6301\u7eed watch \u8fd9\u4e9b\u8d44\u6e90\u53d8\u66f4\uff0c\u6765\u5c06\u76f8\u5e94\u914d\u7f6e\u5e94\u7528\u5230 Apache APISIX\u3002"),(0,s.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u8d44\u6e90"},"\u81ea\u5b9a\u4e49\u8d44\u6e90"),(0,s.kt)("p",null,"APISIX Ingress \u76ee\u524d\u5df2\u7ecf\u652f\u6301\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90\u4e3b\u8981\u662f\u4ee5\u4e0b 5 \u7c7b\uff0c\u6d89\u53ca\u5230\u8def\u7531\u3001\u4e0a\u6e38\u3001\u6d88\u8d39\u8005\u3001\u8bc1\u4e66\u76f8\u5173\u548c\u96c6\u7fa4\u516c\u5171\u914d\u7f6e\u7684\u76f8\u5173\u7c7b\u522b\u3002"),(0,s.kt)("h4",{id:"apisix-route\u8def\u7531"},"APISIX Route\uff08\u8def\u7531\uff09"),(0,s.kt)("p",null,"\u81ea\u5b9a\u4e49\u8d44\u6e90 APISIX Route \u4e2d ",(0,s.kt)("inlineCode",{parentName:"p"},"spec")," \u5c5e\u6027\u7684\u9876\u7ea7\u914d\u7f6e\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"http"),"\u3002\u4f46\u5176\u5b9e ",(0,s.kt)("inlineCode",{parentName:"p"},"spec")," \u662f\u540c\u65f6\u652f\u6301\u4e24\u79cd\u914d\u7f6e\u7684\uff0c\u4e00\u79cd\u662f\u4e0b\u56fe\u793a\u4f8b\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"spec.http"),"\uff0c\u4e3b\u8981\u7528\u4e8e 7 \u5c42\u4ee3\u7406\uff1b\u53e6\u4e00\u79cd\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"spec.stream"),"\uff0c\u7528\u4e8e 4 \u5c42\u4ee3\u7406\u3002\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u9996\u5148\u4e3a\u5176\u81ea\u5b9a\u4e49\u4e86\u4e00\u9879\u89c4\u5219\uff0c\u5373 match \u4e0b\u7684\u76f8\u5173\u53c2\u6570\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765501091-e64ff6e5-5e3e-4b0f-adcc-7ff418edb52c.png",alt:"APISIX Route"})),(0,s.kt)("p",null,"\u5982\u4e0a\u56fe\u540e\u7aef\u914d\u7f6e\u793a\u4f8b\u4f7f\u7528\u4e86\u540c\u4e00\u4e2a Service\uff0c\u5b9e\u9645\u4f7f\u7528\u4e2d\u5927\u5bb6\u6839\u636e\u573a\u666f\u8fdb\u884c\u8c03\u6574\u5373\u53ef\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"weight")," \u5c5e\u6027\u662f\u7528\u6765\u914d\u7f6e\u76f8\u5173 Service \u6743\u91cd\u3002\u901a\u8fc7\u4ee5\u4e0a\u914d\u7f6e\uff0c\u4ece\u800c\u5b9e\u73b0\u4e00\u5957\u5b8c\u6574\u7684\u8def\u7531\u81ea\u5b9a\u4e49\u8d44\u6e90\u3002"),(0,s.kt)("h4",{id:"apisix-upstream\u4e0a\u6e38"},"APISIX Upstream\uff08\u4e0a\u6e38\uff09"),(0,s.kt)("p",null,"\u5728\u914d\u7f6e APISIX Upstream \u65f6\uff0c\u9700\u8981\u6ce8\u610f ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," \u7684\u5185\u5bb9\u8981\u4e0e K8s \u96c6\u7fa4\u7684 Service \u4fdd\u6301\u4e00\u81f4\uff0c\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1\u540e\u7eed APISIX Ingress Controller \u51c6\u786e\u5339\u914d\u5176\u76f8\u5e94\u6d41\u91cf\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765534667-3ce978ae-2d85-4de7-8a57-3c5be5f57604.png",alt:"APISIX Upstream"})),(0,s.kt)("p",null,"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"spec.loadbalancer")," \u4e3b\u8981\u8d1f\u8d23\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u7684\u8bbe\u7f6e\uff0c\u6709\u591a\u79cd\u7b56\u7565\u6a21\u5f0f\u53ef\u4f9b\u9009\u62e9\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"spec.schem"),"e \u5219\u662f\u534f\u8bae\u7c7b\u578b\u7684\u914d\u7f6e\uff0c\u76ee\u524d\u53ea\u652f\u6301 HTTP \u548c gRPC \u534f\u8bae\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"spec.healthCheck")," \u4e3b\u8981\u662f\u5bf9\u5065\u5eb7\u68c0\u67e5\u529f\u80fd\u8fdb\u884c\u8bbe\u7f6e\uff0c\u6bd4\u5982\u8bbe\u7f6e\u5176\u6d3b\u8dc3\u72b6\u6001\u3001\u751f\u6548\u534f\u8bae\u4e0e\u8def\u5f84\u548c\u6700\u7ec8\u53cd\u9988\u7b49\u53c2\u6570\u914d\u7f6e\u3002"),(0,s.kt)("h4",{id:"apisix-consumer\u6d88\u8d39\u8005"},"APISIX Consumer\uff08\u6d88\u8d39\u8005\uff09"),(0,s.kt)("p",null,"\u5728 APISIX Consumer \u914d\u7f6e\u4e2d\uff0c\u4e3b\u8981\u662f\u589e\u52a0\u4e86\u8ba4\u8bc1\u76f8\u5173\u7684\u529f\u80fd\uff0c\u6bd4\u5982 ",(0,s.kt)("inlineCode",{parentName:"p"},"spec.authParameter"),"\uff0c\u76ee\u524d\u8be5\u914d\u7f6e\u53c2\u6570\u652f\u6301 ",(0,s.kt)("inlineCode",{parentName:"p"},"BasicAuth")," \u4e0e ",(0,s.kt)("inlineCode",{parentName:"p"},"KeyAuth")," \u8fd9\u4e24\u79cd\u6bd4\u8f83\u5e38\u89c1\u7684\u8ba4\u8bc1\u7c7b\u578b\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765580844-9d17d699-fa45-4b43-9ed9-f8ea9c9cab48.png",alt:"APISIX Consumer"})),(0,s.kt)("p",null,"\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," \u53ef\u76f4\u63a5\u53bb\u914d\u7f6e\u76f8\u5173\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"username")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"password"),"\uff0c\u6216\u8005\u76f4\u63a5\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"secret")," \u8fdb\u884c\u914d\u7f6e\uff0c\u76f8\u6bd4\u524d\u8005\u7684\u660e\u6587\u914d\u7f6e\u4f1a\u66f4\u5b89\u5168\u4e00\u4e9b\u3002"),(0,s.kt)("h4",{id:"apisix-tls\u8bc1\u4e66"},"APISIX TLS\uff08\u8bc1\u4e66\uff09"),(0,s.kt)("p",null,"APISIX TLS \u4e3b\u8981\u662f\u4e3a\u4e86\u8fdb\u884c\u8bc1\u4e66\u7684\u7ba1\u7406\u3002\u5982\u793a\u4f8b\u6240\u793a\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"hosts")," \u6765\u914d\u7f6e\u591a\u4e2a\u57df\u540d\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"secret")," \u4e0b\u7684\u53c2\u6570\u5c31\u662f\u5bf9\u5e94\u7684\u914d\u7f6e\u8bc1\u4e66\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765614989-88b363c2-3805-4159-abfc-bac1b055559b.png",alt:"APISIX TLS"})),(0,s.kt)("p",null,"\u540c\u65f6 APISIX TLS \u8fd8\u914d\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},"spec.client"),"\uff0c\u7528\u4e8e\u8fdb\u884c mTLS \u53cc\u5411\u8ba4\u8bc1\u7684\u914d\u7f6e\u3002"),(0,s.kt)("h4",{id:"apisix-config-\u76f8\u5173"},"APISIX Config \u76f8\u5173"),(0,s.kt)("p",null,"\u5173\u4e8e\u81ea\u5b9a\u4e49\u8d44\u6e90\u652f\u6301\u7684 Config \u7c7b\u578b\u6211\u4eec\u4f1a\u4ece\u4e24\u4e2a\u65b9\u9762\u8fdb\u884c\u63cf\u8ff0\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765647605-6ad1ba44-06fd-475d-a6ae-925b3cc9c1ce.png",alt:"APISIX Cluster Config"})),(0,s.kt)("p",null,"\u4e00\u79cd\u662f APISIX Cluster Config\uff0c\u5b83\u4e3b\u8981\u7528\u4e8e\u4e00\u4e9b\u901a\u7528\u914d\u7f6e\u3002\u76ee\u524d\u652f\u6301\u5728 K8s \u6216\u8005 Apache APISIX \u4e2d\u5168\u5c40\u4f7f\u7528 Prometheus \u63d2\u4ef6/\u5168\u5c40\u914d\u7f6e SkyWalking\uff0c\u540e\u7eed\u5f00\u53d1\u4e2d\u4e5f\u4f1a\u53bb\u589e\u52a0\u4e00\u4e9b\u5176\u4ed6\u7684\u901a\u7528\u914d\u7f6e\u3002"),(0,s.kt)("p",null,"\u53e6\u4e00\u79cd\u5c31\u662f\u6211\u4eec\u73b0\u5728\u6b63\u5728 PR \u4e2d\u7684 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/689"},"APISIX Plugin Config"),"\u3002\u5927\u5bb6\u5982\u679c\u611f\u5174\u8da3\u7684\u8bdd\uff0c\u4e5f\u53ef\u4ee5\u70b9\u51fb\u94fe\u63a5\u6765\u4e00\u8d77\u53c2\u4e0e\u8ba8\u8bba\u3002Plugin Config \u4e3b\u8981\u662f\u5c06\u901a\u7528\u7684\u63d2\u4ef6\u914d\u7f6e\u7edf\u4e00\u96c6\u5408\u5728\u4e00\u8d77\uff0c\u6bd4\u5982\u4e00\u4e9b\u540c\u6837\u7684\u914d\u7f6e\uff0c\u7528\u6237\u5c31\u53ef\u4ee5\u901a\u8fc7 APISIX Plugin Config \u540c\u65f6\u5e94\u7528\u5728\u591a\u4e2a\u8def\u7531\u5f53\u4e2d\uff0c\u7701\u53bb\u4e86\u989d\u5916\u591a\u9879\u72ec\u7acb\u914d\u7f6e\u7684\u7e41\u7410\u6b65\u9aa4\u3002"),(0,s.kt)("h2",{id:"apisix-ingress-\u4e0a\u624b\u5b9e\u8df5"},"APISIX Ingress \u4e0a\u624b\u5b9e\u8df5"),(0,s.kt)("p",null,"\u76ee\u524d\u5927\u5bb6\u53ef\u4ee5\u901a\u8fc7 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"Helm Charts")," \u7684\u65b9\u5f0f\u6765\u8fdb\u884c APISIX Ingress \u7684\u90e8\u7f72\u3002\u901a\u8fc7\u4e00\u6761\u547d\u4ee4\uff0c\u5c31\u53ef\u4ee5\u540c\u65f6\u628a Apache APISIX \u4ee5\u53ca APISIX Ingress\uff0c\u5305\u62ec Apache APISIX \u6240\u9700\u8981\u7528\u5230\u7684 etcd \u5168\u90e8\u90e8\u7f72\u597d\uff0c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765686788-156b0641-aa78-4de8-833d-a187772470a5.png",alt:"\u5b89\u88c5\u6b65\u9aa4"})),(0,s.kt)("h3",{id:"\u5b9e\u8df5\u573a\u666f\u4e00\u6d41\u91cf\u5207\u5206"},"\u5b9e\u8df5\u573a\u666f\u4e00\uff1a\u6d41\u91cf\u5207\u5206"),(0,s.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 APISIX Ingress \u53ef\u4ee5\u5b9e\u73b0\u6309\u6bd4\u4f8b\u8fdb\u884c\u6d41\u91cf\u5207\u5206\u7684\u6548\u679c\uff0c\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,s.kt)("h4",{id:"\u6b65\u9aa4\u4e00\u914d\u7f6e-apisix-upstream"},"\u6b65\u9aa4\u4e00\uff1a\u914d\u7f6e APISIX Upstream"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765722480-edf8b1ec-98a4-4c18-bd3d-843c73f132bc.png",alt:"\u914d\u7f6e APISIX Upstream"})),(0,s.kt)("h4",{id:"\u6b65\u9aa4\u4e8c\u914d\u7f6e-apisix-route"},"\u6b65\u9aa4\u4e8c\uff1a\u914d\u7f6e APISIX Route"),(0,s.kt)("p",null,"\u901a\u8fc7\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"backends")," \u4e2d\u53bb\u914d\u7f6e ",(0,s.kt)("inlineCode",{parentName:"p"},"subset")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"weight"),"\uff0c\u6765\u5b9e\u73b0\u7528\u6237\u8bf7\u6c42\u6d41\u91cf\u8fdb\u5165\u65f6\u7684\u5206\u6d41\u3002\u5982\u4e0b\u56fe\u793a\u4f8b\u5c31\u662f 90% \u7684\u6d41\u91cf\u4f1a\u8fdb\u5165\u5230 v1 \u4e2d\uff0c10% \u7684\u6d41\u91cf\u8fdb\u5165\u5230 v2 \u4e2d\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765771090-1e51e66c-0979-43b4-852b-28f2284a5d4e.png",alt:"\u914d\u7f6e APISIX Route"})),(0,s.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u4e24\u6b65\uff0c\u5c31\u53ef\u4ee5\u5341\u5206\u65b9\u4fbf\u5730\u6309\u6bd4\u4f8b\u8fdb\u884c\u6d41\u91cf\u5207\u5206\uff0c\u5b9e\u73b0\u7c7b\u4f3c\u7070\u5ea6\u53d1\u5e03\u7b49\u573a\u666f\u9700\u6c42\u3002\n\u66f4\u591a\u5177\u4f53\u64cd\u4f5c\u7ec6\u8282\u4e5f\u53ef\u53c2\u8003\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://www.apiseven.com/zh/blog/traffic-split-in-apache-apisix-ingress-controller"},"Apache APISIX Ingress Controller \u4e2d\u7684\u6d41\u91cf\u5207\u5206"),"\u3002"),(0,s.kt)("h3",{id:"\u5b9e\u8df5\u573a\u666f\u4e8c\u914d\u7f6e\u8ba4\u8bc1"},"\u5b9e\u8df5\u573a\u666f\u4e8c\uff1a\u914d\u7f6e\u8ba4\u8bc1"),(0,s.kt)("p",null,"\u5982\u679c\u60f3\u5728 APISIX Ingress \u4e2d\u4e3a\u67d0\u4e9b\u8def\u7531\u914d\u7f6e Basic Auth\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,s.kt)("h4",{id:"\u6b65\u9aa4\u4e00\u521b\u5efa-apisix-consumer-\u8d44\u6e90"},"\u6b65\u9aa4\u4e00\uff1a\u521b\u5efa APISIX Consumer \u8d44\u6e90"),(0,s.kt)("p",null,"\u5982\u524d\u6587\u6240\u63d0\u5230\u7684\uff0c\u53ef\u4ee5\u5728 APISIX Consumer \u914d\u7f6e\u4e2d\u589e\u52a0 ",(0,s.kt)("inlineCode",{parentName:"p"},"basicAuth"),"\uff0c\u5e76\u4e3a\u5176\u6307\u5b9a\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765803898-7a30c663-7ba8-4064-8772-a19c56cef191.png",alt:"\u521b\u5efa\u8d44\u6e90"})),(0,s.kt)("h4",{id:"\u6b65\u9aa4\u4e8c\u914d\u7f6e-apisix-route\u589e\u52a0\u8ba4\u8bc1\u76f8\u5173\u53c2\u6570"},"\u6b65\u9aa4\u4e8c\uff1a\u914d\u7f6e APISIX Route\uff0c\u589e\u52a0\u8ba4\u8bc1\u76f8\u5173\u53c2\u6570"),(0,s.kt)("p",null,"\u5728\u81ea\u5b9a\u4e49\u8d44\u6e90 APISIX Route \u4e2d\uff0c\u901a\u8fc7\u5728\u540e\u7aef\u6dfb\u52a0 ",(0,s.kt)("inlineCode",{parentName:"p"},"authenticatio"),"n\uff0c\u5c06\u5176\u5f00\u542f\u5e76\u6307\u5b9a\u8ba4\u8bc1\u7c7b\u578b\u5373\u53ef\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765828596-9a0f0142-f201-4004-b85d-a34de4ee13dc.png",alt:"\u589e\u52a0\u8ba4\u8bc1\u53c2\u6570"})),(0,s.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4f7f\u7528 Consumer \u53bb\u5b8c\u6210\u76f8\u5173\u914d\u7f6e\u8ba4\u8bc1\u3002"),(0,s.kt)("h3",{id:"\u5b9e\u8df5\u573a\u666f\u4e09k8s-\u8d44\u6e90\u6269\u5c55"},"\u5b9e\u8df5\u573a\u666f\u4e09\uff1aK8s \u8d44\u6e90\u6269\u5c55"),(0,s.kt)("p",null,"\u6b63\u5982\u6211\u4eec\u5728\u5f00\u5934\u63d0\u5230\u8fc7\u7684\uff0cAPISIX Ingress \u4e0d\u4ec5\u652f\u6301\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u8fd8\u540c\u65f6\u652f\u6301 K8s \u539f\u751f\u7684 Ingress \u8d44\u6e90\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765859904-bc48dcc5-cd7a-4875-b248-5c4c64a2d7c5.png",alt:"K8s \u539f\u751f\u8d44\u6e90"})),(0,s.kt)("p",null,"\u5982\u4e0a\u56fe\u662f K8s Ingress \u8d44\u6e90\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\u5982\u679c\u60f3\u8981\u5728\u8d44\u6e90\u4e0a\u505a rewrite\uff0c\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0 annotation \u914d\u7f6e\u5c5e\u6027\u3002\u8fd9\u6837\u5f53\u7528\u6237\u643a\u5e26 ",(0,s.kt)("inlineCode",{parentName:"p"},"httpbin.org")," \u8bf7\u6c42\u65f6\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u8def\u5f84 /sample \u5c06\u5b83\u91cd\u5b9a\u5411\u5230 /ip\u3002"),(0,s.kt)("p",null,"\u5f53\u4e0a\u8ff0\u9700\u6c42\u4f7f\u7528 APISIX Ingress \u65f6\uff0c\u53ea\u9700\u5728 Ingress \u589e\u52a0\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"kubernetes.io/ingress.class: apisix"),"\uff0c\u53bb\u6307\u5b9a APISIX Ingress Controller \u53bb\u76d1\u542c\u8fd9\u4e2a\u8d44\u6e90\uff0c\u540c\u65f6\u901a\u8fc7\u914d\u7f6e  ",(0,s.kt)("inlineCode",{parentName:"p"},'k8s.apisix.apache.org/rewrite-target: "/ip"'),"\uff0c\u5c31\u53ef\u4ee5\u5b8c\u6210\u91cd\u5b9a\u5411\u5230 /ip \u8def\u5f84\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1633765888876-d2d252ee-706c-49f3-b630-03a7e72a0620.png",alt:"APISIX Ingress \u8d44\u6e90"})),(0,s.kt)("p",null,"\u4ee5\u4e0a\u793a\u4f8b\u53ea\u662f\u76ee\u524d APISIX Ingress \u5bf9\u4e8e\u539f\u751f K8s Ingress \u652f\u6301\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u66f4\u591a\u793a\u4f8b\u5927\u5bb6\u53ef\u4ee5\u67e5\u770b",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/practices/proxy-the-httpbin-service-with-ingress"},"\u5177\u4f53\u6587\u6863"),"\u8fdb\u884c\u53c2\u8003\u4f7f\u7528\u3002"),(0,s.kt)("h2",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,s.kt)("p",null,"\u4e4b\u540e APISIX Ingress \u5c06\u4f1a\u7ee7\u7eed\u5728\u529f\u80fd\u4e0e\u751f\u6001\u4e0a\u8fdb\u884c\u66f4\u65b0\uff0c\u76ee\u524d\u9636\u6bb5\u5df2\u7ecf\u5b8c\u6210\u4e86 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/docs/en/latest/practices/manage-certificates-with-cert-manager.md"},"APISIX Ingress \u4e0e Cert-manager \u96c6\u6210"),"\uff0c\u540e\u7eed\u5c06\u9010\u6b65\u5b9e\u73b0\u4ee5\u4e0b\u76ee\u6807\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u5b8c\u6210 Kubernetes V1.22+ \u4e0e CRD V1 \u7248\u672c\u7684\u9002\u914d\u652f\u6301\uff08\u5df2\u7ecf\u5b8c\u6210\uff0c\u5373\u5c06\u5728 APISIX Ingress V1.3 \u7248\u672c \u4e2d\u53d1\u5e03\uff09"),(0,s.kt)("li",{parentName:"ol"},"\u652f\u6301 Gateway API\uff08\u9884\u8ba1\u5728 Q4 \u9636\u6bb5\u5b9e\u73b0\uff09"),(0,s.kt)("li",{parentName:"ol"},"\u6269\u5c55\u65b0\u67b6\u6784\uff0c\u4ee5\u4fbf\u4e8e\u7528\u6237\u5728\u4e0d\u9700\u8981\u4f7f\u7528 etcd \u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528 APISIX Ingress"),(0,s.kt)("li",{parentName:"ol"},"\u4e30\u5bcc\u4ea7\u54c1\u751f\u6001\uff0c\u6269\u5c55 APISIX Ingress \u793e\u533a")),(0,s.kt)("p",null,"\u6700\u540e\u4e5f\u5e0c\u671b\u5927\u5bb6\u80fd\u591f\u591a\u591a\u5730\u53c2\u4e0e\u5230\u9879\u76ee\u4e2d\u6765\uff0c\u6bd4\u5982\u6bcf\u4e24\u5468\u7684\u5468\u4e09\u4e0b\u5348 2 \u70b9\u90fd\u4f1a\u6709\u4e00\u6b21 APISIX Ingress \u793e\u533a\u4f1a\u8bae\uff0c\u4f1a\u8ddf\u5927\u5bb6\u540c\u6b65\u4e00\u4e0b\u5f53\u524d\u7684\u9879\u76ee\u8fdb\u5c55\u6216\u8005\u9047\u5230\u7684\u95ee\u9898\u3002\u5927\u5bb6\u53ef\u4ee5\u6301\u7eed\u5173\u6ce8 Apache APISIX \u89c6\u9891\u53f7\uff0c\u5c4a\u65f6\u53ef\u4ee5\u76f4\u63a5\u53c2\u4e0e\u793e\u533a\u4f1a\u8bae\u76f4\u64ad\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/614"},"\u70b9\u6b64\u67e5\u770b"),"\u66f4\u591a\u5173\u4e8e APISIX Ingress \u793e\u533a\u4f1a\u8bae\u7ec6\u8282\u3002"))}g.isMDXComponent=!0}}]);