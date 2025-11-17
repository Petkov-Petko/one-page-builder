(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))x(A);new MutationObserver(A=>{for(const m of A)if(m.type==="childList")for(const c of m.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&x(c)}).observe(document,{childList:!0,subtree:!0});function w(A){const m={};return A.integrity&&(m.integrity=A.integrity),A.referrerPolicy&&(m.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?m.credentials="include":A.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function x(A){if(A.ep)return;A.ep=!0;const m=w(A);fetch(A.href,m)}})();var Ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Md(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var xs={exports:{}},Zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function Wp(){if(xd)return Zi;xd=1;var y=Symbol.for("react.transitional.element"),z=Symbol.for("react.fragment");function w(x,A,m){var c=null;if(m!==void 0&&(c=""+m),A.key!==void 0&&(c=""+A.key),"key"in A){m={};for(var d in A)d!=="key"&&(m[d]=A[d])}else m=A;return A=m.ref,{$$typeof:y,type:x,key:c,ref:A!==void 0?A:null,props:m}}return Zi.Fragment=z,Zi.jsx=w,Zi.jsxs=w,Zi}var _d;function Kp(){return _d||(_d=1,xs.exports=Wp()),xs.exports}var o=Kp(),_s={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function Pp(){if(Sd)return Oe;Sd=1;var y=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=k&&N[k]||N["@@iterator"],typeof N=="function"?N:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,u={};function T(N,j,Y){this.props=N,this.context=j,this.refs=u,this.updater=Y||g}T.prototype.isReactComponent={},T.prototype.setState=function(N,j){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,j,"setState")},T.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=T.prototype;function C(N,j,Y){this.props=N,this.context=j,this.refs=u,this.updater=Y||g}var M=C.prototype=new _;M.constructor=C,h(M,T.prototype),M.isPureReactComponent=!0;var q=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},ne=Object.prototype.hasOwnProperty;function J(N,j,Y,te,ie,oe){return Y=oe.ref,{$$typeof:y,type:N,key:j,ref:Y!==void 0?Y:null,props:oe}}function de(N,j){return J(N.type,j,void 0,void 0,void 0,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===y}function re(N){var j={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Y){return j[Y]})}var ye=/\/+/g;function R(N,j){return typeof N=="object"&&N!==null&&N.key!=null?re(""+N.key):j.toString(36)}function W(){}function p(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(W,W):(N.status="pending",N.then(function(j){N.status==="pending"&&(N.status="fulfilled",N.value=j)},function(j){N.status==="pending"&&(N.status="rejected",N.reason=j)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ee(N,j,Y,te,ie){var oe=typeof N;(oe==="undefined"||oe==="boolean")&&(N=null);var ge=!1;if(N===null)ge=!0;else switch(oe){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(N.$$typeof){case y:case z:ge=!0;break;case E:return ge=N._init,ee(ge(N._payload),j,Y,te,ie)}}if(ge)return ie=ie(N),ge=te===""?"."+R(N,0):te,q(ie)?(Y="",ge!=null&&(Y=ge.replace(ye,"$&/")+"/"),ee(ie,j,Y,"",function(Ce){return Ce})):ie!=null&&(G(ie)&&(ie=de(ie,Y+(ie.key==null||N&&N.key===ie.key?"":(""+ie.key).replace(ye,"$&/")+"/")+ge)),j.push(ie)),1;ge=0;var Me=te===""?".":te+":";if(q(N))for(var xe=0;xe<N.length;xe++)te=N[xe],oe=Me+R(te,xe),ge+=ee(te,j,Y,oe,ie);else if(xe=S(N),typeof xe=="function")for(N=xe.call(N),xe=0;!(te=N.next()).done;)te=te.value,oe=Me+R(te,xe++),ge+=ee(te,j,Y,oe,ie);else if(oe==="object"){if(typeof N.then=="function")return ee(p(N),j,Y,te,ie);throw j=String(N),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ge}function X(N,j,Y){if(N==null)return N;var te=[],ie=0;return ee(N,te,"","",function(oe){return j.call(Y,oe,ie++)}),te}function B(N){if(N._status===-1){var j=N._result;j=j(),j.then(function(Y){(N._status===0||N._status===-1)&&(N._status=1,N._result=Y)},function(Y){(N._status===0||N._status===-1)&&(N._status=2,N._result=Y)}),N._status===-1&&(N._status=0,N._result=j)}if(N._status===1)return N._result.default;throw N._result}var se=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function F(){}return Oe.Children={map:X,forEach:function(N,j,Y){X(N,function(){j.apply(this,arguments)},Y)},count:function(N){var j=0;return X(N,function(){j++}),j},toArray:function(N){return X(N,function(j){return j})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Oe.Component=T,Oe.Fragment=w,Oe.Profiler=A,Oe.PureComponent=C,Oe.StrictMode=x,Oe.Suspense=v,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return H.H.useMemoCache(N)}},Oe.cache=function(N){return function(){return N.apply(null,arguments)}},Oe.cloneElement=function(N,j,Y){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var te=h({},N.props),ie=N.key,oe=void 0;if(j!=null)for(ge in j.ref!==void 0&&(oe=void 0),j.key!==void 0&&(ie=""+j.key),j)!ne.call(j,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&j.ref===void 0||(te[ge]=j[ge]);var ge=arguments.length-2;if(ge===1)te.children=Y;else if(1<ge){for(var Me=Array(ge),xe=0;xe<ge;xe++)Me[xe]=arguments[xe+2];te.children=Me}return J(N.type,ie,void 0,void 0,oe,te)},Oe.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:m,_context:N},N},Oe.createElement=function(N,j,Y){var te,ie={},oe=null;if(j!=null)for(te in j.key!==void 0&&(oe=""+j.key),j)ne.call(j,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ie[te]=j[te]);var ge=arguments.length-2;if(ge===1)ie.children=Y;else if(1<ge){for(var Me=Array(ge),xe=0;xe<ge;xe++)Me[xe]=arguments[xe+2];ie.children=Me}if(N&&N.defaultProps)for(te in ge=N.defaultProps,ge)ie[te]===void 0&&(ie[te]=ge[te]);return J(N,oe,void 0,void 0,null,ie)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(N){return{$$typeof:d,render:N}},Oe.isValidElement=G,Oe.lazy=function(N){return{$$typeof:E,_payload:{_status:-1,_result:N},_init:B}},Oe.memo=function(N,j){return{$$typeof:f,type:N,compare:j===void 0?null:j}},Oe.startTransition=function(N){var j=H.T,Y={};H.T=Y;try{var te=N(),ie=H.S;ie!==null&&ie(Y,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(F,se)}catch(oe){se(oe)}finally{H.T=j}},Oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},Oe.use=function(N){return H.H.use(N)},Oe.useActionState=function(N,j,Y){return H.H.useActionState(N,j,Y)},Oe.useCallback=function(N,j){return H.H.useCallback(N,j)},Oe.useContext=function(N){return H.H.useContext(N)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(N,j){return H.H.useDeferredValue(N,j)},Oe.useEffect=function(N,j,Y){var te=H.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(N,j)},Oe.useId=function(){return H.H.useId()},Oe.useImperativeHandle=function(N,j,Y){return H.H.useImperativeHandle(N,j,Y)},Oe.useInsertionEffect=function(N,j){return H.H.useInsertionEffect(N,j)},Oe.useLayoutEffect=function(N,j){return H.H.useLayoutEffect(N,j)},Oe.useMemo=function(N,j){return H.H.useMemo(N,j)},Oe.useOptimistic=function(N,j){return H.H.useOptimistic(N,j)},Oe.useReducer=function(N,j,Y){return H.H.useReducer(N,j,Y)},Oe.useRef=function(N){return H.H.useRef(N)},Oe.useState=function(N){return H.H.useState(N)},Oe.useSyncExternalStore=function(N,j,Y){return H.H.useSyncExternalStore(N,j,Y)},Oe.useTransition=function(){return H.H.useTransition()},Oe.version="19.1.0",Oe}var Td;function js(){return Td||(Td=1,_s.exports=Pp()),_s.exports}var Ke=js();const Qi=Md(Ke);var Ss={exports:{}},Xi={},Ts={exports:{}},Es={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function Fp(){return Ed||(Ed=1,function(y){function z(X,B){var se=X.length;X.push(B);e:for(;0<se;){var F=se-1>>>1,N=X[F];if(0<A(N,B))X[F]=B,X[se]=N,se=F;else break e}}function w(X){return X.length===0?null:X[0]}function x(X){if(X.length===0)return null;var B=X[0],se=X.pop();if(se!==B){X[0]=se;e:for(var F=0,N=X.length,j=N>>>1;F<j;){var Y=2*(F+1)-1,te=X[Y],ie=Y+1,oe=X[ie];if(0>A(te,se))ie<N&&0>A(oe,te)?(X[F]=oe,X[ie]=se,F=ie):(X[F]=te,X[Y]=se,F=Y);else if(ie<N&&0>A(oe,se))X[F]=oe,X[ie]=se,F=ie;else break e}}return B}function A(X,B){var se=X.sortIndex-B.sortIndex;return se!==0?se:X.id-B.id}if(y.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;y.unstable_now=function(){return m.now()}}else{var c=Date,d=c.now();y.unstable_now=function(){return c.now()-d}}var v=[],f=[],E=1,k=null,S=3,g=!1,h=!1,u=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function q(X){for(var B=w(f);B!==null;){if(B.callback===null)x(f);else if(B.startTime<=X)x(f),B.sortIndex=B.expirationTime,z(v,B);else break;B=w(f)}}function H(X){if(u=!1,q(X),!h)if(w(v)!==null)h=!0,ne||(ne=!0,R());else{var B=w(f);B!==null&&ee(H,B.startTime-X)}}var ne=!1,J=-1,de=5,G=-1;function re(){return T?!0:!(y.unstable_now()-G<de)}function ye(){if(T=!1,ne){var X=y.unstable_now();G=X;var B=!0;try{e:{h=!1,u&&(u=!1,C(J),J=-1),g=!0;var se=S;try{t:{for(q(X),k=w(v);k!==null&&!(k.expirationTime>X&&re());){var F=k.callback;if(typeof F=="function"){k.callback=null,S=k.priorityLevel;var N=F(k.expirationTime<=X);if(X=y.unstable_now(),typeof N=="function"){k.callback=N,q(X),B=!0;break t}k===w(v)&&x(v),q(X)}else x(v);k=w(v)}if(k!==null)B=!0;else{var j=w(f);j!==null&&ee(H,j.startTime-X),B=!1}}break e}finally{k=null,S=se,g=!1}B=void 0}}finally{B?R():ne=!1}}}var R;if(typeof M=="function")R=function(){M(ye)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,p=W.port2;W.port1.onmessage=ye,R=function(){p.postMessage(null)}}else R=function(){_(ye,0)};function ee(X,B){J=_(function(){X(y.unstable_now())},B)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(X){X.callback=null},y.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<X?Math.floor(1e3/X):5},y.unstable_getCurrentPriorityLevel=function(){return S},y.unstable_next=function(X){switch(S){case 1:case 2:case 3:var B=3;break;default:B=S}var se=S;S=B;try{return X()}finally{S=se}},y.unstable_requestPaint=function(){T=!0},y.unstable_runWithPriority=function(X,B){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var se=S;S=X;try{return B()}finally{S=se}},y.unstable_scheduleCallback=function(X,B,se){var F=y.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,X){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=se+N,X={id:E++,callback:B,priorityLevel:X,startTime:se,expirationTime:N,sortIndex:-1},se>F?(X.sortIndex=se,z(f,X),w(v)===null&&X===w(f)&&(u?(C(J),J=-1):u=!0,ee(H,se-F))):(X.sortIndex=N,z(v,X),h||g||(h=!0,ne||(ne=!0,R()))),X},y.unstable_shouldYield=re,y.unstable_wrapCallback=function(X){var B=S;return function(){var se=S;S=B;try{return X.apply(this,arguments)}finally{S=se}}}}(Es)),Es}var Ad;function Jp(){return Ad||(Ad=1,Ts.exports=Fp()),Ts.exports}var As={exports:{}},gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function em(){if(Nd)return gt;Nd=1;var y=js();function z(v){var f="https://react.dev/errors/"+v;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)f+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+v+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(){}var x={d:{f:w,r:function(){throw Error(z(522))},D:w,C:w,L:w,m:w,X:w,S:w,M:w},p:0,findDOMNode:null},A=Symbol.for("react.portal");function m(v,f,E){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:k==null?null:""+k,children:v,containerInfo:f,implementation:E}}var c=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(v,f){if(v==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,gt.createPortal=function(v,f){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(z(299));return m(v,f,null,E)},gt.flushSync=function(v){var f=c.T,E=x.p;try{if(c.T=null,x.p=2,v)return v()}finally{c.T=f,x.p=E,x.d.f()}},gt.preconnect=function(v,f){typeof v=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,x.d.C(v,f))},gt.prefetchDNS=function(v){typeof v=="string"&&x.d.D(v)},gt.preinit=function(v,f){if(typeof v=="string"&&f&&typeof f.as=="string"){var E=f.as,k=d(E,f.crossOrigin),S=typeof f.integrity=="string"?f.integrity:void 0,g=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;E==="style"?x.d.S(v,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:k,integrity:S,fetchPriority:g}):E==="script"&&x.d.X(v,{crossOrigin:k,integrity:S,fetchPriority:g,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},gt.preinitModule=function(v,f){if(typeof v=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var E=d(f.as,f.crossOrigin);x.d.M(v,{crossOrigin:E,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&x.d.M(v)},gt.preload=function(v,f){if(typeof v=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var E=f.as,k=d(E,f.crossOrigin);x.d.L(v,E,{crossOrigin:k,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},gt.preloadModule=function(v,f){if(typeof v=="string")if(f){var E=d(f.as,f.crossOrigin);x.d.m(v,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:E,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else x.d.m(v)},gt.requestFormReset=function(v){x.d.r(v)},gt.unstable_batchedUpdates=function(v,f){return v(f)},gt.useFormState=function(v,f,E){return c.H.useFormState(v,f,E)},gt.useFormStatus=function(){return c.H.useHostTransitionStatus()},gt.version="19.1.0",gt}var Cd;function tm(){if(Cd)return As.exports;Cd=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(z){console.error(z)}}return y(),As.exports=em(),As.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function am(){if(Od)return Xi;Od=1;var y=Jp(),z=js(),w=tm();function x(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(m(e)!==e)throw Error(x(188))}function v(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(x(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return d(i),e;if(r===n)return d(i),t;r=r.sibling}throw Error(x(188))}if(a.return!==n.return)a=i,n=r;else{for(var l=!1,b=i.child;b;){if(b===a){l=!0,a=i,n=r;break}if(b===n){l=!0,n=i,a=r;break}b=b.sibling}if(!l){for(b=r.child;b;){if(b===a){l=!0,a=r,n=i;break}if(b===n){l=!0,n=r,a=i;break}b=b.sibling}if(!l)throw Error(x(189))}}if(a.alternate!==n)throw Error(x(190))}if(a.tag!==3)throw Error(x(188));return a.stateNode.current===a?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,k=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),M=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var W=Symbol.for("react.client.reference");function p(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===W?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case h:return"Fragment";case T:return"Profiler";case u:return"StrictMode";case H:return"Suspense";case ne:return"SuspenseList";case G:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case g:return"Portal";case M:return(e.displayName||"Context")+".Provider";case C:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:p(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return p(e(t))}catch{}}return null}var ee=Array.isArray,X=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},F=[],N=-1;function j(e){return{current:e}}function Y(e){0>N||(e.current=F[N],F[N]=null,N--)}function te(e,t){N++,F[N]=e.current,e.current=t}var ie=j(null),oe=j(null),ge=j(null),Me=j(null);function xe(e,t){switch(te(ge,t),te(oe,e),te(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wf(t),e=Kf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(ie),te(ie,e)}function Ce(){Y(ie),Y(oe),Y(ge)}function We(e){e.memoizedState!==null&&te(Me,e);var t=ie.current,a=Kf(t,e.type);t!==a&&(te(oe,e),te(ie,a))}function qe(e){oe.current===e&&(Y(ie),Y(oe)),Me.current===e&&(Y(Me),Hi._currentValue=se)}var mt=Object.prototype.hasOwnProperty,nt=y.unstable_scheduleCallback,s=y.unstable_cancelCallback,ce=y.unstable_shouldYield,ae=y.unstable_requestPaint,D=y.unstable_now,O=y.unstable_getCurrentPriorityLevel,I=y.unstable_ImmediatePriority,he=y.unstable_UserBlockingPriority,pe=y.unstable_NormalPriority,$=y.unstable_LowPriority,me=y.unstable_IdlePriority,be=y.log,ve=y.unstable_setDisableYieldValue,_e=null,ke=null;function Ne(e){if(typeof be=="function"&&ve(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(_e,e)}catch{}}var Qe=Math.clz32?Math.clz32:Za,Ia=Math.log,zt=Math.LN2;function Za(e){return e>>>=0,e===0?32:31-(Ia(e)/zt|0)|0}var Ve=256,ta=4194304;function Zt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wt(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var b=n&134217727;return b!==0?(n=b&~r,n!==0?i=Zt(n):(l&=b,l!==0?i=Zt(l):a||(a=b&~e,a!==0&&(i=Zt(a))))):(b=n&~r,b!==0?i=Zt(b):l!==0?i=Zt(l):a||(a=n&~e,a!==0&&(i=Zt(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function ga(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cl(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vi(){var e=Ve;return Ve<<=1,(Ve&4194048)===0&&(Ve=256),e}function $i(){var e=ta;return ta<<=1,(ta&62914560)===0&&(ta=4194304),e}function cn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Xt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function un(e,t,a,n,i,r){var l=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,U=e.expirationTimes,V=e.hiddenUpdates;for(a=l&~a;0<a;){var le=31-Qe(a),fe=1<<le;b[le]=0,U[le]=-1;var K=V[le];if(K!==null)for(V[le]=null,le=0;le<K.length;le++){var P=K[le];P!==null&&(P.lane&=-536870913)}a&=~fe}n!==0&&Ds(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function Ds(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Qe(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function zs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Qe(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function ul(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Us(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:md(e.type))}function Bd(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var ba=Math.random().toString(36).slice(2),vt="__reactFiber$"+ba,xt="__reactProps$"+ba,fn="__reactContainer$"+ba,dl="__reactEvents$"+ba,Hd="__reactListeners$"+ba,Ld="__reactHandles$"+ba,Ms="__reactResources$"+ba,Kn="__reactMarker$"+ba;function hl(e){delete e[vt],delete e[xt],delete e[dl],delete e[Hd],delete e[Ld]}function dn(e){var t=e[vt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[fn]||a[vt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ed(e);e!==null;){if(a=e[vt])return a;e=ed(e)}return t}e=a,a=e.parentNode}return null}function hn(e){if(e=e[vt]||e[fn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Pn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(x(33))}function pn(e){var t=e[Ms];return t||(t=e[Ms]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[Kn]=!0}var Ys=new Set,Bs={};function Xa(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Bs[e]=t,e=0;e<t.length;e++)Ys.add(t[e])}var qd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hs={},Ls={};function Gd(e){return mt.call(Ls,e)?!0:mt.call(Hs,e)?!1:qd.test(e)?Ls[e]=!0:(Hs[e]=!0,!1)}function Wi(e,t,a){if(Gd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ki(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function aa(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var pl,qs;function vn(e){if(pl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);pl=t&&t[1]||"",qs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pl+e+qs}var ml=!1;function vl(e,t){if(!e||ml)return"";ml=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var fe=function(){throw Error()};if(Object.defineProperty(fe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(fe,[])}catch(P){var K=P}Reflect.construct(e,[],fe)}else{try{fe.call()}catch(P){K=P}e.call(fe.prototype)}}else{try{throw Error()}catch(P){K=P}(fe=e())&&typeof fe.catch=="function"&&fe.catch(function(){})}}catch(P){if(P&&K&&typeof P.stack=="string")return[P.stack,K.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),l=r[0],b=r[1];if(l&&b){var U=l.split(`
`),V=b.split(`
`);for(i=n=0;n<U.length&&!U[n].includes("DetermineComponentFrameRoot");)n++;for(;i<V.length&&!V[i].includes("DetermineComponentFrameRoot");)i++;if(n===U.length||i===V.length)for(n=U.length-1,i=V.length-1;1<=n&&0<=i&&U[n]!==V[i];)i--;for(;1<=n&&0<=i;n--,i--)if(U[n]!==V[i]){if(n!==1||i!==1)do if(n--,i--,0>i||U[n]!==V[i]){var le=`
`+U[n].replace(" at new "," at ");return e.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",e.displayName)),le}while(1<=n&&0<=i);break}}}finally{ml=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?vn(a):""}function Id(e){switch(e.tag){case 26:case 27:case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 15:return vl(e.type,!1);case 11:return vl(e.type.render,!1);case 1:return vl(e.type,!0);case 31:return vn("Activity");default:return""}}function Gs(e){try{var t="";do t+=Id(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Is(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e){var t=Is(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=Zd(e))}function Zs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Is(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xd=/[\n"\\]/g;function Mt(e){return e.replace(Xd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yl(e,t,a,n,i,r,l,b){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?gl(e,l,Ut(t)):a!=null?gl(e,l,Ut(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Ut(b):e.removeAttribute("name")}function Xs(e,t,a,n,i,r,l,b){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+Ut(a):"",t=t!=null?""+Ut(t):a,b||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=b?e.checked:!!n,e.defaultChecked=!!n,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l)}function gl(e,t,a){t==="number"&&Fi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Ut(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qs(e,t,a){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ut(a):""}function Vs(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(x(92));if(ee(n)){if(1<n.length)throw Error(x(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Ut(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function gn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $s(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Qd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ws(e,t,a){if(t!=null&&typeof t!="object")throw Error(x(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&$s(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&$s(e,r,t[r])}function bl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$d=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ji(e){return $d.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wl=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bn=null,wn=null;function Ks(e){var t=hn(e);if(t&&(e=t.stateNode)){var a=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(yl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[xt]||null;if(!i)throw Error(x(90));yl(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Zs(n)}break e;case"textarea":Qs(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&yn(e,!!a.multiple,t,!1)}}}var _l=!1;function Ps(e,t,a){if(_l)return e(t,a);_l=!0;try{var n=e(t);return n}finally{if(_l=!1,(bn!==null||wn!==null)&&(Br(),bn&&(t=bn,e=wn,wn=bn=null,Ks(t),e)))for(t=0;t<e.length;t++)Ks(e[t])}}function Fn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[xt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(x(231,t,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sl=!1;if(na)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Sl=!1}var wa=null,Tl=null,er=null;function Fs(){if(er)return er;var e,t=Tl,a=t.length,n,i="value"in wa?wa.value:wa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var l=a-e;for(n=1;n<=l&&t[a-n]===i[r-n];n++);return er=i.slice(e,1<n?1-n:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Js(){return!1}function _t(e){function t(a,n,i,r,l){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(r):r[b]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ar:Js,this.isPropagationStopped=Js,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=_t(Qa),ei=E({},Qa,{view:0,detail:0}),Wd=_t(ei),El,Al,ti,ir=E({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(El=e.screenX-ti.screenX,Al=e.screenY-ti.screenY):Al=El=0,ti=e),El)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),ec=_t(ir),Kd=E({},ir,{dataTransfer:0}),Pd=_t(Kd),Fd=E({},ei,{relatedTarget:0}),Nl=_t(Fd),Jd=E({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),eh=_t(Jd),th=E({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ah=_t(th),nh=E({},Qa,{data:0}),tc=_t(nh),ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lh[e])?!!t[e]:!1}function Cl(){return oh}var sh=E({},ei,{key:function(e){if(e.key){var t=ih[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ch=_t(sh),uh=E({},ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=_t(uh),fh=E({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),dh=_t(fh),hh=E({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ph=_t(hh),mh=E({},ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vh=_t(mh),yh=E({},Qa,{newState:0,oldState:0}),gh=_t(yh),bh=[9,13,27,32],Ol=na&&"CompositionEvent"in window,ai=null;na&&"documentMode"in document&&(ai=document.documentMode);var wh=na&&"TextEvent"in window&&!ai,nc=na&&(!Ol||ai&&8<ai&&11>=ai),ic=" ",rc=!1;function lc(e,t){switch(e){case"keyup":return bh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function xh(e,t){switch(e){case"compositionend":return oc(t);case"keypress":return t.which!==32?null:(rc=!0,ic);case"textInput":return e=t.data,e===ic&&rc?null:e;default:return null}}function _h(e,t){if(xn)return e==="compositionend"||!Ol&&lc(e,t)?(e=Fs(),er=Tl=wa=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nc&&t.locale!=="ko"?null:t.data;default:return null}}var Sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sh[e.type]:t==="textarea"}function cc(e,t,a,n){bn?wn?wn.push(n):wn=[n]:bn=n,t=Zr(t,"onChange"),0<t.length&&(a=new nr("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var ni=null,ii=null;function Th(e){Zf(e,0)}function rr(e){var t=Pn(e);if(Zs(t))return e}function uc(e,t){if(e==="change")return t}var fc=!1;if(na){var kl;if(na){var Rl="oninput"in document;if(!Rl){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),Rl=typeof dc.oninput=="function"}kl=Rl}else kl=!1;fc=kl&&(!document.documentMode||9<document.documentMode)}function hc(){ni&&(ni.detachEvent("onpropertychange",pc),ii=ni=null)}function pc(e){if(e.propertyName==="value"&&rr(ii)){var t=[];cc(t,ii,e,xl(e)),Ps(Th,t)}}function Eh(e,t,a){e==="focusin"?(hc(),ni=t,ii=a,ni.attachEvent("onpropertychange",pc)):e==="focusout"&&hc()}function Ah(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rr(ii)}function Nh(e,t){if(e==="click")return rr(t)}function Ch(e,t){if(e==="input"||e==="change")return rr(t)}function Oh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Oh;function ri(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!mt.call(t,i)||!At(e[i],t[i]))return!1}return!0}function mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vc(e,t){var a=mc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mc(a)}}function yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Fi(e.document)}return t}function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kh=na&&"documentMode"in document&&11>=document.documentMode,_n=null,Dl=null,li=null,zl=!1;function bc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zl||_n==null||_n!==Fi(n)||(n=_n,"selectionStart"in n&&jl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),li&&ri(li,n)||(li=n,n=Zr(Dl,"onSelect"),0<n.length&&(t=new nr("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=_n)))}function Va(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Sn={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},Ul={},wc={};na&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function $a(e){if(Ul[e])return Ul[e];if(!Sn[e])return e;var t=Sn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in wc)return Ul[e]=t[a];return e}var xc=$a("animationend"),_c=$a("animationiteration"),Sc=$a("animationstart"),Rh=$a("transitionrun"),jh=$a("transitionstart"),Dh=$a("transitioncancel"),Tc=$a("transitionend"),Ec=new Map,Ml="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ml.push("scrollEnd");function Qt(e,t){Ec.set(e,t),Xa(t,[e])}var Ac=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var a=Ac.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Gs(t)},Ac.set(e,t),t)}return{value:e,source:t,stack:Gs(t)}}var Bt=[],Tn=0,Yl=0;function lr(){for(var e=Tn,t=Yl=Tn=0;t<e;){var a=Bt[t];Bt[t++]=null;var n=Bt[t];Bt[t++]=null;var i=Bt[t];Bt[t++]=null;var r=Bt[t];if(Bt[t++]=null,n!==null&&i!==null){var l=n.pending;l===null?i.next=i:(i.next=l.next,l.next=i),n.pending=i}r!==0&&Nc(a,i,r)}}function or(e,t,a,n){Bt[Tn++]=e,Bt[Tn++]=t,Bt[Tn++]=a,Bt[Tn++]=n,Yl|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Bl(e,t,a,n){return or(e,t,a,n),sr(e)}function En(e,t){return or(e,null,null,t),sr(e)}function Nc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-Qe(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function sr(e){if(50<Ri)throw Ri=0,Xo=null,Error(x(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var An={};function zh(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,a,n){return new zh(e,t,a,n)}function Hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,t){var a=e.alternate;return a===null?(a=Nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cr(e,t,a,n,i,r){var l=0;if(n=e,typeof e=="function")Hl(e)&&(l=1);else if(typeof e=="string")l=Mp(e,a,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case G:return e=Nt(31,a,t,i),e.elementType=G,e.lanes=r,e;case h:return Wa(a.children,i,r,t);case u:l=8,i|=24;break;case T:return e=Nt(12,a,t,i|2),e.elementType=T,e.lanes=r,e;case H:return e=Nt(13,a,t,i),e.elementType=H,e.lanes=r,e;case ne:return e=Nt(19,a,t,i),e.elementType=ne,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case M:l=10;break e;case C:l=9;break e;case q:l=11;break e;case J:l=14;break e;case de:l=16,n=null;break e}l=29,a=Error(x(130,e===null?"null":typeof e,"")),n=null}return t=Nt(l,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function Wa(e,t,a,n){return e=Nt(7,e,n,t),e.lanes=a,e}function Ll(e,t,a){return e=Nt(6,e,null,t),e.lanes=a,e}function ql(e,t,a){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nn=[],Cn=0,ur=null,fr=0,Ht=[],Lt=0,Ka=null,ra=1,la="";function Pa(e,t){Nn[Cn++]=fr,Nn[Cn++]=ur,ur=e,fr=t}function Oc(e,t,a){Ht[Lt++]=ra,Ht[Lt++]=la,Ht[Lt++]=Ka,Ka=e;var n=ra;e=la;var i=32-Qe(n)-1;n&=~(1<<i),a+=1;var r=32-Qe(t)+i;if(30<r){var l=i-i%5;r=(n&(1<<l)-1).toString(32),n>>=l,i-=l,ra=1<<32-Qe(t)+i|a<<i|n,la=r+e}else ra=1<<r|a<<i|n,la=e}function Gl(e){e.return!==null&&(Pa(e,1),Oc(e,1,0))}function Il(e){for(;e===ur;)ur=Nn[--Cn],Nn[Cn]=null,fr=Nn[--Cn],Nn[Cn]=null;for(;e===Ka;)Ka=Ht[--Lt],Ht[Lt]=null,la=Ht[--Lt],Ht[Lt]=null,ra=Ht[--Lt],Ht[Lt]=null}var bt=null,Je=null,Be=!1,Fa=null,Wt=!1,Zl=Error(x(519));function Ja(e){var t=Error(x(418,""));throw ci(Yt(t,e)),Zl}function kc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[vt]=e,t[xt]=n,a){case"dialog":ze("cancel",t),ze("close",t);break;case"iframe":case"object":case"embed":ze("load",t);break;case"video":case"audio":for(a=0;a<Di.length;a++)ze(Di[a],t);break;case"source":ze("error",t);break;case"img":case"image":case"link":ze("error",t),ze("load",t);break;case"details":ze("toggle",t);break;case"input":ze("invalid",t),Xs(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Pi(t);break;case"select":ze("invalid",t);break;case"textarea":ze("invalid",t),Vs(t,n.value,n.defaultValue,n.children),Pi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||$f(t.textContent,a)?(n.popover!=null&&(ze("beforetoggle",t),ze("toggle",t)),n.onScroll!=null&&ze("scroll",t),n.onScrollEnd!=null&&ze("scrollend",t),n.onClick!=null&&(t.onclick=Xr),t=!0):t=!1,t||Ja(e)}function Rc(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:bt=bt.return}}function oi(e){if(e!==bt)return!1;if(!Be)return Rc(e),Be=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||os(e.type,e.memoizedProps)),a=!a),a&&Je&&Ja(e),Rc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Je=$t(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Je=null}}else t===27?(t=Je,Ma(e.type)?(e=fs,fs=null,Je=e):Je=t):Je=bt?$t(e.stateNode.nextSibling):null;return!0}function si(){Je=bt=null,Be=!1}function jc(){var e=Fa;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),Fa=null),e}function ci(e){Fa===null?Fa=[e]:Fa.push(e)}var Xl=j(null),en=null,oa=null;function xa(e,t,a){te(Xl,t._currentValue),t._currentValue=a}function sa(e){e._currentValue=Xl.current,Y(Xl)}function Ql(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Vl(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var l=i.child;r=r.firstContext;e:for(;r!==null;){var b=r;r=i;for(var U=0;U<t.length;U++)if(b.context===t[U]){r.lanes|=a,b=r.alternate,b!==null&&(b.lanes|=a),Ql(r.return,a,e),n||(l=null);break e}r=b.next}}else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=a,r=l.alternate,r!==null&&(r.lanes|=a),Ql(l,a,e),l=null}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}}function ui(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var l=i.alternate;if(l===null)throw Error(x(387));if(l=l.memoizedProps,l!==null){var b=i.type;At(i.pendingProps.value,l.value)||(e!==null?e.push(b):e=[b])}}else if(i===Me.current){if(l=i.alternate,l===null)throw Error(x(387));l.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Hi):e=[Hi])}i=i.return}e!==null&&Vl(t,e,a,n),t.flags|=262144}function dr(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tn(e){en=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yt(e){return Dc(en,e)}function hr(e,t){return en===null&&tn(e),Dc(e,t)}function Dc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(x(308));oa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else oa=oa.next=t;return a}var Uh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Mh=y.unstable_scheduleCallback,Yh=y.unstable_NormalPriority,lt={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $l(){return{controller:new Uh,data:new Map,refCount:0}}function fi(e){e.refCount--,e.refCount===0&&Mh(Yh,function(){e.controller.abort()})}var di=null,Wl=0,On=0,kn=null;function Bh(e,t){if(di===null){var a=di=[];Wl=0,On=Fo(),kn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Wl++,t.then(zc,zc),t}function zc(){if(--Wl===0&&di!==null){kn!==null&&(kn.status="fulfilled");var e=di;di=null,On=0,kn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Hh(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Uc=X.S;X.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bh(e,t),Uc!==null&&Uc(e,t)};var an=j(null);function Kl(){var e=an.current;return e!==null?e:$e.pooledCache}function pr(e,t){t===null?te(an,an.current):te(an,t.pool)}function Mc(){var e=Kl();return e===null?null:{parent:lt._currentValue,pool:e}}var hi=Error(x(460)),Yc=Error(x(474)),mr=Error(x(542)),Pl={then:function(){}};function Bc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vr(){}function Hc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(vr,vr),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qc(e),e;default:if(typeof t.status=="string")t.then(vr,vr);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(x(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qc(e),e}throw pi=t,hi}}var pi=null;function Lc(){if(pi===null)throw Error(x(459));var e=pi;return pi=null,e}function qc(e){if(e===hi||e===mr)throw Error(x(483))}var _a=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(He&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=sr(e),Nc(e,null,a),t}return or(e,n,t,a),sr(e)}function mi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,zs(e,a)}}function eo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var l={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=l:r=r.next=l,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var to=!1;function vi(){if(to){var e=kn;if(e!==null)throw e}}function yi(e,t,a,n){to=!1;var i=e.updateQueue;_a=!1;var r=i.firstBaseUpdate,l=i.lastBaseUpdate,b=i.shared.pending;if(b!==null){i.shared.pending=null;var U=b,V=U.next;U.next=null,l===null?r=V:l.next=V,l=U;var le=e.alternate;le!==null&&(le=le.updateQueue,b=le.lastBaseUpdate,b!==l&&(b===null?le.firstBaseUpdate=V:b.next=V,le.lastBaseUpdate=U))}if(r!==null){var fe=i.baseState;l=0,le=V=U=null,b=r;do{var K=b.lane&-536870913,P=K!==b.lane;if(P?(Ue&K)===K:(n&K)===K){K!==0&&K===On&&(to=!0),le!==null&&(le=le.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Ae=e,Te=b;K=t;var Ze=a;switch(Te.tag){case 1:if(Ae=Te.payload,typeof Ae=="function"){fe=Ae.call(Ze,fe,K);break e}fe=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Te.payload,K=typeof Ae=="function"?Ae.call(Ze,fe,K):Ae,K==null)break e;fe=E({},fe,K);break e;case 2:_a=!0}}K=b.callback,K!==null&&(e.flags|=64,P&&(e.flags|=8192),P=i.callbacks,P===null?i.callbacks=[K]:P.push(K))}else P={lane:K,tag:b.tag,payload:b.payload,callback:b.callback,next:null},le===null?(V=le=P,U=fe):le=le.next=P,l|=K;if(b=b.next,b===null){if(b=i.shared.pending,b===null)break;P=b,b=P.next,P.next=null,i.lastBaseUpdate=P,i.shared.pending=null}}while(!0);le===null&&(U=fe),i.baseState=U,i.firstBaseUpdate=V,i.lastBaseUpdate=le,r===null&&(i.shared.lanes=0),ja|=l,e.lanes=l,e.memoizedState=fe}}function Gc(e,t){if(typeof e!="function")throw Error(x(191,e));e.call(t)}function Ic(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gc(a[e],t)}var Rn=j(null),yr=j(0);function Zc(e,t){e=ma,te(yr,e),te(Rn,t),ma=e|t.baseLanes}function ao(){te(yr,ma),te(Rn,Rn.current)}function no(){ma=yr.current,Y(Rn),Y(yr)}var Ea=0,Re=null,Ge=null,it=null,gr=!1,jn=!1,nn=!1,br=0,gi=0,Dn=null,Lh=0;function tt(){throw Error(x(321))}function io(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!At(e[a],t[a]))return!1;return!0}function ro(e,t,a,n,i,r){return Ea=r,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,X.H=e===null||e.memoizedState===null?Nu:Cu,nn=!1,r=a(n,i),nn=!1,jn&&(r=Qc(t,a,n,i)),Xc(e),r}function Xc(e){X.H=Er;var t=Ge!==null&&Ge.next!==null;if(Ea=0,it=Ge=Re=null,gr=!1,gi=0,Dn=null,t)throw Error(x(300));e===null||ct||(e=e.dependencies,e!==null&&dr(e)&&(ct=!0))}function Qc(e,t,a,n){Re=e;var i=0;do{if(jn&&(Dn=null),gi=0,jn=!1,25<=i)throw Error(x(301));if(i+=1,it=Ge=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}X.H=Vh,r=t(a,n)}while(jn);return r}function qh(){var e=X.H,t=e.useState()[0];return t=typeof t.then=="function"?bi(t):t,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(Re.flags|=1024),t}function lo(){var e=br!==0;return br=0,e}function oo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function so(e){if(gr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gr=!1}Ea=0,it=Ge=Re=null,jn=!1,gi=br=0,Dn=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Re.memoizedState=it=e:it=it.next=e,it}function rt(){if(Ge===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=it===null?Re.memoizedState:it.next;if(t!==null)it=t,Ge=e;else{if(e===null)throw Re.alternate===null?Error(x(467)):Error(x(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},it===null?Re.memoizedState=it=e:it=it.next=e}return it}function co(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bi(e){var t=gi;return gi+=1,Dn===null&&(Dn=[]),e=Hc(Dn,e,t),t=Re,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,X.H=t===null||t.memoizedState===null?Nu:Cu),e}function wr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bi(e);if(e.$$typeof===M)return yt(e)}throw Error(x(438,String(e)))}function uo(e){var t=null,a=Re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=Re.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=co(),Re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=re;return t.index++,a}function ca(e,t){return typeof t=="function"?t(e):t}function xr(e){var t=rt();return fo(t,Ge,e)}function fo(e,t,a){var n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var l=i.next;i.next=r.next,r.next=l}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var b=l=null,U=null,V=t,le=!1;do{var fe=V.lane&-536870913;if(fe!==V.lane?(Ue&fe)===fe:(Ea&fe)===fe){var K=V.revertLane;if(K===0)U!==null&&(U=U.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),fe===On&&(le=!0);else if((Ea&K)===K){V=V.next,K===On&&(le=!0);continue}else fe={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},U===null?(b=U=fe,l=r):U=U.next=fe,Re.lanes|=K,ja|=K;fe=V.action,nn&&a(r,fe),r=V.hasEagerState?V.eagerState:a(r,fe)}else K={lane:fe,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},U===null?(b=U=K,l=r):U=U.next=K,Re.lanes|=fe,ja|=fe;V=V.next}while(V!==null&&V!==t);if(U===null?l=r:U.next=b,!At(r,e.memoizedState)&&(ct=!0,le&&(a=kn,a!==null)))throw a;e.memoizedState=r,e.baseState=l,e.baseQueue=U,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ho(e){var t=rt(),a=t.queue;if(a===null)throw Error(x(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var l=i=i.next;do r=e(r,l.action),l=l.next;while(l!==i);At(r,t.memoizedState)||(ct=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function Vc(e,t,a){var n=Re,i=rt(),r=Be;if(r){if(a===void 0)throw Error(x(407));a=a()}else a=t();var l=!At((Ge||i).memoizedState,a);l&&(i.memoizedState=a,ct=!0),i=i.queue;var b=Kc.bind(null,n,i,e);if(wi(2048,8,b,[e]),i.getSnapshot!==t||l||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,zn(9,_r(),Wc.bind(null,n,i,a,t),null),$e===null)throw Error(x(349));r||(Ea&124)!==0||$c(n,t,a)}return a}function $c(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Re.updateQueue,t===null?(t=co(),Re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Wc(e,t,a,n){t.value=a,t.getSnapshot=n,Pc(t)&&Fc(e)}function Kc(e,t,a){return a(function(){Pc(t)&&Fc(e)})}function Pc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!At(e,a)}catch{return!0}}function Fc(e){var t=En(e,2);t!==null&&jt(t,e,2)}function po(e){var t=St();if(typeof e=="function"){var a=e;if(e=a(),nn){Ne(!0);try{a()}finally{Ne(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function Jc(e,t,a,n){return e.baseState=a,fo(e,Ge,typeof n=="function"?n:ca)}function Gh(e,t,a,n,i){if(Tr(e))throw Error(x(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};X.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,eu(t,r)):(r.next=a.next,t.pending=a.next=r)}}function eu(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=X.T,l={};X.T=l;try{var b=a(i,n),U=X.S;U!==null&&U(l,b),tu(e,t,b)}catch(V){mo(e,t,V)}finally{X.T=r}}else try{r=a(i,n),tu(e,t,r)}catch(V){mo(e,t,V)}}function tu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){au(e,t,n)},function(n){return mo(e,t,n)}):au(e,t,a)}function au(e,t,a){t.status="fulfilled",t.value=a,nu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,eu(e,a)))}function mo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,nu(t),t=t.next;while(t!==n)}e.action=null}function nu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function iu(e,t){return t}function ru(e,t){if(Be){var a=$e.formState;if(a!==null){e:{var n=Re;if(Be){if(Je){t:{for(var i=Je,r=Wt;i.nodeType!==8;){if(!r){i=null;break t}if(i=$t(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Je=$t(i.nextSibling),n=i.data==="F!";break e}}Ja(n)}n=!1}n&&(t=a[0])}}return a=St(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:iu,lastRenderedState:t},a.queue=n,a=Tu.bind(null,Re,n),n.dispatch=a,n=po(!1),r=wo.bind(null,Re,!1,n.queue),n=St(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Gh.bind(null,Re,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function lu(e){var t=rt();return ou(t,Ge,e)}function ou(e,t,a){if(t=fo(e,t,iu)[0],e=xr(ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=bi(t)}catch(l){throw l===hi?mr:l}else n=t;t=rt();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(Re.flags|=2048,zn(9,_r(),Ih.bind(null,i,a),null)),[n,r,e]}function Ih(e,t){e.action=t}function su(e){var t=rt(),a=Ge;if(a!==null)return ou(t,a,e);rt(),t=t.memoizedState,a=rt();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function zn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=Re.updateQueue,t===null&&(t=co(),Re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function _r(){return{destroy:void 0,resource:void 0}}function cu(){return rt().memoizedState}function Sr(e,t,a,n){var i=St();n=n===void 0?null:n,Re.flags|=e,i.memoizedState=zn(1|t,_r(),a,n)}function wi(e,t,a,n){var i=rt();n=n===void 0?null:n;var r=i.memoizedState.inst;Ge!==null&&n!==null&&io(n,Ge.memoizedState.deps)?i.memoizedState=zn(t,r,a,n):(Re.flags|=e,i.memoizedState=zn(1|t,r,a,n))}function uu(e,t){Sr(8390656,8,e,t)}function fu(e,t){wi(2048,8,e,t)}function du(e,t){return wi(4,2,e,t)}function hu(e,t){return wi(4,4,e,t)}function pu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mu(e,t,a){a=a!=null?a.concat([e]):null,wi(4,4,pu.bind(null,t,e),a)}function vo(){}function vu(e,t){var a=rt();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&io(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function yu(e,t){var a=rt();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&io(t,n[1]))return n[0];if(n=e(),nn){Ne(!0);try{e()}finally{Ne(!1)}}return a.memoizedState=[n,t],n}function yo(e,t,a){return a===void 0||(Ea&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=xf(),Re.lanes|=e,ja|=e,a)}function gu(e,t,a,n){return At(a,t)?a:Rn.current!==null?(e=yo(e,a,n),At(e,t)||(ct=!0),e):(Ea&42)===0?(ct=!0,e.memoizedState=a):(e=xf(),Re.lanes|=e,ja|=e,t)}function bu(e,t,a,n,i){var r=B.p;B.p=r!==0&&8>r?r:8;var l=X.T,b={};X.T=b,wo(e,!1,t,a);try{var U=i(),V=X.S;if(V!==null&&V(b,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var le=Hh(U,n);xi(e,t,le,Rt(e))}else xi(e,t,n,Rt(e))}catch(fe){xi(e,t,{then:function(){},status:"rejected",reason:fe},Rt())}finally{B.p=r,X.T=l}}function Zh(){}function go(e,t,a,n){if(e.tag!==5)throw Error(x(476));var i=wu(e).queue;bu(e,i,t,se,a===null?Zh:function(){return xu(e),a(n)})}function wu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:se},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xu(e){var t=wu(e).next.queue;xi(e,t,{},Rt())}function bo(){return yt(Hi)}function _u(){return rt().memoizedState}function Su(){return rt().memoizedState}function Xh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Rt();e=Sa(a);var n=Ta(t,e,a);n!==null&&(jt(n,t,a),mi(n,t,a)),t={cache:$l()},e.payload=t;return}t=t.return}}function Qh(e,t,a){var n=Rt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Tr(e)?Eu(t,a):(a=Bl(e,t,a,n),a!==null&&(jt(a,e,n),Au(a,t,n)))}function Tu(e,t,a){var n=Rt();xi(e,t,a,n)}function xi(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tr(e))Eu(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,b=r(l,a);if(i.hasEagerState=!0,i.eagerState=b,At(b,l))return or(e,t,i,0),$e===null&&lr(),!1}catch{}finally{}if(a=Bl(e,t,i,n),a!==null)return jt(a,e,n),Au(a,t,n),!0}return!1}function wo(e,t,a,n){if(n={lane:2,revertLane:Fo(),action:n,hasEagerState:!1,eagerState:null,next:null},Tr(e)){if(t)throw Error(x(479))}else t=Bl(e,a,n,2),t!==null&&jt(t,e,2)}function Tr(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Eu(e,t){jn=gr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Au(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,zs(e,a)}}var Er={readContext:yt,use:wr,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt},Nu={readContext:yt,use:wr,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:uu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Sr(4194308,4,pu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Sr(4194308,4,e,t)},useInsertionEffect:function(e,t){Sr(4,2,e,t)},useMemo:function(e,t){var a=St();t=t===void 0?null:t;var n=e();if(nn){Ne(!0);try{e()}finally{Ne(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=St();if(a!==void 0){var i=a(t);if(nn){Ne(!0);try{a(t)}finally{Ne(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Qh.bind(null,Re,e),[n.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=po(e);var t=e.queue,a=Tu.bind(null,Re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:vo,useDeferredValue:function(e,t){var a=St();return yo(a,e,t)},useTransition:function(){var e=po(!1);return e=bu.bind(null,Re,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=Re,i=St();if(Be){if(a===void 0)throw Error(x(407));a=a()}else{if(a=t(),$e===null)throw Error(x(349));(Ue&124)!==0||$c(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,uu(Kc.bind(null,n,r,e),[e]),n.flags|=2048,zn(9,_r(),Wc.bind(null,n,r,a,t),null),a},useId:function(){var e=St(),t=$e.identifierPrefix;if(Be){var a=la,n=ra;a=(n&~(1<<32-Qe(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=br++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Lh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:bo,useFormState:ru,useActionState:ru,useOptimistic:function(e){var t=St();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=wo.bind(null,Re,!0,a),a.dispatch=t,[e,t]},useMemoCache:uo,useCacheRefresh:function(){return St().memoizedState=Xh.bind(null,Re)}},Cu={readContext:yt,use:wr,useCallback:vu,useContext:yt,useEffect:fu,useImperativeHandle:mu,useInsertionEffect:du,useLayoutEffect:hu,useMemo:yu,useReducer:xr,useRef:cu,useState:function(){return xr(ca)},useDebugValue:vo,useDeferredValue:function(e,t){var a=rt();return gu(a,Ge.memoizedState,e,t)},useTransition:function(){var e=xr(ca)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:Vc,useId:_u,useHostTransitionStatus:bo,useFormState:lu,useActionState:lu,useOptimistic:function(e,t){var a=rt();return Jc(a,Ge,e,t)},useMemoCache:uo,useCacheRefresh:Su},Vh={readContext:yt,use:wr,useCallback:vu,useContext:yt,useEffect:fu,useImperativeHandle:mu,useInsertionEffect:du,useLayoutEffect:hu,useMemo:yu,useReducer:ho,useRef:cu,useState:function(){return ho(ca)},useDebugValue:vo,useDeferredValue:function(e,t){var a=rt();return Ge===null?yo(a,e,t):gu(a,Ge.memoizedState,e,t)},useTransition:function(){var e=ho(ca)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:Vc,useId:_u,useHostTransitionStatus:bo,useFormState:su,useActionState:su,useOptimistic:function(e,t){var a=rt();return Ge!==null?Jc(a,Ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uo,useCacheRefresh:Su},Un=null,_i=0;function Ar(e){var t=_i;return _i+=1,Un===null&&(Un=[]),Hc(Un,e,t)}function Si(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Nr(e,t){throw t.$$typeof===k?Error(x(525)):(e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ou(e){var t=e._init;return t(e._payload)}function ku(e){function t(Z,L){if(e){var Q=Z.deletions;Q===null?(Z.deletions=[L],Z.flags|=16):Q.push(L)}}function a(Z,L){if(!e)return null;for(;L!==null;)t(Z,L),L=L.sibling;return null}function n(Z){for(var L=new Map;Z!==null;)Z.key!==null?L.set(Z.key,Z):L.set(Z.index,Z),Z=Z.sibling;return L}function i(Z,L){return Z=ia(Z,L),Z.index=0,Z.sibling=null,Z}function r(Z,L,Q){return Z.index=Q,e?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<L?(Z.flags|=67108866,L):Q):(Z.flags|=67108866,L)):(Z.flags|=1048576,L)}function l(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,L,Q,ue){return L===null||L.tag!==6?(L=Ll(Q,Z.mode,ue),L.return=Z,L):(L=i(L,Q),L.return=Z,L)}function U(Z,L,Q,ue){var we=Q.type;return we===h?le(Z,L,Q.props.children,ue,Q.key):L!==null&&(L.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===de&&Ou(we)===L.type)?(L=i(L,Q.props),Si(L,Q),L.return=Z,L):(L=cr(Q.type,Q.key,Q.props,null,Z.mode,ue),Si(L,Q),L.return=Z,L)}function V(Z,L,Q,ue){return L===null||L.tag!==4||L.stateNode.containerInfo!==Q.containerInfo||L.stateNode.implementation!==Q.implementation?(L=ql(Q,Z.mode,ue),L.return=Z,L):(L=i(L,Q.children||[]),L.return=Z,L)}function le(Z,L,Q,ue,we){return L===null||L.tag!==7?(L=Wa(Q,Z.mode,ue,we),L.return=Z,L):(L=i(L,Q),L.return=Z,L)}function fe(Z,L,Q){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Ll(""+L,Z.mode,Q),L.return=Z,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case S:return Q=cr(L.type,L.key,L.props,null,Z.mode,Q),Si(Q,L),Q.return=Z,Q;case g:return L=ql(L,Z.mode,Q),L.return=Z,L;case de:var ue=L._init;return L=ue(L._payload),fe(Z,L,Q)}if(ee(L)||R(L))return L=Wa(L,Z.mode,Q,null),L.return=Z,L;if(typeof L.then=="function")return fe(Z,Ar(L),Q);if(L.$$typeof===M)return fe(Z,hr(Z,L),Q);Nr(Z,L)}return null}function K(Z,L,Q,ue){var we=L!==null?L.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return we!==null?null:b(Z,L,""+Q,ue);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===we?U(Z,L,Q,ue):null;case g:return Q.key===we?V(Z,L,Q,ue):null;case de:return we=Q._init,Q=we(Q._payload),K(Z,L,Q,ue)}if(ee(Q)||R(Q))return we!==null?null:le(Z,L,Q,ue,null);if(typeof Q.then=="function")return K(Z,L,Ar(Q),ue);if(Q.$$typeof===M)return K(Z,L,hr(Z,Q),ue);Nr(Z,Q)}return null}function P(Z,L,Q,ue,we){if(typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint")return Z=Z.get(Q)||null,b(L,Z,""+ue,we);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case S:return Z=Z.get(ue.key===null?Q:ue.key)||null,U(L,Z,ue,we);case g:return Z=Z.get(ue.key===null?Q:ue.key)||null,V(L,Z,ue,we);case de:var je=ue._init;return ue=je(ue._payload),P(Z,L,Q,ue,we)}if(ee(ue)||R(ue))return Z=Z.get(Q)||null,le(L,Z,ue,we,null);if(typeof ue.then=="function")return P(Z,L,Q,Ar(ue),we);if(ue.$$typeof===M)return P(Z,L,Q,hr(L,ue),we);Nr(L,ue)}return null}function Ae(Z,L,Q,ue){for(var we=null,je=null,Se=L,Ee=L=0,ft=null;Se!==null&&Ee<Q.length;Ee++){Se.index>Ee?(ft=Se,Se=null):ft=Se.sibling;var Ye=K(Z,Se,Q[Ee],ue);if(Ye===null){Se===null&&(Se=ft);break}e&&Se&&Ye.alternate===null&&t(Z,Se),L=r(Ye,L,Ee),je===null?we=Ye:je.sibling=Ye,je=Ye,Se=ft}if(Ee===Q.length)return a(Z,Se),Be&&Pa(Z,Ee),we;if(Se===null){for(;Ee<Q.length;Ee++)Se=fe(Z,Q[Ee],ue),Se!==null&&(L=r(Se,L,Ee),je===null?we=Se:je.sibling=Se,je=Se);return Be&&Pa(Z,Ee),we}for(Se=n(Se);Ee<Q.length;Ee++)ft=P(Se,Z,Ee,Q[Ee],ue),ft!==null&&(e&&ft.alternate!==null&&Se.delete(ft.key===null?Ee:ft.key),L=r(ft,L,Ee),je===null?we=ft:je.sibling=ft,je=ft);return e&&Se.forEach(function(qa){return t(Z,qa)}),Be&&Pa(Z,Ee),we}function Te(Z,L,Q,ue){if(Q==null)throw Error(x(151));for(var we=null,je=null,Se=L,Ee=L=0,ft=null,Ye=Q.next();Se!==null&&!Ye.done;Ee++,Ye=Q.next()){Se.index>Ee?(ft=Se,Se=null):ft=Se.sibling;var qa=K(Z,Se,Ye.value,ue);if(qa===null){Se===null&&(Se=ft);break}e&&Se&&qa.alternate===null&&t(Z,Se),L=r(qa,L,Ee),je===null?we=qa:je.sibling=qa,je=qa,Se=ft}if(Ye.done)return a(Z,Se),Be&&Pa(Z,Ee),we;if(Se===null){for(;!Ye.done;Ee++,Ye=Q.next())Ye=fe(Z,Ye.value,ue),Ye!==null&&(L=r(Ye,L,Ee),je===null?we=Ye:je.sibling=Ye,je=Ye);return Be&&Pa(Z,Ee),we}for(Se=n(Se);!Ye.done;Ee++,Ye=Q.next())Ye=P(Se,Z,Ee,Ye.value,ue),Ye!==null&&(e&&Ye.alternate!==null&&Se.delete(Ye.key===null?Ee:Ye.key),L=r(Ye,L,Ee),je===null?we=Ye:je.sibling=Ye,je=Ye);return e&&Se.forEach(function($p){return t(Z,$p)}),Be&&Pa(Z,Ee),we}function Ze(Z,L,Q,ue){if(typeof Q=="object"&&Q!==null&&Q.type===h&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:e:{for(var we=Q.key;L!==null;){if(L.key===we){if(we=Q.type,we===h){if(L.tag===7){a(Z,L.sibling),ue=i(L,Q.props.children),ue.return=Z,Z=ue;break e}}else if(L.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===de&&Ou(we)===L.type){a(Z,L.sibling),ue=i(L,Q.props),Si(ue,Q),ue.return=Z,Z=ue;break e}a(Z,L);break}else t(Z,L);L=L.sibling}Q.type===h?(ue=Wa(Q.props.children,Z.mode,ue,Q.key),ue.return=Z,Z=ue):(ue=cr(Q.type,Q.key,Q.props,null,Z.mode,ue),Si(ue,Q),ue.return=Z,Z=ue)}return l(Z);case g:e:{for(we=Q.key;L!==null;){if(L.key===we)if(L.tag===4&&L.stateNode.containerInfo===Q.containerInfo&&L.stateNode.implementation===Q.implementation){a(Z,L.sibling),ue=i(L,Q.children||[]),ue.return=Z,Z=ue;break e}else{a(Z,L);break}else t(Z,L);L=L.sibling}ue=ql(Q,Z.mode,ue),ue.return=Z,Z=ue}return l(Z);case de:return we=Q._init,Q=we(Q._payload),Ze(Z,L,Q,ue)}if(ee(Q))return Ae(Z,L,Q,ue);if(R(Q)){if(we=R(Q),typeof we!="function")throw Error(x(150));return Q=we.call(Q),Te(Z,L,Q,ue)}if(typeof Q.then=="function")return Ze(Z,L,Ar(Q),ue);if(Q.$$typeof===M)return Ze(Z,L,hr(Z,Q),ue);Nr(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,L!==null&&L.tag===6?(a(Z,L.sibling),ue=i(L,Q),ue.return=Z,Z=ue):(a(Z,L),ue=Ll(Q,Z.mode,ue),ue.return=Z,Z=ue),l(Z)):a(Z,L)}return function(Z,L,Q,ue){try{_i=0;var we=Ze(Z,L,Q,ue);return Un=null,we}catch(Se){if(Se===hi||Se===mr)throw Se;var je=Nt(29,Se,null,Z.mode);return je.lanes=ue,je.return=Z,je}finally{}}}var Mn=ku(!0),Ru=ku(!1),qt=j(null),Kt=null;function Aa(e){var t=e.alternate;te(ot,ot.current&1),te(qt,e),Kt===null&&(t===null||Rn.current!==null||t.memoizedState!==null)&&(Kt=e)}function ju(e){if(e.tag===22){if(te(ot,ot.current),te(qt,e),Kt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Kt=e)}}else Na()}function Na(){te(ot,ot.current),te(qt,qt.current)}function ua(e){Y(qt),Kt===e&&(Kt=null),Y(ot)}var ot=j(0);function Cr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||us(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function xo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var _o={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Rt(),i=Sa(n);i.payload=t,a!=null&&(i.callback=a),t=Ta(e,i,n),t!==null&&(jt(t,e,n),mi(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Rt(),i=Sa(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Ta(e,i,n),t!==null&&(jt(t,e,n),mi(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Rt(),n=Sa(a);n.tag=2,t!=null&&(n.callback=t),t=Ta(e,n,a),t!==null&&(jt(t,e,a),mi(t,e,a))}};function Du(e,t,a,n,i,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,l):t.prototype&&t.prototype.isPureReactComponent?!ri(a,n)||!ri(i,r):!0}function zu(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function rn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var Or=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Uu(e){Or(e)}function Mu(e){console.error(e)}function Yu(e){Or(e)}function kr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Bu(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function So(e,t,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){kr(e,t)},a}function Hu(e){return e=Sa(e),e.tag=3,e}function Lu(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Bu(t,a,n)}}var l=a.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){Bu(t,a,n),typeof i!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var b=n.stack;this.componentDidCatch(n.value,{componentStack:b!==null?b:""})})}function $h(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ui(t,a,i,!0),a=qt.current,a!==null){switch(a.tag){case 13:return Kt===null?Vo():a.alternate===null&&et===0&&(et=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Pl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Wo(e,n,i)),!1;case 22:return a.flags|=65536,n===Pl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Wo(e,n,i)),!1}throw Error(x(435,a.tag))}return Wo(e,n,i),Vo(),!1}if(Be)return t=qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Zl&&(e=Error(x(422),{cause:n}),ci(Yt(e,a)))):(n!==Zl&&(t=Error(x(423),{cause:n}),ci(Yt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Yt(n,a),i=So(e.stateNode,n,i),eo(e,i),et!==4&&(et=2)),!1;var r=Error(x(520),{cause:n});if(r=Yt(r,a),ki===null?ki=[r]:ki.push(r),et!==4&&(et=2),t===null)return!0;n=Yt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=So(a.stateNode,n,e),eo(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Da===null||!Da.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Hu(i),Lu(i,e,a,n),eo(a,i),!1}a=a.return}while(a!==null);return!1}var qu=Error(x(461)),ct=!1;function dt(e,t,a,n){t.child=e===null?Ru(t,null,a,n):Mn(t,e.child,a,n)}function Gu(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var l={};for(var b in n)b!=="ref"&&(l[b]=n[b])}else l=n;return tn(t),n=ro(e,t,a,l,r,i),b=lo(),e!==null&&!ct?(oo(e,t,i),fa(e,t,i)):(Be&&b&&Gl(t),t.flags|=1,dt(e,t,n,i),t.child)}function Iu(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!Hl(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Zu(e,t,r,n,i)):(e=cr(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ro(e,i)){var l=r.memoizedProps;if(a=a.compare,a=a!==null?a:ri,a(l,n)&&e.ref===t.ref)return fa(e,t,i)}return t.flags|=1,e=ia(r,n),e.ref=t.ref,e.return=t,t.child=e}function Zu(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(ri(r,n)&&e.ref===t.ref)if(ct=!1,t.pendingProps=n=r,Ro(e,i))(e.flags&131072)!==0&&(ct=!0);else return t.lanes=e.lanes,fa(e,t,i)}return To(e,t,a,n,i)}function Xu(e,t,a){var n=t.pendingProps,i=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return Qu(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pr(t,r!==null?r.cachePool:null),r!==null?Zc(t,r):ao(),ju(t);else return t.lanes=t.childLanes=536870912,Qu(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(pr(t,r.cachePool),Zc(t,r),Na(),t.memoizedState=null):(e!==null&&pr(t,null),ao(),Na());return dt(e,t,i,a),t.child}function Qu(e,t,a,n){var i=Kl();return i=i===null?null:{parent:lt._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&pr(t,null),ao(),ju(t),e!==null&&ui(e,t,n,!0),null}function Rr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(x(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function To(e,t,a,n,i){return tn(t),a=ro(e,t,a,n,void 0,i),n=lo(),e!==null&&!ct?(oo(e,t,i),fa(e,t,i)):(Be&&n&&Gl(t),t.flags|=1,dt(e,t,a,i),t.child)}function Vu(e,t,a,n,i,r){return tn(t),t.updateQueue=null,a=Qc(t,n,a,i),Xc(e),n=lo(),e!==null&&!ct?(oo(e,t,r),fa(e,t,r)):(Be&&n&&Gl(t),t.flags|=1,dt(e,t,a,r),t.child)}function $u(e,t,a,n,i){if(tn(t),t.stateNode===null){var r=An,l=a.contextType;typeof l=="object"&&l!==null&&(r=yt(l)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=_o,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},Fl(t),l=a.contextType,r.context=typeof l=="object"&&l!==null?yt(l):An,r.state=t.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(xo(t,a,l,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&_o.enqueueReplaceState(r,r.state,null),yi(t,n,r,i),vi(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var b=t.memoizedProps,U=rn(a,b);r.props=U;var V=r.context,le=a.contextType;l=An,typeof le=="object"&&le!==null&&(l=yt(le));var fe=a.getDerivedStateFromProps;le=typeof fe=="function"||typeof r.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,le||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(b||V!==l)&&zu(t,r,n,l),_a=!1;var K=t.memoizedState;r.state=K,yi(t,n,r,i),vi(),V=t.memoizedState,b||K!==V||_a?(typeof fe=="function"&&(xo(t,a,fe,n),V=t.memoizedState),(U=_a||Du(t,a,U,n,K,V,l))?(le||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=V),r.props=n,r.state=V,r.context=l,n=U):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Jl(e,t),l=t.memoizedProps,le=rn(a,l),r.props=le,fe=t.pendingProps,K=r.context,V=a.contextType,U=An,typeof V=="object"&&V!==null&&(U=yt(V)),b=a.getDerivedStateFromProps,(V=typeof b=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==fe||K!==U)&&zu(t,r,n,U),_a=!1,K=t.memoizedState,r.state=K,yi(t,n,r,i),vi();var P=t.memoizedState;l!==fe||K!==P||_a||e!==null&&e.dependencies!==null&&dr(e.dependencies)?(typeof b=="function"&&(xo(t,a,b,n),P=t.memoizedState),(le=_a||Du(t,a,le,n,K,P,U)||e!==null&&e.dependencies!==null&&dr(e.dependencies))?(V||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,P,U),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,P,U)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=P),r.props=n,r.state=P,r.context=U,n=le):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Rr(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=Mn(t,e.child,null,i),t.child=Mn(t,null,a,i)):dt(e,t,a,i),t.memoizedState=r.state,e=t.child):e=fa(e,t,i),e}function Wu(e,t,a,n){return si(),t.flags|=256,dt(e,t,a,n),t.child}var Eo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ao(e){return{baseLanes:e,cachePool:Mc()}}function No(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Gt),e}function Ku(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),l&&(i=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(Be){if(i?Aa(t):Na(),Be){var b=Je,U;if(U=b){e:{for(U=b,b=Wt;U.nodeType!==8;){if(!b){b=null;break e}if(U=$t(U.nextSibling),U===null){b=null;break e}}b=U}b!==null?(t.memoizedState={dehydrated:b,treeContext:Ka!==null?{id:ra,overflow:la}:null,retryLane:536870912,hydrationErrors:null},U=Nt(18,null,null,0),U.stateNode=b,U.return=t,t.child=U,bt=t,Je=null,U=!0):U=!1}U||Ja(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return us(b)?t.lanes=32:t.lanes=536870912,null;ua(t)}return b=n.children,n=n.fallback,i?(Na(),i=t.mode,b=jr({mode:"hidden",children:b},i),n=Wa(n,i,a,null),b.return=t,n.return=t,b.sibling=n,t.child=b,i=t.child,i.memoizedState=Ao(a),i.childLanes=No(e,l,a),t.memoizedState=Eo,n):(Aa(t),Co(t,b))}if(U=e.memoizedState,U!==null&&(b=U.dehydrated,b!==null)){if(r)t.flags&256?(Aa(t),t.flags&=-257,t=Oo(e,t,a)):t.memoizedState!==null?(Na(),t.child=e.child,t.flags|=128,t=null):(Na(),i=n.fallback,b=t.mode,n=jr({mode:"visible",children:n.children},b),i=Wa(i,b,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Mn(t,e.child,null,a),n=t.child,n.memoizedState=Ao(a),n.childLanes=No(e,l,a),t.memoizedState=Eo,t=i);else if(Aa(t),us(b)){if(l=b.nextSibling&&b.nextSibling.dataset,l)var V=l.dgst;l=V,n=Error(x(419)),n.stack="",n.digest=l,ci({value:n,source:null,stack:null}),t=Oo(e,t,a)}else if(ct||ui(e,t,a,!1),l=(a&e.childLanes)!==0,ct||l){if(l=$e,l!==null&&(n=a&-a,n=(n&42)!==0?1:ul(n),n=(n&(l.suspendedLanes|a))!==0?0:n,n!==0&&n!==U.retryLane))throw U.retryLane=n,En(e,n),jt(l,e,n),qu;b.data==="$?"||Vo(),t=Oo(e,t,a)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=U.treeContext,Je=$t(b.nextSibling),bt=t,Be=!0,Fa=null,Wt=!1,e!==null&&(Ht[Lt++]=ra,Ht[Lt++]=la,Ht[Lt++]=Ka,ra=e.id,la=e.overflow,Ka=t),t=Co(t,n.children),t.flags|=4096);return t}return i?(Na(),i=n.fallback,b=t.mode,U=e.child,V=U.sibling,n=ia(U,{mode:"hidden",children:n.children}),n.subtreeFlags=U.subtreeFlags&65011712,V!==null?i=ia(V,i):(i=Wa(i,b,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,b=e.child.memoizedState,b===null?b=Ao(a):(U=b.cachePool,U!==null?(V=lt._currentValue,U=U.parent!==V?{parent:V,pool:V}:U):U=Mc(),b={baseLanes:b.baseLanes|a,cachePool:U}),i.memoizedState=b,i.childLanes=No(e,l,a),t.memoizedState=Eo,n):(Aa(t),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=a,t.memoizedState=null,a)}function Co(e,t){return t=jr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function jr(e,t){return e=Nt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Oo(e,t,a){return Mn(t,e.child,null,a),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pu(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ql(e.return,t,a)}function ko(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function Fu(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(dt(e,t,n.children,a),n=ot.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,a,t);else if(e.tag===19)Pu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(te(ot,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Cr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),ko(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Cr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}ko(t,!0,a,null,r);break;case"together":ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ja|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ui(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,a=ia(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ro(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&dr(e)))}function Wh(e,t,a){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),xa(t,lt,e.memoizedState.cache),si();break;case 27:case 5:We(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Aa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ku(e,t,a):(Aa(t),e=fa(e,t,a),e!==null?e.sibling:null);Aa(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ui(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Fu(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ot,ot.current),n)break;return null;case 22:case 23:return t.lanes=0,Xu(e,t,a);case 24:xa(t,lt,e.memoizedState.cache)}return fa(e,t,a)}function Ju(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ct=!0;else{if(!Ro(e,a)&&(t.flags&128)===0)return ct=!1,Wh(e,t,a);ct=(e.flags&131072)!==0}else ct=!1,Be&&(t.flags&1048576)!==0&&Oc(t,fr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Hl(n)?(e=rn(n,e),t.tag=1,t=$u(null,t,n,e,a)):(t.tag=0,t=To(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===q){t.tag=11,t=Gu(null,t,n,e,a);break e}else if(i===J){t.tag=14,t=Iu(null,t,n,e,a);break e}}throw t=p(n)||n,Error(x(306,t,""))}}return t;case 0:return To(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=rn(n,t.pendingProps),$u(e,t,n,i,a);case 3:e:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(x(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,Jl(e,t),yi(t,n,null,a);var l=t.memoizedState;if(n=l.cache,xa(t,lt,n),n!==r.cache&&Vl(t,[lt],a,!0),vi(),n=l.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Wu(e,t,n,a);break e}else if(n!==i){i=Yt(Error(x(424)),t),ci(i),t=Wu(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=$t(e.firstChild),bt=t,Be=!0,Fa=null,Wt=!0,a=Ru(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(si(),n===i){t=fa(e,t,a);break e}dt(e,t,n,a)}t=t.child}return t;case 26:return Rr(e,t),e===null?(a=id(t.type,null,t.pendingProps,null))?t.memoizedState=a:Be||(a=t.type,e=t.pendingProps,n=Qr(ge.current).createElement(a),n[vt]=t,n[xt]=e,pt(n,a,e),st(n),t.stateNode=n):t.memoizedState=id(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return We(t),e===null&&Be&&(n=t.stateNode=td(t.type,t.pendingProps,ge.current),bt=t,Wt=!0,i=Je,Ma(t.type)?(fs=i,Je=$t(n.firstChild)):Je=i),dt(e,t,t.pendingProps.children,a),Rr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Be&&((i=n=Je)&&(n=Sp(n,t.type,t.pendingProps,Wt),n!==null?(t.stateNode=n,bt=t,Je=$t(n.firstChild),Wt=!1,i=!0):i=!1),i||Ja(t)),We(t),i=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,n=r.children,os(i,r)?n=null:l!==null&&os(i,l)&&(t.flags|=32),t.memoizedState!==null&&(i=ro(e,t,qh,null,null,a),Hi._currentValue=i),Rr(e,t),dt(e,t,n,a),t.child;case 6:return e===null&&Be&&((e=a=Je)&&(a=Tp(a,t.pendingProps,Wt),a!==null?(t.stateNode=a,bt=t,Je=null,e=!0):e=!1),e||Ja(t)),null;case 13:return Ku(e,t,a);case 4:return xe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Mn(t,null,n,a):dt(e,t,n,a),t.child;case 11:return Gu(e,t,t.type,t.pendingProps,a);case 7:return dt(e,t,t.pendingProps,a),t.child;case 8:return dt(e,t,t.pendingProps.children,a),t.child;case 12:return dt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,xa(t,t.type,n.value),dt(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,tn(t),i=yt(i),n=n(i),t.flags|=1,dt(e,t,n,a),t.child;case 14:return Iu(e,t,t.type,t.pendingProps,a);case 15:return Zu(e,t,t.type,t.pendingProps,a);case 19:return Fu(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=jr(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=ia(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Xu(e,t,a);case 24:return tn(t),n=yt(lt),e===null?(i=Kl(),i===null&&(i=$e,r=$l(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},Fl(t),xa(t,lt,i)):((e.lanes&a)!==0&&(Jl(e,t),yi(t,null,null,a),vi()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),xa(t,lt,n)):(n=r.cache,xa(t,lt,n),n!==i.cache&&Vl(t,[lt],a,!0))),dt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(x(156,t.tag))}function da(e){e.flags|=4}function ef(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cd(t)){if(t=qt.current,t!==null&&((Ue&4194048)===Ue?Kt!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||t!==Kt))throw pi=Pl,Yc;e.flags|=8192}}function Dr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$i():536870912,e.lanes|=t,Ln|=t)}function Ti(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Kh(e,t,a){var n=t.pendingProps;switch(Il(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),sa(lt),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(oi(t)?da(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jc())),Fe(t),null;case 26:return a=t.memoizedState,e===null?(da(t),a!==null?(Fe(t),ef(t,a)):(Fe(t),t.flags&=-16777217)):a?a!==e.memoizedState?(da(t),Fe(t),ef(t,a)):(Fe(t),t.flags&=-16777217):(e.memoizedProps!==n&&da(t),Fe(t),t.flags&=-16777217),null;case 27:qe(t),a=ge.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(!n){if(t.stateNode===null)throw Error(x(166));return Fe(t),null}e=ie.current,oi(t)?kc(t):(e=td(i,n,a),t.stateNode=e,da(t))}return Fe(t),null;case 5:if(qe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(!n){if(t.stateNode===null)throw Error(x(166));return Fe(t),null}if(e=ie.current,oi(t))kc(t);else{switch(i=Qr(ge.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[vt]=t,e[xt]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(pt(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&da(t)}}return Fe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(x(166));if(e=ge.current,oi(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=bt,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[vt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||$f(e.nodeValue,a)),e||Ja(t)}else e=Qr(e).createTextNode(n),e[vt]=t,t.stateNode=e}return Fe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=oi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[vt]=t}else si(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),i=!1}else i=jc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ua(t),t):(ua(t),null)}if(ua(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Dr(t,t.updateQueue),Fe(t),null;case 4:return Ce(),e===null&&as(t.stateNode.containerInfo),Fe(t),null;case 10:return sa(t.type),Fe(t),null;case 19:if(Y(ot),i=t.memoizedState,i===null)return Fe(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Ti(i,!1);else{if(et!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Cr(e),r!==null){for(t.flags|=128,Ti(i,!1),e=r.updateQueue,t.updateQueue=e,Dr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Cc(a,e),a=a.sibling;return te(ot,ot.current&1|2),t.child}e=e.sibling}i.tail!==null&&D()>Mr&&(t.flags|=128,n=!0,Ti(i,!1),t.lanes=4194304)}else{if(!n)if(e=Cr(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Dr(t,e),Ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!Be)return Fe(t),null}else 2*D()-i.renderingStartTime>Mr&&a!==536870912&&(t.flags|=128,n=!0,Ti(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=D(),t.sibling=null,e=ot.current,te(ot,n?e&1|2:e&1),t):(Fe(t),null);case 22:case 23:return ua(t),no(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),a=t.updateQueue,a!==null&&Dr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&Y(an),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),sa(lt),Fe(t),null;case 25:return null;case 30:return null}throw Error(x(156,t.tag))}function Ph(e,t){switch(Il(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sa(lt),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qe(t),null;case 13:if(ua(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));si()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(ot),null;case 4:return Ce(),null;case 10:return sa(t.type),null;case 22:case 23:return ua(t),no(),e!==null&&Y(an),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sa(lt),null;case 25:return null;default:return null}}function tf(e,t){switch(Il(t),t.tag){case 3:sa(lt),Ce();break;case 26:case 27:case 5:qe(t);break;case 4:Ce();break;case 13:ua(t);break;case 19:Y(ot);break;case 10:sa(t.type);break;case 22:case 23:ua(t),no(),e!==null&&Y(an);break;case 24:sa(lt)}}function Ei(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,l=a.inst;n=r(),l.destroy=n}a=a.next}while(a!==i)}}catch(b){Xe(t,t.return,b)}}function Ca(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var l=n.inst,b=l.destroy;if(b!==void 0){l.destroy=void 0,i=t;var U=a,V=b;try{V()}catch(le){Xe(i,U,le)}}}n=n.next}while(n!==r)}}catch(le){Xe(t,t.return,le)}}function af(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ic(t,a)}catch(n){Xe(e,e.return,n)}}}function nf(e,t,a){a.props=rn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Xe(e,t,n)}}function Ai(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Xe(e,t,i)}}function Pt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Xe(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Xe(e,t,i)}else a.current=null}function rf(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Xe(e,e.return,i)}}function jo(e,t,a){try{var n=e.stateNode;gp(n,e.type,a,t),n[xt]=t}catch(i){Xe(e,e.return,i)}}function lf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ma(e.type)||e.tag===4}function Do(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xr));else if(n!==4&&(n===27&&Ma(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(zo(e,t,a),e=e.sibling;e!==null;)zo(e,t,a),e=e.sibling}function zr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zr(e,t,a),e=e.sibling;e!==null;)zr(e,t,a),e=e.sibling}function of(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);pt(t,n,a),t[vt]=e,t[xt]=a}catch(r){Xe(e,e.return,r)}}var ha=!1,at=!1,Uo=!1,sf=typeof WeakSet=="function"?WeakSet:Set,ut=null;function Fh(e,t){if(e=e.containerInfo,rs=Fr,e=gc(e),jl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var l=0,b=-1,U=-1,V=0,le=0,fe=e,K=null;t:for(;;){for(var P;fe!==a||i!==0&&fe.nodeType!==3||(b=l+i),fe!==r||n!==0&&fe.nodeType!==3||(U=l+n),fe.nodeType===3&&(l+=fe.nodeValue.length),(P=fe.firstChild)!==null;)K=fe,fe=P;for(;;){if(fe===e)break t;if(K===a&&++V===i&&(b=l),K===r&&++le===n&&(U=l),(P=fe.nextSibling)!==null)break;fe=K,K=fe.parentNode}fe=P}a=b===-1||U===-1?null:{start:b,end:U}}else a=null}a=a||{start:0,end:0}}else a=null;for(ls={focusedElem:e,selectionRange:a},Fr=!1,ut=t;ut!==null;)if(t=ut,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ut=e;else for(;ut!==null;){switch(t=ut,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var Ae=rn(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(Ae,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(Te){Xe(a,a.return,Te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)cs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(x(163))}if(e=t.sibling,e!==null){e.return=t.return,ut=e;break}ut=t.return}}function cf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Oa(e,a),n&4&&Ei(5,a);break;case 1:if(Oa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(l){Xe(a,a.return,l)}else{var i=rn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Xe(a,a.return,l)}}n&64&&af(a),n&512&&Ai(a,a.return);break;case 3:if(Oa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ic(e,t)}catch(l){Xe(a,a.return,l)}}break;case 27:t===null&&n&4&&of(a);case 26:case 5:Oa(e,a),t===null&&n&4&&rf(a),n&512&&Ai(a,a.return);break;case 12:Oa(e,a);break;case 13:Oa(e,a),n&4&&df(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=op.bind(null,a),Ep(e,a))));break;case 22:if(n=a.memoizedState!==null||ha,!n){t=t!==null&&t.memoizedState!==null||at,i=ha;var r=at;ha=n,(at=t)&&!r?ka(e,a,(a.subtreeFlags&8772)!==0):Oa(e,a),ha=i,at=r}break;case 30:break;default:Oa(e,a)}}function uf(e){var t=e.alternate;t!==null&&(e.alternate=null,uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,Tt=!1;function pa(e,t,a){for(a=a.child;a!==null;)ff(e,t,a),a=a.sibling}function ff(e,t,a){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(_e,a)}catch{}switch(a.tag){case 26:at||Pt(a,t),pa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:at||Pt(a,t);var n=Pe,i=Tt;Ma(a.type)&&(Pe=a.stateNode,Tt=!1),pa(e,t,a),Ui(a.stateNode),Pe=n,Tt=i;break;case 5:at||Pt(a,t);case 6:if(n=Pe,i=Tt,Pe=null,pa(e,t,a),Pe=n,Tt=i,Pe!==null)if(Tt)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(a.stateNode)}catch(r){Xe(a,t,r)}else try{Pe.removeChild(a.stateNode)}catch(r){Xe(a,t,r)}break;case 18:Pe!==null&&(Tt?(e=Pe,Jf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ii(e)):Jf(Pe,a.stateNode));break;case 4:n=Pe,i=Tt,Pe=a.stateNode.containerInfo,Tt=!0,pa(e,t,a),Pe=n,Tt=i;break;case 0:case 11:case 14:case 15:at||Ca(2,a,t),at||Ca(4,a,t),pa(e,t,a);break;case 1:at||(Pt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&nf(a,t,n)),pa(e,t,a);break;case 21:pa(e,t,a);break;case 22:at=(n=at)||a.memoizedState!==null,pa(e,t,a),at=n;break;default:pa(e,t,a)}}function df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ii(e)}catch(a){Xe(t,t.return,a)}}function Jh(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sf),t;default:throw Error(x(435,e.tag))}}function Mo(e,t){var a=Jh(e);t.forEach(function(n){var i=sp.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function Ct(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,l=t,b=l;e:for(;b!==null;){switch(b.tag){case 27:if(Ma(b.type)){Pe=b.stateNode,Tt=!1;break e}break;case 5:Pe=b.stateNode,Tt=!1;break e;case 3:case 4:Pe=b.stateNode.containerInfo,Tt=!0;break e}b=b.return}if(Pe===null)throw Error(x(160));ff(r,l,i),Pe=null,Tt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)hf(t,e),t=t.sibling}var Vt=null;function hf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ct(t,e),Ot(e),n&4&&(Ca(3,e,e.return),Ei(3,e),Ca(5,e,e.return));break;case 1:Ct(t,e),Ot(e),n&512&&(at||a===null||Pt(a,a.return)),n&64&&ha&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Vt;if(Ct(t,e),Ot(e),n&512&&(at||a===null||Pt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Kn]||r[vt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),pt(r,n,a),r[vt]=e,st(r),n=r;break e;case"link":var l=od("link","href",i).get(n+(a.href||""));if(l){for(var b=0;b<l.length;b++)if(r=l[b],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){l.splice(b,1);break t}}r=i.createElement(n),pt(r,n,a),i.head.appendChild(r);break;case"meta":if(l=od("meta","content",i).get(n+(a.content||""))){for(b=0;b<l.length;b++)if(r=l[b],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){l.splice(b,1);break t}}r=i.createElement(n),pt(r,n,a),i.head.appendChild(r);break;default:throw Error(x(468,n))}r[vt]=e,st(r),n=r}e.stateNode=n}else sd(i,e.type,e.stateNode);else e.stateNode=ld(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?sd(i,e.type,e.stateNode):ld(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&jo(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ct(t,e),Ot(e),n&512&&(at||a===null||Pt(a,a.return)),a!==null&&n&4&&jo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ct(t,e),Ot(e),n&512&&(at||a===null||Pt(a,a.return)),e.flags&32){i=e.stateNode;try{gn(i,"")}catch(P){Xe(e,e.return,P)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,jo(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Uo=!0);break;case 6:if(Ct(t,e),Ot(e),n&4){if(e.stateNode===null)throw Error(x(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(P){Xe(e,e.return,P)}}break;case 3:if(Wr=null,i=Vt,Vt=Vr(t.containerInfo),Ct(t,e),Vt=i,Ot(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(P){Xe(e,e.return,P)}Uo&&(Uo=!1,pf(e));break;case 4:n=Vt,Vt=Vr(e.stateNode.containerInfo),Ct(t,e),Ot(e),Vt=n;break;case 12:Ct(t,e),Ot(e);break;case 13:Ct(t,e),Ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Go=D()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Mo(e,n)));break;case 22:i=e.memoizedState!==null;var U=a!==null&&a.memoizedState!==null,V=ha,le=at;if(ha=V||i,at=le||U,Ct(t,e),at=le,ha=V,Ot(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||U||ha||at||ln(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){U=a=t;try{if(r=U.stateNode,i)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{b=U.stateNode;var fe=U.memoizedProps.style,K=fe!=null&&fe.hasOwnProperty("display")?fe.display:null;b.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(P){Xe(U,U.return,P)}}}else if(t.tag===6){if(a===null){U=t;try{U.stateNode.nodeValue=i?"":U.memoizedProps}catch(P){Xe(U,U.return,P)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Mo(e,a))));break;case 19:Ct(t,e),Ot(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Mo(e,n)));break;case 30:break;case 21:break;default:Ct(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(lf(n)){a=n;break}n=n.return}if(a==null)throw Error(x(160));switch(a.tag){case 27:var i=a.stateNode,r=Do(e);zr(e,r,i);break;case 5:var l=a.stateNode;a.flags&32&&(gn(l,""),a.flags&=-33);var b=Do(e);zr(e,b,l);break;case 3:case 4:var U=a.stateNode.containerInfo,V=Do(e);zo(e,V,U);break;default:throw Error(x(161))}}catch(le){Xe(e,e.return,le)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;pf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Oa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cf(e,t.alternate,t),t=t.sibling}function ln(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ca(4,t,t.return),ln(t);break;case 1:Pt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&nf(t,t.return,a),ln(t);break;case 27:Ui(t.stateNode);case 26:case 5:Pt(t,t.return),ln(t);break;case 22:t.memoizedState===null&&ln(t);break;case 30:ln(t);break;default:ln(t)}e=e.sibling}}function ka(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:ka(i,r,a),Ei(4,r);break;case 1:if(ka(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(V){Xe(n,n.return,V)}if(n=r,i=n.updateQueue,i!==null){var b=n.stateNode;try{var U=i.shared.hiddenCallbacks;if(U!==null)for(i.shared.hiddenCallbacks=null,i=0;i<U.length;i++)Gc(U[i],b)}catch(V){Xe(n,n.return,V)}}a&&l&64&&af(r),Ai(r,r.return);break;case 27:of(r);case 26:case 5:ka(i,r,a),a&&n===null&&l&4&&rf(r),Ai(r,r.return);break;case 12:ka(i,r,a);break;case 13:ka(i,r,a),a&&l&4&&df(i,r);break;case 22:r.memoizedState===null&&ka(i,r,a),Ai(r,r.return);break;case 30:break;default:ka(i,r,a)}t=t.sibling}}function Yo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fi(a))}function Bo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fi(e))}function Ft(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mf(e,t,a,n),t=t.sibling}function mf(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ft(e,t,a,n),i&2048&&Ei(9,t);break;case 1:Ft(e,t,a,n);break;case 3:Ft(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fi(e)));break;case 12:if(i&2048){Ft(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,b=r.onPostCommit;typeof b=="function"&&b(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(U){Xe(t,t.return,U)}}else Ft(e,t,a,n);break;case 13:Ft(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?Ft(e,t,a,n):Ni(e,t):r._visibility&2?Ft(e,t,a,n):(r._visibility|=2,Yn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&Yo(l,t);break;case 24:Ft(e,t,a,n),i&2048&&Bo(t.alternate,t);break;default:Ft(e,t,a,n)}}function Yn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,l=t,b=a,U=n,V=l.flags;switch(l.tag){case 0:case 11:case 15:Yn(r,l,b,U,i),Ei(8,l);break;case 23:break;case 22:var le=l.stateNode;l.memoizedState!==null?le._visibility&2?Yn(r,l,b,U,i):Ni(r,l):(le._visibility|=2,Yn(r,l,b,U,i)),i&&V&2048&&Yo(l.alternate,l);break;case 24:Yn(r,l,b,U,i),i&&V&2048&&Bo(l.alternate,l);break;default:Yn(r,l,b,U,i)}t=t.sibling}}function Ni(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Ni(a,n),i&2048&&Yo(n.alternate,n);break;case 24:Ni(a,n),i&2048&&Bo(n.alternate,n);break;default:Ni(a,n)}t=t.sibling}}var Ci=8192;function Bn(e){if(e.subtreeFlags&Ci)for(e=e.child;e!==null;)vf(e),e=e.sibling}function vf(e){switch(e.tag){case 26:Bn(e),e.flags&Ci&&e.memoizedState!==null&&Bp(Vt,e.memoizedState,e.memoizedProps);break;case 5:Bn(e);break;case 3:case 4:var t=Vt;Vt=Vr(e.stateNode.containerInfo),Bn(e),Vt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ci,Ci=16777216,Bn(e),Ci=t):Bn(e));break;default:Bn(e)}}function yf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Oi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];ut=n,bf(n,e)}yf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gf(e),e=e.sibling}function gf(e){switch(e.tag){case 0:case 11:case 15:Oi(e),e.flags&2048&&Ca(9,e,e.return);break;case 3:Oi(e);break;case 12:Oi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ur(e)):Oi(e);break;default:Oi(e)}}function Ur(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];ut=n,bf(n,e)}yf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ca(8,t,t.return),Ur(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ur(t));break;default:Ur(t)}e=e.sibling}}function bf(e,t){for(;ut!==null;){var a=ut;switch(a.tag){case 0:case 11:case 15:Ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:fi(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,ut=n;else e:for(a=e;ut!==null;){n=ut;var i=n.sibling,r=n.return;if(uf(n),n===a){ut=null;break e}if(i!==null){i.return=r,ut=i;break e}ut=r}}}var ep={getCacheForType:function(e){var t=yt(lt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},tp=typeof WeakMap=="function"?WeakMap:Map,He=0,$e=null,De=null,Ue=0,Le=0,kt=null,Ra=!1,Hn=!1,Ho=!1,ma=0,et=0,ja=0,on=0,Lo=0,Gt=0,Ln=0,ki=null,Et=null,qo=!1,Go=0,Mr=1/0,Yr=null,Da=null,ht=0,za=null,qn=null,Gn=0,Io=0,Zo=null,wf=null,Ri=0,Xo=null;function Rt(){if((He&2)!==0&&Ue!==0)return Ue&-Ue;if(X.T!==null){var e=On;return e!==0?e:Fo()}return Us()}function xf(){Gt===0&&(Gt=(Ue&536870912)===0||Be?Vi():536870912);var e=qt.current;return e!==null&&(e.flags|=32),Gt}function jt(e,t,a){(e===$e&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(In(e,0),Ua(e,Ue,Gt,!1)),Xt(e,a),((He&2)===0||e!==$e)&&(e===$e&&((He&2)===0&&(on|=a),et===4&&Ua(e,Ue,Gt,!1)),Jt(e))}function _f(e,t,a){if((He&6)!==0)throw Error(x(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||ga(e,t),i=n?ip(e,t):$o(e,t,!0),r=n;do{if(i===0){Hn&&!n&&Ua(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!ap(a)){i=$o(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var b=e;i=ki;var U=b.current.memoizedState.isDehydrated;if(U&&(In(b,l).flags|=256),l=$o(b,l,!1),l!==2){if(Ho&&!U){b.errorRecoveryDisabledLanes|=r,on|=r,i=4;break e}r=Et,Et=i,r!==null&&(Et===null?Et=r:Et.push.apply(Et,r))}i=l}if(r=!1,i!==2)continue}}if(i===1){In(e,0),Ua(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(x(345));case 4:if((t&4194048)!==t)break;case 6:Ua(n,t,Gt,!Ra);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(x(329))}if((t&62914560)===t&&(i=Go+300-D(),10<i)){if(Ua(n,t,Gt,!Ra),wt(n,0,!0)!==0)break e;n.timeoutHandle=Pf(Sf.bind(null,n,a,Et,Yr,qo,t,Gt,on,Ln,Ra,r,2,-0,0),i);break e}Sf(n,a,Et,Yr,qo,t,Gt,on,Ln,Ra,r,0,-0,0)}}break}while(!0);Jt(e)}function Sf(e,t,a,n,i,r,l,b,U,V,le,fe,K,P){if(e.timeoutHandle=-1,fe=t.subtreeFlags,(fe&8192||(fe&16785408)===16785408)&&(Bi={stylesheets:null,count:0,unsuspend:Yp},vf(t),fe=Hp(),fe!==null)){e.cancelPendingCommit=fe(kf.bind(null,e,t,r,a,n,i,l,b,U,le,1,K,P)),Ua(e,r,l,!V);return}kf(e,t,r,a,n,i,l,b,U)}function ap(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!At(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ua(e,t,a,n){t&=~Lo,t&=~on,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-Qe(i),l=1<<r;n[r]=-1,i&=~l}a!==0&&Ds(e,a,t)}function Br(){return(He&6)===0?(ji(0),!1):!0}function Qo(){if(De!==null){if(Le===0)var e=De.return;else e=De,oa=en=null,so(e),Un=null,_i=0,e=De;for(;e!==null;)tf(e.alternate,e),e=e.return;De=null}}function In(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,wp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qo(),$e=e,De=a=ia(e.current,null),Ue=t,Le=0,kt=null,Ra=!1,Hn=ga(e,t),Ho=!1,Ln=Gt=Lo=on=ja=et=0,Et=ki=null,qo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Qe(n),r=1<<i;t|=e[i],n&=~r}return ma=t,lr(),a}function Tf(e,t){Re=null,X.H=Er,t===hi||t===mr?(t=Lc(),Le=3):t===Yc?(t=Lc(),Le=4):Le=t===qu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,De===null&&(et=1,kr(e,Yt(t,e.current)))}function Ef(){var e=X.H;return X.H=Er,e===null?Er:e}function Af(){var e=X.A;return X.A=ep,e}function Vo(){et=4,Ra||(Ue&4194048)!==Ue&&qt.current!==null||(Hn=!0),(ja&134217727)===0&&(on&134217727)===0||$e===null||Ua($e,Ue,Gt,!1)}function $o(e,t,a){var n=He;He|=2;var i=Ef(),r=Af();($e!==e||Ue!==t)&&(Yr=null,In(e,t)),t=!1;var l=et;e:do try{if(Le!==0&&De!==null){var b=De,U=kt;switch(Le){case 8:Qo(),l=6;break e;case 3:case 2:case 9:case 6:qt.current===null&&(t=!0);var V=Le;if(Le=0,kt=null,Zn(e,b,U,V),a&&Hn){l=0;break e}break;default:V=Le,Le=0,kt=null,Zn(e,b,U,V)}}np(),l=et;break}catch(le){Tf(e,le)}while(!0);return t&&e.shellSuspendCounter++,oa=en=null,He=n,X.H=i,X.A=r,De===null&&($e=null,Ue=0,lr()),l}function np(){for(;De!==null;)Nf(De)}function ip(e,t){var a=He;He|=2;var n=Ef(),i=Af();$e!==e||Ue!==t?(Yr=null,Mr=D()+500,In(e,t)):Hn=ga(e,t);e:do try{if(Le!==0&&De!==null){t=De;var r=kt;t:switch(Le){case 1:Le=0,kt=null,Zn(e,t,r,1);break;case 2:case 9:if(Bc(r)){Le=0,kt=null,Cf(t);break}t=function(){Le!==2&&Le!==9||$e!==e||(Le=7),Jt(e)},r.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Bc(r)?(Le=0,kt=null,Cf(t)):(Le=0,kt=null,Zn(e,t,r,7));break;case 5:var l=null;switch(De.tag){case 26:l=De.memoizedState;case 5:case 27:var b=De;if(!l||cd(l)){Le=0,kt=null;var U=b.sibling;if(U!==null)De=U;else{var V=b.return;V!==null?(De=V,Hr(V)):De=null}break t}}Le=0,kt=null,Zn(e,t,r,5);break;case 6:Le=0,kt=null,Zn(e,t,r,6);break;case 8:Qo(),et=6;break e;default:throw Error(x(462))}}rp();break}catch(le){Tf(e,le)}while(!0);return oa=en=null,X.H=n,X.A=i,He=a,De!==null?0:($e=null,Ue=0,lr(),et)}function rp(){for(;De!==null&&!ce();)Nf(De)}function Nf(e){var t=Ju(e.alternate,e,ma);e.memoizedProps=e.pendingProps,t===null?Hr(e):De=t}function Cf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Vu(a,t,t.pendingProps,t.type,void 0,Ue);break;case 11:t=Vu(a,t,t.pendingProps,t.type.render,t.ref,Ue);break;case 5:so(t);default:tf(a,t),t=De=Cc(t,ma),t=Ju(a,t,ma)}e.memoizedProps=e.pendingProps,t===null?Hr(e):De=t}function Zn(e,t,a,n){oa=en=null,so(t),Un=null,_i=0;var i=t.return;try{if($h(e,i,t,a,Ue)){et=1,kr(e,Yt(a,e.current)),De=null;return}}catch(r){if(i!==null)throw De=i,r;et=1,kr(e,Yt(a,e.current)),De=null;return}t.flags&32768?(Be||n===1?e=!0:Hn||(Ue&536870912)!==0?e=!1:(Ra=e=!0,(n===2||n===9||n===3||n===6)&&(n=qt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Of(t,e)):Hr(t)}function Hr(e){var t=e;do{if((t.flags&32768)!==0){Of(t,Ra);return}e=t.return;var a=Kh(t.alternate,t,ma);if(a!==null){De=a;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);et===0&&(et=5)}function Of(e,t){do{var a=Ph(e.alternate,e);if(a!==null){a.flags&=32767,De=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){De=e;return}De=e=a}while(e!==null);et=6,De=null}function kf(e,t,a,n,i,r,l,b,U){e.cancelPendingCommit=null;do Lr();while(ht!==0);if((He&6)!==0)throw Error(x(327));if(t!==null){if(t===e.current)throw Error(x(177));if(r=t.lanes|t.childLanes,r|=Yl,un(e,a,r,l,b,U),e===$e&&(De=$e=null,Ue=0),qn=t,za=e,Gn=a,Io=r,Zo=i,wf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cp(pe,function(){return Uf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=X.T,X.T=null,i=B.p,B.p=2,l=He,He|=4;try{Fh(e,t,a)}finally{He=l,B.p=i,X.T=n}}ht=1,Rf(),jf(),Df()}}function Rf(){if(ht===1){ht=0;var e=za,t=qn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=X.T,X.T=null;var n=B.p;B.p=2;var i=He;He|=4;try{hf(t,e);var r=ls,l=gc(e.containerInfo),b=r.focusedElem,U=r.selectionRange;if(l!==b&&b&&b.ownerDocument&&yc(b.ownerDocument.documentElement,b)){if(U!==null&&jl(b)){var V=U.start,le=U.end;if(le===void 0&&(le=V),"selectionStart"in b)b.selectionStart=V,b.selectionEnd=Math.min(le,b.value.length);else{var fe=b.ownerDocument||document,K=fe&&fe.defaultView||window;if(K.getSelection){var P=K.getSelection(),Ae=b.textContent.length,Te=Math.min(U.start,Ae),Ze=U.end===void 0?Te:Math.min(U.end,Ae);!P.extend&&Te>Ze&&(l=Ze,Ze=Te,Te=l);var Z=vc(b,Te),L=vc(b,Ze);if(Z&&L&&(P.rangeCount!==1||P.anchorNode!==Z.node||P.anchorOffset!==Z.offset||P.focusNode!==L.node||P.focusOffset!==L.offset)){var Q=fe.createRange();Q.setStart(Z.node,Z.offset),P.removeAllRanges(),Te>Ze?(P.addRange(Q),P.extend(L.node,L.offset)):(Q.setEnd(L.node,L.offset),P.addRange(Q))}}}}for(fe=[],P=b;P=P.parentNode;)P.nodeType===1&&fe.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<fe.length;b++){var ue=fe[b];ue.element.scrollLeft=ue.left,ue.element.scrollTop=ue.top}}Fr=!!rs,ls=rs=null}finally{He=i,B.p=n,X.T=a}}e.current=t,ht=2}}function jf(){if(ht===2){ht=0;var e=za,t=qn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=X.T,X.T=null;var n=B.p;B.p=2;var i=He;He|=4;try{cf(e,t.alternate,t)}finally{He=i,B.p=n,X.T=a}}ht=3}}function Df(){if(ht===4||ht===3){ht=0,ae();var e=za,t=qn,a=Gn,n=wf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,qn=za=null,zf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Da=null),fl(a),t=t.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(_e,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=X.T,i=B.p,B.p=2,X.T=null;try{for(var r=e.onRecoverableError,l=0;l<n.length;l++){var b=n[l];r(b.value,{componentStack:b.stack})}}finally{X.T=t,B.p=i}}(Gn&3)!==0&&Lr(),Jt(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===Xo?Ri++:(Ri=0,Xo=e):Ri=0,ji(0)}}function zf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fi(t)))}function Lr(e){return Rf(),jf(),Df(),Uf()}function Uf(){if(ht!==5)return!1;var e=za,t=Io;Io=0;var a=fl(Gn),n=X.T,i=B.p;try{B.p=32>a?32:a,X.T=null,a=Zo,Zo=null;var r=za,l=Gn;if(ht=0,qn=za=null,Gn=0,(He&6)!==0)throw Error(x(331));var b=He;if(He|=4,gf(r.current),mf(r,r.current,l,a),He=b,ji(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(_e,r)}catch{}return!0}finally{B.p=i,X.T=n,zf(e,t)}}function Mf(e,t,a){t=Yt(a,t),t=So(e.stateNode,t,2),e=Ta(e,t,2),e!==null&&(Xt(e,2),Jt(e))}function Xe(e,t,a){if(e.tag===3)Mf(e,e,a);else for(;t!==null;){if(t.tag===3){Mf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Da===null||!Da.has(n))){e=Yt(a,e),a=Hu(2),n=Ta(t,a,2),n!==null&&(Lu(a,n,t,e),Xt(n,2),Jt(n));break}}t=t.return}}function Wo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new tp;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Ho=!0,i.add(a),e=lp.bind(null,e,t,a),t.then(e,e))}function lp(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,$e===e&&(Ue&a)===a&&(et===4||et===3&&(Ue&62914560)===Ue&&300>D()-Go?(He&2)===0&&In(e,0):Lo|=a,Ln===Ue&&(Ln=0)),Jt(e)}function Yf(e,t){t===0&&(t=$i()),e=En(e,t),e!==null&&(Xt(e,t),Jt(e))}function op(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Yf(e,a)}function sp(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(x(314))}n!==null&&n.delete(t),Yf(e,a)}function cp(e,t){return nt(e,t)}var qr=null,Xn=null,Ko=!1,Gr=!1,Po=!1,sn=0;function Jt(e){e!==Xn&&e.next===null&&(Xn===null?qr=Xn=e:Xn=Xn.next=e),Gr=!0,Ko||(Ko=!0,fp())}function ji(e,t){if(!Po&&Gr){Po=!0;do for(var a=!1,n=qr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var l=n.suspendedLanes,b=n.pingedLanes;r=(1<<31-Qe(42|e)+1)-1,r&=i&~(l&~b),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,qf(n,r))}else r=Ue,r=wt(n,n===$e?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||ga(n,r)||(a=!0,qf(n,r));n=n.next}while(a);Po=!1}}function up(){Bf()}function Bf(){Gr=Ko=!1;var e=0;sn!==0&&(bp()&&(e=sn),sn=0);for(var t=D(),a=null,n=qr;n!==null;){var i=n.next,r=Hf(n,t);r===0?(n.next=null,a===null?qr=i:a.next=i,i===null&&(Xn=a)):(a=n,(e!==0||(r&3)!==0)&&(Gr=!0)),n=i}ji(e)}function Hf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-Qe(r),b=1<<l,U=i[l];U===-1?((b&a)===0||(b&n)!==0)&&(i[l]=cl(b,t)):U<=t&&(e.expiredLanes|=b),r&=~b}if(t=$e,a=Ue,a=wt(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&s(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ga(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&s(n),fl(a)){case 2:case 8:a=he;break;case 32:a=pe;break;case 268435456:a=me;break;default:a=pe}return n=Lf.bind(null,e),a=nt(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&s(n),e.callbackPriority=2,e.callbackNode=null,2}function Lf(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Lr()&&e.callbackNode!==a)return null;var n=Ue;return n=wt(e,e===$e?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(_f(e,n,t),Hf(e,D()),e.callbackNode!=null&&e.callbackNode===a?Lf.bind(null,e):null)}function qf(e,t){if(Lr())return null;_f(e,t,!0)}function fp(){xp(function(){(He&6)!==0?nt(I,up):Bf()})}function Fo(){return sn===0&&(sn=Vi()),sn}function Gf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ji(""+e)}function If(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function dp(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=Gf((i[xt]||null).action),l=n.submitter;l&&(t=(t=l[xt]||null)?Gf(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var b=new nr("action","action",null,n,i);e.push({event:b,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(sn!==0){var U=l?If(i,l):new FormData(i);go(a,{pending:!0,data:U,method:i.method,action:r},null,U)}}else typeof r=="function"&&(b.preventDefault(),U=l?If(i,l):new FormData(i),go(a,{pending:!0,data:U,method:i.method,action:r},r,U))},currentTarget:i}]})}}for(var Jo=0;Jo<Ml.length;Jo++){var es=Ml[Jo],hp=es.toLowerCase(),pp=es[0].toUpperCase()+es.slice(1);Qt(hp,"on"+pp)}Qt(xc,"onAnimationEnd"),Qt(_c,"onAnimationIteration"),Qt(Sc,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(Rh,"onTransitionRun"),Qt(jh,"onTransitionStart"),Qt(Dh,"onTransitionCancel"),Qt(Tc,"onTransitionEnd"),mn("onMouseEnter",["mouseout","mouseover"]),mn("onMouseLeave",["mouseout","mouseover"]),mn("onPointerEnter",["pointerout","pointerover"]),mn("onPointerLeave",["pointerout","pointerover"]),Xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Di));function Zf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var l=n.length-1;0<=l;l--){var b=n[l],U=b.instance,V=b.currentTarget;if(b=b.listener,U!==r&&i.isPropagationStopped())break e;r=b,i.currentTarget=V;try{r(i)}catch(le){Or(le)}i.currentTarget=null,r=U}else for(l=0;l<n.length;l++){if(b=n[l],U=b.instance,V=b.currentTarget,b=b.listener,U!==r&&i.isPropagationStopped())break e;r=b,i.currentTarget=V;try{r(i)}catch(le){Or(le)}i.currentTarget=null,r=U}}}}function ze(e,t){var a=t[dl];a===void 0&&(a=t[dl]=new Set);var n=e+"__bubble";a.has(n)||(Xf(t,e,2,!1),a.add(n))}function ts(e,t,a){var n=0;t&&(n|=4),Xf(a,e,n,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function as(e){if(!e[Ir]){e[Ir]=!0,Ys.forEach(function(a){a!=="selectionchange"&&(mp.has(a)||ts(a,!1,e),ts(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ir]||(t[Ir]=!0,ts("selectionchange",!1,t))}}function Xf(e,t,a,n){switch(md(t)){case 2:var i=Gp;break;case 8:i=Ip;break;default:i=vs}a=i.bind(null,t,a,e),i=void 0,!Sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function ns(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var b=n.stateNode.containerInfo;if(b===i)break;if(l===4)for(l=n.return;l!==null;){var U=l.tag;if((U===3||U===4)&&l.stateNode.containerInfo===i)return;l=l.return}for(;b!==null;){if(l=dn(b),l===null)return;if(U=l.tag,U===5||U===6||U===26||U===27){n=r=l;continue e}b=b.parentNode}}n=n.return}Ps(function(){var V=r,le=xl(a),fe=[];e:{var K=Ec.get(e);if(K!==void 0){var P=nr,Ae=e;switch(e){case"keypress":if(tr(a)===0)break e;case"keydown":case"keyup":P=ch;break;case"focusin":Ae="focus",P=Nl;break;case"focusout":Ae="blur",P=Nl;break;case"beforeblur":case"afterblur":P=Nl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=dh;break;case xc:case _c:case Sc:P=eh;break;case Tc:P=ph;break;case"scroll":case"scrollend":P=Wd;break;case"wheel":P=vh;break;case"copy":case"cut":case"paste":P=ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=ac;break;case"toggle":case"beforetoggle":P=gh}var Te=(t&4)!==0,Ze=!Te&&(e==="scroll"||e==="scrollend"),Z=Te?K!==null?K+"Capture":null:K;Te=[];for(var L=V,Q;L!==null;){var ue=L;if(Q=ue.stateNode,ue=ue.tag,ue!==5&&ue!==26&&ue!==27||Q===null||Z===null||(ue=Fn(L,Z),ue!=null&&Te.push(zi(L,ue,Q))),Ze)break;L=L.return}0<Te.length&&(K=new P(K,Ae,null,a,le),fe.push({event:K,listeners:Te}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",K&&a!==wl&&(Ae=a.relatedTarget||a.fromElement)&&(dn(Ae)||Ae[fn]))break e;if((P||K)&&(K=le.window===le?le:(K=le.ownerDocument)?K.defaultView||K.parentWindow:window,P?(Ae=a.relatedTarget||a.toElement,P=V,Ae=Ae?dn(Ae):null,Ae!==null&&(Ze=m(Ae),Te=Ae.tag,Ae!==Ze||Te!==5&&Te!==27&&Te!==6)&&(Ae=null)):(P=null,Ae=V),P!==Ae)){if(Te=ec,ue="onMouseLeave",Z="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(Te=ac,ue="onPointerLeave",Z="onPointerEnter",L="pointer"),Ze=P==null?K:Pn(P),Q=Ae==null?K:Pn(Ae),K=new Te(ue,L+"leave",P,a,le),K.target=Ze,K.relatedTarget=Q,ue=null,dn(le)===V&&(Te=new Te(Z,L+"enter",Ae,a,le),Te.target=Q,Te.relatedTarget=Ze,ue=Te),Ze=ue,P&&Ae)t:{for(Te=P,Z=Ae,L=0,Q=Te;Q;Q=Qn(Q))L++;for(Q=0,ue=Z;ue;ue=Qn(ue))Q++;for(;0<L-Q;)Te=Qn(Te),L--;for(;0<Q-L;)Z=Qn(Z),Q--;for(;L--;){if(Te===Z||Z!==null&&Te===Z.alternate)break t;Te=Qn(Te),Z=Qn(Z)}Te=null}else Te=null;P!==null&&Qf(fe,K,P,Te,!1),Ae!==null&&Ze!==null&&Qf(fe,Ze,Ae,Te,!0)}}e:{if(K=V?Pn(V):window,P=K.nodeName&&K.nodeName.toLowerCase(),P==="select"||P==="input"&&K.type==="file")var we=uc;else if(sc(K))if(fc)we=Ch;else{we=Ah;var je=Eh}else P=K.nodeName,!P||P.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?V&&bl(V.elementType)&&(we=uc):we=Nh;if(we&&(we=we(e,V))){cc(fe,we,a,le);break e}je&&je(e,K,V),e==="focusout"&&V&&K.type==="number"&&V.memoizedProps.value!=null&&gl(K,"number",K.value)}switch(je=V?Pn(V):window,e){case"focusin":(sc(je)||je.contentEditable==="true")&&(_n=je,Dl=V,li=null);break;case"focusout":li=Dl=_n=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,bc(fe,a,le);break;case"selectionchange":if(kh)break;case"keydown":case"keyup":bc(fe,a,le)}var Se;if(Ol)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else xn?lc(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(nc&&a.locale!=="ko"&&(xn||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&xn&&(Se=Fs()):(wa=le,Tl="value"in wa?wa.value:wa.textContent,xn=!0)),je=Zr(V,Ee),0<je.length&&(Ee=new tc(Ee,e,null,a,le),fe.push({event:Ee,listeners:je}),Se?Ee.data=Se:(Se=oc(a),Se!==null&&(Ee.data=Se)))),(Se=wh?xh(e,a):_h(e,a))&&(Ee=Zr(V,"onBeforeInput"),0<Ee.length&&(je=new tc("onBeforeInput","beforeinput",null,a,le),fe.push({event:je,listeners:Ee}),je.data=Se)),dp(fe,e,V,a,le)}Zf(fe,t)})}function zi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Zr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Fn(e,a),i!=null&&n.unshift(zi(e,i,r)),i=Fn(e,t),i!=null&&n.push(zi(e,i,r))),e.tag===3)return n;e=e.return}return[]}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qf(e,t,a,n,i){for(var r=t._reactName,l=[];a!==null&&a!==n;){var b=a,U=b.alternate,V=b.stateNode;if(b=b.tag,U!==null&&U===n)break;b!==5&&b!==26&&b!==27||V===null||(U=V,i?(V=Fn(a,r),V!=null&&l.unshift(zi(a,V,U))):i||(V=Fn(a,r),V!=null&&l.push(zi(a,V,U)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var vp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function Vf(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(yp,"")}function $f(e,t){return t=Vf(t),Vf(e)===t}function Xr(){}function Ie(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||gn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&gn(e,""+n);break;case"className":Ki(e,"class",n);break;case"tabIndex":Ki(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ki(e,a,n);break;case"style":Ws(e,n,r);break;case"data":if(t!=="object"){Ki(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ji(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ie(e,t,"name",i.name,i,null),Ie(e,t,"formEncType",i.formEncType,i,null),Ie(e,t,"formMethod",i.formMethod,i,null),Ie(e,t,"formTarget",i.formTarget,i,null)):(Ie(e,t,"encType",i.encType,i,null),Ie(e,t,"method",i.method,i,null),Ie(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ji(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Xr);break;case"onScroll":n!=null&&ze("scroll",e);break;case"onScrollEnd":n!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(x(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(x(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ji(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ze("beforetoggle",e),ze("toggle",e),Wi(e,"popover",n);break;case"xlinkActuate":aa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":aa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":aa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":aa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":aa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":aa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":aa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":aa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":aa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Wi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vd.get(a)||a,Wi(e,a,n))}}function is(e,t,a,n,i,r){switch(a){case"style":Ws(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(x(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(x(60));e.innerHTML=a}}break;case"children":typeof n=="string"?gn(e,n):(typeof n=="number"||typeof n=="bigint")&&gn(e,""+n);break;case"onScroll":n!=null&&ze("scroll",e);break;case"onScrollEnd":n!=null&&ze("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Xr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[xt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Wi(e,a,n)}}}function pt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];if(l!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(x(137,t));default:Ie(e,t,r,l,a,null)}}i&&Ie(e,t,"srcSet",a.srcSet,a,null),n&&Ie(e,t,"src",a.src,a,null);return;case"input":ze("invalid",e);var b=r=l=i=null,U=null,V=null;for(n in a)if(a.hasOwnProperty(n)){var le=a[n];if(le!=null)switch(n){case"name":i=le;break;case"type":l=le;break;case"checked":U=le;break;case"defaultChecked":V=le;break;case"value":r=le;break;case"defaultValue":b=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(x(137,t));break;default:Ie(e,t,n,le,a,null)}}Xs(e,r,b,U,V,l,i,!1),Pi(e);return;case"select":ze("invalid",e),n=l=r=null;for(i in a)if(a.hasOwnProperty(i)&&(b=a[i],b!=null))switch(i){case"value":r=b;break;case"defaultValue":l=b;break;case"multiple":n=b;default:Ie(e,t,i,b,a,null)}t=r,a=l,e.multiple=!!n,t!=null?yn(e,!!n,t,!1):a!=null&&yn(e,!!n,a,!0);return;case"textarea":ze("invalid",e),r=i=n=null;for(l in a)if(a.hasOwnProperty(l)&&(b=a[l],b!=null))switch(l){case"value":n=b;break;case"defaultValue":i=b;break;case"children":r=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(x(91));break;default:Ie(e,t,l,b,a,null)}Vs(e,n,i,r),Pi(e);return;case"option":for(U in a)if(a.hasOwnProperty(U)&&(n=a[U],n!=null))switch(U){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ie(e,t,U,n,a,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(n=0;n<Di.length;n++)ze(Di[n],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(n=a[V],n!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(x(137,t));default:Ie(e,t,V,n,a,null)}return;default:if(bl(t)){for(le in a)a.hasOwnProperty(le)&&(n=a[le],n!==void 0&&is(e,t,le,n,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(n=a[b],n!=null&&Ie(e,t,b,n,a,null))}function gp(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,l=null,b=null,U=null,V=null,le=null;for(P in a){var fe=a[P];if(a.hasOwnProperty(P)&&fe!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":U=fe;default:n.hasOwnProperty(P)||Ie(e,t,P,null,n,fe)}}for(var K in n){var P=n[K];if(fe=a[K],n.hasOwnProperty(K)&&(P!=null||fe!=null))switch(K){case"type":r=P;break;case"name":i=P;break;case"checked":V=P;break;case"defaultChecked":le=P;break;case"value":l=P;break;case"defaultValue":b=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(x(137,t));break;default:P!==fe&&Ie(e,t,K,P,n,fe)}}yl(e,l,b,U,V,le,r,i);return;case"select":P=l=b=K=null;for(r in a)if(U=a[r],a.hasOwnProperty(r)&&U!=null)switch(r){case"value":break;case"multiple":P=U;default:n.hasOwnProperty(r)||Ie(e,t,r,null,n,U)}for(i in n)if(r=n[i],U=a[i],n.hasOwnProperty(i)&&(r!=null||U!=null))switch(i){case"value":K=r;break;case"defaultValue":b=r;break;case"multiple":l=r;default:r!==U&&Ie(e,t,i,r,n,U)}t=b,a=l,n=P,K!=null?yn(e,!!a,K,!1):!!n!=!!a&&(t!=null?yn(e,!!a,t,!0):yn(e,!!a,a?[]:"",!1));return;case"textarea":P=K=null;for(b in a)if(i=a[b],a.hasOwnProperty(b)&&i!=null&&!n.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(e,t,b,null,n,i)}for(l in n)if(i=n[l],r=a[l],n.hasOwnProperty(l)&&(i!=null||r!=null))switch(l){case"value":K=i;break;case"defaultValue":P=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(x(91));break;default:i!==r&&Ie(e,t,l,i,n,r)}Qs(e,K,P);return;case"option":for(var Ae in a)if(K=a[Ae],a.hasOwnProperty(Ae)&&K!=null&&!n.hasOwnProperty(Ae))switch(Ae){case"selected":e.selected=!1;break;default:Ie(e,t,Ae,null,n,K)}for(U in n)if(K=n[U],P=a[U],n.hasOwnProperty(U)&&K!==P&&(K!=null||P!=null))switch(U){case"selected":e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:Ie(e,t,U,K,n,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in a)K=a[Te],a.hasOwnProperty(Te)&&K!=null&&!n.hasOwnProperty(Te)&&Ie(e,t,Te,null,n,K);for(V in n)if(K=n[V],P=a[V],n.hasOwnProperty(V)&&K!==P&&(K!=null||P!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(x(137,t));break;default:Ie(e,t,V,K,n,P)}return;default:if(bl(t)){for(var Ze in a)K=a[Ze],a.hasOwnProperty(Ze)&&K!==void 0&&!n.hasOwnProperty(Ze)&&is(e,t,Ze,void 0,n,K);for(le in n)K=n[le],P=a[le],!n.hasOwnProperty(le)||K===P||K===void 0&&P===void 0||is(e,t,le,K,n,P);return}}for(var Z in a)K=a[Z],a.hasOwnProperty(Z)&&K!=null&&!n.hasOwnProperty(Z)&&Ie(e,t,Z,null,n,K);for(fe in n)K=n[fe],P=a[fe],!n.hasOwnProperty(fe)||K===P||K==null&&P==null||Ie(e,t,fe,K,n,P)}var rs=null,ls=null;function Qr(e){return e.nodeType===9?e:e.ownerDocument}function Wf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=null;function bp(){var e=window.event;return e&&e.type==="popstate"?e===ss?!1:(ss=e,!0):(ss=null,!1)}var Pf=typeof setTimeout=="function"?setTimeout:void 0,wp=typeof clearTimeout=="function"?clearTimeout:void 0,Ff=typeof Promise=="function"?Promise:void 0,xp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ff<"u"?function(e){return Ff.resolve(null).then(e).catch(_p)}:Pf;function _p(e){setTimeout(function(){throw e})}function Ma(e){return e==="head"}function Jf(e,t){var a=t,n=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var l=e.ownerDocument;if(a&1&&Ui(l.documentElement),a&2&&Ui(l.body),a&4)for(a=l.head,Ui(a),l=a.firstChild;l;){var b=l.nextSibling,U=l.nodeName;l[Kn]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=b}}if(i===0){e.removeChild(r),Ii(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);Ii(t)}function cs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":cs(a),hl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Sp(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Kn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=$t(e.nextSibling),e===null)break}return null}function Tp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=$t(e.nextSibling),e===null))return null;return e}function us(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ep(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fs=null;function ed(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function td(e,t,a){switch(t=Qr(a),e){case"html":if(e=t.documentElement,!e)throw Error(x(452));return e;case"head":if(e=t.head,!e)throw Error(x(453));return e;case"body":if(e=t.body,!e)throw Error(x(454));return e;default:throw Error(x(451))}}function Ui(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hl(e)}var It=new Map,ad=new Set;function Vr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=B.d;B.d={f:Ap,r:Np,D:Cp,C:Op,L:kp,m:Rp,X:Dp,S:jp,M:zp};function Ap(){var e=va.f(),t=Br();return e||t}function Np(e){var t=hn(e);t!==null&&t.tag===5&&t.type==="form"?xu(t):va.r(e)}var Vn=typeof document>"u"?null:document;function nd(e,t,a){var n=Vn;if(n&&typeof t=="string"&&t){var i=Mt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),ad.has(i)||(ad.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),pt(t,"link",e),st(t),n.head.appendChild(t)))}}function Cp(e){va.D(e),nd("dns-prefetch",e,null)}function Op(e,t){va.C(e,t),nd("preconnect",e,t)}function kp(e,t,a){va.L(e,t,a);var n=Vn;if(n&&e&&t){var i='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Mt(a.imageSizes)+'"]')):i+='[href="'+Mt(e)+'"]';var r=i;switch(t){case"style":r=$n(e);break;case"script":r=Wn(e)}It.has(r)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),It.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Mi(r))||t==="script"&&n.querySelector(Yi(r))||(t=n.createElement("link"),pt(t,"link",e),st(t),n.head.appendChild(t)))}}function Rp(e,t){va.m(e,t);var a=Vn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Mt(n)+'"][href="'+Mt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Wn(e)}if(!It.has(r)&&(e=E({rel:"modulepreload",href:e},t),It.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yi(r)))return}n=a.createElement("link"),pt(n,"link",e),st(n),a.head.appendChild(n)}}}function jp(e,t,a){va.S(e,t,a);var n=Vn;if(n&&e){var i=pn(n).hoistableStyles,r=$n(e);t=t||"default";var l=i.get(r);if(!l){var b={loading:0,preload:null};if(l=n.querySelector(Mi(r)))b.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=It.get(r))&&ds(e,a);var U=l=n.createElement("link");st(U),pt(U,"link",e),U._p=new Promise(function(V,le){U.onload=V,U.onerror=le}),U.addEventListener("load",function(){b.loading|=1}),U.addEventListener("error",function(){b.loading|=2}),b.loading|=4,$r(l,t,n)}l={type:"stylesheet",instance:l,count:1,state:b},i.set(r,l)}}}function Dp(e,t){va.X(e,t);var a=Vn;if(a&&e){var n=pn(a).hoistableScripts,i=Wn(e),r=n.get(i);r||(r=a.querySelector(Yi(i)),r||(e=E({src:e,async:!0},t),(t=It.get(i))&&hs(e,t),r=a.createElement("script"),st(r),pt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function zp(e,t){va.M(e,t);var a=Vn;if(a&&e){var n=pn(a).hoistableScripts,i=Wn(e),r=n.get(i);r||(r=a.querySelector(Yi(i)),r||(e=E({src:e,async:!0,type:"module"},t),(t=It.get(i))&&hs(e,t),r=a.createElement("script"),st(r),pt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function id(e,t,a,n){var i=(i=ge.current)?Vr(i):null;if(!i)throw Error(x(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=$n(a.href),a=pn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$n(a.href);var r=pn(i).hoistableStyles,l=r.get(e);if(l||(i=i.ownerDocument||i,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=i.querySelector(Mi(e)))&&!r._p&&(l.instance=r,l.state.loading=5),It.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},It.set(e,a),r||Up(i,e,a,l.state))),t&&n===null)throw Error(x(528,""));return l}if(t&&n!==null)throw Error(x(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wn(a),a=pn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(x(444,e))}}function $n(e){return'href="'+Mt(e)+'"'}function Mi(e){return'link[rel="stylesheet"]['+e+"]"}function rd(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Up(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),pt(t,"link",a),st(t),e.head.appendChild(t))}function Wn(e){return'[src="'+Mt(e)+'"]'}function Yi(e){return"script[async]"+e}function ld(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Mt(a.href)+'"]');if(n)return t.instance=n,st(n),n;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),st(n),pt(n,"style",i),$r(n,a.precedence,e),t.instance=n;case"stylesheet":i=$n(a.href);var r=e.querySelector(Mi(i));if(r)return t.state.loading|=4,t.instance=r,st(r),r;n=rd(a),(i=It.get(i))&&ds(n,i),r=(e.ownerDocument||e).createElement("link"),st(r);var l=r;return l._p=new Promise(function(b,U){l.onload=b,l.onerror=U}),pt(r,"link",n),t.state.loading|=4,$r(r,a.precedence,e),t.instance=r;case"script":return r=Wn(a.src),(i=e.querySelector(Yi(r)))?(t.instance=i,st(i),i):(n=a,(i=It.get(r))&&(n=E({},a),hs(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),st(i),pt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(x(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,$r(n,a.precedence,e));return t.instance}function $r(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,l=0;l<n.length;l++){var b=n[l];if(b.dataset.precedence===t)r=b;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ds(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wr=null;function od(e,t,a){if(Wr===null){var n=new Map,i=Wr=new Map;i.set(a,n)}else i=Wr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[Kn]||r[vt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var b=n.get(l);b?b.push(r):n.set(l,[r])}}return n}function sd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Mp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Bi=null;function Yp(){}function Bp(e,t,a){if(Bi===null)throw Error(x(475));var n=Bi;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=$n(a.href),r=e.querySelector(Mi(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Kr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,st(r);return}r=e.ownerDocument||e,a=rd(a),(i=It.get(i))&&ds(a,i),r=r.createElement("link"),st(r);var l=r;l._p=new Promise(function(b,U){l.onload=b,l.onerror=U}),pt(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Kr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Hp(){if(Bi===null)throw Error(x(475));var e=Bi;return e.stylesheets&&e.count===0&&ps(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&ps(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Kr(){if(this.count--,this.count===0){if(this.stylesheets)ps(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pr=null;function ps(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pr=new Map,t.forEach(Lp,e),Pr=null,Kr.call(e))}function Lp(e,t){if(!(t.state.loading&4)){var a=Pr.get(e);if(a)var n=a.get(null);else{a=new Map,Pr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var l=i[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(a.set(l.dataset.precedence,l),n=l)}n&&a.set(null,n)}i=t.instance,l=i.getAttribute("data-precedence"),r=a.get(l)||n,r===n&&a.set(null,i),a.set(l,i),this.count++,n=Kr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Hi={$$typeof:M,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function qp(e,t,a,n,i,r,l,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.hiddenUpdates=cn(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function ud(e,t,a,n,i,r,l,b,U,V,le,fe){return e=new qp(e,t,a,l,b,U,V,fe),t=1,r===!0&&(t|=24),r=Nt(3,null,null,t),e.current=r,r.stateNode=e,t=$l(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},Fl(r),e}function fd(e){return e?(e=An,e):An}function dd(e,t,a,n,i,r){i=fd(i),n.context===null?n.context=i:n.pendingContext=i,n=Sa(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=Ta(e,n,t),a!==null&&(jt(a,e,t),mi(a,e,t))}function hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ms(e,t){hd(e,t),(e=e.alternate)&&hd(e,t)}function pd(e){if(e.tag===13){var t=En(e,67108864);t!==null&&jt(t,e,67108864),ms(e,67108864)}}var Fr=!0;function Gp(e,t,a,n){var i=X.T;X.T=null;var r=B.p;try{B.p=2,vs(e,t,a,n)}finally{B.p=r,X.T=i}}function Ip(e,t,a,n){var i=X.T;X.T=null;var r=B.p;try{B.p=8,vs(e,t,a,n)}finally{B.p=r,X.T=i}}function vs(e,t,a,n){if(Fr){var i=ys(n);if(i===null)ns(e,t,n,Jr,a),vd(e,n);else if(Xp(i,e,t,a,n))n.stopPropagation();else if(vd(e,n),t&4&&-1<Zp.indexOf(e)){for(;i!==null;){var r=hn(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=Zt(r.pendingLanes);if(l!==0){var b=r;for(b.pendingLanes|=2,b.entangledLanes|=2;l;){var U=1<<31-Qe(l);b.entanglements[1]|=U,l&=~U}Jt(r),(He&6)===0&&(Mr=D()+500,ji(0))}}break;case 13:b=En(r,2),b!==null&&jt(b,r,2),Br(),ms(r,2)}if(r=ys(n),r===null&&ns(e,t,n,Jr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else ns(e,t,n,null,a)}}function ys(e){return e=xl(e),gs(e)}var Jr=null;function gs(e){if(Jr=null,e=dn(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=c(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jr=e,null}function md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(O()){case I:return 2;case he:return 8;case pe:case $:return 32;case me:return 268435456;default:return 32}default:return 32}}var bs=!1,Ya=null,Ba=null,Ha=null,Li=new Map,qi=new Map,La=[],Zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vd(e,t){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(t.pointerId)}}function Gi(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=hn(t),t!==null&&pd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xp(e,t,a,n,i){switch(t){case"focusin":return Ya=Gi(Ya,e,t,a,n,i),!0;case"dragenter":return Ba=Gi(Ba,e,t,a,n,i),!0;case"mouseover":return Ha=Gi(Ha,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return Li.set(r,Gi(Li.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,qi.set(r,Gi(qi.get(r)||null,e,t,a,n,i)),!0}return!1}function yd(e){var t=dn(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=c(a),t!==null){e.blockedOn=t,Bd(e.priority,function(){if(a.tag===13){var n=Rt();n=ul(n);var i=En(a,n);i!==null&&jt(i,a,n),ms(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function el(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ys(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);wl=n,a.target.dispatchEvent(n),wl=null}else return t=hn(a),t!==null&&pd(t),e.blockedOn=a,!1;t.shift()}return!0}function gd(e,t,a){el(e)&&a.delete(t)}function Qp(){bs=!1,Ya!==null&&el(Ya)&&(Ya=null),Ba!==null&&el(Ba)&&(Ba=null),Ha!==null&&el(Ha)&&(Ha=null),Li.forEach(gd),qi.forEach(gd)}function tl(e,t){e.blockedOn===t&&(e.blockedOn=null,bs||(bs=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,Qp)))}var al=null;function bd(e){al!==e&&(al=e,y.unstable_scheduleCallback(y.unstable_NormalPriority,function(){al===e&&(al=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(gs(n||a)===null)continue;break}var r=hn(a);r!==null&&(e.splice(t,3),t-=3,go(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Ii(e){function t(U){return tl(U,e)}Ya!==null&&tl(Ya,e),Ba!==null&&tl(Ba,e),Ha!==null&&tl(Ha,e),Li.forEach(t),qi.forEach(t);for(var a=0;a<La.length;a++){var n=La[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)yd(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],l=i[xt]||null;if(typeof r=="function")l||bd(a);else if(l){var b=null;if(r&&r.hasAttribute("formAction")){if(i=r,l=r[xt]||null)b=l.formAction;else if(gs(i)!==null)continue}else b=l.action;typeof b=="function"?a[n+1]=b:(a.splice(n,3),n-=3),bd(a)}}}function ws(e){this._internalRoot=e}nl.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));var a=t.current,n=Rt();dd(a,n,e,t,null,null)},nl.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dd(e.current,2,null,e,null,null),Br(),t[fn]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Us();e={blockedOn:null,target:e,priority:t};for(var a=0;a<La.length&&t!==0&&t<La[a].priority;a++);La.splice(a,0,e),a===0&&yd(e)}};var wd=z.version;if(wd!=="19.1.0")throw Error(x(527,wd,"19.1.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=v(t),e=e!==null?f(e):null,e=e===null?null:e.stateNode,e};var Vp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{_e=il.inject(Vp),ke=il}catch{}}return Xi.createRoot=function(e,t){if(!A(e))throw Error(x(299));var a=!1,n="",i=Uu,r=Mu,l=Yu,b=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=ud(e,1,!1,null,null,a,n,i,r,l,b,null),e[fn]=t.current,as(e),new ws(t)},Xi.hydrateRoot=function(e,t,a){if(!A(e))throw Error(x(299));var n=!1,i="",r=Uu,l=Mu,b=Yu,U=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(U=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),t=ud(e,1,!0,t,a??null,n,i,r,l,b,U,V),t.context=fd(null),a=t.current,n=Rt(),n=ul(n),i=Sa(n),i.callback=null,Ta(a,i,n),a=n,t.current.lanes=a,Xt(t,a),Jt(t),e[fn]=t.current,as(e),new nl(t)},Xi.version="19.1.0",Xi}var kd;function nm(){if(kd)return Ss.exports;kd=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(z){console.error(z)}}return y(),Ss.exports=am(),Ss.exports}var im=nm();const rm=[{value:"ar",label:"Arabic (ar)"},{value:"ar-SA",label:"Arabic - Saudi Arabia (ar-SA)"},{value:"eu",label:"Basque (eu)"},{value:"eu-ES",label:"Basque - Spain (eu-ES)"},{value:"zh",label:"Chinese (zh)"},{value:"zh-Hans",label:"Chinese - Simplified (zh-Hans)"},{value:"zh-Hant",label:"Chinese - Traditional (zh-Hant)"},{value:"zh-CN",label:"Chinese - China (zh-CN)"},{value:"zh-TW",label:"Chinese - Taiwan (zh-TW)"},{value:"nl",label:"Dutch (nl)"},{value:"nl-NL",label:"Dutch - Netherlands (nl-NL)"},{value:"en",label:"English (en)"},{value:"en-AU",label:"English - Australia (en-AU)"},{value:"en-CA",label:"English - Canada (en-CA)"},{value:"en-GB",label:"English - United Kingdom (en-GB)"},{value:"en-IE",label:"English - Ireland (en-IE)"},{value:"en-US",label:"English - United States (en-US)"},{value:"fr",label:"French (fr)"},{value:"fr-CA",label:"French - Canada (fr-CA)"},{value:"fr-FR",label:"French - France (fr-FR)"},{value:"de",label:"German (de)"},{value:"de-DE",label:"German - Germany (de-DE)"},{value:"hi",label:"Hindi (hi)"},{value:"hi-IN",label:"Hindi - India (hi-IN)"},{value:"it",label:"Italian (it)"},{value:"it-IT",label:"Italian - Italy (it-IT)"},{value:"ja",label:"Japanese (ja)"},{value:"ja-JP",label:"Japanese - Japan (ja-JP)"},{value:"ko",label:"Korean (ko)"},{value:"ko-KR",label:"Korean - South Korea (ko-KR)"},{value:"pt",label:"Portuguese (pt)"},{value:"pt-BR",label:"Portuguese - Brazil (pt-BR)"},{value:"pt-PT",label:"Portuguese - Portugal (pt-PT)"},{value:"es",label:"Spanish (es)"},{value:"es-ES",label:"Spanish - Spain (es-ES)"},{value:"es-MX",label:"Spanish - Mexico (es-MX)"},{value:"sv",label:"Swedish (sv)"},{value:"sv-FI",label:"Swedish - Finland (sv-FI)"},{value:"gl",label:"Galician (gl)"},{value:"gl-ES",label:"Galician - Spain (gl-ES)"},{value:"th",label:"Thai (th)"},{value:"th-TH",label:"Thai - Thailand (th-TH)"},{value:"vi",label:"Vietnamese (vi)"},{value:"ru",label:"Russian (ru)"},{value:"ru-RU",label:"Russian - Russia (ru-RU)"}],lm=[{value:"system",label:"System Default"},{value:"Arial, sans-serif",label:"Arial"},{value:"Helvetica, Arial, sans-serif",label:"Helvetica"},{value:"Verdana, Geneva, sans-serif",label:"Verdana"},{value:"Tahoma, Geneva, sans-serif",label:"Tahoma"},{value:"'Trebuchet MS', Helvetica, sans-serif",label:"Trebuchet MS"},{value:"'Arial Black', Gadget, sans-serif",label:"Arial Black"},{value:"Impact, Charcoal, sans-serif",label:"Impact"},{value:"'Lucida Sans Unicode', 'Lucida Grande', sans-serif",label:"Lucida Sans"},{value:"Georgia, serif",label:"Georgia"},{value:"'Times New Roman', Times, serif",label:"Times New Roman"},{value:"'Book Antiqua', Palatino, serif",label:"Book Antiqua"},{value:"Palatino, 'Palatino Linotype', serif",label:"Palatino"},{value:"Times, serif",label:"Times"},{value:"'Courier New', Courier, monospace",label:"Courier New"},{value:"'Lucida Console', Monaco, monospace",label:"Lucida Console"},{value:"Monaco, 'Menlo', monospace",label:"Monaco"},{value:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",label:"System UI"},{value:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",label:"Segoe UI (Windows)"},{value:"-apple-system, 'SF Pro Display', sans-serif",label:"SF Pro (Apple)"},{value:"'Roboto', Arial, sans-serif",label:"Roboto"},{value:"'Open Sans', Arial, sans-serif",label:"Open Sans"},{value:"'Lato', Arial, sans-serif",label:"Lato"},{value:"'Montserrat', Arial, sans-serif",label:"Montserrat"},{value:"'Poppins', Arial, sans-serif",label:"Poppins"},{value:"'Inter', Arial, sans-serif",label:"Inter"}],om="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let sm=(y=21)=>{let z="",w=crypto.getRandomValues(new Uint8Array(y|=0));for(;y--;)z+=om[w[y]&63];return z};function cm({formData:y,onImageInsert:z}){const[w,x]=Ke.useState({imageSize:"1024x1024"}),[A,m]=Ke.useState(!1),[c,d]=Ke.useState(null),[v,f]=Ke.useState("none"),[E,k]=Ke.useState(null),[S,g]=Ke.useState(null),[h,u]=Ke.useState(""),[T,_]=Ke.useState("none"),[C,M]=Ke.useState(""),[q,H]=Ke.useState(null),ne=B=>{if(!B)return null;const se=/<h2[^>]*>(.*?)<\/h2>/gi,F=[];let N;const j=[];for(;(N=se.exec(B))!==null;)j.push({heading:N[1].replace(/<[^>]*>/g,"").trim(),startIndex:N.index,endIndex:N.index+N[0].length});for(let oe=0;oe<j.length;oe++){const ge=j[oe],Me=j[oe+1],xe=ge.endIndex,Ce=Me?Me.startIndex:B.length,We=B.substring(xe,Ce),qe=/^\s*<img[^>]*>/i.test(We),mt=/<p[^>]*>(.*?)<\/p>/gi,nt=[];let s;for(;(s=mt.exec(We))!==null;){const ce=s[1].replace(/<[^>]*>/g,"").trim();ce.length>0&&nt.push(ce)}nt.length>0&&F.push({heading:ge.heading,paragraphs:nt,fullText:ge.heading+" "+nt.join(" "),htmlStartPos:ge.startIndex,htmlEndPos:Ce,hasImage:qe})}if(F.length===0)return console.log("No sections with paragraphs found"),null;let te=F.slice(0,3).filter(oe=>!oe.hasImage);return te.length===0&&(te=F.filter(oe=>!oe.hasImage)),te.length===0?(console.log("All sections already have images!"),{allHaveImages:!0}):te[Math.floor(Math.random()*te.length)]},J=(B,{id:se=null,floatValue:F=v,altValue:N=B.alt}={})=>{let j="img-fluid rounded";switch(F){case"start":j+=" float-md-start mb-2 mb-md-0 me-md-3 d-block mx-auto";break;case"end":j+=" float-md-end mb-2 mb-md-0 ms-md-3 d-block mx-auto";break;case"center":j+=" d-block mx-auto mb-2";break;default:j+=" mb-2";break}const Y=N&&N.trim().length>0?N.trim():"Image alt",te=se?` data-ai-id="${se}"`:"";return`<img src="${B.url}" alt="${Y}" class="${j}"${te} width="320" height="320">`},de=B=>{let se;if(!B)se="Image";else if(se=`Image related to ${B.heading}`,B.paragraphs&&B.paragraphs.length>0){const N=B.paragraphs.slice(0,2).join(" "),j=200,Y=N.length>j?N.substring(0,j)+"...":N;se+=`, showing ${Y}`}return se.length>800&&(se=se.substring(0,797)+"..."),se},G=B=>!B||!B.heading?"":B.heading.toLowerCase().replace(/[^a-zA-Z0-9\s]/g,"").replace(/\s+/g,"-").substring(0,30),re=async()=>{if(!y.mainContent||A){y.mainContent||alert("Please add some content to your page first.");return}m(!0);try{let B=null;if(y.mainContent){if(B=ne(y.mainContent),B&&B.allHaveImages){alert("All sections already have an image under their heading. Remove an existing image first to add a new one."),m(!1);return}if(!B){alert("No suitable sections found for image generation. Please add some headings and paragraphs to your content."),m(!1);return}k(B)}const se=de(B),F=await fetch("https://one-page-builder.vercel.app/api/images",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:se,size:w.imageSize||"1024x1024",enhancePrompt:!0})});if(!F.ok){const ie=await F.json();throw new Error(ie.error||"Failed to generate image")}const N=await F.json(),j=N.data[0].b64_json,Y=`data:image/jpeg;base64,${j}`;console.log("📝 Original prompt:",N.data[0].original_prompt),console.log("✨ Enhanced prompt:",N.data[0].revised_prompt);const te=G(B);M(te),d({url:Y,prompt:N.data[0].revised_prompt,originalPrompt:N.data[0].original_prompt,b64_json:j,alt:`Image for ${B.heading}`}),console.log("Image generated successfully with enhanced prompt")}catch(B){console.error("Image generation error:",B),alert("Error generating image: "+B.message)}m(!1)},ye=()=>{const B=Date.now();if(C&&C.trim()){const se=C.trim().replace(/[^a-zA-Z0-9\-_]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"").toLowerCase();return se?`${se}.jpg`:`ai-image-${B}.jpg`}return`ai-image-${B}.jpg`},R=()=>C&&C.trim().length>0,W=B=>{if(!R()){alert("Please enter a custom image name before inserting.");return}const se=y.mainContent||"",F=sm(),N={id:F,filename:ye(),b64_json:B.b64_json,prompt:B.prompt,alt:"",isTemporary:!0},j=J({url:`data:image/jpeg;base64,${B.b64_json}`,alt:""},{id:F,floatValue:"none",altValue:""});if(E&&E.heading){const te=E.heading,ie=new RegExp(`(<h2[^>]*>\\s*${te.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}\\s*</h2>)`,"i");if(ie.test(se)){const oe=se.replace(ie,`$1
${j}`);z(oe),d(null),k(null),g(F),u(""),_(v),H(N);return}}const Y=se+`
`+j;z(Y),g(F),u(""),_(v),d(null),k(null),H(N)},p=()=>{if(!q){console.log("No temporary image data to save");return}const B={...q,alt:h||q.alt,isTemporary:!1};z(y.mainContent,B),console.log("✅ Image saved to files:",B.filename),H(null),g(null),u(""),_("none"),M("")},ee=()=>{if(!S)return;const B=y.mainContent||"",se=new RegExp(`<img[^>]*data-ai-id=["']${S}["'][^>]*>`,"i"),F=B.match(se);if(!F)return;const N=F[0].match(/src=["']([^"']+)["']/i),j=N?N[1]:"",Y=J({url:j,alt:h},{id:S,floatValue:T,altValue:h}),te=B.replace(se,Y);z(te),q&&H({...q,alt:h})},X=()=>{if(!S)return;const B=y.mainContent||"",se=new RegExp(`<img[^>]*data-ai-id=["']${S}["'][^>]*>`,"i"),F=B.replace(se,"");z(F),g(null),u(""),_("none"),H(null),M("")};return o.jsxs("div",{className:"ai-image-generator",children:[o.jsx("h3",{children:"AI Image Generator"}),o.jsx("button",{type:"button",className:"btn btn-primary",onClick:re,disabled:!0,title:y.mainContent?A?"Generating image...":"Generate AI image":"Add content to your page first",children:A?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Generating..."]}):"🎨 Generate Image"}),c&&o.jsxs("div",{className:"mt-4",children:[o.jsx("h4",{children:"Generated Image"}),E&&o.jsxs("div",{className:"alert alert-info mb-3",children:[o.jsx("h6",{className:"mb-2",children:"📍 This image will be added to section:"}),o.jsxs("strong",{children:['"',E.heading,'"']}),E.paragraphs&&E.paragraphs.length>0&&o.jsxs("p",{className:"mb-0 mt-2 text-muted small",children:[E.paragraphs[0].substring(0,100),E.paragraphs[0].length>100?"...":""]})]}),o.jsxs("div",{className:"generated-image-preview",children:[o.jsx("img",{src:c.url,alt:"Generated image",style:{maxWidth:"100%",maxHeight:"320px"},className:"img-fluid border rounded mb-3"}),o.jsxs("div",{className:"mb-3",children:[o.jsxs("label",{className:"form-label",children:["Custom Image Name ",o.jsx("span",{className:"text-danger",children:"*"}),o.jsx("small",{className:"text-muted ms-2",children:"(required to insert)"})]}),o.jsx("input",{type:"text",className:`form-control ${C.trim()?"is-valid":C?"is-invalid":""}`,value:C,onChange:B=>M(B.target.value),placeholder:"e.g., hero-banner, casino-games, payment-methods",maxLength:"50",required:!0}),C&&!C.trim()&&o.jsx("div",{className:"invalid-feedback",children:"Image name cannot be empty or just spaces."}),C.trim()&&o.jsxs("div",{className:"valid-feedback",children:["Filename: ",o.jsx("code",{children:ye()})]}),!C&&o.jsx("small",{className:"form-text text-muted",children:"Choose a descriptive name based on the section content"})]}),o.jsxs("div",{className:"d-flex gap-2",children:[o.jsxs("button",{className:"btn btn-success",onClick:()=>W(c),disabled:!R(),title:R()?"Insert image into section":"Enter a custom image name first",children:["✅ Insert Image",!R()&&o.jsx("span",{className:"text-muted ms-1",children:"(Name Required)"})]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>{d(null),M(""),k(null)},children:"❌ Discard"})]})]})]}),S&&!c&&o.jsxs("div",{className:"mt-4 border rounded p-3",children:[o.jsx("h5",{children:"Edit Inserted Image"}),o.jsx("div",{className:"alert alert-warning mb-3",children:o.jsxs("small",{children:["📝 ",o.jsx("strong",{children:"Preview Mode:"}),' This image is only visible in preview. Click "Save to Files" to include it in your downloaded website.']})}),o.jsxs("div",{className:"row g-3",children:[o.jsxs("div",{className:"col-md-6",children:[o.jsx("label",{className:"form-label",children:"Alt text"}),o.jsx("input",{className:"form-control",value:h,onChange:B=>u(B.target.value),placeholder:"Accessible alt text"})]}),o.jsxs("div",{className:"col-md-4",children:[o.jsx("label",{className:"form-label",children:"Float"}),o.jsxs("select",{className:"form-control",value:T,onChange:B=>_(B.target.value),children:[o.jsx("option",{value:"none",children:"Default"}),o.jsx("option",{value:"start",children:"Left"}),o.jsx("option",{value:"end",children:"Right"}),o.jsx("option",{value:"center",children:"Center"})]})]}),o.jsx("div",{className:"col-md-2 d-flex align-items-end",children:o.jsx("button",{className:"btn btn-primary w-100",onClick:ee,children:"Apply"})})]}),o.jsxs("div",{className:"mt-3 d-flex gap-2",children:[o.jsx("button",{className:"btn btn-success",onClick:p,disabled:!q,title:"Save image to files for download",children:"💾 Save to Files"}),o.jsx("button",{className:"btn btn-outline-danger",onClick:X,children:"🗑️ Remove from Preview"})]}),o.jsxs("small",{className:"text-muted d-block mt-2",children:["• Editing image with id: ",S,o.jsx("br",{}),"• Status: ",q?"Preview only":"Not saved",q&&o.jsxs(o.Fragment,{children:[o.jsx("br",{}),"• Filename when saved:"," ",o.jsx("code",{children:q.filename})]})]})]})]})}function um({formData:y,setFormData:z,globalSettings:w,setGlobalSettings:x,currentPage:A,onImageInsert:m}){const[c,d]=Ke.useState("page"),v=(h,u=null)=>{m?m(h,u):z(T=>({...T,mainContent:h}))},f=(h,u)=>{x(T=>({...T,[h]:u}))},E=(h,u)=>{z(T=>({...T,[h]:u}))},k=(h,u)=>{if(u){const T=new FileReader;T.onload=_=>{h==="logo"?f("logo",_.target.result):h==="favicon"?(f("favicon",_.target.result),f("faviconName",u.name)):h==="heroBg"&&f("heroBg",_.target.result)},T.readAsDataURL(u)}},S=()=>{if(!y.mainContent||!y.boldWords)return;let h=y.mainContent;y.boldWords.split(",").map(T=>T.trim()).filter(T=>T.length>0).forEach(T=>{const _=T.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),C=new RegExp(`(?<!<[^>]*>)(?<!<h[1-6][^>]*>)(?<!<h[1-6][^>]*>[^<]*)\\b(${_})\\b(?![^<]*</h[1-6]>)(?![^<]*>)(?!</strong>)`,"gi"),M=[];let q;for(;(q=C.exec(h))!==null;)M.push({match:q[0],index:q.index,length:q[0].length}),C.lastIndex===q.index&&C.lastIndex++;if(M.length>0){console.log(`🎲 Found ${M.length} occurrences of "${T}"`);const H=Math.floor(Math.random()*M.length),ne=M[H];console.log(`🎯 Selected occurrence #${H+1} at position ${ne.index}`);const J=h.substring(0,ne.index),de=h.substring(ne.index+ne.length),G=`<strong>${ne.match}</strong>`;h=J+G+de}}),E("mainContent",h),E("boldWords","")},g=h=>{const T=(_=>!_||_.trim()===""?"":/<[^>]+>/.test(_)?_:_.split(`
`).map(M=>M.trim()).filter(M=>M!=="").map(M=>`<p>${M}</p>`).join(`
`))(h);E("afterH1",T)};return o.jsxs("div",{className:"builder-form",children:[o.jsxs("div",{className:"form-tabs",children:[o.jsx("button",{className:`tab-btn ${c==="page"?"active":""}`,onClick:()=>d("page"),children:"Page Content"}),o.jsx("button",{className:`tab-btn ${c==="global"?"active":""}`,onClick:()=>d("global"),children:"Global Settings"}),o.jsx("button",{className:`tab-btn ${c==="style"?"active":""}`,onClick:()=>d("style"),children:"Styling"}),o.jsx("button",{className:`tab-btn ${c==="ai-images"?"active":""}`,onClick:()=>d("ai-images"),children:"AI Images"}),o.jsx("button",{className:`tab-btn ${c==="privacy"?"active":""}`,onClick:()=>d("privacy"),children:"Privacy or Terms"})]}),c==="page"&&o.jsxs("div",{className:"tab-content",children:[o.jsxs("h3",{children:[(A==null?void 0:A.title)||"Page"," Content"]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Page Title (SEO)"}),o.jsx("input",{type:"text",className:"form-control",value:y.title||"",onChange:h=>E("title",h.target.value),placeholder:"Page title for browser tab and SEO"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Meta Description"}),o.jsx("textarea",{className:"form-control",rows:"2",value:y.desc||"",onChange:h=>E("desc",h.target.value),placeholder:"Brief description for search engines"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Heading (H1)"}),o.jsx("input",{type:"text",className:"form-control",value:y.h1||"",onChange:h=>E("h1",h.target.value),placeholder:"Main heading that visitors see first"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Subtext"}),o.jsx("textarea",{className:"form-control",rows:"3",value:y.afterH1||"",onChange:h=>g(h.target.value),placeholder:"Text that appears below the main heading"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("label",{children:["Main Content(The content must be valid HTML. For example:"," ",o.jsx("code",{children:"<h2>Heading</h2>"}),")"]}),o.jsx("textarea",{className:"form-control",rows:"12",value:y.mainContent||"",onChange:h=>E("mainContent",h.target.value),placeholder:"HTML content for this page (use <h2> for sections, <p> for paragraphs)"}),o.jsx("small",{className:"form-text text-muted",children:"Use HTML tags like <h2>Section Title</h2> and <p>Paragraph text</p>"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Bold Words (Optional)"}),o.jsx("input",{type:"text",className:"form-control",value:y.boldWords||"",onChange:h=>E("boldWords",h.target.value),placeholder:"Enter words to make bold, one by one or separated by commas (e.g., important, featured, special)"}),o.jsx("small",{className:"form-text text-muted",children:"Type words one by one or all separated by commas. Only the first occurrence of each word will be bolded."}),o.jsx("button",{type:"button",className:"btn btn-sm btn-secondary mt-2 ms-2",onClick:S,disabled:!y.mainContent||!y.boldWords,children:"Apply Bold Words"})]})]}),c==="global"&&o.jsxs("div",{className:"tab-content",children:[o.jsx("h3",{children:"Global Settings"}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Website Domain name"}),o.jsx("input",{type:"text",className:"form-control",value:w.domain||"",onChange:h=>f("domain",h.target.value),placeholder:"yourdomain.com"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Website full URL"}),o.jsx("input",{type:"text",className:"form-control",value:w.url||"",onChange:h=>f("url",h.target.value),placeholder:"Enter your website URL (e.g., https://yourdomain.com)"}),o.jsx("small",{className:"form-text text-muted",children:"The url will be used in the robots.txt, sitemap and htaccess files also."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Website Name"}),o.jsx("input",{type:"text",className:"form-control",value:w.name||"",onChange:h=>f("name",h.target.value),placeholder:"Your Website Name"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Website Language"}),o.jsx("select",{className:"form-control",value:w.lang||"en",onChange:h=>f("lang",h.target.value),children:rm.map(h=>o.jsx("option",{value:h.value,children:h.label},h.value))}),o.jsx("small",{className:"form-text text-muted",children:"Select the language code for your website"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Website Email"}),o.jsx("input",{type:"email",className:"form-control",value:w.email||"",onChange:h=>f("email",h.target.value),placeholder:"Website contact email"}),o.jsx("small",{className:"form-text text-muted",children:"This email will be used in footer and Terms or Privacy pages."})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"checkbox",checked:w.sidebar||!1,onChange:h=>f("sidebar",h.target.checked),id:"sidebarCheckbox"}),o.jsx("label",{className:"form-check-label ",htmlFor:"sidebarCheckbox",children:"Enable Sidebar"})]}),o.jsx("small",{className:"form-text text-muted",children:"Check to display a sidebar on all pages. Default is off."})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"checkbox",checked:w.contactPage||!1,onChange:h=>f("contactPage",h.target.checked),id:"contactPageCheckbox"}),o.jsx("label",{className:"form-check-label ",htmlFor:"contactPageCheckbox",children:"Add Contact Page"})]}),o.jsx("small",{className:"form-text text-muted",children:"Check to add a contact page. Default is off."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Logo"}),o.jsx("input",{type:"file",className:"form-control",accept:"image/*",onChange:h=>k("logo",h.target.files[0])}),w.logo&&o.jsxs("div",{className:"file-preview",children:[o.jsx("img",{src:w.logo,alt:"Logo",style:{maxWidth:"180px",maxHeight:"90px"}}),o.jsx("button",{type:"button",className:"btn btn-sm btn-danger ms-2",onClick:()=>f("logo",""),children:"Remove"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Favicon"}),o.jsx("input",{type:"file",className:"form-control",accept:"image/*",onChange:h=>k("favicon",h.target.files[0])}),w.favicon&&o.jsxs("div",{className:"file-preview",children:[o.jsx("img",{src:w.favicon,alt:"Favicon",style:{maxWidth:"48px",maxHeight:"48px"}}),o.jsx("span",{className:"ms-2",children:w.faviconName}),o.jsx("button",{type:"button",className:"btn btn-sm btn-danger ms-2",onClick:()=>{f("favicon",""),f("faviconName","")},children:"Remove"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Background Image (All Pages)"}),o.jsx("input",{type:"file",className:"form-control",accept:"image/*",onChange:h=>k("heroBg",h.target.files[0])}),w.heroBg&&o.jsxs("div",{className:"file-preview",children:[o.jsx("img",{src:w.heroBg,alt:"Hero background",style:{maxWidth:"180px",maxHeight:"110px"}}),o.jsx("button",{type:"button",className:"btn btn-sm btn-danger ms-2",onClick:()=>f("heroBg",""),children:"Remove"})]})]})]}),c==="style"&&o.jsxs("div",{className:"tab-content",children:[o.jsx("h3",{children:"Global Styling"}),o.jsx("p",{className:"text-muted",children:"These styles apply to all pages"}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Font Family"}),o.jsx("select",{className:"form-control",value:w.fontFamily||"system",onChange:h=>f("fontFamily",h.target.value),children:lm.map(h=>o.jsx("option",{value:h.value,children:h.label},h.value))})]}),o.jsxs("div",{className:"style-section",children:[o.jsx("h4",{className:"section-title",children:"Header"}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-lg-9",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Navigation style:"}),o.jsxs("select",{className:"form-control",value:w.navStyle||"1",onChange:h=>f("navStyle",h.target.value),children:[o.jsx("option",{value:"1",children:"1"}),o.jsx("option",{value:"2",children:"2"}),o.jsx("option",{value:"3",children:"3"}),o.jsx("option",{value:"4",children:"4"})]})]})}),o.jsx("div",{className:"col-lg-3",children:o.jsx("div",{className:"form-group",children:o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"checkbox",checked:w.stickyNavbar||!1,onChange:h=>f("stickyNavbar",h.target.checked)}),o.jsx("label",{className:"form-check-label",children:"Sticky Navigation Bar"})]})})}),o.jsx("div",{className:"col-lg-4 col-xl-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Navigation Background Color"}),o.jsx("input",{type:"color",className:"form-control",value:w.headerBgColor||"#ffffff",onChange:h=>f("headerBgColor",h.target.value)})]})}),o.jsx("div",{className:"col-lg-4 col-xl-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Text Color"}),o.jsx("input",{type:"color",className:"form-control",value:w.headerTextColor||"#ffffff",onChange:h=>f("headerTextColor",h.target.value)})]})}),o.jsx("div",{className:"col-lg-4 col-xl-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Gradient Color 1"}),o.jsx("input",{type:"color",className:"form-control",value:w.heroGradient1||"#168295",onChange:h=>f("heroGradient1",h.target.value)})]})}),o.jsx("div",{className:"col-lg-4 col-xl-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Hero Gradient Color 2"}),o.jsx("input",{type:"color",className:"form-control",value:w.heroGradient2||"#0b5e3a",onChange:h=>f("heroGradient2",h.target.value)})]})}),o.jsx("div",{className:"col-lg-4 col-xl-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Nav links color"}),o.jsx("input",{type:"color",className:"form-control",value:w.navLinkColor||"#222222",onChange:h=>f("navLinkColor",h.target.value)})]})})]})]}),o.jsxs("div",{className:"style-section",children:[o.jsx("h4",{className:"section-title",children:"Main Content"}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-xl-3 col-lg-6",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Body Background Color"}),o.jsx("input",{type:"color",className:"form-control",value:w.bodyBgColor||"#f8fafc",onChange:h=>f("bodyBgColor",h.target.value)})]})}),o.jsx("div",{className:"col-xl-3 col-lg-6",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Body Text Color"}),o.jsx("input",{type:"color",className:"form-control",value:w.bodyTextColor||"#222222",onChange:h=>f("bodyTextColor",h.target.value)})]})}),o.jsx("div",{className:"col-xl-3 col-lg-6",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Headings Color"}),o.jsx("input",{type:"color",className:"form-control",value:w.headingColor||"#222222",onChange:h=>f("headingColor",h.target.value)})]})}),o.jsx("div",{className:"col-xl-3 col-lg-6",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Link Color"}),o.jsx("input",{type:"color",className:"form-control",value:w.linkColor||"#2563eb",onChange:h=>f("linkColor",h.target.value)})]})}),o.jsx("div",{className:"col-12",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"H2 Styles"}),o.jsxs("select",{className:"form-control",value:w.headingsStyle||"1",onChange:h=>f("headingsStyle",h.target.value),children:[o.jsx("option",{value:"1",children:"None"}),o.jsx("option",{value:"2",children:"Underline"}),o.jsx("option",{value:"3",children:"Dashed underline"}),o.jsx("option",{value:"4",children:"Top and bottom lines"}),o.jsx("option",{value:"5",children:"Left border"}),o.jsx("option",{value:"6",children:"Lines on both sides"})]})]})})]})]}),o.jsxs("div",{className:"style-section",children:[o.jsx("h4",{className:"section-title",children:"Footer"}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-lg-9",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Footer Style:"}),o.jsxs("select",{className:"form-control",value:w.footerStyle||"1",onChange:h=>f("footerStyle",h.target.value),children:[o.jsx("option",{value:"1",children:"Style 1"}),o.jsx("option",{value:"2",children:"Style 2"}),o.jsx("option",{value:"3",children:"Style 3"})]})]})}),o.jsx("div",{className:"col-lg-3",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Scroll to top button:"}),o.jsx("input",{className:"form-check-input",type:"checkbox",checked:w.scrollToTop||!1,onChange:h=>f("scrollToTop",h.target.checked)})]})}),o.jsx("div",{className:"col-lg-4",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"White logo"}),o.jsx("input",{className:"form-check-input",type:"checkbox",checked:w.whiteLogo||!1,onChange:h=>f("whiteLogo",h.target.checked),id:"whiteLogoCheckbox"})]})}),o.jsx("div",{className:"col-lg-4",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Footer Background Color"}),o.jsx("input",{type:"color",className:"form-control",value:w.footerBgColor||"#0d0d0d",onChange:h=>f("footerBgColor",h.target.value)})]})}),o.jsx("div",{className:"col-lg-4",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Footer Text Color"}),o.jsx("input",{type:"color",className:"form-control",value:w.footerTextColor||"#ffffff",onChange:h=>f("footerTextColor",h.target.value)})]})})]})]})]}),c==="ai-images"&&o.jsx("div",{className:"tab-content",children:o.jsx(cm,{formData:y,onImageInsert:v})}),c==="privacy"&&o.jsxs("div",{className:"tab-content",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Select Page Type"}),o.jsxs("select",{className:"form-control",value:w.privacyOrTerms||"privacy",onChange:h=>f("privacyOrTerms",h.target.value),children:[o.jsx("option",{value:"privacy",children:"Privacy Policy"}),o.jsx("option",{value:"terms",children:"Terms & Conditions"})]})]}),o.jsx("div",{children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Country"}),o.jsx("input",{type:"text",className:"form-control",value:w.country||"",onChange:h=>f("country",h.target.value),placeholder:"Enter country (e.g., United States)"})]})}),o.jsx("div",{children:w.privacyOrTerms==="privacy"?o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Choose privacy style type"}),o.jsxs("select",{className:"form-control",value:w.privacyOption||"1",onChange:h=>f("privacyOption",h.target.value),children:[o.jsx("option",{value:"1",children:"1"}),o.jsx("option",{value:"2",children:"2"})]})]}):o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Choose terms style type"}),o.jsxs("select",{className:"form-control",value:w.termsOption||"1",onChange:h=>f("termsOption",h.target.value),children:[o.jsx("option",{value:"1",children:"1"}),o.jsx("option",{value:"2",children:"2"})]})]})})]})]})}function Rd(y,z){return`
        <nav class="navbar navbar-expand-xl navbar-light${y.stickyNavbar?" sticky-top":""}">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${y.logo?"/images/logo.svg":"https://placehold.co/220x50"}" alt="${y.name||y.domain||"Domain"}" width="220" height="50">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        ${z}
      </ul>
    </div>
  </div>
</nav>
    `}function jd(y,z){return`
<section class="${y.heroBg?"hero-section with-bg":"hero-section gradient-bg"}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          ${z.formData.h1||z.title}
        </h1>
        ${z.formData.afterH1?`<div>${z.formData.afterH1}</div>`:""}
    </div>
  </div>
</section>
    `}function Dd(y){return`
 .navbar {
  background-color: var(--header-bg-color) !important;
  ${y.stickyNavbar?"position: sticky; top: 0; z-index: 1020;":""}
}

.hero-section {
  padding: 55px 0;
  position: relative;
  overflow: hidden;
  color: var(--header-text-color);
}

${y.heroBg?`.hero-section.with-bg {
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
  box-shadow: 0 10px 40px rgba(0, 0, 0, .15);
  border-radius: 12px;
  padding: .5rem 0;
  margin-top: .5rem;
  min-width: 220px;
  background: color-mix(in srgb, var(--header-bg-color) 65%, transparent) !important;
  backdrop-filter: blur(12px)
}

.custom-dropdown .dropdown-item {
  padding: .75rem 1.5rem;
  transition: all .3s ease;
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  border-radius: 0;
  text-wrap: wrap
}

.custom-dropdown .dropdown-item:hover {
  color: #fff;
  background: color-mix(in srgb, var(--header-bg-color) 95%, transparent) !important;
}
.nav-item.dropdown > .nav-link {
  display: flex;
  align-items: center;
}

.nav-item.dropdown > .nav-link .arrow {
  margin-left: auto; 
  border: solid black;
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.25s;
}

/* Rotate arrow */
.dropdown.open .arrow {
  transform: rotate(-135deg);
}

/* Hidden by default */
.dropdown-menu {
  display: none;
}

.dropdown.open .dropdown-menu {
  display: block;
}
@media (min-width: 1200px) {
  .nav-item.dropdown > .nav-link .arrow {
    margin-left: 7px;
  }
}

            `}function fm(y,z){return`
        <nav class="navbar navbar-expand-xl navbar-light container floating-rounded-navbar">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${y.logo?"/images/logo.svg":"https://placehold.co/220x50"}" alt="${y.name||y.domain||"Domain"}" width="220" height="50">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        ${z}
      </ul>
    </div>
  </div>
</nav>
    `}function dm(y,z){return`
<section class="${y.heroBg?"hero-section with-bg":"hero-section gradient-bg"}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          ${z.formData.h1||z.title}
        </h1>
        ${z.formData.afterH1?`<div>${z.formData.afterH1}</div>`:""}
    </div>
  </div>
</section>
    `}function hm(y){return`
 .navbar {
  background-color: var(--header-bg-color) !important;
  ${y.stickyNavbar?"position: sticky; top: 0; z-index: 1020;":""}
}

.hero-section {
 padding: 115px 0 25px 0;
  position: relative;
  overflow: hidden;
  color: var(--header-text-color);
}
${y.heroBg?`
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
  box-shadow: 0 10px 40px rgba(0, 0, 0, .15);
  border-radius: 12px;
  padding: .5rem 0;
  margin-top: .5rem;
  min-width: 220px;
  background: color-mix(in srgb, var(--header-bg-color) 65%, transparent) !important;
  backdrop-filter: blur(12px)
}

.custom-dropdown .dropdown-item {
  padding: .75rem 1.5rem;
  transition: all .3s ease;
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  border-radius: 0;
  text-wrap: wrap
}

.custom-dropdown .dropdown-item:hover {
  color: #fff;
  background: color-mix(in srgb, var(--header-bg-color) 95%, transparent) !important;
}
  
.nav-item.dropdown > .nav-link {
  display: flex;
  align-items: center;
}

.nav-item.dropdown > .nav-link .arrow {
  margin-left: auto; 
  border: solid black;
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.25s;
}

/* Rotate arrow */
.dropdown.open .arrow {
  transform: rotate(-135deg);
}

/* Hidden by default */
.dropdown-menu {
  display: none;
}

.dropdown.open .dropdown-menu {
  display: block;
}
@media (min-width: 1200px) {
  .nav-item.dropdown > .nav-link .arrow {
    margin-left: 7px;
  }


.floating-rounded-navbar {
  background-color: var(--header-bg-color) !important;
  position: ${y.stickyNavbar?"fixed":"absolute"} !important;
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
            `}function pm(y,z){return`
 <nav class="navbar navbar-expand-xl navbar-light ${y.stickyNavbar?"sticky-top":""}">
      <div class="container flex-xl-column">
        <div class="d-flex w-100 justify-content-between align-items-center d-xl-block text-center">
          <a class="navbar-brand mx-xl-auto" href="/">
             <img src="${y.logo?"/images/logo.svg":"https://placehold.co/220x50"}" alt="${y.name||y.domain||"Domain"}" width="220" height="50">
          </a>
          <button class="navbar-toggler d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-center mt-xl-2" id="navbarNav">
          <ul class="navbar-nav">
            ${z}
          </ul>
        </div>
      </div>
    </nav>
    `}function mm(y,z){return`
<section class="${y.heroBg?"hero-section with-bg":"hero-section gradient-bg"}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          ${z.formData.h1||z.title}
        </h1>
        ${z.formData.afterH1?`<div>${z.formData.afterH1}</div>`:""}
    </div>
  </div>
</section>
    `}function vm(y){return`
 .navbar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: var(--header-bg-color) !important;
  ${y.stickyNavbar?"position: sticky; top: 0; z-index: 1020;":""}
}

.hero-section {
  padding: 55px 0;
  position: relative;
  overflow: hidden;
  color: var(--header-text-color);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.246);
}

${y.heroBg?`.hero-section.with-bg {
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
  padding: .75rem 1.5rem;
  transition: all .3s ease;
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  border-radius: 0;
  text-wrap: wrap
}

.custom-dropdown .dropdown-item:hover {
  color: #fff;
  background: color-mix(in srgb, var(--header-bg-color) 95%, transparent) !important;
}
  
.nav-item.dropdown > .nav-link {
  display: flex;
  align-items: center;
}

.nav-item.dropdown > .nav-link .arrow {
  margin-left: auto; 
  border: solid black;
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.25s;
}

/* Rotate arrow */
.dropdown.open .arrow {
  transform: rotate(-135deg);
}

/* Hidden by default */
.dropdown-menu {
  display: none;
}

.dropdown.open .dropdown-menu {
  display: block;
}
@media (min-width: 1200px) {
  .nav-item.dropdown > .nav-link .arrow {
    margin-left: 7px;
  }
}

            `}function ym(y,z){return`
        <nav class="navbar navbar-expand-xl navbar-light${y.stickyNavbar?" sticky-top":""}">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${y.logo?"/images/logo.svg":"https://placehold.co/220x50"}" alt="${y.name||y.domain||"Domain"}" width="220" height="50">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        ${z}
      </ul>
    </div>
  </div>
</nav>
    `}function gm(y,z){return`
<section class="${y.heroBg?"hero-section with-bg":"hero-section gradient-bg"}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          ${z.formData.h1||z.title}
        </h1>
        ${z.formData.afterH1?`<div>${z.formData.afterH1}</div>`:""}
    </div>
  </div>
</section>
    `}function bm(y){return`
 .navbar {
${y.stickyNavbar?`  background-color: transparent !important;
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

${y.heroBg?`.hero-section.with-bg {
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
  box-shadow: 0 10px 40px rgba(0, 0, 0, .15);
  border-radius: 12px;
  padding: .5rem 0;
  margin-top: .5rem;
  min-width: 220px;
  background: color-mix(in srgb, var(--header-bg-color) 65%, transparent) !important;
  backdrop-filter: blur(12px)
}

.custom-dropdown .dropdown-item {
  padding: .75rem 1.5rem;
  transition: all .3s ease;
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  border-radius: 0;
  text-wrap: wrap
}

.custom-dropdown .dropdown-item:hover {
  color: #fff;
  background: color-mix(in srgb, var(--header-bg-color) 95%, transparent) !important;
}
.nav-item.dropdown > .nav-link {
  display: flex;
  align-items: center;
}

.nav-item.dropdown > .nav-link .arrow {
  margin-left: auto; 
  border: solid black;
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.25s;
}

/* Rotate arrow */
.dropdown.open .arrow {
  transform: rotate(-135deg);
}

/* Hidden by default */
.dropdown-menu {
  display: none;
}

.dropdown.open .dropdown-menu {
  display: block;
}
@media (min-width: 1200px) {
  .nav-item.dropdown > .nav-link .arrow {
    margin-left: 7px;
  }
}

            `}function ll(y){return`
<footer class="footer mt-auto py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-6 text-center text-md-start">
        <p class="mb-0">© Copyright <?php echo date('Y'); ?> ${y.domain||"Your Website"}. All rights reserved.</p>
      </div>
      <div class="col-md-6 text-md-end text-center d-flex flex-column flex-lg-row justify-content-center justify-content-md-end">
      ${y.contactPage?'<a class="pe-2" href="/contact">Contacts</a>':`<span class="me-3">Email: ${y.email||`info[@]${y.domain||"domain.com"}`}`}
      </span>
        <a href="${y.privacyOrTerms==="privacy"?"/privacy":"/terms"}">${y.privacyOrTerms==="privacy"?"Privacy Policy":"Terms & Conditions"}</a>
      </div>
    </div>
  </div>
  ${y.scrollToTop?`      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
`:""}
</footer>
  `}function ol(){return`
    .footer {
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
}

.footer a {
  text-decoration: none;
  color: var(--link-color) !important;
}`}function Cs(y){return`
    <footer class="footer mt-auto py-4">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-3">
           <img src="${y.logo?"/images/logo.svg":"https://placehold.co/220x50"}" alt="${y.name||y.domain||"Domain"}" width="220" height="50">
          </div>
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">© Copyright <?php echo date('Y'); ?> <span class="fw-bold">${y.domain||"Your Website"}</span> All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end text-center d-flex flex-column flex-lg-row justify-content-center justify-content-md-end">
          ${y.contactPage?'<a class="pe-2" href="/contact">Contacts</a>':`<span class="me-3"><i class="bi bi-envelope pe-2"></i>${y.email||`info[@]${y.domain||"domain.com"}`}</span>`}
            <a href="${y.privacyOrTerms==="privacy"?"/privacy":"/terms"}">${y.privacyOrTerms==="privacy"?"Privacy Policy":"Terms & Conditions"}</a>
          </div>
        </div>
      </div>
    </footer>
      ${y.scrollToTop?`      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
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
  `}function ks(y){return`
    <footer class="footer-news">
      <div class="container">
        <div class="footer-top d-flex flex-column flex-lg-row justify-content-between align-items-center mb-4">
          <div class="footer-contact text-center text-lg-start mb-3 mb-lg-0">
            <p class="mb-0">© Copyright <?php echo date('Y'); ?> ${y.domain||"Your Website"}. All rights reserved.</p>
          </div>
          <div class="footer-links text-center text-lg-end d-flex flex-column flex-sm-row align-items-center gap-3">
            ${y.contactPage?'<a class="pe-2" href="/contact">Contacts</a>':`<span><span class="footer-icon">✉️</span> ${y.email||`info[@]${y.domain||"domain.com"}`}</span>`}
            <a href="${y.privacyOrTerms==="privacy"?"/privacy":"/terms"}">🔒 ${y.privacyOrTerms==="privacy"?"Privacy Policy":"Terms & Conditions"}</a>
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
      ${y.scrollToTop?`      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
`:""}
  `}function Rs(){return`
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
  `}function wm(y,z){return`
    <?php include 'functions.php';
$title = 'Contact Us - page';
$description = 'Looking to connect? Use the contact page for questions, feedback, or support inquiries.';

echo site_header($title, $description);

?>
<section class="${z}">
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
    <p class="email-link"><i class="bi bi-envelope-at"></i> ${y}</p>
</div>

<?php echo site_footer(); ?>
    `}function xm(y,z){return`
<?php include 'functions.php';
$title = 'Contact Us - page';
$description = 'Need assistance or have a question? Contact us directly — we’re here to listen and help.';

echo site_header($title, $description);

?>
<section class="${z}">
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
        <i class="bi bi-envelope-paper"></i> ${y}
    </p>
</div>
<?php echo site_footer(); ?>
    `}function _m(){return`
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
}`}function Sm(){return`
.content-area h2 {
  display: inline-block;
  border-bottom: 3px solid var(--heading-color);
  padding-bottom: 4px;
}
  `}function Tm(){return`
.content-area h2 {
  display: inline-block;
  border-bottom: 2px dashed var(--heading-color);
  padding-bottom: 4px;
}
  `}function Em(){return`
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
  `}function Am(){return`
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
  `}function Nm(){return`
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
    `}function Yd(y={}){switch(y.headingsStyle||"1"){case"2":return Sm();case"3":return Tm();case"4":return Em();case"5":return Am();case"6":return Nm();case"1":default:return""}}function Cm(y){return`

:root {
  --body-bg-color: ${y.bodyBgColor||"#f8fafc"};
  --body-text-color: ${y.bodyTextColor||"#222222"};
  --heading-color: ${y.headingColor||"#222222"};
  --hero-gradient1: ${y.heroGradient1||"#168295"};
  --hero-gradient2: ${y.heroGradient2||"#0b5e3a"};
  --footer-bg-color: ${y.footerBgColor||"#0d0d0d"};
  --link-color: ${y.linkColor||"#2563eb"};
  --header-bg-color: ${y.headerBgColor||"#ffffff"};
  --font-family: ${y.fontFamily&&y.fontFamily!=="system"?y.fontFamily:"system-ui"};
  --nav-link-color: ${y.navLinkColor||"#141414"};
  --footer-text-color: ${y.footerTextColor||"#ffffff"};
  --header-text-color: ${y.headerTextColor||"#ffffffff"};
}
html {
  overflow-x: hidden;
}
body {
  background-color: var(--body-bg-color) !important;
  color: var(--body-text-color) !important;
  font-family: var(--font-family);
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
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

${Yd(y)}

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
  ${y.sidebar?`.twitter-tweet {
  width: 279px !important;
}

.x {
  display: flex;
  justify-content: center;
}`:""}
.error_page {
  min-height: 70vh;
}

${y.footerStyle==="1"?ol():y.footerStyle==="2"?Os():Rs()}${y.whiteLogo?`.footer img {
        filter: brightness(0) invert(1);
      }`:""}
${(()=>{switch(y.navStyle){case"1":return Dd(y);case"2":return hm(y);case"3":return vm(y);case"4":return bm(y);default:return Dd(y)}})()}

${y.contactPage?_m():""}
${y.scrollToTop?`.scroll-top {
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
`}function Om(y){const z=y.split(/(<h2[\s\S]*?<\/h2>)/i).filter(Boolean);let w="",x=[],A="",m=!1;return z.forEach(c=>{/<h2[\s\S]*?<\/h2>/i.test(c)?m?(A.trim()&&x.push(`<section>${A}</section>`),A=c):(m=!0,A=(w||"")+c,w=""):m?A+=c:w+=c}),m&&A.trim()?x.push(`<section>${A}</section>`):!m&&w.trim()&&x.push(`<section>${w}</section>`),x.join(`
`)}function km(y,z){const w=z.hiddenFromNav||[],x=y.filter(v=>!w.includes(v.id)),m=Rm(z,(()=>{let v="";const f=z.customNavItems||[],E=x.filter(S=>!S.parentId),k=x.filter(S=>S.parentId);return E.forEach(S=>{if(S.isDropdownParent){const g=k.filter(h=>h.parentId===S.id);S.hasOwnPage&&S.slug?v+=`
          <li class="nav-item dropdown">
            <a class="nav-link" id="dropToggle" href="/${S.slug}" >
              ${S.title} <span class="arrow"></span>
            </a>
            <ul class="custom-dropdown dropdown-menu">
              ${g.map(h=>`<li><a class="dropdown-item" href="/${h.slug}">${h.title}</a></li>`).join(`
`)}
            </ul>
          </li>
        `:v+=`
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button">
              ${S.title}
            </a>
            <ul class="custom-dropdown dropdown-menu">
              ${g.map(h=>`<li><a class="dropdown-item" href="/${h.slug}">${h.title}</a></li>`).join(`
`)}
            </ul>
          </li>
        `}else{const g=S.isHome?"/":`/${S.slug}`;v+=`<li class="nav-item"><a class="nav-link" href="${g}">${S.title}</a></li>
`}}),f.forEach(S=>{v+=`<li class="nav-item">
      <a class="nav-link" href="${S.url}">
        ${S.label}
      </a>
    </li>
`}),v})(),x),c=Cm(z),d={};return y.forEach(v=>{if(v.isDropdownParent&&!v.hasOwnPage||!v.formData)return;const f=v.isHome?"index.php":`${v.slug}.php`;d[f]=jm(v,z)}),{pages:d,functions:m,styles:c}}function Rm(y,z,w){const x=w.filter(A=>!(A.isDropdownParent&&!A.hasOwnPage)).map(A=>{const m=A.isHome?"/":`/${A.slug}`,c=A.title;return`<li><a href="${m}">${c}</a></li>`}).join(`
              `);return`<?php
function site_header($title, $description)
{
  $canonical = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  ob_start(); ?>
<!DOCTYPE html>
<html lang="${y.lang||"en"}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <meta name="description" content="<?php echo $description; ?>">
    <link rel="canonical" href="<?php echo $canonical; ?>">
    ${y.favicon?'<link rel="icon" type="image/png" href="/images/favicon.png">':""}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/style.css">
</head>
<body>
${(()=>{switch(y.navStyle){case"1":return Rd(y,z);case"2":return fm(y,z);case"3":return pm(y,z);case"4":return ym(y,z);default:return Rd(y,z)}})()} 
<?php
  return ob_get_clean();
}
  ?>

  ${y.sidebar?`
    <?php
    function sidebar()
    {
      ob_start(); ?>
    
      <div class="col-lg-4 col-xl-3 pt-3 d-flex flex-column align-items-center">
      ${w.length>1?`  
          <div>
          <h2>Quick Links</h2>
            <ul class="sidebar-page-list">
              ${x}
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
${y.footerStyle==="1"?ll(y):y.footerStyle==="2"?Cs(y):ks(y)}

    <script src="/assets/bootstrap/js/bootstrap.min.js"><\/script>
    <script src="/assets/js/main.js"><\/script>
</body>
</html>
<?php
  return ob_get_clean();
}
?>`}function jm(y,z){return`<?php
require_once 'functions.php';

echo site_header("${y.formData.title||y.title}", "${y.formData.desc||""}");
?>

${(()=>{switch(z.navStyle){case"1":return jd(z,y);case"2":return dm(z,y);case"3":return mm(z,y);case"4":return gm(z,y);default:return jd(z,y)}})()}

<main class="container my-5">
  <div class="row">
    <div class="${z.sidebar?"col-lg-8 col-xl-9":"col-12"} content-area">
    ${Om(y.formData.mainContent)||'<div class="text-center text-muted py-5"><h3>No content added yet</h3><p>Add some content to see it here</p></div>'}
    </div>
    ${z.sidebar?'<?php if (function_exists("sidebar")) echo sidebar(); ?>':""}
  </div>
</main>

<?php
echo site_footer();
?>`}function rl(y){throw new Error('Could not dynamically require "'+y+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ns={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var zd;function Dm(){return zd||(zd=1,function(y,z){(function(w){y.exports=w()})(function(){return function w(x,A,m){function c(f,E){if(!A[f]){if(!x[f]){var k=typeof rl=="function"&&rl;if(!E&&k)return k(f,!0);if(d)return d(f,!0);var S=new Error("Cannot find module '"+f+"'");throw S.code="MODULE_NOT_FOUND",S}var g=A[f]={exports:{}};x[f][0].call(g.exports,function(h){var u=x[f][1][h];return c(u||h)},g,g.exports,w,x,A,m)}return A[f].exports}for(var d=typeof rl=="function"&&rl,v=0;v<m.length;v++)c(m[v]);return c}({1:[function(w,x,A){var m=w("./utils"),c=w("./support"),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";A.encode=function(v){for(var f,E,k,S,g,h,u,T=[],_=0,C=v.length,M=C,q=m.getTypeOf(v)!=="string";_<v.length;)M=C-_,k=q?(f=v[_++],E=_<C?v[_++]:0,_<C?v[_++]:0):(f=v.charCodeAt(_++),E=_<C?v.charCodeAt(_++):0,_<C?v.charCodeAt(_++):0),S=f>>2,g=(3&f)<<4|E>>4,h=1<M?(15&E)<<2|k>>6:64,u=2<M?63&k:64,T.push(d.charAt(S)+d.charAt(g)+d.charAt(h)+d.charAt(u));return T.join("")},A.decode=function(v){var f,E,k,S,g,h,u=0,T=0,_="data:";if(v.substr(0,_.length)===_)throw new Error("Invalid base64 input, it looks like a data url.");var C,M=3*(v=v.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(v.charAt(v.length-1)===d.charAt(64)&&M--,v.charAt(v.length-2)===d.charAt(64)&&M--,M%1!=0)throw new Error("Invalid base64 input, bad content length.");for(C=c.uint8array?new Uint8Array(0|M):new Array(0|M);u<v.length;)f=d.indexOf(v.charAt(u++))<<2|(S=d.indexOf(v.charAt(u++)))>>4,E=(15&S)<<4|(g=d.indexOf(v.charAt(u++)))>>2,k=(3&g)<<6|(h=d.indexOf(v.charAt(u++))),C[T++]=f,g!==64&&(C[T++]=E),h!==64&&(C[T++]=k);return C}},{"./support":30,"./utils":32}],2:[function(w,x,A){var m=w("./external"),c=w("./stream/DataWorker"),d=w("./stream/Crc32Probe"),v=w("./stream/DataLengthProbe");function f(E,k,S,g,h){this.compressedSize=E,this.uncompressedSize=k,this.crc32=S,this.compression=g,this.compressedContent=h}f.prototype={getContentWorker:function(){var E=new c(m.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new v("data_length")),k=this;return E.on("end",function(){if(this.streamInfo.data_length!==k.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),E},getCompressedWorker:function(){return new c(m.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(E,k,S){return E.pipe(new d).pipe(new v("uncompressedSize")).pipe(k.compressWorker(S)).pipe(new v("compressedSize")).withStreamInfo("compression",k)},x.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(w,x,A){var m=w("./stream/GenericWorker");A.STORE={magic:"\0\0",compressWorker:function(){return new m("STORE compression")},uncompressWorker:function(){return new m("STORE decompression")}},A.DEFLATE=w("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(w,x,A){var m=w("./utils"),c=function(){for(var d,v=[],f=0;f<256;f++){d=f;for(var E=0;E<8;E++)d=1&d?3988292384^d>>>1:d>>>1;v[f]=d}return v}();x.exports=function(d,v){return d!==void 0&&d.length?m.getTypeOf(d)!=="string"?function(f,E,k,S){var g=c,h=S+k;f^=-1;for(var u=S;u<h;u++)f=f>>>8^g[255&(f^E[u])];return-1^f}(0|v,d,d.length,0):function(f,E,k,S){var g=c,h=S+k;f^=-1;for(var u=S;u<h;u++)f=f>>>8^g[255&(f^E.charCodeAt(u))];return-1^f}(0|v,d,d.length,0):0}},{"./utils":32}],5:[function(w,x,A){A.base64=!1,A.binary=!1,A.dir=!1,A.createFolders=!0,A.date=null,A.compression=null,A.compressionOptions=null,A.comment=null,A.unixPermissions=null,A.dosPermissions=null},{}],6:[function(w,x,A){var m=null;m=typeof Promise<"u"?Promise:w("lie"),x.exports={Promise:m}},{lie:37}],7:[function(w,x,A){var m=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",c=w("pako"),d=w("./utils"),v=w("./stream/GenericWorker"),f=m?"uint8array":"array";function E(k,S){v.call(this,"FlateWorker/"+k),this._pako=null,this._pakoAction=k,this._pakoOptions=S,this.meta={}}A.magic="\b\0",d.inherits(E,v),E.prototype.processChunk=function(k){this.meta=k.meta,this._pako===null&&this._createPako(),this._pako.push(d.transformTo(f,k.data),!1)},E.prototype.flush=function(){v.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},E.prototype.cleanUp=function(){v.prototype.cleanUp.call(this),this._pako=null},E.prototype._createPako=function(){this._pako=new c[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var k=this;this._pako.onData=function(S){k.push({data:S,meta:k.meta})}},A.compressWorker=function(k){return new E("Deflate",k)},A.uncompressWorker=function(){return new E("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(w,x,A){function m(g,h){var u,T="";for(u=0;u<h;u++)T+=String.fromCharCode(255&g),g>>>=8;return T}function c(g,h,u,T,_,C){var M,q,H=g.file,ne=g.compression,J=C!==f.utf8encode,de=d.transformTo("string",C(H.name)),G=d.transformTo("string",f.utf8encode(H.name)),re=H.comment,ye=d.transformTo("string",C(re)),R=d.transformTo("string",f.utf8encode(re)),W=G.length!==H.name.length,p=R.length!==re.length,ee="",X="",B="",se=H.dir,F=H.date,N={crc32:0,compressedSize:0,uncompressedSize:0};h&&!u||(N.crc32=g.crc32,N.compressedSize=g.compressedSize,N.uncompressedSize=g.uncompressedSize);var j=0;h&&(j|=8),J||!W&&!p||(j|=2048);var Y=0,te=0;se&&(Y|=16),_==="UNIX"?(te=798,Y|=function(oe,ge){var Me=oe;return oe||(Me=ge?16893:33204),(65535&Me)<<16}(H.unixPermissions,se)):(te=20,Y|=function(oe){return 63&(oe||0)}(H.dosPermissions)),M=F.getUTCHours(),M<<=6,M|=F.getUTCMinutes(),M<<=5,M|=F.getUTCSeconds()/2,q=F.getUTCFullYear()-1980,q<<=4,q|=F.getUTCMonth()+1,q<<=5,q|=F.getUTCDate(),W&&(X=m(1,1)+m(E(de),4)+G,ee+="up"+m(X.length,2)+X),p&&(B=m(1,1)+m(E(ye),4)+R,ee+="uc"+m(B.length,2)+B);var ie="";return ie+=`
\0`,ie+=m(j,2),ie+=ne.magic,ie+=m(M,2),ie+=m(q,2),ie+=m(N.crc32,4),ie+=m(N.compressedSize,4),ie+=m(N.uncompressedSize,4),ie+=m(de.length,2),ie+=m(ee.length,2),{fileRecord:k.LOCAL_FILE_HEADER+ie+de+ee,dirRecord:k.CENTRAL_FILE_HEADER+m(te,2)+ie+m(ye.length,2)+"\0\0\0\0"+m(Y,4)+m(T,4)+de+ee+ye}}var d=w("../utils"),v=w("../stream/GenericWorker"),f=w("../utf8"),E=w("../crc32"),k=w("../signature");function S(g,h,u,T){v.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=h,this.zipPlatform=u,this.encodeFileName=T,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}d.inherits(S,v),S.prototype.push=function(g){var h=g.meta.percent||0,u=this.entriesCount,T=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,v.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:u?(h+100*(u-T-1))/u:100}}))},S.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var h=this.streamFiles&&!g.file.dir;if(h){var u=c(g,h,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:u.fileRecord,meta:{percent:0}})}else this.accumulate=!0},S.prototype.closedSource=function(g){this.accumulate=!1;var h=this.streamFiles&&!g.file.dir,u=c(g,h,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(u.dirRecord),h)this.push({data:function(T){return k.DATA_DESCRIPTOR+m(T.crc32,4)+m(T.compressedSize,4)+m(T.uncompressedSize,4)}(g),meta:{percent:100}});else for(this.push({data:u.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},S.prototype.flush=function(){for(var g=this.bytesWritten,h=0;h<this.dirRecords.length;h++)this.push({data:this.dirRecords[h],meta:{percent:100}});var u=this.bytesWritten-g,T=function(_,C,M,q,H){var ne=d.transformTo("string",H(q));return k.CENTRAL_DIRECTORY_END+"\0\0\0\0"+m(_,2)+m(_,2)+m(C,4)+m(M,4)+m(ne.length,2)+ne}(this.dirRecords.length,u,g,this.zipComment,this.encodeFileName);this.push({data:T,meta:{percent:100}})},S.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},S.prototype.registerPrevious=function(g){this._sources.push(g);var h=this;return g.on("data",function(u){h.processChunk(u)}),g.on("end",function(){h.closedSource(h.previous.streamInfo),h._sources.length?h.prepareNextSource():h.end()}),g.on("error",function(u){h.error(u)}),this},S.prototype.resume=function(){return!!v.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},S.prototype.error=function(g){var h=this._sources;if(!v.prototype.error.call(this,g))return!1;for(var u=0;u<h.length;u++)try{h[u].error(g)}catch{}return!0},S.prototype.lock=function(){v.prototype.lock.call(this);for(var g=this._sources,h=0;h<g.length;h++)g[h].lock()},x.exports=S},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(w,x,A){var m=w("../compressions"),c=w("./ZipFileWorker");A.generateWorker=function(d,v,f){var E=new c(v.streamFiles,f,v.platform,v.encodeFileName),k=0;try{d.forEach(function(S,g){k++;var h=function(C,M){var q=C||M,H=m[q];if(!H)throw new Error(q+" is not a valid compression method !");return H}(g.options.compression,v.compression),u=g.options.compressionOptions||v.compressionOptions||{},T=g.dir,_=g.date;g._compressWorker(h,u).withStreamInfo("file",{name:S,dir:T,date:_,comment:g.comment||"",unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions}).pipe(E)}),E.entriesCount=k}catch(S){E.error(S)}return E}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(w,x,A){function m(){if(!(this instanceof m))return new m;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var c=new m;for(var d in this)typeof this[d]!="function"&&(c[d]=this[d]);return c}}(m.prototype=w("./object")).loadAsync=w("./load"),m.support=w("./support"),m.defaults=w("./defaults"),m.version="3.10.1",m.loadAsync=function(c,d){return new m().loadAsync(c,d)},m.external=w("./external"),x.exports=m},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(w,x,A){var m=w("./utils"),c=w("./external"),d=w("./utf8"),v=w("./zipEntries"),f=w("./stream/Crc32Probe"),E=w("./nodejsUtils");function k(S){return new c.Promise(function(g,h){var u=S.decompressed.getContentWorker().pipe(new f);u.on("error",function(T){h(T)}).on("end",function(){u.streamInfo.crc32!==S.decompressed.crc32?h(new Error("Corrupted zip : CRC32 mismatch")):g()}).resume()})}x.exports=function(S,g){var h=this;return g=m.extend(g||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:d.utf8decode}),E.isNode&&E.isStream(S)?c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):m.prepareContent("the loaded zip file",S,!0,g.optimizedBinaryString,g.base64).then(function(u){var T=new v(g);return T.load(u),T}).then(function(u){var T=[c.Promise.resolve(u)],_=u.files;if(g.checkCRC32)for(var C=0;C<_.length;C++)T.push(k(_[C]));return c.Promise.all(T)}).then(function(u){for(var T=u.shift(),_=T.files,C=0;C<_.length;C++){var M=_[C],q=M.fileNameStr,H=m.resolve(M.fileNameStr);h.file(H,M.decompressed,{binary:!0,optimizedBinaryString:!0,date:M.date,dir:M.dir,comment:M.fileCommentStr.length?M.fileCommentStr:null,unixPermissions:M.unixPermissions,dosPermissions:M.dosPermissions,createFolders:g.createFolders}),M.dir||(h.file(H).unsafeOriginalName=q)}return T.zipComment.length&&(h.comment=T.zipComment),h})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(w,x,A){var m=w("../utils"),c=w("../stream/GenericWorker");function d(v,f){c.call(this,"Nodejs stream input adapter for "+v),this._upstreamEnded=!1,this._bindStream(f)}m.inherits(d,c),d.prototype._bindStream=function(v){var f=this;(this._stream=v).pause(),v.on("data",function(E){f.push({data:E,meta:{percent:0}})}).on("error",function(E){f.isPaused?this.generatedError=E:f.error(E)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},d.prototype.pause=function(){return!!c.prototype.pause.call(this)&&(this._stream.pause(),!0)},d.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},x.exports=d},{"../stream/GenericWorker":28,"../utils":32}],13:[function(w,x,A){var m=w("readable-stream").Readable;function c(d,v,f){m.call(this,v),this._helper=d;var E=this;d.on("data",function(k,S){E.push(k)||E._helper.pause(),f&&f(S)}).on("error",function(k){E.emit("error",k)}).on("end",function(){E.push(null)})}w("../utils").inherits(c,m),c.prototype._read=function(){this._helper.resume()},x.exports=c},{"../utils":32,"readable-stream":16}],14:[function(w,x,A){x.exports={isNode:typeof Buffer<"u",newBufferFrom:function(m,c){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(m,c);if(typeof m=="number")throw new Error('The "data" argument must not be a number');return new Buffer(m,c)},allocBuffer:function(m){if(Buffer.alloc)return Buffer.alloc(m);var c=new Buffer(m);return c.fill(0),c},isBuffer:function(m){return Buffer.isBuffer(m)},isStream:function(m){return m&&typeof m.on=="function"&&typeof m.pause=="function"&&typeof m.resume=="function"}}},{}],15:[function(w,x,A){function m(H,ne,J){var de,G=d.getTypeOf(ne),re=d.extend(J||{},E);re.date=re.date||new Date,re.compression!==null&&(re.compression=re.compression.toUpperCase()),typeof re.unixPermissions=="string"&&(re.unixPermissions=parseInt(re.unixPermissions,8)),re.unixPermissions&&16384&re.unixPermissions&&(re.dir=!0),re.dosPermissions&&16&re.dosPermissions&&(re.dir=!0),re.dir&&(H=_(H)),re.createFolders&&(de=T(H))&&C.call(this,de,!0);var ye=G==="string"&&re.binary===!1&&re.base64===!1;J&&J.binary!==void 0||(re.binary=!ye),(ne instanceof k&&ne.uncompressedSize===0||re.dir||!ne||ne.length===0)&&(re.base64=!1,re.binary=!0,ne="",re.compression="STORE",G="string");var R=null;R=ne instanceof k||ne instanceof v?ne:h.isNode&&h.isStream(ne)?new u(H,ne):d.prepareContent(H,ne,re.binary,re.optimizedBinaryString,re.base64);var W=new S(H,R,re);this.files[H]=W}var c=w("./utf8"),d=w("./utils"),v=w("./stream/GenericWorker"),f=w("./stream/StreamHelper"),E=w("./defaults"),k=w("./compressedObject"),S=w("./zipObject"),g=w("./generate"),h=w("./nodejsUtils"),u=w("./nodejs/NodejsStreamInputAdapter"),T=function(H){H.slice(-1)==="/"&&(H=H.substring(0,H.length-1));var ne=H.lastIndexOf("/");return 0<ne?H.substring(0,ne):""},_=function(H){return H.slice(-1)!=="/"&&(H+="/"),H},C=function(H,ne){return ne=ne!==void 0?ne:E.createFolders,H=_(H),this.files[H]||m.call(this,H,null,{dir:!0,createFolders:ne}),this.files[H]};function M(H){return Object.prototype.toString.call(H)==="[object RegExp]"}var q={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(H){var ne,J,de;for(ne in this.files)de=this.files[ne],(J=ne.slice(this.root.length,ne.length))&&ne.slice(0,this.root.length)===this.root&&H(J,de)},filter:function(H){var ne=[];return this.forEach(function(J,de){H(J,de)&&ne.push(de)}),ne},file:function(H,ne,J){if(arguments.length!==1)return H=this.root+H,m.call(this,H,ne,J),this;if(M(H)){var de=H;return this.filter(function(re,ye){return!ye.dir&&de.test(re)})}var G=this.files[this.root+H];return G&&!G.dir?G:null},folder:function(H){if(!H)return this;if(M(H))return this.filter(function(G,re){return re.dir&&H.test(G)});var ne=this.root+H,J=C.call(this,ne),de=this.clone();return de.root=J.name,de},remove:function(H){H=this.root+H;var ne=this.files[H];if(ne||(H.slice(-1)!=="/"&&(H+="/"),ne=this.files[H]),ne&&!ne.dir)delete this.files[H];else for(var J=this.filter(function(G,re){return re.name.slice(0,H.length)===H}),de=0;de<J.length;de++)delete this.files[J[de].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(H){var ne,J={};try{if((J=d.extend(H||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:c.utf8encode})).type=J.type.toLowerCase(),J.compression=J.compression.toUpperCase(),J.type==="binarystring"&&(J.type="string"),!J.type)throw new Error("No output type specified.");d.checkSupport(J.type),J.platform!=="darwin"&&J.platform!=="freebsd"&&J.platform!=="linux"&&J.platform!=="sunos"||(J.platform="UNIX"),J.platform==="win32"&&(J.platform="DOS");var de=J.comment||this.comment||"";ne=g.generateWorker(this,J,de)}catch(G){(ne=new v("error")).error(G)}return new f(ne,J.type||"string",J.mimeType)},generateAsync:function(H,ne){return this.generateInternalStream(H).accumulate(ne)},generateNodeStream:function(H,ne){return(H=H||{}).type||(H.type="nodebuffer"),this.generateInternalStream(H).toNodejsStream(ne)}};x.exports=q},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(w,x,A){x.exports=w("stream")},{stream:void 0}],17:[function(w,x,A){var m=w("./DataReader");function c(d){m.call(this,d);for(var v=0;v<this.data.length;v++)d[v]=255&d[v]}w("../utils").inherits(c,m),c.prototype.byteAt=function(d){return this.data[this.zero+d]},c.prototype.lastIndexOfSignature=function(d){for(var v=d.charCodeAt(0),f=d.charCodeAt(1),E=d.charCodeAt(2),k=d.charCodeAt(3),S=this.length-4;0<=S;--S)if(this.data[S]===v&&this.data[S+1]===f&&this.data[S+2]===E&&this.data[S+3]===k)return S-this.zero;return-1},c.prototype.readAndCheckSignature=function(d){var v=d.charCodeAt(0),f=d.charCodeAt(1),E=d.charCodeAt(2),k=d.charCodeAt(3),S=this.readData(4);return v===S[0]&&f===S[1]&&E===S[2]&&k===S[3]},c.prototype.readData=function(d){if(this.checkOffset(d),d===0)return[];var v=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},x.exports=c},{"../utils":32,"./DataReader":18}],18:[function(w,x,A){var m=w("../utils");function c(d){this.data=d,this.length=d.length,this.index=0,this.zero=0}c.prototype={checkOffset:function(d){this.checkIndex(this.index+d)},checkIndex:function(d){if(this.length<this.zero+d||d<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+d+"). Corrupted zip ?")},setIndex:function(d){this.checkIndex(d),this.index=d},skip:function(d){this.setIndex(this.index+d)},byteAt:function(){},readInt:function(d){var v,f=0;for(this.checkOffset(d),v=this.index+d-1;v>=this.index;v--)f=(f<<8)+this.byteAt(v);return this.index+=d,f},readString:function(d){return m.transformTo("string",this.readData(d))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var d=this.readInt(4);return new Date(Date.UTC(1980+(d>>25&127),(d>>21&15)-1,d>>16&31,d>>11&31,d>>5&63,(31&d)<<1))}},x.exports=c},{"../utils":32}],19:[function(w,x,A){var m=w("./Uint8ArrayReader");function c(d){m.call(this,d)}w("../utils").inherits(c,m),c.prototype.readData=function(d){this.checkOffset(d);var v=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},x.exports=c},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(w,x,A){var m=w("./DataReader");function c(d){m.call(this,d)}w("../utils").inherits(c,m),c.prototype.byteAt=function(d){return this.data.charCodeAt(this.zero+d)},c.prototype.lastIndexOfSignature=function(d){return this.data.lastIndexOf(d)-this.zero},c.prototype.readAndCheckSignature=function(d){return d===this.readData(4)},c.prototype.readData=function(d){this.checkOffset(d);var v=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},x.exports=c},{"../utils":32,"./DataReader":18}],21:[function(w,x,A){var m=w("./ArrayReader");function c(d){m.call(this,d)}w("../utils").inherits(c,m),c.prototype.readData=function(d){if(this.checkOffset(d),d===0)return new Uint8Array(0);var v=this.data.subarray(this.zero+this.index,this.zero+this.index+d);return this.index+=d,v},x.exports=c},{"../utils":32,"./ArrayReader":17}],22:[function(w,x,A){var m=w("../utils"),c=w("../support"),d=w("./ArrayReader"),v=w("./StringReader"),f=w("./NodeBufferReader"),E=w("./Uint8ArrayReader");x.exports=function(k){var S=m.getTypeOf(k);return m.checkSupport(S),S!=="string"||c.uint8array?S==="nodebuffer"?new f(k):c.uint8array?new E(m.transformTo("uint8array",k)):new d(m.transformTo("array",k)):new v(k)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(w,x,A){A.LOCAL_FILE_HEADER="PK",A.CENTRAL_FILE_HEADER="PK",A.CENTRAL_DIRECTORY_END="PK",A.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",A.ZIP64_CENTRAL_DIRECTORY_END="PK",A.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(w,x,A){var m=w("./GenericWorker"),c=w("../utils");function d(v){m.call(this,"ConvertWorker to "+v),this.destType=v}c.inherits(d,m),d.prototype.processChunk=function(v){this.push({data:c.transformTo(this.destType,v.data),meta:v.meta})},x.exports=d},{"../utils":32,"./GenericWorker":28}],25:[function(w,x,A){var m=w("./GenericWorker"),c=w("../crc32");function d(){m.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}w("../utils").inherits(d,m),d.prototype.processChunk=function(v){this.streamInfo.crc32=c(v.data,this.streamInfo.crc32||0),this.push(v)},x.exports=d},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(w,x,A){var m=w("../utils"),c=w("./GenericWorker");function d(v){c.call(this,"DataLengthProbe for "+v),this.propName=v,this.withStreamInfo(v,0)}m.inherits(d,c),d.prototype.processChunk=function(v){if(v){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+v.data.length}c.prototype.processChunk.call(this,v)},x.exports=d},{"../utils":32,"./GenericWorker":28}],27:[function(w,x,A){var m=w("../utils"),c=w("./GenericWorker");function d(v){c.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,v.then(function(E){f.dataIsReady=!0,f.data=E,f.max=E&&E.length||0,f.type=m.getTypeOf(E),f.isPaused||f._tickAndRepeat()},function(E){f.error(E)})}m.inherits(d,c),d.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this.data=null},d.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,m.delay(this._tickAndRepeat,[],this)),!0)},d.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(m.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},d.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var v=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":v=this.data.substring(this.index,f);break;case"uint8array":v=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":v=this.data.slice(this.index,f)}return this.index=f,this.push({data:v,meta:{percent:this.max?this.index/this.max*100:0}})},x.exports=d},{"../utils":32,"./GenericWorker":28}],28:[function(w,x,A){function m(c){this.name=c||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}m.prototype={push:function(c){this.emit("data",c)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(c){this.emit("error",c)}return!0},error:function(c){return!this.isFinished&&(this.isPaused?this.generatedError=c:(this.isFinished=!0,this.emit("error",c),this.previous&&this.previous.error(c),this.cleanUp()),!0)},on:function(c,d){return this._listeners[c].push(d),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(c,d){if(this._listeners[c])for(var v=0;v<this._listeners[c].length;v++)this._listeners[c][v].call(this,d)},pipe:function(c){return c.registerPrevious(this)},registerPrevious:function(c){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=c.streamInfo,this.mergeStreamInfo(),this.previous=c;var d=this;return c.on("data",function(v){d.processChunk(v)}),c.on("end",function(){d.end()}),c.on("error",function(v){d.error(v)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var c=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),c=!0),this.previous&&this.previous.resume(),!c},flush:function(){},processChunk:function(c){this.push(c)},withStreamInfo:function(c,d){return this.extraStreamInfo[c]=d,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var c in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,c)&&(this.streamInfo[c]=this.extraStreamInfo[c])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var c="Worker "+this.name;return this.previous?this.previous+" -> "+c:c}},x.exports=m},{}],29:[function(w,x,A){var m=w("../utils"),c=w("./ConvertWorker"),d=w("./GenericWorker"),v=w("../base64"),f=w("../support"),E=w("../external"),k=null;if(f.nodestream)try{k=w("../nodejs/NodejsStreamOutputAdapter")}catch{}function S(h,u){return new E.Promise(function(T,_){var C=[],M=h._internalType,q=h._outputType,H=h._mimeType;h.on("data",function(ne,J){C.push(ne),u&&u(J)}).on("error",function(ne){C=[],_(ne)}).on("end",function(){try{var ne=function(J,de,G){switch(J){case"blob":return m.newBlob(m.transformTo("arraybuffer",de),G);case"base64":return v.encode(de);default:return m.transformTo(J,de)}}(q,function(J,de){var G,re=0,ye=null,R=0;for(G=0;G<de.length;G++)R+=de[G].length;switch(J){case"string":return de.join("");case"array":return Array.prototype.concat.apply([],de);case"uint8array":for(ye=new Uint8Array(R),G=0;G<de.length;G++)ye.set(de[G],re),re+=de[G].length;return ye;case"nodebuffer":return Buffer.concat(de);default:throw new Error("concat : unsupported type '"+J+"'")}}(M,C),H);T(ne)}catch(J){_(J)}C=[]}).resume()})}function g(h,u,T){var _=u;switch(u){case"blob":case"arraybuffer":_="uint8array";break;case"base64":_="string"}try{this._internalType=_,this._outputType=u,this._mimeType=T,m.checkSupport(_),this._worker=h.pipe(new c(_)),h.lock()}catch(C){this._worker=new d("error"),this._worker.error(C)}}g.prototype={accumulate:function(h){return S(this,h)},on:function(h,u){var T=this;return h==="data"?this._worker.on(h,function(_){u.call(T,_.data,_.meta)}):this._worker.on(h,function(){m.delay(u,arguments,T)}),this},resume:function(){return m.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(h){if(m.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new k(this,{objectMode:this._outputType!=="nodebuffer"},h)}},x.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(w,x,A){if(A.base64=!0,A.array=!0,A.string=!0,A.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",A.nodebuffer=typeof Buffer<"u",A.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")A.blob=!1;else{var m=new ArrayBuffer(0);try{A.blob=new Blob([m],{type:"application/zip"}).size===0}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);c.append(m),A.blob=c.getBlob("application/zip").size===0}catch{A.blob=!1}}}try{A.nodestream=!!w("readable-stream").Readable}catch{A.nodestream=!1}},{"readable-stream":16}],31:[function(w,x,A){for(var m=w("./utils"),c=w("./support"),d=w("./nodejsUtils"),v=w("./stream/GenericWorker"),f=new Array(256),E=0;E<256;E++)f[E]=252<=E?6:248<=E?5:240<=E?4:224<=E?3:192<=E?2:1;f[254]=f[254]=1;function k(){v.call(this,"utf-8 decode"),this.leftOver=null}function S(){v.call(this,"utf-8 encode")}A.utf8encode=function(g){return c.nodebuffer?d.newBufferFrom(g,"utf-8"):function(h){var u,T,_,C,M,q=h.length,H=0;for(C=0;C<q;C++)(64512&(T=h.charCodeAt(C)))==55296&&C+1<q&&(64512&(_=h.charCodeAt(C+1)))==56320&&(T=65536+(T-55296<<10)+(_-56320),C++),H+=T<128?1:T<2048?2:T<65536?3:4;for(u=c.uint8array?new Uint8Array(H):new Array(H),C=M=0;M<H;C++)(64512&(T=h.charCodeAt(C)))==55296&&C+1<q&&(64512&(_=h.charCodeAt(C+1)))==56320&&(T=65536+(T-55296<<10)+(_-56320),C++),T<128?u[M++]=T:(T<2048?u[M++]=192|T>>>6:(T<65536?u[M++]=224|T>>>12:(u[M++]=240|T>>>18,u[M++]=128|T>>>12&63),u[M++]=128|T>>>6&63),u[M++]=128|63&T);return u}(g)},A.utf8decode=function(g){return c.nodebuffer?m.transformTo("nodebuffer",g).toString("utf-8"):function(h){var u,T,_,C,M=h.length,q=new Array(2*M);for(u=T=0;u<M;)if((_=h[u++])<128)q[T++]=_;else if(4<(C=f[_]))q[T++]=65533,u+=C-1;else{for(_&=C===2?31:C===3?15:7;1<C&&u<M;)_=_<<6|63&h[u++],C--;1<C?q[T++]=65533:_<65536?q[T++]=_:(_-=65536,q[T++]=55296|_>>10&1023,q[T++]=56320|1023&_)}return q.length!==T&&(q.subarray?q=q.subarray(0,T):q.length=T),m.applyFromCharCode(q)}(g=m.transformTo(c.uint8array?"uint8array":"array",g))},m.inherits(k,v),k.prototype.processChunk=function(g){var h=m.transformTo(c.uint8array?"uint8array":"array",g.data);if(this.leftOver&&this.leftOver.length){if(c.uint8array){var u=h;(h=new Uint8Array(u.length+this.leftOver.length)).set(this.leftOver,0),h.set(u,this.leftOver.length)}else h=this.leftOver.concat(h);this.leftOver=null}var T=function(C,M){var q;for((M=M||C.length)>C.length&&(M=C.length),q=M-1;0<=q&&(192&C[q])==128;)q--;return q<0||q===0?M:q+f[C[q]]>M?q:M}(h),_=h;T!==h.length&&(c.uint8array?(_=h.subarray(0,T),this.leftOver=h.subarray(T,h.length)):(_=h.slice(0,T),this.leftOver=h.slice(T,h.length))),this.push({data:A.utf8decode(_),meta:g.meta})},k.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:A.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},A.Utf8DecodeWorker=k,m.inherits(S,v),S.prototype.processChunk=function(g){this.push({data:A.utf8encode(g.data),meta:g.meta})},A.Utf8EncodeWorker=S},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(w,x,A){var m=w("./support"),c=w("./base64"),d=w("./nodejsUtils"),v=w("./external");function f(u){return u}function E(u,T){for(var _=0;_<u.length;++_)T[_]=255&u.charCodeAt(_);return T}w("setimmediate"),A.newBlob=function(u,T){A.checkSupport("blob");try{return new Blob([u],{type:T})}catch{try{var _=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return _.append(u),_.getBlob(T)}catch{throw new Error("Bug : can't construct the Blob.")}}};var k={stringifyByChunk:function(u,T,_){var C=[],M=0,q=u.length;if(q<=_)return String.fromCharCode.apply(null,u);for(;M<q;)T==="array"||T==="nodebuffer"?C.push(String.fromCharCode.apply(null,u.slice(M,Math.min(M+_,q)))):C.push(String.fromCharCode.apply(null,u.subarray(M,Math.min(M+_,q)))),M+=_;return C.join("")},stringifyByChar:function(u){for(var T="",_=0;_<u.length;_++)T+=String.fromCharCode(u[_]);return T},applyCanBeUsed:{uint8array:function(){try{return m.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return m.nodebuffer&&String.fromCharCode.apply(null,d.allocBuffer(1)).length===1}catch{return!1}}()}};function S(u){var T=65536,_=A.getTypeOf(u),C=!0;if(_==="uint8array"?C=k.applyCanBeUsed.uint8array:_==="nodebuffer"&&(C=k.applyCanBeUsed.nodebuffer),C)for(;1<T;)try{return k.stringifyByChunk(u,_,T)}catch{T=Math.floor(T/2)}return k.stringifyByChar(u)}function g(u,T){for(var _=0;_<u.length;_++)T[_]=u[_];return T}A.applyFromCharCode=S;var h={};h.string={string:f,array:function(u){return E(u,new Array(u.length))},arraybuffer:function(u){return h.string.uint8array(u).buffer},uint8array:function(u){return E(u,new Uint8Array(u.length))},nodebuffer:function(u){return E(u,d.allocBuffer(u.length))}},h.array={string:S,array:f,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return d.newBufferFrom(u)}},h.arraybuffer={string:function(u){return S(new Uint8Array(u))},array:function(u){return g(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:f,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return d.newBufferFrom(new Uint8Array(u))}},h.uint8array={string:S,array:function(u){return g(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:f,nodebuffer:function(u){return d.newBufferFrom(u)}},h.nodebuffer={string:S,array:function(u){return g(u,new Array(u.length))},arraybuffer:function(u){return h.nodebuffer.uint8array(u).buffer},uint8array:function(u){return g(u,new Uint8Array(u.length))},nodebuffer:f},A.transformTo=function(u,T){if(T=T||"",!u)return T;A.checkSupport(u);var _=A.getTypeOf(T);return h[_][u](T)},A.resolve=function(u){for(var T=u.split("/"),_=[],C=0;C<T.length;C++){var M=T[C];M==="."||M===""&&C!==0&&C!==T.length-1||(M===".."?_.pop():_.push(M))}return _.join("/")},A.getTypeOf=function(u){return typeof u=="string"?"string":Object.prototype.toString.call(u)==="[object Array]"?"array":m.nodebuffer&&d.isBuffer(u)?"nodebuffer":m.uint8array&&u instanceof Uint8Array?"uint8array":m.arraybuffer&&u instanceof ArrayBuffer?"arraybuffer":void 0},A.checkSupport=function(u){if(!m[u.toLowerCase()])throw new Error(u+" is not supported by this platform")},A.MAX_VALUE_16BITS=65535,A.MAX_VALUE_32BITS=-1,A.pretty=function(u){var T,_,C="";for(_=0;_<(u||"").length;_++)C+="\\x"+((T=u.charCodeAt(_))<16?"0":"")+T.toString(16).toUpperCase();return C},A.delay=function(u,T,_){setImmediate(function(){u.apply(_||null,T||[])})},A.inherits=function(u,T){function _(){}_.prototype=T.prototype,u.prototype=new _},A.extend=function(){var u,T,_={};for(u=0;u<arguments.length;u++)for(T in arguments[u])Object.prototype.hasOwnProperty.call(arguments[u],T)&&_[T]===void 0&&(_[T]=arguments[u][T]);return _},A.prepareContent=function(u,T,_,C,M){return v.Promise.resolve(T).then(function(q){return m.blob&&(q instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(q))!==-1)&&typeof FileReader<"u"?new v.Promise(function(H,ne){var J=new FileReader;J.onload=function(de){H(de.target.result)},J.onerror=function(de){ne(de.target.error)},J.readAsArrayBuffer(q)}):q}).then(function(q){var H=A.getTypeOf(q);return H?(H==="arraybuffer"?q=A.transformTo("uint8array",q):H==="string"&&(M?q=c.decode(q):_&&C!==!0&&(q=function(ne){return E(ne,m.uint8array?new Uint8Array(ne.length):new Array(ne.length))}(q))),q):v.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(w,x,A){var m=w("./reader/readerFor"),c=w("./utils"),d=w("./signature"),v=w("./zipEntry"),f=w("./support");function E(k){this.files=[],this.loadOptions=k}E.prototype={checkSignature:function(k){if(!this.reader.readAndCheckSignature(k)){this.reader.index-=4;var S=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+c.pretty(S)+", expected "+c.pretty(k)+")")}},isSignature:function(k,S){var g=this.reader.index;this.reader.setIndex(k);var h=this.reader.readString(4)===S;return this.reader.setIndex(g),h},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var k=this.reader.readData(this.zipCommentLength),S=f.uint8array?"uint8array":"array",g=c.transformTo(S,k);this.zipComment=this.loadOptions.decodeFileName(g)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var k,S,g,h=this.zip64EndOfCentralSize-44;0<h;)k=this.reader.readInt(2),S=this.reader.readInt(4),g=this.reader.readData(S),this.zip64ExtensibleData[k]={id:k,length:S,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var k,S;for(k=0;k<this.files.length;k++)S=this.files[k],this.reader.setIndex(S.localHeaderOffset),this.checkSignature(d.LOCAL_FILE_HEADER),S.readLocalPart(this.reader),S.handleUTF8(),S.processAttributes()},readCentralDir:function(){var k;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(d.CENTRAL_FILE_HEADER);)(k=new v({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(k);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var k=this.reader.lastIndexOfSignature(d.CENTRAL_DIRECTORY_END);if(k<0)throw this.isSignature(0,d.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(k);var S=k;if(this.checkSignature(d.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===c.MAX_VALUE_16BITS||this.diskWithCentralDirStart===c.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===c.MAX_VALUE_16BITS||this.centralDirRecords===c.MAX_VALUE_16BITS||this.centralDirSize===c.MAX_VALUE_32BITS||this.centralDirOffset===c.MAX_VALUE_32BITS){if(this.zip64=!0,(k=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(k),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,d.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var g=this.centralDirOffset+this.centralDirSize;this.zip64&&(g+=20,g+=12+this.zip64EndOfCentralSize);var h=S-g;if(0<h)this.isSignature(S,d.CENTRAL_FILE_HEADER)||(this.reader.zero=h);else if(h<0)throw new Error("Corrupted zip: missing "+Math.abs(h)+" bytes.")},prepareReader:function(k){this.reader=m(k)},load:function(k){this.prepareReader(k),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},x.exports=E},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(w,x,A){var m=w("./reader/readerFor"),c=w("./utils"),d=w("./compressedObject"),v=w("./crc32"),f=w("./utf8"),E=w("./compressions"),k=w("./support");function S(g,h){this.options=g,this.loadOptions=h}S.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(g){var h,u;if(g.skip(22),this.fileNameLength=g.readInt(2),u=g.readInt(2),this.fileName=g.readData(this.fileNameLength),g.skip(u),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((h=function(T){for(var _ in E)if(Object.prototype.hasOwnProperty.call(E,_)&&E[_].magic===T)return E[_];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+c.pretty(this.compressionMethod)+" unknown (inner file : "+c.transformTo("string",this.fileName)+")");this.decompressed=new d(this.compressedSize,this.uncompressedSize,this.crc32,h,g.readData(this.compressedSize))},readCentralPart:function(g){this.versionMadeBy=g.readInt(2),g.skip(2),this.bitFlag=g.readInt(2),this.compressionMethod=g.readString(2),this.date=g.readDate(),this.crc32=g.readInt(4),this.compressedSize=g.readInt(4),this.uncompressedSize=g.readInt(4);var h=g.readInt(2);if(this.extraFieldsLength=g.readInt(2),this.fileCommentLength=g.readInt(2),this.diskNumberStart=g.readInt(2),this.internalFileAttributes=g.readInt(2),this.externalFileAttributes=g.readInt(4),this.localHeaderOffset=g.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");g.skip(h),this.readExtraFields(g),this.parseZIP64ExtraField(g),this.fileComment=g.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var g=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),g==0&&(this.dosPermissions=63&this.externalFileAttributes),g==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var g=m(this.extraFields[1].value);this.uncompressedSize===c.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===c.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===c.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===c.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(g){var h,u,T,_=g.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});g.index+4<_;)h=g.readInt(2),u=g.readInt(2),T=g.readData(u),this.extraFields[h]={id:h,length:u,value:T};g.setIndex(_)},handleUTF8:function(){var g=k.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var h=this.findExtraFieldUnicodePath();if(h!==null)this.fileNameStr=h;else{var u=c.transformTo(g,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(u)}var T=this.findExtraFieldUnicodeComment();if(T!==null)this.fileCommentStr=T;else{var _=c.transformTo(g,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(_)}}},findExtraFieldUnicodePath:function(){var g=this.extraFields[28789];if(g){var h=m(g.value);return h.readInt(1)!==1||v(this.fileName)!==h.readInt(4)?null:f.utf8decode(h.readData(g.length-5))}return null},findExtraFieldUnicodeComment:function(){var g=this.extraFields[25461];if(g){var h=m(g.value);return h.readInt(1)!==1||v(this.fileComment)!==h.readInt(4)?null:f.utf8decode(h.readData(g.length-5))}return null}},x.exports=S},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(w,x,A){function m(h,u,T){this.name=h,this.dir=T.dir,this.date=T.date,this.comment=T.comment,this.unixPermissions=T.unixPermissions,this.dosPermissions=T.dosPermissions,this._data=u,this._dataBinary=T.binary,this.options={compression:T.compression,compressionOptions:T.compressionOptions}}var c=w("./stream/StreamHelper"),d=w("./stream/DataWorker"),v=w("./utf8"),f=w("./compressedObject"),E=w("./stream/GenericWorker");m.prototype={internalStream:function(h){var u=null,T="string";try{if(!h)throw new Error("No output type specified.");var _=(T=h.toLowerCase())==="string"||T==="text";T!=="binarystring"&&T!=="text"||(T="string"),u=this._decompressWorker();var C=!this._dataBinary;C&&!_&&(u=u.pipe(new v.Utf8EncodeWorker)),!C&&_&&(u=u.pipe(new v.Utf8DecodeWorker))}catch(M){(u=new E("error")).error(M)}return new c(u,T,"")},async:function(h,u){return this.internalStream(h).accumulate(u)},nodeStream:function(h,u){return this.internalStream(h||"nodebuffer").toNodejsStream(u)},_compressWorker:function(h,u){if(this._data instanceof f&&this._data.compression.magic===h.magic)return this._data.getCompressedWorker();var T=this._decompressWorker();return this._dataBinary||(T=T.pipe(new v.Utf8EncodeWorker)),f.createWorkerFrom(T,h,u)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof E?this._data:new d(this._data)}};for(var k=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],S=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},g=0;g<k.length;g++)m.prototype[k[g]]=S;x.exports=m},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(w,x,A){(function(m){var c,d,v=m.MutationObserver||m.WebKitMutationObserver;if(v){var f=0,E=new v(h),k=m.document.createTextNode("");E.observe(k,{characterData:!0}),c=function(){k.data=f=++f%2}}else if(m.setImmediate||m.MessageChannel===void 0)c="document"in m&&"onreadystatechange"in m.document.createElement("script")?function(){var u=m.document.createElement("script");u.onreadystatechange=function(){h(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},m.document.documentElement.appendChild(u)}:function(){setTimeout(h,0)};else{var S=new m.MessageChannel;S.port1.onmessage=h,c=function(){S.port2.postMessage(0)}}var g=[];function h(){var u,T;d=!0;for(var _=g.length;_;){for(T=g,g=[],u=-1;++u<_;)T[u]();_=g.length}d=!1}x.exports=function(u){g.push(u)!==1||d||c()}}).call(this,typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(w,x,A){var m=w("immediate");function c(){}var d={},v=["REJECTED"],f=["FULFILLED"],E=["PENDING"];function k(_){if(typeof _!="function")throw new TypeError("resolver must be a function");this.state=E,this.queue=[],this.outcome=void 0,_!==c&&u(this,_)}function S(_,C,M){this.promise=_,typeof C=="function"&&(this.onFulfilled=C,this.callFulfilled=this.otherCallFulfilled),typeof M=="function"&&(this.onRejected=M,this.callRejected=this.otherCallRejected)}function g(_,C,M){m(function(){var q;try{q=C(M)}catch(H){return d.reject(_,H)}q===_?d.reject(_,new TypeError("Cannot resolve promise with itself")):d.resolve(_,q)})}function h(_){var C=_&&_.then;if(_&&(typeof _=="object"||typeof _=="function")&&typeof C=="function")return function(){C.apply(_,arguments)}}function u(_,C){var M=!1;function q(J){M||(M=!0,d.reject(_,J))}function H(J){M||(M=!0,d.resolve(_,J))}var ne=T(function(){C(H,q)});ne.status==="error"&&q(ne.value)}function T(_,C){var M={};try{M.value=_(C),M.status="success"}catch(q){M.status="error",M.value=q}return M}(x.exports=k).prototype.finally=function(_){if(typeof _!="function")return this;var C=this.constructor;return this.then(function(M){return C.resolve(_()).then(function(){return M})},function(M){return C.resolve(_()).then(function(){throw M})})},k.prototype.catch=function(_){return this.then(null,_)},k.prototype.then=function(_,C){if(typeof _!="function"&&this.state===f||typeof C!="function"&&this.state===v)return this;var M=new this.constructor(c);return this.state!==E?g(M,this.state===f?_:C,this.outcome):this.queue.push(new S(M,_,C)),M},S.prototype.callFulfilled=function(_){d.resolve(this.promise,_)},S.prototype.otherCallFulfilled=function(_){g(this.promise,this.onFulfilled,_)},S.prototype.callRejected=function(_){d.reject(this.promise,_)},S.prototype.otherCallRejected=function(_){g(this.promise,this.onRejected,_)},d.resolve=function(_,C){var M=T(h,C);if(M.status==="error")return d.reject(_,M.value);var q=M.value;if(q)u(_,q);else{_.state=f,_.outcome=C;for(var H=-1,ne=_.queue.length;++H<ne;)_.queue[H].callFulfilled(C)}return _},d.reject=function(_,C){_.state=v,_.outcome=C;for(var M=-1,q=_.queue.length;++M<q;)_.queue[M].callRejected(C);return _},k.resolve=function(_){return _ instanceof this?_:d.resolve(new this(c),_)},k.reject=function(_){var C=new this(c);return d.reject(C,_)},k.all=function(_){var C=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=_.length,q=!1;if(!M)return this.resolve([]);for(var H=new Array(M),ne=0,J=-1,de=new this(c);++J<M;)G(_[J],J);return de;function G(re,ye){C.resolve(re).then(function(R){H[ye]=R,++ne!==M||q||(q=!0,d.resolve(de,H))},function(R){q||(q=!0,d.reject(de,R))})}},k.race=function(_){var C=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=_.length,q=!1;if(!M)return this.resolve([]);for(var H=-1,ne=new this(c);++H<M;)J=_[H],C.resolve(J).then(function(de){q||(q=!0,d.resolve(ne,de))},function(de){q||(q=!0,d.reject(ne,de))});var J;return ne}},{immediate:36}],38:[function(w,x,A){var m={};(0,w("./lib/utils/common").assign)(m,w("./lib/deflate"),w("./lib/inflate"),w("./lib/zlib/constants")),x.exports=m},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(w,x,A){var m=w("./zlib/deflate"),c=w("./utils/common"),d=w("./utils/strings"),v=w("./zlib/messages"),f=w("./zlib/zstream"),E=Object.prototype.toString,k=0,S=-1,g=0,h=8;function u(_){if(!(this instanceof u))return new u(_);this.options=c.assign({level:S,method:h,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},_||{});var C=this.options;C.raw&&0<C.windowBits?C.windowBits=-C.windowBits:C.gzip&&0<C.windowBits&&C.windowBits<16&&(C.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var M=m.deflateInit2(this.strm,C.level,C.method,C.windowBits,C.memLevel,C.strategy);if(M!==k)throw new Error(v[M]);if(C.header&&m.deflateSetHeader(this.strm,C.header),C.dictionary){var q;if(q=typeof C.dictionary=="string"?d.string2buf(C.dictionary):E.call(C.dictionary)==="[object ArrayBuffer]"?new Uint8Array(C.dictionary):C.dictionary,(M=m.deflateSetDictionary(this.strm,q))!==k)throw new Error(v[M]);this._dict_set=!0}}function T(_,C){var M=new u(C);if(M.push(_,!0),M.err)throw M.msg||v[M.err];return M.result}u.prototype.push=function(_,C){var M,q,H=this.strm,ne=this.options.chunkSize;if(this.ended)return!1;q=C===~~C?C:C===!0?4:0,typeof _=="string"?H.input=d.string2buf(_):E.call(_)==="[object ArrayBuffer]"?H.input=new Uint8Array(_):H.input=_,H.next_in=0,H.avail_in=H.input.length;do{if(H.avail_out===0&&(H.output=new c.Buf8(ne),H.next_out=0,H.avail_out=ne),(M=m.deflate(H,q))!==1&&M!==k)return this.onEnd(M),!(this.ended=!0);H.avail_out!==0&&(H.avail_in!==0||q!==4&&q!==2)||(this.options.to==="string"?this.onData(d.buf2binstring(c.shrinkBuf(H.output,H.next_out))):this.onData(c.shrinkBuf(H.output,H.next_out)))}while((0<H.avail_in||H.avail_out===0)&&M!==1);return q===4?(M=m.deflateEnd(this.strm),this.onEnd(M),this.ended=!0,M===k):q!==2||(this.onEnd(k),!(H.avail_out=0))},u.prototype.onData=function(_){this.chunks.push(_)},u.prototype.onEnd=function(_){_===k&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},A.Deflate=u,A.deflate=T,A.deflateRaw=function(_,C){return(C=C||{}).raw=!0,T(_,C)},A.gzip=function(_,C){return(C=C||{}).gzip=!0,T(_,C)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(w,x,A){var m=w("./zlib/inflate"),c=w("./utils/common"),d=w("./utils/strings"),v=w("./zlib/constants"),f=w("./zlib/messages"),E=w("./zlib/zstream"),k=w("./zlib/gzheader"),S=Object.prototype.toString;function g(u){if(!(this instanceof g))return new g(u);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},u||{});var T=this.options;T.raw&&0<=T.windowBits&&T.windowBits<16&&(T.windowBits=-T.windowBits,T.windowBits===0&&(T.windowBits=-15)),!(0<=T.windowBits&&T.windowBits<16)||u&&u.windowBits||(T.windowBits+=32),15<T.windowBits&&T.windowBits<48&&(15&T.windowBits)==0&&(T.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new E,this.strm.avail_out=0;var _=m.inflateInit2(this.strm,T.windowBits);if(_!==v.Z_OK)throw new Error(f[_]);this.header=new k,m.inflateGetHeader(this.strm,this.header)}function h(u,T){var _=new g(T);if(_.push(u,!0),_.err)throw _.msg||f[_.err];return _.result}g.prototype.push=function(u,T){var _,C,M,q,H,ne,J=this.strm,de=this.options.chunkSize,G=this.options.dictionary,re=!1;if(this.ended)return!1;C=T===~~T?T:T===!0?v.Z_FINISH:v.Z_NO_FLUSH,typeof u=="string"?J.input=d.binstring2buf(u):S.call(u)==="[object ArrayBuffer]"?J.input=new Uint8Array(u):J.input=u,J.next_in=0,J.avail_in=J.input.length;do{if(J.avail_out===0&&(J.output=new c.Buf8(de),J.next_out=0,J.avail_out=de),(_=m.inflate(J,v.Z_NO_FLUSH))===v.Z_NEED_DICT&&G&&(ne=typeof G=="string"?d.string2buf(G):S.call(G)==="[object ArrayBuffer]"?new Uint8Array(G):G,_=m.inflateSetDictionary(this.strm,ne)),_===v.Z_BUF_ERROR&&re===!0&&(_=v.Z_OK,re=!1),_!==v.Z_STREAM_END&&_!==v.Z_OK)return this.onEnd(_),!(this.ended=!0);J.next_out&&(J.avail_out!==0&&_!==v.Z_STREAM_END&&(J.avail_in!==0||C!==v.Z_FINISH&&C!==v.Z_SYNC_FLUSH)||(this.options.to==="string"?(M=d.utf8border(J.output,J.next_out),q=J.next_out-M,H=d.buf2string(J.output,M),J.next_out=q,J.avail_out=de-q,q&&c.arraySet(J.output,J.output,M,q,0),this.onData(H)):this.onData(c.shrinkBuf(J.output,J.next_out)))),J.avail_in===0&&J.avail_out===0&&(re=!0)}while((0<J.avail_in||J.avail_out===0)&&_!==v.Z_STREAM_END);return _===v.Z_STREAM_END&&(C=v.Z_FINISH),C===v.Z_FINISH?(_=m.inflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===v.Z_OK):C!==v.Z_SYNC_FLUSH||(this.onEnd(v.Z_OK),!(J.avail_out=0))},g.prototype.onData=function(u){this.chunks.push(u)},g.prototype.onEnd=function(u){u===v.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},A.Inflate=g,A.inflate=h,A.inflateRaw=function(u,T){return(T=T||{}).raw=!0,h(u,T)},A.ungzip=h},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(w,x,A){var m=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";A.assign=function(v){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var E=f.shift();if(E){if(typeof E!="object")throw new TypeError(E+"must be non-object");for(var k in E)E.hasOwnProperty(k)&&(v[k]=E[k])}}return v},A.shrinkBuf=function(v,f){return v.length===f?v:v.subarray?v.subarray(0,f):(v.length=f,v)};var c={arraySet:function(v,f,E,k,S){if(f.subarray&&v.subarray)v.set(f.subarray(E,E+k),S);else for(var g=0;g<k;g++)v[S+g]=f[E+g]},flattenChunks:function(v){var f,E,k,S,g,h;for(f=k=0,E=v.length;f<E;f++)k+=v[f].length;for(h=new Uint8Array(k),f=S=0,E=v.length;f<E;f++)g=v[f],h.set(g,S),S+=g.length;return h}},d={arraySet:function(v,f,E,k,S){for(var g=0;g<k;g++)v[S+g]=f[E+g]},flattenChunks:function(v){return[].concat.apply([],v)}};A.setTyped=function(v){v?(A.Buf8=Uint8Array,A.Buf16=Uint16Array,A.Buf32=Int32Array,A.assign(A,c)):(A.Buf8=Array,A.Buf16=Array,A.Buf32=Array,A.assign(A,d))},A.setTyped(m)},{}],42:[function(w,x,A){var m=w("./common"),c=!0,d=!0;try{String.fromCharCode.apply(null,[0])}catch{c=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{d=!1}for(var v=new m.Buf8(256),f=0;f<256;f++)v[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function E(k,S){if(S<65537&&(k.subarray&&d||!k.subarray&&c))return String.fromCharCode.apply(null,m.shrinkBuf(k,S));for(var g="",h=0;h<S;h++)g+=String.fromCharCode(k[h]);return g}v[254]=v[254]=1,A.string2buf=function(k){var S,g,h,u,T,_=k.length,C=0;for(u=0;u<_;u++)(64512&(g=k.charCodeAt(u)))==55296&&u+1<_&&(64512&(h=k.charCodeAt(u+1)))==56320&&(g=65536+(g-55296<<10)+(h-56320),u++),C+=g<128?1:g<2048?2:g<65536?3:4;for(S=new m.Buf8(C),u=T=0;T<C;u++)(64512&(g=k.charCodeAt(u)))==55296&&u+1<_&&(64512&(h=k.charCodeAt(u+1)))==56320&&(g=65536+(g-55296<<10)+(h-56320),u++),g<128?S[T++]=g:(g<2048?S[T++]=192|g>>>6:(g<65536?S[T++]=224|g>>>12:(S[T++]=240|g>>>18,S[T++]=128|g>>>12&63),S[T++]=128|g>>>6&63),S[T++]=128|63&g);return S},A.buf2binstring=function(k){return E(k,k.length)},A.binstring2buf=function(k){for(var S=new m.Buf8(k.length),g=0,h=S.length;g<h;g++)S[g]=k.charCodeAt(g);return S},A.buf2string=function(k,S){var g,h,u,T,_=S||k.length,C=new Array(2*_);for(g=h=0;g<_;)if((u=k[g++])<128)C[h++]=u;else if(4<(T=v[u]))C[h++]=65533,g+=T-1;else{for(u&=T===2?31:T===3?15:7;1<T&&g<_;)u=u<<6|63&k[g++],T--;1<T?C[h++]=65533:u<65536?C[h++]=u:(u-=65536,C[h++]=55296|u>>10&1023,C[h++]=56320|1023&u)}return E(C,h)},A.utf8border=function(k,S){var g;for((S=S||k.length)>k.length&&(S=k.length),g=S-1;0<=g&&(192&k[g])==128;)g--;return g<0||g===0?S:g+v[k[g]]>S?g:S}},{"./common":41}],43:[function(w,x,A){x.exports=function(m,c,d,v){for(var f=65535&m|0,E=m>>>16&65535|0,k=0;d!==0;){for(d-=k=2e3<d?2e3:d;E=E+(f=f+c[v++]|0)|0,--k;);f%=65521,E%=65521}return f|E<<16|0}},{}],44:[function(w,x,A){x.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(w,x,A){var m=function(){for(var c,d=[],v=0;v<256;v++){c=v;for(var f=0;f<8;f++)c=1&c?3988292384^c>>>1:c>>>1;d[v]=c}return d}();x.exports=function(c,d,v,f){var E=m,k=f+v;c^=-1;for(var S=f;S<k;S++)c=c>>>8^E[255&(c^d[S])];return-1^c}},{}],46:[function(w,x,A){var m,c=w("../utils/common"),d=w("./trees"),v=w("./adler32"),f=w("./crc32"),E=w("./messages"),k=0,S=4,g=0,h=-2,u=-1,T=4,_=2,C=8,M=9,q=286,H=30,ne=19,J=2*q+1,de=15,G=3,re=258,ye=re+G+1,R=42,W=113,p=1,ee=2,X=3,B=4;function se(s,ce){return s.msg=E[ce],ce}function F(s){return(s<<1)-(4<s?9:0)}function N(s){for(var ce=s.length;0<=--ce;)s[ce]=0}function j(s){var ce=s.state,ae=ce.pending;ae>s.avail_out&&(ae=s.avail_out),ae!==0&&(c.arraySet(s.output,ce.pending_buf,ce.pending_out,ae,s.next_out),s.next_out+=ae,ce.pending_out+=ae,s.total_out+=ae,s.avail_out-=ae,ce.pending-=ae,ce.pending===0&&(ce.pending_out=0))}function Y(s,ce){d._tr_flush_block(s,0<=s.block_start?s.block_start:-1,s.strstart-s.block_start,ce),s.block_start=s.strstart,j(s.strm)}function te(s,ce){s.pending_buf[s.pending++]=ce}function ie(s,ce){s.pending_buf[s.pending++]=ce>>>8&255,s.pending_buf[s.pending++]=255&ce}function oe(s,ce){var ae,D,O=s.max_chain_length,I=s.strstart,he=s.prev_length,pe=s.nice_match,$=s.strstart>s.w_size-ye?s.strstart-(s.w_size-ye):0,me=s.window,be=s.w_mask,ve=s.prev,_e=s.strstart+re,ke=me[I+he-1],Ne=me[I+he];s.prev_length>=s.good_match&&(O>>=2),pe>s.lookahead&&(pe=s.lookahead);do if(me[(ae=ce)+he]===Ne&&me[ae+he-1]===ke&&me[ae]===me[I]&&me[++ae]===me[I+1]){I+=2,ae++;do;while(me[++I]===me[++ae]&&me[++I]===me[++ae]&&me[++I]===me[++ae]&&me[++I]===me[++ae]&&me[++I]===me[++ae]&&me[++I]===me[++ae]&&me[++I]===me[++ae]&&me[++I]===me[++ae]&&I<_e);if(D=re-(_e-I),I=_e-re,he<D){if(s.match_start=ce,pe<=(he=D))break;ke=me[I+he-1],Ne=me[I+he]}}while((ce=ve[ce&be])>$&&--O!=0);return he<=s.lookahead?he:s.lookahead}function ge(s){var ce,ae,D,O,I,he,pe,$,me,be,ve=s.w_size;do{if(O=s.window_size-s.lookahead-s.strstart,s.strstart>=ve+(ve-ye)){for(c.arraySet(s.window,s.window,ve,ve,0),s.match_start-=ve,s.strstart-=ve,s.block_start-=ve,ce=ae=s.hash_size;D=s.head[--ce],s.head[ce]=ve<=D?D-ve:0,--ae;);for(ce=ae=ve;D=s.prev[--ce],s.prev[ce]=ve<=D?D-ve:0,--ae;);O+=ve}if(s.strm.avail_in===0)break;if(he=s.strm,pe=s.window,$=s.strstart+s.lookahead,me=O,be=void 0,be=he.avail_in,me<be&&(be=me),ae=be===0?0:(he.avail_in-=be,c.arraySet(pe,he.input,he.next_in,be,$),he.state.wrap===1?he.adler=v(he.adler,pe,be,$):he.state.wrap===2&&(he.adler=f(he.adler,pe,be,$)),he.next_in+=be,he.total_in+=be,be),s.lookahead+=ae,s.lookahead+s.insert>=G)for(I=s.strstart-s.insert,s.ins_h=s.window[I],s.ins_h=(s.ins_h<<s.hash_shift^s.window[I+1])&s.hash_mask;s.insert&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[I+G-1])&s.hash_mask,s.prev[I&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=I,I++,s.insert--,!(s.lookahead+s.insert<G)););}while(s.lookahead<ye&&s.strm.avail_in!==0)}function Me(s,ce){for(var ae,D;;){if(s.lookahead<ye){if(ge(s),s.lookahead<ye&&ce===k)return p;if(s.lookahead===0)break}if(ae=0,s.lookahead>=G&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+G-1])&s.hash_mask,ae=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),ae!==0&&s.strstart-ae<=s.w_size-ye&&(s.match_length=oe(s,ae)),s.match_length>=G)if(D=d._tr_tally(s,s.strstart-s.match_start,s.match_length-G),s.lookahead-=s.match_length,s.match_length<=s.max_lazy_match&&s.lookahead>=G){for(s.match_length--;s.strstart++,s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+G-1])&s.hash_mask,ae=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart,--s.match_length!=0;);s.strstart++}else s.strstart+=s.match_length,s.match_length=0,s.ins_h=s.window[s.strstart],s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+1])&s.hash_mask;else D=d._tr_tally(s,0,s.window[s.strstart]),s.lookahead--,s.strstart++;if(D&&(Y(s,!1),s.strm.avail_out===0))return p}return s.insert=s.strstart<G-1?s.strstart:G-1,ce===S?(Y(s,!0),s.strm.avail_out===0?X:B):s.last_lit&&(Y(s,!1),s.strm.avail_out===0)?p:ee}function xe(s,ce){for(var ae,D,O;;){if(s.lookahead<ye){if(ge(s),s.lookahead<ye&&ce===k)return p;if(s.lookahead===0)break}if(ae=0,s.lookahead>=G&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+G-1])&s.hash_mask,ae=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),s.prev_length=s.match_length,s.prev_match=s.match_start,s.match_length=G-1,ae!==0&&s.prev_length<s.max_lazy_match&&s.strstart-ae<=s.w_size-ye&&(s.match_length=oe(s,ae),s.match_length<=5&&(s.strategy===1||s.match_length===G&&4096<s.strstart-s.match_start)&&(s.match_length=G-1)),s.prev_length>=G&&s.match_length<=s.prev_length){for(O=s.strstart+s.lookahead-G,D=d._tr_tally(s,s.strstart-1-s.prev_match,s.prev_length-G),s.lookahead-=s.prev_length-1,s.prev_length-=2;++s.strstart<=O&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+G-1])&s.hash_mask,ae=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),--s.prev_length!=0;);if(s.match_available=0,s.match_length=G-1,s.strstart++,D&&(Y(s,!1),s.strm.avail_out===0))return p}else if(s.match_available){if((D=d._tr_tally(s,0,s.window[s.strstart-1]))&&Y(s,!1),s.strstart++,s.lookahead--,s.strm.avail_out===0)return p}else s.match_available=1,s.strstart++,s.lookahead--}return s.match_available&&(D=d._tr_tally(s,0,s.window[s.strstart-1]),s.match_available=0),s.insert=s.strstart<G-1?s.strstart:G-1,ce===S?(Y(s,!0),s.strm.avail_out===0?X:B):s.last_lit&&(Y(s,!1),s.strm.avail_out===0)?p:ee}function Ce(s,ce,ae,D,O){this.good_length=s,this.max_lazy=ce,this.nice_length=ae,this.max_chain=D,this.func=O}function We(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=C,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*J),this.dyn_dtree=new c.Buf16(2*(2*H+1)),this.bl_tree=new c.Buf16(2*(2*ne+1)),N(this.dyn_ltree),N(this.dyn_dtree),N(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(de+1),this.heap=new c.Buf16(2*q+1),N(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*q+1),N(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function qe(s){var ce;return s&&s.state?(s.total_in=s.total_out=0,s.data_type=_,(ce=s.state).pending=0,ce.pending_out=0,ce.wrap<0&&(ce.wrap=-ce.wrap),ce.status=ce.wrap?R:W,s.adler=ce.wrap===2?0:1,ce.last_flush=k,d._tr_init(ce),g):se(s,h)}function mt(s){var ce=qe(s);return ce===g&&function(ae){ae.window_size=2*ae.w_size,N(ae.head),ae.max_lazy_match=m[ae.level].max_lazy,ae.good_match=m[ae.level].good_length,ae.nice_match=m[ae.level].nice_length,ae.max_chain_length=m[ae.level].max_chain,ae.strstart=0,ae.block_start=0,ae.lookahead=0,ae.insert=0,ae.match_length=ae.prev_length=G-1,ae.match_available=0,ae.ins_h=0}(s.state),ce}function nt(s,ce,ae,D,O,I){if(!s)return h;var he=1;if(ce===u&&(ce=6),D<0?(he=0,D=-D):15<D&&(he=2,D-=16),O<1||M<O||ae!==C||D<8||15<D||ce<0||9<ce||I<0||T<I)return se(s,h);D===8&&(D=9);var pe=new We;return(s.state=pe).strm=s,pe.wrap=he,pe.gzhead=null,pe.w_bits=D,pe.w_size=1<<pe.w_bits,pe.w_mask=pe.w_size-1,pe.hash_bits=O+7,pe.hash_size=1<<pe.hash_bits,pe.hash_mask=pe.hash_size-1,pe.hash_shift=~~((pe.hash_bits+G-1)/G),pe.window=new c.Buf8(2*pe.w_size),pe.head=new c.Buf16(pe.hash_size),pe.prev=new c.Buf16(pe.w_size),pe.lit_bufsize=1<<O+6,pe.pending_buf_size=4*pe.lit_bufsize,pe.pending_buf=new c.Buf8(pe.pending_buf_size),pe.d_buf=1*pe.lit_bufsize,pe.l_buf=3*pe.lit_bufsize,pe.level=ce,pe.strategy=I,pe.method=ae,mt(s)}m=[new Ce(0,0,0,0,function(s,ce){var ae=65535;for(ae>s.pending_buf_size-5&&(ae=s.pending_buf_size-5);;){if(s.lookahead<=1){if(ge(s),s.lookahead===0&&ce===k)return p;if(s.lookahead===0)break}s.strstart+=s.lookahead,s.lookahead=0;var D=s.block_start+ae;if((s.strstart===0||s.strstart>=D)&&(s.lookahead=s.strstart-D,s.strstart=D,Y(s,!1),s.strm.avail_out===0)||s.strstart-s.block_start>=s.w_size-ye&&(Y(s,!1),s.strm.avail_out===0))return p}return s.insert=0,ce===S?(Y(s,!0),s.strm.avail_out===0?X:B):(s.strstart>s.block_start&&(Y(s,!1),s.strm.avail_out),p)}),new Ce(4,4,8,4,Me),new Ce(4,5,16,8,Me),new Ce(4,6,32,32,Me),new Ce(4,4,16,16,xe),new Ce(8,16,32,32,xe),new Ce(8,16,128,128,xe),new Ce(8,32,128,256,xe),new Ce(32,128,258,1024,xe),new Ce(32,258,258,4096,xe)],A.deflateInit=function(s,ce){return nt(s,ce,C,15,8,0)},A.deflateInit2=nt,A.deflateReset=mt,A.deflateResetKeep=qe,A.deflateSetHeader=function(s,ce){return s&&s.state?s.state.wrap!==2?h:(s.state.gzhead=ce,g):h},A.deflate=function(s,ce){var ae,D,O,I;if(!s||!s.state||5<ce||ce<0)return s?se(s,h):h;if(D=s.state,!s.output||!s.input&&s.avail_in!==0||D.status===666&&ce!==S)return se(s,s.avail_out===0?-5:h);if(D.strm=s,ae=D.last_flush,D.last_flush=ce,D.status===R)if(D.wrap===2)s.adler=0,te(D,31),te(D,139),te(D,8),D.gzhead?(te(D,(D.gzhead.text?1:0)+(D.gzhead.hcrc?2:0)+(D.gzhead.extra?4:0)+(D.gzhead.name?8:0)+(D.gzhead.comment?16:0)),te(D,255&D.gzhead.time),te(D,D.gzhead.time>>8&255),te(D,D.gzhead.time>>16&255),te(D,D.gzhead.time>>24&255),te(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),te(D,255&D.gzhead.os),D.gzhead.extra&&D.gzhead.extra.length&&(te(D,255&D.gzhead.extra.length),te(D,D.gzhead.extra.length>>8&255)),D.gzhead.hcrc&&(s.adler=f(s.adler,D.pending_buf,D.pending,0)),D.gzindex=0,D.status=69):(te(D,0),te(D,0),te(D,0),te(D,0),te(D,0),te(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),te(D,3),D.status=W);else{var he=C+(D.w_bits-8<<4)<<8;he|=(2<=D.strategy||D.level<2?0:D.level<6?1:D.level===6?2:3)<<6,D.strstart!==0&&(he|=32),he+=31-he%31,D.status=W,ie(D,he),D.strstart!==0&&(ie(D,s.adler>>>16),ie(D,65535&s.adler)),s.adler=1}if(D.status===69)if(D.gzhead.extra){for(O=D.pending;D.gzindex<(65535&D.gzhead.extra.length)&&(D.pending!==D.pending_buf_size||(D.gzhead.hcrc&&D.pending>O&&(s.adler=f(s.adler,D.pending_buf,D.pending-O,O)),j(s),O=D.pending,D.pending!==D.pending_buf_size));)te(D,255&D.gzhead.extra[D.gzindex]),D.gzindex++;D.gzhead.hcrc&&D.pending>O&&(s.adler=f(s.adler,D.pending_buf,D.pending-O,O)),D.gzindex===D.gzhead.extra.length&&(D.gzindex=0,D.status=73)}else D.status=73;if(D.status===73)if(D.gzhead.name){O=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>O&&(s.adler=f(s.adler,D.pending_buf,D.pending-O,O)),j(s),O=D.pending,D.pending===D.pending_buf_size)){I=1;break}I=D.gzindex<D.gzhead.name.length?255&D.gzhead.name.charCodeAt(D.gzindex++):0,te(D,I)}while(I!==0);D.gzhead.hcrc&&D.pending>O&&(s.adler=f(s.adler,D.pending_buf,D.pending-O,O)),I===0&&(D.gzindex=0,D.status=91)}else D.status=91;if(D.status===91)if(D.gzhead.comment){O=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>O&&(s.adler=f(s.adler,D.pending_buf,D.pending-O,O)),j(s),O=D.pending,D.pending===D.pending_buf_size)){I=1;break}I=D.gzindex<D.gzhead.comment.length?255&D.gzhead.comment.charCodeAt(D.gzindex++):0,te(D,I)}while(I!==0);D.gzhead.hcrc&&D.pending>O&&(s.adler=f(s.adler,D.pending_buf,D.pending-O,O)),I===0&&(D.status=103)}else D.status=103;if(D.status===103&&(D.gzhead.hcrc?(D.pending+2>D.pending_buf_size&&j(s),D.pending+2<=D.pending_buf_size&&(te(D,255&s.adler),te(D,s.adler>>8&255),s.adler=0,D.status=W)):D.status=W),D.pending!==0){if(j(s),s.avail_out===0)return D.last_flush=-1,g}else if(s.avail_in===0&&F(ce)<=F(ae)&&ce!==S)return se(s,-5);if(D.status===666&&s.avail_in!==0)return se(s,-5);if(s.avail_in!==0||D.lookahead!==0||ce!==k&&D.status!==666){var pe=D.strategy===2?function($,me){for(var be;;){if($.lookahead===0&&(ge($),$.lookahead===0)){if(me===k)return p;break}if($.match_length=0,be=d._tr_tally($,0,$.window[$.strstart]),$.lookahead--,$.strstart++,be&&(Y($,!1),$.strm.avail_out===0))return p}return $.insert=0,me===S?(Y($,!0),$.strm.avail_out===0?X:B):$.last_lit&&(Y($,!1),$.strm.avail_out===0)?p:ee}(D,ce):D.strategy===3?function($,me){for(var be,ve,_e,ke,Ne=$.window;;){if($.lookahead<=re){if(ge($),$.lookahead<=re&&me===k)return p;if($.lookahead===0)break}if($.match_length=0,$.lookahead>=G&&0<$.strstart&&(ve=Ne[_e=$.strstart-1])===Ne[++_e]&&ve===Ne[++_e]&&ve===Ne[++_e]){ke=$.strstart+re;do;while(ve===Ne[++_e]&&ve===Ne[++_e]&&ve===Ne[++_e]&&ve===Ne[++_e]&&ve===Ne[++_e]&&ve===Ne[++_e]&&ve===Ne[++_e]&&ve===Ne[++_e]&&_e<ke);$.match_length=re-(ke-_e),$.match_length>$.lookahead&&($.match_length=$.lookahead)}if($.match_length>=G?(be=d._tr_tally($,1,$.match_length-G),$.lookahead-=$.match_length,$.strstart+=$.match_length,$.match_length=0):(be=d._tr_tally($,0,$.window[$.strstart]),$.lookahead--,$.strstart++),be&&(Y($,!1),$.strm.avail_out===0))return p}return $.insert=0,me===S?(Y($,!0),$.strm.avail_out===0?X:B):$.last_lit&&(Y($,!1),$.strm.avail_out===0)?p:ee}(D,ce):m[D.level].func(D,ce);if(pe!==X&&pe!==B||(D.status=666),pe===p||pe===X)return s.avail_out===0&&(D.last_flush=-1),g;if(pe===ee&&(ce===1?d._tr_align(D):ce!==5&&(d._tr_stored_block(D,0,0,!1),ce===3&&(N(D.head),D.lookahead===0&&(D.strstart=0,D.block_start=0,D.insert=0))),j(s),s.avail_out===0))return D.last_flush=-1,g}return ce!==S?g:D.wrap<=0?1:(D.wrap===2?(te(D,255&s.adler),te(D,s.adler>>8&255),te(D,s.adler>>16&255),te(D,s.adler>>24&255),te(D,255&s.total_in),te(D,s.total_in>>8&255),te(D,s.total_in>>16&255),te(D,s.total_in>>24&255)):(ie(D,s.adler>>>16),ie(D,65535&s.adler)),j(s),0<D.wrap&&(D.wrap=-D.wrap),D.pending!==0?g:1)},A.deflateEnd=function(s){var ce;return s&&s.state?(ce=s.state.status)!==R&&ce!==69&&ce!==73&&ce!==91&&ce!==103&&ce!==W&&ce!==666?se(s,h):(s.state=null,ce===W?se(s,-3):g):h},A.deflateSetDictionary=function(s,ce){var ae,D,O,I,he,pe,$,me,be=ce.length;if(!s||!s.state||(I=(ae=s.state).wrap)===2||I===1&&ae.status!==R||ae.lookahead)return h;for(I===1&&(s.adler=v(s.adler,ce,be,0)),ae.wrap=0,be>=ae.w_size&&(I===0&&(N(ae.head),ae.strstart=0,ae.block_start=0,ae.insert=0),me=new c.Buf8(ae.w_size),c.arraySet(me,ce,be-ae.w_size,ae.w_size,0),ce=me,be=ae.w_size),he=s.avail_in,pe=s.next_in,$=s.input,s.avail_in=be,s.next_in=0,s.input=ce,ge(ae);ae.lookahead>=G;){for(D=ae.strstart,O=ae.lookahead-(G-1);ae.ins_h=(ae.ins_h<<ae.hash_shift^ae.window[D+G-1])&ae.hash_mask,ae.prev[D&ae.w_mask]=ae.head[ae.ins_h],ae.head[ae.ins_h]=D,D++,--O;);ae.strstart=D,ae.lookahead=G-1,ge(ae)}return ae.strstart+=ae.lookahead,ae.block_start=ae.strstart,ae.insert=ae.lookahead,ae.lookahead=0,ae.match_length=ae.prev_length=G-1,ae.match_available=0,s.next_in=pe,s.input=$,s.avail_in=he,ae.wrap=I,g},A.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(w,x,A){x.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(w,x,A){x.exports=function(m,c){var d,v,f,E,k,S,g,h,u,T,_,C,M,q,H,ne,J,de,G,re,ye,R,W,p,ee;d=m.state,v=m.next_in,p=m.input,f=v+(m.avail_in-5),E=m.next_out,ee=m.output,k=E-(c-m.avail_out),S=E+(m.avail_out-257),g=d.dmax,h=d.wsize,u=d.whave,T=d.wnext,_=d.window,C=d.hold,M=d.bits,q=d.lencode,H=d.distcode,ne=(1<<d.lenbits)-1,J=(1<<d.distbits)-1;e:do{M<15&&(C+=p[v++]<<M,M+=8,C+=p[v++]<<M,M+=8),de=q[C&ne];t:for(;;){if(C>>>=G=de>>>24,M-=G,(G=de>>>16&255)===0)ee[E++]=65535&de;else{if(!(16&G)){if((64&G)==0){de=q[(65535&de)+(C&(1<<G)-1)];continue t}if(32&G){d.mode=12;break e}m.msg="invalid literal/length code",d.mode=30;break e}re=65535&de,(G&=15)&&(M<G&&(C+=p[v++]<<M,M+=8),re+=C&(1<<G)-1,C>>>=G,M-=G),M<15&&(C+=p[v++]<<M,M+=8,C+=p[v++]<<M,M+=8),de=H[C&J];a:for(;;){if(C>>>=G=de>>>24,M-=G,!(16&(G=de>>>16&255))){if((64&G)==0){de=H[(65535&de)+(C&(1<<G)-1)];continue a}m.msg="invalid distance code",d.mode=30;break e}if(ye=65535&de,M<(G&=15)&&(C+=p[v++]<<M,(M+=8)<G&&(C+=p[v++]<<M,M+=8)),g<(ye+=C&(1<<G)-1)){m.msg="invalid distance too far back",d.mode=30;break e}if(C>>>=G,M-=G,(G=E-k)<ye){if(u<(G=ye-G)&&d.sane){m.msg="invalid distance too far back",d.mode=30;break e}if(W=_,(R=0)===T){if(R+=h-G,G<re){for(re-=G;ee[E++]=_[R++],--G;);R=E-ye,W=ee}}else if(T<G){if(R+=h+T-G,(G-=T)<re){for(re-=G;ee[E++]=_[R++],--G;);if(R=0,T<re){for(re-=G=T;ee[E++]=_[R++],--G;);R=E-ye,W=ee}}}else if(R+=T-G,G<re){for(re-=G;ee[E++]=_[R++],--G;);R=E-ye,W=ee}for(;2<re;)ee[E++]=W[R++],ee[E++]=W[R++],ee[E++]=W[R++],re-=3;re&&(ee[E++]=W[R++],1<re&&(ee[E++]=W[R++]))}else{for(R=E-ye;ee[E++]=ee[R++],ee[E++]=ee[R++],ee[E++]=ee[R++],2<(re-=3););re&&(ee[E++]=ee[R++],1<re&&(ee[E++]=ee[R++]))}break}}break}}while(v<f&&E<S);v-=re=M>>3,C&=(1<<(M-=re<<3))-1,m.next_in=v,m.next_out=E,m.avail_in=v<f?f-v+5:5-(v-f),m.avail_out=E<S?S-E+257:257-(E-S),d.hold=C,d.bits=M}},{}],49:[function(w,x,A){var m=w("../utils/common"),c=w("./adler32"),d=w("./crc32"),v=w("./inffast"),f=w("./inftrees"),E=1,k=2,S=0,g=-2,h=1,u=852,T=592;function _(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function C(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new m.Buf16(320),this.work=new m.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function M(R){var W;return R&&R.state?(W=R.state,R.total_in=R.total_out=W.total=0,R.msg="",W.wrap&&(R.adler=1&W.wrap),W.mode=h,W.last=0,W.havedict=0,W.dmax=32768,W.head=null,W.hold=0,W.bits=0,W.lencode=W.lendyn=new m.Buf32(u),W.distcode=W.distdyn=new m.Buf32(T),W.sane=1,W.back=-1,S):g}function q(R){var W;return R&&R.state?((W=R.state).wsize=0,W.whave=0,W.wnext=0,M(R)):g}function H(R,W){var p,ee;return R&&R.state?(ee=R.state,W<0?(p=0,W=-W):(p=1+(W>>4),W<48&&(W&=15)),W&&(W<8||15<W)?g:(ee.window!==null&&ee.wbits!==W&&(ee.window=null),ee.wrap=p,ee.wbits=W,q(R))):g}function ne(R,W){var p,ee;return R?(ee=new C,(R.state=ee).window=null,(p=H(R,W))!==S&&(R.state=null),p):g}var J,de,G=!0;function re(R){if(G){var W;for(J=new m.Buf32(512),de=new m.Buf32(32),W=0;W<144;)R.lens[W++]=8;for(;W<256;)R.lens[W++]=9;for(;W<280;)R.lens[W++]=7;for(;W<288;)R.lens[W++]=8;for(f(E,R.lens,0,288,J,0,R.work,{bits:9}),W=0;W<32;)R.lens[W++]=5;f(k,R.lens,0,32,de,0,R.work,{bits:5}),G=!1}R.lencode=J,R.lenbits=9,R.distcode=de,R.distbits=5}function ye(R,W,p,ee){var X,B=R.state;return B.window===null&&(B.wsize=1<<B.wbits,B.wnext=0,B.whave=0,B.window=new m.Buf8(B.wsize)),ee>=B.wsize?(m.arraySet(B.window,W,p-B.wsize,B.wsize,0),B.wnext=0,B.whave=B.wsize):(ee<(X=B.wsize-B.wnext)&&(X=ee),m.arraySet(B.window,W,p-ee,X,B.wnext),(ee-=X)?(m.arraySet(B.window,W,p-ee,ee,0),B.wnext=ee,B.whave=B.wsize):(B.wnext+=X,B.wnext===B.wsize&&(B.wnext=0),B.whave<B.wsize&&(B.whave+=X))),0}A.inflateReset=q,A.inflateReset2=H,A.inflateResetKeep=M,A.inflateInit=function(R){return ne(R,15)},A.inflateInit2=ne,A.inflate=function(R,W){var p,ee,X,B,se,F,N,j,Y,te,ie,oe,ge,Me,xe,Ce,We,qe,mt,nt,s,ce,ae,D,O=0,I=new m.Buf8(4),he=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return g;(p=R.state).mode===12&&(p.mode=13),se=R.next_out,X=R.output,N=R.avail_out,B=R.next_in,ee=R.input,F=R.avail_in,j=p.hold,Y=p.bits,te=F,ie=N,ce=S;e:for(;;)switch(p.mode){case h:if(p.wrap===0){p.mode=13;break}for(;Y<16;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}if(2&p.wrap&&j===35615){I[p.check=0]=255&j,I[1]=j>>>8&255,p.check=d(p.check,I,2,0),Y=j=0,p.mode=2;break}if(p.flags=0,p.head&&(p.head.done=!1),!(1&p.wrap)||(((255&j)<<8)+(j>>8))%31){R.msg="incorrect header check",p.mode=30;break}if((15&j)!=8){R.msg="unknown compression method",p.mode=30;break}if(Y-=4,s=8+(15&(j>>>=4)),p.wbits===0)p.wbits=s;else if(s>p.wbits){R.msg="invalid window size",p.mode=30;break}p.dmax=1<<s,R.adler=p.check=1,p.mode=512&j?10:12,Y=j=0;break;case 2:for(;Y<16;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}if(p.flags=j,(255&p.flags)!=8){R.msg="unknown compression method",p.mode=30;break}if(57344&p.flags){R.msg="unknown header flags set",p.mode=30;break}p.head&&(p.head.text=j>>8&1),512&p.flags&&(I[0]=255&j,I[1]=j>>>8&255,p.check=d(p.check,I,2,0)),Y=j=0,p.mode=3;case 3:for(;Y<32;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}p.head&&(p.head.time=j),512&p.flags&&(I[0]=255&j,I[1]=j>>>8&255,I[2]=j>>>16&255,I[3]=j>>>24&255,p.check=d(p.check,I,4,0)),Y=j=0,p.mode=4;case 4:for(;Y<16;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}p.head&&(p.head.xflags=255&j,p.head.os=j>>8),512&p.flags&&(I[0]=255&j,I[1]=j>>>8&255,p.check=d(p.check,I,2,0)),Y=j=0,p.mode=5;case 5:if(1024&p.flags){for(;Y<16;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}p.length=j,p.head&&(p.head.extra_len=j),512&p.flags&&(I[0]=255&j,I[1]=j>>>8&255,p.check=d(p.check,I,2,0)),Y=j=0}else p.head&&(p.head.extra=null);p.mode=6;case 6:if(1024&p.flags&&(F<(oe=p.length)&&(oe=F),oe&&(p.head&&(s=p.head.extra_len-p.length,p.head.extra||(p.head.extra=new Array(p.head.extra_len)),m.arraySet(p.head.extra,ee,B,oe,s)),512&p.flags&&(p.check=d(p.check,ee,oe,B)),F-=oe,B+=oe,p.length-=oe),p.length))break e;p.length=0,p.mode=7;case 7:if(2048&p.flags){if(F===0)break e;for(oe=0;s=ee[B+oe++],p.head&&s&&p.length<65536&&(p.head.name+=String.fromCharCode(s)),s&&oe<F;);if(512&p.flags&&(p.check=d(p.check,ee,oe,B)),F-=oe,B+=oe,s)break e}else p.head&&(p.head.name=null);p.length=0,p.mode=8;case 8:if(4096&p.flags){if(F===0)break e;for(oe=0;s=ee[B+oe++],p.head&&s&&p.length<65536&&(p.head.comment+=String.fromCharCode(s)),s&&oe<F;);if(512&p.flags&&(p.check=d(p.check,ee,oe,B)),F-=oe,B+=oe,s)break e}else p.head&&(p.head.comment=null);p.mode=9;case 9:if(512&p.flags){for(;Y<16;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}if(j!==(65535&p.check)){R.msg="header crc mismatch",p.mode=30;break}Y=j=0}p.head&&(p.head.hcrc=p.flags>>9&1,p.head.done=!0),R.adler=p.check=0,p.mode=12;break;case 10:for(;Y<32;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}R.adler=p.check=_(j),Y=j=0,p.mode=11;case 11:if(p.havedict===0)return R.next_out=se,R.avail_out=N,R.next_in=B,R.avail_in=F,p.hold=j,p.bits=Y,2;R.adler=p.check=1,p.mode=12;case 12:if(W===5||W===6)break e;case 13:if(p.last){j>>>=7&Y,Y-=7&Y,p.mode=27;break}for(;Y<3;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}switch(p.last=1&j,Y-=1,3&(j>>>=1)){case 0:p.mode=14;break;case 1:if(re(p),p.mode=20,W!==6)break;j>>>=2,Y-=2;break e;case 2:p.mode=17;break;case 3:R.msg="invalid block type",p.mode=30}j>>>=2,Y-=2;break;case 14:for(j>>>=7&Y,Y-=7&Y;Y<32;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}if((65535&j)!=(j>>>16^65535)){R.msg="invalid stored block lengths",p.mode=30;break}if(p.length=65535&j,Y=j=0,p.mode=15,W===6)break e;case 15:p.mode=16;case 16:if(oe=p.length){if(F<oe&&(oe=F),N<oe&&(oe=N),oe===0)break e;m.arraySet(X,ee,B,oe,se),F-=oe,B+=oe,N-=oe,se+=oe,p.length-=oe;break}p.mode=12;break;case 17:for(;Y<14;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}if(p.nlen=257+(31&j),j>>>=5,Y-=5,p.ndist=1+(31&j),j>>>=5,Y-=5,p.ncode=4+(15&j),j>>>=4,Y-=4,286<p.nlen||30<p.ndist){R.msg="too many length or distance symbols",p.mode=30;break}p.have=0,p.mode=18;case 18:for(;p.have<p.ncode;){for(;Y<3;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}p.lens[he[p.have++]]=7&j,j>>>=3,Y-=3}for(;p.have<19;)p.lens[he[p.have++]]=0;if(p.lencode=p.lendyn,p.lenbits=7,ae={bits:p.lenbits},ce=f(0,p.lens,0,19,p.lencode,0,p.work,ae),p.lenbits=ae.bits,ce){R.msg="invalid code lengths set",p.mode=30;break}p.have=0,p.mode=19;case 19:for(;p.have<p.nlen+p.ndist;){for(;Ce=(O=p.lencode[j&(1<<p.lenbits)-1])>>>16&255,We=65535&O,!((xe=O>>>24)<=Y);){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}if(We<16)j>>>=xe,Y-=xe,p.lens[p.have++]=We;else{if(We===16){for(D=xe+2;Y<D;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}if(j>>>=xe,Y-=xe,p.have===0){R.msg="invalid bit length repeat",p.mode=30;break}s=p.lens[p.have-1],oe=3+(3&j),j>>>=2,Y-=2}else if(We===17){for(D=xe+3;Y<D;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}Y-=xe,s=0,oe=3+(7&(j>>>=xe)),j>>>=3,Y-=3}else{for(D=xe+7;Y<D;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}Y-=xe,s=0,oe=11+(127&(j>>>=xe)),j>>>=7,Y-=7}if(p.have+oe>p.nlen+p.ndist){R.msg="invalid bit length repeat",p.mode=30;break}for(;oe--;)p.lens[p.have++]=s}}if(p.mode===30)break;if(p.lens[256]===0){R.msg="invalid code -- missing end-of-block",p.mode=30;break}if(p.lenbits=9,ae={bits:p.lenbits},ce=f(E,p.lens,0,p.nlen,p.lencode,0,p.work,ae),p.lenbits=ae.bits,ce){R.msg="invalid literal/lengths set",p.mode=30;break}if(p.distbits=6,p.distcode=p.distdyn,ae={bits:p.distbits},ce=f(k,p.lens,p.nlen,p.ndist,p.distcode,0,p.work,ae),p.distbits=ae.bits,ce){R.msg="invalid distances set",p.mode=30;break}if(p.mode=20,W===6)break e;case 20:p.mode=21;case 21:if(6<=F&&258<=N){R.next_out=se,R.avail_out=N,R.next_in=B,R.avail_in=F,p.hold=j,p.bits=Y,v(R,ie),se=R.next_out,X=R.output,N=R.avail_out,B=R.next_in,ee=R.input,F=R.avail_in,j=p.hold,Y=p.bits,p.mode===12&&(p.back=-1);break}for(p.back=0;Ce=(O=p.lencode[j&(1<<p.lenbits)-1])>>>16&255,We=65535&O,!((xe=O>>>24)<=Y);){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}if(Ce&&(240&Ce)==0){for(qe=xe,mt=Ce,nt=We;Ce=(O=p.lencode[nt+((j&(1<<qe+mt)-1)>>qe)])>>>16&255,We=65535&O,!(qe+(xe=O>>>24)<=Y);){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}j>>>=qe,Y-=qe,p.back+=qe}if(j>>>=xe,Y-=xe,p.back+=xe,p.length=We,Ce===0){p.mode=26;break}if(32&Ce){p.back=-1,p.mode=12;break}if(64&Ce){R.msg="invalid literal/length code",p.mode=30;break}p.extra=15&Ce,p.mode=22;case 22:if(p.extra){for(D=p.extra;Y<D;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}p.length+=j&(1<<p.extra)-1,j>>>=p.extra,Y-=p.extra,p.back+=p.extra}p.was=p.length,p.mode=23;case 23:for(;Ce=(O=p.distcode[j&(1<<p.distbits)-1])>>>16&255,We=65535&O,!((xe=O>>>24)<=Y);){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}if((240&Ce)==0){for(qe=xe,mt=Ce,nt=We;Ce=(O=p.distcode[nt+((j&(1<<qe+mt)-1)>>qe)])>>>16&255,We=65535&O,!(qe+(xe=O>>>24)<=Y);){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}j>>>=qe,Y-=qe,p.back+=qe}if(j>>>=xe,Y-=xe,p.back+=xe,64&Ce){R.msg="invalid distance code",p.mode=30;break}p.offset=We,p.extra=15&Ce,p.mode=24;case 24:if(p.extra){for(D=p.extra;Y<D;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}p.offset+=j&(1<<p.extra)-1,j>>>=p.extra,Y-=p.extra,p.back+=p.extra}if(p.offset>p.dmax){R.msg="invalid distance too far back",p.mode=30;break}p.mode=25;case 25:if(N===0)break e;if(oe=ie-N,p.offset>oe){if((oe=p.offset-oe)>p.whave&&p.sane){R.msg="invalid distance too far back",p.mode=30;break}ge=oe>p.wnext?(oe-=p.wnext,p.wsize-oe):p.wnext-oe,oe>p.length&&(oe=p.length),Me=p.window}else Me=X,ge=se-p.offset,oe=p.length;for(N<oe&&(oe=N),N-=oe,p.length-=oe;X[se++]=Me[ge++],--oe;);p.length===0&&(p.mode=21);break;case 26:if(N===0)break e;X[se++]=p.length,N--,p.mode=21;break;case 27:if(p.wrap){for(;Y<32;){if(F===0)break e;F--,j|=ee[B++]<<Y,Y+=8}if(ie-=N,R.total_out+=ie,p.total+=ie,ie&&(R.adler=p.check=p.flags?d(p.check,X,ie,se-ie):c(p.check,X,ie,se-ie)),ie=N,(p.flags?j:_(j))!==p.check){R.msg="incorrect data check",p.mode=30;break}Y=j=0}p.mode=28;case 28:if(p.wrap&&p.flags){for(;Y<32;){if(F===0)break e;F--,j+=ee[B++]<<Y,Y+=8}if(j!==(4294967295&p.total)){R.msg="incorrect length check",p.mode=30;break}Y=j=0}p.mode=29;case 29:ce=1;break e;case 30:ce=-3;break e;case 31:return-4;case 32:default:return g}return R.next_out=se,R.avail_out=N,R.next_in=B,R.avail_in=F,p.hold=j,p.bits=Y,(p.wsize||ie!==R.avail_out&&p.mode<30&&(p.mode<27||W!==4))&&ye(R,R.output,R.next_out,ie-R.avail_out)?(p.mode=31,-4):(te-=R.avail_in,ie-=R.avail_out,R.total_in+=te,R.total_out+=ie,p.total+=ie,p.wrap&&ie&&(R.adler=p.check=p.flags?d(p.check,X,ie,R.next_out-ie):c(p.check,X,ie,R.next_out-ie)),R.data_type=p.bits+(p.last?64:0)+(p.mode===12?128:0)+(p.mode===20||p.mode===15?256:0),(te==0&&ie===0||W===4)&&ce===S&&(ce=-5),ce)},A.inflateEnd=function(R){if(!R||!R.state)return g;var W=R.state;return W.window&&(W.window=null),R.state=null,S},A.inflateGetHeader=function(R,W){var p;return R&&R.state?(2&(p=R.state).wrap)==0?g:((p.head=W).done=!1,S):g},A.inflateSetDictionary=function(R,W){var p,ee=W.length;return R&&R.state?(p=R.state).wrap!==0&&p.mode!==11?g:p.mode===11&&c(1,W,ee,0)!==p.check?-3:ye(R,W,ee,ee)?(p.mode=31,-4):(p.havedict=1,S):g},A.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(w,x,A){var m=w("../utils/common"),c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],d=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],v=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];x.exports=function(E,k,S,g,h,u,T,_){var C,M,q,H,ne,J,de,G,re,ye=_.bits,R=0,W=0,p=0,ee=0,X=0,B=0,se=0,F=0,N=0,j=0,Y=null,te=0,ie=new m.Buf16(16),oe=new m.Buf16(16),ge=null,Me=0;for(R=0;R<=15;R++)ie[R]=0;for(W=0;W<g;W++)ie[k[S+W]]++;for(X=ye,ee=15;1<=ee&&ie[ee]===0;ee--);if(ee<X&&(X=ee),ee===0)return h[u++]=20971520,h[u++]=20971520,_.bits=1,0;for(p=1;p<ee&&ie[p]===0;p++);for(X<p&&(X=p),R=F=1;R<=15;R++)if(F<<=1,(F-=ie[R])<0)return-1;if(0<F&&(E===0||ee!==1))return-1;for(oe[1]=0,R=1;R<15;R++)oe[R+1]=oe[R]+ie[R];for(W=0;W<g;W++)k[S+W]!==0&&(T[oe[k[S+W]]++]=W);if(J=E===0?(Y=ge=T,19):E===1?(Y=c,te-=257,ge=d,Me-=257,256):(Y=v,ge=f,-1),R=p,ne=u,se=W=j=0,q=-1,H=(N=1<<(B=X))-1,E===1&&852<N||E===2&&592<N)return 1;for(;;){for(de=R-se,re=T[W]<J?(G=0,T[W]):T[W]>J?(G=ge[Me+T[W]],Y[te+T[W]]):(G=96,0),C=1<<R-se,p=M=1<<B;h[ne+(j>>se)+(M-=C)]=de<<24|G<<16|re|0,M!==0;);for(C=1<<R-1;j&C;)C>>=1;if(C!==0?(j&=C-1,j+=C):j=0,W++,--ie[R]==0){if(R===ee)break;R=k[S+T[W]]}if(X<R&&(j&H)!==q){for(se===0&&(se=X),ne+=p,F=1<<(B=R-se);B+se<ee&&!((F-=ie[B+se])<=0);)B++,F<<=1;if(N+=1<<B,E===1&&852<N||E===2&&592<N)return 1;h[q=j&H]=X<<24|B<<16|ne-u|0}}return j!==0&&(h[ne+j]=R-se<<24|64<<16|0),_.bits=X,0}},{"../utils/common":41}],51:[function(w,x,A){x.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(w,x,A){var m=w("../utils/common"),c=0,d=1;function v(O){for(var I=O.length;0<=--I;)O[I]=0}var f=0,E=29,k=256,S=k+1+E,g=30,h=19,u=2*S+1,T=15,_=16,C=7,M=256,q=16,H=17,ne=18,J=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],de=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],re=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ye=new Array(2*(S+2));v(ye);var R=new Array(2*g);v(R);var W=new Array(512);v(W);var p=new Array(256);v(p);var ee=new Array(E);v(ee);var X,B,se,F=new Array(g);function N(O,I,he,pe,$){this.static_tree=O,this.extra_bits=I,this.extra_base=he,this.elems=pe,this.max_length=$,this.has_stree=O&&O.length}function j(O,I){this.dyn_tree=O,this.max_code=0,this.stat_desc=I}function Y(O){return O<256?W[O]:W[256+(O>>>7)]}function te(O,I){O.pending_buf[O.pending++]=255&I,O.pending_buf[O.pending++]=I>>>8&255}function ie(O,I,he){O.bi_valid>_-he?(O.bi_buf|=I<<O.bi_valid&65535,te(O,O.bi_buf),O.bi_buf=I>>_-O.bi_valid,O.bi_valid+=he-_):(O.bi_buf|=I<<O.bi_valid&65535,O.bi_valid+=he)}function oe(O,I,he){ie(O,he[2*I],he[2*I+1])}function ge(O,I){for(var he=0;he|=1&O,O>>>=1,he<<=1,0<--I;);return he>>>1}function Me(O,I,he){var pe,$,me=new Array(T+1),be=0;for(pe=1;pe<=T;pe++)me[pe]=be=be+he[pe-1]<<1;for($=0;$<=I;$++){var ve=O[2*$+1];ve!==0&&(O[2*$]=ge(me[ve]++,ve))}}function xe(O){var I;for(I=0;I<S;I++)O.dyn_ltree[2*I]=0;for(I=0;I<g;I++)O.dyn_dtree[2*I]=0;for(I=0;I<h;I++)O.bl_tree[2*I]=0;O.dyn_ltree[2*M]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function Ce(O){8<O.bi_valid?te(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function We(O,I,he,pe){var $=2*I,me=2*he;return O[$]<O[me]||O[$]===O[me]&&pe[I]<=pe[he]}function qe(O,I,he){for(var pe=O.heap[he],$=he<<1;$<=O.heap_len&&($<O.heap_len&&We(I,O.heap[$+1],O.heap[$],O.depth)&&$++,!We(I,pe,O.heap[$],O.depth));)O.heap[he]=O.heap[$],he=$,$<<=1;O.heap[he]=pe}function mt(O,I,he){var pe,$,me,be,ve=0;if(O.last_lit!==0)for(;pe=O.pending_buf[O.d_buf+2*ve]<<8|O.pending_buf[O.d_buf+2*ve+1],$=O.pending_buf[O.l_buf+ve],ve++,pe===0?oe(O,$,I):(oe(O,(me=p[$])+k+1,I),(be=J[me])!==0&&ie(O,$-=ee[me],be),oe(O,me=Y(--pe),he),(be=de[me])!==0&&ie(O,pe-=F[me],be)),ve<O.last_lit;);oe(O,M,I)}function nt(O,I){var he,pe,$,me=I.dyn_tree,be=I.stat_desc.static_tree,ve=I.stat_desc.has_stree,_e=I.stat_desc.elems,ke=-1;for(O.heap_len=0,O.heap_max=u,he=0;he<_e;he++)me[2*he]!==0?(O.heap[++O.heap_len]=ke=he,O.depth[he]=0):me[2*he+1]=0;for(;O.heap_len<2;)me[2*($=O.heap[++O.heap_len]=ke<2?++ke:0)]=1,O.depth[$]=0,O.opt_len--,ve&&(O.static_len-=be[2*$+1]);for(I.max_code=ke,he=O.heap_len>>1;1<=he;he--)qe(O,me,he);for($=_e;he=O.heap[1],O.heap[1]=O.heap[O.heap_len--],qe(O,me,1),pe=O.heap[1],O.heap[--O.heap_max]=he,O.heap[--O.heap_max]=pe,me[2*$]=me[2*he]+me[2*pe],O.depth[$]=(O.depth[he]>=O.depth[pe]?O.depth[he]:O.depth[pe])+1,me[2*he+1]=me[2*pe+1]=$,O.heap[1]=$++,qe(O,me,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],function(Ne,Qe){var Ia,zt,Za,Ve,ta,Zt,wt=Qe.dyn_tree,ga=Qe.max_code,cl=Qe.stat_desc.static_tree,Vi=Qe.stat_desc.has_stree,$i=Qe.stat_desc.extra_bits,cn=Qe.stat_desc.extra_base,Xt=Qe.stat_desc.max_length,un=0;for(Ve=0;Ve<=T;Ve++)Ne.bl_count[Ve]=0;for(wt[2*Ne.heap[Ne.heap_max]+1]=0,Ia=Ne.heap_max+1;Ia<u;Ia++)Xt<(Ve=wt[2*wt[2*(zt=Ne.heap[Ia])+1]+1]+1)&&(Ve=Xt,un++),wt[2*zt+1]=Ve,ga<zt||(Ne.bl_count[Ve]++,ta=0,cn<=zt&&(ta=$i[zt-cn]),Zt=wt[2*zt],Ne.opt_len+=Zt*(Ve+ta),Vi&&(Ne.static_len+=Zt*(cl[2*zt+1]+ta)));if(un!==0){do{for(Ve=Xt-1;Ne.bl_count[Ve]===0;)Ve--;Ne.bl_count[Ve]--,Ne.bl_count[Ve+1]+=2,Ne.bl_count[Xt]--,un-=2}while(0<un);for(Ve=Xt;Ve!==0;Ve--)for(zt=Ne.bl_count[Ve];zt!==0;)ga<(Za=Ne.heap[--Ia])||(wt[2*Za+1]!==Ve&&(Ne.opt_len+=(Ve-wt[2*Za+1])*wt[2*Za],wt[2*Za+1]=Ve),zt--)}}(O,I),Me(me,ke,O.bl_count)}function s(O,I,he){var pe,$,me=-1,be=I[1],ve=0,_e=7,ke=4;for(be===0&&(_e=138,ke=3),I[2*(he+1)+1]=65535,pe=0;pe<=he;pe++)$=be,be=I[2*(pe+1)+1],++ve<_e&&$===be||(ve<ke?O.bl_tree[2*$]+=ve:$!==0?($!==me&&O.bl_tree[2*$]++,O.bl_tree[2*q]++):ve<=10?O.bl_tree[2*H]++:O.bl_tree[2*ne]++,me=$,ke=(ve=0)===be?(_e=138,3):$===be?(_e=6,3):(_e=7,4))}function ce(O,I,he){var pe,$,me=-1,be=I[1],ve=0,_e=7,ke=4;for(be===0&&(_e=138,ke=3),pe=0;pe<=he;pe++)if($=be,be=I[2*(pe+1)+1],!(++ve<_e&&$===be)){if(ve<ke)for(;oe(O,$,O.bl_tree),--ve!=0;);else $!==0?($!==me&&(oe(O,$,O.bl_tree),ve--),oe(O,q,O.bl_tree),ie(O,ve-3,2)):ve<=10?(oe(O,H,O.bl_tree),ie(O,ve-3,3)):(oe(O,ne,O.bl_tree),ie(O,ve-11,7));me=$,ke=(ve=0)===be?(_e=138,3):$===be?(_e=6,3):(_e=7,4)}}v(F);var ae=!1;function D(O,I,he,pe){ie(O,(f<<1)+(pe?1:0),3),function($,me,be,ve){Ce($),te($,be),te($,~be),m.arraySet($.pending_buf,$.window,me,be,$.pending),$.pending+=be}(O,I,he)}A._tr_init=function(O){ae||(function(){var I,he,pe,$,me,be=new Array(T+1);for($=pe=0;$<E-1;$++)for(ee[$]=pe,I=0;I<1<<J[$];I++)p[pe++]=$;for(p[pe-1]=$,$=me=0;$<16;$++)for(F[$]=me,I=0;I<1<<de[$];I++)W[me++]=$;for(me>>=7;$<g;$++)for(F[$]=me<<7,I=0;I<1<<de[$]-7;I++)W[256+me++]=$;for(he=0;he<=T;he++)be[he]=0;for(I=0;I<=143;)ye[2*I+1]=8,I++,be[8]++;for(;I<=255;)ye[2*I+1]=9,I++,be[9]++;for(;I<=279;)ye[2*I+1]=7,I++,be[7]++;for(;I<=287;)ye[2*I+1]=8,I++,be[8]++;for(Me(ye,S+1,be),I=0;I<g;I++)R[2*I+1]=5,R[2*I]=ge(I,5);X=new N(ye,J,k+1,S,T),B=new N(R,de,0,g,T),se=new N(new Array(0),G,0,h,C)}(),ae=!0),O.l_desc=new j(O.dyn_ltree,X),O.d_desc=new j(O.dyn_dtree,B),O.bl_desc=new j(O.bl_tree,se),O.bi_buf=0,O.bi_valid=0,xe(O)},A._tr_stored_block=D,A._tr_flush_block=function(O,I,he,pe){var $,me,be=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=function(ve){var _e,ke=4093624447;for(_e=0;_e<=31;_e++,ke>>>=1)if(1&ke&&ve.dyn_ltree[2*_e]!==0)return c;if(ve.dyn_ltree[18]!==0||ve.dyn_ltree[20]!==0||ve.dyn_ltree[26]!==0)return d;for(_e=32;_e<k;_e++)if(ve.dyn_ltree[2*_e]!==0)return d;return c}(O)),nt(O,O.l_desc),nt(O,O.d_desc),be=function(ve){var _e;for(s(ve,ve.dyn_ltree,ve.l_desc.max_code),s(ve,ve.dyn_dtree,ve.d_desc.max_code),nt(ve,ve.bl_desc),_e=h-1;3<=_e&&ve.bl_tree[2*re[_e]+1]===0;_e--);return ve.opt_len+=3*(_e+1)+5+5+4,_e}(O),$=O.opt_len+3+7>>>3,(me=O.static_len+3+7>>>3)<=$&&($=me)):$=me=he+5,he+4<=$&&I!==-1?D(O,I,he,pe):O.strategy===4||me===$?(ie(O,2+(pe?1:0),3),mt(O,ye,R)):(ie(O,4+(pe?1:0),3),function(ve,_e,ke,Ne){var Qe;for(ie(ve,_e-257,5),ie(ve,ke-1,5),ie(ve,Ne-4,4),Qe=0;Qe<Ne;Qe++)ie(ve,ve.bl_tree[2*re[Qe]+1],3);ce(ve,ve.dyn_ltree,_e-1),ce(ve,ve.dyn_dtree,ke-1)}(O,O.l_desc.max_code+1,O.d_desc.max_code+1,be+1),mt(O,O.dyn_ltree,O.dyn_dtree)),xe(O),pe&&Ce(O)},A._tr_tally=function(O,I,he){return O.pending_buf[O.d_buf+2*O.last_lit]=I>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&I,O.pending_buf[O.l_buf+O.last_lit]=255&he,O.last_lit++,I===0?O.dyn_ltree[2*he]++:(O.matches++,I--,O.dyn_ltree[2*(p[he]+k+1)]++,O.dyn_dtree[2*Y(I)]++),O.last_lit===O.lit_bufsize-1},A._tr_align=function(O){ie(O,2,3),oe(O,M,ye),function(I){I.bi_valid===16?(te(I,I.bi_buf),I.bi_buf=0,I.bi_valid=0):8<=I.bi_valid&&(I.pending_buf[I.pending++]=255&I.bi_buf,I.bi_buf>>=8,I.bi_valid-=8)}(O)}},{"../utils/common":41}],53:[function(w,x,A){x.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(w,x,A){(function(m){(function(c,d){if(!c.setImmediate){var v,f,E,k,S=1,g={},h=!1,u=c.document,T=Object.getPrototypeOf&&Object.getPrototypeOf(c);T=T&&T.setTimeout?T:c,v={}.toString.call(c.process)==="[object process]"?function(q){process.nextTick(function(){C(q)})}:function(){if(c.postMessage&&!c.importScripts){var q=!0,H=c.onmessage;return c.onmessage=function(){q=!1},c.postMessage("","*"),c.onmessage=H,q}}()?(k="setImmediate$"+Math.random()+"$",c.addEventListener?c.addEventListener("message",M,!1):c.attachEvent("onmessage",M),function(q){c.postMessage(k+q,"*")}):c.MessageChannel?((E=new MessageChannel).port1.onmessage=function(q){C(q.data)},function(q){E.port2.postMessage(q)}):u&&"onreadystatechange"in u.createElement("script")?(f=u.documentElement,function(q){var H=u.createElement("script");H.onreadystatechange=function(){C(q),H.onreadystatechange=null,f.removeChild(H),H=null},f.appendChild(H)}):function(q){setTimeout(C,0,q)},T.setImmediate=function(q){typeof q!="function"&&(q=new Function(""+q));for(var H=new Array(arguments.length-1),ne=0;ne<H.length;ne++)H[ne]=arguments[ne+1];var J={callback:q,args:H};return g[S]=J,v(S),S++},T.clearImmediate=_}function _(q){delete g[q]}function C(q){if(h)setTimeout(C,0,q);else{var H=g[q];if(H){h=!0;try{(function(ne){var J=ne.callback,de=ne.args;switch(de.length){case 0:J();break;case 1:J(de[0]);break;case 2:J(de[0],de[1]);break;case 3:J(de[0],de[1],de[2]);break;default:J.apply(d,de)}})(H)}finally{_(q),h=!1}}}}function M(q){q.source===c&&typeof q.data=="string"&&q.data.indexOf(k)===0&&C(+q.data.slice(k.length))}})(typeof self>"u"?m===void 0?this:m:self)}).call(this,typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(Ns)),Ns.exports}var zm=Dm();const Um=Md(zm);var sl={exports:{}},Mm=sl.exports,Ud;function Ym(){return Ud||(Ud=1,function(y,z){(function(w,x){x()})(Mm,function(){function w(f,E){return typeof E>"u"?E={autoBom:!1}:typeof E!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),E={autoBom:!E}),E.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function x(f,E,k){var S=new XMLHttpRequest;S.open("GET",f),S.responseType="blob",S.onload=function(){v(S.response,E,k)},S.onerror=function(){console.error("could not download file")},S.send()}function A(f){var E=new XMLHttpRequest;E.open("HEAD",f,!1);try{E.send()}catch{}return 200<=E.status&&299>=E.status}function m(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var E=document.createEvent("MouseEvents");E.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(E)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Ga=="object"&&Ga.global===Ga?Ga:void 0,d=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),v=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!d?function(f,E,k){var S=c.URL||c.webkitURL,g=document.createElement("a");E=E||f.name||"download",g.download=E,g.rel="noopener",typeof f=="string"?(g.href=f,g.origin===location.origin?m(g):A(g.href)?x(f,E,k):m(g,g.target="_blank")):(g.href=S.createObjectURL(f),setTimeout(function(){S.revokeObjectURL(g.href)},4e4),setTimeout(function(){m(g)},0))}:"msSaveOrOpenBlob"in navigator?function(f,E,k){if(E=E||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(w(f,k),E);else if(A(f))x(f,E,k);else{var S=document.createElement("a");S.href=f,S.target="_blank",setTimeout(function(){m(S)})}}:function(f,E,k,S){if(S=S||open("","_blank"),S&&(S.document.title=S.document.body.innerText="downloading..."),typeof f=="string")return x(f,E,k);var g=f.type==="application/octet-stream",h=/constructor/i.test(c.HTMLElement)||c.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||g&&h||d)&&typeof FileReader<"u"){var T=new FileReader;T.onloadend=function(){var M=T.result;M=u?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),S?S.location.href=M:location=M,S=null},T.readAsDataURL(f)}else{var _=c.URL||c.webkitURL,C=_.createObjectURL(f);S?S.location=C:location.href=C,S=null,setTimeout(function(){_.revokeObjectURL(C)},4e4)}});c.saveAs=v.saveAs=v,y.exports=v})}(sl)),sl.exports}var Bm=Ym();function Hm(y){return`<?php include 'functions.php';
$title = '404 - page';
$description = "404 - The page you're looking for can't be found. Please check the URL or return home.";

echo site_header($title, $description);

?>
<section class="${y}">
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

<?php echo site_footer(); ?>`}function Lm(y){return`<?php include 'functions.php';
$title = '404 Error Page';
$description = "Page not found. The link may be broken or the page may have been removed. Let’s get you back on track.";

echo site_header($title, $description);

?>
<section class="${y}">
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

<?php echo site_footer(); ?>`}function qm(y){return`<?php include 'functions.php';
$title = '404 - page';
$description = "The page you are looking for doesn't exist.";

echo site_header($title, $description);

?>
<section class="${y}">
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

<?php echo site_footer(); ?>`}function Gm(y){return`
RewriteEngine on
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

${y&&y.includes("www.")?`
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
`.trim()}function Im(y,z,w,x,A){return`<?php include 'functions.php';
$title = 'Privacy policy page';
$description = 'This Privacy Policy describes the information that we gather on or through our Services and how we use and process such information.';
echo site_header($title, $description);

?>
<section class="${A}">
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
<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to ${x||"our website"}.</p>
</li>
<li>
<p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
</li>
<li>
<p><strong>Country</strong> refers to:  ${w||"United Kingdom"}</p>
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
<p><strong>Website</strong> refers to ${x||"our website"}, accessible from <a href="/">${z||"domain.com"}</a></p>
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
${y?`
<h2>Contact Us</h2>
<p>If you have any questions about this Privacy Policy, You can contact us:</p><ul>
<li>By email: ${y}</li>
</ul>`:""} 
</div>

<?php echo site_footer(); ?>`}function Zm(y,z,w,x,A){return`<?php include 'functions.php';
$title = 'Privacy policy page';
$description = 'This Privacy Policy describes the information that we gather on or through our Services and how we use and process such information.';
echo site_header($title, $description);
?>
<section class="${A}">
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
    <p>Welcome to  ${x||"our website"}.</p>
    <p>${x||"our website"} (“us”, “we”, or “our”) operates ${z||"domain.com"} (hereinafter referred to as “Service”).</p>
    <p>Our Privacy Policy governs your visit to ${z||"domain.com"}, and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>
    <p>We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
    <p>Our Terms and Conditions (“Terms”) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (“agreement”).</p>
    <p>2. Definitions</p>
    <p>SERVICE means the website operated by ${x||"our website"}.</p>
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
    <p>${x||"our website"} uses the collected data for various purposes:</p>
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
    <p>If you are located outside ${w||"United Kingdom"} and choose to provide information to us, please note that we transfer the data, including Personal Data, to  ${w||"United Kingdom"} and process it there.</p>
    <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
    <p>${x||"our website"} will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
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
    <p> If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at ${y||"info(@)domain.com"}.</p>
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
    <p>0.4. users are able to change their personal information by emailing us at ${y||"info(@)domain.com"}.</p>
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
    `}function Xm(y,z,w,x,A){return`<?php include 'functions.php';
$title = 'Terms and Conditions page';
$description = 'Review the terms and conditions outlining the rules, rights, and responsibilities for using this site.';
echo site_header($title, $description);
?>
<section class="${A}">
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
            <p><strong>Country</strong> refers to: ${w||"United Kingdom"}</p>
        </li>
        <li>
            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to ${x||"Our website"}.</p>
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
            <p><strong>Website</strong> refers to ${x||"Our website"}, accessible from <a href="/">${z||"domain.com"}</a></p>
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
        <li>By email: ${y||"info(@)domain.com"}</li>
    </ul>
</div>
<?php echo site_footer(); ?>`}function Qm(y,z,w,x,A){return`
    <?php include 'functions.php';
$title = 'Terms and Conditions page';
$description = 'Read the terms and conditions that outline the proper use of our website and services.';
echo site_header($title, $description);
?>
<section class="${A}">
  <div class="container">
    <div class="justify-content-center text-center">
         <h1>Terms and Conditions</h1>
    </div>
  </div>
</section>
<div class="container py-5">
    <h2>1. Introduction</h2>
    <p>Welcome to ${x||"Our website"} (“Company”, “we”, “our”, “us”)!</p>
    <p>These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at ${z||"domain.com"} (together or individually “Service”) operated by ${x||"Our website"}.</p>
    <p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.</p>
    <p>Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.</p>
    <p>If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at ${y||"web[at]domain.com"} so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>
    <p>2. Communications</p>
    <p>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at ${y||"web[at]domain.com"}.</p>
    <p>3. Contests, Sweepstakes and Promotions</p>
    <p>Any contests, sweepstakes or other promotions (collectively, “Promotions”) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.</p>
    <p>4. Content</p>
    <p>Content found on or through this Service are the property of ${x||"Our website"} or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>
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
    <p>Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of ${x||"Our website"} and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of ${x||"Our website"}.</p>
    <p>9. Copyright Policy</p>
    <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (“Infringement”) of any person or entity.</p>
    <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to ${y||"web[at]domain.com"}, with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”</p>
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
    <p>You may provide us either directly at ${y||"web[at]domain.com"}.bg or via third party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (“Feedback”). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.</p>
    <p>12. Links To Other Web Sites</p>
    <p>Our Service may contain links to third party web sites or services that are not owned or controlled by ${x||"Our website"}.</p>
    <p>${x||"Our website"} has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>
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
    <p>These Terms shall be governed and construed in accordance with the laws of ${w||"United Kingdom"}, which governing law applies to agreement without regard to its conflict of law provisions.</p>
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
    `}function Vm(y,z,w){return`User-agent: *
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

${z.length>1||w?`Sitemap: ${y||"domain.com"}/sitemap.xml`:""}`}function $m(y,z,w,x={}){const A=y.endsWith("/")?y.slice(0,-1):y;let m="";return z.filter(d=>!(d.isDropdownParent&&!d.hasOwnPage||!d.isHome&&(!d.slug||d.slug.trim()===""))).forEach(d=>{d.isHome?m+=`  <url>
    <loc>${A}/</loc>
  </url>
`:m+=`  <url>
    <loc>${A}/${d.slug}</loc>
  </url>
`}),x.contactPage&&(m+=`  <url>
    <loc>${A}/contact</loc>
  </url>
`),w==="privacy"?m+=`  <url>
    <loc>${A}/privacy</loc>
  </url>
`:w==="terms"&&(m+=`  <url>
    <loc>${A}/terms</loc>
  </url>
`),`<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${m}</urlset>`.trim()}const ya={PAGES:"websiteBuilder_pages",GLOBAL_SETTINGS:"websiteBuilder_globalSettings",CURRENT_PAGE_ID:"websiteBuilder_currentPageId",STORED_IMAGES:"one-page-builder-stored-images"},ea={save:(y,z)=>{try{localStorage.setItem(y,JSON.stringify(z))}catch(w){console.error("Error saving to localStorage:",w)}},load:(y,z=null)=>{try{const w=localStorage.getItem(y);return w?JSON.parse(w):z}catch(w){return console.error("Error loading from localStorage:",w),z}},remove:y=>{try{localStorage.removeItem(y)}catch(z){console.error("Error removing from localStorage:",z)}},clearAll:()=>{Object.values(ya).forEach(y=>{ea.remove(y)})}};function Wm(y,z,w,x){return x=Number(x),`
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

  ${y.length>1?`
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

  ${z?"":`
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

  arrow.addEventListener("click", function (e) {
    e.preventDefault(); // stops the link navigation
    e.stopPropagation(); // prevents <a> click event

    const parent = this.closest(".dropdown");
    parent.classList.toggle("open");
  });
});

${w?`
   function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

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
${x===4&&z?`
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

  `}function Km({globalSettings:y,topLevelPages:z,childPages:w,currentPage:x,customNavItems:A}){return(y==null?void 0:y.navStyle)!=="1"?null:o.jsx("nav",{className:["navbar","navbar-expand-lg","navbar-light",y!=null&&y.stickyNavbar?"sticky-top":"",y!=null&&y.transparentNavbar?"transparent-navbar":""].filter(Boolean).join(" "),children:o.jsxs("div",{className:"container-fluid",children:[o.jsx("a",{className:"navbar-brand d-flex align-items-center",href:"#",children:o.jsx("img",{src:(y==null?void 0:y.logo)||"https://placehold.co/220x50",alt:"Logo",width:220,height:50})}),o.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:o.jsx("span",{className:"navbar-toggler-icon"})}),o.jsx("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:o.jsxs("ul",{className:"navbar-nav",children:[z.map(m=>{if(m.isDropdownParent){const c=w.filter(d=>d.parentId===m.id);return o.jsxs("li",{className:"nav-item dropdown",children:[o.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:m.navLabel||m.title}),o.jsx("ul",{className:"custom-dropdown dropdown-menu",children:c.map(d=>o.jsx("li",{children:o.jsx("a",{className:`dropdown-item ${d.id===(x==null?void 0:x.id)?"active":""}`,href:`#${d.slug}`,children:d.navLabel||d.title})},d.id))})]},m.id)}return o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:`nav-link ${m.id===(x==null?void 0:x.id)?"active":""}`,href:m.isHome?"#":`#${m.slug}`,children:m.navLabel||m.title})},m.id)}),A.map(m=>o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:"nav-link",href:m.url,target:m.external?"_blank":"_self",rel:m.external?"noopener noreferrer":void 0,children:m.label})},m.id))]})})]})})}function Pm({globalSettings:y,topLevelPages:z,childPages:w,currentPage:x,customNavItems:A}){if((y==null?void 0:y.navStyle)!=="2")return null;const m=Qi.useRef(null);return Qi.useEffect(()=>{const c=document.querySelector(".preview-container"),d=m.current,v=c==null?void 0:c.querySelector(".hero-section");if(!c||!d)return;v||(c.style.paddingTop="80px");function f(){c.scrollTop>50?d.classList.add("scrolled"):d.classList.remove("scrolled")}return c.addEventListener("scroll",f),f(),()=>{c.removeEventListener("scroll",f),!v&&c.style.paddingTop==="80px"&&(c.style.paddingTop="")}},[y]),o.jsx("nav",{ref:m,className:["navbar","navbar-expand-lg","navbar-light",y!=null&&y.stickyNavbar?"sticky-top":"","floating-rounded-navbar","container","second-style-navbar"].filter(Boolean).join(" "),children:o.jsxs("div",{className:"container-fluid",children:[o.jsx("a",{className:"navbar-brand d-flex align-items-center",href:"#",children:o.jsx("img",{src:(y==null?void 0:y.logo)||"https://placehold.co/220x50",alt:"Logo",width:220,height:50})}),o.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:o.jsx("span",{className:"navbar-toggler-icon"})}),o.jsx("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:o.jsxs("ul",{className:"navbar-nav",children:[z.map(c=>{if(c.isDropdownParent){const d=w.filter(v=>v.parentId===c.id);return o.jsxs("li",{className:"nav-item dropdown",children:[o.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:c.navLabel||c.title}),o.jsx("ul",{className:"custom-dropdown dropdown-menu",children:d.map(v=>o.jsx("li",{children:o.jsx("a",{className:`dropdown-item ${v.id===(x==null?void 0:x.id)?"active":""}`,href:`#${v.slug}`,children:v.navLabel||v.title})},v.id))})]},c.id)}return o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:`nav-link ${c.id===(x==null?void 0:x.id)?"active":""}`,href:c.isHome?"#":`#${c.slug}`,children:c.navLabel||c.title})},c.id)}),A.map(c=>o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:"nav-link",href:c.url,target:c.external?"_blank":"_self",rel:c.external?"noopener noreferrer":void 0,children:c.label})},c.id))]})})]})})}function Fm({globalSettings:y,topLevelPages:z,childPages:w,currentPage:x,customNavItems:A}){return(y==null?void 0:y.navStyle)!=="3"?null:o.jsx("nav",{className:["navbar","navbar-expand-xl","navbar-light",y!=null&&y.stickyNavbar?"sticky-top":""].filter(Boolean).join(" "),children:o.jsxs("div",{className:"container flex-xl-column",children:[o.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center d-xl-block text-center",children:[o.jsx("a",{className:"navbar-brand mx-xl-auto",href:(y==null?void 0:y.homeHref)||"#",children:o.jsx("img",{src:(y==null?void 0:y.logo)||"https://placehold.co/220x50",alt:(y==null?void 0:y.siteName)||"Logo",width:220,height:50})}),o.jsx("button",{className:"navbar-toggler d-xl-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:o.jsx("span",{className:"navbar-toggler-icon"})})]}),o.jsx("div",{className:"collapse navbar-collapse justify-content-center mt-lg-0 py-lg-0",id:"navbarNav",children:o.jsxs("ul",{className:"navbar-nav",children:[z.map(m=>{if(m.isDropdownParent){const c=w.filter(d=>d.parentId===m.id);return o.jsxs("li",{className:"nav-item dropdown",children:[o.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:m.navLabel||m.title}),o.jsx("ul",{className:"custom-dropdown dropdown-menu",children:c.map(d=>o.jsx("li",{children:o.jsx("a",{className:`dropdown-item ${d.id===(x==null?void 0:x.id)?"active":""}`,href:`#${d.slug}`,children:d.navLabel||d.title})},d.id))})]},m.id)}return o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:`nav-link ${m.id===(x==null?void 0:x.id)?"active":""}`,href:m.isHome?(y==null?void 0:y.homeHref)||"#":`#${m.slug}`,children:m.navLabel||m.title})},m.id)}),A.map(m=>o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:"nav-link",href:m.url,target:m.external?"_blank":"_self",rel:m.external?"noopener noreferrer":void 0,children:m.label})},m.id))]})})]})})}function Jm({globalSettings:y,topLevelPages:z,childPages:w,currentPage:x,customNavItems:A}){if((y==null?void 0:y.navStyle)!=="4")return null;const m=Qi.useRef(null);return Qi.useEffect(()=>{const c=document.querySelector(".preview-container"),d=m.current,v=c==null?void 0:c.querySelector(".hero-section");if(!c||!d)return;v||(c.style.paddingTop="80px");function f(){c.scrollTop>50?d.classList.add("scrolled"):d.classList.remove("scrolled")}return c.addEventListener("scroll",f),f(),()=>{c.removeEventListener("scroll",f),!v&&c.style.paddingTop==="80px"&&(c.style.paddingTop="")}},[y]),o.jsx("nav",{ref:m,className:["navbar","navbar-expand-lg","navbar-light","nav-style-4",y!=null&&y.stickyNavbar?"sticky-top":""].filter(Boolean).join(" "),children:o.jsxs("div",{className:"container-fluid",children:[o.jsx("a",{className:"navbar-brand d-flex align-items-center",href:"#",children:o.jsx("img",{src:(y==null?void 0:y.logo)||"https://placehold.co/220x50",alt:"Logo",width:220,height:50})}),o.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:o.jsx("span",{className:"navbar-toggler-icon"})}),o.jsx("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:o.jsxs("ul",{className:"navbar-nav",children:[z.map(c=>{if(c.isDropdownParent){const d=w.filter(v=>v.parentId===c.id);return o.jsxs("li",{className:"nav-item dropdown",children:[o.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:c.navLabel||c.title}),o.jsx("ul",{className:"custom-dropdown dropdown-menu",children:d.map(v=>o.jsx("li",{children:o.jsx("a",{className:`dropdown-item ${v.id===(x==null?void 0:x.id)?"active":""}`,href:`#${v.slug}`,children:v.navLabel||v.title})},v.id))})]},c.id)}return o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:`nav-link ${c.id===(x==null?void 0:x.id)?"active":""}`,href:c.isHome?"#":`#${c.slug}`,children:c.navLabel||c.title})},c.id)}),A.map(c=>o.jsx("li",{className:"nav-item",children:o.jsx("a",{className:"nav-link",href:c.url,target:c.external?"_blank":"_self",rel:c.external?"noopener noreferrer":void 0,children:c.label})},c.id))]})})]})})}const Dt={webAppUrl:"https://script.google.com/macros/s/AKfycbzq-n264rH_HrvybL2TACI_8Nf33OaZZ2q2QQVUfpPeO5kUwcVc32p6xWAyUdg9tSoytw/exec",sharedKey:"petkovv",userIdKey:"uid"};function ev({webAppUrl:y,sharedKey:z,userIdKey:w}){Dt.webAppUrl=y,Dt.sharedKey=z,w&&(Dt.userIdKey=w)}function tv(){let y=localStorage.getItem(Dt.userIdKey);return y||(y=crypto&&crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2),localStorage.setItem(Dt.userIdKey,y)),y}async function av(y=1){if(!Dt.webAppUrl||!Dt.sharedKey)throw new Error("clicksService not configured: call setConfig({ webAppUrl, sharedKey }) first.");const z=tv(),w=await fetch(Dt.webAppUrl,{method:"POST",body:JSON.stringify({key:Dt.sharedKey,userId:z,delta:y})});let x={};try{x=await w.json()}catch{}if(console.log("POST status",w.status,x),!w.ok||x.ok===!1)throw new Error(x.error||`POST failed: ${w.status}`);return!0}async function nv(){if(!Dt.webAppUrl||!Dt.sharedKey)throw new Error("clicksService not configured: call setConfig({ webAppUrl, sharedKey }) first.");const y=new URL(Dt.webAppUrl);return y.searchParams.set("key",Dt.sharedKey),(await(await fetch(y.toString())).json()).rows||[]}const iv=({formData:y,globalSettings:z,pages:w,currentPage:x,storedImages:A=[]})=>{const m="https://script.google.com/macros/s/AKfycbzq-n264rH_HrvybL2TACI_8Nf33OaZZ2q2QQVUfpPeO5kUwcVc32p6xWAyUdg9tSoytw/exec",c="petkovv",d=z.heroBg?"hero-section with-bg":"hero-section gradient-bg";Qi.useEffect(()=>{ev({webAppUrl:m,sharedKey:c}),nv().catch(G=>setError(G.message))},[]);const v=async()=>{try{await av(1)}catch(G){console.error("Click logging failed:",G)}},f=()=>{window.confirm(`⚠️ This will delete all your work and start fresh.

Are you sure you want to clear all saved data? This action cannot be undone.`)&&(ea.clearAll(),alert(`✅ All data has been cleared successfully!

The page will now reload with a fresh start.`),window.location.reload())},E=(G,re)=>{if(!re||re.length===0)return console.log("📭 No stored images to process"),G;const ye=new Map;return re.forEach((R,W)=>{R.b64_json&&R.filename&&(ye.set(R.b64_json,R.filename),console.log(`📋 Mapped image ${W+1}: ${R.filename}`))}),console.log(`📋 Created ${ye.size} image mappings`),G.map(R=>{var ee;if(!((ee=R.formData)!=null&&ee.mainContent))return R;let W=R.formData.mainContent;const p=/src="data:image\/(jpe?g|png);base64,([^"]+)"/g;return W=W.replace(p,(X,B,se)=>{console.log(`🔍 Found ${B} image (${se.length} chars)`);const F=ye.get(se);return F?(console.log(`✅ Replaced with: images/${F}`),`src="/images/${F}"`):(console.warn("⚠️ No mapping found for this base64 data"),X)}),{...R,formData:{...R.formData,mainContent:W}}})},k=()=>{const G=[Hm,Lm,qm],re=Math.floor(Math.random()*G.length);return G[re]},S=()=>{const G=[wm,xm],re=Math.floor(Math.random()*G.length);return G[re]},h=(()=>{var re,ye,R,W;const G=[];return(re=z.url)!=null&&re.trim()||G.push("Website URL"),(ye=z.name)!=null&&ye.trim()||G.push("Website Name"),(R=z.domain)!=null&&R.trim()||G.push("Website Domain"),(W=z.email)!=null&&W.trim()||G.push("Website Email"),{isValid:G.length===0,missingFields:G}})(),u=!h.isValid,T=()=>{if(!h.isValid){alert(`Please fill in the following required fields in Global Settings:

• ${h.missingFields.join(`
• `)}

These fields are required for generating the website files.`);return}_(),v()};async function _(){const G=new Um,re=E(w,A),ye=km(re,z);console.log(z),Object.entries(ye.pages).forEach(([R,W])=>{G.file(R,W)}),G.file("functions.php",ye.functions),G.file("style.css",ye.styles);try{const W=await(await fetch("/one-page-builder/bootstrap/css/bootstrap.min.css")).blob();G.file("assets/bootstrap/css/bootstrap.min.css",W);const ee=await(await fetch("/one-page-builder/bootstrap/js/bootstrap.min.js")).blob();G.file("assets/bootstrap/js/bootstrap.min.js",ee)}catch(R){console.warn("Could not add Bootstrap files to download:",R)}if(A&&A.length>0){console.log(`🖼️ Adding ${A.length} AI-generated images to ZIP`),console.log("📋 Stored images:",A.map(R=>({filename:R.filename,hasData:!!R.b64_json})));for(const R of A)try{if(!R.b64_json){console.error(`❌ No base64 data for ${R.filename}`);continue}const W=atob(R.b64_json),p=new Uint8Array(W.length);for(let ee=0;ee<W.length;ee++)p[ee]=W.charCodeAt(ee);G.file(`images/${R.filename}`,p),console.log(`Added AI image: ${R.filename}`)}catch(W){console.error(`Error processing AI image ${R.filename}:`,W)}}if(G.file("404.php",k()(d)),z.contactPage&&G.file("contact.php",S()(z.email,d)),G.file("robots.txt",Vm(z.url,w,z.contactPage)),(w.length>1||z.contactPage)&&G.file("sitemap.xml",$m(z.url,w,z.privacyOrTerms,z)),z.privacyOrTerms==="privacy")switch(z.privacyOption){case"1":G.file("privacy.php",Im(z.email,z.url,z.country,z.name,d));break;case"2":G.file("privacy.php",Zm(z.email,z.url,z.country,z.name,d));break}else if(z.privacyOrTerms==="terms")switch(z.termsOption){case"1":G.file("terms.php",Xm(z.email,z.url,z.country,z.name,d));break;case"2":G.file("terms.php",Qm(z.email,z.url,z.country,z.name,d));break}if(G.file(".htaccess",Gm(z.url)),G.file("assets/js/main.js",Wm(w,z.stickyNavbar,z.scrollToTop,z.navStyle)),z.logo&&z.logo.startsWith("data:")){const W=await(await fetch(z.logo)).blob();G.file("images/logo.svg",W)}if(z.favicon&&z.favicon.startsWith("data:")){const W=await(await fetch(z.favicon)).blob();G.file("images/favicon.png",W)}if(z.heroBg&&z.heroBg.startsWith("data:")){const W=await(await fetch(z.heroBg)).blob();G.file("images/hero-bg.jpg",W)}G.generateAsync({type:"blob"}).then(R=>{Bm.saveAs(R,`${z.domain||"multi-page-website"}.zip`)})}const C=w.filter(G=>{var re;return!((re=z.hiddenFromNav)!=null&&re.includes(G.id))}),M=z.customNavItems||[],q=C.filter(G=>!G.parentId),H=C.filter(G=>G.parentId),ne=w.filter(G=>!(G.isDropdownParent&&!G.hasOwnPage)).length,J=()=>{const G=z.footerStyle||"1";let re="";switch(G){case"2":re=Os?Os():ol();break;case"3":re=Rs?Rs():ol();break;case"1":default:re=ol()}return z.whiteLogo&&(re+=`
      .footer img {
        filter: brightness(0) invert(1);
      }
    `),re},de=()=>{const G=z.footerStyle||"1";let re;switch(G){case"2":re=Cs?Cs(z):ll(z);break;case"3":re=ks?ks(z):ll(z);break;case"1":default:re=ll(z)}const ye=new Date().getFullYear();return re=re.replace("<?php echo date('Y'); ?>",ye),z.logo&&z.logo.startsWith("data:")&&(re=re.replace(/src="\/images\/logo\.svg"/g,`src="${z.logo}"`)),re};return o.jsxs("div",{className:"preview-container",style:{"--body-bg-color":z.bodyBgColor||"#f8fafc","--body-text-color":z.bodyTextColor||"#222222","--heading-color":z.headingColor||"#222222","--hero-gradient-1":z.heroGradient1||"#168295","--hero-gradient-2":z.heroGradient2||"#0b5e3a","--footer-bg-color":z.footerBgColor||"#0d0d0d","--link-color":z.linkColor||"#2563eb","--header-bg-color":z.headerBgColor||"#ffffff","--font-family":z.fontFamily&&z.fontFamily!=="system"?z.fontFamily:"system-ui","--nav-link-color":z.navLinkColor||"#141414","--footer-text-color":z.footerTextColor||"#ffffff","--header-text-color":z.headerTextColor||"#ffffffff"},children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:Yd(z)}}),o.jsx("style",{dangerouslySetInnerHTML:{__html:J()}}),o.jsxs("div",{className:"preview-header d-flex justify-content-between align-items-center p-3 bg-light border-bottom",id:"preview-header",children:[o.jsxs("div",{children:[o.jsxs("h5",{className:"mb-0 fw-bold",children:["Preview: ",(x==null?void 0:x.title)||"Untitled Page"]}),o.jsxs("small",{className:"text-muted",children:[ne," page",ne!==1?"s":""," total"]})]}),o.jsxs("div",{className:"d-flex flex-column gap-2 align-items-end",children:[o.jsxs("button",{className:"btn btn-outline-danger btn-sm",onClick:f,title:"Clear all saved data and start fresh",children:[o.jsx("i",{className:"bi bi-trash3"})," Clear All Data"]}),o.jsxs("button",{className:`download-button btn ${u?"btn-secondary":"btn-success"}`,onClick:T,disabled:u,title:u?`Missing required fields: ${h.missingFields.join(", ")}`:"Download your website",children:[o.jsx("i",{className:"bi bi-download"})," Download Multi-Page Site"]}),u&&o.jsxs("small",{className:"text-danger mt-1 text-end",children:["Missing: ",h.missingFields.join(", ")]})]})]}),o.jsxs("div",{className:"website-preview",lang:z.lang||"en",children:[o.jsxs(o.Fragment,{children:[z.navStyle==="1"&&o.jsx(Km,{globalSettings:z,topLevelPages:q,childPages:H,currentPage:x,customNavItems:M}),z.navStyle==="2"&&o.jsx(Pm,{globalSettings:z,topLevelPages:q,childPages:H,currentPage:x,customNavItems:M}),z.navStyle==="3"&&o.jsx(Fm,{globalSettings:z,topLevelPages:q,childPages:H,currentPage:x,customNavItems:M}),z.navStyle==="4"&&o.jsx(Jm,{globalSettings:z,topLevelPages:q,childPages:H,currentPage:x,customNavItems:M})]}),o.jsx("section",{id:"preview-hero",className:`${d} ${z.navStyle==="2"&&"second-style"} ${z.navStyle==="4"&&"fourth-style"}`,style:z.heroBg?{backgroundImage:`url(${z.heroBg})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:{},children:o.jsx("div",{className:"container",style:{position:"relative",zIndex:2},children:o.jsx("div",{className:"row justify-content-center text-center",children:o.jsxs("div",{className:"col-lg-11",children:[o.jsx("h1",{className:"display-4 fw-bold mb-4",children:y.h1||"Welcome to Your Website"}),y.afterH1&&o.jsx("div",{dangerouslySetInnerHTML:{__html:y.afterH1}})]})})})}),o.jsx("main",{className:"container my-5",children:o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-lg-12",children:y.mainContent?o.jsx("div",{className:"content-area",dangerouslySetInnerHTML:{__html:y.mainContent}}):o.jsxs("div",{className:"text-center text-muted py-5",children:[o.jsx("h3",{children:"No content added yet"}),o.jsx("p",{children:"Add some content to see it here"})]})})})}),o.jsx("div",{dangerouslySetInnerHTML:{__html:de()}}),z.scrollToTop&&o.jsxs("a",{href:"#",id:"scroll-top",className:"scroll-top d-flex align-items-center justify-content-center",children:[" ",o.jsx("i",{className:"bi bi-arrow-up-short"})," "]})]})]})},rv=({pages:y,setPages:z,currentPageId:w,setCurrentPageId:x})=>{var h;const[A,m]=Ke.useState(!1),[c,d]=Ke.useState({title:"",slug:"",isDropdown:!1,parentId:null,dropdownHasOwnPage:!1}),v={lang:"en",bodyBgColor:"#f8fafc",bodyTextColor:"#222222",headingColor:"#222222",heroGradient1:"#168295",heroGradient2:"#0b5e3a",footerBgColor:"#0d0d0d",linkColor:"#2563eb",headerBgColor:"#ffffff"},f=u=>{var T;if(window.confirm("Are you sure you want to delete this dropdown and all its child pages?")){const _=y.filter(q=>q.parentId===u),C=[u,..._.map(q=>q.id)],M=y.filter(q=>!C.includes(q.id));C.includes(w)&&x((T=M[0])==null?void 0:T.id),z(M)}},E=()=>{if(!c.title.trim()||!c.slug.trim())return;const u=c.slug.toLowerCase().replace(/[^a-z0-9-]/g,"-");if(y.some(_=>_.slug===u)){alert(`A page with the slug "${u}" already exists. Please choose a different slug.`);return}if(c.parentId==="new-dropdown"){const _={id:Date.now().toString(),title:c.dropdownTitle,slug:c.dropdownHasOwnPage?u:null,isDropdown:!0,isDropdownParent:!0,hasOwnPage:c.dropdownHasOwnPage,children:[],formData:c.dropdownHasOwnPage?{title:c.dropdownTitle,desc:"",h1:c.dropdownTitle,mainContent:`<h2>${c.dropdownTitle}</h2>
<p>This is a dropdown menu parent page.</p>`,...v}:null};z(C=>[...C,_]),c.dropdownHasOwnPage&&x(_.id)}else if(c.parentId){const _={id:Date.now().toString(),title:c.title,slug:u,parentId:c.parentId,isDropdown:!1,formData:{title:c.title,desc:"",h1:c.title,mainContent:`<h2>Welcome to ${c.title}</h2>
<p>This is your new page content. Edit it as needed.</p>`,...v}};z(C=>[...C,_]),x(_.id)}else{const _={id:Date.now().toString(),title:c.title,slug:u,parentId:c.parentId,isHome:y.length===0,formData:{title:c.title,desc:"",h1:c.title,mainContent:`<h2>Welcome to ${c.title}</h2>
<p>This is your new page content. Edit it as needed.</p>`,...v}};z(C=>[...C,_]),x(_.id)}d({title:"",slug:"",parentId:null,dropdownTitle:"",dropdownHasOwnPage:!1}),m(!1)},k=u=>{var T;if(y.length<=1){alert("You must have at least one page.");return}if(window.confirm("Are you sure you want to delete this page?")&&(z(_=>_.filter(C=>C.id!==u)),w===u)){const _=y.filter(C=>C.id!==u);x((T=_[0])==null?void 0:T.id)}},S=u=>{z(T=>T.map(_=>({..._,isHome:_.id===u})))},g=u=>u.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim("-");return o.jsxs("div",{className:"page-manager",children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[o.jsxs("h4",{className:"mb-0",children:["Pages (",y.length,")"]}),o.jsx("button",{className:" add-page-button",onClick:()=>m(!0),children:"+ Add Page"})]}),A&&o.jsx("div",{className:"card mb-3",children:o.jsxs("div",{className:"card-body",children:[o.jsx("h6",{className:"card-title",children:"Add New Page"}),o.jsx("div",{className:"mb-2",children:o.jsx("input",{type:"text",className:"form-control form-control-sm",placeholder:"Page Title",value:c.title,onChange:u=>{const T=u.target.value;d(_=>({..._,title:T,slug:g(T)}))}})}),o.jsx("div",{className:"mb-2",children:o.jsx("input",{type:"text",className:"form-control form-control-sm",placeholder:"URL Slug (e.g., about-us)",value:c.slug,onChange:u=>d(T=>({...T,slug:u.target.value.toLowerCase().replace(/[^a-z0-9-]/g,"-")}))})}),o.jsx("div",{className:"mb-3",children:o.jsxs("select",{className:"form-select form-select-sm",value:c.parentId||"",onChange:u=>d(T=>({...T,parentId:u.target.value||null})),children:[o.jsx("option",{value:"",children:"Main Navigation Item"}),o.jsx("option",{value:"new-dropdown",children:"+ Create New Dropdown"}),y.filter(u=>u.isDropdown).map(u=>o.jsxs("option",{value:u.id,children:['Under "',u.title,'" dropdown']},u.id))]})}),c.parentId==="new-dropdown"&&o.jsxs("div",{className:"mb-3",children:[o.jsx("input",{type:"text",className:"form-control form-control-sm",placeholder:"Dropdown Menu Title (e.g., Services)",value:c.dropdownTitle||"",onChange:u=>d(T=>({...T,dropdownTitle:u.target.value}))}),o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"checkbox",id:"dropdownHasOwnPage",checked:c.dropdownHasOwnPage,onChange:u=>d(T=>({...T,dropdownHasOwnPage:u.target.checked}))}),o.jsx("label",{className:"form-check-label",htmlFor:"dropdownHasOwnPage",children:"Dropdown menu should also be a clickable link to its own page"})]}),o.jsx("small",{className:"text-muted",children:c.dropdownHasOwnPage?"The dropdown title will be clickable and lead to its own page, plus show dropdown items on hover.":"The dropdown title will only show dropdown items on hover, not be a clickable link."})]}),c.parentId&&c.parentId!=="new-dropdown"&&o.jsx("small",{className:"text-muted",children:"This page will appear as an item in the selected dropdown menu."}),o.jsxs("div",{className:"d-flex gap-2",children:[o.jsx("button",{className:"btn btn-success btn-sm",onClick:E,disabled:c.parentId==="new-dropdown"?!((h=c.dropdownTitle)!=null&&h.trim()):!c.title.trim()||!c.slug.trim(),children:c.parentId==="new-dropdown"?"Create Dropdown":"Add Page"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{m(!1),d({title:"",slug:"",parentId:null,dropdownTitle:"",dropdownHasOwnPage:!1})},children:"Cancel"})]})]})}),o.jsx("div",{className:"pages-list",children:y.map(u=>o.jsxs("div",{className:`page-item ${u.id===w?"active":""} ${u.parentId?"child-page":""}`,onClick:()=>{u.formData&&x(u.id)},children:[o.jsxs("div",{className:"page-info",children:[o.jsxs("div",{className:"page-title",children:[u.parentId&&o.jsx("span",{className:"child-indicator",children:"└─ "}),u.title,u.isHome&&o.jsx("span",{className:"home-badge",children:"HOME"}),u.isDropdownParent&&o.jsx("span",{className:"dropdown-badge",children:"DROPDOWN"})]}),o.jsx("div",{className:"page-slug",children:`/${u.slug}`})]}),o.jsxs("div",{className:"page-actions",children:[!u.isDropdownParent&&o.jsxs(o.Fragment,{children:[!u.isHome&&o.jsx("button",{className:"btn btn-sm btn-outline-success",onClick:T=>{T.stopPropagation(),S(u.id)},title:"Set as home page",children:"🏠"}),o.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:T=>{T.stopPropagation(),k(u.id)},title:"Delete page",children:"🗑️"})]}),u.isDropdownParent&&o.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:T=>{T.stopPropagation(),f(u.id)},title:"Delete dropdown and all child pages",children:"🗑️"})]})]},u.id))})]})},lv=({pages:y,globalSettings:z,setGlobalSettings:w})=>{const[x,A]=Ke.useState(!1),[m,c]=Ke.useState({label:"",url:""}),d=()=>{if(!m.label.trim()||!m.url.trim())return;const S=z.customNavItems||[],g={id:Date.now().toString(),label:m.label,url:m.url};w(h=>({...h,customNavItems:[...S,g]})),c({label:"",url:""}),A(!1)},v=S=>{const g=z.customNavItems||[];w(h=>({...h,customNavItems:g.filter(u=>u.id!==S)}))},f=S=>{const g=z.hiddenFromNav||[],h=g.includes(S);w(h?u=>({...u,hiddenFromNav:g.filter(T=>T!==S)}):u=>({...u,hiddenFromNav:[...g,S]}))},E=z.hiddenFromNav||[],k=z.customNavItems||[];return o.jsxs("div",{className:"navigation-builder",children:[o.jsxs("h5",{className:"mb-3",children:[o.jsx("span",{style:{marginRight:8,fontSize:18},children:"🧭"}),"Navigation Settings"]}),o.jsxs("div",{className:"section mb-4",children:[o.jsx("h6",{className:"section-title",children:"Page Navigation"}),o.jsx("p",{className:"text-muted small mb-2",children:"Control which pages appear in your site navigation"}),y.map(S=>o.jsxs("div",{className:"nav-item-control",children:[o.jsxs("div",{className:"nav-item-info",children:[o.jsxs("div",{className:"nav-item-label",children:[S.navLabel||S.title,S.isHome&&o.jsx("span",{className:"home-badge",children:"HOME"})]}),o.jsxs("div",{className:"nav-item-url",children:["/",S.slug]})]}),o.jsxs("div",{className:"form-check form-switch",children:[o.jsx("input",{className:"form-check-input",type:"checkbox",id:`nav-${S.id}`,checked:!E.includes(S.id),onChange:()=>f(S.id)}),o.jsx("label",{className:"form-check-label",htmlFor:`nav-${S.id}`,children:"Show in navigation"})]})]},S.id))]}),o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[o.jsx("h6",{className:"section-title mb-0",children:"Custom Navigation Links"}),o.jsx("button",{className:"btn btn-sm btn-outline-success",onClick:()=>A(!0),children:"+ Add Link"})]}),o.jsx("p",{className:"text-muted small mb-3",children:"Add custom navigation items"}),x&&o.jsx("div",{className:"card mb-3",children:o.jsxs("div",{className:"card-body",children:[o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-6 mb-2",children:o.jsx("input",{type:"text",className:"form-control form-control-sm",placeholder:"Link Label",value:m.label,onChange:S=>c(g=>({...g,label:S.target.value}))})}),o.jsx("div",{className:"col-md-6 mb-2",children:o.jsx("input",{type:"text",className:"form-control form-control-sm",placeholder:"URL (e.g., https://example.com or /contact)",value:m.url,onChange:S=>c(g=>({...g,url:S.target.value}))})})]}),o.jsxs("div",{className:"d-flex gap-2",children:[o.jsx("button",{className:"btn btn-success btn-sm",onClick:d,disabled:!m.label.trim()||!m.url.trim(),children:"Add Link"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{A(!1),c({label:"",url:""})},children:"Cancel"})]})]})}),k.length>0&&o.jsx("div",{className:"custom-links-list",children:k.map(S=>o.jsxs("div",{className:"custom-link-item",children:[o.jsxs("div",{className:"custom-link-info",children:[o.jsx("div",{className:"custom-link-label",children:S.label}),o.jsx("div",{className:"custom-link-url",children:S.url})]}),o.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:()=>v(S.id),title:"Remove link",children:"🗑️"})]},S.id))}),k.length===0&&!x&&o.jsx("div",{className:"text-muted text-center py-3",children:"No custom navigation links added yet"})]})]})};function ov(){const[y,z]=Ke.useState(()=>ea.load(ya.STORED_IMAGES)||[]),[w,x]=Ke.useState(()=>ea.load(ya.PAGES)||[{id:"1",title:"Home",slug:"",isHome:!0,formData:{title:"Welcome to Your Website",desc:"Your amazing website description",h1:"Welcome to Your Website",afterH1:"This is your beautiful new website. Start editing to make it your own!",mainContent:`<h2>Welcome to Your Website</h2>
<p>This is your new page content. Edit it as needed.</p>`}}]),[A,m]=Ke.useState(()=>ea.load(ya.GLOBAL_SETTINGS)||{domain:"",logo:"",favicon:"",faviconName:"",hiddenFromNav:[],customNavItems:[],lang:"en",bodyBgColor:"#f8fafc",bodyTextColor:"#222222",headingColor:"#222222",heroGradient1:"#168295",heroGradient2:"#0b5e3a",footerBgColor:"#0d0d0d",linkColor:"#2563eb",footerTextColor:"#ffffff",headerBgColor:"#ffffff",headerTextColor:"#ffffffff",stickyNavbar:!0,privacyOrTerms:"privacy",privacyOption:"1",termsOption:"1",navStyle:"1",footerStyle:"1",headingsStyle:"1",scrollToTop:!1,contactPage:!1}),[c,d]=Ke.useState(()=>ea.load(ya.CURRENT_PAGE_ID,"1"));Ke.useEffect(()=>{ea.save(ya.STORED_IMAGES,y)},[y]),Ke.useEffect(()=>{ea.save(ya.PAGES,w)},[w]),Ke.useEffect(()=>{ea.save(ya.GLOBAL_SETTINGS,A)},[A]),Ke.useEffect(()=>{ea.save(ya.CURRENT_PAGE_ID,c)},[c]);const v=w.find(S=>S.id===c),f=(v==null?void 0:v.formData)||{},E=S=>{x(g=>g.map(h=>h.id===c?{...h,formData:typeof S=="function"?S(h.formData):S}:h))},k=(S,g=null)=>{E(h=>({...h,mainContent:S})),g&&z(h=>{const u=[...h,g];return console.log("Image stored for download:",u),u})};return o.jsx(o.Fragment,{children:o.jsx("div",{className:"container-fluid",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-6 px-0",children:o.jsxs("div",{className:"builder-panel",children:[o.jsx(rv,{pages:w,setPages:x,currentPageId:c,setCurrentPageId:d}),o.jsx(lv,{pages:w,globalSettings:A,setGlobalSettings:m}),o.jsx(um,{formData:f,setFormData:E,globalSettings:A,setGlobalSettings:m,currentPage:v,onImageInsert:k})]})}),o.jsx("div",{className:"col-md-6 px-0",children:o.jsx(iv,{formData:f,globalSettings:A,pages:w,currentPage:v,storedImages:y})})]})})})}im.createRoot(document.getElementById("root")).render(o.jsx(Ke.StrictMode,{children:o.jsx(ov,{})}));
