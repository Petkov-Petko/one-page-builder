(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))w(N);new MutationObserver(N=>{for(const m of N)if(m.type==="childList")for(const u of m.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&w(u)}).observe(document,{childList:!0,subtree:!0});function g(N){const m={};return N.integrity&&(m.integrity=N.integrity),N.referrerPolicy&&(m.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?m.credentials="include":N.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function w(N){if(N.ep)return;N.ep=!0;const m=g(N);fetch(N.href,m)}})();var Ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bd(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var _s={exports:{}},Zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function Pp(){if(_d)return Zi;_d=1;var p=Symbol.for("react.transitional.element"),R=Symbol.for("react.fragment");function g(w,N,m){var u=null;if(m!==void 0&&(u=""+m),N.key!==void 0&&(u=""+N.key),"key"in N){m={};for(var f in N)f!=="key"&&(m[f]=N[f])}else m=N;return N=m.ref,{$$typeof:p,type:w,key:u,ref:N!==void 0?N:null,props:m}}return Zi.Fragment=R,Zi.jsx=g,Zi.jsxs=g,Zi}var Sd;function Fp(){return Sd||(Sd=1,_s.exports=Pp()),_s.exports}var o=Fp(),Ss={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function Jp(){if(Td)return ke;Td=1;var p=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),k=Symbol.iterator;function T(C){return C===null||typeof C!="object"?null:(C=k&&C[k]||C["@@iterator"],typeof C=="function"?C:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,d={};function c(C,j,B){this.props=C,this.context=j,this.refs=d,this.updater=B||y}c.prototype.isReactComponent={},c.prototype.setState=function(C,j){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,j,"setState")},c.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function _(){}_.prototype=c.prototype;function E(C,j,B){this.props=C,this.context=j,this.refs=d,this.updater=B||y}var M=E.prototype=new _;M.constructor=E,A(M,c.prototype),M.isPureReactComponent=!0;var q=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},ne=Object.prototype.hasOwnProperty;function F(C,j,B,ee,re,le){return B=le.ref,{$$typeof:p,type:C,key:j,ref:B!==void 0?B:null,props:le}}function X(C,j){return F(C.type,j,void 0,void 0,void 0,C.props)}function $(C){return typeof C=="object"&&C!==null&&C.$$typeof===p}function de(C){var j={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(B){return j[B]})}var me=/\/+/g;function z(C,j){return typeof C=="object"&&C!==null&&C.key!=null?de(""+C.key):j.toString(36)}function ae(){}function h(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(ae,ae):(C.status="pending",C.then(function(j){C.status==="pending"&&(C.status="fulfilled",C.value=j)},function(j){C.status==="pending"&&(C.status="rejected",C.reason=j)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function ie(C,j,B,ee,re){var le=typeof C;(le==="undefined"||le==="boolean")&&(C=null);var ge=!1;if(C===null)ge=!0;else switch(le){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(C.$$typeof){case p:case R:ge=!0;break;case S:return ge=C._init,ie(ge(C._payload),j,B,ee,re)}}if(ge)return re=re(C),ge=ee===""?"."+z(C,0):ee,q(re)?(B="",ge!=null&&(B=ge.replace(me,"$&/")+"/"),ie(re,j,B,"",function(Ce){return Ce})):re!=null&&($(re)&&(re=X(re,B+(re.key==null||C&&C.key===re.key?"":(""+re.key).replace(me,"$&/")+"/")+ge)),j.push(re)),1;ge=0;var Me=ee===""?".":ee+":";if(q(C))for(var we=0;we<C.length;we++)ee=C[we],le=Me+z(ee,we),ge+=ie(ee,j,B,le,re);else if(we=T(C),typeof we=="function")for(C=we.call(C),we=0;!(ee=C.next()).done;)ee=ee.value,le=Me+z(ee,we++),ge+=ie(ee,j,B,le,re);else if(le==="object"){if(typeof C.then=="function")return ie(h(C),j,B,ee,re);throw j=String(C),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ge}function Z(C,j,B){if(C==null)return C;var ee=[],re=0;return ie(C,ee,"","",function(le){return j.call(B,le,re++)}),ee}function Y(C){if(C._status===-1){var j=C._result;j=j(),j.then(function(B){(C._status===0||C._status===-1)&&(C._status=1,C._result=B)},function(B){(C._status===0||C._status===-1)&&(C._status=2,C._result=B)}),C._status===-1&&(C._status=0,C._result=j)}if(C._status===1)return C._result.default;throw C._result}var se=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function J(){}return ke.Children={map:Z,forEach:function(C,j,B){Z(C,function(){j.apply(this,arguments)},B)},count:function(C){var j=0;return Z(C,function(){j++}),j},toArray:function(C){return Z(C,function(j){return j})||[]},only:function(C){if(!$(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ke.Component=c,ke.Fragment=g,ke.Profiler=N,ke.PureComponent=E,ke.StrictMode=w,ke.Suspense=v,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ke.__COMPILER_RUNTIME={__proto__:null,c:function(C){return H.H.useMemoCache(C)}},ke.cache=function(C){return function(){return C.apply(null,arguments)}},ke.cloneElement=function(C,j,B){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var ee=A({},C.props),re=C.key,le=void 0;if(j!=null)for(ge in j.ref!==void 0&&(le=void 0),j.key!==void 0&&(re=""+j.key),j)!ne.call(j,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&j.ref===void 0||(ee[ge]=j[ge]);var ge=arguments.length-2;if(ge===1)ee.children=B;else if(1<ge){for(var Me=Array(ge),we=0;we<ge;we++)Me[we]=arguments[we+2];ee.children=Me}return F(C.type,re,void 0,void 0,le,ee)},ke.createContext=function(C){return C={$$typeof:u,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:m,_context:C},C},ke.createElement=function(C,j,B){var ee,re={},le=null;if(j!=null)for(ee in j.key!==void 0&&(le=""+j.key),j)ne.call(j,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(re[ee]=j[ee]);var ge=arguments.length-2;if(ge===1)re.children=B;else if(1<ge){for(var Me=Array(ge),we=0;we<ge;we++)Me[we]=arguments[we+2];re.children=Me}if(C&&C.defaultProps)for(ee in ge=C.defaultProps,ge)re[ee]===void 0&&(re[ee]=ge[ee]);return F(C,le,void 0,void 0,null,re)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(C){return{$$typeof:f,render:C}},ke.isValidElement=$,ke.lazy=function(C){return{$$typeof:S,_payload:{_status:-1,_result:C},_init:Y}},ke.memo=function(C,j){return{$$typeof:b,type:C,compare:j===void 0?null:j}},ke.startTransition=function(C){var j=H.T,B={};H.T=B;try{var ee=C(),re=H.S;re!==null&&re(B,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(J,se)}catch(le){se(le)}finally{H.T=j}},ke.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ke.use=function(C){return H.H.use(C)},ke.useActionState=function(C,j,B){return H.H.useActionState(C,j,B)},ke.useCallback=function(C,j){return H.H.useCallback(C,j)},ke.useContext=function(C){return H.H.useContext(C)},ke.useDebugValue=function(){},ke.useDeferredValue=function(C,j){return H.H.useDeferredValue(C,j)},ke.useEffect=function(C,j,B){var ee=H.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(C,j)},ke.useId=function(){return H.H.useId()},ke.useImperativeHandle=function(C,j,B){return H.H.useImperativeHandle(C,j,B)},ke.useInsertionEffect=function(C,j){return H.H.useInsertionEffect(C,j)},ke.useLayoutEffect=function(C,j){return H.H.useLayoutEffect(C,j)},ke.useMemo=function(C,j){return H.H.useMemo(C,j)},ke.useOptimistic=function(C,j){return H.H.useOptimistic(C,j)},ke.useReducer=function(C,j,B){return H.H.useReducer(C,j,B)},ke.useRef=function(C){return H.H.useRef(C)},ke.useState=function(C){return H.H.useState(C)},ke.useSyncExternalStore=function(C,j,B){return H.H.useSyncExternalStore(C,j,B)},ke.useTransition=function(){return H.H.useTransition()},ke.version="19.1.0",ke}var Ed;function Ds(){return Ed||(Ed=1,Ss.exports=Jp()),Ss.exports}var We=Ds();const Xi=Bd(We);var Ts={exports:{}},$i={},Es={exports:{}},As={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function em(){return Ad||(Ad=1,function(p){function R(Z,Y){var se=Z.length;Z.push(Y);e:for(;0<se;){var J=se-1>>>1,C=Z[J];if(0<N(C,Y))Z[J]=Y,Z[se]=C,se=J;else break e}}function g(Z){return Z.length===0?null:Z[0]}function w(Z){if(Z.length===0)return null;var Y=Z[0],se=Z.pop();if(se!==Y){Z[0]=se;e:for(var J=0,C=Z.length,j=C>>>1;J<j;){var B=2*(J+1)-1,ee=Z[B],re=B+1,le=Z[re];if(0>N(ee,se))re<C&&0>N(le,ee)?(Z[J]=le,Z[re]=se,J=re):(Z[J]=ee,Z[B]=se,J=B);else if(re<C&&0>N(le,se))Z[J]=le,Z[re]=se,J=re;else break e}}return Y}function N(Z,Y){var se=Z.sortIndex-Y.sortIndex;return se!==0?se:Z.id-Y.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;p.unstable_now=function(){return m.now()}}else{var u=Date,f=u.now();p.unstable_now=function(){return u.now()-f}}var v=[],b=[],S=1,k=null,T=3,y=!1,A=!1,d=!1,c=!1,_=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function q(Z){for(var Y=g(b);Y!==null;){if(Y.callback===null)w(b);else if(Y.startTime<=Z)w(b),Y.sortIndex=Y.expirationTime,R(v,Y);else break;Y=g(b)}}function H(Z){if(d=!1,q(Z),!A)if(g(v)!==null)A=!0,ne||(ne=!0,z());else{var Y=g(b);Y!==null&&ie(H,Y.startTime-Z)}}var ne=!1,F=-1,X=5,$=-1;function de(){return c?!0:!(p.unstable_now()-$<X)}function me(){if(c=!1,ne){var Z=p.unstable_now();$=Z;var Y=!0;try{e:{A=!1,d&&(d=!1,E(F),F=-1),y=!0;var se=T;try{t:{for(q(Z),k=g(v);k!==null&&!(k.expirationTime>Z&&de());){var J=k.callback;if(typeof J=="function"){k.callback=null,T=k.priorityLevel;var C=J(k.expirationTime<=Z);if(Z=p.unstable_now(),typeof C=="function"){k.callback=C,q(Z),Y=!0;break t}k===g(v)&&w(v),q(Z)}else w(v);k=g(v)}if(k!==null)Y=!0;else{var j=g(b);j!==null&&ie(H,j.startTime-Z),Y=!1}}break e}finally{k=null,T=se,y=!1}Y=void 0}}finally{Y?z():ne=!1}}}var z;if(typeof M=="function")z=function(){M(me)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,h=ae.port2;ae.port1.onmessage=me,z=function(){h.postMessage(null)}}else z=function(){_(me,0)};function ie(Z,Y){F=_(function(){Z(p.unstable_now())},Y)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(Z){Z.callback=null},p.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<Z?Math.floor(1e3/Z):5},p.unstable_getCurrentPriorityLevel=function(){return T},p.unstable_next=function(Z){switch(T){case 1:case 2:case 3:var Y=3;break;default:Y=T}var se=T;T=Y;try{return Z()}finally{T=se}},p.unstable_requestPaint=function(){c=!0},p.unstable_runWithPriority=function(Z,Y){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var se=T;T=Z;try{return Y()}finally{T=se}},p.unstable_scheduleCallback=function(Z,Y,se){var J=p.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?J+se:J):se=J,Z){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=se+C,Z={id:S++,callback:Y,priorityLevel:Z,startTime:se,expirationTime:C,sortIndex:-1},se>J?(Z.sortIndex=se,R(b,Z),g(v)===null&&Z===g(b)&&(d?(E(F),F=-1):d=!0,ie(H,se-J))):(Z.sortIndex=C,R(v,Z),A||y||(A=!0,ne||(ne=!0,z()))),Z},p.unstable_shouldYield=de,p.unstable_wrapCallback=function(Z){var Y=T;return function(){var se=T;T=Y;try{return Z.apply(this,arguments)}finally{T=se}}}}(As)),As}var Nd;function tm(){return Nd||(Nd=1,Es.exports=em()),Es.exports}var Ns={exports:{}},gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function am(){if(Cd)return gt;Cd=1;var p=Ds();function R(v){var b="https://react.dev/errors/"+v;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)b+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var w={d:{f:g,r:function(){throw Error(R(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},N=Symbol.for("react.portal");function m(v,b,S){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:k==null?null:""+k,children:v,containerInfo:b,implementation:S}}var u=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(v,b){if(v==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,gt.createPortal=function(v,b){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(R(299));return m(v,b,null,S)},gt.flushSync=function(v){var b=u.T,S=w.p;try{if(u.T=null,w.p=2,v)return v()}finally{u.T=b,w.p=S,w.d.f()}},gt.preconnect=function(v,b){typeof v=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,w.d.C(v,b))},gt.prefetchDNS=function(v){typeof v=="string"&&w.d.D(v)},gt.preinit=function(v,b){if(typeof v=="string"&&b&&typeof b.as=="string"){var S=b.as,k=f(S,b.crossOrigin),T=typeof b.integrity=="string"?b.integrity:void 0,y=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;S==="style"?w.d.S(v,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:k,integrity:T,fetchPriority:y}):S==="script"&&w.d.X(v,{crossOrigin:k,integrity:T,fetchPriority:y,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},gt.preinitModule=function(v,b){if(typeof v=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var S=f(b.as,b.crossOrigin);w.d.M(v,{crossOrigin:S,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&w.d.M(v)},gt.preload=function(v,b){if(typeof v=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var S=b.as,k=f(S,b.crossOrigin);w.d.L(v,S,{crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},gt.preloadModule=function(v,b){if(typeof v=="string")if(b){var S=f(b.as,b.crossOrigin);w.d.m(v,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:S,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else w.d.m(v)},gt.requestFormReset=function(v){w.d.r(v)},gt.unstable_batchedUpdates=function(v,b){return v(b)},gt.useFormState=function(v,b,S){return u.H.useFormState(v,b,S)},gt.useFormStatus=function(){return u.H.useHostTransitionStatus()},gt.version="19.1.0",gt}var kd;function nm(){if(kd)return Ns.exports;kd=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(R){console.error(R)}}return p(),Ns.exports=am(),Ns.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function im(){if(Od)return $i;Od=1;var p=tm(),R=Ds(),g=nm();function w(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(m(e)!==e)throw Error(w(188))}function v(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(w(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return f(i),e;if(r===n)return f(i),t;r=r.sibling}throw Error(w(188))}if(a.return!==n.return)a=i,n=r;else{for(var l=!1,x=i.child;x;){if(x===a){l=!0,a=i,n=r;break}if(x===n){l=!0,n=i,a=r;break}x=x.sibling}if(!l){for(x=r.child;x;){if(x===a){l=!0,a=r,n=i;break}if(x===n){l=!0,n=r,a=i;break}x=x.sibling}if(!l)throw Error(w(189))}}if(a.alternate!==n)throw Error(w(190))}if(a.tag!==3)throw Error(w(188));return a.stateNode.current===a?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,k=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),E=Symbol.for("react.consumer"),M=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),de=Symbol.for("react.memo_cache_sentinel"),me=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=me&&e[me]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Symbol.for("react.client.reference");function h(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case c:return"Profiler";case d:return"StrictMode";case H:return"Suspense";case ne:return"SuspenseList";case $:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case M:return(e.displayName||"Context")+".Provider";case E:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:h(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return h(e(t))}catch{}}return null}var ie=Array.isArray,Z=R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},J=[],C=-1;function j(e){return{current:e}}function B(e){0>C||(e.current=J[C],J[C]=null,C--)}function ee(e,t){C++,J[C]=e.current,e.current=t}var re=j(null),le=j(null),ge=j(null),Me=j(null);function we(e,t){switch(ee(ge,t),ee(le,e),ee(re,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Kf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Kf(t),e=Pf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(re),ee(re,e)}function Ce(){B(re),B(le),B(ge)}function Ke(e){e.memoizedState!==null&&ee(Me,e);var t=re.current,a=Pf(t,e.type);t!==a&&(ee(le,e),ee(re,a))}function qe(e){le.current===e&&(B(re),B(le)),Me.current===e&&(B(Me),Hi._currentValue=se)}var mt=Object.prototype.hasOwnProperty,nt=p.unstable_scheduleCallback,s=p.unstable_cancelCallback,ce=p.unstable_shouldYield,te=p.unstable_requestPaint,D=p.unstable_now,O=p.unstable_getCurrentPriorityLevel,G=p.unstable_ImmediatePriority,he=p.unstable_UserBlockingPriority,pe=p.unstable_NormalPriority,W=p.unstable_LowPriority,ve=p.unstable_IdlePriority,be=p.log,ye=p.unstable_setDisableYieldValue,_e=null,Oe=null;function Ne(e){if(typeof be=="function"&&ye(e),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(_e,e)}catch{}}var Xe=Math.clz32?Math.clz32:Za,Ia=Math.log,zt=Math.LN2;function Za(e){return e>>>=0,e===0?32:31-(Ia(e)/zt|0)|0}var Ve=256,ta=4194304;function Zt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var x=n&134217727;return x!==0?(n=x&~r,n!==0?i=Zt(n):(l&=x,l!==0?i=Zt(l):a||(a=x&~e,a!==0&&(i=Zt(a))))):(x=n&~r,x!==0?i=Zt(x):l!==0?i=Zt(l):a||(a=n&~e,a!==0&&(i=Zt(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function ga(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function uo(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qi(){var e=Ve;return Ve<<=1,(Ve&4194048)===0&&(Ve=256),e}function Wi(){var e=ta;return ta<<=1,(ta&62914560)===0&&(ta=4194304),e}function cn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $t(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function un(e,t,a,n,i,r){var l=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var x=e.entanglements,U=e.expirationTimes,Q=e.hiddenUpdates;for(a=l&~a;0<a;){var oe=31-Xe(a),fe=1<<oe;x[oe]=0,U[oe]=-1;var K=Q[oe];if(K!==null)for(Q[oe]=null,oe=0;oe<K.length;oe++){var P=K[oe];P!==null&&(P.lane&=-536870913)}a&=~fe}n!==0&&zs(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function zs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Xe(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Us(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Xe(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function fo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ho(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ms(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:vd(e.type))}function Ld(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var ba=Math.random().toString(36).slice(2),vt="__reactFiber$"+ba,wt="__reactProps$"+ba,fn="__reactContainer$"+ba,po="__reactEvents$"+ba,qd="__reactListeners$"+ba,Gd="__reactHandles$"+ba,Bs="__reactResources$"+ba,Kn="__reactMarker$"+ba;function mo(e){delete e[vt],delete e[wt],delete e[po],delete e[qd],delete e[Gd]}function dn(e){var t=e[vt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[fn]||a[vt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=td(e);e!==null;){if(a=e[vt])return a;e=td(e)}return t}e=a,a=e.parentNode}return null}function hn(e){if(e=e[vt]||e[fn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Pn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(w(33))}function pn(e){var t=e[Bs];return t||(t=e[Bs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[Kn]=!0}var Ys=new Set,Hs={};function $a(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Hs[e]=t,e=0;e<t.length;e++)Ys.add(t[e])}var Id=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ls={},qs={};function Zd(e){return mt.call(qs,e)?!0:mt.call(Ls,e)?!1:Id.test(e)?qs[e]=!0:(Ls[e]=!0,!1)}function Ki(e,t,a){if(Zd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Pi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function aa(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var vo,Gs;function vn(e){if(vo===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);vo=t&&t[1]||"",Gs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vo+e+Gs}var yo=!1;function go(e,t){if(!e||yo)return"";yo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var fe=function(){throw Error()};if(Object.defineProperty(fe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(fe,[])}catch(P){var K=P}Reflect.construct(e,[],fe)}else{try{fe.call()}catch(P){K=P}e.call(fe.prototype)}}else{try{throw Error()}catch(P){K=P}(fe=e())&&typeof fe.catch=="function"&&fe.catch(function(){})}}catch(P){if(P&&K&&typeof P.stack=="string")return[P.stack,K.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),l=r[0],x=r[1];if(l&&x){var U=l.split(`
`),Q=x.split(`
`);for(i=n=0;n<U.length&&!U[n].includes("DetermineComponentFrameRoot");)n++;for(;i<Q.length&&!Q[i].includes("DetermineComponentFrameRoot");)i++;if(n===U.length||i===Q.length)for(n=U.length-1,i=Q.length-1;1<=n&&0<=i&&U[n]!==Q[i];)i--;for(;1<=n&&0<=i;n--,i--)if(U[n]!==Q[i]){if(n!==1||i!==1)do if(n--,i--,0>i||U[n]!==Q[i]){var oe=`
`+U[n].replace(" at new "," at ");return e.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",e.displayName)),oe}while(1<=n&&0<=i);break}}}finally{yo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?vn(a):""}function $d(e){switch(e.tag){case 26:case 27:case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 15:return go(e.type,!1);case 11:return go(e.type.render,!1);case 1:return go(e.type,!0);case 31:return vn("Activity");default:return""}}function Is(e){try{var t="";do t+=$d(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xd(e){var t=Zs(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){e._valueTracker||(e._valueTracker=Xd(e))}function $s(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Zs(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vd=/[\n"\\]/g;function Mt(e){return e.replace(Vd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bo(e,t,a,n,i,r,l,x){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?xo(e,l,Ut(t)):a!=null?xo(e,l,Ut(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Ut(x):e.removeAttribute("name")}function Xs(e,t,a,n,i,r,l,x){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+Ut(a):"",t=t!=null?""+Ut(t):a,x||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=x?e.checked:!!n,e.defaultChecked=!!n,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l)}function xo(e,t,a){t==="number"&&Ji(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Ut(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vs(e,t,a){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ut(a):""}function Qs(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(w(92));if(ie(n)){if(1<n.length)throw Error(w(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Ut(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function gn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ws(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Qd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ks(e,t,a){if(t!=null&&typeof t!="object")throw Error(w(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Ws(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&Ws(e,r,t[r])}function wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function er(e){return Kd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var _o=null;function So(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bn=null,xn=null;function Ps(e){var t=hn(e);if(t&&(e=t.stateNode)){var a=e[wt]||null;e:switch(e=t.stateNode,t.type){case"input":if(bo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[wt]||null;if(!i)throw Error(w(90));bo(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&$s(n)}break e;case"textarea":Vs(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&yn(e,!!a.multiple,t,!1)}}}var To=!1;function Fs(e,t,a){if(To)return e(t,a);To=!0;try{var n=e(t);return n}finally{if(To=!1,(bn!==null||xn!==null)&&(Hr(),bn&&(t=bn,e=xn,xn=bn=null,Ps(t),e)))for(t=0;t<e.length;t++)Ps(e[t])}}function Fn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[wt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(w(231,t,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eo=!1;if(na)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Eo=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Eo=!1}var xa=null,Ao=null,tr=null;function Js(){if(tr)return tr;var e,t=Ao,a=t.length,n,i="value"in xa?xa.value:xa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var l=a-e;for(n=1;n<=l&&t[a-n]===i[r-n];n++);return tr=i.slice(e,1<n?1-n:void 0)}function ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nr(){return!0}function ec(){return!1}function _t(e){function t(a,n,i,r,l){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(a=e[x],this[x]=a?a(r):r[x]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?nr:ec,this.isPropagationStopped=ec,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),t}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ir=_t(Xa),ei=S({},Xa,{view:0,detail:0}),Pd=_t(ei),No,Co,ti,rr=S({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(No=e.screenX-ti.screenX,Co=e.screenY-ti.screenY):Co=No=0,ti=e),No)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),tc=_t(rr),Fd=S({},rr,{dataTransfer:0}),Jd=_t(Fd),eh=S({},ei,{relatedTarget:0}),ko=_t(eh),th=S({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),ah=_t(th),nh=S({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ih=_t(nh),rh=S({},Xa,{data:0}),ac=_t(rh),oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ch(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sh[e])?!!t[e]:!1}function Oo(){return ch}var uh=S({},ei,{key:function(e){if(e.key){var t=oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oo,charCode:function(e){return e.type==="keypress"?ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fh=_t(uh),dh=S({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nc=_t(dh),hh=S({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oo}),ph=_t(hh),mh=S({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),vh=_t(mh),yh=S({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gh=_t(yh),bh=S({},Xa,{newState:0,oldState:0}),xh=_t(bh),wh=[9,13,27,32],Ro=na&&"CompositionEvent"in window,ai=null;na&&"documentMode"in document&&(ai=document.documentMode);var _h=na&&"TextEvent"in window&&!ai,ic=na&&(!Ro||ai&&8<ai&&11>=ai),rc=" ",oc=!1;function lc(e,t){switch(e){case"keyup":return wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function Sh(e,t){switch(e){case"compositionend":return sc(t);case"keypress":return t.which!==32?null:(oc=!0,rc);case"textInput":return e=t.data,e===rc&&oc?null:e;default:return null}}function Th(e,t){if(wn)return e==="compositionend"||!Ro&&lc(e,t)?(e=Js(),tr=Ao=xa=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ic&&t.locale!=="ko"?null:t.data;default:return null}}var Eh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Eh[e.type]:t==="textarea"}function uc(e,t,a,n){bn?xn?xn.push(n):xn=[n]:bn=n,t=$r(t,"onChange"),0<t.length&&(a=new ir("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var ni=null,ii=null;function Ah(e){$f(e,0)}function or(e){var t=Pn(e);if($s(t))return e}function fc(e,t){if(e==="change")return t}var dc=!1;if(na){var jo;if(na){var Do="oninput"in document;if(!Do){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),Do=typeof hc.oninput=="function"}jo=Do}else jo=!1;dc=jo&&(!document.documentMode||9<document.documentMode)}function pc(){ni&&(ni.detachEvent("onpropertychange",mc),ii=ni=null)}function mc(e){if(e.propertyName==="value"&&or(ii)){var t=[];uc(t,ii,e,So(e)),Fs(Ah,t)}}function Nh(e,t,a){e==="focusin"?(pc(),ni=t,ii=a,ni.attachEvent("onpropertychange",mc)):e==="focusout"&&pc()}function Ch(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return or(ii)}function kh(e,t){if(e==="click")return or(t)}function Oh(e,t){if(e==="input"||e==="change")return or(t)}function Rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Rh;function ri(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!mt.call(t,i)||!At(e[i],t[i]))return!1}return!0}function vc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,t){var a=vc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vc(a)}}function gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ji(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ji(e.document)}return t}function zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jh=na&&"documentMode"in document&&11>=document.documentMode,_n=null,Uo=null,oi=null,Mo=!1;function xc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mo||_n==null||_n!==Ji(n)||(n=_n,"selectionStart"in n&&zo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),oi&&ri(oi,n)||(oi=n,n=$r(Uo,"onSelect"),0<n.length&&(t=new ir("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=_n)))}function Va(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Sn={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},Bo={},wc={};na&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Qa(e){if(Bo[e])return Bo[e];if(!Sn[e])return e;var t=Sn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in wc)return Bo[e]=t[a];return e}var _c=Qa("animationend"),Sc=Qa("animationiteration"),Tc=Qa("animationstart"),Dh=Qa("transitionrun"),zh=Qa("transitionstart"),Uh=Qa("transitioncancel"),Ec=Qa("transitionend"),Ac=new Map,Yo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yo.push("scrollEnd");function Xt(e,t){Ac.set(e,t),$a(t,[e])}var Nc=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var a=Nc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Is(t)},Nc.set(e,t),t)}return{value:e,source:t,stack:Is(t)}}var Yt=[],Tn=0,Ho=0;function lr(){for(var e=Tn,t=Ho=Tn=0;t<e;){var a=Yt[t];Yt[t++]=null;var n=Yt[t];Yt[t++]=null;var i=Yt[t];Yt[t++]=null;var r=Yt[t];if(Yt[t++]=null,n!==null&&i!==null){var l=n.pending;l===null?i.next=i:(i.next=l.next,l.next=i),n.pending=i}r!==0&&Cc(a,i,r)}}function sr(e,t,a,n){Yt[Tn++]=e,Yt[Tn++]=t,Yt[Tn++]=a,Yt[Tn++]=n,Ho|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Lo(e,t,a,n){return sr(e,t,a,n),cr(e)}function En(e,t){return sr(e,null,null,t),cr(e)}function Cc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-Xe(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function cr(e){if(50<Ri)throw Ri=0,Xl=null,Error(w(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var An={};function Mh(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,a,n){return new Mh(e,t,a,n)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,t){var a=e.alternate;return a===null?(a=Nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function kc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ur(e,t,a,n,i,r){var l=0;if(n=e,typeof e=="function")qo(e)&&(l=1);else if(typeof e=="string")l=Yp(e,a,re.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case $:return e=Nt(31,a,t,i),e.elementType=$,e.lanes=r,e;case A:return Wa(a.children,i,r,t);case d:l=8,i|=24;break;case c:return e=Nt(12,a,t,i|2),e.elementType=c,e.lanes=r,e;case H:return e=Nt(13,a,t,i),e.elementType=H,e.lanes=r,e;case ne:return e=Nt(19,a,t,i),e.elementType=ne,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case M:l=10;break e;case E:l=9;break e;case q:l=11;break e;case F:l=14;break e;case X:l=16,n=null;break e}l=29,a=Error(w(130,e===null?"null":typeof e,"")),n=null}return t=Nt(l,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function Wa(e,t,a,n){return e=Nt(7,e,n,t),e.lanes=a,e}function Go(e,t,a){return e=Nt(6,e,null,t),e.lanes=a,e}function Io(e,t,a){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nn=[],Cn=0,fr=null,dr=0,Ht=[],Lt=0,Ka=null,ra=1,oa="";function Pa(e,t){Nn[Cn++]=dr,Nn[Cn++]=fr,fr=e,dr=t}function Oc(e,t,a){Ht[Lt++]=ra,Ht[Lt++]=oa,Ht[Lt++]=Ka,Ka=e;var n=ra;e=oa;var i=32-Xe(n)-1;n&=~(1<<i),a+=1;var r=32-Xe(t)+i;if(30<r){var l=i-i%5;r=(n&(1<<l)-1).toString(32),n>>=l,i-=l,ra=1<<32-Xe(t)+i|a<<i|n,oa=r+e}else ra=1<<r|a<<i|n,oa=e}function Zo(e){e.return!==null&&(Pa(e,1),Oc(e,1,0))}function $o(e){for(;e===fr;)fr=Nn[--Cn],Nn[Cn]=null,dr=Nn[--Cn],Nn[Cn]=null;for(;e===Ka;)Ka=Ht[--Lt],Ht[Lt]=null,oa=Ht[--Lt],Ht[Lt]=null,ra=Ht[--Lt],Ht[Lt]=null}var bt=null,Je=null,Ye=!1,Fa=null,Wt=!1,Xo=Error(w(519));function Ja(e){var t=Error(w(418,""));throw ci(Bt(t,e)),Xo}function Rc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[vt]=e,t[wt]=n,a){case"dialog":ze("cancel",t),ze("close",t);break;case"iframe":case"object":case"embed":ze("load",t);break;case"video":case"audio":for(a=0;a<Di.length;a++)ze(Di[a],t);break;case"source":ze("error",t);break;case"img":case"image":case"link":ze("error",t),ze("load",t);break;case"details":ze("toggle",t);break;case"input":ze("invalid",t),Xs(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Fi(t);break;case"select":ze("invalid",t);break;case"textarea":ze("invalid",t),Qs(t,n.value,n.defaultValue,n.children),Fi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Wf(t.textContent,a)?(n.popover!=null&&(ze("beforetoggle",t),ze("toggle",t)),n.onScroll!=null&&ze("scroll",t),n.onScrollEnd!=null&&ze("scrollend",t),n.onClick!=null&&(t.onclick=Xr),t=!0):t=!1,t||Ja(e)}function jc(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:bt=bt.return}}function li(e){if(e!==bt)return!1;if(!Ye)return jc(e),Ye=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ss(e.type,e.memoizedProps)),a=!a),a&&Je&&Ja(e),jc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Je=Qt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Je=null}}else t===27?(t=Je,Ma(e.type)?(e=ds,ds=null,Je=e):Je=t):Je=bt?Qt(e.stateNode.nextSibling):null;return!0}function si(){Je=bt=null,Ye=!1}function Dc(){var e=Fa;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),Fa=null),e}function ci(e){Fa===null?Fa=[e]:Fa.push(e)}var Vo=j(null),en=null,la=null;function wa(e,t,a){ee(Vo,t._currentValue),t._currentValue=a}function sa(e){e._currentValue=Vo.current,B(Vo)}function Qo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Wo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var l=i.child;r=r.firstContext;e:for(;r!==null;){var x=r;r=i;for(var U=0;U<t.length;U++)if(x.context===t[U]){r.lanes|=a,x=r.alternate,x!==null&&(x.lanes|=a),Qo(r.return,a,e),n||(l=null);break e}r=x.next}}else if(i.tag===18){if(l=i.return,l===null)throw Error(w(341));l.lanes|=a,r=l.alternate,r!==null&&(r.lanes|=a),Qo(l,a,e),l=null}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}}function ui(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var l=i.alternate;if(l===null)throw Error(w(387));if(l=l.memoizedProps,l!==null){var x=i.type;At(i.pendingProps.value,l.value)||(e!==null?e.push(x):e=[x])}}else if(i===Me.current){if(l=i.alternate,l===null)throw Error(w(387));l.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Hi):e=[Hi])}i=i.return}e!==null&&Wo(t,e,a,n),t.flags|=262144}function hr(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tn(e){en=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yt(e){return zc(en,e)}function pr(e,t){return en===null&&tn(e),zc(e,t)}function zc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},la===null){if(e===null)throw Error(w(308));la=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else la=la.next=t;return a}var Bh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Yh=p.unstable_scheduleCallback,Hh=p.unstable_NormalPriority,ot={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ko(){return{controller:new Bh,data:new Map,refCount:0}}function fi(e){e.refCount--,e.refCount===0&&Yh(Hh,function(){e.controller.abort()})}var di=null,Po=0,kn=0,On=null;function Lh(e,t){if(di===null){var a=di=[];Po=0,kn=Jl(),On={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Po++,t.then(Uc,Uc),t}function Uc(){if(--Po===0&&di!==null){On!==null&&(On.status="fulfilled");var e=di;di=null,kn=0,On=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qh(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Mc=Z.S;Z.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Lh(e,t),Mc!==null&&Mc(e,t)};var an=j(null);function Fo(){var e=an.current;return e!==null?e:Qe.pooledCache}function mr(e,t){t===null?ee(an,an.current):ee(an,t.pool)}function Bc(){var e=Fo();return e===null?null:{parent:ot._currentValue,pool:e}}var hi=Error(w(460)),Yc=Error(w(474)),vr=Error(w(542)),Jo={then:function(){}};function Hc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yr(){}function Lc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(yr,yr),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gc(e),e;default:if(typeof t.status=="string")t.then(yr,yr);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(w(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gc(e),e}throw pi=t,hi}}var pi=null;function qc(){if(pi===null)throw Error(w(459));var e=pi;return pi=null,e}function Gc(e){if(e===hi||e===vr)throw Error(w(483))}var _a=!1;function el(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(He&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=cr(e),Cc(e,null,a),t}return sr(e,n,t,a),cr(e)}function mi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Us(e,a)}}function al(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var l={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=l:r=r.next=l,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var nl=!1;function vi(){if(nl){var e=On;if(e!==null)throw e}}function yi(e,t,a,n){nl=!1;var i=e.updateQueue;_a=!1;var r=i.firstBaseUpdate,l=i.lastBaseUpdate,x=i.shared.pending;if(x!==null){i.shared.pending=null;var U=x,Q=U.next;U.next=null,l===null?r=Q:l.next=Q,l=U;var oe=e.alternate;oe!==null&&(oe=oe.updateQueue,x=oe.lastBaseUpdate,x!==l&&(x===null?oe.firstBaseUpdate=Q:x.next=Q,oe.lastBaseUpdate=U))}if(r!==null){var fe=i.baseState;l=0,oe=Q=U=null,x=r;do{var K=x.lane&-536870913,P=K!==x.lane;if(P?(Ue&K)===K:(n&K)===K){K!==0&&K===kn&&(nl=!0),oe!==null&&(oe=oe.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var Ae=e,Te=x;K=t;var Ze=a;switch(Te.tag){case 1:if(Ae=Te.payload,typeof Ae=="function"){fe=Ae.call(Ze,fe,K);break e}fe=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Te.payload,K=typeof Ae=="function"?Ae.call(Ze,fe,K):Ae,K==null)break e;fe=S({},fe,K);break e;case 2:_a=!0}}K=x.callback,K!==null&&(e.flags|=64,P&&(e.flags|=8192),P=i.callbacks,P===null?i.callbacks=[K]:P.push(K))}else P={lane:K,tag:x.tag,payload:x.payload,callback:x.callback,next:null},oe===null?(Q=oe=P,U=fe):oe=oe.next=P,l|=K;if(x=x.next,x===null){if(x=i.shared.pending,x===null)break;P=x,x=P.next,P.next=null,i.lastBaseUpdate=P,i.shared.pending=null}}while(!0);oe===null&&(U=fe),i.baseState=U,i.firstBaseUpdate=Q,i.lastBaseUpdate=oe,r===null&&(i.shared.lanes=0),ja|=l,e.lanes=l,e.memoizedState=fe}}function Ic(e,t){if(typeof e!="function")throw Error(w(191,e));e.call(t)}function Zc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ic(a[e],t)}var Rn=j(null),gr=j(0);function $c(e,t){e=ma,ee(gr,e),ee(Rn,t),ma=e|t.baseLanes}function il(){ee(gr,ma),ee(Rn,Rn.current)}function rl(){ma=gr.current,B(Rn),B(gr)}var Ea=0,Re=null,Ge=null,it=null,br=!1,jn=!1,nn=!1,xr=0,gi=0,Dn=null,Gh=0;function tt(){throw Error(w(321))}function ol(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!At(e[a],t[a]))return!1;return!0}function ll(e,t,a,n,i,r){return Ea=r,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Z.H=e===null||e.memoizedState===null?Cu:ku,nn=!1,r=a(n,i),nn=!1,jn&&(r=Vc(t,a,n,i)),Xc(e),r}function Xc(e){Z.H=Ar;var t=Ge!==null&&Ge.next!==null;if(Ea=0,it=Ge=Re=null,br=!1,gi=0,Dn=null,t)throw Error(w(300));e===null||ct||(e=e.dependencies,e!==null&&hr(e)&&(ct=!0))}function Vc(e,t,a,n){Re=e;var i=0;do{if(jn&&(Dn=null),gi=0,jn=!1,25<=i)throw Error(w(301));if(i+=1,it=Ge=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Z.H=Wh,r=t(a,n)}while(jn);return r}function Ih(){var e=Z.H,t=e.useState()[0];return t=typeof t.then=="function"?bi(t):t,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(Re.flags|=1024),t}function sl(){var e=xr!==0;return xr=0,e}function cl(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ul(e){if(br){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}br=!1}Ea=0,it=Ge=Re=null,jn=!1,gi=xr=0,Dn=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Re.memoizedState=it=e:it=it.next=e,it}function rt(){if(Ge===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=it===null?Re.memoizedState:it.next;if(t!==null)it=t,Ge=e;else{if(e===null)throw Re.alternate===null?Error(w(467)):Error(w(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},it===null?Re.memoizedState=it=e:it=it.next=e}return it}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bi(e){var t=gi;return gi+=1,Dn===null&&(Dn=[]),e=Lc(Dn,e,t),t=Re,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,Z.H=t===null||t.memoizedState===null?Cu:ku),e}function wr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bi(e);if(e.$$typeof===M)return yt(e)}throw Error(w(438,String(e)))}function dl(e){var t=null,a=Re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=Re.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=fl(),Re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=de;return t.index++,a}function ca(e,t){return typeof t=="function"?t(e):t}function _r(e){var t=rt();return hl(t,Ge,e)}function hl(e,t,a){var n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var l=i.next;i.next=r.next,r.next=l}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var x=l=null,U=null,Q=t,oe=!1;do{var fe=Q.lane&-536870913;if(fe!==Q.lane?(Ue&fe)===fe:(Ea&fe)===fe){var K=Q.revertLane;if(K===0)U!==null&&(U=U.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),fe===kn&&(oe=!0);else if((Ea&K)===K){Q=Q.next,K===kn&&(oe=!0);continue}else fe={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},U===null?(x=U=fe,l=r):U=U.next=fe,Re.lanes|=K,ja|=K;fe=Q.action,nn&&a(r,fe),r=Q.hasEagerState?Q.eagerState:a(r,fe)}else K={lane:fe,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},U===null?(x=U=K,l=r):U=U.next=K,Re.lanes|=fe,ja|=fe;Q=Q.next}while(Q!==null&&Q!==t);if(U===null?l=r:U.next=x,!At(r,e.memoizedState)&&(ct=!0,oe&&(a=On,a!==null)))throw a;e.memoizedState=r,e.baseState=l,e.baseQueue=U,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function pl(e){var t=rt(),a=t.queue;if(a===null)throw Error(w(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var l=i=i.next;do r=e(r,l.action),l=l.next;while(l!==i);At(r,t.memoizedState)||(ct=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function Qc(e,t,a){var n=Re,i=rt(),r=Ye;if(r){if(a===void 0)throw Error(w(407));a=a()}else a=t();var l=!At((Ge||i).memoizedState,a);l&&(i.memoizedState=a,ct=!0),i=i.queue;var x=Pc.bind(null,n,i,e);if(xi(2048,8,x,[e]),i.getSnapshot!==t||l||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,zn(9,Sr(),Kc.bind(null,n,i,a,t),null),Qe===null)throw Error(w(349));r||(Ea&124)!==0||Wc(n,t,a)}return a}function Wc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Re.updateQueue,t===null?(t=fl(),Re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Kc(e,t,a,n){t.value=a,t.getSnapshot=n,Fc(t)&&Jc(e)}function Pc(e,t,a){return a(function(){Fc(t)&&Jc(e)})}function Fc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!At(e,a)}catch{return!0}}function Jc(e){var t=En(e,2);t!==null&&jt(t,e,2)}function ml(e){var t=St();if(typeof e=="function"){var a=e;if(e=a(),nn){Ne(!0);try{a()}finally{Ne(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function eu(e,t,a,n){return e.baseState=a,hl(e,Ge,typeof n=="function"?n:ca)}function Zh(e,t,a,n,i){if(Er(e))throw Error(w(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};Z.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,tu(t,r)):(r.next=a.next,t.pending=a.next=r)}}function tu(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=Z.T,l={};Z.T=l;try{var x=a(i,n),U=Z.S;U!==null&&U(l,x),au(e,t,x)}catch(Q){vl(e,t,Q)}finally{Z.T=r}}else try{r=a(i,n),au(e,t,r)}catch(Q){vl(e,t,Q)}}function au(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){nu(e,t,n)},function(n){return vl(e,t,n)}):nu(e,t,a)}function nu(e,t,a){t.status="fulfilled",t.value=a,iu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,tu(e,a)))}function vl(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,iu(t),t=t.next;while(t!==n)}e.action=null}function iu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ru(e,t){return t}function ou(e,t){if(Ye){var a=Qe.formState;if(a!==null){e:{var n=Re;if(Ye){if(Je){t:{for(var i=Je,r=Wt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Qt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Je=Qt(i.nextSibling),n=i.data==="F!";break e}}Ja(n)}n=!1}n&&(t=a[0])}}return a=St(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ru,lastRenderedState:t},a.queue=n,a=Eu.bind(null,Re,n),n.dispatch=a,n=ml(!1),r=wl.bind(null,Re,!1,n.queue),n=St(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Zh.bind(null,Re,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function lu(e){var t=rt();return su(t,Ge,e)}function su(e,t,a){if(t=hl(e,t,ru)[0],e=_r(ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=bi(t)}catch(l){throw l===hi?vr:l}else n=t;t=rt();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(Re.flags|=2048,zn(9,Sr(),$h.bind(null,i,a),null)),[n,r,e]}function $h(e,t){e.action=t}function cu(e){var t=rt(),a=Ge;if(a!==null)return su(t,a,e);rt(),t=t.memoizedState,a=rt();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function zn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=Re.updateQueue,t===null&&(t=fl(),Re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Sr(){return{destroy:void 0,resource:void 0}}function uu(){return rt().memoizedState}function Tr(e,t,a,n){var i=St();n=n===void 0?null:n,Re.flags|=e,i.memoizedState=zn(1|t,Sr(),a,n)}function xi(e,t,a,n){var i=rt();n=n===void 0?null:n;var r=i.memoizedState.inst;Ge!==null&&n!==null&&ol(n,Ge.memoizedState.deps)?i.memoizedState=zn(t,r,a,n):(Re.flags|=e,i.memoizedState=zn(1|t,r,a,n))}function fu(e,t){Tr(8390656,8,e,t)}function du(e,t){xi(2048,8,e,t)}function hu(e,t){return xi(4,2,e,t)}function pu(e,t){return xi(4,4,e,t)}function mu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vu(e,t,a){a=a!=null?a.concat([e]):null,xi(4,4,mu.bind(null,t,e),a)}function yl(){}function yu(e,t){var a=rt();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&ol(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function gu(e,t){var a=rt();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&ol(t,n[1]))return n[0];if(n=e(),nn){Ne(!0);try{e()}finally{Ne(!1)}}return a.memoizedState=[n,t],n}function gl(e,t,a){return a===void 0||(Ea&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=_f(),Re.lanes|=e,ja|=e,a)}function bu(e,t,a,n){return At(a,t)?a:Rn.current!==null?(e=gl(e,a,n),At(e,t)||(ct=!0),e):(Ea&42)===0?(ct=!0,e.memoizedState=a):(e=_f(),Re.lanes|=e,ja|=e,t)}function xu(e,t,a,n,i){var r=Y.p;Y.p=r!==0&&8>r?r:8;var l=Z.T,x={};Z.T=x,wl(e,!1,t,a);try{var U=i(),Q=Z.S;if(Q!==null&&Q(x,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var oe=qh(U,n);wi(e,t,oe,Rt(e))}else wi(e,t,n,Rt(e))}catch(fe){wi(e,t,{then:function(){},status:"rejected",reason:fe},Rt())}finally{Y.p=r,Z.T=l}}function Xh(){}function bl(e,t,a,n){if(e.tag!==5)throw Error(w(476));var i=wu(e).queue;xu(e,i,t,se,a===null?Xh:function(){return _u(e),a(n)})}function wu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:se},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _u(e){var t=wu(e).next.queue;wi(e,t,{},Rt())}function xl(){return yt(Hi)}function Su(){return rt().memoizedState}function Tu(){return rt().memoizedState}function Vh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Rt();e=Sa(a);var n=Ta(t,e,a);n!==null&&(jt(n,t,a),mi(n,t,a)),t={cache:Ko()},e.payload=t;return}t=t.return}}function Qh(e,t,a){var n=Rt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Er(e)?Au(t,a):(a=Lo(e,t,a,n),a!==null&&(jt(a,e,n),Nu(a,t,n)))}function Eu(e,t,a){var n=Rt();wi(e,t,a,n)}function wi(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Er(e))Au(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,x=r(l,a);if(i.hasEagerState=!0,i.eagerState=x,At(x,l))return sr(e,t,i,0),Qe===null&&lr(),!1}catch{}finally{}if(a=Lo(e,t,i,n),a!==null)return jt(a,e,n),Nu(a,t,n),!0}return!1}function wl(e,t,a,n){if(n={lane:2,revertLane:Jl(),action:n,hasEagerState:!1,eagerState:null,next:null},Er(e)){if(t)throw Error(w(479))}else t=Lo(e,a,n,2),t!==null&&jt(t,e,2)}function Er(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Au(e,t){jn=br=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Nu(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Us(e,a)}}var Ar={readContext:yt,use:wr,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt},Cu={readContext:yt,use:wr,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:fu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Tr(4194308,4,mu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){Tr(4,2,e,t)},useMemo:function(e,t){var a=St();t=t===void 0?null:t;var n=e();if(nn){Ne(!0);try{e()}finally{Ne(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=St();if(a!==void 0){var i=a(t);if(nn){Ne(!0);try{a(t)}finally{Ne(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Qh.bind(null,Re,e),[n.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=ml(e);var t=e.queue,a=Eu.bind(null,Re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:yl,useDeferredValue:function(e,t){var a=St();return gl(a,e,t)},useTransition:function(){var e=ml(!1);return e=xu.bind(null,Re,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=Re,i=St();if(Ye){if(a===void 0)throw Error(w(407));a=a()}else{if(a=t(),Qe===null)throw Error(w(349));(Ue&124)!==0||Wc(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,fu(Pc.bind(null,n,r,e),[e]),n.flags|=2048,zn(9,Sr(),Kc.bind(null,n,r,a,t),null),a},useId:function(){var e=St(),t=Qe.identifierPrefix;if(Ye){var a=oa,n=ra;a=(n&~(1<<32-Xe(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=xr++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Gh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:xl,useFormState:ou,useActionState:ou,useOptimistic:function(e){var t=St();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=wl.bind(null,Re,!0,a),a.dispatch=t,[e,t]},useMemoCache:dl,useCacheRefresh:function(){return St().memoizedState=Vh.bind(null,Re)}},ku={readContext:yt,use:wr,useCallback:yu,useContext:yt,useEffect:du,useImperativeHandle:vu,useInsertionEffect:hu,useLayoutEffect:pu,useMemo:gu,useReducer:_r,useRef:uu,useState:function(){return _r(ca)},useDebugValue:yl,useDeferredValue:function(e,t){var a=rt();return bu(a,Ge.memoizedState,e,t)},useTransition:function(){var e=_r(ca)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:Qc,useId:Su,useHostTransitionStatus:xl,useFormState:lu,useActionState:lu,useOptimistic:function(e,t){var a=rt();return eu(a,Ge,e,t)},useMemoCache:dl,useCacheRefresh:Tu},Wh={readContext:yt,use:wr,useCallback:yu,useContext:yt,useEffect:du,useImperativeHandle:vu,useInsertionEffect:hu,useLayoutEffect:pu,useMemo:gu,useReducer:pl,useRef:uu,useState:function(){return pl(ca)},useDebugValue:yl,useDeferredValue:function(e,t){var a=rt();return Ge===null?gl(a,e,t):bu(a,Ge.memoizedState,e,t)},useTransition:function(){var e=pl(ca)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:Qc,useId:Su,useHostTransitionStatus:xl,useFormState:cu,useActionState:cu,useOptimistic:function(e,t){var a=rt();return Ge!==null?eu(a,Ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:dl,useCacheRefresh:Tu},Un=null,_i=0;function Nr(e){var t=_i;return _i+=1,Un===null&&(Un=[]),Lc(Un,e,t)}function Si(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cr(e,t){throw t.$$typeof===k?Error(w(525)):(e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ou(e){var t=e._init;return t(e._payload)}function Ru(e){function t(I,L){if(e){var V=I.deletions;V===null?(I.deletions=[L],I.flags|=16):V.push(L)}}function a(I,L){if(!e)return null;for(;L!==null;)t(I,L),L=L.sibling;return null}function n(I){for(var L=new Map;I!==null;)I.key!==null?L.set(I.key,I):L.set(I.index,I),I=I.sibling;return L}function i(I,L){return I=ia(I,L),I.index=0,I.sibling=null,I}function r(I,L,V){return I.index=V,e?(V=I.alternate,V!==null?(V=V.index,V<L?(I.flags|=67108866,L):V):(I.flags|=67108866,L)):(I.flags|=1048576,L)}function l(I){return e&&I.alternate===null&&(I.flags|=67108866),I}function x(I,L,V,ue){return L===null||L.tag!==6?(L=Go(V,I.mode,ue),L.return=I,L):(L=i(L,V),L.return=I,L)}function U(I,L,V,ue){var xe=V.type;return xe===A?oe(I,L,V.props.children,ue,V.key):L!==null&&(L.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===X&&Ou(xe)===L.type)?(L=i(L,V.props),Si(L,V),L.return=I,L):(L=ur(V.type,V.key,V.props,null,I.mode,ue),Si(L,V),L.return=I,L)}function Q(I,L,V,ue){return L===null||L.tag!==4||L.stateNode.containerInfo!==V.containerInfo||L.stateNode.implementation!==V.implementation?(L=Io(V,I.mode,ue),L.return=I,L):(L=i(L,V.children||[]),L.return=I,L)}function oe(I,L,V,ue,xe){return L===null||L.tag!==7?(L=Wa(V,I.mode,ue,xe),L.return=I,L):(L=i(L,V),L.return=I,L)}function fe(I,L,V){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Go(""+L,I.mode,V),L.return=I,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case T:return V=ur(L.type,L.key,L.props,null,I.mode,V),Si(V,L),V.return=I,V;case y:return L=Io(L,I.mode,V),L.return=I,L;case X:var ue=L._init;return L=ue(L._payload),fe(I,L,V)}if(ie(L)||z(L))return L=Wa(L,I.mode,V,null),L.return=I,L;if(typeof L.then=="function")return fe(I,Nr(L),V);if(L.$$typeof===M)return fe(I,pr(I,L),V);Cr(I,L)}return null}function K(I,L,V,ue){var xe=L!==null?L.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return xe!==null?null:x(I,L,""+V,ue);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case T:return V.key===xe?U(I,L,V,ue):null;case y:return V.key===xe?Q(I,L,V,ue):null;case X:return xe=V._init,V=xe(V._payload),K(I,L,V,ue)}if(ie(V)||z(V))return xe!==null?null:oe(I,L,V,ue,null);if(typeof V.then=="function")return K(I,L,Nr(V),ue);if(V.$$typeof===M)return K(I,L,pr(I,V),ue);Cr(I,V)}return null}function P(I,L,V,ue,xe){if(typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint")return I=I.get(V)||null,x(L,I,""+ue,xe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case T:return I=I.get(ue.key===null?V:ue.key)||null,U(L,I,ue,xe);case y:return I=I.get(ue.key===null?V:ue.key)||null,Q(L,I,ue,xe);case X:var je=ue._init;return ue=je(ue._payload),P(I,L,V,ue,xe)}if(ie(ue)||z(ue))return I=I.get(V)||null,oe(L,I,ue,xe,null);if(typeof ue.then=="function")return P(I,L,V,Nr(ue),xe);if(ue.$$typeof===M)return P(I,L,V,pr(L,ue),xe);Cr(L,ue)}return null}function Ae(I,L,V,ue){for(var xe=null,je=null,Se=L,Ee=L=0,ft=null;Se!==null&&Ee<V.length;Ee++){Se.index>Ee?(ft=Se,Se=null):ft=Se.sibling;var Be=K(I,Se,V[Ee],ue);if(Be===null){Se===null&&(Se=ft);break}e&&Se&&Be.alternate===null&&t(I,Se),L=r(Be,L,Ee),je===null?xe=Be:je.sibling=Be,je=Be,Se=ft}if(Ee===V.length)return a(I,Se),Ye&&Pa(I,Ee),xe;if(Se===null){for(;Ee<V.length;Ee++)Se=fe(I,V[Ee],ue),Se!==null&&(L=r(Se,L,Ee),je===null?xe=Se:je.sibling=Se,je=Se);return Ye&&Pa(I,Ee),xe}for(Se=n(Se);Ee<V.length;Ee++)ft=P(Se,I,Ee,V[Ee],ue),ft!==null&&(e&&ft.alternate!==null&&Se.delete(ft.key===null?Ee:ft.key),L=r(ft,L,Ee),je===null?xe=ft:je.sibling=ft,je=ft);return e&&Se.forEach(function(qa){return t(I,qa)}),Ye&&Pa(I,Ee),xe}function Te(I,L,V,ue){if(V==null)throw Error(w(151));for(var xe=null,je=null,Se=L,Ee=L=0,ft=null,Be=V.next();Se!==null&&!Be.done;Ee++,Be=V.next()){Se.index>Ee?(ft=Se,Se=null):ft=Se.sibling;var qa=K(I,Se,Be.value,ue);if(qa===null){Se===null&&(Se=ft);break}e&&Se&&qa.alternate===null&&t(I,Se),L=r(qa,L,Ee),je===null?xe=qa:je.sibling=qa,je=qa,Se=ft}if(Be.done)return a(I,Se),Ye&&Pa(I,Ee),xe;if(Se===null){for(;!Be.done;Ee++,Be=V.next())Be=fe(I,Be.value,ue),Be!==null&&(L=r(Be,L,Ee),je===null?xe=Be:je.sibling=Be,je=Be);return Ye&&Pa(I,Ee),xe}for(Se=n(Se);!Be.done;Ee++,Be=V.next())Be=P(Se,I,Ee,Be.value,ue),Be!==null&&(e&&Be.alternate!==null&&Se.delete(Be.key===null?Ee:Be.key),L=r(Be,L,Ee),je===null?xe=Be:je.sibling=Be,je=Be);return e&&Se.forEach(function(Kp){return t(I,Kp)}),Ye&&Pa(I,Ee),xe}function Ze(I,L,V,ue){if(typeof V=="object"&&V!==null&&V.type===A&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case T:e:{for(var xe=V.key;L!==null;){if(L.key===xe){if(xe=V.type,xe===A){if(L.tag===7){a(I,L.sibling),ue=i(L,V.props.children),ue.return=I,I=ue;break e}}else if(L.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===X&&Ou(xe)===L.type){a(I,L.sibling),ue=i(L,V.props),Si(ue,V),ue.return=I,I=ue;break e}a(I,L);break}else t(I,L);L=L.sibling}V.type===A?(ue=Wa(V.props.children,I.mode,ue,V.key),ue.return=I,I=ue):(ue=ur(V.type,V.key,V.props,null,I.mode,ue),Si(ue,V),ue.return=I,I=ue)}return l(I);case y:e:{for(xe=V.key;L!==null;){if(L.key===xe)if(L.tag===4&&L.stateNode.containerInfo===V.containerInfo&&L.stateNode.implementation===V.implementation){a(I,L.sibling),ue=i(L,V.children||[]),ue.return=I,I=ue;break e}else{a(I,L);break}else t(I,L);L=L.sibling}ue=Io(V,I.mode,ue),ue.return=I,I=ue}return l(I);case X:return xe=V._init,V=xe(V._payload),Ze(I,L,V,ue)}if(ie(V))return Ae(I,L,V,ue);if(z(V)){if(xe=z(V),typeof xe!="function")throw Error(w(150));return V=xe.call(V),Te(I,L,V,ue)}if(typeof V.then=="function")return Ze(I,L,Nr(V),ue);if(V.$$typeof===M)return Ze(I,L,pr(I,V),ue);Cr(I,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,L!==null&&L.tag===6?(a(I,L.sibling),ue=i(L,V),ue.return=I,I=ue):(a(I,L),ue=Go(V,I.mode,ue),ue.return=I,I=ue),l(I)):a(I,L)}return function(I,L,V,ue){try{_i=0;var xe=Ze(I,L,V,ue);return Un=null,xe}catch(Se){if(Se===hi||Se===vr)throw Se;var je=Nt(29,Se,null,I.mode);return je.lanes=ue,je.return=I,je}finally{}}}var Mn=Ru(!0),ju=Ru(!1),qt=j(null),Kt=null;function Aa(e){var t=e.alternate;ee(lt,lt.current&1),ee(qt,e),Kt===null&&(t===null||Rn.current!==null||t.memoizedState!==null)&&(Kt=e)}function Du(e){if(e.tag===22){if(ee(lt,lt.current),ee(qt,e),Kt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Kt=e)}}else Na()}function Na(){ee(lt,lt.current),ee(qt,qt.current)}function ua(e){B(qt),Kt===e&&(Kt=null),B(lt)}var lt=j(0);function kr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||fs(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function _l(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:S({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Sl={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Rt(),i=Sa(n);i.payload=t,a!=null&&(i.callback=a),t=Ta(e,i,n),t!==null&&(jt(t,e,n),mi(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Rt(),i=Sa(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Ta(e,i,n),t!==null&&(jt(t,e,n),mi(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Rt(),n=Sa(a);n.tag=2,t!=null&&(n.callback=t),t=Ta(e,n,a),t!==null&&(jt(t,e,a),mi(t,e,a))}};function zu(e,t,a,n,i,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,l):t.prototype&&t.prototype.isPureReactComponent?!ri(a,n)||!ri(i,r):!0}function Uu(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function rn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=S({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var Or=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Mu(e){Or(e)}function Bu(e){console.error(e)}function Yu(e){Or(e)}function Rr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Hu(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Tl(e,t,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Rr(e,t)},a}function Lu(e){return e=Sa(e),e.tag=3,e}function qu(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Hu(t,a,n)}}var l=a.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){Hu(t,a,n),typeof i!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var x=n.stack;this.componentDidCatch(n.value,{componentStack:x!==null?x:""})})}function Kh(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ui(t,a,i,!0),a=qt.current,a!==null){switch(a.tag){case 13:return Kt===null?Ql():a.alternate===null&&et===0&&(et=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Jo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Kl(e,n,i)),!1;case 22:return a.flags|=65536,n===Jo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Kl(e,n,i)),!1}throw Error(w(435,a.tag))}return Kl(e,n,i),Ql(),!1}if(Ye)return t=qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Xo&&(e=Error(w(422),{cause:n}),ci(Bt(e,a)))):(n!==Xo&&(t=Error(w(423),{cause:n}),ci(Bt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Bt(n,a),i=Tl(e.stateNode,n,i),al(e,i),et!==4&&(et=2)),!1;var r=Error(w(520),{cause:n});if(r=Bt(r,a),Oi===null?Oi=[r]:Oi.push(r),et!==4&&(et=2),t===null)return!0;n=Bt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Tl(a.stateNode,n,e),al(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Da===null||!Da.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Lu(i),qu(i,e,a,n),al(a,i),!1}a=a.return}while(a!==null);return!1}var Gu=Error(w(461)),ct=!1;function dt(e,t,a,n){t.child=e===null?ju(t,null,a,n):Mn(t,e.child,a,n)}function Iu(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var l={};for(var x in n)x!=="ref"&&(l[x]=n[x])}else l=n;return tn(t),n=ll(e,t,a,l,r,i),x=sl(),e!==null&&!ct?(cl(e,t,i),fa(e,t,i)):(Ye&&x&&Zo(t),t.flags|=1,dt(e,t,n,i),t.child)}function Zu(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!qo(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,$u(e,t,r,n,i)):(e=ur(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!jl(e,i)){var l=r.memoizedProps;if(a=a.compare,a=a!==null?a:ri,a(l,n)&&e.ref===t.ref)return fa(e,t,i)}return t.flags|=1,e=ia(r,n),e.ref=t.ref,e.return=t,t.child=e}function $u(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(ri(r,n)&&e.ref===t.ref)if(ct=!1,t.pendingProps=n=r,jl(e,i))(e.flags&131072)!==0&&(ct=!0);else return t.lanes=e.lanes,fa(e,t,i)}return El(e,t,a,n,i)}function Xu(e,t,a){var n=t.pendingProps,i=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return Vu(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&mr(t,r!==null?r.cachePool:null),r!==null?$c(t,r):il(),Du(t);else return t.lanes=t.childLanes=536870912,Vu(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(mr(t,r.cachePool),$c(t,r),Na(),t.memoizedState=null):(e!==null&&mr(t,null),il(),Na());return dt(e,t,i,a),t.child}function Vu(e,t,a,n){var i=Fo();return i=i===null?null:{parent:ot._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&mr(t,null),il(),Du(t),e!==null&&ui(e,t,n,!0),null}function jr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(w(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function El(e,t,a,n,i){return tn(t),a=ll(e,t,a,n,void 0,i),n=sl(),e!==null&&!ct?(cl(e,t,i),fa(e,t,i)):(Ye&&n&&Zo(t),t.flags|=1,dt(e,t,a,i),t.child)}function Qu(e,t,a,n,i,r){return tn(t),t.updateQueue=null,a=Vc(t,n,a,i),Xc(e),n=sl(),e!==null&&!ct?(cl(e,t,r),fa(e,t,r)):(Ye&&n&&Zo(t),t.flags|=1,dt(e,t,a,r),t.child)}function Wu(e,t,a,n,i){if(tn(t),t.stateNode===null){var r=An,l=a.contextType;typeof l=="object"&&l!==null&&(r=yt(l)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Sl,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},el(t),l=a.contextType,r.context=typeof l=="object"&&l!==null?yt(l):An,r.state=t.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(_l(t,a,l,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&Sl.enqueueReplaceState(r,r.state,null),yi(t,n,r,i),vi(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var x=t.memoizedProps,U=rn(a,x);r.props=U;var Q=r.context,oe=a.contextType;l=An,typeof oe=="object"&&oe!==null&&(l=yt(oe));var fe=a.getDerivedStateFromProps;oe=typeof fe=="function"||typeof r.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,oe||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(x||Q!==l)&&Uu(t,r,n,l),_a=!1;var K=t.memoizedState;r.state=K,yi(t,n,r,i),vi(),Q=t.memoizedState,x||K!==Q||_a?(typeof fe=="function"&&(_l(t,a,fe,n),Q=t.memoizedState),(U=_a||zu(t,a,U,n,K,Q,l))?(oe||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=Q),r.props=n,r.state=Q,r.context=l,n=U):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,tl(e,t),l=t.memoizedProps,oe=rn(a,l),r.props=oe,fe=t.pendingProps,K=r.context,Q=a.contextType,U=An,typeof Q=="object"&&Q!==null&&(U=yt(Q)),x=a.getDerivedStateFromProps,(Q=typeof x=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==fe||K!==U)&&Uu(t,r,n,U),_a=!1,K=t.memoizedState,r.state=K,yi(t,n,r,i),vi();var P=t.memoizedState;l!==fe||K!==P||_a||e!==null&&e.dependencies!==null&&hr(e.dependencies)?(typeof x=="function"&&(_l(t,a,x,n),P=t.memoizedState),(oe=_a||zu(t,a,oe,n,K,P,U)||e!==null&&e.dependencies!==null&&hr(e.dependencies))?(Q||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,P,U),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,P,U)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=P),r.props=n,r.state=P,r.context=U,n=oe):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,jr(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=Mn(t,e.child,null,i),t.child=Mn(t,null,a,i)):dt(e,t,a,i),t.memoizedState=r.state,e=t.child):e=fa(e,t,i),e}function Ku(e,t,a,n){return si(),t.flags|=256,dt(e,t,a,n),t.child}var Al={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nl(e){return{baseLanes:e,cachePool:Bc()}}function Cl(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Gt),e}function Pu(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(lt.current&2)!==0),l&&(i=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ye){if(i?Aa(t):Na(),Ye){var x=Je,U;if(U=x){e:{for(U=x,x=Wt;U.nodeType!==8;){if(!x){x=null;break e}if(U=Qt(U.nextSibling),U===null){x=null;break e}}x=U}x!==null?(t.memoizedState={dehydrated:x,treeContext:Ka!==null?{id:ra,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},U=Nt(18,null,null,0),U.stateNode=x,U.return=t,t.child=U,bt=t,Je=null,U=!0):U=!1}U||Ja(t)}if(x=t.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return fs(x)?t.lanes=32:t.lanes=536870912,null;ua(t)}return x=n.children,n=n.fallback,i?(Na(),i=t.mode,x=Dr({mode:"hidden",children:x},i),n=Wa(n,i,a,null),x.return=t,n.return=t,x.sibling=n,t.child=x,i=t.child,i.memoizedState=Nl(a),i.childLanes=Cl(e,l,a),t.memoizedState=Al,n):(Aa(t),kl(t,x))}if(U=e.memoizedState,U!==null&&(x=U.dehydrated,x!==null)){if(r)t.flags&256?(Aa(t),t.flags&=-257,t=Ol(e,t,a)):t.memoizedState!==null?(Na(),t.child=e.child,t.flags|=128,t=null):(Na(),i=n.fallback,x=t.mode,n=Dr({mode:"visible",children:n.children},x),i=Wa(i,x,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Mn(t,e.child,null,a),n=t.child,n.memoizedState=Nl(a),n.childLanes=Cl(e,l,a),t.memoizedState=Al,t=i);else if(Aa(t),fs(x)){if(l=x.nextSibling&&x.nextSibling.dataset,l)var Q=l.dgst;l=Q,n=Error(w(419)),n.stack="",n.digest=l,ci({value:n,source:null,stack:null}),t=Ol(e,t,a)}else if(ct||ui(e,t,a,!1),l=(a&e.childLanes)!==0,ct||l){if(l=Qe,l!==null&&(n=a&-a,n=(n&42)!==0?1:fo(n),n=(n&(l.suspendedLanes|a))!==0?0:n,n!==0&&n!==U.retryLane))throw U.retryLane=n,En(e,n),jt(l,e,n),Gu;x.data==="$?"||Ql(),t=Ol(e,t,a)}else x.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=U.treeContext,Je=Qt(x.nextSibling),bt=t,Ye=!0,Fa=null,Wt=!1,e!==null&&(Ht[Lt++]=ra,Ht[Lt++]=oa,Ht[Lt++]=Ka,ra=e.id,oa=e.overflow,Ka=t),t=kl(t,n.children),t.flags|=4096);return t}return i?(Na(),i=n.fallback,x=t.mode,U=e.child,Q=U.sibling,n=ia(U,{mode:"hidden",children:n.children}),n.subtreeFlags=U.subtreeFlags&65011712,Q!==null?i=ia(Q,i):(i=Wa(i,x,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,x=e.child.memoizedState,x===null?x=Nl(a):(U=x.cachePool,U!==null?(Q=ot._currentValue,U=U.parent!==Q?{parent:Q,pool:Q}:U):U=Bc(),x={baseLanes:x.baseLanes|a,cachePool:U}),i.memoizedState=x,i.childLanes=Cl(e,l,a),t.memoizedState=Al,n):(Aa(t),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=a,t.memoizedState=null,a)}function kl(e,t){return t=Dr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Dr(e,t){return e=Nt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ol(e,t,a){return Mn(t,e.child,null,a),e=kl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fu(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Qo(e.return,t,a)}function Rl(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function Ju(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(dt(e,t,n.children,a),n=lt.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,a,t);else if(e.tag===19)Fu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(ee(lt,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&kr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Rl(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&kr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Rl(t,!0,a,null,r);break;case"together":Rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ja|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ui(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,a=ia(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function jl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hr(e)))}function Ph(e,t,a){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),wa(t,ot,e.memoizedState.cache),si();break;case 27:case 5:Ke(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:wa(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Aa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Pu(e,t,a):(Aa(t),e=fa(e,t,a),e!==null?e.sibling:null);Aa(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ui(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Ju(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(lt,lt.current),n)break;return null;case 22:case 23:return t.lanes=0,Xu(e,t,a);case 24:wa(t,ot,e.memoizedState.cache)}return fa(e,t,a)}function ef(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ct=!0;else{if(!jl(e,a)&&(t.flags&128)===0)return ct=!1,Ph(e,t,a);ct=(e.flags&131072)!==0}else ct=!1,Ye&&(t.flags&1048576)!==0&&Oc(t,dr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")qo(n)?(e=rn(n,e),t.tag=1,t=Wu(null,t,n,e,a)):(t.tag=0,t=El(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===q){t.tag=11,t=Iu(null,t,n,e,a);break e}else if(i===F){t.tag=14,t=Zu(null,t,n,e,a);break e}}throw t=h(n)||n,Error(w(306,t,""))}}return t;case 0:return El(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=rn(n,t.pendingProps),Wu(e,t,n,i,a);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(w(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,tl(e,t),yi(t,n,null,a);var l=t.memoizedState;if(n=l.cache,wa(t,ot,n),n!==r.cache&&Wo(t,[ot],a,!0),vi(),n=l.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Ku(e,t,n,a);break e}else if(n!==i){i=Bt(Error(w(424)),t),ci(i),t=Ku(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=Qt(e.firstChild),bt=t,Ye=!0,Fa=null,Wt=!0,a=ju(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(si(),n===i){t=fa(e,t,a);break e}dt(e,t,n,a)}t=t.child}return t;case 26:return jr(e,t),e===null?(a=rd(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ye||(a=t.type,e=t.pendingProps,n=Vr(ge.current).createElement(a),n[vt]=t,n[wt]=e,pt(n,a,e),st(n),t.stateNode=n):t.memoizedState=rd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ke(t),e===null&&Ye&&(n=t.stateNode=ad(t.type,t.pendingProps,ge.current),bt=t,Wt=!0,i=Je,Ma(t.type)?(ds=i,Je=Qt(n.firstChild)):Je=i),dt(e,t,t.pendingProps.children,a),jr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ye&&((i=n=Je)&&(n=Ep(n,t.type,t.pendingProps,Wt),n!==null?(t.stateNode=n,bt=t,Je=Qt(n.firstChild),Wt=!1,i=!0):i=!1),i||Ja(t)),Ke(t),i=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,n=r.children,ss(i,r)?n=null:l!==null&&ss(i,l)&&(t.flags|=32),t.memoizedState!==null&&(i=ll(e,t,Ih,null,null,a),Hi._currentValue=i),jr(e,t),dt(e,t,n,a),t.child;case 6:return e===null&&Ye&&((e=a=Je)&&(a=Ap(a,t.pendingProps,Wt),a!==null?(t.stateNode=a,bt=t,Je=null,e=!0):e=!1),e||Ja(t)),null;case 13:return Pu(e,t,a);case 4:return we(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Mn(t,null,n,a):dt(e,t,n,a),t.child;case 11:return Iu(e,t,t.type,t.pendingProps,a);case 7:return dt(e,t,t.pendingProps,a),t.child;case 8:return dt(e,t,t.pendingProps.children,a),t.child;case 12:return dt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,wa(t,t.type,n.value),dt(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,tn(t),i=yt(i),n=n(i),t.flags|=1,dt(e,t,n,a),t.child;case 14:return Zu(e,t,t.type,t.pendingProps,a);case 15:return $u(e,t,t.type,t.pendingProps,a);case 19:return Ju(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=Dr(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=ia(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Xu(e,t,a);case 24:return tn(t),n=yt(ot),e===null?(i=Fo(),i===null&&(i=Qe,r=Ko(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},el(t),wa(t,ot,i)):((e.lanes&a)!==0&&(tl(e,t),yi(t,null,null,a),vi()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),wa(t,ot,n)):(n=r.cache,wa(t,ot,n),n!==i.cache&&Wo(t,[ot],a,!0))),dt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(w(156,t.tag))}function da(e){e.flags|=4}function tf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ud(t)){if(t=qt.current,t!==null&&((Ue&4194048)===Ue?Kt!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||t!==Kt))throw pi=Jo,Yc;e.flags|=8192}}function zr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Wi():536870912,e.lanes|=t,Ln|=t)}function Ti(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Fh(e,t,a){var n=t.pendingProps;switch($o(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),sa(ot),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(li(t)?da(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dc())),Fe(t),null;case 26:return a=t.memoizedState,e===null?(da(t),a!==null?(Fe(t),tf(t,a)):(Fe(t),t.flags&=-16777217)):a?a!==e.memoizedState?(da(t),Fe(t),tf(t,a)):(Fe(t),t.flags&=-16777217):(e.memoizedProps!==n&&da(t),Fe(t),t.flags&=-16777217),null;case 27:qe(t),a=ge.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(!n){if(t.stateNode===null)throw Error(w(166));return Fe(t),null}e=re.current,li(t)?Rc(t):(e=ad(i,n,a),t.stateNode=e,da(t))}return Fe(t),null;case 5:if(qe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(!n){if(t.stateNode===null)throw Error(w(166));return Fe(t),null}if(e=re.current,li(t))Rc(t);else{switch(i=Vr(ge.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[vt]=t,e[wt]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(pt(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&da(t)}}return Fe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(w(166));if(e=ge.current,li(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=bt,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[vt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Wf(e.nodeValue,a)),e||Ja(t)}else e=Vr(e).createTextNode(n),e[vt]=t,t.stateNode=e}return Fe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=li(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[vt]=t}else si(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),i=!1}else i=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ua(t),t):(ua(t),null)}if(ua(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),zr(t,t.updateQueue),Fe(t),null;case 4:return Ce(),e===null&&ns(t.stateNode.containerInfo),Fe(t),null;case 10:return sa(t.type),Fe(t),null;case 19:if(B(lt),i=t.memoizedState,i===null)return Fe(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Ti(i,!1);else{if(et!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=kr(e),r!==null){for(t.flags|=128,Ti(i,!1),e=r.updateQueue,t.updateQueue=e,zr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)kc(a,e),a=a.sibling;return ee(lt,lt.current&1|2),t.child}e=e.sibling}i.tail!==null&&D()>Br&&(t.flags|=128,n=!0,Ti(i,!1),t.lanes=4194304)}else{if(!n)if(e=kr(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,zr(t,e),Ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!Ye)return Fe(t),null}else 2*D()-i.renderingStartTime>Br&&a!==536870912&&(t.flags|=128,n=!0,Ti(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=D(),t.sibling=null,e=lt.current,ee(lt,n?e&1|2:e&1),t):(Fe(t),null);case 22:case 23:return ua(t),rl(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),a=t.updateQueue,a!==null&&zr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&B(an),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),sa(ot),Fe(t),null;case 25:return null;case 30:return null}throw Error(w(156,t.tag))}function Jh(e,t){switch($o(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sa(ot),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qe(t),null;case 13:if(ua(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));si()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(lt),null;case 4:return Ce(),null;case 10:return sa(t.type),null;case 22:case 23:return ua(t),rl(),e!==null&&B(an),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sa(ot),null;case 25:return null;default:return null}}function af(e,t){switch($o(t),t.tag){case 3:sa(ot),Ce();break;case 26:case 27:case 5:qe(t);break;case 4:Ce();break;case 13:ua(t);break;case 19:B(lt);break;case 10:sa(t.type);break;case 22:case 23:ua(t),rl(),e!==null&&B(an);break;case 24:sa(ot)}}function Ei(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,l=a.inst;n=r(),l.destroy=n}a=a.next}while(a!==i)}}catch(x){$e(t,t.return,x)}}function Ca(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var l=n.inst,x=l.destroy;if(x!==void 0){l.destroy=void 0,i=t;var U=a,Q=x;try{Q()}catch(oe){$e(i,U,oe)}}}n=n.next}while(n!==r)}}catch(oe){$e(t,t.return,oe)}}function nf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Zc(t,a)}catch(n){$e(e,e.return,n)}}}function rf(e,t,a){a.props=rn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){$e(e,t,n)}}function Ai(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){$e(e,t,i)}}function Pt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){$e(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){$e(e,t,i)}else a.current=null}function of(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){$e(e,e.return,i)}}function Dl(e,t,a){try{var n=e.stateNode;xp(n,e.type,a,t),n[wt]=t}catch(i){$e(e,e.return,i)}}function lf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ma(e.type)||e.tag===4}function zl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xr));else if(n!==4&&(n===27&&Ma(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ul(e,t,a),e=e.sibling;e!==null;)Ul(e,t,a),e=e.sibling}function Ur(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ur(e,t,a),e=e.sibling;e!==null;)Ur(e,t,a),e=e.sibling}function sf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);pt(t,n,a),t[vt]=e,t[wt]=a}catch(r){$e(e,e.return,r)}}var ha=!1,at=!1,Ml=!1,cf=typeof WeakSet=="function"?WeakSet:Set,ut=null;function ep(e,t){if(e=e.containerInfo,os=Jr,e=bc(e),zo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var l=0,x=-1,U=-1,Q=0,oe=0,fe=e,K=null;t:for(;;){for(var P;fe!==a||i!==0&&fe.nodeType!==3||(x=l+i),fe!==r||n!==0&&fe.nodeType!==3||(U=l+n),fe.nodeType===3&&(l+=fe.nodeValue.length),(P=fe.firstChild)!==null;)K=fe,fe=P;for(;;){if(fe===e)break t;if(K===a&&++Q===i&&(x=l),K===r&&++oe===n&&(U=l),(P=fe.nextSibling)!==null)break;fe=K,K=fe.parentNode}fe=P}a=x===-1||U===-1?null:{start:x,end:U}}else a=null}a=a||{start:0,end:0}}else a=null;for(ls={focusedElem:e,selectionRange:a},Jr=!1,ut=t;ut!==null;)if(t=ut,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ut=e;else for(;ut!==null;){switch(t=ut,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var Ae=rn(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(Ae,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(Te){$e(a,a.return,Te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)us(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":us(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(w(163))}if(e=t.sibling,e!==null){e.return=t.return,ut=e;break}ut=t.return}}function uf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ka(e,a),n&4&&Ei(5,a);break;case 1:if(ka(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(l){$e(a,a.return,l)}else{var i=rn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){$e(a,a.return,l)}}n&64&&nf(a),n&512&&Ai(a,a.return);break;case 3:if(ka(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Zc(e,t)}catch(l){$e(a,a.return,l)}}break;case 27:t===null&&n&4&&sf(a);case 26:case 5:ka(e,a),t===null&&n&4&&of(a),n&512&&Ai(a,a.return);break;case 12:ka(e,a);break;case 13:ka(e,a),n&4&&hf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=cp.bind(null,a),Np(e,a))));break;case 22:if(n=a.memoizedState!==null||ha,!n){t=t!==null&&t.memoizedState!==null||at,i=ha;var r=at;ha=n,(at=t)&&!r?Oa(e,a,(a.subtreeFlags&8772)!==0):ka(e,a),ha=i,at=r}break;case 30:break;default:ka(e,a)}}function ff(e){var t=e.alternate;t!==null&&(e.alternate=null,ff(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,Tt=!1;function pa(e,t,a){for(a=a.child;a!==null;)df(e,t,a),a=a.sibling}function df(e,t,a){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(_e,a)}catch{}switch(a.tag){case 26:at||Pt(a,t),pa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:at||Pt(a,t);var n=Pe,i=Tt;Ma(a.type)&&(Pe=a.stateNode,Tt=!1),pa(e,t,a),Ui(a.stateNode),Pe=n,Tt=i;break;case 5:at||Pt(a,t);case 6:if(n=Pe,i=Tt,Pe=null,pa(e,t,a),Pe=n,Tt=i,Pe!==null)if(Tt)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(a.stateNode)}catch(r){$e(a,t,r)}else try{Pe.removeChild(a.stateNode)}catch(r){$e(a,t,r)}break;case 18:Pe!==null&&(Tt?(e=Pe,ed(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ii(e)):ed(Pe,a.stateNode));break;case 4:n=Pe,i=Tt,Pe=a.stateNode.containerInfo,Tt=!0,pa(e,t,a),Pe=n,Tt=i;break;case 0:case 11:case 14:case 15:at||Ca(2,a,t),at||Ca(4,a,t),pa(e,t,a);break;case 1:at||(Pt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&rf(a,t,n)),pa(e,t,a);break;case 21:pa(e,t,a);break;case 22:at=(n=at)||a.memoizedState!==null,pa(e,t,a),at=n;break;default:pa(e,t,a)}}function hf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ii(e)}catch(a){$e(t,t.return,a)}}function tp(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cf),t;default:throw Error(w(435,e.tag))}}function Bl(e,t){var a=tp(e);t.forEach(function(n){var i=up.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function Ct(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,l=t,x=l;e:for(;x!==null;){switch(x.tag){case 27:if(Ma(x.type)){Pe=x.stateNode,Tt=!1;break e}break;case 5:Pe=x.stateNode,Tt=!1;break e;case 3:case 4:Pe=x.stateNode.containerInfo,Tt=!0;break e}x=x.return}if(Pe===null)throw Error(w(160));df(r,l,i),Pe=null,Tt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)pf(t,e),t=t.sibling}var Vt=null;function pf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ct(t,e),kt(e),n&4&&(Ca(3,e,e.return),Ei(3,e),Ca(5,e,e.return));break;case 1:Ct(t,e),kt(e),n&512&&(at||a===null||Pt(a,a.return)),n&64&&ha&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Vt;if(Ct(t,e),kt(e),n&512&&(at||a===null||Pt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Kn]||r[vt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),pt(r,n,a),r[vt]=e,st(r),n=r;break e;case"link":var l=sd("link","href",i).get(n+(a.href||""));if(l){for(var x=0;x<l.length;x++)if(r=l[x],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){l.splice(x,1);break t}}r=i.createElement(n),pt(r,n,a),i.head.appendChild(r);break;case"meta":if(l=sd("meta","content",i).get(n+(a.content||""))){for(x=0;x<l.length;x++)if(r=l[x],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){l.splice(x,1);break t}}r=i.createElement(n),pt(r,n,a),i.head.appendChild(r);break;default:throw Error(w(468,n))}r[vt]=e,st(r),n=r}e.stateNode=n}else cd(i,e.type,e.stateNode);else e.stateNode=ld(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?cd(i,e.type,e.stateNode):ld(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Dl(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ct(t,e),kt(e),n&512&&(at||a===null||Pt(a,a.return)),a!==null&&n&4&&Dl(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ct(t,e),kt(e),n&512&&(at||a===null||Pt(a,a.return)),e.flags&32){i=e.stateNode;try{gn(i,"")}catch(P){$e(e,e.return,P)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Dl(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Ml=!0);break;case 6:if(Ct(t,e),kt(e),n&4){if(e.stateNode===null)throw Error(w(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(P){$e(e,e.return,P)}}break;case 3:if(Kr=null,i=Vt,Vt=Qr(t.containerInfo),Ct(t,e),Vt=i,kt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(P){$e(e,e.return,P)}Ml&&(Ml=!1,mf(e));break;case 4:n=Vt,Vt=Qr(e.stateNode.containerInfo),Ct(t,e),kt(e),Vt=n;break;case 12:Ct(t,e),kt(e);break;case 13:Ct(t,e),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=D()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Bl(e,n)));break;case 22:i=e.memoizedState!==null;var U=a!==null&&a.memoizedState!==null,Q=ha,oe=at;if(ha=Q||i,at=oe||U,Ct(t,e),at=oe,ha=Q,kt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||U||ha||at||on(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){U=a=t;try{if(r=U.stateNode,i)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{x=U.stateNode;var fe=U.memoizedProps.style,K=fe!=null&&fe.hasOwnProperty("display")?fe.display:null;x.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(P){$e(U,U.return,P)}}}else if(t.tag===6){if(a===null){U=t;try{U.stateNode.nodeValue=i?"":U.memoizedProps}catch(P){$e(U,U.return,P)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Bl(e,a))));break;case 19:Ct(t,e),kt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Bl(e,n)));break;case 30:break;case 21:break;default:Ct(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(lf(n)){a=n;break}n=n.return}if(a==null)throw Error(w(160));switch(a.tag){case 27:var i=a.stateNode,r=zl(e);Ur(e,r,i);break;case 5:var l=a.stateNode;a.flags&32&&(gn(l,""),a.flags&=-33);var x=zl(e);Ur(e,x,l);break;case 3:case 4:var U=a.stateNode.containerInfo,Q=zl(e);Ul(e,Q,U);break;default:throw Error(w(161))}}catch(oe){$e(e,e.return,oe)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;mf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ka(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uf(e,t.alternate,t),t=t.sibling}function on(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ca(4,t,t.return),on(t);break;case 1:Pt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&rf(t,t.return,a),on(t);break;case 27:Ui(t.stateNode);case 26:case 5:Pt(t,t.return),on(t);break;case 22:t.memoizedState===null&&on(t);break;case 30:on(t);break;default:on(t)}e=e.sibling}}function Oa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:Oa(i,r,a),Ei(4,r);break;case 1:if(Oa(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(Q){$e(n,n.return,Q)}if(n=r,i=n.updateQueue,i!==null){var x=n.stateNode;try{var U=i.shared.hiddenCallbacks;if(U!==null)for(i.shared.hiddenCallbacks=null,i=0;i<U.length;i++)Ic(U[i],x)}catch(Q){$e(n,n.return,Q)}}a&&l&64&&nf(r),Ai(r,r.return);break;case 27:sf(r);case 26:case 5:Oa(i,r,a),a&&n===null&&l&4&&of(r),Ai(r,r.return);break;case 12:Oa(i,r,a);break;case 13:Oa(i,r,a),a&&l&4&&hf(i,r);break;case 22:r.memoizedState===null&&Oa(i,r,a),Ai(r,r.return);break;case 30:break;default:Oa(i,r,a)}t=t.sibling}}function Yl(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fi(a))}function Hl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fi(e))}function Ft(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vf(e,t,a,n),t=t.sibling}function vf(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ft(e,t,a,n),i&2048&&Ei(9,t);break;case 1:Ft(e,t,a,n);break;case 3:Ft(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fi(e)));break;case 12:if(i&2048){Ft(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,x=r.onPostCommit;typeof x=="function"&&x(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(U){$e(t,t.return,U)}}else Ft(e,t,a,n);break;case 13:Ft(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?Ft(e,t,a,n):Ni(e,t):r._visibility&2?Ft(e,t,a,n):(r._visibility|=2,Bn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&Yl(l,t);break;case 24:Ft(e,t,a,n),i&2048&&Hl(t.alternate,t);break;default:Ft(e,t,a,n)}}function Bn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,l=t,x=a,U=n,Q=l.flags;switch(l.tag){case 0:case 11:case 15:Bn(r,l,x,U,i),Ei(8,l);break;case 23:break;case 22:var oe=l.stateNode;l.memoizedState!==null?oe._visibility&2?Bn(r,l,x,U,i):Ni(r,l):(oe._visibility|=2,Bn(r,l,x,U,i)),i&&Q&2048&&Yl(l.alternate,l);break;case 24:Bn(r,l,x,U,i),i&&Q&2048&&Hl(l.alternate,l);break;default:Bn(r,l,x,U,i)}t=t.sibling}}function Ni(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Ni(a,n),i&2048&&Yl(n.alternate,n);break;case 24:Ni(a,n),i&2048&&Hl(n.alternate,n);break;default:Ni(a,n)}t=t.sibling}}var Ci=8192;function Yn(e){if(e.subtreeFlags&Ci)for(e=e.child;e!==null;)yf(e),e=e.sibling}function yf(e){switch(e.tag){case 26:Yn(e),e.flags&Ci&&e.memoizedState!==null&&Lp(Vt,e.memoizedState,e.memoizedProps);break;case 5:Yn(e);break;case 3:case 4:var t=Vt;Vt=Qr(e.stateNode.containerInfo),Yn(e),Vt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ci,Ci=16777216,Yn(e),Ci=t):Yn(e));break;default:Yn(e)}}function gf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];ut=n,xf(n,e)}gf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bf(e),e=e.sibling}function bf(e){switch(e.tag){case 0:case 11:case 15:ki(e),e.flags&2048&&Ca(9,e,e.return);break;case 3:ki(e);break;case 12:ki(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mr(e)):ki(e);break;default:ki(e)}}function Mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];ut=n,xf(n,e)}gf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ca(8,t,t.return),Mr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Mr(t));break;default:Mr(t)}e=e.sibling}}function xf(e,t){for(;ut!==null;){var a=ut;switch(a.tag){case 0:case 11:case 15:Ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:fi(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,ut=n;else e:for(a=e;ut!==null;){n=ut;var i=n.sibling,r=n.return;if(ff(n),n===a){ut=null;break e}if(i!==null){i.return=r,ut=i;break e}ut=r}}}var ap={getCacheForType:function(e){var t=yt(ot),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},np=typeof WeakMap=="function"?WeakMap:Map,He=0,Qe=null,De=null,Ue=0,Le=0,Ot=null,Ra=!1,Hn=!1,Ll=!1,ma=0,et=0,ja=0,ln=0,ql=0,Gt=0,Ln=0,Oi=null,Et=null,Gl=!1,Il=0,Br=1/0,Yr=null,Da=null,ht=0,za=null,qn=null,Gn=0,Zl=0,$l=null,wf=null,Ri=0,Xl=null;function Rt(){if((He&2)!==0&&Ue!==0)return Ue&-Ue;if(Z.T!==null){var e=kn;return e!==0?e:Jl()}return Ms()}function _f(){Gt===0&&(Gt=(Ue&536870912)===0||Ye?Qi():536870912);var e=qt.current;return e!==null&&(e.flags|=32),Gt}function jt(e,t,a){(e===Qe&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(In(e,0),Ua(e,Ue,Gt,!1)),$t(e,a),((He&2)===0||e!==Qe)&&(e===Qe&&((He&2)===0&&(ln|=a),et===4&&Ua(e,Ue,Gt,!1)),Jt(e))}function Sf(e,t,a){if((He&6)!==0)throw Error(w(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||ga(e,t),i=n?op(e,t):Wl(e,t,!0),r=n;do{if(i===0){Hn&&!n&&Ua(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!ip(a)){i=Wl(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var x=e;i=Oi;var U=x.current.memoizedState.isDehydrated;if(U&&(In(x,l).flags|=256),l=Wl(x,l,!1),l!==2){if(Ll&&!U){x.errorRecoveryDisabledLanes|=r,ln|=r,i=4;break e}r=Et,Et=i,r!==null&&(Et===null?Et=r:Et.push.apply(Et,r))}i=l}if(r=!1,i!==2)continue}}if(i===1){In(e,0),Ua(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(w(345));case 4:if((t&4194048)!==t)break;case 6:Ua(n,t,Gt,!Ra);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(w(329))}if((t&62914560)===t&&(i=Il+300-D(),10<i)){if(Ua(n,t,Gt,!Ra),xt(n,0,!0)!==0)break e;n.timeoutHandle=Ff(Tf.bind(null,n,a,Et,Yr,Gl,t,Gt,ln,Ln,Ra,r,2,-0,0),i);break e}Tf(n,a,Et,Yr,Gl,t,Gt,ln,Ln,Ra,r,0,-0,0)}}break}while(!0);Jt(e)}function Tf(e,t,a,n,i,r,l,x,U,Q,oe,fe,K,P){if(e.timeoutHandle=-1,fe=t.subtreeFlags,(fe&8192||(fe&16785408)===16785408)&&(Yi={stylesheets:null,count:0,unsuspend:Hp},yf(t),fe=qp(),fe!==null)){e.cancelPendingCommit=fe(Rf.bind(null,e,t,r,a,n,i,l,x,U,oe,1,K,P)),Ua(e,r,l,!Q);return}Rf(e,t,r,a,n,i,l,x,U)}function ip(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!At(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ua(e,t,a,n){t&=~ql,t&=~ln,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-Xe(i),l=1<<r;n[r]=-1,i&=~l}a!==0&&zs(e,a,t)}function Hr(){return(He&6)===0?(ji(0),!1):!0}function Vl(){if(De!==null){if(Le===0)var e=De.return;else e=De,la=en=null,ul(e),Un=null,_i=0,e=De;for(;e!==null;)af(e.alternate,e),e=e.return;De=null}}function In(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_p(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vl(),Qe=e,De=a=ia(e.current,null),Ue=t,Le=0,Ot=null,Ra=!1,Hn=ga(e,t),Ll=!1,Ln=Gt=ql=ln=ja=et=0,Et=Oi=null,Gl=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Xe(n),r=1<<i;t|=e[i],n&=~r}return ma=t,lr(),a}function Ef(e,t){Re=null,Z.H=Ar,t===hi||t===vr?(t=qc(),Le=3):t===Yc?(t=qc(),Le=4):Le=t===Gu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ot=t,De===null&&(et=1,Rr(e,Bt(t,e.current)))}function Af(){var e=Z.H;return Z.H=Ar,e===null?Ar:e}function Nf(){var e=Z.A;return Z.A=ap,e}function Ql(){et=4,Ra||(Ue&4194048)!==Ue&&qt.current!==null||(Hn=!0),(ja&134217727)===0&&(ln&134217727)===0||Qe===null||Ua(Qe,Ue,Gt,!1)}function Wl(e,t,a){var n=He;He|=2;var i=Af(),r=Nf();(Qe!==e||Ue!==t)&&(Yr=null,In(e,t)),t=!1;var l=et;e:do try{if(Le!==0&&De!==null){var x=De,U=Ot;switch(Le){case 8:Vl(),l=6;break e;case 3:case 2:case 9:case 6:qt.current===null&&(t=!0);var Q=Le;if(Le=0,Ot=null,Zn(e,x,U,Q),a&&Hn){l=0;break e}break;default:Q=Le,Le=0,Ot=null,Zn(e,x,U,Q)}}rp(),l=et;break}catch(oe){Ef(e,oe)}while(!0);return t&&e.shellSuspendCounter++,la=en=null,He=n,Z.H=i,Z.A=r,De===null&&(Qe=null,Ue=0,lr()),l}function rp(){for(;De!==null;)Cf(De)}function op(e,t){var a=He;He|=2;var n=Af(),i=Nf();Qe!==e||Ue!==t?(Yr=null,Br=D()+500,In(e,t)):Hn=ga(e,t);e:do try{if(Le!==0&&De!==null){t=De;var r=Ot;t:switch(Le){case 1:Le=0,Ot=null,Zn(e,t,r,1);break;case 2:case 9:if(Hc(r)){Le=0,Ot=null,kf(t);break}t=function(){Le!==2&&Le!==9||Qe!==e||(Le=7),Jt(e)},r.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Hc(r)?(Le=0,Ot=null,kf(t)):(Le=0,Ot=null,Zn(e,t,r,7));break;case 5:var l=null;switch(De.tag){case 26:l=De.memoizedState;case 5:case 27:var x=De;if(!l||ud(l)){Le=0,Ot=null;var U=x.sibling;if(U!==null)De=U;else{var Q=x.return;Q!==null?(De=Q,Lr(Q)):De=null}break t}}Le=0,Ot=null,Zn(e,t,r,5);break;case 6:Le=0,Ot=null,Zn(e,t,r,6);break;case 8:Vl(),et=6;break e;default:throw Error(w(462))}}lp();break}catch(oe){Ef(e,oe)}while(!0);return la=en=null,Z.H=n,Z.A=i,He=a,De!==null?0:(Qe=null,Ue=0,lr(),et)}function lp(){for(;De!==null&&!ce();)Cf(De)}function Cf(e){var t=ef(e.alternate,e,ma);e.memoizedProps=e.pendingProps,t===null?Lr(e):De=t}function kf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Qu(a,t,t.pendingProps,t.type,void 0,Ue);break;case 11:t=Qu(a,t,t.pendingProps,t.type.render,t.ref,Ue);break;case 5:ul(t);default:af(a,t),t=De=kc(t,ma),t=ef(a,t,ma)}e.memoizedProps=e.pendingProps,t===null?Lr(e):De=t}function Zn(e,t,a,n){la=en=null,ul(t),Un=null,_i=0;var i=t.return;try{if(Kh(e,i,t,a,Ue)){et=1,Rr(e,Bt(a,e.current)),De=null;return}}catch(r){if(i!==null)throw De=i,r;et=1,Rr(e,Bt(a,e.current)),De=null;return}t.flags&32768?(Ye||n===1?e=!0:Hn||(Ue&536870912)!==0?e=!1:(Ra=e=!0,(n===2||n===9||n===3||n===6)&&(n=qt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Of(t,e)):Lr(t)}function Lr(e){var t=e;do{if((t.flags&32768)!==0){Of(t,Ra);return}e=t.return;var a=Fh(t.alternate,t,ma);if(a!==null){De=a;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);et===0&&(et=5)}function Of(e,t){do{var a=Jh(e.alternate,e);if(a!==null){a.flags&=32767,De=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){De=e;return}De=e=a}while(e!==null);et=6,De=null}function Rf(e,t,a,n,i,r,l,x,U){e.cancelPendingCommit=null;do qr();while(ht!==0);if((He&6)!==0)throw Error(w(327));if(t!==null){if(t===e.current)throw Error(w(177));if(r=t.lanes|t.childLanes,r|=Ho,un(e,a,r,l,x,U),e===Qe&&(De=Qe=null,Ue=0),qn=t,za=e,Gn=a,Zl=r,$l=i,wf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fp(pe,function(){return Mf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=Z.T,Z.T=null,i=Y.p,Y.p=2,l=He,He|=4;try{ep(e,t,a)}finally{He=l,Y.p=i,Z.T=n}}ht=1,jf(),Df(),zf()}}function jf(){if(ht===1){ht=0;var e=za,t=qn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=Z.T,Z.T=null;var n=Y.p;Y.p=2;var i=He;He|=4;try{pf(t,e);var r=ls,l=bc(e.containerInfo),x=r.focusedElem,U=r.selectionRange;if(l!==x&&x&&x.ownerDocument&&gc(x.ownerDocument.documentElement,x)){if(U!==null&&zo(x)){var Q=U.start,oe=U.end;if(oe===void 0&&(oe=Q),"selectionStart"in x)x.selectionStart=Q,x.selectionEnd=Math.min(oe,x.value.length);else{var fe=x.ownerDocument||document,K=fe&&fe.defaultView||window;if(K.getSelection){var P=K.getSelection(),Ae=x.textContent.length,Te=Math.min(U.start,Ae),Ze=U.end===void 0?Te:Math.min(U.end,Ae);!P.extend&&Te>Ze&&(l=Ze,Ze=Te,Te=l);var I=yc(x,Te),L=yc(x,Ze);if(I&&L&&(P.rangeCount!==1||P.anchorNode!==I.node||P.anchorOffset!==I.offset||P.focusNode!==L.node||P.focusOffset!==L.offset)){var V=fe.createRange();V.setStart(I.node,I.offset),P.removeAllRanges(),Te>Ze?(P.addRange(V),P.extend(L.node,L.offset)):(V.setEnd(L.node,L.offset),P.addRange(V))}}}}for(fe=[],P=x;P=P.parentNode;)P.nodeType===1&&fe.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<fe.length;x++){var ue=fe[x];ue.element.scrollLeft=ue.left,ue.element.scrollTop=ue.top}}Jr=!!os,ls=os=null}finally{He=i,Y.p=n,Z.T=a}}e.current=t,ht=2}}function Df(){if(ht===2){ht=0;var e=za,t=qn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=Z.T,Z.T=null;var n=Y.p;Y.p=2;var i=He;He|=4;try{uf(e,t.alternate,t)}finally{He=i,Y.p=n,Z.T=a}}ht=3}}function zf(){if(ht===4||ht===3){ht=0,te();var e=za,t=qn,a=Gn,n=wf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,qn=za=null,Uf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Da=null),ho(a),t=t.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(_e,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=Z.T,i=Y.p,Y.p=2,Z.T=null;try{for(var r=e.onRecoverableError,l=0;l<n.length;l++){var x=n[l];r(x.value,{componentStack:x.stack})}}finally{Z.T=t,Y.p=i}}(Gn&3)!==0&&qr(),Jt(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===Xl?Ri++:(Ri=0,Xl=e):Ri=0,ji(0)}}function Uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fi(t)))}function qr(e){return jf(),Df(),zf(),Mf()}function Mf(){if(ht!==5)return!1;var e=za,t=Zl;Zl=0;var a=ho(Gn),n=Z.T,i=Y.p;try{Y.p=32>a?32:a,Z.T=null,a=$l,$l=null;var r=za,l=Gn;if(ht=0,qn=za=null,Gn=0,(He&6)!==0)throw Error(w(331));var x=He;if(He|=4,bf(r.current),vf(r,r.current,l,a),He=x,ji(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(_e,r)}catch{}return!0}finally{Y.p=i,Z.T=n,Uf(e,t)}}function Bf(e,t,a){t=Bt(a,t),t=Tl(e.stateNode,t,2),e=Ta(e,t,2),e!==null&&($t(e,2),Jt(e))}function $e(e,t,a){if(e.tag===3)Bf(e,e,a);else for(;t!==null;){if(t.tag===3){Bf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Da===null||!Da.has(n))){e=Bt(a,e),a=Lu(2),n=Ta(t,a,2),n!==null&&(qu(a,n,t,e),$t(n,2),Jt(n));break}}t=t.return}}function Kl(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new np;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Ll=!0,i.add(a),e=sp.bind(null,e,t,a),t.then(e,e))}function sp(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(Ue&a)===a&&(et===4||et===3&&(Ue&62914560)===Ue&&300>D()-Il?(He&2)===0&&In(e,0):ql|=a,Ln===Ue&&(Ln=0)),Jt(e)}function Yf(e,t){t===0&&(t=Wi()),e=En(e,t),e!==null&&($t(e,t),Jt(e))}function cp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Yf(e,a)}function up(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(w(314))}n!==null&&n.delete(t),Yf(e,a)}function fp(e,t){return nt(e,t)}var Gr=null,$n=null,Pl=!1,Ir=!1,Fl=!1,sn=0;function Jt(e){e!==$n&&e.next===null&&($n===null?Gr=$n=e:$n=$n.next=e),Ir=!0,Pl||(Pl=!0,hp())}function ji(e,t){if(!Fl&&Ir){Fl=!0;do for(var a=!1,n=Gr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var l=n.suspendedLanes,x=n.pingedLanes;r=(1<<31-Xe(42|e)+1)-1,r&=i&~(l&~x),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Gf(n,r))}else r=Ue,r=xt(n,n===Qe?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||ga(n,r)||(a=!0,Gf(n,r));n=n.next}while(a);Fl=!1}}function dp(){Hf()}function Hf(){Ir=Pl=!1;var e=0;sn!==0&&(wp()&&(e=sn),sn=0);for(var t=D(),a=null,n=Gr;n!==null;){var i=n.next,r=Lf(n,t);r===0?(n.next=null,a===null?Gr=i:a.next=i,i===null&&($n=a)):(a=n,(e!==0||(r&3)!==0)&&(Ir=!0)),n=i}ji(e)}function Lf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-Xe(r),x=1<<l,U=i[l];U===-1?((x&a)===0||(x&n)!==0)&&(i[l]=uo(x,t)):U<=t&&(e.expiredLanes|=x),r&=~x}if(t=Qe,a=Ue,a=xt(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&s(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ga(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&s(n),ho(a)){case 2:case 8:a=he;break;case 32:a=pe;break;case 268435456:a=ve;break;default:a=pe}return n=qf.bind(null,e),a=nt(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&s(n),e.callbackPriority=2,e.callbackNode=null,2}function qf(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(qr()&&e.callbackNode!==a)return null;var n=Ue;return n=xt(e,e===Qe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Sf(e,n,t),Lf(e,D()),e.callbackNode!=null&&e.callbackNode===a?qf.bind(null,e):null)}function Gf(e,t){if(qr())return null;Sf(e,t,!0)}function hp(){Sp(function(){(He&6)!==0?nt(G,dp):Hf()})}function Jl(){return sn===0&&(sn=Qi()),sn}function If(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:er(""+e)}function Zf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function pp(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=If((i[wt]||null).action),l=n.submitter;l&&(t=(t=l[wt]||null)?If(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var x=new ir("action","action",null,n,i);e.push({event:x,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(sn!==0){var U=l?Zf(i,l):new FormData(i);bl(a,{pending:!0,data:U,method:i.method,action:r},null,U)}}else typeof r=="function"&&(x.preventDefault(),U=l?Zf(i,l):new FormData(i),bl(a,{pending:!0,data:U,method:i.method,action:r},r,U))},currentTarget:i}]})}}for(var es=0;es<Yo.length;es++){var ts=Yo[es],mp=ts.toLowerCase(),vp=ts[0].toUpperCase()+ts.slice(1);Xt(mp,"on"+vp)}Xt(_c,"onAnimationEnd"),Xt(Sc,"onAnimationIteration"),Xt(Tc,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Dh,"onTransitionRun"),Xt(zh,"onTransitionStart"),Xt(Uh,"onTransitionCancel"),Xt(Ec,"onTransitionEnd"),mn("onMouseEnter",["mouseout","mouseover"]),mn("onMouseLeave",["mouseout","mouseover"]),mn("onPointerEnter",["pointerout","pointerover"]),mn("onPointerLeave",["pointerout","pointerover"]),$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$a("onBeforeInput",["compositionend","keypress","textInput","paste"]),$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Di));function $f(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var l=n.length-1;0<=l;l--){var x=n[l],U=x.instance,Q=x.currentTarget;if(x=x.listener,U!==r&&i.isPropagationStopped())break e;r=x,i.currentTarget=Q;try{r(i)}catch(oe){Or(oe)}i.currentTarget=null,r=U}else for(l=0;l<n.length;l++){if(x=n[l],U=x.instance,Q=x.currentTarget,x=x.listener,U!==r&&i.isPropagationStopped())break e;r=x,i.currentTarget=Q;try{r(i)}catch(oe){Or(oe)}i.currentTarget=null,r=U}}}}function ze(e,t){var a=t[po];a===void 0&&(a=t[po]=new Set);var n=e+"__bubble";a.has(n)||(Xf(t,e,2,!1),a.add(n))}function as(e,t,a){var n=0;t&&(n|=4),Xf(a,e,n,t)}var Zr="_reactListening"+Math.random().toString(36).slice(2);function ns(e){if(!e[Zr]){e[Zr]=!0,Ys.forEach(function(a){a!=="selectionchange"&&(yp.has(a)||as(a,!1,e),as(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zr]||(t[Zr]=!0,as("selectionchange",!1,t))}}function Xf(e,t,a,n){switch(vd(t)){case 2:var i=Zp;break;case 8:i=$p;break;default:i=ys}a=i.bind(null,t,a,e),i=void 0,!Eo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function is(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var x=n.stateNode.containerInfo;if(x===i)break;if(l===4)for(l=n.return;l!==null;){var U=l.tag;if((U===3||U===4)&&l.stateNode.containerInfo===i)return;l=l.return}for(;x!==null;){if(l=dn(x),l===null)return;if(U=l.tag,U===5||U===6||U===26||U===27){n=r=l;continue e}x=x.parentNode}}n=n.return}Fs(function(){var Q=r,oe=So(a),fe=[];e:{var K=Ac.get(e);if(K!==void 0){var P=ir,Ae=e;switch(e){case"keypress":if(ar(a)===0)break e;case"keydown":case"keyup":P=fh;break;case"focusin":Ae="focus",P=ko;break;case"focusout":Ae="blur",P=ko;break;case"beforeblur":case"afterblur":P=ko;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=ph;break;case _c:case Sc:case Tc:P=ah;break;case Ec:P=vh;break;case"scroll":case"scrollend":P=Pd;break;case"wheel":P=gh;break;case"copy":case"cut":case"paste":P=ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=nc;break;case"toggle":case"beforetoggle":P=xh}var Te=(t&4)!==0,Ze=!Te&&(e==="scroll"||e==="scrollend"),I=Te?K!==null?K+"Capture":null:K;Te=[];for(var L=Q,V;L!==null;){var ue=L;if(V=ue.stateNode,ue=ue.tag,ue!==5&&ue!==26&&ue!==27||V===null||I===null||(ue=Fn(L,I),ue!=null&&Te.push(zi(L,ue,V))),Ze)break;L=L.return}0<Te.length&&(K=new P(K,Ae,null,a,oe),fe.push({event:K,listeners:Te}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",K&&a!==_o&&(Ae=a.relatedTarget||a.fromElement)&&(dn(Ae)||Ae[fn]))break e;if((P||K)&&(K=oe.window===oe?oe:(K=oe.ownerDocument)?K.defaultView||K.parentWindow:window,P?(Ae=a.relatedTarget||a.toElement,P=Q,Ae=Ae?dn(Ae):null,Ae!==null&&(Ze=m(Ae),Te=Ae.tag,Ae!==Ze||Te!==5&&Te!==27&&Te!==6)&&(Ae=null)):(P=null,Ae=Q),P!==Ae)){if(Te=tc,ue="onMouseLeave",I="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(Te=nc,ue="onPointerLeave",I="onPointerEnter",L="pointer"),Ze=P==null?K:Pn(P),V=Ae==null?K:Pn(Ae),K=new Te(ue,L+"leave",P,a,oe),K.target=Ze,K.relatedTarget=V,ue=null,dn(oe)===Q&&(Te=new Te(I,L+"enter",Ae,a,oe),Te.target=V,Te.relatedTarget=Ze,ue=Te),Ze=ue,P&&Ae)t:{for(Te=P,I=Ae,L=0,V=Te;V;V=Xn(V))L++;for(V=0,ue=I;ue;ue=Xn(ue))V++;for(;0<L-V;)Te=Xn(Te),L--;for(;0<V-L;)I=Xn(I),V--;for(;L--;){if(Te===I||I!==null&&Te===I.alternate)break t;Te=Xn(Te),I=Xn(I)}Te=null}else Te=null;P!==null&&Vf(fe,K,P,Te,!1),Ae!==null&&Ze!==null&&Vf(fe,Ze,Ae,Te,!0)}}e:{if(K=Q?Pn(Q):window,P=K.nodeName&&K.nodeName.toLowerCase(),P==="select"||P==="input"&&K.type==="file")var xe=fc;else if(cc(K))if(dc)xe=Oh;else{xe=Ch;var je=Nh}else P=K.nodeName,!P||P.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?Q&&wo(Q.elementType)&&(xe=fc):xe=kh;if(xe&&(xe=xe(e,Q))){uc(fe,xe,a,oe);break e}je&&je(e,K,Q),e==="focusout"&&Q&&K.type==="number"&&Q.memoizedProps.value!=null&&xo(K,"number",K.value)}switch(je=Q?Pn(Q):window,e){case"focusin":(cc(je)||je.contentEditable==="true")&&(_n=je,Uo=Q,oi=null);break;case"focusout":oi=Uo=_n=null;break;case"mousedown":Mo=!0;break;case"contextmenu":case"mouseup":case"dragend":Mo=!1,xc(fe,a,oe);break;case"selectionchange":if(jh)break;case"keydown":case"keyup":xc(fe,a,oe)}var Se;if(Ro)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else wn?lc(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(ic&&a.locale!=="ko"&&(wn||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&wn&&(Se=Js()):(xa=oe,Ao="value"in xa?xa.value:xa.textContent,wn=!0)),je=$r(Q,Ee),0<je.length&&(Ee=new ac(Ee,e,null,a,oe),fe.push({event:Ee,listeners:je}),Se?Ee.data=Se:(Se=sc(a),Se!==null&&(Ee.data=Se)))),(Se=_h?Sh(e,a):Th(e,a))&&(Ee=$r(Q,"onBeforeInput"),0<Ee.length&&(je=new ac("onBeforeInput","beforeinput",null,a,oe),fe.push({event:je,listeners:Ee}),je.data=Se)),pp(fe,e,Q,a,oe)}$f(fe,t)})}function zi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function $r(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Fn(e,a),i!=null&&n.unshift(zi(e,i,r)),i=Fn(e,t),i!=null&&n.push(zi(e,i,r))),e.tag===3)return n;e=e.return}return[]}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vf(e,t,a,n,i){for(var r=t._reactName,l=[];a!==null&&a!==n;){var x=a,U=x.alternate,Q=x.stateNode;if(x=x.tag,U!==null&&U===n)break;x!==5&&x!==26&&x!==27||Q===null||(U=Q,i?(Q=Fn(a,r),Q!=null&&l.unshift(zi(a,Q,U))):i||(Q=Fn(a,r),Q!=null&&l.push(zi(a,Q,U)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var gp=/\r\n?/g,bp=/\u0000|\uFFFD/g;function Qf(e){return(typeof e=="string"?e:""+e).replace(gp,`
`).replace(bp,"")}function Wf(e,t){return t=Qf(t),Qf(e)===t}function Xr(){}function Ie(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||gn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&gn(e,""+n);break;case"className":Pi(e,"class",n);break;case"tabIndex":Pi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Pi(e,a,n);break;case"style":Ks(e,n,r);break;case"data":if(t!=="object"){Pi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=er(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ie(e,t,"name",i.name,i,null),Ie(e,t,"formEncType",i.formEncType,i,null),Ie(e,t,"formMethod",i.formMethod,i,null),Ie(e,t,"formTarget",i.formTarget,i,null)):(Ie(e,t,"encType",i.encType,i,null),Ie(e,t,"method",i.method,i,null),Ie(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=er(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Xr);break;case"onScroll":n!=null&&ze("scroll",e);break;case"onScrollEnd":n!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(w(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(w(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=er(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ze("beforetoggle",e),ze("toggle",e),Ki(e,"popover",n);break;case"xlinkActuate":aa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":aa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":aa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":aa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":aa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":aa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":aa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":aa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":aa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ki(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wd.get(a)||a,Ki(e,a,n))}}function rs(e,t,a,n,i,r){switch(a){case"style":Ks(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(w(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(w(60));e.innerHTML=a}}break;case"children":typeof n=="string"?gn(e,n):(typeof n=="number"||typeof n=="bigint")&&gn(e,""+n);break;case"onScroll":n!=null&&ze("scroll",e);break;case"onScrollEnd":n!=null&&ze("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Xr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[wt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ki(e,a,n)}}}function pt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];if(l!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(w(137,t));default:Ie(e,t,r,l,a,null)}}i&&Ie(e,t,"srcSet",a.srcSet,a,null),n&&Ie(e,t,"src",a.src,a,null);return;case"input":ze("invalid",e);var x=r=l=i=null,U=null,Q=null;for(n in a)if(a.hasOwnProperty(n)){var oe=a[n];if(oe!=null)switch(n){case"name":i=oe;break;case"type":l=oe;break;case"checked":U=oe;break;case"defaultChecked":Q=oe;break;case"value":r=oe;break;case"defaultValue":x=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(w(137,t));break;default:Ie(e,t,n,oe,a,null)}}Xs(e,r,x,U,Q,l,i,!1),Fi(e);return;case"select":ze("invalid",e),n=l=r=null;for(i in a)if(a.hasOwnProperty(i)&&(x=a[i],x!=null))switch(i){case"value":r=x;break;case"defaultValue":l=x;break;case"multiple":n=x;default:Ie(e,t,i,x,a,null)}t=r,a=l,e.multiple=!!n,t!=null?yn(e,!!n,t,!1):a!=null&&yn(e,!!n,a,!0);return;case"textarea":ze("invalid",e),r=i=n=null;for(l in a)if(a.hasOwnProperty(l)&&(x=a[l],x!=null))switch(l){case"value":n=x;break;case"defaultValue":i=x;break;case"children":r=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(w(91));break;default:Ie(e,t,l,x,a,null)}Qs(e,n,i,r),Fi(e);return;case"option":for(U in a)if(a.hasOwnProperty(U)&&(n=a[U],n!=null))switch(U){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ie(e,t,U,n,a,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(n=0;n<Di.length;n++)ze(Di[n],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(n=a[Q],n!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(w(137,t));default:Ie(e,t,Q,n,a,null)}return;default:if(wo(t)){for(oe in a)a.hasOwnProperty(oe)&&(n=a[oe],n!==void 0&&rs(e,t,oe,n,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(n=a[x],n!=null&&Ie(e,t,x,n,a,null))}function xp(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,l=null,x=null,U=null,Q=null,oe=null;for(P in a){var fe=a[P];if(a.hasOwnProperty(P)&&fe!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":U=fe;default:n.hasOwnProperty(P)||Ie(e,t,P,null,n,fe)}}for(var K in n){var P=n[K];if(fe=a[K],n.hasOwnProperty(K)&&(P!=null||fe!=null))switch(K){case"type":r=P;break;case"name":i=P;break;case"checked":Q=P;break;case"defaultChecked":oe=P;break;case"value":l=P;break;case"defaultValue":x=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(w(137,t));break;default:P!==fe&&Ie(e,t,K,P,n,fe)}}bo(e,l,x,U,Q,oe,r,i);return;case"select":P=l=x=K=null;for(r in a)if(U=a[r],a.hasOwnProperty(r)&&U!=null)switch(r){case"value":break;case"multiple":P=U;default:n.hasOwnProperty(r)||Ie(e,t,r,null,n,U)}for(i in n)if(r=n[i],U=a[i],n.hasOwnProperty(i)&&(r!=null||U!=null))switch(i){case"value":K=r;break;case"defaultValue":x=r;break;case"multiple":l=r;default:r!==U&&Ie(e,t,i,r,n,U)}t=x,a=l,n=P,K!=null?yn(e,!!a,K,!1):!!n!=!!a&&(t!=null?yn(e,!!a,t,!0):yn(e,!!a,a?[]:"",!1));return;case"textarea":P=K=null;for(x in a)if(i=a[x],a.hasOwnProperty(x)&&i!=null&&!n.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Ie(e,t,x,null,n,i)}for(l in n)if(i=n[l],r=a[l],n.hasOwnProperty(l)&&(i!=null||r!=null))switch(l){case"value":K=i;break;case"defaultValue":P=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(w(91));break;default:i!==r&&Ie(e,t,l,i,n,r)}Vs(e,K,P);return;case"option":for(var Ae in a)if(K=a[Ae],a.hasOwnProperty(Ae)&&K!=null&&!n.hasOwnProperty(Ae))switch(Ae){case"selected":e.selected=!1;break;default:Ie(e,t,Ae,null,n,K)}for(U in n)if(K=n[U],P=a[U],n.hasOwnProperty(U)&&K!==P&&(K!=null||P!=null))switch(U){case"selected":e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:Ie(e,t,U,K,n,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in a)K=a[Te],a.hasOwnProperty(Te)&&K!=null&&!n.hasOwnProperty(Te)&&Ie(e,t,Te,null,n,K);for(Q in n)if(K=n[Q],P=a[Q],n.hasOwnProperty(Q)&&K!==P&&(K!=null||P!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(w(137,t));break;default:Ie(e,t,Q,K,n,P)}return;default:if(wo(t)){for(var Ze in a)K=a[Ze],a.hasOwnProperty(Ze)&&K!==void 0&&!n.hasOwnProperty(Ze)&&rs(e,t,Ze,void 0,n,K);for(oe in n)K=n[oe],P=a[oe],!n.hasOwnProperty(oe)||K===P||K===void 0&&P===void 0||rs(e,t,oe,K,n,P);return}}for(var I in a)K=a[I],a.hasOwnProperty(I)&&K!=null&&!n.hasOwnProperty(I)&&Ie(e,t,I,null,n,K);for(fe in n)K=n[fe],P=a[fe],!n.hasOwnProperty(fe)||K===P||K==null&&P==null||Ie(e,t,fe,K,n,P)}var os=null,ls=null;function Vr(e){return e.nodeType===9?e:e.ownerDocument}function Kf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cs=null;function wp(){var e=window.event;return e&&e.type==="popstate"?e===cs?!1:(cs=e,!0):(cs=null,!1)}var Ff=typeof setTimeout=="function"?setTimeout:void 0,_p=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,Sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(e){return Jf.resolve(null).then(e).catch(Tp)}:Ff;function Tp(e){setTimeout(function(){throw e})}function Ma(e){return e==="head"}function ed(e,t){var a=t,n=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var l=e.ownerDocument;if(a&1&&Ui(l.documentElement),a&2&&Ui(l.body),a&4)for(a=l.head,Ui(a),l=a.firstChild;l;){var x=l.nextSibling,U=l.nodeName;l[Kn]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=x}}if(i===0){e.removeChild(r),Ii(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);Ii(t)}function us(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":us(a),mo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ep(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Kn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function Ap(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qt(e.nextSibling),e===null))return null;return e}function fs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Np(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ds=null;function td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function ad(e,t,a){switch(t=Vr(a),e){case"html":if(e=t.documentElement,!e)throw Error(w(452));return e;case"head":if(e=t.head,!e)throw Error(w(453));return e;case"body":if(e=t.body,!e)throw Error(w(454));return e;default:throw Error(w(451))}}function Ui(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mo(e)}var It=new Map,nd=new Set;function Qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=Y.d;Y.d={f:Cp,r:kp,D:Op,C:Rp,L:jp,m:Dp,X:Up,S:zp,M:Mp};function Cp(){var e=va.f(),t=Hr();return e||t}function kp(e){var t=hn(e);t!==null&&t.tag===5&&t.type==="form"?_u(t):va.r(e)}var Vn=typeof document>"u"?null:document;function id(e,t,a){var n=Vn;if(n&&typeof t=="string"&&t){var i=Mt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),nd.has(i)||(nd.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),pt(t,"link",e),st(t),n.head.appendChild(t)))}}function Op(e){va.D(e),id("dns-prefetch",e,null)}function Rp(e,t){va.C(e,t),id("preconnect",e,t)}function jp(e,t,a){va.L(e,t,a);var n=Vn;if(n&&e&&t){var i='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Mt(a.imageSizes)+'"]')):i+='[href="'+Mt(e)+'"]';var r=i;switch(t){case"style":r=Qn(e);break;case"script":r=Wn(e)}It.has(r)||(e=S({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),It.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Mi(r))||t==="script"&&n.querySelector(Bi(r))||(t=n.createElement("link"),pt(t,"link",e),st(t),n.head.appendChild(t)))}}function Dp(e,t){va.m(e,t);var a=Vn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Mt(n)+'"][href="'+Mt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Wn(e)}if(!It.has(r)&&(e=S({rel:"modulepreload",href:e},t),It.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bi(r)))return}n=a.createElement("link"),pt(n,"link",e),st(n),a.head.appendChild(n)}}}function zp(e,t,a){va.S(e,t,a);var n=Vn;if(n&&e){var i=pn(n).hoistableStyles,r=Qn(e);t=t||"default";var l=i.get(r);if(!l){var x={loading:0,preload:null};if(l=n.querySelector(Mi(r)))x.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},a),(a=It.get(r))&&hs(e,a);var U=l=n.createElement("link");st(U),pt(U,"link",e),U._p=new Promise(function(Q,oe){U.onload=Q,U.onerror=oe}),U.addEventListener("load",function(){x.loading|=1}),U.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Wr(l,t,n)}l={type:"stylesheet",instance:l,count:1,state:x},i.set(r,l)}}}function Up(e,t){va.X(e,t);var a=Vn;if(a&&e){var n=pn(a).hoistableScripts,i=Wn(e),r=n.get(i);r||(r=a.querySelector(Bi(i)),r||(e=S({src:e,async:!0},t),(t=It.get(i))&&ps(e,t),r=a.createElement("script"),st(r),pt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Mp(e,t){va.M(e,t);var a=Vn;if(a&&e){var n=pn(a).hoistableScripts,i=Wn(e),r=n.get(i);r||(r=a.querySelector(Bi(i)),r||(e=S({src:e,async:!0,type:"module"},t),(t=It.get(i))&&ps(e,t),r=a.createElement("script"),st(r),pt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function rd(e,t,a,n){var i=(i=ge.current)?Qr(i):null;if(!i)throw Error(w(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Qn(a.href),a=pn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Qn(a.href);var r=pn(i).hoistableStyles,l=r.get(e);if(l||(i=i.ownerDocument||i,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=i.querySelector(Mi(e)))&&!r._p&&(l.instance=r,l.state.loading=5),It.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},It.set(e,a),r||Bp(i,e,a,l.state))),t&&n===null)throw Error(w(528,""));return l}if(t&&n!==null)throw Error(w(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wn(a),a=pn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(w(444,e))}}function Qn(e){return'href="'+Mt(e)+'"'}function Mi(e){return'link[rel="stylesheet"]['+e+"]"}function od(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Bp(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),pt(t,"link",a),st(t),e.head.appendChild(t))}function Wn(e){return'[src="'+Mt(e)+'"]'}function Bi(e){return"script[async]"+e}function ld(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Mt(a.href)+'"]');if(n)return t.instance=n,st(n),n;var i=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),st(n),pt(n,"style",i),Wr(n,a.precedence,e),t.instance=n;case"stylesheet":i=Qn(a.href);var r=e.querySelector(Mi(i));if(r)return t.state.loading|=4,t.instance=r,st(r),r;n=od(a),(i=It.get(i))&&hs(n,i),r=(e.ownerDocument||e).createElement("link"),st(r);var l=r;return l._p=new Promise(function(x,U){l.onload=x,l.onerror=U}),pt(r,"link",n),t.state.loading|=4,Wr(r,a.precedence,e),t.instance=r;case"script":return r=Wn(a.src),(i=e.querySelector(Bi(r)))?(t.instance=i,st(i),i):(n=a,(i=It.get(r))&&(n=S({},a),ps(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),st(i),pt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(w(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Wr(n,a.precedence,e));return t.instance}function Wr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,l=0;l<n.length;l++){var x=n[l];if(x.dataset.precedence===t)r=x;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function hs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ps(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Kr=null;function sd(e,t,a){if(Kr===null){var n=new Map,i=Kr=new Map;i.set(a,n)}else i=Kr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[Kn]||r[vt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var x=n.get(l);x?x.push(r):n.set(l,[r])}}return n}function cd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Yp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ud(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Yi=null;function Hp(){}function Lp(e,t,a){if(Yi===null)throw Error(w(475));var n=Yi;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Qn(a.href),r=e.querySelector(Mi(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Pr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,st(r);return}r=e.ownerDocument||e,a=od(a),(i=It.get(i))&&hs(a,i),r=r.createElement("link"),st(r);var l=r;l._p=new Promise(function(x,U){l.onload=x,l.onerror=U}),pt(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Pr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function qp(){if(Yi===null)throw Error(w(475));var e=Yi;return e.stylesheets&&e.count===0&&ms(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&ms(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Pr(){if(this.count--,this.count===0){if(this.stylesheets)ms(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fr=null;function ms(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fr=new Map,t.forEach(Gp,e),Fr=null,Pr.call(e))}function Gp(e,t){if(!(t.state.loading&4)){var a=Fr.get(e);if(a)var n=a.get(null);else{a=new Map,Fr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var l=i[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(a.set(l.dataset.precedence,l),n=l)}n&&a.set(null,n)}i=t.instance,l=i.getAttribute("data-precedence"),r=a.get(l)||n,r===n&&a.set(null,i),a.set(l,i),this.count++,n=Pr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Hi={$$typeof:M,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function Ip(e,t,a,n,i,r,l,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.hiddenUpdates=cn(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function fd(e,t,a,n,i,r,l,x,U,Q,oe,fe){return e=new Ip(e,t,a,l,x,U,Q,fe),t=1,r===!0&&(t|=24),r=Nt(3,null,null,t),e.current=r,r.stateNode=e,t=Ko(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},el(r),e}function dd(e){return e?(e=An,e):An}function hd(e,t,a,n,i,r){i=dd(i),n.context===null?n.context=i:n.pendingContext=i,n=Sa(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=Ta(e,n,t),a!==null&&(jt(a,e,t),mi(a,e,t))}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function vs(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function md(e){if(e.tag===13){var t=En(e,67108864);t!==null&&jt(t,e,67108864),vs(e,67108864)}}var Jr=!0;function Zp(e,t,a,n){var i=Z.T;Z.T=null;var r=Y.p;try{Y.p=2,ys(e,t,a,n)}finally{Y.p=r,Z.T=i}}function $p(e,t,a,n){var i=Z.T;Z.T=null;var r=Y.p;try{Y.p=8,ys(e,t,a,n)}finally{Y.p=r,Z.T=i}}function ys(e,t,a,n){if(Jr){var i=gs(n);if(i===null)is(e,t,n,eo,a),yd(e,n);else if(Vp(i,e,t,a,n))n.stopPropagation();else if(yd(e,n),t&4&&-1<Xp.indexOf(e)){for(;i!==null;){var r=hn(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=Zt(r.pendingLanes);if(l!==0){var x=r;for(x.pendingLanes|=2,x.entangledLanes|=2;l;){var U=1<<31-Xe(l);x.entanglements[1]|=U,l&=~U}Jt(r),(He&6)===0&&(Br=D()+500,ji(0))}}break;case 13:x=En(r,2),x!==null&&jt(x,r,2),Hr(),vs(r,2)}if(r=gs(n),r===null&&is(e,t,n,eo,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else is(e,t,n,null,a)}}function gs(e){return e=So(e),bs(e)}var eo=null;function bs(e){if(eo=null,e=dn(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=u(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return eo=e,null}function vd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(O()){case G:return 2;case he:return 8;case pe:case W:return 32;case ve:return 268435456;default:return 32}default:return 32}}var xs=!1,Ba=null,Ya=null,Ha=null,Li=new Map,qi=new Map,La=[],Xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yd(e,t){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(t.pointerId)}}function Gi(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=hn(t),t!==null&&md(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vp(e,t,a,n,i){switch(t){case"focusin":return Ba=Gi(Ba,e,t,a,n,i),!0;case"dragenter":return Ya=Gi(Ya,e,t,a,n,i),!0;case"mouseover":return Ha=Gi(Ha,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return Li.set(r,Gi(Li.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,qi.set(r,Gi(qi.get(r)||null,e,t,a,n,i)),!0}return!1}function gd(e){var t=dn(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=u(a),t!==null){e.blockedOn=t,Ld(e.priority,function(){if(a.tag===13){var n=Rt();n=fo(n);var i=En(a,n);i!==null&&jt(i,a,n),vs(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=gs(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);_o=n,a.target.dispatchEvent(n),_o=null}else return t=hn(a),t!==null&&md(t),e.blockedOn=a,!1;t.shift()}return!0}function bd(e,t,a){to(e)&&a.delete(t)}function Qp(){xs=!1,Ba!==null&&to(Ba)&&(Ba=null),Ya!==null&&to(Ya)&&(Ya=null),Ha!==null&&to(Ha)&&(Ha=null),Li.forEach(bd),qi.forEach(bd)}function ao(e,t){e.blockedOn===t&&(e.blockedOn=null,xs||(xs=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Qp)))}var no=null;function xd(e){no!==e&&(no=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){no===e&&(no=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(bs(n||a)===null)continue;break}var r=hn(a);r!==null&&(e.splice(t,3),t-=3,bl(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Ii(e){function t(U){return ao(U,e)}Ba!==null&&ao(Ba,e),Ya!==null&&ao(Ya,e),Ha!==null&&ao(Ha,e),Li.forEach(t),qi.forEach(t);for(var a=0;a<La.length;a++){var n=La[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)gd(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],l=i[wt]||null;if(typeof r=="function")l||xd(a);else if(l){var x=null;if(r&&r.hasAttribute("formAction")){if(i=r,l=r[wt]||null)x=l.formAction;else if(bs(i)!==null)continue}else x=l.action;typeof x=="function"?a[n+1]=x:(a.splice(n,3),n-=3),xd(a)}}}function ws(e){this._internalRoot=e}io.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));var a=t.current,n=Rt();hd(a,n,e,t,null,null)},io.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hd(e.current,2,null,e,null,null),Hr(),t[fn]=null}};function io(e){this._internalRoot=e}io.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ms();e={blockedOn:null,target:e,priority:t};for(var a=0;a<La.length&&t!==0&&t<La[a].priority;a++);La.splice(a,0,e),a===0&&gd(e)}};var wd=R.version;if(wd!=="19.1.0")throw Error(w(527,wd,"19.1.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=v(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Wp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{_e=ro.inject(Wp),Oe=ro}catch{}}return $i.createRoot=function(e,t){if(!N(e))throw Error(w(299));var a=!1,n="",i=Mu,r=Bu,l=Yu,x=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(x=t.unstable_transitionCallbacks)),t=fd(e,1,!1,null,null,a,n,i,r,l,x,null),e[fn]=t.current,ns(e),new ws(t)},$i.hydrateRoot=function(e,t,a){if(!N(e))throw Error(w(299));var n=!1,i="",r=Mu,l=Bu,x=Yu,U=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(U=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),t=fd(e,1,!0,t,a??null,n,i,r,l,x,U,Q),t.context=dd(null),a=t.current,n=Rt(),n=fo(n),i=Sa(n),i.callback=null,Ta(a,i,n),a=n,t.current.lanes=a,$t(t,a),Jt(t),e[fn]=t.current,ns(e),new io(t)},$i.version="19.1.0",$i}var Rd;function rm(){if(Rd)return Ts.exports;Rd=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(R){console.error(R)}}return p(),Ts.exports=im(),Ts.exports}var om=rm();const lm=[{value:"ar",label:"Arabic (ar)"},{value:"ar-SA",label:"Arabic - Saudi Arabia (ar-SA)"},{value:"eu",label:"Basque (eu)"},{value:"eu-ES",label:"Basque - Spain (eu-ES)"},{value:"zh",label:"Chinese (zh)"},{value:"zh-Hans",label:"Chinese - Simplified (zh-Hans)"},{value:"zh-Hant",label:"Chinese - Traditional (zh-Hant)"},{value:"zh-CN",label:"Chinese - China (zh-CN)"},{value:"zh-TW",label:"Chinese - Taiwan (zh-TW)"},{value:"nl",label:"Dutch (nl)"},{value:"nl-NL",label:"Dutch - Netherlands (nl-NL)"},{value:"en",label:"English (en)"},{value:"en-AU",label:"English - Australia (en-AU)"},{value:"en-CA",label:"English - Canada (en-CA)"},{value:"en-GB",label:"English - United Kingdom (en-GB)"},{value:"en-IE",label:"English - Ireland (en-IE)"},{value:"en-US",label:"English - United States (en-US)"},{value:"fr",label:"French (fr)"},{value:"fr-CA",label:"French - Canada (fr-CA)"},{value:"fr-FR",label:"French - France (fr-FR)"},{value:"de",label:"German (de)"},{value:"de-DE",label:"German - Germany (de-DE)"},{value:"hi",label:"Hindi (hi)"},{value:"hi-IN",label:"Hindi - India (hi-IN)"},{value:"hu",label:"Hungarian (hu)"},{value:"it",label:"Italian (it)"},{value:"it-IT",label:"Italian - Italy (it-IT)"},{value:"ja",label:"Japanese (ja)"},{value:"ja-JP",label:"Japanese - Japan (ja-JP)"},{value:"ko",label:"Korean (ko)"},{value:"ko-KR",label:"Korean - South Korea (ko-KR)"},{value:"pt",label:"Portuguese (pt)"},{value:"pt-BR",label:"Portuguese - Brazil (pt-BR)"},{value:"pt-PT",label:"Portuguese - Portugal (pt-PT)"},{value:"es",label:"Spanish (es)"},{value:"es-ES",label:"Spanish - Spain (es-ES)"},{value:"es-MX",label:"Spanish - Mexico (es-MX)"},{value:"sv",label:"Swedish (sv)"},{value:"sv-FI",label:"Swedish - Finland (sv-FI)"},{value:"gl",label:"Galician (gl)"},{value:"gl-ES",label:"Galician - Spain (gl-ES)"},{value:"th",label:"Thai (th)"},{value:"th-TH",label:"Thai - Thailand (th-TH)"},{value:"vi",label:"Vietnamese (vi)"},{value:"ru",label:"Russian (ru)"},{value:"ru-RU",label:"Russian - Russia (ru-RU)"}],sm=[{value:"system",label:"System Default"},{value:"Arial, sans-serif",label:"Arial"},{value:"Helvetica, Arial, sans-serif",label:"Helvetica"},{value:"Verdana, Geneva, sans-serif",label:"Verdana"},{value:"Tahoma, Geneva, sans-serif",label:"Tahoma"},{value:"'Trebuchet MS', Helvetica, sans-serif",label:"Trebuchet MS"},{value:"'Arial Black', Gadget, sans-serif",label:"Arial Black"},{value:"Impact, Charcoal, sans-serif",label:"Impact"},{value:"'Lucida Sans Unicode', 'Lucida Grande', sans-serif",label:"Lucida Sans"},{value:"Georgia, serif",label:"Georgia"},{value:"'Times New Roman', Times, serif",label:"Times New Roman"},{value:"'Book Antiqua', Palatino, serif",label:"Book Antiqua"},{value:"Palatino, 'Palatino Linotype', serif",label:"Palatino"},{value:"Times, serif",label:"Times"},{value:"'Courier New', Courier, monospace",label:"Courier New"},{value:"'Lucida Console', Monaco, monospace",label:"Lucida Console"},{value:"Monaco, 'Menlo', monospace",label:"Monaco"},{value:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",label:"System UI"},{value:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",label:"Segoe UI (Windows)"},{value:"-apple-system, 'SF Pro Display', sans-serif",label:"SF Pro (Apple)"},{value:"'Roboto', Arial, sans-serif",label:"Roboto"},{value:"'Open Sans', Arial, sans-serif",label:"Open Sans"},{value:"'Lato', Arial, sans-serif",label:"Lato"},{value:"'Montserrat', Arial, sans-serif",label:"Montserrat"},{value:"'Poppins', Arial, sans-serif",label:"Poppins"},{value:"'Inter', Arial, sans-serif",label:"Inter"}],cm="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let um=(p=21)=>{let R="",g=crypto.getRandomValues(new Uint8Array(p|=0));for(;p--;)R+=cm[g[p]&63];return R};function fm({formData:p,onImageInsert:R}){const[g,w]=We.useState({imageSize:"1024x1024"}),[N,m]=We.useState(!1),[u,f]=We.useState(null),[v,b]=We.useState("none"),[S,k]=We.useState(null),[T,y]=We.useState(null),[A,d]=We.useState(""),[c,_]=We.useState("none"),[E,M]=We.useState(""),[q,H]=We.useState(null),ne=Y=>{if(!Y)return null;const se=/<h2[^>]*>(.*?)<\/h2>/gi,J=[];let C;const j=[];for(;(C=se.exec(Y))!==null;)j.push({heading:C[1].replace(/<[^>]*>/g,"").trim(),startIndex:C.index,endIndex:C.index+C[0].length});for(let le=0;le<j.length;le++){const ge=j[le],Me=j[le+1],we=ge.endIndex,Ce=Me?Me.startIndex:Y.length,Ke=Y.substring(we,Ce),qe=/^\s*<img[^>]*>/i.test(Ke),mt=/<p[^>]*>(.*?)<\/p>/gi,nt=[];let s;for(;(s=mt.exec(Ke))!==null;){const ce=s[1].replace(/<[^>]*>/g,"").trim();ce.length>0&&nt.push(ce)}nt.length>0&&J.push({heading:ge.heading,paragraphs:nt,fullText:ge.heading+" "+nt.join(" "),htmlStartPos:ge.startIndex,htmlEndPos:Ce,hasImage:qe})}if(J.length===0)return console.log("No sections with paragraphs found"),null;let ee=J.slice(0,3).filter(le=>!le.hasImage);return ee.length===0&&(ee=J.filter(le=>!le.hasImage)),ee.length===0?(console.log("All sections already have images!"),{allHaveImages:!0}):ee[Math.floor(Math.random()*ee.length)]},F=(Y,{id:se=null,floatValue:J=v,altValue:C=Y.alt}={})=>{let j="img-fluid rounded";switch(J){case"start":j+=" float-md-start mb-2 mb-md-0 me-md-3 d-block mx-auto";break;case"end":j+=" float-md-end mb-2 mb-md-0 ms-md-3 d-block mx-auto";break;case"center":j+=" d-block mx-auto mb-2";break;default:j+=" mb-2";break}const B=C&&C.trim().length>0?C.trim():"Image alt",ee=se?` data-ai-id="${se}"`:"";return`<img src="${Y.url}" alt="${B}" class="${j}"${ee} width="320" height="320">`},X=Y=>{let se;if(!Y)se="Image";else if(se=`Image related to ${Y.heading}`,Y.paragraphs&&Y.paragraphs.length>0){const C=Y.paragraphs.slice(0,2).join(" "),j=200,B=C.length>j?C.substring(0,j)+"...":C;se+=`, showing ${B}`}return se.length>800&&(se=se.substring(0,797)+"..."),se},$=Y=>!Y||!Y.heading?"":Y.heading.toLowerCase().replace(/[^a-zA-Z0-9\s]/g,"").replace(/\s+/g,"-").substring(0,30),de=async()=>{if(!p.mainContent||N){p.mainContent||alert("Please add some content to your page first.");return}m(!0);try{let Y=null;if(p.mainContent){if(Y=ne(p.mainContent),Y&&Y.allHaveImages){alert("All sections already have an image under their heading. Remove an existing image first to add a new one."),m(!1);return}if(!Y){alert("No suitable sections found for image generation. Please add some headings and paragraphs to your content."),m(!1);return}k(Y)}const se=X(Y),J=await fetch("https://one-page-builder.vercel.app/api/images",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:se,size:g.imageSize||"1024x1024",enhancePrompt:!0})});if(!J.ok){const re=await J.json();throw new Error(re.error||"Failed to generate image")}const C=await J.json(),j=C.data[0].b64_json,B=`data:image/jpeg;base64,${j}`;console.log("📝 Original prompt:",C.data[0].original_prompt),console.log("✨ Enhanced prompt:",C.data[0].revised_prompt);const ee=$(Y);M(ee),f({url:B,prompt:C.data[0].revised_prompt,originalPrompt:C.data[0].original_prompt,b64_json:j,alt:`Image for ${Y.heading}`}),console.log("Image generated successfully with enhanced prompt")}catch(Y){console.error("Image generation error:",Y),alert("Error generating image: "+Y.message)}m(!1)},me=()=>{const Y=Date.now();if(E&&E.trim()){const se=E.trim().replace(/[^a-zA-Z0-9\-_]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"").toLowerCase();return se?`${se}.jpg`:`ai-image-${Y}.jpg`}return`ai-image-${Y}.jpg`},z=()=>E&&E.trim().length>0,ae=Y=>{if(!z()){alert("Please enter a custom image name before inserting.");return}const se=p.mainContent||"",J=um(),C={id:J,filename:me(),b64_json:Y.b64_json,prompt:Y.prompt,alt:"",isTemporary:!0},j=F({url:`data:image/jpeg;base64,${Y.b64_json}`,alt:""},{id:J,floatValue:"none",altValue:""});if(S&&S.heading){const ee=S.heading,re=new RegExp(`(<h2[^>]*>\\s*${ee.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}\\s*</h2>)`,"i");if(re.test(se)){const le=se.replace(re,`$1
${j}`);R(le),f(null),k(null),y(J),d(""),_(v),H(C);return}}const B=se+`
`+j;R(B),y(J),d(""),_(v),f(null),k(null),H(C)},h=()=>{if(!q){console.log("No temporary image data to save");return}const Y={...q,alt:A||q.alt,isTemporary:!1};R(p.mainContent,Y),console.log("✅ Image saved to files:",Y.filename),H(null),y(null),d(""),_("none"),M("")},ie=()=>{if(!T)return;const Y=p.mainContent||"",se=new RegExp(`<img[^>]*data-ai-id=["']${T}["'][^>]*>`,"i"),J=Y.match(se);if(!J)return;const C=J[0].match(/src=["']([^"']+)["']/i),j=C?C[1]:"",B=F({url:j,alt:A},{id:T,floatValue:c,altValue:A}),ee=Y.replace(se,B);R(ee),q&&H({...q,alt:A})},Z=()=>{if(!T)return;const Y=p.mainContent||"",se=new RegExp(`<img[^>]*data-ai-id=["']${T}["'][^>]*>`,"i"),J=Y.replace(se,"");R(J),y(null),d(""),_("none"),H(null),M("")};return o.jsxs("div",{className:"ai-image-generator",children:[o.jsx("h3",{children:"AI Image Generator"}),o.jsx("button",{type:"button",className:"btn btn-primary",onClick:de,disabled:!0,title:p.mainContent?N?"Generating image...":"Generate AI image":"Add content to your page first",children:N?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Generating..."]}):"🎨 Generate Image"}),u&&o.jsxs("div",{className:"mt-4",children:[o.jsx("h4",{children:"Generated Image"}),S&&o.jsxs("div",{className:"alert alert-info mb-3",children:[o.jsx("h6",{className:"mb-2",children:"📍 This image will be added to section:"}),o.jsxs("strong",{children:['"',S.heading,'"']}),S.paragraphs&&S.paragraphs.length>0&&o.jsxs("p",{className:"mb-0 mt-2 text-muted small",children:[S.paragraphs[0].substring(0,100),S.paragraphs[0].length>100?"...":""]})]}),o.jsxs("div",{className:"generated-image-preview",children:[o.jsx("img",{src:u.url,alt:"Generated image",style:{maxWidth:"100%",maxHeight:"320px"},className:"img-fluid border rounded mb-3"}),o.jsxs("div",{className:"mb-3",children:[o.jsxs("label",{className:"form-label",children:["Custom Image Name ",o.jsx("span",{className:"text-danger",children:"*"}),o.jsx("small",{className:"text-muted ms-2",children:"(required to insert)"})]}),o.jsx("input",{type:"text",className:`form-control ${E.trim()?"is-valid":E?"is-invalid":""}`,value:E,onChange:Y=>M(Y.target.value),placeholder:"e.g., hero-banner, casino-games, payment-methods",maxLength:"50",required:!0}),E&&!E.trim()&&o.jsx("div",{className:"invalid-feedback",children:"Image name cannot be empty or just spaces."}),E.trim()&&o.jsxs("div",{className:"valid-feedback",children:["Filename: ",o.jsx("code",{children:me()})]}),!E&&o.jsx("small",{className:"form-text text-muted",children:"Choose a descriptive name based on the section content"})]}),o.jsxs("div",{className:"d-flex gap-2",children:[o.jsxs("button",{className:"btn btn-success",onClick:()=>ae(u),disabled:!z(),title:z()?"Insert image into section":"Enter a custom image name first",children:["✅ Insert Image",!z()&&o.jsx("span",{className:"text-muted ms-1",children:"(Name Required)"})]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>{f(null),M(""),k(null)},children:"❌ Discard"})]})]})]}),T&&!u&&o.jsxs("div",{className:"mt-4 border rounded p-3",children:[o.jsx("h5",{children:"Edit Inserted Image"}),o.jsx("div",{className:"alert alert-warning mb-3",children:o.jsxs("small",{children:["📝 ",o.jsx("strong",{children:"Preview Mode:"}),' This image is only visible in preview. Click "Save to Files" to include it in your downloaded website.']})}),o.jsxs("div",{className:"row g-3",children:[o.jsxs("div",{className:"col-md-6",children:[o.jsx("label",{className:"form-label",children:"Alt text"}),o.jsx("input",{className:"form-control",value:A,onChange:Y=>d(Y.target.value),placeholder:"Accessible alt text"})]}),o.jsxs("div",{className:"col-md-4",children:[o.jsx("label",{className:"form-label",children:"Float"}),o.jsxs("select",{className:"form-control",value:c,onChange:Y=>_(Y.target.value),children:[o.jsx("option",{value:"none",children:"Default"}),o.jsx("option",{value:"start",children:"Left"}),o.jsx("option",{value:"end",children:"Right"}),o.jsx("option",{value:"center",children:"Center"})]})]}),o.jsx("div",{className:"col-md-2 d-flex align-items-end",children:o.jsx("button",{className:"btn btn-primary w-100",onClick:ie,children:"Apply"})})]}),o.jsxs("div",{className:"mt-3 d-flex gap-2",children:[o.jsx("button",{className:"btn btn-success",onClick:h,disabled:!q,title:"Save image to files for download",children:"💾 Save to Files"}),o.jsx("button",{className:"btn btn-outline-danger",onClick:Z,children:"🗑️ Remove from Preview"})]}),o.jsxs("small",{className:"text-muted d-block mt-2",children:["• Editing image with id: ",T,o.jsx("br",{}),"• Status: ",q?"Preview only":"Not saved",q&&o.jsxs(o.Fragment,{children:[o.jsx("br",{}),"• Filename when saved:"," ",o.jsx("code",{children:q.filename})]})]})]})]})}function dm({formData:p,setFormData:R,globalSettings:g,setGlobalSettings:w,currentPage:N,onImageInsert:m}){const[u,f]=We.useState("page"),v=We.useRef({bodyBg:null,favicon:null,logo:null,heroBg:null}),b=(c,_=null)=>{m?m(c,_):R(E=>({...E,mainContent:c}))},S=(c,_)=>{w(E=>({...E,[c]:_}))},k=(c,_)=>{R(E=>({...E,[c]:_}))},T=(c,_)=>{if(_){const E=new FileReader;E.onload=M=>{c==="logo"?S("logo",M.target.result):c==="favicon"?S("favicon",M.target.result):c==="heroBg"?S("heroBg",M.target.result):c==="bodyBg"&&S("bodyBg",M.target.result)},E.readAsDataURL(_)}},y=c=>{S(c,"");const _=v.current[c];_&&(_.value="")},A=()=>{if(!p.mainContent||!p.boldWords)return;let c=p.mainContent;p.boldWords.split(",").map(E=>E.trim()).filter(E=>E.length>0).forEach(E=>{const M=E.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),q=new RegExp(`(?<!<[^>]*>)(?<!<h[1-6][^>]*>)(?<!<h[1-6][^>]*>[^<]*)\\b(${M})\\b(?![^<]*</h[1-6]>)(?![^<]*>)(?!</strong>)`,"gi"),H=[];let ne;for(;(ne=q.exec(c))!==null;)H.push({match:ne[0],index:ne.index,length:ne[0].length}),q.lastIndex===ne.index&&q.lastIndex++;if(H.length>0){console.log(`🎲 Found ${H.length} occurrences of "${E}"`);const F=Math.floor(Math.random()*H.length),X=H[F];console.log(`🎯 Selected occurrence #${F+1} at position ${X.index}`);const $=c.substring(0,X.index),de=c.substring(X.index+X.length),me=`<strong>${X.match}</strong>`;c=$+me+de}}),k("mainContent",c),k("boldWords","")},d=c=>{const E=(M=>!M||M.trim()===""?"":/<[^>]+>/.test(M)?M:M.split(`
`).map(H=>H.trim()).filter(H=>H!=="").map(H=>`<p>${H}</p>`).join(`
`))(c);k("afterH1",E)};return o.jsxs("div",{className:"builder-form",children:[o.jsxs("div",{className:"form-tabs",children:[o.jsx("button",{className:`tab-btn ${u==="page"?"active":""}`,onClick:()=>f("page"),children:"Page Content"}),o.jsx("button",{className:`tab-btn ${u==="global"?"active":""}`,onClick:()=>f("global"),children:"Global Settings"}),o.jsx("button",{className:`tab-btn ${u==="style"?"active":""}`,onClick:()=>f("style"),children:"Styling"}),o.jsx("button",{className:`tab-btn ${u==="ai-images"?"active":""}`,onClick:()=>f("ai-images"),children:"AI Images"}),o.jsx("button",{className:`tab-btn ${u==="privacy"?"active":""}`,onClick:()=>f("privacy"),children:"Privacy or Terms"})]}),u==="page"&&o.jsxs("div",{className:"tab-content",children:[o.jsxs("h3",{children:[(N==null?void 0:N.title)||"Page"," Content"]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Page Title (SEO)"}),o.jsx("input",{type:"text",className:"form-control",value:p.title||"",onChange:c=>k("title",c.target.value),placeholder:"Page title for browser tab and SEO"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Meta Description"}),o.jsx("textarea",{className:"form-control",rows:"2",value:p.desc||"",onChange:c=>k("desc",c.target.value),placeholder:"Brief description for search engines"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Heading (H1)"}),o.jsx("input",{type:"text",className:"form-control",value:p.h1||"",onChange:c=>k("h1",c.target.value),placeholder:"Main heading that visitors see first"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Subtext"}),o.jsx("textarea",{className:"form-control",rows:"3",value:p.afterH1||"",onChange:c=>d(c.target.value),placeholder:"Text that appears below the main heading"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("label",{children:["Main Content(The content must be valid HTML. For example:"," ",o.jsx("code",{children:"<h2>Heading</h2>"}),")"]}),o.jsx("textarea",{className:"form-control",rows:"12",value:p.mainContent||"",onChange:c=>k("mainContent",c.target.value),placeholder:"HTML content for this page (use <h2> for sections, <p> for paragraphs)"}),o.jsx("small",{className:"form-text text-muted",children:"Use HTML tags like <h2>Section Title</h2> and <p>Paragraph text</p>"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Bold Words (Optional)"}),o.jsx("input",{type:"text",className:"form-control",value:p.boldWords||"",onChange:c=>k("boldWords",c.target.value),placeholder:"Enter words to make bold, one by one or separated by commas (e.g., important, featured, special)"}),o.jsx("small",{className:"form-text text-muted",children:"Type words one by one or all separated by commas. Only the first occurrence of each word will be bolded."}),o.jsx("button",{type:"button",className:"btn btn-sm btn-secondary mt-2 ms-2",onClick:A,disabled:!p.mainContent||!p.boldWords,children:"Apply Bold Words"})]})]}),u==="global"&&o.jsxs("div",{className:"tab-content",children:[o.jsx("h3",{children:"Global Settings"}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Website Domain name"}),o.jsx("input",{type:"text",className:"form-control",value:g.domain||"",onChange:c=>S("domain",c.target.value),placeholder:"yourdomain.com"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Website full URL"}),o.jsx("input",{type:"text",className:"form-control",value:g.url||"",onChange:c=>S("url",c.target.value),placeholder:"Enter your website URL (e.g., https://yourdomain.com)"}),o.jsx("small",{className:"form-text text-muted",children:"The url will be used in the robots.txt, sitemap and htaccess files also."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Website Name"}),o.jsx("input",{type:"text",className:"form-control",value:g.name||"",onChange:c=>S("name",c.target.value),placeholder:"Your Website Name"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Website Language"}),o.jsx("select",{className:"form-control",value:g.lang||"en",onChange:c=>S("lang",c.target.value),children:lm.map(c=>o.jsx("option",{value:c.value,children:c.label},c.value))}),o.jsx("small",{className:"form-text text-muted",children:"Select the language code for your website"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Website Email"}),o.jsx("input",{type:"email",className:"form-control",value:g.email||"",onChange:c=>S("email",c.target.value),placeholder:"Website contact email"}),o.jsx("small",{className:"form-text text-muted",children:"This email will be used in footer and Terms or Privacy pages."})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"checkbox",checked:g.sidebar||!1,onChange:c=>S("sidebar",c.target.checked),id:"sidebarCheckbox"}),o.jsx("label",{className:"form-check-label ",htmlFor:"sidebarCheckbox",children:"Enable Sidebar"})]}),o.jsx("small",{className:"form-text text-muted",children:"Check to display a sidebar on all pages. Default is off."})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"checkbox",checked:g.contactPage||!1,onChange:c=>S("contactPage",c.target.checked),id:"contactPageCheckbox"}),o.jsx("label",{className:"form-check-label ",htmlFor:"contactPageCheckbox",children:"Add Contact Page"})]}),o.jsx("small",{className:"form-text text-muted",children:"Check to add a contact page. Default is off."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Logo"}),o.jsx("input",{type:"file",className:"form-control",accept:"image/*",ref:c=>v.current.logo=c,onChange:c=>T("logo",c.target.files[0]),onClick:c=>{c.target.value=""}}),g.logo&&o.jsxs("div",{className:"file-preview",children:[o.jsx("img",{src:g.logo,alt:"Logo",style:{maxWidth:"180px",maxHeight:"90px"}}),o.jsx("button",{type:"button",className:"btn btn-sm btn-danger ms-2",onClick:()=>y("logo"),children:"Remove"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Favicon"}),o.jsx("input",{type:"file",className:"form-control",accept:"image/*",ref:c=>v.current.favicon=c,onChange:c=>T("favicon",c.target.files[0]),onClick:c=>{c.target.value=""}}),g.favicon&&o.jsxs("div",{className:"file-preview",children:[o.jsx("img",{src:g.favicon,alt:"Favicon",style:{maxWidth:"48px",maxHeight:"48px",marginTop:"5px"}}),o.jsx("button",{type:"button",className:"btn btn-sm btn-danger ms-2",onClick:()=>{y("favicon")},children:"Remove"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Background Image (All Pages)"}),o.jsx("input",{type:"file",className:"form-control",accept:"image/*",ref:c=>v.current.heroBg=c,onChange:c=>T("heroBg",c.target.files[0]),onClick:c=>{c.target.value=""}}),g.heroBg&&o.jsxs("div",{className:"file-preview",children:[o.jsx("img",{src:g.heroBg,alt:"Hero background",style:{maxWidth:"180px",maxHeight:"110px"}}),o.jsx("button",{type:"button",className:"btn btn-sm btn-danger ms-2",onClick:()=>y("heroBg"),children:"Remove"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Body Background Image (All Pages)"}),o.jsx("input",{type:"file",className:"form-control",accept:"image/*",ref:c=>v.current.bodyBg=c,onChange:c=>T("bodyBg",c.target.files[0]),onClick:c=>{c.target.value=""}}),g.bodyBg&&o.jsxs("div",{className:"file-preview",children:[o.jsx("img",{src:g.bodyBg,alt:"Body background",style:{maxWidth:"180px",maxHeight:"110px"}}),o.jsx("button",{type:"button",className:"btn btn-sm btn-danger ms-2",onClick:()=>y("bodyBg"),children:"Remove"})]})]})]}),u==="style"&&o.jsxs("div",{className:"tab-content",children:[o.jsx("h3",{children:"Global Styling"}),o.jsx("p",{className:"text-muted",children:"These styles apply to all pages"}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Font Family"}),o.jsx("select",{className:"form-control",value:g.fontFamily||"system",onChange:c=>S("fontFamily",c.target.value),children:sm.map(c=>o.jsx("option",{value:c.value,children:c.label},c.value))})]}),o.jsxs("div",{className:"style-section",children:[o.jsx("h4",{className:"section-title",children:"Header"}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-lg-8",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Navigation style:"}),o.jsxs("select",{className:"form-control",value:g.navStyle||"1",onChange:c=>S("navStyle",c.target.value),children:[o.jsx("option",{value:"1",children:"1"}),o.jsx("option",{value:"2",children:"2"}),o.jsx("option",{value:"3",children:"3"}),o.jsx("option",{value:"4",children:"4"})]})]})}),o.jsxs("div",{className:"col-lg-4",children:[o.jsx("div",{className:"form-group",children:o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"checkbox",checked:g.stickyNavbar||!1,onChange:c=>S("stickyNavbar",c.target.checked)}),o.jsx("label",{className:"form-check-label",children:"Sticky Navigation Bar"})]})}),o.jsx("div",{className:"form-group",children:o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"checkbox",checked:g.transparentHero||!1,onChange:c=>S("transparentHero",c.target.checked)}),o.jsx("label",{className:"form-check-label",children:"Transparent Background"})]})})]}),o.jsx("div",{className:"col-lg-4 col-xl-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Navigation Background Color"}),o.jsx("input",{type:"color",className:"form-control",value:g.headerBgColor||"#ffffffff",onChange:c=>S("headerBgColor",c.target.value)})]})}),o.jsx("div",{className:"col-lg-4 col-xl-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Text Color"}),o.jsx("input",{type:"color",className:"form-control",value:g.headerTextColor||"#ffffff",onChange:c=>S("headerTextColor",c.target.value)})]})}),o.jsx("div",{className:"col-lg-4 col-xl-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Gradient Color 1"}),o.jsx("input",{type:"color",className:"form-control",value:g.heroGradient1||"#168295",onChange:c=>S("heroGradient1",c.target.value)})]})}),o.jsx("div",{className:"col-lg-4 col-xl-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Gradient Color 2"}),o.jsx("input",{type:"color",className:"form-control",value:g.heroGradient2||"#0b5e3a",onChange:c=>S("heroGradient2",c.target.value)})]})}),o.jsx("div",{className:"col-lg-4 col-xl-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Nav links color"}),o.jsx("input",{type:"color",className:"form-control",value:g.navLinkColor||"#222222",onChange:c=>S("navLinkColor",c.target.value)})]})})]})]}),o.jsxs("div",{className:"style-section",children:[o.jsx("h4",{className:"section-title",children:"Main Content"}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-xl-3 col-lg-6",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Body Background Color"}),o.jsx("input",{type:"color",className:"form-control",value:g.bodyBgColor||"#f8fafc",onChange:c=>S("bodyBgColor",c.target.value)})]})}),o.jsx("div",{className:"col-xl-3 col-lg-6",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Body Text Color"}),o.jsx("input",{type:"color",className:"form-control",value:g.bodyTextColor||"#222222",onChange:c=>S("bodyTextColor",c.target.value)})]})}),o.jsx("div",{className:"col-xl-3 col-lg-6",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Headings Color"}),o.jsx("input",{type:"color",className:"form-control",value:g.headingColor||"#222222",onChange:c=>S("headingColor",c.target.value)})]})}),o.jsx("div",{className:"col-xl-3 col-lg-6",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Link Color"}),o.jsx("input",{type:"color",className:"form-control",value:g.linkColor||"#2563eb",onChange:c=>S("linkColor",c.target.value)})]})}),o.jsx("div",{className:"col-9",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"H2 Styles"}),o.jsxs("select",{className:"form-control",value:g.headingsStyle||"1",onChange:c=>S("headingsStyle",c.target.value),children:[o.jsx("option",{value:"1",children:"None"}),o.jsx("option",{value:"2",children:"Underline"}),o.jsx("option",{value:"3",children:"Dashed underline"}),o.jsx("option",{value:"4",children:"Top and bottom lines"}),o.jsx("option",{value:"5",children:"Left border"}),o.jsx("option",{value:"6",children:"Lines on both sides"})]})]})}),o.jsx("div",{className:"col-lg-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Body pattern"}),o.jsxs("select",{className:"form-control",value:g.bodyPattern||"1",onChange:c=>S("bodyPattern",c.target.value),children:[o.jsx("option",{value:"0",children:"None"}),o.jsx("option",{value:"1",children:"1"}),o.jsx("option",{value:"2",children:"2"}),o.jsx("option",{value:"3",children:"3"}),o.jsx("option",{value:"4",children:"4"}),o.jsx("option",{value:"5",children:"5"})]})]})})]})]}),o.jsxs("div",{className:"style-section",children:[o.jsx("h4",{className:"section-title",children:"Footer"}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-lg-9",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Footer Style:"}),o.jsxs("select",{className:"form-control",value:g.footerStyle||"1",onChange:c=>S("footerStyle",c.target.value),children:[o.jsx("option",{value:"1",children:"Style 1"}),o.jsx("option",{value:"2",children:"Style 2"}),o.jsx("option",{value:"3",children:"Style 3"})]})]})}),o.jsx("div",{className:"col-lg-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Scroll to top button:"}),o.jsx("input",{className:"form-check-input",type:"checkbox",checked:g.scrollToTop||!1,onChange:c=>S("scrollToTop",c.target.checked)})]})}),o.jsx("div",{className:"col-lg-4",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"White logo"}),o.jsx("input",{className:"form-check-input",type:"checkbox",checked:g.whiteLogo||!1,onChange:c=>S("whiteLogo",c.target.checked),id:"whiteLogoCheckbox"})]})}),o.jsx("div",{className:"col-lg-4",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Footer Background Color"}),o.jsx("input",{type:"color",className:"form-control",value:g.footerBgColor||"#0d0d0d",onChange:c=>S("footerBgColor",c.target.value)})]})}),o.jsx("div",{className:"col-lg-4",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Footer Text Color"}),o.jsx("input",{type:"color",className:"form-control",value:g.footerTextColor||"#ffffff",onChange:c=>S("footerTextColor",c.target.value)})]})})]})]})]}),u==="ai-images"&&o.jsx("div",{className:"tab-content",children:o.jsx(fm,{formData:p,onImageInsert:b})}),u==="privacy"&&o.jsxs("div",{className:"tab-content",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Select Page Type"}),o.jsxs("select",{className:"form-control",value:g.privacyOrTerms||"privacy",onChange:c=>S("privacyOrTerms",c.target.value),children:[o.jsx("option",{value:"privacy",children:"Privacy Policy"}),o.jsx("option",{value:"terms",children:"Terms & Conditions"})]})]}),o.jsx("div",{children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Country"}),o.jsx("input",{type:"text",className:"form-control",value:g.country||"",onChange:c=>S("country",c.target.value),placeholder:"Enter country (e.g., United States)"})]})}),o.jsx("div",{children:g.privacyOrTerms==="privacy"?o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Choose privacy style type"}),o.jsxs("select",{className:"form-control",value:g.privacyOption||"1",onChange:c=>S("privacyOption",c.target.value),children:[o.jsx("option",{value:"1",children:"1"}),o.jsx("option",{value:"2",children:"2"})]})]}):o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Choose terms style type"}),o.jsxs("select",{className:"form-control",value:g.termsOption||"1",onChange:c=>S("termsOption",c.target.value),children:[o.jsx("option",{value:"1",children:"1"}),o.jsx("option",{value:"2",children:"2"})]})]})})]})]})}function hm(p,R){return`
    <?php include 'functions.php';
$title = 'Contact Us - page';
$description = 'Looking to connect? Use the contact page for questions, feedback, or support inquiries.';

echo site_header($title, $description);

?>
<section class="${R?"hero-section with-bg":"hero-section gradient-bg"}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>Contact Us</h1>
    </div>
  </div>
</section>
<div class="contact-container ">
    <div class="contact-header">
        <i class="bi bi-envelope-fill"></i>
    </div>
    <form>
        <h2>Get in Touch</h2>
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" placeholder="Your name">
        </div>
        <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="Your email">
        </div>
        <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea class="form-control" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" disabled class="btn btn-primary w-100">Send Message</button>
    </form>
    <p class="email-link"><i class="bi bi-envelope-at"></i> ${p}</p>
</div>

<?php echo site_footer(); ?>
    `}function pm(){return`
   .contact-container {
  width: 500px;
  margin: 100px auto 35px;
  padding: 15px 21px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  color: black !important;
}

@media screen and (max-width: 768px) {
  .contact-container {
    width: 100%;
    padding: 15px;
  }
}
.contact-header {
  text-align: center;
  margin-bottom: 20px;
}

.contact-header i {
  font-size: 2rem;
  color: #0d6efd;
  margin-bottom: 10px;
}

.email-link {
  display: block;
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  color: #0d6efd;
  text-decoration: none;
}`}function mm(p,R){return`
  
<?php include 'functions.php';
$title = 'Contact Us - page';
$description = 'Need assistance or have a question? Contact us directly — we’re here to listen and help.';

echo site_header($title, $description);

?>
<section class="${R?"hero-section with-bg":"hero-section gradient-bg"}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>Say Hello</h1>
    </div>
  </div>
</section>
<div class="contact-container">
    <div class="contact-header">
        <i class="bi bi-send-fill"></i>
        <p class="text-muted">We’d love to hear from you. Fill out the form below.</p>
    </div>
    <form>
        <h2>Get in Touch</h2>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-person"></i> Your Name</label>
            <input type="text" class="form-control" placeholder="John Doe">
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-envelope"></i> Your Email</label>
            <input type="email" class="form-control" placeholder="you@example.com">
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-pencil-square"></i> Message</label>
            <textarea class="form-control" rows="6" placeholder="Write something nice..."></textarea>
        </div>
        <div class="d-grid gap-2">
            <button type="submit" disabled class="btn btn-outline-primary">
                <i class="bi bi-send"></i> Send Message
            </button>
        </div>
    </form>
    <p class="email-link">
        <i class="bi bi-envelope-paper"></i> ${p}
    </p>
</div>
<?php echo site_footer(); ?>
    `}function vm(){return`
   .contact-container {
  width: 500px;
  margin: 100px auto 35px;
  padding: 15px 21px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  color: black !important;
}

@media screen and (max-width: 768px) {
  .contact-container {
    width: 100%;
    padding: 15px;
  }
}
.contact-header {
  text-align: center;
  margin-bottom: 20px;
}

.contact-header i {
  font-size: 2rem;
  color: #0d6efd;
  margin-bottom: 10px;
}

.email-link {
  display: block;
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  color: #0d6efd;
  text-decoration: none;
}`}function ym(p,R){return`
  
<?php include 'functions.php';
$title = 'Contact Us - page';
$description = 'Need assistance or have a question? Contact us directly — we’re here to listen and help.';

echo site_header($title, $description);

?>
<section class="${R?"hero-section with-bg":"hero-section gradient-bg"}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>Contact Us</h1>
    </div>
  </div>
</section>
<div class="contact-container ">
    <form class="form">
        <h2>Drop a Line</h2>
        <p>Name: <input placeholder="Write your name here.."></p>
        <p>Email: <input placeholder="Let us know how to contact you back.."></p>
        <p>Message: <input placeholder="What would you like to tell us.."></p>
        <button disabled>Send</button>
        <div class="mail-container">
            <p><i class="bi bi-envelope-fill ms-3 me-2 mb-0"></i> ${p}</p>
        </div>
    </form>
</div>
<?php echo site_footer(); ?>
    `}function gm(){return`.contact-container {
  margin: 40px auto;
  border-radius: 8px;
  color: black !important;
}
@media screen and (max-width: 768px) {
  .contact-container {
    width: 100%;
    padding: 15px;
  }
}
.contact-container .form {
  width: 440px;
  height: 510px;
  background: #E6E6E6;
  border-radius: 8px;
  box-shadow: 0 0 40px -10px #000;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  position: relative;
}
.contact-container h2 {
  margin: 10px 0;
  padding-bottom: 10px;
  width: 320px;
  color: var(--hero-gradient1);
  border-bottom: 3px solid var(--hero-gradient2);
}
.contact-container input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s;
  border-bottom: 2px solid var(--hero-gradient1);
}
.contact-container input:focus {
  border-bottom: 2px solid var(--hero-gradient1);
}
.contact-container p:before {
  content: attr(type);
  display: block;
  margin: 28px 0 0;
  font-size: 14px;
  color: var(--hero-gradient1);
}
.contact-container button {
  float: right;
  padding: 8px 12px;
  margin: 8px 0 0;
  font-family: "Montserrat", sans-serif;
  border: 2px solid var(--hero-gradient1);
  background: 0;
  color: var(--hero-gradient1);
  cursor: pointer;
  transition: all 0.3s;
}
.contact-container button:hover {
  background: var(--hero-gradient2);
  color: #fff;
}
.contact-container .mail-container {
  content: "";
  position: absolute;
  bottom: -15px;
  right: -20px;
  background: var(--hero-gradient1);
  color: #fff;
  width: 320px;
  padding: 16px 4px 16px 0;
  border-radius: 6px;
  font-size: 13px;
  box-shadow: 10px 10px 40px -14px #000;
}
.contact-container .mail-container p:before {
  content: none;
}
.contact-container span {
  margin: 0 5px 0 15px;
}`}function Yd(p,R=".website-preview"){switch(String(p)){case"0":return"";case"1":return`${R} {
  background: repeating-linear-gradient(
    45deg,
    #92c9b1,
    #92c9b1 20px,
    #b3e0d2 20px,
    #b3e0d2 40px
  );
}`;case"2":return`${R} {
  background: none;
  background-color: #313131;
  background-image: radial-gradient(rgba(255,255,255,0.171) 2px, transparent 0);
  background-size: 30px 30px;
  background-position: -5px -5px;
}`;case"3":return`${R} {
  background: none;
  --color: rgba(114,114,114,0.3);
  background-color: #191a1a;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent);
  background-size: 55px 55px;
}`;case"4":return`${R}::after {
  content: "";
  inset: 0;
  z-index: 1;
  background-image: radial-gradient(
    ellipse 1.5px 2px at 1.5px 50%,
    #0000 0,
    #0000 90%,
    #000 100%
  );
  background-size: 25px 8px;
}

${R} {
  position: relative;
  --c: #09f;
  background-color: #000;
  background-image: radial-gradient(4px 100px at 0px 235px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 235px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 117.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 252px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 252px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 126px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 150px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 150px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 75px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 253px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 253px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 126.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 204px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 204px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 102px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 134px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 134px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 67px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 179px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 179px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 89.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 299px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 299px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 149.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 215px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 215px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 107.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 281px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 281px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 140.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 158px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 158px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 79px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 210px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 210px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 105px, var(--c) 100%, #0000 150%);
  background-size:
    300px 235px,
    300px 235px,
    300px 235px,
    300px 252px,
    300px 252px,
    300px 252px,
    300px 150px,
    300px 150px,
    300px 150px,
    300px 253px,
    300px 253px,
    300px 253px,
    300px 204px,
    300px 204px,
    300px 204px,
    300px 134px,
    300px 134px,
    300px 134px,
    300px 179px,
    300px 179px,
    300px 179px,
    300px 299px,
    300px 299px,
    300px 299px,
    300px 215px,
    300px 215px,
    300px 215px,
    300px 281px,
    300px 281px,
    300px 281px,
    300px 158px,
    300px 158px,
    300px 158px,
    300px 210px,
    300px 210px,
    300px 210px;
  animation: hi 150s linear infinite;
}

@keyframes hi {
  0% {
    background-position:
      0px 220px,
      3px 220px,
      151.5px 337.5px,
      25px 24px,
      28px 24px,
      176.5px 150px,
      50px 16px,
      53px 16px,
      201.5px 91px,
      75px 224px,
      78px 224px,
      226.5px 350.5px,
      100px 19px,
      103px 19px,
      251.5px 121px,
      125px 120px,
      128px 120px,
      276.5px 187px,
      150px 31px,
      153px 31px,
      301.5px 120.5px,
      175px 235px,
      178px 235px,
      326.5px 384.5px,
      200px 121px,
      203px 121px,
      351.5px 228.5px,
      225px 224px,
      228px 224px,
      376.5px 364.5px,
      250px 26px,
      253px 26px,
      401.5px 105px,
      275px 75px,
      278px 75px,
      426.5px 180px;
  }

  to {
    background-position:
      0px 6800px,
      3px 6800px,
      151.5px 6917.5px,
      25px 13632px,
      28px 13632px,
      176.5px 13758px,
      50px 5416px,
      53px 5416px,
      201.5px 5491px,
      75px 17175px,
      78px 17175px,
      226.5px 17301.5px,
      100px 5119px,
      103px 5119px,
      251.5px 5221px,
      125px 8428px,
      128px 8428px,
      276.5px 8495px,
      150px 9876px,
      153px 9876px,
      301.5px 9965.5px,
      175px 13391px,
      178px 13391px,
      326.5px 13540.5px,
      200px 14741px,
      203px 14741px,
      351.5px 14848.5px,
      225px 18770px,
      228px 18770px,
      376.5px 18910.5px,
      250px 5082px,
      253px 5082px,
      401.5px 5161px,
      275px 6375px,
      278px 6375px,
      426.5px 6480px;
  }
}
`;case"5":return`${R} {  background: #121212;
  background: linear-gradient(
    135deg,
    #121212 25%,
    #1a1a1a 25%,
    #1a1a1a 50%,
    #121212 50%,
    #121212 75%,
    #1a1a1a 75%,
    #1a1a1a
  );
  background-size: 40px 40px;
  animation: move 4s linear infinite;}
  @keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}`;default:return""}}function bm(p,R){switch(console.log(p),p){case 1:return hm(R.email,R.heroBg);case 2:return mm(R.email,R.heroBg);case 3:return ym(R.email,R.heroBg);default:return}}function xm(p){switch(console.log(p),p){case 1:return pm();case 2:return vm();case 3:return gm();default:return}}function Vi(p){return p.transparentHero?"hero-section transparent-hero":p.heroBg?"hero-section with-bg":"hero-section gradient-bg"}function wm(p){p=p.replace("#",""),p.length===3&&(p=p.split("").map(m=>m+m).join(""));const R=parseInt(p.substring(0,2),16),g=parseInt(p.substring(2,4),16),w=parseInt(p.substring(4,6),16);return(R*299+g*587+w*114)/1e3<128}function jd(p,R){return`
        <nav class="navbar navbar-expand-xl navbar-light${p.stickyNavbar?" sticky-top":""}">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${p.logo?"/images/logo.svg":"https://placehold.co/220x50"}" alt="${p.name||p.domain||"Domain"}" width="220" height="50">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        ${R}
      </ul>
    </div>
  </div>
</nav>
    `}function Dd(p,R){return`
<section class="${Vi(p)}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          ${R.formData.h1||R.title}
        </h1>
        ${R.formData.afterH1?`<div>${R.formData.afterH1}</div>`:""}
    </div>
  </div>
</section>
    `}function zd(p){return`
 .navbar {
  background-color: var(--header-bg-color) !important;
  ${p.stickyNavbar?"position: sticky; top: 0; z-index: 1020;":""}
}

.hero-section {
  padding: 55px 0;
  position: relative;
  overflow: hidden;
  color: var(--header-text-color);
}

${p.heroBg?`.hero-section.with-bg {
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-section.with-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgb(0, 0, 0));
  opacity: 0.5;
  z-index: 1;
}`:`.hero-section.gradient-bg {
  background: linear-gradient(135deg, var(--hero-gradient1), var(--hero-gradient2));
}`}

.hero-section .container {
  position: relative;
  z-index: 2;
}

  
@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0;
  }
  
}
  .navbar-light .navbar-nav .nav-link {
    color: var(--nav-link-color, #141414) !important;
  }

  .navbar-light .navbar-nav .nav-link.active {
  color: var(--link-color) !important;
  font-weight: bold;
}
  /* Mobile nav */
@media (max-width: 1199.98px) {
  .navbar-collapse {
    position: fixed;
    top: 61px;
    left: 15px;
    right: 15px;
    background-color: color-mix(in srgb, var(--header-bg-color) 65%, transparent);
    backdrop-filter: blur(12px);
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    padding: 15px;
    margin: 0;
  }

  .navbar-nav {
    width: 100%;
  }

  .navbar-nav .nav-item {
    margin: 7px 0;
  }

  .navbar-nav .nav-item:hover {
    transform: translateY(-1px);
  }

  .navbar-nav .nav-link {
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    display: block;
    padding: 0;
  }

  .navbar-toggler {
    z-index: 10000;
    position: relative;
    border: var(--bs-border-width) solid var(--nav-link-color, #141414) !important;
  }
}

.custom-dropdown {
  border: 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  min-width: 220px;
  background: color-mix(
    in srgb,
    var(--header-bg-color) 65%,
    transparent
  ) !important;
  backdrop-filter: blur(12px);
}

.custom-dropdown .dropdown-item {
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  border-radius: 0;
  text-wrap: wrap;
}
.dropdown-menu {
  display: none;
}

.custom-dropdown .dropdown-item:hover {
  color: #fff;
  background: color-mix(
    in srgb,
    var(--header-bg-color) 95%,
    transparent
  ) !important;
}
.nav-item.dropdown > .nav-link {
  display: flex;
  align-items: center;
}

.nav-item.dropdown > .nav-link .arrow {
  position: relative;
  margin-left: auto;
  border: solid var(--nav-link-color, #141414);
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.25s;
}

.dropdown.open .dropdown-menu {
  display: block;
}

@media (min-width: 1200px) {
  .nav-item.dropdown {
    position: relative;
  }
  .nav-item.dropdown > .nav-link .arrow {
    margin-left: 7px;
  }
  .custom-dropdown.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 0;
    z-index: 1000;
  }

  .nav-item.dropdown:hover > .nav-link .arrow {
    transform: rotate(-135deg);
  }
  .nav-item.dropdown:hover > .dropdown-menu {
    display: block !important;
  }
}
@media (max-width: 1199px) {
  .nav-item.dropdown > .nav-link .arrow {
    padding: 4px;
  }
}


            `}function _m(p,R){return`
        <nav class="navbar navbar-expand-xl navbar-light container floating-rounded-navbar">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${p.logo?"/images/logo.svg":"https://placehold.co/220x50"}" alt="${p.name||p.domain||"Domain"}" width="220" height="50">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        ${R}
      </ul>
    </div>
  </div>
</nav>
    `}function Sm(p,R){return`
<section class="${Vi(p)}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          ${R.formData.h1||R.title}
        </h1>
        ${R.formData.afterH1?`<div>${R.formData.afterH1}</div>`:""}
    </div>
  </div>
</section>
    `}function Tm(p){return`
 .navbar {
  background-color: var(--header-bg-color) !important;
  ${p.stickyNavbar?"position: sticky; top: 0; z-index: 1020;":""}
}

.hero-section {
 padding: 115px 0 25px 0;
  position: relative;
  overflow: hidden;
  color: var(--header-text-color);
}
${p.heroBg?`
  .hero-section.with-bg {
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-section.with-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgb(0, 0, 0));
  opacity: 0.5;
  z-index: 1;
}`:`.hero-section.gradient-bg {
  background: linear-gradient(135deg, var(--hero-gradient1), var(--hero-gradient2));
}`}

.hero-section .container {
  position: relative;
  z-index: 2;
}

  .navbar-light .navbar-nav .nav-link {
    color: var(--nav-link-color, #141414) !important;
  }

  .navbar-light .navbar-nav .nav-link.active {
  color: var(--link-color) !important;
  font-weight: bold;
}
  /* Mobile nav */
@media (max-width: 1199.98px) {
  .navbar-collapse {
    position: fixed;
    top: 61px;
    left: 15px;
    right: 15px;
    background-color: color-mix(in srgb, var(--header-bg-color) 65%, transparent);
    backdrop-filter: blur(12px);
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    padding: 15px;
    margin: 0;
  }

  .navbar-nav {
    width: 100%;
  }

  .navbar-nav .nav-item {
    margin: 7px 0;
  }

  .navbar-nav .nav-item:hover {
    transform: translateY(-1px);
  }

  .navbar-nav .nav-link {
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    display: block;
    padding: 0;
  }

  .navbar-toggler {
    z-index: 10000;
    position: relative;
    border: var(--bs-border-width) solid var(--nav-link-color, #141414) !important;
  }
}


.custom-dropdown {
  border: 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  min-width: 220px;
  background: color-mix(
    in srgb,
    var(--header-bg-color) 65%,
    transparent
  ) !important;
  backdrop-filter: blur(12px);
}

.custom-dropdown .dropdown-item {
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  border-radius: 0;
  text-wrap: wrap;
}
.dropdown-menu {
  display: none;
}

.custom-dropdown .dropdown-item:hover {
  color: #fff;
  background: color-mix(
    in srgb,
    var(--header-bg-color) 95%,
    transparent
  ) !important;
}
  
.nav-item.dropdown > .nav-link {
  display: flex;
  align-items: center;
}

.nav-item.dropdown > .nav-link .arrow {
  position: relative;
  margin-left: auto;
  border: solid var(--nav-link-color, #141414);
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.25s;
}
  .dropdown.open .dropdown-menu {
  display: block;
}


@media (min-width: 1200px) {
  .nav-item.dropdown {
    position: relative;
  }
  .nav-item.dropdown > .nav-link .arrow {
    margin-left: 7px;
  }
  .custom-dropdown.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 0;
    z-index: 1000;
  }

  .nav-item.dropdown:hover > .nav-link .arrow {
    transform: rotate(-135deg);
  }
  .nav-item.dropdown:hover > .dropdown-menu {
    display: block !important;
  }
}
@media (max-width: 1199px) {
  .nav-item.dropdown > .nav-link .arrow {
    padding: 4px;
  }
}


.floating-rounded-navbar {
  background-color: var(--header-bg-color) !important;
  position: ${p.stickyNavbar?"fixed":"absolute"} !important;
  top: 15px !important;
  left: 7px !important;
  right: 7px !important;
  width: calc(100% - 11px) !important;
  z-index: 2000;
  border-radius: 21px;
  transition: all 0.3s ease;
}


@media (max-width: 1199.98px) {
  .floating-rounded-navbar .navbar-collapse {
    top: 85px !important;
  }
}

.navbar-brand {
  margin-right: 0 !important;
}
            `}function Em(p,R){return`
 <nav class="navbar navbar-expand-xl navbar-light ${p.stickyNavbar?"sticky-top":""}">
      <div class="container flex-xl-column">
        <div class="d-flex w-100 justify-content-between align-items-center d-xl-block text-center">
          <a class="navbar-brand mx-xl-auto" href="/">
             <img src="${p.logo?"/images/logo.svg":"https://placehold.co/220x50"}" alt="${p.name||p.domain||"Domain"}" width="220" height="50">
          </a>
          <button class="navbar-toggler d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-center mt-xl-2" id="navbarNav">
          <ul class="navbar-nav">
            ${R}
          </ul>
        </div>
      </div>
    </nav>
    `}function Am(p,R){return`
<section class="${Vi(p)}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          ${R.formData.h1||R.title}
        </h1>
        ${R.formData.afterH1?`<div>${R.formData.afterH1}</div>`:""}
    </div>
  </div>
</section>
    `}function Nm(p){return`
 .navbar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: var(--header-bg-color) !important;
  ${p.stickyNavbar?"position: sticky; top: 0; z-index: 1020;":""}
}

.hero-section {
  padding: 55px 0;
  position: relative;
  overflow: hidden;
  color: var(--header-text-color);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.246);
}

${p.heroBg?`.hero-section.with-bg {
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-section.with-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgb(0, 0, 0));
  opacity: 0.5;
  z-index: 1;
}`:`.hero-section.gradient-bg {
  background: linear-gradient(135deg, var(--hero-gradient1), var(--hero-gradient2));
}`}

.hero-section .container {
  position: relative;
  z-index: 2;
}

  
@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0;
  }
  
}
.navbar-light .navbar-nav .nav-link {
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  padding: 0 1rem;
  transition: color 0.3s ease, transform 0.2s ease;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: var(--link-color) !important;
  transform: translateY(-1px);
}
  .navbar-light .navbar-nav .nav-link.active {
  color: var(--link-color) !important;
  font-weight: 600;
  border-bottom: 2px solid var(--link-color);
}

  /* Mobile nav */
@media (max-width: 1199.98px) {
  .navbar-collapse {
    position: fixed;
    top: 61px;
    left: 15px;
    right: 15px;
    background-color: color-mix(
      in srgb,
      var(--header-bg-color) 65%,
      transparent
    );
    backdrop-filter: blur(12px);
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    padding: 15px;
    margin: 0;
  }

  .navbar-nav {
    width: 100%;
  }

  .navbar-nav .nav-item {
    margin: 7px 0;
  }

  .navbar-nav .nav-item:hover {
    transform: translateY(-1px);
  }

  .navbar-nav .nav-link {
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    display: block;
    padding: 0;
  }

  .navbar-toggler {
    z-index: 10000;
    position: relative;
    border: var(--bs-border-width) solid var(--nav-link-color, #141414) !important;
  }
}


.custom-dropdown {
  border: 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  min-width: 220px;
  background: color-mix(
    in srgb,
    var(--header-bg-color) 65%,
    transparent
  ) !important;
  backdrop-filter: blur(12px);
}

.custom-dropdown .dropdown-item {
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  border-radius: 0;
  text-wrap: wrap;
}
.dropdown-menu {
  display: none;
}

.custom-dropdown .dropdown-item:hover {
  color: #fff;
  background: color-mix(
    in srgb,
    var(--header-bg-color) 95%,
    transparent
  ) !important;
}
.nav-item.dropdown > .nav-link {
  display: flex;
  align-items: center;
}

.nav-item.dropdown > .nav-link .arrow {
  position: relative;
  margin-left: auto;
  border: solid var(--nav-link-color, #141414);
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.25s;
}

.dropdown.open .dropdown-menu {
  display: block;
}

@media (min-width: 1200px) {
  .nav-item.dropdown {
    position: relative;
  }
  .nav-item.dropdown > .nav-link .arrow {
    margin-left: 7px;
  }
  .custom-dropdown.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 0;
    z-index: 1000;
  }

  .nav-item.dropdown:hover > .nav-link .arrow {
    transform: rotate(-135deg);
  }
  .nav-item.dropdown:hover > .dropdown-menu {
    display: block !important;
  }
}
@media (max-width: 1199px) {
  .nav-item.dropdown > .nav-link .arrow {
    padding: 4px;
  }
}

            `}function Cm(p,R){return`
        <nav class="navbar navbar-expand-xl navbar-light${p.stickyNavbar?" sticky-top":""}">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${p.logo?"/images/logo.svg":"https://placehold.co/220x50"}" alt="${p.name||p.domain||"Domain"}" width="220" height="50">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        ${R}
      </ul>
    </div>
  </div>
</nav>
    `}function km(p,R){return`
<section class="${Vi(p)}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          ${R.formData.h1||R.title}
        </h1>
        ${R.formData.afterH1?`<div>${R.formData.afterH1}</div>`:""}
    </div>
  </div>
</section>
    `}function Om(p){return`
 .navbar {
${p.stickyNavbar?`  background-color: transparent !important;
  transition: background-color 0.4s ease, box-shadow 0.3s ease;
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;`:`  background-color: transparent !important;
  transition: background-color 0.4s ease, box-shadow 0.3s ease;
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;`}

}
.navbar.scrolled {
  background-color: var(--header-bg-color) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.hero-section {
  padding: 115px 0 30px;
  position: relative;
  overflow: hidden;
  color: var(--header-text-color);
}

${p.heroBg?`.hero-section.with-bg {
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-section.with-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgb(0, 0, 0));
  opacity: 0.5;
  z-index: 1;
}`:`.hero-section.gradient-bg {
  background: linear-gradient(135deg, var(--hero-gradient1), var(--hero-gradient2));
}`}

.hero-section .container {
  position: relative;
  z-index: 2;
}

  
@media (max-width: 768px) {
  .hero-section {
    padding: 77px 0;
  }
  
}
  .navbar-light .navbar-nav .nav-link {
    color: var(--nav-link-color, #141414) !important;
  }

  .navbar-light .navbar-nav .nav-link.active {
  color: var(--link-color) !important;
  font-weight: bold;
}
  /* Mobile nav */
@media (max-width: 1199.98px) {
  .navbar-collapse {
    position: fixed;
    top: 61px;
    left: 15px;
    right: 15px;
    background-color: color-mix(in srgb, var(--header-bg-color) 65%, transparent);
    backdrop-filter: blur(12px);
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    padding: 15px;
    margin: 0;
  }

  .navbar-nav {
    width: 100%;
  }

  .navbar-nav .nav-item {
    margin: 7px 0;
  }

  .navbar-nav .nav-item:hover {
    transform: translateY(-1px);
  }

  .navbar-nav .nav-link {
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    display: block;
    padding: 0;
  }

  .navbar-toggler {
    z-index: 10000;
    position: relative;
    border: var(--bs-border-width) solid var(--nav-link-color, #141414) !important;
  }
}


.custom-dropdown {
  border: 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  min-width: 220px;
  background: color-mix(
    in srgb,
    var(--header-bg-color) 65%,
    transparent
  ) !important;
  backdrop-filter: blur(12px);
}

.custom-dropdown .dropdown-item {
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  border-radius: 0;
  text-wrap: wrap;
}
.dropdown-menu {
  display: none;
}

.custom-dropdown .dropdown-item:hover {
  color: #fff;
  background: color-mix(
    in srgb,
    var(--header-bg-color) 95%,
    transparent
  ) !important;
}
.nav-item.dropdown > .nav-link {
  display: flex;
  align-items: center;
}

.nav-item.dropdown > .nav-link .arrow {
  position: relative;
  margin-left: auto;
  border: solid var(--nav-link-color, #141414);
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.25s;
}

.dropdown.open .dropdown-menu {
  display: block;
}

@media (min-width: 1200px) {
  .nav-item.dropdown {
    position: relative;
  }
  .nav-item.dropdown > .nav-link .arrow {
    margin-left: 7px;
  }
  .custom-dropdown.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 0;
    z-index: 1000;
  }

  .nav-item.dropdown:hover > .nav-link .arrow {
    transform: rotate(-135deg);
  }
  .nav-item.dropdown:hover > .dropdown-menu {
    display: block !important;
  }
}
@media (max-width: 1199px) {
  .nav-item.dropdown > .nav-link .arrow {
    padding: 4px;
  }
}

            `}function lo(p){return`
<footer class="footer mt-auto py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-6 text-center text-md-start">
        <p class="mb-0">© Copyright <?php echo date('Y'); ?> ${p.domain||"Your Website"}. All rights reserved.</p>
      </div>
      <div class="col-md-6 text-md-end text-center d-flex flex-column flex-lg-row justify-content-center justify-content-md-end">
      ${p.contactPage?'<a class="pe-2" href="/contact">Contacts</a>':`<span class="me-3">Email: ${p.email||`info[@]${p.domain||"domain.com"}`} </span>`}
      
        <a href="${p.privacyOrTerms==="privacy"?"/privacy":"/terms"}">${p.privacyOrTerms==="privacy"?"Privacy Policy":"Terms & Conditions"}</a>
      </div>
    </div>
  </div>
  ${p.scrollToTop?`      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
`:""}
</footer>
  `}function so(){return`
    .footer {
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
}

.footer a {
  text-decoration: none;
  color: var(--link-color) !important;
}`}function ks(p){return`
    <footer class="footer mt-auto py-4">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-3">
           <img src="${p.logo?"/images/logo.svg":"https://placehold.co/220x50"}" alt="${p.name||p.domain||"Domain"}" width="220" height="50">
          </div>
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">© Copyright <?php echo date('Y'); ?> <span class="fw-bold">${p.domain||"Your Website"}</span> All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end text-center d-flex flex-column flex-lg-row justify-content-center justify-content-md-end">
          ${p.contactPage?'<a class="pe-2" href="/contact">Contacts</a>':`<span class="me-3"><i class="bi bi-envelope pe-2"></i>${p.email||`info[@]${p.domain||"domain.com"}`}</span>`}
            <a href="${p.privacyOrTerms==="privacy"?"/privacy":"/terms"}">${p.privacyOrTerms==="privacy"?"Privacy Policy":"Terms & Conditions"}</a>
          </div>
        </div>
      </div>
    </footer>
      ${p.scrollToTop?`      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
`:""}
  `}function Os(){return`
  .footer {
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
}

.footer a {
  text-decoration: none;
  color: var(--link-color) !important;
}
.footer a:hover {
  color: var(--link-color) !important;
  opacity: 0.8;
}
  `}function Rs(p){return`
    <footer class="footer-news">
      <div class="container">
        <div class="footer-top d-flex flex-column flex-lg-row justify-content-between align-items-center mb-4">
          <div class="footer-contact text-center text-lg-start mb-3 mb-lg-0">
            <p class="mb-0">© Copyright <?php echo date('Y'); ?> ${p.domain||"Your Website"}. All rights reserved.</p>
          </div>
          <div class="footer-links text-center text-lg-end d-flex flex-column flex-sm-row align-items-center gap-3">
            ${p.contactPage?'<a class="pe-2" href="/contact">Contacts</a>':`<span><span class="footer-icon">✉️</span> ${p.email||`info[@]${p.domain||"domain.com"}`}</span>`}
            <a href="${p.privacyOrTerms==="privacy"?"/privacy":"/terms"}">🔒 ${p.privacyOrTerms==="privacy"?"Privacy Policy":"Terms & Conditions"}</a>
          </div>
        </div>
        <div class="footer-newsletter text-center mb-4">
          <h3>Our Newsletter</h3>
          <form class="newsletter-form d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
            <input type="email" placeholder="Your email" required>
            <button type="submit" disabled>Subscribe</button>
          </form>
        </div>
        <div class="footer-social text-center d-flex justify-content-center">
          <span class="social-icon facebook"><i class="bi bi-facebook"></i></span>
          <span class="social-icon twitter"><i class="bi bi-twitter"></i></span>
          <span class="social-icon youtube"><i class="bi bi-youtube"></i></span>
        </div>
      </div>
    </footer>
      ${p.scrollToTop?`      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
`:""}
  `}function js(){return`
  .footer-news {
  background: var(--footer-bg-color);
  border-top: 3px solid var(--link-color);
  padding: 2.5rem 1rem;
  border-radius: 12px 12px 0 0;
  position: relative;
  overflow: hidden;
  color: var(--footer-text-color);

}

.footer-news a {
  color: var(--link-color);
  text-decoration: none;
  position: relative;
}

.footer-news a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: var(--link-color);
  transition: width 0.3s ease;
}

.footer-news a:hover::after {
  width: 100%;
}

.footer-newsletter h3 {
  color: var(--footer-text-color) !important;
  margin-bottom: 1rem;
  font-weight: 600;
}

.newsletter-form input {
  padding: 0.6rem 1rem;
  border: 1px solid var(--link-color);
  border-radius: 5px;
  font-size: 1rem;
}

.newsletter-form button {
  padding: 0.6rem 1.5rem;
  border: none;
  background: var(--link-color);
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.newsletter-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(102, 143, 106, 0.2);
}
.footer-social .social-icon {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--link-color);
  width: 40px;
  height: 40px;
  line-height: 40px;
  border: 2px solid var(--link-color);
  border-radius: 50%;
  text-align: center;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

.footer-social .social-icon:hover {
  transform: scale(1.2) rotate(-10deg);
  background: var(--link-color);
  color: #fff;
}

.footer-news::after {
  right: 10px;
  top: auto;
  bottom: 10px;
  left: auto;
}

/* Responsive */
@media (max-width: 767px) {
  .newsletter-form input,
  .newsletter-form button {
    width: 100%;
  }
}
  `}function Rm(){return`
.content-area h2 {
  display: inline-block;
  border-bottom: 3px solid var(--heading-color);
  padding-bottom: 4px;
}
  `}function jm(){return`
.content-area h2 {
  display: inline-block;
  border-bottom: 2px dashed var(--heading-color);
  padding-bottom: 4px;
}
  `}function Dm(){return`
  .content-area h2 {
  position: relative;
  text-align: center;
}

.content-area h2::before,
.content-area h2::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--heading-color);
}

.content-area h2::before {
  top: -6px;
}

.content-area h2::after {
  bottom: -6px;
}
  `}function zm(){return`
    .content-area h2 {
  position: relative;
  display: inline-block;
  padding-left: 16px;
}

.content-area h2::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 70%;
  background-color: var(--heading-color);
  border-radius: 2px;
}
  `}function Um(){return`
    .content-area h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
}

.content-area h2::before,
.content-area h2::after {
  content: "";
  width: 40px;  
  height: 2px;
  background-color: var(--heading-color)  ;
}
    `}function Hd(p={}){switch(p.headingsStyle||"1"){case"2":return Rm();case"3":return jm();case"4":return Dm();case"5":return zm();case"6":return Um();case"1":default:return""}}function Mm(p){return`

:root {
  --body-bg-color: ${p.bodyBgColor||"#f8fafc"};
  --body-text-color: ${p.bodyTextColor||"#222222"};
  --heading-color: ${p.headingColor||"#222222"};
  --hero-gradient1: ${p.heroGradient1||"#168295"};
  --hero-gradient2: ${p.heroGradient2||"#0b5e3a"};
  --footer-bg-color: ${p.footerBgColor||"#0d0d0d"};
  --link-color: ${p.linkColor||"#2563eb"};
  --header-bg-color: ${p.headerBgColor||"#ffffff"};
  --font-family: ${p.fontFamily&&p.fontFamily!=="system"?p.fontFamily:"system-ui"};
  --nav-link-color: ${p.navLinkColor||"#141414"};
  --footer-text-color: ${p.footerTextColor||"#ffffff"};
  --header-text-color: ${p.headerTextColor||"#ffffffff"};
}
html {
  overflow-x: hidden;
}
body {
  background-color: var(--body-bg-color);
  color: var(--body-text-color) !important;
  font-family: var(--font-family);
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
    ${p.bodyBg?`  
  background-image:
  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/body-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;`:""}
}

  ${Yd(p.bodyPattern,"body")}
h1 {
    font-size: clamp(2rem, 4vw, 2.5rem) !important;
}
h2 {
    font-size: clamp(1.6rem, 3vw, 2rem) !important;
}
h3 {
    font-size: clamp(1.4rem, 3vw, 1.7rem) !important;
}
p {
  margin-bottom: 0.5rem !important;
}
  
  section {
  padding: 15px 0;
  scroll-margin-top: 70px;
}

h2, h3 {
  color: var(--heading-color) !important;
}

${Hd(p)}

.content-area a {
  color: var(--link-color) !important;
  text-decoration: none !important;
}

.content-area a:hover {
  color: var(--link-color) !important;
  opacity: 0.8;
}

  .sidebar-page-list {
  padding: 0;
  margin: 0;
  margin-bottom: 17px;
  width: 279px;
}

.sidebar-page-list li {
  list-style-type: disc;
  list-style-position: inside;
  color: var(--heading-color);
}

.sidebar-page-list li::marker {
  color: var(--link-color);
  font-size: 1.2em;
}
.sidebar-page-list li:last-child {
  border-bottom: none;
}

.sidebar-page-list li a {
  padding: 12px 0;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  color: var(--link-color);
}

.sidebar-page-list li a:hover {
  padding-left: 11px;
}
  ${p.sidebar?`.twitter-tweet {
  width: 279px !important;
}

.x {
  display: flex;
  justify-content: center;
}`:""}
.error_page {
  min-height: 70vh;
}

${p.footerStyle==="1"?so():p.footerStyle==="2"?Os():js()}${p.whiteLogo?`.footer img {
        filter: brightness(0) invert(1);
      }`:""}
${(()=>{switch(p.navStyle){case"1":return zd(p);case"2":return Tm(p);case"3":return Nm(p);case"4":return Om(p);default:return zd(p)}})()}
${wm(p.headerBgColor||"#ffffffff")?`.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}`:""}
${p.contactPage?xm(p.contactRandomIndex):""}
${p.scrollToTop?`.scroll-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: -15px;
  z-index: 99999;
  background-color: var(--link-color);
  width: 44px;
  height: 44px;
  border-radius: 50px;
  transition: all 0.4s;
}
.scroll-top i {
  font-size: 24px;
  color: var(--footer-bg-color);
  line-height: 0;
}
.scroll-top:hover {
  background-color: color-mix(in srgb, var(--link-color), transparent 20%);
  color: var(--footer-bg-color);
}
.scroll-top.active {
  visibility: visible;
  opacity: 1;
  bottom: 15px;
}
`:""}
`}function Bm(p){const R=p.split(/(<h2[\s\S]*?<\/h2>)/i).filter(Boolean);let g="",w=[],N="",m=!1;return R.forEach(u=>{/<h2[\s\S]*?<\/h2>/i.test(u)?m?(N.trim()&&w.push(`<section>${N}</section>`),N=u):(m=!0,N=(g||"")+u,g=""):m?N+=u:g+=u}),m&&N.trim()?w.push(`<section>${N}</section>`):!m&&g.trim()&&w.push(`<section>${g}</section>`),w.join(`
`)}function Ym(p,R){const g=R.hiddenFromNav||[],w=p.filter(v=>!g.includes(v.id)),m=Hm(R,(()=>{let v="";const b=R.customNavItems||[],S=w.filter(T=>!T.parentId),k=w.filter(T=>T.parentId);return S.forEach(T=>{if(T.isDropdownParent){const y=k.filter(A=>A.parentId===T.id);T.hasOwnPage&&T.slug?v+=`
          <li class="nav-item dropdown">
            <a class="nav-link" id="dropToggle" href="/${T.slug}" >
              ${T.title} <span class="arrow"></span>
            </a>
            <ul class="custom-dropdown dropdown-menu">
              ${y.map(A=>`<li><a class="dropdown-item" href="/${A.slug}">${A.title}</a></li>`).join(`
`)}
            </ul>
          </li>
        `:v+=`
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button">
              ${T.title}
            </a>
            <ul class="custom-dropdown dropdown-menu">
              ${y.map(A=>`<li><a class="dropdown-item" href="/${A.slug}">${A.title}</a></li>`).join(`
`)}
            </ul>
          </li>
        `}else{const y=T.isHome?"/":`/${T.slug}`;v+=`<li class="nav-item"><a class="nav-link" href="${y}">${T.title}</a></li>
`}}),b.forEach(T=>{v+=`<li class="nav-item">
      <a class="nav-link" href="${T.url}">
        ${T.label}
      </a>
    </li>
`}),v})(),w),u=Mm(R),f={};return p.forEach(v=>{if(v.isDropdownParent&&!v.hasOwnPage||!v.formData)return;const b=v.isHome?"index.php":`${v.slug}.php`;f[b]=Lm(v,R)}),{pages:f,functions:m,styles:u}}function Hm(p,R,g){const w=g.filter(N=>!(N.isDropdownParent&&!N.hasOwnPage)).map(N=>{const m=N.isHome?"/":`/${N.slug}`,u=N.title;return`<li><a href="${m}">${u}</a></li>`}).join(`
              `);return`<?php
function site_header($title, $description)
{
  $canonical = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  ob_start(); ?>
<!DOCTYPE html>
<html lang="${p.lang||"en"}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <meta name="description" content="<?php echo $description; ?>">
    <link rel="canonical" href="<?php echo $canonical; ?>">
    ${p.favicon?'<link rel="icon" type="image/png" href="/images/favicon.png">':""}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/style.css">
</head>
<body>
${(()=>{switch(p.navStyle){case"1":return jd(p,R);case"2":return _m(p,R);case"3":return Em(p,R);case"4":return Cm(p,R);default:return jd(p,R)}})()} 
<?php
  return ob_get_clean();
}
  ?>

  ${p.sidebar?`
    <?php
    function sidebar()
    {
      ob_start(); ?>
    
      <div class="col-lg-4 col-xl-3 pt-3 d-flex flex-column align-items-center">
      ${g.length>1?`  
          <div>
          <h2>Quick Links</h2>
            <ul class="sidebar-page-list">
              ${w}
            </ul>
      </div>`:""}
     
        <div class="mb-2">
          <iframe width="279" height="330" class="rounded" src="https://www.youtube.com/embed/N6SY8uqaPZI" title="In 2022, the Brazilian Congress broke the record for changes to the country’s Constitution"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    
    <?php
      return ob_get_clean();
    }
    ?>
    `:""}


<?php

function site_footer()
{
  ob_start(); ?>
${p.footerStyle==="1"?lo(p):p.footerStyle==="2"?ks(p):Rs(p)}

    <script src="/assets/bootstrap/js/bootstrap.min.js"><\/script>
    <script src="/assets/js/main.js"><\/script>
</body>
</html>
<?php
  return ob_get_clean();
}
?>`}function Lm(p,R){return`<?php
require_once 'functions.php';

echo site_header("${p.formData.title||p.title}", "${p.formData.desc||""}");
?>

${(()=>{switch(R.navStyle){case"1":return Dd(R,p);case"2":return Sm(R,p);case"3":return Am(R,p);case"4":return km(R,p);default:return Dd(R,p)}})()}

<main class="container my-5">
  <div class="row">
    <div class="${R.sidebar?"col-lg-8 col-xl-9":"col-12"} content-area">
    ${Bm(p.formData.mainContent)||'<div class="text-center text-muted py-5"><h3>No content added yet</h3><p>Add some content to see it here</p></div>'}
    </div>
    ${R.sidebar?'<?php if (function_exists("sidebar")) echo sidebar(); ?>':""}
  </div>
</main>

<?php
echo site_footer();
?>`}function oo(p){throw new Error('Could not dynamically require "'+p+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Cs={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Ud;function qm(){return Ud||(Ud=1,function(p,R){(function(g){p.exports=g()})(function(){return function g(w,N,m){function u(b,S){if(!N[b]){if(!w[b]){var k=typeof oo=="function"&&oo;if(!S&&k)return k(b,!0);if(f)return f(b,!0);var T=new Error("Cannot find module '"+b+"'");throw T.code="MODULE_NOT_FOUND",T}var y=N[b]={exports:{}};w[b][0].call(y.exports,function(A){var d=w[b][1][A];return u(d||A)},y,y.exports,g,w,N,m)}return N[b].exports}for(var f=typeof oo=="function"&&oo,v=0;v<m.length;v++)u(m[v]);return u}({1:[function(g,w,N){var m=g("./utils"),u=g("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";N.encode=function(v){for(var b,S,k,T,y,A,d,c=[],_=0,E=v.length,M=E,q=m.getTypeOf(v)!=="string";_<v.length;)M=E-_,k=q?(b=v[_++],S=_<E?v[_++]:0,_<E?v[_++]:0):(b=v.charCodeAt(_++),S=_<E?v.charCodeAt(_++):0,_<E?v.charCodeAt(_++):0),T=b>>2,y=(3&b)<<4|S>>4,A=1<M?(15&S)<<2|k>>6:64,d=2<M?63&k:64,c.push(f.charAt(T)+f.charAt(y)+f.charAt(A)+f.charAt(d));return c.join("")},N.decode=function(v){var b,S,k,T,y,A,d=0,c=0,_="data:";if(v.substr(0,_.length)===_)throw new Error("Invalid base64 input, it looks like a data url.");var E,M=3*(v=v.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(v.charAt(v.length-1)===f.charAt(64)&&M--,v.charAt(v.length-2)===f.charAt(64)&&M--,M%1!=0)throw new Error("Invalid base64 input, bad content length.");for(E=u.uint8array?new Uint8Array(0|M):new Array(0|M);d<v.length;)b=f.indexOf(v.charAt(d++))<<2|(T=f.indexOf(v.charAt(d++)))>>4,S=(15&T)<<4|(y=f.indexOf(v.charAt(d++)))>>2,k=(3&y)<<6|(A=f.indexOf(v.charAt(d++))),E[c++]=b,y!==64&&(E[c++]=S),A!==64&&(E[c++]=k);return E}},{"./support":30,"./utils":32}],2:[function(g,w,N){var m=g("./external"),u=g("./stream/DataWorker"),f=g("./stream/Crc32Probe"),v=g("./stream/DataLengthProbe");function b(S,k,T,y,A){this.compressedSize=S,this.uncompressedSize=k,this.crc32=T,this.compression=y,this.compressedContent=A}b.prototype={getContentWorker:function(){var S=new u(m.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new v("data_length")),k=this;return S.on("end",function(){if(this.streamInfo.data_length!==k.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),S},getCompressedWorker:function(){return new u(m.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},b.createWorkerFrom=function(S,k,T){return S.pipe(new f).pipe(new v("uncompressedSize")).pipe(k.compressWorker(T)).pipe(new v("compressedSize")).withStreamInfo("compression",k)},w.exports=b},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(g,w,N){var m=g("./stream/GenericWorker");N.STORE={magic:"\0\0",compressWorker:function(){return new m("STORE compression")},uncompressWorker:function(){return new m("STORE decompression")}},N.DEFLATE=g("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(g,w,N){var m=g("./utils"),u=function(){for(var f,v=[],b=0;b<256;b++){f=b;for(var S=0;S<8;S++)f=1&f?3988292384^f>>>1:f>>>1;v[b]=f}return v}();w.exports=function(f,v){return f!==void 0&&f.length?m.getTypeOf(f)!=="string"?function(b,S,k,T){var y=u,A=T+k;b^=-1;for(var d=T;d<A;d++)b=b>>>8^y[255&(b^S[d])];return-1^b}(0|v,f,f.length,0):function(b,S,k,T){var y=u,A=T+k;b^=-1;for(var d=T;d<A;d++)b=b>>>8^y[255&(b^S.charCodeAt(d))];return-1^b}(0|v,f,f.length,0):0}},{"./utils":32}],5:[function(g,w,N){N.base64=!1,N.binary=!1,N.dir=!1,N.createFolders=!0,N.date=null,N.compression=null,N.compressionOptions=null,N.comment=null,N.unixPermissions=null,N.dosPermissions=null},{}],6:[function(g,w,N){var m=null;m=typeof Promise<"u"?Promise:g("lie"),w.exports={Promise:m}},{lie:37}],7:[function(g,w,N){var m=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",u=g("pako"),f=g("./utils"),v=g("./stream/GenericWorker"),b=m?"uint8array":"array";function S(k,T){v.call(this,"FlateWorker/"+k),this._pako=null,this._pakoAction=k,this._pakoOptions=T,this.meta={}}N.magic="\b\0",f.inherits(S,v),S.prototype.processChunk=function(k){this.meta=k.meta,this._pako===null&&this._createPako(),this._pako.push(f.transformTo(b,k.data),!1)},S.prototype.flush=function(){v.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},S.prototype.cleanUp=function(){v.prototype.cleanUp.call(this),this._pako=null},S.prototype._createPako=function(){this._pako=new u[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var k=this;this._pako.onData=function(T){k.push({data:T,meta:k.meta})}},N.compressWorker=function(k){return new S("Deflate",k)},N.uncompressWorker=function(){return new S("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(g,w,N){function m(y,A){var d,c="";for(d=0;d<A;d++)c+=String.fromCharCode(255&y),y>>>=8;return c}function u(y,A,d,c,_,E){var M,q,H=y.file,ne=y.compression,F=E!==b.utf8encode,X=f.transformTo("string",E(H.name)),$=f.transformTo("string",b.utf8encode(H.name)),de=H.comment,me=f.transformTo("string",E(de)),z=f.transformTo("string",b.utf8encode(de)),ae=$.length!==H.name.length,h=z.length!==de.length,ie="",Z="",Y="",se=H.dir,J=H.date,C={crc32:0,compressedSize:0,uncompressedSize:0};A&&!d||(C.crc32=y.crc32,C.compressedSize=y.compressedSize,C.uncompressedSize=y.uncompressedSize);var j=0;A&&(j|=8),F||!ae&&!h||(j|=2048);var B=0,ee=0;se&&(B|=16),_==="UNIX"?(ee=798,B|=function(le,ge){var Me=le;return le||(Me=ge?16893:33204),(65535&Me)<<16}(H.unixPermissions,se)):(ee=20,B|=function(le){return 63&(le||0)}(H.dosPermissions)),M=J.getUTCHours(),M<<=6,M|=J.getUTCMinutes(),M<<=5,M|=J.getUTCSeconds()/2,q=J.getUTCFullYear()-1980,q<<=4,q|=J.getUTCMonth()+1,q<<=5,q|=J.getUTCDate(),ae&&(Z=m(1,1)+m(S(X),4)+$,ie+="up"+m(Z.length,2)+Z),h&&(Y=m(1,1)+m(S(me),4)+z,ie+="uc"+m(Y.length,2)+Y);var re="";return re+=`
\0`,re+=m(j,2),re+=ne.magic,re+=m(M,2),re+=m(q,2),re+=m(C.crc32,4),re+=m(C.compressedSize,4),re+=m(C.uncompressedSize,4),re+=m(X.length,2),re+=m(ie.length,2),{fileRecord:k.LOCAL_FILE_HEADER+re+X+ie,dirRecord:k.CENTRAL_FILE_HEADER+m(ee,2)+re+m(me.length,2)+"\0\0\0\0"+m(B,4)+m(c,4)+X+ie+me}}var f=g("../utils"),v=g("../stream/GenericWorker"),b=g("../utf8"),S=g("../crc32"),k=g("../signature");function T(y,A,d,c){v.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=A,this.zipPlatform=d,this.encodeFileName=c,this.streamFiles=y,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}f.inherits(T,v),T.prototype.push=function(y){var A=y.meta.percent||0,d=this.entriesCount,c=this._sources.length;this.accumulate?this.contentBuffer.push(y):(this.bytesWritten+=y.data.length,v.prototype.push.call(this,{data:y.data,meta:{currentFile:this.currentFile,percent:d?(A+100*(d-c-1))/d:100}}))},T.prototype.openedSource=function(y){this.currentSourceOffset=this.bytesWritten,this.currentFile=y.file.name;var A=this.streamFiles&&!y.file.dir;if(A){var d=u(y,A,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:d.fileRecord,meta:{percent:0}})}else this.accumulate=!0},T.prototype.closedSource=function(y){this.accumulate=!1;var A=this.streamFiles&&!y.file.dir,d=u(y,A,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(d.dirRecord),A)this.push({data:function(c){return k.DATA_DESCRIPTOR+m(c.crc32,4)+m(c.compressedSize,4)+m(c.uncompressedSize,4)}(y),meta:{percent:100}});else for(this.push({data:d.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},T.prototype.flush=function(){for(var y=this.bytesWritten,A=0;A<this.dirRecords.length;A++)this.push({data:this.dirRecords[A],meta:{percent:100}});var d=this.bytesWritten-y,c=function(_,E,M,q,H){var ne=f.transformTo("string",H(q));return k.CENTRAL_DIRECTORY_END+"\0\0\0\0"+m(_,2)+m(_,2)+m(E,4)+m(M,4)+m(ne.length,2)+ne}(this.dirRecords.length,d,y,this.zipComment,this.encodeFileName);this.push({data:c,meta:{percent:100}})},T.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},T.prototype.registerPrevious=function(y){this._sources.push(y);var A=this;return y.on("data",function(d){A.processChunk(d)}),y.on("end",function(){A.closedSource(A.previous.streamInfo),A._sources.length?A.prepareNextSource():A.end()}),y.on("error",function(d){A.error(d)}),this},T.prototype.resume=function(){return!!v.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},T.prototype.error=function(y){var A=this._sources;if(!v.prototype.error.call(this,y))return!1;for(var d=0;d<A.length;d++)try{A[d].error(y)}catch{}return!0},T.prototype.lock=function(){v.prototype.lock.call(this);for(var y=this._sources,A=0;A<y.length;A++)y[A].lock()},w.exports=T},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(g,w,N){var m=g("../compressions"),u=g("./ZipFileWorker");N.generateWorker=function(f,v,b){var S=new u(v.streamFiles,b,v.platform,v.encodeFileName),k=0;try{f.forEach(function(T,y){k++;var A=function(E,M){var q=E||M,H=m[q];if(!H)throw new Error(q+" is not a valid compression method !");return H}(y.options.compression,v.compression),d=y.options.compressionOptions||v.compressionOptions||{},c=y.dir,_=y.date;y._compressWorker(A,d).withStreamInfo("file",{name:T,dir:c,date:_,comment:y.comment||"",unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions}).pipe(S)}),S.entriesCount=k}catch(T){S.error(T)}return S}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(g,w,N){function m(){if(!(this instanceof m))return new m;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var u=new m;for(var f in this)typeof this[f]!="function"&&(u[f]=this[f]);return u}}(m.prototype=g("./object")).loadAsync=g("./load"),m.support=g("./support"),m.defaults=g("./defaults"),m.version="3.10.1",m.loadAsync=function(u,f){return new m().loadAsync(u,f)},m.external=g("./external"),w.exports=m},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(g,w,N){var m=g("./utils"),u=g("./external"),f=g("./utf8"),v=g("./zipEntries"),b=g("./stream/Crc32Probe"),S=g("./nodejsUtils");function k(T){return new u.Promise(function(y,A){var d=T.decompressed.getContentWorker().pipe(new b);d.on("error",function(c){A(c)}).on("end",function(){d.streamInfo.crc32!==T.decompressed.crc32?A(new Error("Corrupted zip : CRC32 mismatch")):y()}).resume()})}w.exports=function(T,y){var A=this;return y=m.extend(y||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:f.utf8decode}),S.isNode&&S.isStream(T)?u.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):m.prepareContent("the loaded zip file",T,!0,y.optimizedBinaryString,y.base64).then(function(d){var c=new v(y);return c.load(d),c}).then(function(d){var c=[u.Promise.resolve(d)],_=d.files;if(y.checkCRC32)for(var E=0;E<_.length;E++)c.push(k(_[E]));return u.Promise.all(c)}).then(function(d){for(var c=d.shift(),_=c.files,E=0;E<_.length;E++){var M=_[E],q=M.fileNameStr,H=m.resolve(M.fileNameStr);A.file(H,M.decompressed,{binary:!0,optimizedBinaryString:!0,date:M.date,dir:M.dir,comment:M.fileCommentStr.length?M.fileCommentStr:null,unixPermissions:M.unixPermissions,dosPermissions:M.dosPermissions,createFolders:y.createFolders}),M.dir||(A.file(H).unsafeOriginalName=q)}return c.zipComment.length&&(A.comment=c.zipComment),A})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(g,w,N){var m=g("../utils"),u=g("../stream/GenericWorker");function f(v,b){u.call(this,"Nodejs stream input adapter for "+v),this._upstreamEnded=!1,this._bindStream(b)}m.inherits(f,u),f.prototype._bindStream=function(v){var b=this;(this._stream=v).pause(),v.on("data",function(S){b.push({data:S,meta:{percent:0}})}).on("error",function(S){b.isPaused?this.generatedError=S:b.error(S)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},f.prototype.pause=function(){return!!u.prototype.pause.call(this)&&(this._stream.pause(),!0)},f.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},w.exports=f},{"../stream/GenericWorker":28,"../utils":32}],13:[function(g,w,N){var m=g("readable-stream").Readable;function u(f,v,b){m.call(this,v),this._helper=f;var S=this;f.on("data",function(k,T){S.push(k)||S._helper.pause(),b&&b(T)}).on("error",function(k){S.emit("error",k)}).on("end",function(){S.push(null)})}g("../utils").inherits(u,m),u.prototype._read=function(){this._helper.resume()},w.exports=u},{"../utils":32,"readable-stream":16}],14:[function(g,w,N){w.exports={isNode:typeof Buffer<"u",newBufferFrom:function(m,u){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(m,u);if(typeof m=="number")throw new Error('The "data" argument must not be a number');return new Buffer(m,u)},allocBuffer:function(m){if(Buffer.alloc)return Buffer.alloc(m);var u=new Buffer(m);return u.fill(0),u},isBuffer:function(m){return Buffer.isBuffer(m)},isStream:function(m){return m&&typeof m.on=="function"&&typeof m.pause=="function"&&typeof m.resume=="function"}}},{}],15:[function(g,w,N){function m(H,ne,F){var X,$=f.getTypeOf(ne),de=f.extend(F||{},S);de.date=de.date||new Date,de.compression!==null&&(de.compression=de.compression.toUpperCase()),typeof de.unixPermissions=="string"&&(de.unixPermissions=parseInt(de.unixPermissions,8)),de.unixPermissions&&16384&de.unixPermissions&&(de.dir=!0),de.dosPermissions&&16&de.dosPermissions&&(de.dir=!0),de.dir&&(H=_(H)),de.createFolders&&(X=c(H))&&E.call(this,X,!0);var me=$==="string"&&de.binary===!1&&de.base64===!1;F&&F.binary!==void 0||(de.binary=!me),(ne instanceof k&&ne.uncompressedSize===0||de.dir||!ne||ne.length===0)&&(de.base64=!1,de.binary=!0,ne="",de.compression="STORE",$="string");var z=null;z=ne instanceof k||ne instanceof v?ne:A.isNode&&A.isStream(ne)?new d(H,ne):f.prepareContent(H,ne,de.binary,de.optimizedBinaryString,de.base64);var ae=new T(H,z,de);this.files[H]=ae}var u=g("./utf8"),f=g("./utils"),v=g("./stream/GenericWorker"),b=g("./stream/StreamHelper"),S=g("./defaults"),k=g("./compressedObject"),T=g("./zipObject"),y=g("./generate"),A=g("./nodejsUtils"),d=g("./nodejs/NodejsStreamInputAdapter"),c=function(H){H.slice(-1)==="/"&&(H=H.substring(0,H.length-1));var ne=H.lastIndexOf("/");return 0<ne?H.substring(0,ne):""},_=function(H){return H.slice(-1)!=="/"&&(H+="/"),H},E=function(H,ne){return ne=ne!==void 0?ne:S.createFolders,H=_(H),this.files[H]||m.call(this,H,null,{dir:!0,createFolders:ne}),this.files[H]};function M(H){return Object.prototype.toString.call(H)==="[object RegExp]"}var q={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(H){var ne,F,X;for(ne in this.files)X=this.files[ne],(F=ne.slice(this.root.length,ne.length))&&ne.slice(0,this.root.length)===this.root&&H(F,X)},filter:function(H){var ne=[];return this.forEach(function(F,X){H(F,X)&&ne.push(X)}),ne},file:function(H,ne,F){if(arguments.length!==1)return H=this.root+H,m.call(this,H,ne,F),this;if(M(H)){var X=H;return this.filter(function(de,me){return!me.dir&&X.test(de)})}var $=this.files[this.root+H];return $&&!$.dir?$:null},folder:function(H){if(!H)return this;if(M(H))return this.filter(function($,de){return de.dir&&H.test($)});var ne=this.root+H,F=E.call(this,ne),X=this.clone();return X.root=F.name,X},remove:function(H){H=this.root+H;var ne=this.files[H];if(ne||(H.slice(-1)!=="/"&&(H+="/"),ne=this.files[H]),ne&&!ne.dir)delete this.files[H];else for(var F=this.filter(function($,de){return de.name.slice(0,H.length)===H}),X=0;X<F.length;X++)delete this.files[F[X].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(H){var ne,F={};try{if((F=f.extend(H||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:u.utf8encode})).type=F.type.toLowerCase(),F.compression=F.compression.toUpperCase(),F.type==="binarystring"&&(F.type="string"),!F.type)throw new Error("No output type specified.");f.checkSupport(F.type),F.platform!=="darwin"&&F.platform!=="freebsd"&&F.platform!=="linux"&&F.platform!=="sunos"||(F.platform="UNIX"),F.platform==="win32"&&(F.platform="DOS");var X=F.comment||this.comment||"";ne=y.generateWorker(this,F,X)}catch($){(ne=new v("error")).error($)}return new b(ne,F.type||"string",F.mimeType)},generateAsync:function(H,ne){return this.generateInternalStream(H).accumulate(ne)},generateNodeStream:function(H,ne){return(H=H||{}).type||(H.type="nodebuffer"),this.generateInternalStream(H).toNodejsStream(ne)}};w.exports=q},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(g,w,N){w.exports=g("stream")},{stream:void 0}],17:[function(g,w,N){var m=g("./DataReader");function u(f){m.call(this,f);for(var v=0;v<this.data.length;v++)f[v]=255&f[v]}g("../utils").inherits(u,m),u.prototype.byteAt=function(f){return this.data[this.zero+f]},u.prototype.lastIndexOfSignature=function(f){for(var v=f.charCodeAt(0),b=f.charCodeAt(1),S=f.charCodeAt(2),k=f.charCodeAt(3),T=this.length-4;0<=T;--T)if(this.data[T]===v&&this.data[T+1]===b&&this.data[T+2]===S&&this.data[T+3]===k)return T-this.zero;return-1},u.prototype.readAndCheckSignature=function(f){var v=f.charCodeAt(0),b=f.charCodeAt(1),S=f.charCodeAt(2),k=f.charCodeAt(3),T=this.readData(4);return v===T[0]&&b===T[1]&&S===T[2]&&k===T[3]},u.prototype.readData=function(f){if(this.checkOffset(f),f===0)return[];var v=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,v},w.exports=u},{"../utils":32,"./DataReader":18}],18:[function(g,w,N){var m=g("../utils");function u(f){this.data=f,this.length=f.length,this.index=0,this.zero=0}u.prototype={checkOffset:function(f){this.checkIndex(this.index+f)},checkIndex:function(f){if(this.length<this.zero+f||f<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+f+"). Corrupted zip ?")},setIndex:function(f){this.checkIndex(f),this.index=f},skip:function(f){this.setIndex(this.index+f)},byteAt:function(){},readInt:function(f){var v,b=0;for(this.checkOffset(f),v=this.index+f-1;v>=this.index;v--)b=(b<<8)+this.byteAt(v);return this.index+=f,b},readString:function(f){return m.transformTo("string",this.readData(f))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var f=this.readInt(4);return new Date(Date.UTC(1980+(f>>25&127),(f>>21&15)-1,f>>16&31,f>>11&31,f>>5&63,(31&f)<<1))}},w.exports=u},{"../utils":32}],19:[function(g,w,N){var m=g("./Uint8ArrayReader");function u(f){m.call(this,f)}g("../utils").inherits(u,m),u.prototype.readData=function(f){this.checkOffset(f);var v=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,v},w.exports=u},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(g,w,N){var m=g("./DataReader");function u(f){m.call(this,f)}g("../utils").inherits(u,m),u.prototype.byteAt=function(f){return this.data.charCodeAt(this.zero+f)},u.prototype.lastIndexOfSignature=function(f){return this.data.lastIndexOf(f)-this.zero},u.prototype.readAndCheckSignature=function(f){return f===this.readData(4)},u.prototype.readData=function(f){this.checkOffset(f);var v=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,v},w.exports=u},{"../utils":32,"./DataReader":18}],21:[function(g,w,N){var m=g("./ArrayReader");function u(f){m.call(this,f)}g("../utils").inherits(u,m),u.prototype.readData=function(f){if(this.checkOffset(f),f===0)return new Uint8Array(0);var v=this.data.subarray(this.zero+this.index,this.zero+this.index+f);return this.index+=f,v},w.exports=u},{"../utils":32,"./ArrayReader":17}],22:[function(g,w,N){var m=g("../utils"),u=g("../support"),f=g("./ArrayReader"),v=g("./StringReader"),b=g("./NodeBufferReader"),S=g("./Uint8ArrayReader");w.exports=function(k){var T=m.getTypeOf(k);return m.checkSupport(T),T!=="string"||u.uint8array?T==="nodebuffer"?new b(k):u.uint8array?new S(m.transformTo("uint8array",k)):new f(m.transformTo("array",k)):new v(k)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(g,w,N){N.LOCAL_FILE_HEADER="PK",N.CENTRAL_FILE_HEADER="PK",N.CENTRAL_DIRECTORY_END="PK",N.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",N.ZIP64_CENTRAL_DIRECTORY_END="PK",N.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(g,w,N){var m=g("./GenericWorker"),u=g("../utils");function f(v){m.call(this,"ConvertWorker to "+v),this.destType=v}u.inherits(f,m),f.prototype.processChunk=function(v){this.push({data:u.transformTo(this.destType,v.data),meta:v.meta})},w.exports=f},{"../utils":32,"./GenericWorker":28}],25:[function(g,w,N){var m=g("./GenericWorker"),u=g("../crc32");function f(){m.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}g("../utils").inherits(f,m),f.prototype.processChunk=function(v){this.streamInfo.crc32=u(v.data,this.streamInfo.crc32||0),this.push(v)},w.exports=f},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(g,w,N){var m=g("../utils"),u=g("./GenericWorker");function f(v){u.call(this,"DataLengthProbe for "+v),this.propName=v,this.withStreamInfo(v,0)}m.inherits(f,u),f.prototype.processChunk=function(v){if(v){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+v.data.length}u.prototype.processChunk.call(this,v)},w.exports=f},{"../utils":32,"./GenericWorker":28}],27:[function(g,w,N){var m=g("../utils"),u=g("./GenericWorker");function f(v){u.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,v.then(function(S){b.dataIsReady=!0,b.data=S,b.max=S&&S.length||0,b.type=m.getTypeOf(S),b.isPaused||b._tickAndRepeat()},function(S){b.error(S)})}m.inherits(f,u),f.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this.data=null},f.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,m.delay(this._tickAndRepeat,[],this)),!0)},f.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(m.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},f.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var v=null,b=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":v=this.data.substring(this.index,b);break;case"uint8array":v=this.data.subarray(this.index,b);break;case"array":case"nodebuffer":v=this.data.slice(this.index,b)}return this.index=b,this.push({data:v,meta:{percent:this.max?this.index/this.max*100:0}})},w.exports=f},{"../utils":32,"./GenericWorker":28}],28:[function(g,w,N){function m(u){this.name=u||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}m.prototype={push:function(u){this.emit("data",u)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(u){this.emit("error",u)}return!0},error:function(u){return!this.isFinished&&(this.isPaused?this.generatedError=u:(this.isFinished=!0,this.emit("error",u),this.previous&&this.previous.error(u),this.cleanUp()),!0)},on:function(u,f){return this._listeners[u].push(f),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(u,f){if(this._listeners[u])for(var v=0;v<this._listeners[u].length;v++)this._listeners[u][v].call(this,f)},pipe:function(u){return u.registerPrevious(this)},registerPrevious:function(u){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=u.streamInfo,this.mergeStreamInfo(),this.previous=u;var f=this;return u.on("data",function(v){f.processChunk(v)}),u.on("end",function(){f.end()}),u.on("error",function(v){f.error(v)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var u=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),u=!0),this.previous&&this.previous.resume(),!u},flush:function(){},processChunk:function(u){this.push(u)},withStreamInfo:function(u,f){return this.extraStreamInfo[u]=f,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var u in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,u)&&(this.streamInfo[u]=this.extraStreamInfo[u])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var u="Worker "+this.name;return this.previous?this.previous+" -> "+u:u}},w.exports=m},{}],29:[function(g,w,N){var m=g("../utils"),u=g("./ConvertWorker"),f=g("./GenericWorker"),v=g("../base64"),b=g("../support"),S=g("../external"),k=null;if(b.nodestream)try{k=g("../nodejs/NodejsStreamOutputAdapter")}catch{}function T(A,d){return new S.Promise(function(c,_){var E=[],M=A._internalType,q=A._outputType,H=A._mimeType;A.on("data",function(ne,F){E.push(ne),d&&d(F)}).on("error",function(ne){E=[],_(ne)}).on("end",function(){try{var ne=function(F,X,$){switch(F){case"blob":return m.newBlob(m.transformTo("arraybuffer",X),$);case"base64":return v.encode(X);default:return m.transformTo(F,X)}}(q,function(F,X){var $,de=0,me=null,z=0;for($=0;$<X.length;$++)z+=X[$].length;switch(F){case"string":return X.join("");case"array":return Array.prototype.concat.apply([],X);case"uint8array":for(me=new Uint8Array(z),$=0;$<X.length;$++)me.set(X[$],de),de+=X[$].length;return me;case"nodebuffer":return Buffer.concat(X);default:throw new Error("concat : unsupported type '"+F+"'")}}(M,E),H);c(ne)}catch(F){_(F)}E=[]}).resume()})}function y(A,d,c){var _=d;switch(d){case"blob":case"arraybuffer":_="uint8array";break;case"base64":_="string"}try{this._internalType=_,this._outputType=d,this._mimeType=c,m.checkSupport(_),this._worker=A.pipe(new u(_)),A.lock()}catch(E){this._worker=new f("error"),this._worker.error(E)}}y.prototype={accumulate:function(A){return T(this,A)},on:function(A,d){var c=this;return A==="data"?this._worker.on(A,function(_){d.call(c,_.data,_.meta)}):this._worker.on(A,function(){m.delay(d,arguments,c)}),this},resume:function(){return m.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(A){if(m.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new k(this,{objectMode:this._outputType!=="nodebuffer"},A)}},w.exports=y},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(g,w,N){if(N.base64=!0,N.array=!0,N.string=!0,N.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",N.nodebuffer=typeof Buffer<"u",N.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")N.blob=!1;else{var m=new ArrayBuffer(0);try{N.blob=new Blob([m],{type:"application/zip"}).size===0}catch{try{var u=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);u.append(m),N.blob=u.getBlob("application/zip").size===0}catch{N.blob=!1}}}try{N.nodestream=!!g("readable-stream").Readable}catch{N.nodestream=!1}},{"readable-stream":16}],31:[function(g,w,N){for(var m=g("./utils"),u=g("./support"),f=g("./nodejsUtils"),v=g("./stream/GenericWorker"),b=new Array(256),S=0;S<256;S++)b[S]=252<=S?6:248<=S?5:240<=S?4:224<=S?3:192<=S?2:1;b[254]=b[254]=1;function k(){v.call(this,"utf-8 decode"),this.leftOver=null}function T(){v.call(this,"utf-8 encode")}N.utf8encode=function(y){return u.nodebuffer?f.newBufferFrom(y,"utf-8"):function(A){var d,c,_,E,M,q=A.length,H=0;for(E=0;E<q;E++)(64512&(c=A.charCodeAt(E)))==55296&&E+1<q&&(64512&(_=A.charCodeAt(E+1)))==56320&&(c=65536+(c-55296<<10)+(_-56320),E++),H+=c<128?1:c<2048?2:c<65536?3:4;for(d=u.uint8array?new Uint8Array(H):new Array(H),E=M=0;M<H;E++)(64512&(c=A.charCodeAt(E)))==55296&&E+1<q&&(64512&(_=A.charCodeAt(E+1)))==56320&&(c=65536+(c-55296<<10)+(_-56320),E++),c<128?d[M++]=c:(c<2048?d[M++]=192|c>>>6:(c<65536?d[M++]=224|c>>>12:(d[M++]=240|c>>>18,d[M++]=128|c>>>12&63),d[M++]=128|c>>>6&63),d[M++]=128|63&c);return d}(y)},N.utf8decode=function(y){return u.nodebuffer?m.transformTo("nodebuffer",y).toString("utf-8"):function(A){var d,c,_,E,M=A.length,q=new Array(2*M);for(d=c=0;d<M;)if((_=A[d++])<128)q[c++]=_;else if(4<(E=b[_]))q[c++]=65533,d+=E-1;else{for(_&=E===2?31:E===3?15:7;1<E&&d<M;)_=_<<6|63&A[d++],E--;1<E?q[c++]=65533:_<65536?q[c++]=_:(_-=65536,q[c++]=55296|_>>10&1023,q[c++]=56320|1023&_)}return q.length!==c&&(q.subarray?q=q.subarray(0,c):q.length=c),m.applyFromCharCode(q)}(y=m.transformTo(u.uint8array?"uint8array":"array",y))},m.inherits(k,v),k.prototype.processChunk=function(y){var A=m.transformTo(u.uint8array?"uint8array":"array",y.data);if(this.leftOver&&this.leftOver.length){if(u.uint8array){var d=A;(A=new Uint8Array(d.length+this.leftOver.length)).set(this.leftOver,0),A.set(d,this.leftOver.length)}else A=this.leftOver.concat(A);this.leftOver=null}var c=function(E,M){var q;for((M=M||E.length)>E.length&&(M=E.length),q=M-1;0<=q&&(192&E[q])==128;)q--;return q<0||q===0?M:q+b[E[q]]>M?q:M}(A),_=A;c!==A.length&&(u.uint8array?(_=A.subarray(0,c),this.leftOver=A.subarray(c,A.length)):(_=A.slice(0,c),this.leftOver=A.slice(c,A.length))),this.push({data:N.utf8decode(_),meta:y.meta})},k.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:N.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},N.Utf8DecodeWorker=k,m.inherits(T,v),T.prototype.processChunk=function(y){this.push({data:N.utf8encode(y.data),meta:y.meta})},N.Utf8EncodeWorker=T},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(g,w,N){var m=g("./support"),u=g("./base64"),f=g("./nodejsUtils"),v=g("./external");function b(d){return d}function S(d,c){for(var _=0;_<d.length;++_)c[_]=255&d.charCodeAt(_);return c}g("setimmediate"),N.newBlob=function(d,c){N.checkSupport("blob");try{return new Blob([d],{type:c})}catch{try{var _=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return _.append(d),_.getBlob(c)}catch{throw new Error("Bug : can't construct the Blob.")}}};var k={stringifyByChunk:function(d,c,_){var E=[],M=0,q=d.length;if(q<=_)return String.fromCharCode.apply(null,d);for(;M<q;)c==="array"||c==="nodebuffer"?E.push(String.fromCharCode.apply(null,d.slice(M,Math.min(M+_,q)))):E.push(String.fromCharCode.apply(null,d.subarray(M,Math.min(M+_,q)))),M+=_;return E.join("")},stringifyByChar:function(d){for(var c="",_=0;_<d.length;_++)c+=String.fromCharCode(d[_]);return c},applyCanBeUsed:{uint8array:function(){try{return m.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return m.nodebuffer&&String.fromCharCode.apply(null,f.allocBuffer(1)).length===1}catch{return!1}}()}};function T(d){var c=65536,_=N.getTypeOf(d),E=!0;if(_==="uint8array"?E=k.applyCanBeUsed.uint8array:_==="nodebuffer"&&(E=k.applyCanBeUsed.nodebuffer),E)for(;1<c;)try{return k.stringifyByChunk(d,_,c)}catch{c=Math.floor(c/2)}return k.stringifyByChar(d)}function y(d,c){for(var _=0;_<d.length;_++)c[_]=d[_];return c}N.applyFromCharCode=T;var A={};A.string={string:b,array:function(d){return S(d,new Array(d.length))},arraybuffer:function(d){return A.string.uint8array(d).buffer},uint8array:function(d){return S(d,new Uint8Array(d.length))},nodebuffer:function(d){return S(d,f.allocBuffer(d.length))}},A.array={string:T,array:b,arraybuffer:function(d){return new Uint8Array(d).buffer},uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return f.newBufferFrom(d)}},A.arraybuffer={string:function(d){return T(new Uint8Array(d))},array:function(d){return y(new Uint8Array(d),new Array(d.byteLength))},arraybuffer:b,uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return f.newBufferFrom(new Uint8Array(d))}},A.uint8array={string:T,array:function(d){return y(d,new Array(d.length))},arraybuffer:function(d){return d.buffer},uint8array:b,nodebuffer:function(d){return f.newBufferFrom(d)}},A.nodebuffer={string:T,array:function(d){return y(d,new Array(d.length))},arraybuffer:function(d){return A.nodebuffer.uint8array(d).buffer},uint8array:function(d){return y(d,new Uint8Array(d.length))},nodebuffer:b},N.transformTo=function(d,c){if(c=c||"",!d)return c;N.checkSupport(d);var _=N.getTypeOf(c);return A[_][d](c)},N.resolve=function(d){for(var c=d.split("/"),_=[],E=0;E<c.length;E++){var M=c[E];M==="."||M===""&&E!==0&&E!==c.length-1||(M===".."?_.pop():_.push(M))}return _.join("/")},N.getTypeOf=function(d){return typeof d=="string"?"string":Object.prototype.toString.call(d)==="[object Array]"?"array":m.nodebuffer&&f.isBuffer(d)?"nodebuffer":m.uint8array&&d instanceof Uint8Array?"uint8array":m.arraybuffer&&d instanceof ArrayBuffer?"arraybuffer":void 0},N.checkSupport=function(d){if(!m[d.toLowerCase()])throw new Error(d+" is not supported by this platform")},N.MAX_VALUE_16BITS=65535,N.MAX_VALUE_32BITS=-1,N.pretty=function(d){var c,_,E="";for(_=0;_<(d||"").length;_++)E+="\\x"+((c=d.charCodeAt(_))<16?"0":"")+c.toString(16).toUpperCase();return E},N.delay=function(d,c,_){setImmediate(function(){d.apply(_||null,c||[])})},N.inherits=function(d,c){function _(){}_.prototype=c.prototype,d.prototype=new _},N.extend=function(){var d,c,_={};for(d=0;d<arguments.length;d++)for(c in arguments[d])Object.prototype.hasOwnProperty.call(arguments[d],c)&&_[c]===void 0&&(_[c]=arguments[d][c]);return _},N.prepareContent=function(d,c,_,E,M){return v.Promise.resolve(c).then(function(q){return m.blob&&(q instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(q))!==-1)&&typeof FileReader<"u"?new v.Promise(function(H,ne){var F=new FileReader;F.onload=function(X){H(X.target.result)},F.onerror=function(X){ne(X.target.error)},F.readAsArrayBuffer(q)}):q}).then(function(q){var H=N.getTypeOf(q);return H?(H==="arraybuffer"?q=N.transformTo("uint8array",q):H==="string"&&(M?q=u.decode(q):_&&E!==!0&&(q=function(ne){return S(ne,m.uint8array?new Uint8Array(ne.length):new Array(ne.length))}(q))),q):v.Promise.reject(new Error("Can't read the data of '"+d+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(g,w,N){var m=g("./reader/readerFor"),u=g("./utils"),f=g("./signature"),v=g("./zipEntry"),b=g("./support");function S(k){this.files=[],this.loadOptions=k}S.prototype={checkSignature:function(k){if(!this.reader.readAndCheckSignature(k)){this.reader.index-=4;var T=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+u.pretty(T)+", expected "+u.pretty(k)+")")}},isSignature:function(k,T){var y=this.reader.index;this.reader.setIndex(k);var A=this.reader.readString(4)===T;return this.reader.setIndex(y),A},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var k=this.reader.readData(this.zipCommentLength),T=b.uint8array?"uint8array":"array",y=u.transformTo(T,k);this.zipComment=this.loadOptions.decodeFileName(y)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var k,T,y,A=this.zip64EndOfCentralSize-44;0<A;)k=this.reader.readInt(2),T=this.reader.readInt(4),y=this.reader.readData(T),this.zip64ExtensibleData[k]={id:k,length:T,value:y}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var k,T;for(k=0;k<this.files.length;k++)T=this.files[k],this.reader.setIndex(T.localHeaderOffset),this.checkSignature(f.LOCAL_FILE_HEADER),T.readLocalPart(this.reader),T.handleUTF8(),T.processAttributes()},readCentralDir:function(){var k;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(f.CENTRAL_FILE_HEADER);)(k=new v({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(k);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var k=this.reader.lastIndexOfSignature(f.CENTRAL_DIRECTORY_END);if(k<0)throw this.isSignature(0,f.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(k);var T=k;if(this.checkSignature(f.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===u.MAX_VALUE_16BITS||this.diskWithCentralDirStart===u.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===u.MAX_VALUE_16BITS||this.centralDirRecords===u.MAX_VALUE_16BITS||this.centralDirSize===u.MAX_VALUE_32BITS||this.centralDirOffset===u.MAX_VALUE_32BITS){if(this.zip64=!0,(k=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(k),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,f.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var y=this.centralDirOffset+this.centralDirSize;this.zip64&&(y+=20,y+=12+this.zip64EndOfCentralSize);var A=T-y;if(0<A)this.isSignature(T,f.CENTRAL_FILE_HEADER)||(this.reader.zero=A);else if(A<0)throw new Error("Corrupted zip: missing "+Math.abs(A)+" bytes.")},prepareReader:function(k){this.reader=m(k)},load:function(k){this.prepareReader(k),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},w.exports=S},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(g,w,N){var m=g("./reader/readerFor"),u=g("./utils"),f=g("./compressedObject"),v=g("./crc32"),b=g("./utf8"),S=g("./compressions"),k=g("./support");function T(y,A){this.options=y,this.loadOptions=A}T.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(y){var A,d;if(y.skip(22),this.fileNameLength=y.readInt(2),d=y.readInt(2),this.fileName=y.readData(this.fileNameLength),y.skip(d),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((A=function(c){for(var _ in S)if(Object.prototype.hasOwnProperty.call(S,_)&&S[_].magic===c)return S[_];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+u.pretty(this.compressionMethod)+" unknown (inner file : "+u.transformTo("string",this.fileName)+")");this.decompressed=new f(this.compressedSize,this.uncompressedSize,this.crc32,A,y.readData(this.compressedSize))},readCentralPart:function(y){this.versionMadeBy=y.readInt(2),y.skip(2),this.bitFlag=y.readInt(2),this.compressionMethod=y.readString(2),this.date=y.readDate(),this.crc32=y.readInt(4),this.compressedSize=y.readInt(4),this.uncompressedSize=y.readInt(4);var A=y.readInt(2);if(this.extraFieldsLength=y.readInt(2),this.fileCommentLength=y.readInt(2),this.diskNumberStart=y.readInt(2),this.internalFileAttributes=y.readInt(2),this.externalFileAttributes=y.readInt(4),this.localHeaderOffset=y.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");y.skip(A),this.readExtraFields(y),this.parseZIP64ExtraField(y),this.fileComment=y.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var y=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),y==0&&(this.dosPermissions=63&this.externalFileAttributes),y==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var y=m(this.extraFields[1].value);this.uncompressedSize===u.MAX_VALUE_32BITS&&(this.uncompressedSize=y.readInt(8)),this.compressedSize===u.MAX_VALUE_32BITS&&(this.compressedSize=y.readInt(8)),this.localHeaderOffset===u.MAX_VALUE_32BITS&&(this.localHeaderOffset=y.readInt(8)),this.diskNumberStart===u.MAX_VALUE_32BITS&&(this.diskNumberStart=y.readInt(4))}},readExtraFields:function(y){var A,d,c,_=y.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});y.index+4<_;)A=y.readInt(2),d=y.readInt(2),c=y.readData(d),this.extraFields[A]={id:A,length:d,value:c};y.setIndex(_)},handleUTF8:function(){var y=k.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=b.utf8decode(this.fileName),this.fileCommentStr=b.utf8decode(this.fileComment);else{var A=this.findExtraFieldUnicodePath();if(A!==null)this.fileNameStr=A;else{var d=u.transformTo(y,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(d)}var c=this.findExtraFieldUnicodeComment();if(c!==null)this.fileCommentStr=c;else{var _=u.transformTo(y,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(_)}}},findExtraFieldUnicodePath:function(){var y=this.extraFields[28789];if(y){var A=m(y.value);return A.readInt(1)!==1||v(this.fileName)!==A.readInt(4)?null:b.utf8decode(A.readData(y.length-5))}return null},findExtraFieldUnicodeComment:function(){var y=this.extraFields[25461];if(y){var A=m(y.value);return A.readInt(1)!==1||v(this.fileComment)!==A.readInt(4)?null:b.utf8decode(A.readData(y.length-5))}return null}},w.exports=T},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(g,w,N){function m(A,d,c){this.name=A,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=d,this._dataBinary=c.binary,this.options={compression:c.compression,compressionOptions:c.compressionOptions}}var u=g("./stream/StreamHelper"),f=g("./stream/DataWorker"),v=g("./utf8"),b=g("./compressedObject"),S=g("./stream/GenericWorker");m.prototype={internalStream:function(A){var d=null,c="string";try{if(!A)throw new Error("No output type specified.");var _=(c=A.toLowerCase())==="string"||c==="text";c!=="binarystring"&&c!=="text"||(c="string"),d=this._decompressWorker();var E=!this._dataBinary;E&&!_&&(d=d.pipe(new v.Utf8EncodeWorker)),!E&&_&&(d=d.pipe(new v.Utf8DecodeWorker))}catch(M){(d=new S("error")).error(M)}return new u(d,c,"")},async:function(A,d){return this.internalStream(A).accumulate(d)},nodeStream:function(A,d){return this.internalStream(A||"nodebuffer").toNodejsStream(d)},_compressWorker:function(A,d){if(this._data instanceof b&&this._data.compression.magic===A.magic)return this._data.getCompressedWorker();var c=this._decompressWorker();return this._dataBinary||(c=c.pipe(new v.Utf8EncodeWorker)),b.createWorkerFrom(c,A,d)},_decompressWorker:function(){return this._data instanceof b?this._data.getContentWorker():this._data instanceof S?this._data:new f(this._data)}};for(var k=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],T=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},y=0;y<k.length;y++)m.prototype[k[y]]=T;w.exports=m},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(g,w,N){(function(m){var u,f,v=m.MutationObserver||m.WebKitMutationObserver;if(v){var b=0,S=new v(A),k=m.document.createTextNode("");S.observe(k,{characterData:!0}),u=function(){k.data=b=++b%2}}else if(m.setImmediate||m.MessageChannel===void 0)u="document"in m&&"onreadystatechange"in m.document.createElement("script")?function(){var d=m.document.createElement("script");d.onreadystatechange=function(){A(),d.onreadystatechange=null,d.parentNode.removeChild(d),d=null},m.document.documentElement.appendChild(d)}:function(){setTimeout(A,0)};else{var T=new m.MessageChannel;T.port1.onmessage=A,u=function(){T.port2.postMessage(0)}}var y=[];function A(){var d,c;f=!0;for(var _=y.length;_;){for(c=y,y=[],d=-1;++d<_;)c[d]();_=y.length}f=!1}w.exports=function(d){y.push(d)!==1||f||u()}}).call(this,typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(g,w,N){var m=g("immediate");function u(){}var f={},v=["REJECTED"],b=["FULFILLED"],S=["PENDING"];function k(_){if(typeof _!="function")throw new TypeError("resolver must be a function");this.state=S,this.queue=[],this.outcome=void 0,_!==u&&d(this,_)}function T(_,E,M){this.promise=_,typeof E=="function"&&(this.onFulfilled=E,this.callFulfilled=this.otherCallFulfilled),typeof M=="function"&&(this.onRejected=M,this.callRejected=this.otherCallRejected)}function y(_,E,M){m(function(){var q;try{q=E(M)}catch(H){return f.reject(_,H)}q===_?f.reject(_,new TypeError("Cannot resolve promise with itself")):f.resolve(_,q)})}function A(_){var E=_&&_.then;if(_&&(typeof _=="object"||typeof _=="function")&&typeof E=="function")return function(){E.apply(_,arguments)}}function d(_,E){var M=!1;function q(F){M||(M=!0,f.reject(_,F))}function H(F){M||(M=!0,f.resolve(_,F))}var ne=c(function(){E(H,q)});ne.status==="error"&&q(ne.value)}function c(_,E){var M={};try{M.value=_(E),M.status="success"}catch(q){M.status="error",M.value=q}return M}(w.exports=k).prototype.finally=function(_){if(typeof _!="function")return this;var E=this.constructor;return this.then(function(M){return E.resolve(_()).then(function(){return M})},function(M){return E.resolve(_()).then(function(){throw M})})},k.prototype.catch=function(_){return this.then(null,_)},k.prototype.then=function(_,E){if(typeof _!="function"&&this.state===b||typeof E!="function"&&this.state===v)return this;var M=new this.constructor(u);return this.state!==S?y(M,this.state===b?_:E,this.outcome):this.queue.push(new T(M,_,E)),M},T.prototype.callFulfilled=function(_){f.resolve(this.promise,_)},T.prototype.otherCallFulfilled=function(_){y(this.promise,this.onFulfilled,_)},T.prototype.callRejected=function(_){f.reject(this.promise,_)},T.prototype.otherCallRejected=function(_){y(this.promise,this.onRejected,_)},f.resolve=function(_,E){var M=c(A,E);if(M.status==="error")return f.reject(_,M.value);var q=M.value;if(q)d(_,q);else{_.state=b,_.outcome=E;for(var H=-1,ne=_.queue.length;++H<ne;)_.queue[H].callFulfilled(E)}return _},f.reject=function(_,E){_.state=v,_.outcome=E;for(var M=-1,q=_.queue.length;++M<q;)_.queue[M].callRejected(E);return _},k.resolve=function(_){return _ instanceof this?_:f.resolve(new this(u),_)},k.reject=function(_){var E=new this(u);return f.reject(E,_)},k.all=function(_){var E=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=_.length,q=!1;if(!M)return this.resolve([]);for(var H=new Array(M),ne=0,F=-1,X=new this(u);++F<M;)$(_[F],F);return X;function $(de,me){E.resolve(de).then(function(z){H[me]=z,++ne!==M||q||(q=!0,f.resolve(X,H))},function(z){q||(q=!0,f.reject(X,z))})}},k.race=function(_){var E=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=_.length,q=!1;if(!M)return this.resolve([]);for(var H=-1,ne=new this(u);++H<M;)F=_[H],E.resolve(F).then(function(X){q||(q=!0,f.resolve(ne,X))},function(X){q||(q=!0,f.reject(ne,X))});var F;return ne}},{immediate:36}],38:[function(g,w,N){var m={};(0,g("./lib/utils/common").assign)(m,g("./lib/deflate"),g("./lib/inflate"),g("./lib/zlib/constants")),w.exports=m},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(g,w,N){var m=g("./zlib/deflate"),u=g("./utils/common"),f=g("./utils/strings"),v=g("./zlib/messages"),b=g("./zlib/zstream"),S=Object.prototype.toString,k=0,T=-1,y=0,A=8;function d(_){if(!(this instanceof d))return new d(_);this.options=u.assign({level:T,method:A,chunkSize:16384,windowBits:15,memLevel:8,strategy:y,to:""},_||{});var E=this.options;E.raw&&0<E.windowBits?E.windowBits=-E.windowBits:E.gzip&&0<E.windowBits&&E.windowBits<16&&(E.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var M=m.deflateInit2(this.strm,E.level,E.method,E.windowBits,E.memLevel,E.strategy);if(M!==k)throw new Error(v[M]);if(E.header&&m.deflateSetHeader(this.strm,E.header),E.dictionary){var q;if(q=typeof E.dictionary=="string"?f.string2buf(E.dictionary):S.call(E.dictionary)==="[object ArrayBuffer]"?new Uint8Array(E.dictionary):E.dictionary,(M=m.deflateSetDictionary(this.strm,q))!==k)throw new Error(v[M]);this._dict_set=!0}}function c(_,E){var M=new d(E);if(M.push(_,!0),M.err)throw M.msg||v[M.err];return M.result}d.prototype.push=function(_,E){var M,q,H=this.strm,ne=this.options.chunkSize;if(this.ended)return!1;q=E===~~E?E:E===!0?4:0,typeof _=="string"?H.input=f.string2buf(_):S.call(_)==="[object ArrayBuffer]"?H.input=new Uint8Array(_):H.input=_,H.next_in=0,H.avail_in=H.input.length;do{if(H.avail_out===0&&(H.output=new u.Buf8(ne),H.next_out=0,H.avail_out=ne),(M=m.deflate(H,q))!==1&&M!==k)return this.onEnd(M),!(this.ended=!0);H.avail_out!==0&&(H.avail_in!==0||q!==4&&q!==2)||(this.options.to==="string"?this.onData(f.buf2binstring(u.shrinkBuf(H.output,H.next_out))):this.onData(u.shrinkBuf(H.output,H.next_out)))}while((0<H.avail_in||H.avail_out===0)&&M!==1);return q===4?(M=m.deflateEnd(this.strm),this.onEnd(M),this.ended=!0,M===k):q!==2||(this.onEnd(k),!(H.avail_out=0))},d.prototype.onData=function(_){this.chunks.push(_)},d.prototype.onEnd=function(_){_===k&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=u.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},N.Deflate=d,N.deflate=c,N.deflateRaw=function(_,E){return(E=E||{}).raw=!0,c(_,E)},N.gzip=function(_,E){return(E=E||{}).gzip=!0,c(_,E)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(g,w,N){var m=g("./zlib/inflate"),u=g("./utils/common"),f=g("./utils/strings"),v=g("./zlib/constants"),b=g("./zlib/messages"),S=g("./zlib/zstream"),k=g("./zlib/gzheader"),T=Object.prototype.toString;function y(d){if(!(this instanceof y))return new y(d);this.options=u.assign({chunkSize:16384,windowBits:0,to:""},d||{});var c=this.options;c.raw&&0<=c.windowBits&&c.windowBits<16&&(c.windowBits=-c.windowBits,c.windowBits===0&&(c.windowBits=-15)),!(0<=c.windowBits&&c.windowBits<16)||d&&d.windowBits||(c.windowBits+=32),15<c.windowBits&&c.windowBits<48&&(15&c.windowBits)==0&&(c.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new S,this.strm.avail_out=0;var _=m.inflateInit2(this.strm,c.windowBits);if(_!==v.Z_OK)throw new Error(b[_]);this.header=new k,m.inflateGetHeader(this.strm,this.header)}function A(d,c){var _=new y(c);if(_.push(d,!0),_.err)throw _.msg||b[_.err];return _.result}y.prototype.push=function(d,c){var _,E,M,q,H,ne,F=this.strm,X=this.options.chunkSize,$=this.options.dictionary,de=!1;if(this.ended)return!1;E=c===~~c?c:c===!0?v.Z_FINISH:v.Z_NO_FLUSH,typeof d=="string"?F.input=f.binstring2buf(d):T.call(d)==="[object ArrayBuffer]"?F.input=new Uint8Array(d):F.input=d,F.next_in=0,F.avail_in=F.input.length;do{if(F.avail_out===0&&(F.output=new u.Buf8(X),F.next_out=0,F.avail_out=X),(_=m.inflate(F,v.Z_NO_FLUSH))===v.Z_NEED_DICT&&$&&(ne=typeof $=="string"?f.string2buf($):T.call($)==="[object ArrayBuffer]"?new Uint8Array($):$,_=m.inflateSetDictionary(this.strm,ne)),_===v.Z_BUF_ERROR&&de===!0&&(_=v.Z_OK,de=!1),_!==v.Z_STREAM_END&&_!==v.Z_OK)return this.onEnd(_),!(this.ended=!0);F.next_out&&(F.avail_out!==0&&_!==v.Z_STREAM_END&&(F.avail_in!==0||E!==v.Z_FINISH&&E!==v.Z_SYNC_FLUSH)||(this.options.to==="string"?(M=f.utf8border(F.output,F.next_out),q=F.next_out-M,H=f.buf2string(F.output,M),F.next_out=q,F.avail_out=X-q,q&&u.arraySet(F.output,F.output,M,q,0),this.onData(H)):this.onData(u.shrinkBuf(F.output,F.next_out)))),F.avail_in===0&&F.avail_out===0&&(de=!0)}while((0<F.avail_in||F.avail_out===0)&&_!==v.Z_STREAM_END);return _===v.Z_STREAM_END&&(E=v.Z_FINISH),E===v.Z_FINISH?(_=m.inflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===v.Z_OK):E!==v.Z_SYNC_FLUSH||(this.onEnd(v.Z_OK),!(F.avail_out=0))},y.prototype.onData=function(d){this.chunks.push(d)},y.prototype.onEnd=function(d){d===v.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=u.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},N.Inflate=y,N.inflate=A,N.inflateRaw=function(d,c){return(c=c||{}).raw=!0,A(d,c)},N.ungzip=A},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(g,w,N){var m=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";N.assign=function(v){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var S=b.shift();if(S){if(typeof S!="object")throw new TypeError(S+"must be non-object");for(var k in S)S.hasOwnProperty(k)&&(v[k]=S[k])}}return v},N.shrinkBuf=function(v,b){return v.length===b?v:v.subarray?v.subarray(0,b):(v.length=b,v)};var u={arraySet:function(v,b,S,k,T){if(b.subarray&&v.subarray)v.set(b.subarray(S,S+k),T);else for(var y=0;y<k;y++)v[T+y]=b[S+y]},flattenChunks:function(v){var b,S,k,T,y,A;for(b=k=0,S=v.length;b<S;b++)k+=v[b].length;for(A=new Uint8Array(k),b=T=0,S=v.length;b<S;b++)y=v[b],A.set(y,T),T+=y.length;return A}},f={arraySet:function(v,b,S,k,T){for(var y=0;y<k;y++)v[T+y]=b[S+y]},flattenChunks:function(v){return[].concat.apply([],v)}};N.setTyped=function(v){v?(N.Buf8=Uint8Array,N.Buf16=Uint16Array,N.Buf32=Int32Array,N.assign(N,u)):(N.Buf8=Array,N.Buf16=Array,N.Buf32=Array,N.assign(N,f))},N.setTyped(m)},{}],42:[function(g,w,N){var m=g("./common"),u=!0,f=!0;try{String.fromCharCode.apply(null,[0])}catch{u=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{f=!1}for(var v=new m.Buf8(256),b=0;b<256;b++)v[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;function S(k,T){if(T<65537&&(k.subarray&&f||!k.subarray&&u))return String.fromCharCode.apply(null,m.shrinkBuf(k,T));for(var y="",A=0;A<T;A++)y+=String.fromCharCode(k[A]);return y}v[254]=v[254]=1,N.string2buf=function(k){var T,y,A,d,c,_=k.length,E=0;for(d=0;d<_;d++)(64512&(y=k.charCodeAt(d)))==55296&&d+1<_&&(64512&(A=k.charCodeAt(d+1)))==56320&&(y=65536+(y-55296<<10)+(A-56320),d++),E+=y<128?1:y<2048?2:y<65536?3:4;for(T=new m.Buf8(E),d=c=0;c<E;d++)(64512&(y=k.charCodeAt(d)))==55296&&d+1<_&&(64512&(A=k.charCodeAt(d+1)))==56320&&(y=65536+(y-55296<<10)+(A-56320),d++),y<128?T[c++]=y:(y<2048?T[c++]=192|y>>>6:(y<65536?T[c++]=224|y>>>12:(T[c++]=240|y>>>18,T[c++]=128|y>>>12&63),T[c++]=128|y>>>6&63),T[c++]=128|63&y);return T},N.buf2binstring=function(k){return S(k,k.length)},N.binstring2buf=function(k){for(var T=new m.Buf8(k.length),y=0,A=T.length;y<A;y++)T[y]=k.charCodeAt(y);return T},N.buf2string=function(k,T){var y,A,d,c,_=T||k.length,E=new Array(2*_);for(y=A=0;y<_;)if((d=k[y++])<128)E[A++]=d;else if(4<(c=v[d]))E[A++]=65533,y+=c-1;else{for(d&=c===2?31:c===3?15:7;1<c&&y<_;)d=d<<6|63&k[y++],c--;1<c?E[A++]=65533:d<65536?E[A++]=d:(d-=65536,E[A++]=55296|d>>10&1023,E[A++]=56320|1023&d)}return S(E,A)},N.utf8border=function(k,T){var y;for((T=T||k.length)>k.length&&(T=k.length),y=T-1;0<=y&&(192&k[y])==128;)y--;return y<0||y===0?T:y+v[k[y]]>T?y:T}},{"./common":41}],43:[function(g,w,N){w.exports=function(m,u,f,v){for(var b=65535&m|0,S=m>>>16&65535|0,k=0;f!==0;){for(f-=k=2e3<f?2e3:f;S=S+(b=b+u[v++]|0)|0,--k;);b%=65521,S%=65521}return b|S<<16|0}},{}],44:[function(g,w,N){w.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(g,w,N){var m=function(){for(var u,f=[],v=0;v<256;v++){u=v;for(var b=0;b<8;b++)u=1&u?3988292384^u>>>1:u>>>1;f[v]=u}return f}();w.exports=function(u,f,v,b){var S=m,k=b+v;u^=-1;for(var T=b;T<k;T++)u=u>>>8^S[255&(u^f[T])];return-1^u}},{}],46:[function(g,w,N){var m,u=g("../utils/common"),f=g("./trees"),v=g("./adler32"),b=g("./crc32"),S=g("./messages"),k=0,T=4,y=0,A=-2,d=-1,c=4,_=2,E=8,M=9,q=286,H=30,ne=19,F=2*q+1,X=15,$=3,de=258,me=de+$+1,z=42,ae=113,h=1,ie=2,Z=3,Y=4;function se(s,ce){return s.msg=S[ce],ce}function J(s){return(s<<1)-(4<s?9:0)}function C(s){for(var ce=s.length;0<=--ce;)s[ce]=0}function j(s){var ce=s.state,te=ce.pending;te>s.avail_out&&(te=s.avail_out),te!==0&&(u.arraySet(s.output,ce.pending_buf,ce.pending_out,te,s.next_out),s.next_out+=te,ce.pending_out+=te,s.total_out+=te,s.avail_out-=te,ce.pending-=te,ce.pending===0&&(ce.pending_out=0))}function B(s,ce){f._tr_flush_block(s,0<=s.block_start?s.block_start:-1,s.strstart-s.block_start,ce),s.block_start=s.strstart,j(s.strm)}function ee(s,ce){s.pending_buf[s.pending++]=ce}function re(s,ce){s.pending_buf[s.pending++]=ce>>>8&255,s.pending_buf[s.pending++]=255&ce}function le(s,ce){var te,D,O=s.max_chain_length,G=s.strstart,he=s.prev_length,pe=s.nice_match,W=s.strstart>s.w_size-me?s.strstart-(s.w_size-me):0,ve=s.window,be=s.w_mask,ye=s.prev,_e=s.strstart+de,Oe=ve[G+he-1],Ne=ve[G+he];s.prev_length>=s.good_match&&(O>>=2),pe>s.lookahead&&(pe=s.lookahead);do if(ve[(te=ce)+he]===Ne&&ve[te+he-1]===Oe&&ve[te]===ve[G]&&ve[++te]===ve[G+1]){G+=2,te++;do;while(ve[++G]===ve[++te]&&ve[++G]===ve[++te]&&ve[++G]===ve[++te]&&ve[++G]===ve[++te]&&ve[++G]===ve[++te]&&ve[++G]===ve[++te]&&ve[++G]===ve[++te]&&ve[++G]===ve[++te]&&G<_e);if(D=de-(_e-G),G=_e-de,he<D){if(s.match_start=ce,pe<=(he=D))break;Oe=ve[G+he-1],Ne=ve[G+he]}}while((ce=ye[ce&be])>W&&--O!=0);return he<=s.lookahead?he:s.lookahead}function ge(s){var ce,te,D,O,G,he,pe,W,ve,be,ye=s.w_size;do{if(O=s.window_size-s.lookahead-s.strstart,s.strstart>=ye+(ye-me)){for(u.arraySet(s.window,s.window,ye,ye,0),s.match_start-=ye,s.strstart-=ye,s.block_start-=ye,ce=te=s.hash_size;D=s.head[--ce],s.head[ce]=ye<=D?D-ye:0,--te;);for(ce=te=ye;D=s.prev[--ce],s.prev[ce]=ye<=D?D-ye:0,--te;);O+=ye}if(s.strm.avail_in===0)break;if(he=s.strm,pe=s.window,W=s.strstart+s.lookahead,ve=O,be=void 0,be=he.avail_in,ve<be&&(be=ve),te=be===0?0:(he.avail_in-=be,u.arraySet(pe,he.input,he.next_in,be,W),he.state.wrap===1?he.adler=v(he.adler,pe,be,W):he.state.wrap===2&&(he.adler=b(he.adler,pe,be,W)),he.next_in+=be,he.total_in+=be,be),s.lookahead+=te,s.lookahead+s.insert>=$)for(G=s.strstart-s.insert,s.ins_h=s.window[G],s.ins_h=(s.ins_h<<s.hash_shift^s.window[G+1])&s.hash_mask;s.insert&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[G+$-1])&s.hash_mask,s.prev[G&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=G,G++,s.insert--,!(s.lookahead+s.insert<$)););}while(s.lookahead<me&&s.strm.avail_in!==0)}function Me(s,ce){for(var te,D;;){if(s.lookahead<me){if(ge(s),s.lookahead<me&&ce===k)return h;if(s.lookahead===0)break}if(te=0,s.lookahead>=$&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+$-1])&s.hash_mask,te=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),te!==0&&s.strstart-te<=s.w_size-me&&(s.match_length=le(s,te)),s.match_length>=$)if(D=f._tr_tally(s,s.strstart-s.match_start,s.match_length-$),s.lookahead-=s.match_length,s.match_length<=s.max_lazy_match&&s.lookahead>=$){for(s.match_length--;s.strstart++,s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+$-1])&s.hash_mask,te=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart,--s.match_length!=0;);s.strstart++}else s.strstart+=s.match_length,s.match_length=0,s.ins_h=s.window[s.strstart],s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+1])&s.hash_mask;else D=f._tr_tally(s,0,s.window[s.strstart]),s.lookahead--,s.strstart++;if(D&&(B(s,!1),s.strm.avail_out===0))return h}return s.insert=s.strstart<$-1?s.strstart:$-1,ce===T?(B(s,!0),s.strm.avail_out===0?Z:Y):s.last_lit&&(B(s,!1),s.strm.avail_out===0)?h:ie}function we(s,ce){for(var te,D,O;;){if(s.lookahead<me){if(ge(s),s.lookahead<me&&ce===k)return h;if(s.lookahead===0)break}if(te=0,s.lookahead>=$&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+$-1])&s.hash_mask,te=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),s.prev_length=s.match_length,s.prev_match=s.match_start,s.match_length=$-1,te!==0&&s.prev_length<s.max_lazy_match&&s.strstart-te<=s.w_size-me&&(s.match_length=le(s,te),s.match_length<=5&&(s.strategy===1||s.match_length===$&&4096<s.strstart-s.match_start)&&(s.match_length=$-1)),s.prev_length>=$&&s.match_length<=s.prev_length){for(O=s.strstart+s.lookahead-$,D=f._tr_tally(s,s.strstart-1-s.prev_match,s.prev_length-$),s.lookahead-=s.prev_length-1,s.prev_length-=2;++s.strstart<=O&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+$-1])&s.hash_mask,te=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),--s.prev_length!=0;);if(s.match_available=0,s.match_length=$-1,s.strstart++,D&&(B(s,!1),s.strm.avail_out===0))return h}else if(s.match_available){if((D=f._tr_tally(s,0,s.window[s.strstart-1]))&&B(s,!1),s.strstart++,s.lookahead--,s.strm.avail_out===0)return h}else s.match_available=1,s.strstart++,s.lookahead--}return s.match_available&&(D=f._tr_tally(s,0,s.window[s.strstart-1]),s.match_available=0),s.insert=s.strstart<$-1?s.strstart:$-1,ce===T?(B(s,!0),s.strm.avail_out===0?Z:Y):s.last_lit&&(B(s,!1),s.strm.avail_out===0)?h:ie}function Ce(s,ce,te,D,O){this.good_length=s,this.max_lazy=ce,this.nice_length=te,this.max_chain=D,this.func=O}function Ke(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=E,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new u.Buf16(2*F),this.dyn_dtree=new u.Buf16(2*(2*H+1)),this.bl_tree=new u.Buf16(2*(2*ne+1)),C(this.dyn_ltree),C(this.dyn_dtree),C(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new u.Buf16(X+1),this.heap=new u.Buf16(2*q+1),C(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new u.Buf16(2*q+1),C(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function qe(s){var ce;return s&&s.state?(s.total_in=s.total_out=0,s.data_type=_,(ce=s.state).pending=0,ce.pending_out=0,ce.wrap<0&&(ce.wrap=-ce.wrap),ce.status=ce.wrap?z:ae,s.adler=ce.wrap===2?0:1,ce.last_flush=k,f._tr_init(ce),y):se(s,A)}function mt(s){var ce=qe(s);return ce===y&&function(te){te.window_size=2*te.w_size,C(te.head),te.max_lazy_match=m[te.level].max_lazy,te.good_match=m[te.level].good_length,te.nice_match=m[te.level].nice_length,te.max_chain_length=m[te.level].max_chain,te.strstart=0,te.block_start=0,te.lookahead=0,te.insert=0,te.match_length=te.prev_length=$-1,te.match_available=0,te.ins_h=0}(s.state),ce}function nt(s,ce,te,D,O,G){if(!s)return A;var he=1;if(ce===d&&(ce=6),D<0?(he=0,D=-D):15<D&&(he=2,D-=16),O<1||M<O||te!==E||D<8||15<D||ce<0||9<ce||G<0||c<G)return se(s,A);D===8&&(D=9);var pe=new Ke;return(s.state=pe).strm=s,pe.wrap=he,pe.gzhead=null,pe.w_bits=D,pe.w_size=1<<pe.w_bits,pe.w_mask=pe.w_size-1,pe.hash_bits=O+7,pe.hash_size=1<<pe.hash_bits,pe.hash_mask=pe.hash_size-1,pe.hash_shift=~~((pe.hash_bits+$-1)/$),pe.window=new u.Buf8(2*pe.w_size),pe.head=new u.Buf16(pe.hash_size),pe.prev=new u.Buf16(pe.w_size),pe.lit_bufsize=1<<O+6,pe.pending_buf_size=4*pe.lit_bufsize,pe.pending_buf=new u.Buf8(pe.pending_buf_size),pe.d_buf=1*pe.lit_bufsize,pe.l_buf=3*pe.lit_bufsize,pe.level=ce,pe.strategy=G,pe.method=te,mt(s)}m=[new Ce(0,0,0,0,function(s,ce){var te=65535;for(te>s.pending_buf_size-5&&(te=s.pending_buf_size-5);;){if(s.lookahead<=1){if(ge(s),s.lookahead===0&&ce===k)return h;if(s.lookahead===0)break}s.strstart+=s.lookahead,s.lookahead=0;var D=s.block_start+te;if((s.strstart===0||s.strstart>=D)&&(s.lookahead=s.strstart-D,s.strstart=D,B(s,!1),s.strm.avail_out===0)||s.strstart-s.block_start>=s.w_size-me&&(B(s,!1),s.strm.avail_out===0))return h}return s.insert=0,ce===T?(B(s,!0),s.strm.avail_out===0?Z:Y):(s.strstart>s.block_start&&(B(s,!1),s.strm.avail_out),h)}),new Ce(4,4,8,4,Me),new Ce(4,5,16,8,Me),new Ce(4,6,32,32,Me),new Ce(4,4,16,16,we),new Ce(8,16,32,32,we),new Ce(8,16,128,128,we),new Ce(8,32,128,256,we),new Ce(32,128,258,1024,we),new Ce(32,258,258,4096,we)],N.deflateInit=function(s,ce){return nt(s,ce,E,15,8,0)},N.deflateInit2=nt,N.deflateReset=mt,N.deflateResetKeep=qe,N.deflateSetHeader=function(s,ce){return s&&s.state?s.state.wrap!==2?A:(s.state.gzhead=ce,y):A},N.deflate=function(s,ce){var te,D,O,G;if(!s||!s.state||5<ce||ce<0)return s?se(s,A):A;if(D=s.state,!s.output||!s.input&&s.avail_in!==0||D.status===666&&ce!==T)return se(s,s.avail_out===0?-5:A);if(D.strm=s,te=D.last_flush,D.last_flush=ce,D.status===z)if(D.wrap===2)s.adler=0,ee(D,31),ee(D,139),ee(D,8),D.gzhead?(ee(D,(D.gzhead.text?1:0)+(D.gzhead.hcrc?2:0)+(D.gzhead.extra?4:0)+(D.gzhead.name?8:0)+(D.gzhead.comment?16:0)),ee(D,255&D.gzhead.time),ee(D,D.gzhead.time>>8&255),ee(D,D.gzhead.time>>16&255),ee(D,D.gzhead.time>>24&255),ee(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),ee(D,255&D.gzhead.os),D.gzhead.extra&&D.gzhead.extra.length&&(ee(D,255&D.gzhead.extra.length),ee(D,D.gzhead.extra.length>>8&255)),D.gzhead.hcrc&&(s.adler=b(s.adler,D.pending_buf,D.pending,0)),D.gzindex=0,D.status=69):(ee(D,0),ee(D,0),ee(D,0),ee(D,0),ee(D,0),ee(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),ee(D,3),D.status=ae);else{var he=E+(D.w_bits-8<<4)<<8;he|=(2<=D.strategy||D.level<2?0:D.level<6?1:D.level===6?2:3)<<6,D.strstart!==0&&(he|=32),he+=31-he%31,D.status=ae,re(D,he),D.strstart!==0&&(re(D,s.adler>>>16),re(D,65535&s.adler)),s.adler=1}if(D.status===69)if(D.gzhead.extra){for(O=D.pending;D.gzindex<(65535&D.gzhead.extra.length)&&(D.pending!==D.pending_buf_size||(D.gzhead.hcrc&&D.pending>O&&(s.adler=b(s.adler,D.pending_buf,D.pending-O,O)),j(s),O=D.pending,D.pending!==D.pending_buf_size));)ee(D,255&D.gzhead.extra[D.gzindex]),D.gzindex++;D.gzhead.hcrc&&D.pending>O&&(s.adler=b(s.adler,D.pending_buf,D.pending-O,O)),D.gzindex===D.gzhead.extra.length&&(D.gzindex=0,D.status=73)}else D.status=73;if(D.status===73)if(D.gzhead.name){O=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>O&&(s.adler=b(s.adler,D.pending_buf,D.pending-O,O)),j(s),O=D.pending,D.pending===D.pending_buf_size)){G=1;break}G=D.gzindex<D.gzhead.name.length?255&D.gzhead.name.charCodeAt(D.gzindex++):0,ee(D,G)}while(G!==0);D.gzhead.hcrc&&D.pending>O&&(s.adler=b(s.adler,D.pending_buf,D.pending-O,O)),G===0&&(D.gzindex=0,D.status=91)}else D.status=91;if(D.status===91)if(D.gzhead.comment){O=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>O&&(s.adler=b(s.adler,D.pending_buf,D.pending-O,O)),j(s),O=D.pending,D.pending===D.pending_buf_size)){G=1;break}G=D.gzindex<D.gzhead.comment.length?255&D.gzhead.comment.charCodeAt(D.gzindex++):0,ee(D,G)}while(G!==0);D.gzhead.hcrc&&D.pending>O&&(s.adler=b(s.adler,D.pending_buf,D.pending-O,O)),G===0&&(D.status=103)}else D.status=103;if(D.status===103&&(D.gzhead.hcrc?(D.pending+2>D.pending_buf_size&&j(s),D.pending+2<=D.pending_buf_size&&(ee(D,255&s.adler),ee(D,s.adler>>8&255),s.adler=0,D.status=ae)):D.status=ae),D.pending!==0){if(j(s),s.avail_out===0)return D.last_flush=-1,y}else if(s.avail_in===0&&J(ce)<=J(te)&&ce!==T)return se(s,-5);if(D.status===666&&s.avail_in!==0)return se(s,-5);if(s.avail_in!==0||D.lookahead!==0||ce!==k&&D.status!==666){var pe=D.strategy===2?function(W,ve){for(var be;;){if(W.lookahead===0&&(ge(W),W.lookahead===0)){if(ve===k)return h;break}if(W.match_length=0,be=f._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++,be&&(B(W,!1),W.strm.avail_out===0))return h}return W.insert=0,ve===T?(B(W,!0),W.strm.avail_out===0?Z:Y):W.last_lit&&(B(W,!1),W.strm.avail_out===0)?h:ie}(D,ce):D.strategy===3?function(W,ve){for(var be,ye,_e,Oe,Ne=W.window;;){if(W.lookahead<=de){if(ge(W),W.lookahead<=de&&ve===k)return h;if(W.lookahead===0)break}if(W.match_length=0,W.lookahead>=$&&0<W.strstart&&(ye=Ne[_e=W.strstart-1])===Ne[++_e]&&ye===Ne[++_e]&&ye===Ne[++_e]){Oe=W.strstart+de;do;while(ye===Ne[++_e]&&ye===Ne[++_e]&&ye===Ne[++_e]&&ye===Ne[++_e]&&ye===Ne[++_e]&&ye===Ne[++_e]&&ye===Ne[++_e]&&ye===Ne[++_e]&&_e<Oe);W.match_length=de-(Oe-_e),W.match_length>W.lookahead&&(W.match_length=W.lookahead)}if(W.match_length>=$?(be=f._tr_tally(W,1,W.match_length-$),W.lookahead-=W.match_length,W.strstart+=W.match_length,W.match_length=0):(be=f._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++),be&&(B(W,!1),W.strm.avail_out===0))return h}return W.insert=0,ve===T?(B(W,!0),W.strm.avail_out===0?Z:Y):W.last_lit&&(B(W,!1),W.strm.avail_out===0)?h:ie}(D,ce):m[D.level].func(D,ce);if(pe!==Z&&pe!==Y||(D.status=666),pe===h||pe===Z)return s.avail_out===0&&(D.last_flush=-1),y;if(pe===ie&&(ce===1?f._tr_align(D):ce!==5&&(f._tr_stored_block(D,0,0,!1),ce===3&&(C(D.head),D.lookahead===0&&(D.strstart=0,D.block_start=0,D.insert=0))),j(s),s.avail_out===0))return D.last_flush=-1,y}return ce!==T?y:D.wrap<=0?1:(D.wrap===2?(ee(D,255&s.adler),ee(D,s.adler>>8&255),ee(D,s.adler>>16&255),ee(D,s.adler>>24&255),ee(D,255&s.total_in),ee(D,s.total_in>>8&255),ee(D,s.total_in>>16&255),ee(D,s.total_in>>24&255)):(re(D,s.adler>>>16),re(D,65535&s.adler)),j(s),0<D.wrap&&(D.wrap=-D.wrap),D.pending!==0?y:1)},N.deflateEnd=function(s){var ce;return s&&s.state?(ce=s.state.status)!==z&&ce!==69&&ce!==73&&ce!==91&&ce!==103&&ce!==ae&&ce!==666?se(s,A):(s.state=null,ce===ae?se(s,-3):y):A},N.deflateSetDictionary=function(s,ce){var te,D,O,G,he,pe,W,ve,be=ce.length;if(!s||!s.state||(G=(te=s.state).wrap)===2||G===1&&te.status!==z||te.lookahead)return A;for(G===1&&(s.adler=v(s.adler,ce,be,0)),te.wrap=0,be>=te.w_size&&(G===0&&(C(te.head),te.strstart=0,te.block_start=0,te.insert=0),ve=new u.Buf8(te.w_size),u.arraySet(ve,ce,be-te.w_size,te.w_size,0),ce=ve,be=te.w_size),he=s.avail_in,pe=s.next_in,W=s.input,s.avail_in=be,s.next_in=0,s.input=ce,ge(te);te.lookahead>=$;){for(D=te.strstart,O=te.lookahead-($-1);te.ins_h=(te.ins_h<<te.hash_shift^te.window[D+$-1])&te.hash_mask,te.prev[D&te.w_mask]=te.head[te.ins_h],te.head[te.ins_h]=D,D++,--O;);te.strstart=D,te.lookahead=$-1,ge(te)}return te.strstart+=te.lookahead,te.block_start=te.strstart,te.insert=te.lookahead,te.lookahead=0,te.match_length=te.prev_length=$-1,te.match_available=0,s.next_in=pe,s.input=W,s.avail_in=he,te.wrap=G,y},N.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(g,w,N){w.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(g,w,N){w.exports=function(m,u){var f,v,b,S,k,T,y,A,d,c,_,E,M,q,H,ne,F,X,$,de,me,z,ae,h,ie;f=m.state,v=m.next_in,h=m.input,b=v+(m.avail_in-5),S=m.next_out,ie=m.output,k=S-(u-m.avail_out),T=S+(m.avail_out-257),y=f.dmax,A=f.wsize,d=f.whave,c=f.wnext,_=f.window,E=f.hold,M=f.bits,q=f.lencode,H=f.distcode,ne=(1<<f.lenbits)-1,F=(1<<f.distbits)-1;e:do{M<15&&(E+=h[v++]<<M,M+=8,E+=h[v++]<<M,M+=8),X=q[E&ne];t:for(;;){if(E>>>=$=X>>>24,M-=$,($=X>>>16&255)===0)ie[S++]=65535&X;else{if(!(16&$)){if((64&$)==0){X=q[(65535&X)+(E&(1<<$)-1)];continue t}if(32&$){f.mode=12;break e}m.msg="invalid literal/length code",f.mode=30;break e}de=65535&X,($&=15)&&(M<$&&(E+=h[v++]<<M,M+=8),de+=E&(1<<$)-1,E>>>=$,M-=$),M<15&&(E+=h[v++]<<M,M+=8,E+=h[v++]<<M,M+=8),X=H[E&F];a:for(;;){if(E>>>=$=X>>>24,M-=$,!(16&($=X>>>16&255))){if((64&$)==0){X=H[(65535&X)+(E&(1<<$)-1)];continue a}m.msg="invalid distance code",f.mode=30;break e}if(me=65535&X,M<($&=15)&&(E+=h[v++]<<M,(M+=8)<$&&(E+=h[v++]<<M,M+=8)),y<(me+=E&(1<<$)-1)){m.msg="invalid distance too far back",f.mode=30;break e}if(E>>>=$,M-=$,($=S-k)<me){if(d<($=me-$)&&f.sane){m.msg="invalid distance too far back",f.mode=30;break e}if(ae=_,(z=0)===c){if(z+=A-$,$<de){for(de-=$;ie[S++]=_[z++],--$;);z=S-me,ae=ie}}else if(c<$){if(z+=A+c-$,($-=c)<de){for(de-=$;ie[S++]=_[z++],--$;);if(z=0,c<de){for(de-=$=c;ie[S++]=_[z++],--$;);z=S-me,ae=ie}}}else if(z+=c-$,$<de){for(de-=$;ie[S++]=_[z++],--$;);z=S-me,ae=ie}for(;2<de;)ie[S++]=ae[z++],ie[S++]=ae[z++],ie[S++]=ae[z++],de-=3;de&&(ie[S++]=ae[z++],1<de&&(ie[S++]=ae[z++]))}else{for(z=S-me;ie[S++]=ie[z++],ie[S++]=ie[z++],ie[S++]=ie[z++],2<(de-=3););de&&(ie[S++]=ie[z++],1<de&&(ie[S++]=ie[z++]))}break}}break}}while(v<b&&S<T);v-=de=M>>3,E&=(1<<(M-=de<<3))-1,m.next_in=v,m.next_out=S,m.avail_in=v<b?b-v+5:5-(v-b),m.avail_out=S<T?T-S+257:257-(S-T),f.hold=E,f.bits=M}},{}],49:[function(g,w,N){var m=g("../utils/common"),u=g("./adler32"),f=g("./crc32"),v=g("./inffast"),b=g("./inftrees"),S=1,k=2,T=0,y=-2,A=1,d=852,c=592;function _(z){return(z>>>24&255)+(z>>>8&65280)+((65280&z)<<8)+((255&z)<<24)}function E(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new m.Buf16(320),this.work=new m.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function M(z){var ae;return z&&z.state?(ae=z.state,z.total_in=z.total_out=ae.total=0,z.msg="",ae.wrap&&(z.adler=1&ae.wrap),ae.mode=A,ae.last=0,ae.havedict=0,ae.dmax=32768,ae.head=null,ae.hold=0,ae.bits=0,ae.lencode=ae.lendyn=new m.Buf32(d),ae.distcode=ae.distdyn=new m.Buf32(c),ae.sane=1,ae.back=-1,T):y}function q(z){var ae;return z&&z.state?((ae=z.state).wsize=0,ae.whave=0,ae.wnext=0,M(z)):y}function H(z,ae){var h,ie;return z&&z.state?(ie=z.state,ae<0?(h=0,ae=-ae):(h=1+(ae>>4),ae<48&&(ae&=15)),ae&&(ae<8||15<ae)?y:(ie.window!==null&&ie.wbits!==ae&&(ie.window=null),ie.wrap=h,ie.wbits=ae,q(z))):y}function ne(z,ae){var h,ie;return z?(ie=new E,(z.state=ie).window=null,(h=H(z,ae))!==T&&(z.state=null),h):y}var F,X,$=!0;function de(z){if($){var ae;for(F=new m.Buf32(512),X=new m.Buf32(32),ae=0;ae<144;)z.lens[ae++]=8;for(;ae<256;)z.lens[ae++]=9;for(;ae<280;)z.lens[ae++]=7;for(;ae<288;)z.lens[ae++]=8;for(b(S,z.lens,0,288,F,0,z.work,{bits:9}),ae=0;ae<32;)z.lens[ae++]=5;b(k,z.lens,0,32,X,0,z.work,{bits:5}),$=!1}z.lencode=F,z.lenbits=9,z.distcode=X,z.distbits=5}function me(z,ae,h,ie){var Z,Y=z.state;return Y.window===null&&(Y.wsize=1<<Y.wbits,Y.wnext=0,Y.whave=0,Y.window=new m.Buf8(Y.wsize)),ie>=Y.wsize?(m.arraySet(Y.window,ae,h-Y.wsize,Y.wsize,0),Y.wnext=0,Y.whave=Y.wsize):(ie<(Z=Y.wsize-Y.wnext)&&(Z=ie),m.arraySet(Y.window,ae,h-ie,Z,Y.wnext),(ie-=Z)?(m.arraySet(Y.window,ae,h-ie,ie,0),Y.wnext=ie,Y.whave=Y.wsize):(Y.wnext+=Z,Y.wnext===Y.wsize&&(Y.wnext=0),Y.whave<Y.wsize&&(Y.whave+=Z))),0}N.inflateReset=q,N.inflateReset2=H,N.inflateResetKeep=M,N.inflateInit=function(z){return ne(z,15)},N.inflateInit2=ne,N.inflate=function(z,ae){var h,ie,Z,Y,se,J,C,j,B,ee,re,le,ge,Me,we,Ce,Ke,qe,mt,nt,s,ce,te,D,O=0,G=new m.Buf8(4),he=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!z||!z.state||!z.output||!z.input&&z.avail_in!==0)return y;(h=z.state).mode===12&&(h.mode=13),se=z.next_out,Z=z.output,C=z.avail_out,Y=z.next_in,ie=z.input,J=z.avail_in,j=h.hold,B=h.bits,ee=J,re=C,ce=T;e:for(;;)switch(h.mode){case A:if(h.wrap===0){h.mode=13;break}for(;B<16;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}if(2&h.wrap&&j===35615){G[h.check=0]=255&j,G[1]=j>>>8&255,h.check=f(h.check,G,2,0),B=j=0,h.mode=2;break}if(h.flags=0,h.head&&(h.head.done=!1),!(1&h.wrap)||(((255&j)<<8)+(j>>8))%31){z.msg="incorrect header check",h.mode=30;break}if((15&j)!=8){z.msg="unknown compression method",h.mode=30;break}if(B-=4,s=8+(15&(j>>>=4)),h.wbits===0)h.wbits=s;else if(s>h.wbits){z.msg="invalid window size",h.mode=30;break}h.dmax=1<<s,z.adler=h.check=1,h.mode=512&j?10:12,B=j=0;break;case 2:for(;B<16;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}if(h.flags=j,(255&h.flags)!=8){z.msg="unknown compression method",h.mode=30;break}if(57344&h.flags){z.msg="unknown header flags set",h.mode=30;break}h.head&&(h.head.text=j>>8&1),512&h.flags&&(G[0]=255&j,G[1]=j>>>8&255,h.check=f(h.check,G,2,0)),B=j=0,h.mode=3;case 3:for(;B<32;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}h.head&&(h.head.time=j),512&h.flags&&(G[0]=255&j,G[1]=j>>>8&255,G[2]=j>>>16&255,G[3]=j>>>24&255,h.check=f(h.check,G,4,0)),B=j=0,h.mode=4;case 4:for(;B<16;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}h.head&&(h.head.xflags=255&j,h.head.os=j>>8),512&h.flags&&(G[0]=255&j,G[1]=j>>>8&255,h.check=f(h.check,G,2,0)),B=j=0,h.mode=5;case 5:if(1024&h.flags){for(;B<16;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}h.length=j,h.head&&(h.head.extra_len=j),512&h.flags&&(G[0]=255&j,G[1]=j>>>8&255,h.check=f(h.check,G,2,0)),B=j=0}else h.head&&(h.head.extra=null);h.mode=6;case 6:if(1024&h.flags&&(J<(le=h.length)&&(le=J),le&&(h.head&&(s=h.head.extra_len-h.length,h.head.extra||(h.head.extra=new Array(h.head.extra_len)),m.arraySet(h.head.extra,ie,Y,le,s)),512&h.flags&&(h.check=f(h.check,ie,le,Y)),J-=le,Y+=le,h.length-=le),h.length))break e;h.length=0,h.mode=7;case 7:if(2048&h.flags){if(J===0)break e;for(le=0;s=ie[Y+le++],h.head&&s&&h.length<65536&&(h.head.name+=String.fromCharCode(s)),s&&le<J;);if(512&h.flags&&(h.check=f(h.check,ie,le,Y)),J-=le,Y+=le,s)break e}else h.head&&(h.head.name=null);h.length=0,h.mode=8;case 8:if(4096&h.flags){if(J===0)break e;for(le=0;s=ie[Y+le++],h.head&&s&&h.length<65536&&(h.head.comment+=String.fromCharCode(s)),s&&le<J;);if(512&h.flags&&(h.check=f(h.check,ie,le,Y)),J-=le,Y+=le,s)break e}else h.head&&(h.head.comment=null);h.mode=9;case 9:if(512&h.flags){for(;B<16;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}if(j!==(65535&h.check)){z.msg="header crc mismatch",h.mode=30;break}B=j=0}h.head&&(h.head.hcrc=h.flags>>9&1,h.head.done=!0),z.adler=h.check=0,h.mode=12;break;case 10:for(;B<32;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}z.adler=h.check=_(j),B=j=0,h.mode=11;case 11:if(h.havedict===0)return z.next_out=se,z.avail_out=C,z.next_in=Y,z.avail_in=J,h.hold=j,h.bits=B,2;z.adler=h.check=1,h.mode=12;case 12:if(ae===5||ae===6)break e;case 13:if(h.last){j>>>=7&B,B-=7&B,h.mode=27;break}for(;B<3;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}switch(h.last=1&j,B-=1,3&(j>>>=1)){case 0:h.mode=14;break;case 1:if(de(h),h.mode=20,ae!==6)break;j>>>=2,B-=2;break e;case 2:h.mode=17;break;case 3:z.msg="invalid block type",h.mode=30}j>>>=2,B-=2;break;case 14:for(j>>>=7&B,B-=7&B;B<32;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}if((65535&j)!=(j>>>16^65535)){z.msg="invalid stored block lengths",h.mode=30;break}if(h.length=65535&j,B=j=0,h.mode=15,ae===6)break e;case 15:h.mode=16;case 16:if(le=h.length){if(J<le&&(le=J),C<le&&(le=C),le===0)break e;m.arraySet(Z,ie,Y,le,se),J-=le,Y+=le,C-=le,se+=le,h.length-=le;break}h.mode=12;break;case 17:for(;B<14;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}if(h.nlen=257+(31&j),j>>>=5,B-=5,h.ndist=1+(31&j),j>>>=5,B-=5,h.ncode=4+(15&j),j>>>=4,B-=4,286<h.nlen||30<h.ndist){z.msg="too many length or distance symbols",h.mode=30;break}h.have=0,h.mode=18;case 18:for(;h.have<h.ncode;){for(;B<3;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}h.lens[he[h.have++]]=7&j,j>>>=3,B-=3}for(;h.have<19;)h.lens[he[h.have++]]=0;if(h.lencode=h.lendyn,h.lenbits=7,te={bits:h.lenbits},ce=b(0,h.lens,0,19,h.lencode,0,h.work,te),h.lenbits=te.bits,ce){z.msg="invalid code lengths set",h.mode=30;break}h.have=0,h.mode=19;case 19:for(;h.have<h.nlen+h.ndist;){for(;Ce=(O=h.lencode[j&(1<<h.lenbits)-1])>>>16&255,Ke=65535&O,!((we=O>>>24)<=B);){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}if(Ke<16)j>>>=we,B-=we,h.lens[h.have++]=Ke;else{if(Ke===16){for(D=we+2;B<D;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}if(j>>>=we,B-=we,h.have===0){z.msg="invalid bit length repeat",h.mode=30;break}s=h.lens[h.have-1],le=3+(3&j),j>>>=2,B-=2}else if(Ke===17){for(D=we+3;B<D;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}B-=we,s=0,le=3+(7&(j>>>=we)),j>>>=3,B-=3}else{for(D=we+7;B<D;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}B-=we,s=0,le=11+(127&(j>>>=we)),j>>>=7,B-=7}if(h.have+le>h.nlen+h.ndist){z.msg="invalid bit length repeat",h.mode=30;break}for(;le--;)h.lens[h.have++]=s}}if(h.mode===30)break;if(h.lens[256]===0){z.msg="invalid code -- missing end-of-block",h.mode=30;break}if(h.lenbits=9,te={bits:h.lenbits},ce=b(S,h.lens,0,h.nlen,h.lencode,0,h.work,te),h.lenbits=te.bits,ce){z.msg="invalid literal/lengths set",h.mode=30;break}if(h.distbits=6,h.distcode=h.distdyn,te={bits:h.distbits},ce=b(k,h.lens,h.nlen,h.ndist,h.distcode,0,h.work,te),h.distbits=te.bits,ce){z.msg="invalid distances set",h.mode=30;break}if(h.mode=20,ae===6)break e;case 20:h.mode=21;case 21:if(6<=J&&258<=C){z.next_out=se,z.avail_out=C,z.next_in=Y,z.avail_in=J,h.hold=j,h.bits=B,v(z,re),se=z.next_out,Z=z.output,C=z.avail_out,Y=z.next_in,ie=z.input,J=z.avail_in,j=h.hold,B=h.bits,h.mode===12&&(h.back=-1);break}for(h.back=0;Ce=(O=h.lencode[j&(1<<h.lenbits)-1])>>>16&255,Ke=65535&O,!((we=O>>>24)<=B);){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}if(Ce&&(240&Ce)==0){for(qe=we,mt=Ce,nt=Ke;Ce=(O=h.lencode[nt+((j&(1<<qe+mt)-1)>>qe)])>>>16&255,Ke=65535&O,!(qe+(we=O>>>24)<=B);){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}j>>>=qe,B-=qe,h.back+=qe}if(j>>>=we,B-=we,h.back+=we,h.length=Ke,Ce===0){h.mode=26;break}if(32&Ce){h.back=-1,h.mode=12;break}if(64&Ce){z.msg="invalid literal/length code",h.mode=30;break}h.extra=15&Ce,h.mode=22;case 22:if(h.extra){for(D=h.extra;B<D;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}h.length+=j&(1<<h.extra)-1,j>>>=h.extra,B-=h.extra,h.back+=h.extra}h.was=h.length,h.mode=23;case 23:for(;Ce=(O=h.distcode[j&(1<<h.distbits)-1])>>>16&255,Ke=65535&O,!((we=O>>>24)<=B);){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}if((240&Ce)==0){for(qe=we,mt=Ce,nt=Ke;Ce=(O=h.distcode[nt+((j&(1<<qe+mt)-1)>>qe)])>>>16&255,Ke=65535&O,!(qe+(we=O>>>24)<=B);){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}j>>>=qe,B-=qe,h.back+=qe}if(j>>>=we,B-=we,h.back+=we,64&Ce){z.msg="invalid distance code",h.mode=30;break}h.offset=Ke,h.extra=15&Ce,h.mode=24;case 24:if(h.extra){for(D=h.extra;B<D;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}h.offset+=j&(1<<h.extra)-1,j>>>=h.extra,B-=h.extra,h.back+=h.extra}if(h.offset>h.dmax){z.msg="invalid distance too far back",h.mode=30;break}h.mode=25;case 25:if(C===0)break e;if(le=re-C,h.offset>le){if((le=h.offset-le)>h.whave&&h.sane){z.msg="invalid distance too far back",h.mode=30;break}ge=le>h.wnext?(le-=h.wnext,h.wsize-le):h.wnext-le,le>h.length&&(le=h.length),Me=h.window}else Me=Z,ge=se-h.offset,le=h.length;for(C<le&&(le=C),C-=le,h.length-=le;Z[se++]=Me[ge++],--le;);h.length===0&&(h.mode=21);break;case 26:if(C===0)break e;Z[se++]=h.length,C--,h.mode=21;break;case 27:if(h.wrap){for(;B<32;){if(J===0)break e;J--,j|=ie[Y++]<<B,B+=8}if(re-=C,z.total_out+=re,h.total+=re,re&&(z.adler=h.check=h.flags?f(h.check,Z,re,se-re):u(h.check,Z,re,se-re)),re=C,(h.flags?j:_(j))!==h.check){z.msg="incorrect data check",h.mode=30;break}B=j=0}h.mode=28;case 28:if(h.wrap&&h.flags){for(;B<32;){if(J===0)break e;J--,j+=ie[Y++]<<B,B+=8}if(j!==(4294967295&h.total)){z.msg="incorrect length check",h.mode=30;break}B=j=0}h.mode=29;case 29:ce=1;break e;case 30:ce=-3;break e;case 31:return-4;case 32:default:return y}return z.next_out=se,z.avail_out=C,z.next_in=Y,z.avail_in=J,h.hold=j,h.bits=B,(h.wsize||re!==z.avail_out&&h.mode<30&&(h.mode<27||ae!==4))&&me(z,z.output,z.next_out,re-z.avail_out)?(h.mode=31,-4):(ee-=z.avail_in,re-=z.avail_out,z.total_in+=ee,z.total_out+=re,h.total+=re,h.wrap&&re&&(z.adler=h.check=h.flags?f(h.check,Z,re,z.next_out-re):u(h.check,Z,re,z.next_out-re)),z.data_type=h.bits+(h.last?64:0)+(h.mode===12?128:0)+(h.mode===20||h.mode===15?256:0),(ee==0&&re===0||ae===4)&&ce===T&&(ce=-5),ce)},N.inflateEnd=function(z){if(!z||!z.state)return y;var ae=z.state;return ae.window&&(ae.window=null),z.state=null,T},N.inflateGetHeader=function(z,ae){var h;return z&&z.state?(2&(h=z.state).wrap)==0?y:((h.head=ae).done=!1,T):y},N.inflateSetDictionary=function(z,ae){var h,ie=ae.length;return z&&z.state?(h=z.state).wrap!==0&&h.mode!==11?y:h.mode===11&&u(1,ae,ie,0)!==h.check?-3:me(z,ae,ie,ie)?(h.mode=31,-4):(h.havedict=1,T):y},N.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(g,w,N){var m=g("../utils/common"),u=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],v=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],b=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];w.exports=function(S,k,T,y,A,d,c,_){var E,M,q,H,ne,F,X,$,de,me=_.bits,z=0,ae=0,h=0,ie=0,Z=0,Y=0,se=0,J=0,C=0,j=0,B=null,ee=0,re=new m.Buf16(16),le=new m.Buf16(16),ge=null,Me=0;for(z=0;z<=15;z++)re[z]=0;for(ae=0;ae<y;ae++)re[k[T+ae]]++;for(Z=me,ie=15;1<=ie&&re[ie]===0;ie--);if(ie<Z&&(Z=ie),ie===0)return A[d++]=20971520,A[d++]=20971520,_.bits=1,0;for(h=1;h<ie&&re[h]===0;h++);for(Z<h&&(Z=h),z=J=1;z<=15;z++)if(J<<=1,(J-=re[z])<0)return-1;if(0<J&&(S===0||ie!==1))return-1;for(le[1]=0,z=1;z<15;z++)le[z+1]=le[z]+re[z];for(ae=0;ae<y;ae++)k[T+ae]!==0&&(c[le[k[T+ae]]++]=ae);if(F=S===0?(B=ge=c,19):S===1?(B=u,ee-=257,ge=f,Me-=257,256):(B=v,ge=b,-1),z=h,ne=d,se=ae=j=0,q=-1,H=(C=1<<(Y=Z))-1,S===1&&852<C||S===2&&592<C)return 1;for(;;){for(X=z-se,de=c[ae]<F?($=0,c[ae]):c[ae]>F?($=ge[Me+c[ae]],B[ee+c[ae]]):($=96,0),E=1<<z-se,h=M=1<<Y;A[ne+(j>>se)+(M-=E)]=X<<24|$<<16|de|0,M!==0;);for(E=1<<z-1;j&E;)E>>=1;if(E!==0?(j&=E-1,j+=E):j=0,ae++,--re[z]==0){if(z===ie)break;z=k[T+c[ae]]}if(Z<z&&(j&H)!==q){for(se===0&&(se=Z),ne+=h,J=1<<(Y=z-se);Y+se<ie&&!((J-=re[Y+se])<=0);)Y++,J<<=1;if(C+=1<<Y,S===1&&852<C||S===2&&592<C)return 1;A[q=j&H]=Z<<24|Y<<16|ne-d|0}}return j!==0&&(A[ne+j]=z-se<<24|64<<16|0),_.bits=Z,0}},{"../utils/common":41}],51:[function(g,w,N){w.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(g,w,N){var m=g("../utils/common"),u=0,f=1;function v(O){for(var G=O.length;0<=--G;)O[G]=0}var b=0,S=29,k=256,T=k+1+S,y=30,A=19,d=2*T+1,c=15,_=16,E=7,M=256,q=16,H=17,ne=18,F=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],X=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],$=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],de=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],me=new Array(2*(T+2));v(me);var z=new Array(2*y);v(z);var ae=new Array(512);v(ae);var h=new Array(256);v(h);var ie=new Array(S);v(ie);var Z,Y,se,J=new Array(y);function C(O,G,he,pe,W){this.static_tree=O,this.extra_bits=G,this.extra_base=he,this.elems=pe,this.max_length=W,this.has_stree=O&&O.length}function j(O,G){this.dyn_tree=O,this.max_code=0,this.stat_desc=G}function B(O){return O<256?ae[O]:ae[256+(O>>>7)]}function ee(O,G){O.pending_buf[O.pending++]=255&G,O.pending_buf[O.pending++]=G>>>8&255}function re(O,G,he){O.bi_valid>_-he?(O.bi_buf|=G<<O.bi_valid&65535,ee(O,O.bi_buf),O.bi_buf=G>>_-O.bi_valid,O.bi_valid+=he-_):(O.bi_buf|=G<<O.bi_valid&65535,O.bi_valid+=he)}function le(O,G,he){re(O,he[2*G],he[2*G+1])}function ge(O,G){for(var he=0;he|=1&O,O>>>=1,he<<=1,0<--G;);return he>>>1}function Me(O,G,he){var pe,W,ve=new Array(c+1),be=0;for(pe=1;pe<=c;pe++)ve[pe]=be=be+he[pe-1]<<1;for(W=0;W<=G;W++){var ye=O[2*W+1];ye!==0&&(O[2*W]=ge(ve[ye]++,ye))}}function we(O){var G;for(G=0;G<T;G++)O.dyn_ltree[2*G]=0;for(G=0;G<y;G++)O.dyn_dtree[2*G]=0;for(G=0;G<A;G++)O.bl_tree[2*G]=0;O.dyn_ltree[2*M]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function Ce(O){8<O.bi_valid?ee(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function Ke(O,G,he,pe){var W=2*G,ve=2*he;return O[W]<O[ve]||O[W]===O[ve]&&pe[G]<=pe[he]}function qe(O,G,he){for(var pe=O.heap[he],W=he<<1;W<=O.heap_len&&(W<O.heap_len&&Ke(G,O.heap[W+1],O.heap[W],O.depth)&&W++,!Ke(G,pe,O.heap[W],O.depth));)O.heap[he]=O.heap[W],he=W,W<<=1;O.heap[he]=pe}function mt(O,G,he){var pe,W,ve,be,ye=0;if(O.last_lit!==0)for(;pe=O.pending_buf[O.d_buf+2*ye]<<8|O.pending_buf[O.d_buf+2*ye+1],W=O.pending_buf[O.l_buf+ye],ye++,pe===0?le(O,W,G):(le(O,(ve=h[W])+k+1,G),(be=F[ve])!==0&&re(O,W-=ie[ve],be),le(O,ve=B(--pe),he),(be=X[ve])!==0&&re(O,pe-=J[ve],be)),ye<O.last_lit;);le(O,M,G)}function nt(O,G){var he,pe,W,ve=G.dyn_tree,be=G.stat_desc.static_tree,ye=G.stat_desc.has_stree,_e=G.stat_desc.elems,Oe=-1;for(O.heap_len=0,O.heap_max=d,he=0;he<_e;he++)ve[2*he]!==0?(O.heap[++O.heap_len]=Oe=he,O.depth[he]=0):ve[2*he+1]=0;for(;O.heap_len<2;)ve[2*(W=O.heap[++O.heap_len]=Oe<2?++Oe:0)]=1,O.depth[W]=0,O.opt_len--,ye&&(O.static_len-=be[2*W+1]);for(G.max_code=Oe,he=O.heap_len>>1;1<=he;he--)qe(O,ve,he);for(W=_e;he=O.heap[1],O.heap[1]=O.heap[O.heap_len--],qe(O,ve,1),pe=O.heap[1],O.heap[--O.heap_max]=he,O.heap[--O.heap_max]=pe,ve[2*W]=ve[2*he]+ve[2*pe],O.depth[W]=(O.depth[he]>=O.depth[pe]?O.depth[he]:O.depth[pe])+1,ve[2*he+1]=ve[2*pe+1]=W,O.heap[1]=W++,qe(O,ve,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],function(Ne,Xe){var Ia,zt,Za,Ve,ta,Zt,xt=Xe.dyn_tree,ga=Xe.max_code,uo=Xe.stat_desc.static_tree,Qi=Xe.stat_desc.has_stree,Wi=Xe.stat_desc.extra_bits,cn=Xe.stat_desc.extra_base,$t=Xe.stat_desc.max_length,un=0;for(Ve=0;Ve<=c;Ve++)Ne.bl_count[Ve]=0;for(xt[2*Ne.heap[Ne.heap_max]+1]=0,Ia=Ne.heap_max+1;Ia<d;Ia++)$t<(Ve=xt[2*xt[2*(zt=Ne.heap[Ia])+1]+1]+1)&&(Ve=$t,un++),xt[2*zt+1]=Ve,ga<zt||(Ne.bl_count[Ve]++,ta=0,cn<=zt&&(ta=Wi[zt-cn]),Zt=xt[2*zt],Ne.opt_len+=Zt*(Ve+ta),Qi&&(Ne.static_len+=Zt*(uo[2*zt+1]+ta)));if(un!==0){do{for(Ve=$t-1;Ne.bl_count[Ve]===0;)Ve--;Ne.bl_count[Ve]--,Ne.bl_count[Ve+1]+=2,Ne.bl_count[$t]--,un-=2}while(0<un);for(Ve=$t;Ve!==0;Ve--)for(zt=Ne.bl_count[Ve];zt!==0;)ga<(Za=Ne.heap[--Ia])||(xt[2*Za+1]!==Ve&&(Ne.opt_len+=(Ve-xt[2*Za+1])*xt[2*Za],xt[2*Za+1]=Ve),zt--)}}(O,G),Me(ve,Oe,O.bl_count)}function s(O,G,he){var pe,W,ve=-1,be=G[1],ye=0,_e=7,Oe=4;for(be===0&&(_e=138,Oe=3),G[2*(he+1)+1]=65535,pe=0;pe<=he;pe++)W=be,be=G[2*(pe+1)+1],++ye<_e&&W===be||(ye<Oe?O.bl_tree[2*W]+=ye:W!==0?(W!==ve&&O.bl_tree[2*W]++,O.bl_tree[2*q]++):ye<=10?O.bl_tree[2*H]++:O.bl_tree[2*ne]++,ve=W,Oe=(ye=0)===be?(_e=138,3):W===be?(_e=6,3):(_e=7,4))}function ce(O,G,he){var pe,W,ve=-1,be=G[1],ye=0,_e=7,Oe=4;for(be===0&&(_e=138,Oe=3),pe=0;pe<=he;pe++)if(W=be,be=G[2*(pe+1)+1],!(++ye<_e&&W===be)){if(ye<Oe)for(;le(O,W,O.bl_tree),--ye!=0;);else W!==0?(W!==ve&&(le(O,W,O.bl_tree),ye--),le(O,q,O.bl_tree),re(O,ye-3,2)):ye<=10?(le(O,H,O.bl_tree),re(O,ye-3,3)):(le(O,ne,O.bl_tree),re(O,ye-11,7));ve=W,Oe=(ye=0)===be?(_e=138,3):W===be?(_e=6,3):(_e=7,4)}}v(J);var te=!1;function D(O,G,he,pe){re(O,(b<<1)+(pe?1:0),3),function(W,ve,be,ye){Ce(W),ee(W,be),ee(W,~be),m.arraySet(W.pending_buf,W.window,ve,be,W.pending),W.pending+=be}(O,G,he)}N._tr_init=function(O){te||(function(){var G,he,pe,W,ve,be=new Array(c+1);for(W=pe=0;W<S-1;W++)for(ie[W]=pe,G=0;G<1<<F[W];G++)h[pe++]=W;for(h[pe-1]=W,W=ve=0;W<16;W++)for(J[W]=ve,G=0;G<1<<X[W];G++)ae[ve++]=W;for(ve>>=7;W<y;W++)for(J[W]=ve<<7,G=0;G<1<<X[W]-7;G++)ae[256+ve++]=W;for(he=0;he<=c;he++)be[he]=0;for(G=0;G<=143;)me[2*G+1]=8,G++,be[8]++;for(;G<=255;)me[2*G+1]=9,G++,be[9]++;for(;G<=279;)me[2*G+1]=7,G++,be[7]++;for(;G<=287;)me[2*G+1]=8,G++,be[8]++;for(Me(me,T+1,be),G=0;G<y;G++)z[2*G+1]=5,z[2*G]=ge(G,5);Z=new C(me,F,k+1,T,c),Y=new C(z,X,0,y,c),se=new C(new Array(0),$,0,A,E)}(),te=!0),O.l_desc=new j(O.dyn_ltree,Z),O.d_desc=new j(O.dyn_dtree,Y),O.bl_desc=new j(O.bl_tree,se),O.bi_buf=0,O.bi_valid=0,we(O)},N._tr_stored_block=D,N._tr_flush_block=function(O,G,he,pe){var W,ve,be=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=function(ye){var _e,Oe=4093624447;for(_e=0;_e<=31;_e++,Oe>>>=1)if(1&Oe&&ye.dyn_ltree[2*_e]!==0)return u;if(ye.dyn_ltree[18]!==0||ye.dyn_ltree[20]!==0||ye.dyn_ltree[26]!==0)return f;for(_e=32;_e<k;_e++)if(ye.dyn_ltree[2*_e]!==0)return f;return u}(O)),nt(O,O.l_desc),nt(O,O.d_desc),be=function(ye){var _e;for(s(ye,ye.dyn_ltree,ye.l_desc.max_code),s(ye,ye.dyn_dtree,ye.d_desc.max_code),nt(ye,ye.bl_desc),_e=A-1;3<=_e&&ye.bl_tree[2*de[_e]+1]===0;_e--);return ye.opt_len+=3*(_e+1)+5+5+4,_e}(O),W=O.opt_len+3+7>>>3,(ve=O.static_len+3+7>>>3)<=W&&(W=ve)):W=ve=he+5,he+4<=W&&G!==-1?D(O,G,he,pe):O.strategy===4||ve===W?(re(O,2+(pe?1:0),3),mt(O,me,z)):(re(O,4+(pe?1:0),3),function(ye,_e,Oe,Ne){var Xe;for(re(ye,_e-257,5),re(ye,Oe-1,5),re(ye,Ne-4,4),Xe=0;Xe<Ne;Xe++)re(ye,ye.bl_tree[2*de[Xe]+1],3);ce(ye,ye.dyn_ltree,_e-1),ce(ye,ye.dyn_dtree,Oe-1)}(O,O.l_desc.max_code+1,O.d_desc.max_code+1,be+1),mt(O,O.dyn_ltree,O.dyn_dtree)),we(O),pe&&Ce(O)},N._tr_tally=function(O,G,he){return O.pending_buf[O.d_buf+2*O.last_lit]=G>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&G,O.pending_buf[O.l_buf+O.last_lit]=255&he,O.last_lit++,G===0?O.dyn_ltree[2*he]++:(O.matches++,G--,O.dyn_ltree[2*(h[he]+k+1)]++,O.dyn_dtree[2*B(G)]++),O.last_lit===O.lit_bufsize-1},N._tr_align=function(O){re(O,2,3),le(O,M,me),function(G){G.bi_valid===16?(ee(G,G.bi_buf),G.bi_buf=0,G.bi_valid=0):8<=G.bi_valid&&(G.pending_buf[G.pending++]=255&G.bi_buf,G.bi_buf>>=8,G.bi_valid-=8)}(O)}},{"../utils/common":41}],53:[function(g,w,N){w.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(g,w,N){(function(m){(function(u,f){if(!u.setImmediate){var v,b,S,k,T=1,y={},A=!1,d=u.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(u);c=c&&c.setTimeout?c:u,v={}.toString.call(u.process)==="[object process]"?function(q){process.nextTick(function(){E(q)})}:function(){if(u.postMessage&&!u.importScripts){var q=!0,H=u.onmessage;return u.onmessage=function(){q=!1},u.postMessage("","*"),u.onmessage=H,q}}()?(k="setImmediate$"+Math.random()+"$",u.addEventListener?u.addEventListener("message",M,!1):u.attachEvent("onmessage",M),function(q){u.postMessage(k+q,"*")}):u.MessageChannel?((S=new MessageChannel).port1.onmessage=function(q){E(q.data)},function(q){S.port2.postMessage(q)}):d&&"onreadystatechange"in d.createElement("script")?(b=d.documentElement,function(q){var H=d.createElement("script");H.onreadystatechange=function(){E(q),H.onreadystatechange=null,b.removeChild(H),H=null},b.appendChild(H)}):function(q){setTimeout(E,0,q)},c.setImmediate=function(q){typeof q!="function"&&(q=new Function(""+q));for(var H=new Array(arguments.length-1),ne=0;ne<H.length;ne++)H[ne]=arguments[ne+1];var F={callback:q,args:H};return y[T]=F,v(T),T++},c.clearImmediate=_}function _(q){delete y[q]}function E(q){if(A)setTimeout(E,0,q);else{var H=y[q];if(H){A=!0;try{(function(ne){var F=ne.callback,X=ne.args;switch(X.length){case 0:F();break;case 1:F(X[0]);break;case 2:F(X[0],X[1]);break;case 3:F(X[0],X[1],X[2]);break;default:F.apply(f,X)}})(H)}finally{_(q),A=!1}}}}function M(q){q.source===u&&typeof q.data=="string"&&q.data.indexOf(k)===0&&E(+q.data.slice(k.length))}})(typeof self>"u"?m===void 0?this:m:self)}).call(this,typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(Cs)),Cs.exports}var Gm=qm();const Im=Bd(Gm);var co={exports:{}},Zm=co.exports,Md;function $m(){return Md||(Md=1,function(p,R){(function(g,w){w()})(Zm,function(){function g(b,S){return typeof S>"u"?S={autoBom:!1}:typeof S!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),S={autoBom:!S}),S.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(b.type)?new Blob(["\uFEFF",b],{type:b.type}):b}function w(b,S,k){var T=new XMLHttpRequest;T.open("GET",b),T.responseType="blob",T.onload=function(){v(T.response,S,k)},T.onerror=function(){console.error("could not download file")},T.send()}function N(b){var S=new XMLHttpRequest;S.open("HEAD",b,!1);try{S.send()}catch{}return 200<=S.status&&299>=S.status}function m(b){try{b.dispatchEvent(new MouseEvent("click"))}catch{var S=document.createEvent("MouseEvents");S.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),b.dispatchEvent(S)}}var u=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Ga=="object"&&Ga.global===Ga?Ga:void 0,f=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),v=u.saveAs||(typeof window!="object"||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(b,S,k){var T=u.URL||u.webkitURL,y=document.createElement("a");S=S||b.name||"download",y.download=S,y.rel="noopener",typeof b=="string"?(y.href=b,y.origin===location.origin?m(y):N(y.href)?w(b,S,k):m(y,y.target="_blank")):(y.href=T.createObjectURL(b),setTimeout(function(){T.revokeObjectURL(y.href)},4e4),setTimeout(function(){m(y)},0))}:"msSaveOrOpenBlob"in navigator?function(b,S,k){if(S=S||b.name||"download",typeof b!="string")navigator.msSaveOrOpenBlob(g(b,k),S);else if(N(b))w(b,S,k);else{var T=document.createElement("a");T.href=b,T.target="_blank",setTimeout(function(){m(T)})}}:function(b,S,k,T){if(T=T||open("","_blank"),T&&(T.document.title=T.document.body.innerText="downloading..."),typeof b=="string")return w(b,S,k);var y=b.type==="application/octet-stream",A=/constructor/i.test(u.HTMLElement)||u.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||y&&A||f)&&typeof FileReader<"u"){var c=new FileReader;c.onloadend=function(){var M=c.result;M=d?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),T?T.location.href=M:location=M,T=null},c.readAsDataURL(b)}else{var _=u.URL||u.webkitURL,E=_.createObjectURL(b);T?T.location=E:location.href=E,T=null,setTimeout(function(){_.revokeObjectURL(E)},4e4)}});u.saveAs=v.saveAs=v,p.exports=v})}(co)),co.exports}var Xm=$m();function Vm(p){return`<?php include 'functions.php';
$title = '404 - page';
$description = "404 - The page you're looking for can't be found. Please check the URL or return home.";

echo site_header($title, $description);

?>
<section class="${p}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          404
        </h1>
    </div>
  </div>
</section>
<div class="container-fluid py-5 error_page">
    <div class="py-5 text-center">
        <div class="justify-content-center">
                <i class="bi bi-exclamation-circle display-2"></i>
                <h2 class="mb-4">Page not found</h2>
                <p class="mb-4">Sorry, the page you are looking for does not exist on our website! Go to the home page.</p>
                <a class="error_page_btn btn btn-dark text-white rounded-pill py-3 px-5" href="/">Home page</a>
        </div>
    </div>
</div>

<?php echo site_footer(); ?>`}function Qm(p){return`<?php include 'functions.php';
$title = '404 Error Page';
$description = "Page not found. The link may be broken or the page may have been removed. Let’s get you back on track.";

echo site_header($title, $description);

?>
<section class="${p}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          404
        </h1>
    </div>
  </div>
</section>
<div class="container-fluid vh-100 d-flex align-items-center ">
    <div class="row w-100 justify-content-center align-items-center text-center text-md-start">
        <div class="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <i class="bi bi-bug-fill display-1 display-md-2 text-danger"></i>
        </div>
        <div class="col-md-6">
            <h2 class="h3 mb-3">Uh-oh! Lost in the Web</h2>
            <p class="mb-4 lead">
                The page you’re looking for doesn’t exist. Maybe it wandered off or got deleted. Let’s get you back home.
            </p>
            <a href="/" class="btn btn-primary btn-lg rounded-pill px-5 py-3">
                <i class="bi bi-house-door-fill me-2"></i>Home
            </a>
        </div>
    </div>
</div>

<?php echo site_footer(); ?>`}function Wm(p){return`<?php include 'functions.php';
$title = '404 - page';
$description = "The page you are looking for doesn't exist.";

echo site_header($title, $description);

?>
<section class="${p}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          404
        </h1>
    </div>
  </div>
</section>
<div class="text-center p-5 mt-5">
    <div class="mb-4">
        <i class="bi bi-emoji-frown-fill fs-1"></i>
    </div>
    <h2 class="mb-3">Oops! Page Not Found</h2>
    <p class="mb-4 fs-5">Sorry, the page you're looking for doesn't exist.</p>
    <div class="d-flex justify-content-center gap-3">
        <a href="/" class="btn btn-outline-primary btn-lg">
            <i class="bi bi-house-door-fill me-2"></i>Home
        </a>
        <a href="javascript:history.back()" class="btn btn-outline-secondary btn-lg">
            <i class="bi bi-arrow-left-circle me-2"></i>Go Back
        </a>
    </div>
    <div class="mt-5 d-flex justify-content-center gap-2">
        <i class="bi bi-stars fs-3"></i>
        <i class="bi bi-stars fs-2"></i>
        <i class="bi bi-stars fs-3"></i>
    </div>
</div>

<?php echo site_footer(); ?>`}function Km(p){return`<?php include 'functions.php';
$title = '404 - page';
$description = "The page you are looking for doesn't exist.";

echo site_header($title, $description);

?>
<section class="${p}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          404
        </h1>
    </div>
  </div>
</section>
<section class="d-flex align-items-center justify-content-center text-center py-5 error_page">
    <div class="container">
        <h2 class="fw-bold  mb-3">
            Something Went Wrong
        </h2>
        <p class="mb-4">
            We couldn't find the page you're looking for.
            It may have been moved or never existed.
        </p>
        <a href="/" class="btn btn-dark fw-semibold shadow btn-lg px-4">
            <i class="bi bi-arrow-left"></i> Back to Home
        </a>
        <div class="mt-4 opacity-50">
            <i class="bi bi-exclamation-triangle display-6 text-danger"></i>
        </div>
    </div>
</section>

<?php echo site_footer(); ?>`}function Pm(p){return`
RewriteEngine on
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

${p&&p.includes("www.")?`
# non-www to www redirect
RewriteCond %{HTTP_HOST} !^www\\. [NC]
RewriteRule (.*) https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`:`
# www to non-www redirect
RewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]`}

RewriteRule ^index\\.php$ / [R=301,L]
RewriteRule ^(.*)/index\\.php$ /$1/ [R=301,L]

Options All -Indexes

ErrorDocument 404 /404.php

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.php -f
RewriteRule ^(.+)$ $1.php [L,QSA]

RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\\ /.*\\.php\\ HTTP/
RewriteRule ^(.*)\\.php$ /$1 [R=301,L]

#removes multiple trailing slashes
<IfModule mod_rewrite.c>
RewriteBase /

# rule 1: remove multiple leading slashes (directly after the TLD)
RewriteCond %{THE_REQUEST} s/{2,}
RewriteRule (.*) $1 [R=301,L]

# rule 2: remove multiple slashes in the requested path
RewriteCond %{REQUEST_URI} ^(.*)/{2,}(.*)$
RewriteRule (.*) %1/%2 [R=301,L]
</IfModule>
`.trim()}function Fm(p,R,g,w,N){return`<?php include 'functions.php';
$title = 'Privacy policy page';
$description = 'This Privacy Policy describes the information that we gather on or through our Services and how we use and process such information.';
echo site_header($title, $description);

?>
<section class="${N}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>Privacy Policy</h1>
    </div>
  </div>
</section>
<div class="container py-5">
<p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
<p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
<h2>Interpretation and Definitions</h2>
<h3>Interpretation</h3>
<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h3>Definitions</h3>
<p>For the purposes of this Privacy Policy:</p>
<ul>
<li>
<p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
</li>
<li>
<p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
</li>
<li>
<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to ${w||"our website"}.</p>
</li>
<li>
<p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
</li>
<li>
<p><strong>Country</strong> refers to:  ${g||"United Kingdom"}</p>
</li>
<li>
<p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
</li>
<li>
<p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
</li>
<li>
<p><strong>Service</strong> refers to the Website.</p>
</li>
<li>
<p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
</li>
<li>
<p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
</li>
<li>
<p><strong>Website</strong> refers to ${w||"our website"}, accessible from <a href="/">${R||"domain.com"}</a></p>
</li>
<li>
<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
</li>
</ul>
<h2>Collecting and Using Your Personal Data</h2>
<h3>Types of Data Collected</h3>
<h4>Personal Data</h4>
<p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
<ul>
<li>
<p>Email address</p>
</li>
<li>
<p>Usage Data</p>
</li>
</ul>
<h4>Usage Data</h4>
<p>Usage Data is collected automatically when using the Service.</p>
<p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
<p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
<p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
<h4>Tracking Technologies and Cookies</h4>
<p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
<ul>
<li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
<li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
</ul>
<p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.</p>
<p>We use both Session and Persistent Cookies for the purposes set out below:</p>
<ul>
<li>
<p><strong>Necessary / Essential Cookies</strong></p>
<p>Type: Session Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
</li>
<li>
<p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
</li>
<li>
<p><strong>Functionality Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
</li>
</ul>
<p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
<h3>Use of Your Personal Data</h3>
<p>The Company may use Personal Data for the following purposes:</p>
<ul>
<li>
<p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
</li>
<li>
<p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
</li>
<li>
<p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
</li>
<li>
<p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
</li>
<li>
<p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
</li>
<li>
<p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
</li>
<li>
<p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
</li>
<li>
<p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
</li>
</ul>
<p>We may share Your personal information in the following situations:</p>
<ul>
<li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
<li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
<li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
<li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
<li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
<li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
</ul>
<h3>Retention of Your Personal Data</h3>
<p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
<p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
<h3>Transfer of Your Personal Data</h3>
<p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
<p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
<p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
<h3>Delete Your Personal Data</h3>
<p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
<p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
<p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
<p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
<h3>Disclosure of Your Personal Data</h3>
<h4>Business Transactions</h4>
<p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
<h4>Law enforcement</h4>
<p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
<h4>Other legal requirements</h4>
<p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
<ul>
<li>Comply with a legal obligation</li>
<li>Protect and defend the rights or property of the Company</li>
<li>Prevent or investigate possible wrongdoing in connection with the Service</li>
<li>Protect the personal safety of Users of the Service or the public</li>
<li>Protect against legal liability</li>
</ul>
<h3>Security of Your Personal Data</h3>
<p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
<h2>Children's Privacy</h2>
<p>Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 18 without verification of parental consent, We take steps to remove that information from Our servers.</p>
<p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
<h2>Links to Other Websites</h2>
<p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
<h2>Changes to this Privacy Policy</h2>
<p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
<p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
${p?`
<h2>Contact Us</h2>
<p>If you have any questions about this Privacy Policy, You can contact us:</p><ul>
<li>By email: ${p}</li>
</ul>`:""} 
</div>

<?php echo site_footer(); ?>`}function Jm(p,R,g,w,N){return`<?php include 'functions.php';
$title = 'Privacy policy page';
$description = 'This Privacy Policy describes the information that we gather on or through our Services and how we use and process such information.';
echo site_header($title, $description);
?>
<section class="${N}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          Privacy Policy
        </h1>
    </div>
  </div>
</section>
<div class="container py-5">
    <h2>1. Introduction</h2>
    <p>Welcome to  ${w||"our website"}.</p>
    <p>${w||"our website"} (“us”, “we”, or “our”) operates ${R||"domain.com"} (hereinafter referred to as “Service”).</p>
    <p>Our Privacy Policy governs your visit to ${R||"domain.com"}, and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>
    <p>We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
    <p>Our Terms and Conditions (“Terms”) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (“agreement”).</p>
    <p>2. Definitions</p>
    <p>SERVICE means the website operated by ${w||"our website"}.</p>
    <p>PERSONAL DATA means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>
    <p>USAGE DATA is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).</p>
    <p>COOKIES are small files stored on your device (computer or mobile device).</p>
    <p>DATA CONTROLLER means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>
    <p>DATA PROCESSORS (OR SERVICE PROVIDERS) means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p>
    <p>DATA SUBJECT is any living individual who is the subject of Personal Data.</p>
    <p>THE USER is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.</p>
    <p>3. Information Collection and Use</p>
    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
    <p>4. Types of Data Collected</p>
    <p>Personal Data</p>
    <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:</p>
    <p>0.1. Email address</p>
    <p>0.2. First name and last name</p>
    <p>0.3. Phone number</p>
    <p>0.4. Address, Country, State, Province, ZIP/Postal code, City</p>
    <p>0.5. Cookies and Usage Data</p>
    <p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.</p>
    <p>Usage Data</p>
    <p>We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (“Usage Data”).</p>
    <p>This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
    <p>When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.</p>
    <p>Tracking Cookies Data</p>
    <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>
    <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.</p>
    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
    <p>Examples of Cookies we use:</p>
    <p>0.1. Session Cookies: We use Session Cookies to operate our Service.</p>
    <p>0.2. Preference Cookies: We use Preference Cookies to remember your preferences and various settings.</p>
    <p>0.3. Security Cookies: We use Security Cookies for security purposes.</p>
    <p>0.4. Advertising Cookies: Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</p>
    <p>5. Use of Data</p>
    <p>${w||"our website"} uses the collected data for various purposes:</p>
    <p>0.1. to provide and maintain our Service;</p>
    <p>0.2. to notify you about changes to our Service;</p>
    <p>0.3. to allow you to participate in interactive features of our Service when you choose to do so;</p>
    <p>0.4. to provide customer support;</p>
    <p>0.5. to gather analysis or valuable information so that we can improve our Service;</p>
    <p>0.6. to monitor the usage of our Service;</p>
    <p>0.7. to detect, prevent and address technical issues;</p>
    <p>0.8. to fulfil any other purpose for which you provide it;</p>
    <p>0.9. to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</p>
    <p>0.10. to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;</p>
    <p>0.11. to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;</p>
    <p>0.12. in any other way we may describe when you provide the information;</p>
    <p>0.13. for any other purpose with your consent.</p>
    <p>6. Retention of Data</p>
    <p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
    <p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>
    <p>7. Transfer of Data</p>
    <p>Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
    <p>If you are located outside ${g||"United Kingdom"} and choose to provide information to us, please note that we transfer the data, including Personal Data, to  ${g||"United Kingdom"} and process it there.</p>
    <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
    <p>${w||"our website"} will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
    <p>8. Disclosure of Data</p>
    <p>We may disclose personal information that we collect, or you provide:</p>
    <p>0.1. Business Transaction.</p>
    <p>If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.</p>
    <p>0.2. Other cases. We may disclose your information also:</p>
    <p>0.2.1. to our subsidiaries and affiliates;</p>
    <p>0.2.2. to contractors, service providers, and other third parties we use to support our business;</p>
    <p>0.2.3. to fulfill the purpose for which you provide it;</p>
    <p>0.2.4. for the purpose of including your company’s logo on our website;</p>
    <p>0.2.5. for any other purpose disclosed by us when you provide the information;</p>
    <p>0.2.6. with your consent in any other cases;</p>
    <p>0.2.7. if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.</p>
    <p>9. Security of Data</p>
    <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
    <p>10. Your Data Protection Rights Under General Data Protection Regulation (GDPR)
        </p>
    <p>If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.</p>
    <p>We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
    <p> If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at ${p||"info(@)domain.com"}.</p>
    <p>In certain circumstances, you have the following data protection rights:</p>
    <p>0.1. the right to access, update or to delete the information we have on you;</p>
    <p>0.2. the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;</p>
    <p>0.3. the right to object. You have the right to object to our processing of your Personal Data;</p>
    <p>0.4. the right of restriction. You have the right to request that we restrict the processing of your personal information;</p>
    <p>0.5. the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</p>
    <p>0.6. the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;</p>
    <p>Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.</p>
    <p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>
    <p>11. Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</p>
    <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law’s reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.</p>
    <p>According to CalOPPA we agree to the following:</p>
    <p>0.1. users can visit our site anonymously;</p>
    <p>0.2. our Privacy Policy link includes the word “Privacy”, and can easily be found on the home page of our website;</p>
    <p>0.3. users will be notified of any privacy policy changes on our Privacy Policy Page;</p>
    <p>0.4. users are able to change their personal information by emailing us at ${p||"info(@)domain.com"}.</p>
    <p>Our Policy on “Do Not Track” Signals:</p>
    <p>We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.</p>
    <p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>
    <p>12. Your Data Protection Rights under the California Consumer Privacy Act (CCPA)</p>
    <p>If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:</p>
    <p>0.1. What personal information we have about you. If you make this request, we will return to you:</p>
    <p>0.0.1. The categories of personal information we have collected about you.</p>
    <p>0.0.2. The categories of sources from which we collect your personal information.</p>
    <p>0.0.3. The business or commercial purpose for collecting or selling your personal information.</p>
    <p>0.0.4. The categories of third parties with whom we share personal information.</p>
    <p>0.0.5. The specific pieces of personal information we have collected about you.</p>
    <p>0.0.6. A list of categories of personal information that we have sold, along with the category of any other company we sold it to. If we have not sold your personal information, we will inform you of that fact.</p>
    <p>0.0.7. A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with.</p>
    <p>Please note, you are entitled to ask us to provide you with this information up to two times in a rolling twelve-month period. When you make this request, the information provided may be limited to the personal information we collected about you in the previous 12 months.</p>
    <p>0.2. To delete your personal information. If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.</p>
    <p>0.3. To stop selling your personal information. We don’t sell or rent your personal information to any third parties for any purpose. We do not sell your personal information for monetary consideration. However, under some circumstances, a transfer of personal information to a third party, or within our family of companies, without monetary consideration may be considered a “sale” under California law. You are the only owner of your Personal Data and can request disclosure or deletion at any time.</p>
    <p>If you submit a request to stop selling your personal information, we will stop making such transfers.</p>
    <p>Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may not be able to participate in certain programs or membership services which require the usage of your personal information to function. But in no circumstances, we will discriminate against you for exercising your rights.</p>
    <p>Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.</p>
    <p>13. Service Providers</p>
    <p>We may employ third party companies and individuals to facilitate our Service (“Service Providers”), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.</p>
    <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
    <p>14. Analytics</p>
    <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
    <p>15. CI/CD tools</p>
    <p>We may use third-party Service Providers to automate the development process of our Service.</p>
    <p>16. Behavioral Remarketing</p>
    <p>We may use remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.</p>
    <p>17. Links to Other Sites</p>
    <p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
    <p>18. Children’s Privacy</p>
    <p>Our Services are not intended for use by children under the age of 18 (“Child” or “Children”).</p>
    <p>We do not knowingly collect personally identifiable information from Children under 18. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.</p>
    <p>19. Changes to This Privacy Policy</p>
    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
    <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update “effective date” at the top of this Privacy Policy.</p>
    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
</div>
<?php echo site_footer(); ?>
    `}function ev(p,R,g,w,N){return`<?php include 'functions.php';
$title = 'Terms and Conditions page';
$description = 'Review the terms and conditions outlining the rules, rights, and responsibilities for using this site.';
echo site_header($title, $description);
?>
<section class="${N}">
  <div class="container">
    <div class="justify-content-center text-center">
         <h1>Terms and Conditions</h1>
    </div>
  </div>
</section>
<div class="container py-5">
    <p>Please read these terms and conditions carefully before using Our Service.</p>
    <h2>Interpretation and Definitions</h2>
    <h3>Interpretation</h3>
    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
    <h3>Definitions</h3>
    <p>For the purposes of these Terms and Conditions:</p>
    <ul>
        <li>
            <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
        </li>
        <li>
            <p><strong>Country</strong> refers to: ${g||"United Kingdom"}</p>
        </li>
        <li>
            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to ${w||"Our website"}.</p>
        </li>
        <li>
            <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
        </li>
        <li>
            <p><strong>Service</strong> refers to the Website.</p>
        </li>
        <li>
            <p><strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</p>
        </li>
        <li>
            <p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
        </li>
        <li>
            <p><strong>Website</strong> refers to ${w||"Our website"}, accessible from <a href="/">${R||"domain.com"}</a></p>
        </li>
        <li>
            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
        </li>
    </ul>
    <h2>Acknowledgment</h2>
    <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
    <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
    <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
    <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
    <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
    <h2>Links to Other Websites</h2>
    <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
    <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
    <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
    <h2>Termination</h2>
    <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
    <p>Upon termination, Your right to use the Service will cease immediately.</p>
    <h2>Limitation of Liability</h2>
    <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
    <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
    <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
    <h2>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
    <p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
    <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
    <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
    <h2>Governing Law</h2>
    <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
    <h2>Disputes Resolution</h2>
    <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
    <h2>For European Union (EU) Users</h2>
    <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>
    <h2>United States Legal Compliance</h2>
    <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
    <h2>Severability and Waiver</h2>
    <h3>Severability</h3>
    <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
    <h3>Waiver</h3>
    <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
    <h2>Translation Interpretation</h2>
    <p>These Terms and Conditions may have been translated if We have made them available to You on our Service.
        You agree that the original English text shall prevail in the case of a dispute.</p>
    <h2>Changes to These Terms and Conditions</h2>
    <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
    <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
    <h2>Contact Us</h2>
    <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
    <ul>
        <li>By email: ${p||"info(@)domain.com"}</li>
    </ul>
</div>
<?php echo site_footer(); ?>`}function tv(p,R,g,w,N){return`
    <?php include 'functions.php';
$title = 'Terms and Conditions page';
$description = 'Read the terms and conditions that outline the proper use of our website and services.';
echo site_header($title, $description);
?>
<section class="${N}">
  <div class="container">
    <div class="justify-content-center text-center">
         <h1>Terms and Conditions</h1>
    </div>
  </div>
</section>
<div class="container py-5">
    <h2>1. Introduction</h2>
    <p>Welcome to ${w||"Our website"} (“Company”, “we”, “our”, “us”)!</p>
    <p>These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at ${R||"domain.com"} (together or individually “Service”) operated by ${w||"Our website"}.</p>
    <p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.</p>
    <p>Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.</p>
    <p>If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at ${p||"web[at]domain.com"} so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>
    <p>2. Communications</p>
    <p>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at ${p||"web[at]domain.com"}.</p>
    <p>3. Contests, Sweepstakes and Promotions</p>
    <p>Any contests, sweepstakes or other promotions (collectively, “Promotions”) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.</p>
    <p>4. Content</p>
    <p>Content found on or through this Service are the property of ${w||"Our website"} or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>
    <p>5. Prohibited Uses</p>
    <p>You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:</p>
    <p>0.1. In any way that violates any applicable national or international law or regulation.</p>
    <p>0.2. For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</p>
    <p>0.3. To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.</p>
    <p>0.4. To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</p>
    <p>0.5. In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</p>
    <p>0.6. To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.</p>
    <p>Additionally, you agree not to:</p>
    <p>0.1. Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party’s use of Service, including their ability to engage in real time activities through Service.</p>
    <p>0.2. Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.</p>
    <p>0.3. Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.</p>
    <p>0.4. Use any device, software, or routine that interferes with the proper working of Service.</p>
    <p>0.5. Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</p>
    <p>0.6. Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.</p>
    <p>0.7. Attack Service via a denial-of-service attack or a distributed denial-of-service attack.</p>
    <p>0.8. Take any action that may damage or falsify Company rating.</p>
    <p>0.9. Otherwise attempt to interfere with the proper working of Service.</p>
    <p>6. Analytics</p>
    <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
    <p>7. No Use By Minors</p>
    <p>Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using Service, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.</p>
    <p>8. Intellectual Property</p>
    <p>Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of ${w||"Our website"} and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of ${w||"Our website"}.</p>
    <p>9. Copyright Policy</p>
    <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (“Infringement”) of any person or entity.</p>
    <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to ${p||"web[at]domain.com"}, with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”</p>
    <p>You may be held accountable for damages (including costs and attorneys’ fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.</p>
    <p>10. DMCA Notice and Procedure for Copyright Infringement Claims</p>
    <p>You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):</p>
    <p>0.1. an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright’s interest;</p>
    <p>0.2. a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;</p>
    <p>0.3. identification of the URL or other specific location on Service where the material that you claim is infringing is located;</p>
    <p>0.4. your address, telephone number, and email address;</p>
    <p>0.5. a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</p>
    <p>0.6. a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.</p>
    <p>11. Error Reporting and Feedback</p>
    <p>You may provide us either directly at ${p||"web[at]domain.com"}.bg or via third party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (“Feedback”). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.</p>
    <p>12. Links To Other Web Sites</p>
    <p>Our Service may contain links to third party web sites or services that are not owned or controlled by ${w||"Our website"}.</p>
    <p>${w||"Our website"} has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>
    <p>YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.</p>
    <p>WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.</p>
    <p>13. Disclaimer Of Warranty</p>
    <p>THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.</p>
    <p>NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.</p>
    <p>COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.</p>
    <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
    <p>14. Limitation Of Liability</p>
    <p>EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</p>
    <p>15. Termination</p>
    <p>We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.</p>
    <p>If you wish to terminate your account, you may simply discontinue using Service.</p>
    <p>All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
    <p>16. Governing Law</p>
    <p>These Terms shall be governed and construed in accordance with the laws of ${g||"United Kingdom"}, which governing law applies to agreement without regard to its conflict of law provisions.</p>
    <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.</p>
    <p>17. Changes To Service</p>
    <p>We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.</p>
    <p>18. Amendments To Terms</p>
    <p>We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.</p>
    <p>Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.</p>
    <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.</p>
    <p>19. Waiver And Severability</p>
    <p>No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.</p>
    <p>If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.</p>
    <p>20. Acknowledgement</p>
    <p>BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.</p>
</div>
<?php echo site_footer(); ?>
    `}function av(p,R,g){return`User-agent: *
Allow: /*.css
Allow: /*.js

#optional

User-agent: Googlebot-News
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Video
Allow: /

User-agent: Googlebot-Mobile
Allow: /

User-agent: Mediapartners-Google
Allow: /

User-agent: Adsbot-Google
Allow: /

User-agent: ia_archiver
Disallow: /

#end optional

${R.length>1||g?`Sitemap: ${p||"domain.com"}/sitemap.xml`:""}`}function nv(p,R,g,w={}){const N=p.endsWith("/")?p.slice(0,-1):p;let m="";return R.filter(f=>!(f.isDropdownParent&&!f.hasOwnPage||!f.isHome&&(!f.slug||f.slug.trim()===""))).forEach(f=>{f.isHome?m+=`  <url>
    <loc>${N}/</loc>
  </url>
`:m+=`  <url>
    <loc>${N}/${f.slug}</loc>
  </url>
`}),w.contactPage&&(m+=`  <url>
    <loc>${N}/contact</loc>
  </url>
`),g==="privacy"?m+=`  <url>
    <loc>${N}/privacy</loc>
  </url>
`:g==="terms"&&(m+=`  <url>
    <loc>${N}/terms</loc>
  </url>
`),`<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${m}</urlset>`.trim()}const ya={PAGES:"websiteBuilder_pages",GLOBAL_SETTINGS:"websiteBuilder_globalSettings",CURRENT_PAGE_ID:"websiteBuilder_currentPageId",STORED_IMAGES:"one-page-builder-stored-images"},ea={save:(p,R)=>{try{localStorage.setItem(p,JSON.stringify(R))}catch(g){console.error("Error saving to localStorage:",g)}},load:(p,R=null)=>{try{const g=localStorage.getItem(p);return g?JSON.parse(g):R}catch(g){return console.error("Error loading from localStorage:",g),R}},remove:p=>{try{localStorage.removeItem(p)}catch(R){console.error("Error removing from localStorage:",R)}},clearAll:()=>{Object.values(ya).forEach(p=>{ea.remove(p)})}};function iv(p,R,g,w){return w=Number(w),`
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler  = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navLinks       = document.querySelectorAll(".navbar-nav .nav-link");

  // Normalize current path (remove trailing slash except for root)
  const currentPath = (function () {
    let p = window.location.pathname;
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    return p;
  })();

  ${p.length>1?`
  // Highlight active link (multi-page)
  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const url  = href.startsWith("http") ? new URL(href, window.location.origin).pathname : href;
    const normalized = url.length > 1 && url.endsWith("/") ? url.slice(0, -1) : url;
    if (normalized === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });`:`// Single-page: update active link on scroll
  function updateActiveLink() {
    const scrollPosition = window.scrollY + 200; // offset for fixed nav
    navLinks.forEach((link) => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach((nl) => nl.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("load", updateActiveLink);`}

  ${R?"":`
  // Auto-close mobile nav on scroll
  let lastScrollY = window.scrollY;
  let scrollTimeout;
  window.addEventListener("scroll", function () {
    if (!navbarToggler || !navbarCollapse) return;
    // only run on mobile (toggler visible)
    if (window.getComputedStyle(navbarToggler).display === "none") return;

    const isNavOpen = navbarCollapse.classList.contains("show");
    if (!isNavOpen) return;

    const currentScrollY = window.scrollY;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        const inst = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });
        inst.hide();
        if (navbarToggler) navbarToggler.setAttribute("aria-expanded", "false");
      }
      lastScrollY = currentScrollY;
    }, 100);
  }, { passive: true });
  `}
  // Close when clicking outside the nav (mobile)
  document.addEventListener("click", function (event) {
    if (!navbarToggler || !navbarCollapse) return;

    const isClickInsideNav  = navbarCollapse.contains(event.target);
    const isClickOnToggler  = navbarToggler.contains(event.target);
    const isNavOpen         = navbarCollapse.classList.contains("show");

    if (!isClickInsideNav && !isClickOnToggler && isNavOpen) {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        const inst = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });
        inst.hide();
        navbarToggler.setAttribute("aria-expanded", "false");
      }
    }
  });
   const arrow = document.querySelector("#dropToggle .arrow");

 if (arrow) {
    arrow.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const parent = this.closest(".dropdown");
      parent.classList.toggle("open");
    });
  }
${g?`
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);
  `:""}
${w===4&&R?`
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero-section");
  if (!hero) {
    document.body.style.paddingTop = "30px";
  }
});
`:""}

  });`}function rv({globalSettings:p,topLevelPages:R,childPages:g,currentPage:w,customNavItems:N}){return(p==null?void 0:p.navStyle)!=="1"?null:o.jsx("nav",{className:["navbar","navbar-expand-lg","navbar-light",p!=null&&p.stickyNavbar?"sticky-top":"",p!=null&&p.transparentNavbar?"transparent-navbar":""].filter(Boolean).join(" "),children:o.jsxs("div",{className:"container-fluid",children:[o.jsx("a",{className:"navbar-brand d-flex align-items-center",href:"#",children:o.jsx("img",{src:(p==null?void 0:p.logo)||"https://placehold.co/220x50",alt:"Logo",width:220,height:50})}),o.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:o.jsx("span",{className:"navbar-toggler-icon"})}),o.jsx("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:o.jsxs("ul",{className:"navbar-nav",children:[R.map(m=>{if(m.isDropdownParent){const u=g.filter(f=>f.parentId===m.id);return o.jsxs("li",{className:"nav-item dropdown",children:[o.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:m.navLabel||m.title}),o.jsx("ul",{className:"custom-dropdown dropdown-menu",children:u.map(f=>o.jsx("li",{children:o.jsx("a",{className:`dropdown-item ${f.id===(w==null?void 0:w.id)?"active":""}`,href:`#${f.slug}`,children:f.navLabel||f.title})},f.id))})]},m.id)}return o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:`nav-link ${m.id===(w==null?void 0:w.id)?"active":""}`,href:m.isHome?"#":`#${m.slug}`,children:m.navLabel||m.title})},m.id)}),N.map(m=>o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:"nav-link",href:m.url,target:m.external?"_blank":"_self",rel:m.external?"noopener noreferrer":void 0,children:m.label})},m.id))]})})]})})}function ov({globalSettings:p,topLevelPages:R,childPages:g,currentPage:w,customNavItems:N}){if((p==null?void 0:p.navStyle)!=="2")return null;const m=Xi.useRef(null);return Xi.useEffect(()=>{const u=document.querySelector(".preview-container"),f=m.current,v=u==null?void 0:u.querySelector(".hero-section");if(!u||!f)return;v||(u.style.paddingTop="80px");function b(){u.scrollTop>50?f.classList.add("scrolled"):f.classList.remove("scrolled")}return u.addEventListener("scroll",b),b(),()=>{u.removeEventListener("scroll",b),!v&&u.style.paddingTop==="80px"&&(u.style.paddingTop="")}},[p]),o.jsx("nav",{ref:m,className:["navbar","navbar-expand-lg","navbar-light",p!=null&&p.stickyNavbar?"sticky-top":"","floating-rounded-navbar","container","second-style-navbar"].filter(Boolean).join(" "),children:o.jsxs("div",{className:"container-fluid",children:[o.jsx("a",{className:"navbar-brand d-flex align-items-center",href:"#",children:o.jsx("img",{src:(p==null?void 0:p.logo)||"https://placehold.co/220x50",alt:"Logo",width:220,height:50})}),o.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:o.jsx("span",{className:"navbar-toggler-icon"})}),o.jsx("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:o.jsxs("ul",{className:"navbar-nav",children:[R.map(u=>{if(u.isDropdownParent){const f=g.filter(v=>v.parentId===u.id);return o.jsxs("li",{className:"nav-item dropdown",children:[o.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:u.navLabel||u.title}),o.jsx("ul",{className:"custom-dropdown dropdown-menu",children:f.map(v=>o.jsx("li",{children:o.jsx("a",{className:`dropdown-item ${v.id===(w==null?void 0:w.id)?"active":""}`,href:`#${v.slug}`,children:v.navLabel||v.title})},v.id))})]},u.id)}return o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:`nav-link ${u.id===(w==null?void 0:w.id)?"active":""}`,href:u.isHome?"#":`#${u.slug}`,children:u.navLabel||u.title})},u.id)}),N.map(u=>o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:"nav-link",href:u.url,target:u.external?"_blank":"_self",rel:u.external?"noopener noreferrer":void 0,children:u.label})},u.id))]})})]})})}function lv({globalSettings:p,topLevelPages:R,childPages:g,currentPage:w,customNavItems:N}){return(p==null?void 0:p.navStyle)!=="3"?null:o.jsx("nav",{className:["navbar","navbar-expand-xl","navbar-light",p!=null&&p.stickyNavbar?"sticky-top":""].filter(Boolean).join(" "),children:o.jsxs("div",{className:"container flex-xl-column",children:[o.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center d-xl-block text-center",children:[o.jsx("a",{className:"navbar-brand mx-xl-auto",href:(p==null?void 0:p.homeHref)||"#",children:o.jsx("img",{src:(p==null?void 0:p.logo)||"https://placehold.co/220x50",alt:(p==null?void 0:p.siteName)||"Logo",width:220,height:50})}),o.jsx("button",{className:"navbar-toggler d-xl-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:o.jsx("span",{className:"navbar-toggler-icon"})})]}),o.jsx("div",{className:"collapse navbar-collapse justify-content-center mt-lg-0 py-lg-0",id:"navbarNav",children:o.jsxs("ul",{className:"navbar-nav",children:[R.map(m=>{if(m.isDropdownParent){const u=g.filter(f=>f.parentId===m.id);return o.jsxs("li",{className:"nav-item dropdown",children:[o.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:m.navLabel||m.title}),o.jsx("ul",{className:"custom-dropdown dropdown-menu",children:u.map(f=>o.jsx("li",{children:o.jsx("a",{className:`dropdown-item ${f.id===(w==null?void 0:w.id)?"active":""}`,href:`#${f.slug}`,children:f.navLabel||f.title})},f.id))})]},m.id)}return o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:`nav-link ${m.id===(w==null?void 0:w.id)?"active":""}`,href:m.isHome?(p==null?void 0:p.homeHref)||"#":`#${m.slug}`,children:m.navLabel||m.title})},m.id)}),N.map(m=>o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:"nav-link",href:m.url,target:m.external?"_blank":"_self",rel:m.external?"noopener noreferrer":void 0,children:m.label})},m.id))]})})]})})}function sv({globalSettings:p,topLevelPages:R,childPages:g,currentPage:w,customNavItems:N}){if((p==null?void 0:p.navStyle)!=="4")return null;const m=Xi.useRef(null);return Xi.useEffect(()=>{const u=document.querySelector(".preview-container"),f=m.current,v=u==null?void 0:u.querySelector(".hero-section");if(!u||!f)return;v||(u.style.paddingTop="80px");function b(){u.scrollTop>50?f.classList.add("scrolled"):f.classList.remove("scrolled")}return u.addEventListener("scroll",b),b(),()=>{u.removeEventListener("scroll",b),!v&&u.style.paddingTop==="80px"&&(u.style.paddingTop="")}},[p]),o.jsx("nav",{ref:m,className:["navbar","navbar-expand-lg","navbar-light","nav-style-4",p!=null&&p.stickyNavbar?"sticky-top":""].filter(Boolean).join(" "),children:o.jsxs("div",{className:"container-fluid",children:[o.jsx("a",{className:"navbar-brand d-flex align-items-center",href:"#",children:o.jsx("img",{src:(p==null?void 0:p.logo)||"https://placehold.co/220x50",alt:"Logo",width:220,height:50})}),o.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:o.jsx("span",{className:"navbar-toggler-icon"})}),o.jsx("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:o.jsxs("ul",{className:"navbar-nav",children:[R.map(u=>{if(u.isDropdownParent){const f=g.filter(v=>v.parentId===u.id);return o.jsxs("li",{className:"nav-item dropdown",children:[o.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:u.navLabel||u.title}),o.jsx("ul",{className:"custom-dropdown dropdown-menu",children:f.map(v=>o.jsx("li",{children:o.jsx("a",{className:`dropdown-item ${v.id===(w==null?void 0:w.id)?"active":""}`,href:`#${v.slug}`,children:v.navLabel||v.title})},v.id))})]},u.id)}return o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:`nav-link ${u.id===(w==null?void 0:w.id)?"active":""}`,href:u.isHome?"#":`#${u.slug}`,children:u.navLabel||u.title})},u.id)}),N.map(u=>o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:"nav-link",href:u.url,target:u.external?"_blank":"_self",rel:u.external?"noopener noreferrer":void 0,children:u.label})},u.id))]})})]})})}const Dt={webAppUrl:"https://script.google.com/macros/s/AKfycbzq-n264rH_HrvybL2TACI_8Nf33OaZZ2q2QQVUfpPeO5kUwcVc32p6xWAyUdg9tSoytw/exec",sharedKey:"petkovv",userIdKey:"uid"};function cv({webAppUrl:p,sharedKey:R,userIdKey:g}){Dt.webAppUrl=p,Dt.sharedKey=R,g&&(Dt.userIdKey=g)}function uv(){let p=localStorage.getItem(Dt.userIdKey);return p||(p=crypto&&crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2),localStorage.setItem(Dt.userIdKey,p)),p}async function fv(p=1){if(!Dt.webAppUrl||!Dt.sharedKey)throw new Error("clicksService not configured: call setConfig({ webAppUrl, sharedKey }) first.");const R=uv(),g=await fetch(Dt.webAppUrl,{method:"POST",body:JSON.stringify({key:Dt.sharedKey,userId:R,delta:p})});let w={};try{w=await g.json()}catch{}if(!g.ok||w.ok===!1)throw new Error(w.error||`POST failed: ${g.status}`);return!0}async function dv(){if(!Dt.webAppUrl||!Dt.sharedKey)throw new Error("clicksService not configured: call setConfig({ webAppUrl, sharedKey }) first.");const p=new URL(Dt.webAppUrl);return p.searchParams.set("key",Dt.sharedKey),(await(await fetch(p.toString())).json()).rows||[]}const hv=({formData:p,globalSettings:R,pages:g,currentPage:w,storedImages:N=[]})=>{const m="https://script.google.com/macros/s/AKfycbzq-n264rH_HrvybL2TACI_8Nf33OaZZ2q2QQVUfpPeO5kUwcVc32p6xWAyUdg9tSoytw/exec",u="petkovv",f=Vi(R);Xi.useEffect(()=>{cv({webAppUrl:m,sharedKey:u}),dv().catch(X=>setError(X.message))},[]);const v=async()=>{try{await fv(1)}catch(X){console.error("Click logging failed:",X)}},b=()=>{window.confirm(`⚠️ This will delete all your work and start fresh.

Are you sure you want to clear all saved data? This action cannot be undone.`)&&(ea.clearAll(),alert(`✅ All data has been cleared successfully!

The page will now reload with a fresh start.`),window.location.reload())},S=(X,$)=>{if(!$||$.length===0)return console.log("📭 No stored images to process"),X;const de=new Map;return $.forEach((me,z)=>{me.b64_json&&me.filename&&(de.set(me.b64_json,me.filename),console.log(`📋 Mapped image ${z+1}: ${me.filename}`))}),console.log(`📋 Created ${de.size} image mappings`),X.map(me=>{var h;if(!((h=me.formData)!=null&&h.mainContent))return me;let z=me.formData.mainContent;const ae=/src="data:image\/(jpe?g|png);base64,([^"]+)"/g;return z=z.replace(ae,(ie,Z,Y)=>{console.log(`🔍 Found ${Z} image (${Y.length} chars)`);const se=de.get(Y);return se?(console.log(`✅ Replaced with: images/${se}`),`src="/images/${se}"`):(console.warn("⚠️ No mapping found for this base64 data"),ie)}),{...me,formData:{...me.formData,mainContent:z}}})},k=()=>{const X=[Vm,Qm,Wm,Km],$=Math.floor(Math.random()*X.length);return X[$]},y=(()=>{var $,de,me,z;const X=[];return($=R.url)!=null&&$.trim()||X.push("Website URL"),(de=R.name)!=null&&de.trim()||X.push("Website Name"),(me=R.domain)!=null&&me.trim()||X.push("Website Domain"),(z=R.email)!=null&&z.trim()||X.push("Website Email"),{isValid:X.length===0,missingFields:X}})(),A=!y.isValid,d=()=>{if(!y.isValid){alert(`Please fill in the following required fields in Global Settings:

• ${y.missingFields.join(`
• `)}

These fields are required for generating the website files.`);return}c(),v()};async function c(){const X=new Im;R.contactPage&&(R.contactRandomIndex=Math.floor(Math.random()*3)+1);const $=S(g,N),de=Ym($,R);console.log(R),Object.entries(de.pages).forEach(([me,z])=>{X.file(me,z)}),X.file("functions.php",de.functions),X.file("style.css",de.styles);try{const z=await(await fetch("/one-page-builder/bootstrap/css/bootstrap.min.css")).blob();X.file("assets/bootstrap/css/bootstrap.min.css",z);const h=await(await fetch("/one-page-builder/bootstrap/js/bootstrap.min.js")).blob();X.file("assets/bootstrap/js/bootstrap.min.js",h)}catch(me){console.warn("Could not add Bootstrap files to download:",me)}if(N&&N.length>0){console.log(`🖼️ Adding ${N.length} AI-generated images to ZIP`),console.log("📋 Stored images:",N.map(me=>({filename:me.filename,hasData:!!me.b64_json})));for(const me of N)try{if(!me.b64_json){console.error(`❌ No base64 data for ${me.filename}`);continue}const z=atob(me.b64_json),ae=new Uint8Array(z.length);for(let h=0;h<z.length;h++)ae[h]=z.charCodeAt(h);X.file(`images/${me.filename}`,ae),console.log(`Added AI image: ${me.filename}`)}catch(z){console.error(`Error processing AI image ${me.filename}:`,z)}}if(X.file("404.php",k()(f)),R.contactPage&&X.file("contact.php",bm(R.contactRandomIndex,R)),X.file("robots.txt",av(R.url,g,R.contactPage)),(g.length>1||R.contactPage)&&X.file("sitemap.xml",nv(R.url,g,R.privacyOrTerms,R)),R.privacyOrTerms==="privacy")switch(R.privacyOption){case"1":X.file("privacy.php",Fm(R.email,R.url,R.country,R.name,f));break;case"2":X.file("privacy.php",Jm(R.email,R.url,R.country,R.name,f));break}else if(R.privacyOrTerms==="terms")switch(R.termsOption){case"1":X.file("terms.php",ev(R.email,R.url,R.country,R.name,f));break;case"2":X.file("terms.php",tv(R.email,R.url,R.country,R.name,f));break}if(X.file(".htaccess",Pm(R.url)),X.file("assets/js/main.js",iv(g,R.stickyNavbar,R.scrollToTop,R.navStyle)),R.logo&&R.logo.startsWith("data:")){const z=await(await fetch(R.logo)).blob();X.file("images/logo.svg",z)}if(R.favicon&&R.favicon.startsWith("data:")){const z=await(await fetch(R.favicon)).blob();X.file("images/favicon.png",z)}if(R.heroBg&&R.heroBg.startsWith("data:")&&!R.transparentHero){const z=await(await fetch(R.heroBg)).blob();X.file("images/hero-bg.jpg",z)}if(R.bodyBg&&R.bodyBg.startsWith("data:")){const z=await(await fetch(R.bodyBg)).blob();X.file("images/body-bg.jpg",z)}X.generateAsync({type:"blob"}).then(me=>{Xm.saveAs(me,`${R.domain||"multi-page-website"}.zip`)})}const _=g.filter(X=>{var $;return!(($=R.hiddenFromNav)!=null&&$.includes(X.id))}),E=R.customNavItems||[],M=_.filter(X=>!X.parentId),q=_.filter(X=>X.parentId),H=g.filter(X=>!(X.isDropdownParent&&!X.hasOwnPage)).length,ne=()=>{const X=R.footerStyle||"1";let $="";switch(X){case"2":$=Os?Os():so();break;case"3":$=js?js():so();break;case"1":default:$=so()}return R.whiteLogo&&($+=`
      .footer img {
        filter: brightness(0) invert(1);
      }
    `),$},F=()=>{const X=R.footerStyle||"1";let $;switch(X){case"2":$=ks?ks(R):lo(R);break;case"3":$=Rs?Rs(R):lo(R);break;case"1":default:$=lo(R)}const de=new Date().getFullYear();return $=$.replace("<?php echo date('Y'); ?>",de),R.logo&&R.logo.startsWith("data:")&&($=$.replace(/src="\/images\/logo\.svg"/g,`src="${R.logo}"`)),$};return o.jsxs("div",{className:"preview-container",style:{"--body-bg-color":R.bodyBgColor||"#f8fafc","--body-text-color":R.bodyTextColor||"#222222","--heading-color":R.headingColor||"#222222","--hero-gradient-1":R.heroGradient1||"#168295","--hero-gradient-2":R.heroGradient2||"#0b5e3a","--footer-bg-color":R.footerBgColor||"#0d0d0d","--link-color":R.linkColor||"#2563eb","--header-bg-color":R.headerBgColor||"#ffffff","--font-family":R.fontFamily&&R.fontFamily!=="system"?R.fontFamily:"system-ui","--nav-link-color":R.navLinkColor||"#141414","--footer-text-color":R.footerTextColor||"#ffffff","--header-text-color":R.headerTextColor||"#ffffffff"},children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:Hd(R)}}),o.jsx("style",{dangerouslySetInnerHTML:{__html:ne()}}),o.jsxs("div",{className:"preview-header d-flex justify-content-between align-items-center p-3 bg-light border-bottom",id:"preview-header",children:[o.jsxs("div",{children:[o.jsxs("h5",{className:"mb-0 fw-bold",children:["Preview: ",(w==null?void 0:w.title)||"Untitled Page"]}),o.jsxs("small",{className:"text-muted",children:[H," page",H!==1?"s":""," total"]})]}),o.jsxs("div",{className:"d-flex flex-column gap-2 align-items-end",children:[o.jsxs("div",{className:"d-flex align-items-center gap-3 mb-1",children:[o.jsx("h5",{className:"delete-button-title",children:"Clear All Data"}),o.jsxs("button",{className:"btn btn-outline-danger btn-sm delete-button",onClick:b,title:"Clear all saved data and start fresh",children:[o.jsx("span",{class:"back"}),o.jsx("span",{class:"front"})]})]}),o.jsxs("button",{className:`download-button btn ${A?"btn-secondary":"btn-success"}`,onClick:d,disabled:A,title:A?`Missing required fields: ${y.missingFields.join(", ")}`:"Download your website",children:[o.jsx("i",{class:"bi bi-cloud-arrow-down pe-1"}),"Download"]}),A&&o.jsxs("small",{className:"text-danger mt-1 text-end",children:["Missing: ",y.missingFields.join(", ")]})]})]}),o.jsxs("div",{className:"website-preview ",lang:R.lang||"en",style:R.bodyBg?{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${R.bodyBg}")`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"}:{},children:[o.jsx("style",{children:Yd(R.bodyPattern,".website-preview")}),o.jsxs(o.Fragment,{children:[R.navStyle==="1"&&o.jsx(rv,{globalSettings:R,topLevelPages:M,childPages:q,currentPage:w,customNavItems:E}),R.navStyle==="2"&&o.jsx(ov,{globalSettings:R,topLevelPages:M,childPages:q,currentPage:w,customNavItems:E}),R.navStyle==="3"&&o.jsx(lv,{globalSettings:R,topLevelPages:M,childPages:q,currentPage:w,customNavItems:E}),R.navStyle==="4"&&o.jsx(sv,{globalSettings:R,topLevelPages:M,childPages:q,currentPage:w,customNavItems:E})]}),o.jsx("section",{id:"preview-hero",className:`${f} ${R.navStyle==="2"&&"second-style"} ${R.navStyle==="4"&&"fourth-style"} ${R.transparentHero?"transparent-hero":""}`,style:R.heroBg&&!R.transparentHero?{backgroundImage:`url(${R.heroBg})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:{},children:o.jsx("div",{className:"container",style:{position:"relative",zIndex:2},children:o.jsx("div",{className:"row justify-content-center text-center",children:o.jsxs("div",{className:"col-lg-11",children:[o.jsx("h1",{className:"display-4 fw-bold mb-4",children:p.h1||"Welcome to Your Website"}),p.afterH1&&o.jsx("div",{dangerouslySetInnerHTML:{__html:p.afterH1}})]})})})}),o.jsx("main",{className:"container py-5",children:o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-lg-12",children:p.mainContent?o.jsx("div",{className:"content-area",dangerouslySetInnerHTML:{__html:p.mainContent}}):o.jsxs("div",{className:"text-center text-muted py-5",children:[o.jsx("h3",{children:"No content added yet"}),o.jsx("p",{children:"Add some content to see it here"})]})})})}),o.jsx("div",{dangerouslySetInnerHTML:{__html:F()}}),R.scrollToTop&&o.jsxs("a",{href:"#",id:"scroll-top",className:"scroll-top d-flex align-items-center justify-content-center",children:[" ",o.jsx("i",{className:"bi bi-arrow-up-short"})," "]})]})]})},pv=({pages:p,setPages:R,currentPageId:g,setCurrentPageId:w})=>{var A;const[N,m]=We.useState(!1),[u,f]=We.useState({title:"",slug:"",isDropdown:!1,parentId:null,dropdownHasOwnPage:!1}),v={lang:"en",bodyBgColor:"#f8fafc",bodyTextColor:"#222222",headingColor:"#222222",heroGradient1:"#168295",heroGradient2:"#0b5e3a",footerBgColor:"#0d0d0d",linkColor:"#2563eb",headerBgColor:"#ffffff"},b=d=>{var c;if(window.confirm("Are you sure you want to delete this dropdown and all its child pages?")){const _=p.filter(q=>q.parentId===d),E=[d,..._.map(q=>q.id)],M=p.filter(q=>!E.includes(q.id));E.includes(g)&&w((c=M[0])==null?void 0:c.id),R(M)}},S=()=>{if(!u.title.trim()||!u.slug.trim())return;const d=u.slug.toLowerCase().replace(/[^a-z0-9-]/g,"-");if(p.some(_=>_.slug===d)){alert(`A page with the slug "${d}" already exists. Please choose a different slug.`);return}if(u.parentId==="new-dropdown"){const _={id:Date.now().toString(),title:u.dropdownTitle,slug:u.dropdownHasOwnPage?d:null,isDropdown:!0,isDropdownParent:!0,hasOwnPage:u.dropdownHasOwnPage,children:[],formData:u.dropdownHasOwnPage?{title:u.dropdownTitle,desc:"",h1:u.dropdownTitle,mainContent:`<h2>${u.dropdownTitle}</h2>
<p>This is a dropdown menu parent page.</p>`,...v}:null};R(E=>[...E,_]),u.dropdownHasOwnPage&&w(_.id)}else if(u.parentId){const _={id:Date.now().toString(),title:u.title,slug:d,parentId:u.parentId,isDropdown:!1,formData:{title:u.title,desc:"",h1:u.title,mainContent:`<h2>Welcome to ${u.title}</h2>
<p>This is your new page content. Edit it as needed.</p>`,...v}};R(E=>[...E,_]),w(_.id)}else{const _={id:Date.now().toString(),title:u.title,slug:d,parentId:u.parentId,isHome:p.length===0,formData:{title:u.title,desc:"",h1:u.title,mainContent:`<h2>Welcome to ${u.title}</h2>
<p>This is your new page content. Edit it as needed.</p>`,...v}};R(E=>[...E,_]),w(_.id)}f({title:"",slug:"",parentId:null,dropdownTitle:"",dropdownHasOwnPage:!1}),m(!1)},k=d=>{var c;if(p.length<=1){alert("You must have at least one page.");return}if(window.confirm("Are you sure you want to delete this page?")&&(R(_=>_.filter(E=>E.id!==d)),g===d)){const _=p.filter(E=>E.id!==d);w((c=_[0])==null?void 0:c.id)}},T=d=>{R(c=>c.map(_=>({..._,isHome:_.id===d})))},y=d=>d.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim("-");return o.jsxs("div",{className:"page-manager",children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[o.jsxs("h4",{className:"mb-0",children:["Pages (",p.length,")"]}),o.jsx("button",{className:" add-page-button",onClick:()=>m(!0),children:"+ Add Page"})]}),N&&o.jsx("div",{className:"card mb-3",children:o.jsxs("div",{className:"card-body",children:[o.jsx("h6",{className:"card-title",children:"Add New Page"}),o.jsx("div",{className:"mb-2",children:o.jsx("input",{type:"text",className:"form-control form-control-sm",placeholder:"Page Title",value:u.title,onChange:d=>{const c=d.target.value;f(_=>({..._,title:c,slug:y(c)}))}})}),o.jsx("div",{className:"mb-2",children:o.jsx("input",{type:"text",className:"form-control form-control-sm",placeholder:"URL Slug (e.g., about-us)",value:u.slug,onChange:d=>f(c=>({...c,slug:d.target.value.toLowerCase().replace(/[^a-z0-9-]/g,"-")}))})}),o.jsx("div",{className:"mb-3",children:o.jsxs("select",{className:"form-select form-select-sm",value:u.parentId||"",onChange:d=>f(c=>({...c,parentId:d.target.value||null})),children:[o.jsx("option",{value:"",children:"Main Navigation Item"}),o.jsx("option",{value:"new-dropdown",children:"+ Create New Dropdown"}),p.filter(d=>d.isDropdown).map(d=>o.jsxs("option",{value:d.id,children:['Under "',d.title,'" dropdown']},d.id))]})}),u.parentId==="new-dropdown"&&o.jsxs("div",{className:"mb-3",children:[o.jsx("input",{type:"text",className:"form-control form-control-sm",placeholder:"Dropdown Menu Title (e.g., Services)",value:u.dropdownTitle||"",onChange:d=>f(c=>({...c,dropdownTitle:d.target.value}))}),o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"checkbox",id:"dropdownHasOwnPage",checked:u.dropdownHasOwnPage,onChange:d=>f(c=>({...c,dropdownHasOwnPage:d.target.checked}))}),o.jsx("label",{className:"form-check-label",htmlFor:"dropdownHasOwnPage",children:"Dropdown menu should also be a clickable link to its own page"})]}),o.jsx("small",{className:"text-muted",children:u.dropdownHasOwnPage?"The dropdown title will be clickable and lead to its own page, plus show dropdown items on hover.":"The dropdown title will only show dropdown items on hover, not be a clickable link."})]}),u.parentId&&u.parentId!=="new-dropdown"&&o.jsx("small",{className:"text-muted",children:"This page will appear as an item in the selected dropdown menu."}),o.jsxs("div",{className:"d-flex gap-2",children:[o.jsx("button",{className:"btn btn-success btn-sm",onClick:S,disabled:u.parentId==="new-dropdown"?!((A=u.dropdownTitle)!=null&&A.trim()):!u.title.trim()||!u.slug.trim(),children:u.parentId==="new-dropdown"?"Create Dropdown":"Add Page"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{m(!1),f({title:"",slug:"",parentId:null,dropdownTitle:"",dropdownHasOwnPage:!1})},children:"Cancel"})]})]})}),o.jsx("div",{className:"pages-list",children:p.map(d=>o.jsxs("div",{className:`page-item ${d.id===g?"active":""} ${d.parentId?"child-page":""}`,onClick:()=>{d.formData&&w(d.id)},children:[o.jsxs("div",{className:"page-info",children:[o.jsxs("div",{className:"page-title",children:[d.parentId&&o.jsx("span",{className:"child-indicator",children:"└─ "}),d.title,d.isHome&&o.jsx("span",{className:"home-badge",children:"HOME"}),d.isDropdownParent&&o.jsx("span",{className:"dropdown-badge",children:"DROPDOWN"})]}),o.jsx("div",{className:"page-slug",children:`/${d.slug}`})]}),o.jsxs("div",{className:"page-actions",children:[!d.isDropdownParent&&o.jsxs(o.Fragment,{children:[!d.isHome&&o.jsx("button",{className:"btn btn-sm btn-outline-success",onClick:c=>{c.stopPropagation(),T(d.id)},title:"Set as home page",children:"🏠"}),o.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:c=>{c.stopPropagation(),k(d.id)},title:"Delete page",children:"🗑️"})]}),d.isDropdownParent&&o.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:c=>{c.stopPropagation(),b(d.id)},title:"Delete dropdown and all child pages",children:"🗑️"})]})]},d.id))})]})},mv=({pages:p,globalSettings:R,setGlobalSettings:g})=>{const[w,N]=We.useState(!1),[m,u]=We.useState({label:"",url:""}),f=()=>{if(!m.label.trim()||!m.url.trim())return;const T=R.customNavItems||[],y={id:Date.now().toString(),label:m.label,url:m.url};g(A=>({...A,customNavItems:[...T,y]})),u({label:"",url:""}),N(!1)},v=T=>{const y=R.customNavItems||[];g(A=>({...A,customNavItems:y.filter(d=>d.id!==T)}))},b=T=>{const y=R.hiddenFromNav||[],A=y.includes(T);g(A?d=>({...d,hiddenFromNav:y.filter(c=>c!==T)}):d=>({...d,hiddenFromNav:[...y,T]}))},S=R.hiddenFromNav||[],k=R.customNavItems||[];return o.jsxs("div",{className:"navigation-builder",children:[o.jsxs("h5",{className:"mb-3",children:[o.jsx("span",{style:{marginRight:8,fontSize:18},children:"🧭"}),"Navigation Settings"]}),o.jsxs("div",{className:"section mb-4",children:[o.jsx("h6",{className:"section-title",children:"Page Navigation"}),o.jsx("p",{className:"text-muted small mb-2",children:"Control which pages appear in your site navigation"}),p.map(T=>o.jsxs("div",{className:"nav-item-control",children:[o.jsxs("div",{className:"nav-item-info",children:[o.jsxs("div",{className:"nav-item-label",children:[T.navLabel||T.title,T.isHome&&o.jsx("span",{className:"home-badge",children:"HOME"})]}),o.jsxs("div",{className:"nav-item-url",children:["/",T.slug]})]}),o.jsxs("div",{className:"form-check form-switch",children:[o.jsx("input",{className:"form-check-input",type:"checkbox",id:`nav-${T.id}`,checked:!S.includes(T.id),onChange:()=>b(T.id)}),o.jsx("label",{className:"form-check-label",htmlFor:`nav-${T.id}`,children:"Show in navigation"})]})]},T.id))]}),o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[o.jsx("h6",{className:"section-title mb-0",children:"Custom Navigation Links"}),o.jsx("button",{className:"btn btn-sm btn-outline-success",onClick:()=>N(!0),children:"+ Add Link"})]}),o.jsx("p",{className:"text-muted small mb-3",children:"Add custom navigation items"}),w&&o.jsx("div",{className:"card mb-3",children:o.jsxs("div",{className:"card-body",children:[o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-6 mb-2",children:o.jsx("input",{type:"text",className:"form-control form-control-sm",placeholder:"Link Label",value:m.label,onChange:T=>u(y=>({...y,label:T.target.value}))})}),o.jsx("div",{className:"col-md-6 mb-2",children:o.jsx("input",{type:"text",className:"form-control form-control-sm",placeholder:"URL (e.g., https://example.com or /contact)",value:m.url,onChange:T=>u(y=>({...y,url:T.target.value}))})})]}),o.jsxs("div",{className:"d-flex gap-2",children:[o.jsx("button",{className:"btn btn-success btn-sm",onClick:f,disabled:!m.label.trim()||!m.url.trim(),children:"Add Link"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{N(!1),u({label:"",url:""})},children:"Cancel"})]})]})}),k.length>0&&o.jsx("div",{className:"custom-links-list",children:k.map(T=>o.jsxs("div",{className:"custom-link-item",children:[o.jsxs("div",{className:"custom-link-info",children:[o.jsx("div",{className:"custom-link-label",children:T.label}),o.jsx("div",{className:"custom-link-url",children:T.url})]}),o.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:()=>v(T.id),title:"Remove link",children:"🗑️"})]},T.id))}),k.length===0&&!w&&o.jsx("div",{className:"text-muted text-center py-3",children:"No custom navigation links added yet"})]})]})};function vv(){const[p,R]=We.useState(()=>ea.load(ya.STORED_IMAGES)||[]),[g,w]=We.useState(()=>ea.load(ya.PAGES)||[{id:"1",title:"Home",slug:"",isHome:!0,formData:{title:"Welcome to Your Website",desc:"Your amazing website description",h1:"Welcome to Your Website",afterH1:"This is your beautiful new website. Start editing to make it your own!",mainContent:`<h2>Welcome to Your Website</h2>
<p>This is your new page content. Edit it as needed.</p>`}}]),[N,m]=We.useState(()=>ea.load(ya.GLOBAL_SETTINGS)||{domain:"",logo:"",favicon:"",hiddenFromNav:[],customNavItems:[],lang:"en",bodyBgColor:"#f8fafc",bodyTextColor:"#222222",headingColor:"#222222",heroGradient1:"#168295",heroGradient2:"#0b5e3a",footerBgColor:"#0d0d0d",linkColor:"#2563eb",footerTextColor:"#ffffff",headerBgColor:"#ffffff",headerTextColor:"#ffffffff",stickyNavbar:!0,privacyOrTerms:"privacy",privacyOption:"1",termsOption:"1",navStyle:"1",footerStyle:"1",headingsStyle:"1",scrollToTop:!1,contactPage:!1}),[u,f]=We.useState(()=>ea.load(ya.CURRENT_PAGE_ID,"1"));We.useEffect(()=>{ea.save(ya.STORED_IMAGES,p)},[p]),We.useEffect(()=>{ea.save(ya.PAGES,g)},[g]),We.useEffect(()=>{ea.save(ya.GLOBAL_SETTINGS,N)},[N]),We.useEffect(()=>{ea.save(ya.CURRENT_PAGE_ID,u)},[u]);const v=g.find(T=>T.id===u),b=(v==null?void 0:v.formData)||{},S=T=>{w(y=>y.map(A=>A.id===u?{...A,formData:typeof T=="function"?T(A.formData):T}:A))},k=(T,y=null)=>{S(A=>({...A,mainContent:T})),y&&R(A=>{const d=[...A,y];return console.log("Image stored for download:",d),d})};return o.jsx(o.Fragment,{children:o.jsx("div",{className:"container-fluid",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-6 px-0",children:o.jsxs("div",{className:"builder-panel",children:[o.jsx(pv,{pages:g,setPages:w,currentPageId:u,setCurrentPageId:f}),o.jsx(mv,{pages:g,globalSettings:N,setGlobalSettings:m}),o.jsx(dm,{formData:b,setFormData:S,globalSettings:N,setGlobalSettings:m,currentPage:v,onImageInsert:k})]})}),o.jsx("div",{className:"col-md-6 px-0",children:o.jsx(hv,{formData:b,globalSettings:N,pages:g,currentPage:v,storedImages:p})})]})})})}om.createRoot(document.getElementById("root")).render(o.jsx(We.StrictMode,{children:o.jsx(vv,{})}));
