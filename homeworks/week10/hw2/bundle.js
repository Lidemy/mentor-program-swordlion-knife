!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=2)}([function(t,r){var n,e,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(r){try{return n.call(null,t,0)}catch(r){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{e="function"==typeof clearTimeout?clearTimeout:u}catch(t){e=u}}();var c,l=[],f=!1,a=-1;function h(){f&&c&&(f=!1,c.length?l=c.concat(l):a=-1,l.length&&p())}function p(){if(!f){var t=s(h);f=!0;for(var r=l.length;r;){for(c=l,l=[];++a<r;)c&&c[a].run();a=-1,r=l.length}c=null,f=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===u||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(r){try{return e.call(null,t)}catch(r){return e.call(this,t)}}}(t)}}function v(t,r){this.fun=t,this.array=r}function m(){}o.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];l.push(new v(t,r)),1!==l.length||f||s(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,r,n){(function(t){function n(t,r){for(var n=0,e=t.length-1;e>=0;e--){var o=t[e];"."===o?t.splice(e,1):".."===o?(t.splice(e,1),n++):n&&(t.splice(e,1),n--)}if(r)for(;n--;n)t.unshift("..");return t}var e=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return e.exec(t).slice(1)};function i(t,r){if(t.filter)return t.filter(r);for(var n=[],e=0;e<t.length;e++)r(t[e],e,t)&&n.push(t[e]);return n}r.resolve=function(){for(var r="",e=!1,o=arguments.length-1;o>=-1&&!e;o--){var u=o>=0?arguments[o]:t.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(r=u+"/"+r,e="/"===u.charAt(0))}return r=n(i(r.split("/"),function(t){return!!t}),!e).join("/"),(e?"/":"")+r||"."},r.normalize=function(t){var e=r.isAbsolute(t),o="/"===u(t,-1);return(t=n(i(t.split("/"),function(t){return!!t}),!e).join("/"))||e||(t="."),t&&o&&(t+="/"),(e?"/":"")+t},r.isAbsolute=function(t){return"/"===t.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(i(t,function(t,r){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},r.relative=function(t,n){function e(t){for(var r=0;r<t.length&&""===t[r];r++);for(var n=t.length-1;n>=0&&""===t[n];n--);return r>n?[]:t.slice(r,n-r+1)}t=r.resolve(t).substr(1),n=r.resolve(n).substr(1);for(var o=e(t.split("/")),i=e(n.split("/")),u=Math.min(o.length,i.length),s=u,c=0;c<u;c++)if(o[c]!==i[c]){s=c;break}var l=[];for(c=s;c<o.length;c++)l.push("..");return(l=l.concat(i.slice(s))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(t){var r=o(t),n=r[0],e=r[1];return n||e?(e&&(e=e.substr(0,e.length-1)),n+e):"."},r.basename=function(t,r){var n=o(t)[2];return r&&n.substr(-1*r.length)===r&&(n=n.substr(0,n.length-r.length)),n},r.extname=function(t){return o(t)[3]};var u="b"==="ab".substr(-1)?function(t,r,n){return t.substr(r,n)}:function(t,r,n){return r<0&&(r=t.length+r),t.substr(r,n)}}).call(this,n(0))},function(t,r,n){(function(r){const e=n(1);t.exports={entry:"./homeworks/week10/hw2/index.js",output:{path:e.resolve(r,"./homeworks/week10/hw2"),filename:"bundle.js"}}}).call(this,"/")}]);