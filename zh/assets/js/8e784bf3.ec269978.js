"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78216],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,h=u["".concat(m,".").concat(d)]||u[d]||l[d]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1988:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(25773),o=r(30808),i=(r(27378),r(35318)),a=["components"],c={id:"committer-guide",title:"Project management structure",keywords:["API gateway","APISIX","Apache APISIX","committer guide"],description:"This article covers some guidelines for Apache APISIX committers. It walks through the type of contributions and the contributor ladder and how contributors can become committers and then PMC members."},m=void 0,s={unversionedId:"committer-guide",id:"committer-guide",isDocsHomePage:!1,title:"Project management structure",description:"This article covers some guidelines for Apache APISIX committers. It walks through the type of contributions and the contributor ladder and how contributors can become committers and then PMC members.",source:"@site/docs/general/committer-guide.md",sourceDirName:".",slug:"/committer-guide",permalink:"/zh/docs/general/committer-guide",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/committer-guide.md",tags:[],version:"current",lastUpdatedBy:"yilinzeng",lastUpdatedAt:1648713640,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"committer-guide",title:"Project management structure",keywords:["API gateway","APISIX","Apache APISIX","committer guide"],description:"This article covers some guidelines for Apache APISIX committers. It walks through the type of contributions and the contributor ladder and how contributors can become committers and then PMC members."},sidebar:"docs",previous:{title:"Report a security vulnerability",permalink:"/zh/docs/general/security"},next:{title:"Documentation style guide",permalink:"/zh/docs/general/documentation-style-guide"}},p=[{value:"How do I become an Apache APISIX committer?",id:"how-do-i-become-an-apache-apisix-committer",children:[]},{value:"Promotion",id:"promotion",children:[]},{value:"Responsibilities",id:"responsibilities",children:[]},{value:"How do I become an Apache APISIX PMC member?",id:"how-do-i-become-an-apache-apisix-pmc-member",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document walks through how Apache APISIX contributors are structured."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/general/contributor-guide/"},"Contributing flow")," to learn more about the contributing process."),(0,i.kt)("h2",{id:"how-do-i-become-an-apache-apisix-committer"},"How do I become an Apache APISIX committer?"),(0,i.kt)("p",null,"Anyone can be a contributor to an Apache project. Being a contributor means that you take an interest in the project and contribute to it in some way, ranging from asking sensible questions (which documents the project and provides feedback to developers) to working on new features and patches."),(0,i.kt)("p",null,"If you become a valuable contributor to the project you may be invited to become a Committer. A Committer is a term used at the ASF to signify someone who is committed to a particular project. It brings with it the privilege of write access to the project repository and resources."),(0,i.kt)("p",null,"More details could be found ",(0,i.kt)("a",{parentName:"p",href:"https://community.apache.org/contributors/"},"here"),"."),(0,i.kt)("h2",{id:"promotion"},"Promotion"),(0,i.kt)("p",null,"The Apache APISIX community follows the Apache Community\u2019s process of accepting a new committer. After a contributor participates in APISIX's community actively, (P)PMC members will decide whether to invite the contributor to join Committers and (P)PMC."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This process starts with a discussion and vote in @private. Only the current PMC members can nominate a new committer or a PMC member. Each new email in the discussion will extend the process for 72 hours. Please remain patient as PMC members arrive at a decision.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the vote passes, an offer letter is sent to the contributor to become a committer with @private CC\u2019ed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The new committer can then sign the ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/contributor-agreements.html#clas"},"ICLA")," and apply for an Apache ID and email address.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can now link your Apache account and your GitHub account via ",(0,i.kt)("a",{parentName:"p",href:"https://gitbox.apache.org/setup/"},"GitBox"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("a",{parentName:"p",href:"/team"},"Team")," page is updated with the new committer."))),(0,i.kt)("h2",{id:"responsibilities"},"Responsibilities"),(0,i.kt)("p",null,"The following are the expected responsibilities of an ASF Committer."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Develop new features.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Refactor code.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Review pull requests reliably and in time.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Consider and accept feature requests.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Answer questions.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update documentation and examples.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Improve processes and tools.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Guide new contributors to join the community."))),(0,i.kt)("h2",{id:"how-do-i-become-an-apache-apisix-pmc-member"},"How do I become an Apache APISIX PMC member?"),(0,i.kt)("p",null,"In APISIX community, a committer who has earned even more merits can be invited to be a part of the Project Management Committee (PMC)."),(0,i.kt)("p",null,"One thing that is sometimes hard to understand when you are new to the open development process used at the ASF, is that we value the community more than the code. A strong and healthy community will be respectful and be a fun and rewarding place. More importantly, a diverse and healthy community can continue to support the code over the longer term, even as individual companies come and go from the field."))}u.isMDXComponent=!0}}]);