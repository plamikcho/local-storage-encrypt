!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pbcrypto=t():e.pbcrypto=t()}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=48)}({37:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=86)}({17:function(e,t,r){var n,i,o;i=[t],void 0===(o="function"==typeof(n=function(r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return t=e,(r=[{key:"getFirstMatch",value:function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""}},{key:"getSecondMatch",value:function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""}},{key:"matchAndReturnConst",value:function(e,t,r){if(e.test(t))return r}},{key:"getWindowsVersionName",value:function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}},{key:"getAndroidVersionName",value:function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0});if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":void 0}},{key:"getVersionPrecision",value:function(e){return e.split(".").length}},{key:"compareVersions",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e.getVersionPrecision(t),o=e.getVersionPrecision(r),a=Math.max(i,o),s=0,u=e.map([t,r],function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});for(n&&(s=a-Math.min(i,o)),a-=1;a>=s;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===s)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}}},{key:"map",value:function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n}}])&&n(t,r),e;var t,r}();r.default=i,e.exports=t.default})?n.apply(t,i):n)||(e.exports=o)},86:function(e,t,r){var n,i,o;i=[t,r(87)],void 0===(o="function"==typeof(n=function(r,n){"use strict";function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n=(o=n)&&o.__esModule?o:{default:o};var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return t=e,(r=[{key:"getParser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("string"!=typeof e)throw new Error("UserAgent should be a string");return new n.default(e,t)}},{key:"parse",value:function(e){return new n.default(e).getResult()}}])&&i(t,r),e;var t,r}();r.default=a,e.exports=t.default})?n.apply(t,i):n)||(e.exports=o)},87:function(e,t,r){var n,i,o;i=[t,r(88),r(89),r(90),r(91),r(17)],void 0===(o="function"==typeof(n=function(r,n,i,o,a,s){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n=u(n),i=u(i),o=u(o),a=u(a),s=u(s);var d=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},!0!==r&&this.parse()}return t=e,(r=[{key:"getUA",value:function(){return this._ua}},{key:"test",value:function(e){return e.test(this._ua)}},{key:"parseBrowser",value:function(){var e=this;this.parsedResult.browser={};var t=n.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}},{key:"getBrowser",value:function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}},{key:"getBrowserName",value:function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}},{key:"getBrowserVersion",value:function(){return this.getBrowser().version}},{key:"getOS",value:function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}},{key:"parseOS",value:function(){var e=this;this.parsedResult.os={};var t=i.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}},{key:"getOSName",value:function(e){var t=this.getOS(),r=t.name;return e?String(r).toLowerCase()||"":r||""}},{key:"getOSVersion",value:function(){return this.getOS().version}},{key:"getPlatform",value:function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}},{key:"getPlatformType",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.getPlatform(),r=t.type;return e?String(r).toLowerCase()||"":r||""}},{key:"parsePlatform",value:function(){var e=this;this.parsedResult.platform={};var t=o.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}},{key:"getEngine",value:function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}},{key:"getEngineName",value:function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}},{key:"parseEngine",value:function(){var e=this;this.parsedResult.engine={};var t=a.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}},{key:"parse",value:function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}},{key:"getResult",value:function(){return Object.assign({},this.parsedResult)}},{key:"satisfies",value:function(e){var t=this,r={},n=0,i={},o=0,a=Object.keys(e);if(a.forEach(function(t){var a=e[t];"string"==typeof a?(i[t]=a,o+=1):"object"===c(a)&&(r[t]=a,n+=1)}),n>0){var s=Object.keys(r),u=s.find(function(e){return t.isOS(e)});if(u){var f=this.satisfies(r[u]);if(void 0!==f)return f}var d=s.find(function(e){return t.isPlatform(e)});if(d){var l=this.satisfies(r[d]);if(void 0!==l)return l}}if(o>0){var p=Object.keys(i),v=p.find(function(e){return t.isBrowser(e)});if(void 0!==v)return this.compareVersion(i[v])}}},{key:"isBrowser",value:function(e){return this.getBrowserName(!0)===String(e).toLowerCase()}},{key:"compareVersion",value:function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(s.default.compareVersions(i,r,n))>-1}},{key:"isOS",value:function(e){return this.getOSName(!0)===String(e).toLowerCase()}},{key:"isPlatform",value:function(e){return this.getPlatformType(!0)===String(e).toLowerCase()}},{key:"isEngine",value:function(e){return this.getEngineName(!0)===String(e).toLowerCase()}},{key:"is",value:function(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)}},{key:"some",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.some(function(t){return e.is(t)})}}])&&f(t.prototype,r),e;var t,r}();r.default=d,e.exports=t.default})?n.apply(t,i):n)||(e.exports=o)},88:function(e,t,r){var n,i,o;i=[t,r(17)],void 0===(o="function"==typeof(n=function(r,n){"use strict";var i;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n=(i=n)&&i.__esModule?i:{default:i};var o=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=n.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/(?:opera)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(/(?:opr|opios)[\s\/](\S+)/i,e)||n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=n.default.getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=n.default.getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=n.default.getFirstMatch(/(?:swing)[\s\/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/(?:coast)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/(?:ucbrowser)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/(?:Maxthon|mxios)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/(?:epiphany)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/(?:puffin)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/(?:sleipnir)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/(?:k-meleon)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=n.default.getFirstMatch(/(?:micromessenger)[\s\/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=n.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=n.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=n.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=n.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=n.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=n.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=n.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=n.default.getFirstMatch(o,e)||n.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=n.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=n.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=n.default.getFirstMatch(/(?:qupzilla)[\s\/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=n.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=n.default.getFirstMatch(/(?:chromium)[\s\/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=n.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=n.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){return{name:n.default.getFirstMatch(/^(.*)\/(.*) /,e),version:n.default.getSecondMatch(/^(.*)\/(.*) /,e)}}}];r.default=a,e.exports=t.default})?n.apply(t,i):n)||(e.exports=o)},89:function(e,t,r){var n,i,o;i=[t,r(17)],void 0===(o="function"==typeof(n=function(r,n){"use strict";var i;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n=(i=n)&&i.__esModule?i:{default:i};var o=[{test:[/windows phone/i],describe:function(e){var t=n.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:"Windows Phone",version:t}}},{test:[/windows/i],describe:function(e){var t=n.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=n.default.getWindowsVersionName(t);return{name:"Windows",version:t,versionName:r}}},{test:[/macintosh/i],describe:function(e){var t=n.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,".");return{name:"macOS",version:t}}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=n.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:"iOS",version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=n.default.getFirstMatch(/android[\s\/-](\d+(\.\d+)*)/i,e),r=n.default.getAndroidVersionName(t),i={name:"Android",version:t};return r&&(i.versionName=r),i}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=n.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:"WebOS"};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=n.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||n.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||n.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:"BlackBerry",version:t}}},{test:[/bada/i],describe:function(e){var t=n.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:"Bada",version:t}}},{test:[/tizen/i],describe:function(e){var t=n.default.getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i,e);return{name:"Tizen",version:t}}},{test:[/linux/i],describe:function(){return{name:"Linux"}}},{test:[/CrOS/],describe:function(){return{name:"Chrome OS"}}},{test:[/PlayStation 4/],describe:function(e){var t=n.default.getFirstMatch(/PlayStation 4[\/\s](\d+(\.\d+)*)/i,e);return{name:"PlayStation 4",version:t}}}];r.default=o,e.exports=t.default})?n.apply(t,i):n)||(e.exports=o)},90:function(e,t,r){var n,i,o;i=[t,r(17)],void 0===(o="function"==typeof(n=function(r,n){"use strict";var i;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n=(i=n)&&i.__esModule?i:{default:i};var o={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=n.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:o.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:o.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:o.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:o.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:o.tablet,vendor:"Amazon"}}},{test:[/tablet/i],describe:function(){return{type:o.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=n.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:o.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:o.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:o.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:o.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:o.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:o.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:o.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:o.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:o.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:o.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:o.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:o.tv}}}];r.default=a,e.exports=t.default})?n.apply(t,i):n)||(e.exports=o)},91:function(e,t,r){var n,i,o;i=[t,r(17)],void 0===(o="function"==typeof(n=function(r,n){"use strict";var i;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n=(i=n)&&i.__esModule?i:{default:i};var o=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){var t=n.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:"EdgeHTML",version:t}}},{test:[/trident/i],describe:function(e){var t={name:"Trident"},r=n.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:"Presto"},r=n.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:"Gecko"},r=n.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:"Blink"}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:"WebKit"},r=n.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];r.default=o,e.exports=t.default})?n.apply(t,i):n)||(e.exports=o)}})},48:function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.r(t);var i=function(e){return String.fromCharCode.apply(String,n(new Uint16Array(e)))},o=function(e){return Uint16Array.from(n(e).map(function(e){return e.charCodeAt()})).buffer};function a(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}var s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.crypto,n=["encrypt","decrypt"],s="SHA-256",u=256,c=function(){var e,t=(e=regeneratorRuntime.mark(function e(t,r){var i,a,c=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]?c[2]:window.crypto,e.next=3,i.subtle.importKey("raw",o(t),{name:"PBKDF2"},!1,["deriveBits","deriveKey"]);case 3:return a=e.sent,e.abrupt("return",i.subtle.deriveKey({name:"PBKDF2",salt:o(r),iterations:1e4,hash:s},a,{name:"AES-CBC",length:u},!0,n));case 5:case"end":return e.stop()}},e)}),function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function s(e){a(o,n,i,s,u,"next",e)}function u(e){a(o,n,i,s,u,"throw",e)}s(void 0)})});return function(e,r){return t.apply(this,arguments)}}();return{encrypt:function(n,a){return c(e,t).then(function(e){return function(e,t,n){return r.subtle.encrypt({name:"AES-CBC",iv:t},e,n)}(e,a,o(n))}).then(function(e){return i(e)})},decrypt:function(n,a){return c(e,t).then(function(e){return function(e,t,n){return r.subtle.decrypt({name:"AES-CBC",iv:t},e,n)}(e,a,o(n))}).then(function(e){return i(e)})},getIv:function(){return r.getRandomValues(new Uint8Array(16))}}},u=r(37),c=r.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function p(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){l(o,n,i,a,s,"next",e)}function s(e){l(o,n,i,a,s,"throw",e)}a(void 0)})}}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){m(e,t,r[t])})}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent,t=c.a.getParser(e);return["chrome","firefox"].filter(function(e){return t.is(e)}).length>0}(),g=function(e,t){var r={removeItem:function(t){e.removeItem(t)},clear:function(){e.clear()},get length(){return e.length},key:function(t){return e.key(t)}};return v(h?{setItem:function(){var r=p(regeneratorRuntime.mark(function r(i,o){var a,s;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a=t.getIv(),r.next=4,t.encrypt(o,a);case 4:s=r.sent,e.setItem(i,JSON.stringify([s,(u=a,String.fromCharCode.apply(String,n(new Uint8Array(u))))])),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Cannot set encrypted value for ".concat(i,". Error: ").concat(r.t0)),e.setItem(i,o);case 12:case"end":return r.stop()}var u},r,null,[[0,8]])}));return function(e,t){return r.apply(this,arguments)}}(),getItem:function(){var r=p(regeneratorRuntime.mark(function r(i){var o,a,s,u,c;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o=JSON.parse(e.getItem(i)),a=d(o,2),s=a[0],u=a[1],r.next=4,t.decrypt(s,(f=u,Uint8Array.from(n(f).map(function(e){return e.charCodeAt()})).buffer));case 4:return c=r.sent,r.abrupt("return",c);case 8:return r.prev=8,r.t0=r.catch(0),console.error("Cannot get encrypted item for ".concat(i,". Error: ").concat(r.t0)),r.abrupt("return",e.getItem(i));case 12:case"end":return r.stop()}var f},r,null,[[0,8]])}));return function(e){return r.apply(this,arguments)}}()}:{setItem:function(){var t=p(regeneratorRuntime.mark(function t(r,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.setItem(r,n);case 1:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getItem:function(){var t=p(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.getItem(r));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},r)};t.default={getPbCrypto:s,getEncryptedStorage:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0],o=r[1];return"object"===f(i)?g(e,i):"string"==typeof i&&"string"==typeof o?function(e,t,r){return g(e,s(t,r))}(e,i,o):void 0},isBrowserSupported:h}}})});
//# sourceMappingURL=index.js.map