"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37706],{15774:function(e,t,a){var r,n=a(27378),l=["title","titleId"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}t.Z=function(e){var t=e.title,a=e.titleId,s=i(e,l);return n.createElement("svg",c({"aria-hidden":"true","data-prefix":"fas","data-icon":"chevron-right",className:"chevron-right_svg__svg-inline--fa chevron-right_svg__fa-chevron-right chevron-right_svg__fa-w-10",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512","aria-labelledby":a},s),t?n.createElement("title",{id:a},t):null,r||(r=n.createElement("path",{fill:"currentColor",d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})))}},34742:function(e,t,a){a.r(t);var r=a(27378),n=a(50353),l=a(15774);t.default=function(){var e=((0,n.Z)().siteConfig.customFields.events||[]).slice(0,4).map((function(e){var t=e.fileName.slice(0,10),a=e.fileName.split("-"),n="/blog/"+a.slice(0,3).join("/")+"/"+a.slice(3).join("-");return r.createElement("div",{className:"event-card",key:e.title},r.createElement("a",{className:"event-item",href:n,target:"_blank"},r.createElement("div",{className:"event-card-title"},e.title),r.createElement("div",{className:"event-card-time"},t),r.createElement("div",{className:"event-card-read"},"Read ",r.createElement(l.Z,{style:{width:"6px"}}))))}));return r.createElement("div",{className:"news",style:{padding:"50px 0"}},r.createElement("div",null,r.createElement("h3",{className:"docs-promo-head",style:{width:"100%",textAlign:"center",left:"0"}},"Stay updated about APISIX"),r.createElement("p",{className:"docs-promo-subtitle",style:{width:"100%",textAlign:"center",left:"0"}},"Some Recent events"),r.createElement("div",{className:"event-card-container"},e)),r.createElement("div",{className:"newsletter"},r.createElement("p",null,"Stay up to date about all Apache APISIX\u2122 News, subscribe to our"," ",r.createElement("a",{hred:"%"},"newsletter.")),r.createElement("a",{className:"news-button",href:"/docs/general/join"},"Subscribe")))}}}]);