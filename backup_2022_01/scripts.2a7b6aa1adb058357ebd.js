!function(t){if(!t.hasInitialised){var e={escapeRegExp:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},hasClass:function(t,e){var i=" ";return 1===t.nodeType&&(i+t.className+i).replace(/[\n\t]/g,i).indexOf(i+e+i)>=0},addClass:function(t,e){t.className+=" "+e},removeClass:function(t,e){var i=new RegExp("\\b"+this.escapeRegExp(e)+"\\b");t.className=t.className.replace(i,"")},interpolateString:function(t,e){return t.replace(/{{([a-z][a-z0-9\-_]*)}}/gi,(function(t){return e(arguments[1])||""}))},getCookie:function(t){var e=("; "+document.cookie).split("; "+t+"=");return e.length<2?void 0:e.pop().split(";").shift()},setCookie:function(t,e,i,n,o,s){var r=new Date;r.setHours(r.getHours()+24*(i||365));var a=[t+"="+e,"expires="+r.toUTCString(),"path="+(o||"/")];n&&a.push("domain="+n),s&&a.push("secure"),document.cookie=a.join(";")},deepExtend:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(i in t&&this.isPlainObject(t[i])&&this.isPlainObject(e[i])?this.deepExtend(t[i],e[i]):t[i]=e[i]);return t},throttle:function(t,e){var i=!1;return function(){i||(t.apply(this,arguments),i=!0,setTimeout((function(){i=!1}),e))}},hash:function(t){var e,i,n=0;if(0===t.length)return n;for(e=0,i=t.length;e<i;++e)n=(n<<5)-n+t.charCodeAt(e),n|=0;return n},normaliseHex:function(t){return"#"==t[0]&&(t=t.substr(1)),3==t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t},getContrast:function(t){return t=this.normaliseHex(t),(299*parseInt(t.substr(0,2),16)+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3>=128?"#000":"#fff"},getLuminance:function(t){var e=parseInt(this.normaliseHex(t),16),i=38+(e>>16),n=38+(e>>8&255),o=38+(255&e);return"#"+(16777216+65536*(i<255?i<1?0:i:255)+256*(n<255?n<1?0:n:255)+(o<255?o<1?0:o:255)).toString(16).slice(1)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isPlainObject:function(t){return"object"==typeof t&&null!==t&&t.constructor==Object},traverseDOMPath:function(t,i){return t&&t.parentNode?e.hasClass(t,i)?t:this.traverseDOMPath(t.parentNode,i):null}};t.status={deny:"deny",allow:"allow",dismiss:"dismiss"},t.transitionEnd=function(){var t=document.createElement("div"),e={t:"transitionend",OT:"oTransitionEnd",msT:"MSTransitionEnd",MozT:"transitionend",WebkitT:"webkitTransitionEnd"};for(var i in e)if(e.hasOwnProperty(i)&&void 0!==t.style[i+"ransition"])return e[i];return""}(),t.hasTransition=!!t.transitionEnd;var i=Object.keys(t.status).map(e.escapeRegExp);t.customStyles={},t.Popup=function(){var n={enabled:!0,container:null,cookie:{name:"cookieconsent_status",path:"/",domain:"",expiryDays:365,secure:!1},onPopupOpen:function(){},onPopupClose:function(){},onInitialise:function(t){},onStatusChange:function(t,e){},onRevokeChoice:function(){},onNoCookieLaw:function(t,e){},content:{header:"Cookies used on the website!",message:"This website uses cookies to ensure you get the best experience on our website.",dismiss:"Got it!",allow:"Allow cookies",deny:"Decline",link:"Learn more",href:"https://www.cookiesandyou.com",close:"&#x274c;",target:"_blank",policy:"Cookie Policy"},elements:{header:'<span class="cc-header">{{header}}</span>&nbsp;',message:'<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',messagelink:'<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',dismiss:'<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',allow:'<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',deny:'<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',link:'<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',close:'<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'},window:'<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',revokeBtn:'<div class="cc-revoke {{classes}}">{{policy}}</div>',compliance:{info:'<div class="cc-compliance">{{dismiss}}</div>',"opt-in":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',"opt-out":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'},type:"info",layouts:{basic:"{{messagelink}}{{compliance}}","basic-close":"{{messagelink}}{{compliance}}{{close}}","basic-header":"{{header}}{{message}}{{link}}{{compliance}}"},layout:"basic",position:"bottom",theme:"block",static:!1,palette:null,revokable:!1,animateRevokable:!0,showLink:!0,dismissOnScroll:!1,dismissOnTimeout:!1,dismissOnWindowClick:!1,ignoreClicksFrom:["cc-revoke","cc-btn"],autoOpen:!0,autoAttach:!0,whitelistPage:[],blacklistPage:[],overrideHTML:null};function o(){this.initialise.apply(this,arguments)}function s(t){this.openingTimeout=null,e.removeClass(t,"cc-invisible")}function r(e){e.style.display="none",e.removeEventListener(t.transitionEnd,this.afterTransition),this.afterTransition=null}function a(){var t=this.options.position.split("-"),e=[];return t.forEach((function(t){e.push("cc-"+t)})),e}function c(n){var o=this.options,s=document.createElement("div"),r=o.container&&1===o.container.nodeType?o.container:document.body;s.innerHTML=n;var a=s.children[0];return a.style.display="none",e.hasClass(a,"cc-window")&&t.hasTransition&&e.addClass(a,"cc-invisible"),this.onButtonClick=(function(n){var o=e.traverseDOMPath(n.target,"cc-btn")||n.target;if(e.hasClass(o,"cc-btn")){var s=o.className.match(new RegExp("\\bcc-("+i.join("|")+")\\b")),r=s&&s[1]||!1;r&&(this.setStatus(r),this.close(!0))}e.hasClass(o,"cc-close")&&(this.setStatus(t.status.dismiss),this.close(!0)),e.hasClass(o,"cc-revoke")&&this.revokeChoice()}).bind(this),a.addEventListener("click",this.onButtonClick),o.autoAttach&&(r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a)),a}function l(t){return"000000"==(t=e.normaliseHex(t))?"#222":e.getLuminance(t)}function h(t,e){for(var i=0,n=t.length;i<n;++i){var o=t[i];if(o instanceof RegExp&&o.test(e)||"string"==typeof o&&o.length&&o===e)return!0}return!1}return o.prototype.initialise=function(i){this.options&&this.destroy(),e.deepExtend(this.options={},n),e.isPlainObject(i)&&e.deepExtend(this.options,i),(function(){var e=this.options.onInitialise.bind(this);if(!window.navigator.cookieEnabled)return e(t.status.deny),!0;if(window.CookiesOK||window.navigator.CookiesOK)return e(t.status.allow),!0;var i=Object.keys(t.status),n=this.getStatus(),o=i.indexOf(n)>=0;return o&&e(n),o}).call(this)&&(this.options.enabled=!1),h(this.options.blacklistPage,location.pathname)&&(this.options.enabled=!1),h(this.options.whitelistPage,location.pathname)&&(this.options.enabled=!0);var o=this.options.window.replace("{{classes}}",(function(){var i=this.options,n="top"==i.position||"bottom"==i.position?"banner":"floating";e.isMobile()&&(n="floating");var o=["cc-"+n,"cc-type-"+i.type,"cc-theme-"+i.theme];return i.static&&o.push("cc-static"),o.push.apply(o,a.call(this)),(function(i){var n=e.hash(JSON.stringify(i)),o="cc-color-override-"+n,s=e.isPlainObject(i);return this.customStyleSelector=s?o:null,s&&function(i,n,o){if(t.customStyles[i])++t.customStyles[i].references;else{var s={},r=n.popup,a=n.button,c=n.highlight;r&&(r.text=r.text?r.text:e.getContrast(r.background),r.link=r.link?r.link:r.text,s[o+".cc-window"]=["color: "+r.text,"background-color: "+r.background],s[o+".cc-revoke"]=["color: "+r.text,"background-color: "+r.background],s[o+" .cc-link,"+o+" .cc-link:active,"+o+" .cc-link:visited"]=["color: "+r.link],a&&(a.text=a.text?a.text:e.getContrast(a.background),a.border=a.border?a.border:"transparent",s[o+" .cc-btn"]=["color: "+a.text,"border-color: "+a.border,"background-color: "+a.background],a.padding&&s[o+" .cc-btn"].push("padding: "+a.padding),"transparent"!=a.background&&(s[o+" .cc-btn:hover, "+o+" .cc-btn:focus"]=["background-color: "+(a.hover||l(a.background))]),c?(c.text=c.text?c.text:e.getContrast(c.background),c.border=c.border?c.border:"transparent",s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+c.text,"border-color: "+c.border,"background-color: "+c.background]):s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+r.text]));var h=document.createElement("style");document.head.appendChild(h),t.customStyles[i]={references:1,element:h.sheet};var u=-1;for(var p in s)s.hasOwnProperty(p)&&h.sheet.insertRule(p+"{"+s[p].join(";")+"}",++u)}}(n,i,"."+o),s}).call(this,this.options.palette),this.customStyleSelector&&o.push(this.customStyleSelector),o}).call(this).join(" ")).replace("{{children}}",(function(){var t={},i=this.options;i.showLink||(i.elements.link="",i.elements.messagelink=i.elements.message),Object.keys(i.elements).forEach((function(n){t[n]=e.interpolateString(i.elements[n],(function(t){var e=i.content[t];return t&&"string"==typeof e&&e.length?e:""}))}));var n=i.compliance[i.type];n||(n=i.compliance.info),t.compliance=e.interpolateString(n,(function(e){return t[e]}));var o=i.layouts[i.layout];return o||(o=i.layouts.basic),e.interpolateString(o,(function(e){return t[e]}))}).call(this)),s=this.options.overrideHTML;if("string"==typeof s&&s.length&&(o=s),this.options.static){var r=c.call(this,'<div class="cc-grower">'+o+"</div>");r.style.display="",this.element=r.firstChild,this.element.style.display="none",e.addClass(this.element,"cc-invisible")}else this.element=c.call(this,o);(function(){var i=this.setStatus.bind(this),n=this.close.bind(this),o=this.options.dismissOnTimeout;"number"==typeof o&&o>=0&&(this.dismissTimeout=window.setTimeout((function(){i(t.status.dismiss),n(!0)}),Math.floor(o)));var s=this.options.dismissOnScroll;if("number"==typeof s&&s>=0){var r=function(e){window.pageYOffset>Math.floor(s)&&(i(t.status.dismiss),n(!0),window.removeEventListener("scroll",r),this.onWindowScroll=null)};this.options.enabled&&(this.onWindowScroll=r,window.addEventListener("scroll",r))}var a=this.options.ignoreClicksFrom;if(this.options.dismissOnWindowClick){var c=(function(o){for(var s=!1,r=o.path.length,l=a.length,h=0;h<r;h++)if(!s)for(var u=0;u<l;u++)s||(s=e.hasClass(o.path[h],a[u]));s||(i(t.status.dismiss),n(!0),window.removeEventListener("click",c),window.removeEventListener("touchend",c),this.onWindowClick=null)}).bind(this);this.options.enabled&&(this.onWindowClick=c,window.addEventListener("click",c),window.addEventListener("touchend",c))}}).call(this),(function(){if("info"!=this.options.type&&(this.options.revokable=!0),e.isMobile()&&(this.options.animateRevokable=!1),this.options.revokable){var t=a.call(this);this.options.animateRevokable&&t.push("cc-animate"),this.customStyleSelector&&t.push(this.customStyleSelector);var i=this.options.revokeBtn.replace("{{classes}}",t.join(" ")).replace("{{policy}}",this.options.content.policy);this.revokeBtn=c.call(this,i);var n=this.revokeBtn;if(this.options.animateRevokable){var o=e.throttle((function(t){var i=!1,o=window.innerHeight-20;e.hasClass(n,"cc-top")&&t.clientY<20&&(i=!0),e.hasClass(n,"cc-bottom")&&t.clientY>o&&(i=!0),i?e.hasClass(n,"cc-active")||e.addClass(n,"cc-active"):e.hasClass(n,"cc-active")&&e.removeClass(n,"cc-active")}),200);this.onMouseMove=o,window.addEventListener("mousemove",o)}}}).call(this),this.options.autoOpen&&this.autoOpen()},o.prototype.destroy=function(){this.onButtonClick&&this.element&&(this.element.removeEventListener("click",this.onButtonClick),this.onButtonClick=null),this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null),this.onWindowScroll&&(window.removeEventListener("scroll",this.onWindowScroll),this.onWindowScroll=null),this.onWindowClick&&(window.removeEventListener("click",this.onWindowClick),this.onWindowClick=null),this.onMouseMove&&(window.removeEventListener("mousemove",this.onMouseMove),this.onMouseMove=null),this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.revokeBtn&&this.revokeBtn.parentNode&&this.revokeBtn.parentNode.removeChild(this.revokeBtn),this.revokeBtn=null,function(i){if(e.isPlainObject(i)){var n=e.hash(JSON.stringify(i)),o=t.customStyles[n];if(o&&!--o.references){var s=o.element.ownerNode;s&&s.parentNode&&s.parentNode.removeChild(s),t.customStyles[n]=null}}}(this.options.palette),this.options=null},o.prototype.open=function(e){if(this.element)return this.isOpen()||(t.hasTransition?this.fadeIn():this.element.style.display="",this.options.revokable&&this.toggleRevokeButton(),this.options.onPopupOpen.call(this)),this},o.prototype.close=function(e){if(this.element)return this.isOpen()&&(t.hasTransition?this.fadeOut():this.element.style.display="none",e&&this.options.revokable&&this.toggleRevokeButton(!0),this.options.onPopupClose.call(this)),this},o.prototype.fadeIn=function(){var i=this.element;t.hasTransition&&i&&(this.afterTransition&&r.call(this,i),e.hasClass(i,"cc-invisible"))&&(i.style.display="",this.options.static&&(this.element.parentNode.style.maxHeight=this.element.clientHeight+"px"),this.openingTimeout=setTimeout(s.bind(this,i),20))},o.prototype.fadeOut=function(){var i=this.element;t.hasTransition&&i&&(this.openingTimeout&&(clearTimeout(this.openingTimeout),s.bind(this,i)),e.hasClass(i,"cc-invisible")||(this.options.static&&(this.element.parentNode.style.maxHeight=""),this.afterTransition=r.bind(this,i),i.addEventListener(t.transitionEnd,this.afterTransition),e.addClass(i,"cc-invisible")))},o.prototype.isOpen=function(){return this.element&&""==this.element.style.display&&(!t.hasTransition||!e.hasClass(this.element,"cc-invisible"))},o.prototype.toggleRevokeButton=function(t){this.revokeBtn&&(this.revokeBtn.style.display=t?"":"none")},o.prototype.revokeChoice=function(t){this.options.enabled=!0,this.clearStatus(),this.options.onRevokeChoice.call(this),t||this.autoOpen()},o.prototype.hasAnswered=function(e){return Object.keys(t.status).indexOf(this.getStatus())>=0},o.prototype.hasConsented=function(e){var i=this.getStatus();return i==t.status.allow||i==t.status.dismiss},o.prototype.autoOpen=function(t){!this.hasAnswered()&&this.options.enabled?this.open():this.hasAnswered()&&this.options.revokable&&this.toggleRevokeButton(!0)},o.prototype.setStatus=function(i){var n=this.options.cookie,o=e.getCookie(n.name),s=Object.keys(t.status).indexOf(o)>=0;Object.keys(t.status).indexOf(i)>=0?(e.setCookie(n.name,i,n.expiryDays,n.domain,n.path,n.secure),this.options.onStatusChange.call(this,i,s)):this.clearStatus()},o.prototype.getStatus=function(){return e.getCookie(this.options.cookie.name)},o.prototype.clearStatus=function(){var t=this.options.cookie;e.setCookie(t.name,"",-1,t.domain,t.path)},o}(),t.Location=function(){var t={timeout:5e3,services:["ipinfo"],serviceDefinitions:{ipinfo:function(){return{url:"//ipinfo.io",headers:["Accept: application/json"],callback:function(t,e){try{var i=JSON.parse(e);return i.error?s(i):{code:i.country}}catch(t){return s({error:"Invalid response ("+t+")"})}}}},ipinfodb:function(t){return{url:"//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",isScript:!0,callback:function(t,e){try{var i=JSON.parse(e);return"ERROR"==i.statusCode?s({error:i.statusMessage}):{code:i.countryCode}}catch(t){return s({error:"Invalid response ("+t+")"})}}}},maxmind:function(){return{url:"//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",isScript:!0,callback:function(t){window.geoip2?geoip2.country((function(e){try{t({code:e.country.iso_code})}catch(e){t(s(e))}}),(function(e){t(s(e))})):t(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))}}}}};function i(i){e.deepExtend(this.options={},t),e.isPlainObject(i)&&e.deepExtend(this.options,i),this.currentServiceIndex=-1}function n(t,e,i){var n,o=document.createElement("script");o.type="text/"+(t.type||"javascript"),o.src=t.src||t,o.async=!1,o.onreadystatechange=o.onload=function(){var t=o.readyState;clearTimeout(n),e.done||t&&!/loaded|complete/.test(t)||(e.done=!0,e(),o.onreadystatechange=o.onload=null)},document.body.appendChild(o),n=setTimeout((function(){e.done=!0,e(),o.onreadystatechange=o.onload=null}),i)}function o(t,e,i,n,o){var s=new(window.XMLHttpRequest||window.ActiveXObject)("MSXML2.XMLHTTP.3.0");if(s.open(n?"POST":"GET",t,1),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),Array.isArray(o))for(var r=0,a=o.length;r<a;++r){var c=o[r].split(":",2);s.setRequestHeader(c[0].replace(/^\s+|\s+$/g,""),c[1].replace(/^\s+|\s+$/g,""))}"function"==typeof e&&(s.onreadystatechange=function(){s.readyState>3&&e(s)}),s.send(n)}function s(t){return new Error("Error ["+(t.code||"UNKNOWN")+"]: "+t.error)}return i.prototype.getNextService=function(){var t;do{t=this.getServiceByIdx(++this.currentServiceIndex)}while(this.currentServiceIndex<this.options.services.length&&!t);return t},i.prototype.getServiceByIdx=function(t){var i=this.options.services[t];if("function"==typeof i){var n=i();return n.name&&e.deepExtend(n,this.options.serviceDefinitions[n.name](n)),n}return"string"==typeof i?this.options.serviceDefinitions[i]():e.isPlainObject(i)?this.options.serviceDefinitions[i.name](i):null},i.prototype.locate=function(t,e){var i=this.getNextService();i?(this.callbackComplete=t,this.callbackError=e,this.runService(i,this.runNextServiceOnError.bind(this))):e(new Error("No services to run"))},i.prototype.setupUrl=function(t){var e=this.getCurrentServiceOpts();return t.url.replace(/\{(.*?)\}/g,(function(i,n){if("callback"===n){var o="callback"+Date.now();return window[o]=function(e){t.__JSONP_DATA=JSON.stringify(e)},o}if(n in e.interpolateUrl)return e.interpolateUrl[n]}))},i.prototype.runService=function(t,e){var i=this;t&&t.url&&t.callback&&(t.isScript?n:o)(this.setupUrl(t),(function(n){var o=n?n.responseText:"";t.__JSONP_DATA&&(o=t.__JSONP_DATA,delete t.__JSONP_DATA),i.runServiceCallback.call(i,e,t,o)}),this.options.timeout,t.data,t.headers)},i.prototype.runServiceCallback=function(t,e,i){var n=this,o=e.callback((function(e){o||n.onServiceResult.call(n,t,e)}),i);o&&this.onServiceResult.call(this,t,o)},i.prototype.onServiceResult=function(t,e){e instanceof Error||e&&e.error?t.call(this,e,null):t.call(this,null,e)},i.prototype.runNextServiceOnError=function(t,e){if(t){this.logError(t);var i=this.getNextService();i?this.runService(i,this.runNextServiceOnError.bind(this)):this.completeService.call(this,this.callbackError,new Error("All services failed"))}else this.completeService.call(this,this.callbackComplete,e)},i.prototype.getCurrentServiceOpts=function(){var t=this.options.services[this.currentServiceIndex];return"string"==typeof t?{name:t}:"function"==typeof t?t():e.isPlainObject(t)?t:{}},i.prototype.completeService=function(t,e){this.currentServiceIndex=-1,t&&t(e)},i.prototype.logError=function(t){var e=this.currentServiceIndex,i=this.getServiceByIdx(e);console.warn("The service["+e+"] ("+i.url+") responded with the following error",t)},i}(),t.Law=function(){var t={regionalLaw:!0,hasLaw:["AT","BE","BG","HR","CZ","CY","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","SK","ES","SE","GB","UK","GR","EU"],revokable:["HR","CY","DK","EE","FR","DE","LV","LT","NL","PT","ES"],explicitAction:["HR","IT","ES"]};function i(t){this.initialise.apply(this,arguments)}return i.prototype.initialise=function(i){e.deepExtend(this.options={},t),e.isPlainObject(i)&&e.deepExtend(this.options,i)},i.prototype.get=function(t){var e=this.options;return{hasLaw:e.hasLaw.indexOf(t)>=0,revokable:e.revokable.indexOf(t)>=0,explicitAction:e.explicitAction.indexOf(t)>=0}},i.prototype.applyLaw=function(t,e){var i=this.get(e);return i.hasLaw||(t.enabled=!1,"function"==typeof t.onNoCookieLaw&&t.onNoCookieLaw(e,i)),this.options.regionalLaw&&(i.revokable&&(t.revokable=!0),i.explicitAction&&(t.dismissOnScroll=!1,t.dismissOnTimeout=!1)),t},i}(),t.initialise=function(i,n,o){var s=new t.Law(i.law);n||(n=function(){}),o||(o=function(){});var r=Object.keys(t.status),a=e.getCookie("cookieconsent_status");r.indexOf(a)>=0?n(new t.Popup(i)):t.getCountryCode(i,(function(e){delete i.law,delete i.location,e.code&&(i=s.applyLaw(i,e.code)),n(new t.Popup(i))}),(function(e){delete i.law,delete i.location,o(e,new t.Popup(i))}))},t.getCountryCode=function(e,i,n){e.law&&e.law.countryCode?i({code:e.law.countryCode}):e.location?new t.Location(e.location).locate((function(t){i(t||{})}),n):i({})},t.utils=e,t.hasInitialised=!0,window.cookieconsent=t}}(window.cookieconsent||{}),function t(e,i,n){function o(r,a){if(!i[r]){if(!e[r]){var c="function"==typeof require&&require;if(!a&&c)return c(r,!0);if(s)return s(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var h=i[r]={exports:{}};e[r][0].call(h.exports,(function(t){return o(e[r][1][t]||t)}),h,h.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){if(!n)var n={map:function(t,e){var i={};return e?t.map((function(t,n){return i.index=n,e.call(i,t)})):t.slice()},naturalOrder:function(t,e){return t<e?-1:t>e?1:0},sum:function(t,e){var i={};return t.reduce(e?function(t,n,o){return i.index=o,t+e.call(i,n)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?n.map(t,e):t)}};var o=function(){var t=5,e=8-t,i=1e3;function o(e,i,n){return(e<<2*t)+(i<<t)+n}function s(t){var e=[],i=!1;function n(){e.sort(t),i=!0}return{push:function(t){e.push(t),i=!1},peek:function(t){return i||n(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return i||n(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return i||n(),e}}}function r(t,e,i,n,o,s,r){this.r1=t,this.r2=e,this.g1=i,this.g2=n,this.b1=o,this.b2=s,this.histo=r}function a(){this.vboxes=new s((function(t,e){return n.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())}))}function c(t,e){if(e.count()){var i=e.r2-e.r1+1,s=e.g2-e.g1+1,r=n.max([i,s,e.b2-e.b1+1]);if(1==e.count())return[e.copy()];var a,c,l,h,u=0,p=[],d=[];if(r==i)for(a=e.r1;a<=e.r2;a++){for(h=0,c=e.g1;c<=e.g2;c++)for(l=e.b1;l<=e.b2;l++)h+=t[o(a,c,l)]||0;p[a]=u+=h}else if(r==s)for(a=e.g1;a<=e.g2;a++){for(h=0,c=e.r1;c<=e.r2;c++)for(l=e.b1;l<=e.b2;l++)h+=t[o(c,a,l)]||0;p[a]=u+=h}else for(a=e.b1;a<=e.b2;a++){for(h=0,c=e.r1;c<=e.r2;c++)for(l=e.g1;l<=e.g2;l++)h+=t[o(c,l,a)]||0;p[a]=u+=h}return p.forEach((function(t,e){d[e]=u-t})),function(t){var i,n,o,s,r,c=t+"1",l=t+"2",h=0;for(a=e[c];a<=e[l];a++)if(p[a]>u/2){for(o=e.copy(),s=e.copy(),r=(i=a-e[c])<=(n=e[l]-a)?Math.min(e[l]-1,~~(a+n/2)):Math.max(e[c],~~(a-1-i/2));!p[r];)r++;for(h=d[r];!h&&p[r-1];)h=d[--r];return o[l]=r,s[c]=o[l]+1,[o,s]}}(r==i?"r":r==s?"g":"b")}}return r.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(t){var e=this.histo;if(!this._count_set||t){var i,n,s,r=0;for(i=this.r1;i<=this.r2;i++)for(n=this.g1;n<=this.g2;n++)for(s=this.b1;s<=this.b2;s++)r+=e[o(i,n,s)]||0;this._count=r,this._count_set=!0}return this._count},copy:function(){return new r(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(e){var i=this.histo;if(!this._avg||e){var n,s,r,a,c=0,l=1<<8-t,h=0,u=0,p=0;for(s=this.r1;s<=this.r2;s++)for(r=this.g1;r<=this.g2;r++)for(a=this.b1;a<=this.b2;a++)c+=n=i[o(s,r,a)]||0,h+=n*(s+.5)*l,u+=n*(r+.5)*l,p+=n*(a+.5)*l;this._avg=c?[~~(h/c),~~(u/c),~~(p/c)]:[~~(l*(this.r1+this.r2+1)/2),~~(l*(this.g1+this.g2+1)/2),~~(l*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var i=t[0]>>e;return gval=t[1]>>e,bval=t[2]>>e,i>=this.r1&&i<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},a.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,i=0;i<e.size();i++)if(e.peek(i).vbox.contains(t))return e.peek(i).color;return this.nearest(t)},nearest:function(t){for(var e,i,n,o=this.vboxes,s=0;s<o.size();s++)((i=Math.sqrt(Math.pow(t[0]-o.peek(s).color[0],2)+Math.pow(t[1]-o.peek(s).color[1],2)+Math.pow(t[2]-o.peek(s).color[2],2)))<e||void 0===e)&&(e=i,n=o.peek(s).color);return n},forcebw:function(){var t=this.vboxes;t.sort((function(t,e){return n.naturalOrder(n.sum(t.color),n.sum(e.color))}));var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var i=t.length-1,o=t[i].color;o[0]>251&&o[1]>251&&o[2]>251&&(t[i].color=[255,255,255])}},{quantize:function(l,h){if(!l.length||h<2||h>256)return!1;var u=function(i){var n,s=new Array(1<<3*t);return i.forEach((function(t){n=o(t[0]>>e,t[1]>>e,t[2]>>e),s[n]=(s[n]||0)+1})),s}(l);u.forEach((function(){}));var p=function(t,i){var n,o,s,a=1e6,c=0,l=1e6,h=0,u=1e6,p=0;return t.forEach((function(t){(n=t[0]>>e)<a?a=n:n>c&&(c=n),(o=t[1]>>e)<l?l=o:o>h&&(h=o),(s=t[2]>>e)<u?u=s:s>p&&(p=s)})),new r(a,c,l,h,u,p,i)}(l,u),d=new s((function(t,e){return n.naturalOrder(t.count(),e.count())}));function f(t,e){for(var n,o=1,s=0;s<i;)if((n=t.pop()).count()){var r=c(u,n),a=r[0],l=r[1];if(!a)return;if(t.push(a),l&&(t.push(l),o++),o>=e)return;if(s++>i)return}else t.push(n),s++}d.push(p),f(d,.75*h);for(var v=new s((function(t,e){return n.naturalOrder(t.count()*t.volume(),e.count()*e.volume())}));d.size();)v.push(d.pop());f(v,h-v.size());for(var g=new a;v.size();)g.push(v.pop());return g}}}();e.exports=o.quantize},{}],2:[function(t,e,i){(function(){var e,i,n,o=function(t,e){return function(){return t.apply(e,arguments)}},s=[].slice;window.Swatch=i=function(){function t(t,e){this.rgb=t,this.population=e}return t.prototype.hsl=void 0,t.prototype.rgb=void 0,t.prototype.population=1,t.yiq=0,t.prototype.getHsl=function(){return this.hsl?this.hsl:this.hsl=n.rgbToHsl(this.rgb[0],this.rgb[1],this.rgb[2])},t.prototype.getPopulation=function(){return this.population},t.prototype.getRgb=function(){return this.rgb},t.prototype.getHex=function(){return"#"+((1<<24)+(this.rgb[0]<<16)+(this.rgb[1]<<8)+this.rgb[2]).toString(16).slice(1,7)},t.prototype.getTitleTextColor=function(){return this._ensureTextColors(),this.yiq<200?"#fff":"#000"},t.prototype.getBodyTextColor=function(){return this._ensureTextColors(),this.yiq<150?"#fff":"#000"},t.prototype._ensureTextColors=function(){if(!this.yiq)return this.yiq=(299*this.rgb[0]+587*this.rgb[1]+114*this.rgb[2])/1e3},t}(),window.Vibrant=n=function(){function n(t,n,s){var r,a,c,l,h,u,p,d,f,v;this.swatches=o(this.swatches,this),void 0===n&&(n=64),void 0===s&&(s=5),u=new e(t);try{for(f=u.getImageData().data,d=u.getPixelCount(),r=[],h=0;h<d;)v=f[0+(p=4*h)],l=f[p+1],a=f[p+2],f[p+3]>=125&&(v>250&&l>250&&a>250||r.push([v,l,a])),h+=s;c=this.quantize(r,n),this._swatches=c.vboxes.map((function(t){return new i(t.color,t.vbox.count())})),this.maxPopulation=this.findMaxPopulation,this.generateVarationColors(),this.generateEmptySwatches()}finally{u.removeCanvas()}}return n.prototype.quantize=t("quantize"),n.prototype._swatches=[],n.prototype.TARGET_DARK_LUMA=.26,n.prototype.MAX_DARK_LUMA=.45,n.prototype.MIN_LIGHT_LUMA=.55,n.prototype.TARGET_LIGHT_LUMA=.74,n.prototype.MIN_NORMAL_LUMA=.3,n.prototype.TARGET_NORMAL_LUMA=.5,n.prototype.MAX_NORMAL_LUMA=.7,n.prototype.TARGET_MUTED_SATURATION=.3,n.prototype.MAX_MUTED_SATURATION=.4,n.prototype.TARGET_VIBRANT_SATURATION=1,n.prototype.MIN_VIBRANT_SATURATION=.35,n.prototype.WEIGHT_SATURATION=3,n.prototype.WEIGHT_LUMA=6,n.prototype.WEIGHT_POPULATION=1,n.prototype.VibrantSwatch=void 0,n.prototype.MutedSwatch=void 0,n.prototype.DarkVibrantSwatch=void 0,n.prototype.DarkMutedSwatch=void 0,n.prototype.LightVibrantSwatch=void 0,n.prototype.LightMutedSwatch=void 0,n.prototype.HighestPopulation=0,n.prototype.generateVarationColors=function(){return this.VibrantSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.LightVibrantSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.DarkVibrantSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.MutedSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION),this.LightMutedSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION),this.DarkMutedSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION)},n.prototype.generateEmptySwatches=function(){var t;if(void 0===this.VibrantSwatch&&void 0!==this.DarkVibrantSwatch&&((t=this.DarkVibrantSwatch.getHsl())[2]=this.TARGET_NORMAL_LUMA,this.VibrantSwatch=new i(n.hslToRgb(t[0],t[1],t[2]),0)),void 0===this.DarkVibrantSwatch&&void 0!==this.VibrantSwatch)return(t=this.VibrantSwatch.getHsl())[2]=this.TARGET_DARK_LUMA,this.DarkVibrantSwatch=new i(n.hslToRgb(t[0],t[1],t[2]),0)},n.prototype.findMaxPopulation=function(){var t,e,i,n;for(i=0,t=0,e=(n=this._swatches).length;t<e;t++)i=Math.max(i,n[t].getPopulation());return i},n.prototype.findColorVariation=function(t,e,i,n,o,s){var r,a,c,l,h,u,p,d,f;for(l=void 0,h=0,r=0,a=(u=this._swatches).length;r<a;r++)p=(d=u[r]).getHsl()[1],c=d.getHsl()[2],p>=o&&p<=s&&c>=e&&c<=i&&!this.isAlreadySelected(d)&&(f=this.createComparisonValue(p,n,c,t,d.getPopulation(),this.HighestPopulation),(void 0===l||f>h)&&(l=d,h=f));return l},n.prototype.createComparisonValue=function(t,e,i,n,o,s){return this.weightedMean(this.invertDiff(t,e),this.WEIGHT_SATURATION,this.invertDiff(i,n),this.WEIGHT_LUMA,o/s,this.WEIGHT_POPULATION)},n.prototype.invertDiff=function(t,e){return 1-Math.abs(t-e)},n.prototype.weightedMean=function(){var t,e,i,n,o;for(n=1<=arguments.length?s.call(arguments,0):[],e=0,i=0,t=0;t<n.length;)e+=n[t]*(o=n[t+1]),i+=o,t+=2;return e/i},n.prototype.swatches=function(){return{Vibrant:this.VibrantSwatch,Muted:this.MutedSwatch,DarkVibrant:this.DarkVibrantSwatch,DarkMuted:this.DarkMutedSwatch,LightVibrant:this.LightVibrantSwatch,LightMuted:this.LightMuted}},n.prototype.isAlreadySelected=function(t){return this.VibrantSwatch===t||this.DarkVibrantSwatch===t||this.LightVibrantSwatch===t||this.MutedSwatch===t||this.DarkMutedSwatch===t||this.LightMutedSwatch===t},n.rgbToHsl=function(t,e,i){var n,o,s,r,a,c;if(t/=255,e/=255,i/=255,o=void 0,c=void 0,s=((r=Math.max(t,e,i))+(a=Math.min(t,e,i)))/2,r===a)o=c=0;else{switch(n=r-a,c=s>.5?n/(2-r-a):n/(r+a),r){case t:o=(e-i)/n+(e<i?6:0);break;case e:o=(i-t)/n+2;break;case i:o=(t-e)/n+4}o/=6}return[o,c,s]},n.hslToRgb=function(t,e,i){var n,o,s,r,a,c;return c=void 0,o=void 0,n=void 0,s=function(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t},0===e?c=o=n=i:(c=s(r=2*i-(a=i<.5?i*(1+e):i+e-i*e),a,t+1/3),o=s(r,a,t),n=s(r,a,t-1/3)),[255*c,255*o,255*n]},n}(),window.CanvasImage=e=function(){function t(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)}return t.prototype.clear=function(){return this.context.clearRect(0,0,this.width,this.height)},t.prototype.update=function(t){return this.context.putImageData(t,0,0)},t.prototype.getPixelCount=function(){return this.width*this.height},t.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},t.prototype.removeCanvas=function(){return this.canvas.parentNode.removeChild(this.canvas)},t}()}).call(this)},{quantize:1}]},{},[2]);