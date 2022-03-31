"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94916],{35318:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var l=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=l.createContext({}),u=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return l.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?l.createElement(m,i(i({ref:e},p),{},{components:n})):l.createElement(m,i({ref:e},p))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:a,i[1]=r;for(var u=2;u<o;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95162:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var l=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],r={title:"Apache APISIX embraces the WASM ecosystem",author:"Zexuan Luo",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Apache APISIX","WASM","WebAssembly","Ecosystem","Plugin"],description:"Support for WASM will be added in the upcoming Apache APISIX version (2.11.0)! By reading this article you will learn how Apache APISIX deploys the support and development of this feature from 0 to 1.",tags:["Technology","Ecosystem"]},s=void 0,u={permalink:"/blog/2021/11/19/apisix-supports-wasm",source:"@site/blog/2021/11/19/apisix-supports-wasm.md",title:"Apache APISIX embraces the WASM ecosystem",description:"Support for WASM will be added in the upcoming Apache APISIX version (2.11.0)! By reading this article you will learn how Apache APISIX deploys the support and development of this feature from 0 to 1.",date:"2021-11-19T00:00:00.000Z",formattedDate:"November 19, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:7.85,truncated:!0,authors:[{name:"Zexuan Luo",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Developing APISIX Ingress Controller with Nocalhost in Kubernetes",permalink:"/blog/2021/11/22/develop-apisix-ingress-with-nocalhost-in-kubernetes"},nextItem:{title:"How to integrate with Dapr to build Apache APISIX Gateway Controller",permalink:"/blog/2021/11/17/dapr-with-apisix"}},p={authorsImageUrls:[void 0]},c=[{value:"Why Proxy WASM",id:"why-proxy-wasm",children:[]},{value:"How to use WASM in Apache APISIX",id:"how-to-use-wasm-in-apache-apisix",children:[{value:"Step 1: Write code based on proxy-wasm-go-sdk",id:"step-1-write-code-based-on-proxy-wasm-go-sdk",children:[]},{value:"Step 2: Build the corresponding WASM file",id:"step-2-build-the-corresponding-wasm-file",children:[]},{value:"Step 3: Refer to this file in <code>config.yaml</code> in Apache APISIX",id:"step-3-refer-to-this-file-in-configyaml-in-apache-apisix",children:[]}]},{value:"Cross-sectional evaluation",id:"cross-sectional-evaluation",children:[{value:"Step 1: Configure Routing",id:"step-1-configure-routing",children:[]},{value:"Step 2: The actual pressure test",id:"step-2-the-actual-pressure-test",children:[]}]},{value:"Advantages and disadvantages",id:"advantages-and-disadvantages",children:[]},{value:"Come and join the project",id:"come-and-join-the-project",children:[]}],d={toc:c};function h(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Support for WASM will be added in the upcoming Apache APISIX version (2.11.0)! By reading this article you will learn how Apache APISIX deploys the support and development of this feature from 0 to 1.")),(0,o.kt)("p",null,"In the upcoming release of Apache APISIX 2.11.0, we will add support for WASM! You can develop plugins in WASM, Lua, Java, Go, Python, JavaScript with Apache APISIX 2.11.0."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637289637179-ab74d38f-acd4-4401-908f-e1d310a33583.png",alt:"Support WASM"})),(0,o.kt)("p",null,"WASM, known as ",(0,o.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly"),", differs from the specific programming language runtimes mentioned above, is a set of bytecode standards specifically designed to be used nested in a host environment.\nIf a programming language provides the ability to compile to WASM bytecode, applications written in that language can be compiled to WASM bytecode and run in some WASM-enabled host environment."),(0,o.kt)("p",null,"Doesn't it sound like you can run any application like an operating system as long as the host environment supports WASM?"),(0,o.kt)("p",null,"But there is a limitation here. Just like an operating system needs to implement a specific standard syscall, in order to run a specific application, you need to implement the API required for that application."),(0,o.kt)("p",null,"Take JavaScript for example, although it is also JavaScript code, JS modules written for browsers can't be used directly in npm packages, because the APIs are different."),(0,o.kt)("p",null,"So just putting WASM into Apache APISIX doesn't work. To allow developers to run WASM on Apache APISIX, we also need to provide a special API."),(0,o.kt)("h2",{id:"why-proxy-wasm"},"Why Proxy WASM"),(0,o.kt)("p",null,"We weighed two options on how to provide this API."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Implement the corresponding WASM version of the API by referring to the lua-nginx-module interface"),(0,o.kt)("li",{parentName:"ol"},"Implement Proxy WASM as a set of standards")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/proxy-wasm/spec"},"Proxy WASM")," is Envoy's WASM API standard. So the above question is really equivalent to, do we make our own API standard or do we reuse Envoy's existing standard?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The WASM API standard can be broken down into two aspects:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"1. Host, which is responsible for providing the implementation of the API\n2. SDK, which is responsible for implementing a set of glue layers in a different programming language in order to call the provided APIs in that language\n"))),(0,o.kt)("p",null,"If we follow Envoy's standards, the advantage is that we can reuse Envoy's existing WASM SDK (Proxy WASM SDK), while the disadvantage is that this set of standards is developed by Envoy in conjunction with its own situation, and if we follow the implementation, tailoring it to meet our own demands is difficult."),(0,o.kt)("p",null,'After some community discussion, we finally decided to adopt the Proxy WASM standard. "Doing the hard and right thing" is naturally the hard thing to do, but we believe it is the right thing to do, and through community collaboration and building together, we can build a more prosperous ecosystem.'),(0,o.kt)("h2",{id:"how-to-use-wasm-in-apache-apisix"},"How to use WASM in Apache APISIX"),(0,o.kt)("p",null,"Apache APISIX now has initial support for WASM, which can be used to write parts of the fault-injection plugin. You can try it in Apache APISIX 2.11.0 at the end of this month, so stay tuned!"),(0,o.kt)("p",null,"In the following, we will talk about how to use WASM to inject custom responses in conjunction with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tetratelabs/proxy-wasm-go-sdk/"},"proxy-wasm-go-sdk"),"."),(0,o.kt)("h3",{id:"step-1-write-code-based-on-proxy-wasm-go-sdk"},"Step 1: Write code based on proxy-wasm-go-sdk"),(0,o.kt)("p",null,"The implementation code (including go.mod and others) can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/tree/master/t/wasm"},"here"),"."),(0,o.kt)("p",null,"It should be explained that although the proxy-wasm-go-sdk project carries the Go name, it actually uses tinygo instead of native Go, which has some problems supporting WASI (which you can think of as a non-browser WASM runtime interface), see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tetratelabs/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md#tinygo-vs-the-official-go-compiler"},"here")," for more details."),(0,o.kt)("h3",{id:"step-2-build-the-corresponding-wasm-file"},"Step 2: Build the corresponding WASM file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tinygo build -o ./fault-injection/main.go.wasm -scheduler=none -target=wasi ./fault-injection/main.go\n")),(0,o.kt)("h3",{id:"step-3-refer-to-this-file-in-configyaml-in-apache-apisix"},"Step 3: Refer to this file in ",(0,o.kt)("inlineCode",{parentName:"h3"},"config.yaml")," in Apache APISIX"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n        ...\nwasm:\n    plugins:\n        - name: wasm_fault_injection\n          priority: 7997\n          file: t/wasm/fault-injection/main.go.wasm\n")),(0,o.kt)("p",null,"By doing so, you can use this WASM plugin as if it were a Lua plugin. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nuri: "/wasm"\nplugins:\n  wasm_fault_injection:\n    conf: \'{"body":"hello world", "http_status":200}\'\nupstream:\n  type: roundrobin\n  nodes:\n    127.0.0.1:1980: 1\n')),(0,o.kt)("p",null,"Note that the configuration of the WASM plugin is a string under the conf field, which is parsed by the corresponding plugin itself."),(0,o.kt)("h2",{id:"cross-sectional-evaluation"},"Cross-sectional evaluation"),(0,o.kt)("p",null,"Apache APISIX has evolved to the point where there are three ways to write plugins:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Native Lua way, running inside of APISIX."),(0,o.kt)("li",{parentName:"ol"},"External plugin runner for multiple languages, where the plugin logic runs outside of APISIX."),(0,o.kt)("li",{parentName:"ol"},"Compile multiple languages into WASM, still running inside of APISIX.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637289637159-f2fd1f09-4be6-4cd4-88a0-9c3a23c4f405.png",alt:"APISIX ecosystem"}),"\nThese three approaches are very different in various aspects such as ecology and maturity. It just so happens that we can use them all for fault-injection, so we can compare them."),(0,o.kt)("h3",{id:"step-1-configure-routing"},"Step 1: Configure Routing"),(0,o.kt)("p",null,"The Lua way of fault-injection, naturally, uses the built-in fault-injection plugin.The Runner way fault-injection implementation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-go-plugin-runner/blob/master/cmd/go-runner/plugins/fault_injection.go"},"here"),"."),(0,o.kt)("p",null,"Let's configure different routes for each of them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nuri: "/wasm"\nplugins:\n  wasm_fault_injection:\n    conf: \'{"body":"hello world", "http_status":200}\'\nupstream:\n  type: roundrobin\n  nodes:\n    127.0.0.1:1980: 1\n---\nplugins:\n  ext-plugin-pre-req:\n    conf:\n    - name: fault-injection\n      value: \'{"body":"hello world", "http_status":200}\'\nupstream:\n  nodes:\n    127.0.0.1:1980: 1\n  type: roundrobin\nuri: /ext-plugin\n---\nplugins:\n  fault-injection:\n    abort:\n      body: hello world\n      http_status: 200\nupstream:\n  nodes:\n    127.0.0.1:1980: 1\n  type: roundrobin\nuri: /fault-injection\n')),(0,o.kt)("h3",{id:"step-2-the-actual-pressure-test"},"Step 2: The actual pressure test"),(0,o.kt)("p",null,"Next, try to use wrk pressure. The specific data comparison is shown in the following chart:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"3"},"\uffe5 wrk -d 30 -t 5 -c 50 http://127.0.0.1:9080/wasm | Running 30s test @ http://127.0.0.1:9080/wasm | 5 threads and 50 connections")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Thread Stats")),(0,o.kt)("td",null,(0,o.kt)("b",null,"Latency")),(0,o.kt)("td",null,(0,o.kt)("b",null,"Req/Sec"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Avg")),(0,o.kt)("td",null,"66.17ms"),(0,o.kt)("td",null,"7.01k")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Sdev")),(0,o.kt)("td",null,"226.42ms"),(0,o.kt)("td",null,"3.09k")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Max")),(0,o.kt)("td",null,"1.99s"),(0,o.kt)("td",null,"33.97k")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"+/- Stdev")),(0,o.kt)("td",null,"91.89%"),(0,o.kt)("td",null,"82.28%")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Request details")),(0,o.kt)("td",{colspan:"2"},"650497 requests in 36.33s, 119.70MB read")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Socket errors")),(0,o.kt)("td",{colspan:"2"},"connect 0, read 0, write 0, timeout 63")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Request/sec")),(0,o.kt)("td",{colspan:"2"},"17903.17")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Transfer/sec")),(0,o.kt)("td",{colspan:"2"},"3.29MB"))),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"3"},"\uffe5 wrk -d 30 -t 5 -c 50 http://127.0.0.1:9080/ext-plugin | Running 30s test @ http://127.0.0.1:9080/ext-plugin | 5 threads and 50 connections")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Thread Stats")),(0,o.kt)("td",null,(0,o.kt)("b",null,"Latency")),(0,o.kt)("td",null,(0,o.kt)("b",null,"Req/Sec"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Avg")),(0,o.kt)("td",null,"95.69ms"),(0,o.kt)("td",null,"3.23k")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Sdev")),(0,o.kt)("td",null,"229.09ms"),(0,o.kt)("td",null,"1.47k")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Max")),(0,o.kt)("td",null,"1.70s"),(0,o.kt)("td",null,"15.18k")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"+/- Stdev")),(0,o.kt)("td",null,"87.37%"),(0,o.kt)("td",null,"83.89%")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Request details")),(0,o.kt)("td",{colspan:"2"},"362151 requests in 30.50s, 66.64MB read")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Socket errors")),(0,o.kt)("td",{colspan:"2"},"connect 0, read 0, write 0, timeout 17")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Request/sec")),(0,o.kt)("td",{colspan:"2"},"11873.12")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Transfer/sec")),(0,o.kt)("td",{colspan:"2"},"2.18MB"))),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"3"},"\uffe5 wrk -d 30 -t 5 -c 50 http://127.0.0.1:9080/fault-injection | Running 30s test @ http://127.0.0.1:9080/fault-injection | 5 threads and 50 connections")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Thread Stats")),(0,o.kt)("td",null,(0,o.kt)("b",null,"Latency")),(0,o.kt)("td",null,(0,o.kt)("b",null,"Req/Sec"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Avg")),(0,o.kt)("td",null,"86.91ms"),(0,o.kt)("td",null,"7.90k")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Sdev")),(0,o.kt)("td",null,"263.14ms"),(0,o.kt)("td",null,"2.04k")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Max")),(0,o.kt)("td",null,"1.91s"),(0,o.kt)("td",null,"15.60k")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"+/- Stdev")),(0,o.kt)("td",null,"90.73%"),(0,o.kt)("td",null,"81.97%")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Request details")),(0,o.kt)("td",{colspan:"2"},"974326 requests in 30.07s, 179.29MB read")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Socket errors")),(0,o.kt)("td",{colspan:"2"},"connect 0, read 0, write 0, timeout 8")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Request/sec")),(0,o.kt)("td",{colspan:"2"},"32405.28")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Transfer/sec")),(0,o.kt)("td",{colspan:"2"},"5.96MB"))),(0,o.kt)("p",null,"As you can see from the results, the performance of the WASM version is somewhere between that of the external plugin and the native Lua."),(0,o.kt)("p",null,"The reason why the WASM version performs so much better than the external plugin is that the fault-injection functionality is simple, so the performance loss caused by the external plugin RPC is too obvious. Considering that we haven't made any optimizations to the WASM implementation, we are satisfied with this situation."),(0,o.kt)("p",null,"Another benefit of WASM is that we have multilingual support at once (thanks to the Proxy WASM SDK). Details can be found in the following documentation\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/spacewander/0357198ea21e022003c407fd23155f79"},"Fault-injection(Rust)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/spacewander/64773a706f1dc758aecc7f28aff7555d"},"Fault-injection(AssemblyScript)"))),(0,o.kt)("h2",{id:"advantages-and-disadvantages"},"Advantages and disadvantages"),(0,o.kt)("p",null,"With all these benefits of WASM, aren't you a bit excited? But it is not a perfect solution at the moment, WASM/Proxy WASM still has some immature areas. For example\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Programming language support to be improved"),": native Go's WASM support is mainly based on the browser environment, so we had to use tinygo to implement it. However, tinygo is a young project and still has a lot of limitations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proxy WASM ecosystem needs to be mature"),": AssemblyScript version of the fault injection implementation, and there is no JSON decode part. This is because the AssemblyScript SDK is based on AssemblyScript version 0.14.x, and several open-source AssemblyScript JSON libraries are implemented for higher versions of AssemblyScript, and can not be used on the older AssemblyScript 0.14."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WASM doesn't have a built-in concurrent process"),": WASM does not have a built-in concurrent process, so it cannot be scheduled by the host's scheduling system.")),(0,o.kt)("p",null,"While there are several shortcomings listed above, we believe the future of this technology stack is bright:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open source projects, including Apache APISIX and Envoy, have a strong interest in WASM, and there are many startups and large enterprises adding to the WASM ecosystem, which means that difficulties such as the stagnant AssemblyScript SDK will only be temporary. In the long run, the Proxy WASM ecosystem will flourish."),(0,o.kt)("li",{parentName:"ol"},"WASM has a bright future as the darling of serverless and edge computing. The implementation and optimization of many practical scenarios will solve the technical deficiencies more quickly.")),(0,o.kt)("h2",{id:"come-and-join-the-project"},"Come and join the project"),(0,o.kt)("p",null,"Apache APISIX is a project that keeps up with the technology trend, Apache APISIX support for WASM is a long-term process."),(0,o.kt)("p",null,'"A journey of a thousand miles begins with a single step",Apache APISIX has launched the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/wasm-nginx-module"},"wasm-nginx-module")," open source project to support WASM."),(0,o.kt)("p",null,"Interested readers can follow the progress of the project, we look forward to your joining us and creating the world's top projects together."))}h.isMDXComponent=!0}}]);