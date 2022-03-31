"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74324],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31972:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(25773),i=n(30808),a=(n(27378),n(35318)),s=["components"],o={title:"Install Ingress APISIX on Tencent TKE"},l=void 0,c={unversionedId:"deployments/tke",id:"deployments/tke",isDocsHomePage:!1,title:"Install Ingress APISIX on Tencent TKE",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/deployments/tke.md",sourceDirName:"deployments",slug:"/deployments/tke",permalink:"/zh/docs/ingress-controller/deployments/tke",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/deployments/tke.md",tags:[],version:"current",frontMatter:{title:"Install Ingress APISIX on Tencent TKE"},sidebar:"docs",previous:{title:"Install Ingress APISIX on Minikube",permalink:"/zh/docs/ingress-controller/deployments/minikube"},next:{title:"ApisixRoute/v2beta3 Reference",permalink:"/zh/docs/ingress-controller/references/apisix_route_v2beta3"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and apisix-ingress-controller",id:"install-apisix-and-apisix-ingress-controller",children:[{value:"Specify The Ingress Version",id:"specify-the-ingress-version",children:[]},{value:"Enable SSL",id:"enable-ssl",children:[]},{value:"Change default apikey",id:"change-default-apikey",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/product/tke"},"Tencent TKE"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a TKE Service on Tencent Cloud and make sure the API Server is accessible from your workspace."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,a.kt)("li",{parentName:"ul"},"Download the kube config for your TKE Console.")),(0,a.kt)("h2",{id:"install-apisix-and-apisix-ingress-controller"},"Install APISIX and apisix-ingress-controller"),(0,a.kt)("p",null,"As the data plane of apisix-ingress-controller, ",(0,a.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," can be deployed at the same time using Helm chart."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix apisix/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set ingress-controller.enabled=true \\\n  --set etcd.persistence.size="10Gi" \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\nkubectl get service --namespace ingress-apisix\n')),(0,a.kt)("p",null,"Please be careful you must configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd.persistence.size")," to multiples of 10Gi (it's a limitation on TKE), otherwise the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"PersistentVolumeClaim")," creation will fail."),(0,a.kt)("p",null,"Five Service resources were created."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),", which processes the real traffic;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),", which exposes apisix-ingress-controller's metrics."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless")," for etcd service and internal communication.")),(0,a.kt)("p",null,"Two Service resources were created, one is ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,a.kt)("p",null,"The gateway service type is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," (see ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/product/457/45487?from=10680"},"TKE Service Management")," for more details), so that clients can access Apache APISIX through a load balancer. You can find the load balancer ip by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].ip}'\n")),(0,a.kt)("p",null,"Now open your ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.tencent.com/tke2/overview"},"TKE console"),", choosing your cluster and clicking the Workloads tag, you'll see all pods of Apache APISIX, etcd and apisix-ingress-controller are ready."),(0,a.kt)("p",null,"Try to create some ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."),(0,a.kt)("h3",{id:"specify-the-ingress-version"},"Specify The Ingress Version"),(0,a.kt)("p",null,"apisix-ingress-controller will watch apiVersion of ",(0,a.kt)("inlineCode",{parentName:"p"},"networking.k8s.io/v1")," by default. If the target kubernetes version is under ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.19"),", add ",(0,a.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=networking/v1beta1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=extensions/v1beta1")," if your kubernetes cluster is under ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.16")),(0,a.kt)("h3",{id:"enable-ssl"},"Enable SSL"),(0,a.kt)("p",null,"The ssl config is disabled by default, add ",(0,a.kt)("inlineCode",{parentName:"p"},"--set gateway.tls.enabled=true")," to enable tls support."),(0,a.kt)("h3",{id:"change-default-apikey"},"Change default apikey"),(0,a.kt)("p",null,"It's Recommended to change the default key by add ",(0,a.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.apisix.adminKey=ADMIN_KEY_GENERATED_BY_YOURSELF"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--set admin.credentials.admin=ADMIN_KEY_GENERATED_BY_YOURSELF"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--set admin.credentials.viewer=VIEWER_KEY_GENERATED_BY_YOURSELF"),", notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"ingress-controller.config.apisix.adminKey")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"admin.credentials.admin")," must be the same, and should better not same as ",(0,a.kt)("inlineCode",{parentName:"p"},"admin.credentials.viewer"),"."))}d.isMDXComponent=!0}}]);