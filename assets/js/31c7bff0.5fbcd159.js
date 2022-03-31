"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36375],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=l(a),m=n,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},29096:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=a(25773),n=a(30808),i=(a(27378),a(35318)),o=["components"],p={title:"Biweekly Report\uff5c2.1-2.14 Feature Highlights Update in Progress",keywords:["Apache APISIX","Weekly Report","Contributor","APISIX","API Gateway","Apache"],description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.",tags:["Events"]},s=void 0,l={permalink:"/blog/2022/02/17/weekly-report-0214",source:"@site/blog/2022/02/17/weekly-report-0214.md",title:"Biweekly Report\uff5c2.1-2.14 Feature Highlights Update in Progress",description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.",date:"2022-02-17T00:00:00.000Z",formattedDate:"February 17, 2022",tags:[{label:"Events",permalink:"/blog/tags/events"}],readingTime:3.08,truncated:!0,authors:[],prevItem:{title:"The practice of Nacos service discovery on API Gateway",permalink:"/blog/2022/02/21/nacos-api-gateway"},nextItem:{title:"file logger practice in API Gateway",permalink:"/blog/2022/02/16/file-logger-api-gateway"}},c={authorsImageUrls:[]},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Contributor Statistics",id:"contributor-statistics",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #6197",id:"issue-6197",children:[]},{value:"Issue #6265",id:"issue-6265",children:[]}]},{value:"Highlights of Recent Features",id:"highlights-of-recent-features",children:[]},{value:"Recent Blog Recommendations",id:"recent-blog-recommendations",children:[]}],h={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"From 2.1 to 2.14, 25 contributors submitted 55 commits for Apache APISIX. Thank you all for your contributions to Apache APISIX. It is your selfless contribution to make the Apache APISIX project better!")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Apache APISIX has grown as a community from the first day of open source and has quickly become the most active open source API gateway project in the world. These achievements cannot be achieved without the joint efforts of our community partners."),(0,i.kt)("p",null,'"If you want to go fast, go alone.If you want to go far, go together." The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.'),(0,i.kt)("p",null,"We have also compiled some issues suitable for newcomers to the community to participate in! If you are interested, don't miss it!"),(0,i.kt)("h2",{id:"contributor-statistics"},"Contributor Statistics"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1644998110059-61e68900-b2cc-442d-a20e-a3b5dfbd072d.png",alt:"Contributors List"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1644998110081-153dca10-ef36-47c7-8f99-e603af4a274d.png",alt:"New Contributors"})),(0,i.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,i.kt)("h3",{id:"issue-6197"},"Issue #6197"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/6197"},"https://github.com/apache/apisix/issues/6197")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,i.kt)("p",null,"How to current limit both in minutes and day by using plugin limit-count?"),(0,i.kt)("p",null,"Current, the plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"limit-count")," only Set a traffic limiting mode, second or minute. If I want to set seconds and minutes at the same time, plugin not support because what you set later will overwrite what you set earlier. Is there a better solution to this problem?"),(0,i.kt)("h3",{id:"issue-6265"},"Issue #6265"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/6265"},"https://github.com/apache/apisix/issues/6265")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,i.kt)("p",null,"The test case in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/ec0fc2ceaf04a20b0bd0ebdaad67296a1d3f621c/t/core/utils.t"},"t/core/utils.t")," currently has some code errors, such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Lua"},'         content_by_lua_block {\n             local core = require("apisix.core")\n             local resolvers = {"8.8.8.8"}\n             core.utils.set_resolver(resolvers)\n             local ip_info, err = core.utils.dns_parse("github.com")\n             if not ip_info then\n                 core.log.error("failed to parse domain: ", host, ", error: ",err)\n             end\n             ngx.say(require("toolkit.json").encode(ip_info))\n         }\n')),(0,i.kt)("p",null,"The variable ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," when the code is executed here (which may never happened)."),(0,i.kt)("h2",{id:"highlights-of-recent-features"},"Highlights of Recent Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6063"},"Supports to logging apisix_latency and upstream_latency"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jagerzhang"},"jagerzhang"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5727"},"Add CSRF plugin"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Baoyuantop"},"Baoyuantop"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5831"},"Add file-logger plugin"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/guoqqqi"},"guoqqqi"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6145"},"Add public-api plugin"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bzp2010"},"bzp2010"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6119"},"Add opentelemetry plugin"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yangxikun"},"yangxikun"),"\uff09")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6113"},"Add loggly plugin"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bisakhmondal"},"bisakhmondal"),"\uff09"))),(0,i.kt)("p",null,"The Apache APISIX project website and the Github issue have accumulated a wealth of documentation and experience, so if you encounter problems, you can read the documentation, search the issue with keywords, or participate in the discussion on the issue to put forward your own ideas and practical experience."),(0,i.kt)("h2",{id:"recent-blog-recommendations"},"Recent Blog Recommendations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/02/10/apisix-splunk-integration"},"Integrating Splunk HTTP Event Collector with Apache APISIX"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"This article explains how to configure and use the Splunk HEC service in Apache APISIX.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/01/26/apisix-integrate-forward-auth-plugin"},"Forward-auth, Another Choice for Authentication Function"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"This article describes the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"forward-auth"),", a new plugin in Apache APISIX, and provides detailed instructions on how to use this cleanly designed authentication model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/01/25/apisix-grpc-web-integration"},"Integrating Apache APISIX with gRPC-Web"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"Apache APISIX already supports gRPC protocol proxies, as well as HTTP(s) to gRPC Server proxies via the gRPC Transcode plugin. Through active community discussion and contributions, Apache APISIX has broadened the scope of support for the gRPC ecosystem: support for the gRPC Web Protocol Request Proxy.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/01/21/apisix-hashicorp-vault-integration"},"HashiCorp Vault Secure Storage Backend in Apache APISIX Ecosystem"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"This article brings you the upcoming release of the Vault-Apache APISIX integration and related details.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/01/21/apisix-xrpc-details-and-miltilingual"},"xRPC Will Be Released, Get More Details About APISIX Ecosystem"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"This article brings you Apache APISIX's upcoming xRPC framework and related details, as well as a detailed presentation of Apache APISIX in multi-language development support.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/01/20/upyun-public-gateway-usecase"},"The Practice of Public Gateway in CDN Scenario from UPYUN"),"\uff1a"),(0,i.kt)("p",{parentName:"li"},"In the previous sharing, we brought you the application of cloud at the Ingress level. This time, we will introduce you to the current cloud application examples under the public network gateway scenario, hoping to bring you some practical Apache APISIX scenarios to share in the cloud storage industry."))))}m.isMDXComponent=!0}}]);