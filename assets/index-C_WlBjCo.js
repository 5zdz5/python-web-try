var yp=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var zg=yp((Mg,Mi)=>{function vp(e,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const l=Object.getOwnPropertyDescriptor(s,r);l&&Object.defineProperty(e,r,l.get?l:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function _p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yu={exports:{}},Hr={},vu={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rs=Symbol.for("react.element"),xp=Symbol.for("react.portal"),wp=Symbol.for("react.fragment"),jp=Symbol.for("react.strict_mode"),kp=Symbol.for("react.profiler"),Np=Symbol.for("react.provider"),Cp=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Ep=Symbol.for("react.memo"),bp=Symbol.for("react.lazy"),Ha=Symbol.iterator;function Lp(e){return e===null||typeof e!="object"?null:(e=Ha&&e[Ha]||e["@@iterator"],typeof e=="function"?e:null)}var _u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xu=Object.assign,wu={};function Mn(e,t,n){this.props=e,this.context=t,this.refs=wu,this.updater=n||_u}Mn.prototype.isReactComponent={};Mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ju(){}ju.prototype=Mn.prototype;function $i(e,t,n){this.props=e,this.context=t,this.refs=wu,this.updater=n||_u}var Ui=$i.prototype=new ju;Ui.constructor=$i;xu(Ui,Mn.prototype);Ui.isPureReactComponent=!0;var Wa=Array.isArray,ku=Object.prototype.hasOwnProperty,Bi={current:null},Nu={key:!0,ref:!0,__self:!0,__source:!0};function Cu(e,t,n){var s,r={},l=null,a=null;if(t!=null)for(s in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)ku.call(t,s)&&!Nu.hasOwnProperty(s)&&(r[s]=t[s]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var u=Array(o),c=0;c<o;c++)u[c]=arguments[c+2];r.children=u}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)r[s]===void 0&&(r[s]=o[s]);return{$$typeof:Rs,type:e,key:l,ref:a,props:r,_owner:Bi.current}}function Rp(e,t){return{$$typeof:Rs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rs}function Tp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Va=/\/+/g;function ul(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tp(""+e.key):t.toString(36)}function nr(e,t,n,s,r){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Rs:case xp:a=!0}}if(a)return a=e,r=r(a),e=s===""?"."+ul(a,0):s,Wa(r)?(n="",e!=null&&(n=e.replace(Va,"$&/")+"/"),nr(r,t,n,"",function(c){return c})):r!=null&&(Hi(r)&&(r=Rp(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Va,"$&/")+"/")+e)),t.push(r)),1;if(a=0,s=s===""?".":s+":",Wa(e))for(var o=0;o<e.length;o++){l=e[o];var u=s+ul(l,o);a+=nr(l,t,n,u,r)}else if(u=Lp(e),typeof u=="function")for(e=u.call(e),o=0;!(l=e.next()).done;)l=l.value,u=s+ul(l,o++),a+=nr(l,t,n,u,r);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ds(e,t,n){if(e==null)return e;var s=[],r=0;return nr(e,s,"","",function(l){return t.call(n,l,r++)}),s}function Op(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},sr={transition:null},Ip={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:sr,ReactCurrentOwner:Bi};function Su(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Ds,forEach:function(e,t,n){Ds(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ds(e,function(){t++}),t},toArray:function(e){return Ds(e,function(t){return t})||[]},only:function(e){if(!Hi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Mn;$.Fragment=wp;$.Profiler=kp;$.PureComponent=$i;$.StrictMode=jp;$.Suspense=Pp;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip;$.act=Su;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=xu({},e.props),r=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=Bi.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)ku.call(t,u)&&!Nu.hasOwnProperty(u)&&(s[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){o=Array(u);for(var c=0;c<u;c++)o[c]=arguments[c+2];s.children=o}return{$$typeof:Rs,type:e.type,key:r,ref:l,props:s,_owner:a}};$.createContext=function(e){return e={$$typeof:Cp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Np,_context:e},e.Consumer=e};$.createElement=Cu;$.createFactory=function(e){var t=Cu.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Sp,render:e}};$.isValidElement=Hi;$.lazy=function(e){return{$$typeof:bp,_payload:{_status:-1,_result:e},_init:Op}};$.memo=function(e,t){return{$$typeof:Ep,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=sr.transition;sr.transition={};try{e()}finally{sr.transition=t}};$.unstable_act=Su;$.useCallback=function(e,t){return ye.current.useCallback(e,t)};$.useContext=function(e){return ye.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};$.useEffect=function(e,t){return ye.current.useEffect(e,t)};$.useId=function(){return ye.current.useId()};$.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return ye.current.useMemo(e,t)};$.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};$.useRef=function(e){return ye.current.useRef(e)};$.useState=function(e){return ye.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return ye.current.useTransition()};$.version="18.3.1";vu.exports=$;var w=vu.exports;const Pu=_p(w),Ap=vp({__proto__:null,default:Pu},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=w,zp=Symbol.for("react.element"),Dp=Symbol.for("react.fragment"),Mp=Object.prototype.hasOwnProperty,$p=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Up={key:!0,ref:!0,__self:!0,__source:!0};function Eu(e,t,n){var s,r={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(s in t)Mp.call(t,s)&&!Up.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)r[s]===void 0&&(r[s]=t[s]);return{$$typeof:zp,type:e,key:l,ref:a,props:r,_owner:$p.current}}Hr.Fragment=Dp;Hr.jsx=Eu;Hr.jsxs=Eu;yu.exports=Hr;var i=yu.exports,$l={},bu={exports:{}},be={},Lu={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,A){var F=C.length;C.push(A);e:for(;0<F;){var W=F-1>>>1,K=C[W];if(0<r(K,A))C[W]=A,C[F]=K,F=W;else break e}}function n(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var A=C[0],F=C.pop();if(F!==A){C[0]=F;e:for(var W=0,K=C.length,ln=K>>>1;W<ln;){var ze=2*(W+1)-1,Ft=C[ze],Qe=ze+1,De=C[Qe];if(0>r(Ft,F))Qe<K&&0>r(De,Ft)?(C[W]=De,C[Qe]=F,W=Qe):(C[W]=Ft,C[ze]=F,W=ze);else if(Qe<K&&0>r(De,F))C[W]=De,C[Qe]=F,W=Qe;else break e}}return A}function r(C,A){var F=C.sortIndex-A.sortIndex;return F!==0?F:C.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var u=[],c=[],g=1,m=null,h=3,x=!1,_=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var A=n(c);A!==null;){if(A.callback===null)s(c);else if(A.startTime<=C)s(c),A.sortIndex=A.expirationTime,t(u,A);else break;A=n(c)}}function j(C){if(v=!1,f(C),!_)if(n(u)!==null)_=!0,I(N);else{var A=n(c);A!==null&&z(j,A.startTime-C)}}function N(C,A){_=!1,v&&(v=!1,p(b),b=-1),x=!0;var F=h;try{for(f(A),m=n(u);m!==null&&(!(m.expirationTime>A)||C&&!T());){var W=m.callback;if(typeof W=="function"){m.callback=null,h=m.priorityLevel;var K=W(m.expirationTime<=A);A=e.unstable_now(),typeof K=="function"?m.callback=K:m===n(u)&&s(u),f(A)}else s(u);m=n(u)}if(m!==null)var ln=!0;else{var ze=n(c);ze!==null&&z(j,ze.startTime-A),ln=!1}return ln}finally{m=null,h=F,x=!1}}var E=!1,R=null,b=-1,P=5,M=-1;function T(){return!(e.unstable_now()-M<P)}function ae(){if(R!==null){var C=e.unstable_now();M=C;var A=!0;try{A=R(!0,C)}finally{A?S():(E=!1,R=null)}}else E=!1}var S;if(typeof d=="function")S=function(){d(ae)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,D=O.port2;O.port1.onmessage=ae,S=function(){D.postMessage(null)}}else S=function(){y(ae,0)};function I(C){R=C,E||(E=!0,S())}function z(C,A){b=y(function(){C(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){_||x||(_=!0,I(N))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var F=h;h=A;try{return C()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,A){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var F=h;h=C;try{return A()}finally{h=F}},e.unstable_scheduleCallback=function(C,A,F){var W=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?W+F:W):F=W,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=F+K,C={id:g++,callback:A,priorityLevel:C,startTime:F,expirationTime:K,sortIndex:-1},F>W?(C.sortIndex=F,t(c,C),n(u)===null&&C===n(c)&&(v?(p(b),b=-1):v=!0,z(j,F-W))):(C.sortIndex=K,t(u,C),_||x||(_=!0,I(N))),C},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(C){var A=h;return function(){var F=h;h=A;try{return C.apply(this,arguments)}finally{h=F}}}})(Ru);Lu.exports=Ru;var Bp=Lu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp=w,Ee=Bp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tu=new Set,ps={};function tn(e,t){Rn(e,t),Rn(e+"Capture",t)}function Rn(e,t){for(ps[e]=t,e=0;e<t.length;e++)Tu.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ul=Object.prototype.hasOwnProperty,Wp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qa={},Xa={};function Vp(e){return Ul.call(Xa,e)?!0:Ul.call(Qa,e)?!1:Wp.test(e)?Xa[e]=!0:(Qa[e]=!0,!1)}function Qp(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xp(e,t,n,s){if(t===null||typeof t>"u"||Qp(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,s,r,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Vi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wi,Vi);ce[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wi,Vi);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wi,Vi);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qi(e,t,n,s){var r=ce.hasOwnProperty(t)?ce[t]:null;(r!==null?r.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xp(t,n,r,s)&&(n=null),s||r===null?Vp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,s=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var dt=Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ms=Symbol.for("react.element"),fn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),Xi=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),Ou=Symbol.for("react.provider"),Iu=Symbol.for("react.context"),Ki=Symbol.for("react.forward_ref"),Hl=Symbol.for("react.suspense"),Wl=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Au=Symbol.for("react.offscreen"),Ka=Symbol.iterator;function Wn(e){return e===null||typeof e!="object"?null:(e=Ka&&e[Ka]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,cl;function Zn(e){if(cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);cl=t&&t[1]||""}return`
`+cl+e}var dl=!1;function pl(e,t){if(!e||dl)return"";dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var s=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){s=c}e.call(t.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),l=s.stack.split(`
`),a=r.length-1,o=l.length-1;1<=a&&0<=o&&r[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==l[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==l[o]){var u=`
`+r[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=o);break}}}finally{dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function Kp(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=pl(e.type,!1),e;case 11:return e=pl(e.type.render,!1),e;case 1:return e=pl(e.type,!0),e;default:return""}}function Vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case fn:return"Portal";case Bl:return"Profiler";case Xi:return"StrictMode";case Hl:return"Suspense";case Wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Iu:return(e.displayName||"Context")+".Consumer";case Ou:return(e._context.displayName||"Context")+".Provider";case Ki:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return t=e.displayName||null,t!==null?t:Vl(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return Vl(e(t))}catch{}}return null}function qp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vl(t);case 8:return t===Xi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jp(e){var t=Fu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(a){s=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $s(e){e._valueTracker||(e._valueTracker=Jp(e))}function zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Fu(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ql(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Du(e,t){t=t.checked,t!=null&&Qi(e,"checked",t,!1)}function Xl(e,t){Du(e,t);var n=bt(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Kl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Kl(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ja(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Kl(e,t,n){(t!=="number"||hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var es=Array.isArray;function Cn(e,t,n,s){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&s&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ya(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(es(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function Mu(e,t){var n=bt(t.value),s=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function Ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$u(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Us,Uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Us=Us||document.createElement("div"),Us.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Us.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yp=["Webkit","ms","Moz","O"];Object.keys(ss).forEach(function(e){Yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ss[t]=ss[e]})});function Bu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ss.hasOwnProperty(e)&&ss[e]?(""+t).trim():t+"px"}function Hu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,r=Bu(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,r):e[n]=r}}var Gp=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(e,t){if(t){if(Gp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ei=null,Sn=null,Pn=null;function Za(e){if(e=Is(e)){if(typeof ei!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Kr(t),ei(e.stateNode,e.type,t))}}function Wu(e){Sn?Pn?Pn.push(e):Pn=[e]:Sn=e}function Vu(){if(Sn){var e=Sn,t=Pn;if(Pn=Sn=null,Za(e),t)for(e=0;e<t.length;e++)Za(t[e])}}function Qu(e,t){return e(t)}function Xu(){}var fl=!1;function Ku(e,t,n){if(fl)return e(t,n);fl=!0;try{return Qu(e,t,n)}finally{fl=!1,(Sn!==null||Pn!==null)&&(Xu(),Vu())}}function ms(e,t){var n=e.stateNode;if(n===null)return null;var s=Kr(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ti=!1;if(at)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){ti=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{ti=!1}function Zp(e,t,n,s,r,l,a,o,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var rs=!1,gr=null,yr=!1,ni=null,ef={onError:function(e){rs=!0,gr=e}};function tf(e,t,n,s,r,l,a,o,u){rs=!1,gr=null,Zp.apply(ef,arguments)}function nf(e,t,n,s,r,l,a,o,u){if(tf.apply(this,arguments),rs){if(rs){var c=gr;rs=!1,gr=null}else throw Error(k(198));yr||(yr=!0,ni=c)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function eo(e){if(nn(e)!==e)throw Error(k(188))}function sf(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,s=t;;){var r=n.return;if(r===null)break;var l=r.alternate;if(l===null){if(s=r.return,s!==null){n=s;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===n)return eo(r),e;if(l===s)return eo(r),t;l=l.sibling}throw Error(k(188))}if(n.return!==s.return)n=r,s=l;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,s=l;break}if(o===s){a=!0,s=r,n=l;break}o=o.sibling}if(!a){for(o=l.child;o;){if(o===n){a=!0,n=l,s=r;break}if(o===s){a=!0,s=l,n=r;break}o=o.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==s)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ju(e){return e=sf(e),e!==null?Yu(e):null}function Yu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yu(e);if(t!==null)return t;e=e.sibling}return null}var Gu=Ee.unstable_scheduleCallback,to=Ee.unstable_cancelCallback,rf=Ee.unstable_shouldYield,lf=Ee.unstable_requestPaint,ee=Ee.unstable_now,af=Ee.unstable_getCurrentPriorityLevel,Yi=Ee.unstable_ImmediatePriority,Zu=Ee.unstable_UserBlockingPriority,vr=Ee.unstable_NormalPriority,of=Ee.unstable_LowPriority,ec=Ee.unstable_IdlePriority,Wr=null,Ze=null;function uf(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Wr,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:pf,cf=Math.log,df=Math.LN2;function pf(e){return e>>>=0,e===0?32:31-(cf(e)/df|0)|0}var Bs=64,Hs=4194304;function ts(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,r=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?s=ts(o):(l&=a,l!==0&&(s=ts(l)))}else a=n&~r,a!==0?s=ts(a):l!==0&&(s=ts(l));if(s===0)return 0;if(t!==0&&t!==s&&!(t&r)&&(r=s&-s,l=t&-t,r>=l||r===16&&(l&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-He(t),r=1<<n,s|=e[n],t&=~r;return s}function ff(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mf(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-He(l),o=1<<a,u=r[a];u===-1?(!(o&n)||o&s)&&(r[a]=ff(o,t)):u<=t&&(e.expiredLanes|=o),l&=~o}}function si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tc(){var e=Bs;return Bs<<=1,!(Bs&4194240)&&(Bs=64),e}function ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ts(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function hf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-He(n),l=1<<r;t[r]=0,s[r]=-1,e[r]=-1,n&=~l}}function Gi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-He(n),r=1<<s;r&t|e[s]&t&&(e[s]|=t),n&=~r}}var H=0;function nc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sc,Zi,rc,lc,ic,ri=!1,Ws=[],xt=null,wt=null,jt=null,hs=new Map,gs=new Map,ht=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function no(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":hs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gs.delete(t.pointerId)}}function Qn(e,t,n,s,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:l,targetContainers:[r]},t!==null&&(t=Is(t),t!==null&&Zi(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function yf(e,t,n,s,r){switch(t){case"focusin":return xt=Qn(xt,e,t,n,s,r),!0;case"dragenter":return wt=Qn(wt,e,t,n,s,r),!0;case"mouseover":return jt=Qn(jt,e,t,n,s,r),!0;case"pointerover":var l=r.pointerId;return hs.set(l,Qn(hs.get(l)||null,e,t,n,s,r)),!0;case"gotpointercapture":return l=r.pointerId,gs.set(l,Qn(gs.get(l)||null,e,t,n,s,r)),!0}return!1}function ac(e){var t=Wt(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=qu(n),t!==null){e.blockedOn=t,ic(e.priority,function(){rc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=li(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Zl=s,n.target.dispatchEvent(s),Zl=null}else return t=Is(n),t!==null&&Zi(t),e.blockedOn=n,!1;t.shift()}return!0}function so(e,t,n){rr(e)&&n.delete(t)}function vf(){ri=!1,xt!==null&&rr(xt)&&(xt=null),wt!==null&&rr(wt)&&(wt=null),jt!==null&&rr(jt)&&(jt=null),hs.forEach(so),gs.forEach(so)}function Xn(e,t){e.blockedOn===t&&(e.blockedOn=null,ri||(ri=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,vf)))}function ys(e){function t(r){return Xn(r,e)}if(0<Ws.length){Xn(Ws[0],e);for(var n=1;n<Ws.length;n++){var s=Ws[n];s.blockedOn===e&&(s.blockedOn=null)}}for(xt!==null&&Xn(xt,e),wt!==null&&Xn(wt,e),jt!==null&&Xn(jt,e),hs.forEach(t),gs.forEach(t),n=0;n<ht.length;n++)s=ht[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<ht.length&&(n=ht[0],n.blockedOn===null);)ac(n),n.blockedOn===null&&ht.shift()}var En=dt.ReactCurrentBatchConfig,xr=!0;function _f(e,t,n,s){var r=H,l=En.transition;En.transition=null;try{H=1,ea(e,t,n,s)}finally{H=r,En.transition=l}}function xf(e,t,n,s){var r=H,l=En.transition;En.transition=null;try{H=4,ea(e,t,n,s)}finally{H=r,En.transition=l}}function ea(e,t,n,s){if(xr){var r=li(e,t,n,s);if(r===null)Nl(e,t,s,wr,n),no(e,s);else if(yf(r,e,t,n,s))s.stopPropagation();else if(no(e,s),t&4&&-1<gf.indexOf(e)){for(;r!==null;){var l=Is(r);if(l!==null&&sc(l),l=li(e,t,n,s),l===null&&Nl(e,t,s,wr,n),l===r)break;r=l}r!==null&&s.stopPropagation()}else Nl(e,t,s,null,n)}}var wr=null;function li(e,t,n,s){if(wr=null,e=Ji(s),e=Wt(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wr=e,null}function oc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(af()){case Yi:return 1;case Zu:return 4;case vr:case of:return 16;case ec:return 536870912;default:return 16}default:return 16}}var yt=null,ta=null,lr=null;function uc(){if(lr)return lr;var e,t=ta,n=t.length,s,r="value"in yt?yt.value:yt.textContent,l=r.length;for(e=0;e<n&&t[e]===r[e];e++);var a=n-e;for(s=1;s<=a&&t[n-s]===r[l-s];s++);return lr=r.slice(e,1<s?1-s:void 0)}function ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function ro(){return!1}function Le(e){function t(n,s,r,l,a){this._reactName=n,this._targetInst=r,this.type=s,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Vs:ro,this.isPropagationStopped=ro,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=Le($n),Os=G({},$n,{view:0,detail:0}),wf=Le(Os),hl,gl,Kn,Vr=G({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(hl=e.screenX-Kn.screenX,gl=e.screenY-Kn.screenY):gl=hl=0,Kn=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:gl}}),lo=Le(Vr),jf=G({},Vr,{dataTransfer:0}),kf=Le(jf),Nf=G({},Os,{relatedTarget:0}),yl=Le(Nf),Cf=G({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Sf=Le(Cf),Pf=G({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ef=Le(Pf),bf=G({},$n,{data:0}),io=Le(bf),Lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Of(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tf[e])?!!t[e]:!1}function sa(){return Of}var If=G({},Os,{key:function(e){if(e.key){var t=Lf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(e){return e.type==="keypress"?ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Af=Le(If),Ff=G({},Vr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ao=Le(Ff),zf=G({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),Df=Le(zf),Mf=G({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),$f=Le(Mf),Uf=G({},Vr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bf=Le(Uf),Hf=[9,13,27,32],ra=at&&"CompositionEvent"in window,ls=null;at&&"documentMode"in document&&(ls=document.documentMode);var Wf=at&&"TextEvent"in window&&!ls,cc=at&&(!ra||ls&&8<ls&&11>=ls),oo=" ",uo=!1;function dc(e,t){switch(e){case"keyup":return Hf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Vf(e,t){switch(e){case"compositionend":return pc(t);case"keypress":return t.which!==32?null:(uo=!0,oo);case"textInput":return e=t.data,e===oo&&uo?null:e;default:return null}}function Qf(e,t){if(hn)return e==="compositionend"||!ra&&dc(e,t)?(e=uc(),lr=ta=yt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cc&&t.locale!=="ko"?null:t.data;default:return null}}var Xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xf[e.type]:t==="textarea"}function fc(e,t,n,s){Wu(s),t=jr(t,"onChange"),0<t.length&&(n=new na("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var is=null,vs=null;function Kf(e){Nc(e,0)}function Qr(e){var t=vn(e);if(zu(t))return e}function qf(e,t){if(e==="change")return t}var mc=!1;if(at){var vl;if(at){var _l="oninput"in document;if(!_l){var po=document.createElement("div");po.setAttribute("oninput","return;"),_l=typeof po.oninput=="function"}vl=_l}else vl=!1;mc=vl&&(!document.documentMode||9<document.documentMode)}function fo(){is&&(is.detachEvent("onpropertychange",hc),vs=is=null)}function hc(e){if(e.propertyName==="value"&&Qr(vs)){var t=[];fc(t,vs,e,Ji(e)),Ku(Kf,t)}}function Jf(e,t,n){e==="focusin"?(fo(),is=t,vs=n,is.attachEvent("onpropertychange",hc)):e==="focusout"&&fo()}function Yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qr(vs)}function Gf(e,t){if(e==="click")return Qr(t)}function Zf(e,t){if(e==="input"||e==="change")return Qr(t)}function em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:em;function _s(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var r=n[s];if(!Ul.call(t,r)||!Ve(e[r],t[r]))return!1}return!0}function mo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ho(e,t){var n=mo(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mo(n)}}function gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yc(){for(var e=window,t=hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hr(e.document)}return t}function la(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tm(e){var t=yc(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gc(n.ownerDocument.documentElement,n)){if(s!==null&&la(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,l=Math.min(s.start,r);s=s.end===void 0?l:Math.min(s.end,r),!e.extend&&l>s&&(r=s,s=l,l=r),r=ho(n,l);var a=ho(n,s);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),l>s?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nm=at&&"documentMode"in document&&11>=document.documentMode,gn=null,ii=null,as=null,ai=!1;function go(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ai||gn==null||gn!==hr(s)||(s=gn,"selectionStart"in s&&la(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),as&&_s(as,s)||(as=s,s=jr(ii,"onSelect"),0<s.length&&(t=new na("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=gn)))}function Qs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionend:Qs("Transition","TransitionEnd")},xl={},vc={};at&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Xr(e){if(xl[e])return xl[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vc)return xl[e]=t[n];return e}var _c=Xr("animationend"),xc=Xr("animationiteration"),wc=Xr("animationstart"),jc=Xr("transitionend"),kc=new Map,yo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){kc.set(e,t),tn(t,[e])}for(var wl=0;wl<yo.length;wl++){var jl=yo[wl],sm=jl.toLowerCase(),rm=jl[0].toUpperCase()+jl.slice(1);Tt(sm,"on"+rm)}Tt(_c,"onAnimationEnd");Tt(xc,"onAnimationIteration");Tt(wc,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(jc,"onTransitionEnd");Rn("onMouseEnter",["mouseout","mouseover"]);Rn("onMouseLeave",["mouseout","mouseover"]);Rn("onPointerEnter",["pointerout","pointerover"]);Rn("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lm=new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));function vo(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,nf(s,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],r=s.event;s=s.listeners;e:{var l=void 0;if(t)for(var a=s.length-1;0<=a;a--){var o=s[a],u=o.instance,c=o.currentTarget;if(o=o.listener,u!==l&&r.isPropagationStopped())break e;vo(r,o,c),l=u}else for(a=0;a<s.length;a++){if(o=s[a],u=o.instance,c=o.currentTarget,o=o.listener,u!==l&&r.isPropagationStopped())break e;vo(r,o,c),l=u}}}if(yr)throw e=ni,yr=!1,ni=null,e}function Q(e,t){var n=t[pi];n===void 0&&(n=t[pi]=new Set);var s=e+"__bubble";n.has(s)||(Cc(t,e,2,!1),n.add(s))}function kl(e,t,n){var s=0;t&&(s|=4),Cc(n,e,s,t)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function xs(e){if(!e[Xs]){e[Xs]=!0,Tu.forEach(function(n){n!=="selectionchange"&&(lm.has(n)||kl(n,!1,e),kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xs]||(t[Xs]=!0,kl("selectionchange",!1,t))}}function Cc(e,t,n,s){switch(oc(t)){case 1:var r=_f;break;case 4:r=xf;break;default:r=ea}n=r.bind(null,t,n,e),r=void 0,!ti||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Nl(e,t,n,s,r){var l=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var o=s.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=s.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Wt(o),a===null)return;if(u=a.tag,u===5||u===6){s=l=a;continue e}o=o.parentNode}}s=s.return}Ku(function(){var c=l,g=Ji(n),m=[];e:{var h=kc.get(e);if(h!==void 0){var x=na,_=e;switch(e){case"keypress":if(ir(n)===0)break e;case"keydown":case"keyup":x=Af;break;case"focusin":_="focus",x=yl;break;case"focusout":_="blur",x=yl;break;case"beforeblur":case"afterblur":x=yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Df;break;case _c:case xc:case wc:x=Sf;break;case jc:x=$f;break;case"scroll":x=wf;break;case"wheel":x=Bf;break;case"copy":case"cut":case"paste":x=Ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ao}var v=(t&4)!==0,y=!v&&e==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var d=c,f;d!==null;){f=d;var j=f.stateNode;if(f.tag===5&&j!==null&&(f=j,p!==null&&(j=ms(d,p),j!=null&&v.push(ws(d,j,f)))),y)break;d=d.return}0<v.length&&(h=new x(h,_,null,n,g),m.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Zl&&(_=n.relatedTarget||n.fromElement)&&(Wt(_)||_[ot]))break e;if((x||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,x?(_=n.relatedTarget||n.toElement,x=c,_=_?Wt(_):null,_!==null&&(y=nn(_),_!==y||_.tag!==5&&_.tag!==6)&&(_=null)):(x=null,_=c),x!==_)){if(v=lo,j="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=ao,j="onPointerLeave",p="onPointerEnter",d="pointer"),y=x==null?h:vn(x),f=_==null?h:vn(_),h=new v(j,d+"leave",x,n,g),h.target=y,h.relatedTarget=f,j=null,Wt(g)===c&&(v=new v(p,d+"enter",_,n,g),v.target=f,v.relatedTarget=y,j=v),y=j,x&&_)t:{for(v=x,p=_,d=0,f=v;f;f=an(f))d++;for(f=0,j=p;j;j=an(j))f++;for(;0<d-f;)v=an(v),d--;for(;0<f-d;)p=an(p),f--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=an(v),p=an(p)}v=null}else v=null;x!==null&&_o(m,h,x,v,!1),_!==null&&y!==null&&_o(m,y,_,v,!0)}}e:{if(h=c?vn(c):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var N=qf;else if(co(h))if(mc)N=Zf;else{N=Yf;var E=Jf}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Gf);if(N&&(N=N(e,c))){fc(m,N,n,g);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Kl(h,"number",h.value)}switch(E=c?vn(c):window,e){case"focusin":(co(E)||E.contentEditable==="true")&&(gn=E,ii=c,as=null);break;case"focusout":as=ii=gn=null;break;case"mousedown":ai=!0;break;case"contextmenu":case"mouseup":case"dragend":ai=!1,go(m,n,g);break;case"selectionchange":if(nm)break;case"keydown":case"keyup":go(m,n,g)}var R;if(ra)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else hn?dc(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(cc&&n.locale!=="ko"&&(hn||b!=="onCompositionStart"?b==="onCompositionEnd"&&hn&&(R=uc()):(yt=g,ta="value"in yt?yt.value:yt.textContent,hn=!0)),E=jr(c,b),0<E.length&&(b=new io(b,e,null,n,g),m.push({event:b,listeners:E}),R?b.data=R:(R=pc(n),R!==null&&(b.data=R)))),(R=Wf?Vf(e,n):Qf(e,n))&&(c=jr(c,"onBeforeInput"),0<c.length&&(g=new io("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=R))}Nc(m,t)})}function ws(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jr(e,t){for(var n=t+"Capture",s=[];e!==null;){var r=e,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=ms(e,n),l!=null&&s.unshift(ws(e,l,r)),l=ms(e,t),l!=null&&s.push(ws(e,l,r))),e=e.return}return s}function an(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _o(e,t,n,s,r){for(var l=t._reactName,a=[];n!==null&&n!==s;){var o=n,u=o.alternate,c=o.stateNode;if(u!==null&&u===s)break;o.tag===5&&c!==null&&(o=c,r?(u=ms(n,l),u!=null&&a.unshift(ws(n,u,o))):r||(u=ms(n,l),u!=null&&a.push(ws(n,u,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var im=/\r\n?/g,am=/\u0000|\uFFFD/g;function xo(e){return(typeof e=="string"?e:""+e).replace(im,`
`).replace(am,"")}function Ks(e,t,n){if(t=xo(t),xo(e)!==t&&n)throw Error(k(425))}function kr(){}var oi=null,ui=null;function ci(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var di=typeof setTimeout=="function"?setTimeout:void 0,om=typeof clearTimeout=="function"?clearTimeout:void 0,wo=typeof Promise=="function"?Promise:void 0,um=typeof queueMicrotask=="function"?queueMicrotask:typeof wo<"u"?function(e){return wo.resolve(null).then(e).catch(cm)}:di;function cm(e){setTimeout(function(){throw e})}function Cl(e,t){var n=t,s=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(s===0){e.removeChild(r),ys(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=r}while(n);ys(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Un,js="__reactProps$"+Un,ot="__reactContainer$"+Un,pi="__reactEvents$"+Un,dm="__reactListeners$"+Un,pm="__reactHandles$"+Un;function Wt(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jo(e);e!==null;){if(n=e[Ge])return n;e=jo(e)}return t}e=n,n=e.parentNode}return null}function Is(e){return e=e[Ge]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Kr(e){return e[js]||null}var fi=[],_n=-1;function Ot(e){return{current:e}}function X(e){0>_n||(e.current=fi[_n],fi[_n]=null,_n--)}function V(e,t){_n++,fi[_n]=e.current,e.current=t}var Lt={},me=Ot(Lt),we=Ot(!1),Jt=Lt;function Tn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in n)r[l]=t[l];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function je(e){return e=e.childContextTypes,e!=null}function Nr(){X(we),X(me)}function ko(e,t,n){if(me.current!==Lt)throw Error(k(168));V(me,t),V(we,n)}function Sc(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var r in s)if(!(r in t))throw Error(k(108,qp(e)||"Unknown",r));return G({},n,s)}function Cr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Jt=me.current,V(me,e),V(we,we.current),!0}function No(e,t,n){var s=e.stateNode;if(!s)throw Error(k(169));n?(e=Sc(e,t,Jt),s.__reactInternalMemoizedMergedChildContext=e,X(we),X(me),V(me,e)):X(we),V(we,n)}var st=null,qr=!1,Sl=!1;function Pc(e){st===null?st=[e]:st.push(e)}function fm(e){qr=!0,Pc(e)}function It(){if(!Sl&&st!==null){Sl=!0;var e=0,t=H;try{var n=st;for(H=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}st=null,qr=!1}catch(r){throw st!==null&&(st=st.slice(e+1)),Gu(Yi,It),r}finally{H=t,Sl=!1}}return null}var xn=[],wn=0,Sr=null,Pr=0,Re=[],Te=0,Yt=null,rt=1,lt="";function $t(e,t){xn[wn++]=Pr,xn[wn++]=Sr,Sr=e,Pr=t}function Ec(e,t,n){Re[Te++]=rt,Re[Te++]=lt,Re[Te++]=Yt,Yt=e;var s=rt;e=lt;var r=32-He(s)-1;s&=~(1<<r),n+=1;var l=32-He(t)+r;if(30<l){var a=r-r%5;l=(s&(1<<a)-1).toString(32),s>>=a,r-=a,rt=1<<32-He(t)+r|n<<r|s,lt=l+e}else rt=1<<l|n<<r|s,lt=e}function ia(e){e.return!==null&&($t(e,1),Ec(e,1,0))}function aa(e){for(;e===Sr;)Sr=xn[--wn],xn[wn]=null,Pr=xn[--wn],xn[wn]=null;for(;e===Yt;)Yt=Re[--Te],Re[Te]=null,lt=Re[--Te],Re[Te]=null,rt=Re[--Te],Re[Te]=null}var Se=null,Ce=null,q=!1,Be=null;function bc(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Co(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ce=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yt!==null?{id:rt,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,Ce=null,!0):!1;default:return!1}}function mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hi(e){if(q){var t=Ce;if(t){var n=t;if(!Co(e,t)){if(mi(e))throw Error(k(418));t=kt(n.nextSibling);var s=Se;t&&Co(e,t)?bc(s,n):(e.flags=e.flags&-4097|2,q=!1,Se=e)}}else{if(mi(e))throw Error(k(418));e.flags=e.flags&-4097|2,q=!1,Se=e}}}function So(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function qs(e){if(e!==Se)return!1;if(!q)return So(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ci(e.type,e.memoizedProps)),t&&(t=Ce)){if(mi(e))throw Lc(),Error(k(418));for(;t;)bc(e,t),t=kt(t.nextSibling)}if(So(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Se?kt(e.stateNode.nextSibling):null;return!0}function Lc(){for(var e=Ce;e;)e=kt(e.nextSibling)}function On(){Ce=Se=null,q=!1}function oa(e){Be===null?Be=[e]:Be.push(e)}var mm=dt.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var s=n.stateNode}if(!s)throw Error(k(147,e));var r=s,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var o=r.refs;a===null?delete o[l]:o[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Js(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Po(e){var t=e._init;return t(e._payload)}function Rc(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function s(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function r(p,d){return p=Pt(p,d),p.index=0,p.sibling=null,p}function l(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,d,f,j){return d===null||d.tag!==6?(d=Ol(f,p.mode,j),d.return=p,d):(d=r(d,f),d.return=p,d)}function u(p,d,f,j){var N=f.type;return N===mn?g(p,d,f.props.children,j,f.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ft&&Po(N)===d.type)?(j=r(d,f.props),j.ref=qn(p,d,f),j.return=p,j):(j=fr(f.type,f.key,f.props,null,p.mode,j),j.ref=qn(p,d,f),j.return=p,j)}function c(p,d,f,j){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Il(f,p.mode,j),d.return=p,d):(d=r(d,f.children||[]),d.return=p,d)}function g(p,d,f,j,N){return d===null||d.tag!==7?(d=qt(f,p.mode,j,N),d.return=p,d):(d=r(d,f),d.return=p,d)}function m(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ol(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ms:return f=fr(d.type,d.key,d.props,null,p.mode,f),f.ref=qn(p,null,d),f.return=p,f;case fn:return d=Il(d,p.mode,f),d.return=p,d;case ft:var j=d._init;return m(p,j(d._payload),f)}if(es(d)||Wn(d))return d=qt(d,p.mode,f,null),d.return=p,d;Js(p,d)}return null}function h(p,d,f,j){var N=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:o(p,d,""+f,j);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ms:return f.key===N?u(p,d,f,j):null;case fn:return f.key===N?c(p,d,f,j):null;case ft:return N=f._init,h(p,d,N(f._payload),j)}if(es(f)||Wn(f))return N!==null?null:g(p,d,f,j,null);Js(p,f)}return null}function x(p,d,f,j,N){if(typeof j=="string"&&j!==""||typeof j=="number")return p=p.get(f)||null,o(d,p,""+j,N);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ms:return p=p.get(j.key===null?f:j.key)||null,u(d,p,j,N);case fn:return p=p.get(j.key===null?f:j.key)||null,c(d,p,j,N);case ft:var E=j._init;return x(p,d,f,E(j._payload),N)}if(es(j)||Wn(j))return p=p.get(f)||null,g(d,p,j,N,null);Js(d,j)}return null}function _(p,d,f,j){for(var N=null,E=null,R=d,b=d=0,P=null;R!==null&&b<f.length;b++){R.index>b?(P=R,R=null):P=R.sibling;var M=h(p,R,f[b],j);if(M===null){R===null&&(R=P);break}e&&R&&M.alternate===null&&t(p,R),d=l(M,d,b),E===null?N=M:E.sibling=M,E=M,R=P}if(b===f.length)return n(p,R),q&&$t(p,b),N;if(R===null){for(;b<f.length;b++)R=m(p,f[b],j),R!==null&&(d=l(R,d,b),E===null?N=R:E.sibling=R,E=R);return q&&$t(p,b),N}for(R=s(p,R);b<f.length;b++)P=x(R,p,b,f[b],j),P!==null&&(e&&P.alternate!==null&&R.delete(P.key===null?b:P.key),d=l(P,d,b),E===null?N=P:E.sibling=P,E=P);return e&&R.forEach(function(T){return t(p,T)}),q&&$t(p,b),N}function v(p,d,f,j){var N=Wn(f);if(typeof N!="function")throw Error(k(150));if(f=N.call(f),f==null)throw Error(k(151));for(var E=N=null,R=d,b=d=0,P=null,M=f.next();R!==null&&!M.done;b++,M=f.next()){R.index>b?(P=R,R=null):P=R.sibling;var T=h(p,R,M.value,j);if(T===null){R===null&&(R=P);break}e&&R&&T.alternate===null&&t(p,R),d=l(T,d,b),E===null?N=T:E.sibling=T,E=T,R=P}if(M.done)return n(p,R),q&&$t(p,b),N;if(R===null){for(;!M.done;b++,M=f.next())M=m(p,M.value,j),M!==null&&(d=l(M,d,b),E===null?N=M:E.sibling=M,E=M);return q&&$t(p,b),N}for(R=s(p,R);!M.done;b++,M=f.next())M=x(R,p,b,M.value,j),M!==null&&(e&&M.alternate!==null&&R.delete(M.key===null?b:M.key),d=l(M,d,b),E===null?N=M:E.sibling=M,E=M);return e&&R.forEach(function(ae){return t(p,ae)}),q&&$t(p,b),N}function y(p,d,f,j){if(typeof f=="object"&&f!==null&&f.type===mn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ms:e:{for(var N=f.key,E=d;E!==null;){if(E.key===N){if(N=f.type,N===mn){if(E.tag===7){n(p,E.sibling),d=r(E,f.props.children),d.return=p,p=d;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ft&&Po(N)===E.type){n(p,E.sibling),d=r(E,f.props),d.ref=qn(p,E,f),d.return=p,p=d;break e}n(p,E);break}else t(p,E);E=E.sibling}f.type===mn?(d=qt(f.props.children,p.mode,j,f.key),d.return=p,p=d):(j=fr(f.type,f.key,f.props,null,p.mode,j),j.ref=qn(p,d,f),j.return=p,p=j)}return a(p);case fn:e:{for(E=f.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=r(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Il(f,p.mode,j),d.return=p,p=d}return a(p);case ft:return E=f._init,y(p,d,E(f._payload),j)}if(es(f))return _(p,d,f,j);if(Wn(f))return v(p,d,f,j);Js(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=r(d,f),d.return=p,p=d):(n(p,d),d=Ol(f,p.mode,j),d.return=p,p=d),a(p)):n(p,d)}return y}var In=Rc(!0),Tc=Rc(!1),Er=Ot(null),br=null,jn=null,ua=null;function ca(){ua=jn=br=null}function da(e){var t=Er.current;X(Er),e._currentValue=t}function gi(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function bn(e,t){br=e,ua=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(ua!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(br===null)throw Error(k(308));jn=e,br.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var Vt=null;function pa(e){Vt===null?Vt=[e]:Vt.push(e)}function Oc(e,t,n,s){var r=t.interleaved;return r===null?(n.next=n,pa(t)):(n.next=r.next,r.next=n),t.interleaved=n,ut(e,s)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ic(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,B&2){var r=s.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),s.pending=t,ut(e,n)}return r=s.interleaved,r===null?(t.next=t,pa(s)):(t.next=r.next,r.next=t),s.interleaved=t,ut(e,n)}function ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Gi(e,n)}}function Eo(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var r=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?r=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?r=l=t:l=l.next=t}else r=l=t;n={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Lr(e,t,n,s){var r=e.updateQueue;mt=!1;var l=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var u=o,c=u.next;u.next=null,a===null?l=c:a.next=c,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==a&&(o===null?g.firstBaseUpdate=c:o.next=c,g.lastBaseUpdate=u))}if(l!==null){var m=r.baseState;a=0,g=c=u=null,o=l;do{var h=o.lane,x=o.eventTime;if((s&h)===h){g!==null&&(g=g.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=e,v=o;switch(h=t,x=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){m=_.call(x,m,h);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(x,m,h):_,h==null)break e;m=G({},m,h);break e;case 2:mt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else x={eventTime:x,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(c=g=x,u=m):g=g.next=x,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(g===null&&(u=m),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=g,t=r.shared.interleaved,t!==null){r=t;do a|=r.lane,r=r.next;while(r!==t)}else l===null&&(r.shared.lanes=0);Zt|=a,e.lanes=a,e.memoizedState=m}}function bo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],r=s.callback;if(r!==null){if(s.callback=null,s=n,typeof r!="function")throw Error(k(191,r));r.call(s)}}}var As={},et=Ot(As),ks=Ot(As),Ns=Ot(As);function Qt(e){if(e===As)throw Error(k(174));return e}function ma(e,t){switch(V(Ns,t),V(ks,e),V(et,As),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jl(t,e)}X(et),V(et,t)}function An(){X(et),X(ks),X(Ns)}function Ac(e){Qt(Ns.current);var t=Qt(et.current),n=Jl(t,e.type);t!==n&&(V(ks,e),V(et,n))}function ha(e){ks.current===e&&(X(et),X(ks))}var J=Ot(0);function Rr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pl=[];function ga(){for(var e=0;e<Pl.length;e++)Pl[e]._workInProgressVersionPrimary=null;Pl.length=0}var or=dt.ReactCurrentDispatcher,El=dt.ReactCurrentBatchConfig,Gt=0,Y=null,se=null,le=null,Tr=!1,os=!1,Cs=0,hm=0;function de(){throw Error(k(321))}function ya(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function va(e,t,n,s,r,l){if(Gt=l,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,or.current=e===null||e.memoizedState===null?_m:xm,e=n(s,r),os){l=0;do{if(os=!1,Cs=0,25<=l)throw Error(k(301));l+=1,le=se=null,t.updateQueue=null,or.current=wm,e=n(s,r)}while(os)}if(or.current=Or,t=se!==null&&se.next!==null,Gt=0,le=se=Y=null,Tr=!1,t)throw Error(k(300));return e}function _a(){var e=Cs!==0;return Cs=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Fe(){if(se===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,se=e;else{if(e===null)throw Error(k(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function Ss(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=Fe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var s=se,r=s.baseQueue,l=n.pending;if(l!==null){if(r!==null){var a=r.next;r.next=l.next,l.next=a}s.baseQueue=r=l,n.pending=null}if(r!==null){l=r.next,s=s.baseState;var o=a=null,u=null,c=l;do{var g=c.lane;if((Gt&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(o=u=m,a=s):u=u.next=m,Y.lanes|=g,Zt|=g}c=c.next}while(c!==null&&c!==l);u===null?a=s:u.next=o,Ve(s,t.memoizedState)||(xe=!0),t.memoizedState=s,t.baseState=a,t.baseQueue=u,n.lastRenderedState=s}if(e=n.interleaved,e!==null){r=e;do l=r.lane,Y.lanes|=l,Zt|=l,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ll(e){var t=Fe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var s=n.dispatch,r=n.pending,l=t.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do l=e(l,a.action),a=a.next;while(a!==r);Ve(l,t.memoizedState)||(xe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,s]}function Fc(){}function zc(e,t){var n=Y,s=Fe(),r=t(),l=!Ve(s.memoizedState,r);if(l&&(s.memoizedState=r,xe=!0),s=s.queue,xa($c.bind(null,n,s,e),[e]),s.getSnapshot!==t||l||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Ps(9,Mc.bind(null,n,s,r,t),void 0,null),ie===null)throw Error(k(349));Gt&30||Dc(n,t,r)}return r}function Dc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mc(e,t,n,s){t.value=n,t.getSnapshot=s,Uc(t)&&Bc(e)}function $c(e,t,n){return n(function(){Uc(t)&&Bc(e)})}function Uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function Bc(e){var t=ut(e,1);t!==null&&We(t,e,1,-1)}function Lo(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,Y,e),[t.memoizedState,e]}function Ps(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function Hc(){return Fe().memoizedState}function ur(e,t,n,s){var r=Ke();Y.flags|=e,r.memoizedState=Ps(1|t,n,void 0,s===void 0?null:s)}function Jr(e,t,n,s){var r=Fe();s=s===void 0?null:s;var l=void 0;if(se!==null){var a=se.memoizedState;if(l=a.destroy,s!==null&&ya(s,a.deps)){r.memoizedState=Ps(t,n,l,s);return}}Y.flags|=e,r.memoizedState=Ps(1|t,n,l,s)}function Ro(e,t){return ur(8390656,8,e,t)}function xa(e,t){return Jr(2048,8,e,t)}function Wc(e,t){return Jr(4,2,e,t)}function Vc(e,t){return Jr(4,4,e,t)}function Qc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xc(e,t,n){return n=n!=null?n.concat([e]):null,Jr(4,4,Qc.bind(null,t,e),n)}function wa(){}function Kc(e,t){var n=Fe();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&ya(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function qc(e,t){var n=Fe();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&ya(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Jc(e,t,n){return Gt&21?(Ve(n,t)||(n=tc(),Y.lanes|=n,Zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function gm(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var s=El.transition;El.transition={};try{e(!1),t()}finally{H=n,El.transition=s}}function Yc(){return Fe().memoizedState}function ym(e,t,n){var s=St(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Gc(e))Zc(t,n);else if(n=Oc(e,t,n,s),n!==null){var r=ge();We(n,e,s,r),ed(n,t,s)}}function vm(e,t,n){var s=St(e),r={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))Zc(t,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,o=l(a,n);if(r.hasEagerState=!0,r.eagerState=o,Ve(o,a)){var u=t.interleaved;u===null?(r.next=r,pa(t)):(r.next=u.next,u.next=r),t.interleaved=r;return}}catch{}finally{}n=Oc(e,t,r,s),n!==null&&(r=ge(),We(n,e,s,r),ed(n,t,s))}}function Gc(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Zc(e,t){os=Tr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ed(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Gi(e,n)}}var Or={readContext:Ae,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},_m={readContext:Ae,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ro,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ur(4194308,4,Qc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return ur(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=Ke();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=ym.bind(null,Y,e),[s.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Lo,useDebugValue:wa,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Lo(!1),t=e[0];return e=gm.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=Y,r=Ke();if(q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ie===null)throw Error(k(349));Gt&30||Dc(s,t,n)}r.memoizedState=n;var l={value:n,getSnapshot:t};return r.queue=l,Ro($c.bind(null,s,l,e),[e]),s.flags|=2048,Ps(9,Mc.bind(null,s,l,n,t),void 0,null),n},useId:function(){var e=Ke(),t=ie.identifierPrefix;if(q){var n=lt,s=rt;n=(s&~(1<<32-He(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xm={readContext:Ae,useCallback:Kc,useContext:Ae,useEffect:xa,useImperativeHandle:Xc,useInsertionEffect:Wc,useLayoutEffect:Vc,useMemo:qc,useReducer:bl,useRef:Hc,useState:function(){return bl(Ss)},useDebugValue:wa,useDeferredValue:function(e){var t=Fe();return Jc(t,se.memoizedState,e)},useTransition:function(){var e=bl(Ss)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:zc,useId:Yc,unstable_isNewReconciler:!1},wm={readContext:Ae,useCallback:Kc,useContext:Ae,useEffect:xa,useImperativeHandle:Xc,useInsertionEffect:Wc,useLayoutEffect:Vc,useMemo:qc,useReducer:Ll,useRef:Hc,useState:function(){return Ll(Ss)},useDebugValue:wa,useDeferredValue:function(e){var t=Fe();return se===null?t.memoizedState=e:Jc(t,se.memoizedState,e)},useTransition:function(){var e=Ll(Ss)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:zc,useId:Yc,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yi(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yr={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=ge(),r=St(e),l=it(s,r);l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,r),t!==null&&(We(t,e,r,s),ar(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=ge(),r=St(e),l=it(s,r);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,r),t!==null&&(We(t,e,r,s),ar(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),s=St(e),r=it(n,s);r.tag=2,t!=null&&(r.callback=t),t=Nt(e,r,s),t!==null&&(We(t,e,s,n),ar(t,e,s))}};function To(e,t,n,s,r,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,l,a):t.prototype&&t.prototype.isPureReactComponent?!_s(n,s)||!_s(r,l):!0}function td(e,t,n){var s=!1,r=Lt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ae(l):(r=je(t)?Jt:me.current,s=t.contextTypes,l=(s=s!=null)?Tn(e,r):Lt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yr,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),t}function Oo(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&Yr.enqueueReplaceState(t,t.state,null)}function vi(e,t,n,s){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},fa(e);var l=t.contextType;typeof l=="object"&&l!==null?r.context=Ae(l):(l=je(t)?Jt:me.current,r.context=Tn(e,l)),r.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(yi(e,t,l,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Yr.enqueueReplaceState(r,r.state,null),Lr(e,n,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",s=t;do n+=Kp(s),s=s.return;while(s);var r=n}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:r,digest:null}}function Rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jm=typeof WeakMap=="function"?WeakMap:Map;function nd(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){Ar||(Ar=!0,bi=s),_i(e,t)},n}function sd(e,t,n){n=it(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=t.value;n.payload=function(){return s(r)},n.callback=function(){_i(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){_i(e,t),typeof s!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Io(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new jm;var r=new Set;s.set(t,r)}else r=s.get(t),r===void 0&&(r=new Set,s.set(t,r));r.has(n)||(r.add(n),e=Fm.bind(null,e,t,n),t.then(e,e))}function Ao(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fo(e,t,n,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var km=dt.ReactCurrentOwner,xe=!1;function he(e,t,n,s){t.child=e===null?Tc(t,null,n,s):In(t,e.child,n,s)}function zo(e,t,n,s,r){n=n.render;var l=t.ref;return bn(t,r),s=va(e,t,n,s,l,r),n=_a(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,ct(e,t,r)):(q&&n&&ia(t),t.flags|=1,he(e,t,s,r),t.child)}function Do(e,t,n,s,r){if(e===null){var l=n.type;return typeof l=="function"&&!ba(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,rd(e,t,l,s,r)):(e=fr(n.type,null,s,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&r)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:_s,n(a,s)&&e.ref===t.ref)return ct(e,t,r)}return t.flags|=1,e=Pt(l,s),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,n,s,r){if(e!==null){var l=e.memoizedProps;if(_s(l,s)&&e.ref===t.ref)if(xe=!1,t.pendingProps=s=l,(e.lanes&r)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,ct(e,t,r)}return xi(e,t,n,s,r)}function ld(e,t,n){var s=t.pendingProps,r=s.children,l=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Nn,Ne),Ne|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Nn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=l!==null?l.baseLanes:n,V(Nn,Ne),Ne|=s}else l!==null?(s=l.baseLanes|n,t.memoizedState=null):s=n,V(Nn,Ne),Ne|=s;return he(e,t,r,n),t.child}function id(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xi(e,t,n,s,r){var l=je(n)?Jt:me.current;return l=Tn(t,l),bn(t,r),n=va(e,t,n,s,l,r),s=_a(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,ct(e,t,r)):(q&&s&&ia(t),t.flags|=1,he(e,t,n,r),t.child)}function Mo(e,t,n,s,r){if(je(n)){var l=!0;Cr(t)}else l=!1;if(bn(t,r),t.stateNode===null)cr(e,t),td(t,n,s),vi(t,n,s,r),s=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=je(n)?Jt:me.current,c=Tn(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==s||u!==c)&&Oo(t,a,s,c),mt=!1;var h=t.memoizedState;a.state=h,Lr(t,s,a,r),u=t.memoizedState,o!==s||h!==u||we.current||mt?(typeof g=="function"&&(yi(t,n,g,s),u=t.memoizedState),(o=mt||To(t,n,o,s,h,u,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=u),a.props=s,a.state=u,a.context=c,s=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{a=t.stateNode,Ic(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:$e(t.type,o),a.props=c,m=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ae(u):(u=je(n)?Jt:me.current,u=Tn(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||h!==u)&&Oo(t,a,s,u),mt=!1,h=t.memoizedState,a.state=h,Lr(t,s,a,r);var _=t.memoizedState;o!==m||h!==_||we.current||mt?(typeof x=="function"&&(yi(t,n,x,s),_=t.memoizedState),(c=mt||To(t,n,c,s,h,_,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,_,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,_,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=_),a.props=s,a.state=_,a.context=u,s=c):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),s=!1)}return wi(e,t,n,s,l,r)}function wi(e,t,n,s,r,l){id(e,t);var a=(t.flags&128)!==0;if(!s&&!a)return r&&No(t,n,!1),ct(e,t,l);s=t.stateNode,km.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&a?(t.child=In(t,e.child,null,l),t.child=In(t,null,o,l)):he(e,t,o,l),t.memoizedState=s.state,r&&No(t,n,!0),t.child}function ad(e){var t=e.stateNode;t.pendingContext?ko(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ko(e,t.context,!1),ma(e,t.containerInfo)}function $o(e,t,n,s,r){return On(),oa(r),t.flags|=256,he(e,t,n,s),t.child}var ji={dehydrated:null,treeContext:null,retryLane:0};function ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function od(e,t,n){var s=t.pendingProps,r=J.current,l=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(r&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),V(J,r&1),e===null)return hi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=s.children,e=s.fallback,l?(s=t.mode,l=t.child,a={mode:"hidden",children:a},!(s&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=el(a,s,0,null),e=qt(e,s,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ki(n),t.memoizedState=ji,e):ja(t,a));if(r=e.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Nm(e,t,a,s,o,r,n);if(l){l=s.fallback,a=t.mode,r=e.child,o=r.sibling;var u={mode:"hidden",children:s.children};return!(a&1)&&t.child!==r?(s=t.child,s.childLanes=0,s.pendingProps=u,t.deletions=null):(s=Pt(r,u),s.subtreeFlags=r.subtreeFlags&14680064),o!==null?l=Pt(o,l):(l=qt(l,a,n,null),l.flags|=2),l.return=t,s.return=t,s.sibling=l,t.child=s,s=l,l=t.child,a=e.child.memoizedState,a=a===null?ki(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=ji,s}return l=e.child,e=l.sibling,s=Pt(l,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function ja(e,t){return t=el({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ys(e,t,n,s){return s!==null&&oa(s),In(t,e.child,null,n),e=ja(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nm(e,t,n,s,r,l,a){if(n)return t.flags&256?(t.flags&=-257,s=Rl(Error(k(422))),Ys(e,t,a,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=s.fallback,r=t.mode,s=el({mode:"visible",children:s.children},r,0,null),l=qt(l,r,a,null),l.flags|=2,s.return=t,l.return=t,s.sibling=l,t.child=s,t.mode&1&&In(t,e.child,null,a),t.child.memoizedState=ki(a),t.memoizedState=ji,l);if(!(t.mode&1))return Ys(e,t,a,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var o=s.dgst;return s=o,l=Error(k(419)),s=Rl(l,s,void 0),Ys(e,t,a,s)}if(o=(a&e.childLanes)!==0,xe||o){if(s=ie,s!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|a)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,ut(e,r),We(s,e,r,-1))}return Ea(),s=Rl(Error(k(421))),Ys(e,t,a,s)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=zm.bind(null,e),r._reactRetry=t,null):(e=l.treeContext,Ce=kt(r.nextSibling),Se=t,q=!0,Be=null,e!==null&&(Re[Te++]=rt,Re[Te++]=lt,Re[Te++]=Yt,rt=e.id,lt=e.overflow,Yt=t),t=ja(t,s.children),t.flags|=4096,t)}function Uo(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),gi(e.return,t,n)}function Tl(e,t,n,s,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=s,l.tail=n,l.tailMode=r)}function ud(e,t,n){var s=t.pendingProps,r=s.revealOrder,l=s.tail;if(he(e,t,s.children,n),s=J.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uo(e,n,t);else if(e.tag===19)Uo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(V(J,s),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Rr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Tl(t,!1,r,n,l);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Rr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Tl(t,!0,n,null,l);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cm(e,t,n){switch(t.tag){case 3:ad(t),On();break;case 5:Ac(t);break;case 1:je(t.type)&&Cr(t);break;case 4:ma(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,r=t.memoizedProps.value;V(Er,s._currentValue),s._currentValue=r;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(V(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?od(e,t,n):(V(J,J.current&1),e=ct(e,t,n),e!==null?e.sibling:null);V(J,J.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return ud(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),V(J,J.current),s)break;return null;case 22:case 23:return t.lanes=0,ld(e,t,n)}return ct(e,t,n)}var cd,Ni,dd,pd;cd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ni=function(){};dd=function(e,t,n,s){var r=e.memoizedProps;if(r!==s){e=t.stateNode,Qt(et.current);var l=null;switch(n){case"input":r=Ql(e,r),s=Ql(e,s),l=[];break;case"select":r=G({},r,{value:void 0}),s=G({},s,{value:void 0}),l=[];break;case"textarea":r=ql(e,r),s=ql(e,s),l=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=kr)}Yl(n,s);var a;n=null;for(c in r)if(!s.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ps.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in s){var u=s[c];if(o=r!=null?r[c]:void 0,s.hasOwnProperty(c)&&u!==o&&(u!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ps.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Q("scroll",e),l||o===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};pd=function(e,t,n,s){n!==s&&(t.flags|=4)};function Jn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Sm(e,t,n){var s=t.pendingProps;switch(aa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return je(t.type)&&Nr(),pe(t),null;case 3:return s=t.stateNode,An(),X(we),X(me),ga(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(Ti(Be),Be=null))),Ni(e,t),pe(t),null;case 5:ha(t);var r=Qt(Ns.current);if(n=t.type,e!==null&&t.stateNode!=null)dd(e,t,n,s,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(k(166));return pe(t),null}if(e=Qt(et.current),qs(t)){s=t.stateNode,n=t.type;var l=t.memoizedProps;switch(s[Ge]=t,s[js]=l,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",s),Q("close",s);break;case"iframe":case"object":case"embed":Q("load",s);break;case"video":case"audio":for(r=0;r<ns.length;r++)Q(ns[r],s);break;case"source":Q("error",s);break;case"img":case"image":case"link":Q("error",s),Q("load",s);break;case"details":Q("toggle",s);break;case"input":qa(s,l),Q("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!l.multiple},Q("invalid",s);break;case"textarea":Ya(s,l),Q("invalid",s)}Yl(n,l),r=null;for(var a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="children"?typeof o=="string"?s.textContent!==o&&(l.suppressHydrationWarning!==!0&&Ks(s.textContent,o,e),r=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Ks(s.textContent,o,e),r=["children",""+o]):ps.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Q("scroll",s)}switch(n){case"input":$s(s),Ja(s,l,!0);break;case"textarea":$s(s),Ga(s);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(s.onclick=kr)}s=r,t.updateQueue=s,s!==null&&(t.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$u(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=a.createElement(n,{is:s.is}):(e=a.createElement(n),n==="select"&&(a=e,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):e=a.createElementNS(e,n),e[Ge]=t,e[js]=s,cd(e,t,!1,!1),t.stateNode=e;e:{switch(a=Gl(n,s),n){case"dialog":Q("cancel",e),Q("close",e),r=s;break;case"iframe":case"object":case"embed":Q("load",e),r=s;break;case"video":case"audio":for(r=0;r<ns.length;r++)Q(ns[r],e);r=s;break;case"source":Q("error",e),r=s;break;case"img":case"image":case"link":Q("error",e),Q("load",e),r=s;break;case"details":Q("toggle",e),r=s;break;case"input":qa(e,s),r=Ql(e,s),Q("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=G({},s,{value:void 0}),Q("invalid",e);break;case"textarea":Ya(e,s),r=ql(e,s),Q("invalid",e);break;default:r=s}Yl(n,r),o=r;for(l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="style"?Hu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uu(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&fs(e,u):typeof u=="number"&&fs(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ps.hasOwnProperty(l)?u!=null&&l==="onScroll"&&Q("scroll",e):u!=null&&Qi(e,l,u,a))}switch(n){case"input":$s(e),Ja(e,s,!1);break;case"textarea":$s(e),Ga(e);break;case"option":s.value!=null&&e.setAttribute("value",""+bt(s.value));break;case"select":e.multiple=!!s.multiple,l=s.value,l!=null?Cn(e,!!s.multiple,l,!1):s.defaultValue!=null&&Cn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=kr)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)pd(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(k(166));if(n=Qt(Ns.current),Qt(et.current),qs(t)){if(s=t.stateNode,n=t.memoizedProps,s[Ge]=t,(l=s.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Ks(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ks(s.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[Ge]=t,t.stateNode=s}return pe(t),null;case 13:if(X(J),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Ce!==null&&t.mode&1&&!(t.flags&128))Lc(),On(),t.flags|=98560,l=!1;else if(l=qs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[Ge]=t}else On(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),l=!1}else Be!==null&&(Ti(Be),Be=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?re===0&&(re=3):Ea())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return An(),Ni(e,t),e===null&&xs(t.stateNode.containerInfo),pe(t),null;case 10:return da(t.type._context),pe(t),null;case 17:return je(t.type)&&Nr(),pe(t),null;case 19:if(X(J),l=t.memoizedState,l===null)return pe(t),null;if(s=(t.flags&128)!==0,a=l.rendering,a===null)if(s)Jn(l,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Rr(e),a!==null){for(t.flags|=128,Jn(l,!1),s=a.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)l=n,e=s,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(J,J.current&1|2),t.child}e=e.sibling}l.tail!==null&&ee()>zn&&(t.flags|=128,s=!0,Jn(l,!1),t.lanes=4194304)}else{if(!s)if(e=Rr(a),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!q)return pe(t),null}else 2*ee()-l.renderingStartTime>zn&&n!==1073741824&&(t.flags|=128,s=!0,Jn(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ee(),t.sibling=null,n=J.current,V(J,s?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Pa(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Ne&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Pm(e,t){switch(aa(t),t.tag){case 1:return je(t.type)&&Nr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),X(we),X(me),ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ha(t),null;case 13:if(X(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(J),null;case 4:return An(),null;case 10:return da(t.type._context),null;case 22:case 23:return Pa(),null;case 24:return null;default:return null}}var Gs=!1,fe=!1,Em=typeof WeakSet=="function"?WeakSet:Set,L=null;function kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){Z(e,t,s)}else n.current=null}function Ci(e,t,n){try{n()}catch(s){Z(e,t,s)}}var Bo=!1;function bm(e,t){if(oi=xr,e=yc(),la(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var r=s.anchorOffset,l=s.focusNode;s=s.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,o=-1,u=-1,c=0,g=0,m=e,h=null;t:for(;;){for(var x;m!==n||r!==0&&m.nodeType!==3||(o=a+r),m!==l||s!==0&&m.nodeType!==3||(u=a+s),m.nodeType===3&&(a+=m.nodeValue.length),(x=m.firstChild)!==null;)h=m,m=x;for(;;){if(m===e)break t;if(h===n&&++c===r&&(o=a),h===l&&++g===s&&(u=a),(x=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=x}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ui={focusedElem:e,selectionRange:n},xr=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,y=_.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:$e(t.type,v),y);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(j){Z(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return _=Bo,Bo=!1,_}function us(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var l=r.destroy;r.destroy=void 0,l!==void 0&&Ci(t,n,l)}r=r.next}while(r!==s)}}function Gr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Si(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fd(e){var t=e.alternate;t!==null&&(e.alternate=null,fd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[js],delete t[pi],delete t[dm],delete t[pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function md(e){return e.tag===5||e.tag===3||e.tag===4}function Ho(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pi(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kr));else if(s!==4&&(e=e.child,e!==null))for(Pi(e,t,n),e=e.sibling;e!==null;)Pi(e,t,n),e=e.sibling}function Ei(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ei(e,t,n),e=e.sibling;e!==null;)Ei(e,t,n),e=e.sibling}var oe=null,Ue=!1;function pt(e,t,n){for(n=n.child;n!==null;)hd(e,t,n),n=n.sibling}function hd(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Wr,n)}catch{}switch(n.tag){case 5:fe||kn(n,t);case 6:var s=oe,r=Ue;oe=null,pt(e,t,n),oe=s,Ue=r,oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?Cl(e.parentNode,n):e.nodeType===1&&Cl(e,n),ys(e)):Cl(oe,n.stateNode));break;case 4:s=oe,r=Ue,oe=n.stateNode.containerInfo,Ue=!0,pt(e,t,n),oe=s,Ue=r;break;case 0:case 11:case 14:case 15:if(!fe&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var l=r,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Ci(n,t,a),r=r.next}while(r!==s)}pt(e,t,n);break;case 1:if(!fe&&(kn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(o){Z(n,t,o)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(fe=(s=fe)||n.memoizedState!==null,pt(e,t,n),fe=s):pt(e,t,n);break;default:pt(e,t,n)}}function Wo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Em),t.forEach(function(s){var r=Dm.bind(null,e,s);n.has(s)||(n.add(s),s.then(r,r))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];try{var l=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:oe=o.stateNode,Ue=!1;break e;case 3:oe=o.stateNode.containerInfo,Ue=!0;break e;case 4:oe=o.stateNode.containerInfo,Ue=!0;break e}o=o.return}if(oe===null)throw Error(k(160));hd(l,a,r),oe=null,Ue=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(c){Z(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gd(t,e),t=t.sibling}function gd(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Xe(e),s&4){try{us(3,e,e.return),Gr(3,e)}catch(v){Z(e,e.return,v)}try{us(5,e,e.return)}catch(v){Z(e,e.return,v)}}break;case 1:Me(t,e),Xe(e),s&512&&n!==null&&kn(n,n.return);break;case 5:if(Me(t,e),Xe(e),s&512&&n!==null&&kn(n,n.return),e.flags&32){var r=e.stateNode;try{fs(r,"")}catch(v){Z(e,e.return,v)}}if(s&4&&(r=e.stateNode,r!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Du(r,l),Gl(o,a);var c=Gl(o,l);for(a=0;a<u.length;a+=2){var g=u[a],m=u[a+1];g==="style"?Hu(r,m):g==="dangerouslySetInnerHTML"?Uu(r,m):g==="children"?fs(r,m):Qi(r,g,m,c)}switch(o){case"input":Xl(r,l);break;case"textarea":Mu(r,l);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?Cn(r,!!l.multiple,x,!1):h!==!!l.multiple&&(l.defaultValue!=null?Cn(r,!!l.multiple,l.defaultValue,!0):Cn(r,!!l.multiple,l.multiple?[]:"",!1))}r[js]=l}catch(v){Z(e,e.return,v)}}break;case 6:if(Me(t,e),Xe(e),s&4){if(e.stateNode===null)throw Error(k(162));r=e.stateNode,l=e.memoizedProps;try{r.nodeValue=l}catch(v){Z(e,e.return,v)}}break;case 3:if(Me(t,e),Xe(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{ys(t.containerInfo)}catch(v){Z(e,e.return,v)}break;case 4:Me(t,e),Xe(e);break;case 13:Me(t,e),Xe(e),r=e.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(Ca=ee())),s&4&&Wo(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(c=fe)||g,Me(t,e),fe=c):Me(t,e),Xe(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(L=e,g=e.child;g!==null;){for(m=L=g;L!==null;){switch(h=L,x=h.child,h.tag){case 0:case 11:case 14:case 15:us(4,h,h.return);break;case 1:kn(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){s=h,n=h.return;try{t=s,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(v){Z(s,n,v)}}break;case 5:kn(h,h.return);break;case 22:if(h.memoizedState!==null){Qo(m);continue}}x!==null?(x.return=h,L=x):Qo(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{r=m.stateNode,c?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=Bu("display",a))}catch(v){Z(e,e.return,v)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){Z(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(t,e),Xe(e),s&4&&Wo(e);break;case 21:break;default:Me(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(md(n)){var s=n;break e}n=n.return}throw Error(k(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(fs(r,""),s.flags&=-33);var l=Ho(e);Ei(e,l,r);break;case 3:case 4:var a=s.stateNode.containerInfo,o=Ho(e);Pi(e,o,a);break;default:throw Error(k(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lm(e,t,n){L=e,yd(e)}function yd(e,t,n){for(var s=(e.mode&1)!==0;L!==null;){var r=L,l=r.child;if(r.tag===22&&s){var a=r.memoizedState!==null||Gs;if(!a){var o=r.alternate,u=o!==null&&o.memoizedState!==null||fe;o=Gs;var c=fe;if(Gs=a,(fe=u)&&!c)for(L=r;L!==null;)a=L,u=a.child,a.tag===22&&a.memoizedState!==null?Xo(r):u!==null?(u.return=a,L=u):Xo(r);for(;l!==null;)L=l,yd(l),l=l.sibling;L=r,Gs=o,fe=c}Vo(e)}else r.subtreeFlags&8772&&l!==null?(l.return=r,L=l):Vo(e)}}function Vo(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||Gr(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!fe)if(n===null)s.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);s.componentDidUpdate(r,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&bo(t,l,s);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bo(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&ys(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}fe||t.flags&512&&Si(t)}catch(h){Z(t,t.return,h)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Qo(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Xo(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gr(4,t)}catch(u){Z(t,n,u)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var r=t.return;try{s.componentDidMount()}catch(u){Z(t,r,u)}}var l=t.return;try{Si(t)}catch(u){Z(t,l,u)}break;case 5:var a=t.return;try{Si(t)}catch(u){Z(t,a,u)}}}catch(u){Z(t,t.return,u)}if(t===e){L=null;break}var o=t.sibling;if(o!==null){o.return=t.return,L=o;break}L=t.return}}var Rm=Math.ceil,Ir=dt.ReactCurrentDispatcher,ka=dt.ReactCurrentOwner,Ie=dt.ReactCurrentBatchConfig,B=0,ie=null,te=null,ue=0,Ne=0,Nn=Ot(0),re=0,Es=null,Zt=0,Zr=0,Na=0,cs=null,_e=null,Ca=0,zn=1/0,nt=null,Ar=!1,bi=null,Ct=null,Zs=!1,vt=null,Fr=0,ds=0,Li=null,dr=-1,pr=0;function ge(){return B&6?ee():dr!==-1?dr:dr=ee()}function St(e){return e.mode&1?B&2&&ue!==0?ue&-ue:mm.transition!==null?(pr===0&&(pr=tc()),pr):(e=H,e!==0||(e=window.event,e=e===void 0?16:oc(e.type)),e):1}function We(e,t,n,s){if(50<ds)throw ds=0,Li=null,Error(k(185));Ts(e,n,s),(!(B&2)||e!==ie)&&(e===ie&&(!(B&2)&&(Zr|=n),re===4&&gt(e,ue)),ke(e,s),n===1&&B===0&&!(t.mode&1)&&(zn=ee()+500,qr&&It()))}function ke(e,t){var n=e.callbackNode;mf(e,t);var s=_r(e,e===ie?ue:0);if(s===0)n!==null&&to(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&to(n),t===1)e.tag===0?fm(Ko.bind(null,e)):Pc(Ko.bind(null,e)),um(function(){!(B&6)&&It()}),n=null;else{switch(nc(s)){case 1:n=Yi;break;case 4:n=Zu;break;case 16:n=vr;break;case 536870912:n=ec;break;default:n=vr}n=Cd(n,vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vd(e,t){if(dr=-1,pr=0,B&6)throw Error(k(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var s=_r(e,e===ie?ue:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=zr(e,s);else{t=s;var r=B;B|=2;var l=xd();(ie!==e||ue!==t)&&(nt=null,zn=ee()+500,Kt(e,t));do try{Im();break}catch(o){_d(e,o)}while(!0);ca(),Ir.current=l,B=r,te!==null?t=0:(ie=null,ue=0,t=re)}if(t!==0){if(t===2&&(r=si(e),r!==0&&(s=r,t=Ri(e,r))),t===1)throw n=Es,Kt(e,0),gt(e,s),ke(e,ee()),n;if(t===6)gt(e,s);else{if(r=e.current.alternate,!(s&30)&&!Tm(r)&&(t=zr(e,s),t===2&&(l=si(e),l!==0&&(s=l,t=Ri(e,l))),t===1))throw n=Es,Kt(e,0),gt(e,s),ke(e,ee()),n;switch(e.finishedWork=r,e.finishedLanes=s,t){case 0:case 1:throw Error(k(345));case 2:Ut(e,_e,nt);break;case 3:if(gt(e,s),(s&130023424)===s&&(t=Ca+500-ee(),10<t)){if(_r(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){ge(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=di(Ut.bind(null,e,_e,nt),t);break}Ut(e,_e,nt);break;case 4:if(gt(e,s),(s&4194240)===s)break;for(t=e.eventTimes,r=-1;0<s;){var a=31-He(s);l=1<<a,a=t[a],a>r&&(r=a),s&=~l}if(s=r,s=ee()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Rm(s/1960))-s,10<s){e.timeoutHandle=di(Ut.bind(null,e,_e,nt),s);break}Ut(e,_e,nt);break;case 5:Ut(e,_e,nt);break;default:throw Error(k(329))}}}return ke(e,ee()),e.callbackNode===n?vd.bind(null,e):null}function Ri(e,t){var n=cs;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=zr(e,t),e!==2&&(t=_e,_e=n,t!==null&&Ti(t)),e}function Ti(e){_e===null?_e=e:_e.push.apply(_e,e)}function Tm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var r=n[s],l=r.getSnapshot;r=r.value;try{if(!Ve(l(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gt(e,t){for(t&=~Na,t&=~Zr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),s=1<<n;e[n]=-1,t&=~s}}function Ko(e){if(B&6)throw Error(k(327));Ln();var t=_r(e,0);if(!(t&1))return ke(e,ee()),null;var n=zr(e,t);if(e.tag!==0&&n===2){var s=si(e);s!==0&&(t=s,n=Ri(e,s))}if(n===1)throw n=Es,Kt(e,0),gt(e,t),ke(e,ee()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,_e,nt),ke(e,ee()),null}function Sa(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(zn=ee()+500,qr&&It())}}function en(e){vt!==null&&vt.tag===0&&!(B&6)&&Ln();var t=B;B|=1;var n=Ie.transition,s=H;try{if(Ie.transition=null,H=1,e)return e()}finally{H=s,Ie.transition=n,B=t,!(B&6)&&It()}}function Pa(){Ne=Nn.current,X(Nn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,om(n)),te!==null)for(n=te.return;n!==null;){var s=n;switch(aa(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Nr();break;case 3:An(),X(we),X(me),ga();break;case 5:ha(s);break;case 4:An();break;case 13:X(J);break;case 19:X(J);break;case 10:da(s.type._context);break;case 22:case 23:Pa()}n=n.return}if(ie=e,te=e=Pt(e.current,null),ue=Ne=t,re=0,Es=null,Na=Zr=Zt=0,_e=cs=null,Vt!==null){for(t=0;t<Vt.length;t++)if(n=Vt[t],s=n.interleaved,s!==null){n.interleaved=null;var r=s.next,l=n.pending;if(l!==null){var a=l.next;l.next=r,s.next=a}n.pending=s}Vt=null}return e}function _d(e,t){do{var n=te;try{if(ca(),or.current=Or,Tr){for(var s=Y.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Tr=!1}if(Gt=0,le=se=Y=null,os=!1,Cs=0,ka.current=null,n===null||n.return===null){re=1,Es=t,te=null;break}e:{var l=e,a=n.return,o=n,u=t;if(t=ue,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=o,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Ao(a);if(x!==null){x.flags&=-257,Fo(x,a,o,l,t),x.mode&1&&Io(l,c,t),t=x,u=c;var _=t.updateQueue;if(_===null){var v=new Set;v.add(u),t.updateQueue=v}else _.add(u);break e}else{if(!(t&1)){Io(l,c,t),Ea();break e}u=Error(k(426))}}else if(q&&o.mode&1){var y=Ao(a);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Fo(y,a,o,l,t),oa(Fn(u,o));break e}}l=u=Fn(u,o),re!==4&&(re=2),cs===null?cs=[l]:cs.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=nd(l,u,t);Eo(l,p);break e;case 1:o=u;var d=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ct===null||!Ct.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var j=sd(l,o,t);Eo(l,j);break e}}l=l.return}while(l!==null)}jd(n)}catch(N){t=N,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function xd(){var e=Ir.current;return Ir.current=Or,e===null?Or:e}function Ea(){(re===0||re===3||re===2)&&(re=4),ie===null||!(Zt&268435455)&&!(Zr&268435455)||gt(ie,ue)}function zr(e,t){var n=B;B|=2;var s=xd();(ie!==e||ue!==t)&&(nt=null,Kt(e,t));do try{Om();break}catch(r){_d(e,r)}while(!0);if(ca(),B=n,Ir.current=s,te!==null)throw Error(k(261));return ie=null,ue=0,re}function Om(){for(;te!==null;)wd(te)}function Im(){for(;te!==null&&!rf();)wd(te)}function wd(e){var t=Nd(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?jd(e):te=t,ka.current=null}function jd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pm(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Sm(n,t,Ne),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Ut(e,t,n){var s=H,r=Ie.transition;try{Ie.transition=null,H=1,Am(e,t,n,s)}finally{Ie.transition=r,H=s}return null}function Am(e,t,n,s){do Ln();while(vt!==null);if(B&6)throw Error(k(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(hf(e,l),e===ie&&(te=ie=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zs||(Zs=!0,Cd(vr,function(){return Ln(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ie.transition,Ie.transition=null;var a=H;H=1;var o=B;B|=4,ka.current=null,bm(e,n),gd(n,e),tm(ui),xr=!!oi,ui=oi=null,e.current=n,Lm(n),lf(),B=o,H=a,Ie.transition=l}else e.current=n;if(Zs&&(Zs=!1,vt=e,Fr=r),l=e.pendingLanes,l===0&&(Ct=null),uf(n.stateNode),ke(e,ee()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],s(r.value,{componentStack:r.stack,digest:r.digest});if(Ar)throw Ar=!1,e=bi,bi=null,e;return Fr&1&&e.tag!==0&&Ln(),l=e.pendingLanes,l&1?e===Li?ds++:(ds=0,Li=e):ds=0,It(),null}function Ln(){if(vt!==null){var e=nc(Fr),t=Ie.transition,n=H;try{if(Ie.transition=null,H=16>e?16:e,vt===null)var s=!1;else{if(e=vt,vt=null,Fr=0,B&6)throw Error(k(331));var r=B;for(B|=4,L=e.current;L!==null;){var l=L,a=l.child;if(L.flags&16){var o=l.deletions;if(o!==null){for(var u=0;u<o.length;u++){var c=o[u];for(L=c;L!==null;){var g=L;switch(g.tag){case 0:case 11:case 15:us(8,g,l)}var m=g.child;if(m!==null)m.return=g,L=m;else for(;L!==null;){g=L;var h=g.sibling,x=g.return;if(fd(g),g===c){L=null;break}if(h!==null){h.return=x,L=h;break}L=x}}}var _=l.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}L=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,L=a;else e:for(;L!==null;){if(l=L,l.flags&2048)switch(l.tag){case 0:case 11:case 15:us(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,L=p;break e}L=l.return}}var d=e.current;for(L=d;L!==null;){a=L;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,L=f;else e:for(a=d;L!==null;){if(o=L,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Gr(9,o)}}catch(N){Z(o,o.return,N)}if(o===a){L=null;break e}var j=o.sibling;if(j!==null){j.return=o.return,L=j;break e}L=o.return}}if(B=r,It(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Wr,e)}catch{}s=!0}return s}finally{H=n,Ie.transition=t}}return!1}function qo(e,t,n){t=Fn(n,t),t=nd(e,t,1),e=Nt(e,t,1),t=ge(),e!==null&&(Ts(e,1,t),ke(e,t))}function Z(e,t,n){if(e.tag===3)qo(e,e,n);else for(;t!==null;){if(t.tag===3){qo(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ct===null||!Ct.has(s))){e=Fn(n,e),e=sd(t,e,1),t=Nt(t,e,1),e=ge(),t!==null&&(Ts(t,1,e),ke(t,e));break}}t=t.return}}function Fm(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>ee()-Ca?Kt(e,0):Na|=n),ke(e,t)}function kd(e,t){t===0&&(e.mode&1?(t=Hs,Hs<<=1,!(Hs&130023424)&&(Hs=4194304)):t=1);var n=ge();e=ut(e,t),e!==null&&(Ts(e,t,n),ke(e,n))}function zm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kd(e,n)}function Dm(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(k(314))}s!==null&&s.delete(t),kd(e,n)}var Nd;Nd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,Cm(e,t,n);xe=!!(e.flags&131072)}else xe=!1,q&&t.flags&1048576&&Ec(t,Pr,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;cr(e,t),e=t.pendingProps;var r=Tn(t,me.current);bn(t,n),r=va(null,t,s,e,r,n);var l=_a();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(s)?(l=!0,Cr(t)):l=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fa(t),r.updater=Yr,t.stateNode=r,r._reactInternals=t,vi(t,s,e,n),t=wi(null,t,s,!0,l,n)):(t.tag=0,q&&l&&ia(t),he(null,t,r,n),t=t.child),t;case 16:s=t.elementType;e:{switch(cr(e,t),e=t.pendingProps,r=s._init,s=r(s._payload),t.type=s,r=t.tag=$m(s),e=$e(s,e),r){case 0:t=xi(null,t,s,e,n);break e;case 1:t=Mo(null,t,s,e,n);break e;case 11:t=zo(null,t,s,e,n);break e;case 14:t=Do(null,t,s,$e(s.type,e),n);break e}throw Error(k(306,s,""))}return t;case 0:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:$e(s,r),xi(e,t,s,r,n);case 1:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:$e(s,r),Mo(e,t,s,r,n);case 3:e:{if(ad(t),e===null)throw Error(k(387));s=t.pendingProps,l=t.memoizedState,r=l.element,Ic(e,t),Lr(t,s,null,n);var a=t.memoizedState;if(s=a.element,l.isDehydrated)if(l={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){r=Fn(Error(k(423)),t),t=$o(e,t,s,n,r);break e}else if(s!==r){r=Fn(Error(k(424)),t),t=$o(e,t,s,n,r);break e}else for(Ce=kt(t.stateNode.containerInfo.firstChild),Se=t,q=!0,Be=null,n=Tc(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),s===r){t=ct(e,t,n);break e}he(e,t,s,n)}t=t.child}return t;case 5:return Ac(t),e===null&&hi(t),s=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,a=r.children,ci(s,r)?a=null:l!==null&&ci(s,l)&&(t.flags|=32),id(e,t),he(e,t,a,n),t.child;case 6:return e===null&&hi(t),null;case 13:return od(e,t,n);case 4:return ma(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=In(t,null,s,n):he(e,t,s,n),t.child;case 11:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:$e(s,r),zo(e,t,s,r,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,r=t.pendingProps,l=t.memoizedProps,a=r.value,V(Er,s._currentValue),s._currentValue=a,l!==null)if(Ve(l.value,a)){if(l.children===r.children&&!we.current){t=ct(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){a=l.child;for(var u=o.firstContext;u!==null;){if(u.context===s){if(l.tag===1){u=it(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),gi(l.return,n,t),o.lanes|=n;break}u=u.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(k(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),gi(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}he(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,s=t.pendingProps.children,bn(t,n),r=Ae(r),s=s(r),t.flags|=1,he(e,t,s,n),t.child;case 14:return s=t.type,r=$e(s,t.pendingProps),r=$e(s.type,r),Do(e,t,s,r,n);case 15:return rd(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:$e(s,r),cr(e,t),t.tag=1,je(s)?(e=!0,Cr(t)):e=!1,bn(t,n),td(t,s,r),vi(t,s,r,n),wi(null,t,s,!0,e,n);case 19:return ud(e,t,n);case 22:return ld(e,t,n)}throw Error(k(156,t.tag))};function Cd(e,t){return Gu(e,t)}function Mm(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,s){return new Mm(e,t,n,s)}function ba(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $m(e){if(typeof e=="function")return ba(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ki)return 11;if(e===qi)return 14}return 2}function Pt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fr(e,t,n,s,r,l){var a=2;if(s=e,typeof e=="function")ba(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case mn:return qt(n.children,r,l,t);case Xi:a=8,r|=8;break;case Bl:return e=Oe(12,n,t,r|2),e.elementType=Bl,e.lanes=l,e;case Hl:return e=Oe(13,n,t,r),e.elementType=Hl,e.lanes=l,e;case Wl:return e=Oe(19,n,t,r),e.elementType=Wl,e.lanes=l,e;case Au:return el(n,r,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ou:a=10;break e;case Iu:a=9;break e;case Ki:a=11;break e;case qi:a=14;break e;case ft:a=16,s=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Oe(a,n,t,r),t.elementType=e,t.type=s,t.lanes=l,t}function qt(e,t,n,s){return e=Oe(7,e,s,t),e.lanes=n,e}function el(e,t,n,s){return e=Oe(22,e,s,t),e.elementType=Au,e.lanes=n,e.stateNode={isHidden:!1},e}function Ol(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function Il(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Um(e,t,n,s,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function La(e,t,n,s,r,l,a,o,u){return e=new Um(e,t,n,o,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Oe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fa(l),e}function Bm(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fn,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function Sd(e){if(!e)return Lt;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(je(n))return Sc(e,n,t)}return t}function Pd(e,t,n,s,r,l,a,o,u){return e=La(n,s,!0,e,r,l,a,o,u),e.context=Sd(null),n=e.current,s=ge(),r=St(n),l=it(s,r),l.callback=t??null,Nt(n,l,r),e.current.lanes=r,Ts(e,r,s),ke(e,s),e}function tl(e,t,n,s){var r=t.current,l=ge(),a=St(r);return n=Sd(n),t.context===null?t.context=n:t.pendingContext=n,t=it(l,a),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Nt(r,t,a),e!==null&&(We(e,r,a,l),ar(e,r,a)),a}function Dr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ra(e,t){Jo(e,t),(e=e.alternate)&&Jo(e,t)}function Hm(){return null}var Ed=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ta(e){this._internalRoot=e}nl.prototype.render=Ta.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));tl(e,t,null,null)};nl.prototype.unmount=Ta.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){tl(null,e,null,null)}),t[ot]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=lc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ht.length&&t!==0&&t<ht[n].priority;n++);ht.splice(n,0,e),n===0&&ac(e)}};function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yo(){}function Wm(e,t,n,s,r){if(r){if(typeof s=="function"){var l=s;s=function(){var c=Dr(a);l.call(c)}}var a=Pd(t,s,e,0,null,!1,!1,"",Yo);return e._reactRootContainer=a,e[ot]=a.current,xs(e.nodeType===8?e.parentNode:e),en(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var o=s;s=function(){var c=Dr(u);o.call(c)}}var u=La(e,0,!1,null,null,!1,!1,"",Yo);return e._reactRootContainer=u,e[ot]=u.current,xs(e.nodeType===8?e.parentNode:e),en(function(){tl(t,u,n,s)}),u}function rl(e,t,n,s,r){var l=n._reactRootContainer;if(l){var a=l;if(typeof r=="function"){var o=r;r=function(){var u=Dr(a);o.call(u)}}tl(t,a,e,r)}else a=Wm(n,t,e,r,s);return Dr(a)}sc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ts(t.pendingLanes);n!==0&&(Gi(t,n|1),ke(t,ee()),!(B&6)&&(zn=ee()+500,It()))}break;case 13:en(function(){var s=ut(e,1);if(s!==null){var r=ge();We(s,e,1,r)}}),Ra(e,1)}};Zi=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ge();We(t,e,134217728,n)}Ra(e,134217728)}};rc=function(e){if(e.tag===13){var t=St(e),n=ut(e,t);if(n!==null){var s=ge();We(n,e,t,s)}Ra(e,t)}};lc=function(){return H};ic=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};ei=function(e,t,n){switch(t){case"input":if(Xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var r=Kr(s);if(!r)throw Error(k(90));zu(s),Xl(s,r)}}}break;case"textarea":Mu(e,n);break;case"select":t=n.value,t!=null&&Cn(e,!!n.multiple,t,!1)}};Qu=Sa;Xu=en;var Vm={usingClientEntryPoint:!1,Events:[Is,vn,Kr,Wu,Vu,Sa]},Yn={findFiberByHostInstance:Wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qm={bundleType:Yn.bundleType,version:Yn.version,rendererPackageName:Yn.rendererPackageName,rendererConfig:Yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ju(e),e===null?null:e.stateNode},findFiberByHostInstance:Yn.findFiberByHostInstance||Hm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!er.isDisabled&&er.supportsFiber)try{Wr=er.inject(Qm),Ze=er}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vm;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oa(t))throw Error(k(200));return Bm(e,t,null,n)};be.createRoot=function(e,t){if(!Oa(e))throw Error(k(299));var n=!1,s="",r=Ed;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=La(e,1,!1,null,null,n,!1,s,r),e[ot]=t.current,xs(e.nodeType===8?e.parentNode:e),new Ta(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ju(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return en(e)};be.hydrate=function(e,t,n){if(!sl(t))throw Error(k(200));return rl(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Oa(e))throw Error(k(405));var s=n!=null&&n.hydratedSources||null,r=!1,l="",a=Ed;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Pd(t,null,e,1,n??null,r,!1,l,a),e[ot]=t.current,xs(e),s)for(e=0;e<s.length;e++)n=s[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new nl(t)};be.render=function(e,t,n){if(!sl(t))throw Error(k(200));return rl(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!sl(e))throw Error(k(40));return e._reactRootContainer?(en(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};be.unstable_batchedUpdates=Sa;be.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!sl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return rl(e,t,n,!1,s)};be.version="18.3.1-next-f1338f8080-20240426";function bd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bd)}catch(e){console.error(e)}}bd(),bu.exports=be;var Xm=bu.exports,Go=Xm;$l.createRoot=Go.createRoot,$l.hydrateRoot=Go.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bs(){return bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},bs.apply(null,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const Zo="popstate";function Km(e){e===void 0&&(e={});function t(r,l){let{pathname:a="/",search:o="",hash:u=""}=sn(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Oi("",{pathname:a,search:o,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let u=r.location.href,c=u.indexOf("#");o=c===-1?u:u.slice(0,c)}return o+"#"+(typeof l=="string"?l:Mr(l))}function s(r,l){ll(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Jm(t,n,s,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ll(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qm(){return Math.random().toString(36).substr(2,8)}function eu(e,t){return{usr:e.state,key:e.key,idx:t}}function Oi(e,t,n,s){return n===void 0&&(n=null),bs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?sn(t):t,{state:n,key:t&&t.key||s||qm()})}function Mr(e){let{pathname:t="/",search:n="",hash:s=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function sn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function Jm(e,t,n,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:l=!1}=s,a=r.history,o=_t.Pop,u=null,c=g();c==null&&(c=0,a.replaceState(bs({},a.state,{idx:c}),""));function g(){return(a.state||{idx:null}).idx}function m(){o=_t.Pop;let y=g(),p=y==null?null:y-c;c=y,u&&u({action:o,location:v.location,delta:p})}function h(y,p){o=_t.Push;let d=Oi(v.location,y,p);n&&n(d,y),c=g()+1;let f=eu(d,c),j=v.createHref(d);try{a.pushState(f,"",j)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;r.location.assign(j)}l&&u&&u({action:o,location:v.location,delta:1})}function x(y,p){o=_t.Replace;let d=Oi(v.location,y,p);n&&n(d,y),c=g();let f=eu(d,c),j=v.createHref(d);a.replaceState(f,"",j),l&&u&&u({action:o,location:v.location,delta:0})}function _(y){let p=r.location.origin!=="null"?r.location.origin:r.location.href,d=typeof y=="string"?y:Mr(y);return d=d.replace(/ $/,"%20"),ne(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return o},get location(){return e(r,a)},listen(y){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(Zo,m),u=y,()=>{r.removeEventListener(Zo,m),u=null}},createHref(y){return t(r,y)},createURL:_,encodeLocation(y){let p=_(y);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:x,go(y){return a.go(y)}};return v}var tu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(tu||(tu={}));function Ym(e,t,n){return n===void 0&&(n="/"),Gm(e,t,n)}function Gm(e,t,n,s){let r=typeof t=="string"?sn(t):t,l=Ia(r.pathname||"/",n);if(l==null)return null;let a=Ld(e);Zm(a);let o=null,u=dh(l);for(let c=0;o==null&&c<a.length;++c)o=oh(a[c],u);return o}function Ld(e,t,n,s){t===void 0&&(t=[]),n===void 0&&(n=[]),s===void 0&&(s="");let r=(l,a,o)=>{let u={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};u.relativePath.startsWith("/")&&(ne(u.relativePath.startsWith(s),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(s.length));let c=Et([s,u.relativePath]),g=n.concat(u);l.children&&l.children.length>0&&(ne(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ld(l.children,t,g,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:ih(c,l.index),routesMeta:g})};return e.forEach((l,a)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))r(l,a);else for(let u of Rd(l.path))r(l,a,u)}),t}function Rd(e){let t=e.split("/");if(t.length===0)return[];let[n,...s]=t,r=n.endsWith("?"),l=n.replace(/\?$/,"");if(s.length===0)return r?[l,""]:[l];let a=Rd(s.join("/")),o=[];return o.push(...a.map(u=>u===""?l:[l,u].join("/"))),r&&o.push(...a),o.map(u=>e.startsWith("/")&&u===""?"/":u)}function Zm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ah(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const eh=/^:[\w-]+$/,th=3,nh=2,sh=1,rh=10,lh=-2,nu=e=>e==="*";function ih(e,t){let n=e.split("/"),s=n.length;return n.some(nu)&&(s+=lh),t&&(s+=nh),n.filter(r=>!nu(r)).reduce((r,l)=>r+(eh.test(l)?th:l===""?sh:rh),s)}function ah(e,t){return e.length===t.length&&e.slice(0,-1).every((s,r)=>s===t[r])?e[e.length-1]-t[t.length-1]:0}function oh(e,t,n){let{routesMeta:s}=e,r={},l="/",a=[];for(let o=0;o<s.length;++o){let u=s[o],c=o===s.length-1,g=l==="/"?t:t.slice(l.length)||"/",m=uh({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g),h=u.route;if(!m)return null;Object.assign(r,m.params),a.push({params:r,pathname:Et([l,m.pathname]),pathnameBase:gh(Et([l,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(l=Et([l,m.pathnameBase]))}return a}function uh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,s]=ch(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let l=r[0],a=l.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:s.reduce((c,g,m)=>{let{paramName:h,isOptional:x}=g;if(h==="*"){let v=o[m]||"";a=l.slice(0,l.length-v.length).replace(/(.)\/+$/,"$1")}const _=o[m];return x&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:a,pattern:e}}function ch(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ll(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,u)=>(s.push({paramName:o,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),s]}function dh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ll(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ia(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=e.charAt(n);return s&&s!=="/"?null:e.slice(n)||"/"}const ph=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fh=e=>ph.test(e);function mh(e,t){t===void 0&&(t="/");let{pathname:n,search:s="",hash:r=""}=typeof e=="string"?sn(e):e,l;if(n)if(fh(n))l=n;else{if(n.includes("//")){let a=n;n=Id(n),ll(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?l=su(n.substring(1),"/"):l=su(n,t)}else l=t;return{pathname:l,search:yh(s),hash:vh(r)}}function su(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Al(e,t,n,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Td(e,t){let n=hh(e);return t?n.map((s,r)=>r===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function Od(e,t,n,s){s===void 0&&(s=!1);let r;typeof e=="string"?r=sn(e):(r=bs({},e),ne(!r.pathname||!r.pathname.includes("?"),Al("?","pathname","search",r)),ne(!r.pathname||!r.pathname.includes("#"),Al("#","pathname","hash",r)),ne(!r.search||!r.search.includes("#"),Al("#","search","hash",r)));let l=e===""||r.pathname==="",a=l?"/":r.pathname,o;if(a==null)o=n;else{let m=t.length-1;if(!s&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),m-=1;r.pathname=h.join("/")}o=m>=0?t[m]:"/"}let u=mh(r,o),c=a&&a!=="/"&&a.endsWith("/"),g=(l||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const Id=e=>e.replace(/\/\/+/g,"/"),Et=e=>Id(e.join("/")),gh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _h(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ad=["post","put","patch","delete"];new Set(Ad);const xh=["get",...Ad];new Set(xh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ls(){return Ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ls.apply(null,arguments)}const Aa=w.createContext(null),wh=w.createContext(null),rn=w.createContext(null),il=w.createContext(null),At=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Fd=w.createContext(null);function jh(e,t){let{relative:n}=t===void 0?{}:t;Fs()||ne(!1);let{basename:s,navigator:r}=w.useContext(rn),{hash:l,pathname:a,search:o}=Dd(e,{relative:n}),u=a;return s!=="/"&&(u=a==="/"?s:Et([s,a])),r.createHref({pathname:u,search:o,hash:l})}function Fs(){return w.useContext(il)!=null}function zs(){return Fs()||ne(!1),w.useContext(il).location}function zd(e){w.useContext(rn).static||w.useLayoutEffect(e)}function al(){let{isDataRoute:e}=w.useContext(At);return e?Fh():kh()}function kh(){Fs()||ne(!1);let e=w.useContext(Aa),{basename:t,future:n,navigator:s}=w.useContext(rn),{matches:r}=w.useContext(At),{pathname:l}=zs(),a=JSON.stringify(Td(r,n.v7_relativeSplatPath)),o=w.useRef(!1);return zd(()=>{o.current=!0}),w.useCallback(function(c,g){if(g===void 0&&(g={}),!o.current)return;if(typeof c=="number"){s.go(c);return}let m=Od(c,JSON.parse(a),l,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Et([t,m.pathname])),(g.replace?s.replace:s.push)(m,g.state,g)},[t,s,a,l,e])}function Nh(){let{matches:e}=w.useContext(At),t=e[e.length-1];return t?t.params:{}}function Dd(e,t){let{relative:n}=t===void 0?{}:t,{future:s}=w.useContext(rn),{matches:r}=w.useContext(At),{pathname:l}=zs(),a=JSON.stringify(Td(r,s.v7_relativeSplatPath));return w.useMemo(()=>Od(e,JSON.parse(a),l,n==="path"),[e,a,l,n])}function Ch(e,t){return Sh(e,t)}function Sh(e,t,n,s){Fs()||ne(!1);let{navigator:r}=w.useContext(rn),{matches:l}=w.useContext(At),a=l[l.length-1],o=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=zs(),g;if(t){var m;let y=typeof t=="string"?sn(t):t;u==="/"||(m=y.pathname)!=null&&m.startsWith(u)||ne(!1),g=y}else g=c;let h=g.pathname||"/",x=h;if(u!=="/"){let y=u.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(y.length).join("/")}let _=Ym(e,{pathname:x}),v=Rh(_&&_.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Et([u,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?u:Et([u,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,n,s);return t&&v?w.createElement(il.Provider,{value:{location:Ls({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:_t.Pop}},v):v}function Ph(){let e=Ah(),t=_h(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:r},n):null,null)}const Eh=w.createElement(Ph,null);class bh extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(At.Provider,{value:this.props.routeContext},w.createElement(Fd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lh(e){let{routeContext:t,match:n,children:s}=e,r=w.useContext(Aa);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(At.Provider,{value:t},s)}function Rh(e,t,n,s){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),s===void 0&&(s=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=s)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let g=a.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);g>=0||ne(!1),a=a.slice(0,Math.min(a.length,g+1))}let u=!1,c=-1;if(n&&s&&s.v7_partialHydration)for(let g=0;g<a.length;g++){let m=a[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=g),m.route.id){let{loaderData:h,errors:x}=n,_=m.route.loader&&h[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||_){u=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((g,m,h)=>{let x,_=!1,v=null,y=null;n&&(x=o&&m.route.id?o[m.route.id]:void 0,v=m.route.errorElement||Eh,u&&(c<0&&h===0?(zh("route-fallback"),_=!0,y=null):c===h&&(_=!0,y=m.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,h+1)),d=()=>{let f;return x?f=v:_?f=y:m.route.Component?f=w.createElement(m.route.Component,null):m.route.element?f=m.route.element:f=g,w.createElement(Lh,{match:m,routeContext:{outlet:g,matches:p,isDataRoute:n!=null},children:f})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?w.createElement(bh,{location:n.location,revalidation:n.revalidation,component:v,error:x,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Md=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Md||{}),$d=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($d||{});function Th(e){let t=w.useContext(Aa);return t||ne(!1),t}function Oh(e){let t=w.useContext(wh);return t||ne(!1),t}function Ih(e){let t=w.useContext(At);return t||ne(!1),t}function Ud(e){let t=Ih(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function Ah(){var e;let t=w.useContext(Fd),n=Oh(),s=Ud();return t!==void 0?t:(e=n.errors)==null?void 0:e[s]}function Fh(){let{router:e}=Th(Md.UseNavigateStable),t=Ud($d.UseNavigateStable),n=w.useRef(!1);return zd(()=>{n.current=!0}),w.useCallback(function(r,l){l===void 0&&(l={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Ls({fromRouteId:t},l)))},[e,t])}const ru={};function zh(e,t,n){ru[e]||(ru[e]=!0)}function Dh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Bt(e){ne(!1)}function Mh(e){let{basename:t="/",children:n=null,location:s,navigationType:r=_t.Pop,navigator:l,static:a=!1,future:o}=e;Fs()&&ne(!1);let u=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:u,navigator:l,static:a,future:Ls({v7_relativeSplatPath:!1},o)}),[u,o,l,a]);typeof s=="string"&&(s=sn(s));let{pathname:g="/",search:m="",hash:h="",state:x=null,key:_="default"}=s,v=w.useMemo(()=>{let y=Ia(g,u);return y==null?null:{location:{pathname:y,search:m,hash:h,state:x,key:_},navigationType:r}},[u,g,m,h,x,_,r]);return v==null?null:w.createElement(rn.Provider,{value:c},w.createElement(il.Provider,{children:n,value:v}))}function $h(e){let{children:t,location:n}=e;return Ch(Ii(t),n)}new Promise(()=>{});function Ii(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(s,r)=>{if(!w.isValidElement(s))return;let l=[...t,r];if(s.type===w.Fragment){n.push.apply(n,Ii(s.props.children,l));return}s.type!==Bt&&ne(!1),!s.props.index||!s.props.children||ne(!1);let a={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(a.children=Ii(s.props.children,l)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ai.apply(null,arguments)}function Uh(e,t){if(e==null)return{};var n={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;n[s]=e[s]}return n}function Bh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Hh(e,t){return e.button===0&&(!t||t==="_self")&&!Bh(e)}const Wh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Vh="6";try{window.__reactRouterVersion=Vh}catch{}const Qh="startTransition",lu=Ap[Qh];function Xh(e){let{basename:t,children:n,future:s,window:r}=e,l=w.useRef();l.current==null&&(l.current=Km({window:r,v5Compat:!0}));let a=l.current,[o,u]=w.useState({action:a.action,location:a.location}),{v7_startTransition:c}=s||{},g=w.useCallback(m=>{c&&lu?lu(()=>u(m)):u(m)},[u,c]);return w.useLayoutEffect(()=>a.listen(g),[a,g]),w.useEffect(()=>Dh(s),[s]),w.createElement(Mh,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:s})}const Kh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=w.forwardRef(function(t,n){let{onClick:s,relative:r,reloadDocument:l,replace:a,state:o,target:u,to:c,preventScrollReset:g,viewTransition:m}=t,h=Uh(t,Wh),{basename:x}=w.useContext(rn),_,v=!1;if(typeof c=="string"&&qh.test(c)&&(_=c,Kh))try{let f=new URL(window.location.href),j=c.startsWith("//")?new URL(f.protocol+c):new URL(c),N=Ia(j.pathname,x);j.origin===f.origin&&N!=null?c=N+j.search+j.hash:v=!0}catch{}let y=jh(c,{relative:r}),p=Jh(c,{replace:a,state:o,target:u,preventScrollReset:g,relative:r,viewTransition:m});function d(f){s&&s(f),f.defaultPrevented||p(f)}return w.createElement("a",Ai({},h,{href:_||y,onClick:v||l?s:d,ref:n,target:u}))});var iu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(iu||(iu={}));var au;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(au||(au={}));function Jh(e,t){let{target:n,replace:s,state:r,preventScrollReset:l,relative:a,viewTransition:o}=t===void 0?{}:t,u=al(),c=zs(),g=Dd(e,{relative:a});return w.useCallback(m=>{if(Hh(m,n)){m.preventDefault();let h=s!==void 0?s:Mr(c)===Mr(g);u(e,{replace:h,state:r,preventScrollReset:l,relative:a,viewTransition:o})}},[c,u,g,s,r,n,e,l,a,o])}const $r="python-quest-progress.json",Yh="Python Quest 学习进度备份",Fa="python-quest-github-token",za="python-quest-github-user",Ur="python-quest-gist-id";function Gh(){try{const e=localStorage.getItem(Fa),t=localStorage.getItem(za),n=localStorage.getItem(Ur);return!e||!t?null:{token:e,user:JSON.parse(t),gistId:n}}catch{return null}}function Zh(e){localStorage.setItem(Fa,e.token),localStorage.setItem(za,JSON.stringify(e.user)),e.gistId?localStorage.setItem(Ur,e.gistId):localStorage.removeItem(Ur)}function ou(){localStorage.removeItem(Fa),localStorage.removeItem(za),localStorage.removeItem(Ur)}async function Dn(e,t,n={}){const s=await fetch(e,{...n,headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${t}`,"X-GitHub-Api-Version":"2022-11-28",...n.headers||{}}});if(!s.ok){const r=await s.text();throw new Error(`GitHub API ${s.status}: ${r}`)}return s.json()}async function eg(e){return Dn("https://api.github.com/user",e)}async function tg(e){try{const s=(await Dn("https://api.github.com/gists?per_page=100",e)).find(r=>r.files&&r.files[$r]);if(s)return s.id}catch(n){console.warn("查询 Gist 失败",n)}return(await Dn("https://api.github.com/gists",e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:Yh,public:!1,files:{[$r]:{content:JSON.stringify({initialized:!0,savedAt:new Date().toISOString()})}}})})).id}async function ng(e,t){var n;try{const r=(n=(await Dn(`https://api.github.com/gists/${t}`,e)).files)==null?void 0:n[$r];return r?JSON.parse(r.content):null}catch(s){return console.warn("读取 Gist 失败",s),null}}async function uu(e,t,n){await Dn(`https://api.github.com/gists/${t}`,e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:{[$r]:{content:JSON.stringify(n,null,2)}}})})}async function sg(e){try{return await Dn("https://api.github.com/gists?per_page=1",e),!0}catch{return!1}}const Bd=w.createContext(void 0);function rg({children:e}){const[t,n]=w.useState(null),[s,r]=w.useState(!0),[l,a]=w.useState(!1),[o,u]=w.useState("");w.useEffect(()=>{const m=Gh();m?(n(m),sg(m.token).then(h=>{h||(ou(),n(null))}).catch(()=>{}).finally(()=>r(!1))):r(!1)},[]);const c=async m=>{a(!0),u("");try{const h=m.trim();if(!h)return u("请输入 Token"),!1;const x=await eg(h),_=await tg(h),v={token:h,user:x,gistId:_};return Zh(v),n(v),!0}catch(h){console.error("登录失败",h);const x=(h==null?void 0:h.message)||"";return x.includes("401")?u("Token 无效或已过期，请重新生成"):x.includes("403")?u("Token 权限不足，请勾选 Gist 权限"):x.includes("network")||h instanceof TypeError?u("网络错误，请检查是否能访问 github.com"):u("登录失败："+(x||"未知错误")),!1}finally{a(!1)}},g=()=>{ou(),n(null),u("")};return i.jsx(Bd.Provider,{value:{auth:t,isLoading:s,isLoggingIn:l,loginError:o,signInWithToken:c,signOutUser:g},children:e})}function Da(){const e=w.useContext(Bd);if(e===void 0)throw new Error("useAuth must be used within an AuthProvider");return e}const lg="modulepreload",ig=function(e){return"/python-web-try/"+e},cu={},qe=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=ig(u),u in cu)return;cu[u]=!0;const c=u.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":lg,c||(m.as="script"),m.crossOrigin="",m.href=u,o&&m.setAttribute("nonce",o),document.head.appendChild(m),c)return new Promise((h,x)=>{m.addEventListener("load",h),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&l(o.reason);return t().catch(l)})};var ag=Object.defineProperty,U=(e,t)=>ag(e,"name",{value:t,configurable:!0}),Hd=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function Wd(e){return!isNaN(parseFloat(e))&&isFinite(e)}U(Wd,"_isNumber");function Rt(e){return e.charAt(0).toUpperCase()+e.substring(1)}U(Rt,"_capitalize");function ol(e){return function(){return this[e]}}U(ol,"_getter");var cn=["isConstructor","isEval","isNative","isToplevel"],dn=["columnNumber","lineNumber"],pn=["fileName","functionName","source"],og=["args"],ug=["evalOrigin"],tr=cn.concat(dn,pn,og,ug);function Pe(e){if(e)for(var t=0;t<tr.length;t++)e[tr[t]]!==void 0&&this["set"+Rt(tr[t])](e[tr[t]])}U(Pe,"StackFrame");Pe.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof Pe)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new Pe(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",n=this.getColumnNumber()||"",s=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+n+")":"[eval]:"+t+":"+n:s?s+" ("+e+":"+t+":"+n+")":e+":"+t+":"+n}};Pe.fromString=U(function(e){var t=e.indexOf("("),n=e.lastIndexOf(")"),s=e.substring(0,t),r=e.substring(t+1,n).split(","),l=e.substring(n+1);if(l.indexOf("@")===0)var a=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(l,""),o=a[1],u=a[2],c=a[3];return new Pe({functionName:s,args:r||void 0,fileName:o,lineNumber:u||void 0,columnNumber:c||void 0})},"StackFrame$$fromString");for(zt=0;zt<cn.length;zt++)Pe.prototype["get"+Rt(cn[zt])]=ol(cn[zt]),Pe.prototype["set"+Rt(cn[zt])]=function(e){return function(t){this[e]=!!t}}(cn[zt]);var zt;for(Dt=0;Dt<dn.length;Dt++)Pe.prototype["get"+Rt(dn[Dt])]=ol(dn[Dt]),Pe.prototype["set"+Rt(dn[Dt])]=function(e){return function(t){if(!Wd(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(dn[Dt]);var Dt;for(Mt=0;Mt<pn.length;Mt++)Pe.prototype["get"+Rt(pn[Mt])]=ol(pn[Mt]),Pe.prototype["set"+Rt(pn[Mt])]=function(e){return function(t){this[e]=String(t)}}(pn[Mt]);var Mt,Fl=Pe;function Vd(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:U(function(n){if(n.stack&&n.stack.match(e))return this.parseV8OrIE(n);if(n.stack)return this.parseFFOrSafari(n);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:U(function(n){if(n.indexOf(":")===-1)return[n];var s=/(.+?)(?::(\d+))?(?::(\d+))?$/,r=s.exec(n.replace(/[()]/g,""));return[r[1],r[2]||void 0,r[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:U(function(n){var s=n.stack.split(`
`).filter(function(r){return!!r.match(e)},this);return s.map(function(r){r.indexOf("(eval ")>-1&&(r=r.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var l=r.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),a=l.match(/ (\(.+\)$)/);l=a?l.replace(a[0],""):l;var o=this.extractLocation(a?a[1]:l),u=a&&l||void 0,c=["eval","<anonymous>"].indexOf(o[0])>-1?void 0:o[0];return new Fl({functionName:u,fileName:c,lineNumber:o[1],columnNumber:o[2],source:r})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:U(function(n){var s=n.stack.split(`
`).filter(function(r){return!r.match(t)},this);return s.map(function(r){if(r.indexOf(" > eval")>-1&&(r=r.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),r.indexOf("@")===-1&&r.indexOf(":")===-1)return new Fl({functionName:r});var l=/((.*".+"[^@]*)?[^@]*)(?:@)/,a=r.match(l),o=a&&a[1]?a[1]:void 0,u=this.extractLocation(r.replace(l,""));return new Fl({functionName:o,fileName:u[0],lineNumber:u[1],columnNumber:u[2],source:r})},this)},"ErrorStackParser$$parseFFOrSafari")}}U(Vd,"ErrorStackParser");var cg=new Vd,dg=cg,tt=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,Qd=tt&&typeof Mi<"u"&&typeof Mi.exports<"u"&&typeof Hd<"u"&&typeof __dirname<"u",pg=tt&&!Qd,fg=typeof Deno<"u",Xd=!tt&&!fg,mg=Xd&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",hg=Xd&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var Kd,Fi,qd,du,Ma;async function $a(){if(!tt||(Kd=(await qe(async()=>{const{default:l}=await import("./__vite-browser-external-BIHI7g3E.js");return{default:l}},[])).default,du=await qe(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),Ma=await qe(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),qd=(await qe(async()=>{const{default:l}=await import("./__vite-browser-external-BIHI7g3E.js");return{default:l}},[])).default,Fi=await qe(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),Ua=Fi.sep,typeof Hd<"u"))return;let e=du,t=await qe(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),n=await qe(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),s=await qe(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]),r={fs:e,crypto:t,ws:n,child_process:s};globalThis.require=function(l){return r[l]}}U($a,"initNodeModules");function Jd(e,t){return Fi.resolve(t||".",e)}U(Jd,"node_resolvePath");function Yd(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}U(Yd,"browser_resolvePath");var zi;tt?zi=Jd:zi=Yd;var Ua;tt||(Ua="/");function Gd(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:Ma.readFile(e).then(n=>new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}}U(Gd,"node_getBinaryResponse");function Zd(e,t){let n=new URL(e,location);return{response:fetch(n,t?{integrity:t}:{})}}U(Zd,"browser_getBinaryResponse");var Br;tt?Br=Gd:Br=Zd;async function ep(e,t){let{response:n,binary:s}=Br(e,t);if(s)return s;let r=await n;if(!r.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await r.arrayBuffer())}U(ep,"loadBinaryFile");var mr;if(mg)mr=U(async e=>await import(e),"loadScript");else if(hg)mr=U(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},"loadScript");else if(tt)mr=tp;else throw new Error("Cannot determine runtime environment");async function tp(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?qd.runInThisContext(await(await fetch(e)).text()):await import(Kd.pathToFileURL(e).href)}U(tp,"nodeLoadScript");async function np(e){if(tt){await $a();let t=await Ma.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}U(np,"loadLockFile");async function sp(){if(Qd)return __dirname;let e;try{throw new Error}catch(s){e=s}let t=dg.parse(e)[0].fileName;if(tt&&!t.startsWith("file://")&&(t=`file://${t}`),pg){let s=await qe(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);return(await qe(async()=>{const{fileURLToPath:r}=await import("./__vite-browser-external-BIHI7g3E.js");return{fileURLToPath:r}},[])).fileURLToPath(s.dirname(t))}let n=t.lastIndexOf(Ua);if(n===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,n)}U(sp,"calculateDirname");function rp(e){let t=e.FS,n=e.FS.filesystems.MEMFS,s=e.PATH,r={DIR_MODE:16895,FILE_MODE:33279,mount:function(l){if(!l.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return n.mount.apply(null,arguments)},syncfs:async(l,a,o)=>{try{let u=r.getLocalSet(l),c=await r.getRemoteSet(l),g=a?c:u,m=a?u:c;await r.reconcile(l,g,m),o(null)}catch(u){o(u)}},getLocalSet:l=>{let a=Object.create(null);function o(g){return g!=="."&&g!==".."}U(o,"isRealDir");function u(g){return m=>s.join2(g,m)}U(u,"toAbsolute");let c=t.readdir(l.mountpoint).filter(o).map(u(l.mountpoint));for(;c.length;){let g=c.pop(),m=t.stat(g);t.isDir(m.mode)&&c.push.apply(c,t.readdir(g).filter(o).map(u(g))),a[g]={timestamp:m.mtime,mode:m.mode}}return{type:"local",entries:a}},getRemoteSet:async l=>{let a=Object.create(null),o=await gg(l.opts.fileSystemHandle);for(let[u,c]of o)u!=="."&&(a[s.join2(l.mountpoint,u)]={timestamp:c.kind==="file"?(await c.getFile()).lastModifiedDate:new Date,mode:c.kind==="file"?r.FILE_MODE:r.DIR_MODE});return{type:"remote",entries:a,handles:o}},loadLocalEntry:l=>{let a=t.lookupPath(l).node,o=t.stat(l);if(t.isDir(o.mode))return{timestamp:o.mtime,mode:o.mode};if(t.isFile(o.mode))return a.contents=n.getFileDataAsTypedArray(a),{timestamp:o.mtime,mode:o.mode,contents:a.contents};throw new Error("node type not supported")},storeLocalEntry:(l,a)=>{if(t.isDir(a.mode))t.mkdirTree(l,a.mode);else if(t.isFile(a.mode))t.writeFile(l,a.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(l,a.mode),t.utime(l,a.timestamp,a.timestamp)},removeLocalEntry:l=>{var a=t.stat(l);t.isDir(a.mode)?t.rmdir(l):t.isFile(a.mode)&&t.unlink(l)},loadRemoteEntry:async l=>{if(l.kind==="file"){let a=await l.getFile();return{contents:new Uint8Array(await a.arrayBuffer()),mode:r.FILE_MODE,timestamp:a.lastModifiedDate}}else{if(l.kind==="directory")return{mode:r.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+l.kind)}},storeRemoteEntry:async(l,a,o)=>{let u=l.get(s.dirname(a)),c=t.isFile(o.mode)?await u.getFileHandle(s.basename(a),{create:!0}):await u.getDirectoryHandle(s.basename(a),{create:!0});if(c.kind==="file"){let g=await c.createWritable();await g.write(o.contents),await g.close()}l.set(a,c)},removeRemoteEntry:async(l,a)=>{await l.get(s.dirname(a)).removeEntry(s.basename(a)),l.delete(a)},reconcile:async(l,a,o)=>{let u=0,c=[];Object.keys(a.entries).forEach(function(h){let x=a.entries[h],_=o.entries[h];(!_||t.isFile(x.mode)&&x.timestamp.getTime()>_.timestamp.getTime())&&(c.push(h),u++)}),c.sort();let g=[];if(Object.keys(o.entries).forEach(function(h){a.entries[h]||(g.push(h),u++)}),g.sort().reverse(),!u)return;let m=a.type==="remote"?a.handles:o.handles;for(let h of c){let x=s.normalize(h.replace(l.mountpoint,"/")).substring(1);if(o.type==="local"){let _=m.get(x),v=await r.loadRemoteEntry(_);r.storeLocalEntry(h,v)}else{let _=r.loadLocalEntry(h);await r.storeRemoteEntry(m,x,_)}}for(let h of g)if(o.type==="local")r.removeLocalEntry(h);else{let x=s.normalize(h.replace(l.mountpoint,"/")).substring(1);await r.removeRemoteEntry(m,x)}}};e.FS.filesystems.NATIVEFS_ASYNC=r}U(rp,"initializeNativeFS");var gg=U(async e=>{let t=[];async function n(r){for await(let l of r.values())t.push(l),l.kind==="directory"&&await n(l)}U(n,"collect"),await n(e);let s=new Map;s.set(".",e);for(let r of t){let l=(await e.resolve(r)).join("/");s.set(l,r)}return s},"getFsHandles");function lp(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:cp(e),quit(n,s){throw t.exited={status:n,toThrow:s},s},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:n=>e.indexURL+n,instantiateWasm:dp(e.indexURL)};return t}U(lp,"createSettings");function ip(e){return function(t){let n="/";try{t.FS.mkdirTree(e)}catch(s){console.error(`Error occurred while making a home directory '${e}':`),console.error(s),console.error(`Using '${n}' for a home directory instead`),e=n}t.FS.chdir(e)}}U(ip,"createHomeDirectory");function ap(e){return function(t){Object.assign(t.ENV,e)}}U(ap,"setEnvironment");function op(e){return t=>{for(let n of e)t.FS.mkdirTree(n),t.FS.mount(t.FS.filesystems.NODEFS,{root:n},n)}}U(op,"mountLocalDirectories");function up(e){let t=ep(e);return n=>{let s=n._py_version_major(),r=n._py_version_minor();n.FS.mkdirTree("/lib"),n.FS.mkdirTree(`/lib/python${s}.${r}/site-packages`),n.addRunDependency("install-stdlib"),t.then(l=>{n.FS.writeFile(`/lib/python${s}${r}.zip`,l)}).catch(l=>{console.error("Error occurred while installing the standard library:"),console.error(l)}).finally(()=>{n.removeRunDependency("install-stdlib")})}}U(up,"installStdlib");function cp(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[up(t),ip(e.env.HOME),ap(e.env),op(e._node_mounts),rp]}U(cp,"getFileSystemInitializationFuncs");function dp(e){let{binary:t,response:n}=Br(e+"pyodide.asm.wasm");return function(s,r){return async function(){try{let l;n?l=await WebAssembly.instantiateStreaming(n,s):l=await WebAssembly.instantiate(await t,s);let{instance:a,module:o}=l;typeof WasmOffsetConverter<"u"&&(wasmOffsetConverter=new WasmOffsetConverter(wasmBinary,o)),r(a,o)}catch(l){console.warn("wasm instantiation failed!"),console.warn(l)}}(),{}}}U(dp,"getInstantiateWasmFunc");var pu="0.26.4";async function pp(e={}){var t,n;await $a();let s=e.indexURL||await sp();s=zi(s),s.endsWith("/")||(s+="/"),e.indexURL=s;let r={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:s+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:s,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0},l=Object.assign(r,e);(t=l.env).HOME??(t.HOME="/home/pyodide"),(n=l.env).PYTHONINSPECT??(n.PYTHONINSPECT="1");let a=lp(l),o=a.API;if(o.lockFilePromise=np(l.lockFileURL),typeof _createPyodideModule!="function"){let h=`${l.indexURL}pyodide.asm.js`;await mr(h)}let u;if(e._loadSnapshot){let h=await e._loadSnapshot;ArrayBuffer.isView(h)?u=h:u=new Uint8Array(h),a.noInitialRun=!0,a.INITIAL_MEMORY=u.length}let c=await _createPyodideModule(a);if(a.exited)throw a.exited.toThrow;if(e.pyproxyToStringRepr&&o.setPyProxyToStringMethod(!0),o.version!==pu&&l.checkAPIVersion)throw new Error(`Pyodide version does not match: '${pu}' <==> '${o.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);c.locateFile=h=>{throw new Error("Didn't expect to load any more file_packager files!")};let g;u&&(g=o.restoreSnapshot(u));let m=o.finalizeBootstrap(g);return o.sys.path.insert(0,o.config.env.HOME),m.version.includes("dev")||o.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${m.version}/full/`),o._pyodide.set_excepthook(),await o.packageIndexReady,o.initializeStreams(l.stdin,l.stdout,l.stderr),m}U(pp,"loadPyodide");const fp=w.createContext(void 0),yg={pyodide:null,isLoading:!1,error:null,runCode:async()=>({output:"",error:"Python 环境未初始化"}),runCodeWithTests:async()=>({output:"",error:"Python 环境未初始化",passed:!1,testResults:[]}),retryLoad:()=>{}};function vg({children:e}){const[t,n]=w.useState(null),[s,r]=w.useState(!1),[l,a]=w.useState(null),o=w.useRef(!1),u=w.useCallback(async()=>{if(!o.current){o.current=!0,r(!0),a(null);try{await new Promise(x=>setTimeout(x,100));const h=await pp({indexURL:"/python-web-try/pyodide/"});await h.runPythonAsync(`
import sys
import io
import traceback
`),n(h)}catch(h){console.warn("Pyodide load failed (non-fatal):",h),a(h instanceof Error?h.message:"加载Python运行环境失败"),o.current=!1}finally{r(!1)}}},[]);w.useEffect(()=>{const h=setTimeout(()=>{u().catch(()=>{})},500);return()=>clearTimeout(h)},[u]);const c=w.useCallback(()=>{o.current=!1,n(null),a(null),u().catch(()=>{})},[u]),g=w.useCallback(async h=>{if(!t)return{output:"",error:"Python 环境尚未就绪，请稍后再试"};try{t.runPython(`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
`),await t.runPythonAsync(h);const x=t.runPython("_output_buffer.getvalue()");return t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`),{output:x||"代码执行完成，无输出",error:null}}catch(x){let _="";try{const v=t.runPython("_output_buffer.getvalue()");v&&(_=v+`
`)}catch{}x.message?_+=x.message:typeof x=="string"?_+=x:_+="未知错误";try{t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)}catch{}return{output:"",error:_}}},[t]),m=w.useCallback(async(h,x)=>{if(!t)return{output:"",error:"Python 环境尚未就绪",passed:!1,testResults:[]};const _=[];let v=!0,y="";try{t.runPython(`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
`),await t.runPythonAsync(h),y=t.runPython("_output_buffer.getvalue()"),t.runPython(`
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer

_test_results = []
`),await t.runPythonAsync(x);const d=t.runPython(`
import json
json.dumps(_test_results)
`),f=JSON.parse(d);_.push(...f),v=f.every(N=>N.passed);const j=t.runPython("_output_buffer.getvalue()");return j&&(y+=`
--- 测试输出 ---
`+j),t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`),{output:y||"代码执行完成，无输出",error:null,passed:v,testResults:_}}catch(p){let d="";try{const f=t.runPython("_output_buffer.getvalue()");f&&(d=f+`
`)}catch{}p.message?d+=p.message:typeof p=="string"?d+=p:d+="未知错误";try{t.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)}catch{}return{output:y,error:d,passed:!1,testResults:[]}}},[t]);return i.jsx(fp.Provider,{value:{pyodide:t,isLoading:s,error:l,runCode:g,runCodeWithTests:m,retryLoad:c},children:e})}function mp(){const e=w.useContext(fp);return e===void 0?(console.warn("usePyodide called outside PyodideProvider, using default"),yg):e}const Ht=[{id:"first-step",title:"初出茅庐",description:"完成第一个学习步骤",icon:"🌱",category:"learning",rarity:"common",xpReward:20,condition:e=>e.completedLessons>=1,progress:e=>({current:Math.min(e.completedLessons,1),total:1})},{id:"lesson-10",title:"勤学不辍",description:"完成 10 个学习步骤",icon:"📚",category:"learning",rarity:"common",xpReward:50,condition:e=>e.completedLessons>=10,progress:e=>({current:Math.min(e.completedLessons,10),total:10})},{id:"lesson-50",title:"学富五车",description:"完成 50 个学习步骤",icon:"🎓",category:"learning",rarity:"rare",xpReward:200,condition:e=>e.completedLessons>=50,progress:e=>({current:Math.min(e.completedLessons,50),total:50})},{id:"first-challenge",title:"初战告捷",description:"完成第一个编程挑战",icon:"🎯",category:"challenge",rarity:"common",xpReward:30,condition:e=>e.completedChallenges>=1,progress:e=>({current:Math.min(e.completedChallenges,1),total:1})},{id:"challenge-5",title:"小试牛刀",description:"完成 5 个编程挑战",icon:"⚔️",category:"challenge",rarity:"common",xpReward:80,condition:e=>e.completedChallenges>=5,progress:e=>({current:Math.min(e.completedChallenges,5),total:5})},{id:"challenge-15",title:"身经百战",description:"完成 15 个编程挑战",icon:"🛡️",category:"challenge",rarity:"rare",xpReward:200,condition:e=>e.completedChallenges>=15,progress:e=>({current:Math.min(e.completedChallenges,15),total:15})},{id:"level-1",title:"初窥门径",description:"完成第 1 个关卡",icon:"🚪",category:"mastery",rarity:"common",xpReward:50,condition:e=>e.completedLevels>=1,progress:e=>({current:Math.min(e.completedLevels,1),total:1})},{id:"level-half",title:"半程英雄",description:"完成 50% 的关卡",icon:"⭐",category:"mastery",rarity:"rare",xpReward:300,condition:e=>e.completedLevels>=Math.ceil(e.totalLevels/2),progress:e=>({current:Math.min(e.completedLevels,Math.ceil(e.totalLevels/2)),total:Math.ceil(e.totalLevels/2)})},{id:"level-all",title:"登峰造极",description:"完成所有关卡",icon:"👑",category:"mastery",rarity:"legendary",xpReward:1e3,condition:e=>e.completedLevels>=e.totalLevels&&e.totalLevels>0,progress:e=>({current:Math.min(e.completedLevels,e.totalLevels),total:e.totalLevels})},{id:"xp-100",title:"小有所成",description:"累计获得 100 XP",icon:"💫",category:"learning",rarity:"common",xpReward:30,condition:e=>e.totalXP>=100,progress:e=>({current:Math.min(e.totalXP,100),total:100})},{id:"xp-500",title:"中流砥柱",description:"累计获得 500 XP",icon:"✨",category:"learning",rarity:"rare",xpReward:100,condition:e=>e.totalXP>=500,progress:e=>({current:Math.min(e.totalXP,500),total:500})},{id:"xp-1000",title:"登堂入室",description:"累计获得 1000 XP",icon:"🌟",category:"learning",rarity:"epic",xpReward:250,condition:e=>e.totalXP>=1e3,progress:e=>({current:Math.min(e.totalXP,1e3),total:1e3})},{id:"streak-3",title:"坚持不懈",description:"连续学习 3 天",icon:"🔥",category:"streak",rarity:"common",xpReward:50,condition:e=>e.streak>=3,progress:e=>({current:Math.min(e.streak,3),total:3})},{id:"streak-7",title:"周周向上",description:"连续学习 7 天",icon:"🔥",category:"streak",rarity:"rare",xpReward:150,condition:e=>e.streak>=7,progress:e=>({current:Math.min(e.streak,7),total:7})},{id:"streak-30",title:"持之以恒",description:"连续学习 30 天",icon:"🌋",category:"streak",rarity:"epic",xpReward:500,condition:e=>e.streak>=30,progress:e=>({current:Math.min(e.streak,30),total:30})},{id:"all-rounder",title:"全能选手",description:"同时拥有 5 个成就",icon:"🏆",category:"special",rarity:"epic",xpReward:300,condition:e=>e.completedLessons>=5&&e.completedChallenges>=5&&e.completedLevels>=1},{id:"first-day",title:"启航",description:"欢迎来到 Python Quest",icon:"🎉",category:"special",rarity:"common",xpReward:10,condition:()=>!0}],zl=[{id:"all",label:"全部",icon:"🏆"},{id:"learning",label:"学习",icon:"📚"},{id:"challenge",label:"挑战",icon:"⚔️"},{id:"mastery",label:"精通",icon:"👑"},{id:"streak",label:"连续",icon:"🔥"},{id:"special",label:"特殊",icon:"✨"}],fu={common:{label:"普通",color:"#94a3b8",bg:"rgba(148, 163, 184, 0.15)"},rare:{label:"稀有",color:"#3b82f6",bg:"rgba(59, 130, 246, 0.15)"},epic:{label:"史诗",color:"#a855f7",bg:"rgba(168, 85, 247, 0.15)"},legendary:{label:"传说",color:"#f59e0b",bg:"rgba(245, 158, 11, 0.15)"}},_g=[{rank:1,name:"PythonMaster",avatar:"PM",xp:2850,streak:45,levels:9,color:"#f59e0b"},{rank:2,name:"CodeWizard",avatar:"CW",xp:2340,streak:32,levels:8,color:"#a855f7"},{rank:3,name:"DataDragon",avatar:"DD",xp:1980,streak:28,levels:8,color:"#3b82f6"},{rank:4,name:"LoopLegend",avatar:"LL",xp:1650,streak:21,levels:7,color:"#10b981"},{rank:5,name:"FunctionFox",avatar:"FF",xp:1320,streak:18,levels:6,color:"#ec4899"},{rank:6,name:"SyntaxSage",avatar:"SS",xp:1080,streak:15,levels:5,color:"#06b6d4"},{rank:7,name:"BinaryBard",avatar:"BB",xp:920,streak:12,levels:4,color:"#84cc16"},{rank:8,name:"RecursionR",avatar:"RR",xp:760,streak:10,levels:3,color:"#f97316"},{rank:9,name:"TupleTitan",avatar:"TT",xp:540,streak:8,levels:2,color:"#8b5cf6"},{rank:10,name:"StringSlayer",avatar:"ST",xp:320,streak:5,levels:1,color:"#ef4444"}],on="python-quest-progress",Gn="v4-gist",mu=()=>new Date().toISOString().slice(0,10),Je={xp:50,totalXP:500,streak:7,studyDays:[mu()],lastStudyDate:mu(),levels:{1:{unlocked:!0,completed:!1,lessons:{},challenges:{}},2:{unlocked:!0,completed:!1,lessons:{},challenges:{}},3:{unlocked:!0,completed:!1,lessons:{},challenges:{}},4:{unlocked:!0,completed:!1,lessons:{},challenges:{}},5:{unlocked:!0,completed:!1,lessons:{},challenges:{}},6:{unlocked:!0,completed:!1,lessons:{},challenges:{}},7:{unlocked:!0,completed:!1,lessons:{},challenges:{}},8:{unlocked:!0,completed:!1,lessons:{},challenges:{}},9:{unlocked:!0,completed:!1,lessons:{},challenges:{}}},unlockedAchievements:["first-day"],claimedAchievements:[],activityLog:[{id:"welcome",type:"achievement",title:"欢迎来到 Python Quest",description:"开始你的编程冒险之旅",xp:10,timestamp:new Date().toISOString(),icon:"🎉"}]};function hu(e){return!e||typeof e!="object"?{...Je}:{...Je,...e,levels:e.levels?{...Je.levels,...e.levels}:{...Je.levels},unlockedAchievements:Array.isArray(e.unlockedAchievements)?e.unlockedAchievements:Je.unlockedAchievements,claimedAchievements:Array.isArray(e.claimedAchievements)?e.claimedAchievements:Je.claimedAchievements,activityLog:Array.isArray(e.activityLog)&&e.activityLog.length>0?e.activityLog:Je.activityLog,studyDays:Array.isArray(e.studyDays)?e.studyDays:Je.studyDays}}const hp=w.createContext(void 0);function gu(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function xg({children:e}){const{auth:t,isLoading:n}=Da(),[s,r]=w.useState("idle"),[l,a]=w.useState(()=>{try{const S=localStorage.getItem(on),O=localStorage.getItem(on+"-version");if(S&&O===Gn)return JSON.parse(S);localStorage.setItem(on+"-version",Gn)}catch{}return{...Je}}),o=w.useRef(!1),u=w.useRef(null);w.useEffect(()=>{if(!n){if(!t||!t.gistId){r("idle");return}o.current||(r("loading"),ng(t.token,t.gistId).then(S=>{S&&S.progress&&a(O=>{const D=hu(S.progress),I=O.totalXP,z=D.totalXP;return I>z?hu({...D,...O}):D}),r("synced"),o.current=!0}).catch(S=>{console.error("加载云端进度失败",S),r("error"),o.current=!0}))}},[t,n]),w.useEffect(()=>{t||(o.current=!1,r("idle"))},[t]),w.useEffect(()=>{try{localStorage.setItem(on,JSON.stringify(l))}catch{}t&&t.gistId&&o.current&&s!=="loading"&&(u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{r("syncing"),uu(t.token,t.gistId,{progress:l,savedAt:new Date().toISOString(),version:Gn}).then(()=>r("synced")).catch(S=>{console.error("上传 Gist 失败",S),r("error")})},1500))},[l,t,s]);const c=w.useCallback(S=>{const O=Object.values(S.levels).reduce((F,W)=>F+Object.values(W.lessons).filter(K=>K.completed).length,0),D=Object.values(S.levels).reduce((F,W)=>F+Object.values(W.challenges).filter(K=>K.completed).length,0),I=Object.values(S.levels).filter(F=>F.completed).length,z=Object.keys(S.levels).length,C={totalXP:S.totalXP,streak:S.streak,completedLevels:I,completedLessons:O,completedChallenges:D,perfectChallenges:D,totalLevels:z},A=[];for(const F of Ht)S.unlockedAchievements.includes(F.id)||F.condition(C)&&A.push(F.id);return A.length>0?{...S,unlockedAchievements:[...S.unlockedAchievements,...A]}:S},[]),g=w.useCallback((S,O)=>{var D,I;return((I=(D=l.levels[S])==null?void 0:D.lessons[O])==null?void 0:I.completed)||!1},[l]),m=w.useCallback((S,O)=>{var D,I;return((I=(D=l.levels[S])==null?void 0:D.challenges[O])==null?void 0:I.completed)||!1},[l]),h=w.useCallback(S=>{var O;return((O=l.levels[S])==null?void 0:O.unlocked)||!1},[l]),x=w.useCallback(S=>{var O;return((O=l.levels[S])==null?void 0:O.completed)||!1},[l]),_=w.useCallback(S=>l.unlockedAchievements.includes(S),[l]),v=w.useCallback(S=>l.claimedAchievements.includes(S),[l]),y=w.useCallback((S,O,D)=>{a(I=>{const z=I.levels[S]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},C=z.lessons[O]||{completed:!1};if(C.completed)return I;const A={...z.lessons,[O]:{...C,completed:!0,lastCode:D||C.lastCode,completedAt:new Date().toISOString()}};let F={...I,levels:{...I.levels,[S]:{...z,lessons:A}}};return F=c(F),F})},[c]),p=w.useCallback((S,O,D=10,I)=>{a(z=>{const C=z.levels[S]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},A=C.challenges[O]||{completed:!1,attempts:0},F=A.completed,W={...C.challenges,[O]:{...A,completed:!0,lastCode:I||A.lastCode,completedAt:new Date().toISOString(),attempts:A.attempts+1}},K=Object.values(W).every(Hn=>Hn.completed),ln=Object.values(C.lessons).every(Hn=>Hn.completed),ze=K&&ln,Ft=S+1,Qe={...z.levels,[S]:{...C,challenges:W,completed:ze}};ze&&z.levels[Ft]&&(Qe[Ft]={...z.levels[Ft],unlocked:!0});let De={...z,xp:F?z.xp:z.xp+D,totalXP:F?z.totalXP:z.totalXP+D,levels:Qe};if(ze){const Hn={id:gu(),type:"level",title:`完成第 ${S} 关`,description:"解锁下一关卡",timestamp:new Date().toISOString(),icon:"🎊"};De={...De,activityLog:[Hn,...De.activityLog].slice(0,100)}}return De=c(De),De})},[c]),d=w.useCallback(S=>{a(O=>{if(!O.unlockedAchievements.includes(S)||O.claimedAchievements.includes(S))return O;const D=Ht.find(z=>z.id===S);if(!D)return O;const I={id:gu(),type:"achievement",title:`解锁成就：${D.title}`,description:D.description,xp:D.xpReward,timestamp:new Date().toISOString(),icon:D.icon};return{...O,xp:O.xp+D.xpReward,totalXP:O.totalXP+D.xpReward,claimedAchievements:[...O.claimedAchievements,S],activityLog:[I,...O.activityLog].slice(0,100)}})},[]),f=w.useCallback((S,O)=>{var D,I;return(I=(D=l.levels[S])==null?void 0:D.lessons[O])==null?void 0:I.lastCode},[l]),j=w.useCallback((S,O)=>{var D,I;return(I=(D=l.levels[S])==null?void 0:D.challenges[O])==null?void 0:I.lastCode},[l]),N=w.useCallback((S,O,D)=>{a(I=>{const z=I.levels[S]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},C=z.lessons[O]||{completed:!1};return{...I,levels:{...I.levels,[S]:{...z,lessons:{...z.lessons,[O]:{...C,lastCode:D}}}}}})},[]),E=w.useCallback((S,O,D)=>{a(I=>{const z=I.levels[S]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},C=z.challenges[O]||{completed:!1,attempts:0};return{...I,levels:{...I.levels,[S]:{...z,challenges:{...z.challenges,[O]:{...C,lastCode:D}}}}}})},[]),R=w.useCallback(S=>{const O=l.levels[S];if(!O)return{completed:0,total:0,percent:0};const D=Object.values(O.lessons),I=Object.values(O.challenges),z=D.filter(A=>A.completed).length+I.filter(A=>A.completed).length,C=D.length+I.length;return{completed:z,total:C,percent:C>0?Math.round(z/C*100):0}},[l]),b=w.useCallback(()=>{let S=0,O=0;for(const D of Object.values(l.levels))S+=Object.keys(D.lessons).length+Object.keys(D.challenges).length,O+=Object.values(D.lessons).filter(I=>I.completed).length,O+=Object.values(D.challenges).filter(I=>I.completed).length;return{completed:O,total:S,percent:S>0?Math.round(O/S*100):0}},[l]),P=w.useCallback((S=10)=>l.activityLog.slice(0,S),[l]),M=w.useCallback(()=>{a({...Je});try{localStorage.removeItem(on),localStorage.setItem(on+"-version",Gn)}catch{}},[]),T=w.useCallback(async()=>{if(!(!t||!t.gistId)){r("syncing");try{await uu(t.token,t.gistId,{progress:l,savedAt:new Date().toISOString(),version:Gn}),r("synced")}catch(S){console.error("手动同步失败",S),r("error")}}},[t,l]),ae=w.useMemo(()=>{const S=Object.values(l.levels).reduce((z,C)=>z+Object.values(C.lessons).filter(A=>A.completed).length,0),O=Object.values(l.levels).reduce((z,C)=>z+Object.values(C.challenges).filter(A=>A.completed).length,0),D=Object.values(l.levels).filter(z=>z.completed).length,I=Object.keys(l.levels).length;return{totalXP:l.totalXP,streak:l.streak,completedLevels:D,completedLessons:S,completedChallenges:O,perfectChallenges:O,totalLevels:I}},[l]);return i.jsx(hp.Provider,{value:{progress:l,stats:ae,syncStatus:s,isLessonCompleted:g,isChallengeCompleted:m,isLevelUnlocked:h,isLevelCompleted:x,isAchievementUnlocked:_,isAchievementClaimed:v,completeLesson:y,completeChallenge:p,claimAchievement:d,getLessonCode:f,getChallengeCode:j,saveLessonCode:N,saveChallengeCode:E,getLevelProgress:R,getOverallProgress:b,getRecentActivities:P,resetProgress:M,manualSync:T},children:e})}function Bn(){const e=w.useContext(hp);if(e===void 0)throw new Error("useProgress must be used within a ProgressProvider");return e}function wg({isOpen:e,onClose:t}){const{signInWithToken:n,isLoggingIn:s,loginError:r}=Da(),[l,a]=w.useState(""),[o,u]=w.useState(!1);if(w.useEffect(()=>{e&&a("")},[e]),w.useEffect(()=>{const g=m=>{m.key==="Escape"&&e&&t()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[e,t]),!e)return null;const c=async g=>{g.preventDefault(),await n(l)&&t()};return i.jsx("div",{className:"login-modal-backdrop",onClick:t,children:i.jsxs("div",{className:"login-modal",onClick:g=>g.stopPropagation(),children:[i.jsx("button",{className:"lm-close",onClick:t,"aria-label":"关闭",children:"×"}),i.jsxs("div",{className:"lm-header",children:[i.jsx("div",{className:"lm-icon",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"40",height:"40",fill:"currentColor",children:i.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})}),i.jsx("h2",{className:"lm-title",children:"使用 GitHub 登录"}),i.jsx("p",{className:"lm-subtitle",children:"连接 GitHub 账号，云端保存你的学习进度"})]}),i.jsxs("form",{onSubmit:c,className:"lm-form",children:[i.jsxs("div",{className:"lm-field",children:[i.jsxs("label",{className:"lm-label",children:[i.jsx("span",{children:"Personal Access Token"}),i.jsx("span",{className:"lm-required",children:"必填"})]}),i.jsxs("div",{className:"lm-input-wrap",children:[i.jsx("input",{type:o?"text":"password",className:"lm-input",value:l,onChange:g=>a(g.target.value),placeholder:"ghp_xxxxxxxxxxxxxxxxxxxx",autoComplete:"off",spellCheck:!1}),i.jsx("button",{type:"button",className:"lm-toggle",onClick:()=>u(g=>!g),"aria-label":o?"隐藏":"显示",children:o?"🙈":"👁️"})]}),i.jsx("p",{className:"lm-hint",children:"需要 Gist 权限。Token 仅保存在你的浏览器本地，不会上传到任何服务器。"})]}),r&&i.jsxs("div",{className:"lm-error",children:[i.jsx("span",{children:"⚠️"})," ",r]}),i.jsx("button",{type:"submit",className:"lm-submit",disabled:s||!l.trim(),children:s?"连接中...":"登录"})]}),i.jsx("div",{className:"lm-guide",children:i.jsxs("details",{children:[i.jsx("summary",{children:"📖 如何获取 Token？（点击展开）"}),i.jsxs("ol",{className:"lm-steps",children:[i.jsxs("li",{children:["访问 ",i.jsx("a",{href:"https://github.com/settings/tokens?type=beta",target:"_blank",rel:"noopener noreferrer",children:"github.com/settings/tokens"})]}),i.jsxs("li",{children:["点击 ",i.jsx("strong",{children:"Generate new token"})," → 选择 ",i.jsx("strong",{children:"Fine-grained"})]}),i.jsx("li",{children:'设置 Token 名称（如 "Python Quest"）和过期时间'}),i.jsxs("li",{children:["在 ",i.jsx("strong",{children:"Resource owner"})," 选择你的账号"]}),i.jsxs("li",{children:["在 ",i.jsx("strong",{children:"Repository access"})," 中选择 ",i.jsx("strong",{children:"All repositories"})," 或仅特定仓库"]}),i.jsxs("li",{children:["展开 ",i.jsx("strong",{children:"Account permissions"}),"，找到 ",i.jsx("strong",{children:"Gists"})," 权限，设置为 ",i.jsx("strong",{children:"Read and write"})]}),i.jsxs("li",{children:["点击 ",i.jsx("strong",{children:"Generate token"}),"，复制生成的 token（只显示一次！）"]}),i.jsx("li",{children:"回到这里粘贴 token 并登录"})]}),i.jsxs("div",{className:"lm-warning",children:[i.jsx("strong",{children:"⚠️ 安全提示："}),"请勿将 Token 分享给他人。退出登录或更换设备时，记得在 GitHub 设置中撤销旧 Token。"]})]})})]})})}function jg({showUserInfo:e}){var h,x;const t=zs(),{progress:n,syncStatus:s}=Bn(),{auth:r,signOutUser:l}=Da(),[a,o]=w.useState(!1),u=t.pathname==="/",c=e!==void 0?e:!u,g=((x=(h=r==null?void 0:r.user)==null?void 0:h.login)==null?void 0:x.slice(0,2).toUpperCase())||"LY",m=()=>r?s==="loading"?i.jsx("span",{className:"sync-badge loading",children:"同步中..."}):s==="syncing"?i.jsx("span",{className:"sync-badge loading",children:"上传中..."}):s==="synced"?i.jsx("span",{className:"sync-badge synced",children:"☁️ 已同步"}):s==="error"?i.jsx("span",{className:"sync-badge error",children:"同步失败"}):null:i.jsx("span",{className:"sync-badge local",children:"本地保存"});return i.jsxs(i.Fragment,{children:[i.jsx("nav",{className:`navbar ${u?"navbar-home":"navbar-inner"}`,children:i.jsxs("div",{className:"navbar-container container",children:[i.jsxs(Ye,{to:"/",className:"navbar-logo",children:[i.jsx("div",{className:"logo-icon",children:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),i.jsx("span",{className:"logo-text",children:"Python Quest"})]}),i.jsxs("div",{className:"navbar-links",children:[i.jsx(Ye,{to:"/",className:`nav-link ${t.pathname==="/"?"active":""}`,children:"首页"}),i.jsx(Ye,{to:"/map",className:`nav-link ${t.pathname==="/map"?"active":""}`,children:"冒险地图"}),i.jsx(Ye,{to:"/path",className:`nav-link ${t.pathname==="/path"?"active":""}`,children:"学习路径"}),i.jsx(Ye,{to:"/achievements",className:`nav-link ${t.pathname==="/achievements"?"active":""}`,children:"成就"}),i.jsx(Ye,{to:"/leaderboard",className:`nav-link ${t.pathname==="/leaderboard"?"active":""}`,children:"排行榜"})]}),i.jsxs("div",{className:"navbar-actions",children:[c&&i.jsxs("div",{className:"user-info",children:[i.jsxs("div",{className:"xp-badge",children:[i.jsx("span",{className:"xp-icon",children:"⭐"}),i.jsxs("span",{className:"xp-text",children:[n.xp," / ",n.totalXP," XP"]})]}),i.jsxs("div",{className:"streak-badge",children:[i.jsx("span",{className:"streak-icon",children:"🔥"}),i.jsxs("span",{className:"streak-text",children:[n.streak,"天"]})]}),m(),r?i.jsx("a",{className:"avatar avatar-online",title:`${r.user.name||r.user.login} (@${r.user.login})`,href:r.user.html_url,target:"_blank",rel:"noopener noreferrer",children:i.jsx("img",{src:r.user.avatar_url,alt:g})}):i.jsx("div",{className:"avatar",children:i.jsx("span",{children:"LY"})})]}),r?i.jsx("button",{className:"btn btn-secondary btn-sm",onClick:l,children:"退出"}):i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>o(!0),children:[i.jsx("span",{className:"btn-icon",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor",children:i.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})}),"GitHub 登录"]})]})]})}),i.jsx(wg,{isOpen:a,onClose:()=>o(!1)})]})}function kg(){return i.jsxs("footer",{className:"footer",children:[i.jsxs("div",{className:"container footer-container",children:[i.jsxs("div",{className:"footer-brand",children:[i.jsxs(Ye,{to:"/",className:"footer-logo",children:[i.jsx("div",{className:"logo-icon",children:i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),i.jsx("span",{className:"logo-text",children:"Python Quest"})]}),i.jsx("p",{className:"footer-tagline",children:"通过游戏化学习，从零到英雄掌握Python编程"})]}),i.jsxs("div",{className:"footer-links",children:[i.jsxs("div",{className:"footer-column",children:[i.jsx("h4",{children:"关于我们"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"#",children:"课程介绍"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"团队成员"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"联系我们"})})]})]}),i.jsxs("div",{className:"footer-column",children:[i.jsx("h4",{children:"学习资源"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"#",children:"学习路径"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"文档中心"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"常见问题"})})]})]}),i.jsxs("div",{className:"footer-column",children:[i.jsx("h4",{children:"社区"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"#",children:"排行榜"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"讨论区"})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:"合作伙伴"})})]})]})]})]}),i.jsx("div",{className:"footer-bottom",children:i.jsx("div",{className:"container",children:i.jsx("p",{children:"© 2024 Python Quest. All rights reserved."})})})]})}function Ng(){const e=[{value:"10",label:"大关卡"},{value:"52",label:"编程挑战"},{value:"156+",label:"学习者"},{value:"98%",label:"好评率"}];return i.jsxs("div",{className:"home-page",children:[i.jsxs("section",{className:"hero-section",children:[i.jsxs("div",{className:"hero-bg-decorations",children:[i.jsx("div",{className:"floating-element elem-1"}),i.jsx("div",{className:"floating-element elem-2"}),i.jsx("div",{className:"floating-element elem-3"}),i.jsx("div",{className:"code-symbol code-1",children:"</>"}),i.jsx("div",{className:"code-symbol code-2",children:"{ }"}),i.jsx("div",{className:"code-symbol code-3",children:"🐍"})]}),i.jsxs("div",{className:"container hero-content",children:[i.jsx("div",{className:"hero-badge animate-fade-in",children:i.jsx("span",{children:"🎮 游戏化学习"})}),i.jsx("h1",{className:"hero-title animate-fade-in delay-100",children:i.jsx("span",{className:"title-gradient",children:"Python Quest"})}),i.jsx("p",{className:"hero-subtitle animate-fade-in delay-200",children:"通过 9 大关卡、50+ 编程挑战，从零到英雄独立完成项目"}),i.jsxs("div",{className:"hero-actions animate-fade-in delay-300",children:[i.jsx(Ye,{to:"/map",className:"btn btn-primary btn-lg",children:"开始冒险"}),i.jsxs("button",{className:"btn btn-secondary btn-lg",children:[i.jsx("span",{className:"btn-icon",children:"▶"}),"免费试学"]})]}),i.jsx("div",{className:"hero-stats animate-fade-in delay-400",children:e.map((t,n)=>i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"stat-value",children:t.value}),i.jsx("div",{className:"stat-label",children:t.label})]},n))})]})]}),i.jsx("section",{className:"features-section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"为什么选择 Python Quest？"}),i.jsx("p",{className:"section-subtitle",children:"游戏化学习，让编程变得有趣又高效"}),i.jsxs("div",{className:"features-grid",children:[i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:"🎯"}),i.jsx("h3",{children:"闯关式学习"}),i.jsx("p",{children:"9大精心设计的关卡，从基础到进阶，每一步都有明确的目标和成就感。"})]}),i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:"💻"}),i.jsx("h3",{children:"实战挑战"}),i.jsx("p",{children:"50+编程挑战，边学边练，在实践中真正掌握Python编程技能。"})]}),i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:"🏆"}),i.jsx("h3",{children:"成就系统"}),i.jsx("p",{children:"XP经验值、徽章、排行榜，在竞争中激发学习动力，不断进步。"})]}),i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:"📊"}),i.jsx("h3",{children:"进度追踪"}),i.jsx("p",{children:"可视化学习地图，清晰展示学习进度，让成长之路一目了然。"})]})]})]})}),i.jsx("section",{className:"cta-section",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"cta-card",children:[i.jsx("h2",{children:"准备好开始你的编程冒险了吗？"}),i.jsx("p",{children:"加入 Python Quest，从零开始，成为Python编程高手"}),i.jsx(Ye,{to:"/map",className:"btn btn-primary btn-lg",children:"立即开始 →"})]})})})]})}const Xt=[{id:1,title:"第1关：初见 Python",subtitle:"认识 Python 的世界",description:"了解Python的历史、特点和应用场景，安装开发环境，写出你的第一行代码。",status:"completed",difficulty:1,duration:"约1小时",lessons:5,challenges:3,topics:["Python简介","环境搭建","第一个程序","打印输出"],side:"left"},{id:2,title:"第2关：变量与数据类型",subtitle:"掌握数据的存储与运算",description:"学习变量、基本数据类型、运算符和类型转换，打下编程基础。",status:"completed",difficulty:1,duration:"约1.5小时",lessons:6,challenges:4,topics:["变量","数字类型","字符串","运算符","类型转换"],side:"right"},{id:3,title:"第3关：条件判断",subtitle:"让程序学会思考",description:"学习if-else条件语句、逻辑运算符和比较运算，让程序做出决策。",status:"completed",difficulty:2,duration:"约1.5小时",lessons:5,challenges:5,topics:["if语句","else和elif","比较运算","逻辑运算","嵌套条件"],side:"left"},{id:4,title:"第4关：循环结构",subtitle:"重复的力量",description:"掌握for循环、while循环、循环控制语句，以及循环的嵌套使用。",status:"current",difficulty:2,duration:"约2小时",lessons:7,challenges:6,topics:["for循环","range()函数","while循环","break与continue","循环嵌套"],side:"right"},{id:5,title:"第5关：列表与元组",subtitle:"数据的集合",description:"学习列表和元组的使用，掌握索引、切片、常用方法和列表推导式。",status:"locked",difficulty:2,duration:"约2小时",lessons:6,challenges:5,topics:["列表基础","列表操作","元组","切片","列表推导式"],side:"left"},{id:6,title:"第6关：字典与集合",subtitle:"键值的魔法",description:"深入学习字典和集合的使用，理解哈希表原理和应用场景。",status:"locked",difficulty:3,duration:"约2小时",lessons:6,challenges:5,topics:["字典基础","字典操作","集合","字典推导式","常用场景"],side:"right"},{id:7,title:"第7关：函数",subtitle:"代码的封装与复用",description:"学习函数的定义、参数、返回值、作用域，以及递归和高阶函数。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:8,challenges:7,topics:["函数定义","参数类型","返回值","作用域","递归","Lambda函数"],side:"left"},{id:8,title:"第8关：文件操作",subtitle:"与文件系统交互",description:"学习文件的读写、目录操作、异常处理，掌握数据持久化。",status:"locked",difficulty:3,duration:"约2小时",lessons:6,challenges:5,topics:["文件读写","上下文管理器","目录操作","异常处理","JSON处理"],side:"right"},{id:9,title:"第9关：项目实战",subtitle:"综合项目挑战",description:"运用所学知识，完成一个完整的Python项目，检验你的学习成果。",status:"locked",difficulty:4,duration:"约3小时",lessons:4,challenges:3,topics:["项目规划","模块化设计","测试调试","项目部署"],side:"left"},{id:10,title:"第10关：字符串深入",subtitle:"玩转字符串操作",description:"深入学习字符串的索引、切片、常用方法（find、replace、split、join、format等），掌握字符串的进阶处理技巧。",status:"locked",difficulty:2,duration:"约2小时",lessons:6,challenges:4,topics:["字符串索引","字符串方法","格式化输出","字符串编码"],side:"right"},{id:11,title:"第11关：模块与包",subtitle:"代码的组织艺术",description:"学习模块的导入、自定义模块、Python包管理（pip）、常用标准库（sys、os、datetime、re），让代码更易管理。",status:"locked",difficulty:3,duration:"约2小时",lessons:5,challenges:4,topics:["import语句","自定义模块","包管理","标准库"],side:"left"},{id:12,title:"第12关：面向对象基础",subtitle:"类与对象入门",description:"学习面向对象编程思想，理解类、对象、属性、方法、构造函数、self，掌握OOP的核心概念。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:6,challenges:4,topics:["类与对象","属性方法","构造函数","self关键字","封装"],side:"right"},{id:13,title:"第13关：继承与多态",subtitle:"OOP进阶特性",description:"深入学习类的继承、方法重写、super()函数、多态、抽象类，掌握面向对象的高级特性。",status:"locked",difficulty:4,duration:"约2.5小时",lessons:5,challenges:4,topics:["类的继承","方法重写","super()","多态","抽象类"],side:"left"},{id:14,title:"第14关：异常处理进阶",subtitle:"优雅地处理错误",description:"学习自定义异常、异常的传递、with语句、断言、调试技巧，编写健壮的Python程序。",status:"locked",difficulty:3,duration:"约2小时",lessons:5,challenges:3,topics:["自定义异常","异常链","上下文管理","断言与调试"],side:"right"},{id:15,title:"第15关：文件与目录",subtitle:"os模块的妙用",description:"深入学习os、os.path、shutil模块，掌握路径处理、目录操作、文件遍历、批量重命名等高级文件操作。",status:"locked",difficulty:3,duration:"约2小时",lessons:5,challenges:4,topics:["os模块","路径处理","目录遍历","文件操作"],side:"left"},{id:16,title:"第16关：高级特性",subtitle:"生成器、装饰器与闭包",description:"学习Python的三大高级特性：生成器（yield）、装饰器（@）、闭包，掌握函数式编程的核心思想。",status:"locked",difficulty:4,duration:"约3小时",lessons:6,challenges:4,topics:["生成器","装饰器","闭包","Lambda","map/filter/reduce"],side:"right"},{id:17,title:"第17关：常用标准库",subtitle:"站在巨人的肩膀上",description:"系统学习Python常用标准库：datetime、re、json、collections、itertools，让代码更优雅高效。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:6,challenges:4,topics:["datetime","正则表达式","json","collections"],side:"left"},{id:18,title:"第18关：综合实战",subtitle:"完成Python大师之路",description:"综合运用所有知识，完成爬虫、命令行工具、数据处理等实战项目，成为真正的Python大师！",status:"locked",difficulty:5,duration:"约4小时",lessons:5,challenges:4,topics:["项目实战","命令行工具","数据处理","代码优化"],side:"right"}],Dl=[{id:1,title:"for 循环基础",duration:"12分钟",completed:!0,type:"video"},{id:2,title:"range() 函数详解",duration:"15分钟",completed:!0,type:"video"},{id:3,title:"遍历列表与字典",duration:"18分钟",completed:!0,type:"video"},{id:4,title:"while 循环",duration:"14分钟",completed:!0,type:"video"},{id:5,title:"break 与 continue",duration:"16分钟",completed:!1,type:"video"},{id:6,title:"循环嵌套",duration:"20分钟",completed:!1,type:"video"},{id:7,title:"实战：打印九九乘法表",duration:"25分钟",completed:!1,type:"interactive"}],Cg=[{id:1,title:"计算1到100的和",difficulty:"easy",completed:!0},{id:2,title:"打印三角形图案",difficulty:"easy",completed:!0},{id:3,title:"找出100以内的素数",difficulty:"medium",completed:!1},{id:4,title:"冒泡排序实现",difficulty:"medium",completed:!1},{id:5,title:"猜数字游戏",difficulty:"medium",completed:!1},{id:6,title:"斐波那契数列",difficulty:"hard",completed:!1}],gp={4:[{id:1,title:"什么是循环？",type:"explanation",content:`**循环**是编程中最强大的概念之一。它允许我们**重复执行一段代码**，而不需要复制粘贴。

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

完成后点击运行，你的代码应该输出：2, 4, 6, ..., 20`,hint:"试试 range(2, 21, 2)，这样每次都会增加 2",answer:`# 打印 1 到 20 之间的所有偶数
for i in range(2, 21, 2):
    print(i)`,explanation:`**关键点：range(start, stop, step)**
- start=2：从 2 开始
- stop=21：到 20 结束（左闭右开）
- step=2：每次加 2

**其他解法**：
- 解法 2：\`for i in range(1, 21): if i % 2 == 0: print(i)\`
- 解法 3：\`for i in range(20): print(i * 2 + 2)\`（不推荐，难懂）

**易错点**：
- 写成 \`range(1, 21, 2)\` 会得到 1, 3, 5...（奇数）
- 写成 \`range(2, 20, 2)\` 少一个 20（左闭右开）`,code:`# 请在此处编写代码
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

\`range(1, 10, 3)\` 会生成哪些数字？`,options:["1, 4, 7, 10","1, 4, 7","0, 3, 6, 9","1, 3, 6, 9"],correctAnswer:1,explanation:`**逐步拆解 range(1, 10, 3)**：
- start=1：起点是 1
- stop=10：终点是 10（不包含）
- step=3：每次加 3
- 序列：1, 1+3=4, 4+3=7, 7+3=10（10 ≥ 10，停止）
- 结果：**1, 4, 7**

**注意左闭右开**：
- \`range(1, 10)\` = 1,2,3,4,5,6,7,8,9（不包含 10）
- 加步长不影响这个规则`},{id:7,title:"break 与 continue",type:"explanation",content:`循环中有两个重要的控制语句：

**break** - 立即终止整个循环
- 当满足某个条件时，直接跳出循环，不再执行后续迭代

**continue** - 跳过当前迭代，继续下一次
- 当满足某个条件时，跳过本次循环剩余的代码，直接进入下一次循环

这两个语句让我们可以更灵活地控制循环的执行流程。`},{id:8,title:"练习：break 与 continue",type:"practice",content:`**实战练习！** 使用 break 和 continue 完成两个小任务。

**任务 1**：打印 1 到 20 的数字，但**跳过**所有 3 的倍数
- 用 \`continue\` 跳过 3 的倍数

**任务 2**：从 1 开始累加，当和**超过 100** 时停止循环
- 用 \`break\` 退出循环
- 打印最终的累加和

预期输出：
\`\`\`
（任务1）1 2 4 5 7 8 10 11 13 14 16 17 19 20
（任务2）累加和 = 105
\`\`\``,hint:"continue 用 if i % 3 == 0: continue；break 用 if total > 100: break",answer:`# 任务 1：跳过 3 的倍数
print("（任务1）", end="")
for i in range(1, 21):
    if i % 3 == 0:
        continue
    print(i, end=" ")
print()

# 任务 2：累加超过 100 停止
total = 0
for i in range(1, 1000):
    total += i
    if total > 100:
        break
print(f"（任务2）累加和 = {total}")`,explanation:`**continue 的工作原理**：
- 遇到 continue 后，**本次循环剩余的代码不再执行**
- 直接进入下一轮循环
- 任务 1 中：i=3 时 continue，所以不 print

**break 的工作原理**：
- 遇到 break 后，**整个循环立即终止**
- 任务 2 中：total=105 时 > 100，break 跳出

**调试技巧**：
- \`if i % 3 == 0\` 判断是否为 3 的倍数
- 也可以 \`if i in [3, 6, 9, ...]\` 但太麻烦
- break 写在累加之后，所以 total 已经包含了当前 i

**常见错误**：
- 把 \`if total > 100: break\` 写在累加之前会漏算
- 写 \`if total >= 100: break\` 会提前停止（结果不同）`},{id:9,title:"实战：九九乘法表",type:"practice",content:`**终极挑战！** 使用嵌套循环打印九九乘法表。

要求：
- 使用两层 for 循环（外层控制行，内层控制列）
- 每行打印从 1*1 到 i*i 的算式
- 格式如：1x1=1  2x1=2  ...

提示：
- 外层循环变量 i 从 1 到 9
- 内层循环变量 j 从 1 到 i
- 使用 print 的 end 参数控制不换行`,hint:"外层 for i in range(1, 10): 内层 for j in range(1, i+1):",answer:`# 九九乘法表
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}x{i}={j*i}", end="\\t")
    print()  # 换行`,explanation:`**嵌套循环的执行过程**：
- 外层 i=1 → 内层 j 跑 1 次：1x1=1
- 外层 i=2 → 内层 j 跑 1,2：1x2=2  2x2=4
- 外层 i=3 → 内层 j 跑 1,2,3：1x3=3  2x3=6  3x3=9
- ... 以此类推

**关键技巧**：
- \`end="\\t"\` 让数字间用制表符分隔，不换行
- 内层循环结束后 \`print()\` 用来换行
- 用 \`f"{j}x{i}={j*i}"\` 格式化更清晰

**易错点**：
- 内层写成 \`range(1, 10)\` 会变成矩形（每行都一样）
- 忘记内层 \`print()\` 会全部挤一行`,code:`# 打印九九乘法表
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
\`\`\``,hint:"每条信息用一个 print()，注释用 # 开头",answer:`# 自我介绍
# 作者：你的名字
print("我叫小明")
print("我今年 18 岁")
print("我要成为 Python 高手")`,explanation:`**解题思路**：
- 用 \`#\` 写注释说明作者信息
- 每条信息用 \`print()\` 函数输出
- 字符串必须用引号（单/双引号）包裹
- print 默认会换行，无需手动加换行符

**易错点**：
- 忘记加引号会报错 \`NameError\`
- 中文标点不会报错但建议用英文标点`,code:`# 在此写你的自我介绍
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
\`\`\``,options:["Hello 和 World 分别在两行","Hello World 在同一行，中间有空格","HelloWorld 在同一行，无空格","程序报错"],correctAnswer:1,explanation:'**解析**：\n- `end=" "` 把 print 默认的换行符改成了空格，所以第一行末尾不再换行\n- 第二次 print 紧接着输出 `World`\n- 最终输出是 `Hello World`（中间有空格）\n\n**拓展知识**：\n- `end=""` 可以让两次 print 紧挨着输出\n- `sep=""` 可以让多个参数紧挨着输出（不加分隔）'},{id:7,title:"实战：打印个性名片",type:"practice",content:`**综合练习！** 请编写代码，输出一个有个性的"个人名片"。

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
\`\`\``,hint:'可以用 print("=" * 18) 来生成分隔线',answer:`# 制作个人名片
print("=" * 18)
print("	个人名片")
print("=" * 18)
print("姓名：	小明")
print("职业：	学生")
print("座右铭：	代码改变世界")
print("=" * 18)`,explanation:`**解题思路**：
- 用 \`"=" * 18\` 快速生成长分隔线（字符串乘法）
- \\t 制表符让"姓名"、"职业"、"座右铭"对齐
- 每行单独 print 自动换行

**进阶技巧**：
- 把信息存到变量里，f-string 格式化：\`f"姓名：\\t{name}"\`
- 这样改名字时只改一处就够了`,code:`# 制作你的个人名片

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
`},{id:8,title:"变量与赋值入门",type:"explanation",content:`**变量**是用来存储数据的"小盒子"。

\`\`\`
name = "小明"
\`\`\`

上面的代码把字符串 \`"小明"\` 放进了名为 \`name\` 的盒子里。下次想用 \`"小明"\` 时，直接写 \`name\` 就行。

**为什么用变量？**
- 避免重复写同样的值
- 让代码更易读、修改更方便
- 一次定义，多处使用

**变量命名规则**：
- 只能包含字母、数字、下划线
- 不能以数字开头
- 区分大小写（Name 和 name 是不同的）
- 见名知意（age 比 a 好）`},{id:9,title:"实战练习：变量版自我介绍",type:"practice",content:'**再练一次！** 这次用 **变量** 和 **f-string** 重写自我介绍。\n\n要求：\n- 定义 `name`、`age`、`hobby` 三个变量（自己编内容）\n- 用 f-string 把变量拼接到字符串里\n- 输出至少 2 行包含变量的内容\n\n提示：f-string 是 `f"...{变量名}..."`',hint:'print(f"我是 {name}，今年 {age} 岁，喜欢 {hobby}")',answer:`# 用变量改造的自我介绍
name = "小明"
age = 18
hobby = "编程"

print(f"我是 {name}，今年 {age} 岁，喜欢 {hobby}")
print(f"欢迎和我一起学习 Python！")`,explanation:'**为什么用 f-string？**\n- 比字符串拼接 (`+`) 更直观\n- 比 `format()` 更简洁\n- 可以在 `{}` 里放任何表达式：`f"1+1={1+1}"` → `1+1=2`\n\n**三种写法对比**：\n```\n# 写法1：+ 拼接（容易出错）\nprint("我是" + name + "，今年" + str(age) + "岁")\n\n# 写法2：format\nprint("我是{}，今年{}岁".format(name, age))\n\n# 写法3：f-string（推荐）\nprint(f"我是{name}，今年{age}岁")\n```',code:`# 请用变量和 f-string 写自我介绍

`,testCode:`# 测试变量自我介绍
output = _output_buffer.getvalue()

_test_results.append({
    "name": "输出非空",
    "passed": len(output.strip()) > 0,
    "message": "应该有输出内容"
})

_test_results.append({
    "name": "包含中文",
    "passed": any('\\u4e00' <= c <= '\\u9fff' for c in output),
    "message": "输出应该包含中文"
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

预期输出：\`BMI = 22.86\``,hint:"bmi = weight / (height ** 2)，然后用 f-string 打印",answer:`# 计算 BMI
weight = 70
height = 1.75

# 计算 BMI
bmi = weight / (height ** 2)

# 打印结果
print(f"BMI = {bmi:.2f}")`,explanation:"**解题步骤**：\n1. 用 `height ** 2` 计算身高的平方\n2. `weight / (height ** 2)` 得出 BMI\n3. 用 f-string 的 `{bmi:.2f}` 保留 2 位小数\n\n**关键点**：\n- 运算符优先级：`**` 高于 `/`，但加括号更清晰\n- `{bmi:.2f}` 里的 `:` 后是格式说明符\n- `.2f` 表示保留 2 位的浮点数\n\n**拓展**：\n- `{bmi:.1f}` 保留 1 位\n- `{bmi:.0f}` 保留 0 位（四舍五入）\n- `{bmi:8.2f}` 总宽度 8，右对齐",code:`# 计算 BMI
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
\`\`\``,options:["2 1 25","2.5 1 10","2 1 10","2.5 1 25"],correctAnswer:0,explanation:'**逐步计算**：\n- `x // y` = 5 `//` 2 = **2**（整除，向下取整）\n- `x % y` = 5 `%` 2 = **1**（取余数）\n- `x ** y` = 5 `**` 2 = **25**（5 的平方）\n\n**注意**：\n- `/` 是普通除法，结果是浮点数：5/2 = 2.5\n- `//` 是整除，结果是整数：5//2 = 2（即使能整除，结果也是 int 类型在 Python 3 之前的版本，3 之后 `/` 总是返回 float）\n\n**记忆技巧**：\n- 整除`//`想象成"切一刀"\n- 取余`%`想象成"切完剩下多少"'},{id:7,title:"类型转换",type:"practice",content:'**实战练习！** 不同类型的数据需要转换后才能正确运算。\n\n请完成以下任务：\n1. 有字符串 `s1 = "15"` 和 `s2 = "27"`\n2. 将它们转换为整数并求和，打印结果\n3. 有整数 `n = 100`，将其转换为字符串并与 `"分"` 拼接打印\n4. 有字符串 `"3.14"`，转换为浮点数并打印其 2 倍\n\n预期输出：\n```\n42\n100分\n6.28\n```',hint:"使用 int()、float()、str() 进行类型转换",answer:`# 类型转换练习
s1 = "15"
s2 = "27"
n = 100

# 1. 字符串转整数求和
result = int(s1) + int(s2)
print(result)

# 2. 整数转字符串拼接
print(str(n) + "分")

# 3. 字符串转浮点数计算
print(float("3.14") * 2)`,explanation:'**关键函数**：\n- `int(字符串)` → 整数（如 `int("15")` = 15）\n- `float(字符串)` → 浮点数（如 `float("3.14")` = 3.14）\n- `str(数字)` → 字符串（如 `str(100)` = "100"）\n\n**为什么需要转换？**\n- 字符串 `+` 是拼接：`"15" + "27"` = "1527"\n- 数字 `+` 是相加：`15 + 27` = 42\n- 字符串和数字不能直接 `+`，必须先转换\n\n**易错点**：\n- `int("3.14")` 会报错（不能把"3.14"直接转成 int）\n- 应该先 `float("3.14")` 再 `int(...)`',code:`# 类型转换练习
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
- 2000 → 是闰年`,hint:"条件：(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)",answer:`# 闰年判断
year = 2024

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year} 是闰年")
else:
    print(f"{year} 不是闰年")`,explanation:`**闰年规则拆解**：
- 规则 1：能被 4 整除 **且** 不能被 100 整除（普通闰年）
- 规则 2：能被 400 整除（世纪闰年）
- 两个规则用 \`or\` 连接，满足任一即可

**为什么这么设计？**
- 地球公转一圈实际是 365.2422 天
- 4 年一闰（多了 0.968 天）能补回大部分
- 但每 100 年会多补一天，所以 100 年不闰
- 400 年又必须补回来（少算了 0.22 天）

**测试用例**：
- 2024：4 整除，100 不整除 → ✅ 是
- 1900：4 整除，100 也整除 → ❌ 不是
- 2000：400 整除 → ✅ 是`,code:`# 闰年判断
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
\`\`\``,options:["A","B","A B","C"],correctAnswer:0,explanation:`**关键点：if-elif-else 只执行第一个满足的分支**

- \`x > 3\`（5 > 3）→ **True**，执行 \`print("A")\`
- 第一个条件满足后，**elif 和 else 都不会再判断**
- 所以不会输出 B

**陷阱提醒**：
- 即使后面的 \`elif x > 4\` 也是 True，也不会执行
- 多个条件互斥时，**条件顺序很重要**：把更严格/更具体的条件放前面`},{id:8,title:"实战：简易计算器",type:"practice",content:`**综合挑战！** 编写一个简易计算器。

要求：
- 有两个数字变量 a = 12, b = 4
- 有一个运算符变量 op = "*"
- 用 if-elif-else 判断运算符，进行对应运算
- 打印结果，格式：\`12 * 4 = 48\`
- 支持 +、-、*、/ 四种运算
- 如果运算符不认识，打印 "不支持的运算"

提示：除法时注意输出可以是浮点数`,hint:'用 if op == "+": ... elif op == "-": ... 的结构',answer:`# 简易计算器
a = 12
b = 4
op = "*"

if op == "+":
    result = a + b
elif op == "-":
    result = a - b
elif op == "*":
    result = a * b
elif op == "/":
    result = a / b
else:
    result = "不支持的运算"

if result == "不支持的运算":
    print("不支持的运算")
else:
    print(f"{a} {op} {b} = {result}")`,explanation:`**实现思路**：
- 用 if-elif-else 链判断运算符
- 字符串用 \`==\` 比较（不是 \`=\`）
- 注意除法 \`/\` 在 Python 中返回浮点数

**格式控制技巧**：
- 用 f-string 拼接结果
- 把"是否支持"也用变量保存，统一处理

**进阶版（用字典）**：
\`\`\`
ops = {"+": lambda x,y: x+y, "-": lambda x,y: x-y}
result = ops.get(op, lambda x,y: "不支持")(a, b)
\`\`\``,code:`# 简易计算器
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

祝你在 Python 的道路上越走越远！🚀`}],10:[{id:1,title:"字符串的本质",type:"explanation",content:`**字符串（str）**是 Python 中最重要的数据类型之一，它在底层是**不可变**的字符序列。

**字符串的三大特点**：
- 不可变：创建后不能修改任何字符
- 可迭代：可以用 for 遍历每个字符
- 支持索引：和列表一样有正/负索引

\`\`\`
s = "Hello"
s[0]      # 'H'
s[-1]     # 'o'
s[1:4]    # 'ell'
\`\`\`

**多行字符串**：用三引号 ('三个双引号' 或 '三个单引号') 创建，可跨行。`},{id:2,title:"字符串常用方法（上）",type:"example",content:"Python 字符串提供了大量实用方法，下面是常用的几个：\n\n**查找类**：\n- `str.find(sub)` - 查找子串位置，找不到返回 -1\n- `str.index(sub)` - 同 find，但找不到会报错\n- `str.count(sub)` - 统计子串出现次数\n\n**判断类**：\n- `str.startswith(prefix)` - 是否以指定前缀开头\n- `str.endswith(suffix)` - 是否以指定后缀结尾\n- `str.isdigit()` / `isalpha()` / `isspace()` - 是否为数字/字母/空白\n\n运行下面的代码：",code:`text = "Hello, Python World!"

# 查找
print(text.find("Python"))    # 7
print(text.count("o"))          # 3
print(text.startswith("Hello")) # True
print(text.endswith("!"))        # True

# 判断
print("123".isdigit())   # True
print("abc".isalpha())   # True
print("  ".isspace())    # True
print("abc123".isalnum()) # True（字母+数字）`},{id:3,title:"字符串常用方法（下）",type:"example",content:"**修改类**（注意：原字符串不变，返回新字符串）：\n- `str.replace(old, new)` - 替换\n- `str.upper()` / `lower()` - 大小写转换\n- `str.strip()` - 去除两端空白（也支持 lstrip/rstrip）\n- `str.split(sep)` - 分割为列表\n- `str.join(iterable)` - 用字符串连接可迭代对象\n\n试试看：",code:`text = "  Hello, World!  "

print("|" + text.strip() + "|")           # |Hello, World!|
print(text.upper())                       # HELLO
print(text.lower())                       # hello
print(text.replace("World", "Python"))     # Hello, Python!

# 分割和连接
words = "apple,banana,orange".split(",")
print(words)                  # ['apple', 'banana', 'orange']
print("-".join(words))        # apple-banana-orange`},{id:4,title:"小练习：字符串处理",type:"practice",content:`**练习！** 综合运用字符串方法。

要求：
- 给定字符串 \`s = "  Hello, Python!  "\`
- 去除两端空白
- 全部转为大写
- 用 ", " 分割成列表
- 打印每一步的结果

预期输出：
\`\`\`
原: '|' + s + '|'
处理: 'Hello, Python!'
大写: 'HELLO, PYTHON!'
列表: ['Hello', 'Python!']
\`\`\``,hint:'按顺序用 strip() → upper() → split(", ")',answer:`s = "  Hello, Python!  "

# 1. 去空白
cleaned = s.strip()
print(f"清理: '{cleaned}'")

# 2. 转大写
upper = cleaned.upper()
print(f"大写: '{upper}'")

# 3. 分割
parts = upper.split(", ")
print(f"列表: {parts}")`,explanation:'**关键点**：\n- `strip()` 默认去除空格、\\t、\\n\n- `upper()` 返回新字符串，原字符串不变\n- `split(", ")` 按 ", " 分割（注意空格）\n- 三步操作可以链式调用：`s.strip().upper().split(", ")`',code:`s = "  Hello, Python!  "

# 在此完成字符串处理

`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含Hello",
    "passed": "Hello" in output,
    "message": "应该包含清理后的 Hello"
})
_test_results.append({
    "name": "包含大写",
    "passed": "HELLO" in output,
    "message": "应该包含大写的 HELLO"
})
_test_results.append({
    "name": "包含列表",
    "passed": "[" in output and "]" in output,
    "message": "应该有列表形式输出"
})
`},{id:5,title:"字符串格式化",type:"explanation",content:'**字符串格式化**是把变量插入到字符串中的方法。Python 提供了多种方式：\n\n**1. f-string（Python 3.6+，推荐）**\n```\nname = "小明"\nage = 18\nprint(f"我是{name}，今年{age}岁")  # 我是小明，今年18岁\n```\n\n**2. format() 方法**\n```\nprint("我是{}，今年{}岁".format(name, age))\nprint("我是{0}，今年{1}岁".format(name, age))\n```\n\n**3. % 格式化（旧式）**\n```\nprint("我是%s，今年%d岁" % (name, age))\n```\n\n**4. 格式化控制**\n- `{:.2f}` - 保留 2 位小数\n- `{:>10}` - 右对齐，宽度 10\n- `{:,}` - 千分位分隔符\n- `{:.2%}` - 百分比格式'},{id:6,title:"小测验",type:"quiz",content:'**问题**：执行下面代码后输出什么？\n\n```\ns = "  hello world  "\nprint(s.strip().title())\n```',options:["hello world","Hello World","  hello world  ","HELLO WORLD"],correctAnswer:1,explanation:'**逐步执行**：\n- `s.strip()` → "hello world"（去两端空白）\n- `.title()` → "Hello World"（每个单词首字母大写）\n\n**记忆技巧**：\n- `title()` 把每个单词的首字母大写\n- `capitalize()` 只把第一个字母大写\n- `upper()` 全部大写，`lower()` 全部小写'}],11:[{id:1,title:"什么是模块？",type:"explanation",content:`**模块（module）**就是一个 .py 文件，里面定义了函数、变量、类。

为什么要用模块？
- **代码组织**：把相关代码放一起
- **代码复用**：一处定义，多处使用
- **命名空间**：避免命名冲突

**三种导入方式**：

\`\`\`
# 1. import 模块
import math
print(math.pi)       # 3.14159...

# 2. from 模块 import 名称
from math import pi, sqrt
print(pi)             # 3.14159...

# 3. import 模块 as 别名
import numpy as np
print(np.array([1, 2, 3]))
\`\`\`

**import 的本质**：执行模块文件，并把名字存入当前命名空间。`},{id:2,title:"__name__ 变量",type:"explanation",content:`**\`__name__\`** 是 Python 的内置变量，表示当前模块的名字。

- 当文件**直接运行**时，\`__name__ = "__main__"\`
- 当文件**被导入**时，\`__name__\` = 模块名

**经典用法**：
\`\`\`
def main():
    print("主程序")

if __name__ == "__main__":
    main()
\`\`\`

这样写的好处：
- 直接运行：执行 main()
- 被导入：不会执行 main()，避免副作用`},{id:3,title:"常用标准库",type:"example",content:`Python 自带大量标准库，无需安装即可使用：

**sys** - 系统相关
\`\`\`
import sys
print(sys.version)         # Python 版本
print(sys.platform)        # 操作系统
\`\`\`

**os** - 操作系统接口
\`\`\`
import os
print(os.getcwd())         # 当前工作目录
print(os.listdir("."))     # 列出文件
\`\`\`

**datetime** - 日期时间
\`\`\`
from datetime import datetime
now = datetime.now()
print(now.year, now.month, now.day)
\`\`\`

**random** - 随机数
\`\`\`
import random
print(random.randint(1, 10))   # 1-10 随机整数
print(random.choice(["A", "B", "C"]))
\`\`\`

运行：`,code:`import sys
import os
import random
from datetime import datetime

# 系统信息
print("Python:", sys.version.split()[0])
print("平台:", sys.platform)

# 随机数
nums = [random.randint(1, 100) for _ in range(5)]
print("随机数:", nums)
print("最大:", max(nums), "最小:", min(nums))

# 当前时间
now = datetime.now()
print(f"现在是 {now.year}年{now.month}月{now.day}日")`},{id:4,title:"小练习：自定义模块",type:"practice",content:"**练习！** 创建一个简单的工具模块。\n\n要求：\n- 定义一个变量 `PI = 3.14159`\n- 定义函数 `circle_area(r)` 计算圆面积\n- 定义函数 `circle_circumference(r)` 计算圆周长\n- 在主程序中导入并使用这些\n\n预期输出：\n```\n面积: 78.54\n周长: 31.42\n```",hint:"使用 from 模块 import 方式，或者在同一文件模拟模块",answer:`# 在同一文件中模拟"自定义模块"
PI = 3.14159

def circle_area(r):
    """计算圆的面积"""
    return PI * r ** 2

def circle_circumference(r):
    """计算圆的周长"""
    return 2 * PI * r

# 模拟 from mymodule import circle_area
from types import SimpleNamespace
mymodule = SimpleNamespace(
    PI=PI,
    circle_area=circle_area,
    circle_circumference=circle_circumference
)

# 使用
print(f"面积: {mymodule.circle_area(5):.2f}")
print(f"周长: {mymodule.circle_circumference(5):.2f}")`,explanation:`**真实使用场景**：
- 假设 \`mymodule.py\` 是保存的模块文件
- 主程序用 \`from mymodule import circle_area\` 导入
- 因为 Pyodide 没有文件系统，用 SimpleNamespace 模拟

**模块文件示例（mymodule.py）**：
\`\`\`
PI = 3.14159

def circle_area(r):
    return PI * r ** 2
\`\`\``,code:`# 模拟创建工具模块
PI = 3.14159

def circle_area(r):
    # 在此实现
    pass

def circle_circumference(r):
    # 在此实现
    pass

# 测试
print(f"面积: {circle_area(5):.2f}")
print(f"周长: {circle_circumference(5):.2f}")

`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含78.5",
    "passed": "78.5" in output or "78.54" in output,
    "message": "圆面积应该是 78.54"
})
_test_results.append({
    "name": "包含31.4",
    "passed": "31.4" in output or "31.42" in output,
    "message": "圆周长应该是 31.42"
})
`},{id:5,title:"小测验",type:"quiz",content:"**问题**：关于 `__name__` 变量，下面哪个说法正确？",options:['总是等于 "__main__"',"直接运行时等于模块名",'直接运行时等于 "__main__"，被导入时等于模块名',"等于文件名（不含扩展名）"],correctAnswer:2,explanation:`**正确答案**：直接运行时 \`__name__ == "__main__"\`，被导入时等于模块名。

**经典模式**：
\`\`\`
if __name__ == "__main__":
    # 只在直接运行时执行
    main()
\`\`\`

这个模式让模块既可以独立运行（测试），也可以被其他文件导入。`}],12:[{id:1,title:"什么是面向对象？",type:"explanation",content:`**面向对象编程（OOP）**是一种组织代码的方式，把数据和操作数据的函数"打包"在一起。

**核心概念**：
- **类（Class）** - 对象的模板/蓝图
- **对象（Object）** - 类的实例
- **属性（Attribute）** - 对象的数据
- **方法（Method）** - 对象的函数

**为什么要用 OOP？**
- **封装**：把数据和方法打包，隐藏细节
- **复用**：类可以反复创建多个对象
- **可维护**：结构清晰，易于扩展

**类比**：类是"手机设计图"，对象是"生产出的手机"。`},{id:2,title:"定义第一个类",type:"example",content:`**\`class\`** 关键字用来定义类。

最简单的类：
\`\`\`
class Dog:
    pass
\`\`\`

带属性和方法的类：
\`\`\`
class Dog:
    # 构造函数
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    # 方法
    def bark(self):
        return f"{self.name} 在汪汪叫"
    
    def info(self):
        return f"{self.name} 今年 {self.age} 岁"
\`\`\`

**关键点**：
- \`__init__\` 是构造函数，创建对象时自动调用
- \`self\` 指向当前对象
- 访问属性用 \`对象.属性\`
- 调用方法用 \`对象.方法()\`

试试：`,code:`class Dog:
    """狗类"""
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} 在汪汪叫"
    
    def info(self):
        return f"{self.name} 今年 {self.age} 岁"

# 创建对象
dog1 = Dog("旺财", 3)
dog2 = Dog("小黑", 5)

# 访问属性
print(dog1.name)
print(dog2.age)

# 调用方法
print(dog1.bark())
print(dog2.info())`},{id:3,title:"self 的含义",type:"explanation",content:`**self** 是方法的第一个参数，指向**调用该方法的对象**。

\`\`\`
class Cat:
    def __init__(self, name):
        self.name = name  # self.name 是对象的属性
    
    def meow(self):
        return f"{self.name} 在喵喵叫"

cat = Cat("小花")
cat.meow()  # 实际调用 Cat.meow(cat)
\`\`\`

**注意事项**：
- self 必须作为第一个参数（约定俗成）
- 调用方法时**不需要**传 self，Python 自动传入
- self 不是关键字，可以用其他名字，但强烈建议用 self`},{id:4,title:"小练习：学生类",type:"practice",content:"**练习！** 定义一个 `Student` 类。\n\n要求：\n- 属性：`name`（姓名）、`score`（成绩）\n- 方法 `is_pass()`：成绩 >= 60 返回 True，否则 False\n- 方法 `grade()`：返回等级（A: 90+, B: 80+, C: 70+, D: 60+, F: 其他）\n- 创建两个学生并测试\n\n预期输出：\n```\n小明 及格: True 等级: B\n小红 及格: False 等级: F\n```",hint:"用 if-elif 在 grade() 中判断分数",answer:`class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score
    
    def is_pass(self):
        return self.score >= 60
    
    def grade(self):
        if self.score >= 90:
            return "A"
        elif self.score >= 80:
            return "B"
        elif self.score >= 70:
            return "C"
        elif self.score >= 60:
            return "D"
        else:
            return "F"

# 测试
s1 = Student("小明", 85)
s2 = Student("小红", 45)

print(f"{s1.name} 及格: {s1.is_pass()} 等级: {s1.grade()}")
print(f"{s2.name} 及格: {s2.is_pass()} 等级: {s2.grade()}")`,explanation:"**关键点**：\n- `__init__` 中用 `self.xxx = xxx` 创建实例属性\n- 每个方法第一个参数都是 self\n- 调用时 `对象.方法()` 不需要传 self\n\n**改进版**：\n- 添加 `__str__` 方法可以自定义 print 输出\n- 用 @property 装饰器可以把方法当属性调用",code:`class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score
    
    def is_pass(self):
        # 在此实现
        pass
    
    def grade(self):
        # 在此实现
        pass

# 测试
s1 = Student("小明", 85)
s2 = Student("小红", 45)
print(f"{s1.name} 及格: {s1.is_pass()} 等级: {s1.grade()}")
print(f"{s2.name} 及格: {s2.is_pass()} 等级: {s2.grade()}")

`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "应该输出学生姓名"
})
_test_results.append({
    "name": "包含B等级",
    "passed": "B" in output,
    "message": "85分应该是B等级"
})
_test_results.append({
    "name": "包含F等级",
    "passed": "F" in output,
    "message": "45分应该是F等级"
})
_test_results.append({
    "name": "及格判断正确",
    "passed": "True" in output and "False" in output,
    "message": "应该同时有 True 和 False"
})
`},{id:5,title:"类属性 vs 实例属性",type:"explanation",content:`Python 类有两种属性：

**实例属性**：每个对象独有
\`\`\`
class Dog:
    def __init__(self, name):
        self.name = name  # 实例属性

d1 = Dog("旺财")
d2 = Dog("小黑")
print(d1.name)  # 旺财
print(d2.name)  # 小黑
\`\`\`

**类属性**：所有对象共享
\`\`\`
class Dog:
    species = "犬科"  # 类属性
    
    def __init__(self, name):
        self.name = name

d1 = Dog("旺财")
d2 = Dog("小黑")
print(d1.species)  # 犬科
print(d2.species)  # 犬科
\`\`\`

**访问方式**：
- 实例属性：\`对象.属性\`
- 类属性：\`类名.属性\` 或 \`对象.属性\``},{id:6,title:"小测验",type:"quiz",content:`**问题**：下面代码会输出什么？

\`\`\`
class Counter:
    count = 0
    
    def __init__(self):
        Counter.count += 1

a = Counter()
b = Counter()
c = Counter()
print(Counter.count)
\`\`\``,options:["0","1","2","3"],correctAnswer:3,explanation:"**解析**：\n- 创建第一个对象 `a`：count 变为 1\n- 创建第二个对象 `b`：count 变为 2\n- 创建第三个对象 `c`：count 变为 3\n- `Counter.count` 输出 3\n\n**关键点**：\n- 类属性被所有实例共享\n- 修改类属性用 `类名.属性 = 值`"}],13:[{id:1,title:"什么是继承？",type:"explanation",content:`**继承（Inheritance）**是 OOP 的核心特性，让一个新类可以基于现有类创建，自动获得父类的属性和方法。

**为什么要继承？**
- **代码复用**：不用重写父类的代码
- **扩展性**：可以在子类中添加新功能
- **层次结构**：建立类的层次关系

**基本语法**：
\`\`\`
class Parent:        # 父类（基类）
    pass

class Child(Parent): # 子类（派生类）
    pass
\`\`\`

**示例**：Dog 继承 Animal
\`\`\`
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "..."

class Dog(Animal):
    pass  # 自动继承父类所有方法

d = Dog("旺财")
print(d.speak())  # ...
print(d.name)     # 旺财
\`\`\``},{id:2,title:"方法重写（Override）",type:"example",content:`子类可以**重写**父类的方法，提供自己的实现：

\`\`\`
class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):  # 重写父类方法
        return "汪汪汪"

class Cat(Animal):
    def speak(self):  # 重写父类方法
        return "喵喵喵"

d = Dog()
c = Cat()
print(d.speak())  # 汪汪汪
print(c.speak())  # 喵喵喵
\`\`\`

**super() 函数**：调用父类的方法
\`\`\`
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # 调用父类 __init__
        self.breed = breed
\`\`\`

试试：`,code:`class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "..."

    def info(self):
        return f"我是 {self.name}"

class Dog(Animal):
    def speak(self):
        return "汪汪汪"

class Cat(Animal):
    def speak(self):
        return "喵喵喵"

animals = [Dog("旺财"), Cat("小花"), Dog("小黑")]
for a in animals:
    print(f"{a.name}: {a.speak()}")`},{id:3,title:"多态",type:"explanation",content:`**多态（Polymorphism）**：相同的方法调用，不同的对象有不同的行为。

\`\`\`
def make_speak(animal):
    print(animal.speak())

make_speak(Dog("旺财"))  # 汪汪汪
make_speak(Cat("小花"))  # 喵喵喵
\`\`\`

**多态的好处**：
- 代码更灵活，添加新类不需要改 make_speak
- 符合"开放-封闭"原则：对扩展开放，对修改封闭

**Python 的鸭子类型**：
"如果它走起来像鸭子、叫起来像鸭子，那它就是鸭子"
- 不需要显式继承，只要对象有 speak() 方法就行
- 比传统 OOP 更灵活`},{id:4,title:"小练习：图形继承",type:"practice",content:"**练习！** 用 OOP 实现图形面积计算。\n\n要求：\n- 父类 `Shape`：方法 `area()` 返回 0\n- 子类 `Circle`：属性 radius，重写 `area()` 返回 πr²\n- 子类 `Rectangle`：属性 width、height，重写 `area()` 返回 w*h\n- 创建一个列表，包含 1 个圆和 1 个矩形，遍历打印面积\n\n预期输出：\n```\n圆面积: 78.54\n矩形面积: 24\n```",hint:"在 Shape 中定义 area(self) 返回 0，子类用 super().__init__() 或自定义",answer:`import math

class Shape:
    def __init__(self):
        pass
    
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

# 测试
shapes = [Circle(5), Rectangle(4, 6)]
for s in shapes:
    name = type(s).__name__
    print(f"{name}面积: {s.area():.2f}")`,explanation:`**关键点**：
- 子类用 \`class 子类(父类):\` 继承
- 重写方法：定义同名方法
- \`type(s).__name__\` 获取类名
- 圆面积公式：π × r²
- 矩面积公式：w × h

**多态体现**：
- 同一个 \`s.area()\` 调用，根据对象类型返回不同结果`,code:`import math

class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    # 在此重写 area()

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    # 在此重写 area()

# 测试多态
shapes = [Circle(5), Rectangle(4, 6)]
for s in shapes:
    name = type(s).__name__
    print(f"{name}面积: {s.area():.2f}")

`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含78.5",
    "passed": "78.5" in output or "78.54" in output,
    "message": "圆面积应该是 78.54"
})
_test_results.append({
    "name": "包含24",
    "passed": "24" in output or "24.00" in output,
    "message": "矩形面积应该是 24"
})
`},{id:5,title:"小测验",type:"quiz",content:"**问题**：调用 `super().__init__()` 的作用是什么？",options:["创建新的父类对象","调用父类的构造函数","删除父类的属性","返回 self"],correctAnswer:1,explanation:`**super()** 函数用于调用父类的方法，常用于：
- 调用父类的 \`__init__\`
- 调用父类被重写的方法
- 确保父类的初始化逻辑被执行

**示例**：
\`\`\`
class Parent:
    def __init__(self):
        self.x = 10

class Child(Parent):
    def __init__(self):
        super().__init__()  # 调用 Parent.__init__
        self.y = 20

c = Child()
print(c.x)  # 10
print(c.y)  # 20
\`\`\``}],14:[{id:1,title:"异常的传播",type:"explanation",content:`当异常没有被捕获时，它会**沿着调用栈向上传播**，直到被某个 try-except 捕获或导致程序崩溃。

\`\`\`
def level3():
    return 1 / 0  # ZeroDivisionError

def level2():
    return level3()

def level1():
    return level2()

# 在 main 中捕获
try:
    level1()
except ZeroDivisionError:
    print("捕获到除零异常")
\`\`\`

**异常传播的好处**：
- 底层只管抛出
- 上层决定如何处理
- 让异常处理逻辑更集中`},{id:2,title:"自定义异常",type:"example",content:`除了内置异常，还可以**自定义异常类**：

\`\`\`
class AgeError(Exception):
    """年龄不合法异常"""
    pass

def set_age(age):
    if age < 0 or age > 150:
        raise AgeError(f"年龄 {age} 不合法")
    return age

try:
    set_age(200)
except AgeError as e:
    print(f"错误: {e}")
\`\`\`

**为什么要自定义？**
- 让错误信息更具体
- 便于上层针对性处理
- 让代码更易读

**最佳实践**：继承 \`Exception\` 类

试试：`,code:`class PasswordError(Exception):
    """密码错误异常"""
    pass

def login(username, password):
    if password != "123456":
        raise PasswordError(f"用户 {username} 密码错误")
    return f"欢迎 {username}"

# 测试
try:
    msg = login("admin", "wrong")
    print(msg)
except PasswordError as e:
    print(f"登录失败: {e}")

# 正常情况
try:
    msg = login("admin", "123456")
    print(msg)
except PasswordError as e:
    print(f"登录失败: {e}")`},{id:3,title:"with 语句与上下文管理",type:"explanation",content:`**with 语句**用于资源管理，自动执行清理操作（如关闭文件）。

\`\`\`
with open("test.txt", "r") as f:
    content = f.read()
# 文件自动关闭，即使发生异常
\`\`\`

**原理**：实现了 \`__enter__\` 和 \`__exit__\` 方法的对象都可以用 with。

\`\`\`
class MyContext:
    def __enter__(self):
        print("进入")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("退出")
        return False

with MyContext() as ctx:
    print("使用 ctx")
# 输出：进入 / 使用 ctx / 退出
\`\`\``},{id:4,title:"小练习：自定义异常类",type:"practice",content:`**练习！** 实现一个简单的银行账户类，包含异常处理。

要求：
- 类 \`BankAccount\`，属性 balance（初始为 0）
- 方法 \`deposit(amount)\` 存款（amount > 0）
- 方法 \`withdraw(amount)\` 取款
- 自定义异常 \`InsufficientFundsError\`（余额不足时抛出）
- 连续测试：存款 1000 → 取款 500 → 取款 800（应失败）→ 打印最终余额

预期输出：
\`\`\`
存款成功: 1000
取款成功: 500
错误: 余额不足
最终余额: 500
\`\`\``,hint:'用 raise InsufficientFundsError("...") 抛出异常',answer:`class InsufficientFundsError(Exception):
    """余额不足异常"""
    pass

class BankAccount:
    def __init__(self):
        self.balance = 0
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("存款金额必须大于0")
        self.balance += amount
        return f"存款成功: {amount}"
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError("余额不足")
        self.balance -= amount
        return f"取款成功: {amount}"

# 测试
account = BankAccount()

try:
    print(account.deposit(1000))
except ValueError as e:
    print(f"错误: {e}")

try:
    print(account.withdraw(500))
except InsufficientFundsError as e:
    print(f"错误: {e}")

try:
    print(account.withdraw(800))
except InsufficientFundsError as e:
    print(f"错误: {e}")

print(f"最终余额: {account.balance}")`,explanation:`**关键点**：
- 自定义异常继承 Exception
- 用 \`raise\` 抛出异常
- 用 \`except ExceptionType as e:\` 捕获并获取信息
- 不同异常类型可以分别处理

**改进**：
- 添加账户所有者属性
- 添加交易记录功能
- 用 @property 保护 balance 属性`,code:`class InsufficientFundsError(Exception):
    pass

class BankAccount:
    def __init__(self):
        self.balance = 0
    
    def deposit(self, amount):
        # 在此实现
        pass
    
    def withdraw(self, amount):
        # 在此实现
        pass

# 测试
account = BankAccount()
try:
    print(account.deposit(1000))
except Exception as e:
    print(f"错误: {e}")

try:
    print(account.withdraw(500))
except InsufficientFundsError as e:
    print(f"错误: {e}")

try:
    print(account.withdraw(800))
except InsufficientFundsError as e:
    print(f"错误: {e}")

print(f"最终余额: {account.balance}")

`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含存款成功",
    "passed": "存款成功" in output and "1000" in output,
    "message": "应该显示存款成功 1000"
})
_test_results.append({
    "name": "包含余额不足",
    "passed": "余额不足" in output,
    "message": "800 元取款应触发余额不足异常"
})
_test_results.append({
    "name": "最终余额500",
    "passed": "500" in output,
    "message": "最终余额应该是 500"
})
`},{id:5,title:"小测验",type:"quiz",content:`**问题**：下面代码的输出是？

\`\`\`
try:
    print("A")
    raise ValueError("错误")
    print("B")
except ValueError:
    print("C")
finally:
    print("D")
\`\`\``,options:["A B C D","A C D","A C","A D"],correctAnswer:1,explanation:'**执行流程**：\n1. `print("A")` → 输出 A\n2. `raise ValueError` → 抛出异常，B 不会执行\n3. `except` 捕获 → 输出 C\n4. `finally` 无论如何执行 → 输出 D\n\n**关键点**：\n- raise 之后的代码不会执行\n- finally 块在退出 try 时必定执行（即使 return）'}],15:[{id:1,title:"os 模块概览",type:"explanation",content:"**os 模块**提供了访问操作系统功能的接口。\n\n**常用功能**：\n\n**路径相关**：\n- `os.getcwd()` - 获取当前工作目录\n- `os.chdir(path)` - 切换目录\n- `os.path.join(a, b)` - 拼接路径\n\n**目录操作**：\n- `os.listdir(path)` - 列出目录内容\n- `os.mkdir(path)` - 创建单层目录\n- `os.makedirs(path)` - 递归创建多层目录\n- `os.rmdir(path)` - 删除空目录\n- `os.rename(old, new)` - 重命名\n\n**os.path 模块**：\n- `os.path.exists(path)` - 是否存在\n- `os.path.isfile(path)` - 是否为文件\n- `os.path.isdir(path)` - 是否为目录\n- `os.path.basename(path)` - 文件名部分\n- `os.path.dirname(path)` - 目录部分\n- `os.path.splitext(path)` - 分离扩展名"},{id:2,title:"shutil 模块：高级文件操作",type:"example",content:`**shutil** 模块提供更高级的文件操作：

\`\`\`
import shutil

# 复制文件
shutil.copy("src.txt", "dst.txt")      # 复制文件+权限
shutil.copy2("src.txt", "dst.txt")     # 复制文件+元数据
shutil.copyfile("src.txt", "dst.txt")  # 只复制内容

# 移动文件/目录
shutil.move("old.txt", "new.txt")

# 删除目录
shutil.rmtree("mydir")  # 递归删除整个目录

# 压缩
shutil.make_archive("name", "zip", "dir")
\`\`\`

**glob 模块**：用通配符查找文件
\`\`\`
import glob
# 查找所有 .py 文件
files = glob.glob("*.py")
# 递归查找
files = glob.glob("**/*.py", recursive=True)
\`\`\`

试试：`,code:`import os
import shutil

# 创建临时目录
test_dir = "test_python_quest"
if os.path.exists(test_dir):
    shutil.rmtree(test_dir)
os.makedirs(test_dir)

# 创建几个测试文件
for i in range(3):
    with open(f"{test_dir}/file_{i}.txt", "w") as f:
        f.write(f"内容 {i}")

# 列出文件
files = os.listdir(test_dir)
print("文件列表:", files)

# 清理
shutil.rmtree(test_dir)
print("清理完成")`},{id:3,title:"遍历目录树",type:"example",content:`**os.walk()** 可以递归遍历目录树：

\`\`\`
import os

for root, dirs, files in os.walk("path"):
    # root: 当前目录路径
    # dirs: 当前目录下的子目录列表
    # files: 当前目录下的文件列表
    for file in files:
        full_path = os.path.join(root, file)
        print(full_path)
\`\`\`

**实际应用：批量重命名**

试试看：`,code:`import os

# 模拟文件树
sample = {
    "photos": {
        "img1.jpg": "",
        "img2.jpg": "",
        "sub": {
            "img3.jpg": ""
        }
    }
}

# 简化的 walk 演示
def walk_simulate(d, prefix=""):
    for name, content in d.items():
        path = prefix + "/" + name if prefix else name
        if isinstance(content, dict):
            print(f"[目录] {path}")
            walk_simulate(content, path)
        else:
            print(f"[文件] {path}")

walk_simulate(sample)`},{id:4,title:"小练习：路径处理工具",type:"practice",content:`**练习！** 实现一个路径处理工具函数。

要求：
- 函数 \`file_info(path)\` 返回一个字典：
  - \`name\`: 文件名（不含目录）
  - \`ext\`: 扩展名
  - \`dir\`: 所在目录
  - \`is_py\`: 是否为 .py 文件
- 测试以下路径：
  - "/home/user/project/main.py"
  - "/var/log/app.log"
  - "README.md"

预期输出（每行一个文件信息）：
\`\`\`
main.py
.py
/home/user/project
True
...
\`\`\``,hint:"用 os.path.basename, os.path.splitext, os.path.dirname",answer:`import os

def file_info(path):
    """返回文件信息字典"""
    name = os.path.basename(path)
    dir_ = os.path.dirname(path)
    # 处理空目录的情况
    if not dir_:
        dir_ = "."
    base, ext = os.path.splitext(path)
    return {
        "name": name,
        "ext": ext,
        "dir": dir_,
        "is_py": ext == ".py"
    }

# 测试
test_paths = [
    "/home/user/project/main.py",
    "/var/log/app.log",
    "README.md"
]

for p in test_paths:
    info = file_info(p)
    print(f"路径: {p}")
    print(f"  文件名: {info['name']}")
    print(f"  扩展名: {info['ext']}")
    print(f"  目录: {info['dir']}")
    print(f"  是.py: {info['is_py']}")`,explanation:"**关键函数**：\n- `os.path.basename(path)` - 获取文件名\n- `os.path.dirname(path)` - 获取目录\n- `os.path.splitext(path)` - 分离扩展名（返回元组）\n- 注意：`splitext` 不会检查文件是否存在\n\n**边界情况**：\n- 没有目录的路径：dirname 为空字符串\n- 没有扩展名：ext 为空字符串",code:`import os

def file_info(path):
    """返回文件信息字典"""
    # 在此实现
    pass

# 测试
for p in ["/home/user/project/main.py", "/var/log/app.log", "README.md"]:
    info = file_info(p)
    print(f"路径: {p}")
    print(f"  文件名: {info['name']}")
    print(f"  扩展名: {info['ext']}")
    print(f"  目录: {info['dir']}")
    print(f"  是.py: {info['is_py']}")

`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含main.py",
    "passed": "main.py" in output,
    "message": "应该包含 main.py 文件名"
})
_test_results.append({
    "name": "包含.py扩展名",
    "passed": ".py" in output,
    "message": "应该识别 .py 扩展名"
})
_test_results.append({
    "name": "包含True",
    "passed": "True" in output,
    "message": "main.py 应该是 .py 文件"
})
`},{id:5,title:"小测验",type:"quiz",content:'**问题**：`os.path.splitext("/data/file.tar.gz")` 返回什么？',options:['("/data/file.tar", ".gz")','("/data/file", ".tar.gz")','("/data/file.tar.gz", "")','("/data", "/file.tar.gz")'],correctAnswer:0,explanation:'**`splitext` 从右向左分割第一个 `.`**：\n- 输入：`"/data/file.tar.gz"`\n- 结果：`("/data/file.tar", ".gz")`\n- 不会分割中间的 `.`\n\n**如需分割多个扩展名**：\n```\nfilename.rsplit(".", 1)  # ["file.tar", "gz"]\n```'}],16:[{id:1,title:"生成器（Generator）",type:"explanation",content:`**生成器**是特殊的迭代器，用 \`yield\` 关键字定义。

**为什么用生成器？**
- 节省内存：不会一次性生成所有数据
- 惰性求值：按需计算
- 适合处理大数据

**两种创建方式**：

**1. 生成器函数**（用 yield）
\`\`\`
def count_up(n):
    i = 0
    while i < n:
        yield i
        i += 1

for x in count_up(5):
    print(x)  # 0 1 2 3 4
\`\`\`

**2. 生成器表达式**（类似列表推导式）
\`\`\`
gen = (x**2 for x in range(5))
# vs 列表推导式
lst = [x**2 for x in range(5)]
\`\`\`

**关键区别**：
- 列表推导式：\`[\`...\`]\` - 立即生成全部
- 生成器表达式：\`(\`...\`)\` - 按需生成`},{id:2,title:"装饰器（Decorator）",type:"explanation",content:`**装饰器**用于在不修改原函数代码的情况下，给函数添加额外功能。

**基本语法**：
\`\`\`
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("调用前")
        result = func(*args, **kwargs)
        print("调用后")
        return result
    return wrapper

@my_decorator
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("小明")
# 输出: 调用前 / Hello, 小明! / 调用后
\`\`\`

**装饰器链**：可以叠加多个装饰器
\`\`\`
@decorator1
@decorator2
def func():
    pass
# 等价于 decorator1(decorator2(func))
\`\`\`

**常见用途**：
- 日志记录
- 性能测试（计时）
- 权限检查
- 缓存`},{id:3,title:"闭包（Closure）",type:"example",content:`**闭包**是指引用了外部作用域变量的内部函数。

\`\`\`
def outer(x):
    def inner(y):
        return x + y  # 引用了外部 x
    return inner

add5 = outer(5)
print(add5(3))  # 8
print(add5(10)) # 15
\`\`\`

**闭包的三个条件**：
1. 有嵌套函数
2. 内部函数引用了外部变量
3. 外部函数返回内部函数

**应用**：工厂函数、装饰器底层

试试看：`,code:`def power(n):
    """返回计算 x^n 的函数"""
    def calc(x):
        return x ** n
    return calc

# 创建不同的幂函数
square = power(2)
cube = power(3)

print(square(5))  # 25
print(cube(2))    # 8
print(power(4)(2)) # 16 (2的4次方)`},{id:4,title:"Lambda 表达式",type:"explanation",content:`**Lambda** 是创建小型匿名函数的方式。

\`\`\`
# 普通函数
def add(a, b):
    return a + b

# 等价 Lambda
add = lambda a, b: a + b
\`\`\`

**语法**：\`lambda 参数: 表达式\`

**常用于高阶函数**：

\`\`\`
# map: 对每个元素应用函数
nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))

# filter: 过滤元素
evens = list(filter(lambda x: x % 2 == 0, nums))

# sorted: 自定义排序
students = [("小明", 85), ("小红", 92), ("小刚", 78)]
by_score = sorted(students, key=lambda s: s[1], reverse=True)
\`\`\`

**注意**：
- Lambda 只能写单个表达式
- 复杂的逻辑应该用 def 定义函数`},{id:5,title:"小练习：装饰器与生成器",type:"practice",content:"**练习！** 实现一个计时装饰器，并应用到函数上。\n\n要求：\n- 装饰器 `timer`，打印函数执行耗时（毫秒）\n- 被装饰函数 `slow_func(n)`：循环 n 次做空操作\n- 测试 `slow_func(1000000)`\n\n预期输出：\n```\n执行耗时: X 毫秒\n```\n\n提示：使用 `time.time()` 获取时间戳",hint:"用 time.time() 在函数前后取时间差",answer:`import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        elapsed = (end - start) * 1000
        print(f"执行耗时: {elapsed:.2f} 毫秒")
        return result
    return wrapper

@timer
def slow_func(n):
    total = 0
    for i in range(n):
        total += i
    return total

# 测试
result = slow_func(1000000)
print(f"结果: {result}")`,explanation:`**关键点**：
- \`time.time()\` 返回当前时间戳（秒，浮点）
- 装饰器返回 wrapper 函数
- \`*args, **kwargs\` 让装饰器适配任何函数
- 毫秒 = 秒 × 1000

**functools.wraps**：
- 用 \`@functools.wraps(func)\` 保留原函数的元信息
- 避免调试时混淆`,code:`import time

def timer(func):
    def wrapper(*args, **kwargs):
        # 在此实现计时逻辑
        pass
    return wrapper

@timer
def slow_func(n):
    total = 0
    for i in range(n):
        total += i
    return total

# 测试
slow_func(1000000)

`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含耗时",
    "passed": "耗时" in output or "毫秒" in output,
    "message": "应该输出耗时信息"
})
`},{id:6,title:"小测验",type:"quiz",content:`**问题**：下面代码会输出什么？

\`\`\`
def gen():
    yield 1
    yield 2
    yield 3

g = gen()
print(next(g))
print(next(g))
\`\`\``,options:["1 2 3","1 2","2 3","报错"],correctAnswer:1,explanation:"**解析**：\n- 创建生成器 `g`\n- 第一次 `next(g)` → 输出 1（执行到第一个 yield）\n- 第二次 `next(g)` → 输出 2（执行到第二个 yield）\n- 不调用第三次，所以 3 不会输出\n\n**生成器特点**：\n- 每次 `next()` 推进到下一个 yield\n- 状态会被保留\n- 用 `for` 循环会自动处理"}],17:[{id:1,title:"datetime：日期时间",type:"explanation",content:`**datetime** 模块处理日期和时间：

\`\`\`
from datetime import datetime, date, time, timedelta

# 当前时间
now = datetime.now()
print(now)  # 2025-01-01 12:00:00.000000

# 创建指定时间
d = datetime(2025, 12, 25, 10, 30, 0)

# 格式化
print(now.strftime("%Y-%m-%d %H:%M:%S"))
print(now.strftime("%Y年%m月%d日"))

# 解析字符串
dt = datetime.strptime("2025-12-25", "%Y-%m-%d")

# 时间差
delta = timedelta(days=7)
next_week = now + delta
print(f"一周后: {next_week}")
\`\`\`

**常用格式化符号**：
- \`%Y\` - 4位年、\`%m\` - 月、\`%d\` - 日
- \`%H\` - 24小时、\`%M\` - 分钟、\`%S\` - 秒
- \`%A\` - 星期名`},{id:2,title:"re 模块：正则表达式",type:"example",content:"**正则表达式**是用来匹配字符串的强大工具。\n\n**常用方法**：\n- `re.match(pattern, str)` - 从开头匹配\n- `re.search(pattern, str)` - 搜索第一个匹配\n- `re.findall(pattern, str)` - 找出所有匹配\n- `re.sub(pattern, repl, str)` - 替换\n\n**常用模式**：\n- `\\d` - 数字、`\\w` - 字母数字下划线、`\\s` - 空白\n- `.` - 任意字符、`^` - 开头、`$` - 结尾\n- `*` - 0+次、`+` - 1+次、`?` - 0或1次\n- `{n}` - n次、`{n,m}` - n到m次\n- `[abc]` - 字符集、`[a-z]` - 范围\n\n试试：",code:`import re

text = "联系我: 138-0013-8000 或 email@example.com"

# 查找电话号码
phones = re.findall(r"\\d{3}-\\d{4}-\\d{4}", text)
print("电话:", phones)

# 查找邮箱
emails = re.findall(r"[\\w.]+@[\\w.]+", text)
print("邮箱:", emails)

# 替换
hidden = re.sub(r"\\d", "*", "我的密码: 123456")
print("隐藏:", hidden)

# 验证
if re.match(r"^1[3-9]\\d{9}$", "13800138000"):
    print("手机号格式正确")`},{id:3,title:"json 模块：JSON 处理",type:"example",content:`**json** 模块处理 JSON 数据（API、配置文件常用）。

\`\`\`
import json

# Python 对象 → JSON 字符串
data = {"name": "小明", "age": 18, "scores": [85, 92, 78]}
json_str = json.dumps(data, ensure_ascii=False, indent=2)

# JSON 字符串 → Python 对象
parsed = json.loads(json_str)

# 读写文件
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

with open("data.json", "r", encoding="utf-8") as f:
    loaded = json.load(f)
\`\`\`

**Python ↔ JSON 类型对应**：
| Python | JSON |
|--------|------|
| dict | object {\`{}\`} |
| list | array [\`[]\`] |
| str | string |
| int/float | number |
| True/False | true/false |
| None | null |

试试：`,code:`import json

# 创建数据
student = {
    "name": "小明",
    "age": 18,
    "scores": {"math": 95, "english": 88},
    "hobbies": ["编程", "阅读", "运动"]
}

# 序列化为 JSON
json_str = json.dumps(student, ensure_ascii=False, indent=2)
print("JSON 字符串:")
print(json_str)

# 反序列化
restored = json.loads(json_str)
print(f"\\n姓名: {restored['name']}")
print(f"数学成绩: {restored['scores']['math']}")
print(f"爱好数: {len(restored['hobbies'])}")`},{id:4,title:"collections：特殊容器",type:"explanation",content:`**collections** 模块提供高级容器：

**Counter** - 计数器
\`\`\`
from collections import Counter
c = Counter("abracadabra")
print(c)  # Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})
print(c.most_common(2))  # [('a', 5), ('b', 2)]
\`\`\`

**defaultdict** - 带默认值的字典
\`\`\`
from collections import defaultdict
dd = defaultdict(list)
dd["fruits"].append("苹果")
print(dd)  # {'fruits': ['苹果']}
\`\`\`

**OrderedDict** - 保持插入顺序的字典
**deque** - 双端队列（高效的头尾操作）
\`\`\`
from collections import deque
d = deque([1, 2, 3])
d.appendleft(0)  # 在头部添加
d.append(4)      # 在尾部添加
print(d)  # deque([0, 1, 2, 3, 4])
\`\`\`

**namedtuple** - 命名字段元组
\`\`\`
from collections import namedtuple
Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(p.x, p.y)  # 3 4
\`\`\``},{id:5,title:"小练习：词频统计",type:"practice",content:`**练习！** 用 \`collections.Counter\` 统计词频。

要求：
- 给定文本："the quick brown fox jumps over the lazy dog the"
- 找出出现次数最多的 3 个单词
- 统计 "the" 出现的次数

预期输出：
\`\`\`
词频: [('the', 3), ('quick', 1), ('brown', 1)]
'the' 出现 3 次
\`\`\``,hint:"用 Counter(words).most_common(3)",answer:`from collections import Counter

text = "the quick brown fox jumps over the lazy dog the"
words = text.split()

counter = Counter(words)
print("词频:", counter.most_common(3))
print(f"'the' 出现 {counter['the']} 次")`,explanation:`**Counter 的强大功能**：
- \`Counter(iterable)\` 直接统计
- \`most_common(n)\` 返回前 n 个
- 支持字典的所有操作
- 支持加减运算：\`c1 + c2\`

**应用场景**：
- 词频统计
- 投票计数
- 找出多数元素
- 任意需要"统计"的场景`,code:`from collections import Counter

text = "the quick brown fox jumps over the lazy dog the"

# 在此实现词频统计

`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含the",
    "passed": "the" in output,
    "message": "应该包含 the"
})
_test_results.append({
    "name": "包含3次",
    "passed": "3" in output,
    "message": "the 应该出现 3 次"
})
_test_results.append({
    "name": "包含词频",
    "passed": "词频" in output or "出现" in output or "Common" in output or "most" in output.lower(),
    "message": "应该输出词频统计结果"
})
`},{id:6,title:"小测验",type:"quiz",content:'**问题**：用正则 `r"\\d+"` 匹配 "abc 123 def 456" 会得到什么？',options:['["123 456"]','["123", "456"]','["1", "2", "3", "4", "5", "6"]','"123 456"'],correctAnswer:1,explanation:'**解析**：\n- `\\d+` 匹配**一个或多个数字**\n- `findall` 找出所有匹配\n- 结果：`["123", "456"]`（每个数字块作为一个匹配）\n\n**相关**：\n- `\\d` - 单个数字\n- `\\d+` - 一个或多个（贪婪）\n- `\\d*` - 0 个或多个\n- `\\d?` - 0 个或 1 个'}],18:[{id:1,title:"Python 大师之路",type:"explanation",content:`🎉 **恭喜到达最终关！** 你已经走完了 Python 学习的完整旅程。

**完整知识体系回顾**：
1. ✅ 基础语法 - print、注释、变量、运算符
2. ✅ 数据结构 - 列表、元组、字典、集合
3. ✅ 控制流 - 条件判断、循环
4. ✅ 函数 - 定义、参数、Lambda、装饰器
5. ✅ OOP - 类、对象、继承、多态
6. ✅ 文件 - 读写、with、os、shutil
7. ✅ 异常 - try-except、自定义异常
8. ✅ 高级 - 生成器、闭包、Lambda
9. ✅ 标准库 - datetime、re、json、collections
10. ✅ 项目 - 综合运用

**下一步建议**：
- 📦 学习 pip 和 venv（包管理与虚拟环境）
- 🌐 Web 开发（Flask、Django、FastAPI）
- 📊 数据分析（NumPy、Pandas、Matplotlib）
- 🤖 AI/ML（Scikit-learn、PyTorch）
- 🕷️ 爬虫（requests、BeautifulSoup、Scrapy）`},{id:2,title:"实战：单词统计工具",type:"example",content:`让我们做一个简单的**文本分析工具**，综合运用前面学到的知识：

**功能**：
1. 统计文本中的单词数
2. 找出出现频率最高的 5 个单词
3. 统计句子数（按 . ! ? 分隔）
4. 找出最长的单词

\`\`\`
输入: "Python is great. Python is dynamic. I love Python!"
输出: 单词数: 9, 句子数: 3, 高频词: [('python', 3), ...]
\`\`\`

运行下面的实现：`,code:`import re
from collections import Counter

text = """
Python is a great programming language.
Python is easy to learn.
Python is powerful and Python is fun.
I love Python programming.
"""

# 1. 清理文本：转小写，去标点
cleaned = re.sub(r"[^a-zA-Z\\s]", "", text.lower())
words = cleaned.split()

# 2. 统计
word_count = len(words)
counter = Counter(words)
top5 = counter.most_common(5)

# 3. 句子数
sentences = re.split(r"[.!?]+", text)
sentences = [s for s in sentences if s.strip()]
sentence_count = len(sentences)

# 4. 最长单词
longest = max(words, key=len) if words else ""

print(f"单词数: {word_count}")
print(f"句子数: {sentence_count}")
print(f"高频词 TOP 5: {top5}")
print(f"最长单词: '{longest}' (长度: {len(longest)})")`},{id:3,title:"实战：简易计算器（OOP版）",type:"example",content:`用面向对象的方式重写计算器，更专业：

\`\`\`
class Calculator:
    def add(self, a, b): ...
    def subtract(self, a, b): ...
    def multiply(self, a, b): ...
    def divide(self, a, b): ...
    def calculate(self, a, op, b): ...
\`\`\`

试试：`,code:`class Calculator:
    """支持 +、-、*、/ 的计算器"""
    
    def add(self, a, b):
        return a + b
    
    def subtract(self, a, b):
        return a - b
    
    def multiply(self, a, b):
        return a * b
    
    def divide(self, a, b):
        if b == 0:
            raise ValueError("不能除以零")
        return a / b
    
    def calculate(self, a, op, b):
        ops = {
            "+": self.add,
            "-": self.subtract,
            "*": self.multiply,
            "/": self.divide
        }
        if op not in ops:
            raise ValueError(f"不支持的运算符: {op}")
        return ops[op](a, b)

# 使用
calc = Calculator()
print(calc.calculate(10, "+", 5))
print(calc.calculate(10, "*", 4))
print(calc.calculate(2, "**", 10) if False else "暂不支持 **")`},{id:4,title:"实战：学生管理系统",type:"practice",content:"**综合实战！** 用 OOP + 异常处理 + JSON 实现一个学生管理系统。\n\n要求：\n- 类 `Student`：name, age, scores（字典：科目→分数）\n- 类 `StudentManager`：管理学生列表\n  - `add_student(student)`\n  - `find_student(name)` - 找不到抛 StudentNotFoundError\n  - `get_average(name)` - 返回学生平均分\n  - `save_to_file(filename)` - 序列化为 JSON\n  - `load_from_file(filename)` - 从 JSON 加载\n- 自定义异常 `StudentNotFoundError`\n- 测试：创建 2 个学生 → 保存 → 重新加载 → 打印信息\n\n预期输出包含：\n```\n加载成功，共 2 名学生\n小明 平均分: 88.5\n```",hint:"用 json.dumps/loads 序列化，注意处理异常",answer:`import json

class StudentNotFoundError(Exception):
    pass

class Student:
    def __init__(self, name, age, scores):
        self.name = name
        self.age = age
        self.scores = scores  # dict: 科目→分数
    
    def average(self):
        if not self.scores:
            return 0
        return sum(self.scores.values()) / len(self.scores)
    
    def to_dict(self):
        return {
            "name": self.name,
            "age": self.age,
            "scores": self.scores
        }
    
    @staticmethod
    def from_dict(d):
        return Student(d["name"], d["age"], d["scores"])

class StudentManager:
    def __init__(self):
        self.students = []
    
    def add_student(self, student):
        self.students.append(student)
    
    def find_student(self, name):
        for s in self.students:
            if s.name == name:
                return s
        raise StudentNotFoundError(f"未找到学生: {name}")
    
    def get_average(self, name):
        s = self.find_student(name)
        return s.average()
    
    def save_to_file(self, filename):
        data = [s.to_dict() for s in self.students]
        with open(filename, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    
    def load_from_file(self, filename):
        with open(filename, "r", encoding="utf-8") as f:
            data = json.load(f)
        self.students = [Student.from_dict(d) for d in data]
        return len(self.students)

# 使用
mgr = StudentManager()
mgr.add_student(Student("小明", 18, {"math": 95, "english": 82}))
mgr.add_student(Student("小红", 19, {"math": 88, "english": 91}))

# 保存到文件
mgr.save_to_file("students.json")

# 重新加载
new_mgr = StudentManager()
count = new_mgr.load_from_file("students.json")
print(f"加载成功，共 {count} 名学生")
print(f"小明 平均分: {new_mgr.get_average('小明')}")`,explanation:`**这个例子综合运用了**：
- **类与对象**：Student、StudentManager
- **OOP 进阶**：静态方法、实例方法
- **自定义异常**：StudentNotFoundError
- **JSON 序列化**：to_dict / from_dict
- **文件操作**：with open
- **列表推导式**：\`[s.to_dict() for s in self.students]\`
- **错误处理**：异常向上传播

**可扩展方向**：
- 添加删除、修改功能
- 改成 SQLite 数据库存储
- 添加 CLI / Web 界面`,code:`import json

class StudentNotFoundError(Exception):
    pass

class Student:
    def __init__(self, name, age, scores):
        self.name = name
        self.age = age
        self.scores = scores
    
    def average(self):
        if not self.scores:
            return 0
        return sum(self.scores.values()) / len(self.scores)

class StudentManager:
    def __init__(self):
        self.students = []
    
    def add_student(self, student):
        self.students.append(student)
    
    def find_student(self, name):
        # 在此实现
        pass
    
    def get_average(self, name):
        # 在此实现
        pass
    
    def save_to_file(self, filename):
        # 在此实现
        pass
    
    def load_from_file(self, filename):
        # 在此实现
        pass

# 测试
mgr = StudentManager()
mgr.add_student(Student("小明", 18, {"math": 95, "english": 82}))
mgr.add_student(Student("小红", 19, {"math": 88, "english": 91}))

mgr.save_to_file("students.json")

new_mgr = StudentManager()
count = new_mgr.load_from_file("students.json")
print(f"加载成功，共 {count} 名学生")
print(f"小明 平均分: {new_mgr.get_average('小明'):.1f}")

`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "加载成功",
    "passed": "加载成功" in output or "2 名学生" in output or "2名学生" in output,
    "message": "应该提示加载成功 2 名学生"
})
_test_results.append({
    "name": "平均分88",
    "passed": "88" in output,
    "message": "小明的平均分应该是 88.5"
})
`},{id:5,title:"毕业总结",type:"explanation",content:`🎓 **恭喜毕业！** 你已经是一名 Python 程序员了！

**你掌握的技能**：
- ✅ 完整的 Python 基础语法
- ✅ 数据结构与算法思维
- ✅ 函数式与面向对象编程
- ✅ 异常处理与代码健壮性
- ✅ 文件与系统操作
- ✅ 正则表达式与文本处理
- ✅ JSON 数据处理
- ✅ 模块化与代码组织

**继续保持进步的秘诀**：
1. **多写代码** - 每天至少 30 分钟
2. **读优秀代码** - GitHub 上的开源项目
3. **做项目** - 用 Python 解决实际问题
4. **加入社区** - Python 中文社区、Stack Overflow
5. **学习新库** - 跟上生态发展

**Python 的精髓**：
\`\`\`
import this
\`\`\`
运行上面这行代码，看看 Python 之禅！

**祝你在编程的道路上越走越远！** 🚀

— Python Quest 全体导师敬上`}]},Ba={4:[{id:1,title:"计算 1 到 100 的和",description:`编写一个程序，使用 for 循环计算 1 到 100 所有整数的和，并打印结果。

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
`,testCases:[{name:"加法",input:"10,+,5",expected:"15"},{name:"幂运算",input:"2,**,10",expected:"1024"}],xpReward:40}],10:[{id:1,title:"回文判断",description:`判断一个字符串是否为回文（正反读都一样）。

要求：
- 函数 is_palindrome(s) 返回 True 或 False
- 忽略大小写和空格
- 测试 "A man a plan a canal Panama" → True
- 测试 "hello" → False`,difficulty:"easy",initialCode:`def is_palindrome(s):
    # 在此实现
    pass

print(is_palindrome("A man a plan a canal Panama"))
print(is_palindrome("hello"))
print(is_palindrome("racecar"))
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含True",
    "passed": "True" in output,
    "message": "回文应该返回 True"
})
_test_results.append({
    "name": "包含False",
    "passed": "False" in output,
    "message": "hello 不是回文"
})
_test_results.append({
    "name": "同时出现",
    "passed": output.count("True") >= 2 and "False" in output,
    "message": "应该有多个 True 和 False"
})
`,testCases:[{name:"基础回文",input:"A man a plan a canal Panama",expected:"True"}],xpReward:15},{id:2,title:"统计字符频率",description:`统计字符串中每个字符出现的次数。

要求：
- 函数 char_frequency(s) 返回字典
- 统计 "hello world" 中每个字符`,difficulty:"easy",initialCode:`def char_frequency(s):
    # 在此实现
    pass

result = char_frequency("hello world")
print(result)
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含字典",
    "passed": "{" in output and "}" in output,
    "message": "应该返回字典"
})
_test_results.append({
    "name": "l出现3次",
    "passed": "3" in output,
    "message": "l 出现 3 次"
})
`,testCases:[{name:"hello world",input:"无",expected:"l: 3"}],xpReward:15},{id:3,title:"字符串模板",description:`实现简单的字符串模板替换。

要求：
- 函数 render(template, data)
- 将 template 中的 {key} 替换为 data[key]
- 例如 render("Hi, {name}!", {"name": "小明"}) → "Hi, 小明!"`,difficulty:"medium",initialCode:`def render(template, data):
    # 在此实现
    pass

print(render("Hi, {name}! You are {age} years old.", {"name": "小明", "age": 18}))
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "应该替换 {name} 为小明"
})
_test_results.append({
    "name": "包含18",
    "passed": "18" in output,
    "message": "应该替换 {age} 为 18"
})
_test_results.append({
    "name": "无大括号",
    "passed": "{" not in output and "}" not in output,
    "message": "模板标记应被替换"
})
`,testCases:[{name:"基础模板",input:"无",expected:"Hi, 小明!"}],xpReward:20},{id:4,title:"凯撒密码加密",description:`实现简单的凯撒密码加密。

要求：
- 函数 caesar_cipher(text, shift)
- 将每个字母按 shift 偏移（保留大小写）
- 测试 "Hello, World!" shift=3 → "Khoor, Zruog!"`,difficulty:"hard",initialCode:`def caesar_cipher(text, shift):
    # 在此实现
    pass

print(caesar_cipher("Hello, World!", 3))
print(caesar_cipher("Python", 1))
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含Khoor",
    "passed": "Khoor" in output,
    "message": "Hello 加密 3 位应该是 Khoor"
})
_test_results.append({
    "name": "包含Zruog",
    "passed": "Zruog" in output,
    "message": "World 加密 3 位应该是 Zruog"
})
_test_results.append({
    "name": "包含Qzuipo",
    "passed": "Qzuipo" in output,
    "message": "Python 加密 1 位应该是 Qzuipo"
})
`,testCases:[{name:"Hello 加密3",input:"无",expected:"Khoor"}],xpReward:30}],11:[{id:1,title:"随机密码生成器",description:`使用 random 模块生成随机密码。

要求：
- 函数 generate_password(length=8)
- 包含大小写字母和数字
- 测试生成长度为 12 的密码`,difficulty:"easy",initialCode:`import random
import string

def generate_password(length=8):
    # 在此实现
    pass

pwd = generate_password(12)
print(f"密码: {pwd}")
print(f"长度: {len(pwd)}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "长度12",
    "passed": "12" in output,
    "message": "密码长度应该是 12"
})
_test_results.append({
    "name": "包含密码",
    "passed": "密码" in output,
    "message": "应该输出密码"
})
`,testCases:[{name:"长度测试",input:"12",expected:"12"}],xpReward:15},{id:2,title:"计时器装饰器",description:`实现一个计时装饰器。

要求：
- 装饰器 timer
- 打印函数执行耗时（毫秒）
- 用 time 模块`,difficulty:"medium",initialCode:`import time

def timer(func):
    def wrapper(*args, **kwargs):
        # 在此实现
        pass
    return wrapper

@timer
def slow_func():
    time.sleep(0.01)

slow_func()
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含耗时",
    "passed": "耗时" in output or "毫秒" in output or "ms" in output.lower(),
    "message": "应该输出耗时信息"
})
`,testCases:[{name:"基础测试",input:"无",expected:"耗时"}],xpReward:20},{id:3,title:"JSON 工具类",description:`创建一个 JSON 工具模块。

要求：
- 类 JsonHelper
- 方法 save(obj, filename) 序列化保存
- 方法 load(filename) 反序列化加载
- 测试保存和加载字典`,difficulty:"medium",initialCode:`import json
import os

class JsonHelper:
    def save(self, obj, filename):
        # 在此实现
        pass
    
    def load(self, filename):
        # 在此实现
        pass

helper = JsonHelper()
data = {"name": "Python", "version": 3.10, "features": ["easy", "powerful"]}
helper.save(data, "test.json")
loaded = helper.load("test.json")
print(loaded)
print(type(loaded))

# 清理
if os.path.exists("test.json"):
    os.remove("test.json")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含Python",
    "passed": "Python" in output,
    "message": "应该加载出 Python"
})
_test_results.append({
    "name": "包含dict",
    "passed": "dict" in output.lower() or "{" in output,
    "message": "应该返回字典类型"
})
`,testCases:[{name:"基础测试",input:"无",expected:"dict"}],xpReward:25},{id:4,title:"简易日志系统",description:`实现一个日志记录器。

要求：
- 类 Logger
- 方法 log(level, message) 打印带时间戳的日志
- 方法 log_to_file(message, filename) 追加到文件
- 测试两种用法`,difficulty:"hard",initialCode:`from datetime import datetime
import os

class Logger:
    def log(self, level, message):
        # 在此实现
        pass
    
    def log_to_file(self, message, filename="app.log"):
        # 在此实现
        pass

logger = Logger()
logger.log("INFO", "应用启动")
logger.log("ERROR", "发生错误")
logger.log_to_file("文件日志测试")
logger.log_to_file("另一条日志")

# 读取并显示
if os.path.exists("app.log"):
    with open("app.log", "r", encoding="utf-8") as f:
        print("--- 文件内容 ---")
        print(f.read())
    os.remove("app.log")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含INFO",
    "passed": "INFO" in output,
    "message": "应该显示 INFO 级别"
})
_test_results.append({
    "name": "包含ERROR",
    "passed": "ERROR" in output,
    "message": "应该显示 ERROR 级别"
})
_test_results.append({
    "name": "包含时间戳",
    "passed": "20" in output or ":" in output,
    "message": "应该包含时间戳"
})
`,testCases:[{name:"基础测试",input:"无",expected:"INFO"}],xpReward:30}],12:[{id:1,title:"矩形类",description:`创建一个 Rectangle 类。

要求：
- 初始化 width 和 height
- 方法 area() 返回面积
- 方法 perimeter() 返回周长
- 测试 4x3 的矩形`,difficulty:"easy",initialCode:`class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        # 在此实现
        pass
    
    def perimeter(self):
        # 在此实现
        pass

r = Rectangle(4, 3)
print(f"面积: {r.area()}")
print(f"周长: {r.perimeter()}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "面积12",
    "passed": "12" in output,
    "message": "4*3 = 12"
})
_test_results.append({
    "name": "周长14",
    "passed": "14" in output,
    "message": "(4+3)*2 = 14"
})
`,testCases:[{name:"面积",input:"4,3",expected:"12"},{name:"周长",input:"4,3",expected:"14"}],xpReward:15},{id:2,title:"银行账户类",description:`创建 BankAccount 类。

要求：
- 初始化 owner 和 balance
- deposit(amount) 存款
- withdraw(amount) 取款
- 测试存取款操作`,difficulty:"medium",initialCode:`class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        # 在此实现
        pass
    
    def withdraw(self, amount):
        # 在此实现
        pass
    
    def __str__(self):
        return f"{self.owner}: {self.balance}元"

acc = BankAccount("小明", 1000)
acc.deposit(500)
print(acc)
acc.withdraw(200)
print(acc)
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含1500",
    "passed": "1500" in output,
    "message": "存款 500 后应该是 1500"
})
_test_results.append({
    "name": "包含1300",
    "passed": "1300" in output,
    "message": "取款 200 后应该是 1300"
})
_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "应该显示账户名"
})
`,testCases:[{name:"存款后",input:"无",expected:"1500"}],xpReward:20},{id:3,title:"计数器类",description:`创建一个可以记录调用次数的类装饰器。

要求：
- 类 CallCounter
- 实现 __call__ 方法
- 每次调用时打印是第几次调用`,difficulty:"medium",initialCode:`class CallCounter:
    def __init__(self):
        self.count = 0
    
    def __call__(self, *args, **kwargs):
        # 在此实现
        pass

counter = CallCounter()
counter()
counter()
counter("hello")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含第1次",
    "passed": "1" in output,
    "message": "第一次调用"
})
_test_results.append({
    "name": "包含第3次",
    "passed": "3" in output,
    "message": "第三次调用"
})
`,testCases:[{name:"基础测试",input:"无",expected:"3"}],xpReward:20},{id:4,title:"图书管理系统",description:`创建一个 Book 类。

要求：
- 属性：title, author, year, available（默认True）
- borrow() 借书（如果可用，标记为不可用）
- return_book() 还书
- 测试借还书流程`,difficulty:"hard",initialCode:`class Book:
    def __init__(self, title, author, year):
        # 在此实现
        pass
    
    def borrow(self):
        # 在此实现
        pass
    
    def return_book(self):
        # 在此实现
        pass
    
    def __str__(self):
        return f"{self.title} - {self.author} ({'可借' if self.available else '已借出'})"

book = Book("Python编程", "小明", 2024)
print(book)
book.borrow()
print(book)
book.borrow()  # 应该提示
book.return_book()
print(book)
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含可借",
    "passed": "可借" in output,
    "message": "初始状态应该是可借"
})
_test_results.append({
    "name": "包含已借出",
    "passed": "已借出" in output,
    "message": "借出后应该是已借出"
})
_test_results.append({
    "name": "包含Python编程",
    "passed": "Python编程" in output,
    "message": "应该显示书名"
})
`,testCases:[{name:"借书后",input:"无",expected:"已借出"}],xpReward:30}],13:[{id:1,title:"动物声音多态",description:`用多态实现不同动物的叫声。

要求：
- 父类 Animal，方法 speak() 返回 "..."
- 子类 Dog 重写 speak() 返回 "汪汪"
- 子类 Cat 重写 speak() 返回 "喵喵"
- 用循环调用 speak()`,difficulty:"easy",initialCode:`class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    # 在此重写
    pass

class Cat(Animal):
    # 在此重写
    pass

animals = [Dog(), Cat(), Dog(), Cat()]
for a in animals:
    print(a.speak())
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含汪汪",
    "passed": "汪汪" in output,
    "message": "Dog 应该返回汪汪"
})
_test_results.append({
    "name": "包含喵喵",
    "passed": "喵喵" in output,
    "message": "Cat 应该返回喵喵"
})
`,testCases:[{name:"狗叫",input:"无",expected:"汪汪"}],xpReward:15},{id:2,title:"员工薪资系统",description:`用继承实现不同类型员工的薪资计算。

要求：
- 父类 Employee，属性 name，方法 calculate_salary() 返回基础工资 5000
- 子类 Manager 重写，基础 + 奖金 3000
- 子类 Developer 重写，基础 + 项目奖金`,difficulty:"medium",initialCode:`class Employee:
    def __init__(self, name):
        self.name = name
    
    def calculate_salary(self):
        return 5000

class Manager(Employee):
    # 在此重写
    pass

class Developer(Employee):
    def __init__(self, name, projects=0):
        super().__init__(name)
        self.projects = projects
    
    def calculate_salary(self):
        return super().calculate_salary() + self.projects * 1000

emps = [
    Manager("经理A"),
    Developer("开发B", 5),
    Employee("普通员工C")
]
for e in emps:
    print(f"{e.name}: {e.calculate_salary()}元")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含8000",
    "passed": "8000" in output,
    "message": "经理 5000+3000=8000"
})
_test_results.append({
    "name": "包含10000",
    "passed": "10000" in output,
    "message": "开发 5000+5*1000=10000"
})
_test_results.append({
    "name": "包含5000",
    "passed": "5000" in output,
    "message": "普通员工应该是 5000"
})
`,testCases:[{name:"经理薪资",input:"无",expected:"8000"}],xpReward:25},{id:3,title:"几何图形系统",description:`用继承实现几何图形。

要求：
- 父类 Shape，方法 area() 返回 0
- 子类 Square（边长）
- 子类 Triangle（底和高）
- 列表中放不同图形，遍历打印面积`,difficulty:"medium",initialCode:`class Shape:
    def area(self):
        return 0

class Square(Shape):
    def __init__(self, side):
        self.side = side
    # 在此重写 area()

class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height
    # 在此重写 area()

shapes = [Square(5), Triangle(4, 6), Square(3)]
for s in shapes:
    print(f"{type(s).__name__} 面积: {s.area()}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含25",
    "passed": "25" in output,
    "message": "正方形 5*5=25"
})
_test_results.append({
    "name": "包含12",
    "passed": "12" in output,
    "message": "三角形 4*6/2=12"
})
_test_results.append({
    "name": "包含9",
    "passed": "9" in output,
    "message": "正方形 3*3=9"
})
`,testCases:[{name:"正方形",input:"5",expected:"25"}],xpReward:25},{id:4,title:"RPG 角色系统",description:`用继承实现 RPG 游戏角色。

要求：
- 父类 Character，hp、attack 属性，方法 take_damage()
- 子类 Warrior 高攻击
- 子类 Mage 有 mana 属性和 spell() 方法
- 测试战士和法师`,difficulty:"hard",initialCode:`class Character:
    def __init__(self, name, hp, attack):
        self.name = name
        self.hp = hp
        self.attack = attack
    
    def take_damage(self, dmg):
        self.hp -= dmg
        return f"{self.name} 受到 {dmg} 伤害，剩余 HP: {self.hp}"

class Warrior(Character):
    def __init__(self, name):
        super().__init__(name, 100, 15)

class Mage(Character):
    def __init__(self, name):
        super().__init__(name, 60, 8)
        self.mana = 100
    
    def spell(self, target):
        if self.mana >= 20:
            self.mana -= 20
            damage = 25
            target.hp -= damage
            return f"{self.name} 施法对 {target.name} 造成 {damage} 伤害"
        return "法力不足"

w = Warrior("战士A")
m = Mage("法师B")
print(w.take_damage(10))
print(m.spell(w))
print(f"法师剩余法力: {m.mana}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含HP",
    "passed": "HP" in output or "hp" in output or "血" in output,
    "message": "应该显示 HP"
})
_test_results.append({
    "name": "包含法力",
    "passed": "法力" in output or "mana" in output.lower(),
    "message": "法师有法力"
})
_test_results.append({
    "name": "包含战士",
    "passed": "战士" in output,
    "message": "应该显示战士"
})
_test_results.append({
    "name": "包含法师",
    "passed": "法师" in output,
    "message": "应该显示法师"
})
`,testCases:[{name:"基础测试",input:"无",expected:"法力"}],xpReward:35}],14:[{id:1,title:"安全除法器",description:`实现一个安全除法函数，处理各种异常。

要求：
- 函数 safe_div(a, b)
- 处理 ZeroDivisionError
- 处理 TypeError
- 返回结果或错误信息`,difficulty:"easy",initialCode:`def safe_div(a, b):
    # 在此实现
    pass

print(safe_div(10, 2))
print(safe_div(10, 0))
print(safe_div("10", 2))
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含5",
    "passed": "5.0" in output or "5" in output,
    "message": "10/2 = 5"
})
_test_results.append({
    "name": "包含错误",
    "passed": "错" in output or "零" in output,
    "message": "除以零应该返回错误"
})
`,testCases:[{name:"正常",input:"10,2",expected:"5.0"}],xpReward:15},{id:2,title:"输入验证器",description:`实现用户输入验证。

要求：
- 函数 validate_age(age)
- age < 0 或 > 150 抛出 ValueError
- age 不是数字抛 TypeError
- 测试三种情况`,difficulty:"medium",initialCode:`class InvalidAgeError(ValueError):
    pass

def validate_age(age):
    # 在此实现
    pass

# 测试
for test_age in [25, -5, 200, "abc", 30]:
    try:
        validate_age(test_age)
        print(f"{test_age}: 有效")
    except (ValueError, TypeError) as e:
        print(f"{test_age}: 无效 - {e}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含有效",
    "passed": "有效" in output,
    "message": "25 应该是有效"
})
_test_results.append({
    "name": "包含无效",
    "passed": "无效" in output,
    "message": "应该识别无效输入"
})
`,testCases:[{name:"有效年龄",input:"25",expected:"有效"}],xpReward:20},{id:3,title:"上下文管理器",description:`实现一个计时上下文管理器。

要求：
- 类 Timer
- __enter__ 记录开始时间
- __exit__ 计算并打印耗时
- 用 with 语句测试`,difficulty:"hard",initialCode:`import time

class Timer:
    def __enter__(self):
        # 在此实现
        pass
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        # 在此实现
        pass

with Timer() as t:
    # 模拟耗时操作
    total = 0
    for i in range(100000):
        total += i
    print(f"计算结果: {total}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含耗时",
    "passed": "耗时" in output or "秒" in output or "s" in output.lower(),
    "message": "应该输出耗时"
})
_test_results.append({
    "name": "包含结果",
    "passed": "4999950000" in output or "结果" in output,
    "message": "应该输出计算结果"
})
`,testCases:[{name:"基础测试",input:"无",expected:"耗时"}],xpReward:30}],15:[{id:1,title:"列出所有 .py 文件",description:`使用 glob 模块列出所有 Python 文件。

要求：
- 使用 glob 查找当前目录所有 .py 文件
- 打印文件列表和数量`,difficulty:"easy",initialCode:`import glob
import os

# 模拟一些文件名
files = ["main.py", "test.py", "app.py", "data.txt", "readme.md"]
py_files = [f for f in files if f.endswith(".py")]
print("Python 文件:", py_files)
print(f"数量: {len(py_files)}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含.py",
    "passed": ".py" in output,
    "message": "应该包含 .py 文件"
})
_test_results.append({
    "name": "包含数量3",
    "passed": "3" in output,
    "message": "应该有 3 个 .py 文件"
})
_test_results.append({
    "name": "包含main",
    "passed": "main" in output,
    "message": "应该包含 main.py"
})
`,testCases:[{name:"基础测试",input:"无",expected:"3"}],xpReward:15},{id:2,title:"路径信息工具",description:`实现一个函数提取路径信息。

要求：
- 函数 path_info(path) 返回字典
- 包含 name, dir, ext, exists 字段
- 测试多个路径`,difficulty:"medium",initialCode:`import os

def path_info(path):
    # 在此实现
    pass

for p in ["/home/user/main.py", "test.txt", "../data.json"]:
    info = path_info(p)
    print(f"{p}:")
    print(f"  name={info['name']}, dir={info['dir']}, ext={info['ext']}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含main.py",
    "passed": "main.py" in output,
    "message": "应该识别 main.py"
})
_test_results.append({
    "name": "包含.json",
    "passed": ".json" in output,
    "message": "应该识别 .json 扩展名"
})
_test_results.append({
    "name": "包含txt",
    "passed": "txt" in output,
    "message": "应该识别 .txt 扩展名"
})
`,testCases:[{name:"基础测试",input:"无",expected:"ext"}],xpReward:20},{id:3,title:"批量重命名",description:`实现批量重命名文件。

要求：
- 函数 batch_rename(file_list, prefix)
- 给所有文件添加前缀
- 返回新文件名列表`,difficulty:"medium",initialCode:`def batch_rename(file_list, prefix):
    # 在此实现
    pass

originals = ["report.txt", "data.csv", "image.png"]
renamed = batch_rename(originals, "2024_")
for old, new in zip(originals, renamed):
    print(f"{old} -> {new}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含2024_",
    "passed": "2024_" in output,
    "message": "应该添加 2024_ 前缀"
})
_test_results.append({
    "name": "包含report",
    "passed": "report" in output,
    "message": "应该保留原文件名"
})
_test_results.append({
    "name": "包含3个文件",
    "passed": output.count("->") >= 3,
    "message": "应该重命名 3 个文件"
})
`,testCases:[{name:"基础测试",input:"无",expected:"2024_"}],xpReward:20},{id:4,title:"文件统计器",description:`统计目录中的文件信息。

要求：
- 函数 count_files(file_list)
- 统计文件总数、.py 数量、总大小（假设每个文件100字节）`,difficulty:"hard",initialCode:`def count_files(file_list):
    # 在此实现
    pass

files = ["a.py", "b.txt", "c.py", "d.py", "e.md", "f.py"]
result = count_files(files)
print(f"总文件: {result['total']}")
print(f".py 文件: {result['py_count']}")
print(f"总大小: {result['total_size']} 字节")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "总文件6",
    "passed": "6" in output,
    "message": "总文件数 6"
})
_test_results.append({
    "name": "py文件4",
    "passed": "4" in output,
    "message": ".py 文件 4 个"
})
_test_results.append({
    "name": "大小600",
    "passed": "600" in output,
    "message": "总大小 6*100=600 字节"
})
`,testCases:[{name:"基础测试",input:"无",expected:"600"}],xpReward:25}],16:[{id:1,title:"斐波那契生成器",description:`用生成器实现斐波那契数列。

要求：
- 函数 fib(n) 是生成器
- yield 前 n 个斐波那契数
- 测试 fib(10)`,difficulty:"easy",initialCode:`def fib(n):
    # 在此实现
    pass

# 测试
for num in fib(10):
    print(num, end=" ")
print()
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含0",
    "passed": "0" in output,
    "message": "第一个应该是 0"
})
_test_results.append({
    "name": "包含34",
    "passed": "34" in output,
    "message": "第10个斐波那契是 34"
})
_test_results.append({
    "name": "包含21",
    "passed": "21" in output,
    "message": "应该包含 21"
})
`,testCases:[{name:"基础测试",input:"无",expected:"34"}],xpReward:15},{id:2,title:"缓存装饰器",description:`实现一个简单的缓存装饰器。

要求：
- 装饰器 cache
- 第二次调用相同参数时直接返回缓存结果
- 用字典存缓存`,difficulty:"medium",initialCode:`def cache(func):
    cached = {}
    def wrapper(*args):
        # 在此实现
        pass
    return wrapper

@cache
def slow_add(a, b):
    print(f"计算 {a} + {b}")
    return a + b

print(slow_add(1, 2))
print(slow_add(1, 2))  # 应该用缓存
print(slow_add(2, 3))
print(slow_add(2, 3))  # 应该用缓存
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含3",
    "passed": "3" in output,
    "message": "1+2=3"
})
_test_results.append({
    "name": "包含5",
    "passed": "5" in output,
    "message": "2+3=5"
})
_test_results.append({
    "name": "计算次数",
    "passed": output.count("计算") == 2,
    "message": "实际计算应该只发生 2 次"
})
`,testCases:[{name:"基础测试",input:"无",expected:"3"}],xpReward:25},{id:3,title:"日志装饰器",description:`实现一个日志装饰器。

要求：
- 装饰器 log_call
- 打印函数名、参数、返回值
- 用 functools.wraps 保留元信息`,difficulty:"medium",initialCode:`import functools

def log_call(func):
    # 在此实现
    pass

@log_call
def add(a, b):
    return a + b

result = add(3, 5)
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含add",
    "passed": "add" in output,
    "message": "应该包含函数名 add"
})
_test_results.append({
    "name": "包含3",
    "passed": "3" in output,
    "message": "应该包含参数"
})
_test_results.append({
    "name": "包含8",
    "passed": "8" in output,
    "message": "应该包含返回值"
})
`,testCases:[{name:"基础测试",input:"无",expected:"add"}],xpReward:25},{id:4,title:"数据管道",description:`用 map/filter/lambda 处理数据。

要求：
- 给定 [1,2,3,4,5,6,7,8,9,10]
- 筛选出偶数
- 每个数平方
- 求总和`,difficulty:"hard",initialCode:`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 在此实现数据管道
result = None

print(f"原数据: {numbers}")
print(f"偶数平方和: {result}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含220",
    "passed": "220" in output,
    "message": "4+16+36+64+100 = 220"
})
_test_results.append({
    "name": "包含原数据",
    "passed": "原数据" in output or "1" in output,
    "message": "应该输出原数据"
})
`,testCases:[{name:"基础测试",input:"无",expected:"220"}],xpReward:30}],17:[{id:1,title:"日期计算器",description:`使用 datetime 计算日期。

要求：
- 计算今天到年底还有多少天
- 打印今天的日期、星期`,difficulty:"easy",initialCode:`from datetime import datetime, timedelta

now = datetime.now()
year_end = datetime(now.year, 12, 31)
days_left = (year_end - now).days

print(f"今天: {now.strftime('%Y-%m-%d %A')}")
print(f"距离年底还有: {days_left} 天")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含今天",
    "passed": "今天" in output,
    "message": "应该显示今天"
})
_test_results.append({
    "name": "包含距离",
    "passed": "距离" in output,
    "message": "应该显示距离年底"
})
_test_results.append({
    "name": "包含天",
    "passed": "天" in output,
    "message": "应该包含天数"
})
`,testCases:[{name:"基础测试",input:"无",expected:"今天"}],xpReward:15},{id:2,title:"邮箱验证",description:`用正则验证邮箱格式。

要求：
- 函数 is_email(s)
- 用正则匹配
- 测试多个邮箱`,difficulty:"medium",initialCode:`import re

def is_email(s):
    # 在此实现
    pass

tests = ["test@example.com", "user.name+tag@domain.co.uk", "invalid.email", "@nodomain.com", "no@dot"]
for t in tests:
    print(f"{t}: {'有效' if is_email(t) else '无效'}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含有效",
    "passed": "有效" in output,
    "message": "test@example.com 应该是有效"
})
_test_results.append({
    "name": "包含无效",
    "passed": "无效" in output,
    "message": "应该有无效的邮箱"
})
_test_results.append({
    "name": "包含test",
    "passed": "test@example" in output or "test" in output,
    "message": "应该输出 test 邮箱"
})
`,testCases:[{name:"基础测试",input:"无",expected:"有效"}],xpReward:20},{id:3,title:"JSON 配置加载",description:`加载和修改 JSON 配置。

要求：
- 创建配置字典
- 序列化为 JSON 字符串
- 修改配置再反序列化
- 验证修改生效`,difficulty:"medium",initialCode:`import json

config = {
    "app_name": "MyApp",
    "version": "1.0.0",
    "debug": False,
    "max_users": 100
}

# 序列化
json_str = json.dumps(config, ensure_ascii=False, indent=2)
print("原配置:")
print(json_str)

# 反序列化修改
loaded = json.loads(json_str)
loaded["version"] = "2.0.0"
loaded["debug"] = True
loaded["max_users"] = 200

print("\\n修改后:")
print(json.dumps(loaded, ensure_ascii=False, indent=2))
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含MyApp",
    "passed": "MyApp" in output,
    "message": "应该包含 app_name"
})
_test_results.append({
    "name": "包含2.0.0",
    "passed": "2.0.0" in output,
    "message": "修改后的版本号"
})
_test_results.append({
    "name": "包含200",
    "passed": "200" in output,
    "message": "修改后的 max_users"
})
_test_results.append({
    "name": "包含true",
    "passed": "true" in output,
    "message": "debug 应该是 true"
})
`,testCases:[{name:"基础测试",input:"无",expected:"2.0.0"}],xpReward:25},{id:4,title:"词频分析报告",description:`分析一段文本的词频。

要求：
- 给定英文段落
- 用 Counter 统计
- 找出前 3 个高频词
- 找出只出现一次的词数`,difficulty:"hard",initialCode:`from collections import Counter

text = "the quick brown fox jumps over the lazy dog the fox is quick and the dog is lazy"
words = text.split()
counter = Counter(words)

top3 = counter.most_common(3)
once = [w for w, c in counter.items() if c == 1]

print(f"总词数: {len(words)}")
print(f"不重复词数: {len(counter)}")
print(f"前3高频: {top3}")
print(f"只出现1次的词: {once}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含the",
    "passed": "the" in output and ("4" in output or "3" in output),
    "message": "the 是高频词"
})
_test_results.append({
    "name": "包含总数",
    "passed": "总词数" in output,
    "message": "应该输出总词数"
})
_test_results.append({
    "name": "包含前3",
    "passed": "前3" in output or "Top" in output or "top" in output.lower(),
    "message": "应该输出高频词"
})
`,testCases:[{name:"基础测试",input:"无",expected:"the"}],xpReward:30}],18:[{id:1,title:"待办事项管理器",description:`实现一个待办事项管理器。

要求：
- 类 TodoList
- 方法 add(item), remove(item), list_all()
- 方法 mark_done(item) 标记完成
- 测试增删改查`,difficulty:"medium",initialCode:`class TodoList:
    def __init__(self):
        self.items = []
    
    def add(self, item):
        # 在此实现
        pass
    
    def list_all(self):
        # 在此实现
        pass
    
    def mark_done(self, item):
        # 在此实现
        pass

todo = TodoList()
todo.add("学习 Python")
todo.add("做项目")
todo.add("写博客")
print("--- 所有待办 ---")
todo.list_all()
todo.mark_done("学习 Python")
print("--- 完成后 ---")
todo.list_all()
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含学习",
    "passed": "学习" in output,
    "message": "应该包含待办"
})
_test_results.append({
    "name": "包含✓",
    "passed": "✓" in output or "[x]" in output or "完成" in output,
    "message": "应该显示完成标记"
})
_test_results.append({
    "name": "包含所有待办",
    "passed": "所有" in output,
    "message": "应该列出所有待办"
})
`,testCases:[{name:"基础测试",input:"无",expected:"学习"}],xpReward:30},{id:2,title:"数据导出器",description:`实现一个数据导出器，支持多种格式。

要求：
- 类 DataExporter
- 方法 to_json(data), to_csv(data)
- 数据是字典列表
- 测试两种导出`,difficulty:"medium",initialCode:`import json
import csv
import io

class DataExporter:
    def to_json(self, data):
        # 在此实现
        pass
    
    def to_csv(self, data):
        # 在此实现
        pass

data = [
    {"name": "小明", "age": 18, "score": 95},
    {"name": "小红", "age": 19, "score": 88}
]

exporter = DataExporter()
print("=== JSON ===")
print(exporter.to_json(data))
print("\\n=== CSV ===")
print(exporter.to_csv(data))
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含JSON",
    "passed": "JSON" in output and "{" in output,
    "message": "应该有 JSON 输出"
})
_test_results.append({
    "name": "包含CSV",
    "passed": "CSV" in output and "," in output,
    "message": "应该有 CSV 输出"
})
_test_results.append({
    "name": "包含小明",
    "passed": "小明" in output,
    "message": "应该包含数据"
})
`,testCases:[{name:"基础测试",input:"无",expected:"JSON"}],xpReward:35},{id:3,title:"简易爬虫",description:`实现一个简易的网页内容获取。

要求：
- 模拟函数 fetch(url)
- 模拟解析函数 parse(html)
- 主流程：获取 → 解析 → 提取标题`,difficulty:"hard",initialCode:`import re

# 模拟的 fetch（实际用 requests）
def fetch(url):
    """模拟获取网页内容"""
    if "example" in url:
        return "<html><head><title>Example Page</title></head><body>Hello World</body></html>"
    return "<html><head><title>Other</title></head></html>"

# 解析标题
def extract_title(html):
    match = re.search(r"<title>(.*?)</title>", html)
    return match.group(1) if match else None

# 主流程
url = "https://example.com"
html = fetch(url)
title = extract_title(html)
print(f"URL: {url}")
print(f"标题: {title}")
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含标题",
    "passed": "标题" in output or "Example" in output,
    "message": "应该提取标题"
})
_test_results.append({
    "name": "包含URL",
    "passed": "URL" in output or "url" in output or "example" in output,
    "message": "应该输出 URL"
})
`,testCases:[{name:"基础测试",input:"无",expected:"Example"}],xpReward:40},{id:4,title:"毕业挑战：迷你电商",description:`综合实战：迷你电商系统。

要求：
- 类 Product、Cart、Order
- Product: name, price
- Cart: add/remove/total
- Order: 整合 Cart 生成订单（含时间戳）
- 测试完整流程`,difficulty:"hard",initialCode:`from datetime import datetime

class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Cart:
    def __init__(self):
        self.items = []
    
    def add(self, product, qty=1):
        # 在此实现
        pass
    
    def total(self):
        # 在此实现
        pass

class Order:
    def __init__(self, cart):
        self.cart = cart
        self.created_at = datetime.now()
    
    def summary(self):
        # 在此实现
        pass

# 测试
cart = Cart()
cart.add(Product("Python书", 59.9), 2)
cart.add(Product("咖啡", 25.0), 1)

order = Order(cart)
print(order.summary())
`,testCode:`output = _output_buffer.getvalue()

_test_results.append({
    "name": "包含Python",
    "passed": "Python" in output,
    "message": "应该包含商品"
})
_test_results.append({
    "name": "包含价格",
    "passed": "144" in output or "59.9" in output or "25" in output,
    "message": "应该输出价格"
})
_test_results.append({
    "name": "包含时间",
    "passed": "20" in output or ":" in output,
    "message": "应该包含时间戳"
})
_test_results.append({
    "name": "包含订单",
    "passed": "订单" in output or "Order" in output or "总价" in output or "合计" in output,
    "message": "应该输出订单信息"
})
`,testCases:[{name:"基础测试",input:"无",expected:"Python"}],xpReward:50}]};function Sg(){const e=al(),[t,n]=w.useState(Xt[3]),{progress:s,isLevelUnlocked:r,isLevelCompleted:l,isChallengeCompleted:a}=Bn(),o=w.useMemo(()=>Xt.map(y=>{const p=r(y.id),d=l(y.id);let f="locked";return d?f="completed":p&&(f="current"),{...y,status:f}}),[r,l]),u=o.filter(y=>y.status==="completed").length,c=Math.round(u/Xt.length*100),g=y=>Array(5).fill(0).map((p,d)=>i.jsx("span",{className:`star ${d<y?"filled":""}`,children:"★"},d)),m=o.find(y=>y.status==="current")||o.find(y=>y.status!=="locked")||o[0],h=m.id,x=Ba[h]||[],_=Dl.filter(y=>y.completed).length,v=y=>{y.status!=="locked"&&(n(y),e(`/level/${y.id}`))};return i.jsxs("div",{className:"level-map-page",children:[i.jsxs("div",{className:"map-decoration",children:[i.jsx("div",{className:"deco-circle deco-1"}),i.jsx("div",{className:"deco-circle deco-2"}),i.jsx("div",{className:"deco-code",children:"</>"}),i.jsx("div",{className:"deco-code deco-code-2",children:"{ }"})]}),i.jsxs("div",{className:"container map-container",children:[i.jsxs("div",{className:"map-header",children:[i.jsxs("div",{className:"path-info",children:[i.jsxs("div",{className:"path-badge",children:[i.jsx("span",{className:"path-icon",children:"🐍"}),i.jsx("span",{children:"Python 进阶"})]}),i.jsx("h1",{className:"map-title",children:"冒险地图"}),i.jsxs("p",{className:"map-subtitle",children:["完成 ",u," 个关卡，共 ",Xt.length," 关 · 解锁你的 Python 技能"]})]}),i.jsxs("div",{className:"progress-bar-section",children:[i.jsxs("div",{className:"progress-info",children:[i.jsx("span",{className:"progress-label",children:"学习进度"}),i.jsxs("span",{className:"progress-percent",children:[c,"%"]})]}),i.jsx("div",{className:"progress-bar",children:i.jsx("div",{className:"progress-fill",style:{width:`${c}%`}})})]})]}),i.jsx("div",{className:"level-map-wrapper",children:i.jsxs("div",{className:"level-map",children:[i.jsx("div",{className:"map-line"}),o.map((y,p)=>{var d;return i.jsxs("div",{className:`map-node node-${y.side} status-${y.status}`,style:{animationDelay:`${p*.1}s`},onClick:()=>v(y),children:[i.jsxs("div",{className:"node-dot",children:[y.status==="completed"&&i.jsx("span",{className:"dot-check",children:"✓"}),y.status==="current"&&i.jsx("div",{className:"dot-pulse"}),y.status==="locked"&&i.jsx("span",{className:"dot-lock",children:"🔒"})]}),i.jsx("div",{className:`node-card ${t.id===y.id?"selected":""}`,children:y.status!=="locked"?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"card-header",children:[i.jsx("span",{className:"level-number",children:y.title}),i.jsx("div",{className:"level-stars",children:g(y.difficulty)})]}),i.jsx("h3",{className:"card-title",children:y.subtitle}),i.jsx("p",{className:"card-desc",children:y.description}),i.jsxs("div",{className:"card-meta",children:[i.jsxs("span",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"📚"}),y.lessons," 节课"]}),i.jsxs("span",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"⚡"}),y.challenges," 个挑战"]}),i.jsxs("span",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"⏱"}),y.duration]})]}),i.jsx("div",{className:"card-topics",children:y.topics.map((f,j)=>i.jsx("span",{className:"topic-tag",children:f},j))}),y.status==="current"&&i.jsxs("div",{className:"current-badge",children:[i.jsx("span",{className:"pulse-dot"}),"进行中"]}),y.status==="completed"&&i.jsx("div",{className:"completed-badge-card",children:"✓ 已完成"})]}):i.jsxs("div",{className:"locked-content",children:[i.jsx("div",{className:"lock-icon",children:"🔒"}),i.jsx("h3",{className:"lock-title",children:"未解锁"}),i.jsx("p",{className:"lock-desc",children:"完成前一关后解锁此关卡"}),i.jsxs("div",{className:"lock-hint",children:["需要完成：",(d=o[p-1])==null?void 0:d.title]})]})})]},y.id)})]})}),m&&i.jsxs("div",{className:"current-level-detail",children:[i.jsxs("div",{className:"detail-header",children:[i.jsxs("div",{children:[i.jsx("h2",{children:m.title}),i.jsxs("p",{className:"detail-subtitle",children:["掌握 ",m.subtitle,"，学会使用循环的核心结构"]})]}),i.jsx(Ye,{to:`/level/${m.id}`,className:"btn btn-primary",children:"进入学习 →"})]}),i.jsxs("div",{className:"lessons-list",children:[i.jsx("h3",{className:"list-title",children:"📖 课程列表"}),Dl.map((y,p)=>i.jsxs("div",{className:`lesson-item ${y.completed?"completed":""}`,onClick:()=>e(`/level/${m.id}`),children:[i.jsx("div",{className:"lesson-index",children:String(p+1).padStart(2,"0")}),i.jsxs("div",{className:"lesson-icon",children:[y.type==="video"&&"🎬",y.type==="reading"&&"📖",y.type==="interactive"&&"💻"]}),i.jsxs("div",{className:"lesson-info",children:[i.jsx("h4",{className:"lesson-title",children:y.title}),i.jsx("span",{className:"lesson-duration",children:y.duration})]}),i.jsx("div",{className:"lesson-status",children:y.completed?i.jsx("span",{className:"status-completed",children:"✓ 已完成"}):i.jsx("span",{className:"status-current",children:"继续学习"})})]},y.id))]}),i.jsxs("div",{className:"challenges-section",children:[i.jsx("h3",{className:"list-title",children:"⚡ 编程挑战"}),i.jsx("div",{className:"challenges-grid",children:x.length>0?x.map(y=>{const p=a(h,y.id);return i.jsxs("div",{className:`challenge-card ${p?"completed":""}`,onClick:()=>e(`/level/${m.id}`),children:[i.jsxs("div",{className:"challenge-header",children:[i.jsxs("span",{className:`challenge-difficulty difficulty-${y.difficulty}`,children:[y.difficulty==="easy"&&"简单",y.difficulty==="medium"&&"中等",y.difficulty==="hard"&&"困难"]}),p&&i.jsx("span",{className:"challenge-check",children:"✓"})]}),i.jsx("h4",{className:"challenge-title",children:y.title})]},y.id)}):Cg.map(y=>i.jsxs("div",{className:`challenge-card ${y.completed?"completed":""}`,onClick:()=>e(`/level/${m.id}`),children:[i.jsxs("div",{className:"challenge-header",children:[i.jsxs("span",{className:`challenge-difficulty difficulty-${y.difficulty}`,children:[y.difficulty==="easy"&&"简单",y.difficulty==="medium"&&"中等",y.difficulty==="hard"&&"困难"]}),y.completed&&i.jsx("span",{className:"challenge-check",children:"✓"})]}),i.jsx("h4",{className:"challenge-title",children:y.title})]},y.id))})]}),i.jsxs("div",{className:"stats-row",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",children:"📚"}),i.jsxs("div",{className:"stat-content",children:[i.jsxs("span",{className:"stat-big",children:[_,"/",Dl.length]}),i.jsx("span",{className:"stat-small",children:"已完成课时"})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",children:"⭐"}),i.jsxs("div",{className:"stat-content",children:[i.jsxs("span",{className:"stat-big",children:[s.xp,"/",s.totalXP]}),i.jsx("span",{className:"stat-small",children:"经验值 XP"})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",children:"⏱"}),i.jsxs("div",{className:"stat-content",children:[i.jsxs("span",{className:"stat-big",children:[">","30 分钟"]}),i.jsx("span",{className:"stat-small",children:"预计学习时间"})]})]})]})]})]})]})}function Di({initialCode:e="",onRun:t,readOnly:n=!1,height:s="300px",showOutput:r=!0,testCode:l,onTestResult:a,placeholder:o="# 在这里编写你的 Python 代码"}){const[u,c]=w.useState(e),[g,m]=w.useState(""),[h,x]=w.useState(null),[_,v]=w.useState(!1),[y,p]=w.useState([]),d=w.useRef(null),{isLoading:f,runCode:j,runCodeWithTests:N}=mp();w.useEffect(()=>{c(e)},[e]);const E=async()=>{if(!(f||_)){v(!0),m(""),x(null),p([]);try{if(l){const T=await N(u,l);m(T.output),x(T.error),p(T.testResults),a==null||a(T.passed,T.testResults),t==null||t(T.output,T.error)}else{const T=await j(u);m(T.output),x(T.error),t==null||t(T.output,T.error)}}catch(T){x(T instanceof Error?T.message:"执行出错")}finally{v(!1)}}},R=T=>{if(T.key==="Tab"){T.preventDefault();const ae=T.target,S=ae.selectionStart,O=ae.selectionEnd,D=u.substring(0,S)+"    "+u.substring(O);c(D),setTimeout(()=>{ae.selectionStart=ae.selectionEnd=S+4},0)}(T.ctrlKey||T.metaKey)&&T.key==="Enter"&&(T.preventDefault(),E())},b=()=>{navigator.clipboard.writeText(u)},P=()=>{c(e),m(""),x(null),p([])},M=()=>{const T=u.split(`
`).length;return Array(T).fill(0).map((ae,S)=>i.jsx("div",{className:"line-number",children:S+1},S))};return i.jsxs("div",{className:"code-editor-container",children:[i.jsxs("div",{className:"editor-header",children:[i.jsx("div",{className:"editor-tabs",children:i.jsx("span",{className:"tab active",children:"main.py"})}),i.jsxs("div",{className:"editor-actions",children:[i.jsx("button",{className:"action-btn",onClick:b,title:"复制代码",children:"📋"}),i.jsx("button",{className:"action-btn",onClick:P,title:"重置代码",children:"🔄"}),i.jsx("button",{className:`run-btn ${_?"running":""}`,onClick:E,disabled:f||_||n,children:f?i.jsx(i.Fragment,{children:"⏳ 加载中..."}):_?i.jsx(i.Fragment,{children:"⏳ 运行中..."}):i.jsx(i.Fragment,{children:"▶ 运行代码"})})]})]}),i.jsxs("div",{className:"editor-body",style:{height:s},children:[i.jsx("div",{className:"line-numbers",children:M()}),i.jsx("textarea",{ref:d,className:"code-textarea",value:u,onChange:T=>c(T.target.value),onKeyDown:R,readOnly:n,placeholder:o,spellCheck:!1})]}),r&&i.jsxs("div",{className:"output-section",children:[i.jsxs("div",{className:"output-header",children:[i.jsx("span",{className:"output-title",children:"📤 输出结果"}),y.length>0&&i.jsxs("span",{className:`test-summary ${y.every(T=>T.passed)?"all-passed":"has-failed"}`,children:[y.filter(T=>T.passed).length,"/",y.length," 测试通过"]})]}),i.jsx("div",{className:`output-content ${h?"has-error":""}`,children:h?i.jsx("pre",{className:"error-text",children:h}):g?i.jsx("pre",{children:g}):i.jsx("span",{className:"output-placeholder",children:'点击"运行代码"查看输出结果'})}),y.length>0&&i.jsx("div",{className:"test-results",children:y.map((T,ae)=>i.jsxs("div",{className:`test-item ${T.passed?"passed":"failed"}`,children:[i.jsx("span",{className:"test-icon",children:T.passed?"✓":"✗"}),i.jsx("span",{className:"test-name",children:T.name}),!T.passed&&i.jsx("span",{className:"test-message",children:T.message})]},ae))})]})]})}function Pg({title:e,steps:t,onComplete:n}){var D;const[s,r]=w.useState(0),[l,a]=w.useState(new Set),[o,u]=w.useState(null),[c,g]=w.useState(!1),[m,h]=w.useState(!1),[x,_]=w.useState(!1),[v,y]=w.useState(!1),[p,d]=w.useState(!1),f=t[s],j=(s+(l.has(s)?1:0))/t.length*100,N=s===t.length-1,E=()=>{if(N){b(),n==null||n();return}r(s+1),u(null),g(!1),h(!1),_(!1),y(!1),d(!1)},R=()=>{s>0&&(r(s-1),u(null),g(!1),h(!1),_(!1),y(!1),d(!1))},b=()=>{a(I=>new Set([...I,s]))},P=I=>{c||u(I)},M=()=>{o!==null&&(g(!0),o===f.correctAnswer&&b())},T=I=>{h(I),I&&b()},ae=()=>{_(!0),b()},S=()=>{y(I=>!I)},O=async()=>{if(f.answer)try{await navigator.clipboard.writeText(f.answer),d(!0),setTimeout(()=>d(!1),1800)}catch(I){console.error("复制失败",I)}};return i.jsxs("div",{className:"interactive-lesson",children:[i.jsx("div",{className:"lesson-progress-bar",children:i.jsx("div",{className:"progress-fill",style:{width:`${j}%`}})}),i.jsx("div",{className:"lesson-steps-indicator",children:t.map((I,z)=>i.jsxs("div",{className:`step-dot ${z<s||l.has(z)?"completed":""} ${z===s?"current":""}`,onClick:()=>r(z),children:[i.jsx("span",{className:"dot-number",children:z+1}),i.jsx("span",{className:"dot-title",children:I.title})]},I.id))}),i.jsxs("div",{className:"lesson-content",children:[i.jsxs("div",{className:"step-header",children:[i.jsxs("span",{className:"step-badge",children:["第 ",s+1," 步 / 共 ",t.length," 步"]}),i.jsx("h2",{className:"step-title",children:f.title})]}),i.jsxs("div",{className:"step-body",children:[f.type==="explanation"&&i.jsxs("div",{className:"explanation-content",children:[i.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:un(f.content)}}),i.jsx("button",{className:"btn btn-primary",onClick:()=>{b(),E()},children:N?"完成学习 🎉":"我明白了，继续 →"})]}),f.type==="example"&&i.jsxs("div",{className:"example-content",children:[i.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:un(f.content)}}),f.code&&i.jsxs("div",{className:"code-example-wrapper",children:[i.jsx("div",{className:"example-label",children:"💡 点击运行试试："}),i.jsx(Di,{initialCode:f.code,height:"250px"})]}),i.jsx("button",{className:"btn btn-primary",onClick:()=>{b(),E()},children:N?"完成学习 🎉":"继续下一步 →"})]}),f.type==="practice"&&i.jsxs("div",{className:"practice-content",children:[i.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:un(f.content)}}),f.hint&&i.jsxs("div",{className:"hint-box",children:[i.jsx("span",{className:"hint-icon",children:"💡 提示："}),f.hint]}),f.code&&i.jsx("div",{className:"practice-editor",children:i.jsx(Di,{initialCode:f.code,height:"300px",testCode:f.testCode,onTestResult:T})}),f.answer&&i.jsxs("div",{className:"answer-section",children:[i.jsxs("div",{className:"answer-toolbar",children:[i.jsx("button",{type:"button",className:"btn-answer-toggle",onClick:S,"aria-expanded":v,children:v?"🙈 隐藏答案":"💡 查看答案"}),v&&i.jsx("button",{type:"button",className:"btn-copy-answer",onClick:O,children:p?"✓ 已复制":"📋 复制答案"})]}),v&&i.jsxs("div",{className:"answer-box",children:[i.jsx("div",{className:"answer-box-header",children:i.jsx("span",{className:"answer-box-title",children:"📝 参考答案"})}),i.jsx("pre",{className:"answer-code",children:i.jsx("code",{children:f.answer})}),f.explanation&&i.jsxs("div",{className:"answer-explanation",children:[i.jsx("span",{className:"explanation-icon",children:"🔎"}),i.jsx("div",{dangerouslySetInnerHTML:{__html:un(f.explanation)}})]})]})]}),i.jsxs("div",{className:"practice-actions",children:[i.jsx("button",{className:"btn btn-secondary",onClick:R,disabled:s===0,children:"← 上一步"}),!x&&!m&&i.jsx("button",{className:"btn btn-secondary",onClick:ae,children:"跳过此步"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>{b(),E()},children:m||x?N?"完成学习 🎉":"继续下一步 →":"跳过练习继续 →"})]}),m&&i.jsx("div",{className:"success-message",children:"✅ 太棒了！你成功完成了这个练习！"})]}),f.type==="quiz"&&i.jsxs("div",{className:"quiz-content",children:[i.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:un(f.content)}}),i.jsx("div",{className:"quiz-options",children:(D=f.options)==null?void 0:D.map((I,z)=>i.jsxs("div",{className:`quiz-option ${o===z?"selected":""} ${c&&z===f.correctAnswer?"correct":""} ${c&&o===z&&z!==f.correctAnswer?"wrong":""}`,onClick:()=>P(z),children:[i.jsx("span",{className:"option-letter",children:String.fromCharCode(65+z)}),i.jsx("span",{className:"option-text",children:I})]},z))}),c?i.jsxs("div",{className:"quiz-result",children:[o===f.correctAnswer?i.jsx("div",{className:"result-success",children:"✅ 回答正确！"}):i.jsxs("div",{className:"result-failure",children:["❌ 回答错误，正确答案是 ",String.fromCharCode(65+(f.correctAnswer||0))]}),(v||f.explanation)&&i.jsxs("div",{className:"answer-box quiz-explain-box",children:[i.jsx("div",{className:"answer-box-header",children:i.jsx("span",{className:"answer-box-title",children:"🔎 答案解析"})}),f.answer&&i.jsx("pre",{className:"answer-code",children:i.jsx("code",{children:f.answer})}),f.explanation&&i.jsxs("div",{className:"answer-explanation",children:[i.jsx("span",{className:"explanation-icon",children:"📖"}),i.jsx("div",{dangerouslySetInnerHTML:{__html:un(f.explanation)}})]})]}),i.jsxs("div",{className:"result-actions",children:[i.jsx("button",{className:"btn btn-secondary",onClick:()=>{g(!1),u(null)},children:"重新答题"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>{b(),E()},children:N?"完成学习 🎉":"继续下一步 →"})]})]}):i.jsxs("div",{className:"quiz-actions",children:[i.jsx("button",{className:"btn btn-primary",onClick:M,disabled:o===null,children:"提交答案"}),f.answer&&i.jsx("button",{type:"button",className:"btn-answer-toggle",onClick:S,children:v?"🙈 隐藏解析":"💡 查看解析"})]})]})]})]})]})}function un(e){return e.replace(/\n\n/g,"</p><p>").replace(/^/g,"<p>").replace(/$/g,"</p>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")}function Eg({title:e,description:t,difficulty:n,initialCode:s,testCode:r,testCases:l,onComplete:a,xpReward:o=10}){const[u,c]=w.useState(!1),[g,m]=w.useState(!1),[h,x]=w.useState("description"),_=p=>{p&&!u&&(c(!0),a==null||a())},y={easy:{label:"简单",color:"green",icon:"🟢"},medium:{label:"中等",color:"yellow",icon:"🟡"},hard:{label:"困难",color:"red",icon:"🔴"}}[n];return i.jsxs("div",{className:"challenge-arena",children:[i.jsxs("div",{className:"challenge-header",children:[i.jsxs("div",{className:"challenge-info",children:[i.jsxs("div",{className:"challenge-title-row",children:[i.jsxs("span",{className:`difficulty-badge difficulty-${n}`,children:[y.icon," ",y.label]}),i.jsxs("span",{className:"xp-reward",children:["⭐ +",o," XP"]})]}),i.jsx("h2",{className:"challenge-title",children:e})]}),u&&i.jsxs("div",{className:"completion-badge",children:[i.jsx("span",{className:"badge-icon",children:"✅"}),i.jsx("span",{children:"已完成"})]})]}),i.jsxs("div",{className:"challenge-layout",children:[i.jsxs("div",{className:"challenge-sidebar",children:[i.jsxs("div",{className:"sidebar-tabs",children:[i.jsx("button",{className:`sidebar-tab ${h==="description"?"active":""}`,onClick:()=>x("description"),children:"📝 题目描述"}),i.jsxs("button",{className:`sidebar-tab ${h==="testcases"?"active":""}`,onClick:()=>x("testcases"),children:["🧪 测试用例 (",l.length,")"]})]}),i.jsxs("div",{className:"sidebar-content",children:[h==="description"&&i.jsxs("div",{className:"description-content",children:[i.jsx("p",{className:"challenge-desc",children:t}),i.jsxs("div",{className:"hint-section",children:[i.jsx("button",{className:"hint-toggle",onClick:()=>m(!g),children:g?"隐藏提示":"💡 查看提示"}),g&&i.jsx("div",{className:"hint-content",children:i.jsx("p",{children:"提示：使用 Python 的循环结构和条件判断来解决问题。"})})]})]}),h==="testcases"&&i.jsx("div",{className:"testcases-content",children:l.map((p,d)=>i.jsxs("div",{className:"testcase-item",children:[i.jsx("div",{className:"testcase-header",children:i.jsxs("span",{className:"testcase-name",children:["测试用例 ",d+1,": ",p.name]})}),i.jsxs("div",{className:"testcase-body",children:[i.jsxs("div",{className:"testcase-row",children:[i.jsx("span",{className:"testcase-label",children:"输入："}),i.jsx("code",{children:p.input})]}),i.jsxs("div",{className:"testcase-row",children:[i.jsx("span",{className:"testcase-label",children:"预期："}),i.jsx("code",{children:p.expected})]})]})]},d))})]})]}),i.jsx("div",{className:"challenge-editor",children:i.jsx(Di,{initialCode:s,height:"400px",testCode:r,onTestResult:_})})]}),u&&i.jsx("div",{className:"completion-modal-overlay",children:i.jsxs("div",{className:"completion-modal",children:[i.jsx("div",{className:"modal-confetti",children:"🎉"}),i.jsx("h3",{children:"恭喜完成挑战！"}),i.jsxs("p",{className:"modal-reward",children:["获得 ",i.jsxs("span",{className:"reward-xp",children:["+",o," XP"]})," 经验值"]}),i.jsx("p",{className:"modal-message",children:"你成功通过了所有测试用例，继续加油！"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>c(!1),children:"继续编码"})]})})]})}const bg=[{id:"python3",name:"学习 Python 3",description:"Python3 是当前主流 Python 版本。",icon:"🐍",category:"language",difficulty:1,unlocked:!0},{id:"python2",name:"学习 Python 2.x",description:"Python 经典版本（已停止维护）。",icon:"🐍",category:"language",difficulty:2,unlocked:!1},{id:"fastapi",name:"学习 FastAPI",description:"现代高性能 Python API 框架。",icon:"⚡",category:"web",difficulty:3,unlocked:!1},{id:"flask",name:"学习 Flask",description:"轻量级 Python Web 应用框架。",icon:"🌶️",category:"web",difficulty:3,unlocked:!1},{id:"django",name:"学习 Django",description:"全功能 Python Web 开发框架。",icon:"🎸",category:"web",difficulty:4,unlocked:!1},{id:"numpy",name:"学习 NumPy",description:"Python 科学计算核心库。",icon:"🔢",category:"data",difficulty:2,unlocked:!1},{id:"pandas",name:"学习 Pandas",description:"Python 数据分析核心库。",icon:"🐼",category:"data",difficulty:3,unlocked:!1},{id:"scipy",name:"学习 SciPy",description:"Python 数学与科学计算工具包。",icon:"🧪",category:"data",difficulty:3,unlocked:!1},{id:"matplotlib",name:"学习 Matplotlib",description:"Python 数据可视化绘图库。",icon:"📊",category:"data",difficulty:2,unlocked:!1},{id:"dash",name:"学习 Dash",description:"Python 数据分析与可视化 Web 框架。",icon:"📈",category:"data",difficulty:3,unlocked:!1},{id:"jupyter",name:"学习 Jupyter Notebook",description:"交互式数据分析与计算工具。",icon:"📓",category:"tool",difficulty:2,unlocked:!1},{id:"pillow",name:"学习 Pillow",description:"Python 图像处理库。",icon:"🖼️",category:"tool",difficulty:2,unlocked:!1},{id:"quant",name:"量化交易",description:"利用程序化策略进行金融交易。",icon:"💹",category:"finance",difficulty:4,unlocked:!1},{id:"r",name:"学习 R",description:"用于统计分析与数据科学的编程语言。",icon:"📐",category:"language",difficulty:3,unlocked:!1},{id:"julia",name:"学习 Julia",description:"面向科学计算的高性能语言。",icon:"🔬",category:"language",difficulty:4,unlocked:!1}],Lg={language:"编程语言",web:"Web 框架",data:"数据科学",tool:"工具",finance:"金融"},Ml={language:"#10b981",web:"#3b82f6",data:"#8b5cf6",tool:"#f59e0b",finance:"#ef4444"};function Rg(){const{id:e}=Nh(),t=al(),[n,s]=w.useState("learn"),[r,l]=w.useState(null),{isLoading:a,error:o,retryLoad:u}=mp(),{progress:c,isChallengeCompleted:g,isLevelUnlocked:m,completeLesson:h,completeChallenge:x,getLevelProgress:_}=Bn(),v=parseInt(e||"4"),y=Xt.find(P=>P.id===v)||Xt[3],p=m(v),d=_(v),f=gp[v]||[],j=Ba[v]||[],N=j.filter(P=>g(v,P.id)).length,E=P=>Array(5).fill(0).map((M,T)=>i.jsx("span",{className:`star ${T<P?"filled":""}`,children:"★"},T)),R=()=>{h(v,1)},b=(P,M)=>{x(v,P,M),l(null)};return p?i.jsxs("div",{className:"level-detail-page",children:[o&&i.jsxs("div",{className:"pyodide-error",children:[i.jsx("span",{className:"error-icon",children:"⚠️"}),i.jsx("span",{children:"Python运行环境加载失败，代码执行功能暂不可用"}),i.jsx("button",{className:"retry-btn",onClick:u,children:"重试"})]}),a&&!o&&i.jsxs("div",{className:"pyodide-loading-banner",children:[i.jsx("div",{className:"loading-spinner-small"}),i.jsx("span",{children:"正在加载Python运行环境..."})]}),i.jsxs("div",{className:"container detail-container",children:[i.jsxs("button",{className:"back-btn",onClick:()=>t("/map"),children:[i.jsx("span",{children:"←"})," 返回地图"]}),i.jsxs("div",{className:"level-header",children:[i.jsxs("div",{className:"level-info",children:[i.jsxs("div",{className:"level-badge",children:[i.jsx("span",{className:"badge-icon",children:"🐍"}),i.jsxs("span",{children:["Python 进阶 · 第 ",y.id," 关"]})]}),i.jsx("h1",{className:"level-title",children:y.title}),i.jsx("p",{className:"level-desc",children:y.description}),i.jsxs("div",{className:"level-meta",children:[i.jsxs("div",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"📚"}),i.jsxs("span",{children:[f.length," 个学习步骤"]})]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"⚡"}),i.jsxs("span",{children:[j.length," 个挑战"]})]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"⏱"}),i.jsx("span",{children:y.duration})]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"⭐"}),i.jsxs("span",{children:["难度 ",E(y.difficulty)]})]})]}),i.jsxs("div",{className:"level-progress",children:[i.jsxs("div",{className:"progress-info",children:[i.jsx("span",{children:"本关进度"}),i.jsxs("span",{className:"progress-text",children:[d.completed,"/",d.total," 完成 · ",d.percent,"%"]})]}),i.jsx("div",{className:"progress-bar",children:i.jsx("div",{className:"progress-fill",style:{width:`${d.percent}%`}})})]})]}),i.jsxs("div",{className:"level-actions",children:[i.jsx("button",{className:"btn btn-primary btn-lg continue-btn",onClick:()=>s("learn"),children:"▶ 开始学习"}),i.jsxs("div",{className:"xp-display",children:[i.jsx("span",{className:"xp-icon",children:"⭐"}),i.jsxs("span",{className:"xp-value",children:[c.xp," XP"]})]})]})]}),i.jsxs("div",{className:"topics-section",children:[i.jsx("h3",{className:"section-title-sm",children:"📋 本关知识点"}),i.jsx("div",{className:"topics-tags",children:y.topics.map((P,M)=>i.jsx("span",{className:"topic-chip",children:P},M))})]}),i.jsxs("div",{className:"runoob-section",children:[i.jsxs("div",{className:"runoob-header",children:[i.jsxs("h3",{className:"section-title-sm",children:[i.jsx("span",{className:"runoob-logo",children:"📚"}),"Python / 数据科学 · 拓展学习路径"]}),i.jsx("span",{className:"runoob-source",children:"风格借鉴自菜鸟教程"})]}),i.jsx("p",{className:"runoob-intro",children:"完成当前关卡后，可以挑战更多 Python 生态方向。本页展示的扩展主题按难度递进，建议先打通主线关卡再探索。"}),i.jsx("div",{className:"runoob-grid",children:bg.map(P=>i.jsxs("div",{className:`runoob-card ${P.unlocked?"unlocked":"locked"}`,style:{"--topic-color":Ml[P.category]},children:[i.jsx("div",{className:"runoob-card-icon",children:i.jsx("span",{className:"runoob-icon-emoji",children:P.icon})}),i.jsxs("div",{className:"runoob-card-body",children:[i.jsxs("div",{className:"runoob-card-header",children:[i.jsxs("h4",{className:"runoob-card-title",children:["【",P.name.replace("学习 ",""),"】"]}),i.jsx("span",{className:"runoob-card-category",style:{background:Ml[P.category]+"22",color:Ml[P.category]},children:Lg[P.category]})]}),i.jsx("p",{className:"runoob-card-desc",children:P.description}),i.jsxs("div",{className:"runoob-card-footer",children:[i.jsx("span",{className:"runoob-difficulty",children:Array(5).fill(0).map((M,T)=>i.jsx("span",{className:`runoob-dot ${T<P.difficulty?"filled":""}`,children:"●"},T))}),!P.unlocked&&i.jsx("span",{className:"runoob-lock-badge",children:"🔒 待解锁"}),P.unlocked&&i.jsx("span",{className:"runoob-go-badge",children:"进入学习 →"})]})]})]},P.id))})]}),i.jsxs("div",{className:"content-tabs",children:[i.jsxs("button",{className:`tab-btn ${n==="learn"?"active":""}`,onClick:()=>{s("learn"),l(null)},children:["📖 互动学习",i.jsx("span",{className:"tab-count",children:f.length})]}),i.jsxs("button",{className:`tab-btn ${n==="challenges"?"active":""}`,onClick:()=>{s("challenges"),l(null)},children:["⚡ 编程挑战",i.jsxs("span",{className:"tab-count",children:[N,"/",j.length]})]}),i.jsx("button",{className:`tab-btn ${n==="notes"?"active":""}`,onClick:()=>{s("notes"),l(null)},children:"📝 学习笔记"})]}),i.jsxs("div",{className:"tab-content",children:[n==="learn"&&i.jsx("div",{className:"learn-tab-content",children:f.length>0?i.jsx(Pg,{title:y.title,steps:f,onComplete:R}):i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"暂无学习内容"})})}),n==="challenges"&&i.jsx("div",{className:"challenges-tab-content",children:r?i.jsxs("div",{children:[i.jsx("button",{className:"back-to-challenges",onClick:()=>l(null),children:"← 返回挑战列表"}),(()=>{const P=j.find(M=>M.id===r);return P?i.jsx(Eg,{title:P.title,description:P.description,difficulty:P.difficulty,initialCode:P.initialCode,testCode:P.testCode,testCases:P.testCases,xpReward:P.xpReward,onComplete:()=>b(P.id,P.xpReward)}):null})()]}):i.jsxs("div",{className:"challenges-list",children:[i.jsxs("div",{className:"challenges-header",children:[i.jsx("h3",{children:"编程挑战"}),i.jsx("p",{children:"完成以下挑战来巩固所学知识，获得经验值奖励"})]}),i.jsx("div",{className:"challenges-grid",children:j.map((P,M)=>{const T=g(v,P.id);return i.jsxs("div",{className:`challenge-card ${T?"completed":""}`,onClick:()=>l(P.id),children:[i.jsxs("div",{className:"challenge-card-header",children:[i.jsxs("span",{className:"challenge-number",children:["挑战 ",M+1]}),i.jsxs("span",{className:`challenge-diff diff-${P.difficulty}`,children:[P.difficulty==="easy"&&"🟢 简单",P.difficulty==="medium"&&"🟡 中等",P.difficulty==="hard"&&"🔴 困难"]})]}),i.jsx("h4",{className:"challenge-card-title",children:P.title}),i.jsxs("p",{className:"challenge-card-desc",children:[P.description.substring(0,80),"..."]}),i.jsxs("div",{className:"challenge-card-footer",children:[i.jsxs("span",{className:"xp-reward-badge",children:["⭐ +",P.xpReward," XP"]}),T&&i.jsx("span",{className:"completed-check",children:"✓ 已完成"})]})]},P.id)})})]})}),n==="notes"&&i.jsx("div",{className:"notes-content",children:i.jsxs("div",{className:"notes-placeholder",children:[i.jsx("div",{className:"notes-icon",children:"📝"}),i.jsx("h3",{children:"学习笔记"}),i.jsx("p",{children:"记录你的学习心得和重要知识点"}),i.jsx("textarea",{className:"notes-textarea",placeholder:"在这里记录你的笔记...",rows:10}),i.jsx("button",{className:"btn btn-primary",children:"保存笔记"})]})})]})]})]}):i.jsx("div",{className:"level-detail-page",children:i.jsxs("div",{className:"container detail-container",children:[i.jsxs("button",{className:"back-btn",onClick:()=>t("/map"),children:[i.jsx("span",{children:"←"})," 返回地图"]}),i.jsxs("div",{className:"locked-page",children:[i.jsx("div",{className:"lock-icon-big",children:"🔒"}),i.jsx("h2",{children:"关卡未解锁"}),i.jsx("p",{children:"完成前一关的所有课程和挑战后即可解锁此关卡"}),i.jsx("button",{className:"btn btn-primary",onClick:()=>t("/map"),children:"返回地图"})]})]})})}function Tg(e){const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return"刚刚";if(n<60)return`${n}分钟前`;const s=Math.floor(n/60);if(s<24)return`${s}小时前`;const r=Math.floor(s/24);return r<7?`${r}天前`:new Date(e).toLocaleDateString("zh-CN")}function Og(){const e=al(),{progress:t,stats:n,getLevelProgress:s,getOverallProgress:r,getRecentActivities:l}=Bn(),a=r(),o=l(20),u=Array.from({length:7}).map((y,p)=>{const d=new Date;return d.setDate(d.getDate()-(6-p)),d.toISOString().slice(0,10)}),c=Xt.map(y=>{var j,N;const p=s(y.id),d=((j=gp[y.id])==null?void 0:j.length)||0,f=((N=Ba[y.id])==null?void 0:N.length)||0;return{...y,...p,lessonCount:d,challengeCount:f,total:d+f}}),g=500,m=Math.floor(t.totalXP/g)+1,h=t.totalXP%g,x=Math.round(h/g*100),_=["编程小白","初学者","进阶学徒","熟练开发者","资深工程师","Python 大师","传奇程序员"],v=_[Math.min(m-1,_.length-1)];return i.jsxs("div",{className:"learning-path-page",children:[i.jsxs("div",{className:"path-decoration",children:[i.jsx("div",{className:"deco-circle deco-1"}),i.jsx("div",{className:"deco-circle deco-2"})]}),i.jsxs("div",{className:"container path-container",children:[i.jsx("div",{className:"path-header",children:i.jsxs("div",{className:"header-info",children:[i.jsxs("div",{className:"badge",children:[i.jsx("span",{className:"badge-icon",children:"📈"}),i.jsx("span",{children:"学习路径"})]}),i.jsx("h1",{className:"page-title",children:"我的学习进度"}),i.jsx("p",{className:"page-subtitle",children:"追踪每一次成长，赢取每一个徽章"})]})}),i.jsxs("div",{className:"user-level-card",children:[i.jsxs("div",{className:"user-avatar-lg",children:[i.jsx("span",{children:"LY"}),i.jsx("div",{className:"avatar-ring"})]}),i.jsxs("div",{className:"user-info-block",children:[i.jsxs("div",{className:"user-title-row",children:[i.jsx("h2",{className:"user-name",children:"冒险者 LY"}),i.jsxs("span",{className:"user-level-badge",children:["Lv.",m," ",v]})]}),i.jsxs("div",{className:"level-progress-block",children:[i.jsxs("div",{className:"level-progress-info",children:[i.jsxs("span",{children:[h," / ",g," XP"]}),i.jsxs("span",{children:["距下一级还需 ",g-h," XP"]})]}),i.jsx("div",{className:"level-progress-bar",children:i.jsx("div",{className:"level-progress-fill",style:{width:`${x}%`}})})]}),i.jsxs("div",{className:"user-tags",children:[i.jsx("span",{className:"user-tag",children:"⚡ 速度学习者"}),i.jsx("span",{className:"user-tag",children:"🎯 挑战爱好者"})]})]})]}),i.jsxs("div",{className:"overview-grid",children:[i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(245, 158, 11, 0.15)",color:"#f59e0b"},children:"⭐"}),i.jsxs("div",{className:"ov-info",children:[i.jsx("div",{className:"ov-value",children:t.totalXP}),i.jsx("div",{className:"ov-label",children:"累计经验值"}),i.jsxs("div",{className:"ov-hint",children:["+",t.xp," 可用"]})]})]}),i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(239, 68, 68, 0.15)",color:"#ef4444"},children:"🔥"}),i.jsxs("div",{className:"ov-info",children:[i.jsxs("div",{className:"ov-value",children:[t.streak," 天"]}),i.jsx("div",{className:"ov-label",children:"连续学习"}),i.jsx("div",{className:"ov-hint",children:"保持节奏"})]})]}),i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(59, 130, 246, 0.15)",color:"#3b82f6"},children:"📚"}),i.jsxs("div",{className:"ov-info",children:[i.jsx("div",{className:"ov-value",children:n.completedLessons}),i.jsx("div",{className:"ov-label",children:"完成学习"}),i.jsx("div",{className:"ov-hint",children:"课时统计"})]})]}),i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(168, 85, 247, 0.15)",color:"#a855f7"},children:"⚔️"}),i.jsxs("div",{className:"ov-info",children:[i.jsx("div",{className:"ov-value",children:n.completedChallenges}),i.jsx("div",{className:"ov-label",children:"完成挑战"}),i.jsx("div",{className:"ov-hint",children:"挑战统计"})]})]}),i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(16, 185, 129, 0.15)",color:"#10b981"},children:"🚪"}),i.jsxs("div",{className:"ov-info",children:[i.jsxs("div",{className:"ov-value",children:[n.completedLevels," / ",n.totalLevels]}),i.jsx("div",{className:"ov-label",children:"通关进度"}),i.jsxs("div",{className:"ov-hint",children:[a.percent,"% 完成"]})]})]}),i.jsxs("div",{className:"overview-card",children:[i.jsx("div",{className:"ov-icon",style:{background:"rgba(245, 158, 11, 0.15)",color:"#f59e0b"},children:"🏆"}),i.jsxs("div",{className:"ov-info",children:[i.jsx("div",{className:"ov-value",children:t.unlockedAchievements.length}),i.jsx("div",{className:"ov-label",children:"解锁成就"}),i.jsx("div",{className:"ov-hint",children:"查看全部 →"})]})]})]}),i.jsxs("div",{className:"path-main",children:[i.jsxs("div",{className:"path-card calendar-card",children:[i.jsx("h3",{className:"card-title",children:"📅 最近 7 天学习"}),i.jsx("div",{className:"calendar-week",children:u.map(y=>{var j;const p=(j=t.studyDays)==null?void 0:j.includes(y),d=y===new Date().toISOString().slice(0,10),f=new Date(y).toLocaleDateString("zh-CN",{weekday:"short"});return i.jsxs("div",{className:`cal-day ${p?"studied":""} ${d?"today":""}`,title:y,children:[i.jsx("div",{className:"cal-day-label",children:f}),i.jsx("div",{className:"cal-day-cell",children:p&&i.jsx("span",{className:"cal-check",children:"✓"})})]},y)})}),i.jsx("div",{className:"calendar-foot",children:i.jsxs("span",{children:["已连续学习 ",i.jsx("strong",{children:t.streak})," 天"]})})]}),i.jsxs("div",{className:"path-card levels-card",children:[i.jsx("h3",{className:"card-title",children:"🗺️ 学习路径"}),i.jsx("div",{className:"levels-progress",children:c.map((y,p)=>{const d=p===c.length-1;return i.jsxs("div",{className:`path-level ${y.completed?"completed":""} ${y.unlocked?"unlocked":"locked"}`,onClick:()=>y.unlocked&&e(`/level/${y.id}`),children:[i.jsx("div",{className:"pl-node",children:y.completed?i.jsx("span",{children:"✓"}):i.jsx("span",{children:y.id})}),i.jsxs("div",{className:"pl-content",children:[i.jsx("div",{className:"pl-title",children:y.subtitle}),i.jsxs("div",{className:"pl-meta",children:[i.jsxs("span",{children:[y.completed,"/",y.total]}),i.jsxs("span",{children:[y.percent,"%"]})]}),i.jsx("div",{className:"pl-bar",children:i.jsx("div",{className:"pl-fill",style:{width:`${y.percent}%`}})})]}),!d&&i.jsx("div",{className:`pl-line ${y.completed?"completed":""}`})]},y.id)})})]}),i.jsxs("div",{className:"path-card activity-card",children:[i.jsx("h3",{className:"card-title",children:"🕐 最近活动"}),o.length>0?i.jsx("div",{className:"activity-list",children:o.map(y=>i.jsxs("div",{className:"activity-item",children:[i.jsx("div",{className:"act-icon",children:y.icon}),i.jsxs("div",{className:"act-body",children:[i.jsx("div",{className:"act-title",children:y.title}),i.jsx("div",{className:"act-desc",children:y.description})]}),i.jsxs("div",{className:"act-meta",children:[y.xp&&i.jsxs("span",{className:"act-xp",children:["+",y.xp," XP"]}),i.jsx("span",{className:"act-time",children:Tg(y.timestamp)})]})]},y.id))}):i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"还没有活动记录，开始学习吧 🚀"})})]})]})]})]})}function Ig(){var x,_;const{progress:e,stats:t,isAchievementUnlocked:n,isAchievementClaimed:s,claimAchievement:r}=Bn(),[l,a]=w.useState("all"),o=e.unlockedAchievements.length,u=Ht.length,c=Math.round(o/u*100),g=w.useMemo(()=>l==="all"?Ht:Ht.filter(v=>v.category===l),[l]),m=Ht.filter(v=>n(v.id)),h=Ht.filter(v=>!n(v.id));return i.jsxs("div",{className:"achievements-page",children:[i.jsxs("div",{className:"achievements-decoration",children:[i.jsx("div",{className:"deco-circle deco-1"}),i.jsx("div",{className:"deco-circle deco-2"}),i.jsx("div",{className:"deco-circle deco-3"})]}),i.jsxs("div",{className:"container achievements-container",children:[i.jsxs("div",{className:"achievements-header",children:[i.jsxs("div",{className:"header-info",children:[i.jsxs("div",{className:"badge",children:[i.jsx("span",{className:"badge-icon",children:"🏆"}),i.jsx("span",{children:"成就系统"})]}),i.jsx("h1",{className:"page-title",children:"成就殿堂"}),i.jsx("p",{className:"page-subtitle",children:"解锁成就，赢得荣耀徽章，赢取经验值奖励"})]}),i.jsxs("div",{className:"header-stats",children:[i.jsxs("div",{className:"h-stat-card",children:[i.jsx("div",{className:"h-stat-icon",children:"🎖️"}),i.jsxs("div",{className:"h-stat-info",children:[i.jsxs("div",{className:"h-stat-value",children:[o," / ",u]}),i.jsx("div",{className:"h-stat-label",children:"已解锁成就"})]})]}),i.jsxs("div",{className:"h-stat-card",children:[i.jsx("div",{className:"h-stat-icon",children:"⭐"}),i.jsxs("div",{className:"h-stat-info",children:[i.jsx("div",{className:"h-stat-value",children:e.totalXP}),i.jsx("div",{className:"h-stat-label",children:"累计 XP"})]})]}),i.jsxs("div",{className:"h-stat-card",children:[i.jsx("div",{className:"h-stat-icon",children:"🔥"}),i.jsxs("div",{className:"h-stat-info",children:[i.jsxs("div",{className:"h-stat-value",children:[e.streak," 天"]}),i.jsx("div",{className:"h-stat-label",children:"连续学习"})]})]})]})]}),i.jsxs("div",{className:"overall-progress-card",children:[i.jsxs("div",{className:"overall-info",children:[i.jsx("span",{className:"overall-label",children:"成就解锁进度"}),i.jsxs("span",{className:"overall-percent",children:[c,"%"]})]}),i.jsx("div",{className:"overall-bar",children:i.jsx("div",{className:"overall-fill",style:{width:`${c}%`}})})]}),i.jsx("div",{className:"category-tabs",children:zl.map(v=>i.jsxs("button",{className:`cat-tab ${l===v.id?"active":""}`,onClick:()=>a(v.id),children:[i.jsx("span",{className:"cat-icon",children:v.icon}),i.jsx("span",{children:v.label})]},v.id))}),m.length>0&&l==="all"&&i.jsxs("div",{className:"achievements-section",children:[i.jsxs("h2",{className:"section-title",children:["✨ 已解锁 (",m.length,")"]}),i.jsx("div",{className:"achievements-grid",children:m.map(v=>{const y=s(v.id),p=fu[v.rarity],d=v.progress?v.progress(t):null;return i.jsxs("div",{className:`achievement-card unlocked rarity-${v.rarity} ${y?"claimed":""}`,style:{borderColor:p.color,background:p.bg},children:[i.jsx("div",{className:"ach-glow",style:{background:p.color}}),i.jsx("div",{className:"ach-icon",style:{color:p.color},children:v.icon}),i.jsxs("div",{className:"ach-content",children:[i.jsxs("div",{className:"ach-header",children:[i.jsx("h3",{className:"ach-title",children:v.title}),i.jsx("span",{className:"ach-rarity",style:{background:p.color},children:p.label})]}),i.jsx("p",{className:"ach-desc",children:v.description}),d&&d.total>1&&i.jsxs("div",{className:"ach-progress",children:[i.jsx("div",{className:"ach-progress-bar",children:i.jsx("div",{className:"ach-progress-fill",style:{width:`${d.current/d.total*100}%`,background:p.color}})}),i.jsxs("span",{className:"ach-progress-text",children:[d.current," / ",d.total]})]}),i.jsxs("div",{className:"ach-footer",children:[i.jsxs("span",{className:"ach-xp",children:["+",v.xpReward," XP"]}),y?i.jsx("span",{className:"ach-claimed",children:"✓ 已领取"}):i.jsx("button",{className:"ach-claim-btn",style:{background:p.color},onClick:()=>r(v.id),children:"领取奖励"})]})]})]},v.id)})})]}),i.jsxs("div",{className:"achievements-section",children:[i.jsx("h2",{className:"section-title",children:l==="all"?"🔒 待解锁":`${(x=zl.find(v=>v.id===l))==null?void 0:x.icon} ${(_=zl.find(v=>v.id===l))==null?void 0:_.label}类成就`}),i.jsx("div",{className:"achievements-grid",children:(l==="all"?h:g).map(v=>{const y=fu[v.rarity],p=v.progress?v.progress(t):null;return i.jsxs("div",{className:`achievement-card locked rarity-${v.rarity}`,style:{borderColor:y.color,background:y.bg},children:[i.jsx("div",{className:"ach-icon",style:{color:y.color,filter:"grayscale(50%) opacity(0.6)"},children:v.icon}),i.jsxs("div",{className:"ach-content",children:[i.jsxs("div",{className:"ach-header",children:[i.jsx("h3",{className:"ach-title",children:v.title}),i.jsx("span",{className:"ach-rarity",style:{background:y.color},children:y.label})]}),i.jsx("p",{className:"ach-desc",children:v.description}),p&&i.jsxs("div",{className:"ach-progress",children:[i.jsx("div",{className:"ach-progress-bar",children:i.jsx("div",{className:"ach-progress-fill",style:{width:`${p.current/p.total*100}%`,background:y.color}})}),i.jsxs("span",{className:"ach-progress-text",children:[p.current," / ",p.total]})]}),i.jsxs("div",{className:"ach-footer",children:[i.jsxs("span",{className:"ach-xp",children:["+",v.xpReward," XP"]}),i.jsx("span",{className:"ach-locked-label",children:"🔒 未解锁"})]})]})]},v.id)})}),g.length===0&&i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"该分类暂无成就"})})]})]})]})}function Ag(){const{progress:e,stats:t}=Bn(),[n,s]=w.useState("xp"),[r,l]=w.useState("all"),a={rank:0,name:"我 (LY)",avatar:"LY",xp:e.totalXP,streak:e.streak,levels:t.completedLevels,color:"#10b981",isMe:!0},o=w.useMemo(()=>{const _=[..._g];return _.sort((v,y)=>y[n]-v[n]),_},[n]),u=o.findIndex(_=>_[n]>e.totalXP)+1;a.rank=u>0?u:o.length+1;const c=w.useMemo(()=>[...o,a].sort((v,y)=>y[n]-v[n]).map((v,y)=>({...v,rank:y+1})),[o,n,e.totalXP]),g=c.slice(0,3),m=c.slice(3),h=c.find(_=>_.isMe),x={xp:"经验值 XP",streak:"连续天数",levels:"通关数"};return i.jsxs("div",{className:"leaderboard-page",children:[i.jsxs("div",{className:"lb-decoration",children:[i.jsx("div",{className:"deco-circle deco-1"}),i.jsx("div",{className:"deco-circle deco-2"})]}),i.jsxs("div",{className:"container lb-container",children:[i.jsxs("div",{className:"lb-header",children:[i.jsxs("div",{className:"badge",children:[i.jsx("span",{className:"badge-icon",children:"🏅"}),i.jsx("span",{children:"排行榜"})]}),i.jsx("h1",{className:"page-title",children:"学习风云榜"}),i.jsx("p",{className:"page-subtitle",children:"看看你在 Python Quest 社区中的位置"})]}),i.jsxs("div",{className:"lb-stats-row",children:[i.jsxs("div",{className:"lb-stat",children:[i.jsx("span",{className:"lb-stat-label",children:"我的排名"}),i.jsxs("span",{className:"lb-stat-value",children:["#",h.rank]})]}),i.jsxs("div",{className:"lb-stat",children:[i.jsx("span",{className:"lb-stat-label",children:"我的经验"}),i.jsx("span",{className:"lb-stat-value",children:e.totalXP})]}),i.jsxs("div",{className:"lb-stat",children:[i.jsx("span",{className:"lb-stat-label",children:"我的连续"}),i.jsxs("span",{className:"lb-stat-value",children:[e.streak," 天"]})]}),i.jsxs("div",{className:"lb-stat",children:[i.jsx("span",{className:"lb-stat-label",children:"通关数"}),i.jsx("span",{className:"lb-stat-value",children:t.completedLevels})]})]}),i.jsxs("div",{className:"lb-filters",children:[i.jsxs("div",{className:"filter-group",children:[i.jsx("span",{className:"filter-label",children:"时间:"}),[{v:"all",l:"总榜"},{v:"month",l:"本月"},{v:"week",l:"本周"}].map(_=>i.jsx("button",{className:`filter-btn ${r===_.v?"active":""}`,onClick:()=>l(_.v),children:_.l},_.v))]}),i.jsxs("div",{className:"filter-group",children:[i.jsx("span",{className:"filter-label",children:"排序:"}),Object.keys(x).map(_=>i.jsx("button",{className:`filter-btn ${n===_?"active":""}`,onClick:()=>s(_),children:x[_]},_))]})]}),i.jsx("div",{className:"podium",children:g.map((_,v)=>{const p=[1,0,2].indexOf(v),d=[180,220,150][p],f=["#fbbf24","#94a3b8","#f97316"];return i.jsxs("div",{className:`podium-item rank-${_.rank}`,style:{order:p+1},children:[i.jsxs("div",{className:"podium-avatar",style:{background:_.color},children:[i.jsx("span",{children:_.avatar}),_.isMe&&i.jsx("span",{className:"me-flag",children:"我"})]}),i.jsx("div",{className:"podium-name",children:_.name}),i.jsxs("div",{className:"podium-stats",children:[i.jsxs("span",{children:["⭐ ",_.xp]}),i.jsxs("span",{children:["🔥 ",_.streak]})]}),i.jsxs("div",{className:"podium-rank",style:{background:f[v]},children:[i.jsx("span",{className:"rank-medal",children:_.rank===1?"🥇":_.rank===2?"🥈":"🥉"}),i.jsxs("span",{children:["#",_.rank]})]}),i.jsx("div",{className:"podium-stand",style:{height:`${d}px`,background:f[v]},children:i.jsx("span",{className:"stand-text",children:_.rank===1?"冠军":_.rank===2?"亚军":"季军"})})]},_.rank)})}),i.jsxs("div",{className:"lb-list",children:[i.jsxs("div",{className:"lb-list-header",children:[i.jsx("span",{children:"排名"}),i.jsx("span",{children:"玩家"}),i.jsx("span",{children:"经验"}),i.jsx("span",{children:"连续"}),i.jsx("span",{children:"通关"})]}),m.map(_=>i.jsxs("div",{className:`lb-list-row ${_.isMe?"is-me":""}`,children:[i.jsxs("span",{className:"lb-rank",children:["#",_.rank]}),i.jsxs("div",{className:"lb-player",children:[i.jsx("div",{className:"lb-avatar",style:{background:_.color},children:i.jsx("span",{children:_.avatar})}),i.jsx("span",{className:"lb-name",children:_.name})]}),i.jsxs("span",{className:"lb-xp",children:["⭐ ",_.xp]}),i.jsxs("span",{className:"lb-streak",children:["🔥 ",_.streak]}),i.jsxs("span",{className:"lb-levels",children:["🚪 ",_.levels]})]},_.rank)),h.rank>3&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"lb-divider",children:"... 你的位置 ..."}),i.jsxs("div",{className:"lb-list-row is-me",children:[i.jsxs("span",{className:"lb-rank",children:["#",h.rank]}),i.jsxs("div",{className:"lb-player",children:[i.jsx("div",{className:"lb-avatar",style:{background:h.color},children:i.jsx("span",{children:h.avatar})}),i.jsx("span",{className:"lb-name",children:h.name})]}),i.jsxs("span",{className:"lb-xp",children:["⭐ ",h.xp]}),i.jsxs("span",{className:"lb-streak",children:["🔥 ",h.streak]}),i.jsxs("span",{className:"lb-levels",children:["🚪 ",h.levels]})]})]})]})]})]})}function Fg(){return i.jsxs("div",{className:"app",children:[i.jsx(jg,{}),i.jsx("main",{className:"main-content",children:i.jsxs($h,{children:[i.jsx(Bt,{path:"/",element:i.jsx(Ng,{})}),i.jsx(Bt,{path:"/map",element:i.jsx(Sg,{})}),i.jsx(Bt,{path:"/level/:id",element:i.jsx(Rg,{})}),i.jsx(Bt,{path:"/path",element:i.jsx(Og,{})}),i.jsx(Bt,{path:"/achievements",element:i.jsx(Ig,{})}),i.jsx(Bt,{path:"/leaderboard",element:i.jsx(Ag,{})})]})}),i.jsx(kg,{})]})}$l.createRoot(document.getElementById("root")).render(i.jsx(Pu.StrictMode,{children:i.jsx(rg,{children:i.jsx(xg,{children:i.jsx(vg,{children:i.jsx(Xh,{children:i.jsx(Fg,{})})})})})}))});export default zg();
