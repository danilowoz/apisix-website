"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1581],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(a),h=r,m=d["".concat(c,".").concat(h)]||d[h]||s[h]||i;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38736:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var n=a(25773),r=a(30808),i=(a(27378),a(35318)),l=["components"],p={title:"\u5982\u4f55\u501f\u52a9 Apache APISIX \u5b9e\u73b0\u4e92\u8054\u7f51\u4fdd\u9669\u9886\u57df\u7684\u6d41\u91cf\u6cbb\u7406\uff1f",author:"Sylvia",authorURL:"https://github.com/SylviaBABY",authorImageURL:"https://avatars.githubusercontent.com/u/39793568?v=4",keywords:["API \u7f51\u5173","\u4e92\u8054\u7f51\u4fdd\u9669","\u4f17\u5b89\u4fdd\u9669","Apache APISIX"],description:"\u672c\u6587\u5c06\u901a\u8fc7\u4ecb\u7ecd\u4f17\u5b89\u4fdd\u9669\u7684\u4e00\u4e9b\u4e1a\u52a1\u573a\u666f\u4e0e\u5b9e\u8df5\u6848\u4f8b\uff0c\u4e3a\u5927\u5bb6\u5e26\u6765\u5173\u4e8e\u4e92\u8054\u7f51\u4fdd\u9669\u573a\u666f\u4e0b\u7684\u7f51\u5173\u9009\u578b\u4e0e\u843d\u5730\u64cd\u4f5c\u3002",tags:["User Case"]},c=void 0,o={permalink:"/zh/blog/2022/03/02/zhongan-usercase-with-apache-apisix",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/03/02/zhongan-usercase-with-apache-apisix.md",title:"\u5982\u4f55\u501f\u52a9 Apache APISIX \u5b9e\u73b0\u4e92\u8054\u7f51\u4fdd\u9669\u9886\u57df\u7684\u6d41\u91cf\u6cbb\u7406\uff1f",description:"\u672c\u6587\u5c06\u901a\u8fc7\u4ecb\u7ecd\u4f17\u5b89\u4fdd\u9669\u7684\u4e00\u4e9b\u4e1a\u52a1\u573a\u666f\u4e0e\u5b9e\u8df5\u6848\u4f8b\uff0c\u4e3a\u5927\u5bb6\u5e26\u6765\u5173\u4e8e\u4e92\u8054\u7f51\u4fdd\u9669\u573a\u666f\u4e0b\u7684\u7f51\u5173\u9009\u578b\u4e0e\u843d\u5730\u64cd\u4f5c\u3002",date:"2022-03-02T00:00:00.000Z",formattedDate:"2022\u5e743\u67082\u65e5",tags:[{label:"User Case",permalink:"/zh/blog/tags/user-case"}],readingTime:13.865,truncated:!0,authors:[{name:"Sylvia",url:"https://github.com/SylviaBABY",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"GraphQL \u78b0\u649e API \u7f51\u5173 Apache APISIX\uff0c\u63d0\u5347 API \u9886\u57df\u7684\u5b89\u5168\u4e0e\u6027\u80fd",permalink:"/zh/blog/2022/03/02/apisix-integration-graphql-plugin"},nextItem:{title:"\u65b0\u63d2\u4ef6\u4e0a\u7ebf\uff0cAPI \u7f51\u5173 Apache APISIX Public API \u5904\u7406\u80fd\u529b\u518d\u589e\u5f3a",permalink:"/zh/blog/2022/03/01/apisix-integration-public-api-plugin"}},u={authorsImageUrls:[void 0]},s=[{value:"\u4e1a\u52a1\u573a\u666f\u7279\u70b9",id:"\u4e1a\u52a1\u573a\u666f\u7279\u70b9",children:[{value:"\u591a\u9669\u79cd",id:"\u591a\u9669\u79cd",children:[]},{value:"\u591a\u6e20\u9053",id:"\u591a\u6e20\u9053",children:[]},{value:"\u5f3a\u76d1\u7ba1",id:"\u5f3a\u76d1\u7ba1",children:[]}]},{value:"\u573a\u666f\u75db\u70b9\u4e0e\u9700\u6c42",id:"\u573a\u666f\u75db\u70b9\u4e0e\u9700\u6c42",children:[]},{value:"\u9501\u5b9a Apache APISIX",id:"\u9501\u5b9a-apache-apisix",children:[]},{value:"\u57fa\u4e8e Apache APISIX \u7684\u843d\u5730\u6848\u4f8b",id:"\u57fa\u4e8e-apache-apisix-\u7684\u843d\u5730\u6848\u4f8b",children:[{value:"BaaS \u4ea7\u54c1\u7684\u8ba1\u91cf\u8ba1\u8d39",id:"baas-\u4ea7\u54c1\u7684\u8ba1\u91cf\u8ba1\u8d39",children:[]},{value:"\u591a\u79df\u6237\u591a\u6e20\u9053\u6d41\u91cf\u9694\u79bb",id:"\u591a\u79df\u6237\u591a\u6e20\u9053\u6d41\u91cf\u9694\u79bb",children:[]}]},{value:"\u540e\u7eed\u89c4\u5212\u4e0e\u671f\u671b",id:"\u540e\u7eed\u89c4\u5212\u4e0e\u671f\u671b",children:[{value:"\u52a0\u5f3a\u8de8\u90e8\u95e8\u4e4b\u95f4\u7684\u534f\u540c",id:"\u52a0\u5f3a\u8de8\u90e8\u95e8\u4e4b\u95f4\u7684\u534f\u540c",children:[]},{value:"\u57fa\u4e8e APISIX \u66f4\u65b0 Nacos \u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1",id:"\u57fa\u4e8e-apisix-\u66f4\u65b0-nacos-\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1",children:[]},{value:"\u6301\u7eed\u89c2\u671b\u670d\u52a1\u7f51\u683c\u4ea7\u54c1",id:"\u6301\u7eed\u89c2\u671b\u670d\u52a1\u7f51\u683c\u4ea7\u54c1",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],d={toc:s};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5185\u5bb9\u6574\u7406\u81ea Apache APISIX Weekly Meeting \u4e2d\u4f17\u5b89\u4fdd\u9669\u548c\u79d1\u6280\u57fa\u7840\u67b6\u6784\u8d1f\u8d23\u4eba\u5f90\u654f\u5e26\u6765\u7684\u76f8\u5173\u5206\u4eab\u3002")),(0,i.kt)("p",null,"\u4f17\u5b89\u4fdd\u9669\u662f\u4e2d\u56fd\u9996\u5bb6\u548c\u89c4\u6a21\u6700\u5927\u7684\u4e92\u8054\u7f51\u4fdd\u9669\u516c\u53f8\uff0c\u9500\u552e\u91c7\u7528\u5168\u4e92\u8054\u7f51\u5f62\u5f0f\u8fdb\u884c\u4ea7\u54c1\u9500\u552e\uff0c\u4e0d\u8bbe\u7ebf\u4e0b\u4ee3\u7406\uff0c\u7ebf\u4e0a\u5219\u4e3b\u8981\u901a\u8fc7\u81ea\u8425\u3001\u4f19\u4f34\u516c\u53f8\u7f51\u7ad9\u3001\u6e20\u9053\u7b49\u65b9\u5f0f\u83b7\u53d6\u6d41\u91cf\u3002\u901a\u8fc7\u79ef\u6781\u63d0\u4f9b\u4e2a\u6027\u5316\u3001\u5b9a\u5236\u5316\u548c\u667a\u80fd\u5316\u7684\u4fdd\u9669\u54c1\u79cd\uff0c\u5f25\u8865\u4e86\u4f20\u7edf\u4fdd\u9669\u516c\u53f8\u4ea7\u54c1\u80fd\u529b\u7684\u4e0d\u8db3\u3002"),(0,i.kt)("p",null,"\u4ece\u4e1a\u52a1\u89d2\u5ea6\u6765\u770b\u6280\u672f\u5c42\u9762\u65f6\uff0c\u4e3a\u4e86\u6ee1\u8db3\u4f17\u5b89\u4fdd\u9669\u7684\u590d\u6742\u4e1a\u52a1\u573a\u666f\u548c\u884c\u4e1a\u7684\u4e13\u6709\u7279\u6027\uff0c\u5c31\u4f1a\u5bf9\u6280\u672f\u4fa7\u7684\u6d41\u91cf\u6cbb\u7406\u4ea7\u751f\u4e86\u5f3a\u70c8\u7684\u9700\u6c42\u3002\u672c\u6587\u5c06\u901a\u8fc7\u4ecb\u7ecd\u4f17\u5b89\u4fdd\u9669\u7684\u4e00\u4e9b\u4e1a\u52a1\u573a\u666f\u4e0e\u5b9e\u8df5\u6848\u4f8b\uff0c\u4e3a\u5927\u5bb6\u5e26\u6765\u5173\u4e8e\u300c\u4e92\u8054\u7f51\u4fdd\u9669\u300d\u573a\u666f\u4e0b\u7684\u7f51\u5173\u9009\u578b\u4e0e\u843d\u5730\u64cd\u4f5c\u3002"),(0,i.kt)("h2",{id:"\u4e1a\u52a1\u573a\u666f\u7279\u70b9"},"\u4e1a\u52a1\u573a\u666f\u7279\u70b9"),(0,i.kt)("h3",{id:"\u591a\u9669\u79cd"},"\u591a\u9669\u79cd"),(0,i.kt)("p",null,"\u5f00\u5934\u6211\u4eec\u63d0\u5230\u8fc7\uff0c\u4f17\u5b89\u4fdd\u9669\u4f5c\u4e3a\u56fd\u5185\u7b2c\u4e00\u5bb6\u4e92\u8054\u7f51\u4fdd\u9669\u4f01\u4e1a\uff0c\u63d0\u4f9b\u975e\u5e38\u591a\u7684\u4fdd\u9669\u54c1\u79cd\uff0c\u7279\u522b\u662f\u50cf\u8d22\u4ea7\u9669\u3002\u8d22\u4ea7\u9669\u7684\u79cd\u7c7b\u53ef\u8c13\u662f\u7e41\u591a\uff0c\u5927\u5bb6\u60f3\u5230\u60f3\u4e0d\u5230\u7684\u7c7b\u578b\u53ef\u80fd\u90fd\u4f1a\u6709\uff0c\u6bd4\u5982\u8f66\u9669\u3001\u788e\u5c4f\u9669\u548c\u5065\u5eb7\u9669\uff0c\u8fd8\u6709\u65e5\u5e38\u5e38\u89c1\u7684\u6dd8\u5b9d\u8d2d\u7269\u9000\u8fd0\u8d39\u9669\u7b49\u7b49\u3002"),(0,i.kt)("p",null,"\u57fa\u672c\u53ea\u8981\u662f\u5927\u5bb6\u751f\u6d3b\u4e2d\u9047\u5230\u7684\u4e1c\u897f\uff0c\u90fd\u6709\u53ef\u80fd\u4f1a\u88ab\u8bbe\u8ba1\u6210\u4e00\u79cd\u4fdd\u9669\u4ea7\u54c1\uff0c\u6240\u4ee5\u4e92\u8054\u7f51\u4fdd\u9669\u573a\u666f\u4e0b\uff0c\u9669\u79cd\u4ea7\u54c1\u4e4b\u591a\u662f\u5176\u6bd4\u8f83\u6709\u7279\u8272\u7684\u80cc\u666f\u3002"),(0,i.kt)("h3",{id:"\u591a\u6e20\u9053"},"\u591a\u6e20\u9053"),(0,i.kt)("p",null,"\u867d\u7136\u8bf4\u4e92\u8054\u7f51\u4fdd\u9669\u7684\u6240\u6709\u64cd\u4f5c\u6d41\u7a0b\u90fd\u5728\u7ebf\u4e0a\u8fdb\u884c\uff0c\u662f\u5178\u578b\u7684\u4e92\u8054\u7f51+\u573a\u666f\u3002\u5b83\u65e2\u6709\u4e92\u8054\u7f51\u7684\u9ad8\u9891\u9ad8\u5e76\u53d1\u6216\u8005\u8bf4\u662f\u4e00\u4e9b\u7206\u6b3e\u73b0\u8c61\uff0c\u4e5f\u6709\u50cf\u5176\u5b83\u7684\u4f4e\u9891\u4f4e\u5e76\u53d1\u573a\u666f\u3002\u4f46\u5b83\u65e2\u6709\u4e92\u8054\u7f51\u7684\u6d41\u91cf\u7279\u6027\uff0c\u540c\u65f6\u4e5f\u8fd8\u5305\u542b\u975e\u5e38\u591a\u7684\u7ebf\u4e0b\u6216\u8005\u4f20\u7edf\u4fdd\u9669\u7684\u4e1a\u52a1\u7279\u6027\u3002"),(0,i.kt)("p",null,"\u66f4\u51c6\u786e\u5730\u8bf4\uff0c\u4e92\u8054\u7f51\u4fdd\u9669\u7684\u5f88\u591a\u573a\u666f\u5165\u53e3\u4f9d\u8d56\u6e20\u9053\u8fdb\u884c\uff0c\u591a\u6e20\u9053\u4f7f\u5f97\u4e1a\u52a1\u80fd\u591f\u8fdb\u884c\u66f4\u591a\u80fd\u529b\u7684\u91ca\u653e\u3002\u6240\u4ee5\u5bf9\u4e8e\u6e20\u9053\u6d41\u91cf\u7684\u7ba1\u7406\uff0c\u4e5f\u662f\u4e92\u8054\u7f51\u4fdd\u9669\u5728\u5b9e\u73b0\u4e1a\u52a1\u5c42\u9762\u7684\u91cd\u8981\u4e00\u73af\u3002"),(0,i.kt)("h3",{id:"\u5f3a\u76d1\u7ba1"},"\u5f3a\u76d1\u7ba1"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646279054405-a55ded0a-986f-4d49-a927-545999070d65.png",alt:"\u5f3a\u76d1\u7ba1"})),(0,i.kt)("p",null,"\u9664\u4e86\u4e1a\u52a1\u9886\u57df\uff0c\u4f5c\u4e3a\u4e0e\u94b1\u76f4\u63a5\u6253\u4ea4\u9053\u7684\u884c\u4e1a\uff0c\u4fdd\u9669\u4e5f\u5c5e\u4e8e\u91d1\u878d\u7684\u4e00\u90e8\u5206\uff0c\u6240\u4ee5\u662f\u548c\u94f6\u884c\u3001\u8bc1\u5238\u4e00\u6837\u4f1a\u53d7\u5230\u94f6\u4fdd\u76d1\u4f1a\u76d1\u7763\u7684\u91d1\u878d\u4ea7\u54c1\uff0c\u5e76\u9075\u5b88\u5bf9\u5e94\u7684\u6761\u6b3e\u3002\u540c\u65f6\u94f6\u4fdd\u76d1\u4f1a\u57fa\u672c\u4e0a\u6bcf\u5e74\u90fd\u4f1a\u9488\u5bf9\u4e1a\u52a1\u548c\u6280\u672f\u5c42\u9762\u63d0\u51fa\u4e0d\u540c\u7684\u8981\u6c42\uff0c\u8fd9\u4e9b\u90fd\u662f\u8981\u53bb\u914d\u5408\u548c\u53d1\u5c55\u7684\u3002"),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u4e2d\u7ea2\u8272\u548c\u7eff\u8272\u90e8\u5206\uff0c\u5c31\u5c5e\u4e8e\u9488\u5bf9\u76d1\u7ba1\u6e20\u9053\u6216\u524d\u7f6e\u4e1a\u52a1\u4e0e\u6838\u5fc3\u4e1a\u52a1\u5206\u79bb\u7684\u67b6\u6784\u65b9\u5f0f\u3002\u5728\u8fd9\u91cc\u5bf9\u4e8e\u5b89\u5168\u5c42\u9762\u4e5f\u5b58\u5728\u4e00\u4e9b\u89c4\u8303\u8981\u6c42\uff0c\u5305\u62ec\u4e24\u5730\u4e09\u4e2d\u5fc3\u7684\u6cbb\u7406\u548c\u9488\u5bf9\u4e2d\u95f4\u4ef6\u6570\u636e\u4e1a\u52a1\u7684\u9694\u79bb\uff0c\u5bf9\u6d41\u91cf\u6cbb\u7406\u548c\u5b89\u5168\u6027\u7684\u8981\u6c42\u76f8\u5bf9\u662f\u6bd4\u8f83\u4e25\u683c\u7684\u3002"),(0,i.kt)("h2",{id:"\u573a\u666f\u75db\u70b9\u4e0e\u9700\u6c42"},"\u573a\u666f\u75db\u70b9\u4e0e\u9700\u6c42"),(0,i.kt)("p",null,"\u8003\u8651\u5230\u771f\u5b9e\u4f7f\u7528\u573a\u666f\uff0c\u6bcf\u5bb6\u516c\u53f8\u5bf9\u4e8e\u6d41\u91cf\u6cbb\u7406\u7684\u5c42\u6b21\u548c\u9700\u6c42\u5176\u5b9e\u4e5f\u5404\u4e0d\u76f8\u540c\u3002\u6bd4\u5982\u6709\u4e9b\u516c\u53f8\u53ef\u80fd\u76f8\u5bf9\u6765\u8bb2\u66f4\u5e0c\u671b\u7f51\u5173\u66f4\u524d\u7f6e\uff0c\u4ec5\u4f5c\u4e3a\u8fb9\u7f18\u7f51\u5173\u89d2\u8272\uff0c\u6709\u4e9b\u53ef\u80fd\u5e0c\u671b\u7f51\u5173\u80fd\u591f\u5904\u7406\u5357\u5317\u6d41\u91cf\u6216\u8005\u662f\u4e1c\u897f\u3001\u5357\u5317\u6d41\u91cf\u5171\u540c\u6cbb\u7406\u3002"),(0,i.kt)("p",null,"\u8fd9\u91cc\u4ece\u4e00\u4e9b\u5171\u6027\u89d2\u5ea6\uff08\u66f4\u8d34\u8fd1\u4f17\u5b89\u4fdd\u9669\u7684\u4e1a\u52a1\u573a\u666f\uff09\u5927\u6982\u6574\u7406\u51fa\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u75db\u70b9\u8ddf\u89e3\u51b3\u65b9\u5411\uff0c\u5373\u5f53\u4e0b\u4e1a\u52a1\u573a\u666f\u5185\u7f51\u5173\u5c42\u9762\u7684\u4e0d\u8db3\u4ee5\u53ca\u4e4b\u540e\u60f3\u8981\u5f25\u8865\u7684\u52a8\u4f5c\u65b9\u5411\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646279106033-216d6453-c051-464f-9c17-8f2f3d87a738.png",alt:"\u75db\u70b9\u6c47\u603b"})),(0,i.kt)("p",null,"\u800c\u5728\u7f51\u5173\u90e8\u7f72\u7684\u771f\u5b9e\u573a\u666f\u4e0b\uff0c\u9664\u4e86\u4e0a\u8ff0\u95ee\u9898\u4e4b\u5916\uff0c\u8fd8\u9700\u8981\u8003\u8651\u6574\u4f53\u4e1a\u52a1\u9700\u6c42\u4e0e\u90e8\u7f72\u73af\u8282\u4e2d\u591a\u7c7b\u578b\u7f51\u5173\u7684\u9002\u914d\u3002\u4e0b\u56fe\u5c55\u793a\u7684\u662f\u5728\u6d41\u91cf\u6cbb\u7406\u8fc7\u7a0b\u4e2d\u7684\u903b\u8f91\u90e8\u7f72\uff0c\u4e3b\u8981\u6d89\u53ca\u6d41\u91cf\u7f51\u5173\u3001\u5fae\u670d\u52a1\u7f51\u5173\u3001\u7edf\u4e00\u8fd0\u8425\u7f51\u5173\u3001BaaS \u7f51\u5173\u548c\u57df\u7f51\u5173\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646279112162-1d2e492d-b8a8-44b9-937b-e20fa3c67d58.png",alt:"\u903b\u8f91\u90e8\u7f72"})),(0,i.kt)("p",null,"\u5728\u68b3\u7406\u6e05\u6670\u5f53\u4e0b\u95ee\u9898\u540e\uff0c\u4f17\u5b89\u4fdd\u9669\u7684\u6280\u672f\u56e2\u961f\u5f00\u59cb\u5c06\u7f51\u5173\u9009\u578b\u805a\u7126\u5728\u4e00\u4e9b\u6bd4\u8f83\u6210\u719f\u7684\u5f00\u6e90\u4ea7\u54c1\u4e4b\u4e0a\uff0c\u5f00\u59cb\u4e86\u65b0\u4e00\u8f6e\u7684\u63a2\u7d22\u3002"),(0,i.kt)("h2",{id:"\u9501\u5b9a-apache-apisix"},"\u9501\u5b9a Apache APISIX"),(0,i.kt)("p",null,"\u7531\u4e8e\u4f17\u5b89\u4fdd\u9669\u5728\u9009\u578b\u4e4b\u521d\u5c31\u6846\u5b9a\u4e86\u300c\u5f00\u6e90\u4ea7\u54c1\u300d\uff0c\u6240\u4ee5\u5728\u8bc4\u4f30\u5f00\u6e90\u4ea7\u54c1\u7684\u5c42\u9762\uff0c\u4e5f\u4ece\u4f01\u4e1a\u89d2\u5ea6\u7ed9\u51fa\u4e86\u4e00\u5b9a\u7684\u53c2\u8003\u6807\u51c6\uff0c\u5e76\u4ece\u8fd9\u4e9b\u89d2\u5ea6\u7ed9\u4e88\u4e86 Apache APISIX \u6700\u76f4\u63a5\u7684\u80af\u5b9a\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646279116675-c10ebbe4-7e7a-49e0-aeb7-6af18568bf5b.png",alt:"Apache APISIX \u8bc4\u4f30"})),(0,i.kt)("p",null,"\u5f53\u7136\uff0c\u9664\u4e86\u5bf9\u5f00\u6e90\u4ea7\u54c1\u672c\u8eab\u89d2\u5ea6\u7684\u8bc4\u4f30\u5916\uff0c\u4f17\u5b89\u4fdd\u9669\u4e5f\u5bf9\u6bd4\u4e86\u76ee\u524d\u516c\u53f8\u4e1a\u52a1\u4e2d\u4ecd\u5728\u4f7f\u7528\u7684 Kong \u548c Traefik\uff0c\u540c\u65f6\u4e5f\u63a5\u89e6\u4e86\u963f\u91cc\u4e91\u5206\u4eab\u7684 MSE \u4ea7\u54c1\u7b49\u3002"),(0,i.kt)("p",null,"\u6700\u7ec8\u5728\u4ee5\u4e0b\u9879\u76ee\u4e2d\u8fdb\u884c\u4e86\u5168\u9762\u7684\u6a2a\u5411\u5bf9\u6bd4\uff0c\u53ef\u4ee5\u770b\u5230\u4e0d\u7ba1\u662f\u5728\u4f01\u4e1a\u7ea7\u7684\u957f\u671f\u89c4\u5212\u8fd8\u662f\u77ed\u671f\u89c4\u5212\u4e2d\uff0cApache APISIX \u90fd\u80fd\u5f88\u597d\u5730\u6ee1\u8db3\u4f17\u5b89\u7684\u4e1a\u52a1\u9700\u6c42\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646279121377-8f21e5d6-f32f-450b-9445-392a8253dee8.png",alt:"\u6a2a\u5411\u5bf9\u6bd4\u7ec6\u8282"})),(0,i.kt)("h2",{id:"\u57fa\u4e8e-apache-apisix-\u7684\u843d\u5730\u6848\u4f8b"},"\u57fa\u4e8e Apache APISIX \u7684\u843d\u5730\u6848\u4f8b"),(0,i.kt)("h3",{id:"baas-\u4ea7\u54c1\u7684\u8ba1\u91cf\u8ba1\u8d39"},"BaaS \u4ea7\u54c1\u7684\u8ba1\u91cf\u8ba1\u8d39"),(0,i.kt)("p",null,"\u4f17\u5b89\u4fdd\u9669\u76ee\u524d\u6b63\u5728\u4e1a\u52a1\u5185\u90e8\u9010\u6b65\u5c06\u5e95\u5c42\u4ea7\u54c1 BaaS \u5316\u3002\u7531\u4e8e\u662f\u91d1\u878d\u5c5e\u6027\uff0c\u6240\u4ee5\u5bf9\u4e8e BaaS \u4ea7\u54c1\u7684\u843d\u5730\u8981\u6c42\u4f1a\u66f4\u9ad8\uff0c\u9700\u8981\u5c06\u57fa\u7840\u67b6\u6784\u4ea7\u54c1\u4e0e\u4e91\u4ea7\u54c1\u4e00\u6837\u5b9e\u73b0\u7edf\u4e00\u6807\u51c6\u7684\u8ba1\u91cf\u8ba1\u8d39\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646279126510-bcfdcab1-7457-4ab6-8331-2a82e65a95d4.png",alt:"BaaS \u67b6\u6784"})),(0,i.kt)("p",null,"\u56e0\u4e3a\u516c\u53f8\u5185\u90e8\u7528\u5230\u7684\u6240\u6709\u4ea7\u54c1\uff0c\u90fd\u9700\u8981\u5b9e\u73b0\u8d22\u52a1\u62a5\u8868\u5f0f\u7684\u76d1\u7ba1\u8981\u6c42\u3002\u56e0\u6b64\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\uff0c\u5c31\u9700\u8981\u5b9e\u540d\u8ba4\u8bc1\u548c\u76f8\u5173\u5ba1\u8ba1\u529f\u80fd\uff0c\u8fd9\u91cc\u5c31\u9700\u8981\u7528\u5230 APISIX \u7684\u9274\u6743\u6a21\u5757\u4e86\u3002\u4e5f\u5c31\u662f\u8bf4\u516c\u53f8\u5185\u90e8\u7684\u4efb\u4f55\u8c03\u7528\u8fc7\u7a0b\u90fd\u9700\u8981\u88ab\u5ba1\u8ba1\u8bb0\u5f55\uff0c\u5305\u62ec\u8c03\u7528\u6b21\u6570\u3001\u53d1\u751f\u7684\u8d39\u7528\u7b49\u3002\u6240\u4ee5\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0cApache APISIX  \u5f3a\u5927\u7684\u65e5\u5fd7\u76f8\u5173\u529f\u80fd\u4e5f\u662f\u8d77\u5230\u4e86\u5f88\u597d\u7684\u652f\u6301\u3002"),(0,i.kt)("p",null,"\u540c\u65f6\u5728\u5ba1\u8ba1\u8fc7\u7a0b\u4e2d\u4e5f\u9700\u8981\u8fdb\u884c\u5cf0\u503c\u5ba1\u8ba1\u7684\u8ba1\u7b97\uff0c\u8fd9\u91cc\u5c31\u4f1a\u6d89\u53ca\u5230\u5f88\u591a\u8ba1\u8d39\u516c\u5f0f\uff0c\u8fd9\u91cc\u7684\u8ba1\u8d39\u516c\u5f0f\u91cc\u4e0d\u4ec5\u6709\u8c03\u7528\u91cf\uff0c\u8fd8\u6709\u5cf0\u503c\u7b49\u4fe1\u606f\u3002\u6240\u4ee5\u57fa\u4e8e APISIX \u7684\u529f\u80fd\u652f\u6301\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u76f8\u5173 Metrics \u6307\u6807\u7684\u5448\u73b0\uff0c\u4ece\u800c\u4e3a\u8ba1\u91cf\u8ba1\u8d39\u573a\u666f\u5960\u5b9a\u575a\u5b9e\u57fa\u7840\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646279130416-c1c161d2-9fbf-4a48-b621-eadfe851c6b0.png",alt:"\u5b9e\u73b0\u6846\u67b6"})),(0,i.kt)("p",null,"\u5177\u4f53\u7684\u5b9e\u73b0\u6846\u67b6\u53ef\u4ee5\u53c2\u8003\u4e0a\u56fe\uff0c\u5176\u4e2d\u914d\u7f6e\u4e2d\u5fc3\u662f\u4e00\u4e2a\u7eaf\u4e03\u5c42\u6d41\u91cf\u7684\u534f\u8bae\uff0c\u6240\u4ee5\u53ef\u4ee5\u5b8c\u5168\u7eb3\u5165\u5230\u8ba1\u91cf\u8ba1\u8d39\u4f53\u7cfb\u4e2d\uff0c\u5305\u62ec ES \u4ee5\u53ca APISIX \u672c\u8eab\u7b49\u3002\u5177\u4f53\u64cd\u4f5c\u4e3b\u8981\u662f\u57fa\u4e8e APISIX \u76ee\u524d\u7684\u7ed3\u6784\u505a\u4e86\u4e00\u4e9b\u5b9a\u4e49\uff0c\u6bd4\u5982\u53bb\u8c03\u7528\u51e0\u4e2a\u9488\u5bf9\u516c\u53f8\u4e1a\u52a1\u7684\u9700\u6c42\uff0c\u4ee5\u53ca\u4f7f\u7528 APISIX \u7684\u4e00\u4e9b\u63d2\u4ef6\u8fdb\u884c\u76f8\u5173\u7f16\u6392\u80fd\u529b\u7684\u5b9e\u73b0\u3002"),(0,i.kt)("h3",{id:"\u591a\u79df\u6237\u591a\u6e20\u9053\u6d41\u91cf\u9694\u79bb"},"\u591a\u79df\u6237\u591a\u6e20\u9053\u6d41\u91cf\u9694\u79bb"),(0,i.kt)("p",null,"\u9762\u5bf9\u4f17\u5b89\u4fdd\u9669\u7684\u591a\u9669\u79cd\u591a\u6e20\u9053\u4f7f\u7528\u573a\u666f\uff0c\u591a\u79df\u6237\u591a\u6e20\u9053\u7684\u6d41\u91cf\u9694\u79bb\u4e5f\u6210\u4e3a\u5177\u5907\u884c\u4e1a\u7279\u5f81\u7684\u9700\u6c42\u3002"),(0,i.kt)("p",null,"\u800c\u57fa\u4e8e Apache APISIX \u7684\u843d\u5730\u5b9e\u8df5\u4e2d\uff0c\u4f17\u5b89\u4e5f\u9488\u5bf9\u591a\u6e20\u9053\u573a\u666f\u4e0b\u7684\u8981\u6c42\u4e0e\u5f3a\u7ba1\u63a7\u8fdb\u884c\u4e86\u4e00\u4e9b\u89c4\u5212\u3002\u5f97\u76ca\u4e8e APISIX \u5f3a\u5927\u7684\u6d41\u91cf\u7f16\u6392\u548c\u63d2\u4ef6\u7f16\u6392\u529f\u80fd\uff0c\u4e3a\u4e92\u8054\u7f51\u4fdd\u9669\u573a\u666f\u4e0b\u63d0\u4f9b\u4e86\u4e4b\u524d\u4ece\u672a\u4f53\u9a8c\u8fc7\u7684\u6d41\u91cf\u7cbe\u5bc6\u63a7\u5236\u6548\u679c\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\u6709\u7684\u4e1a\u52a1\u65b9\u89c4\u6a21\u6bd4\u8f83\u5927\uff0c\u6e20\u9053\u4e5f\u5f88\u5927\uff0c\u5c31\u53ef\u80fd\u4f1a\u628a\u6e20\u9053\u5355\u72ec\u5efa\u7acb\u4e00\u4e2a\u96c6\u7fa4\u6765\u7528\uff1b\u4f46\u6709\u4e9b\u6e20\u9053\u89c4\u6a21\u8f83\u5c0f\uff0c\u53ef\u80fd 10% \u7684\u89c4\u6a21\u662f\u5927\u7684\uff0c\u4f46\u5927\u90e8\u5206\u90fd\u5f88\u5c0f\u3002\u57fa\u4e8e\u8fd9\u6837\u7684\u573a\u666f\uff0c\u5c31\u53ef\u4ee5\u5c1d\u8bd5\u5c06\u8fd9\u4e9b\u5c0f\u6e20\u9053\u878d\u5408\u5230\u4e00\u4e2a\u7f51\u5173\u5b9e\u4f53\u6216\u5b9e\u4f8b\u91cc\uff0c\u7136\u540e\u518d\u8fdb\u884c\u5171\u4eab\u3002"),(0,i.kt)("p",null,"\u5f53\u7136\u8fd9\u91cc\u5c31\u4f1a\u6d89\u53ca\u5230\u6bcf\u4e2a\u5e94\u7528\u5728\u63a5\u5165\u7684\u8fc7\u7a0b\u4e2d\uff0c\u56e0\u4e3a\u4e0d\u540c\u6e20\u9053\u4f1a\u6709\u4e0d\u540c\u7684\u4e0a\u4e0b\u6e38\u53bb\u5bf9\u63a5\uff0c\u5c31\u4f1a\u4ea7\u751f\u4e0d\u4e00\u6837\u7684\u57df\u540d\u3002\u57fa\u4e8e\u8fd9\u79cd\u573a\u666f\u7684\u9694\u79bb\uff08\u5982\u4e0b\u56fe\u7ed3\u6784\uff09\u79f0\u4e4b\u4e3a\u4e00\u7ea7\u9694\u79bb\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646279134880-2d657934-68ac-40c4-9c29-2ead848ef663.png",alt:"\u4e00\u7ea7\u9694\u79bb"})),(0,i.kt)("p",null,"\u4f46\u5f53\u6e20\u9053\u5bf9\u63a5\u8fdb\u6765\u540e\u5c31\u9700\u8981\u8fdb\u884c\u540e\u7eed\u76f8\u5173\u64cd\u4f5c\uff0c\u867d\u7136\u6d41\u7a0b\u662f\u4e00\u6a21\u4e00\u6837\u4f46\u63a5\u4e0b\u6765\u4e1a\u52a1\u7684\u7ba1\u63a7\u80fd\u529b\u8981\u6c42\u662f\u4e0e\u4e0a\u8fb9\u63d0\u5230\u7684\u4e0d\u540c\uff0c\u6240\u4ee5\u5c31\u9700\u8981\u518d\u5bf9\u6e20\u9053\u8fdb\u884c\u4e8c\u7ea7\u9694\u79bb\uff08\u5982\u4e0b\u56fe\u7ed3\u6784\u6240\u793a\uff09\u3002\u901a\u8fc7\u8fd9\u6837\u7684\u4e00\u7ea7\u9694\u79bb\u52a0\u4e8c\u7ea7\u9694\u79bb\u6a21\u5f0f\uff0c\u5c31\u53ef\u4ee5\u5f88\u597d\u5730\u89e3\u51b3\u4e86\u7f51\u5173\u5728\u591a\u79df\u6237\u591a\u6e20\u9053\u4e2d\u7684\u6d41\u91cf\u9694\u79bb\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646279139544-01337e7a-6360-453d-95d9-be3550b864d6.png",alt:"\u4e8c\u7ea7\u9694\u79bb"})),(0,i.kt)("h2",{id:"\u540e\u7eed\u89c4\u5212\u4e0e\u671f\u671b"},"\u540e\u7eed\u89c4\u5212\u4e0e\u671f\u671b"),(0,i.kt)("h3",{id:"\u52a0\u5f3a\u8de8\u90e8\u95e8\u4e4b\u95f4\u7684\u534f\u540c"},"\u52a0\u5f3a\u8de8\u90e8\u95e8\u4e4b\u95f4\u7684\u534f\u540c"),(0,i.kt)("p",null,"\u76ee\u524d\u4f17\u5b89\u4fdd\u9669\u4e0d\u4ec5\u4ec5\u53ea\u6709\u8fd9\u4e00\u9879\u4e1a\u52a1\uff0c\u540c\u65f6\u65d7\u4e0b\u8fd8\u6709\u975e\u5e38\u591a\u7684\u5b50\u516c\u53f8\uff0c\u5728\u540e\u7eed\u7684\u63a8\u8fdb\u8fc7\u7a0b\u4e2d\u4e00\u5b9a\u4f1a\u9762\u4e34\u5f88\u591a\u8fd9\u6837\u591a\u90e8\u95e8\u4e1a\u52a1\u5927\u89c4\u6a21\u7684\u90e8\u7f72\u3002\u6240\u4ee5\u5728\u63a8\u8fdb\u76f8\u5173\u6280\u672f\u6808\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u4e0d\u662f\u53ea\u7531\u4e00\u4e2a\u90e8\u95e8\u53bb\u4e3b\u5bfc\uff0c\u66f4\u591a\u7684\u662f\u8de8\u90e8\u95e8\u4e4b\u95f4\u7684\u5171\u540c\u534f\u4f5c\uff0c\u4ece\u800c\u5c3d\u65e9\u5b9e\u73b0 Apache APISIX \u5728\u4f17\u5b89\u7684\u843d\u5730\u90e8\u7f72\u3002"),(0,i.kt)("h3",{id:"\u57fa\u4e8e-apisix-\u66f4\u65b0-nacos-\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1"},"\u57fa\u4e8e APISIX \u66f4\u65b0 Nacos \u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1"),(0,i.kt)("p",null,"\u76ee\u524d\u4f17\u5b89\u4fdd\u9669\u5185\u90e8\u6b63\u5728\u57fa\u4e8e Nacos \u8fdb\u884c\u670d\u52a1\u7684\u65e0\u635f\u4e0a\u4e0b\u7ebf\uff0c\u6240\u4ee5\u5728\u540e\u7eed\u89c4\u5212\u4e2d\u4f1a\u5c06 APISIX \u4e0e Nacos \u5bf9\u63a5\u5b9e\u73b0\u7edf\u4e00\u7ba1\u7406\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u5c06\u5fae\u670d\u52a1\u901a\u8fc7\u8def\u7531\u65b9\u5f0f\u5bf9\u63a5\u5230 Apache APISIX\uff0c\u8fbe\u5230\u65e0\u635f\u6216\u57fa\u4e8e\u6e90\u6570\u636e\u7684\u6d41\u91cf\u5206\u53d1\u6548\u679c\u3002\u5f53\u7136\u4e5f\u4f1a\u7ee7\u7eed\u501f\u52a9 APISIX \u6765\u5b8c\u5584 BaaS \u7684\u76f8\u5173\u80fd\u529b\u3002"),(0,i.kt)("h3",{id:"\u6301\u7eed\u89c2\u671b\u670d\u52a1\u7f51\u683c\u4ea7\u54c1"},"\u6301\u7eed\u89c2\u671b\u670d\u52a1\u7f51\u683c\u4ea7\u54c1"),(0,i.kt)("p",null,"\u4f17\u5b89\u4fdd\u9669\u5185\u90e8\u76ee\u524d\u662f\u5728\u8fdb\u884c\u81ea\u5df1\u5e73\u53f0\u7684\u670d\u52a1\u7f51\u683c\u642d\u5efa\uff0c\u4f46\u56e0\u4e3a\u4e1a\u52a1\u53d1\u5c55\u8fc5\u901f\u5bfc\u81f4\u76ee\u524d\u7684\u670d\u52a1\u7f51\u683c\u8fd0\u884c\u72b6\u6001\u6ee1\u8db3\u4e0d\u4e86\u5f53\u4e0b\u4e1a\u52a1\u843d\u5730\u7a7a\u95f4\u3002\u6240\u4ee5\u4e5f\u5728\u6301\u7eed\u5173\u6ce8\u5916\u90e8\u7684\u670d\u52a1\u7f51\u683c\u4ea7\u54c1\uff0c\u6bd4\u5982 APISIX Service Mesh\uff0c\u6216\u8005\u662f\u5c1d\u8bd5\u5229\u7528 APISIX \u4e0e etcd \u7684\u7ed3\u5408\u65b9\u6848\u3002"),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u7eb5\u89c2\u4f17\u5b89\u4fdd\u9669\u5728\u8ffd\u6c42\u6d41\u91cf\u6cbb\u7406\u548c\u4e00\u4e9b\u843d\u5730\u89c4\u5212\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e0d\u4ec5\u4ec5\u662f\u628a Apache APISIX \u4f5c\u4e3a\u4e00\u4e2a\u8fb9\u7f18\u7f51\u5173\u89d2\u8272\u53bb\u63a7\u5236\u70b9\u72b6\u6d41\u91cf\uff0c\u66f4\u591a\u7684\u5219\u662f\u57fa\u4e8e\u6574\u4f53\u67b6\u6784\u8fdb\u884c\u6d41\u91cf\u7684\u63a7\u5236\u3002\u5373\u9762\u5411\u6574\u4e2a DevOps \u7684\u5168\u751f\u547d\u5468\u671f\uff0c\u8fdb\u884c\u8bf8\u5982\u6d4b\u8bd5\u573a\u666f\u662f\u5426\u80fd\u63d0\u4f9b\u6d4b\u8bd5\u80fd\u529b\u6216\u8005\u591a\u7248\u672c\u5f00\u53d1\u80fd\u529b\uff1b\u751f\u4ea7\u4fa7\u63d0\u4f9b\u6d41\u91cf\u5f55\u5236\u3001\u56de\u653e\u80fd\u529b\uff1b\u5927\u6570\u636e\u90e8\u95e8\u662f\u5426\u53ef\u4ee5\u751f\u4ea7\u76f8\u5173\u7684\u6c99\u7bb1\u73af\u5883\uff0c\u6765\u8bc4\u4f30\u66f4\u597d\u7684\u6a21\u578b\u5e76\u8fdb\u884c\u57df\u73af\u5883\u7684\u9694\u79bb\u7b49\u80fd\u529b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646279144771-483cfabe-753e-4570-8013-1eedbf88aed8.png",alt:"\u603b\u4f53\u6a21\u5f0f"})),(0,i.kt)("p",null,"\u5e0c\u671b\u5728\u540e\u7eed\u7684\u843d\u5730\u5b9e\u8df5\u4e2d\uff0c\u4f17\u5b89\u4fdd\u9669\u53ef\u4ee5\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u6574\u4f53\u6d41\u91cf\u6cbb\u7406\u7684\u5b8c\u6574\u843d\u5730\uff0c\u52a9\u529b\u4e92\u8054\u7f51\u4fdd\u9669\u9886\u57df\u7684\u6d41\u91cf\u7ba1\u63a7\u4e0e\u5b89\u5168\u6cbb\u7406\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u6587\u4e2d\u67b6\u6784\u56fe\u6d89\u53ca\u5230\u7684\u5177\u4f53\u540d\u8bcd\u5168\u90e8\u4e3a\u62bd\u8c61\u7406\u89e3\uff0c\u975e\u771f\u5b9e\u73af\u5883\u7528\u8bcd\u3002"),(0,i.kt)("li",{parentName:"ol"},"API Gateway \u6a2a\u5411\u5bf9\u6bd4\u90e8\u5206\u6570\u636e\u6765\u6e90\u4e8e\u4e92\u8054\u7f51\uff0c\u53ef\u80fd\u4e0e\u6700\u65b0\u6216\u771f\u5b9e\u6570\u636e\u5b58\u5728\u504f\u5dee\uff0c\u4e0d\u4ee3\u8868\u5b98\u7f51\u6570\u636e\u3002")))))}h.isMDXComponent=!0}}]);