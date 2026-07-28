var bd=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var lv=bd((iv,Pi)=>{function ep(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const s=Object.getOwnPropertyDescriptor(r,l);s&&Object.defineProperty(e,l,s.get?s:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function tp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eu={exports:{}},Tl={},tu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=Symbol.for("react.element"),np=Symbol.for("react.portal"),rp=Symbol.for("react.fragment"),lp=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),op=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),up=Symbol.for("react.suspense"),cp=Symbol.for("react.memo"),dp=Symbol.for("react.lazy"),To=Symbol.iterator;function pp(e){return e===null||typeof e!="object"?null:(e=To&&e[To]||e["@@iterator"],typeof e=="function"?e:null)}var nu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ru=Object.assign,lu={};function jn(e,t,n){this.props=e,this.context=t,this.refs=lu,this.updater=n||nu}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function su(){}su.prototype=jn.prototype;function Li(e,t,n){this.props=e,this.context=t,this.refs=lu,this.updater=n||nu}var Ri=Li.prototype=new su;Ri.constructor=Li;ru(Ri,jn.prototype);Ri.isPureReactComponent=!0;var Oo=Array.isArray,iu=Object.prototype.hasOwnProperty,Ti={current:null},ou={key:!0,ref:!0,__self:!0,__source:!0};function au(e,t,n){var r,l={},s=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)iu.call(t,r)&&!ou.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:vr,type:e,key:s,ref:i,props:l,_owner:Ti.current}}function fp(e,t){return{$$typeof:vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oi(e){return typeof e=="object"&&e!==null&&e.$$typeof===vr}function mp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zo=/\/+/g;function es(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mp(""+e.key):t.toString(36)}function Qr(e,t,n,r,l){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case vr:case np:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+es(i,0):r,Oo(l)?(n="",e!=null&&(n=e.replace(zo,"$&/")+"/"),Qr(l,t,n,"",function(c){return c})):l!=null&&(Oi(l)&&(l=fp(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(zo,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Oo(e))for(var a=0;a<e.length;a++){s=e[a];var u=r+es(s,a);i+=Qr(s,t,n,u,l)}else if(u=pp(e),typeof u=="function")for(e=u.call(e),a=0;!(s=e.next()).done;)s=s.value,u=r+es(s,a++),i+=Qr(s,t,n,u,l);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function jr(e,t,n){if(e==null)return e;var r=[],l=0;return Qr(e,r,"","",function(s){return t.call(n,s,l++)}),r}function hp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Kr={transition:null},vp={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Kr,ReactCurrentOwner:Ti};function uu(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:jr,forEach:function(e,t,n){jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jr(e,function(){t++}),t},toArray:function(e){return jr(e,function(t){return t})||[]},only:function(e){if(!Oi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=jn;I.Fragment=rp;I.Profiler=sp;I.PureComponent=Li;I.StrictMode=lp;I.Suspense=up;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;I.act=uu;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ru({},e.props),l=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=Ti.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)iu.call(t,u)&&!ou.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:vr,type:e.type,key:l,ref:s,props:r,_owner:i}};I.createContext=function(e){return e={$$typeof:op,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ip,_context:e},e.Consumer=e};I.createElement=au;I.createFactory=function(e){var t=au.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:ap,render:e}};I.isValidElement=Oi;I.lazy=function(e){return{$$typeof:dp,_payload:{_status:-1,_result:e},_init:hp}};I.memo=function(e,t){return{$$typeof:cp,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Kr.transition;Kr.transition={};try{e()}finally{Kr.transition=t}};I.unstable_act=uu;I.useCallback=function(e,t){return fe.current.useCallback(e,t)};I.useContext=function(e){return fe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};I.useEffect=function(e,t){return fe.current.useEffect(e,t)};I.useId=function(){return fe.current.useId()};I.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return fe.current.useMemo(e,t)};I.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};I.useRef=function(e){return fe.current.useRef(e)};I.useState=function(e){return fe.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return fe.current.useTransition()};I.version="18.3.1";tu.exports=I;var k=tu.exports;const cu=tp(k),gp=ep({__proto__:null,default:cu},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp=k,xp=Symbol.for("react.element"),_p=Symbol.for("react.fragment"),wp=Object.prototype.hasOwnProperty,kp=yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sp={key:!0,ref:!0,__self:!0,__source:!0};function du(e,t,n){var r,l={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)wp.call(t,r)&&!Sp.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:xp,type:e,key:s,ref:i,props:l,_owner:kp.current}}Tl.Fragment=_p;Tl.jsx=du;Tl.jsxs=du;eu.exports=Tl;var o=eu.exports,Ls={},pu={exports:{}},Ce={},fu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,z){var F=L.length;L.push(z);e:for(;0<F;){var X=F-1>>>1,b=L[X];if(0<l(b,z))L[X]=z,L[F]=b,F=X;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var z=L[0],F=L.pop();if(F!==z){L[0]=F;e:for(var X=0,b=L.length,Nr=b>>>1;X<Nr;){var Pt=2*(X+1)-1,bl=L[Pt],Lt=Pt+1,Cr=L[Lt];if(0>l(bl,F))Lt<b&&0>l(Cr,bl)?(L[X]=Cr,L[Lt]=F,X=Lt):(L[X]=bl,L[Pt]=F,X=Pt);else if(Lt<b&&0>l(Cr,F))L[X]=Cr,L[Lt]=F,X=Lt;else break e}}return z}function l(L,z){var F=L.sortIndex-z.sortIndex;return F!==0?F:L.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],c=[],v=1,m=null,h=3,y=!1,w=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(L){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=L)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function _(L){if(x=!1,f(L),!w)if(n(u)!==null)w=!0,Zl(N);else{var z=n(c);z!==null&&ql(_,z.startTime-L)}}function N(L,z){w=!1,x&&(x=!1,p(j),j=-1),y=!0;var F=h;try{for(f(z),m=n(u);m!==null&&(!(m.expirationTime>z)||L&&!R());){var X=m.callback;if(typeof X=="function"){m.callback=null,h=m.priorityLevel;var b=X(m.expirationTime<=z);z=e.unstable_now(),typeof b=="function"?m.callback=b:m===n(u)&&r(u),f(z)}else r(u);m=n(u)}if(m!==null)var Nr=!0;else{var Pt=n(c);Pt!==null&&ql(_,Pt.startTime-z),Nr=!1}return Nr}finally{m=null,h=F,y=!1}}var E=!1,C=null,j=-1,T=5,O=-1;function R(){return!(e.unstable_now()-O<T)}function se(){if(C!==null){var L=e.unstable_now();O=L;var z=!0;try{z=C(!0,L)}finally{z?ce():(E=!1,C=null)}}else E=!1}var ce;if(typeof d=="function")ce=function(){d(se)};else if(typeof MessageChannel<"u"){var Sr=new MessageChannel,Jl=Sr.port2;Sr.port1.onmessage=se,ce=function(){Jl.postMessage(null)}}else ce=function(){g(se,0)};function Zl(L){C=L,E||(E=!0,ce())}function ql(L,z){j=g(function(){L(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Zl(N))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var F=h;h=z;try{return L()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=h;h=L;try{return z()}finally{h=F}},e.unstable_scheduleCallback=function(L,z,F){var X=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?X+F:X):F=X,L){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=F+b,L={id:v++,callback:z,priorityLevel:L,startTime:F,expirationTime:b,sortIndex:-1},F>X?(L.sortIndex=F,t(c,L),n(u)===null&&L===n(c)&&(x?(p(j),j=-1):x=!0,ql(_,F-X))):(L.sortIndex=b,t(u,L),w||y||(w=!0,Zl(N))),L},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(L){var z=h;return function(){var F=h;h=z;try{return L.apply(this,arguments)}finally{h=F}}}})(mu);fu.exports=mu;var Np=fu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp=k,Ne=Np;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hu=new Set,Zn={};function Qt(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(Zn[e]=t,e=0;e<t.length;e++)hu.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rs=Object.prototype.hasOwnProperty,jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fo={},Io={};function Ep(e){return Rs.call(Io,e)?!0:Rs.call(Fo,e)?!1:jp.test(e)?Io[e]=!0:(Fo[e]=!0,!1)}function Pp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lp(e,t,n,r){if(t===null||typeof t>"u"||Pp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,l,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var zi=/[\-:]([a-z])/g;function Fi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zi,Fi);le[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zi,Fi);le[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zi,Fi);le[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ii(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lp(t,n,l,r)&&(n=null),r||l===null?Ep(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),bt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),$i=Symbol.for("react.strict_mode"),Ts=Symbol.for("react.profiler"),vu=Symbol.for("react.provider"),gu=Symbol.for("react.context"),Mi=Symbol.for("react.forward_ref"),Os=Symbol.for("react.suspense"),zs=Symbol.for("react.suspense_list"),Di=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),yu=Symbol.for("react.offscreen"),$o=Symbol.iterator;function Ln(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ts;function Dn(e){if(ts===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ts=t&&t[1]||""}return`
`+ts+e}var ns=!1;function rs(e,t){if(!e||ns)return"";ns=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),s=r.stack.split(`
`),i=l.length-1,a=s.length-1;1<=i&&0<=a&&l[i]!==s[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==s[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==s[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{ns=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function Rp(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=rs(e.type,!1),e;case 11:return e=rs(e.type.render,!1),e;case 1:return e=rs(e.type,!0),e;default:return""}}function Fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case bt:return"Portal";case Ts:return"Profiler";case $i:return"StrictMode";case Os:return"Suspense";case zs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gu:return(e.displayName||"Context")+".Consumer";case vu:return(e._context.displayName||"Context")+".Provider";case Mi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Di:return t=e.displayName||null,t!==null?t:Fs(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return Fs(e(t))}catch{}}return null}function Tp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fs(t);case 8:return t===$i?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Op(e){var t=xu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){e._valueTracker||(e._valueTracker=Op(e))}function _u(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Is(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wu(e,t){t=t.checked,t!=null&&Ii(e,"checked",t,!1)}function $s(e,t){wu(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ms(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ms(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Do(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ms(e,t,n){(t!=="number"||sl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var An=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ao(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(An(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function ku(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Uo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Su(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function As(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Su(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,Nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zp=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){zp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function Cu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function ju(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Cu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Fp=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(Fp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ws=null;function Ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,mn=null,hn=null;function Bo(e){if(e=xr(e)){if(typeof Vs!="function")throw Error(S(280));var t=e.stateNode;t&&(t=$l(t),Vs(e.stateNode,e.type,t))}}function Eu(e){mn?hn?hn.push(e):hn=[e]:mn=e}function Pu(){if(mn){var e=mn,t=hn;if(hn=mn=null,Bo(e),t)for(e=0;e<t.length;e++)Bo(t[e])}}function Lu(e,t){return e(t)}function Ru(){}var ls=!1;function Tu(e,t,n){if(ls)return e(t,n);ls=!0;try{return Lu(e,t,n)}finally{ls=!1,(mn!==null||hn!==null)&&(Ru(),Pu())}}function bn(e,t){var n=e.stateNode;if(n===null)return null;var r=$l(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Hs=!1;if(qe)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Hs=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Hs=!1}function Ip(e,t,n,r,l,s,i,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var Vn=!1,il=null,ol=!1,Qs=null,$p={onError:function(e){Vn=!0,il=e}};function Mp(e,t,n,r,l,s,i,a,u){Vn=!1,il=null,Ip.apply($p,arguments)}function Dp(e,t,n,r,l,s,i,a,u){if(Mp.apply(this,arguments),Vn){if(Vn){var c=il;Vn=!1,il=null}else throw Error(S(198));ol||(ol=!0,Qs=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ou(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wo(e){if(Kt(e)!==e)throw Error(S(188))}function Ap(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return Wo(l),e;if(s===r)return Wo(l),t;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=s;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=s;break}if(a===r){i=!0,r=l,n=s;break}a=a.sibling}if(!i){for(a=s.child;a;){if(a===n){i=!0,n=s,r=l;break}if(a===r){i=!0,r=s,n=l;break}a=a.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function zu(e){return e=Ap(e),e!==null?Fu(e):null}function Fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fu(e);if(t!==null)return t;e=e.sibling}return null}var Iu=Ne.unstable_scheduleCallback,Vo=Ne.unstable_cancelCallback,Up=Ne.unstable_shouldYield,Bp=Ne.unstable_requestPaint,Y=Ne.unstable_now,Wp=Ne.unstable_getCurrentPriorityLevel,Ui=Ne.unstable_ImmediatePriority,$u=Ne.unstable_UserBlockingPriority,al=Ne.unstable_NormalPriority,Vp=Ne.unstable_LowPriority,Mu=Ne.unstable_IdlePriority,Ol=null,He=null;function Hp(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Ol,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Xp,Qp=Math.log,Kp=Math.LN2;function Xp(e){return e>>>=0,e===0?32:31-(Qp(e)/Kp|0)|0}var Rr=64,Tr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=Un(a):(s&=i,s!==0&&(r=Un(s)))}else i=n&~l,i!==0?r=Un(i):s!==0&&(r=Un(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,s=t&-t,l>=s||l===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function Yp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Me(s),a=1<<i,u=l[i];u===-1?(!(a&n)||a&r)&&(l[i]=Yp(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}}function Ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Du(){var e=Rr;return Rr<<=1,!(Rr&4194240)&&(Rr=64),e}function ss(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function Jp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),s=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~s}}function Bi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function Au(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uu,Wi,Bu,Wu,Vu,Xs=!1,Or=[],pt=null,ft=null,mt=null,er=new Map,tr=new Map,it=[],Zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ho(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(t.pointerId)}}function Tn(e,t,n,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},t!==null&&(t=xr(t),t!==null&&Wi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function qp(e,t,n,r,l){switch(t){case"focusin":return pt=Tn(pt,e,t,n,r,l),!0;case"dragenter":return ft=Tn(ft,e,t,n,r,l),!0;case"mouseover":return mt=Tn(mt,e,t,n,r,l),!0;case"pointerover":var s=l.pointerId;return er.set(s,Tn(er.get(s)||null,e,t,n,r,l)),!0;case"gotpointercapture":return s=l.pointerId,tr.set(s,Tn(tr.get(s)||null,e,t,n,r,l)),!0}return!1}function Hu(e){var t=It(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ou(n),t!==null){e.blockedOn=t,Vu(e.priority,function(){Bu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ws=r,n.target.dispatchEvent(r),Ws=null}else return t=xr(n),t!==null&&Wi(t),e.blockedOn=n,!1;t.shift()}return!0}function Qo(e,t,n){Xr(e)&&n.delete(t)}function bp(){Xs=!1,pt!==null&&Xr(pt)&&(pt=null),ft!==null&&Xr(ft)&&(ft=null),mt!==null&&Xr(mt)&&(mt=null),er.forEach(Qo),tr.forEach(Qo)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,bp)))}function nr(e){function t(l){return On(l,e)}if(0<Or.length){On(Or[0],e);for(var n=1;n<Or.length;n++){var r=Or[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&On(pt,e),ft!==null&&On(ft,e),mt!==null&&On(mt,e),er.forEach(t),tr.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Hu(n),n.blockedOn===null&&it.shift()}var vn=nt.ReactCurrentBatchConfig,cl=!0;function ef(e,t,n,r){var l=D,s=vn.transition;vn.transition=null;try{D=1,Vi(e,t,n,r)}finally{D=l,vn.transition=s}}function tf(e,t,n,r){var l=D,s=vn.transition;vn.transition=null;try{D=4,Vi(e,t,n,r)}finally{D=l,vn.transition=s}}function Vi(e,t,n,r){if(cl){var l=Ys(e,t,n,r);if(l===null)hs(e,t,r,dl,n),Ho(e,r);else if(qp(l,e,t,n,r))r.stopPropagation();else if(Ho(e,r),t&4&&-1<Zp.indexOf(e)){for(;l!==null;){var s=xr(l);if(s!==null&&Uu(s),s=Ys(e,t,n,r),s===null&&hs(e,t,r,dl,n),s===l)break;l=s}l!==null&&r.stopPropagation()}else hs(e,t,r,null,n)}}var dl=null;function Ys(e,t,n,r){if(dl=null,e=Ai(r),e=It(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ou(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dl=e,null}function Qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wp()){case Ui:return 1;case $u:return 4;case al:case Vp:return 16;case Mu:return 536870912;default:return 16}default:return 16}}var at=null,Hi=null,Yr=null;function Ku(){if(Yr)return Yr;var e,t=Hi,n=t.length,r,l="value"in at?at.value:at.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[s-r];r++);return Yr=l.slice(e,1<r?1-r:void 0)}function Gr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function Ko(){return!1}function je(e){function t(n,r,l,s,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zr:Ko,this.isPropagationStopped=Ko,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qi=je(En),yr=Q({},En,{view:0,detail:0}),nf=je(yr),is,os,zn,zl=Q({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ki,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(is=e.screenX-zn.screenX,os=e.screenY-zn.screenY):os=is=0,zn=e),is)},movementY:function(e){return"movementY"in e?e.movementY:os}}),Xo=je(zl),rf=Q({},zl,{dataTransfer:0}),lf=je(rf),sf=Q({},yr,{relatedTarget:0}),as=je(sf),of=Q({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),af=je(of),uf=Q({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cf=je(uf),df=Q({},En,{data:0}),Yo=je(df),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mf[e])?!!t[e]:!1}function Ki(){return hf}var vf=Q({},yr,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ki,charCode:function(e){return e.type==="keypress"?Gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=je(vf),yf=Q({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Go=je(yf),xf=Q({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ki}),_f=je(xf),wf=Q({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),kf=je(wf),Sf=Q({},zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nf=je(Sf),Cf=[9,13,27,32],Xi=qe&&"CompositionEvent"in window,Hn=null;qe&&"documentMode"in document&&(Hn=document.documentMode);var jf=qe&&"TextEvent"in window&&!Hn,Xu=qe&&(!Xi||Hn&&8<Hn&&11>=Hn),Jo=" ",Zo=!1;function Yu(e,t){switch(e){case"keyup":return Cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function Ef(e,t){switch(e){case"compositionend":return Gu(t);case"keypress":return t.which!==32?null:(Zo=!0,Jo);case"textInput":return e=t.data,e===Jo&&Zo?null:e;default:return null}}function Pf(e,t){if(tn)return e==="compositionend"||!Xi&&Yu(e,t)?(e=Ku(),Yr=Hi=at=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xu&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function Ju(e,t,n,r){Eu(r),t=pl(t,"onChange"),0<t.length&&(n=new Qi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,rr=null;function Rf(e){oc(e,0)}function Fl(e){var t=ln(e);if(_u(t))return e}function Tf(e,t){if(e==="change")return t}var Zu=!1;if(qe){var us;if(qe){var cs="oninput"in document;if(!cs){var bo=document.createElement("div");bo.setAttribute("oninput","return;"),cs=typeof bo.oninput=="function"}us=cs}else us=!1;Zu=us&&(!document.documentMode||9<document.documentMode)}function ea(){Qn&&(Qn.detachEvent("onpropertychange",qu),rr=Qn=null)}function qu(e){if(e.propertyName==="value"&&Fl(rr)){var t=[];Ju(t,rr,e,Ai(e)),Tu(Rf,t)}}function Of(e,t,n){e==="focusin"?(ea(),Qn=t,rr=n,Qn.attachEvent("onpropertychange",qu)):e==="focusout"&&ea()}function zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(rr)}function Ff(e,t){if(e==="click")return Fl(t)}function If(e,t){if(e==="input"||e==="change")return Fl(t)}function $f(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:$f;function lr(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Rs.call(t,l)||!Ae(e[l],t[l]))return!1}return!0}function ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function na(e,t){var n=ta(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ta(n)}}function bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ec(){for(var e=window,t=sl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sl(e.document)}return t}function Yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mf(e){var t=ec(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bu(n.ownerDocument.documentElement,n)){if(r!==null&&Yi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,s=Math.min(r.start,l);r=r.end===void 0?s:Math.min(r.end,l),!e.extend&&s>r&&(l=r,r=s,s=l),l=na(n,s);var i=na(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Df=qe&&"documentMode"in document&&11>=document.documentMode,nn=null,Gs=null,Kn=null,Js=!1;function ra(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Js||nn==null||nn!==sl(r)||(r=nn,"selectionStart"in r&&Yi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&lr(Kn,r)||(Kn=r,r=pl(Gs,"onSelect"),0<r.length&&(t=new Qi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},ds={},tc={};qe&&(tc=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Il(e){if(ds[e])return ds[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tc)return ds[e]=t[n];return e}var nc=Il("animationend"),rc=Il("animationiteration"),lc=Il("animationstart"),sc=Il("transitionend"),ic=new Map,la="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){ic.set(e,t),Qt(t,[e])}for(var ps=0;ps<la.length;ps++){var fs=la[ps],Af=fs.toLowerCase(),Uf=fs[0].toUpperCase()+fs.slice(1);Nt(Af,"on"+Uf)}Nt(nc,"onAnimationEnd");Nt(rc,"onAnimationIteration");Nt(lc,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(sc,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function sa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dp(r,t,void 0,e),e.currentTarget=null}function oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&l.isPropagationStopped())break e;sa(l,a,c),s=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&l.isPropagationStopped())break e;sa(l,a,c),s=u}}}if(ol)throw e=Qs,ol=!1,Qs=null,e}function U(e,t){var n=t[ti];n===void 0&&(n=t[ti]=new Set);var r=e+"__bubble";n.has(r)||(ac(t,e,2,!1),n.add(r))}function ms(e,t,n){var r=0;t&&(r|=4),ac(n,e,r,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Ir]){e[Ir]=!0,hu.forEach(function(n){n!=="selectionchange"&&(Bf.has(n)||ms(n,!1,e),ms(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ir]||(t[Ir]=!0,ms("selectionchange",!1,t))}}function ac(e,t,n,r){switch(Qu(t)){case 1:var l=ef;break;case 4:l=tf;break;default:l=Vi}n=l.bind(null,t,n,e),l=void 0,!Hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function hs(e,t,n,r,l){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;a!==null;){if(i=It(a),i===null)return;if(u=i.tag,u===5||u===6){r=s=i;continue e}a=a.parentNode}}r=r.return}Tu(function(){var c=s,v=Ai(n),m=[];e:{var h=ic.get(e);if(h!==void 0){var y=Qi,w=e;switch(e){case"keypress":if(Gr(n)===0)break e;case"keydown":case"keyup":y=gf;break;case"focusin":w="focus",y=as;break;case"focusout":w="blur",y=as;break;case"beforeblur":case"afterblur":y=as;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=_f;break;case nc:case rc:case lc:y=af;break;case sc:y=kf;break;case"scroll":y=nf;break;case"wheel":y=Nf;break;case"copy":case"cut":case"paste":y=cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Go}var x=(t&4)!==0,g=!x&&e==="scroll",p=x?h!==null?h+"Capture":null:h;x=[];for(var d=c,f;d!==null;){f=d;var _=f.stateNode;if(f.tag===5&&_!==null&&(f=_,p!==null&&(_=bn(d,p),_!=null&&x.push(ir(d,_,f)))),g)break;d=d.return}0<x.length&&(h=new y(h,w,null,n,v),m.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Ws&&(w=n.relatedTarget||n.fromElement)&&(It(w)||w[be]))break e;if((y||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?It(w):null,w!==null&&(g=Kt(w),w!==g||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(x=Xo,_="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Go,_="onPointerLeave",p="onPointerEnter",d="pointer"),g=y==null?h:ln(y),f=w==null?h:ln(w),h=new x(_,d+"leave",y,n,v),h.target=g,h.relatedTarget=f,_=null,It(v)===c&&(x=new x(p,d+"enter",w,n,v),x.target=f,x.relatedTarget=g,_=x),g=_,y&&w)t:{for(x=y,p=w,d=0,f=x;f;f=Gt(f))d++;for(f=0,_=p;_;_=Gt(_))f++;for(;0<d-f;)x=Gt(x),d--;for(;0<f-d;)p=Gt(p),f--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=Gt(x),p=Gt(p)}x=null}else x=null;y!==null&&ia(m,h,y,x,!1),w!==null&&g!==null&&ia(m,g,w,x,!0)}}e:{if(h=c?ln(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var N=Tf;else if(qo(h))if(Zu)N=If;else{N=zf;var E=Of}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Ff);if(N&&(N=N(e,c))){Ju(m,N,n,v);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Ms(h,"number",h.value)}switch(E=c?ln(c):window,e){case"focusin":(qo(E)||E.contentEditable==="true")&&(nn=E,Gs=c,Kn=null);break;case"focusout":Kn=Gs=nn=null;break;case"mousedown":Js=!0;break;case"contextmenu":case"mouseup":case"dragend":Js=!1,ra(m,n,v);break;case"selectionchange":if(Df)break;case"keydown":case"keyup":ra(m,n,v)}var C;if(Xi)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else tn?Yu(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Xu&&n.locale!=="ko"&&(tn||j!=="onCompositionStart"?j==="onCompositionEnd"&&tn&&(C=Ku()):(at=v,Hi="value"in at?at.value:at.textContent,tn=!0)),E=pl(c,j),0<E.length&&(j=new Yo(j,e,null,n,v),m.push({event:j,listeners:E}),C?j.data=C:(C=Gu(n),C!==null&&(j.data=C)))),(C=jf?Ef(e,n):Pf(e,n))&&(c=pl(c,"onBeforeInput"),0<c.length&&(v=new Yo("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:c}),v.data=C))}oc(m,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=bn(e,n),s!=null&&r.unshift(ir(e,s,l)),s=bn(e,t),s!=null&&r.push(ir(e,s,l))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ia(e,t,n,r,l){for(var s=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=bn(n,s),u!=null&&i.unshift(ir(n,u,a))):l||(u=bn(n,s),u!=null&&i.push(ir(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Wf=/\r\n?/g,Vf=/\u0000|\uFFFD/g;function oa(e){return(typeof e=="string"?e:""+e).replace(Wf,`
`).replace(Vf,"")}function $r(e,t,n){if(t=oa(t),oa(e)!==t&&n)throw Error(S(425))}function fl(){}var Zs=null,qs=null;function bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ei=typeof setTimeout=="function"?setTimeout:void 0,Hf=typeof clearTimeout=="function"?clearTimeout:void 0,aa=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof aa<"u"?function(e){return aa.resolve(null).then(e).catch(Kf)}:ei;function Kf(e){setTimeout(function(){throw e})}function vs(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);nr(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ua(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Pn,or="__reactProps$"+Pn,be="__reactContainer$"+Pn,ti="__reactEvents$"+Pn,Xf="__reactListeners$"+Pn,Yf="__reactHandles$"+Pn;function It(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[be]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ua(e);e!==null;){if(n=e[Ve])return n;e=ua(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[Ve]||e[be],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function $l(e){return e[or]||null}var ni=[],sn=-1;function Ct(e){return{current:e}}function B(e){0>sn||(e.current=ni[sn],ni[sn]=null,sn--)}function A(e,t){sn++,ni[sn]=e.current,e.current=t}var kt={},ue=Ct(kt),ge=Ct(!1),Ut=kt;function _n(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in n)l[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ye(e){return e=e.childContextTypes,e!=null}function ml(){B(ge),B(ue)}function ca(e,t,n){if(ue.current!==kt)throw Error(S(168));A(ue,t),A(ge,n)}function uc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,Tp(e)||"Unknown",l));return Q({},n,r)}function hl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Ut=ue.current,A(ue,e),A(ge,ge.current),!0}function da(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=uc(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(ue),A(ue,e)):B(ge),A(ge,n)}var Ye=null,Ml=!1,gs=!1;function cc(e){Ye===null?Ye=[e]:Ye.push(e)}function Gf(e){Ml=!0,cc(e)}function jt(){if(!gs&&Ye!==null){gs=!0;var e=0,t=D;try{var n=Ye;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Ml=!1}catch(l){throw Ye!==null&&(Ye=Ye.slice(e+1)),Iu(Ui,jt),l}finally{D=t,gs=!1}}return null}var on=[],an=0,vl=null,gl=0,Ee=[],Pe=0,Bt=null,Ge=1,Je="";function zt(e,t){on[an++]=gl,on[an++]=vl,vl=e,gl=t}function dc(e,t,n){Ee[Pe++]=Ge,Ee[Pe++]=Je,Ee[Pe++]=Bt,Bt=e;var r=Ge;e=Je;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var s=32-Me(t)+l;if(30<s){var i=l-l%5;s=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ge=1<<32-Me(t)+l|n<<l|r,Je=s+e}else Ge=1<<s|n<<l|r,Je=e}function Gi(e){e.return!==null&&(zt(e,1),dc(e,1,0))}function Ji(e){for(;e===vl;)vl=on[--an],on[an]=null,gl=on[--an],on[an]=null;for(;e===Bt;)Bt=Ee[--Pe],Ee[Pe]=null,Je=Ee[--Pe],Ee[Pe]=null,Ge=Ee[--Pe],Ee[Pe]=null}var ke=null,we=null,W=!1,$e=null;function pc(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:Ge,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function li(e){if(W){var t=we;if(t){var n=t;if(!pa(e,t)){if(ri(e))throw Error(S(418));t=ht(n.nextSibling);var r=ke;t&&pa(e,t)?pc(r,n):(e.flags=e.flags&-4097|2,W=!1,ke=e)}}else{if(ri(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,ke=e}}}function fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Mr(e){if(e!==ke)return!1;if(!W)return fa(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bs(e.type,e.memoizedProps)),t&&(t=we)){if(ri(e))throw fc(),Error(S(418));for(;t;)pc(e,t),t=ht(t.nextSibling)}if(fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?ht(e.stateNode.nextSibling):null;return!0}function fc(){for(var e=we;e;)e=ht(e.nextSibling)}function wn(){we=ke=null,W=!1}function Zi(e){$e===null?$e=[e]:$e.push(e)}var Jf=nt.ReactCurrentBatchConfig;function Fn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var a=l.refs;i===null?delete a[s]:a[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Dr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ma(e){var t=e._init;return t(e._payload)}function mc(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function l(p,d){return p=xt(p,d),p.index=0,p.sibling=null,p}function s(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,f,_){return d===null||d.tag!==6?(d=Ns(f,p.mode,_),d.return=p,d):(d=l(d,f),d.return=p,d)}function u(p,d,f,_){var N=f.type;return N===en?v(p,d,f.props.children,_,f.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===lt&&ma(N)===d.type)?(_=l(d,f.props),_.ref=Fn(p,d,f),_.return=p,_):(_=nl(f.type,f.key,f.props,null,p.mode,_),_.ref=Fn(p,d,f),_.return=p,_)}function c(p,d,f,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Cs(f,p.mode,_),d.return=p,d):(d=l(d,f.children||[]),d.return=p,d)}function v(p,d,f,_,N){return d===null||d.tag!==7?(d=At(f,p.mode,_,N),d.return=p,d):(d=l(d,f),d.return=p,d)}function m(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ns(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Er:return f=nl(d.type,d.key,d.props,null,p.mode,f),f.ref=Fn(p,null,d),f.return=p,f;case bt:return d=Cs(d,p.mode,f),d.return=p,d;case lt:var _=d._init;return m(p,_(d._payload),f)}if(An(d)||Ln(d))return d=At(d,p.mode,f,null),d.return=p,d;Dr(p,d)}return null}function h(p,d,f,_){var N=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:a(p,d,""+f,_);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Er:return f.key===N?u(p,d,f,_):null;case bt:return f.key===N?c(p,d,f,_):null;case lt:return N=f._init,h(p,d,N(f._payload),_)}if(An(f)||Ln(f))return N!==null?null:v(p,d,f,_,null);Dr(p,f)}return null}function y(p,d,f,_,N){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(f)||null,a(d,p,""+_,N);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Er:return p=p.get(_.key===null?f:_.key)||null,u(d,p,_,N);case bt:return p=p.get(_.key===null?f:_.key)||null,c(d,p,_,N);case lt:var E=_._init;return y(p,d,f,E(_._payload),N)}if(An(_)||Ln(_))return p=p.get(f)||null,v(d,p,_,N,null);Dr(d,_)}return null}function w(p,d,f,_){for(var N=null,E=null,C=d,j=d=0,T=null;C!==null&&j<f.length;j++){C.index>j?(T=C,C=null):T=C.sibling;var O=h(p,C,f[j],_);if(O===null){C===null&&(C=T);break}e&&C&&O.alternate===null&&t(p,C),d=s(O,d,j),E===null?N=O:E.sibling=O,E=O,C=T}if(j===f.length)return n(p,C),W&&zt(p,j),N;if(C===null){for(;j<f.length;j++)C=m(p,f[j],_),C!==null&&(d=s(C,d,j),E===null?N=C:E.sibling=C,E=C);return W&&zt(p,j),N}for(C=r(p,C);j<f.length;j++)T=y(C,p,j,f[j],_),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?j:T.key),d=s(T,d,j),E===null?N=T:E.sibling=T,E=T);return e&&C.forEach(function(R){return t(p,R)}),W&&zt(p,j),N}function x(p,d,f,_){var N=Ln(f);if(typeof N!="function")throw Error(S(150));if(f=N.call(f),f==null)throw Error(S(151));for(var E=N=null,C=d,j=d=0,T=null,O=f.next();C!==null&&!O.done;j++,O=f.next()){C.index>j?(T=C,C=null):T=C.sibling;var R=h(p,C,O.value,_);if(R===null){C===null&&(C=T);break}e&&C&&R.alternate===null&&t(p,C),d=s(R,d,j),E===null?N=R:E.sibling=R,E=R,C=T}if(O.done)return n(p,C),W&&zt(p,j),N;if(C===null){for(;!O.done;j++,O=f.next())O=m(p,O.value,_),O!==null&&(d=s(O,d,j),E===null?N=O:E.sibling=O,E=O);return W&&zt(p,j),N}for(C=r(p,C);!O.done;j++,O=f.next())O=y(C,p,j,O.value,_),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?j:O.key),d=s(O,d,j),E===null?N=O:E.sibling=O,E=O);return e&&C.forEach(function(se){return t(p,se)}),W&&zt(p,j),N}function g(p,d,f,_){if(typeof f=="object"&&f!==null&&f.type===en&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Er:e:{for(var N=f.key,E=d;E!==null;){if(E.key===N){if(N=f.type,N===en){if(E.tag===7){n(p,E.sibling),d=l(E,f.props.children),d.return=p,p=d;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===lt&&ma(N)===E.type){n(p,E.sibling),d=l(E,f.props),d.ref=Fn(p,E,f),d.return=p,p=d;break e}n(p,E);break}else t(p,E);E=E.sibling}f.type===en?(d=At(f.props.children,p.mode,_,f.key),d.return=p,p=d):(_=nl(f.type,f.key,f.props,null,p.mode,_),_.ref=Fn(p,d,f),_.return=p,p=_)}return i(p);case bt:e:{for(E=f.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=l(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Cs(f,p.mode,_),d.return=p,p=d}return i(p);case lt:return E=f._init,g(p,d,E(f._payload),_)}if(An(f))return w(p,d,f,_);if(Ln(f))return x(p,d,f,_);Dr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=l(d,f),d.return=p,p=d):(n(p,d),d=Ns(f,p.mode,_),d.return=p,p=d),i(p)):n(p,d)}return g}var kn=mc(!0),hc=mc(!1),yl=Ct(null),xl=null,un=null,qi=null;function bi(){qi=un=xl=null}function eo(e){var t=yl.current;B(yl),e._currentValue=t}function si(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){xl=e,qi=un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(qi!==e)if(e={context:e,memoizedValue:t,next:null},un===null){if(xl===null)throw Error(S(308));un=e,xl.dependencies={lanes:0,firstContext:e}}else un=un.next=e;return t}var $t=null;function to(e){$t===null?$t=[e]:$t.push(e)}function vc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,to(t)):(n.next=l.next,l.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function no(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,et(e,n)}return l=r.interleaved,l===null?(t.next=t,to(r)):(t.next=l.next,l.next=t),r.interleaved=t,et(e,n)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bi(e,n)}}function ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?l=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _l(e,t,n,r){var l=e.updateQueue;st=!1;var s=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,i===null?s=c:i.next=c,i=u;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==i&&(a===null?v.firstBaseUpdate=c:a.next=c,v.lastBaseUpdate=u))}if(s!==null){var m=l.baseState;i=0,v=c=u=null,a=s;do{var h=a.lane,y=a.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,x=a;switch(h=t,y=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){m=w.call(y,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,h=typeof w=="function"?w.call(y,m,h):w,h==null)break e;m=Q({},m,h);break e;case 2:st=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(c=v=y,u=m):v=v.next=y,i|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(v===null&&(u=m),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else s===null&&(l.shared.lanes=0);Vt|=i,e.lanes=i,e.memoizedState=m}}function va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var _r={},Qe=Ct(_r),ar=Ct(_r),ur=Ct(_r);function Mt(e){if(e===_r)throw Error(S(174));return e}function ro(e,t){switch(A(ur,t),A(ar,e),A(Qe,_r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:As(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=As(t,e)}B(Qe),A(Qe,t)}function Sn(){B(Qe),B(ar),B(ur)}function yc(e){Mt(ur.current);var t=Mt(Qe.current),n=As(t,e.type);t!==n&&(A(ar,e),A(Qe,n))}function lo(e){ar.current===e&&(B(Qe),B(ar))}var V=Ct(0);function wl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ys=[];function so(){for(var e=0;e<ys.length;e++)ys[e]._workInProgressVersionPrimary=null;ys.length=0}var Zr=nt.ReactCurrentDispatcher,xs=nt.ReactCurrentBatchConfig,Wt=0,H=null,Z=null,ee=null,kl=!1,Xn=!1,cr=0,Zf=0;function ie(){throw Error(S(321))}function io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function oo(e,t,n,r,l,s){if(Wt=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zr.current=e===null||e.memoizedState===null?tm:nm,e=n(r,l),Xn){s=0;do{if(Xn=!1,cr=0,25<=s)throw Error(S(301));s+=1,ee=Z=null,t.updateQueue=null,Zr.current=rm,e=n(r,l)}while(Xn)}if(Zr.current=Sl,t=Z!==null&&Z.next!==null,Wt=0,ee=Z=H=null,kl=!1,t)throw Error(S(300));return e}function ao(){var e=cr!==0;return cr=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Oe(){if(Z===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,Z=e;else{if(e===null)throw Error(S(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function dr(e,t){return typeof t=="function"?t(e):t}function _s(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Z,l=r.baseQueue,s=n.pending;if(s!==null){if(l!==null){var i=l.next;l.next=s.next,s.next=i}r.baseQueue=l=s,n.pending=null}if(l!==null){s=l.next,r=r.baseState;var a=i=null,u=null,c=s;do{var v=c.lane;if((Wt&v)===v)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,i=r):u=u.next=m,H.lanes|=v,Vt|=v}c=c.next}while(c!==null&&c!==s);u===null?i=r:u.next=a,Ae(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do s=l.lane,H.lanes|=s,Vt|=s,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ws(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do s=e(s,i.action),i=i.next;while(i!==l);Ae(s,t.memoizedState)||(ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function xc(){}function _c(e,t){var n=H,r=Oe(),l=t(),s=!Ae(r.memoizedState,l);if(s&&(r.memoizedState=l,ve=!0),r=r.queue,uo(Sc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,pr(9,kc.bind(null,n,r,l,t),void 0,null),te===null)throw Error(S(349));Wt&30||wc(n,t,l)}return l}function wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kc(e,t,n,r){t.value=n,t.getSnapshot=r,Nc(t)&&Cc(e)}function Sc(e,t,n){return n(function(){Nc(t)&&Cc(e)})}function Nc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function Cc(e){var t=et(e,1);t!==null&&De(t,e,1,-1)}function ga(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=em.bind(null,H,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jc(){return Oe().memoizedState}function qr(e,t,n,r){var l=Be();H.flags|=e,l.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function Dl(e,t,n,r){var l=Oe();r=r===void 0?null:r;var s=void 0;if(Z!==null){var i=Z.memoizedState;if(s=i.destroy,r!==null&&io(r,i.deps)){l.memoizedState=pr(t,n,s,r);return}}H.flags|=e,l.memoizedState=pr(1|t,n,s,r)}function ya(e,t){return qr(8390656,8,e,t)}function uo(e,t){return Dl(2048,8,e,t)}function Ec(e,t){return Dl(4,2,e,t)}function Pc(e,t){return Dl(4,4,e,t)}function Lc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rc(e,t,n){return n=n!=null?n.concat([e]):null,Dl(4,4,Lc.bind(null,t,e),n)}function co(){}function Tc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&io(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&io(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zc(e,t,n){return Wt&21?(Ae(n,t)||(n=Du(),H.lanes|=n,Vt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function qf(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=xs.transition;xs.transition={};try{e(!1),t()}finally{D=n,xs.transition=r}}function Fc(){return Oe().memoizedState}function bf(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ic(e))$c(t,n);else if(n=vc(e,t,n,r),n!==null){var l=pe();De(n,e,r,l),Mc(n,t,r)}}function em(e,t,n){var r=yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ic(e))$c(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,a=s(i,n);if(l.hasEagerState=!0,l.eagerState=a,Ae(a,i)){var u=t.interleaved;u===null?(l.next=l,to(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=vc(e,t,l,r),n!==null&&(l=pe(),De(n,e,r,l),Mc(n,t,r))}}function Ic(e){var t=e.alternate;return e===H||t!==null&&t===H}function $c(e,t){Xn=kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bi(e,n)}}var Sl={readContext:Te,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},tm={readContext:Te,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:ya,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qr(4194308,4,Lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return qr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:ga,useDebugValue:co,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=ga(!1),t=e[0];return e=qf.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Be();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),te===null)throw Error(S(349));Wt&30||wc(r,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,ya(Sc.bind(null,r,s,e),[e]),r.flags|=2048,pr(9,kc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Be(),t=te.identifierPrefix;if(W){var n=Je,r=Ge;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nm={readContext:Te,useCallback:Tc,useContext:Te,useEffect:uo,useImperativeHandle:Rc,useInsertionEffect:Ec,useLayoutEffect:Pc,useMemo:Oc,useReducer:_s,useRef:jc,useState:function(){return _s(dr)},useDebugValue:co,useDeferredValue:function(e){var t=Oe();return zc(t,Z.memoizedState,e)},useTransition:function(){var e=_s(dr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:_c,useId:Fc,unstable_isNewReconciler:!1},rm={readContext:Te,useCallback:Tc,useContext:Te,useEffect:uo,useImperativeHandle:Rc,useInsertionEffect:Ec,useLayoutEffect:Pc,useMemo:Oc,useReducer:ws,useRef:jc,useState:function(){return ws(dr)},useDebugValue:co,useDeferredValue:function(e){var t=Oe();return Z===null?t.memoizedState=e:zc(t,Z.memoizedState,e)},useTransition:function(){var e=ws(dr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:_c,useId:Fc,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ii(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Al={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),l=yt(e),s=Ze(r,l);s.payload=t,n!=null&&(s.callback=n),t=vt(e,s,l),t!==null&&(De(t,e,l,r),Jr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),l=yt(e),s=Ze(r,l);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=vt(e,s,l),t!==null&&(De(t,e,l,r),Jr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=yt(e),l=Ze(n,r);l.tag=2,t!=null&&(l.callback=t),t=vt(e,l,r),t!==null&&(De(t,e,r,n),Jr(t,e,r))}};function xa(e,t,n,r,l,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!lr(n,r)||!lr(l,s):!0}function Dc(e,t,n){var r=!1,l=kt,s=t.contextType;return typeof s=="object"&&s!==null?s=Te(s):(l=ye(t)?Ut:ue.current,r=t.contextTypes,s=(r=r!=null)?_n(e,l):kt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),t}function _a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Al.enqueueReplaceState(t,t.state,null)}function oi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},no(e);var s=t.contextType;typeof s=="object"&&s!==null?l.context=Te(s):(s=ye(t)?Ut:ue.current,l.context=_n(e,s)),l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ii(e,t,s,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Al.enqueueReplaceState(l,l.state,null),_l(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=Rp(r),r=r.return;while(r);var l=n}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:l,digest:null}}function ks(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ai(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lm=typeof WeakMap=="function"?WeakMap:Map;function Ac(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cl||(Cl=!0,yi=r),ai(e,t)},n}function Uc(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ai(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ai(e,t),typeof r!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lm;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=ym.bind(null,e,t,n),t.then(e,e))}function ka(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var sm=nt.ReactCurrentOwner,ve=!1;function de(e,t,n,r){t.child=e===null?hc(t,null,n,r):kn(t,e.child,n,r)}function Na(e,t,n,r,l){n=n.render;var s=t.ref;return gn(t,l),r=oo(e,t,n,r,s,l),n=ao(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(W&&n&&Gi(t),t.flags|=1,de(e,t,r,l),t.child)}function Ca(e,t,n,r,l){if(e===null){var s=n.type;return typeof s=="function"&&!xo(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Bc(e,t,s,r,l)):(e=nl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&l)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:lr,n(i,r)&&e.ref===t.ref)return tt(e,t,l)}return t.flags|=1,e=xt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,l){if(e!==null){var s=e.memoizedProps;if(lr(s,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=s,(e.lanes&l)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,tt(e,t,l)}return ui(e,t,n,r,l)}function Wc(e,t,n){var r=t.pendingProps,l=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(dn,_e),_e|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(dn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,A(dn,_e),_e|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,A(dn,_e),_e|=r;return de(e,t,l,n),t.child}function Vc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ui(e,t,n,r,l){var s=ye(n)?Ut:ue.current;return s=_n(t,s),gn(t,l),n=oo(e,t,n,r,s,l),r=ao(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(W&&r&&Gi(t),t.flags|=1,de(e,t,n,l),t.child)}function ja(e,t,n,r,l){if(ye(n)){var s=!0;hl(t)}else s=!1;if(gn(t,l),t.stateNode===null)br(e,t),Dc(t,n,r),oi(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=ye(n)?Ut:ue.current,c=_n(t,c));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==c)&&_a(t,i,r,c),st=!1;var h=t.memoizedState;i.state=h,_l(t,r,i,l),u=t.memoizedState,a!==r||h!==u||ge.current||st?(typeof v=="function"&&(ii(t,n,v,r),u=t.memoizedState),(a=st||xa(t,n,a,r,h,u,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,gc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Fe(t.type,a),i.props=c,m=t.pendingProps,h=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Te(u):(u=ye(n)?Ut:ue.current,u=_n(t,u));var y=n.getDerivedStateFromProps;(v=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==m||h!==u)&&_a(t,i,r,u),st=!1,h=t.memoizedState,i.state=h,_l(t,r,i,l);var w=t.memoizedState;a!==m||h!==w||ge.current||st?(typeof y=="function"&&(ii(t,n,y,r),w=t.memoizedState),(c=st||xa(t,n,c,r,h,w,u)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ci(e,t,n,r,s,l)}function ci(e,t,n,r,l,s){Vc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&da(t,n,!1),tt(e,t,s);r=t.stateNode,sm.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=kn(t,e.child,null,s),t.child=kn(t,null,a,s)):de(e,t,a,s),t.memoizedState=r.state,l&&da(t,n,!0),t.child}function Hc(e){var t=e.stateNode;t.pendingContext?ca(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ca(e,t.context,!1),ro(e,t.containerInfo)}function Ea(e,t,n,r,l){return wn(),Zi(l),t.flags|=256,de(e,t,n,r),t.child}var di={dehydrated:null,treeContext:null,retryLane:0};function pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qc(e,t,n){var r=t.pendingProps,l=V.current,s=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),A(V,l&1),e===null)return li(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Wl(i,r,0,null),e=At(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=pi(n),t.memoizedState=di,e):po(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return im(e,t,i,r,a,l,n);if(s){s=r.fallback,i=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=xt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?s=xt(a,s):(s=At(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?pi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=di,r}return s=e.child,e=s.sibling,r=xt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function po(e,t){return t=Wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ar(e,t,n,r){return r!==null&&Zi(r),kn(t,e.child,null,n),e=po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function im(e,t,n,r,l,s,i){if(n)return t.flags&256?(t.flags&=-257,r=ks(Error(S(422))),Ar(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,l=t.mode,r=Wl({mode:"visible",children:r.children},l,0,null),s=At(s,l,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&kn(t,e.child,null,i),t.child.memoizedState=pi(i),t.memoizedState=di,s);if(!(t.mode&1))return Ar(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=ks(s,r,void 0),Ar(e,t,i,r)}if(a=(i&e.childLanes)!==0,ve||a){if(r=te,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,et(e,l),De(r,e,l,-1))}return yo(),r=ks(Error(S(421))),Ar(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=xm.bind(null,e),l._reactRetry=t,null):(e=s.treeContext,we=ht(l.nextSibling),ke=t,W=!0,$e=null,e!==null&&(Ee[Pe++]=Ge,Ee[Pe++]=Je,Ee[Pe++]=Bt,Ge=e.id,Je=e.overflow,Bt=t),t=po(t,r.children),t.flags|=4096,t)}function Pa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),si(e.return,t,n)}function Ss(e,t,n,r,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=l)}function Kc(e,t,n){var r=t.pendingProps,l=r.revealOrder,s=r.tail;if(de(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pa(e,n,t);else if(e.tag===19)Pa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(V,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&wl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ss(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&wl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ss(t,!0,n,null,s);break;case"together":Ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function om(e,t,n){switch(t.tag){case 3:Hc(t),wn();break;case 5:yc(t);break;case 1:ye(t.type)&&hl(t);break;case 4:ro(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;A(yl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Qc(e,t,n):(A(V,V.current&1),e=tt(e,t,n),e!==null?e.sibling:null);A(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Wc(e,t,n)}return tt(e,t,n)}var Xc,fi,Yc,Gc;Xc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fi=function(){};Yc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Mt(Qe.current);var s=null;switch(n){case"input":l=Is(e,l),r=Is(e,r),s=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":l=Ds(e,l),r=Ds(e,r),s=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fl)}Us(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zn.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&U("scroll",e),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Gc=function(e,t,n,r){n!==r&&(t.flags|=4)};function In(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function am(e,t,n){var r=t.pendingProps;switch(Ji(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ye(t.type)&&ml(),oe(t),null;case 3:return r=t.stateNode,Sn(),B(ge),B(ue),so(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(wi($e),$e=null))),fi(e,t),oe(t),null;case 5:lo(t);var l=Mt(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Yc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=Mt(Qe.current),Mr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ve]=t,r[or]=s,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<Bn.length;l++)U(Bn[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Mo(r,s),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},U("invalid",r);break;case"textarea":Ao(r,s),U("invalid",r)}Us(n,s),l=null;for(var i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$r(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$r(r.textContent,a,e),l=["children",""+a]):Zn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&U("scroll",r)}switch(n){case"input":Pr(r),Do(r,s,!0);break;case"textarea":Pr(r),Uo(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Su(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ve]=t,e[or]=r,Xc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Bs(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<Bn.length;l++)U(Bn[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":Mo(e,r),l=Is(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),U("invalid",e);break;case"textarea":Ao(e,r),l=Ds(e,r),U("invalid",e);break;default:l=r}Us(n,l),a=l;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?ju(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Nu(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&qn(e,u):typeof u=="number"&&qn(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zn.hasOwnProperty(s)?u!=null&&s==="onScroll"&&U("scroll",e):u!=null&&Ii(e,s,u,i))}switch(n){case"input":Pr(e),Do(e,r,!1);break;case"textarea":Pr(e),Uo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?fn(e,!!r.multiple,s,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Gc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Mt(ur.current),Mt(Qe.current),Mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(s=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:$r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$r(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return oe(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&we!==null&&t.mode&1&&!(t.flags&128))fc(),wn(),t.flags|=98560,s=!1;else if(s=Mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(S(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Ve]=t}else wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),s=!1}else $e!==null&&(wi($e),$e=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?q===0&&(q=3):yo())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return Sn(),fi(e,t),e===null&&sr(t.stateNode.containerInfo),oe(t),null;case 10:return eo(t.type._context),oe(t),null;case 17:return ye(t.type)&&ml(),oe(t),null;case 19:if(B(V),s=t.memoizedState,s===null)return oe(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)In(s,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=wl(e),i!==null){for(t.flags|=128,In(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(V,V.current&1|2),t.child}e=e.sibling}s.tail!==null&&Y()>Cn&&(t.flags|=128,r=!0,In(s,!1),t.lanes=4194304)}else{if(!r)if(e=wl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),In(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!W)return oe(t),null}else 2*Y()-s.renderingStartTime>Cn&&n!==1073741824&&(t.flags|=128,r=!0,In(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Y(),t.sibling=null,n=V.current,A(V,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return go(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function um(e,t){switch(Ji(t),t.tag){case 1:return ye(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(),B(ge),B(ue),so(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lo(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return Sn(),null;case 10:return eo(t.type._context),null;case 22:case 23:return go(),null;case 24:return null;default:return null}}var Ur=!1,ae=!1,cm=typeof WeakSet=="function"?WeakSet:Set,P=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function mi(e,t,n){try{n()}catch(r){K(e,t,r)}}var La=!1;function dm(e,t){if(Zs=cl,e=ec(),Yi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,c=0,v=0,m=e,h=null;t:for(;;){for(var y;m!==n||l!==0&&m.nodeType!==3||(a=i+l),m!==s||r!==0&&m.nodeType!==3||(u=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++c===l&&(a=i),h===s&&++v===r&&(u=i),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qs={focusedElem:e,selectionRange:n},cl=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,g=w.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Fe(t.type,x),g);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(_){K(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=La,La=!1,w}function Yn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&mi(t,n,s)}l=l.next}while(l!==r)}}function Ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jc(e){var t=e.alternate;t!==null&&(e.alternate=null,Jc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[or],delete t[ti],delete t[Xf],delete t[Yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zc(e){return e.tag===5||e.tag===3||e.tag===4}function Ra(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fl));else if(r!==4&&(e=e.child,e!==null))for(vi(e,t,n),e=e.sibling;e!==null;)vi(e,t,n),e=e.sibling}function gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gi(e,t,n),e=e.sibling;e!==null;)gi(e,t,n),e=e.sibling}var ne=null,Ie=!1;function rt(e,t,n){for(n=n.child;n!==null;)qc(e,t,n),n=n.sibling}function qc(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:ae||cn(n,t);case 6:var r=ne,l=Ie;ne=null,rt(e,t,n),ne=r,Ie=l,ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?vs(e.parentNode,n):e.nodeType===1&&vs(e,n),nr(e)):vs(ne,n.stateNode));break;case 4:r=ne,l=Ie,ne=n.stateNode.containerInfo,Ie=!0,rt(e,t,n),ne=r,Ie=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var s=l,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&mi(n,t,i),l=l.next}while(l!==r)}rt(e,t,n);break;case 1:if(!ae&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,rt(e,t,n),ae=r):rt(e,t,n);break;default:rt(e,t,n)}}function Ta(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cm),t.forEach(function(r){var l=_m.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var s=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ie=!1;break e;case 3:ne=a.stateNode.containerInfo,Ie=!0;break e;case 4:ne=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(ne===null)throw Error(S(160));qc(s,i,l),ne=null,Ie=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){K(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bc(t,e),t=t.sibling}function bc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Ue(e),r&4){try{Yn(3,e,e.return),Ul(3,e)}catch(x){K(e,e.return,x)}try{Yn(5,e,e.return)}catch(x){K(e,e.return,x)}}break;case 1:ze(t,e),Ue(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(ze(t,e),Ue(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var l=e.stateNode;try{qn(l,"")}catch(x){K(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wu(l,s),Bs(a,i);var c=Bs(a,s);for(i=0;i<u.length;i+=2){var v=u[i],m=u[i+1];v==="style"?ju(l,m):v==="dangerouslySetInnerHTML"?Nu(l,m):v==="children"?qn(l,m):Ii(l,v,m,c)}switch(a){case"input":$s(l,s);break;case"textarea":ku(l,s);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?fn(l,!!s.multiple,y,!1):h!==!!s.multiple&&(s.defaultValue!=null?fn(l,!!s.multiple,s.defaultValue,!0):fn(l,!!s.multiple,s.multiple?[]:"",!1))}l[or]=s}catch(x){K(e,e.return,x)}}break;case 6:if(ze(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(x){K(e,e.return,x)}}break;case 3:if(ze(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(x){K(e,e.return,x)}break;case 4:ze(t,e),Ue(e);break;case 13:ze(t,e),Ue(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(ho=Y())),r&4&&Ta(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||v,ze(t,e),ae=c):ze(t,e),Ue(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(P=e,v=e.child;v!==null;){for(m=P=v;P!==null;){switch(h=P,y=h.child,h.tag){case 0:case 11:case 14:case 15:Yn(4,h,h.return);break;case 1:cn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){K(r,n,x)}}break;case 5:cn(h,h.return);break;case 22:if(h.memoizedState!==null){za(m);continue}}y!==null?(y.return=h,P=y):za(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{l=m.stateNode,c?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,u=m.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Cu("display",i))}catch(x){K(e,e.return,x)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){K(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ze(t,e),Ue(e),r&4&&Ta(e);break;case 21:break;default:ze(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(qn(l,""),r.flags&=-33);var s=Ra(e);gi(e,s,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ra(e);vi(e,a,i);break;default:throw Error(S(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pm(e,t,n){P=e,ed(e)}function ed(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var l=P,s=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Ur;if(!i){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ae;a=Ur;var c=ae;if(Ur=i,(ae=u)&&!c)for(P=l;P!==null;)i=P,u=i.child,i.tag===22&&i.memoizedState!==null?Fa(l):u!==null?(u.return=i,P=u):Fa(l);for(;s!==null;)P=s,ed(s),s=s.sibling;P=l,Ur=a,ae=c}Oa(e)}else l.subtreeFlags&8772&&s!==null?(s.return=l,P=s):Oa(e)}}function Oa(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&va(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}va(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&nr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ae||t.flags&512&&hi(t)}catch(h){K(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function za(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Fa(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ul(4,t)}catch(u){K(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){K(t,l,u)}}var s=t.return;try{hi(t)}catch(u){K(t,s,u)}break;case 5:var i=t.return;try{hi(t)}catch(u){K(t,i,u)}}}catch(u){K(t,t.return,u)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var fm=Math.ceil,Nl=nt.ReactCurrentDispatcher,fo=nt.ReactCurrentOwner,Re=nt.ReactCurrentBatchConfig,M=0,te=null,G=null,re=0,_e=0,dn=Ct(0),q=0,fr=null,Vt=0,Bl=0,mo=0,Gn=null,he=null,ho=0,Cn=1/0,Xe=null,Cl=!1,yi=null,gt=null,Br=!1,ut=null,jl=0,Jn=0,xi=null,el=-1,tl=0;function pe(){return M&6?Y():el!==-1?el:el=Y()}function yt(e){return e.mode&1?M&2&&re!==0?re&-re:Jf.transition!==null?(tl===0&&(tl=Du()),tl):(e=D,e!==0||(e=window.event,e=e===void 0?16:Qu(e.type)),e):1}function De(e,t,n,r){if(50<Jn)throw Jn=0,xi=null,Error(S(185));gr(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Bl|=n),q===4&&ot(e,re)),xe(e,r),n===1&&M===0&&!(t.mode&1)&&(Cn=Y()+500,Ml&&jt()))}function xe(e,t){var n=e.callbackNode;Gp(e,t);var r=ul(e,e===te?re:0);if(r===0)n!==null&&Vo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vo(n),t===1)e.tag===0?Gf(Ia.bind(null,e)):cc(Ia.bind(null,e)),Qf(function(){!(M&6)&&jt()}),n=null;else{switch(Au(r)){case 1:n=Ui;break;case 4:n=$u;break;case 16:n=al;break;case 536870912:n=Mu;break;default:n=al}n=ad(n,td.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function td(e,t){if(el=-1,tl=0,M&6)throw Error(S(327));var n=e.callbackNode;if(yn()&&e.callbackNode!==n)return null;var r=ul(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var l=M;M|=2;var s=rd();(te!==e||re!==t)&&(Xe=null,Cn=Y()+500,Dt(e,t));do try{vm();break}catch(a){nd(e,a)}while(!0);bi(),Nl.current=s,M=l,G!==null?t=0:(te=null,re=0,t=q)}if(t!==0){if(t===2&&(l=Ks(e),l!==0&&(r=l,t=_i(e,l))),t===1)throw n=fr,Dt(e,0),ot(e,r),xe(e,Y()),n;if(t===6)ot(e,r);else{if(l=e.current.alternate,!(r&30)&&!mm(l)&&(t=El(e,r),t===2&&(s=Ks(e),s!==0&&(r=s,t=_i(e,s))),t===1))throw n=fr,Dt(e,0),ot(e,r),xe(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ft(e,he,Xe);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=ho+500-Y(),10<t)){if(ul(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ei(Ft.bind(null,e,he,Xe),t);break}Ft(e,he,Xe);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Me(r);s=1<<i,i=t[i],i>l&&(l=i),r&=~s}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fm(r/1960))-r,10<r){e.timeoutHandle=ei(Ft.bind(null,e,he,Xe),r);break}Ft(e,he,Xe);break;case 5:Ft(e,he,Xe);break;default:throw Error(S(329))}}}return xe(e,Y()),e.callbackNode===n?td.bind(null,e):null}function _i(e,t){var n=Gn;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=El(e,t),e!==2&&(t=he,he=n,t!==null&&wi(t)),e}function wi(e){he===null?he=e:he.push.apply(he,e)}function mm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],s=l.getSnapshot;l=l.value;try{if(!Ae(s(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~mo,t&=~Bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function Ia(e){if(M&6)throw Error(S(327));yn();var t=ul(e,0);if(!(t&1))return xe(e,Y()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=Ks(e);r!==0&&(t=r,n=_i(e,r))}if(n===1)throw n=fr,Dt(e,0),ot(e,t),xe(e,Y()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,he,Xe),xe(e,Y()),null}function vo(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Cn=Y()+500,Ml&&jt())}}function Ht(e){ut!==null&&ut.tag===0&&!(M&6)&&yn();var t=M;M|=1;var n=Re.transition,r=D;try{if(Re.transition=null,D=1,e)return e()}finally{D=r,Re.transition=n,M=t,!(M&6)&&jt()}}function go(){_e=dn.current,B(dn)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hf(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(Ji(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:Sn(),B(ge),B(ue),so();break;case 5:lo(r);break;case 4:Sn();break;case 13:B(V);break;case 19:B(V);break;case 10:eo(r.type._context);break;case 22:case 23:go()}n=n.return}if(te=e,G=e=xt(e.current,null),re=_e=t,q=0,fr=null,mo=Bl=Vt=0,he=Gn=null,$t!==null){for(t=0;t<$t.length;t++)if(n=$t[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=l,r.next=i}n.pending=r}$t=null}return e}function nd(e,t){do{var n=G;try{if(bi(),Zr.current=Sl,kl){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}kl=!1}if(Wt=0,ee=Z=H=null,Xn=!1,cr=0,fo.current=null,n===null||n.return===null){q=1,fr=t,G=null;break}e:{var s=e,i=n.return,a=n,u=t;if(t=re,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,v=a,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var y=ka(i);if(y!==null){y.flags&=-257,Sa(y,i,a,s,t),y.mode&1&&wa(s,c,t),t=y,u=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(u),t.updateQueue=x}else w.add(u);break e}else{if(!(t&1)){wa(s,c,t),yo();break e}u=Error(S(426))}}else if(W&&a.mode&1){var g=ka(i);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Sa(g,i,a,s,t),Zi(Nn(u,a));break e}}s=u=Nn(u,a),q!==4&&(q=2),Gn===null?Gn=[s]:Gn.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=Ac(s,u,t);ha(s,p);break e;case 1:a=u;var d=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(gt===null||!gt.has(f)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=Uc(s,a,t);ha(s,_);break e}}s=s.return}while(s!==null)}sd(n)}catch(N){t=N,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function rd(){var e=Nl.current;return Nl.current=Sl,e===null?Sl:e}function yo(){(q===0||q===3||q===2)&&(q=4),te===null||!(Vt&268435455)&&!(Bl&268435455)||ot(te,re)}function El(e,t){var n=M;M|=2;var r=rd();(te!==e||re!==t)&&(Xe=null,Dt(e,t));do try{hm();break}catch(l){nd(e,l)}while(!0);if(bi(),M=n,Nl.current=r,G!==null)throw Error(S(261));return te=null,re=0,q}function hm(){for(;G!==null;)ld(G)}function vm(){for(;G!==null&&!Up();)ld(G)}function ld(e){var t=od(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?sd(e):G=t,fo.current=null}function sd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=um(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,G=null;return}}else if(n=am(n,t,_e),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);q===0&&(q=5)}function Ft(e,t,n){var r=D,l=Re.transition;try{Re.transition=null,D=1,gm(e,t,n,r)}finally{Re.transition=l,D=r}return null}function gm(e,t,n,r){do yn();while(ut!==null);if(M&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Jp(e,s),e===te&&(G=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Br||(Br=!0,ad(al,function(){return yn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Re.transition,Re.transition=null;var i=D;D=1;var a=M;M|=4,fo.current=null,dm(e,n),bc(n,e),Mf(qs),cl=!!Zs,qs=Zs=null,e.current=n,pm(n),Bp(),M=a,D=i,Re.transition=s}else e.current=n;if(Br&&(Br=!1,ut=e,jl=l),s=e.pendingLanes,s===0&&(gt=null),Hp(n.stateNode),xe(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Cl)throw Cl=!1,e=yi,yi=null,e;return jl&1&&e.tag!==0&&yn(),s=e.pendingLanes,s&1?e===xi?Jn++:(Jn=0,xi=e):Jn=0,jt(),null}function yn(){if(ut!==null){var e=Au(jl),t=Re.transition,n=D;try{if(Re.transition=null,D=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,jl=0,M&6)throw Error(S(331));var l=M;for(M|=4,P=e.current;P!==null;){var s=P,i=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(P=c;P!==null;){var v=P;switch(v.tag){case 0:case 11:case 15:Yn(8,v,s)}var m=v.child;if(m!==null)m.return=v,P=m;else for(;P!==null;){v=P;var h=v.sibling,y=v.return;if(Jc(v),v===c){P=null;break}if(h!==null){h.return=y,P=h;break}P=y}}}var w=s.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}P=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,P=i;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yn(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var d=e.current;for(P=d;P!==null;){i=P;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,P=f;else e:for(i=d;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ul(9,a)}}catch(N){K(a,a.return,N)}if(a===i){P=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,P=_;break e}P=a.return}}if(M=l,jt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Ol,e)}catch{}r=!0}return r}finally{D=n,Re.transition=t}}return!1}function $a(e,t,n){t=Nn(n,t),t=Ac(e,t,1),e=vt(e,t,1),t=pe(),e!==null&&(gr(e,1,t),xe(e,t))}function K(e,t,n){if(e.tag===3)$a(e,e,n);else for(;t!==null;){if(t.tag===3){$a(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gt===null||!gt.has(r))){e=Nn(n,e),e=Uc(t,e,1),t=vt(t,e,1),e=pe(),t!==null&&(gr(t,1,e),xe(t,e));break}}t=t.return}}function ym(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(q===4||q===3&&(re&130023424)===re&&500>Y()-ho?Dt(e,0):mo|=n),xe(e,t)}function id(e,t){t===0&&(e.mode&1?(t=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):t=1);var n=pe();e=et(e,t),e!==null&&(gr(e,t,n),xe(e,n))}function xm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),id(e,n)}function _m(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),id(e,n)}var od;od=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,om(e,t,n);ve=!!(e.flags&131072)}else ve=!1,W&&t.flags&1048576&&dc(t,gl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;br(e,t),e=t.pendingProps;var l=_n(t,ue.current);gn(t,n),l=oo(null,t,r,e,l,n);var s=ao();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(s=!0,hl(t)):s=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,no(t),l.updater=Al,t.stateNode=l,l._reactInternals=t,oi(t,r,e,n),t=ci(null,t,r,!0,s,n)):(t.tag=0,W&&s&&Gi(t),de(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(br(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=km(r),e=Fe(r,e),l){case 0:t=ui(null,t,r,e,n);break e;case 1:t=ja(null,t,r,e,n);break e;case 11:t=Na(null,t,r,e,n);break e;case 14:t=Ca(null,t,r,Fe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),ui(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),ja(e,t,r,l,n);case 3:e:{if(Hc(t),e===null)throw Error(S(387));r=t.pendingProps,s=t.memoizedState,l=s.element,gc(e,t),_l(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){l=Nn(Error(S(423)),t),t=Ea(e,t,r,n,l);break e}else if(r!==l){l=Nn(Error(S(424)),t),t=Ea(e,t,r,n,l);break e}else for(we=ht(t.stateNode.containerInfo.firstChild),ke=t,W=!0,$e=null,n=hc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),r===l){t=tt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return yc(t),e===null&&li(t),r=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,i=l.children,bs(r,l)?i=null:s!==null&&bs(r,s)&&(t.flags|=32),Vc(e,t),de(e,t,i,n),t.child;case 6:return e===null&&li(t),null;case 13:return Qc(e,t,n);case 4:return ro(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Na(e,t,r,l,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,s=t.memoizedProps,i=l.value,A(yl,r._currentValue),r._currentValue=i,s!==null)if(Ae(s.value,i)){if(s.children===l.children&&!ge.current){t=tt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){i=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ze(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),si(s.return,n,t),a.lanes|=n;break}u=u.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(S(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),si(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}de(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,gn(t,n),l=Te(l),r=r(l),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,l=Fe(r,t.pendingProps),l=Fe(r.type,l),Ca(e,t,r,l,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),br(e,t),t.tag=1,ye(r)?(e=!0,hl(t)):e=!1,gn(t,n),Dc(t,r,l),oi(t,r,l,n),ci(null,t,r,!0,e,n);case 19:return Kc(e,t,n);case 22:return Wc(e,t,n)}throw Error(S(156,t.tag))};function ad(e,t){return Iu(e,t)}function wm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new wm(e,t,n,r)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function km(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mi)return 11;if(e===Di)return 14}return 2}function xt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nl(e,t,n,r,l,s){var i=2;if(r=e,typeof e=="function")xo(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case en:return At(n.children,l,s,t);case $i:i=8,l|=8;break;case Ts:return e=Le(12,n,t,l|2),e.elementType=Ts,e.lanes=s,e;case Os:return e=Le(13,n,t,l),e.elementType=Os,e.lanes=s,e;case zs:return e=Le(19,n,t,l),e.elementType=zs,e.lanes=s,e;case yu:return Wl(n,l,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vu:i=10;break e;case gu:i=9;break e;case Mi:i=11;break e;case Di:i=14;break e;case lt:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Le(i,n,t,l),t.elementType=e,t.type=r,t.lanes=s,t}function At(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Wl(e,t,n,r){return e=Le(22,e,r,t),e.elementType=yu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ns(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function Cs(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ss(0),this.expirationTimes=ss(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ss(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function _o(e,t,n,r,l,s,i,a,u){return e=new Sm(e,t,n,a,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Le(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},no(s),e}function Nm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ud(e){if(!e)return kt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ye(n))return uc(e,n,t)}return t}function cd(e,t,n,r,l,s,i,a,u){return e=_o(n,r,!0,e,l,s,i,a,u),e.context=ud(null),n=e.current,r=pe(),l=yt(n),s=Ze(r,l),s.callback=t??null,vt(n,s,l),e.current.lanes=l,gr(e,l,r),xe(e,r),e}function Vl(e,t,n,r){var l=t.current,s=pe(),i=yt(l);return n=ud(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(l,t,i),e!==null&&(De(e,l,i,s),Jr(e,l,i)),i}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ma(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wo(e,t){Ma(e,t),(e=e.alternate)&&Ma(e,t)}function Cm(){return null}var dd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ko(e){this._internalRoot=e}Hl.prototype.render=ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Vl(e,t,null,null)};Hl.prototype.unmount=ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Vl(null,e,null,null)}),t[be]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Hu(e)}};function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Da(){}function jm(e,t,n,r,l){if(l){if(typeof r=="function"){var s=r;r=function(){var c=Pl(i);s.call(c)}}var i=cd(t,r,e,0,null,!1,!1,"",Da);return e._reactRootContainer=i,e[be]=i.current,sr(e.nodeType===8?e.parentNode:e),Ht(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=Pl(u);a.call(c)}}var u=_o(e,0,!1,null,null,!1,!1,"",Da);return e._reactRootContainer=u,e[be]=u.current,sr(e.nodeType===8?e.parentNode:e),Ht(function(){Vl(t,u,n,r)}),u}function Kl(e,t,n,r,l){var s=n._reactRootContainer;if(s){var i=s;if(typeof l=="function"){var a=l;l=function(){var u=Pl(i);a.call(u)}}Vl(t,i,e,l)}else i=jm(n,t,e,l,r);return Pl(i)}Uu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Bi(t,n|1),xe(t,Y()),!(M&6)&&(Cn=Y()+500,jt()))}break;case 13:Ht(function(){var r=et(e,1);if(r!==null){var l=pe();De(r,e,1,l)}}),wo(e,1)}};Wi=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=pe();De(t,e,134217728,n)}wo(e,134217728)}};Bu=function(e){if(e.tag===13){var t=yt(e),n=et(e,t);if(n!==null){var r=pe();De(n,e,t,r)}wo(e,t)}};Wu=function(){return D};Vu=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Vs=function(e,t,n){switch(t){case"input":if($s(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=$l(r);if(!l)throw Error(S(90));_u(r),$s(r,l)}}}break;case"textarea":ku(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}};Lu=vo;Ru=Ht;var Em={usingClientEntryPoint:!1,Events:[xr,ln,$l,Eu,Pu,vo]},$n={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pm={bundleType:$n.bundleType,version:$n.version,rendererPackageName:$n.rendererPackageName,rendererConfig:$n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zu(e),e===null?null:e.stateNode},findFiberByHostInstance:$n.findFiberByHostInstance||Cm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Ol=Wr.inject(Pm),He=Wr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Em;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!So(t))throw Error(S(200));return Nm(e,t,null,n)};Ce.createRoot=function(e,t){if(!So(e))throw Error(S(299));var n=!1,r="",l=dd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=_o(e,1,!1,null,null,n,!1,r,l),e[be]=t.current,sr(e.nodeType===8?e.parentNode:e),new ko(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=zu(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Ht(e)};Ce.hydrate=function(e,t,n){if(!Ql(t))throw Error(S(200));return Kl(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!So(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,s="",i=dd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=cd(t,null,e,1,n??null,l,!1,s,i),e[be]=t.current,sr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Hl(t)};Ce.render=function(e,t,n){if(!Ql(t))throw Error(S(200));return Kl(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Ql(e))throw Error(S(40));return e._reactRootContainer?(Ht(function(){Kl(null,null,e,!1,function(){e._reactRootContainer=null,e[be]=null})}),!0):!1};Ce.unstable_batchedUpdates=vo;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ql(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Kl(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function pd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pd)}catch(e){console.error(e)}}pd(),pu.exports=Ce;var Lm=pu.exports,Aa=Lm;Ls.createRoot=Aa.createRoot,Ls.hydrateRoot=Aa.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mr(){return mr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mr.apply(null,arguments)}var ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ct||(ct={}));const Ua="popstate";function Rm(e){e===void 0&&(e={});function t(l,s){let{pathname:i="/",search:a="",hash:u=""}=Xt(l.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),ki("",{pathname:i,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(l,s){let i=l.document.querySelector("base"),a="";if(i&&i.getAttribute("href")){let u=l.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:Ll(s))}function r(l,s){Xl(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Om(t,n,r,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tm(){return Math.random().toString(36).substr(2,8)}function Ba(e,t){return{usr:e.state,key:e.key,idx:t}}function ki(e,t,n,r){return n===void 0&&(n=null),mr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Xt(t):t,{state:n,key:t&&t.key||r||Tm()})}function Ll(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Xt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Om(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:s=!1}=r,i=l.history,a=ct.Pop,u=null,c=v();c==null&&(c=0,i.replaceState(mr({},i.state,{idx:c}),""));function v(){return(i.state||{idx:null}).idx}function m(){a=ct.Pop;let g=v(),p=g==null?null:g-c;c=g,u&&u({action:a,location:x.location,delta:p})}function h(g,p){a=ct.Push;let d=ki(x.location,g,p);n&&n(d,g),c=v()+1;let f=Ba(d,c),_=x.createHref(d);try{i.pushState(f,"",_)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(_)}s&&u&&u({action:a,location:x.location,delta:1})}function y(g,p){a=ct.Replace;let d=ki(x.location,g,p);n&&n(d,g),c=v();let f=Ba(d,c),_=x.createHref(d);i.replaceState(f,"",_),s&&u&&u({action:a,location:x.location,delta:0})}function w(g){let p=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof g=="string"?g:Ll(g);return d=d.replace(/ $/,"%20"),J(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return a},get location(){return e(l,i)},listen(g){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Ua,m),u=g,()=>{l.removeEventListener(Ua,m),u=null}},createHref(g){return t(l,g)},createURL:w,encodeLocation(g){let p=w(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:y,go(g){return i.go(g)}};return x}var Wa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wa||(Wa={}));function zm(e,t,n){return n===void 0&&(n="/"),Fm(e,t,n)}function Fm(e,t,n,r){let l=typeof t=="string"?Xt(t):t,s=No(l.pathname||"/",n);if(s==null)return null;let i=fd(e);Im(i);let a=null,u=Xm(s);for(let c=0;a==null&&c<i.length;++c)a=Hm(i[c],u);return a}function fd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(s,i,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};u.relativePath.startsWith("/")&&(J(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=_t([r,u.relativePath]),v=n.concat(u);s.children&&s.children.length>0&&(J(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),fd(s.children,t,v,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:Wm(c,s.index),routesMeta:v})};return e.forEach((s,i)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))l(s,i);else for(let u of md(s.path))l(s,i,u)}),t}function md(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return l?[s,""]:[s];let i=md(r.join("/")),a=[];return a.push(...i.map(u=>u===""?s:[s,u].join("/"))),l&&a.push(...i),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Im(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Vm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $m=/^:[\w-]+$/,Mm=3,Dm=2,Am=1,Um=10,Bm=-2,Va=e=>e==="*";function Wm(e,t){let n=e.split("/"),r=n.length;return n.some(Va)&&(r+=Bm),t&&(r+=Dm),n.filter(l=>!Va(l)).reduce((l,s)=>l+($m.test(s)?Mm:s===""?Am:Um),r)}function Vm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Hm(e,t,n){let{routesMeta:r}=e,l={},s="/",i=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,v=s==="/"?t:t.slice(s.length)||"/",m=Qm({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},v),h=u.route;if(!m)return null;Object.assign(l,m.params),i.push({params:l,pathname:_t([s,m.pathname]),pathnameBase:qm(_t([s,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(s=_t([s,m.pathnameBase]))}return i}function Qm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Km(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let s=l[0],i=s.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,v,m)=>{let{paramName:h,isOptional:y}=v;if(h==="*"){let x=a[m]||"";i=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const w=a[m];return y&&!w?c[h]=void 0:c[h]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:i,pattern:e}}function Km(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Xm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function No(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Ym=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gm=e=>Ym.test(e);function Jm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Xt(e):e,s;if(n)if(Gm(n))s=n;else{if(n.includes("//")){let i=n;n=gd(n),Xl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+n))}n.startsWith("/")?s=Ha(n.substring(1),"/"):s=Ha(n,t)}else s=t;return{pathname:s,search:bm(r),hash:eh(l)}}function Ha(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function js(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hd(e,t){let n=Zm(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vd(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Xt(e):(l=mr({},e),J(!l.pathname||!l.pathname.includes("?"),js("?","pathname","search",l)),J(!l.pathname||!l.pathname.includes("#"),js("#","pathname","hash",l)),J(!l.search||!l.search.includes("#"),js("#","search","hash",l)));let s=e===""||l.pathname==="",i=s?"/":l.pathname,a;if(i==null)a=n;else{let m=t.length-1;if(!r&&i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),m-=1;l.pathname=h.join("/")}a=m>=0?t[m]:"/"}let u=Jm(l,a),c=i&&i!=="/"&&i.endsWith("/"),v=(s||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||v)&&(u.pathname+="/"),u}const gd=e=>e.replace(/\/\/+/g,"/"),_t=e=>gd(e.join("/")),qm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,eh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function th(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const yd=["post","put","patch","delete"];new Set(yd);const nh=["get",...yd];new Set(nh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hr(){return hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hr.apply(null,arguments)}const Co=k.createContext(null),rh=k.createContext(null),Yt=k.createContext(null),Yl=k.createContext(null),Et=k.createContext({outlet:null,matches:[],isDataRoute:!1}),xd=k.createContext(null);function lh(e,t){let{relative:n}=t===void 0?{}:t;wr()||J(!1);let{basename:r,navigator:l}=k.useContext(Yt),{hash:s,pathname:i,search:a}=wd(e,{relative:n}),u=i;return r!=="/"&&(u=i==="/"?r:_t([r,i])),l.createHref({pathname:u,search:a,hash:s})}function wr(){return k.useContext(Yl)!=null}function kr(){return wr()||J(!1),k.useContext(Yl).location}function _d(e){k.useContext(Yt).static||k.useLayoutEffect(e)}function jo(){let{isDataRoute:e}=k.useContext(Et);return e?yh():sh()}function sh(){wr()||J(!1);let e=k.useContext(Co),{basename:t,future:n,navigator:r}=k.useContext(Yt),{matches:l}=k.useContext(Et),{pathname:s}=kr(),i=JSON.stringify(hd(l,n.v7_relativeSplatPath)),a=k.useRef(!1);return _d(()=>{a.current=!0}),k.useCallback(function(c,v){if(v===void 0&&(v={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=vd(c,JSON.parse(i),s,v.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:_t([t,m.pathname])),(v.replace?r.replace:r.push)(m,v.state,v)},[t,r,i,s,e])}function ih(){let{matches:e}=k.useContext(Et),t=e[e.length-1];return t?t.params:{}}function wd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Yt),{matches:l}=k.useContext(Et),{pathname:s}=kr(),i=JSON.stringify(hd(l,r.v7_relativeSplatPath));return k.useMemo(()=>vd(e,JSON.parse(i),s,n==="path"),[e,i,s,n])}function oh(e,t){return ah(e,t)}function ah(e,t,n,r){wr()||J(!1);let{navigator:l}=k.useContext(Yt),{matches:s}=k.useContext(Et),i=s[s.length-1],a=i?i.params:{};i&&i.pathname;let u=i?i.pathnameBase:"/";i&&i.route;let c=kr(),v;if(t){var m;let g=typeof t=="string"?Xt(t):t;u==="/"||(m=g.pathname)!=null&&m.startsWith(u)||J(!1),v=g}else v=c;let h=v.pathname||"/",y=h;if(u!=="/"){let g=u.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(g.length).join("/")}let w=zm(e,{pathname:y}),x=fh(w&&w.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:_t([u,l.encodeLocation?l.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?u:_t([u,l.encodeLocation?l.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,r);return t&&x?k.createElement(Yl.Provider,{value:{location:hr({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:ct.Pop}},x):x}function uh(){let e=gh(),t=th(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:l},n):null,null)}const ch=k.createElement(uh,null);class dh extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Et.Provider,{value:this.props.routeContext},k.createElement(xd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ph(e){let{routeContext:t,match:n,children:r}=e,l=k.useContext(Co);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Et.Provider,{value:t},r)}function fh(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(l=n)==null?void 0:l.errors;if(a!=null){let v=i.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);v>=0||J(!1),i=i.slice(0,Math.min(i.length,v+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let v=0;v<i.length;v++){let m=i[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=v),m.route.id){let{loaderData:h,errors:y}=n,w=m.route.loader&&h[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||w){u=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((v,m,h)=>{let y,w=!1,x=null,g=null;n&&(y=a&&m.route.id?a[m.route.id]:void 0,x=m.route.errorElement||ch,u&&(c<0&&h===0?(xh("route-fallback"),w=!0,g=null):c===h&&(w=!0,g=m.route.hydrateFallbackElement||null)));let p=t.concat(i.slice(0,h+1)),d=()=>{let f;return y?f=x:w?f=g:m.route.Component?f=k.createElement(m.route.Component,null):m.route.element?f=m.route.element:f=v,k.createElement(ph,{match:m,routeContext:{outlet:v,matches:p,isDataRoute:n!=null},children:f})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?k.createElement(dh,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var kd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(kd||{}),Sd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sd||{});function mh(e){let t=k.useContext(Co);return t||J(!1),t}function hh(e){let t=k.useContext(rh);return t||J(!1),t}function vh(e){let t=k.useContext(Et);return t||J(!1),t}function Nd(e){let t=vh(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function gh(){var e;let t=k.useContext(xd),n=hh(),r=Nd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function yh(){let{router:e}=mh(kd.UseNavigateStable),t=Nd(Sd.UseNavigateStable),n=k.useRef(!1);return _d(()=>{n.current=!0}),k.useCallback(function(l,s){s===void 0&&(s={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,hr({fromRouteId:t},s)))},[e,t])}const Qa={};function xh(e,t,n){Qa[e]||(Qa[e]=!0)}function _h(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function rl(e){J(!1)}function wh(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ct.Pop,navigator:s,static:i=!1,future:a}=e;wr()&&J(!1);let u=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:s,static:i,future:hr({v7_relativeSplatPath:!1},a)}),[u,a,s,i]);typeof r=="string"&&(r=Xt(r));let{pathname:v="/",search:m="",hash:h="",state:y=null,key:w="default"}=r,x=k.useMemo(()=>{let g=No(v,u);return g==null?null:{location:{pathname:g,search:m,hash:h,state:y,key:w},navigationType:l}},[u,v,m,h,y,w,l]);return x==null?null:k.createElement(Yt.Provider,{value:c},k.createElement(Yl.Provider,{children:n,value:x}))}function kh(e){let{children:t,location:n}=e;return oh(Si(t),n)}new Promise(()=>{});function Si(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,l)=>{if(!k.isValidElement(r))return;let s=[...t,l];if(r.type===k.Fragment){n.push.apply(n,Si(r.props.children,s));return}r.type!==rl&&J(!1),!r.props.index||!r.props.children||J(!1);let i={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Si(r.props.children,s)),n.push(i)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ni(){return Ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ni.apply(null,arguments)}function Sh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Nh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ch(e,t){return e.button===0&&(!t||t==="_self")&&!Nh(e)}const jh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Eh="6";try{window.__reactRouterVersion=Eh}catch{}const Ph="startTransition",Ka=gp[Ph];function Lh(e){let{basename:t,children:n,future:r,window:l}=e,s=k.useRef();s.current==null&&(s.current=Rm({window:l,v5Compat:!0}));let i=s.current,[a,u]=k.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},v=k.useCallback(m=>{c&&Ka?Ka(()=>u(m)):u(m)},[u,c]);return k.useLayoutEffect(()=>i.listen(v),[i,v]),k.useEffect(()=>_h(r),[r]),k.createElement(wh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const Rh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Th=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dt=k.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:s,replace:i,state:a,target:u,to:c,preventScrollReset:v,viewTransition:m}=t,h=Sh(t,jh),{basename:y}=k.useContext(Yt),w,x=!1;if(typeof c=="string"&&Th.test(c)&&(w=c,Rh))try{let f=new URL(window.location.href),_=c.startsWith("//")?new URL(f.protocol+c):new URL(c),N=No(_.pathname,y);_.origin===f.origin&&N!=null?c=N+_.search+_.hash:x=!0}catch{}let g=lh(c,{relative:l}),p=Oh(c,{replace:i,state:a,target:u,preventScrollReset:v,relative:l,viewTransition:m});function d(f){r&&r(f),f.defaultPrevented||p(f)}return k.createElement("a",Ni({},h,{href:w||g,onClick:x||s?r:d,ref:n,target:u}))});var Xa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Xa||(Xa={}));var Ya;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ya||(Ya={}));function Oh(e,t){let{target:n,replace:r,state:l,preventScrollReset:s,relative:i,viewTransition:a}=t===void 0?{}:t,u=jo(),c=kr(),v=wd(e,{relative:i});return k.useCallback(m=>{if(Ch(m,n)){m.preventDefault();let h=r!==void 0?r:Ll(c)===Ll(v);u(e,{replace:h,state:l,preventScrollReset:s,relative:i,viewTransition:a})}},[c,u,v,r,l,n,e,s,i,a])}const zh="modulepreload",Fh=function(e){return"/python-web-try/"+e},Ga={},We=function(t,n,r){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));l=Promise.allSettled(n.map(u=>{if(u=Fh(u),u in Ga)return;Ga[u]=!0;const c=u.endsWith(".css"),v=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${v}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":zh,c||(m.as="script"),m.crossOrigin="",m.href=u,a&&m.setAttribute("nonce",a),document.head.appendChild(m),c)return new Promise((h,y)=>{m.addEventListener("load",h),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return l.then(i=>{for(const a of i||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var Ih=Object.defineProperty,$=(e,t)=>Ih(e,"name",{value:t,configurable:!0}),Cd=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function jd(e){return!isNaN(parseFloat(e))&&isFinite(e)}$(jd,"_isNumber");function St(e){return e.charAt(0).toUpperCase()+e.substring(1)}$(St,"_capitalize");function Gl(e){return function(){return this[e]}}$(Gl,"_getter");var Jt=["isConstructor","isEval","isNative","isToplevel"],Zt=["columnNumber","lineNumber"],qt=["fileName","functionName","source"],$h=["args"],Mh=["evalOrigin"],Vr=Jt.concat(Zt,qt,$h,Mh);function Se(e){if(e)for(var t=0;t<Vr.length;t++)e[Vr[t]]!==void 0&&this["set"+St(Vr[t])](e[Vr[t]])}$(Se,"StackFrame");Se.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof Se)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new Se(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",n=this.getColumnNumber()||"",r=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+n+")":"[eval]:"+t+":"+n:r?r+" ("+e+":"+t+":"+n+")":e+":"+t+":"+n}};Se.fromString=$(function(e){var t=e.indexOf("("),n=e.lastIndexOf(")"),r=e.substring(0,t),l=e.substring(t+1,n).split(","),s=e.substring(n+1);if(s.indexOf("@")===0)var i=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(s,""),a=i[1],u=i[2],c=i[3];return new Se({functionName:r,args:l||void 0,fileName:a,lineNumber:u||void 0,columnNumber:c||void 0})},"StackFrame$$fromString");for(Rt=0;Rt<Jt.length;Rt++)Se.prototype["get"+St(Jt[Rt])]=Gl(Jt[Rt]),Se.prototype["set"+St(Jt[Rt])]=function(e){return function(t){this[e]=!!t}}(Jt[Rt]);var Rt;for(Tt=0;Tt<Zt.length;Tt++)Se.prototype["get"+St(Zt[Tt])]=Gl(Zt[Tt]),Se.prototype["set"+St(Zt[Tt])]=function(e){return function(t){if(!jd(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(Zt[Tt]);var Tt;for(Ot=0;Ot<qt.length;Ot++)Se.prototype["get"+St(qt[Ot])]=Gl(qt[Ot]),Se.prototype["set"+St(qt[Ot])]=function(e){return function(t){this[e]=String(t)}}(qt[Ot]);var Ot,Es=Se;function Ed(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:$(function(n){if(n.stack&&n.stack.match(e))return this.parseV8OrIE(n);if(n.stack)return this.parseFFOrSafari(n);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:$(function(n){if(n.indexOf(":")===-1)return[n];var r=/(.+?)(?::(\d+))?(?::(\d+))?$/,l=r.exec(n.replace(/[()]/g,""));return[l[1],l[2]||void 0,l[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:$(function(n){var r=n.stack.split(`
`).filter(function(l){return!!l.match(e)},this);return r.map(function(l){l.indexOf("(eval ")>-1&&(l=l.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var s=l.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),i=s.match(/ (\(.+\)$)/);s=i?s.replace(i[0],""):s;var a=this.extractLocation(i?i[1]:s),u=i&&s||void 0,c=["eval","<anonymous>"].indexOf(a[0])>-1?void 0:a[0];return new Es({functionName:u,fileName:c,lineNumber:a[1],columnNumber:a[2],source:l})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:$(function(n){var r=n.stack.split(`
`).filter(function(l){return!l.match(t)},this);return r.map(function(l){if(l.indexOf(" > eval")>-1&&(l=l.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),l.indexOf("@")===-1&&l.indexOf(":")===-1)return new Es({functionName:l});var s=/((.*".+"[^@]*)?[^@]*)(?:@)/,i=l.match(s),a=i&&i[1]?i[1]:void 0,u=this.extractLocation(l.replace(s,""));return new Es({functionName:a,fileName:u[0],lineNumber:u[1],columnNumber:u[2],source:l})},this)},"ErrorStackParser$$parseFFOrSafari")}}$(Ed,"ErrorStackParser");var Dh=new Ed,Ah=Dh,Ke=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,Pd=Ke&&typeof Pi<"u"&&typeof Pi.exports<"u"&&typeof Cd<"u"&&typeof __dirname<"u",Uh=Ke&&!Pd,Bh=typeof Deno<"u",Ld=!Ke&&!Bh,Wh=Ld&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",Vh=Ld&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var Rd,Ci,Td,Ja,Eo;async function Po(){if(!Ke||(Rd=(await We(async()=>{const{default:s}=await import("./__vite-browser-external-BIHI7g3E.js");return{default:s}},[])).default,Ja=await We(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),Eo=await We(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),Td=(await We(async()=>{const{default:s}=await import("./__vite-browser-external-BIHI7g3E.js");return{default:s}},[])).default,Ci=await We(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),Lo=Ci.sep,typeof Cd<"u"))return;let e=Ja,t=await We(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),n=await We(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),r=await We(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),l={fs:e,crypto:t,ws:n,child_process:r};globalThis.require=function(s){return l[s]}}$(Po,"initNodeModules");function Od(e,t){return Ci.resolve(t||".",e)}$(Od,"node_resolvePath");function zd(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}$(zd,"browser_resolvePath");var ji;Ke?ji=Od:ji=zd;var Lo;Ke||(Lo="/");function Fd(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:Eo.readFile(e).then(n=>new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}}$(Fd,"node_getBinaryResponse");function Id(e,t){let n=new URL(e,location);return{response:fetch(n,t?{integrity:t}:{})}}$(Id,"browser_getBinaryResponse");var Rl;Ke?Rl=Fd:Rl=Id;async function $d(e,t){let{response:n,binary:r}=Rl(e,t);if(r)return r;let l=await n;if(!l.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await l.arrayBuffer())}$($d,"loadBinaryFile");var ll;if(Wh)ll=$(async e=>await import(e),"loadScript");else if(Vh)ll=$(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},"loadScript");else if(Ke)ll=Md;else throw new Error("Cannot determine runtime environment");async function Md(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?Td.runInThisContext(await(await fetch(e)).text()):await import(Rd.pathToFileURL(e).href)}$(Md,"nodeLoadScript");async function Dd(e){if(Ke){await Po();let t=await Eo.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}$(Dd,"loadLockFile");async function Ad(){if(Pd)return __dirname;let e;try{throw new Error}catch(r){e=r}let t=Ah.parse(e)[0].fileName;if(Ke&&!t.startsWith("file://")&&(t=`file://${t}`),Uh){let r=await We(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);return(await We(async()=>{const{fileURLToPath:l}=await import("./__vite-browser-external-BIHI7g3E.js");return{fileURLToPath:l}},[])).fileURLToPath(r.dirname(t))}let n=t.lastIndexOf(Lo);if(n===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,n)}$(Ad,"calculateDirname");function Ud(e){let t=e.FS,n=e.FS.filesystems.MEMFS,r=e.PATH,l={DIR_MODE:16895,FILE_MODE:33279,mount:function(s){if(!s.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return n.mount.apply(null,arguments)},syncfs:async(s,i,a)=>{try{let u=l.getLocalSet(s),c=await l.getRemoteSet(s),v=i?c:u,m=i?u:c;await l.reconcile(s,v,m),a(null)}catch(u){a(u)}},getLocalSet:s=>{let i=Object.create(null);function a(v){return v!=="."&&v!==".."}$(a,"isRealDir");function u(v){return m=>r.join2(v,m)}$(u,"toAbsolute");let c=t.readdir(s.mountpoint).filter(a).map(u(s.mountpoint));for(;c.length;){let v=c.pop(),m=t.stat(v);t.isDir(m.mode)&&c.push.apply(c,t.readdir(v).filter(a).map(u(v))),i[v]={timestamp:m.mtime,mode:m.mode}}return{type:"local",entries:i}},getRemoteSet:async s=>{let i=Object.create(null),a=await Hh(s.opts.fileSystemHandle);for(let[u,c]of a)u!=="."&&(i[r.join2(s.mountpoint,u)]={timestamp:c.kind==="file"?(await c.getFile()).lastModifiedDate:new Date,mode:c.kind==="file"?l.FILE_MODE:l.DIR_MODE});return{type:"remote",entries:i,handles:a}},loadLocalEntry:s=>{let i=t.lookupPath(s).node,a=t.stat(s);if(t.isDir(a.mode))return{timestamp:a.mtime,mode:a.mode};if(t.isFile(a.mode))return i.contents=n.getFileDataAsTypedArray(i),{timestamp:a.mtime,mode:a.mode,contents:i.contents};throw new Error("node type not supported")},storeLocalEntry:(s,i)=>{if(t.isDir(i.mode))t.mkdirTree(s,i.mode);else if(t.isFile(i.mode))t.writeFile(s,i.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(s,i.mode),t.utime(s,i.timestamp,i.timestamp)},removeLocalEntry:s=>{var i=t.stat(s);t.isDir(i.mode)?t.rmdir(s):t.isFile(i.mode)&&t.unlink(s)},loadRemoteEntry:async s=>{if(s.kind==="file"){let i=await s.getFile();return{contents:new Uint8Array(await i.arrayBuffer()),mode:l.FILE_MODE,timestamp:i.lastModifiedDate}}else{if(s.kind==="directory")return{mode:l.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+s.kind)}},storeRemoteEntry:async(s,i,a)=>{let u=s.get(r.dirname(i)),c=t.isFile(a.mode)?await u.getFileHandle(r.basename(i),{create:!0}):await u.getDirectoryHandle(r.basename(i),{create:!0});if(c.kind==="file"){let v=await c.createWritable();await v.write(a.contents),await v.close()}s.set(i,c)},removeRemoteEntry:async(s,i)=>{await s.get(r.dirname(i)).removeEntry(r.basename(i)),s.delete(i)},reconcile:async(s,i,a)=>{let u=0,c=[];Object.keys(i.entries).forEach(function(h){let y=i.entries[h],w=a.entries[h];(!w||t.isFile(y.mode)&&y.timestamp.getTime()>w.timestamp.getTime())&&(c.push(h),u++)}),c.sort();let v=[];if(Object.keys(a.entries).forEach(function(h){i.entries[h]||(v.push(h),u++)}),v.sort().reverse(),!u)return;let m=i.type==="remote"?i.handles:a.handles;for(let h of c){let y=r.normalize(h.replace(s.mountpoint,"/")).substring(1);if(a.type==="local"){let w=m.get(y),x=await l.loadRemoteEntry(w);l.storeLocalEntry(h,x)}else{let w=l.loadLocalEntry(h);await l.storeRemoteEntry(m,y,w)}}for(let h of v)if(a.type==="local")l.removeLocalEntry(h);else{let y=r.normalize(h.replace(s.mountpoint,"/")).substring(1);await l.removeRemoteEntry(m,y)}}};e.FS.filesystems.NATIVEFS_ASYNC=l}$(Ud,"initializeNativeFS");var Hh=$(async e=>{let t=[];async function n(l){for await(let s of l.values())t.push(s),s.kind==="directory"&&await n(s)}$(n,"collect"),await n(e);let r=new Map;r.set(".",e);for(let l of t){let s=(await e.resolve(l)).join("/");r.set(s,l)}return r},"getFsHandles");function Bd(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Kd(e),quit(n,r){throw t.exited={status:n,toThrow:r},r},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:n=>e.indexURL+n,instantiateWasm:Xd(e.indexURL)};return t}$(Bd,"createSettings");function Wd(e){return function(t){let n="/";try{t.FS.mkdirTree(e)}catch(r){console.error(`Error occurred while making a home directory '${e}':`),console.error(r),console.error(`Using '${n}' for a home directory instead`),e=n}t.FS.chdir(e)}}$(Wd,"createHomeDirectory");function Vd(e){return function(t){Object.assign(t.ENV,e)}}$(Vd,"setEnvironment");function Hd(e){return t=>{for(let n of e)t.FS.mkdirTree(n),t.FS.mount(t.FS.filesystems.NODEFS,{root:n},n)}}$(Hd,"mountLocalDirectories");function Qd(e){let t=$d(e);return n=>{let r=n._py_version_major(),l=n._py_version_minor();n.FS.mkdirTree("/lib"),n.FS.mkdirTree(`/lib/python${r}.${l}/site-packages`),n.addRunDependency("install-stdlib"),t.then(s=>{n.FS.writeFile(`/lib/python${r}${l}.zip`,s)}).catch(s=>{console.error("Error occurred while installing the standard library:"),console.error(s)}).finally(()=>{n.removeRunDependency("install-stdlib")})}}$(Qd,"installStdlib");function Kd(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[Qd(t),Wd(e.env.HOME),Vd(e.env),Hd(e._node_mounts),Ud]}$(Kd,"getFileSystemInitializationFuncs");function Xd(e){let{binary:t,response:n}=Rl(e+"pyodide.asm.wasm");return function(r,l){return async function(){try{let s;n?s=await WebAssembly.instantiateStreaming(n,r):s=await WebAssembly.instantiate(await t,r);let{instance:i,module:a}=s;typeof WasmOffsetConverter<"u"&&(wasmOffsetConverter=new WasmOffsetConverter(wasmBinary,a)),l(i,a)}catch(s){console.warn("wasm instantiation failed!"),console.warn(s)}}(),{}}}$(Xd,"getInstantiateWasmFunc");var Za="0.26.4";async function Yd(e={}){var t,n;await Po();let r=e.indexURL||await Ad();r=ji(r),r.endsWith("/")||(r+="/"),e.indexURL=r;let l={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:r+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:r,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0},s=Object.assign(l,e);(t=s.env).HOME??(t.HOME="/home/pyodide"),(n=s.env).PYTHONINSPECT??(n.PYTHONINSPECT="1");let i=Bd(s),a=i.API;if(a.lockFilePromise=Dd(s.lockFileURL),typeof _createPyodideModule!="function"){let h=`${s.indexURL}pyodide.asm.js`;await ll(h)}let u;if(e._loadSnapshot){let h=await e._loadSnapshot;ArrayBuffer.isView(h)?u=h:u=new Uint8Array(h),i.noInitialRun=!0,i.INITIAL_MEMORY=u.length}let c=await _createPyodideModule(i);if(i.exited)throw i.exited.toThrow;if(e.pyproxyToStringRepr&&a.setPyProxyToStringMethod(!0),a.version!==Za&&s.checkAPIVersion)throw new Error(`Pyodide version does not match: '${Za}' <==> '${a.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);c.locateFile=h=>{throw new Error("Didn't expect to load any more file_packager files!")};let v;u&&(v=a.restoreSnapshot(u));let m=a.finalizeBootstrap(v);return a.sys.path.insert(0,a.config.env.HOME),m.version.includes("dev")||a.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${m.version}/full/`),a._pyodide.set_excepthook(),await a.packageIndexReady,a.initializeStreams(s.stdin,s.stdout,s.stderr),m}$(Yd,"loadPyodide");const Gd=k.createContext(void 0),Qh={pyodide:null,isLoading:!1,error:null,runCode:async()=>({output:"",error:"Python 环境未初始化"}),runCodeWithTests:async()=>({output:"",error:"Python 环境未初始化",passed:!1,testResults:[]}),retryLoad:()=>{}};function Kh({children:e}){const[t,n]=k.useState(null),[r,l]=k.useState(!1),[s,i]=k.useState(null),a=k.useRef(!1),u=k.useCallback(async()=>{if(!a.current){a.current=!0,l(!0),i(null);try{await new Promise(y=>setTimeout(y,100));const h=await Yd({indexURL:"/python-web-try/pyodide/"});await h.runPythonAsync(`
import sys
import io
import traceback
`),n(h)}catch(h){console.warn("Pyodide load failed (non-fatal):",h),i(h instanceof Error?h.message:"加载Python运行环境失败"),a.current=!1}finally{l(!1)}}},[]);k.useEffect(()=>{const h=setTimeout(()=>{u().catch(()=>{})},500);return()=>clearTimeout(h)},[u]);const c=k.useCallback(()=>{a.current=!1,n(null),i(null),u().catch(()=>{})},[u]),v=k.useCallback(async h=>{if(!t)return{output:"",error:"Python 环境尚未就绪，请稍后再试"};try{t.runPython(`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
`),await t.runPythonAsync(h);const y=t.runPython("_output_buffer.getvalue()");return t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`),{output:y||"代码执行完成，无输出",error:null}}catch(y){let w="";try{const x=t.runPython("_output_buffer.getvalue()");x&&(w=x+`
`)}catch{}y.message?w+=y.message:typeof y=="string"?w+=y:w+="未知错误";try{t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)}catch{}return{output:"",error:w}}},[t]),m=k.useCallback(async(h,y)=>{if(!t)return{output:"",error:"Python 环境尚未就绪",passed:!1,testResults:[]};const w=[];let x=!0,g="";try{t.runPython(`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
`),await t.runPythonAsync(h),g=t.runPython("_output_buffer.getvalue()"),t.runPython(`
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer

_test_results = []
`),await t.runPythonAsync(y);const d=t.runPython(`
import json
json.dumps(_test_results)
`),f=JSON.parse(d);w.push(...f),x=f.every(N=>N.passed);const _=t.runPython("_output_buffer.getvalue()");return _&&(g+=`
--- 测试输出 ---
`+_),t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`),{output:g||"代码执行完成，无输出",error:null,passed:x,testResults:w}}catch(p){let d="";try{const f=t.runPython("_output_buffer.getvalue()");f&&(d=f+`
`)}catch{}p.message?d+=p.message:typeof p=="string"?d+=p:d+="未知错误";try{t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)}catch{}return{output:g,error:d,passed:!1,testResults:[]}}},[t]);return o.jsx(Gd.Provider,{value:{pyodide:t,isLoading:r,error:s,runCode:v,runCodeWithTests:m,retryLoad:c},children:e})}function Jd(){const e=k.useContext(Gd);return e===void 0?(console.warn("usePyodide called outside PyodideProvider, using default"),Qh):e}const Mn="python-quest-progress",qa="v2",ba={xp:50,totalXP:500,streak:7,levels:{1:{unlocked:!0,completed:!1,lessons:{},challenges:{}},2:{unlocked:!0,completed:!1,lessons:{},challenges:{}},3:{unlocked:!0,completed:!1,lessons:{},challenges:{}},4:{unlocked:!0,completed:!1,lessons:{},challenges:{}},5:{unlocked:!0,completed:!1,lessons:{},challenges:{}},6:{unlocked:!0,completed:!1,lessons:{},challenges:{}},7:{unlocked:!0,completed:!1,lessons:{},challenges:{}},8:{unlocked:!0,completed:!1,lessons:{},challenges:{}},9:{unlocked:!0,completed:!1,lessons:{},challenges:{}}}},Zd=k.createContext(void 0);function Xh({children:e}){const[t,n]=k.useState(()=>{try{const x=localStorage.getItem(Mn),g=localStorage.getItem(Mn+"-version");if(x&&g===qa)return JSON.parse(x);localStorage.setItem(Mn+"-version",qa)}catch{}return ba});k.useEffect(()=>{try{localStorage.setItem(Mn,JSON.stringify(t))}catch{}},[t]);const r=k.useCallback((x,g)=>{var p,d;return((d=(p=t.levels[x])==null?void 0:p.lessons[g])==null?void 0:d.completed)||!1},[t]),l=k.useCallback((x,g)=>{var p,d;return((d=(p=t.levels[x])==null?void 0:p.challenges[g])==null?void 0:d.completed)||!1},[t]),s=k.useCallback(x=>{var g;return((g=t.levels[x])==null?void 0:g.unlocked)||!1},[t]),i=k.useCallback(x=>{var g;return((g=t.levels[x])==null?void 0:g.completed)||!1},[t]),a=k.useCallback((x,g,p)=>{n(d=>{const f=d.levels[x]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},_=f.lessons[g]||{completed:!1};if(_.completed)return d;const N={...f.lessons,[g]:{..._,completed:!0,lastCode:p||_.lastCode,completedAt:new Date().toISOString()}};return{...d,levels:{...d.levels,[x]:{...f,lessons:N}}}})},[]),u=k.useCallback((x,g,p=10,d)=>{n(f=>{const _=f.levels[x]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},N=_.challenges[g]||{completed:!1,attempts:0},E=N.completed,C={..._.challenges,[g]:{...N,completed:!0,lastCode:d||N.lastCode,completedAt:new Date().toISOString(),attempts:N.attempts+1}},j=Object.values(C).every(ce=>ce.completed),T=Object.values(_.lessons).every(ce=>ce.completed),O=j&&T,R=x+1,se={...f.levels,[x]:{..._,challenges:C,completed:O}};return O&&f.levels[R]&&(se[R]={...f.levels[R],unlocked:!0}),{...f,xp:E?f.xp:f.xp+p,levels:se}})},[]),c=k.useCallback((x,g)=>{var p,d;return(d=(p=t.levels[x])==null?void 0:p.lessons[g])==null?void 0:d.lastCode},[t]),v=k.useCallback((x,g)=>{var p,d;return(d=(p=t.levels[x])==null?void 0:p.challenges[g])==null?void 0:d.lastCode},[t]),m=k.useCallback((x,g,p)=>{n(d=>{const f=d.levels[x]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},_=f.lessons[g]||{completed:!1};return{...d,levels:{...d.levels,[x]:{...f,lessons:{...f.lessons,[g]:{..._,lastCode:p}}}}}})},[]),h=k.useCallback((x,g,p)=>{n(d=>{const f=d.levels[x]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},_=f.challenges[g]||{completed:!1,attempts:0};return{...d,levels:{...d.levels,[x]:{...f,challenges:{...f.challenges,[g]:{..._,lastCode:p}}}}}})},[]),y=k.useCallback(x=>{const g=t.levels[x];if(!g)return{completed:0,total:0,percent:0};const p=Object.values(g.lessons),d=Object.values(g.challenges),f=p.filter(N=>N.completed).length+d.filter(N=>N.completed).length,_=p.length+d.length;return{completed:f,total:_,percent:_>0?Math.round(f/_*100):0}},[t]),w=k.useCallback(()=>{n(ba);try{localStorage.removeItem(Mn)}catch{}},[]);return o.jsx(Zd.Provider,{value:{progress:t,isLessonCompleted:r,isChallengeCompleted:l,isLevelUnlocked:s,isLevelCompleted:i,completeLesson:a,completeChallenge:u,getLessonCode:c,getChallengeCode:v,saveLessonCode:m,saveChallengeCode:h,getLevelProgress:y,resetProgress:w},children:e})}function Ro(){const e=k.useContext(Zd);if(e===void 0)throw new Error("useProgress must be used within a ProgressProvider");return e}function Yh({showUserInfo:e}){const t=kr(),{progress:n}=Ro(),r=t.pathname==="/",l=e!==void 0?e:!r;return o.jsx("nav",{className:`navbar ${r?"navbar-home":"navbar-inner"}`,children:o.jsxs("div",{className:"navbar-container container",children:[o.jsxs(dt,{to:"/",className:"navbar-logo",children:[o.jsx("div",{className:"logo-icon",children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),o.jsx("span",{className:"logo-text",children:"Python Quest"})]}),o.jsxs("div",{className:"navbar-links",children:[o.jsx(dt,{to:"/",className:`nav-link ${t.pathname==="/"?"active":""}`,children:"首页"}),o.jsx(dt,{to:"/map",className:`nav-link ${t.pathname==="/map"?"active":""}`,children:"冒险地图"}),o.jsx("a",{href:"#",className:"nav-link",children:"学习路径"}),o.jsx("a",{href:"#",className:"nav-link",children:"排行榜"})]}),o.jsxs("div",{className:"navbar-actions",children:[l&&o.jsxs("div",{className:"user-info",children:[o.jsxs("div",{className:"xp-badge",children:[o.jsx("span",{className:"xp-icon",children:"⭐"}),o.jsxs("span",{className:"xp-text",children:[n.xp," / ",n.totalXP," XP"]})]}),o.jsxs("div",{className:"streak-badge",children:[o.jsx("span",{className:"streak-icon",children:"🔥"}),o.jsxs("span",{className:"streak-text",children:[n.streak,"天"]})]}),o.jsx("div",{className:"avatar",children:o.jsx("span",{children:"LY"})})]}),o.jsx(dt,{to:"/map",className:"btn btn-primary btn-sm",children:"开始学习"})]})]})})}function Gh(){return o.jsxs("footer",{className:"footer",children:[o.jsxs("div",{className:"container footer-container",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsxs(dt,{to:"/",className:"footer-logo",children:[o.jsx("div",{className:"logo-icon",children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),o.jsx("span",{className:"logo-text",children:"Python Quest"})]}),o.jsx("p",{className:"footer-tagline",children:"通过游戏化学习，从零到英雄掌握Python编程"})]}),o.jsxs("div",{className:"footer-links",children:[o.jsxs("div",{className:"footer-column",children:[o.jsx("h4",{children:"关于我们"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("a",{href:"#",children:"课程介绍"})}),o.jsx("li",{children:o.jsx("a",{href:"#",children:"团队成员"})}),o.jsx("li",{children:o.jsx("a",{href:"#",children:"联系我们"})})]})]}),o.jsxs("div",{className:"footer-column",children:[o.jsx("h4",{children:"学习资源"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("a",{href:"#",children:"学习路径"})}),o.jsx("li",{children:o.jsx("a",{href:"#",children:"文档中心"})}),o.jsx("li",{children:o.jsx("a",{href:"#",children:"常见问题"})})]})]}),o.jsxs("div",{className:"footer-column",children:[o.jsx("h4",{children:"社区"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx("a",{href:"#",children:"排行榜"})}),o.jsx("li",{children:o.jsx("a",{href:"#",children:"讨论区"})}),o.jsx("li",{children:o.jsx("a",{href:"#",children:"合作伙伴"})})]})]})]})]}),o.jsx("div",{className:"footer-bottom",children:o.jsx("div",{className:"container",children:o.jsx("p",{children:"© 2024 Python Quest. All rights reserved."})})})]})}function Jh(){const e=[{value:"10",label:"大关卡"},{value:"52",label:"编程挑战"},{value:"156+",label:"学习者"},{value:"98%",label:"好评率"}];return o.jsxs("div",{className:"home-page",children:[o.jsxs("section",{className:"hero-section",children:[o.jsxs("div",{className:"hero-bg-decorations",children:[o.jsx("div",{className:"floating-element elem-1"}),o.jsx("div",{className:"floating-element elem-2"}),o.jsx("div",{className:"floating-element elem-3"}),o.jsx("div",{className:"code-symbol code-1",children:"</>"}),o.jsx("div",{className:"code-symbol code-2",children:"{ }"}),o.jsx("div",{className:"code-symbol code-3",children:"🐍"})]}),o.jsxs("div",{className:"container hero-content",children:[o.jsx("div",{className:"hero-badge animate-fade-in",children:o.jsx("span",{children:"🎮 游戏化学习"})}),o.jsx("h1",{className:"hero-title animate-fade-in delay-100",children:o.jsx("span",{className:"title-gradient",children:"Python Quest"})}),o.jsx("p",{className:"hero-subtitle animate-fade-in delay-200",children:"通过 9 大关卡、50+ 编程挑战，从零到英雄独立完成项目"}),o.jsxs("div",{className:"hero-actions animate-fade-in delay-300",children:[o.jsx(dt,{to:"/map",className:"btn btn-primary btn-lg",children:"开始冒险"}),o.jsxs("button",{className:"btn btn-secondary btn-lg",children:[o.jsx("span",{className:"btn-icon",children:"▶"}),"免费试学"]})]}),o.jsx("div",{className:"hero-stats animate-fade-in delay-400",children:e.map((t,n)=>o.jsxs("div",{className:"stat-item",children:[o.jsx("div",{className:"stat-value",children:t.value}),o.jsx("div",{className:"stat-label",children:t.label})]},n))})]})]}),o.jsx("section",{className:"features-section",children:o.jsxs("div",{className:"container",children:[o.jsx("h2",{className:"section-title",children:"为什么选择 Python Quest？"}),o.jsx("p",{className:"section-subtitle",children:"游戏化学习，让编程变得有趣又高效"}),o.jsxs("div",{className:"features-grid",children:[o.jsxs("div",{className:"feature-card",children:[o.jsx("div",{className:"feature-icon",children:"🎯"}),o.jsx("h3",{children:"闯关式学习"}),o.jsx("p",{children:"9大精心设计的关卡，从基础到进阶，每一步都有明确的目标和成就感。"})]}),o.jsxs("div",{className:"feature-card",children:[o.jsx("div",{className:"feature-icon",children:"💻"}),o.jsx("h3",{children:"实战挑战"}),o.jsx("p",{children:"50+编程挑战，边学边练，在实践中真正掌握Python编程技能。"})]}),o.jsxs("div",{className:"feature-card",children:[o.jsx("div",{className:"feature-icon",children:"🏆"}),o.jsx("h3",{children:"成就系统"}),o.jsx("p",{children:"XP经验值、徽章、排行榜，在竞争中激发学习动力，不断进步。"})]}),o.jsxs("div",{className:"feature-card",children:[o.jsx("div",{className:"feature-icon",children:"📊"}),o.jsx("h3",{children:"进度追踪"}),o.jsx("p",{children:"可视化学习地图，清晰展示学习进度，让成长之路一目了然。"})]})]})]})}),o.jsx("section",{className:"cta-section",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"cta-card",children:[o.jsx("h2",{children:"准备好开始你的编程冒险了吗？"}),o.jsx("p",{children:"加入 Python Quest，从零开始，成为Python编程高手"}),o.jsx(dt,{to:"/map",className:"btn btn-primary btn-lg",children:"立即开始 →"})]})})})]})}const pn=[{id:1,title:"第1关：初见 Python",subtitle:"认识 Python 的世界",description:"了解Python的历史、特点和应用场景，安装开发环境，写出你的第一行代码。",status:"completed",difficulty:1,duration:"约1小时",lessons:5,challenges:3,topics:["Python简介","环境搭建","第一个程序","打印输出"],side:"left"},{id:2,title:"第2关：变量与数据类型",subtitle:"掌握数据的存储与运算",description:"学习变量、基本数据类型、运算符和类型转换，打下编程基础。",status:"completed",difficulty:1,duration:"约1.5小时",lessons:6,challenges:4,topics:["变量","数字类型","字符串","运算符","类型转换"],side:"right"},{id:3,title:"第3关：条件判断",subtitle:"让程序学会思考",description:"学习if-else条件语句、逻辑运算符和比较运算，让程序做出决策。",status:"completed",difficulty:2,duration:"约1.5小时",lessons:5,challenges:5,topics:["if语句","else和elif","比较运算","逻辑运算","嵌套条件"],side:"left"},{id:4,title:"第4关：循环结构",subtitle:"重复的力量",description:"掌握for循环、while循环、循环控制语句，以及循环的嵌套使用。",status:"current",difficulty:2,duration:"约2小时",lessons:7,challenges:6,topics:["for循环","range()函数","while循环","break与continue","循环嵌套"],side:"right"},{id:5,title:"第5关：列表与元组",subtitle:"数据的集合",description:"学习列表和元组的使用，掌握索引、切片、常用方法和列表推导式。",status:"locked",difficulty:2,duration:"约2小时",lessons:6,challenges:5,topics:["列表基础","列表操作","元组","切片","列表推导式"],side:"left"},{id:6,title:"第6关：字典与集合",subtitle:"键值的魔法",description:"深入学习字典和集合的使用，理解哈希表原理和应用场景。",status:"locked",difficulty:3,duration:"约2小时",lessons:6,challenges:5,topics:["字典基础","字典操作","集合","字典推导式","常用场景"],side:"right"},{id:7,title:"第7关：函数",subtitle:"代码的封装与复用",description:"学习函数的定义、参数、返回值、作用域，以及递归和高阶函数。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:8,challenges:7,topics:["函数定义","参数类型","返回值","作用域","递归","Lambda函数"],side:"left"},{id:8,title:"第8关：文件操作",subtitle:"与文件系统交互",description:"学习文件的读写、目录操作、异常处理，掌握数据持久化。",status:"locked",difficulty:3,duration:"约2小时",lessons:6,challenges:5,topics:["文件读写","上下文管理器","目录操作","异常处理","JSON处理"],side:"right"},{id:9,title:"第9关：项目实战",subtitle:"综合项目挑战",description:"运用所学知识，完成一个完整的Python项目，检验你的学习成果。",status:"locked",difficulty:4,duration:"约3小时",lessons:4,challenges:3,topics:["项目规划","模块化设计","测试调试","项目部署"],side:"left"}],Ps=[{id:1,title:"for 循环基础",duration:"12分钟",completed:!0,type:"video"},{id:2,title:"range() 函数详解",duration:"15分钟",completed:!0,type:"video"},{id:3,title:"遍历列表与字典",duration:"18分钟",completed:!0,type:"video"},{id:4,title:"while 循环",duration:"14分钟",completed:!0,type:"video"},{id:5,title:"break 与 continue",duration:"16分钟",completed:!1,type:"video"},{id:6,title:"循环嵌套",duration:"20分钟",completed:!1,type:"video"},{id:7,title:"实战：打印九九乘法表",duration:"25分钟",completed:!1,type:"interactive"}],Zh=[{id:1,title:"计算1到100的和",difficulty:"easy",completed:!0},{id:2,title:"打印三角形图案",difficulty:"easy",completed:!0},{id:3,title:"找出100以内的素数",difficulty:"medium",completed:!1},{id:4,title:"冒泡排序实现",difficulty:"medium",completed:!1},{id:5,title:"猜数字游戏",difficulty:"medium",completed:!1},{id:6,title:"斐波那契数列",difficulty:"hard",completed:!1}],qh={4:[{id:1,title:"什么是循环？",type:"explanation",content:`**循环**是编程中最强大的概念之一。它允许我们**重复执行一段代码**，而不需要复制粘贴。

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

祝你在 Python 的道路上越走越远！🚀`}]},qd={4:[{id:1,title:"计算 1 到 100 的和",description:`编写一个程序，使用 for 循环计算 1 到 100 所有整数的和，并打印结果。

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
`,testCases:[{name:"加法",input:"10,+,5",expected:"15"},{name:"幂运算",input:"2,**,10",expected:"1024"}],xpReward:40}]};function bh(){const e=jo(),[t,n]=k.useState(pn[3]),{progress:r,isLevelUnlocked:l,isLevelCompleted:s,isChallengeCompleted:i}=Ro(),a=k.useMemo(()=>pn.map(g=>{const p=l(g.id),d=s(g.id);let f="locked";return d?f="completed":p&&(f="current"),{...g,status:f}}),[l,s]),u=a.filter(g=>g.status==="completed").length,c=Math.round(u/pn.length*100),v=g=>Array(5).fill(0).map((p,d)=>o.jsx("span",{className:`star ${d<g?"filled":""}`,children:"★"},d)),m=a.find(g=>g.status==="current")||a.find(g=>g.status!=="locked")||a[0],h=m.id,y=qd[h]||[],w=Ps.filter(g=>g.completed).length,x=g=>{g.status!=="locked"&&(n(g),e(`/level/${g.id}`))};return o.jsxs("div",{className:"level-map-page",children:[o.jsxs("div",{className:"map-decoration",children:[o.jsx("div",{className:"deco-circle deco-1"}),o.jsx("div",{className:"deco-circle deco-2"}),o.jsx("div",{className:"deco-code",children:"</>"}),o.jsx("div",{className:"deco-code deco-code-2",children:"{ }"})]}),o.jsxs("div",{className:"container map-container",children:[o.jsxs("div",{className:"map-header",children:[o.jsxs("div",{className:"path-info",children:[o.jsxs("div",{className:"path-badge",children:[o.jsx("span",{className:"path-icon",children:"🐍"}),o.jsx("span",{children:"Python 进阶"})]}),o.jsx("h1",{className:"map-title",children:"冒险地图"}),o.jsxs("p",{className:"map-subtitle",children:["完成 ",u," 个关卡，共 ",pn.length," 关 · 解锁你的 Python 技能"]})]}),o.jsxs("div",{className:"progress-bar-section",children:[o.jsxs("div",{className:"progress-info",children:[o.jsx("span",{className:"progress-label",children:"学习进度"}),o.jsxs("span",{className:"progress-percent",children:[c,"%"]})]}),o.jsx("div",{className:"progress-bar",children:o.jsx("div",{className:"progress-fill",style:{width:`${c}%`}})})]})]}),o.jsx("div",{className:"level-map-wrapper",children:o.jsxs("div",{className:"level-map",children:[o.jsx("div",{className:"map-line"}),a.map((g,p)=>{var d;return o.jsxs("div",{className:`map-node node-${g.side} status-${g.status}`,style:{animationDelay:`${p*.1}s`},onClick:()=>x(g),children:[o.jsxs("div",{className:"node-dot",children:[g.status==="completed"&&o.jsx("span",{className:"dot-check",children:"✓"}),g.status==="current"&&o.jsx("div",{className:"dot-pulse"}),g.status==="locked"&&o.jsx("span",{className:"dot-lock",children:"🔒"})]}),o.jsx("div",{className:`node-card ${t.id===g.id?"selected":""}`,children:g.status!=="locked"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"card-header",children:[o.jsx("span",{className:"level-number",children:g.title}),o.jsx("div",{className:"level-stars",children:v(g.difficulty)})]}),o.jsx("h3",{className:"card-title",children:g.subtitle}),o.jsx("p",{className:"card-desc",children:g.description}),o.jsxs("div",{className:"card-meta",children:[o.jsxs("span",{className:"meta-item",children:[o.jsx("span",{className:"meta-icon",children:"📚"}),g.lessons," 节课"]}),o.jsxs("span",{className:"meta-item",children:[o.jsx("span",{className:"meta-icon",children:"⚡"}),g.challenges," 个挑战"]}),o.jsxs("span",{className:"meta-item",children:[o.jsx("span",{className:"meta-icon",children:"⏱"}),g.duration]})]}),o.jsx("div",{className:"card-topics",children:g.topics.map((f,_)=>o.jsx("span",{className:"topic-tag",children:f},_))}),g.status==="current"&&o.jsxs("div",{className:"current-badge",children:[o.jsx("span",{className:"pulse-dot"}),"进行中"]}),g.status==="completed"&&o.jsx("div",{className:"completed-badge-card",children:"✓ 已完成"})]}):o.jsxs("div",{className:"locked-content",children:[o.jsx("div",{className:"lock-icon",children:"🔒"}),o.jsx("h3",{className:"lock-title",children:"未解锁"}),o.jsx("p",{className:"lock-desc",children:"完成前一关后解锁此关卡"}),o.jsxs("div",{className:"lock-hint",children:["需要完成：",(d=a[p-1])==null?void 0:d.title]})]})})]},g.id)})]})}),m&&o.jsxs("div",{className:"current-level-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsxs("div",{children:[o.jsx("h2",{children:m.title}),o.jsxs("p",{className:"detail-subtitle",children:["掌握 ",m.subtitle,"，学会使用循环的核心结构"]})]}),o.jsx(dt,{to:`/level/${m.id}`,className:"btn btn-primary",children:"进入学习 →"})]}),o.jsxs("div",{className:"lessons-list",children:[o.jsx("h3",{className:"list-title",children:"📖 课程列表"}),Ps.map((g,p)=>o.jsxs("div",{className:`lesson-item ${g.completed?"completed":""}`,children:[o.jsx("div",{className:"lesson-index",children:String(p+1).padStart(2,"0")}),o.jsxs("div",{className:"lesson-icon",children:[g.type==="video"&&"🎬",g.type==="reading"&&"📖",g.type==="interactive"&&"💻"]}),o.jsxs("div",{className:"lesson-info",children:[o.jsx("h4",{className:"lesson-title",children:g.title}),o.jsx("span",{className:"lesson-duration",children:g.duration})]}),o.jsx("div",{className:"lesson-status",children:g.completed?o.jsx("span",{className:"status-completed",children:"✓ 已完成"}):o.jsx("span",{className:"status-current",children:"继续学习"})})]},g.id))]}),o.jsxs("div",{className:"challenges-section",children:[o.jsx("h3",{className:"list-title",children:"⚡ 编程挑战"}),o.jsx("div",{className:"challenges-grid",children:y.length>0?y.map(g=>{const p=i(h,g.id);return o.jsxs("div",{className:`challenge-card ${p?"completed":""}`,children:[o.jsxs("div",{className:"challenge-header",children:[o.jsxs("span",{className:`challenge-difficulty difficulty-${g.difficulty}`,children:[g.difficulty==="easy"&&"简单",g.difficulty==="medium"&&"中等",g.difficulty==="hard"&&"困难"]}),p&&o.jsx("span",{className:"challenge-check",children:"✓"})]}),o.jsx("h4",{className:"challenge-title",children:g.title})]},g.id)}):Zh.map(g=>o.jsxs("div",{className:`challenge-card ${g.completed?"completed":""}`,children:[o.jsxs("div",{className:"challenge-header",children:[o.jsxs("span",{className:`challenge-difficulty difficulty-${g.difficulty}`,children:[g.difficulty==="easy"&&"简单",g.difficulty==="medium"&&"中等",g.difficulty==="hard"&&"困难"]}),g.completed&&o.jsx("span",{className:"challenge-check",children:"✓"})]}),o.jsx("h4",{className:"challenge-title",children:g.title})]},g.id))})]}),o.jsxs("div",{className:"stats-row",children:[o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",children:"📚"}),o.jsxs("div",{className:"stat-content",children:[o.jsxs("span",{className:"stat-big",children:[w,"/",Ps.length]}),o.jsx("span",{className:"stat-small",children:"已完成课时"})]})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",children:"⭐"}),o.jsxs("div",{className:"stat-content",children:[o.jsxs("span",{className:"stat-big",children:[r.xp,"/",r.totalXP]}),o.jsx("span",{className:"stat-small",children:"经验值 XP"})]})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",children:"⏱"}),o.jsxs("div",{className:"stat-content",children:[o.jsxs("span",{className:"stat-big",children:[">","30 分钟"]}),o.jsx("span",{className:"stat-small",children:"预计学习时间"})]})]})]})]})]})]})}function Ei({initialCode:e="",onRun:t,readOnly:n=!1,height:r="300px",showOutput:l=!0,testCode:s,onTestResult:i,placeholder:a="# 在这里编写你的 Python 代码"}){const[u,c]=k.useState(e),[v,m]=k.useState(""),[h,y]=k.useState(null),[w,x]=k.useState(!1),[g,p]=k.useState([]),d=k.useRef(null),{isLoading:f,runCode:_,runCodeWithTests:N}=Jd();k.useEffect(()=>{c(e)},[e]);const E=async()=>{if(!(f||w)){x(!0),m(""),y(null),p([]);try{if(s){const R=await N(u,s);m(R.output),y(R.error),p(R.testResults),i==null||i(R.passed,R.testResults),t==null||t(R.output,R.error)}else{const R=await _(u);m(R.output),y(R.error),t==null||t(R.output,R.error)}}catch(R){y(R instanceof Error?R.message:"执行出错")}finally{x(!1)}}},C=R=>{if(R.key==="Tab"){R.preventDefault();const se=R.target,ce=se.selectionStart,Sr=se.selectionEnd,Jl=u.substring(0,ce)+"    "+u.substring(Sr);c(Jl),setTimeout(()=>{se.selectionStart=se.selectionEnd=ce+4},0)}(R.ctrlKey||R.metaKey)&&R.key==="Enter"&&(R.preventDefault(),E())},j=()=>{navigator.clipboard.writeText(u)},T=()=>{c(e),m(""),y(null),p([])},O=()=>{const R=u.split(`
`).length;return Array(R).fill(0).map((se,ce)=>o.jsx("div",{className:"line-number",children:ce+1},ce))};return o.jsxs("div",{className:"code-editor-container",children:[o.jsxs("div",{className:"editor-header",children:[o.jsx("div",{className:"editor-tabs",children:o.jsx("span",{className:"tab active",children:"main.py"})}),o.jsxs("div",{className:"editor-actions",children:[o.jsx("button",{className:"action-btn",onClick:j,title:"复制代码",children:"📋"}),o.jsx("button",{className:"action-btn",onClick:T,title:"重置代码",children:"🔄"}),o.jsx("button",{className:`run-btn ${w?"running":""}`,onClick:E,disabled:f||w||n,children:f?o.jsx(o.Fragment,{children:"⏳ 加载中..."}):w?o.jsx(o.Fragment,{children:"⏳ 运行中..."}):o.jsx(o.Fragment,{children:"▶ 运行代码"})})]})]}),o.jsxs("div",{className:"editor-body",style:{height:r},children:[o.jsx("div",{className:"line-numbers",children:O()}),o.jsx("textarea",{ref:d,className:"code-textarea",value:u,onChange:R=>c(R.target.value),onKeyDown:C,readOnly:n,placeholder:a,spellCheck:!1})]}),l&&o.jsxs("div",{className:"output-section",children:[o.jsxs("div",{className:"output-header",children:[o.jsx("span",{className:"output-title",children:"📤 输出结果"}),g.length>0&&o.jsxs("span",{className:`test-summary ${g.every(R=>R.passed)?"all-passed":"has-failed"}`,children:[g.filter(R=>R.passed).length,"/",g.length," 测试通过"]})]}),o.jsx("div",{className:`output-content ${h?"has-error":""}`,children:h?o.jsx("pre",{className:"error-text",children:h}):v?o.jsx("pre",{children:v}):o.jsx("span",{className:"output-placeholder",children:'点击"运行代码"查看输出结果'})}),g.length>0&&o.jsx("div",{className:"test-results",children:g.map((R,se)=>o.jsxs("div",{className:`test-item ${R.passed?"passed":"failed"}`,children:[o.jsx("span",{className:"test-icon",children:R.passed?"✓":"✗"}),o.jsx("span",{className:"test-name",children:R.name}),!R.passed&&o.jsx("span",{className:"test-message",children:R.message})]},se))})]})]})}function ev({title:e,steps:t,onComplete:n}){var E;const[r,l]=k.useState(0),[s,i]=k.useState(new Set),[a,u]=k.useState(null),[c,v]=k.useState(!1),[m,h]=k.useState(!1),y=t[r],w=(r+(s.has(r)?1:0))/t.length*100,x=r===t.length-1,g=()=>{if(x&&s.size===t.length){n==null||n();return}r<t.length-1&&(l(r+1),u(null),v(!1),h(!1))},p=()=>{r>0&&(l(r-1),u(null),v(!1),h(!1))},d=()=>{i(C=>new Set([...C,r]))},f=C=>{c||u(C)},_=()=>{a!==null&&(v(!0),a===y.correctAnswer&&d())},N=C=>{h(C),C&&d()};return o.jsxs("div",{className:"interactive-lesson",children:[o.jsx("div",{className:"lesson-progress-bar",children:o.jsx("div",{className:"progress-fill",style:{width:`${w}%`}})}),o.jsx("div",{className:"lesson-steps-indicator",children:t.map((C,j)=>o.jsxs("div",{className:`step-dot ${j<r||s.has(j)?"completed":""} ${j===r?"current":""}`,onClick:()=>j<=r&&l(j),children:[o.jsx("span",{className:"dot-number",children:j+1}),o.jsx("span",{className:"dot-title",children:C.title})]},C.id))}),o.jsxs("div",{className:"lesson-content",children:[o.jsxs("div",{className:"step-header",children:[o.jsxs("span",{className:"step-badge",children:["第 ",r+1," 步 / 共 ",t.length," 步"]}),o.jsx("h2",{className:"step-title",children:y.title})]}),o.jsxs("div",{className:"step-body",children:[y.type==="explanation"&&o.jsxs("div",{className:"explanation-content",children:[o.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:Hr(y.content)}}),o.jsx("button",{className:"btn btn-primary",onClick:()=>{d(),g()},children:x?"完成学习 🎉":"我明白了，继续 →"})]}),y.type==="example"&&o.jsxs("div",{className:"example-content",children:[o.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:Hr(y.content)}}),y.code&&o.jsxs("div",{className:"code-example-wrapper",children:[o.jsx("div",{className:"example-label",children:"💡 点击运行试试："}),o.jsx(Ei,{initialCode:y.code,height:"250px"})]}),o.jsx("button",{className:"btn btn-primary",onClick:()=>{d(),g()},children:x?"完成学习 🎉":"继续下一步 →"})]}),y.type==="practice"&&o.jsxs("div",{className:"practice-content",children:[o.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:Hr(y.content)}}),y.hint&&o.jsxs("div",{className:"hint-box",children:[o.jsx("span",{className:"hint-icon",children:"💡 提示："}),y.hint]}),y.code&&o.jsx("div",{className:"practice-editor",children:o.jsx(Ei,{initialCode:y.code,height:"300px",testCode:y.testCode,onTestResult:N})}),o.jsxs("div",{className:"practice-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:p,disabled:r===0,children:"← 上一步"}),o.jsx("button",{className:"btn btn-primary",onClick:g,disabled:!m,children:x?"完成学习 🎉":"继续下一步 →"})]}),m&&o.jsx("div",{className:"success-message",children:"✅ 太棒了！你成功完成了这个练习！"})]}),y.type==="quiz"&&o.jsxs("div",{className:"quiz-content",children:[o.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:Hr(y.content)}}),o.jsx("div",{className:"quiz-options",children:(E=y.options)==null?void 0:E.map((C,j)=>o.jsxs("div",{className:`quiz-option ${a===j?"selected":""} ${c&&j===y.correctAnswer?"correct":""} ${c&&a===j&&j!==y.correctAnswer?"wrong":""}`,onClick:()=>f(j),children:[o.jsx("span",{className:"option-letter",children:String.fromCharCode(65+j)}),o.jsx("span",{className:"option-text",children:C})]},j))}),c?o.jsxs("div",{className:"quiz-result",children:[a===y.correctAnswer?o.jsx("div",{className:"result-success",children:"✅ 回答正确！"}):o.jsxs("div",{className:"result-failure",children:["❌ 回答错误，正确答案是 ",String.fromCharCode(65+(y.correctAnswer||0))]}),o.jsxs("div",{className:"result-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>{v(!1),u(null)},children:"重新答题"}),o.jsx("button",{className:"btn btn-primary",onClick:g,disabled:a!==y.correctAnswer,children:x?"完成学习 🎉":"继续下一步 →"})]})]}):o.jsx("button",{className:"btn btn-primary",onClick:_,disabled:a===null,children:"提交答案"})]})]})]})]})}function Hr(e){return e.replace(/\n\n/g,"</p><p>").replace(/^/g,"<p>").replace(/$/g,"</p>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")}function tv({title:e,description:t,difficulty:n,initialCode:r,testCode:l,testCases:s,onComplete:i,xpReward:a=10}){const[u,c]=k.useState(!1),[v,m]=k.useState(!1),[h,y]=k.useState("description"),w=p=>{p&&!u&&(c(!0),i==null||i())},g={easy:{label:"简单",color:"green",icon:"🟢"},medium:{label:"中等",color:"yellow",icon:"🟡"},hard:{label:"困难",color:"red",icon:"🔴"}}[n];return o.jsxs("div",{className:"challenge-arena",children:[o.jsxs("div",{className:"challenge-header",children:[o.jsxs("div",{className:"challenge-info",children:[o.jsxs("div",{className:"challenge-title-row",children:[o.jsxs("span",{className:`difficulty-badge difficulty-${n}`,children:[g.icon," ",g.label]}),o.jsxs("span",{className:"xp-reward",children:["⭐ +",a," XP"]})]}),o.jsx("h2",{className:"challenge-title",children:e})]}),u&&o.jsxs("div",{className:"completion-badge",children:[o.jsx("span",{className:"badge-icon",children:"✅"}),o.jsx("span",{children:"已完成"})]})]}),o.jsxs("div",{className:"challenge-layout",children:[o.jsxs("div",{className:"challenge-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsx("button",{className:`sidebar-tab ${h==="description"?"active":""}`,onClick:()=>y("description"),children:"📝 题目描述"}),o.jsxs("button",{className:`sidebar-tab ${h==="testcases"?"active":""}`,onClick:()=>y("testcases"),children:["🧪 测试用例 (",s.length,")"]})]}),o.jsxs("div",{className:"sidebar-content",children:[h==="description"&&o.jsxs("div",{className:"description-content",children:[o.jsx("p",{className:"challenge-desc",children:t}),o.jsxs("div",{className:"hint-section",children:[o.jsx("button",{className:"hint-toggle",onClick:()=>m(!v),children:v?"隐藏提示":"💡 查看提示"}),v&&o.jsx("div",{className:"hint-content",children:o.jsx("p",{children:"提示：使用 Python 的循环结构和条件判断来解决问题。"})})]})]}),h==="testcases"&&o.jsx("div",{className:"testcases-content",children:s.map((p,d)=>o.jsxs("div",{className:"testcase-item",children:[o.jsx("div",{className:"testcase-header",children:o.jsxs("span",{className:"testcase-name",children:["测试用例 ",d+1,": ",p.name]})}),o.jsxs("div",{className:"testcase-body",children:[o.jsxs("div",{className:"testcase-row",children:[o.jsx("span",{className:"testcase-label",children:"输入："}),o.jsx("code",{children:p.input})]}),o.jsxs("div",{className:"testcase-row",children:[o.jsx("span",{className:"testcase-label",children:"预期："}),o.jsx("code",{children:p.expected})]})]})]},d))})]})]}),o.jsx("div",{className:"challenge-editor",children:o.jsx(Ei,{initialCode:r,height:"400px",testCode:l,onTestResult:w})})]}),u&&o.jsx("div",{className:"completion-modal-overlay",children:o.jsxs("div",{className:"completion-modal",children:[o.jsx("div",{className:"modal-confetti",children:"🎉"}),o.jsx("h3",{children:"恭喜完成挑战！"}),o.jsxs("p",{className:"modal-reward",children:["获得 ",o.jsxs("span",{className:"reward-xp",children:["+",a," XP"]})," 经验值"]}),o.jsx("p",{className:"modal-message",children:"你成功通过了所有测试用例，继续加油！"}),o.jsx("button",{className:"btn btn-primary",onClick:()=>c(!1),children:"继续编码"})]})})]})}function nv(){const{id:e}=ih(),t=jo(),[n,r]=k.useState("learn"),[l,s]=k.useState(null),{isLoading:i,error:a,retryLoad:u}=Jd(),{progress:c,isChallengeCompleted:v,isLevelUnlocked:m,completeLesson:h,completeChallenge:y,getLevelProgress:w}=Ro(),x=parseInt(e||"4"),g=pn.find(T=>T.id===x)||pn[3],p=m(x),d=w(x),f=qh[x]||[],_=qd[x]||[],N=_.filter(T=>v(x,T.id)).length,E=T=>Array(5).fill(0).map((O,R)=>o.jsx("span",{className:`star ${R<T?"filled":""}`,children:"★"},R)),C=()=>{h(x,1)},j=(T,O)=>{y(x,T,O),s(null)};return p?o.jsxs("div",{className:"level-detail-page",children:[a&&o.jsxs("div",{className:"pyodide-error",children:[o.jsx("span",{className:"error-icon",children:"⚠️"}),o.jsx("span",{children:"Python运行环境加载失败，代码执行功能暂不可用"}),o.jsx("button",{className:"retry-btn",onClick:u,children:"重试"})]}),i&&!a&&o.jsxs("div",{className:"pyodide-loading-banner",children:[o.jsx("div",{className:"loading-spinner-small"}),o.jsx("span",{children:"正在加载Python运行环境..."})]}),o.jsxs("div",{className:"container detail-container",children:[o.jsxs("button",{className:"back-btn",onClick:()=>t("/map"),children:[o.jsx("span",{children:"←"})," 返回地图"]}),o.jsxs("div",{className:"level-header",children:[o.jsxs("div",{className:"level-info",children:[o.jsxs("div",{className:"level-badge",children:[o.jsx("span",{className:"badge-icon",children:"🐍"}),o.jsxs("span",{children:["Python 进阶 · 第 ",g.id," 关"]})]}),o.jsx("h1",{className:"level-title",children:g.title}),o.jsx("p",{className:"level-desc",children:g.description}),o.jsxs("div",{className:"level-meta",children:[o.jsxs("div",{className:"meta-item",children:[o.jsx("span",{className:"meta-icon",children:"📚"}),o.jsxs("span",{children:[f.length," 个学习步骤"]})]}),o.jsxs("div",{className:"meta-item",children:[o.jsx("span",{className:"meta-icon",children:"⚡"}),o.jsxs("span",{children:[_.length," 个挑战"]})]}),o.jsxs("div",{className:"meta-item",children:[o.jsx("span",{className:"meta-icon",children:"⏱"}),o.jsx("span",{children:g.duration})]}),o.jsxs("div",{className:"meta-item",children:[o.jsx("span",{className:"meta-icon",children:"⭐"}),o.jsxs("span",{children:["难度 ",E(g.difficulty)]})]})]}),o.jsxs("div",{className:"level-progress",children:[o.jsxs("div",{className:"progress-info",children:[o.jsx("span",{children:"本关进度"}),o.jsxs("span",{className:"progress-text",children:[d.completed,"/",d.total," 完成 · ",d.percent,"%"]})]}),o.jsx("div",{className:"progress-bar",children:o.jsx("div",{className:"progress-fill",style:{width:`${d.percent}%`}})})]})]}),o.jsxs("div",{className:"level-actions",children:[o.jsx("button",{className:"btn btn-primary btn-lg continue-btn",onClick:()=>r("learn"),children:"▶ 开始学习"}),o.jsxs("div",{className:"xp-display",children:[o.jsx("span",{className:"xp-icon",children:"⭐"}),o.jsxs("span",{className:"xp-value",children:[c.xp," XP"]})]})]})]}),o.jsxs("div",{className:"topics-section",children:[o.jsx("h3",{className:"section-title-sm",children:"📋 本关知识点"}),o.jsx("div",{className:"topics-tags",children:g.topics.map((T,O)=>o.jsx("span",{className:"topic-chip",children:T},O))})]}),o.jsxs("div",{className:"content-tabs",children:[o.jsxs("button",{className:`tab-btn ${n==="learn"?"active":""}`,onClick:()=>{r("learn"),s(null)},children:["📖 互动学习",o.jsx("span",{className:"tab-count",children:f.length})]}),o.jsxs("button",{className:`tab-btn ${n==="challenges"?"active":""}`,onClick:()=>{r("challenges"),s(null)},children:["⚡ 编程挑战",o.jsxs("span",{className:"tab-count",children:[N,"/",_.length]})]}),o.jsx("button",{className:`tab-btn ${n==="notes"?"active":""}`,onClick:()=>{r("notes"),s(null)},children:"📝 学习笔记"})]}),o.jsxs("div",{className:"tab-content",children:[n==="learn"&&o.jsx("div",{className:"learn-tab-content",children:f.length>0?o.jsx(ev,{title:g.title,steps:f,onComplete:C}):o.jsx("div",{className:"empty-state",children:o.jsx("p",{children:"暂无学习内容"})})}),n==="challenges"&&o.jsx("div",{className:"challenges-tab-content",children:l?o.jsxs("div",{children:[o.jsx("button",{className:"back-to-challenges",onClick:()=>s(null),children:"← 返回挑战列表"}),(()=>{const T=_.find(O=>O.id===l);return T?o.jsx(tv,{title:T.title,description:T.description,difficulty:T.difficulty,initialCode:T.initialCode,testCode:T.testCode,testCases:T.testCases,xpReward:T.xpReward,onComplete:()=>j(T.id,T.xpReward)}):null})()]}):o.jsxs("div",{className:"challenges-list",children:[o.jsxs("div",{className:"challenges-header",children:[o.jsx("h3",{children:"编程挑战"}),o.jsx("p",{children:"完成以下挑战来巩固所学知识，获得经验值奖励"})]}),o.jsx("div",{className:"challenges-grid",children:_.map((T,O)=>{const R=v(x,T.id);return o.jsxs("div",{className:`challenge-card ${R?"completed":""}`,onClick:()=>s(T.id),children:[o.jsxs("div",{className:"challenge-card-header",children:[o.jsxs("span",{className:"challenge-number",children:["挑战 ",O+1]}),o.jsxs("span",{className:`challenge-diff diff-${T.difficulty}`,children:[T.difficulty==="easy"&&"🟢 简单",T.difficulty==="medium"&&"🟡 中等",T.difficulty==="hard"&&"🔴 困难"]})]}),o.jsx("h4",{className:"challenge-card-title",children:T.title}),o.jsxs("p",{className:"challenge-card-desc",children:[T.description.substring(0,80),"..."]}),o.jsxs("div",{className:"challenge-card-footer",children:[o.jsxs("span",{className:"xp-reward-badge",children:["⭐ +",T.xpReward," XP"]}),R&&o.jsx("span",{className:"completed-check",children:"✓ 已完成"})]})]},T.id)})})]})}),n==="notes"&&o.jsx("div",{className:"notes-content",children:o.jsxs("div",{className:"notes-placeholder",children:[o.jsx("div",{className:"notes-icon",children:"📝"}),o.jsx("h3",{children:"学习笔记"}),o.jsx("p",{children:"记录你的学习心得和重要知识点"}),o.jsx("textarea",{className:"notes-textarea",placeholder:"在这里记录你的笔记...",rows:10}),o.jsx("button",{className:"btn btn-primary",children:"保存笔记"})]})})]})]})]}):o.jsx("div",{className:"level-detail-page",children:o.jsxs("div",{className:"container detail-container",children:[o.jsxs("button",{className:"back-btn",onClick:()=>t("/map"),children:[o.jsx("span",{children:"←"})," 返回地图"]}),o.jsxs("div",{className:"locked-page",children:[o.jsx("div",{className:"lock-icon-big",children:"🔒"}),o.jsx("h2",{children:"关卡未解锁"}),o.jsx("p",{children:"完成前一关的所有课程和挑战后即可解锁此关卡"}),o.jsx("button",{className:"btn btn-primary",onClick:()=>t("/map"),children:"返回地图"})]})]})})}function rv(){return o.jsxs("div",{className:"app",children:[o.jsx(Yh,{}),o.jsx("main",{className:"main-content",children:o.jsxs(kh,{children:[o.jsx(rl,{path:"/",element:o.jsx(Jh,{})}),o.jsx(rl,{path:"/map",element:o.jsx(bh,{})}),o.jsx(rl,{path:"/level/:id",element:o.jsx(nv,{})})]})}),o.jsx(Gh,{})]})}Ls.createRoot(document.getElementById("root")).render(o.jsx(cu.StrictMode,{children:o.jsx(Xh,{children:o.jsx(Kh,{children:o.jsx(Lh,{children:o.jsx(rv,{})})})})}))});export default lv();
