(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var o=r.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!t;)t=o[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var t,r;e.p,r=function(){var e;void 0===e&&(e=document),function(e){var t,r=e.cssFileName,o=e.doc,n=void 0===o?document:o,i=n.createElement("link");i.href=chrome.runtime.getURL("/css/".concat(r)),i.rel="stylesheet",i.type="text/css";var c=null!==(t=null==n?void 0:n.head)&&void 0!==t?t:null==n?void 0:n.body;(null==c?void 0:c.append)&&!function(e){var t=e.element,r=e.file;return Array.from(t.childNodes).some((function(e){var t,o;return"LINK"===e.tagName&&(null===(t=e.hasAttribute)||void 0===t?void 0:t.call(e,"href"))&&(null===(o=e.getAttribute)||void 0===o?void 0:o.call(e,"href"))===r}))}({element:c,file:i.href})&&(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]}("Loading file",i.href,c),c.append(i))}({doc:e,cssFileName:"goPerform.css"}),function(e){clearInterval(t),t=setInterval((function(){!function(e){var t=e.querySelector("#goals-supervisor > .second-table-container");t&&(t.style.height="auto");var r=e.querySelector("#div_headerRow");r&&(r.style.width="auto");var o=e.querySelector("div#body > section > div[role=main] > .main #yea .contentYeaBefore > .supervisorCmtsAssociate > .supervisorCmtsAssHead > font");o&&(o.style.paddingLeft="0")}(e),function(e){var t=e.querySelector("#interim_check_in .feedback_position > .keyContribution > .keyContent");t&&(t.style.width="auto")}(e)}),500)}(document)},document.onload=function(){r()},r()})();