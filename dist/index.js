"use strict";var p=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var l=p(function(C,m){
function k(a,e,v,s){var u,c,r,n,t,o,i,f,y;if(u=e.data,c=e.accessors[0],a===1||v===0)return c(u,s);for(r=s,y=r,t=0,i=0,f=0;f<a;f++)n=c(u,r),n===n&&(i+=1,t+=n),r+=v;if(i===0)return NaN;for(t/=i,o=0,r=y,f=0;f<a;f++)n=c(u,r),n===n&&(o+=n-t),r+=v;return t+o/i}m.exports=k
});var q=p(function(D,x){
var O=require('@stdlib/array-base-arraylike2object/dist'),P=l();function R(a,e,v,s){var u,c,r,n,t,o,i;if(a<=0)return NaN;if(c=O(e),c.accessorProtocol)return P(a,c,v,s);if(a===1||v===0)return e[s];for(u=s,n=0,o=0,i=0;i<a;i++)r=e[u],r===r&&(o+=1,n+=r),u+=v;if(o===0)return NaN;for(n/=o,u=s,t=0,i=0;i<a;i++)r=e[u],r===r&&(t+=r-n),u+=v;return n+t/o}x.exports=R
});var g=p(function(E,b){
var d=require('@stdlib/strided-base-stride2offset/dist'),h=q();function w(a,e,v){return h(a,e,v,d(a,v))}b.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=g(),A=q();z(j,"ndarray",A);module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
