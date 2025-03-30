"use strict";var s=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var c=s(function(j,p){
function N(n,e,u){var i,r,a,t,f,v,o;if(n<=0)return NaN;if(n===1||u===0)return e[0];for(u<0?i=(1-n)*u:i=0,o=i,a=0,f=0,v=0;v<n;v++)r=e[i],r===r&&(f+=1,a+=r),i+=u;if(f===0)return NaN;for(a/=f,t=0,i=o,v=0;v<n;v++)r=e[i],r===r&&(t+=r-a),i+=u;return a+t/f}p.exports=N
});var q=s(function(k,m){
function O(n,e,u,i){var r,a,t,f,v,o;if(n<=0)return NaN;if(n===1||u===0)return e[i];for(r=i,t=0,v=0,o=0;o<n;o++)a=e[r],a===a&&(v+=1,t+=a),r+=u;if(v===0)return NaN;for(t/=v,r=i,f=0,o=0;o<n;o++)a=e[r],a===a&&(f+=a-t),r+=u;return t+f/v}m.exports=O
});var x=s(function(w,l){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),b=q();R(y,"ndarray",b);l.exports=y
});var g=x();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
