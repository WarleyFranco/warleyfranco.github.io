!function(e,t,n,o,r,c,a){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,c=t.createElement(n),a=t.getElementsByTagName(n)[0],c.async=1,c.src=o,a.parentNode.insertBefore(c,a)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-90407813-1","auto"),ga("send","pageview"),function(){var e={};e.mobileCheck=function(){var e=document.querySelector("body");return e.offsetWidth<=768},e.ityped=function(){ityped.init(".ityped",{strings:["HTML5","CSS3","JavaScript","Ecommerce Vtex","WordPress","Apps Híbridos","Sistemas","Soluções para web"],typeSpeed:150,pause:1500,backDelay:1e3,loop:!0})},e.videoSwitch=function(){if(e.mobileCheck())e.ityped();else{var t=new XMLHttpRequest;t.open("GET","/video-section.html",!0),t.onload=function(){t.status>=200&&t.status<400?(document.querySelector(".video-section").innerHTML=t.responseText,e.ityped()):console.log("Reached the server, but has an error")},t.onerror=function(){console.log("Request Error")},t.send()}},e.headroom=function(){var e=document.querySelector("header"),t=new Headroom(e);t.init()},e.menuClick=function(){for(var e=document.querySelectorAll(".menu-link"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){document.getElementById("menu-toggle").checked=!1})},e.init=function(){console.log("WTK Initialized"),e.videoSwitch(),e.headroom(),e.menuClick()},e.init()}(),!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,o,r,c,a,i,l={},u="querySelector"in document&&"addEventListener"in e,s={selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){}},d=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=d(!0,e[o],n[o]):e[o]=n[o])};n<o;n++){var c=arguments[n];r(c)}return e},f=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},h=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},m=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,c="",a=n.charCodeAt(0);++r<o;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");c+=t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===a?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+c},p=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=t<.5?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},g=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=Math.max(o-t-n,0),Math.min(o,v()-y())},y=function(){return Math.max(document.documentElement.clientHeight,e.innerHeight||0)},v=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},b=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},S=function(e){return e?f(e)+e.offsetTop:0},E=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))};l.animateScroll=function(n,o,a){var l=b(o?o.getAttribute("data-options"):null),u=d(t||s,a||{},l),f="[object Number]"===Object.prototype.toString.call(n),h=f||!n.tagName?null:n;if(f||h){var m=e.pageYOffset;u.selectorHeader&&!r&&(r=document.querySelector(u.selectorHeader)),c||(c=S(r));var y,H,O=f?n:g(h,c,parseInt(u.offset,10)),w=O-m,I=v(),A=0,C=function(t,r,c){var a=e.pageYOffset;(t==r||a==r||e.innerHeight+a>=I)&&(clearInterval(c),E(n,r,f),u.callback(n,o))},k=function(){A+=16,y=A/parseInt(u.speed,10),y=y>1?1:y,H=m+w*p(u.easing,y),e.scrollTo(0,Math.floor(H)),C(H,O,i)},q=function(){clearInterval(i),i=setInterval(k,16)};0===e.pageYOffset&&e.scrollTo(0,0),q()}};var H=function(t){var r;try{r=m(decodeURIComponent(e.location.hash))}catch(t){r=m(e.location.hash)}n&&(n.id=n.getAttribute("data-scroll-id"),l.animateScroll(n,o),n=null,o=null)},O=function(r){if(0===r.button&&!r.metaKey&&!r.ctrlKey&&(o=h(r.target,t.selector),o&&"a"===o.tagName.toLowerCase()&&o.hostname===e.location.hostname&&o.pathname===e.location.pathname&&/#/.test(o.href))){var c;try{c=m(decodeURIComponent(o.hash))}catch(e){c=m(o.hash)}if("#"===c){r.preventDefault(),n=document.body;var a=n.id?n.id:"smooth-scroll-top";return n.setAttribute("data-scroll-id",a),n.id="",void(e.location.hash.substring(1)===a?H():e.location.hash=a)}n=document.querySelector(c),n&&(n.setAttribute("data-scroll-id",n.id),n.id="",o.hash===e.location.hash&&(r.preventDefault(),H()))}},w=function(e){a||(a=setTimeout(function(){a=null,c=S(r)},66))};return l.destroy=function(){t&&(document.removeEventListener("click",O,!1),e.removeEventListener("resize",w,!1),t=null,n=null,o=null,r=null,c=null,a=null,i=null)},l.init=function(n){u&&(l.destroy(),t=d(s,n||{}),r=t.selectorHeader?document.querySelector(t.selectorHeader):null,c=S(r),document.addEventListener("click",O,!1),e.addEventListener("hashchange",H,!1),r&&e.addEventListener("resize",w,!1))},l}),smoothScroll.init();