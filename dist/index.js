"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var n=o(function(v,u){
var i=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-pow/dist');function c(e,r){return i(e)||i(r)||e<=0||r<=0?NaN:r<=1?0:e*t((r-1)/(r+1),1/r)}u.exports=c
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
