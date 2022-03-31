"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37081],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),k=r,g=m["".concat(i,".").concat(k)]||m[k]||u[k]||l;return t?a.createElement(g,p(p({ref:n},c),{},{components:t})):a.createElement(g,p({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16332:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=t(25773),r=t(30808),l=(t(27378),t(35318)),p=["components"],o={title:"API \u7f51\u5173 Apache APISIX \u96c6\u6210 Consul KV\uff0c\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u518d\u5347\u7ea7",authors:[{name:"\u6768\u9676",title:"Author",url:"https://github.com/SkyeYoung",image_url:"https://github.com/SkyeYoung.png"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png"}],keywords:["API Gateway","Consul","\u670d\u52a1\u53d1\u73b0","\u670d\u52a1\u6ce8\u518c"],description:"Apache APISIX \u652f\u6301\u57fa\u4e8e Consul KV \u7684\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u8868\u3002\u8fd9\u7bc7\u6587\u7ae0\u8bb2\u8ff0\u4e86\u5728 Apache APISIX \u4e2d\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u548c\u670d\u52a1\u6ce8\u518c\u7684\u5168\u8fc7\u7a0b\u3002",tags:["Technology","Ecosystem","Service Discovery"]},i=void 0,s={permalink:"/zh/blog/2022/02/25/consul-api-gateway",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/02/25/consul-api-gateway.md",title:"API \u7f51\u5173 Apache APISIX \u96c6\u6210 Consul KV\uff0c\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u518d\u5347\u7ea7",description:"Apache APISIX \u652f\u6301\u57fa\u4e8e Consul KV \u7684\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u8868\u3002\u8fd9\u7bc7\u6587\u7ae0\u8bb2\u8ff0\u4e86\u5728 Apache APISIX \u4e2d\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u548c\u670d\u52a1\u6ce8\u518c\u7684\u5168\u8fc7\u7a0b\u3002",date:"2022-02-25T00:00:00.000Z",formattedDate:"2022\u5e742\u670825\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"},{label:"Service Discovery",permalink:"/zh/blog/tags/service-discovery"}],readingTime:7.51,truncated:!0,authors:[{name:"\u6768\u9676",title:"Author",url:"https://github.com/SkyeYoung",image_url:"https://github.com/SkyeYoung.png",imageURL:"https://github.com/SkyeYoung.png"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png",imageURL:"https://github.com/yzeng25.png"}],prevItem:{title:"\u53ef\u89c2\u6d4b\u6027\u80fd\u529b\u5347\u7ea7\uff0cAPI \u7f51\u5173 Apache APISIX \u96c6\u6210 OpenTelemetry",permalink:"/zh/blog/2022/02/28/apisix-integration-opentelemetry-plugin"},nextItem:{title:"\u5982\u4f55\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u7684 CSRF \u5b89\u5168\u63d2\u4ef6\u62e6\u622a\u8de8\u7ad9\u70b9\u4f2a\u9020\u653b\u51fb",permalink:"/zh/blog/2022/02/23/csrf-api-gateway"}},c={authorsImageUrls:[void 0,void 0]},u=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",children:[]},{value:"\u63d2\u4ef6\u5de5\u4f5c\u539f\u7406",id:"\u63d2\u4ef6\u5de5\u4f5c\u539f\u7406",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[{value:"\u521b\u5efa\u8def\u7531\u5e76\u4e3a\u5176\u542f\u7528 Consul",id:"\u521b\u5efa\u8def\u7531\u5e76\u4e3a\u5176\u542f\u7528-consul",children:[]},{value:"\u6dfb\u52a0\u8def\u7531",id:"\u6dfb\u52a0\u8def\u7531",children:[]},{value:"\u6d4b\u8bd5\u914d\u7f6e\u7ed3\u679c",id:"\u6d4b\u8bd5\u914d\u7f6e\u7ed3\u679c",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],m={toc:u};function k(e){var n=e.components,t=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Apache APISIX \u652f\u6301\u57fa\u4e8e Consul KV \u7684\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u8868\u3002\u8fd9\u7bc7\u6587\u7ae0\u8bb2\u8ff0\u4e86\u5728 Apache APISIX \u4e2d\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u548c\u670d\u52a1\u6ce8\u518c\u7684\u5168\u8fc7\u7a0b\u3002")),(0,l.kt)("h2",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,l.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\u3002"),(0,l.kt)("p",null,"\u4f5c\u4e3a API \u7f51\u5173\uff0cApache APISIX \u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002"),(0,l.kt)("p",null,"Consul \u662f\u4e00\u4e2a\u670d\u52a1\u7f51\u683c\u89e3\u51b3\u65b9\u6848\uff0c\u5176\u6838\u5fc3\u4e4b\u4e00\u7684 Consul KV \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u952e\u503c\u6570\u636e\u5e93\uff0c\u4e3b\u8981\u7528\u9014\u662f\u5b58\u50a8\u914d\u7f6e\u53c2\u6570\u548c\u5143\u6570\u636e\uff0c\u540c\u65f6\u4e5f\u5141\u8bb8\u7528\u6237\u5b58\u50a8\u7d22\u5f15\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u5728\u5fae\u670d\u52a1\u67b6\u6784\u6a21\u5f0f\u4e0b\uff0c\u5f53\u6269\u5bb9\u3001\u786c\u4ef6\u6545\u969c\u7b49\u5bfc\u81f4\u4e0a\u6e38\u670d\u52a1\u53d1\u751f\u53d8\u52a8\u7684\u60c5\u51b5\u51fa\u73b0\u65f6\uff0c\u901a\u8fc7\u624b\u52a8\u64b0\u5199\u914d\u7f6e\uff0c\u7ef4\u62a4\u4e0a\u6e38\u670d\u52a1\u4fe1\u606f\u7684\u65b9\u5f0f\uff0c\u4f1a\u5bfc\u81f4\u7ef4\u62a4\u6210\u672c\u9661\u589e\u3002\u5bf9\u6b64\uff0cApache APISIX \u63d0\u4f9b\u4e86\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u4e2d\u5fc3\u7684\u529f\u80fd\uff0c\u5b9e\u73b0\u52a8\u6001\u83b7\u53d6\u6700\u65b0\u7684\u670d\u52a1\u5b9e\u4f8b\u4fe1\u606f\uff0c\u4ee5\u964d\u4f4e\u7528\u6237\u7684\u7ef4\u62a4\u6210\u672c\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\uff0cApache APISIX \u501f\u7531\u793e\u533a\u8d21\u732e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"consul_kv")," \u6a21\u5757\uff0c\u652f\u6301\u4e86\u57fa\u4e8e Consul KV \u7684\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u4e2d\u5fc3\u3002"),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u5de5\u4f5c\u539f\u7406"},"\u63d2\u4ef6\u5de5\u4f5c\u539f\u7406"),(0,l.kt)("p",null,"Apache APISIX \u5229\u7528 Consul KV \u5206\u5e03\u5f0f\u952e\u503c\u5b58\u50a8\u80fd\u529b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"consul_kv")," \u6a21\u5757\uff0c\u89e3\u8026\u4e86\u670d\u52a1\u7684\u63d0\u4f9b\u8005\u548c\u6d88\u8d39\u8005\uff0c\u5b9e\u73b0\u4e86\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u4e2d\u5fc3\u7684\u4e24\u5927\u6838\u5fc3\u529f\u80fd\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u670d\u52a1\u6ce8\u518c\uff1a\u670d\u52a1\u63d0\u4f9b\u8005\u5411\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u670d\u52a1\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u670d\u52a1\u53d1\u73b0\uff1a\u670d\u52a1\u6d88\u8d39\u8005\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3\u67e5\u627e\u670d\u52a1\u63d0\u4f9b\u8005\u7684\u8def\u7531\u4fe1\u606f\u3002")),(0,l.kt)("p",null,"\u5728\u6b64\u57fa\u7840\u4e0a\u6784\u5efa\u7684 Apache APISIX \u5c06\u66f4\u7075\u6d3b\u5730\u9002\u5e94\u73b0\u6709\u7684\u5fae\u670d\u52a1\u67b6\u6784\uff0c\u66f4\u597d\u5730\u6ee1\u8db3\u7528\u6237\u9700\u6c42\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1645769130815-f23e9e11-ca57-4262-9083-aab5509aa178.png",alt:"APISIX Consul \u5de5\u4f5c\u539f\u7406"})),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,l.kt)("p",null,"\u672c\u6587\u4e2d\u7684\u6d4b\u8bd5\u73af\u5883\u5747\u4f7f\u7528 docker-compose \u5728 Docker \u4e2d\u642d\u5efa\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e0b\u8f7d Apache APISIX\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u62c9\u53d6 apisix-docker \u7684 Git \u4ed3\u5e93\ngit clone https://github.com/apache/apisix-docker.git\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa Consul \u6587\u4ef6\u5939\u548c\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# \u521b\u5efa consul \u6587\u4ef6\u5939\nmkdir -p ~/docker-things/consul/ && cd "$_"\n# \u521b\u5efa\u914d\u7f6e\u6587\u4ef6\ntouch docker-compose.yml server1.json\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u6587\u4ef6\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.8'\n\nservices:\n  consul-server1:\n    image: consul:1.9.3\n    container_name: consul-server1\n    restart: always\n    volumes:\n      - ./server1.json:/consul/config/server1.json:ro\n    networks:\n      - apisix\n    ports:\n      - '8500:8500'\n    command: 'agent -bootstrap-expect=1'\n\nnetworks:\n  apisix:\n    external: true\n    name: example_apisix\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"server1.json")," \u6587\u4ef6\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node_name": "consul-server1",\n  "server": true,\n  "addresses": {\n    "http": "0.0.0.0"\n  }\n}\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 Apache APISIX \u4e2d\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix_conf/config.yaml")," \u6dfb\u52a0 Consul \u7684\u76f8\u5173\u914d\u7f6e\u4fe1\u606f\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# config.yml\n# ...other config\ndiscovery:\n  consul_kv:\n    servers:\n      - "http://consul-server1:8500"\n    prefix: "upstreams"\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u542f\u52a8 Apache APISIX \u548c Consul\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165 example \u548c consul \u6587\u4ef6\u5939\uff0c\u4f9d\u6b21\u542f\u52a8 APISIX \u548c Consul\ndocker-compose up -d\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u6d4b\u8bd5\u670d\u52a1\u6ce8\u518c\u5230 Consul\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"example")," \u5305\u542b\u4e86\u4e24\u4e2a Web \u670d\u52a1\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e24\u4e2a\u670d\u52a1\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u68c0\u67e5 example \u7684 docker-compose.yml \u5c31\u53ef\u4ee5\u770b\u5230\u4e24\u4e2a Web \u670d\u52a1\n$ cat docker-compose.yml | grep web\n# \u8f93\u51fa\nweb1:\n  - ./upstream/web1.conf:/etc/nginx/nginx.conf\nweb2:\n  - ./upstream/web2.conf:/etc/nginx/nginx.conf\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u786e\u8ba4 Web \u670d\u52a1\u7684 IP \u5730\u5740\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo docker inspect -f='{{.Name}} - {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $(sudo docker ps -aq) | grep web\n# \u8f93\u51fa\n/example-web1-1 - 172.26.0.7\n/example-web2-1 - 172.26.0.2\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u7ec8\u7aef\u4e2d\u5bf9 Consul \u7684 HTTP API \u8fdb\u884c\u8bf7\u6c42\u4ee5\u6ce8\u518c\u6d4b\u8bd5\u670d\u52a1\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# \u4f7f\u7528\u5bf9\u5e94\u7684 IP \u8fdb\u884c\u6ce8\u518c\ncurl \\\n  -X PUT \\\n  -d \' {"weight": 1, "max_fails": 2, "fail_timeout": 1}\' \\\n  http://127.0.0.1:8500/v1/kv/upstreams/webpages/172.26.0.7:80\n\ncurl \\\n  -X PUT \\\n  -d \' {"weight": 1, "max_fails": 2, "fail_timeout": 1}\' \\\n  http://127.0.0.1:8500/v1/kv/upstreams/webpages/172.26.0.2:80\n')),(0,l.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"/v1/kv/")," \u540e\u7684\u8def\u5f84\u6309\u7167 ",(0,l.kt)("inlineCode",{parentName:"p"},"{Prefix}/{Service Name}/{IP}:{Port}")," \u7684\u683c\u5f0f\u6784\u6210\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{Prefix}")," \u662f\u5728 APISIX \u4e2d\u914d\u7f6e Consul \u65f6\u5199\u5165\u7684 prefix\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"{Service Name}")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"{IP}:{Port}")," \u5219\u9700\u8981\u6839\u636e\u4e0a\u6e38\u670d\u52a1\uff0c\u7531\u7528\u6237\u81ea\u884c\u786e\u5b9a\u3002"),(0,l.kt)("p",{parentName:"li"},"\u800c\u6570\u636e\u7684\u683c\u5f0f\u5219\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},'{"weight": <Num>, "max_fails": <Num>, "fail_timeout": <Num>}'),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b\u6d4b\u8bd5\u670d\u52a1\u662f\u5426\u6ce8\u518c\u6210\u529f\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl "http://127.0.0.1:8500/v1/kv/upstreams/webpages?keys"\n')),(0,l.kt)("p",{parentName:"li"},"\u8fd4\u56de\u6d88\u606f\u5982\u4e0b\u5219\u8868\u793a\u6ce8\u518c\u6210\u529f\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'["upstreams/webpages/172.26.0.2:80","upstreams/webpages/172.26.0.7:80"]%\n')))),(0,l.kt)("h3",{id:"\u521b\u5efa\u8def\u7531\u5e76\u4e3a\u5176\u542f\u7528-consul"},"\u521b\u5efa\u8def\u7531\u5e76\u4e3a\u5176\u542f\u7528 Consul"),(0,l.kt)("p",null,"\u4f7f\u7528 Apache APISIX \u63d0\u4f9b\u7684 Admin API \u5c06 Consul \u6dfb\u52a0\u5230\u8def\u7531\u4e2d\u3002"),(0,l.kt)("p",null,"\u5728\u6dfb\u52a0\u4e4b\u524d\u9700\u8981\u5148\u786e\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"X-API-KEY")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"upstream.service_name")," \u4e24\u4e2a\u6570\u636e\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-API-KEY"),"\uff1aAdmin API \u7684\u8bbf\u95ee Token\uff0c\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u9ed8\u8ba4\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"edd1c9f034335f136f87ad84b625c8f1")," \u5373\u53ef\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"upstream.service_name"),"\uff1a\u4e0a\u6e38\u670d\u52a1\u7684\u540d\u79f0\uff0c\u5b83\u6307\u5b9a\u4e86\u5c06\u4e0e\u67d0\u4e2a\u8def\u7531\u7ed1\u5b9a\u7684\u67d0\u4e2a\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u7684\u670d\u52a1\uff08Service\uff09\uff0c\u4f7f\u7528 Consul \u65f6\u9700\u8981\u8bbe\u7f6e\u4e3a\u6ce8\u518c\u6d4b\u8bd5\u670d\u52a1\u65f6\u7684 URL\uff0c\u5e76\u53bb\u6389\u6700\u540e\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"{IP}:{Port}")," \u90e8\u5206\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 Apache APISIX \u63d0\u4f9b\u7684 Memory Dump API \u83b7\u53d6\u670d\u52a1\u7684 URL\uff0c\u540c\u65f6\u786e\u8ba4\u662f\u5426\u80fd\u6b63\u5e38\u53d1\u73b0\u4e0a\u6e38\u670d\u52a1\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9092/v1/discovery/consul_kv/dump | jq\n# \u8f93\u51fa\n{\n  "services": {\n    # \u8fd9\u4e2a key \u5c31\u662f\u9700\u8981\u7684 URL\n    "http://consul-server1:8500/v1/kv/upstreams/webpages/": [\n      {\n        "port": 80,\n        "host": "172.26.0.7",\n        "weight": 1\n      },\n      {\n        "port": 80,\n        "host": "172.26.0.2",\n        "weight": 1\n      }\n    ]\n  },\n  "config": {\n    # ...configs\n  }\n}\n')),(0,l.kt)("h3",{id:"\u6dfb\u52a0\u8def\u7531"},"\u6dfb\u52a0\u8def\u7531"),(0,l.kt)("p",null,"\u8fd9\u91cc\u5c06 URL \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"/consul/*")," \u7684\u8bf7\u6c42\u8def\u7531\u5206\u914d\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://consul-server1:8500/v1/kv/upstreams/webpages/"),"\u3002\u540c\u65f6\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"discovery_type")," \u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"consul_kv")," \u4ee5\u542f\u52a8\u5bf9\u5e94\u6a21\u5757\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X POST -d \'\n{\n    "uri": "/consul/*",\n    "upstream": {\n        "service_name": "http://consul-server1:8500/v1/kv/upstreams/webpages/",\n        "type": "roundrobin",\n        "discovery_type": "consul_kv"\n    }\n}\'\n')),(0,l.kt)("h3",{id:"\u6d4b\u8bd5\u914d\u7f6e\u7ed3\u679c"},"\u6d4b\u8bd5\u914d\u7f6e\u7ed3\u679c"),(0,l.kt)("p",null,"\u901a\u8fc7\u8bf7\u6c42\u7ed3\u679c\u53ef\u4ee5\u770b\u5230\uff0c Apache APISIX \u4e2d\u65b0\u589e\u7684\u8def\u7531\u5df2\u7ecf\u53ef\u4ee5\u901a\u8fc7 Consul \u627e\u5230\u6b63\u786e\u7684\u670d\u52a1\u5730\u5740\uff0c\u5e76\u6839\u636e\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u8bf7\u6c42\u5230\u4e24\u4e2a\u8282\u70b9\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u7b2c\u4e00\u6b21\u8bf7\u6c42\ncurl -s http://127.0.0.1:9080/consul/\n# \u8f93\u51fa\nhello web1%\n\n# \u7b2c\u4e8c\u6b21\u8bf7\u6c42\ncurl -s http://127.0.0.1:9080/consul/\n# \u8f93\u51fa\nhello web2%\n\n# \u6ce8\u610f\uff1a\u4e5f\u6709\u53ef\u80fd\u4e24\u6b21\u8bf7\u6c42\u83b7\u53d6\u7684\u90fd\u662f web1 \u6216\u8005 web2\u3002\n#      \u8fd9\u662f\u7531\u8d1f\u8f7d\u5747\u8861\u7684\u7279\u6027\u9020\u6210\u7684\uff0c\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u8fdb\u884c\u66f4\u591a\u6b21\u8bf7\u6c42\u3002\n")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u672c\u6587\u7684\u524d\u534a\u90e8\u5206\u4ecb\u7ecd\u4e86 Apache APISIX \u5982\u4f55\u914d\u5408 Consul \u5b9e\u73b0\u57fa\u4e8e Consul KV \u7684\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u4e2d\u5fc3\uff0c\u89e3\u51b3\u670d\u52a1\u4fe1\u606f\u7ba1\u7406\u7ef4\u62a4\u7684\u95ee\u9898\u3002\u800c\u5728\u540e\u534a\u90e8\u5206\u5219\u7740\u91cd\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728 Docker \u4e2d\u642d\u914d Consul \u4f7f\u7528 Apache APISIX \u7684\u64cd\u4f5c\u6d41\u7a0b\u3002\u5f53\u7136\uff0c\u5728\u5b9e\u9645\u573a\u666f\u4e2d\u7684\u5e94\u7528\uff0c\u8fd8\u9700\u8981\u5404\u4f4d\u8bfb\u8005\u6839\u636e\u4e1a\u52a1\u4f7f\u7528\u573a\u666f\u548c\u5df2\u6709\u7684\u7cfb\u7edf\u67b6\u6784\u5177\u4f53\u5206\u6790\u3002\u5173\u4e8e\u5728 Apache APISIX \u4e2d\u4f7f\u7528 Consul \u6ce8\u518c\u4e2d\u5fc3\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/discovery/consul_kv/"},"\u5b98\u65b9\u6587\u6863"),"\u4e2d\u627e\u5230\u3002"),(0,l.kt)("p",null,"Apache APISIX \u9879\u76ee\u76ee\u524d\u6b63\u5728\u5f00\u53d1\u5176\u4ed6\u63d2\u4ef6\u4ee5\u652f\u6301\u96c6\u6210\u66f4\u591a\u670d\u52a1\uff0c\u5982\u679c\u60a8\u5bf9\u6b64\u6709\u5174\u8da3\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussions")," \u53d1\u8d77\u8ba8\u8bba\uff0c\u6216\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/join"},"\u90ae\u4ef6\u5217\u8868"),"\u8fdb\u884c\u4ea4\u6d41."))}k.isMDXComponent=!0}}]);