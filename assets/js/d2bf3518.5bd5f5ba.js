"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96917],{35318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(v,a(a({ref:n},p),{},{components:t})):r.createElement(v,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95762:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(25773),o=t(30808),i=(t(27378),t(35318)),a=["components"],s={title:"DNS"},c=void 0,l={unversionedId:"dns",id:"version-2.4/dns",isDocsHomePage:!1,title:"DNS",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.4/dns.md",sourceDirName:".",slug:"/dns",permalink:"/docs/apisix/2.4/dns",editUrl:null,tags:[],version:"2.4",frontMatter:{title:"DNS"},sidebar:"version-2.4/docs",previous:{title:"Customize Nginx configuration",permalink:"/docs/apisix/2.4/customize-nginx-configuration"},next:{title:"HTTPS",permalink:"/docs/apisix/2.4/https"}},p=[{value:"service discovery via DNS",id:"service-discovery-via-dns",children:[{value:"SRV record",id:"srv-record",children:[]}]}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#service-discovery-via-dns"},"service discovery via DNS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#src-record"},"SRV record"))))),(0,i.kt)("h2",{id:"service-discovery-via-dns"},"service discovery via DNS"),(0,i.kt)("p",null,"Some service discovery system, like Consul, support exposing service information\nvia DNS. Therefore we can use this way to discover service directly."),(0,i.kt)("p",null,"First of all, we need to configure the address of DNS servers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# add this to config.yaml\ndiscovery:\n   dns:\n     servers:\n       - "127.0.0.1:8600"          # use the real address of your dns server\n')),(0,i.kt)("p",null,"Unlike configurating domain in the Upstream's ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," field, service discovery via\nDNS will return all records. For example, with upstream configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"and ",(0,i.kt)("inlineCode",{parentName:"p"},"test.consul.service")," be resolved as ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.2"),", this result will be the same as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "weight": 1},\n        {"host": "1.1.1.2", "weight": 1}\n    ]\n}\n')),(0,i.kt)("p",null,"Note that all the IPs from ",(0,i.kt)("inlineCode",{parentName:"p"},"test.consul.service")," share the same weight."),(0,i.kt)("p",null,"If a service has both A and AAAA records, A record is preferred."),(0,i.kt)("p",null,"If you want to specify the port for the upstream server, you can add it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"service_name"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service:1980",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"Another way to do it is via the SRV record, see below."),(0,i.kt)("h3",{id:"srv-record"},"SRV record"),(0,i.kt)("p",null,"By using SRV record you can specify the port and the weight of a service."),(0,i.kt)("p",null,"Assumed you have the SRV record like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"; under the section of blah.service\nA       300 IN      A     1.1.1.1\nB       300 IN      A     1.1.1.2\nB       300 IN      A     1.1.1.3\nsrv   86400 IN    SRV 10       60     1980 A\nsrv   86400 IN    SRV 10       20     1981 B\n")),(0,i.kt)("p",null,"Upstream configuration like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "srv.blah.service",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"is the same as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "port": 1980, "weight": 60},\n        {"host": "1.1.1.2", "port": 1981, "weight": 10},\n        {"host": "1.1.1.3", "port": 1981, "weight": 10}\n    ]\n}\n')),(0,i.kt)("p",null,"Note that two records of domain B split the weight evenly."),(0,i.kt)("p",null,"As for 0 weight SRV record, the ",(0,i.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2782.txt"},"RFC 2782")," says:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Domain administrators SHOULD use Weight 0 when there isn't any server\nselection to do, to make the RR easier to read for humans (less\nnoisy).  In the presence of records containing weights greater\nthan 0, records with weight 0 should have a very small chance of\nbeing selected.")),(0,i.kt)("p",null,'We treat weight 0 record has a weight of 1 so the node "have a very small chance of\nbeing selected", which is also the common way to treat this type of record.'),(0,i.kt)("p",null,"TODO: support priority."))}d.isMDXComponent=!0}}]);