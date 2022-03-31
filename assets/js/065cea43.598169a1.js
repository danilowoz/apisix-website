"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73471],{35318:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(h,o(o({ref:n},l),{},{components:t})):a.createElement(h,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90023:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var a=t(25773),r=t(30808),i=(t(27378),t(35318)),o=["components"],s={title:"Upstream"},c=void 0,p={unversionedId:"architecture-design/upstream",id:"version-2.8/architecture-design/upstream",isDocsHomePage:!1,title:"Upstream",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.8/architecture-design/upstream.md",sourceDirName:"architecture-design",slug:"/architecture-design/upstream",permalink:"/docs/apisix/2.8/architecture-design/upstream",editUrl:null,tags:[],version:"2.8",frontMatter:{title:"Upstream"},sidebar:"version-2.8/docs",previous:{title:"Consumer",permalink:"/docs/apisix/2.8/architecture-design/consumer"},next:{title:"Global rule",permalink:"/docs/apisix/2.8/architecture-design/global-rule"}},l=[{value:"Configuration",id:"configuration",children:[]}],u={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Upstream is a virtual host abstraction that performs load balancing on a given set of service nodes according to configuration rules. Upstream address information can be directly configured to ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),'). When Upstream has duplicates, you need to use "reference" to avoid duplication.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.8/docs/assets/images/upstream-example.png",alt:"upstream-example"})),(0,i.kt)("p",null,"As shown in the image above, by creating an Upstream object and referencing it by ID in ",(0,i.kt)("inlineCode",{parentName:"p"},"Route"),", you can ensure that only the value of an object is maintained."),(0,i.kt)("p",null,"Upstream configuration can be directly bound to the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," or it can be bound to ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),", but the configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," has a higher priority. The priority behavior here is very similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"Plugin"),"."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"In addition to the basic complex equalization algorithm selection, APISIX's Upstream also supports logic for upstream passive health check and retry, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.8/admin-api#upstream"},"this link"),"."),(0,i.kt)("p",null,"Create an upstream object use case:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'curl http://127.0.0.1:9080/apisix/admin/upstreams/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "type": "chash",\n    "key": "remote_addr",\n    "nodes": {\n        "127.0.0.1:80": 1,\n        "foo.com:80": 2\n    }\n}\'\n')),(0,i.kt)("p",null,"After the upstream object is created, it can be referenced by specific ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream_id": 1\n}\'\n')),(0,i.kt)("p",null,"For convenience, you can also directly bind the upstream address to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Here's an example of configuring a health check:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n         "nodes": {\n            "39.97.63.215:80": 1\n        }\n        "type": "roundrobin",\n        "retries": 2,\n        "checks": {\n            "active": {\n                "http_path": "/status",\n                "host": "foo.com",\n                "healthy": {\n                    "interval": 2,\n                    "successes": 1\n                },\n                "unhealthy": {\n                    "interval": 1,\n                    "http_failures": 2\n                }\n            }\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"More details can be found in ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.8/health-check"},"Health Checking Documents"),"."),(0,i.kt)("p",null,"Here are some examples of configurations using different ",(0,i.kt)("inlineCode",{parentName:"p"},"hash_on")," types:"),(0,i.kt)("h4",{id:"consumer"},"Consumer"),(0,i.kt)("p",null,"Create a consumer object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n       "key-auth": {\n            "key": "auth-jack"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Create route object and enable ",(0,i.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin authentication:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        },\n        "type": "chash",\n        "hash_on": "consumer"\n    },\n    "uri": "/server_port"\n}\'\n')),(0,i.kt)("p",null,"Test request, the ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_name")," after authentication is passed will be used as the hash value of the load balancing hash algorithm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/server_port -H "apikey: auth-jack"\n')),(0,i.kt)("h4",{id:"cookie"},"Cookie"),(0,i.kt)("p",null,"Create route and upstream object, ",(0,i.kt)("inlineCode",{parentName:"p"},"hash_on")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hash_on_cookie",\n    "upstream": {\n        "key": "sid",\n        "type ": "chash",\n        "hash_on ": "cookie",\n        "nodes ": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"The client requests with ",(0,i.kt)("inlineCode",{parentName:"p"},"Cookie"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},' curl http://127.0.0.1:9080/hash_on_cookie -H "Cookie: sid=3c183a30cffcda1408daf1c61d47b274"\n')),(0,i.kt)("h4",{id:"header"},"Header"),(0,i.kt)("p",null,"Create route and upstream object, ",(0,i.kt)("inlineCode",{parentName:"p"},"hash_on")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"header"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hash_on_header",\n    "upstream": {\n        "key": "content-type",\n        "type ": "chash",\n        "hash_on ": "header",\n        "nodes ": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"The client requests with header ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," curl http://127.0.0.1:9080/hash_on_header -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -H \"Content-Type: application/json\"\n")))}d.isMDXComponent=!0}}]);