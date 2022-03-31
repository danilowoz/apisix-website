"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80591],{35318:function(t,e,o){o.d(e,{Zo:function(){return p},kt:function(){return m}});var r=o(27378);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var c=r.createContext({}),u=function(t){var e=r.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),l=u(o),m=n,d=l["".concat(c,".").concat(m)]||l[m]||h[m]||i;return o?r.createElement(d,a(a({ref:e},p),{},{components:o})):r.createElement(d,a({ref:e},p))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=o.length,a=new Array(i);a[0]=l;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}l.displayName="MDXCreateElement"},23209:function(t,e,o){o.r(e),o.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return h}});var r=o(25773),n=o(30808),i=(o(27378),o(35318)),a=["components"],s={title:"Contributors \u2014 The Golden Metric of OpenSource Projects",slug:"2021/08/14/contributors-the-golden-metric-of-opensource-projects",author:"Lien",authorURL:"https://github.com/lilien1010",authorImageURL:"https://avatars.githubusercontent.com/u/3814966?v=4",keywords:["API gateway","APISIX","Apache APISIX","contributor graph","open-source project"],description:"This article explains why changes in the number of contributors is the golden metric for measuring open source projects. While GitHub already has a number of metrics, such as Star count, Issue count, and PR count, none of these metrics can visually reflect the trends and activity of an open source project over time. So Yiyiyimu proposed new metrics, such as contributor growth and monthly active contributors, and created an open-source tool called the Contributor Graph that allows GitHub users to use these metrics to identify how active a project is. Currently, the Contributor Graph is used in many other used in open source projects.",tags:["Community"]},c=void 0,u={permalink:"/blog/2021/08/14/contributors-the-golden-metric-of-opensource-projects",source:"@site/blog/2021/08/14/contributors-the-golden-metric-of-openSource-projects.md",title:"Contributors \u2014 The Golden Metric of OpenSource Projects",description:"This article explains why changes in the number of contributors is the golden metric for measuring open source projects. While GitHub already has a number of metrics, such as Star count, Issue count, and PR count, none of these metrics can visually reflect the trends and activity of an open source project over time. So Yiyiyimu proposed new metrics, such as contributor growth and monthly active contributors, and created an open-source tool called the Contributor Graph that allows GitHub users to use these metrics to identify how active a project is. Currently, the Contributor Graph is used in many other used in open source projects.",date:"2021-08-14T00:00:00.000Z",formattedDate:"August 14, 2021",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:4.49,truncated:!0,authors:[{name:"Lien",url:"https://github.com/lilien1010",imageURL:"https://avatars.githubusercontent.com/u/3814966?v=4"}],prevItem:{title:"Using the Apache APISIX OpenID Connect Plugin for Okta Centralized Authentication",permalink:"/blog/2021/08/16/using-the-apache-apisix-openid-connect-plugin-for-centralized-authentication"},nextItem:{title:"Chaos Mesh Helps Apache APISIX Improve System Stability",permalink:"/blog/2021/08/12/chaos-mesh-helps-apache-apisix-improve-system-stability"}},p={authorsImageUrls:[void 0]},h=[{value:"Contributor growth",id:"contributor-growth",children:[]},{value:"Monthly Active Contributors",id:"monthly-active-contributors",children:[]},{value:"Comparison on Multi Repo",id:"comparison-on-multi-repo",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],l={toc:h};function m(t){var e=t.components,o=(0,n.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"According to GitHub\u2019s statistics in 2020, over 60 million new repositories were added, and more than 56 million developers worked on OpenSource projects. By 2025, the number of developers working on OpenSource projects on GitHub is expected to exceed 100 million.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Source:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/contributor-graph"},"https://github.com/api7/contributor-graph"))),(0,i.kt)("p",null,"Behind these fast-growing numbers, open source maintainers did a lot of work on propaganda, article, media, Meetups, etc., to attract more developers for their projects, It\u2019s a lot to take in."),(0,i.kt)("p",null,"So for developers, how can they find out which one is the best fit for their company among the hundreds of projects on GitHub?"),(0,i.kt)("p",null,"Various indicators of open source projects needs to be considered."),(0,i.kt)("p",null,"Star number: This is the most direct indicator, it represents the project has attracted the attention of a number of developers, can reflect the level of marketing of the project. If the project has the financial support of commercial companies, a strong PR team, or a water army to paint Star, then this indicator can easily be distorted."),(0,i.kt)("p",null,"Issue and PR counts: Also GitHub provides the Insights feature, shown in the following image."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639549315114-8bcc2d6d-a67b-48a2-be1e-0831c2441921.png",alt:"Apache APISIX GitHub Insights"})),(0,i.kt)("p",null,"You can select the number of new and closed issues and PRs for this open source project, can also filter by period."),(0,i.kt)("p",null,"The above graph shows the data of Apache APISIX for the last month."),(0,i.kt)("p",null,"GitHub insights provides a great developer perspective, but it\u2019s not perfect: what about the quality of Issue and PR?"),(0,i.kt)("p",null,"The following graph shows the commit frequency statistics of Apache APISIX from it\u2019s first day, which shows that Apache APISIX has maintained a very stable and continuous activities, but this metric is also a bit thin: you can\u2019t see the data of which developers submitted these commits"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639549239894-1406e1d6-ae84-4364-89cd-1b63f6f4cd4b.png",alt:"Apache APISIX commits"})),(0,i.kt)("p",null,"after reading so many indicators, still you can\u2019t get your answer, don\u2019t you think that choosing an open source project is so complicated? Wait!"),(0,i.kt)("p",null,"Is there a \u201cgolden metric\u201d, a metric that cannot be mocked by marketing? A core metric that can tell the truth of a project?\nAs maintainers and developers of open source projects, we also need such golden metrics to guide us. Therefore, we propose two dimensions, \u201cContributor Growth\u201d and \u201cActive Contributors\u201d, and open source the statistics and analysis process: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/contributor-graph"},"https://github.com/api7/contributor-graph"),", you can also search directly through ",(0,i.kt)("a",{parentName:"p",href:"https://www.apiseven.com/zh/contributor-graph"},"https://www.apiseven.com/zh/contributor-graph"),". Here is an example from Apache APISIX."),(0,i.kt)("h2",{id:"contributor-growth"},"Contributor growth"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639549136527-e477c670-42d3-4764-9432-209c34dd222b.png",alt:"Apache APISIX contributor growth"})),(0,i.kt)("h2",{id:"monthly-active-contributors"},"Monthly Active Contributors"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639548976021-ed0946ae-eeb2-4dfc-8e15-c3db13f527e0.png",alt:"Apache APISIX Monthly Active Contributors"})),(0,i.kt)("p",null,"As you can clearly see from the two tables above, Apache APISIX has seen a steady growth in contributors since its first day, with about 25 contributors participating each month."),(0,i.kt)("h2",{id:"comparison-on-multi-repo"},"Comparison on Multi Repo"),(0,i.kt)("p",null,"Both the \u201cContributor Growth\u201d and \u201cActive Contributors\u201d charts support comparisons across multiple repositories. What\u2019s more, we pull the GitHub API to update the charts on a daily/monthly basis, so your repository can always display real-time contributor data by making a one-time copy using the link we provide."),(0,i.kt)("p",null,"The contributor growth line plot is based on the date of the first commit by each contributor to the project. The contributor growth line chart allows us to see the growth of the community based on the total number of contributors shown on the GitHub homepage."),(0,i.kt)("p",null,"By showing line plot for multiple repo in the same chart at the same time, we can also visually compare the development of different communities."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639548845735-43efcae0-3221-4739-b10f-0d9aaafad3fd.png",alt:"Apache APISIX compare the development of different communities"})),(0,i.kt)("p",null,"In the graph above, we can see that the number of contributors to Apache APISIX is growing at a very fast rate, and in just two years, the number of contributors has almost caught up with or even surpassed other open source API gateway projects."),(0,i.kt)("p",null,"The monthly contributor line plot is derived from the number of contributors committing each month."),(0,i.kt)("p",null,"Compared to the contributor growth line plot, the monthly contributors are a better measure of how the community has grown in a short period of time."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639548683512-d7c7a72b-7ac3-4535-bd1a-f056d05d196b.png",alt:"Apache APISIX monthly contributors compare"})),(0,i.kt)("p",null,"For example, in the graph above, we can see that Apache APISIX has the highest and most consistent number of monthly contributors of any open source API gateway project."),(0,i.kt)("p",null,"This explains why Apache APISIX has been able to catch up with its friends in terms of total contributors in such a short period of time since it\u2019s first day of open source."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639548241386-6ba96e66-5ab7-468e-9072-6144fb902909.png",alt:"Apache APISIX monthly contributors"})),(0,i.kt)("p",null,"The above graph is comparison of monthly contributors between different MQ community, which is also widely discussed on Twitter. With this chart, we can see that Apache Pulsar is catching up to Apache Kafka in terms of contributors of the month."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"The contributor graph is currently used in Apache APISIX, Apache Skywalking, Apache DolphinScheduler, Apache Openwhisk, Apache ShardingSphere, awesome-docker, TiDB docs-dm, and many other open source projects."),(0,i.kt)("p",null,"Also, we implemented more features, such as adding \u201canonymous\u201d contributors, or adding SVN-side contributors after the project was moved from SVN to GitHub."),(0,i.kt)("p",null,"When we talked about the Contributor Graph, not only did we want to use this tool to produce a visual graph of how active the Apache APISIX community is, we also made this little tool open sourced in the hopes that it will help other open source projects."),(0,i.kt)("p",null,"You are welcome to use the Contributor Graph to track your community activity, and any requests or questions are welcome in the Contributor Graph GitHub repository."),(0,i.kt)("p",null,"You can visit the Contributor Graph ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/contributor-graph"},"repository"),"."))}m.isMDXComponent=!0}}]);