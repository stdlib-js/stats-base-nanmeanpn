// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function e(r,e,n){var t,f,i,u,a,o,d;if(r<=0)return NaN;if(1===r||0===n)return e[0];for(d=t=n<0?(1-r)*n:0,i=0,a=0,o=0;o<r;o++)(f=e[t])==f&&(a+=1,i+=f),t+=n;if(0===a)return NaN;for(i/=a,u=0,t=d,o=0;o<r;o++)(f=e[t])==f&&(u+=f-i),t+=n;return i+u/a}r(e,"ndarray",(function(r,e,n,t){var f,i,u,a,o,d;if(r<=0)return NaN;if(1===r||0===n)return e[t];for(f=t,u=0,o=0,d=0;d<r;d++)(i=e[f])==i&&(o+=1,u+=i),f+=n;if(0===o)return NaN;for(u/=o,f=t,a=0,d=0;d<r;d++)(i=e[f])==i&&(a+=i-u),f+=n;return u+a/o}));export{e as default};
//# sourceMappingURL=index.mjs.map
