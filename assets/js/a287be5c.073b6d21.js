"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57265],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,g=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51353:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(25773),i=n(30808),a=(n(27378),n(35318)),o=["components"],l={title:"APISIX"},c=void 0,p={unversionedId:"architecture-design/apisix",id:"version-2.6/architecture-design/apisix",isDocsHomePage:!1,title:"APISIX",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/architecture-design/apisix.md",sourceDirName:"architecture-design",slug:"/architecture-design/apisix",permalink:"/docs/apisix/2.6/architecture-design/apisix",editUrl:null,tags:[],version:"2.6",frontMatter:{title:"APISIX"},sidebar:"version-2.6/docs",next:{title:"Route",permalink:"/docs/apisix/2.6/architecture-design/route"}},u=[{value:"Plugin Loading Process",id:"plugin-loading-process",children:[]},{value:"Plugin Hierarchy Structure",id:"plugin-hierarchy-structure",children:[]},{value:"Configure APISIX",id:"configure-apisix",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"plugin-loading-process"},"Plugin Loading Process"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.6/docs/assets/images/flow-load-plugin.png",alt:"flow-load-plugin"})),(0,a.kt)("h2",{id:"plugin-hierarchy-structure"},"Plugin Hierarchy Structure"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.6/docs/assets/images/flow-plugin-internal.png",alt:"flow-plugin-internal"})),(0,a.kt)("h2",{id:"configure-apisix"},"Configure APISIX"),(0,a.kt)("p",null,"There are two methods to configure APISIX: directly change ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", or add file path argument using ",(0,a.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," flag when start APISIX like ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix start -c <path string>")),(0,a.kt)("p",null,"For example, set the default listening port of APISIX to 8000, and keep other configurations as default. The configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," should be like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  node_listen: 8000 # APISIX listening port\n")),(0,a.kt)("p",null,"Set the default listening port of APISIX to 8000, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," address to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://foo:2379"),",\nand keep other configurations as default. The configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," should be like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  node_listen: 8000 # APISIX listening port\n\netcd:\n  host: "http://foo:2379" # etcd address\n')),(0,a.kt)("p",null,"Other default configurations can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," file, which is bound to the APISIX source code. ",(0,a.kt)("strong",{parentName:"p"},"Never")," manually modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," file. If you need to customize any configuration, you should update the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX")," will generate ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," file automatically, so please ",(0,a.kt)("em",{parentName:"p"},"DO NOT EDIT")," ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," file too."))}d.isMDXComponent=!0}}]);