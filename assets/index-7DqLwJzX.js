var V4=Object.defineProperty;var M4=(t,e,n)=>e in t?V4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var F4=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var E=(t,e,n)=>M4(t,typeof e!="symbol"?e+"":e,n);var iw=F4((lw,gc)=>{function U4(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function B4(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fp={exports:{}},Sl={},pp={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),$4=Symbol.for("react.portal"),z4=Symbol.for("react.fragment"),H4=Symbol.for("react.strict_mode"),G4=Symbol.for("react.profiler"),W4=Symbol.for("react.provider"),Y4=Symbol.for("react.context"),q4=Symbol.for("react.forward_ref"),X4=Symbol.for("react.suspense"),K4=Symbol.for("react.memo"),Q4=Symbol.for("react.lazy"),D2=Symbol.iterator;function J4(t){return t===null||typeof t!="object"?null:(t=D2&&t[D2]||t["@@iterator"],typeof t=="function"?t:null)}var mp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gp=Object.assign,yp={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=yp,this.updater=n||mp}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vp(){}vp.prototype=Xs.prototype;function yc(t,e,n){this.props=t,this.context=e,this.refs=yp,this.updater=n||mp}var vc=yc.prototype=new vp;vc.constructor=yc;gp(vc,Xs.prototype);vc.isPureReactComponent=!0;var b2=Array.isArray,_p=Object.prototype.hasOwnProperty,_c={current:null},wp={key:!0,ref:!0,__self:!0,__source:!0};function xp(t,e,n){var r,s={},i=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(i=""+e.key),e)_p.call(e,r)&&!wp.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Sa,type:t,key:i,ref:a,props:s,_owner:_c.current}}function Z4(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function e3(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var V2=/\/+/g;function v1(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e3(""+t.key):e.toString(36)}function wo(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Sa:case $4:a=!0}}if(a)return a=t,s=s(a),t=r===""?"."+v1(a,0):r,b2(s)?(n="",t!=null&&(n=t.replace(V2,"$&/")+"/"),wo(s,e,n,"",function(d){return d})):s!=null&&(wc(s)&&(s=Z4(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(V2,"$&/")+"/")+t)),e.push(s)),1;if(a=0,r=r===""?".":r+":",b2(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+v1(i,l);a+=wo(i,e,n,c,s)}else if(c=J4(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+v1(i,l++),a+=wo(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function qa(t,e,n){if(t==null)return t;var r=[],s=0;return wo(t,r,"","",function(i){return e.call(n,i,s++)}),r}function t3(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},xo={transition:null},n3={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:xo,ReactCurrentOwner:_c};function Ep(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!wc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=Xs;le.Fragment=z4;le.Profiler=G4;le.PureComponent=yc;le.StrictMode=H4;le.Suspense=X4;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n3;le.act=Ep;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gp({},t.props),s=t.key,i=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,a=_c.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)_p.call(e,c)&&!wp.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Sa,type:t.type,key:s,ref:i,props:r,_owner:a}};le.createContext=function(t){return t={$$typeof:Y4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:W4,_context:t},t.Consumer=t};le.createElement=xp;le.createFactory=function(t){var e=xp.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:q4,render:t}};le.isValidElement=wc;le.lazy=function(t){return{$$typeof:Q4,_payload:{_status:-1,_result:t},_init:t3}};le.memo=function(t,e){return{$$typeof:K4,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=xo.transition;xo.transition={};try{t()}finally{xo.transition=e}};le.unstable_act=Ep;le.useCallback=function(t,e){return vt.current.useCallback(t,e)};le.useContext=function(t){return vt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};le.useEffect=function(t,e){return vt.current.useEffect(t,e)};le.useId=function(){return vt.current.useId()};le.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return vt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};le.useRef=function(t){return vt.current.useRef(t)};le.useState=function(t){return vt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return vt.current.useTransition()};le.version="18.3.1";pp.exports=le;var F=pp.exports;const Np=B4(F),r3=U4({__proto__:null,default:Np},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s3=F,i3=Symbol.for("react.element"),a3=Symbol.for("react.fragment"),o3=Object.prototype.hasOwnProperty,l3=s3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u3={key:!0,ref:!0,__self:!0,__source:!0};function Sp(t,e,n){var r,s={},i=null,a=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)o3.call(e,r)&&!u3.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:i3,type:t,key:i,ref:a,props:s,_owner:l3.current}}Sl.Fragment=a3;Sl.jsx=Sp;Sl.jsxs=Sp;fp.exports=Sl;var u=fp.exports,au={},Cp={exports:{}},bt={},Ap={exports:{}},kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,J){var re=G.length;G.push(J);e:for(;0<re;){var xe=re-1>>>1,Ne=G[xe];if(0<s(Ne,J))G[xe]=J,G[re]=Ne,re=xe;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var J=G[0],re=G.pop();if(re!==J){G[0]=re;e:for(var xe=0,Ne=G.length,Kt=Ne>>>1;xe<Kt;){var dt=2*(xe+1)-1,wt=G[dt],Je=dt+1,Fn=G[Je];if(0>s(wt,re))Je<Ne&&0>s(Fn,wt)?(G[xe]=Fn,G[Je]=re,xe=Je):(G[xe]=wt,G[dt]=re,xe=dt);else if(Je<Ne&&0>s(Fn,re))G[xe]=Fn,G[Je]=re,xe=Je;else break e}}return J}function s(G,J){var re=G.sortIndex-J.sortIndex;return re!==0?re:G.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],d=[],m=1,g=null,_=3,L=!1,I=!1,T=!1,k=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(G){for(var J=n(d);J!==null;){if(J.callback===null)r(d);else if(J.startTime<=G)r(d),J.sortIndex=J.expirationTime,e(c,J);else break;J=n(d)}}function M(G){if(T=!1,O(G),!I)if(n(c)!==null)I=!0,ve($);else{var J=n(d);J!==null&&Te(M,J.startTime-G)}}function $(G,J){I=!1,T&&(T=!1,C(w),w=-1),L=!0;var re=_;try{for(O(J),g=n(c);g!==null&&(!(g.expirationTime>J)||G&&!y());){var xe=g.callback;if(typeof xe=="function"){g.callback=null,_=g.priorityLevel;var Ne=xe(g.expirationTime<=J);J=t.unstable_now(),typeof Ne=="function"?g.callback=Ne:g===n(c)&&r(c),O(J)}else r(c);g=n(c)}if(g!==null)var Kt=!0;else{var dt=n(d);dt!==null&&Te(M,dt.startTime-J),Kt=!1}return Kt}finally{g=null,_=re,L=!1}}var Y=!1,A=null,w=-1,S=5,P=-1;function y(){return!(t.unstable_now()-P<S)}function R(){if(A!==null){var G=t.unstable_now();P=G;var J=!0;try{J=A(!0,G)}finally{J?N():(Y=!1,A=null)}}else Y=!1}var N;if(typeof x=="function")N=function(){x(R)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ne=K.port2;K.port1.onmessage=R,N=function(){ne.postMessage(null)}}else N=function(){k(R,0)};function ve(G){A=G,Y||(Y=!0,N())}function Te(G,J){w=k(function(){G(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){I||L||(I=!0,ve($))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(G){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var re=_;_=J;try{return G()}finally{_=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,J){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var re=_;_=G;try{return J()}finally{_=re}},t.unstable_scheduleCallback=function(G,J,re){var xe=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?xe+re:xe):re=xe,G){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=re+Ne,G={id:m++,callback:J,priorityLevel:G,startTime:re,expirationTime:Ne,sortIndex:-1},re>xe?(G.sortIndex=re,e(d,G),n(c)===null&&G===n(d)&&(T?(C(w),w=-1):T=!0,Te(M,re-xe))):(G.sortIndex=Ne,e(c,G),I||L||(I=!0,ve($))),G},t.unstable_shouldYield=y,t.unstable_wrapCallback=function(G){var J=_;return function(){var re=_;_=J;try{return G.apply(this,arguments)}finally{_=re}}}})(kp);Ap.exports=kp;var c3=Ap.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h3=F,jt=c3;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tp=new Set,qi={};function Zr(t,e){Vs(t,e),Vs(t+"Capture",e)}function Vs(t,e){for(qi[t]=e,t=0;t<e.length;t++)Tp.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=Object.prototype.hasOwnProperty,d3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,M2={},F2={};function f3(t){return ou.call(F2,t)?!0:ou.call(M2,t)?!1:d3.test(t)?F2[t]=!0:(M2[t]=!0,!1)}function p3(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function m3(t,e,n,r){if(e===null||typeof e>"u"||p3(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,s,i,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=a}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var xc=/[\-:]([a-z])/g;function Ec(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xc,Ec);nt[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xc,Ec);nt[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xc,Ec);nt[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nc(t,e,n,r){var s=nt.hasOwnProperty(e)?nt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(m3(e,n,s,r)&&(n=null),r||s===null?f3(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=h3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),fs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Sc=Symbol.for("react.strict_mode"),lu=Symbol.for("react.profiler"),Pp=Symbol.for("react.provider"),Ip=Symbol.for("react.context"),Cc=Symbol.for("react.forward_ref"),uu=Symbol.for("react.suspense"),cu=Symbol.for("react.suspense_list"),Ac=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),Rp=Symbol.for("react.offscreen"),U2=Symbol.iterator;function yi(t){return t===null||typeof t!="object"?null:(t=U2&&t[U2]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,_1;function Ci(t){if(_1===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_1=e&&e[1]||""}return`
`+_1+t}var w1=!1;function x1(t,e){if(!t||w1)return"";w1=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,l=i.length-1;1<=a&&0<=l&&s[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==i[l]){var c=`
`+s[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{w1=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ci(t):""}function g3(t){switch(t.tag){case 5:return Ci(t.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return t=x1(t.type,!1),t;case 11:return t=x1(t.type.render,!1),t;case 1:return t=x1(t.type,!0),t;default:return""}}function hu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case fs:return"Portal";case lu:return"Profiler";case Sc:return"StrictMode";case uu:return"Suspense";case cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ip:return(t.displayName||"Context")+".Consumer";case Pp:return(t._context.displayName||"Context")+".Provider";case Cc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ac:return e=t.displayName||null,e!==null?e:hu(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return hu(t(e))}catch{}}return null}function y3(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hu(e);case 8:return e===Sc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Op(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v3(t){var e=Op(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=v3(t))}function Lp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Op(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function du(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function B2(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jp(t,e){e=e.checked,e!=null&&Nc(t,"checked",e,!1)}function fu(t,e){jp(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pu(t,e.type,n):e.hasOwnProperty("defaultValue")&&pu(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $2(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pu(t,e,n){(e!=="number"||bo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ai=Array.isArray;function As(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function mu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function z2(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Ai(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function Dp(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function H2(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,Vp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_3=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(t){_3.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ii[e]=Ii[t]})});function Mp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ii.hasOwnProperty(t)&&Ii[t]?(""+e).trim():e+"px"}function Fp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Mp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var w3=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(t,e){if(e){if(w3[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _u=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wu=null,ks=null,Ts=null;function G2(t){if(t=ka(t)){if(typeof wu!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Pl(e),wu(t.stateNode,t.type,e))}}function Up(t){ks?Ts?Ts.push(t):Ts=[t]:ks=t}function Bp(){if(ks){var t=ks,e=Ts;if(Ts=ks=null,G2(t),e)for(t=0;t<e.length;t++)G2(e[t])}}function $p(t,e){return t(e)}function zp(){}var E1=!1;function Hp(t,e,n){if(E1)return t(e,n);E1=!0;try{return $p(t,e,n)}finally{E1=!1,(ks!==null||Ts!==null)&&(zp(),Bp())}}function Ki(t,e){var n=t.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var xu=!1;if(On)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){xu=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{xu=!1}function x3(t,e,n,r,s,i,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var Ri=!1,Vo=null,Mo=!1,Eu=null,E3={onError:function(t){Ri=!0,Vo=t}};function N3(t,e,n,r,s,i,a,l,c){Ri=!1,Vo=null,x3.apply(E3,arguments)}function S3(t,e,n,r,s,i,a,l,c){if(N3.apply(this,arguments),Ri){if(Ri){var d=Vo;Ri=!1,Vo=null}else throw Error(z(198));Mo||(Mo=!0,Eu=d)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function W2(t){if(es(t)!==t)throw Error(z(188))}function C3(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return W2(s),t;if(i===r)return W2(s),e;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function Wp(t){return t=C3(t),t!==null?Yp(t):null}function Yp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yp(t);if(e!==null)return e;t=t.sibling}return null}var qp=jt.unstable_scheduleCallback,Y2=jt.unstable_cancelCallback,A3=jt.unstable_shouldYield,k3=jt.unstable_requestPaint,Me=jt.unstable_now,T3=jt.unstable_getCurrentPriorityLevel,Tc=jt.unstable_ImmediatePriority,Xp=jt.unstable_UserBlockingPriority,Fo=jt.unstable_NormalPriority,P3=jt.unstable_LowPriority,Kp=jt.unstable_IdlePriority,Cl=null,vn=null;function I3(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:L3,R3=Math.log,O3=Math.LN2;function L3(t){return t>>>=0,t===0?32:31-(R3(t)/O3|0)|0}var Ja=64,Za=4194304;function ki(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=ki(l):(i&=a,i!==0&&(r=ki(i)))}else a=n&~s,a!==0?r=ki(a):i!==0&&(r=ki(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),s=1<<n,r|=t[n],e&=~s;return r}function j3(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D3(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var a=31-an(i),l=1<<a,c=s[a];c===-1?(!(l&n)||l&r)&&(s[a]=j3(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function Nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qp(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function N1(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function b3(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-an(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Pc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ye=0;function Jp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zp,Ic,e0,t0,n0,Su=!1,eo=[],sr=null,ir=null,ar=null,Qi=new Map,Ji=new Map,Qn=[],V3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function q2(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Qi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(e.pointerId)}}function _i(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ka(e),e!==null&&Ic(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function M3(t,e,n,r,s){switch(e){case"focusin":return sr=_i(sr,t,e,n,r,s),!0;case"dragenter":return ir=_i(ir,t,e,n,r,s),!0;case"mouseover":return ar=_i(ar,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Qi.set(i,_i(Qi.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ji.set(i,_i(Ji.get(i)||null,t,e,n,r,s)),!0}return!1}function r0(t){var e=Mr(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=Gp(n),e!==null){t.blockedOn=e,n0(t.priority,function(){e0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_u=r,n.target.dispatchEvent(r),_u=null}else return e=ka(n),e!==null&&Ic(e),t.blockedOn=n,!1;e.shift()}return!0}function X2(t,e,n){Eo(t)&&n.delete(e)}function F3(){Su=!1,sr!==null&&Eo(sr)&&(sr=null),ir!==null&&Eo(ir)&&(ir=null),ar!==null&&Eo(ar)&&(ar=null),Qi.forEach(X2),Ji.forEach(X2)}function wi(t,e){t.blockedOn===e&&(t.blockedOn=null,Su||(Su=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,F3)))}function Zi(t){function e(s){return wi(s,t)}if(0<eo.length){wi(eo[0],t);for(var n=1;n<eo.length;n++){var r=eo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sr!==null&&wi(sr,t),ir!==null&&wi(ir,t),ar!==null&&wi(ar,t),Qi.forEach(e),Ji.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&Qn.shift()}var Ps=Mn.ReactCurrentBatchConfig,Bo=!0;function U3(t,e,n,r){var s=ye,i=Ps.transition;Ps.transition=null;try{ye=1,Rc(t,e,n,r)}finally{ye=s,Ps.transition=i}}function B3(t,e,n,r){var s=ye,i=Ps.transition;Ps.transition=null;try{ye=4,Rc(t,e,n,r)}finally{ye=s,Ps.transition=i}}function Rc(t,e,n,r){if(Bo){var s=Cu(t,e,n,r);if(s===null)L1(t,e,r,$o,n),q2(t,r);else if(M3(s,t,e,n,r))r.stopPropagation();else if(q2(t,r),e&4&&-1<V3.indexOf(t)){for(;s!==null;){var i=ka(s);if(i!==null&&Zp(i),i=Cu(t,e,n,r),i===null&&L1(t,e,r,$o,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else L1(t,e,r,null,n)}}var $o=null;function Cu(t,e,n,r){if($o=null,t=kc(r),t=Mr(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $o=t,null}function s0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(T3()){case Tc:return 1;case Xp:return 4;case Fo:case P3:return 16;case Kp:return 536870912;default:return 16}default:return 16}}var er=null,Oc=null,No=null;function i0(){if(No)return No;var t,e=Oc,n=e.length,r,s="value"in er?er.value:er.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===s[i-r];r++);return No=s.slice(t,1<r?1-r:void 0)}function So(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function to(){return!0}function K2(){return!1}function Vt(t){function e(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?to:K2,this.isPropagationStopped=K2,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=Vt(Ks),Aa=Le({},Ks,{view:0,detail:0}),$3=Vt(Aa),S1,C1,xi,Al=Le({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xi&&(xi&&t.type==="mousemove"?(S1=t.screenX-xi.screenX,C1=t.screenY-xi.screenY):C1=S1=0,xi=t),S1)},movementY:function(t){return"movementY"in t?t.movementY:C1}}),Q2=Vt(Al),z3=Le({},Al,{dataTransfer:0}),H3=Vt(z3),G3=Le({},Aa,{relatedTarget:0}),A1=Vt(G3),W3=Le({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),Y3=Vt(W3),q3=Le({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X3=Vt(q3),K3=Le({},Ks,{data:0}),J2=Vt(K3),Q3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function em(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Z3[t])?!!e[t]:!1}function jc(){return em}var tm=Le({},Aa,{key:function(t){if(t.key){var e=Q3[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=So(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(t){return t.type==="keypress"?So(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?So(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nm=Vt(tm),rm=Le({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Z2=Vt(rm),sm=Le({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),im=Vt(sm),am=Le({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),om=Vt(am),lm=Le({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),um=Vt(lm),cm=[9,13,27,32],Dc=On&&"CompositionEvent"in window,Oi=null;On&&"documentMode"in document&&(Oi=document.documentMode);var hm=On&&"TextEvent"in window&&!Oi,a0=On&&(!Dc||Oi&&8<Oi&&11>=Oi),ed=" ",td=!1;function o0(t,e){switch(t){case"keyup":return cm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function dm(t,e){switch(t){case"compositionend":return l0(e);case"keypress":return e.which!==32?null:(td=!0,ed);case"textInput":return t=e.data,t===ed&&td?null:t;default:return null}}function fm(t,e){if(ms)return t==="compositionend"||!Dc&&o0(t,e)?(t=i0(),No=Oc=er=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return a0&&e.locale!=="ko"?null:e.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pm[t.type]:e==="textarea"}function u0(t,e,n,r){Up(r),e=zo(e,"onChange"),0<e.length&&(n=new Lc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Li=null,ea=null;function mm(t){w0(t,0)}function kl(t){var e=vs(t);if(Lp(e))return t}function gm(t,e){if(t==="change")return e}var c0=!1;if(On){var k1;if(On){var T1="oninput"in document;if(!T1){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),T1=typeof rd.oninput=="function"}k1=T1}else k1=!1;c0=k1&&(!document.documentMode||9<document.documentMode)}function sd(){Li&&(Li.detachEvent("onpropertychange",h0),ea=Li=null)}function h0(t){if(t.propertyName==="value"&&kl(ea)){var e=[];u0(e,ea,t,kc(t)),Hp(mm,e)}}function ym(t,e,n){t==="focusin"?(sd(),Li=e,ea=n,Li.attachEvent("onpropertychange",h0)):t==="focusout"&&sd()}function vm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(ea)}function _m(t,e){if(t==="click")return kl(e)}function wm(t,e){if(t==="input"||t==="change")return kl(e)}function xm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:xm;function ta(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ou.call(e,s)||!ln(t[s],e[s]))return!1}return!0}function id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ad(t,e){var n=id(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=id(n)}}function d0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?d0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f0(){for(var t=window,e=bo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bo(t.document)}return e}function bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Em(t){var e=f0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&d0(n.ownerDocument.documentElement,n)){if(r!==null&&bc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=ad(n,i);var a=ad(n,r);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Nm=On&&"documentMode"in document&&11>=document.documentMode,gs=null,Au=null,ji=null,ku=!1;function od(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||gs==null||gs!==bo(r)||(r=gs,"selectionStart"in r&&bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&ta(ji,r)||(ji=r,r=zo(Au,"onSelect"),0<r.length&&(e=new Lc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gs)))}function no(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},P1={},p0={};On&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Tl(t){if(P1[t])return P1[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in p0)return P1[t]=e[n];return t}var m0=Tl("animationend"),g0=Tl("animationiteration"),y0=Tl("animationstart"),v0=Tl("transitionend"),_0=new Map,ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){_0.set(t,e),Zr(e,[t])}for(var I1=0;I1<ld.length;I1++){var R1=ld[I1],Sm=R1.toLowerCase(),Cm=R1[0].toUpperCase()+R1.slice(1);xr(Sm,"on"+Cm)}xr(m0,"onAnimationEnd");xr(g0,"onAnimationIteration");xr(y0,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(v0,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Am=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));function ud(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,S3(r,e,void 0,t),t.currentTarget=null}function w0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;ud(s,l,d),i=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;ud(s,l,d),i=c}}}if(Mo)throw t=Eu,Mo=!1,Eu=null,t}function Ce(t,e){var n=e[Ou];n===void 0&&(n=e[Ou]=new Set);var r=t+"__bubble";n.has(r)||(x0(e,t,2,!1),n.add(r))}function O1(t,e,n){var r=0;e&&(r|=4),x0(n,t,r,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[ro]){t[ro]=!0,Tp.forEach(function(n){n!=="selectionchange"&&(Am.has(n)||O1(n,!1,t),O1(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,O1("selectionchange",!1,e))}}function x0(t,e,n,r){switch(s0(e)){case 1:var s=U3;break;case 4:s=B3;break;default:s=Rc}n=s.bind(null,e,n,t),s=void 0,!xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function L1(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;l!==null;){if(a=Mr(l),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Hp(function(){var d=i,m=kc(n),g=[];e:{var _=_0.get(t);if(_!==void 0){var L=Lc,I=t;switch(t){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":L=nm;break;case"focusin":I="focus",L=A1;break;case"focusout":I="blur",L=A1;break;case"beforeblur":case"afterblur":L=A1;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Q2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=H3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=im;break;case m0:case g0:case y0:L=Y3;break;case v0:L=om;break;case"scroll":L=$3;break;case"wheel":L=um;break;case"copy":case"cut":case"paste":L=X3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Z2}var T=(e&4)!==0,k=!T&&t==="scroll",C=T?_!==null?_+"Capture":null:_;T=[];for(var x=d,O;x!==null;){O=x;var M=O.stateNode;if(O.tag===5&&M!==null&&(O=M,C!==null&&(M=Ki(x,C),M!=null&&T.push(ra(x,M,O)))),k)break;x=x.return}0<T.length&&(_=new L(_,I,null,n,m),g.push({event:_,listeners:T}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",L=t==="mouseout"||t==="pointerout",_&&n!==_u&&(I=n.relatedTarget||n.fromElement)&&(Mr(I)||I[Ln]))break e;if((L||_)&&(_=m.window===m?m:(_=m.ownerDocument)?_.defaultView||_.parentWindow:window,L?(I=n.relatedTarget||n.toElement,L=d,I=I?Mr(I):null,I!==null&&(k=es(I),I!==k||I.tag!==5&&I.tag!==6)&&(I=null)):(L=null,I=d),L!==I)){if(T=Q2,M="onMouseLeave",C="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(T=Z2,M="onPointerLeave",C="onPointerEnter",x="pointer"),k=L==null?_:vs(L),O=I==null?_:vs(I),_=new T(M,x+"leave",L,n,m),_.target=k,_.relatedTarget=O,M=null,Mr(m)===d&&(T=new T(C,x+"enter",I,n,m),T.target=O,T.relatedTarget=k,M=T),k=M,L&&I)t:{for(T=L,C=I,x=0,O=T;O;O=ls(O))x++;for(O=0,M=C;M;M=ls(M))O++;for(;0<x-O;)T=ls(T),x--;for(;0<O-x;)C=ls(C),O--;for(;x--;){if(T===C||C!==null&&T===C.alternate)break t;T=ls(T),C=ls(C)}T=null}else T=null;L!==null&&cd(g,_,L,T,!1),I!==null&&k!==null&&cd(g,k,I,T,!0)}}e:{if(_=d?vs(d):window,L=_.nodeName&&_.nodeName.toLowerCase(),L==="select"||L==="input"&&_.type==="file")var $=gm;else if(nd(_))if(c0)$=wm;else{$=vm;var Y=ym}else(L=_.nodeName)&&L.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&($=_m);if($&&($=$(t,d))){u0(g,$,n,m);break e}Y&&Y(t,_,d),t==="focusout"&&(Y=_._wrapperState)&&Y.controlled&&_.type==="number"&&pu(_,"number",_.value)}switch(Y=d?vs(d):window,t){case"focusin":(nd(Y)||Y.contentEditable==="true")&&(gs=Y,Au=d,ji=null);break;case"focusout":ji=Au=gs=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,od(g,n,m);break;case"selectionchange":if(Nm)break;case"keydown":case"keyup":od(g,n,m)}var A;if(Dc)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else ms?o0(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(a0&&n.locale!=="ko"&&(ms||w!=="onCompositionStart"?w==="onCompositionEnd"&&ms&&(A=i0()):(er=m,Oc="value"in er?er.value:er.textContent,ms=!0)),Y=zo(d,w),0<Y.length&&(w=new J2(w,t,null,n,m),g.push({event:w,listeners:Y}),A?w.data=A:(A=l0(n),A!==null&&(w.data=A)))),(A=hm?dm(t,n):fm(t,n))&&(d=zo(d,"onBeforeInput"),0<d.length&&(m=new J2("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=A))}w0(g,e)})}function ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zo(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ki(t,n),i!=null&&r.unshift(ra(t,i,s)),i=Ki(t,e),i!=null&&r.push(ra(t,i,s))),t=t.return}return r}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cd(t,e,n,r,s){for(var i=e._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,s?(c=Ki(n,i),c!=null&&a.unshift(ra(n,c,l))):s||(c=Ki(n,i),c!=null&&a.push(ra(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var km=/\r\n?/g,Tm=/\u0000|\uFFFD/g;function hd(t){return(typeof t=="string"?t:""+t).replace(km,`
`).replace(Tm,"")}function so(t,e,n){if(e=hd(e),hd(t)!==e&&n)throw Error(z(425))}function Ho(){}var Tu=null,Pu=null;function Iu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ru=typeof setTimeout=="function"?setTimeout:void 0,Pm=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,Im=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(t){return dd.resolve(null).then(t).catch(Rm)}:Ru;function Rm(t){setTimeout(function(){throw t})}function j1(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Zi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Zi(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),gn="__reactFiber$"+Qs,sa="__reactProps$"+Qs,Ln="__reactContainer$"+Qs,Ou="__reactEvents$"+Qs,Om="__reactListeners$"+Qs,Lm="__reactHandles$"+Qs;function Mr(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fd(t);t!==null;){if(n=t[gn])return n;t=fd(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[gn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Pl(t){return t[sa]||null}var Lu=[],_s=-1;function Er(t){return{current:t}}function ke(t){0>_s||(t.current=Lu[_s],Lu[_s]=null,_s--)}function Ee(t,e){_s++,Lu[_s]=t.current,t.current=e}var yr={},ct=Er(yr),Nt=Er(!1),Wr=yr;function Ms(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function St(t){return t=t.childContextTypes,t!=null}function Go(){ke(Nt),ke(ct)}function pd(t,e,n){if(ct.current!==yr)throw Error(z(168));Ee(ct,e),Ee(Nt,n)}function E0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(z(108,y3(t)||"Unknown",s));return Le({},n,r)}function Wo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Wr=ct.current,Ee(ct,t),Ee(Nt,Nt.current),!0}function md(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=E0(t,e,Wr),r.__reactInternalMemoizedMergedChildContext=t,ke(Nt),ke(ct),Ee(ct,t)):ke(Nt),Ee(Nt,n)}var kn=null,Il=!1,D1=!1;function N0(t){kn===null?kn=[t]:kn.push(t)}function jm(t){Il=!0,N0(t)}function Nr(){if(!D1&&kn!==null){D1=!0;var t=0,e=ye;try{var n=kn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,Il=!1}catch(s){throw kn!==null&&(kn=kn.slice(t+1)),qp(Tc,Nr),s}finally{ye=e,D1=!1}}return null}var ws=[],xs=0,Yo=null,qo=0,Ut=[],Bt=0,Yr=null,Tn=1,Pn="";function Lr(t,e){ws[xs++]=qo,ws[xs++]=Yo,Yo=t,qo=e}function S0(t,e,n){Ut[Bt++]=Tn,Ut[Bt++]=Pn,Ut[Bt++]=Yr,Yr=t;var r=Tn;t=Pn;var s=32-an(r)-1;r&=~(1<<s),n+=1;var i=32-an(e)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Tn=1<<32-an(e)+s|n<<s|r,Pn=i+t}else Tn=1<<i|n<<s|r,Pn=t}function Vc(t){t.return!==null&&(Lr(t,1),S0(t,1,0))}function Mc(t){for(;t===Yo;)Yo=ws[--xs],ws[xs]=null,qo=ws[--xs],ws[xs]=null;for(;t===Yr;)Yr=Ut[--Bt],Ut[Bt]=null,Pn=Ut[--Bt],Ut[Bt]=null,Tn=Ut[--Bt],Ut[Bt]=null}var Ot=null,Rt=null,Pe=!1,tn=null;function C0(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Rt=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Tn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Rt=null,!0):!1;default:return!1}}function ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Du(t){if(Pe){var e=Rt;if(e){var n=e;if(!gd(t,e)){if(ju(t))throw Error(z(418));e=or(n.nextSibling);var r=Ot;e&&gd(t,e)?C0(r,n):(t.flags=t.flags&-4097|2,Pe=!1,Ot=t)}}else{if(ju(t))throw Error(z(418));t.flags=t.flags&-4097|2,Pe=!1,Ot=t}}}function yd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function io(t){if(t!==Ot)return!1;if(!Pe)return yd(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Iu(t.type,t.memoizedProps)),e&&(e=Rt)){if(ju(t))throw A0(),Error(z(418));for(;e;)C0(t,e),e=or(e.nextSibling)}if(yd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Ot?or(t.stateNode.nextSibling):null;return!0}function A0(){for(var t=Rt;t;)t=or(t.nextSibling)}function Fs(){Rt=Ot=null,Pe=!1}function Fc(t){tn===null?tn=[t]:tn.push(t)}var Dm=Mn.ReactCurrentBatchConfig;function Ei(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(a){var l=s.refs;a===null?delete l[i]:l[i]=a},e._stringRef=i,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function ao(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vd(t){var e=t._init;return e(t._payload)}function k0(t){function e(C,x){if(t){var O=C.deletions;O===null?(C.deletions=[x],C.flags|=16):O.push(x)}}function n(C,x){if(!t)return null;for(;x!==null;)e(C,x),x=x.sibling;return null}function r(C,x){for(C=new Map;x!==null;)x.key!==null?C.set(x.key,x):C.set(x.index,x),x=x.sibling;return C}function s(C,x){return C=hr(C,x),C.index=0,C.sibling=null,C}function i(C,x,O){return C.index=O,t?(O=C.alternate,O!==null?(O=O.index,O<x?(C.flags|=2,x):O):(C.flags|=2,x)):(C.flags|=1048576,x)}function a(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,x,O,M){return x===null||x.tag!==6?(x=$1(O,C.mode,M),x.return=C,x):(x=s(x,O),x.return=C,x)}function c(C,x,O,M){var $=O.type;return $===ps?m(C,x,O.props.children,M,O.key):x!==null&&(x.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===qn&&vd($)===x.type)?(M=s(x,O.props),M.ref=Ei(C,x,O),M.return=C,M):(M=Ro(O.type,O.key,O.props,null,C.mode,M),M.ref=Ei(C,x,O),M.return=C,M)}function d(C,x,O,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==O.containerInfo||x.stateNode.implementation!==O.implementation?(x=z1(O,C.mode,M),x.return=C,x):(x=s(x,O.children||[]),x.return=C,x)}function m(C,x,O,M,$){return x===null||x.tag!==7?(x=Gr(O,C.mode,M,$),x.return=C,x):(x=s(x,O),x.return=C,x)}function g(C,x,O){if(typeof x=="string"&&x!==""||typeof x=="number")return x=$1(""+x,C.mode,O),x.return=C,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xa:return O=Ro(x.type,x.key,x.props,null,C.mode,O),O.ref=Ei(C,null,x),O.return=C,O;case fs:return x=z1(x,C.mode,O),x.return=C,x;case qn:var M=x._init;return g(C,M(x._payload),O)}if(Ai(x)||yi(x))return x=Gr(x,C.mode,O,null),x.return=C,x;ao(C,x)}return null}function _(C,x,O,M){var $=x!==null?x.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return $!==null?null:l(C,x,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Xa:return O.key===$?c(C,x,O,M):null;case fs:return O.key===$?d(C,x,O,M):null;case qn:return $=O._init,_(C,x,$(O._payload),M)}if(Ai(O)||yi(O))return $!==null?null:m(C,x,O,M,null);ao(C,O)}return null}function L(C,x,O,M,$){if(typeof M=="string"&&M!==""||typeof M=="number")return C=C.get(O)||null,l(x,C,""+M,$);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Xa:return C=C.get(M.key===null?O:M.key)||null,c(x,C,M,$);case fs:return C=C.get(M.key===null?O:M.key)||null,d(x,C,M,$);case qn:var Y=M._init;return L(C,x,O,Y(M._payload),$)}if(Ai(M)||yi(M))return C=C.get(O)||null,m(x,C,M,$,null);ao(x,M)}return null}function I(C,x,O,M){for(var $=null,Y=null,A=x,w=x=0,S=null;A!==null&&w<O.length;w++){A.index>w?(S=A,A=null):S=A.sibling;var P=_(C,A,O[w],M);if(P===null){A===null&&(A=S);break}t&&A&&P.alternate===null&&e(C,A),x=i(P,x,w),Y===null?$=P:Y.sibling=P,Y=P,A=S}if(w===O.length)return n(C,A),Pe&&Lr(C,w),$;if(A===null){for(;w<O.length;w++)A=g(C,O[w],M),A!==null&&(x=i(A,x,w),Y===null?$=A:Y.sibling=A,Y=A);return Pe&&Lr(C,w),$}for(A=r(C,A);w<O.length;w++)S=L(A,C,w,O[w],M),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?w:S.key),x=i(S,x,w),Y===null?$=S:Y.sibling=S,Y=S);return t&&A.forEach(function(y){return e(C,y)}),Pe&&Lr(C,w),$}function T(C,x,O,M){var $=yi(O);if(typeof $!="function")throw Error(z(150));if(O=$.call(O),O==null)throw Error(z(151));for(var Y=$=null,A=x,w=x=0,S=null,P=O.next();A!==null&&!P.done;w++,P=O.next()){A.index>w?(S=A,A=null):S=A.sibling;var y=_(C,A,P.value,M);if(y===null){A===null&&(A=S);break}t&&A&&y.alternate===null&&e(C,A),x=i(y,x,w),Y===null?$=y:Y.sibling=y,Y=y,A=S}if(P.done)return n(C,A),Pe&&Lr(C,w),$;if(A===null){for(;!P.done;w++,P=O.next())P=g(C,P.value,M),P!==null&&(x=i(P,x,w),Y===null?$=P:Y.sibling=P,Y=P);return Pe&&Lr(C,w),$}for(A=r(C,A);!P.done;w++,P=O.next())P=L(A,C,w,P.value,M),P!==null&&(t&&P.alternate!==null&&A.delete(P.key===null?w:P.key),x=i(P,x,w),Y===null?$=P:Y.sibling=P,Y=P);return t&&A.forEach(function(R){return e(C,R)}),Pe&&Lr(C,w),$}function k(C,x,O,M){if(typeof O=="object"&&O!==null&&O.type===ps&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case Xa:e:{for(var $=O.key,Y=x;Y!==null;){if(Y.key===$){if($=O.type,$===ps){if(Y.tag===7){n(C,Y.sibling),x=s(Y,O.props.children),x.return=C,C=x;break e}}else if(Y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===qn&&vd($)===Y.type){n(C,Y.sibling),x=s(Y,O.props),x.ref=Ei(C,Y,O),x.return=C,C=x;break e}n(C,Y);break}else e(C,Y);Y=Y.sibling}O.type===ps?(x=Gr(O.props.children,C.mode,M,O.key),x.return=C,C=x):(M=Ro(O.type,O.key,O.props,null,C.mode,M),M.ref=Ei(C,x,O),M.return=C,C=M)}return a(C);case fs:e:{for(Y=O.key;x!==null;){if(x.key===Y)if(x.tag===4&&x.stateNode.containerInfo===O.containerInfo&&x.stateNode.implementation===O.implementation){n(C,x.sibling),x=s(x,O.children||[]),x.return=C,C=x;break e}else{n(C,x);break}else e(C,x);x=x.sibling}x=z1(O,C.mode,M),x.return=C,C=x}return a(C);case qn:return Y=O._init,k(C,x,Y(O._payload),M)}if(Ai(O))return I(C,x,O,M);if(yi(O))return T(C,x,O,M);ao(C,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,x!==null&&x.tag===6?(n(C,x.sibling),x=s(x,O),x.return=C,C=x):(n(C,x),x=$1(O,C.mode,M),x.return=C,C=x),a(C)):n(C,x)}return k}var Us=k0(!0),T0=k0(!1),Xo=Er(null),Ko=null,Es=null,Uc=null;function Bc(){Uc=Es=Ko=null}function $c(t){var e=Xo.current;ke(Xo),t._currentValue=e}function bu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Ko=t,Uc=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(Uc!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(Ko===null)throw Error(z(308));Es=t,Ko.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var Fr=null;function zc(t){Fr===null?Fr=[t]:Fr.push(t)}function P0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,zc(e)):(n.next=s.next,s.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function Hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function In(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,jn(t,n)}return s=r.interleaved,s===null?(e.next=e,zc(r)):(e.next=s.next,s.next=e),r.interleaved=e,jn(t,n)}function Co(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pc(t,n)}}function _d(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qo(t,e,n,r){var s=t.updateQueue;Xn=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?i=d:a.next=d,a=c;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=c))}if(i!==null){var g=s.baseState;a=0,m=d=c=null,l=i;do{var _=l.lane,L=l.eventTime;if((r&_)===_){m!==null&&(m=m.next={eventTime:L,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var I=t,T=l;switch(_=e,L=n,T.tag){case 1:if(I=T.payload,typeof I=="function"){g=I.call(L,g,_);break e}g=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=T.payload,_=typeof I=="function"?I.call(L,g,_):I,_==null)break e;g=Le({},g,_);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[l]:_.push(l))}else L={eventTime:L,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=L,c=g):m=m.next=L,a|=_;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;_=l,l=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);if(m===null&&(c=g),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Xr|=a,t.lanes=a,t.memoizedState=g}}function wd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(z(191,s));s.call(r)}}}var Ta={},_n=Er(Ta),ia=Er(Ta),aa=Er(Ta);function Ur(t){if(t===Ta)throw Error(z(174));return t}function Gc(t,e){switch(Ee(aa,e),Ee(ia,t),Ee(_n,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gu(e,t)}ke(_n),Ee(_n,e)}function Bs(){ke(_n),ke(ia),ke(aa)}function R0(t){Ur(aa.current);var e=Ur(_n.current),n=gu(e,t.type);e!==n&&(Ee(ia,t),Ee(_n,n))}function Wc(t){ia.current===t&&(ke(_n),ke(ia))}var Re=Er(0);function Jo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var b1=[];function Yc(){for(var t=0;t<b1.length;t++)b1[t]._workInProgressVersionPrimary=null;b1.length=0}var Ao=Mn.ReactCurrentDispatcher,V1=Mn.ReactCurrentBatchConfig,qr=0,Oe=null,He=null,qe=null,Zo=!1,Di=!1,oa=0,bm=0;function it(){throw Error(z(321))}function qc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Xc(t,e,n,r,s,i){if(qr=i,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ao.current=t===null||t.memoizedState===null?Um:Bm,t=n(r,s),Di){i=0;do{if(Di=!1,oa=0,25<=i)throw Error(z(301));i+=1,qe=He=null,e.updateQueue=null,Ao.current=$m,t=n(r,s)}while(Di)}if(Ao.current=el,e=He!==null&&He.next!==null,qr=0,qe=He=Oe=null,Zo=!1,e)throw Error(z(300));return t}function Kc(){var t=oa!==0;return oa=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Oe.memoizedState=qe=t:qe=qe.next=t,qe}function Yt(){if(He===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=qe===null?Oe.memoizedState:qe.next;if(e!==null)qe=e,He=t;else{if(t===null)throw Error(z(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},qe===null?Oe.memoizedState=qe=t:qe=qe.next=t}return qe}function la(t,e){return typeof e=="function"?e(t):e}function M1(t){var e=Yt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=He,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=a=null,c=null,d=i;do{var m=d.lane;if((qr&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=g,a=r):c=c.next=g,Oe.lanes|=m,Xr|=m}d=d.next}while(d!==null&&d!==i);c===null?a=r:c.next=l,ln(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Oe.lanes|=i,Xr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function F1(t){var e=Yt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=t(i,a.action),a=a.next;while(a!==s);ln(i,e.memoizedState)||(Et=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function O0(){}function L0(t,e){var n=Oe,r=Yt(),s=e(),i=!ln(r.memoizedState,s);if(i&&(r.memoizedState=s,Et=!0),r=r.queue,Qc(b0.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,ua(9,D0.bind(null,n,r,s,e),void 0,null),Qe===null)throw Error(z(349));qr&30||j0(n,e,s)}return s}function j0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function D0(t,e,n,r){e.value=n,e.getSnapshot=r,V0(e)&&M0(t)}function b0(t,e,n){return n(function(){V0(e)&&M0(t)})}function V0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function M0(t){var e=jn(t,1);e!==null&&on(e,t,1,-1)}function xd(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=Fm.bind(null,Oe,t),[e.memoizedState,t]}function ua(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function F0(){return Yt().memoizedState}function ko(t,e,n,r){var s=dn();Oe.flags|=t,s.memoizedState=ua(1|e,n,void 0,r===void 0?null:r)}function Rl(t,e,n,r){var s=Yt();r=r===void 0?null:r;var i=void 0;if(He!==null){var a=He.memoizedState;if(i=a.destroy,r!==null&&qc(r,a.deps)){s.memoizedState=ua(e,n,i,r);return}}Oe.flags|=t,s.memoizedState=ua(1|e,n,i,r)}function Ed(t,e){return ko(8390656,8,t,e)}function Qc(t,e){return Rl(2048,8,t,e)}function U0(t,e){return Rl(4,2,t,e)}function B0(t,e){return Rl(4,4,t,e)}function $0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function z0(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4,4,$0.bind(null,e,t),n)}function Jc(){}function H0(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function G0(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function W0(t,e,n){return qr&21?(ln(n,e)||(n=Qp(),Oe.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function Vm(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=V1.transition;V1.transition={};try{t(!1),e()}finally{ye=n,V1.transition=r}}function Y0(){return Yt().memoizedState}function Mm(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},q0(t))X0(e,n);else if(n=P0(t,e,n,r),n!==null){var s=yt();on(n,t,r,s),K0(n,e,r)}}function Fm(t,e,n){var r=cr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(q0(t))X0(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var a=e.lastRenderedState,l=i(a,n);if(s.hasEagerState=!0,s.eagerState=l,ln(l,a)){var c=e.interleaved;c===null?(s.next=s,zc(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=P0(t,e,s,r),n!==null&&(s=yt(),on(n,t,r,s),K0(n,e,r))}}function q0(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function X0(t,e){Di=Zo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function K0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pc(t,n)}}var el={readContext:Wt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},Um={readContext:Wt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:Ed,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ko(4194308,4,$0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return ko(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Mm.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:xd,useDebugValue:Jc,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=xd(!1),e=t[0];return t=Vm.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,s=dn();if(Pe){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Qe===null)throw Error(z(349));qr&30||j0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Ed(b0.bind(null,r,i,t),[t]),r.flags|=2048,ua(9,D0.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=dn(),e=Qe.identifierPrefix;if(Pe){var n=Pn,r=Tn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bm++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Bm={readContext:Wt,useCallback:H0,useContext:Wt,useEffect:Qc,useImperativeHandle:z0,useInsertionEffect:U0,useLayoutEffect:B0,useMemo:G0,useReducer:M1,useRef:F0,useState:function(){return M1(la)},useDebugValue:Jc,useDeferredValue:function(t){var e=Yt();return W0(e,He.memoizedState,t)},useTransition:function(){var t=M1(la)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:L0,useId:Y0,unstable_isNewReconciler:!1},$m={readContext:Wt,useCallback:H0,useContext:Wt,useEffect:Qc,useImperativeHandle:z0,useInsertionEffect:U0,useLayoutEffect:B0,useMemo:G0,useReducer:F1,useRef:F0,useState:function(){return F1(la)},useDebugValue:Jc,useDeferredValue:function(t){var e=Yt();return He===null?e.memoizedState=t:W0(e,He.memoizedState,t)},useTransition:function(){var t=F1(la)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:L0,useId:Y0,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),s=cr(t),i=In(r,s);i.payload=e,n!=null&&(i.callback=n),e=lr(t,i,s),e!==null&&(on(e,t,s,r),Co(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),s=cr(t),i=In(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=lr(t,i,s),e!==null&&(on(e,t,s,r),Co(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=cr(t),s=In(n,r);s.tag=2,e!=null&&(s.callback=e),e=lr(t,s,r),e!==null&&(on(e,t,r,n),Co(e,t,r))}};function Nd(t,e,n,r,s,i,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,a):e.prototype&&e.prototype.isPureReactComponent?!ta(n,r)||!ta(s,i):!0}function Q0(t,e,n){var r=!1,s=yr,i=e.contextType;return typeof i=="object"&&i!==null?i=Wt(i):(s=St(e)?Wr:ct.current,r=e.contextTypes,i=(r=r!=null)?Ms(t,s):yr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Sd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function Mu(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Hc(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Wt(i):(i=St(e)?Wr:ct.current,s.context=Ms(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Vu(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ol.enqueueReplaceState(s,s.state,null),Qo(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function $s(t,e){try{var n="",r=e;do n+=g3(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function U1(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zm=typeof WeakMap=="function"?WeakMap:Map;function J0(t,e,n){n=In(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nl||(nl=!0,Xu=r),Fu(t,e)},n}function Z0(t,e,n){n=In(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Fu(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Fu(t,e),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Cd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zm;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=r8.bind(null,t,e,n),e.then(t,t))}function Ad(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kd(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=In(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var Hm=Mn.ReactCurrentOwner,Et=!1;function gt(t,e,n,r){e.child=t===null?T0(e,null,n,r):Us(e,t.child,n,r)}function Td(t,e,n,r,s){n=n.render;var i=e.ref;return Is(e,s),r=Xc(t,e,n,r,i,s),n=Kc(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Dn(t,e,s)):(Pe&&n&&Vc(e),e.flags|=1,gt(t,e,r,s),e.child)}function Pd(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!ah(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,e6(t,e,i,r,s)):(t=Ro(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(a,r)&&t.ref===e.ref)return Dn(t,e,s)}return e.flags|=1,t=hr(i,r),t.ref=e.ref,t.return=e,e.child=t}function e6(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ta(i,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Dn(t,e,s)}return Uu(t,e,n,r,s)}function t6(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Ss,kt),kt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(Ss,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ee(Ss,kt),kt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ee(Ss,kt),kt|=r;return gt(t,e,s,n),e.child}function n6(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uu(t,e,n,r,s){var i=St(n)?Wr:ct.current;return i=Ms(e,i),Is(e,s),n=Xc(t,e,n,r,i,s),r=Kc(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Dn(t,e,s)):(Pe&&r&&Vc(e),e.flags|=1,gt(t,e,n,s),e.child)}function Id(t,e,n,r,s){if(St(n)){var i=!0;Wo(e)}else i=!1;if(Is(e,s),e.stateNode===null)To(t,e),Q0(e,n,r),Mu(e,n,r,s),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Wt(d):(d=St(n)?Wr:ct.current,d=Ms(e,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==d)&&Sd(e,a,r,d),Xn=!1;var _=e.memoizedState;a.state=_,Qo(e,r,a,s),c=e.memoizedState,l!==r||_!==c||Nt.current||Xn?(typeof m=="function"&&(Vu(e,n,m,r),c=e.memoizedState),(l=Xn||Nd(e,n,l,r,_,c,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),a.props=r,a.state=c,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,I0(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Zt(e.type,l),a.props=d,g=e.pendingProps,_=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Wt(c):(c=St(n)?Wr:ct.current,c=Ms(e,c));var L=n.getDerivedStateFromProps;(m=typeof L=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||_!==c)&&Sd(e,a,r,c),Xn=!1,_=e.memoizedState,a.state=_,Qo(e,r,a,s);var I=e.memoizedState;l!==g||_!==I||Nt.current||Xn?(typeof L=="function"&&(Vu(e,n,L,r),I=e.memoizedState),(d=Xn||Nd(e,n,d,r,_,I,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,I,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,I,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),a.props=r,a.state=I,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Bu(t,e,n,r,i,s)}function Bu(t,e,n,r,s,i){n6(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return s&&md(e,n,!1),Dn(t,e,i);r=e.stateNode,Hm.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Us(e,t.child,null,i),e.child=Us(e,null,l,i)):gt(t,e,l,i),e.memoizedState=r.state,s&&md(e,n,!0),e.child}function r6(t){var e=t.stateNode;e.pendingContext?pd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pd(t,e.context,!1),Gc(t,e.containerInfo)}function Rd(t,e,n,r,s){return Fs(),Fc(s),e.flags|=256,gt(t,e,n,r),e.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function s6(t,e,n){var r=e.pendingProps,s=Re.current,i=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ee(Re,s&1),t===null)return Du(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,i?(r=e.mode,i=e.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Dl(a,r,0,null),t=Gr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=zu(n),e.memoizedState=$u,t):Zc(e,a));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Gm(t,e,a,r,l,s,n);if(i){i=r.fallback,a=e.mode,s=t.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=hr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=hr(l,i):(i=Gr(i,a,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,a=t.child.memoizedState,a=a===null?zu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=t.childLanes&~n,e.memoizedState=$u,r}return i=t.child,t=i.sibling,r=hr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zc(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oo(t,e,n,r){return r!==null&&Fc(r),Us(e,t.child,null,n),t=Zc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gm(t,e,n,r,s,i,a){if(n)return e.flags&256?(e.flags&=-257,r=U1(Error(z(422))),oo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Dl({mode:"visible",children:r.children},s,0,null),i=Gr(i,s,a,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Us(e,t.child,null,a),e.child.memoizedState=zu(a),e.memoizedState=$u,i);if(!(e.mode&1))return oo(t,e,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(z(419)),r=U1(i,r,void 0),oo(t,e,a,r)}if(l=(a&t.childLanes)!==0,Et||l){if(r=Qe,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,jn(t,s),on(r,t,s,-1))}return ih(),r=U1(Error(z(421))),oo(t,e,a,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=s8.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Rt=or(s.nextSibling),Ot=e,Pe=!0,tn=null,t!==null&&(Ut[Bt++]=Tn,Ut[Bt++]=Pn,Ut[Bt++]=Yr,Tn=t.id,Pn=t.overflow,Yr=e),e=Zc(e,r.children),e.flags|=4096,e)}function Od(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bu(t.return,e,n)}function B1(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function i6(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(gt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Od(t,n,e);else if(t.tag===19)Od(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Re,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Jo(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),B1(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Jo(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}B1(e,!0,n,null,i);break;case"together":B1(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function To(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wm(t,e,n){switch(e.tag){case 3:r6(e),Fs();break;case 5:R0(e);break;case 1:St(e.type)&&Wo(e);break;case 4:Gc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ee(Xo,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?s6(t,e,n):(Ee(Re,Re.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);Ee(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return i6(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ee(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,t6(t,e,n)}return Dn(t,e,n)}var a6,Hu,o6,l6;a6=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hu=function(){};o6=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ur(_n.current);var i=null;switch(n){case"input":s=du(t,s),r=du(t,r),i=[];break;case"select":s=Le({},s,{value:void 0}),r=Le({},r,{value:void 0}),i=[];break;case"textarea":s=mu(t,s),r=mu(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ho)}yu(n,r);var a;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(qi.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(qi.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ce("scroll",t),i||l===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};l6=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ni(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ym(t,e,n){var r=e.pendingProps;switch(Mc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return St(e.type)&&Go(),at(e),null;case 3:return r=e.stateNode,Bs(),ke(Nt),ke(ct),Yc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(io(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(Ju(tn),tn=null))),Hu(t,e),at(e),null;case 5:Wc(e);var s=Ur(aa.current);if(n=e.type,t!==null&&e.stateNode!=null)o6(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return at(e),null}if(t=Ur(_n.current),io(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[gn]=e,r[sa]=i,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(s=0;s<Ti.length;s++)Ce(Ti[s],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":B2(r,i),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ce("invalid",r);break;case"textarea":z2(r,i),Ce("invalid",r)}yu(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&so(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&so(r.textContent,l,t),s=["children",""+l]):qi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Ka(r),$2(r,i,!0);break;case"textarea":Ka(r),H2(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ho)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[gn]=e,t[sa]=r,a6(t,e,!1,!1),e.stateNode=t;e:{switch(a=vu(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),s=r;break;case"iframe":case"object":case"embed":Ce("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ti.length;s++)Ce(Ti[s],t);s=r;break;case"source":Ce("error",t),s=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),s=r;break;case"details":Ce("toggle",t),s=r;break;case"input":B2(t,r),s=du(t,r),Ce("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Le({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":z2(t,r),s=mu(t,r),Ce("invalid",t);break;default:s=r}yu(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?Fp(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Vp(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xi(t,c):typeof c=="number"&&Xi(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qi.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Ce("scroll",t):c!=null&&Nc(t,i,c,a))}switch(n){case"input":Ka(t),$2(t,r,!1);break;case"textarea":Ka(t),H2(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?As(t,!!r.multiple,i,!1):r.defaultValue!=null&&As(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)l6(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Ur(aa.current),Ur(_n.current),io(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(i=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:so(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return at(e),null;case 13:if(ke(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&Rt!==null&&e.mode&1&&!(e.flags&128))A0(),Fs(),e.flags|=98560,i=!1;else if(i=io(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[gn]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),i=!1}else tn!==null&&(Ju(tn),tn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Ge===0&&(Ge=3):ih())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return Bs(),Hu(t,e),t===null&&na(e.stateNode.containerInfo),at(e),null;case 10:return $c(e.type._context),at(e),null;case 17:return St(e.type)&&Go(),at(e),null;case 19:if(ke(Re),i=e.memoizedState,i===null)return at(e),null;if(r=(e.flags&128)!==0,a=i.rendering,a===null)if(r)Ni(i,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Jo(t),a!==null){for(e.flags|=128,Ni(i,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,t=a.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Re,Re.current&1|2),e.child}t=t.sibling}i.tail!==null&&Me()>zs&&(e.flags|=128,r=!0,Ni(i,!1),e.lanes=4194304)}else{if(!r)if(t=Jo(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ni(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Pe)return at(e),null}else 2*Me()-i.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,r=!0,Ni(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(n=i.last,n!==null?n.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Me(),e.sibling=null,n=Re.current,Ee(Re,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return sh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function qm(t,e){switch(Mc(e),e.tag){case 1:return St(e.type)&&Go(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),ke(Nt),ke(ct),Yc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wc(e),null;case 13:if(ke(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Re),null;case 4:return Bs(),null;case 10:return $c(e.type._context),null;case 22:case 23:return sh(),null;case 24:return null;default:return null}}var lo=!1,ut=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,X=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Gu(t,e,n){try{n()}catch(r){je(t,e,r)}}var Ld=!1;function Km(t,e){if(Tu=Bo,t=f0(),bc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,m=0,g=t,_=null;t:for(;;){for(var L;g!==n||s!==0&&g.nodeType!==3||(l=a+s),g!==i||r!==0&&g.nodeType!==3||(c=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(L=g.firstChild)!==null;)_=g,g=L;for(;;){if(g===t)break t;if(_===n&&++d===s&&(l=a),_===i&&++m===r&&(c=a),(L=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=L}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pu={focusedElem:t,selectionRange:n},Bo=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var T=I.memoizedProps,k=I.memoizedState,C=e.stateNode,x=C.getSnapshotBeforeUpdate(e.elementType===e.type?T:Zt(e.type,T),k);C.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var O=e.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(M){je(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return I=Ld,Ld=!1,I}function bi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Gu(e,n,i)}s=s.next}while(s!==r)}}function Ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function u6(t){var e=t.alternate;e!==null&&(t.alternate=null,u6(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[sa],delete e[Ou],delete e[Om],delete e[Lm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c6(t){return t.tag===5||t.tag===3||t.tag===4}function jd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c6(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ho));else if(r!==4&&(t=t.child,t!==null))for(Yu(t,e,n),t=t.sibling;t!==null;)Yu(t,e,n),t=t.sibling}function qu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}var Ze=null,en=!1;function Wn(t,e,n){for(n=n.child;n!==null;)h6(t,e,n),n=n.sibling}function h6(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:ut||Ns(n,e);case 6:var r=Ze,s=en;Ze=null,Wn(t,e,n),Ze=r,en=s,Ze!==null&&(en?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(en?(t=Ze,n=n.stateNode,t.nodeType===8?j1(t.parentNode,n):t.nodeType===1&&j1(t,n),Zi(t)):j1(Ze,n.stateNode));break;case 4:r=Ze,s=en,Ze=n.stateNode.containerInfo,en=!0,Wn(t,e,n),Ze=r,en=s;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Gu(n,e,a),s=s.next}while(s!==r)}Wn(t,e,n);break;case 1:if(!ut&&(Ns(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,e,l)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,Wn(t,e,n),ut=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function Dd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xm),e.forEach(function(r){var s=i8.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,en=!1;break e;case 3:Ze=l.stateNode.containerInfo,en=!0;break e;case 4:Ze=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(Ze===null)throw Error(z(160));h6(i,a,s),Ze=null,en=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){je(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d6(e,t),e=e.sibling}function d6(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),hn(t),r&4){try{bi(3,t,t.return),Ll(3,t)}catch(T){je(t,t.return,T)}try{bi(5,t,t.return)}catch(T){je(t,t.return,T)}}break;case 1:Qt(e,t),hn(t),r&512&&n!==null&&Ns(n,n.return);break;case 5:if(Qt(e,t),hn(t),r&512&&n!==null&&Ns(n,n.return),t.flags&32){var s=t.stateNode;try{Xi(s,"")}catch(T){je(t,t.return,T)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,a=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&jp(s,i),vu(l,a);var d=vu(l,i);for(a=0;a<c.length;a+=2){var m=c[a],g=c[a+1];m==="style"?Fp(s,g):m==="dangerouslySetInnerHTML"?Vp(s,g):m==="children"?Xi(s,g):Nc(s,m,g,d)}switch(l){case"input":fu(s,i);break;case"textarea":Dp(s,i);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var L=i.value;L!=null?As(s,!!i.multiple,L,!1):_!==!!i.multiple&&(i.defaultValue!=null?As(s,!!i.multiple,i.defaultValue,!0):As(s,!!i.multiple,i.multiple?[]:"",!1))}s[sa]=i}catch(T){je(t,t.return,T)}}break;case 6:if(Qt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(T){je(t,t.return,T)}}break;case 3:if(Qt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zi(e.containerInfo)}catch(T){je(t,t.return,T)}break;case 4:Qt(e,t),hn(t);break;case 13:Qt(e,t),hn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(nh=Me())),r&4&&Dd(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(d=ut)||m,Qt(e,t),ut=d):Qt(e,t),hn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(X=t,m=t.child;m!==null;){for(g=X=m;X!==null;){switch(_=X,L=_.child,_.tag){case 0:case 11:case 14:case 15:bi(4,_,_.return);break;case 1:Ns(_,_.return);var I=_.stateNode;if(typeof I.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(T){je(r,n,T)}}break;case 5:Ns(_,_.return);break;case 22:if(_.memoizedState!==null){Vd(g);continue}}L!==null?(L.return=_,X=L):Vd(g)}m=m.sibling}e:for(m=null,g=t;;){if(g.tag===5){if(m===null){m=g;try{s=g.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,c=g.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Mp("display",a))}catch(T){je(t,t.return,T)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(T){je(t,t.return,T)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Qt(e,t),hn(t),r&4&&Dd(t);break;case 21:break;default:Qt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c6(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Xi(s,""),r.flags&=-33);var i=jd(t);qu(t,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=jd(t);Yu(t,l,a);break;default:throw Error(z(161))}}catch(c){je(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qm(t,e,n){X=t,f6(t)}function f6(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var s=X,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||lo;if(!a){var l=s.alternate,c=l!==null&&l.memoizedState!==null||ut;l=lo;var d=ut;if(lo=a,(ut=c)&&!d)for(X=s;X!==null;)a=X,c=a.child,a.tag===22&&a.memoizedState!==null?Md(s):c!==null?(c.return=a,X=c):Md(s);for(;i!==null;)X=i,f6(i),i=i.sibling;X=s,lo=l,ut=d}bd(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,X=i):bd(t)}}function bd(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||Ll(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&wd(e,i,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wd(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Zi(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}ut||e.flags&512&&Wu(e)}catch(_){je(e,e.return,_)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function Vd(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function Md(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ll(4,e)}catch(c){je(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){je(e,s,c)}}var i=e.return;try{Wu(e)}catch(c){je(e,i,c)}break;case 5:var a=e.return;try{Wu(e)}catch(c){je(e,a,c)}}}catch(c){je(e,e.return,c)}if(e===t){X=null;break}var l=e.sibling;if(l!==null){l.return=e.return,X=l;break}X=e.return}}var Jm=Math.ceil,tl=Mn.ReactCurrentDispatcher,eh=Mn.ReactCurrentOwner,Ht=Mn.ReactCurrentBatchConfig,fe=0,Qe=null,Ue=null,tt=0,kt=0,Ss=Er(0),Ge=0,ca=null,Xr=0,jl=0,th=0,Vi=null,xt=null,nh=0,zs=1/0,An=null,nl=!1,Xu=null,ur=null,uo=!1,tr=null,rl=0,Mi=0,Ku=null,Po=-1,Io=0;function yt(){return fe&6?Me():Po!==-1?Po:Po=Me()}function cr(t){return t.mode&1?fe&2&&tt!==0?tt&-tt:Dm.transition!==null?(Io===0&&(Io=Qp()),Io):(t=ye,t!==0||(t=window.event,t=t===void 0?16:s0(t.type)),t):1}function on(t,e,n,r){if(50<Mi)throw Mi=0,Ku=null,Error(z(185));Ca(t,n,r),(!(fe&2)||t!==Qe)&&(t===Qe&&(!(fe&2)&&(jl|=n),Ge===4&&Jn(t,tt)),Ct(t,r),n===1&&fe===0&&!(e.mode&1)&&(zs=Me()+500,Il&&Nr()))}function Ct(t,e){var n=t.callbackNode;D3(t,e);var r=Uo(t,t===Qe?tt:0);if(r===0)n!==null&&Y2(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Y2(n),e===1)t.tag===0?jm(Fd.bind(null,t)):N0(Fd.bind(null,t)),Im(function(){!(fe&6)&&Nr()}),n=null;else{switch(Jp(r)){case 1:n=Tc;break;case 4:n=Xp;break;case 16:n=Fo;break;case 536870912:n=Kp;break;default:n=Fo}n=x6(n,p6.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function p6(t,e){if(Po=-1,Io=0,fe&6)throw Error(z(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var r=Uo(t,t===Qe?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=sl(t,r);else{e=r;var s=fe;fe|=2;var i=g6();(Qe!==t||tt!==e)&&(An=null,zs=Me()+500,Hr(t,e));do try{t8();break}catch(l){m6(t,l)}while(!0);Bc(),tl.current=i,fe=s,Ue!==null?e=0:(Qe=null,tt=0,e=Ge)}if(e!==0){if(e===2&&(s=Nu(t),s!==0&&(r=s,e=Qu(t,s))),e===1)throw n=ca,Hr(t,0),Jn(t,r),Ct(t,Me()),n;if(e===6)Jn(t,r);else{if(s=t.current.alternate,!(r&30)&&!Zm(s)&&(e=sl(t,r),e===2&&(i=Nu(t),i!==0&&(r=i,e=Qu(t,i))),e===1))throw n=ca,Hr(t,0),Jn(t,r),Ct(t,Me()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:jr(t,xt,An);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=nh+500-Me(),10<e)){if(Uo(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Ru(jr.bind(null,t,xt,An),e);break}jr(t,xt,An);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var a=31-an(r);i=1<<a,a=e[a],a>s&&(s=a),r&=~i}if(r=s,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jm(r/1960))-r,10<r){t.timeoutHandle=Ru(jr.bind(null,t,xt,An),r);break}jr(t,xt,An);break;case 5:jr(t,xt,An);break;default:throw Error(z(329))}}}return Ct(t,Me()),t.callbackNode===n?p6.bind(null,t):null}function Qu(t,e){var n=Vi;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=sl(t,e),t!==2&&(e=xt,xt=n,e!==null&&Ju(e)),t}function Ju(t){xt===null?xt=t:xt.push.apply(xt,t)}function Zm(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!ln(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~th,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function Fd(t){if(fe&6)throw Error(z(327));Rs();var e=Uo(t,0);if(!(e&1))return Ct(t,Me()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var r=Nu(t);r!==0&&(e=r,n=Qu(t,r))}if(n===1)throw n=ca,Hr(t,0),Jn(t,e),Ct(t,Me()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,xt,An),Ct(t,Me()),null}function rh(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(zs=Me()+500,Il&&Nr())}}function Kr(t){tr!==null&&tr.tag===0&&!(fe&6)&&Rs();var e=fe;fe|=1;var n=Ht.transition,r=ye;try{if(Ht.transition=null,ye=1,t)return t()}finally{ye=r,Ht.transition=n,fe=e,!(fe&6)&&Nr()}}function sh(){kt=Ss.current,ke(Ss)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Pm(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Mc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:Bs(),ke(Nt),ke(ct),Yc();break;case 5:Wc(r);break;case 4:Bs();break;case 13:ke(Re);break;case 19:ke(Re);break;case 10:$c(r.type._context);break;case 22:case 23:sh()}n=n.return}if(Qe=t,Ue=t=hr(t.current,null),tt=kt=e,Ge=0,ca=null,th=jl=Xr=0,xt=Vi=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}Fr=null}return t}function m6(t,e){do{var n=Ue;try{if(Bc(),Ao.current=el,Zo){for(var r=Oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Zo=!1}if(qr=0,qe=He=Oe=null,Di=!1,oa=0,eh.current=null,n===null||n.return===null){Ge=1,ca=e,Ue=null;break}e:{var i=t,a=n.return,l=n,c=e;if(e=tt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=l,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var _=m.alternate;_?(m.updateQueue=_.updateQueue,m.memoizedState=_.memoizedState,m.lanes=_.lanes):(m.updateQueue=null,m.memoizedState=null)}var L=Ad(a);if(L!==null){L.flags&=-257,kd(L,a,l,i,e),L.mode&1&&Cd(i,d,e),e=L,c=d;var I=e.updateQueue;if(I===null){var T=new Set;T.add(c),e.updateQueue=T}else I.add(c);break e}else{if(!(e&1)){Cd(i,d,e),ih();break e}c=Error(z(426))}}else if(Pe&&l.mode&1){var k=Ad(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),kd(k,a,l,i,e),Fc($s(c,l));break e}}i=c=$s(c,l),Ge!==4&&(Ge=2),Vi===null?Vi=[i]:Vi.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var C=J0(i,c,e);_d(i,C);break e;case 1:l=c;var x=i.type,O=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(ur===null||!ur.has(O)))){i.flags|=65536,e&=-e,i.lanes|=e;var M=Z0(i,l,e);_d(i,M);break e}}i=i.return}while(i!==null)}v6(n)}catch($){e=$,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function g6(){var t=tl.current;return tl.current=el,t===null?el:t}function ih(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Qe===null||!(Xr&268435455)&&!(jl&268435455)||Jn(Qe,tt)}function sl(t,e){var n=fe;fe|=2;var r=g6();(Qe!==t||tt!==e)&&(An=null,Hr(t,e));do try{e8();break}catch(s){m6(t,s)}while(!0);if(Bc(),fe=n,tl.current=r,Ue!==null)throw Error(z(261));return Qe=null,tt=0,Ge}function e8(){for(;Ue!==null;)y6(Ue)}function t8(){for(;Ue!==null&&!A3();)y6(Ue)}function y6(t){var e=w6(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?v6(t):Ue=e,eh.current=null}function v6(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qm(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Ue=null;return}}else if(n=Ym(n,e,kt),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);Ge===0&&(Ge=5)}function jr(t,e,n){var r=ye,s=Ht.transition;try{Ht.transition=null,ye=1,n8(t,e,n,r)}finally{Ht.transition=s,ye=r}return null}function n8(t,e,n,r){do Rs();while(tr!==null);if(fe&6)throw Error(z(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(b3(t,i),t===Qe&&(Ue=Qe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,x6(Fo,function(){return Rs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ht.transition,Ht.transition=null;var a=ye;ye=1;var l=fe;fe|=4,eh.current=null,Km(t,n),d6(n,t),Em(Pu),Bo=!!Tu,Pu=Tu=null,t.current=n,Qm(n),k3(),fe=l,ye=a,Ht.transition=i}else t.current=n;if(uo&&(uo=!1,tr=t,rl=s),i=t.pendingLanes,i===0&&(ur=null),I3(n.stateNode),Ct(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(nl)throw nl=!1,t=Xu,Xu=null,t;return rl&1&&t.tag!==0&&Rs(),i=t.pendingLanes,i&1?t===Ku?Mi++:(Mi=0,Ku=t):Mi=0,Nr(),null}function Rs(){if(tr!==null){var t=Jp(rl),e=Ht.transition,n=ye;try{if(Ht.transition=null,ye=16>t?16:t,tr===null)var r=!1;else{if(t=tr,tr=null,rl=0,fe&6)throw Error(z(331));var s=fe;for(fe|=4,X=t.current;X!==null;){var i=X,a=i.child;if(X.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(X=d;X!==null;){var m=X;switch(m.tag){case 0:case 11:case 15:bi(8,m,i)}var g=m.child;if(g!==null)g.return=m,X=g;else for(;X!==null;){m=X;var _=m.sibling,L=m.return;if(u6(m),m===d){X=null;break}if(_!==null){_.return=L,X=_;break}X=L}}}var I=i.alternate;if(I!==null){var T=I.child;if(T!==null){I.child=null;do{var k=T.sibling;T.sibling=null,T=k}while(T!==null)}}X=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,X=a;else e:for(;X!==null;){if(i=X,i.flags&2048)switch(i.tag){case 0:case 11:case 15:bi(9,i,i.return)}var C=i.sibling;if(C!==null){C.return=i.return,X=C;break e}X=i.return}}var x=t.current;for(X=x;X!==null;){a=X;var O=a.child;if(a.subtreeFlags&2064&&O!==null)O.return=a,X=O;else e:for(a=x;X!==null;){if(l=X,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ll(9,l)}}catch($){je(l,l.return,$)}if(l===a){X=null;break e}var M=l.sibling;if(M!==null){M.return=l.return,X=M;break e}X=l.return}}if(fe=s,Nr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Cl,t)}catch{}r=!0}return r}finally{ye=n,Ht.transition=e}}return!1}function Ud(t,e,n){e=$s(n,e),e=J0(t,e,1),t=lr(t,e,1),e=yt(),t!==null&&(Ca(t,1,e),Ct(t,e))}function je(t,e,n){if(t.tag===3)Ud(t,t,n);else for(;e!==null;){if(e.tag===3){Ud(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){t=$s(n,t),t=Z0(e,t,1),e=lr(e,t,1),t=yt(),e!==null&&(Ca(e,1,t),Ct(e,t));break}}e=e.return}}function r8(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(tt&n)===n&&(Ge===4||Ge===3&&(tt&130023424)===tt&&500>Me()-nh?Hr(t,0):th|=n),Ct(t,e)}function _6(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=yt();t=jn(t,e),t!==null&&(Ca(t,e,n),Ct(t,n))}function s8(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_6(t,n)}function i8(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),_6(t,n)}var w6;w6=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,Wm(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Pe&&e.flags&1048576&&S0(e,qo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;To(t,e),t=e.pendingProps;var s=Ms(e,ct.current);Is(e,n),s=Xc(null,e,r,t,s,n);var i=Kc();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(i=!0,Wo(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Hc(e),s.updater=Ol,e.stateNode=s,s._reactInternals=e,Mu(e,r,t,n),e=Bu(null,e,r,!0,i,n)):(e.tag=0,Pe&&i&&Vc(e),gt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(To(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=o8(r),t=Zt(r,t),s){case 0:e=Uu(null,e,r,t,n);break e;case 1:e=Id(null,e,r,t,n);break e;case 11:e=Td(null,e,r,t,n);break e;case 14:e=Pd(null,e,r,Zt(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Uu(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Id(t,e,r,s,n);case 3:e:{if(r6(e),t===null)throw Error(z(387));r=e.pendingProps,i=e.memoizedState,s=i.element,I0(t,e),Qo(e,r,null,n);var a=e.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=$s(Error(z(423)),e),e=Rd(t,e,r,n,s);break e}else if(r!==s){s=$s(Error(z(424)),e),e=Rd(t,e,r,n,s);break e}else for(Rt=or(e.stateNode.containerInfo.firstChild),Ot=e,Pe=!0,tn=null,n=T0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),r===s){e=Dn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return R0(e),t===null&&Du(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,a=s.children,Iu(r,s)?a=null:i!==null&&Iu(r,i)&&(e.flags|=32),n6(t,e),gt(t,e,a,n),e.child;case 6:return t===null&&Du(e),null;case 13:return s6(t,e,n);case 4:return Gc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Us(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Td(t,e,r,s,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,a=s.value,Ee(Xo,r._currentValue),r._currentValue=a,i!==null)if(ln(i.value,a)){if(i.children===s.children&&!Nt.current){e=Dn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=In(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),bu(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===e.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(z(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),bu(a,n,e),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===e){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}gt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Is(e,n),s=Wt(s),r=r(s),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,s=Zt(r,e.pendingProps),s=Zt(r.type,s),Pd(t,e,r,s,n);case 15:return e6(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),To(t,e),e.tag=1,St(r)?(t=!0,Wo(e)):t=!1,Is(e,n),Q0(e,r,s),Mu(e,r,s,n),Bu(null,e,r,!0,t,n);case 19:return i6(t,e,n);case 22:return t6(t,e,n)}throw Error(z(156,e.tag))};function x6(t,e){return qp(t,e)}function a8(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new a8(t,e,n,r)}function ah(t){return t=t.prototype,!(!t||!t.isReactComponent)}function o8(t){if(typeof t=="function")return ah(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cc)return 11;if(t===Ac)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ro(t,e,n,r,s,i){var a=2;if(r=t,typeof t=="function")ah(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ps:return Gr(n.children,s,i,e);case Sc:a=8,s|=8;break;case lu:return t=$t(12,n,e,s|2),t.elementType=lu,t.lanes=i,t;case uu:return t=$t(13,n,e,s),t.elementType=uu,t.lanes=i,t;case cu:return t=$t(19,n,e,s),t.elementType=cu,t.lanes=i,t;case Rp:return Dl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pp:a=10;break e;case Ip:a=9;break e;case Cc:a=11;break e;case Ac:a=14;break e;case qn:a=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=$t(a,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Gr(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function Dl(t,e,n,r){return t=$t(22,t,r,e),t.elementType=Rp,t.lanes=n,t.stateNode={isHidden:!1},t}function $1(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function z1(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function l8(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=N1(0),this.expirationTimes=N1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=N1(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function oh(t,e,n,r,s,i,a,l,c){return t=new l8(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=$t(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hc(i),t}function u8(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function E6(t){if(!t)return yr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(St(n))return E0(t,n,e)}return e}function N6(t,e,n,r,s,i,a,l,c){return t=oh(n,r,!0,t,s,i,a,l,c),t.context=E6(null),n=t.current,r=yt(),s=cr(n),i=In(r,s),i.callback=e??null,lr(n,i,s),t.current.lanes=s,Ca(t,s,r),Ct(t,r),t}function bl(t,e,n,r){var s=e.current,i=yt(),a=cr(s);return n=E6(n),e.context===null?e.context=n:e.pendingContext=n,e=In(i,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lr(s,e,a),t!==null&&(on(t,s,a,i),Co(t,s,a)),a}function il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lh(t,e){Bd(t,e),(t=t.alternate)&&Bd(t,e)}function c8(){return null}var S6=typeof reportError=="function"?reportError:function(t){console.error(t)};function uh(t){this._internalRoot=t}Vl.prototype.render=uh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));bl(t,e,null,null)};Vl.prototype.unmount=uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){bl(null,t,null,null)}),e[Ln]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=t0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&r0(t)}};function ch(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $d(){}function h8(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=il(a);i.call(d)}}var a=N6(e,r,t,0,null,!1,!1,"",$d);return t._reactRootContainer=a,t[Ln]=a.current,na(t.nodeType===8?t.parentNode:t),Kr(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=il(c);l.call(d)}}var c=oh(t,0,!1,null,null,!1,!1,"",$d);return t._reactRootContainer=c,t[Ln]=c.current,na(t.nodeType===8?t.parentNode:t),Kr(function(){bl(e,c,n,r)}),c}function Fl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var l=s;s=function(){var c=il(a);l.call(c)}}bl(e,a,t,s)}else a=h8(n,e,t,s,r);return il(a)}Zp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ki(e.pendingLanes);n!==0&&(Pc(e,n|1),Ct(e,Me()),!(fe&6)&&(zs=Me()+500,Nr()))}break;case 13:Kr(function(){var r=jn(t,1);if(r!==null){var s=yt();on(r,t,1,s)}}),lh(t,1)}};Ic=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=yt();on(e,t,134217728,n)}lh(t,134217728)}};e0=function(t){if(t.tag===13){var e=cr(t),n=jn(t,e);if(n!==null){var r=yt();on(n,t,e,r)}lh(t,e)}};t0=function(){return ye};n0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};wu=function(t,e,n){switch(e){case"input":if(fu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Pl(r);if(!s)throw Error(z(90));Lp(r),fu(r,s)}}}break;case"textarea":Dp(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};$p=rh;zp=Kr;var d8={usingClientEntryPoint:!1,Events:[ka,vs,Pl,Up,Bp,rh]},Si={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},f8={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wp(t),t===null?null:t.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||c8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{Cl=co.inject(f8),vn=co}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d8;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ch(e))throw Error(z(200));return u8(t,e,null,n)};bt.createRoot=function(t,e){if(!ch(t))throw Error(z(299));var n=!1,r="",s=S6;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=oh(t,1,!1,null,null,n,!1,r,s),t[Ln]=e.current,na(t.nodeType===8?t.parentNode:t),new uh(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=Wp(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return Kr(t)};bt.hydrate=function(t,e,n){if(!Ml(e))throw Error(z(200));return Fl(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!ch(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=S6;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=N6(e,null,t,1,n??null,s,!1,i,a),t[Ln]=e.current,na(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Vl(e)};bt.render=function(t,e,n){if(!Ml(e))throw Error(z(200));return Fl(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(z(40));return t._reactRootContainer?(Kr(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};bt.unstable_batchedUpdates=rh;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ml(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Fl(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function C6(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C6)}catch(t){console.error(t)}}C6(),Cp.exports=bt;var p8=Cp.exports,zd=p8;au.createRoot=zd.createRoot,au.hydrateRoot=zd.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ha.apply(null,arguments)}var nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nr||(nr={}));const Hd="popstate";function m8(t){t===void 0&&(t={});function e(s,i){let{pathname:a="/",search:l="",hash:c=""}=ts(s.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Zu("",{pathname:a,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(s,i){let a=s.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let c=s.location.href,d=c.indexOf("#");l=d===-1?c:c.slice(0,d)}return l+"#"+(typeof i=="string"?i:al(i))}function r(s,i){Ul(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return y8(e,n,r,t)}function $e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ul(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function g8(){return Math.random().toString(36).substr(2,8)}function Gd(t,e){return{usr:t.state,key:t.key,idx:e}}function Zu(t,e,n,r){return n===void 0&&(n=null),ha({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ts(e):e,{state:n,key:e&&e.key||r||g8()})}function al(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ts(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function y8(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,l=nr.Pop,c=null,d=m();d==null&&(d=0,a.replaceState(ha({},a.state,{idx:d}),""));function m(){return(a.state||{idx:null}).idx}function g(){l=nr.Pop;let k=m(),C=k==null?null:k-d;d=k,c&&c({action:l,location:T.location,delta:C})}function _(k,C){l=nr.Push;let x=Zu(T.location,k,C);n&&n(x,k),d=m()+1;let O=Gd(x,d),M=T.createHref(x);try{a.pushState(O,"",M)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;s.location.assign(M)}i&&c&&c({action:l,location:T.location,delta:1})}function L(k,C){l=nr.Replace;let x=Zu(T.location,k,C);n&&n(x,k),d=m();let O=Gd(x,d),M=T.createHref(x);a.replaceState(O,"",M),i&&c&&c({action:l,location:T.location,delta:0})}function I(k){let C=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof k=="string"?k:al(k);return x=x.replace(/ $/,"%20"),$e(C,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,C)}let T={get action(){return l},get location(){return t(s,a)},listen(k){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Hd,g),c=k,()=>{s.removeEventListener(Hd,g),c=null}},createHref(k){return e(s,k)},createURL:I,encodeLocation(k){let C=I(k);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:_,replace:L,go(k){return a.go(k)}};return T}var Wd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Wd||(Wd={}));function v8(t,e,n){return n===void 0&&(n="/"),_8(t,e,n)}function _8(t,e,n,r){let s=typeof e=="string"?ts(e):e,i=hh(s.pathname||"/",n);if(i==null)return null;let a=A6(t);w8(a);let l=null,c=O8(i);for(let d=0;l==null&&d<a.length;++d)l=P8(a[d],c);return l}function A6(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,a,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&($e(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=dr([r,c.relativePath]),m=n.concat(c);i.children&&i.children.length>0&&($e(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),A6(i.children,e,m,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:k8(d,i.index),routesMeta:m})};return t.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,a);else for(let c of k6(i.path))s(i,a,c)}),e}function k6(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=k6(r.join("/")),l=[];return l.push(...a.map(c=>c===""?i:[i,c].join("/"))),s&&l.push(...a),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function w8(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:T8(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const x8=/^:[\w-]+$/,E8=3,N8=2,S8=1,C8=10,A8=-2,Yd=t=>t==="*";function k8(t,e){let n=t.split("/"),r=n.length;return n.some(Yd)&&(r+=A8),e&&(r+=N8),n.filter(s=>!Yd(s)).reduce((s,i)=>s+(x8.test(i)?E8:i===""?S8:C8),r)}function T8(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function P8(t,e,n){let{routesMeta:r}=t,s={},i="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,m=i==="/"?e:e.slice(i.length)||"/",g=I8({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),_=c.route;if(!g)return null;Object.assign(s,g.params),a.push({params:s,pathname:dr([i,g.pathname]),pathnameBase:V8(dr([i,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(i=dr([i,g.pathnameBase]))}return a}function I8(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=R8(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,m,g)=>{let{paramName:_,isOptional:L}=m;if(_==="*"){let T=l[g]||"";a=i.slice(0,i.length-T.length).replace(/(.)\/+$/,"$1")}const I=l[g];return L&&!I?d[_]=void 0:d[_]=(I||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:a,pattern:t}}function R8(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ul(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function O8(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ul(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function hh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const L8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,j8=t=>L8.test(t);function D8(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?ts(t):t,i;if(n)if(j8(n))i=n;else{if(n.includes("//")){let a=n;n=I6(n),Ul(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?i=qd(n.substring(1),"/"):i=qd(n,e)}else i=e;return{pathname:i,search:M8(r),hash:F8(s)}}function qd(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function H1(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function b8(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function T6(t,e){let n=b8(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function P6(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=ts(t):(s=ha({},t),$e(!s.pathname||!s.pathname.includes("?"),H1("?","pathname","search",s)),$e(!s.pathname||!s.pathname.includes("#"),H1("#","pathname","hash",s)),$e(!s.search||!s.search.includes("#"),H1("#","search","hash",s)));let i=t===""||s.pathname==="",a=i?"/":s.pathname,l;if(a==null)l=n;else{let g=e.length-1;if(!r&&a.startsWith("..")){let _=a.split("/");for(;_[0]==="..";)_.shift(),g-=1;s.pathname=_.join("/")}l=g>=0?e[g]:"/"}let c=D8(s,l),d=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const I6=t=>t.replace(/\/\/+/g,"/"),dr=t=>I6(t.join("/")),V8=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),M8=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,F8=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function U8(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const R6=["post","put","patch","delete"];new Set(R6);const B8=["get",...R6];new Set(B8);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},da.apply(null,arguments)}const dh=F.createContext(null),$8=F.createContext(null),ns=F.createContext(null),Bl=F.createContext(null),Sr=F.createContext({outlet:null,matches:[],isDataRoute:!1}),O6=F.createContext(null);function z8(t,e){let{relative:n}=e===void 0?{}:e;Pa()||$e(!1);let{basename:r,navigator:s}=F.useContext(ns),{hash:i,pathname:a,search:l}=j6(t,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:dr([r,a])),s.createHref({pathname:c,search:l,hash:i})}function Pa(){return F.useContext(Bl)!=null}function Ia(){return Pa()||$e(!1),F.useContext(Bl).location}function L6(t){F.useContext(ns).static||F.useLayoutEffect(t)}function $l(){let{isDataRoute:t}=F.useContext(Sr);return t?r9():H8()}function H8(){Pa()||$e(!1);let t=F.useContext(dh),{basename:e,future:n,navigator:r}=F.useContext(ns),{matches:s}=F.useContext(Sr),{pathname:i}=Ia(),a=JSON.stringify(T6(s,n.v7_relativeSplatPath)),l=F.useRef(!1);return L6(()=>{l.current=!0}),F.useCallback(function(d,m){if(m===void 0&&(m={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let g=P6(d,JSON.parse(a),i,m.relative==="path");t==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:dr([e,g.pathname])),(m.replace?r.replace:r.push)(g,m.state,m)},[e,r,a,i,t])}function G8(){let{matches:t}=F.useContext(Sr),e=t[t.length-1];return e?e.params:{}}function j6(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=F.useContext(ns),{matches:s}=F.useContext(Sr),{pathname:i}=Ia(),a=JSON.stringify(T6(s,r.v7_relativeSplatPath));return F.useMemo(()=>P6(t,JSON.parse(a),i,n==="path"),[t,a,i,n])}function W8(t,e){return Y8(t,e)}function Y8(t,e,n,r){Pa()||$e(!1);let{navigator:s}=F.useContext(ns),{matches:i}=F.useContext(Sr),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let d=Ia(),m;if(e){var g;let k=typeof e=="string"?ts(e):e;c==="/"||(g=k.pathname)!=null&&g.startsWith(c)||$e(!1),m=k}else m=d;let _=m.pathname||"/",L=_;if(c!=="/"){let k=c.replace(/^\//,"").split("/");L="/"+_.replace(/^\//,"").split("/").slice(k.length).join("/")}let I=v8(t,{pathname:L}),T=J8(I&&I.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:dr([c,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:dr([c,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return e&&T?F.createElement(Bl.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:nr.Pop}},T):T}function q8(){let t=n9(),e=U8(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:s},n):null,null)}const X8=F.createElement(q8,null);class K8 extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Sr.Provider,{value:this.props.routeContext},F.createElement(O6.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q8(t){let{routeContext:e,match:n,children:r}=t,s=F.useContext(dh);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Sr.Provider,{value:e},r)}function J8(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let m=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);m>=0||$e(!1),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let g=a[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=m),g.route.id){let{loaderData:_,errors:L}=n,I=g.route.loader&&_[g.route.id]===void 0&&(!L||L[g.route.id]===void 0);if(g.route.lazy||I){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((m,g,_)=>{let L,I=!1,T=null,k=null;n&&(L=l&&g.route.id?l[g.route.id]:void 0,T=g.route.errorElement||X8,c&&(d<0&&_===0?(s9("route-fallback"),I=!0,k=null):d===_&&(I=!0,k=g.route.hydrateFallbackElement||null)));let C=e.concat(a.slice(0,_+1)),x=()=>{let O;return L?O=T:I?O=k:g.route.Component?O=F.createElement(g.route.Component,null):g.route.element?O=g.route.element:O=m,F.createElement(Q8,{match:g,routeContext:{outlet:m,matches:C,isDataRoute:n!=null},children:O})};return n&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?F.createElement(K8,{location:n.location,revalidation:n.revalidation,component:T,error:L,children:x(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):x()},null)}var D6=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D6||{}),b6=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(b6||{});function Z8(t){let e=F.useContext(dh);return e||$e(!1),e}function e9(t){let e=F.useContext($8);return e||$e(!1),e}function t9(t){let e=F.useContext(Sr);return e||$e(!1),e}function V6(t){let e=t9(),n=e.matches[e.matches.length-1];return n.route.id||$e(!1),n.route.id}function n9(){var t;let e=F.useContext(O6),n=e9(),r=V6();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function r9(){let{router:t}=Z8(D6.UseNavigateStable),e=V6(b6.UseNavigateStable),n=F.useRef(!1);return L6(()=>{n.current=!0}),F.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,da({fromRouteId:e},i)))},[t,e])}const Xd={};function s9(t,e,n){Xd[t]||(Xd[t]=!0)}function i9(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Dr(t){$e(!1)}function a9(t){let{basename:e="/",children:n=null,location:r,navigationType:s=nr.Pop,navigator:i,static:a=!1,future:l}=t;Pa()&&$e(!1);let c=e.replace(/^\/*/,"/"),d=F.useMemo(()=>({basename:c,navigator:i,static:a,future:da({v7_relativeSplatPath:!1},l)}),[c,l,i,a]);typeof r=="string"&&(r=ts(r));let{pathname:m="/",search:g="",hash:_="",state:L=null,key:I="default"}=r,T=F.useMemo(()=>{let k=hh(m,c);return k==null?null:{location:{pathname:k,search:g,hash:_,state:L,key:I},navigationType:s}},[c,m,g,_,L,I,s]);return T==null?null:F.createElement(ns.Provider,{value:d},F.createElement(Bl.Provider,{children:n,value:T}))}function o9(t){let{children:e,location:n}=t;return W8(ec(e),n)}new Promise(()=>{});function ec(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(r,s)=>{if(!F.isValidElement(r))return;let i=[...e,s];if(r.type===F.Fragment){n.push.apply(n,ec(r.props.children,i));return}r.type!==Dr&&$e(!1),!r.props.index||!r.props.children||$e(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ec(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tc.apply(null,arguments)}function l9(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function u9(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function c9(t,e){return t.button===0&&(!e||e==="_self")&&!u9(t)}const h9=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],d9="6";try{window.__reactRouterVersion=d9}catch{}const f9="startTransition",Kd=r3[f9];function p9(t){let{basename:e,children:n,future:r,window:s}=t,i=F.useRef();i.current==null&&(i.current=m8({window:s,v5Compat:!0}));let a=i.current,[l,c]=F.useState({action:a.action,location:a.location}),{v7_startTransition:d}=r||{},m=F.useCallback(g=>{d&&Kd?Kd(()=>c(g)):c(g)},[c,d]);return F.useLayoutEffect(()=>a.listen(m),[a,m]),F.useEffect(()=>i9(r),[r]),F.createElement(a9,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const m9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mn=F.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:a,state:l,target:c,to:d,preventScrollReset:m,viewTransition:g}=e,_=l9(e,h9),{basename:L}=F.useContext(ns),I,T=!1;if(typeof d=="string"&&g9.test(d)&&(I=d,m9))try{let O=new URL(window.location.href),M=d.startsWith("//")?new URL(O.protocol+d):new URL(d),$=hh(M.pathname,L);M.origin===O.origin&&$!=null?d=$+M.search+M.hash:T=!0}catch{}let k=z8(d,{relative:s}),C=y9(d,{replace:a,state:l,target:c,preventScrollReset:m,relative:s,viewTransition:g});function x(O){r&&r(O),O.defaultPrevented||C(O)}return F.createElement("a",tc({},_,{href:I||k,onClick:T||i?r:x,ref:n,target:c}))});var Qd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Qd||(Qd={}));var Jd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Jd||(Jd={}));function y9(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:a,viewTransition:l}=e===void 0?{}:e,c=$l(),d=Ia(),m=j6(t,{relative:a});return F.useCallback(g=>{if(c9(g,n)){g.preventDefault();let _=r!==void 0?r:al(d)===al(m);c(t,{replace:_,state:s,preventScrollReset:i,relative:a,viewTransition:l})}},[d,c,m,r,s,n,t,i,a,l])}const v9=()=>{};var Zd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M6=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_9=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},F6={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,d=c?t[s+2]:0,m=i>>2,g=(i&3)<<4|l>>4;let _=(l&15)<<2|d>>6,L=d&63;c||(L=64,a||(_=64)),r.push(n[m],n[g],n[_],n[L])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M6(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_9(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||g==null)throw new w9;const _=i<<2|l>>4;if(r.push(_),d!==64){const L=l<<4&240|d>>2;if(r.push(L),g!==64){const I=d<<6&192|g;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class w9 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x9=function(t){const e=M6(t);return F6.encodeByteArray(e,!0)},U6=function(t){return x9(t).replace(/\./g,"")},B6=function(t){try{return F6.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E9(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N9=()=>E9().__FIREBASE_DEFAULTS__,S9=()=>{if(typeof process>"u"||typeof Zd>"u")return;const t=Zd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},C9=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&B6(t[1]);return e&&JSON.parse(e)},A9=()=>{try{return v9()||N9()||S9()||C9()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},k9=t=>{var e;return(e=A9())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function T9(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wn())}function P9(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function I9(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function R9(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function O9(){try{return typeof indexedDB=="object"}catch{return!1}}function L9(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j9="FirebaseError";class Cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=j9,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?D9(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Cr(s,l,r)}}function D9(t,e){return t.replace(b9,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const b9=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $6(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function V9(t,e){const n=new M9(t,e);return n.subscribe.bind(n)}class M9{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");F9(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=G1),s.error===void 0&&(s.error=G1),s.complete===void 0&&(s.complete=G1);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F9(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function G1(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z6(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}class Hs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const U9={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},B9=ge.INFO,$9={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},z9=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$9[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fh{constructor(e){this.name=e,this._logLevel=B9,this._logHandler=z9,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?U9[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const H9=(t,e)=>e.some(n=>t instanceof n);let ef,tf;function G9(){return ef||(ef=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W9(){return tf||(tf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H6=new WeakMap,nc=new WeakMap,G6=new WeakMap,W1=new WeakMap,ph=new WeakMap;function Y9(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(fr(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&H6.set(n,t)}).catch(()=>{}),ph.set(e,t),e}function q9(t){if(nc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});nc.set(t,e)}let rc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||G6.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function X9(t){rc=t(rc)}function K9(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Y1(this),e,...n);return G6.set(r,e.sort?e.sort():[e]),fr(r)}:W9().includes(t)?function(...e){return t.apply(Y1(this),e),fr(H6.get(this))}:function(...e){return fr(t.apply(Y1(this),e))}}function Q9(t){return typeof t=="function"?K9(t):(t instanceof IDBTransaction&&q9(t),H9(t,G9())?new Proxy(t,rc):t)}function fr(t){if(t instanceof IDBRequest)return Y9(t);if(W1.has(t))return W1.get(t);const e=Q9(t);return e!==t&&(W1.set(t,e),ph.set(e,t)),e}const Y1=t=>ph.get(t);function J9(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=fr(a);return r&&a.addEventListener("upgradeneeded",c=>{r(fr(a.result),c.oldVersion,c.newVersion,fr(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Z9=["get","getKey","getAll","getAllKeys","count"],e5=["put","add","delete","clear"],q1=new Map;function nf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(q1.get(e))return q1.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=e5.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Z9.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&c.done]))[0]};return q1.set(e,i),i}X9(t=>({...t,get:(e,n,r)=>nf(e,n)||t.get(e,n,r),has:(e,n)=>!!nf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(n5(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function n5(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sc="@firebase/app",rf="0.15.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new fh("@firebase/app"),r5="@firebase/app-compat",s5="@firebase/analytics-compat",i5="@firebase/analytics",a5="@firebase/app-check-compat",o5="@firebase/app-check",l5="@firebase/auth",u5="@firebase/auth-compat",c5="@firebase/database",h5="@firebase/data-connect",d5="@firebase/database-compat",f5="@firebase/functions",p5="@firebase/functions-compat",m5="@firebase/installations",g5="@firebase/installations-compat",y5="@firebase/messaging",v5="@firebase/messaging-compat",_5="@firebase/performance",w5="@firebase/performance-compat",x5="@firebase/remote-config",E5="@firebase/remote-config-compat",N5="@firebase/storage",S5="@firebase/storage-compat",C5="@firebase/firestore",A5="@firebase/ai",k5="@firebase/firestore-compat",T5="firebase",P5="12.16.0",I5={[sc]:"fire-core",[r5]:"fire-core-compat",[i5]:"fire-analytics",[s5]:"fire-analytics-compat",[o5]:"fire-app-check",[a5]:"fire-app-check-compat",[l5]:"fire-auth",[u5]:"fire-auth-compat",[c5]:"fire-rtdb",[h5]:"fire-data-connect",[d5]:"fire-rtdb-compat",[f5]:"fire-fn",[p5]:"fire-fn-compat",[m5]:"fire-iid",[g5]:"fire-iid-compat",[y5]:"fire-fcm",[v5]:"fire-fcm-compat",[_5]:"fire-perf",[w5]:"fire-perf-compat",[x5]:"fire-rc",[E5]:"fire-rc-compat",[N5]:"fire-gcs",[S5]:"fire-gcs-compat",[C5]:"fire-fst",[k5]:"fire-fst-compat",[A5]:"fire-vertex","fire-js":"fire-js",[T5]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R5=new Map,O5=new Map,sf=new Map;function af(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gs(t){const e=t.name;if(sf.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;sf.set(e,t);for(const n of R5.values())af(n,t);for(const n of O5.values())af(n,t);return!0}function br(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L5={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mh=new Ra("app","Firebase",L5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=P5;function pr(t,e,n){let r=I5[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(a.join(" "));return}Gs(new Hs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j5="firebase-heartbeat-database",D5=1,fa="firebase-heartbeat-store";let X1=null;function W6(){return X1||(X1=J9(j5,D5,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fa)}catch(n){console.warn(n)}}}}).catch(t=>{throw mh.create("idb-open",{originalErrorMessage:t.message})})),X1}async function b5(t){try{const n=(await W6()).transaction(fa),r=await n.objectStore(fa).get(Y6(t));return await n.done,r}catch(e){if(e instanceof Cr)bn.warn(e.message);else{const n=mh.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function of(t,e){try{const r=(await W6()).transaction(fa,"readwrite");await r.objectStore(fa).put(e,Y6(t)),await r.done}catch(n){if(n instanceof Cr)bn.warn(n.message);else{const r=mh.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function Y6(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V5=1024,M5=30;class F5{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new B5(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>M5){const a=$5(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lf(),{heartbeatsToSend:r,unsentEntries:s}=U5(this._heartbeatsCache.heartbeats),i=U6(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return bn.warn(n),""}}}function lf(){return new Date().toISOString().substring(0,10)}function U5(t,e=V5){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),uf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class B5{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return O9()?L9().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await b5(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return of(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return of(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function uf(t){return U6(JSON.stringify({version:2,heartbeats:t})).length}function $5(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z5(t){Gs(new Hs("platform-logger",e=>new t5(e),"PRIVATE")),Gs(new Hs("heartbeat",e=>new F5(e),"PRIVATE")),pr(sc,rf,t),pr(sc,rf,"esm2020"),pr("fire-js","")}z5("");var H5="firebase",G5="12.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr(H5,G5,"app");function q6(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const W5=q6,X6=new Ra("auth","Firebase",q6());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new fh("@firebase/auth");function Y5(t,...e){ol.logLevel<=ge.WARN&&ol.warn(`Auth (${zl}): ${t}`,...e)}function Oo(t,...e){ol.logLevel<=ge.ERROR&&ol.error(`Auth (${zl}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t,...e){throw gh(t,...e)}function K6(t,...e){return gh(t,...e)}function Q6(t,e,n){const r={...W5(),[e]:n};return new Ra("auth","Firebase",r).create(e,{appName:t.name})}function Lo(t){return Q6(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return X6.create(t,...e)}function me(t,e,...n){if(!t)throw gh(e,...n)}function Fi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function ll(t,e){t||Fi(e)}function q5(){return hf()==="http:"||hf()==="https:"}function hf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X5(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q5()||I9()||"connection"in navigator)?navigator.onLine:!0}function K5(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,ll(n>e,"Short delay should be less than long delay!"),this.isMobile=T9()||R9()}get(){return X5()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q5(t,e){ll(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J6{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J5={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z5=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eg=new Oa(3e4,6e4);function Z6(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Hl(t,e,n,r,s={}){return e7(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=$6({...a,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:c,...i};return P9()||(d.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&z6(t.emulatorConfig.host)&&(d.credentials="include"),J6.fetch()(await t7(t,t.config.apiHost,n,l),d)})}async function e7(t,e,n){t._canInitEmulator=!1;const r={...J5,...e};try{const s=new tg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ho(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ho(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw ho(t,"user-disabled",a);const m=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Q6(t,m,d);cf(t,m)}}catch(s){if(s instanceof Cr)throw s;cf(t,"network-request-failed",{message:String(s)})}}async function t7(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Q5(t.config,s):`${t.config.apiScheme}://${s}`;return Z5.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class tg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(K6(this.auth,"network-request-failed")),eg.get())})}}function ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=K6(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(t,e){return Hl(t,"POST","/v1/accounts:delete",e)}async function ul(t,e){return Hl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rg(t,e=!1){const n=Qr(t),r=await n.getIdToken(e),s=n7(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ui(K1(s.auth_time)),issuedAtTime:Ui(K1(s.iat)),expirationTime:Ui(K1(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function K1(t){return Number(t)*1e3}function n7(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=B6(n);return s?JSON.parse(s):(Oo("Failed to decode base64 JWT payload"),null)}catch(s){return Oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function df(t){const e=n7(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cr&&sg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t){var g;const e=t.auth,n=await t.getIdToken(),r=await ic(t,ul(e,{idToken:n}));me(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?r7(s.providerUserInfo):[],a=og(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ac(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,m)}async function ag(t){const e=Qr(t);await cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function og(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function r7(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(t,e){const n=await e7(t,{},async()=>{const r=$6({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await t7(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&z6(t.emulatorConfig.host)&&(c.credentials="include"),J6.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ug(t,e){return Hl(t,"POST","/v2/accounts:revokeToken",Z6(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):df(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=df(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await lg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Os;return r&&(me(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new ig(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ac(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ic(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rg(this,e)}reload(){return ag(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(br(this.auth.app))return Promise.reject(Lo(this.auth));const e=await this.getIdToken();return await ic(this,ng(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,d=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:g,emailVerified:_,isAnonymous:L,providerData:I,stsTokenManager:T}=n;me(g&&T,e,"internal-error");const k=Os.fromJSON(this.name,T);me(typeof g=="string",e,"internal-error"),Yn(r,e.name),Yn(s,e.name),me(typeof _=="boolean",e,"internal-error"),me(typeof L=="boolean",e,"internal-error"),Yn(i,e.name),Yn(a,e.name),Yn(l,e.name),Yn(c,e.name),Yn(d,e.name),Yn(m,e.name);const C=new yn({uid:g,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:L,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:k,createdAt:d,lastLoginAt:m});return I&&Array.isArray(I)&&(C.providerData=I.map(x=>({...x}))),c&&(C._redirectEventId=c),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new Os;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await cl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?r7(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Os;l.updateFromIdToken(r);const c=new yn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ac(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new Map;function Br(t){ll(t instanceof Function,"Expected a class definition");let e=ff.get(t);return e?(ll(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ff.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s7{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}s7.type="NONE";const pf=s7;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Q1(this.userKey,s.apiKey,i),this.fullPersistenceKey=Q1("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ul(this.auth,{idToken:e}).catch(()=>{});return n?yn._fromGetAccountInfoResponse(this.auth,n,e):null}return yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(Br(pf),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Br(pf);const a=Q1(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const m=await d._get(a);if(m){let g;if(typeof m=="string"){const _=await ul(e,{idToken:m}).catch(()=>{});if(!_)break;g=await yn._fromGetAccountInfoResponse(e,_,m)}else g=yn._fromJSON(e,m);d!==i&&(l=g),i=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ls(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Ls(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mg(e))return"Blackberry";if(gg(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||dg(e))&&!e.includes("edge/"))return"Chrome";if(pg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cg(t=wn()){return/firefox\//i.test(t)}function hg(t=wn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dg(t=wn()){return/crios\//i.test(t)}function fg(t=wn()){return/iemobile/i.test(t)}function pg(t=wn()){return/android/i.test(t)}function mg(t=wn()){return/blackberry/i.test(t)}function gg(t=wn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i7(t,e=[]){let n;switch(t){case"Browser":n=mf(wn());break;case"Worker":n=`${mf(wn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zl}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(t,e={}){return Hl(t,"GET","/v2/passwordPolicy",Z6(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=6;class wg{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??_g,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new yg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=X6,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Br(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ul(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(br(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K5()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(br(this.app))return Promise.reject(Lo(this));const n=e?Qr(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return br(this.app)?Promise.reject(Lo(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return br(this.app)?Promise.reject(Lo(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vg(this),n=new wg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ra("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ug(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Br(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[Br(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i7(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(br(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Y5(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Eg(t){return Qr(t)}class gf{constructor(e){this.auth=e,this.observer=null,this.addObserver=V9(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ng(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Br);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}new Oa(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Oa(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Oa(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Oa(5e3,15e3);var yf="@firebase/auth",vf="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ag(t){Gs(new Hs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;me(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i7(t)},d=new xg(r,s,i,c);return Ng(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gs(new Hs("auth-internal",e=>{const n=Eg(e.getProvider("auth").getImmediate());return(r=>new Sg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(yf,vf,Cg(t)),pr(yf,vf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=5*60;k9("authIdTokenMaxAge");Ag("Browser");var _f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,w){function S(){}S.prototype=w.prototype,A.F=w.prototype,A.prototype=new S,A.prototype.constructor=A,A.D=function(P,y,R){for(var N=Array(arguments.length-2),K=2;K<arguments.length;K++)N[K-2]=arguments[K];return w.prototype[y].apply(P,N)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,w,S){S||(S=0);const P=Array(16);if(typeof w=="string")for(var y=0;y<16;++y)P[y]=w.charCodeAt(S++)|w.charCodeAt(S++)<<8|w.charCodeAt(S++)<<16|w.charCodeAt(S++)<<24;else for(y=0;y<16;++y)P[y]=w[S++]|w[S++]<<8|w[S++]<<16|w[S++]<<24;w=A.g[0],S=A.g[1],y=A.g[2];let R=A.g[3],N;N=w+(R^S&(y^R))+P[0]+3614090360&4294967295,w=S+(N<<7&4294967295|N>>>25),N=R+(y^w&(S^y))+P[1]+3905402710&4294967295,R=w+(N<<12&4294967295|N>>>20),N=y+(S^R&(w^S))+P[2]+606105819&4294967295,y=R+(N<<17&4294967295|N>>>15),N=S+(w^y&(R^w))+P[3]+3250441966&4294967295,S=y+(N<<22&4294967295|N>>>10),N=w+(R^S&(y^R))+P[4]+4118548399&4294967295,w=S+(N<<7&4294967295|N>>>25),N=R+(y^w&(S^y))+P[5]+1200080426&4294967295,R=w+(N<<12&4294967295|N>>>20),N=y+(S^R&(w^S))+P[6]+2821735955&4294967295,y=R+(N<<17&4294967295|N>>>15),N=S+(w^y&(R^w))+P[7]+4249261313&4294967295,S=y+(N<<22&4294967295|N>>>10),N=w+(R^S&(y^R))+P[8]+1770035416&4294967295,w=S+(N<<7&4294967295|N>>>25),N=R+(y^w&(S^y))+P[9]+2336552879&4294967295,R=w+(N<<12&4294967295|N>>>20),N=y+(S^R&(w^S))+P[10]+4294925233&4294967295,y=R+(N<<17&4294967295|N>>>15),N=S+(w^y&(R^w))+P[11]+2304563134&4294967295,S=y+(N<<22&4294967295|N>>>10),N=w+(R^S&(y^R))+P[12]+1804603682&4294967295,w=S+(N<<7&4294967295|N>>>25),N=R+(y^w&(S^y))+P[13]+4254626195&4294967295,R=w+(N<<12&4294967295|N>>>20),N=y+(S^R&(w^S))+P[14]+2792965006&4294967295,y=R+(N<<17&4294967295|N>>>15),N=S+(w^y&(R^w))+P[15]+1236535329&4294967295,S=y+(N<<22&4294967295|N>>>10),N=w+(y^R&(S^y))+P[1]+4129170786&4294967295,w=S+(N<<5&4294967295|N>>>27),N=R+(S^y&(w^S))+P[6]+3225465664&4294967295,R=w+(N<<9&4294967295|N>>>23),N=y+(w^S&(R^w))+P[11]+643717713&4294967295,y=R+(N<<14&4294967295|N>>>18),N=S+(R^w&(y^R))+P[0]+3921069994&4294967295,S=y+(N<<20&4294967295|N>>>12),N=w+(y^R&(S^y))+P[5]+3593408605&4294967295,w=S+(N<<5&4294967295|N>>>27),N=R+(S^y&(w^S))+P[10]+38016083&4294967295,R=w+(N<<9&4294967295|N>>>23),N=y+(w^S&(R^w))+P[15]+3634488961&4294967295,y=R+(N<<14&4294967295|N>>>18),N=S+(R^w&(y^R))+P[4]+3889429448&4294967295,S=y+(N<<20&4294967295|N>>>12),N=w+(y^R&(S^y))+P[9]+568446438&4294967295,w=S+(N<<5&4294967295|N>>>27),N=R+(S^y&(w^S))+P[14]+3275163606&4294967295,R=w+(N<<9&4294967295|N>>>23),N=y+(w^S&(R^w))+P[3]+4107603335&4294967295,y=R+(N<<14&4294967295|N>>>18),N=S+(R^w&(y^R))+P[8]+1163531501&4294967295,S=y+(N<<20&4294967295|N>>>12),N=w+(y^R&(S^y))+P[13]+2850285829&4294967295,w=S+(N<<5&4294967295|N>>>27),N=R+(S^y&(w^S))+P[2]+4243563512&4294967295,R=w+(N<<9&4294967295|N>>>23),N=y+(w^S&(R^w))+P[7]+1735328473&4294967295,y=R+(N<<14&4294967295|N>>>18),N=S+(R^w&(y^R))+P[12]+2368359562&4294967295,S=y+(N<<20&4294967295|N>>>12),N=w+(S^y^R)+P[5]+4294588738&4294967295,w=S+(N<<4&4294967295|N>>>28),N=R+(w^S^y)+P[8]+2272392833&4294967295,R=w+(N<<11&4294967295|N>>>21),N=y+(R^w^S)+P[11]+1839030562&4294967295,y=R+(N<<16&4294967295|N>>>16),N=S+(y^R^w)+P[14]+4259657740&4294967295,S=y+(N<<23&4294967295|N>>>9),N=w+(S^y^R)+P[1]+2763975236&4294967295,w=S+(N<<4&4294967295|N>>>28),N=R+(w^S^y)+P[4]+1272893353&4294967295,R=w+(N<<11&4294967295|N>>>21),N=y+(R^w^S)+P[7]+4139469664&4294967295,y=R+(N<<16&4294967295|N>>>16),N=S+(y^R^w)+P[10]+3200236656&4294967295,S=y+(N<<23&4294967295|N>>>9),N=w+(S^y^R)+P[13]+681279174&4294967295,w=S+(N<<4&4294967295|N>>>28),N=R+(w^S^y)+P[0]+3936430074&4294967295,R=w+(N<<11&4294967295|N>>>21),N=y+(R^w^S)+P[3]+3572445317&4294967295,y=R+(N<<16&4294967295|N>>>16),N=S+(y^R^w)+P[6]+76029189&4294967295,S=y+(N<<23&4294967295|N>>>9),N=w+(S^y^R)+P[9]+3654602809&4294967295,w=S+(N<<4&4294967295|N>>>28),N=R+(w^S^y)+P[12]+3873151461&4294967295,R=w+(N<<11&4294967295|N>>>21),N=y+(R^w^S)+P[15]+530742520&4294967295,y=R+(N<<16&4294967295|N>>>16),N=S+(y^R^w)+P[2]+3299628645&4294967295,S=y+(N<<23&4294967295|N>>>9),N=w+(y^(S|~R))+P[0]+4096336452&4294967295,w=S+(N<<6&4294967295|N>>>26),N=R+(S^(w|~y))+P[7]+1126891415&4294967295,R=w+(N<<10&4294967295|N>>>22),N=y+(w^(R|~S))+P[14]+2878612391&4294967295,y=R+(N<<15&4294967295|N>>>17),N=S+(R^(y|~w))+P[5]+4237533241&4294967295,S=y+(N<<21&4294967295|N>>>11),N=w+(y^(S|~R))+P[12]+1700485571&4294967295,w=S+(N<<6&4294967295|N>>>26),N=R+(S^(w|~y))+P[3]+2399980690&4294967295,R=w+(N<<10&4294967295|N>>>22),N=y+(w^(R|~S))+P[10]+4293915773&4294967295,y=R+(N<<15&4294967295|N>>>17),N=S+(R^(y|~w))+P[1]+2240044497&4294967295,S=y+(N<<21&4294967295|N>>>11),N=w+(y^(S|~R))+P[8]+1873313359&4294967295,w=S+(N<<6&4294967295|N>>>26),N=R+(S^(w|~y))+P[15]+4264355552&4294967295,R=w+(N<<10&4294967295|N>>>22),N=y+(w^(R|~S))+P[6]+2734768916&4294967295,y=R+(N<<15&4294967295|N>>>17),N=S+(R^(y|~w))+P[13]+1309151649&4294967295,S=y+(N<<21&4294967295|N>>>11),N=w+(y^(S|~R))+P[4]+4149444226&4294967295,w=S+(N<<6&4294967295|N>>>26),N=R+(S^(w|~y))+P[11]+3174756917&4294967295,R=w+(N<<10&4294967295|N>>>22),N=y+(w^(R|~S))+P[2]+718787259&4294967295,y=R+(N<<15&4294967295|N>>>17),N=S+(R^(y|~w))+P[9]+3951481745&4294967295,A.g[0]=A.g[0]+w&4294967295,A.g[1]=A.g[1]+(y+(N<<21&4294967295|N>>>11))&4294967295,A.g[2]=A.g[2]+y&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.v=function(A,w){w===void 0&&(w=A.length);const S=w-this.blockSize,P=this.C;let y=this.h,R=0;for(;R<w;){if(y==0)for(;R<=S;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<w;)if(P[y++]=A.charCodeAt(R++),y==this.blockSize){s(this,P),y=0;break}}else for(;R<w;)if(P[y++]=A[R++],y==this.blockSize){s(this,P),y=0;break}}this.h=y,this.o+=w},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var w=1;w<A.length-8;++w)A[w]=0;w=this.o*8;for(var S=A.length-8;S<A.length;++S)A[S]=w&255,w/=256;for(this.v(A),A=Array(16),w=0,S=0;S<4;++S)for(let P=0;P<32;P+=8)A[w++]=this.g[S]>>>P&255;return A};function i(A,w){var S=l;return Object.prototype.hasOwnProperty.call(S,A)?S[A]:S[A]=w(A)}function a(A,w){this.h=w;const S=[];let P=!0;for(let y=A.length-1;y>=0;y--){const R=A[y]|0;P&&R==w||(S[y]=R,P=!1)}this.g=S}var l={};function c(A){return-128<=A&&A<128?i(A,function(w){return new a([w|0],w<0?-1:0)}):new a([A|0],A<0?-1:0)}function d(A){if(isNaN(A)||!isFinite(A))return g;if(A<0)return k(d(-A));const w=[];let S=1;for(let P=0;A>=S;P++)w[P]=A/S|0,S*=4294967296;return new a(w,0)}function m(A,w){if(A.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(A.charAt(0)=="-")return k(m(A.substring(1),w));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=d(Math.pow(w,8));let P=g;for(let R=0;R<A.length;R+=8){var y=Math.min(8,A.length-R);const N=parseInt(A.substring(R,R+y),w);y<8?(y=d(Math.pow(w,y)),P=P.j(y).add(d(N))):(P=P.j(S),P=P.add(d(N)))}return P}var g=c(0),_=c(1),L=c(16777216);t=a.prototype,t.m=function(){if(T(this))return-k(this).m();let A=0,w=1;for(let S=0;S<this.g.length;S++){const P=this.i(S);A+=(P>=0?P:4294967296+P)*w,w*=4294967296}return A},t.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(I(this))return"0";if(T(this))return"-"+k(this).toString(A);const w=d(Math.pow(A,6));var S=this;let P="";for(;;){const y=M(S,w).g;S=C(S,y.j(w));let R=((S.g.length>0?S.g[0]:S.h)>>>0).toString(A);if(S=y,I(S))return R+P;for(;R.length<6;)R="0"+R;P=R+P}},t.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function I(A){if(A.h!=0)return!1;for(let w=0;w<A.g.length;w++)if(A.g[w]!=0)return!1;return!0}function T(A){return A.h==-1}t.l=function(A){return A=C(this,A),T(A)?-1:I(A)?0:1};function k(A){const w=A.g.length,S=[];for(let P=0;P<w;P++)S[P]=~A.g[P];return new a(S,~A.h).add(_)}t.abs=function(){return T(this)?k(this):this},t.add=function(A){const w=Math.max(this.g.length,A.g.length),S=[];let P=0;for(let y=0;y<=w;y++){let R=P+(this.i(y)&65535)+(A.i(y)&65535),N=(R>>>16)+(this.i(y)>>>16)+(A.i(y)>>>16);P=N>>>16,R&=65535,N&=65535,S[y]=N<<16|R}return new a(S,S[S.length-1]&-2147483648?-1:0)};function C(A,w){return A.add(k(w))}t.j=function(A){if(I(this)||I(A))return g;if(T(this))return T(A)?k(this).j(k(A)):k(k(this).j(A));if(T(A))return k(this.j(k(A)));if(this.l(L)<0&&A.l(L)<0)return d(this.m()*A.m());const w=this.g.length+A.g.length,S=[];for(var P=0;P<2*w;P++)S[P]=0;for(P=0;P<this.g.length;P++)for(let y=0;y<A.g.length;y++){const R=this.i(P)>>>16,N=this.i(P)&65535,K=A.i(y)>>>16,ne=A.i(y)&65535;S[2*P+2*y]+=N*ne,x(S,2*P+2*y),S[2*P+2*y+1]+=R*ne,x(S,2*P+2*y+1),S[2*P+2*y+1]+=N*K,x(S,2*P+2*y+1),S[2*P+2*y+2]+=R*K,x(S,2*P+2*y+2)}for(A=0;A<w;A++)S[A]=S[2*A+1]<<16|S[2*A];for(A=w;A<2*w;A++)S[A]=0;return new a(S,0)};function x(A,w){for(;(A[w]&65535)!=A[w];)A[w+1]+=A[w]>>>16,A[w]&=65535,w++}function O(A,w){this.g=A,this.h=w}function M(A,w){if(I(w))throw Error("division by zero");if(I(A))return new O(g,g);if(T(A))return w=M(k(A),w),new O(k(w.g),k(w.h));if(T(w))return w=M(A,k(w)),new O(k(w.g),w.h);if(A.g.length>30){if(T(A)||T(w))throw Error("slowDivide_ only works with positive integers.");for(var S=_,P=w;P.l(A)<=0;)S=$(S),P=$(P);var y=Y(S,1),R=Y(P,1);for(P=Y(P,2),S=Y(S,2);!I(P);){var N=R.add(P);N.l(A)<=0&&(y=y.add(S),R=N),P=Y(P,1),S=Y(S,1)}return w=C(A,y.j(w)),new O(y,w)}for(y=g;A.l(w)>=0;){for(S=Math.max(1,Math.floor(A.m()/w.m())),P=Math.ceil(Math.log(S)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),R=d(S),N=R.j(w);T(N)||N.l(A)>0;)S-=P,R=d(S),N=R.j(w);I(R)&&(R=_),y=y.add(R),A=C(A,N)}return new O(y,A)}t.B=function(A){return M(this,A).h},t.and=function(A){const w=Math.max(this.g.length,A.g.length),S=[];for(let P=0;P<w;P++)S[P]=this.i(P)&A.i(P);return new a(S,this.h&A.h)},t.or=function(A){const w=Math.max(this.g.length,A.g.length),S=[];for(let P=0;P<w;P++)S[P]=this.i(P)|A.i(P);return new a(S,this.h|A.h)},t.xor=function(A){const w=Math.max(this.g.length,A.g.length),S=[];for(let P=0;P<w;P++)S[P]=this.i(P)^A.i(P);return new a(S,this.h^A.h)};function $(A){const w=A.g.length+1,S=[];for(let P=0;P<w;P++)S[P]=A.i(P)<<1|A.i(P-1)>>>31;return new a(S,A.h)}function Y(A,w){const S=w>>5;w%=32;const P=A.g.length-S,y=[];for(let R=0;R<P;R++)y[R]=w>0?A.i(R+S)>>>w|A.i(R+S+1)<<32-w:A.i(R+S);return new a(y,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,yh=a}).apply(typeof _f<"u"?_f:typeof self<"u"?self:typeof window<"u"?window:{});var fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fo=="object"&&fo];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,h){if(h)e:{var f=r;o=o.split(".");for(var v=0;v<o.length-1;v++){var D=o[v];if(!(D in f))break e;f=f[D]}o=o[o.length-1],v=f[o],h=h(v),h!=v&&h!=null&&e(f,o,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(h){var f=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&f.push([v,h[v]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function c(o,h,f){return o.call.apply(o.bind,arguments)}function d(o,h,f){return d=c,d.apply(null,arguments)}function m(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),o.apply(this,v)}}function g(o,h){function f(){}f.prototype=h.prototype,o.Z=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(v,D,V){for(var W=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)W[ae-2]=arguments[ae];return h.prototype[D].apply(v,W)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function L(o){const h=o.length;if(h>0){const f=Array(h);for(let v=0;v<h;v++)f[v]=o[v];return f}return[]}function I(o,h){for(let v=1;v<arguments.length;v++){const D=arguments[v];var f=typeof D;if(f=f!="object"?f:D?Array.isArray(D)?"array":f:"null",f=="array"||f=="object"&&typeof D.length=="number"){f=o.length||0;const V=D.length||0;o.length=f+V;for(let W=0;W<V;W++)o[f+W]=D[W]}else o.push(D)}}class T{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(o){a.setTimeout(()=>{throw o},0)}function C(){var o=A;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class x{constructor(){this.h=this.g=null}add(h,f){const v=O.get();v.set(h,f),this.h?this.h.next=v:this.g=v,this.h=v}}var O=new T(()=>new M,o=>o.reset());class M{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let $,Y=!1,A=new x,w=()=>{const o=Promise.resolve(void 0);$=()=>{o.then(S)}};function S(){for(var o;o=C();){try{o.h.call(o.g)}catch(f){k(f)}var h=O;h.j(o),h.h<100&&(h.h++,o.next=h.g,h.g=o)}Y=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return o}();function N(o){return/^[\s\xa0]*$/.test(o)}function K(o,h){y.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,h)}g(K,y),K.prototype.init=function(o,h){const f=this.type=o.type,v=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget,h||(f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&K.Z.h.call(this)},K.prototype.h=function(){K.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),ve=0;function Te(o,h,f,v,D){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!v,this.ha=D,this.key=++ve,this.da=this.fa=!1}function G(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function J(o,h,f){for(const v in o)h.call(f,o[v],v,o)}function re(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function xe(o){const h={};for(const f in o)h[f]=o[f];return h}const Ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kt(o,h){let f,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(f in v)o[f]=v[f];for(let V=0;V<Ne.length;V++)f=Ne[V],Object.prototype.hasOwnProperty.call(v,f)&&(o[f]=v[f])}}function dt(o){this.src=o,this.g={},this.h=0}dt.prototype.add=function(o,h,f,v,D){const V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);const W=Je(o,h,v,D);return W>-1?(h=o[W],f||(h.fa=!1)):(h=new Te(h,this.src,V,!!v,D),h.fa=f,o.push(h)),h};function wt(o,h){const f=h.type;if(f in o.g){var v=o.g[f],D=Array.prototype.indexOf.call(v,h,void 0),V;(V=D>=0)&&Array.prototype.splice.call(v,D,1),V&&(G(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Je(o,h,f,v){for(let D=0;D<o.length;++D){const V=o[D];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==v)return D}return-1}var Fn="closure_lm_"+(Math.random()*1e6|0),Xl={};function Fh(o,h,f,v,D){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Fh(o,h[V],f,v,D);return null}return f=$h(f),o&&o[ne]?o.J(h,f,l(v)?!!v.capture:!1,D):a4(o,h,f,!1,v,D)}function a4(o,h,f,v,D,V){if(!h)throw Error("Invalid event type");const W=l(D)?!!D.capture:!!D;let ae=Ql(o);if(ae||(o[Fn]=ae=new dt(o)),f=ae.add(h,f,v,W,V),f.proxy)return f;if(v=o4(),f.proxy=v,v.src=o,v.listener=f,o.addEventListener)R||(D=W),D===void 0&&(D=!1),o.addEventListener(h.toString(),v,D);else if(o.attachEvent)o.attachEvent(Bh(h.toString()),v);else if(o.addListener&&o.removeListener)o.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function o4(){function o(f){return h.call(o.src,o.listener,f)}const h=l4;return o}function Uh(o,h,f,v,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)Uh(o,h[V],f,v,D);else v=l(v)?!!v.capture:!!v,f=$h(f),o&&o[ne]?(o=o.i,V=String(h).toString(),V in o.g&&(h=o.g[V],f=Je(h,f,v,D),f>-1&&(G(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete o.g[V],o.h--)))):o&&(o=Ql(o))&&(h=o.g[h.toString()],o=-1,h&&(o=Je(h,f,v,D)),(f=o>-1?h[o]:null)&&Kl(f))}function Kl(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[ne])wt(h.i,o);else{var f=o.type,v=o.proxy;h.removeEventListener?h.removeEventListener(f,v,o.capture):h.detachEvent?h.detachEvent(Bh(f),v):h.addListener&&h.removeListener&&h.removeListener(v),(f=Ql(h))?(wt(f,o),f.h==0&&(f.src=null,h[Fn]=null)):G(o)}}}function Bh(o){return o in Xl?Xl[o]:Xl[o]="on"+o}function l4(o,h){if(o.da)o=!0;else{h=new K(h,this);const f=o.listener,v=o.ha||o.src;o.fa&&Kl(o),o=f.call(v,h)}return o}function Ql(o){return o=o[Fn],o instanceof dt?o:null}var Jl="__closure_events_fn_"+(Math.random()*1e9>>>0);function $h(o){return typeof o=="function"?o:(o[Jl]||(o[Jl]=function(h){return o.handleEvent(h)}),o[Jl])}function st(){P.call(this),this.i=new dt(this),this.M=this,this.G=null}g(st,P),st.prototype[ne]=!0,st.prototype.removeEventListener=function(o,h,f,v){Uh(this,o,h,f,v)};function ft(o,h){var f,v=o.G;if(v)for(f=[];v;v=v.G)f.push(v);if(o=o.M,v=h.type||h,typeof h=="string")h=new y(h,o);else if(h instanceof y)h.target=h.target||o;else{var D=h;h=new y(v,o),Kt(h,D)}D=!0;let V,W;if(f)for(W=f.length-1;W>=0;W--)V=h.g=f[W],D=Fa(V,v,!0,h)&&D;if(V=h.g=o,D=Fa(V,v,!0,h)&&D,D=Fa(V,v,!1,h)&&D,f)for(W=0;W<f.length;W++)V=h.g=f[W],D=Fa(V,v,!1,h)&&D}st.prototype.N=function(){if(st.Z.N.call(this),this.i){var o=this.i;for(const h in o.g){const f=o.g[h];for(let v=0;v<f.length;v++)G(f[v]);delete o.g[h],o.h--}}this.G=null},st.prototype.J=function(o,h,f,v){return this.i.add(String(o),h,!1,f,v)},st.prototype.K=function(o,h,f,v){return this.i.add(String(o),h,!0,f,v)};function Fa(o,h,f,v){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let V=0;V<h.length;++V){const W=h[V];if(W&&!W.da&&W.capture==f){const ae=W.listener,ze=W.ha||W.src;W.fa&&wt(o.i,W),D=ae.call(ze,v)!==!1&&D}}return D&&!v.defaultPrevented}function u4(o,h){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(o,h||0)}function zh(o){o.g=u4(()=>{o.g=null,o.i&&(o.i=!1,zh(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class c4 extends P{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:zh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(o){P.call(this),this.h=o,this.g={}}g(ti,P);var Hh=[];function Gh(o){J(o.g,function(h,f){this.g.hasOwnProperty(f)&&Kl(h)},o),o.g={}}ti.prototype.N=function(){ti.Z.N.call(this),Gh(this)},ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zl=a.JSON.stringify,h4=a.JSON.parse,d4=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Wh(){}function f4(){}var ni={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function e1(){y.call(this,"d")}g(e1,y);function t1(){y.call(this,"c")}g(t1,y);var ss={},Yh=null;function n1(){return Yh=Yh||new st}ss.Ia="serverreachability";function qh(o){y.call(this,ss.Ia,o)}g(qh,y);function ri(o){const h=n1();ft(h,new qh(h))}ss.STAT_EVENT="statevent";function Xh(o,h){y.call(this,ss.STAT_EVENT,o),this.stat=h}g(Xh,y);function pt(o){const h=n1();ft(h,new Xh(h,o))}ss.Ja="timingevent";function Kh(o,h){y.call(this,ss.Ja,o),this.size=h}g(Kh,y);function si(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},h)}function ii(){this.g=!0}ii.prototype.ua=function(){this.g=!1};function p4(o,h,f,v,D,V){o.info(function(){if(o.g)if(V){var W="",ae=V.split("&");for(let we=0;we<ae.length;we++){var ze=ae[we].split("=");if(ze.length>1){const We=ze[0];ze=ze[1];const cn=We.split("_");W=cn.length>=2&&cn[1]=="type"?W+(We+"="+ze+"&"):W+(We+"=redacted&")}}}else W=null;else W=V;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+h+`
`+f+`
`+W})}function m4(o,h,f,v,D,V,W){o.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+h+`
`+f+`
`+V+" "+W})}function is(o,h,f,v){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+y4(o,f)+(v?" "+v:"")})}function g4(o,h){o.info(function(){return"TIMEOUT: "+h})}ii.prototype.info=function(){};function y4(o,h){if(!o.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(o=0;o<V.length;o++)if(Array.isArray(V[o])){var f=V[o];if(!(f.length<2)){var v=f[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let W=1;W<v.length;W++)v[W]=""}}}}return Zl(V)}catch{return h}}var r1={NO_ERROR:0,TIMEOUT:8},v4={},Qh;function s1(){}g(s1,Wh),s1.prototype.g=function(){return new XMLHttpRequest},Qh=new s1;function ai(o){return encodeURIComponent(String(o))}function _4(o){var h=1;o=o.split(":");const f=[];for(;h>0&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function Un(o,h,f,v){this.j=o,this.i=h,this.l=f,this.S=v||1,this.V=new ti(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Jh}function Jh(){this.i=null,this.g="",this.h=!1}var Zh={},i1={};function a1(o,h,f){o.M=1,o.A=Ba(un(h)),o.u=f,o.R=!0,e2(o,null)}function e2(o,h){o.F=Date.now(),Ua(o),o.B=un(o.A);var f=o.B,v=o.S;Array.isArray(v)||(v=[String(v)]),f2(f.i,"t",v),o.C=0,f=o.j.L,o.h=new Jh,o.g=R2(o.j,f?h:null,!o.u),o.P>0&&(o.O=new c4(d(o.Y,o,o.g),o.P)),h=o.V,f=o.g,v=o.ba;var D="readystatechange";Array.isArray(D)||(D&&(Hh[0]=D.toString()),D=Hh);for(let V=0;V<D.length;V++){const W=Fh(f,D[V],v||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=o.J?xe(o.J):{},o.u?(o.v||(o.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,h)):(o.v="GET",o.g.ea(o.B,o.v,null,h)),ri(),p4(o.i,o.v,o.B,o.l,o.S,o.u)}Un.prototype.ba=function(o){o=o.target;const h=this.O;h&&zn(o)==3?h.j():this.Y(o)},Un.prototype.Y=function(o){try{if(o==this.g)e:{const ae=zn(this.g),ze=this.g.ya(),we=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||w2(this.g)))){this.K||ae!=4||ze==7||(ze==8||we<=0?ri(3):ri(2)),o1(this);var h=this.g.ca();this.X=h;var f=w4(this);if(this.o=h==200,m4(this.i,this.v,this.B,this.l,this.S,ae,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(v)){var V=v;break t}}V=null}if(o=V)is(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,l1(this,o);else{this.o=!1,this.m=3,pt(12),Ar(this),oi(this);break e}}if(this.R){o=!0;let We;for(;!this.K&&this.C<f.length;)if(We=x4(this,f),We==i1){ae==4&&(this.m=4,pt(14),o=!1),is(this.i,this.l,null,"[Incomplete Response]");break}else if(We==Zh){this.m=4,pt(15),is(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else is(this.i,this.l,We,null),l1(this,We);if(t2(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||f.length!=0||this.h.h||(this.m=1,pt(16),o=!1),this.o=this.o&&o,!o)is(this.i,this.l,f,"[Invalid Chunked Response]"),Ar(this),oi(this);else if(f.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),g1(W),W.P=!0,pt(11))}}else is(this.i,this.l,f,null),l1(this,f);ae==4&&Ar(this),this.o&&!this.K&&(ae==4?k2(this.j,this):(this.o=!1,Ua(this)))}else D4(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,pt(12)):(this.m=0,pt(13)),Ar(this),oi(this)}}}catch{}finally{}};function w4(o){if(!t2(o))return o.g.la();const h=w2(o.g);if(h==="")return"";let f="";const v=h.length,D=zn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Ar(o),oi(o),"";o.h.i=new a.TextDecoder}for(let V=0;V<v;V++)o.h.h=!0,f+=o.h.i.decode(h[V],{stream:!(D&&V==v-1)});return h.length=0,o.h.g+=f,o.C=0,o.h.g}function t2(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function x4(o,h){var f=o.C,v=h.indexOf(`
`,f);return v==-1?i1:(f=Number(h.substring(f,v)),isNaN(f)?Zh:(v+=1,v+f>h.length?i1:(h=h.slice(v,v+f),o.C=v+f,h)))}Un.prototype.cancel=function(){this.K=!0,Ar(this)};function Ua(o){o.T=Date.now()+o.H,n2(o,o.H)}function n2(o,h){if(o.D!=null)throw Error("WatchDog timer not null");o.D=si(d(o.aa,o),h)}function o1(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Un.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(g4(this.i,this.B),this.M!=2&&(ri(),pt(17)),Ar(this),this.m=2,oi(this)):n2(this,this.T-o)};function oi(o){o.j.I==0||o.K||k2(o.j,o)}function Ar(o){o1(o);var h=o.O;h&&typeof h.dispose=="function"&&h.dispose(),o.O=null,Gh(o.V),o.g&&(h=o.g,o.g=null,h.abort(),h.dispose())}function l1(o,h){try{var f=o.j;if(f.I!=0&&(f.g==o||u1(f.h,o))){if(!o.L&&u1(f.h,o)&&f.I==3){try{var v=f.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Wa(f),Ha(f);else break e;m1(f),pt(18)}}else f.xa=D[1],0<f.xa-f.K&&D[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=si(d(f.Va,f),6e3));i2(f.h)<=1&&f.ta&&(f.ta=void 0)}else Tr(f,11)}else if((o.L||f.g==o)&&Wa(f),!N(h))for(D=f.Ba.g.parse(h),h=0;h<D.length;h++){let we=D[h];const We=we[0];if(!(We<=f.K))if(f.K=We,we=we[1],f.I==2)if(we[0]=="c"){f.M=we[1],f.ba=we[2];const cn=we[3];cn!=null&&(f.ka=cn,f.j.info("VER="+f.ka));const Pr=we[4];Pr!=null&&(f.za=Pr,f.j.info("SVER="+f.za));const Hn=we[5];Hn!=null&&typeof Hn=="number"&&Hn>0&&(v=1.5*Hn,f.O=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Gn=o.g;if(Gn){const Ya=Gn.g?Gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ya){var V=v.h;V.g||Ya.indexOf("spdy")==-1&&Ya.indexOf("quic")==-1&&Ya.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(c1(V,V.h),V.h=null))}if(v.G){const y1=Gn.g?Gn.g.getResponseHeader("X-HTTP-Session-Id"):null;y1&&(v.wa=y1,Se(v.J,v.G,y1))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),v=f;var W=o;if(v.na=I2(v,v.L?v.ba:null,v.W),W.L){a2(v.h,W);var ae=W,ze=v.O;ze&&(ae.H=ze),ae.D&&(o1(ae),Ua(ae)),v.g=W}else C2(v);f.i.length>0&&Ga(f)}else we[0]!="stop"&&we[0]!="close"||Tr(f,7);else f.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?Tr(f,7):p1(f):we[0]!="noop"&&f.l&&f.l.qa(we),f.A=0)}}ri(4)}catch{}}var E4=class{constructor(o,h){this.g=o,this.map=h}};function r2(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function s2(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function i2(o){return o.h?1:o.g?o.g.size:0}function u1(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function c1(o,h){o.g?o.g.add(h):o.h=h}function a2(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}r2.prototype.cancel=function(){if(this.i=o2(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function o2(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.G);return h}return L(o.i)}var l2=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function N4(o,h){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const v=o[f].indexOf("=");let D,V=null;v>=0?(D=o[f].substring(0,v),V=o[f].substring(v+1)):D=o[f],h(D,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Bn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;o instanceof Bn?(this.l=o.l,li(this,o.j),this.o=o.o,this.g=o.g,ui(this,o.u),this.h=o.h,h1(this,p2(o.i)),this.m=o.m):o&&(h=String(o).match(l2))?(this.l=!1,li(this,h[1]||"",!0),this.o=ci(h[2]||""),this.g=ci(h[3]||"",!0),ui(this,h[4]),this.h=ci(h[5]||"",!0),h1(this,h[6]||"",!0),this.m=ci(h[7]||"")):(this.l=!1,this.i=new di(null,this.l))}Bn.prototype.toString=function(){const o=[];var h=this.j;h&&o.push(hi(h,u2,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(hi(h,u2,!0),"@"),o.push(ai(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(hi(f,f.charAt(0)=="/"?A4:C4,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",hi(f,T4)),o.join("")},Bn.prototype.resolve=function(o){const h=un(this);let f=!!o.j;f?li(h,o.j):f=!!o.o,f?h.o=o.o:f=!!o.g,f?h.g=o.g:f=o.u!=null;var v=o.h;if(f)ui(h,o.u);else if(f=!!o.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=h.h.lastIndexOf("/");D!=-1&&(v=h.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const V=[];for(let W=0;W<D.length;){const ae=D[W++];ae=="."?v&&W==D.length&&V.push(""):ae==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),v&&W==D.length&&V.push("")):(V.push(ae),v=!0)}v=V.join("/")}else v=D}return f?h.h=v:f=o.i.toString()!=="",f?h1(h,p2(o.i)):f=!!o.m,f&&(h.m=o.m),h};function un(o){return new Bn(o)}function li(o,h,f){o.j=f?ci(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function ui(o,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);o.u=h}else o.u=null}function h1(o,h,f){h instanceof di?(o.i=h,P4(o.i,o.l)):(f||(h=hi(h,k4)),o.i=new di(h,o.l))}function Se(o,h,f){o.i.set(h,f)}function Ba(o){return Se(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ci(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hi(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,S4),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function S4(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var u2=/[#\/\?@]/g,C4=/[#\?:]/g,A4=/[#\?]/g,k4=/[#\?@]/g,T4=/#/g;function di(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function kr(o){o.g||(o.g=new Map,o.h=0,o.i&&N4(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=di.prototype,t.add=function(o,h){kr(this),this.i=null,o=as(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function c2(o,h){kr(o),h=as(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function h2(o,h){return kr(o),h=as(o,h),o.g.has(h)}t.forEach=function(o,h){kr(this),this.g.forEach(function(f,v){f.forEach(function(D){o.call(h,D,v,this)},this)},this)};function d2(o,h){kr(o);let f=[];if(typeof h=="string")h2(o,h)&&(f=f.concat(o.g.get(as(o,h))));else for(o=Array.from(o.g.values()),h=0;h<o.length;h++)f=f.concat(o[h]);return f}t.set=function(o,h){return kr(this),this.i=null,o=as(this,o),h2(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},t.get=function(o,h){return o?(o=d2(this,o),o.length>0?String(o[0]):h):h};function f2(o,h,f){c2(o,h),f.length>0&&(o.i=null,o.g.set(as(o,h),L(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var f=h[v];const D=ai(f);f=d2(this,f);for(let V=0;V<f.length;V++){let W=D;f[V]!==""&&(W+="="+ai(f[V])),o.push(W)}}return this.i=o.join("&")};function p2(o){const h=new di;return h.i=o.i,o.g&&(h.g=new Map(o.g),h.h=o.h),h}function as(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function P4(o,h){h&&!o.j&&(kr(o),o.i=null,o.g.forEach(function(f,v){const D=v.toLowerCase();v!=D&&(c2(this,v),f2(this,D,f))},o)),o.j=h}function I4(o,h){const f=new ii;if(a.Image){const v=new Image;v.onload=m($n,f,"TestLoadImage: loaded",!0,h,v),v.onerror=m($n,f,"TestLoadImage: error",!1,h,v),v.onabort=m($n,f,"TestLoadImage: abort",!1,h,v),v.ontimeout=m($n,f,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=o}else h(!1)}function R4(o,h){const f=new ii,v=new AbortController,D=setTimeout(()=>{v.abort(),$n(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:v.signal}).then(V=>{clearTimeout(D),V.ok?$n(f,"TestPingServer: ok",!0,h):$n(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),$n(f,"TestPingServer: error",!1,h)})}function $n(o,h,f,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(f)}catch{}}function O4(){this.g=new d4}function d1(o){this.i=o.Sb||null,this.h=o.ab||!1}g(d1,Wh),d1.prototype.g=function(){return new $a(this.i,this.h)};function $a(o,h){st.call(this),this.H=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g($a,st),t=$a.prototype,t.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=h,this.readyState=1,pi(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(h.body=o),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;m2(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function m2(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?fi(this):pi(this),this.readyState==3&&m2(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,fi(this))},t.Na=function(o){this.g&&(this.response=o,fi(this))},t.ga=function(){this.g&&fi(this)};function fi(o){o.readyState=4,o.l=null,o.j=null,o.B=null,pi(o)}t.setRequestHeader=function(o,h){this.A.append(o,h)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function pi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty($a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function g2(o){let h="";return J(o,function(f,v){h+=v,h+=":",h+=f,h+=`\r
`}),h}function f1(o,h,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=g2(f),typeof o=="string"?f!=null&&ai(f):Se(o,h,f))}function De(o){st.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(De,st);var L4=/^https?$/i,j4=["POST","PUT"];t=De.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,h,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qh.g(),this.g.onreadystatechange=_(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(V){y2(this,V);return}if(o=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)f.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const V of v.keys())f.set(V,v.get(V));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),D=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(j4,h,void 0)>=0)||v||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,W]of f)this.g.setRequestHeader(V,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(V){y2(this,V)}};function y2(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.o=5,v2(o),za(o)}function v2(o){o.A||(o.A=!0,ft(o,"complete"),ft(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ft(this,"complete"),ft(this,"abort"),za(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),za(this,!0)),De.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?_2(this):this.Xa())},t.Xa=function(){_2(this)};function _2(o){if(o.h&&typeof i<"u"){if(o.v&&zn(o)==4)setTimeout(o.Ca.bind(o),0);else if(ft(o,"readystatechange"),zn(o)==4){o.h=!1;try{const V=o.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var v;if(v=V===0){let W=String(o.D).match(l2)[1]||null;!W&&a.self&&a.self.location&&(W=a.self.location.protocol.slice(0,-1)),v=!L4.test(W?W.toLowerCase():"")}f=v}if(f)ft(o,"complete"),ft(o,"success");else{o.o=6;try{var D=zn(o)>2?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.ca()+"]",v2(o)}}finally{za(o)}}}}function za(o,h){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,h||ft(o,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function zn(o){return o.g?o.g.readyState:0}t.ca=function(){try{return zn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),h4(h)}};function w2(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function D4(o){const h={};o=(o.g&&zn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<o.length;v++){if(N(o[v]))continue;var f=_4(o[v]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[D]||[];h[D]=V,V.push(f)}re(h,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function x2(o){this.za=0,this.i=[],this.j=new ii,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mi("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mi("baseRetryDelayMs",5e3,o),this.Za=mi("retryDelaySeedMs",1e4,o),this.Ta=mi("forwardChannelMaxRetries",2,o),this.va=mi("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new r2(o&&o.concurrentRequestLimit),this.Ba=new O4,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=x2.prototype,t.ka=8,t.I=1,t.connect=function(o,h,f,v){pt(0),this.W=o,this.H=h||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.J=I2(this,null,this.W),Ga(this)};function p1(o){if(E2(o),o.I==3){var h=o.V++,f=un(o.J);if(Se(f,"SID",o.M),Se(f,"RID",h),Se(f,"TYPE","terminate"),gi(o,f),h=new Un(o,o.j,h),h.M=2,h.A=Ba(un(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.A,f=!0),f||(h.g=R2(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ua(h)}P2(o)}function Ha(o){o.g&&(g1(o),o.g.cancel(),o.g=null)}function E2(o){Ha(o),o.v&&(a.clearTimeout(o.v),o.v=null),Wa(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Ga(o){if(!s2(o.h)&&!o.m){o.m=!0;var h=o.Ea;$||w(),Y||($(),Y=!0),A.add(h,o),o.D=0}}function b4(o,h){return i2(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=h.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=si(d(o.Ea,o,h),T2(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const D=new Un(this,this.j,o);let V=this.o;if(this.U&&(V?(V=xe(V),Kt(V,this.U)):V=this.U),this.u!==null||this.R||(D.J=V,V=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=S2(this,D,h),f=un(this.J),Se(f,"RID",o),Se(f,"CVER",22),this.G&&Se(f,"X-HTTP-Session-Id",this.G),gi(this,f),V&&(this.R?h="headers="+ai(g2(V))+"&"+h:this.u&&f1(f,this.u,V)),c1(this.h,D),this.Ra&&Se(f,"TYPE","init"),this.S?(Se(f,"$req",h),Se(f,"SID","null"),D.U=!0,a1(D,f,null)):a1(D,f,h),this.I=2}}else this.I==3&&(o?N2(this,o):this.i.length==0||s2(this.h)||N2(this))};function N2(o,h){var f;h?f=h.l:f=o.V++;const v=un(o.J);Se(v,"SID",o.M),Se(v,"RID",f),Se(v,"AID",o.K),gi(o,v),o.u&&o.o&&f1(v,o.u,o.o),f=new Un(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),h&&(o.i=h.G.concat(o.i)),h=S2(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),c1(o.h,f),a1(f,v,h)}function gi(o,h){o.H&&J(o.H,function(f,v){Se(h,v,f)}),o.l&&J({},function(f,v){Se(h,v,f)})}function S2(o,h,f){f=Math.min(o.i.length,f);const v=o.l?d(o.l.Ka,o.l,o):null;e:{var D=o.i;let ae=-1;for(;;){const ze=["count="+f];ae==-1?f>0?(ae=D[0].g,ze.push("ofs="+ae)):ae=0:ze.push("ofs="+ae);let we=!0;for(let We=0;We<f;We++){var V=D[We].g;const cn=D[We].map;if(V-=ae,V<0)ae=Math.max(0,D[We].g-100),we=!1;else try{V="req"+V+"_"||"";try{var W=cn instanceof Map?cn:Object.entries(cn);for(const[Pr,Hn]of W){let Gn=Hn;l(Hn)&&(Gn=Zl(Hn)),ze.push(V+Pr+"="+encodeURIComponent(Gn))}}catch(Pr){throw ze.push(V+"type="+encodeURIComponent("_badmap")),Pr}}catch{v&&v(cn)}}if(we){W=ze.join("&");break e}}W=void 0}return o=o.i.splice(0,f),h.G=o,W}function C2(o){if(!o.g&&!o.v){o.Y=1;var h=o.Da;$||w(),Y||($(),Y=!0),A.add(h,o),o.A=0}}function m1(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=si(d(o.Da,o),T2(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,A2(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=si(d(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,pt(10),Ha(this),A2(this))};function g1(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function A2(o){o.g=new Un(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var h=un(o.na);Se(h,"RID","rpc"),Se(h,"SID",o.M),Se(h,"AID",o.K),Se(h,"CI",o.F?"0":"1"),!o.F&&o.ia&&Se(h,"TO",o.ia),Se(h,"TYPE","xmlhttp"),gi(o,h),o.u&&o.o&&f1(h,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Ba(un(h)),f.u=null,f.R=!0,e2(f,o)}t.Va=function(){this.C!=null&&(this.C=null,Ha(this),m1(this),pt(19))};function Wa(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function k2(o,h){var f=null;if(o.g==h){Wa(o),g1(o),o.g=null;var v=2}else if(u1(o.h,h))f=h.G,a2(o.h,h),v=1;else return;if(o.I!=0){if(h.o)if(v==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var D=o.D;v=n1(),ft(v,new Kh(v,f)),Ga(o)}else C2(o);else if(D=h.m,D==3||D==0&&h.X>0||!(v==1&&b4(o,h)||v==2&&m1(o)))switch(f&&f.length>0&&(h=o.h,h.i=h.i.concat(f)),D){case 1:Tr(o,5);break;case 4:Tr(o,10);break;case 3:Tr(o,6);break;default:Tr(o,2)}}}function T2(o,h){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*h}function Tr(o,h){if(o.j.info("Error code "+h),h==2){var f=d(o.bb,o),v=o.Ua;const D=!v;v=new Bn(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||li(v,"https"),Ba(v),D?I4(v.toString(),f):R4(v.toString(),f)}else pt(2);o.I=0,o.l&&o.l.pa(h),P2(o),E2(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function P2(o){if(o.I=0,o.ja=[],o.l){const h=o2(o.h);(h.length!=0||o.i.length!=0)&&(I(o.ja,h),I(o.ja,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.oa()}}function I2(o,h,f){var v=f instanceof Bn?un(f):new Bn(f);if(v.g!="")h&&(v.g=h+"."+v.g),ui(v,v.u);else{var D=a.location;v=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const V=new Bn(null);v&&li(V,v),h&&(V.g=h),D&&ui(V,D),f&&(V.h=f),v=V}return f=o.G,h=o.wa,f&&h&&Se(v,f,h),Se(v,"VER",o.ka),gi(o,v),v}function R2(o,h,f){if(h&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Aa&&!o.ma?new De(new d1({ab:f})):new De(o.ma),h.Fa(o.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function O2(){}t=O2.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ft(o,h){st.call(this),this.g=new x2(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(o?o["X-WebChannel-Client-Profile"]=h.sa:o={"X-WebChannel-Client-Profile":h.sa}),this.g.U=o,(o=h&&h.Qb)&&!N(o)&&(this.g.u=o),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!N(h)&&(this.g.G=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new os(this)}g(Ft,st),Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){p1(this.g)},Ft.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=Zl(o),o=f);h.i.push(new E4(h.Ya++,o)),h.I==3&&Ga(h)},Ft.prototype.N=function(){this.g.l=null,delete this.j,p1(this.g),delete this.g,Ft.Z.N.call(this)};function L2(o){e1.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const f in h){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}g(L2,e1);function j2(){t1.call(this),this.status=1}g(j2,t1);function os(o){this.g=o}g(os,O2),os.prototype.ra=function(){ft(this.g,"a")},os.prototype.qa=function(o){ft(this.g,new L2(o))},os.prototype.pa=function(o){ft(this.g,new j2)},os.prototype.oa=function(){ft(this.g,"b")},Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,r1.NO_ERROR=0,r1.TIMEOUT=8,r1.HTTP_ERROR=6,v4.COMPLETE="complete",f4.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",st.prototype.listen=st.prototype.J,De.prototype.listenOnce=De.prototype.K,De.prototype.getLastError=De.prototype.Ha,De.prototype.getLastErrorCode=De.prototype.ya,De.prototype.getStatus=De.prototype.ca,De.prototype.getResponseJson=De.prototype.La,De.prototype.getResponseText=De.prototype.la,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Fa}).apply(typeof fo<"u"?fo:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */const Ie=class Ie{};E(Ie,"FOLD_CASE",1),E(Ie,"LITERAL",2),E(Ie,"CLASS_NL",4),E(Ie,"DOT_NL",8),E(Ie,"ONE_LINE",16),E(Ie,"NON_GREEDY",32),E(Ie,"PERL_X",64),E(Ie,"UNICODE_GROUPS",128),E(Ie,"WAS_DOLLAR",256),E(Ie,"MATCH_NL",Ie.CLASS_NL|Ie.DOT_NL),E(Ie,"PERL",Ie.CLASS_NL|Ie.ONE_LINE|Ie.PERL_X|Ie.UNICODE_GROUPS),E(Ie,"POSIX",0),E(Ie,"UNANCHORED",0),E(Ie,"ANCHOR_START",1),E(Ie,"ANCHOR_BOTH",2);let q=Ie;class b{static toUpperCase(e){const n=String.fromCodePoint(e).toUpperCase();if(n.length>1)return e;const r=String.fromCodePoint(n.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==e?e:n.codePointAt(0)}static toLowerCase(e){const n=String.fromCodePoint(e).toLowerCase();if(n.length>1)return e;const r=String.fromCodePoint(n.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==e?e:n.codePointAt(0)}}E(b,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]));const p=class p{};E(p,"CASE_ORBIT",new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]])),E(p,"C",[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]]),E(p,"Cc",[[0,31,1],[127,159,1]]),E(p,"Cf",[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]]),E(p,"Co",[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]]),E(p,"Cs",[[55296,57343,1]]),E(p,"L",[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),E(p,"foldL",[[837,837,1]]),E(p,"Ll",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]]),E(p,"foldLl",[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]]),E(p,"Lm",[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]]),E(p,"Lo",[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),E(p,"Lt",[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]]),E(p,"foldLt",[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]]),E(p,"Lu",[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]]),E(p,"Upper",p.Lu),E(p,"foldLu",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]]),E(p,"M",[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),E(p,"foldM",[[921,953,32],[8126,8126,1]]),E(p,"Mc",[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]]),E(p,"Me",[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]]),E(p,"Mn",[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),E(p,"foldMn",[[921,953,32],[8126,8126,1]]),E(p,"N",[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]]),E(p,"Nd",[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]]),E(p,"Nl",[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]]),E(p,"No",[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]]),E(p,"P",[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),E(p,"Pc",[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]]),E(p,"Pd",[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]]),E(p,"Pe",[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]]),E(p,"Pf",[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]]),E(p,"Pi",[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]]),E(p,"Po",[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),E(p,"Ps",[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]]),E(p,"S",[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),E(p,"Sc",[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]]),E(p,"Sk",[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]]),E(p,"Sm",[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]]),E(p,"So",[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),E(p,"Z",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]]),E(p,"Zl",[[8232,8232,1]]),E(p,"Zp",[[8233,8233,1]]),E(p,"Zs",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]]),E(p,"Adlam",[[125184,125259,1],[125264,125273,1],[125278,125279,1]]),E(p,"Ahom",[[71424,71450,1],[71453,71467,1],[71472,71494,1]]),E(p,"Anatolian_Hieroglyphs",[[82944,83526,1]]),E(p,"Arabic",[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]]),E(p,"Armenian",[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]]),E(p,"Avestan",[[68352,68405,1],[68409,68415,1]]),E(p,"Balinese",[[6912,6988,1],[6992,7038,1]]),E(p,"Bamum",[[42656,42743,1],[92160,92728,1]]),E(p,"Bassa_Vah",[[92880,92909,1],[92912,92917,1]]),E(p,"Batak",[[7104,7155,1],[7164,7167,1]]),E(p,"Bengali",[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]]),E(p,"Bhaiksuki",[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]]),E(p,"Bopomofo",[[746,747,1],[12549,12591,1],[12704,12735,1]]),E(p,"Brahmi",[[69632,69709,1],[69714,69749,1],[69759,69759,1]]),E(p,"Braille",[[10240,10495,1]]),E(p,"Buginese",[[6656,6683,1],[6686,6687,1]]),E(p,"Buhid",[[5952,5971,1]]),E(p,"Canadian_Aboriginal",[[5120,5759,1],[6320,6389,1],[72368,72383,1]]),E(p,"Carian",[[66208,66256,1]]),E(p,"Caucasian_Albanian",[[66864,66915,1],[66927,66927,1]]),E(p,"Chakma",[[69888,69940,1],[69942,69959,1]]),E(p,"Cham",[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]]),E(p,"Cherokee",[[5024,5109,1],[5112,5117,1],[43888,43967,1]]),E(p,"Chorasmian",[[69552,69579,1]]),E(p,"Common",[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]]),E(p,"foldCommon",[[924,956,32]]),E(p,"Coptic",[[994,1007,1],[11392,11507,1],[11513,11519,1]]),E(p,"Cuneiform",[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]]),E(p,"Cypriot",[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]]),E(p,"Cypro_Minoan",[[77712,77810,1]]),E(p,"Cyrillic",[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]]),E(p,"Deseret",[[66560,66639,1]]),E(p,"Devanagari",[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]]),E(p,"Dives_Akuru",[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]]),E(p,"Dogra",[[71680,71739,1]]),E(p,"Duployan",[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]]),E(p,"Egyptian_Hieroglyphs",[[77824,78933,1]]),E(p,"Elbasan",[[66816,66855,1]]),E(p,"Elymaic",[[69600,69622,1]]),E(p,"Ethiopic",[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]]),E(p,"Georgian",[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]]),E(p,"Glagolitic",[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]]),E(p,"Gothic",[[66352,66378,1]]),E(p,"Grantha",[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]]),E(p,"Greek",[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]]),E(p,"foldGreek",[[181,837,656]]),E(p,"Gujarati",[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]]),E(p,"Gunjala_Gondi",[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]]),E(p,"Gurmukhi",[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]]),E(p,"Han",[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),E(p,"Hangul",[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]]),E(p,"Hanifi_Rohingya",[[68864,68903,1],[68912,68921,1]]),E(p,"Hanunoo",[[5920,5940,1]]),E(p,"Hatran",[[67808,67826,1],[67828,67829,1],[67835,67839,1]]),E(p,"Hebrew",[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]]),E(p,"Hiragana",[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]]),E(p,"Imperial_Aramaic",[[67648,67669,1],[67671,67679,1]]),E(p,"Inherited",[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]]),E(p,"foldInherited",[[921,953,32],[8126,8126,1]]),E(p,"Inscriptional_Pahlavi",[[68448,68466,1],[68472,68479,1]]),E(p,"Inscriptional_Parthian",[[68416,68437,1],[68440,68447,1]]),E(p,"Javanese",[[43392,43469,1],[43472,43481,1],[43486,43487,1]]),E(p,"Kaithi",[[69760,69826,1],[69837,69837,1]]),E(p,"Kannada",[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]]),E(p,"Katakana",[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]]),E(p,"Kawi",[[73472,73488,1],[73490,73530,1],[73534,73561,1]]),E(p,"Kayah_Li",[[43264,43309,1],[43311,43311,1]]),E(p,"Kharoshthi",[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]]),E(p,"Khitan_Small_Script",[[94180,101120,6940],[101121,101589,1]]),E(p,"Khmer",[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]]),E(p,"Khojki",[[70144,70161,1],[70163,70209,1]]),E(p,"Khudawadi",[[70320,70378,1],[70384,70393,1]]),E(p,"Lao",[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]]),E(p,"Latin",[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]]),E(p,"Lepcha",[[7168,7223,1],[7227,7241,1],[7245,7247,1]]),E(p,"Limbu",[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]]),E(p,"Linear_A",[[67072,67382,1],[67392,67413,1],[67424,67431,1]]),E(p,"Linear_B",[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]]),E(p,"Lisu",[[42192,42239,1],[73648,73648,1]]),E(p,"Lycian",[[66176,66204,1]]),E(p,"Lydian",[[67872,67897,1],[67903,67903,1]]),E(p,"Mahajani",[[69968,70006,1]]),E(p,"Makasar",[[73440,73464,1]]),E(p,"Malayalam",[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]]),E(p,"Mandaic",[[2112,2139,1],[2142,2142,1]]),E(p,"Manichaean",[[68288,68326,1],[68331,68342,1]]),E(p,"Marchen",[[72816,72847,1],[72850,72871,1],[72873,72886,1]]),E(p,"Masaram_Gondi",[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]]),E(p,"Medefaidrin",[[93760,93850,1]]),E(p,"Meetei_Mayek",[[43744,43766,1],[43968,44013,1],[44016,44025,1]]),E(p,"Mende_Kikakui",[[124928,125124,1],[125127,125142,1]]),E(p,"Meroitic_Cursive",[[68e3,68023,1],[68028,68047,1],[68050,68095,1]]),E(p,"Meroitic_Hieroglyphs",[[67968,67999,1]]),E(p,"Miao",[[93952,94026,1],[94031,94087,1],[94095,94111,1]]),E(p,"Modi",[[71168,71236,1],[71248,71257,1]]),E(p,"Mongolian",[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]]),E(p,"Mro",[[92736,92766,1],[92768,92777,1],[92782,92783,1]]),E(p,"Multani",[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]]),E(p,"Myanmar",[[4096,4255,1],[43488,43518,1],[43616,43647,1]]),E(p,"Nabataean",[[67712,67742,1],[67751,67759,1]]),E(p,"Nag_Mundari",[[124112,124153,1]]),E(p,"Nandinagari",[[72096,72103,1],[72106,72151,1],[72154,72164,1]]),E(p,"New_Tai_Lue",[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]]),E(p,"Newa",[[70656,70747,1],[70749,70753,1]]),E(p,"Nko",[[1984,2042,1],[2045,2047,1]]),E(p,"Nushu",[[94177,110960,16783],[110961,111355,1]]),E(p,"Nyiakeng_Puachue_Hmong",[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]]),E(p,"Ogham",[[5760,5788,1]]),E(p,"Ol_Chiki",[[7248,7295,1]]),E(p,"Old_Hungarian",[[68736,68786,1],[68800,68850,1],[68858,68863,1]]),E(p,"Old_Italic",[[66304,66339,1],[66349,66351,1]]),E(p,"Old_North_Arabian",[[68224,68255,1]]),E(p,"Old_Permic",[[66384,66426,1]]),E(p,"Old_Persian",[[66464,66499,1],[66504,66517,1]]),E(p,"Old_Sogdian",[[69376,69415,1]]),E(p,"Old_South_Arabian",[[68192,68223,1]]),E(p,"Old_Turkic",[[68608,68680,1]]),E(p,"Old_Uyghur",[[69488,69513,1]]),E(p,"Oriya",[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]]),E(p,"Osage",[[66736,66771,1],[66776,66811,1]]),E(p,"Osmanya",[[66688,66717,1],[66720,66729,1]]),E(p,"Pahawh_Hmong",[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]]),E(p,"Palmyrene",[[67680,67711,1]]),E(p,"Pau_Cin_Hau",[[72384,72440,1]]),E(p,"Phags_Pa",[[43072,43127,1]]),E(p,"Phoenician",[[67840,67867,1],[67871,67871,1]]),E(p,"Psalter_Pahlavi",[[68480,68497,1],[68505,68508,1],[68521,68527,1]]),E(p,"Rejang",[[43312,43347,1],[43359,43359,1]]),E(p,"Runic",[[5792,5866,1],[5870,5880,1]]),E(p,"Samaritan",[[2048,2093,1],[2096,2110,1]]),E(p,"Saurashtra",[[43136,43205,1],[43214,43225,1]]),E(p,"Sharada",[[70016,70111,1]]),E(p,"Shavian",[[66640,66687,1]]),E(p,"Siddham",[[71040,71093,1],[71096,71133,1]]),E(p,"SignWriting",[[120832,121483,1],[121499,121503,1],[121505,121519,1]]),E(p,"Sinhala",[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]]),E(p,"Sogdian",[[69424,69465,1]]),E(p,"Sora_Sompeng",[[69840,69864,1],[69872,69881,1]]),E(p,"Soyombo",[[72272,72354,1]]),E(p,"Sundanese",[[7040,7103,1],[7360,7367,1]]),E(p,"Syloti_Nagri",[[43008,43052,1]]),E(p,"Syriac",[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]]),E(p,"Tagalog",[[5888,5909,1],[5919,5919,1]]),E(p,"Tagbanwa",[[5984,5996,1],[5998,6e3,1],[6002,6003,1]]),E(p,"Tai_Le",[[6480,6509,1],[6512,6516,1]]),E(p,"Tai_Tham",[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]]),E(p,"Tai_Viet",[[43648,43714,1],[43739,43743,1]]),E(p,"Takri",[[71296,71353,1],[71360,71369,1]]),E(p,"Tamil",[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]]),E(p,"Tangsa",[[92784,92862,1],[92864,92873,1]]),E(p,"Tangut",[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]]),E(p,"Telugu",[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]]),E(p,"Thaana",[[1920,1969,1]]),E(p,"Thai",[[3585,3642,1],[3648,3675,1]]),E(p,"Tibetan",[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]]),E(p,"Tifinagh",[[11568,11623,1],[11631,11632,1],[11647,11647,1]]),E(p,"Tirhuta",[[70784,70855,1],[70864,70873,1]]),E(p,"Toto",[[123536,123566,1]]),E(p,"Ugaritic",[[66432,66461,1],[66463,66463,1]]),E(p,"Vai",[[42240,42539,1]]),E(p,"Vithkuqi",[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]]),E(p,"Wancho",[[123584,123641,1],[123647,123647,1]]),E(p,"Warang_Citi",[[71840,71922,1],[71935,71935,1]]),E(p,"Yezidi",[[69248,69289,1],[69291,69293,1],[69296,69297,1]]),E(p,"Yi",[[40960,42124,1],[42128,42182,1]]),E(p,"Zanabazar_Square",[[72192,72263,1]]),E(p,"CATEGORIES",new Map([["C",p.C],["Cc",p.Cc],["Cf",p.Cf],["Co",p.Co],["Cs",p.Cs],["L",p.L],["Ll",p.Ll],["Lm",p.Lm],["Lo",p.Lo],["Lt",p.Lt],["Lu",p.Lu],["M",p.M],["Mc",p.Mc],["Me",p.Me],["Mn",p.Mn],["N",p.N],["Nd",p.Nd],["Nl",p.Nl],["No",p.No],["P",p.P],["Pc",p.Pc],["Pd",p.Pd],["Pe",p.Pe],["Pf",p.Pf],["Pi",p.Pi],["Po",p.Po],["Ps",p.Ps],["S",p.S],["Sc",p.Sc],["Sk",p.Sk],["Sm",p.Sm],["So",p.So],["Z",p.Z],["Zl",p.Zl],["Zp",p.Zp],["Zs",p.Zs]])),E(p,"SCRIPTS",new Map([["Adlam",p.Adlam],["Ahom",p.Ahom],["Anatolian_Hieroglyphs",p.Anatolian_Hieroglyphs],["Arabic",p.Arabic],["Armenian",p.Armenian],["Avestan",p.Avestan],["Balinese",p.Balinese],["Bamum",p.Bamum],["Bassa_Vah",p.Bassa_Vah],["Batak",p.Batak],["Bengali",p.Bengali],["Bhaiksuki",p.Bhaiksuki],["Bopomofo",p.Bopomofo],["Brahmi",p.Brahmi],["Braille",p.Braille],["Buginese",p.Buginese],["Buhid",p.Buhid],["Canadian_Aboriginal",p.Canadian_Aboriginal],["Carian",p.Carian],["Caucasian_Albanian",p.Caucasian_Albanian],["Chakma",p.Chakma],["Cham",p.Cham],["Cherokee",p.Cherokee],["Chorasmian",p.Chorasmian],["Common",p.Common],["Coptic",p.Coptic],["Cuneiform",p.Cuneiform],["Cypriot",p.Cypriot],["Cypro_Minoan",p.Cypro_Minoan],["Cyrillic",p.Cyrillic],["Deseret",p.Deseret],["Devanagari",p.Devanagari],["Dives_Akuru",p.Dives_Akuru],["Dogra",p.Dogra],["Duployan",p.Duployan],["Egyptian_Hieroglyphs",p.Egyptian_Hieroglyphs],["Elbasan",p.Elbasan],["Elymaic",p.Elymaic],["Ethiopic",p.Ethiopic],["Georgian",p.Georgian],["Glagolitic",p.Glagolitic],["Gothic",p.Gothic],["Grantha",p.Grantha],["Greek",p.Greek],["Gujarati",p.Gujarati],["Gunjala_Gondi",p.Gunjala_Gondi],["Gurmukhi",p.Gurmukhi],["Han",p.Han],["Hangul",p.Hangul],["Hanifi_Rohingya",p.Hanifi_Rohingya],["Hanunoo",p.Hanunoo],["Hatran",p.Hatran],["Hebrew",p.Hebrew],["Hiragana",p.Hiragana],["Imperial_Aramaic",p.Imperial_Aramaic],["Inherited",p.Inherited],["Inscriptional_Pahlavi",p.Inscriptional_Pahlavi],["Inscriptional_Parthian",p.Inscriptional_Parthian],["Javanese",p.Javanese],["Kaithi",p.Kaithi],["Kannada",p.Kannada],["Katakana",p.Katakana],["Kawi",p.Kawi],["Kayah_Li",p.Kayah_Li],["Kharoshthi",p.Kharoshthi],["Khitan_Small_Script",p.Khitan_Small_Script],["Khmer",p.Khmer],["Khojki",p.Khojki],["Khudawadi",p.Khudawadi],["Lao",p.Lao],["Latin",p.Latin],["Lepcha",p.Lepcha],["Limbu",p.Limbu],["Linear_A",p.Linear_A],["Linear_B",p.Linear_B],["Lisu",p.Lisu],["Lycian",p.Lycian],["Lydian",p.Lydian],["Mahajani",p.Mahajani],["Makasar",p.Makasar],["Malayalam",p.Malayalam],["Mandaic",p.Mandaic],["Manichaean",p.Manichaean],["Marchen",p.Marchen],["Masaram_Gondi",p.Masaram_Gondi],["Medefaidrin",p.Medefaidrin],["Meetei_Mayek",p.Meetei_Mayek],["Mende_Kikakui",p.Mende_Kikakui],["Meroitic_Cursive",p.Meroitic_Cursive],["Meroitic_Hieroglyphs",p.Meroitic_Hieroglyphs],["Miao",p.Miao],["Modi",p.Modi],["Mongolian",p.Mongolian],["Mro",p.Mro],["Multani",p.Multani],["Myanmar",p.Myanmar],["Nabataean",p.Nabataean],["Nag_Mundari",p.Nag_Mundari],["Nandinagari",p.Nandinagari],["New_Tai_Lue",p.New_Tai_Lue],["Newa",p.Newa],["Nko",p.Nko],["Nushu",p.Nushu],["Nyiakeng_Puachue_Hmong",p.Nyiakeng_Puachue_Hmong],["Ogham",p.Ogham],["Ol_Chiki",p.Ol_Chiki],["Old_Hungarian",p.Old_Hungarian],["Old_Italic",p.Old_Italic],["Old_North_Arabian",p.Old_North_Arabian],["Old_Permic",p.Old_Permic],["Old_Persian",p.Old_Persian],["Old_Sogdian",p.Old_Sogdian],["Old_South_Arabian",p.Old_South_Arabian],["Old_Turkic",p.Old_Turkic],["Old_Uyghur",p.Old_Uyghur],["Oriya",p.Oriya],["Osage",p.Osage],["Osmanya",p.Osmanya],["Pahawh_Hmong",p.Pahawh_Hmong],["Palmyrene",p.Palmyrene],["Pau_Cin_Hau",p.Pau_Cin_Hau],["Phags_Pa",p.Phags_Pa],["Phoenician",p.Phoenician],["Psalter_Pahlavi",p.Psalter_Pahlavi],["Rejang",p.Rejang],["Runic",p.Runic],["Samaritan",p.Samaritan],["Saurashtra",p.Saurashtra],["Sharada",p.Sharada],["Shavian",p.Shavian],["Siddham",p.Siddham],["SignWriting",p.SignWriting],["Sinhala",p.Sinhala],["Sogdian",p.Sogdian],["Sora_Sompeng",p.Sora_Sompeng],["Soyombo",p.Soyombo],["Sundanese",p.Sundanese],["Syloti_Nagri",p.Syloti_Nagri],["Syriac",p.Syriac],["Tagalog",p.Tagalog],["Tagbanwa",p.Tagbanwa],["Tai_Le",p.Tai_Le],["Tai_Tham",p.Tai_Tham],["Tai_Viet",p.Tai_Viet],["Takri",p.Takri],["Tamil",p.Tamil],["Tangsa",p.Tangsa],["Tangut",p.Tangut],["Telugu",p.Telugu],["Thaana",p.Thaana],["Thai",p.Thai],["Tibetan",p.Tibetan],["Tifinagh",p.Tifinagh],["Tirhuta",p.Tirhuta],["Toto",p.Toto],["Ugaritic",p.Ugaritic],["Vai",p.Vai],["Vithkuqi",p.Vithkuqi],["Wancho",p.Wancho],["Warang_Citi",p.Warang_Citi],["Yezidi",p.Yezidi],["Yi",p.Yi],["Zanabazar_Square",p.Zanabazar_Square]])),E(p,"FOLD_CATEGORIES",new Map([["L",p.foldL],["Ll",p.foldLl],["Lt",p.foldLt],["Lu",p.foldLu],["M",p.foldM],["Mn",p.foldMn]])),E(p,"FOLD_SCRIPT",new Map([["Common",p.foldCommon],["Greek",p.foldGreek],["Inherited",p.foldInherited]]));let ot=p;class te{static is32(e,n){let r=0,s=e.length;for(;r<s;){let i=r+Math.floor((s-r)/2),a=e[i];if(a[0]<=n&&n<=a[1])return(n-a[0])%a[2]===0;n<a[0]?s=i:r=i+1}return!1}static is(e,n){if(n<=this.MAX_LATIN1){for(let r of e)if(!(n>r[1]))return n<r[0]?!1:(n-r[0])%r[2]===0;return!1}return e.length>0&&n>=e[0][0]&&this.is32(e,n)}static isUpper(e){if(e<=this.MAX_LATIN1){const n=String.fromCodePoint(e);return n.toUpperCase()===n&&n.toLowerCase()!==n}return this.is(ot.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(ot.L,e)||this.is(ot.M,e)||this.is(ot.N,e)||this.is(ot.P,e)||this.is(ot.S,e)}static simpleFold(e){if(ot.CASE_ORBIT.has(e))return ot.CASE_ORBIT.get(e);const n=b.toLowerCase(e);return n!==e?n:b.toUpperCase(e)}static equalsIgnoreCase(e,n){if(e<0||n<0||e===n)return!0;if(e<=this.MAX_ASCII&&n<=this.MAX_ASCII)return b.CODES.get("A")<=e&&e<=b.CODES.get("Z")&&(e|=32),b.CODES.get("A")<=n&&n<=b.CODES.get("Z")&&(n|=32),e===n;for(let r=this.simpleFold(e);r!==e;r=this.simpleFold(r))if(r===n)return!0;return!1}}E(te,"MAX_RUNE",1114111),E(te,"MAX_ASCII",127),E(te,"MAX_LATIN1",255),E(te,"MAX_BMP",65535),E(te,"MIN_FOLD",65),E(te,"MAX_FOLD",125251);class se{static emptyInts(){return[]}static isalnum(e){return b.CODES.get("0")<=e&&e<=b.CODES.get("9")||b.CODES.get("a")<=e&&e<=b.CODES.get("z")||b.CODES.get("A")<=e&&e<=b.CODES.get("Z")}static unhex(e){return b.CODES.get("0")<=e&&e<=b.CODES.get("9")?e-b.CODES.get("0"):b.CODES.get("a")<=e&&e<=b.CODES.get("f")?e-b.CODES.get("a")+10:b.CODES.get("A")<=e&&e<=b.CODES.get("F")?e-b.CODES.get("A")+10:-1}static escapeRune(e){let n="";if(te.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(n+="\\"),n+=String.fromCodePoint(e);else switch(e){case b.CODES.get('"'):n+='\\"';break;case b.CODES.get("\\"):n+="\\\\";break;case b.CODES.get("	"):n+="\\t";break;case b.CODES.get(`
`):n+="\\n";break;case b.CODES.get("\r"):n+="\\r";break;case b.CODES.get("\b"):n+="\\b";break;case b.CODES.get("\f"):n+="\\f";break;default:{let r=e.toString(16);e<256?(n+="\\x",r.length===1&&(n+="0"),n+=r):n+=`\\x{${r}}`;break}}return n}static stringToRunes(e){return String(e).split("").map(n=>n.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return b.CODES.get("a")<=e&&e<=b.CODES.get("z")||b.CODES.get("A")<=e&&e<=b.CODES.get("Z")||b.CODES.get("0")<=e&&e<=b.CODES.get("9")||e===b.CODES.get("_")}static emptyOpContext(e,n){let r=0;return e<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===b.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),n<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),n===b.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(n)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(n=>this.METACHARACTERS.indexOf(n)>=0?`\\${n}`:n).join("")}static charCount(e){return e>te.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let n=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?n[r++]=i:i<2048?(n[r++]=i>>6|192,n[r++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),n[r++]=i>>18|240,n[r++]=i>>12&63|128,n[r++]=i>>6&63|128,n[r++]=i&63|128):(n[r++]=i>>12|224,n[r++]=i>>6&63|128,n[r++]=i&63|128)}return n}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let n=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)n[s++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];n[s++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[r++],l=e[r++],c=e[r++],d=((i&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;n[s++]=String.fromCharCode(55296+(d>>10)),n[s++]=String.fromCharCode(56320+(d&1023))}else{let a=e[r++],l=e[r++];n[s++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return n.join("")}}}E(se,"METACHARACTERS","\\.+*?()|[]{}^$"),E(se,"EMPTY_BEGIN_LINE",1),E(se,"EMPTY_END_LINE",2),E(se,"EMPTY_BEGIN_TEXT",4),E(se,"EMPTY_END_TEXT",8),E(se,"EMPTY_WORD_BOUNDARY",16),E(se,"EMPTY_NO_WORD_BOUNDARY",32),E(se,"EMPTY_ALL",-1);const a7=(t=[],e=0)=>{const n={};for(let r=0;r<t.length;r++){const s=t[r],i=e+r;n[s]=i,n[i]=s}return Object.freeze(n)},Yi=class Yi{getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Yi.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Yi.Encoding.UTF_16}};E(Yi,"Encoding",a7(["UTF_16","UTF_8"]));let vr=Yi;class wf extends vr{constructor(e=null){super(),this.bytes=e}getEncoding(){return vr.Encoding.UTF_8}asCharSequence(){return se.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class Tg extends vr{constructor(e=null){super(),this.charSequence=e}getEncoding(){return vr.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class hl{static utf16(e){return new Tg(e)}static utf8(e){return Array.isArray(e)?new wf(e):new wf(se.stringToUtf8ByteArray(e))}}class Gl extends Error{constructor(e){super(e),this.name="RE2JSException"}}class be extends Gl{constructor(e,n=null){let r=`error parsing regexp: ${e}`;n&&(r+=`: \`${n}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=e,this.input=n}getDescription(){return this.error}getPattern(){return this.input}}class Pg extends Gl{constructor(e){super(e),this.name="RE2JSCompileException"}}class Cn extends Gl{constructor(e){super(e),this.name="RE2JSGroupException"}}class Ig extends Gl{constructor(e){super(e),this.name="RE2JSFlagsException"}}class Rg{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const r=n.codePointAt(0);return r===b.CODES["\\"]||r===b.CODES.$?`\\${n}`:n}).join("")}constructor(e,n){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,n instanceof vr?this.resetMatcherInput(n):Array.isArray(n)?this.resetMatcherInput(hl.utf8(n)):this.resetMatcherInput(hl.utf16(n))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const n=this.namedGroups[e];if(!Number.isFinite(n))throw new Cn(`group '${e}' not found`);e=n}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const n=this.namedGroups[e];if(!Number.isFinite(n))throw new Cn(`group '${e}' not found`);e=n}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new Cn(`group '${e}' not found`);e=s}const n=this.start(e),r=this.end(e);return n<0&&r<0?null:this.substring(n,r)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new Cn(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Cn("perhaps no match attempted");if(e===0||this.hasGroups)return;let n=this.groups[1]+1;n>this.matcherInputLength&&(n=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],n,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new Cn("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,q.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,q.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new Cn(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,q.UNANCHORED)}genMatch(e,n){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,n,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=n,!0):!1}substring(e,n){return this.matcherInput.isUTF8Encoding()?se.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,n)):this.matcherInput.asCharSequence().substring(e,n).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,n=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=n?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),r}appendReplacementInternal(e){let n="",r=0;const s=e.length;for(let i=0;i<s-1;i++){if(e.codePointAt(i)===b.CODES.get("\\")){r<i&&(n+=e.substring(r,i)),i++,r=i;continue}if(e.codePointAt(i)===b.CODES.get("$")){let a=e.codePointAt(i+1);if(b.CODES.get("0")<=a&&a<=b.CODES.get("9")){let l=a-b.CODES.get("0");for(r<i&&(n+=e.substring(r,i)),i+=2;i<s&&(a=e.codePointAt(i),!(a<b.CODES.get("0")||a>b.CODES.get("9")||l*10+a-b.CODES.get("0")>this.patternGroupCount));i++)l=l*10+a-b.CODES.get("0");if(l>this.patternGroupCount)throw new Cn(`n > number of groups: ${l}`);const c=this.group(l);c!==null&&(n+=c),r=i,i--;continue}else if(a===b.CODES.get("{")){r<i&&(n+=e.substring(r,i)),i++;let l=i+1;for(;l<e.length&&e.codePointAt(l)!==b.CODES.get("}")&&e.codePointAt(l)!==b.CODES.get(" ");)l++;if(l===e.length||e.codePointAt(l)!==b.CODES.get("}"))throw new Cn("named capture group is missing trailing '}'");const c=e.substring(i+1,l);n+=this.group(c),r=l+1}}}return r<s&&(n+=e.substring(r,s)),n}appendReplacementInternalPerl(e){let n="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===b.CODES.get("$")){let a=e.codePointAt(i+1);if(b.CODES.get("$")===a){r<i&&(n+=e.substring(r,i)),n+="$",i++,r=i+1;continue}else if(b.CODES.get("&")===a){r<i&&(n+=e.substring(r,i));const l=this.group(0);l!==null?n+=l:n+="$&",i++,r=i+1;continue}else if(b.CODES.get("1")<=a&&a<=b.CODES.get("9")){let l=a-b.CODES.get("0");for(r<i&&(n+=e.substring(r,i)),i+=2;i<s&&(a=e.codePointAt(i),!(a<b.CODES.get("0")||a>b.CODES.get("9")||l*10+a-b.CODES.get("0")>this.patternGroupCount));i++)l=l*10+a-b.CODES.get("0");if(l>this.patternGroupCount){n+=`$${l}`,r=i,i--;continue}const c=this.group(l);c!==null&&(n+=c),r=i,i--;continue}else if(a===b.CODES.get("<")){r<i&&(n+=e.substring(r,i)),i++;let l=i+1;for(;l<e.length&&e.codePointAt(l)!==b.CODES.get(">")&&e.codePointAt(l)!==b.CODES.get(" ");)l++;if(l===e.length||e.codePointAt(l)!==b.CODES.get(">")){n+=e.substring(i-1,l+1),r=l+1;continue}const c=e.substring(i+1,l);Object.prototype.hasOwnProperty.call(this.namedGroups,c)?n+=this.group(c):n+=`$<${c}>`,r=l+1}}return r<s&&(n+=e.substring(r,s)),n}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,n=!1){return this.replace(e,!0,n)}replaceFirst(e,n=!1){return this.replace(e,!1,n)}replace(e,n=!0,r=!1){let s="";for(this.reset();this.find()&&(s+=this.appendReplacement(e,r),!!n););return s+=this.appendTail(),s}}class Zn{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class Og extends Zn{constructor(e,n=0,r=e.length){super(),this.bytes=e,this.start=n,this.end=r}step(e){if(e+=this.start,e>=this.end)return Zn.EOF();let n=this.bytes[e++]&255;return n&128?(n&224)===192?(n=n&31,e>=this.end?Zn.EOF():(n=n<<6|this.bytes[e++]&63,n<<3|2)):(n&240)===224?(n=n&15,e+1>=this.end?Zn.EOF():(n=n<<6|this.bytes[e++]&63,n=n<<6|this.bytes[e++]&63,n<<3|3)):(n=n&7,e+2>=this.end?Zn.EOF():(n=n<<6|this.bytes[e++]&63,n=n<<6|this.bytes[e++]&63,n=n<<6|this.bytes[e++]&63,n<<3|4)):n<<3|1}index(e,n){n+=this.start;const r=this.indexOf(this.bytes,e.prefixUTF8,n);return r<0?r:r-n}context(e){e+=this.start;let n=-1;if(e>this.start&&e<=this.end){let s=e-1;if(n=this.bytes[s--],n>=128){let i=e-4;for(i<this.start&&(i=this.start);s>=i&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start),n=this.step(s)>>3}}const r=e<this.end?this.step(e)>>3:-1;return se.emptyOpContext(n,r)}indexOf(e,n,r=0){let s=n.length;if(s===0)return-1;let i=e.length;for(let a=r;a<=i-s;a++)for(let l=0;l<s&&e[a+l]===n[l];l++)if(l===s-1)return a;return-1}}class Lg extends Zn{constructor(e,n=0,r=e.length){super(),this.charSequence=e,this.start=n,this.end=r}step(e){if(e+=this.start,e<this.end){const n=this.charSequence.codePointAt(e);return n<<3|se.charCount(n)}else return Zn.EOF()}index(e,n){n+=this.start;const r=this.charSequence.indexOf(e.prefix,n);return r<0?r:r-n}context(e){e+=this.start;const n=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,r=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return se.emptyOpContext(n,r)}}class Ve{static fromUTF8(e,n=0,r=e.length){return new Og(e,n,r)}static fromUTF16(e,n=0,r=e.length){return new Lg(e,n,r)}}const Z=class Z{static isPseudoOp(e){return e>=Z.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===b.CODES.get("-")?"\\":""}static fromRegexp(e){const n=new Z(e.op);return n.flags=e.flags,n.subs=e.subs,n.runes=e.runes,n.cap=e.cap,n.min=e.min,n.max=e.max,n.name=e.name,n.namedGroups=e.namedGroups,n}constructor(e){this.op=e,this.flags=0,this.subs=Z.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=Z.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case Z.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case Z.Op.EMPTY_MATCH:e+="(?:)";break;case Z.Op.STAR:case Z.Op.PLUS:case Z.Op.QUEST:case Z.Op.REPEAT:{const n=this.subs[0];switch(n.op>Z.Op.CAPTURE||n.op===Z.Op.LITERAL&&n.runes.length>1?e+=`(?:${n.appendTo()})`:e+=n.appendTo(),this.op){case Z.Op.STAR:e+="*";break;case Z.Op.PLUS:e+="+";break;case Z.Op.QUEST:e+="?";break;case Z.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&q.NON_GREEDY&&(e+="?");break}case Z.Op.CONCAT:{for(let n of this.subs)n.op===Z.Op.ALTERNATE?e+=`(?:${n.appendTo()})`:e+=n.appendTo();break}case Z.Op.ALTERNATE:{let n="";for(let r of this.subs)e+=n,n="|",e+=r.appendTo();break}case Z.Op.LITERAL:this.flags&q.FOLD_CASE&&(e+="(?i:");for(let n of this.runes)e+=se.escapeRune(n);this.flags&q.FOLD_CASE&&(e+=")");break;case Z.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case Z.Op.ANY_CHAR:e+="(?s:.)";break;case Z.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==Z.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case Z.Op.BEGIN_TEXT:e+="\\A";break;case Z.Op.END_TEXT:this.flags&q.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case Z.Op.BEGIN_LINE:e+="^";break;case Z.Op.END_LINE:e+="$";break;case Z.Op.WORD_BOUNDARY:e+="\\b";break;case Z.Op.NO_WORD_BOUNDARY:e+="\\B";break;case Z.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===te.MAX_RUNE){e+="^";for(let n=1;n<this.runes.length-1;n+=2){const r=this.runes[n]+1,s=this.runes[n+1]-1;e+=Z.quoteIfHyphen(r),e+=se.escapeRune(r),r!==s&&(e+="-",e+=Z.quoteIfHyphen(s),e+=se.escapeRune(s))}}else for(let n=0;n<this.runes.length;n+=2){const r=this.runes[n],s=this.runes[n+1];e+=Z.quoteIfHyphen(r),e+=se.escapeRune(r),r!==s&&(e+="-",e+=Z.quoteIfHyphen(s),e+=se.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===Z.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let n of this.subs){const r=n.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof Z)||this.op!==e.op)return!1;switch(this.op){case Z.Op.END_TEXT:{if((this.flags&q.WAS_DOLLAR)!==(e.flags&q.WAS_DOLLAR))return!1;break}case Z.Op.LITERAL:case Z.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let n=0;n<this.runes.length;n++)if(this.runes[n]!==e.runes[n])return!1;break}case Z.Op.ALTERNATE:case Z.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let n=0;n<this.subs.length;++n)if(!this.subs[n].equals(e.subs[n]))return!1;break}case Z.Op.STAR:case Z.Op.PLUS:case Z.Op.QUEST:{if((this.flags&q.NON_GREEDY)!==(e.flags&q.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case Z.Op.REPEAT:{if((this.flags&q.NON_GREEDY)!==(e.flags&q.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case Z.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}};E(Z,"Op",a7(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]));let B=Z;const _e=class _e{static isRuneOp(e){return _e.RUNE<=e&&e<=_e.RUNE_ANY_NOT_NL}static escapeRunes(e){let n='"';for(let r of e)n+=se.escapeRune(r);return n+='"',n}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const s=this.runes[0];return this.arg&q.FOLD_CASE?te.equalsIgnoreCase(s,e):e===s}for(let s=0;s<this.runes.length&&s<=8;s+=2){if(e<this.runes[s])return!1;if(e<=this.runes[s+1])return!0}let n=0,r=this.runes.length/2|0;for(;n<r;){const s=n+((r-n)/2|0);if(this.runes[2*s]<=e){if(e<=this.runes[2*s+1])return!0;n=s+1}else r=s}return!1}toString(){switch(this.op){case _e.ALT:return`alt -> ${this.out}, ${this.arg}`;case _e.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case _e.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case _e.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case _e.MATCH:return"match";case _e.FAIL:return"fail";case _e.NOP:return`nop -> ${this.out}`;case _e.RUNE:return this.runes===null?"rune <null>":["rune ",_e.escapeRunes(this.runes),this.arg&q.FOLD_CASE?"/i":""," -> ",this.out].join("");case _e.RUNE1:return`rune1 ${_e.escapeRunes(this.runes)} -> ${this.out}`;case _e.RUNE_ANY:return`any -> ${this.out}`;case _e.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}};E(_e,"ALT",1),E(_e,"ALT_MATCH",2),E(_e,"CAPTURE",3),E(_e,"EMPTY_WIDTH",4),E(_e,"FAIL",5),E(_e,"MATCH",6),E(_e,"NOP",7),E(_e,"RUNE",8),E(_e,"RUNE1",9),E(_e,"RUNE_ANY",10),E(_e,"RUNE_ANY_NOT_NL",11);let ie=_e;class jg{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new ie(e))}skipNop(e){let n=this.inst[e];for(;n.op===ie.NOP||n.op===ie.CAPTURE;)n=this.inst[e],e=n.out;return n}prefix(){let e="",n=this.skipNop(this.start);if(!ie.isRuneOp(n.op)||n.runes.length!==1)return[n.op===ie.MATCH,e];for(;ie.isRuneOp(n.op)&&n.runes.length===1&&!(n.arg&q.FOLD_CASE);)e+=String.fromCodePoint(n.runes[0]),n=this.skipNop(n.out);return[n.op===ie.MATCH,e]}startCond(){let e=0,n=this.start;e:for(;;){const r=this.inst[n];switch(r.op){case ie.EMPTY_WIDTH:e|=r.arg;break;case ie.FAIL:return-1;case ie.CAPTURE:case ie.NOP:break;default:break e}n=r.out}return e}next(e){const n=this.inst[e>>1];return e&1?n.arg:n.out}patch(e,n){for(;e!==0;){const r=this.inst[e>>1];e&1?(e=r.arg,r.arg=n):(e=r.out,r.out=n)}}append(e,n){if(e===0)return n;if(n===0)return e;let r=e;for(;;){const i=this.next(r);if(i===0)break;r=i}const s=this.inst[r>>1];return r&1?s.arg=n:s.out=n,e}toString(){let e="";for(let n=0;n<this.inst.length;n++){const r=e.length;e+=n,n===this.start&&(e+="*"),e+="        ".substring(e.length-r),e+=this.inst[n],e+=`
`}return e}}class po{constructor(e=0,n=0,r=!1){this.i=e,this.out=n,this.nullable=r}}class Bi{static ANY_RUNE_NOT_NL(){return[0,b.CODES.get(`
`)-1,b.CODES.get(`
`)+1,te.MAX_RUNE]}static ANY_RUNE(){return[0,te.MAX_RUNE]}static compileRegexp(e){const n=new Bi,r=n.compile(e);return n.prog.patch(r.out,n.newInst(ie.MATCH).i),n.prog.start=r.i,n.prog}constructor(){this.prog=new jg,this.newInst(ie.FAIL)}newInst(e){return this.prog.addInst(e),new po(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(ie.NOP);return e.out=e.i<<1,e}fail(){return new po}cap(e){const n=this.newInst(ie.CAPTURE);return n.out=n.i<<1,this.prog.getInst(n.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),n}cat(e,n){return e.i===0||n.i===0?this.fail():(this.prog.patch(e.out,n.i),new po(e.i,n.out,e.nullable&&n.nullable))}alt(e,n){if(e.i===0)return n;if(n.i===0)return e;const r=this.newInst(ie.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=n.i,r.out=this.prog.append(e.out,n.out),r.nullable=e.nullable||n.nullable,r}loop(e,n){const r=this.newInst(ie.ALT),s=this.prog.getInst(r.i);return n?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),this.prog.patch(e.out,r.i),r}quest(e,n){const r=this.newInst(ie.ALT),s=this.prog.getInst(r.i);return n?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,e.out),r}star(e,n){return e.nullable?this.quest(this.plus(e,n),n):this.loop(e,n)}plus(e,n){return new po(e.i,this.loop(e,n).out,e.nullable)}empty(e){const n=this.newInst(ie.EMPTY_WIDTH);return this.prog.getInst(n.i).arg=e,n.out=n.i<<1,n}rune(e,n){const r=this.newInst(ie.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,n&=q.FOLD_CASE,(e.length!==1||te.simpleFold(e[0])===e[0])&&(n&=-2),s.arg=n,r.out=r.i<<1,!(n&q.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=ie.RUNE1:e.length===2&&e[0]===0&&e[1]===te.MAX_RUNE?s.op=ie.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===b.CODES.get(`
`)-1&&e[2]===b.CODES.get(`
`)+1&&e[3]===te.MAX_RUNE&&(s.op=ie.RUNE_ANY_NOT_NL),r}compile(e){switch(e.op){case B.Op.NO_MATCH:return this.fail();case B.Op.EMPTY_MATCH:return this.nop();case B.Op.LITERAL:if(e.runes.length===0)return this.nop();{let n=null;for(let r of e.runes){const s=this.rune([r],e.flags);n=n===null?s:this.cat(n,s)}return n}case B.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case B.Op.ANY_CHAR_NOT_NL:return this.rune(Bi.ANY_RUNE_NOT_NL(),0);case B.Op.ANY_CHAR:return this.rune(Bi.ANY_RUNE(),0);case B.Op.BEGIN_LINE:return this.empty(se.EMPTY_BEGIN_LINE);case B.Op.END_LINE:return this.empty(se.EMPTY_END_LINE);case B.Op.BEGIN_TEXT:return this.empty(se.EMPTY_BEGIN_TEXT);case B.Op.END_TEXT:return this.empty(se.EMPTY_END_TEXT);case B.Op.WORD_BOUNDARY:return this.empty(se.EMPTY_WORD_BOUNDARY);case B.Op.NO_WORD_BOUNDARY:return this.empty(se.EMPTY_NO_WORD_BOUNDARY);case B.Op.CAPTURE:{const n=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(n,r),s)}case B.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&q.NON_GREEDY)!==0);case B.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&q.NON_GREEDY)!==0);case B.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&q.NON_GREEDY)!==0);case B.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let n=null;for(let r of e.subs){const s=this.compile(r);n=n===null?s:this.cat(n,s)}return n}}case B.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let n=null;for(let r of e.subs){const s=this.compile(r);n=n===null?s:this.alt(n,s)}return n}}default:throw new Pg("regexp: unhandled case in compile")}}}class Jt{static simplify(e){if(e===null)return null;switch(e.op){case B.Op.CAPTURE:case B.Op.CONCAT:case B.Op.ALTERNATE:{let n=e;for(let r=0;r<e.subs.length;r++){const s=e.subs[r],i=Jt.simplify(s);n===e&&i!==s&&(n=B.fromRegexp(e),n.runes=null,n.subs=e.subs.slice(0,e.subs.length)),n!==e&&(n.subs[r]=i)}return n}case B.Op.STAR:case B.Op.PLUS:case B.Op.QUEST:{const n=Jt.simplify(e.subs[0]);return Jt.simplify1(e.op,e.flags,n,e)}case B.Op.REPEAT:{if(e.min===0&&e.max===0)return new B(B.Op.EMPTY_MATCH);const n=Jt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Jt.simplify1(B.Op.STAR,e.flags,n,null);if(e.min===1)return Jt.simplify1(B.Op.PLUS,e.flags,n,null);const s=new B(B.Op.CONCAT),i=[];for(let a=0;a<e.min-1;a++)i.push(n);return i.push(Jt.simplify1(B.Op.PLUS,e.flags,n,null)),s.subs=i.slice(0),s}if(e.min===1&&e.max===1)return n;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(n)}if(e.max>e.min){let s=Jt.simplify1(B.Op.QUEST,e.flags,n,null);for(let i=e.min+1;i<e.max;i++){const a=new B(B.Op.CONCAT);a.subs=[n,s],s=Jt.simplify1(B.Op.QUEST,e.flags,a,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new B(B.Op.CONCAT);return s.subs=r.slice(0),s}return new B(B.Op.NO_MATCH)}}return e}static simplify1(e,n,r,s){return r.op===B.Op.EMPTY_MATCH||e===r.op&&(n&q.NON_GREEDY)===(r.flags&q.NON_GREEDY)?r:(s!==null&&s.op===e&&(s.flags&q.NON_GREEDY)===(n&q.NON_GREEDY)&&r===s.subs[0]||(s=new B(e),s.flags=n,s.subs=[r]),s)}}class ce{constructor(e,n){this.sign=e,this.cls=n}}const xf=[48,57],Ef=[9,10,12,13,32,32],Nf=[48,57,65,90,95,95,97,122],Sf=new Map([["\\d",new ce(1,xf)],["\\D",new ce(-1,xf)],["\\s",new ce(1,Ef)],["\\S",new ce(-1,Ef)],["\\w",new ce(1,Nf)],["\\W",new ce(-1,Nf)]]),Cf=[48,57,65,90,97,122],Af=[65,90,97,122],kf=[0,127],Tf=[9,9,32,32],Pf=[0,31,127,127],If=[48,57],Rf=[33,126],Of=[97,122],Lf=[32,126],jf=[33,47,58,64,91,96,123,126],Df=[9,13,32,32],bf=[65,90],Vf=[48,57,65,90,95,95,97,122],Mf=[48,57,65,70,97,102],Ff=new Map([["[:alnum:]",new ce(1,Cf)],["[:^alnum:]",new ce(-1,Cf)],["[:alpha:]",new ce(1,Af)],["[:^alpha:]",new ce(-1,Af)],["[:ascii:]",new ce(1,kf)],["[:^ascii:]",new ce(-1,kf)],["[:blank:]",new ce(1,Tf)],["[:^blank:]",new ce(-1,Tf)],["[:cntrl:]",new ce(1,Pf)],["[:^cntrl:]",new ce(-1,Pf)],["[:digit:]",new ce(1,If)],["[:^digit:]",new ce(-1,If)],["[:graph:]",new ce(1,Rf)],["[:^graph:]",new ce(-1,Rf)],["[:lower:]",new ce(1,Of)],["[:^lower:]",new ce(-1,Of)],["[:print:]",new ce(1,Lf)],["[:^print:]",new ce(-1,Lf)],["[:punct:]",new ce(1,jf)],["[:^punct:]",new ce(-1,jf)],["[:space:]",new ce(1,Df)],["[:^space:]",new ce(-1,Df)],["[:upper:]",new ce(1,bf)],["[:^upper:]",new ce(-1,bf)],["[:word:]",new ce(1,Vf)],["[:^word:]",new ce(-1,Vf)],["[:xdigit:]",new ce(1,Mf)],["[:^xdigit:]",new ce(-1,Mf)]]);class lt{static charClassToString(e,n){let r="[";for(let s=0;s<n;s+=2){s>0&&(r+=" ");const i=e[s],a=e[s+1];i===a?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${a.toString(16)}`}return r+="]",r}static cmp(e,n,r,s){const i=e[n]-r;return i!==0?i:s-e[n+1]}static qsortIntPair(e,n,r){const s=((n+r)/2|0)&-2,i=e[s],a=e[s+1];let l=n,c=r;for(;l<=c;){for(;l<r&&lt.cmp(e,l,i,a)<0;)l+=2;for(;c>n&&lt.cmp(e,c,i,a)>0;)c-=2;if(l<=c){if(l!==c){let d=e[l];e[l]=e[c],e[c]=d,d=e[l+1],e[l+1]=e[c+1],e[c+1]=d}l+=2,c-=2}}n<c&&lt.qsortIntPair(e,n,c),l<r&&lt.qsortIntPair(e,l,r)}constructor(e=se.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;lt.qsortIntPair(this.r,0,this.len-2);let e=2;for(let n=2;n<this.len;n+=2){const r=this.r[n],s=this.r[n+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,n){return n&q.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,n){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=n+1)return e<s&&(this.r[this.len-r]=e),n>i&&(this.r[this.len-r+1]=n),this}}return this.r[this.len++]=e,this.r[this.len++]=n,this}appendFoldedRange(e,n){if(e<=te.MIN_FOLD&&n>=te.MAX_FOLD)return this.appendRange(e,n);if(n<te.MIN_FOLD||e>te.MAX_FOLD)return this.appendRange(e,n);e<te.MIN_FOLD&&(this.appendRange(e,te.MIN_FOLD-1),e=te.MIN_FOLD),n>te.MAX_FOLD&&(this.appendRange(te.MAX_FOLD+1,n),n=te.MAX_FOLD);for(let r=e;r<=n;r++){this.appendRange(r,r);for(let s=te.simpleFold(r);s!==r;s=te.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let n=0;n<e.length;n+=2)this.appendRange(e[n],e[n+1]);return this}appendFoldedClass(e){for(let n=0;n<e.length;n+=2)this.appendFoldedRange(e[n],e[n+1]);return this}appendNegatedClass(e){let n=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];n<=s-1&&this.appendRange(n,s-1),n=i+1}return n<=te.MAX_RUNE&&this.appendRange(n,te.MAX_RUNE),this}appendTable(e){for(let n of e){const r=n[0],s=n[1],i=n[2];if(i===1){this.appendRange(r,s);continue}for(let a=r;a<=s;a+=i)this.appendRange(a,a)}return this}appendNegatedTable(e){let n=0;for(let r of e){const s=r[0],i=r[1],a=r[2];if(a===1){n<=s-1&&this.appendRange(n,s-1),n=i+1;continue}for(let l=s;l<=i;l+=a)n<=l-1&&this.appendRange(n,l-1),n=l+1}return n<=te.MAX_RUNE&&this.appendRange(n,te.MAX_RUNE),this}appendTableWithSign(e,n){return n<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,n=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[n]=e,this.r[n+1]=s-1,n+=2),e=i+1}return this.len=n,e<=te.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=te.MAX_RUNE),this}appendClassWithSign(e,n){return n<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,n){let r=e.cls;return n&&(r=new lt().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return lt.charClassToString(this.r,this.len)}}class $i{static of(e,n){return new $i(e,n)}constructor(e,n){this.first=e,this.second=n}}class Dg{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=se.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}const Q=class Q{static ANY_TABLE(){return[[0,te.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?$i.of(Q.ANY_TABLE(),Q.ANY_TABLE()):ot.CATEGORIES.has(e)?$i.of(ot.CATEGORIES.get(e),ot.FOLD_CATEGORIES.get(e)):ot.SCRIPTS.has(e)?$i.of(ot.SCRIPTS.get(e),ot.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<te.MIN_FOLD||e>te.MAX_FOLD)return e;let n=e;const r=e;for(e=te.simpleFold(e);e!==r;e=te.simpleFold(e))n>e&&(n=e);return n}static leadingRegexp(e){if(e.op===B.Op.EMPTY_MATCH)return null;if(e.op===B.Op.CONCAT&&e.subs.length>0){const n=e.subs[0];return n.op===B.Op.EMPTY_MATCH?null:n}return e}static literalRegexp(e,n){const r=new B(B.Op.LITERAL);return r.flags=n,r.runes=se.stringToRunes(e),r}static parse(e,n){return new Q(e,n).parseInternal()}static parseRepeat(e){const n=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=Q.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=Q.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new be(Q.ERR_INVALID_REPEAT_SIZE,e.from(n));return r<<16|s&te.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let n=0;n<e.length;n++){const r=e.codePointAt(n);if(r!==b.CODES.get("_")&&!se.isalnum(r))return!1}return!0}static parseInt(e){const n=e.pos();for(;e.more()&&e.peek()>=b.CODES.get("0")&&e.peek()<=b.CODES.get("9");)e.skip(1);const r=e.from(n);return r.length===0||r.length>1&&r.codePointAt(0)===b.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(e){return e.op===B.Op.LITERAL&&e.runes.length===1||e.op===B.Op.CHAR_CLASS||e.op===B.Op.ANY_CHAR_NOT_NL||e.op===B.Op.ANY_CHAR}static matchRune(e,n){switch(e.op){case B.Op.LITERAL:return e.runes.length===1&&e.runes[0]===n;case B.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=n&&n<=e.runes[r+1])return!0;return!1;case B.Op.ANY_CHAR_NOT_NL:return n!==b.CODES.get(`
`);case B.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,n){switch(e.op){case B.Op.ANY_CHAR:break;case B.Op.ANY_CHAR_NOT_NL:Q.matchRune(n,b.CODES.get(`
`))&&(e.op=B.Op.ANY_CHAR);break;case B.Op.CHAR_CLASS:n.op===B.Op.LITERAL?e.runes=new lt(e.runes).appendLiteral(n.runes[0],n.flags).toArray():e.runes=new lt(e.runes).appendClass(n.runes).toArray();break;case B.Op.LITERAL:if(n.runes[0]===e.runes[0]&&n.flags===e.flags)break;e.op=B.Op.CHAR_CLASS,e.runes=new lt().appendLiteral(e.runes[0],e.flags).appendLiteral(n.runes[0],n.flags).toArray();break}}static parseEscape(e){const n=e.pos();if(e.skip(1),!e.more())throw new be(Q.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case b.CODES.get("1"):case b.CODES.get("2"):case b.CODES.get("3"):case b.CODES.get("4"):case b.CODES.get("5"):case b.CODES.get("6"):case b.CODES.get("7"):if(!e.more()||e.peek()<b.CODES.get("0")||e.peek()>b.CODES.get("7"))break;case b.CODES.get("0"):{let s=r-b.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<b.CODES.get("0")||e.peek()>b.CODES.get("7"));i++)s=s*8+e.peek()-b.CODES.get("0"),e.skip(1);return s}case b.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===b.CODES.get("{")){let a=0,l=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===b.CODES.get("}"))break;const c=se.unhex(r);if(c<0||(l=l*16+c,l>te.MAX_RUNE))break e;a++}if(a===0)break e;return l}const s=se.unhex(r);if(!e.more())break;r=e.pop();const i=se.unhex(r);if(s<0||i<0)break;return s*16+i}case b.CODES.get("a"):return b.CODES.get("\x07");case b.CODES.get("f"):return b.CODES.get("\f");case b.CODES.get("n"):return b.CODES.get(`
`);case b.CODES.get("r"):return b.CODES.get("\r");case b.CODES.get("t"):return b.CODES.get("	");case b.CODES.get("v"):return b.CODES.get("\v");default:if(!se.isalnum(r))return r;break}throw new be(Q.ERR_INVALID_ESCAPE,e.from(n))}static parseClassChar(e,n){if(!e.more())throw new be(Q.ERR_MISSING_BRACKET,e.from(n));return e.lookingAt("\\")?Q.parseEscape(e):e.pop()}static concatRunes(e,n){return[...e,...n]}constructor(e,n=0){this.wholeRegexp=e,this.flags=n,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let n=this.free;return n!==null&&n.subs!==null&&n.subs.length>0?(this.free=n.subs[0],n.reinit(),n.op=e):n=new B(e),n}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let n=e;for(;n>0&&!B.isPseudoOp(this.stack[n-1].op);)n--;const r=this.stack.slice(n,e);return this.stack=this.stack.slice(0,n),r}push(e){if(e.op===B.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=B.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===B.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&te.simpleFold(e.runes[0])===e.runes[2]&&te.simpleFold(e.runes[2])===e.runes[0]||e.op===B.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&te.simpleFold(e.runes[0])===e.runes[1]&&te.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|q.FOLD_CASE))return null;e.op=B.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|q.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,n){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==B.Op.LITERAL||i.op!==B.Op.LITERAL||(s.flags&q.FOLD_CASE)!==(i.flags&q.FOLD_CASE)?!1:(i.runes=Q.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=n,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,n){const r=this.newRegexp(B.Op.LITERAL);return r.flags=n,n&q.FOLD_CASE&&(e=Q.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const n=this.newRegexp(e);return n.flags=this.flags,this.push(n)}repeat(e,n,r,s,i,a){let l=this.flags;if(l&q.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),l^=q.NON_GREEDY),a!==-1))throw new be(Q.ERR_INVALID_REPEAT_OP,i.from(a));const c=this.stack.length;if(c===0)throw new be(Q.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const d=this.stack[c-1];if(B.isPseudoOp(d.op))throw new be(Q.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const m=this.newRegexp(e);m.min=n,m.max=r,m.flags=l,m.subs=[d],this.stack[c-1]=m}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(B.Op.EMPTY_MATCH)):this.push(this.collapse(e,B.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(B.Op.NO_MATCH)):this.push(this.collapse(e,B.Op.ALTERNATE))}cleanAlt(e){e.op===B.Op.CHAR_CLASS&&(e.runes=new lt(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===te.MAX_RUNE?(e.runes=null,e.op=B.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===b.CODES.get(`
`)-1&&e.runes[2]===b.CODES.get(`
`)+1&&e.runes[3]===te.MAX_RUNE&&(e.runes=null,e.op=B.Op.ANY_CHAR_NOT_NL))}collapse(e,n){if(e.length===1)return e[0];let r=0;for(let l of e)r+=l.op===n?l.subs.length:1;let s=new Array(r).fill(null),i=0;for(let l of e)l.op===n?(s.splice(i,l.subs.length,...l.subs),i+=l.subs.length,this.reuse(l)):s[i++]=l;let a=this.newRegexp(n);if(a.subs=s,n===B.Op.ALTERNATE&&(a.subs=this.factor(a.subs),a.subs.length===1)){const l=a;a=a.subs[0],this.reuse(l)}return a}factor(e){if(e.length<2)return e;let n=0,r=e.length,s=0,i=null,a=0,l=0,c=0;for(let m=0;m<=r;m++){let g=null,_=0,L=0;if(m<r){let I=e[n+m];if(I.op===B.Op.CONCAT&&I.subs.length>0&&(I=I.subs[0]),I.op===B.Op.LITERAL&&(g=I.runes,_=I.runes.length,L=I.flags&q.FOLD_CASE),L===l){let T=0;for(;T<a&&T<_&&i[T]===g[T];)T++;if(T>0){a=T;continue}}}if(m!==c)if(m===c+1)e[s++]=e[n+c];else{const I=this.newRegexp(B.Op.LITERAL);I.flags=l,I.runes=i.slice(0,a);for(let C=c;C<m;C++)e[n+C]=this.removeLeadingString(e[n+C],a);const T=this.collapse(e.slice(n+c,n+m),B.Op.ALTERNATE),k=this.newRegexp(B.Op.CONCAT);k.subs=[I,T],e[s++]=k}c=m,i=g,a=_,l=L}r=s,n=0,c=0,s=0;let d=null;for(let m=0;m<=r;m++){let g=null;if(!(m<r&&(g=Q.leadingRegexp(e[n+m]),d!==null&&d.equals(g)&&(Q.isCharClass(d)||d.op===B.Op.REPEAT&&d.min===d.max&&Q.isCharClass(d.subs[0]))))){if(m!==c)if(m===c+1)e[s++]=e[n+c];else{const _=d;for(let T=c;T<m;T++){const k=T!==c;e[n+T]=this.removeLeadingRegexp(e[n+T],k)}const L=this.collapse(e.slice(n+c,n+m),B.Op.ALTERNATE),I=this.newRegexp(B.Op.CONCAT);I.subs=[_,L],e[s++]=I}c=m,d=g}}r=s,n=0,c=0,s=0;for(let m=0;m<=r;m++)if(!(m<r&&Q.isCharClass(e[n+m]))){if(m!==c)if(m===c+1)e[s++]=e[n+c];else{let g=c;for(let L=c+1;L<m;L++){const I=e[n+g],T=e[n+L];(I.op<T.op||I.op===T.op&&(I.runes!==null?I.runes.length:0)<(T.runes!==null?T.runes.length:0))&&(g=L)}const _=e[n+c];e[n+c]=e[n+g],e[n+g]=_;for(let L=c+1;L<m;L++)Q.mergeCharClass(e[n+c],e[n+L]),this.reuse(e[n+L]);this.cleanAlt(e[n+c]),e[s++]=e[n+c]}m<r&&(e[s++]=e[n+m]),c=m+1}r=s,n=0,c=0,s=0;for(let m=0;m<r;++m)m+1<r&&e[n+m].op===B.Op.EMPTY_MATCH&&e[n+m+1].op===B.Op.EMPTY_MATCH||(e[s++]=e[n+m]);return r=s,n=0,e.slice(n,r)}removeLeadingString(e,n){if(e.op===B.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],n);if(e.subs[0]=r,r.op===B.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=B.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===B.Op.LITERAL&&(e.runes=e.runes.slice(n,e.runes.length),e.runes.length===0&&(e.op=B.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,n){if(e.op===B.Op.CONCAT&&e.subs.length>0){switch(n&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=B.Op.EMPTY_MATCH,e.subs=B.emptySubs();break}case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return n&&this.reuse(e),this.newRegexp(B.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&q.LITERAL)return Q.literalRegexp(this.wholeRegexp,this.flags);let e=-1,n=-1,r=-1;const s=new Dg(this.wholeRegexp);for(;s.more();){let a=-1;e:switch(s.peek()){case b.CODES.get("("):if(this.flags&q.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(B.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case b.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case b.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case b.CODES.get("^"):this.flags&q.ONE_LINE?this.op(B.Op.BEGIN_TEXT):this.op(B.Op.BEGIN_LINE),s.skip(1);break;case b.CODES.get("$"):this.flags&q.ONE_LINE?this.op(B.Op.END_TEXT).flags|=q.WAS_DOLLAR:this.op(B.Op.END_LINE),s.skip(1);break;case b.CODES.get("."):this.flags&q.DOT_NL?this.op(B.Op.ANY_CHAR):this.op(B.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case b.CODES.get("["):this.parseClass(s);break;case b.CODES.get("*"):case b.CODES.get("+"):case b.CODES.get("?"):{a=s.pos();let l=null;switch(s.pop()){case b.CODES.get("*"):l=B.Op.STAR;break;case b.CODES.get("+"):l=B.Op.PLUS;break;case b.CODES.get("?"):l=B.Op.QUEST;break}this.repeat(l,n,r,a,s,e);break}case b.CODES.get("{"):{a=s.pos();const l=Q.parseRepeat(s);if(l<0){s.rewindTo(a),this.literal(s.pop());break}n=l>>16,r=(l&te.MAX_BMP)<<16>>16,this.repeat(B.Op.REPEAT,n,r,a,s,e);break}case b.CODES.get("\\"):{const l=s.pos();if(s.skip(1),this.flags&q.PERL_X&&s.more())switch(s.pop()){case b.CODES.get("A"):this.op(B.Op.BEGIN_TEXT);break e;case b.CODES.get("b"):this.op(B.Op.WORD_BOUNDARY);break e;case b.CODES.get("B"):this.op(B.Op.NO_WORD_BOUNDARY);break e;case b.CODES.get("C"):throw new be(Q.ERR_INVALID_ESCAPE,"\\C");case b.CODES.get("Q"):{let g=s.rest();const _=g.indexOf("\\E");_>=0&&(g=g.substring(0,_)),s.skipString(g),s.skipString("\\E");let L=0;for(;L<g.length;){const I=g.codePointAt(L);this.literal(I),L+=se.charCount(I)}break e}case b.CODES.get("z"):this.op(B.Op.END_TEXT);break e;default:s.rewindTo(l);break}const c=this.newRegexp(B.Op.CHAR_CLASS);if(c.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const m=new lt;if(this.parseUnicodeClass(s,m)){c.runes=m.toArray(),this.push(c);break e}}const d=new lt;if(this.parsePerlClassEscape(s,d)){c.runes=d.toArray(),this.push(c);break e}s.rewindTo(l),this.reuse(c),this.literal(Q.parseEscape(s));break}default:this.literal(s.pop());break}e=a}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new be(Q.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const n=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const l=r.charAt(2)==="P"?4:3,c=r.indexOf(">");if(c<0)throw new be(Q.ERR_INVALID_NAMED_CAPTURE,r);const d=r.substring(l,c);if(e.skipString(d),e.skip(l+1),!Q.isValidCaptureName(d))throw new be(Q.ERR_INVALID_NAMED_CAPTURE,r.substring(0,c+1));const m=this.op(B.Op.LEFT_PAREN);if(m.cap=++this.numCap,this.namedGroups[d])throw new be(Q.ERR_DUPLICATE_NAMED_CAPTURE,d);this.namedGroups[d]=this.numCap,m.name=d;return}e.skip(2);let s=this.flags,i=1,a=!1;e:for(;e.more();){const l=e.pop();switch(l){case b.CODES.get("i"):s|=q.FOLD_CASE,a=!0;break;case b.CODES.get("m"):s&=-17,a=!0;break;case b.CODES.get("s"):s|=q.DOT_NL,a=!0;break;case b.CODES.get("U"):s|=q.NON_GREEDY,a=!0;break;case b.CODES.get("-"):if(i<0)break e;i=-1,s=~s,a=!1;break;case b.CODES.get(":"):case b.CODES.get(")"):if(i<0){if(!a)break e;s=~s}l===b.CODES.get(":")&&this.op(B.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new be(Q.ERR_INVALID_PERL_OP,e.from(n))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(B.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===B.Op.VERTICAL_BAR&&Q.isCharClass(this.stack[e-1])&&Q.isCharClass(this.stack[e-3])){let n=this.stack[e-1],r=this.stack[e-3];if(n.op>r.op){const s=r;r=n,n=s,this.stack[e-3]=r}return Q.mergeCharClass(r,n),this.reuse(n),this.pop(),!0}if(e>=2){const n=this.stack[e-1],r=this.stack[e-2];if(r.op===B.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=n,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new be(Q.ERR_INTERNAL_ERROR,"stack underflow");const n=this.pop(),r=this.pop();if(r.op!==B.Op.LEFT_PAREN)throw new be(Q.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(n):(r.op=B.Op.CAPTURE,r.subs=[n],this.push(r))}parsePerlClassEscape(e,n){const r=e.pos();if(!(this.flags&q.PERL_X)||!e.more()||e.pop()!==b.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=Sf.has(s)?Sf.get(s):null;return i===null?!1:(n.appendGroup(i,(this.flags&q.FOLD_CASE)!==0),!0)}parseNamedClass(e,n){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const a=Ff.has(i)?Ff.get(i):null;if(a===null)throw new be(Q.ERR_INVALID_CHAR_RANGE,i);return n.appendGroup(a,(this.flags&q.FOLD_CASE)!==0),!0}parseUnicodeClass(e,n){const r=e.pos();if(!(this.flags&q.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===b.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new be(Q.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let a;if(i!==b.CODES.get("{"))a=se.runeToString(i);else{const m=e.rest(),g=m.indexOf("}");if(g<0)throw e.rewindTo(r),new be(Q.ERR_INVALID_CHAR_RANGE,e.rest());a=m.substring(0,g),e.skipString(a),e.skip(1)}a.length!==0&&a.codePointAt(0)===b.CODES.get("^")&&(s=0-s,a=a.substring(1));const l=Q.unicodeTable(a);if(l===null)throw new be(Q.ERR_INVALID_CHAR_RANGE,e.from(r));const c=l.first,d=l.second;if(!(this.flags&q.FOLD_CASE)||d===null)n.appendTableWithSign(c,s);else{const m=new lt().appendTable(c).appendTable(d).cleanClass().toArray();n.appendClassWithSign(m,s)}return!0}parseClass(e){const n=e.pos();e.skip(1);const r=this.newRegexp(B.Op.CHAR_CLASS);r.flags=this.flags;const s=new lt;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&q.CLASS_NL||s.appendRange(b.CODES.get(`
`),b.CODES.get(`
`)));let a=!0;for(;!e.more()||e.peek()!==b.CODES.get("]")||a;){if(e.more()&&e.lookingAt("-")&&!(this.flags&q.PERL_X)&&!a){const m=e.rest();if(m==="-"||!m.startsWith("-]"))throw e.rewindTo(n),new be(Q.ERR_INVALID_CHAR_RANGE,e.rest())}a=!1;const l=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(l)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(l);const c=Q.parseClassChar(e,n);let d=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(d=Q.parseClassChar(e,n),d<c)throw new be(Q.ERR_INVALID_CHAR_RANGE,e.from(l))}this.flags&q.FOLD_CASE?s.appendFoldedRange(c,d):s.appendRange(c,d)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}};E(Q,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),E(Q,"ERR_INVALID_CHAR_RANGE","invalid character class range"),E(Q,"ERR_INVALID_ESCAPE","invalid escape sequence"),E(Q,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),E(Q,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),E(Q,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),E(Q,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),E(Q,"ERR_MISSING_BRACKET","missing closing ]"),E(Q,"ERR_MISSING_PAREN","missing closing )"),E(Q,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),E(Q,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),E(Q,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name");let oc=Q;class bg{constructor(){this.inst=null,this.cap=[]}}class Uf{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const n=this.sparse[e];return n<this.size&&this.densePcs[n]===e}isEmpty(){return this.size===0}add(e){const n=this.size++;return this.sparse[e]=n,this.denseThreads[n]=null,this.densePcs[n]=e,n}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let n=0;n<this.size;n++)n!==0&&(e+=", "),e+=this.densePcs[n];return e+="}",e}}class js{static fromRE2(e){const n=new js;return n.prog=e.prog,n.re2=e,n.q0=new Uf(n.prog.numInst()),n.q1=new Uf(n.prog.numInst()),n.pool=[],n.poolSize=0,n.matched=!1,n.matchcap=Array(n.prog.numCap<2?2:n.prog.numCap).fill(0),n.ncap=0,n}static fromMachine(e){const n=new js;return n.re2=e.re2,n.prog=e.prog,n.q0=e.q0,n.q1=e.q1,n.pool=e.pool,n.poolSize=e.poolSize,n.matched=e.matched,n.matchcap=e.matchcap,n.ncap=e.ncap,n}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let n=0;n<this.poolSize;n++){const r=this.pool[n];r.cap=Array(e).fill(0)}}initNewCap(e){for(let n=0;n<this.poolSize;n++){const r=this.pool[n];r.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?se.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let n;return this.poolSize>0?(this.poolSize--,n=this.pool[this.poolSize]):n=new bg,n.inst=e,n}freeQueue(e,n=0){const r=e.size-n,s=this.poolSize+r;this.pool.length<s&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,s)));for(let i=n;i<e.size;i++){const a=e.denseThreads[i];a!==null&&(this.pool[this.poolSize]=a,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,n,r){const s=this.re2.cond;if(s===se.EMPTY_ALL||(r===q.ANCHOR_START||r===q.ANCHOR_BOTH)&&n!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let i=this.q0,a=this.q1,l=e.step(n),c=l>>3,d=l&7,m=-1,g=0;l!==Zn.EOF()&&(l=e.step(n+d),m=l>>3,g=l&7);let _;for(n===0?_=se.emptyOpContext(-1,c):_=e.context(n);;){if(i.isEmpty()){if(s&se.EMPTY_BEGIN_TEXT&&n!==0||this.matched)break;if(this.re2.prefix.length!==0&&m!==this.re2.prefixRune&&e.canCheckPrefix()){const T=e.index(this.re2,n);if(T<0)break;n+=T,l=e.step(n),c=l>>3,d=l&7,l=e.step(n+d),m=l>>3,g=l&7}}!this.matched&&(n===0||r===q.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=n),this.add(i,this.prog.start,n,this.matchcap,_,null));const L=n+d;if(_=e.context(L),this.step(i,a,n,L,c,_,r,n===e.endPos()),d===0||this.ncap===0&&this.matched)break;n+=d,c=m,d=g,c!==-1&&(l=e.step(n+d),m=l>>3,g=l&7);const I=i;i=a,a=I}return this.freeQueue(a),this.matched}step(e,n,r,s,i,a,l,c){const d=this.re2.longest;for(let m=0;m<e.size;m++){let g=e.denseThreads[m];if(g===null)continue;if(d&&this.matched&&this.ncap>0&&this.matchcap[0]<g.cap[0]){this.freeThread(g);continue}const _=g.inst;let L=!1;switch(_.op){case ie.MATCH:if(l===q.ANCHOR_BOTH&&!c)break;this.ncap>0&&(!d||!this.matched||this.matchcap[1]<r)&&(g.cap[1]=r,this.matchcap=g.cap.slice(0,this.ncap)),d||this.freeQueue(e,m+1),this.matched=!0;break;case ie.RUNE:L=_.matchRune(i);break;case ie.RUNE1:L=i===_.runes[0];break;case ie.RUNE_ANY:L=!0;break;case ie.RUNE_ANY_NOT_NL:L=i!==b.CODES.get(`
`);break;default:throw new Error("bad inst")}L&&(g=this.add(n,_.out,s,g.cap,a,g)),g!==null&&(this.freeThread(g),e.denseThreads[m]=null)}e.clear()}add(e,n,r,s,i,a){if(n===0||e.contains(n))return a;const l=e.add(n),c=this.prog.inst[n];switch(c.op){case ie.FAIL:break;case ie.ALT:case ie.ALT_MATCH:a=this.add(e,c.out,r,s,i,a),a=this.add(e,c.arg,r,s,i,a);break;case ie.EMPTY_WIDTH:c.arg&~i||(a=this.add(e,c.out,r,s,i,a));break;case ie.NOP:a=this.add(e,c.out,r,s,i,a);break;case ie.CAPTURE:if(c.arg<this.ncap){const d=s[c.arg];s[c.arg]=r,this.add(e,c.out,r,s,i,null),s[c.arg]=d}else a=this.add(e,c.out,r,s,i,a);break;case ie.MATCH:case ie.RUNE:case ie.RUNE1:case ie.RUNE_ANY:case ie.RUNE_ANY_NOT_NL:a===null?a=this.alloc(c):a.inst=c,this.ncap>0&&a.cap!==s&&(a.cap=s.slice(0,this.ncap)),e.denseThreads[l]=a,a=null;break;default:throw new Error("unhandled")}return a}}class Vg{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,n){return this.value===e?(this.value=n,!0):!1}}class Kn{static initTest(e){const n=Kn.compile(e),r=new Kn(n.expr,n.prog,n.numSubexp,n.longest);return r.cond=n.cond,r.prefix=n.prefix,r.prefixUTF8=n.prefixUTF8,r.prefixComplete=n.prefixComplete,r.prefixRune=n.prefixRune,r}static compile(e){return Kn.compileImpl(e,q.PERL,!1)}static compilePOSIX(e){return Kn.compileImpl(e,q.POSIX,!0)}static compileImpl(e,n,r){let s=oc.parse(e,n);const i=s.maxCap();s=Jt.simplify(s);const a=Bi.compileRegexp(s),l=new Kn(e,a,i,r),[c,d]=a.prefix();return l.prefixComplete=c,l.prefix=d,l.prefixUTF8=se.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=s.namedGroups,l}static match(e,n){return Kn.compile(e).match(n)}constructor(e,n,r=0,s=0){this.expr=e,this.prog=n,this.numSubexp=r,this.longest=s,this.cond=n.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new Vg}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,n){let r=this.pooled.get();do r=this.pooled.get(),!n&&r&&(e=js.fromMachine(e),n=!0),e.next!==r&&(e.next=r);while(!this.pooled.compareAndSet(r,e))}toString(){return this.expr}doExecute(e,n,r,s){let i=this.get(),a=!1;i?i.next!==null&&(i=js.fromMachine(i),a=!0):(i=js.fromRE2(this),a=!0),i.init(s);const l=i.match(e,n,r)?i.submatches():null;return this.put(i,a),l}match(e){return this.doExecute(Ve.fromUTF16(e),0,q.UNANCHORED,0)!==null}matchWithGroup(e,n,r,s,i){return e instanceof vr||(e=hl.utf16(e)),this.matchMachineInput(e,n,r,s,i)}matchMachineInput(e,n,r,s,i){if(n>r)return[!1,null];const a=e.isUTF16Encoding()?Ve.fromUTF16(e.asCharSequence(),0,r):Ve.fromUTF8(e.asBytes(),0,r),l=this.doExecute(a,n,s,2*i);return l===null?[!1,null]:[!0,l]}matchUTF8(e){return this.doExecute(Ve.fromUTF8(e),0,q.UNANCHORED,0)!==null}replaceAll(e,n){return this.replaceAllFunc(e,()=>n,2*e.length+1)}replaceFirst(e,n){return this.replaceAllFunc(e,()=>n,1)}replaceAllFunc(e,n,r){let s=0,i=0,a="";const l=Ve.fromUTF16(e);let c=0;for(;i<=e.length;){const d=this.doExecute(l,i,q.UNANCHORED,2);if(d===null||d.length===0)break;a+=e.substring(s,d[0]),(d[1]>s||d[0]===0)&&(a+=n(e.substring(d[0],d[1])),c++),s=d[1];const m=l.step(i)&7;if(i+m>d[1]?i+=m:i+1>d[1]?i++:i=d[1],c>=r)break}return a+=e.substring(s),a}pad(e){if(e===null)return null;let n=(1+this.numSubexp)*2;if(e.length<n){let r=new Array(n).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,n,r=s=>s){let s=[];const i=e.endPos();n<0&&(n=i+1);let a=0,l=0,c=-1;for(;l<n&&a<=i;){const d=this.doExecute(e,a,q.UNANCHORED,this.prog.numCap);if(d===null||d.length===0)break;let m=!0;if(d[1]===a){d[0]===c&&(m=!1);const g=e.step(a);g<0?a=i+1:a+=g&7}else a=d[1];c=d[1],m&&(s.push(r(this.pad(d))),l++)}return s}findUTF8(e){const n=this.doExecute(Ve.fromUTF8(e),0,q.UNANCHORED,2);return n===null?null:e.slice(n[0],n[1])}findUTF8Index(e){const n=this.doExecute(Ve.fromUTF8(e),0,q.UNANCHORED,2);return n===null?null:n.slice(0,2)}find(e){const n=this.doExecute(Ve.fromUTF16(e),0,q.UNANCHORED,2);return n===null?"":e.substring(n[0],n[1])}findIndex(e){return this.doExecute(Ve.fromUTF16(e),0,q.UNANCHORED,2)}findUTF8Submatch(e){const n=this.doExecute(Ve.fromUTF8(e),0,q.UNANCHORED,this.prog.numCap);if(n===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<n.length&&n[2*s]>=0&&(r[s]=e.slice(n[2*s],n[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(Ve.fromUTF8(e),0,q.UNANCHORED,this.prog.numCap))}findSubmatch(e){const n=this.doExecute(Ve.fromUTF16(e),0,q.UNANCHORED,this.prog.numCap);if(n===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<n.length&&n[2*s]>=0&&(r[s]=e.substring(n[2*s],n[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.doExecute(Ve.fromUTF16(e),0,q.UNANCHORED,this.prog.numCap))}findAllUTF8(e,n){const r=this.allMatches(Ve.fromUTF8(e),n,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,n){const r=this.allMatches(Ve.fromUTF8(e),n,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,n){const r=this.allMatches(Ve.fromUTF16(e),n,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,n){const r=this.allMatches(Ve.fromUTF16(e),n,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,n){const r=this.allMatches(Ve.fromUTF8(e),n,s=>{let i=new Array(s.length/2|0).fill(null);for(let a=0;a<i.length;a++)s[2*a]>=0&&(i[a]=e.slice(s[2*a],s[2*a+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,n){const r=this.allMatches(Ve.fromUTF8(e),n);return r.length===0?null:r}findAllSubmatch(e,n){const r=this.allMatches(Ve.fromUTF16(e),n,s=>{let i=new Array(s.length/2|0).fill(null);for(let a=0;a<i.length;a++)s[2*a]>=0&&(i[a]=e.substring(s[2*a],s[2*a+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,n){const r=this.allMatches(Ve.fromUTF16(e),n);return r.length===0?null:r}}const mt=class mt{static quote(e){return se.quoteMeta(e)}static compile(e,n=0){let r=e;if(n&mt.CASE_INSENSITIVE&&(r=`(?i)${r}`),n&mt.DOTALL&&(r=`(?s)${r}`),n&mt.MULTILINE&&(r=`(?m)${r}`),n&-32)throw new Ig("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let s=q.PERL;n&mt.DISABLE_UNICODE_GROUPS&&(s&=-129);const i=new mt(e,n);return i.re2Input=Kn.compileImpl(r,s,(n&mt.LONGEST_MATCH)!==0),i}static matches(e,n){return mt.compile(e).matcher(n).matches()}static initTest(e,n,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new mt(e,n);return s.re2Input=r,s}constructor(e,n){this.patternInput=e,this.flagsInput=n}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=hl.utf8(e)),new Rg(this,e)}split(e,n=0){const r=this.matcher(e),s=[];let i=0,a=0;for(;r.find();){if(a===0&&r.end()===0){a=r.end();continue}if(n>0&&s.length===n-1)break;if(a===r.start()){if(n===0){i+=1,a=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(a,r.start())),a=r.end()}if(n===0&&a!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(a,r.inputLength()))}return(n!==0||s.length===0)&&s.push(r.substring(a,r.inputLength())),s}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};E(mt,"CASE_INSENSITIVE",1),E(mt,"DOTALL",2),E(mt,"MULTILINE",4),E(mt,"DISABLE_UNICODE_GROUPS",8),E(mt,"LONGEST_MATCH",16);let pa=mt;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La="12.15.0";function Mg(t){La=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new fh("@firebase/firestore");function rn(t,...e){if(Ws.logLevel<=ge.DEBUG){const n=e.map(vh);Ws.debug(`Firestore (${La}): ${t}`,...n)}}function o7(t,...e){if(Ws.logLevel<=ge.ERROR){const n=e.map(vh);Ws.error(`Firestore (${La}): ${t}`,...n)}}function Wl(t,...e){if(Ws.logLevel<=ge.WARN){const n=e.map(vh);Ws.warn(`Firestore (${La}): ${t}`,...n)}}function vh(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,l7(t,r,n)}function l7(t,e,n){let r=`FIRESTORE (${La}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw o7(r),new Error(r)}function oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||l7(e,s,r)}function Fg(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class he extends Cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class $g{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new zi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zi,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{rn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(rn("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zi)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(rn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new Ug(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Tt(e)}}class zg{constructor(e,n,r){this.T=e,this.P=n,this.R=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class Hg{constructor(e,n,r){this.T=e,this.P=n,this.R=r}getToken(){return Promise.resolve(new zg(this.T,this.P,this.R))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gg{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,br(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=i=>{i.error!=null&&rn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,rn("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{rn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):rn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Bf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Bf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Wg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Fe(t,e){return t<e?-1:t>e?1:0}function lc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return J1(s)===J1(i)?Fe(s,i):J1(s)?1:-1}return Fe(t.length,e.length)}const qg=55296,Xg=57343;function J1(t){const e=t.charCodeAt(0);return e>=qg&&e<=Xg}function Kg(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="__name__";class pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Fe(e.length,n.length)}static compareSegments(e,n){const r=pn.isNumericId(e),s=pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?pn.extractNumericId(e).compare(pn.extractNumericId(n)):lc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yh.fromString(e.substring(4,e.length-2))}}class Pt extends pn{construct(e,n,r){return new Pt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new he(pe.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pt(n)}static emptyPath(){return new Pt([])}}const Qg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends pn{construct(e,n,r){return new It(e,n,r)}static isValidIdentifier(e){return Qg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ma}static keyField(){return new It([ma])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new he(pe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new he(pe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new he(pe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new he(pe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.path=e}static fromPath(e){return new rr(Pt.fromString(e))}static fromName(e){return new rr(Pt.fromString(e).popFirst(5))}static empty(){return new rr(Pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rr(new Pt(e.slice()))}}function Jg(t,e,n,r){if(e===!0&&r===!0)throw new he(pe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ja(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function u7(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ae(12329,{type:typeof t})}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function Da(t,e){if(!ja(t))throw new he(pe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new he(pe.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=-62135596800,zf=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*zf);return new Xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<$f)throw new he(pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zf}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Da(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$f;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:Be("string",Xe._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{static fromTimestamp(e){return new Hi(e)}static min(){return new Hi(new Xe(0,0))}static max(){return new Hi(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}function Zg(t){return t.name==="IndexedDbTransactionError"}function ga(t){return t===0&&1/t==-1/0}function ey(t){return typeof t=="number"&&Number.isInteger(t)&&!ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}function ty(t){return typeof t=="string"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new dl(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new dl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.comparator=e,this.data=new dl(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hf(this.data.getIterator())}getIteratorFrom(e){return new Hf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof fl)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new fl(this.comparator);return n.data=e,n}}class Hf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _h(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ny(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function ry(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sy("Invalid base64 string: "+i):i}}(e);return new qt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const iy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ys(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=iy.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ml(t){return typeof t=="string"?qt.fromBase64String(t):qt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="server_timestamp",oy="__type__",ly="__previous_value__",uy="__local_write_time__";function wh(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[oy])==null?void 0:r.stringValue)===ay}function c7(t){const e=t.mapValue.fields[ly];return wh(e)?c7(e):e}function ya(t){const e=Ys(t.mapValue.fields[uy].timestampValue);return new Xe(e.seconds,e.nanos)}const Gf="(default)";class gl{constructor(e,n){this.projectId=e,this.database=n||Gf}static empty(){return new gl("","")}get isDefaultDatabase(){return this.database===Gf}isEqual(e){return e instanceof gl&&e.projectId===this.projectId&&e.database===this.database}}function cy(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new he(pe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gl(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h7="__type__",hy="__max__",go={mapValue:{}},d7="__vector__",yl="value",vl={nullValue:"NULL_VALUE"},Dt={booleanValue:!0},Ke={booleanValue:!1};function ht(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wh(t)?4:dy(t)?9007199254740991:wl(t)?10:11:Ae(28295,{value:t})}function _l(t,e,n){if(t===e)return!0;const r=ht(t);if(r!==ht(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ya(t).isEqual(ya(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=Ys(i.timestampValue),c=Ys(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,a){return ml(i.bytesValue).isEqual(ml(a.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,a){return Ye(i.geoPointValue.latitude)===Ye(a.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(a.geoPointValue.longitude)}(t,e);case 2:return function(i,a,l){if("integerValue"in i&&"integerValue"in a)return Ye(i.integerValue)===Ye(a.integerValue);let c,d;if("doubleValue"in i&&"doubleValue"in a)c=Ye(i.doubleValue),d=Ye(a.doubleValue);else{if(!(l!=null&&l.Ee))return!1;c=Ye(i.integerValue??i.doubleValue),d=Ye(a.integerValue??a.doubleValue)}return c===d?!!(l!=null&&l.he)||ga(c)===ga(d):!!(l===void 0||l.Te)&&isNaN(c)&&isNaN(d)}(t,e,n);case 9:return Kg(t.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>_l(s,i,n));case 10:case 11:return function(i,a,l){const c=i.mapValue.fields||{},d=a.mapValue.fields||{};if(pl(c)!==pl(d))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(d[m]===void 0||!_l(c[m],d[m],l)))return!1;return!0}(t,e,n);default:return Ae(52216,{left:t})}}function En(t,e){if(t===e)return 0;const n=ht(t),r=ht(e);if(n!==r)return Fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ye(i.integerValue||i.doubleValue),c=Ye(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Wf(t.timestampValue,e.timestampValue);case 4:return Wf(ya(t),ya(e));case 5:return lc(t.stringValue,e.stringValue);case 6:return function(i,a){const l=ml(i),c=ml(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let d=0;d<l.length&&d<c.length;d++){const m=Fe(l[d],c[d]);if(m!==0)return m}return Fe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Fe(Ye(i.latitude),Ye(a.latitude));return l!==0?l:Fe(Ye(i.longitude),Ye(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yf(t.arrayValue,e.arrayValue);case 10:return function(i,a){var _,L,I,T;const l=i.fields||{},c=a.fields||{},d=(_=l[yl])==null?void 0:_.arrayValue,m=(L=c[yl])==null?void 0:L.arrayValue,g=Fe(((I=d==null?void 0:d.values)==null?void 0:I.length)||0,((T=m==null?void 0:m.values)==null?void 0:T.length)||0);return g!==0?g:Yf(d,m)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===go.mapValue&&a===go.mapValue)return 0;if(i===go.mapValue)return 1;if(a===go.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),d=a.fields||{},m=Object.keys(d);c.sort(),m.sort();for(let g=0;g<c.length&&g<m.length;++g){const _=lc(c[g],m[g]);if(_!==0)return _;const L=En(l[c[g]],d[m[g]]);if(L!==0)return L}return Fe(c.length,m.length)}(t.mapValue,e.mapValue);default:throw Ae(23264,{Pe:n})}}function Wf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Fe(t,e);const n=Ys(t),r=Ys(e),s=Fe(n.seconds,r.seconds);return s!==0?s:Fe(n.nanos,r.nanos)}function Yf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=En(n[s],r[s]);if(i!==void 0&&i!==0)return i}return Fe(n.length,r.length)}function Cs(t){return!!t&&"integerValue"in t}function $r(t){return!!t&&"doubleValue"in t}function qs(t){return Cs(t)||$r(t)}function uc(t){return!!t&&"arrayValue"in t}function sn(t){return!!t&&"nullValue"in t}function Xt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ds(t){return!!t&&"mapValue"in t}function wl(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[h7])==null?void 0:r.stringValue)===d7}function cc(t){var e,n;return(n=(((e=t==null?void 0:t.mapValue)==null?void 0:e.fields)||{})[yl])==null?void 0:n.arrayValue}function Gi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return _h(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gi(t.arrayValue.values[n]);return e}return{...t}}function dy(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===hy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.value=e}static empty(){return new xl({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ds(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gi(n)}setAll(e){let n=It.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Gi(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ds(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _l(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ds(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){_h(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new xl(Gi(this.value))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f7(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ga(e)?"-0":e}}function fy(t){return{integerValue:""+t}}function py(t,e,n){return Number.isInteger(e)&&(n!=null&&n.preferIntegers)||ey(e)?fy(e):f7(t,e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function gy(t){return new my(t)}function yy(t){const e=Fg(t);if(e.fe===null){e.fe=[];const n=new Set;for(const i of e.explicitOrderBy)e.fe.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new fl(It.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.fe.push(new qf(i,r))}),n.has(It.keyField().canonicalString())||e.fe.push(new qf(It.keyField(),r))}return e.fe}function vy(t){return(e,n)=>{let r=!1;for(const s of yy(t)){const i=_y(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _y(t,e,n){const r=t.field.isKeyField()?rr.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),d=l.data.field(i);return c!==null&&d!==null?En(c,d):Ae(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ae(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xf,ue;(ue=Xf||(Xf={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new yh([4294967295,4294967295],0);function hc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function p7(t){const e=Ys(t);return new Xe(e.seconds,e.nanos)}function wy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Z1(t,e){return hc(t,e.toTimestamp())}function m7(t,e){return xy(t,e).canonicalString()}function xy(t,e){const n=function(s){return new Pt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ey(t,e){return m7(t.databaseId,e.path)}function g7(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}function va(t,e){const n={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);n.fields[s]=r._toProto(t)}),{mapValue:n}}function y7(t){return{stringValue:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nn(qt.fromBase64String(e))}catch(n){throw new he(pe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new nn(qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Da(e,nn._jsonSchema))return nn.fromBase64String(e.bytes)}}nn._jsonSchemaVersion="firestore/bytes/1.0",nn._jsonSchema={type:Be("string",nn._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(pe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Ny(){return new xh(ma)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v7{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(pe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(pe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rn._jsonSchemaVersion}}static fromJSON(e){if(Da(e,Rn._jsonSchema))return new Rn(e.latitude,e.longitude)}}function Sy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn._jsonSchemaVersion="firestore/geoPoint/1.0",Rn._jsonSchema={type:Be("string",Rn._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};class Cy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Tn=e,this.timerId=n,this.Pn=r,this.Rn=s,this.In=i,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const n=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),s=Math.max(0,n-r);s>0&&rn("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.An} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,s,()=>(this.dn=Date.now(),e())),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="ComponentProvider",Kf=new Map;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=1048576;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="firestore.googleapis.com",Qf=!0;class Jf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(pe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Py,this.ssl=Qf}else this.host=e.host,this.ssl=e.ssl??Qf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ky;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ty)throw new he(pe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sy(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new he(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new he(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new he(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Iy{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(pe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(pe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Bg;switch(r.type){case"firstParty":return new Hg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new he(pe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kf.get(n);r&&(rn(Ay,"Removing Datastore"),Kf.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Eh(this.firestore,e,this._query)}}class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}toJSON(){return{type:zt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Da(n,zt._jsonSchema))return new zt(e,r||null,new rr(Pt.fromString(n.referencePath)))}}zt._jsonSchemaVersion="firestore/documentReference/1.0",zt._jsonSchema={type:Be("string",zt._jsonSchemaVersion),referencePath:Be("string")};class Nh extends Eh{constructor(e,n,r){super(e,n,gy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new rr(e))}withConverter(e){return new Nh(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Da(e,Gt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Gt(e.vectorValues);throw new he(pe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gt._jsonSchemaVersion="firestore/vectorValue/1.0",Gt._jsonSchema={type:Be("string",Gt._jsonSchemaVersion),vectorValues:Be("object")};function Ry(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{dataSource:t})}}function _a(t,e,n){if(_7(t=Qr(t)))return Ly("Unsupported field value:",e,t),Oy(t,e);if(t instanceof v7)return function(s,i){if(!Ry(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const a=[];let l=0;for(const c of s){let d=_a(c,i.childContextForArray(l));d==null&&(d={nullValue:"NULL_VALUE"}),a.push(d),l++}return{arrayValue:{values:a}}}(t,e)}return function(s,i,a){if((s=Qr(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return py(i.serializer,s,a);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Xe.fromDate(s);return{timestampValue:hc(i.serializer,l)}}if(s instanceof Xe){const l=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:hc(i.serializer,l)}}if(s instanceof Rn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof nn)return{bytesValue:wy(i.serializer,s._byteString)};if(s instanceof zt){const l=i.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:m7(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Gt)return function(c,d){const m=c instanceof Gt?c.toArray():c;return{mapValue:{fields:{[h7]:{stringValue:d7},[yl]:{arrayValue:{values:m.map(_=>{if(typeof _!="number")throw d.createError("VectorValues must only contain numeric values.");return f7(d.serializer,_)})}}}}}}(s,i);if(g7(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${u7(s)}`)}(t,e,n)}function Oy(t,e){const n={};return ry(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_h(t,(r,s)=>{const i=_a(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _7(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Rn||t instanceof nn||t instanceof zt||t instanceof v7||t instanceof Gt||g7(t))}function Ly(t,e,n){if(!_7(n)||!ja(n)){const r=u7(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Sh(t,e,n){if((e=Qr(e))instanceof xh)return e._internalPath;if(typeof e=="string")return Dy(t,e);throw dc("Field path arguments must be of type string or ",t)}const jy=new RegExp("[~\\*/\\[\\]]");function Dy(t,e,n){if(e.search(jy)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new xh(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function dc(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new he(pe.INVALID_ARGUMENT,i+t+a)}function by(t){return typeof t._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,n){const r=xl.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let l;i.nestedOptions&&ja(a)?l={mapValue:{fields:new Mt(i.nestedOptions).getOptionsProto(n,a)}}:a&&(l=_a(a,n)??void 0),l&&r.set(It.fromServerFormat(i.serverName),l)}}return r}getOptionsProto(e,n,r){const s=this._getKnownOptions(n,e);if(r){const i=new Map(ny(r,(a,l)=>[It.fromServerFormat(l),a!==void 0?_a(a,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){return typeof t=="object"&&t!==null&&!!("nullValue"in t&&(t.nullValue===null||t.nullValue==="NULL_VALUE")||"booleanValue"in t&&(t.booleanValue===null||typeof t.booleanValue=="boolean")||"integerValue"in t&&(t.integerValue===null||typeof t.integerValue=="number"||typeof t.integerValue=="string")||"doubleValue"in t&&(t.doubleValue===null||typeof t.doubleValue=="number")||"timestampValue"in t&&(t.timestampValue===null||function(n){return typeof n=="object"&&n!==null&&"seconds"in n&&(n.seconds===null||typeof n.seconds=="number"||typeof n.seconds=="string")&&"nanos"in n&&(n.nanos===null||typeof n.nanos=="number")}(t.timestampValue))||"stringValue"in t&&(t.stringValue===null||typeof t.stringValue=="string")||"bytesValue"in t&&(t.bytesValue===null||t.bytesValue instanceof Uint8Array)||"referenceValue"in t&&(t.referenceValue===null||typeof t.referenceValue=="string")||"geoPointValue"in t&&(t.geoPointValue===null||function(n){return typeof n=="object"&&n!==null&&"latitude"in n&&(n.latitude===null||typeof n.latitude=="number")&&"longitude"in n&&(n.longitude===null||typeof n.longitude=="number")}(t.geoPointValue))||"arrayValue"in t&&(t.arrayValue===null||function(n){return typeof n=="object"&&n!==null&&!(!("values"in n)||n.values!==null&&!Array.isArray(n.values))}(t.arrayValue))||"mapValue"in t&&(t.mapValue===null||function(n){return typeof n=="object"&&n!==null&&!(!("fields"in n)||n.fields!==null&&!ja(n.fields))}(t.mapValue))||"fieldReferenceValue"in t&&(t.fieldReferenceValue===null||typeof t.fieldReferenceValue=="string")||"functionValue"in t&&(t.functionValue===null||function(n){return typeof n=="object"&&n!==null&&!(!("name"in n)||n.name!==null&&typeof n.name!="string"||!("args"in n)||n.args!==null&&!Array.isArray(n.args))}(t.functionValue))||"pipelineValue"in t&&(t.pipelineValue===null||function(n){return typeof n=="object"&&n!==null&&!(!("stages"in n)||n.stages!==null&&!Array.isArray(n.stages))}(t.pipelineValue)))}function My(t){return new Gt(t)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){let e;return t instanceof rs?t:(e=ja(t)?Gy(t):t instanceof Array?Wy(t):w7(t,void 0),e)}function eu(t){if(t instanceof rs)return t;if(t instanceof Gt)return wa(t);if(Array.isArray(t))return wa(My(t));throw new Error("Unsupported value: "+typeof t)}function Ch(t){return ty(t)?By(t):H(t)}class rs{constructor(){this._protoValueType="ProtoValue"}add(e){return new U("add",[this,H(e)],"add")}asBoolean(){if(this instanceof _r)return this;if(this instanceof ba)return new x7(this);if(this instanceof Ah)return new Hy(this);if(this instanceof U)return new zy(this);throw new he("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new U("subtract",[this,H(e)],"subtract")}multiply(e){return new U("multiply",[this,H(e)],"multiply")}divide(e){return new U("divide",[this,H(e)],"divide")}mod(e){return new U("mod",[this,H(e)],"mod")}equal(e){return new U("equal",[this,H(e)],"equal").asBoolean()}notEqual(e){return new U("not_equal",[this,H(e)],"notEqual").asBoolean()}lessThan(e){return new U("less_than",[this,H(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new U("less_than_or_equal",[this,H(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new U("greater_than",[this,H(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new U("greater_than_or_equal",[this,H(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...n){const r=[e,...n].map(s=>H(s));return new U("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new U("array_contains",[this,H(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const n=Array.isArray(e)?new Pi(e.map(H),"arrayContainsAll"):e;return new U("array_contains_all",[this,n],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const n=Array.isArray(e)?new Pi(e.map(H),"arrayContainsAny"):e;return new U("array_contains_any",[this,n],"arrayContainsAny").asBoolean()}arrayReverse(){return new U("array_reverse",[this])}arrayLength(){return new U("array_length",[this],"arrayLength")}equalAny(e){const n=Array.isArray(e)?new Pi(e.map(H),"equalAny"):e;return new U("equal_any",[this,n],"equalAny").asBoolean()}notEqualAny(e){const n=Array.isArray(e)?new Pi(e.map(H),"notEqualAny"):e;return new U("not_equal_any",[this,n],"notEqualAny").asBoolean()}exists(){return new U("exists",[this],"exists").asBoolean()}charLength(){return new U("char_length",[this],"charLength")}like(e){return new U("like",[this,H(e)],"like").asBoolean()}regexContains(e){return new U("regex_contains",[this,H(e)],"regexContains").asBoolean()}regexFind(e){return new U("regex_find",[this,H(e)],"regexFind")}regexFindAll(e){return new U("regex_find_all",[this,H(e)],"regexFindAll")}regexMatch(e){return new U("regex_match",[this,H(e)],"regexMatch").asBoolean()}stringContains(e){return new U("string_contains",[this,H(e)],"stringContains").asBoolean()}startsWith(e){return new U("starts_with",[this,H(e)],"startsWith").asBoolean()}endsWith(e){return new U("ends_with",[this,H(e)],"endsWith").asBoolean()}toLower(){return new U("to_lower",[this],"toLower")}toUpper(){return new U("to_upper",[this],"toUpper")}trim(e){const n=[this];return e&&n.push(H(e)),new U("trim",n,"trim")}ltrim(e){const n=[this];return e&&n.push(H(e)),new U("ltrim",n,"ltrim")}rtrim(e){const n=[this];return e&&n.push(H(e)),new U("rtrim",n,"rtrim")}type(){return new U("type",[this])}isType(e){return new U("is_type",[this,wa(e)],"isType").asBoolean()}stringConcat(e,...n){const r=[e,...n].map(H);return new U("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new U("string_index_of",[this,H(e)],"stringIndexOf")}stringRepeat(e){return new U("string_repeat",[this,H(e)],"stringRepeat")}stringReplaceAll(e,n){return new U("string_replace_all",[this,H(e),H(n)],"stringReplaceAll")}stringReplaceOne(e,n){return new U("string_replace_one",[this,H(e),H(n)],"stringReplaceOne")}concat(e,...n){const r=[e,...n].map(H);return new U("concat",[this,...r],"concat")}reverse(){return new U("reverse",[this],"reverse")}arrayFilter(e,n){return new U("array_filter",[this,H(e),n],"arrayFilter")}arrayTransform(e,n){return new U("array_transform",[this,H(e),n],"arrayTransform")}arrayTransformWithIndex(e,n,r){return new U("array_transform",[this,H(e),H(n),r],"arrayTransformWithIndex")}arraySlice(e,n){const r=[this,H(e)];return n!==void 0&&r.push(H(n)),new U("array_slice",r,"arraySlice")}arrayFirst(){return new U("array_first",[this],"arrayFirst")}arrayFirstN(e){return new U("array_first_n",[this,H(e)],"arrayFirstN")}arrayLast(){return new U("array_last",[this],"arrayLast")}arrayLastN(e){return new U("array_last_n",[this,H(e)],"arrayLastN")}arrayMaximum(){return new U("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new U("maximum_n",[this,H(e)],"arrayMaximumN")}arrayMinimum(){return new U("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new U("minimum_n",[this,H(e)],"arrayMinimumN")}arrayIndexOf(e){return new U("array_index_of",[this,H(e),H("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new U("array_index_of",[this,H(e),H("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new U("array_index_of_all",[this,H(e)],"arrayIndexOfAll")}byteLength(){return new U("byte_length",[this],"byteLength")}ceil(){return new U("ceil",[this])}floor(){return new U("floor",[this])}abs(){return new U("abs",[this])}exp(){return new U("exp",[this])}mapGet(e){return new U("map_get",[this,wa(e)],"mapGet")}mapSet(e,n,...r){const s=[this,H(e),H(n),...r.map(H)];return new U("map_set",s,"mapSet")}mapKeys(){return new U("map_keys",[this],"mapKeys")}mapValues(){return new U("map_values",[this],"mapValues")}mapEntries(){return new U("map_entries",[this],"mapEntries")}getField(e){return new U("get_field",[this,H(e)],"get_field")}count(){return At._create("count",[this],"count")}sum(){return At._create("sum",[this],"sum")}average(){return At._create("average",[this],"average")}minimum(){return At._create("minimum",[this],"minimum")}maximum(){return At._create("maximum",[this],"maximum")}first(){return At._create("first",[this],"first")}last(){return At._create("last",[this],"last")}arrayAgg(){return At._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return At._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return At._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...n){const r=[e,...n];return new U("maximum",[this,...r.map(H)],"logicalMaximum")}logicalMinimum(e,...n){const r=[e,...n];return new U("minimum",[this,...r.map(H)],"minimum")}vectorLength(){return new U("vector_length",[this],"vectorLength")}cosineDistance(e){return new U("cosine_distance",[this,eu(e)],"cosineDistance")}dotProduct(e){return new U("dot_product",[this,eu(e)],"dotProduct")}euclideanDistance(e){return new U("euclidean_distance",[this,eu(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new U("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new U("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new U("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new U("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new U("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new U("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,n){return new U("timestamp_add",[this,H(e),H(n)],"timestampAdd")}timestampSubtract(e,n){return new U("timestamp_subtract",[this,H(e),H(n)],"timestampSubtract")}timestampDiff(e,n){return new U("timestamp_diff",[this,Ch(e),H(n)],"timestampDiff")}timestampExtract(e,n){const r=[this,H(e)];return n&&r.push(H(n)),new U("timestamp_extract",r,"timestampExtract")}documentId(){return new U("document_id",[this],"documentId")}parent(){return new U("parent",[this],"parent")}substring(e,n){const r=H(e);return new U("substring",n===void 0?[this,r]:[this,r,H(n)],"substring")}arrayGet(e){return new U("array_get",[this,H(e)],"arrayGet")}isError(){return new U("is_error",[this],"isError").asBoolean()}ifError(e){const n=new U("if_error",[this,H(e)],"ifError");return e instanceof _r?n.asBoolean():n}isAbsent(){return new U("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new U("map_remove",[this,H(e)],"mapRemove")}mapMerge(e,...n){const r=H(e),s=n.map(H);return new U("map_merge",[this,r,...s],"mapMerge")}pow(e){return new U("pow",[this,H(e)])}trunc(e){return e===void 0?new U("trunc",[this]):new U("trunc",[this,H(e)],"trunc")}round(e){return e===void 0?new U("round",[this]):new U("round",[this,H(e)],"round")}collectionId(){return new U("collection_id",[this])}length(){return new U("length",[this])}ln(){return new U("ln",[this])}sqrt(){return new U("sqrt",[this])}stringReverse(){return new U("string_reverse",[this])}ifAbsent(e){return new U("if_absent",[this,H(e)],"ifAbsent")}ifNull(e){return new U("if_null",[this,H(e)],"ifNull")}coalesce(e,...n){return new U("coalesce",[this,H(e),...n.map(H)],"coalesce")}join(e){return new U("join",[this,H(e)],"join")}log10(){return new U("log10",[this])}arraySum(){return new U("sum",[this])}split(e){return new U("split",[this,H(e)])}timestampTruncate(e,n){const r=[this,H(e)];return n&&r.push(H(n)),new U("timestamp_trunc",r)}ascending(){return Yy(this)}descending(){return qy(this)}as(e){return new Uy(this,e,"as")}}class At{constructor(e,n){this.name=e,this.params=n,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,n,r){const s=new At(e,n);return s._methodName=r,s}as(e){return new Fy(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(n=>n._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(n=>n._readUserData(e))}}class Fy{constructor(e,n,r){this.aggregate=e,this.alias=n,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class Uy{constructor(e,n,r){this.expr=e,this.alias=n,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Pi extends rs{constructor(e,n){super(),this.Rr=e,this._methodName=n,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map(n=>n._toProto(e))}}}_readUserData(e){this.Rr.forEach(n=>n._readUserData(e))}}class Ah extends rs{constructor(e,n){super(),this.fieldPath=e,this._methodName=n,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new U("geo_distance",[this,H(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function By(t){return $y(t,"field")}function $y(t,e){return new Ah(typeof t=="string"?ma===t?Ny()._internalPath:Sh("field",t):t._internalPath,e)}class ba extends rs{constructor(e,n){super(),this.value=e,this._methodName=n,this.expressionType="Constant"}static _fromProto(e){const n=new ba(e,void 0);return n._protoValue=e,n}_toProto(e){return oe(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,Vy(this._protoValue)||(this._protoValue=_a(this.value,e))}}function wa(t,e){return w7(t,"constant")}function w7(t,e){const n=new ba(t,e);return typeof t=="boolean"?new x7(n):n}class U extends rs{constructor(e,n,r,s){super(),this.name=e,this.params=n,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Mt({})}_toProto(e){const n={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(n.functionValue.options=this._optionsProto),n}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(n=>n._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class _r extends rs{get _methodName(){return this._expr._methodName}countIf(){return At._create("count_if",[this],"countIf")}not(){return new U("not",[this],"not").asBoolean()}conditional(e,n){return new U("conditional",[this,e,n],"conditional")}ifError(e){const n=H(e),r=new U("if_error",[this,n],"ifError");return n instanceof _r?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class zy extends _r{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class x7 extends _r{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Hy extends _r{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function Gy(t,e){const n=[];for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const s=t[r];n.push(wa(r)),n.push(H(s))}return new U("map",n,"map")}function Wy(t){return function(n,r){return new U("array",n.map(s=>H(s)),r)}(t,"array")}function Yy(t){return new E7(Ch(t),"ascending","ascending")}function qy(t){return new E7(Ch(t),"descending","descending")}class E7{constructor(e,n,r){this.expr=e,this.direction=n,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:y7(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Xy extends Nn{get _name(){return"add_fields"}get _optionsUtil(){return new Mt({})}constructor(e,n){super(n),this.fields=e}_toProto(e){return{...super._toProto(e),args:[va(e,this.fields)]}}_readUserData(e){super._readUserData(e),Jr(this.fields,e)}}class Ky extends Nn{get _name(){return"aggregate"}get _optionsUtil(){return new Mt({})}constructor(e,n,r){super(r),this.groups=e,this.accumulators=n}_toProto(e){return{...super._toProto(e),args:[va(e,this.accumulators),va(e,this.groups)]}}_readUserData(e){super._readUserData(e),Jr(this.groups,e),Jr(this.accumulators,e)}}class Qy extends Nn{get _name(){return"distinct"}get _optionsUtil(){return new Mt({})}constructor(e,n){super(n),this.groups=e}_toProto(e){return{...super._toProto(e),args:[va(e,this.groups)]}}_readUserData(e){super._readUserData(e),Jr(this.groups,e)}}class Jy extends Nn{get _name(){return"collection"}get _optionsUtil(){return new Mt({forceIndex:{serverName:"force_index"}})}constructor(e,n){super(n),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class Zy extends Nn{get _name(){return"collection_group"}get _optionsUtil(){return new Mt({forceIndex:{serverName:"force_index"}})}constructor(e,n){super(n),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class ev extends Nn{get _name(){return"database"}get _optionsUtil(){return new Mt({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class tv extends Nn{get _name(){return"documents"}get _optionsUtil(){return new Mt({})}constructor(e,n){if(super(n),!e||e.length===0)throw new he(pe.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new he(pe.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=s}_toProto(e){return{...super._toProto(e),args:this.dr.map(n=>({referenceValue:n}))}}_readUserData(e){super._readUserData(e)}}class nv extends Nn{get _name(){return"select"}get _optionsUtil(){return new Mt({})}constructor(e,n){super(n),this.selections=e}_toProto(e){return{...super._toProto(e),args:[va(e,this.selections)]}}_readUserData(e){super._readUserData(e),Jr(this.selections,e)}}class rv extends Nn{get _name(){return"sort"}get _optionsUtil(){return new Mt({})}constructor(e,n){super(n),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(n=>n._toProto(e))}}_readUserData(e){super._readUserData(e),Jr(this.orderings,e)}}class kh extends Nn{get _name(){return"replace_with"}get _optionsUtil(){return new Mt({})}constructor(e,n){super(n),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),y7(kh.pr)]}}_readUserData(e){super._readUserData(e),Jr(this.map,e)}}kh.pr="full_replace";function Jr(t,e){return by(t)?t._readUserData(e):Array.isArray(t)?t.forEach(n=>n._readUserData(e)):t instanceof Map?t.forEach(n=>n._readUserData(e)):Object.values(t).forEach(n=>n._readUserData(e)),t}// Copyright 2024 Google LLC* @license
class sv{constructor(e,n,r){this.serializer=e,this.stages=n,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return N7(this)}getPipelineCollectionGroup(){return S7(this)}getPipelineCollectionId(){return iv(this)}getPipelineDocuments(){return av(this)}getPipelineFlavor(){return function(n){let r="exact";return n.stages.forEach((s,i)=>{s._name!==Qy.name&&s._name!==Ky.name||(r="keyless"),s._name===nv.name&&r==="exact"&&(r="augmented"),s._name===Xy.name&&i<n.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Va(this)}}function Va(t){const e=t.stages[0];return e instanceof Jy||e instanceof Zy||e instanceof ev||e instanceof tv?e._name:"unknown"}function N7(t){if(Va(t)==="collection")return t.stages[0].Vr}function S7(t){if(Va(t)==="collection_group")return t.stages[0].collectionId}function iv(t){switch(Va(t)){case"collection":return Pt.fromString(N7(t)).lastSegment();case"collection_group":return S7(t);default:return}}function av(t){if(Va(t)==="documents")return t.stages[0].dr}// Copyright 2024 Google LLC* @license
class j{constructor(e,n){this.type=e,this.value=n}static vr(){return new j("ERROR",void 0)}static Sr(){return new j("UNSET",void 0)}static Dr(){return new j("NULL",vl)}static newValue(e){return sn(e)?new j("NULL",vl):function(r){return!!r&&"booleanValue"in r}(e)?new j("BOOLEAN",e):Cs(e)?new j("INT",e):$r(e)?new j("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new j("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new j("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new j("BYTES",e):e.referenceValue?new j("REFERENCE",e):e.geoPointValue?new j("GEO_POINT",e):uc(e)?new j("ARRAY",e):wl(e)?new j("VECTOR",e):Ds(e)?new j("MAP",e):new j("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function Zf(t){if(!t.Cr())return t.value}function ov(t){return t instanceof _r?t._expr:t}function ee(t){if((t=ov(t))instanceof Ah)return new lv(t);if(t instanceof ba)return new uv(t);if(t instanceof Pi)return new cv(t);if(t instanceof U){if(t.name==="add")return new fv(t);if(t.name==="subtract")return new pv(t);if(t.name==="multiply")return new mv(t);if(t.name==="divide")return new gv(t);if(t.name==="mod")return new yv(t);if(t.name==="and")return new vv(t);if(t.name==="equal")return new Iv(t);if(t.name==="not_equal")return new Rv(t);if(t.name==="less_than")return new Ov(t);if(t.name==="less_than_or_equal")return new Lv(t);if(t.name==="greater_than")return new jv(t);if(t.name==="greater_than_or_equal")return new Dv(t);if(t.name==="array_concat")return new bv(t);if(t.name==="array_reverse")return new Vv(t);if(t.name==="array_contains")return new Mv(t);if(t.name==="array_contains_all")return new Fv(t);if(t.name==="array_contains_any")return new Uv(t);if(t.name==="array_length")return new Bv(t);if(t.name==="array_element")return new $v(t);if(t.name==="equal_any")return new C7(t);if(t.name==="not_equal_any")return new wv(t);if(t.name==="is_nan")return new xv(t);if(t.name==="is_not_nan")return new Ev(t);if(t.name==="is_null")return new Nv(t);if(t.name==="is_not_null")return new Sv(t);if(t.name==="is_error")return new Cv(t);if(t.name==="exists")return new Av(t);if(t.name==="not")return new Yl(t);if(t.name==="or")return new _v(t);if(t.name==="xor")return new Th(t);if(t.name==="conditional")return new kv(t);if(t.name==="maximum")return new Tv(t);if(t.name==="minimum")return new Pv(t);if(t.name==="reverse")return new zv(t);if(t.name==="replace_first")return new Hv(t);if(t.name==="replace_all")return new Gv(t);if(t.name==="char_length")return new Wv(t);if(t.name==="byte_length")return new Yv(t);if(t.name==="like")return new qv(t);if(t.name==="regex_contains")return new Xv(t);if(t.name==="regex_match")return new Kv(t);if(t.name==="string_contains")return new Qv(t);if(t.name==="starts_with")return new Jv(t);if(t.name==="ends_with")return new Zv(t);if(t.name==="to_lower")return new e_(t);if(t.name==="to_upper")return new t_(t);if(t.name==="trim")return new n_(t);if(t.name==="string_concat")return new r_(t);if(t.name==="map_get")return new s_(t);if(t.name==="cosine_distance")return new i_(t);if(t.name==="dot_product")return new a_(t);if(t.name==="euclidean_distance")return new o_(t);if(t.name==="vector_length")return new l_(t);if(t.name==="unix_micros_to_timestamp")return new f_(t);if(t.name==="timestamp_to_unix_micros")return new g_(t);if(t.name==="unix_millis_to_timestamp")return new p_(t);if(t.name==="timestamp_to_unix_millis")return new y_(t);if(t.name==="unix_seconds_to_timestamp")return new m_(t);if(t.name==="timestamp_to_unix_seconds")return new v_(t);if(t.name==="timestamp_add")return new __(t);if(t.name==="timestamp_subtract")return new w_(t)}throw new Error(`Unknown Expr : ${t}`)}class lv{constructor(e){this.expr=e}evaluate(e,n){if(this.expr.fieldName===ma)return j.newValue({referenceValue:Ey(e.serializer,n.key)});if(this.expr.fieldName==="__update_time__")return j.newValue({timestampValue:Z1(e.serializer,n.version)});if(this.expr.fieldName==="__create_time__")return j.newValue({timestampValue:Z1(e.serializer,n.createTime)});const r=n.data.field(this.expr._fieldPath);return r?wh(r)?j.newValue(function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Z1(i.serializer,Hi.fromTimestamp(ya(a)))};if(i.serverTimestampBehavior==="previous"){const l=c7(a);if(l)return l}return{nullValue:"NULL_VALUE"}}(e,r)):j.newValue(r):j.Sr()}}class uv{constructor(e){this.expr=e}evaluate(e,n){return j.newValue(this.expr._getValue())}}class cv{constructor(e){this.expr=e}evaluate(e,n){const r=this.expr.Rr.map(s=>ee(s).evaluate(e,n));return r.some(s=>s.Cr())?j.vr():j.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function rt(t){return $r(t)?Number(t.doubleValue):Number(t.integerValue)}function xn(t){return BigInt(t.integerValue)}const hv=BigInt("0x7fffffffffffffff"),dv=-BigInt("0x8000000000000000");class Ma{constructor(e){this.expr=e}evaluate(e,n){oe(this.expr.params.length>=2,24778);const r=ee(this.expr.params[0]).evaluate(e,n),s=ee(this.expr.params[1]).evaluate(e,n);let i=this.Or(r,s);for(const a of this.expr.params.slice(2)){const l=ee(a).evaluate(e,n);i=this.Or(i,l)}return i}Or(e,n){if(e.Cr()||n.Cr())return j.vr();if(e.Fr()||n.Fr())return j.Dr();const r=e.value,s=n.value;if(!$r(r)&&!Cs(r)||!$r(s)&&!Cs(s))return j.vr();if($r(r)||$r(s)){const i=this.Mr(r,s);return i?j.newValue(i):j.vr()}if(Cs(r)&&Cs(s)){const i=this.Nr(r,s);return i===void 0?j.vr():typeof i=="number"?j.newValue({doubleValue:i}):i<dv||i>hv?j.vr():j.newValue({integerValue:`${i}`})}return j.vr()}}function Vn(t,e){return ht(t)!==ht(e)?"TYPE_MISMATCH":Xt(t)||Xt(e)?"NOT_EQ":sn(t)&&sn(e)?"EQ":sn(t)||sn(e)?"NULL":uc(t)&&uc(e)?function(r,s){var a,l,c;if(((a=r.values)==null?void 0:a.length)!==((l=s.values)==null?void 0:l.length))return"NOT_EQ";let i=!1;for(let d=0;d<(((c=r.values)==null?void 0:c.length)??0);d++){const m=r.values[d],g=s.values[d];switch(Vn(m,g)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:Ae(44609,{Lr:m,Br:g})}}return i?"NULL":"EQ"}(t.arrayValue,e.arrayValue):wl(t)&&wl(e)||Ds(t)&&Ds(e)?function(r,s){const i=r.fields||{},a=s.fields||{};if(pl(i)!==pl(a))return"NOT_EQ";let l=!1;for(const c in i)if(i.hasOwnProperty(c)){if(a[c]===void 0)return"NOT_EQ";switch(Vn(i[c],a[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":l=!0}}return l?"NULL":"EQ"}(t.mapValue,e.mapValue):function(r,s){return _l(r,s,{Te:!1,Ee:!0,he:!0})}(t,e)?"EQ":"NOT_EQ"}class fv extends Ma{Nr(e,n){return xn(e)+xn(n)}Mr(e,n){return{doubleValue:rt(e)+rt(n)}}}class pv extends Ma{constructor(e){super(e),this.expr=e}Nr(e,n){return xn(e)-xn(n)}Mr(e,n){return{doubleValue:rt(e)-rt(n)}}}class mv extends Ma{constructor(e){super(e),this.expr=e}Nr(e,n){return xn(e)*xn(n)}Mr(e,n){return{doubleValue:rt(e)*rt(n)}}}class gv extends Ma{constructor(e){super(e),this.expr=e}Nr(e,n){const r=xn(n);if(r!==BigInt(0))return xn(e)/r}Mr(e,n){const r=rt(n);return r===0?{doubleValue:ga(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:rt(e)/r}}}class yv extends Ma{constructor(e){super(e),this.expr=e}Nr(e,n){const r=xn(n);if(r!==BigInt(0))return xn(e)%r}Mr(e,n){const r=rt(n);if(r!==0)return{doubleValue:rt(e)%r}}}class vv{constructor(e){this.expr=e}evaluate(e,n){var i;let r=!1,s=!1;for(const a of this.expr.params){const l=ee(a).evaluate(e,n);switch(l.type){case"BOOLEAN":if(!((i=l.value)!=null&&i.booleanValue))return j.newValue(Ke);break;case"NULL":s=!0;break;default:r=!0}}return r?j.vr():s?j.Dr():j.newValue(Dt)}}class Yl{constructor(e){this.expr=e}evaluate(e,n){var s;oe(this.expr.params.length===1,9634);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"BOOLEAN":return j.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return j.Dr();default:return j.vr()}}}class _v{constructor(e){this.expr=e}evaluate(e,n){var i;let r=!1,s=!1;for(const a of this.expr.params){const l=ee(a).evaluate(e,n);switch(l.type){case"BOOLEAN":if((i=l.value)!=null&&i.booleanValue)return j.newValue(Dt);break;case"NULL":s=!0;break;default:r=!0}}return r?j.vr():s?j.Dr():j.newValue(Ke)}}class Th{constructor(e){this.expr=e}evaluate(e,n){var i;let r=!1,s=!1;for(const a of this.expr.params){const l=ee(a).evaluate(e,n);switch(l.type){case"BOOLEAN":r=Th.xor(r,!!((i=l.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return j.vr()}}return s?j.Dr():j.newValue({booleanValue:r})}static xor(e,n){return(e||n)&&!(e&&n)}}class C7{constructor(e){this.expr=e}evaluate(e,n){var a,l;oe(this.expr.params.length===2,55094);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,n);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return j.vr()}const i=ee(this.expr.params[1]).evaluate(e,n);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return j.vr()}if(r)return j.Dr();for(const c of((l=(a=i.value)==null?void 0:a.arrayValue)==null?void 0:l.values)??[])switch(sn(s.value)&&sn(c)?"EQ":Vn(s.value,c)){case"EQ":return j.newValue(Dt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Ae(44608,{value:s.value,candidate:c})}return r?j.Dr():j.newValue(Ke)}}class wv{constructor(e){this.expr=e}evaluate(e,n){return new Yl(new U("not",[new U("equal_any",this.expr.params)])).evaluate(e,n)}}class xv{constructor(e){this.expr=e}evaluate(e,n){oe(this.expr.params.length===1,23322);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"INT":return j.newValue(Ke);case"DOUBLE":return j.newValue({booleanValue:isNaN(rt(r.value))});case"NULL":return j.Dr();default:return j.vr()}}}class Ev{constructor(e){this.expr=e}evaluate(e,n){return oe(this.expr.params.length===1,50406),new Yl(new U("not",[new U("is_nan",this.expr.params)])).evaluate(e,n)}}class Nv{constructor(e){this.expr=e}evaluate(e,n){switch(oe(this.expr.params.length===1,23123),ee(this.expr.params[0]).evaluate(e,n).type){case"NULL":return j.newValue(Dt);case"UNSET":case"ERROR":return j.vr();default:return j.newValue(Ke)}}}class Sv{constructor(e){this.expr=e}evaluate(e,n){return oe(this.expr.params.length===1,23167),new Yl(new U("not",[new U("is_null",this.expr.params)])).evaluate(e,n)}}class Cv{constructor(e){this.expr=e}evaluate(e,n){return oe(this.expr.params.length===1,5228),ee(this.expr.params[0]).evaluate(e,n).type==="ERROR"?j.newValue(Dt):j.newValue(Ke)}}class Av{constructor(e){this.expr=e}evaluate(e,n){switch(oe(this.expr.params.length===1,6877),ee(this.expr.params[0]).evaluate(e,n).type){case"ERROR":return j.vr();case"UNSET":return j.newValue(Ke);default:return j.newValue(Dt)}}}class kv{constructor(e){this.expr=e}evaluate(e,n){var s;oe(this.expr.params.length===3,11706);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?ee(this.expr.params[1]).evaluate(e,n):ee(this.expr.params[2]).evaluate(e,n);case"NULL":return ee(this.expr.params[2]).evaluate(e,n);default:return j.vr()}}}class Tv{constructor(e){this.expr=e}evaluate(e,n){const r=this.expr.params.map(i=>ee(i).evaluate(e,n));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||En(i.value,s.value)>0?i:s}return s===void 0?j.Dr():s}}class Pv{constructor(e){this.expr=e}evaluate(e,n){const r=this.expr.params.map(i=>ee(i).evaluate(e,n));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||En(i.value,s.value)<0?i:s}return s===void 0?j.Dr():s}}class Js{constructor(e){this.expr=e}evaluate(e,n){oe(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"ERROR":case"UNSET":return j.vr()}const s=ee(this.expr.params[1]).evaluate(e,n);switch(s.type){case"ERROR":case"UNSET":return j.vr()}return this.Ur(r,s)}}class Iv extends Js{constructor(e){super(e),this.expr=e}Ur(e,n){if(e.Fr()&&n.Fr())return j.newValue(Dt);if(e.Fr()||n.Fr()||Xt(e.value)||Xt(n.value)||ht(e.value)!==ht(n.value))return j.newValue(Ke);switch(Vn(e.value,n.value)){case"EQ":return j.newValue(Dt);case"NOT_EQ":return j.newValue(Ke);case"NULL":return j.Dr();default:Ae(44615,{left:e,right:n})}}}class Rv extends Js{constructor(e){super(e),this.expr=e}Ur(e,n){switch(Vn(e.value,n.value)){case"EQ":return j.newValue(Ke);case"NOT_EQ":case"TYPE_MISMATCH":return j.newValue(Dt);case"NULL":return j.Dr();default:Ae(44614,{left:e,right:n})}}}class Ov extends Js{constructor(e){super(e),this.expr=e}Ur(e,n){return ht(e.value)!==ht(n.value)||Xt(e.value)||Xt(n.value)?j.newValue(Ke):j.newValue({booleanValue:En(e.value,n.value)<0})}}class Lv extends Js{constructor(e){super(e),this.expr=e}Ur(e,n){return ht(e.value)!==ht(n.value)||Xt(e.value)||Xt(n.value)?j.newValue(Ke):Vn(e.value,n.value)==="EQ"?j.newValue(Dt):j.newValue({booleanValue:En(e.value,n.value)<0})}}class jv extends Js{constructor(e){super(e),this.expr=e}Ur(e,n){return ht(e.value)!==ht(n.value)||Xt(e.value)||Xt(n.value)?j.newValue(Ke):j.newValue({booleanValue:En(e.value,n.value)>0})}}class Dv extends Js{constructor(e){super(e),this.expr=e}Ur(e,n){return ht(e.value)!==ht(n.value)||Xt(e.value)||Xt(n.value)?j.newValue(Ke):Vn(e.value,n.value)==="EQ"?j.newValue(Dt):j.newValue({booleanValue:En(e.value,n.value)>0})}}class bv{constructor(e){this.expr=e}evaluate(e,n){throw new Error("Unimplemented")}}class Vv{constructor(e){this.expr=e}evaluate(e,n){var s;oe(this.expr.params.length===1,216);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"NULL":return j.Dr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return j.newValue({arrayValue:{values:[...i].reverse()}})}default:return j.vr()}}}class Mv{constructor(e){this.expr=e}evaluate(e,n){return oe(this.expr.params.length===2,52884),new C7(new U("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,n)}}class Fv{constructor(e){this.expr=e}evaluate(e,n){var c,d,m,g;oe(this.expr.params.length===2,1392);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,n);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return j.vr()}const i=ee(this.expr.params[1]).evaluate(e,n);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return j.vr()}if(r)return j.Dr();const a=((d=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:d.values)??[],l=((g=(m=s.value)==null?void 0:m.arrayValue)==null?void 0:g.values)??[];for(const _ of a){let L=!1;r=!1;for(const I of l){switch(sn(_)&&sn(I)?"EQ":Vn(_,I)){case"EQ":L=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Ae(44613,{value:I,search:_})}if(L)break}if(!L)return j.newValue(Ke)}return j.newValue(Dt)}}class Uv{constructor(e){this.expr=e}evaluate(e,n){var c,d,m,g;oe(this.expr.params.length===2,2680);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,n);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return j.vr()}const i=ee(this.expr.params[1]).evaluate(e,n);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return j.vr()}if(r)return j.Dr();const a=((d=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:d.values)??[],l=((g=(m=s.value)==null?void 0:m.arrayValue)==null?void 0:g.values)??[];for(const _ of l)for(const L of a)switch(sn(_)&&sn(L)?"EQ":Vn(_,L)){case"EQ":return j.newValue(Dt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Ae(44608,{value:_,search:L})}return r?j.Dr():j.newValue(Ke)}}class Bv{constructor(e){this.expr=e}evaluate(e,n){var s,i,a;oe(this.expr.params.length===1,38605);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"NULL":return j.Dr();case"ARRAY":return j.newValue({integerValue:`${((a=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:a.length)??0}`});default:return j.vr()}}}class $v{constructor(e){this.expr=e}evaluate(e,n){throw new Error("Unimplemented")}}class zv{constructor(e){this.expr=e}evaluate(e,n){var s,i;oe(this.expr.params.length===1,1508);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"NULL":return j.Dr();case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;if(typeof a=="string"){const l=qt.fromBase64String(a).toUint8Array();return l.reverse(),j.newValue({bytesValue:qt.fromUint8Array(l).toBase64()})}return j.newValue({bytesValue:new Uint8Array(a).reverse()})}case"STRING":{const a=(i=r.value)==null?void 0:i.stringValue,l=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(a),c=Array.from(l,d=>d.segment).reverse();return j.newValue({stringValue:c.join("")})}default:return j.vr()}}}class Hv{constructor(e){this.expr=e}evaluate(e,n){throw new Error("Unimplemented")}}class Gv{constructor(e){this.expr=e}evaluate(e,n){throw new Error("Unimplemented")}}class Wv{constructor(e){this.expr=e}evaluate(e,n){oe(this.expr.params.length===1,19400);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"NULL":return j.Dr();case"STRING":{const s=function(a){let l=0;for(let c=0;c<a.length;c++){const d=a.codePointAt(c);if(d===void 0)return;if(d<=65535)if(d>=55296&&d<=57343)if(d<=56319){const m=a.codePointAt(c+1);m!==void 0&&m>=56320&&m<=57343?(l+=1,c++):l+=1}else l+=1;else l+=1;else{if(!(d<=1114111))return;l+=1,c++}}return l}(r.value.stringValue);return s===void 0?j.vr():j.newValue({integerValue:s})}default:return j.vr()}}}class Yv{constructor(e){this.expr=e}evaluate(e,n){var s,i;oe(this.expr.params.length===1,8486);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;return typeof a=="string"?j.newValue({integerValue:qt.fromBase64String(a).toUint8Array().length}):j.newValue({integerValue:new Uint8Array(a).length})}case"STRING":{const a=function(c){let d=0;for(let m=0;m<c.length;m++){const g=c.codePointAt(m);if(g===void 0)return;if(g>=55296&&g<=57343){if(!(g<=56319))return;{const _=c.codePointAt(m+1);if(_===void 0||!(_>=56320&&_<=57343))return;d+=4,m++}}else if(g<=127)d+=1;else if(g<=2047)d+=2;else if(g<=65535)d+=3;else{if(!(g<=1114111))return;d+=4,m++}}return d}((i=r.value)==null?void 0:i.stringValue);return a===void 0?j.vr():j.newValue({integerValue:a})}case"NULL":return j.Dr();default:return j.vr()}}}class Zs{constructor(e){this.expr=e}evaluate(e,n){var a,l;oe(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,n);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return j.vr()}const i=ee(this.expr.params[1]).evaluate(e,n);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return j.vr()}return r?j.Dr():this.kr((a=s.value)==null?void 0:a.stringValue,(l=i.value)==null?void 0:l.stringValue)}}class qv extends Zs{kr(e,n){try{const r=function(a){let l="";for(let c=0;c<a.length;c++){const d=a.charAt(c);switch(d){case"_":l+=".";break;case"%":l+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":l+="\\"+d;break;default:l+=d}}return"^"+l+"$"}(n),s=pa.compile(r);return j.newValue({booleanValue:s.matches(e)})}catch(r){return Wl(`Invalid LIKE pattern converted to regex: ${n}, returning error. Error: ${r}`),j.vr()}}}class Xv extends Zs{kr(e,n){try{const r=pa.compile(n);return j.newValue({booleanValue:r.matcher(e).find()})}catch{return Wl(`Invalid regex pattern found in regex_contains: ${n}, returning error`),j.vr()}}}class Kv extends Zs{kr(e,n){try{return j.newValue({booleanValue:pa.compile(n).matches(e)})}catch{return Wl(`Invalid regex pattern found in regex_match: ${n}, returning error`),j.vr()}}}class Qv extends Zs{kr(e,n){return j.newValue({booleanValue:e.includes(n)})}}class Jv extends Zs{kr(e,n){return j.newValue({booleanValue:e.startsWith(n)})}}class Zv extends Zs{kr(e,n){return j.newValue({booleanValue:e.endsWith(n)})}}class e_{constructor(e){this.expr=e}evaluate(e,n){var s,i;oe(this.expr.params.length===1,29079);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"STRING":return j.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return j.Dr();default:return j.vr()}}}class t_{constructor(e){this.expr=e}evaluate(e,n){var s,i;oe(this.expr.params.length===1,60487);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"STRING":return j.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return j.Dr();default:return j.vr()}}}class n_{constructor(e){this.expr=e}evaluate(e,n){var s,i;oe(this.expr.params.length===1,28544);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"STRING":return j.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return j.Dr();default:return j.vr()}}}class r_{constructor(e){this.expr=e}evaluate(e,n){const r=this.expr.params.map(a=>ee(a).evaluate(e,n));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return j.vr()}return i?j.Dr():j.newValue({stringValue:s})}}class s_{constructor(e){this.expr=e}evaluate(e,n){var a,l,c,d;oe(this.expr.params.length===2,4483);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"UNSET":return j.Sr();case"MAP":break;default:return j.vr()}const s=ee(this.expr.params[1]).evaluate(e,n);if(s.type!=="STRING")return j.vr();const i=(d=(l=(a=r.value)==null?void 0:a.mapValue)==null?void 0:l.fields)==null?void 0:d[(c=s.value)==null?void 0:c.stringValue];return i===void 0?j.Sr():j.newValue(i)}}class Ph{constructor(e){this.expr=e}evaluate(e,n){var d,m;oe(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,n);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return j.vr()}const i=ee(this.expr.params[1]).evaluate(e,n);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return j.vr()}if(r)return j.Dr();const a=cc(s.value),l=cc(i.value);if(a===void 0||l===void 0||((d=a.values)==null?void 0:d.length)!==((m=l.values)==null?void 0:m.length))return j.vr();const c=this.qr(a,l);return c===void 0||isNaN(c)?j.vr():j.newValue({doubleValue:c})}}class i_ extends Ph{qr(e,n){const r=(e==null?void 0:e.values)??[],s=(n==null?void 0:n.values)??[];if(r.length===0)return;let i=0,a=0,l=0;for(let d=0;d<r.length;d++){if(!qs(r[d])||!qs(s[d]))return;const m=rt(r[d]),g=rt(s[d]);i+=m*g,a+=m*m,l+=g*g}const c=Math.sqrt(a)*Math.sqrt(l);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class a_ extends Ph{qr(e,n){const r=(e==null?void 0:e.values)??[],s=(n==null?void 0:n.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!qs(r[a])||!qs(s[a]))return;i+=rt(r[a])*rt(s[a])}return i}}class o_ extends Ph{qr(e,n){const r=(e==null?void 0:e.values)??[],s=(n==null?void 0:n.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!qs(r[a])||!qs(s[a]))return;const l=rt(r[a]),c=rt(s[a]);i+=Math.pow(l-c,2)}return Math.sqrt(i)}}class l_{constructor(e){this.expr=e}evaluate(e,n){var s;oe(this.expr.params.length===1,39044);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"VECTOR":{const i=cc(r.value);return j.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return j.Dr();default:return j.vr()}}}const xa=BigInt(-62135596800),Ea=BigInt(253402300799),El=BigInt(1e3),mr=BigInt(1e6),u_=xa*El,c_=Ea*El+BigInt(999),h_=xa*mr,d_=Ea*mr+BigInt(999999);function Ih(t){return t>=h_&&t<=d_}function A7(t){return t>=xa&&t<=Ea}function Na(t,e){const n=BigInt(t);return!(n<xa||n>Ea)&&!(e<0||e>=1e9)&&(n!==xa||e===0)&&!(n===Ea&&e>999999999)}function k7(t,e){return e<0?{seconds:t-1,nanos:e+1e9}:{seconds:t,nanos:e}}function Rh(t){return BigInt(t.seconds)*mr+BigInt(Math.trunc(t.nanoseconds/1e3))}class Oh{constructor(e){this.expr=e}evaluate(e,n){oe(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return j.Dr();default:return j.vr()}}}class f_ extends Oh{toTimestamp(e){if(!Ih(e))return j.vr();let n=Number(e/mr),r=Number(e%mr*BigInt(1e3));const s=k7(n,r);return n=s.seconds,r=s.nanos,Na(n,r)?j.newValue({timestampValue:{seconds:n,nanos:r}}):j.vr()}}class p_ extends Oh{toTimestamp(e){if(!function(a){return a>=u_&&a<=c_}(e))return j.vr();let n=Number(e/El),r=Number(e%El*BigInt(1e6));const s=k7(n,r);return n=s.seconds,r=s.nanos,Na(n,r)?j.newValue({timestampValue:{seconds:n,nanos:r}}):j.vr()}}class m_ extends Oh{toTimestamp(e){if(!A7(e))return j.vr();const n=Number(e);return j.newValue({timestampValue:{seconds:n,nanos:0}})}}class Lh{constructor(e){this.expr=e}evaluate(e,n){oe(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=ee(this.expr.params[0]).evaluate(e,n);switch(r.type){case"TIMESTAMP":break;case"NULL":return j.Dr();default:return j.vr()}const s=p7(r.value.timestampValue);return Na(s.seconds,s.nanoseconds)?this.$r(s):j.vr()}}class g_ extends Lh{$r(e){const n=Rh(e);return Ih(n)?j.newValue({integerValue:`${n.toString()}`}):j.vr()}}class y_ extends Lh{$r(e){const n=Rh(e),r=n/BigInt(1e3),s=n%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?j.newValue({integerValue:r.toString()}):j.newValue({integerValue:(r-BigInt(1)).toString()})}}class v_ extends Lh{$r(e){const n=BigInt(e.seconds);return A7(n)?j.newValue({integerValue:n.toString()}):j.vr()}}class T7{constructor(e){this.expr=e}evaluate(e,n){oe(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,n);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return j.vr()}const i=ee(this.expr.params[1]).evaluate(e,n);let a;switch(i.type){case"STRING":if(a=function(x){switch(x){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),a===void 0)return j.vr();break;case"NULL":r=!0;break;default:return j.vr()}const l=ee(this.expr.params[2]).evaluate(e,n);switch(l.type){case"INT":break;case"NULL":r=!0;break;default:return j.vr()}if(r)return j.Dr();const c=BigInt(l.value.integerValue);let d;try{switch(a){case"microsecond":d=c;break;case"millisecond":d=c*BigInt(1e3);break;case"second":d=c*BigInt(1e6);break;case"minute":d=c*BigInt(6e7);break;case"hour":d=c*BigInt(36e8);break;case"day":d=c*BigInt(864e8);break;default:return j.vr()}if(a!=="microsecond"&&c!==BigInt(0)&&d/c!==BigInt(this.Kr(a)))return j.vr()}catch(C){return Wl(`Error during timestamp arithmetic: ${C}`),j.vr()}const m=p7(s.value.timestampValue);if(!Na(m.seconds,m.nanoseconds))return j.vr();const g=Rh(m),_=this.Wr(g,d);if(!Ih(_))return j.vr();const L=Number(_/mr),I=_%mr,T=Number((I<0?I+mr:I)*BigInt(1e3)),k=I<0?L-1:L;return Na(k,T)?j.newValue({timestampValue:{seconds:k,nanos:T}}):j.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class __ extends T7{Wr(e,n){return e+n}}class w_ extends T7{Wr(e,n){return e-n}}function x_(t){return t instanceof sv}function E_(t){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof rv)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(t);return(n,r)=>{for(const s of e){const i=Zf(ee(s.expr).evaluate({serializer:t.serializer},n)),a=Zf(ee(s.expr).evaluate({serializer:t.serializer},r)),l=En(i||vl,a||vl);if(l!==0)return s.direction==="ascending"?l:-l}return 0}}function tu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new jh(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(pe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ep;(function(t){t.Default="default",t.Cache="cache"})(ep||(ep={}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="AsyncQueue";class np{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new Cy(this,"async_queue_retry"),this.jc=()=>{const r=tu();r&&rn(tp,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=e;const n=tu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const n=tu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const n=new zi;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!Zg(e))throw e;rn(tp,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn(()=>this.Zc())}}Yc(e){const n=this.Hc.then(()=>(this.Qc=!0,e().catch(r=>{throw this.Wc=r,this.Qc=!1,o7("INTERNAL UNHANDLED ERROR: ",rp(r)),r}).then(r=>(this.Qc=!1,r))));return this.Hc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.zc.indexOf(e)>-1&&(n=0);const s=jh.createAndSchedule(this,e,n,r,i=>this.Xc(i));return this.Kc.push(s),s}Jc(){this.Wc&&Ae(47125,{el:rp(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const n of this.Kc)if(n.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Kc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const n=this.Kc.indexOf(e);this.Kc.splice(n,1)}}function rp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class N_ extends Iy{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new np,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new np(e),this._firestoreClient=void 0,await e}}}const sp="@firebase/firestore",ip="4.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P7{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new S_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Sh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class S_ extends P7{data(){return super.data()}}class yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bs extends P7{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(pe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=bs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}bs._jsonSchemaVersion="firestore/documentSnapshot/1.0",bs._jsonSchema={type:Be("string",bs._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class jo extends bs{data(e={}){return super.data(e)}}class Wi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new yo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new jo(this._firestore,this._userDataWriter,r.key,r,new yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(pe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{x_(s._snapshot.query)?E_(s._snapshot.query):vy(s.query._query);const c=new jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new yo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new yo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:C_(l.type),doc:c,oldIndex:d,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(pe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function C_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wi._jsonSchemaVersion="firestore/querySnapshot/1.0",Wi._jsonSchema={type:Be("string",Wi._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};(function(e,n=!0){Mg(zl),Gs(new Hs("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new N_(new $g(r.getProvider("auth-internal")),new Gg(a,r.getProvider("app-check-internal")),cy(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),pr(sp,ip,e),pr(sp,ip,"esm2020")})();const A_={apiKey:""},k_=A_.apiKey;function T_(){return k_}const I7=F.createContext(void 0);function P_({children:t}){const[e,n]=F.useState(null),[r,s]=F.useState(!0);F.useEffect(()=>{{s(!1);return}},[]);const i=async()=>{{alert("Firebase 未配置，无法登录。请在 .env 中填写 Firebase 配置。");return}},a=async()=>{};return u.jsx(I7.Provider,{value:{user:e,isLoading:r,isFirebaseEnabled:T_(),signIn:i,signOutUser:a},children:t})}function R7(){const t=F.useContext(I7);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t}const I_="modulepreload",R_=function(t){return"/python-web-try/"+t},ap={},fn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=R_(c),c in ap)return;ap[c]=!0;const d=c.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":I_,d||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),d)return new Promise((_,L)=>{g.addEventListener("load",_),g.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};var O_=Object.defineProperty,de=(t,e)=>O_(t,"name",{value:e,configurable:!0}),O7=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});function L7(t){return!isNaN(parseFloat(t))&&isFinite(t)}de(L7,"_isNumber");function wr(t){return t.charAt(0).toUpperCase()+t.substring(1)}de(wr,"_capitalize");function ql(t){return function(){return this[t]}}de(ql,"_getter");var cs=["isConstructor","isEval","isNative","isToplevel"],hs=["columnNumber","lineNumber"],ds=["fileName","functionName","source"],L_=["args"],j_=["evalOrigin"],vo=cs.concat(hs,ds,L_,j_);function Lt(t){if(t)for(var e=0;e<vo.length;e++)t[vo[e]]!==void 0&&this["set"+wr(vo[e])](t[vo[e]])}de(Lt,"StackFrame");Lt.prototype={getArgs:function(){return this.args},setArgs:function(t){if(Object.prototype.toString.call(t)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=t},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(t){if(t instanceof Lt)this.evalOrigin=t;else if(t instanceof Object)this.evalOrigin=new Lt(t);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var t=this.getFileName()||"",e=this.getLineNumber()||"",n=this.getColumnNumber()||"",r=this.getFunctionName()||"";return this.getIsEval()?t?"[eval] ("+t+":"+e+":"+n+")":"[eval]:"+e+":"+n:r?r+" ("+t+":"+e+":"+n+")":t+":"+e+":"+n}};Lt.fromString=de(function(t){var e=t.indexOf("("),n=t.lastIndexOf(")"),r=t.substring(0,e),s=t.substring(e+1,n).split(","),i=t.substring(n+1);if(i.indexOf("@")===0)var a=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i,""),l=a[1],c=a[2],d=a[3];return new Lt({functionName:r,args:s||void 0,fileName:l,lineNumber:c||void 0,columnNumber:d||void 0})},"StackFrame$$fromString");for(Ir=0;Ir<cs.length;Ir++)Lt.prototype["get"+wr(cs[Ir])]=ql(cs[Ir]),Lt.prototype["set"+wr(cs[Ir])]=function(t){return function(e){this[t]=!!e}}(cs[Ir]);var Ir;for(Rr=0;Rr<hs.length;Rr++)Lt.prototype["get"+wr(hs[Rr])]=ql(hs[Rr]),Lt.prototype["set"+wr(hs[Rr])]=function(t){return function(e){if(!L7(e))throw new TypeError(t+" must be a Number");this[t]=Number(e)}}(hs[Rr]);var Rr;for(Or=0;Or<ds.length;Or++)Lt.prototype["get"+wr(ds[Or])]=ql(ds[Or]),Lt.prototype["set"+wr(ds[Or])]=function(t){return function(e){this[t]=String(e)}}(ds[Or]);var Or,nu=Lt;function j7(){var t=/^\s*at .*(\S+:\d+|\(native\))/m,e=/^(eval@)?(\[native code])?$/;return{parse:de(function(n){if(n.stack&&n.stack.match(t))return this.parseV8OrIE(n);if(n.stack)return this.parseFFOrSafari(n);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:de(function(n){if(n.indexOf(":")===-1)return[n];var r=/(.+?)(?::(\d+))?(?::(\d+))?$/,s=r.exec(n.replace(/[()]/g,""));return[s[1],s[2]||void 0,s[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:de(function(n){var r=n.stack.split(`
`).filter(function(s){return!!s.match(t)},this);return r.map(function(s){s.indexOf("(eval ")>-1&&(s=s.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var i=s.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),a=i.match(/ (\(.+\)$)/);i=a?i.replace(a[0],""):i;var l=this.extractLocation(a?a[1]:i),c=a&&i||void 0,d=["eval","<anonymous>"].indexOf(l[0])>-1?void 0:l[0];return new nu({functionName:c,fileName:d,lineNumber:l[1],columnNumber:l[2],source:s})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:de(function(n){var r=n.stack.split(`
`).filter(function(s){return!s.match(e)},this);return r.map(function(s){if(s.indexOf(" > eval")>-1&&(s=s.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),s.indexOf("@")===-1&&s.indexOf(":")===-1)return new nu({functionName:s});var i=/((.*".+"[^@]*)?[^@]*)(?:@)/,a=s.match(i),l=a&&a[1]?a[1]:void 0,c=this.extractLocation(s.replace(i,""));return new nu({functionName:l,fileName:c[0],lineNumber:c[1],columnNumber:c[2],source:s})},this)},"ErrorStackParser$$parseFFOrSafari")}}de(j7,"ErrorStackParser");var D_=new j7,b_=D_,Sn=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,D7=Sn&&typeof gc<"u"&&typeof gc.exports<"u"&&typeof O7<"u"&&typeof __dirname<"u",V_=Sn&&!D7,M_=typeof Deno<"u",b7=!Sn&&!M_,F_=b7&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",U_=b7&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var V7,fc,M7,op,Dh;async function bh(){if(!Sn||(V7=(await fn(async()=>{const{default:i}=await import("./__vite-browser-external-BIHI7g3E.js");return{default:i}},[])).default,op=await fn(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),Dh=await fn(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),M7=(await fn(async()=>{const{default:i}=await import("./__vite-browser-external-BIHI7g3E.js");return{default:i}},[])).default,fc=await fn(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),Vh=fc.sep,typeof O7<"u"))return;let t=op,e=await fn(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),n=await fn(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),r=await fn(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),s={fs:t,crypto:e,ws:n,child_process:r};globalThis.require=function(i){return s[i]}}de(bh,"initNodeModules");function F7(t,e){return fc.resolve(e||".",t)}de(F7,"node_resolvePath");function U7(t,e){return e===void 0&&(e=location),new URL(t,e).toString()}de(U7,"browser_resolvePath");var pc;Sn?pc=F7:pc=U7;var Vh;Sn||(Vh="/");function B7(t,e){return t.startsWith("file://")&&(t=t.slice(7)),t.includes("://")?{response:fetch(t)}:{binary:Dh.readFile(t).then(n=>new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}}de(B7,"node_getBinaryResponse");function $7(t,e){let n=new URL(t,location);return{response:fetch(n,e?{integrity:e}:{})}}de($7,"browser_getBinaryResponse");var Nl;Sn?Nl=B7:Nl=$7;async function z7(t,e){let{response:n,binary:r}=Nl(t,e);if(r)return r;let s=await n;if(!s.ok)throw new Error(`Failed to load '${t}': request failed.`);return new Uint8Array(await s.arrayBuffer())}de(z7,"loadBinaryFile");var Do;if(F_)Do=de(async t=>await import(t),"loadScript");else if(U_)Do=de(async t=>{try{globalThis.importScripts(t)}catch(e){if(e instanceof TypeError)await import(t);else throw e}},"loadScript");else if(Sn)Do=H7;else throw new Error("Cannot determine runtime environment");async function H7(t){t.startsWith("file://")&&(t=t.slice(7)),t.includes("://")?M7.runInThisContext(await(await fetch(t)).text()):await import(V7.pathToFileURL(t).href)}de(H7,"nodeLoadScript");async function G7(t){if(Sn){await bh();let e=await Dh.readFile(t,{encoding:"utf8"});return JSON.parse(e)}else return await(await fetch(t)).json()}de(G7,"loadLockFile");async function W7(){if(D7)return __dirname;let t;try{throw new Error}catch(r){t=r}let e=b_.parse(t)[0].fileName;if(Sn&&!e.startsWith("file://")&&(e=`file://${e}`),V_){let r=await fn(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);return(await fn(async()=>{const{fileURLToPath:s}=await import("./__vite-browser-external-BIHI7g3E.js");return{fileURLToPath:s}},[])).fileURLToPath(r.dirname(e))}let n=e.lastIndexOf(Vh);if(n===-1)throw new Error("Could not extract indexURL path from pyodide module location");return e.slice(0,n)}de(W7,"calculateDirname");function Y7(t){let e=t.FS,n=t.FS.filesystems.MEMFS,r=t.PATH,s={DIR_MODE:16895,FILE_MODE:33279,mount:function(i){if(!i.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return n.mount.apply(null,arguments)},syncfs:async(i,a,l)=>{try{let c=s.getLocalSet(i),d=await s.getRemoteSet(i),m=a?d:c,g=a?c:d;await s.reconcile(i,m,g),l(null)}catch(c){l(c)}},getLocalSet:i=>{let a=Object.create(null);function l(m){return m!=="."&&m!==".."}de(l,"isRealDir");function c(m){return g=>r.join2(m,g)}de(c,"toAbsolute");let d=e.readdir(i.mountpoint).filter(l).map(c(i.mountpoint));for(;d.length;){let m=d.pop(),g=e.stat(m);e.isDir(g.mode)&&d.push.apply(d,e.readdir(m).filter(l).map(c(m))),a[m]={timestamp:g.mtime,mode:g.mode}}return{type:"local",entries:a}},getRemoteSet:async i=>{let a=Object.create(null),l=await B_(i.opts.fileSystemHandle);for(let[c,d]of l)c!=="."&&(a[r.join2(i.mountpoint,c)]={timestamp:d.kind==="file"?(await d.getFile()).lastModifiedDate:new Date,mode:d.kind==="file"?s.FILE_MODE:s.DIR_MODE});return{type:"remote",entries:a,handles:l}},loadLocalEntry:i=>{let a=e.lookupPath(i).node,l=e.stat(i);if(e.isDir(l.mode))return{timestamp:l.mtime,mode:l.mode};if(e.isFile(l.mode))return a.contents=n.getFileDataAsTypedArray(a),{timestamp:l.mtime,mode:l.mode,contents:a.contents};throw new Error("node type not supported")},storeLocalEntry:(i,a)=>{if(e.isDir(a.mode))e.mkdirTree(i,a.mode);else if(e.isFile(a.mode))e.writeFile(i,a.contents,{canOwn:!0});else throw new Error("node type not supported");e.chmod(i,a.mode),e.utime(i,a.timestamp,a.timestamp)},removeLocalEntry:i=>{var a=e.stat(i);e.isDir(a.mode)?e.rmdir(i):e.isFile(a.mode)&&e.unlink(i)},loadRemoteEntry:async i=>{if(i.kind==="file"){let a=await i.getFile();return{contents:new Uint8Array(await a.arrayBuffer()),mode:s.FILE_MODE,timestamp:a.lastModifiedDate}}else{if(i.kind==="directory")return{mode:s.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+i.kind)}},storeRemoteEntry:async(i,a,l)=>{let c=i.get(r.dirname(a)),d=e.isFile(l.mode)?await c.getFileHandle(r.basename(a),{create:!0}):await c.getDirectoryHandle(r.basename(a),{create:!0});if(d.kind==="file"){let m=await d.createWritable();await m.write(l.contents),await m.close()}i.set(a,d)},removeRemoteEntry:async(i,a)=>{await i.get(r.dirname(a)).removeEntry(r.basename(a)),i.delete(a)},reconcile:async(i,a,l)=>{let c=0,d=[];Object.keys(a.entries).forEach(function(_){let L=a.entries[_],I=l.entries[_];(!I||e.isFile(L.mode)&&L.timestamp.getTime()>I.timestamp.getTime())&&(d.push(_),c++)}),d.sort();let m=[];if(Object.keys(l.entries).forEach(function(_){a.entries[_]||(m.push(_),c++)}),m.sort().reverse(),!c)return;let g=a.type==="remote"?a.handles:l.handles;for(let _ of d){let L=r.normalize(_.replace(i.mountpoint,"/")).substring(1);if(l.type==="local"){let I=g.get(L),T=await s.loadRemoteEntry(I);s.storeLocalEntry(_,T)}else{let I=s.loadLocalEntry(_);await s.storeRemoteEntry(g,L,I)}}for(let _ of m)if(l.type==="local")s.removeLocalEntry(_);else{let L=r.normalize(_.replace(i.mountpoint,"/")).substring(1);await s.removeRemoteEntry(g,L)}}};t.FS.filesystems.NATIVEFS_ASYNC=s}de(Y7,"initializeNativeFS");var B_=de(async t=>{let e=[];async function n(s){for await(let i of s.values())e.push(i),i.kind==="directory"&&await n(i)}de(n,"collect"),await n(t);let r=new Map;r.set(".",t);for(let s of e){let i=(await t.resolve(s)).join("/");r.set(i,s)}return r},"getFsHandles");function q7(t){let e={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Z7(t),quit(n,r){throw e.exited={status:n,toThrow:r},r},print:t.stdout,printErr:t.stderr,arguments:t.args,API:{config:t},locateFile:n=>t.indexURL+n,instantiateWasm:e4(t.indexURL)};return e}de(q7,"createSettings");function X7(t){return function(e){let n="/";try{e.FS.mkdirTree(t)}catch(r){console.error(`Error occurred while making a home directory '${t}':`),console.error(r),console.error(`Using '${n}' for a home directory instead`),t=n}e.FS.chdir(t)}}de(X7,"createHomeDirectory");function K7(t){return function(e){Object.assign(e.ENV,t)}}de(K7,"setEnvironment");function Q7(t){return e=>{for(let n of t)e.FS.mkdirTree(n),e.FS.mount(e.FS.filesystems.NODEFS,{root:n},n)}}de(Q7,"mountLocalDirectories");function J7(t){let e=z7(t);return n=>{let r=n._py_version_major(),s=n._py_version_minor();n.FS.mkdirTree("/lib"),n.FS.mkdirTree(`/lib/python${r}.${s}/site-packages`),n.addRunDependency("install-stdlib"),e.then(i=>{n.FS.writeFile(`/lib/python${r}${s}.zip`,i)}).catch(i=>{console.error("Error occurred while installing the standard library:"),console.error(i)}).finally(()=>{n.removeRunDependency("install-stdlib")})}}de(J7,"installStdlib");function Z7(t){let e;return t.stdLibURL!=null?e=t.stdLibURL:e=t.indexURL+"python_stdlib.zip",[J7(e),X7(t.env.HOME),K7(t.env),Q7(t._node_mounts),Y7]}de(Z7,"getFileSystemInitializationFuncs");function e4(t){let{binary:e,response:n}=Nl(t+"pyodide.asm.wasm");return function(r,s){return async function(){try{let i;n?i=await WebAssembly.instantiateStreaming(n,r):i=await WebAssembly.instantiate(await e,r);let{instance:a,module:l}=i;typeof WasmOffsetConverter<"u"&&(wasmOffsetConverter=new WasmOffsetConverter(wasmBinary,l)),s(a,l)}catch(i){console.warn("wasm instantiation failed!"),console.warn(i)}}(),{}}}de(e4,"getInstantiateWasmFunc");var lp="0.26.4";async function t4(t={}){var e,n;await bh();let r=t.indexURL||await W7();r=pc(r),r.endsWith("/")||(r+="/"),t.indexURL=r;let s={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:r+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:r,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0},i=Object.assign(s,t);(e=i.env).HOME??(e.HOME="/home/pyodide"),(n=i.env).PYTHONINSPECT??(n.PYTHONINSPECT="1");let a=q7(i),l=a.API;if(l.lockFilePromise=G7(i.lockFileURL),typeof _createPyodideModule!="function"){let _=`${i.indexURL}pyodide.asm.js`;await Do(_)}let c;if(t._loadSnapshot){let _=await t._loadSnapshot;ArrayBuffer.isView(_)?c=_:c=new Uint8Array(_),a.noInitialRun=!0,a.INITIAL_MEMORY=c.length}let d=await _createPyodideModule(a);if(a.exited)throw a.exited.toThrow;if(t.pyproxyToStringRepr&&l.setPyProxyToStringMethod(!0),l.version!==lp&&i.checkAPIVersion)throw new Error(`Pyodide version does not match: '${lp}' <==> '${l.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);d.locateFile=_=>{throw new Error("Didn't expect to load any more file_packager files!")};let m;c&&(m=l.restoreSnapshot(c));let g=l.finalizeBootstrap(m);return l.sys.path.insert(0,l.config.env.HOME),g.version.includes("dev")||l.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${g.version}/full/`),l._pyodide.set_excepthook(),await l.packageIndexReady,l.initializeStreams(i.stdin,i.stdout,i.stderr),g}de(t4,"loadPyodide");const n4=F.createContext(void 0),$_={pyodide:null,isLoading:!1,error:null,runCode:async()=>({output:"",error:"Python 环境未初始化"}),runCodeWithTests:async()=>({output:"",error:"Python 环境未初始化",passed:!1,testResults:[]}),retryLoad:()=>{}};function z_({children:t}){const[e,n]=F.useState(null),[r,s]=F.useState(!1),[i,a]=F.useState(null),l=F.useRef(!1),c=F.useCallback(async()=>{if(!l.current){l.current=!0,s(!0),a(null);try{await new Promise(L=>setTimeout(L,100));const _=await t4({indexURL:"/python-web-try/pyodide/"});await _.runPythonAsync(`
import sys
import io
import traceback
`),n(_)}catch(_){console.warn("Pyodide load failed (non-fatal):",_),a(_ instanceof Error?_.message:"加载Python运行环境失败"),l.current=!1}finally{s(!1)}}},[]);F.useEffect(()=>{const _=setTimeout(()=>{c().catch(()=>{})},500);return()=>clearTimeout(_)},[c]);const d=F.useCallback(()=>{l.current=!1,n(null),a(null),c().catch(()=>{})},[c]),m=F.useCallback(async _=>{if(!e)return{output:"",error:"Python 环境尚未就绪，请稍后再试"};try{e.runPython(`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
`),await e.runPythonAsync(_);const L=e.runPython("_output_buffer.getvalue()");return e.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`),{output:L||"代码执行完成，无输出",error:null}}catch(L){let I="";try{const T=e.runPython("_output_buffer.getvalue()");T&&(I=T+`
`)}catch{}L.message?I+=L.message:typeof L=="string"?I+=L:I+="未知错误";try{e.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)}catch{}return{output:"",error:I}}},[e]),g=F.useCallback(async(_,L)=>{if(!e)return{output:"",error:"Python 环境尚未就绪",passed:!1,testResults:[]};const I=[];let T=!0,k="";try{e.runPython(`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
`),await e.runPythonAsync(_),k=e.runPython("_output_buffer.getvalue()"),e.runPython(`
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer

_test_results = []
`),await e.runPythonAsync(L);const x=e.runPython(`
import json
json.dumps(_test_results)
`),O=JSON.parse(x);I.push(...O),T=O.every($=>$.passed);const M=e.runPython("_output_buffer.getvalue()");return M&&(k+=`
--- 测试输出 ---
`+M),e.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`),{output:k||"代码执行完成，无输出",error:null,passed:T,testResults:I}}catch(C){let x="";try{const O=e.runPython("_output_buffer.getvalue()");O&&(x=O+`
`)}catch{}C.message?x+=C.message:typeof C=="string"?x+=C:x+="未知错误";try{e.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)}catch{}return{output:k,error:x,passed:!1,testResults:[]}}},[e]);return u.jsx(n4.Provider,{value:{pyodide:e,isLoading:r,error:i,runCode:m,runCodeWithTests:g,retryLoad:d},children:t})}function r4(){const t=F.useContext(n4);return t===void 0?(console.warn("usePyodide called outside PyodideProvider, using default"),$_):t}const Vr=[{id:"first-step",title:"初出茅庐",description:"完成第一个学习步骤",icon:"🌱",category:"learning",rarity:"common",xpReward:20,condition:t=>t.completedLessons>=1,progress:t=>({current:Math.min(t.completedLessons,1),total:1})},{id:"lesson-10",title:"勤学不辍",description:"完成 10 个学习步骤",icon:"📚",category:"learning",rarity:"common",xpReward:50,condition:t=>t.completedLessons>=10,progress:t=>({current:Math.min(t.completedLessons,10),total:10})},{id:"lesson-50",title:"学富五车",description:"完成 50 个学习步骤",icon:"🎓",category:"learning",rarity:"rare",xpReward:200,condition:t=>t.completedLessons>=50,progress:t=>({current:Math.min(t.completedLessons,50),total:50})},{id:"first-challenge",title:"初战告捷",description:"完成第一个编程挑战",icon:"🎯",category:"challenge",rarity:"common",xpReward:30,condition:t=>t.completedChallenges>=1,progress:t=>({current:Math.min(t.completedChallenges,1),total:1})},{id:"challenge-5",title:"小试牛刀",description:"完成 5 个编程挑战",icon:"⚔️",category:"challenge",rarity:"common",xpReward:80,condition:t=>t.completedChallenges>=5,progress:t=>({current:Math.min(t.completedChallenges,5),total:5})},{id:"challenge-15",title:"身经百战",description:"完成 15 个编程挑战",icon:"🛡️",category:"challenge",rarity:"rare",xpReward:200,condition:t=>t.completedChallenges>=15,progress:t=>({current:Math.min(t.completedChallenges,15),total:15})},{id:"level-1",title:"初窥门径",description:"完成第 1 个关卡",icon:"🚪",category:"mastery",rarity:"common",xpReward:50,condition:t=>t.completedLevels>=1,progress:t=>({current:Math.min(t.completedLevels,1),total:1})},{id:"level-half",title:"半程英雄",description:"完成 50% 的关卡",icon:"⭐",category:"mastery",rarity:"rare",xpReward:300,condition:t=>t.completedLevels>=Math.ceil(t.totalLevels/2),progress:t=>({current:Math.min(t.completedLevels,Math.ceil(t.totalLevels/2)),total:Math.ceil(t.totalLevels/2)})},{id:"level-all",title:"登峰造极",description:"完成所有关卡",icon:"👑",category:"mastery",rarity:"legendary",xpReward:1e3,condition:t=>t.completedLevels>=t.totalLevels&&t.totalLevels>0,progress:t=>({current:Math.min(t.completedLevels,t.totalLevels),total:t.totalLevels})},{id:"xp-100",title:"小有所成",description:"累计获得 100 XP",icon:"💫",category:"learning",rarity:"common",xpReward:30,condition:t=>t.totalXP>=100,progress:t=>({current:Math.min(t.totalXP,100),total:100})},{id:"xp-500",title:"中流砥柱",description:"累计获得 500 XP",icon:"✨",category:"learning",rarity:"rare",xpReward:100,condition:t=>t.totalXP>=500,progress:t=>({current:Math.min(t.totalXP,500),total:500})},{id:"xp-1000",title:"登堂入室",description:"累计获得 1000 XP",icon:"🌟",category:"learning",rarity:"epic",xpReward:250,condition:t=>t.totalXP>=1e3,progress:t=>({current:Math.min(t.totalXP,1e3),total:1e3})},{id:"streak-3",title:"坚持不懈",description:"连续学习 3 天",icon:"🔥",category:"streak",rarity:"common",xpReward:50,condition:t=>t.streak>=3,progress:t=>({current:Math.min(t.streak,3),total:3})},{id:"streak-7",title:"周周向上",description:"连续学习 7 天",icon:"🔥",category:"streak",rarity:"rare",xpReward:150,condition:t=>t.streak>=7,progress:t=>({current:Math.min(t.streak,7),total:7})},{id:"streak-30",title:"持之以恒",description:"连续学习 30 天",icon:"🌋",category:"streak",rarity:"epic",xpReward:500,condition:t=>t.streak>=30,progress:t=>({current:Math.min(t.streak,30),total:30})},{id:"all-rounder",title:"全能选手",description:"同时拥有 5 个成就",icon:"🏆",category:"special",rarity:"epic",xpReward:300,condition:t=>t.completedLessons>=5&&t.completedChallenges>=5&&t.completedLevels>=1},{id:"first-day",title:"启航",description:"欢迎来到 Python Quest",icon:"🎉",category:"special",rarity:"common",xpReward:10,condition:()=>!0}],ru=[{id:"all",label:"全部",icon:"🏆"},{id:"learning",label:"学习",icon:"📚"},{id:"challenge",label:"挑战",icon:"⚔️"},{id:"mastery",label:"精通",icon:"👑"},{id:"streak",label:"连续",icon:"🔥"},{id:"special",label:"特殊",icon:"✨"}],up={common:{label:"普通",color:"#94a3b8",bg:"rgba(148, 163, 184, 0.15)"},rare:{label:"稀有",color:"#3b82f6",bg:"rgba(59, 130, 246, 0.15)"},epic:{label:"史诗",color:"#a855f7",bg:"rgba(168, 85, 247, 0.15)"},legendary:{label:"传说",color:"#f59e0b",bg:"rgba(245, 158, 11, 0.15)"}},H_=[{rank:1,name:"PythonMaster",avatar:"PM",xp:2850,streak:45,levels:9,color:"#f59e0b"},{rank:2,name:"CodeWizard",avatar:"CW",xp:2340,streak:32,levels:8,color:"#a855f7"},{rank:3,name:"DataDragon",avatar:"DD",xp:1980,streak:28,levels:8,color:"#3b82f6"},{rank:4,name:"LoopLegend",avatar:"LL",xp:1650,streak:21,levels:7,color:"#10b981"},{rank:5,name:"FunctionFox",avatar:"FF",xp:1320,streak:18,levels:6,color:"#ec4899"},{rank:6,name:"SyntaxSage",avatar:"SS",xp:1080,streak:15,levels:5,color:"#06b6d4"},{rank:7,name:"BinaryBard",avatar:"BB",xp:920,streak:12,levels:4,color:"#84cc16"},{rank:8,name:"RecursionR",avatar:"RR",xp:760,streak:10,levels:3,color:"#f97316"},{rank:9,name:"TupleTitan",avatar:"TT",xp:540,streak:8,levels:2,color:"#8b5cf6"},{rank:10,name:"StringSlayer",avatar:"ST",xp:320,streak:5,levels:1,color:"#ef4444"}],us="python-quest-progress",su="v3-cloud",cp=()=>new Date().toISOString().slice(0,10),hp={xp:50,totalXP:500,streak:7,studyDays:[cp()],lastStudyDate:cp(),levels:{1:{unlocked:!0,completed:!1,lessons:{},challenges:{}},2:{unlocked:!0,completed:!1,lessons:{},challenges:{}},3:{unlocked:!0,completed:!1,lessons:{},challenges:{}},4:{unlocked:!0,completed:!1,lessons:{},challenges:{}},5:{unlocked:!0,completed:!1,lessons:{},challenges:{}},6:{unlocked:!0,completed:!1,lessons:{},challenges:{}},7:{unlocked:!0,completed:!1,lessons:{},challenges:{}},8:{unlocked:!0,completed:!1,lessons:{},challenges:{}},9:{unlocked:!0,completed:!1,lessons:{},challenges:{}}},unlockedAchievements:["first-day"],claimedAchievements:[],activityLog:[{id:"welcome",type:"achievement",title:"欢迎来到 Python Quest",description:"开始你的编程冒险之旅",xp:10,timestamp:new Date().toISOString(),icon:"🎉"}]},s4=F.createContext(void 0);function dp(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function G_({children:t}){const{user:e,isLoading:n}=R7(),[r,s]=F.useState("idle"),[i,a]=F.useState(()=>{try{const y=localStorage.getItem(us),R=localStorage.getItem(us+"-version");if(y&&R===su)return JSON.parse(y);localStorage.setItem(us+"-version",su)}catch{}return{...hp}}),l=F.useRef(!1);F.useEffect(()=>{if(!n){s("idle");return}},[e,n]),F.useEffect(()=>{e||(l.current=!1,s("idle"))},[e]),F.useEffect(()=>{try{localStorage.setItem(us,JSON.stringify(i))}catch{}},[i,e,r]);const c=F.useCallback(y=>{const R=Object.values(y.levels).reduce((G,J)=>G+Object.values(J.lessons).filter(re=>re.completed).length,0),N=Object.values(y.levels).reduce((G,J)=>G+Object.values(J.challenges).filter(re=>re.completed).length,0),K=Object.values(y.levels).filter(G=>G.completed).length,ne=Object.keys(y.levels).length,ve={totalXP:y.totalXP,streak:y.streak,completedLevels:K,completedLessons:R,completedChallenges:N,perfectChallenges:N,totalLevels:ne},Te=[];for(const G of Vr)y.unlockedAchievements.includes(G.id)||G.condition(ve)&&Te.push(G.id);return Te.length>0?{...y,unlockedAchievements:[...y.unlockedAchievements,...Te]}:y},[]),d=F.useCallback((y,R)=>{var N,K;return((K=(N=i.levels[y])==null?void 0:N.lessons[R])==null?void 0:K.completed)||!1},[i]),m=F.useCallback((y,R)=>{var N,K;return((K=(N=i.levels[y])==null?void 0:N.challenges[R])==null?void 0:K.completed)||!1},[i]),g=F.useCallback(y=>{var R;return((R=i.levels[y])==null?void 0:R.unlocked)||!1},[i]),_=F.useCallback(y=>{var R;return((R=i.levels[y])==null?void 0:R.completed)||!1},[i]),L=F.useCallback(y=>i.unlockedAchievements.includes(y),[i]),I=F.useCallback(y=>i.claimedAchievements.includes(y),[i]),T=F.useCallback((y,R,N)=>{a(K=>{const ne=K.levels[y]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},ve=ne.lessons[R]||{completed:!1};if(ve.completed)return K;const Te={...ne.lessons,[R]:{...ve,completed:!0,lastCode:N||ve.lastCode,completedAt:new Date().toISOString()}};let G={...K,levels:{...K.levels,[y]:{...ne,lessons:Te}}};return G=c(G),G})},[c]),k=F.useCallback((y,R,N=10,K)=>{a(ne=>{const ve=ne.levels[y]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},Te=ve.challenges[R]||{completed:!1,attempts:0},G=Te.completed,J={...ve.challenges,[R]:{...Te,completed:!0,lastCode:K||Te.lastCode,completedAt:new Date().toISOString(),attempts:Te.attempts+1}},re=Object.values(J).every(Je=>Je.completed),xe=Object.values(ve.lessons).every(Je=>Je.completed),Ne=re&&xe,Kt=y+1,dt={...ne.levels,[y]:{...ve,challenges:J,completed:Ne}};Ne&&ne.levels[Kt]&&(dt[Kt]={...ne.levels[Kt],unlocked:!0});let wt={...ne,xp:G?ne.xp:ne.xp+N,totalXP:G?ne.totalXP:ne.totalXP+N,levels:dt};if(Ne){const Je={id:dp(),type:"level",title:`完成第 ${y} 关`,description:"解锁下一关卡",timestamp:new Date().toISOString(),icon:"🎊"};wt={...wt,activityLog:[Je,...wt.activityLog].slice(0,100)}}return wt=c(wt),wt})},[c]),C=F.useCallback(y=>{a(R=>{if(!R.unlockedAchievements.includes(y)||R.claimedAchievements.includes(y))return R;const N=Vr.find(ne=>ne.id===y);if(!N)return R;const K={id:dp(),type:"achievement",title:`解锁成就：${N.title}`,description:N.description,xp:N.xpReward,timestamp:new Date().toISOString(),icon:N.icon};return{...R,xp:R.xp+N.xpReward,totalXP:R.totalXP+N.xpReward,claimedAchievements:[...R.claimedAchievements,y],activityLog:[K,...R.activityLog].slice(0,100)}})},[]),x=F.useCallback((y,R)=>{var N,K;return(K=(N=i.levels[y])==null?void 0:N.lessons[R])==null?void 0:K.lastCode},[i]),O=F.useCallback((y,R)=>{var N,K;return(K=(N=i.levels[y])==null?void 0:N.challenges[R])==null?void 0:K.lastCode},[i]),M=F.useCallback((y,R,N)=>{a(K=>{const ne=K.levels[y]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},ve=ne.lessons[R]||{completed:!1};return{...K,levels:{...K.levels,[y]:{...ne,lessons:{...ne.lessons,[R]:{...ve,lastCode:N}}}}}})},[]),$=F.useCallback((y,R,N)=>{a(K=>{const ne=K.levels[y]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},ve=ne.challenges[R]||{completed:!1,attempts:0};return{...K,levels:{...K.levels,[y]:{...ne,challenges:{...ne.challenges,[R]:{...ve,lastCode:N}}}}}})},[]),Y=F.useCallback(y=>{const R=i.levels[y];if(!R)return{completed:0,total:0,percent:0};const N=Object.values(R.lessons),K=Object.values(R.challenges),ne=N.filter(Te=>Te.completed).length+K.filter(Te=>Te.completed).length,ve=N.length+K.length;return{completed:ne,total:ve,percent:ve>0?Math.round(ne/ve*100):0}},[i]),A=F.useCallback(()=>{let y=0,R=0;for(const N of Object.values(i.levels))y+=Object.keys(N.lessons).length+Object.keys(N.challenges).length,R+=Object.values(N.lessons).filter(K=>K.completed).length,R+=Object.values(N.challenges).filter(K=>K.completed).length;return{completed:R,total:y,percent:y>0?Math.round(R/y*100):0}},[i]),w=F.useCallback((y=10)=>i.activityLog.slice(0,y),[i]),S=F.useCallback(()=>{a({...hp});try{localStorage.removeItem(us),localStorage.setItem(us+"-version",su)}catch{}},[]),P=F.useMemo(()=>{const y=Object.values(i.levels).reduce((ne,ve)=>ne+Object.values(ve.lessons).filter(Te=>Te.completed).length,0),R=Object.values(i.levels).reduce((ne,ve)=>ne+Object.values(ve.challenges).filter(Te=>Te.completed).length,0),N=Object.values(i.levels).filter(ne=>ne.completed).length,K=Object.keys(i.levels).length;return{totalXP:i.totalXP,streak:i.streak,completedLevels:N,completedLessons:y,completedChallenges:R,perfectChallenges:R,totalLevels:K}},[i]);return u.jsx(s4.Provider,{value:{progress:i,stats:P,syncStatus:r,isLessonCompleted:d,isChallengeCompleted:m,isLevelUnlocked:g,isLevelCompleted:_,isAchievementUnlocked:L,isAchievementClaimed:I,completeLesson:T,completeChallenge:k,claimAchievement:C,getLessonCode:x,getChallengeCode:O,saveLessonCode:M,saveChallengeCode:$,getLevelProgress:Y,getOverallProgress:A,getRecentActivities:w,resetProgress:S},children:t})}function ei(){const t=F.useContext(s4);if(t===void 0)throw new Error("useProgress must be used within a ProgressProvider");return t}function W_({showUserInfo:t}){var g,_;const e=Ia(),{progress:n,syncStatus:r}=ei(),{user:s,signIn:i,signOutUser:a}=R7(),l=e.pathname==="/",c=t!==void 0?t:!l,d=((g=s==null?void 0:s.displayName)==null?void 0:g.slice(0,2).toUpperCase())||((_=s==null?void 0:s.email)==null?void 0:_.slice(0,2).toUpperCase())||"LY",m=()=>s?r==="loading"?u.jsx("span",{className:"sync-badge loading",children:"同步中..."}):r==="synced"?u.jsx("span",{className:"sync-badge synced",children:"☁️ 已同步"}):r==="error"?u.jsx("span",{className:"sync-badge error",children:"同步失败"}):null:u.jsx("span",{className:"sync-badge local",children:"本地保存"});return u.jsx("nav",{className:`navbar ${l?"navbar-home":"navbar-inner"}`,children:u.jsxs("div",{className:"navbar-container container",children:[u.jsxs(mn,{to:"/",className:"navbar-logo",children:[u.jsx("div",{className:"logo-icon",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),u.jsx("span",{className:"logo-text",children:"Python Quest"})]}),u.jsxs("div",{className:"navbar-links",children:[u.jsx(mn,{to:"/",className:`nav-link ${e.pathname==="/"?"active":""}`,children:"首页"}),u.jsx(mn,{to:"/map",className:`nav-link ${e.pathname==="/map"?"active":""}`,children:"冒险地图"}),u.jsx(mn,{to:"/path",className:`nav-link ${e.pathname==="/path"?"active":""}`,children:"学习路径"}),u.jsx(mn,{to:"/achievements",className:`nav-link ${e.pathname==="/achievements"?"active":""}`,children:"成就"}),u.jsx(mn,{to:"/leaderboard",className:`nav-link ${e.pathname==="/leaderboard"?"active":""}`,children:"排行榜"})]}),u.jsxs("div",{className:"navbar-actions",children:[c&&u.jsxs("div",{className:"user-info",children:[u.jsxs("div",{className:"xp-badge",children:[u.jsx("span",{className:"xp-icon",children:"⭐"}),u.jsxs("span",{className:"xp-text",children:[n.xp," / ",n.totalXP," XP"]})]}),u.jsxs("div",{className:"streak-badge",children:[u.jsx("span",{className:"streak-icon",children:"🔥"}),u.jsxs("span",{className:"streak-text",children:[n.streak,"天"]})]}),m(),s?u.jsx("div",{className:"avatar avatar-online",title:s.displayName||s.email||"已登录",children:s.photoURL?u.jsx("img",{src:s.photoURL,alt:d}):u.jsx("span",{children:d})}):u.jsx("div",{className:"avatar",children:u.jsx("span",{children:"LY"})})]}),s?u.jsx("button",{className:"btn btn-secondary btn-sm",onClick:a,children:"退出登录"}):u.jsxs("button",{className:"btn btn-primary btn-sm",onClick:i,children:[u.jsx("span",{className:"btn-icon",children:u.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor",children:u.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})}),"GitHub 登录"]})]})]})})}function Y_(){return u.jsxs("footer",{className:"footer",children:[u.jsxs("div",{className:"container footer-container",children:[u.jsxs("div",{className:"footer-brand",children:[u.jsxs(mn,{to:"/",className:"footer-logo",children:[u.jsx("div",{className:"logo-icon",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),u.jsx("span",{className:"logo-text",children:"Python Quest"})]}),u.jsx("p",{className:"footer-tagline",children:"通过游戏化学习，从零到英雄掌握Python编程"})]}),u.jsxs("div",{className:"footer-links",children:[u.jsxs("div",{className:"footer-column",children:[u.jsx("h4",{children:"关于我们"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"#",children:"课程介绍"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"团队成员"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"联系我们"})})]})]}),u.jsxs("div",{className:"footer-column",children:[u.jsx("h4",{children:"学习资源"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"#",children:"学习路径"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"文档中心"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"常见问题"})})]})]}),u.jsxs("div",{className:"footer-column",children:[u.jsx("h4",{children:"社区"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"#",children:"排行榜"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"讨论区"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"合作伙伴"})})]})]})]})]}),u.jsx("div",{className:"footer-bottom",children:u.jsx("div",{className:"container",children:u.jsx("p",{children:"© 2024 Python Quest. All rights reserved."})})})]})}function q_(){const t=[{value:"10",label:"大关卡"},{value:"52",label:"编程挑战"},{value:"156+",label:"学习者"},{value:"98%",label:"好评率"}];return u.jsxs("div",{className:"home-page",children:[u.jsxs("section",{className:"hero-section",children:[u.jsxs("div",{className:"hero-bg-decorations",children:[u.jsx("div",{className:"floating-element elem-1"}),u.jsx("div",{className:"floating-element elem-2"}),u.jsx("div",{className:"floating-element elem-3"}),u.jsx("div",{className:"code-symbol code-1",children:"</>"}),u.jsx("div",{className:"code-symbol code-2",children:"{ }"}),u.jsx("div",{className:"code-symbol code-3",children:"🐍"})]}),u.jsxs("div",{className:"container hero-content",children:[u.jsx("div",{className:"hero-badge animate-fade-in",children:u.jsx("span",{children:"🎮 游戏化学习"})}),u.jsx("h1",{className:"hero-title animate-fade-in delay-100",children:u.jsx("span",{className:"title-gradient",children:"Python Quest"})}),u.jsx("p",{className:"hero-subtitle animate-fade-in delay-200",children:"通过 9 大关卡、50+ 编程挑战，从零到英雄独立完成项目"}),u.jsxs("div",{className:"hero-actions animate-fade-in delay-300",children:[u.jsx(mn,{to:"/map",className:"btn btn-primary btn-lg",children:"开始冒险"}),u.jsxs("button",{className:"btn btn-secondary btn-lg",children:[u.jsx("span",{className:"btn-icon",children:"▶"}),"免费试学"]})]}),u.jsx("div",{className:"hero-stats animate-fade-in delay-400",children:t.map((e,n)=>u.jsxs("div",{className:"stat-item",children:[u.jsx("div",{className:"stat-value",children:e.value}),u.jsx("div",{className:"stat-label",children:e.label})]},n))})]})]}),u.jsx("section",{className:"features-section",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"section-title",children:"为什么选择 Python Quest？"}),u.jsx("p",{className:"section-subtitle",children:"游戏化学习，让编程变得有趣又高效"}),u.jsxs("div",{className:"features-grid",children:[u.jsxs("div",{className:"feature-card",children:[u.jsx("div",{className:"feature-icon",children:"🎯"}),u.jsx("h3",{children:"闯关式学习"}),u.jsx("p",{children:"9大精心设计的关卡，从基础到进阶，每一步都有明确的目标和成就感。"})]}),u.jsxs("div",{className:"feature-card",children:[u.jsx("div",{className:"feature-icon",children:"💻"}),u.jsx("h3",{children:"实战挑战"}),u.jsx("p",{children:"50+编程挑战，边学边练，在实践中真正掌握Python编程技能。"})]}),u.jsxs("div",{className:"feature-card",children:[u.jsx("div",{className:"feature-icon",children:"🏆"}),u.jsx("h3",{children:"成就系统"}),u.jsx("p",{children:"XP经验值、徽章、排行榜，在竞争中激发学习动力，不断进步。"})]}),u.jsxs("div",{className:"feature-card",children:[u.jsx("div",{className:"feature-icon",children:"📊"}),u.jsx("h3",{children:"进度追踪"}),u.jsx("p",{children:"可视化学习地图，清晰展示学习进度，让成长之路一目了然。"})]})]})]})}),u.jsx("section",{className:"cta-section",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"cta-card",children:[u.jsx("h2",{children:"准备好开始你的编程冒险了吗？"}),u.jsx("p",{children:"加入 Python Quest，从零开始，成为Python编程高手"}),u.jsx(mn,{to:"/map",className:"btn btn-primary btn-lg",children:"立即开始 →"})]})})})]})}const zr=[{id:1,title:"第1关：初见 Python",subtitle:"认识 Python 的世界",description:"了解Python的历史、特点和应用场景，安装开发环境，写出你的第一行代码。",status:"completed",difficulty:1,duration:"约1小时",lessons:5,challenges:3,topics:["Python简介","环境搭建","第一个程序","打印输出"],side:"left"},{id:2,title:"第2关：变量与数据类型",subtitle:"掌握数据的存储与运算",description:"学习变量、基本数据类型、运算符和类型转换，打下编程基础。",status:"completed",difficulty:1,duration:"约1.5小时",lessons:6,challenges:4,topics:["变量","数字类型","字符串","运算符","类型转换"],side:"right"},{id:3,title:"第3关：条件判断",subtitle:"让程序学会思考",description:"学习if-else条件语句、逻辑运算符和比较运算，让程序做出决策。",status:"completed",difficulty:2,duration:"约1.5小时",lessons:5,challenges:5,topics:["if语句","else和elif","比较运算","逻辑运算","嵌套条件"],side:"left"},{id:4,title:"第4关：循环结构",subtitle:"重复的力量",description:"掌握for循环、while循环、循环控制语句，以及循环的嵌套使用。",status:"current",difficulty:2,duration:"约2小时",lessons:7,challenges:6,topics:["for循环","range()函数","while循环","break与continue","循环嵌套"],side:"right"},{id:5,title:"第5关：列表与元组",subtitle:"数据的集合",description:"学习列表和元组的使用，掌握索引、切片、常用方法和列表推导式。",status:"locked",difficulty:2,duration:"约2小时",lessons:6,challenges:5,topics:["列表基础","列表操作","元组","切片","列表推导式"],side:"left"},{id:6,title:"第6关：字典与集合",subtitle:"键值的魔法",description:"深入学习字典和集合的使用，理解哈希表原理和应用场景。",status:"locked",difficulty:3,duration:"约2小时",lessons:6,challenges:5,topics:["字典基础","字典操作","集合","字典推导式","常用场景"],side:"right"},{id:7,title:"第7关：函数",subtitle:"代码的封装与复用",description:"学习函数的定义、参数、返回值、作用域，以及递归和高阶函数。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:8,challenges:7,topics:["函数定义","参数类型","返回值","作用域","递归","Lambda函数"],side:"left"},{id:8,title:"第8关：文件操作",subtitle:"与文件系统交互",description:"学习文件的读写、目录操作、异常处理，掌握数据持久化。",status:"locked",difficulty:3,duration:"约2小时",lessons:6,challenges:5,topics:["文件读写","上下文管理器","目录操作","异常处理","JSON处理"],side:"right"},{id:9,title:"第9关：项目实战",subtitle:"综合项目挑战",description:"运用所学知识，完成一个完整的Python项目，检验你的学习成果。",status:"locked",difficulty:4,duration:"约3小时",lessons:4,challenges:3,topics:["项目规划","模块化设计","测试调试","项目部署"],side:"left"}],iu=[{id:1,title:"for 循环基础",duration:"12分钟",completed:!0,type:"video"},{id:2,title:"range() 函数详解",duration:"15分钟",completed:!0,type:"video"},{id:3,title:"遍历列表与字典",duration:"18分钟",completed:!0,type:"video"},{id:4,title:"while 循环",duration:"14分钟",completed:!0,type:"video"},{id:5,title:"break 与 continue",duration:"16分钟",completed:!1,type:"video"},{id:6,title:"循环嵌套",duration:"20分钟",completed:!1,type:"video"},{id:7,title:"实战：打印九九乘法表",duration:"25分钟",completed:!1,type:"interactive"}],X_=[{id:1,title:"计算1到100的和",difficulty:"easy",completed:!0},{id:2,title:"打印三角形图案",difficulty:"easy",completed:!0},{id:3,title:"找出100以内的素数",difficulty:"medium",completed:!1},{id:4,title:"冒泡排序实现",difficulty:"medium",completed:!1},{id:5,title:"猜数字游戏",difficulty:"medium",completed:!1},{id:6,title:"斐波那契数列",difficulty:"hard",completed:!1}],i4={4:[{id:1,title:"什么是循环？",type:"explanation",content:`**循环**是编程中最强大的概念之一。它允许我们**重复执行一段代码**，而不需要复制粘贴。

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

祝你在 Python 的道路上越走越远！🚀`}]},Mh={4:[{id:1,title:"计算 1 到 100 的和",description:`编写一个程序，使用 for 循环计算 1 到 100 所有整数的和，并打印结果。

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
`,testCases:[{name:"加法",input:"10,+,5",expected:"15"},{name:"幂运算",input:"2,**,10",expected:"1024"}],xpReward:40}]};function K_(){const t=$l(),[e,n]=F.useState(zr[3]),{progress:r,isLevelUnlocked:s,isLevelCompleted:i,isChallengeCompleted:a}=ei(),l=F.useMemo(()=>zr.map(k=>{const C=s(k.id),x=i(k.id);let O="locked";return x?O="completed":C&&(O="current"),{...k,status:O}}),[s,i]),c=l.filter(k=>k.status==="completed").length,d=Math.round(c/zr.length*100),m=k=>Array(5).fill(0).map((C,x)=>u.jsx("span",{className:`star ${x<k?"filled":""}`,children:"★"},x)),g=l.find(k=>k.status==="current")||l.find(k=>k.status!=="locked")||l[0],_=g.id,L=Mh[_]||[],I=iu.filter(k=>k.completed).length,T=k=>{k.status!=="locked"&&(n(k),t(`/level/${k.id}`))};return u.jsxs("div",{className:"level-map-page",children:[u.jsxs("div",{className:"map-decoration",children:[u.jsx("div",{className:"deco-circle deco-1"}),u.jsx("div",{className:"deco-circle deco-2"}),u.jsx("div",{className:"deco-code",children:"</>"}),u.jsx("div",{className:"deco-code deco-code-2",children:"{ }"})]}),u.jsxs("div",{className:"container map-container",children:[u.jsxs("div",{className:"map-header",children:[u.jsxs("div",{className:"path-info",children:[u.jsxs("div",{className:"path-badge",children:[u.jsx("span",{className:"path-icon",children:"🐍"}),u.jsx("span",{children:"Python 进阶"})]}),u.jsx("h1",{className:"map-title",children:"冒险地图"}),u.jsxs("p",{className:"map-subtitle",children:["完成 ",c," 个关卡，共 ",zr.length," 关 · 解锁你的 Python 技能"]})]}),u.jsxs("div",{className:"progress-bar-section",children:[u.jsxs("div",{className:"progress-info",children:[u.jsx("span",{className:"progress-label",children:"学习进度"}),u.jsxs("span",{className:"progress-percent",children:[d,"%"]})]}),u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${d}%`}})})]})]}),u.jsx("div",{className:"level-map-wrapper",children:u.jsxs("div",{className:"level-map",children:[u.jsx("div",{className:"map-line"}),l.map((k,C)=>{var x;return u.jsxs("div",{className:`map-node node-${k.side} status-${k.status}`,style:{animationDelay:`${C*.1}s`},onClick:()=>T(k),children:[u.jsxs("div",{className:"node-dot",children:[k.status==="completed"&&u.jsx("span",{className:"dot-check",children:"✓"}),k.status==="current"&&u.jsx("div",{className:"dot-pulse"}),k.status==="locked"&&u.jsx("span",{className:"dot-lock",children:"🔒"})]}),u.jsx("div",{className:`node-card ${e.id===k.id?"selected":""}`,children:k.status!=="locked"?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"card-header",children:[u.jsx("span",{className:"level-number",children:k.title}),u.jsx("div",{className:"level-stars",children:m(k.difficulty)})]}),u.jsx("h3",{className:"card-title",children:k.subtitle}),u.jsx("p",{className:"card-desc",children:k.description}),u.jsxs("div",{className:"card-meta",children:[u.jsxs("span",{className:"meta-item",children:[u.jsx("span",{className:"meta-icon",children:"📚"}),k.lessons," 节课"]}),u.jsxs("span",{className:"meta-item",children:[u.jsx("span",{className:"meta-icon",children:"⚡"}),k.challenges," 个挑战"]}),u.jsxs("span",{className:"meta-item",children:[u.jsx("span",{className:"meta-icon",children:"⏱"}),k.duration]})]}),u.jsx("div",{className:"card-topics",children:k.topics.map((O,M)=>u.jsx("span",{className:"topic-tag",children:O},M))}),k.status==="current"&&u.jsxs("div",{className:"current-badge",children:[u.jsx("span",{className:"pulse-dot"}),"进行中"]}),k.status==="completed"&&u.jsx("div",{className:"completed-badge-card",children:"✓ 已完成"})]}):u.jsxs("div",{className:"locked-content",children:[u.jsx("div",{className:"lock-icon",children:"🔒"}),u.jsx("h3",{className:"lock-title",children:"未解锁"}),u.jsx("p",{className:"lock-desc",children:"完成前一关后解锁此关卡"}),u.jsxs("div",{className:"lock-hint",children:["需要完成：",(x=l[C-1])==null?void 0:x.title]})]})})]},k.id)})]})}),g&&u.jsxs("div",{className:"current-level-detail",children:[u.jsxs("div",{className:"detail-header",children:[u.jsxs("div",{children:[u.jsx("h2",{children:g.title}),u.jsxs("p",{className:"detail-subtitle",children:["掌握 ",g.subtitle,"，学会使用循环的核心结构"]})]}),u.jsx(mn,{to:`/level/${g.id}`,className:"btn btn-primary",children:"进入学习 →"})]}),u.jsxs("div",{className:"lessons-list",children:[u.jsx("h3",{className:"list-title",children:"📖 课程列表"}),iu.map((k,C)=>u.jsxs("div",{className:`lesson-item ${k.completed?"completed":""}`,onClick:()=>t(`/level/${g.id}`),children:[u.jsx("div",{className:"lesson-index",children:String(C+1).padStart(2,"0")}),u.jsxs("div",{className:"lesson-icon",children:[k.type==="video"&&"🎬",k.type==="reading"&&"📖",k.type==="interactive"&&"💻"]}),u.jsxs("div",{className:"lesson-info",children:[u.jsx("h4",{className:"lesson-title",children:k.title}),u.jsx("span",{className:"lesson-duration",children:k.duration})]}),u.jsx("div",{className:"lesson-status",children:k.completed?u.jsx("span",{className:"status-completed",children:"✓ 已完成"}):u.jsx("span",{className:"status-current",children:"继续学习"})})]},k.id))]}),u.jsxs("div",{className:"challenges-section",children:[u.jsx("h3",{className:"list-title",children:"⚡ 编程挑战"}),u.jsx("div",{className:"challenges-grid",children:L.length>0?L.map(k=>{const C=a(_,k.id);return u.jsxs("div",{className:`challenge-card ${C?"completed":""}`,onClick:()=>t(`/level/${g.id}`),children:[u.jsxs("div",{className:"challenge-header",children:[u.jsxs("span",{className:`challenge-difficulty difficulty-${k.difficulty}`,children:[k.difficulty==="easy"&&"简单",k.difficulty==="medium"&&"中等",k.difficulty==="hard"&&"困难"]}),C&&u.jsx("span",{className:"challenge-check",children:"✓"})]}),u.jsx("h4",{className:"challenge-title",children:k.title})]},k.id)}):X_.map(k=>u.jsxs("div",{className:`challenge-card ${k.completed?"completed":""}`,onClick:()=>t(`/level/${g.id}`),children:[u.jsxs("div",{className:"challenge-header",children:[u.jsxs("span",{className:`challenge-difficulty difficulty-${k.difficulty}`,children:[k.difficulty==="easy"&&"简单",k.difficulty==="medium"&&"中等",k.difficulty==="hard"&&"困难"]}),k.completed&&u.jsx("span",{className:"challenge-check",children:"✓"})]}),u.jsx("h4",{className:"challenge-title",children:k.title})]},k.id))})]}),u.jsxs("div",{className:"stats-row",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon",children:"📚"}),u.jsxs("div",{className:"stat-content",children:[u.jsxs("span",{className:"stat-big",children:[I,"/",iu.length]}),u.jsx("span",{className:"stat-small",children:"已完成课时"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon",children:"⭐"}),u.jsxs("div",{className:"stat-content",children:[u.jsxs("span",{className:"stat-big",children:[r.xp,"/",r.totalXP]}),u.jsx("span",{className:"stat-small",children:"经验值 XP"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon",children:"⏱"}),u.jsxs("div",{className:"stat-content",children:[u.jsxs("span",{className:"stat-big",children:[">","30 分钟"]}),u.jsx("span",{className:"stat-small",children:"预计学习时间"})]})]})]})]})]})]})}function mc({initialCode:t="",onRun:e,readOnly:n=!1,height:r="300px",showOutput:s=!0,testCode:i,onTestResult:a,placeholder:l="# 在这里编写你的 Python 代码"}){const[c,d]=F.useState(t),[m,g]=F.useState(""),[_,L]=F.useState(null),[I,T]=F.useState(!1),[k,C]=F.useState([]),x=F.useRef(null),{isLoading:O,runCode:M,runCodeWithTests:$}=r4();F.useEffect(()=>{d(t)},[t]);const Y=async()=>{if(!(O||I)){T(!0),g(""),L(null),C([]);try{if(i){const y=await $(c,i);g(y.output),L(y.error),C(y.testResults),a==null||a(y.passed,y.testResults),e==null||e(y.output,y.error)}else{const y=await M(c);g(y.output),L(y.error),e==null||e(y.output,y.error)}}catch(y){L(y instanceof Error?y.message:"执行出错")}finally{T(!1)}}},A=y=>{if(y.key==="Tab"){y.preventDefault();const R=y.target,N=R.selectionStart,K=R.selectionEnd,ne=c.substring(0,N)+"    "+c.substring(K);d(ne),setTimeout(()=>{R.selectionStart=R.selectionEnd=N+4},0)}(y.ctrlKey||y.metaKey)&&y.key==="Enter"&&(y.preventDefault(),Y())},w=()=>{navigator.clipboard.writeText(c)},S=()=>{d(t),g(""),L(null),C([])},P=()=>{const y=c.split(`
`).length;return Array(y).fill(0).map((R,N)=>u.jsx("div",{className:"line-number",children:N+1},N))};return u.jsxs("div",{className:"code-editor-container",children:[u.jsxs("div",{className:"editor-header",children:[u.jsx("div",{className:"editor-tabs",children:u.jsx("span",{className:"tab active",children:"main.py"})}),u.jsxs("div",{className:"editor-actions",children:[u.jsx("button",{className:"action-btn",onClick:w,title:"复制代码",children:"📋"}),u.jsx("button",{className:"action-btn",onClick:S,title:"重置代码",children:"🔄"}),u.jsx("button",{className:`run-btn ${I?"running":""}`,onClick:Y,disabled:O||I||n,children:O?u.jsx(u.Fragment,{children:"⏳ 加载中..."}):I?u.jsx(u.Fragment,{children:"⏳ 运行中..."}):u.jsx(u.Fragment,{children:"▶ 运行代码"})})]})]}),u.jsxs("div",{className:"editor-body",style:{height:r},children:[u.jsx("div",{className:"line-numbers",children:P()}),u.jsx("textarea",{ref:x,className:"code-textarea",value:c,onChange:y=>d(y.target.value),onKeyDown:A,readOnly:n,placeholder:l,spellCheck:!1})]}),s&&u.jsxs("div",{className:"output-section",children:[u.jsxs("div",{className:"output-header",children:[u.jsx("span",{className:"output-title",children:"📤 输出结果"}),k.length>0&&u.jsxs("span",{className:`test-summary ${k.every(y=>y.passed)?"all-passed":"has-failed"}`,children:[k.filter(y=>y.passed).length,"/",k.length," 测试通过"]})]}),u.jsx("div",{className:`output-content ${_?"has-error":""}`,children:_?u.jsx("pre",{className:"error-text",children:_}):m?u.jsx("pre",{children:m}):u.jsx("span",{className:"output-placeholder",children:'点击"运行代码"查看输出结果'})}),k.length>0&&u.jsx("div",{className:"test-results",children:k.map((y,R)=>u.jsxs("div",{className:`test-item ${y.passed?"passed":"failed"}`,children:[u.jsx("span",{className:"test-icon",children:y.passed?"✓":"✗"}),u.jsx("span",{className:"test-name",children:y.name}),!y.passed&&u.jsx("span",{className:"test-message",children:y.message})]},R))})]})]})}function Q_({title:t,steps:e,onComplete:n}){var S;const[r,s]=F.useState(0),[i,a]=F.useState(new Set),[l,c]=F.useState(null),[d,m]=F.useState(!1),[g,_]=F.useState(!1),[L,I]=F.useState(!1),T=e[r],k=(r+(i.has(r)?1:0))/e.length*100,C=r===e.length-1,x=()=>{if(C){M(),n==null||n();return}s(r+1),c(null),m(!1),_(!1),I(!1)},O=()=>{r>0&&(s(r-1),c(null),m(!1),_(!1),I(!1))},M=()=>{a(P=>new Set([...P,r]))},$=P=>{d||c(P)},Y=()=>{l!==null&&(m(!0),l===T.correctAnswer&&M())},A=P=>{_(P),P&&M()},w=()=>{I(!0),M()};return u.jsxs("div",{className:"interactive-lesson",children:[u.jsx("div",{className:"lesson-progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${k}%`}})}),u.jsx("div",{className:"lesson-steps-indicator",children:e.map((P,y)=>u.jsxs("div",{className:`step-dot ${y<r||i.has(y)?"completed":""} ${y===r?"current":""}`,onClick:()=>s(y),children:[u.jsx("span",{className:"dot-number",children:y+1}),u.jsx("span",{className:"dot-title",children:P.title})]},P.id))}),u.jsxs("div",{className:"lesson-content",children:[u.jsxs("div",{className:"step-header",children:[u.jsxs("span",{className:"step-badge",children:["第 ",r+1," 步 / 共 ",e.length," 步"]}),u.jsx("h2",{className:"step-title",children:T.title})]}),u.jsxs("div",{className:"step-body",children:[T.type==="explanation"&&u.jsxs("div",{className:"explanation-content",children:[u.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:_o(T.content)}}),u.jsx("button",{className:"btn btn-primary",onClick:()=>{M(),x()},children:C?"完成学习 🎉":"我明白了，继续 →"})]}),T.type==="example"&&u.jsxs("div",{className:"example-content",children:[u.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:_o(T.content)}}),T.code&&u.jsxs("div",{className:"code-example-wrapper",children:[u.jsx("div",{className:"example-label",children:"💡 点击运行试试："}),u.jsx(mc,{initialCode:T.code,height:"250px"})]}),u.jsx("button",{className:"btn btn-primary",onClick:()=>{M(),x()},children:C?"完成学习 🎉":"继续下一步 →"})]}),T.type==="practice"&&u.jsxs("div",{className:"practice-content",children:[u.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:_o(T.content)}}),T.hint&&u.jsxs("div",{className:"hint-box",children:[u.jsx("span",{className:"hint-icon",children:"💡 提示："}),T.hint]}),T.code&&u.jsx("div",{className:"practice-editor",children:u.jsx(mc,{initialCode:T.code,height:"300px",testCode:T.testCode,onTestResult:A})}),u.jsxs("div",{className:"practice-actions",children:[u.jsx("button",{className:"btn btn-secondary",onClick:O,disabled:r===0,children:"← 上一步"}),!L&&!g&&u.jsx("button",{className:"btn btn-secondary",onClick:w,children:"跳过此步"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>{M(),x()},children:g||L?C?"完成学习 🎉":"继续下一步 →":"跳过练习继续 →"})]}),g&&u.jsx("div",{className:"success-message",children:"✅ 太棒了！你成功完成了这个练习！"})]}),T.type==="quiz"&&u.jsxs("div",{className:"quiz-content",children:[u.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:_o(T.content)}}),u.jsx("div",{className:"quiz-options",children:(S=T.options)==null?void 0:S.map((P,y)=>u.jsxs("div",{className:`quiz-option ${l===y?"selected":""} ${d&&y===T.correctAnswer?"correct":""} ${d&&l===y&&y!==T.correctAnswer?"wrong":""}`,onClick:()=>$(y),children:[u.jsx("span",{className:"option-letter",children:String.fromCharCode(65+y)}),u.jsx("span",{className:"option-text",children:P})]},y))}),d?u.jsxs("div",{className:"quiz-result",children:[l===T.correctAnswer?u.jsx("div",{className:"result-success",children:"✅ 回答正确！"}):u.jsxs("div",{className:"result-failure",children:["❌ 回答错误，正确答案是 ",String.fromCharCode(65+(T.correctAnswer||0))]}),u.jsxs("div",{className:"result-actions",children:[u.jsx("button",{className:"btn btn-secondary",onClick:()=>{m(!1),c(null)},children:"重新答题"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>{M(),x()},children:C?"完成学习 🎉":"继续下一步 →"})]})]}):u.jsx("button",{className:"btn btn-primary",onClick:Y,disabled:l===null,children:"提交答案"})]})]})]})]})}function _o(t){return t.replace(/\n\n/g,"</p><p>").replace(/^/g,"<p>").replace(/$/g,"</p>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")}function J_({title:t,description:e,difficulty:n,initialCode:r,testCode:s,testCases:i,onComplete:a,xpReward:l=10}){const[c,d]=F.useState(!1),[m,g]=F.useState(!1),[_,L]=F.useState("description"),I=C=>{C&&!c&&(d(!0),a==null||a())},k={easy:{label:"简单",color:"green",icon:"🟢"},medium:{label:"中等",color:"yellow",icon:"🟡"},hard:{label:"困难",color:"red",icon:"🔴"}}[n];return u.jsxs("div",{className:"challenge-arena",children:[u.jsxs("div",{className:"challenge-header",children:[u.jsxs("div",{className:"challenge-info",children:[u.jsxs("div",{className:"challenge-title-row",children:[u.jsxs("span",{className:`difficulty-badge difficulty-${n}`,children:[k.icon," ",k.label]}),u.jsxs("span",{className:"xp-reward",children:["⭐ +",l," XP"]})]}),u.jsx("h2",{className:"challenge-title",children:t})]}),c&&u.jsxs("div",{className:"completion-badge",children:[u.jsx("span",{className:"badge-icon",children:"✅"}),u.jsx("span",{children:"已完成"})]})]}),u.jsxs("div",{className:"challenge-layout",children:[u.jsxs("div",{className:"challenge-sidebar",children:[u.jsxs("div",{className:"sidebar-tabs",children:[u.jsx("button",{className:`sidebar-tab ${_==="description"?"active":""}`,onClick:()=>L("description"),children:"📝 题目描述"}),u.jsxs("button",{className:`sidebar-tab ${_==="testcases"?"active":""}`,onClick:()=>L("testcases"),children:["🧪 测试用例 (",i.length,")"]})]}),u.jsxs("div",{className:"sidebar-content",children:[_==="description"&&u.jsxs("div",{className:"description-content",children:[u.jsx("p",{className:"challenge-desc",children:e}),u.jsxs("div",{className:"hint-section",children:[u.jsx("button",{className:"hint-toggle",onClick:()=>g(!m),children:m?"隐藏提示":"💡 查看提示"}),m&&u.jsx("div",{className:"hint-content",children:u.jsx("p",{children:"提示：使用 Python 的循环结构和条件判断来解决问题。"})})]})]}),_==="testcases"&&u.jsx("div",{className:"testcases-content",children:i.map((C,x)=>u.jsxs("div",{className:"testcase-item",children:[u.jsx("div",{className:"testcase-header",children:u.jsxs("span",{className:"testcase-name",children:["测试用例 ",x+1,": ",C.name]})}),u.jsxs("div",{className:"testcase-body",children:[u.jsxs("div",{className:"testcase-row",children:[u.jsx("span",{className:"testcase-label",children:"输入："}),u.jsx("code",{children:C.input})]}),u.jsxs("div",{className:"testcase-row",children:[u.jsx("span",{className:"testcase-label",children:"预期："}),u.jsx("code",{children:C.expected})]})]})]},x))})]})]}),u.jsx("div",{className:"challenge-editor",children:u.jsx(mc,{initialCode:r,height:"400px",testCode:s,onTestResult:I})})]}),c&&u.jsx("div",{className:"completion-modal-overlay",children:u.jsxs("div",{className:"completion-modal",children:[u.jsx("div",{className:"modal-confetti",children:"🎉"}),u.jsx("h3",{children:"恭喜完成挑战！"}),u.jsxs("p",{className:"modal-reward",children:["获得 ",u.jsxs("span",{className:"reward-xp",children:["+",l," XP"]})," 经验值"]}),u.jsx("p",{className:"modal-message",children:"你成功通过了所有测试用例，继续加油！"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>d(!1),children:"继续编码"})]})})]})}function Z_(){const{id:t}=G8(),e=$l(),[n,r]=F.useState("learn"),[s,i]=F.useState(null),{isLoading:a,error:l,retryLoad:c}=r4(),{progress:d,isChallengeCompleted:m,isLevelUnlocked:g,completeLesson:_,completeChallenge:L,getLevelProgress:I}=ei(),T=parseInt(t||"4"),k=zr.find(S=>S.id===T)||zr[3],C=g(T),x=I(T),O=i4[T]||[],M=Mh[T]||[],$=M.filter(S=>m(T,S.id)).length,Y=S=>Array(5).fill(0).map((P,y)=>u.jsx("span",{className:`star ${y<S?"filled":""}`,children:"★"},y)),A=()=>{_(T,1)},w=(S,P)=>{L(T,S,P),i(null)};return C?u.jsxs("div",{className:"level-detail-page",children:[l&&u.jsxs("div",{className:"pyodide-error",children:[u.jsx("span",{className:"error-icon",children:"⚠️"}),u.jsx("span",{children:"Python运行环境加载失败，代码执行功能暂不可用"}),u.jsx("button",{className:"retry-btn",onClick:c,children:"重试"})]}),a&&!l&&u.jsxs("div",{className:"pyodide-loading-banner",children:[u.jsx("div",{className:"loading-spinner-small"}),u.jsx("span",{children:"正在加载Python运行环境..."})]}),u.jsxs("div",{className:"container detail-container",children:[u.jsxs("button",{className:"back-btn",onClick:()=>e("/map"),children:[u.jsx("span",{children:"←"})," 返回地图"]}),u.jsxs("div",{className:"level-header",children:[u.jsxs("div",{className:"level-info",children:[u.jsxs("div",{className:"level-badge",children:[u.jsx("span",{className:"badge-icon",children:"🐍"}),u.jsxs("span",{children:["Python 进阶 · 第 ",k.id," 关"]})]}),u.jsx("h1",{className:"level-title",children:k.title}),u.jsx("p",{className:"level-desc",children:k.description}),u.jsxs("div",{className:"level-meta",children:[u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{className:"meta-icon",children:"📚"}),u.jsxs("span",{children:[O.length," 个学习步骤"]})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{className:"meta-icon",children:"⚡"}),u.jsxs("span",{children:[M.length," 个挑战"]})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{className:"meta-icon",children:"⏱"}),u.jsx("span",{children:k.duration})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{className:"meta-icon",children:"⭐"}),u.jsxs("span",{children:["难度 ",Y(k.difficulty)]})]})]}),u.jsxs("div",{className:"level-progress",children:[u.jsxs("div",{className:"progress-info",children:[u.jsx("span",{children:"本关进度"}),u.jsxs("span",{className:"progress-text",children:[x.completed,"/",x.total," 完成 · ",x.percent,"%"]})]}),u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${x.percent}%`}})})]})]}),u.jsxs("div",{className:"level-actions",children:[u.jsx("button",{className:"btn btn-primary btn-lg continue-btn",onClick:()=>r("learn"),children:"▶ 开始学习"}),u.jsxs("div",{className:"xp-display",children:[u.jsx("span",{className:"xp-icon",children:"⭐"}),u.jsxs("span",{className:"xp-value",children:[d.xp," XP"]})]})]})]}),u.jsxs("div",{className:"topics-section",children:[u.jsx("h3",{className:"section-title-sm",children:"📋 本关知识点"}),u.jsx("div",{className:"topics-tags",children:k.topics.map((S,P)=>u.jsx("span",{className:"topic-chip",children:S},P))})]}),u.jsxs("div",{className:"content-tabs",children:[u.jsxs("button",{className:`tab-btn ${n==="learn"?"active":""}`,onClick:()=>{r("learn"),i(null)},children:["📖 互动学习",u.jsx("span",{className:"tab-count",children:O.length})]}),u.jsxs("button",{className:`tab-btn ${n==="challenges"?"active":""}`,onClick:()=>{r("challenges"),i(null)},children:["⚡ 编程挑战",u.jsxs("span",{className:"tab-count",children:[$,"/",M.length]})]}),u.jsx("button",{className:`tab-btn ${n==="notes"?"active":""}`,onClick:()=>{r("notes"),i(null)},children:"📝 学习笔记"})]}),u.jsxs("div",{className:"tab-content",children:[n==="learn"&&u.jsx("div",{className:"learn-tab-content",children:O.length>0?u.jsx(Q_,{title:k.title,steps:O,onComplete:A}):u.jsx("div",{className:"empty-state",children:u.jsx("p",{children:"暂无学习内容"})})}),n==="challenges"&&u.jsx("div",{className:"challenges-tab-content",children:s?u.jsxs("div",{children:[u.jsx("button",{className:"back-to-challenges",onClick:()=>i(null),children:"← 返回挑战列表"}),(()=>{const S=M.find(P=>P.id===s);return S?u.jsx(J_,{title:S.title,description:S.description,difficulty:S.difficulty,initialCode:S.initialCode,testCode:S.testCode,testCases:S.testCases,xpReward:S.xpReward,onComplete:()=>w(S.id,S.xpReward)}):null})()]}):u.jsxs("div",{className:"challenges-list",children:[u.jsxs("div",{className:"challenges-header",children:[u.jsx("h3",{children:"编程挑战"}),u.jsx("p",{children:"完成以下挑战来巩固所学知识，获得经验值奖励"})]}),u.jsx("div",{className:"challenges-grid",children:M.map((S,P)=>{const y=m(T,S.id);return u.jsxs("div",{className:`challenge-card ${y?"completed":""}`,onClick:()=>i(S.id),children:[u.jsxs("div",{className:"challenge-card-header",children:[u.jsxs("span",{className:"challenge-number",children:["挑战 ",P+1]}),u.jsxs("span",{className:`challenge-diff diff-${S.difficulty}`,children:[S.difficulty==="easy"&&"🟢 简单",S.difficulty==="medium"&&"🟡 中等",S.difficulty==="hard"&&"🔴 困难"]})]}),u.jsx("h4",{className:"challenge-card-title",children:S.title}),u.jsxs("p",{className:"challenge-card-desc",children:[S.description.substring(0,80),"..."]}),u.jsxs("div",{className:"challenge-card-footer",children:[u.jsxs("span",{className:"xp-reward-badge",children:["⭐ +",S.xpReward," XP"]}),y&&u.jsx("span",{className:"completed-check",children:"✓ 已完成"})]})]},S.id)})})]})}),n==="notes"&&u.jsx("div",{className:"notes-content",children:u.jsxs("div",{className:"notes-placeholder",children:[u.jsx("div",{className:"notes-icon",children:"📝"}),u.jsx("h3",{children:"学习笔记"}),u.jsx("p",{children:"记录你的学习心得和重要知识点"}),u.jsx("textarea",{className:"notes-textarea",placeholder:"在这里记录你的笔记...",rows:10}),u.jsx("button",{className:"btn btn-primary",children:"保存笔记"})]})})]})]})]}):u.jsx("div",{className:"level-detail-page",children:u.jsxs("div",{className:"container detail-container",children:[u.jsxs("button",{className:"back-btn",onClick:()=>e("/map"),children:[u.jsx("span",{children:"←"})," 返回地图"]}),u.jsxs("div",{className:"locked-page",children:[u.jsx("div",{className:"lock-icon-big",children:"🔒"}),u.jsx("h2",{children:"关卡未解锁"}),u.jsx("p",{children:"完成前一关的所有课程和挑战后即可解锁此关卡"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>e("/map"),children:"返回地图"})]})]})})}function ew(t){const e=Date.now()-new Date(t).getTime(),n=Math.floor(e/6e4);if(n<1)return"刚刚";if(n<60)return`${n}分钟前`;const r=Math.floor(n/60);if(r<24)return`${r}小时前`;const s=Math.floor(r/24);return s<7?`${s}天前`:new Date(t).toLocaleDateString("zh-CN")}function tw(){const t=$l(),{progress:e,stats:n,getLevelProgress:r,getOverallProgress:s,getRecentActivities:i}=ei(),a=s(),l=i(20),c=Array.from({length:7}).map((k,C)=>{const x=new Date;return x.setDate(x.getDate()-(6-C)),x.toISOString().slice(0,10)}),d=zr.map(k=>{var M,$;const C=r(k.id),x=((M=i4[k.id])==null?void 0:M.length)||0,O=(($=Mh[k.id])==null?void 0:$.length)||0;return{...k,...C,lessonCount:x,challengeCount:O,total:x+O}}),m=500,g=Math.floor(e.totalXP/m)+1,_=e.totalXP%m,L=Math.round(_/m*100),I=["编程小白","初学者","进阶学徒","熟练开发者","资深工程师","Python 大师","传奇程序员"],T=I[Math.min(g-1,I.length-1)];return u.jsxs("div",{className:"learning-path-page",children:[u.jsxs("div",{className:"path-decoration",children:[u.jsx("div",{className:"deco-circle deco-1"}),u.jsx("div",{className:"deco-circle deco-2"})]}),u.jsxs("div",{className:"container path-container",children:[u.jsx("div",{className:"path-header",children:u.jsxs("div",{className:"header-info",children:[u.jsxs("div",{className:"badge",children:[u.jsx("span",{className:"badge-icon",children:"📈"}),u.jsx("span",{children:"学习路径"})]}),u.jsx("h1",{className:"page-title",children:"我的学习进度"}),u.jsx("p",{className:"page-subtitle",children:"追踪每一次成长，赢取每一个徽章"})]})}),u.jsxs("div",{className:"user-level-card",children:[u.jsxs("div",{className:"user-avatar-lg",children:[u.jsx("span",{children:"LY"}),u.jsx("div",{className:"avatar-ring"})]}),u.jsxs("div",{className:"user-info-block",children:[u.jsxs("div",{className:"user-title-row",children:[u.jsx("h2",{className:"user-name",children:"冒险者 LY"}),u.jsxs("span",{className:"user-level-badge",children:["Lv.",g," ",T]})]}),u.jsxs("div",{className:"level-progress-block",children:[u.jsxs("div",{className:"level-progress-info",children:[u.jsxs("span",{children:[_," / ",m," XP"]}),u.jsxs("span",{children:["距下一级还需 ",m-_," XP"]})]}),u.jsx("div",{className:"level-progress-bar",children:u.jsx("div",{className:"level-progress-fill",style:{width:`${L}%`}})})]}),u.jsxs("div",{className:"user-tags",children:[u.jsx("span",{className:"user-tag",children:"⚡ 速度学习者"}),u.jsx("span",{className:"user-tag",children:"🎯 挑战爱好者"})]})]})]}),u.jsxs("div",{className:"overview-grid",children:[u.jsxs("div",{className:"overview-card",children:[u.jsx("div",{className:"ov-icon",style:{background:"rgba(245, 158, 11, 0.15)",color:"#f59e0b"},children:"⭐"}),u.jsxs("div",{className:"ov-info",children:[u.jsx("div",{className:"ov-value",children:e.totalXP}),u.jsx("div",{className:"ov-label",children:"累计经验值"}),u.jsxs("div",{className:"ov-hint",children:["+",e.xp," 可用"]})]})]}),u.jsxs("div",{className:"overview-card",children:[u.jsx("div",{className:"ov-icon",style:{background:"rgba(239, 68, 68, 0.15)",color:"#ef4444"},children:"🔥"}),u.jsxs("div",{className:"ov-info",children:[u.jsxs("div",{className:"ov-value",children:[e.streak," 天"]}),u.jsx("div",{className:"ov-label",children:"连续学习"}),u.jsx("div",{className:"ov-hint",children:"保持节奏"})]})]}),u.jsxs("div",{className:"overview-card",children:[u.jsx("div",{className:"ov-icon",style:{background:"rgba(59, 130, 246, 0.15)",color:"#3b82f6"},children:"📚"}),u.jsxs("div",{className:"ov-info",children:[u.jsx("div",{className:"ov-value",children:n.completedLessons}),u.jsx("div",{className:"ov-label",children:"完成学习"}),u.jsx("div",{className:"ov-hint",children:"课时统计"})]})]}),u.jsxs("div",{className:"overview-card",children:[u.jsx("div",{className:"ov-icon",style:{background:"rgba(168, 85, 247, 0.15)",color:"#a855f7"},children:"⚔️"}),u.jsxs("div",{className:"ov-info",children:[u.jsx("div",{className:"ov-value",children:n.completedChallenges}),u.jsx("div",{className:"ov-label",children:"完成挑战"}),u.jsx("div",{className:"ov-hint",children:"挑战统计"})]})]}),u.jsxs("div",{className:"overview-card",children:[u.jsx("div",{className:"ov-icon",style:{background:"rgba(16, 185, 129, 0.15)",color:"#10b981"},children:"🚪"}),u.jsxs("div",{className:"ov-info",children:[u.jsxs("div",{className:"ov-value",children:[n.completedLevels," / ",n.totalLevels]}),u.jsx("div",{className:"ov-label",children:"通关进度"}),u.jsxs("div",{className:"ov-hint",children:[a.percent,"% 完成"]})]})]}),u.jsxs("div",{className:"overview-card",children:[u.jsx("div",{className:"ov-icon",style:{background:"rgba(245, 158, 11, 0.15)",color:"#f59e0b"},children:"🏆"}),u.jsxs("div",{className:"ov-info",children:[u.jsx("div",{className:"ov-value",children:e.unlockedAchievements.length}),u.jsx("div",{className:"ov-label",children:"解锁成就"}),u.jsx("div",{className:"ov-hint",children:"查看全部 →"})]})]})]}),u.jsxs("div",{className:"path-main",children:[u.jsxs("div",{className:"path-card calendar-card",children:[u.jsx("h3",{className:"card-title",children:"📅 最近 7 天学习"}),u.jsx("div",{className:"calendar-week",children:c.map(k=>{var M;const C=(M=e.studyDays)==null?void 0:M.includes(k),x=k===new Date().toISOString().slice(0,10),O=new Date(k).toLocaleDateString("zh-CN",{weekday:"short"});return u.jsxs("div",{className:`cal-day ${C?"studied":""} ${x?"today":""}`,title:k,children:[u.jsx("div",{className:"cal-day-label",children:O}),u.jsx("div",{className:"cal-day-cell",children:C&&u.jsx("span",{className:"cal-check",children:"✓"})})]},k)})}),u.jsx("div",{className:"calendar-foot",children:u.jsxs("span",{children:["已连续学习 ",u.jsx("strong",{children:e.streak})," 天"]})})]}),u.jsxs("div",{className:"path-card levels-card",children:[u.jsx("h3",{className:"card-title",children:"🗺️ 学习路径"}),u.jsx("div",{className:"levels-progress",children:d.map((k,C)=>{const x=C===d.length-1;return u.jsxs("div",{className:`path-level ${k.completed?"completed":""} ${k.unlocked?"unlocked":"locked"}`,onClick:()=>k.unlocked&&t(`/level/${k.id}`),children:[u.jsx("div",{className:"pl-node",children:k.completed?u.jsx("span",{children:"✓"}):u.jsx("span",{children:k.id})}),u.jsxs("div",{className:"pl-content",children:[u.jsx("div",{className:"pl-title",children:k.subtitle}),u.jsxs("div",{className:"pl-meta",children:[u.jsxs("span",{children:[k.completed,"/",k.total]}),u.jsxs("span",{children:[k.percent,"%"]})]}),u.jsx("div",{className:"pl-bar",children:u.jsx("div",{className:"pl-fill",style:{width:`${k.percent}%`}})})]}),!x&&u.jsx("div",{className:`pl-line ${k.completed?"completed":""}`})]},k.id)})})]}),u.jsxs("div",{className:"path-card activity-card",children:[u.jsx("h3",{className:"card-title",children:"🕐 最近活动"}),l.length>0?u.jsx("div",{className:"activity-list",children:l.map(k=>u.jsxs("div",{className:"activity-item",children:[u.jsx("div",{className:"act-icon",children:k.icon}),u.jsxs("div",{className:"act-body",children:[u.jsx("div",{className:"act-title",children:k.title}),u.jsx("div",{className:"act-desc",children:k.description})]}),u.jsxs("div",{className:"act-meta",children:[k.xp&&u.jsxs("span",{className:"act-xp",children:["+",k.xp," XP"]}),u.jsx("span",{className:"act-time",children:ew(k.timestamp)})]})]},k.id))}):u.jsx("div",{className:"empty-state",children:u.jsx("p",{children:"还没有活动记录，开始学习吧 🚀"})})]})]})]})]})}function nw(){var L,I;const{progress:t,stats:e,isAchievementUnlocked:n,isAchievementClaimed:r,claimAchievement:s}=ei(),[i,a]=F.useState("all"),l=t.unlockedAchievements.length,c=Vr.length,d=Math.round(l/c*100),m=F.useMemo(()=>i==="all"?Vr:Vr.filter(T=>T.category===i),[i]),g=Vr.filter(T=>n(T.id)),_=Vr.filter(T=>!n(T.id));return u.jsxs("div",{className:"achievements-page",children:[u.jsxs("div",{className:"achievements-decoration",children:[u.jsx("div",{className:"deco-circle deco-1"}),u.jsx("div",{className:"deco-circle deco-2"}),u.jsx("div",{className:"deco-circle deco-3"})]}),u.jsxs("div",{className:"container achievements-container",children:[u.jsxs("div",{className:"achievements-header",children:[u.jsxs("div",{className:"header-info",children:[u.jsxs("div",{className:"badge",children:[u.jsx("span",{className:"badge-icon",children:"🏆"}),u.jsx("span",{children:"成就系统"})]}),u.jsx("h1",{className:"page-title",children:"成就殿堂"}),u.jsx("p",{className:"page-subtitle",children:"解锁成就，赢得荣耀徽章，赢取经验值奖励"})]}),u.jsxs("div",{className:"header-stats",children:[u.jsxs("div",{className:"h-stat-card",children:[u.jsx("div",{className:"h-stat-icon",children:"🎖️"}),u.jsxs("div",{className:"h-stat-info",children:[u.jsxs("div",{className:"h-stat-value",children:[l," / ",c]}),u.jsx("div",{className:"h-stat-label",children:"已解锁成就"})]})]}),u.jsxs("div",{className:"h-stat-card",children:[u.jsx("div",{className:"h-stat-icon",children:"⭐"}),u.jsxs("div",{className:"h-stat-info",children:[u.jsx("div",{className:"h-stat-value",children:t.totalXP}),u.jsx("div",{className:"h-stat-label",children:"累计 XP"})]})]}),u.jsxs("div",{className:"h-stat-card",children:[u.jsx("div",{className:"h-stat-icon",children:"🔥"}),u.jsxs("div",{className:"h-stat-info",children:[u.jsxs("div",{className:"h-stat-value",children:[t.streak," 天"]}),u.jsx("div",{className:"h-stat-label",children:"连续学习"})]})]})]})]}),u.jsxs("div",{className:"overall-progress-card",children:[u.jsxs("div",{className:"overall-info",children:[u.jsx("span",{className:"overall-label",children:"成就解锁进度"}),u.jsxs("span",{className:"overall-percent",children:[d,"%"]})]}),u.jsx("div",{className:"overall-bar",children:u.jsx("div",{className:"overall-fill",style:{width:`${d}%`}})})]}),u.jsx("div",{className:"category-tabs",children:ru.map(T=>u.jsxs("button",{className:`cat-tab ${i===T.id?"active":""}`,onClick:()=>a(T.id),children:[u.jsx("span",{className:"cat-icon",children:T.icon}),u.jsx("span",{children:T.label})]},T.id))}),g.length>0&&i==="all"&&u.jsxs("div",{className:"achievements-section",children:[u.jsxs("h2",{className:"section-title",children:["✨ 已解锁 (",g.length,")"]}),u.jsx("div",{className:"achievements-grid",children:g.map(T=>{const k=r(T.id),C=up[T.rarity],x=T.progress?T.progress(e):null;return u.jsxs("div",{className:`achievement-card unlocked rarity-${T.rarity} ${k?"claimed":""}`,style:{borderColor:C.color,background:C.bg},children:[u.jsx("div",{className:"ach-glow",style:{background:C.color}}),u.jsx("div",{className:"ach-icon",style:{color:C.color},children:T.icon}),u.jsxs("div",{className:"ach-content",children:[u.jsxs("div",{className:"ach-header",children:[u.jsx("h3",{className:"ach-title",children:T.title}),u.jsx("span",{className:"ach-rarity",style:{background:C.color},children:C.label})]}),u.jsx("p",{className:"ach-desc",children:T.description}),x&&x.total>1&&u.jsxs("div",{className:"ach-progress",children:[u.jsx("div",{className:"ach-progress-bar",children:u.jsx("div",{className:"ach-progress-fill",style:{width:`${x.current/x.total*100}%`,background:C.color}})}),u.jsxs("span",{className:"ach-progress-text",children:[x.current," / ",x.total]})]}),u.jsxs("div",{className:"ach-footer",children:[u.jsxs("span",{className:"ach-xp",children:["+",T.xpReward," XP"]}),k?u.jsx("span",{className:"ach-claimed",children:"✓ 已领取"}):u.jsx("button",{className:"ach-claim-btn",style:{background:C.color},onClick:()=>s(T.id),children:"领取奖励"})]})]})]},T.id)})})]}),u.jsxs("div",{className:"achievements-section",children:[u.jsx("h2",{className:"section-title",children:i==="all"?"🔒 待解锁":`${(L=ru.find(T=>T.id===i))==null?void 0:L.icon} ${(I=ru.find(T=>T.id===i))==null?void 0:I.label}类成就`}),u.jsx("div",{className:"achievements-grid",children:(i==="all"?_:m).map(T=>{const k=up[T.rarity],C=T.progress?T.progress(e):null;return u.jsxs("div",{className:`achievement-card locked rarity-${T.rarity}`,style:{borderColor:k.color,background:k.bg},children:[u.jsx("div",{className:"ach-icon",style:{color:k.color,filter:"grayscale(50%) opacity(0.6)"},children:T.icon}),u.jsxs("div",{className:"ach-content",children:[u.jsxs("div",{className:"ach-header",children:[u.jsx("h3",{className:"ach-title",children:T.title}),u.jsx("span",{className:"ach-rarity",style:{background:k.color},children:k.label})]}),u.jsx("p",{className:"ach-desc",children:T.description}),C&&u.jsxs("div",{className:"ach-progress",children:[u.jsx("div",{className:"ach-progress-bar",children:u.jsx("div",{className:"ach-progress-fill",style:{width:`${C.current/C.total*100}%`,background:k.color}})}),u.jsxs("span",{className:"ach-progress-text",children:[C.current," / ",C.total]})]}),u.jsxs("div",{className:"ach-footer",children:[u.jsxs("span",{className:"ach-xp",children:["+",T.xpReward," XP"]}),u.jsx("span",{className:"ach-locked-label",children:"🔒 未解锁"})]})]})]},T.id)})}),m.length===0&&u.jsx("div",{className:"empty-state",children:u.jsx("p",{children:"该分类暂无成就"})})]})]})]})}function rw(){const{progress:t,stats:e}=ei(),[n,r]=F.useState("xp"),[s,i]=F.useState("all"),a={rank:0,name:"我 (LY)",avatar:"LY",xp:t.totalXP,streak:t.streak,levels:e.completedLevels,color:"#10b981",isMe:!0},l=F.useMemo(()=>{const I=[...H_];return I.sort((T,k)=>k[n]-T[n]),I},[n]),c=l.findIndex(I=>I[n]>t.totalXP)+1;a.rank=c>0?c:l.length+1;const d=F.useMemo(()=>[...l,a].sort((T,k)=>k[n]-T[n]).map((T,k)=>({...T,rank:k+1})),[l,n,t.totalXP]),m=d.slice(0,3),g=d.slice(3),_=d.find(I=>I.isMe),L={xp:"经验值 XP",streak:"连续天数",levels:"通关数"};return u.jsxs("div",{className:"leaderboard-page",children:[u.jsxs("div",{className:"lb-decoration",children:[u.jsx("div",{className:"deco-circle deco-1"}),u.jsx("div",{className:"deco-circle deco-2"})]}),u.jsxs("div",{className:"container lb-container",children:[u.jsxs("div",{className:"lb-header",children:[u.jsxs("div",{className:"badge",children:[u.jsx("span",{className:"badge-icon",children:"🏅"}),u.jsx("span",{children:"排行榜"})]}),u.jsx("h1",{className:"page-title",children:"学习风云榜"}),u.jsx("p",{className:"page-subtitle",children:"看看你在 Python Quest 社区中的位置"})]}),u.jsxs("div",{className:"lb-stats-row",children:[u.jsxs("div",{className:"lb-stat",children:[u.jsx("span",{className:"lb-stat-label",children:"我的排名"}),u.jsxs("span",{className:"lb-stat-value",children:["#",_.rank]})]}),u.jsxs("div",{className:"lb-stat",children:[u.jsx("span",{className:"lb-stat-label",children:"我的经验"}),u.jsx("span",{className:"lb-stat-value",children:t.totalXP})]}),u.jsxs("div",{className:"lb-stat",children:[u.jsx("span",{className:"lb-stat-label",children:"我的连续"}),u.jsxs("span",{className:"lb-stat-value",children:[t.streak," 天"]})]}),u.jsxs("div",{className:"lb-stat",children:[u.jsx("span",{className:"lb-stat-label",children:"通关数"}),u.jsx("span",{className:"lb-stat-value",children:e.completedLevels})]})]}),u.jsxs("div",{className:"lb-filters",children:[u.jsxs("div",{className:"filter-group",children:[u.jsx("span",{className:"filter-label",children:"时间:"}),[{v:"all",l:"总榜"},{v:"month",l:"本月"},{v:"week",l:"本周"}].map(I=>u.jsx("button",{className:`filter-btn ${s===I.v?"active":""}`,onClick:()=>i(I.v),children:I.l},I.v))]}),u.jsxs("div",{className:"filter-group",children:[u.jsx("span",{className:"filter-label",children:"排序:"}),Object.keys(L).map(I=>u.jsx("button",{className:`filter-btn ${n===I?"active":""}`,onClick:()=>r(I),children:L[I]},I))]})]}),u.jsx("div",{className:"podium",children:m.map((I,T)=>{const C=[1,0,2].indexOf(T),x=[180,220,150][C],O=["#fbbf24","#94a3b8","#f97316"];return u.jsxs("div",{className:`podium-item rank-${I.rank}`,style:{order:C+1},children:[u.jsxs("div",{className:"podium-avatar",style:{background:I.color},children:[u.jsx("span",{children:I.avatar}),I.isMe&&u.jsx("span",{className:"me-flag",children:"我"})]}),u.jsx("div",{className:"podium-name",children:I.name}),u.jsxs("div",{className:"podium-stats",children:[u.jsxs("span",{children:["⭐ ",I.xp]}),u.jsxs("span",{children:["🔥 ",I.streak]})]}),u.jsxs("div",{className:"podium-rank",style:{background:O[T]},children:[u.jsx("span",{className:"rank-medal",children:I.rank===1?"🥇":I.rank===2?"🥈":"🥉"}),u.jsxs("span",{children:["#",I.rank]})]}),u.jsx("div",{className:"podium-stand",style:{height:`${x}px`,background:O[T]},children:u.jsx("span",{className:"stand-text",children:I.rank===1?"冠军":I.rank===2?"亚军":"季军"})})]},I.rank)})}),u.jsxs("div",{className:"lb-list",children:[u.jsxs("div",{className:"lb-list-header",children:[u.jsx("span",{children:"排名"}),u.jsx("span",{children:"玩家"}),u.jsx("span",{children:"经验"}),u.jsx("span",{children:"连续"}),u.jsx("span",{children:"通关"})]}),g.map(I=>u.jsxs("div",{className:`lb-list-row ${I.isMe?"is-me":""}`,children:[u.jsxs("span",{className:"lb-rank",children:["#",I.rank]}),u.jsxs("div",{className:"lb-player",children:[u.jsx("div",{className:"lb-avatar",style:{background:I.color},children:u.jsx("span",{children:I.avatar})}),u.jsx("span",{className:"lb-name",children:I.name})]}),u.jsxs("span",{className:"lb-xp",children:["⭐ ",I.xp]}),u.jsxs("span",{className:"lb-streak",children:["🔥 ",I.streak]}),u.jsxs("span",{className:"lb-levels",children:["🚪 ",I.levels]})]},I.rank)),_.rank>3&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"lb-divider",children:"... 你的位置 ..."}),u.jsxs("div",{className:"lb-list-row is-me",children:[u.jsxs("span",{className:"lb-rank",children:["#",_.rank]}),u.jsxs("div",{className:"lb-player",children:[u.jsx("div",{className:"lb-avatar",style:{background:_.color},children:u.jsx("span",{children:_.avatar})}),u.jsx("span",{className:"lb-name",children:_.name})]}),u.jsxs("span",{className:"lb-xp",children:["⭐ ",_.xp]}),u.jsxs("span",{className:"lb-streak",children:["🔥 ",_.streak]}),u.jsxs("span",{className:"lb-levels",children:["🚪 ",_.levels]})]})]})]})]})]})}function sw(){return u.jsxs("div",{className:"app",children:[u.jsx(W_,{}),u.jsx("main",{className:"main-content",children:u.jsxs(o9,{children:[u.jsx(Dr,{path:"/",element:u.jsx(q_,{})}),u.jsx(Dr,{path:"/map",element:u.jsx(K_,{})}),u.jsx(Dr,{path:"/level/:id",element:u.jsx(Z_,{})}),u.jsx(Dr,{path:"/path",element:u.jsx(tw,{})}),u.jsx(Dr,{path:"/achievements",element:u.jsx(nw,{})}),u.jsx(Dr,{path:"/leaderboard",element:u.jsx(rw,{})})]})}),u.jsx(Y_,{})]})}au.createRoot(document.getElementById("root")).render(u.jsx(Np.StrictMode,{children:u.jsx(P_,{children:u.jsx(G_,{children:u.jsx(z_,{children:u.jsx(p9,{children:u.jsx(sw,{})})})})})}))});export default iw();
