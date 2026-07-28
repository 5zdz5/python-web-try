var lp=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var mv=lp((vv,$i)=>{function ip(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(r,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function ap(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var iu={exports:{}},Ms={},au={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nr=Symbol.for("react.element"),op=Symbol.for("react.portal"),up=Symbol.for("react.fragment"),cp=Symbol.for("react.strict_mode"),dp=Symbol.for("react.profiler"),pp=Symbol.for("react.provider"),fp=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),hp=Symbol.for("react.suspense"),vp=Symbol.for("react.memo"),gp=Symbol.for("react.lazy"),za=Symbol.iterator;function yp(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uu=Object.assign,cu={};function On(e,t,n){this.props=e,this.context=t,this.refs=cu,this.updater=n||ou}On.prototype.isReactComponent={};On.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};On.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function du(){}du.prototype=On.prototype;function zi(e,t,n){this.props=e,this.context=t,this.refs=cu,this.updater=n||ou}var Fi=zi.prototype=new du;Fi.constructor=zi;uu(Fi,On.prototype);Fi.isPureReactComponent=!0;var Fa=Array.isArray,pu=Object.prototype.hasOwnProperty,Mi={current:null},fu={key:!0,ref:!0,__self:!0,__source:!0};function mu(e,t,n){var r,s={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)pu.call(t,r)&&!fu.hasOwnProperty(r)&&(s[r]=t[r]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var u=Array(o),c=0;c<o;c++)u[c]=arguments[c+2];s.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)s[r]===void 0&&(s[r]=o[r]);return{$$typeof:Nr,type:e,key:l,ref:a,props:s,_owner:Mi.current}}function xp(e,t){return{$$typeof:Nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ii(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nr}function _p(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ma=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_p(""+e.key):t.toString(36)}function Jr(e,t,n,r,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Nr:case op:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+rl(a,0):r,Fa(s)?(n="",e!=null&&(n=e.replace(Ma,"$&/")+"/"),Jr(s,t,n,"",function(c){return c})):s!=null&&(Ii(s)&&(s=xp(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Ma,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",Fa(e))for(var o=0;o<e.length;o++){l=e[o];var u=r+rl(l,o);a+=Jr(l,t,n,u,s)}else if(u=yp(e),typeof u=="function")for(e=u.call(e),o=0;!(l=e.next()).done;)l=l.value,u=r+rl(l,o++),a+=Jr(l,t,n,u,s);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Or(e,t,n){if(e==null)return e;var r=[],s=0;return Jr(e,r,"","",function(l){return t.call(n,l,s++)}),r}function wp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Zr={transition:null},jp={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Zr,ReactCurrentOwner:Mi};function hu(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Or,forEach:function(e,t,n){Or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Or(e,function(){t++}),t},toArray:function(e){return Or(e,function(t){return t})||[]},only:function(e){if(!Ii(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=On;F.Fragment=up;F.Profiler=dp;F.PureComponent=zi;F.StrictMode=cp;F.Suspense=hp;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;F.act=hu;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=uu({},e.props),s=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=Mi.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)pu.call(t,u)&&!fu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){o=Array(u);for(var c=0;c<u;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:Nr,type:e.type,key:s,ref:l,props:r,_owner:a}};F.createContext=function(e){return e={$$typeof:fp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pp,_context:e},e.Consumer=e};F.createElement=mu;F.createFactory=function(e){var t=mu.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:mp,render:e}};F.isValidElement=Ii;F.lazy=function(e){return{$$typeof:gp,_payload:{_status:-1,_result:e},_init:wp}};F.memo=function(e,t){return{$$typeof:vp,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Zr.transition;Zr.transition={};try{e()}finally{Zr.transition=t}};F.unstable_act=hu;F.useCallback=function(e,t){return fe.current.useCallback(e,t)};F.useContext=function(e){return fe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};F.useEffect=function(e,t){return fe.current.useEffect(e,t)};F.useId=function(){return fe.current.useId()};F.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return fe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};F.useRef=function(e){return fe.current.useRef(e)};F.useState=function(e){return fe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return fe.current.useTransition()};F.version="18.3.1";au.exports=F;var j=au.exports;const vu=ap(j),Np=ip({__proto__:null,default:vu},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp=j,Sp=Symbol.for("react.element"),Cp=Symbol.for("react.fragment"),Ep=Object.prototype.hasOwnProperty,Pp=kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lp={key:!0,ref:!0,__self:!0,__source:!0};function gu(e,t,n){var r,s={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ep.call(t,r)&&!Lp.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Sp,type:e,key:l,ref:a,props:s,_owner:Pp.current}}Ms.Fragment=Cp;Ms.jsx=gu;Ms.jsxs=gu;iu.exports=Ms;var i=iu.exports,zl={},yu={exports:{}},Se={},xu={exports:{}},_u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var $=T.length;T.push(z);e:for(;0<$;){var B=$-1>>>1,te=T[B];if(0<s(te,z))T[B]=z,T[$]=te,$=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],$=T.pop();if($!==z){T[0]=$;e:for(var B=0,te=T.length,Rr=te>>>1;B<Rr;){var Tt=2*(B+1)-1,nl=T[Tt],Ot=Tt+1,Tr=T[Ot];if(0>s(nl,$))Ot<te&&0>s(Tr,nl)?(T[B]=Tr,T[Ot]=$,B=Ot):(T[B]=nl,T[Tt]=$,B=Tt);else if(Ot<te&&0>s(Tr,$))T[B]=Tr,T[Ot]=$,B=Ot;else break e}}return z}function s(T,z){var $=T.sortIndex-z.sortIndex;return $!==0?$:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var u=[],c=[],g=1,f=null,m=3,_=!1,x=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=T)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function w(T){if(y=!1,h(T),!x)if(n(u)!==null)x=!0,Mn(R);else{var z=n(c);z!==null&&Rt(w,z.startTime-T)}}function R(T,z){x=!1,y&&(y=!1,p(S),S=-1),_=!0;var $=m;try{for(h(z),f=n(u);f!==null&&(!(f.expirationTime>z)||T&&!L());){var B=f.callback;if(typeof B=="function"){f.callback=null,m=f.priorityLevel;var te=B(f.expirationTime<=z);z=e.unstable_now(),typeof te=="function"?f.callback=te:f===n(u)&&r(u),h(z)}else r(u);f=n(u)}if(f!==null)var Rr=!0;else{var Tt=n(c);Tt!==null&&Rt(w,Tt.startTime-z),Rr=!1}return Rr}finally{f=null,m=$,_=!1}}var N=!1,k=null,S=-1,C=5,E=-1;function L(){return!(e.unstable_now()-E<C)}function D(){if(k!==null){var T=e.unstable_now();E=T;var z=!0;try{z=k(!0,T)}finally{z?U():(N=!1,k=null)}}else N=!1}var U;if(typeof d=="function")U=function(){d(D)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Ye=$e.port2;$e.port1.onmessage=D,U=function(){Ye.postMessage(null)}}else U=function(){v(D,0)};function Mn(T){k=T,N||(N=!0,U())}function Rt(T,z){S=v(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||_||(x=!0,Mn(R))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var $=m;m=z;try{return T()}finally{m=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var $=m;m=T;try{return z()}finally{m=$}},e.unstable_scheduleCallback=function(T,z,$){var B=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?B+$:B):$=B,T){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=$+te,T={id:g++,callback:z,priorityLevel:T,startTime:$,expirationTime:te,sortIndex:-1},$>B?(T.sortIndex=$,t(c,T),n(u)===null&&T===n(c)&&(y?(p(S),S=-1):y=!0,Rt(w,$-B))):(T.sortIndex=te,t(u,T),x||_||(x=!0,Mn(R))),T},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(T){var z=m;return function(){var $=m;m=z;try{return T.apply(this,arguments)}finally{m=$}}}})(_u);xu.exports=_u;var Rp=xu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp=j,ke=Rp;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wu=new Set,sr={};function Jt(e,t){Sn(e,t),Sn(e+"Capture",t)}function Sn(e,t){for(sr[e]=t,e=0;e<t.length;e++)wu.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,Op=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ia={},Da={};function $p(e){return Fl.call(Da,e)?!0:Fl.call(Ia,e)?!1:Op.test(e)?Da[e]=!0:(Ia[e]=!0,!1)}function zp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fp(e,t,n,r){if(t===null||typeof t>"u"||zp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,s,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Di=/[\-:]([a-z])/g;function Ai(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Di,Ai);ie[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Di,Ai);ie[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Di,Ai);ie[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ui(e,t,n,r){var s=ie.hasOwnProperty(t)?ie[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fp(t,n,s,r)&&(n=null),r||s===null?$p(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=Tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$r=Symbol.for("react.element"),an=Symbol.for("react.portal"),on=Symbol.for("react.fragment"),Bi=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),ju=Symbol.for("react.provider"),Nu=Symbol.for("react.context"),bi=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),Wi=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),ku=Symbol.for("react.offscreen"),Aa=Symbol.iterator;function In(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,sl;function Hn(e){if(sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sl=t&&t[1]||""}return`
`+sl+e}var ll=!1;function il(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),l=r.stack.split(`
`),a=s.length-1,o=l.length-1;1<=a&&0<=o&&s[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(s[a]!==l[o]){if(a!==1||o!==1)do if(a--,o--,0>o||s[a]!==l[o]){var u=`
`+s[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=o);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hn(e):""}function Mp(e){switch(e.tag){case 5:return Hn(e.type);case 16:return Hn("Lazy");case 13:return Hn("Suspense");case 19:return Hn("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function Al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case on:return"Fragment";case an:return"Portal";case Ml:return"Profiler";case Bi:return"StrictMode";case Il:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nu:return(e.displayName||"Context")+".Consumer";case ju:return(e._context.displayName||"Context")+".Provider";case bi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wi:return t=e.displayName||null,t!==null?t:Al(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return Al(e(t))}catch{}}return null}function Ip(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Al(t);case 8:return t===Bi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Su(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dp(e){var t=Su(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=Dp(e))}function Cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Su(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function cs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ua(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Eu(e,t){t=t.checked,t!=null&&Ui(e,"checked",t,!1)}function Bl(e,t){Eu(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ba(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||cs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ba(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Qn(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function Pu(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,Ru=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ap=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){Ap.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yn[t]=Yn[e]})});function Tu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+t).trim():t+"px"}function Ou(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Tu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Up=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,t){if(t){if(Up[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xl=null;function Vi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kl=null,_n=null,wn=null;function Va(e){if(e=Cr(e)){if(typeof Kl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Bs(t),Kl(e.stateNode,e.type,t))}}function $u(e){_n?wn?wn.push(e):wn=[e]:_n=e}function zu(){if(_n){var e=_n,t=wn;if(wn=_n=null,Va(e),t)for(e=0;e<t.length;e++)Va(t[e])}}function Fu(e,t){return e(t)}function Mu(){}var al=!1;function Iu(e,t,n){if(al)return e(t,n);al=!0;try{return Fu(e,t,n)}finally{al=!1,(_n!==null||wn!==null)&&(Mu(),zu())}}function ir(e,t){var n=e.stateNode;if(n===null)return null;var r=Bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Yl=!1;if(tt)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Yl=!1}function Bp(e,t,n,r,s,l,a,o,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Gn=!1,ds=null,ps=!1,Gl=null,bp={onError:function(e){Gn=!0,ds=e}};function Wp(e,t,n,r,s,l,a,o,u){Gn=!1,ds=null,Bp.apply(bp,arguments)}function Vp(e,t,n,r,s,l,a,o,u){if(Wp.apply(this,arguments),Gn){if(Gn){var c=ds;Gn=!1,ds=null}else throw Error(P(198));ps||(ps=!0,Gl=c)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Du(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ha(e){if(Zt(e)!==e)throw Error(P(188))}function Hp(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return Ha(s),e;if(l===r)return Ha(s),t;l=l.sibling}throw Error(P(188))}if(n.return!==r.return)n=s,r=l;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,r=l;break}if(o===r){a=!0,r=s,n=l;break}o=o.sibling}if(!a){for(o=l.child;o;){if(o===n){a=!0,n=l,r=s;break}if(o===r){a=!0,r=l,n=s;break}o=o.sibling}if(!a)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Au(e){return e=Hp(e),e!==null?Uu(e):null}function Uu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uu(e);if(t!==null)return t;e=e.sibling}return null}var Bu=ke.unstable_scheduleCallback,Qa=ke.unstable_cancelCallback,Qp=ke.unstable_shouldYield,Xp=ke.unstable_requestPaint,G=ke.unstable_now,Kp=ke.unstable_getCurrentPriorityLevel,Hi=ke.unstable_ImmediatePriority,bu=ke.unstable_UserBlockingPriority,fs=ke.unstable_NormalPriority,Yp=ke.unstable_LowPriority,Wu=ke.unstable_IdlePriority,Is=null,Qe=null;function Gp(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Is,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:qp,Jp=Math.log,Zp=Math.LN2;function qp(e){return e>>>=0,e===0?32:31-(Jp(e)/Zp|0)|0}var Mr=64,Ir=4194304;function Xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ms(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~s;o!==0?r=Xn(o):(l&=a,l!==0&&(r=Xn(l)))}else a=n&~s,a!==0?r=Xn(a):l!==0&&(r=Xn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),s=1<<n,r|=e[n],t&=~s;return r}function ef(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Ae(l),o=1<<a,u=s[a];u===-1?(!(o&n)||o&r)&&(s[a]=ef(o,t)):u<=t&&(e.expiredLanes|=o),l&=~o}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function nf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Ae(n),l=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~l}}function Qi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var A=0;function Hu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qu,Xi,Xu,Ku,Yu,Zl=!1,Dr=[],mt=null,ht=null,vt=null,ar=new Map,or=new Map,ut=[],rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xa(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function An(e,t,n,r,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},t!==null&&(t=Cr(t),t!==null&&Xi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function sf(e,t,n,r,s){switch(t){case"focusin":return mt=An(mt,e,t,n,r,s),!0;case"dragenter":return ht=An(ht,e,t,n,r,s),!0;case"mouseover":return vt=An(vt,e,t,n,r,s),!0;case"pointerover":var l=s.pointerId;return ar.set(l,An(ar.get(l)||null,e,t,n,r,s)),!0;case"gotpointercapture":return l=s.pointerId,or.set(l,An(or.get(l)||null,e,t,n,r,s)),!0}return!1}function Gu(e){var t=Ut(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=Du(n),t!==null){e.blockedOn=t,Yu(e.priority,function(){Xu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xl=r,n.target.dispatchEvent(r),Xl=null}else return t=Cr(n),t!==null&&Xi(t),e.blockedOn=n,!1;t.shift()}return!0}function Ka(e,t,n){qr(e)&&n.delete(t)}function lf(){Zl=!1,mt!==null&&qr(mt)&&(mt=null),ht!==null&&qr(ht)&&(ht=null),vt!==null&&qr(vt)&&(vt=null),ar.forEach(Ka),or.forEach(Ka)}function Un(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,lf)))}function ur(e){function t(s){return Un(s,e)}if(0<Dr.length){Un(Dr[0],e);for(var n=1;n<Dr.length;n++){var r=Dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&Un(mt,e),ht!==null&&Un(ht,e),vt!==null&&Un(vt,e),ar.forEach(t),or.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)Gu(n),n.blockedOn===null&&ut.shift()}var jn=lt.ReactCurrentBatchConfig,hs=!0;function af(e,t,n,r){var s=A,l=jn.transition;jn.transition=null;try{A=1,Ki(e,t,n,r)}finally{A=s,jn.transition=l}}function of(e,t,n,r){var s=A,l=jn.transition;jn.transition=null;try{A=4,Ki(e,t,n,r)}finally{A=s,jn.transition=l}}function Ki(e,t,n,r){if(hs){var s=ql(e,t,n,r);if(s===null)yl(e,t,r,vs,n),Xa(e,r);else if(sf(s,e,t,n,r))r.stopPropagation();else if(Xa(e,r),t&4&&-1<rf.indexOf(e)){for(;s!==null;){var l=Cr(s);if(l!==null&&Qu(l),l=ql(e,t,n,r),l===null&&yl(e,t,r,vs,n),l===s)break;s=l}s!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var vs=null;function ql(e,t,n,r){if(vs=null,e=Vi(r),e=Ut(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Du(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vs=e,null}function Ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kp()){case Hi:return 1;case bu:return 4;case fs:case Yp:return 16;case Wu:return 536870912;default:return 16}default:return 16}}var dt=null,Yi=null,es=null;function Zu(){if(es)return es;var e,t=Yi,n=t.length,r,s="value"in dt?dt.value:dt.textContent,l=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[l-r];r++);return es=s.slice(e,1<r?1-r:void 0)}function ts(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function Ya(){return!1}function Ce(e){function t(n,r,s,l,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ar:Ya,this.isPropagationStopped=Ya,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=Ce($n),Sr=K({},$n,{view:0,detail:0}),uf=Ce(Sr),ul,cl,Bn,Ds=K({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(ul=e.screenX-Bn.screenX,cl=e.screenY-Bn.screenY):cl=ul=0,Bn=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),Ga=Ce(Ds),cf=K({},Ds,{dataTransfer:0}),df=Ce(cf),pf=K({},Sr,{relatedTarget:0}),dl=Ce(pf),ff=K({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),mf=Ce(ff),hf=K({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vf=Ce(hf),gf=K({},$n,{data:0}),Ja=Ce(gf),yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_f={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_f[e])?!!t[e]:!1}function Ji(){return wf}var jf=K({},Sr,{key:function(e){if(e.key){var t=yf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ts(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ji,charCode:function(e){return e.type==="keypress"?ts(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ts(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nf=Ce(jf),kf=K({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Za=Ce(kf),Sf=K({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ji}),Cf=Ce(Sf),Ef=K({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pf=Ce(Ef),Lf=K({},Ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rf=Ce(Lf),Tf=[9,13,27,32],Zi=tt&&"CompositionEvent"in window,Jn=null;tt&&"documentMode"in document&&(Jn=document.documentMode);var Of=tt&&"TextEvent"in window&&!Jn,qu=tt&&(!Zi||Jn&&8<Jn&&11>=Jn),qa=" ",eo=!1;function ec(e,t){switch(e){case"keyup":return Tf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var un=!1;function $f(e,t){switch(e){case"compositionend":return tc(t);case"keypress":return t.which!==32?null:(eo=!0,qa);case"textInput":return e=t.data,e===qa&&eo?null:e;default:return null}}function zf(e,t){if(un)return e==="compositionend"||!Zi&&ec(e,t)?(e=Zu(),es=Yi=dt=null,un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qu&&t.locale!=="ko"?null:t.data;default:return null}}var Ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function to(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ff[e.type]:t==="textarea"}function nc(e,t,n,r){$u(r),t=gs(t,"onChange"),0<t.length&&(n=new Gi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,cr=null;function Mf(e){fc(e,0)}function As(e){var t=pn(e);if(Cu(t))return e}function If(e,t){if(e==="change")return t}var rc=!1;if(tt){var pl;if(tt){var fl="oninput"in document;if(!fl){var no=document.createElement("div");no.setAttribute("oninput","return;"),fl=typeof no.oninput=="function"}pl=fl}else pl=!1;rc=pl&&(!document.documentMode||9<document.documentMode)}function ro(){Zn&&(Zn.detachEvent("onpropertychange",sc),cr=Zn=null)}function sc(e){if(e.propertyName==="value"&&As(cr)){var t=[];nc(t,cr,e,Vi(e)),Iu(Mf,t)}}function Df(e,t,n){e==="focusin"?(ro(),Zn=t,cr=n,Zn.attachEvent("onpropertychange",sc)):e==="focusout"&&ro()}function Af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return As(cr)}function Uf(e,t){if(e==="click")return As(t)}function Bf(e,t){if(e==="input"||e==="change")return As(t)}function bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:bf;function dr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Fl.call(t,s)||!Be(e[s],t[s]))return!1}return!0}function so(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lo(e,t){var n=so(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=so(n)}}function lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ic(){for(var e=window,t=cs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cs(e.document)}return t}function qi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wf(e){var t=ic(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lc(n.ownerDocument.documentElement,n)){if(r!==null&&qi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!e.extend&&l>r&&(s=r,r=l,l=s),s=lo(n,l);var a=lo(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vf=tt&&"documentMode"in document&&11>=document.documentMode,cn=null,ei=null,qn=null,ti=!1;function io(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ti||cn==null||cn!==cs(r)||(r=cn,"selectionStart"in r&&qi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qn&&dr(qn,r)||(qn=r,r=gs(ei,"onSelect"),0<r.length&&(t=new Gi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cn)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},ml={},ac={};tt&&(ac=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Us(e){if(ml[e])return ml[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ac)return ml[e]=t[n];return e}var oc=Us("animationend"),uc=Us("animationiteration"),cc=Us("animationstart"),dc=Us("transitionend"),pc=new Map,ao="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){pc.set(e,t),Jt(t,[e])}for(var hl=0;hl<ao.length;hl++){var vl=ao[hl],Hf=vl.toLowerCase(),Qf=vl[0].toUpperCase()+vl.slice(1);Ct(Hf,"on"+Qf)}Ct(oc,"onAnimationEnd");Ct(uc,"onAnimationIteration");Ct(cc,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(dc,"onTransitionEnd");Sn("onMouseEnter",["mouseout","mouseover"]);Sn("onMouseLeave",["mouseout","mouseover"]);Sn("onPointerEnter",["pointerout","pointerover"]);Sn("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));function oo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vp(r,t,void 0,e),e.currentTarget=null}function fc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],u=o.instance,c=o.currentTarget;if(o=o.listener,u!==l&&s.isPropagationStopped())break e;oo(s,o,c),l=u}else for(a=0;a<r.length;a++){if(o=r[a],u=o.instance,c=o.currentTarget,o=o.listener,u!==l&&s.isPropagationStopped())break e;oo(s,o,c),l=u}}}if(ps)throw e=Gl,ps=!1,Gl=null,e}function W(e,t){var n=t[ii];n===void 0&&(n=t[ii]=new Set);var r=e+"__bubble";n.has(r)||(mc(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),mc(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function pr(e){if(!e[Br]){e[Br]=!0,wu.forEach(function(n){n!=="selectionchange"&&(Xf.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,gl("selectionchange",!1,t))}}function mc(e,t,n,r){switch(Ju(t)){case 1:var s=af;break;case 4:s=of;break;default:s=Ki}n=s.bind(null,t,n,e),s=void 0,!Yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,s){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;a=a.return}for(;o!==null;){if(a=Ut(o),a===null)return;if(u=a.tag,u===5||u===6){r=l=a;continue e}o=o.parentNode}}r=r.return}Iu(function(){var c=l,g=Vi(n),f=[];e:{var m=pc.get(e);if(m!==void 0){var _=Gi,x=e;switch(e){case"keypress":if(ts(n)===0)break e;case"keydown":case"keyup":_=Nf;break;case"focusin":x="focus",_=dl;break;case"focusout":x="blur",_=dl;break;case"beforeblur":case"afterblur":_=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Cf;break;case oc:case uc:case cc:_=mf;break;case dc:_=Pf;break;case"scroll":_=uf;break;case"wheel":_=Rf;break;case"copy":case"cut":case"paste":_=vf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Za}var y=(t&4)!==0,v=!y&&e==="scroll",p=y?m!==null?m+"Capture":null:m;y=[];for(var d=c,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,p!==null&&(w=ir(d,p),w!=null&&y.push(fr(d,w,h)))),v)break;d=d.return}0<y.length&&(m=new _(m,x,null,n,g),f.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",m&&n!==Xl&&(x=n.relatedTarget||n.fromElement)&&(Ut(x)||x[nt]))break e;if((_||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,_?(x=n.relatedTarget||n.toElement,_=c,x=x?Ut(x):null,x!==null&&(v=Zt(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(_=null,x=c),_!==x)){if(y=Ga,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Za,w="onPointerLeave",p="onPointerEnter",d="pointer"),v=_==null?m:pn(_),h=x==null?m:pn(x),m=new y(w,d+"leave",_,n,g),m.target=v,m.relatedTarget=h,w=null,Ut(g)===c&&(y=new y(p,d+"enter",x,n,g),y.target=h,y.relatedTarget=v,w=y),v=w,_&&x)t:{for(y=_,p=x,d=0,h=y;h;h=tn(h))d++;for(h=0,w=p;w;w=tn(w))h++;for(;0<d-h;)y=tn(y),d--;for(;0<h-d;)p=tn(p),h--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=tn(y),p=tn(p)}y=null}else y=null;_!==null&&uo(f,m,_,y,!1),x!==null&&v!==null&&uo(f,v,x,y,!0)}}e:{if(m=c?pn(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var R=If;else if(to(m))if(rc)R=Bf;else{R=Af;var N=Df}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=Uf);if(R&&(R=R(e,c))){nc(f,R,n,g);break e}N&&N(e,m,c),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&bl(m,"number",m.value)}switch(N=c?pn(c):window,e){case"focusin":(to(N)||N.contentEditable==="true")&&(cn=N,ei=c,qn=null);break;case"focusout":qn=ei=cn=null;break;case"mousedown":ti=!0;break;case"contextmenu":case"mouseup":case"dragend":ti=!1,io(f,n,g);break;case"selectionchange":if(Vf)break;case"keydown":case"keyup":io(f,n,g)}var k;if(Zi)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else un?ec(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(qu&&n.locale!=="ko"&&(un||S!=="onCompositionStart"?S==="onCompositionEnd"&&un&&(k=Zu()):(dt=g,Yi="value"in dt?dt.value:dt.textContent,un=!0)),N=gs(c,S),0<N.length&&(S=new Ja(S,e,null,n,g),f.push({event:S,listeners:N}),k?S.data=k:(k=tc(n),k!==null&&(S.data=k)))),(k=Of?$f(e,n):zf(e,n))&&(c=gs(c,"onBeforeInput"),0<c.length&&(g=new Ja("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:c}),g.data=k))}fc(f,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gs(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=ir(e,n),l!=null&&r.unshift(fr(e,l,s)),l=ir(e,t),l!=null&&r.push(fr(e,l,s))),e=e.return}return r}function tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uo(e,t,n,r,s){for(var l=t._reactName,a=[];n!==null&&n!==r;){var o=n,u=o.alternate,c=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&c!==null&&(o=c,s?(u=ir(n,l),u!=null&&a.unshift(fr(n,u,o))):s||(u=ir(n,l),u!=null&&a.push(fr(n,u,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Kf=/\r\n?/g,Yf=/\u0000|\uFFFD/g;function co(e){return(typeof e=="string"?e:""+e).replace(Kf,`
`).replace(Yf,"")}function br(e,t,n){if(t=co(t),co(e)!==t&&n)throw Error(P(425))}function ys(){}var ni=null,ri=null;function si(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var li=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,po=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof po<"u"?function(e){return po.resolve(null).then(e).catch(Zf)}:li;function Zf(e){setTimeout(function(){throw e})}function xl(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ur(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zn=Math.random().toString(36).slice(2),He="__reactFiber$"+zn,mr="__reactProps$"+zn,nt="__reactContainer$"+zn,ii="__reactEvents$"+zn,qf="__reactListeners$"+zn,em="__reactHandles$"+zn;function Ut(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fo(e);e!==null;){if(n=e[He])return n;e=fo(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[He]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Bs(e){return e[mr]||null}var ai=[],fn=-1;function Et(e){return{current:e}}function V(e){0>fn||(e.current=ai[fn],ai[fn]=null,fn--)}function b(e,t){fn++,ai[fn]=e.current,e.current=t}var kt={},ce=Et(kt),ge=Et(!1),Qt=kt;function Cn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ye(e){return e=e.childContextTypes,e!=null}function xs(){V(ge),V(ce)}function mo(e,t,n){if(ce.current!==kt)throw Error(P(168));b(ce,t),b(ge,n)}function hc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(P(108,Ip(e)||"Unknown",s));return K({},n,r)}function _s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Qt=ce.current,b(ce,e),b(ge,ge.current),!0}function ho(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=hc(e,t,Qt),r.__reactInternalMemoizedMergedChildContext=e,V(ge),V(ce),b(ce,e)):V(ge),b(ge,n)}var Je=null,bs=!1,_l=!1;function vc(e){Je===null?Je=[e]:Je.push(e)}function tm(e){bs=!0,vc(e)}function Pt(){if(!_l&&Je!==null){_l=!0;var e=0,t=A;try{var n=Je;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Je=null,bs=!1}catch(s){throw Je!==null&&(Je=Je.slice(e+1)),Bu(Hi,Pt),s}finally{A=t,_l=!1}}return null}var mn=[],hn=0,ws=null,js=0,Ee=[],Pe=0,Xt=null,Ze=1,qe="";function Mt(e,t){mn[hn++]=js,mn[hn++]=ws,ws=e,js=t}function gc(e,t,n){Ee[Pe++]=Ze,Ee[Pe++]=qe,Ee[Pe++]=Xt,Xt=e;var r=Ze;e=qe;var s=32-Ae(r)-1;r&=~(1<<s),n+=1;var l=32-Ae(t)+s;if(30<l){var a=s-s%5;l=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Ze=1<<32-Ae(t)+s|n<<s|r,qe=l+e}else Ze=1<<l|n<<s|r,qe=e}function ea(e){e.return!==null&&(Mt(e,1),gc(e,1,0))}function ta(e){for(;e===ws;)ws=mn[--hn],mn[hn]=null,js=mn[--hn],mn[hn]=null;for(;e===Xt;)Xt=Ee[--Pe],Ee[Pe]=null,qe=Ee[--Pe],Ee[Pe]=null,Ze=Ee[--Pe],Ee[Pe]=null}var je=null,we=null,H=!1,De=null;function yc(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,we=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:Ze,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,we=null,!0):!1;default:return!1}}function oi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ui(e){if(H){var t=we;if(t){var n=t;if(!vo(e,t)){if(oi(e))throw Error(P(418));t=gt(n.nextSibling);var r=je;t&&vo(e,t)?yc(r,n):(e.flags=e.flags&-4097|2,H=!1,je=e)}}else{if(oi(e))throw Error(P(418));e.flags=e.flags&-4097|2,H=!1,je=e}}}function go(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Wr(e){if(e!==je)return!1;if(!H)return go(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!si(e.type,e.memoizedProps)),t&&(t=we)){if(oi(e))throw xc(),Error(P(418));for(;t;)yc(e,t),t=gt(t.nextSibling)}if(go(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=je?gt(e.stateNode.nextSibling):null;return!0}function xc(){for(var e=we;e;)e=gt(e.nextSibling)}function En(){we=je=null,H=!1}function na(e){De===null?De=[e]:De.push(e)}var nm=lt.ReactCurrentBatchConfig;function bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var s=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var o=s.refs;a===null?delete o[l]:o[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Vr(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){var t=e._init;return t(e._payload)}function _c(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function s(p,d){return p=wt(p,d),p.index=0,p.sibling=null,p}function l(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,d,h,w){return d===null||d.tag!==6?(d=El(h,p.mode,w),d.return=p,d):(d=s(d,h),d.return=p,d)}function u(p,d,h,w){var R=h.type;return R===on?g(p,d,h.props.children,w,h.key):d!==null&&(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===at&&yo(R)===d.type)?(w=s(d,h.props),w.ref=bn(p,d,h),w.return=p,w):(w=os(h.type,h.key,h.props,null,p.mode,w),w.ref=bn(p,d,h),w.return=p,w)}function c(p,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Pl(h,p.mode,w),d.return=p,d):(d=s(d,h.children||[]),d.return=p,d)}function g(p,d,h,w,R){return d===null||d.tag!==7?(d=Ht(h,p.mode,w,R),d.return=p,d):(d=s(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=El(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $r:return h=os(d.type,d.key,d.props,null,p.mode,h),h.ref=bn(p,null,d),h.return=p,h;case an:return d=Pl(d,p.mode,h),d.return=p,d;case at:var w=d._init;return f(p,w(d._payload),h)}if(Qn(d)||In(d))return d=Ht(d,p.mode,h,null),d.return=p,d;Vr(p,d)}return null}function m(p,d,h,w){var R=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return R!==null?null:o(p,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case $r:return h.key===R?u(p,d,h,w):null;case an:return h.key===R?c(p,d,h,w):null;case at:return R=h._init,m(p,d,R(h._payload),w)}if(Qn(h)||In(h))return R!==null?null:g(p,d,h,w,null);Vr(p,h)}return null}function _(p,d,h,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(h)||null,o(d,p,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $r:return p=p.get(w.key===null?h:w.key)||null,u(d,p,w,R);case an:return p=p.get(w.key===null?h:w.key)||null,c(d,p,w,R);case at:var N=w._init;return _(p,d,h,N(w._payload),R)}if(Qn(w)||In(w))return p=p.get(h)||null,g(d,p,w,R,null);Vr(d,w)}return null}function x(p,d,h,w){for(var R=null,N=null,k=d,S=d=0,C=null;k!==null&&S<h.length;S++){k.index>S?(C=k,k=null):C=k.sibling;var E=m(p,k,h[S],w);if(E===null){k===null&&(k=C);break}e&&k&&E.alternate===null&&t(p,k),d=l(E,d,S),N===null?R=E:N.sibling=E,N=E,k=C}if(S===h.length)return n(p,k),H&&Mt(p,S),R;if(k===null){for(;S<h.length;S++)k=f(p,h[S],w),k!==null&&(d=l(k,d,S),N===null?R=k:N.sibling=k,N=k);return H&&Mt(p,S),R}for(k=r(p,k);S<h.length;S++)C=_(k,p,S,h[S],w),C!==null&&(e&&C.alternate!==null&&k.delete(C.key===null?S:C.key),d=l(C,d,S),N===null?R=C:N.sibling=C,N=C);return e&&k.forEach(function(L){return t(p,L)}),H&&Mt(p,S),R}function y(p,d,h,w){var R=In(h);if(typeof R!="function")throw Error(P(150));if(h=R.call(h),h==null)throw Error(P(151));for(var N=R=null,k=d,S=d=0,C=null,E=h.next();k!==null&&!E.done;S++,E=h.next()){k.index>S?(C=k,k=null):C=k.sibling;var L=m(p,k,E.value,w);if(L===null){k===null&&(k=C);break}e&&k&&L.alternate===null&&t(p,k),d=l(L,d,S),N===null?R=L:N.sibling=L,N=L,k=C}if(E.done)return n(p,k),H&&Mt(p,S),R;if(k===null){for(;!E.done;S++,E=h.next())E=f(p,E.value,w),E!==null&&(d=l(E,d,S),N===null?R=E:N.sibling=E,N=E);return H&&Mt(p,S),R}for(k=r(p,k);!E.done;S++,E=h.next())E=_(k,p,S,E.value,w),E!==null&&(e&&E.alternate!==null&&k.delete(E.key===null?S:E.key),d=l(E,d,S),N===null?R=E:N.sibling=E,N=E);return e&&k.forEach(function(D){return t(p,D)}),H&&Mt(p,S),R}function v(p,d,h,w){if(typeof h=="object"&&h!==null&&h.type===on&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case $r:e:{for(var R=h.key,N=d;N!==null;){if(N.key===R){if(R=h.type,R===on){if(N.tag===7){n(p,N.sibling),d=s(N,h.props.children),d.return=p,p=d;break e}}else if(N.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===at&&yo(R)===N.type){n(p,N.sibling),d=s(N,h.props),d.ref=bn(p,N,h),d.return=p,p=d;break e}n(p,N);break}else t(p,N);N=N.sibling}h.type===on?(d=Ht(h.props.children,p.mode,w,h.key),d.return=p,p=d):(w=os(h.type,h.key,h.props,null,p.mode,w),w.ref=bn(p,d,h),w.return=p,p=w)}return a(p);case an:e:{for(N=h.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=s(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Pl(h,p.mode,w),d.return=p,p=d}return a(p);case at:return N=h._init,v(p,d,N(h._payload),w)}if(Qn(h))return x(p,d,h,w);if(In(h))return y(p,d,h,w);Vr(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=s(d,h),d.return=p,p=d):(n(p,d),d=El(h,p.mode,w),d.return=p,p=d),a(p)):n(p,d)}return v}var Pn=_c(!0),wc=_c(!1),Ns=Et(null),ks=null,vn=null,ra=null;function sa(){ra=vn=ks=null}function la(e){var t=Ns.current;V(Ns),e._currentValue=t}function ci(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nn(e,t){ks=e,ra=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(ra!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(ks===null)throw Error(P(308));vn=e,ks.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var Bt=null;function ia(e){Bt===null?Bt=[e]:Bt.push(e)}function jc(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,ia(t)):(n.next=s.next,s.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function aa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,rt(e,n)}return s=r.interleaved,s===null?(t.next=t,ia(r)):(t.next=s.next,s.next=t),r.interleaved=t,rt(e,n)}function ns(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qi(e,n)}}function xo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ss(e,t,n,r){var s=e.updateQueue;ot=!1;var l=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var u=o,c=u.next;u.next=null,a===null?l=c:a.next=c,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==a&&(o===null?g.firstBaseUpdate=c:o.next=c,g.lastBaseUpdate=u))}if(l!==null){var f=s.baseState;a=0,g=c=u=null,o=l;do{var m=o.lane,_=o.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:_,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,y=o;switch(m=t,_=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(_,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,m=typeof x=="function"?x.call(_,f,m):x,m==null)break e;f=K({},f,m);break e;case 2:ot=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=s.effects,m===null?s.effects=[o]:m.push(o))}else _={eventTime:_,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(c=g=_,u=f):g=g.next=_,a|=m;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;m=o,o=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(g===null&&(u=f),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=g,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);Yt|=a,e.lanes=a,e.memoizedState=f}}function _o(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(P(191,s));s.call(r)}}}var Er={},Xe=Et(Er),hr=Et(Er),vr=Et(Er);function bt(e){if(e===Er)throw Error(P(174));return e}function oa(e,t){switch(b(vr,t),b(hr,e),b(Xe,Er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}V(Xe),b(Xe,t)}function Ln(){V(Xe),V(hr),V(vr)}function kc(e){bt(vr.current);var t=bt(Xe.current),n=Vl(t,e.type);t!==n&&(b(hr,e),b(Xe,n))}function ua(e){hr.current===e&&(V(Xe),V(hr))}var Q=Et(0);function Cs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wl=[];function ca(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var rs=lt.ReactCurrentDispatcher,jl=lt.ReactCurrentBatchConfig,Kt=0,X=null,q=null,ne=null,Es=!1,er=!1,gr=0,rm=0;function ae(){throw Error(P(321))}function da(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function pa(e,t,n,r,s,l){if(Kt=l,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rs.current=e===null||e.memoizedState===null?am:om,e=n(r,s),er){l=0;do{if(er=!1,gr=0,25<=l)throw Error(P(301));l+=1,ne=q=null,t.updateQueue=null,rs.current=um,e=n(r,s)}while(er)}if(rs.current=Ps,t=q!==null&&q.next!==null,Kt=0,ne=q=X=null,Es=!1,t)throw Error(P(300));return e}function fa(){var e=gr!==0;return gr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?X.memoizedState=ne=e:ne=ne.next=e,ne}function Oe(){if(q===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=ne===null?X.memoizedState:ne.next;if(t!==null)ne=t,q=e;else{if(e===null)throw Error(P(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},ne===null?X.memoizedState=ne=e:ne=ne.next=e}return ne}function yr(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=Oe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=q,s=r.baseQueue,l=n.pending;if(l!==null){if(s!==null){var a=s.next;s.next=l.next,l.next=a}r.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,r=r.baseState;var o=a=null,u=null,c=l;do{var g=c.lane;if((Kt&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(o=u=f,a=r):u=u.next=f,X.lanes|=g,Yt|=g}c=c.next}while(c!==null&&c!==l);u===null?a=r:u.next=o,Be(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do l=s.lane,X.lanes|=l,Yt|=l,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kl(e){var t=Oe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do l=e(l,a.action),a=a.next;while(a!==s);Be(l,t.memoizedState)||(ve=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Sc(){}function Cc(e,t){var n=X,r=Oe(),s=t(),l=!Be(r.memoizedState,s);if(l&&(r.memoizedState=s,ve=!0),r=r.queue,ma(Lc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,xr(9,Pc.bind(null,n,r,s,t),void 0,null),re===null)throw Error(P(349));Kt&30||Ec(n,t,s)}return s}function Ec(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pc(e,t,n,r){t.value=n,t.getSnapshot=r,Rc(t)&&Tc(e)}function Lc(e,t,n){return n(function(){Rc(t)&&Tc(e)})}function Rc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Tc(e){var t=rt(e,1);t!==null&&Ue(t,e,1,-1)}function wo(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:e},t.queue=e,e=e.dispatch=im.bind(null,X,e),[t.memoizedState,e]}function xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Oc(){return Oe().memoizedState}function ss(e,t,n,r){var s=We();X.flags|=e,s.memoizedState=xr(1|t,n,void 0,r===void 0?null:r)}function Ws(e,t,n,r){var s=Oe();r=r===void 0?null:r;var l=void 0;if(q!==null){var a=q.memoizedState;if(l=a.destroy,r!==null&&da(r,a.deps)){s.memoizedState=xr(t,n,l,r);return}}X.flags|=e,s.memoizedState=xr(1|t,n,l,r)}function jo(e,t){return ss(8390656,8,e,t)}function ma(e,t){return Ws(2048,8,e,t)}function $c(e,t){return Ws(4,2,e,t)}function zc(e,t){return Ws(4,4,e,t)}function Fc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mc(e,t,n){return n=n!=null?n.concat([e]):null,Ws(4,4,Fc.bind(null,t,e),n)}function ha(){}function Ic(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&da(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&da(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ac(e,t,n){return Kt&21?(Be(n,t)||(n=Vu(),X.lanes|=n,Yt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function sm(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=jl.transition;jl.transition={};try{e(!1),t()}finally{A=n,jl.transition=r}}function Uc(){return Oe().memoizedState}function lm(e,t,n){var r=_t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bc(e))bc(t,n);else if(n=jc(e,t,n,r),n!==null){var s=pe();Ue(n,e,r,s),Wc(n,t,r)}}function im(e,t,n){var r=_t(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bc(e))bc(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,o=l(a,n);if(s.hasEagerState=!0,s.eagerState=o,Be(o,a)){var u=t.interleaved;u===null?(s.next=s,ia(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=jc(e,t,s,r),n!==null&&(s=pe(),Ue(n,e,r,s),Wc(n,t,r))}}function Bc(e){var t=e.alternate;return e===X||t!==null&&t===X}function bc(e,t){er=Es=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qi(e,n)}}var Ps={readContext:Te,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},am={readContext:Te,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:jo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ss(4194308,4,Fc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){return ss(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lm.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:wo,useDebugValue:ha,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=wo(!1),t=e[0];return e=sm.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,s=We();if(H){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),re===null)throw Error(P(349));Kt&30||Ec(r,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,jo(Lc.bind(null,r,l,e),[e]),r.flags|=2048,xr(9,Pc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=We(),t=re.identifierPrefix;if(H){var n=qe,r=Ze;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},om={readContext:Te,useCallback:Ic,useContext:Te,useEffect:ma,useImperativeHandle:Mc,useInsertionEffect:$c,useLayoutEffect:zc,useMemo:Dc,useReducer:Nl,useRef:Oc,useState:function(){return Nl(yr)},useDebugValue:ha,useDeferredValue:function(e){var t=Oe();return Ac(t,q.memoizedState,e)},useTransition:function(){var e=Nl(yr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Cc,useId:Uc,unstable_isNewReconciler:!1},um={readContext:Te,useCallback:Ic,useContext:Te,useEffect:ma,useImperativeHandle:Mc,useInsertionEffect:$c,useLayoutEffect:zc,useMemo:Dc,useReducer:kl,useRef:Oc,useState:function(){return kl(yr)},useDebugValue:ha,useDeferredValue:function(e){var t=Oe();return q===null?t.memoizedState=e:Ac(t,q.memoizedState,e)},useTransition:function(){var e=kl(yr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Cc,useId:Uc,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function di(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),s=_t(e),l=et(r,s);l.payload=t,n!=null&&(l.callback=n),t=yt(e,l,s),t!==null&&(Ue(t,e,s,r),ns(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),s=_t(e),l=et(r,s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=yt(e,l,s),t!==null&&(Ue(t,e,s,r),ns(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=_t(e),s=et(n,r);s.tag=2,t!=null&&(s.callback=t),t=yt(e,s,r),t!==null&&(Ue(t,e,r,n),ns(t,e,r))}};function No(e,t,n,r,s,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!dr(n,r)||!dr(s,l):!0}function Vc(e,t,n){var r=!1,s=kt,l=t.contextType;return typeof l=="object"&&l!==null?l=Te(l):(s=ye(t)?Qt:ce.current,r=t.contextTypes,l=(r=r!=null)?Cn(e,s):kt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),t}function ko(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function pi(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},aa(e);var l=t.contextType;typeof l=="object"&&l!==null?s.context=Te(l):(l=ye(t)?Qt:ce.current,s.context=Cn(e,l)),s.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(di(e,t,l,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Vs.enqueueReplaceState(s,s.state,null),Ss(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t){try{var n="",r=t;do n+=Mp(r),r=r.return;while(r);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:s,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cm=typeof WeakMap=="function"?WeakMap:Map;function Hc(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rs||(Rs=!0,Ni=r),fi(e,t)},n}function Qc(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){fi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){fi(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function So(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cm;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=km.bind(null,e,t,n),t.then(e,e))}function Co(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Eo(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var dm=lt.ReactCurrentOwner,ve=!1;function de(e,t,n,r){t.child=e===null?wc(t,null,n,r):Pn(t,e.child,n,r)}function Po(e,t,n,r,s){n=n.render;var l=t.ref;return Nn(t,s),r=pa(e,t,n,r,l,s),n=fa(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,st(e,t,s)):(H&&n&&ea(t),t.flags|=1,de(e,t,r,s),t.child)}function Lo(e,t,n,r,s){if(e===null){var l=n.type;return typeof l=="function"&&!Na(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Xc(e,t,l,r,s)):(e=os(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&s)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:dr,n(a,r)&&e.ref===t.ref)return st(e,t,s)}return t.flags|=1,e=wt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Xc(e,t,n,r,s){if(e!==null){var l=e.memoizedProps;if(dr(l,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=l,(e.lanes&s)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,st(e,t,s)}return mi(e,t,n,r,s)}function Kc(e,t,n){var r=t.pendingProps,s=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(yn,_e),_e|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(yn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,b(yn,_e),_e|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,b(yn,_e),_e|=r;return de(e,t,s,n),t.child}function Yc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mi(e,t,n,r,s){var l=ye(n)?Qt:ce.current;return l=Cn(t,l),Nn(t,s),n=pa(e,t,n,r,l,s),r=fa(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,st(e,t,s)):(H&&r&&ea(t),t.flags|=1,de(e,t,n,s),t.child)}function Ro(e,t,n,r,s){if(ye(n)){var l=!0;_s(t)}else l=!1;if(Nn(t,s),t.stateNode===null)ls(e,t),Vc(t,n,r),pi(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=ye(n)?Qt:ce.current,c=Cn(t,c));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||u!==c)&&ko(t,a,r,c),ot=!1;var m=t.memoizedState;a.state=m,Ss(t,r,a,s),u=t.memoizedState,o!==r||m!==u||ge.current||ot?(typeof g=="function"&&(di(t,n,g,r),u=t.memoizedState),(o=ot||No(t,n,o,r,m,u,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Nc(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:Fe(t.type,o),a.props=c,f=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Te(u):(u=ye(n)?Qt:ce.current,u=Cn(t,u));var _=n.getDerivedStateFromProps;(g=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||m!==u)&&ko(t,a,r,u),ot=!1,m=t.memoizedState,a.state=m,Ss(t,r,a,s);var x=t.memoizedState;o!==f||m!==x||ge.current||ot?(typeof _=="function"&&(di(t,n,_,r),x=t.memoizedState),(c=ot||No(t,n,c,r,m,x,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return hi(e,t,n,r,l,s)}function hi(e,t,n,r,s,l){Yc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&ho(t,n,!1),st(e,t,l);r=t.stateNode,dm.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Pn(t,e.child,null,l),t.child=Pn(t,null,o,l)):de(e,t,o,l),t.memoizedState=r.state,s&&ho(t,n,!0),t.child}function Gc(e){var t=e.stateNode;t.pendingContext?mo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mo(e,t.context,!1),oa(e,t.containerInfo)}function To(e,t,n,r,s){return En(),na(s),t.flags|=256,de(e,t,n,r),t.child}var vi={dehydrated:null,treeContext:null,retryLane:0};function gi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jc(e,t,n){var r=t.pendingProps,s=Q.current,l=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),b(Q,s&1),e===null)return ui(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Xs(a,r,0,null),e=Ht(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=gi(n),t.memoizedState=vi,e):va(t,a));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return pm(e,t,a,r,o,s,n);if(l){l=r.fallback,a=t.mode,s=e.child,o=s.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=wt(s,u),r.subtreeFlags=s.subtreeFlags&14680064),o!==null?l=wt(o,l):(l=Ht(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?gi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=vi,r}return l=e.child,e=l.sibling,r=wt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function va(e,t){return t=Xs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hr(e,t,n,r){return r!==null&&na(r),Pn(t,e.child,null,n),e=va(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pm(e,t,n,r,s,l,a){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(P(422))),Hr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,s=t.mode,r=Xs({mode:"visible",children:r.children},s,0,null),l=Ht(l,s,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Pn(t,e.child,null,a),t.child.memoizedState=gi(a),t.memoizedState=vi,l);if(!(t.mode&1))return Hr(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(P(419)),r=Sl(l,r,void 0),Hr(e,t,a,r)}if(o=(a&e.childLanes)!==0,ve||o){if(r=re,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,rt(e,s),Ue(r,e,s,-1))}return ja(),r=Sl(Error(P(421))),Hr(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Sm.bind(null,e),s._reactRetry=t,null):(e=l.treeContext,we=gt(s.nextSibling),je=t,H=!0,De=null,e!==null&&(Ee[Pe++]=Ze,Ee[Pe++]=qe,Ee[Pe++]=Xt,Ze=e.id,qe=e.overflow,Xt=t),t=va(t,r.children),t.flags|=4096,t)}function Oo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ci(e.return,t,n)}function Cl(e,t,n,r,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=s)}function Zc(e,t,n){var r=t.pendingProps,s=r.revealOrder,l=r.tail;if(de(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oo(e,n,t);else if(e.tag===19)Oo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(Q,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Cs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Cl(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Cs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Cl(t,!0,n,null,l);break;case"together":Cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ls(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fm(e,t,n){switch(t.tag){case 3:Gc(t),En();break;case 5:kc(t);break;case 1:ye(t.type)&&_s(t);break;case 4:oa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;b(Ns,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Jc(e,t,n):(b(Q,Q.current&1),e=st(e,t,n),e!==null?e.sibling:null);b(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),b(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Kc(e,t,n)}return st(e,t,n)}var qc,yi,ed,td;qc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yi=function(){};ed=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,bt(Xe.current);var l=null;switch(n){case"input":s=Ul(e,s),r=Ul(e,r),l=[];break;case"select":s=K({},s,{value:void 0}),r=K({},r,{value:void 0}),l=[];break;case"textarea":s=Wl(e,s),r=Wl(e,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ys)}Hl(n,r);var a;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var o=s[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(o=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==o&&(u!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),l||o===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};td=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mm(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ye(t.type)&&xs(),oe(t),null;case 3:return r=t.stateNode,Ln(),V(ge),V(ce),ca(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Ci(De),De=null))),yi(e,t),oe(t),null;case 5:ua(t);var s=bt(vr.current);if(n=t.type,e!==null&&t.stateNode!=null)ed(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return oe(t),null}if(e=bt(Xe.current),Wr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[He]=t,r[mr]=l,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(s=0;s<Kn.length;s++)W(Kn[s],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Ua(r,l),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},W("invalid",r);break;case"textarea":ba(r,l),W("invalid",r)}Hl(n,l),s=null;for(var a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&br(r.textContent,o,e),s=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&br(r.textContent,o,e),s=["children",""+o]):sr.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&W("scroll",r)}switch(n){case"input":zr(r),Ba(r,l,!0);break;case"textarea":zr(r),Wa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ys)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[He]=t,e[mr]=r,qc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ql(n,r),n){case"dialog":W("cancel",e),W("close",e),s=r;break;case"iframe":case"object":case"embed":W("load",e),s=r;break;case"video":case"audio":for(s=0;s<Kn.length;s++)W(Kn[s],e);s=r;break;case"source":W("error",e),s=r;break;case"img":case"image":case"link":W("error",e),W("load",e),s=r;break;case"details":W("toggle",e),s=r;break;case"input":Ua(e,r),s=Ul(e,r),W("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":ba(e,r),s=Wl(e,r),W("invalid",e);break;default:s=r}Hl(n,s),o=s;for(l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="style"?Ou(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ru(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&lr(e,u):typeof u=="number"&&lr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(sr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&W("scroll",e):u!=null&&Ui(e,l,u,a))}switch(n){case"input":zr(e),Ba(e,r,!1);break;case"textarea":zr(e),Wa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?xn(e,!!r.multiple,l,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ys)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)td(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=bt(vr.current),bt(Xe.current),Wr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(l=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return oe(t),null;case 13:if(V(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&we!==null&&t.mode&1&&!(t.flags&128))xc(),En(),t.flags|=98560,l=!1;else if(l=Wr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[He]=t}else En(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),l=!1}else De!==null&&(Ci(De),De=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ee===0&&(ee=3):ja())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return Ln(),yi(e,t),e===null&&pr(t.stateNode.containerInfo),oe(t),null;case 10:return la(t.type._context),oe(t),null;case 17:return ye(t.type)&&xs(),oe(t),null;case 19:if(V(Q),l=t.memoizedState,l===null)return oe(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)Wn(l,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Cs(e),a!==null){for(t.flags|=128,Wn(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(Q,Q.current&1|2),t.child}e=e.sibling}l.tail!==null&&G()>Tn&&(t.flags|=128,r=!0,Wn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Cs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!H)return oe(t),null}else 2*G()-l.renderingStartTime>Tn&&n!==1073741824&&(t.flags|=128,r=!0,Wn(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=G(),t.sibling=null,n=Q.current,b(Q,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function hm(e,t){switch(ta(t),t.tag){case 1:return ye(t.type)&&xs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),V(ge),V(ce),ca(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ua(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return Ln(),null;case 10:return la(t.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var Qr=!1,ue=!1,vm=typeof WeakSet=="function"?WeakSet:Set,O=null;function gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function xi(e,t,n){try{n()}catch(r){Y(e,t,r)}}var $o=!1;function gm(e,t){if(ni=hs,e=ic(),qi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,o=-1,u=-1,c=0,g=0,f=e,m=null;t:for(;;){for(var _;f!==n||s!==0&&f.nodeType!==3||(o=a+s),f!==l||r!==0&&f.nodeType!==3||(u=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===e)break t;if(m===n&&++c===s&&(o=a),m===l&&++g===r&&(u=a),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ri={focusedElem:e,selectionRange:n},hs=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,v=x.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Fe(t.type,y),v);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){Y(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return x=$o,$o=!1,x}function tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&xi(t,n,l)}s=s.next}while(s!==r)}}function Hs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _i(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nd(e){var t=e.alternate;t!==null&&(e.alternate=null,nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[mr],delete t[ii],delete t[qf],delete t[em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rd(e){return e.tag===5||e.tag===3||e.tag===4}function zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ys));else if(r!==4&&(e=e.child,e!==null))for(wi(e,t,n),e=e.sibling;e!==null;)wi(e,t,n),e=e.sibling}function ji(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ji(e,t,n),e=e.sibling;e!==null;)ji(e,t,n),e=e.sibling}var se=null,Me=!1;function it(e,t,n){for(n=n.child;n!==null;)sd(e,t,n),n=n.sibling}function sd(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Is,n)}catch{}switch(n.tag){case 5:ue||gn(n,t);case 6:var r=se,s=Me;se=null,it(e,t,n),se=r,Me=s,se!==null&&(Me?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Me?(e=se,n=n.stateNode,e.nodeType===8?xl(e.parentNode,n):e.nodeType===1&&xl(e,n),ur(e)):xl(se,n.stateNode));break;case 4:r=se,s=Me,se=n.stateNode.containerInfo,Me=!0,it(e,t,n),se=r,Me=s;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&xi(n,t,a),s=s.next}while(s!==r)}it(e,t,n);break;case 1:if(!ue&&(gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Y(n,t,o)}it(e,t,n);break;case 21:it(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,it(e,t,n),ue=r):it(e,t,n);break;default:it(e,t,n)}}function Fo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vm),t.forEach(function(r){var s=Cm.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var l=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:se=o.stateNode,Me=!1;break e;case 3:se=o.stateNode.containerInfo,Me=!0;break e;case 4:se=o.stateNode.containerInfo,Me=!0;break e}o=o.return}if(se===null)throw Error(P(160));sd(l,a,s),se=null,Me=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Y(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ld(t,e),t=t.sibling}function ld(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),be(e),r&4){try{tr(3,e,e.return),Hs(3,e)}catch(y){Y(e,e.return,y)}try{tr(5,e,e.return)}catch(y){Y(e,e.return,y)}}break;case 1:ze(t,e),be(e),r&512&&n!==null&&gn(n,n.return);break;case 5:if(ze(t,e),be(e),r&512&&n!==null&&gn(n,n.return),e.flags&32){var s=e.stateNode;try{lr(s,"")}catch(y){Y(e,e.return,y)}}if(r&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Eu(s,l),Ql(o,a);var c=Ql(o,l);for(a=0;a<u.length;a+=2){var g=u[a],f=u[a+1];g==="style"?Ou(s,f):g==="dangerouslySetInnerHTML"?Ru(s,f):g==="children"?lr(s,f):Ui(s,g,f,c)}switch(o){case"input":Bl(s,l);break;case"textarea":Pu(s,l);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var _=l.value;_!=null?xn(s,!!l.multiple,_,!1):m!==!!l.multiple&&(l.defaultValue!=null?xn(s,!!l.multiple,l.defaultValue,!0):xn(s,!!l.multiple,l.multiple?[]:"",!1))}s[mr]=l}catch(y){Y(e,e.return,y)}}break;case 6:if(ze(t,e),be(e),r&4){if(e.stateNode===null)throw Error(P(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(y){Y(e,e.return,y)}}break;case 3:if(ze(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(y){Y(e,e.return,y)}break;case 4:ze(t,e),be(e);break;case 13:ze(t,e),be(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(xa=G())),r&4&&Fo(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(c=ue)||g,ze(t,e),ue=c):ze(t,e),be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(O=e,g=e.child;g!==null;){for(f=O=g;O!==null;){switch(m=O,_=m.child,m.tag){case 0:case 11:case 14:case 15:tr(4,m,m.return);break;case 1:gn(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){Y(r,n,y)}}break;case 5:gn(m,m.return);break;case 22:if(m.memoizedState!==null){Io(f);continue}}_!==null?(_.return=m,O=_):Io(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{s=f.stateNode,c?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=f.stateNode,u=f.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=Tu("display",a))}catch(y){Y(e,e.return,y)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Y(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ze(t,e),be(e),r&4&&Fo(e);break;case 21:break;default:ze(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rd(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(lr(s,""),r.flags&=-33);var l=zo(e);ji(e,l,s);break;case 3:case 4:var a=r.stateNode.containerInfo,o=zo(e);wi(e,o,a);break;default:throw Error(P(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ym(e,t,n){O=e,id(e)}function id(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var s=O,l=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||Qr;if(!a){var o=s.alternate,u=o!==null&&o.memoizedState!==null||ue;o=Qr;var c=ue;if(Qr=a,(ue=u)&&!c)for(O=s;O!==null;)a=O,u=a.child,a.tag===22&&a.memoizedState!==null?Do(s):u!==null?(u.return=a,O=u):Do(s);for(;l!==null;)O=l,id(l),l=l.sibling;O=s,Qr=o,ue=c}Mo(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,O=l):Mo(e)}}function Mo(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||Hs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&_o(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_o(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&ur(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ue||t.flags&512&&_i(t)}catch(m){Y(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Io(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Do(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hs(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){Y(t,s,u)}}var l=t.return;try{_i(t)}catch(u){Y(t,l,u)}break;case 5:var a=t.return;try{_i(t)}catch(u){Y(t,a,u)}}}catch(u){Y(t,t.return,u)}if(t===e){O=null;break}var o=t.sibling;if(o!==null){o.return=t.return,O=o;break}O=t.return}}var xm=Math.ceil,Ls=lt.ReactCurrentDispatcher,ga=lt.ReactCurrentOwner,Re=lt.ReactCurrentBatchConfig,I=0,re=null,J=null,le=0,_e=0,yn=Et(0),ee=0,_r=null,Yt=0,Qs=0,ya=0,nr=null,he=null,xa=0,Tn=1/0,Ge=null,Rs=!1,Ni=null,xt=null,Xr=!1,pt=null,Ts=0,rr=0,ki=null,is=-1,as=0;function pe(){return I&6?G():is!==-1?is:is=G()}function _t(e){return e.mode&1?I&2&&le!==0?le&-le:nm.transition!==null?(as===0&&(as=Vu()),as):(e=A,e!==0||(e=window.event,e=e===void 0?16:Ju(e.type)),e):1}function Ue(e,t,n,r){if(50<rr)throw rr=0,ki=null,Error(P(185));kr(e,n,r),(!(I&2)||e!==re)&&(e===re&&(!(I&2)&&(Qs|=n),ee===4&&ct(e,le)),xe(e,r),n===1&&I===0&&!(t.mode&1)&&(Tn=G()+500,bs&&Pt()))}function xe(e,t){var n=e.callbackNode;tf(e,t);var r=ms(e,e===re?le:0);if(r===0)n!==null&&Qa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qa(n),t===1)e.tag===0?tm(Ao.bind(null,e)):vc(Ao.bind(null,e)),Jf(function(){!(I&6)&&Pt()}),n=null;else{switch(Hu(r)){case 1:n=Hi;break;case 4:n=bu;break;case 16:n=fs;break;case 536870912:n=Wu;break;default:n=fs}n=md(n,ad.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ad(e,t){if(is=-1,as=0,I&6)throw Error(P(327));var n=e.callbackNode;if(kn()&&e.callbackNode!==n)return null;var r=ms(e,e===re?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Os(e,r);else{t=r;var s=I;I|=2;var l=ud();(re!==e||le!==t)&&(Ge=null,Tn=G()+500,Vt(e,t));do try{jm();break}catch(o){od(e,o)}while(!0);sa(),Ls.current=l,I=s,J!==null?t=0:(re=null,le=0,t=ee)}if(t!==0){if(t===2&&(s=Jl(e),s!==0&&(r=s,t=Si(e,s))),t===1)throw n=_r,Vt(e,0),ct(e,r),xe(e,G()),n;if(t===6)ct(e,r);else{if(s=e.current.alternate,!(r&30)&&!_m(s)&&(t=Os(e,r),t===2&&(l=Jl(e),l!==0&&(r=l,t=Si(e,l))),t===1))throw n=_r,Vt(e,0),ct(e,r),xe(e,G()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:It(e,he,Ge);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=xa+500-G(),10<t)){if(ms(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=li(It.bind(null,e,he,Ge),t);break}It(e,he,Ge);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-Ae(r);l=1<<a,a=t[a],a>s&&(s=a),r&=~l}if(r=s,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xm(r/1960))-r,10<r){e.timeoutHandle=li(It.bind(null,e,he,Ge),r);break}It(e,he,Ge);break;case 5:It(e,he,Ge);break;default:throw Error(P(329))}}}return xe(e,G()),e.callbackNode===n?ad.bind(null,e):null}function Si(e,t){var n=nr;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=Os(e,t),e!==2&&(t=he,he=n,t!==null&&Ci(t)),e}function Ci(e){he===null?he=e:he.push.apply(he,e)}function _m(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],l=s.getSnapshot;s=s.value;try{if(!Be(l(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~ya,t&=~Qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function Ao(e){if(I&6)throw Error(P(327));kn();var t=ms(e,0);if(!(t&1))return xe(e,G()),null;var n=Os(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=Si(e,r))}if(n===1)throw n=_r,Vt(e,0),ct(e,t),xe(e,G()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,he,Ge),xe(e,G()),null}function _a(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Tn=G()+500,bs&&Pt())}}function Gt(e){pt!==null&&pt.tag===0&&!(I&6)&&kn();var t=I;I|=1;var n=Re.transition,r=A;try{if(Re.transition=null,A=1,e)return e()}finally{A=r,Re.transition=n,I=t,!(I&6)&&Pt()}}function wa(){_e=yn.current,V(yn)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gf(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xs();break;case 3:Ln(),V(ge),V(ce),ca();break;case 5:ua(r);break;case 4:Ln();break;case 13:V(Q);break;case 19:V(Q);break;case 10:la(r.type._context);break;case 22:case 23:wa()}n=n.return}if(re=e,J=e=wt(e.current,null),le=_e=t,ee=0,_r=null,ya=Qs=Yt=0,he=nr=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=s,r.next=a}n.pending=r}Bt=null}return e}function od(e,t){do{var n=J;try{if(sa(),rs.current=Ps,Es){for(var r=X.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Es=!1}if(Kt=0,ne=q=X=null,er=!1,gr=0,ga.current=null,n===null||n.return===null){ee=1,_r=t,J=null;break}e:{var l=e,a=n.return,o=n,u=t;if(t=le,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=o,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var _=Co(a);if(_!==null){_.flags&=-257,Eo(_,a,o,l,t),_.mode&1&&So(l,c,t),t=_,u=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(u),t.updateQueue=y}else x.add(u);break e}else{if(!(t&1)){So(l,c,t),ja();break e}u=Error(P(426))}}else if(H&&o.mode&1){var v=Co(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Eo(v,a,o,l,t),na(Rn(u,o));break e}}l=u=Rn(u,o),ee!==4&&(ee=2),nr===null?nr=[l]:nr.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Hc(l,u,t);xo(l,p);break e;case 1:o=u;var d=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xt===null||!xt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Qc(l,o,t);xo(l,w);break e}}l=l.return}while(l!==null)}dd(n)}catch(R){t=R,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function ud(){var e=Ls.current;return Ls.current=Ps,e===null?Ps:e}function ja(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(Yt&268435455)&&!(Qs&268435455)||ct(re,le)}function Os(e,t){var n=I;I|=2;var r=ud();(re!==e||le!==t)&&(Ge=null,Vt(e,t));do try{wm();break}catch(s){od(e,s)}while(!0);if(sa(),I=n,Ls.current=r,J!==null)throw Error(P(261));return re=null,le=0,ee}function wm(){for(;J!==null;)cd(J)}function jm(){for(;J!==null&&!Qp();)cd(J)}function cd(e){var t=fd(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?dd(e):J=t,ga.current=null}function dd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hm(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,J=null;return}}else if(n=mm(n,t,_e),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ee===0&&(ee=5)}function It(e,t,n){var r=A,s=Re.transition;try{Re.transition=null,A=1,Nm(e,t,n,r)}finally{Re.transition=s,A=r}return null}function Nm(e,t,n,r){do kn();while(pt!==null);if(I&6)throw Error(P(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(nf(e,l),e===re&&(J=re=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xr||(Xr=!0,md(fs,function(){return kn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Re.transition,Re.transition=null;var a=A;A=1;var o=I;I|=4,ga.current=null,gm(e,n),ld(n,e),Wf(ri),hs=!!ni,ri=ni=null,e.current=n,ym(n),Xp(),I=o,A=a,Re.transition=l}else e.current=n;if(Xr&&(Xr=!1,pt=e,Ts=s),l=e.pendingLanes,l===0&&(xt=null),Gp(n.stateNode),xe(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Rs)throw Rs=!1,e=Ni,Ni=null,e;return Ts&1&&e.tag!==0&&kn(),l=e.pendingLanes,l&1?e===ki?rr++:(rr=0,ki=e):rr=0,Pt(),null}function kn(){if(pt!==null){var e=Hu(Ts),t=Re.transition,n=A;try{if(Re.transition=null,A=16>e?16:e,pt===null)var r=!1;else{if(e=pt,pt=null,Ts=0,I&6)throw Error(P(331));var s=I;for(I|=4,O=e.current;O!==null;){var l=O,a=l.child;if(O.flags&16){var o=l.deletions;if(o!==null){for(var u=0;u<o.length;u++){var c=o[u];for(O=c;O!==null;){var g=O;switch(g.tag){case 0:case 11:case 15:tr(8,g,l)}var f=g.child;if(f!==null)f.return=g,O=f;else for(;O!==null;){g=O;var m=g.sibling,_=g.return;if(nd(g),g===c){O=null;break}if(m!==null){m.return=_,O=m;break}O=_}}}var x=l.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}O=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,O=a;else e:for(;O!==null;){if(l=O,l.flags&2048)switch(l.tag){case 0:case 11:case 15:tr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,O=p;break e}O=l.return}}var d=e.current;for(O=d;O!==null;){a=O;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,O=h;else e:for(a=d;O!==null;){if(o=O,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Hs(9,o)}}catch(R){Y(o,o.return,R)}if(o===a){O=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,O=w;break e}O=o.return}}if(I=s,Pt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Is,e)}catch{}r=!0}return r}finally{A=n,Re.transition=t}}return!1}function Uo(e,t,n){t=Rn(n,t),t=Hc(e,t,1),e=yt(e,t,1),t=pe(),e!==null&&(kr(e,1,t),xe(e,t))}function Y(e,t,n){if(e.tag===3)Uo(e,e,n);else for(;t!==null;){if(t.tag===3){Uo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=Rn(n,e),e=Qc(t,e,1),t=yt(t,e,1),e=pe(),t!==null&&(kr(t,1,e),xe(t,e));break}}t=t.return}}function km(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(le&n)===n&&(ee===4||ee===3&&(le&130023424)===le&&500>G()-xa?Vt(e,0):ya|=n),xe(e,t)}function pd(e,t){t===0&&(e.mode&1?(t=Ir,Ir<<=1,!(Ir&130023424)&&(Ir=4194304)):t=1);var n=pe();e=rt(e,t),e!==null&&(kr(e,t,n),xe(e,n))}function Sm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pd(e,n)}function Cm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),pd(e,n)}var fd;fd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,fm(e,t,n);ve=!!(e.flags&131072)}else ve=!1,H&&t.flags&1048576&&gc(t,js,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ls(e,t),e=t.pendingProps;var s=Cn(t,ce.current);Nn(t,n),s=pa(null,t,r,e,s,n);var l=fa();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(l=!0,_s(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,aa(t),s.updater=Vs,t.stateNode=s,s._reactInternals=t,pi(t,r,e,n),t=hi(null,t,r,!0,l,n)):(t.tag=0,H&&l&&ea(t),de(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ls(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Pm(r),e=Fe(r,e),s){case 0:t=mi(null,t,r,e,n);break e;case 1:t=Ro(null,t,r,e,n);break e;case 11:t=Po(null,t,r,e,n);break e;case 14:t=Lo(null,t,r,Fe(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Fe(r,s),mi(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Fe(r,s),Ro(e,t,r,s,n);case 3:e:{if(Gc(t),e===null)throw Error(P(387));r=t.pendingProps,l=t.memoizedState,s=l.element,Nc(e,t),Ss(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=Rn(Error(P(423)),t),t=To(e,t,r,n,s);break e}else if(r!==s){s=Rn(Error(P(424)),t),t=To(e,t,r,n,s);break e}else for(we=gt(t.stateNode.containerInfo.firstChild),je=t,H=!0,De=null,n=wc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===s){t=st(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return kc(t),e===null&&ui(t),r=t.type,s=t.pendingProps,l=e!==null?e.memoizedProps:null,a=s.children,si(r,s)?a=null:l!==null&&si(r,l)&&(t.flags|=32),Yc(e,t),de(e,t,a,n),t.child;case 6:return e===null&&ui(t),null;case 13:return Jc(e,t,n);case 4:return oa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Fe(r,s),Po(e,t,r,s,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,l=t.memoizedProps,a=s.value,b(Ns,r._currentValue),r._currentValue=a,l!==null)if(Be(l.value,a)){if(l.children===s.children&&!ge.current){t=st(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){a=l.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=et(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),ci(l.return,n,t),o.lanes|=n;break}u=u.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(P(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ci(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}de(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Nn(t,n),s=Te(s),r=r(s),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,s=Fe(r,t.pendingProps),s=Fe(r.type,s),Lo(e,t,r,s,n);case 15:return Xc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Fe(r,s),ls(e,t),t.tag=1,ye(r)?(e=!0,_s(t)):e=!1,Nn(t,n),Vc(t,r,s),pi(t,r,s,n),hi(null,t,r,!0,e,n);case 19:return Zc(e,t,n);case 22:return Kc(e,t,n)}throw Error(P(156,t.tag))};function md(e,t){return Bu(e,t)}function Em(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new Em(e,t,n,r)}function Na(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pm(e){if(typeof e=="function")return Na(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bi)return 11;if(e===Wi)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function os(e,t,n,r,s,l){var a=2;if(r=e,typeof e=="function")Na(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case on:return Ht(n.children,s,l,t);case Bi:a=8,s|=8;break;case Ml:return e=Le(12,n,t,s|2),e.elementType=Ml,e.lanes=l,e;case Il:return e=Le(13,n,t,s),e.elementType=Il,e.lanes=l,e;case Dl:return e=Le(19,n,t,s),e.elementType=Dl,e.lanes=l,e;case ku:return Xs(n,s,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ju:a=10;break e;case Nu:a=9;break e;case bi:a=11;break e;case Wi:a=14;break e;case at:a=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Le(a,n,t,s),t.elementType=e,t.type=r,t.lanes=l,t}function Ht(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Xs(e,t,n,r){return e=Le(22,e,r,t),e.elementType=ku,e.lanes=n,e.stateNode={isHidden:!1},e}function El(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function Pl(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lm(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ka(e,t,n,r,s,l,a,o,u){return e=new Lm(e,t,n,o,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Le(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},aa(l),e}function Rm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hd(e){if(!e)return kt;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(ye(n))return hc(e,n,t)}return t}function vd(e,t,n,r,s,l,a,o,u){return e=ka(n,r,!0,e,s,l,a,o,u),e.context=hd(null),n=e.current,r=pe(),s=_t(n),l=et(r,s),l.callback=t??null,yt(n,l,s),e.current.lanes=s,kr(e,s,r),xe(e,r),e}function Ks(e,t,n,r){var s=t.current,l=pe(),a=_t(s);return n=hd(n),t.context===null?t.context=n:t.pendingContext=n,t=et(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(s,t,a),e!==null&&(Ue(e,s,a,l),ns(e,s,a)),a}function $s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sa(e,t){Bo(e,t),(e=e.alternate)&&Bo(e,t)}function Tm(){return null}var gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}Ys.prototype.render=Ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ks(e,t,null,null)};Ys.prototype.unmount=Ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){Ks(null,e,null,null)}),t[nt]=null}};function Ys(e){this._internalRoot=e}Ys.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&Gu(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bo(){}function Om(e,t,n,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var c=$s(a);l.call(c)}}var a=vd(t,r,e,0,null,!1,!1,"",bo);return e._reactRootContainer=a,e[nt]=a.current,pr(e.nodeType===8?e.parentNode:e),Gt(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var o=r;r=function(){var c=$s(u);o.call(c)}}var u=ka(e,0,!1,null,null,!1,!1,"",bo);return e._reactRootContainer=u,e[nt]=u.current,pr(e.nodeType===8?e.parentNode:e),Gt(function(){Ks(t,u,n,r)}),u}function Js(e,t,n,r,s){var l=n._reactRootContainer;if(l){var a=l;if(typeof s=="function"){var o=s;s=function(){var u=$s(a);o.call(u)}}Ks(t,a,e,s)}else a=Om(n,t,e,s,r);return $s(a)}Qu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xn(t.pendingLanes);n!==0&&(Qi(t,n|1),xe(t,G()),!(I&6)&&(Tn=G()+500,Pt()))}break;case 13:Gt(function(){var r=rt(e,1);if(r!==null){var s=pe();Ue(r,e,1,s)}}),Sa(e,1)}};Xi=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=pe();Ue(t,e,134217728,n)}Sa(e,134217728)}};Xu=function(e){if(e.tag===13){var t=_t(e),n=rt(e,t);if(n!==null){var r=pe();Ue(n,e,t,r)}Sa(e,t)}};Ku=function(){return A};Yu=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};Kl=function(e,t,n){switch(t){case"input":if(Bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Bs(r);if(!s)throw Error(P(90));Cu(r),Bl(r,s)}}}break;case"textarea":Pu(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};Fu=_a;Mu=Gt;var $m={usingClientEntryPoint:!1,Events:[Cr,pn,Bs,$u,zu,_a]},Vn={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zm={bundleType:Vn.bundleType,version:Vn.version,rendererPackageName:Vn.rendererPackageName,rendererConfig:Vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Au(e),e===null?null:e.stateNode},findFiberByHostInstance:Vn.findFiberByHostInstance||Tm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kr.isDisabled&&Kr.supportsFiber)try{Is=Kr.inject(zm),Qe=Kr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$m;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(t))throw Error(P(200));return Rm(e,t,null,n)};Se.createRoot=function(e,t){if(!Ea(e))throw Error(P(299));var n=!1,r="",s=gd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ka(e,1,!1,null,null,n,!1,r,s),e[nt]=t.current,pr(e.nodeType===8?e.parentNode:e),new Ca(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Au(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Gt(e)};Se.hydrate=function(e,t,n){if(!Gs(t))throw Error(P(200));return Js(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Ea(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,s=!1,l="",a=gd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=vd(t,null,e,1,n??null,s,!1,l,a),e[nt]=t.current,pr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Ys(t)};Se.render=function(e,t,n){if(!Gs(t))throw Error(P(200));return Js(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!Gs(e))throw Error(P(40));return e._reactRootContainer?(Gt(function(){Js(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Se.unstable_batchedUpdates=_a;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gs(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Js(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function yd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yd)}catch(e){console.error(e)}}yd(),yu.exports=Se;var Fm=yu.exports,Wo=Fm;zl.createRoot=Wo.createRoot,zl.hydrateRoot=Wo.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wr.apply(null,arguments)}var ft;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ft||(ft={}));const Vo="popstate";function Mm(e){e===void 0&&(e={});function t(s,l){let{pathname:a="/",search:o="",hash:u=""}=qt(s.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Ei("",{pathname:a,search:o,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){let a=s.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let u=s.location.href,c=u.indexOf("#");o=c===-1?u:u.slice(0,c)}return o+"#"+(typeof l=="string"?l:zs(l))}function r(s,l){Zs(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Dm(t,n,r,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Im(){return Math.random().toString(36).substr(2,8)}function Ho(e,t){return{usr:e.state,key:e.key,idx:t}}function Ei(e,t,n,r){return n===void 0&&(n=null),wr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qt(t):t,{state:n,key:t&&t.key||r||Im()})}function zs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Dm(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:l=!1}=r,a=s.history,o=ft.Pop,u=null,c=g();c==null&&(c=0,a.replaceState(wr({},a.state,{idx:c}),""));function g(){return(a.state||{idx:null}).idx}function f(){o=ft.Pop;let v=g(),p=v==null?null:v-c;c=v,u&&u({action:o,location:y.location,delta:p})}function m(v,p){o=ft.Push;let d=Ei(y.location,v,p);n&&n(d,v),c=g()+1;let h=Ho(d,c),w=y.createHref(d);try{a.pushState(h,"",w)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;s.location.assign(w)}l&&u&&u({action:o,location:y.location,delta:1})}function _(v,p){o=ft.Replace;let d=Ei(y.location,v,p);n&&n(d,v),c=g();let h=Ho(d,c),w=y.createHref(d);a.replaceState(h,"",w),l&&u&&u({action:o,location:y.location,delta:0})}function x(v){let p=s.location.origin!=="null"?s.location.origin:s.location.href,d=typeof v=="string"?v:zs(v);return d=d.replace(/ $/,"%20"),Z(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let y={get action(){return o},get location(){return e(s,a)},listen(v){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Vo,f),u=v,()=>{s.removeEventListener(Vo,f),u=null}},createHref(v){return t(s,v)},createURL:x,encodeLocation(v){let p=x(v);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:_,go(v){return a.go(v)}};return y}var Qo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qo||(Qo={}));function Am(e,t,n){return n===void 0&&(n="/"),Um(e,t,n)}function Um(e,t,n,r){let s=typeof t=="string"?qt(t):t,l=Pa(s.pathname||"/",n);if(l==null)return null;let a=xd(e);Bm(a);let o=null,u=qm(l);for(let c=0;o==null&&c<a.length;++c)o=Gm(a[c],u);return o}function xd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(l,a,o)=>{let u={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};u.relativePath.startsWith("/")&&(Z(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=jt([r,u.relativePath]),g=n.concat(u);l.children&&l.children.length>0&&(Z(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xd(l.children,t,g,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:Km(c,l.index),routesMeta:g})};return e.forEach((l,a)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))s(l,a);else for(let u of _d(l.path))s(l,a,u)}),t}function _d(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return s?[l,""]:[l];let a=_d(r.join("/")),o=[];return o.push(...a.map(u=>u===""?l:[l,u].join("/"))),s&&o.push(...a),o.map(u=>e.startsWith("/")&&u===""?"/":u)}function Bm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ym(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bm=/^:[\w-]+$/,Wm=3,Vm=2,Hm=1,Qm=10,Xm=-2,Xo=e=>e==="*";function Km(e,t){let n=e.split("/"),r=n.length;return n.some(Xo)&&(r+=Xm),t&&(r+=Vm),n.filter(s=>!Xo(s)).reduce((s,l)=>s+(bm.test(l)?Wm:l===""?Hm:Qm),r)}function Ym(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function Gm(e,t,n){let{routesMeta:r}=e,s={},l="/",a=[];for(let o=0;o<r.length;++o){let u=r[o],c=o===r.length-1,g=l==="/"?t:t.slice(l.length)||"/",f=Jm({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g),m=u.route;if(!f)return null;Object.assign(s,f.params),a.push({params:s,pathname:jt([l,f.pathname]),pathnameBase:sh(jt([l,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(l=jt([l,f.pathnameBase]))}return a}function Jm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zm(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let l=s[0],a=l.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:r.reduce((c,g,f)=>{let{paramName:m,isOptional:_}=g;if(m==="*"){let y=o[f]||"";a=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const x=o[f];return _&&!x?c[m]=void 0:c[m]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:a,pattern:e}}function Zm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,u)=>(r.push({paramName:o,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function qm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Pa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const eh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,th=e=>eh.test(e);function nh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?qt(e):e,l;if(n)if(th(n))l=n;else{if(n.includes("//")){let a=n;n=Nd(n),Zs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?l=Ko(n.substring(1),"/"):l=Ko(n,t)}else l=t;return{pathname:l,search:lh(r),hash:ih(s)}}function Ko(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ll(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wd(e,t){let n=rh(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jd(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=qt(e):(s=wr({},e),Z(!s.pathname||!s.pathname.includes("?"),Ll("?","pathname","search",s)),Z(!s.pathname||!s.pathname.includes("#"),Ll("#","pathname","hash",s)),Z(!s.search||!s.search.includes("#"),Ll("#","search","hash",s)));let l=e===""||s.pathname==="",a=l?"/":s.pathname,o;if(a==null)o=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}o=f>=0?t[f]:"/"}let u=nh(s,o),c=a&&a!=="/"&&a.endsWith("/"),g=(l||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const Nd=e=>e.replace(/\/\/+/g,"/"),jt=e=>Nd(e.join("/")),sh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ih=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ah(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kd=["post","put","patch","delete"];new Set(kd);const oh=["get",...kd];new Set(oh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jr(){return jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jr.apply(null,arguments)}const La=j.createContext(null),uh=j.createContext(null),en=j.createContext(null),qs=j.createContext(null),Lt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Sd=j.createContext(null);function ch(e,t){let{relative:n}=t===void 0?{}:t;Pr()||Z(!1);let{basename:r,navigator:s}=j.useContext(en),{hash:l,pathname:a,search:o}=Ed(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:jt([r,a])),s.createHref({pathname:u,search:o,hash:l})}function Pr(){return j.useContext(qs)!=null}function Lr(){return Pr()||Z(!1),j.useContext(qs).location}function Cd(e){j.useContext(en).static||j.useLayoutEffect(e)}function el(){let{isDataRoute:e}=j.useContext(Lt);return e?kh():dh()}function dh(){Pr()||Z(!1);let e=j.useContext(La),{basename:t,future:n,navigator:r}=j.useContext(en),{matches:s}=j.useContext(Lt),{pathname:l}=Lr(),a=JSON.stringify(wd(s,n.v7_relativeSplatPath)),o=j.useRef(!1);return Cd(()=>{o.current=!0}),j.useCallback(function(c,g){if(g===void 0&&(g={}),!o.current)return;if(typeof c=="number"){r.go(c);return}let f=jd(c,JSON.parse(a),l,g.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:jt([t,f.pathname])),(g.replace?r.replace:r.push)(f,g.state,g)},[t,r,a,l,e])}function ph(){let{matches:e}=j.useContext(Lt),t=e[e.length-1];return t?t.params:{}}function Ed(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(en),{matches:s}=j.useContext(Lt),{pathname:l}=Lr(),a=JSON.stringify(wd(s,r.v7_relativeSplatPath));return j.useMemo(()=>jd(e,JSON.parse(a),l,n==="path"),[e,a,l,n])}function fh(e,t){return mh(e,t)}function mh(e,t,n,r){Pr()||Z(!1);let{navigator:s}=j.useContext(en),{matches:l}=j.useContext(Lt),a=l[l.length-1],o=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=Lr(),g;if(t){var f;let v=typeof t=="string"?qt(t):t;u==="/"||(f=v.pathname)!=null&&f.startsWith(u)||Z(!1),g=v}else g=c;let m=g.pathname||"/",_=m;if(u!=="/"){let v=u.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(v.length).join("/")}let x=Am(e,{pathname:_}),y=xh(x&&x.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:jt([u,s.encodeLocation?s.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:jt([u,s.encodeLocation?s.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),l,n,r);return t&&y?j.createElement(qs.Provider,{value:{location:jr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ft.Pop}},y):y}function hh(){let e=Nh(),t=ah(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:s},n):null,null)}const vh=j.createElement(hh,null);class gh extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Lt.Provider,{value:this.props.routeContext},j.createElement(Sd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yh(e){let{routeContext:t,match:n,children:r}=e,s=j.useContext(La);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Lt.Provider,{value:t},r)}function xh(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=(s=n)==null?void 0:s.errors;if(o!=null){let g=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);g>=0||Z(!1),a=a.slice(0,Math.min(a.length,g+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<a.length;g++){let f=a[g];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=g),f.route.id){let{loaderData:m,errors:_}=n,x=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||x){u=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((g,f,m)=>{let _,x=!1,y=null,v=null;n&&(_=o&&f.route.id?o[f.route.id]:void 0,y=f.route.errorElement||vh,u&&(c<0&&m===0?(Sh("route-fallback"),x=!0,v=null):c===m&&(x=!0,v=f.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,m+1)),d=()=>{let h;return _?h=y:x?h=v:f.route.Component?h=j.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=g,j.createElement(yh,{match:f,routeContext:{outlet:g,matches:p,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?j.createElement(gh,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Pd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pd||{}),Ld=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ld||{});function _h(e){let t=j.useContext(La);return t||Z(!1),t}function wh(e){let t=j.useContext(uh);return t||Z(!1),t}function jh(e){let t=j.useContext(Lt);return t||Z(!1),t}function Rd(e){let t=jh(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function Nh(){var e;let t=j.useContext(Sd),n=wh(),r=Rd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function kh(){let{router:e}=_h(Pd.UseNavigateStable),t=Rd(Ld.UseNavigateStable),n=j.useRef(!1);return Cd(()=>{n.current=!0}),j.useCallback(function(s,l){l===void 0&&(l={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,jr({fromRouteId:t},l)))},[e,t])}const Yo={};function Sh(e,t,n){Yo[e]||(Yo[e]=!0)}function Ch(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Dt(e){Z(!1)}function Eh(e){let{basename:t="/",children:n=null,location:r,navigationType:s=ft.Pop,navigator:l,static:a=!1,future:o}=e;Pr()&&Z(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:l,static:a,future:jr({v7_relativeSplatPath:!1},o)}),[u,o,l,a]);typeof r=="string"&&(r=qt(r));let{pathname:g="/",search:f="",hash:m="",state:_=null,key:x="default"}=r,y=j.useMemo(()=>{let v=Pa(g,u);return v==null?null:{location:{pathname:v,search:f,hash:m,state:_,key:x},navigationType:s}},[u,g,f,m,_,x,s]);return y==null?null:j.createElement(en.Provider,{value:c},j.createElement(qs.Provider,{children:n,value:y}))}function Ph(e){let{children:t,location:n}=e;return fh(Pi(t),n)}new Promise(()=>{});function Pi(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,s)=>{if(!j.isValidElement(r))return;let l=[...t,s];if(r.type===j.Fragment){n.push.apply(n,Pi(r.props.children,l));return}r.type!==Dt&&Z(!1),!r.props.index||!r.props.children||Z(!1);let a={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Pi(r.props.children,l)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Li(){return Li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Li.apply(null,arguments)}function Lh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Rh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Th(e,t){return e.button===0&&(!t||t==="_self")&&!Rh(e)}const Oh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$h="6";try{window.__reactRouterVersion=$h}catch{}const zh="startTransition",Go=Np[zh];function Fh(e){let{basename:t,children:n,future:r,window:s}=e,l=j.useRef();l.current==null&&(l.current=Mm({window:s,v5Compat:!0}));let a=l.current,[o,u]=j.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},g=j.useCallback(f=>{c&&Go?Go(()=>u(f)):u(f)},[u,c]);return j.useLayoutEffect(()=>a.listen(g),[a,g]),j.useEffect(()=>Ch(r),[r]),j.createElement(Eh,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:r})}const Mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie=j.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:l,replace:a,state:o,target:u,to:c,preventScrollReset:g,viewTransition:f}=t,m=Lh(t,Oh),{basename:_}=j.useContext(en),x,y=!1;if(typeof c=="string"&&Ih.test(c)&&(x=c,Mh))try{let h=new URL(window.location.href),w=c.startsWith("//")?new URL(h.protocol+c):new URL(c),R=Pa(w.pathname,_);w.origin===h.origin&&R!=null?c=R+w.search+w.hash:y=!0}catch{}let v=ch(c,{relative:s}),p=Dh(c,{replace:a,state:o,target:u,preventScrollReset:g,relative:s,viewTransition:f});function d(h){r&&r(h),h.defaultPrevented||p(h)}return j.createElement("a",Li({},m,{href:x||v,onClick:y||l?r:d,ref:n,target:u}))});var Jo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Jo||(Jo={}));var Zo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Zo||(Zo={}));function Dh(e,t){let{target:n,replace:r,state:s,preventScrollReset:l,relative:a,viewTransition:o}=t===void 0?{}:t,u=el(),c=Lr(),g=Ed(e,{relative:a});return j.useCallback(f=>{if(Th(f,n)){f.preventDefault();let m=r!==void 0?r:zs(c)===zs(g);u(e,{replace:m,state:s,preventScrollReset:l,relative:a,viewTransition:o})}},[c,u,g,r,s,n,e,l,a,o])}const Ah="modulepreload",Uh=function(e){return"/python-web-try/"+e},qo={},Ve=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=Uh(u),u in qo)return;qo[u]=!0;const c=u.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Ah,c||(f.as="script"),f.crossOrigin="",f.href=u,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&l(o.reason);return t().catch(l)})};var Bh=Object.defineProperty,M=(e,t)=>Bh(e,"name",{value:t,configurable:!0}),Td=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function Od(e){return!isNaN(parseFloat(e))&&isFinite(e)}M(Od,"_isNumber");function St(e){return e.charAt(0).toUpperCase()+e.substring(1)}M(St,"_capitalize");function tl(e){return function(){return this[e]}}M(tl,"_getter");var rn=["isConstructor","isEval","isNative","isToplevel"],sn=["columnNumber","lineNumber"],ln=["fileName","functionName","source"],bh=["args"],Wh=["evalOrigin"],Yr=rn.concat(sn,ln,bh,Wh);function Ne(e){if(e)for(var t=0;t<Yr.length;t++)e[Yr[t]]!==void 0&&this["set"+St(Yr[t])](e[Yr[t]])}M(Ne,"StackFrame");Ne.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof Ne)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new Ne(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",n=this.getColumnNumber()||"",r=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+n+")":"[eval]:"+t+":"+n:r?r+" ("+e+":"+t+":"+n+")":e+":"+t+":"+n}};Ne.fromString=M(function(e){var t=e.indexOf("("),n=e.lastIndexOf(")"),r=e.substring(0,t),s=e.substring(t+1,n).split(","),l=e.substring(n+1);if(l.indexOf("@")===0)var a=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(l,""),o=a[1],u=a[2],c=a[3];return new Ne({functionName:r,args:s||void 0,fileName:o,lineNumber:u||void 0,columnNumber:c||void 0})},"StackFrame$$fromString");for($t=0;$t<rn.length;$t++)Ne.prototype["get"+St(rn[$t])]=tl(rn[$t]),Ne.prototype["set"+St(rn[$t])]=function(e){return function(t){this[e]=!!t}}(rn[$t]);var $t;for(zt=0;zt<sn.length;zt++)Ne.prototype["get"+St(sn[zt])]=tl(sn[zt]),Ne.prototype["set"+St(sn[zt])]=function(e){return function(t){if(!Od(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(sn[zt]);var zt;for(Ft=0;Ft<ln.length;Ft++)Ne.prototype["get"+St(ln[Ft])]=tl(ln[Ft]),Ne.prototype["set"+St(ln[Ft])]=function(e){return function(t){this[e]=String(t)}}(ln[Ft]);var Ft,Rl=Ne;function $d(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:M(function(n){if(n.stack&&n.stack.match(e))return this.parseV8OrIE(n);if(n.stack)return this.parseFFOrSafari(n);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:M(function(n){if(n.indexOf(":")===-1)return[n];var r=/(.+?)(?::(\d+))?(?::(\d+))?$/,s=r.exec(n.replace(/[()]/g,""));return[s[1],s[2]||void 0,s[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:M(function(n){var r=n.stack.split(`
`).filter(function(s){return!!s.match(e)},this);return r.map(function(s){s.indexOf("(eval ")>-1&&(s=s.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var l=s.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),a=l.match(/ (\(.+\)$)/);l=a?l.replace(a[0],""):l;var o=this.extractLocation(a?a[1]:l),u=a&&l||void 0,c=["eval","<anonymous>"].indexOf(o[0])>-1?void 0:o[0];return new Rl({functionName:u,fileName:c,lineNumber:o[1],columnNumber:o[2],source:s})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:M(function(n){var r=n.stack.split(`
`).filter(function(s){return!s.match(t)},this);return r.map(function(s){if(s.indexOf(" > eval")>-1&&(s=s.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),s.indexOf("@")===-1&&s.indexOf(":")===-1)return new Rl({functionName:s});var l=/((.*".+"[^@]*)?[^@]*)(?:@)/,a=s.match(l),o=a&&a[1]?a[1]:void 0,u=this.extractLocation(s.replace(l,""));return new Rl({functionName:o,fileName:u[0],lineNumber:u[1],columnNumber:u[2],source:s})},this)},"ErrorStackParser$$parseFFOrSafari")}}M($d,"ErrorStackParser");var Vh=new $d,Hh=Vh,Ke=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,zd=Ke&&typeof $i<"u"&&typeof $i.exports<"u"&&typeof Td<"u"&&typeof __dirname<"u",Qh=Ke&&!zd,Xh=typeof Deno<"u",Fd=!Ke&&!Xh,Kh=Fd&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",Yh=Fd&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var Md,Ri,Id,eu,Ra;async function Ta(){if(!Ke||(Md=(await Ve(async()=>{const{default:l}=await import("./__vite-browser-external-BIHI7g3E.js");return{default:l}},[])).default,eu=await Ve(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),Ra=await Ve(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),Id=(await Ve(async()=>{const{default:l}=await import("./__vite-browser-external-BIHI7g3E.js");return{default:l}},[])).default,Ri=await Ve(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),Oa=Ri.sep,typeof Td<"u"))return;let e=eu,t=await Ve(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),n=await Ve(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),r=await Ve(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),s={fs:e,crypto:t,ws:n,child_process:r};globalThis.require=function(l){return s[l]}}M(Ta,"initNodeModules");function Dd(e,t){return Ri.resolve(t||".",e)}M(Dd,"node_resolvePath");function Ad(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}M(Ad,"browser_resolvePath");var Ti;Ke?Ti=Dd:Ti=Ad;var Oa;Ke||(Oa="/");function Ud(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:Ra.readFile(e).then(n=>new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}}M(Ud,"node_getBinaryResponse");function Bd(e,t){let n=new URL(e,location);return{response:fetch(n,t?{integrity:t}:{})}}M(Bd,"browser_getBinaryResponse");var Fs;Ke?Fs=Ud:Fs=Bd;async function bd(e,t){let{response:n,binary:r}=Fs(e,t);if(r)return r;let s=await n;if(!s.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await s.arrayBuffer())}M(bd,"loadBinaryFile");var us;if(Kh)us=M(async e=>await import(e),"loadScript");else if(Yh)us=M(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},"loadScript");else if(Ke)us=Wd;else throw new Error("Cannot determine runtime environment");async function Wd(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?Id.runInThisContext(await(await fetch(e)).text()):await import(Md.pathToFileURL(e).href)}M(Wd,"nodeLoadScript");async function Vd(e){if(Ke){await Ta();let t=await Ra.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}M(Vd,"loadLockFile");async function Hd(){if(zd)return __dirname;let e;try{throw new Error}catch(r){e=r}let t=Hh.parse(e)[0].fileName;if(Ke&&!t.startsWith("file://")&&(t=`file://${t}`),Qh){let r=await Ve(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);return(await Ve(async()=>{const{fileURLToPath:s}=await import("./__vite-browser-external-BIHI7g3E.js");return{fileURLToPath:s}},[])).fileURLToPath(r.dirname(t))}let n=t.lastIndexOf(Oa);if(n===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,n)}M(Hd,"calculateDirname");function Qd(e){let t=e.FS,n=e.FS.filesystems.MEMFS,r=e.PATH,s={DIR_MODE:16895,FILE_MODE:33279,mount:function(l){if(!l.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return n.mount.apply(null,arguments)},syncfs:async(l,a,o)=>{try{let u=s.getLocalSet(l),c=await s.getRemoteSet(l),g=a?c:u,f=a?u:c;await s.reconcile(l,g,f),o(null)}catch(u){o(u)}},getLocalSet:l=>{let a=Object.create(null);function o(g){return g!=="."&&g!==".."}M(o,"isRealDir");function u(g){return f=>r.join2(g,f)}M(u,"toAbsolute");let c=t.readdir(l.mountpoint).filter(o).map(u(l.mountpoint));for(;c.length;){let g=c.pop(),f=t.stat(g);t.isDir(f.mode)&&c.push.apply(c,t.readdir(g).filter(o).map(u(g))),a[g]={timestamp:f.mtime,mode:f.mode}}return{type:"local",entries:a}},getRemoteSet:async l=>{let a=Object.create(null),o=await Gh(l.opts.fileSystemHandle);for(let[u,c]of o)u!=="."&&(a[r.join2(l.mountpoint,u)]={timestamp:c.kind==="file"?(await c.getFile()).lastModifiedDate:new Date,mode:c.kind==="file"?s.FILE_MODE:s.DIR_MODE});return{type:"remote",entries:a,handles:o}},loadLocalEntry:l=>{let a=t.lookupPath(l).node,o=t.stat(l);if(t.isDir(o.mode))return{timestamp:o.mtime,mode:o.mode};if(t.isFile(o.mode))return a.contents=n.getFileDataAsTypedArray(a),{timestamp:o.mtime,mode:o.mode,contents:a.contents};throw new Error("node type not supported")},storeLocalEntry:(l,a)=>{if(t.isDir(a.mode))t.mkdirTree(l,a.mode);else if(t.isFile(a.mode))t.writeFile(l,a.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(l,a.mode),t.utime(l,a.timestamp,a.timestamp)},removeLocalEntry:l=>{var a=t.stat(l);t.isDir(a.mode)?t.rmdir(l):t.isFile(a.mode)&&t.unlink(l)},loadRemoteEntry:async l=>{if(l.kind==="file"){let a=await l.getFile();return{contents:new Uint8Array(await a.arrayBuffer()),mode:s.FILE_MODE,timestamp:a.lastModifiedDate}}else{if(l.kind==="directory")return{mode:s.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+l.kind)}},storeRemoteEntry:async(l,a,o)=>{let u=l.get(r.dirname(a)),c=t.isFile(o.mode)?await u.getFileHandle(r.basename(a),{create:!0}):await u.getDirectoryHandle(r.basename(a),{create:!0});if(c.kind==="file"){let g=await c.createWritable();await g.write(o.contents),await g.close()}l.set(a,c)},removeRemoteEntry:async(l,a)=>{await l.get(r.dirname(a)).removeEntry(r.basename(a)),l.delete(a)},reconcile:async(l,a,o)=>{let u=0,c=[];Object.keys(a.entries).forEach(function(m){let _=a.entries[m],x=o.entries[m];(!x||t.isFile(_.mode)&&_.timestamp.getTime()>x.timestamp.getTime())&&(c.push(m),u++)}),c.sort();let g=[];if(Object.keys(o.entries).forEach(function(m){a.entries[m]||(g.push(m),u++)}),g.sort().reverse(),!u)return;let f=a.type==="remote"?a.handles:o.handles;for(let m of c){let _=r.normalize(m.replace(l.mountpoint,"/")).substring(1);if(o.type==="local"){let x=f.get(_),y=await s.loadRemoteEntry(x);s.storeLocalEntry(m,y)}else{let x=s.loadLocalEntry(m);await s.storeRemoteEntry(f,_,x)}}for(let m of g)if(o.type==="local")s.removeLocalEntry(m);else{let _=r.normalize(m.replace(l.mountpoint,"/")).substring(1);await s.removeRemoteEntry(f,_)}}};e.FS.filesystems.NATIVEFS_ASYNC=s}M(Qd,"initializeNativeFS");var Gh=M(async e=>{let t=[];async function n(s){for await(let l of s.values())t.push(l),l.kind==="directory"&&await n(l)}M(n,"collect"),await n(e);let r=new Map;r.set(".",e);for(let s of t){let l=(await e.resolve(s)).join("/");r.set(l,s)}return r},"getFsHandles");function Xd(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Zd(e),quit(n,r){throw t.exited={status:n,toThrow:r},r},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:n=>e.indexURL+n,instantiateWasm:qd(e.indexURL)};return t}M(Xd,"createSettings");function Kd(e){return function(t){let n="/";try{t.FS.mkdirTree(e)}catch(r){console.error(`Error occurred while making a home directory '${e}':`),console.error(r),console.error(`Using '${n}' for a home directory instead`),e=n}t.FS.chdir(e)}}M(Kd,"createHomeDirectory");function Yd(e){return function(t){Object.assign(t.ENV,e)}}M(Yd,"setEnvironment");function Gd(e){return t=>{for(let n of e)t.FS.mkdirTree(n),t.FS.mount(t.FS.filesystems.NODEFS,{root:n},n)}}M(Gd,"mountLocalDirectories");function Jd(e){let t=bd(e);return n=>{let r=n._py_version_major(),s=n._py_version_minor();n.FS.mkdirTree("/lib"),n.FS.mkdirTree(`/lib/python${r}.${s}/site-packages`),n.addRunDependency("install-stdlib"),t.then(l=>{n.FS.writeFile(`/lib/python${r}${s}.zip`,l)}).catch(l=>{console.error("Error occurred while installing the standard library:"),console.error(l)}).finally(()=>{n.removeRunDependency("install-stdlib")})}}M(Jd,"installStdlib");function Zd(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[Jd(t),Kd(e.env.HOME),Yd(e.env),Gd(e._node_mounts),Qd]}M(Zd,"getFileSystemInitializationFuncs");function qd(e){let{binary:t,response:n}=Fs(e+"pyodide.asm.wasm");return function(r,s){return async function(){try{let l;n?l=await WebAssembly.instantiateStreaming(n,r):l=await WebAssembly.instantiate(await t,r);let{instance:a,module:o}=l;typeof WasmOffsetConverter<"u"&&(wasmOffsetConverter=new WasmOffsetConverter(wasmBinary,o)),s(a,o)}catch(l){console.warn("wasm instantiation failed!"),console.warn(l)}}(),{}}}M(qd,"getInstantiateWasmFunc");var tu="0.26.4";async function ep(e={}){var t,n;await Ta();let r=e.indexURL||await Hd();r=Ti(r),r.endsWith("/")||(r+="/"),e.indexURL=r;let s={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:r+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:r,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0},l=Object.assign(s,e);(t=l.env).HOME??(t.HOME="/home/pyodide"),(n=l.env).PYTHONINSPECT??(n.PYTHONINSPECT="1");let a=Xd(l),o=a.API;if(o.lockFilePromise=Vd(l.lockFileURL),typeof _createPyodideModule!="function"){let m=`${l.indexURL}pyodide.asm.js`;await us(m)}let u;if(e._loadSnapshot){let m=await e._loadSnapshot;ArrayBuffer.isView(m)?u=m:u=new Uint8Array(m),a.noInitialRun=!0,a.INITIAL_MEMORY=u.length}let c=await _createPyodideModule(a);if(a.exited)throw a.exited.toThrow;if(e.pyproxyToStringRepr&&o.setPyProxyToStringMethod(!0),o.version!==tu&&l.checkAPIVersion)throw new Error(`Pyodide version does not match: '${tu}' <==> '${o.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);c.locateFile=m=>{throw new Error("Didn't expect to load any more file_packager files!")};let g;u&&(g=o.restoreSnapshot(u));let f=o.finalizeBootstrap(g);return o.sys.path.insert(0,o.config.env.HOME),f.version.includes("dev")||o.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${f.version}/full/`),o._pyodide.set_excepthook(),await o.packageIndexReady,o.initializeStreams(l.stdin,l.stdout,l.stderr),f}M(ep,"loadPyodide");const tp=j.createContext(void 0),Jh={pyodide:null,isLoading:!1,error:null,runCode:async()=>({output:"",error:"Python 环境未初始化"}),runCodeWithTests:async()=>({output:"",error:"Python 环境未初始化",passed:!1,testResults:[]}),retryLoad:()=>{}};function Zh({children:e}){const[t,n]=j.useState(null),[r,s]=j.useState(!1),[l,a]=j.useState(null),o=j.useRef(!1),u=j.useCallback(async()=>{if(!o.current){o.current=!0,s(!0),a(null);try{await new Promise(_=>setTimeout(_,100));const m=await ep({indexURL:"/python-web-try/pyodide/"});await m.runPythonAsync(`
import sys
import io
import traceback
`),n(m)}catch(m){console.warn("Pyodide load failed (non-fatal):",m),a(m instanceof Error?m.message:"加载Python运行环境失败"),o.current=!1}finally{s(!1)}}},[]);j.useEffect(()=>{const m=setTimeout(()=>{u().catch(()=>{})},500);return()=>clearTimeout(m)},[u]);const c=j.useCallback(()=>{o.current=!1,n(null),a(null),u().catch(()=>{})},[u]),g=j.useCallback(async m=>{if(!t)return{output:"",error:"Python 环境尚未就绪，请稍后再试"};try{t.runPython(`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
`),await t.runPythonAsync(m);const _=t.runPython("_output_buffer.getvalue()");return t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`),{output:_||"代码执行完成，无输出",error:null}}catch(_){let x="";try{const y=t.runPython("_output_buffer.getvalue()");y&&(x=y+`
`)}catch{}_.message?x+=_.message:typeof _=="string"?x+=_:x+="未知错误";try{t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)}catch{}return{output:"",error:x}}},[t]),f=j.useCallback(async(m,_)=>{if(!t)return{output:"",error:"Python 环境尚未就绪",passed:!1,testResults:[]};const x=[];let y=!0,v="";try{t.runPython(`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
`),await t.runPythonAsync(m),v=t.runPython("_output_buffer.getvalue()"),t.runPython(`
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer

_test_results = []
`),await t.runPythonAsync(_);const d=t.runPython(`
import json
json.dumps(_test_results)
`),h=JSON.parse(d);x.push(...h),y=h.every(R=>R.passed);const w=t.runPython("_output_buffer.getvalue()");return w&&(v+=`
--- 测试输出 ---
`+w),t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`),{output:v||"代码执行完成，无输出",error:null,passed:y,testResults:x}}catch(p){let d="";try{const h=t.runPython("_output_buffer.getvalue()");h&&(d=h+`
`)}catch{}p.message?d+=p.message:typeof p=="string"?d+=p:d+="未知错误";try{t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)}catch{}return{output:v,error:d,passed:!1,testResults:[]}}},[t]);return i.jsx(tp.Provider,{value:{pyodide:t,isLoading:r,error:l,runCode:g,runCodeWithTests:f,retryLoad:c},children:e})}function np(){const e=j.useContext(tp);return e===void 0?(console.warn("usePyodide called outside PyodideProvider, using default"),Jh):e}const At=[{id:"first-step",title:"初出茅庐",description:"完成第一个学习步骤",icon:"🌱",category:"learning",rarity:"common",xpReward:20,condition:e=>e.completedLessons>=1,progress:e=>({current:Math.min(e.completedLessons,1),total:1})},{id:"lesson-10",title:"勤学不辍",description:"完成 10 个学习步骤",icon:"📚",category:"learning",rarity:"common",xpReward:50,condition:e=>e.completedLessons>=10,progress:e=>({current:Math.min(e.completedLessons,10),total:10})},{id:"lesson-50",title:"学富五车",description:"完成 50 个学习步骤",icon:"🎓",category:"learning",rarity:"rare",xpReward:200,condition:e=>e.completedLessons>=50,progress:e=>({current:Math.min(e.completedLessons,50),total:50})},{id:"first-challenge",title:"初战告捷",description:"完成第一个编程挑战",icon:"🎯",category:"challenge",rarity:"common",xpReward:30,condition:e=>e.completedChallenges>=1,progress:e=>({current:Math.min(e.completedChallenges,1),total:1})},{id:"challenge-5",title:"小试牛刀",description:"完成 5 个编程挑战",icon:"⚔️",category:"challenge",rarity:"common",xpReward:80,condition:e=>e.completedChallenges>=5,progress:e=>({current:Math.min(e.completedChallenges,5),total:5})},{id:"challenge-15",title:"身经百战",description:"完成 15 个编程挑战",icon:"🛡️",category:"challenge",rarity:"rare",xpReward:200,condition:e=>e.completedChallenges>=15,progress:e=>({current:Math.min(e.completedChallenges,15),total:15})},{id:"level-1",title:"初窥门径",description:"完成第 1 个关卡",icon:"🚪",category:"mastery",rarity:"common",xpReward:50,condition:e=>e.completedLevels>=1,progress:e=>({current:Math.min(e.completedLevels,1),total:1})},{id:"level-half",title:"半程英雄",description:"完成 50% 的关卡",icon:"⭐",category:"mastery",rarity:"rare",xpReward:300,condition:e=>e.completedLevels>=Math.ceil(e.totalLevels/2),progress:e=>({current:Math.min(e.completedLevels,Math.ceil(e.totalLevels/2)),total:Math.ceil(e.totalLevels/2)})},{id:"level-all",title:"登峰造极",description:"完成所有关卡",icon:"👑",category:"mastery",rarity:"legendary",xpReward:1e3,condition:e=>e.completedLevels>=e.totalLevels&&e.totalLevels>0,progress:e=>({current:Math.min(e.completedLevels,e.totalLevels),total:e.totalLevels})},{id:"xp-100",title:"小有所成",description:"累计获得 100 XP",icon:"💫",category:"learning",rarity:"common",xpReward:30,condition:e=>e.totalXP>=100,progress:e=>({current:Math.min(e.totalXP,100),total:100})},{id:"xp-500",title:"中流砥柱",description:"累计获得 500 XP",icon:"✨",category:"learning",rarity:"rare",xpReward:100,condition:e=>e.totalXP>=500,progress:e=>({current:Math.min(e.totalXP,500),total:500})},{id:"xp-1000",title:"登堂入室",description:"累计获得 1000 XP",icon:"🌟",category:"learning",rarity:"epic",xpReward:250,condition:e=>e.totalXP>=1e3,progress:e=>({current:Math.min(e.totalXP,1e3),total:1e3})},{id:"streak-3",title:"坚持不懈",description:"连续学习 3 天",icon:"🔥",category:"streak",rarity:"common",xpReward:50,condition:e=>e.streak>=3,progress:e=>({current:Math.min(e.streak,3),total:3})},{id:"streak-7",title:"周周向上",description:"连续学习 7 天",icon:"🔥",category:"streak",rarity:"rare",xpReward:150,condition:e=>e.streak>=7,progress:e=>({current:Math.min(e.streak,7),total:7})},{id:"streak-30",title:"持之以恒",description:"连续学习 30 天",icon:"🌋",category:"streak",rarity:"epic",xpReward:500,condition:e=>e.streak>=30,progress:e=>({current:Math.min(e.streak,30),total:30})},{id:"all-rounder",title:"全能选手",description:"同时拥有 5 个成就",icon:"🏆",category:"special",rarity:"epic",xpReward:300,condition:e=>e.completedLessons>=5&&e.completedChallenges>=5&&e.completedLevels>=1},{id:"first-day",title:"启航",description:"欢迎来到 Python Quest",icon:"🎉",category:"special",rarity:"common",xpReward:10,condition:()=>!0}],Tl=[{id:"all",label:"全部",icon:"🏆"},{id:"learning",label:"学习",icon:"📚"},{id:"challenge",label:"挑战",icon:"⚔️"},{id:"mastery",label:"精通",icon:"👑"},{id:"streak",label:"连续",icon:"🔥"},{id:"special",label:"特殊",icon:"✨"}],nu={common:{label:"普通",color:"#94a3b8",bg:"rgba(148, 163, 184, 0.15)"},rare:{label:"稀有",color:"#3b82f6",bg:"rgba(59, 130, 246, 0.15)"},epic:{label:"史诗",color:"#a855f7",bg:"rgba(168, 85, 247, 0.15)"},legendary:{label:"传说",color:"#f59e0b",bg:"rgba(245, 158, 11, 0.15)"}},qh=[{rank:1,name:"PythonMaster",avatar:"PM",xp:2850,streak:45,levels:9,color:"#f59e0b"},{rank:2,name:"CodeWizard",avatar:"CW",xp:2340,streak:32,levels:8,color:"#a855f7"},{rank:3,name:"DataDragon",avatar:"DD",xp:1980,streak:28,levels:8,color:"#3b82f6"},{rank:4,name:"LoopLegend",avatar:"LL",xp:1650,streak:21,levels:7,color:"#10b981"},{rank:5,name:"FunctionFox",avatar:"FF",xp:1320,streak:18,levels:6,color:"#ec4899"},{rank:6,name:"SyntaxSage",avatar:"SS",xp:1080,streak:15,levels:5,color:"#06b6d4"},{rank:7,name:"BinaryBard",avatar:"BB",xp:920,streak:12,levels:4,color:"#84cc16"},{rank:8,name:"RecursionR",avatar:"RR",xp:760,streak:10,levels:3,color:"#f97316"},{rank:9,name:"TupleTitan",avatar:"TT",xp:540,streak:8,levels:2,color:"#8b5cf6"},{rank:10,name:"StringSlayer",avatar:"ST",xp:320,streak:5,levels:1,color:"#ef4444"}],nn="python-quest-progress",Ol="v3",ru=()=>new Date().toISOString().slice(0,10),su={xp:50,totalXP:500,streak:7,studyDays:[ru()],lastStudyDate:ru(),levels:{1:{unlocked:!0,completed:!1,lessons:{},challenges:{}},2:{unlocked:!0,completed:!1,lessons:{},challenges:{}},3:{unlocked:!0,completed:!1,lessons:{},challenges:{}},4:{unlocked:!0,completed:!1,lessons:{},challenges:{}},5:{unlocked:!0,completed:!1,lessons:{},challenges:{}},6:{unlocked:!0,completed:!1,lessons:{},challenges:{}},7:{unlocked:!0,completed:!1,lessons:{},challenges:{}},8:{unlocked:!0,completed:!1,lessons:{},challenges:{}},9:{unlocked:!0,completed:!1,lessons:{},challenges:{}}},unlockedAchievements:["first-day"],claimedAchievements:[],activityLog:[{id:"welcome",type:"achievement",title:"欢迎来到 Python Quest",description:"开始你的编程冒险之旅",xp:10,timestamp:new Date().toISOString(),icon:"🎉"}]},rp=j.createContext(void 0);function lu(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function ev({children:e}){const[t,n]=j.useState(()=>{try{const N=localStorage.getItem(nn),k=localStorage.getItem(nn+"-version");if(N&&k===Ol)return JSON.parse(N);localStorage.setItem(nn+"-version",Ol)}catch{}return su});j.useEffect(()=>{try{localStorage.setItem(nn,JSON.stringify(t))}catch{}},[t]);const r=j.useCallback(N=>{const k=Object.values(N.levels).reduce((U,$e)=>U+Object.values($e.lessons).filter(Ye=>Ye.completed).length,0),S=Object.values(N.levels).reduce((U,$e)=>U+Object.values($e.challenges).filter(Ye=>Ye.completed).length,0),C=Object.values(N.levels).filter(U=>U.completed).length,E=Object.keys(N.levels).length,L={totalXP:N.totalXP,streak:N.streak,completedLevels:C,completedLessons:k,completedChallenges:S,perfectChallenges:S,totalLevels:E},D=[];for(const U of At)N.unlockedAchievements.includes(U.id)||U.condition(L)&&D.push(U.id);return D.length>0?{...N,unlockedAchievements:[...N.unlockedAchievements,...D]}:N},[]),s=j.useCallback((N,k)=>{var S,C;return((C=(S=t.levels[N])==null?void 0:S.lessons[k])==null?void 0:C.completed)||!1},[t]),l=j.useCallback((N,k)=>{var S,C;return((C=(S=t.levels[N])==null?void 0:S.challenges[k])==null?void 0:C.completed)||!1},[t]),a=j.useCallback(N=>{var k;return((k=t.levels[N])==null?void 0:k.unlocked)||!1},[t]),o=j.useCallback(N=>{var k;return((k=t.levels[N])==null?void 0:k.completed)||!1},[t]),u=j.useCallback(N=>t.unlockedAchievements.includes(N),[t]),c=j.useCallback(N=>t.claimedAchievements.includes(N),[t]),g=j.useCallback((N,k,S)=>{n(C=>{const E=C.levels[N]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},L=E.lessons[k]||{completed:!1};if(L.completed)return C;const D={...E.lessons,[k]:{...L,completed:!0,lastCode:S||L.lastCode,completedAt:new Date().toISOString()}};let U={...C,levels:{...C.levels,[N]:{...E,lessons:D}}};return U=r(U),U})},[r]),f=j.useCallback((N,k,S=10,C)=>{n(E=>{const L=E.levels[N]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},D=L.challenges[k]||{completed:!1,attempts:0},U=D.completed,$e={...L.challenges,[k]:{...D,completed:!0,lastCode:C||D.lastCode,completedAt:new Date().toISOString(),attempts:D.attempts+1}},Ye=Object.values($e).every(B=>B.completed),Mn=Object.values(L.lessons).every(B=>B.completed),Rt=Ye&&Mn,T=N+1,z={...E.levels,[N]:{...L,challenges:$e,completed:Rt}};Rt&&E.levels[T]&&(z[T]={...E.levels[T],unlocked:!0});let $={...E,xp:U?E.xp:E.xp+S,totalXP:U?E.totalXP:E.totalXP+S,levels:z};if(Rt){const B={id:lu(),type:"level",title:`完成第 ${N} 关`,description:"解锁下一关卡",timestamp:new Date().toISOString(),icon:"🎊"};$={...$,activityLog:[B,...$.activityLog].slice(0,100)}}return $=r($),$})},[r]),m=j.useCallback(N=>{n(k=>{if(!k.unlockedAchievements.includes(N)||k.claimedAchievements.includes(N))return k;const S=At.find(E=>E.id===N);if(!S)return k;const C={id:lu(),type:"achievement",title:`解锁成就：${S.title}`,description:S.description,xp:S.xpReward,timestamp:new Date().toISOString(),icon:S.icon};return{...k,xp:k.xp+S.xpReward,totalXP:k.totalXP+S.xpReward,claimedAchievements:[...k.claimedAchievements,N],activityLog:[C,...k.activityLog].slice(0,100)}})},[]),_=j.useCallback((N,k)=>{var S,C;return(C=(S=t.levels[N])==null?void 0:S.lessons[k])==null?void 0:C.lastCode},[t]),x=j.useCallback((N,k)=>{var S,C;return(C=(S=t.levels[N])==null?void 0:S.challenges[k])==null?void 0:C.lastCode},[t]),y=j.useCallback((N,k,S)=>{n(C=>{const E=C.levels[N]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},L=E.lessons[k]||{completed:!1};return{...C,levels:{...C.levels,[N]:{...E,lessons:{...E.lessons,[k]:{...L,lastCode:S}}}}}})},[]),v=j.useCallback((N,k,S)=>{n(C=>{const E=C.levels[N]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},L=E.challenges[k]||{completed:!1,attempts:0};return{...C,levels:{...C.levels,[N]:{...E,challenges:{...E.challenges,[k]:{...L,lastCode:S}}}}}})},[]),p=j.useCallback(N=>{const k=t.levels[N];if(!k)return{completed:0,total:0,percent:0};const S=Object.values(k.lessons),C=Object.values(k.challenges),E=S.filter(D=>D.completed).length+C.filter(D=>D.completed).length,L=S.length+C.length;return{completed:E,total:L,percent:L>0?Math.round(E/L*100):0}},[t]),d=j.useCallback(()=>{let N=0,k=0;for(const S of Object.values(t.levels))N+=Object.keys(S.lessons).length+Object.keys(S.challenges).length,k+=Object.values(S.lessons).filter(C=>C.completed).length,k+=Object.values(S.challenges).filter(C=>C.completed).length;return{completed:k,total:N,percent:N>0?Math.round(k/N*100):0}},[t]),h=j.useCallback((N=10)=>t.activityLog.slice(0,N),[t]),w=j.useCallback(()=>{n(su);try{localStorage.removeItem(nn),localStorage.setItem(nn+"-version",Ol)}catch{}},[]),R=j.useMemo(()=>{const N=Object.values(t.levels).reduce((E,L)=>E+Object.values(L.lessons).filter(D=>D.completed).length,0),k=Object.values(t.levels).reduce((E,L)=>E+Object.values(L.challenges).filter(D=>D.completed).length,0),S=Object.values(t.levels).filter(E=>E.completed).length,C=Object.keys(t.levels).length;return{totalXP:t.totalXP,streak:t.streak,completedLevels:S,completedLessons:N,completedChallenges:k,perfectChallenges:k,totalLevels:C}},[t]);return i.jsx(rp.Provider,{value:{progress:t,stats:R,isLessonCompleted:s,isChallengeCompleted:l,isLevelUnlocked:a,isLevelCompleted:o,isAchievementUnlocked:u,isAchievementClaimed:c,completeLesson:g,completeChallenge:f,claimAchievement:m,getLessonCode:_,getChallengeCode:x,saveLessonCode:y,saveChallengeCode:v,getLevelProgress:p,getOverallProgress:d,getRecentActivities:h,resetProgress:w},children:e})}function Fn(){const e=j.useContext(rp);if(e===void 0)throw new Error("useProgress must be used within a ProgressProvider");return e}function tv({showUserInfo:e}){const t=Lr(),{progress:n}=Fn(),r=t.pathname==="/",s=e!==void 0?e:!r;return i.jsx("nav",{className:`navbar ${r?"navbar-home":"navbar-inner"}`,children:i.jsxs("div",{className:"navbar-container container",children:[i.jsxs(Ie,{to:"/",className:"navbar-logo",children:[i.jsx("div",{className:"logo-icon",children:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),i.jsx("span",{className:"logo-text",children:"Python Quest"})]}),i.jsxs("div",{className:"navbar-links",children:[i.jsx(Ie,{to:"/",className:`nav-link ${t.pathname==="/"?"active":""}`,children:"首页"}),i.jsx(Ie,{to:"/map",className:`nav-link ${t.pathname==="/map"?"active":""}`,children:"冒险地图"}),i.jsx(Ie,{to:"/path",className:`nav-link ${t.pathname==="/path"?"active":""}`,children:"学习路径"}),i.jsx(Ie,{to:"/achievements",className:`nav-link ${t.pathname==="/achievements"?"active":""}`,children:"成就"}),i.jsx(Ie,{to:"/leaderboard",className:`nav-link ${t.pathname==="/leaderboard"?"active":""}`,children:"排行榜"})]}),i.jsxs("div",{className:"navbar-actions",children:[s&&i.jsxs("div",{className:"user-info",children:[i.jsxs("div",{className:"xp-badge",children:[i.jsx("span",{className:"xp-icon",children:"⭐"}),i.jsxs("span",{className:"xp-text",children:[n.xp," / ",n.totalXP," XP"]})]}),i.jsxs("div",{className:"streak-badge",children:[i.jsx("span",{className:"streak-icon",children:"🔥"}),i.jsxs("span",{className:"streak-text",children:[n.streak,"天"]})]}),i.jsx("div",{className:"avatar",children:i.jsx("span",{children:"LY"})})]}),i.jsx(Ie,{to:"/map",className:"btn btn-primary btn-sm",children:"开始学习"})]})]})})}function nv(){return i.jsxs("footer",{className:"footer",children:[i.jsxs("div",{className:"container footer-container",children:[i.jsxs("div",{className:"footer-brand",children:[i.jsxs(Ie,{to:"/",className:"footer-logo",children:[i.jsx("div",{className:"logo-icon",children:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),i.jsx("span",{className:"logo-text",children:"Python Quest"})]}),i.jsx("p",{className:"footer-tagline",children:"通过游戏化学习，从零到英雄掌握Python编程"})]}),i.jsxs("div",{className:"footer-links",children:[i.jsxs("div",{className:"footer-column",children:[i.jsx("h4",{children:"关于我们"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"#",children:"课程介绍"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"团队成员"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"联系我们"})})]})]}),i.jsxs("div",{className:"footer-column",children:[i.jsx("h4",{children:"学习资源"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"#",children:"学习路径"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"文档中心"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"常见问题"})})]})]}),i.jsxs("div",{className:"footer-column",children:[i.jsx("h4",{children:"社区"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"#",children:"排行榜"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"讨论区"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"合作伙伴"})})]})]})]})]}),i.jsx("div",{className:"footer-bottom",children:i.jsx("div",{className:"container",children:i.jsx("p",{children:"© 2024 Python Quest. All rights reserved."})})})]})}function rv(){const e=[{value:"10",label:"大关卡"},{value:"52",label:"编程挑战"},{value:"156+",label:"学习者"},{value:"98%",label:"好评率"}];return i.jsxs("div",{className:"home-page",children:[i.jsxs("section",{className:"hero-section",children:[i.jsxs("div",{className:"hero-bg-decorations",children:[i.jsx("div",{className:"floating-element elem-1"}),i.jsx("div",{className:"floating-element elem-2"}),i.jsx("div",{className:"floating-element elem-3"}),i.jsx("div",{className:"code-symbol code-1",children:"</>"}),i.jsx("div",{className:"code-symbol code-2",children:"{ }"}),i.jsx("div",{className:"code-symbol code-3",children:"🐍"})]}),i.jsxs("div",{className:"container hero-content",children:[i.jsx("div",{className:"hero-badge animate-fade-in",children:i.jsx("span",{children:"🎮 游戏化学习"})}),i.jsx("h1",{className:"hero-title animate-fade-in delay-100",children:i.jsx("span",{className:"title-gradient",children:"Python Quest"})}),i.jsx("p",{className:"hero-subtitle animate-fade-in delay-200",children:"通过 9 大关卡、50+ 编程挑战，从零到英雄独立完成项目"}),i.jsxs("div",{className:"hero-actions animate-fade-in delay-300",children:[i.jsx(Ie,{to:"/map",className:"btn btn-primary btn-lg",children:"开始冒险"}),i.jsxs("button",{className:"btn btn-secondary btn-lg",children:[i.jsx("span",{className:"btn-icon",children:"▶"}),"免费试学"]})]}),i.jsx("div",{className:"hero-stats animate-fade-in delay-400",children:e.map((t,n)=>i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"stat-value",children:t.value}),i.jsx("div",{className:"stat-label",children:t.label})]},n))})]})]}),i.jsx("section",{className:"features-section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"为什么选择 Python Quest？"}),i.jsx("p",{className:"section-subtitle",children:"游戏化学习，让编程变得有趣又高效"}),i.jsxs("div",{className:"features-grid",children:[i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:"🎯"}),i.jsx("h3",{children:"闯关式学习"}),i.jsx("p",{children:"9大精心设计的关卡，从基础到进阶，每一步都有明确的目标和成就感。"})]}),i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:"💻"}),i.jsx("h3",{children:"实战挑战"}),i.jsx("p",{children:"50+编程挑战，边学边练，在实践中真正掌握Python编程技能。"})]}),i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:"🏆"}),i.jsx("h3",{children:"成就系统"}),i.jsx("p",{children:"XP经验值、徽章、排行榜，在竞争中激发学习动力，不断进步。"})]}),i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:"📊"}),i.jsx("h3",{children:"进度追踪"}),i.jsx("p",{children:"可视化学习地图，清晰展示学习进度，让成长之路一目了然。"})]})]})]})}),i.jsx("section",{className:"cta-section",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"cta-card",children:[i.jsx("h2",{children:"准备好开始你的编程冒险了吗？"}),i.jsx("p",{children:"加入 Python Quest，从零开始，成为Python编程高手"}),i.jsx(Ie,{to:"/map",className:"btn btn-primary btn-lg",children:"立即开始 →"})]})})})]})}const Wt=[{id:1,title:"第1关：初见 Python",subtitle:"认识 Python 的世界",description:"了解Python的历史、特点和应用场景，安装开发环境，写出你的第一行代码。",status:"completed",difficulty:1,duration:"约1小时",lessons:5,challenges:3,topics:["Python简介","环境搭建","第一个程序","打印输出"],side:"left"},{id:2,title:"第2关：变量与数据类型",subtitle:"掌握数据的存储与运算",description:"学习变量、基本数据类型、运算符和类型转换，打下编程基础。",status:"completed",difficulty:1,duration:"约1.5小时",lessons:6,challenges:4,topics:["变量","数字类型","字符串","运算符","类型转换"],side:"right"},{id:3,title:"第3关：条件判断",subtitle:"让程序学会思考",description:"学习if-else条件语句、逻辑运算符和比较运算，让程序做出决策。",status:"completed",difficulty:2,duration:"约1.5小时",lessons:5,challenges:5,topics:["if语句","else和elif","比较运算","逻辑运算","嵌套条件"],side:"left"},{id:4,title:"第4关：循环结构",subtitle:"重复的力量",description:"掌握for循环、while循环、循环控制语句，以及循环的嵌套使用。",status:"current",difficulty:2,duration:"约2小时",lessons:7,challenges:6,topics:["for循环","range()函数","while循环","break与continue","循环嵌套"],side:"right"},{id:5,title:"第5关：列表与元组",subtitle:"数据的集合",description:"学习列表和元组的使用，掌握索引、切片、常用方法和列表推导式。",status:"locked",difficulty:2,duration:"约2小时",lessons:6,challenges:5,topics:["列表基础","列表操作","元组","切片","列表推导式"],side:"left"},{id:6,title:"第6关：字典与集合",subtitle:"键值的魔法",description:"深入学习字典和集合的使用，理解哈希表原理和应用场景。",status:"locked",difficulty:3,duration:"约2小时",lessons:6,challenges:5,topics:["字典基础","字典操作","集合","字典推导式","常用场景"],side:"right"},{id:7,title:"第7关：函数",subtitle:"代码的封装与复用",description:"学习函数的定义、参数、返回值、作用域，以及递归和高阶函数。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:8,challenges:7,topics:["函数定义","参数类型","返回值","作用域","递归","Lambda函数"],side:"left"},{id:8,title:"第8关：文件操作",subtitle:"与文件系统交互",description:"学习文件的读写、目录操作、异常处理，掌握数据持久化。",status:"locked",difficulty:3,duration:"约2小时",lessons:6,challenges:5,topics:["文件读写","上下文管理器","目录操作","异常处理","JSON处理"],side:"right"},{id:9,title:"第9关：项目实战",subtitle:"综合项目挑战",description:"运用所学知识，完成一个完整的Python项目，检验你的学习成果。",status:"locked",difficulty:4,duration:"约3小时",lessons:4,challenges:3,topics:["项目规划","模块化设计","测试调试","项目部署"],side:"left"}],$l=[{id:1,title:"for 循环基础",duration:"12分钟",completed:!0,type:"video"},{id:2,title:"range() 函数详解",duration:"15分钟",completed:!0,type:"video"},{id:3,title:"遍历列表与字典",duration:"18分钟",completed:!0,type:"video"},{id:4,title:"while 循环",duration:"14分钟",completed:!0,type:"video"},{id:5,title:"break 与 continue",duration:"16分钟",completed:!1,type:"video"},{id:6,title:"循环嵌套",duration:"20分钟",completed:!1,type:"video"},{id:7,title:"实战：打印九九乘法表",duration:"25分钟",completed:!1,type:"interactive"}],sv=[{id:1,title:"计算1到100的和",difficulty:"easy",completed:!0},{id:2,title:"打印三角形图案",difficulty:"easy",completed:!0},{id:3,title:"找出100以内的素数",difficulty:"medium",completed:!1},{id:4,title:"冒泡排序实现",difficulty:"medium",completed:!1},{id:5,title:"猜数字游戏",difficulty:"medium",completed:!1},{id:6,title:"斐波那契数列",difficulty:"hard",completed:!1}],sp={4:[{id:1,title:"什么是循环？",type:"explanation",content:`**循环**是编程中最强大的概念之一。它允许我们**重复执行一段代码**，而不需要复制粘贴。

想象一下，如果你要打印 1 到 100 的数字，没有循环的话你需要写 100 行 print 语句！但有了循环，只需要几行代码就能搞定。

Python 中有两种主要的循环：
- **for 循环**：用于遍历序列（如列表、字符串、range）
- **while 循环**：在条件为真时重复执行

让我们开始学习吧！`},{id:2,title:"for 循环基础",type:"example",content:`**for 循环**用于遍历一个序列。基本语法是：

\`\`\`
for 变量 in 序列:
    循环体
\`\`\`

每次循环，变量会取序列中的下一个值，然后执行循环体中的代码。

最常用的是配合 \`range()\` 函数使用，\`range(n)\` 会生成 0 到 n-1 的整数序列。

试试运行下面的代码，看看效果：`,code:`# for 循环示例
for i in range(5):
    print(f"第 {i+1} 次循环，i = {i}")

print("循环结束！")`},{id:3,title:"range() 函数详解",type:"explanation",content:'`range()` 函数是 Python 中最常用的函数之一，它有三种用法：\n\n1. **range(stop)** - 生成 0 到 stop-1 的整数\n   - `range(5)` → 0, 1, 2, 3, 4\n\n2. **range(start, stop)** - 生成 start 到 stop-1 的整数\n   - `range(2, 7)` → 2, 3, 4, 5, 6\n\n3. **range(start, stop, step)** - 按步长生成\n   - `range(0, 10, 2)` → 0, 2, 4, 6, 8\n   - `range(10, 0, -1)` → 10, 9, 8, ..., 1\n\n注意：`range()` 生成的是"左闭右开"区间，包含起始值，不包含结束值。'},{id:4,title:"小练习：打印偶数",type:"practice",content:`**练习时间！** 请编写代码，使用 for 循环打印出 1 到 20 之间的所有偶数。

提示：
- 使用 \`range()\` 的步长参数
- 偶数是能被 2 整除的数
- 从 2 开始，每次加 2

完成后点击运行，你的代码应该输出：2, 4, 6, ..., 20`,hint:"试试 range(2, 21, 2)，这样每次都会增加 2",code:`# 请在此处编写代码
# 打印 1 到 20 之间的所有偶数

`,testCode:`# 测试代码
import sys

# 保存之前的输出
output_lines = []
for line in _output_buffer.getvalue().strip().split('\\n'):
    if line.strip():
        try:
            num = int(line.strip())
            output_lines.append(num)
        except:
            pass

_test_results.append({
    "name": "输出了偶数",
    "passed": len(output_lines) >= 10,
    "message": f"找到 {len(output_lines)} 个数字，需要至少 10 个偶数"
})

_test_results.append({
    "name": "都是偶数",
    "passed": all(n % 2 == 0 for n in output_lines) and len(output_lines) > 0,
    "message": "确保输出的都是偶数"
})

_test_results.append({
    "name": "范围正确",
    "passed": all(2 <= n <= 20 for n in output_lines) and len(output_lines) == 10,
    "message": "偶数应该在 2 到 20 之间，共 10 个"
})
`},{id:5,title:"while 循环",type:"example",content:`**while 循环**会在条件为真时不断重复执行代码块。

语法：
\`\`\`
while 条件:
    循环体
\`\`\`

**注意**：一定要确保条件最终会变为 False，否则会造成**死循环**！

试试运行下面的例子：`,code:`# while 循环示例
count = 1
while count <= 5:
    print(f"计数: {count}")
    count += 1  # 别忘了更新计数变量！

print("循环结束")`},{id:6,title:"小测验",type:"quiz",content:`来测试一下你学到的知识吧！

**问题**：以下哪个选项是正确的？

\`range(1, 10, 3)\` 会生成哪些数字？`,options:["1, 4, 7, 10","1, 4, 7","0, 3, 6, 9","1, 3, 6, 9"],correctAnswer:1},{id:7,title:"break 与 continue",type:"explanation",content:`循环中有两个重要的控制语句：

**break** - 立即终止整个循环
- 当满足某个条件时，直接跳出循环，不再执行后续迭代

**continue** - 跳过当前迭代，继续下一次
- 当满足某个条件时，跳过本次循环剩余的代码，直接进入下一次循环

这两个语句让我们可以更灵活地控制循环的执行流程。`},{id:8,title:"实战：九九乘法表",type:"practice",content:`**终极挑战！** 使用嵌套循环打印九九乘法表。

要求：
- 使用两层 for 循环（外层控制行，内层控制列）
- 每行打印从 1*1 到 i*i 的算式
- 格式如：1x1=1  2x1=2  ...

提示：
- 外层循环变量 i 从 1 到 9
- 内层循环变量 j 从 1 到 i
- 使用 print 的 end 参数控制不换行`,hint:"外层 for i in range(1, 10): 内层 for j in range(1, i+1):",code:`# 打印九九乘法表
# 外层循环控制行数，内层循环控制列数

`,testCode:`# 测试九九乘法表
output = _output_buffer.getvalue()

# 检查是否包含乘法表的关键内容
has_1x1 = '1x1=1' in output or '1*1=1' in output
has_9x9 = '9x9=81' in output or '9*9=81' in output
line_count = len([l for l in output.split('\\n') if l.strip()])

_test_results.append({
    "name": "包含 1x1=1",
    "passed": has_1x1,
    "message": "乘法表应该从 1x1=1 开始"
})

_test_results.append({
    "name": "包含 9x9=81",
    "passed": has_9x9,
    "message": "乘法表应该以 9x9=81 结束"
})

_test_results.append({
    "name": "有9行输出",
    "passed": line_count >= 9,
    "message": f"找到 {line_count} 行，九九乘法表应该有9行"
})
`}],1:[{id:1,title:"欢迎来到 Python 世界",type:"explanation",content:`**Python** 是一门简洁、优雅、易学的编程语言，被广泛应用于数据分析、人工智能、网站开发、自动化脚本等领域。

为什么选择 Python？
- **语法简洁**：代码读起来像英语，非常适合初学者
- **功能强大**：拥有丰富的标准库和第三方库
- **社区活跃**：遇到问题很容易找到解决方案

Python 程序由一条条**语句**组成，每条语句完成一个操作。最简单的操作就是把信息输出到屏幕上。

让我们开始写第一行 Python 代码吧！`},{id:2,title:"print 函数：和世界打招呼",type:"example",content:`**print()** 是 Python 中最常用的函数，它可以把内容输出到屏幕上。

基本用法：
\`\`\`
print("要输出的内容")
\`\`\`

- 双引号 \`"\` 或单引号 \`'\` 之间的内容称为**字符串**，会被原样输出
- print 默认在结尾换行
- 可以输出数字、文字、运算结果等

点击运行，看看效果：`,code:`# 我的第一个 Python 程序
print("Hello, World!")
print("你好，Python！")
print("1 + 1 =", 1 + 1)
print("学习编程很有趣")`},{id:3,title:"注释：给代码写说明",type:"explanation",content:`**注释**是写给人看的说明文字，Python 解释器会忽略注释内容。

Python 中有两种注释：

1. **单行注释**：以 \`#\` 开头，\`#\` 后面的内容会被忽略
   \`\`\`
   # 这是一行注释
   print("你好")  # 这也是注释
   \`\`\`

2. **多行注释**：用三引号 \`"""\` 或 \`'''\` 包裹（本质上是字符串）
   \`\`\`
   """
   这是多行注释
   可以写很多行
   """
   \`\`\`

**为什么要写注释？**
- 解释代码的功能和思路
- 方便日后维护和他人阅读
- 临时禁用某段代码（调试时常用）

好的注释让代码更易读，但也要避免过度注释显而易见的代码。`},{id:4,title:"小练习：自我介绍",type:"practice",content:`**动手试试！** 请使用 print 函数输出一段自我介绍。

要求：
- 第 1 行输出你的名字
- 第 2 行输出你的年龄
- 第 3 行输出你学习 Python 的目标
- 在代码中添加至少一行注释

示例输出：
\`\`\`
我叫小明
我今年 18 岁
我要成为 Python 高手
\`\`\``,hint:"每条信息用一个 print()，注释用 # 开头",code:`# 在此写你的自我介绍
# 例如：print("我叫小明")

`,testCode:`# 测试自我介绍
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

_test_results.append({
    "name": "至少输出3行",
    "passed": len(lines) >= 3,
    "message": f"输出了 {len(lines)} 行，需要至少 3 行"
})

_test_results.append({
    "name": "有实际内容",
    "passed": all(len(l.strip()) > 0 for l in lines),
    "message": "每行都应该有内容"
})
`},{id:5,title:"字符串与转义字符",type:"example",content:"在 print 中输出字符串时，有些特殊字符需要用 **转义字符** `\\` 来表示：\n\n- `\\\\n` - 换行\n- `\\\\t` - 制表符（Tab）\n- `\\\\\\\\` - 反斜杠本身\n- `\\\\'` - 单引号（在单引号字符串中）\n- `\\\\\"` - 双引号（在双引号字符串中）\n\n另外，print 可以一次输出多个内容，用逗号分隔，默认用空格连接。\n\n试试运行：",code:`# 转义字符示例
print("第一行\\n第二行")  # 换行
print("姓名:\\t张三")    # 制表符
print("他说:\\"你好!\\"") # 输出引号

# 多个参数用逗号分隔
print("苹果", "香蕉", "橘子")
print("1 + 2 =", 3)

# 自定义分隔符
print("2025", "01", "01", sep="-")`},{id:6,title:"小测验",type:"quiz",content:`来测试一下你的理解！

**问题**：下面代码会输出什么？

\`\`\`
print("Hello", end=" ")
print("World")
\`\`\``,options:["Hello 和 World 分别在两行","Hello World 在同一行，中间有空格","HelloWorld 在同一行，无空格","程序报错"],correctAnswer:1},{id:7,title:"实战：打印个性名片",type:"practice",content:`**综合练习！** 请编写代码，输出一个有个性的"个人名片"。

要求：
- 用 print 输出至少 5 行内容
- 使用 \\n 或多个 print 实现换行
- 至少使用一次制表符 \\t 对齐
- 使用分隔线（如 ========）装饰

示例效果：
\`\`\`
==================
\\t个人名片
==================
姓名：\\t小明
职业：\\t学生
座右铭：\\t代码改变世界
==================
\`\`\``,hint:'可以用 print("=" * 18) 来生成分隔线',code:`# 制作你的个人名片

`,testCode:`# 测试个人名片
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

has_tab = '\\t' in output or '    ' in output
has_separator = '=' in output or '-' in output or '*' in output

_test_results.append({
    "name": "至少5行内容",
    "passed": len(lines) >= 5,
    "message": f"输出了 {len(lines)} 行，需要至少 5 行"
})

_test_results.append({
    "name": "使用了对齐",
    "passed": has_tab,
    "message": "建议使用 \\t 制表符对齐内容"
})

_test_results.append({
    "name": "有装饰分隔线",
    "passed": has_separator,
    "message": "添加分隔线让名片更美观"
})
`}],2:[{id:1,title:"什么是变量？",type:"explanation",content:`**变量**是存储数据的"盒子"。你可以把数据放进去，之后通过变量名来使用它。

比如：
\`\`\`
name = "小明"
age = 18
\`\`\`

这样，\`name\` 就代表字符串 "小明"，\`age\` 就代表数字 18。

**变量的命名规则**：
- 只能包含字母、数字、下划线
- 不能以数字开头
- 不能使用 Python 关键字（如 if、for、class）
- 区分大小写（Name 和 name 是不同的变量）
- 建议使用有意义的名字，如 user_age 而不是 a

Python 中变量不需要提前声明类型，赋值时自动确定类型，这就是"动态类型"。`},{id:2,title:"创建和使用变量",type:"example",content:'让我们来创建一些变量并使用它们。\n\n在 Python 中，用 `=` 给变量赋值。注意 `=` 是赋值，不是数学中的"等于"。\n\n```\n变量名 = 值\n```\n\n变量可以反复赋值，也可以参与运算。运行下面的代码看看：',code:`# 创建变量
name = "小明"
age = 18
height = 1.75

# 使用变量
print("姓名:", name)
print("年龄:", age)
print("身高:", height)

# 变量参与运算
next_age = age + 1
print("明年:", next_age, "岁")

# 变量重新赋值
age = 20
print("现在的年龄:", age)

# 多重赋值
a, b, c = 1, 2, 3
print(a, b, c)`},{id:3,title:"基本数据类型",type:"explanation",content:`Python 有几种基本数据类型：

| 类型 | 关键字 | 示例 | 说明 |
|------|--------|------|------|
| 整数 | int | 10, -5, 0 | 没有小数点的数 |
| 浮点数 | float | 3.14, -0.5 | 带小数点的数 |
| 字符串 | str | "hello" | 文本，用引号包裹 |
| 布尔值 | bool | True, False | 真或假，首字母大写 |

**查看变量类型**：使用 \`type()\` 函数
\`\`\`
type(42)        # <class 'int'>
type(3.14)      # <class 'float'>
type("hello")   # <class 'str'>
type(True)      # <class 'bool'>
\`\`\`

Python 会根据赋的值自动判断类型，你也可以用 \`int()\`、\`float()\`、\`str()\` 进行类型转换。`},{id:4,title:"运算符",type:"example",content:"Python 支持多种运算符：\n\n**算术运算符**：\n- `+` 加、`-` 减、`*` 乘、`/` 除\n- `//` 整除（向下取整）\n- `%` 取余数\n- `**` 幂运算\n\n**注意**：`/` 总是返回浮点数，即使能整除。\n\n试试运行：",code:`# 算术运算
a = 10
b = 3

print("加法:", a + b)       # 13
print("减法:", a - b)       # 7
print("乘法:", a * b)       # 30
print("除法:", a / b)       # 3.333...
print("整除:", a // b)      # 3
print("取余:", a % b)       # 1
print("幂运算:", a ** b)    # 1000

# 字符串也可以"运算"
print("哈" * 3)             # 哈哈哈
print("Hello" + " World")   # 拼接

# 增强赋值
x = 5
x += 3   # 等价于 x = x + 3
print("x += 3:", x)`},{id:5,title:"小练习：计算 BMI",type:"practice",content:`**练习时间！** 请编写代码计算 BMI（身体质量指数）。

BMI 公式：\`体重 / 身高的平方\`

要求：
- 创建变量 weight = 70（公斤）
- 创建变量 height = 1.75（米）
- 计算 BMI 并打印结果
- 打印时使用 f-string 格式化：\`f"BMI = {bmi:.2f}"\`
  （\`:.2f\` 表示保留 2 位小数）

预期输出：\`BMI = 22.86\``,hint:"bmi = weight / (height ** 2)，然后用 f-string 打印",code:`# 计算 BMI
weight = 70
height = 1.75

# 在此计算 BMI 并打印

`,testCode:`# 测试 BMI 计算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含22",
    "passed": "22" in output,
    "message": "BMI 应该在 22 左右"
})

_test_results.append({
    "name": "包含小数",
    "passed": "." in output,
    "message": "BMI 应该有小数部分"
})

_test_results.append({
    "name": "结果接近22.86",
    "passed": "22.8" in output or "22.9" in output,
    "message": "70 / 1.75^2 ≈ 22.86，检查计算"
})
`},{id:6,title:"小测验",type:"quiz",content:`来测试一下你学到的知识！

**问题**：下面代码的输出是什么？

\`\`\`
x = 5
y = 2
print(x // y, x % y, x ** y)
\`\`\``,options:["2 1 25","2.5 1 10","2 1 10","2.5 1 25"],correctAnswer:0},{id:7,title:"类型转换",type:"practice",content:'**实战练习！** 不同类型的数据需要转换后才能正确运算。\n\n请完成以下任务：\n1. 有字符串 `s1 = "15"` 和 `s2 = "27"`\n2. 将它们转换为整数并求和，打印结果\n3. 有整数 `n = 100`，将其转换为字符串并与 `"分"` 拼接打印\n4. 有字符串 `"3.14"`，转换为浮点数并打印其 2 倍\n\n预期输出：\n```\n42\n100分\n6.28\n```',hint:"使用 int()、float()、str() 进行类型转换",code:`# 类型转换练习
s1 = "15"
s2 = "27"
n = 100

# 1. 字符串转整数求和

# 2. 整数转字符串拼接

# 3. 字符串转浮点数计算

`,testCode:`# 测试类型转换
output = _output_buffer.getvalue()
lines = [l.strip() for l in output.split('\\n') if l.strip()]

_test_results.append({
    "name": "包含42",
    "passed": "42" in output,
    "message": "15 + 27 = 42"
})

_test_results.append({
    "name": "包含100分",
    "passed": "100分" in output,
    "message": "应该输出 '100分'"
})

_test_results.append({
    "name": "包含6.28",
    "passed": "6.28" in output,
    "message": "3.14 * 2 = 6.28"
})
`}],3:[{id:1,title:"什么是条件判断？",type:"explanation",content:`**条件判断**让程序能够根据不同的情况执行不同的代码，这是编程的核心能力之一。

生活中到处是条件判断：
- **如果**下雨，**就**带伞
- **如果**成绩 >= 60，**就**及格，**否则**不及格
- **如果**温度 > 30，穿短袖；**否则如果**温度 > 20，穿长袖；**否则**穿外套

Python 中用 \`if\` 语句实现条件判断：

\`\`\`
if 条件:
    条件成立时执行的代码
\`\`\`

**关键点**：
- 条件后面必须有冒号 \`:\`
- 缩进的代码块是条件成立时执行的内容
- Python 用**缩进**（通常是 4 个空格）表示代码层级`},{id:2,title:"if 语句入门",type:"example",content:"最简单的条件判断就是 `if` 语句。\n\n**比较运算符**：\n- `>` 大于、`<` 小于\n- `>=` 大于等于、`<=` 小于等于\n- `==` 等于（注意是两个等号！）\n- `!=` 不等于\n\n比较的结果是**布尔值** `True` 或 `False`。\n\n运行下面的例子：",code:`# if 语句示例
age = 18

if age >= 18:
    print("你成年了！")
    print("可以考驾照了")

print("程序继续执行")

# 注意缩进！
score = 85
if score >= 60:
    print("恭喜，你及格了！")
    print(f"你的成绩是 {score} 分")`},{id:3,title:"if-else 和 if-elif-else",type:"explanation",content:`很多时候我们需要处理多种情况，这时可以用 \`else\` 和 \`elif\`。

**if-else**：二选一
\`\`\`
if 条件:
    条件成立时执行
else:
    条件不成立时执行
\`\`\`

**if-elif-else**：多选一
\`\`\`
if 条件1:
    执行代码1
elif 条件2:
    执行代码2
elif 条件3:
    执行代码3
else:
    以上都不满足时执行
\`\`\`

**注意**：
- \`elif\` 是 "else if" 的缩写
- 程序会从上到下依次检查，**一旦某个条件成立就执行对应代码，然后跳出整个判断**
- \`else\` 不是必须的
- 只有一个分支会被执行`},{id:4,title:"成绩等级判断",type:"example",content:`让我们用 if-elif-else 来实现一个成绩等级判断系统。

规则：
- 90-100：A（优秀）
- 80-89：B（良好）
- 70-79：C（中等）
- 60-69：D（及格）
- 60 以下：F（不及格）

运行看看：`,code:`# 成绩等级判断
score = 85

if score >= 90:
    grade = "A"
    print("优秀！")
elif score >= 80:
    grade = "B"
    print("良好！")
elif score >= 70:
    grade = "C"
    print("中等")
elif score >= 60:
    grade = "D"
    print("及格")
else:
    grade = "F"
    print("不及格，加油！")

print(f"你的等级是 {grade}")

# 试试改改 score 的值，看看结果如何变化`},{id:5,title:"逻辑运算符",type:"explanation",content:`有时候需要组合多个条件，这就需要**逻辑运算符**：

| 运算符 | 含义 | 说明 |
|--------|------|------|
| \`and\` | 与 | 两边都为 True 才是 True |
| \`or\` | 或 | 任一边为 True 就是 True |
| \`not\` | 非 | 取反，True 变 False |

示例：
\`\`\`
age = 20
has_id = True

if age >= 18 and has_id:
    print("可以进入")

if age < 12 or age > 65:
    print("半价票")

if not has_id:
    print("请出示身份证")
\`\`\`

**短路求值**：
- \`A and B\`：如果 A 为 False，就不会判断 B
- \`A or B\`：如果 A 为 True，就不会判断 B`},{id:6,title:"小练习：闰年判断",type:"practice",content:`**练习！** 编写代码判断一个年份是否为闰年。

闰年规则：
1. 能被 4 整除但不能被 100 整除，**或者**
2. 能被 400 整除

要求：
- 设置变量 \`year = 2024\`
- 判断是否为闰年，打印 "2024 是闰年" 或 "2024 不是闰年"

测试：
- 2024 → 是闰年
- 1900 → 不是闰年
- 2000 → 是闰年`,hint:"条件：(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)",code:`# 闰年判断
year = 2024

# 在此编写判断代码

`,testCode:`# 测试闰年判断
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含闰年相关文字",
    "passed": "闰年" in output,
    "message": "输出应该包含 '闰年' 字样"
})

_test_results.append({
    "name": "2024是闰年",
    "passed": "是闰年" in output,
    "message": "2024 能被 4 整除且不被 100 整除，是闰年"
})
`},{id:7,title:"小测验",type:"quiz",content:`来测试一下你的理解！

**问题**：下面代码输出什么？

\`\`\`
x = 5
if x > 3:
    print("A")
elif x > 4:
    print("B")
else:
    print("C")
\`\`\``,options:["A","B","A B","C"],correctAnswer:0},{id:8,title:"实战：简易计算器",type:"practice",content:`**综合挑战！** 编写一个简易计算器。

要求：
- 有两个数字变量 a = 12, b = 4
- 有一个运算符变量 op = "*"
- 用 if-elif-else 判断运算符，进行对应运算
- 打印结果，格式：\`12 * 4 = 48\`
- 支持 +、-、*、/ 四种运算
- 如果运算符不认识，打印 "不支持的运算"

提示：除法时注意输出可以是浮点数`,hint:'用 if op == "+": ... elif op == "-": ... 的结构',code:`# 简易计算器
a = 12
b = 4
op = "*"

# 在此编写计算逻辑

`,testCode:`# 测试计算器
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含48",
    "passed": "48" in output,
    "message": "12 * 4 = 48，应该输出 48"
})

_test_results.append({
    "name": "包含运算式",
    "passed": "12" in output and "4" in output,
    "message": "输出应该包含两个操作数"
})
`}],5:[{id:1,title:"列表：数据的集合",type:"explanation",content:`**列表（list）**是 Python 中最常用的数据结构之一，它可以存储一组**有序**的数据。

特点：
- 用方括号 \`[]\` 创建
- 元素之间用逗号分隔
- 可以存储任意类型的数据
- **可以修改**（增、删、改）

\`\`\`
fruits = ["苹果", "香蕉", "橘子"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
\`\`\`

列表就像一排抽屉，每个抽屉有编号（**索引**），从 **0** 开始计数。

\`\`\`
索引:  0     1     2
     ["苹果", "香蕉", "橘子"]
      -3    -2    -1   （负数索引从后往前）
\`\`\`

列表在生活中无处不在：购物清单、成绩单、待办事项……都可以用列表表示。`},{id:2,title:"创建和访问列表",type:"example",content:`让我们来创建列表并访问其中的元素。

**访问元素**：\`列表名[索引]\`
- 正数索引从 0 开始
- 负数索引从 -1 开始（最后一个元素）

**修改元素**：\`列表名[索引] = 新值\`

**获取长度**：\`len(列表名)\`

运行下面的代码：`,code:`# 创建列表
fruits = ["苹果", "香蕉", "橘子", "葡萄", "西瓜"]

# 访问元素
print("第一个:", fruits[0])    # 苹果
print("第三个:", fruits[2])    # 橘子
print("最后一个:", fruits[-1]) # 西瓜

# 修改元素
fruits[0] = "芒果"
print("修改后:", fruits)

# 列表长度
print("共有", len(fruits), "种水果")

# 遍历列表
for fruit in fruits:
    print("-", fruit)`},{id:3,title:"切片：截取部分列表",type:"explanation",content:`**切片（slicing）**可以提取列表的一部分，非常强大。

语法：\`列表[起始:结束:步长]\`
- 包含起始位置，**不包含**结束位置（左闭右开）
- 三个参数都可以省略

\`\`\`
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

nums[2:5]    # [2, 3, 4]  第2到第4个
nums[:3]     # [0, 1, 2]  前3个
nums[5:]     # [5, 6, 7, 8, 9]  第5个到最后
nums[::2]    # [0, 2, 4, 6, 8]  每隔一个取一个
nums[::-1]   # [9, 8, ..., 0]  反转列表
\`\`\`

**记忆技巧**：
- \`列表[:n]\` 取前 n 个
- \`列表[-n:]\` 取后 n 个
- \`列表[::-1]\` 反转列表`},{id:4,title:"列表方法",type:"example",content:"列表有很多内置方法，可以方便地增删改查。\n\n**添加元素**：\n- `append(x)` - 在末尾添加\n- `insert(i, x)` - 在位置 i 插入\n- `extend(列表)` - 合并另一个列表\n\n**删除元素**：\n- `remove(x)` - 删除第一个值为 x 的元素\n- `pop(i)` - 删除并返回位置 i 的元素（默认最后一个）\n- `clear()` - 清空列表\n\n**其他常用方法**：\n- `sort()` - 排序\n- `reverse()` - 反转\n- `index(x)` - 查找元素位置\n- `count(x)` - 统计元素个数\n\n试试运行：",code:`# 列表方法演示
nums = [3, 1, 4, 1, 5, 9, 2, 6]

# 添加
nums.append(8)
print("添加后:", nums)

# 排序
nums.sort()
print("排序后:", nums)

# 反转
nums.reverse()
print("反转后:", nums)

# 统计
print("1 出现了", nums.count(1), "次")
print("5 的位置:", nums.index(5))

# 删除
nums.remove(1)  # 删除第一个 1
print("删除1后:", nums)

popped = nums.pop()  # 删除最后一个
print(f"弹出了 {popped}，剩余 {nums}")`},{id:5,title:"小练习：列表操作",type:"practice",content:`**练习时间！** 请完成以下列表操作：

1. 创建列表 \`numbers = [5, 2, 8, 1, 9, 3, 7]\`
2. 在末尾添加数字 10
3. 对列表进行排序
4. 打印排序后的列表
5. 打印列表中的最大值和最小值（使用 max() 和 min()）
6. 打印列表中第 2 到第 5 个元素（切片）

预期输出：
\`\`\`
[1, 2, 3, 5, 7, 8, 9, 10]
最大值: 10
最小值: 1
[2, 3, 5, 7]
\`\`\``,hint:"append() 添加，sort() 排序，numbers[1:5] 取第2到第5个",code:`# 列表操作练习
numbers = [5, 2, 8, 1, 9, 3, 7]

# 1. 添加 10

# 2. 排序

# 3. 打印排序后的列表

# 4. 打印最大值和最小值

# 5. 打印第2到第5个元素

`,testCode:`# 测试列表操作
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含10",
    "passed": "10" in output,
    "message": "列表应该包含添加的 10"
})

_test_results.append({
    "name": "包含最大值10",
    "passed": "10" in output,
    "message": "最大值应该是 10"
})

_test_results.append({
    "name": "包含最小值1",
    "passed": "1" in output,
    "message": "最小值应该是 1"
})

_test_results.append({
    "name": "有排序效果",
    "passed": "1" in output and "2" in output,
    "message": "检查是否正确排序"
})
`},{id:6,title:"列表推导式",type:"example",content:`**列表推导式**是 Python 的特色功能，可以用一行代码创建列表，非常优雅。

语法：
\`\`\`
[表达式 for 变量 in 可迭代对象]
[表达式 for 变量 in 可迭代对象 if 条件]
\`\`\`

对比传统写法：
\`\`\`
# 传统写法
squares = []
for i in range(10):
    squares.append(i ** 2)

# 列表推导式
squares = [i ** 2 for i in range(10)]
\`\`\`

运行下面的例子感受一下：`,code:`# 列表推导式示例

# 生成 0-9 的平方
squares = [i ** 2 for i in range(10)]
print("平方:", squares)

# 生成偶数
evens = [i for i in range(20) if i % 2 == 0]
print("偶数:", evens)

# 字符串转大写
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print("大写:", upper)

# 嵌套推导式：二维矩阵
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print("矩阵:", matrix)

# 带条件的推导式
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [n ** 2 for n in nums if n % 2 == 0]
print("偶数的平方:", even_squares)`},{id:7,title:"小测验",type:"quiz",content:"来测试一下你的理解！\n\n**问题**：`[1, 2, 3, 4, 5][1:4]` 的结果是？",options:["[1, 2, 3, 4]","[2, 3, 4]","[2, 3, 4, 5]","[1, 2, 3]"],correctAnswer:1},{id:8,title:"元组：不可变的列表",type:"explanation",content:`**元组（tuple）**和列表很像，但有一个重要区别：**元组创建后不能修改**。

特点：
- 用圆括号 \`()\` 创建
- 访问方式和列表相同（索引、切片）
- **不可变**：不能增、删、改元素
- 通常用于存储不该改变的数据

\`\`\`
point = (3, 4)           # 坐标
rgb = (255, 128, 0)      # 颜色
person = ("小明", 18, "学生")  # 个人信息
\`\`\`

**为什么要用元组？**
- 保护数据不被意外修改
- 比列表占用更少内存
- 可以作为字典的键（列表不行）

**注意**：单个元素的元组要加逗号：\`(42,)\` 而不是 \`(42)\`

**解包**：元组（和列表）可以方便地解包到多个变量
\`\`\`
x, y = point
name, age, role = person
\`\`\``}],6:[{id:1,title:"字典：键值对的集合",type:"explanation",content:`**字典（dict）**是 Python 中极其重要的数据结构，它用**键值对（key-value）**存储数据。

想象一本电话簿：
- 名字 → 电话号码
- 通过"名字"（键）查找"电话号码"（值）

\`\`\`
phonebook = {
    "小明": "13800138000",
    "小红": "13900139000",
    "小刚": "13700137000"
}
\`\`\`

特点：
- 用花括号 \`{}\` 创建
- 每个元素是 \`键: 值\` 的形式
- **键必须唯一**，且不可变（字符串、数字、元组）
- **值可以是任意类型**
- 通过键访问值，速度非常快

字典在 Python 中无处不在：JSON 数据、配置文件、数据库记录……都常用字典表示。`},{id:2,title:"创建和访问字典",type:"example",content:`让我们来创建字典并访问其中的数据。

**创建字典**：
\`\`\`
d = {"键1": "值1", "键2": "值2"}
\`\`\`

**访问值**：\`字典[键]\`
- 如果键不存在会报错 KeyError
- 用 \`字典.get(键)\` 更安全，不存在时返回 None

**添加/修改**：\`字典[键] = 值\`

运行下面的代码：`,code:`# 创建字典
student = {
    "name": "小明",
    "age": 18,
    "grade": "高三",
    "score": 95
}

# 访问
print("姓名:", student["name"])
print("年龄:", student["age"])

# 用 get 访问（更安全）
print("性别:", student.get("gender", "未设置"))

# 添加新键值对
student["gender"] = "男"
print("添加后:", student)

# 修改值
student["score"] = 98
print("修改后:", student)

# 获取所有键、值、键值对
print("所有键:", list(student.keys()))
print("所有值:", list(student.values()))

# 遍历字典
for key, value in student.items():
    print(f"{key}: {value}")`},{id:3,title:"字典的增删改查",type:"explanation",content:`字典的基本操作可以总结为"增删改查"：

**增**（添加）：
\`\`\`
d["新键"] = 新值
d.update({"键": "值", "键2": "值2"})  # 合并另一个字典
\`\`\`

**删**（删除）：
\`\`\`
del d["键"]          # 删除指定键值对
d.pop("键")          # 删除并返回值
d.popitem()          # 删除最后一个键值对
d.clear()            # 清空字典
\`\`\`

**改**（修改）：
\`\`\`
d["已有键"] = 新值   # 直接赋值即可修改
\`\`\`

**查**（查询）：
\`\`\`
d["键"]              # 获取值，不存在则报错
d.get("键", 默认值)  # 获取值，不存在返回默认值
"键" in d            # 检查键是否存在
d.keys()             # 所有键
d.values()           # 所有值
d.items()            # 所有键值对
\`\`\``},{id:4,title:"字典实战：词频统计",type:"example",content:`字典非常适合用来做统计。让我们统计一段文字中每个字符出现的次数。

这个例子展示了字典的经典用法：
1. 遍历数据
2. 检查键是否存在
3. 更新计数

也可以用 \`collections.Counter\` 快速实现，但手写一遍更能理解原理。`,code:`# 词频统计
text = "hello world hello python"

# 方法1：手动统计
word_count = {}
for word in text.split():
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

print("统计结果:")
for word, count in word_count.items():
    print(f"  {word}: {count}次")

# 方法2：使用 get() 更简洁
word_count2 = {}
for word in text.split():
    word_count2[word] = word_count2.get(word, 0) + 1

print("用get统计:", word_count2)

# 字符统计
char_count = {}
for char in "abracadabra":
    char_count[char] = char_count.get(char, 0) + 1
print("字符统计:", char_count)`},{id:5,title:"小练习：学生成绩管理",type:"practice",content:`**练习！** 用字典管理学生成绩。

要求：
1. 创建字典 \`scores = {"小明": 85, "小红": 92, "小刚": 78, "小丽": 96}\`
2. 添加新学生 "小华": 88
3. 修改 "小刚" 的成绩为 82
4. 删除 "小明" 的记录
5. 打印所有学生及其成绩
6. 计算并打印平均成绩（保留 1 位小数）

预期输出包含：
\`\`\`
小红: 92
小刚: 82
小丽: 96
小华: 88
平均成绩: 89.5
\`\`\``,hint:'添加用 scores["小华"]=88，删除用 del scores["小明"]，求和用 sum(scores.values())',code:`# 学生成绩管理
scores = {"小明": 85, "小红": 92, "小刚": 78, "小丽": 96}

# 1. 添加小华

# 2. 修改小刚成绩

# 3. 删除小明

# 4. 打印所有学生成绩

# 5. 计算并打印平均成绩

`,testCode:`# 测试学生成绩管理
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含92",
    "passed": "92" in output,
    "message": "小红的成绩 92 应该出现"
})

_test_results.append({
    "name": "包含82",
    "passed": "82" in output,
    "message": "小刚修改后的成绩 82 应该出现"
})

_test_results.append({
    "name": "包含88",
    "passed": "88" in output,
    "message": "小华的成绩 88 应该出现"
})

_test_results.append({
    "name": "包含85为错误",
    "passed": "85" not in output or "82" in output,
    "message": "小明应被删除，85 不应出现（除非有其他匹配）"
})

_test_results.append({
    "name": "包含平均成绩",
    "passed": "89.5" in output or "89" in output,
    "message": "平均成绩约为 89.5"
})
`},{id:6,title:"集合：去重利器",type:"explanation",content:`**集合（set）**是一个**无序**、**不重复**的元素集合。

特点：
- 用花括号 \`{}\` 或 \`set()\` 创建
- 元素**自动去重**
- 无序（不能用索引访问）
- 支持集合运算：交集、并集、差集

\`\`\`
# 创建集合
s1 = {1, 2, 3, 4, 5}
s2 = {4, 5, 6, 7, 8}

# 集合运算
s1 & s2   # 交集 {4, 5}
s1 | s2   # 并集 {1, 2, 3, 4, 5, 6, 7, 8}
s1 - s2   # 差集 {1, 2, 3}
\`\`\`

**常用场景**：
- 列表去重：\`list(set([1, 1, 2, 2, 3]))\` → \`[1, 2, 3]\`
- 判断成员关系：\`x in 集合\`（比列表快得多）
- 集合运算（找共同好友、差异等）

**注意**：空集合必须用 \`set()\` 创建，\`{}\` 创建的是空字典！`},{id:7,title:"小测验",type:"quiz",content:"来测试一下你的理解！\n\n**问题**：执行下面代码后，`result` 是什么？\n\n```\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nresult = a & b\n```",options:["{1, 2, 3, 4, 5, 6}","{3, 4}","{1, 2, 5, 6}","{1, 2, 3, 4}"],correctAnswer:1},{id:8,title:"实战：集合运算练习",type:"practice",content:`**综合练习！** 用集合解决实际问题。

场景：两个班级的学生名单
\`\`\`
class_a = {"小明", "小红", "小刚", "小丽", "小华"}
class_b = {"小红", "小刚", "小强", "小芳"}
\`\`\`

要求：
1. 找出两个班都有的学生（交集），打印 "共同学生: ..."
2. 找出所有学生（并集），打印 "所有学生: ..."
3. 找出只在 A 班的学生（差集），打印 "只在A班: ..."
4. 统计总共有多少不同的学生

提示：用 &、|、- 运算符`,hint:"交集用 &，并集用 |，差集用 -",code:`# 集合运算练习
class_a = {"小明", "小红", "小刚", "小丽", "小华"}
class_b = {"小红", "小刚", "小强", "小芳"}

# 1. 交集：共同学生

# 2. 并集：所有学生

# 3. 差集：只在A班的学生

# 4. 统计总人数

`,testCode:`# 测试集合运算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含共同学生",
    "passed": "小红" in output and "小刚" in output,
    "message": "小红和小刚是两个班共同的学生"
})

_test_results.append({
    "name": "包含所有学生",
    "passed": "小明" in output and "小强" in output,
    "message": "应该包含所有学生"
})

_test_results.append({
    "name": "只在A班的学生",
    "passed": "小明" in output and "小丽" in output,
    "message": "小明和小丽只在A班"
})

_test_results.append({
    "name": "包含数字统计",
    "passed": any(c.isdigit() for c in output),
    "message": "应该有总人数的数字"
})
`}],7:[{id:1,title:"什么是函数？",type:"explanation",content:`**函数**是把一段代码"打包"起来，可以反复使用的机制。

想象一台"榨汁机"：
- **输入**：水果（参数）
- **处理**：榨汁（函数体）
- **输出**：果汁（返回值）

你不需要知道榨汁机内部怎么工作，只需要知道怎么用。

**为什么要用函数？**
- **避免重复**：写一次，用多次
- **代码清晰**：把复杂问题分解成小模块
- **易于维护**：修改一处，处处生效
- **便于测试**：独立测试每个函数

Python 中定义函数用 \`def\` 关键字：

\`\`\`
def 函数名(参数):
    函数体
    return 返回值
\`\`\`

函数名要有意义，通常用小写字母和下划线，如 \`calculate_area\`。`},{id:2,title:"定义和调用函数",type:"example",content:`让我们来定义和调用几个简单的函数。

**要点**：
- \`def\` 定义函数
- \`return\` 返回结果（如果没有 return，返回 None）
- 调用时用 \`函数名(参数)\`
- 函数必须**先定义，后调用**

运行下面的代码：`,code:`# 定义一个简单的函数
def greet(name):
    """向某人问好"""
    return f"你好，{name}！"

# 调用函数
message = greet("小明")
print(message)
print(greet("小红"))

# 带多个参数的函数
def add(a, b):
    return a + b

print("3 + 5 =", add(3, 5))
print("10 + 20 =", add(10, 20))

# 没有 return 的函数
def say_hello():
    print("Hello!")

result = say_hello()
print("返回值:", result)  # None

# 函数可以返回多个值
def min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = min_max([3, 1, 4, 1, 5, 9])
print(f"最小: {minimum}, 最大: {maximum}")`},{id:3,title:"参数的多种形式",type:"explanation",content:`Python 函数的参数非常灵活，支持多种形式：

**1. 位置参数**（按顺序传递）
\`\`\`
def power(base, exp):
    return base ** exp
power(2, 3)   # 2^3 = 8
\`\`\`

**2. 默认参数**（有默认值，可省略）
\`\`\`
def greet(name, msg="你好"):
    return f"{msg}，{name}！"
greet("小明")           # 你好，小明！
greet("小明", "嗨")     # 嗨，小明！
\`\`\`

**3. 关键字参数**（按名称传递，顺序无关）
\`\`\`
power(exp=3, base=2)   # 8
\`\`\`

**4. 可变参数**（接收任意数量参数）
\`\`\`
def sum_all(*args):       # 接收元组
    return sum(args)
sum_all(1, 2, 3, 4)       # 10

def show_info(**kwargs):  # 接收字典
    for k, v in kwargs.items():
        print(f"{k}: {v}")
show_info(name="小明", age=18)
\`\`\`

**规则**：参数顺序为 位置参数 → 默认参数 → *args → **kwargs`},{id:4,title:"默认参数和关键字参数",type:"example",content:`让我们深入练习默认参数和关键字参数的用法。

默认参数让函数调用更灵活，关键字参数让代码更易读。`,code:`# 默认参数
def introduce(name, age, city="北京"):
    return f"我叫{name}，{age}岁，来自{city}"

print(introduce("小明", 18))
print(introduce("小红", 20, "上海"))
print(introduce("小刚", 19, city="广州"))

# 关键字参数让调用更清晰
def create_user(name, email, age=18, active=True):
    return {
        "name": name,
        "email": email,
        "age": age,
        "active": active
    }

# 用关键字参数，顺序可以打乱
user = create_user(email="tom@test.com", name="Tom", age=25)
print("用户:", user)

# 可变参数
def calculate(*numbers, operation="sum"):
    if operation == "sum":
        return sum(numbers)
    elif operation == "avg":
        return sum(numbers) / len(numbers)
    elif operation == "max":
        return max(numbers)

print("求和:", calculate(1, 2, 3, 4, 5))
print("平均值:", calculate(1, 2, 3, 4, 5, operation="avg"))
print("最大值:", calculate(3, 7, 1, 9, 2, operation="max"))`},{id:5,title:"小练习：计算面积函数",type:"practice",content:"**练习！** 编写计算图形面积的函数。\n\n要求：\n1. 定义函数 `rectangle_area(length, width)`，返回矩形面积\n2. 定义函数 `circle_area(radius, pi=3.14)`，返回圆面积（pi 有默认值）\n3. 调用 `rectangle_area(5, 3)` 打印结果\n4. 调用 `circle_area(4)` 打印结果\n5. 调用 `circle_area(4, pi=3.14159)` 打印更精确的结果\n\n预期输出：\n```\n矩形面积: 15\n圆面积: 50.24\n圆面积(精确): 50.26544\n```",hint:"def rectangle_area(length, width): return length * width",code:`# 在此定义和调用函数

# 1. 定义 rectangle_area


# 2. 定义 circle_area


# 3. 调用并打印

`,testCode:`# 测试面积函数
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含15",
    "passed": "15" in output,
    "message": "矩形面积 5*3=15"
})

_test_results.append({
    "name": "包含50.24",
    "passed": "50.24" in output,
    "message": "圆面积 3.14*16=50.24"
})

_test_results.append({
    "name": "包含50.265",
    "passed": "50.265" in output or "50.27" in output,
    "message": "精确圆面积约为 50.265"
})
`},{id:6,title:"递归：函数调用自己",type:"example",content:`**递归**是函数调用自身的技巧，适合解决可以分解为同类子问题的问题。

经典例子：阶乘
- 5! = 5 × 4!
- 4! = 4 × 3!
- ...
- 1! = 1（**基准条件**）

递归的两个必要条件：
1. **基准条件**：停止递归的条件（否则会无限循环）
2. **递归条件**：向基准条件靠近

\`\`\`
def factorial(n):
    if n <= 1:        # 基准条件
        return 1
    return n * factorial(n - 1)  # 递归调用
\`\`\`

运行看看：`,code:`# 递归求阶乘
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print("5! =", factorial(5))   # 120
print("10! =", factorial(10)) # 3628800

# 递归求斐波那契数
def fib(n):
    if n <= 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

print("斐波那契数列前10项:")
for i in range(10):
    print(fib(i), end=" ")
print()

# 递归求和
def sum_to(n):
    if n == 0:
        return 0
    return n + sum_to(n - 1)

print("1到100的和:", sum_to(100))`},{id:7,title:"小测验",type:"quiz",content:`来测试一下你的理解！

**问题**：递归函数必须有什么，否则会出错？`,options:["至少一个参数","基准条件（停止条件）","返回值必须是数字","必须有两个以上的参数"],correctAnswer:1},{id:8,title:"实战：判断素数函数",type:"practice",content:`**综合挑战！** 编写一个判断素数的函数。

要求：
1. 定义函数 \`is_prime(n)\`，接收一个整数
2. 如果 n 是素数返回 True，否则返回 False
3. 素数：大于 1 且只能被 1 和自身整除的数
4. 用该函数检查 7（是素数）和 9（不是素数），打印结果

提示：
- n <= 1 不是素数
- 检查 2 到 n-1 是否有能整除 n 的数
- 优化：只需检查到 sqrt(n)

预期输出：
\`\`\`
7 是素数: True
9 是素数: False
\`\`\``,hint:"def is_prime(n): if n <= 1: return False; for i in range(2, n): if n % i == 0: return False; return True",code:`# 定义判断素数的函数


# 测试
print("7 是素数:", is_prime(7))
print("9 是素数:", is_prime(9))

`,testCode:`# 测试素数函数
output = _output_buffer.getvalue()

_test_results.append({
    "name": "7是素数返回True",
    "passed": "True" in output,
    "message": "7 是素数，应该返回 True"
})

_test_results.append({
    "name": "9不是素数返回False",
    "passed": "False" in output,
    "message": "9 不是素数（9=3*3），应该返回 False"
})

_test_results.append({
    "name": "同时包含True和False",
    "passed": "True" in output and "False" in output,
    "message": "应该同时有 True 和 False 的结果"
})
`}],8:[{id:1,title:"文件操作基础",type:"explanation",content:`程序的数据通常存在内存中，程序结束就消失了。**文件操作**让数据可以持久化保存。

Python 操作文件三步走：
1. **打开文件**：\`open(文件路径, 模式)\`
2. **读/写**：读取或写入内容
3. **关闭文件**：\`close()\`

**打开模式**：
| 模式 | 含义 | 说明 |
|------|------|------|
| \`'r'\` | 读 | 读取文件（默认），文件不存在会报错 |
| \`'w'\` | 写 | 覆盖写入，文件不存在则创建 |
| \`'a'\` | 追加 | 在末尾追加，文件不存在则创建 |
| \`'r+'\` | 读写 | 读写模式 |

\`\`\`
# 基本写法（不推荐，忘了 close 会出问题）
f = open("test.txt", "w")
f.write("Hello!")
f.close()
\`\`\`

**编码问题**：中文文件建议指定 \`encoding="utf-8"\`，否则可能出现乱码。

\`\`\`
f = open("test.txt", "w", encoding="utf-8")
\`\`\``},{id:2,title:"with 语句：安全操作文件",type:"example",content:`**with 语句**是操作文件的最佳实践，它会自动关闭文件，即使出错也不会遗漏。

\`\`\`
with open("文件", "模式") as f:
    操作 f
# 离开 with 块后自动关闭
\`\`\`

**为什么用 with？**
- 自动关闭文件，不用手动 \`close()\`
- 即使中途出错（异常），文件也会被正确关闭
- 代码更简洁

运行下面的代码：`,code:`# 写入文件
with open("demo.txt", "w", encoding="utf-8") as f:
    f.write("第一行\\n")
    f.write("第二行\\n")
    f.write("第三行\\n")

print("文件写入完成！")

# 读取整个文件
with open("demo.txt", "r", encoding="utf-8") as f:
    content = f.read()
print("--- read() 读取全部 ---")
print(content)

# 逐行读取
with open("demo.txt", "r", encoding="utf-8") as f:
    print("--- 逐行读取 ---")
    for line in f:
        print("行:", line.strip())

# 读取所有行到列表
with open("demo.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()
print("--- readlines() ---")
print(lines)`},{id:3,title:"读写方法详解",type:"explanation",content:'文件读写有多种方法，各有用途：\n\n**读取方法**：\n- `f.read()` - 读取整个文件为一个字符串\n- `f.readline()` - 读取一行\n- `f.readlines()` - 读取所有行，返回列表\n- `for line in f:` - 逐行遍历（**最推荐**，内存友好）\n\n**写入方法**：\n- `f.write(s)` - 写入字符串（**不会自动换行**）\n- `f.writelines(列表)` - 写入多行（也不会自动换行）\n- `print(s, file=f)` - 写入并自动换行\n\n**文件指针**：\n- 读写会移动"指针"位置\n- `f.seek(0)` 可以回到开头\n- `f.tell()` 查看当前位置\n\n**追加模式**：\n```\nwith open("log.txt", "a") as f:\n    f.write("新日志\\n")  # 不会覆盖原内容\n```\n\n**小技巧**：写入时如果要换行，需要手动加 `\\n`。'},{id:4,title:"异常处理：try-except",type:"example",content:`程序运行时可能出错（文件不存在、除以零等），**异常处理**让程序在出错时优雅地处理，而不是崩溃。

语法：
\`\`\`
try:
    可能出错的代码
except 错误类型:
    处理错误的代码
else:
    没出错时执行
finally:
    无论如何都执行
\`\`\`

运行看看：`,code:`# 异常处理示例
try:
    # 尝试打开不存在的文件
    with open("不存在.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("错误：文件不存在！")
except PermissionError:
    print("错误：没有权限！")

# 捕获多种异常
try:
    num = int("abc")
except ValueError as e:
    print(f"值错误: {e}")

# try-except-else-finally
try:
    result = 10 / 2
except ZeroDivisionError:
    print("不能除以零！")
else:
    print(f"结果是 {result}")
finally:
    print("无论如何都会执行")

# 实际应用：安全读取文件
def safe_read(filename):
    try:
        with open(filename, "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return "文件不存在"
    except Exception as e:
        return f"读取出错: {e}"

print(safe_read("不存在.txt"))`},{id:5,title:"小练习：写日记本",type:"practice",content:`**练习！** 编写一个简单的日记本程序。

要求：
1. 用 with 语句打开文件 \`diary.txt\`（写入模式）
2. 写入 3 行内容：今天的日期、天气、心情
3. 再次用 with 语句以读取模式打开，读取并打印所有内容

预期输出：
\`\`\`
日记已保存
--- 读取日记 ---
日期：2025-01-1
天气：晴
心情：开心
\`\`\``,hint:'with open("diary.txt", "w", encoding="utf-8") as f: f.write(...)',code:`# 简单日记本

# 1. 写入日记


print("日记已保存")

# 2. 读取日记
print("--- 读取日记 ---")

`,testCode:`# 测试日记本
output = _output_buffer.getvalue()

_test_results.append({
    "name": "提示已保存",
    "passed": "保存" in output or "已" in output,
    "message": "应该提示日记已保存"
})

_test_results.append({
    "name": "有读取标记",
    "passed": "读取" in output or "日记" in output,
    "message": "应该有读取日记的标记"
})

_test_results.append({
    "name": "有多行内容",
    "passed": len([l for l in output.split('\\n') if l.strip()]) >= 3,
    "message": "应该至少有 3 行输出"
})
`},{id:6,title:"小测验",type:"quiz",content:"来测试一下你的理解！\n\n**问题**：使用 `with open(...) as f:` 的好处是什么？",options:["读取速度更快","会自动关闭文件，即使出错也不会遗漏","可以同时打开更多文件","文件内容会自动加密"],correctAnswer:1},{id:7,title:"实战：学生成绩文件处理",type:"practice",content:`**综合练习！** 处理学生成绩文件。

要求：
1. 用 with 语句写入文件 \`scores.txt\`，内容如下：
\`\`\`
小明,85
小红,92
小刚,78
小丽,96
\`\`\`
2. 用 with 语句读取文件
3. 解析每行，提取姓名和成绩
4. 计算并打印平均成绩
5. 找出最高分的学生并打印

预期输出包含：
\`\`\`
平均成绩: 87.75
最高分: 小丽 96
\`\`\``,hint:'用 line.strip().split(",") 解析每行，成绩用 int() 转换',code:`# 学生成绩文件处理

# 1. 写入文件


# 2. 读取并处理


# 3. 打印结果

`,testCode:`# 测试成绩处理
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含平均成绩",
    "passed": "87" in output,
    "message": "平均成绩 (85+92+78+96)/4 = 87.75"
})

_test_results.append({
    "name": "包含最高分96",
    "passed": "96" in output,
    "message": "最高分是 96"
})

_test_results.append({
    "name": "包含小丽",
    "passed": "小丽" in output,
    "message": "最高分学生是小丽"
})
`}],9:[{id:1,title:"项目实战：综合运用",type:"explanation",content:`恭喜你来到最后一关！到这里，你已经学会了 Python 的核心知识：

- ✅ 基本语法和输入输出
- ✅ 变量和数据类型
- ✅ 条件判断
- ✅ 循环
- ✅ 列表、元组、字典、集合
- ✅ 函数和递归
- ✅ 文件操作和异常处理

**项目实战**的目标是把这些知识**综合运用**，做出一个完整的程序。

好的项目应该具备：
- **结构清晰**：用函数组织代码
- **交互友好**：有菜单和提示
- **数据持久**：用文件保存数据
- **健壮稳定**：处理异常输入

接下来我们将通过示例和练习，完成几个小项目，把所学知识串联起来。`},{id:2,title:"项目结构：模块化设计",type:"example",content:`好的项目会把代码组织成一个个**函数**，每个函数负责一个功能。

让我们看一个"学生管理"项目的雏形：

\`\`\`
def show_menu():       # 显示菜单
def add_student():     # 添加学生
def list_students():   # 列出学生
def save_to_file():    # 保存到文件
def load_from_file():  # 从文件加载
def main():            # 主循环
\`\`\`

运行下面的示例：`,code:`# 学生管理项目雏形
students = []  # 全局变量存储学生数据

def add_student(name, score):
    """添加学生"""
    students.append({"name": name, "score": score})
    print(f"已添加: {name} {score}分")

def list_students():
    """列出所有学生"""
    if not students:
        print("暂无学生数据")
        return
    print("--- 学生列表 ---")
    for s in students:
        print(f"  {s['name']}: {s['score']}分")

def get_average():
    """计算平均分"""
    if not students:
        return 0
    total = sum(s["score"] for s in students)
    return total / len(students)

def get_top_student():
    """找最高分学生"""
    if not students:
        return None
    return max(students, key=lambda s: s["score"])

# 测试功能
add_student("小明", 85)
add_student("小红", 92)
add_student("小刚", 78)

list_students()
print(f"平均分: {get_average():.1f}")
top = get_top_student()
print(f"最高分: {top['name']} {top['score']}分")`},{id:3,title:"综合示例：猜数字游戏",type:"example",content:`让我们综合运用条件判断、循环、函数，做一个**猜数字游戏**。

游戏规则：
1. 程序随机生成 1-100 的数字
2. 玩家输入猜测
3. 提示"大了"或"小了"
4. 猜中后显示用了多少次

这个例子展示了：
- 函数封装功能
- while 循环
- 条件判断
- 异常处理（输入不是数字时）

由于交互式输入在教程中不便演示，这里用预设猜测来模拟：`,code:`import random

def generate_number():
    """生成随机数"""
    return random.randint(1, 100)

def check_guess(guess, target):
    """检查猜测结果"""
    if guess < target:
        return "小了"
    elif guess > target:
        return "大了"
    else:
        return "猜对了"

def play_game(guesses):
    """模拟游戏（用预设的猜测列表）"""
    target = generate_number()
    print(f"目标数字: {target}（调试用）")
    
    for i, guess in enumerate(guesses, 1):
        result = check_guess(guess, target)
        print(f"第{i}次猜 {guess}: {result}")
        if result == "猜对了":
            print(f"恭喜！用了 {i} 次")
            return i
    return -1

# 模拟猜测过程
guesses = [50, 75, 63, 70, 68]
play_game(guesses)

# 另一局
print("\\n--- 新一局 ---")
play_game([30, 60, 45, 50])`},{id:4,title:"数据持久化：文件存储",type:"explanation",content:`真正的项目需要把数据**保存到文件**，下次启动时再加载。

**JSON** 是最常用的数据存储格式，Python 内置 \`json\` 模块支持。

\`\`\`
import json

# 写入 JSON 文件
data = {"name": "小明", "score": 85}
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# 读取 JSON 文件
with open("data.json", "r", encoding="utf-8") as f:
    loaded = json.load(f)
\`\`\`

**项目数据管理模式**：
- 程序启动时：\`load()\` 从文件读取数据到内存
- 用户操作时：在内存中增删改查
- 程序退出前：\`save()\` 把数据写回文件

**为什么用 JSON？**
- 人类可读的文本格式
- 跨语言支持（几乎所有编程语言都支持）
- 可以存储字典、列表等复杂结构
- \`ensure_ascii=False\` 让中文正常显示`},{id:5,title:"小练习：任务管理器",type:"practice",content:`**项目练习！** 编写一个简单的任务管理器。

要求：
1. 定义函数 \`add_task(tasks, name)\`，添加任务到列表
2. 定义函数 \`show_tasks(tasks)\`，打印所有任务
3. 定义函数 \`complete_task(tasks, index)\`，标记完成
4. 创建任务列表，添加 3 个任务
5. 完成第 1 个任务（标记为已完成）
6. 打印最终任务列表

任务用字典表示：\`{"name": "任务名", "done": False}\`

预期输出：
\`\`\`
[1] 学习Python [未完成]
[2] 写作业 [未完成]
[3] 运动 [未完成]
--- 完成第1个任务 ---
[1] 学习Python [已完成]
[2] 写作业 [未完成]
[3] 运动 [未完成]
\`\`\``,hint:'add_task 用 tasks.append({"name": name, "done": False})',code:`# 任务管理器

# 1. 定义 add_task 函数


# 2. 定义 show_tasks 函数


# 3. 定义 complete_task 函数


# 4. 创建并添加任务
tasks = []


# 5. 打印任务


# 6. 完成第1个任务
print("--- 完成第1个任务 ---")


# 7. 再次打印

`,testCode:`# 测试任务管理器
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含3个任务",
    "passed": output.count("未完成") + output.count("已完成") >= 3,
    "message": "应该有 3 个任务"
})

_test_results.append({
    "name": "有完成标记",
    "passed": "已完成" in output,
    "message": "应该有标记为已完成的任务"
})

_test_results.append({
    "name": "包含学习Python",
    "passed": "学习" in output or "Python" in output or "python" in output,
    "message": "应该包含一个学习相关的任务"
})
`},{id:6,title:"小测验",type:"quiz",content:`来测试一下你的综合理解！

**问题**：开发一个项目时，把代码分成多个函数的好处是什么？`,options:["运行速度更快","代码更清晰、易于维护、可以复用","可以省略变量","不需要写注释"],correctAnswer:1},{id:7,title:"实战：简易通讯录",type:"practice",content:`**终极挑战！** 综合运用所有知识，做一个简易通讯录。

要求：
1. 用**列表**存储联系人，每个联系人是**字典**：\`{"name": "...", "phone": "..."}\`
2. 定义函数 \`add_contact(contacts, name, phone)\` 添加联系人
3. 定义函数 \`find_contact(contacts, name)\` 按姓名查找
4. 定义函数 \`show_all(contacts)\` 显示所有联系人
5. 添加 3 个联系人
6. 查找其中一个并打印结果
7. 显示所有联系人

预期输出包含：
\`\`\`
--- 所有联系人 ---
小明: 13800138000
小红: 13900139000
小刚: 13700137000
--- 查找 小明 ---
小明: 13800138000
\`\`\``,hint:'find_contact 用 for 循环遍历，if c["name"] == name 判断',code:`# 简易通讯录

# 1. 定义函数
def add_contact(contacts, name, phone):
    pass  # 替换为你的代码

def find_contact(contacts, name):
    pass  # 替换为你的代码

def show_all(contacts):
    pass  # 替换为你的代码

# 2. 添加联系人
contacts = []


# 3. 显示所有联系人
print("--- 所有联系人 ---")


# 4. 查找联系人
print("--- 查找 小明 ---")

`,testCode:`# 测试通讯录
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含3个联系人",
    "passed": output.count("138") + output.count("139") + output.count("137") >= 3,
    "message": "应该有 3 个电话号码"
})

_test_results.append({
    "name": "有查找功能",
    "passed": "查找" in output or "搜索" in output or "小明" in output,
    "message": "应该有查找联系人的功能"
})

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "通讯录应该包含小明"
})

_test_results.append({
    "name": "包含电话号码",
    "passed": "138" in output or "139" in output,
    "message": "应该有电话号码"
})
`},{id:8,title:"恭喜完成学习之旅！",type:"explanation",content:`🎉 **恭喜！** 你已经完成了 Python 学习之旅！

**回顾你学到的知识**：
1. **基础语法** - print、注释、字符串
2. **变量与类型** - int、float、str、bool、运算符
3. **条件判断** - if-elif-else、逻辑运算
4. **循环** - for、while、break、continue
5. **数据结构** - 列表、元组、字典、集合
6. **函数** - 定义、参数、返回值、递归
7. **文件操作** - 读写、with 语句、异常处理
8. **项目实战** - 综合运用

**下一步建议**：
- 📚 继续学习面向对象编程（类和对象）
- 🌐 探索 Python 标准库（os、sys、datetime、re）
- 📦 学习第三方库（requests、pandas、numpy）
- 💼 做一个完整的项目（爬虫、网站、数据分析）
- 🤝 加入 Python 社区，参与开源项目

**记住**：编程是实践的艺术，多写代码、多思考、多阅读他人的代码，你会越来越厉害！

祝你在 Python 的道路上越走越远！🚀`}]},$a={4:[{id:1,title:"计算 1 到 100 的和",description:`编写一个程序，使用 for 循环计算 1 到 100 所有整数的和，并打印结果。

提示：
- 使用一个变量来累加和
- 使用 range(1, 101) 遍历 1 到 100
- 最终结果应该是 5050`,difficulty:"easy",initialCode:`# 计算 1 到 100 的和
total = 0

# 请在此处编写你的代码

print("1到100的和是:", total)`,testCode:`# 测试代码
output = _output_buffer.getvalue()

# 检查结果
has_5050 = '5050' in output

_test_results.append({
    "name": "正确计算和为5050",
    "passed": has_5050,
    "message": "1到100的和应该是5050，检查你的循环是否正确"
})

_test_results.append({
    "name": "输出包含total变量",
    "passed": len(output.strip()) > 0,
    "message": "请确保你的代码有输出结果"
})
`,testCases:[{name:"基础测试",input:"无",expected:"5050"}],xpReward:10},{id:2,title:"打印三角形图案",description:`编写程序，使用嵌套循环打印如下的星号三角形：

    *
   ***
  *****
 *******
*********

提示：
- 外层循环控制行数（5行）
- 内层循环打印空格和星号
- 第i行有 5-i 个空格和 2*i-1 个星号`,difficulty:"easy",initialCode:`# 打印三角形图案
n = 5  # 行数

# 请在此处编写你的代码

`,testCode:`# 测试三角形图案
output = _output_buffer.getvalue()
lines = output.strip().split('\\n')
lines = [l.rstrip() for l in lines if l.strip()]

# 检查
has_5_lines = len(lines) >= 5
last_line_stars = lines[-1].count('*') if lines else 0
first_line_stars = lines[0].count('*') if lines else 0

_test_results.append({
    "name": "至少5行",
    "passed": has_5_lines,
    "message": f"找到 {len(lines)} 行，需要至少 5 行"
})

_test_results.append({
    "name": "第一行1个星号",
    "passed": first_line_stars == 1,
    "message": f"第一行有 {first_line_stars} 个星号，应该是 1 个"
})

_test_results.append({
    "name": "最后一行9个星号",
    "passed": last_line_stars == 9,
    "message": f"最后一行有 {last_line_stars} 个星号，应该是 9 个"
})
`,testCases:[{name:"第1行",input:"无",expected:"    *"},{name:"第5行",input:"无",expected:"*********"}],xpReward:15},{id:3,title:"找出 100 以内的素数",description:`编写程序，找出 100 以内的所有素数（质数）并打印出来。

素数的定义：只能被1和自身整除的大于1的自然数。

提示：
- 外层循环遍历 2 到 100
- 内层循环检查是否能被其他数整除
- 如果一个数能被 2 到 sqrt(n) 之间的任何数整除，就不是素数`,difficulty:"medium",initialCode:`# 找出100以内的所有素数

# 请在此处编写你的代码

`,testCode:`# 测试素数
import re

output = _output_buffer.getvalue()
numbers = [int(n) for n in re.findall(r'\\d+', output)]

# 100以内的素数列表
primes_under_100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

# 检查用户输出的数字中包含多少正确的素数
found_primes = [n for n in numbers if n in primes_under_100]
correct_count = len(set(found_primes))

_test_results.append({
    "name": "包含2（唯一的偶素数）",
    "passed": 2 in numbers,
    "message": "2是唯一的偶素数，应该包含在内"
})

_test_results.append({
    "name": "找到至少20个素数",
    "passed": correct_count >= 20,
    "message": f"找到 {correct_count} 个正确的素数，100以内共有25个"
})

_test_results.append({
    "name": "没有包含非素数",
    "passed": all(n in primes_under_100 for n in numbers if n > 1),
    "message": "确保输出的都是素数，检查你的判断逻辑"
})
`,testCases:[{name:"包含2",input:"无",expected:"2"},{name:"包含97",input:"无",expected:"97"}],xpReward:20}],1:[{id:1,title:"打印欢迎横幅",description:`使用 print 函数打印一个欢迎横幅，要求：

1. 用 = 号作为分隔线（至少 20 个）
2. 中间打印 "欢迎学习 Python"
3. 底部再用 = 号分隔

输出效果：
====================
欢迎学习 Python
====================`,difficulty:"easy",initialCode:`# 打印欢迎横幅


`,testCode:`# 测试欢迎横幅
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

_test_results.append({
    "name": "至少3行",
    "passed": len(lines) >= 3,
    "message": f"找到 {len(lines)} 行，需要至少 3 行"
})

_test_results.append({
    "name": "包含欢迎语",
    "passed": "欢迎" in output,
    "message": "应该包含欢迎语"
})

_test_results.append({
    "name": "有分隔线",
    "passed": "===" in output,
    "message": "应该有 = 分隔线"
})
`,testCases:[{name:"基础测试",input:"无",expected:"多行横幅"}],xpReward:10},{id:2,title:"打印星号矩形",description:`使用 print 和字符串乘法，打印一个 4 行 5 列的星号矩形：

*****
*****
*****
*****

提示：
- "*" * 5 可以生成 5 个星号
- 使用 for 循环或重复 print 语句`,difficulty:"easy",initialCode:`# 打印 4 行 5 列的星号矩形

`,testCode:`# 测试星号矩形
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

has_4_lines = len(lines) >= 4
all_5_stars = all(l.strip() == '*****' for l in lines[:4]) if len(lines) >= 4 else False

_test_results.append({
    "name": "至少4行",
    "passed": has_4_lines,
    "message": f"找到 {len(lines)} 行，需要 4 行"
})

_test_results.append({
    "name": "每行5个星号",
    "passed": all_5_stars,
    "message": "每行应该恰好是 5 个星号 *****"
})
`,testCases:[{name:"行数",input:"无",expected:"4行"},{name:"第1行",input:"无",expected:"*****"}],xpReward:15},{id:3,title:"自我介绍卡片",description:`使用 print 和 f-string 打印一张自我介绍卡片，要求：

1. 用 - 号作为分隔线
2. 包含姓名、年龄、爱好三个信息
3. 每个信息用制表符 \\t 对齐

输出效果示例：
--------------------
姓名:\\t小明
年龄:\\t18
爱好:\\t编程
--------------------`,difficulty:"medium",initialCode:`# 自我介绍卡片
name = "小明"
age = 18
hobby = "编程"

# 在此打印卡片

`,testCode:`# 测试自我介绍卡片
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

_test_results.append({
    "name": "至少5行",
    "passed": len(lines) >= 5,
    "message": f"找到 {len(lines)} 行，需要至少 5 行（含分隔线）"
})

_test_results.append({
    "name": "有分隔线",
    "passed": "---" in output,
    "message": "应该有 - 分隔线"
})

_test_results.append({
    "name": "包含姓名年龄爱好",
    "passed": "小明" in output and "18" in output and "编程" in output,
    "message": "应该包含姓名、年龄、爱好信息"
})
`,testCases:[{name:"基础测试",input:"无",expected:"格式化卡片"}],xpReward:20}],2:[{id:1,title:"温度转换",description:`编写程序，将摄氏温度转换为华氏温度。

公式：F = C * 9/5 + 32

要求：
- 设置变量 celsius = 37
- 计算华氏温度
- 打印格式："37°C = 98.6°F"（保留1位小数）`,difficulty:"easy",initialCode:`# 温度转换
celsius = 37

# 在此计算并打印

`,testCode:`# 测试温度转换
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含37",
    "passed": "37" in output,
    "message": "应该显示原始摄氏温度 37"
})

_test_results.append({
    "name": "包含98.6",
    "passed": "98.6" in output,
    "message": "37°C = 98.6°F，检查计算"
})

_test_results.append({
    "name": "包含F标记",
    "passed": "F" in output or "f" in output or "华" in output,
    "message": "应该标注华氏温度"
})
`,testCases:[{name:"基础测试",input:"37",expected:"98.6"}],xpReward:10},{id:2,title:"计算圆的面积和周长",description:`编写程序计算圆的面积和周长。

要求：
- 设置半径 radius = 5
- pi = 3.14159
- 面积 = pi * r^2
- 周长 = 2 * pi * r
- 打印面积和周长，保留2位小数

预期输出：
面积: 78.54
周长: 31.42`,difficulty:"medium",initialCode:`# 计算圆的面积和周长
radius = 5
pi = 3.14159

# 在此计算并打印

`,testCode:`# 测试圆的计算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含78.54",
    "passed": "78.54" in output or "78.5" in output,
    "message": "面积 = 3.14159 * 25 = 78.54"
})

_test_results.append({
    "name": "包含31.42",
    "passed": "31.42" in output or "31.4" in output,
    "message": "周长 = 2 * 3.14159 * 5 = 31.42"
})
`,testCases:[{name:"面积",input:"5",expected:"78.54"},{name:"周长",input:"5",expected:"31.42"}],xpReward:15},{id:3,title:"时间换算",description:`编写程序，将秒数换算为"X小时Y分钟Z秒"的格式。

要求：
- 设置变量 total_seconds = 7384
- 计算小时、分钟、秒
- 打印格式："7384秒 = 2小时3分钟4秒"

提示：
- 小时 = total_seconds // 3600
- 剩余 = total_seconds % 3600
- 分钟 = 剩余 // 60
- 秒 = 剩余 % 60`,difficulty:"hard",initialCode:`# 时间换算
total_seconds = 7384

# 在此计算并打印

`,testCode:`# 测试时间换算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含2小时",
    "passed": "2" in output and ("小时" in output or "时" in output),
    "message": "7384 // 3600 = 2 小时"
})

_test_results.append({
    "name": "包含3分钟",
    "passed": "3" in output and ("分钟" in output or "分" in output),
    "message": "剩余 184 秒，184 // 60 = 3 分钟"
})

_test_results.append({
    "name": "包含4秒",
    "passed": "4秒" in output or ("4" in output and "秒" in output),
    "message": "184 % 60 = 4 秒"
})
`,testCases:[{name:"基础测试",input:"7384",expected:"2小时3分钟4秒"}],xpReward:25}],3:[{id:1,title:"奇偶判断",description:`编写程序，判断一个数字是奇数还是偶数。

要求：
- 设置变量 num = 17
- 如果是偶数打印 "17 是偶数"
- 如果是奇数打印 "17 是奇数"

提示：用 % 运算符，num % 2 == 0 是偶数`,difficulty:"easy",initialCode:`# 奇偶判断
num = 17

# 在此编写判断代码

`,testCode:`# 测试奇偶判断
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含17",
    "passed": "17" in output,
    "message": "输出应该包含数字 17"
})

_test_results.append({
    "name": "判断为奇数",
    "passed": "奇数" in output,
    "message": "17 是奇数，应该输出 '奇数'"
})
`,testCases:[{name:"奇数测试",input:"17",expected:"奇数"}],xpReward:10},{id:2,title:"成绩等级评定",description:`编写程序，根据分数评定等级。

要求：
- 设置变量 score = 78
- 等级规则：
  - 90-100: A
  - 80-89: B
  - 70-79: C
  - 60-69: D
  - 60以下: F
- 打印格式："成绩 78，等级 C"

用 if-elif-else 实现`,difficulty:"medium",initialCode:`# 成绩等级评定
score = 78

# 在此编写判断代码

`,testCode:`# 测试成绩等级
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含78",
    "passed": "78" in output,
    "message": "应该显示成绩 78"
})

_test_results.append({
    "name": "等级为C",
    "passed": "C" in output,
    "message": "78 分应该是 C 等级"
})
`,testCases:[{name:"基础测试",input:"78",expected:"C"}],xpReward:15},{id:3,title:"个人所得税计算",description:`编写简易个人所得税计算器。

要求：
- 设置变量 income = 15000（月收入）
- 起征点 5000 元
- 应纳税额 = 收入 - 起征点
- 税率规则：
  - 不超过3000: 3%
  - 3000-12000: 10%
  - 12000-25000: 20%
  - 超过25000: 25%
- 打印应纳税额和税金

提示：15000 - 5000 = 10000，适用 10% 税率，税金 = 1000`,difficulty:"hard",initialCode:`# 个人所得税计算
income = 15000
threshold = 5000

# 在此计算并打印

`,testCode:`# 测试个税计算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含10000",
    "passed": "10000" in output,
    "message": "应纳税额 = 15000 - 5000 = 10000"
})

_test_results.append({
    "name": "包含1000",
    "passed": "1000" in output,
    "message": "税金 = 10000 * 10% = 1000"
})
`,testCases:[{name:"基础测试",input:"15000",expected:"税金1000"}],xpReward:25}],5:[{id:1,title:"求列表最大最小值",description:`编写程序，找出列表中的最大值和最小值。

要求：
- 列表 numbers = [23, 45, 12, 67, 34, 89, 5, 56]
- 不使用 max() 和 min()，用循环实现
- 打印最大值和最小值

预期输出：
最大值: 89
最小值: 5`,difficulty:"easy",initialCode:`# 求列表最大最小值
numbers = [23, 45, 12, 67, 34, 89, 5, 56]

# 在此编写代码

`,testCode:`# 测试最大最小值
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含89",
    "passed": "89" in output,
    "message": "最大值应该是 89"
})

_test_results.append({
    "name": "包含5",
    "passed": "5" in output,
    "message": "最小值应该是 5"
})
`,testCases:[{name:"最大值",input:"无",expected:"89"},{name:"最小值",input:"无",expected:"5"}],xpReward:10},{id:2,title:"列表去重并排序",description:`编写程序，对列表去重并排序。

要求：
- 列表 nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
- 去除重复元素
- 从小到大排序
- 打印结果

预期输出：[1, 2, 3, 4, 5, 6, 9]

提示：可以用 set() 去重，sorted() 排序`,difficulty:"medium",initialCode:`# 列表去重并排序
nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

# 在此编写代码

`,testCode:`# 测试去重排序
output = _output_buffer.getvalue()

# 检查是否包含所有去重后的数字
has_1 = "1" in output
has_9 = "9" in output
has_2 = "2" in output

_test_results.append({
    "name": "包含1",
    "passed": has_1,
    "message": "去重后应包含 1"
})

_test_results.append({
    "name": "包含9",
    "passed": has_9,
    "message": "去重后应包含 9"
})

_test_results.append({
    "name": "包含2",
    "passed": has_2,
    "message": "去重后应包含 2"
})
`,testCases:[{name:"基础测试",input:"无",expected:"[1, 2, 3, 4, 5, 6, 9]"}],xpReward:15},{id:3,title:"矩阵转置",description:`编写程序，实现二维矩阵的转置（行列互换）。

要求：
- 矩阵 matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
- 转置后：[[1, 4, 7], [2, 5, 8], [3, 6, 9]]
- 打印转置后的矩阵

提示：可以用嵌套列表推导式 [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]`,difficulty:"hard",initialCode:`# 矩阵转置
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# 在此编写转置代码

`,testCode:`# 测试矩阵转置
output = _output_buffer.getvalue()

# 转置后第一行应为 [1, 4, 7]
_test_results.append({
    "name": "包含1",
    "passed": "1" in output,
    "message": "转置后应包含 1"
})

_test_results.append({
    "name": "包含7",
    "passed": "7" in output,
    "message": "转置后第一行包含 7"
})

_test_results.append({
    "name": "包含4",
    "passed": "4" in output,
    "message": "转置后应包含 4"
})

_test_results.append({
    "name": "包含6",
    "passed": "6" in output,
    "message": "转置后应包含 6"
})
`,testCases:[{name:"第1行",input:"无",expected:"[1, 4, 7]"},{name:"第3行",input:"无",expected:"[3, 6, 9]"}],xpReward:25}],6:[{id:1,title:"词频统计",description:`编写程序，统计句子中每个单词出现的次数。

要求：
- 句子 text = "the cat sat on the mat the cat"
- 用字典统计每个单词出现次数
- 打印统计结果

预期输出包含：
the: 3
cat: 2
sat: 1
on: 1
mat: 1`,difficulty:"easy",initialCode:`# 词频统计
text = "the cat sat on the mat the cat"

# 在此编写代码

`,testCode:`# 测试词频统计
output = _output_buffer.getvalue()

_test_results.append({
    "name": "the出现3次",
    "passed": "3" in output,
    "message": "the 出现了 3 次"
})

_test_results.append({
    "name": "cat出现2次",
    "passed": "2" in output,
    "message": "cat 出现了 2 次"
})

_test_results.append({
    "name": "包含the",
    "passed": "the" in output,
    "message": "应该统计 the 的次数"
})
`,testCases:[{name:"基础测试",input:"无",expected:"the:3"}],xpReward:10},{id:2,title:"通讯录管理",description:`编写简易通讯录程序。

要求：
- 创建字典 contacts 存储联系人
- 添加 3 个联系人："小明": "13800138000", "小红": "13900139000", "小刚": "13700137000"
- 修改 "小刚" 的电话为 "13500135000"
- 删除 "小红"
- 打印所有联系人

预期输出包含：
小明: 13800138000
小刚: 13500135000`,difficulty:"medium",initialCode:`# 通讯录管理
contacts = {}

# 1. 添加联系人


# 2. 修改小刚电话


# 3. 删除小红


# 4. 打印所有联系人

`,testCode:`# 测试通讯录
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "通讯录应包含小明"
})

_test_results.append({
    "name": "包含13800138000",
    "passed": "13800138000" in output or "138" in output,
    "message": "小明电话 13800138000"
})

_test_results.append({
    "name": "包含13500135000",
    "passed": "13500135000" in output or "135" in output,
    "message": "小刚修改后的电话 13500135000"
})

_test_results.append({
    "name": "不含139",
    "passed": "13900139000" not in output,
    "message": "小红应被删除，13900139000 不应出现"
})
`,testCases:[{name:"基础测试",input:"无",expected:"2个联系人"}],xpReward:20},{id:3,title:"集合运算：找共同好友",description:`编写程序，用集合运算找出共同好友和独有好友。

要求：
- my_friends = {"小明", "小红", "小刚", "小丽"}
- their_friends = {"小刚", "小丽", "小强", "小芳"}
- 找出共同好友（交集）
- 找出只有我有的好友（差集）
- 找出所有好友（并集）
- 分别打印

预期输出包含：
共同好友: 小刚 小丽
我的独有好友: 小明 小红
所有好友: ...`,difficulty:"hard",initialCode:`# 集合运算
my_friends = {"小明", "小红", "小刚", "小丽"}
their_friends = {"小刚", "小丽", "小强", "小芳"}

# 1. 共同好友（交集）

# 2. 我的独有好友（差集）

# 3. 所有好友（并集）

`,testCode:`# 测试集合运算
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含小刚",
    "passed": "小刚" in output,
    "message": "小刚是共同好友"
})

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "小明是我的独有好友"
})

_test_results.append({
    "name": "包含小强",
    "passed": "小强" in output,
    "message": "小强是对方的好友"
})

_test_results.append({
    "name": "包含小芳",
    "passed": "小芳" in output,
    "message": "小芳是对方的好友"
})
`,testCases:[{name:"共同好友",input:"无",expected:"小刚小丽"},{name:"所有好友",input:"无",expected:"6人"}],xpReward:25}],7:[{id:1,title:"判断素数函数",description:`编写函数 is_prime(n)，判断 n 是否为素数。

要求：
- 函数返回 True 或 False
- 素数：大于 1 且只能被 1 和自身整除
- 测试：is_prime(7) 返回 True，is_prime(10) 返回 False
- 打印测试结果

提示：检查 2 到 n-1 是否有能整除 n 的数`,difficulty:"easy",initialCode:`# 判断素数函数
def is_prime(n):
    # 在此编写代码
    pass

# 测试
print("7 是素数:", is_prime(7))
print("10 是素数:", is_prime(10))
print("2 是素数:", is_prime(2))
`,testCode:`# 测试素数函数
output = _output_buffer.getvalue()

_test_results.append({
    "name": "7是素数",
    "passed": "True" in output,
    "message": "7 是素数，应返回 True"
})

_test_results.append({
    "name": "10不是素数",
    "passed": "False" in output,
    "message": "10 = 2*5，不是素数，应返回 False"
})

_test_results.append({
    "name": "2是素数",
    "passed": output.count("True") >= 2,
    "message": "2 是素数，应返回 True"
})
`,testCases:[{name:"7是素数",input:"7",expected:"True"},{name:"10不是素数",input:"10",expected:"False"}],xpReward:15},{id:2,title:"斐波那契数列",description:`编写函数生成斐波那契数列。

要求：
- 函数 fibonacci(n) 返回前 n 个斐波那契数
- 斐波那契数列：0, 1, 1, 2, 3, 5, 8, 13, ...
- 每个数 = 前两个数之和
- 打印 fibonacci(10) 的结果

预期输出：[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,difficulty:"medium",initialCode:`# 斐波那契数列
def fibonacci(n):
    # 在此编写代码
    pass

# 测试
print(fibonacci(10))
`,testCode:`# 测试斐波那契
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含0",
    "passed": "0" in output,
    "message": "斐波那契数列从 0 开始"
})

_test_results.append({
    "name": "包含34",
    "passed": "34" in output,
    "message": "第10个斐波那契数是 34"
})

_test_results.append({
    "name": "包含13",
    "passed": "13" in output,
    "message": "斐波那契数列应包含 13"
})
`,testCases:[{name:"基础测试",input:"10",expected:"[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]"}],xpReward:20},{id:3,title:"汉诺塔递归",description:`编写递归函数解决汉诺塔问题。

要求：
- 函数 hanoi(n, src, mid, dst) 打印移动步骤
- 将 n 个盘子从 src 移到 dst
- 打印格式："从 X 移到 Y"
- 测试：hanoi(3, "A", "B", "C")

汉诺塔规则：
1. 一次只能移动一个盘子
2. 大盘不能压在小盘上

3 个盘子需要 7 步，打印每一步`,difficulty:"hard",initialCode:`# 汉诺塔递归
def hanoi(n, src, mid, dst):
    # 在此编写递归代码
    pass

# 测试
hanoi(3, "A", "B", "C")
`,testCode:`# 测试汉诺塔
output = _output_buffer.getvalue()
lines = [l for l in output.split('\\n') if l.strip()]

_test_results.append({
    "name": "至少7步",
    "passed": len(lines) >= 7,
    "message": f"3个盘子的汉诺塔需要 7 步，找到 {len(lines)} 步"
})

_test_results.append({
    "name": "包含A",
    "passed": "A" in output,
    "message": "移动步骤应包含 A"
})

_test_results.append({
    "name": "包含C",
    "passed": "C" in output,
    "message": "移动步骤应包含 C"
})
`,testCases:[{name:"步数",input:"3",expected:"7步"}],xpReward:30}],8:[{id:1,title:"写入日志文件",description:`编写程序，将日志信息写入文件。

要求：
- 用 with 语句打开文件 "log.txt"（写入模式）
- 写入 3 行日志：
  "2025-01-01 系统启动"
  "2025-01-01 用户登录"
  "2025-01-01 操作完成"
- 再用 with 语句读取并打印文件内容
- 打印 "日志写入完成"`,difficulty:"easy",initialCode:`# 写入日志文件

# 1. 写入日志


print("日志写入完成")

# 2. 读取并打印

`,testCode:`# 测试日志写入
output = _output_buffer.getvalue()

_test_results.append({
    "name": "提示完成",
    "passed": "完成" in output,
    "message": "应该提示日志写入完成"
})

_test_results.append({
    "name": "包含系统启动",
    "passed": "启动" in output or "系统" in output,
    "message": "应该包含系统启动日志"
})

_test_results.append({
    "name": "包含用户登录",
    "passed": "登录" in output or "用户" in output,
    "message": "应该包含用户登录日志"
})

_test_results.append({
    "name": "至少4行输出",
    "passed": len([l for l in output.split('\\n') if l.strip()]) >= 4,
    "message": "应该至少有 4 行输出（提示+3行日志）"
})
`,testCases:[{name:"基础测试",input:"无",expected:"日志文件"}],xpReward:15},{id:2,title:"学生成绩文件处理",description:`编写程序，读取学生成绩文件并统计。

要求：
1. 写入文件 grades.txt，内容：
   小明,85
   小红,92
   小刚,78
   小丽,96
   小华,88
2. 读取文件，解析每行
3. 计算并打印平均成绩
4. 找出最高分学生并打印
5. 找出最低分学生并打印

预期输出包含：
平均成绩: 87.8
最高分: 小丽 96
最低分: 小刚 78`,difficulty:"medium",initialCode:`# 学生成绩文件处理

# 1. 写入文件


# 2. 读取并解析


# 3. 计算并打印结果

`,testCode:`# 测试成绩文件处理
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含平均87",
    "passed": "87" in output,
    "message": "平均成绩 (85+92+78+96+88)/5 = 87.8"
})

_test_results.append({
    "name": "包含96",
    "passed": "96" in output,
    "message": "最高分 96"
})

_test_results.append({
    "name": "包含78",
    "passed": "78" in output,
    "message": "最低分 78"
})

_test_results.append({
    "name": "包含小丽",
    "passed": "小丽" in output,
    "message": "小丽是最高分"
})
`,testCases:[{name:"平均成绩",input:"无",expected:"87.8"},{name:"最高分",input:"无",expected:"小丽 96"}],xpReward:20},{id:3,title:"异常处理：安全除法",description:`编写程序，用异常处理实现安全的除法计算器。

要求：
- 定义函数 safe_divide(a, b)
- 用 try-except 处理：
  - 除以零（ZeroDivisionError）
  - 类型错误（TypeError）
- 出错时返回错误信息字符串
- 测试以下情况：
  - safe_divide(10, 3) → 返回数值
  - safe_divide(10, 0) → 返回 "错误：除以零"
  - safe_divide("10", 3) → 返回 "错误：类型错误" 或成功转换

打印所有测试结果`,difficulty:"hard",initialCode:`# 安全除法计算器
def safe_divide(a, b):
    # 在此编写代码，用 try-except 处理异常
    pass

# 测试
print("10 / 3 =", safe_divide(10, 3))
print("10 / 0 =", safe_divide(10, 0))
print("10 / 2 =", safe_divide(10, 2))
`,testCode:`# 测试安全除法
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含3.33",
    "passed": "3.33" in output or "3.3" in output,
    "message": "10 / 3 ≈ 3.33"
})

_test_results.append({
    "name": "处理除以零",
    "passed": "零" in output or "zero" in output.lower() or "错误" in output,
    "message": "除以零应该返回错误信息"
})

_test_results.append({
    "name": "包含5",
    "passed": "5" in output,
    "message": "10 / 2 = 5"
})
`,testCases:[{name:"正常除法",input:"10,3",expected:"3.33"},{name:"除以零",input:"10,0",expected:"错误"}],xpReward:25}],9:[{id:1,title:"猜数字游戏",description:`编写一个猜数字游戏（模拟版）。

要求：
- 设置目标数字 target = 42
- 给定猜测列表 guesses = [20, 50, 35, 42]
- 用 for 循环遍历猜测
- 每次提示"大了"、"小了"或"猜对了"
- 猜对后打印用了几次

预期输出：
猜 20: 小了
猜 50: 大了
猜 35: 小了
猜 42: 猜对了！用了 4 次`,difficulty:"easy",initialCode:`# 猜数字游戏
target = 42
guesses = [20, 50, 35, 42]

# 在此编写游戏逻辑

`,testCode:`# 测试猜数字游戏
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含小了",
    "passed": "小了" in output,
    "message": "20 < 42，应该提示小了"
})

