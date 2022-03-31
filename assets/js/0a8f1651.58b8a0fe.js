"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12072],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17330:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var i=n(25773),a=n(30808),r=(n(27378),n(35318)),o=["components"],p={title:"API Gateway Apache APISIX provides enhancements on API Management",authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","API Gateway","Security","Ecosystem"],description:"This article introduces the principle and usage of API gateway Apache APISIX native plugin `public-api`.",tags:["Technology","Ecosystem"]},l=void 0,u={permalink:"/blog/2022/03/01/apisix-integration-public-api-plugin",source:"@site/blog/2022/03/01/apisix-integration-public-api-plugin.md",title:"API Gateway Apache APISIX provides enhancements on API Management",description:"This article introduces the principle and usage of API gateway Apache APISIX native plugin `public-api`.",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:8.385,truncated:!0,authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4",imageURL:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"How to Implement Traffic Governance in Internet Insurance with APISIX?",permalink:"/blog/2022/03/02/zhongan-usercase-with-apache-apisix"},nextItem:{title:"Upgrade of observability capabilities, API Gateway Apache APISIX integrates OpenTelemetry",permalink:"/blog/2022/02/28/apisix-integration-opentelemetry-plugin"}},s={authorsImageUrls:[void 0,void 0]},c=[{value:"Background Information",id:"background-information",children:[]},{value:"Initial Knowledge about <code>public-api</code>",id:"initial-knowledge-about-public-api",children:[{value:"Confirm Whether the API is Open",id:"confirm-whether-the-api-is-open",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Method 1: Basic Use",id:"method-1-basic-use",children:[]},{value:"Method 2: Customize the Path",id:"method-2-customize-the-path",children:[]},{value:"Scenario Example: Protecting Router",id:"scenario-example-protecting-router",children:[]}]},{value:"Principle Explanation",id:"principle-explanation",children:[{value:"Before Using <code>public-api</code> Plugin",id:"before-using-public-api-plugin",children:[]},{value:"After adding the <code>public-api</code> Plugin",id:"after-adding-the-public-api-plugin",children:[]}]},{value:"Summary",id:"summary",children:[]}],h={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article introduces the principle and usage of API gateway Apache APISIX native plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api"),".")),(0,r.kt)("h2",{id:"background-information"},"Background Information"),(0,r.kt)("p",null,"Apache APISIX is a dynamic, real-time, high-performance API gateway that provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more. As an API gateway, Apache APISIX not only has many useful plug-ins, but also supports dynamic plug-in change and hot plug."),(0,r.kt)("p",null,"When users develop custom plugins in Apache APISIX, they can define some APIs (hereinafter referred to as: public API) for the plugins. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," plugin, which implements and provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwt/sign")," interface for signing JWT, because this interface is not added through the Admin API, it can't be managed like a route."),(0,r.kt)("p",null,"In practical application scenarios, the provided interface is for internal calls, rather than being open on the public network for anyone to call. In order to deal with this scenario, Apache APISIX designed ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugin-interceptors/"},(0,r.kt)("inlineCode",{parentName:"a"},"plugin-interceptors")),", which allows the public API to apply some plugins and implement request filtering, but currently only ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/ip-restriction"},(0,r.kt)("inlineCode",{parentName:"a"},"ip-restriction"))," plugins are supported."),(0,r.kt)("p",null,"It can be seen from the above that Apache APISIX's ability to request public API for filtering is relatively weak, so it is impossible to use the other plugins in Apache APISIX to achieve complex authentication and authorization."),(0,r.kt)("p",null,"Therefore, Apache APISIX has designed a ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin that replaces the limited functionality and complex use of ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin-interceptors"),". With this plugin, you can solve the pain points in using the public API. You can set a custom URI for the public API and configure any type of plugin. The following figure shows the changes before and after using ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646118914254-d6743193-96c5-492f-aa3f-c1d7a5d6eeb7.png",alt:"error/flowchart.png"})),(0,r.kt)("h2",{id:"initial-knowledge-about-public-api"},"Initial Knowledge about ",(0,r.kt)("inlineCode",{parentName:"h2"},"public-api")),(0,r.kt)("p",null,"This section takes the ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwt/sign")," interface of the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," plugin as an example to introduce two usage methods and a scenario example of the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin."),(0,r.kt)("p",null,"Before using the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin, if the public API is registered using ",(0,r.kt)("inlineCode",{parentName:"p"},"_M.api()")," in plugin development, APISIX will expose it by default and you can call it directly on the HTTP port. Now you need to manually create a route and configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin before you can forward the API to the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin."),(0,r.kt)("h3",{id:"confirm-whether-the-api-is-open"},"Confirm Whether the API is Open"),(0,r.kt)("p",null,"You can request the API path by following the command below and return the result to see that ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwt/sign")," is not exposed by default and is not available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'curl -XGET \'http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key\'\n\n{"error_msg":"404 Route Not Found"}\n')),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You need to create a Consumer and enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," plugin to perform the following steps."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," parameter configuration information in the example, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/jwt-auth"},"Apache APISIX official documentation"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'    curl -XPUT \'http://127.0.0.1:9080/apisix/admin/consumers\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n        "username": "APISIX",\n        "plugins": {\n            "jwt-auth": {\n                "key": "user-key",\n                "algorithm": "HS256"\n            }\n        }\n    }\'\n')),(0,r.kt)("h3",{id:"method-1-basic-use"},"Method 1: Basic Use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create and configure a Route.")),(0,r.kt)("p",null,"Create a Route based on the Consumer in the ",(0,r.kt)("strong",{parentName:"p"},"Prerequisites"),", set the ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," to the API address where the JWT is issued in the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," plugin, and open the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin in the Route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"    curl -XPUT 'http://127.0.0.1:9080/apisix/admin/routes/r1' \\\n    -H 'X-API-KEY: <api-key>' \\\n    -H 'Content-Type: application/json' \\\n    -d'{\n        \"uri\": \"/apisix/plugin/jwt/sign\",\n        \"plugins\": {\n            \"public-api\": {}\n        }\n    }'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Test the Example.")),(0,r.kt)("p",null,"You can test with the following command, and if you see that the result is a ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," string, this public API is ready to use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"    curl -XGET 'http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key'\n\n    <header>.<payload>.<signature>\n")),(0,r.kt)("h3",{id:"method-2-customize-the-path"},"Method 2: Customize the Path"),(0,r.kt)("p",null,"Before using the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin, it is difficult for users to modify a ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," that is open to the public API. Users of the ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," plugin can customize the ",(0,r.kt)("inlineCode",{parentName:"p"},"exporter uri")," by modifying the configuration file, but for other Apache APISIX plugins, this can only be done by modifying the plugin file, which is difficult and risky in a production environment."),(0,r.kt)("p",null,"Now you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," that the public API is open to the outside world, with the following examples."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create and configure a Route.")),(0,r.kt)("p",null,"Use the following command to modify the Route created in ",(0,r.kt)("strong",{parentName:"p"},"Method 1"),", set ",(0,r.kt)("inlineCode",{parentName:"p"},"uri=/gen_token"),", and configure the original ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'    curl -XPUT \'http://127.0.0.1:9080/apisix/admin/routes/r1\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n        "uri": "/gen_token",\n        "plugins": {\n            "public-api": {\n                "uri": "/apisix/plugin/jwt/sign"\n            }\n        }\n    }\'\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Test the Example.")),(0,r.kt)("p",null,"The public API is normally accessible with the new ",(0,r.kt)("inlineCode",{parentName:"p"},"uri"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"    curl -XGET 'http://127.0.0.1:9080/gen_token?key=user-key'\n\n    <header>.<payload>.<signature>\n")),(0,r.kt)("p",null,"The public API can't be accessed using the old ",(0,r.kt)("inlineCode",{parentName:"p"},"uri"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'    curl -XGET \'http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key\'\n\n    {"error_msg":"404 Route Not Found"}\n')),(0,r.kt)("h3",{id:"scenario-example-protecting-router"},"Scenario Example: Protecting Router"),(0,r.kt)("p",null,"This section describes how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin to address the business pain of ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin-interceptors")," plugin."),(0,r.kt)("p",null,"The following steps take the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin as an example to show you how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin to protect the public API."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," parameter configuration information in the example, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/jwt-auth"},"Apache APISIX official documentation"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create and configure a Consumer.")),(0,r.kt)("p",null,"Create Consumer and configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'    curl -XPUT \'http://127.0.0.1:9080/apisix/admin/consumers\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n        "username": "APISIX",\n        "plugins": {\n            "key-auth": {\n                "key": "test-apikey"\n            }\n        }\n    }\'\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create and configure a Route.")),(0,r.kt)("p",null,"Modify the route created in ",(0,r.kt)("strong",{parentName:"p"},"Method 2")," and open the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin and ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'    curl -XPUT \'http://127.0.0.1:9080/apisix/admin/routes/r1\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n        "uri": "/gen_token",\n        "plugins": {\n            "public-api": {\n                "uri": "/apisix/plugin/jwt/sign"\n            },\n            "key-auth": {}\n        }\n    }\'\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Test the Example.")),(0,r.kt)("p",null,"After testing, when the request carries the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey"),", the public API can respond normally. When the request does not carry the ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"401")," unauthenticated status code will be returned. If the returned results of your test are consistent with the sample status, it proves that the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin you just configured has taken effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"    # with corrent apikey\n    curl -XGET 'http://127.0.0.1:9080/gen_token?key=user-key'\n        -H \"apikey: test-apikey\"\n\n    <header>.<payload>.<signature>\n\n    # without apikey\n    curl -i -XGET 'http://127.0.0.1:9080/gen_token?key=user-key'\n\n    HTTP/1.1 401 UNAUTHORIZED\n")),(0,r.kt)("h2",{id:"principle-explanation"},"Principle Explanation"),(0,r.kt)("p",null,"From the above example, you can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin can solve the defects of users when using the public API. This section introduces the implementation principle in detail."),(0,r.kt)("p",null,"The principle of ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," can be described in one sentence: the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin transfers the previous separate public API route matching to the plugin, and only performs public API matching for the routes that open the plugin. The following will explain the principle in detail from two aspects."),(0,r.kt)("h3",{id:"before-using-public-api-plugin"},"Before Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"public-api")," Plugin"),(0,r.kt)("p",null,"First, you need to understand how Apache APISIX realizes the function of public API before integrating ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When apisix starts, it will load the custom plugin and build a radiotree router using the route configuration obtained from etcd. It will be responsible for matching the route according to the request information and calling the correct ",(0,r.kt)("inlineCode",{parentName:"li"},"handler")," to forward the request."),(0,r.kt)("li",{parentName:"ul"},"APISIX will create different routers for the public API of the custom plugin and the Route created by users respectively (hereinafter referred to as public API router and Route router)."),(0,r.kt)("li",{parentName:"ul"},"When a request arrives, it will be matched first by the public API router and then by the Route router. They are two completely separate parts in the request processing flow.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646120195055-fff81b45-55bb-4100-8822-b14b173448d5.png",alt:"error/flowchart.png"})),(0,r.kt)("p",null,"According to this process, if you want to apply the plugin for Route router to the public API router, you need to manually maintain a list of plugins and manually execute the plugin function after the public API router is matched. It can be seen that such an architecture is complex and difficult to maintain, and brings many problems, such as complex use (configuration based on ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin_metadata"),"), coarse grained configuration (it is difficult to implement different policies for multiple public APIs provided in a plugin), etc."),(0,r.kt)("h3",{id:"after-adding-the-public-api-plugin"},"After adding the ",(0,r.kt)("inlineCode",{parentName:"h3"},"public-api")," Plugin"),(0,r.kt)("p",null,"After Apache APISIX introduce the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin, the above process will be simplified and the public API router matching previously executed before Route router matching will be transferred to the plugin."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the request arrives, APISIX directly executes the Route router matching. When the corresponding route is found, the forwarding request is processed to the plugin."),(0,r.kt)("li",{parentName:"ul"},"-When a route opens the ",(0,r.kt)("inlineCode",{parentName:"li"},"public-api")," plugin, it will call the specified public API for request processing according to the plugin configuration, and the request forwarding will no longer be performed. The route without the ",(0,r.kt)("inlineCode",{parentName:"li"},"public-api")," plugin will not be processed.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646136319962-68f66607-804c-4cbc-8742-0745a3ad0f5a.png",alt:"error/flowchart.png"})),(0,r.kt)("p",null,"The public API provided by the user defined plugin will no longer be exposed by default. Instead, the user configures route to decide how to provide it. You can freely set routing parameters, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"uri"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"method"),", etc. after that, you only need to open the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin for routing."),(0,r.kt)("p",null,"Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin has a low priority, it will be executed after most plugins are executed, so that users can configure any authentication and security plugins for route."),(0,r.kt)("p",null,"Apache APISIX no longer performs the two stage Route route matching and performs different logic, all of which belong to Route routing matching, and the process of request processing is greatly simplified."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"You should note that after ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," is included in the official version release, Apache APISIX will no longer match the route of the public API in the HTTP request processing process of APISIX, that is, the public API registered in the plugin is not exposed by default. You can use the functions of the public API more flexibly through the use method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This plug-in will be supported in ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX 2.13.0"),". If you have completed the development of custom plug-in before ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX 2.13.0"),", upgrading the version will affect your services. Please confirm again before upgrading.")),(0,r.kt)("p",null,"To get more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin description and full configuration list, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/plugins/public-api"},"Apache APISIX official documentation"),"."),(0,r.kt)("p",null,"Apache APISIX is also currently working on additional plugins to support the integration of additional services, so if you are interested, feel free to start a discussion in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussion"),", or via the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/join"},"mailing list")," to communicate."))}d.isMDXComponent=!0}}]);