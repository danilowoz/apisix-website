"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13386],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(t),m=r,g=s["".concat(u,".").concat(m)]||s[m]||p[m]||l;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},64628:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var a=t(25773),r=t(30808),l=(t(27378),t(35318)),i=["components"],o={title:"Debug Mode"},u=void 0,d={unversionedId:"architecture-design/debug-mode",id:"version-2.13/architecture-design/debug-mode",isDocsHomePage:!1,title:"Debug Mode",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/architecture-design/debug-mode.md",sourceDirName:"architecture-design",slug:"/architecture-design/debug-mode",permalink:"/docs/apisix/architecture-design/debug-mode",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"Debug Mode"},sidebar:"version-2.13/docs",previous:{title:"Router",permalink:"/docs/apisix/architecture-design/router"},next:{title:"Getting Started",permalink:"/docs/apisix/getting-started"}},c=[{value:"Basic Debug Mode",id:"basic-debug-mode",children:[]},{value:"Advanced Debug Mode",id:"advanced-debug-mode",children:[]},{value:"Enable Advanced Debug Mode Dynamically",id:"enable-advanced-debug-mode-dynamically",children:[]}],p={toc:c};function s(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"basic-debug-mode"},"Basic Debug Mode"),(0,l.kt)("p",null,"You can enable the basic debug mode by adding this line to your ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml")," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"basic:\n  enable: true\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": Before Apache APISIX 2.10, basic debug mode was enabled by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix.enable_debug = true")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," file."),(0,l.kt)("p",null,"For example, if we are using two plugins ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-conn")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-count")," for a Route ",(0,l.kt)("inlineCode",{parentName:"p"},"/hello"),", we will receive a response with the header ",(0,l.kt)("inlineCode",{parentName:"p"},"Apisix-Plugins: limit-conn, limit-count")," when we enable the basic debug mode."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:1984/hello -i\nHTTP/1.1 200 OK\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nApisix-Plugins: limit-conn, limit-count\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 1\nServer: openresty\n\nhello world\n")),(0,l.kt)("p",null,"If the debug information cannot be included in a response header (say when the plugin is in a stream subsystem), the information will be logged in the error log at a ",(0,l.kt)("inlineCode",{parentName:"p"},"warn")," level."),(0,l.kt)("h3",{id:"advanced-debug-mode"},"Advanced Debug Mode"),(0,l.kt)("p",null,"Advanced debug mode can also be enabled by modifying the configuration in the ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml")," file."),(0,l.kt)("p",null,"Enable advanced debug mode by modifying the configuration in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml")," file."),(0,l.kt)("p",null,"The checker checks every second for changes to the configuration files. An ",(0,l.kt)("inlineCode",{parentName:"p"},"#END")," flag is added to let the checker know that it should only look for changes till that point."),(0,l.kt)("p",null,"The checker would only check this if the file was updated by checking its last modification time."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/Disable hook debug trace. Target module function's input arguments or returned value would be printed once this option is enabled."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.name"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"The module list name of the hook which has enabled debug trace."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.log_level"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Logging levels for input arguments & returned values."),(0,l.kt)("td",{parentName:"tr",align:null},"warn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_input_args"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/Disable printing input arguments."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_return_value"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/Disable printing returned values."),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"hook_conf:\n  enable: false # Enable/Disable Hook Debug Trace\n  name: hook_phase # The Module List Name of Hook which has enabled Debug Trace\n  log_level: warn # Logging Levels\n  is_print_input_args: true # Enable/Disable Input Arguments Print\n  is_print_return_value: true # Enable/Disable Returned Value Print\n\nhook_phase: # Module Function List, Name: hook_phase\n  apisix: # Referenced Module Name\n    - http_access_phase # Function Names\uff1aArray\n    - http_header_filter_phase\n    - http_body_filter_phase\n    - http_log_phase\n#END\n")),(0,l.kt)("h3",{id:"enable-advanced-debug-mode-dynamically"},"Enable Advanced Debug Mode Dynamically"),(0,l.kt)("p",null,"You can also enable the advanced debug mode to take effect on particular requests."),(0,l.kt)("p",null,"For example, to dynamically enable advanced debugging mode on requests with a particular header name ",(0,l.kt)("inlineCode",{parentName:"p"},"X-APISIX-Dynamic-Debug")," you can configure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"http_filter:\n  enable: true # Enable/Disable Advanced Debug Mode Dynamically\n  enable_header_name: X-APISIX-Dynamic-Debug # Trace for the request with this header\n......\n#END\n")),(0,l.kt)("p",null,"This will enable the advanced debug mode for requests like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl 127.0.0.1:9090/hello --header 'X-APISIX-Dynamic-Debug: foo'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": The ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix.http_access_phase")," module cannot be hooked for dynamic rules as the advanced debug mode is enabled based on the request."))}s.isMDXComponent=!0}}]);