_test_results.append({
    "name": "包含大了",
    "passed": "大了" in output,
    "message": "50 > 42，应该提示大了"
})

_test_results.append({
    "name": "包含猜对",
    "passed": "对" in output,
    "message": "42 = 42，应该提示猜对了"
})

_test_results.append({
    "name": "包含4次",
    "passed": "4" in output,
    "message": "应该显示用了 4 次"
})
`,testCases:[{name:"基础测试",input:"无",expected:"猜对"}],xpReward:20},{id:2,title:"学生成绩管理系统",description:`编写简易学生成绩管理系统。

要求：
- 用列表存储学生数据，每个学生是字典 {"name": "...", "score": ...}
- 定义函数：
  - add_student(students, name, score) 添加学生
  - get_average(students) 计算平均分
  - get_top(students) 找最高分学生
- 添加 4 个学生：小明85, 小红92, 小刚78, 小丽96
- 打印所有学生
- 打印平均成绩（保留1位小数）
- 打印最高分学生

预期输出包含：
平均分: 87.8
最高分: 小丽 96`,difficulty:"medium",initialCode:`# 学生成绩管理系统
def add_student(students, name, score):
    pass  # 替换为你的代码

def get_average(students):
    pass  # 替换为你的代码

def get_top(students):
    pass  # 替换为你的代码

