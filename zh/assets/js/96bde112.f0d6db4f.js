"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24276],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27831:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=t(25773),i=t(30808),r=(t(27378),t(35318)),l=["components"],o={title:"\u5982\u4f55\u6784\u5efa Apache APISIX"},p=void 0,s={unversionedId:"how-to-build",id:"version-2.5/how-to-build",isDocsHomePage:!1,title:"\u5982\u4f55\u6784\u5efa Apache APISIX",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.5/how-to-build.md",sourceDirName:".",slug:"/how-to-build",permalink:"/zh/docs/apisix/2.5/how-to-build",editUrl:null,tags:[],version:"2.5",frontMatter:{title:"\u5982\u4f55\u6784\u5efa Apache APISIX"},sidebar:"version-2.5/docs",previous:{title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/docs/apisix/2.5/getting-started"},next:{title:"batch-requests",permalink:"/zh/docs/apisix/2.5/plugins/batch-requests"}},c=[{value:"1. \u5b89\u88c5\u4f9d\u8d56",id:"1-\u5b89\u88c5\u4f9d\u8d56",children:[]},{value:"2. \u5b89\u88c5 Apache APISIX",id:"2-\u5b89\u88c5-apache-apisix",children:[{value:"\u901a\u8fc7\u6e90\u7801\u5305\u5b89\u88c5",id:"\u901a\u8fc7\u6e90\u7801\u5305\u5b89\u88c5",children:[]},{value:"\u901a\u8fc7 RPM \u5305\u5b89\u88c5\uff08CentOS 7\uff09",id:"\u901a\u8fc7-rpm-\u5305\u5b89\u88c5centos-7",children:[]},{value:"\u901a\u8fc7 Luarocks \u5b89\u88c5 \uff08\u4e0d\u652f\u6301 macOS\uff09",id:"\u901a\u8fc7-luarocks-\u5b89\u88c5-\u4e0d\u652f\u6301-macos",children:[]}]},{value:"3. \u7ba1\u7406\uff08\u542f\u52a8\u3001\u5173\u95ed\u7b49\uff09APISIX \u670d\u52a1",id:"3-\u7ba1\u7406\u542f\u52a8\u5173\u95ed\u7b49apisix-\u670d\u52a1",children:[]},{value:"4. \u8fd0\u884c\u6d4b\u8bd5\u6848\u4f8b",id:"4-\u8fd0\u884c\u6d4b\u8bd5\u6848\u4f8b",children:[{value:"\u7591\u96be\u6392\u89e3\u6d4b\u8bd5",id:"\u7591\u96be\u6392\u89e3\u6d4b\u8bd5",children:[]}]},{value:"5. \u66f4\u65b0 Admin API \u7684 token \uff0c\u4fdd\u62a4 Apache APISIX",id:"5-\u66f4\u65b0-admin-api-\u7684-token-\u4fdd\u62a4-apache-apisix",children:[]},{value:"6. \u4e3a APISIX \u6784\u5efa OpenResty",id:"6-\u4e3a-apisix-\u6784\u5efa-openresty",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u5b89\u88c5\u4f9d\u8d56"},"1. \u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("p",null,"Apache APISIX \u7684\u8fd0\u884c\u73af\u5883\u9700\u8981 Nginx \u548c etcd\uff0c"),(0,r.kt)("p",null,"\u6240\u4ee5\u5728\u5b89\u88c5\u524d\uff0c\u8bf7\u6839\u636e\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u6765",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.5/install-dependencies"},"\u5b89\u88c5\u4f9d\u8d56"),"\u3002"),(0,r.kt)("h2",{id:"2-\u5b89\u88c5-apache-apisix"},"2. \u5b89\u88c5 Apache APISIX"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6e90\u7801\u5305\u3001Docker\u3001Luarocks \u7b49\u591a\u79cd\u65b9\u5f0f\u6765\u5b89\u88c5 Apache APISIX\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u6e90\u7801\u5305\u5b89\u88c5"},"\u901a\u8fc7\u6e90\u7801\u5305\u5b89\u88c5"),(0,r.kt)("p",null,"\u4f60\u9700\u8981\u5148\u4e0b\u8f7d Apache Release \u6e90\u7801\u5305\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir apisix-2.5\n$ wget https://downloads.apache.org/apisix/2.5/apache-apisix-2.5-src.tgz\n$ tar zxvf apache-apisix-2.5-src.tgz -C apisix-2.5\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u8fd0\u884c\u65f6\u4f9d\u8d56\u7684 Lua \u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd apisix-2.5\nmake deps\n")),(0,r.kt)("h3",{id:"\u901a\u8fc7-rpm-\u5305\u5b89\u88c5centos-7"},"\u901a\u8fc7 RPM \u5305\u5b89\u88c5\uff08CentOS 7\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y https://github.com/apache/apisix/releases/download/2.5/apisix-2.5-0.x86_64.rpm\n")),(0,r.kt)("h3",{id:"\u901a\u8fc7-luarocks-\u5b89\u88c5-\u4e0d\u652f\u6301-macos"},"\u901a\u8fc7 Luarocks \u5b89\u88c5 \uff08\u4e0d\u652f\u6301 macOS\uff09"),(0,r.kt)("p",null,"\u5728\u7ec8\u7aef\u4e2d\u6267\u884c\u4e0b\u9762\u547d\u4ee4\u5b8c\u6210 APISIX \u7684\u5b89\u88c5\uff08\u53ea\u63a8\u8350\u5f00\u53d1\u8005\u4f7f\u7528\uff09\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u811a\u672c\u5b89\u88c5 master \u5206\u652f\u7684\u4ee3\u7801")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sudo sh -c "$(curl -fsSL https://raw.githubusercontent.com/apache/apisix/master/utils/install-apisix.sh)"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 Luarocks \u5b89\u88c5\u6307\u5b9a\u7684\u7248\u672c:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5 apisix \u7684 2.5 \u7248\u672c\nsudo luarocks install --lua-dir=/path/openresty/luajit apisix 2.5\n\n# \u8001\u7248\u672c luarocks \u53ef\u80fd\u4e0d\u652f\u6301 `lua-dir` \u53c2\u6570\uff0c\u53ef\u4ee5\u5220\u9664\u8be5\u9009\u9879\nsudo luarocks install apisix 2.5\n")),(0,r.kt)("h2",{id:"3-\u7ba1\u7406\u542f\u52a8\u5173\u95ed\u7b49apisix-\u670d\u52a1"},"3. \u7ba1\u7406\uff08\u542f\u52a8\u3001\u5173\u95ed\u7b49\uff09APISIX \u670d\u52a1"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 apisix \u7684\u76ee\u5f55\u4e0b\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"make run")," \u547d\u4ee4\u6765\u542f\u52a8\u670d\u52a1\uff0c\u6216\u8005\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"make stop")," \u65b9\u5f0f\u5173\u95ed\u670d\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# init nginx config file and etcd\n$ make init\n\n# start APISIX server\n$ make run\n\n# stop APISIX server\n$ make stop\n\n# more actions find by `help`\n$ make help\nMakefile rules:\n\n    help:             Show Makefile rules\n    deps:             Installation dependencies\n    utils:            Installation tools\n    lint:             Lint Lua source code\n    init:             Initialize the runtime environment\n    run:              Start the apisix server\n    stop:             Stop the apisix server\n    verify:           Verify the configuration of apisix server\n    clean:            Remove generated files\n    reload:           Reload the apisix server\n    install:          Install the apisix (only for luarocks)\n    test:             Run the test case\n    license-check:    Check Lua source code for Apache License\n")),(0,r.kt)("h2",{id:"4-\u8fd0\u884c\u6d4b\u8bd5\u6848\u4f8b"},"4. \u8fd0\u884c\u6d4b\u8bd5\u6848\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5148\u5b89\u88c5 perl \u7684\u5305\u7ba1\u7406\u5668 cpanminus"),(0,r.kt)("li",{parentName:"ol"},"\u7136\u540e\u901a\u8fc7 cpanm \u6765\u5b89\u88c5 test-nginx \u7684\u4f9d\u8d56\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"sudo cpanm --notest Test::Nginx IPC::Run > build.log 2>&1 || (cat build.log && exit 1)")),(0,r.kt)("li",{parentName:"ol"},"\u7136\u540e clone \u6700\u65b0\u7684\u6e90\u7801\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/iresty/test-nginx.git"),"\u3002\u6ce8\u610f\u4f7f\u7528\u6211\u4eec fork \u51fa\u6765\u7684\u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 perl \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"prove")," \u547d\u4ee4\u6765\u52a0\u8f7d test-nginx \u7684\u5e93\uff0c\u5e76\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"/t")," \u76ee\u5f55\u4e0b\u7684\u6d4b\u8bd5\u6848\u4f8b\u96c6\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8ffd\u52a0\u5f53\u524d\u76ee\u5f55\u5230perl\u6a21\u5757\u76ee\u5f55\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"export PERL5LIB=.:$PERL5LIB")),(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u8fd0\u884c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"make test")),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a nginx \u4e8c\u8fdb\u5236\u8def\u5f84\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"TEST_NGINX_BINARY=/usr/local/bin/openresty prove -Itest-nginx/lib -r t"))))),(0,r.kt)("h3",{id:"\u7591\u96be\u6392\u89e3\u6d4b\u8bd5"},"\u7591\u96be\u6392\u89e3\u6d4b\u8bd5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e Nginx \u8def\u5f84")),(0,r.kt)("p",null,"\u5982\u679c\u9047\u5230\u95ee\u9898 ",(0,r.kt)("inlineCode",{parentName:"p"},'Error unknown directive "lua_package_path" in /API_ASPIX/apisix/t/servroot/conf/nginx.conf'),"\n\u786e\u4fdd\u5c06openresty\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u7684nginx\u5e76\u6309\u5982\u4e0b\u6240\u793a\u5bfc\u51fa\u8def\u5f84\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Linux \u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH"))),(0,r.kt)("li",{parentName:"ul"},"OSx \u901a\u8fc7homebrew\u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"export PATH=/usr/local/opt/openresty/nginx/sbin:$PATH")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u5355\u4e2a\u6d4b\u8bd5\u7528\u4f8b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c\u6307\u5b9a\u7684\u6d4b\u8bd5\u7528\u4f8b\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"prove -Itest-nginx/lib -r t/plugin/openid-connect.t")))),(0,r.kt)("h2",{id:"5-\u66f4\u65b0-admin-api-\u7684-token-\u4fdd\u62a4-apache-apisix"},"5. \u66f4\u65b0 Admin API \u7684 token \uff0c\u4fdd\u62a4 Apache APISIX"),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix.admin_key")," \u5e76\u91cd\u542f\u670d\u52a1\u3002\u4f8b\u5982\u4e0b\u9762\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  # ... ...\n  admin_key\n    -\n      name: "admin"\n      key: abcdefghabcdefgh\n      role: admin\n')),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u9700\u8981\u8bbf\u95ee Admin API \u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e0a\u9762\u8bb0\u5f55\u7684 key \u4f5c\u4e3a token \u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes?api_key=abcdefghabcdefgh -i\nHTTP/1.1 200 OK\nDate: Fri, 28 Feb 2020 07:48:04 GMT\nContent-Type: text/plain\n... ...\n{"node":{...},"action":"get"}\n\n$ curl http://127.0.0.1:9080/apisix/admin/routes?api_key=abcdefghabcdefgh-invalid -i\nHTTP/1.1 401 Unauthorized\nDate: Fri, 28 Feb 2020 08:17:58 GMT\nContent-Type: text/html\n... ...\n{"node":{...},"action":"get"}\n')),(0,r.kt)("h2",{id:"6-\u4e3a-apisix-\u6784\u5efa-openresty"},"6. \u4e3a APISIX \u6784\u5efa OpenResty"),(0,r.kt)("p",null,"\u6709\u4e9b\u529f\u80fd\u9700\u8981\u4f60\u5f15\u5165\u989d\u5916\u7684 Nginx \u6a21\u5757\u5230 OpenResty \u5f53\u4e2d\u3002\n\u5982\u679c\u4f60\u9700\u8981\u8fd9\u4e9b\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u7528",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/api7/apisix-build-tools/master/build-apisix-openresty.sh"},"\u8fd9\u4e2a\u811a\u672c"),"\n\u6784\u5efa OpenResty\u3002"))}d.isMDXComponent=!0}}]);