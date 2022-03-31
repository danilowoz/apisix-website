"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83489],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(a),m=n,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||i;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78169:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=a(25773),n=a(30808),i=(a(27378),a(35318)),o=["components"],l={title:"Community Weekly\uff5cTwo new committers, feature highlight updates in progress",keywords:["Apache APISIX","API Gateway","contributor","Good first issue"],description:"The Apache APISIX Community Weekly Newsletter hopes to help community members better understand the weekly progress of the Apache APISIX community and facilitate your participation in the Apache APISIX community.",tags:["Events"]},p=void 0,s={permalink:"/blog/2021/09/15/weekly-report",source:"@site/blog/2021/09/15/weekly-report.md",title:"Community Weekly\uff5cTwo new committers, feature highlight updates in progress",description:"The Apache APISIX Community Weekly Newsletter hopes to help community members better understand the weekly progress of the Apache APISIX community and facilitate your participation in the Apache APISIX community.",date:"2021-09-15T00:00:00.000Z",formattedDate:"September 15, 2021",tags:[{label:"Events",permalink:"/blog/tags/events"}],readingTime:4.32,truncated:!0,authors:[],prevItem:{title:"Implementing Apache APISIX in Tencent Cloud TI-ONE Platform",permalink:"/blog/2021/09/16/tencent-cloud"},nextItem:{title:"Apache APISIX powers the Youzanyun native PaaS platform for comprehensive micro-service governance",permalink:"/blog/2021/09/14/youzan"}},c={authorsImageUrls:[]},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Contributor statistics",id:"contributor-statistics",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #4906",id:"issue-4906",children:[]},{value:"Issue #4945",id:"issue-4945",children:[]}]},{value:"Recent feature highlights",id:"recent-feature-highlights",children:[]},{value:"Recent Blog Posts Recommended",id:"recent-blog-posts-recommended",children:[]},{value:"About Apache APISIX",id:"about-apache-apisix",children:[]}],h={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"33 developers have committed 130 commits to Apache APISIX in the last two weeks since 8.30. Thank you to the following people for adding to Apache APISIX (in no particular order), your selfless work makes the Apache APISIX project better!")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Apache APISIX has grown as a community since its first day of open source and has quickly become the most active open source API gateway project in the world. These achievements could not have been achieved without the joint efforts of our community partners."),(0,i.kt)("p",null,'"The Apache APISIX Community Weekly Newsletter hopes to help community members better grasp the weekly progress of the Apache APISIX community and facilitate your participation in the Apache APISIX community.'),(0,i.kt)("p",null,"We've also put together some issues for those new to the community! If you are interested, don't miss them!"),(0,i.kt)("h2",{id:"contributor-statistics"},"Contributor statistics"),(0,i.kt)("p",null,"From 8.30-9.12, 33 developers submitted 130 commits to Apache APISIX, and we thank the following people for their contributions to Apache APISIX (in no particular order)."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631754498946-7d655f8e-3881-4594-b029-a67189a63ffa.jpg",alt:"contributor"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631676136968-13216876-e9f6-4852-95b4-6f73db5cb405.30-9",alt:"committer"})),(0,i.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,i.kt)("h3",{id:"issue-4906"},"Issue #4906"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/4906"},"#4906")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem Description"),": When testing Apache APISIX load balancing with two internal domains and adding pass_host: node with active health check enabled, I found that it still routes to the faulty host."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},'for i in $(seq 1 1000); do curl  -H "Host: httpbin.org" ${APISIX_GATEWAY_URL}  ; done\napple\napple\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>nginx/1.17.7</center>\n</body>\n</html>\napple\napple\napple\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>nginx/1.17.7</center>\n</body>\n</html>\napple\napple\napple\napple\napple\n')),(0,i.kt)("h3",{id:"issue-4945"},"Issue #4945"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/4945"},"#4945")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem Description"),": I am having problems trying to download Apache APISIX version 2.9 on a Macbook with M1 system according to the related guide article. The prompt is as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Apache"},"lualogging 1.5.2-1 depends on luasocket (3.0rc1-2 installed)\nlualogging 1.5.2-1 is now installed in /Users/juzhiyuan/workspace/apisix-2.9/apache-apisix-2.9-src/deps (license: MIT/X11)\n\ncasbin 1.26.0-1 depends on lrexlib-pcre >= 2.9.1 (not installed)\nInstalling https://luarocks.org/lrexlib-pcre-2.9.1-1.src.rock\n\nError: Failed installing dependency: https://luarocks.org/casbin-1.26.0-1.rockspec - Failed installing dependency: https://luarocks.org/lrexlib-pcre-2.9.1-1.src.rock - Could not find header file for PCRE\n  No file pcre.h in /usr/local/include\n  No file pcre.h in /usr/include\n  No file pcre.h in /include\nYou may have to install PCRE in your system and/or pass PCRE_DIR or PCRE_INCDIR to the luarocks command.\nExample: luarocks install lrexlib-pcre PCRE_DIR=/usr/local\nmake: *** [deps] Error 1\n")),(0,i.kt)("h2",{id:"recent-feature-highlights"},"Recent feature highlights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4916"},"referer-restriction support for configuring blacklist and message"),"(contributor: okaybase)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4856"},"node_listen and admin_listen support richer configuration forms"),"(contributor: wayne-cheng), ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4967"},"additional reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4947"},"admin-api support for returning stream type plugin information"),"(Contributor: spacewander)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/5000"},"Support for configuring fallback SNI"),"(Contributed by spacewander)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4965"},"proxy-mirror support for scaled mirror requests"),"(Contributor: okaybase)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/5011"},"Control API adds dump routing configuration"),"(Contributor: Zheaoli)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2081"},"dashboard Support Service Discovery Configuration"),"(Contributor: bzp2010)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1984"},"dashboard Route advanced configuration conditions support built-in parameter configuration"),"(contributor: lookbrook)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/2117"},"dashboard Upstream support for Keepalive Pool configuration"),"(Contributor: bzp2010)")),(0,i.kt)("p",null,"The Apache APISIX project website and the issue on Github have accumulated a wealth of documentation and experience, if you encounter problems you can read the documentation, search in the issue with keywords, and also participate in the discussion on the issue to put forward their ideas and practical experience."),(0,i.kt)("h2",{id:"recent-blog-posts-recommended"},"Recent Blog Posts Recommended"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/30/weekly-report/"},"Apache APISIX Community Weekly Report \uff5c 2021 8.23-8.29")),(0,i.kt)("p",{parentName:"li"},'"The Apache APISIX Community Weekly Report hopes to help community members better grasp the weekly progress of the Apache APISIX community and facilitate your participation in the Apache APISIX community.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/31/Apache%20APISIX%20%C3%97%20KubeSphere-a-better-gateway-and-K8S-Ingress-Controller/"},"Apache APISIX Delivers a Better Gateway and K8S Ingress Controller for KubeSphere")),(0,i.kt)("p",{parentName:"li"},"This article describes how to deploy APISIX and APISIX Ingress Controller directly in KubeSphere. APISIX can be used to carry business traffic by acting as a gateway, or a data plane for APISIX Ingress Controller.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/09/15/weekly-report/"},"Heard you have something to say about Apache APISIX? Here's your chance")),(0,i.kt)("p",{parentName:"li"},"We invite you to participate in the Apache APISIX User Survey, and your feedback will directly influence our future development. We will randomly select a number of lucky stars who will have a chance to win a small gift from the Apache APISIX community!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/16/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication/"},"Using Apache APISIX and Okta for Authentication")),(0,i.kt)("p",{parentName:"li"},"This article describes how to use Apache APISIX to configure Okta authentication to switch from traditional authentication mode to centralized authentication mode, getting rid of multiple accounts, multiple passwords, duplicate authentication and other pain points faced by many developers."))),(0,i.kt)("h2",{id:"about-apache-apisix"},"About Apache APISIX"),(0,i.kt)("p",null,"Apache APISIX is a dynamic, real-time, high-performance open source API gateway that provides rich traffic management features such as load balancing, dynamic upstream, canary release, service meltdown, authentication, observability, etc. Apache APISIX helps enterprises quickly and securely handle API and microservice traffic, including gateways, Kubernetes Ingress and Service Grid."),(0,i.kt)("p",null,"Apache APISIX has been used by hundreds of enterprises worldwide to handle business-critical traffic, including finance, Internet, manufacturing, retail, carriers, and more, such as NASA, the European Union's Digital Factory, China Airlines, China Mobile, Tencent, Huawei, Weibo, NetEase, Shell, 360, Taikang, and Nespresso Tea."),(0,i.kt)("p",null,"More than 200 contributors have come together to create Apache APISIX, the world's most active open source gateway project. Smart developers! Come join this active and diverse community and come together to bring more good things to the world!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"Apache APISIX GitHub")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/"},"Apache APISIX Website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/getting-started"},"Apache APISIX Docs"))))}m.isMDXComponent=!0}}]);