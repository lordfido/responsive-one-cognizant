(()=>{"use strict";var e={631:(e,t,n)=>{e.exports=n.p+"../images/associate360.png"},955:(e,t,n)=>{e.exports=n.p+"../images/cognizant_logo.png"},495:(e,t,n)=>{e.exports=n.p+"../images/goPerform.png"},246:(e,t,n)=>{e.exports=n.p+"../images/myLearningStudio.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})();var r={rootLink:{icon:n(955),name:"One Cognizant",url:"https://onecognizant.cognizant.com"},associate360:{icon:n(631),name:"Associate 360",url:"https://onecognizantbcazrapps.cognizant.com/2736"},goPerform:{icon:n(495),name:"Go Perform",url:"https://onecognizantbcazrapps.cognizant.com/2394"},myLearningStudio:{icon:n(246),name:"My Learning Studio",url:"https://onecognizantazrapps.cognizant.com/1738"}},o=('iframe[src="'.concat(r.associate360.url,'"]'),'iframe[src="'.concat(r.goPerform.url,'"]'),'iframe[src="'.concat(r.myLearningStudio.url,'"]'),!1),a=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]};n.p;var i,c,s,l=(void 0===i&&(i=1e3),void 0===c&&(c=o),c&&a("createDebouncedInterval",i),function(e){clearInterval(s),s=setInterval(e,i)});!function(e){var t=e.frameName,n=e.handleOnLoad;a("useAppInit",{frameName:t});var o=function(){(function(e){if(a("useAppMetadata",{frameName:e}),document){var t=r[e];document.title=t.name,document.querySelectorAll('link[rel~="icon"]').forEach((function(e){e.remove()}));var n=chrome.runtime.getURL("/images/".concat(e,".png")),o=document.createElement("link");o.rel="shortcut icon",o.href=n;var i=document.createElement("link");i.rel="icon",i.href=n,i.type="image/x-icon",i.setAttribute("sizes","16x16"),document.head.append(o),document.head.append(i)}})(t),function(e){var t,n=e.cssFileName,r=e.doc,o=void 0===r?document:r,i=o.createElement("link");i.href=chrome.runtime.getURL("/css/".concat(n)),i.rel="stylesheet",i.type="text/css";var c=null!==(t=null==o?void 0:o.head)&&void 0!==t?t:null==o?void 0:o.body;(null==c?void 0:c.append)&&!function(e){var t=e.element,n=e.file;return Array.from(t.childNodes).some((function(e){var t,r;return"LINK"===e.tagName&&(null===(t=e.hasAttribute)||void 0===t?void 0:t.call(e,"href"))&&(null===(r=e.getAttribute)||void 0===r?void 0:r.call(e,"href"))===n}))}({element:c,file:i.href})&&(a("loadFile",i.href),c.append(i))}({doc:document,cssFileName:"".concat(t,".css")}),a(t,"handleOnLoad"),n()};document.onload=function(){o()},o()}({frameName:"associate360",handleOnLoad:function(){l((function(){}))}})})();