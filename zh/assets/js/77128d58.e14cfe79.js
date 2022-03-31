"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89123],{35318:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,l(l({ref:e},c),{},{components:n})):a.createElement(m,l({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43860:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=["components"],o={title:"authz-casdoor"},s=void 0,u={unversionedId:"plugins/authz-casdoor",id:"plugins/authz-casdoor",isDocsHomePage:!1,title:"authz-casdoor",description:"\x3c!--",source:"@site/docs/apisix/plugins/authz-casdoor.md",sourceDirName:"plugins",slug:"/plugins/authz-casdoor",permalink:"/zh/docs/apisix/next/plugins/authz-casdoor",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/authz-casdoor.md",tags:[],version:"current",frontMatter:{title:"authz-casdoor"},sidebar:"docs",previous:{title:"authz-keycloak",permalink:"/zh/docs/apisix/next/plugins/authz-keycloak"},next:{title:"wolf-rbac",permalink:"/zh/docs/apisix/next/plugins/wolf-rbac"}},c=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"Example",id:"example",children:[]}]}],p={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"authz-casdoor")," is an authorization plugin based on ",(0,i.kt)("a",{parentName:"p",href:"https://casdoor.org/"},"Casdoor"),". Casdoor is a centralized authentication / Single-Sign-On (SSO) platform supporting OAuth 2.0, OIDC and SAML, integrated with Casbin RBAC and ABAC permission management."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"endpoint_addr"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The url of casdoor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The client id in casdoor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_secret"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The client secret in casdoor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"callback_url"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The callback url which is used to receive state and code.")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: endpoint_addr and callback_url should not end with '/'")),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"You can enable the plugin on any route by giving out all attributes mentioned above."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "methods": ["GET"],\n  "uri": "/anything/*",\n  "plugins": {\n    "authz-casdoor": {\n        "endpoint_addr":"http://localhost:8000",\n        "callback_url":"http://localhost:9080/anything/callback",\n        "client_id":"7ceb9b7fda4a9061ec1c",\n        "client_secret":"3416238e1edf915eac08b8fe345b2b95cdba7e04"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\'\n\n')),(0,i.kt)("p",null,'In this example, using apisix\'s admin API we created a route "/anything/*" pointed to "httpbin.org:80", and with "authz-casdoor" enabled. This route is now under authentication protection of Casdoor.'),(0,i.kt)("h4",{id:"explanations-about-parameters-of-this-plugin"},"Explanations about parameters of this plugin"),(0,i.kt)("p",null,'In the configuration of "authz-casdoor" plugin we can see four parameters.'),(0,i.kt)("p",null,'The first one is "callback_url". This is exactly the callback url in OAuth2. It should be emphasized that this callback url ',(0,i.kt)("strong",{parentName:"p"},'must belong to the "uri" you specified for the route'),', for example, in this example, http://localhost:9080/anything/callback obviously belong to "/anything/*". Only by this way can the visit toward callback_url can be intercepted and utilized by the plugin(so that the plugin can get the code and state in Oauth2). The logic of callback_url is implemented completely by the plugin so that there is no need to modify the server to implement this callback.'),(0,i.kt)("p",null,'The second parameter "endpoint_addr" is obviously the url of Casdoor. The third and fourth parameters are "client_id" and "client_secret", which you can acquire from Casdoor when you register an app.'),(0,i.kt)("h4",{id:"how-it-works"},"How it works?"),(0,i.kt)("p",null,"Suppose a new user who has never visited this route before is going to visit it (http://localhost:9080/anything/d?param1=foo","\xb6",'m2=bar), considering that "authz-casdoor" is enabled, this visit would be processed by "authz-casdoor" plugin first. After checking the session and confirming that this user hasn\'t been authenticated, the visit will be intercepted. With the original url user wants to visit kept, he will be redirected to the login page of Casdoor.'),(0,i.kt)("p",null,'After successfully logging in with username and password(or whatever method he uses), Casdoor will redirect this user to the "callback_url" with GET parameter "code" and "state" specified. Because the "callback_url" is known by the plugin, when the visit toward the "callback_url" is intercepted this time, the logic of "Authorization code Grant Flow" in Oauth2 will be triggered, which means this plugin will request the access token to confirm whether this user is really logged in. After this confirmation, this plugin will redirect this user to the original url user wants to visit, which was kept by us previously. The logged-in status will also be kept in the session.'),(0,i.kt)("p",null,"Next time this user want to visit url behind this route (for example, http://localhost:9080/anything/d), after discovering that this user has been authenticated previously, this plugin won't redirect this user anymore so that this user can visit whatever he wants under this route without being interfered."))}d.isMDXComponent=!0}}]);