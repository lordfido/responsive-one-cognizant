(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var o=r.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!t;)t=o[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var t,r,o=function(e){var t,r=e.cssFileName,o=e.doc,n=void 0===o?document:o,i=n.createElement("link");i.href=chrome.runtime.getURL("/css/".concat(r)),i.rel="stylesheet",i.type="text/css";var l=null!==(t=null==n?void 0:n.head)&&void 0!==t?t:null==n?void 0:n.body;(null==l?void 0:l.append)&&!function(e){var t=e.element,r=e.file;return Array.from(t.childNodes).some((function(e){var t,o;return"LINK"===e.tagName&&(null===(t=e.hasAttribute)||void 0===t?void 0:t.call(e,"href"))&&(null===(o=e.getAttribute)||void 0===o?void 0:o.call(e,"href"))===r}))}({element:l,file:i.href})&&(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.log.apply(console,function(e,t,r){if(r||2===arguments.length)for(var o,n=0,i=t.length;n<i;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}(["[ROC]"],function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,i=r.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)l.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return l}(e),!1))}("Loading file",i.href,l),l.append(i))};e.p,r=function(){var e;void 0===e&&(e=document),o({doc:e,cssFileName:"goPerform.css"}),function(e){clearInterval(t),t=setInterval((function(){!function(e){var t=e.querySelector("#goals-supervisor > .second-table-container");t&&(t.style.height="auto");var r=e.querySelector("#div_headerRow");r&&(r.style.width="auto");var o=e.querySelector("div#body > section > div[role=main] > .main #yea .contentYeaBefore > .supervisorCmtsAssociate > .supervisorCmtsAssHead > font");o&&(o.style.paddingLeft="0")}(e),function(e){var t=e.querySelector("#interim_check_in .feedback_position > .keyContribution > .keyContent");t&&(t.style.width="auto")}(e)}),500)}(document)},document.onload=function(){r()},r()})();