# 测试
students = []

# 添加学生


# 打印结果

`,testCode:`# 测试学生管理系统
output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含87.8",
    "passed": "87.8" in output or "87" in output,
    "message": "平均分 (85+92+78+96)/4 = 87.8"
})

_test_results.append({
    "name": "包含96",
    "passed": "96" in output,
    "message": "最高分 96"
})

_test_results.append({
    "name": "包含小丽",
    "passed": "小丽" in output,
    "message": "最高分学生是小丽"
})

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "应该包含小明"
})
`,testCases:[{name:"平均分",input:"无",expected:"87.8"},{name:"最高分",input:"无",expected:"小丽 96"}],xpReward:30},{id:3,title:"简易计算器",description:`编写简易计算器程序，支持多种运算。

要求：
- 定义函数 calculate(a, op, b)
- 支持 +、-、*、/、%（取余）、**（幂）运算
- 用 if-elif-else 判断运算符
- 除法和取余时处理除以零的情况
- 未知运算符返回 "不支持的操作"
- 测试以下运算：
  - calculate(10, "+", 5)
  - calculate(10, "*", 4)
  - calculate(2, "**", 10)
  - calculate(10, "/", 0)

打印所有测试结果`,difficulty:"hard",initialCode:`# 简易计算器
def calculate(a, op, b):
    # 在此编写代码
    pass

