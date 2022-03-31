"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1524],{35318:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},85219:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=o(25773),r=o(30808),i=(o(27378),o(35318)),a=["components"],s={title:"How to Use Gitpod to Develop API Gateway?",authors:[{name:"Yong Qian",title:"Author",url:"https://github.com/nic-6443",image_url:"https://avatars.githubusercontent.com/u/22141303?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","API Gateway","Gitpod","IDE","Develop"],description:"This article introduces the open source cloud IDE product - Gitpod, and demonstrates how to use Gitpod to develop API gateway Apache APISIX and solutions to common problems.",tags:["Technology"]},l=void 0,p={permalink:"/blog/2022/03/03/develop-apisix-with-gitpod",source:"@site/blog/2022/03/03/develop-apisix-with-gitpod.md",title:"How to Use Gitpod to Develop API Gateway?",description:"This article introduces the open source cloud IDE product - Gitpod, and demonstrates how to use Gitpod to develop API gateway Apache APISIX and solutions to common problems.",date:"2022-03-03T00:00:00.000Z",formattedDate:"March 3, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:4.975,truncated:!0,authors:[{name:"Yong Qian",title:"Author",url:"https://github.com/nic-6443",image_url:"https://avatars.githubusercontent.com/u/22141303?v=4",imageURL:"https://avatars.githubusercontent.com/u/22141303?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Apache APISIX and CoreDNS open new doors for service discovery",permalink:"/blog/2022/03/04/apisix-uses-coredns-enable-service-discovery"},nextItem:{title:"Biweekly Report\uff5cExplore the week of Feb 15 - Feb 28",permalink:"/blog/2022/03/03/weekly-report-0228"}},c={authorsImageUrls:[void 0,void 0]},u=[{value:"Install the Gitpod Chrome Plugin",id:"install-the-gitpod-chrome-plugin",children:[]},{value:"Set Up an APISIX Development Environment with Gitpod",id:"set-up-an-apisix-development-environment-with-gitpod",children:[{value:"Step 1: Execute Test Cases",id:"step-1-execute-test-cases",children:[]},{value:"Step 2: Accessing HTTP services",id:"step-2-accessing-http-services",children:[]}]},{value:"FAQ Summary",id:"faq-summary",children:[{value:"Browser-Based Experience",id:"browser-based-experience",children:[]},{value:"Private Deployment",id:"private-deployment",children:[]}]},{value:"Summary",id:"summary",children:[]}],d={toc:u};function h(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article introduces the open source cloud IDE product - Gitpod, and demonstrates how to use Gitpod to develop API gateway Apache APISIX and solutions to common problems.")),(0,i.kt)("p",null,'With the advent of the cloud-native wave, all aspects of the software development process are being transformed, and one of the hottest directions is "cloud IDE". The so-called "cloud IDE" is the use of cloud computing resources as a development environment for software project development.'),(0,i.kt)("p",null,"This development model has many benefits for developers, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compute resources are available on demand, so that development efficiency is not affected by hardware limitations."),(0,i.kt)("li",{parentName:"ul"},"Development environment standardization, each project's development environment may have many software dependencies, these dependencies can be standardized in the form of Docker images."),(0,i.kt)("li",{parentName:"ul"},"Quickly start or destroy a development environment for each project to avoid problems such as dependency conflicts when multiple projects are developed in parallel."),(0,i.kt)("li",{parentName:"ul"},"For pure Linux environments, it is sometimes more difficult for server-side development students to toss some dependency differences between MacOS and Windows than to develop project code.")),(0,i.kt)("p",null,'The two most popular IDEs are JetBrains and VSCode, and both of these popular development tools have cloud-based products, so it\'s clear that the "cloud IDE" direction is favored by many developers.'),(0,i.kt)("p",null,"Apache APISIX is a dynamic, real-time, high-performance API gateway that provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more."),(0,i.kt)("p",null,"Apache APISIX, as an open source cloud native API gateway, how to quickly deploy the development environment is more important for developers. This article will introduce an open source cloud IDE product - ",(0,i.kt)("a",{parentName:"p",href:"https://gitpod.io/"},"Gitpod"),", and demonstrate how to use Gitpod to develop Apache APISIX."),(0,i.kt)("h2",{id:"install-the-gitpod-chrome-plugin"},"Install the Gitpod Chrome Plugin"),(0,i.kt)("p",null,"Gitpod provides one-click launch capabilities for the three main code hosting services GitLab, GitHub, and Bitbucket, and only requires the ",(0,i.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki"},"Chrome plugin")," to be installed for subsequent use."),(0,i.kt)("p",null,"Once installed, the plugin injects a launch button on the code repository page, here we'll use GitHub as an example. After installing the plugin, open the APISIX project address and you will see the relevant button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646233179407-391328ba-68cd-41df-8454-3c7d280bbc6e.png",alt:"error/github example.png"})),(0,i.kt)("p",null,"Clicking the button will redirect you to the Gitpod page. After completing the GitHub application authorization, you will be taken to the following screen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646233426671-547eb71c-9294-43af-b144-ea3298343341.png",alt:"erro/gitpod UI.png"})),(0,i.kt)("p",null,"Does it look very familiar? Yes, this is VSCode, the most popular code editor."),(0,i.kt)("p",null,"Gitpod maintains a branch of VSCode to implement an architecture that separates the VSCode client from the server. As a VSCode that grows on the cloud, it functions the same as the desktop version. The same plugins we use for local development can be used on the cloud, but unlike local, VSCode on the cloud has server-level computing resources and a network environment."),(0,i.kt)("h2",{id:"set-up-an-apisix-development-environment-with-gitpod"},"Set Up an APISIX Development Environment with Gitpod"),(0,i.kt)("h3",{id:"step-1-execute-test-cases"},"Step 1: Execute Test Cases"),(0,i.kt)("p",null,"I'm sure many students who are new to open source have struggled with how to build a development environment for open source projects. One of the major differences between open source projects and enterprise development is that open source projects often have a large number of test cases that are automated to ensure the quality of the project, so running these test cases locally is probably the first problem we encounter."),(0,i.kt)("p",null,"Let's try running the APISIX test cases in Gitpod. Here's how to configure the dependencies in the APISIX repository using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/.github/workflows/build.yml"},"github workflow"),". Run the following steps in the Gitpod terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Shell"},"# Start the components that CI depends on\nmake ci-env-up project_compose_ci=ci/pod/docker-compose.common.yml\n\n# Install compilation dependency\nsudo apt install -y cpanminus build-essential libncurses5-dev libreadline-dev libssl-dev perl libpcre3 libpcre3-dev libldap2-dev\n\n# Compile and execute test cases\nsudo OPENRESTY_VERSION=default ./ci/linux_openresty_1_17_runner.sh do_install\nsudo ./ci/linux_openresty_1_17_runner.sh script\n")),(0,i.kt)("p",null,"The whole process will be very silky smooth because there is a hidden advantage here: Gitpod runs in a foreign environment, so downloading various dependencies will be very fast and you won't encounter network problems."),(0,i.kt)("h3",{id:"step-2-accessing-http-services"},"Step 2: Accessing HTTP services"),(0,i.kt)("p",null,"So how do we access the HTTP services (e.g. APISIX) started in the project?"),(0,i.kt)("p",null,"Naturally, it is possible to access it through the terminal. But if you want to access it through the page, you can also expose the open port to the public network through Remote Explorer, as shown in the following figure."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646234288822-b7e30fce-604f-451a-b87f-3b72309b246a.png",alt:"error/access page example.png"})),(0,i.kt)("p",null,"Then, by clicking on the browser icon next to the port, Gitpod will automatically open a link to the service corresponding to that port."),(0,i.kt)("h2",{id:"faq-summary"},"FAQ Summary"),(0,i.kt)("h3",{id:"browser-based-experience"},"Browser-Based Experience"),(0,i.kt)("p",null,"One of the major problems with using Gitpod in the browser is that many VSCode shortcuts are captured by the browser, making it impossible to perform the corresponding action."),(0,i.kt)("p",null,"Here's how to do it."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the Gitpod plugin in VSCode's Plugin Marketplace.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646234524665-0e860b0b-ec80-4ba9-a893-cfa79d3f48c3.png",alt:"error/install gitpod plugin.png"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Then click ",(0,i.kt)("inlineCode",{parentName:"li"},"Gitpod: Open in VS Code")," on the Gitpod page in your browser. You can then pull up your local VSCode as a client and connect to the Gitpod in the cloud to get the same coding experience as the desktop version.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646234630208-bc8912a8-9542-4888-9cde-8889631d2ea8.png",alt:"error/open in vs code.png"})),(0,i.kt)("h3",{id:"private-deployment"},"Private Deployment"),(0,i.kt)("p",null,"As we mentioned earlier, Gitpod is an open source product, so it is possible to deploy it privately within your organization, so that you can use this great development tool in your private repository. For more information on how to deploy Gitpod, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gitpod-io/gitpod"},"official Gitpod documentation and repository"),"."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"The beauty of Gitpod is that it allows developers to get started with a project quickly, which is very much in line with the needs of the open source community. Because open source projects can often feel like a mystery to developers who are new to open source, it can be a deterrent, but you'll find that it's not."),(0,i.kt)("p",null,"I hope that through the introduction and description of this article, every developer interested in open source projects with the help of open source tools can more easily join the open source community, so that the open source ecosystem continues to prosper."))}h.isMDXComponent=!0}}]);