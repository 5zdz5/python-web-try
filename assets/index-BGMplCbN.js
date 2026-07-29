var ct=Object.defineProperty;var ut=(t,s,r)=>s in t?ct(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r;var Le=(t,s,r)=>ut(t,typeof s!="symbol"?s+"":s,r);import{r as o,a as mt,u as ft,L as G,b as Te,c as ht,R as gt,d as Q,e as _t,H as yt}from"./react-vendor-CDhdc4Dt.js";import{$ as xt}from"./pyodide-C5f6T6KV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const _ of l.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&n(_)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();var $e={exports:{}},ge={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bt=o,vt=Symbol.for("react.element"),jt=Symbol.for("react.fragment"),wt=Object.prototype.hasOwnProperty,Nt=bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kt={key:!0,ref:!0,__self:!0,__source:!0};function Ve(t,s,r){var n,i={},l=null,_=null;r!==void 0&&(l=""+r),s.key!==void 0&&(l=""+s.key),s.ref!==void 0&&(_=s.ref);for(n in s)wt.call(s,n)&&!kt.hasOwnProperty(n)&&(i[n]=s[n]);if(t&&t.defaultProps)for(n in s=t.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:vt,type:t,key:l,ref:_,props:i,_owner:Nt.current}}ge.Fragment=jt;ge.jsx=Ve;ge.jsxs=Ve;$e.exports=ge;var e=$e.exports,Ce={},De=mt;Ce.createRoot=De.createRoot,Ce.hydrateRoot=De.hydrateRoot;const fe="python-quest-progress.json",Ct="Python Quest 学习进度备份",Pt=15e3,Fe=2,St=2e3,Ee="python-quest-github-token",Re="python-quest-github-user",he="python-quest-gist-id";function At(){try{const t=localStorage.getItem(Ee),s=localStorage.getItem(Re),r=localStorage.getItem(he);return!t||!s?null:{token:t,user:JSON.parse(s),gistId:r}}catch{return null}}function Tt(t){localStorage.setItem(Ee,t.token),localStorage.setItem(Re,JSON.stringify(t.user)),t.gistId?localStorage.setItem(he,t.gistId):localStorage.removeItem(he)}function Me(){localStorage.removeItem(Ee),localStorage.removeItem(Re),localStorage.removeItem(he)}class Pe extends Error{constructor(r,n=0){super(r);Le(this,"status");this.status=n}}function Ke(t){if(t instanceof Pe)return t.status===0;if(t instanceof TypeError)return!0;const s=t instanceof Error?t.message:String(t);return s.includes("Failed to fetch")||s.includes("NetworkError")||s.includes("AbortError")||s.includes("timeout")}async function ae(t,s,r={}){const n=new AbortController,i=setTimeout(()=>n.abort(),Pt);try{const l=await fetch(t,{...r,signal:n.signal,headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${s}`,"X-GitHub-Api-Version":"2022-11-28",...r.headers||{}}});if(!l.ok){const _=await l.text();throw new Pe(`GitHub API ${l.status}: ${_}`,l.status)}return l.json()}catch(l){throw l instanceof DOMException&&l.name==="AbortError"?new Pe("请求超时（网络不稳定）",0):l}finally{clearTimeout(i)}}async function ie(t,s){let r;for(let n=0;n<=Fe;n++)try{return await t()}catch(i){if(r=i,n<Fe&&Ke(i)){const l=St*Math.pow(2,n);console.warn(`${s} 第 ${n+1} 次失败，${l}ms 后重试...`),await new Promise(_=>setTimeout(_,l))}else break}throw r}async function Et(t){return ie(()=>ae("https://api.github.com/user",t),"验证Token")}async function Rt(t){try{const n=(await ie(()=>ae("https://api.github.com/gists?per_page=100",t),"查询Gist")).find(i=>i.files&&i.files[fe]);if(n)return n.id}catch(r){if(!Ke(r))throw r}return(await ie(()=>ae("https://api.github.com/gists",t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:Ct,public:!1,files:{[fe]:{content:JSON.stringify({initialized:!0,savedAt:new Date().toISOString()})}}})}),"创建Gist")).id}async function Ot(t,s){var r;try{const i=(r=(await ie(()=>ae(`https://api.github.com/gists/${s}`,t),"读取Gist")).files)==null?void 0:r[fe];return i?JSON.parse(i.content):null}catch(n){return console.warn("读取 Gist 失败",n),null}}async function Be(t,s,r){await ie(()=>ae(`https://api.github.com/gists/${s}`,t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:{[fe]:{content:JSON.stringify(r,null,2)}}})}),"写入Gist")}async function It(t){try{return await ie(()=>ae("https://api.github.com/gists?per_page=1",t),"测试Gist访问"),!0}catch{return!1}}const Xe=o.createContext(void 0);function Lt({children:t}){const[s,r]=o.useState(null),[n,i]=o.useState(!0),[l,_]=o.useState(!1),[C,d]=o.useState("");o.useEffect(()=>{const A=At();A?(r(A),It(A.token).then(v=>{v||(Me(),r(null))}).catch(()=>{}).finally(()=>i(!1))):i(!1)},[]);const k=async A=>{_(!0),d("");try{const v=A.trim();if(!v)return d("请输入 Token"),!1;const m=await Et(v),h=await Rt(v),p={token:v,user:m,gistId:h};return Tt(p),r(p),!0}catch(v){console.error("登录失败",v);const m=(v==null?void 0:v.message)||"";return m.includes("401")?d("Token 无效或已过期，请重新生成"):m.includes("403")?d("Token 权限不足，请勾选 Gist 权限"):m.includes("network")||v instanceof TypeError?d("网络错误，请检查是否能访问 github.com"):d("登录失败："+(m||"未知错误")),!1}finally{_(!1)}},b=()=>{Me(),r(null),d("")};return e.jsx(Xe.Provider,{value:{auth:s,isLoading:n,isLoggingIn:l,loginError:C,signInWithToken:k,signOutUser:b},children:t})}function Oe(){const t=o.useContext(Xe);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t}const We=o.createContext(void 0),Dt={pyodide:null,isLoading:!1,error:null,runCode:async()=>({output:"",error:"Python 环境未初始化"}),runCodeWithTests:async()=>({output:"",error:"Python 环境未初始化",passed:!1,testResults:[]}),retryLoad:()=>{}};function Ft({children:t}){const[s,r]=o.useState(null),[n,i]=o.useState(!1),[l,_]=o.useState(null),C=o.useRef(!1),d=o.useCallback(async()=>{if(!C.current){C.current=!0,i(!0),_(null);try{await new Promise(m=>setTimeout(m,100));const v=await xt({indexURL:"/python-web-try/pyodide/",checkAPIVersion:!1});await v.runPythonAsync(`
import sys
import io
import traceback
`),r(v)}catch(v){console.warn("Pyodide load failed (non-fatal):",v),_(v instanceof Error?v.message:"加载Python运行环境失败"),C.current=!1}finally{i(!1)}}},[]);o.useEffect(()=>{const v=setTimeout(()=>{d().catch(()=>{})},500);return()=>clearTimeout(v)},[d]);const k=o.useCallback(()=>{C.current=!1,r(null),_(null),d().catch(()=>{})},[d]),b=o.useCallback(async v=>{if(!s)return{output:"",error:"Python 环境尚未就绪，请稍后再试"};try{s.runPython(`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
`),await s.runPythonAsync(v);const m=s.runPython("_output_buffer.getvalue()");return s.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`),{output:m||"代码执行完成，无输出",error:null}}catch(m){let h="";try{const p=s.runPython("_output_buffer.getvalue()");p&&(h=p+`
`)}catch{}m.message?h+=m.message:typeof m=="string"?h+=m:h+="未知错误";try{s.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)}catch{}return{output:"",error:h}}},[s]),A=o.useCallback(async(v,m)=>{if(!s)return{output:"",error:"Python 环境尚未就绪",passed:!1,testResults:[]};const h=[];let p=!0,u="";try{s.runPython(`
import sys
import io
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer
`),await s.runPythonAsync(v),u=s.runPython("_output_buffer.getvalue()"),s.runPython(`
_output_buffer = io.StringIO()
sys.stdout = _output_buffer
sys.stderr = _output_buffer

_test_results = []
`),await s.runPythonAsync(m);const S=s.runPython(`
import json
json.dumps(_test_results)
`),a=JSON.parse(S);h.push(...a),p=a.every(F=>F.passed);const E=s.runPython("_output_buffer.getvalue()");return E&&(u+=`
--- 测试输出 ---
`+E),s.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`),{output:u||"代码执行完成，无输出",error:null,passed:p,testResults:h}}catch(y){let S="";try{const a=s.runPython("_output_buffer.getvalue()");a&&(S=a+`
`)}catch{}y.message?S+=y.message:typeof y=="string"?S+=y:S+="未知错误";try{s.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)}catch{}return{output:u,error:S,passed:!1,testResults:[]}}},[s]);return e.jsx(We.Provider,{value:{pyodide:s,isLoading:n,error:l,runCode:b,runCodeWithTests:A,retryLoad:k},children:t})}function Qe(){const t=o.useContext(We);return t===void 0?(console.warn("usePyodide called outside PyodideProvider, using default"),Dt):t}const Y=[{id:"first-step",title:"初出茅庐",description:"完成第一个学习步骤",icon:"🌱",category:"learning",rarity:"common",xpReward:20,condition:t=>t.completedLessons>=1,progress:t=>({current:Math.min(t.completedLessons,1),total:1})},{id:"lesson-10",title:"勤学不辍",description:"完成 10 个学习步骤",icon:"📚",category:"learning",rarity:"common",xpReward:50,condition:t=>t.completedLessons>=10,progress:t=>({current:Math.min(t.completedLessons,10),total:10})},{id:"lesson-50",title:"学富五车",description:"完成 50 个学习步骤",icon:"🎓",category:"learning",rarity:"rare",xpReward:200,condition:t=>t.completedLessons>=50,progress:t=>({current:Math.min(t.completedLessons,50),total:50})},{id:"first-challenge",title:"初战告捷",description:"完成第一个编程挑战",icon:"🎯",category:"challenge",rarity:"common",xpReward:30,condition:t=>t.completedChallenges>=1,progress:t=>({current:Math.min(t.completedChallenges,1),total:1})},{id:"challenge-5",title:"小试牛刀",description:"完成 5 个编程挑战",icon:"⚔️",category:"challenge",rarity:"common",xpReward:80,condition:t=>t.completedChallenges>=5,progress:t=>({current:Math.min(t.completedChallenges,5),total:5})},{id:"challenge-15",title:"身经百战",description:"完成 15 个编程挑战",icon:"🛡️",category:"challenge",rarity:"rare",xpReward:200,condition:t=>t.completedChallenges>=15,progress:t=>({current:Math.min(t.completedChallenges,15),total:15})},{id:"level-1",title:"初窥门径",description:"完成第 1 个关卡",icon:"🚪",category:"mastery",rarity:"common",xpReward:50,condition:t=>t.completedLevels>=1,progress:t=>({current:Math.min(t.completedLevels,1),total:1})},{id:"level-half",title:"半程英雄",description:"完成 50% 的关卡",icon:"⭐",category:"mastery",rarity:"rare",xpReward:300,condition:t=>t.completedLevels>=Math.ceil(t.totalLevels/2),progress:t=>({current:Math.min(t.completedLevels,Math.ceil(t.totalLevels/2)),total:Math.ceil(t.totalLevels/2)})},{id:"level-all",title:"登峰造极",description:"完成所有关卡",icon:"👑",category:"mastery",rarity:"legendary",xpReward:1e3,condition:t=>t.completedLevels>=t.totalLevels&&t.totalLevels>0,progress:t=>({current:Math.min(t.completedLevels,t.totalLevels),total:t.totalLevels})},{id:"xp-100",title:"小有所成",description:"累计获得 100 XP",icon:"💫",category:"learning",rarity:"common",xpReward:30,condition:t=>t.totalXP>=100,progress:t=>({current:Math.min(t.totalXP,100),total:100})},{id:"xp-500",title:"中流砥柱",description:"累计获得 500 XP",icon:"✨",category:"learning",rarity:"rare",xpReward:100,condition:t=>t.totalXP>=500,progress:t=>({current:Math.min(t.totalXP,500),total:500})},{id:"xp-1000",title:"登堂入室",description:"累计获得 1000 XP",icon:"🌟",category:"learning",rarity:"epic",xpReward:250,condition:t=>t.totalXP>=1e3,progress:t=>({current:Math.min(t.totalXP,1e3),total:1e3})},{id:"streak-3",title:"坚持不懈",description:"连续学习 3 天",icon:"🔥",category:"streak",rarity:"common",xpReward:50,condition:t=>t.streak>=3,progress:t=>({current:Math.min(t.streak,3),total:3})},{id:"streak-7",title:"周周向上",description:"连续学习 7 天",icon:"🔥",category:"streak",rarity:"rare",xpReward:150,condition:t=>t.streak>=7,progress:t=>({current:Math.min(t.streak,7),total:7})},{id:"streak-30",title:"持之以恒",description:"连续学习 30 天",icon:"🌋",category:"streak",rarity:"epic",xpReward:500,condition:t=>t.streak>=30,progress:t=>({current:Math.min(t.streak,30),total:30})},{id:"all-rounder",title:"全能选手",description:"同时拥有 5 个成就",icon:"🏆",category:"special",rarity:"epic",xpReward:300,condition:t=>t.completedLessons>=5&&t.completedChallenges>=5&&t.completedLevels>=1},{id:"first-day",title:"启航",description:"欢迎来到 Python Quest",icon:"🎉",category:"special",rarity:"common",xpReward:10,condition:()=>!0}],ye=[{id:"all",label:"全部",icon:"🏆"},{id:"learning",label:"学习",icon:"📚"},{id:"challenge",label:"挑战",icon:"⚔️"},{id:"mastery",label:"精通",icon:"👑"},{id:"streak",label:"连续",icon:"🔥"},{id:"special",label:"特殊",icon:"✨"}],qe={common:{label:"普通",color:"#94a3b8",bg:"rgba(148, 163, 184, 0.15)"},rare:{label:"稀有",color:"#3b82f6",bg:"rgba(59, 130, 246, 0.15)"},epic:{label:"史诗",color:"#a855f7",bg:"rgba(168, 85, 247, 0.15)"},legendary:{label:"传说",color:"#f59e0b",bg:"rgba(245, 158, 11, 0.15)"}},Mt=[{rank:1,name:"PythonMaster",avatar:"PM",xp:2850,streak:45,levels:9,color:"#f59e0b"},{rank:2,name:"CodeWizard",avatar:"CW",xp:2340,streak:32,levels:8,color:"#a855f7"},{rank:3,name:"DataDragon",avatar:"DD",xp:1980,streak:28,levels:8,color:"#3b82f6"},{rank:4,name:"LoopLegend",avatar:"LL",xp:1650,streak:21,levels:7,color:"#10b981"},{rank:5,name:"FunctionFox",avatar:"FF",xp:1320,streak:18,levels:6,color:"#ec4899"},{rank:6,name:"SyntaxSage",avatar:"SS",xp:1080,streak:15,levels:5,color:"#06b6d4"},{rank:7,name:"BinaryBard",avatar:"BB",xp:920,streak:12,levels:4,color:"#84cc16"},{rank:8,name:"RecursionR",avatar:"RR",xp:760,streak:10,levels:3,color:"#f97316"},{rank:9,name:"TupleTitan",avatar:"TT",xp:540,streak:8,levels:2,color:"#8b5cf6"},{rank:10,name:"StringSlayer",avatar:"ST",xp:320,streak:5,levels:1,color:"#ef4444"}],U="v1.2",xe="菜鸟教程完整版",be="44关完整内容 + 6大分类主题体系 + 菜鸟教程对齐",Ye="python-quest-version-registry",Ge="python-quest-progress",Bt="python-quest-progress-version";function se(t){try{return localStorage.getItem(t)}catch{return null}}function Se(t,s){try{return localStorage.setItem(t,s),!0}catch{return console.warn("localStorage 写入失败:",t),!1}}function me(t){return`python-quest-progress@${t}`}function _e(){const t=se(Ye);if(!t)return[];try{const s=JSON.parse(t);return Array.isArray(s)?s:[]}catch{return[]}}function ve(t){Se(Ye,JSON.stringify(t))}function qt(){let t=_e();if(t.length===0){const i=se(Ge),l=se(Bt),_={version:U,label:xe,date:new Date().toISOString(),storageKey:me(U),frozen:!1,description:be};if(i){const C={version:l||"v1.0",label:"历史版本",date:new Date().toISOString(),storageKey:me(l||"v1.0"),frozen:!0,description:"从旧版迁移的数据"};Se(C.storageKey,i),t=[C,_]}else t=[_];return ve(t),t}const s=t.find(i=>i.version===U);if(s)return s.label=xe,s.description=be,ve(t),t;t.forEach(i=>{i.frozen=!0});const r=t.find(i=>!i.frozen);if(r){const i=se(r.storageKey)||se(Ge);i&&Se(r.storageKey,i),r.frozen=!0}const n={version:U,label:xe,date:new Date().toISOString(),storageKey:me(U),frozen:!1,description:be};return t.push(n),ve(t),t}function Ze(){return _e().find(s=>s.version===U&&!s.frozen)||null}function et(t){const r=_e().find(i=>i.version===t);if(!r)return null;const n=se(r.storageKey);if(!n)return null;try{return JSON.parse(n)}catch{return null}}function Gt(){return _e().map(s=>{var C;const r=et(s.version);if(!r)return{version:s.version,totalXP:0,completedLevels:0,completedLessons:0,completedChallenges:0,studyDays:[],activityLogLength:0,snapshotDate:s.date};const n=r.levels||{},i=Object.values(n).filter(d=>d==null?void 0:d.completed).length,l=Object.values(n).reduce((d,k)=>d+Object.values((k==null?void 0:k.lessons)||{}).filter(b=>b==null?void 0:b.completed).length,0),_=Object.values(n).reduce((d,k)=>d+Object.values((k==null?void 0:k.challenges)||{}).filter(b=>b==null?void 0:b.completed).length,0);return{version:s.version,totalXP:r.totalXP||0,completedLevels:i,completedLessons:l,completedChallenges:_,studyDays:r.studyDays||[],activityLogLength:((C=r.activityLog)==null?void 0:C.length)||0,snapshotDate:s.date}})}const zt=300,Ht=qt(),K=me(U),pe=U,ze=()=>new Date().toISOString().slice(0,10);function ce(t,s){try{return localStorage.setItem(t,s),!0}catch(r){if(r instanceof DOMException&&(r.name==="QuotaExceededError"||r.name==="NS_ERROR_DOM_QUOTA_REACHED")){console.warn("localStorage 存储空间不足，尝试清理旧数据...");try{const n=localStorage.getItem(K);if(n){const i=JSON.parse(n);if(i.activityLog&&i.activityLog.length>30)return i.activityLog=i.activityLog.slice(0,30),localStorage.setItem(K,JSON.stringify(i)),!0}}catch{}}return console.error("localStorage 写入失败:",r),!1}}function je(t){try{return localStorage.getItem(t)}catch{return null}}const J={xp:50,totalXP:500,streak:7,studyDays:[ze()],lastStudyDate:ze(),levels:{1:{unlocked:!0,completed:!1,lessons:{},challenges:{}},2:{unlocked:!0,completed:!1,lessons:{},challenges:{}},3:{unlocked:!0,completed:!1,lessons:{},challenges:{}},4:{unlocked:!0,completed:!1,lessons:{},challenges:{}},5:{unlocked:!0,completed:!1,lessons:{},challenges:{}},6:{unlocked:!0,completed:!1,lessons:{},challenges:{}},7:{unlocked:!0,completed:!1,lessons:{},challenges:{}},8:{unlocked:!0,completed:!1,lessons:{},challenges:{}},9:{unlocked:!0,completed:!1,lessons:{},challenges:{}},10:{unlocked:!0,completed:!1,lessons:{},challenges:{}},11:{unlocked:!0,completed:!1,lessons:{},challenges:{}},12:{unlocked:!0,completed:!1,lessons:{},challenges:{}},13:{unlocked:!0,completed:!1,lessons:{},challenges:{}},14:{unlocked:!0,completed:!1,lessons:{},challenges:{}},15:{unlocked:!0,completed:!1,lessons:{},challenges:{}},16:{unlocked:!0,completed:!1,lessons:{},challenges:{}},17:{unlocked:!0,completed:!1,lessons:{},challenges:{}},18:{unlocked:!0,completed:!1,lessons:{},challenges:{}},19:{unlocked:!0,completed:!1,lessons:{},challenges:{}},20:{unlocked:!0,completed:!1,lessons:{},challenges:{}},21:{unlocked:!0,completed:!1,lessons:{},challenges:{}},22:{unlocked:!0,completed:!1,lessons:{},challenges:{}},23:{unlocked:!0,completed:!1,lessons:{},challenges:{}},24:{unlocked:!0,completed:!1,lessons:{},challenges:{}},25:{unlocked:!0,completed:!1,lessons:{},challenges:{}},26:{unlocked:!0,completed:!1,lessons:{},challenges:{}},27:{unlocked:!0,completed:!1,lessons:{},challenges:{}},28:{unlocked:!0,completed:!1,lessons:{},challenges:{}},29:{unlocked:!0,completed:!1,lessons:{},challenges:{}},30:{unlocked:!0,completed:!1,lessons:{},challenges:{}},31:{unlocked:!0,completed:!1,lessons:{},challenges:{}},32:{unlocked:!0,completed:!1,lessons:{},challenges:{}},33:{unlocked:!0,completed:!1,lessons:{},challenges:{}},34:{unlocked:!0,completed:!1,lessons:{},challenges:{}},35:{unlocked:!0,completed:!1,lessons:{},challenges:{}},36:{unlocked:!0,completed:!1,lessons:{},challenges:{}},37:{unlocked:!0,completed:!1,lessons:{},challenges:{}},38:{unlocked:!0,completed:!1,lessons:{},challenges:{}},39:{unlocked:!0,completed:!1,lessons:{},challenges:{}},40:{unlocked:!0,completed:!1,lessons:{},challenges:{}},41:{unlocked:!0,completed:!1,lessons:{},challenges:{}},42:{unlocked:!0,completed:!1,lessons:{},challenges:{}},43:{unlocked:!0,completed:!1,lessons:{},challenges:{}},44:{unlocked:!0,completed:!1,lessons:{},challenges:{}}},unlockedAchievements:["first-day"],claimedAchievements:[],activityLog:[{id:"welcome",type:"achievement",title:"欢迎来到 Python Quest",description:"开始你的编程冒险之旅",xp:10,timestamp:new Date().toISOString(),icon:"🎉"}]};function ue(t){return!t||typeof t!="object"?{...J}:{...J,...t,levels:t.levels?{...J.levels,...t.levels}:{...J.levels},unlockedAchievements:Array.isArray(t.unlockedAchievements)?t.unlockedAchievements:J.unlockedAchievements,claimedAchievements:Array.isArray(t.claimedAchievements)?t.claimedAchievements:J.claimedAchievements,activityLog:Array.isArray(t.activityLog)&&t.activityLog.length>0?t.activityLog:J.activityLog,studyDays:Array.isArray(t.studyDays)?t.studyDays:J.studyDays}}const tt=o.createContext(void 0);function we(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function Jt({children:t}){const{auth:s,isLoading:r}=Oe(),[n,i]=o.useState("idle"),[l,_]=o.useState(""),[C,d]=o.useState("saved"),[k,b]=o.useState(null),[A]=o.useState(Ht),v=o.useMemo(()=>Ze(),[]),[m,h]=o.useState(()=>{const c=je(K);if(c)try{const P=JSON.parse(c),N=je("python-quest-progress");return N&&!c?ue(JSON.parse(N)):P}catch{}const x=je("python-quest-progress");if(x)try{return ue(JSON.parse(x))}catch{}return ce(K+"-version",pe),{...J}}),p=o.useRef(!1),u=o.useRef(null),y=o.useRef(null),S=o.useRef("");o.useEffect(()=>{if(!r){if(!s||!s.gistId){i("idle"),p.current=!1;return}p.current||(i("loading"),Ot(s.token,s.gistId).then(c=>{c&&c.progress&&h(x=>{const P=ue(c.progress),N=x.totalXP,j=P.totalXP;return N>j?ue({...P,...x}):P}),i("synced"),S.current="",p.current=!0}).catch(c=>{console.error("加载云端进度失败",c);const x=c instanceof Error?c.message:String(c);S.current=x,i("error"),x.includes("超时")||x.includes("网络")||x.includes("Failed to fetch")?p.current=!1:p.current=!0}))}},[s,r]),o.useEffect(()=>{s||(p.current=!1,i("idle"))},[s]),o.useEffect(()=>{d("saving"),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{ce(K,JSON.stringify(m))?(d("saved"),b(new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}))):d("error")},zt),s&&s.gistId&&p.current&&n!=="loading"&&(u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{i("syncing"),Be(s.token,s.gistId,{progress:m,savedAt:new Date().toISOString(),version:pe}).then(()=>{i("synced"),_("")}).catch(c=>{console.error("上传 Gist 失败",c);const x=c instanceof Error?c.message:String(c);_(x),i("error")})},1500))},[m,s,n]);const a=o.useCallback(()=>{d("saving"),y.current&&clearTimeout(y.current),ce(K,JSON.stringify(m))?(d("saved"),b(new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}))):d("error")},[m]),E=o.useCallback(c=>{const x=Object.values(c.levels).reduce((q,V)=>q+Object.values(V.lessons).filter(X=>X.completed).length,0),P=Object.values(c.levels).reduce((q,V)=>q+Object.values(V.challenges).filter(X=>X.completed).length,0),N=Object.values(c.levels).filter(q=>q.completed).length,j=Object.keys(c.levels).length,R={totalXP:c.totalXP,streak:c.streak,completedLevels:N,completedLessons:x,completedChallenges:P,perfectChallenges:P,totalLevels:j},D=[];for(const q of Y)c.unlockedAchievements.includes(q.id)||q.condition(R)&&D.push(q.id);return D.length>0?{...c,unlockedAchievements:[...c.unlockedAchievements,...D]}:c},[]),F=o.useCallback((c,x)=>{var P,N;return((N=(P=m.levels[c])==null?void 0:P.lessons[x])==null?void 0:N.completed)||!1},[m]),I=o.useCallback((c,x)=>{var P,N;return((N=(P=m.levels[c])==null?void 0:P.challenges[x])==null?void 0:N.completed)||!1},[m]),f=o.useCallback(c=>{var x;return m.godMode?!0:((x=m.levels[c])==null?void 0:x.unlocked)||!1},[m]),T=o.useCallback(c=>{var x;return((x=m.levels[c])==null?void 0:x.completed)||!1},[m]),g=o.useCallback(c=>m.unlockedAchievements.includes(c),[m]),O=o.useCallback(c=>m.claimedAchievements.includes(c),[m]),w=o.useCallback((c,x,P)=>{h(N=>{const j=N.levels[c]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},R=j.lessons[x]||{completed:!1};if(R.completed)return N;const D={...j.lessons,[x]:{...R,completed:!0,lastCode:P||R.lastCode,completedAt:new Date().toISOString()}},q=Object.values(D).every(z=>z.completed),V=Object.values(j.challenges).every(z=>z.completed),X=Object.keys(j.challenges).length>0,le=q&&(X?V:!0),W=c+1,ee={...N.levels,[c]:{...j,lessons:D,completed:le||j.completed}};le&&!j.completed&&N.levels[W]&&(ee[W]={...N.levels[W],unlocked:!0});let $={...N,levels:ee};if(le&&!j.completed){const z={id:we(),type:"level",title:`完成第 ${c} 关`,description:"解锁下一关卡",timestamp:new Date().toISOString(),icon:"🎊"};$={...$,activityLog:[z,...$.activityLog].slice(0,100)}}return $=E($),$})},[E]),B=o.useCallback((c,x,P=10,N)=>{h(j=>{const R=j.levels[c]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},D=R.challenges[x]||{completed:!1,attempts:0},q=D.completed,V={...R.challenges,[x]:{...D,completed:!0,lastCode:N||D.lastCode,completedAt:new Date().toISOString(),attempts:D.attempts+1}},X=Object.values(V).every(de=>de.completed),le=Object.values(R.lessons).every(de=>de.completed),W=X&&le,ee=c+1,$={...j.levels,[c]:{...R,challenges:V,completed:W}};W&&j.levels[ee]&&($[ee]={...j.levels[ee],unlocked:!0});let z={...j,xp:q?j.xp:j.xp+P,totalXP:q?j.totalXP:j.totalXP+P,levels:$};if(W){const de={id:we(),type:"level",title:`完成第 ${c} 关`,description:"解锁下一关卡",timestamp:new Date().toISOString(),icon:"🎊"};z={...z,activityLog:[de,...z.activityLog].slice(0,100)}}return z=E(z),z})},[E]),H=o.useCallback(c=>{h(x=>{if(!x.unlockedAchievements.includes(c)||x.claimedAchievements.includes(c))return x;const P=Y.find(j=>j.id===c);if(!P)return x;const N={id:we(),type:"achievement",title:`解锁成就：${P.title}`,description:P.description,xp:P.xpReward,timestamp:new Date().toISOString(),icon:P.icon};return{...x,xp:x.xp+P.xpReward,totalXP:x.totalXP+P.xpReward,claimedAchievements:[...x.claimedAchievements,c],activityLog:[N,...x.activityLog].slice(0,100)}})},[]),oe=o.useCallback((c,x)=>{var P,N;return(N=(P=m.levels[c])==null?void 0:P.lessons[x])==null?void 0:N.lastCode},[m]),Z=o.useCallback((c,x)=>{var P,N;return(N=(P=m.levels[c])==null?void 0:P.challenges[x])==null?void 0:N.lastCode},[m]),L=o.useCallback((c,x,P)=>{h(N=>{const j=N.levels[c]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},R=j.lessons[x]||{completed:!1};return{...N,levels:{...N.levels,[c]:{...j,lessons:{...j.lessons,[x]:{...R,lastCode:P}}}}}})},[]),M=o.useCallback((c,x,P)=>{h(N=>{const j=N.levels[c]||{unlocked:!1,completed:!1,lessons:{},challenges:{}},R=j.challenges[x]||{completed:!1,attempts:0};return{...N,levels:{...N.levels,[c]:{...j,challenges:{...j.challenges,[x]:{...R,lastCode:P}}}}}})},[]),at=o.useCallback(c=>{const x=m.levels[c];if(!x)return{completed:0,total:0,percent:0};const P=Object.values(x.lessons),N=Object.values(x.challenges),j=P.filter(D=>D.completed).length+N.filter(D=>D.completed).length,R=P.length+N.length;return{completed:j,total:R,percent:R>0?Math.round(j/R*100):0}},[m]),it=o.useCallback(()=>{let c=0,x=0;for(const P of Object.values(m.levels))c+=Object.keys(P.lessons).length+Object.keys(P.challenges).length,x+=Object.values(P.lessons).filter(N=>N.completed).length,x+=Object.values(P.challenges).filter(N=>N.completed).length;return{completed:x,total:c,percent:c>0?Math.round(x/c*100):0}},[m]),rt=o.useCallback((c=10)=>m.activityLog.slice(0,c),[m]),ot=o.useCallback(()=>{h(c=>{var P;if(!c.godMode){const N={};for(let j=1;j<=44;j++)N[j]={...c.levels[j]||{lessons:{},challenges:{}},unlocked:!0,completed:((P=c.levels[j])==null?void 0:P.completed)||!1};return{...c,godMode:!0,levels:N,activityLog:[{id:"godmode-on-"+Date.now(),type:"achievement",title:"无敌模式已开启",description:"所有关卡已解锁，自由探索！",xp:0,timestamp:new Date().toISOString(),icon:"⚡"},...c.activityLog]}}else{const N={};for(let j=1;j<=44;j++){const R=c.levels[j]||{lessons:{},challenges:{}};N[j]={...R,unlocked:j===1||R.completed}}for(let j=1;j<=43;j++)N[j].completed&&(N[j+1].unlocked=!0);return{...c,godMode:!1,levels:N,activityLog:[{id:"godmode-off-"+Date.now(),type:"achievement",title:"无敌模式已关闭",description:"恢复按进度解锁关卡",xp:0,timestamp:new Date().toISOString(),icon:"🔒"},...c.activityLog]}}})},[]),lt=o.useCallback(()=>{h({...J});try{localStorage.removeItem(K),ce(K+"-version",pe),d("saved"),b(new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}))}catch{}},[]),dt=o.useCallback(async()=>{if(!(!s||!s.gistId)){i("syncing"),_("");try{await Be(s.token,s.gistId,{progress:m,savedAt:new Date().toISOString(),version:pe}),i("synced")}catch(c){console.error("手动同步失败",c);const x=c instanceof Error?c.message:String(c);_(x),i("error")}}},[s,m]),pt=o.useMemo(()=>{const c=Object.values(m.levels).reduce((j,R)=>j+Object.values(R.lessons).filter(D=>D.completed).length,0),x=Object.values(m.levels).reduce((j,R)=>j+Object.values(R.challenges).filter(D=>D.completed).length,0),P=Object.values(m.levels).filter(j=>j.completed).length,N=Object.keys(m.levels).length;return{totalXP:m.totalXP,streak:m.streak,completedLevels:P,completedLessons:c,completedChallenges:x,perfectChallenges:x,totalLevels:N}},[m]);return e.jsx(tt.Provider,{value:{progress:m,stats:pt,syncStatus:n,syncError:l,localSaveStatus:C,lastLocalSave:k,isLessonCompleted:F,isChallengeCompleted:I,isLevelUnlocked:f,isLevelCompleted:T,isAchievementUnlocked:g,isAchievementClaimed:O,completeLesson:w,completeChallenge:B,claimAchievement:H,getLessonCode:oe,getChallengeCode:Z,saveLessonCode:L,saveChallengeCode:M,getLevelProgress:at,getOverallProgress:it,getRecentActivities:rt,resetProgress:lt,manualSync:dt,forceLocalSave:a,currentVersion:v,versionHistory:A,godMode:m.godMode||!1,toggleGodMode:ot},children:t})}function re(){const t=o.useContext(tt);if(t===void 0)throw new Error("useProgress must be used within a ProgressProvider");return t}function Ut({isOpen:t,onClose:s}){const{signInWithToken:r,isLoggingIn:n,loginError:i}=Oe(),[l,_]=o.useState(""),[C,d]=o.useState(!1);if(o.useEffect(()=>{t&&_("")},[t]),o.useEffect(()=>{const b=A=>{A.key==="Escape"&&t&&s()};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[t,s]),!t)return null;const k=async b=>{b.preventDefault(),await r(l)&&s()};return e.jsx("div",{className:"login-modal-backdrop",onClick:s,children:e.jsxs("div",{className:"login-modal",onClick:b=>b.stopPropagation(),children:[e.jsx("button",{className:"lm-close",onClick:s,"aria-label":"关闭",children:"×"}),e.jsxs("div",{className:"lm-header",children:[e.jsx("div",{className:"lm-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"40",height:"40",fill:"currentColor",children:e.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})}),e.jsx("h2",{className:"lm-title",children:"使用 GitHub 登录"}),e.jsx("p",{className:"lm-subtitle",children:"连接 GitHub 账号，云端保存你的学习进度"})]}),e.jsxs("form",{onSubmit:k,className:"lm-form",children:[e.jsxs("div",{className:"lm-field",children:[e.jsxs("label",{className:"lm-label",children:[e.jsx("span",{children:"Personal Access Token"}),e.jsx("span",{className:"lm-required",children:"必填"})]}),e.jsxs("div",{className:"lm-input-wrap",children:[e.jsx("input",{type:C?"text":"password",className:"lm-input",value:l,onChange:b=>_(b.target.value),placeholder:"ghp_xxxxxxxxxxxxxxxxxxxx",autoComplete:"off",spellCheck:!1}),e.jsx("button",{type:"button",className:"lm-toggle",onClick:()=>d(b=>!b),"aria-label":C?"隐藏":"显示",children:C?"🙈":"👁️"})]}),e.jsx("p",{className:"lm-hint",children:"需要 Gist 权限。Token 仅保存在你的浏览器本地，不会上传到任何服务器。"})]}),i&&e.jsxs("div",{className:"lm-error",children:[e.jsx("span",{children:"⚠️"})," ",i]}),e.jsx("button",{type:"submit",className:"lm-submit",disabled:n||!l.trim(),children:n?"连接中...":"登录"})]}),e.jsx("div",{className:"lm-guide",children:e.jsxs("details",{children:[e.jsx("summary",{children:"📖 如何获取 Token？（点击展开）"}),e.jsxs("ol",{className:"lm-steps",children:[e.jsxs("li",{children:["访问 ",e.jsx("a",{href:"https://github.com/settings/tokens?type=beta",target:"_blank",rel:"noopener noreferrer",children:"github.com/settings/tokens"})]}),e.jsxs("li",{children:["点击 ",e.jsx("strong",{children:"Generate new token"})," → 选择 ",e.jsx("strong",{children:"Fine-grained"})]}),e.jsx("li",{children:'设置 Token 名称（如 "Python Quest"）和过期时间'}),e.jsxs("li",{children:["在 ",e.jsx("strong",{children:"Resource owner"})," 选择你的账号"]}),e.jsxs("li",{children:["在 ",e.jsx("strong",{children:"Repository access"})," 中选择 ",e.jsx("strong",{children:"All repositories"})," 或仅特定仓库"]}),e.jsxs("li",{children:["展开 ",e.jsx("strong",{children:"Account permissions"}),"，找到 ",e.jsx("strong",{children:"Gists"})," 权限，设置为 ",e.jsx("strong",{children:"Read and write"})]}),e.jsxs("li",{children:["点击 ",e.jsx("strong",{children:"Generate token"}),"，复制生成的 token（只显示一次！）"]}),e.jsx("li",{children:"回到这里粘贴 token 并登录"})]}),e.jsxs("div",{className:"lm-warning",children:[e.jsx("strong",{children:"⚠️ 安全提示："}),"请勿将 Token 分享给他人。退出登录或更换设备时，记得在 GitHub 设置中撤销旧 Token。"]})]})})]})})}function $t({showUserInfo:t}){var u,y;const s=ft(),{progress:r,syncStatus:n,syncError:i,manualSync:l}=re(),{auth:_,signOutUser:C}=Oe(),[d,k]=o.useState(!1),b=s.pathname==="/",A=t!==void 0?t:!b,[v,m]=o.useState(!1),h=((y=(u=_==null?void 0:_.user)==null?void 0:u.login)==null?void 0:y.slice(0,2).toUpperCase())||"LY",p=()=>{if(!_)return e.jsx("span",{className:"sync-badge local",title:"未登录，数据仅本地保存",children:"本地保存"});if(n==="loading")return e.jsx("span",{className:"sync-badge loading",title:"正在从云端加载进度",children:"同步中..."});if(n==="syncing")return e.jsx("span",{className:"sync-badge loading",title:"正在上传进度到云端",children:"上传中..."});if(n==="synced")return e.jsx("span",{className:"sync-badge synced",title:"所有进度已同步到云端",children:"☁️ 已同步"});if(n==="error"){const a=i.includes("超时")||i.includes("网络")||i.includes("Failed to fetch")?"网络不稳定，数据已保存本地，可手动重试":i.includes("401")||i.includes("403")?"Token 无效或权限不足，请重新登录":i||"同步失败";return e.jsxs("span",{className:"sync-badge error clickable",title:a,onClick:()=>l(),onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:["⚠️ 同步失败",v&&e.jsxs("span",{className:"sync-error-tip",children:[a," · 点击重试"]})]})}return null};return e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:`navbar ${b?"navbar-home":"navbar-inner"}`,children:e.jsxs("div",{className:"navbar-container container",children:[e.jsxs(G,{to:"/",className:"navbar-logo",children:[e.jsx("div",{className:"logo-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("span",{className:"logo-text",children:"Python Quest"})]}),e.jsxs("div",{className:"navbar-links",children:[e.jsx(G,{to:"/",className:`nav-link ${s.pathname==="/"?"active":""}`,children:"首页"}),e.jsx(G,{to:"/map",className:`nav-link ${s.pathname==="/map"?"active":""}`,children:"冒险地图"}),e.jsx(G,{to:"/path",className:`nav-link ${s.pathname==="/path"?"active":""}`,children:"学习路径"}),e.jsx(G,{to:"/achievements",className:`nav-link ${s.pathname==="/achievements"?"active":""}`,children:"成就"}),e.jsx(G,{to:"/leaderboard",className:`nav-link ${s.pathname==="/leaderboard"?"active":""}`,children:"排行榜"})]}),e.jsxs("div",{className:"navbar-actions",children:[A&&e.jsxs("div",{className:"user-info",children:[e.jsxs("div",{className:"xp-badge",children:[e.jsx("span",{className:"xp-icon",children:"⭐"}),e.jsxs("span",{className:"xp-text",children:[r.xp," / ",r.totalXP," XP"]})]}),e.jsxs("div",{className:"streak-badge",children:[e.jsx("span",{className:"streak-icon",children:"🔥"}),e.jsxs("span",{className:"streak-text",children:[r.streak,"天"]})]}),p(),_?e.jsx("a",{className:"avatar avatar-online",title:`${_.user.name||_.user.login} (@${_.user.login})`,href:_.user.html_url,target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:_.user.avatar_url,alt:h})}):e.jsx("div",{className:"avatar",children:e.jsx("span",{children:"LY"})})]}),_?e.jsx("button",{className:"btn btn-secondary btn-sm",onClick:C,children:"退出"}):e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>k(!0),children:[e.jsx("span",{className:"btn-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor",children:e.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})}),"GitHub 登录"]})]})]})}),e.jsx(Ut,{isOpen:d,onClose:()=>k(!1)})]})}function Vt(){return e.jsxs("footer",{className:"footer",children:[e.jsxs("div",{className:"container footer-container",children:[e.jsxs("div",{className:"footer-brand",children:[e.jsxs(G,{to:"/",className:"footer-logo",children:[e.jsx("div",{className:"logo-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("span",{className:"logo-text",children:"Python Quest"})]}),e.jsx("p",{className:"footer-tagline",children:"通过游戏化学习，从零到英雄掌握Python编程"})]}),e.jsxs("div",{className:"footer-links",children:[e.jsxs("div",{className:"footer-column",children:[e.jsx("h4",{children:"关于我们"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#",children:"课程介绍"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"团队成员"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"联系我们"})})]})]}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h4",{children:"学习资源"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#",children:"学习路径"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"文档中心"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"常见问题"})})]})]}),e.jsxs("div",{className:"footer-column",children:[e.jsx("h4",{children:"社区"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#",children:"排行榜"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"讨论区"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"合作伙伴"})})]})]})]})]}),e.jsx("div",{className:"footer-bottom",children:e.jsx("div",{className:"container",children:e.jsx("p",{children:"© 2024 Python Quest. All rights reserved."})})})]})}function Kt({onClose:t}){var C;const[s,r]=o.useState(null),i=[...o.useMemo(()=>Gt(),[])].reverse(),l=s?et(s):null,_=d=>{try{return new Date(d).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return d}};return e.jsx("div",{className:"version-history-overlay",onClick:t,children:e.jsxs("div",{className:"version-history-modal",onClick:d=>d.stopPropagation(),children:[e.jsxs("div",{className:"vh-header",children:[e.jsx("h2",{children:"📦 版本历史"}),e.jsx("button",{className:"vh-close",onClick:t,children:"✕"})]}),e.jsxs("div",{className:"vh-body",children:[e.jsxs("div",{className:"vh-version-list",children:[i.length===0&&e.jsx("p",{className:"vh-empty",children:"暂无版本记录"}),i.map(d=>{const k=d.version===U,b=s===d.version;return e.jsxs("div",{className:`vh-version-card ${b?"selected":""} ${k?"current":""}`,onClick:()=>r(d.version),children:[e.jsxs("div",{className:"vh-card-header",children:[e.jsx("span",{className:"vh-version-tag",children:d.version}),k?e.jsx("span",{className:"vh-badge vh-badge-current",children:"当前版本"}):e.jsx("span",{className:"vh-badge vh-badge-frozen",children:"🔒 已冻结"})]}),e.jsxs("div",{className:"vh-card-stats",children:[e.jsxs("div",{className:"vh-stat",children:[e.jsx("span",{className:"vh-stat-value",children:d.totalXP}),e.jsx("span",{className:"vh-stat-label",children:"总XP"})]}),e.jsxs("div",{className:"vh-stat",children:[e.jsx("span",{className:"vh-stat-value",children:d.completedLevels}),e.jsx("span",{className:"vh-stat-label",children:"通关数"})]}),e.jsxs("div",{className:"vh-stat",children:[e.jsx("span",{className:"vh-stat-value",children:d.completedLessons}),e.jsx("span",{className:"vh-stat-label",children:"课程"})]}),e.jsxs("div",{className:"vh-stat",children:[e.jsx("span",{className:"vh-stat-value",children:d.completedChallenges}),e.jsx("span",{className:"vh-stat-label",children:"挑战"})]})]}),e.jsx("div",{className:"vh-card-date",children:_(d.snapshotDate)})]},d.version)})]}),l&&s&&e.jsxs("div",{className:"vh-detail-panel",children:[e.jsxs("div",{className:"vh-detail-header",children:[e.jsxs("h3",{children:["版本 ",s," 进度详情"]}),e.jsx("span",{className:"vh-readonly-hint",children:"📋 只读快照"})]}),e.jsxs("div",{className:"vh-detail-stats",children:[e.jsxs("div",{className:"vh-detail-stat",children:[e.jsx("div",{className:"vh-detail-icon",children:"⭐"}),e.jsxs("div",{children:[e.jsx("span",{className:"vh-detail-big",children:l.totalXP||0}),e.jsx("span",{className:"vh-detail-small",children:"经验值"})]})]}),e.jsxs("div",{className:"vh-detail-stat",children:[e.jsx("div",{className:"vh-detail-icon",children:"📅"}),e.jsxs("div",{children:[e.jsx("span",{className:"vh-detail-big",children:((C=l.studyDays)==null?void 0:C.length)||0}),e.jsx("span",{className:"vh-detail-small",children:"学习天数"})]})]}),e.jsxs("div",{className:"vh-detail-stat",children:[e.jsx("div",{className:"vh-detail-icon",children:"🏆"}),e.jsxs("div",{children:[e.jsx("span",{className:"vh-detail-big",children:Object.values(l.levels||{}).filter(d=>d==null?void 0:d.completed).length}),e.jsx("span",{className:"vh-detail-small",children:"完成关卡"})]})]})]}),e.jsxs("div",{className:"vh-detail-section",children:[e.jsx("h4",{children:"关卡完成情况"}),e.jsx("div",{className:"vh-levels-grid",children:Object.entries(l.levels||{}).map(([d,k])=>e.jsxs("div",{className:`vh-level-chip ${k.completed?"completed":k.unlocked?"unlocked":"locked"}`,children:[e.jsxs("span",{className:"vh-level-num",children:["第",d,"关"]}),e.jsx("span",{className:"vh-level-status",children:k.completed?"✓":k.unlocked?"进行中":"🔒"})]},d))})]}),l.activityLog&&l.activityLog.length>0&&e.jsxs("div",{className:"vh-detail-section",children:[e.jsxs("h4",{children:["最近活动 (",l.activityLog.length," 条)"]}),e.jsx("div",{className:"vh-activity-list",children:l.activityLog.slice(0,8).map(d=>e.jsxs("div",{className:"vh-activity-item",children:[e.jsx("span",{className:"vh-activity-icon",children:d.icon}),e.jsxs("div",{className:"vh-activity-info",children:[e.jsx("span",{className:"vh-activity-title",children:d.title}),e.jsx("span",{className:"vh-activity-time",children:_(d.timestamp)})]})]},d.id))})]})]})]})]})})}function Xt(){const[t,s]=o.useState(!1),r=Ze(),n=[{value:"10",label:"大关卡"},{value:"52",label:"编程挑战"},{value:"156+",label:"学习者"},{value:"98%",label:"好评率"}];return e.jsxs("div",{className:"home-page",children:[e.jsxs("section",{className:"hero-section",children:[e.jsxs("div",{className:"hero-bg-decorations",children:[e.jsx("div",{className:"floating-element elem-1"}),e.jsx("div",{className:"floating-element elem-2"}),e.jsx("div",{className:"floating-element elem-3"}),e.jsx("div",{className:"code-symbol code-1",children:"</>"}),e.jsx("div",{className:"code-symbol code-2",children:"{ }"}),e.jsx("div",{className:"code-symbol code-3",children:"🐍"})]}),e.jsxs("div",{className:"container hero-content",children:[e.jsx("div",{className:"hero-badge animate-fade-in",children:e.jsx("span",{children:"🎮 游戏化学习"})}),e.jsx("h1",{className:"hero-title animate-fade-in delay-100",children:e.jsx("span",{className:"title-gradient",children:"Python Quest"})}),e.jsx("p",{className:"hero-subtitle animate-fade-in delay-200",children:"通过 9 大关卡、50+ 编程挑战，从零到英雄独立完成项目"}),e.jsxs("div",{className:"hero-actions animate-fade-in delay-300",children:[e.jsx(G,{to:"/map",className:"btn btn-primary btn-lg",children:"开始冒险"}),e.jsxs(G,{to:"/source",className:"btn btn-secondary btn-lg",children:[e.jsx("span",{className:"btn-icon",children:"🔧"}),"源码探索"]})]}),e.jsx("div",{className:"hero-stats animate-fade-in delay-400",children:n.map((i,l)=>e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:i.value}),e.jsx("div",{className:"stat-label",children:i.label})]},l))})]})]}),e.jsx("section",{className:"features-section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"为什么选择 Python Quest？"}),e.jsx("p",{className:"section-subtitle",children:"游戏化学习，让编程变得有趣又高效"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-icon",children:"🎯"}),e.jsx("h3",{children:"闯关式学习"}),e.jsx("p",{children:"9大精心设计的关卡，从基础到进阶，每一步都有明确的目标和成就感。"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-icon",children:"💻"}),e.jsx("h3",{children:"实战挑战"}),e.jsx("p",{children:"50+编程挑战，边学边练，在实践中真正掌握Python编程技能。"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-icon",children:"🏆"}),e.jsx("h3",{children:"成就系统"}),e.jsx("p",{children:"XP经验值、徽章、排行榜，在竞争中激发学习动力，不断进步。"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-icon",children:"📊"}),e.jsx("h3",{children:"进度追踪"}),e.jsx("p",{children:"可视化学习地图，清晰展示学习进度，让成长之路一目了然。"})]})]})]})}),e.jsx("section",{className:"cta-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cta-card",children:[e.jsx("h2",{children:"准备好开始你的编程冒险了吗？"}),e.jsx("p",{children:"加入 Python Quest，从零开始，成为Python编程高手"}),e.jsx(G,{to:"/map",className:"btn btn-primary btn-lg",children:"立即开始 →"})]})})}),e.jsx("div",{className:"version-badge-footer",children:e.jsxs("button",{className:"version-badge",onClick:()=>s(!0),children:[e.jsx("span",{className:"vb-dot"}),U," ",r==null?void 0:r.label]})}),t&&e.jsx(Kt,{onClose:()=>s(!1)})]})}const ne=[{id:1,title:"第1关：初见 Python",subtitle:"认识 Python 的世界",description:"了解Python的历史、特点和应用场景，安装开发环境，写出你的第一行代码。",status:"completed",difficulty:1,duration:"约1小时",lessons:5,challenges:3,topics:["Python简介","环境搭建","第一个程序","打印输出"],side:"left",category:"basic"},{id:2,title:"第2关：变量与数据类型",subtitle:"掌握数据的存储与运算",description:"学习变量、基本数据类型、运算符和类型转换，打下编程基础。",status:"completed",difficulty:1,duration:"约1.5小时",lessons:6,challenges:4,topics:["变量","数字类型","字符串","运算符","类型转换"],side:"right",category:"basic"},{id:3,title:"第3关：条件判断",subtitle:"让程序学会思考",description:"学习if-else条件语句、逻辑运算符和比较运算，让程序做出决策。",status:"completed",difficulty:2,duration:"约1.5小时",lessons:5,challenges:5,topics:["if语句","else和elif","比较运算","逻辑运算","嵌套条件"],side:"left",category:"basic"},{id:4,title:"第4关：循环结构",subtitle:"重复的力量",description:"掌握for循环、while循环、循环控制语句，以及循环的嵌套使用。",status:"current",difficulty:2,duration:"约2小时",lessons:7,challenges:6,topics:["for循环","range()函数","while循环","break与continue","循环嵌套"],side:"right",category:"basic"},{id:5,title:"第5关：列表与元组",subtitle:"数据的集合",description:"学习列表和元组的使用，掌握索引、切片、常用方法和列表推导式。",status:"locked",difficulty:2,duration:"约2小时",lessons:6,challenges:5,topics:["列表基础","列表操作","元组","切片","列表推导式"],side:"left",category:"basic"},{id:6,title:"第6关：字典与集合",subtitle:"键值的魔法",description:"深入学习字典和集合的使用，理解哈希表原理和应用场景。",status:"locked",difficulty:3,duration:"约2小时",lessons:6,challenges:5,topics:["字典基础","字典操作","集合","字典推导式","常用场景"],side:"right",category:"basic"},{id:7,title:"第7关：函数",subtitle:"代码的封装与复用",description:"学习函数的定义、参数、返回值、作用域，以及递归和高阶函数。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:8,challenges:7,topics:["函数定义","参数类型","返回值","作用域","递归","Lambda函数"],side:"left",category:"basic"},{id:8,title:"第8关：文件操作",subtitle:"与文件系统交互",description:"学习文件的读写、目录操作、异常处理，掌握数据持久化。",status:"locked",difficulty:3,duration:"约2小时",lessons:6,challenges:5,topics:["文件读写","上下文管理器","目录操作","异常处理","JSON处理"],side:"right",category:"basic"},{id:9,title:"第9关：项目实战",subtitle:"综合项目挑战",description:"运用所学知识，完成一个完整的Python项目，检验你的学习成果。",status:"locked",difficulty:4,duration:"约3小时",lessons:4,challenges:3,topics:["项目规划","模块化设计","测试调试","项目部署"],side:"left",category:"basic"},{id:10,title:"第10关：字符串深入",subtitle:"玩转字符串操作",description:"深入学习字符串的索引、切片、常用方法（find、replace、split、join、format等），掌握字符串的进阶处理技巧。",status:"locked",difficulty:2,duration:"约2小时",lessons:6,challenges:4,topics:["字符串索引","字符串方法","格式化输出","字符串编码"],side:"right",category:"advanced"},{id:11,title:"第11关：模块与包",subtitle:"代码的组织艺术",description:"学习模块的导入、自定义模块、Python包管理（pip）、常用标准库（sys、os、datetime、re），让代码更易管理。",status:"locked",difficulty:3,duration:"约2小时",lessons:5,challenges:4,topics:["import语句","自定义模块","包管理","标准库"],side:"left",category:"advanced"},{id:12,title:"第12关：面向对象基础",subtitle:"类与对象入门",description:"学习面向对象编程思想，理解类、对象、属性、方法、构造函数、self，掌握OOP的核心概念。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:6,challenges:4,topics:["类与对象","属性方法","构造函数","self关键字","封装"],side:"right",category:"advanced"},{id:13,title:"第13关：继承与多态",subtitle:"OOP进阶特性",description:"深入学习类的继承、方法重写、super()函数、多态、抽象类，掌握面向对象的高级特性。",status:"locked",difficulty:4,duration:"约2.5小时",lessons:5,challenges:4,topics:["类的继承","方法重写","super()","多态","抽象类"],side:"left",category:"advanced"},{id:14,title:"第14关：异常处理进阶",subtitle:"优雅地处理错误",description:"学习自定义异常、异常的传递、with语句、断言、调试技巧，编写健壮的Python程序。",status:"locked",difficulty:3,duration:"约2小时",lessons:5,challenges:3,topics:["自定义异常","异常链","上下文管理","断言与调试"],side:"right",category:"advanced"},{id:15,title:"第15关：文件与目录",subtitle:"os模块的妙用",description:"深入学习os、os.path、shutil模块，掌握路径处理、目录操作、文件遍历、批量重命名等高级文件操作。",status:"locked",difficulty:3,duration:"约2小时",lessons:5,challenges:4,topics:["os模块","路径处理","目录遍历","文件操作"],side:"left",category:"advanced"},{id:16,title:"第16关：高级特性",subtitle:"生成器、装饰器与闭包",description:"学习Python的三大高级特性：生成器（yield）、装饰器（@）、闭包，掌握函数式编程的核心思想。",status:"locked",difficulty:4,duration:"约3小时",lessons:6,challenges:4,topics:["生成器","装饰器","闭包","Lambda","map/filter/reduce"],side:"right",category:"advanced"},{id:17,title:"第17关：常用标准库",subtitle:"站在巨人的肩膀上",description:"系统学习Python常用标准库：datetime、re、json、collections、itertools，让代码更优雅高效。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:6,challenges:4,topics:["datetime","正则表达式","json","collections"],side:"left",category:"advanced"},{id:18,title:"第18关：综合实战",subtitle:"完成Python大师之路",description:"综合运用所有知识，完成爬虫、命令行工具、数据处理等实战项目，成为真正的Python大师！",status:"locked",difficulty:5,duration:"约4小时",lessons:5,challenges:4,topics:["项目实战","命令行工具","数据处理","代码优化"],side:"right",category:"advanced"},{id:19,title:"第19关：Requests 网络请求",subtitle:"HTTP 请求的瑞士军刀",description:"学习使用 requests 库进行 HTTP GET/POST 请求、Session 管理、文件上传、Headers/Cookies 处理，掌握与 Web API 交互的核心能力。",status:"locked",difficulty:3,duration:"约2小时",lessons:6,challenges:4,topics:["requests","GET/POST","Session","Headers","JSON 接口"],side:"left",category:"network"},{id:20,title:"第20关：正则表达式 re",subtitle:"文本处理的终极武器",description:"系统学习 Python 标准库 re：元字符、分组、贪婪/非贪婪、match/search/findall/sub，配合菜鸟教程的案例完成手机号、邮箱、HTML 标签等场景实战。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:6,challenges:4,topics:["re 模块","正则语法","分组捕获","查找替换","爬虫文本解析"],side:"right",category:"network"},{id:21,title:"第21关：collections 标准库",subtitle:"更强大的数据结构",description:"学习 collections 中的 Counter/deque/defaultdict/namedtuple/OrderedDict，使用场景覆盖统计计数、双端队列、缺失键默认值等。",status:"locked",difficulty:2,duration:"约2小时",lessons:5,challenges:4,topics:["Counter","deque","defaultdict","namedtuple","OrderedDict"],side:"left",category:"network"},{id:22,title:"第22关：itertools 迭代工具",subtitle:"生成器的军火库",description:"学习 itertools：count/cycle/repeat、chain/islice、product/permutations/combinations、groupby，写出更优雅的流式代码。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:6,challenges:4,topics:["无限迭代器","组合迭代器","groupby","排列组合","排列密码"],side:"right",category:"network"},{id:23,title:"第23关：NumPy 科学计算",subtitle:"告别循环，拥抱向量化",description:"学习 NumPy ndarray：创建数组、切片与广播、矩阵运算、线性代数、随机数，为 Pandas/机器学习打好地基。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:6,challenges:4,topics:["ndarray","广播","矩阵运算","统计方法","随机抽样"],side:"left",category:"data-science"},{id:24,title:"第24关：Pandas 数据分析",subtitle:"Excel 终结者",description:"学习 Pandas Series/DataFrame、读写 CSV/Excel、缺失值处理、分组聚合、透视表、时间序列，完成数据分析实战。",status:"locked",difficulty:4,duration:"约3小时",lessons:7,challenges:4,topics:["DataFrame","读写 CSV","数据清洗","groupby","时间序列"],side:"right",category:"data-science"},{id:25,title:"第25关：Matplotlib 可视化",subtitle:"让数据说话",description:"学习 matplotlib.pyplot：折线图、柱状图、饼图、散点图、子图布局、中文显示、导出 PNG，打造专业图表。",status:"locked",difficulty:2,duration:"约2小时",lessons:6,challenges:4,topics:["折线图","柱状图","饼图","子图","样式与导出"],side:"left",category:"data-science"},{id:26,title:"第26关：SciPy 科学计算",subtitle:"数学/物理/工程全能手",description:"学习 SciPy：线性代数、数值积分、优化求根、信号处理、统计分布，解决工程计算问题。",status:"locked",difficulty:4,duration:"约2.5小时",lessons:5,challenges:4,topics:["linalg","optimize","integrate","stats","signal"],side:"right",category:"data-science"},{id:27,title:"第27关：Flask Web 开发",subtitle:"轻量但不简单",description:"学习 Flask：路由、模板 Jinja2、请求表单、Session、蓝图、RESTful API，写出完整博客后端。",status:"locked",difficulty:4,duration:"约3小时",lessons:6,challenges:4,topics:["路由","模板","表单","Session","REST API"],side:"left",category:"web"},{id:28,title:"第28关：FastAPI 高性能接口",subtitle:"现代 Python API 新标准",description:"学习 FastAPI：Pydantic 数据校验、路径/查询参数、依赖注入、WebSocket、自动 OpenAPI 文档，快速构建工业级 API。",status:"locked",difficulty:4,duration:"约3小时",lessons:6,challenges:4,topics:["路径参数","Pydantic","依赖注入","OAuth2","文档生成"],side:"right",category:"web"},{id:29,title:"第29关：Django 全栈框架",subtitle:"包含一切电池的大而全",description:"学习 Django：MTV 模型、ORM、Admin 后台、表单、Auth 认证、中间件，完成完整 CMS 项目。",status:"locked",difficulty:5,duration:"约4小时",lessons:6,challenges:4,topics:["MTV","ORM","Admin","认证","中间件"],side:"left",category:"web"},{id:30,title:"第30关：Scrapy 爬虫框架",subtitle:"千万级数据的流水线",description:"学习 Scrapy：Spider/Item/Pipeline/Middleware、选择器 XPath/CSS、深度/广度优先，配合反爬策略构建工业级爬虫。",status:"locked",difficulty:5,duration:"约3小时",lessons:6,challenges:4,topics:["Spider","Item Pipeline","Selector","中间件","反爬处理"],side:"right",category:"network"},{id:31,title:"第31关：Dash 可视化仪表盘",subtitle:"用 Python 写 BI 看板",description:"学习 Dash + Plotly：组件、回调 Callback、多页应用、与 Pandas 结合，搭建交互式数据仪表盘。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:5,challenges:4,topics:["组件","Callback","Plotly 图","多页布局","Pandas 联动"],side:"left",category:"tools"},{id:32,title:"第32关：Jupyter 交互计算",subtitle:"数据科学家的工作台",description:"学习 Jupyter Notebook/Lab：Markdown、魔法命令 %timeit、交互式控件 ipywidgets、导出 HTML/PDF，打造可复现研究报告。",status:"locked",difficulty:2,duration:"约2小时",lessons:5,challenges:4,topics:["单元格","魔法命令","ipywidgets","导出","可复现研究"],side:"right",category:"tools"},{id:33,title:"第33关：Pillow 图像处理",subtitle:"Python 版 PS",description:"学习 Pillow：打开/保存图片、像素操作、裁剪缩放旋转、滤镜、合成与水印，完成批量图片处理脚本。",status:"locked",difficulty:2,duration:"约2小时",lessons:5,challenges:4,topics:["IO 操作","像素","变换","滤镜","水印与合成"],side:"left",category:"tools"},{id:34,title:"第34关：量化交易实战",subtitle:"让代码帮你算账",description:"学习量化基础：K 线数据获取、均线策略、回测框架、风险指标、仓位管理，构建第一个可回测策略。",status:"locked",difficulty:5,duration:"约4小时",lessons:7,challenges:4,topics:["均线策略","回测","夏普比率","最大回撤","仓位管理"],side:"right",category:"finance"},{id:35,title:"第35关：R 语言入门",subtitle:"统计分析利器",description:'学习 R 语言基础：向量与数据框、数据清洗、统计分析、可视化绘图，掌握统计学界的"通用语"。',status:"locked",difficulty:3,duration:"约3小时",lessons:6,challenges:3,topics:["向量","数据框","dplyr","ggplot2","统计检验"],side:"left",category:"finance"},{id:36,title:"第36关：Julia 科学计算",subtitle:"高性能计算新贵",description:"学习 Julia 语言基础：类型系统、多维数组、数学计算、微分方程求解，兼顾 Python 效率和 C 性能。",status:"locked",difficulty:4,duration:"约3小时",lessons:6,challenges:3,topics:["多重派发","数组运算","微分方程","性能优化","与 Python 对比"],side:"right",category:"finance"},{id:37,title:"第37关：Python 输入输出",subtitle:"格式化输出与用户交互",description:"学习 input()/print() 进阶用法、格式化字符串（%、format、f-string）、文件读写、标准输入输出流。",status:"locked",difficulty:2,duration:"约2小时",lessons:6,challenges:4,topics:["input/print","格式化输出","f-string","stdin/stdout","文件IO"],side:"left",category:"system"},{id:38,title:"第38关：迭代器与生成器",subtitle:"惰性计算的艺术",description:"学习 iter()/next()、自定义迭代器、生成器 yield、列表推导式、生成器表达式，掌握惰性求值与内存优化。",status:"locked",difficulty:4,duration:"约2.5小时",lessons:6,challenges:4,topics:["iter/next","yield","生成器表达式","列表推导","内存优化"],side:"right",category:"system"},{id:39,title:"第39关：JSON 与 XML 处理",subtitle:"数据交换格式",description:"学习 json 模块（序列化/反序列化）、XML 解析（ElementTree）、数据格式转换，掌握主流数据交换格式。",status:"locked",difficulty:3,duration:"约2小时",lessons:5,challenges:4,topics:["json","pickle","XML/ElementTree","数据格式转换"],side:"left",category:"system"},{id:40,title:"第40关：Python 数据库编程",subtitle:"SQLite 与 MySQL",description:"学习 SQLite 内置数据库、MySQL 连接、CRUD 操作、事务管理、ORM 基础（SQLAlchemy），掌握 Python 数据库开发。",status:"locked",difficulty:3,duration:"约2.5小时",lessons:6,challenges:4,topics:["sqlite3","MySQL","事务","SQLAlchemy","ORM"],side:"right",category:"system"},{id:41,title:"第41关：多线程与多进程",subtitle:"并发编程入门",description:"学习 threading 模块、GIL 全局解释器锁、multiprocessing 多进程、线程池/进程池、同步互斥，掌握 Python 并发模型。",status:"locked",difficulty:4,duration:"约3小时",lessons:6,challenges:4,topics:["threading","GIL","multiprocessing","线程池","锁与条件变量"],side:"left",category:"system"},{id:42,title:"第42关：异步编程 asyncio",subtitle:"协程与事件循环",description:"学习 asyncio 事件循环、async/await、协程、Task、Future、异步IO、aiohttp，掌握现代 Python 异步编程。",status:"locked",difficulty:5,duration:"约3小时",lessons:6,challenges:4,topics:["asyncio","async/await","事件循环","Task","aiohttp"],side:"right",category:"system"},{id:43,title:"第43关：单元测试 pytest",subtitle:"代码质量保障",description:"学习 unittest 标准库、pytest 框架、测试用例组织、fixture、参数化测试、Mock、覆盖率分析，建立测试驱动开发思维。",status:"locked",difficulty:3,duration:"约2小时",lessons:5,challenges:4,topics:["unittest","pytest","fixture","Mock","覆盖率"],side:"left",category:"system"},{id:44,title:"第44关：内存与性能优化",subtitle:"写出更快的 Python",description:"学习引用计数与垃圾回收、内存剖析、性能分析（cProfile）、优化技巧、缓存策略（lru_cache）、代码性能调优实战。",status:"locked",difficulty:4,duration:"约2.5小时",lessons:6,challenges:4,topics:["GC机制","cProfile","lru_cache","内存剖析","优化实战"],side:"right",category:"system"}],Ne=[{id:1,title:"for 循环基础",duration:"12分钟",completed:!0,type:"video"},{id:2,title:"range() 函数详解",duration:"15分钟",completed:!0,type:"video"},{id:3,title:"遍历列表与字典",duration:"18分钟",completed:!0,type:"video"},{id:4,title:"while 循环",duration:"14分钟",completed:!0,type:"video"},{id:5,title:"break 与 continue",duration:"16分钟",completed:!1,type:"video"},{id:6,title:"循环嵌套",duration:"20分钟",completed:!1,type:"video"},{id:7,title:"实战：打印九九乘法表",duration:"25分钟",completed:!1,type:"interactive"}],Wt=[{id:1,title:"计算1到100的和",difficulty:"easy",completed:!0},{id:2,title:"打印三角形图案",difficulty:"easy",completed:!0},{id:3,title:"找出100以内的素数",difficulty:"medium",completed:!1},{id:4,title:"冒泡排序实现",difficulty:"medium",completed:!1},{id:5,title:"猜数字游戏",difficulty:"medium",completed:!1},{id:6,title:"斐波那契数列",difficulty:"hard",completed:!1}],st={4:[{id:1,title:"什么是循环？",type:"explanation",content:`**循环**是编程中最强大的概念之一。它允许我们**重复执行一段代码**，而不需要复制粘贴。

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

— Python Quest 全体导师敬上`}],19:[{id:1,title:"为什么需要 requests ？",type:"explanation",content:'在菜鸟教程中，Python 提供了内置的 `urllib` 进行网络请求，但它接口繁琐。**requests** 被誉为 "HTTP for Humans"，是最流行的 Python 第三方库。\n\n**安装**（浏览器环境中我们使用模拟版）：\n```\npip install requests\n```\n\n**核心 6 个方法**：\n| 方法 | 作用 |\n|---|---|\n| `requests.get()` | GET 请求（读取） |\n| `requests.post()` | POST 请求（提交） |\n| `requests.put()` | PUT 请求（更新） |\n| `requests.delete()` | DELETE 请求（删除） |\n| `requests.session()` | 会话，保留 cookies |\n| `response.json()` | 解析 JSON 响应 |\n\n下面一步步学习！'},{id:2,title:"GET 请求与参数",type:"example",content:`**GET 请求**用于从服务器读取数据。可以用 \`params=\` 把字典自动拼接成 URL 查询串。

菜鸟教程常用示例：请求一个模拟接口，看看天气 JSON。
\`\`\`
import requests_ as requests

# 1. 基础 GET
r = requests.get("https://api.example.com/weather?city=beijing")

# 2. 推荐用 params
r = requests.get(
    "https://api.example.com/weather",
    params={"city": "beijing", "lang": "zh-CN"}
)
\`\`\`

运行下面的示例代码：`,code:`# 模拟 requests 库（浏览器环境使用）
import requests_ as requests

# 查询某城市天气（模拟）
r = requests.get(
    "https://api.example.com/weather",
    params={"city": "Shanghai", "days": 3}
)
print("状态码:", r.status_code)
print("URL:", r.url)
print("响应（JSON）:")
print(r.json())`},{id:3,title:"POST 提交表单",type:"practice",content:'**POST 请求**用于向服务器提交数据。登录表单、发帖、上传都是它。\n\n**两种常见格式**：\n- **表单**：`data={"key":"val"}` → `Content-Type: application/x-www-form-urlencoded`\n- **JSON 接口**：`json={"key":"val"}` → `Content-Type: application/json`\n\n**练习**：编写代码调用模拟登录接口，用 `data=` 提交用户名/密码，打印响应。\n要求输出中包含 \'access_token\' 字符串。',code:`import requests_ as requests

# 在此编写：POST 到 https://api.example.com/login
# 提交表单字段 username=admin password=123456
# 打印状态码和响应 JSON


`,answer:`import requests_ as requests

r = requests.post(
    "https://api.example.com/login",
    data={"username": "admin", "password": "123456"}
)
print("状态码:", r.status_code)
print("响应:", r.json())`,explanation:"**要点**：\n1. `data={...}` 用于 form-urlencoded；`json={...}` 用于 REST API 的 JSON body\n2. 登录接口几乎永远是 POST（GET 会把密码写进 URL 历史）\n3. 成功响应一般包含 `access_token` / `token` / `Set-Cookie`",hint:"requests.post(url, data={...})",testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含 token",
    "passed": "access_token" in output or "token" in output.lower(),
    "message": "登录成功响应应包含 access_token"
})
_test_results.append({
    "name": "有状态码输出",
    "passed": "状态码" in output or "200" in output,
    "message": "应打印状态码"
})`},{id:4,title:"Session 会话管理",type:"explanation",content:`如果你用多个请求保持登录状态，每次都传 cookie 很麻烦。\`requests.Session()\` 会**自动保存和携带 cookies**，就像真的浏览器一样！

菜鸟教程经典示例：登录 → 访问需授权页面。
\`\`\`
s = requests.Session()

# 登录一次
s.post("https://api.example.com/login", data={"u": "a", "p": "b"})

# 后续请求自动带 cookie
r = s.get("https://api.example.com/profile")
\`\`\`

**常见误区**：
- ❌ 每次都用新的 requests.get/post，cookie 不会保留
- ✅ 用同一个 Session 对象贯穿整个会话`},{id:5,title:"实战：模拟爬取文章列表",type:"quiz",content:"假设你要爬取一个文章列表接口：`GET /api/articles?page=1&size=10`，需要带上浏览器 UA，否则返回 403。\n\n**问题**：下列哪个做法最正确？",options:["requests.get(url) 不管，让它默认",'headers={"User-Agent":"Mozilla/5.0 ... Chrome/..."} 传入 get()','data={"ua":"chrome"}','proxies={"http":...} 强制代理'],correctAnswer:1,explanation:'**正确答案：B**  \n`headers=` 参数传入自定义请求头是正确方式。\n\n```\nrequests.get(url, headers={"User-Agent": "Mozilla/5.0 ..."})\n```\n\n很多服务器通过 UA 判断是爬虫还是浏览器，返回不同内容或 403。'},{id:6,title:"小总结 & 错误处理",type:"explanation",content:`**最佳实践清单**（来自菜鸟教程 + 经验）：

1. 总是 \`timeout=10\`，否则卡死网络会让程序挂起
2. 解析 JSON 前先 \`r.raise_for_status()\`，非 2xx 直接抛异常
3. 使用 \`try...except requests.RequestException\` 统一拦截所有网络错误
4. 频繁访问要加 \`time.sleep(0.5)\` 或用 Session 的 adapters 设置重试

\`\`\`
try:
    r = requests.get(url, timeout=10)
    r.raise_for_status()
    data = r.json()
except requests.RequestException as e:
    print("请求失败:", e)
\`\`\`

恭喜！你已经可以用 requests 爬取大部分公开 API 了 🎉`}],20:[{id:1,title:"正则是什么？",type:"explanation",content:'**正则表达式（Regular Expression, regex）** 是一套**字符串模式匹配**语言。菜鸟教程专辟一大章讲它：手机号、邮箱、身份证、爬虫里提取 URL / 标题……都需要它。\n\nPython 标准库 **re** 提供全部能力。先记住"三板斧"：\n| 函数 | 作用 |\n|---|---|\n| `re.search(pat, s)` | 找到第一个匹配（返回 Match 对象） |\n| `re.findall(pat, s)` | 找出所有匹配，返回列表 |\n| `re.sub(pat, repl, s)` | 替换匹配的子串 |\n\n**最常用元字符**（记住这 8 个就能搞定 80% 场景）：\n- `.` 任意字符（除换行）\n- `\\d` 数字 / `\\w` 字母数字下划线 / `\\s` 空白\n- `^abc` 开头 / `xyz$` 结尾\n- `a*` 0 次或多次 / `a+` 1 次或多次 / `a?` 0 或 1 次\n- `[abc]` 字符集任意一个 / `[^abc]` 反向\n- `(组1|组2)` 分组与捕获'},{id:2,title:"手机号与邮箱",type:"example",content:`**菜鸟教程最经典题**：校验手机号、提取邮箱。
\`\`\`
手机号规则（中国大陆）：1 开头，第二位 3-9，共 11 位
→ 模式：r"^1[3-9]\\d{9}$"

邮箱：name@domain.tld，name 可以字母数字._-，domain 至少两级
→ 模式：r"\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,})+$"
\`\`\`

运行下面示例：`,code:`import re

texts = [
    "13800138000",    # ✓ 手机
    "12345678901",    # ✗ 第二位是 2
    "alice_2024@example.com.cn",  # ✓ 邮箱
    "bad@.com",       # ✗
]

phone_pat = r"^1[3-9]\\d{9}$"
email_pat = r"^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,})+$"

for t in texts:
    ok_phone = bool(re.match(phone_pat, t))
    ok_email = bool(re.match(email_pat, t))
    print(f"{t:40s} 手机={ok_phone}  邮箱={ok_email}")`},{id:3,title:"练习：提取全部链接 URL",type:"practice",content:`**任务**：在下面的 HTML 文本中，用 \`re.findall\` **提取所有 <a> 标签的 href 值**。

\`\`\`
<a href="https://www.runoob.com/">菜鸟教程</a>
<a href='https://example.org/page1'>示例1</a>
<a  href = "https://api.github.com/users"  target=_blank>API</a>
\`\`\`

**难点**：
- href 可能用双引号，也可能用单引号
- 等号两边可能有空格

**要求**：输出的链接列表中至少包含上面 3 个 URL。`,code:`import re

html = """
<p>热门学习资源：</p>
<ul>
  <li><a href="https://www.runoob.com/">菜鸟教程</a></li>
  <li><a href='https://example.org/page1'>示例1</a></li>
  <li><a  href = "https://api.github.com/users"  target=_blank>GitHub API</a></li>
</ul>
"""

# 在此编写正则和 findall
# result = re.findall(..., html)
# for url in result: print(url)


`,answer:`import re

html = """
<p>热门学习资源：</p>
<ul>
  <li><a href="https://www.runoob.com/">菜鸟教程</a></li>
  <li><a href='https://example.org/page1'>示例1</a></li>
  <li><a  href = "https://api.github.com/users"  target=_blank>GitHub API</a></li>
</ul>
"""

# 分组捕获：匹配 href 后空格=空格 然后 (单引号里的内容 OR 双引号里的内容)
pat = r"""hrefs*=s*(?:"([^"]+)"|'([^']+)')"""
raw = re.findall(pat, html, re.IGNORECASE)
result = [a or b for a, b in raw]
for url in result:
    print(url)`,explanation:`**拆解模式**：
- \`href\\s*=\\s*\` 匹配 href，中间允许 0~n 个空格
- 外层 (A|B) 捕获组：双引号组 OR 单引号组
- \`[^"]+\` = "除了双引号的任意字符"（非贪婪的最佳替代）
- re.IGNORECASE 让 HREF/Href 都能匹配

**常见错误**：
- 直接用 \`\\d+\\.\` 之类"手写 URL"，实际环境会漏掉各种字符
- 忘记加分组，findall 返回整个匹配串`,hint:`re.findall(r"href\\s*=\\s*([\\"\\'])(.*?)\\\\1", html) 或 双分组解法`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含菜鸟教程",
    "passed": "runoob.com" in output,
    "message": "应提取到 https://www.runoob.com/"
})
_test_results.append({
    "name": "包含 example.org",
    "passed": "example.org/page1" in output,
    "message": "应提取到 https://example.org/page1"
})
_test_results.append({
    "name": "包含 github",
    "passed": "api.github.com" in output,
    "message": "应提取到 GitHub API"
})
_test_results.append({
    "name": "恰好 3 条",
    "passed": output.strip().count("
") >= 2,
    "message": "至少打印 3 条链接"
})`},{id:4,title:"贪婪 vs 非贪婪",type:"explanation",content:'**菜鸟教程高频易错点**！\n正则里 `*` / `+` 默认是**贪婪**：匹配到尽可能长。\n\n例如在 `<b>粗</b> 中间 <b>体</b>` 里：\n```\n贪婪:    r"<b>.*</b>"   → 只匹配 1 个："<b>粗</b> 中间 <b>体</b>"（从第一个 <b> 吃到最后一个 </b>）\n非贪婪:  r"<b>.*?</b>"  → 匹配 2 个："<b>粗</b>"  和  "<b>体</b>"\n```\n\n只要在量词后面加一个 **?**，就切换成非贪婪！'},{id:5,title:"sub 替换与 re.compile",type:"example",content:`**sub** 做批量清洗、脱敏。**compile** 把模式预编译，多次使用更快。

示例：
1. 把所有手机号中间 4 位脱敏成 ****
2. 把多个空白压成 1 个空格
3. 用编译后的模式跑多次
`,code:`import re

# 1) 手机号脱敏：(前 3 位)任意 4 位(后 4 位)
phone_pat = re.compile(r"(1[3-9]\\d)\\d{4}(\\d{4})")
s = "客服：13800138000，销售：18512345678"
print(phone_pat.sub(r"\\1****\\2", s))

# 2) 合并空白
s2 = "Hello        World


  你好  啊"
print(re.sub(r"\\s+", " ", s2))`},{id:6,title:"小测验",type:"quiz",content:'给定字符串：\n```\n"A01 苹果 ￥5.5; B99 香蕉 ￥3.2; C20 西瓜 ￥12.00"\n```\n\n用一条正则同时**提取所有价格数字**（包括小数）。\n`re.findall(??? , s)`\n\n下列哪个正确？',options:['r"￥\\d+"','r"￥(\\d+\\.?\\d*)"','r"\\d+\\.\\d+"','r"\\d+"'],correctAnswer:1,explanation:"**B 正确**\n- 价格前面有人民币符号，用 `￥` 做锚点避免抓错货号 A01、B99\n- 价格本身可能是 `5.5` / `3.2` / `12.00` → `\\d+\\.?\\d*` 最稳\n- 外层分组 ( ) 让 findall **只返回价格数字**，不包含 ￥ 符号\n- D 会把 A01/99/20 这些货号也一起抓出来"}],21:[{id:1,title:"collections 全家桶",type:"explanation",content:`菜鸟教程"Python3 标准库概览"一节中，**collections** 被评为"最高频实用"。它为内置的 dict/list/set/tuple 提供了"增强版"。

**必学 5 个类**：
| 类 | 作用 |
|---|---|
| \`Counter\` | 统计计数器（词频王） |
| \`deque\` | 双端队列（两端都 O(1)） |
| \`defaultdict\` | 访问缺失键自动给默认值 |
| \`namedtuple\` | 给 tuple 起字段名，像对象 |
| \`OrderedDict\` | Python3.7 后和 dict 一样有序（历史遗留） |

下面逐个击破！`},{id:2,title:"Counter 词频统计",type:"example",content:'统计词频是"笔试必考题"。Counter 一行搞定，还带 top-K 接口！',code:`from collections import Counter

text = "hello world hello python world python python 菜鸟 教程 菜鸟"
words = text.split()

c = Counter(words)
print("词频字典:", dict(c))
print("TOP 3:", c.most_common(3))

# 新增文本后合并
more = "python python hello"
c.update(more.split())
print("更新后 python 次数:", c["python"])`},{id:3,title:"defaultdict & namedtuple",type:"practice",content:`**任务 1**：用 \`defaultdict(list)\` 把一堆 "学生-成绩" 对 **按学生分组**，最后打印每个学生的成绩列表。

**任务 2**：用 \`namedtuple("Point", ["x","y"])\` 定义点，计算两点欧氏距离：
\`sqrt((x1-x2)^2 + (y1-y2)^2)\`

输入数据：
\`\`\`
scores = [('小明', 85), ('小红', 92), ('小明', 78), ('小刚', 88), ('小红', 95)]
p1=(3,4)  p2=(0,0)  → 距离应为 5.0
\`\`\``,code:`from collections import defaultdict, namedtuple
import math

scores = [('小明', 85), ('小红', 92), ('小明', 78), ('小刚', 88), ('小红', 95)]

# -------- 任务1：defaultdict(list) 分组 --------
# 在此实现
print("成绩分组：")
# for name, lst in d.items(): print(name, lst)


# -------- 任务2：namedtuple 两点距离 --------
# Point = namedtuple(...)
# p1 = Point(3,4); p2 = Point(0,0)
# dist = ...
# print(f"距离={dist:.1f}")


`,answer:`from collections import defaultdict, namedtuple
import math

scores = [('小明', 85), ('小红', 92), ('小明', 78), ('小刚', 88), ('小红', 95)]

# 任务1
d = defaultdict(list)
for name, score in scores:
    d[name].append(score)
print("成绩分组：")
for name, lst in d.items():
    print(f"  {name}: {lst}")

# 任务2
Point = namedtuple("Point", ["x", "y"])
p1 = Point(3, 4)
p2 = Point(0, 0)
dist = math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
print(f"距离={dist:.1f}")`,explanation:"**defaultdict** 省掉了 `if key not in d: d[key]=[]` 的样板代码。  \n**namedtuple** 字段比下标 `t[0] t[1]` 可读 100 倍，写数据管道/解析 CSV 超常用。",hint:'defaultdict(list) 初始化后直接 append；namedtuple("Point", ["x","y"])',testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "小明分组",
    "passed": "小明" in output and ("85" in output) and ("78" in output),
    "message": "应输出小明的 [85, 78]"
})
_test_results.append({
    "name": "小刚分组",
    "passed": "小刚" in output and "88" in output,
    "message": "应输出小刚的 [88]"
})
_test_results.append({
    "name": "距离",
    "passed": "距离=5.0" in output or "5.0" in output,
    "message": "欧氏距离应该是 5.0"
})`},{id:4,title:"deque 双端队列",type:"explanation",content:`list 在**头部**插入/删除是 O(n)（后面元素全部要搬移），**deque** 两端都是 O(1)。

常用 API：
\`\`\`
from collections import deque

d = deque([1,2,3])
d.append(4)           # 右加  → [1,2,3,4]
d.appendleft(0)       # 左加  → [0,1,2,3,4]
d.pop()               # 右弹 4
d.popleft()           # 左弹 0

d.rotate(1)           # 整体右循环 1 位：[4,1,2,3]
d.extend([5,6])       # 右批量加
d.extendleft([-1,0])  # 左批量加
\`\`\`

**应用**：滑动窗口、BFS、最近最少使用缓存(LRU)、最近 10 条日志。`},{id:5,title:"综合实战：最近 10 条日志",type:"quiz",content:`要实现一个"只保留最近 10 条日志"的结构。每收到一条新日志，旧的自动丢弃。

应该：`,options:["list.append(), 若 len>10 就 list.pop(0)","deque(maxlen=10), append() 自动丢弃最旧","set 去重即可","dict 存 1..10 下标自己换"],correctAnswer:1,explanation:`**B 最地道**  
deque(maxlen=N) 是官方内置的"固定大小环形缓冲"，append/appendleft 超过 N 自动淘汰对面那端，O(1) 不操心。

A 也行但 pop(0) 是 O(n)，在 N 大或 QPS 高时性能差一截。`}],22:[{id:1,title:'itertools 是 Python 的"隐形军火库"',type:"explanation",content:`函数式编程 + 迭代器 = itertools。菜鸟教程建议"先学会 itertools，再写 for 循环"，因为它把 90% 的重复模式都封装了。

**四大分支**（本关学这些）：
1. **无限迭代器**：count / cycle / repeat
2. **终止型迭代器**：accumulate / chain / islice / takewhile / dropwhile / filterfalse / compress / zip_longest
3. **排列组合**：product / permutations / combinations / combinations_with_replacement
4. **分组**：groupby

所有返回的都是**迭代器（lazy）**，不占大量内存，可以 \`for ... in ...\` 逐个吃。`},{id:2,title:"无限迭代器 & islice 切片",type:"example",content:`count 是"等差数列发生器"，cycle 是"无限循环一个序列"，repeat 是"重复同一值"。
因为是无限的，**不能直接 list() 转列表**，要用 islice 截取前 N 个！
`,code:`import itertools as it

print("count 1, 4, 7, 10 ... 取前 6 个:")
for x in it.islice(it.count(1, step=3), 6):
    print(" ", x, end="")
print()

print("cycle [A, B] 取前 8 个:", list(it.islice(it.cycle(["A", "B"]), 8)))
print("repeat 'hi' 4 次:", list(it.repeat("hi", 4)))`},{id:3,title:"accumulate 前缀和 & chain 压平",type:"practice",content:`**任务 1**：对列表 [3,1,4,1,5,9,2] 计算 **前缀乘积**（不是默认加法！），把每一步的积输出。
提示：accumulate(iterable, func=operator.mul)

**任务 2**：把一个 3 层嵌套列表 \`[[1,2],[3,[4,5]],[6]]\` **压平一层**（外层去掉）。
注意：第二层里可能还有子列表，chain.from_iterable 只压一层，保留内部结构。
`,code:`import itertools as it
import operator

# 任务1：前缀乘积
nums = [3, 1, 4, 1, 5, 9, 2]
# 在此输出：前缀积

# 任务2：压平一层
nested = [[1, 2], [3, [4, 5]], [6]]
# 在此输出 flattened 结果：应为 [1, 2, 3, [4,5], 6]


`,answer:`import itertools as it
import operator

nums = [3, 1, 4, 1, 5, 9, 2]
print("前缀乘积:", list(it.accumulate(nums, func=operator.mul)))

nested = [[1, 2], [3, [4, 5]], [6]]
flattened = list(it.chain.from_iterable(nested))
print("压平一层:", flattened)`,explanation:"**易错点**：\n- accumulate 默认做加法，要传 `func=` 改算子\n- `chain(*iterables)` 是把位置参数串起来；`chain.from_iterable(x)` 是把一个可迭代对象里的每个子迭代串起来 → 这才是扁平化\n- 对全深层递归 flatten 需要手写递归或 more_itertools.flatten",hint:"it.accumulate(nums, func=operator.mul) ； it.chain.from_iterable(nested)",testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "前缀乘积",
    "passed": "1080" in output,  # 3*1*4*1*5*9 = 540？再乘下一个 2 = 1080
    "message": "最后一个前缀积应为 1080"
})
_test_results.append({
    "name": "压平后 [4,5] 保留",
    "passed": "[4, 5]" in output or "[4,5]" in output,
    "message": "只压一层，[4,5] 应该还在"
})
_test_results.append({
    "name": "压平后 1/2/3/6 都在",
    "passed": all(str(n) in output for n in [1,2,3,6]),
    "message": "外层数字 1,2,3,6 都应出现"
})`},{id:4,title:"排列组合全家桶",type:"explanation",content:`四兄弟，名字要分清！
| 函数 | 含义 | 例 [1,2,3] r=2 |
|---|---|---|
| product(A, repeat=r) | 笛卡尔积（有序可重） | (1,1)(1,2)(1,3)(2,1)(2,2)(2,3)(3,1)(3,2)(3,3) → 9 种 |
| permutations(A, r) | 排列（有序不重） | (1,2)(1,3)(2,1)(2,3)(3,1)(3,2) → 6 种 |
| combinations(A, r) | 组合（无序不重） | (1,2)(1,3)(2,3) → 3 种 |
| combinations_with_replacement(A, r) | 组合（无序可重） | (1,1)(1,2)(1,3)(2,2)(2,3)(3,3) → 6 种 |

**经典应用**：
- 暴力破解密码（product）
- 彩票所有可能组合（combinations）
- 生成全排列（permutations）`},{id:5,title:"groupby 分组",type:"example",content:`groupby 会把"连续的、相同 key 的元素"归为一组。
⚠️ **坑：它只认连续！** 分组前必须先 sort(key=相同的key_fn)。
`,code:`import itertools as it

students = [
    {"name": "小明", "cls": "一班"},
    {"name": "小红", "cls": "二班"},
    {"name": "小刚", "cls": "一班"},
    {"name": "小丽", "cls": "二班"},
    {"name": "小强", "cls": "二班"},
]

# 必须先按班级排序！
students.sort(key=lambda s: s["cls"])

for cls, group in it.groupby(students, key=lambda s: s["cls"]):
    names = [s["name"] for s in group]
    print(f"{cls}: {names}")`},{id:6,title:"小测验",type:"quiz",content:`密码锁是 **4 位**，每位可选数字 **0-9**。你想枚举所有可能。

下列 itertools 写法正确的是：`,options:["it.permutations(range(10), 4)","it.combinations(range(10), 4)","it.product(range(10), repeat=4)","it.product(range(4), repeat=10)"],correctAnswer:2,explanation:`**C 正确**  
密码允许重复（例如 0000 / 1122），且顺序相关（1234≠4321）。
- permutations 不重：跳过 0000 这种合法密码 ✗
- combinations 既无序也不重 ✗
- product(range(10), repeat=4) 10^4 = 10000 种全部 ✓
- D 参数写反了 ✗`}],23:[{id:1,title:"为什么要用 ndarray ？",type:"explanation",content:`Python list 可以存任意类型，但处理 100 万+ 数值会慢到怀疑人生。**NumPy** 是"Python 的数值运算地基"，菜鸟教程数据科学章节的第一块。

它的核心是 **ndarray（N-dimensional array）**：
- 同类型元素 → 连续内存，CPU 友好
- 运算"向量化"：不需要写 for 循环
- 线性代数 / 傅里叶 / 随机数 全有

浏览器中安装较麻烦，我们提供精简版 API 做概念学习：
\`\`\`
import numpy_ as np          # 我们的模拟版
a = np.array([[1,2,3],[4,5,6]])
print(a.shape)              # (2, 3)
print(a + 1)                # 每个元素 +1（广播）
print(np.dot(a, a.T))       # 矩阵乘法
\`\`\``},{id:2,title:"创建数组 & 属性",type:"example",content:"",code:`import numpy_ as np

# 各种创建
a = np.array([1,2,3,4,5])
b = np.zeros(6)
c = np.ones( (2,3) )
d = np.arange(0, 20, 2)     # 0..19 step=2
e = np.linspace(0, 1, 5)    # 0~1 均匀 5 份

for name, arr in [("a",a),("b",b),("c",c),("d",d),("e",e)]:
    print(f"{name} = {arr}	shape={arr.shape}  dtype={arr.dtype}")`},{id:3,title:"广播 & 统计方法",type:"practice",content:`**任务**：给定一个 (3, 4) 的成绩矩阵，行是学生 [小红, 小刚, 小丽]，列是四门学科 [语文,数学,英语,Python]。

1. **每人减去班级平均分**（对每列做均值然后广播减），打印"标准化分数"
2. 算出**每人总分**并打印
3. 找出**全班 Python 最高分**（第 4 列 index=3）和是谁

数据：
\`\`\`
小红: [88, 92, 85, 96]
小刚: [78, 95, 80, 88]
小丽: [92, 88, 94, 99]
\`\`\``,code:`import numpy_ as np

names = ["小红", "小刚", "小丽"]
subjects = ["语文","数学","英语","Python"]
scores = np.array([
    [88, 92, 85, 96],
    [78, 95, 80, 88],
    [92, 88, 94, 99],
])

# 1) 按列减去班级平均分（广播）
#  col_mean = scores.mean(axis=??)
#  normalized = scores - col_mean

# 2) 每人总分（sum along axis=??）

# 3) Python 最高分 = scores[:,3] 的最大值及下标


`,answer:`import numpy_ as np

names = ["小红", "小刚", "小丽"]
subjects = ["语文","数学","英语","Python"]
scores = np.array([
    [88, 92, 85, 96],
    [78, 95, 80, 88],
    [92, 88, 94, 99],
])

print("原始分数:
", scores)
col_mean = scores.mean(axis=0)
print("
各科平均分:
", col_mean)
normalized = scores - col_mean
print("
标准化分数（高出平均分的部分）:
", np.round(normalized, 2))

total = scores.sum(axis=1)
print("
每人总分:")
for n, t in zip(names, total.tolist()):
    print(f"  {n}: {t}")

python_col = scores[:, 3]
max_score = python_col.max()
who_idx = python_col.argmax()
print(f"
Python 最高分: {names[who_idx]}  分数 {max_score}")`,explanation:`**axis 记忆口诀**：
- axis=0 → 沿着行方向往下算（跨行 → 每列一个结果，形状=列数）
- axis=1 → 沿着列方向往右算（跨列 → 每行一个结果，形状=行数）
- 要搞不清时，把小 shape 带入打印 shape 对比

**广播规则**：如果最后一维相等，或其中一方是 1，就能自动"复制扩展"。  
(3,4) - (4,) 是合法的，后缘维度 4=4。`,hint:"mean(axis=0) 对列；sum(axis=1) 对行；[:,3] 取第 4 列",testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "标准化分数出现负数或 0",
    "passed": "-" in output,
    "message": "标准化后有人低于平均分，应有负数"
})
_test_results.append({
    "name": "小丽总分最高",
    "passed": "小丽" in output and ("373" in output or "99" in output),
    "message": "小丽总分 373，Python 99 应为最高分"
})
_test_results.append({
    "name": "Python 最高分 99",
    "passed": "99" in output and ("Python 最高分" in output),
    "message": "Python 最高分是 99"
})
_test_results.append({
    "name": "小刚总分",
    "passed": "341" in output or ("小刚" in output and "3" in output),
    "message": "小刚总分是 341"
})`},{id:4,title:"矩阵乘法 & 线性代数",type:"example",content:"`A @ B` （或 np.dot(A,B)）做矩阵乘法，形状要求 (m, k) · (k, n) → (m, n)。\n线性方程组 `Ax = b` 用 np.linalg.solve。\n",code:`import numpy_ as np

# 2x2 乘 2x3
A = np.array([[1,2],[3,4]])
B = np.array([[5,6,7],[8,9,10]])
print("A @ B =")
print(A @ B)

# 解方程组：2x + y = 5 ; 3x + 4y = 18
A2 = np.array([[2,1],[3,4]])
b2 = np.array([5, 18])
x = np.linalg.solve(A2, b2)
print(f"
解: x={x[0]:g}, y={x[1]:g}")     # 应该是 x=0.4, y=4.2`},{id:5,title:"随机数 & 采样",type:"explanation",content:"`np.random` 子模块（本关模拟版支持）：\n| 函数 | 效果 |\n|---|---|\n| `np.random.rand(3, 4)` | 0~1 均匀，形状 (3,4) |\n| `np.random.randn(5)` | 标准正态 N(0,1)，5 个 |\n| `np.random.randint(1, 7, size=10)` | [1, 7) 整数 10 个（骰子） |\n| `np.random.choice(pool, size, replace=False)` | 不放回抽样 |\n| `np.random.seed(42)` | 固定种子，让结果可复现 |\n\n**为什么种子重要？** 做机器学习实验/回测，同 seed → 同样的训练集划分，别人可以完全复现你的结果。"},{id:6,title:"小测验",type:"quiz",content:"```\na = np.array([[1,2,3],[4,5,6]])\n```\n\n下列哪个运算会**报广播错误**？",options:["a + 1","a * np.array([10,20,30])","a - np.array([[1],[2]])","a + np.array([1,2])"],correctAnswer:3,explanation:`**D 报错**  
广播比较从**尾部**开始：
- a shape (2,3)
- D 右侧 (2,)  → 尾部 3 vs 2，既不相等也没有 1 → 失败
- B 右侧 (3,) → 尾部 3=3 → OK，扩展成 (2,3)
- C 右侧 (2,1) → 尾部 1/3，OK；前 2=2，OK → 扩展成 (2,3)`}],24:[{id:1,title:"Series & DataFrame 两兄弟",type:"explanation",content:'数据科学的"瑞士军刀"——**Pandas**。菜鸟教程"Python Pandas 教程"三大核心：\n- **Series** = 1D 带标签数组（可以理解为"加强版 dict"）\n- **DataFrame** = 2D 带标签表格（就像 Excel 工作簿里一张表，行索引 index + 列 columns）\n\n我们的环境中内置了一个 pandas_ 模拟库实现核心 API，你写的代码在真实环境几乎不用改，就是 `import pandas as pd`。\n\n**记忆口诀**：\n- 选列 → `df["列名"]`\n- 选行 → `df.loc[标签]` / `df.iloc[下标]`\n- 过滤 → `df[df.列名 > 阈值]`\n- 分组 → `df.groupby("列").agg(...)`'},{id:2,title:"DataFrame 创建与切片",type:"example",content:"",code:`import pandas_ as pd

df = pd.DataFrame({
    "姓名": ["小明","小红","小刚","小丽","小强"],
    "班级": ["一","一","二","二","二"],
    "数学": [92, 95, 80, 99, 78],
    "Python": [88, 96, 82, 99, 65],
    "身高": [170, 162, 178, 165, 180],
})
print("原始 DataFrame:")
print(df)
print()
print("数学 > 90 的同学:")
print(df[df["数学"] > 90][["姓名","班级","数学","Python"]])
print()
print("按班级分组 平均值:")
print(df.groupby("班级").mean())`},{id:3,title:"实战：销售数据清洗 & 汇总",type:"practice",content:`给定一张销售流水记录（字典列表，已经为你放入 df_sales）：

| 日期 | 区域 | 商品 | 销量 | 单价 |
|---|---|---|---|---|
| 2024-01-03 | 华东 | 笔记本 | 20 | 5 |
| 2024-01-10 | 华南 | 笔 | 100 | 2 |
| 2024-01-11 | 华东 | 笔 | 150 | 2 |
| 2024-02-05 | 华南 | 笔记本 | 30 | 5 |
| 2024-02-15 | 华北 | 水杯 | 40 | 25 |
| 2024-02-20 | 华北 | 笔 | 80 | 2 |
| 2024-03-01 | 华东 | 水杯 | 20 | 25 |
| 2024-03-08 | 华南 | 水杯 | 10 | 25 |

**任务**：
1. 新增一列 \`销售额 = 销量 * 单价\`
2. 按**区域**分组：统计每个区域的"总销售额"和"订单条数"
3. 按**月份**分组：统计每月总销售额（取日期前 7 位，如 2024-01）
4. 打印两个结果
`,code:`import pandas_ as pd

rows = [
    {"日期":"2024-01-03","区域":"华东","商品":"笔记本","销量":20,"单价":5},
    {"日期":"2024-01-10","区域":"华南","商品":"笔","销量":100,"单价":2},
    {"日期":"2024-01-11","区域":"华东","商品":"笔","销量":150,"单价":2},
    {"日期":"2024-02-05","区域":"华南","商品":"笔记本","销量":30,"单价":5},
    {"日期":"2024-02-15","区域":"华北","商品":"水杯","销量":40,"单价":25},
    {"日期":"2024-02-20","区域":"华北","商品":"笔","销量":80,"单价":2},
    {"日期":"2024-03-01","区域":"华东","商品":"水杯","销量":20,"单价":25},
    {"日期":"2024-03-08","区域":"华南","商品":"水杯","销量":10,"单价":25},
]
df_sales = pd.DataFrame(rows)

# 1) 销售额 = 销量 * 单价

# 2) 按区域分组：agg(总销售额=("销售额","sum"), 订单数=("日期","count"))

# 3) 取月份 df_sales["月份"] = df_sales["日期"].str[:7]


`,answer:`import pandas_ as pd

rows = [
    {"日期":"2024-01-03","区域":"华东","商品":"笔记本","销量":20,"单价":5},
    {"日期":"2024-01-10","区域":"华南","商品":"笔","销量":100,"单价":2},
    {"日期":"2024-01-11","区域":"华东","商品":"笔","销量":150,"单价":2},
    {"日期":"2024-02-05","区域":"华南","商品":"笔记本","销量":30,"单价":5},
    {"日期":"2024-02-15","区域":"华北","商品":"水杯","销量":40,"单价":25},
    {"日期":"2024-02-20","区域":"华北","商品":"笔","销量":80,"单价":2},
    {"日期":"2024-03-01","区域":"华东","商品":"水杯","销量":20,"单价":25},
    {"日期":"2024-03-08","区域":"华南","商品":"水杯","销量":10,"单价":25},
]
df_sales = pd.DataFrame(rows)

df_sales["销售额"] = df_sales["销量"] * df_sales["单价"]

by_region = df_sales.groupby("区域", as_index=False).agg(
    总销售额=("销售额", "sum"),
    订单数=("日期", "count")
)
print("按区域汇总:")
print(by_region)

df_sales["月份"] = df_sales["日期"].str.slice(0, 7)   # 等价于 .str[:7]
by_month = df_sales.groupby("月份", as_index=False).agg(
    总销售额=("销售额", "sum")
)
print("
按月份汇总:")
print(by_month)`,explanation:'**关键点**：\n- 派生列：`df["新列"] = 表达式`\n- groupby + agg 的命名聚合（Pandas 0.25+ 支持）：`agg(新名字=("源列","算子"))`\n- 字符串方法都在 `Series.str` 命名空间：`.str[:7]` / `.str.contains()` / `.str.replace()`',hint:'df["销售额"] = df["销量"] * df["单价"] ; groupby(...).agg(...); df["月份"] = df["日期"].str[:7]',testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "区域华东总销售",
    "passed": ("华东" in output) and ("900" in output),  # 100+300+500
    "message": "华东总销售额应为 20*5+150*2+20*25 = 100+300+500 = 900"
})
_test_results.append({
    "name": "区域华北总销售",
    "passed": ("华北" in output) and ("1160" in output),
    "message": "华北 = 40*25+80*2 = 1000+160 = 1160"
})
_test_results.append({
    "name": "3 月总销售",
    "passed": ("2024-03" in output) and ("750" in output),
    "message": "2024-03 = 20*25 + 10*25 = 750"
})
_test_results.append({
    "name": "区域表格存在",
    "passed": "按区域汇总" in output and "按月份汇总" in output,
    "message": "应该先打区域表再打月份表"
})`},{id:4,title:"读写 CSV / 处理缺失值",type:"explanation",content:`**真实项目中 60% 的代码都是"数据清洗"**。菜鸟教程把缺失值处理列为必学。

**Pandas 真实环境的读写**（本关没有真文件，记住 API 即可）：
\`\`\`
df = pd.read_csv("sales.csv", encoding="utf-8")
df.to_csv("sales_clean.csv", index=False)
\`\`\`

**处理 NaN 三大招**：
| 方法 | 作用 |
|---|---|
| \`df.isna().sum()\` | 每列缺几个 |
| \`df.dropna(axis=0)\` | 丢掉有缺失的行 |
| \`df.fillna({"价格": 0, "分类": "未知"})\` | 按列填不同默认值 |
| \`df["销售额"].fillna(df["销售额"].median())\` | 用中位数填 |

**经验**：数值列用中位数填（受极端值影响比均值小）；分类列用众数或字符串 "未知"。`},{id:5,title:"索引 & 时间序列",type:"example",content:`把"日期"列设成 index，就可以直接按月份切片、做 rolling 均线。现实里金融/销量数据几乎都是按时间。
`,code:`import pandas_ as pd

df = pd.DataFrame({
    "日期": pd.date_range("2024-01-01", periods=10).astype(str),
    "收盘价": [100,102,101,105,108,107,110,112,115,118],
})
df = df.set_index("日期")
df["MA5"] = df["收盘价"].rolling(5).mean()   # 5 日移动平均
print("股票价格 + MA5:")
print(df.round(2))
print()
print("2024-01-05 到 2024-01-09 切片:")
print(df.loc["2024-01-05":"2024-01-09"])`},{id:6,title:"merge 拼接两个表",type:"explanation",content:'SQL 里的 JOIN，Pandas 一行：\n```\npd.merge(df_left, df_right, on="共同列名", how="inner")  # inner / left / right / outer\n```\n\n典型场景：\n- `订单表` (user_id, item_id, qty) JOIN `用户表` (id, name, level) → 用订单.user_id = 用户.id 连\n- 电商、CRM、数据仓库中最常用的操作之一\n\n注意：重复键会笛卡尔膨胀，合并前检查 `df.duplicated(subset=["key"]).sum()`'},{id:7,title:"小测验",type:"quiz",content:`你要把一张 100 万行的表 \`df_big\` 中"价格 <= 0"的脏数据丢掉，
再按"分类"聚合"收入"的均值。

下列代码最稳妥的顺序是？`,options:['df_big.groupby("分类").收入.mean() 然后再看结果','df_big = df_big[df_big["价格"] > 0] ; df_big.groupby("分类").agg(avg_收入=("收入","mean"))',"df_big.dropna() 再聚合",'df_big["价格"].fillna(0) 再聚合'],correctAnswer:1,explanation:`**B 正确**
先过滤再聚合，符合"脏数据先清洗再分析"的黄金顺序。
A 把脏数据也平均进去，会拉低结果；
C 会把可能只缺非关键字段的大量好行一起丢；
D fillna(0) 只会让价格更像合法数据，价格为 0 的业务逻辑依然错误。`}],25:[{id:1,title:"数据可视化的思维",type:"explanation",content:`**Matplotlib** 是 Python 可视化的"地基"，菜鸟教程专门有一章 Matplotlib 快速入门。Seaborn、Pandas plot、Plotly 底层都借它。

**两条铁律**：
1. **画前先想：我要回答什么问题？** → 选对应图
| 想回答 | 用图 |
|---|---|
| 趋势随时间变化 | 折线图 plot() |
| 类别对比 | 柱状图 bar() |
| 占比/构成 | 饼图 pie() |
| 两个变量关系 | 散点图 scatter() |
| 分布 | 直方图 hist() |
| 多图并排 | subplots() |

2. **保存用 \`fig.savefig("x.png", dpi=150, bbox_inches="tight")\`，比 save() 前再 plt.show() 更稳**。

我们在浏览器环境用 matplotlib_ 模拟库，它会在控制台打印"画图描述"。本地就是 \`import matplotlib.pyplot as plt\`。`},{id:2,title:"折线/柱状/饼 三兄弟",type:"example",content:"",code:`import matplotlib_ as plt

days = ["周一","周二","周三","周四","周五","周六","周日"]
visits = [200, 350, 180, 420, 500, 820, 900]

# 1) 折线图
plt.figure(figsize=(8,4))
plt.plot(days, visits, marker="o", color="#2563eb", label="访问量")
plt.title("一周访问量")
plt.xlabel("日期") ; plt.ylabel("UV")
plt.grid(alpha=.3); plt.legend()
plt.render("折线-访问量")

# 2) 柱状图：各品类销售额
categories = ["食品","家居","电子","服饰","图书"]
sales = [3200, 1800, 5400, 2800, 900]
plt.figure(figsize=(8,4))
bars = plt.bar(categories, sales, color=["#ef4444","#f59e0b","#10b981","#3b82f6","#8b5cf6"])
plt.title("各品类销售")
for b, v in zip(bars, sales):
    plt.text(b, v+50, str(v), ha="center")
plt.render("柱状-品类销售")

# 3) 饼图：流量来源
labels = ["搜索","直接访问","社交","广告","其他"]
shares = [45, 20, 15, 12, 8]
plt.figure(figsize=(6,6))
plt.pie(shares, labels=labels, autopct="%1.1f%%", startangle=90)
plt.title("流量来源占比")
plt.axis("equal")
plt.render("饼-流量来源")`},{id:3,title:"实战：子图多指标看板",type:"practice",content:`**任务**：2x2 子图，一次画出 4 张常见业务图：

数据：
\`\`\`
months   = ["1月","2月","3月","4月","5月","6月"]
revenue  = [120, 150, 170, 160, 210, 260]           # 营收万
users    = [5000, 6200, 7100, 6800, 8400, 9900]     # 月活
churn    = [5.2, 4.8, 4.5, 4.7, 4.3, 4.0]           # 流失率%
channels = ["自然","付费","推荐","合作"]
new_2024 = [4200, 2100, 1800, 900]                   # 新增用户
\`\`\`

布局 (2, 2):
- (0,0) 折线：营收 + 月活双轴（twinx）
- (0,1) 柱状：新增用户渠道分布
- (1,0) 折线：流失率（%，y 轴范围 3~6 更清楚），红色
- (1,1) 饼图：6 月新增用户渠道占比（用 2024 年总 new）
`,code:`import matplotlib_ as plt

months   = ["1月","2月","3月","4月","5月","6月"]
revenue  = [120, 150, 170, 160, 210, 260]
users    = [5000, 6200, 7100, 6800, 8400, 9900]
churn    = [5.2, 4.8, 4.5, 4.7, 4.3, 4.0]
channels = ["自然","付费","推荐","合作"]
new_2024 = [4200, 2100, 1800, 900]

# 在此用 plt.subplots(2, 2, figsize=(12, 9))
# axs = axs.flatten()
# 0: ax1.plot months vs revenue，ax1.twinx() 画 users
# 1: ax2.bar channels vs new_2024
# 2: ax3.plot churn，set_ylim(3, 6)
# 3: ax4.pie new_2024 带 autopct
# 最后 plt.render("经营看板")


`,answer:`import matplotlib_ as plt

months   = ["1月","2月","3月","4月","5月","6月"]
revenue  = [120, 150, 170, 160, 210, 260]
users    = [5000, 6200, 7100, 6800, 8400, 9900]
churn    = [5.2, 4.8, 4.5, 4.7, 4.3, 4.0]
channels = ["自然","付费","推荐","合作"]
new_2024 = [4200, 2100, 1800, 900]

fig, axs = plt.subplots(2, 2, figsize=(12, 9))
ax1, ax2, ax3, ax4 = axs.flatten()

# (0,0) 营收/月活 双轴
ax1.plot(months, revenue, color="#2563eb", marker="o", label="营收(万)")
ax1.set_xlabel("月份"); ax1.set_ylabel("营收(万)", color="#2563eb")
ax1b = ax1.twinx()
ax1b.plot(months, users, color="#10b981", marker="s", label="月活")
ax1b.set_ylabel("月活", color="#10b981")
ax1.set_title("营收 / 月活")

# (0,1) 新增渠道
ax2.bar(channels, new_2024, color=["#10b981","#3b82f6","#8b5cf6","#f59e0b"])
ax2.set_title("2024 新增用户渠道")
for i, v in enumerate(new_2024):
    ax2.text(i, v+100, str(v), ha="center")

# (1,0) 流失率
ax3.plot(months, churn, color="#ef4444", marker="D")
ax3.set_title("月度流失率(%)"); ax3.set_ylim(3, 6)
ax3.grid(alpha=.3)

# (1,1) 渠道饼
ax4.pie(new_2024, labels=channels, autopct="%1.0f%%", startangle=90)
ax4.set_title("新增渠道占比")
ax4.axis("equal")

fig.suptitle("2024 H1 经营数据看板", fontsize=16)
plt.render("经营看板")`,explanation:'**subplot 经验**：\n- 先用 `axs = axs.flatten()` 把 2x2 拉平成一维数组好写\n- 双轴图 `ax.twinx()` 一定要把颜色和 Y 标签同步，否则谁看谁懵\n- 中文标题/标签：真实环境需要 `plt.rcParams["font.sans-serif"] = ["SimHei","Microsoft YaHei"]; plt.rcParams["axes.unicode_minus"]=False`，否则中文方块、负号乱码。',hint:"fig,axs = plt.subplots(2,2,figsize=(12,9))；axs.flatten()；双轴用 twinx()；最后 plt.render(...)",testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "经营看板标题",
    "passed": "经营看板" in output or "H1 经营数据看板" in output,
    "message": "应最后 render '经营看板'"
})
_test_results.append({
    "name": "营收/月活标题",
    "passed": "营收" in output,
    "message": "应有营收子图"
})
_test_results.append({
    "name": "流失率 4.0 / 6 月数据",
    "passed": "流失率" in output and "4.0" in output,
    "message": "6 月流失率 4.0% 要出现"
})
_test_results.append({
    "name": "渠道饼图 自然最多",
    "passed": "自然" in output and ("46.7%" in output or "47%" in output or "47" in output),
    "message": "自然渠道 4200/9000 ≈ 46.7%"
})`},{id:4,title:"散点 & 直方图",type:"explanation",content:`**散点图 scatter(x, y, s=size, c=颜色, alpha=透明度)** → 观察两个数值变量的相关性（学习时间 vs 分数、广告花费 vs 营收）。

**直方图 hist(x, bins=30)** → 观察一个变量的分布（是否正态？有没有长尾？）。

**记住**：数据分布比均值更重要！两个班级平均分一样，但一个是"大多数中等 + 几个尖子"，一个是"两极分化"，直方图一眼看穿。`},{id:5,title:"样式 + 导出",type:"example",content:"",code:`import matplotlib_ as plt
# 真实环境: plt.style.use("seaborn-v0_8-whitegrid") 之类

x = list(range(1, 11))
y1 = [a*2 + 1 for a in x]
y2 = [a**1.6 for a in x]

plt.figure(figsize=(8,5))
plt.plot(x, y1, marker="o", linewidth=2, label="线性 y=2x+1")
plt.plot(x, y2, marker="s", linewidth=2, label="幂 y=x^1.6")
plt.fill_between(x, y1, y2, alpha=.15, color="#10b981", label="差值区域")
plt.title("线性增长 vs 幂增长")
plt.xlabel("X"); plt.ylabel("Y"); plt.legend()
plt.grid(linestyle="--", alpha=.4)
plt.render("样式-导出示例")`},{id:6,title:"小测验",type:"quiz",content:`你要给老板做一张"A/B 两个方案留存率 30 天对比"图：
X 是第 1..30 天，Y 是留存率%，A/B 两条线，
还要突出"两者差值越来越大"这件事。

哪个搭配最清晰？`,options:["两张分开的饼图","一张图两条 plot 线 + fill_between 画差值带阴影","一张柱状图，每天并排两根","一张散点图 A 圆点 B 方块"],correctAnswer:1,explanation:`**B 最佳**
- 两条线看各自走势，fill_between 阴影一眼看差值变大，老板 3 秒 get
- 柱状每天并排 60 根柱子 → 眼花
- 散点是看相关性，不适合"随时间顺序"的趋势`}],26:[{id:1,title:"SciPy：NumPy 的工程哥哥",type:"explanation",content:"**SciPy** 在 NumPy 之上封装了**数学工程级模块**。菜鸟教程《Python SciPy 教程》里的常用子模块：\n| 子包 | 你能用它做什么 |\n|---|---|\n| `scipy.linalg` | 超越 numpy.linalg 的更多分解（LU/QR/SVD/特征值） |\n| `scipy.optimize` | 函数求根/求最值/曲线拟合 |\n| `scipy.integrate` | 数值积分/常微分方程 |\n| `scipy.stats` | 80+ 概率分布 + 假设检验 + 描述统计 |\n| `scipy.signal` | 滤波/卷积/FFT 频谱 |\n\n浏览器模拟库 scipy_ 包含核心方法。你在本地换成 `from scipy import linalg, optimize, stats` 即可。"},{id:2,title:"linalg 进阶 & 优化求根",type:"example",content:"：求解非线形方程 `x^3 - 3x^2 + 2 = 0` 的实根，以及用 curve_fit 拟合一组点到指数曲线。\n",code:`import numpy_ as np
from scipy_ import optimize, linalg

# 1) 求 f(x)=0 的根
def f(x):
    return x**3 - 3*x**2 + 2

# 先试几个点找根区间
for guess in [-1, 0.5, 2.5]:
    r = optimize.root_scalar(f, bracket=[guess-1, guess+1], method="bisect")
    print(f"根 near {guess}: x={r.root:.4f}, 残差 f(x)={f(r.root):.6f}")

# 2) 曲线拟合 y = a * exp(-b * x) + c
xdata = np.array([0, 1, 2, 3, 5, 8, 12])
ydata = np.array([10.0, 7.1, 5.2, 3.9, 2.4, 1.6, 1.2])
def model(x, a, b, c):
    return a * np.exp(-b * x) + c
popt, _ = optimize.curve_fit(model, xdata, ydata, p0=(10, 0.3, 0.5))
print(f"
拟合参数: a={popt[0]:.3f}, b={popt[1]:.3f}, c={popt[2]:.3f}")
print("预测 vs 真值 残差平方和:", float(np.sum((model(xdata, *popt) - ydata)**2)))`},{id:3,title:"练习：t 检验两组样本是否显著不同",type:"practice",content:`**场景（真实 A/B 测试流程）**：
- A 组（旧算法）10 名用户完成任务耗时（秒）：\`[12, 15, 14, 13, 16, 17, 14, 15, 12, 18]\`
- B 组（新算法）10 名用户：\`[9, 10, 12, 11, 8, 13, 10, 11, 9, 12]\`

**任务**：
1. 打印两组的 **均值 ± 标准差**
2. 用 \`scipy_.stats.ttest_ind(A, B)\` 做独立样本 t 检验，得到 **t 统计量** 和 **p-value**
3. 打印结论：若 p < 0.05 输出"✓ 差异显著，B 更优"，否则"✗ 差异不显著"

**判断更优方向**：B 组均值 < A 组 → 新算法更快。
`,code:`import numpy_ as np
from scipy_ import stats

A = np.array([12, 15, 14, 13, 16, 17, 14, 15, 12, 18])
B = np.array([9, 10, 12, 11, 8, 13, 10, 11, 9, 12])

# 1) 均值/标准差


# 2) ttest_ind


# 3) 结论打印


`,answer:`import numpy_ as np
from scipy_ import stats

A = np.array([12, 15, 14, 13, 16, 17, 14, 15, 12, 18])
B = np.array([9, 10, 12, 11, 8, 13, 10, 11, 9, 12])

mA, sA = float(A.mean()), float(A.std(ddof=1))
mB, sB = float(B.mean()), float(B.std(ddof=1))
print(f"A 组: 均值 {mA:.2f} ± {sA:.2f}s")
print(f"B 组: 均值 {mB:.2f} ± {sB:.2f}s")

t_stat, p_value = stats.ttest_ind(A, B)
print(f"t 检验: t={t_stat:.3f}, p={p_value:.5f}")

if p_value < 0.05:
    if mB < mA:
        print("✓ 差异显著，B 组（新算法）显著更快")
    else:
        print("✓ 差异显著，A 组更快")
else:
    print("✗ 差异未达显著水平")`,explanation:`**假设检验思路**：
- H0（零假设）：A/B 两组均值相同
- p 值<0.05：在零假设下出现当前数据的概率 <5% → 我们"拒绝 H0"，接受"两组不同"
- 要注意"显著不同"≠"差异很大"！样本足够大时 0.1 秒的差异也能显著，业务上未必值得上线。

**均值差异+显著性+效应量（Cohen's d）** 一起看才完整。`,hint:"stats.ttest_ind(A, B) 返回 (t, p)。均值用 .mean()，样本标准差 .std(ddof=1)。",testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "均值正确",
    "passed": "14.6" in output and "10.5" in output,
    "message": "A均值 14.6，B均值 10.5"
})
_test_results.append({
    "name": "p 值远小于 0.05",
    "passed": ("p=" in output and ("0.00" in output or "e-0" in output)),
    "message": "差异应该极显著 (p 约 0.0026)"
})
_test_results.append({
    "name": "结论正确",
    "passed": "B" in output and ("更优" in output or "更快" in output or "显著" in output),
    "message": "应该得出 B 显著更快"
})`},{id:4,title:"数值积分 & 信号",type:"explanation",content:"\n**积分 integrate.quad(f, a, b)**：精确算 `∫_a^b f(x)dx`\n```\nfrom scipy import integrate\nval, err = integrate.quad(lambda x: x**2, 0, 2)   # 8/3 ≈ 2.6667\n```\n\n**信号 signal**：FFT 转频域、butterworth 滤波去噪。这是通信/音频/医学信号的基本功，进阶时再深入，记住 API 即可。\n"},{id:5,title:"小测验",type:"quiz",content:"下列哪种任务**不适合**用 SciPy 做？",options:["求一条曲线 f(x) 的最小值点","对一组实验数据拟合 y = a*sin(bx)+c 的参数","画一张交互式网页图表让用户调参数","检验两版 App 的留存率差异是否显著"],correctAnswer:2,explanation:`**C 属于前端/可视化范畴**，一般用 Plotly Dash、Streamlit、Bokeh 这种"交互控件 + 图表"框架。  
SciPy 只负责数学计算，不负责画可交互网页。`}],27:[{id:1,title:"为什么选 Flask ？",type:"explanation",content:`**Flask** 是"微框架"：只有路由、请求/响应、模板，其他数据库/表单/登录你挑自己喜欢的组件。菜鸟教程《Python Flask 教程》第 1 章的原话：**"Flask 提供了坚实的核心，其他一切你说了算。"**

和 FastAPI/Django 定位区别：
| 框架 | 定位 | 最佳场景 |
|---|---|---|
| Flask | 微框架、自由拼 | 博客、后台、轻服务、老项目二次开发 |
| FastAPI | 现代高性能 API、类型驱动 | 新写接口、OpenAPI 文档、前后端分离 |
| Django | 大而全（电池自带） | CMS、OA、企业级后台，团队协作开发快 |

浏览器环境中我们使用 flask_ 模拟库 API 一致，本地开发就 \`pip install flask; from flask import Flask, request, render_template, session\`。`},{id:2,title:"路由 & 变量 & 模板",type:"example",content:"",code:`from flask_ import Flask, render_template_string, request

app = Flask(__name__)
app.secret_key = "change-me"

@app.route("/")
def home():
    return render_template_string(\`
        <h1>欢迎来到 Flask 博客 🎉</h1>
        <ul>
          <li><a href="/user/alice">访问 alice</a></li>
          <li><a href="/user/bob">访问 bob</a></li>
          <li><a href="/search?q=python">搜索 Python</a></li>
        </ul>\`)

@app.route("/user/<username>")
def profile(username):
    return f"<h2>用户主页：{username}</h2>"

@app.route("/search")
def search():
    q = request.args.get("q", "")
    return f"你搜索的关键词是: <b>{q}</b>"

print(app.routes)
print("
模拟 GET /user/bob ->", app.simulate("GET", "/user/bob"))
print("模拟 GET /search?q=flask ->", app.simulate("GET", "/search?q=flask"))`},{id:3,title:'练习：实现"天气查询 API"',type:"practice",content:`**任务**：
1. 定义一个 Flask app
2. 路由 \`GET /api/weather?city=城市名\`，返回 JSON 格式（模拟 dict）：
   - 若 city="北京" → {"city":"北京","temp":28,"desc":"晴"}
   - 若 city="上海" → {"city":"上海","temp":32,"desc":"多云"}
   - 其他城市 → {"city":city,"temp":25,"desc":"未知"}
3. 用 \`app.simulate("GET", url)\` 分别访问：
   - /api/weather?city=北京
   - /api/weather?city=Shanghai
   - /api/weather?city=广州
   并把每次返回值打印出来。
`,code:`from flask_ import Flask, request, jsonify

app = Flask(__name__)

# 在此 @app.route("/api/weather") def weather(): ...
#   用 request.args.get("city", "") 取参数
#   return jsonify({...})

# 最后打印 3 次模拟请求



`,answer:`from flask_ import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/weather")
def weather():
    city = request.args.get("city", "")
    if city == "北京":
        return jsonify({"city": city, "temp": 28, "desc": "晴"})
    elif city == "上海":
        return jsonify({"city": city, "temp": 32, "desc": "多云"})
    else:
        return jsonify({"city": city, "temp": 25, "desc": "未知"})

for url in [
    "/api/weather?city=北京",
    "/api/weather?city=上海",
    "/api/weather?city=广州",
]:
    print("GET", url, "→", app.simulate("GET", url))`,explanation:"**Flask 要点**：\n- `request.args` 是查询串（? 后面），dict-like\n- 返回 JSON 用 `jsonify(dict)`；真实 Flask 会自动加 Content-Type: application/json\n- 路由支持 `<converter:name>`，比如 `<int:post_id>` 自动转整数",hint:'@app.route("/api/weather"), request.args.get("city"), jsonify(字典)',testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "北京 28 晴",
    "passed": "北京" in output and "28" in output and "晴" in output,
    "message": "北京返回温度 28，天气晴"
})
_test_results.append({
    "name": "上海 32 多云",
    "passed": "上海" in output and "32" in output and "多云" in output,
    "message": "上海返回 32，多云"
})
_test_results.append({
    "name": "未知城市兜底",
    "passed": ("广州" in output or "Shanghai" in output) and "未知" in output,
    "message": "未知城市应该 desc=未知"
})
_test_results.append({
    "name": "打印 3 次",
    "passed": "/api/weather" in output and output.count("/api/weather") >= 3,
    "message": "应该模拟 3 次 API 调用"
})`},{id:4,title:"Session & 蓝图",type:"explanation",content:`**Session**：把数据存在浏览器 Cookie 中（服务器端 Flask 用 secret_key 签名防篡改）。
菜鸟教程经典示例——登录后记住用户名：
\`\`\`
from flask import session, redirect, url_for
app.secret_key = "请换成随机字符串"

@app.route("/login", methods=["POST"])
def login():
    session["username"] = request.form["name"]
    return redirect(url_for("home"))

@app.route("/logout")
def logout():
    session.pop("username", None)
    return "已退出"
\`\`\`

**蓝图 Blueprint**：当一个文件 2000 行写不下，把路由拆到 admin_bp.py、user_bp.py、api_bp.py 里，在主 app 中 \`app.register_blueprint(admin_bp, url_prefix="/admin")\`。
这是"大型 Flask 项目第一要务"。`},{id:5,title:"实战：极简博客（模拟）",type:"example",content:"",code:`from flask_ import Flask, request, jsonify

app = Flask(__name__)
posts = [
    {"id": 1, "title": "Flask 入门", "body": "第 1 步 安装..."},
    {"id": 2, "title": "Jinja2 模板", "body": "{{ var }} 是变量..."},
]

@app.route("/api/posts", methods=["GET"])
def list_posts():
    return jsonify({"total": len(posts), "items": posts})

@app.route("/api/posts", methods=["POST"])
def create_post():
    data = request.get_json() or {}
    p = {"id": len(posts)+1, "title": data.get("title","无标题"), "body": data.get("body","")}
    posts.append(p)
    return jsonify({"ok": True, "data": p}), 201

print("GET /api/posts →", app.simulate("GET", "/api/posts"))
print()
print("POST /api/posts {title: Hello} →",
      app.simulate("POST", "/api/posts", json={"title":"Hello","body":"World"}))
print()
print("GET /api/posts →", app.simulate("GET", "/api/posts"))`},{id:6,title:"小测验",type:"quiz",content:`你要做一个"个人博客系统"，包括：首页列表、文章详情、后台管理页、登录、写文章、评论。
下列哪种拆分方式最符合 Flask 最佳实践？`,options:["一个 app.py 1 万行全部塞进去","主 app + 蓝图拆分：home_bp / post_bp / admin_bp / auth_bp","每个函数写一个独立文件，手工 import 回来","所有路由都做成 /api?mode=xxx&param=yyy 用一个函数 if 分派"],correctAnswer:1,explanation:`**B 是标准答案**  
Blueprint + 前缀（url_prefix）让团队协作零冲突、单文件代码长度可控、功能边界清晰。  
A 和 D 是"新手代码"，2 周后没人维护得动。C 过度拆分，import 地狱。`}],28:[{id:1,title:"FastAPI 为什么这么火？",type:"explanation",content:`FastAPI 是最近 5 年最火的 Python 新框架。**菜鸟教程 + 官方文档的共同结论**：
- 性能和 NodeJS/Go 接近（基于 Starlette + Pydantic）
- 自动生成 OpenAPI Swagger 文档（定义完接口就有前后端联调 UI）
- 类型提示 == 自动校验，不用手写一堆 if
- 依赖注入（Depends）写"登录鉴权/数据库 Session"像搭积木

浏览器中使用 fastapi_ 模拟库；真实环境 \`pip install fastapi uvicorn; uvicorn main:app --reload\`。`},{id:2,title:"路径参数 + Pydantic 校验",type:"example",content:"",code:`from fastapi_ import FastAPI, Query
from pydantic_ import BaseModel

app = FastAPI(title="用户中心 API")

class UserCreate(BaseModel):
    name: str
    age: int | None = None
    email: str | None = None

    @classmethod
    def validate(cls, data):
        if "age" in data and not isinstance(data["age"], int):
            raise ValueError("age 必须是整数")
        if len(data.get("name","")) < 2:
            raise ValueError("name 至少 2 字符")
        return cls(**data)

@app.get("/users/{user_id}")
def get_user(user_id: int, detail: str = Query("basic", pattern="^(basic|full)$")):
    return {"user_id": user_id, "detail_level": detail}

@app.post("/users")
def create_user(payload: dict):
    u = UserCreate.validate(payload)
    return {"ok": True, "created": u.__dict__}

print("文档地址:", app.openapi_url)
print("GET /users/42?detail=full →", app.simulate("GET", "/users/42?detail=full"))
print("POST /users {name:Ada,age:36} →",
      app.simulate("POST", "/users", {"name":"Ada","age":36,"email":"ada@ex.com"}))
print("POST /users {name:x}（name 太短） →",
      app.simulate("POST", "/users", {"name":"x"}))`},{id:3,title:"练习：图书 API（GET/POST + 查询过滤）",type:"practice",content:`**任务**：
1. BookCreate Pydantic（模拟校验）：title 非空字符串、price 是数字且 > 0
2. GET /books?title_like=xxx  → 模糊匹配 title（大小写不敏感，部分匹配即可）
3. POST /books → 写入全局列表 books，返回带 id 的新对象
4. 模拟调用：
   - POST 2 本：{"title":"FastAPI实战","price":69.9} / {"title":"Flask 入门","price":39.5}
   - GET /books?title_like=fast
   - GET /books（返回全部）

打印 4 次模拟结果。
`,code:`from fastapi_ import FastAPI
from pydantic_ import BaseModel

app = FastAPI(title="书店 API")
books = []
next_id = 1

class BookCreate(BaseModel):
    title: str
    price: float
    @classmethod
    def validate(cls, data):
        if not isinstance(data.get("title"), str) or len(data["title"].strip())==0:
            raise ValueError("title 不能为空")
        if not isinstance(data.get("price"), (int,float)) or data["price"] <= 0:
            raise ValueError("price 必须 > 0")
        return cls(title=data["title"], price=float(data["price"]))

# 在此实现 GET /books
#   从 request.query_params 取 title_like
#   列表推导过滤

# 在此实现 POST /books
#   payload = request.get_json()
#   校验 OK 后，生成 id，追加，返回 {"id": id, "title":..., "price":...}

# 最后模拟 4 次请求并打印结果



`,answer:`from fastapi_ import FastAPI
from pydantic_ import BaseModel

app = FastAPI(title="书店 API")
books = []
next_id = 1

class BookCreate(BaseModel):
    title: str
    price: float
    @classmethod
    def validate(cls, data):
        if not isinstance(data.get("title"), str) or len(data["title"].strip())==0:
            raise ValueError("title 不能为空")
        if not isinstance(data.get("price"), (int,float)) or data["price"] <= 0:
            raise ValueError("price 必须 > 0")
        return cls(title=data["title"], price=float(data["price"]))

@app.get("/books")
def list_books(request):
    q = (request.query_params.get("title_like") or "").lower()
    result = [b for b in books]
    if q:
        result = [b for b in result if q in b["title"].lower()]
    return {"total": len(result), "items": result}

@app.post("/books")
def add_book(request):
    global next_id
    data = request.get_json() or {}
    book = BookCreate.validate(data)
    obj = {"id": next_id, "title": book.title, "price": book.price}
    books.append(obj); next_id += 1
    return {"ok": True, "data": obj}

print("POST →", app.simulate("POST", "/books", {"title":"FastAPI实战","price":69.9}))
print("POST →", app.simulate("POST", "/books", {"title":"Flask 入门","price":39.5}))
print("GET /books?title_like=fast →", app.simulate("GET", "/books?title_like=fast"))
print("GET /books →", app.simulate("GET", "/books"))`,explanation:`**接口设计心法**：
- 过滤 / 排序 / 分页都用查询串（Query），不写进 path
- 创建用 POST，成功返回 201 + 新资源 id
- 校验统一交给 Pydantic，别在函数里堆 if
- 真实 FastAPI 中 return 值直接 dict 就行，框架自动 JSON 化 + 生成文档`,hint:'request.query_params 字典取 title_like；全局 next_id 自增；模拟参数顺序 ("METHOD", path, body_or_None)',testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "至少插入 2 本",
    "passed": output.count('"ok": true') >= 2 or output.count('ok: True') >= 2 or output.count("'ok': True") >= 2,
    "message": "POST 两次都应成功"
})
_test_results.append({
    "name": "包含 FastAPI实战",
    "passed": "FastAPI实战" in output and "69.9" in output,
    "message": "FastAPI实战 69.9 元应出现"
})
_test_results.append({
    "name": "title_like 模糊搜索正确",
    "passed": "fast" in output.lower() and "Flask 入门" not in (lambda s: s[s.rfind("title_like=fast"):s.rfind("GET /books →")] if "GET /books →" in s else s)(output),
    "message": "搜索 fast 只出 FastAPI 那本，不出 Flask 入门（宽松：至少 fast 相关在本次任务已出现）"
})
_test_results.append({
    "name": "列出全部 2 本",
    "passed": output.count('"title":') >= 6 or output.count("id=") >= 4 or output.count("items") >= 3,
    "message": "最后 GET /books 应返回 2 本"
})`},{id:4,title:"依赖注入 Depends & 安全",type:"explanation",content:`**Depends(get_current_user)** 是 FastAPI 的灵魂：
\`\`\`
async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = decode_token(token)
    if not user: raise HTTPException(401, "未登录")
    return user

@app.get("/me")
async def me(user: User = Depends(get_current_user)):
    return user
\`\`\`
好处：
1. 接口函数不写登录逻辑 → 干净
2. 任何需要登录的接口都复用 Depends(get_current_user)
3. Swagger 文档自动弹出"输入 Bearer Token"对话框

**安全清单**（菜鸟教程安全章节）：
- 永不明文存密码 → 存 hash（passlib / bcrypt）
- JWT 设置短期过期 + refresh token
- 限流（slowapi）防暴力破解
- CORS 白名单，别 \`*\` 全放行`},{id:5,title:"自动 OpenAPI 文档",type:"example",content:"",code:`from fastapi_ import FastAPI

app = FastAPI(
    title="电商 API",
    description="菜鸟教程风格商品/订单接口示例",
    version="1.0.0",
)

@app.get("/products/{pid}")
def product_detail(pid: int):
    return {"pid": pid, "name": f"商品-{pid}"}

print("Swagger UI:", app.docs_url)
print("Redoc:", app.redoc_url)
print("OpenAPI JSON:", app.openapi())`},{id:6,title:"小测验",type:"quiz",content:"下列关于 FastAPI 的说法，哪一个是**错误**的？",options:["FastAPI 会根据类型提示自动校验请求参数","FastAPI 会自动生成 Swagger 文档，无需额外配置","FastAPI 是同步框架，不支持 async/await","Depends 可以在多个接口间复用登录/DB 会话等依赖"],correctAnswer:2,explanation:`**C 错**：FastAPI 是原生异步 + 同步都支持的（def/async def 都能写），底层 Starlette 是标准 ASGI 异步框架。  
这正是它"和 Go/Node 性能比肩"的原因之一。`}],29:[{id:1,title:'Django 的"电池都带了"',type:"explanation",content:`Django 是 Python Web "最大最重的框架"，菜鸟教程"Python Django" 章把它的核心概括成 5 大字母：**MTV + ORM + Admin**。

| 字母 | 含义 | 你会用到 |
|---|---|---|
| M Model | 数据库模型（类 → 表） | models.CharField/IntegerField/ForeignKey |
| T Template | 模板（HTML 里 \`{{ var }}\` 渲染） | Django Template Language |
| V View | 视图函数/类，拿模型塞给模板 | FBV / CBV（ListView/CreateView） |
| URLconf | urls.py 把 URL 分发到视图 | \`path("blog/<int:pk>", views.PostDetail.as_view())\` |
| Admin | 后台管理（零代码 CRUD） | admin.site.register(Post) |

浏览器用 django_ 模拟，本地：\`pip install django; django-admin startproject mysite; cd mysite; python manage.py runserver\``},{id:2,title:"模型 Model & ORM 查询",type:"example",content:"",code:`from django_ import models, simulate as dj

class Author(models.Model):
    name = models.CharField(max_length=50)
    age  = models.IntegerField(default=20)

class Book(models.Model):
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    author = models.ForeignKey(Author, related_name="books")

# 建表
Author.migrate(); Book.migrate()

# 插入
a1 = Author.objects.create(name="鲁迅", age=55)
a2 = Author.objects.create(name="张爱玲", age=75)
Book.objects.create(title="呐喊", price=39.0, author=a1)
Book.objects.create(title="彷徨", price=35.0, author=a1)
Book.objects.create(title="倾城之恋", price=45.0, author=a2)

# 查询
print("全部作者:", Author.objects.all())
print("书名含 '彷':", Book.objects.filter(title__contains="彷"))
print(f"作者鲁迅的全部书: {[b['title'] for b in a1.books.all()]}")
print(f"价格 > 40 的书数: {Book.objects.filter(price__gt=40).count()}")`},{id:3,title:"练习：任务管理（Task CRUD）",type:"practice",content:`**任务**：
1. 定义一个 **Task 模型**：title(Char)、done(Boolean, 默认 False)、priority(Integer, 默认 0)
2. 建表后做 4 件事：
   a) 新增 3 条任务：学Django/做API挑战/写总结（priority 依次 3, 2, 1）
   b) 把"学Django"的 done 标记成 True
   c) 查询"未完成的任务"并按 **priority 从大到小** 排序打印
   d) 删除"写总结"
3. 每一步后都调用 \`Task.objects.all()\` 打印全表，观察变化。
`,code:`from django_ import models

# class Task(models.Model):
#     title = ...
#     done = ...
#     priority = ...


# 建表、增 3 条 → 更新一条 → 过滤排序 → 删除一条 → 打印每步


`,answer:`from django_ import models

class Task(models.Model):
    title = models.CharField(max_length=120)
    done = models.BooleanField(default=False)
    priority = models.IntegerField(default=0)

Task.migrate()

# a) 新增 3 条
t1 = Task.objects.create(title="学Django", priority=3)
t2 = Task.objects.create(title="做API挑战", priority=2)
t3 = Task.objects.create(title="写总结", priority=1)
print("--- 新增 3 条后 ---")
print(Task.objects.all())

# b) 学Django 标记完成
t1.update(done=True)
# 或 Task.objects.filter(title="学Django").update(done=True)
print("
--- 学Django 完成后 ---")
print(Task.objects.all())

# c) 未完成 按 priority 倒序
open_tasks = Task.objects.filter(done=False).order_by("-priority")
print("
--- 未完成任务（高优先级在前）---")
for t in open_tasks:
    print(f"  · [{t['priority']}] {t['title']}  done={t['done']}")

# d) 删除写总结
Task.objects.filter(title="写总结").delete()
print("
--- 删除写总结后 ---")
print(Task.objects.all())`,explanation:'**ORM 查询双下划线 `__` 是 Django 灵魂**：\n- `title__contains="x"` 模糊匹配\n- `price__gt=100` 大于；__gte/__lt/__lte/__in/__range\n- `order_by("-字段")` 减号倒序\n\n**更新两种方式**：单条拿对象改属性 save()（慢，会触发 signal）；批量 filter().update()（一次 SQL，推荐）',hint:'Task.migrate()；.create()；filter(done=False).order_by("-priority")；filter(title=...).update(done=True)/delete()',testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "学Django 变成 done=True",
    "passed": ('"done": True' in output or "'done': True" in output or "done=True" in output) and "学Django" in output,
    "message": "学Django 应被标记为已完成"
})
_test_results.append({
    "name": "写总结被删除",
    "passed": output.count("写总结") <= 2 or "删除" in output,
    "message": "写总结应该最终被删除（最后打印的全表不含它）"
})
_test_results.append({
    "name": "未完成排序正确",
    "passed": ("做API挑战" in output and "priority" in output) or "[2]" in output and "[1]" in output,
    "message": "未完成任务中做API挑战(2)应优先于写总结(1)"
})
_test_results.append({
    "name": "每步至少打印 4 次",
    "passed": output.count("---") >= 6 or output.lower().count("after") >= 2 or output.count("objects.all()") >= 1,
    "message": "要求每步后打印，至少 4 次 all() 输出"
})`},{id:4,title:"视图/模板/URL 串联 & 后台 Admin",type:"explanation",content:'**真实 Django 最小三件套**：\n1. myapp/views.py\n```\ndef post_list(request):\n    return render(request, "post_list.html", {"posts": Post.objects.all()})\n```\n2. myapp/urls.py\n```\npath("", views.post_list, name="post_list"),\n```\n3. project/urls.py → include 到根 URL\n\n**后台一行就有**：\n```\nfrom django.contrib import admin\nfrom .models import Post\nadmin.site.register(Post)\n```\n然后登录 /admin/ 直接增删改查，内置权限、过滤、搜索、分页，写 CMS 爽死。'},{id:5,title:"Auth 认证 & 中间件",type:"example",content:"",code:`from django_ import auth

auth.register("alice", "123456", group="编辑")
auth.register("bob", "666666", group="读者")

def enter_post(user):
    if not auth.is_authenticated(user):
        return "401 未登录"
    if not auth.has_perm(user, "blog.view_post"):
        return "403 没有权限"
    return "欢迎访问文章"

u1 = auth.login("alice", "123456")
u2 = auth.login("bob", "666666")
print("alice 访问:", enter_post(u1))
print("bob   访问:", enter_post(u2))
print("匿名   访问:", enter_post(None))`},{id:6,title:"小测验",type:"quiz",content:"下面哪种情况下，你**不应该**用 Django？",options:["做一个公司 OA / CMS 系统，要求有后台、权限、审核流","做一个 1 个接口的 Webhook 接收服务，部署在资源极小的机器上","做一个内容站点，包含投稿、评论、会员、标签等模块","团队已有 Django 经验，需要快速交付后台"],correctAnswer:1,explanation:`**B 选 Flask / FastAPI 更合适**  
Django 的大而全是用"体积/启动耗时/学习曲线"换回来的。极简小服务拉它的全家桶太重。  
记住选型原则：**CMS/OA/后台首选 Django；微服务/纯 API 首选 FastAPI；轻量/个人/小工具首选 Flask**。`}],30:[{id:1,title:"从 requests 到 Scrapy",type:"explanation",content:`requests 写几十个 URL 的爬取还可以，但**百万级数据、自动去重、深度优先、断点续爬、限速、管道清洗入库**——这些用 requests + for 循环自己写会累死人。

Scrapy 是工业级爬虫框架，菜鸟教程《Python Scrapy 教程》四大核心组件：
| 组件 | 角色 |
|---|---|
| Spider | 你写的主逻辑：start_urls → parse(response) → yield dict 或 yield Request |
| Item | 结构化数据定义（类似 Pydantic/Django Model） |
| Pipeline | 爬下来的数据管道：清洗、去重、存 CSV/JSON、写 MySQL/MongoDB/ES |
| Downloader Middleware | 请求前后拦截：加 UA、加代理、加 Cookie、重试、限速 |

浏览器用 scrapy_ 模拟，本地：\`pip install scrapy; scrapy startproject tutorial; cd tutorial; scrapy genspider quotes quotes.toscrape.com; scrapy crawl quotes\``},{id:2,title:"第一个 Spider",type:"example",content:"",code:`from scrapy_ import Spider, Request, Item, Field

class Quote(Item):
    text = Field()
    author = Field()
    tags = Field()

class QuotesSpider(Spider):
    name = "quotes"
    allowed_domains = ["quotes.toscrape.com"]
    start_urls = [
        "https://quotes.toscrape.com/page/1/",
        "https://quotes.toscrape.com/page/2/",
    ]

    def parse(self, response):
        for quote in response.css("div.quote"):
            yield Quote(
                text   = quote.css("span.text::text").get(),
                author = quote.css("small.author::text").get(),
                tags   = quote.css("a.tag::text").getall(),
            )
        # 翻页
        next_page = response.css("li.next a::attr(href)").get()
        if next_page:
            yield Request(response.urljoin(next_page), callback=self.parse)

print("Spider 开始爬取...")
results = QuotesSpider.run()
print(f"共抓取到 {len(results)} 条名言，前 3 条：")
for q in results[:3]:
    print(" -", q["author"], "→", q["text"][:40], "... tags=", q["tags"])`},{id:3,title:"练习：爬博客标题+日期+作者",type:"practice",content:`**任务**：实现一个 BlogSpider。
模拟 3 个 URL（分别是第 1、2、3 页），每页有 2 条文章。
response 的结构是：
\`\`\`
<article class="post">
  <h2 class="post-title">...</h2>
  <span class="post-date">2024-xx-xx</span>
  <span class="post-author">...</span>
</article>
\`\`\`

要求：
1. 定义 BlogPost Item：title/date/author
2. 爬取 3 页，每页 yield 2 条，总共 **6 条**
3. 输出"作者=alice"的所有文章标题
4. 打印"共抓取 N 条，作者分布（Counter）"
`,code:`from scrapy_ import Spider, Request, Item, Field
from collections import Counter

# class BlogPost(Item):
#     title = Field()
#     date = Field()
#     author = Field()

# class BlogSpider(Spider):
#     name = "blog"
#     start_urls = [f"https://blog.example.com/page/{p}" for p in [1,2,3]]
#     def parse(self, response):
#         for art in response.css("article.post"):
#             yield BlogPost(
#                 title  = art.css("h2.post-title::text").get(),
#                 date   = art.css("span.post-date::text").get(),
#                 author = art.css("span.post-author::text").get(),
#             )

# results = BlogSpider.run()
# print("总数:", len(results))
# 打印 作者分布 Counter
# 打印 alice 的文章标题列表



`,answer:`from scrapy_ import Spider, Request, Item, Field
from collections import Counter

class BlogPost(Item):
    title = Field()
    date = Field()
    author = Field()

class BlogSpider(Spider):
    name = "blog"
    start_urls = [f"https://blog.example.com/page/{p}" for p in [1,2,3]]

    def parse(self, response):
        for art in response.css("article.post"):
            yield BlogPost(
                title  = art.css("h2.post-title::text").get(),
                date   = art.css("span.post-date::text").get(),
                author = art.css("span.post-author::text").get(),
            )

results = BlogSpider.run()
print(f"共抓取 {len(results)} 条")
author_counter = Counter(r["author"] for r in results)
print("作者分布:", dict(author_counter))
alice = [r for r in results if r["author"] == "alice"]
print(f"
alice 的 {len(alice)} 篇文章：")
for a in alice:
    print(f"  · [{a['date']}] {a['title']}")`,explanation:`**Spider 实战要点**：
- start_urls 是种子页，通常只写第 1 页，翻页靠 parse 里判断 next_page 再 yield Request(下一页)
- Item 定义让 Pipeline 知道你要收什么字段，Pipeline 里 \`if "title" not in item: raise DropItem\` 过滤脏数据
- 真实项目里一定要在 settings.py 设 DOWNLOAD_DELAY、自动限速 AUTOTHROTTLE_ENABLED，别把小网站打挂。`,hint:"start_urls 生成 3 条；css 选择器记住 ::text / ::attr(href) 两个伪元素；Counter 计数",testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "抓到 6 条",
    "passed": "6 条" in output or "共抓取 6" in output or "6)" in output,
    "message": "3 页 × 2 条 = 6"
})
_test_results.append({
    "name": "作者分布 alice 2 篇",
    "passed": "'alice': 2" in output or "'alice':2" in output or "alice 2" in output or "alice': 2" in output,
    "message": "模拟数据设定每页 1 alice/1 bob → 共 3 alice？反正好分布输出要有作者计数"
})
_test_results.append({
    "name": "打印 alice 的文章",
    "passed": output.count("alice") >= 2,
    "message": "至少打印一次 alice 的文章列表"
})
_test_results.append({
    "name": "字段存在",
    "passed": "title" in output and "date" in output and "author" in output,
    "message": "抓取数据应含 title/date/author 三字段（提示、字段名、输出出现过都算）"
})`},{id:4,title:"Pipeline & 反爬",type:"explanation",content:`**Pipeline 工作流**：每个 yield 出来的 Item 走 settings 配置的 ITEM_PIPELINES 列表：
\`\`\`
# pipelines.py
class CsvPipeline:
    def open_spider(self, spider):
        self.f = open("out.csv", "w", encoding="utf-8")
    def process_item(self, item, spider):
        self.f.write(f"{item['title']},{item['date']}\\n")
        return item
    def close_spider(self, spider):
        self.f.close()
\`\`\`

**反爬 6 招（菜鸟教程爬虫章节）**：
1. 随机 UA：轮换 User-Agent（scrapy-fake-useragent）
2. 代理池：每个请求用不同 IP
3. 限速 + 随机等待：DOWNLOAD_DELAY 2~5 秒
4. Cookie 池：多个账号轮换
5. 修改请求顺序：别按页面顺序爬，像真人一样跳转
6. 接 selenium / playwright 动态渲染 JS 页面

⚠️ **法律与合规**：
- 爬取前先看 /robots.txt
- 别爬隐私数据、别爬付费墙、别商用他人原创内容
- 高频爬可能会被封 IP，甚至涉嫌非法侵入计算机信息系统`},{id:5,title:"小测验",type:"quiz",content:"关于 Scrapy，下列说法**错误**的是？",options:["yield Request(url, callback=parse_detail) 可以在解析详情页时回调另一个函数","Item 是可选的，直接 yield dict() 也能收数据","Downloader Middleware 可以在请求发送前注入代理和 UA","Scrapy 是单线程同步框架，爬取速度比 requests 还慢"],correctAnswer:3,explanation:"**D 大错特错**：Scrapy 基于 Twisted，是**异步事件驱动**的高并发爬虫框架，单台机器每秒几百请求是基本操作。比你手写 for 循环 requests.get() 的串行版本快几十到上百倍。"}],31:[{id:1,title:"Dash = Python 版 BI 看板",type:"explanation",content:`Dash 是 Plotly 推出的"纯 Python 写交互仪表盘"框架，菜鸟教程"Python Dash 快速入门"总结：  
- **不用写 HTML/JS/React**，全用 Python 写组件
- 组件交互靠 **@app.callback( 输出=Input...)** 自动串联
- 底层图表用 Plotly.js，画出来的图默认带缩放/悬停/下载 PNG
- 完美衔接 Pandas：df → 图 → 组件 → 回传筛选条件 → 刷新图

浏览器环境 dash_ 模拟库 + 文本描述图；本地：\`pip install dash; python app.py 访问 127.0.0.1:8050\``},{id:2,title:"Hello Dash：下拉框 + 柱状图联动",type:"example",content:"",code:`import pandas_ as pd
from dash_ import Dash, html, dcc, Input, Output, callback
import plotly_express_ as px

df = pd.DataFrame({
    "城市":   ["北京","上海","广州","深圳","杭州","成都"]*2,
    "季度":   ["Q1"]*6 + ["Q2"]*6,
    "销售额(万)": [320, 280, 180, 210, 150, 170, 380, 310, 220, 260, 200, 195],
    "利润(万)": [60, 55, 30, 45, 28, 32, 70, 62, 42, 55, 40, 36],
})

app = Dash(__name__)

app.layout = html.Div([
    html.H1("城市销售 Dashboard"),
    dcc.Dropdown(id="col-picker", options=[
        {"label": "销售额", "value": "销售额(万)"},
        {"label": "利润额", "value": "利润(万)"},
    ], value="销售额(万)"),
    dcc.Graph(id="bar-chart"),
    html.Div(id="summary-text", style={"marginTop":20, "fontSize":18}),
])

@callback(
    Output("bar-chart", "figure"),
    Output("summary-text", "children"),
    Input("col-picker", "value"),
)
def update(col):
    fig = px.bar(df, x="城市", y=col, color="季度", barmode="group", title=f"{col} 按城市（分季度）")
    total = df[col].sum()
    return fig, f"📊 总{col}：{total:,.0f} 万元，城市数：{df['城市'].nunique()}"

print(app.describe_layout())`},{id:3,title:"练习：KPI 看板（3 张图 + 指标卡）",type:"practice",content:`**任务**：
1. 构造一个 30 行的 DataFrame：
   - date：2024-01-01 起每隔 1 天 1 行，共 30 天
   - channel：[SEM, SEO, 自然流量, 社交] 每个日期随机循环
   - 访问量 uv：随机 200~2000
   - 转化数 conv：随机 10~200
2. app 布局：
   - H1 标题：7 月运营数据（虽然是 1 月也不管）
   - 4 个 html.Div 指标卡：总 UV、总转化、**转化率 = 总转化/总 UV%**、渠道数
   - dcc.Dropdown：选渠道（含"全部"）
   - dcc.Graph 折线：按日期 UV
   - dcc.Graph 饼：按渠道 转化率
3. callback 根据渠道下拉框值过滤 df，再重新算 4 个指标卡 + 刷新两张图。
4. 最后调用 \`app.callback_trigger(value="SEO")\` 模拟选 SEO，打印输出。
`,code:`import pandas_ as pd
from dash_ import Dash, html, dcc, Input, Output, callback
import plotly_express_ as px

# 1) 构造 df（30 天，4 渠道循环，uv/conv 用固定随机保证可重放）
rows = []
for i, d in enumerate(pd.date_range("2024-01-01", periods=30).astype(str)):
    for c in ["SEM","SEO","自然流量","社交"]:
        seed = (i*4 + ["SEM","SEO","自然流量","社交"].index(c) + 1) * 13
        uv = 200 + (seed*37 % 1800)
        conv = 10 + (seed*53 % 190)
        rows.append({"date": d, "channel": c, "uv": uv, "conv": conv})
df = pd.DataFrame(rows)
df["rate"] = df["conv"] / df["uv"]

# 2) 布局 + 3) callback
# 最后 app.callback_trigger(渠道下拉 id, value="SEO") 并 print


`,answer:`import pandas_ as pd
from dash_ import Dash, html, dcc, Input, Output, callback
import plotly_express_ as px

rows = []
channels = ["SEM","SEO","自然流量","社交"]
for i, d in enumerate(pd.date_range("2024-01-01", periods=30).astype(str)):
    for c in channels:
        seed = (i*4 + channels.index(c) + 1) * 13
        uv = 200 + (seed*37 % 1800)
        conv = 10 + (seed*53 % 190)
        rows.append({"date": d, "channel": c, "uv": uv, "conv": conv})
df = pd.DataFrame(rows)
df["rate"] = df["conv"] / df["uv"]

app = Dash(__name__)
channel_options = [{"label":"全部","value":"全部"}] + [{"label":c,"value":c} for c in channels]

app.layout = html.Div([
    html.H1("📈 2024-01 运营数据看板"),
    html.Div(id="kpi-row"),
    dcc.Dropdown(id="channel-dd", options=channel_options, value="全部"),
    dcc.Graph(id="uv-line"),
    dcc.Graph(id="rate-pie"),
])

@callback(
    Output("kpi-row", "children"),
    Output("uv-line", "figure"),
    Output("rate-pie", "figure"),
    Input("channel-dd", "value"),
)
def update(ch):
    sub = df if ch == "全部" else df[df["channel"] == ch]
    u, c, n = sub["uv"].sum(), sub["conv"].sum(), sub["channel"].nunique()
    r = c / u * 100
    kpis = html.Div([
        html.Div(f"总 UV：{u:,.0f}", className="kpi"),
        html.Div(f"总转化：{c:,.0f}", className="kpi"),
        html.Div(f"转化率：{r:.2f}%", className="kpi"),
        html.Div(f"渠道数：{n}", className="kpi"),
    ])
    fig_line = px.line(sub.groupby("date", as_index=False).agg(uv_sum=("uv","sum")),
                        x="date", y="uv_sum", title=f"UV 每日走势 ({ch})")
    by_ch = sub.groupby("channel", as_index=False).agg(total_conv=("conv","sum"))
    fig_pie = px.pie(by_ch, names="channel", values="total_conv", title=f"转化按渠道占比 ({ch})")
    return kpis, fig_line, fig_pie

result = app.callback_trigger("channel-dd", value="SEO")
print(result["summary"])`,explanation:`**Dash 三板斧**：
- layout 是"静态结构"——写哪些组件、谁有 id
- callback 是"灵魂"——声明式：我要当 X 变的时候刷新 Y。不用自己写事件监听
- DataFrame 始终是主角：聚合 groupby + 绘图一步到位，不用手工拼数组

**本地开发技巧**：\`Dash(__name__).run_server(debug=True)\` 热更新 + 开发工具异常面板，调起来飞快。`,hint:'channel=="全部"就用原 df，否则 df[df.channel==ch]；用 px.line(按日期聚合后的 df)，px.pie(按渠道聚合后的 df)',testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "有 UV 指标数字",
    "passed": "总 UV" in output and "总转化" in output and "转化率" in output,
    "message": "3 个 KPI 必须出现"
})
_test_results.append({
    "name": "渠道 SEM/SEO/社交 里至少 2 个出现",
    "passed": sum(1 for x in ["SEM","SEO","自然流量","社交"] if x in output) >= 2,
    "message": "渠道名要出现（饼图、下拉、聚合、渠道占比都会输出）"
})
_test_results.append({
    "name": "存在 Line 或 Pie 图描述",
    "passed": "UV" in output and ("走势" in output or "Line" in output or "占比" in output or "pie" in output.lower()),
    "message": "至少折线 + 饼图都要被生成"
})
_test_results.append({
    "name": "过滤后的 SEO 渠道",
    "passed": ("SEO" in output),
    "message": "因为触发回调是 value=SEO，SEO 字样至少出现 1 次（且汇总中渠道数应≤2）"
})`},{id:4,title:"多页 & 部署",type:"explanation",content:`**Pages 多页机制（Dash 2.0+）**：
建 pages/ 文件夹，里面每个文件第一行写 \`dash.register_page(__name__)\`，
主 app 里加 \`app.layout = ... dcc.Location(id="url") ... dash.page_container\`，
自动按文件名做路由，写几十个分析页轻轻松松。

**部署方式**：
- 个人/小团队：本地跑 + nginx 反代 + gunicorn
- 企业级：GCP Cloud Run / Azure App Service / AWS Elastic Beanstalk 一键 docker 化
- 公司内网：Dash Enterprise（收费，单点登录/权限）`},{id:5,title:"小测验",type:"quiz",content:`你要做一个"销售数据大屏"，同事每天都要打开看，筛选条件 10+ 个、图 8 张、数据 10 万行。
哪种做法最推荐？`,options:["每次选筛选条件都重新读全量 CSV，简单直接","数据层先用 pandas/DuckDB 做聚合缓存，callback 只读聚合结果；用 clientside_callback 把纯前端交互下放到 JS","全部用 @callback 在后端重算，啥都写 Python 最省事","不用 Dash，全部手写 ECharts + React 更好"],correctAnswer:1,explanation:`**B 是最佳实践**  
10 万行 × 8 张图 × 10+ 条件，全靠后端 Python 算会卡顿：  
- 聚合缓存（甚至物化表 / 预计算 / DuckDB 列存查询）是必须的  
- 前端交互（开关图、改颜色、改标签）用 clientside_callback 写 JS 零回源，体验飞起  
D 确实也可以但开发成本高 5~10 倍，Dash 的价值就在于"纯 Python 也能出 80 分体验"。`}],32:[{id:1,title:'Jupyter 是"可复现研究"的事实标准',type:"explanation",content:`Jupyter = Julia + Python + R 三种语言首字母组合，菜鸟教程《Python Jupyter Notebook》概括它的魅力：
- **单元格（Cell）**：一段 Markdown + 一段代码 + 对应输出，连起来就是一份"可运行的论文"
- **魔法命令**：%timeit / %pwd / %who / %%bash / %%writefile 扩展 100 种能力
- **ipywidgets 交互控件**：滑块/下拉框/复选框，写教程、给老板演示都秒懂
- **一键导出**：HTML / PDF / LaTeX / Slide（PPT）/ .py 纯脚本

浏览器环境用 jupyter_ 模拟库；本地：\`pip install notebook; jupyter notebook\` 或新版 \`jupyter lab\`（更像 IDE）。`},{id:2,title:"Markdown 单元 & 魔法命令",type:"example",content:"",code:`import jupyter_ as nb

nb.markdown(\`\`\`
# 🎉 Jupyter 简介
## 为什么用它？
1. **文档 + 代码 一体** —— 写完就是博客/报告
2. **逐步调试** —— 每段算法跑一下看中间结果
3. **分享友好** —— nbviewer 链接一丢，同行直接看

> "Notebook 让数据分析不再是一次性脚本。"
\`\`\`)

# 魔法命令示例
nb.magic_timeit('[x**2 for x in range(10000)]', number=100)
nb.magic_who()
nb.magic_pwd()
nb.magic_system("echo Hello_from_shell")`},{id:3,title:"练习：ipywidgets 调参演示",type:"practice",content:`**任务**：用 interact 做一个函数 \`f(a, b, func)\`：
- **a**：整数滑块 1~10，默认 3
- **b**：整数滑块 0~20，默认 4
- **func**：下拉菜单，选项  ["add 相加","sub 相减","mul 相乘","pow 幂运算","max 取最大"]

函数根据 func 名选择对应的操作，返回算式字符串 + 结果值（比如 "3 + 4 = 7" 和 7）。
最后 \`nb.interact(f, a=(1,10,3), b=(0,20,4), func=[...])\` 模拟两次：
1. 默认（a=3,b=4,func=add）
2. 用户切换（a=5,b=2,func=pow）
打印两次的输出。
`,code:`import jupyter_ as nb

def f(a, b, func):
    # 在此根据 func 计算 result，并打印 "算式 = 结果"
    # 返回 (description, result)
    pass

# nb.interact(f, a=(1,10,3), b=(0,20,4), func=["add 相加","sub 相减","mul 相乘","pow 幂运算","max 取最大"])
#   → 返回一个 Sim 对象，可用 .simulate(a,b,func) 两次并打印



`,answer:`import jupyter_ as nb

def f(a, b, func):
    if func.startswith("add"):
        res = a + b; sym = "+"
    elif func.startswith("sub"):
        res = a - b; sym = "-"
    elif func.startswith("mul"):
        res = a * b; sym = "*"
    elif func.startswith("pow"):
        res = a ** b; sym = "**"
    else:
        res = max(a, b); sym = "max"
    line = f"{a} {sym} {b} = {res}"
    print(line)
    return line, res

sim = nb.interact(
    f,
    a=(1, 10, 3),
    b=(0, 20, 4),
    func=["add 相加","sub 相减","mul 相乘","pow 幂运算","max 取最大"]
)
print("=== 模拟默认值 ===")
print(sim.simulate(a=3, b=4, func="add 相加"))
print("
=== 模拟 a=5,b=2,func=pow ===")
print(sim.simulate(a=5, b=2, func="pow 幂运算"))`,explanation:`**ipywidgets.interact 黄金组合**：
- 如果参数写区间 tuple (min,max,step) → 自动生成滑块
- 如果写 list[str] → 自动下拉
- 如果写 True/False → 自动复选框
- 如果写 "默认字符串" → 文本输入
完全不用写 UI 代码，几秒钟搭出一个"教学演示器"，在教学圈被称为"杀手级功能"。`,hint:"func 用前缀判断 mul/pow； nb.interact 返回的对象 .simulate(关键字参数=值) 模拟用户操作",testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "add 3+4=7",
    "passed": "3 + 4 = 7" in output or "= 7" in output,
    "message": "默认相加是 3+4=7"
})
_test_results.append({
    "name": "pow 5**2=25",
    "passed": "25" in output and ("5" in output and ("**" in output or "pow" in output)),
    "message": "5 的 2 次方 = 25"
})
_test_results.append({
    "name": "至少两次模拟标题",
    "passed": output.count("模拟") >= 2 or output.count("===") >= 3,
    "message": "应该有两次 simulate 的明确输出标题"
})
_test_results.append({
    "name": "有 5 个下拉选项的描述",
    "passed": sum(1 for x in ["相加","相减","相乘","幂运算","取最大"] if x in output) >= 3,
    "message": "下拉菜单至少要输出 3 个以上选项名"
})`},{id:4,title:"导出 & 版本管理（Git 友好）",type:"explanation",content:`**痛点**：Notebook 的 .ipynb 是 JSON，混代码 + 输出 + 图片，Git 里 diff 一坨。
**菜鸟教程 3 个最佳实践**：
1. \`pip install nbdev nbdime jupytext\`
   - \`nbdiff a.ipynb b.ipynb\` 看 Notebook 级 diff
   - jupytext 把 ipynb ↔ .py（百分号格式）互相转，.py 方便 Git
2. 提交前清输出：\`Cell → All Output → Clear\` 再保存
3. 用 nbconvert 导出：
\`\`\`
# 导出 HTML（可直接发邮件）
jupyter nbconvert report.ipynb --to html --embed-images
# 导出 PDF（需 LaTeX）
jupyter nbconvert report.ipynb --to pdf
# 导出幻灯片 Reveal.js
jupyter nbconvert slides.ipynb --to slides
\`\`\``},{id:5,title:"小测验",type:"quiz",content:"下面哪一项 **不是** Jupyter 的正确使用姿势？",options:["写分析报告，里面穿插图、结论、代码，让别人拿到 .ipynb 就可以逐步复现","做教学演示，ipywidgets 演示模型参数变化后的效果","写 10 万行的生产代码服务端程序，常驻内存跑半年","先在 Notebook 里快速试验算法，稳定后再提取到 .py 文件做工程化"],correctAnswer:2,explanation:`**C 是反面典型**  
Notebook 是"探索 + 汇报 + 教学"的神器，但**不适合写生产服务**：全局变量、状态持久、顺序错乱（你先点 Cell 5 再点 Cell 2）、难单元测试、难调试长任务……  
正确姿势是 D：**Notebook 做原型；成熟了就整理成 Python 模块 + FastAPI/Flask/CLI 部署。**`}],33:[{id:1,title:"Pillow：Python 图像处理标配",type:"explanation",content:`Pillow 是 PIL（Python Imaging Library）的活跃分支。菜鸟教程 Pillow 章总结：
- 读写 30+ 种图片格式：JPG/PNG/GIF/WebP/BMP...
- 几何变换：缩放/裁剪/旋转/翻转
- 像素级处理 & ImageDraw 画图
- 滤镜（模糊/锐化/边缘检测）、合成与水印

浏览器环境 pillow_ 模拟库；本地：\`pip install pillow; from PIL import Image, ImageDraw, ImageFilter, ImageFont\``},{id:2,title:"基本 IO + 变换 + 滤镜",type:"example",content:"",code:`from pillow_ import Image, ImageFilter, ImageDraw

img = Image.new("RGB", (400, 300), color=(135, 206, 235))
draw = ImageDraw.Draw(img)
draw.rectangle([(50, 220), (350, 280)], fill=(34, 139, 34))      # 草地
draw.ellipse([(290, 30), (370, 110)], fill=(255, 215, 0))       # 太阳
for x in range(5):
    draw.ellipse([(80+x*40, 60), (130+x*40, 95)], fill=(255,255,255))  # 几朵云

img_small = img.resize((200, 150))
img_rot = img.rotate(15)
img_blur = img.filter(ImageFilter.GaussianBlur(radius=3))

print(img.describe())
print(img_small.describe())
print("旋转 15°:", img_rot.describe())
print("高斯模糊:", img_blur.describe())`},{id:3,title:"实战：批量头像生成 + 水印",type:"practice",content:`**任务**：为用户列表 [小红、小刚、小丽、阿强、小明] 批量生成"首字母头像"。
1. 画布 128×128，随机色背景（背景色 = hash(name)%360 映射到 HSL 色轮）
2. 中心用大号字写名字**第一个字**（用简单的 draw 矩形占位也可以，我们用一个 70×70 的白色正方形 + draw.text 画首字）
3. **右下角水印**：浅灰色字 "Python Quest"（字号 12）
4. 对每张图片：保存为 /tmp/avatars/{name}.png（用 img.save(path) 模拟，不写真实磁盘）
5. 打印所有"已保存 xxxx.png (128×128, bg=颜色)"
`,code:`from pillow_ import Image, ImageDraw

names = ["小红","小刚","小丽","阿强","小明"]

# 辅助：hash(name) 映射 RGB
def bg_color(name):
    h = sum(ord(c) for c in name) % 360
    s = 0.6; l = 0.55
    c = (1 - abs(2*l - 1)) * s
    x = c * (1 - abs((h/60) % 2 - 1))
    m = l - c/2
    if h<60:   R,G,B = c,x,0
    elif h<120: R,G,B = x,c,0
    elif h<180: R,G,B = 0,c,x
    elif h<240: R,G,B = 0,x,c
    elif h<300: R,G,B = x,0,c
    else:       R,G,B = c,0,x
    return (int((R+m)*255), int((G+m)*255), int((B+m)*255))

# 主循环 for name in names: 生成头像 -> save




`,answer:`from pillow_ import Image, ImageDraw

names = ["小红","小刚","小丽","阿强","小明"]

def bg_color(name):
    h = sum(ord(c) for c in name) % 360
    s = 0.6; l = 0.55
    c = (1 - abs(2*l - 1)) * s
    x = c * (1 - abs((h/60) % 2 - 1))
    m = l - c/2
    if h<60:   R,G,B = c,x,0
    elif h<120: R,G,B = x,c,0
    elif h<180: R,G,B = 0,c,x
    elif h<240: R,G,B = 0,x,c
    elif h<300: R,G,B = x,0,c
    else:       R,G,B = c,0,x
    return (int((R+m)*255), int((G+m)*255), int((B+m)*255))

for name in names:
    img = Image.new("RGB", (128, 128), color=bg_color(name))
    draw = ImageDraw.Draw(img)
    # 中心白方框（代替字体绘制）+ 首字
    draw.rectangle([(29,29),(99,99)], fill=(255,255,255))
    draw.text((48, 42), name[0], fill=(30,41,59))
    # 水印（右下，浅色）
    draw.text((128-72, 128-16), "Python Quest", fill=(240,240,240))
    path = f"/tmp/avatars/{name}.png"
    img.save(path)
    print(f"✅ 已保存 {name}.png  (128×128, bg={bg_color(name)})")`,explanation:`**Pillow 工业流程**：
- 业务里批量生成缩略图 = \`img.thumbnail((200,200))\`（不拉伸、保持比例，比 resize 更稳）
- 文字必须 \`ImageFont.truetype("msyh.ttc", 36)\` 加载系统字体，否则中文方块；跨平台要把 .ttf 打包到项目
- 图片合成：底图.paste(logo, (x,y), logo)  第 3 个参数是 alpha 蒙版，透明 PNG 合成专用
- 滤镜批量：ImageFilter.SHARPEN / CONTOUR / EMBOSS / GaussianBlur(r=?) 配合 map 很优雅
`,hint:'bg_color(name) 返回一个 3 元素元组给 Image.new；draw.rectangle 画中心方块；draw.text( (x,y), 字符, fill=RGB )；img.save("/tmp/avatars/name.png")',testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "5 人都保存成功",
    "passed": output.count("已保存") == 5,
    "message": "names 共 5 个，要打印 5 条保存成功"
})
_test_results.append({
    "name": "包含小红/小刚/小丽/阿强/小明",
    "passed": all(n in output for n in names := ["小红","小刚","小丽","阿强","小明"]),
    "message": "5 个用户名都要出现"
})
_test_results.append({
    "name": "尺寸 128×128",
    "passed": "128×128" in output or "128x128" in output or "(128, 128)" in output,
    "message": "头像尺寸固定 128×128"
})
_test_results.append({
    "name": "水印或首字或背景色存在",
    "passed": "Python Quest" in output or "bg=" in output or sum(1 for n in names if n[0] in output) >= 2,
    "message": "水印/首字/背景色描述至少有一个输出体现"
})`},{id:4,title:"像素处理 & 二值化验证码",type:"explanation",content:'`img.getpixel((x,y))` 取单个像素 RGB，`img.putpixel((x,y), (0,0,0))` 改单个，配合 for x,y 可做任意算法。\n最经典小项目：**图片二值化 → 去噪 → OCR 前处理**\n```\n# 灰度 + 阈值二值化\ng = img.convert("L")\nfor x in range(g.width):\n    for y in range(g.height):\n        p = g.getpixel((x,y))\n        g.putpixel((x,y), 255 if p > 140 else 0)  # 阈值 140\n```\n再配合 pytesseract（包装 Tesseract OCR），能识别简单验证码/扫描件文字。'},{id:5,title:"小测验",type:"quiz",content:"下列操作中，**无法**用 Pillow 直接完成的是？",options:["把 1000 张图片批量缩放成 800 宽、质量 80 另存为 webp","在证件照上画一个红色印章图案（圆角矩形 + 文字）","从一段 MP4 视频里每隔 2 秒抽取一帧保存成图片","把人像照片的背景扣除，换成纯色"],correctAnswer:2,explanation:"**C 需要 FFmpeg 或 OpenCV**  \nPillow 只处理**静态图片**，不包含视频解码器。\n抽帧常规做法：`ffmpeg -i input.mp4 -vf fps=0.5 frame_%03d.jpg`（CLI）或 Python 用 `opencv-python / imageio-ffmpeg / moviepy`。  \nB 用 ImageDraw.rounded_rectangle + polygon 可以画印章；D 用 rembg（基于 U²-Net）等库配合 Pillow 后景合成是主流方案。"}],34:[{id:1,title:"量化不是赌博，是工程",type:"explanation",content:`**量化交易** = 用历史数据"回测"一个策略的期望收益/回撤，再上线真金白银跑。
菜鸟教程 + 业界共识的**金标准流程**：
1. 选标的（股票/币/期货/期权）→ 拿 K 线数据
2. 产生交易信号（MA 金叉/RSI/多因子/机器学习预测...）
3. 回测：信号转成买卖操作，算账户净值曲线
4. **指标检验**：年化收益、夏普比率、最大回撤、胜率、盈亏比
5. 样本外测试 / 滚动训练 / 模拟盘 3 个月
6. 上实盘 + 风控（仓位上限、止损、熔断、多标的分散）

本关用"双均线策略"走完流程，学会方法论比赚钱重要 ⚠️ **投资有风险，不构成任何投资建议**。`},{id:2,title:"K 线数据 & 指标（SMA）",type:"example",content:`：构造 200 个交易日的模拟收盘价，计算 5 日均线、20 日均线，然后画图。
`,code:`import pandas_ as pd
import numpy_ as np
from matplotlib_ import plt
import random

random.seed(42); np.seed_(42)
dates = pd.date_range("2023-07-01", periods=200).astype(str)
price = 100.0
closes = []
for _ in range(200):
    drift = random.uniform(-0.008, 0.012)
    noise = random.gauss(0, 0.015)
    price *= (1 + drift + noise)
    closes.append(round(price, 2))

df = pd.DataFrame({"date": dates, "close": closes})
df["ma5"]  = df["close"].rolling(5).mean()
df["ma20"] = df["close"].rolling(20).mean()

print("前 10 行 / 后 10 行：")
print(df.head(10))
print(df.tail(10))

plt.figure(figsize=(12,5))
plt.plot(df["date"], df["close"], label="收盘价", linewidth=1, alpha=.8)
plt.plot(df["date"], df["ma5"],   label="MA5",  linewidth=1.2)
plt.plot(df["date"], df["ma20"],  label="MA20", linewidth=1.4)
every = 25
plt.xticks(ticks=list(range(0, 200, every)), labels=[dates[i] for i in range(0, 200, every)])
plt.title("模拟股价 + MA5/MA20")
plt.legend(); plt.grid(alpha=.3)
plt.render("k线均线")`},{id:3,title:"练习：双均线策略回测 + 输出风险指标",type:"practice",content:`**任务**：用上面 200 天的 df，实现双均线策略 + 回测。

**信号规则**：
- **金叉买入**：MA5 上穿 MA20（昨日 MA5<=MA20 且今日 MA5>MA20）→ 持仓 1 手
- **死叉卖出**：MA5 下穿 MA20（昨日 MA5>=MA20 且今日 MA5<MA20）→ 空仓 0 手
- 首日空仓，最多持有 1 手，不能卖空
- 没有手续费、没有滑点

**回测框架**：
1. 资金 initial_capital = 100000
2. 每日：\`净值 = cash + position*今日close\`
3. 记录 daily 净值序列
4. 最终输出：
   - **总收益率%** = (最终-初始)/初始*100
   - **年化收益%** = 总收益 / (200/252) （因为 1 年约 252 交易日）
   - **最大回撤%**（定义：从每个峰值之后最深跌到谷底的百分比，取最大）
   - **夏普比率** ≈ \`(日收益率均值 / 日收益率标准差) * sqrt(252)\`
   - **买卖次数**、**最后持仓状态**
   - 画出：账户净值曲线 + benchmark(持有不动) 曲线
`,code:`import pandas_ as pd
import numpy_ as np
import random
from matplotlib_ import plt

random.seed(42); np.seed_(42)
dates = pd.date_range("2023-07-01", periods=200).astype(str)
price = 100.0
closes = []
for _ in range(200):
    drift = random.uniform(-0.008, 0.012)
    noise = random.gauss(0, 0.015)
    price *= (1 + drift + noise); closes.append(round(price,2))

df = pd.DataFrame({"date": dates, "close": closes})
df["ma5"] = df["close"].rolling(5).mean()
df["ma20"]= df["close"].rolling(20).mean()
df = df.dropna().reset_index(drop=True)

# -------- 实现回测 --------
# init: cash=100000, position=0, trades=0, net_values=[...]
# for i in range(1, len(df)):
#     yesterday = df.iloc[i-1]; today = df.iloc[i]
#     计算 signal（金叉 1 / 死叉 -1 / 其他 0）
#     若金叉且 position==0: 买入 1 手，cash -= close, position=1, trades++
#     若死叉且 position==1: 卖出 1 手，cash += close, position=0, trades++
#     nv = cash + position * today.close
# 再计算 4 个指标 + 画图



`,answer:`import pandas_ as pd
import numpy_ as np
import random
from matplotlib_ import plt
import math

random.seed(42); np.seed_(42)
dates = pd.date_range("2023-07-01", periods=200).astype(str)
price = 100.0
closes = []
for _ in range(200):
    drift = random.uniform(-0.008, 0.012)
    noise = random.gauss(0, 0.015)
    price *= (1 + drift + noise); closes.append(round(price,2))

df = pd.DataFrame({"date": dates, "close": closes})
df["ma5"]  = df["close"].rolling(5).mean()
df["ma20"] = df["close"].rolling(20).mean()
df = df.dropna().reset_index(drop=True)

cash = 100000.0
position = 0
trades = 0
net_values = []
for i in range(len(df)):
    today = df.iloc[i]
    signal = 0
    if i >= 1:
        y = df.iloc[i-1]
        if y["ma5"] <= y["ma20"] and today["ma5"] > today["ma20"]:
            signal = 1
        elif y["ma5"] >= y["ma20"] and today["ma5"] < today["ma20"]:
            signal = -1
    if signal == 1 and position == 0:
        cash -= float(today["close"]); position = 1; trades += 1
    elif signal == -1 and position == 1:
        cash += float(today["close"]); position = 0; trades += 1
    nv = cash + position * float(today["close"])
    net_values.append(nv)

df["net"]  = net_values
df["hold"] = 100000 / float(df.iloc[0]["close"]) * df["close"]   # benchmark 持有不动

# ---- 指标 ----
init, final = 100000.0, df["net"].iloc[-1]
total_ret = (final - init) / init * 100
years = len(df) / 252.0
ann_ret = total_ret / years if years > 0 else 0

daily_ret = pd.Series(df["net"]).pct_change().dropna().tolist()
mean_r = sum(daily_ret)/len(daily_ret)
std_r  = (sum((r-mean_r)**2 for r in daily_ret)/len(daily_ret))**0.5
sharpe = (mean_r/std_r) * (252**0.5) if std_r > 0 else 0

peak, max_dd = df["net"].iloc[0], 0.0
for v in df["net"]:
    if v > peak: peak = v
    dd = (peak - v) / peak * 100
    if dd > max_dd: max_dd = dd

print(f"=== 双均线回测结果 ===")
print(f"交易次数: {trades}  |  期末持仓: {'持有 1 手' if position==1 else '空仓'}")
print(f"总收益率:   {total_ret:.2f}%")
print(f"年化收益:   {ann_ret:.2f}%")
print(f"最大回撤:   {max_dd:.2f}%")
print(f"夏普比率:   {sharpe:.2f}")
print(f"期末净值:   {final:.2f}")
print(f"期末bench:  {df['hold'].iloc[-1]:.2f}")

plt.figure(figsize=(12,5))
plt.plot(df["date"], df["net"],  label="策略净值", color="#ef4444")
plt.plot(df["date"], df["hold"], label="买入持有", color="#2563eb", alpha=.7)
every = 20
idxs = list(range(0, len(df), every))
plt.xticks(ticks=idxs, labels=[df["date"].iloc[i] for i in idxs])
plt.title("双均线策略 vs 持有不动")
plt.legend(); plt.grid(alpha=.3)
plt.render("双均线回测")`,explanation:`**关键理解 3 点**：
1. **信号与执行必须分开**：今日收盘后出现的信号，只能用"今日收盘价/明日开盘价"成交，不能偷看未来价格（否则就是"未来函数"，回测漂亮实盘亏光）
2. **最大回撤 > 年化收益 更重要**：很多策略赚 30%/年但最大回撤 50%，普通人拿不住 → 直接清盘在谷底
3. **夏普 1 是及格线**：<1 基本是靠运气；>1.5 比较稳；>2 很优秀（实盘能长期维持 2 以上非常少）

**后续进阶方向**：换标的（指数ETF/行业轮动）、加止损/止盈、多因子打分、蒙特卡洛压力测试、参数不敏感检验、实盘滑点 + 手续费 + 税费（佣金/印花税很伤）。`,hint:"ma5 上穿 ma20 定义是 i-1 日 ma5 ≤ ma20 且 i 日 ma5 > ma20；最大回撤遍历过程中维护一个 peak，每个点算 (peak-val)/peak%；夏普 = mean(daily_ret)/std(daily_ret)*√252",testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "4 大风险指标齐全",
    "passed": all(x in output for x in ["总收益率","年化收益","最大回撤","夏普比率"]),
    "message": "4 个指标标题都必须打印"
})
_test_results.append({
    "name": "交易次数 > 0",
    "passed": ("交易次数" in output) and (lambda s: any(f"交易次数: {n}" in s for n in ["1","2","3","4","5","6","7","8","9","10"]))(output),
    "message": "200 天里至少会发生 2 次以上金叉/死叉"
})
_test_results.append({
    "name": "净值曲线绘制",
    "passed": ("策略净值" in output or "双均线回测" in output) and "持有不动" in output,
    "message": "图的 legend/标题/渲染描述中要有 2 条对比曲线"
})
_test_results.append({
    "name": "百分比指标带 % 号且数值合理",
    "passed": output.count("%") >= 3 and (
        any(tok in output for tok in [".0%", ".1%", ".2%", ".3%", ".4%", ".5%", ".6%", ".7%", ".8%", ".9%"])
    ),
    "message": "至少 3 个带小数点的百分数"
})`},{id:4,title:"进阶：仓位管理 Kelly 公式 & 再平衡",type:"explanation",content:`**仓位**比"选什么标的"更影响长期收益。
经典 Kelly 仓位：\`f^* = (p*b - q)/b\`（p 胜率，q=1-p，b 盈亏比），Kelly 值乘 0.3~0.5 是半 Kelly，更稳。
示例：p=0.55，b=1.2（赢 1.2 元/输 1 元）→ Kelly=(0.55*1.2-0.45)/1.2=0.21/1.2=0.175 → 每次放 8%（半 Kelly）。

**再平衡（Rebalance）**：把 A 股票 60%、债券 40% 目标权重每月调回，高抛低吸，波动率显著降低。这是机构"全天候组合"的基石。`},{id:5,title:"不要踩这些坑",type:"explanation",content:`量化新手**最容易亏大钱的 6 个坑**：
1. **过拟合**：参数 10 个调半年，回测年年翻倍 → 实盘亏（样本外必崩）
   - 解法：参数越少越好、walk-forward 滚动验证
2. **未来函数**：用了当日收盘数据当信号再按当日收盘交易 → 回测永远赚
   - 解法：所有信号 shift(1) 再和价格对齐
3. **幸存者偏差**：只选现在还存在的 100 只牛股回测 → 忽略 50 只退市
4. **忽略手续费滑点**：A股买卖一次成本 0.1~0.3%，高频策略吃掉全部利润
5. **单标的满仓梭哈**：黑天鹅（退市/停牌/爆雷）直接死
6. **只看收益不看回撤和破产概率**：赢率 51% 的赌局加 2 倍杠杆，长期必破产

⚠️ **最后提醒**：量化是"概率 + 工程 + 风控"的组合拳。先把所有风险吃透，再考虑用真钱跑。祝你在学习中收获满满，不要用本关代码直接交易！💡`},{id:6,title:"回测框架输出 & 小测验",type:"quiz",content:`你写了一个动量策略，回测报告显示"年化 80%，最大回撤 5%，夏普 3.5，样本内 5 年都赚钱"。
下一步最该做什么？`,options:["直接上实盘满仓，借钱加杠杆梭哈，3 年财富自由","换一段**样本外**时间或换一批从未看过的标的重跑；检查是否有未来函数/偷价；降低仓位先跑模拟盘 3 个月","把代码封装成课程卖 1999 元，让别人先替我跑","把回测曲线截图发朋友圈，立帖为证自己是下一个巴菲特"],correctAnswer:1,explanation:`**B 是唯一正确的做法**：先验证鲁棒性，再从小仓位一步步来。
其他三个选项都是新手经典死法。记住巴菲特的名言："第一条不要亏钱，第二条永远记住第一条。"`},{id:7,title:"毕业：量化全流程全景图",type:"explanation",content:`🎓 **恭喜通关最后一关（第 34 关）！**

**34 关全景**：
- 🐍 1~9 关  Python 基础（数据结构/函数/文件/OOP/异常）
- 🧠 10~18 关 Python 进阶（字符串深入、模块包、OOP 进阶、异常、os/shutil、生成器装饰器、标准库、综合实战）
- 🌐 19 Requests / 20 re / 21 collections / 22 itertools
- 📊 23 NumPy / 24 Pandas / 25 Matplotlib / 26 SciPy
- 🛰️ 27 Flask / 28 FastAPI / 29 Django / 30 Scrapy
- 📈 31 Dash / 📓 32 Jupyter / 🎨 33 Pillow / 💹 34 量化交易实战

**下一步**：
1. 把每关的挑战都打一遍，把代码拷到本地真实 Python 环境跑通
2. 选一个你最感兴趣的方向（API/数据/爬虫/可视化/量化）做一个真实项目
3. 所有代码存 GitHub，写 README，再回 Python Quest 第 18 关把项目加进去
4. 保持每天 30 分钟编码节奏！🚀

**Python Quest 全体导师祝你前程似锦！💫**`}],35:[{id:1,title:"R 语言简介",type:"explanation",content:`**R** 是一门专为**统计计算和图形**设计的语言，由新西兰奥克兰大学的 Ross Ihaka 和 Robert Gentleman 于 1995 年发布。

**R 的核心特点**：
- 📊 **统计分析首选**：CRAN 有超过 20,000 个统计包
- 🖼️ **强大可视化**：ggplot2 被誉为" Grammar of Graphics "的标杆实现
- 🔄 **向量语言**：原生支持向量化操作，代码简洁高效
- 🧪 **学术界标准**：统计学、生物信息学、社会科学论文的主流工具

**应用场景**：
- 统计建模与假设检验
- 数据挖掘与机器学习（caret、randomForest）
- 生物信息学（Bioconductor 2000+ 包）
- 金融分析与风险管理
- 交互式报告（R Markdown、Shiny）

本关用 **Python 模拟 R 的核心语法和数据操作思想**，帮你快速建立 R 思维 🚀`},{id:2,title:"向量与基本运算",type:"example",content:`R 中最基础的数据结构是**向量（vector）**——一组同类型数据的有序集合。
R 的向量化操作可以避免写循环，让代码更简洁。`,code:`import numpy_ as np

# R 的 c() 函数 = Python 的 np.array
# R: x <- c(1, 2, 3, 4, 5)
x = np.array([1, 2, 3, 4, 5])
print("向量 x:", x)

# R 向量化运算：无需循环，逐元素操作
# R: y <- x * 2 + 1
y = x * 2 + 1
print("x * 2 + 1 =", y)

# R 的 cbind/rbind = 按列/行合并
# R: m <- cbind(x, y)
m = np.column_stack((x, y))
print("合并矩阵:\\n", m)

# R 的 summary() = 统计摘要
# R: summary(x)
print("均值:", np.mean(x))
print("标准差:", np.std(x))
print("最小值:", np.min(x))
print("最大值:", np.max(x))
print("中位数:", np.median(x))

# R 的 seq() = 生成序列
# R: s <- seq(0, 10, by=2)
s = np.arange(0, 11, 2)
print("序列 seq:", s)

# R 的 rep() = 重复
# R: r <- rep(1:3, times=2, each=1)
r = np.tile(np.array([1, 2, 3]), 2)
print("重复 rep:", r)`,hint:"R 的向量操作对应 NumPy 数组操作：c() → np.array，seq() → np.arange，rep() → np.tile"},{id:3,title:"数据框 (data.frame)",type:"practice",content:`**数据框（data.frame）** 是 R 中最常用的数据结构，相当于 Python 的 DataFrame——
每列是一个变量，每行是一条观测记录。`,code:`import pandas_ as pd
import numpy_ as np

# R: df <- data.frame(...)
# 创建学生成绩数据框
df = pd.DataFrame({
    "name":   ["张三", "李四", "王五", "赵六", "钱七"],
    "age":    [20, 21, 19, 22, 20],
    "score":  [88, 95, 72, 90, 83],
    "gender": ["M", "F", "M", "F", "M"]
})

print("数据框预览：")
print(df)
print()

# R: head(df, 3) 查看前几行
print("前 3 行:")
print(df.head(3))
print()

# R: df$score 访问列
print("成绩列:", df["score"].values)
print()

# R: subset(df, score > 80) 筛选
# 筛选成绩 > 80 的学生
high_score = df[df["score"] > 80]
print("高分学生（>80）:")
print(high_score)
print()

# R: df$grade <- ifelse(df$score >= 90, "A", ...) 添加新列
# 添加等级列
df["grade"] = df["score"].apply(lambda s: "A" if s >= 90 else ("B" if s >= 80 else "C"))
print("添加等级后：")
print(df)`,hint:'R 的 $ 取列 → pandas 的 df["col"]；R 的 subset() → pandas 的布尔索引；R 的 ifelse() → np.where 或 apply',answer:"运行代码后，数据框包含 5 名学生的姓名、年龄、成绩、性别和等级（A/B/C）。筛选出 3 名成绩>80 的学生。"},{id:4,title:"dplyr 数据处理",type:"example",content:`**dplyr** 是 R 中最流行的数据处理包，提供了"动词"式的数据操作语法。
核心函数：**filter**（筛选）、**mutate**（变形）、**summarise**（汇总）、**group_by**（分组）。

通过 **管道操作符 %>%** 串联操作，代码可读性极高。`,code:`import pandas_ as pd
import numpy_ as np

# 模拟销售数据
np.random.seed(42)
sales = pd.DataFrame({
    "product": np.random.choice(["A", "B", "C"], 100),
    "region":  np.random.choice(["East", "West", "South", "North"], 100),
    "sales":   np.random.randint(50, 500, 100),
    "profit":  np.random.randint(10, 100, 100)
})

print("原始数据（前 5 行）:")
print(sales.head())
print()

# dplyr 管道 %>% 示例（用 pandas 链式操作模拟）
# R: sales %>% filter(region == "East") %>% mutate(profit_rate = profit/sales) %>% summarise(total=sum(sales))
result = (sales
    .query("region == 'East'")           # filter(region == "East")
    .assign(profit_rate=lambda d: d["profit"] / d["sales"])  # mutate(profit_rate = profit/sales)
    .groupby("product")                   # group_by(product)
    .agg(total_sales=("sales", "sum"),     # summarise(total_sales = sum(sales))
         avg_profit=("profit_rate", "mean"),
         count=("sales", "count"))
    .reset_index()
    .sort_values("total_sales", ascending=False)
)

print("dplyr 管道操作结果：")
print(result)
print()

# dplyr::arrange() 排序 + top_n()
top3 = sales.nlargest(3, "sales")[["product", "region", "sales"]]
print("销量 Top 3：")
print(top3)`,hint:"R 的 %>% 管道 → pandas 的方法链式调用；filter() → query() 或布尔索引；mutate() → assign()；summarise() → agg()"},{id:5,title:"ggplot2 可视化",type:"practice",content:`**ggplot2** 基于"图形语法（Grammar of Graphics）"，通过图层组合构建可视化：
数据 → 映射 → 几何对象 → 统计变换 → 坐标系统 → 主题。

本练习用 matplotlib 模拟 ggplot2 的绘图思路。`,code:`import pandas_ as pd
import numpy_ as np
from matplotlib_ import plt

# 准备数据：不同地区不同产品的销售均值
np.random.seed(42)
data = pd.DataFrame({
    "region":  np.repeat(["East", "West", "South", "North"], 3),
    "product": np.tile(["A", "B", "C"], 4),
    "sales":   np.random.randint(100, 500, 12)
})

# 按 region 和 product 分组计算平均销售额
grouped = data.groupby(["region", "product"])["sales"].mean().reset_index()
print("分组统计数据：")
print(grouped)
print()

# 模拟 ggplot2 的绘图思路
# ggplot(data, aes(x=region, y=sales, fill=product)) + geom_bar(stat="identity", position="dodge")
fig, ax = plt.subplots(figsize=(10, 6))

regions = data["region"].unique()
products = data["product"].unique()
x = np.arange(len(regions))
width = 0.25

for i, prod in enumerate(products):
    vals = grouped[grouped["product"] == prod]["sales"].values
    ax.bar(x + i * width, vals, width, label=f"Product {prod}")

ax.set_xlabel("Region")
ax.set_ylabel("Average Sales")
ax.set_title("Sales by Region and Product (ggplot2 style)")
ax.set_xticks(x + width)
ax.set_xticklabels(regions)
ax.legend()
plt.tight_layout()
plt.show()

# ggplot2 的 geom_point() + geom_smooth() 散点+拟合
fig2, ax2 = plt.subplots(figsize=(8, 5))
x_data = np.linspace(0, 10, 50)
y_data = 2 * x_data + np.random.randn(50) * 3
ax2.scatter(x_data, y_data, alpha=0.6, label="data points")
# 线性拟合（geom_smooth method="lm"）
z = np.polyfit(x_data, y_data, 1)
p = np.poly1d(z)
ax2.plot(x_data, p(x_data), "r--", linewidth=2, label="lm fit")
ax2.set_title("Scatter + Linear Smooth (geom_smooth)")
ax2.legend()
plt.tight_layout()
plt.show()

print("两个图表已生成 ✅")`,hint:"ggplot2 的 aes() → 设置 x/y 映射；geom_bar()/geom_point() → plt.bar()/plt.scatter()；geom_smooth() → np.polyfit 线性拟合"},{id:6,title:"统计假设检验",type:"explanation",content:`**统计假设检验** 是 R 语言的核心应用之一，用于判断样本数据是否支持某个假设。

**主要概念**：
- **零假设 H₀**：我们默认的假设（如"两组均值无差异"）
- **备择假设 H₁**：与 H₀ 对立的假设
- **p 值**：在 H₀ 成立下观察到当前结果的概率，p < 0.05 通常表示统计显著
- **置信区间**：真实参数可能取值的范围

**常见检验**：
| 检验方法 | 用途 | Python 对应 |
|---------|------|------------|
| t.test() | 两组均值差异 | scipy.stats.ttest_ind |
| wilcox.test() | 非参数检验 | scipy.stats.wilcoxon |
| chisq.test() | 卡方独立性检验 | scipy.stats.chi2_contingency |
| anova() | 多组均值比较 | scipy.stats.f_oneway |
| cor.test() | 相关性检验 | scipy.stats.pearsonr |

**决策流程**：计算检验统计量 → 求 p 值 → 若 p < α(0.05) 则拒绝 H₀ → 报告效应量和置信区间。

R 在假设检验方面提供了最全面的函数库，是科学研究的标准工具 🔬`}],36:[{id:1,title:"Julia 语言简介",type:"explanation",content:`**Julia** 是一门专为**科学计算、数值分析和高性能计算**设计的动态编程语言，
由 MIT 的 Jeff Bezanson、Stefan Karpinski 和 Viral Shah 于 2012 年发起。

**Julia 的核心特性**：
- ⚡ **JIT 编译**：通过 LLVM 即时编译，性能接近 C/C++
- 🔀 **多重派发（Multiple Dispatch）**：根据函数参数的类型选择不同方法
- 🔢 **一流的类型系统**：类型可以作为参数传递，支持类型稳定编程
- 🧮 **内置数学库**：线性代数、随机数、FFT 等开箱即用
- 🔄 **可调用 C/Fortran/Python**：通过 ccall、PyCall 无缝对接
- 🎯 **专为数值优化**：循环速度接近 C，数组索引从 1 开始（兼容 MATLAB 习惯）

**典型应用**：
- 科学计算与工程仿真（DifferentialEquations.jl）
- 机器学习（Flux.jl、DifferentiableProgramming.jl）
- 量子计算（Yao.jl）
- 气象气候模型（ClimateMachine.jl）
- 金融建模

本关用 **Python 模拟 Julia 的核心编程范式**，帮你快速上手 Julia 思维 🚀`},{id:2,title:"变量与类型",type:"example",content:`Julia 是**强类型**语言，但类型推断让你几乎不用手动标注。
理解类型系统是写出高性能 Julia 代码的关键。`,code:`import numpy_ as np

# Julia 的变量绑定（动态类型，但有类型推断）
# x = 42          # Int64
# y = 3.14        # Float64
# z = "hello"     # String
x, y, z = 42, 3.14, "hello"
print(f"x={x} (type: {type(x).__name__})")
print(f"y={y} (type: {type(y).__name__})")
print(f"z={z} (type: {type(z).__name__})")

# Julia 的类型注解（:type 运算符）
# typeof(x) → Int64
print()
print("类型检查:")
print(f"  is_integer(x): {isinstance(x, int)}")
print(f"  is_float(y): {isinstance(y, float)}")
print(f"  is_string(z): {isinstance(z, str)}")

# Julia 的抽象类型（用于多重派发）
# abstract type Number end
# abstract type Real <: Number end
# Int <: Real <: Number
print()
print("类型层次 (Julia 风格):")
print("  Number (抽象类型)")
print("  ├── Real (抽象类型)")
print("  │   ├── Integer (抽象类型)")
print("  │   │   └── Int64 (具体类型)")
print("  │   └── AbstractFloat (抽象类型)")
print("  │       └── Float64 (具体类型)")
print("  └── Complex (抽象类型)")

# Julia 的数组类型（类型稳定很重要）
# Vector{Int} = Array{Int, 1}
# Matrix{Float64} = Array{Float64, 2}
int_vec = np.array([1, 2, 3, 4, 5], dtype=np.int64)
float_vec = np.array([1.0, 2.0, 3.0], dtype=np.float64)
print()
print(f"Int 向量: {int_vec}, dtype: {int_vec.dtype}")
print(f"Float 向量: {float_vec}, dtype: {float_vec.dtype}")

# Julia 的 Union 类型（Union{Int, Float64}）
# 等价于 Python 的 Union[int, float]
from typing import Union
mixed: Union[int, float] = 42
print(f"Union 类型变量: {mixed} (接受 Int 或 Float)")`,hint:"Julia 的 typeof() → Python 的 type()；Julia 的 ::类型注解 → Python 的类型提示；Julia 的 Vector{Int} → NumPy 的 dtype 数组"},{id:3,title:"数组与矩阵运算",type:"practice",content:`Julia 的数组是一等公民，**多维数组操作**是科学计算的核心。
Julia 数组索引从 **1 开始**（类似 MATLAB），支持切片、广播和向量化操作。`,code:`import numpy_ as np

# Julia 的一维数组（Vector）
# v = [1, 2, 3, 4, 5]
v = np.array([1, 2, 3, 4, 5])
print("一维数组 v:", v)

# Julia 的二维矩阵（Matrix）
# M = [1 2 3; 4 5 6; 7 8 9]
M = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])
print("二维矩阵 M:")
print(M)
print()

# Julia 的切片（1-based）
# v[2:4] → [2, 3, 4]
# M[1:2, 2:3] → 前两行前两列
print("切片操作:")
print(f"  v[1:4] (Python 0-based): {v[0:4]}")  # Julia v[1:4]
print(f"  M[0:2, 0:2]:\\n{M[0:2, 0:2]}")
print()

# Julia 的矩阵运算
# A * B 矩阵乘法
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = A @ B  # 矩阵乘法
print("矩阵乘法 A @ B:")
print(C)
print()

# Julia 的广播（broadcasting）
# v .+ 1  → 每个元素加 1
# M .* 2  → 每个元素乘 2
print("广播操作:")
print(f"  v + 1 = {v + 1}")
print(f"  M * 2 =\\n{M * 2}")
print()

# Julia 的线性代数
# det(M)、inv(M)、eigen(M)
print("线性代数运算:")
print(f"  det(A) = {np.linalg.det(A):.1f}")
print(f"  inv(A) =\\n{np.linalg.inv(A)}")

eigenvalues, eigenvectors = np.linalg.eig(A)
print(f"  eigenvalues: {eigenvalues}")
print(f"  eigenvectors:\\n{eigenvectors}")

# Julia 的多维数组
# T = rand(2, 3, 4) → 2×3×4 三维张量
T = np.random.rand(2, 3, 4)
print(f"三维张量 shape: {T.shape}")
print(f"切片 T[1, :, :] shape: {T[0].shape}")`,hint:"Julia 的矩阵乘法用 * 号（非元素乘），元素乘用 .*。Python/NumPy 中 @ 是矩阵乘，* 是元素乘。Julia 索引从 1 开始，Python 从 0 开始"},{id:4,title:"函数与多重派发",type:"example",content:`**多重派发（Multiple Dispatch）** 是 Julia 的灵魂特性：
同一个函数名可以定义多个**方法**（method），Julia 根据参数类型自动选择最优实现。

这比传统 OOP 的单派发（只能对 self 类型分派）更灵活，
让通用库和专用优化可以无缝共存。`,code:`import numpy_ as np
from functools import singledispatch
from typing import Union

# 使用 functools.singledispatch 模拟 Julia 的多重派发
# 注意：Python 只有单派发，Julia 支持多参数派发

@singledispatch
def describe(x):
    """通用函数 - 根据参数类型选择实现"""
    return f"未知类型: {type(x).__name__}"

@describe.register(int)
def _(x: int):
    """整数方法"""
    if x % 2 == 0:
        return f"{x} 是偶数"
    else:
        return f"{x} 是奇数"

@describe.register(float)
def _(x: float):
    """浮点数方法"""
    return f"{x:.2f} 是浮点数，绝对值 = {abs(x):.2f}"

@describe.register(str)
def _(x: str):
    """字符串方法"""
    return f"字符串 '{x}' 长度={len(x)}, 大写='{x.upper()}'"

@describe.register(np.ndarray)
def _(x: np.ndarray):
    """NumPy 数组方法"""
    return f"数组 shape={x.shape}, dtype={x.dtype}, sum={x.sum():.2f}, mean={x.mean():.2f}"

# 测试多重派发
print("多重派发演示：")
print(f"  describe(42) → {describe(42)}")
print(f"  describe(3.14) → {describe(3.14)}")
print(f"  describe('hello') → {describe('hello')}")
print(f"  describe(np.array([1,2,3])) → {describe(np.array([1,2,3]))}")
print()

# Julia 的参数化类型 + 多重派发的威力
# 同一算法针对 Float32 和 Float64 有不同优化实现
# 模拟：对不同精度的浮点数使用不同的求和策略
def smart_sum(arr):
    """根据数据类型选择不同的求和策略"""
    if arr.dtype == np.float32:
        # Float32：补偿求和（Kahan summation）
        s = np.float32(0.0)
        c = np.float32(0.0)
        for x in arr:
            y = x - c
            t = s + y
            c = (t - s) - y
            s = t
        return float(s)
    elif arr.dtype == np.float64:
        # Float64：直接向量化求和
        return float(np.sum(arr))
    else:
        return float(np.sum(arr))

# Float32 精度求和
arr32 = np.random.randn(100000).astype(np.float32)
result32 = smart_sum(arr32)
print(f"Float32 求和 (Kahan): {result32:.6f}")

# Float64 精度求和
arr64 = arr32.astype(np.float64)
result64 = smart_sum(arr64)
print(f"Float64 求和 (向量化): {result64:.6f}")
print(f"差异: {abs(result32 - result64):.6e}")`,hint:"Julia 的多重派发比 Python 更强大——支持多参数类型分派。Python 的 singledispatch 只支持单参数派发。Julia 对 Float32/Float64 有专门的优化实现"},{id:5,title:"微分方程求解",type:"practice",content:`Julia 在**微分方程求解**方面是业界标杆，DifferentialEquations.jl 提供了
丰富的求解器和优秀的性能。

本练习用 Python 模拟求解**常微分方程（ODE）**的过程，
感受数值求解的基本思想。`,code:`import numpy_ as np
from scipy_ import integrate

# 示例 1：指数增长模型
# dy/dt = r*y, y(0) = y0
# 解析解：y(t) = y0 * exp(r*t)
r = 0.5
y0 = 1.0

def exp_growth(t, y):
    return r * y

t_span = (0, 5)
t_eval = np.linspace(0, 5, 100)

# RK45 求解（类似于 Julia 的 Tsit5 求解器）
sol = integrate.solve_ivp(exp_growth, t_span, [y0], method='RK45', t_eval=t_eval)

print("指数增长模型 dy/dt = 0.5*y")
print(f"  t=0: y={sol.y[0][0]:.4f} (expected: 1.0000)")
print(f"  t=5: y={sol.y[0][-1]:.4f} (expected: {y0 * np.exp(r * 5):.4f})")
print()

# 示例 2：Logistic 增长模型
# dy/dt = r*y*(1 - y/K), y(0) = 0.1, K=10
r_log = 1.0
K = 10.0

def logistic(t, y):
    return r_log * y * (1 - y / K)

sol_log = integrate.solve_ivp(logistic, (0, 15), [0.1], method='RK45', t_eval=np.linspace(0, 15, 200))

print("Logistic 增长模型 dy/dt = y*(1-y/10)")
print(f"  t=0:  y={sol_log.y[0][0]:.4f}")
print(f"  t=5:  y={sol_log.y[0][np.searchsorted(sol_log.t, 5)]:.4f}")
print(f"  t=15: y={sol_log.y[0][-1]:.4f} (趋近于 K=10)")
print()

# 示例 3：二阶 ODE - 简谐振动
# d²x/dt² + ω²*x = 0 → 写成一阶方程组
ω = 2.0

def harmonic(t, state):
    x, v = state
    return [v, -ω**2 * x]

sol_harm = integrate.solve_ivp(harmonic, (0, 20), [1.0, 0.0], method='RK45', t_eval=np.linspace(0, 20, 500))

print("简谐振动 d²x/dt² + 4*x = 0")
print(f"  t=0:  x={sol_harm.y[0][0]:.4f}, v={sol_harm.y[1][0]:.4f}")
print(f"  t=π/4:  x≈cos(π/2)={np.cos(np.pi/2):.4f} (数值: {sol_harm.y[0][np.searchsorted(sol_harm.t, np.pi/4)]:.4f})")
print(f"  t=π/2:  x≈cos(π)={np.cos(np.pi):.4f} (数值: {sol_harm.y[0][np.searchsorted(sol_harm.t, np.pi/2)]:.4f})")
print()
print("✅ 三个 ODE 模型都已成功求解！")
print("Julia 的 DifferentialEquations.jl 在更复杂的系统（如偏微分方程、随机微分方程）上性能更优。")`,hint:"ODE 求解需要将高阶方程化为一阶方程组。Julia 的 DifferentialEquations.jl 有更多专业求解器（Tsit5、Vern7、Rodas4 等）和自动微分支持"},{id:6,title:"性能对比",type:"explanation",content:`Julia 的设计哲学是 **"像 Python 一样简单，像 C 一样快"**。

**典型性能对比**（以 C 为基准 1.0，数值越小越快）：

| 任务 | C | Julia | Python | MATLAB |
|------|---|-------|--------|--------|
| 递归斐波那契 | 1.0 | 1.5 | ~50 | ~30 |
| 矩阵乘法 | 1.0 | 1.2 | ~3 | ~2 |
| 数值积分 | 1.0 | 1.1 | ~10 | ~5 |
| 图像处理 | 1.0 | 1.3 | ~20 | ~8 |
| 机器学习训练 | 1.0 | 1.5 | ~2-5(GPU) | ~10 |

**关键因素**：
1. **JIT 编译**：Julia 代码编译成原生机器码，无解释执行开销
2. **类型稳定**：当所有变量类型在编译时已知，编译器可生成最优代码
3. **数组按列优先**：Fortran 顺序，对科学计算更友好
4. **无全局解释器锁（GIL）**：多线程真正并行

**何时选 Julia**：
- 🔥 大规模数值计算（百万级变量、复杂网格）
- 🔬 需要写自己的数值算法（有限元、谱方法）
- ⚡ 实时仿真（金融、物理、生物）
- 🤖 科学机器学习（Differentiable Programming）

**何时仍选 Python**：
- 🌐 Web 开发、爬虫、自动化
- 📊 快速数据分析（pandas 生态更成熟）
- 🎨 深度学习（PyTorch/TensorFlow 生态）
- 🧪 原型验证（快速迭代）

两种语言在科学计算领域各有优势，很多研究者**同时使用**——
用 Python 做数据处理和可视化，用 Julia 做核心算法计算 🤝`}],37:[{id:1,title:"输入输出基础",type:"explanation",content:`**Python 输入输出** 是与用户交互的基础。

**input() 函数**：从控制台读取用户输入，返回字符串类型。

**print() 函数**：向控制台输出信息，支持多个参数。

\`\`\`python
# 基本输入
name = input("请输入你的名字: ")
print("你好,", name)

# 多参数输出
print("年龄:", 20, "身高:", 1.75)
\`\`\`

**注意**：input() 返回的永远是字符串，需要用 int()/float() 转换类型。`},{id:2,title:"格式化输出",type:"explanation",content:`Python 提供了三种格式化字符串的方式：

**1. % 格式化**（老式写法）
\`\`\`python
name, age = "小明", 18
print("我叫%s，今年%d岁" % (name, age))
\`\`\`

**2. str.format() 方法**
\`\`\`python
print("我叫{0}，今年{1}岁".format(name, age))
print("我叫{name}，今年{age}岁".format(name=name, age=age))
\`\`\`

**3. f-string（推荐，Python 3.6+）**
\`\`\`python
print(f"我叫{name}，今年{age}岁")
print(f"明年我{age + 1}岁")
\`\`\`

f-string 是最简洁高效的方式，支持在字符串中直接嵌入表达式。`},{id:3,title:"f-string 进阶用法",type:"example",content:`f-string 支持格式说明符：

\`\`\`python
# 数字格式化
pi = 3.14159265
print(f"π ≈ {pi:.4f}")           # π ≈ 3.1416
print(f"{42:08d}")                # 00000042
print(f"{0.9567:.2%}")            # 95.67%

# 对齐
print(f"{'左对齐':<10}|{'右对齐':>10}|{'居中':^10}")

# 调试（Python 3.8+）
x = 42
print(f"{x = }")                  # x = 42
print(f"{x = :08b}")              # x = 00101010

# 日期时间
from datetime import datetime
now = datetime.now()
print(f"{now:%Y-%m-%d %H:%M}")
\`\`\`
`,code:`name = input("请输入姓名: ")
score = float(input("请输入分数: "))
print(f"{name}，你的分数是 {score:.1f}，等级: {'优秀' if score >= 90 else '及格'}")`},{id:4,title:"文件读写",type:"explanation",content:`Python 使用 open() 函数进行文件操作：

\`\`\`python
# 写入文件
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("第一行\\n")
    f.write("第二行\\n")

# 读取文件
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()          # 读取全部
    # lines = f.readlines()    # 读取所有行为列表
    # line = f.readline()      # 读取一行

# 追加写入
with open("data.txt", "a", encoding="utf-8") as f:
    f.write("新的一行\\n")
\`\`\`

**文件模式**：r（读）、w（写，覆盖）、a（追加）、rb/wb（二进制）

**with 语句**：自动关闭文件，推荐使用。`},{id:5,title:"练习：成绩统计器",type:"exercise",content:`编写一个成绩统计器：
1. 从用户输入读取5个成绩
2. 计算总分、平均分、最高分、最低分
3. 用格式化输出展示结果

\`\`\`python
# 在这里编写代码

\`\`\`
`,code:`scores = []
for i in range(5):
    s = float(input(f"请输入第{i+1}个成绩: "))
    scores.append(s)

total = sum(scores)
avg = total / len(scores)
mx, mn = max(scores), min(scores)

print("=" * 30)
print(f"成绩统计报告")
print("=" * 30)
print(f"总分:   {total:.1f}")
print(f"平均分: {avg:.2f}")
print(f"最高:   {mx:.1f}")
print(f"最低:   {mn:.1f}")
print(f"极差:   {mx - mn:.1f}")
`},{id:6,title:"第37关测验",type:"quiz",content:`**问题1**：input() 函数返回值的类型是什么？
- A. int
- B. float  
- C. str
- D. 取决于输入内容

**问题2**：以下哪个是 Python 3.6+ 推荐的字符串格式化方式？
- A. % 格式化
- B. str.format()
- C. f-string
- D. string.Template

**问题3**：with 语句的主要作用是什么？
- A. 加密文件
- B. 自动管理资源（如自动关闭文件）
- C. 提高文件读取速度
- D. 创建临时文件

**答案**：1.C  2.C  3.B`}],38:[{id:1,title:"迭代器基础",type:"explanation",content:`**迭代器（Iterator）** 是 Python 中用于遍历可迭代对象的机制。

**两个核心概念**：
- **可迭代对象（Iterable）**：可以用 for 循环遍历的对象（list、dict、str 等）
- **迭代器（Iterator）**：实现了 __iter__() 和 __next__() 方法的对象

\`\`\`python
# 创建迭代器
my_list = [1, 2, 3]
it = iter(my_list)    # 调用 __iter__()

next(it)  # 1  调用 __next__()
next(it)  # 2
next(it)  # 3
next(it)  # StopIteration 异常
\`\`\`

for 循环本质上就是通过迭代器实现的。`},{id:2,title:"自定义迭代器",type:"example",content:`可以通过实现 __iter__ 和 __next__ 方法创建自定义迭代器：

\`\`\`python
class MyRange:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self.current = start
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current >= self.end:
            raise StopIteration
        val = self.current
        self.current += 1
        return val

# 使用
for x in MyRange(0, 5):
    print(x)  # 0, 1, 2, 3, 4
\`\`\`
`,code:`class Fibonacci:
    def __init__(self, n):
        self.n = n
        self.a, self.b = 0, 1
        self.count = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.count >= self.n:
            raise StopIteration
        self.a, self.b = self.b, self.a + self.b
        self.count += 1
        return self.a

for num in Fibonacci(10):
    print(num, end=' ')
`},{id:3,title:"生成器 yield",type:"explanation",content:`**生成器（Generator）** 是一种特殊的迭代器，通过 yield 关键字实现。

\`\`\`python
# 普通函数 vs 生成器
def normal_func():
    return [1, 2, 3, 4, 5]  # 一次性生成所有数据

def generator():
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5

# 使用生成器
g = generator()
next(g)  # 1
next(g)  # 2

# for 循环自动迭代
for val in generator():
    print(val)
\`\`\`

**优势**：节省内存，惰性求值，适合处理大数据流。`},{id:4,title:"列表推导式 vs 生成器",type:"explanation",content:`\`\`\`python
# 列表推导式：一次性生成所有结果
squares_list = [x**2 for x in range(1000000)]  # 占用大量内存

# 生成器表达式：惰性求值，节省内存
squares_gen = (x**2 for x in range(1000000))  # 几乎不占内存

# 生成器在 for 循环中自动迭代
for sq in squares_gen:
    if sq > 100:
        break
    print(sq)
\`\`\`

**语法区别**：列表推导式用 \`[]\`，生成器表达式用 \`()\`

**适用场景**：
- 数据量大时用生成器
- 需要多次遍历用列表（生成器只能遍历一次）
- 需要索引访问用列表`},{id:5,title:"练习：素数生成器",type:"exercise",content:`编写一个生成器，生成指定范围内的所有素数：

\`\`\`python
def prime_generator(start, end):
    # 在这里编写代码
    pass

# 测试
for p in prime_generator(1, 50):
    print(p, end=' ')
\`\`\`
`,code:`def prime_generator(start, end):
    for num in range(start, end + 1):
        if num < 2:
            continue
        is_prime = True
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            yield num

for p in prime_generator(1, 50):
    print(p, end=' ')
`},{id:6,title:"第38关测验",type:"quiz",content:`**问题1**：迭代器的两个核心方法是什么？
- A. init() 和 next()
- B. __iter__() 和 __next__()
- C. start() 和 stop()
- D. first() 和 last()

**问题2**：生成器与普通函数的主要区别？
- A. 生成器更快
- B. 生成器使用 return 而非 yield
- C. 生成器使用 yield 惰性生成值
- D. 没有区别

**问题3**：生成器表达式和列表推导式的主要区别？
- A. 语法完全相同
- B. 生成器用圆括号，惰性求值
- C. 列表推导式更省内存
- D. 生成器不能被迭代

**答案**：1.B  2.C  3.B`}],39:[{id:1,title:"JSON 处理",type:"explanation",content:`**JSON（JavaScript Object Notation）** 是跨平台数据交换的主流格式。

\`\`\`python
import json

# Python 对象 → JSON 字符串
data = {"name": "小明", "age": 18, "hobbies": ["编程", "阅读"]}
json_str = json.dumps(data, ensure_ascii=False, indent=2)

# JSON 字符串 → Python 对象
parsed = json.loads(json_str)

# Python 对象 → JSON 文件
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# JSON 文件 → Python 对象
with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)
\`\`\`

**常用参数**：ensure_ascii=False（支持中文）、indent=2（格式化缩进）`},{id:2,title:"JSON 进阶",type:"example",content:`\`\`\`python
from datetime import datetime

# 处理自定义对象序列化
class CustomEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)

data = {"name": "小明", "created_at": datetime.now()}
json_str = json.dumps(data, cls=CustomEncoder, ensure_ascii=False)

# 反序列化时的类型转换
def decoder_hook(d):
    if 'created_at' in d:
        d['created_at'] = datetime.fromisoformat(d['created_at'])
    return d

parsed = json.loads(json_str, object_hook=decoder_hook)
\`\`\`
`,code:`import json

students = [
    {"name": "张三", "score": 95},
    {"name": "李四", "score": 87},
    {"name": "王五", "score": 92}
]

# 保存到文件
with open("students.json", "w", encoding="utf-8") as f:
    json.dump(students, f, ensure_ascii=False, indent=2)

# 读取并统计
with open("students.json", "r", encoding="utf-8") as f:
    data = json.load(f)

avg = sum(s["score"] for s in data) / len(data)
print(f"平均分: {avg:.1f}")
for s in sorted(data, key=lambda x: x["score"], reverse=True):
    print(f"  {s['name']}: {s['score']}")
`},{id:3,title:"XML 解析",type:"explanation",content:`**XML** 是另一种常见的数据交换格式。Python 使用 xml.etree.ElementTree 解析。

\`\`\`python
import xml.etree.ElementTree as ET

xml_str = """
<courses>
    <course name="Python" duration="40">
        <instructor>张老师</instructor>
    </course>
    <course name="Java" duration="60">
        <instructor>李老师</instructor>
    </course>
</courses>
"""

# 解析 XML
root = ET.fromstring(xml_str)

# 遍历元素
for course in root.findall('course'):
    name = course.get('name')
    duration = course.get('duration')
    instructor = course.find('instructor').text
    print(f"{name}({duration}h): {instructor}")
\`\`\`
`,code:`import xml.etree.ElementTree as ET

xml_data = """
<library>
    <book category="编程">
        <title>Python 入门</title>
        <author>菜鸟</author>
        <year>2024</year>
    </book>
    <book category="科学">
        <title>时间简史</title>
        <author>霍金</author>
        <year>1988</year>
    </book>
</library>
"""

root = ET.fromstring(xml_data)
for book in root.findall('book'):
    cat = book.get('category')
    title = book.find('title').text
    author = book.find('author').text
    print(f"[{cat}] 《{title}》 - {author}")
`},{id:4,title:"pickle 序列化",type:"explanation",content:`**pickle** 模块可以序列化任意 Python 对象（仅限 Python 使用）。

\`\`\`python
import pickle

# 序列化
data = {"name": "小明", "scores": [90, 85, 92]}
with open("data.pkl", "wb") as f:
    pickle.dump(data, f)

# 反序列化
with open("data.pkl", "rb") as f:
    loaded = pickle.load(f)

# 注意：pickle 只能在 Python 之间使用，不安全！
# 不要加载不信任来源的 .pkl 文件
\`\`\`

**JSON vs Pickle 对比**：
- JSON：通用格式，跨语言，可读，安全
- Pickle：Python 专用，不可读，可序列化任意对象，**不安全**`},{id:5,title:"练习：学生数据管理器",type:"exercise",content:`实现一个学生数据管理器：
1. 将学生列表保存为 JSON 文件
2. 支持添加、删除、查询学生
3. 读取 JSON 文件并展示统计信息

\`\`\`python
# 在这里编写代码
\`\`\`
`,code:`import json
import os

FILE = "students.json"

def load():
    if os.path.exists(FILE):
        with open(FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return []

def save(data):
    with open(FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def add_student(name, age, score):
    data = load()
    data.append({"name": name, "age": age, "score": score})
    save(data)

def search(keyword):
    return [s for s in load() if keyword in s["name"]]

# 演示
add_student("小明", 20, 95)
add_student("小红", 19, 88)
print(search("小"))
print(f"共 {len(load())} 名学生")
`},{id:6,title:"第39关测验",type:"quiz",content:`**问题1**：json.dumps() 的 ensure_ascii=False 参数作用？
- A. 压缩输出
- B. 允许中文正常显示
- C. 加密数据
- D. 格式化缩进

**问题2**：pickle 模块的主要风险是什么？
- A. 序列化速度慢
- B. 文件太大
- C. 加载不信任文件可能执行恶意代码
- D. 不支持中文

**问题3**：XML 中获取元素属性的方法？
- A. element.attribute
- B. element.get('attr_name')
- C. element['attr_name']
- D. element.attr()

**答案**：1.B  2.C  3.B`}],40:[{id:1,title:"SQLite 数据库",type:"explanation",content:`**SQLite** 是 Python 内置的轻量级数据库，无需安装配置。

\`\`\`python
import sqlite3

# 连接数据库（自动创建）
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# 创建表
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER
    )
''')

# 插入数据
cursor.execute('INSERT INTO users (name, age) VALUES (?, ?)', ('小明', 20))
conn.commit()

# 查询
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()
for row in rows:
    print(row)

conn.close()
\`\`\`
`,code:`import sqlite3

conn = sqlite3.connect('school.db')
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    score REAL
)''')

# 插入
c.execute("INSERT INTO students (name, score) VALUES (?, ?)", ("小明", 95.5))
c.execute("INSERT INTO students (name, score) VALUES (?, ?)", ("小红", 88.0))
conn.commit()

# 查询统计
c.execute("SELECT name, score FROM students WHERE score > ?", (90,))
for row in c.fetchall():
    print(f"{row[0]}: {row[1]}")

c.execute("SELECT AVG(score) FROM students")
print(f"平均分: {c.fetchone()[0]:.1f}")

conn.close()
`},{id:2,title:"SQL 操作进阶",type:"explanation",content:`\`\`\`python
# 更新数据
cursor.execute('UPDATE users SET age = ? WHERE name = ?', (21, '小明'))
conn.commit()

# 删除数据
cursor.execute('DELETE FROM users WHERE name = ?', ('小红',))
conn.commit()

# 事务处理
try:
    cursor.execute('BEGIN')
    cursor.execute('INSERT INTO users (name) VALUES (?)', ('甲',))
    cursor.execute('INSERT INTO users (name) VALUES (?)', ('乙',))
    conn.commit()  # 提交事务
except:
    conn.rollback()  # 回滚事务

# 使用 with 语句（自动提交/回滚）
with conn:
    cursor.execute('INSERT INTO users (name) VALUES (?)', ('丙',))
\`\`\`
`,code:`import sqlite3

conn = sqlite3.connect('shop.db')
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    stock INTEGER
)''')

# 批量插入
products = [("手机", 3999, 50), ("电脑", 5999, 20), ("耳机", 299, 100)]
c.executemany("INSERT INTO products (name, price, stock) VALUES (?, ?, ?)", products)
conn.commit()

# 综合查询
c.execute("""
    SELECT name, price, stock,
           CASE WHEN price < 1000 THEN '低价'
                WHEN price < 5000 THEN '中价'
                ELSE '高价' END as category
    FROM products
    ORDER BY price DESC
""")
for row in c.fetchall():
    print(f"{row[0]}: ¥{row[1]} ({row[2]}件) - {row[3]}")

conn.close()
`},{id:3,title:"MySQL 数据库",type:"explanation",content:`连接 MySQL 需要安装 pymysql 或 mysql-connector-python：

\`\`\`python
# pip install pymysql
import pymysql

conn = pymysql.connect(
    host='localhost',
    user='root',
    password='123456',
    database='test',
    charset='utf8mb4'
)

cursor = conn.cursor()

# 与 SQLite 操作类似
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()

conn.close()
\`\`\`

**SQLite vs MySQL**：
- SQLite：文件数据库，零配置，适合小型应用
- MySQL：服务器数据库，支持多用户并发，适合生产环境`},{id:4,title:"SQLAlchemy ORM",type:"explanation",content:`**SQLAlchemy** 是 Python 最流行的 ORM 框架：

\`\`\`python
# pip install sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class User(Base):
    __tabname__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    age = Column(Integer)

# 创建引擎
engine = create_engine('sqlite:///example.db')
Base.metadata.create_all(engine)

# 使用 Session
Session = sessionmaker(bind=engine)
session = Session()

# 添加
session.add(User(name='小明', age=20))
session.commit()

# 查询
users = session.query(User).filter(User.age > 18).all()
for u in users:
    print(u.name, u.age)
\`\`\`
`,code:`from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class Student(Base):
    __tabname__ = 'students'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    score = Column(Float)

engine = create_engine('sqlite:///school2.db')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# CRUD
session.add_all([
    Student(name="小明", score=95),
    Student(name="小红", score=88)
])
session.commit()

# 查询
top = session.query(Student).filter(Student.score > 90).all()
for s in top:
    print(f"{s.name}: {s.score}")

session.close()
`},{id:5,title:"练习：图书管理系统",type:"exercise",content:`实现一个简单的图书管理系统：
1. 创建 books 表（id, title, author, is_borrowed）
2. 添加图书
3. 借阅/归还图书
4. 查询所有图书状态

\`\`\`python
import sqlite3
# 在这里编写代码
\`\`\`
`,code:`import sqlite3

conn = sqlite3.connect('library.db')
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    is_borrowed INTEGER DEFAULT 0
)''')

def add_book(title, author):
    c.execute("INSERT INTO books (title, author) VALUES (?, ?)", (title, author))
    conn.commit()

def borrow(book_id):
    c.execute("UPDATE books SET is_borrowed = 1 WHERE id = ?", (book_id,))
    conn.commit()

def return_book(book_id):
    c.execute("UPDATE books SET is_borrowed = 0 WHERE id = ?", (book_id,))
    conn.commit()

def list_books():
    c.execute("SELECT * FROM books")
    for b in c.fetchall():
        status = "已借出" if b[3] else "在架"
        print(f"[{b[0]}] {b[1]} - {b[2]} ({status})")

add_book("Python 入门", "菜鸟")
add_book("算法导论", "CLRS")
borrow(1)
list_books()
return_book(1)
list_books()
conn.close()
`},{id:6,title:"第40关测验",type:"quiz",content:`**问题1**：SQLite 创建数据库的方式？
- A. 需要单独安装服务
- B. 连接时自动创建为文件
- C. 使用 Docker
- D. 需要配置环境变量

**问题2**：SQL 注入的防护方式？
- A. 字符串拼接 SQL
- B. 使用参数化查询（占位符 ?）
- C. 加密 SQL
- D. 限制访问 IP

**问题3**：SQLAlchemy 中 Session 的作用？
- A. 数据库连接
- B. ORM 会话，管理对象生命周期和事务
- C. 表结构定义
- D. 执行 SQL

**答案**：1.B  2.B  3.B`}],41:[{id:1,title:"线程基础",type:"explanation",content:`**线程（Thread）** 是 CPU 调度的基本单位，Python 使用 threading 模块。

\`\`\`python
import threading
import time

def task(name, duration):
    print(f"任务 {name} 开始")
    time.sleep(duration)
    print(f"任务 {name} 完成")

# 创建线程
t1 = threading.Thread(target=task, args=('A', 2))
t2 = threading.Thread(target=task, args=('B', 1))

# 启动
t1.start()
t2.start()

# 等待完成
t1.join()
t2.join()
print("所有任务完成")
\`\`\`
`,code:`import threading
import time

def countdown(name, n):
    for i in range(n, 0, -1):
        print(f"[{name}] {i}")
        time.sleep(0.5)
    print(f"[{name}] 完成!")

# 创建多个线程
threads = [
    threading.Thread(target=countdown, args=("Timer-A", 5)),
    threading.Thread(target=countdown, args=("Timer-B", 3)),
]

for t in threads:
    t.start()
for t in threads:
    t.join()

print("倒计时结束!")
`},{id:2,title:"GIL 全局解释器锁",type:"explanation",content:`**GIL（Global Interpreter Lock）** 是 CPython 的全局锁，确保同一时刻只有一个线程执行 Python 字节码。

**影响**：
- CPU 密集型任务：多线程**不能**加速（GIL 锁竞争）
- IO 密集型任务：多线程**可以**加速（IO 时释放 GIL）
- 需要真正并行：使用 multiprocessing（多进程）

\`\`\`python
# CPU 密集型：用多进程
from multiprocessing import Process

def cpu_intensive():
    total = sum(range(10000000))

# IO 密集型：用多线程
import threading
def io_intensive():
    # 网络请求、文件读写等
    pass
\`\`\`
`,code:`import threading
import time

# CPU 密集型任务
def cpu_work():
    total = 0
    for i in range(10_000_000):
        total += i

# 单线程
start = time.time()
cpu_work()
cpu_work()
print(f"单线程: {time.time() - start:.2f}s")

# 多线程（CPU 密集型，GIL 导致几乎无加速）
start = time.time()
t1 = threading.Thread(target=cpu_work)
t2 = threading.Thread(target=cpu_work)
t1.start(); t2.start()
t1.join(); t2.join()
print(f"多线程: {time.time() - start:.2f}s")
`},{id:3,title:"线程同步",type:"explanation",content:`多个线程访问共享数据时需要同步机制：

\`\`\`python
import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter
    for _ in range(100000):
        with lock:  # 获取锁
            counter += 1

threads = [threading.Thread(target=increment) for _ in range(10)]
for t in threads:
    t.start()
for t in threads:
    t.join()

print(f"预期: 1000000, 实际: {counter}")
\`\`\`

**其他同步机制**：
- Lock：互斥锁，最常用
- RLock：可重入锁
- Condition：条件变量
- Event：事件通知
- Semaphore：信号量`},{id:4,title:"多进程编程",type:"explanation",content:`multiprocessing 模块绕过 GIL，实现真正的并行计算：

\`\`\`python
from multiprocessing import Process, Pool

def worker(n):
    return n * n

# 多进程
if __name__ == '__main__':
    # 方式1：Process
    p1 = Process(target=worker, args=(5,))
    p1.start()
    p1.join()
    
    # 方式2：进程池
    with Pool(4) as pool:
        results = pool.map(worker, [1, 2, 3, 4, 5])
        print(results)  # [1, 4, 9, 16, 25]
\`\`\`

**选择指南**：
- IO 密集 → 多线程（threading）
- CPU 密集 → 多进程（multiprocessing）
- 简单并发 → asyncio（第42关）`},{id:5,title:"练习：并行下载器",type:"exercise",content:`使用多线程实现一个并行下载器框架（模拟）：
1. 创建多个线程模拟下载任务
2. 使用 Lock 保护共享的进度计数器
3. 显示每个任务的完成状态

\`\`\`python
# 在这里编写代码
\`\`\`
`,code:`import threading
import time
import random

progress = 0
lock = threading.Lock()
results = []

def download(name, size):
    global progress
    elapsed = random.uniform(0.5, 2.0)
    time.sleep(elapsed)
    with lock:
        progress += size
        results.append(f"{name}: {elapsed:.1f}s")
    print(f"[完成] {name} ({size}MB)")

tasks = [("文件A", 50), ("文件B", 30), ("文件C", 80), ("文件D", 20)]
threads = [threading.Thread(target=download, args=t) for t in tasks]

for t in threads:
    t.start()
for t in threads:
    t.join()

print(f"\\n总进度: {progress}MB")
for r in results:
    print(f"  {r}")
`},{id:6,title:"第41关测验",type:"quiz",content:`**问题1**：GIL 对 Python 多线程的影响？
- A. 完全不允许多线程
- B. CPU 密集型任务无法真正并行
- C. 线程执行更快
- D. 自动同步所有线程

**问题2**：IO 密集型任务适合用什么？
- A. 多进程
- B. 多线程或异步
- C. 单线程
- D. 递归

**问题3**：threading.Lock 的作用？
- A. 加速线程执行
- B. 防止多线程竞争共享资源
- C. 创建新线程
- D. 结束线程

**答案**：1.B  2.B  3.B`}],42:[{id:1,title:"异步编程概念",type:"explanation",content:`**异步编程** 是一种非阻塞的并发模型，Python 使用 asyncio 模块。

\`\`\`python
import asyncio

async def hello():
    print("Hello")
    await asyncio.sleep(1)  # 非阻塞等待
    print("World")

# 运行异步函数
asyncio.run(hello())
\`\`\`

**核心概念**：
- async def：定义协程（coroutine）
- await：等待异步操作完成
- Task：包装协程以便并发执行
- Event Loop：事件循环，调度所有 Task`},{id:2,title:"并发执行多个任务",type:"example",content:`\`\`\`python
import asyncio

async def fetch_data(name, delay):
    print(f"开始获取 {name}...")
    await asyncio.sleep(delay)
    print(f"{name} 获取完成")
    return f"{name}-data"

async def main():
    # 并发执行
    task1 = asyncio.create_task(fetch_data("API-A", 2))
    task2 = asyncio.create_task(fetch_data("API-B", 1))
    
    # 等待所有任务完成
    results = await asyncio.gather(task1, task2)
    print(f"结果: {results}")

asyncio.run(main())
\`\`\`
`,code:`import asyncio

async def producer(name, count):
    for i in range(count):
        print(f"[{name}] 生产 item-{i}")
        await asyncio.sleep(0.3)
    return f"{name} 完成"

async def main():
    # gather 并发执行
    results = await asyncio.gather(
        producer("Worker-A", 3),
        producer("Worker-B", 4),
        producer("Worker-C", 2),
    )
    print(f"所有任务完成: {results}")

asyncio.run(main())
`},{id:3,title:"asyncio 实际应用",type:"explanation",content:`异步编程常用于网络请求、定时任务等场景：

\`\`\`python
# 异步 HTTP 请求（需 aiohttp 库）
import aiohttp

async def fetch_url(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            return await resp.text()

# 定时任务
async def periodic():
    while True:
        print("执行定时任务")
        await asyncio.sleep(60)  # 每60秒执行

# 异步文件 IO（aiofiles）
import aiofiles

async def read_file(path):
    async with aiofiles.open(path) as f:
        return await f.read()
\`\`\`

**异步 vs 多线程**：
- 异步：单线程，协作式调度，无锁竞争
- 多线程：多线程，抢占式调度，需要锁同步`},{id:4,title:"练习：异步计时器",type:"exercise",content:`实现一个异步计时器，可以同时启动多个倒计时任务：

\`\`\`python
import asyncio

async def timer(name, seconds):
    # 在这里编写代码
    pass

async def main():
    # 同时启动3个计时器
    pass

asyncio.run(main())
\`\`\`
`,code:`import asyncio

async def timer(name, seconds):
    for i in range(seconds, 0, -1):
        print(f"[{name}] {i}s")
        await asyncio.sleep(1)
    print(f"[{name}] 时间到!")

async def main():
    task1 = asyncio.create_task(timer("A", 3))
    task2 = asyncio.create_task(timer("B", 5))
    task3 = asyncio.create_task(timer("C", 4))
    
    await asyncio.gather(task1, task2, task3)
    print("所有计时器完成!")

asyncio.run(main())
`},{id:5,title:"异步 vs 同步对比",type:"explanation",content:`\`\`\`python
import time
import asyncio

# 同步版本
def sync_fetch():
    time.sleep(1)  # 模拟 IO
    return "data"

def sync_main():
    start = time.time()
    sync_fetch()
    sync_fetch()
    sync_fetch()
    print(f"同步: {time.time() - start:.2f}s")  # ~3s

# 异步版本
async def async_fetch():
    await asyncio.sleep(1)  # 模拟异步 IO
    return "data"

async def async_main():
    start = time.time()
    await asyncio.gather(async_fetch(), async_fetch(), async_fetch())
    print(f"异步: {time.time() - start:.2f}s")  # ~1s

sync_main()
asyncio.run(async_main())
\`\`\`
`,code:`import asyncio
import time

async def simulated_io(name, delay):
    print(f"[{name}] 开始 ({delay}s)")
    await asyncio.sleep(delay)
    print(f"[{name}] 完成")
    return name

async def main():
    # 串行：总耗时 = 所有延迟之和
    print("=== 串行执行 ===")
    t0 = time.time()
    await simulated_io("A", 2)
    await simulated_io("B", 2)
    print(f"串行耗时: {time.time() - t0:.1f}s")
    
    # 并行：总耗时 = 最大延迟
    print("\\n=== 并行执行 ===")
    t0 = time.time()
    await asyncio.gather(
        simulated_io("A", 2),
        simulated_io("B", 2)
    )
    print(f"并行耗时: {time.time() - t0:.1f}s")

asyncio.run(main())
`},{id:6,title:"第42关测验",type:"quiz",content:`**问题1**：async def 定义的函数返回的是什么？
- A. 普通函数
- B. 协程对象
- C. 线程
- D. 生成器

**问题2**：asyncio.gather() 的作用？
- A. 启动事件循环
- B. 并发执行多个协程并等待全部完成
- C. 创建新线程
- D. 取消任务

**问题3**：异步编程适合的场景？
- A. CPU 密集型计算
- B. 大量 IO 操作（网络、文件）
- C. 图形渲染
- D. 科学计算

**答案**：1.B  2.B  3.B`}],43:[{id:1,title:"单元测试基础",type:"explanation",content:`**单元测试** 是对代码中最小可测试单元进行验证。

\`\`\`python
# 使用 unittest 标准库
import unittest

def add(a, b):
    return a + b

class TestCalculator(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
    
    def test_add_negative(self):
        self.assertEqual(add(-1, 1), 0)

if __name__ == '__main__':
    unittest.main()
\`\`\`

**断言方法**：assertEqual、assertTrue、assertFalse、assertRaises 等`},{id:2,title:"pytest 框架",type:"explanation",content:`**pytest** 是更强大的测试框架（需安装：pip install pytest）。

\`\`\`python
# test_calc.py
import pytest

def add(a, b):
    return a + b

# 测试函数（无需类）
def test_add():
    assert add(2, 3) == 5

def test_add_negative():
    assert add(-1, 1) == 0

# 异常测试
def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        1 / 0

# 参数化测试
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (0, 0, 0),
    (-1, 1, 0),
])
def test_add_param(a, b, expected):
    assert add(a, b) == expected
\`\`\`
`,code:`import pytest

def validate_email(email):
    import re
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))

# 参数化测试
@pytest.mark.parametrize("email,expected", [
    ("user@example.com", True),
    ("invalid", False),
    ("@domain.com", False),
    ("user@sub.domain.com", True),
    ("user@domain", False),
])
def test_email_validation(email, expected):
    assert validate_email(email) == expected

# 边界测试
def test_empty_email():
    assert validate_email("") == False

def test_special_chars():
    assert validate_email("user+tag@example.com") == True
`},{id:3,title:"Fixture 与 Setup",type:"explanation",content:`**Fixture** 是 pytest 中管理测试前/后操作的机制：

\`\`\`python
import pytest

@pytest.fixture
def db_connection():
    # 前置：创建连接
    conn = create_connection()
    yield conn  # 提供给测试使用
    # 后置：关闭连接
    conn.close()

def test_query(db_connection):
    result = db_connection.query("SELECT 1")
    assert result is not None

# 作用域
@pytest.fixture(scope='module')  # 整个模块共享
def config():
    return load_config()
\`\`\`

**作用域**：function（默认）、class、module、session`},{id:4,title:"Mock 与覆盖率",type:"explanation",content:`**Mock** 用于模拟外部依赖，**覆盖率** 衡量测试覆盖程度。

\`\`\`python
from unittest.mock import Mock, patch

# 模拟外部 API
@patch('requests.get')
def test_api(mock_get):
    mock_get.return_value.status_code = 200
    mock_get.return_value.json.return_value = {"data": "test"}
    
    result = fetch_data()
    assert result == {"data": "test"}

# 覆盖率（pip install pytest-cov）
# pytest --cov=src tests/
\`\`\`

**测试金字塔**：
- 单元测试（最多）：快速、稳定、覆盖核心逻辑
- 集成测试：验证模块交互
- 端到端测试（最少）：验证完整流程`},{id:5,title:"练习：计算器测试",type:"exercise",content:`为一个简单的计算器模块编写完整的测试套件：

\`\`\`python
# calculator.py
def divide(a, b):
    if b == 0:
        raise ValueError("除数不能为0")
    return a / b

# test_calculator.py - 编写测试
\`\`\`
`,code:`import pytest

# calculator.py
def divide(a, b):
    if b == 0:
        raise ValueError("除数不能为0")
    return a / b

# test_calculator.py
class TestDivide:
    def test_normal(self):
        assert divide(10, 2) == 5.0
    
    def test_float(self):
        assert divide(7, 2) == 3.5
    
    def test_zero_divisor(self):
        with pytest.raises(ValueError, match="除数不能为0"):
            divide(10, 0)
    
    @pytest.mark.parametrize("a,b,expected", [
        (10, 5, 2),
        (9, 3, 3),
        (100, 10, 10),
    ])
    def test_parametrized(self, a, b, expected):
        assert divide(a, b) == expected
`},{id:6,title:"第43关测验",type:"quiz",content:`**问题1**：pytest 中 @pytest.fixture 的作用？
- A. 标记测试函数
- B. 提供测试前/后的设置和清理
- C. 定义测试数据
- D. 创建 Mock 对象

**问题2**：以下哪个是 pytest 相比 unittest 的优势？
- A. 运行更快
- B. 无需类即可编写测试，支持参数化
- C. 自动生成测试
- D. 无需安装

**问题3**：测试金字塔中应该最多的是？
- A. 端到端测试
- B. 集成测试
- C. 单元测试
- D. 性能测试

**答案**：1.B  2.B  3.C`}],44:[{id:1,title:"Python 内存管理",type:"explanation",content:`Python 内存管理采用三种机制：

**1. 引用计数**（主要机制）
\`\`\`python
a = [1, 2, 3]  # 引用计数 = 1
b = a           # 引用计数 = 2
del a           # 引用计数 = 1
# 当引用计数为 0 时，立即释放
\`\`\`

**2. 标记-清除**（处理循环引用）
\`\`\`python
a.b = b
b.a = a  # 循环引用，引用计数无法回收
# 标记-清除机制定期扫描并回收
\`\`\`

**3. 分代回收**（优化性能）
- 第0代：新创建的对象，频繁扫描
- 第1代：存活一段时间的对象，较少扫描
- 第2代：长期存活的对象，很少扫描

可以用 gc 模块控制：\`import gc; gc.collect()\``},{id:2,title:"内存分析工具",type:"explanation",content:`\`\`\`python
import sys
import tracemalloc

# 查看对象内存占用
data = list(range(10000))
print(f"列表大小: {sys.getsizeof(data)} bytes")

# 内存追踪
tracemalloc.start()
snapshot1 = tracemalloc.take_snapshot()

# 创建大量对象
big_list = [{'id': i, 'data': 'x' * 100} for i in range(10000)]

snapshot2 = tracemalloc.take_snapshot()
stats = snapshot2.compare_to(snapshot1, 'lineno')
for stat in stats[:5]:
    print(stat)

# 使用 gc 模块
import gc
gc.collect()  # 强制垃圾回收
print(f"回收对象数: {gc.get_count()}")
\`\`\`
`,code:`import sys
import tracemalloc

# 内存对比
tracemalloc.start()

# 方式1: 列表
list_data = list(range(1000000))
list_size = sys.getsizeof(list_data)

# 方式2: 生成器（几乎不占内存）
gen_data = range(1000000)
gen_size = sys.getsizeof(gen_data)

print(f"列表大小: {list_size} bytes")
print(f"生成器大小: {gen_size} bytes")
print(f"节省: {(1 - gen_size/list_size)*100:.1f}%")

# 内存快照
snapshot = tracemalloc.take_snapshot()
print(f"当前内存快照对象数: {len(snapshot.statistics('lineno'))}")
`},{id:3,title:"性能分析 cProfile",type:"explanation",content:`**cProfile** 是 Python 内置的性能分析工具：

\`\`\`python
import cProfile
import pstats

# 方式1：装饰器
@cProfile.profile
def slow_function():
    total = 0
    for i in range(1000000):
        total += i
    return total

# 方式2：代码块
profiler = cProfile.Profile()
profiler.enable()

# 要分析的代码
result = sum(range(1000000))

profiler.disable()

# 查看结果
stats = pstats.Stats(profiler)
stats.sort_stats('cumulative')
stats.print_stats(10)  # 打印前10项
\`\`\`
`,code:`import cProfile
import time

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

def measure():
    start = time.time()
    result = fibonacci(30)
    print(f"fib(30) = {result}, 耗时: {time.time()-start:.3f}s")

# 性能分析
profiler = cProfile.Profile()
profiler.enable()
measure()
profiler.disable()

# 输出 Top 10 耗时函数
profiler.print_stats(10)
`},{id:4,title:"优化技巧",type:"explanation",content:`**常用 Python 性能优化技巧**：

**1. 使用内置函数**（比手写循环快很多）
\`\`\`python
# 慢
total = 0
for i in range(1000000):
    total += i

# 快
total = sum(range(1000000))
\`\`\`

**2. 使用 lru_cache 缓存**
\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=128)
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
\`\`\`

**3. 列表推导式**（比 map/filter 更快）
**4. 使用生成器**（处理大数据）
**5. 局部变量访问更快**
\`\`\`python
# 慢：频繁访问全局变量
def process():
    for i in range(1000000):
        global_var = i

# 快：使用局部变量
def process():
    local = global_var  # 缓存到局部
    for i in range(1000000):
        local = i
\`\`\`
`,code:`from functools import lru_cache
import time

# 优化前：无缓存
def fib_slow(n):
    if n <= 1:
        return n
    return fib_slow(n-1) + fib_slow(n-2)

# 优化后：LRU 缓存
@lru_cache(maxsize=128)
def fib_fast(n):
    if n <= 1:
        return n
    return fib_fast(n-1) + fib_fast(n-2)

# 对比
start = time.time()
print(f"Slow: fib(30) = {fib_slow(30)}, {time.time()-start:.3f}s")

start = time.time()
print(f"Fast: fib(30) = {fib_fast(30)}, {time.time()-start:.6f}s")

# 更多优化示例
def optimize_demo():
    # 使用列表推导代替循环
    squares = [x**2 for x in range(1000000)]
    
    # 使用 join 代替 +=
    parts = [f"item-{i}" for i in range(10000)]
    result = ",".join(parts)  # 比 result += "," + item 快得多
`},{id:5,title:"练习：斐波那契优化",type:"exercise",content:`对比三种实现方式的性能：
1. 递归（无优化）
2. 动态规划（缓存中间结果）
3. 生成器（惰性求值）

\`\`\`python
import time
# 在这里编写代码
\`\`\`
`,code:`import time
import sys
sys.setrecursionlimit(10000)

# 方式1: 朴素递归
def fib_recursive(n):
    if n <= 1:
        return n
    return fib_recursive(n-1) + fib_recursive(n-2)

# 方式2: 动态规划
def fib_dp(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# 方式3: 生成器
def fib_generator():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# 对比
n = 30

start = time.time()
r1 = fib_recursive(n)
print(f"递归: {r1}, {(time.time()-start)*1000:.1f}ms")

start = time.time()
r2 = fib_dp(n)
print(f"动态规划: {r2}, {(time.time()-start)*1000:.1f}ms")

start = time.time()
gen = fib_generator()
r3 = next(gen)
for _ in range(n):
    r3 = next(gen)
print(f"生成器: {r3}, {(time.time()-start)*1000:.1f}ms")
`},{id:6,title:"第44关测验",type:"quiz",content:`**问题1**：Python 主要的内存回收机制？
- A. 手动 free()
- B. 引用计数 + 标记清除 + 分代回收
- C. Java 式的 GC
- D. 不回收

**问题2**：@lru_cache 的主要作用？
- A. 加速递归函数
- B. 缓存函数结果，避免重复计算
- C. 减少内存使用
- D. 加密数据

**问题3**：以下哪种方式最慢？
- A. sum(range(1000000))
- B. for 循环累加
- C. 列表推导式
- D. numpy.sum

**答案**：1.B  2.B  3.B`}]},Ie={4:[{id:1,title:"计算 1 到 100 的和",description:`编写一个程序，使用 for 循环计算 1 到 100 所有整数的和，并打印结果。

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
`,testCases:[{name:"基础测试",input:"无",expected:"Python"}],xpReward:50}],19:[{id:1,title:"模拟 API 客户端",description:`使用 requests_ 模拟库实现一个 API 客户端。

要求：
- GET /api/users 获取用户列表
- POST /api/users 创建新用户
- GET /api/users/{id} 获取单个用户
- 打印每次请求的状态码和响应体`,difficulty:"medium",initialCode:`from requests_ import Session

s = Session(base_url="https://api.example.com")

# 1. 获取用户列表
# resp = s.get("/api/users")
# print(resp.status_code, resp.json())

# 2. 创建新用户
# resp = s.post("/api/users", json={"name":"小明","age":20})
# print(resp.status_code, resp.json())

# 3. 获取 id=1 的用户
# resp = s.get("/api/users/1")
# print(resp.status_code, resp.json())
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "GET 请求成功",
    "passed": "200" in output,
    "message": "GET 请求应返回 200"
})
_test_results.append({
    "name": "POST 创建成功",
    "passed": "201" in output or "200" in output,
    "message": "POST 创建应返回 201 或 200"
})
_test_results.append({
    "name": "包含用户名",
    "passed": "小明" in output or "name" in output,
    "message": "响应中应包含用户名"
})
`,testCases:[{name:"基础测试",input:"无",expected:"200"}],xpReward:30},{id:2,title:"带认证的请求封装",description:`封装一个带 Token 认证的 API 客户端。

要求：
- 类 ApiClient，构造函数接收 token
- 方法 request(method, path) 自动加 Authorization 头
- 401 时自动重试一次
- 模拟调用并打印结果`,difficulty:"hard",initialCode:`from requests_ import Session

class ApiClient:
    def __init__(self, token):
        self.token = token
        self.s = Session(base_url="https://api.example.com")

    def request(self, method, path, json=None):
        # 在此实现：加 Authorization 头
        # 401 时重试一次
        pass

client = ApiClient(token="abc123")
print(client.request("GET", "/api/profile"))
print(client.request("POST", "/api/posts", json={"title":"Hello"}))
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含认证信息",
    "passed": "abc123" in output or "token" in output.lower() or "Authorization" in output,
    "message": "应包含 Token 认证信息"
})
_test_results.append({
    "name": "GET 请求成功",
    "passed": "200" in output,
    "message": "GET /api/profile 应返回 200"
})
_test_results.append({
    "name": "POST 请求成功",
    "passed": "201" in output or "200" in output,
    "message": "POST 应返回 201 或 200"
})
`,testCases:[{name:"基础测试",input:"无",expected:"200"}],xpReward:40}],20:[{id:1,title:"日志解析器",description:`用正则表达式解析 Nginx 日志。

日志格式：[IP] - - [时间] "METHOD /path HTTP/1.1" 状态码 字节数

要求：
- 提取 IP、时间、方法、路径、状态码
- 统计各状态码数量
- 打印 Top 3 IP`,difficulty:"medium",initialCode:`import re
from collections import Counter

logs = [
    '192.168.1.1 - - [2024-01-01 10:00:00] "GET /index.html HTTP/1.1" 200 1024',
    '10.0.0.5 - - [2024-01-01 10:01:00] "POST /api/login HTTP/1.1" 401 512',
    '192.168.1.1 - - [2024-01-01 10:02:00] "GET /style.css HTTP/1.1" 200 2048',
    '10.0.0.5 - - [2024-01-01 10:03:00] "GET /api/users HTTP/1.1" 403 256',
    '172.16.0.3 - - [2024-01-01 10:04:00] "DELETE /api/post/1 HTTP/1.1" 200 128',
]

pattern = r'(\\d+\\.\\d+\\.\\d+\\.\\d+).*?\\[([^\\]]+)\\].*?"(\\w+)\\s+(\\S+).*?"\\s+(\\d+)'

# 在此解析并输出
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含 IP 地址",
    "passed": "192.168.1.1" in output or "10.0.0.5" in output,
    "message": "应提取并显示 IP 地址"
})
_test_results.append({
    "name": "包含状态码统计",
    "passed": "200" in output and ("401" in output or "403" in output),
    "message": "应统计状态码 200/401/403"
})
_test_results.append({
    "name": "包含请求方法",
    "passed": "GET" in output or "POST" in output,
    "message": "应提取 HTTP 方法"
})
`,testCases:[{name:"基础测试",input:"无",expected:"192.168"}],xpReward:35},{id:2,title:"邮箱与手机号提取",description:`从一段文本中提取所有邮箱和手机号。

要求：
- 邮箱正则：xxx@xxx.xxx
- 手机号正则：1开头11位数字
- 去重后分别打印`,difficulty:"medium",initialCode:`import re

text = '''
联系方式：
邮箱：alice@gmail.com, bob@qq.com, alice@gmail.com（重复）
电话：13812345678, 15987654321, 13812345678（重复）
无效：abc@test, 12345678901
'''

# email_pattern = ...
# phone_pattern = ...

# 提取、去重、打印
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "提取邮箱",
    "passed": "alice@gmail.com" in output or "bob@qq.com" in output,
    "message": "应提取邮箱地址"
})
_test_results.append({
    "name": "提取手机号",
    "passed": "13812345678" in output or "15987654321" in output,
    "message": "应提取手机号"
})
_test_results.append({
    "name": "去重处理",
    "passed": True,
    "message": "检查是否对重复项做了去重"
})
`,testCases:[{name:"基础测试",input:"无",expected:"@"}],xpReward:30}],21:[{id:1,title:"词频统计器",description:`用 Counter 统计一段英文的词频。

要求：
- 去除标点符号（用正则）
- 转小写
- 用 Counter 统计
- 打印 Top 10 高频词及其出现次数`,difficulty:"medium",initialCode:`import re
from collections import Counter

text = """
The quick brown fox jumps over the lazy dog.
The dog was not amused. The fox laughed and laughed.
A quick fox is a happy fox. The lazy dog just slept.
"""

# 去标点 → 转小写 → 分词 → Counter → most_common(10)
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含 the",
    "passed": "the" in output.lower(),
    "message": "the 应该是高频词"
})
_test_results.append({
    "name": "包含 fox",
    "passed": "fox" in output.lower(),
    "message": "fox 应该在统计中"
})
_test_results.append({
    "name": "包含数字计数",
    "passed": any(c.isdigit() for c in output),
    "message": "应该显示词频数字"
})
`,testCases:[{name:"基础测试",input:"无",expected:"the"}],xpReward:30},{id:2,title:"学生成绩 defaultdict 分组",description:`用 defaultdict 按班级分组学生成绩。

要求：
- 数据：[(班级, 姓名, 分数)] 列表
- 用 defaultdict(list) 按班级分组
- 计算每个班级的平均分
- 按平均分从高到低打印`,difficulty:"medium",initialCode:`from collections import defaultdict

students = [
    ("A班", "小明", 85),
    ("B班", "小红", 92),
    ("A班", "小刚", 78),
    ("B班", "小丽", 88),
    ("A班", "小强", 90),
    ("C班", "小华", 76),
    ("B班", "小芳", 95),
]

# 用 defaultdict 分组
# 计算每班平均分
# 排序打印
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含 A班",
    "passed": "A班" in output or "A" in output,
    "message": "应包含 A 班信息"
})
_test_results.append({
    "name": "包含平均分",
    "passed": any(x in output for x in ["平均", "avg", "mean", "84"]),
    "message": "应计算并显示平均分"
})
_test_results.append({
    "name": "B班平均正确",
    "passed": "92" in output or "91" in output or "92.5" in output or "91.6" in output,
    "message": "B 班平均分约为 91.6"
})
`,testCases:[{name:"基础测试",input:"无",expected:"班"}],xpReward:35}],22:[{id:1,title:"密码组合生成器",description:`用 itertools 生成密码组合。

要求：
- 字符集：abc123
- 用 product 生成长度 3 的所有组合
- 用 permutations 生成排列
- 统计各自总数并打印前 5 个`,difficulty:"medium",initialCode:`from itertools_ import product, permutations

chars = "abc123"

# product: 长度 3 的所有组合
# perms: 长度 3 的排列

# 打印总数 + 前 5 个
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "product 总数 216",
    "passed": "216" in output,
    "message": "6^3 = 216 种组合"
})
_test_results.append({
    "name": "permutations 总数 120",
    "passed": "120" in output,
    "message": "P(6,3) = 120 种排列"
})
_test_results.append({
    "name": "有组合输出",
    "passed": "a" in output and "1" in output,
    "message": "应打印部分组合"
})
`,testCases:[{name:"基础测试",input:"无",expected:"216"}],xpReward:30},{id:2,title:"购物车组合优化",description:`用 itertools.combinations 找最优购物组合。

要求：
- 商品列表 [(名称, 价格, 满意度)]
- 预算 100 元
- 找满意度最高的组合（选 2~3 件）
- 打印最优组合和总花费`,difficulty:"hard",initialCode:`from itertools_ import combinations

items = [
    ("耳机", 30, 8),
    ("鼠标", 25, 7),
    ("键盘", 50, 9),
    ("鼠标垫", 15, 4),
    ("U盘", 40, 6),
    ("支架", 20, 5),
]

budget = 100

# 遍历 combinations(items, 2) 和 (items, 3)
# 找满意度之和最高且总价 <= budget 的组合
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "总花费 <= 100",
    "passed": any(x in output for x in ["100", "95", "90", "85", "80", "75", "70"]),
    "message": "总花费应不超过 100"
})
_test_results.append({
    "name": "包含商品名",
    "passed": "耳机" in output or "键盘" in output or "鼠标" in output,
    "message": "应包含商品名称"
})
_test_results.append({
    "name": "包含满意度",
    "passed": any(c.isdigit() for c in output),
    "message": "应输出满意度数字"
})
`,testCases:[{name:"基础测试",input:"无",expected:"键盘"}],xpReward:40}],23:[{id:1,title:"矩阵运算实战",description:`用 NumPy 实现矩阵运算。

要求：
- 创建 3x3 随机矩阵 A 和 B
- 计算 A+B, A*B（矩阵乘法）, A 的转置, A 的逆
- 计算行列式
- 打印所有结果`,difficulty:"medium",initialCode:`import numpy_ as np

np.seed_(42)
A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 10]])
B = np.array([[2, 0, 1], [0, 3, 0], [1, 0, 2]])

# A + B
# A @ B （矩阵乘法）
# A.T （转置）
# np.linalg.inv(A) （逆矩阵）
# np.linalg.det(A) （行列式）
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "矩阵加法结果",
    "passed": "3" in output and "2" in output,
    "message": "A+B 应包含 3, 2, 4 等数字"
})
_test_results.append({
    "name": "包含行列式",
    "passed": any(x in output for x in ["det", "行列式", "-3", "-3.0"]),
    "message": "应计算并显示行列式"
})
_test_results.append({
    "name": "有逆矩阵",
    "passed": True,
    "message": "应计算逆矩阵（输出含负数即可）"
})
`,testCases:[{name:"基础测试",input:"无",expected:"3"}],xpReward:35},{id:2,title:"数据分析统计",description:`用 NumPy 做数据分析统计。

要求：
- 生成 100 个正态分布随机数（均值 50，标准差 10）
- 计算均值、中位数、标准差、方差、最大/最小值
- 找出 > 60 的数据占比
- 画出直方图`,difficulty:"hard",initialCode:`import numpy_ as np
from matplotlib_ import plt

np.seed_(42)
data = np.random_normal(50, 10, 100)

# 计算：均值、中位数、标准差、方差、max、min
# 统计 > 60 的占比
# 画直方图 plt.hist(data, bins=20)
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "均值约 50",
    "passed": "50" in output or "49" in output or "51" in output,
    "message": "均值应接近 50"
})
_test_results.append({
    "name": "标准差约 10",
    "passed": "10" in output or "9." in output or "10." in output,
    "message": "标准差应接近 10"
})
_test_results.append({
    "name": "有占比统计",
    "passed": "%" in output or "比" in output or "0." in output,
    "message": "应输出 >60 的占比"
})
`,testCases:[{name:"基础测试",input:"无",expected:"50"}],xpReward:40}],24:[{id:1,title:"销售数据分析",description:`用 Pandas 分析销售数据。

要求：
- 创建 DataFrame：日期/区域/产品/数量/金额
- 按区域分组计算总销售额
- 按产品分组计算平均数量
- 找销售额最高的日期
- 画出各区域销售额柱状图`,difficulty:"medium",initialCode:`import pandas_ as pd
from matplotlib_ import plt

data = {
    "日期": ["01-01","01-01","01-02","01-02","01-03","01-03","01-04","01-04"],
    "区域": ["华东","华南","华东","华南","华东","华南","华东","华南"],
    "产品": ["A","B","A","B","A","B","A","B"],
    "数量": [10, 8, 15, 6, 12, 10, 20, 5],
    "金额": [1000, 1600, 1500, 1200, 1200, 2000, 2000, 1000],
}
df = pd.DataFrame(data)

# 按区域分组 → 总销售额
# 按产品分组 → 平均数量
# 找最高额日期
# 画柱状图
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含华东/华南",
    "passed": "华东" in output or "华南" in output,
    "message": "应按区域分组"
})
_test_results.append({
    "name": "有金额数据",
    "passed": "1000" in output or "2000" in output or "5700" in output or "7800" in output,
    "message": "应包含金额数字"
})
_test_results.append({
    "name": "有产品统计",
    "passed": "A" in output or "B" in output or "平均" in output,
    "message": "应有产品分组统计"
})
`,testCases:[{name:"基础测试",input:"无",expected:"华东"}],xpReward:35},{id:2,title:"数据清洗与合并",description:`模拟真实数据清洗流程。

要求：
- 创建两个 DataFrame（用户表 + 订单表）
- 用户表有缺失值，用平均值填充
- merge 两表（inner join）
- 计算每用户消费总额
- 排序打印`,difficulty:"hard",initialCode:`import pandas_ as pd

users = pd.DataFrame({
    "uid": [1, 2, 3, 4],
    "name": ["小明", "小红", "小刚", None],
    "age": [20, None, 22, 25],
})

orders = pd.DataFrame({
    "uid": [1, 1, 2, 3, 3, 3],
    "amount": [100, 200, 150, 80, 120, 300],
})

# 用 age 均值填充缺失
# name 缺失填 "未知"
# merge 两表
# groupby uid → sum amount
# 排序打印
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "缺失值已填充",
    "passed": "未知" in output or "NaN" not in output,
    "message": "name 缺失应填'未知'"
})
_test_results.append({
    "name": "合并成功",
    "passed": "小明" in output or "小红" in output,
    "message": "merge 后应有用户名"
})
_test_results.append({
    "name": "有消费总额",
    "passed": "300" in output or "amount" in output or "sum" in output.lower() or "总额" in output,
    "message": "应有消费总额统计"
})
`,testCases:[{name:"基础测试",input:"无",expected:"小明"}],xpReward:40}],25:[{id:1,title:"多子图数据看板",description:`用 Matplotlib subplot 画 2x2 多子图。

要求：
- 左上：折线图（季度销售额趋势）
- 右上：柱状图（各区域对比）
- 左下：饼图（产品占比）
- 右下：散点图（广告投入 vs 销售额）
- 设置标题、图例`,difficulty:"medium",initialCode:`from matplotlib_ import plt

quarters = ["Q1", "Q2", "Q3", "Q4"]
sales = [320, 380, 420, 450]
regions = ["华东", "华南", "华北", "西部"]
region_sales = [500, 450, 300, 200]
products = ["A", "B", "C"]
product_share = [40, 35, 25]
ad_spend = [50, 80, 100, 120, 150, 200]
ad_sales = [200, 350, 420, 500, 620, 800]

fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 左上：折线图
# 右上：柱状图
# 左下：饼图
# 右下：散点图

plt.render("多子图看板")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含 Q1~Q4",
    "passed": "Q1" in output or "Q2" in output,
    "message": "折线图应包含季度数据"
})
_test_results.append({
    "name": "包含区域",
    "passed": "华东" in output or "华南" in output,
    "message": "柱状图应包含区域"
})
_test_results.append({
    "name": "渲染输出",
    "passed": "多子图" in output or "看板" in output,
    "message": "应渲染输出多子图"
})
`,testCases:[{name:"基础测试",input:"无",expected:"多子图"}],xpReward:35},{id:2,title:"动态动画模拟",description:`用 Matplotlib animation 模拟正弦波动画。

要求：
- 生成 x = 0~4π
- 画 sin(x) 曲线
- 用文本方式描述动画帧（3 帧）
- 打印每帧的相位变化`,difficulty:"hard",initialCode:`from matplotlib_ import plt
import math

x = [i * 0.1 for i in range(126)]  # 0 ~ 4π

for frame in range(3):
    phase = frame * 0.5
    y = [math.sin(xi + phase) for xi in x]
    # 画图
    plt.figure(figsize=(8, 3))
    plt.plot(x, y, label=f"sin(x+{phase:.1f})")
    plt.title(f"Frame {frame} - phase={phase:.1f}")
    plt.legend()
    plt.render(f"sin_wave_frame_{frame}")
    print(f"帧 {frame}: 相位={phase:.1f}, 峰值={max(y):.2f}")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "3 帧输出",
    "passed": output.count("帧") >= 3 or output.count("Frame") >= 3,
    "message": "应输出 3 帧动画"
})
_test_results.append({
    "name": "相位变化",
    "passed": "相位" in output or "phase" in output.lower(),
    "message": "应显示相位变化"
})
_test_results.append({
    "name": "峰值正确",
    "passed": "1.00" in output or "1.0" in output or "0.9" in output,
    "message": "sin 峰值应接近 1.0"
})
`,testCases:[{name:"基础测试",input:"无",expected:"帧"}],xpReward:40}],26:[{id:1,title:"线性方程组求解",description:`用 scipy.linalg 解线性方程组。

要求：
- 3x + 2y - z = 1
- 2x - 2y + 4z = -2
- -x + 0.5y - z = 0
- 用 solve() 求解并验证`,difficulty:"medium",initialCode:`import scipy_linalg_ as la
import numpy_ as np

A = np.array([[3, 2, -1], [2, -2, 4], [-1, 0.5, -1]])
b = np.array([1, -2, 0])

# x = la.solve(A, b)
# 验证：np.dot(A, x) ≈ b
# 打印 x 和验证结果
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "包含解",
    "passed": any(x in output for x in ["1.", "0.5", "-1", "2."]),
    "message": "应输出方程组的解"
})
_test_results.append({
    "name": "有验证",
    "passed": "验证" in output or "1.0" in output or "0.0" in output or "≈" in output,
    "message": "应验证解的正确性"
})
`,testCases:[{name:"基础测试",input:"无",expected:"1"}],xpReward:30},{id:2,title:"函数优化求极值",description:`用 scipy.optimize 求函数最小值。

要求：
- f(x) = x^4 - 3x^3 + 2  （有多个极值）
- 用 minimize_scalar 求全局最小值
- 画函数曲线 + 标出最优点
- 打印最优 x 和 f(x)`,difficulty:"hard",initialCode:`import scipy_optimize_ as opt
from matplotlib_ import plt

def f(x):
    return x**4 - 3*x**3 + 2

# result = opt.minimize_scalar(f, bounds=(-5, 5), method='bounded')
# print 最优 x 和 f(x)
# 画函数曲线 + 标最优点
# x_range = [i*0.1 for i in range(-50, 60)]
# y_range = [f(x) for x in x_range]
# plt.plot(x_range, y_range)
# plt.scatter([result.x], [result.fun], color='red', s=100, zorder=5)
# plt.render("优化结果")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "最优 x 约 2.25",
    "passed": "2.2" in output or "2.25" in output or "2.3" in output,
    "message": "x^4-3x^3+2 在 x≈2.25 处取最小值"
})
_test_results.append({
    "name": "最小值约 -4.5",
    "passed": "-4" in output or "-5" in output,
    "message": "f(2.25) ≈ -4.5"
})
_test_results.append({
    "name": "有渲染输出",
    "passed": "优化" in output or "opt" in output.lower() or "图" in output,
    "message": "应渲染函数曲线图"
})
`,testCases:[{name:"基础测试",input:"无",expected:"2.25"}],xpReward:40}],27:[{id:1,title:"待办事项 REST API",description:`用 Flask_ 模拟实现一个完整的待办事项 REST API。

要求：
- GET /todos → 列出全部
- POST /todos → 创建新待办
- PUT /todos/{id} → 更新
- DELETE /todos/{id} → 删除
- 模拟完整 CRUD 流程并打印`,difficulty:"medium",initialCode:`from flask_ import Flask, request, jsonify

app = Flask(__name__)
todos = []
next_id = 1

# GET /todos
# POST /todos {"title": "...", "done": false}
# PUT /todos/{id}
# DELETE /todos/{id}

# 模拟调用：
# print(app.simulate("GET", "/todos"))
# print(app.simulate("POST", "/todos", json={"title":"学Flask","done":False}))
# print(app.simulate("PUT", "/todos/1", json={"done":True}))
# print(app.simulate("DELETE", "/todos/1"))
# print(app.simulate("GET", "/todos"))
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "GET 返回列表",
    "passed": "todos" in output or "items" in output or "[]" in output,
    "message": "GET /todos 应返回列表"
})
_test_results.append({
    "name": "POST 创建成功",
    "passed": "学Flask" in output or "title" in output,
    "message": "POST 应创建待办"
})
_test_results.append({
    "name": "PUT 更新成功",
    "passed": "True" in output or "done" in output,
    "message": "PUT 应更新 done 字段"
})
_test_results.append({
    "name": "DELETE 删除成功",
    "passed": "200" in output or "204" in output or "删除" in output,
    "message": "DELETE 应返回成功"
})
`,testCases:[{name:"基础测试",input:"无",expected:"todos"}],xpReward:40},{id:2,title:"带认证的博客 API",description:`实现带 Session 认证的博客 API。

要求：
- POST /login → 模拟登录
- GET /posts → 公开
- POST /posts → 需登录
- DELETE /posts/{id} → 需登录
- 未登录访问需认证接口返回 401`,difficulty:"hard",initialCode:`from flask_ import Flask, request, jsonify, session

app = Flask(__name__)
app.secret_key = "secret"
posts = []
next_id = 1

# POST /login {"user":"admin","pass":"123"}
# GET /posts
# POST /posts {"title":"...", "body":"..."}
# DELETE /posts/{id}

# 模拟：未登录 POST → 401
# 模拟：登录 → POST → 成功
# 模拟：GET → 列表
# 模拟：DELETE → 成功
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "未登录返回 401",
    "passed": "401" in output,
    "message": "未认证 POST 应返回 401"
})
_test_results.append({
    "name": "登录成功",
    "passed": "200" in output or "登录" in output,
    "message": "登录应成功"
})
_test_results.append({
    "name": "登录后可创建",
    "passed": "201" in output or "200" in output,
    "message": "登录后 POST 应成功"
})
_test_results.append({
    "name": "DELETE 需认证",
    "passed": "401" in output or "204" in output or "200" in output,
    "message": "DELETE 未经认证应 401，认证后应成功"
})
`,testCases:[{name:"基础测试",input:"无",expected:"401"}],xpReward:50}],28:[{id:1,title:"用户管理 API + 自动文档",description:`用 FastAPI_ 实现用户管理 API。

要求：
- GET /users → 列表（支持分页 ?page=1&size=10）
- POST /users → 创建（Pydantic 校验 name 非空、age 0-150）
- GET /users/{id} → 详情
- 打印 OpenAPI 文档地址
- 模拟调用全部接口`,difficulty:"medium",initialCode:`from fastapi_ import FastAPI, Query
from pydantic_ import BaseModel

app = FastAPI(title="用户管理 API", version="1.0.0")
users = []
next_id = 1

class UserCreate(BaseModel):
    name: str
    age: int
    @classmethod
    def validate(cls, data):
        if not data.get("name"): raise ValueError("name 不能为空")
        if not (0 <= data.get("age", -1) <= 150): raise ValueError("age 须 0-150")
        return cls(name=data["name"], age=data["age"])

# GET /users?page=1&size=10
# POST /users
# GET /users/{id}

# 打印文档地址
# 模拟调用
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "有文档地址",
    "passed": "docs" in output.lower() or "openapi" in output.lower() or "/docs" in output,
    "message": "应打印 Swagger 文档地址"
})
_test_results.append({
    "name": "POST 创建成功",
    "passed": "201" in output or "200" in output,
    "message": "POST 应创建成功"
})
_test_results.append({
    "name": "分页参数",
    "passed": "page" in output or "size" in output or "items" in output,
    "message": "应支持分页"
})
_test_results.append({
    "name": "校验失败处理",
    "passed": True,
    "message": "非法 age 应有校验错误"
})
`,testCases:[{name:"基础测试",input:"无",expected:"docs"}],xpReward:40},{id:2,title:"依赖注入商品系统",description:`用 Depends 实现依赖注入的商品系统。

要求：
- 依赖 get_db() 返回模拟数据库连接
- 依赖 get_current_user(token) 验证 Token
- GET /products 公开
- POST /products 需登录
- 模拟未授权和授权两种场景`,difficulty:"hard",initialCode:`from fastapi_ import FastAPI, Depends
from pydantic_ import BaseModel

app = FastAPI()
products = []

def get_db():
    db = {"connected": True}
    yield db
    db["connected"] = False

def get_current_user(token: str = ""):
    if token != "secret-token":
        return None
    return {"id": 1, "name": "admin", "role": "seller"}

class ProductCreate(BaseModel):
    name: str
    price: float
    @classmethod
    def validate(cls, data):
        if not data.get("name"): raise ValueError("name 不能为空")
        if data.get("price", 0) <= 0: raise ValueError("price > 0")
        return cls(name=data["name"], price=float(data["price"]))

# GET /products（公开）
# POST /products（需 get_current_user 依赖）

# 模拟：无 token POST → 401
# 模拟：带 token POST → 成功
# 模拟：GET → 列表
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "无 token 返回 401",
    "passed": "401" in output or "None" in output or "未登录" in output,
    "message": "无 token 应返回 401"
})
_test_results.append({
    "name": "有 token 创建成功",
    "passed": "201" in output or "200" in output or "ok" in output.lower(),
    "message": "认证后 POST 应成功"
})
_test_results.append({
    "name": "GET 返回列表",
    "passed": "products" in output or "items" in output,
    "message": "GET 应返回商品列表"
})
`,testCases:[{name:"基础测试",input:"无",expected:"401"}],xpReward:50}],29:[{id:1,title:"图书管理系统 ORM",description:`用 Django_ ORM 模拟实现图书管理。

要求：
- Author 模型：name, age
- Book 模型：title, price, author(ForeignKey)
- 插入 3 作者 5 本书
- 查询：某作者的书、价格 > 40 的书、按价格排序
- 删除某作者及关联书籍（级联）`,difficulty:"medium",initialCode:`from django_ import models

class Author(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()

class Book(models.Model):
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    author = models.ForeignKey(Author, related_name="books")

# 建表
# 插入数据
# 查询
# 删除级联
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "有作者数据",
    "passed": "name" in output or "作者" in output,
    "message": "应显示作者信息"
})
_test_results.append({
    "name": "有价格查询",
    "passed": "price" in output or "价格" in output or "40" in output,
    "message": "应包含价格查询"
})
_test_results.append({
    "name": "有排序输出",
    "passed": "title" in output or "title" in output.lower() or "书" in output,
    "message": "应按价格排序输出"
})
`,testCases:[{name:"基础测试",input:"无",expected:"name"}],xpReward:40},{id:2,title:"权限系统模拟",description:`用 Django_ auth 模拟权限系统。

要求：
- 注册 3 个用户：编辑/审核/读者
- 定义权限：view/edit/publish
- 模拟各角色访问不同操作
- 打印权限检查结果`,difficulty:"hard",initialCode:`from django_ import auth

# 注册用户
# auth.register("alice", "123", group="编辑")
# auth.register("bob", "666", group="审核")
# auth.register("carol", "789", group="读者")

# 权限检查函数
# def can_edit(user): ...
# def can_publish(user): ...

# 模拟各角色操作
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "有用户名",
    "passed": "alice" in output or "bob" in output,
    "message": "应包含用户名"
})
_test_results.append({
    "name": "有权限检查",
    "passed": "权限" in output or "perm" in output.lower() or "403" in output or "200" in output,
    "message": "应有权限检查结果"
})
_test_results.append({
    "name": "角色区分",
    "passed": "编辑" in output or "审核" in output or "读者" in output,
    "message": "应区分不同角色"
})
`,testCases:[{name:"基础测试",input:"无",expected:"alice"}],xpReward:45}],30:[{id:1,title:"多页爬虫 + Pipeline",description:`实现多页爬虫并模拟 Pipeline 处理。

要求：
- Spider 爬取 5 页商品数据
- 每页 3 条：name/price/rating
- Pipeline 过滤 rating < 3 的数据
- 统计平均价格
- 打印最终结果`,difficulty:"medium",initialCode:`from scrapy_ import Spider, Item, Field
from collections import Counter

class ProductItem(Item):
    name = Field()
    price = Field()
    rating = Field()

class ProductSpider(Spider):
    name = "products"
    start_urls = [f"https://shop.example.com/page/{p}" for p in range(1, 6)]

    def parse(self, response):
        for p in response.css("div.product"):
            yield ProductItem(
                name = p.css("h3.name::text").get(),
                price = float(p.css("span.price::text").get()),
                rating = int(p.css("span.rating::text").get()),
            )

# 运行爬虫
# results = ProductSpider.run()

# 模拟 Pipeline 过滤 rating < 3
# 计算平均价格
# 打印结果
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "爬取多条数据",
    "passed": "15" in output or "条" in output,
    "message": "5 页 x 3 条 = 15 条"
})
_test_results.append({
    "name": "有价格数据",
    "passed": "price" in output or "价格" in output or any(c.isdigit() for c in output),
    "message": "应包含价格数据"
})
_test_results.append({
    "name": "有过滤处理",
    "passed": "rating" in output or "评分" in output or "过滤" in output,
    "message": "应过滤低评分数据"
})
`,testCases:[{name:"基础测试",input:"无",expected:"15"}],xpReward:40},{id:2,title:"反爬策略模拟",description:`模拟实现反爬策略。

要求：
- 随机 UA 轮换（5 个 UA）
- 模拟代理池（3 个 IP）
- 随机延迟 1-3 秒
- 统计每次请求用的 UA 和 IP
- 打印 10 次请求的 UA/IP 分布`,difficulty:"hard",initialCode:`import random
from collections import Counter

random.seed(42)

user_agents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0)",
    "Mozilla/5.0 (Linux; Android 13; Pixel 7)",
    "Mozilla/5.0 (X11; Linux x86_64; rv:120.0)",
]

proxies = [
    "203.0.113.1:8080",
    "198.51.100.2:3128",
    "192.0.2.3:8888",
]

# 模拟 10 次请求
# 每次随机选 UA 和 proxy
# 统计分布
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "有 UA 输出",
    "passed": "Mozilla" in output,
    "message": "应包含 User-Agent"
})
_test_results.append({
    "name": "有代理 IP",
    "passed": "203." in output or "198." in output or "192." in output,
    "message": "应包含代理 IP"
})
_test_results.append({
    "name": "有分布统计",
    "passed": "分布" in output or "count" in output.lower() or "Counter" in output,
    "message": "应有 UA/IP 分布统计"
})
`,testCases:[{name:"基础测试",input:"无",expected:"Mozilla"}],xpReward:45}],31:[{id:1,title:"销售数据交互看板",description:`用 Dash 构建交互式销售看板。

要求：
- 下拉框选区域（全部/华东/华南/华北）
- 4 个 KPI 指标卡（总销售额/订单数/客单价/区域数）
- 折线图：按月趋势
- 柱状图：按产品对比
- 模拟回调触发并打印结果`,difficulty:"medium",initialCode:`import pandas_ as pd
from dash_ import Dash, html, dcc, Input, Output, callback
import plotly_express_ as px

df = pd.DataFrame({
    "月份": ["1月","2月","3月","4月","5月"]*3,
    "区域": ["华东"]*5 + ["华南"]*5 + ["华北"]*5,
    "产品": ["A","B","A","B","A"]*3,
    "销售额": [100,150,120,180,200, 80,120,90,140,160, 60,90,70,110,130],
    "订单数": [10,15,12,18,20, 8,12,9,14,16, 6,9,7,11,13],
})

app = Dash(__name__)

# 布局 + 回调
# app.callback_trigger("region-dd", value="华东")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "有 KPI 指标",
    "passed": "销售额" in output or "订单" in output or "客单" in output,
    "message": "应有 KPI 指标卡"
})
_test_results.append({
    "name": "有区域筛选",
    "passed": "华东" in output or "华南" in output or "华北" in output,
    "message": "应支持区域筛选"
})
_test_results.append({
    "name": "有图表描述",
    "passed": "趋势" in output or "Line" in output or "对比" in output or "Bar" in output,
    "message": "应有图表描述"
})
`,testCases:[{name:"基础测试",input:"无",expected:"销售额"}],xpReward:40},{id:2,title:"多级联动筛选器",description:`实现多级联动筛选器。

要求：
- 一级下拉：大区（华东/华南/华北）
- 二级下拉：根据大区联动显示省份
- 三级下拉：根据省份联动显示城市
- 数据展示：选中后显示该城市数据
- 模拟选"华东"→"上海"并打印`,difficulty:"hard",initialCode:`from dash_ import Dash, html, dcc, Input, Output, callback

app = Dash(__name__)

data = {
    "华东": {"上海": {"uv": 5000, "conv": 320}, "杭州": {"uv": 3000, "conv": 180}},
    "华南": {"广州": {"uv": 4000, "conv": 250}, "深圳": {"uv": 4500, "conv": 280}},
    "华北": {"北京": {"uv": 6000, "conv": 400}, "天津": {"uv": 2000, "conv": 120}},
}

# 三级联动布局 + 两个 callback
# 模拟选 华东 → 上海
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "有大区选择",
    "passed": "华东" in output or "华南" in output or "华北" in output,
    "message": "应有一级大区选择"
})
_test_results.append({
    "name": "有省份联动",
    "passed": "上海" in output or "杭州" in output or "广州" in output,
    "message": "应根据大区联动显示省份"
})
_test_results.append({
    "name": "有数据输出",
    "passed": "5000" in output or "uv" in output.lower() or "conv" in output.lower(),
    "message": "应输出选中城市的数据"
})
`,testCases:[{name:"基础测试",input:"无",expected:"华东"}],xpReward:50}],32:[{id:1,title:"数据分析 Notebook",description:`用 jupyter_ 模拟构建一个数据分析 Notebook。

要求：
- Markdown 标题 + 说明
- 数据加载 cell
- 数据分析 cell（统计 + 可视化）
- 结论 Markdown cell
- 导出 HTML 模拟`,difficulty:"medium",initialCode:`import jupyter_ as nb
import pandas_ as pd

# Cell 1: Markdown 标题
nb.markdown("# 数据分析报告\\n## 销售数据概览")

# Cell 2: 加载数据
df = pd.DataFrame({
    "月份": ["1月","2月","3月","4月"],
    "销售额": [100, 150, 120, 180],
})
print(df.describe())

# Cell 3: 结论
nb.markdown("> 4 月销售额最高，建议加大投入。")

# 导出
nb.export("html")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "有 Markdown 标题",
    "passed": "数据分析" in output or "报告" in output or "#" in output,
    "message": "应有 Markdown 标题"
})
_test_results.append({
    "name": "有数据统计",
    "passed": "count" in output.lower() or "mean" in output.lower() or "150" in output or "180" in output,
    "message": "应有数据统计输出"
})
_test_results.append({
    "name": "有导出",
    "passed": "html" in output.lower() or "导出" in output or "export" in output.lower(),
    "message": "应模拟导出 HTML"
})
`,testCases:[{name:"基础测试",input:"无",expected:"数据分析"}],xpReward:35},{id:2,title:"交互式参数探索器",description:`用 ipywidgets interact 构建参数探索器。

要求：
- 函数 f(a, b, op)：a/b 是滑块，op 是下拉
- op = add/sub/mul/div
- 模拟 4 种操作
- 打印每次结果和算式`,difficulty:"hard",initialCode:`import jupyter_ as nb

def f(a, b, op):
    if op == "add": res = a + b; sym = "+"
    elif op == "sub": res = a - b; sym = "-"
    elif op == "mul": res = a * b; sym = "*"
    elif op == "div": res = a / b if b != 0 else "∞"; sym = "/"
    line = f"{a} {sym} {b} = {res}"
    print(line)
    return line

sim = nb.interact(f, a=(1,10,3), b=(1,10,2), op=["add","sub","mul","div"])

# 模拟 4 种操作
# sim.simulate(a=6, b=3, op="add")
# sim.simulate(a=6, b=3, op="sub")
# sim.simulate(a=6, b=3, op="mul")
# sim.simulate(a=6, b=3, op="div")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "加法正确",
    "passed": "9" in output,
    "message": "6+3=9"
})
_test_results.append({
    "name": "减法正确",
    "passed": "3" in output,
    "message": "6-3=3"
})
_test_results.append({
    "name": "乘法正确",
    "passed": "18" in output,
    "message": "6*3=18"
})
_test_results.append({
    "name": "除法正确",
    "passed": "2" in output and "/" in output,
    "message": "6/3=2"
})
`,testCases:[{name:"基础测试",input:"无",expected:"9"}],xpReward:40}],33:[{id:1,title:"批量图片缩略图生成",description:`模拟批量生成缩略图。

要求：
- 创建 5 张 800x600 模拟图片
- 生成缩略图（200x150）
- 加水印
- 模拟保存并打印路径`,difficulty:"medium",initialCode:`from pillow_ import Image, ImageDraw

for i in range(5):
    # 创建 800x600 图片
    img = Image.new("RGB", (800, 600), color=(100+i*30, 150, 200))
    draw = ImageDraw.Draw(img)
    draw.text((10, 10), f"Image-{i}", fill=(255,255,255))

    # 生成缩略图
    thumb = img.resize((200, 150))

    # 加水印
    draw_thumb = ImageDraw.Draw(thumb)
    draw_thumb.text((200-80, 150-16), "©Quest", fill=(255,255,0))

    # 模拟保存
    path = f"/tmp/thumbs/img_{i}.png"
    thumb.save(path)
    print(f"✅ 已保存 img_{i}.png (200x150)")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "5 张保存成功",
    "passed": output.count("已保存") == 5 or output.count("✅") == 5,
    "message": "应保存 5 张缩略图"
})
_test_results.append({
    "name": "尺寸 200x150",
    "passed": "200" in output and "150" in output,
    "message": "缩略图应为 200x150"
})
_test_results.append({
    "name": "有水印",
    "passed": "Quest" in output or "©" in output,
    "message": "应包含水印"
})
`,testCases:[{name:"基础测试",input:"无",expected:"已保存"}],xpReward:35},{id:2,title:"图片滤镜处理管道",description:`模拟图片滤镜处理管道。

要求：
- 创建 1 张 400x300 图片
- 依次应用：模糊 → 锐化 → 边缘检测
- 每步保存中间结果
- 打印每步的图片描述`,difficulty:"hard",initialCode:`from pillow_ import Image, ImageDraw, ImageFilter

img = Image.new("RGB", (400, 300), color=(100, 150, 200))
draw = ImageDraw.Draw(img)
draw.rectangle([(50, 50), (350, 250)], fill=(255, 100, 50))
draw.ellipse([(150, 100), (250, 200)], fill=(50, 200, 100)])

print("原图:", img.describe())

# Step 1: 模糊
# blurred = img.filter(ImageFilter.GaussianBlur(radius=3))
# print("模糊:", blurred.describe())

# Step 2: 锐化
# sharpened = blurred.filter(ImageFilter.SHARPEN)
# print("锐化:", sharpened.describe())

# Step 3: 边缘检测
# edges = sharpened.filter(ImageFilter.FIND_EDGES)
# print("边缘:", edges.describe())

# 保存中间结果
# blurred.save("/tmp/step1_blur.png")
# sharpened.save("/tmp/step2_sharp.png")
# edges.save("/tmp/step3_edges.png")
# print("✅ 滤镜管道完成，3 步已保存")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "有原图描述",
    "passed": "原图" in output or "400" in output,
    "message": "应描述原图"
})
_test_results.append({
    "name": "有模糊处理",
    "passed": "模糊" in output or "Blur" in output,
    "message": "应包含模糊步骤"
})
_test_results.append({
    "name": "有边缘检测",
    "passed": "边缘" in output or "edge" in output.lower() or "FIND" in output,
    "message": "应包含边缘检测步骤"
})
_test_results.append({
    "name": "管道完成",
    "passed": "完成" in output or "✅" in output,
    "message": "应提示管道处理完成"
})
`,testCases:[{name:"基础测试",input:"无",expected:"原图"}],xpReward:45}],34:[{id:1,title:"RSI 指标计算策略",description:`实现 RSI（相对强弱指数）指标并生成交易信号。

要求：
- RSI = 100 - 100/(1+RS)，RS = N日涨幅均值/N日跌幅均值
- 用 14 日周期
- RSI < 30 买入，RSI > 70 卖出
- 打印买卖信号点`,difficulty:"medium",initialCode:`import pandas_ as pd
import random

random.seed(42)
prices = [100.0]
for _ in range(60):
    prices.append(round(prices[-1] * (1 + random.gauss(0, 0.02)), 2))

df = pd.DataFrame({"close": prices})

# 计算 14 日 RSI
# delta = df["close"].diff()
# gain = delta.clip(lower=0).rolling(14).mean()
# loss = (-delta.clip(upper=0)).rolling(14).mean()
# rs = gain / loss
# rsi = 100 - 100 / (1 + rs)

# 信号：rsi < 30 买入, rsi > 70 卖出
# 打印信号点
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "有 RSI 值",
    "passed": "rsi" in output.lower() or "RSI" in output or "100" in output,
    "message": "应计算 RSI 指标"
})
_test_results.append({
    "name": "有买卖信号",
    "passed": "买入" in output or "卖出" in output or "buy" in output.lower() or "sell" in output.lower(),
    "message": "应有买卖信号输出"
})
_test_results.append({
    "name": "有 30/70 阈值",
    "passed": "30" in output or "70" in output,
    "message": "应涉及 RSI 30/70 阈值"
})
`,testCases:[{name:"基础测试",input:"无",expected:"RSI"}],xpReward:40},{id:2,title:"多策略组合回测",description:`实现双均线 + RSI 组合策略回测。

要求：
- 信号条件：MA5 > MA20 且 RSI < 70 → 买入
- MA5 < MA20 或 RSI > 70 → 卖出
- 计算总收益率、夏普比率、最大回撤
- 与单双均线策略对比
- 画出净值曲线`,difficulty:"hard",initialCode:`import pandas_ as pd
import numpy_ as np
import random
from matplotlib_ import plt
import math

random.seed(42); np.seed_(42)
prices = [100.0]
for _ in range(200):
    prices.append(round(prices[-1] * (1 + random.gauss(0.001, 0.015)), 2))

df = pd.DataFrame({"close": prices})
df["ma5"] = df["close"].rolling(5).mean()
df["ma20"] = df["close"].rolling(20).mean()

# RSI 14
# delta = df["close"].diff()
# gain = delta.clip(lower=0).rolling(14).mean()
# loss = (-delta.clip(upper=0)).rolling(14).mean()
# df["rsi"] = 100 - 100 / (1 + gain/loss)

# 组合策略回测
# 买入：ma5 > ma20 且 rsi < 70
# 卖出：ma5 < ma20 或 rsi > 70

# 计算指标 + 画图 + 对比
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "有总收益率",
    "passed": "总收益率" in output or "总收益" in output,
    "message": "应输出总收益率"
})
_test_results.append({
    "name": "有夏普比率",
    "passed": "夏普" in output or "sharpe" in output.lower(),
    "message": "应输出夏普比率"
})
_test_results.append({
    "name": "有最大回撤",
    "passed": "回撤" in output or "drawdown" in output.lower(),
    "message": "应输出最大回撤"
})
_test_results.append({
    "name": "有净值曲线",
    "passed": "净值" in output or "策略" in output or "回测" in output,
    "message": "应渲染净值曲线图"
})
`,testCases:[{name:"基础测试",input:"无",expected:"总收益率"}],xpReward:50}],35:[{id:1,title:"向量与数据框操作",description:`实现 R 风格的向量操作和数据框创建。

要求：
- 创建两个向量：name 向量（5个姓名）和 score 向量（5个分数）
- 将它们合并为数据框（DataFrame）
- 计算分数的均值和标准差
- 筛选分数大于平均值的学生
- 添加一列 pass：分数 >= 80 为 "PASS"，否则为 "FAIL"
- 打印所有结果`,difficulty:"easy",initialCode:`import pandas_ as pd
import numpy_ as np

# 1. 创建向量 (R: name <- c("张三","李四","王五","赵六","钱七"))
name = # TODO
score = # TODO

# 2. 创建数据框 (R: df <- data.frame(name, score))
df = # TODO

# 3. 计算统计量
mean_score = # TODO
std_score = # TODO
print(f"平均分: {mean_score:.1f}, 标准差: {std_score:.1f}")

# 4. 筛选高于平均分的学生
above_avg = # TODO
print("高于平均分的学生:")
print(above_avg)

# 5. 添加 pass 列
df["pass"] = # TODO
print("最终数据框:")
print(df)
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "创建了数据框",
    "passed": "name" in output.lower() and "score" in output.lower(),
    "message": "应创建包含姓名和分数的数据框"
})
_test_results.append({
    "name": "计算统计量",
    "passed": "平均分" in output or "均值" in output or "mean" in output.lower(),
    "message": "应输出平均分或均值"
})
_test_results.append({
    "name": "筛选学生",
    "passed": "高于" in output or "筛选" in output or "avg" in output.lower(),
    "message": "应包含筛选逻辑"
})
_test_results.append({
    "name": "添加 pass 列",
    "passed": "PASS" in output or "FAIL" in output or "pass" in output.lower(),
    "message": "应包含 PASS/FAIL 判定"
})
`,testCases:[{name:"基础测试",input:"无",expected:"数据框"}],xpReward:30},{id:2,title:"dplyr 风格数据处理",description:`使用 pandas 模拟 R dplyr 的管道操作，完成数据处理流水线。

要求：
- 生成模拟销售数据（3 个产品 × 4 个地区 × 20 条记录）
- 用链式操作模拟 dplyr 管道：filter → mutate → group_by → summarise
- 计算各地区各产品的总销售额、平均利润率
- 找出总销售额最高的地区-产品组合
- 打印处理结果`,difficulty:"medium",initialCode:`import pandas_ as pd
import numpy_ as np

np.random.seed(42)

# 1. 生成模拟数据
products = ["A", "B", "C"]
regions = ["East", "West", "South", "North"]
n = 60

sales_data = pd.DataFrame({
    "product": # TODO: 随机产品
    "region":  # TODO: 随机地区
    "sales":   # TODO: 随机销售额 (100-500)
    "profit":  # TODO: 随机利润 (10-100)
})

# 2. 模拟 dplyr 管道操作
# R: sales_data %>% filter(sales > 200) %>%
#          mutate(profit_rate = profit/sales) %>%
#          group_by(region, product) %>%
#          summarise(total_sales = sum(sales), avg_rate = mean(profit_rate))
result = (sales_data
    # TODO: 链式操作完成数据处理
)

print("处理结果:")
print(result)

# 3. 找出销售额最高的组合
top = # TODO
print(f"销售额最高的组合: {top}")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "生成模拟数据",
    "passed": "product" in output.lower() and "region" in output.lower(),
    "message": "应包含产品和地区数据"
})
_test_results.append({
    "name": "dplyr 管道操作",
    "passed": "profit_rate" in output.lower() or "利润率" in output or "total_sales" in output.lower(),
    "message": "应包含 mutate 和 summarise 操作"
})
_test_results.append({
    "name": "分组统计",
    "passed": "group" in output.lower() or "地区" in output or "product" in output.lower(),
    "message": "应有分组统计结果"
})
_test_results.append({
    "name": "找出最高组合",
    "passed": "最高" in output or "top" in output.lower() or "best" in output.lower(),
    "message": "应找出销售额最高的组合"
})
`,testCases:[{name:"基础测试",input:"无",expected:"管道操作"}],xpReward:40},{id:3,title:"统计检验实战",description:`实现独立样本 t 检验和卡方检验，模拟 R 的统计假设检验流程。

要求：
- 生成两组随机数据（A 组和 B 组，各 30 个样本）
- 执行独立样本 t 检验（比较两组均值）
- 生成列联表数据，执行卡方独立性检验
- 打印检验统计量、p 值和结论（是否拒绝 H₀）
- 使用显著性水平 α = 0.05`,difficulty:"hard",initialCode:`import numpy_ as np
from scipy_ import stats

np.random.seed(42)

# 1. 生成两组数据
group_a = np.random.normal(50, 10, 30)
group_b = np.random.normal(55, 10, 30)

# 2. 独立样本 t 检验
t_stat, p_value_t = # TODO

print("=== 独立样本 t 检验 ===")
print(f"A 组均值: {group_a.mean():.2f}")
print(f"B 组均值: {group_b.mean():.2f}")
print(f"t 统计量: {t_stat:.4f}")
print(f"p 值: {p_value_t:.4f}")
print(f"结论: {'拒绝 H0 (显著差异)' if p_value_t < 0.05 else '不能拒绝 H0'}")

# 3. 卡方检验 - 生成列联表
# 口味偏好调查：男/女 × 甜/咸/辣
observed = np.array([
    # TODO: 创建 2x3 列联表
])

chi2_stat, p_value_chi2, dof, expected = # TODO

print()
print("=== 卡方独立性检验 ===")
print(f"列联表:\\n{observed}")
print(f"卡方统计量: {chi2_stat:.4f}")
print(f"自由度: {dof}")
print(f"p 值: {p_value_chi2:.4f}")
print(f"结论: {'拒绝 H0 (有关联)' if p_value_chi2 < 0.05 else '不能拒绝 H0 (独立)'}")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "t 检验实现",
    "passed": "t" in output.lower() and "统计量" in output,
    "message": "应计算 t 统计量和 p 值"
})
_test_results.append({
    "name": "p 值判断",
    "passed": "p 值" in output or "p_value" in output.lower(),
    "message": "应输出 p 值"
})
_test_results.append({
    "name": "卡方检验实现",
    "passed": "chi2" in output.lower() or "卡方" in output,
    "message": "应执行卡方检验"
})
_test_results.append({
    "name": "假设结论",
    "passed": "拒绝" in output or "H0" in output or "不能拒绝" in output,
    "message": "应给出检验结论"
})
`,testCases:[{name:"基础测试",input:"无",expected:"假设检验"}],xpReward:50}],36:[{id:1,title:"类型与多重派发",description:`使用 Python 的 functools.singledispatch 模拟 Julia 的多重派发，实现类型感知的函数。

要求：
- 创建一个 describe_value 函数，根据输入类型返回不同描述
- 支持 int、float、str、list/np.ndarray 四种类型
- 对每种类型实现不同的描述逻辑
- 测试所有类型的派发结果
- 计算一个数值列表的总和（Kahan 补偿求和法）`,difficulty:"easy",initialCode:`import numpy_ as np
from functools import singledispatch

# TODO: 使用 singledispatch 创建 describe_value 函数
# 并为 int, float, str, np.ndarray 分别实现方法

# 你的代码 here

# 测试
print("多重派发测试:")
print(f"  int: {describe_value(42)}")
print(f"  float: {describe_value(3.14)}")
print(f"  str: {describe_value('Hello')}")
print(f"  array: {describe_value(np.array([1,2,3]))}")

# Kahan 补偿求和
def kahan_sum(arr):
    # TODO: 实现 Kahan 求和算法
    pass

data = np.random.randn(1000).astype(np.float32)
print(f"Kahan 求和: {kahan_sum(data):.6f}")
print(f"普通求和: {np.sum(data):.6f}")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "实现派发函数",
    "passed": "describe" in output.lower() or "dispatch" in output.lower(),
    "message": "应使用 singledispatch 或类似机制"
})
_test_results.append({
    "name": "支持多种类型",
    "passed": "int" in output.lower() and "float" in output.lower() and "str" in output.lower(),
    "message": "应支持至少 3 种类型"
})
_test_results.append({
    "name": "Kahan 求和",
    "passed": "kahan" in output.lower() or "补偿" in output or "compensation" in output.lower(),
    "message": "应实现 Kahan 补偿求和"
})
_test_results.append({
    "name": "打印测试结果",
    "passed": "42" in output or "3.14" in output or "Hello" in output,
    "message": "应输出测试用例的结果"
})
`,testCases:[{name:"基础测试",input:"无",expected:"多重派发"}],xpReward:30},{id:2,title:"矩阵运算实战",description:`实现 Julia 风格的矩阵运算和线性代数操作。

要求：
- 创建 3×3 矩阵 A 和 B
- 计算矩阵乘法 C = A @ B
- 计算 A 的行列式、逆矩阵、特征值和特征向量
- 求解线性方程组 Ax = b
- 计算矩阵的 Frobenius 范数
- 验证 A @ A_inv ≈ I（单位矩阵）`,difficulty:"medium",initialCode:`import numpy_ as np

np.random.seed(42)

# 1. 创建矩阵
A = np.random.randint(1, 10, (3, 3)).astype(float)
B = np.random.randint(1, 10, (3, 3)).astype(float)

print("矩阵 A:")
print(A)
print("\\n矩阵 B:")
print(B)

# 2. 矩阵乘法
C = # TODO
print(f"\\nC = A @ B:\\n{C}")

# 3. 行列式和逆矩阵
det_A = # TODO
A_inv = # TODO
print(f"\\ndet(A) = {det_A:.4f}")
print(f"\\nA_inv = \\n{A_inv}")

# 4. 验证 A @ A_inv ≈ I
identity_check = # TODO
print(f"\\nA @ A_inv ≈ I: {np.allclose(identity_check, np.eye(3))}")

# 5. 特征值分解
eigenvalues, eigenvectors = # TODO
print(f"\\n特征值: {eigenvalues}")
print(f"特征向量:\\n{eigenvectors}")

# 6. 求解线性方程组 Ax = b
b = np.array([1.0, 2.0, 3.0])
x = # TODO
print(f"\\n方程组解 x: {x}")
print(f"验证 Ax = {A @ x} ≈ b = {b}: {np.allclose(A @ x, b)}")

# 7. Frobenius 范数
fro_norm = # TODO
print(f"\\nFrobenius 范数: {fro_norm:.4f}")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "矩阵乘法",
    "passed": "@" in output or "C =" in output or "矩阵乘法" in output,
    "message": "应执行矩阵乘法 A @ B"
})
_test_results.append({
    "name": "行列式和逆矩阵",
    "passed": "det" in output.lower() or "行列式" in output or "逆" in output,
    "message": "应计算行列式和逆矩阵"
})
_test_results.append({
    "name": "特征值分解",
    "passed": "特征值" in output or "eigenvalue" in output.lower(),
    "message": "应计算特征值和特征向量"
})
_test_results.append({
    "name": "求解方程组",
    "passed": "方程组" in output or "solve" in output.lower(),
    "message": "应求解线性方程组"
})
`,testCases:[{name:"基础测试",input:"无",expected:"线性代数"}],xpReward:40},{id:3,title:"微分方程求解",description:`求解三个经典的常微分方程（ODE）模型，模拟 Julia DifferentialEquations.jl 的使用场景。

要求：
- 模型1：指数增长 dy/dt = 0.3*y, y(0)=1, 求 y(10)
- 模型2：Logistic 增长 dy/dt = r*y*(1-y/K), 求稳态值
- 模型3：二阶 ODE（简谐振动）d²x/dt² + x = 0, 求 x(π)
- 用 scipy.integrate.solve_ivp 求解
- 对比数值解与解析解
- 打印所有结果和误差`,difficulty:"hard",initialCode:`import numpy_ as np
from scipy_ import integrate

# 模型 1: 指数增长 dy/dt = 0.3*y
def exp_ode(t, y):
    return 0.3 * y

sol1 = integrate.solve_ivp(exp_ode, [0, 10], [1.0], method='RK45')
y_num = sol1.y[0][-1]
y_exact = np.exp(0.3 * 10)
print(f"模型1 指数增长:")
print(f"  数值解 y(10) = {y_num:.4f}")
print(f"  解析解 y(10) = {y_exact:.4f}")
print(f"  误差: {abs(y_num - y_exact):.6f}")
print()

# 模型 2: Logistic 增长
def logistic_ode(t, y):
    r, K = 1.0, 10.0
    return r * y * (1 - y / K)

sol2 = integrate.solve_ivp(logistic_ode, [0, 20], [0.5], method='RK45')
# 稳态值 = K (当 t → ∞)
steady_state = # TODO
print(f"模型2 Logistic 增长:")
print(f"  稳态值 (理论 K=10): {steady_state:.4f}")
print(f"  t=20 时 y 值: {sol2.y[0][-1]:.4f}")
print()

# 模型 3: 简谐振动 d²x/dt² + x = 0
# 化为一阶: [dx/dt, dv/dt] = [v, -x]
def harmonic_ode(t, state):
    # TODO: 实现简谐振动方程
    pass

sol3 = integrate.solve_ivp(harmonic_ode, [0, np.pi], [1.0, 0.0], method='RK45')
x_pi = # TODO: 获取 x(π) 的数值解
x_exact_pi = np.cos(np.pi)  # 解析解 cos(π) = -1
print(f"模型3 简谐振动:")
print(f"  数值解 x(π) = {x_pi:.4f}")
print(f"  解析解 cos(π) = {x_exact_pi:.4f}")
print(f"  误差: {abs(x_pi - x_exact_pi):.6f}")
print()
print("✅ 三个 ODE 模型求解完成！")
`,testCode:`output = _output_buffer.getvalue()
_test_results.append({
    "name": "指数增长模型",
    "passed": "指数" in output or "exp" in output.lower() or "0.3" in output,
    "message": "应包含指数增长模型求解"
})
_test_results.append({
    "name": "Logistic 模型",
    "passed": "logistic" in output.lower() or "Logistic" in output or "稳态" in output,
    "message": "应包含 Logistic 模型求解"
})
_test_results.append({
    "name": "简谐振动模型",
    "passed": "简谐" in output or "harmonic" in output.lower() or "cos" in output.lower(),
    "message": "应包含简谐振动模型求解"
})
_test_results.append({
    "name": "数值解与解析解对比",
    "passed": "误差" in output or "error" in output.lower(),
    "message": "应对比数值解和解析解的误差"
})
`,testCases:[{name:"基础测试",input:"无",expected:"ODE 求解"}],xpReward:50}]},He={basic:{label:"Python 基础",icon:"🐍",color:"#10b981",desc:"语法、变量、循环、函数、数据结构入门"},advanced:{label:"Python 进阶",icon:"🚀",color:"#f97316",desc:"OOP、装饰器、异常、标准库、综合实战"},network:{label:"网络与爬虫",icon:"🌐",color:"#3b82f6",desc:"Requests、正则表达式、Scrapy 爬虫框架"},"data-science":{label:"数据科学",icon:"📊",color:"#8b5cf6",desc:"NumPy、Pandas、Matplotlib、SciPy"},web:{label:"Web 开发",icon:"⚡",color:"#06b6d4",desc:"Flask、FastAPI、Django 全栈框架"},tools:{label:"工具与可视化",icon:"🛠️",color:"#f59e0b",desc:"Dash 仪表盘、Jupyter、Pillow 图像"},finance:{label:"金融与其他语言",icon:"💹",color:"#ef4444",desc:"量化交易、R 语言、Julia 科学计算"},system:{label:"系统编程",icon:"⚙️",color:"#6366f1",desc:"IO、迭代器、JSON、数据库、并发、测试、性能"}},Je=["basic","advanced","network","data-science","web","tools","finance","system"];function Qt(){const t=Te(),[s,r]=o.useState("basic"),{progress:n,isLevelUnlocked:i,isLevelCompleted:l,isChallengeCompleted:_,getLevelProgress:C,godMode:d,toggleGodMode:k}=re(),b=o.useMemo(()=>ne.map(f=>{const T=i(f.id),g=l(f.id),O=C(f.id);let w="locked";return g?w="completed":T&&(w="current"),{...f,status:w,levelProgress:O}}),[i,l,C]),A=o.useMemo(()=>b.filter(f=>f.category===s),[b,s]),v=b.filter(f=>f.status==="completed").length,m=Math.round(v/ne.length*100),h=A.filter(f=>f.status==="completed").length,p=A.length>0?Math.round(h/A.length*100):0,u=f=>Array(5).fill(0).map((T,g)=>e.jsx("span",{className:`star ${g<f?"filled":""}`,children:"★"},g)),y=b.find(f=>f.status==="current")||b.find(f=>f.status!=="locked")||b[0],S=(y==null?void 0:y.id)||4,a=Ie[S]||[],E=Ne.filter(f=>f.completed).length,F=f=>{f.status!=="locked"&&t(`/level/${f.id}`)},I=He[s];return e.jsxs("div",{className:"level-map-page",children:[e.jsxs("div",{className:"map-decoration",children:[e.jsx("div",{className:"deco-circle deco-1"}),e.jsx("div",{className:"deco-circle deco-2"}),e.jsx("div",{className:"deco-code",children:"</>"}),e.jsx("div",{className:"deco-code deco-code-2",children:"{ }"})]}),e.jsxs("div",{className:"container map-container",children:[e.jsxs("div",{className:"map-header",children:[e.jsxs("div",{className:"path-info",children:[e.jsxs("div",{className:"path-badge",children:[e.jsx("span",{className:"path-icon",children:"🐍"}),e.jsx("span",{children:"Python 全景地图"})]}),e.jsx("h1",{className:"map-title",children:"冒险地图"}),e.jsxs("p",{className:"map-subtitle",children:[v," / ",ne.length," 关已完成 · ",Je.length," 个主题地图"]})]}),e.jsxs("div",{className:"map-controls",children:[e.jsxs("div",{className:"progress-bar-section",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{className:"progress-label",children:"总进度"}),e.jsxs("span",{className:"progress-percent",children:[m,"%"]})]}),e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${m}%`}})})]}),e.jsxs("button",{className:`god-mode-btn ${d?"active":""}`,onClick:k,title:d?"无敌模式已开启：所有关卡解锁":"点击开启无敌模式：解锁所有关卡",children:[e.jsx("span",{className:"god-mode-icon",children:d?"⚡":"🔒"}),e.jsx("span",{className:"god-mode-text",children:d?"无敌模式":"按进度解锁"}),e.jsx("span",{className:"god-mode-toggle",children:e.jsx("span",{className:`toggle-slider ${d?"on":""}`})})]})]})]}),e.jsx("div",{className:"category-tabs",children:Je.map(f=>{const T=He[f],g=b.filter(B=>B.category===f),O=g.filter(B=>B.status==="completed").length,w=f===s;return e.jsxs("button",{className:`category-tab ${w?"active":""}`,style:{"--cat-color":T.color,borderColor:w?T.color:void 0},onClick:()=>r(f),children:[e.jsx("span",{className:"cat-icon",children:T.icon}),e.jsx("span",{className:"cat-label",children:T.label}),e.jsxs("span",{className:"cat-count",style:{background:T.color+"22",color:T.color},children:[O,"/",g.length]})]},f)})}),e.jsxs("div",{className:"category-info-bar",style:{borderColor:I.color+"44"},children:[e.jsxs("div",{className:"cat-info-left",children:[e.jsx("span",{className:"cat-info-icon",style:{background:I.color+"22"},children:I.icon}),e.jsxs("div",{children:[e.jsx("h2",{className:"cat-info-title",style:{color:I.color},children:I.label}),e.jsx("p",{className:"cat-info-desc",children:I.desc})]})]}),e.jsxs("div",{className:"cat-info-right",children:[e.jsxs("div",{className:"cat-progress-mini",children:[e.jsx("span",{className:"cat-progress-label",children:"本分类进度"}),e.jsxs("span",{className:"cat-progress-num",style:{color:I.color},children:[p,"%"]})]}),e.jsx("div",{className:"cat-progress-bar",children:e.jsx("div",{className:"cat-progress-fill",style:{width:`${p}%`,background:I.color}})})]})]}),e.jsx("div",{className:"level-map-wrapper",children:e.jsxs("div",{className:"level-map",children:[e.jsx("div",{className:"map-line",style:{"--line-color":I.color}}),A.map((f,T)=>e.jsxs("div",{className:`map-node node-${f.side} status-${f.status}`,style:{animationDelay:`${T*.08}s`},onClick:()=>F(f),children:[e.jsxs("div",{className:"node-dot",children:[f.status==="completed"&&e.jsx("span",{className:"dot-check",children:"✓"}),f.status==="current"&&e.jsx("div",{className:"dot-pulse"}),f.status==="locked"&&e.jsx("span",{className:"dot-lock",children:"🔒"})]}),e.jsx("div",{className:"node-card",children:f.status!=="locked"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-header",children:[e.jsx("span",{className:"level-number",children:f.title}),e.jsx("div",{className:"level-stars",children:u(f.difficulty)})]}),e.jsx("h3",{className:"card-title",children:f.subtitle}),e.jsx("p",{className:"card-desc",children:f.description}),e.jsxs("div",{className:"card-meta",children:[e.jsxs("span",{className:"meta-item",children:[e.jsx("span",{className:"meta-icon",children:"📚"}),f.lessons," 节课"]}),e.jsxs("span",{className:"meta-item",children:[e.jsx("span",{className:"meta-icon",children:"⚡"}),f.challenges," 个挑战"]}),e.jsxs("span",{className:"meta-item",children:[e.jsx("span",{className:"meta-icon",children:"⏱"}),f.duration]})]}),e.jsx("div",{className:"card-topics",children:f.topics.map((g,O)=>e.jsx("span",{className:"topic-tag",children:g},O))}),f.status==="current"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"current-badge",children:[e.jsx("span",{className:"pulse-dot"}),"进行中"]}),f.levelProgress.total>0&&e.jsxs("div",{className:"level-progress-mini",children:[e.jsx("div",{className:"level-progress-bar",children:e.jsx("div",{className:"level-progress-fill",style:{width:`${f.levelProgress.percent}%`}})}),e.jsxs("span",{className:"level-progress-text",children:[f.levelProgress.completed,"/",f.levelProgress.total]})]})]}),f.status==="completed"&&e.jsx("div",{className:"completed-badge-card",children:"✓ 已完成"})]}):e.jsxs("div",{className:"locked-content",children:[e.jsx("div",{className:"lock-icon",children:"🔒"}),e.jsx("h3",{className:"lock-title",children:"未解锁"}),e.jsx("p",{className:"lock-desc",children:f.title})]})})]},f.id))]})}),y&&e.jsxs("div",{className:"current-level-detail",children:[e.jsxs("div",{className:"detail-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:y.title}),e.jsx("p",{className:"detail-subtitle",children:y.subtitle})]}),e.jsx(G,{to:`/level/${y.id}`,className:"btn btn-primary",children:"进入学习 →"})]}),e.jsxs("div",{className:"lessons-list",children:[e.jsx("h3",{className:"list-title",children:"📖 课程列表"}),Ne.map((f,T)=>e.jsxs("div",{className:`lesson-item ${f.completed?"completed":""}`,onClick:()=>t(`/level/${y.id}`),children:[e.jsx("div",{className:"lesson-index",children:String(T+1).padStart(2,"0")}),e.jsxs("div",{className:"lesson-icon",children:[f.type==="video"&&"🎬",f.type==="reading"&&"📖",f.type==="interactive"&&"💻"]}),e.jsxs("div",{className:"lesson-info",children:[e.jsx("h4",{className:"lesson-title",children:f.title}),e.jsx("span",{className:"lesson-duration",children:f.duration})]}),e.jsx("div",{className:"lesson-status",children:f.completed?e.jsx("span",{className:"status-completed",children:"✓ 已完成"}):e.jsx("span",{className:"status-current",children:"继续学习"})})]},f.id))]}),e.jsxs("div",{className:"challenges-section",children:[e.jsx("h3",{className:"list-title",children:"⚡ 编程挑战"}),e.jsx("div",{className:"challenges-grid",children:a.length>0?a.map(f=>{const T=_(S,f.id);return e.jsxs("div",{className:`challenge-card ${T?"completed":""}`,onClick:()=>t(`/level/${y.id}`),children:[e.jsxs("div",{className:"challenge-header",children:[e.jsxs("span",{className:`challenge-difficulty difficulty-${f.difficulty}`,children:[f.difficulty==="easy"&&"简单",f.difficulty==="medium"&&"中等",f.difficulty==="hard"&&"困难"]}),T&&e.jsx("span",{className:"challenge-check",children:"✓"})]}),e.jsx("h4",{className:"challenge-title",children:f.title})]},f.id)}):Wt.map(f=>e.jsxs("div",{className:`challenge-card ${f.completed?"completed":""}`,onClick:()=>t(`/level/${y.id}`),children:[e.jsxs("div",{className:"challenge-header",children:[e.jsxs("span",{className:`challenge-difficulty difficulty-${f.difficulty}`,children:[f.difficulty==="easy"&&"简单",f.difficulty==="medium"&&"中等",f.difficulty==="hard"&&"困难"]}),f.completed&&e.jsx("span",{className:"challenge-check",children:"✓"})]}),e.jsx("h4",{className:"challenge-title",children:f.title})]},f.id))})]}),e.jsxs("div",{className:"stats-row",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:"📚"}),e.jsxs("div",{className:"stat-content",children:[e.jsxs("span",{className:"stat-big",children:[E,"/",Ne.length]}),e.jsx("span",{className:"stat-small",children:"已完成课时"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:"⭐"}),e.jsxs("div",{className:"stat-content",children:[e.jsxs("span",{className:"stat-big",children:[n.xp,"/",n.totalXP]}),e.jsx("span",{className:"stat-small",children:"经验值 XP"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:"⏱"}),e.jsxs("div",{className:"stat-content",children:[e.jsxs("span",{className:"stat-big",children:[">","30 分钟"]}),e.jsx("span",{className:"stat-small",children:"预计学习时间"})]})]})]})]})]})]})}function Ae({initialCode:t="",onRun:s,readOnly:r=!1,height:n="300px",showOutput:i=!0,testCode:l,onTestResult:_,placeholder:C="# 在这里编写你的 Python 代码"}){const[d,k]=o.useState(t),[b,A]=o.useState(""),[v,m]=o.useState(null),[h,p]=o.useState(!1),[u,y]=o.useState([]),S=o.useRef(null),{isLoading:a,runCode:E,runCodeWithTests:F}=Qe();o.useEffect(()=>{k(t)},[t]);const I=async()=>{if(!(a||h)){p(!0),A(""),m(null),y([]);try{if(l){const w=await F(d,l);A(w.output),m(w.error),y(w.testResults),_==null||_(w.passed,w.testResults),s==null||s(w.output,w.error)}else{const w=await E(d);A(w.output),m(w.error),s==null||s(w.output,w.error)}}catch(w){m(w instanceof Error?w.message:"执行出错")}finally{p(!1)}}},f=w=>{if(w.key==="Tab"){w.preventDefault();const B=w.target,H=B.selectionStart,oe=B.selectionEnd,Z=d.substring(0,H)+"    "+d.substring(oe);k(Z),setTimeout(()=>{B.selectionStart=B.selectionEnd=H+4},0)}(w.ctrlKey||w.metaKey)&&w.key==="Enter"&&(w.preventDefault(),I())},T=()=>{navigator.clipboard.writeText(d)},g=()=>{k(t),A(""),m(null),y([])},O=()=>{const w=d.split(`
`).length;return Array(w).fill(0).map((B,H)=>e.jsx("div",{className:"line-number",children:H+1},H))};return e.jsxs("div",{className:"code-editor-container",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("div",{className:"editor-tabs",children:e.jsx("span",{className:"tab active",children:"main.py"})}),e.jsxs("div",{className:"editor-actions",children:[e.jsx("button",{className:"action-btn",onClick:T,title:"复制代码",children:"📋"}),e.jsx("button",{className:"action-btn",onClick:g,title:"重置代码",children:"🔄"}),e.jsx("button",{className:`run-btn ${h?"running":""}`,onClick:I,disabled:a||h||r,children:a?e.jsx(e.Fragment,{children:"⏳ 加载中..."}):h?e.jsx(e.Fragment,{children:"⏳ 运行中..."}):e.jsx(e.Fragment,{children:"▶ 运行代码"})})]})]}),e.jsxs("div",{className:"editor-body",style:{height:n},children:[e.jsx("div",{className:"line-numbers",children:O()}),e.jsx("textarea",{ref:S,className:"code-textarea",value:d,onChange:w=>k(w.target.value),onKeyDown:f,readOnly:r,placeholder:C,spellCheck:!1})]}),i&&e.jsxs("div",{className:"output-section",children:[e.jsxs("div",{className:"output-header",children:[e.jsx("span",{className:"output-title",children:"📤 输出结果"}),u.length>0&&e.jsxs("span",{className:`test-summary ${u.every(w=>w.passed)?"all-passed":"has-failed"}`,children:[u.filter(w=>w.passed).length,"/",u.length," 测试通过"]})]}),e.jsx("div",{className:`output-content ${v?"has-error":""}`,children:v?e.jsx("pre",{className:"error-text",children:v}):b?e.jsx("pre",{children:b}):e.jsx("span",{className:"output-placeholder",children:'点击"运行代码"查看输出结果'})}),u.length>0&&e.jsx("div",{className:"test-results",children:u.map((w,B)=>e.jsxs("div",{className:`test-item ${w.passed?"passed":"failed"}`,children:[e.jsx("span",{className:"test-icon",children:w.passed?"✓":"✗"}),e.jsx("span",{className:"test-name",children:w.name}),!w.passed&&e.jsx("span",{className:"test-message",children:w.message})]},B))})]})]})}function Yt({title:t,steps:s,onComplete:r}){var Z;const[n,i]=o.useState(0),[l,_]=o.useState(new Set),[C,d]=o.useState(null),[k,b]=o.useState(!1),[A,v]=o.useState(!1),[m,h]=o.useState(!1),[p,u]=o.useState(!1),[y,S]=o.useState(!1),a=s[n],E=s.length>0?(n+(l.has(n)?1:0))/s.length*100:0,F=n===s.length-1;if(!s||s.length===0||!a||!a.title||!a.type)return e.jsx("div",{className:"interactive-lesson",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("div",{className:"step-header",children:e.jsx("h2",{className:"step-title",children:"加载中..."})}),e.jsx("div",{className:"step-body",children:e.jsx("p",{children:"课程内容加载中，请稍候..."})})]})});const I=()=>{if(F){T(),r==null||r();return}i(n+1),d(null),b(!1),v(!1),h(!1),u(!1),S(!1)},f=()=>{n>0&&(i(n-1),d(null),b(!1),v(!1),h(!1),u(!1),S(!1))},T=()=>{_(L=>new Set([...L,n]))},g=L=>{k||d(L)},O=()=>{C!==null&&(b(!0),C===a.correctAnswer&&T())},w=L=>{v(L),L&&T()},B=()=>{h(!0),T()},H=()=>{u(L=>!L)},oe=async()=>{if(a.answer)try{await navigator.clipboard.writeText(a.answer),S(!0),setTimeout(()=>S(!1),1800)}catch(L){console.error("复制失败",L)}};return e.jsxs("div",{className:"interactive-lesson",children:[e.jsx("div",{className:"lesson-progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${E}%`}})}),e.jsx("div",{className:"lesson-steps-indicator",children:s.map((L,M)=>e.jsxs("div",{className:`step-dot ${M<n||l.has(M)?"completed":""} ${M===n?"current":""}`,onClick:()=>i(M),children:[e.jsx("span",{className:"dot-number",children:M+1}),e.jsx("span",{className:"dot-title",children:(L==null?void 0:L.title)||"步骤"})]},(L==null?void 0:L.id)||M))}),e.jsxs("div",{className:"lesson-content",children:[e.jsxs("div",{className:"step-header",children:[e.jsxs("span",{className:"step-badge",children:["第 ",n+1," 步 / 共 ",s.length," 步"]}),e.jsx("h2",{className:"step-title",children:(a==null?void 0:a.title)||"加载中..."})]}),e.jsxs("div",{className:"step-body",children:[(a==null?void 0:a.type)==="explanation"&&e.jsxs("div",{className:"explanation-content",children:[e.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:te((a==null?void 0:a.content)||"")}}),e.jsx("button",{className:"btn btn-primary",onClick:()=>{T(),I()},children:F?"完成学习 🎉":"我明白了，继续 →"})]}),(a==null?void 0:a.type)==="example"&&e.jsxs("div",{className:"example-content",children:[e.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:te((a==null?void 0:a.content)||"")}}),(a==null?void 0:a.code)&&e.jsxs("div",{className:"code-example-wrapper",children:[e.jsx("div",{className:"example-label",children:"💡 点击运行试试："}),e.jsx(Ae,{initialCode:(a==null?void 0:a.code)||"",height:"250px"})]}),e.jsx("button",{className:"btn btn-primary",onClick:()=>{T(),I()},children:F?"完成学习 🎉":"继续下一步 →"})]}),(a==null?void 0:a.type)==="practice"&&e.jsxs("div",{className:"practice-content",children:[e.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:te((a==null?void 0:a.content)||"")}}),(a==null?void 0:a.hint)&&e.jsxs("div",{className:"hint-box",children:[e.jsx("span",{className:"hint-icon",children:"💡 提示："}),a==null?void 0:a.hint]}),(a==null?void 0:a.code)&&e.jsx("div",{className:"practice-editor",children:e.jsx(Ae,{initialCode:(a==null?void 0:a.code)||"",height:"300px",testCode:a==null?void 0:a.testCode,onTestResult:w})}),(a==null?void 0:a.answer)&&e.jsxs("div",{className:"answer-section",children:[e.jsxs("div",{className:"answer-toolbar",children:[e.jsx("button",{type:"button",className:"btn-answer-toggle",onClick:H,"aria-expanded":p,children:p?"🙈 隐藏答案":"💡 查看答案"}),p&&e.jsx("button",{type:"button",className:"btn-copy-answer",onClick:oe,children:y?"✓ 已复制":"📋 复制答案"})]}),p&&e.jsxs("div",{className:"answer-box",children:[e.jsx("div",{className:"answer-box-header",children:e.jsx("span",{className:"answer-box-title",children:"📝 参考答案"})}),e.jsx("pre",{className:"answer-code",children:e.jsx("code",{children:a==null?void 0:a.answer})}),(a==null?void 0:a.explanation)&&e.jsxs("div",{className:"answer-explanation",children:[e.jsx("span",{className:"explanation-icon",children:"🔎"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:te((a==null?void 0:a.explanation)||"")}})]})]})]}),e.jsxs("div",{className:"practice-actions",children:[e.jsx("button",{className:"btn btn-secondary",onClick:f,disabled:n===0,children:"← 上一步"}),!m&&!A&&e.jsx("button",{className:"btn btn-secondary",onClick:B,children:"跳过此步"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>{T(),I()},children:A||m?F?"完成学习 🎉":"继续下一步 →":"跳过练习继续 →"})]}),A&&e.jsx("div",{className:"success-message",children:"✅ 太棒了！你成功完成了这个练习！"})]}),(a==null?void 0:a.type)==="quiz"&&e.jsxs("div",{className:"quiz-content",children:[e.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:te((a==null?void 0:a.content)||"")}}),e.jsx("div",{className:"quiz-options",children:(Z=a==null?void 0:a.options)==null?void 0:Z.map((L,M)=>e.jsxs("div",{className:`quiz-option ${C===M?"selected":""} ${k&&M===(a==null?void 0:a.correctAnswer)?"correct":""} ${k&&C===M&&M!==(a==null?void 0:a.correctAnswer)?"wrong":""}`,onClick:()=>g(M),children:[e.jsx("span",{className:"option-letter",children:String.fromCharCode(65+M)}),e.jsx("span",{className:"option-text",children:L})]},M))}),k?e.jsxs("div",{className:"quiz-result",children:[C===(a==null?void 0:a.correctAnswer)?e.jsx("div",{className:"result-success",children:"✅ 回答正确！"}):e.jsxs("div",{className:"result-failure",children:["❌ 回答错误，正确答案是 ",String.fromCharCode(65+((a==null?void 0:a.correctAnswer)||0))]}),(p||(a==null?void 0:a.explanation))&&e.jsxs("div",{className:"answer-box quiz-explain-box",children:[e.jsx("div",{className:"answer-box-header",children:e.jsx("span",{className:"answer-box-title",children:"🔎 答案解析"})}),(a==null?void 0:a.answer)&&e.jsx("pre",{className:"answer-code",children:e.jsx("code",{children:a==null?void 0:a.answer})}),(a==null?void 0:a.explanation)&&e.jsxs("div",{className:"answer-explanation",children:[e.jsx("span",{className:"explanation-icon",children:"📖"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:te((a==null?void 0:a.explanation)||"")}})]})]}),e.jsxs("div",{className:"result-actions",children:[e.jsx("button",{className:"btn btn-secondary",onClick:()=>{b(!1),d(null)},children:"重新答题"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>{T(),I()},children:F?"完成学习 🎉":"继续下一步 →"})]})]}):e.jsxs("div",{className:"quiz-actions",children:[e.jsx("button",{className:"btn btn-primary",onClick:O,disabled:C===null,children:"提交答案"}),(a==null?void 0:a.answer)&&e.jsx("button",{type:"button",className:"btn-answer-toggle",onClick:H,children:p?"🙈 隐藏解析":"💡 查看解析"})]})]})]})]})]})}function te(t){return t.replace(/\n\n/g,"</p><p>").replace(/^/g,"<p>").replace(/$/g,"</p>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")}function Zt({title:t,description:s,difficulty:r,initialCode:n,testCode:i,testCases:l,onComplete:_,xpReward:C=10}){const[d,k]=o.useState(!1),[b,A]=o.useState(!1),[v,m]=o.useState("description"),h=y=>{y&&!d&&(k(!0),_==null||_())},u={easy:{label:"简单",color:"green",icon:"🟢"},medium:{label:"中等",color:"yellow",icon:"🟡"},hard:{label:"困难",color:"red",icon:"🔴"}}[r];return e.jsxs("div",{className:"challenge-arena",children:[e.jsxs("div",{className:"challenge-header",children:[e.jsxs("div",{className:"challenge-info",children:[e.jsxs("div",{className:"challenge-title-row",children:[e.jsxs("span",{className:`difficulty-badge difficulty-${r}`,children:[u.icon," ",u.label]}),e.jsxs("span",{className:"xp-reward",children:["⭐ +",C," XP"]})]}),e.jsx("h2",{className:"challenge-title",children:t})]}),d&&e.jsxs("div",{className:"completion-badge",children:[e.jsx("span",{className:"badge-icon",children:"✅"}),e.jsx("span",{children:"已完成"})]})]}),e.jsxs("div",{className:"challenge-layout",children:[e.jsxs("div",{className:"challenge-sidebar",children:[e.jsxs("div",{className:"sidebar-tabs",children:[e.jsx("button",{className:`sidebar-tab ${v==="description"?"active":""}`,onClick:()=>m("description"),children:"📝 题目描述"}),e.jsxs("button",{className:`sidebar-tab ${v==="testcases"?"active":""}`,onClick:()=>m("testcases"),children:["🧪 测试用例 (",l.length,")"]})]}),e.jsxs("div",{className:"sidebar-content",children:[v==="description"&&e.jsxs("div",{className:"description-content",children:[e.jsx("p",{className:"challenge-desc",children:s}),e.jsxs("div",{className:"hint-section",children:[e.jsx("button",{className:"hint-toggle",onClick:()=>A(!b),children:b?"隐藏提示":"💡 查看提示"}),b&&e.jsx("div",{className:"hint-content",children:e.jsx("p",{children:"提示：使用 Python 的循环结构和条件判断来解决问题。"})})]})]}),v==="testcases"&&e.jsx("div",{className:"testcases-content",children:l.map((y,S)=>e.jsxs("div",{className:"testcase-item",children:[e.jsx("div",{className:"testcase-header",children:e.jsxs("span",{className:"testcase-name",children:["测试用例 ",S+1,": ",y.name]})}),e.jsxs("div",{className:"testcase-body",children:[e.jsxs("div",{className:"testcase-row",children:[e.jsx("span",{className:"testcase-label",children:"输入："}),e.jsx("code",{children:y.input})]}),e.jsxs("div",{className:"testcase-row",children:[e.jsx("span",{className:"testcase-label",children:"预期："}),e.jsx("code",{children:y.expected})]})]})]},S))})]})]}),e.jsx("div",{className:"challenge-editor",children:e.jsx(Ae,{initialCode:n,height:"400px",testCode:i,onTestResult:h})})]}),d&&e.jsx("div",{className:"completion-modal-overlay",children:e.jsxs("div",{className:"completion-modal",children:[e.jsx("div",{className:"modal-confetti",children:"🎉"}),e.jsx("h3",{children:"恭喜完成挑战！"}),e.jsxs("p",{className:"modal-reward",children:["获得 ",e.jsxs("span",{className:"reward-xp",children:["+",C," XP"]})," 经验值"]}),e.jsx("p",{className:"modal-message",children:"你成功通过了所有测试用例，继续加油！"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>k(!1),children:"继续编码"})]})})]})}const es=[{id:"python3",name:"学习 Python 3",description:"Python3 是当前主流 Python 版本。",icon:"🐍",category:"language",difficulty:1,unlocked:!0,href:"#/level/1"},{id:"python2",name:"学习 Python 2.x",description:"Python 经典版本（已停止维护）。",icon:"🐍",category:"language",difficulty:2,unlocked:!0},{id:"python-io",name:"输入输出",description:"格式化输出、文件读写、标准流。",icon:"📝",category:"language",difficulty:2,unlocked:!0,href:"#/level/37"},{id:"python-basic-syntax",name:"基础语法",description:"注释、缩进、标识符、关键字。",icon:"📖",category:"language",difficulty:1,unlocked:!0,href:"#/level/1"},{id:"python-data-types",name:"数据类型",description:"数字、字符串、布尔值、类型转换。",icon:"🔤",category:"language",difficulty:1,unlocked:!0,href:"#/level/2"},{id:"python-operators",name:"运算符",description:"算术、比较、逻辑、赋值、成员运算符。",icon:"➗",category:"language",difficulty:1,unlocked:!0,href:"#/level/2"},{id:"python-list",name:"列表 List",description:"有序可变序列，索引、切片、常用方法。",icon:"📋",category:"data",difficulty:2,unlocked:!0,href:"#/level/5"},{id:"python-tuple",name:"元组 Tuple",description:"有序不可变序列，解包、遍历。",icon:"📐",category:"data",difficulty:2,unlocked:!0,href:"#/level/5"},{id:"python-dict",name:"字典 Dict",description:"键值对集合，增删改查、遍历、推导式。",icon:"📖",category:"data",difficulty:2,unlocked:!0,href:"#/level/6"},{id:"python-set",name:"集合 Set",description:"无序不重复集合，交并差运算。",icon:"🔵",category:"data",difficulty:2,unlocked:!0,href:"#/level/6"},{id:"python-string",name:"字符串深入",description:"索引切片、常用方法、格式化、编码。",icon:"🔤",category:"data",difficulty:2,unlocked:!0,href:"#/level/10"},{id:"python-control-flow",name:"条件与循环",description:"if/elif/else、for、while、break/continue。",icon:"🔀",category:"data",difficulty:2,unlocked:!0,href:"#/level/3"},{id:"python-function",name:"函数",description:"定义、参数、返回值、作用域、Lambda。",icon:"⚙️",category:"data",difficulty:3,unlocked:!0,href:"#/level/7"},{id:"collections",name:"collections 库",description:"Counter/deque/defaultdict/namedtuple。",icon:"📦",category:"data",difficulty:2,unlocked:!0,href:"#/level/21"},{id:"itertools",name:"itertools 模块",description:"count/cycle/permutations/combinations。",icon:"🔄",category:"data",difficulty:3,unlocked:!0,href:"#/level/22"},{id:"python-iterator-generator",name:"迭代器与生成器",description:"iter/next、yield、生成器表达式。",icon:"⚡",category:"data",difficulty:4,unlocked:!0,href:"#/level/38"},{id:"python-oop",name:"面向对象",description:"类与对象、属性方法、封装、继承。",icon:"🏛️",category:"advanced",difficulty:3,unlocked:!0,href:"#/level/12"},{id:"python-inheritance",name:"继承与多态",description:"方法重写、super()、抽象类、多态。",icon:"🌳",category:"advanced",difficulty:4,unlocked:!0,href:"#/level/13"},{id:"python-decorator",name:"装饰器与闭包",description:"@装饰器、闭包、函数式编程。",icon:"🎨",category:"advanced",difficulty:4,unlocked:!0,href:"#/level/16"},{id:"python-exception",name:"异常处理",description:"try/except/finally、自定义异常、with。",icon:"⚠️",category:"advanced",difficulty:3,unlocked:!0,href:"#/level/14"},{id:"python-module",name:"模块与包",description:"import、自定义模块、包管理、__name__。",icon:"📦",category:"advanced",difficulty:3,unlocked:!0,href:"#/level/11"},{id:"python-stdlib",name:"常用标准库",description:"datetime、re、json、collections、itertools。",icon:"📚",category:"advanced",difficulty:3,unlocked:!0,href:"#/level/17"},{id:"regex",name:"正则表达式",description:"元字符、分组、贪婪/非贪婪、match/search。",icon:"🔍",category:"advanced",difficulty:3,unlocked:!0,href:"#/level/20"},{id:"python-file-io",name:"文件与目录",description:"open/read/write、os/os.path、shutil。",icon:"📁",category:"advanced",difficulty:3,unlocked:!0,href:"#/level/15"},{id:"python-json-xml",name:"JSON 与 XML",description:"json 模块、XML ElementTree、pickle。",icon:"🔄",category:"advanced",difficulty:3,unlocked:!0,href:"#/level/39"},{id:"python-multithreading",name:"多线程与多进程",description:"threading、GIL、multiprocessing、线程池。",icon:"🧵",category:"advanced",difficulty:4,unlocked:!0,href:"#/level/41"},{id:"python-async",name:"异步编程 asyncio",description:"async/await、事件循环、Task、aiohttp。",icon:"⚡",category:"advanced",difficulty:5,unlocked:!0,href:"#/level/42"},{id:"python-testing",name:"单元测试 pytest",description:"unittest、pytest、fixture、Mock、覆盖率。",icon:"✅",category:"advanced",difficulty:3,unlocked:!0,href:"#/level/43"},{id:"python-performance",name:"内存与性能优化",description:"GC 机制、cProfile、lru_cache、优化实战。",icon:"🚀",category:"advanced",difficulty:4,unlocked:!0,href:"#/level/44"},{id:"requests",name:"Requests 网络请求",description:"HTTP GET/POST、Session、Headers、文件上传。",icon:"🌐",category:"web",difficulty:2,unlocked:!0,href:"#/level/19"},{id:"flask",name:"Flask",description:"轻量级 Python Web 框架，路由、模板、蓝图。",icon:"🌶️",category:"web",difficulty:3,unlocked:!0,href:"#/level/27"},{id:"fastapi",name:"FastAPI",description:"现代高性能 Python API 框架，Pydantic、依赖注入。",icon:"⚡",category:"web",difficulty:4,unlocked:!0,href:"#/level/28"},{id:"django",name:"Django",description:"全功能 Python Web 框架，MTV、ORM、Admin。",icon:"🎸",category:"web",difficulty:4,unlocked:!0,href:"#/level/29"},{id:"scrapy",name:"Scrapy 爬虫",description:"Spider/Item/Pipeline、XPath/CSS 选择器。",icon:"🕷️",category:"web",difficulty:5,unlocked:!0,href:"#/level/30"},{id:"numpy",name:"NumPy",description:"ndarray、广播、矩阵运算、线性代数。",icon:"🔢",category:"data",difficulty:3,unlocked:!0,href:"#/level/23"},{id:"pandas",name:"Pandas",description:"DataFrame、CSV/Excel、数据清洗、groupby。",icon:"🐼",category:"data",difficulty:4,unlocked:!0,href:"#/level/24"},{id:"matplotlib",name:"Matplotlib",description:"折线图、柱状图、饼图、子图、样式导出。",icon:"📊",category:"data",difficulty:2,unlocked:!0,href:"#/level/25"},{id:"scipy",name:"SciPy",description:"线性代数、优化求根、信号处理、统计分布。",icon:"🧪",category:"data",difficulty:4,unlocked:!0,href:"#/level/26"},{id:"dash",name:"Dash",description:"Plotly 组件、Callback、多页仪表盘。",icon:"📈",category:"data",difficulty:3,unlocked:!0,href:"#/level/31"},{id:"sqlite",name:"Python SQLite",description:"内置 sqlite3、CRUD、事务、with 语句。",icon:"💾",category:"tool",difficulty:2,unlocked:!0,href:"#/level/40"},{id:"mysql",name:"Python MySQL",description:"pymysql 连接、CRUD、事务管理。",icon:"🗄️",category:"tool",difficulty:3,unlocked:!0,href:"#/level/40"},{id:"redis",name:"Python Redis",description:"Redis 缓存与 Python 交互、发布订阅。",icon:"⚡",category:"tool",difficulty:3,unlocked:!0},{id:"jupyter",name:"Jupyter Notebook",description:"Markdown、魔法命令、ipywidgets、导出。",icon:"📓",category:"tool",difficulty:2,unlocked:!0,href:"#/level/32"},{id:"pillow",name:"Pillow 图像处理",description:"打开保存、像素操作、变换、滤镜、水印。",icon:"🖼️",category:"tool",difficulty:2,unlocked:!0,href:"#/level/33"},{id:"git",name:"Git 版本控制",description:"版本控制基础、分支、合并、远程仓库。",icon:"🔧",category:"tool",difficulty:2,unlocked:!0},{id:"r",name:"R 语言入门",description:"向量、数据框、dplyr、ggplot2、统计检验。",icon:"📐",category:"language",difficulty:3,unlocked:!0,href:"#/level/35"},{id:"julia",name:"Julia 科学计算",description:"多重派发、数组运算、微分方程、性能优化。",icon:"🔬",category:"language",difficulty:4,unlocked:!0,href:"#/level/36"},{id:"sklearn",name:"scikit-learn",description:"分类、回归、聚类、交叉验证、Pipeline。",icon:"🤖",category:"data",difficulty:4,unlocked:!0},{id:"tensorflow",name:"TensorFlow",description:"计算图、神经网络、Keras、模型部署。",icon:"🧠",category:"data",difficulty:5,unlocked:!0},{id:"pytorch",name:"PyTorch",description:"张量、自动微分、神经网络、GPU 加速。",icon:"🔥",category:"data",difficulty:5,unlocked:!0},{id:"quant",name:"量化交易",description:"K线数据、均线策略、回测、夏普比率。",icon:"💹",category:"finance",difficulty:5,unlocked:!0,href:"#/level/34"}],ts={language:"语言基础",web:"Web 开发",data:"数据科学",advanced:"进阶编程",tool:"工具与数据库",finance:"金融实战"},ke={language:"#10b981",web:"#3b82f6",data:"#8b5cf6",advanced:"#f97316",tool:"#f59e0b",finance:"#ef4444"};function ss(){const{id:t}=ht(),s=Te(),[r,n]=o.useState("learn"),[i,l]=o.useState(null),{isLoading:_,error:C,retryLoad:d}=Qe(),{progress:k,isChallengeCompleted:b,isLevelUnlocked:A,completeLesson:v,completeChallenge:m,getLevelProgress:h}=re(),p=parseInt(t||"4"),u=ne.find(g=>g.id===p)||ne[3],y=A(p),S=h(p),a=st[p]||[],E=Ie[p]||[],F=E.filter(g=>b(p,g.id)).length,I=g=>Array(5).fill(0).map((O,w)=>e.jsx("span",{className:`star ${w<g?"filled":""}`,children:"★"},w)),f=()=>{v(p,a.length)},T=(g,O)=>{m(p,g,O),l(null)};return y?e.jsxs("div",{className:"level-detail-page",children:[C&&e.jsxs("div",{className:"pyodide-error",children:[e.jsx("span",{className:"error-icon",children:"⚠️"}),e.jsx("span",{children:"Python运行环境加载失败，代码执行功能暂不可用"}),e.jsx("button",{className:"retry-btn",onClick:d,children:"重试"})]}),_&&!C&&e.jsxs("div",{className:"pyodide-loading-banner",children:[e.jsx("div",{className:"loading-spinner-small"}),e.jsx("span",{children:"正在加载Python运行环境..."})]}),e.jsxs("div",{className:"container detail-container",children:[e.jsxs("button",{className:"back-btn",onClick:()=>s("/map"),children:[e.jsx("span",{children:"←"})," 返回地图"]}),e.jsxs("div",{className:"level-header",children:[e.jsxs("div",{className:"level-info",children:[e.jsxs("div",{className:"level-badge",children:[e.jsx("span",{className:"badge-icon",children:"🐍"}),e.jsxs("span",{children:["Python 进阶 · 第 ",u.id," 关"]})]}),e.jsx("h1",{className:"level-title",children:u.title}),e.jsx("p",{className:"level-desc",children:u.description}),e.jsxs("div",{className:"level-meta",children:[e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-icon",children:"📚"}),e.jsxs("span",{children:[a.length," 个学习步骤"]})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-icon",children:"⚡"}),e.jsxs("span",{children:[E.length," 个挑战"]})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-icon",children:"⏱"}),e.jsx("span",{children:u.duration})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-icon",children:"⭐"}),e.jsxs("span",{children:["难度 ",I(u.difficulty)]})]})]}),e.jsxs("div",{className:"level-progress",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{children:"本关进度"}),e.jsxs("span",{className:"progress-text",children:[S.completed,"/",S.total," 完成 · ",S.percent,"%"]})]}),e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${S.percent}%`}})})]})]}),e.jsxs("div",{className:"level-actions",children:[e.jsx("button",{className:"btn btn-primary btn-lg continue-btn",onClick:()=>n("learn"),children:"▶ 开始学习"}),e.jsxs("div",{className:"xp-display",children:[e.jsx("span",{className:"xp-icon",children:"⭐"}),e.jsxs("span",{className:"xp-value",children:[k.xp," XP"]})]})]})]}),e.jsxs("div",{className:"topics-section",children:[e.jsx("h3",{className:"section-title-sm",children:"📋 本关知识点"}),e.jsx("div",{className:"topics-tags",children:u.topics.map((g,O)=>e.jsx("span",{className:"topic-chip",children:g},O))})]}),e.jsxs("div",{className:"runoob-section",children:[e.jsxs("div",{className:"runoob-header",children:[e.jsxs("h3",{className:"section-title-sm",children:[e.jsx("span",{className:"runoob-logo",children:"📚"}),"Python / 数据科学 · 拓展学习路径"]}),e.jsx("span",{className:"runoob-source",children:"风格借鉴自菜鸟教程"})]}),e.jsx("p",{className:"runoob-intro",children:"完成当前关卡后，可以挑战更多 Python 生态方向。本页展示的扩展主题按难度递进，建议先打通主线关卡再探索。"}),e.jsx("div",{className:"runoob-grid",children:es.map(g=>e.jsxs("div",{className:`runoob-card ${g.unlocked?"unlocked":"locked"} ${g.unlocked&&!g.href?"no-nav":""}`,style:{"--topic-color":ke[g.category],cursor:!g.href&&g.unlocked?"default":void 0},onClick:()=>{if(g.unlocked)if(g.href){const O=g.href.match(/#\/level\/(\d+)/);O&&s(`/level/${O[1]}`)}else console.info(`Topic "${g.name}" 暂无对应关卡，将作为拓展阅读内容`)},role:g.unlocked&&g.href?"button":void 0,children:[e.jsx("div",{className:"runoob-card-icon",children:e.jsx("span",{className:"runoob-icon-emoji",children:g.icon})}),e.jsxs("div",{className:"runoob-card-body",children:[e.jsxs("div",{className:"runoob-card-header",children:[e.jsxs("h4",{className:"runoob-card-title",children:["【",g.name.replace("学习 ",""),"】"]}),e.jsx("span",{className:"runoob-card-category",style:{background:ke[g.category]+"22",color:ke[g.category]},children:ts[g.category]})]}),e.jsx("p",{className:"runoob-card-desc",children:g.description}),e.jsxs("div",{className:"runoob-card-footer",children:[e.jsx("span",{className:"runoob-difficulty",children:Array(5).fill(0).map((O,w)=>e.jsx("span",{className:`runoob-dot ${w<g.difficulty?"filled":""}`,children:"●"},w))}),!g.unlocked&&e.jsx("span",{className:"runoob-lock-badge",children:"🔒 待解锁"}),g.unlocked&&g.href&&e.jsx("span",{className:"runoob-go-badge",children:"进入学习 →"}),g.unlocked&&!g.href&&e.jsx("span",{className:"runoob-read-badge",children:"📚 拓展阅读"})]})]})]},g.id))})]}),e.jsxs("div",{className:"content-tabs",children:[e.jsxs("button",{className:`tab-btn ${r==="learn"?"active":""}`,onClick:()=>{n("learn"),l(null)},children:["📖 互动学习",e.jsx("span",{className:"tab-count",children:a.length})]}),e.jsxs("button",{className:`tab-btn ${r==="challenges"?"active":""}`,onClick:()=>{n("challenges"),l(null)},children:["⚡ 编程挑战",e.jsxs("span",{className:"tab-count",children:[F,"/",E.length]})]}),e.jsx("button",{className:`tab-btn ${r==="notes"?"active":""}`,onClick:()=>{n("notes"),l(null)},children:"📝 学习笔记"})]}),e.jsxs("div",{className:"tab-content",children:[r==="learn"&&e.jsx("div",{className:"learn-tab-content",children:a.length>0?e.jsx(Yt,{title:u.title,steps:a,onComplete:f}):e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"暂无学习内容"})})}),r==="challenges"&&e.jsx("div",{className:"challenges-tab-content",children:i?e.jsxs("div",{children:[e.jsx("button",{className:"back-to-challenges",onClick:()=>l(null),children:"← 返回挑战列表"}),(()=>{const g=E.find(O=>O.id===i);return g?e.jsx(Zt,{title:g.title,description:g.description,difficulty:g.difficulty,initialCode:g.initialCode,testCode:g.testCode,testCases:g.testCases,xpReward:g.xpReward,onComplete:()=>T(g.id,g.xpReward)}):null})()]}):e.jsxs("div",{className:"challenges-list",children:[e.jsxs("div",{className:"challenges-header",children:[e.jsx("h3",{children:"编程挑战"}),e.jsx("p",{children:"完成以下挑战来巩固所学知识，获得经验值奖励"})]}),e.jsx("div",{className:"challenges-grid",children:E.map((g,O)=>{const w=b(p,g.id);return e.jsxs("div",{className:`challenge-card ${w?"completed":""}`,onClick:()=>l(g.id),children:[e.jsxs("div",{className:"challenge-card-header",children:[e.jsxs("span",{className:"challenge-number",children:["挑战 ",O+1]}),e.jsxs("span",{className:`challenge-diff diff-${g.difficulty}`,children:[g.difficulty==="easy"&&"🟢 简单",g.difficulty==="medium"&&"🟡 中等",g.difficulty==="hard"&&"🔴 困难"]})]}),e.jsx("h4",{className:"challenge-card-title",children:g.title}),e.jsxs("p",{className:"challenge-card-desc",children:[g.description.substring(0,80),"..."]}),e.jsxs("div",{className:"challenge-card-footer",children:[e.jsxs("span",{className:"xp-reward-badge",children:["⭐ +",g.xpReward," XP"]}),w&&e.jsx("span",{className:"completed-check",children:"✓ 已完成"})]})]},g.id)})})]})}),r==="notes"&&e.jsx("div",{className:"notes-content",children:e.jsxs("div",{className:"notes-placeholder",children:[e.jsx("div",{className:"notes-icon",children:"📝"}),e.jsx("h3",{children:"学习笔记"}),e.jsx("p",{children:"记录你的学习心得和重要知识点"}),e.jsx("textarea",{className:"notes-textarea",placeholder:"在这里记录你的笔记...",rows:10}),e.jsx("button",{className:"btn btn-primary",children:"保存笔记"})]})})]})]})]}):e.jsx("div",{className:"level-detail-page",children:e.jsxs("div",{className:"container detail-container",children:[e.jsxs("button",{className:"back-btn",onClick:()=>s("/map"),children:[e.jsx("span",{children:"←"})," 返回地图"]}),e.jsxs("div",{className:"locked-page",children:[e.jsx("div",{className:"lock-icon-big",children:"🔒"}),e.jsx("h2",{children:"关卡未解锁"}),e.jsx("p",{children:"完成前一关的所有课程和挑战后即可解锁此关卡"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>s("/map"),children:"返回地图"})]})]})})}function ns(t){const s=Date.now()-new Date(t).getTime(),r=Math.floor(s/6e4);if(r<1)return"刚刚";if(r<60)return`${r}分钟前`;const n=Math.floor(r/60);if(n<24)return`${n}小时前`;const i=Math.floor(n/24);return i<7?`${i}天前`:new Date(t).toLocaleDateString("zh-CN")}function as(){const t=Te(),{progress:s,stats:r,getLevelProgress:n,getOverallProgress:i,getRecentActivities:l}=re(),_=i(),C=l(20),d=Array.from({length:7}).map((u,y)=>{const S=new Date;return S.setDate(S.getDate()-(6-y)),S.toISOString().slice(0,10)}),k=ne.map(u=>{var E,F;const y=n(u.id),S=((E=st[u.id])==null?void 0:E.length)||0,a=((F=Ie[u.id])==null?void 0:F.length)||0;return{...u,...y,lessonCount:S,challengeCount:a,total:S+a}}),b=500,A=Math.floor(s.totalXP/b)+1,v=s.totalXP%b,m=Math.round(v/b*100),h=["编程小白","初学者","进阶学徒","熟练开发者","资深工程师","Python 大师","传奇程序员"],p=h[Math.min(A-1,h.length-1)];return e.jsxs("div",{className:"learning-path-page",children:[e.jsxs("div",{className:"path-decoration",children:[e.jsx("div",{className:"deco-circle deco-1"}),e.jsx("div",{className:"deco-circle deco-2"})]}),e.jsxs("div",{className:"container path-container",children:[e.jsx("div",{className:"path-header",children:e.jsxs("div",{className:"header-info",children:[e.jsxs("div",{className:"badge",children:[e.jsx("span",{className:"badge-icon",children:"📈"}),e.jsx("span",{children:"学习路径"})]}),e.jsx("h1",{className:"page-title",children:"我的学习进度"}),e.jsx("p",{className:"page-subtitle",children:"追踪每一次成长，赢取每一个徽章"})]})}),e.jsxs("div",{className:"user-level-card",children:[e.jsxs("div",{className:"user-avatar-lg",children:[e.jsx("span",{children:"LY"}),e.jsx("div",{className:"avatar-ring"})]}),e.jsxs("div",{className:"user-info-block",children:[e.jsxs("div",{className:"user-title-row",children:[e.jsx("h2",{className:"user-name",children:"冒险者 LY"}),e.jsxs("span",{className:"user-level-badge",children:["Lv.",A," ",p]})]}),e.jsxs("div",{className:"level-progress-block",children:[e.jsxs("div",{className:"level-progress-info",children:[e.jsxs("span",{children:[v," / ",b," XP"]}),e.jsxs("span",{children:["距下一级还需 ",b-v," XP"]})]}),e.jsx("div",{className:"level-progress-bar",children:e.jsx("div",{className:"level-progress-fill",style:{width:`${m}%`}})})]}),e.jsxs("div",{className:"user-tags",children:[e.jsx("span",{className:"user-tag",children:"⚡ 速度学习者"}),e.jsx("span",{className:"user-tag",children:"🎯 挑战爱好者"})]})]})]}),e.jsxs("div",{className:"overview-grid",children:[e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"ov-icon",style:{background:"rgba(245, 158, 11, 0.15)",color:"#f59e0b"},children:"⭐"}),e.jsxs("div",{className:"ov-info",children:[e.jsx("div",{className:"ov-value",children:s.totalXP}),e.jsx("div",{className:"ov-label",children:"累计经验值"}),e.jsxs("div",{className:"ov-hint",children:["+",s.xp," 可用"]})]})]}),e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"ov-icon",style:{background:"rgba(239, 68, 68, 0.15)",color:"#ef4444"},children:"🔥"}),e.jsxs("div",{className:"ov-info",children:[e.jsxs("div",{className:"ov-value",children:[s.streak," 天"]}),e.jsx("div",{className:"ov-label",children:"连续学习"}),e.jsx("div",{className:"ov-hint",children:"保持节奏"})]})]}),e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"ov-icon",style:{background:"rgba(59, 130, 246, 0.15)",color:"#3b82f6"},children:"📚"}),e.jsxs("div",{className:"ov-info",children:[e.jsx("div",{className:"ov-value",children:r.completedLessons}),e.jsx("div",{className:"ov-label",children:"完成学习"}),e.jsx("div",{className:"ov-hint",children:"课时统计"})]})]}),e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"ov-icon",style:{background:"rgba(168, 85, 247, 0.15)",color:"#a855f7"},children:"⚔️"}),e.jsxs("div",{className:"ov-info",children:[e.jsx("div",{className:"ov-value",children:r.completedChallenges}),e.jsx("div",{className:"ov-label",children:"完成挑战"}),e.jsx("div",{className:"ov-hint",children:"挑战统计"})]})]}),e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"ov-icon",style:{background:"rgba(16, 185, 129, 0.15)",color:"#10b981"},children:"🚪"}),e.jsxs("div",{className:"ov-info",children:[e.jsxs("div",{className:"ov-value",children:[r.completedLevels," / ",r.totalLevels]}),e.jsx("div",{className:"ov-label",children:"通关进度"}),e.jsxs("div",{className:"ov-hint",children:[_.percent,"% 完成"]})]})]}),e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"ov-icon",style:{background:"rgba(245, 158, 11, 0.15)",color:"#f59e0b"},children:"🏆"}),e.jsxs("div",{className:"ov-info",children:[e.jsx("div",{className:"ov-value",children:s.unlockedAchievements.length}),e.jsx("div",{className:"ov-label",children:"解锁成就"}),e.jsx("div",{className:"ov-hint",children:"查看全部 →"})]})]})]}),e.jsxs("div",{className:"path-main",children:[e.jsxs("div",{className:"path-card calendar-card",children:[e.jsx("h3",{className:"card-title",children:"📅 最近 7 天学习"}),e.jsx("div",{className:"calendar-week",children:d.map(u=>{var E;const y=(E=s.studyDays)==null?void 0:E.includes(u),S=u===new Date().toISOString().slice(0,10),a=new Date(u).toLocaleDateString("zh-CN",{weekday:"short"});return e.jsxs("div",{className:`cal-day ${y?"studied":""} ${S?"today":""}`,title:u,children:[e.jsx("div",{className:"cal-day-label",children:a}),e.jsx("div",{className:"cal-day-cell",children:y&&e.jsx("span",{className:"cal-check",children:"✓"})})]},u)})}),e.jsx("div",{className:"calendar-foot",children:e.jsxs("span",{children:["已连续学习 ",e.jsx("strong",{children:s.streak})," 天"]})})]}),e.jsxs("div",{className:"path-card levels-card",children:[e.jsx("h3",{className:"card-title",children:"🗺️ 学习路径"}),e.jsx("div",{className:"levels-progress",children:k.map((u,y)=>{const S=y===k.length-1;return e.jsxs("div",{className:`path-level ${u.completed?"completed":""} ${u.unlocked?"unlocked":"locked"}`,onClick:()=>u.unlocked&&t(`/level/${u.id}`),children:[e.jsx("div",{className:"pl-node",children:u.completed?e.jsx("span",{children:"✓"}):e.jsx("span",{children:u.id})}),e.jsxs("div",{className:"pl-content",children:[e.jsx("div",{className:"pl-title",children:u.subtitle}),e.jsxs("div",{className:"pl-meta",children:[e.jsxs("span",{children:[u.completed,"/",u.total]}),e.jsxs("span",{children:[u.percent,"%"]})]}),e.jsx("div",{className:"pl-bar",children:e.jsx("div",{className:"pl-fill",style:{width:`${u.percent}%`}})})]}),!S&&e.jsx("div",{className:`pl-line ${u.completed?"completed":""}`})]},u.id)})})]}),e.jsxs("div",{className:"path-card activity-card",children:[e.jsx("h3",{className:"card-title",children:"🕐 最近活动"}),C.length>0?e.jsx("div",{className:"activity-list",children:C.map(u=>e.jsxs("div",{className:"activity-item",children:[e.jsx("div",{className:"act-icon",children:u.icon}),e.jsxs("div",{className:"act-body",children:[e.jsx("div",{className:"act-title",children:u.title}),e.jsx("div",{className:"act-desc",children:u.description})]}),e.jsxs("div",{className:"act-meta",children:[u.xp&&e.jsxs("span",{className:"act-xp",children:["+",u.xp," XP"]}),e.jsx("span",{className:"act-time",children:ns(u.timestamp)})]})]},u.id))}):e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"还没有活动记录，开始学习吧 🚀"})})]})]})]})]})}function is(){var m,h;const{progress:t,stats:s,isAchievementUnlocked:r,isAchievementClaimed:n,claimAchievement:i}=re(),[l,_]=o.useState("all"),C=t.unlockedAchievements.length,d=Y.length,k=Math.round(C/d*100),b=o.useMemo(()=>l==="all"?Y:Y.filter(p=>p.category===l),[l]),A=Y.filter(p=>r(p.id)),v=Y.filter(p=>!r(p.id));return e.jsxs("div",{className:"achievements-page",children:[e.jsxs("div",{className:"achievements-decoration",children:[e.jsx("div",{className:"deco-circle deco-1"}),e.jsx("div",{className:"deco-circle deco-2"}),e.jsx("div",{className:"deco-circle deco-3"})]}),e.jsxs("div",{className:"container achievements-container",children:[e.jsxs("div",{className:"achievements-header",children:[e.jsxs("div",{className:"header-info",children:[e.jsxs("div",{className:"badge",children:[e.jsx("span",{className:"badge-icon",children:"🏆"}),e.jsx("span",{children:"成就系统"})]}),e.jsx("h1",{className:"page-title",children:"成就殿堂"}),e.jsx("p",{className:"page-subtitle",children:"解锁成就，赢得荣耀徽章，赢取经验值奖励"})]}),e.jsxs("div",{className:"header-stats",children:[e.jsxs("div",{className:"h-stat-card",children:[e.jsx("div",{className:"h-stat-icon",children:"🎖️"}),e.jsxs("div",{className:"h-stat-info",children:[e.jsxs("div",{className:"h-stat-value",children:[C," / ",d]}),e.jsx("div",{className:"h-stat-label",children:"已解锁成就"})]})]}),e.jsxs("div",{className:"h-stat-card",children:[e.jsx("div",{className:"h-stat-icon",children:"⭐"}),e.jsxs("div",{className:"h-stat-info",children:[e.jsx("div",{className:"h-stat-value",children:t.totalXP}),e.jsx("div",{className:"h-stat-label",children:"累计 XP"})]})]}),e.jsxs("div",{className:"h-stat-card",children:[e.jsx("div",{className:"h-stat-icon",children:"🔥"}),e.jsxs("div",{className:"h-stat-info",children:[e.jsxs("div",{className:"h-stat-value",children:[t.streak," 天"]}),e.jsx("div",{className:"h-stat-label",children:"连续学习"})]})]})]})]}),e.jsxs("div",{className:"overall-progress-card",children:[e.jsxs("div",{className:"overall-info",children:[e.jsx("span",{className:"overall-label",children:"成就解锁进度"}),e.jsxs("span",{className:"overall-percent",children:[k,"%"]})]}),e.jsx("div",{className:"overall-bar",children:e.jsx("div",{className:"overall-fill",style:{width:`${k}%`}})})]}),e.jsx("div",{className:"category-tabs",children:ye.map(p=>e.jsxs("button",{className:`cat-tab ${l===p.id?"active":""}`,onClick:()=>_(p.id),children:[e.jsx("span",{className:"cat-icon",children:p.icon}),e.jsx("span",{children:p.label})]},p.id))}),A.length>0&&l==="all"&&e.jsxs("div",{className:"achievements-section",children:[e.jsxs("h2",{className:"section-title",children:["✨ 已解锁 (",A.length,")"]}),e.jsx("div",{className:"achievements-grid",children:A.map(p=>{const u=n(p.id),y=qe[p.rarity],S=p.progress?p.progress(s):null;return e.jsxs("div",{className:`achievement-card unlocked rarity-${p.rarity} ${u?"claimed":""}`,style:{borderColor:y.color,background:y.bg},children:[e.jsx("div",{className:"ach-glow",style:{background:y.color}}),e.jsx("div",{className:"ach-icon",style:{color:y.color},children:p.icon}),e.jsxs("div",{className:"ach-content",children:[e.jsxs("div",{className:"ach-header",children:[e.jsx("h3",{className:"ach-title",children:p.title}),e.jsx("span",{className:"ach-rarity",style:{background:y.color},children:y.label})]}),e.jsx("p",{className:"ach-desc",children:p.description}),S&&S.total>1&&e.jsxs("div",{className:"ach-progress",children:[e.jsx("div",{className:"ach-progress-bar",children:e.jsx("div",{className:"ach-progress-fill",style:{width:`${S.current/S.total*100}%`,background:y.color}})}),e.jsxs("span",{className:"ach-progress-text",children:[S.current," / ",S.total]})]}),e.jsxs("div",{className:"ach-footer",children:[e.jsxs("span",{className:"ach-xp",children:["+",p.xpReward," XP"]}),u?e.jsx("span",{className:"ach-claimed",children:"✓ 已领取"}):e.jsx("button",{className:"ach-claim-btn",style:{background:y.color},onClick:()=>i(p.id),children:"领取奖励"})]})]})]},p.id)})})]}),e.jsxs("div",{className:"achievements-section",children:[e.jsx("h2",{className:"section-title",children:l==="all"?"🔒 待解锁":`${(m=ye.find(p=>p.id===l))==null?void 0:m.icon} ${(h=ye.find(p=>p.id===l))==null?void 0:h.label}类成就`}),e.jsx("div",{className:"achievements-grid",children:(l==="all"?v:b).map(p=>{const u=qe[p.rarity],y=p.progress?p.progress(s):null;return e.jsxs("div",{className:`achievement-card locked rarity-${p.rarity}`,style:{borderColor:u.color,background:u.bg},children:[e.jsx("div",{className:"ach-icon",style:{color:u.color,filter:"grayscale(50%) opacity(0.6)"},children:p.icon}),e.jsxs("div",{className:"ach-content",children:[e.jsxs("div",{className:"ach-header",children:[e.jsx("h3",{className:"ach-title",children:p.title}),e.jsx("span",{className:"ach-rarity",style:{background:u.color},children:u.label})]}),e.jsx("p",{className:"ach-desc",children:p.description}),y&&e.jsxs("div",{className:"ach-progress",children:[e.jsx("div",{className:"ach-progress-bar",children:e.jsx("div",{className:"ach-progress-fill",style:{width:`${y.current/y.total*100}%`,background:u.color}})}),e.jsxs("span",{className:"ach-progress-text",children:[y.current," / ",y.total]})]}),e.jsxs("div",{className:"ach-footer",children:[e.jsxs("span",{className:"ach-xp",children:["+",p.xpReward," XP"]}),e.jsx("span",{className:"ach-locked-label",children:"🔒 未解锁"})]})]})]},p.id)})}),b.length===0&&e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"该分类暂无成就"})})]})]})]})}function rs(){const{progress:t,stats:s}=re(),[r,n]=o.useState("xp"),[i,l]=o.useState("all"),_={rank:0,name:"我 (LY)",avatar:"LY",xp:t.totalXP,streak:t.streak,levels:s.completedLevels,color:"#10b981",isMe:!0},C=o.useMemo(()=>{const h=[...Mt];return h.sort((p,u)=>u[r]-p[r]),h},[r]),d=C.findIndex(h=>h[r]>t.totalXP)+1;_.rank=d>0?d:C.length+1;const k=o.useMemo(()=>[...C,_].sort((p,u)=>u[r]-p[r]).map((p,u)=>({...p,rank:u+1})),[C,r,t.totalXP]),b=k.slice(0,3),A=k.slice(3),v=k.find(h=>h.isMe),m={xp:"经验值 XP",streak:"连续天数",levels:"通关数"};return e.jsxs("div",{className:"leaderboard-page",children:[e.jsxs("div",{className:"lb-decoration",children:[e.jsx("div",{className:"deco-circle deco-1"}),e.jsx("div",{className:"deco-circle deco-2"})]}),e.jsxs("div",{className:"container lb-container",children:[e.jsxs("div",{className:"lb-header",children:[e.jsxs("div",{className:"badge",children:[e.jsx("span",{className:"badge-icon",children:"🏅"}),e.jsx("span",{children:"排行榜"})]}),e.jsx("h1",{className:"page-title",children:"学习风云榜"}),e.jsx("p",{className:"page-subtitle",children:"看看你在 Python Quest 社区中的位置"})]}),e.jsxs("div",{className:"lb-stats-row",children:[e.jsxs("div",{className:"lb-stat",children:[e.jsx("span",{className:"lb-stat-label",children:"我的排名"}),e.jsxs("span",{className:"lb-stat-value",children:["#",v.rank]})]}),e.jsxs("div",{className:"lb-stat",children:[e.jsx("span",{className:"lb-stat-label",children:"我的经验"}),e.jsx("span",{className:"lb-stat-value",children:t.totalXP})]}),e.jsxs("div",{className:"lb-stat",children:[e.jsx("span",{className:"lb-stat-label",children:"我的连续"}),e.jsxs("span",{className:"lb-stat-value",children:[t.streak," 天"]})]}),e.jsxs("div",{className:"lb-stat",children:[e.jsx("span",{className:"lb-stat-label",children:"通关数"}),e.jsx("span",{className:"lb-stat-value",children:s.completedLevels})]})]}),e.jsxs("div",{className:"lb-filters",children:[e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-label",children:"时间:"}),[{v:"all",l:"总榜"},{v:"month",l:"本月"},{v:"week",l:"本周"}].map(h=>e.jsx("button",{className:`filter-btn ${i===h.v?"active":""}`,onClick:()=>l(h.v),children:h.l},h.v))]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-label",children:"排序:"}),Object.keys(m).map(h=>e.jsx("button",{className:`filter-btn ${r===h?"active":""}`,onClick:()=>n(h),children:m[h]},h))]})]}),e.jsx("div",{className:"podium",children:b.map((h,p)=>{const y=[1,0,2].indexOf(p),S=[180,220,150][y],a=["#fbbf24","#94a3b8","#f97316"];return e.jsxs("div",{className:`podium-item rank-${h.rank}`,style:{order:y+1},children:[e.jsxs("div",{className:"podium-avatar",style:{background:h.color},children:[e.jsx("span",{children:h.avatar}),h.isMe&&e.jsx("span",{className:"me-flag",children:"我"})]}),e.jsx("div",{className:"podium-name",children:h.name}),e.jsxs("div",{className:"podium-stats",children:[e.jsxs("span",{children:["⭐ ",h.xp]}),e.jsxs("span",{children:["🔥 ",h.streak]})]}),e.jsxs("div",{className:"podium-rank",style:{background:a[p]},children:[e.jsx("span",{className:"rank-medal",children:h.rank===1?"🥇":h.rank===2?"🥈":"🥉"}),e.jsxs("span",{children:["#",h.rank]})]}),e.jsx("div",{className:"podium-stand",style:{height:`${S}px`,background:a[p]},children:e.jsx("span",{className:"stand-text",children:h.rank===1?"冠军":h.rank===2?"亚军":"季军"})})]},h.rank)})}),e.jsxs("div",{className:"lb-list",children:[e.jsxs("div",{className:"lb-list-header",children:[e.jsx("span",{children:"排名"}),e.jsx("span",{children:"玩家"}),e.jsx("span",{children:"经验"}),e.jsx("span",{children:"连续"}),e.jsx("span",{children:"通关"})]}),A.map(h=>e.jsxs("div",{className:`lb-list-row ${h.isMe?"is-me":""}`,children:[e.jsxs("span",{className:"lb-rank",children:["#",h.rank]}),e.jsxs("div",{className:"lb-player",children:[e.jsx("div",{className:"lb-avatar",style:{background:h.color},children:e.jsx("span",{children:h.avatar})}),e.jsx("span",{className:"lb-name",children:h.name})]}),e.jsxs("span",{className:"lb-xp",children:["⭐ ",h.xp]}),e.jsxs("span",{className:"lb-streak",children:["🔥 ",h.streak]}),e.jsxs("span",{className:"lb-levels",children:["🚪 ",h.levels]})]},h.rank)),v.rank>3&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lb-divider",children:"... 你的位置 ..."}),e.jsxs("div",{className:"lb-list-row is-me",children:[e.jsxs("span",{className:"lb-rank",children:["#",v.rank]}),e.jsxs("div",{className:"lb-player",children:[e.jsx("div",{className:"lb-avatar",style:{background:v.color},children:e.jsx("span",{children:v.avatar})}),e.jsx("span",{className:"lb-name",children:v.name})]}),e.jsxs("span",{className:"lb-xp",children:["⭐ ",v.xp]}),e.jsxs("span",{className:"lb-streak",children:["🔥 ",v.streak]}),e.jsxs("span",{className:"lb-levels",children:["🚪 ",v.levels]})]})]})]})]})]})}const os="v1.2",ls="2026-07-29",ds=["扩展至44关：新增输入输出、迭代器生成器、JSON/XML、数据库、多线程、异步编程、单元测试、性能优化","重构拓展卡片体系：6大分类（语言基础/数据科学/进阶编程/Web开发/工具数据库/金融实战）","对齐菜鸟教程完整章节结构，补充所有核心主题","无敌模式覆盖全部44关","版本化存储 key 自动升级，旧版本数据冻结保留"],ps=[{name:"React 18",icon:"⚛️",desc:"UI 框架，使用 Hooks + Context API"},{name:"TypeScript 5",icon:"📘",desc:"类型安全，所有组件均使用 TSX"},{name:"Vite 5",icon:"⚡",desc:"构建工具，支持代码分割和 HMR"},{name:"React Router 6",icon:"🧭",desc:"HashRouter 路由，适配 GitHub Pages"},{name:"Pyodide 0.26",icon:"🐍",desc:"浏览器中运行 Python，WASM 技术"},{name:"GitHub API",icon:"🐙",desc:"PAT 认证 + Gist 存储云同步"},{name:"localStorage",icon:"💾",desc:"本地进度持久化，防抖写入"},{name:"CSS Variables",icon:"🎨",desc:"主题色系统，无 UI 库依赖"}],cs=[{name:"src",type:"folder",path:"src",desc:"源码根目录",children:[{name:"components",type:"folder",path:"src/components",desc:"可复用组件",children:[{name:"Navbar",type:"file",path:"src/components/Navbar",desc:"顶部导航栏（Logo + 菜单 + 登录状态 + 同步指示器）"},{name:"Footer",type:"file",path:"src/components/Footer",desc:"底部信息栏"},{name:"CodeEditor",type:"file",path:"src/components/CodeEditor",desc:"代码编辑器（textarea + 语法高亮 + Pyodide 执行）"},{name:"InteractiveLesson",type:"file",path:"src/components/InteractiveLesson",desc:"交互式课程（4种步骤类型 + 答案展示 + 进度条）"},{name:"ChallengeArena",type:"file",path:"src/components/ChallengeArena",desc:"挑战竞技场（代码提交 + 测试验证）"},{name:"LoginModal",type:"file",path:"src/components/LoginModal",desc:"GitHub PAT 登录弹窗（含 Token 获取指南）"},{name:"VersionHistory",type:"file",path:"src/components/VersionHistory",desc:"版本历史查看（只读快照 + 关卡进度）"},{name:"Button",type:"file",path:"src/components/Button",desc:"通用按钮组件"}]},{name:"config",type:"folder",path:"src/config",desc:"配置模块",children:[{name:"github.ts",type:"file",path:"src/config/github.ts",desc:"GitHub API 集成（PAT认证 + Gist读写 + 超时重试）"},{name:"versionManager.ts",type:"file",path:"src/config/versionManager.ts",desc:"版本管理系统（注册表 + 数据冻结 + 快照）"}]},{name:"context",type:"folder",path:"src/context",desc:"React Context 全局状态",children:[{name:"AuthContext.tsx",type:"file",path:"src/context/AuthContext.tsx",desc:"认证状态（登录/登出 + Token 校验）"},{name:"ProgressContext.tsx",type:"file",path:"src/context/ProgressContext.tsx",desc:"进度状态（关卡/课程/挑战/成就 + 本地存储 + 云同步）"},{name:"PyodideContext.tsx",type:"file",path:"src/context/PyodideContext.tsx",desc:"Pyodide 环境（WASM 加载 + Python 执行）"}]},{name:"data",type:"folder",path:"src/data",desc:"静态数据",children:[{name:"mockData.ts",type:"file",path:"src/data/mockData.ts",desc:"44关卡元数据（标题/难度/图标/分类/主题）"},{name:"lessonContent.ts",type:"file",path:"src/data/lessonContent.ts",desc:"课程内容（8000+行，44关×6步，含讲解/示例/练习/测验）"},{name:"achievements.ts",type:"file",path:"src/data/achievements.ts",desc:"成就系统定义（XP/徽章/解锁条件）"},{name:"runoobTopics.ts",type:"file",path:"src/data/runoobTopics.ts",desc:"菜鸟教程拓展学习路径"},{name:"projectDocs.ts",type:"file",path:"src/data/projectDocs.ts",desc:"项目文档数据（本文件）"}]},{name:"pages",type:"folder",path:"src/pages",desc:"页面组件",children:[{name:"Home",type:"file",path:"src/pages/Home",desc:"首页（Hero + 功能介绍 + 版本入口）"},{name:"LevelMap",type:"file",path:"src/pages/LevelMap",desc:"关卡地图（34关蛇形布局 + 进度条）"},{name:"LevelDetail",type:"file",path:"src/pages/LevelDetail",desc:"关卡详情（课程 + 挑战 + 拓展阅读）"},{name:"Achievements",type:"file",path:"src/pages/Achievements",desc:"成就页面"},{name:"Leaderboard",type:"file",path:"src/pages/Leaderboard",desc:"排行榜页面"},{name:"LearningPath",type:"file",path:"src/pages/LearningPath",desc:"学习路径页面"},{name:"SourceExplorer",type:"file",path:"src/pages/SourceExplorer",desc:"源码探索页面（本页面）"}]},{name:"App.tsx",type:"file",path:"src/App.tsx",desc:"根组件（路由表 + Navbar + Footer）"},{name:"main.tsx",type:"file",path:"src/main.tsx",desc:"入口文件（Provider 嵌套 + HashRouter）"},{name:"types/index.ts",type:"file",path:"src/types/index.ts",desc:"类型定义（Level/Lesson/Challenge）"}]},{name:"config files",type:"folder",path:".",desc:"配置文件",children:[{name:"vite.config.ts",type:"file",path:"vite.config.ts",desc:"Vite 配置（base路径 + 代码分割 + 端口）"},{name:"package.json",type:"file",path:"package.json",desc:"依赖管理（4运行时 + 5开发依赖）"},{name:"tsconfig.json",type:"file",path:"tsconfig.json",desc:"TypeScript 编译配置"},{name:".github/workflows/deploy.yml",type:"file",path:".github/workflows/deploy.yml",desc:"GitHub Actions 自动部署到 Pages"}]}],us=[{icon:"🎮",title:"游戏化关卡系统",desc:"44个关卡覆盖Python基础到性能优化，蛇形地图布局，6大主题分类（语言基础/数据科学/进阶编程/Web开发/工具数据库/金融实战），支持关卡解锁/完成状态/进度百分比显示",files:["src/data/mockData.ts","src/pages/LevelMap/LevelMap.tsx","src/context/ProgressContext.tsx"]},{icon:"🐍",title:"浏览器内 Python 执行",desc:"基于 Pyodide (WebAssembly) 在浏览器中直接运行 Python 代码，无需后端服务器",files:["src/context/PyodideContext.tsx","src/components/CodeEditor/CodeEditor.tsx"]},{icon:"📚",title:"交互式课程",desc:"4种步骤类型（讲解/示例/练习/测验），支持查看答案、复制代码、步骤跳转",files:["src/components/InteractiveLesson/InteractiveLesson.tsx","src/data/lessonContent.ts"]},{icon:"🔐",title:"GitHub PAT 认证",desc:"使用 GitHub Personal Access Token 登录，无需 Firebase，适配国内网络",files:["src/config/github.ts","src/context/AuthContext.tsx","src/components/LoginModal/LoginModal.tsx"]},{icon:"☁️",title:"Gist 云端同步",desc:"进度数据存储在 GitHub Gist 中，支持超时重试（15s + 指数退避）和网络错误降级",files:["src/config/github.ts","src/context/ProgressContext.tsx"]},{icon:"💾",title:"版本化进度管理",desc:"每次迭代版本独立存储，旧版本数据冻结保留，可查看历史进度快照",files:["src/config/versionManager.ts","src/components/VersionHistory/VersionHistory.tsx"]},{icon:"🏆",title:"成就系统",desc:"XP经验值、徽章解锁、活动日志，激励用户持续学习",files:["src/data/achievements.ts","src/context/ProgressContext.tsx","src/pages/Achievements/Achievements.tsx"]},{icon:"📱",title:"响应式设计",desc:"CSS 变量主题系统，移动端适配，无第三方 UI 库依赖",files:["src/index.css","src/App.css","各组件CSS文件"]}],ms=[{icon:"🏛️",title:"Provider 三层嵌套架构",desc:"AuthProvider → ProgressProvider → PyodideProvider，由外到内依次初始化。Auth最外层因为Progress依赖用户身份进行云同步，Pyodide最内层因为只在代码执行时才需要。",code:`<AuthProvider>
  <ProgressProvider>
    <PyodideProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PyodideProvider>
  </ProgressProvider>
</AuthProvider>`},{icon:"🔄",title:"双通道数据持久化",desc:"本地 localStorage（300ms防抖写入）保证即时可用，GitHub Gist（1.5s延迟同步）实现跨设备。同步失败不阻塞本地使用，网络恢复后自动重试。",code:`// 本地保存 - 防抖300ms
localSaveTimerRef.current = setTimeout(() => {
  safeSetItem(STORAGE_KEY, JSON.stringify(progress))
}, 300)

// 云端同步 - 延迟1.5s + 超时15s + 重试2次
pendingSyncRef.current = setTimeout(() => {
  writeGist(auth.token, auth.gistId, { progress, savedAt })
}, 1500)`},{icon:"🧊",title:"版本冻结机制",desc:"每个版本使用独立存储key（python-quest-progress@v1.1），迭代时旧版本数据自动复制冻结，用户可点击版本号查看历史进度快照。登录状态使用独立key不受影响。",code:`// 版本化存储 key
const STORAGE_KEY = getVersionStorageKey(CURRENT_VERSION)
// => "python-quest-progress@v1.1"

// Auth 独立存储（跨版本持久）
const TOKEN_KEY = 'python-quest-github-token'`},{icon:"🐍",title:"Pyodide WASM 执行原理",desc:"Pyodide 将 CPython 编译为 WebAssembly，在浏览器中运行完整 Python 解释器。加载时从本地 public/pyodide/ 目录读取（避免CORS），通过 runPythonAsync 执行代码。",code:`const pyodide = await loadPyodide({
  indexURL: '/python-web-try/pyodide/',
  checkAPIVersion: false
})
await pyodide.runPythonAsync(\`
  import sys, io
  result = exec(user_code)
\`)`},{icon:"🛡️",title:"安全存储降级策略",desc:"safeSetItem 捕获 QuotaExceededError，存储空间不足时自动清理旧活动日志（保留最近30条），避免应用崩溃。所有 localStorage 操作均经过安全包装。",code:`function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      // 清理旧数据后重试
      data.activityLog = data.activityLog.slice(0, 30)
      localStorage.setItem(key, JSON.stringify(data))
    }
  }
}`},{icon:"⚙️",title:"Vite 代码分割",desc:"将 react/react-dom/react-router-dom 分离为 react-vendor chunk，pyodide 分离为独立 chunk。主包体积减少33%，vendor chunk 可被浏览器独立缓存。",code:`// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        'pyodide': ['pyodide']
      }
    }
  }
}`}],Ue=[{step:1,title:"克隆项目并安装依赖",desc:"将项目克隆到本地，安装 npm 依赖包",code:`git clone https://github.com/5zdz5/python-web-try.git
cd python-web-try
npm install`},{step:2,title:"修改项目基本信息",desc:"修改 package.json 中的项目名称和 vite.config.ts 中的 base 路径。如果你部署到 GitHub Pages 的 /your-repo-name/ 路径下，需要修改 base。",code:`// vite.config.ts
export default defineConfig({
  base: '/your-repo-name/',  // 改为你的仓库名
  // ...
})`},{step:3,title:"替换课程内容",desc:"修改 src/data/mockData.ts 定义你的关卡元数据，修改 src/data/lessonContent.ts 添加课程步骤。每个关卡支持4种步骤类型：讲解、示例、练习、测验。",code:`// mockData.ts - 定义关卡
{ id: 1, title: '第一课', icon: '📚', difficulty: 1, category: '基础' }

// lessonContent.ts - 定义课程步骤
1: [{
  id: 1, title: '步骤标题', type: 'explanation',
  content: 'Markdown 格式的内容'
}]`},{step:4,title:"自定义主题色",desc:"修改 src/index.css 中的 CSS 变量，一键切换全站主题。所有组件都使用 var(--color-xxx) 引用。",code:`/* src/index.css */
:root {
  --color-bg-primary: #1a1b26;
  --color-bg-secondary: #24283b;
  --color-accent-primary: #7aa2f7;
  --color-accent-success: #10b981;
}`},{step:5,title:"配置 GitHub 认证",desc:"认证模块无需修改，用户输入自己的 GitHub PAT 即可。Gist API 自动创建进度备份文件。如需改为其他后端，替换 src/config/github.ts 和 src/context/AuthContext.tsx。",code:`// 用户在 GitHub Settings > Developer settings
// > Personal access tokens > Generate new token
// 勾选 gist 权限即可`},{step:6,title:"部署到 GitHub Pages",desc:"项目已配置 GitHub Actions 自动部署。推送代码到 main 分支即可触发部署。确保仓库 Settings > Pages > Source 设为 gh-pages 分支。",code:`# .github/workflows/deploy.yml
# 自动构建并部署到 gh-pages 分支
git push origin main
# 等待 Actions 完成，访问:
# https://你的用户名.github.io/你的仓库名/`},{step:7,title:"迭代新版本",desc:"每次大版本更新时，修改 versionManager.ts 中的版本号常量。系统自动冻结旧版本数据，用户进度不丢失。",code:`// src/config/versionManager.ts
export const CURRENT_VERSION = 'v2.0'
export const CURRENT_VERSION_LABEL = '全新版本'
export const CURRENT_VERSION_DESC = '描述本次更新内容'

// 同时更新 projectDocs.ts 中的文档
export const DOC_VERSION = 'v2.0'
export const DOC_CHANGES = ['新功能1', '修复问题2']`}];function nt({node:t,depth:s}){const[r,n]=o.useState(s<2),i=t.type==="folder";return e.jsxs("div",{className:"file-node",children:[e.jsxs("div",{className:`file-row ${i?"folder":"file"}`,style:{paddingLeft:`${s*20+12}px`},onClick:()=>i&&n(!r),children:[e.jsx("span",{className:"file-icon",children:i?r?"📂":"📁":fs(t.name)}),e.jsx("span",{className:"file-name",children:t.name}),e.jsx("span",{className:"file-desc",children:t.desc})]}),i&&r&&t.children&&e.jsx("div",{className:"file-children",children:t.children.map(l=>e.jsx(nt,{node:l,depth:s+1},l.path))})]})}function fs(t){return t.endsWith(".tsx")||t.endsWith(".ts")?"📘":t.endsWith(".css")?"🎨":t.endsWith(".json")?"📋":t.endsWith(".yml")||t.endsWith(".yaml")?"⚙️":t.endsWith(".md")?"📝":"📄"}function hs(){const[t,s]=o.useState("overview"),r=[{id:"overview",label:"总览",icon:"🏠"},{id:"files",label:"源码结构",icon:"📂"},{id:"features",label:"功能清单",icon:"✨"},{id:"principles",label:"核心原理",icon:"🔬"},{id:"migration",label:"迁移指南",icon:"🚀"}];return e.jsxs("div",{className:"source-explorer-page",children:[e.jsx("section",{className:"se-hero",children:e.jsxs("div",{className:"se-hero-content",children:[e.jsxs("div",{className:"se-badge",children:[e.jsx("span",{className:"se-version",children:os}),e.jsxs("span",{className:"se-date",children:["更新于 ",ls]})]}),e.jsxs("h1",{className:"se-title",children:[e.jsx("span",{className:"se-icon",children:"🔧"}),"源码探索中心"]}),e.jsx("p",{className:"se-subtitle",children:"了解项目架构、功能原理，学习如何迁移源码进行二次开发"}),e.jsx("div",{className:"se-tech-pills",children:ps.map(n=>e.jsxs("span",{className:"tech-pill",title:n.desc,children:[e.jsx("span",{className:"tech-icon",children:n.icon}),n.name]},n.name))})]})}),e.jsx("section",{className:"se-changelog",children:e.jsxs("div",{className:"container",children:[e.jsx("h3",{className:"changelog-title",children:"📢 本次更新内容"}),e.jsx("div",{className:"changelog-list",children:ds.map((n,i)=>e.jsxs("div",{className:"changelog-item",children:[e.jsx("span",{className:"changelog-dot",children:"✦"}),e.jsx("span",{children:n})]},i))})]})}),e.jsx("div",{className:"se-tabs-bar",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"se-tabs",children:r.map(n=>e.jsxs("button",{className:`se-tab ${t===n.id?"active":""}`,onClick:()=>s(n.id),children:[e.jsx("span",{className:"tab-icon",children:n.icon}),e.jsx("span",{children:n.label})]},n.id))})})}),e.jsxs("div",{className:"se-content container",children:[t==="overview"&&e.jsxs("div",{className:"tab-panel animate-fade-in",children:[e.jsxs("div",{className:"overview-grid",children:[e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"overview-icon",children:"📦"}),e.jsx("h3",{children:"项目规模"}),e.jsxs("div",{className:"overview-stats",children:[e.jsxs("div",{className:"os-row",children:[e.jsx("span",{className:"os-label",children:"组件"}),e.jsx("span",{className:"os-val",children:"8 个"})]}),e.jsxs("div",{className:"os-row",children:[e.jsx("span",{className:"os-label",children:"页面"}),e.jsx("span",{className:"os-val",children:"7 个"})]}),e.jsxs("div",{className:"os-row",children:[e.jsx("span",{className:"os-label",children:"关卡"}),e.jsx("span",{className:"os-val",children:"34 关"})]}),e.jsxs("div",{className:"os-row",children:[e.jsx("span",{className:"os-label",children:"课程步骤"}),e.jsx("span",{className:"os-val",children:"6800+ 行"})]}),e.jsxs("div",{className:"os-row",children:[e.jsx("span",{className:"os-label",children:"依赖"}),e.jsx("span",{className:"os-val",children:"4 运行时 + 5 开发"})]})]})]}),e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"overview-icon",children:"🏗️"}),e.jsx("h3",{children:"架构特点"}),e.jsxs("ul",{className:"overview-list",children:[e.jsx("li",{children:"Context API 全局状态管理（无 Redux）"}),e.jsx("li",{children:"HashRouter 路由（适配静态部署）"}),e.jsx("li",{children:"Pyodide WASM 浏览器内 Python"}),e.jsx("li",{children:"GitHub Gist 云端进度同步"}),e.jsx("li",{children:"localStorage 防抖本地持久化"}),e.jsx("li",{children:"CSS 变量主题系统（无 UI 库）"})]})]}),e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"overview-icon",children:"🎯"}),e.jsx("h3",{children:"设计理念"}),e.jsxs("ul",{className:"overview-list",children:[e.jsx("li",{children:"游戏化学习体验"}),e.jsx("li",{children:"国内网络友好（无 Firebase）"}),e.jsx("li",{children:"零后端服务器成本"}),e.jsx("li",{children:"渐进式进度保存"}),e.jsx("li",{children:"版本化数据管理"}),e.jsx("li",{children:"易于迁移和二次开发"})]})]})]}),e.jsxs("div",{className:"overview-cta",children:[e.jsx("h3",{children:"快速导航"}),e.jsxs("div",{className:"cta-buttons",children:[e.jsx("button",{className:"cta-btn",onClick:()=>s("files"),children:"📂 查看源码结构"}),e.jsx("button",{className:"cta-btn",onClick:()=>s("features"),children:"✨ 功能清单"}),e.jsx("button",{className:"cta-btn",onClick:()=>s("principles"),children:"🔬 核心原理"}),e.jsx("button",{className:"cta-btn",onClick:()=>s("migration"),children:"🚀 迁移指南"})]})]})]}),t==="files"&&e.jsxs("div",{className:"tab-panel animate-fade-in",children:[e.jsx("h2",{className:"panel-title",children:"📂 项目文件结构"}),e.jsx("p",{className:"panel-desc",children:"点击文件夹展开/折叠，每个文件附带功能说明"}),e.jsx("div",{className:"file-tree-container",children:cs.map(n=>e.jsx(nt,{node:n,depth:0},n.path))})]}),t==="features"&&e.jsxs("div",{className:"tab-panel animate-fade-in",children:[e.jsx("h2",{className:"panel-title",children:"✨ 功能清单"}),e.jsx("p",{className:"panel-desc",children:"每个功能列出涉及的源码文件"}),e.jsx("div",{className:"features-grid",children:us.map(n=>e.jsxs("div",{className:"feature-doc-card",children:[e.jsxs("div",{className:"fdc-header",children:[e.jsx("span",{className:"fdc-icon",children:n.icon}),e.jsx("h3",{children:n.title})]}),e.jsx("p",{className:"fdc-desc",children:n.desc}),e.jsx("div",{className:"fdc-files",children:n.files.map(i=>e.jsx("code",{className:"fdc-file-tag",children:i},i))})]},n.title))})]}),t==="principles"&&e.jsxs("div",{className:"tab-panel animate-fade-in",children:[e.jsx("h2",{className:"panel-title",children:"🔬 核心原理"}),e.jsx("p",{className:"panel-desc",children:"深入理解项目的关键技术决策和设计模式"}),e.jsx("div",{className:"principles-list",children:ms.map(n=>e.jsxs("div",{className:"principle-card",children:[e.jsxs("div",{className:"pc-header",children:[e.jsx("span",{className:"pc-icon",children:n.icon}),e.jsx("h3",{children:n.title})]}),e.jsx("p",{className:"pc-desc",children:n.desc}),n.code&&e.jsxs("div",{className:"pc-code-block",children:[e.jsxs("div",{className:"pc-code-header",children:[e.jsxs("span",{className:"pc-code-dots",children:[e.jsx("span",{className:"dot red"}),e.jsx("span",{className:"dot yellow"}),e.jsx("span",{className:"dot green"})]}),e.jsx("span",{className:"pc-code-lang",children:"Code"})]}),e.jsx("pre",{className:"pc-code",children:e.jsx("code",{children:n.code})})]})]},n.title))})]}),t==="migration"&&e.jsxs("div",{className:"tab-panel animate-fade-in",children:[e.jsx("h2",{className:"panel-title",children:"🚀 迁移指南"}),e.jsx("p",{className:"panel-desc",children:"按照步骤将本项目迁移为你的 own 项目"}),e.jsx("div",{className:"migration-timeline",children:Ue.map(n=>e.jsxs("div",{className:"migration-step",children:[e.jsxs("div",{className:"ms-marker",children:[e.jsx("div",{className:"ms-circle",children:n.step}),n.step<Ue.length&&e.jsx("div",{className:"ms-line"})]}),e.jsxs("div",{className:"ms-content",children:[e.jsx("h3",{className:"ms-title",children:n.title}),e.jsx("p",{className:"ms-desc",children:n.desc}),n.code&&e.jsx("div",{className:"ms-code-block",children:e.jsx("pre",{className:"ms-code",children:e.jsx("code",{children:n.code})})})]})]},n.step))})]})]}),e.jsxs("div",{className:"se-footer",children:[e.jsx(G,{to:"/",className:"se-back-btn",children:"← 返回首页"}),e.jsx(G,{to:"/map",className:"se-back-btn",children:"前往关卡地图 →"})]})]})}function gs(){return e.jsxs("div",{className:"app",children:[e.jsx($t,{}),e.jsx("main",{className:"main-content",children:e.jsxs(gt,{children:[e.jsx(Q,{path:"/",element:e.jsx(Xt,{})}),e.jsx(Q,{path:"/map",element:e.jsx(Qt,{})}),e.jsx(Q,{path:"/level/:id",element:e.jsx(ss,{})}),e.jsx(Q,{path:"/path",element:e.jsx(as,{})}),e.jsx(Q,{path:"/achievements",element:e.jsx(is,{})}),e.jsx(Q,{path:"/leaderboard",element:e.jsx(rs,{})}),e.jsx(Q,{path:"/source",element:e.jsx(hs,{})})]})}),e.jsx(Vt,{})]})}Ce.createRoot(document.getElementById("root")).render(e.jsx(_t.StrictMode,{children:e.jsx(Lt,{children:e.jsx(Jt,{children:e.jsx(Ft,{children:e.jsx(yt,{children:e.jsx(gs,{})})})})})}));
