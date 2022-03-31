"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68237],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(25773),o=n(30808),r=(n(27378),n(35318)),i=["components"],s={title:"Why Apache APISIX chose Nginx and Lua to build API Gateway",slug:"2021/08/25/why-apache-apisix-chose-nginx-and-lua",author:"Zexuan Luo",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["APISIX","Apache APISIX","Lua","Nginx","API Gateway"],description:"Yes, Lua is not a well-known language, and it is probably a long way from the most popular programming language. So why do Apache APISIX and other well-known gateways choose Lua?",tags:["Technology"]},l=void 0,u={permalink:"/blog/2021/08/25/why-apache-apisix-chose-nginx-and-lua",source:"@site/blog/2021/08/25/Why-Apache-APISIX-chose-Nginx-and-Lua.md",title:"Why Apache APISIX chose Nginx and Lua to build API Gateway",description:"Yes, Lua is not a well-known language, and it is probably a long way from the most popular programming language. So why do Apache APISIX and other well-known gateways choose Lua?",date:"2021-08-25T00:00:00.000Z",formattedDate:"August 25, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:7.855,truncated:!0,authors:[{name:"Zexuan Luo",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Centralized authentication using the OpenID Connect plug-in for Apache APISIX",permalink:"/blog/2021/08/25/using-the-apache-apisix-openid-connect-plugin-for-centralized-authentication"},nextItem:{title:"Apache APISIX Meetup in Shanghai",permalink:"/blog/2021/08/24/shanghai-meetup-recap"}},c={authorsImageUrls:[void 0]},p=[{value:"LuaJIT VS Go",id:"luajit-vs-go",children:[]},{value:"Nginx with Lua: High Performance + Flexibility",id:"nginx-with-lua-high-performance--flexibility",children:[]}],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Yes, Lua is not a well-known language, and it is probably a long way from the most popular programming language. So why do Apache APISIX and other well-known gateways choose Lua?")),(0,r.kt)("p",null,"When I was at this year\u2019s COSCUP conference, some visitors asked me why did Apache APISIX, Kong, and 3scale API Gateways all choose Lua to build the program?"),(0,r.kt)("p",null,"Yes, Lua is not a well-known language, and it is probably a long way from the most popular programming language."),(0,r.kt)("p",null,"So why do Apache APISIX and other well-known gateways choose Lua?"),(0,r.kt)("p",null,"The technology stack used by Apache APISIX is not only Lua. To be precise, it should be Nginx with Lua. Apache APISIX is based on Nginx and uses Lua to build plugins or other features."),(0,r.kt)("h2",{id:"luajit-vs-go"},"LuaJIT VS Go"),(0,r.kt)("p",null,"Serious readers may point out that Apache APISIX is not based on the Nginx + Lua stack, but Nginx + LuaJIT (also known as OpenResty). LuaJIT is a Just-In-Time Compiler (JIT) for the Lua programming language, its performance is much better than Lua. LuaJIT adds FFI functions to make it easy and efficient to call C code."),(0,r.kt)("p",null,"Since the current popular API gateways are either based on OpenResty or Go, developers are having hot debates about the performances of Lua and Go."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"From my point of view, it is meaningless to compare the performance of languages without scenes.")),(0,r.kt)("p",null,"First of all, to be clear, Apache APISIX is based on Nginx and Lua, and only the outer layer codes use Lua. So if you want to know which gateway performs better, the correct comparison object is to compare C with LuaJIT and Go. The bulk of the performance of the gateway lies in proxy HTTP requests and responses, and Nginx mainly does this piece of work."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The best way to test gateways\u2019 performances is to compare the HTTP implementation of the Nginx and Go standard libraries.")),(0,r.kt)("p",null,"As we all know, Nginx is a high-performance server, which is very strict with memory usage. Here are two examples:"),(0,r.kt)("p",null,"The request header in Nginx is usually just a pointer to the original HTTP request data, and a copy is created only when it is modified."),(0,r.kt)("p",null,"When Nginx proxy upstream server\u2019s response, It is very complicated to reuse Buffer."),(0,r.kt)("p",null,"With those strict rules, Nginx is one of the most popular and high-performance servers."),(0,r.kt)("p",null,"In contrast, the HTTP implementation in Go standard library is typical of memory abuse. Fasthttp, a project that re-implements HTTP packages in the Go standard library, gives us two examples:"),(0,r.kt)("p",null,"We cannot reuse the standard library\u2019s HTTP Request structure;\nHeaders are always parsed in advance and stored as a ",(0,r.kt)("inlineCode",{parentName:"p"},"map [string][]string"),", even if they are not used (see: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/valyala/fasthttp#faq"},"Fasthttp FAQ"),")."),(0,r.kt)("p",null,"The Fasthttp document also mentions some optimization skills for bytes matter, I would suggest that you take a look."),(0,r.kt)("p",null,"Actually, codes written in LuaJIT are not necessarily much worse than those written in Go. Here are two reasons:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"First, most of Lua\u2019s library cores are written in C.")),(0,r.kt)("p",null,"For example, lua-cjson and lua-resty-core are implemented with C, but the Go libraries, of course, are mainly implemented with Go. Although there is such a thing called CGO, it is limited by Go's coroutine scheduling and toolchain, and it can only be in a subordinate position in the Go ecosystem."),(0,r.kt)("p",null,"For the comparison of LuaJIT and Go\u2019s affinity with C, here has one post from Hacker News: ",(0,r.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=17161168"},"Comparing the C FFI overhead in various programming languages"),"."),(0,r.kt)("p",null,"So when we compare some of Lua\u2019s features, we are actually comparing C and Go.\nSecond, LuaJIT\u2019s JIT optimization is unparalleled."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Secondly, LuaJIT has one of the best JIT Opitimizations.")),(0,r.kt)("p",null,"We could divide dynamic languages into two cases, with or without JIT. JIT optimization can compile dynamic language code into machine code at runtime, thus improving the performance of the original code by order of magnitude."),(0,r.kt)("p",null,"Languages with JIT can also be divided into two cases, those that fully support JIT (e.g LuaJIT) and those that only support part of JIT."),(0,r.kt)("p",null,"The debate about who is faster, LuaJIT or V8, has been a hot topic for a long time. In short, the performance of LuaJIT is not much different from that of the pre-compiled Go program."),(0,r.kt)("p",null,"As for which one is slower and slower by how much, that is a matter of opinion. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Lua"},'local text = {"The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog", "at", "a", "restaurant", "near", "the", "lake", "of", "a", "new", "era"}\nlocal map = {}\nlocal times = 1e8\nlocal n = #text\nfor i = 1, n do\n    map[text[i]] = 0\n    for _ = 1, times do\n        map[text[i]] = map[text[i]] + 1\n    end\nend\n\nfor i = 1, n do\n    io.write(text[i], " ", map[text[i]], "\\n")\nend\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Go"},'package main\nimport "fmt"\nfunc main() {\n    text := []string{"The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog", "at", "a", "restaurant", "near", "the", "lake", "of", "a", "new", "era"}\n    m := map[string]int{}\n    times := int(1e8)\n    for _, t := range text {\n        m[t] = 0\n        for i := 0; i < times; i++ {\n            m[t]++\n        }\n    }\n    for _, t := range text {\n        fmt.Println(t, " ", m[t])\n    }\n}\n')),(0,r.kt)("p",null,"The above two code snippets are equivalent. Can you guess whether the first Lua version is faster or the second Go version is shorter?"),(0,r.kt)("p",null,"The first took less than 1 second on my machine, and the second took more than 23 seconds."),(0,r.kt)("p",null,"This example is not to prove that LuaJIT is 20 times faster than Go. I want to show that using a microbenchmark to prove that one language is shorter than another does not make much sense because many factors affect performance. A simple microbenchmark is likely to overemphasize one factor and lead to unexpected results."),(0,r.kt)("h2",{id:"nginx-with-lua-high-performance--flexibility"},"Nginx with Lua: High Performance + Flexibility"),(0,r.kt)("p",null,"Let\u2019s go back to Apache APISIX\u2019s Nginx and Lua stack. The Nginx + Lua stack brings us more than just high performance."),(0,r.kt)("p",null,"People often ask us, since Apache APISIX is based on the open-sourced Nginx, and Nginx does not support dynamic configuration, why Apache APISIX claims that it supports dynamic configuration? Has it changed anything?"),(0,r.kt)("p",null,"Yes, we do maintain our own Nginx distribution, but most features of Apache APISIX are available on the official Nginx. The reason why we can do dynamic configuration is to put the configuration into Lua code."),(0,r.kt)("p",null,"Take the Route system as an example. Nginx\u2019s routes need to be configured in the configuration file, and every time the route is changed, it needs to be reloaded before it can take effect. Nginx\u2019s route distribution only supports static configuration and cannot dynamically increase or decrease routes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To support dynamic routing configuration, Apache APISIX does two things:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure a single server in the Nginx configuration file. There is only one location on this server. We use this location as the main entrance so that all requests will come to this place.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We use Lua to complete the route distribution work. Apache APISIX\u2019s route distribution module supports increasing or decreasing routes at run time to configure routes dynamically."))),(0,r.kt)("p",null,"You may want to ask, is routing distribution in Lua slower than Nginx implementation?"),(0,r.kt)("p",null,"As mentioned earlier, we rewrite the core code in C for those with high-performance requirements. We did the same thing our route distribution module does. The module uses a radix-tree to match a route. We use C to implement the radix-tree. Please feel free to take a look at the code in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-radixtree/"},"lua-resty-radixtree"),"."),(0,r.kt)("p",null,"After completing the radix-tree matching, it is time for Lua to show its flexibility. We support matching at the next level in many other ways for each the same prefix route, including checking through a specific expression. Although it is tough to access an expression engine using C, a pure C implementation cannot flexibly customize the variables inside the expression."),(0,r.kt)("p",null,"For example, here is the route configuration that Apache APISIX uses to match GraphQL requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "methods": ["POST"],\n        "upstream": {\n            "nodes": {\n                "127.0.0.1:1980": 1\n            },\n            "type": "roundrobin"\n        },\n        "uri": "/hello",\n        "vars": [["graphql_name", "==", "repo"]]\n}\n')),(0,r.kt)("p",null,"It matches a GraphQL request like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"query repo {\n    owner {\n        name\n    }\n}\n")),(0,r.kt)("p",null,"The graphql_name here is not an Nginx built-in variable, but is defined through Lua code. Apache APISIX defines three GraphQL-related variables, and there are only 62 lines of Lua codes (including parsing the GraphQL body). If you want to define variables through the Nginx C module, 62 lines may just be building up the boilerplate code of related methods, and there is no real logic to parse GraphQL yet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using Lua for routing has another advantage: it reduces the threshold of development.")),(0,r.kt)("p",null,"Suppose we need particular logic in the routing process, users can implement custom variables and operators, such as determining which route to use by matching the geographic location of the IP library. Users only need to write some Lua code, which is much less complicated than modifying the Nginx C module."),(0,r.kt)("p",null,"In Apache APISIX, the routing system is dynamic. Our TLS server-side certificates and upstream node configurations are dynamic. There is no need to modify Nginx \u2014 the above functions can run on the official Nginx and Lua stack. Of course, by modifying Nginx, we have also implemented more advanced features, such as dynamic gzip configuration and dynamic client request size limit. We will implement our own Nginx distribution later so that open source users can easily use these advanced functions."))}m.isMDXComponent=!0}}]);