// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n){var t,f,a,i,u,o,d;if(r<=0)return NaN;if(1===r||0===n)return e[0];for(d=t=n<0?(1-r)*n:0,a=0,u=0,o=0;o<r;o++)(f=e[t])==f&&(u+=1,a+=f),t+=n;if(0===u)return NaN;for(a/=u,i=0,t=d,o=0;o<r;o++)(f=e[t])==f&&(i+=f-a),t+=n;return a+i/u};r(e,"ndarray",(function(r,e,n,t){var f,a,i,u,o,d;if(r<=0)return NaN;if(1===r||0===n)return e[t];for(f=t,i=0,o=0,d=0;d<r;d++)(a=e[f])==a&&(o+=1,i+=a),f+=n;if(0===o)return NaN;for(i/=o,f=t,u=0,d=0;d<r;d++)(a=e[f])==a&&(u+=a-i),f+=n;return i+u/o}));var n=e;export{n as default};
//# sourceMappingURL=index.mjs.map