# 测试
print("10 + 5 =", calculate(10, "+", 5))
print("10 * 4 =", calculate(10, "*", 4))
print("2 ** 10 =", calculate(2, "**", 10))
print("10 / 0 =", calculate(10, "/", 0))
`,testCode:`# 测试计算器
output = _output_buffer.getvalue()

_test_results.append({
    "name": "加法15",
    "passed": "15" in output,
    "message": "10 + 5 = 15"
})

_test_results.append({
    "name": "乘法40",
    "passed": "40" in output,
    "message": "10 * 4 = 40"
})

_test_results.append({
    "name": "幂1024",
    "passed": "1024" in output,
    "message": "2 ** 10 = 1024"
})

_test_results.append({
    "name": "处理除以零",
    "passed": "零" in output or "错" in output or "不可" in output,
    "message": "除以零应该有错误提示"
})
`,testCases:[{name:"加法",input:"10,+,5",expected:"15"},{name:"幂运算",input:"2,**,10",expected:"1024"}],xpReward:40}]};function lv(){const e=el(),[t,n]=j.useState(Wt[3]),{progress:r,isLevelUnlocked:s,isLevelCompleted:l,isChallengeCompleted:a}=Fn(),o=j.useMemo(()=>Wt.map(v=>{const p=s(v.id),d=l(v.id);let h="locked";return d?h="completed":p&&(h="current"),{...v,status:h}}),[s,l]),u=o.filter(v=>v.status==="completed").length,c=Math.round(u/Wt.length*100),g=v=>Array(5).fill(0).map((p,d)=>i.jsx("span",{className:`star ${d<v?"filled":""}`,children:"★"},d)),f=o.find(v=>v.status==="current")||o.find(v=>v.status!=="locked")||o[0],m=f.id,_=$a[m]||[],x=$l.filter(v=>v.completed).length,y=v=>{v.status!=="locked"&&(n(v),e(`/level/${v.id}`))};return i.jsxs("div",{className:"level-map-page",children:[i.jsxs("div",{className:"map-decoration",children:[i.jsx("div",{className:"deco-circle deco-1"}),i.jsx("div",{className:"deco-circle deco-2"}),i.jsx("div",{className:"deco-code",children:"</>"}),i.jsx("div",{className:"deco-code deco-code-2",children:"{ }"})]}),i.jsxs("div",{className:"container map-container",children:[i.jsxs("div",{className:"map-header",children:[i.jsxs("div",{className:"path-info",children:[i.jsxs("div",{className:"path-badge",children:[i.jsx("span",{className:"path-icon",children:"🐍"}),i.jsx("span",{children:"Python 进阶"})]}),i.jsx("h1",{className:"map-title",children:"冒险地图"}),i.jsxs("p",{className:"map-subtitle",children:["完成 ",u," 个关卡，共 ",Wt.length," 关 · 解锁你的 Python 技能"]})]}),i.jsxs("div",{className:"progress-bar-section",children:[i.jsxs("div",{className:"progress-info",children:[i.jsx("span",{className:"progress-label",children:"学习进度"}),i.jsxs("span",{className:"progress-percent",children:[c,"%"]})]}),i.jsx("div",{className:"progress-bar",children:i.jsx("div",{className:"progress-fill",style:{width:`${c}%`}})})]})]}),i.jsx("div",{className:"level-map-wrapper",children:i.jsxs("div",{className:"level-map",children:[i.jsx("div",{className:"map-line"}),o.map((v,p)=>{var d;return i.jsxs("div",{className:`map-node node-${v.side} status-${v.status}`,style:{animationDelay:`${p*.1}s`},onClick:()=>y(v),children:[i.jsxs("div",{className:"node-dot",children:[v.status==="completed"&&i.jsx("span",{className:"dot-check",children:"✓"}),v.status==="current"&&i.jsx("div",{className:"dot-pulse"}),v.status==="locked"&&i.jsx("span",{className:"dot-lock",children:"🔒"})]}),i.jsx("div",{className:`node-card ${t.id===v.id?"selected":""}`,children:v.status!=="locked"?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"card-header",children:[i.jsx("span",{className:"level-number",children:v.title}),i.jsx("div",{className:"level-stars",children:g(v.difficulty)})]}),i.jsx("h3",{className:"card-title",children:v.subtitle}),i.jsx("p",{className:"card-desc",children:v.description}),i.jsxs("div",{className:"card-meta",children:[i.jsxs("span",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"📚"}),v.lessons," 节课"]}),i.jsxs("span",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"⚡"}),v.challenges," 个挑战"]}),i.jsxs("span",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"⏱"}),v.duration]})]}),i.jsx("div",{className:"card-topics",children:v.topics.map((h,w)=>i.jsx("span",{className:"topic-tag",children:h},w))}),v.status==="current"&&i.jsxs("div",{className:"current-badge",children:[i.jsx("span",{className:"pulse-dot"}),"进行中"]}),v.status==="completed"&&i.jsx("div",{className:"completed-badge-card",children:"✓ 已完成"})]}):i.jsxs("div",{className:"locked-content",children:[i.jsx("div",{className:"lock-icon",children:"🔒"}),i.jsx("h3",{className:"lock-title",children:"未解锁"}),i.jsx("p",{className:"lock-desc",children:"完成前一关后解锁此关卡"}),i.jsxs("div",{className:"lock-hint",children:["需要完成：",(d=o[p-1])==null?void 0:d.title]})]})})]},v.id)})]})}),f&&i.jsxs("div",{className:"current-level-detail",children:[i.jsxs("div",{className:"detail-header",children:[i.jsxs("div",{children:[i.jsx("h2",{children:f.title}),i.jsxs("p",{className:"detail-subtitle",children:["掌握 ",f.subtitle,"，学会使用循环的核心结构"]})]}),i.jsx(Ie,{to:`/level/${f.id}`,className:"btn btn-primary",children:"进入学习 →"})]}),i.jsxs("div",{className:"lessons-list",children:[i.jsx("h3",{className:"list-title",children:"📖 课程列表"}),$l.map((v,p)=>i.jsxs("div",{className:`lesson-item ${v.completed?"completed":""}`,onClick:()=>e(`/level/${f.id}`),children:[i.jsx("div",{className:"lesson-index",children:String(p+1).padStart(2,"0")}),i.jsxs("div",{className:"lesson-icon",children:[v.type==="video"&&"🎬",v.type==="reading"&&"📖",v.type==="interactive"&&"💻"]}),i.jsxs("div",{className:"lesson-info",children:[i.jsx("h4",{className:"lesson-title",children:v.title}),i.jsx("span",{className:"lesson-duration",children:v.duration})]}),i.jsx("div",{className:"lesson-status",children:v.completed?i.jsx("span",{className:"status-completed",children:"✓ 已完成"}):i.jsx("span",{className:"status-current",children:"继续学习"})})]},v.id))]}),i.jsxs("div",{className:"challenges-section",children:[i.jsx("h3",{className:"list-title",children:"⚡ 编程挑战"}),i.jsx("div",{className:"challenges-grid",children:_.length>0?_.map(v=>{const p=a(m,v.id);return i.jsxs("div",{className:`challenge-card ${p?"completed":""}`,onClick:()=>e(`/level/${f.id}`),children:[i.jsxs("div",{className:"challenge-header",children:[i.jsxs("span",{className:`challenge-difficulty difficulty-${v.difficulty}`,children:[v.difficulty==="easy"&&"简单",v.difficulty==="medium"&&"中等",v.difficulty==="hard"&&"困难"]}),p&&i.jsx("span",{className:"challenge-check",children:"✓"})]}),i.jsx("h4",{className:"challenge-title",children:v.title})]},v.id)}):sv.map(v=>i.jsxs("div",{className:`challenge-card ${v.completed?"completed":""}`,onClick:()=>e(`/level/${f.id}`),children:[i.jsxs("div",{className:"challenge-header",children:[i.jsxs("span",{className:`challenge-difficulty difficulty-${v.difficulty}`,children:[v.difficulty==="easy"&&"简单",v.difficulty==="medium"&&"中等",v.difficulty==="hard"&&"困难"]}),v.completed&&i.jsx("span",{className:"challenge-check",children:"✓"})]}),i.jsx("h4",{className:"challenge-title",children:v.title})]},v.id))})]}),i.jsxs("div",{className:"stats-row",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",children:"📚"}),i.jsxs("div",{className:"stat-content",children:[i.jsxs("span",{className:"stat-big",children:[x,"/",$l.length]}),i.jsx("span",{className:"stat-small",children:"已完成课时"})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",children:"⭐"}),i.jsxs("div",{className:"stat-content",children:[i.jsxs("span",{className:"stat-big",children:[r.xp,"/",r.totalXP]}),i.jsx("span",{className:"stat-small",children:"经验值 XP"})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",children:"⏱"}),i.jsxs("div",{className:"stat-content",children:[i.jsxs("span",{className:"stat-big",children:[">","30 分钟"]}),i.jsx("span",{className:"stat-small",children:"预计学习时间"})]})]})]})]})]})]})}function Oi({initialCode:e="",onRun:t,readOnly:n=!1,height:r="300px",showOutput:s=!0,testCode:l,onTestResult:a,placeholder:o="# 在这里编写你的 Python 代码"}){const[u,c]=j.useState(e),[g,f]=j.useState(""),[m,_]=j.useState(null),[x,y]=j.useState(!1),[v,p]=j.useState([]),d=j.useRef(null),{isLoading:h,runCode:w,runCodeWithTests:R}=np();j.useEffect(()=>{c(e)},[e]);const N=async()=>{if(!(h||x)){y(!0),f(""),_(null),p([]);try{if(l){const L=await R(u,l);f(L.output),_(L.error),p(L.testResults),a==null||a(L.passed,L.testResults),t==null||t(L.output,L.error)}else{const L=await w(u);f(L.output),_(L.error),t==null||t(L.output,L.error)}}catch(L){_(L instanceof Error?L.message:"执行出错")}finally{y(!1)}}},k=L=>{if(L.key==="Tab"){L.preventDefault();const D=L.target,U=D.selectionStart,$e=D.selectionEnd,Ye=u.substring(0,U)+"    "+u.substring($e);c(Ye),setTimeout(()=>{D.selectionStart=D.selectionEnd=U+4},0)}(L.ctrlKey||L.metaKey)&&L.key==="Enter"&&(L.preventDefault(),N())},S=()=>{navigator.clipboard.writeText(u)},C=()=>{c(e),f(""),_(null),p([])},E=()=>{const L=u.split(`
`).length;return Array(L).fill(0).map((D,U)=>i.jsx("div",{className:"line-number",children:U+1},U))};return i.jsxs("div",{className:"code-editor-container",children:[i.jsxs("div",{className:"editor-header",children:[i.jsx("div",{className:"editor-tabs",children:i.jsx("span",{className:"tab active",children:"main.py"})}),i.jsxs("div",{className:"editor-actions",children:[i.jsx("button",{className:"action-btn",onClick:S,title:"复制代码",children:"📋"}),i.jsx("button",{className:"action-btn",onClick:C,title:"重置代码",children:"🔄"}),i.jsx("button",{className:`run-btn ${x?"running":""}`,onClick:N,disabled:h||x||n,children:h?i.jsx(i.Fragment,{children:"⏳ 加载中..."}):x?i.jsx(i.Fragment,{children:"⏳ 运行中..."}):i.jsx(i.Fragment,{children:"▶ 运行代码"})})]})]}),i.jsxs("div",{className:"editor-body",style:{height:r},children:[i.jsx("div",{className:"line-numbers",children:E()}),i.jsx("textarea",{ref:d,className:"code-textarea",value:u,onChange:L=>c(L.target.value),onKeyDown:k,readOnly:n,placeholder:o,spellCheck:!1})]}),s&&i.jsxs("div",{className:"output-section",children:[i.jsxs("div",{className:"output-header",children:[i.jsx("span",{className:"output-title",children:"📤 输出结果"}),v.length>0&&i.jsxs("span",{className:`test-summary ${v.every(L=>L.passed)?"all-passed":"has-failed"}`,children:[v.filter(L=>L.passed).length,"/",v.length," 测试通过"]})]}),i.jsx("div",{className:`output-content ${m?"has-error":""}`,children:m?i.jsx("pre",{className:"error-text",children:m}):g?i.jsx("pre",{children:g}):i.jsx("span",{className:"output-placeholder",children:'点击"运行代码"查看输出结果'})}),v.length>0&&i.jsx("div",{className:"test-results",children:v.map((L,D)=>i.jsxs("div",{className:`test-item ${L.passed?"passed":"failed"}`,children:[i.jsx("span",{className:"test-icon",children:L.passed?"✓":"✗"}),i.jsx("span",{className:"test-name",children:L.name}),!L.passed&&i.jsx("span",{className:"test-message",children:L.message})]},D))})]})]})}function iv({title:e,steps:t,onComplete:n}){var C;const[r,s]=j.useState(0),[l,a]=j.useState(new Set),[o,u]=j.useState(null),[c,g]=j.useState(!1),[f,m]=j.useState(!1),[_,x]=j.useState(!1),y=t[r],v=(r+(l.has(r)?1:0))/t.length*100,p=r===t.length-1,d=()=>{if(p){w(),n==null||n();return}s(r+1),u(null),g(!1),m(!1),x(!1)},h=()=>{r>0&&(s(r-1),u(null),g(!1),m(!1),x(!1))},w=()=>{a(E=>new Set([...E,r]))},R=E=>{c||u(E)},N=()=>{o!==null&&(g(!0),o===y.correctAnswer&&w())},k=E=>{m(E),E&&w()},S=()=>{x(!0),w()};return i.jsxs("div",{className:"interactive-lesson",children:[i.jsx("div",{className:"lesson-progress-bar",children:i.jsx("div",{className:"progress-fill",style:{width:`${v}%`}})}),i.jsx("div",{className:"lesson-steps-indicator",children:t.map((E,L)=>i.jsxs("div",{className:`step-dot ${L<r||l.has(L)?"completed":""} ${L===r?"current":""}`,onClick:()=>s(L),children:[i.jsx("span",{className:"dot-number",children:L+1}),i.jsx("span",{className:"dot-title",children:E.title})]},E.id))}),i.jsxs("div",{className:"lesson-content",children:[i.jsxs("div",{className:"step-header",children:[i.jsxs("span",{className:"step-badge",children:["第 ",r+1," 步 / 共 ",t.length," 步"]}),i.jsx("h2",{className:"step-title",children:y.title})]}),i.jsxs("div",{className:"step-body",children:[y.type==="explanation"&&i.jsxs("div",{className:"explanation-content",children:[i.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:Gr(y.content)}}),i.jsx("button",{className:"btn btn-primary",onClick:()=>{w(),d()},children:p?"完成学习 🎉":"我明白了，继续 →"})]}),y.type==="example"&&i.jsxs("div",{className:"example-content",children:[i.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:Gr(y.content)}}),y.code&&i.jsxs("div",{className:"code-example-wrapper",children:[i.jsx("div",{className:"example-label",children:"💡 点击运行试试："}),i.jsx(Oi,{initialCode:y.code,height:"250px"})]}),i.jsx("button",{className:"btn btn-primary",onClick:()=>{w(),d()},children:p?"完成学习 🎉":"继续下一步 →"})]}),y.type==="practice"&&i.jsxs("div",{className:"practice-content",children:[i.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:Gr(y.content)}}),y.hint&&i.jsxs("div",{className:"hint-box",children:[i.jsx("span",{className:"hint-icon",children:"💡 提示："}),y.hint]}),y.code&&i.jsx("div",{className:"practice-editor",children:i.jsx(Oi,{initialCode:y.code,height:"300px",testCode:y.testCode,onTestResult:k})}),i.jsxs("div",{className:"practice-actions",children:[i.jsx("button",{className:"btn btn-secondary",onClick:h,disabled:r===0,children:"← 上一步"}),!_&&!f&&i.jsx("button",{className:"btn btn-secondary",onClick:S,children:"跳过此步"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>{w(),d()},children:f||_?p?"完成学习 🎉":"继续下一步 →":"跳过练习继续 →"})]}),f&&i.jsx("div",{className:"success-message",children:"✅ 太棒了！你成功完成了这个练习！"})]}),y.type==="quiz"&&i.jsxs("div",{className:"quiz-content",children:[i.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:Gr(y.content)}}),i.jsx("div",{className:"quiz-options",children:(C=y.options)==null?void 0:C.map((E,L)=>i.jsxs("div",{className:`quiz-option ${o===L?"selected":""} ${c&&L===y.correctAnswer?"correct":""} ${c&&o===L&&L!==y.correctAnswer?"wrong":""}`,onClick:()=>R(L),children:[i.jsx("span",{className:"option-letter",children:String.fromCharCode(65+L)}),i.jsx("span",{className:"option-text",children:E})]},L))}),c?i.jsxs("div",{className:"quiz-result",children:[o===y.correctAnswer?i.jsx("div",{className:"result-success",children:"✅ 回答正确！"}):i.jsxs("div",{className:"result-failure",children:["❌ 回答错误，正确答案是 ",String.fromCharCode(65+(y.correctAnswer||0))]}),i.jsxs("div",{className:"result-actions",children:[i.jsx("button",{className:"btn btn-secondary",onClick:()=>{g(!1),u(null)},children:"重新答题"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>{w(),d()},children:p?"完成学习 🎉":"继续下一步 →"})]})]}):i.jsx("button",{className:"btn btn-primary",onClick:N,disabled:o===null,children:"提交答案"})]})]})]})]})}function Gr(e){return e.replace(/\n\n/g,"</p><p>").replace(/^/g,"<p>").replace(/$/g,"</p>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")}function av({title:e,description:t,difficulty:n,initialCode:r,testCode:s,testCases:l,onComplete:a,xpReward:o=10}){const[u,c]=j.useState(!1),[g,f]=j.useState(!1),[m,_]=j.useState("description"),x=p=>{p&&!u&&(c(!0),a==null||a())},v={easy:{label:"简单",color:"green",icon:"🟢"},medium:{label:"中等",color:"yellow",icon:"🟡"},hard:{label:"困难",color:"red",icon:"🔴"}}[n];return i.jsxs("div",{className:"challenge-arena",children:[i.jsxs("div",{className:"challenge-header",children:[i.jsxs("div",{className:"challenge-info",children:[i.jsxs("div",{className:"challenge-title-row",children:[i.jsxs("span",{className:`difficulty-badge difficulty-${n}`,children:[v.icon," ",v.label]}),i.jsxs("span",{className:"xp-reward",children:["⭐ +",o," XP"]})]}),i.jsx("h2",{className:"challenge-title",children:e})]}),u&&i.jsxs("div",{className:"completion-badge",children:[i.jsx("span",{className:"badge-icon",children:"✅"}),i.jsx("span",{children:"已完成"})]})]}),i.jsxs("div",{className:"challenge-layout",children:[i.jsxs("div",{className:"challenge-sidebar",children:[i.jsxs("div",{className:"sidebar-tabs",children:[i.jsx("button",{className:`sidebar-tab ${m==="description"?"active":""}`,onClick:()=>_("description"),children:"📝 题目描述"}),i.jsxs("button",{className:`sidebar-tab ${m==="testcases"?"active":""}`,onClick:()=>_("testcases"),children:["🧪 测试用例 (",l.length,")"]})]}),i.jsxs("div",{className:"sidebar-content",children:[m==="description"&&i.jsxs("div",{className:"description-content",children:[i.jsx("p",{className:"challenge-desc",children:t}),i.jsxs("div",{className:"hint-section",children:[i.jsx("button",{className:"hint-toggle",onClick:()=>f(!g),children:g?"隐藏提示":"💡 查看提示"}),g&&i.jsx("div",{className:"hint-content",children:i.jsx("p",{children:"提示：使用 Python 的循环结构和条件判断来解决问题。"})})]})]}),m==="testcases"&&i.jsx("div",{className:"testcases-content",children:l.map((p,d)=>i.jsxs("div",{className:"testcase-item",children:[i.jsx("div",{className:"testcase-header",children:i.jsxs("span",{className:"testcase-name",children:["测试用例 ",d+1,": ",p.name]})}),i.jsxs("div",{className:"testcase-body",children:[i.jsxs("div",{className:"testcase-row",children:[i.jsx("span",{className:"testcase-label",children:"输入："}),i.jsx("code",{children:p.input})]}),i.jsxs("div",{className:"testcase-row",children:[i.jsx("span",{className:"testcase-label",children:"预期："}),i.jsx("code",{children:p.expected})]})]})]},d))})]})]}),i.jsx("div",{className:"challenge-editor",children:i.jsx(Oi,{initialCode:r,height:"400px",testCode:s,onTestResult:x})})]}),u&&i.jsx("div",{className:"completion-modal-overlay",children:i.jsxs("div",{className:"completion-modal",children:[i.jsx("div",{className:"modal-confetti",children:"🎉"}),i.jsx("h3",{children:"恭喜完成挑战！"}),i.jsxs("p",{className:"modal-reward",children:["获得 ",i.jsxs("span",{className:"reward-xp",children:["+",o," XP"]})," 经验值"]}),i.jsx("p",{className:"modal-message",children:"你成功通过了所有测试用例，继续加油！"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>c(!1),children:"继续编码"})]})})]})}function ov(){const{id:e}=ph(),t=el(),[n,r]=j.useState("learn"),[s,l]=j.useState(null),{isLoading:a,error:o,retryLoad:u}=np(),{progress:c,isChallengeCompleted:g,isLevelUnlocked:f,completeLesson:m,completeChallenge:_,getLevelProgress:x}=Fn(),y=parseInt(e||"4"),v=Wt.find(C=>C.id===y)||Wt[3],p=f(y),d=x(y),h=sp[y]||[],w=$a[y]||[],R=w.filter(C=>g(y,C.id)).length,N=C=>Array(5).fill(0).map((E,L)=>i.jsx("span",{className:`star ${L<C?"filled":""}`,children:"★"},L)),k=()=>{m(y,1)},S=(C,E)=>{_(y,C,E),l(null)};return p?i.jsxs("div",{className:"level-detail-page",children:[o&&i.jsxs("div",{className:"pyodide-error",children:[i.jsx("span",{className:"error-icon",children:"⚠️"}),i.jsx("span",{children:"Python运行环境加载失败，代码执行功能暂不可用"}),i.jsx("button",{className:"retry-btn",onClick:u,children:"重试"})]}),a&&!o&&i.jsxs("div",{className:"pyodide-loading-banner",children:[i.jsx("div",{className:"loading-spinner-small"}),i.jsx("span",{children:"正在加载Python运行环境..."})]}),i.jsxs("div",{className:"container detail-container",children:[i.jsxs("button",{className:"back-btn",onClick:()=>t("/map"),children:[i.jsx("span",{children:"←"})," 返回地图"]}),i.jsxs("div",{className:"level-header",children:[i.jsxs("div",{className:"level-info",children:[i.jsxs("div",{className:"level-badge",children:[i.jsx("span",{className:"badge-icon",children:"🐍"}),i.jsxs("span",{children:["Python 进阶 · 第 ",v.id," 关"]})]}),i.jsx("h1",{className:"level-title",children:v.title}),i.jsx("p",{className:"level-desc",children:v.description}),i.jsxs("div",{className:"level-meta",children:[i.jsxs("div",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"📚"}),i.jsxs("span",{children:[h.length," 个学习步骤"]})]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"⚡"}),i.jsxs("span",{children:[w.length," 个挑战"]})]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"⏱"}),i.jsx("span",{children:v.duration})]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"⭐"}),i.jsxs("span",{children:["难度 ",N(v.difficulty)]})]})]}),i.jsxs("div",{className:"level-progress",children:[i.jsxs("div",{className:"progress-info",children:[i.jsx("span",{children:"本关进度"}),i.jsxs("span",{className:"progress-text",children:[d.completed,"/",d.total," 完成 · ",d.percent,"%"]})]}),i.jsx("div",{className:"progress-bar",children:i.jsx("div",{className:"progress-fill",style:{width:`${d.percent}%`}})})]})]}),i.jsxs("div",{className:"level-actions",children:[i.jsx("button",{className:"btn btn-primary btn-lg continue-btn",onClick:()=>r("learn"),children:"▶ 开始学习"}),i.jsxs("div",{className:"xp-display",children:[i.jsx("span",{className:"xp-icon",children:"⭐"}),i.jsxs("span",{className:"xp-value",children:[c.xp," XP"]})]})]})]}),i.jsxs("div",{className:"topics-section",children:[i.jsx("h3",{className:"section-title-sm",children:"📋 本关知识点"}),i.jsx("div",{className:"topics-tags",children:v.topics.map((C,E)=>i.jsx("span",{className:"topic-chip",children:C},E))})]}),i.jsxs("div",{className:"content-tabs",children:[i.jsxs("button",{className:`tab-btn ${n==="learn"?"active":""}`,onClick:()=>{r("learn"),l(null)},children:["📖 互动学习",i.jsx("span",{className:"tab-count",children:h.length})]}),i.jsxs("button",{className:`tab-btn ${n==="challenges"?"active":""}`,onClick:()=>{r("challenges"),l(null)},children:["⚡ 编程挑战",i.jsxs("span",{className:"tab-count",children:[R,"/",w.length]})]}),i.jsx("button",{className:`tab-btn ${n==="notes"?"active":""}`,onClick:()=>{r("notes"),l(null)},children:"📝 学习笔记"})]}),i.jsxs("div",{className:"tab-content",children:[n==="learn"&&i.jsx("div",{className:"learn-tab-content",children:h.length>0?i.jsx(iv,{title:v.title,steps:h,onComplete:k}):i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"暂无学习内容"})})}),n==="challenges"&&i.jsx("div",{className:"challenges-tab-content",children:s?i.jsxs("div",{children:[i.jsx("button",{className:"back-to-challenges",onClick:()=>l(null),children:"← 返回挑战列表"}),(()=>{const C=w.find(E=>E.id===s);return C?i.jsx(av,{title:C.title,description:C.description,difficulty:C.difficulty,initialCode:C.initialCode,testCode:C.testCode,testCases:C.testCases,xpReward:C.xpReward,onComplete:()=>S(C.id,C.xpReward)}):null})()]}):i.jsxs("div",{className:"challenges-list",children:[i.jsxs("div",{className:"challenges-header",children:[i.jsx("h3",{children:"编程挑战"}),i.jsx("p",{children:"完成以下挑战来巩固所学知识，获得经验值奖励"})]}),i.jsx("div",{className:"challenges-grid",children:w.map((C,E)=>{const L=g(y,C.id);return i.jsxs("div",{className:`challenge-card ${L?"completed":""}`,onClick:()=>l(C.id),children:[i.jsxs("div",{className:"challenge-card-header",children:[i.jsxs("span",{className:"challenge-number",children:["挑战 ",E+1]}),i.jsxs("span",{className:`challenge-diff diff-${C.difficulty}`,children:[C.difficulty==="easy"&&"🟢 简单",C.difficulty==="medium"&&"🟡 中等",C.difficulty==="hard"&&"🔴 困难"]})]}),i.jsx("h4",{className:"challenge-card-title",children:C.title}),i.jsxs("p",{className:"challenge-card-desc",children:[C.description.substring(0,80),"..."]}),i.jsxs("div",{className:"challenge-card-footer",children:[i.jsxs("span",{className:"xp-reward-badge",children:["⭐ +",C.xpReward," XP"]}),L&&i.jsx("span",{className:"completed-check",children:"✓ 已完成"})]})]},C.id)})})]})}),n==="notes"&&i.jsx("div",{className:"notes-content",children:i.jsxs("div",{className:"notes-placeholder",children:[i.jsx("div",{className:"notes-icon",children:"📝"}),i.jsx("h3",{children:"学习笔记"}),i.jsx("p",{children:"记录你的学习心得和重要知识点"}),i.jsx("textarea",{className:"notes-textarea",placeholder:"在这里记录你的笔记...",rows:10}),i.jsx("button",{className:"btn btn-primary",children:"保存笔记"})]})})]})]})]}):i.jsx("div",{className:"level-detail-page",children:i.jsxs("div",{className:"container detail-container",children:[i.jsxs("button",{className:"back-btn",onClick:()=>t("/map"),children:[i.jsx("span",{children:"←"})," 返回地图"]}),i.jsxs("div",{className:"locked-page",children:[i.jsx("div",{className:"lock-icon-big",children:"🔒"}),i.jsx("h2",{children:"关卡未解锁"}),i.jsx("p",{children:"完成前一关的所有课程和挑战后即可解锁此关卡"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>t("/map"),children:"返回地图"})]})]})})}function uv(e){const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return"刚刚";if(n<60)return`${n}分钟前`;const r=Math.floor(n/60);if(r<24)return`${r}小时前`;const s=Math.floor(r/24);return s<7?`${s}天前`:new Date(e).toLocaleDateString("zh-CN")}function cv(){const e=el(),{progress:t,stats:n,getLevelProgress:r,getOverallProgress:s,getRecentActivities:l}=Fn(),a=s(),o=l(20),u=Array.from({length:7}).map((v,p)=>{const d=new Date;return d.setDate(d.getDate()-(6-p)),d.toISOString().slice(0,10)}),c=Wt.map(v=>{var w,R;const p=r(v.id),d=((w=sp[v.id])==null?void 0:w.length)||0,h=((R=$a[v.id])==null?void 0:R.length)||0;return{...v,...p,lessonCount:d,challengeCount:h,total:d+h}}),g=500,f=Math.floor(t.totalXP/g)+1,m=t.totalXP%g,_=Math.round(m/g*100),x=["编程小白","初学者","进阶学徒","熟练开发者","资深工程师","Python 大师","传奇程序员"],y=x[Math.min(f-1,x.length-1)];return i.jsxs("div",{className:"learning-path-page",children:[i.jsxs("div",{className:"path-decoration",children:[i.jsx("div",{className:"deco-circle deco-1"}),i.jsx("div",{className:"deco-circle deco-2"})]}),i.jsxs("div",{className:"container path-container",children:[i.jsx("div",{className:"path-header",children:i.jsxs("div",{className:"header-info",children:[i.jsxs("div",{className:"badge",children:[i.jsx("span",{className:"badge-icon",children:"📈"}),i.jsx("span",{children:"学习路径"})]}),i.jsx("h1",{className:"page-title",children:"我的学习进度"}),i.jsx("p",{className:"page-subtitle",children:"追踪每一次成长，赢取每一个徽章"})]})}),i.jsxs("div",{className:"user-level-card",children:[i.jsxs("div",{className:"user-avatar-lg",children:[i.jsx("span",{children:"LY"}),i.jsx("div",{className:"avatar-ring"})]}),i.jsxs("div",{className:"user-info-block",children:[i.jsxs("div",{className:"user-title-row",children:[i.jsx("h2",{className:"user-name",children:"冒险者 LY"}),i.jsxs("span",{className:"user-level-badge",children:["Lv.",f," ",y]})]}),i.jsxs("div",{className:"level-progress-block",children:[i.jsxs("div",{className:"level-progress-info",children:[i.jsxs("span",{children:[m," / ",g," XP"]}),i.jsxs("span",{children:["距下一级还需 ",g-m," XP"]})]}),i.jsx("div",{className:"level-progress-bar",children:i.jsx("div",{className:"level-progress-fill",style:{width:`${_}%`}})})]}),i.jsxs("div",{className:"user-tags",children:[i.jsx("span",{className:"user-tag",children:"⚡ 速度学习者"}),i.jsx("span",{className:"user-tag",children:"🎯 挑战爱好者"})]})]})]}),i.jsxs("div",{className:"overview-grid",children:[i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(245, 158, 11, 0.15)",color:"#f59e0b"},children:"⭐"}),i.jsxs("div",{className:"ov-info",children:[i.jsx("div",{className:"ov-value",children:t.totalXP}),i.jsx("div",{className:"ov-label",children:"累计经验值"}),i.jsxs("div",{className:"ov-hint",children:["+",t.xp," 可用"]})]})]}),i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(239, 68, 68, 0.15)",color:"#ef4444"},children:"🔥"}),i.jsxs("div",{className:"ov-info",children:[i.jsxs("div",{className:"ov-value",children:[t.streak," 天"]}),i.jsx("div",{className:"ov-label",children:"连续学习"}),i.jsx("div",{className:"ov-hint",children:"保持节奏"})]})]}),i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(59, 130, 246, 0.15)",color:"#3b82f6"},children:"📚"}),i.jsxs("div",{className:"ov-info",children:[i.jsx("div",{className:"ov-value",children:n.completedLessons}),i.jsx("div",{className:"ov-label",children:"完成学习"}),i.jsx("div",{className:"ov-hint",children:"课时统计"})]})]}),i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(168, 85, 247, 0.15)",color:"#a855f7"},children:"⚔️"}),i.jsxs("div",{className:"ov-info",children:[i.jsx("div",{className:"ov-value",children:n.completedChallenges}),i.jsx("div",{className:"ov-label",children:"完成挑战"}),i.jsx("div",{className:"ov-hint",children:"挑战统计"})]})]}),i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(16, 185, 129, 0.15)",color:"#10b981"},children:"🚪"}),i.jsxs("div",{className:"ov-info",children:[i.jsxs("div",{className:"ov-value",children:[n.completedLevels," / ",n.totalLevels]}),i.jsx("div",{className:"ov-label",children:"通关进度"}),i.jsxs("div",{className:"ov-hint",children:[a.percent,"% 完成"]})]})]}),i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(245, 158, 11, 0.15)",color:"#f59e0b"},children:"🏆"}),i.jsxs("div",{className:"ov-info",children:[i.jsx("div",{className:"ov-value",children:t.unlockedAchievements.length}),i.jsx("div",{className:"ov-label",children:"解锁成就"}),i.jsx("div",{className:"ov-hint",children:"查看全部 →"})]})]})]}),i.jsxs("div",{className:"path-main",children:[i.jsxs("div",{className:"path-card calendar-card",children:[i.jsx("h3",{className:"card-title",children:"📅 最近 7 天学习"}),i.jsx("div",{className:"calendar-week",children:u.map(v=>{var w;const p=(w=t.studyDays)==null?void 0:w.includes(v),d=v===new Date().toISOString().slice(0,10),h=new Date(v).toLocaleDateString("zh-CN",{weekday:"short"});return i.jsxs("div",{className:`cal-day ${p?"studied":""} ${d?"today":""}`,title:v,children:[i.jsx("div",{className:"cal-day-label",children:h}),i.jsx("div",{className:"cal-day-cell",children:p&&i.jsx("span",{className:"cal-check",children:"✓"})})]},v)})}),i.jsx("div",{className:"calendar-foot",children:i.jsxs("span",{children:["已连续学习 ",i.jsx("strong",{children:t.streak})," 天"]})})]}),i.jsxs("div",{className:"path-card levels-card",children:[i.jsx("h3",{className:"card-title",children:"🗺️ 学习路径"}),i.jsx("div",{className:"levels-progress",children:c.map((v,p)=>{const d=p===c.length-1;return i.jsxs("div",{className:`path-level ${v.completed?"completed":""} ${v.unlocked?"unlocked":"locked"}`,onClick:()=>v.unlocked&&e(`/level/${v.id}`),children:[i.jsx("div",{className:"pl-node",children:v.completed?i.jsx("span",{children:"✓"}):i.jsx("span",{children:v.id})}),i.jsxs("div",{className:"pl-content",children:[i.jsx("div",{className:"pl-title",children:v.subtitle}),i.jsxs("div",{className:"pl-meta",children:[i.jsxs("span",{children:[v.completed,"/",v.total]}),i.jsxs("span",{children:[v.percent,"%"]})]}),i.jsx("div",{className:"pl-bar",children:i.jsx("div",{className:"pl-fill",style:{width:`${v.percent}%`}})})]}),!d&&i.jsx("div",{className:`pl-line ${v.completed?"completed":""}`})]},v.id)})})]}),i.jsxs("div",{className:"path-card activity-card",children:[i.jsx("h3",{className:"card-title",children:"🕐 最近活动"}),o.length>0?i.jsx("div",{className:"activity-list",children:o.map(v=>i.jsxs("div",{className:"activity-item",children:[i.jsx("div",{className:"act-icon",children:v.icon}),i.jsxs("div",{className:"act-body",children:[i.jsx("div",{className:"act-title",children:v.title}),i.jsx("div",{className:"act-desc",children:v.description})]}),i.jsxs("div",{className:"act-meta",children:[v.xp&&i.jsxs("span",{className:"act-xp",children:["+",v.xp," XP"]}),i.jsx("span",{className:"act-time",children:uv(v.timestamp)})]})]},v.id))}):i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"还没有活动记录，开始学习吧 🚀"})})]})]})]})]})}function dv(){var _,x;const{progress:e,stats:t,isAchievementUnlocked:n,isAchievementClaimed:r,claimAchievement:s}=Fn(),[l,a]=j.useState("all"),o=e.unlockedAchievements.length,u=At.length,c=Math.round(o/u*100),g=j.useMemo(()=>l==="all"?At:At.filter(y=>y.category===l),[l]),f=At.filter(y=>n(y.id)),m=At.filter(y=>!n(y.id));return i.jsxs("div",{className:"achievements-page",children:[i.jsxs("div",{className:"achievements-decoration",children:[i.jsx("div",{className:"deco-circle deco-1"}),i.jsx("div",{className:"deco-circle deco-2"}),i.jsx("div",{className:"deco-circle deco-3"})]}),i.jsxs("div",{className:"container achievements-container",children:[i.jsxs("div",{className:"achievements-header",children:[i.jsxs("div",{className:"header-info",children:[i.jsxs("div",{className:"badge",children:[i.jsx("span",{className:"badge-icon",children:"🏆"}),i.jsx("span",{children:"成就系统"})]}),i.jsx("h1",{className:"page-title",children:"成就殿堂"}),i.jsx("p",{className:"page-subtitle",children:"解锁成就，赢得荣耀徽章，赢取经验值奖励"})]}),i.jsxs("div",{className:"header-stats",children:[i.jsxs("div",{className:"h-stat-card",children:[i.jsx("div",{className:"h-stat-icon",children:"🎖️"}),i.jsxs("div",{className:"h-stat-info",children:[i.jsxs("div",{className:"h-stat-value",children:[o," / ",u]}),i.jsx("div",{className:"h-stat-label",children:"已解锁成就"})]})]}),i.jsxs("div",{className:"h-stat-card",children:[i.jsx("div",{className:"h-stat-icon",children:"⭐"}),i.jsxs("div",{className:"h-stat-info",children:[i.jsx("div",{className:"h-stat-value",children:e.totalXP}),i.jsx("div",{className:"h-stat-label",children:"累计 XP"})]})]}),i.jsxs("div",{className:"h-stat-card",children:[i.jsx("div",{className:"h-stat-icon",children:"🔥"}),i.jsxs("div",{className:"h-stat-info",children:[i.jsxs("div",{className:"h-stat-value",children:[e.streak," 天"]}),i.jsx("div",{className:"h-stat-label",children:"连续学习"})]})]})]})]}),i.jsxs("div",{className:"overall-progress-card",children:[i.jsxs("div",{className:"overall-info",children:[i.jsx("span",{className:"overall-label",children:"成就解锁进度"}),i.jsxs("span",{className:"overall-percent",children:[c,"%"]})]}),i.jsx("div",{className:"overall-bar",children:i.jsx("div",{className:"overall-fill",style:{width:`${c}%`}})})]}),i.jsx("div",{className:"category-tabs",children:Tl.map(y=>i.jsxs("button",{className:`cat-tab ${l===y.id?"active":""}`,onClick:()=>a(y.id),children:[i.jsx("span",{className:"cat-icon",children:y.icon}),i.jsx("span",{children:y.label})]},y.id))}),f.length>0&&l==="all"&&i.jsxs("div",{className:"achievements-section",children:[i.jsxs("h2",{className:"section-title",children:["✨ 已解锁 (",f.length,")"]}),i.jsx("div",{className:"achievements-grid",children:f.map(y=>{const v=r(y.id),p=nu[y.rarity],d=y.progress?y.progress(t):null;return i.jsxs("div",{className:`achievement-card unlocked rarity-${y.rarity} ${v?"claimed":""}`,style:{borderColor:p.color,background:p.bg},children:[i.jsx("div",{className:"ach-glow",style:{background:p.color}}),i.jsx("div",{className:"ach-icon",style:{color:p.color},children:y.icon}),i.jsxs("div",{className:"ach-content",children:[i.jsxs("div",{className:"ach-header",children:[i.jsx("h3",{className:"ach-title",children:y.title}),i.jsx("span",{className:"ach-rarity",style:{background:p.color},children:p.label})]}),i.jsx("p",{className:"ach-desc",children:y.description}),d&&d.total>1&&i.jsxs("div",{className:"ach-progress",children:[i.jsx("div",{className:"ach-progress-bar",children:i.jsx("div",{className:"ach-progress-fill",style:{width:`${d.current/d.total*100}%`,background:p.color}})}),i.jsxs("span",{className:"ach-progress-text",children:[d.current," / ",d.total]})]}),i.jsxs("div",{className:"ach-footer",children:[i.jsxs("span",{className:"ach-xp",children:["+",y.xpReward," XP"]}),v?i.jsx("span",{className:"ach-claimed",children:"✓ 已领取"}):i.jsx("button",{className:"ach-claim-btn",style:{background:p.color},onClick:()=>s(y.id),children:"领取奖励"})]})]})]},y.id)})})]}),i.jsxs("div",{className:"achievements-section",children:[i.jsx("h2",{className:"section-title",children:l==="all"?"🔒 待解锁":`${(_=Tl.find(y=>y.id===l))==null?void 0:_.icon} ${(x=Tl.find(y=>y.id===l))==null?void 0:x.label}类成就`}),i.jsx("div",{className:"achievements-grid",children:(l==="all"?m:g).map(y=>{const v=nu[y.rarity],p=y.progress?y.progress(t):null;return i.jsxs("div",{className:`achievement-card locked rarity-${y.rarity}`,style:{borderColor:v.color,background:v.bg},children:[i.jsx("div",{className:"ach-icon",style:{color:v.color,filter:"grayscale(50%) opacity(0.6)"},children:y.icon}),i.jsxs("div",{className:"ach-content",children:[i.jsxs("div",{className:"ach-header",children:[i.jsx("h3",{className:"ach-title",children:y.title}),i.jsx("span",{className:"ach-rarity",style:{background:v.color},children:v.label})]}),i.jsx("p",{className:"ach-desc",children:y.description}),p&&i.jsxs("div",{className:"ach-progress",children:[i.jsx("div",{className:"ach-progress-bar",children:i.jsx("div",{className:"ach-progress-fill",style:{width:`${p.current/p.total*100}%`,background:v.color}})}),i.jsxs("span",{className:"ach-progress-text",children:[p.current," / ",p.total]})]}),i.jsxs("div",{className:"ach-footer",children:[i.jsxs("span",{className:"ach-xp",children:["+",y.xpReward," XP"]}),i.jsx("span",{className:"ach-locked-label",children:"🔒 未解锁"})]})]})]},y.id)})}),g.length===0&&i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"该分类暂无成就"})})]})]})]})}function pv(){const{progress:e,stats:t}=Fn(),[n,r]=j.useState("xp"),[s,l]=j.useState("all"),a={rank:0,name:"我 (LY)",avatar:"LY",xp:e.totalXP,streak:e.streak,levels:t.completedLevels,color:"#10b981",isMe:!0},o=j.useMemo(()=>{const x=[...qh];return x.sort((y,v)=>v[n]-y[n]),x},[n]),u=o.findIndex(x=>x[n]>e.totalXP)+1;a.rank=u>0?u:o.length+1;const c=j.useMemo(()=>[...o,a].sort((y,v)=>v[n]-y[n]).map((y,v)=>({...y,rank:v+1})),[o,n,e.totalXP]),g=c.slice(0,3),f=c.slice(3),m=c.find(x=>x.isMe),_={xp:"经验值 XP",streak:"连续天数",levels:"通关数"};return i.jsxs("div",{className:"leaderboard-page",children:[i.jsxs("div",{className:"lb-decoration",children:[i.jsx("div",{className:"deco-circle deco-1"}),i.jsx("div",{className:"deco-circle deco-2"})]}),i.jsxs("div",{className:"container lb-container",children:[i.jsxs("div",{className:"lb-header",children:[i.jsxs("div",{className:"badge",children:[i.jsx("span",{className:"badge-icon",children:"🏅"}),i.jsx("span",{children:"排行榜"})]}),i.jsx("h1",{className:"page-title",children:"学习风云榜"}),i.jsx("p",{className:"page-subtitle",children:"看看你在 Python Quest 社区中的位置"})]}),i.jsxs("div",{className:"lb-stats-row",children:[i.jsxs("div",{className:"lb-stat",children:[i.jsx("span",{className:"lb-stat-label",children:"我的排名"}),i.jsxs("span",{className:"lb-stat-value",children:["#",m.rank]})]}),i.jsxs("div",{className:"lb-stat",children:[i.jsx("span",{className:"lb-stat-label",children:"我的经验"}),i.jsx("span",{className:"lb-stat-value",children:e.totalXP})]}),i.jsxs("div",{className:"lb-stat",children:[i.jsx("span",{className:"lb-stat-label",children:"我的连续"}),i.jsxs("span",{className:"lb-stat-value",children:[e.streak," 天"]})]}),i.jsxs("div",{className:"lb-stat",children:[i.jsx("span",{className:"lb-stat-label",children:"通关数"}),i.jsx("span",{className:"lb-stat-value",children:t.completedLevels})]})]}),i.jsxs("div",{className:"lb-filters",children:[i.jsxs("div",{className:"filter-group",children:[i.jsx("span",{className:"filter-label",children:"时间:"}),[{v:"all",l:"总榜"},{v:"month",l:"本月"},{v:"week",l:"本周"}].map(x=>i.jsx("button",{className:`filter-btn ${s===x.v?"active":""}`,onClick:()=>l(x.v),children:x.l},x.v))]}),i.jsxs("div",{className:"filter-group",children:[i.jsx("span",{className:"filter-label",children:"排序:"}),Object.keys(_).map(x=>i.jsx("button",{className:`filter-btn ${n===x?"active":""}`,onClick:()=>r(x),children:_[x]},x))]})]}),i.jsx("div",{className:"podium",children:g.map((x,y)=>{const p=[1,0,2].indexOf(y),d=[180,220,150][p],h=["#fbbf24","#94a3b8","#f97316"];return i.jsxs("div",{className:`podium-item rank-${x.rank}`,style:{order:p+1},children:[i.jsxs("div",{className:"podium-avatar",style:{background:x.color},children:[i.jsx("span",{children:x.avatar}),x.isMe&&i.jsx("span",{className:"me-flag",children:"我"})]}),i.jsx("div",{className:"podium-name",children:x.name}),i.jsxs("div",{className:"podium-stats",children:[i.jsxs("span",{children:["⭐ ",x.xp]}),i.jsxs("span",{children:["🔥 ",x.streak]})]}),i.jsxs("div",{className:"podium-rank",style:{background:h[y]},children:[i.jsx("span",{className:"rank-medal",children:x.rank===1?"🥇":x.rank===2?"🥈":"🥉"}),i.jsxs("span",{children:["#",x.rank]})]}),i.jsx("div",{className:"podium-stand",style:{height:`${d}px`,background:h[y]},children:i.jsx("span",{className:"stand-text",children:x.rank===1?"冠军":x.rank===2?"亚军":"季军"})})]},x.rank)})}),i.jsxs("div",{className:"lb-list",children:[i.jsxs("div",{className:"lb-list-header",children:[i.jsx("span",{children:"排名"}),i.jsx("span",{children:"玩家"}),i.jsx("span",{children:"经验"}),i.jsx("span",{children:"连续"}),i.jsx("span",{children:"通关"})]}),f.map(x=>i.jsxs("div",{className:`lb-list-row ${x.isMe?"is-me":""}`,children:[i.jsxs("span",{className:"lb-rank",children:["#",x.rank]}),i.jsxs("div",{className:"lb-player",children:[i.jsx("div",{className:"lb-avatar",style:{background:x.color},children:i.jsx("span",{children:x.avatar})}),i.jsx("span",{className:"lb-name",children:x.name})]}),i.jsxs("span",{className:"lb-xp",children:["⭐ ",x.xp]}),i.jsxs("span",{className:"lb-streak",children:["🔥 ",x.streak]}),i.jsxs("span",{className:"lb-levels",children:["🚪 ",x.levels]})]},x.rank)),m.rank>3&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"lb-divider",children:"... 你的位置 ..."}),i.jsxs("div",{className:"lb-list-row is-me",children:[i.jsxs("span",{className:"lb-rank",children:["#",m.rank]}),i.jsxs("div",{className:"lb-player",children:[i.jsx("div",{className:"lb-avatar",style:{background:m.color},children:i.jsx("span",{children:m.avatar})}),i.jsx("span",{className:"lb-name",children:m.name})]}),i.jsxs("span",{className:"lb-xp",children:["⭐ ",m.xp]}),i.jsxs("span",{className:"lb-streak",children:["🔥 ",m.streak]}),i.jsxs("span",{className:"lb-levels",children:["🚪 ",m.levels]})]})]})]})]})]})}function fv(){return i.jsxs("div",{className:"app",children:[i.jsx(tv,{}),i.jsx("main",{className:"main-content",children:i.jsxs(Ph,{children:[i.jsx(Dt,{path:"/",element:i.jsx(rv,{})}),i.jsx(Dt,{path:"/map",element:i.jsx(lv,{})}),i.jsx(Dt,{path:"/level/:id",element:i.jsx(ov,{})}),i.jsx(Dt,{path:"/path",element:i.jsx(cv,{})}),i.jsx(Dt,{path:"/achievements",element:i.jsx(dv,{})}),i.jsx(Dt,{path:"/leaderboard",element:i.jsx(pv,{})})]})}),i.jsx(nv,{})]})}zl.createRoot(document.getElementById("root")).render(i.jsx(vu.StrictMode,{children:i.jsx(ev,{children:i.jsx(Zh,{children:i.jsx(Fh,{children:i.jsx(fv,{})})})})}))});export default mv();
