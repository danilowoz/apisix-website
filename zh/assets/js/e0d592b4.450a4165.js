"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97314],{35318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=o(a),m=n,k=h["".concat(u,".").concat(m)]||h[m]||c[m]||p;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<p;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},19641:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var r=a(25773),n=a(30808),p=(a(27378),a(35318)),i=["components"],l={title:"\u793e\u533a\u5468\u62a5\uff5c11.1-11.14 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",keywords:["Apache APISIX","\u793e\u533a\u5468\u62a5","APISIX","API Gateway","\u8d21\u732e\u8005"],description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",tags:["Events"]},u=void 0,o={permalink:"/zh/blog/2021/11/16/weekly-report-1114",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/11/16/weekly-report-1114.md",title:"\u793e\u533a\u5468\u62a5\uff5c11.1-11.14 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",date:"2021-11-16T00:00:00.000Z",formattedDate:"2021\u5e7411\u670816\u65e5",tags:[{label:"Events",permalink:"/zh/blog/tags/events"}],readingTime:4.39,truncated:!0,authors:[],prevItem:{title:"\u5982\u4f55\u4e0e Dapr \u96c6\u6210\u6253\u9020 Apache APISIX \u7f51\u5173\u63a7\u5236\u5668",permalink:"/zh/blog/2021/11/17/dapr-with-apisix"},nextItem:{title:"APISIX-Datadog \u63d2\u4ef6\u53d1\u5e03\uff0c\u52a9\u529b\u7528\u6237\u63d0\u9ad8\u7cfb\u7edf\u7684\u53ef\u89c2\u6d4b\u6027",permalink:"/zh/blog/2021/11/12/apisix-datadog"}},s={authorsImageUrls:[]},c=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[]},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #5400",id:"issue-5400",children:[]},{value:"Issue #5417",id:"issue-5417",children:[]}]},{value:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",children:[]},{value:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",children:[]}],h={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u4ece 11.1 \u5230 11.14, \u6709 28 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 114 \u4e2a commits\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")),(0,p.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,p.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,p.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u8fd8\u6574\u7406\u4e86\u4e00\u4e9b\u9002\u5408\u65b0\u6765\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u53c2\u52a0\u7684 issue\uff01\u611f\u5174\u8da3\u7684\u540c\u5b66\u4eec\uff0c\u8d70\u8fc7\u8def\u8fc7\u4e0d\u8981\u9519\u8fc7\uff01"),(0,p.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1636942852485-0effd8be-552e-4871-ba3e-356772016a18.png",alt:"\u672c\u5468\u8d21\u732e\u8005\u540d\u5355"})),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1636940503842-fc52a349-443e-4f4b-9787-f743299870f3.png",alt:"\u672c\u5468\u65b0\u664b\u8d21\u732e\u8005"})),(0,p.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,p.kt)("h3",{id:"issue-5400"},"Issue #5400"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),": ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5400"},"https://github.com/apache/apisix/issues/5400")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u4e03\u5c42\u7684 HTTP \u65e5\u5fd7\u662f\u5b58\u50a8\u5728 acccess.log \u4e2d\u7684\uff0c\u90a3\u4e48\u56db\u5c42\u4ee3\u7406 stream route \u5982\u4f55\u542f\u7528\u65e5\u5fd7\u5e76\u81ea\u5b9a\u4e49\u65e5\u5fd7\u8def\u5f84\u5462\uff1f\u4f20\u7edf\u7684 OpenResty \u662f\u53ef\u4ee5\u5b9e\u73b0\u7684\u3002"),(0,p.kt)("h3",{id:"issue-5417"},"Issue #5417"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),": ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5417"},"https://github.com/apache/apisix/issues/5417")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u76ee\u524d\uff0c\u5982\u679c\u7528\u6237\u6ca1\u6709\u6307\u5b9a\u4e00\u4e2a ID\uff0cApache APISIX \u4f1a\u5728\u521d\u59cb\u5316\u65f6\u751f\u6210\u4e00\u4e2a ID\uff0c\u5b83\u4f9d\u8d56\u4e8e ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/thibaultcha/lua-resty-jit-uuid"},"lua-resty-jit-uuid")," \u5e93\uff0c\u4f46\u6ca1\u6709\u4e00\u4e2a\u660e\u786e\u7684 seed\u3002",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/4dafab5afa3293b3d72007517246e01da385f8ef/apisix/core/id.lua#L76-L78"},"\u5982\u4e0b"),"\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Lua"},'uuid.seed()\n apisix_uid = uuid.generate_v4()\n log.notice("not found apisix uid, generate a new one: ", apisix_uid)\n')),(0,p.kt)("p",null,"\u800c jit-uuid \u5e93\u901a\u8fc7 ngx_lua \u73af\u5883\u4e2d\u7684\u8fdb\u7a0b ID \u548c\u65f6\u95f4\u521b\u5efa seed\uff0c",(0,p.kt)("a",{parentName:"p",href:"https://github.com/thibaultcha/lua-resty-jit-uuid/blob/82538049040ae85ff880b79886f21d8593140c7d/lib/resty/jit-uuid.lua#L53-L54"},"\u5982\u4e0b"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Lua"},"        if ngx then\n            seed = ngx.time() + ngx.worker.pid()\n")),(0,p.kt)("p",null,"\u7136\u800c\uff0c\u5728\u5bb9\u5668\u5316\u73af\u5883\u4e2d\uff0c\u8fdb\u7a0b ID\uff08\u4e3b\u8fdb\u7a0b\uff09\u53ef\u80fd\u662f\u76f8\u540c\u7684\uff0c\u5373 1 \u53f7\u8fdb\u7a0b\uff0c\u53e6\u5916\uff0c\u5982\u679c\u7528\u6237\u8bd5\u56fe\u901a\u8fc7\u90e8\u7f72\u8d44\u6e90\u5728 Kubernetes \u4e0a\u90e8\u7f72 Apache APISIX \u96c6\u7fa4\uff0c\u51e0\u4e2a Pod \u7684\u65f6\u95f4\u53ef\u80fd\u662f\u76f8\u540c\u7684\uff0c\u56e0\u4e3a ngx.time \u6ca1\u6709\u8db3\u591f\u7684\u7cbe\u786e\u6027\uff08\u53ea\u6709\u6beb\u79d2\u7ea7\u522b\uff09\u3002\u6240\u4ee5\u751f\u6210\u7684 APISIX ID \u53ef\u80fd\u662f\u91cd\u590d\u7684\uff0c\u5982\u679c\u8fd9\u4e2a ID \u662f\u5173\u952e\u7684\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5728\u4e1a\u52a1\u573a\u666f\u4e2d\u9020\u6210\u4e25\u91cd\u7684\u540e\u679c\u3002"),(0,p.kt)("h2",{id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"},"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5350"},"APISIX \u652f\u6301\u5728 Arch Linux \u4e0a\u5b89\u88c5"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/rapiz1"},"rapiz1"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5354"},"APISIX limit-conn \u63d2\u4ef6\u652f\u6301\u53d8\u91cf\u4f5c\u4e3a\u9650\u6d41 key"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/Xunzhuo"},"Xunzhuo"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5378"},"APISIX limit-count \u63d2\u4ef6\u652f\u6301\u53d8\u91cf\u4f5c\u4e3a\u9650\u6d41 key"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/Xunzhuo"},"Xunzhuo"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5409"},"APISIX \u652f\u6301\u901a\u8fc7 POST \u8868\u5355\u5c5e\u6027\u8fdb\u884c\u9ad8\u7ea7\u8def\u7531\u5339\u914d"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/bzp2010"},"bzp2010"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5372"},"APISIX \u65b0\u589e\u7528\u4e8e\u6307\u6807\u6536\u96c6\u7684 datadog \u63d2\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/bisakhmondal"},"bisakhmondal"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5478"},"APISIX \u65b0\u589e skywalking-logger \u63d2\u4ef6\uff0c\u53ef\u5c06 Access Log \u6570\u636e\u63a8\u9001\u5230 SkyWalking OAP \u670d\u52a1\u5668"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/dmsolr"},"dmsolr"),"\uff09"))),(0,p.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u548c Github \u4e0a\u7684 issue \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"),(0,p.kt)("h2",{id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350"},"\u8fd1\u671f\u535a\u6587\u63a8\u8350"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/11/03/airwallex-usercase"},"Apache APISIX \u5982\u4f55\u901a\u8fc7\u7f51\u5173\u5c42\u4e3a Airwallex \u6570\u636e\u4e3b\u6743\u4fdd\u9a7e\u62a4\u822a"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u5e26\u6765\u5173\u4e8e Airwallex \u7a7a\u4e2d\u4e91\u6c47\u662f\u5982\u4f55\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u7f51\u5173\u5c42\u90e8\u7f72\u6765\u52a0\u56fa\u6570\u636e\u4e3b\u6743\u65b9\u9762\u7684\u5efa\u8bbe\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/11/04/skywalking"},"\u6d45\u8c08 Apache APISIX \u7684\u53ef\u89c2\u6d4b\u6027"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u53ef\u89c2\u6d4b\u6027\u80fd\u529b\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7 Apache SkyWalking \u63d0\u5347Apache APISIX \u7684\u53ef\u89c2\u6d4b\u6027\u80fd\u529b\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/11/12/apisix-datadog"},"APISIX-Datadog \u63d2\u4ef6\u53d1\u5e03\uff0c\u52a9\u529b\u7528\u6237\u63d0\u9ad8\u7cfb\u7edf\u7684\u53ef\u89c2\u6d4b\u6027"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"Apache APISIX \u6700\u8fd1\u53d1\u5e03\u4e86\u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/plugins/datadog/"},"APISIX-Datadog"),"\uff0c\u4ee5\u63d0\u4f9b\u4e0e Datadog \u76d1\u63a7\u5e73\u53f0\u7684\u96c6\u6210\u3002\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86 APISIX-Datadog \u63d2\u4ef6\u7684\u5b9e\u73b0\u539f\u7406\u53ca\u529f\u80fd\u3002"))))}m.isMDXComponent=!0}}]);