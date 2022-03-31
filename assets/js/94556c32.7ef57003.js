"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49776],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36912:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(25773),r=n(30808),s=(n(27378),n(35318)),i=["components"],o={title:"Install Dependencies"},l=void 0,c={unversionedId:"install-dependencies",id:"version-2.4/install-dependencies",isDocsHomePage:!1,title:"Install Dependencies",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.4/install-dependencies.md",sourceDirName:".",slug:"/install-dependencies",permalink:"/docs/apisix/2.4/install-dependencies",editUrl:null,tags:[],version:"2.4",frontMatter:{title:"Install Dependencies"}},p=[{value:"Note",id:"note",children:[]},{value:"CentOS 7",id:"centos-7",children:[]},{value:"Fedora 31 &amp; 32",id:"fedora-31--32",children:[]},{value:"Ubuntu 16.04 &amp; 18.04",id:"ubuntu-1604--1804",children:[]},{value:"Debian 9 &amp; 10",id:"debian-9--10",children:[]},{value:"Mac OSX",id:"mac-osx",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#install-dependencies"},"Install Dependencies")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#note"},"Note")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#centos-7"},"CentOS 7")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#fedora-31--32"},"Fedora 31 & 32")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#ubuntu-1604--1804"},"Ubuntu 16.04 & 18.04")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#debian-9--10"},"Debian 9 & 10")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#mac-osx"},"Mac OSX"))),(0,s.kt)("h2",{id:"note"},"Note"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Since v2.0 Apache APISIX would not support the v2 protocol storage to etcd anymore, and the minimum etcd version supported is v3.4.0. What's more, etcd v3 uses gRPC as the messaging protocol, while Apache APISIX uses HTTP(S) to communicate with etcd cluster, so be sure the ",(0,s.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/dev-guide/api_grpc_gateway/"},"etcd gRPC gateway")," is enabled.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'Now by default Apache APISIX uses HTTP protocol to talk with etcd cluster, which is insecure. Please configure certificate and corresponding private key for your etcd cluster, and use "https" scheme explicitly in the etcd endpoints list in your Apache APISIX configuration, if you want to keep the data secure and integral. See the etcd section in ',(0,s.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," for more details.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you want use Tengine instead of OpenResty, please take a look at this installation step script ",(0,s.kt)("a",{parentName:"p",href:"../.travis/linux_tengine_runner.sh"},"Install Tengine at Ubuntu"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If it is OpenResty 1.19, APISIX will use OpenResty's built-in LuaJIT to run ",(0,s.kt)("inlineCode",{parentName:"p"},"bin/apisix"),"; otherwise it will use Lua 5.1. If you encounter ",(0,s.kt)("inlineCode",{parentName:"p"},"luajit: lj_asm_x86.h:2819: asm_loop_ fixup: Assertion '((intptr_t)target & 15) == 0' failed"),", this is a problem with the low version of OpenResty's built-in LuaJIT under certain compilation conditions.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"On some platforms, installing LuaRocks via the package manager will cause Lua to be upgraded to Lua 5.3, so we recommend installing LuaRocks via source code. if you install OpenResty and its OpenSSL develop library (openresty-openssl111-devel for rpm and openresty-openssl111-dev for deb) via the official repository, then ",(0,s.kt)("a",{parentName:"p",href:"../utils/linux-install-luarocks.sh"},"we provide a script for automatic installation"),". If you compile OpenResty yourself, you can refer to the above script and change the path in it. If you don't specify the OpenSSL library path when you compile, you don't need to configure the OpenSSL variables in LuaRocks, because the system's OpenSSL is used by default. If the OpenSSL library is specified at compile time, then you need to ensure that LuaRocks' OpenSSL configuration is consistent with OpenResty's.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"WARNING: If you are using OpenResty which is older than ",(0,s.kt)("inlineCode",{parentName:"p"},"1.17.8"),", please installing openresty-openss-devel instead of openresty-openssl111-devel."))),(0,s.kt)("h2",{id:"centos-7"},"CentOS 7"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# install etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# add OpenResty source\nsudo yum install yum-utils\nsudo yum-config-manager --add-repo https://openresty.org/package/centos/openresty.repo\n\n# install OpenResty and some compilation tools\nsudo yum install -y openresty curl git gcc openresty-openssl111-devel unzip\n\n# install LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# start etcd server\nnohup etcd &\n")),(0,s.kt)("h2",{id:"fedora-31--32"},"Fedora 31 & 32"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# add OpenResty source\nsudo yum install yum-utils\nsudo yum-config-manager --add-repo https://openresty.org/package/fedora/openresty.repo\n\n# install etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# install OpenResty and some compilation tools\nsudo yum install -y openresty curl git gcc openresty-openssl111-devel\n\n# install LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# start etcd server\nnohup etcd &\n")),(0,s.kt)("h2",{id:"ubuntu-1604--1804"},"Ubuntu 16.04 & 18.04"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'# add OpenResty source\nwget -qO - https://openresty.org/package/pubkey.gpg | sudo apt-key add -\nsudo apt-get update\nsudo apt-get -y install software-properties-common\nsudo add-apt-repository -y "deb http://openresty.org/package/ubuntu $(lsb_release -sc) main"\nsudo apt-get update\n\n# install etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# install OpenResty and some compilation tools\nsudo apt-get install -y git openresty curl openresty-openssl111-dev\n\n# install LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# start etcd server\nnohup etcd &\n')),(0,s.kt)("h2",{id:"debian-9--10"},"Debian 9 & 10"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# optional\nsed -i 's|^deb http://deb.debian.org/debian|deb http://mirrors.huaweicloud.com/debian|g' /etc/apt/sources.list\nsed -i 's|^deb http://security.debian.org/debian-security|deb http://mirrors.huaweicloud.com/debian-security|g' /etc/apt/sources.list\napt update\napt install wget gnupg -y\n\n# add OpenResty source\nwget -qO - https://openresty.org/package/pubkey.gpg | sudo apt-key add -\nsudo apt-get -y install software-properties-common\nsudo add-apt-repository -y \"deb http://openresty.org/package/debian $(lsb_release -sc) openresty\"\nsudo apt-get update\n\n# install etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# install OpenResty and some compilation tools\nsudo apt-get install -y git openresty curl make openresty-openssl111-dev\n\n# install LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# start etcd server\nnohup etcd &\n")),(0,s.kt)("h2",{id:"mac-osx"},"Mac OSX"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# install OpenResty, etcd and some compilation tools\nbrew install openresty/brew/openresty etcd luarocks curl git\n\n# start etcd server\netcd &\n\n# enable TLS for etcd server\netcd --cert-file=/path/to/cert --key-file=/path/to/pkey --advertise-client-urls https://127.0.0.1:2379\n")))}d.isMDXComponent=!0}}]);