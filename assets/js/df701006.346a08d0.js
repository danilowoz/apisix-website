"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86770],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9247:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],l={title:"Batch Processor"},c=void 0,s={unversionedId:"batch-processor",id:"version-2.6/batch-processor",isDocsHomePage:!1,title:"Batch Processor",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/batch-processor.md",sourceDirName:".",slug:"/batch-processor",permalink:"/docs/apisix/2.6/batch-processor",editUrl:null,tags:[],version:"2.6",frontMatter:{title:"Batch Processor"},sidebar:"version-2.6/docs",previous:{title:"HTTPS",permalink:"/docs/apisix/2.6/https"},next:{title:"Benchmark",permalink:"/docs/apisix/2.6/benchmark"}},u=[{value:"Configurations",id:"configurations",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The batch processor can be used to aggregate entries(logs/any data) and process them in a batch.\nWhen the batch_max_size is set to zero the processor will execute each entry immediately. Setting the batch max size more\nthan 1 will start aggregating the entries until it reaches the max size or the timeout expires."),(0,o.kt)("h2",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"The only mandatory parameter to create a batch processor is a function. The function will be executed when the batch reaches the max size\nor when the buffer duration exceeds."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"A unique identifier to identity the batch processor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"batch_max_size"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Max size of each batch, default is 1000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"inactive_timeout"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"maximum age in seconds when the buffer will be flushed if inactive, default is 5s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"buffer_duration"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Maximum age in seconds of the oldest entry in a batch before the batch must be processed, default is 5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Maximum number of retries before removing from the processing pipe line; default is zero")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"retry_delay"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of seconds the process execution should be delayed if the execution fails; default is 1")))),(0,o.kt)("p",null,"The following code shows an example of how to use a batch processor. The batch processor takes a function to be executed as the first\nargument and the batch configuration as the second parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local bp = require(\"apisix.plugins.batch-processor\")\nlocal func_to_execute = function(entries)\n            -- serialize to json array core.json.encode(entries)\n            -- process/send data\n            return true\n       end\n\nlocal config = {\n    max_retry_count  = 2,\n    buffer_duration  = 60,\n    inactive_timeout  = 5,\n    batch_max_size = 1,\n    retry_delay  = 0\n}\n\n\nlocal batch_processor, err = bp:new(func_to_execute, config)\n\nif batch_processor then\n    batch_processor:push({hello='world'})\nend\n")),(0,o.kt)("p",null,"Note: Please make sure the batch max size (entry count) is within the limits of the function execution.\nThe timer to flush the batch runs based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"inactive_timeout")," configuration. Thus, for optimal usage,\nkeep the ",(0,o.kt)("inlineCode",{parentName:"p"},"inactive_timeout")," smaller than the ",(0,o.kt)("inlineCode",{parentName:"p"},"buffer_duration"),"."))}m.isMDXComponent=!0}}]);