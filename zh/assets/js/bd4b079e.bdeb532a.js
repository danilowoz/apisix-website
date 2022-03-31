"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85751],{90359:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n,i=r(27378),l=r(32609),o=["title","titleId"];function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=function(e){var t=e.title,r=e.titleId,l=c(e,o);return i.createElement("svg",a({className:"comment_svg__icon",width:16,height:16,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},l),t?i.createElement("title",{id:r},t):null,n||(n=i.createElement("path",{fill:"#333",d:"M896.4 195.6c-19.1-19.2-44.5-29.8-71.5-29.8l-587.9-.9h-.2c-55.7 0-101.1 45.3-101.2 101.1l-1.1 608.6c-.1 10 5.5 18.8 14.4 23.2 3.6 1.7 7.5 2.6 11.3 2.6 5.6 0 11.2-1.9 15.8-5.5l127-99.2c2.7-2.1 6.1-3.3 9.5-3.3l511 .8h.2c55.8 0 101.2-45.3 101.3-101l.9-425c.1-27-10.4-52.4-29.5-71.6zM881 692.1c-.1 31.5-25.8 57.1-57.3 57.1h-.1l-511-.8h-.1c-13.1 0-26.1 4.5-36.5 12.6l-97.5 76.2 1-571.1c.1-31.6 25.8-57.2 57.3-57.2l588 .9c15.3 0 29.6 6 40.4 16.8s16.7 25.2 16.7 40.5l-.9 425z"})))},m=l.ZP.div.withConfig({displayName:"ContributeCard__Card",componentId:"sc-1lzbk1z-0"})(["@media (max-width:700px){width:100%;}width:80%;border:1px solid rgb(232,67,62);border-radius:5px;margin-bottom:1rem;padding:0.75rem 1.25rem;&:hover{background-color:rgb(255,241,240,0.2);cursor:pointer;p{color:rgb(232,67,62);}}background-color:",";"],(function(e){return e.isShow?"rgb(255,241,240,0.2)":""})),d=l.ZP.div.withConfig({displayName:"ContributeCard__ProjectTitle",componentId:"sc-1lzbk1z-1"})(["display:flex;justify-content:space-between;align-items:center;margin-left:1.25rem;margin-right:1.25rem;"]),u=l.ZP.p.withConfig({displayName:"ContributeCard__Title",componentId:"sc-1lzbk1z-2"})(["margin:0;font-size:1.5rem;color:",";"],(function(e){return e.isShow?"rgb(232, 67, 62)":""})),f=l.ZP.div.withConfig({displayName:"ContributeCard__Issue",componentId:"sc-1lzbk1z-3"})(["@media (max-width:700px){min-width:5rem;}border:1px solid rgb(232,67,62);border-radius:0.5rem;padding:0.25rem 0.5rem;font-size:0.875rem;"]),h=l.ZP.div.withConfig({displayName:"ContributeCard__ProjectDesc",componentId:"sc-1lzbk1z-4"})(["display:flex;color:",";"],(function(e){return e.isShow?"rgb(232, 67, 62)":""})),p=l.ZP.div.withConfig({displayName:"ContributeCard__List",componentId:"sc-1lzbk1z-5"})(["display:",";"],(function(e){return e.isShow?"block":"none"})),b=l.ZP.li.withConfig({displayName:"ContributeCard__ListItem",componentId:"sc-1lzbk1z-6"})(["list-style:none;display:flex;"]),g=function(e){var t=e.repoName,r=e.issues,n=void 0===r?[]:r,l=e.info,o=(0,i.useState)(!1),a=o[0],c=o[1];return t&&l?i.createElement(m,{onClick:function(){return c(!a)},isShow:a},i.createElement(d,null,i.createElement(u,{isShow:a},t),i.createElement(f,{isShow:a},n.length," issues")),i.createElement("div",null,l.description),i.createElement(h,{isShow:a},i.createElement("div",{style:{marginRight:"1rem"}},"Star: ",l.star),i.createElement("div",{style:{marginRight:"1rem"}},"Watch: ",l.watch),i.createElement("div",{style:{marginRight:"1rem"}},"Fork: ",l.fork)),i.createElement(p,{isShow:a},i.createElement("ul",{style:{paddingLeft:0}},n.map((function(e){return i.createElement(b,{key:e.number},i.createElement("div",{style:{minWidth:"4rem"}},"#",e.number),i.createElement("a",{target:"_blank",href:e.htmlUrl,style:{flex:"1 1 auto",textDecoration:"none",overflow:"hidden"}},e.title," "),e.comments>0?i.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},i.createElement(s,null),i.createElement("div",{style:{marginLeft:"0.25rem",fontSize:"0.5rem",color:"#333"}},e.comments)):"")}))))):null}}}]);