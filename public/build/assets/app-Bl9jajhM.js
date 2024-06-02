var XP=(r,a)=>()=>(a||r((a={exports:{}}).exports,a),a.exports);var kq=XP((Lo,Ro)=>{/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fd(r,a){const l=new Set(r.split(","));return u=>l.has(u)}const et={},ds=[],gn=()=>{},eO=()=>!1,lc=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&(r.charCodeAt(2)>122||r.charCodeAt(2)<97),Jg=r=>r.startsWith("onUpdate:"),mt=Object.assign,Xg=(r,a)=>{const l=r.indexOf(a);l>-1&&r.splice(l,1)},tO=Object.prototype.hasOwnProperty,We=(r,a)=>tO.call(r,a),Ae=Array.isArray,us=r=>Ms(r)==="[object Map]",wr=r=>Ms(r)==="[object Set]",dv=r=>Ms(r)==="[object Date]",nO=r=>Ms(r)==="[object RegExp]",Te=r=>typeof r=="function",kt=r=>typeof r=="string",Fo=r=>typeof r=="symbol",it=r=>r!==null&&typeof r=="object",em=r=>(it(r)||Te(r))&&Te(r.then)&&Te(r.catch),a1=Object.prototype.toString,Ms=r=>a1.call(r),oO=r=>Ms(r).slice(8,-1),c1=r=>Ms(r)==="[object Object]",tm=r=>kt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,hs=Fd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vd=r=>{const a=Object.create(null);return l=>a[l]||(a[l]=r(l))},iO=/-(\w)/g,on=Vd(r=>r.replace(iO,(a,l)=>l?l.toUpperCase():"")),rO=/\B([A-Z])/g,Nn=Vd(r=>r.replace(rO,"-$1").toLowerCase()),dc=Vd(r=>r.charAt(0).toUpperCase()+r.slice(1)),ja=Vd(r=>r?`on${dc(r)}`:""),io=(r,a)=>!Object.is(r,a),ps=(r,a)=>{for(let l=0;l<r.length;l++)r[l](a)},l1=(r,a,l,u=!1)=>{Object.defineProperty(r,a,{configurable:!0,enumerable:!1,writable:u,value:l})},ud=r=>{const a=parseFloat(r);return isNaN(a)?r:a},hd=r=>{const a=kt(r)?Number(r):NaN;return isNaN(a)?r:a};let uv;const d1=()=>uv||(uv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),sO="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",aO=Fd(sO);function uc(r){if(Ae(r)){const a={};for(let l=0;l<r.length;l++){const u=r[l],g=kt(u)?uO(u):uc(u);if(g)for(const b in g)a[b]=g[b]}return a}else if(kt(r)||it(r))return r}const cO=/;(?![^(]*\))/g,lO=/:([^]+)/,dO=/\/\*[^]*?\*\//g;function uO(r){const a={};return r.replace(dO,"").split(cO).forEach(l=>{if(l){const u=l.split(lO);u.length>1&&(a[u[0].trim()]=u[1].trim())}}),a}function Bs(r){let a="";if(kt(r))a=r;else if(Ae(r))for(let l=0;l<r.length;l++){const u=Bs(r[l]);u&&(a+=u+" ")}else if(it(r))for(const l in r)r[l]&&(a+=l+" ");return a.trim()}function hO(r){if(!r)return null;let{class:a,style:l}=r;return a&&!kt(a)&&(r.class=Bs(a)),l&&(r.style=uc(l)),r}const pO="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gO=Fd(pO);function u1(r){return!!r||r===""}function mO(r,a){if(r.length!==a.length)return!1;let l=!0;for(let u=0;l&&u<r.length;u++)l=wi(r[u],a[u]);return l}function wi(r,a){if(r===a)return!0;let l=dv(r),u=dv(a);if(l||u)return l&&u?r.getTime()===a.getTime():!1;if(l=Fo(r),u=Fo(a),l||u)return r===a;if(l=Ae(r),u=Ae(a),l||u)return l&&u?mO(r,a):!1;if(l=it(r),u=it(a),l||u){if(!l||!u)return!1;const g=Object.keys(r).length,b=Object.keys(a).length;if(g!==b)return!1;for(const k in r){const _=r.hasOwnProperty(k),m=a.hasOwnProperty(k);if(_&&!m||!_&&m||!wi(r[k],a[k]))return!1}}return String(r)===String(a)}function Hd(r,a){return r.findIndex(l=>wi(l,a))}const ht=r=>kt(r)?r:r==null?"":Ae(r)||it(r)&&(r.toString===a1||!Te(r.toString))?JSON.stringify(r,h1,2):String(r),h1=(r,a)=>a&&a.__v_isRef?h1(r,a.value):us(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((l,[u,g],b)=>(l[Ap(u,b)+" =>"]=g,l),{})}:wr(a)?{[`Set(${a.size})`]:[...a.values()].map(l=>Ap(l))}:Fo(a)?Ap(a):it(a)&&!Ae(a)&&!c1(a)?String(a):a,Ap=(r,a="")=>{var l;return Fo(r)?`Symbol(${(l=r.description)!=null?l:a})`:r};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mn;class nm{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Mn,!a&&Mn&&(this.index=(Mn.scopes||(Mn.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const l=Mn;try{return Mn=this,a()}finally{Mn=l}}}on(){Mn=this}off(){Mn=this.parent}stop(a){if(this._active){let l,u;for(l=0,u=this.effects.length;l<u;l++)this.effects[l].stop();for(l=0,u=this.cleanups.length;l<u;l++)this.cleanups[l]();if(this.scopes)for(l=0,u=this.scopes.length;l<u;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!a){const g=this.parent.scopes.pop();g&&g!==this&&(this.parent.scopes[this.index]=g,g.index=this.index)}this.parent=void 0,this._active=!1}}}function fO(r){return new nm(r)}function p1(r,a=Mn){a&&a.active&&a.effects.push(r)}function g1(){return Mn}function kO(r){Mn&&Mn.cleanups.push(r)}let or;class As{constructor(a,l,u,g){this.fn=a,this.trigger=l,this.scheduler=u,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,p1(this,g)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ci();for(let a=0;a<this._depsLength;a++){const l=this.deps[a];if(l.computed&&(bO(l.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),vi()}return this._dirtyLevel>=4}set dirty(a){this._dirtyLevel=a?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=ki,l=or;try{return ki=!0,or=this,this._runnings++,hv(this),this.fn()}finally{pv(this),this._runnings--,or=l,ki=a}}stop(){this.active&&(hv(this),pv(this),this.onStop&&this.onStop(),this.active=!1)}}function bO(r){return r.value}function hv(r){r._trackId++,r._depsLength=0}function pv(r){if(r.deps.length>r._depsLength){for(let a=r._depsLength;a<r.deps.length;a++)m1(r.deps[a],r);r.deps.length=r._depsLength}}function m1(r,a){const l=r.get(a);l!==void 0&&a._trackId!==l&&(r.delete(a),r.size===0&&r.cleanup())}function wO(r,a){r.effect instanceof As&&(r=r.effect.fn);const l=new As(r,gn,()=>{l.dirty&&l.run()});a&&(mt(l,a),a.scope&&p1(l,a.scope)),(!a||!a.lazy)&&l.run();const u=l.run.bind(l);return u.effect=l,u}function _O(r){r.effect.stop()}let ki=!0,tg=0;const f1=[];function Ci(){f1.push(ki),ki=!1}function vi(){const r=f1.pop();ki=r===void 0?!0:r}function om(){tg++}function im(){for(tg--;!tg&&ng.length;)ng.shift()()}function k1(r,a,l){if(a.get(r)!==r._trackId){a.set(r,r._trackId);const u=r.deps[r._depsLength];u!==a?(u&&m1(u,r),r.deps[r._depsLength++]=a):r._depsLength++}}const ng=[];function b1(r,a,l){om();for(const u of r.keys()){let g;u._dirtyLevel<a&&(g??(g=r.get(u)===u._trackId))&&(u._shouldSchedule||(u._shouldSchedule=u._dirtyLevel===0),u._dirtyLevel=a),u._shouldSchedule&&(g??(g=r.get(u)===u._trackId))&&(u.trigger(),(!u._runnings||u.allowRecurse)&&u._dirtyLevel!==2&&(u._shouldSchedule=!1,u.scheduler&&ng.push(u.scheduler)))}im()}const w1=(r,a)=>{const l=new Map;return l.cleanup=r,l.computed=a,l},pd=new WeakMap,ir=Symbol(""),og=Symbol("");function bn(r,a,l){if(ki&&or){let u=pd.get(r);u||pd.set(r,u=new Map);let g=u.get(l);g||u.set(l,g=w1(()=>u.delete(l))),k1(or,g)}}function zo(r,a,l,u,g,b){const k=pd.get(r);if(!k)return;let _=[];if(a==="clear")_=[...k.values()];else if(l==="length"&&Ae(r)){const m=Number(u);k.forEach((y,C)=>{(C==="length"||!Fo(C)&&C>=m)&&_.push(y)})}else switch(l!==void 0&&_.push(k.get(l)),a){case"add":Ae(r)?tm(l)&&_.push(k.get("length")):(_.push(k.get(ir)),us(r)&&_.push(k.get(og)));break;case"delete":Ae(r)||(_.push(k.get(ir)),us(r)&&_.push(k.get(og)));break;case"set":us(r)&&_.push(k.get(ir));break}om();for(const m of _)m&&b1(m,4);im()}function AO(r,a){const l=pd.get(r);return l&&l.get(a)}const CO=Fd("__proto__,__v_isRef,__isVue"),_1=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(Fo)),gv=vO();function vO(){const r={};return["includes","indexOf","lastIndexOf"].forEach(a=>{r[a]=function(...l){const u=qe(this);for(let b=0,k=this.length;b<k;b++)bn(u,"get",b+"");const g=u[a](...l);return g===-1||g===!1?u[a](...l.map(qe)):g}}),["push","pop","shift","unshift","splice"].forEach(a=>{r[a]=function(...l){Ci(),om();const u=qe(this)[a].apply(this,l);return im(),vi(),u}}),r}function yO(r){Fo(r)||(r=String(r));const a=qe(this);return bn(a,"has",r),a.hasOwnProperty(r)}class A1{constructor(a=!1,l=!1){this._isReadonly=a,this._isShallow=l}get(a,l,u){const g=this._isReadonly,b=this._isShallow;if(l==="__v_isReactive")return!g;if(l==="__v_isReadonly")return g;if(l==="__v_isShallow")return b;if(l==="__v_raw")return u===(g?b?D1:E1:b?x1:y1).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(u)?a:void 0;const k=Ae(a);if(!g){if(k&&We(gv,l))return Reflect.get(gv,l,u);if(l==="hasOwnProperty")return yO}const _=Reflect.get(a,l,u);return(Fo(l)?_1.has(l):CO(l))||(g||bn(a,"get",l),b)?_:Kt(_)?k&&tm(l)?_:_.value:it(_)?g?sm(_):hc(_):_}}class C1 extends A1{constructor(a=!1){super(!1,a)}set(a,l,u,g){let b=a[l];if(!this._isShallow){const m=Cs(b);if(!Ya(u)&&!Cs(u)&&(b=qe(b),u=qe(u)),!Ae(a)&&Kt(b)&&!Kt(u))return m?!1:(b.value=u,!0)}const k=Ae(a)&&tm(l)?Number(l)<a.length:We(a,l),_=Reflect.set(a,l,u,g);return a===qe(g)&&(k?io(u,b)&&zo(a,"set",l,u):zo(a,"add",l,u)),_}deleteProperty(a,l){const u=We(a,l);a[l];const g=Reflect.deleteProperty(a,l);return g&&u&&zo(a,"delete",l,void 0),g}has(a,l){const u=Reflect.has(a,l);return(!Fo(l)||!_1.has(l))&&bn(a,"has",l),u}ownKeys(a){return bn(a,"iterate",Ae(a)?"length":ir),Reflect.ownKeys(a)}}class v1 extends A1{constructor(a=!1){super(!0,a)}set(a,l){return!0}deleteProperty(a,l){return!0}}const xO=new C1,EO=new v1,DO=new C1(!0),SO=new v1(!0),rm=r=>r,Ud=r=>Reflect.getPrototypeOf(r);function Hl(r,a,l=!1,u=!1){r=r.__v_raw;const g=qe(r),b=qe(a);l||(io(a,b)&&bn(g,"get",a),bn(g,"get",b));const{has:k}=Ud(g),_=u?rm:l?cm:Qa;if(k.call(g,a))return _(r.get(a));if(k.call(g,b))return _(r.get(b));r!==g&&r.get(a)}function Ul(r,a=!1){const l=this.__v_raw,u=qe(l),g=qe(r);return a||(io(r,g)&&bn(u,"has",r),bn(u,"has",g)),r===g?l.has(r):l.has(r)||l.has(g)}function $l(r,a=!1){return r=r.__v_raw,!a&&bn(qe(r),"iterate",ir),Reflect.get(r,"size",r)}function mv(r){r=qe(r);const a=qe(this);return Ud(a).has.call(a,r)||(a.add(r),zo(a,"add",r,r)),this}function fv(r,a){a=qe(a);const l=qe(this),{has:u,get:g}=Ud(l);let b=u.call(l,r);b||(r=qe(r),b=u.call(l,r));const k=g.call(l,r);return l.set(r,a),b?io(a,k)&&zo(l,"set",r,a):zo(l,"add",r,a),this}function kv(r){const a=qe(this),{has:l,get:u}=Ud(a);let g=l.call(a,r);g||(r=qe(r),g=l.call(a,r)),u&&u.call(a,r);const b=a.delete(r);return g&&zo(a,"delete",r,void 0),b}function bv(){const r=qe(this),a=r.size!==0,l=r.clear();return a&&zo(r,"clear",void 0,void 0),l}function ql(r,a){return function(u,g){const b=this,k=b.__v_raw,_=qe(k),m=a?rm:r?cm:Qa;return!r&&bn(_,"iterate",ir),k.forEach((y,C)=>u.call(g,m(y),m(C),b))}}function Gl(r,a,l){return function(...u){const g=this.__v_raw,b=qe(g),k=us(b),_=r==="entries"||r===Symbol.iterator&&k,m=r==="keys"&&k,y=g[r](...u),C=l?rm:a?cm:Qa;return!a&&bn(b,"iterate",m?og:ir),{next(){const{value:x,done:A}=y.next();return A?{value:x,done:A}:{value:_?[C(x[0]),C(x[1])]:C(x),done:A}},[Symbol.iterator](){return this}}}}function ri(r){return function(...a){return r==="delete"?!1:r==="clear"?void 0:this}}function TO(){const r={get(b){return Hl(this,b)},get size(){return $l(this)},has:Ul,add:mv,set:fv,delete:kv,clear:bv,forEach:ql(!1,!1)},a={get(b){return Hl(this,b,!1,!0)},get size(){return $l(this)},has:Ul,add:mv,set:fv,delete:kv,clear:bv,forEach:ql(!1,!0)},l={get(b){return Hl(this,b,!0)},get size(){return $l(this,!0)},has(b){return Ul.call(this,b,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:ql(!0,!1)},u={get(b){return Hl(this,b,!0,!0)},get size(){return $l(this,!0)},has(b){return Ul.call(this,b,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:ql(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(b=>{r[b]=Gl(b,!1,!1),l[b]=Gl(b,!0,!1),a[b]=Gl(b,!1,!0),u[b]=Gl(b,!0,!0)}),[r,l,a,u]}const[IO,MO,BO,NO]=TO();function $d(r,a){const l=a?r?NO:BO:r?MO:IO;return(u,g,b)=>g==="__v_isReactive"?!r:g==="__v_isReadonly"?r:g==="__v_raw"?u:Reflect.get(We(l,g)&&g in u?l:u,g,b)}const PO={get:$d(!1,!1)},OO={get:$d(!1,!0)},LO={get:$d(!0,!1)},RO={get:$d(!0,!0)},y1=new WeakMap,x1=new WeakMap,E1=new WeakMap,D1=new WeakMap;function zO(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jO(r){return r.__v_skip||!Object.isExtensible(r)?0:zO(oO(r))}function hc(r){return Cs(r)?r:qd(r,!1,xO,PO,y1)}function S1(r){return qd(r,!1,DO,OO,x1)}function sm(r){return qd(r,!0,EO,LO,E1)}function FO(r){return qd(r,!0,SO,RO,D1)}function qd(r,a,l,u,g){if(!it(r)||r.__v_raw&&!(a&&r.__v_isReactive))return r;const b=g.get(r);if(b)return b;const k=jO(r);if(k===0)return r;const _=new Proxy(r,k===2?u:l);return g.set(r,_),_}function gs(r){return Cs(r)?gs(r.__v_raw):!!(r&&r.__v_isReactive)}function Cs(r){return!!(r&&r.__v_isReadonly)}function Ya(r){return!!(r&&r.__v_isShallow)}function am(r){return r?!!r.__v_raw:!1}function qe(r){const a=r&&r.__v_raw;return a?qe(a):r}function gd(r){return Object.isExtensible(r)&&l1(r,"__v_skip",!0),r}const Qa=r=>it(r)?hc(r):r,cm=r=>it(r)?sm(r):r;class T1{constructor(a,l,u,g){this.getter=a,this._setter=l,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new As(()=>a(this._value),()=>ms(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!g,this.__v_isReadonly=u}get value(){const a=qe(this);return(!a._cacheable||a.effect.dirty)&&io(a._value,a._value=a.effect.run())&&ms(a,4),lm(a),a.effect._dirtyLevel>=2&&ms(a,2),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function VO(r,a,l=!1){let u,g;const b=Te(r);return b?(u=r,g=gn):(u=r.get,g=r.set),new T1(u,g,b||!g,l)}function lm(r){var a;ki&&or&&(r=qe(r),k1(or,(a=r.dep)!=null?a:r.dep=w1(()=>r.dep=void 0,r instanceof T1?r:void 0)))}function ms(r,a=4,l){r=qe(r);const u=r.dep;u&&b1(u,a)}function Kt(r){return!!(r&&r.__v_isRef===!0)}function rn(r){return M1(r,!1)}function I1(r){return M1(r,!0)}function M1(r,a){return Kt(r)?r:new HO(r,a)}class HO{constructor(a,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?a:qe(a),this._value=l?a:Qa(a)}get value(){return lm(this),this._value}set value(a){const l=this.__v_isShallow||Ya(a)||Cs(a);a=l?a:qe(a),io(a,this._rawValue)&&(this._rawValue=a,this._value=l?a:Qa(a),ms(this,4))}}function UO(r){ms(r,4)}function Ne(r){return Kt(r)?r.value:r}function $O(r){return Te(r)?r():Ne(r)}const qO={get:(r,a,l)=>Ne(Reflect.get(r,a,l)),set:(r,a,l,u)=>{const g=r[a];return Kt(g)&&!Kt(l)?(g.value=l,!0):Reflect.set(r,a,l,u)}};function dm(r){return gs(r)?r:new Proxy(r,qO)}class GO{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:u}=a(()=>lm(this),()=>ms(this));this._get=l,this._set=u}get value(){return this._get()}set value(a){this._set(a)}}function B1(r){return new GO(r)}function WO(r){const a=Ae(r)?new Array(r.length):{};for(const l in r)a[l]=N1(r,l);return a}class KO{constructor(a,l,u){this._object=a,this._key=l,this._defaultValue=u,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return AO(qe(this._object),this._key)}}class YO{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function QO(r,a,l){return Kt(r)?r:Te(r)?new YO(r):it(r)&&arguments.length>1?N1(r,a,l):rn(r)}function N1(r,a,l){const u=r[a];return Kt(u)?u:new KO(r,a,l)}const ZO={GET:"get",HAS:"has",ITERATE:"iterate"},JO={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function XO(r,a){}const eL={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},tL={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function jo(r,a,l,u){try{return u?r(...u):r()}catch(g){_r(g,a,l)}}function Pn(r,a,l,u){if(Te(r)){const g=jo(r,a,l,u);return g&&em(g)&&g.catch(b=>{_r(b,a,l)}),g}if(Ae(r)){const g=[];for(let b=0;b<r.length;b++)g.push(Pn(r[b],a,l,u));return g}}function _r(r,a,l,u=!0){const g=a?a.vnode:null;if(a){let b=a.parent;const k=a.proxy,_=`https://vuejs.org/error-reference/#runtime-${l}`;for(;b;){const y=b.ec;if(y){for(let C=0;C<y.length;C++)if(y[C](r,k,_)===!1)return}b=b.parent}const m=a.appContext.config.errorHandler;if(m){Ci(),jo(m,null,10,[r,k,_]),vi();return}}nL(r,l,g,u)}function nL(r,a,l,u=!0){console.error(r)}let Za=!1,ig=!1;const Qt=[];let bo=0;const fs=[];let di=null,Zi=0;const P1=Promise.resolve();let um=null;function Gd(r){const a=um||P1;return r?a.then(this?r.bind(this):r):a}function oL(r){let a=bo+1,l=Qt.length;for(;a<l;){const u=a+l>>>1,g=Qt[u],b=Ja(g);b<r||b===r&&g.pre?a=u+1:l=u}return a}function Wd(r){(!Qt.length||!Qt.includes(r,Za&&r.allowRecurse?bo+1:bo))&&(r.id==null?Qt.push(r):Qt.splice(oL(r.id),0,r),O1())}function O1(){!Za&&!ig&&(ig=!0,um=P1.then(L1))}function iL(r){const a=Qt.indexOf(r);a>bo&&Qt.splice(a,1)}function md(r){Ae(r)?fs.push(...r):(!di||!di.includes(r,r.allowRecurse?Zi+1:Zi))&&fs.push(r),O1()}function wv(r,a,l=Za?bo+1:0){for(;l<Qt.length;l++){const u=Qt[l];if(u&&u.pre){if(r&&u.id!==r.uid)continue;Qt.splice(l,1),l--,u()}}}function fd(r){if(fs.length){const a=[...new Set(fs)].sort((l,u)=>Ja(l)-Ja(u));if(fs.length=0,di){di.push(...a);return}for(di=a,Zi=0;Zi<di.length;Zi++)di[Zi]();di=null,Zi=0}}const Ja=r=>r.id==null?1/0:r.id,rL=(r,a)=>{const l=Ja(r)-Ja(a);if(l===0){if(r.pre&&!a.pre)return-1;if(a.pre&&!r.pre)return 1}return l};function L1(r){ig=!1,Za=!0,Qt.sort(rL);try{for(bo=0;bo<Qt.length;bo++){const a=Qt[bo];a&&a.active!==!1&&jo(a,null,14)}}finally{bo=0,Qt.length=0,fd(),Za=!1,um=null,(Qt.length||fs.length)&&L1()}}let ss,Wl=[];function R1(r,a){var l,u;ss=r,ss?(ss.enabled=!0,Wl.forEach(({event:g,args:b})=>ss.emit(g,...b)),Wl=[]):typeof window<"u"&&window.HTMLElement&&!((u=(l=window.navigator)==null?void 0:l.userAgent)!=null&&u.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(b=>{R1(b,a)}),setTimeout(()=>{ss||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Wl=[])},3e3)):Wl=[]}function sL(r,a,...l){if(r.isUnmounted)return;const u=r.vnode.props||et;let g=l;const b=a.startsWith("update:"),k=b&&a.slice(7);if(k&&k in u){const C=`${k==="modelValue"?"model":k}Modifiers`,{number:x,trim:A}=u[C]||et;A&&(g=l.map(D=>kt(D)?D.trim():D)),x&&(g=l.map(ud))}let _,m=u[_=ja(a)]||u[_=ja(on(a))];!m&&b&&(m=u[_=ja(Nn(a))]),m&&Pn(m,r,6,g);const y=u[_+"Once"];if(y){if(!r.emitted)r.emitted={};else if(r.emitted[_])return;r.emitted[_]=!0,Pn(y,r,6,g)}}function z1(r,a,l=!1){const u=a.emitsCache,g=u.get(r);if(g!==void 0)return g;const b=r.emits;let k={},_=!1;if(!Te(r)){const m=y=>{const C=z1(y,a,!0);C&&(_=!0,mt(k,C))};!l&&a.mixins.length&&a.mixins.forEach(m),r.extends&&m(r.extends),r.mixins&&r.mixins.forEach(m)}return!b&&!_?(it(r)&&u.set(r,null),null):(Ae(b)?b.forEach(m=>k[m]=null):mt(k,b),it(r)&&u.set(r,k),k)}function Kd(r,a){return!r||!lc(a)?!1:(a=a.slice(2).replace(/Once$/,""),We(r,a[0].toLowerCase()+a.slice(1))||We(r,Nn(a))||We(r,a))}let Tt=null,Yd=null;function Xa(r){const a=Tt;return Tt=r,Yd=r&&r.type.__scopeId||null,a}function aL(r){Yd=r}function cL(){Yd=null}const lL=r=>hm;function hm(r,a=Tt,l){if(!a||r._n)return r;const u=(...g)=>{u._d&&hg(-1);const b=Xa(a);let k;try{k=r(...g)}finally{Xa(b),u._d&&hg(1)}return k};return u._n=!0,u._c=!0,u._d=!0,u}function id(r){const{type:a,vnode:l,proxy:u,withProxy:g,propsOptions:[b],slots:k,attrs:_,emit:m,render:y,renderCache:C,props:x,data:A,setupState:D,ctx:T,inheritAttrs:M}=r,O=Xa(r);let F,z;try{if(l.shapeFlag&4){const R=g||u,$=R;F=Bn(y.call($,R,C,x,D,A,T)),z=_}else{const R=a;F=Bn(R.length>1?R(x,{attrs:_,slots:k,emit:m}):R(x,null)),z=a.props?_:uL(_)}}catch(R){Ua.length=0,_r(R,r,1),F=at(Wt)}let P=F;if(z&&M!==!1){const R=Object.keys(z),{shapeFlag:$}=P;R.length&&$&7&&(b&&R.some(Jg)&&(z=hL(z,b)),P=Ao(P,z,!1,!0))}return l.dirs&&(P=Ao(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(l.dirs):l.dirs),l.transition&&(P.transition=l.transition),F=P,Xa(O),F}function dL(r,a=!0){let l;for(let u=0;u<r.length;u++){const g=r[u];if(_i(g)){if(g.type!==Wt||g.children==="v-if"){if(l)return;l=g}}else return}return l}const uL=r=>{let a;for(const l in r)(l==="class"||l==="style"||lc(l))&&((a||(a={}))[l]=r[l]);return a},hL=(r,a)=>{const l={};for(const u in r)(!Jg(u)||!(u.slice(9)in a))&&(l[u]=r[u]);return l};function pL(r,a,l){const{props:u,children:g,component:b}=r,{props:k,children:_,patchFlag:m}=a,y=b.emitsOptions;if(a.dirs||a.transition)return!0;if(l&&m>=0){if(m&1024)return!0;if(m&16)return u?_v(u,k,y):!!k;if(m&8){const C=a.dynamicProps;for(let x=0;x<C.length;x++){const A=C[x];if(k[A]!==u[A]&&!Kd(y,A))return!0}}}else return(g||_)&&(!_||!_.$stable)?!0:u===k?!1:u?k?_v(u,k,y):!0:!!k;return!1}function _v(r,a,l){const u=Object.keys(a);if(u.length!==Object.keys(r).length)return!0;for(let g=0;g<u.length;g++){const b=u[g];if(a[b]!==r[b]&&!Kd(l,b))return!0}return!1}function pm({vnode:r,parent:a},l){for(;a;){const u=a.subTree;if(u.suspense&&u.suspense.activeBranch===r&&(u.el=r.el),u===r)(r=a.vnode).el=l,a=a.parent;else break}}const gm="components",gL="directives";function mm(r,a){return fm(gm,r,!0,a)||r}const j1=Symbol.for("v-ndc");function mL(r){return kt(r)?fm(gm,r,!1)||r:r||j1}function fL(r){return fm(gL,r)}function fm(r,a,l=!0,u=!1){const g=Tt||Pt;if(g){const b=g.type;if(r===gm){const _=kg(b,!1);if(_&&(_===a||_===on(a)||_===dc(on(a))))return b}const k=Av(g[r]||b[r],a)||Av(g.appContext[r],a);return!k&&u?b:k}}function Av(r,a){return r&&(r[a]||r[on(a)]||r[dc(on(a))])}const F1=r=>r.__isSuspense;let rg=0;const kL={name:"Suspense",__isSuspense:!0,process(r,a,l,u,g,b,k,_,m,y){if(r==null)wL(a,l,u,g,b,k,_,m,y);else{if(b&&b.deps>0&&!r.suspense.isInFallback){a.suspense=r.suspense,a.suspense.vnode=a,a.el=r.el;return}_L(r,a,l,u,g,k,_,m,y)}},hydrate:AL,create:km,normalize:CL},bL=kL;function ec(r,a){const l=r.props&&r.props[a];Te(l)&&l()}function wL(r,a,l,u,g,b,k,_,m){const{p:y,o:{createElement:C}}=m,x=C("div"),A=r.suspense=km(r,g,u,a,x,l,b,k,_,m);y(null,A.pendingBranch=r.ssContent,x,null,u,A,b,k),A.deps>0?(ec(r,"onPending"),ec(r,"onFallback"),y(null,r.ssFallback,a,l,u,null,b,k),ks(A,r.ssFallback)):A.resolve(!1,!0)}function _L(r,a,l,u,g,b,k,_,{p:m,um:y,o:{createElement:C}}){const x=a.suspense=r.suspense;x.vnode=a,a.el=r.el;const A=a.ssContent,D=a.ssFallback,{activeBranch:T,pendingBranch:M,isInFallback:O,isHydrating:F}=x;if(M)x.pendingBranch=A,to(A,M)?(m(M,A,x.hiddenContainer,null,g,x,b,k,_),x.deps<=0?x.resolve():O&&(F||(m(T,D,l,u,g,null,b,k,_),ks(x,D)))):(x.pendingId=rg++,F?(x.isHydrating=!1,x.activeBranch=M):y(M,g,x),x.deps=0,x.effects.length=0,x.hiddenContainer=C("div"),O?(m(null,A,x.hiddenContainer,null,g,x,b,k,_),x.deps<=0?x.resolve():(m(T,D,l,u,g,null,b,k,_),ks(x,D))):T&&to(A,T)?(m(T,A,l,u,g,x,b,k,_),x.resolve(!0)):(m(null,A,x.hiddenContainer,null,g,x,b,k,_),x.deps<=0&&x.resolve()));else if(T&&to(A,T))m(T,A,l,u,g,x,b,k,_),ks(x,A);else if(ec(a,"onPending"),x.pendingBranch=A,A.shapeFlag&512?x.pendingId=A.component.suspenseId:x.pendingId=rg++,m(null,A,x.hiddenContainer,null,g,x,b,k,_),x.deps<=0)x.resolve();else{const{timeout:z,pendingId:P}=x;z>0?setTimeout(()=>{x.pendingId===P&&x.fallback(D)},z):z===0&&x.fallback(D)}}function km(r,a,l,u,g,b,k,_,m,y,C=!1){const{p:x,m:A,um:D,n:T,o:{parentNode:M,remove:O}}=y;let F;const z=vL(r);z&&a&&a.pendingBranch&&(F=a.pendingId,a.deps++);const P=r.props?hd(r.props.timeout):void 0,R=b,$={vnode:r,parent:a,parentComponent:l,namespace:k,container:u,hiddenContainer:g,deps:0,pendingId:rg++,timeout:typeof P=="number"?P:-1,activeBranch:null,pendingBranch:null,isInFallback:!C,isHydrating:C,isUnmounted:!1,effects:[],resolve(q=!1,B=!1){const{vnode:V,activeBranch:W,pendingBranch:J,pendingId:ce,effects:te,parentComponent:de,container:Ee}=$;let xe=!1;$.isHydrating?$.isHydrating=!1:q||(xe=W&&J.transition&&J.transition.mode==="out-in",xe&&(W.transition.afterLeave=()=>{ce===$.pendingId&&(A(J,Ee,b===R?T(W):b,0),md(te))}),W&&(M(W.el)!==$.hiddenContainer&&(b=T(W)),D(W,de,$,!0)),xe||A(J,Ee,b,0)),ks($,J),$.pendingBranch=null,$.isInFallback=!1;let be=$.parent,fe=!1;for(;be;){if(be.pendingBranch){be.effects.push(...te),fe=!0;break}be=be.parent}!fe&&!xe&&md(te),$.effects=[],z&&a&&a.pendingBranch&&F===a.pendingId&&(a.deps--,a.deps===0&&!B&&a.resolve()),ec(V,"onResolve")},fallback(q){if(!$.pendingBranch)return;const{vnode:B,activeBranch:V,parentComponent:W,container:J,namespace:ce}=$;ec(B,"onFallback");const te=T(V),de=()=>{$.isInFallback&&(x(null,q,J,te,W,null,ce,_,m),ks($,q))},Ee=q.transition&&q.transition.mode==="out-in";Ee&&(V.transition.afterLeave=de),$.isInFallback=!0,D(V,W,null,!0),Ee||de()},move(q,B,V){$.activeBranch&&A($.activeBranch,q,B,V),$.container=q},next(){return $.activeBranch&&T($.activeBranch)},registerDep(q,B){const V=!!$.pendingBranch;V&&$.deps++;const W=q.vnode.el;q.asyncDep.catch(J=>{_r(J,q,0)}).then(J=>{if(q.isUnmounted||$.isUnmounted||$.pendingId!==q.suspenseId)return;q.asyncResolved=!0;const{vnode:ce}=q;mg(q,J,!1),W&&(ce.el=W);const te=!W&&q.subTree.el;B(q,ce,M(W||q.subTree.el),W?null:T(q.subTree),$,k,m),te&&O(te),pm(q,ce.el),V&&--$.deps===0&&$.resolve()})},unmount(q,B){$.isUnmounted=!0,$.activeBranch&&D($.activeBranch,l,q,B),$.pendingBranch&&D($.pendingBranch,l,q,B)}};return $}function AL(r,a,l,u,g,b,k,_,m){const y=a.suspense=km(a,u,l,r.parentNode,document.createElement("div"),null,g,b,k,_,!0),C=m(r,y.pendingBranch=a.ssContent,l,y,b,k);return y.deps===0&&y.resolve(!1,!0),C}function CL(r){const{shapeFlag:a,children:l}=r,u=a&32;r.ssContent=Cv(u?l.default:l),r.ssFallback=u?Cv(l.fallback):at(Wt)}function Cv(r){let a;if(Te(r)){const l=gr&&r._c;l&&(r._d=!1,ye()),r=r(),l&&(r._d=!0,a=mn,vx())}return Ae(r)&&(r=dL(r)),r=Bn(r),a&&!r.dynamicChildren&&(r.dynamicChildren=a.filter(l=>l!==r)),r}function V1(r,a){a&&a.pendingBranch?Ae(r)?a.effects.push(...r):a.effects.push(r):md(r)}function ks(r,a){r.activeBranch=a;const{vnode:l,parentComponent:u}=r;let g=a.el;for(;!g&&a.component;)a=a.component.subTree,g=a.el;l.el=g,u&&u.subTree===l&&(u.vnode.el=g,pm(u,g))}function vL(r){const a=r.props&&r.props.suspensible;return a!=null&&a!==!1}const H1=Symbol.for("v-scx"),U1=()=>Va(H1);function yL(r,a){return pc(r,null,a)}function $1(r,a){return pc(r,null,{flush:"post"})}function q1(r,a){return pc(r,null,{flush:"sync"})}const Kl={};function bs(r,a,l){return pc(r,a,l)}function pc(r,a,{immediate:l,deep:u,flush:g,once:b,onTrack:k,onTrigger:_}=et){if(a&&b){const q=a;a=(...B)=>{q(...B),$()}}const m=Pt,y=q=>u===!0?q:tr(q,u===!1?1:void 0);let C,x=!1,A=!1;if(Kt(r)?(C=()=>r.value,x=Ya(r)):gs(r)?(C=()=>y(r),x=!0):Ae(r)?(A=!0,x=r.some(q=>gs(q)||Ya(q)),C=()=>r.map(q=>{if(Kt(q))return q.value;if(gs(q))return y(q);if(Te(q))return jo(q,m,2)})):Te(r)?a?C=()=>jo(r,m,2):C=()=>(D&&D(),Pn(r,m,3,[T])):C=gn,a&&u){const q=C;C=()=>tr(q())}let D,T=q=>{D=P.onStop=()=>{jo(q,m,4),D=P.onStop=void 0}},M;if(mc)if(T=gn,a?l&&Pn(a,m,3,[C(),A?[]:void 0,T]):C(),g==="sync"){const q=U1();M=q.__watcherHandles||(q.__watcherHandles=[])}else return gn;let O=A?new Array(r.length).fill(Kl):Kl;const F=()=>{if(!(!P.active||!P.dirty))if(a){const q=P.run();(u||x||(A?q.some((B,V)=>io(B,O[V])):io(q,O)))&&(D&&D(),Pn(a,m,3,[q,O===Kl?void 0:A&&O[0]===Kl?[]:O,T]),O=q)}else P.run()};F.allowRecurse=!!a;let z;g==="sync"?z=F:g==="post"?z=()=>Gt(F,m&&m.suspense):(F.pre=!0,m&&(F.id=m.uid),z=()=>Wd(F));const P=new As(C,gn,z),R=g1(),$=()=>{P.stop(),R&&Xg(R.effects,P)};return a?l?F():O=P.run():g==="post"?Gt(P.run.bind(P),m&&m.suspense):P.run(),M&&M.push($),$}function xL(r,a,l){const u=this.proxy,g=kt(r)?r.includes(".")?G1(u,r):()=>u[r]:r.bind(u,u);let b;Te(a)?b=a:(b=a.handler,l=a);const k=mr(this),_=pc(g,b.bind(u),l);return k(),_}function G1(r,a){const l=a.split(".");return()=>{let u=r;for(let g=0;g<l.length&&u;g++)u=u[l[g]];return u}}function tr(r,a=1/0,l){if(a<=0||!it(r)||r.__v_skip||(l=l||new Set,l.has(r)))return r;if(l.add(r),a--,Kt(r))tr(r.value,a,l);else if(Ae(r))for(let u=0;u<r.length;u++)tr(r[u],a,l);else if(wr(r)||us(r))r.forEach(u=>{tr(u,a,l)});else if(c1(r))for(const u in r)tr(r[u],a,l);return r}function Vo(r,a){if(Tt===null)return r;const l=iu(Tt)||Tt.proxy,u=r.dirs||(r.dirs=[]);for(let g=0;g<a.length;g++){let[b,k,_,m=et]=a[g];b&&(Te(b)&&(b={mounted:b,updated:b}),b.deep&&tr(k),u.push({dir:b,instance:l,value:k,oldValue:void 0,arg:_,modifiers:m}))}return r}function mo(r,a,l,u){const g=r.dirs,b=a&&a.dirs;for(let k=0;k<g.length;k++){const _=g[k];b&&(_.oldValue=b[k].value);let m=_.dir[u];m&&(Ci(),Pn(m,l,8,[r.el,_,r,a]),vi())}}const ui=Symbol("_leaveCb"),Yl=Symbol("_enterCb");function bm(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ns(()=>{r.isMounted=!0}),eu(()=>{r.isUnmounting=!0}),r}const Un=[Function,Array],wm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Un,onEnter:Un,onAfterEnter:Un,onEnterCancelled:Un,onBeforeLeave:Un,onLeave:Un,onAfterLeave:Un,onLeaveCancelled:Un,onBeforeAppear:Un,onAppear:Un,onAfterAppear:Un,onAppearCancelled:Un},EL={name:"BaseTransition",props:wm,setup(r,{slots:a}){const l=Uo(),u=bm();return()=>{const g=a.default&&Qd(a.default(),!0);if(!g||!g.length)return;let b=g[0];if(g.length>1){for(const A of g)if(A.type!==Wt){b=A;break}}const k=qe(r),{mode:_}=k;if(u.isLeaving)return Cp(b);const m=vv(b);if(!m)return Cp(b);const y=vs(m,k,u,l);hr(m,y);const C=l.subTree,x=C&&vv(C);if(x&&x.type!==Wt&&!to(m,x)){const A=vs(x,k,u,l);if(hr(x,A),_==="out-in"&&m.type!==Wt)return u.isLeaving=!0,A.afterLeave=()=>{u.isLeaving=!1,l.update.active!==!1&&(l.effect.dirty=!0,l.update())},Cp(b);_==="in-out"&&m.type!==Wt&&(A.delayLeave=(D,T,M)=>{const O=K1(u,x);O[String(x.key)]=x,D[ui]=()=>{T(),D[ui]=void 0,delete y.delayedLeave},y.delayedLeave=M})}return b}}},W1=EL;function K1(r,a){const{leavingVNodes:l}=r;let u=l.get(a.type);return u||(u=Object.create(null),l.set(a.type,u)),u}function vs(r,a,l,u){const{appear:g,mode:b,persisted:k=!1,onBeforeEnter:_,onEnter:m,onAfterEnter:y,onEnterCancelled:C,onBeforeLeave:x,onLeave:A,onAfterLeave:D,onLeaveCancelled:T,onBeforeAppear:M,onAppear:O,onAfterAppear:F,onAppearCancelled:z}=a,P=String(r.key),R=K1(l,r),$=(V,W)=>{V&&Pn(V,u,9,W)},q=(V,W)=>{const J=W[1];$(V,W),Ae(V)?V.every(ce=>ce.length<=1)&&J():V.length<=1&&J()},B={mode:b,persisted:k,beforeEnter(V){let W=_;if(!l.isMounted)if(g)W=M||_;else return;V[ui]&&V[ui](!0);const J=R[P];J&&to(r,J)&&J.el[ui]&&J.el[ui](),$(W,[V])},enter(V){let W=m,J=y,ce=C;if(!l.isMounted)if(g)W=O||m,J=F||y,ce=z||C;else return;let te=!1;const de=V[Yl]=Ee=>{te||(te=!0,Ee?$(ce,[V]):$(J,[V]),B.delayedLeave&&B.delayedLeave(),V[Yl]=void 0)};W?q(W,[V,de]):de()},leave(V,W){const J=String(r.key);if(V[Yl]&&V[Yl](!0),l.isUnmounting)return W();$(x,[V]);let ce=!1;const te=V[ui]=de=>{ce||(ce=!0,W(),de?$(T,[V]):$(D,[V]),V[ui]=void 0,R[J]===r&&delete R[J])};R[J]=r,A?q(A,[V,te]):te()},clone(V){return vs(V,a,l,u)}};return B}function Cp(r){if(gc(r))return r=Ao(r),r.children=null,r}function vv(r){if(!gc(r))return r;const{shapeFlag:a,children:l}=r;if(l){if(a&16)return l[0];if(a&32&&Te(l.default))return l.default()}}function hr(r,a){r.shapeFlag&6&&r.component?hr(r.component.subTree,a):r.shapeFlag&128?(r.ssContent.transition=a.clone(r.ssContent),r.ssFallback.transition=a.clone(r.ssFallback)):r.transition=a}function Qd(r,a=!1,l){let u=[],g=0;for(let b=0;b<r.length;b++){let k=r[b];const _=l==null?k.key:String(l)+String(k.key!=null?k.key:b);k.type===Ke?(k.patchFlag&128&&g++,u=u.concat(Qd(k.children,a,_))):(a||k.type!==Wt)&&u.push(_!=null?Ao(k,{key:_}):k)}if(g>1)for(let b=0;b<u.length;b++)u[b].patchFlag=-2;return u}/*! #__NO_SIDE_EFFECTS__ */function Zd(r,a){return Te(r)?mt({name:r.name},a,{setup:r}):r}const rr=r=>!!r.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function DL(r){Te(r)&&(r={loader:r});const{loader:a,loadingComponent:l,errorComponent:u,delay:g=200,timeout:b,suspensible:k=!0,onError:_}=r;let m=null,y,C=0;const x=()=>(C++,m=null,A()),A=()=>{let D;return m||(D=m=a().catch(T=>{if(T=T instanceof Error?T:new Error(String(T)),_)return new Promise((M,O)=>{_(T,()=>M(x()),()=>O(T),C+1)});throw T}).then(T=>D!==m&&m?m:(T&&(T.__esModule||T[Symbol.toStringTag]==="Module")&&(T=T.default),y=T,T)))};return Zd({name:"AsyncComponentWrapper",__asyncLoader:A,get __asyncResolved(){return y},setup(){const D=Pt;if(y)return()=>vp(y,D);const T=z=>{m=null,_r(z,D,13,!u)};if(k&&D.suspense||mc)return A().then(z=>()=>vp(z,D)).catch(z=>(T(z),()=>u?at(u,{error:z}):null));const M=rn(!1),O=rn(),F=rn(!!g);return g&&setTimeout(()=>{F.value=!1},g),b!=null&&setTimeout(()=>{if(!M.value&&!O.value){const z=new Error(`Async component timed out after ${b}ms.`);T(z),O.value=z}},b),A().then(()=>{M.value=!0,D.parent&&gc(D.parent.vnode)&&(D.parent.effect.dirty=!0,Wd(D.parent.update))}).catch(z=>{T(z),O.value=z}),()=>{if(M.value&&y)return vp(y,D);if(O.value&&u)return at(u,{error:O.value});if(l&&!F.value)return at(l)}}})}function vp(r,a){const{ref:l,props:u,children:g,ce:b}=a.vnode,k=at(r,u,g);return k.ref=l,k.ce=b,delete a.vnode.ce,k}const gc=r=>r.type.__isKeepAlive,SL={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(r,{slots:a}){const l=Uo(),u=l.ctx;if(!u.renderer)return()=>{const z=a.default&&a.default();return z&&z.length===1?z[0]:z};const g=new Map,b=new Set;let k=null;const _=l.suspense,{renderer:{p:m,m:y,um:C,o:{createElement:x}}}=u,A=x("div");u.activate=(z,P,R,$,q)=>{const B=z.component;y(z,P,R,0,_),m(B.vnode,z,P,R,B,_,$,z.slotScopeIds,q),Gt(()=>{B.isDeactivated=!1,B.a&&ps(B.a);const V=z.props&&z.props.onVnodeMounted;V&&pn(V,B.parent,z)},_)},u.deactivate=z=>{const P=z.component;y(z,A,null,1,_),Gt(()=>{P.da&&ps(P.da);const R=z.props&&z.props.onVnodeUnmounted;R&&pn(R,P.parent,z),P.isDeactivated=!0},_)};function D(z){yp(z),C(z,l,_,!0)}function T(z){g.forEach((P,R)=>{const $=kg(P.type);$&&(!z||!z($))&&M(R)})}function M(z){const P=g.get(z);!k||!to(P,k)?D(P):k&&yp(k),g.delete(z),b.delete(z)}bs(()=>[r.include,r.exclude],([z,P])=>{z&&T(R=>La(z,R)),P&&T(R=>!La(P,R))},{flush:"post",deep:!0});let O=null;const F=()=>{O!=null&&g.set(O,xp(l.subTree))};return Ns(F),Xd(F),eu(()=>{g.forEach(z=>{const{subTree:P,suspense:R}=l,$=xp(P);if(z.type===$.type&&z.key===$.key){yp($);const q=$.component.da;q&&Gt(q,R);return}D(z)})}),()=>{if(O=null,!a.default)return null;const z=a.default(),P=z[0];if(z.length>1)return k=null,z;if(!_i(P)||!(P.shapeFlag&4)&&!(P.shapeFlag&128))return k=null,P;let R=xp(P);const $=R.type,q=kg(rr(R)?R.type.__asyncResolved||{}:$),{include:B,exclude:V,max:W}=r;if(B&&(!q||!La(B,q))||V&&q&&La(V,q))return k=R,P;const J=R.key==null?$:R.key,ce=g.get(J);return R.el&&(R=Ao(R),P.shapeFlag&128&&(P.ssContent=R)),O=J,ce?(R.el=ce.el,R.component=ce.component,R.transition&&hr(R,R.transition),R.shapeFlag|=512,b.delete(J),b.add(J)):(b.add(J),W&&b.size>parseInt(W,10)&&M(b.values().next().value)),R.shapeFlag|=256,k=R,F1(P.type)?P:R}}},TL=SL;function La(r,a){return Ae(r)?r.some(l=>La(l,a)):kt(r)?r.split(",").includes(a):nO(r)?r.test(a):!1}function Y1(r,a){Z1(r,"a",a)}function Q1(r,a){Z1(r,"da",a)}function Z1(r,a,l=Pt){const u=r.__wdc||(r.__wdc=()=>{let g=l;for(;g;){if(g.isDeactivated)return;g=g.parent}return r()});if(Jd(a,u,l),l){let g=l.parent;for(;g&&g.parent;)gc(g.parent.vnode)&&IL(u,a,l,g),g=g.parent}}function IL(r,a,l,u){const g=Jd(a,r,u,!0);tu(()=>{Xg(u[a],g)},l)}function yp(r){r.shapeFlag&=-257,r.shapeFlag&=-513}function xp(r){return r.shapeFlag&128?r.ssContent:r}function Jd(r,a,l=Pt,u=!1){if(l){const g=l[r]||(l[r]=[]),b=a.__weh||(a.__weh=(...k)=>{if(l.isUnmounted)return;Ci();const _=mr(l),m=Pn(a,l,r,k);return _(),vi(),m});return u?g.unshift(b):g.push(b),b}}const Ho=r=>(a,l=Pt)=>(!mc||r==="sp")&&Jd(r,(...u)=>a(...u),l),J1=Ho("bm"),Ns=Ho("m"),X1=Ho("bu"),Xd=Ho("u"),eu=Ho("bum"),tu=Ho("um"),ex=Ho("sp"),tx=Ho("rtg"),nx=Ho("rtc");function ox(r,a=Pt){Jd("ec",r,a)}function no(r,a,l,u){let g;const b=l&&l[u];if(Ae(r)||kt(r)){g=new Array(r.length);for(let k=0,_=r.length;k<_;k++)g[k]=a(r[k],k,void 0,b&&b[k])}else if(typeof r=="number"){g=new Array(r);for(let k=0;k<r;k++)g[k]=a(k+1,k,void 0,b&&b[k])}else if(it(r))if(r[Symbol.iterator])g=Array.from(r,(k,_)=>a(k,_,void 0,b&&b[_]));else{const k=Object.keys(r);g=new Array(k.length);for(let _=0,m=k.length;_<m;_++){const y=k[_];g[_]=a(r[y],y,_,b&&b[_])}}else g=[];return l&&(l[u]=g),g}function ML(r,a){for(let l=0;l<a.length;l++){const u=a[l];if(Ae(u))for(let g=0;g<u.length;g++)r[u[g].name]=u[g].fn;else u&&(r[u.name]=u.key?(...g)=>{const b=u.fn(...g);return b&&(b.key=u.key),b}:u.fn)}return r}function nu(r,a,l={},u,g){if(Tt.isCE||Tt.parent&&rr(Tt.parent)&&Tt.parent.isCE)return a!=="default"&&(l.name=a),at("slot",l,u&&u());let b=r[a];b&&b._c&&(b._d=!1),ye();const k=b&&ix(b(l)),_=vm(Ke,{key:l.key||k&&k.key||`_${a}`},k||(u?u():[]),k&&r._===1?64:-2);return!g&&_.scopeId&&(_.slotScopeIds=[_.scopeId+"-s"]),b&&b._c&&(b._d=!0),_}function ix(r){return r.some(a=>_i(a)?!(a.type===Wt||a.type===Ke&&!ix(a.children)):!0)?r:null}function BL(r,a){const l={};for(const u in r)l[a&&/[A-Z]/.test(u)?`on:${u}`:ja(u)]=r[u];return l}const sg=r=>r?Tx(r)?iu(r)||r.proxy:sg(r.parent):null,Fa=mt(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>sg(r.parent),$root:r=>sg(r.root),$emit:r=>r.emit,$options:r=>_m(r),$forceUpdate:r=>r.f||(r.f=()=>{r.effect.dirty=!0,Wd(r.update)}),$nextTick:r=>r.n||(r.n=Gd.bind(r.proxy)),$watch:r=>xL.bind(r)}),Ep=(r,a)=>r!==et&&!r.__isScriptSetup&&We(r,a),ag={get({_:r},a){if(a==="__v_skip")return!0;const{ctx:l,setupState:u,data:g,props:b,accessCache:k,type:_,appContext:m}=r;let y;if(a[0]!=="$"){const D=k[a];if(D!==void 0)switch(D){case 1:return u[a];case 2:return g[a];case 4:return l[a];case 3:return b[a]}else{if(Ep(u,a))return k[a]=1,u[a];if(g!==et&&We(g,a))return k[a]=2,g[a];if((y=r.propsOptions[0])&&We(y,a))return k[a]=3,b[a];if(l!==et&&We(l,a))return k[a]=4,l[a];cg&&(k[a]=0)}}const C=Fa[a];let x,A;if(C)return a==="$attrs"&&bn(r.attrs,"get",""),C(r);if((x=_.__cssModules)&&(x=x[a]))return x;if(l!==et&&We(l,a))return k[a]=4,l[a];if(A=m.config.globalProperties,We(A,a))return A[a]},set({_:r},a,l){const{data:u,setupState:g,ctx:b}=r;return Ep(g,a)?(g[a]=l,!0):u!==et&&We(u,a)?(u[a]=l,!0):We(r.props,a)||a[0]==="$"&&a.slice(1)in r?!1:(b[a]=l,!0)},has({_:{data:r,setupState:a,accessCache:l,ctx:u,appContext:g,propsOptions:b}},k){let _;return!!l[k]||r!==et&&We(r,k)||Ep(a,k)||(_=b[0])&&We(_,k)||We(u,k)||We(Fa,k)||We(g.config.globalProperties,k)},defineProperty(r,a,l){return l.get!=null?r._.accessCache[a]=0:We(l,"value")&&this.set(r,a,l.value,null),Reflect.defineProperty(r,a,l)}},NL=mt({},ag,{get(r,a){if(a!==Symbol.unscopables)return ag.get(r,a,r)},has(r,a){return a[0]!=="_"&&!aO(a)}});function PL(){return null}function OL(){return null}function LL(r){}function RL(r){}function zL(){return null}function jL(){}function FL(r,a){return null}function VL(){return rx().slots}function HL(){return rx().attrs}function rx(){const r=Uo();return r.setupContext||(r.setupContext=Bx(r))}function tc(r){return Ae(r)?r.reduce((a,l)=>(a[l]=null,a),{}):r}function UL(r,a){const l=tc(r);for(const u in a){if(u.startsWith("__skip"))continue;let g=l[u];g?Ae(g)||Te(g)?g=l[u]={type:g,default:a[u]}:g.default=a[u]:g===null&&(g=l[u]={default:a[u]}),g&&a[`__skip_${u}`]&&(g.skipFactory=!0)}return l}function $L(r,a){return!r||!a?r||a:Ae(r)&&Ae(a)?r.concat(a):mt({},tc(r),tc(a))}function qL(r,a){const l={};for(const u in r)a.includes(u)||Object.defineProperty(l,u,{enumerable:!0,get:()=>r[u]});return l}function GL(r){const a=Uo();let l=r();return gg(),em(l)&&(l=l.catch(u=>{throw mr(a),u})),[l,()=>mr(a)]}let cg=!0;function WL(r){const a=_m(r),l=r.proxy,u=r.ctx;cg=!1,a.beforeCreate&&yv(a.beforeCreate,r,"bc");const{data:g,computed:b,methods:k,watch:_,provide:m,inject:y,created:C,beforeMount:x,mounted:A,beforeUpdate:D,updated:T,activated:M,deactivated:O,beforeDestroy:F,beforeUnmount:z,destroyed:P,unmounted:R,render:$,renderTracked:q,renderTriggered:B,errorCaptured:V,serverPrefetch:W,expose:J,inheritAttrs:ce,components:te,directives:de,filters:Ee}=a;if(y&&KL(y,u,null),k)for(const fe in k){const Ce=k[fe];Te(Ce)&&(u[fe]=Ce.bind(l))}if(g){const fe=g.call(l,l);it(fe)&&(r.data=hc(fe))}if(cg=!0,b)for(const fe in b){const Ce=b[fe],Ot=Te(Ce)?Ce.bind(l,l):Te(Ce.get)?Ce.get.bind(l,l):gn,wn=!Te(Ce)&&Te(Ce.set)?Ce.set.bind(l):gn,sn=Nx({get:Ot,set:wn});Object.defineProperty(u,fe,{enumerable:!0,configurable:!0,get:()=>sn.value,set:Jt=>sn.value=Jt})}if(_)for(const fe in _)sx(_[fe],u,l,fe);if(m){const fe=Te(m)?m.call(l):m;Reflect.ownKeys(fe).forEach(Ce=>{cx(Ce,fe[Ce])})}C&&yv(C,r,"c");function be(fe,Ce){Ae(Ce)?Ce.forEach(Ot=>fe(Ot.bind(l))):Ce&&fe(Ce.bind(l))}if(be(J1,x),be(Ns,A),be(X1,D),be(Xd,T),be(Y1,M),be(Q1,O),be(ox,V),be(nx,q),be(tx,B),be(eu,z),be(tu,R),be(ex,W),Ae(J))if(J.length){const fe=r.exposed||(r.exposed={});J.forEach(Ce=>{Object.defineProperty(fe,Ce,{get:()=>l[Ce],set:Ot=>l[Ce]=Ot})})}else r.exposed||(r.exposed={});$&&r.render===gn&&(r.render=$),ce!=null&&(r.inheritAttrs=ce),te&&(r.components=te),de&&(r.directives=de)}function KL(r,a,l=gn){Ae(r)&&(r=lg(r));for(const u in r){const g=r[u];let b;it(g)?"default"in g?b=Va(g.from||u,g.default,!0):b=Va(g.from||u):b=Va(g),Kt(b)?Object.defineProperty(a,u,{enumerable:!0,configurable:!0,get:()=>b.value,set:k=>b.value=k}):a[u]=b}}function yv(r,a,l){Pn(Ae(r)?r.map(u=>u.bind(a.proxy)):r.bind(a.proxy),a,l)}function sx(r,a,l,u){const g=u.includes(".")?G1(l,u):()=>l[u];if(kt(r)){const b=a[r];Te(b)&&bs(g,b)}else if(Te(r))bs(g,r.bind(l));else if(it(r))if(Ae(r))r.forEach(b=>sx(b,a,l,u));else{const b=Te(r.handler)?r.handler.bind(l):a[r.handler];Te(b)&&bs(g,b,r)}}function _m(r){const a=r.type,{mixins:l,extends:u}=a,{mixins:g,optionsCache:b,config:{optionMergeStrategies:k}}=r.appContext,_=b.get(a);let m;return _?m=_:!g.length&&!l&&!u?m=a:(m={},g.length&&g.forEach(y=>kd(m,y,k,!0)),kd(m,a,k)),it(a)&&b.set(a,m),m}function kd(r,a,l,u=!1){const{mixins:g,extends:b}=a;b&&kd(r,b,l,!0),g&&g.forEach(k=>kd(r,k,l,!0));for(const k in a)if(!(u&&k==="expose")){const _=YL[k]||l&&l[k];r[k]=_?_(r[k],a[k]):a[k]}return r}const YL={data:xv,props:Ev,emits:Ev,methods:Ra,computed:Ra,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:Ra,directives:Ra,watch:ZL,provide:xv,inject:QL};function xv(r,a){return a?r?function(){return mt(Te(r)?r.call(this,this):r,Te(a)?a.call(this,this):a)}:a:r}function QL(r,a){return Ra(lg(r),lg(a))}function lg(r){if(Ae(r)){const a={};for(let l=0;l<r.length;l++)a[r[l]]=r[l];return a}return r}function nn(r,a){return r?[...new Set([].concat(r,a))]:a}function Ra(r,a){return r?mt(Object.create(null),r,a):a}function Ev(r,a){return r?Ae(r)&&Ae(a)?[...new Set([...r,...a])]:mt(Object.create(null),tc(r),tc(a??{})):a}function ZL(r,a){if(!r)return a;if(!a)return r;const l=mt(Object.create(null),r);for(const u in a)l[u]=nn(r[u],a[u]);return l}function ax(){return{app:null,config:{isNativeTag:eO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let JL=0;function XL(r,a){return function(u,g=null){Te(u)||(u=mt({},u)),g!=null&&!it(g)&&(g=null);const b=ax(),k=new WeakSet;let _=!1;const m=b.app={_uid:JL++,_component:u,_props:g,_container:null,_context:b,_instance:null,version:Ox,get config(){return b.config},set config(y){},use(y,...C){return k.has(y)||(y&&Te(y.install)?(k.add(y),y.install(m,...C)):Te(y)&&(k.add(y),y(m,...C))),m},mixin(y){return b.mixins.includes(y)||b.mixins.push(y),m},component(y,C){return C?(b.components[y]=C,m):b.components[y]},directive(y,C){return C?(b.directives[y]=C,m):b.directives[y]},mount(y,C,x){if(!_){const A=at(u,g);return A.appContext=b,x===!0?x="svg":x===!1&&(x=void 0),C&&a?a(A,y):r(A,y,x),_=!0,m._container=y,y.__vue_app__=m,iu(A.component)||A.component.proxy}},unmount(){_&&(r(null,m._container),delete m._container.__vue_app__)},provide(y,C){return b.provides[y]=C,m},runWithContext(y){const C=ws;ws=m;try{return y()}finally{ws=C}}};return m}}let ws=null;function cx(r,a){if(Pt){let l=Pt.provides;const u=Pt.parent&&Pt.parent.provides;u===l&&(l=Pt.provides=Object.create(u)),l[r]=a}}function Va(r,a,l=!1){const u=Pt||Tt;if(u||ws){const g=u?u.parent==null?u.vnode.appContext&&u.vnode.appContext.provides:u.parent.provides:ws._context.provides;if(g&&r in g)return g[r];if(arguments.length>1)return l&&Te(a)?a.call(u&&u.proxy):a}}function eR(){return!!(Pt||Tt||ws)}const lx={},dx=()=>Object.create(lx),ux=r=>Object.getPrototypeOf(r)===lx;function tR(r,a,l,u=!1){const g={},b=dx();r.propsDefaults=Object.create(null),hx(r,a,g,b);for(const k in r.propsOptions[0])k in g||(g[k]=void 0);l?r.props=u?g:S1(g):r.type.props?r.props=g:r.props=b,r.attrs=b}function nR(r,a,l,u){const{props:g,attrs:b,vnode:{patchFlag:k}}=r,_=qe(g),[m]=r.propsOptions;let y=!1;if((u||k>0)&&!(k&16)){if(k&8){const C=r.vnode.dynamicProps;for(let x=0;x<C.length;x++){let A=C[x];if(Kd(r.emitsOptions,A))continue;const D=a[A];if(m)if(We(b,A))D!==b[A]&&(b[A]=D,y=!0);else{const T=on(A);g[T]=dg(m,_,T,D,r,!1)}else D!==b[A]&&(b[A]=D,y=!0)}}}else{hx(r,a,g,b)&&(y=!0);let C;for(const x in _)(!a||!We(a,x)&&((C=Nn(x))===x||!We(a,C)))&&(m?l&&(l[x]!==void 0||l[C]!==void 0)&&(g[x]=dg(m,_,x,void 0,r,!0)):delete g[x]);if(b!==_)for(const x in b)(!a||!We(a,x))&&(delete b[x],y=!0)}y&&zo(r.attrs,"set","")}function hx(r,a,l,u){const[g,b]=r.propsOptions;let k=!1,_;if(a)for(let m in a){if(hs(m))continue;const y=a[m];let C;g&&We(g,C=on(m))?!b||!b.includes(C)?l[C]=y:(_||(_={}))[C]=y:Kd(r.emitsOptions,m)||(!(m in u)||y!==u[m])&&(u[m]=y,k=!0)}if(b){const m=qe(l),y=_||et;for(let C=0;C<b.length;C++){const x=b[C];l[x]=dg(g,m,x,y[x],r,!We(y,x))}}return k}function dg(r,a,l,u,g,b){const k=r[l];if(k!=null){const _=We(k,"default");if(_&&u===void 0){const m=k.default;if(k.type!==Function&&!k.skipFactory&&Te(m)){const{propsDefaults:y}=g;if(l in y)u=y[l];else{const C=mr(g);u=y[l]=m.call(null,a),C()}}else u=m}k[0]&&(b&&!_?u=!1:k[1]&&(u===""||u===Nn(l))&&(u=!0))}return u}function px(r,a,l=!1){const u=a.propsCache,g=u.get(r);if(g)return g;const b=r.props,k={},_=[];let m=!1;if(!Te(r)){const C=x=>{m=!0;const[A,D]=px(x,a,!0);mt(k,A),D&&_.push(...D)};!l&&a.mixins.length&&a.mixins.forEach(C),r.extends&&C(r.extends),r.mixins&&r.mixins.forEach(C)}if(!b&&!m)return it(r)&&u.set(r,ds),ds;if(Ae(b))for(let C=0;C<b.length;C++){const x=on(b[C]);Dv(x)&&(k[x]=et)}else if(b)for(const C in b){const x=on(C);if(Dv(x)){const A=b[C],D=k[x]=Ae(A)||Te(A)?{type:A}:mt({},A);if(D){const T=Iv(Boolean,D.type),M=Iv(String,D.type);D[0]=T>-1,D[1]=M<0||T<M,(T>-1||We(D,"default"))&&_.push(x)}}}const y=[k,_];return it(r)&&u.set(r,y),y}function Dv(r){return r[0]!=="$"&&!hs(r)}function Sv(r){return r===null?"null":typeof r=="function"?r.name||"":typeof r=="object"&&r.constructor&&r.constructor.name||""}function Tv(r,a){return Sv(r)===Sv(a)}function Iv(r,a){return Ae(a)?a.findIndex(l=>Tv(l,r)):Te(a)&&Tv(a,r)?0:-1}const gx=r=>r[0]==="_"||r==="$stable",Am=r=>Ae(r)?r.map(Bn):[Bn(r)],oR=(r,a,l)=>{if(a._n)return a;const u=hm((...g)=>Am(a(...g)),l);return u._c=!1,u},mx=(r,a,l)=>{const u=r._ctx;for(const g in r){if(gx(g))continue;const b=r[g];if(Te(b))a[g]=oR(g,b,u);else if(b!=null){const k=Am(b);a[g]=()=>k}}},fx=(r,a)=>{const l=Am(a);r.slots.default=()=>l},iR=(r,a)=>{const l=r.slots=dx();if(r.vnode.shapeFlag&32){const u=a._;u?(mt(l,a),l1(l,"_",u,!0)):mx(a,l)}else a&&fx(r,a)},rR=(r,a,l)=>{const{vnode:u,slots:g}=r;let b=!0,k=et;if(u.shapeFlag&32){const _=a._;_?l&&_===1?b=!1:(mt(g,a),!l&&_===1&&delete g._):(b=!a.$stable,mx(a,g)),k=a}else a&&(fx(r,a),k={default:1});if(b)for(const _ in g)!gx(_)&&k[_]==null&&delete g[_]};function bd(r,a,l,u,g=!1){if(Ae(r)){r.forEach((A,D)=>bd(A,a&&(Ae(a)?a[D]:a),l,u,g));return}if(rr(u)&&!g)return;const b=u.shapeFlag&4?iu(u.component)||u.component.proxy:u.el,k=g?null:b,{i:_,r:m}=r,y=a&&a.r,C=_.refs===et?_.refs={}:_.refs,x=_.setupState;if(y!=null&&y!==m&&(kt(y)?(C[y]=null,We(x,y)&&(x[y]=null)):Kt(y)&&(y.value=null)),Te(m))jo(m,_,12,[k,C]);else{const A=kt(m),D=Kt(m);if(A||D){const T=()=>{if(r.f){const M=A?We(x,m)?x[m]:C[m]:m.value;g?Ae(M)&&Xg(M,b):Ae(M)?M.includes(b)||M.push(b):A?(C[m]=[b],We(x,m)&&(x[m]=C[m])):(m.value=[b],r.k&&(C[r.k]=m.value))}else A?(C[m]=k,We(x,m)&&(x[m]=k)):D&&(m.value=k,r.k&&(C[r.k]=k))};k?(T.id=-1,Gt(T,l)):T()}}}let si=!1;const sR=r=>r.namespaceURI.includes("svg")&&r.tagName!=="foreignObject",aR=r=>r.namespaceURI.includes("MathML"),Ql=r=>{if(sR(r))return"svg";if(aR(r))return"mathml"},Zl=r=>r.nodeType===8;function cR(r){const{mt:a,p:l,o:{patchProp:u,createText:g,nextSibling:b,parentNode:k,remove:_,insert:m,createComment:y}}=r,C=(P,R)=>{if(!R.hasChildNodes()){l(null,P,R),fd(),R._vnode=P;return}si=!1,x(R.firstChild,P,null,null,null),fd(),R._vnode=P,si&&console.error("Hydration completed but contains mismatches.")},x=(P,R,$,q,B,V=!1)=>{V=V||!!R.dynamicChildren;const W=Zl(P)&&P.data==="[",J=()=>M(P,R,$,q,B,W),{type:ce,ref:te,shapeFlag:de,patchFlag:Ee}=R;let xe=P.nodeType;R.el=P,Ee===-2&&(V=!1,R.dynamicChildren=null);let be=null;switch(ce){case pr:xe!==3?R.children===""?(m(R.el=g(""),k(P),P),be=P):be=J():(P.data!==R.children&&(si=!0,P.data=R.children),be=b(P));break;case Wt:z(P)?(be=b(P),F(R.el=P.content.firstChild,P,$)):xe!==8||W?be=J():be=b(P);break;case sr:if(W&&(P=b(P),xe=P.nodeType),xe===1||xe===3){be=P;const fe=!R.children.length;for(let Ce=0;Ce<R.staticCount;Ce++)fe&&(R.children+=be.nodeType===1?be.outerHTML:be.data),Ce===R.staticCount-1&&(R.anchor=be),be=b(be);return W?b(be):be}else J();break;case Ke:W?be=T(P,R,$,q,B,V):be=J();break;default:if(de&1)(xe!==1||R.type.toLowerCase()!==P.tagName.toLowerCase())&&!z(P)?be=J():be=A(P,R,$,q,B,V);else if(de&6){R.slotScopeIds=B;const fe=k(P);if(W?be=O(P):Zl(P)&&P.data==="teleport start"?be=O(P,P.data,"teleport end"):be=b(P),a(R,fe,null,$,q,Ql(fe),V),rr(R)){let Ce;W?(Ce=at(Ke),Ce.anchor=be?be.previousSibling:fe.lastChild):Ce=P.nodeType===3?wo(""):at("div"),Ce.el=P,R.component.subTree=Ce}}else de&64?xe!==8?be=J():be=R.type.hydrate(P,R,$,q,B,V,r,D):de&128&&(be=R.type.hydrate(P,R,$,q,Ql(k(P)),B,V,r,x))}return te!=null&&bd(te,null,q,R),be},A=(P,R,$,q,B,V)=>{V=V||!!R.dynamicChildren;const{type:W,props:J,patchFlag:ce,shapeFlag:te,dirs:de,transition:Ee}=R,xe=W==="input"||W==="option";if(xe||ce!==-1){de&&mo(R,null,$,"created");let be=!1;if(z(P)){be=_x(q,Ee)&&$&&$.vnode.props&&$.vnode.props.appear;const Ce=P.content.firstChild;be&&Ee.beforeEnter(Ce),F(Ce,P,$),R.el=P=Ce}if(te&16&&!(J&&(J.innerHTML||J.textContent))){let Ce=D(P.firstChild,R,P,$,q,B,V);for(;Ce;){si=!0;const Ot=Ce;Ce=Ce.nextSibling,_(Ot)}}else te&8&&P.textContent!==R.children&&(si=!0,P.textContent=R.children);if(J)if(xe||!V||ce&48)for(const Ce in J)(xe&&(Ce.endsWith("value")||Ce==="indeterminate")||lc(Ce)&&!hs(Ce)||Ce[0]===".")&&u(P,Ce,null,J[Ce],void 0,void 0,$);else J.onClick&&u(P,"onClick",null,J.onClick,void 0,void 0,$);let fe;(fe=J&&J.onVnodeBeforeMount)&&pn(fe,$,R),de&&mo(R,null,$,"beforeMount"),((fe=J&&J.onVnodeMounted)||de||be)&&V1(()=>{fe&&pn(fe,$,R),be&&Ee.enter(P),de&&mo(R,null,$,"mounted")},q)}return P.nextSibling},D=(P,R,$,q,B,V,W)=>{W=W||!!R.dynamicChildren;const J=R.children,ce=J.length;for(let te=0;te<ce;te++){const de=W?J[te]:J[te]=Bn(J[te]);if(P)P=x(P,de,q,B,V,W);else{if(de.type===pr&&!de.children)continue;si=!0,l(null,de,$,null,q,B,Ql($),V)}}return P},T=(P,R,$,q,B,V)=>{const{slotScopeIds:W}=R;W&&(B=B?B.concat(W):W);const J=k(P),ce=D(b(P),R,J,$,q,B,V);return ce&&Zl(ce)&&ce.data==="]"?b(R.anchor=ce):(si=!0,m(R.anchor=y("]"),J,ce),ce)},M=(P,R,$,q,B,V)=>{if(si=!0,R.el=null,V){const ce=O(P);for(;;){const te=b(P);if(te&&te!==ce)_(te);else break}}const W=b(P),J=k(P);return _(P),l(null,R,J,W,$,q,Ql(J),B),W},O=(P,R="[",$="]")=>{let q=0;for(;P;)if(P=b(P),P&&Zl(P)&&(P.data===R&&q++,P.data===$)){if(q===0)return b(P);q--}return P},F=(P,R,$)=>{const q=R.parentNode;q&&q.replaceChild(P,R);let B=$;for(;B;)B.vnode.el===R&&(B.vnode.el=B.subTree.el=P),B=B.parent},z=P=>P.nodeType===1&&P.tagName.toLowerCase()==="template";return[C,x]}const Gt=V1;function kx(r){return wx(r)}function bx(r){return wx(r,cR)}function wx(r,a){const l=d1();l.__VUE__=!0;const{insert:u,remove:g,patchProp:b,createElement:k,createText:_,createComment:m,setText:y,setElementText:C,parentNode:x,nextSibling:A,setScopeId:D=gn,insertStaticContent:T}=r,M=(j,U,Z,oe=null,ie=null,le=null,ge=void 0,re=null,se=!!U.dynamicChildren)=>{if(j===U)return;j&&!to(j,U)&&(oe=Ft(j),Jt(j,ie,le,!0),j=null),U.patchFlag===-2&&(se=!1,U.dynamicChildren=null);const{type:ee,ref:ke,shapeFlag:we}=U;switch(ee){case pr:O(j,U,Z,oe);break;case Wt:F(j,U,Z,oe);break;case sr:j==null&&z(U,Z,oe,ge);break;case Ke:te(j,U,Z,oe,ie,le,ge,re,se);break;default:we&1?$(j,U,Z,oe,ie,le,ge,re,se):we&6?de(j,U,Z,oe,ie,le,ge,re,se):(we&64||we&128)&&ee.process(j,U,Z,oe,ie,le,ge,re,se,wt)}ke!=null&&ie&&bd(ke,j&&j.ref,le,U||j,!U)},O=(j,U,Z,oe)=>{if(j==null)u(U.el=_(U.children),Z,oe);else{const ie=U.el=j.el;U.children!==j.children&&y(ie,U.children)}},F=(j,U,Z,oe)=>{j==null?u(U.el=m(U.children||""),Z,oe):U.el=j.el},z=(j,U,Z,oe)=>{[j.el,j.anchor]=T(j.children,U,Z,oe,j.el,j.anchor)},P=({el:j,anchor:U},Z,oe)=>{let ie;for(;j&&j!==U;)ie=A(j),u(j,Z,oe),j=ie;u(U,Z,oe)},R=({el:j,anchor:U})=>{let Z;for(;j&&j!==U;)Z=A(j),g(j),j=Z;g(U)},$=(j,U,Z,oe,ie,le,ge,re,se)=>{U.type==="svg"?ge="svg":U.type==="math"&&(ge="mathml"),j==null?q(U,Z,oe,ie,le,ge,re,se):W(j,U,ie,le,ge,re,se)},q=(j,U,Z,oe,ie,le,ge,re)=>{let se,ee;const{props:ke,shapeFlag:we,transition:_e,dirs:Me}=j;if(se=j.el=k(j.type,le,ke&&ke.is,ke),we&8?C(se,j.children):we&16&&V(j.children,se,null,oe,ie,Dp(j,le),ge,re),Me&&mo(j,null,oe,"created"),B(se,j,j.scopeId,ge,oe),ke){for(const Qe in ke)Qe!=="value"&&!hs(Qe)&&b(se,Qe,null,ke[Qe],le,j.children,oe,ie,ct);"value"in ke&&b(se,"value",null,ke.value,le),(ee=ke.onVnodeBeforeMount)&&pn(ee,oe,j)}Me&&mo(j,null,oe,"beforeMount");const je=_x(ie,_e);je&&_e.beforeEnter(se),u(se,U,Z),((ee=ke&&ke.onVnodeMounted)||je||Me)&&Gt(()=>{ee&&pn(ee,oe,j),je&&_e.enter(se),Me&&mo(j,null,oe,"mounted")},ie)},B=(j,U,Z,oe,ie)=>{if(Z&&D(j,Z),oe)for(let le=0;le<oe.length;le++)D(j,oe[le]);if(ie){let le=ie.subTree;if(U===le){const ge=ie.vnode;B(j,ge,ge.scopeId,ge.slotScopeIds,ie.parent)}}},V=(j,U,Z,oe,ie,le,ge,re,se=0)=>{for(let ee=se;ee<j.length;ee++){const ke=j[ee]=re?hi(j[ee]):Bn(j[ee]);M(null,ke,U,Z,oe,ie,le,ge,re)}},W=(j,U,Z,oe,ie,le,ge)=>{const re=U.el=j.el;let{patchFlag:se,dynamicChildren:ee,dirs:ke}=U;se|=j.patchFlag&16;const we=j.props||et,_e=U.props||et;let Me;if(Z&&Ki(Z,!1),(Me=_e.onVnodeBeforeUpdate)&&pn(Me,Z,U,j),ke&&mo(U,j,Z,"beforeUpdate"),Z&&Ki(Z,!0),ee?J(j.dynamicChildren,ee,re,Z,oe,Dp(U,ie),le):ge||Ce(j,U,re,null,Z,oe,Dp(U,ie),le,!1),se>0){if(se&16)ce(re,U,we,_e,Z,oe,ie);else if(se&2&&we.class!==_e.class&&b(re,"class",null,_e.class,ie),se&4&&b(re,"style",we.style,_e.style,ie),se&8){const je=U.dynamicProps;for(let Qe=0;Qe<je.length;Qe++){const Ze=je[Qe],Dt=we[Ze],_n=_e[Ze];(_n!==Dt||Ze==="value")&&b(re,Ze,Dt,_n,ie,j.children,Z,oe,ct)}}se&1&&j.children!==U.children&&C(re,U.children)}else!ge&&ee==null&&ce(re,U,we,_e,Z,oe,ie);((Me=_e.onVnodeUpdated)||ke)&&Gt(()=>{Me&&pn(Me,Z,U,j),ke&&mo(U,j,Z,"updated")},oe)},J=(j,U,Z,oe,ie,le,ge)=>{for(let re=0;re<U.length;re++){const se=j[re],ee=U[re],ke=se.el&&(se.type===Ke||!to(se,ee)||se.shapeFlag&70)?x(se.el):Z;M(se,ee,ke,null,oe,ie,le,ge,!0)}},ce=(j,U,Z,oe,ie,le,ge)=>{if(Z!==oe){if(Z!==et)for(const re in Z)!hs(re)&&!(re in oe)&&b(j,re,Z[re],null,ge,U.children,ie,le,ct);for(const re in oe){if(hs(re))continue;const se=oe[re],ee=Z[re];se!==ee&&re!=="value"&&b(j,re,ee,se,ge,U.children,ie,le,ct)}"value"in oe&&b(j,"value",Z.value,oe.value,ge)}},te=(j,U,Z,oe,ie,le,ge,re,se)=>{const ee=U.el=j?j.el:_(""),ke=U.anchor=j?j.anchor:_("");let{patchFlag:we,dynamicChildren:_e,slotScopeIds:Me}=U;Me&&(re=re?re.concat(Me):Me),j==null?(u(ee,Z,oe),u(ke,Z,oe),V(U.children||[],Z,ke,ie,le,ge,re,se)):we>0&&we&64&&_e&&j.dynamicChildren?(J(j.dynamicChildren,_e,Z,ie,le,ge,re),(U.key!=null||ie&&U===ie.subTree)&&Cm(j,U,!0)):Ce(j,U,Z,ke,ie,le,ge,re,se)},de=(j,U,Z,oe,ie,le,ge,re,se)=>{U.slotScopeIds=re,j==null?U.shapeFlag&512?ie.ctx.activate(U,Z,oe,ge,se):Ee(U,Z,oe,ie,le,ge,se):xe(j,U,se)},Ee=(j,U,Z,oe,ie,le,ge)=>{const re=j.component=Sx(j,oe,ie);if(gc(j)&&(re.ctx.renderer=wt),Ix(re),re.asyncDep){if(ie&&ie.registerDep(re,be),!j.el){const se=re.subTree=at(Wt);F(null,se,U,Z)}}else be(re,j,U,Z,ie,le,ge)},xe=(j,U,Z)=>{const oe=U.component=j.component;if(pL(j,U,Z))if(oe.asyncDep&&!oe.asyncResolved){fe(oe,U,Z);return}else oe.next=U,iL(oe.update),oe.effect.dirty=!0,oe.update();else U.el=j.el,oe.vnode=U},be=(j,U,Z,oe,ie,le,ge)=>{const re=()=>{if(j.isMounted){let{next:ke,bu:we,u:_e,parent:Me,vnode:je}=j;{const Yo=Ax(j);if(Yo){ke&&(ke.el=je.el,fe(j,ke,ge)),Yo.asyncDep.then(()=>{j.isUnmounted||re()});return}}let Qe=ke,Ze;Ki(j,!1),ke?(ke.el=je.el,fe(j,ke,ge)):ke=je,we&&ps(we),(Ze=ke.props&&ke.props.onVnodeBeforeUpdate)&&pn(Ze,Me,ke,je),Ki(j,!0);const Dt=id(j),_n=j.subTree;j.subTree=Dt,M(_n,Dt,x(_n.el),Ft(_n),j,ie,le),ke.el=Dt.el,Qe===null&&pm(j,Dt.el),_e&&Gt(_e,ie),(Ze=ke.props&&ke.props.onVnodeUpdated)&&Gt(()=>pn(Ze,Me,ke,je),ie)}else{let ke;const{el:we,props:_e}=U,{bm:Me,m:je,parent:Qe}=j,Ze=rr(U);if(Ki(j,!1),Me&&ps(Me),!Ze&&(ke=_e&&_e.onVnodeBeforeMount)&&pn(ke,Qe,U),Ki(j,!0),we&&ze){const Dt=()=>{j.subTree=id(j),ze(we,j.subTree,j,ie,null)};Ze?U.type.__asyncLoader().then(()=>!j.isUnmounted&&Dt()):Dt()}else{const Dt=j.subTree=id(j);M(null,Dt,Z,oe,j,ie,le),U.el=Dt.el}if(je&&Gt(je,ie),!Ze&&(ke=_e&&_e.onVnodeMounted)){const Dt=U;Gt(()=>pn(ke,Qe,Dt),ie)}(U.shapeFlag&256||Qe&&rr(Qe.vnode)&&Qe.vnode.shapeFlag&256)&&j.a&&Gt(j.a,ie),j.isMounted=!0,U=Z=oe=null}},se=j.effect=new As(re,gn,()=>Wd(ee),j.scope),ee=j.update=()=>{se.dirty&&se.run()};ee.id=j.uid,Ki(j,!0),ee()},fe=(j,U,Z)=>{U.component=j;const oe=j.vnode.props;j.vnode=U,j.next=null,nR(j,U.props,oe,Z),rR(j,U.children,Z),Ci(),wv(j),vi()},Ce=(j,U,Z,oe,ie,le,ge,re,se=!1)=>{const ee=j&&j.children,ke=j?j.shapeFlag:0,we=U.children,{patchFlag:_e,shapeFlag:Me}=U;if(_e>0){if(_e&128){wn(ee,we,Z,oe,ie,le,ge,re,se);return}else if(_e&256){Ot(ee,we,Z,oe,ie,le,ge,re,se);return}}Me&8?(ke&16&&ct(ee,ie,le),we!==ee&&C(Z,we)):ke&16?Me&16?wn(ee,we,Z,oe,ie,le,ge,re,se):ct(ee,ie,le,!0):(ke&8&&C(Z,""),Me&16&&V(we,Z,oe,ie,le,ge,re,se))},Ot=(j,U,Z,oe,ie,le,ge,re,se)=>{j=j||ds,U=U||ds;const ee=j.length,ke=U.length,we=Math.min(ee,ke);let _e;for(_e=0;_e<we;_e++){const Me=U[_e]=se?hi(U[_e]):Bn(U[_e]);M(j[_e],Me,Z,null,ie,le,ge,re,se)}ee>ke?ct(j,ie,le,!0,!1,we):V(U,Z,oe,ie,le,ge,re,se,we)},wn=(j,U,Z,oe,ie,le,ge,re,se)=>{let ee=0;const ke=U.length;let we=j.length-1,_e=ke-1;for(;ee<=we&&ee<=_e;){const Me=j[ee],je=U[ee]=se?hi(U[ee]):Bn(U[ee]);if(to(Me,je))M(Me,je,Z,null,ie,le,ge,re,se);else break;ee++}for(;ee<=we&&ee<=_e;){const Me=j[we],je=U[_e]=se?hi(U[_e]):Bn(U[_e]);if(to(Me,je))M(Me,je,Z,null,ie,le,ge,re,se);else break;we--,_e--}if(ee>we){if(ee<=_e){const Me=_e+1,je=Me<ke?U[Me].el:oe;for(;ee<=_e;)M(null,U[ee]=se?hi(U[ee]):Bn(U[ee]),Z,je,ie,le,ge,re,se),ee++}}else if(ee>_e)for(;ee<=we;)Jt(j[ee],ie,le,!0),ee++;else{const Me=ee,je=ee,Qe=new Map;for(ee=je;ee<=_e;ee++){const lt=U[ee]=se?hi(U[ee]):Bn(U[ee]);lt.key!=null&&Qe.set(lt.key,ee)}let Ze,Dt=0;const _n=_e-je+1;let Yo=!1,Hs=0;const ln=new Array(_n);for(ee=0;ee<_n;ee++)ln[ee]=0;for(ee=Me;ee<=we;ee++){const lt=j[ee];if(Dt>=_n){Jt(lt,ie,le,!0);continue}let An;if(lt.key!=null)An=Qe.get(lt.key);else for(Ze=je;Ze<=_e;Ze++)if(ln[Ze-je]===0&&to(lt,U[Ze])){An=Ze;break}An===void 0?Jt(lt,ie,le,!0):(ln[An-je]=ee+1,An>=Hs?Hs=An:Yo=!0,M(lt,U[An],Z,null,ie,le,ge,re,se),Dt++)}const Yt=Yo?lR(ln):ds;for(Ze=Yt.length-1,ee=_n-1;ee>=0;ee--){const lt=je+ee,An=U[lt],dn=lt+1<ke?U[lt+1].el:oe;ln[ee]===0?M(null,An,Z,dn,ie,le,ge,re,se):Yo&&(Ze<0||ee!==Yt[Ze]?sn(An,Z,dn,2):Ze--)}}},sn=(j,U,Z,oe,ie=null)=>{const{el:le,type:ge,transition:re,children:se,shapeFlag:ee}=j;if(ee&6){sn(j.component.subTree,U,Z,oe);return}if(ee&128){j.suspense.move(U,Z,oe);return}if(ee&64){ge.move(j,U,Z,wt);return}if(ge===Ke){u(le,U,Z);for(let we=0;we<se.length;we++)sn(se[we],U,Z,oe);u(j.anchor,U,Z);return}if(ge===sr){P(j,U,Z);return}if(oe!==2&&ee&1&&re)if(oe===0)re.beforeEnter(le),u(le,U,Z),Gt(()=>re.enter(le),ie);else{const{leave:we,delayLeave:_e,afterLeave:Me}=re,je=()=>u(le,U,Z),Qe=()=>{we(le,()=>{je(),Me&&Me()})};_e?_e(le,je,Qe):Qe()}else u(le,U,Z)},Jt=(j,U,Z,oe=!1,ie=!1)=>{const{type:le,props:ge,ref:re,children:se,dynamicChildren:ee,shapeFlag:ke,patchFlag:we,dirs:_e}=j;if(re!=null&&bd(re,null,Z,j,!0),ke&256){U.ctx.deactivate(j);return}const Me=ke&1&&_e,je=!rr(j);let Qe;if(je&&(Qe=ge&&ge.onVnodeBeforeUnmount)&&pn(Qe,U,j),ke&6)Ie(j.component,Z,oe);else{if(ke&128){j.suspense.unmount(Z,oe);return}Me&&mo(j,null,U,"beforeUnmount"),ke&64?j.type.remove(j,U,Z,ie,wt,oe):ee&&(le!==Ke||we>0&&we&64)?ct(ee,U,Z,!1,!0):(le===Ke&&we&384||!ie&&ke&16)&&ct(se,U,Z),oe&&pe(j)}(je&&(Qe=ge&&ge.onVnodeUnmounted)||Me)&&Gt(()=>{Qe&&pn(Qe,U,j),Me&&mo(j,null,U,"unmounted")},Z)},pe=j=>{const{type:U,el:Z,anchor:oe,transition:ie}=j;if(U===Ke){Re(Z,oe);return}if(U===sr){R(j);return}const le=()=>{g(Z),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(j.shapeFlag&1&&ie&&!ie.persisted){const{leave:ge,delayLeave:re}=ie,se=()=>ge(Z,le);re?re(j.el,le,se):se()}else le()},Re=(j,U)=>{let Z;for(;j!==U;)Z=A(j),g(j),j=Z;g(U)},Ie=(j,U,Z)=>{const{bum:oe,scope:ie,update:le,subTree:ge,um:re}=j;oe&&ps(oe),ie.stop(),le&&(le.active=!1,Jt(ge,j,U,Z)),re&&Gt(re,U),Gt(()=>{j.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&j.asyncDep&&!j.asyncResolved&&j.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},ct=(j,U,Z,oe=!1,ie=!1,le=0)=>{for(let ge=le;ge<j.length;ge++)Jt(j[ge],U,Z,oe,ie)},Ft=j=>j.shapeFlag&6?Ft(j.component.subTree):j.shapeFlag&128?j.suspense.next():A(j.anchor||j.el);let an=!1;const Xt=(j,U,Z)=>{j==null?U._vnode&&Jt(U._vnode,null,null,!0):M(U._vnode||null,j,U,null,null,null,Z),an||(an=!0,wv(),fd(),an=!1),U._vnode=j},wt={p:M,um:Jt,m:sn,r:pe,mt:Ee,mc:V,pc:Ce,pbc:J,n:Ft,o:r};let cn,ze;return a&&([cn,ze]=a(wt)),{render:Xt,hydrate:cn,createApp:XL(Xt,cn)}}function Dp({type:r,props:a},l){return l==="svg"&&r==="foreignObject"||l==="mathml"&&r==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:l}function Ki({effect:r,update:a},l){r.allowRecurse=a.allowRecurse=l}function _x(r,a){return(!r||r&&!r.pendingBranch)&&a&&!a.persisted}function Cm(r,a,l=!1){const u=r.children,g=a.children;if(Ae(u)&&Ae(g))for(let b=0;b<u.length;b++){const k=u[b];let _=g[b];_.shapeFlag&1&&!_.dynamicChildren&&((_.patchFlag<=0||_.patchFlag===32)&&(_=g[b]=hi(g[b]),_.el=k.el),l||Cm(k,_)),_.type===pr&&(_.el=k.el)}}function lR(r){const a=r.slice(),l=[0];let u,g,b,k,_;const m=r.length;for(u=0;u<m;u++){const y=r[u];if(y!==0){if(g=l[l.length-1],r[g]<y){a[u]=g,l.push(u);continue}for(b=0,k=l.length-1;b<k;)_=b+k>>1,r[l[_]]<y?b=_+1:k=_;y<r[l[b]]&&(b>0&&(a[u]=l[b-1]),l[b]=u)}}for(b=l.length,k=l[b-1];b-- >0;)l[b]=k,k=a[k];return l}function Ax(r){const a=r.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:Ax(a)}const dR=r=>r.__isTeleport,Ha=r=>r&&(r.disabled||r.disabled===""),Mv=r=>typeof SVGElement<"u"&&r instanceof SVGElement,Bv=r=>typeof MathMLElement=="function"&&r instanceof MathMLElement,ug=(r,a)=>{const l=r&&r.to;return kt(l)?a?a(l):null:l},uR={name:"Teleport",__isTeleport:!0,process(r,a,l,u,g,b,k,_,m,y){const{mc:C,pc:x,pbc:A,o:{insert:D,querySelector:T,createText:M,createComment:O}}=y,F=Ha(a.props);let{shapeFlag:z,children:P,dynamicChildren:R}=a;if(r==null){const $=a.el=M(""),q=a.anchor=M("");D($,l,u),D(q,l,u);const B=a.target=ug(a.props,T),V=a.targetAnchor=M("");B&&(D(V,B),k==="svg"||Mv(B)?k="svg":(k==="mathml"||Bv(B))&&(k="mathml"));const W=(J,ce)=>{z&16&&C(P,J,ce,g,b,k,_,m)};F?W(l,q):B&&W(B,V)}else{a.el=r.el;const $=a.anchor=r.anchor,q=a.target=r.target,B=a.targetAnchor=r.targetAnchor,V=Ha(r.props),W=V?l:q,J=V?$:B;if(k==="svg"||Mv(q)?k="svg":(k==="mathml"||Bv(q))&&(k="mathml"),R?(A(r.dynamicChildren,R,W,g,b,k,_),Cm(r,a,!0)):m||x(r,a,W,J,g,b,k,_,!1),F)V?a.props&&r.props&&a.props.to!==r.props.to&&(a.props.to=r.props.to):Jl(a,l,$,y,1);else if((a.props&&a.props.to)!==(r.props&&r.props.to)){const ce=a.target=ug(a.props,T);ce&&Jl(a,ce,null,y,0)}else V&&Jl(a,q,B,y,1)}Cx(a)},remove(r,a,l,u,{um:g,o:{remove:b}},k){const{shapeFlag:_,children:m,anchor:y,targetAnchor:C,target:x,props:A}=r;if(x&&b(C),k&&b(y),_&16){const D=k||!Ha(A);for(let T=0;T<m.length;T++){const M=m[T];g(M,a,l,D,!!M.dynamicChildren)}}},move:Jl,hydrate:hR};function Jl(r,a,l,{o:{insert:u},m:g},b=2){b===0&&u(r.targetAnchor,a,l);const{el:k,anchor:_,shapeFlag:m,children:y,props:C}=r,x=b===2;if(x&&u(k,a,l),(!x||Ha(C))&&m&16)for(let A=0;A<y.length;A++)g(y[A],a,l,2);x&&u(_,a,l)}function hR(r,a,l,u,g,b,{o:{nextSibling:k,parentNode:_,querySelector:m}},y){const C=a.target=ug(a.props,m);if(C){const x=C._lpa||C.firstChild;if(a.shapeFlag&16)if(Ha(a.props))a.anchor=y(k(r),a,_(r),l,u,g,b),a.targetAnchor=x;else{a.anchor=k(r);let A=x;for(;A;)if(A=k(A),A&&A.nodeType===8&&A.data==="teleport anchor"){a.targetAnchor=A,C._lpa=a.targetAnchor&&k(a.targetAnchor);break}y(x,a,C,l,u,g,b)}Cx(a)}return a.anchor&&k(a.anchor)}const pR=uR;function Cx(r){const a=r.ctx;if(a&&a.ut){let l=r.children[0].el;for(;l&&l!==r.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",a.uid),l=l.nextSibling;a.ut()}}const Ke=Symbol.for("v-fgt"),pr=Symbol.for("v-txt"),Wt=Symbol.for("v-cmt"),sr=Symbol.for("v-stc"),Ua=[];let mn=null;function ye(r=!1){Ua.push(mn=r?null:[])}function vx(){Ua.pop(),mn=Ua[Ua.length-1]||null}let gr=1;function hg(r){gr+=r}function yx(r){return r.dynamicChildren=gr>0?mn||ds:null,vx(),gr>0&&mn&&mn.push(r),r}function Se(r,a,l,u,g,b){return yx(Y(r,a,l,u,g,b,!0))}function vm(r,a,l,u,g){return yx(at(r,a,l,u,g,!0))}function _i(r){return r?r.__v_isVNode===!0:!1}function to(r,a){return r.type===a.type&&r.key===a.key}function gR(r){}const xx=({key:r})=>r??null,rd=({ref:r,ref_key:a,ref_for:l})=>(typeof r=="number"&&(r=""+r),r!=null?kt(r)||Kt(r)||Te(r)?{i:Tt,r,k:a,f:!!l}:r:null);function Y(r,a=null,l=null,u=0,g=null,b=r===Ke?0:1,k=!1,_=!1){const m={__v_isVNode:!0,__v_skip:!0,type:r,props:a,key:a&&xx(a),ref:a&&rd(a),scopeId:Yd,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:b,patchFlag:u,dynamicProps:g,dynamicChildren:null,appContext:null,ctx:Tt};return _?(ym(m,l),b&128&&r.normalize(m)):l&&(m.shapeFlag|=kt(l)?8:16),gr>0&&!k&&mn&&(m.patchFlag>0||b&6)&&m.patchFlag!==32&&mn.push(m),m}const at=mR;function mR(r,a=null,l=null,u=0,g=null,b=!1){if((!r||r===j1)&&(r=Wt),_i(r)){const _=Ao(r,a,!0);return l&&ym(_,l),gr>0&&!b&&mn&&(_.shapeFlag&6?mn[mn.indexOf(r)]=_:mn.push(_)),_.patchFlag|=-2,_}if(CR(r)&&(r=r.__vccOpts),a){a=Ex(a);let{class:_,style:m}=a;_&&!kt(_)&&(a.class=Bs(_)),it(m)&&(am(m)&&!Ae(m)&&(m=mt({},m)),a.style=uc(m))}const k=kt(r)?1:F1(r)?128:dR(r)?64:it(r)?4:Te(r)?2:0;return Y(r,a,l,u,g,k,b,!0)}function Ex(r){return r?am(r)||ux(r)?mt({},r):r:null}function Ao(r,a,l=!1,u=!1){const{props:g,ref:b,patchFlag:k,children:_,transition:m}=r,y=a?Dx(g||{},a):g,C={__v_isVNode:!0,__v_skip:!0,type:r.type,props:y,key:y&&xx(y),ref:a&&a.ref?l&&b?Ae(b)?b.concat(rd(a)):[b,rd(a)]:rd(a):b,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:_,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:a&&r.type!==Ke?k===-1?16:k|16:k,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:m,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Ao(r.ssContent),ssFallback:r.ssFallback&&Ao(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce};return m&&u&&(C.transition=m.clone(C)),C}function wo(r=" ",a=0){return at(pr,null,r,a)}function ou(r,a){const l=at(sr,null,r);return l.staticCount=a,l}function fn(r="",a=!1){return a?(ye(),vm(Wt,null,r)):at(Wt,null,r)}function Bn(r){return r==null||typeof r=="boolean"?at(Wt):Ae(r)?at(Ke,null,r.slice()):typeof r=="object"?hi(r):at(pr,null,String(r))}function hi(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Ao(r)}function ym(r,a){let l=0;const{shapeFlag:u}=r;if(a==null)a=null;else if(Ae(a))l=16;else if(typeof a=="object")if(u&65){const g=a.default;g&&(g._c&&(g._d=!1),ym(r,g()),g._c&&(g._d=!0));return}else{l=32;const g=a._;!g&&!ux(a)?a._ctx=Tt:g===3&&Tt&&(Tt.slots._===1?a._=1:(a._=2,r.patchFlag|=1024))}else Te(a)?(a={default:a,_ctx:Tt},l=32):(a=String(a),u&64?(l=16,a=[wo(a)]):l=8);r.children=a,r.shapeFlag|=l}function Dx(...r){const a={};for(let l=0;l<r.length;l++){const u=r[l];for(const g in u)if(g==="class")a.class!==u.class&&(a.class=Bs([a.class,u.class]));else if(g==="style")a.style=uc([a.style,u.style]);else if(lc(g)){const b=a[g],k=u[g];k&&b!==k&&!(Ae(b)&&b.includes(k))&&(a[g]=b?[].concat(b,k):k)}else g!==""&&(a[g]=u[g])}return a}function pn(r,a,l,u=null){Pn(r,a,7,[l,u])}const fR=ax();let kR=0;function Sx(r,a,l){const u=r.type,g=(a?a.appContext:r.appContext)||fR,b={uid:kR++,vnode:r,type:u,parent:a,appContext:g,root:null,next:null,subTree:null,effect:null,update:null,scope:new nm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(g.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:px(u,g),emitsOptions:z1(u,g),emit:null,emitted:null,propsDefaults:et,inheritAttrs:u.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return b.ctx={_:b},b.root=a?a.root:b,b.emit=sL.bind(null,b),r.ce&&r.ce(b),b}let Pt=null;const Uo=()=>Pt||Tt;let wd,pg;{const r=d1(),a=(l,u)=>{let g;return(g=r[l])||(g=r[l]=[]),g.push(u),b=>{g.length>1?g.forEach(k=>k(b)):g[0](b)}};wd=a("__VUE_INSTANCE_SETTERS__",l=>Pt=l),pg=a("__VUE_SSR_SETTERS__",l=>mc=l)}const mr=r=>{const a=Pt;return wd(r),r.scope.on(),()=>{r.scope.off(),wd(a)}},gg=()=>{Pt&&Pt.scope.off(),wd(null)};function Tx(r){return r.vnode.shapeFlag&4}let mc=!1;function Ix(r,a=!1){a&&pg(a);const{props:l,children:u}=r.vnode,g=Tx(r);tR(r,l,g,a),iR(r,u);const b=g?bR(r,a):void 0;return a&&pg(!1),b}function bR(r,a){const l=r.type;r.accessCache=Object.create(null),r.proxy=new Proxy(r.ctx,ag);const{setup:u}=l;if(u){const g=r.setupContext=u.length>1?Bx(r):null,b=mr(r);Ci();const k=jo(u,r,0,[r.props,g]);if(vi(),b(),em(k)){if(k.then(gg,gg),a)return k.then(_=>{mg(r,_,a)}).catch(_=>{_r(_,r,0)});r.asyncDep=k}else mg(r,k,a)}else Mx(r,a)}function mg(r,a,l){Te(a)?r.type.__ssrInlineRender?r.ssrRender=a:r.render=a:it(a)&&(r.setupState=dm(a)),Mx(r,l)}let _d,fg;function wR(r){_d=r,fg=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,NL))}}const _R=()=>!_d;function Mx(r,a,l){const u=r.type;if(!r.render){if(!a&&_d&&!u.render){const g=u.template||_m(r).template;if(g){const{isCustomElement:b,compilerOptions:k}=r.appContext.config,{delimiters:_,compilerOptions:m}=u,y=mt(mt({isCustomElement:b,delimiters:_},k),m);u.render=_d(g,y)}}r.render=u.render||gn,fg&&fg(r)}{const g=mr(r);Ci();try{WL(r)}finally{vi(),g()}}}const AR={get(r,a){return bn(r,"get",""),r[a]}};function Bx(r){const a=l=>{r.exposed=l||{}};return{attrs:new Proxy(r.attrs,AR),slots:r.slots,emit:r.emit,expose:a}}function iu(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(dm(gd(r.exposed)),{get(a,l){if(l in a)return a[l];if(l in Fa)return Fa[l](r)},has(a,l){return l in a||l in Fa}}))}function kg(r,a=!0){return Te(r)?r.displayName||r.name:r.name||a&&r.__name}function CR(r){return Te(r)&&"__vccOpts"in r}const Nx=(r,a)=>VO(r,a,mc);function vR(r,a,l=et){const u=Uo(),g=on(a),b=Nn(a),k=B1((m,y)=>{let C;return q1(()=>{const x=r[a];io(C,x)&&(C=x,y())}),{get(){return m(),l.get?l.get(C):C},set(x){const A=u.vnode.props;!(A&&(a in A||g in A||b in A)&&(`onUpdate:${a}`in A||`onUpdate:${g}`in A||`onUpdate:${b}`in A))&&io(x,C)&&(C=x,y()),u.emit(`update:${a}`,l.set?l.set(x):x)}}}),_=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return k[Symbol.iterator]=()=>{let m=0;return{next(){return m<2?{value:m++?r[_]||{}:k,done:!1}:{done:!0}}}},k}function ar(r,a,l){const u=arguments.length;return u===2?it(a)&&!Ae(a)?_i(a)?at(r,null,[a]):at(r,a):at(r,null,a):(u>3?l=Array.prototype.slice.call(arguments,2):u===3&&_i(l)&&(l=[l]),at(r,a,l))}function yR(){}function xR(r,a,l,u){const g=l[u];if(g&&Px(g,r))return g;const b=a();return b.memo=r.slice(),l[u]=b}function Px(r,a){const l=r.memo;if(l.length!=a.length)return!1;for(let u=0;u<l.length;u++)if(io(l[u],a[u]))return!1;return gr>0&&mn&&mn.push(r),!0}const Ox="3.4.27",ER=gn,DR=tL,SR=ss,TR=R1,IR={createComponentInstance:Sx,setupComponent:Ix,renderComponentRoot:id,setCurrentRenderingInstance:Xa,isVNode:_i,normalizeVNode:Bn},MR=IR,BR=null,NR=null,PR=null;/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const OR="http://www.w3.org/2000/svg",LR="http://www.w3.org/1998/Math/MathML",pi=typeof document<"u"?document:null,Nv=pi&&pi.createElement("template"),RR={insert:(r,a,l)=>{a.insertBefore(r,l||null)},remove:r=>{const a=r.parentNode;a&&a.removeChild(r)},createElement:(r,a,l,u)=>{const g=a==="svg"?pi.createElementNS(OR,r):a==="mathml"?pi.createElementNS(LR,r):pi.createElement(r,l?{is:l}:void 0);return r==="select"&&u&&u.multiple!=null&&g.setAttribute("multiple",u.multiple),g},createText:r=>pi.createTextNode(r),createComment:r=>pi.createComment(r),setText:(r,a)=>{r.nodeValue=a},setElementText:(r,a)=>{r.textContent=a},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>pi.querySelector(r),setScopeId(r,a){r.setAttribute(a,"")},insertStaticContent(r,a,l,u,g,b){const k=l?l.previousSibling:a.lastChild;if(g&&(g===b||g.nextSibling))for(;a.insertBefore(g.cloneNode(!0),l),!(g===b||!(g=g.nextSibling)););else{Nv.innerHTML=u==="svg"?`<svg>${r}</svg>`:u==="mathml"?`<math>${r}</math>`:r;const _=Nv.content;if(u==="svg"||u==="mathml"){const m=_.firstChild;for(;m.firstChild;)_.appendChild(m.firstChild);_.removeChild(m)}a.insertBefore(_,l)}return[k?k.nextSibling:a.firstChild,l?l.previousSibling:a.lastChild]}},ai="transition",Ia="animation",ys=Symbol("_vtc"),xm=(r,{slots:a})=>ar(W1,Rx(r),a);xm.displayName="Transition";const Lx={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},zR=xm.props=mt({},wm,Lx),Yi=(r,a=[])=>{Ae(r)?r.forEach(l=>l(...a)):r&&r(...a)},Pv=r=>r?Ae(r)?r.some(a=>a.length>1):r.length>1:!1;function Rx(r){const a={};for(const te in r)te in Lx||(a[te]=r[te]);if(r.css===!1)return a;const{name:l="v",type:u,duration:g,enterFromClass:b=`${l}-enter-from`,enterActiveClass:k=`${l}-enter-active`,enterToClass:_=`${l}-enter-to`,appearFromClass:m=b,appearActiveClass:y=k,appearToClass:C=_,leaveFromClass:x=`${l}-leave-from`,leaveActiveClass:A=`${l}-leave-active`,leaveToClass:D=`${l}-leave-to`}=r,T=jR(g),M=T&&T[0],O=T&&T[1],{onBeforeEnter:F,onEnter:z,onEnterCancelled:P,onLeave:R,onLeaveCancelled:$,onBeforeAppear:q=F,onAppear:B=z,onAppearCancelled:V=P}=a,W=(te,de,Ee)=>{li(te,de?C:_),li(te,de?y:k),Ee&&Ee()},J=(te,de)=>{te._isLeaving=!1,li(te,x),li(te,D),li(te,A),de&&de()},ce=te=>(de,Ee)=>{const xe=te?B:z,be=()=>W(de,te,Ee);Yi(xe,[de,be]),Ov(()=>{li(de,te?m:b),Po(de,te?C:_),Pv(xe)||Lv(de,u,M,be)})};return mt(a,{onBeforeEnter(te){Yi(F,[te]),Po(te,b),Po(te,k)},onBeforeAppear(te){Yi(q,[te]),Po(te,m),Po(te,y)},onEnter:ce(!1),onAppear:ce(!0),onLeave(te,de){te._isLeaving=!0;const Ee=()=>J(te,de);Po(te,x),Po(te,A),jx(),Ov(()=>{te._isLeaving&&(li(te,x),Po(te,D),Pv(R)||Lv(te,u,O,Ee))}),Yi(R,[te,Ee])},onEnterCancelled(te){W(te,!1),Yi(P,[te])},onAppearCancelled(te){W(te,!0),Yi(V,[te])},onLeaveCancelled(te){J(te),Yi($,[te])}})}function jR(r){if(r==null)return null;if(it(r))return[Sp(r.enter),Sp(r.leave)];{const a=Sp(r);return[a,a]}}function Sp(r){return hd(r)}function Po(r,a){a.split(/\s+/).forEach(l=>l&&r.classList.add(l)),(r[ys]||(r[ys]=new Set)).add(a)}function li(r,a){a.split(/\s+/).forEach(u=>u&&r.classList.remove(u));const l=r[ys];l&&(l.delete(a),l.size||(r[ys]=void 0))}function Ov(r){requestAnimationFrame(()=>{requestAnimationFrame(r)})}let FR=0;function Lv(r,a,l,u){const g=r._endId=++FR,b=()=>{g===r._endId&&u()};if(l)return setTimeout(b,l);const{type:k,timeout:_,propCount:m}=zx(r,a);if(!k)return u();const y=k+"end";let C=0;const x=()=>{r.removeEventListener(y,A),b()},A=D=>{D.target===r&&++C>=m&&x()};setTimeout(()=>{C<m&&x()},_+1),r.addEventListener(y,A)}function zx(r,a){const l=window.getComputedStyle(r),u=T=>(l[T]||"").split(", "),g=u(`${ai}Delay`),b=u(`${ai}Duration`),k=Rv(g,b),_=u(`${Ia}Delay`),m=u(`${Ia}Duration`),y=Rv(_,m);let C=null,x=0,A=0;a===ai?k>0&&(C=ai,x=k,A=b.length):a===Ia?y>0&&(C=Ia,x=y,A=m.length):(x=Math.max(k,y),C=x>0?k>y?ai:Ia:null,A=C?C===ai?b.length:m.length:0);const D=C===ai&&/\b(transform|all)(,|$)/.test(u(`${ai}Property`).toString());return{type:C,timeout:x,propCount:A,hasTransform:D}}function Rv(r,a){for(;r.length<a.length;)r=r.concat(r);return Math.max(...a.map((l,u)=>zv(l)+zv(r[u])))}function zv(r){return r==="auto"?0:Number(r.slice(0,-1).replace(",","."))*1e3}function jx(){return document.body.offsetHeight}function VR(r,a,l){const u=r[ys];u&&(a=(a?[a,...u]:[...u]).join(" ")),a==null?r.removeAttribute("class"):l?r.setAttribute("class",a):r.className=a}const Ad=Symbol("_vod"),Fx=Symbol("_vsh"),Vx={beforeMount(r,{value:a},{transition:l}){r[Ad]=r.style.display==="none"?"":r.style.display,l&&a?l.beforeEnter(r):Ma(r,a)},mounted(r,{value:a},{transition:l}){l&&a&&l.enter(r)},updated(r,{value:a,oldValue:l},{transition:u}){!a!=!l&&(u?a?(u.beforeEnter(r),Ma(r,!0),u.enter(r)):u.leave(r,()=>{Ma(r,!1)}):Ma(r,a))},beforeUnmount(r,{value:a}){Ma(r,a)}};function Ma(r,a){r.style.display=a?r[Ad]:"none",r[Fx]=!a}function HR(){Vx.getSSRProps=({value:r})=>{if(!r)return{style:{display:"none"}}}}const Hx=Symbol("");function UR(r){const a=Uo();if(!a)return;const l=a.ut=(g=r(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(b=>wg(b,g))},u=()=>{const g=r(a.proxy);bg(a.subTree,g),l(g)};Ns(()=>{$1(u);const g=new MutationObserver(u);g.observe(a.subTree.el.parentNode,{childList:!0}),tu(()=>g.disconnect())})}function bg(r,a){if(r.shapeFlag&128){const l=r.suspense;r=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{bg(l.activeBranch,a)})}for(;r.component;)r=r.component.subTree;if(r.shapeFlag&1&&r.el)wg(r.el,a);else if(r.type===Ke)r.children.forEach(l=>bg(l,a));else if(r.type===sr){let{el:l,anchor:u}=r;for(;l&&(wg(l,a),l!==u);)l=l.nextSibling}}function wg(r,a){if(r.nodeType===1){const l=r.style;let u="";for(const g in a)l.setProperty(`--${g}`,a[g]),u+=`--${g}: ${a[g]};`;l[Hx]=u}}const $R=/(^|;)\s*display\s*:/;function qR(r,a,l){const u=r.style,g=kt(l);let b=!1;if(l&&!g){if(a)if(kt(a))for(const k of a.split(";")){const _=k.slice(0,k.indexOf(":")).trim();l[_]==null&&sd(u,_,"")}else for(const k in a)l[k]==null&&sd(u,k,"");for(const k in l)k==="display"&&(b=!0),sd(u,k,l[k])}else if(g){if(a!==l){const k=u[Hx];k&&(l+=";"+k),u.cssText=l,b=$R.test(l)}}else a&&r.removeAttribute("style");Ad in r&&(r[Ad]=b?u.display:"",r[Fx]&&(u.display="none"))}const jv=/\s*!important$/;function sd(r,a,l){if(Ae(l))l.forEach(u=>sd(r,a,u));else if(l==null&&(l=""),a.startsWith("--"))r.setProperty(a,l);else{const u=GR(r,a);jv.test(l)?r.setProperty(Nn(u),l.replace(jv,""),"important"):r[u]=l}}const Fv=["Webkit","Moz","ms"],Tp={};function GR(r,a){const l=Tp[a];if(l)return l;let u=on(a);if(u!=="filter"&&u in r)return Tp[a]=u;u=dc(u);for(let g=0;g<Fv.length;g++){const b=Fv[g]+u;if(b in r)return Tp[a]=b}return a}const Vv="http://www.w3.org/1999/xlink";function WR(r,a,l,u,g){if(u&&a.startsWith("xlink:"))l==null?r.removeAttributeNS(Vv,a.slice(6,a.length)):r.setAttributeNS(Vv,a,l);else{const b=gO(a);l==null||b&&!u1(l)?r.removeAttribute(a):r.setAttribute(a,b?"":l)}}function KR(r,a,l,u,g,b,k){if(a==="innerHTML"||a==="textContent"){u&&k(u,g,b),r[a]=l??"";return}const _=r.tagName;if(a==="value"&&_!=="PROGRESS"&&!_.includes("-")){const y=_==="OPTION"?r.getAttribute("value")||"":r.value,C=l??"";(y!==C||!("_value"in r))&&(r.value=C),l==null&&r.removeAttribute(a),r._value=l;return}let m=!1;if(l===""||l==null){const y=typeof r[a];y==="boolean"?l=u1(l):l==null&&y==="string"?(l="",m=!0):y==="number"&&(l=0,m=!0)}try{r[a]=l}catch{}m&&r.removeAttribute(a)}function Oo(r,a,l,u){r.addEventListener(a,l,u)}function YR(r,a,l,u){r.removeEventListener(a,l,u)}const Hv=Symbol("_vei");function QR(r,a,l,u,g=null){const b=r[Hv]||(r[Hv]={}),k=b[a];if(u&&k)k.value=u;else{const[_,m]=ZR(a);if(u){const y=b[a]=e6(u,g);Oo(r,_,y,m)}else k&&(YR(r,_,k,m),b[a]=void 0)}}const Uv=/(?:Once|Passive|Capture)$/;function ZR(r){let a;if(Uv.test(r)){a={};let u;for(;u=r.match(Uv);)r=r.slice(0,r.length-u[0].length),a[u[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Nn(r.slice(2)),a]}let Ip=0;const JR=Promise.resolve(),XR=()=>Ip||(JR.then(()=>Ip=0),Ip=Date.now());function e6(r,a){const l=u=>{if(!u._vts)u._vts=Date.now();else if(u._vts<=l.attached)return;Pn(t6(u,l.value),a,5,[u])};return l.value=r,l.attached=XR(),l}function t6(r,a){if(Ae(a)){const l=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{l.call(r),r._stopped=!0},a.map(u=>g=>!g._stopped&&u&&u(g))}else return a}const $v=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)>96&&r.charCodeAt(2)<123,n6=(r,a,l,u,g,b,k,_,m)=>{const y=g==="svg";a==="class"?VR(r,u,y):a==="style"?qR(r,l,u):lc(a)?Jg(a)||QR(r,a,l,u,k):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):o6(r,a,u,y))?KR(r,a,u,b,k,_,m):(a==="true-value"?r._trueValue=u:a==="false-value"&&(r._falseValue=u),WR(r,a,u,y))};function o6(r,a,l,u){if(u)return!!(a==="innerHTML"||a==="textContent"||a in r&&$v(a)&&Te(l));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&r.tagName==="INPUT"||a==="type"&&r.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const g=r.tagName;if(g==="IMG"||g==="VIDEO"||g==="CANVAS"||g==="SOURCE")return!1}return $v(a)&&kt(l)?!1:a in r}/*! #__NO_SIDE_EFFECTS__ */function Ux(r,a){const l=Zd(r);class u extends ru{constructor(b){super(l,b,a)}}return u.def=l,u}/*! #__NO_SIDE_EFFECTS__ */const i6=r=>Ux(r,Xx),r6=typeof HTMLElement<"u"?HTMLElement:class{};class ru extends r6{constructor(a,l={},u){super(),this._def=a,this._props=l,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&u?u(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Gd(()=>{this._connected||(_g(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let u=0;u<this.attributes.length;u++)this._setAttr(this.attributes[u].name);this._ob=new MutationObserver(u=>{for(const g of u)this._setAttr(g.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(u,g=!1)=>{const{props:b,styles:k}=u;let _;if(b&&!Ae(b))for(const m in b){const y=b[m];(y===Number||y&&y.type===Number)&&(m in this._props&&(this._props[m]=hd(this._props[m])),(_||(_=Object.create(null)))[on(m)]=!0)}this._numberProps=_,g&&this._resolveProps(u),this._applyStyles(k),this._update()},l=this._def.__asyncLoader;l?l().then(u=>a(u,!0)):a(this._def)}_resolveProps(a){const{props:l}=a,u=Ae(l)?l:Object.keys(l||{});for(const g of Object.keys(this))g[0]!=="_"&&u.includes(g)&&this._setProp(g,this[g],!0,!1);for(const g of u.map(on))Object.defineProperty(this,g,{get(){return this._getProp(g)},set(b){this._setProp(g,b)}})}_setAttr(a){let l=this.hasAttribute(a)?this.getAttribute(a):void 0;const u=on(a);this._numberProps&&this._numberProps[u]&&(l=hd(l)),this._setProp(u,l,!1)}_getProp(a){return this._props[a]}_setProp(a,l,u=!0,g=!0){l!==this._props[a]&&(this._props[a]=l,g&&this._instance&&this._update(),u&&(l===!0?this.setAttribute(Nn(a),""):typeof l=="string"||typeof l=="number"?this.setAttribute(Nn(a),l+""):l||this.removeAttribute(Nn(a))))}_update(){_g(this._createVNode(),this.shadowRoot)}_createVNode(){const a=at(this._def,mt({},this._props));return this._instance||(a.ce=l=>{this._instance=l,l.isCE=!0;const u=(b,k)=>{this.dispatchEvent(new CustomEvent(b,{detail:k}))};l.emit=(b,...k)=>{u(b,k),Nn(b)!==b&&u(Nn(b),k)};let g=this;for(;g=g&&(g.parentNode||g.host);)if(g instanceof ru){l.parent=g._instance,l.provides=g._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(l=>{const u=document.createElement("style");u.textContent=l,this.shadowRoot.appendChild(u)})}}function s6(r="$style"){{const a=Uo();if(!a)return et;const l=a.type.__cssModules;if(!l)return et;const u=l[r];return u||et}}const $x=new WeakMap,qx=new WeakMap,Cd=Symbol("_moveCb"),qv=Symbol("_enterCb"),Gx={name:"TransitionGroup",props:mt({},zR,{tag:String,moveClass:String}),setup(r,{slots:a}){const l=Uo(),u=bm();let g,b;return Xd(()=>{if(!g.length)return;const k=r.moveClass||`${r.name||"v"}-move`;if(!h6(g[0].el,l.vnode.el,k))return;g.forEach(l6),g.forEach(d6);const _=g.filter(u6);jx(),_.forEach(m=>{const y=m.el,C=y.style;Po(y,k),C.transform=C.webkitTransform=C.transitionDuration="";const x=y[Cd]=A=>{A&&A.target!==y||(!A||/transform$/.test(A.propertyName))&&(y.removeEventListener("transitionend",x),y[Cd]=null,li(y,k))};y.addEventListener("transitionend",x)})}),()=>{const k=qe(r),_=Rx(k);let m=k.tag||Ke;if(g=[],b)for(let y=0;y<b.length;y++){const C=b[y];C.el&&C.el instanceof Element&&(g.push(C),hr(C,vs(C,_,u,l)),$x.set(C,C.el.getBoundingClientRect()))}b=a.default?Qd(a.default()):[];for(let y=0;y<b.length;y++){const C=b[y];C.key!=null&&hr(C,vs(C,_,u,l))}return at(m,null,b)}}},a6=r=>delete r.mode;Gx.props;const c6=Gx;function l6(r){const a=r.el;a[Cd]&&a[Cd](),a[qv]&&a[qv]()}function d6(r){qx.set(r,r.el.getBoundingClientRect())}function u6(r){const a=$x.get(r),l=qx.get(r),u=a.left-l.left,g=a.top-l.top;if(u||g){const b=r.el.style;return b.transform=b.webkitTransform=`translate(${u}px,${g}px)`,b.transitionDuration="0s",r}}function h6(r,a,l){const u=r.cloneNode(),g=r[ys];g&&g.forEach(_=>{_.split(/\s+/).forEach(m=>m&&u.classList.remove(m))}),l.split(/\s+/).forEach(_=>_&&u.classList.add(_)),u.style.display="none";const b=a.nodeType===1?a:a.parentNode;b.appendChild(u);const{hasTransform:k}=zx(u);return b.removeChild(u),k}const Ai=r=>{const a=r.props["onUpdate:modelValue"]||!1;return Ae(a)?l=>ps(a,l):a};function p6(r){r.target.composing=!0}function Gv(r){const a=r.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const $n=Symbol("_assign"),Co={created(r,{modifiers:{lazy:a,trim:l,number:u}},g){r[$n]=Ai(g);const b=u||g.props&&g.props.type==="number";Oo(r,a?"change":"input",k=>{if(k.target.composing)return;let _=r.value;l&&(_=_.trim()),b&&(_=ud(_)),r[$n](_)}),l&&Oo(r,"change",()=>{r.value=r.value.trim()}),a||(Oo(r,"compositionstart",p6),Oo(r,"compositionend",Gv),Oo(r,"change",Gv))},mounted(r,{value:a}){r.value=a??""},beforeUpdate(r,{value:a,modifiers:{lazy:l,trim:u,number:g}},b){if(r[$n]=Ai(b),r.composing)return;const k=(g||r.type==="number")&&!/^0\d/.test(r.value)?ud(r.value):r.value,_=a??"";k!==_&&(document.activeElement===r&&r.type!=="range"&&(l||u&&r.value.trim()===_)||(r.value=_))}},Em={deep:!0,created(r,a,l){r[$n]=Ai(l),Oo(r,"change",()=>{const u=r._modelValue,g=xs(r),b=r.checked,k=r[$n];if(Ae(u)){const _=Hd(u,g),m=_!==-1;if(b&&!m)k(u.concat(g));else if(!b&&m){const y=[...u];y.splice(_,1),k(y)}}else if(wr(u)){const _=new Set(u);b?_.add(g):_.delete(g),k(_)}else k(Wx(r,b))})},mounted:Wv,beforeUpdate(r,a,l){r[$n]=Ai(l),Wv(r,a,l)}};function Wv(r,{value:a,oldValue:l},u){r._modelValue=a,Ae(a)?r.checked=Hd(a,u.props.value)>-1:wr(a)?r.checked=a.has(u.props.value):a!==l&&(r.checked=wi(a,Wx(r,!0)))}const Dm={created(r,{value:a},l){r.checked=wi(a,l.props.value),r[$n]=Ai(l),Oo(r,"change",()=>{r[$n](xs(r))})},beforeUpdate(r,{value:a,oldValue:l},u){r[$n]=Ai(u),a!==l&&(r.checked=wi(a,u.props.value))}},su={deep:!0,created(r,{value:a,modifiers:{number:l}},u){const g=wr(a);Oo(r,"change",()=>{const b=Array.prototype.filter.call(r.options,k=>k.selected).map(k=>l?ud(xs(k)):xs(k));r[$n](r.multiple?g?new Set(b):b:b[0]),r._assigning=!0,Gd(()=>{r._assigning=!1})}),r[$n]=Ai(u)},mounted(r,{value:a,modifiers:{number:l}}){Kv(r,a)},beforeUpdate(r,a,l){r[$n]=Ai(l)},updated(r,{value:a,modifiers:{number:l}}){r._assigning||Kv(r,a)}};function Kv(r,a,l){const u=r.multiple,g=Ae(a);if(!(u&&!g&&!wr(a))){for(let b=0,k=r.options.length;b<k;b++){const _=r.options[b],m=xs(_);if(u)if(g){const y=typeof m;y==="string"||y==="number"?_.selected=a.some(C=>String(C)===String(m)):_.selected=Hd(a,m)>-1}else _.selected=a.has(m);else if(wi(xs(_),a)){r.selectedIndex!==b&&(r.selectedIndex=b);return}}!u&&r.selectedIndex!==-1&&(r.selectedIndex=-1)}}function xs(r){return"_value"in r?r._value:r.value}function Wx(r,a){const l=a?"_trueValue":"_falseValue";return l in r?r[l]:a}const Kx={created(r,a,l){Xl(r,a,l,null,"created")},mounted(r,a,l){Xl(r,a,l,null,"mounted")},beforeUpdate(r,a,l,u){Xl(r,a,l,u,"beforeUpdate")},updated(r,a,l,u){Xl(r,a,l,u,"updated")}};function Yx(r,a){switch(r){case"SELECT":return su;case"TEXTAREA":return Co;default:switch(a){case"checkbox":return Em;case"radio":return Dm;default:return Co}}}function Xl(r,a,l,u,g){const k=Yx(r.tagName,l.props&&l.props.type)[g];k&&k(r,a,l,u)}function g6(){Co.getSSRProps=({value:r})=>({value:r}),Dm.getSSRProps=({value:r},a)=>{if(a.props&&wi(a.props.value,r))return{checked:!0}},Em.getSSRProps=({value:r},a)=>{if(Ae(r)){if(a.props&&Hd(r,a.props.value)>-1)return{checked:!0}}else if(wr(r)){if(a.props&&r.has(a.props.value))return{checked:!0}}else if(r)return{checked:!0}},Kx.getSSRProps=(r,a)=>{if(typeof a.type!="string")return;const l=Yx(a.type.toUpperCase(),a.props&&a.props.type);if(l.getSSRProps)return l.getSSRProps(r,a)}}const m6=["ctrl","shift","alt","meta"],f6={stop:r=>r.stopPropagation(),prevent:r=>r.preventDefault(),self:r=>r.target!==r.currentTarget,ctrl:r=>!r.ctrlKey,shift:r=>!r.shiftKey,alt:r=>!r.altKey,meta:r=>!r.metaKey,left:r=>"button"in r&&r.button!==0,middle:r=>"button"in r&&r.button!==1,right:r=>"button"in r&&r.button!==2,exact:(r,a)=>m6.some(l=>r[`${l}Key`]&&!a.includes(l))},vd=(r,a)=>{const l=r._withMods||(r._withMods={}),u=a.join(".");return l[u]||(l[u]=(g,...b)=>{for(let k=0;k<a.length;k++){const _=f6[a[k]];if(_&&_(g,a))return}return r(g,...b)})},k6={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},b6=(r,a)=>{const l=r._withKeys||(r._withKeys={}),u=a.join(".");return l[u]||(l[u]=g=>{if(!("key"in g))return;const b=Nn(g.key);if(a.some(k=>k===b||k6[k]===b))return r(g)})},Qx=mt({patchProp:n6},RR);let $a,Yv=!1;function Zx(){return $a||($a=kx(Qx))}function Jx(){return $a=Yv?$a:bx(Qx),Yv=!0,$a}const _g=(...r)=>{Zx().render(...r)},Xx=(...r)=>{Jx().hydrate(...r)},eE=(...r)=>{const a=Zx().createApp(...r),{mount:l}=a;return a.mount=u=>{const g=oE(u);if(!g)return;const b=a._component;!Te(b)&&!b.render&&!b.template&&(b.template=g.innerHTML),g.innerHTML="";const k=l(g,!1,nE(g));return g instanceof Element&&(g.removeAttribute("v-cloak"),g.setAttribute("data-v-app","")),k},a},tE=(...r)=>{const a=Jx().createApp(...r),{mount:l}=a;return a.mount=u=>{const g=oE(u);if(g)return l(g,!0,nE(g))},a};function nE(r){if(r instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&r instanceof MathMLElement)return"mathml"}function oE(r){return kt(r)?document.querySelector(r):r}let Qv=!1;const w6=()=>{Qv||(Qv=!0,g6(),HR())};/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const _6=()=>{},A6=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:W1,BaseTransitionPropsValidators:wm,Comment:Wt,DeprecationTypes:PR,EffectScope:nm,ErrorCodes:eL,ErrorTypeStrings:DR,Fragment:Ke,KeepAlive:TL,ReactiveEffect:As,Static:sr,Suspense:bL,Teleport:pR,Text:pr,TrackOpTypes:ZO,Transition:xm,TransitionGroup:c6,TriggerOpTypes:JO,VueElement:ru,assertNumber:XO,callWithAsyncErrorHandling:Pn,callWithErrorHandling:jo,camelize:on,capitalize:dc,cloneVNode:Ao,compatUtils:NR,compile:_6,computed:Nx,createApp:eE,createBlock:vm,createCommentVNode:fn,createElementBlock:Se,createElementVNode:Y,createHydrationRenderer:bx,createPropsRestProxy:qL,createRenderer:kx,createSSRApp:tE,createSlots:ML,createStaticVNode:ou,createTextVNode:wo,createVNode:at,customRef:B1,defineAsyncComponent:DL,defineComponent:Zd,defineCustomElement:Ux,defineEmits:OL,defineExpose:LL,defineModel:jL,defineOptions:RL,defineProps:PL,defineSSRCustomElement:i6,defineSlots:zL,devtools:SR,effect:wO,effectScope:fO,getCurrentInstance:Uo,getCurrentScope:g1,getTransitionRawChildren:Qd,guardReactiveProps:Ex,h:ar,handleError:_r,hasInjectionContext:eR,hydrate:Xx,initCustomFormatter:yR,initDirectivesForSSR:w6,inject:Va,isMemoSame:Px,isProxy:am,isReactive:gs,isReadonly:Cs,isRef:Kt,isRuntimeOnly:_R,isShallow:Ya,isVNode:_i,markRaw:gd,mergeDefaults:UL,mergeModels:$L,mergeProps:Dx,nextTick:Gd,normalizeClass:Bs,normalizeProps:hO,normalizeStyle:uc,onActivated:Y1,onBeforeMount:J1,onBeforeUnmount:eu,onBeforeUpdate:X1,onDeactivated:Q1,onErrorCaptured:ox,onMounted:Ns,onRenderTracked:nx,onRenderTriggered:tx,onScopeDispose:kO,onServerPrefetch:ex,onUnmounted:tu,onUpdated:Xd,openBlock:ye,popScopeId:cL,provide:cx,proxyRefs:dm,pushScopeId:aL,queuePostFlushCb:md,reactive:hc,readonly:sm,ref:rn,registerRuntimeCompiler:wR,render:_g,renderList:no,renderSlot:nu,resolveComponent:mm,resolveDirective:fL,resolveDynamicComponent:mL,resolveFilter:BR,resolveTransitionHooks:vs,setBlockTracking:hg,setDevtoolsHook:TR,setTransitionHooks:hr,shallowReactive:S1,shallowReadonly:FO,shallowRef:I1,ssrContextKey:H1,ssrUtils:MR,stop:_O,toDisplayString:ht,toHandlerKey:ja,toHandlers:BL,toRaw:qe,toRef:QO,toRefs:WO,toValue:$O,transformVNodeArgs:gR,triggerRef:UO,unref:Ne,useAttrs:HL,useCssModule:s6,useCssVars:UR,useModel:vR,useSSRContext:U1,useSlots:VL,useTransitionState:bm,vModelCheckbox:Em,vModelDynamic:Kx,vModelRadio:Dm,vModelSelect:su,vModelText:Co,vShow:Vx,version:Ox,warn:ER,watch:bs,watchEffect:yL,watchPostEffect:$1,watchSyncEffect:q1,withAsyncContext:GL,withCtx:hm,withDefaults:FL,withDirectives:Vo,withKeys:b6,withMemo:xR,withModifiers:vd,withScopeId:lL},Symbol.toStringTag,{value:"Module"}));function iE(r,a){return function(){return r.apply(a,arguments)}}const{toString:C6}=Object.prototype,{getPrototypeOf:Sm}=Object,au=(r=>a=>{const l=C6.call(a);return r[l]||(r[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),ro=r=>(r=r.toLowerCase(),a=>au(a)===r),cu=r=>a=>typeof a===r,{isArray:Ps}=Array,nc=cu("undefined");function v6(r){return r!==null&&!nc(r)&&r.constructor!==null&&!nc(r.constructor)&&qn(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const rE=ro("ArrayBuffer");function y6(r){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(r):a=r&&r.buffer&&rE(r.buffer),a}const x6=cu("string"),qn=cu("function"),sE=cu("number"),lu=r=>r!==null&&typeof r=="object",E6=r=>r===!0||r===!1,ad=r=>{if(au(r)!=="object")return!1;const a=Sm(r);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},D6=ro("Date"),S6=ro("File"),T6=ro("Blob"),I6=ro("FileList"),M6=r=>lu(r)&&qn(r.pipe),B6=r=>{let a;return r&&(typeof FormData=="function"&&r instanceof FormData||qn(r.append)&&((a=au(r))==="formdata"||a==="object"&&qn(r.toString)&&r.toString()==="[object FormData]"))},N6=ro("URLSearchParams"),[P6,O6,L6,R6]=["ReadableStream","Request","Response","Headers"].map(ro),z6=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fc(r,a,{allOwnKeys:l=!1}={}){if(r===null||typeof r>"u")return;let u,g;if(typeof r!="object"&&(r=[r]),Ps(r))for(u=0,g=r.length;u<g;u++)a.call(null,r[u],u,r);else{const b=l?Object.getOwnPropertyNames(r):Object.keys(r),k=b.length;let _;for(u=0;u<k;u++)_=b[u],a.call(null,r[_],_,r)}}function aE(r,a){a=a.toLowerCase();const l=Object.keys(r);let u=l.length,g;for(;u-- >0;)if(g=l[u],a===g.toLowerCase())return g;return null}const cE=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lE=r=>!nc(r)&&r!==cE;function Ag(){const{caseless:r}=lE(this)&&this||{},a={},l=(u,g)=>{const b=r&&aE(a,g)||g;ad(a[b])&&ad(u)?a[b]=Ag(a[b],u):ad(u)?a[b]=Ag({},u):Ps(u)?a[b]=u.slice():a[b]=u};for(let u=0,g=arguments.length;u<g;u++)arguments[u]&&fc(arguments[u],l);return a}const j6=(r,a,l,{allOwnKeys:u}={})=>(fc(a,(g,b)=>{l&&qn(g)?r[b]=iE(g,l):r[b]=g},{allOwnKeys:u}),r),F6=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),V6=(r,a,l,u)=>{r.prototype=Object.create(a.prototype,u),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:a.prototype}),l&&Object.assign(r.prototype,l)},H6=(r,a,l,u)=>{let g,b,k;const _={};if(a=a||{},r==null)return a;do{for(g=Object.getOwnPropertyNames(r),b=g.length;b-- >0;)k=g[b],(!u||u(k,r,a))&&!_[k]&&(a[k]=r[k],_[k]=!0);r=l!==!1&&Sm(r)}while(r&&(!l||l(r,a))&&r!==Object.prototype);return a},U6=(r,a,l)=>{r=String(r),(l===void 0||l>r.length)&&(l=r.length),l-=a.length;const u=r.indexOf(a,l);return u!==-1&&u===l},$6=r=>{if(!r)return null;if(Ps(r))return r;let a=r.length;if(!sE(a))return null;const l=new Array(a);for(;a-- >0;)l[a]=r[a];return l},q6=(r=>a=>r&&a instanceof r)(typeof Uint8Array<"u"&&Sm(Uint8Array)),G6=(r,a)=>{const u=(r&&r[Symbol.iterator]).call(r);let g;for(;(g=u.next())&&!g.done;){const b=g.value;a.call(r,b[0],b[1])}},W6=(r,a)=>{let l;const u=[];for(;(l=r.exec(a))!==null;)u.push(l);return u},K6=ro("HTMLFormElement"),Y6=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,u,g){return u.toUpperCase()+g}),Zv=(({hasOwnProperty:r})=>(a,l)=>r.call(a,l))(Object.prototype),Q6=ro("RegExp"),dE=(r,a)=>{const l=Object.getOwnPropertyDescriptors(r),u={};fc(l,(g,b)=>{let k;(k=a(g,b,r))!==!1&&(u[b]=k||g)}),Object.defineProperties(r,u)},Z6=r=>{dE(r,(a,l)=>{if(qn(r)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const u=r[l];if(qn(u)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},J6=(r,a)=>{const l={},u=g=>{g.forEach(b=>{l[b]=!0})};return Ps(r)?u(r):u(String(r).split(a)),l},X6=()=>{},ez=(r,a)=>r!=null&&Number.isFinite(r=+r)?r:a,Mp="abcdefghijklmnopqrstuvwxyz",Jv="0123456789",uE={DIGIT:Jv,ALPHA:Mp,ALPHA_DIGIT:Mp+Mp.toUpperCase()+Jv},tz=(r=16,a=uE.ALPHA_DIGIT)=>{let l="";const{length:u}=a;for(;r--;)l+=a[Math.random()*u|0];return l};function nz(r){return!!(r&&qn(r.append)&&r[Symbol.toStringTag]==="FormData"&&r[Symbol.iterator])}const oz=r=>{const a=new Array(10),l=(u,g)=>{if(lu(u)){if(a.indexOf(u)>=0)return;if(!("toJSON"in u)){a[g]=u;const b=Ps(u)?[]:{};return fc(u,(k,_)=>{const m=l(k,g+1);!nc(m)&&(b[_]=m)}),a[g]=void 0,b}}return u};return l(r,0)},iz=ro("AsyncFunction"),rz=r=>r&&(lu(r)||qn(r))&&qn(r.then)&&qn(r.catch),Q={isArray:Ps,isArrayBuffer:rE,isBuffer:v6,isFormData:B6,isArrayBufferView:y6,isString:x6,isNumber:sE,isBoolean:E6,isObject:lu,isPlainObject:ad,isReadableStream:P6,isRequest:O6,isResponse:L6,isHeaders:R6,isUndefined:nc,isDate:D6,isFile:S6,isBlob:T6,isRegExp:Q6,isFunction:qn,isStream:M6,isURLSearchParams:N6,isTypedArray:q6,isFileList:I6,forEach:fc,merge:Ag,extend:j6,trim:z6,stripBOM:F6,inherits:V6,toFlatObject:H6,kindOf:au,kindOfTest:ro,endsWith:U6,toArray:$6,forEachEntry:G6,matchAll:W6,isHTMLForm:K6,hasOwnProperty:Zv,hasOwnProp:Zv,reduceDescriptors:dE,freezeMethods:Z6,toObjectSet:J6,toCamelCase:Y6,noop:X6,toFiniteNumber:ez,findKey:aE,global:cE,isContextDefined:lE,ALPHABET:uE,generateString:tz,isSpecCompliantForm:nz,toJSONObject:oz,isAsyncFn:iz,isThenable:rz};function Oe(r,a,l,u,g){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",a&&(this.code=a),l&&(this.config=l),u&&(this.request=u),g&&(this.response=g)}Q.inherits(Oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Q.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const hE=Oe.prototype,pE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{pE[r]={value:r}});Object.defineProperties(Oe,pE);Object.defineProperty(hE,"isAxiosError",{value:!0});Oe.from=(r,a,l,u,g,b)=>{const k=Object.create(hE);return Q.toFlatObject(r,k,function(m){return m!==Error.prototype},_=>_!=="isAxiosError"),Oe.call(k,r.message,a,l,u,g),k.cause=r,k.name=r.name,b&&Object.assign(k,b),k};const sz=null;function Cg(r){return Q.isPlainObject(r)||Q.isArray(r)}function gE(r){return Q.endsWith(r,"[]")?r.slice(0,-2):r}function Xv(r,a,l){return r?r.concat(a).map(function(g,b){return g=gE(g),!l&&b?"["+g+"]":g}).join(l?".":""):a}function az(r){return Q.isArray(r)&&!r.some(Cg)}const cz=Q.toFlatObject(Q,{},null,function(a){return/^is[A-Z]/.test(a)});function du(r,a,l){if(!Q.isObject(r))throw new TypeError("target must be an object");a=a||new FormData,l=Q.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,O){return!Q.isUndefined(O[M])});const u=l.metaTokens,g=l.visitor||C,b=l.dots,k=l.indexes,m=(l.Blob||typeof Blob<"u"&&Blob)&&Q.isSpecCompliantForm(a);if(!Q.isFunction(g))throw new TypeError("visitor must be a function");function y(T){if(T===null)return"";if(Q.isDate(T))return T.toISOString();if(!m&&Q.isBlob(T))throw new Oe("Blob is not supported. Use a Buffer instead.");return Q.isArrayBuffer(T)||Q.isTypedArray(T)?m&&typeof Blob=="function"?new Blob([T]):Buffer.from(T):T}function C(T,M,O){let F=T;if(T&&!O&&typeof T=="object"){if(Q.endsWith(M,"{}"))M=u?M:M.slice(0,-2),T=JSON.stringify(T);else if(Q.isArray(T)&&az(T)||(Q.isFileList(T)||Q.endsWith(M,"[]"))&&(F=Q.toArray(T)))return M=gE(M),F.forEach(function(P,R){!(Q.isUndefined(P)||P===null)&&a.append(k===!0?Xv([M],R,b):k===null?M:M+"[]",y(P))}),!1}return Cg(T)?!0:(a.append(Xv(O,M,b),y(T)),!1)}const x=[],A=Object.assign(cz,{defaultVisitor:C,convertValue:y,isVisitable:Cg});function D(T,M){if(!Q.isUndefined(T)){if(x.indexOf(T)!==-1)throw Error("Circular reference detected in "+M.join("."));x.push(T),Q.forEach(T,function(F,z){(!(Q.isUndefined(F)||F===null)&&g.call(a,F,Q.isString(z)?z.trim():z,M,A))===!0&&D(F,M?M.concat(z):[z])}),x.pop()}}if(!Q.isObject(r))throw new TypeError("data must be an object");return D(r),a}function ey(r){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(u){return a[u]})}function Tm(r,a){this._pairs=[],r&&du(r,this,a)}const mE=Tm.prototype;mE.append=function(a,l){this._pairs.push([a,l])};mE.toString=function(a){const l=a?function(u){return a.call(this,u,ey)}:ey;return this._pairs.map(function(g){return l(g[0])+"="+l(g[1])},"").join("&")};function lz(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function fE(r,a,l){if(!a)return r;const u=l&&l.encode||lz,g=l&&l.serialize;let b;if(g?b=g(a,l):b=Q.isURLSearchParams(a)?a.toString():new Tm(a,l).toString(u),b){const k=r.indexOf("#");k!==-1&&(r=r.slice(0,k)),r+=(r.indexOf("?")===-1?"?":"&")+b}return r}class ty{constructor(){this.handlers=[]}use(a,l,u){return this.handlers.push({fulfilled:a,rejected:l,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){Q.forEach(this.handlers,function(u){u!==null&&a(u)})}}const kE={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dz=typeof URLSearchParams<"u"?URLSearchParams:Tm,uz=typeof FormData<"u"?FormData:null,hz=typeof Blob<"u"?Blob:null,pz={isBrowser:!0,classes:{URLSearchParams:dz,FormData:uz,Blob:hz},protocols:["http","https","file","blob","url","data"]},Im=typeof window<"u"&&typeof document<"u",gz=(r=>Im&&["ReactNative","NativeScript","NS"].indexOf(r)<0)(typeof navigator<"u"&&navigator.product),mz=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fz=Im&&window.location.href||"http://localhost",kz=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Im,hasStandardBrowserEnv:gz,hasStandardBrowserWebWorkerEnv:mz,origin:fz},Symbol.toStringTag,{value:"Module"})),oo={...kz,...pz};function bz(r,a){return du(r,new oo.classes.URLSearchParams,Object.assign({visitor:function(l,u,g,b){return oo.isNode&&Q.isBuffer(l)?(this.append(u,l.toString("base64")),!1):b.defaultVisitor.apply(this,arguments)}},a))}function wz(r){return Q.matchAll(/\w+|\[(\w*)]/g,r).map(a=>a[0]==="[]"?"":a[1]||a[0])}function _z(r){const a={},l=Object.keys(r);let u;const g=l.length;let b;for(u=0;u<g;u++)b=l[u],a[b]=r[b];return a}function bE(r){function a(l,u,g,b){let k=l[b++];if(k==="__proto__")return!0;const _=Number.isFinite(+k),m=b>=l.length;return k=!k&&Q.isArray(g)?g.length:k,m?(Q.hasOwnProp(g,k)?g[k]=[g[k],u]:g[k]=u,!_):((!g[k]||!Q.isObject(g[k]))&&(g[k]=[]),a(l,u,g[k],b)&&Q.isArray(g[k])&&(g[k]=_z(g[k])),!_)}if(Q.isFormData(r)&&Q.isFunction(r.entries)){const l={};return Q.forEachEntry(r,(u,g)=>{a(wz(u),g,l,0)}),l}return null}function Az(r,a,l){if(Q.isString(r))try{return(a||JSON.parse)(r),Q.trim(r)}catch(u){if(u.name!=="SyntaxError")throw u}return(l||JSON.stringify)(r)}const kc={transitional:kE,adapter:["xhr","http","fetch"],transformRequest:[function(a,l){const u=l.getContentType()||"",g=u.indexOf("application/json")>-1,b=Q.isObject(a);if(b&&Q.isHTMLForm(a)&&(a=new FormData(a)),Q.isFormData(a))return g?JSON.stringify(bE(a)):a;if(Q.isArrayBuffer(a)||Q.isBuffer(a)||Q.isStream(a)||Q.isFile(a)||Q.isBlob(a)||Q.isReadableStream(a))return a;if(Q.isArrayBufferView(a))return a.buffer;if(Q.isURLSearchParams(a))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let _;if(b){if(u.indexOf("application/x-www-form-urlencoded")>-1)return bz(a,this.formSerializer).toString();if((_=Q.isFileList(a))||u.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return du(_?{"files[]":a}:a,m&&new m,this.formSerializer)}}return b||g?(l.setContentType("application/json",!1),Az(a)):a}],transformResponse:[function(a){const l=this.transitional||kc.transitional,u=l&&l.forcedJSONParsing,g=this.responseType==="json";if(Q.isResponse(a)||Q.isReadableStream(a))return a;if(a&&Q.isString(a)&&(u&&!this.responseType||g)){const k=!(l&&l.silentJSONParsing)&&g;try{return JSON.parse(a)}catch(_){if(k)throw _.name==="SyntaxError"?Oe.from(_,Oe.ERR_BAD_RESPONSE,this,null,this.response):_}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:oo.classes.FormData,Blob:oo.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Q.forEach(["delete","get","head","post","put","patch"],r=>{kc.headers[r]={}});const Cz=Q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vz=r=>{const a={};let l,u,g;return r&&r.split(`
`).forEach(function(k){g=k.indexOf(":"),l=k.substring(0,g).trim().toLowerCase(),u=k.substring(g+1).trim(),!(!l||a[l]&&Cz[l])&&(l==="set-cookie"?a[l]?a[l].push(u):a[l]=[u]:a[l]=a[l]?a[l]+", "+u:u)}),a},ny=Symbol("internals");function Ba(r){return r&&String(r).trim().toLowerCase()}function cd(r){return r===!1||r==null?r:Q.isArray(r)?r.map(cd):String(r)}function yz(r){const a=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=l.exec(r);)a[u[1]]=u[2];return a}const xz=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function Bp(r,a,l,u,g){if(Q.isFunction(u))return u.call(this,a,l);if(g&&(a=l),!!Q.isString(a)){if(Q.isString(u))return a.indexOf(u)!==-1;if(Q.isRegExp(u))return u.test(a)}}function Ez(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,l,u)=>l.toUpperCase()+u)}function Dz(r,a){const l=Q.toCamelCase(" "+a);["get","set","has"].forEach(u=>{Object.defineProperty(r,u+l,{value:function(g,b,k){return this[u].call(this,a,g,b,k)},configurable:!0})})}class kn{constructor(a){a&&this.set(a)}set(a,l,u){const g=this;function b(_,m,y){const C=Ba(m);if(!C)throw new Error("header name must be a non-empty string");const x=Q.findKey(g,C);(!x||g[x]===void 0||y===!0||y===void 0&&g[x]!==!1)&&(g[x||m]=cd(_))}const k=(_,m)=>Q.forEach(_,(y,C)=>b(y,C,m));if(Q.isPlainObject(a)||a instanceof this.constructor)k(a,l);else if(Q.isString(a)&&(a=a.trim())&&!xz(a))k(vz(a),l);else if(Q.isHeaders(a))for(const[_,m]of a.entries())b(m,_,u);else a!=null&&b(l,a,u);return this}get(a,l){if(a=Ba(a),a){const u=Q.findKey(this,a);if(u){const g=this[u];if(!l)return g;if(l===!0)return yz(g);if(Q.isFunction(l))return l.call(this,g,u);if(Q.isRegExp(l))return l.exec(g);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,l){if(a=Ba(a),a){const u=Q.findKey(this,a);return!!(u&&this[u]!==void 0&&(!l||Bp(this,this[u],u,l)))}return!1}delete(a,l){const u=this;let g=!1;function b(k){if(k=Ba(k),k){const _=Q.findKey(u,k);_&&(!l||Bp(u,u[_],_,l))&&(delete u[_],g=!0)}}return Q.isArray(a)?a.forEach(b):b(a),g}clear(a){const l=Object.keys(this);let u=l.length,g=!1;for(;u--;){const b=l[u];(!a||Bp(this,this[b],b,a,!0))&&(delete this[b],g=!0)}return g}normalize(a){const l=this,u={};return Q.forEach(this,(g,b)=>{const k=Q.findKey(u,b);if(k){l[k]=cd(g),delete l[b];return}const _=a?Ez(b):String(b).trim();_!==b&&delete l[b],l[_]=cd(g),u[_]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const l=Object.create(null);return Q.forEach(this,(u,g)=>{u!=null&&u!==!1&&(l[g]=a&&Q.isArray(u)?u.join(", "):u)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,l])=>a+": "+l).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...l){const u=new this(a);return l.forEach(g=>u.set(g)),u}static accessor(a){const u=(this[ny]=this[ny]={accessors:{}}).accessors,g=this.prototype;function b(k){const _=Ba(k);u[_]||(Dz(g,k),u[_]=!0)}return Q.isArray(a)?a.forEach(b):b(a),this}}kn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Q.reduceDescriptors(kn.prototype,({value:r},a)=>{let l=a[0].toUpperCase()+a.slice(1);return{get:()=>r,set(u){this[l]=u}}});Q.freezeMethods(kn);function Np(r,a){const l=this||kc,u=a||l,g=kn.from(u.headers);let b=u.data;return Q.forEach(r,function(_){b=_.call(l,b,g.normalize(),a?a.status:void 0)}),g.normalize(),b}function wE(r){return!!(r&&r.__CANCEL__)}function Os(r,a,l){Oe.call(this,r??"canceled",Oe.ERR_CANCELED,a,l),this.name="CanceledError"}Q.inherits(Os,Oe,{__CANCEL__:!0});function _E(r,a,l){const u=l.config.validateStatus;!l.status||!u||u(l.status)?r(l):a(new Oe("Request failed with status code "+l.status,[Oe.ERR_BAD_REQUEST,Oe.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}function Sz(r){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return a&&a[1]||""}function Tz(r,a){r=r||10;const l=new Array(r),u=new Array(r);let g=0,b=0,k;return a=a!==void 0?a:1e3,function(m){const y=Date.now(),C=u[b];k||(k=y),l[g]=m,u[g]=y;let x=b,A=0;for(;x!==g;)A+=l[x++],x=x%r;if(g=(g+1)%r,g===b&&(b=(b+1)%r),y-k<a)return;const D=C&&y-C;return D?Math.round(A*1e3/D):void 0}}function Iz(r,a){let l=0;const u=1e3/a;let g=null;return function(){const k=this===!0,_=Date.now();if(k||_-l>u)return g&&(clearTimeout(g),g=null),l=_,r.apply(null,arguments);g||(g=setTimeout(()=>(g=null,l=Date.now(),r.apply(null,arguments)),u-(_-l)))}}const yd=(r,a,l=3)=>{let u=0;const g=Tz(50,250);return Iz(b=>{const k=b.loaded,_=b.lengthComputable?b.total:void 0,m=k-u,y=g(m),C=k<=_;u=k;const x={loaded:k,total:_,progress:_?k/_:void 0,bytes:m,rate:y||void 0,estimated:y&&_&&C?(_-k)/y:void 0,event:b,lengthComputable:_!=null};x[a?"download":"upload"]=!0,r(x)},l)},Mz=oo.hasStandardBrowserEnv?function(){const a=/(msie|trident)/i.test(navigator.userAgent),l=document.createElement("a");let u;function g(b){let k=b;return a&&(l.setAttribute("href",k),k=l.href),l.setAttribute("href",k),{href:l.href,protocol:l.protocol?l.protocol.replace(/:$/,""):"",host:l.host,search:l.search?l.search.replace(/^\?/,""):"",hash:l.hash?l.hash.replace(/^#/,""):"",hostname:l.hostname,port:l.port,pathname:l.pathname.charAt(0)==="/"?l.pathname:"/"+l.pathname}}return u=g(window.location.href),function(k){const _=Q.isString(k)?g(k):k;return _.protocol===u.protocol&&_.host===u.host}}():function(){return function(){return!0}}(),Bz=oo.hasStandardBrowserEnv?{write(r,a,l,u,g,b){const k=[r+"="+encodeURIComponent(a)];Q.isNumber(l)&&k.push("expires="+new Date(l).toGMTString()),Q.isString(u)&&k.push("path="+u),Q.isString(g)&&k.push("domain="+g),b===!0&&k.push("secure"),document.cookie=k.join("; ")},read(r){const a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Nz(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function Pz(r,a){return a?r.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):r}function AE(r,a){return r&&!Nz(a)?Pz(r,a):a}const oy=r=>r instanceof kn?{...r}:r;function fr(r,a){a=a||{};const l={};function u(y,C,x){return Q.isPlainObject(y)&&Q.isPlainObject(C)?Q.merge.call({caseless:x},y,C):Q.isPlainObject(C)?Q.merge({},C):Q.isArray(C)?C.slice():C}function g(y,C,x){if(Q.isUndefined(C)){if(!Q.isUndefined(y))return u(void 0,y,x)}else return u(y,C,x)}function b(y,C){if(!Q.isUndefined(C))return u(void 0,C)}function k(y,C){if(Q.isUndefined(C)){if(!Q.isUndefined(y))return u(void 0,y)}else return u(void 0,C)}function _(y,C,x){if(x in a)return u(y,C);if(x in r)return u(void 0,y)}const m={url:b,method:b,data:b,baseURL:k,transformRequest:k,transformResponse:k,paramsSerializer:k,timeout:k,timeoutMessage:k,withCredentials:k,withXSRFToken:k,adapter:k,responseType:k,xsrfCookieName:k,xsrfHeaderName:k,onUploadProgress:k,onDownloadProgress:k,decompress:k,maxContentLength:k,maxBodyLength:k,beforeRedirect:k,transport:k,httpAgent:k,httpsAgent:k,cancelToken:k,socketPath:k,responseEncoding:k,validateStatus:_,headers:(y,C)=>g(oy(y),oy(C),!0)};return Q.forEach(Object.keys(Object.assign({},r,a)),function(C){const x=m[C]||g,A=x(r[C],a[C],C);Q.isUndefined(A)&&x!==_||(l[C]=A)}),l}const CE=r=>{const a=fr({},r);let{data:l,withXSRFToken:u,xsrfHeaderName:g,xsrfCookieName:b,headers:k,auth:_}=a;a.headers=k=kn.from(k),a.url=fE(AE(a.baseURL,a.url),r.params,r.paramsSerializer),_&&k.set("Authorization","Basic "+btoa((_.username||"")+":"+(_.password?unescape(encodeURIComponent(_.password)):"")));let m;if(Q.isFormData(l)){if(oo.hasStandardBrowserEnv||oo.hasStandardBrowserWebWorkerEnv)k.setContentType(void 0);else if((m=k.getContentType())!==!1){const[y,...C]=m?m.split(";").map(x=>x.trim()).filter(Boolean):[];k.setContentType([y||"multipart/form-data",...C].join("; "))}}if(oo.hasStandardBrowserEnv&&(u&&Q.isFunction(u)&&(u=u(a)),u||u!==!1&&Mz(a.url))){const y=g&&b&&Bz.read(b);y&&k.set(g,y)}return a},Oz=typeof XMLHttpRequest<"u",Lz=Oz&&function(r){return new Promise(function(l,u){const g=CE(r);let b=g.data;const k=kn.from(g.headers).normalize();let{responseType:_}=g,m;function y(){g.cancelToken&&g.cancelToken.unsubscribe(m),g.signal&&g.signal.removeEventListener("abort",m)}let C=new XMLHttpRequest;C.open(g.method.toUpperCase(),g.url,!0),C.timeout=g.timeout;function x(){if(!C)return;const D=kn.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),M={data:!_||_==="text"||_==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:D,config:r,request:C};_E(function(F){l(F),y()},function(F){u(F),y()},M),C=null}"onloadend"in C?C.onloadend=x:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(x)},C.onabort=function(){C&&(u(new Oe("Request aborted",Oe.ECONNABORTED,g,C)),C=null)},C.onerror=function(){u(new Oe("Network Error",Oe.ERR_NETWORK,g,C)),C=null},C.ontimeout=function(){let T=g.timeout?"timeout of "+g.timeout+"ms exceeded":"timeout exceeded";const M=g.transitional||kE;g.timeoutErrorMessage&&(T=g.timeoutErrorMessage),u(new Oe(T,M.clarifyTimeoutError?Oe.ETIMEDOUT:Oe.ECONNABORTED,g,C)),C=null},b===void 0&&k.setContentType(null),"setRequestHeader"in C&&Q.forEach(k.toJSON(),function(T,M){C.setRequestHeader(M,T)}),Q.isUndefined(g.withCredentials)||(C.withCredentials=!!g.withCredentials),_&&_!=="json"&&(C.responseType=g.responseType),typeof g.onDownloadProgress=="function"&&C.addEventListener("progress",yd(g.onDownloadProgress,!0)),typeof g.onUploadProgress=="function"&&C.upload&&C.upload.addEventListener("progress",yd(g.onUploadProgress)),(g.cancelToken||g.signal)&&(m=D=>{C&&(u(!D||D.type?new Os(null,r,C):D),C.abort(),C=null)},g.cancelToken&&g.cancelToken.subscribe(m),g.signal&&(g.signal.aborted?m():g.signal.addEventListener("abort",m)));const A=Sz(g.url);if(A&&oo.protocols.indexOf(A)===-1){u(new Oe("Unsupported protocol "+A+":",Oe.ERR_BAD_REQUEST,r));return}C.send(b||null)})},Rz=(r,a)=>{let l=new AbortController,u;const g=function(m){if(!u){u=!0,k();const y=m instanceof Error?m:this.reason;l.abort(y instanceof Oe?y:new Os(y instanceof Error?y.message:y))}};let b=a&&setTimeout(()=>{g(new Oe(`timeout ${a} of ms exceeded`,Oe.ETIMEDOUT))},a);const k=()=>{r&&(b&&clearTimeout(b),b=null,r.forEach(m=>{m&&(m.removeEventListener?m.removeEventListener("abort",g):m.unsubscribe(g))}),r=null)};r.forEach(m=>m&&m.addEventListener&&m.addEventListener("abort",g));const{signal:_}=l;return _.unsubscribe=k,[_,()=>{b&&clearTimeout(b),b=null}]},zz=function*(r,a){let l=r.byteLength;if(!a||l<a){yield r;return}let u=0,g;for(;u<l;)g=u+a,yield r.slice(u,g),u=g},jz=async function*(r,a,l){for await(const u of r)yield*zz(ArrayBuffer.isView(u)?u:await l(String(u)),a)},iy=(r,a,l,u,g)=>{const b=jz(r,a,g);let k=0;return new ReadableStream({type:"bytes",async pull(_){const{done:m,value:y}=await b.next();if(m){_.close(),u();return}let C=y.byteLength;l&&l(k+=C),_.enqueue(new Uint8Array(y))},cancel(_){return u(_),b.return()}},{highWaterMark:2})},ry=(r,a)=>{const l=r!=null;return u=>setTimeout(()=>a({lengthComputable:l,total:r,loaded:u}))},uu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",vE=uu&&typeof ReadableStream=="function",vg=uu&&(typeof TextEncoder=="function"?(r=>a=>r.encode(a))(new TextEncoder):async r=>new Uint8Array(await new Response(r).arrayBuffer())),Fz=vE&&(()=>{let r=!1;const a=new Request(oo.origin,{body:new ReadableStream,method:"POST",get duplex(){return r=!0,"half"}}).headers.has("Content-Type");return r&&!a})(),sy=64*1024,yg=vE&&!!(()=>{try{return Q.isReadableStream(new Response("").body)}catch{}})(),xd={stream:yg&&(r=>r.body)};uu&&(r=>{["text","arrayBuffer","blob","formData","stream"].forEach(a=>{!xd[a]&&(xd[a]=Q.isFunction(r[a])?l=>l[a]():(l,u)=>{throw new Oe(`Response type '${a}' is not supported`,Oe.ERR_NOT_SUPPORT,u)})})})(new Response);const Vz=async r=>{if(r==null)return 0;if(Q.isBlob(r))return r.size;if(Q.isSpecCompliantForm(r))return(await new Request(r).arrayBuffer()).byteLength;if(Q.isArrayBufferView(r))return r.byteLength;if(Q.isURLSearchParams(r)&&(r=r+""),Q.isString(r))return(await vg(r)).byteLength},Hz=async(r,a)=>{const l=Q.toFiniteNumber(r.getContentLength());return l??Vz(a)},Uz=uu&&(async r=>{let{url:a,method:l,data:u,signal:g,cancelToken:b,timeout:k,onDownloadProgress:_,onUploadProgress:m,responseType:y,headers:C,withCredentials:x="same-origin",fetchOptions:A}=CE(r);y=y?(y+"").toLowerCase():"text";let[D,T]=g||b||k?Rz([g,b],k):[],M,O;const F=()=>{!M&&setTimeout(()=>{D&&D.unsubscribe()}),M=!0};let z;try{if(m&&Fz&&l!=="get"&&l!=="head"&&(z=await Hz(C,u))!==0){let q=new Request(a,{method:"POST",body:u,duplex:"half"}),B;Q.isFormData(u)&&(B=q.headers.get("content-type"))&&C.setContentType(B),q.body&&(u=iy(q.body,sy,ry(z,yd(m)),null,vg))}Q.isString(x)||(x=x?"cors":"omit"),O=new Request(a,{...A,signal:D,method:l.toUpperCase(),headers:C.normalize().toJSON(),body:u,duplex:"half",withCredentials:x});let P=await fetch(O);const R=yg&&(y==="stream"||y==="response");if(yg&&(_||R)){const q={};["status","statusText","headers"].forEach(V=>{q[V]=P[V]});const B=Q.toFiniteNumber(P.headers.get("content-length"));P=new Response(iy(P.body,sy,_&&ry(B,yd(_,!0)),R&&F,vg),q)}y=y||"text";let $=await xd[Q.findKey(xd,y)||"text"](P,r);return!R&&F(),T&&T(),await new Promise((q,B)=>{_E(q,B,{data:$,headers:kn.from(P.headers),status:P.status,statusText:P.statusText,config:r,request:O})})}catch(P){throw F(),P&&P.name==="TypeError"&&/fetch/i.test(P.message)?Object.assign(new Oe("Network Error",Oe.ERR_NETWORK,r,O),{cause:P.cause||P}):Oe.from(P,P&&P.code,r,O)}}),xg={http:sz,xhr:Lz,fetch:Uz};Q.forEach(xg,(r,a)=>{if(r){try{Object.defineProperty(r,"name",{value:a})}catch{}Object.defineProperty(r,"adapterName",{value:a})}});const ay=r=>`- ${r}`,$z=r=>Q.isFunction(r)||r===null||r===!1,yE={getAdapter:r=>{r=Q.isArray(r)?r:[r];const{length:a}=r;let l,u;const g={};for(let b=0;b<a;b++){l=r[b];let k;if(u=l,!$z(l)&&(u=xg[(k=String(l)).toLowerCase()],u===void 0))throw new Oe(`Unknown adapter '${k}'`);if(u)break;g[k||"#"+b]=u}if(!u){const b=Object.entries(g).map(([_,m])=>`adapter ${_} `+(m===!1?"is not supported by the environment":"is not available in the build"));let k=a?b.length>1?`since :
`+b.map(ay).join(`
`):" "+ay(b[0]):"as no adapter specified";throw new Oe("There is no suitable adapter to dispatch the request "+k,"ERR_NOT_SUPPORT")}return u},adapters:xg};function Pp(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Os(null,r)}function cy(r){return Pp(r),r.headers=kn.from(r.headers),r.data=Np.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),yE.getAdapter(r.adapter||kc.adapter)(r).then(function(u){return Pp(r),u.data=Np.call(r,r.transformResponse,u),u.headers=kn.from(u.headers),u},function(u){return wE(u)||(Pp(r),u&&u.response&&(u.response.data=Np.call(r,r.transformResponse,u.response),u.response.headers=kn.from(u.response.headers))),Promise.reject(u)})}const xE="1.7.2",Mm={};["object","boolean","number","function","string","symbol"].forEach((r,a)=>{Mm[r]=function(u){return typeof u===r||"a"+(a<1?"n ":" ")+r}});const ly={};Mm.transitional=function(a,l,u){function g(b,k){return"[Axios v"+xE+"] Transitional option '"+b+"'"+k+(u?". "+u:"")}return(b,k,_)=>{if(a===!1)throw new Oe(g(k," has been removed"+(l?" in "+l:"")),Oe.ERR_DEPRECATED);return l&&!ly[k]&&(ly[k]=!0,console.warn(g(k," has been deprecated since v"+l+" and will be removed in the near future"))),a?a(b,k,_):!0}};function qz(r,a,l){if(typeof r!="object")throw new Oe("options must be an object",Oe.ERR_BAD_OPTION_VALUE);const u=Object.keys(r);let g=u.length;for(;g-- >0;){const b=u[g],k=a[b];if(k){const _=r[b],m=_===void 0||k(_,b,r);if(m!==!0)throw new Oe("option "+b+" must be "+m,Oe.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new Oe("Unknown option "+b,Oe.ERR_BAD_OPTION)}}const Eg={assertOptions:qz,validators:Mm},ci=Eg.validators;class cr{constructor(a){this.defaults=a,this.interceptors={request:new ty,response:new ty}}async request(a,l){try{return await this._request(a,l)}catch(u){if(u instanceof Error){let g;Error.captureStackTrace?Error.captureStackTrace(g={}):g=new Error;const b=g.stack?g.stack.replace(/^.+\n/,""):"";try{u.stack?b&&!String(u.stack).endsWith(b.replace(/^.+\n.+\n/,""))&&(u.stack+=`
`+b):u.stack=b}catch{}}throw u}}_request(a,l){typeof a=="string"?(l=l||{},l.url=a):l=a||{},l=fr(this.defaults,l);const{transitional:u,paramsSerializer:g,headers:b}=l;u!==void 0&&Eg.assertOptions(u,{silentJSONParsing:ci.transitional(ci.boolean),forcedJSONParsing:ci.transitional(ci.boolean),clarifyTimeoutError:ci.transitional(ci.boolean)},!1),g!=null&&(Q.isFunction(g)?l.paramsSerializer={serialize:g}:Eg.assertOptions(g,{encode:ci.function,serialize:ci.function},!0)),l.method=(l.method||this.defaults.method||"get").toLowerCase();let k=b&&Q.merge(b.common,b[l.method]);b&&Q.forEach(["delete","get","head","post","put","patch","common"],T=>{delete b[T]}),l.headers=kn.concat(k,b);const _=[];let m=!0;this.interceptors.request.forEach(function(M){typeof M.runWhen=="function"&&M.runWhen(l)===!1||(m=m&&M.synchronous,_.unshift(M.fulfilled,M.rejected))});const y=[];this.interceptors.response.forEach(function(M){y.push(M.fulfilled,M.rejected)});let C,x=0,A;if(!m){const T=[cy.bind(this),void 0];for(T.unshift.apply(T,_),T.push.apply(T,y),A=T.length,C=Promise.resolve(l);x<A;)C=C.then(T[x++],T[x++]);return C}A=_.length;let D=l;for(x=0;x<A;){const T=_[x++],M=_[x++];try{D=T(D)}catch(O){M.call(this,O);break}}try{C=cy.call(this,D)}catch(T){return Promise.reject(T)}for(x=0,A=y.length;x<A;)C=C.then(y[x++],y[x++]);return C}getUri(a){a=fr(this.defaults,a);const l=AE(a.baseURL,a.url);return fE(l,a.params,a.paramsSerializer)}}Q.forEach(["delete","get","head","options"],function(a){cr.prototype[a]=function(l,u){return this.request(fr(u||{},{method:a,url:l,data:(u||{}).data}))}});Q.forEach(["post","put","patch"],function(a){function l(u){return function(b,k,_){return this.request(fr(_||{},{method:a,headers:u?{"Content-Type":"multipart/form-data"}:{},url:b,data:k}))}}cr.prototype[a]=l(),cr.prototype[a+"Form"]=l(!0)});class Bm{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(b){l=b});const u=this;this.promise.then(g=>{if(!u._listeners)return;let b=u._listeners.length;for(;b-- >0;)u._listeners[b](g);u._listeners=null}),this.promise.then=g=>{let b;const k=new Promise(_=>{u.subscribe(_),b=_}).then(g);return k.cancel=function(){u.unsubscribe(b)},k},a(function(b,k,_){u.reason||(u.reason=new Os(b,k,_),l(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const l=this._listeners.indexOf(a);l!==-1&&this._listeners.splice(l,1)}static source(){let a;return{token:new Bm(function(g){a=g}),cancel:a}}}function Gz(r){return function(l){return r.apply(null,l)}}function Wz(r){return Q.isObject(r)&&r.isAxiosError===!0}const Dg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Dg).forEach(([r,a])=>{Dg[a]=r});function EE(r){const a=new cr(r),l=iE(cr.prototype.request,a);return Q.extend(l,cr.prototype,a,{allOwnKeys:!0}),Q.extend(l,a,null,{allOwnKeys:!0}),l.create=function(g){return EE(fr(r,g))},l}const Et=EE(kc);Et.Axios=cr;Et.CanceledError=Os;Et.CancelToken=Bm;Et.isCancel=wE;Et.VERSION=xE;Et.toFormData=du;Et.AxiosError=Oe;Et.Cancel=Et.CanceledError;Et.all=function(a){return Promise.all(a)};Et.spread=Gz;Et.isAxiosError=Wz;Et.mergeConfig=fr;Et.AxiosHeaders=kn;Et.formToJSON=r=>bE(Q.isHTMLForm(r)?new FormData(r):r);Et.getAdapter=yE.getAdapter;Et.HttpStatusCode=Dg;Et.default=Et;var cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function DE(r){if(r.__esModule)return r;var a=r.default;if(typeof a=="function"){var l=function u(){return this instanceof u?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};l.prototype=a.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(r).forEach(function(u){var g=Object.getOwnPropertyDescriptor(r,u);Object.defineProperty(l,u,g.get?g:{enumerable:!0,get:function(){return r[u]}})}),l}var Kz=function(a){return Yz(a)&&!Qz(a)};function Yz(r){return!!r&&typeof r=="object"}function Qz(r){var a=Object.prototype.toString.call(r);return a==="[object RegExp]"||a==="[object Date]"||Xz(r)}var Zz=typeof Symbol=="function"&&Symbol.for,Jz=Zz?Symbol.for("react.element"):60103;function Xz(r){return r.$$typeof===Jz}function e7(r){return Array.isArray(r)?[]:{}}function oc(r,a){return a.clone!==!1&&a.isMergeableObject(r)?Es(e7(r),r,a):r}function t7(r,a,l){return r.concat(a).map(function(u){return oc(u,l)})}function n7(r,a){if(!a.customMerge)return Es;var l=a.customMerge(r);return typeof l=="function"?l:Es}function o7(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter(function(a){return Object.propertyIsEnumerable.call(r,a)}):[]}function dy(r){return Object.keys(r).concat(o7(r))}function SE(r,a){try{return a in r}catch{return!1}}function i7(r,a){return SE(r,a)&&!(Object.hasOwnProperty.call(r,a)&&Object.propertyIsEnumerable.call(r,a))}function r7(r,a,l){var u={};return l.isMergeableObject(r)&&dy(r).forEach(function(g){u[g]=oc(r[g],l)}),dy(a).forEach(function(g){i7(r,g)||(SE(r,g)&&l.isMergeableObject(a[g])?u[g]=n7(g,l)(r[g],a[g],l):u[g]=oc(a[g],l))}),u}function Es(r,a,l){l=l||{},l.arrayMerge=l.arrayMerge||t7,l.isMergeableObject=l.isMergeableObject||Kz,l.cloneUnlessOtherwiseSpecified=oc;var u=Array.isArray(a),g=Array.isArray(r),b=u===g;return b?u?l.arrayMerge(r,a,l):r7(r,a,l):oc(a,l)}Es.all=function(a,l){if(!Array.isArray(a))throw new Error("first argument should be an array");return a.reduce(function(u,g){return Es(u,g,l)},{})};var s7=Es,a7=s7;const TE=Nm(a7);var c7=Error,l7=EvalError,d7=RangeError,u7=ReferenceError,IE=SyntaxError,bc=TypeError,h7=URIError,p7=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var a={},l=Symbol("test"),u=Object(l);if(typeof l=="string"||Object.prototype.toString.call(l)!=="[object Symbol]"||Object.prototype.toString.call(u)!=="[object Symbol]")return!1;var g=42;a[l]=g;for(l in a)return!1;if(typeof Object.keys=="function"&&Object.keys(a).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(a).length!==0)return!1;var b=Object.getOwnPropertySymbols(a);if(b.length!==1||b[0]!==l||!Object.prototype.propertyIsEnumerable.call(a,l))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var k=Object.getOwnPropertyDescriptor(a,l);if(k.value!==g||k.enumerable!==!0)return!1}return!0},uy=typeof Symbol<"u"&&Symbol,g7=p7,m7=function(){return typeof uy!="function"||typeof Symbol!="function"||typeof uy("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:g7()},Op={__proto__:null,foo:{}},f7=Object,k7=function(){return{__proto__:Op}.foo===Op.foo&&!(Op instanceof f7)},b7="Function.prototype.bind called on incompatible ",w7=Object.prototype.toString,_7=Math.max,A7="[object Function]",hy=function(a,l){for(var u=[],g=0;g<a.length;g+=1)u[g]=a[g];for(var b=0;b<l.length;b+=1)u[b+a.length]=l[b];return u},C7=function(a,l){for(var u=[],g=l,b=0;g<a.length;g+=1,b+=1)u[b]=a[g];return u},v7=function(r,a){for(var l="",u=0;u<r.length;u+=1)l+=r[u],u+1<r.length&&(l+=a);return l},y7=function(a){var l=this;if(typeof l!="function"||w7.apply(l)!==A7)throw new TypeError(b7+l);for(var u=C7(arguments,1),g,b=function(){if(this instanceof g){var C=l.apply(this,hy(u,arguments));return Object(C)===C?C:this}return l.apply(a,hy(u,arguments))},k=_7(0,l.length-u.length),_=[],m=0;m<k;m++)_[m]="$"+m;if(g=Function("binder","return function ("+v7(_,",")+"){ return binder.apply(this,arguments); }")(b),l.prototype){var y=function(){};y.prototype=l.prototype,g.prototype=new y,y.prototype=null}return g},x7=y7,Pm=Function.prototype.bind||x7,E7=Function.prototype.call,D7=Object.prototype.hasOwnProperty,S7=Pm,T7=S7.call(E7,D7),He,I7=c7,M7=l7,B7=d7,N7=u7,Ds=IE,_s=bc,P7=h7,ME=Function,Lp=function(r){try{return ME('"use strict"; return ('+r+").constructor;")()}catch{}},lr=Object.getOwnPropertyDescriptor;if(lr)try{lr({},"")}catch{lr=null}var Rp=function(){throw new _s},O7=lr?function(){try{return arguments.callee,Rp}catch{try{return lr(arguments,"callee").get}catch{return Rp}}}():Rp,os=m7(),L7=k7(),jt=Object.getPrototypeOf||(L7?function(r){return r.__proto__}:null),as={},R7=typeof Uint8Array>"u"||!jt?He:jt(Uint8Array),dr={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?He:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?He:ArrayBuffer,"%ArrayIteratorPrototype%":os&&jt?jt([][Symbol.iterator]()):He,"%AsyncFromSyncIteratorPrototype%":He,"%AsyncFunction%":as,"%AsyncGenerator%":as,"%AsyncGeneratorFunction%":as,"%AsyncIteratorPrototype%":as,"%Atomics%":typeof Atomics>"u"?He:Atomics,"%BigInt%":typeof BigInt>"u"?He:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?He:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?He:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?He:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":I7,"%eval%":eval,"%EvalError%":M7,"%Float32Array%":typeof Float32Array>"u"?He:Float32Array,"%Float64Array%":typeof Float64Array>"u"?He:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?He:FinalizationRegistry,"%Function%":ME,"%GeneratorFunction%":as,"%Int8Array%":typeof Int8Array>"u"?He:Int8Array,"%Int16Array%":typeof Int16Array>"u"?He:Int16Array,"%Int32Array%":typeof Int32Array>"u"?He:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":os&&jt?jt(jt([][Symbol.iterator]())):He,"%JSON%":typeof JSON=="object"?JSON:He,"%Map%":typeof Map>"u"?He:Map,"%MapIteratorPrototype%":typeof Map>"u"||!os||!jt?He:jt(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?He:Promise,"%Proxy%":typeof Proxy>"u"?He:Proxy,"%RangeError%":B7,"%ReferenceError%":N7,"%Reflect%":typeof Reflect>"u"?He:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?He:Set,"%SetIteratorPrototype%":typeof Set>"u"||!os||!jt?He:jt(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?He:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":os&&jt?jt(""[Symbol.iterator]()):He,"%Symbol%":os?Symbol:He,"%SyntaxError%":Ds,"%ThrowTypeError%":O7,"%TypedArray%":R7,"%TypeError%":_s,"%Uint8Array%":typeof Uint8Array>"u"?He:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?He:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?He:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?He:Uint32Array,"%URIError%":P7,"%WeakMap%":typeof WeakMap>"u"?He:WeakMap,"%WeakRef%":typeof WeakRef>"u"?He:WeakRef,"%WeakSet%":typeof WeakSet>"u"?He:WeakSet};if(jt)try{null.error}catch(r){var z7=jt(jt(r));dr["%Error.prototype%"]=z7}var j7=function r(a){var l;if(a==="%AsyncFunction%")l=Lp("async function () {}");else if(a==="%GeneratorFunction%")l=Lp("function* () {}");else if(a==="%AsyncGeneratorFunction%")l=Lp("async function* () {}");else if(a==="%AsyncGenerator%"){var u=r("%AsyncGeneratorFunction%");u&&(l=u.prototype)}else if(a==="%AsyncIteratorPrototype%"){var g=r("%AsyncGenerator%");g&&jt&&(l=jt(g.prototype))}return dr[a]=l,l},py={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},wc=Pm,Ed=T7,F7=wc.call(Function.call,Array.prototype.concat),V7=wc.call(Function.apply,Array.prototype.splice),gy=wc.call(Function.call,String.prototype.replace),Dd=wc.call(Function.call,String.prototype.slice),H7=wc.call(Function.call,RegExp.prototype.exec),U7=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,$7=/\\(\\)?/g,q7=function(a){var l=Dd(a,0,1),u=Dd(a,-1);if(l==="%"&&u!=="%")throw new Ds("invalid intrinsic syntax, expected closing `%`");if(u==="%"&&l!=="%")throw new Ds("invalid intrinsic syntax, expected opening `%`");var g=[];return gy(a,U7,function(b,k,_,m){g[g.length]=_?gy(m,$7,"$1"):k||b}),g},G7=function(a,l){var u=a,g;if(Ed(py,u)&&(g=py[u],u="%"+g[0]+"%"),Ed(dr,u)){var b=dr[u];if(b===as&&(b=j7(u)),typeof b>"u"&&!l)throw new _s("intrinsic "+a+" exists, but is not available. Please file an issue!");return{alias:g,name:u,value:b}}throw new Ds("intrinsic "+a+" does not exist!")},Ls=function(a,l){if(typeof a!="string"||a.length===0)throw new _s("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof l!="boolean")throw new _s('"allowMissing" argument must be a boolean');if(H7(/^%?[^%]*%?$/,a)===null)throw new Ds("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var u=q7(a),g=u.length>0?u[0]:"",b=G7("%"+g+"%",l),k=b.name,_=b.value,m=!1,y=b.alias;y&&(g=y[0],V7(u,F7([0,1],y)));for(var C=1,x=!0;C<u.length;C+=1){var A=u[C],D=Dd(A,0,1),T=Dd(A,-1);if((D==='"'||D==="'"||D==="`"||T==='"'||T==="'"||T==="`")&&D!==T)throw new Ds("property names with quotes must have matching quotes");if((A==="constructor"||!x)&&(m=!0),g+="."+A,k="%"+g+"%",Ed(dr,k))_=dr[k];else if(_!=null){if(!(A in _)){if(!l)throw new _s("base intrinsic for "+a+" exists, but the property is not available.");return}if(lr&&C+1>=u.length){var M=lr(_,A);x=!!M,x&&"get"in M&&!("originalValue"in M.get)?_=M.get:_=_[A]}else x=Ed(_,A),_=_[A];x&&!m&&(dr[k]=_)}}return _},BE={exports:{}},zp,my;function Om(){if(my)return zp;my=1;var r=Ls,a=r("%Object.defineProperty%",!0)||!1;if(a)try{a({},"a",{value:1})}catch{a=!1}return zp=a,zp}var W7=Ls,ld=W7("%Object.getOwnPropertyDescriptor%",!0);if(ld)try{ld([],"length")}catch{ld=null}var NE=ld,fy=Om(),K7=IE,is=bc,ky=NE,Y7=function(a,l,u){if(!a||typeof a!="object"&&typeof a!="function")throw new is("`obj` must be an object or a function`");if(typeof l!="string"&&typeof l!="symbol")throw new is("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new is("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new is("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new is("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new is("`loose`, if provided, must be a boolean");var g=arguments.length>3?arguments[3]:null,b=arguments.length>4?arguments[4]:null,k=arguments.length>5?arguments[5]:null,_=arguments.length>6?arguments[6]:!1,m=!!ky&&ky(a,l);if(fy)fy(a,l,{configurable:k===null&&m?m.configurable:!k,enumerable:g===null&&m?m.enumerable:!g,value:u,writable:b===null&&m?m.writable:!b});else if(_||!g&&!b&&!k)a[l]=u;else throw new K7("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},Sg=Om(),PE=function(){return!!Sg};PE.hasArrayLengthDefineBug=function(){if(!Sg)return null;try{return Sg([],"length",{value:1}).length!==1}catch{return!0}};var Q7=PE,Z7=Ls,by=Y7,J7=Q7(),wy=NE,_y=bc,X7=Z7("%Math.floor%"),e8=function(a,l){if(typeof a!="function")throw new _y("`fn` is not a function");if(typeof l!="number"||l<0||l>4294967295||X7(l)!==l)throw new _y("`length` must be a positive 32-bit integer");var u=arguments.length>2&&!!arguments[2],g=!0,b=!0;if("length"in a&&wy){var k=wy(a,"length");k&&!k.configurable&&(g=!1),k&&!k.writable&&(b=!1)}return(g||b||!u)&&(J7?by(a,"length",l,!0,!0):by(a,"length",l)),a};(function(r){var a=Pm,l=Ls,u=e8,g=bc,b=l("%Function.prototype.apply%"),k=l("%Function.prototype.call%"),_=l("%Reflect.apply%",!0)||a.call(k,b),m=Om(),y=l("%Math.max%");r.exports=function(A){if(typeof A!="function")throw new g("a function is required");var D=_(a,k,arguments);return u(D,1+y(0,A.length-(arguments.length-1)),!0)};var C=function(){return _(a,b,arguments)};m?m(r.exports,"apply",{value:C}):r.exports.apply=C})(BE);var t8=BE.exports,OE=Ls,LE=t8,n8=LE(OE("String.prototype.indexOf")),o8=function(a,l){var u=OE(a,!!l);return typeof u=="function"&&n8(a,".prototype.")>-1?LE(u):u};const i8={},r8=Object.freeze(Object.defineProperty({__proto__:null,default:i8},Symbol.toStringTag,{value:"Module"})),s8=DE(r8);var Lm=typeof Map=="function"&&Map.prototype,jp=Object.getOwnPropertyDescriptor&&Lm?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Sd=Lm&&jp&&typeof jp.get=="function"?jp.get:null,Ay=Lm&&Map.prototype.forEach,Rm=typeof Set=="function"&&Set.prototype,Fp=Object.getOwnPropertyDescriptor&&Rm?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Td=Rm&&Fp&&typeof Fp.get=="function"?Fp.get:null,Cy=Rm&&Set.prototype.forEach,a8=typeof WeakMap=="function"&&WeakMap.prototype,qa=a8?WeakMap.prototype.has:null,c8=typeof WeakSet=="function"&&WeakSet.prototype,Ga=c8?WeakSet.prototype.has:null,l8=typeof WeakRef=="function"&&WeakRef.prototype,vy=l8?WeakRef.prototype.deref:null,d8=Boolean.prototype.valueOf,u8=Object.prototype.toString,h8=Function.prototype.toString,p8=String.prototype.match,zm=String.prototype.slice,fi=String.prototype.replace,g8=String.prototype.toUpperCase,yy=String.prototype.toLowerCase,RE=RegExp.prototype.test,xy=Array.prototype.concat,ko=Array.prototype.join,m8=Array.prototype.slice,Ey=Math.floor,Tg=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Vp=Object.getOwnPropertySymbols,Ig=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Ss=typeof Symbol=="function"&&typeof Symbol.iterator=="object",Zt=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Ss||!0)?Symbol.toStringTag:null,zE=Object.prototype.propertyIsEnumerable,Dy=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function Sy(r,a){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||RE.call(/e/,a))return a;var l=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var u=r<0?-Ey(-r):Ey(r);if(u!==r){var g=String(u),b=zm.call(a,g.length+1);return fi.call(g,l,"$&_")+"."+fi.call(fi.call(b,/([0-9]{3})/g,"$&_"),/_$/,"")}}return fi.call(a,l,"$&_")}var Mg=s8,Ty=Mg.custom,Iy=FE(Ty)?Ty:null,f8=function r(a,l,u,g){var b=l||{};if(gi(b,"quoteStyle")&&b.quoteStyle!=="single"&&b.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(gi(b,"maxStringLength")&&(typeof b.maxStringLength=="number"?b.maxStringLength<0&&b.maxStringLength!==1/0:b.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var k=gi(b,"customInspect")?b.customInspect:!0;if(typeof k!="boolean"&&k!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(gi(b,"indent")&&b.indent!==null&&b.indent!=="	"&&!(parseInt(b.indent,10)===b.indent&&b.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(gi(b,"numericSeparator")&&typeof b.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var _=b.numericSeparator;if(typeof a>"u")return"undefined";if(a===null)return"null";if(typeof a=="boolean")return a?"true":"false";if(typeof a=="string")return HE(a,b);if(typeof a=="number"){if(a===0)return 1/0/a>0?"0":"-0";var m=String(a);return _?Sy(a,m):m}if(typeof a=="bigint"){var y=String(a)+"n";return _?Sy(a,y):y}var C=typeof b.depth>"u"?5:b.depth;if(typeof u>"u"&&(u=0),u>=C&&C>0&&typeof a=="object")return Bg(a)?"[Array]":"[Object]";var x=P8(b,u);if(typeof g>"u")g=[];else if(VE(g,a)>=0)return"[Circular]";function A(de,Ee,xe){if(Ee&&(g=m8.call(g),g.push(Ee)),xe){var be={depth:b.depth};return gi(b,"quoteStyle")&&(be.quoteStyle=b.quoteStyle),r(de,be,u+1,g)}return r(de,b,u+1,g)}if(typeof a=="function"&&!My(a)){var D=x8(a),T=ed(a,A);return"[Function"+(D?": "+D:" (anonymous)")+"]"+(T.length>0?" { "+ko.call(T,", ")+" }":"")}if(FE(a)){var M=Ss?fi.call(String(a),/^(Symbol\(.*\))_[^)]*$/,"$1"):Ig.call(a);return typeof a=="object"&&!Ss?Na(M):M}if(M8(a)){for(var O="<"+yy.call(String(a.nodeName)),F=a.attributes||[],z=0;z<F.length;z++)O+=" "+F[z].name+"="+jE(k8(F[z].value),"double",b);return O+=">",a.childNodes&&a.childNodes.length&&(O+="..."),O+="</"+yy.call(String(a.nodeName))+">",O}if(Bg(a)){if(a.length===0)return"[]";var P=ed(a,A);return x&&!N8(P)?"["+Ng(P,x)+"]":"[ "+ko.call(P,", ")+" ]"}if(w8(a)){var R=ed(a,A);return!("cause"in Error.prototype)&&"cause"in a&&!zE.call(a,"cause")?"{ ["+String(a)+"] "+ko.call(xy.call("[cause]: "+A(a.cause),R),", ")+" }":R.length===0?"["+String(a)+"]":"{ ["+String(a)+"] "+ko.call(R,", ")+" }"}if(typeof a=="object"&&k){if(Iy&&typeof a[Iy]=="function"&&Mg)return Mg(a,{depth:C-u});if(k!=="symbol"&&typeof a.inspect=="function")return a.inspect()}if(E8(a)){var $=[];return Ay&&Ay.call(a,function(de,Ee){$.push(A(Ee,a,!0)+" => "+A(de,a))}),By("Map",Sd.call(a),$,x)}if(T8(a)){var q=[];return Cy&&Cy.call(a,function(de){q.push(A(de,a))}),By("Set",Td.call(a),q,x)}if(D8(a))return Hp("WeakMap");if(I8(a))return Hp("WeakSet");if(S8(a))return Hp("WeakRef");if(A8(a))return Na(A(Number(a)));if(v8(a))return Na(A(Tg.call(a)));if(C8(a))return Na(d8.call(a));if(_8(a))return Na(A(String(a)));if(typeof window<"u"&&a===window)return"{ [object Window] }";if(a===cs)return"{ [object globalThis] }";if(!b8(a)&&!My(a)){var B=ed(a,A),V=Dy?Dy(a)===Object.prototype:a instanceof Object||a.constructor===Object,W=a instanceof Object?"":"null prototype",J=!V&&Zt&&Object(a)===a&&Zt in a?zm.call(yi(a),8,-1):W?"Object":"",ce=V||typeof a.constructor!="function"?"":a.constructor.name?a.constructor.name+" ":"",te=ce+(J||W?"["+ko.call(xy.call([],J||[],W||[]),": ")+"] ":"");return B.length===0?te+"{}":x?te+"{"+Ng(B,x)+"}":te+"{ "+ko.call(B,", ")+" }"}return String(a)};function jE(r,a,l){var u=(l.quoteStyle||a)==="double"?'"':"'";return u+r+u}function k8(r){return fi.call(String(r),/"/g,"&quot;")}function Bg(r){return yi(r)==="[object Array]"&&(!Zt||!(typeof r=="object"&&Zt in r))}function b8(r){return yi(r)==="[object Date]"&&(!Zt||!(typeof r=="object"&&Zt in r))}function My(r){return yi(r)==="[object RegExp]"&&(!Zt||!(typeof r=="object"&&Zt in r))}function w8(r){return yi(r)==="[object Error]"&&(!Zt||!(typeof r=="object"&&Zt in r))}function _8(r){return yi(r)==="[object String]"&&(!Zt||!(typeof r=="object"&&Zt in r))}function A8(r){return yi(r)==="[object Number]"&&(!Zt||!(typeof r=="object"&&Zt in r))}function C8(r){return yi(r)==="[object Boolean]"&&(!Zt||!(typeof r=="object"&&Zt in r))}function FE(r){if(Ss)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!Ig)return!1;try{return Ig.call(r),!0}catch{}return!1}function v8(r){if(!r||typeof r!="object"||!Tg)return!1;try{return Tg.call(r),!0}catch{}return!1}var y8=Object.prototype.hasOwnProperty||function(r){return r in this};function gi(r,a){return y8.call(r,a)}function yi(r){return u8.call(r)}function x8(r){if(r.name)return r.name;var a=p8.call(h8.call(r),/^function\s*([\w$]+)/);return a?a[1]:null}function VE(r,a){if(r.indexOf)return r.indexOf(a);for(var l=0,u=r.length;l<u;l++)if(r[l]===a)return l;return-1}function E8(r){if(!Sd||!r||typeof r!="object")return!1;try{Sd.call(r);try{Td.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function D8(r){if(!qa||!r||typeof r!="object")return!1;try{qa.call(r,qa);try{Ga.call(r,Ga)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function S8(r){if(!vy||!r||typeof r!="object")return!1;try{return vy.call(r),!0}catch{}return!1}function T8(r){if(!Td||!r||typeof r!="object")return!1;try{Td.call(r);try{Sd.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function I8(r){if(!Ga||!r||typeof r!="object")return!1;try{Ga.call(r,Ga);try{qa.call(r,qa)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function M8(r){return!r||typeof r!="object"?!1:typeof HTMLElement<"u"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function HE(r,a){if(r.length>a.maxStringLength){var l=r.length-a.maxStringLength,u="... "+l+" more character"+(l>1?"s":"");return HE(zm.call(r,0,a.maxStringLength),a)+u}var g=fi.call(fi.call(r,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,B8);return jE(g,"single",a)}function B8(r){var a=r.charCodeAt(0),l={8:"b",9:"t",10:"n",12:"f",13:"r"}[a];return l?"\\"+l:"\\x"+(a<16?"0":"")+g8.call(a.toString(16))}function Na(r){return"Object("+r+")"}function Hp(r){return r+" { ? }"}function By(r,a,l,u){var g=u?Ng(l,u):ko.call(l,", ");return r+" ("+a+") {"+g+"}"}function N8(r){for(var a=0;a<r.length;a++)if(VE(r[a],`
`)>=0)return!1;return!0}function P8(r,a){var l;if(r.indent==="	")l="	";else if(typeof r.indent=="number"&&r.indent>0)l=ko.call(Array(r.indent+1)," ");else return null;return{base:l,prev:ko.call(Array(a+1),l)}}function Ng(r,a){if(r.length===0)return"";var l=`
`+a.prev+a.base;return l+ko.call(r,","+l)+`
`+a.prev}function ed(r,a){var l=Bg(r),u=[];if(l){u.length=r.length;for(var g=0;g<r.length;g++)u[g]=gi(r,g)?a(r[g],r):""}var b=typeof Vp=="function"?Vp(r):[],k;if(Ss){k={};for(var _=0;_<b.length;_++)k["$"+b[_]]=b[_]}for(var m in r)gi(r,m)&&(l&&String(Number(m))===m&&m<r.length||Ss&&k["$"+m]instanceof Symbol||(RE.call(/[^\w$]/,m)?u.push(a(m,r)+": "+a(r[m],r)):u.push(m+": "+a(r[m],r))));if(typeof Vp=="function")for(var y=0;y<b.length;y++)zE.call(r,b[y])&&u.push("["+a(b[y])+"]: "+a(r[b[y]],r));return u}var UE=Ls,Rs=o8,O8=f8,L8=bc,td=UE("%WeakMap%",!0),nd=UE("%Map%",!0),R8=Rs("WeakMap.prototype.get",!0),z8=Rs("WeakMap.prototype.set",!0),j8=Rs("WeakMap.prototype.has",!0),F8=Rs("Map.prototype.get",!0),V8=Rs("Map.prototype.set",!0),H8=Rs("Map.prototype.has",!0),jm=function(r,a){for(var l=r,u;(u=l.next)!==null;l=u)if(u.key===a)return l.next=u.next,u.next=r.next,r.next=u,u},U8=function(r,a){var l=jm(r,a);return l&&l.value},$8=function(r,a,l){var u=jm(r,a);u?u.value=l:r.next={key:a,next:r.next,value:l}},q8=function(r,a){return!!jm(r,a)},G8=function(){var a,l,u,g={assert:function(b){if(!g.has(b))throw new L8("Side channel does not contain "+O8(b))},get:function(b){if(td&&b&&(typeof b=="object"||typeof b=="function")){if(a)return R8(a,b)}else if(nd){if(l)return F8(l,b)}else if(u)return U8(u,b)},has:function(b){if(td&&b&&(typeof b=="object"||typeof b=="function")){if(a)return j8(a,b)}else if(nd){if(l)return H8(l,b)}else if(u)return q8(u,b);return!1},set:function(b,k){td&&b&&(typeof b=="object"||typeof b=="function")?(a||(a=new td),z8(a,b,k)):nd?(l||(l=new nd),V8(l,b,k)):(u||(u={key:{},next:null}),$8(u,b,k))}};return g},W8=String.prototype.replace,K8=/%20/g,Up={RFC1738:"RFC1738",RFC3986:"RFC3986"},Fm={default:Up.RFC3986,formatters:{RFC1738:function(r){return W8.call(r,K8,"+")},RFC3986:function(r){return String(r)}},RFC1738:Up.RFC1738,RFC3986:Up.RFC3986},Y8=Fm,$p=Object.prototype.hasOwnProperty,Ji=Array.isArray,ho=function(){for(var r=[],a=0;a<256;++a)r.push("%"+((a<16?"0":"")+a.toString(16)).toUpperCase());return r}(),Q8=function(a){for(;a.length>1;){var l=a.pop(),u=l.obj[l.prop];if(Ji(u)){for(var g=[],b=0;b<u.length;++b)typeof u[b]<"u"&&g.push(u[b]);l.obj[l.prop]=g}}},$E=function(a,l){for(var u=l&&l.plainObjects?Object.create(null):{},g=0;g<a.length;++g)typeof a[g]<"u"&&(u[g]=a[g]);return u},Z8=function r(a,l,u){if(!l)return a;if(typeof l!="object"){if(Ji(a))a.push(l);else if(a&&typeof a=="object")(u&&(u.plainObjects||u.allowPrototypes)||!$p.call(Object.prototype,l))&&(a[l]=!0);else return[a,l];return a}if(!a||typeof a!="object")return[a].concat(l);var g=a;return Ji(a)&&!Ji(l)&&(g=$E(a,u)),Ji(a)&&Ji(l)?(l.forEach(function(b,k){if($p.call(a,k)){var _=a[k];_&&typeof _=="object"&&b&&typeof b=="object"?a[k]=r(_,b,u):a.push(b)}else a[k]=b}),a):Object.keys(l).reduce(function(b,k){var _=l[k];return $p.call(b,k)?b[k]=r(b[k],_,u):b[k]=_,b},g)},J8=function(a,l){return Object.keys(l).reduce(function(u,g){return u[g]=l[g],u},a)},X8=function(r,a,l){var u=r.replace(/\+/g," ");if(l==="iso-8859-1")return u.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(u)}catch{return u}},qp=1024,ej=function(a,l,u,g,b){if(a.length===0)return a;var k=a;if(typeof a=="symbol"?k=Symbol.prototype.toString.call(a):typeof a!="string"&&(k=String(a)),u==="iso-8859-1")return escape(k).replace(/%u[0-9a-f]{4}/gi,function(D){return"%26%23"+parseInt(D.slice(2),16)+"%3B"});for(var _="",m=0;m<k.length;m+=qp){for(var y=k.length>=qp?k.slice(m,m+qp):k,C=[],x=0;x<y.length;++x){var A=y.charCodeAt(x);if(A===45||A===46||A===95||A===126||A>=48&&A<=57||A>=65&&A<=90||A>=97&&A<=122||b===Y8.RFC1738&&(A===40||A===41)){C[C.length]=y.charAt(x);continue}if(A<128){C[C.length]=ho[A];continue}if(A<2048){C[C.length]=ho[192|A>>6]+ho[128|A&63];continue}if(A<55296||A>=57344){C[C.length]=ho[224|A>>12]+ho[128|A>>6&63]+ho[128|A&63];continue}x+=1,A=65536+((A&1023)<<10|y.charCodeAt(x)&1023),C[C.length]=ho[240|A>>18]+ho[128|A>>12&63]+ho[128|A>>6&63]+ho[128|A&63]}_+=C.join("")}return _},tj=function(a){for(var l=[{obj:{o:a},prop:"o"}],u=[],g=0;g<l.length;++g)for(var b=l[g],k=b.obj[b.prop],_=Object.keys(k),m=0;m<_.length;++m){var y=_[m],C=k[y];typeof C=="object"&&C!==null&&u.indexOf(C)===-1&&(l.push({obj:k,prop:y}),u.push(C))}return Q8(l),a},nj=function(a){return Object.prototype.toString.call(a)==="[object RegExp]"},oj=function(a){return!a||typeof a!="object"?!1:!!(a.constructor&&a.constructor.isBuffer&&a.constructor.isBuffer(a))},ij=function(a,l){return[].concat(a,l)},rj=function(a,l){if(Ji(a)){for(var u=[],g=0;g<a.length;g+=1)u.push(l(a[g]));return u}return l(a)},qE={arrayToObject:$E,assign:J8,combine:ij,compact:tj,decode:X8,encode:ej,isBuffer:oj,isRegExp:nj,maybeMap:rj,merge:Z8},GE=G8,dd=qE,Wa=Fm,sj=Object.prototype.hasOwnProperty,WE={brackets:function(a){return a+"[]"},comma:"comma",indices:function(a,l){return a+"["+l+"]"},repeat:function(a){return a}},fo=Array.isArray,aj=Array.prototype.push,KE=function(r,a){aj.apply(r,fo(a)?a:[a])},cj=Date.prototype.toISOString,Ny=Wa.default,Nt={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:dd.encode,encodeValuesOnly:!1,format:Ny,formatter:Wa.formatters[Ny],indices:!1,serializeDate:function(a){return cj.call(a)},skipNulls:!1,strictNullHandling:!1},lj=function(a){return typeof a=="string"||typeof a=="number"||typeof a=="boolean"||typeof a=="symbol"||typeof a=="bigint"},Gp={},dj=function r(a,l,u,g,b,k,_,m,y,C,x,A,D,T,M,O,F,z){for(var P=a,R=z,$=0,q=!1;(R=R.get(Gp))!==void 0&&!q;){var B=R.get(a);if($+=1,typeof B<"u"){if(B===$)throw new RangeError("Cyclic object value");q=!0}typeof R.get(Gp)>"u"&&($=0)}if(typeof C=="function"?P=C(l,P):P instanceof Date?P=D(P):u==="comma"&&fo(P)&&(P=dd.maybeMap(P,function(wn){return wn instanceof Date?D(wn):wn})),P===null){if(k)return y&&!O?y(l,Nt.encoder,F,"key",T):l;P=""}if(lj(P)||dd.isBuffer(P)){if(y){var V=O?l:y(l,Nt.encoder,F,"key",T);return[M(V)+"="+M(y(P,Nt.encoder,F,"value",T))]}return[M(l)+"="+M(String(P))]}var W=[];if(typeof P>"u")return W;var J;if(u==="comma"&&fo(P))O&&y&&(P=dd.maybeMap(P,y)),J=[{value:P.length>0?P.join(",")||null:void 0}];else if(fo(C))J=C;else{var ce=Object.keys(P);J=x?ce.sort(x):ce}var te=m?l.replace(/\./g,"%2E"):l,de=g&&fo(P)&&P.length===1?te+"[]":te;if(b&&fo(P)&&P.length===0)return de+"[]";for(var Ee=0;Ee<J.length;++Ee){var xe=J[Ee],be=typeof xe=="object"&&typeof xe.value<"u"?xe.value:P[xe];if(!(_&&be===null)){var fe=A&&m?xe.replace(/\./g,"%2E"):xe,Ce=fo(P)?typeof u=="function"?u(de,fe):de:de+(A?"."+fe:"["+fe+"]");z.set(a,$);var Ot=GE();Ot.set(Gp,z),KE(W,r(be,Ce,u,g,b,k,_,m,u==="comma"&&O&&fo(P)?null:y,C,x,A,D,T,M,O,F,Ot))}}return W},uj=function(a){if(!a)return Nt;if(typeof a.allowEmptyArrays<"u"&&typeof a.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof a.encodeDotInKeys<"u"&&typeof a.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(a.encoder!==null&&typeof a.encoder<"u"&&typeof a.encoder!="function")throw new TypeError("Encoder has to be a function.");var l=a.charset||Nt.charset;if(typeof a.charset<"u"&&a.charset!=="utf-8"&&a.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var u=Wa.default;if(typeof a.format<"u"){if(!sj.call(Wa.formatters,a.format))throw new TypeError("Unknown format option provided.");u=a.format}var g=Wa.formatters[u],b=Nt.filter;(typeof a.filter=="function"||fo(a.filter))&&(b=a.filter);var k;if(a.arrayFormat in WE?k=a.arrayFormat:"indices"in a?k=a.indices?"indices":"repeat":k=Nt.arrayFormat,"commaRoundTrip"in a&&typeof a.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var _=typeof a.allowDots>"u"?a.encodeDotInKeys===!0?!0:Nt.allowDots:!!a.allowDots;return{addQueryPrefix:typeof a.addQueryPrefix=="boolean"?a.addQueryPrefix:Nt.addQueryPrefix,allowDots:_,allowEmptyArrays:typeof a.allowEmptyArrays=="boolean"?!!a.allowEmptyArrays:Nt.allowEmptyArrays,arrayFormat:k,charset:l,charsetSentinel:typeof a.charsetSentinel=="boolean"?a.charsetSentinel:Nt.charsetSentinel,commaRoundTrip:a.commaRoundTrip,delimiter:typeof a.delimiter>"u"?Nt.delimiter:a.delimiter,encode:typeof a.encode=="boolean"?a.encode:Nt.encode,encodeDotInKeys:typeof a.encodeDotInKeys=="boolean"?a.encodeDotInKeys:Nt.encodeDotInKeys,encoder:typeof a.encoder=="function"?a.encoder:Nt.encoder,encodeValuesOnly:typeof a.encodeValuesOnly=="boolean"?a.encodeValuesOnly:Nt.encodeValuesOnly,filter:b,format:u,formatter:g,serializeDate:typeof a.serializeDate=="function"?a.serializeDate:Nt.serializeDate,skipNulls:typeof a.skipNulls=="boolean"?a.skipNulls:Nt.skipNulls,sort:typeof a.sort=="function"?a.sort:null,strictNullHandling:typeof a.strictNullHandling=="boolean"?a.strictNullHandling:Nt.strictNullHandling}},hj=function(r,a){var l=r,u=uj(a),g,b;typeof u.filter=="function"?(b=u.filter,l=b("",l)):fo(u.filter)&&(b=u.filter,g=b);var k=[];if(typeof l!="object"||l===null)return"";var _=WE[u.arrayFormat],m=_==="comma"&&u.commaRoundTrip;g||(g=Object.keys(l)),u.sort&&g.sort(u.sort);for(var y=GE(),C=0;C<g.length;++C){var x=g[C];u.skipNulls&&l[x]===null||KE(k,dj(l[x],x,_,m,u.allowEmptyArrays,u.strictNullHandling,u.skipNulls,u.encodeDotInKeys,u.encode?u.encoder:null,u.filter,u.sort,u.allowDots,u.serializeDate,u.format,u.formatter,u.encodeValuesOnly,u.charset,y))}var A=k.join(u.delimiter),D=u.addQueryPrefix===!0?"?":"";return u.charsetSentinel&&(u.charset==="iso-8859-1"?D+="utf8=%26%2310003%3B&":D+="utf8=%E2%9C%93&"),A.length>0?D+A:""},Ts=qE,Pg=Object.prototype.hasOwnProperty,pj=Array.isArray,xt={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:Ts.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},gj=function(r){return r.replace(/&#(\d+);/g,function(a,l){return String.fromCharCode(parseInt(l,10))})},YE=function(r,a){return r&&typeof r=="string"&&a.comma&&r.indexOf(",")>-1?r.split(","):r},mj="utf8=%26%2310003%3B",fj="utf8=%E2%9C%93",kj=function(a,l){var u={__proto__:null},g=l.ignoreQueryPrefix?a.replace(/^\?/,""):a,b=l.parameterLimit===1/0?void 0:l.parameterLimit,k=g.split(l.delimiter,b),_=-1,m,y=l.charset;if(l.charsetSentinel)for(m=0;m<k.length;++m)k[m].indexOf("utf8=")===0&&(k[m]===fj?y="utf-8":k[m]===mj&&(y="iso-8859-1"),_=m,m=k.length);for(m=0;m<k.length;++m)if(m!==_){var C=k[m],x=C.indexOf("]="),A=x===-1?C.indexOf("="):x+1,D,T;A===-1?(D=l.decoder(C,xt.decoder,y,"key"),T=l.strictNullHandling?null:""):(D=l.decoder(C.slice(0,A),xt.decoder,y,"key"),T=Ts.maybeMap(YE(C.slice(A+1),l),function(O){return l.decoder(O,xt.decoder,y,"value")})),T&&l.interpretNumericEntities&&y==="iso-8859-1"&&(T=gj(T)),C.indexOf("[]=")>-1&&(T=pj(T)?[T]:T);var M=Pg.call(u,D);M&&l.duplicates==="combine"?u[D]=Ts.combine(u[D],T):(!M||l.duplicates==="last")&&(u[D]=T)}return u},bj=function(r,a,l,u){for(var g=u?a:YE(a,l),b=r.length-1;b>=0;--b){var k,_=r[b];if(_==="[]"&&l.parseArrays)k=l.allowEmptyArrays&&g===""?[]:[].concat(g);else{k=l.plainObjects?Object.create(null):{};var m=_.charAt(0)==="["&&_.charAt(_.length-1)==="]"?_.slice(1,-1):_,y=l.decodeDotInKeys?m.replace(/%2E/g,"."):m,C=parseInt(y,10);!l.parseArrays&&y===""?k={0:g}:!isNaN(C)&&_!==y&&String(C)===y&&C>=0&&l.parseArrays&&C<=l.arrayLimit?(k=[],k[C]=g):y!=="__proto__"&&(k[y]=g)}g=k}return g},wj=function(a,l,u,g){if(a){var b=u.allowDots?a.replace(/\.([^.[]+)/g,"[$1]"):a,k=/(\[[^[\]]*])/,_=/(\[[^[\]]*])/g,m=u.depth>0&&k.exec(b),y=m?b.slice(0,m.index):b,C=[];if(y){if(!u.plainObjects&&Pg.call(Object.prototype,y)&&!u.allowPrototypes)return;C.push(y)}for(var x=0;u.depth>0&&(m=_.exec(b))!==null&&x<u.depth;){if(x+=1,!u.plainObjects&&Pg.call(Object.prototype,m[1].slice(1,-1))&&!u.allowPrototypes)return;C.push(m[1])}return m&&C.push("["+b.slice(m.index)+"]"),bj(C,l,u,g)}},_j=function(a){if(!a)return xt;if(typeof a.allowEmptyArrays<"u"&&typeof a.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof a.decodeDotInKeys<"u"&&typeof a.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(a.decoder!==null&&typeof a.decoder<"u"&&typeof a.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof a.charset<"u"&&a.charset!=="utf-8"&&a.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var l=typeof a.charset>"u"?xt.charset:a.charset,u=typeof a.duplicates>"u"?xt.duplicates:a.duplicates;if(u!=="combine"&&u!=="first"&&u!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var g=typeof a.allowDots>"u"?a.decodeDotInKeys===!0?!0:xt.allowDots:!!a.allowDots;return{allowDots:g,allowEmptyArrays:typeof a.allowEmptyArrays=="boolean"?!!a.allowEmptyArrays:xt.allowEmptyArrays,allowPrototypes:typeof a.allowPrototypes=="boolean"?a.allowPrototypes:xt.allowPrototypes,allowSparse:typeof a.allowSparse=="boolean"?a.allowSparse:xt.allowSparse,arrayLimit:typeof a.arrayLimit=="number"?a.arrayLimit:xt.arrayLimit,charset:l,charsetSentinel:typeof a.charsetSentinel=="boolean"?a.charsetSentinel:xt.charsetSentinel,comma:typeof a.comma=="boolean"?a.comma:xt.comma,decodeDotInKeys:typeof a.decodeDotInKeys=="boolean"?a.decodeDotInKeys:xt.decodeDotInKeys,decoder:typeof a.decoder=="function"?a.decoder:xt.decoder,delimiter:typeof a.delimiter=="string"||Ts.isRegExp(a.delimiter)?a.delimiter:xt.delimiter,depth:typeof a.depth=="number"||a.depth===!1?+a.depth:xt.depth,duplicates:u,ignoreQueryPrefix:a.ignoreQueryPrefix===!0,interpretNumericEntities:typeof a.interpretNumericEntities=="boolean"?a.interpretNumericEntities:xt.interpretNumericEntities,parameterLimit:typeof a.parameterLimit=="number"?a.parameterLimit:xt.parameterLimit,parseArrays:a.parseArrays!==!1,plainObjects:typeof a.plainObjects=="boolean"?a.plainObjects:xt.plainObjects,strictNullHandling:typeof a.strictNullHandling=="boolean"?a.strictNullHandling:xt.strictNullHandling}},Aj=function(r,a){var l=_j(a);if(r===""||r===null||typeof r>"u")return l.plainObjects?Object.create(null):{};for(var u=typeof r=="string"?kj(r,l):r,g=l.plainObjects?Object.create(null):{},b=Object.keys(u),k=0;k<b.length;++k){var _=b[k],m=wj(_,u[_],l,typeof r=="string");g=Ts.merge(g,m,l)}return l.allowSparse===!0?g:Ts.compact(g)},Cj=hj,vj=Aj,yj=Fm,Py={formats:yj,parse:vj,stringify:Cj},QE={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(r,a){(function(l,u){r.exports=u()})(cs,function(){var l={};l.version="0.2.0";var u=l.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};l.configure=function(T){var M,O;for(M in T)O=T[M],O!==void 0&&T.hasOwnProperty(M)&&(u[M]=O);return this},l.status=null,l.set=function(T){var M=l.isStarted();T=g(T,u.minimum,1),l.status=T===1?null:T;var O=l.render(!M),F=O.querySelector(u.barSelector),z=u.speed,P=u.easing;return O.offsetWidth,_(function(R){u.positionUsing===""&&(u.positionUsing=l.getPositioningCSS()),m(F,k(T,z,P)),T===1?(m(O,{transition:"none",opacity:1}),O.offsetWidth,setTimeout(function(){m(O,{transition:"all "+z+"ms linear",opacity:0}),setTimeout(function(){l.remove(),R()},z)},z)):setTimeout(R,z)}),this},l.isStarted=function(){return typeof l.status=="number"},l.start=function(){l.status||l.set(0);var T=function(){setTimeout(function(){l.status&&(l.trickle(),T())},u.trickleSpeed)};return u.trickle&&T(),this},l.done=function(T){return!T&&!l.status?this:l.inc(.3+.5*Math.random()).set(1)},l.inc=function(T){var M=l.status;return M?(typeof T!="number"&&(T=(1-M)*g(Math.random()*M,.1,.95)),M=g(M+T,0,.994),l.set(M)):l.start()},l.trickle=function(){return l.inc(Math.random()*u.trickleRate)},function(){var T=0,M=0;l.promise=function(O){return!O||O.state()==="resolved"?this:(M===0&&l.start(),T++,M++,O.always(function(){M--,M===0?(T=0,l.done()):l.set((T-M)/T)}),this)}}(),l.render=function(T){if(l.isRendered())return document.getElementById("nprogress");C(document.documentElement,"nprogress-busy");var M=document.createElement("div");M.id="nprogress",M.innerHTML=u.template;var O=M.querySelector(u.barSelector),F=T?"-100":b(l.status||0),z=document.querySelector(u.parent),P;return m(O,{transition:"all 0 linear",transform:"translate3d("+F+"%,0,0)"}),u.showSpinner||(P=M.querySelector(u.spinnerSelector),P&&D(P)),z!=document.body&&C(z,"nprogress-custom-parent"),z.appendChild(M),M},l.remove=function(){x(document.documentElement,"nprogress-busy"),x(document.querySelector(u.parent),"nprogress-custom-parent");var T=document.getElementById("nprogress");T&&D(T)},l.isRendered=function(){return!!document.getElementById("nprogress")},l.getPositioningCSS=function(){var T=document.body.style,M="WebkitTransform"in T?"Webkit":"MozTransform"in T?"Moz":"msTransform"in T?"ms":"OTransform"in T?"O":"";return M+"Perspective"in T?"translate3d":M+"Transform"in T?"translate":"margin"};function g(T,M,O){return T<M?M:T>O?O:T}function b(T){return(-1+T)*100}function k(T,M,O){var F;return u.positionUsing==="translate3d"?F={transform:"translate3d("+b(T)+"%,0,0)"}:u.positionUsing==="translate"?F={transform:"translate("+b(T)+"%,0)"}:F={"margin-left":b(T)+"%"},F.transition="all "+M+"ms "+O,F}var _=function(){var T=[];function M(){var O=T.shift();O&&O(M)}return function(O){T.push(O),T.length==1&&M()}}(),m=function(){var T=["Webkit","O","Moz","ms"],M={};function O(R){return R.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function($,q){return q.toUpperCase()})}function F(R){var $=document.body.style;if(R in $)return R;for(var q=T.length,B=R.charAt(0).toUpperCase()+R.slice(1),V;q--;)if(V=T[q]+B,V in $)return V;return R}function z(R){return R=O(R),M[R]||(M[R]=F(R))}function P(R,$,q){$=z($),R.style[$]=q}return function(R,$){var q=arguments,B,V;if(q.length==2)for(B in $)V=$[B],V!==void 0&&$.hasOwnProperty(B)&&P(R,B,V);else P(R,q[1],q[2])}}();function y(T,M){var O=typeof T=="string"?T:A(T);return O.indexOf(" "+M+" ")>=0}function C(T,M){var O=A(T),F=O+M;y(O,M)||(T.className=F.substring(1))}function x(T,M){var O=A(T),F;y(T,M)&&(F=O.replace(" "+M+" "," "),T.className=F.substring(1,F.length-1))}function A(T){return(" "+(T.className||"")+" ").replace(/\s+/gi," ")}function D(T){T&&T.parentNode&&T.parentNode.removeChild(T)}return l})})(QE);var xj=QE.exports;const _o=Nm(xj);function ZE(r,a){let l;return function(...u){clearTimeout(l),l=setTimeout(()=>r.apply(this,u),a)}}function $o(r,a){return document.dispatchEvent(new CustomEvent(`inertia:${r}`,a))}var Ej=r=>$o("before",{cancelable:!0,detail:{visit:r}}),Dj=r=>$o("error",{detail:{errors:r}}),Sj=r=>$o("exception",{cancelable:!0,detail:{exception:r}}),Oy=r=>$o("finish",{detail:{visit:r}}),Tj=r=>$o("invalid",{cancelable:!0,detail:{response:r}}),Pa=r=>$o("navigate",{detail:{page:r}}),Ij=r=>$o("progress",{detail:{progress:r}}),Mj=r=>$o("start",{detail:{visit:r}}),Bj=r=>$o("success",{detail:{page:r}});function Og(r){return r instanceof File||r instanceof Blob||r instanceof FileList&&r.length>0||r instanceof FormData&&Array.from(r.values()).some(a=>Og(a))||typeof r=="object"&&r!==null&&Object.values(r).some(a=>Og(a))}function JE(r,a=new FormData,l=null){r=r||{};for(let u in r)Object.prototype.hasOwnProperty.call(r,u)&&e2(a,XE(l,u),r[u]);return a}function XE(r,a){return r?r+"["+a+"]":a}function e2(r,a,l){if(Array.isArray(l))return Array.from(l.keys()).forEach(u=>e2(r,XE(a,u.toString()),l[u]));if(l instanceof Date)return r.append(a,l.toISOString());if(l instanceof File)return r.append(a,l,l.name);if(l instanceof Blob)return r.append(a,l);if(typeof l=="boolean")return r.append(a,l?"1":"0");if(typeof l=="string")return r.append(a,l);if(typeof l=="number")return r.append(a,`${l}`);if(l==null)return r.append(a,"");JE(l,r,a)}var Nj={modal:null,listener:null,show(r){typeof r=="object"&&(r=`All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(r)}`);let a=document.createElement("html");a.innerHTML=r,a.querySelectorAll("a").forEach(u=>u.setAttribute("target","_top")),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",()=>this.hide());let l=document.createElement("iframe");if(l.style.backgroundColor="white",l.style.borderRadius="5px",l.style.width="100%",l.style.height="100%",this.modal.appendChild(l),document.body.prepend(this.modal),document.body.style.overflow="hidden",!l.contentWindow)throw new Error("iframe not yet ready.");l.contentWindow.document.open(),l.contentWindow.document.write(a.outerHTML),l.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape(r){r.keyCode===27&&this.hide()}};function rs(r){return new URL(r.toString(),window.location.toString())}function Pj(r,a,l,u="brackets"){let g=/^https?:\/\//.test(a.toString()),b=g||a.toString().startsWith("/"),k=!b&&!a.toString().startsWith("#")&&!a.toString().startsWith("?"),_=a.toString().includes("?")||r==="get"&&Object.keys(l).length,m=a.toString().includes("#"),y=new URL(a.toString(),"http://localhost");return r==="get"&&Object.keys(l).length&&(y.search=Py.stringify(TE(Py.parse(y.search,{ignoreQueryPrefix:!0}),l),{encodeValuesOnly:!0,arrayFormat:u}),l={}),[[g?`${y.protocol}//${y.host}`:"",b?y.pathname:"",k?y.pathname.substring(1):"",_?y.search:"",m?y.hash:""].join(""),l]}function Oa(r){return r=new URL(r.href),r.hash="",r}var Ly=typeof window>"u",Oj=class{constructor(){this.visitId=null}init({initialPage:r,resolveComponent:a,swapComponent:l}){this.page=r,this.resolveComponent=a,this.swapComponent=l,this.setNavigationType(),this.clearRememberedStateOnReload(),this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()}setNavigationType(){this.navigationType=window.performance&&window.performance.getEntriesByType("navigation").length>0?window.performance.getEntriesByType("navigation")[0].type:"navigate"}clearRememberedStateOnReload(){var r;this.navigationType==="reload"&&((r=window.history.state)!=null&&r.rememberedState)&&delete window.history.state.rememberedState}handleInitialPageVisit(r){this.page.url+=window.location.hash,this.setPage(r,{preserveState:!0}).then(()=>Pa(r))}setupEventListeners(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",ZE(this.handleScrollEvent.bind(this),100),!0)}scrollRegions(){return document.querySelectorAll("[scroll-region]")}handleScrollEvent(r){typeof r.target.hasAttribute=="function"&&r.target.hasAttribute("scroll-region")&&this.saveScrollPositions()}saveScrollPositions(){this.replaceState({...this.page,scrollRegions:Array.from(this.scrollRegions()).map(r=>({top:r.scrollTop,left:r.scrollLeft}))})}resetScrollPositions(){window.scrollTo(0,0),this.scrollRegions().forEach(r=>{typeof r.scrollTo=="function"?r.scrollTo(0,0):(r.scrollTop=0,r.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&setTimeout(()=>{var r;return(r=document.getElementById(window.location.hash.slice(1)))==null?void 0:r.scrollIntoView()})}restoreScrollPositions(){this.page.scrollRegions&&this.scrollRegions().forEach((r,a)=>{let l=this.page.scrollRegions[a];if(l)typeof r.scrollTo=="function"?r.scrollTo(l.left,l.top):(r.scrollTop=l.top,r.scrollLeft=l.left);else return})}isBackForwardVisit(){return window.history.state&&this.navigationType==="back_forward"}handleBackForwardVisit(r){window.history.state.version=r.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(()=>{this.restoreScrollPositions(),Pa(r)})}locationVisit(r,a){try{let l={preserveScroll:a};window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify(l)),window.location.href=r.href,Oa(window.location).href===Oa(r).href&&window.location.reload()}catch{return!1}}isLocationVisit(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}}handleLocationVisit(r){var l,u;let a=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),r.url+=window.location.hash,r.rememberedState=((l=window.history.state)==null?void 0:l.rememberedState)??{},r.scrollRegions=((u=window.history.state)==null?void 0:u.scrollRegions)??[],this.setPage(r,{preserveScroll:a.preserveScroll,preserveState:!0}).then(()=>{a.preserveScroll&&this.restoreScrollPositions(),Pa(r)})}isLocationVisitResponse(r){return!!(r&&r.status===409&&r.headers["x-inertia-location"])}isInertiaResponse(r){return!!(r!=null&&r.headers["x-inertia"])}createVisitId(){return this.visitId={},this.visitId}cancelVisit(r,{cancelled:a=!1,interrupted:l=!1}){r&&!r.completed&&!r.cancelled&&!r.interrupted&&(r.cancelToken.abort(),r.onCancel(),r.completed=!1,r.cancelled=a,r.interrupted=l,Oy(r),r.onFinish(r))}finishVisit(r){!r.cancelled&&!r.interrupted&&(r.completed=!0,r.cancelled=!1,r.interrupted=!1,Oy(r),r.onFinish(r))}resolvePreserveOption(r,a){return typeof r=="function"?r(a):r==="errors"?Object.keys(a.props.errors||{}).length>0:r}cancel(){this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}visit(r,{method:a="get",data:l={},replace:u=!1,preserveScroll:g=!1,preserveState:b=!1,only:k=[],except:_=[],headers:m={},errorBag:y="",forceFormData:C=!1,onCancelToken:x=()=>{},onBefore:A=()=>{},onStart:D=()=>{},onProgress:T=()=>{},onFinish:M=()=>{},onCancel:O=()=>{},onSuccess:F=()=>{},onError:z=()=>{},queryStringArrayFormat:P="brackets"}={}){let R=typeof r=="string"?rs(r):r;if((Og(l)||C)&&!(l instanceof FormData)&&(l=JE(l)),!(l instanceof FormData)){let[V,W]=Pj(a,R,l,P);R=rs(V),l=W}let $={url:R,method:a,data:l,replace:u,preserveScroll:g,preserveState:b,only:k,except:_,headers:m,errorBag:y,forceFormData:C,queryStringArrayFormat:P,cancelled:!1,completed:!1,interrupted:!1};if(A($)===!1||!Ej($))return;this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();let q=this.createVisitId();this.activeVisit={...$,onCancelToken:x,onBefore:A,onStart:D,onProgress:T,onFinish:M,onCancel:O,onSuccess:F,onError:z,queryStringArrayFormat:P,cancelToken:new AbortController},x({cancel:()=>{this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}}),Mj($),D($);let B=!!(k.length||_.length);Et({method:a,url:Oa(R).href,data:a==="get"?{}:l,params:a==="get"?l:{},signal:this.activeVisit.cancelToken.signal,headers:{...m,Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0,...B?{"X-Inertia-Partial-Component":this.page.component}:{},...k.length?{"X-Inertia-Partial-Data":k.join(",")}:{},..._.length?{"X-Inertia-Partial-Except":_.join(",")}:{},...y&&y.length?{"X-Inertia-Error-Bag":y}:{},...this.page.version?{"X-Inertia-Version":this.page.version}:{}},onUploadProgress:V=>{l instanceof FormData&&(V.percentage=V.progress?Math.round(V.progress*100):0,Ij(V),T(V))}}).then(V=>{var te;if(!this.isInertiaResponse(V))return Promise.reject({response:V});let W=V.data;B&&W.component===this.page.component&&(W.props=TE(this.page.props,W.props,{arrayMerge:(de,Ee)=>Ee})),g=this.resolvePreserveOption(g,W),b=this.resolvePreserveOption(b,W),b&&((te=window.history.state)!=null&&te.rememberedState)&&W.component===this.page.component&&(W.rememberedState=window.history.state.rememberedState);let J=R,ce=rs(W.url);return J.hash&&!ce.hash&&Oa(J).href===ce.href&&(ce.hash=J.hash,W.url=ce.href),this.setPage(W,{visitId:q,replace:u,preserveScroll:g,preserveState:b})}).then(()=>{let V=this.page.props.errors||{};if(Object.keys(V).length>0){let W=y?V[y]?V[y]:{}:V;return Dj(W),z(W)}return Bj(this.page),F(this.page)}).catch(V=>{if(this.isInertiaResponse(V.response))return this.setPage(V.response.data,{visitId:q});if(this.isLocationVisitResponse(V.response)){let W=rs(V.response.headers["x-inertia-location"]),J=R;J.hash&&!W.hash&&Oa(J).href===W.href&&(W.hash=J.hash),this.locationVisit(W,g===!0)}else if(V.response)Tj(V.response)&&Nj.show(V.response.data);else return Promise.reject(V)}).then(()=>{this.activeVisit&&this.finishVisit(this.activeVisit)}).catch(V=>{if(!Et.isCancel(V)){let W=Sj(V);if(this.activeVisit&&this.finishVisit(this.activeVisit),W)return Promise.reject(V)}})}setPage(r,{visitId:a=this.createVisitId(),replace:l=!1,preserveScroll:u=!1,preserveState:g=!1}={}){return Promise.resolve(this.resolveComponent(r.component)).then(b=>{a===this.visitId&&(r.scrollRegions=r.scrollRegions||[],r.rememberedState=r.rememberedState||{},l=l||rs(r.url).href===window.location.href,l?this.replaceState(r):this.pushState(r),this.swapComponent({component:b,page:r,preserveState:g}).then(()=>{u||this.resetScrollPositions(),l||Pa(r)}))})}pushState(r){this.page=r,window.history.pushState(r,"",r.url)}replaceState(r){this.page=r,window.history.replaceState(r,"",r.url)}handlePopstateEvent(r){if(r.state!==null){let a=r.state,l=this.createVisitId();Promise.resolve(this.resolveComponent(a.component)).then(u=>{l===this.visitId&&(this.page=a,this.swapComponent({component:u,page:a,preserveState:!1}).then(()=>{this.restoreScrollPositions(),Pa(a)}))})}else{let a=rs(this.page.url);a.hash=window.location.hash,this.replaceState({...this.page,url:a.href}),this.resetScrollPositions()}}get(r,a={},l={}){return this.visit(r,{...l,method:"get",data:a})}reload(r={}){return this.visit(window.location.href,{...r,preserveScroll:!0,preserveState:!0})}replace(r,a={}){return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${a.method??"get"}() instead.`),this.visit(r,{preserveState:!0,...a,replace:!0})}post(r,a={},l={}){return this.visit(r,{preserveState:!0,...l,method:"post",data:a})}put(r,a={},l={}){return this.visit(r,{preserveState:!0,...l,method:"put",data:a})}patch(r,a={},l={}){return this.visit(r,{preserveState:!0,...l,method:"patch",data:a})}delete(r,a={}){return this.visit(r,{preserveState:!0,...a,method:"delete"})}remember(r,a="default"){var l;Ly||this.replaceState({...this.page,rememberedState:{...(l=this.page)==null?void 0:l.rememberedState,[a]:r}})}restore(r="default"){var a,l;if(!Ly)return(l=(a=window.history.state)==null?void 0:a.rememberedState)==null?void 0:l[r]}on(r,a){let l=u=>{let g=a(u);u.cancelable&&!u.defaultPrevented&&g===!1&&u.preventDefault()};return document.addEventListener(`inertia:${r}`,l),()=>document.removeEventListener(`inertia:${r}`,l)}},Lj={buildDOMElement(r){let a=document.createElement("template");a.innerHTML=r;let l=a.content.firstChild;if(!r.startsWith("<script "))return l;let u=document.createElement("script");return u.innerHTML=l.innerHTML,l.getAttributeNames().forEach(g=>{u.setAttribute(g,l.getAttribute(g)||"")}),u},isInertiaManagedElement(r){return r.nodeType===Node.ELEMENT_NODE&&r.getAttribute("inertia")!==null},findMatchingElementIndex(r,a){let l=r.getAttribute("inertia");return l!==null?a.findIndex(u=>u.getAttribute("inertia")===l):-1},update:ZE(function(r){let a=r.map(l=>this.buildDOMElement(l));Array.from(document.head.childNodes).filter(l=>this.isInertiaManagedElement(l)).forEach(l=>{var b,k;let u=this.findMatchingElementIndex(l,a);if(u===-1){(b=l==null?void 0:l.parentNode)==null||b.removeChild(l);return}let g=a.splice(u,1)[0];g&&!l.isEqualNode(g)&&((k=l==null?void 0:l.parentNode)==null||k.replaceChild(g,l))}),a.forEach(l=>document.head.appendChild(l))},1)};function Rj(r,a,l){let u={},g=0;function b(){let C=g+=1;return u[C]=[],C.toString()}function k(C){C===null||Object.keys(u).indexOf(C)===-1||(delete u[C],y())}function _(C,x=[]){C!==null&&Object.keys(u).indexOf(C)>-1&&(u[C]=x),y()}function m(){let C=a(""),x={...C?{title:`<title inertia="">${C}</title>`}:{}},A=Object.values(u).reduce((D,T)=>D.concat(T),[]).reduce((D,T)=>{if(T.indexOf("<")===-1)return D;if(T.indexOf("<title ")===0){let O=T.match(/(<title [^>]+>)(.*?)(<\/title>)/);return D.title=O?`${O[1]}${a(O[2])}${O[3]}`:T,D}let M=T.match(/ inertia="[^"]+"/);return M?D[M[0]]=T:D[Object.keys(D).length]=T,D},x);return Object.values(A)}function y(){r?l(m()):Lj.update(m())}return y(),{forceUpdate:y,createProvider:function(){let C=b();return{update:x=>_(C,x),disconnect:()=>k(C)}}}}var t2=null;function zj(r){document.addEventListener("inertia:start",jj.bind(null,r)),document.addEventListener("inertia:progress",Fj),document.addEventListener("inertia:finish",Vj)}function jj(r){t2=setTimeout(()=>_o.start(),r)}function Fj(r){var a;_o.isStarted()&&((a=r.detail.progress)!=null&&a.percentage)&&_o.set(Math.max(_o.status,r.detail.progress.percentage/100*.9))}function Vj(r){if(clearTimeout(t2),_o.isStarted())r.detail.visit.completed?_o.done():r.detail.visit.interrupted?_o.set(0):r.detail.visit.cancelled&&(_o.done(),_o.remove());else return}function Hj(r){let a=document.createElement("style");a.type="text/css",a.textContent=`
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${r};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${r}, 0 0 5px ${r};
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${r};
      border-left-color: ${r};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,document.head.appendChild(a)}function Uj({delay:r=250,color:a="#29d",includeCSS:l=!0,showSpinner:u=!1}={}){zj(r),_o.configure({showSpinner:u}),l&&Hj(a)}var bt=new Oj,$j=200,n2="__lodash_hash_undefined__",o2=9007199254740991,Vm="[object Arguments]",qj="[object Array]",i2="[object Boolean]",r2="[object Date]",Gj="[object Error]",Hm="[object Function]",s2="[object GeneratorFunction]",Id="[object Map]",a2="[object Number]",Um="[object Object]",Ry="[object Promise]",c2="[object RegExp]",Md="[object Set]",l2="[object String]",d2="[object Symbol]",Lg="[object WeakMap]",u2="[object ArrayBuffer]",Bd="[object DataView]",h2="[object Float32Array]",p2="[object Float64Array]",g2="[object Int8Array]",m2="[object Int16Array]",f2="[object Int32Array]",k2="[object Uint8Array]",b2="[object Uint8ClampedArray]",w2="[object Uint16Array]",_2="[object Uint32Array]",Wj=/[\\^$.*+?()[\]{}|]/g,Kj=/\w*$/,Yj=/^\[object .+?Constructor\]$/,Qj=/^(?:0|[1-9]\d*)$/,ut={};ut[Vm]=ut[qj]=ut[u2]=ut[Bd]=ut[i2]=ut[r2]=ut[h2]=ut[p2]=ut[g2]=ut[m2]=ut[f2]=ut[Id]=ut[a2]=ut[Um]=ut[c2]=ut[Md]=ut[l2]=ut[d2]=ut[k2]=ut[b2]=ut[w2]=ut[_2]=!0;ut[Gj]=ut[Hm]=ut[Lg]=!1;var Zj=typeof global=="object"&&global&&global.Object===Object&&global,Jj=typeof self=="object"&&self&&self.Object===Object&&self,qo=Zj||Jj||Function("return this")(),A2=typeof Lo=="object"&&Lo&&!Lo.nodeType&&Lo,zy=A2&&typeof Ro=="object"&&Ro&&!Ro.nodeType&&Ro,Xj=zy&&zy.exports===A2;function eF(r,a){return r.set(a[0],a[1]),r}function tF(r,a){return r.add(a),r}function nF(r,a){for(var l=-1,u=r?r.length:0;++l<u&&a(r[l],l,r)!==!1;);return r}function oF(r,a){for(var l=-1,u=a.length,g=r.length;++l<u;)r[g+l]=a[l];return r}function C2(r,a,l,u){for(var g=-1,b=r?r.length:0;++g<b;)l=a(l,r[g],g,r);return l}function iF(r,a){for(var l=-1,u=Array(r);++l<r;)u[l]=a(l);return u}function rF(r,a){return r==null?void 0:r[a]}function v2(r){var a=!1;if(r!=null&&typeof r.toString!="function")try{a=!!(r+"")}catch{}return a}function jy(r){var a=-1,l=Array(r.size);return r.forEach(function(u,g){l[++a]=[g,u]}),l}function $m(r,a){return function(l){return r(a(l))}}function Fy(r){var a=-1,l=Array(r.size);return r.forEach(function(u){l[++a]=u}),l}var sF=Array.prototype,aF=Function.prototype,hu=Object.prototype,Wp=qo["__core-js_shared__"],Vy=function(){var r=/[^.]+$/.exec(Wp&&Wp.keys&&Wp.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),y2=aF.toString,xi=hu.hasOwnProperty,pu=hu.toString,cF=RegExp("^"+y2.call(xi).replace(Wj,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Hy=Xj?qo.Buffer:void 0,Uy=qo.Symbol,$y=qo.Uint8Array,lF=$m(Object.getPrototypeOf,Object),dF=Object.create,uF=hu.propertyIsEnumerable,hF=sF.splice,qy=Object.getOwnPropertySymbols,pF=Hy?Hy.isBuffer:void 0,gF=$m(Object.keys,Object),Rg=Fs(qo,"DataView"),ic=Fs(qo,"Map"),zg=Fs(qo,"Promise"),jg=Fs(qo,"Set"),Fg=Fs(qo,"WeakMap"),rc=Fs(Object,"create"),mF=Ar(Rg),fF=Ar(ic),kF=Ar(zg),bF=Ar(jg),wF=Ar(Fg),Gy=Uy?Uy.prototype:void 0,Wy=Gy?Gy.valueOf:void 0;function kr(r){var a=-1,l=r?r.length:0;for(this.clear();++a<l;){var u=r[a];this.set(u[0],u[1])}}function _F(){this.__data__=rc?rc(null):{}}function AF(r){return this.has(r)&&delete this.__data__[r]}function CF(r){var a=this.__data__;if(rc){var l=a[r];return l===n2?void 0:l}return xi.call(a,r)?a[r]:void 0}function vF(r){var a=this.__data__;return rc?a[r]!==void 0:xi.call(a,r)}function yF(r,a){var l=this.__data__;return l[r]=rc&&a===void 0?n2:a,this}kr.prototype.clear=_F;kr.prototype.delete=AF;kr.prototype.get=CF;kr.prototype.has=vF;kr.prototype.set=yF;function Go(r){var a=-1,l=r?r.length:0;for(this.clear();++a<l;){var u=r[a];this.set(u[0],u[1])}}function xF(){this.__data__=[]}function EF(r){var a=this.__data__,l=gu(a,r);if(l<0)return!1;var u=a.length-1;return l==u?a.pop():hF.call(a,l,1),!0}function DF(r){var a=this.__data__,l=gu(a,r);return l<0?void 0:a[l][1]}function SF(r){return gu(this.__data__,r)>-1}function TF(r,a){var l=this.__data__,u=gu(l,r);return u<0?l.push([r,a]):l[u][1]=a,this}Go.prototype.clear=xF;Go.prototype.delete=EF;Go.prototype.get=DF;Go.prototype.has=SF;Go.prototype.set=TF;function zs(r){var a=-1,l=r?r.length:0;for(this.clear();++a<l;){var u=r[a];this.set(u[0],u[1])}}function IF(){this.__data__={hash:new kr,map:new(ic||Go),string:new kr}}function MF(r){return mu(this,r).delete(r)}function BF(r){return mu(this,r).get(r)}function NF(r){return mu(this,r).has(r)}function PF(r,a){return mu(this,r).set(r,a),this}zs.prototype.clear=IF;zs.prototype.delete=MF;zs.prototype.get=BF;zs.prototype.has=NF;zs.prototype.set=PF;function js(r){this.__data__=new Go(r)}function OF(){this.__data__=new Go}function LF(r){return this.__data__.delete(r)}function RF(r){return this.__data__.get(r)}function zF(r){return this.__data__.has(r)}function jF(r,a){var l=this.__data__;if(l instanceof Go){var u=l.__data__;if(!ic||u.length<$j-1)return u.push([r,a]),this;l=this.__data__=new zs(u)}return l.set(r,a),this}js.prototype.clear=OF;js.prototype.delete=LF;js.prototype.get=RF;js.prototype.has=zF;js.prototype.set=jF;function FF(r,a){var l=Gm(r)||l9(r)?iF(r.length,String):[],u=l.length,g=!!u;for(var b in r)xi.call(r,b)&&!(g&&(b=="length"||s9(b,u)))&&l.push(b);return l}function x2(r,a,l){var u=r[a];(!(xi.call(r,a)&&T2(u,l))||l===void 0&&!(a in r))&&(r[a]=l)}function gu(r,a){for(var l=r.length;l--;)if(T2(r[l][0],a))return l;return-1}function VF(r,a){return r&&E2(a,Wm(a),r)}function Vg(r,a,l,u,g,b,k){var _;if(u&&(_=b?u(r,g,b,k):u(r)),_!==void 0)return _;if(!fu(r))return r;var m=Gm(r);if(m){if(_=o9(r),!a)return e9(r,_)}else{var y=Qi(r),C=y==Hm||y==s2;if(u9(r))return WF(r,a);if(y==Um||y==Vm||C&&!b){if(v2(r))return b?r:{};if(_=i9(C?{}:r),!a)return t9(r,VF(_,r))}else{if(!ut[y])return b?r:{};_=r9(r,y,Vg,a)}}k||(k=new js);var x=k.get(r);if(x)return x;if(k.set(r,_),!m)var A=l?n9(r):Wm(r);return nF(A||r,function(D,T){A&&(T=D,D=r[T]),x2(_,T,Vg(D,a,l,u,T,r,k))}),_}function HF(r){return fu(r)?dF(r):{}}function UF(r,a,l){var u=a(r);return Gm(r)?u:oF(u,l(r))}function $F(r){return pu.call(r)}function qF(r){if(!fu(r)||c9(r))return!1;var a=M2(r)||v2(r)?cF:Yj;return a.test(Ar(r))}function GF(r){if(!S2(r))return gF(r);var a=[];for(var l in Object(r))xi.call(r,l)&&l!="constructor"&&a.push(l);return a}function WF(r,a){if(a)return r.slice();var l=new r.constructor(r.length);return r.copy(l),l}function qm(r){var a=new r.constructor(r.byteLength);return new $y(a).set(new $y(r)),a}function KF(r,a){var l=a?qm(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.byteLength)}function YF(r,a,l){var u=a?l(jy(r),!0):jy(r);return C2(u,eF,new r.constructor)}function QF(r){var a=new r.constructor(r.source,Kj.exec(r));return a.lastIndex=r.lastIndex,a}function ZF(r,a,l){var u=a?l(Fy(r),!0):Fy(r);return C2(u,tF,new r.constructor)}function JF(r){return Wy?Object(Wy.call(r)):{}}function XF(r,a){var l=a?qm(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}function e9(r,a){var l=-1,u=r.length;for(a||(a=Array(u));++l<u;)a[l]=r[l];return a}function E2(r,a,l,u){l||(l={});for(var g=-1,b=a.length;++g<b;){var k=a[g],_=void 0;x2(l,k,_===void 0?r[k]:_)}return l}function t9(r,a){return E2(r,D2(r),a)}function n9(r){return UF(r,Wm,D2)}function mu(r,a){var l=r.__data__;return a9(a)?l[typeof a=="string"?"string":"hash"]:l.map}function Fs(r,a){var l=rF(r,a);return qF(l)?l:void 0}var D2=qy?$m(qy,Object):g9,Qi=$F;(Rg&&Qi(new Rg(new ArrayBuffer(1)))!=Bd||ic&&Qi(new ic)!=Id||zg&&Qi(zg.resolve())!=Ry||jg&&Qi(new jg)!=Md||Fg&&Qi(new Fg)!=Lg)&&(Qi=function(r){var a=pu.call(r),l=a==Um?r.constructor:void 0,u=l?Ar(l):void 0;if(u)switch(u){case mF:return Bd;case fF:return Id;case kF:return Ry;case bF:return Md;case wF:return Lg}return a});function o9(r){var a=r.length,l=r.constructor(a);return a&&typeof r[0]=="string"&&xi.call(r,"index")&&(l.index=r.index,l.input=r.input),l}function i9(r){return typeof r.constructor=="function"&&!S2(r)?HF(lF(r)):{}}function r9(r,a,l,u){var g=r.constructor;switch(a){case u2:return qm(r);case i2:case r2:return new g(+r);case Bd:return KF(r,u);case h2:case p2:case g2:case m2:case f2:case k2:case b2:case w2:case _2:return XF(r,u);case Id:return YF(r,u,l);case a2:case l2:return new g(r);case c2:return QF(r);case Md:return ZF(r,u,l);case d2:return JF(r)}}function s9(r,a){return a=a??o2,!!a&&(typeof r=="number"||Qj.test(r))&&r>-1&&r%1==0&&r<a}function a9(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function c9(r){return!!Vy&&Vy in r}function S2(r){var a=r&&r.constructor,l=typeof a=="function"&&a.prototype||hu;return r===l}function Ar(r){if(r!=null){try{return y2.call(r)}catch{}try{return r+""}catch{}}return""}function go(r){return Vg(r,!0,!0)}function T2(r,a){return r===a||r!==r&&a!==a}function l9(r){return d9(r)&&xi.call(r,"callee")&&(!uF.call(r,"callee")||pu.call(r)==Vm)}var Gm=Array.isArray;function I2(r){return r!=null&&h9(r.length)&&!M2(r)}function d9(r){return p9(r)&&I2(r)}var u9=pF||m9;function M2(r){var a=fu(r)?pu.call(r):"";return a==Hm||a==s2}function h9(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=o2}function fu(r){var a=typeof r;return!!r&&(a=="object"||a=="function")}function p9(r){return!!r&&typeof r=="object"}function Wm(r){return I2(r)?FF(r):GF(r)}function g9(){return[]}function m9(){return!1}var f9=200,Km="__lodash_hash_undefined__",ku=1,B2=2,N2=9007199254740991,Nd="[object Arguments]",Hg="[object Array]",k9="[object AsyncFunction]",P2="[object Boolean]",O2="[object Date]",L2="[object Error]",R2="[object Function]",b9="[object GeneratorFunction]",Pd="[object Map]",z2="[object Number]",w9="[object Null]",ls="[object Object]",Ky="[object Promise]",_9="[object Proxy]",j2="[object RegExp]",Od="[object Set]",F2="[object String]",A9="[object Symbol]",C9="[object Undefined]",Ug="[object WeakMap]",V2="[object ArrayBuffer]",Ld="[object DataView]",v9="[object Float32Array]",y9="[object Float64Array]",x9="[object Int8Array]",E9="[object Int16Array]",D9="[object Int32Array]",S9="[object Uint8Array]",T9="[object Uint8ClampedArray]",I9="[object Uint16Array]",M9="[object Uint32Array]",B9=/[\\^$.*+?()[\]{}|]/g,N9=/^\[object .+?Constructor\]$/,P9=/^(?:0|[1-9]\d*)$/,gt={};gt[v9]=gt[y9]=gt[x9]=gt[E9]=gt[D9]=gt[S9]=gt[T9]=gt[I9]=gt[M9]=!0;gt[Nd]=gt[Hg]=gt[V2]=gt[P2]=gt[Ld]=gt[O2]=gt[L2]=gt[R2]=gt[Pd]=gt[z2]=gt[ls]=gt[j2]=gt[Od]=gt[F2]=gt[Ug]=!1;var H2=typeof global=="object"&&global&&global.Object===Object&&global,O9=typeof self=="object"&&self&&self.Object===Object&&self,Wo=H2||O9||Function("return this")(),U2=typeof Lo=="object"&&Lo&&!Lo.nodeType&&Lo,Yy=U2&&typeof Ro=="object"&&Ro&&!Ro.nodeType&&Ro,$2=Yy&&Yy.exports===U2,Kp=$2&&H2.process,Qy=function(){try{return Kp&&Kp.binding&&Kp.binding("util")}catch{}}(),Zy=Qy&&Qy.isTypedArray;function L9(r,a){for(var l=-1,u=r==null?0:r.length,g=0,b=[];++l<u;){var k=r[l];a(k,l,r)&&(b[g++]=k)}return b}function R9(r,a){for(var l=-1,u=a.length,g=r.length;++l<u;)r[g+l]=a[l];return r}function z9(r,a){for(var l=-1,u=r==null?0:r.length;++l<u;)if(a(r[l],l,r))return!0;return!1}function j9(r,a){for(var l=-1,u=Array(r);++l<r;)u[l]=a(l);return u}function F9(r){return function(a){return r(a)}}function V9(r,a){return r.has(a)}function H9(r,a){return r==null?void 0:r[a]}function U9(r){var a=-1,l=Array(r.size);return r.forEach(function(u,g){l[++a]=[g,u]}),l}function $9(r,a){return function(l){return r(a(l))}}function q9(r){var a=-1,l=Array(r.size);return r.forEach(function(u){l[++a]=u}),l}var G9=Array.prototype,W9=Function.prototype,bu=Object.prototype,Yp=Wo["__core-js_shared__"],q2=W9.toString,vo=bu.hasOwnProperty,Jy=function(){var r=/[^.]+$/.exec(Yp&&Yp.keys&&Yp.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),G2=bu.toString,K9=RegExp("^"+q2.call(vo).replace(B9,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Xy=$2?Wo.Buffer:void 0,Rd=Wo.Symbol,e1=Wo.Uint8Array,W2=bu.propertyIsEnumerable,Y9=G9.splice,Xi=Rd?Rd.toStringTag:void 0,t1=Object.getOwnPropertySymbols,Q9=Xy?Xy.isBuffer:void 0,Z9=$9(Object.keys,Object),$g=Vs(Wo,"DataView"),sc=Vs(Wo,"Map"),qg=Vs(Wo,"Promise"),Gg=Vs(Wo,"Set"),Wg=Vs(Wo,"WeakMap"),ac=Vs(Object,"create"),J9=vr($g),X9=vr(sc),eV=vr(qg),tV=vr(Gg),nV=vr(Wg),n1=Rd?Rd.prototype:void 0,Qp=n1?n1.valueOf:void 0;function br(r){var a=-1,l=r==null?0:r.length;for(this.clear();++a<l;){var u=r[a];this.set(u[0],u[1])}}function oV(){this.__data__=ac?ac(null):{},this.size=0}function iV(r){var a=this.has(r)&&delete this.__data__[r];return this.size-=a?1:0,a}function rV(r){var a=this.__data__;if(ac){var l=a[r];return l===Km?void 0:l}return vo.call(a,r)?a[r]:void 0}function sV(r){var a=this.__data__;return ac?a[r]!==void 0:vo.call(a,r)}function aV(r,a){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=ac&&a===void 0?Km:a,this}br.prototype.clear=oV;br.prototype.delete=iV;br.prototype.get=rV;br.prototype.has=sV;br.prototype.set=aV;function Ko(r){var a=-1,l=r==null?0:r.length;for(this.clear();++a<l;){var u=r[a];this.set(u[0],u[1])}}function cV(){this.__data__=[],this.size=0}function lV(r){var a=this.__data__,l=wu(a,r);if(l<0)return!1;var u=a.length-1;return l==u?a.pop():Y9.call(a,l,1),--this.size,!0}function dV(r){var a=this.__data__,l=wu(a,r);return l<0?void 0:a[l][1]}function uV(r){return wu(this.__data__,r)>-1}function hV(r,a){var l=this.__data__,u=wu(l,r);return u<0?(++this.size,l.push([r,a])):l[u][1]=a,this}Ko.prototype.clear=cV;Ko.prototype.delete=lV;Ko.prototype.get=dV;Ko.prototype.has=uV;Ko.prototype.set=hV;function Cr(r){var a=-1,l=r==null?0:r.length;for(this.clear();++a<l;){var u=r[a];this.set(u[0],u[1])}}function pV(){this.size=0,this.__data__={hash:new br,map:new(sc||Ko),string:new br}}function gV(r){var a=_u(this,r).delete(r);return this.size-=a?1:0,a}function mV(r){return _u(this,r).get(r)}function fV(r){return _u(this,r).has(r)}function kV(r,a){var l=_u(this,r),u=l.size;return l.set(r,a),this.size+=l.size==u?0:1,this}Cr.prototype.clear=pV;Cr.prototype.delete=gV;Cr.prototype.get=mV;Cr.prototype.has=fV;Cr.prototype.set=kV;function zd(r){var a=-1,l=r==null?0:r.length;for(this.__data__=new Cr;++a<l;)this.add(r[a])}function bV(r){return this.__data__.set(r,Km),this}function wV(r){return this.__data__.has(r)}zd.prototype.add=zd.prototype.push=bV;zd.prototype.has=wV;function bi(r){var a=this.__data__=new Ko(r);this.size=a.size}function _V(){this.__data__=new Ko,this.size=0}function AV(r){var a=this.__data__,l=a.delete(r);return this.size=a.size,l}function CV(r){return this.__data__.get(r)}function vV(r){return this.__data__.has(r)}function yV(r,a){var l=this.__data__;if(l instanceof Ko){var u=l.__data__;if(!sc||u.length<f9-1)return u.push([r,a]),this.size=++l.size,this;l=this.__data__=new Cr(u)}return l.set(r,a),this.size=l.size,this}bi.prototype.clear=_V;bi.prototype.delete=AV;bi.prototype.get=CV;bi.prototype.has=vV;bi.prototype.set=yV;function xV(r,a){var l=jd(r),u=!l&&FV(r),g=!l&&!u&&Kg(r),b=!l&&!u&&!g&&eD(r),k=l||u||g||b,_=k?j9(r.length,String):[],m=_.length;for(var y in r)vo.call(r,y)&&!(k&&(y=="length"||g&&(y=="offset"||y=="parent")||b&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||OV(y,m)))&&_.push(y);return _}function wu(r,a){for(var l=r.length;l--;)if(Q2(r[l][0],a))return l;return-1}function EV(r,a,l){var u=a(r);return jd(r)?u:R9(u,l(r))}function _c(r){return r==null?r===void 0?C9:w9:Xi&&Xi in Object(r)?NV(r):jV(r)}function o1(r){return cc(r)&&_c(r)==Nd}function K2(r,a,l,u,g){return r===a?!0:r==null||a==null||!cc(r)&&!cc(a)?r!==r&&a!==a:DV(r,a,l,u,K2,g)}function DV(r,a,l,u,g,b){var k=jd(r),_=jd(a),m=k?Hg:mi(r),y=_?Hg:mi(a);m=m==Nd?ls:m,y=y==Nd?ls:y;var C=m==ls,x=y==ls,A=m==y;if(A&&Kg(r)){if(!Kg(a))return!1;k=!0,C=!1}if(A&&!C)return b||(b=new bi),k||eD(r)?Y2(r,a,l,u,g,b):MV(r,a,m,l,u,g,b);if(!(l&ku)){var D=C&&vo.call(r,"__wrapped__"),T=x&&vo.call(a,"__wrapped__");if(D||T){var M=D?r.value():r,O=T?a.value():a;return b||(b=new bi),g(M,O,l,u,b)}}return A?(b||(b=new bi),BV(r,a,l,u,g,b)):!1}function SV(r){if(!X2(r)||RV(r))return!1;var a=Z2(r)?K9:N9;return a.test(vr(r))}function TV(r){return cc(r)&&J2(r.length)&&!!gt[_c(r)]}function IV(r){if(!zV(r))return Z9(r);var a=[];for(var l in Object(r))vo.call(r,l)&&l!="constructor"&&a.push(l);return a}function Y2(r,a,l,u,g,b){var k=l&ku,_=r.length,m=a.length;if(_!=m&&!(k&&m>_))return!1;var y=b.get(r);if(y&&b.get(a))return y==a;var C=-1,x=!0,A=l&B2?new zd:void 0;for(b.set(r,a),b.set(a,r);++C<_;){var D=r[C],T=a[C];if(u)var M=k?u(T,D,C,a,r,b):u(D,T,C,r,a,b);if(M!==void 0){if(M)continue;x=!1;break}if(A){if(!z9(a,function(O,F){if(!V9(A,F)&&(D===O||g(D,O,l,u,b)))return A.push(F)})){x=!1;break}}else if(!(D===T||g(D,T,l,u,b))){x=!1;break}}return b.delete(r),b.delete(a),x}function MV(r,a,l,u,g,b,k){switch(l){case Ld:if(r.byteLength!=a.byteLength||r.byteOffset!=a.byteOffset)return!1;r=r.buffer,a=a.buffer;case V2:return!(r.byteLength!=a.byteLength||!b(new e1(r),new e1(a)));case P2:case O2:case z2:return Q2(+r,+a);case L2:return r.name==a.name&&r.message==a.message;case j2:case F2:return r==a+"";case Pd:var _=U9;case Od:var m=u&ku;if(_||(_=q9),r.size!=a.size&&!m)return!1;var y=k.get(r);if(y)return y==a;u|=B2,k.set(r,a);var C=Y2(_(r),_(a),u,g,b,k);return k.delete(r),C;case A9:if(Qp)return Qp.call(r)==Qp.call(a)}return!1}function BV(r,a,l,u,g,b){var k=l&ku,_=i1(r),m=_.length,y=i1(a),C=y.length;if(m!=C&&!k)return!1;for(var x=m;x--;){var A=_[x];if(!(k?A in a:vo.call(a,A)))return!1}var D=b.get(r);if(D&&b.get(a))return D==a;var T=!0;b.set(r,a),b.set(a,r);for(var M=k;++x<m;){A=_[x];var O=r[A],F=a[A];if(u)var z=k?u(F,O,A,a,r,b):u(O,F,A,r,a,b);if(!(z===void 0?O===F||g(O,F,l,u,b):z)){T=!1;break}M||(M=A=="constructor")}if(T&&!M){var P=r.constructor,R=a.constructor;P!=R&&"constructor"in r&&"constructor"in a&&!(typeof P=="function"&&P instanceof P&&typeof R=="function"&&R instanceof R)&&(T=!1)}return b.delete(r),b.delete(a),T}function i1(r){return EV(r,UV,PV)}function _u(r,a){var l=r.__data__;return LV(a)?l[typeof a=="string"?"string":"hash"]:l.map}function Vs(r,a){var l=H9(r,a);return SV(l)?l:void 0}function NV(r){var a=vo.call(r,Xi),l=r[Xi];try{r[Xi]=void 0;var u=!0}catch{}var g=G2.call(r);return u&&(a?r[Xi]=l:delete r[Xi]),g}var PV=t1?function(r){return r==null?[]:(r=Object(r),L9(t1(r),function(a){return W2.call(r,a)}))}:$V,mi=_c;($g&&mi(new $g(new ArrayBuffer(1)))!=Ld||sc&&mi(new sc)!=Pd||qg&&mi(qg.resolve())!=Ky||Gg&&mi(new Gg)!=Od||Wg&&mi(new Wg)!=Ug)&&(mi=function(r){var a=_c(r),l=a==ls?r.constructor:void 0,u=l?vr(l):"";if(u)switch(u){case J9:return Ld;case X9:return Pd;case eV:return Ky;case tV:return Od;case nV:return Ug}return a});function OV(r,a){return a=a??N2,!!a&&(typeof r=="number"||P9.test(r))&&r>-1&&r%1==0&&r<a}function LV(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function RV(r){return!!Jy&&Jy in r}function zV(r){var a=r&&r.constructor,l=typeof a=="function"&&a.prototype||bu;return r===l}function jV(r){return G2.call(r)}function vr(r){if(r!=null){try{return q2.call(r)}catch{}try{return r+""}catch{}}return""}function Q2(r,a){return r===a||r!==r&&a!==a}var FV=o1(function(){return arguments}())?o1:function(r){return cc(r)&&vo.call(r,"callee")&&!W2.call(r,"callee")},jd=Array.isArray;function VV(r){return r!=null&&J2(r.length)&&!Z2(r)}var Kg=Q9||qV;function HV(r,a){return K2(r,a)}function Z2(r){if(!X2(r))return!1;var a=_c(r);return a==R2||a==b9||a==k9||a==_9}function J2(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=N2}function X2(r){var a=typeof r;return r!=null&&(a=="object"||a=="function")}function cc(r){return r!=null&&typeof r=="object"}var eD=Zy?F9(Zy):TV;function UV(r){return VV(r)?xV(r):IV(r)}function $V(){return[]}function qV(){return!1}var GV={created(){if(!this.$options.remember)return;Array.isArray(this.$options.remember)&&(this.$options.remember={data:this.$options.remember}),typeof this.$options.remember=="string"&&(this.$options.remember={data:[this.$options.remember]}),typeof this.$options.remember.data=="string"&&(this.$options.remember={data:[this.$options.remember.data]});let r=this.$options.remember.key instanceof Function?this.$options.remember.key.call(this):this.$options.remember.key,a=bt.restore(r),l=this.$options.remember.data.filter(g=>!(this[g]!==null&&typeof this[g]=="object"&&this[g].__rememberable===!1)),u=g=>this[g]!==null&&typeof this[g]=="object"&&typeof this[g].__remember=="function"&&typeof this[g].__restore=="function";l.forEach(g=>{this[g]!==void 0&&a!==void 0&&a[g]!==void 0&&(u(g)?this[g].__restore(a[g]):this[g]=a[g]),this.$watch(g,()=>{bt.remember(l.reduce((b,k)=>({...b,[k]:go(u(k)?this[k].__remember():this[k])}),{}),r)},{immediate:!0,deep:!0})})}},WV=GV;function ur(r,a){let l=typeof r=="string"?r:null,u=typeof r=="string"?a:r,g=l?bt.restore(l):null,b=go(typeof u=="object"?u:u()),k=null,_=null,m=C=>C,y=hc({...g?g.data:go(b),isDirty:!1,errors:g?g.errors:{},hasErrors:!1,processing:!1,progress:null,wasSuccessful:!1,recentlySuccessful:!1,data(){return Object.keys(b).reduce((C,x)=>(C[x]=this[x],C),{})},transform(C){return m=C,this},defaults(C,x){if(typeof u=="function")throw new Error("You cannot call `defaults()` when using a function to define your form data.");return typeof C>"u"?b=this.data():b=Object.assign({},go(b),typeof C=="string"?{[C]:x}:C),this},reset(...C){let x=go(typeof u=="object"?b:u()),A=go(x);return C.length===0?(b=A,Object.assign(this,x)):Object.keys(x).filter(D=>C.includes(D)).forEach(D=>{b[D]=A[D],this[D]=x[D]}),this},setError(C,x){return Object.assign(this.errors,typeof C=="string"?{[C]:x}:C),this.hasErrors=Object.keys(this.errors).length>0,this},clearErrors(...C){return this.errors=Object.keys(this.errors).reduce((x,A)=>({...x,...C.length>0&&!C.includes(A)?{[A]:this.errors[A]}:{}}),{}),this.hasErrors=Object.keys(this.errors).length>0,this},submit(C,x,A={}){let D=m(this.data()),T={...A,onCancelToken:M=>{if(k=M,A.onCancelToken)return A.onCancelToken(M)},onBefore:M=>{if(this.wasSuccessful=!1,this.recentlySuccessful=!1,clearTimeout(_),A.onBefore)return A.onBefore(M)},onStart:M=>{if(this.processing=!0,A.onStart)return A.onStart(M)},onProgress:M=>{if(this.progress=M,A.onProgress)return A.onProgress(M)},onSuccess:async M=>{this.processing=!1,this.progress=null,this.clearErrors(),this.wasSuccessful=!0,this.recentlySuccessful=!0,_=setTimeout(()=>this.recentlySuccessful=!1,2e3);let O=A.onSuccess?await A.onSuccess(M):null;return b=go(this.data()),this.isDirty=!1,O},onError:M=>{if(this.processing=!1,this.progress=null,this.clearErrors().setError(M),A.onError)return A.onError(M)},onCancel:()=>{if(this.processing=!1,this.progress=null,A.onCancel)return A.onCancel()},onFinish:M=>{if(this.processing=!1,this.progress=null,k=null,A.onFinish)return A.onFinish(M)}};C==="delete"?bt.delete(x,{...T,data:D}):bt[C](x,D,T)},get(C,x){this.submit("get",C,x)},post(C,x){this.submit("post",C,x)},put(C,x){this.submit("put",C,x)},patch(C,x){this.submit("patch",C,x)},delete(C,x){this.submit("delete",C,x)},cancel(){k&&k.cancel()},__rememberable:l===null,__remember(){return{data:this.data(),errors:this.errors}},__restore(C){Object.assign(this,C.data),this.setError(C.errors)}});return bs(y,C=>{y.isDirty=!HV(y.data(),b),l&&bt.remember(go(C.__remember()),l)},{immediate:!0,deep:!0}),y}var Tn=rn(null),za=rn(null),Zp=I1(null),od=rn(null),Yg=null,KV=Zd({name:"Inertia",props:{initialPage:{type:Object,required:!0},initialComponent:{type:Object,required:!1},resolveComponent:{type:Function,required:!1},titleCallback:{type:Function,required:!1,default:r=>r},onHeadUpdate:{type:Function,required:!1,default:()=>()=>{}}},setup({initialPage:r,initialComponent:a,resolveComponent:l,titleCallback:u,onHeadUpdate:g}){Tn.value=a?gd(a):null,za.value=r,od.value=null;let b=typeof window>"u";return Yg=Rj(b,u,g),b||(bt.init({initialPage:r,resolveComponent:l,swapComponent:async k=>{Tn.value=gd(k.component),za.value=k.page,od.value=k.preserveState?od.value:Date.now()}}),bt.on("navigate",()=>Yg.forceUpdate())),()=>{if(Tn.value){Tn.value.inheritAttrs=!!Tn.value.inheritAttrs;let k=ar(Tn.value,{...za.value.props,key:od.value});return Zp.value&&(Tn.value.layout=Zp.value,Zp.value=null),Tn.value.layout?typeof Tn.value.layout=="function"?Tn.value.layout(ar,k):(Array.isArray(Tn.value.layout)?Tn.value.layout:[Tn.value.layout]).concat(k).reverse().reduce((_,m)=>(m.inheritAttrs=!!m.inheritAttrs,ar(m,{...za.value.props},()=>_))):k}}}}),YV=KV,QV={install(r){bt.form=ur,Object.defineProperty(r.config.globalProperties,"$inertia",{get:()=>bt}),Object.defineProperty(r.config.globalProperties,"$page",{get:()=>za.value}),Object.defineProperty(r.config.globalProperties,"$headManager",{get:()=>Yg}),r.mixin(WV)}};async function ZV({id:r="app",resolve:a,setup:l,title:u,progress:g={},page:b,render:k}){let _=typeof window>"u",m=_?null:document.getElementById(r),y=b||JSON.parse(m.dataset.page),C=D=>Promise.resolve(a(D)).then(T=>T.default||T),x=[],A=await C(y.component).then(D=>l({el:m,App:YV,props:{initialPage:y,initialComponent:D,resolveComponent:C,titleCallback:u,onHeadUpdate:_?T=>x=T:null},plugin:QV}));if(!_&&g&&Uj(g),_){let D=await k(tE({render:()=>ar("div",{id:r,"data-page":JSON.stringify(y),innerHTML:A?k(A):""})}));return{head:x,body:D}}}const JV=(r,a)=>{const l=r.__vccOpts||r;for(const[u,g]of a)l[u]=g;return l},XV={},eH={class:"grid place-items-center w-screen h-screen"};function tH(r,a){return ye(),Se("div",eH,[nu(r.$slots,"default")])}const nH=JV(XV,[["render",tH]]),oH={class:"card w-96 shadow-xl bg-base-100 max-w-xs"},iH={class:"card-body"},rH=Y("h2",{class:"card-title justify-center text-2xl"}," LOGIN ",-1),sH={key:0,role:"alert",class:"alert alert-error"},aH={class:"form-control w-full mt-4"},cH=Y("div",{class:"label"},[Y("span",{class:"label-text"},"Email")],-1),lH={key:0,class:"label"},dH={class:"label-text-alt text-error"},uH={class:"form-control w-full"},hH=Y("div",{class:"label"},[Y("span",{class:"label-text"},"Password")],-1),pH={key:0,class:"label"},gH={class:"label-text-alt text-error"},mH=Y("button",{class:"btn btn-primary my-8 w-full",type:"submit"},"LOGIN",-1),fH=Object.assign({layout:nH},{__name:"LoginPage",setup(r){const a=ur({email:"",password:""}),l=()=>{a.post(route("login.cek"))};return(u,g)=>(ye(),Se("div",oH,[Y("div",iH,[rH,Ne(a).errors.login?(ye(),Se("div",sH,[Y("span",null,ht(Ne(a).errors.login),1)])):fn("",!0),Y("form",{onSubmit:vd(l,["prevent"]),class:"w-full"},[Y("label",aH,[cH,Vo(Y("input",{type:"text",placeholder:"Email",class:"input input-bordered w-full","onUpdate:modelValue":g[0]||(g[0]=b=>Ne(a).email=b)},null,512),[[Co,Ne(a).email]]),Ne(a).errors.email?(ye(),Se("div",lH,[Y("span",dH,ht(Ne(a).errors.email),1)])):fn("",!0)]),Y("label",uH,[hH,Vo(Y("input",{type:"password",placeholder:"Password",class:"input input-bordered w-full","onUpdate:modelValue":g[1]||(g[1]=b=>Ne(a).password=b)},null,512),[[Co,Ne(a).password]]),Ne(a).errors.password?(ye(),Se("div",pH,[Y("span",gH,ht(Ne(a).errors.password),1)])):fn("",!0)]),mH],32)])]))}}),kH=Object.freeze(Object.defineProperty({__proto__:null,default:fH},Symbol.toStringTag,{value:"Module"})),bH={class:"navbar bg-base-100"},wH={class:"flex-none z-10"},_H={class:"menu menu-horizontal px-8"},AH=Y("a",null,"Dashboard",-1),CH=[AH],vH={key:0,class:"mr-4"},yH=Y("summary",null," Berita ",-1),xH={class:"p-2 bg-base-100 rounded-t-none w-max"},EH=["onClick"],DH={key:1,class:"mr-4"},SH=Y("summary",null," Peran Anda ",-1),TH={class:"p-2 bg-base-100 rounded-t-none w-max"},IH=["onClick"],MH={key:2,class:"mr-4"},BH=Y("summary",null," Kegiatan ",-1),NH={class:"p-2 bg-base-100 rounded-t-none w-max"},PH=["onClick"],OH=Y("a",null,"Edukasi",-1),LH=[OH],RH=ou('<div class="carousel w-full"><div id="slide2" class="carousel-item relative w-full"><img src="https://cegahstunting.id/wp-content/uploads/2022/05/Metaslider-Website-RO-22-scaled-1980x894.jpg" class="w-full"><div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><a href="#slide1" class="btn btn-circle">❮</a><a href="#slide3" class="btn btn-circle">❯</a></div></div><div id="slide1" class="carousel-item relative w-full"><img src="https://cegahstunting.id/wp-content/uploads/2021/03/1602-Website-Siklus-Daur-Kehidupan-New_Monev_Monev_Monev-scaled-1980x894.jpg" class="w-full"><div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><a href="#slide4" class="btn btn-circle">❮</a><a href="#slide2" class="btn btn-circle">❯</a></div></div><div id="slide3" class="carousel-item relative w-full"><img src="https://cegahstunting.id/wp-content/uploads/2020/06/slider-home.jpg" class="w-full"><div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><a href="#slide2" class="btn btn-circle">❮</a><a href="#slide4" class="btn btn-circle">❯</a></div></div><div id="slide4" class="carousel-item relative w-full"><img src="https://cegahstunting.id/wp-content/uploads/2021/05/METASLIDER-WEB_7_7-scaled-1980x894.jpg" class="w-full"><div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><a href="#slide3" class="btn btn-circle">❮</a><a href="#slide1" class="btn btn-circle">❯</a></div></div></div>',1),zH={class:"mt-8 flex flex-col px-8"},jH=ou('<footer class="footer p-10 bg-base-200 text-base-content mt-8"><aside><svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg><p>ACME Industries Ltd.<br>Providing reliable tech since 1992</p></aside><nav><h6 class="footer-title">Services</h6><a class="link link-hover">Branding</a><a class="link link-hover">Design</a><a class="link link-hover">Marketing</a><a class="link link-hover">Advertisement</a></nav><nav><h6 class="footer-title">Company</h6><a class="link link-hover">About us</a><a class="link link-hover">Contact</a><a class="link link-hover">Jobs</a><a class="link link-hover">Press kit</a></nav><nav><h6 class="footer-title">Legal</h6><a class="link link-hover">Terms of use</a><a class="link link-hover">Privacy policy</a><a class="link link-hover">Cookie policy</a></nav></footer>',1),Ym={__name:"ClientLayout",props:{dashboard:Object},setup(r){const a=r,l=()=>{bt.get(route("login"))},u=()=>{bt.get(route("client"))},g=k=>{bt.get(route("client.kategori",{kategori:k}))},b=k=>{bt.get(route("postingan.show_postingan",{id:k}))};return(k,_)=>(ye(),Se(Ke,null,[Y("div",bH,[Y("div",{class:"flex-1"},[Y("a",{class:"btn btn-ghost text-xl",onClick:u},"Cegah Stunting")]),Y("div",wH,[Y("ul",_H,[Y("li",{class:"mr-4",onClick:u},CH),a.dashboard.berita?(ye(),Se("li",vH,[Y("details",null,[yH,Y("ul",xH,[(ye(!0),Se(Ke,null,no(a.dashboard.berita,(m,y)=>(ye(),Se("li",{key:y,onClick:C=>g(m.id)},[Y("a",null,ht(m.nama),1)],8,EH))),128))])])])):fn("",!0),a.dashboard.peran?(ye(),Se("li",DH,[Y("details",null,[SH,Y("ul",TH,[(ye(!0),Se(Ke,null,no(a.dashboard.peran,(m,y)=>(ye(),Se("li",{key:y,onClick:C=>g(m.id)},[Y("a",null,ht(m.nama),1)],8,IH))),128))])])])):fn("",!0),a.dashboard.kegiatan?(ye(),Se("li",MH,[Y("details",null,[BH,Y("ul",NH,[(ye(!0),Se(Ke,null,no(a.dashboard.kegiatan,(m,y)=>(ye(),Se("li",{key:y,onClick:C=>g(m.id)},[Y("a",null,ht(m.nama),1)],8,PH))),128))])])])):fn("",!0),a.dashboard.edukasi?(ye(),Se("li",{key:3,class:"mr-4",onClick:_[0]||(_[0]=m=>b(a.dashboard.edukasi[0].id))},LH)):fn("",!0)]),Y("button",{class:"btn btn-sm btn-primary",onClick:l},"Login")])]),RH,Y("div",zH,[nu(k.$slots,"default")]),jH],64))}},FH={class:"text-center font-bold text-3xl my-8"},VH={class:"grid grid-cols-3 gap-8"},HH=["onClick"],UH={class:"card-body"},$H={class:"card-title truncate-multiline-2 text-center"},qH=Object.assign({layout:Ym},{__name:"ClientKategoriBerita",props:{kategori:Object},setup(r){const a=r,l=u=>{bt.get(route("postingan.show_postingan",{id:u}))};return(u,g)=>(ye(),Se(Ke,null,[Y("div",FH," Artikel Terkait "+ht(a.kategori.nama),1),Y("div",VH,[(ye(!0),Se(Ke,null,no(a.kategori.postingan,(b,k)=>(ye(),Se("div",{class:"card w-full bg-base-100 shadow-xl hover:scale-110 duration-300",key:k,onClick:_=>l(b.id)},[Y("div",UH,[Y("h2",$H,ht(b.judul),1)])],8,HH))),128))])],64))}}),GH=Object.freeze(Object.defineProperty({__proto__:null,default:qH},Symbol.toStringTag,{value:"Module"})),WH={key:0,class:"flex justify-center items-center w-full flex-col"},KH={class:"text-center font-bold text-3xl mb-8"},YH=["innerHTML"],QH=Y("div",{class:"text-center font-bold text-3xl mb-8"}," Berita Terkait ",-1),ZH={class:"grid grid-cols-3 gap-8"},JH=["onClick"],XH={class:"card-body"},eU={class:"card-title mb-4 truncate-multiline-2"},tU={class:"text-xs italic"},nU=Object.assign({layout:Ym},{__name:"ClientPage",props:{postingan:Array,pengenalan:Object},setup(r){const a=r,l=u=>{bt.get(route("postingan.show_postingan",{id:u}))};return(u,g)=>{var b;return ye(),Se(Ke,null,[(b=a.pengenalan)!=null&&b.postingan?(ye(),Se("div",WH,[Y("div",KH,ht(a.pengenalan.judul),1),Y("div",{class:"w-[800px] mb-16",innerHTML:a.pengenalan.postingan},null,8,YH)])):fn("",!0),QH,Y("div",ZH,[(ye(!0),Se(Ke,null,no(a.postingan,(k,_)=>{var m;return ye(),Se("div",{class:"card w-full bg-base-100 shadow-xl hover:scale-110 duration-300",key:_,onClick:y=>l(k.id)},[Y("div",XH,[Y("h2",eU,ht(k.judul),1),Y("p",tU,"Kategori : "+ht((m=k.kategori)==null?void 0:m.nama),1)])],8,JH)}),128))])],64)}}}),oU=Object.freeze(Object.defineProperty({__proto__:null,default:nU},Symbol.toStringTag,{value:"Module"})),iU={class:"flex justify-center"},rU={class:"flex flex-col w-[800px]"},sU={class:"text-center font-bold text-3xl mb-16"},aU=["innerHTML"],cU=Object.assign({layout:Ym},{__name:"ClientPostingPage",props:{postingan:Object},setup(r){const a=r;return(l,u)=>(ye(),Se("div",iU,[Y("div",rU,[Y("div",sU,ht(a.postingan.judul),1),Y("div",{class:"text-base-content",innerHTML:a.postingan.postingan},null,8,aU)])]))}}),lU=Object.freeze(Object.defineProperty({__proto__:null,default:cU},Symbol.toStringTag,{value:"Module"})),dU={class:"h-screen w-screen flex flex-col overflow-hidden"},uU=ou('<div class="navbar bg-base-100 shadow z-10"><div class="flex-1"><a class="btn btn-ghost text-xl">Cegah Stunting</a></div><div class="flex-none"><button class="btn btn-ghost"> ADMIN </button></div></div>',1),hU={class:"flex h-full w-full"},pU={class:"h-full bg-base-100"},gU={class:"menu w-60 rounded-box"},mU=["onClick"],fU=Y("a",{class:"text-error"},"Logout",-1),kU=[fU],bU={class:"h-full w-full p-4 max-h-full overflow-auto"},Au={__name:"MainLayout",setup(r){const a=rn(route().current()),l=rn([{title:"Semua Postingan",active:"postingan.semua",click:()=>{bt.get(route("postingan.semua"),{},{preserveState:!0,onSuccess:()=>{a.value=route().current()}})}},{title:"Buat Postingan Baru",active:"postingan.buat_postingan_baru",click:()=>{bt.get(route("postingan.buat_postingan_baru"),{},{preserveState:!0,onSuccess:()=>{a.value=route().current()}})}},{title:"Kategori",active:"kategori.index",click:()=>{bt.get(route("kategori.index"),{},{preserveState:!0,onSuccess:()=>{a.value=route().current()}})}}]),u=()=>{bt.post(route("logout"))};return(g,b)=>(ye(),Se("div",dU,[uU,Y("div",hU,[Y("div",pU,[Y("ul",gU,[(ye(!0),Se(Ke,null,no(l.value,(k,_)=>(ye(),Se("li",{key:_,onClick:k.click},[Y("a",{class:Bs(`${a.value==k.active?"active":""}`)},ht(k.title),3)],8,mU))),128)),Y("li",{onClick:u},kU)])]),Y("div",bU,[nu(g.$slots,"default")])])]))}},wU={class:"w-full h-full bg-base-100 rounded-xl px-6 py-4 mb-16 overflow-auto"},_U=Y("div",{class:"font-bold text-2xl"},"Kategori",-1),AU={class:"overflow-x-auto"},CU={class:"table"},vU=Y("thead",null,[Y("tr",null,[Y("th"),Y("th",null,"Nama Kategori"),Y("th",null,"Jumlah Posting"),Y("th",null,"Opsi")])],-1),yU={key:0,class:"form-control"},xU={key:0,class:"label"},EU={class:"label-text-alt text-error"},DU={key:0,class:"flex gap-4"},SU=["onClick"],TU=["onClick"],IU={key:1,class:"flex gap-4"},MU={class:"modal-box"},BU=Y("h3",{class:"font-bold text-lg"},"Tambah Kategori",-1),NU={class:"py-4 form-control"},PU=Y("div",{class:"label"},[Y("span",{class:"label-text"},"Nama Kategori")],-1),OU={key:0,class:"label"},LU={class:"label-text-alt text-error"},RU={class:"modal-action"},zU=["disabled"],jU={key:0,class:"loading loading-spinner"},FU=Y("form",{method:"dialog"},[Y("button",{class:"btn"},"Close")],-1),VU={class:"modal-box"},HU={class:"font-bold text-lg"},UU={class:"py-4"},$U={class:"modal-action"},qU=["disabled"],GU={key:0,class:"loading loading-spinner"},WU=Y("form",{method:"dialog"},[Y("button",{class:"btn"},"Close")],-1),KU=Object.assign({layout:Au},{__name:"KategoriIndexPage",props:{kategori:Array},setup(r){const a=r,l=rn(null),u=ur({nama:""}),g=()=>{l.value.showModal()},b=()=>{u.post(route("kategori.tambah"),{onSuccess:()=>{l.value.close(),u.reset()}})},k=ur({id:null,nama:null}),_=D=>{k.clearErrors(),k.id=D.id,k.nama=D.nama},m=()=>{k.post(route("kategori.edit"),{onSuccess:()=>{k.reset()}})},y=rn(null),C=ur({id:null,nama:null}),x=D=>{C.id=D.id,C.nama=D.nama,y.value.showModal()},A=()=>{C.post(route("kategori.hapus"),{onSuccess:()=>{y.value.close()}})};return(D,T)=>(ye(),Se(Ke,null,[Y("div",wU,[Y("div",{class:"flex justify-between mb-4"},[_U,Y("button",{class:"btn btn-success btn-sm",onClick:g},"Tambah Kategori")]),Y("div",AU,[Y("table",CU,[vU,Y("tbody",null,[(ye(!0),Se(Ke,null,no(a.kategori,(M,O)=>(ye(),Se("tr",{key:O},[Y("th",null,ht(O+1),1),Y("td",null,[Ne(k).id==M.id?(ye(),Se("div",yU,[Vo(Y("input",{class:"input input-sm input-bordered w-full",autofocus:"","onUpdate:modelValue":T[0]||(T[0]=F=>Ne(k).nama=F)},null,512),[[Co,Ne(k).nama]]),Ne(k).errors.nama?(ye(),Se("div",xU,[Y("span",EU,ht(Ne(k).errors.nama),1)])):fn("",!0)])):(ye(),Se(Ke,{key:1},[wo(ht(M.nama),1)],64))]),Y("td",null,ht(M.postingan_count)+" Posting",1),Y("td",null,[Ne(k).id!=M.id?(ye(),Se("div",DU,[Y("button",{class:"btn btn-sm w-max btn-primary",onClick:F=>_(M)},"Edit",8,SU),Y("button",{class:"btn btn-sm w-max btn-error",onClick:F=>x(M)},"Hapus",8,TU)])):(ye(),Se("div",IU,[Y("button",{class:"btn btn-sm w-max btn-success",onClick:m},"Simpan"),Y("button",{class:"btn btn-sm w-max btn-error",onClick:T[1]||(T[1]=F=>Ne(k).reset())},"Batal")]))])]))),128))])])])]),Y("dialog",{ref_key:"modal_tambah",ref:l,class:"modal"},[Y("div",MU,[BU,Y("form",{onSubmit:vd(b,["prevent"])},[Y("div",NU,[PU,Vo(Y("input",{"onUpdate:modelValue":T[2]||(T[2]=M=>Ne(u).nama=M),class:"input input-bordered",placeholder:"Masukkan Nama Kategori"},null,512),[[Co,Ne(u).nama]]),Ne(u).errors.nama?(ye(),Se("div",OU,[Y("span",LU,ht(Ne(u).errors.nama),1)])):fn("",!0)]),Y("div",RU,[Y("button",{class:"btn btn-success",type:"submit",disabled:Ne(u).processing},[Ne(u).processing?(ye(),Se("span",jU)):fn("",!0),wo(" Tambah ")],8,zU),FU])],32)])],512),Y("dialog",{ref_key:"dialog_hapus",ref:y,class:"modal"},[Y("div",VU,[Y("h3",HU,"Hapus Kategori "+ht(Ne(C).nama),1),Y("form",{onSubmit:vd(A,["prevent"])},[Y("div",UU,[wo(" Lanjutkan untuk menghapus kategori "),Y("b",null,ht(Ne(C).nama),1),wo(". ")]),Y("div",$U,[Y("button",{class:"btn btn-error",type:"submit",disabled:Ne(C).processing},[Ne(C).processing?(ye(),Se("span",GU)):fn("",!0),wo(" Hapus ")],8,qU),WU])],32)])],512)],64))}}),YU=Object.freeze(Object.defineProperty({__proto__:null,default:KU},Symbol.toStringTag,{value:"Module"}));var St={exports:{}},tn=St.exports;(function(r){const a=r.id=r.id||{};a.dictionary=Object.assign(a.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(mungkin memerlukan <kbd>Fn</kbd>)","%0 of %1":"%0 dari %1",Accept:"Setuju",Accessibility:"Aksesibilitas","Accessibility help":"Bantuan aksesibilitas","Align cell text to the bottom":"Sejajarkan teks sel ke bawah","Align cell text to the center":"Sejajarkan teks sel ke tengah","Align cell text to the left":"Sejajarkan teks sel ke kiri","Align cell text to the middle":"Sejajarkan teks sel ke tengah","Align cell text to the right":"Sejajarkan teks sel ke kanan","Align cell text to the top":"Sejajarkan teks sel ke atas","Align table to the left":"Sejajarkan teks sel ke kiri","Align table to the right":"Sejajarkan teks sel ke kanan",Alignment:"Penjajaran",Aquamarine:"Biru laut",Background:"Latar belakang","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Di bawah ini, Anda dapat menemukan daftar pintasan keyboard yang dapat digunakan di editor.",Black:"Hitam","Block quote":"Kutipan",Blue:"Biru",Bold:"Tebal","Bold text":"Teks tebal",Border:"Garis batas","Break text":"Pecahkan teks","Bulleted List":"Daftar Tak Berangka","Bulleted list styles toolbar":"Bilah alat gaya daftar bullet",Cancel:"Batal","Caption for image: %0":"Keterangan gambar: %0","Caption for the image":"Keterangan untuk gambar","Cell properties":"Properti sel","Center table":"Tengahkan tabel","Centered image":"Gambar rata tengah","Change image text alternative":"Ganti alternatif teks gambar","Choose heading":"Pilih tajuk",Circle:"Lingkaran",Clear:"Kosongkan","Click to edit block":"Klik untuk mengedit blok",Close:"Tutup","Close contextual balloons, dropdowns, and dialogs":"Tutup balon kontekstual, menu tarik-turun, dan dialog",Code:"Kode",Color:"Warna","Color picker":"Pengambil warna",Column:"Kolom","Content editing keystrokes":"Penekanan tombol untuk mengedit konten","Copy selected content":"Salin konten yang dipilih","Create link":"Buat tautan",Custom:"khusus","Custom image size":"ukuran gambar khusus",Dashed:"Garis putus-putus",Decimal:"Desimal","Decimal with leading zero":"Desimal dengan awalan nol","Decrease indent":"Kurangi indentasi","Decrease list item indent":"Kurangi indentasi item daftar","Delete column":"Hapus kolom","Delete row":"Hapus baris","Dim grey":"Kelabu gelap",Dimensions:"Dimensi",Disc:"Disk",Dotted:"Titik titik",Double:"Ganda",Downloadable:"Dapat diunduh","Drag to move":"Seret untuk memindahkan","Dropdown toolbar":"Alat dropdown","Edit block":"Sunting blok","Edit link":"Sunting tautan","Editor block content toolbar":"Bilah alat konten blok editor","Editor contextual toolbar":"Bilah alat kontekstual editor","Editor dialog":"Dialog editor","Editor editing area: %0":"Area edit editor: %0","Editor menu bar":"Bilah menu editor","Editor toolbar":"Alat editor","Enter image caption":"Tambahkan deskripsi gambar","Enter table caption":"Masukkan keterangan tabel","Entering a to-do list":"memasukkan daftar kerja","Error during image upload":"Terdapat kesalahan selama mengunggah gambar","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Jalankan tombol yang sedang difokuskan. Menjalankan tombol yang berinteraksi dengan konten editor akan memindahkan fokus kembali ke konten tersebut.","Full size image":"Gambar ukuran penuh",Green:"Hijau",Grey:"Kelabu",Groove:"Groove","Header column":"Kolom tajuk","Header row":"Baris tajuk",Heading:"Tajuk","Heading 1":"Tajuk 1","Heading 2":"Tajuk 2","Heading 3":"Tajuk 3","Heading 4":"Tajuk 4","Heading 5":"Tajuk 5","Heading 6":"Tajuk 6",Height:"Tinggi","Help Contents. To close this dialog press ESC.":"Konten Bantuan. Untuk menutup dialog ini, tekan ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Bilah alat penjajaran teks horizontal","Image from computer":"Gambar dari komputer","Image resize list":"Daftar ukuran gambar","Image toolbar":"Alat gambar","Image upload complete":"mengunggah gambar selesai","image widget":"widget gambar","In line":"Sebaris","Increase indent":"Tambah indentasi","Increase list item indent":"Tambah indentasi item daftar",Insert:"Sisipkan","Insert a hard break (a new paragraph)":"Sisipkan hard break (paragraf baru)","Insert a new paragraph directly after a widget":"Sisipkan paragraf baru secara langsung setelah widget","Insert a new paragraph directly before a widget":"Sisipkan paragraf baru secara langsung sebelum widget","Insert a new table row (when in the last cell of a table)":"Sisipkan baris tabel baru (saat berada di sel terakhir tabel)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Sisipkan soft break (elemen <code>&lt;br&gt;</code> )","Insert column left":"Sisipkan kolom ke kiri","Insert column right":"Sisipkan kolom ke kanan","Insert image":"Sisipkan gambar","Insert image via URL":"Sisipkan gambar melalui URL","Insert media":"Sisipkan media","Insert paragraph after block":"Tambahkan paragraf setelah blok","Insert paragraph before block":"Tambahkan paragraf sebelum blok","Insert row above":"Sisipkan baris ke atas","Insert row below":"Sisipkan baris ke bawah","Insert table":"Sisipkan tabel",Inset:"Inset","Invalid start index value.":"Nilai indeks mulai tidak valid.",Italic:"Miring","Italic text":"Teks miring","Justify cell text":"Ratakan teks sel","Keystrokes that can be used in a list":"Penekanan tombol yang dapat digunakan di daftar","Keystrokes that can be used in a table cell":"Penekanan tombol yang dapat digunakan di sel tabel","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Penekanan tombol yang bisa dilakukan saat widget dipilih (contoh: gambar, tabel, dll.)","Leaving a to-do list":"meninggalkan daftar kerja","Left aligned image":"Gambar rata kiri","Light blue":"Biru terang","Light green":"Hijau terang","Light grey":"Kelabu terang",Link:"Tautan","Link image":"Tautkan gambar","Link URL":"URL tautan","Link URL must not be empty.":"Tautan URL tidak boleh kosong.","List properties":"Properti daftar","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Alat media","Media URL":"URL Media","media widget":"widget media",MENU_BAR_MENU_EDIT:"Ubah",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Fon",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Bantuan",MENU_BAR_MENU_INSERT:"Sisipkan",MENU_BAR_MENU_TEXT:"Teks",MENU_BAR_MENU_TOOLS:"Alat",MENU_BAR_MENU_VIEW:"Lihat","Merge cell down":"Gabungkan sel ke bawah","Merge cell left":"Gabungkan sel ke kiri","Merge cell right":"Gabungkan sel ke kanan","Merge cell up":"Gabungkan sel ke atas","Merge cells":"Gabungkan sel","Move focus between form fields (inputs, buttons, etc.)":"Pindahkan fokus di antara bidang formulir (input, tombol, dll.)","Move focus in and out of an active dialog window":"Pindahkan fokus ke dalam dan ke luar jendela dialog yang aktif","Move focus to the menu bar, navigate between menu bars":"Pindahkan fokus ke bilah menu, telusuri di antara bilah-bilah menu","Move focus to the toolbar, navigate between toolbars":"Pindahkan fokus ke toolbar, jelajahi antar toolbar","Move out of a link":"Keluar dari tautan","Move out of an inline code style":"Keluar dari gaya kode sebaris","Move the caret to allow typing directly after a widget":"Pindahkan tanda sisipan untuk memungkinkan mengetik langsung setelah widget","Move the caret to allow typing directly before a widget":"Pindahkan tanda sisipan untuk memungkinkan mengetik langsung setelah widget","Move the selection to the next cell":"Pindahkan pilihan ke sel berikutnya","Move the selection to the previous cell":"Pindahkan pilihan ke sel sebelumnya","Navigate through the table":"Menjelajahi tabel","Navigate through the toolbar or menu bar":"Telusuri bilah alat atau bilah menu",Next:"Berikutnya","No results found":"Hasil tidak ditemukan","No searchable items":"Tidak ada item yang dapat dicari",None:"Tidak ada","Numbered List":"Daftar Berangka","Numbered list styles toolbar":"Bilah alat gaya daftar angka","Open in a new tab":"Buka di tab baru","Open link in new tab":"Buka tautan di tab baru","Open media in new tab":"Buka media di tab baru","Open the accessibility help dialog":"Buka dialog bantuan aksesibilitas",Orange:"Jingga",Original:"Asli",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraf","Paste content":"Tempelkan konten","Paste content as plain text":"Tempelkan konten sebagai teks biasa","Paste the media URL in the input.":"Tempelkan URL ke dalam bidang masukan.",'Please enter a valid color (e.g. "ff0000").':"Silakan masukkan warna yang absah (e.g. “ff0000”).","Press %0 for help.":"Tekan %0 untuk mendapatkan bantuan.","Press Enter to type after or press Shift + Enter to type before the widget":"Tekan Enter untuk mengetik setelah atau tekan Shift + Enter untuk mengetik sebelum widget",Previous:"Sebelumnya",Purple:"Ungu",Red:"Merah",Redo:"Lakukan lagi","Remove color":"Hapus warna","Replace from computer":"Ganti dari komputer","Replace image":"Ganti gambar","Replace image from computer":"Ganti gambar dari komputer","Resize image":"Ubah ukuran gambar","Resize image (in %0)":"mengubah ukuran gambar (in %0)","Resize image to %0":"Ubah ukuran gambar ke %0","Resize image to the original size":"Ubah ukuran gambar ke ukuran asli","Restore default":"Pulihkan nilai baku","Reversed order":"Urutan terbalik","Revert autoformatting action":"Kembalikan tindakan pemformatan otomatis","Rich Text Editor":"Editor Teks Kaya",Ridge:"Ridge","Right aligned image":"Gambar rata kanan",Row:"Baris",Save:"Simpan","Select all":"Pilih semua","Select column":"Seleksi kolom","Select row":"Seleksi baris","Show more items":"Tampilkan lebih banyak item","Side image":"Gambar sisi",Solid:"Garis utuh","Split cell horizontally":"Bagikan sel secara horizontal","Split cell vertically":"Bagikan sel secara vertikal",Square:"Kotak","Start at":"Mulai dari","Start index must be greater than 0.":"Indeks awal harus lebih besar dari 0.",Strikethrough:"Coret","Strikethrough text":"Teks yang dicoret",Style:"Gaya",Subscript:"Subskrip",Superscript:"Superskrip",Table:"Tabel","Table alignment toolbar":"Bilah alat penjajaran tabel","Table cell text alignment":"Penjajaran teks sel tabel","Table properties":"Properti tabel","Table toolbar":"Alat tabel","Text alternative":"Alternatif teks",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'Warna tidak valid. Coba "#FF0000" atau "rgb(255,0,0)" atau "red".',"The URL must not be empty.":"URL tidak boleh kosong.",'The value is invalid. Try "10px" or "2em" or simply "2".':'Nilai tidak valid. Coba "10px" atau "2em" atau hanya "2".',"The value must not be empty.":"Nilai tidak boleh kosong.","The value should be a plain number.":"Nilai harus berupa angka biasa.","These keyboard shortcuts allow for quick access to content editing features.":"Pintasan keyboard ini mengizinkan akses cepat ke fitur pengeditan konten.","This link has no URL":"Tautan ini tidak memiliki URL","This media URL is not supported.":"URL media ini tidak didukung.","Tip: Paste the URL into the content to embed faster.":"Tip: Tempelkan URL ke bagian konten untuk sisip cepat.","To-do List":"Daftar untuk-dikerjakan","Toggle caption off":"Sembunyikan keterangan","Toggle caption on":"Tampilkan keterangan","Toggle the circle list style":"Alihkan gaya daftar circle","Toggle the decimal list style":"Alihkan gaya daftar decimal","Toggle the decimal with leading zero list style":"Alihkan gaya daftar decimal with leading zero","Toggle the disc list style":"Alihkan gaya daftar disc","Toggle the lower–latin list style":"Alihkan gaya daftar lower–latin","Toggle the lower–roman list style":"Alihkan gaya daftar lower–roman","Toggle the square list style":"Alihkan gaya daftar square","Toggle the upper–latin list style":"Alihkan gaya daftar upper–latin","Toggle the upper–roman list style":"Alihkan gaya daftar upper–roman",Turquoise:"Turkish","Type or paste your content here.":"Ketik atau tempel konten Anda di sini.","Type your title":"Ketik judul Anda",Underline:"Garis bawah","Underline text":"Teks bergaris bawah",Undo:"Batal",Unlink:"Hapus tautan",Update:"Perbarui","Update image URL":"Perbarui URL gambar","Upload failed":"Gagal mengunggah","Upload from computer":"Unggah dari komputer","Upload image from computer":"Unggah gambar dari komputer","Upload in progress":"Sedang mengunggah","Uploading image":"mengunggah gambar","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Gunakan penekanan tombol berikut untuk navigasi yang lebih efisien di antarmuka pengguna CKEditor 5.","User interface and content navigation keystrokes":"Antarmuka pengguna dan penekanan tombol navigasi konten","Vertical text alignment toolbar":"Bilah alat penjajaran teks vertikal",White:"Putih","Widget toolbar":"Alat widget",Width:"Lebar","Wrap text":"Bungkus teks",Yellow:"Kuning"}),a.getPluralForm=function(l){return 0}})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(r,a){typeof tn=="object"&&typeof St=="object"?St.exports=a():typeof define=="function"&&define.amd?define([],a):typeof tn=="object"?tn.ClassicEditor=a():r.ClassicEditor=a()}(self,()=>(()=>{var r,a,l={5659:(k,_,m)=>{const y=m(8156),C={};for(const A of Object.keys(y))C[y[A]]=A;const x={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};k.exports=x;for(const A of Object.keys(x)){if(!("channels"in x[A]))throw new Error("missing channels property: "+A);if(!("labels"in x[A]))throw new Error("missing channel labels property: "+A);if(x[A].labels.length!==x[A].channels)throw new Error("channel and label counts mismatch: "+A);const{channels:D,labels:T}=x[A];delete x[A].channels,delete x[A].labels,Object.defineProperty(x[A],"channels",{value:D}),Object.defineProperty(x[A],"labels",{value:T})}x.rgb.hsl=function(A){const D=A[0]/255,T=A[1]/255,M=A[2]/255,O=Math.min(D,T,M),F=Math.max(D,T,M),z=F-O;let P,R;F===O?P=0:D===F?P=(T-M)/z:T===F?P=2+(M-D)/z:M===F&&(P=4+(D-T)/z),P=Math.min(60*P,360),P<0&&(P+=360);const $=(O+F)/2;return R=F===O?0:$<=.5?z/(F+O):z/(2-F-O),[P,100*R,100*$]},x.rgb.hsv=function(A){let D,T,M,O,F;const z=A[0]/255,P=A[1]/255,R=A[2]/255,$=Math.max(z,P,R),q=$-Math.min(z,P,R),B=function(V){return($-V)/6/q+.5};return q===0?(O=0,F=0):(F=q/$,D=B(z),T=B(P),M=B(R),z===$?O=M-T:P===$?O=.3333333333333333+D-M:R===$&&(O=.6666666666666666+T-D),O<0?O+=1:O>1&&(O-=1)),[360*O,100*F,100*$]},x.rgb.hwb=function(A){const D=A[0],T=A[1];let M=A[2];const O=x.rgb.hsl(A)[0],F=1/255*Math.min(D,Math.min(T,M));return M=1-.00392156862745098*Math.max(D,Math.max(T,M)),[O,100*F,100*M]},x.rgb.cmyk=function(A){const D=A[0]/255,T=A[1]/255,M=A[2]/255,O=Math.min(1-D,1-T,1-M);return[100*((1-D-O)/(1-O)||0),100*((1-T-O)/(1-O)||0),100*((1-M-O)/(1-O)||0),100*O]},x.rgb.keyword=function(A){const D=C[A];if(D)return D;let T,M=1/0;for(const z of Object.keys(y)){const P=y[z],R=(F=P,((O=A)[0]-F[0])**2+(O[1]-F[1])**2+(O[2]-F[2])**2);R<M&&(M=R,T=z)}var O,F;return T},x.keyword.rgb=function(A){return y[A]},x.rgb.xyz=function(A){let D=A[0]/255,T=A[1]/255,M=A[2]/255;return D=D>.04045?((D+.055)/1.055)**2.4:D/12.92,T=T>.04045?((T+.055)/1.055)**2.4:T/12.92,M=M>.04045?((M+.055)/1.055)**2.4:M/12.92,[100*(.4124*D+.3576*T+.1805*M),100*(.2126*D+.7152*T+.0722*M),100*(.0193*D+.1192*T+.9505*M)]},x.rgb.lab=function(A){const D=x.rgb.xyz(A);let T=D[0],M=D[1],O=D[2];return T/=95.047,M/=100,O/=108.883,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,O=O>.008856?O**.3333333333333333:7.787*O+.13793103448275862,[116*M-16,500*(T-M),200*(M-O)]},x.hsl.rgb=function(A){const D=A[0]/360,T=A[1]/100,M=A[2]/100;let O,F,z;if(T===0)return z=255*M,[z,z,z];O=M<.5?M*(1+T):M+T-M*T;const P=2*M-O,R=[0,0,0];for(let $=0;$<3;$++)F=D+.3333333333333333*-($-1),F<0&&F++,F>1&&F--,z=6*F<1?P+6*(O-P)*F:2*F<1?O:3*F<2?P+(O-P)*(.6666666666666666-F)*6:P,R[$]=255*z;return R},x.hsl.hsv=function(A){const D=A[0];let T=A[1]/100,M=A[2]/100,O=T;const F=Math.max(M,.01);return M*=2,T*=M<=1?M:2-M,O*=F<=1?F:2-F,[D,100*(M===0?2*O/(F+O):2*T/(M+T)),100*((M+T)/2)]},x.hsv.rgb=function(A){const D=A[0]/60,T=A[1]/100;let M=A[2]/100;const O=Math.floor(D)%6,F=D-Math.floor(D),z=255*M*(1-T),P=255*M*(1-T*F),R=255*M*(1-T*(1-F));switch(M*=255,O){case 0:return[M,R,z];case 1:return[P,M,z];case 2:return[z,M,R];case 3:return[z,P,M];case 4:return[R,z,M];case 5:return[M,z,P]}},x.hsv.hsl=function(A){const D=A[0],T=A[1]/100,M=A[2]/100,O=Math.max(M,.01);let F,z;z=(2-T)*M;const P=(2-T)*O;return F=T*O,F/=P<=1?P:2-P,F=F||0,z/=2,[D,100*F,100*z]},x.hwb.rgb=function(A){const D=A[0]/360;let T=A[1]/100,M=A[2]/100;const O=T+M;let F;O>1&&(T/=O,M/=O);const z=Math.floor(6*D),P=1-M;F=6*D-z,1&z&&(F=1-F);const R=T+F*(P-T);let $,q,B;switch(z){default:case 6:case 0:$=P,q=R,B=T;break;case 1:$=R,q=P,B=T;break;case 2:$=T,q=P,B=R;break;case 3:$=T,q=R,B=P;break;case 4:$=R,q=T,B=P;break;case 5:$=P,q=T,B=R}return[255*$,255*q,255*B]},x.cmyk.rgb=function(A){const D=A[0]/100,T=A[1]/100,M=A[2]/100,O=A[3]/100;return[255*(1-Math.min(1,D*(1-O)+O)),255*(1-Math.min(1,T*(1-O)+O)),255*(1-Math.min(1,M*(1-O)+O))]},x.xyz.rgb=function(A){const D=A[0]/100,T=A[1]/100,M=A[2]/100;let O,F,z;return O=3.2406*D+-1.5372*T+-.4986*M,F=-.9689*D+1.8758*T+.0415*M,z=.0557*D+-.204*T+1.057*M,O=O>.0031308?1.055*O**.4166666666666667-.055:12.92*O,F=F>.0031308?1.055*F**.4166666666666667-.055:12.92*F,z=z>.0031308?1.055*z**.4166666666666667-.055:12.92*z,O=Math.min(Math.max(0,O),1),F=Math.min(Math.max(0,F),1),z=Math.min(Math.max(0,z),1),[255*O,255*F,255*z]},x.xyz.lab=function(A){let D=A[0],T=A[1],M=A[2];return D/=95.047,T/=100,M/=108.883,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,[116*T-16,500*(D-T),200*(T-M)]},x.lab.xyz=function(A){let D,T,M;T=(A[0]+16)/116,D=A[1]/500+T,M=T-A[2]/200;const O=T**3,F=D**3,z=M**3;return T=O>.008856?O:(T-.13793103448275862)/7.787,D=F>.008856?F:(D-.13793103448275862)/7.787,M=z>.008856?z:(M-.13793103448275862)/7.787,D*=95.047,T*=100,M*=108.883,[D,T,M]},x.lab.lch=function(A){const D=A[0],T=A[1],M=A[2];let O;return O=360*Math.atan2(M,T)/2/Math.PI,O<0&&(O+=360),[D,Math.sqrt(T*T+M*M),O]},x.lch.lab=function(A){const D=A[0],T=A[1],M=A[2]/360*2*Math.PI;return[D,T*Math.cos(M),T*Math.sin(M)]},x.rgb.ansi16=function(A,D=null){const[T,M,O]=A;let F=D===null?x.rgb.hsv(A)[2]:D;if(F=Math.round(F/50),F===0)return 30;let z=30+(Math.round(O/255)<<2|Math.round(M/255)<<1|Math.round(T/255));return F===2&&(z+=60),z},x.hsv.ansi16=function(A){return x.rgb.ansi16(x.hsv.rgb(A),A[2])},x.rgb.ansi256=function(A){const D=A[0],T=A[1],M=A[2];return D===T&&T===M?D<8?16:D>248?231:Math.round((D-8)/247*24)+232:16+36*Math.round(D/255*5)+6*Math.round(T/255*5)+Math.round(M/255*5)},x.ansi16.rgb=function(A){let D=A%10;if(D===0||D===7)return A>50&&(D+=3.5),D=D/10.5*255,[D,D,D];const T=.5*(1+~~(A>50));return[(1&D)*T*255,(D>>1&1)*T*255,(D>>2&1)*T*255]},x.ansi256.rgb=function(A){if(A>=232){const T=10*(A-232)+8;return[T,T,T]}let D;return A-=16,[Math.floor(A/36)/5*255,Math.floor((D=A%36)/6)/5*255,D%6/5*255]},x.rgb.hex=function(A){const D=(((255&Math.round(A[0]))<<16)+((255&Math.round(A[1]))<<8)+(255&Math.round(A[2]))).toString(16).toUpperCase();return"000000".substring(D.length)+D},x.hex.rgb=function(A){const D=A.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!D)return[0,0,0];let T=D[0];D[0].length===3&&(T=T.split("").map(O=>O+O).join(""));const M=parseInt(T,16);return[M>>16&255,M>>8&255,255&M]},x.rgb.hcg=function(A){const D=A[0]/255,T=A[1]/255,M=A[2]/255,O=Math.max(Math.max(D,T),M),F=Math.min(Math.min(D,T),M),z=O-F;let P,R;return P=z<1?F/(1-z):0,R=z<=0?0:O===D?(T-M)/z%6:O===T?2+(M-D)/z:4+(D-T)/z,R/=6,R%=1,[360*R,100*z,100*P]},x.hsl.hcg=function(A){const D=A[1]/100,T=A[2]/100,M=T<.5?2*D*T:2*D*(1-T);let O=0;return M<1&&(O=(T-.5*M)/(1-M)),[A[0],100*M,100*O]},x.hsv.hcg=function(A){const D=A[1]/100,T=A[2]/100,M=D*T;let O=0;return M<1&&(O=(T-M)/(1-M)),[A[0],100*M,100*O]},x.hcg.rgb=function(A){const D=A[0]/360,T=A[1]/100,M=A[2]/100;if(T===0)return[255*M,255*M,255*M];const O=[0,0,0],F=D%1*6,z=F%1,P=1-z;let R=0;switch(Math.floor(F)){case 0:O[0]=1,O[1]=z,O[2]=0;break;case 1:O[0]=P,O[1]=1,O[2]=0;break;case 2:O[0]=0,O[1]=1,O[2]=z;break;case 3:O[0]=0,O[1]=P,O[2]=1;break;case 4:O[0]=z,O[1]=0,O[2]=1;break;default:O[0]=1,O[1]=0,O[2]=P}return R=(1-T)*M,[255*(T*O[0]+R),255*(T*O[1]+R),255*(T*O[2]+R)]},x.hcg.hsv=function(A){const D=A[1]/100,T=D+A[2]/100*(1-D);let M=0;return T>0&&(M=D/T),[A[0],100*M,100*T]},x.hcg.hsl=function(A){const D=A[1]/100,T=A[2]/100*(1-D)+.5*D;let M=0;return T>0&&T<.5?M=D/(2*T):T>=.5&&T<1&&(M=D/(2*(1-T))),[A[0],100*M,100*T]},x.hcg.hwb=function(A){const D=A[1]/100,T=D+A[2]/100*(1-D);return[A[0],100*(T-D),100*(1-T)]},x.hwb.hcg=function(A){const D=A[1]/100,T=1-A[2]/100,M=T-D;let O=0;return M<1&&(O=(T-M)/(1-M)),[A[0],100*M,100*O]},x.apple.rgb=function(A){return[A[0]/65535*255,A[1]/65535*255,A[2]/65535*255]},x.rgb.apple=function(A){return[A[0]/255*65535,A[1]/255*65535,A[2]/255*65535]},x.gray.rgb=function(A){return[A[0]/100*255,A[0]/100*255,A[0]/100*255]},x.gray.hsl=function(A){return[0,0,A[0]]},x.gray.hsv=x.gray.hsl,x.gray.hwb=function(A){return[0,100,A[0]]},x.gray.cmyk=function(A){return[0,0,0,A[0]]},x.gray.lab=function(A){return[A[0],0,0]},x.gray.hex=function(A){const D=255&Math.round(A[0]/100*255),T=((D<<16)+(D<<8)+D).toString(16).toUpperCase();return"000000".substring(T.length)+T},x.rgb.gray=function(A){return[(A[0]+A[1]+A[2])/3/255*100]}},734:(k,_,m)=>{const y=m(5659),C=m(8507),x={};Object.keys(y).forEach(A=>{x[A]={},Object.defineProperty(x[A],"channels",{value:y[A].channels}),Object.defineProperty(x[A],"labels",{value:y[A].labels});const D=C(A);Object.keys(D).forEach(T=>{const M=D[T];x[A][T]=function(O){const F=function(...z){const P=z[0];if(P==null)return P;P.length>1&&(z=P);const R=O(z);if(typeof R=="object")for(let $=R.length,q=0;q<$;q++)R[q]=Math.round(R[q]);return R};return"conversion"in O&&(F.conversion=O.conversion),F}(M),x[A][T].raw=function(O){const F=function(...z){const P=z[0];return P==null?P:(P.length>1&&(z=P),O(z))};return"conversion"in O&&(F.conversion=O.conversion),F}(M)})}),k.exports=x},8507:(k,_,m)=>{const y=m(5659);function C(D){const T=function(){const O={},F=Object.keys(y);for(let z=F.length,P=0;P<z;P++)O[F[P]]={distance:-1,parent:null};return O}(),M=[D];for(T[D].distance=0;M.length;){const O=M.pop(),F=Object.keys(y[O]);for(let z=F.length,P=0;P<z;P++){const R=F[P],$=T[R];$.distance===-1&&($.distance=T[O].distance+1,$.parent=O,M.unshift(R))}}return T}function x(D,T){return function(M){return T(D(M))}}function A(D,T){const M=[T[D].parent,D];let O=y[T[D].parent][D],F=T[D].parent;for(;T[F].parent;)M.unshift(T[F].parent),O=x(y[T[F].parent][F],O),F=T[F].parent;return O.conversion=M,O}k.exports=function(D){const T=C(D),M={},O=Object.keys(T);for(let F=O.length,z=0;z<F;z++){const P=O[z];T[P].parent!==null&&(M[P]=A(P,T))}return M}},8156:k=>{k.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},2165:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const D=A},9394:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const D=A},8643:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-clipboard/theme/clipboard.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const D=A},3394:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-editor-classic/theme/classiceditor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},1920:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}@media (forced-colors:active){.ck .ck-placeholder,.ck.ck-placeholder{forced-color-adjust:preserve-parent-color}}.ck .ck-placeholder:before,.ck.ck-placeholder:before{cursor:text}@media (forced-colors:none){.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text)}}@media (forced-colors:active){.ck .ck-placeholder:before,.ck.ck-placeholder:before{font-style:italic;margin-left:1px}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/placeholder.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC7BC,8BACC,uCCOA,yCDLA,CACD,CCOA,qDACC,WAmBD,CDvBA,4BACC,qDCMC,6CDJD,CACD,CAZA,8BACC,qDCsBC,iBAAkB,CAMlB,eD1BD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	@mixin ck-media-forced-colors {
		/*
		 * This is needed for Edge on Windows to use the right color for the placeholder content (::before).
		 * See https://github.com/ckeditor/ckeditor5/issues/14907.
		 */
		forced-color-adjust: preserve-parent-color;
	}

	&::before {
		cursor: text;

		@mixin ck-media-default-colors {
			color: var(--ck-color-engine-placeholder-text);
		}

		@mixin ck-media-forced-colors {
			/*
			 * In the high contrast mode there is no telling between regular and placeholder text. Using
			 * italic text to address that issue. See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			font-style: italic;

			/*
			 * Without this margin, the caret will not show up and blink when the user puts the selection
			 * in the placeholder (Edge on Windows). See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			margin-left: 1px;
		}
	}
}
`],sourceRoot:""}]);const D=A},7526:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const D=A},2863:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-heading/theme/heading.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const D=A},2051:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const D=A},7369:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}@media (forced-colors:active){.ck-content .image>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:none}}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagecaption.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAYD,CAJC,8BAXD,8BAYE,sBAAuB,CACvB,WAEF,CADC,CCdA,4BACC,qEDmBA,iDCjBA,CACD,CDmBA,uCALD,qEAME,cAEF,CADC,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@media (forced-colors: active) {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	@mixin ck-media-default-colors {
		animation: ck-image-caption-highlight .6s ease-out;
	}

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const D=A},1096:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-image-custom-resize-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{display:inline-block}.ck.ck-image-custom-resize-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-image-custom-resize-form{flex-wrap:wrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-image-custom-resize-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagecustomresizeform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,gCAIC,sBAAuB,CAHvB,YAAa,CACb,kBAAmB,CACnB,gBAsBD,CAnBC,uDACC,oBACD,CAEA,0CACC,YACD,CCbA,oCDCD,gCAeE,cAUF,CARE,uDACC,eACD,CAEA,2CACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-image-custom-resize-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},5420:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsert.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const D=A},8588:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const D=A},5035:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const D=A},1644:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},9967:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@media (prefers-reduced-motion:reduce){.ck-image-upload-complete-icon{animation-duration:0ms}.ck-image-upload-complete-icon:after{animation:none;height:.45em;opacity:1;width:.3em}}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadicon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFAqCD,CAjCC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAEA,uCA7CD,+BA8CE,sBASF,CAPE,qCACC,cAAe,CAGf,YAAc,CAFd,SAAU,CACV,UAED,CACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 0ms;

		&::after {
			animation: none;
			opacity: 1;
			width: 0.3em;
			height: 0.45em;
		}
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const D=A},2021:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadloader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const D=A},2209:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:none;opacity:1}}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadprogress.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBAMD,CAJC,uCAHD,yFAKE,cAAe,CADf,SAGF,CADC,CAKF,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;

			@media (prefers-reduced-motion: reduce) {
				opacity: 1;
				animation: none;
			}
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const D=A},8748:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/textalternativeform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},7865:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const D=A},6144:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkactions.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},2375:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-link-form{align-items:flex-start;display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBAEC,sBAAuB,CADvB,YAkBD,CAfC,2BACC,YACD,CCPA,oCDCD,iBASE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CChBD,CDwBD,iCACC,aAYD,CALE,wHAEC,mCACD,CEhCF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;
	align-items: flex-start;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},1634:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkimage.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const D=A},1374:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const D=A},8921:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},6634:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const D=A},5471:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/liststyles.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const D=A},3161:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-content .todo-list .todo-list__label>input:before{transition:none}}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{transition:none}}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CA4EA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAtFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqFC,CAFA,wDApEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAoEA,CAhED,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sDAYE,eAEF,CADC,CAGD,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FAxHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAuHA,CAFA,wGAtGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAsGD,CAlGA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sGAYE,eAEF,CADC,CAGD,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const D=A},9724:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const D=A},8074:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},7269:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},7752:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/colorinput.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},6369:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},637:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/formrow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const D=A},1710:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}@media (prefers-reduced-motion:reduce){.ck .ck-insert-table-dropdown-grid-box{transition:none}}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/inserttable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAcD,CAZC,uCATD,uCAUE,eAWF,CAVC,CAEA,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const D=A},2259:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const D=A},5513:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}@media (forced-colors:active){.ck-content .table>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tablecaption.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAaD,CCxBC,8BACC,8BDoBA,sBAAuB,CACvB,WCnBA,CACD,CAIA,4BDqBC,qEACC,iDACD,CCnBD,CDsBA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@mixin ck-media-forced-colors {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	@mixin ck-media-default-colors {
		&.table__caption_highlighted {
			animation: ck-table-caption-highlight .6s ease-out;
		}
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const D=A},472:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tablecellproperties.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},9317:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const D=A},9431:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const D=A},7181:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}@media (prefers-reduced-motion:reduce){.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tableform.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCA6BD,CA3BC,8ECxCD,eD6DC,CArBA,mMCpCA,qCDyDA,CArBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAcD,CAXC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEAKD,CAHC,uCAlBD,8EAmBE,cAEF,CADC,CAID,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},8252:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tableproperties.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},1125:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},1587:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}.ck.ck-aria-live-region-list{list-style-type:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD,CAEA,6BACC,oBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}

.ck.ck-aria-live-region-list {
	list-style-type: none;
}
`],sourceRoot:""}]);const D=A},5169:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},8941:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}@media (prefers-reduced-motion:reduce){.ck.ck-button,a.ck.ck-button{transition:none}}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD+ID,CC5IE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eFgJD,CA/IA,wIEGE,qCF4IF,CA/IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBA0ID,CAhHC,uCA/BD,6BAgCE,eA+GF,CA9GC,CAEA,oFGpCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHyCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIxFD,oDJ4FC,CAOA,gLKnGD,kCLqGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCClIA,+CDsIA,CCnIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDmHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CClJC,mDDuJD,CCpJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDmID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=A},8613:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{transition:none}}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eDgFA,CA5CA,yIChCC,qCD4ED,CA5CA,2DAKE,gBAuCF,CA5CA,2DAUE,iBAkCF,CA5CA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CA2BD,CAxBC,2ECxDD,eDuEC,CAfA,6LCpDA,qCAAsC,CDsDpC,8CAaF,CAfA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAUD,CAHC,uCAZD,2EAaE,eAEF,CADC,CAGD,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEpFA,kCFsFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=A},3283:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const D=A},4239:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{transition:box-shadow .2s ease}@media (forced-colors:none){.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}}@media (forced-colors:active){.ck.ck-color-grid__tile{height:unset;min-height:unset;min-width:unset;padding:0 var(--ck-spacing-small);width:unset}.ck.ck-color-grid__tile .ck-button__label{display:inline-block}}@media (prefers-reduced-motion:reduce){.ck.ck-color-grid__tile{transition:none}}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,kBACC,YACD,CCCA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,8BAkED,CC3EC,4BACC,wBDgBA,QAAS,CAJT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CAJV,oCCTA,CDgBA,8HAIC,QACD,CAEA,+DACC,gDACD,CAEA,8BACC,8FACD,CAEA,gGAEC,iGACD,CCjCD,CAZA,8BACC,wBDqDA,YAAa,CAEb,gBAAiB,CADjB,eAAgB,CAEhB,iCAAkC,CAJlC,WClDA,CDwDA,0CACC,oBACD,CCzDD,CD4DA,uCAhDD,wBAiDE,eAkBF,CAjBC,CAEA,oCACC,YAAa,CACb,gBACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAGC,0CACC,aACD,CAIF,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	transition: .2s ease box-shadow;

	@mixin ck-media-default-colors {
		width: var(--ck-color-grid-tile-size);
		height: var(--ck-color-grid-tile-size);
		min-width: var(--ck-color-grid-tile-size);
		min-height: var(--ck-color-grid-tile-size);
		padding: 0;
		border: 0;

		&.ck-on,
		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
		}

		&.ck-color-selector__color-tile_bordered {
			box-shadow: 0 0 0 1px var(--ck-color-base-border);
		}

		&.ck-on {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);
		}

		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}
	}

	/*
	 * In high contrast mode, the colors are replaced with text labels.
	 * See https://github.com/ckeditor/ckeditor5/issues/14907.
	 */
	@mixin ck-media-forced-colors {
		width: unset;
		height: unset;
		min-width: unset;
		min-height: unset;
		padding: 0 var(--ck-spacing-small);

		& .ck-button__label {
			display: inline-block;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		& .ck.ck-icon {
			display: block;
		}
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const D=A},3019:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const D=A},2927:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const D=A},7197:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cAIC,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CExB7C,oCAA8B,CFsB9B,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},7748:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const D=A},1887:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},6571:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},4890:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},9432:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const D=A},1353:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},5931:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},8379:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const D=A},2859:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const D=A},2191:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},4071:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}@media (prefers-reduced-motion:reduce){.ck.ck-input{transition:none}}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}@media (prefers-reduced-motion:reduce){.ck.ck-input.ck-error{animation:none}}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eDmDD,CA9CA,iECDE,qCD+CF,CA9CA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DAkCD,CAhCC,uCAdD,aAeE,eA+BF,CA9BC,CAEA,mBEvBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YF2BA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BGnCD,oDHsCC,CAGD,sBAEC,sCAAuC,CADvC,+CAUD,CAPC,uCAJD,sBAKE,cAMF,CALC,CAEA,4BGjDD,iDHmDC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},3475:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/label/label.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const D=A},2828:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}@media (prefers-reduced-motion:reduce){.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transition:none}}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eDmHD,CA9GA,2FCDE,qCD+GF,CA3GC,mEACC,UAwCD,CAtCC,gFACC,KAoCD,CArCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBAgCF,CArCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAyBF,CArCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAQD,CAHC,uCAlCD,gFAmCE,eAEF,CADC,CASD,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},8753:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},3779:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const D=A},5842:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const D=A},6050:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=A},3835:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const D=A},5519:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const D=A},5306:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},9316:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},6841:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const D=A},726:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},8016:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},7072:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number,.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAoED,CAlEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA+CF,CA7CE,8CACC,wDAYD,CAVC,4HAEC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDrEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text,
			& .ck-input-number {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},9381:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/search/search.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const D=A},6047:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-spinner-container{animation-duration:3s}}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCAAsC,CADtC,qCAAsC,CADtC,oCAOD,CAHC,uCALD,yBAME,qBAEF,CADC,CAGD,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCAA6B,CAH7B,qCAAsC,CADtC,oCAKD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 3s;
	}
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}
`],sourceRoot:""}]);const D=A},4097:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const D=A},8604:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const D=A},9423:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},3935:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:calc(var(--ck-z-dialog) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css"],names:[],mappings:"AAOA,gCCCC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CCNnC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CFFhB,sCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-balloon-panel.ck-tooltip {
	@mixin ck-unselectable;

	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`],sourceRoot:""}]);const D=A},7718:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck-hidden{display:none!important}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;box-sizing:border-box;height:auto;margin:0;padding:0;position:static;text-decoration:none;transition:none;vertical-align:middle;width:auto}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_hidden.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_zindex.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_transition.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_poweredby.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAkBC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CART,qBAAsB,CAEtB,WAAY,CAIZ,QAAS,CACT,SAAU,CAJV,eAAgB,CAOhB,oBAAqB,CAErB,eAAgB,CADhB,qBAAsB,CAVtB,UAeD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCxFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;

	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const D=A},1089:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget{transition:none}}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}@media (forced-colors:none){.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background)}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CChFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAcD,CAZC,uCAND,eAOE,eAWF,CAVC,CAEA,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAYD,CARC,yGCnCA,2BAA2B,CCF3B,qCAA8B,CDC9B,YD2CA,CGvCA,4BACC,yGHoCC,iEGlCD,CACD,CHuCA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAwCD,CA3BC,uCAzBD,4EA0BE,eA0BF,CAzBC,CAEA,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAeD,CAVC,kHACC,SAAU,CAGV,+DAKD,CAHC,uCAND,kHAOE,eAEF,CADC,CAKF,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
		@mixin ck-media-default-colors {
			background-color: var(--ck-color-widget-editable-focus-background);
		}
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);

				@media (prefers-reduced-motion: reduce) {
					transition: none;
				}
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const D=A},6645:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgetresize.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const D=A},698:(k,_,m)=>{m.d(_,{A:()=>D});var y=m(4991),C=m.n(y),x=m(6314),A=m.n(x)()(C());A.push([k.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button svg{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button:hover,.ck .ck-widget .ck-widget__type-around__button:hover svg line,.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:none}}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgettypearound.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAwED,CAhEC,uCATD,+CAUE,eA+DF,CA9DC,CAEA,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAwBD,CAlBC,uCAPD,mDAQE,eAiBF,CAhBC,CAEA,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DA4BD,CAtBE,kEACC,oDACD,CAEA,8DACC,wDACD,CAGD,uCAQE,qLACC,cACD,CAEF,CASD,uKA7FD,SAAU,CACV,mBA8FC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAxKD,SAAU,CACV,mBAyKC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAxNF,SAAU,CACV,mBAyNE,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}

			@media (prefers-reduced-motion: reduce) {
				animation: none;

				& svg {
					& polyline {
						animation: none;
					}

					& line {
						animation: none;
					}
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const D=A},6314:k=>{k.exports=function(_){var m=[];return m.toString=function(){return this.map(function(y){var C=_(y);return y[2]?"@media ".concat(y[2]," {").concat(C,"}"):C}).join("")},m.i=function(y,C,x){typeof y=="string"&&(y=[[null,y,""]]);var A={};if(x)for(var D=0;D<this.length;D++){var T=this[D][0];T!=null&&(A[T]=!0)}for(var M=0;M<y.length;M++){var O=[].concat(y[M]);x&&A[O[0]]||(C&&(O[2]?O[2]="".concat(C," and ").concat(O[2]):O[2]=C),m.push(O))}},m}},4991:k=>{function _(y,C){return function(x){if(Array.isArray(x))return x}(y)||function(x,A){var D=x&&(typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"]);if(D!=null){var T,M,O=[],F=!0,z=!1;try{for(D=D.call(x);!(F=(T=D.next()).done)&&(O.push(T.value),!A||O.length!==A);F=!0);}catch(P){z=!0,M=P}finally{try{F||D.return==null||D.return()}finally{if(z)throw M}}return O}}(y,C)||function(x,A){if(x){if(typeof x=="string")return m(x,A);var D=Object.prototype.toString.call(x).slice(8,-1);if(D==="Object"&&x.constructor&&(D=x.constructor.name),D==="Map"||D==="Set")return Array.from(x);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return m(x,A)}}(y,C)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(y,C){(C==null||C>y.length)&&(C=y.length);for(var x=0,A=new Array(C);x<C;x++)A[x]=y[x];return A}k.exports=function(y){var C=_(y,4),x=C[1],A=C[3];if(!A)return x;if(typeof btoa=="function"){var D=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),T="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(D),M="/*# ".concat(T," */"),O=A.sources.map(function(F){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(F," */")});return[x].concat(O).concat([M]).join(`
`)}return[x].join(`
`)}},5072:(k,_,m)=>{var y,C=function(){return y===void 0&&(y=!!(window&&document&&document.all&&!window.atob)),y},x=function(){var B={};return function(V){if(B[V]===void 0){var W=document.querySelector(V);if(window.HTMLIFrameElement&&W instanceof window.HTMLIFrameElement)try{W=W.contentDocument.head}catch{W=null}B[V]=W}return B[V]}}(),A=[];function D(B){for(var V=-1,W=0;W<A.length;W++)if(A[W].identifier===B){V=W;break}return V}function T(B,V){for(var W={},J=[],ce=0;ce<B.length;ce++){var te=B[ce],de=V.base?te[0]+V.base:te[0],Ee=W[de]||0,xe="".concat(de," ").concat(Ee);W[de]=Ee+1;var be=D(xe),fe={css:te[1],media:te[2],sourceMap:te[3]};be!==-1?(A[be].references++,A[be].updater(fe)):A.push({identifier:xe,updater:q(fe,V),references:1}),J.push(xe)}return J}function M(B){var V=document.createElement("style"),W=B.attributes||{};if(W.nonce===void 0){var J=m.nc;J&&(W.nonce=J)}if(Object.keys(W).forEach(function(te){V.setAttribute(te,W[te])}),typeof B.insert=="function")B.insert(V);else{var ce=x(B.insert||"head");if(!ce)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ce.appendChild(V)}return V}var O,F=(O=[],function(B,V){return O[B]=V,O.filter(Boolean).join(`
`)});function z(B,V,W,J){var ce=W?"":J.media?"@media ".concat(J.media," {").concat(J.css,"}"):J.css;if(B.styleSheet)B.styleSheet.cssText=F(V,ce);else{var te=document.createTextNode(ce),de=B.childNodes;de[V]&&B.removeChild(de[V]),de.length?B.insertBefore(te,de[V]):B.appendChild(te)}}function P(B,V,W){var J=W.css,ce=W.media,te=W.sourceMap;if(ce?B.setAttribute("media",ce):B.removeAttribute("media"),te&&typeof btoa<"u"&&(J+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(te))))," */")),B.styleSheet)B.styleSheet.cssText=J;else{for(;B.firstChild;)B.removeChild(B.firstChild);B.appendChild(document.createTextNode(J))}}var R=null,$=0;function q(B,V){var W,J,ce;if(V.singleton){var te=$++;W=R||(R=M(V)),J=z.bind(null,W,te,!1),ce=z.bind(null,W,te,!0)}else W=M(V),J=P.bind(null,W,V),ce=function(){(function(de){if(de.parentNode===null)return!1;de.parentNode.removeChild(de)})(W)};return J(B),function(de){if(de){if(de.css===B.css&&de.media===B.media&&de.sourceMap===B.sourceMap)return;J(B=de)}else ce()}}k.exports=function(B,V){(V=V||{}).singleton||typeof V.singleton=="boolean"||(V.singleton=C());var W=T(B=B||[],V);return function(J){if(J=J||[],Object.prototype.toString.call(J)==="[object Array]"){for(var ce=0;ce<W.length;ce++){var te=D(W[ce]);A[te].references--}for(var de=T(J,V),Ee=0;Ee<W.length;Ee++){var xe=D(W[Ee]);A[xe].references===0&&(A[xe].updater(),A.splice(xe,1))}W=de}}}}},u={};function g(k){var _=u[k];if(_!==void 0)return _.exports;var m=u[k]={id:k,exports:{}};return l[k](m,m.exports,g),m.exports}g.n=k=>{var _=k&&k.__esModule?()=>k.default:()=>k;return g.d(_,{a:_}),_},a=Object.getPrototypeOf?k=>Object.getPrototypeOf(k):k=>k.__proto__,g.t=function(k,_){if(1&_&&(k=this(k)),8&_||typeof k=="object"&&k&&(4&_&&k.__esModule||16&_&&typeof k.then=="function"))return k;var m=Object.create(null);g.r(m);var y={};r=r||[null,a({}),a([]),a(a)];for(var C=2&_&&k;typeof C=="object"&&!~r.indexOf(C);C=a(C))Object.getOwnPropertyNames(C).forEach(x=>y[x]=()=>k[x]);return y.default=()=>k,g.d(m,y),m},g.d=(k,_)=>{for(var m in _)g.o(_,m)&&!g.o(k,m)&&Object.defineProperty(k,m,{enumerable:!0,get:_[m]})},g.o=(k,_)=>Object.prototype.hasOwnProperty.call(k,_),g.r=k=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(k,"__esModule",{value:!0})},g.nc=void 0;var b={};return(()=>{let k;g.d(b,{default:()=>JP});try{k={window,document}}catch{k={window:{},document:{}}}const _=k,m=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),y={isMac:x(m),isWindows:function(i){return i.indexOf("windows")>-1}(m),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(m),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(m),isiOS:function(i){return!!i.match(/iphone|ipad/i)||x(i)&&navigator.maxTouchPoints>0}(m),isAndroid:function(i){return i.indexOf("android")>-1}(m),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(m),get isMediaForcedColors(){return!!_.window.matchMedia&&_.window.matchMedia("(forced-colors: active)").matches},get isMotionReduced(){return!!_.window.matchMedia&&_.window.matchMedia("(prefers-reduced-motion)").matches},features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},C=y;function x(i){return i.indexOf("macintosh")>-1}function A(i,e,t,n){t=t||function(h,p){return h===p};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),s=Array.isArray(e)?e:Array.prototype.slice.call(e),c=function(h,p,f){const w=D(h,p,f);if(w===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const v=T(h,w),E=T(p,w),S=D(v,E,f),I=h.length-S,N=p.length-S;return{firstIndex:w,lastIndexOld:I,lastIndexNew:N}}(o,s,t);return n?function(h,p){const{firstIndex:f,lastIndexOld:w,lastIndexNew:v}=h;if(f===-1)return Array(p).fill("equal");let E=[];return f>0&&(E=E.concat(Array(f).fill("equal"))),v-f>0&&(E=E.concat(Array(v-f).fill("insert"))),w-f>0&&(E=E.concat(Array(w-f).fill("delete"))),v<p&&(E=E.concat(Array(p-v).fill("equal"))),E}(c,s.length):function(h,p){const f=[],{firstIndex:w,lastIndexOld:v,lastIndexNew:E}=p;return E-w>0&&f.push({index:w,type:"insert",values:h.slice(w,E)}),v-w>0&&f.push({index:w+(E-w),type:"delete",howMany:v-w}),f}(s,c)}function D(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function T(i,e){return i.slice(e).reverse()}function M(i,e,t){t=t||function(I,N){return I===N};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return M.fastDiff(i,e,t,!0);let s,c;if(o<n){const I=i;i=e,e=I,s="delete",c="insert"}else s="insert",c="delete";const d=i.length,h=e.length,p=h-d,f={},w={};function v(I){const N=(w[I-1]!==void 0?w[I-1]:-1)+1,L=w[I+1]!==void 0?w[I+1]:-1,H=N>L?-1:1;f[I+H]&&(f[I]=f[I+H].slice(0)),f[I]||(f[I]=[]),f[I].push(N>L?s:c);let G=Math.max(N,L),X=G-I;for(;X<d&&G<h&&t(i[X],e[G]);)X++,G++,f[I].push("equal");return G}let E,S=0;do{for(E=-S;E<p;E++)w[E]=v(E);for(E=p+S;E>p;E--)w[E]=v(E);w[p]=v(p),S++}while(w[p]!==h);return f[p].slice(1)}M.fastDiff=A;const O=function(){return function i(){i.called=!0}};class F{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=O(),this.off=O()}}const z=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function P(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+z[255&i]+z[i>>8&255]+z[i>>16&255]+z[i>>24&255]+z[255&e]+z[e>>8&255]+z[e>>16&255]+z[e>>24&255]+z[255&t]+z[t>>8&255]+z[t>>16&255]+z[t>>24&255]+z[255&n]+z[n>>8&255]+z[n>>16&255]+z[n>>24&255]}const R={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function $(i,e){const t=R.get(e.priority);for(let n=0;n<i.length;n++)if(R.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}const q="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class B extends Error{constructor(e,t,n){super(function(o,s){const c=new WeakSet,d=(f,w)=>{if(typeof w=="object"&&w!==null){if(c.has(w))return`[object ${w.constructor.name}]`;c.add(w)}return w},h=s?` ${JSON.stringify(s,d)}`:"",p=W(o);return o+h+p}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new B(e.message,t);throw n.stack=e.stack,n}}function V(i,e){console.warn(...J(i,e))}function W(i){return`
Read more: ${q}#error-${i}`}function J(i,e){const t=W(i);return e?[i,e,t]:[i,t]}const ce="41.4.2",te=new Date(2024,4,17);if(globalThis.CKEDITOR_VERSION)throw new B("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=ce;const de=Symbol("listeningTo"),Ee=Symbol("emitterId"),xe=Symbol("delegations"),be=fe(Object);function fe(i){return i?class extends i{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let o=!1;this.listenTo(this,e,(s,...c)=>{o||(o=!0,s.off(),t.call(this,s,...c))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,o={}){let s,c;this[de]||(this[de]={});const d=this[de];Ot(e)||Ce(e);const h=Ot(e);(s=d[h])||(s=d[h]={emitter:e,callbacks:{}}),(c=s.callbacks[t])||(c=s.callbacks[t]=[]),c.push(n),function(p,f,w,v,E){f._addEventListener?f._addEventListener(w,v,E):p._addEventListener.call(f,w,v,E)}(this,e,t,n,o)}stopListening(e,t,n){const o=this[de];let s=e&&Ot(e);const c=o&&s?o[s]:void 0,d=c&&t?c.callbacks[t]:void 0;if(!(!o||e&&!c||t&&!d))if(n)Re(this,e,t,n),d.indexOf(n)!==-1&&(d.length===1?delete c.callbacks[t]:Re(this,e,t,n));else if(d){for(;n=d.pop();)Re(this,e,t,n);delete c.callbacks[t]}else if(c){for(t in c.callbacks)this.stopListening(e,t);delete o[s]}else{for(s in o)this.stopListening(o[s].emitter);delete this[de]}}fire(e,...t){try{const n=e instanceof F?e:new F(this,e),o=n.name;let s=Jt(this,o);if(n.path.push(this),s){const d=[n,...t];s=Array.from(s);for(let h=0;h<s.length&&(s[h].callback.apply(this,d),n.off.called&&(delete n.off.called,this._removeEventListener(o,s[h].callback)),!n.stop.called);h++);}const c=this[xe];if(c){const d=c.get(o),h=c.get("*");d&&pe(d,n,t),h&&pe(h,n,t)}return n.return}catch(n){B.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[xe]||(this[xe]=new Map),e.forEach(o=>{const s=this[xe].get(o);s?s.set(t,n):this[xe].set(o,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[xe])if(e)if(t){const n=this[xe].get(e);n&&n.delete(t)}else this[xe].delete(e);else this[xe].clear()}_addEventListener(e,t,n){(function(c,d){const h=wn(c);if(h[d])return;let p=d,f=null;const w=[];for(;p!==""&&!h[p];)h[p]={callbacks:[],childEvents:[]},w.push(h[p]),f&&h[p].childEvents.push(f),f=p,p=p.substr(0,p.lastIndexOf(":"));if(p!==""){for(const v of w)v.callbacks=h[p].callbacks.slice();h[p].childEvents.push(f)}})(this,e);const o=sn(this,e),s={callback:t,priority:R.get(n.priority)};for(const c of o)$(c,s)}_removeEventListener(e,t){const n=sn(this,e);for(const o of n)for(let s=0;s<o.length;s++)o[s].callback==t&&(o.splice(s,1),s--)}}:be}function Ce(i,e){i[Ee]||(i[Ee]=e||P())}function Ot(i){return i[Ee]}function wn(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function sn(i,e){const t=wn(i)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const s=sn(i,t.childEvents[o]);n=n.concat(s)}return n}function Jt(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?Jt(i,e.substr(0,e.lastIndexOf(":"))):null}function pe(i,e,t){for(let[n,o]of i){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const s=new F(e.source,o);s.path=[...e.path],n.fire(s,...t)}}function Re(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{fe[i]=be.prototype[i]});const Ie=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},ct=Symbol("observableProperties"),Ft=Symbol("boundObservables"),an=Symbol("boundProperties"),Xt=Symbol("decoratedMethods"),wt=Symbol("decoratedOriginal"),cn=ze(fe());function ze(i){return i?class extends i{set(e,t){if(Ie(e))return void Object.keys(e).forEach(o=>{this.set(o,e[o])},this);j(this);const n=this[ct];if(e in this&&!n.has(e))throw new B("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(o){const s=n.get(e);let c=this.fire(`set:${e}`,e,o,s);c===void 0&&(c=o),s===c&&n.has(e)||(n.set(e,c),this.fire(`change:${e}`,e,c,s))}}),this[e]=t}bind(...e){if(!e.length||!oe(e))throw new B("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new B("observable-bind-duplicate-properties",this);j(this);const t=this[an];e.forEach(o=>{if(t.has(o))throw new B("observable-bind-rebind",this)});const n=new Map;return e.forEach(o=>{const s={property:o,to:[]};t.set(o,s),n.set(o,s)}),{to:U,toMany:Z,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[ct])return;const t=this[an],n=this[Ft];if(e.length){if(!oe(e))throw new B("observable-unbind-wrong-properties",this);e.forEach(o=>{const s=t.get(o);s&&(s.to.forEach(([c,d])=>{const h=n.get(c),p=h[d];p.delete(s),p.size||delete h[d],Object.keys(h).length||(n.delete(c),this.stopListening(c,"change"))}),t.delete(o))})}else n.forEach((o,s)=>{this.stopListening(s,"change")}),n.clear(),t.clear()}decorate(e){j(this);const t=this[e];if(!t)throw new B("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,o)=>{n.return=t.apply(this,o)}),this[e]=function(...n){return this.fire(e,n)},this[e][wt]=t,this[Xt]||(this[Xt]=[]),this[Xt].push(e)}stopListening(e,t,n){if(!e&&this[Xt]){for(const o of this[Xt])this[o]=this[o][wt];delete this[Xt]}super.stopListening(e,t,n)}}:cn}function j(i){i[ct]||(Object.defineProperty(i,ct,{value:new Map}),Object.defineProperty(i,Ft,{value:new Map}),Object.defineProperty(i,an,{value:new Map}))}function U(...i){const e=function(...s){if(!s.length)throw new B("observable-bind-to-parse-error",null);const c={to:[]};let d;return typeof s[s.length-1]=="function"&&(c.callback=s.pop()),s.forEach(h=>{if(typeof h=="string")d.properties.push(h);else{if(typeof h!="object")throw new B("observable-bind-to-parse-error",null);d={observable:h,properties:[]},c.to.push(d)}}),c}(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new B("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new B("observable-bind-to-extra-callback",this);var o;e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new B("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(s=>{const c=o[Ft];let d;c.get(s.observable)||o.listenTo(s.observable,"change",(h,p)=>{d=c.get(s.observable)[p],d&&d.forEach(f=>{ie(o,f.property)})})}),function(s){let c;s._bindings.forEach((d,h)=>{s._to.forEach(p=>{c=p.properties[d.callback?0:s._bindProperties.indexOf(h)],d.to.push([p.observable,c]),function(f,w,v,E){const S=f[Ft],I=S.get(v),N=I||{};N[E]||(N[E]=new Set),N[E].add(w),I||S.set(v,N)}(s._observable,d,p.observable,c)})})}(this),this._bindProperties.forEach(s=>{ie(this._observable,s)})}function Z(i,e,t){if(this._bindings.size>1)throw new B("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const s=n.map(c=>[c,o]);return Array.prototype.concat.apply([],s)}(i,e),t)}function oe(i){return i.every(e=>typeof e=="string")}function ie(i,e){const t=i[an].get(e);let n;t.callback?n=t.callback.apply(i,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=n:i.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{ze[i]=cn.prototype[i]});class le{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function ge(i){let e=0;for(const t of i)e++;return e}function re(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}function se(i){return!(!i||!i[Symbol.iterator])}const ee=typeof global=="object"&&global&&global.Object===Object&&global;var ke=typeof self=="object"&&self&&self.Object===Object&&self;const we=ee||ke||Function("return this")(),_e=we.Symbol;var Me=Object.prototype,je=Me.hasOwnProperty,Qe=Me.toString,Ze=_e?_e.toStringTag:void 0;const Dt=function(i){var e=je.call(i,Ze),t=i[Ze];try{i[Ze]=void 0;var n=!0}catch{}var o=Qe.call(i);return n&&(e?i[Ze]=t:delete i[Ze]),o};var _n=Object.prototype.toString;const Yo=function(i){return _n.call(i)};var Hs=_e?_e.toStringTag:void 0;const ln=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":Hs&&Hs in Object(i)?Dt(i):Yo(i)},Yt=Array.isArray,lt=function(i){return i!=null&&typeof i=="object"},An=function(i){return typeof i=="string"||!Yt(i)&&lt(i)&&ln(i)=="[object String]"};function dn(i,e,t={},n=[]){const o=t&&t.xmlns,s=o?i.createElementNS(o,e):i.createElement(e);for(const c in t)s.setAttribute(c,t[c]);!An(n)&&se(n)||(n=[n]);for(let c of n)An(c)&&(c=i.createTextNode(c)),s.appendChild(c);return s}const Zm=function(i,e){return function(t){return i(e(t))}},Cu=Zm(Object.getPrototypeOf,Object);var lD=Function.prototype,dD=Object.prototype,Jm=lD.toString,uD=dD.hasOwnProperty,hD=Jm.call(Object);const Cn=function(i){if(!lt(i)||ln(i)!="[object Object]")return!1;var e=Cu(i);if(e===null)return!0;var t=uD.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Jm.call(t)==hD},pD=function(){this.__data__=[],this.size=0},Us=function(i,e){return i===e||i!=i&&e!=e},Ac=function(i,e){for(var t=i.length;t--;)if(Us(i[t][0],e))return t;return-1};var gD=Array.prototype.splice;const mD=function(i){var e=this.__data__,t=Ac(e,i);return!(t<0)&&(t==e.length-1?e.pop():gD.call(e,t,1),--this.size,!0)},fD=function(i){var e=this.__data__,t=Ac(e,i);return t<0?void 0:e[t][1]},kD=function(i){return Ac(this.__data__,i)>-1},bD=function(i,e){var t=this.__data__,n=Ac(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this};function yr(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}yr.prototype.clear=pD,yr.prototype.delete=mD,yr.prototype.get=fD,yr.prototype.has=kD,yr.prototype.set=bD;const Cc=yr,wD=function(){this.__data__=new Cc,this.size=0},_D=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},AD=function(i){return this.__data__.get(i)},CD=function(i){return this.__data__.has(i)},Ei=function(i){if(!Ie(i))return!1;var e=ln(i);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},vu=we["__core-js_shared__"];var Xm=function(){var i=/[^.]+$/.exec(vu&&vu.keys&&vu.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const vD=function(i){return!!Xm&&Xm in i};var yD=Function.prototype.toString;const Di=function(i){if(i!=null){try{return yD.call(i)}catch{}try{return i+""}catch{}}return""};var xD=/^\[object .+?Constructor\]$/,ED=Function.prototype,DD=Object.prototype,SD=ED.toString,TD=DD.hasOwnProperty,ID=RegExp("^"+SD.call(TD).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const MD=function(i){return!(!Ie(i)||vD(i))&&(Ei(i)?ID:xD).test(Di(i))},BD=function(i,e){return i==null?void 0:i[e]},Si=function(i,e){var t=BD(i,e);return MD(t)?t:void 0},$s=Si(we,"Map"),qs=Si(Object,"create"),ND=function(){this.__data__=qs?qs(null):{},this.size=0},PD=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var OD=Object.prototype.hasOwnProperty;const LD=function(i){var e=this.__data__;if(qs){var t=e[i];return t==="__lodash_hash_undefined__"?void 0:t}return OD.call(e,i)?e[i]:void 0};var RD=Object.prototype.hasOwnProperty;const zD=function(i){var e=this.__data__;return qs?e[i]!==void 0:RD.call(e,i)},jD=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=qs&&e===void 0?"__lodash_hash_undefined__":e,this};function xr(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}xr.prototype.clear=ND,xr.prototype.delete=PD,xr.prototype.get=LD,xr.prototype.has=zD,xr.prototype.set=jD;const ef=xr,FD=function(){this.size=0,this.__data__={hash:new ef,map:new($s||Cc),string:new ef}},VD=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},vc=function(i,e){var t=i.__data__;return VD(e)?t[typeof e=="string"?"string":"hash"]:t.map},HD=function(i){var e=vc(this,i).delete(i);return this.size-=e?1:0,e},UD=function(i){return vc(this,i).get(i)},$D=function(i){return vc(this,i).has(i)},qD=function(i,e){var t=vc(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this};function Er(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Er.prototype.clear=FD,Er.prototype.delete=HD,Er.prototype.get=UD,Er.prototype.has=$D,Er.prototype.set=qD;const yc=Er,GD=function(i,e){var t=this.__data__;if(t instanceof Cc){var n=t.__data__;if(!$s||n.length<199)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new yc(n)}return t.set(i,e),this.size=t.size,this};function Dr(i){var e=this.__data__=new Cc(i);this.size=e.size}Dr.prototype.clear=wD,Dr.prototype.delete=_D,Dr.prototype.get=AD,Dr.prototype.has=CD,Dr.prototype.set=GD;const Sr=Dr,WD=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i},xc=function(){try{var i=Si(Object,"defineProperty");return i({},"",{}),i}catch{}}(),Ec=function(i,e,t){e=="__proto__"&&xc?xc(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var KD=Object.prototype.hasOwnProperty;const yu=function(i,e,t){var n=i[e];KD.call(i,e)&&Us(n,t)&&(t!==void 0||e in i)||Ec(i,e,t)},Tr=function(i,e,t,n){var o=!t;t||(t={});for(var s=-1,c=e.length;++s<c;){var d=e[s],h=void 0;h===void 0&&(h=i[d]),o?Ec(t,d,h):yu(t,d,h)}return t},YD=function(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n},tf=function(i){return lt(i)&&ln(i)=="[object Arguments]"};var nf=Object.prototype,QD=nf.hasOwnProperty,ZD=nf.propertyIsEnumerable;const Dc=tf(function(){return arguments}())?tf:function(i){return lt(i)&&QD.call(i,"callee")&&!ZD.call(i,"callee")},JD=function(){return!1};var of=typeof tn=="object"&&tn&&!tn.nodeType&&tn,rf=of&&typeof St=="object"&&St&&!St.nodeType&&St,sf=rf&&rf.exports===of?we.Buffer:void 0;const Gs=(sf?sf.isBuffer:void 0)||JD;var XD=/^(?:0|[1-9]\d*)$/;const Sc=function(i,e){var t=typeof i;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&XD.test(i))&&i>-1&&i%1==0&&i<e},xu=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var pt={};pt["[object Float32Array]"]=pt["[object Float64Array]"]=pt["[object Int8Array]"]=pt["[object Int16Array]"]=pt["[object Int32Array]"]=pt["[object Uint8Array]"]=pt["[object Uint8ClampedArray]"]=pt["[object Uint16Array]"]=pt["[object Uint32Array]"]=!0,pt["[object Arguments]"]=pt["[object Array]"]=pt["[object ArrayBuffer]"]=pt["[object Boolean]"]=pt["[object DataView]"]=pt["[object Date]"]=pt["[object Error]"]=pt["[object Function]"]=pt["[object Map]"]=pt["[object Number]"]=pt["[object Object]"]=pt["[object RegExp]"]=pt["[object Set]"]=pt["[object String]"]=pt["[object WeakMap]"]=!1;const e5=function(i){return lt(i)&&xu(i.length)&&!!pt[ln(i)]},Eu=function(i){return function(e){return i(e)}};var af=typeof tn=="object"&&tn&&!tn.nodeType&&tn,Ws=af&&typeof St=="object"&&St&&!St.nodeType&&St,Du=Ws&&Ws.exports===af&&ee.process;const Ir=function(){try{var i=Ws&&Ws.require&&Ws.require("util").types;return i||Du&&Du.binding&&Du.binding("util")}catch{}}();var cf=Ir&&Ir.isTypedArray;const Su=cf?Eu(cf):e5;var t5=Object.prototype.hasOwnProperty;const lf=function(i,e){var t=Yt(i),n=!t&&Dc(i),o=!t&&!n&&Gs(i),s=!t&&!n&&!o&&Su(i),c=t||n||o||s,d=c?YD(i.length,String):[],h=d.length;for(var p in i)!e&&!t5.call(i,p)||c&&(p=="length"||o&&(p=="offset"||p=="parent")||s&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||Sc(p,h))||d.push(p);return d};var n5=Object.prototype;const Tu=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||n5)},o5=Zm(Object.keys,Object);var i5=Object.prototype.hasOwnProperty;const r5=function(i){if(!Tu(i))return o5(i);var e=[];for(var t in Object(i))i5.call(i,t)&&t!="constructor"&&e.push(t);return e},Tc=function(i){return i!=null&&xu(i.length)&&!Ei(i)},Ks=function(i){return Tc(i)?lf(i):r5(i)},s5=function(i,e){return i&&Tr(e,Ks(e),i)},a5=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var c5=Object.prototype.hasOwnProperty;const l5=function(i){if(!Ie(i))return a5(i);var e=Tu(i),t=[];for(var n in i)(n!="constructor"||!e&&c5.call(i,n))&&t.push(n);return t},Mr=function(i){return Tc(i)?lf(i,!0):l5(i)},d5=function(i,e){return i&&Tr(e,Mr(e),i)};var df=typeof tn=="object"&&tn&&!tn.nodeType&&tn,uf=df&&typeof St=="object"&&St&&!St.nodeType&&St,hf=uf&&uf.exports===df?we.Buffer:void 0,pf=hf?hf.allocUnsafe:void 0;const gf=function(i,e){if(e)return i.slice();var t=i.length,n=pf?pf(t):new i.constructor(t);return i.copy(n),n},mf=function(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e},u5=function(i,e){for(var t=-1,n=i==null?0:i.length,o=0,s=[];++t<n;){var c=i[t];e(c,t,i)&&(s[o++]=c)}return s},ff=function(){return[]};var h5=Object.prototype.propertyIsEnumerable,kf=Object.getOwnPropertySymbols;const Iu=kf?function(i){return i==null?[]:(i=Object(i),u5(kf(i),function(e){return h5.call(i,e)}))}:ff,p5=function(i,e){return Tr(i,Iu(i),e)},bf=function(i,e){for(var t=-1,n=e.length,o=i.length;++t<n;)i[o+t]=e[t];return i},wf=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)bf(e,Iu(i)),i=Cu(i);return e}:ff,g5=function(i,e){return Tr(i,wf(i),e)},_f=function(i,e,t){var n=e(i);return Yt(i)?n:bf(n,t(i))},Mu=function(i){return _f(i,Ks,Iu)},m5=function(i){return _f(i,Mr,wf)},Bu=Si(we,"DataView"),Nu=Si(we,"Promise"),Pu=Si(we,"Set"),Ou=Si(we,"WeakMap");var Af="[object Map]",Cf="[object Promise]",vf="[object Set]",yf="[object WeakMap]",xf="[object DataView]",f5=Di(Bu),k5=Di($s),b5=Di(Nu),w5=Di(Pu),_5=Di(Ou),Ti=ln;(Bu&&Ti(new Bu(new ArrayBuffer(1)))!=xf||$s&&Ti(new $s)!=Af||Nu&&Ti(Nu.resolve())!=Cf||Pu&&Ti(new Pu)!=vf||Ou&&Ti(new Ou)!=yf)&&(Ti=function(i){var e=ln(i),t=e=="[object Object]"?i.constructor:void 0,n=t?Di(t):"";if(n)switch(n){case f5:return xf;case k5:return Af;case b5:return Cf;case w5:return vf;case _5:return yf}return e});const Ys=Ti;var A5=Object.prototype.hasOwnProperty;const C5=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&A5.call(i,"index")&&(t.index=i.index,t.input=i.input),t},Ic=we.Uint8Array,Lu=function(i){var e=new i.constructor(i.byteLength);return new Ic(e).set(new Ic(i)),e},v5=function(i,e){var t=e?Lu(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var y5=/\w*$/;const x5=function(i){var e=new i.constructor(i.source,y5.exec(i));return e.lastIndex=i.lastIndex,e};var Ef=_e?_e.prototype:void 0,Df=Ef?Ef.valueOf:void 0;const E5=function(i){return Df?Object(Df.call(i)):{}},Sf=function(i,e){var t=e?Lu(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)},D5=function(i,e,t){var n=i.constructor;switch(e){case"[object ArrayBuffer]":return Lu(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return v5(i,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Sf(i,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return x5(i);case"[object Symbol]":return E5(i)}};var Tf=Object.create;const S5=function(){function i(){}return function(e){if(!Ie(e))return{};if(Tf)return Tf(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),If=function(i){return typeof i.constructor!="function"||Tu(i)?{}:S5(Cu(i))},T5=function(i){return lt(i)&&Ys(i)=="[object Map]"};var Mf=Ir&&Ir.isMap;const I5=Mf?Eu(Mf):T5,M5=function(i){return lt(i)&&Ys(i)=="[object Set]"};var Bf=Ir&&Ir.isSet;const B5=Bf?Eu(Bf):M5;var Nf="[object Arguments]",Pf="[object Function]",Of="[object Object]",dt={};dt[Nf]=dt["[object Array]"]=dt["[object ArrayBuffer]"]=dt["[object DataView]"]=dt["[object Boolean]"]=dt["[object Date]"]=dt["[object Float32Array]"]=dt["[object Float64Array]"]=dt["[object Int8Array]"]=dt["[object Int16Array]"]=dt["[object Int32Array]"]=dt["[object Map]"]=dt["[object Number]"]=dt[Of]=dt["[object RegExp]"]=dt["[object Set]"]=dt["[object String]"]=dt["[object Symbol]"]=dt["[object Uint8Array]"]=dt["[object Uint8ClampedArray]"]=dt["[object Uint16Array]"]=dt["[object Uint32Array]"]=!0,dt["[object Error]"]=dt[Pf]=dt["[object WeakMap]"]=!1;const Ru=function i(e,t,n,o,s,c){var d,h=1&t,p=2&t,f=4&t;if(n&&(d=s?n(e,o,s,c):n(e)),d!==void 0)return d;if(!Ie(e))return e;var w=Yt(e);if(w){if(d=C5(e),!h)return mf(e,d)}else{var v=Ys(e),E=v==Pf||v=="[object GeneratorFunction]";if(Gs(e))return gf(e,h);if(v==Of||v==Nf||E&&!s){if(d=p||E?{}:If(e),!h)return p?g5(e,d5(d,e)):p5(e,s5(d,e))}else{if(!dt[v])return s?e:{};d=D5(e,v,h)}}c||(c=new Sr);var S=c.get(e);if(S)return S;c.set(e,d),B5(e)?e.forEach(function(N){d.add(i(N,t,n,N,e,c))}):I5(e)&&e.forEach(function(N,L){d.set(L,i(N,t,n,L,e,c))});var I=w?void 0:(f?p?m5:Mu:p?Mr:Ks)(e);return WD(I||e,function(N,L){I&&(N=e[L=N]),yu(d,L,i(N,t,n,L,e,c))}),d},zu=function(i,e){return Ru(i,5,e=typeof e=="function"?e:void 0)},Ii=function(i){return lt(i)&&i.nodeType===1&&!Cn(i)};class Lf{constructor(e,t){this._config={},t&&this.define(Rf(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(Cn(t))return void this._setObjectToTarget(e,t,o);const s=t.split(".");t=s.pop();for(const c of s)Cn(e[c])||(e[c]={}),e=e[c];if(Cn(n))return Cn(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!Cn(e[o])){e=null;break}e=e[o]}return e?Rf(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function Rf(i){return zu(i,N5)}function N5(i){return Ii(i)||typeof i=="function"?i:void 0}function Qo(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function Mc(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const zf=On(fe());function On(i){return i?class extends i{listenTo(e,t,n,o={}){if(Qo(e)||Mc(e)){const s={capture:!!o.useCapture,passive:!!o.usePassive},c=this._getProxyEmitter(e,s)||new P5(e,s);this.listenTo(c,t,n,o)}else super.listenTo(e,t,n,o)}stopListening(e,t,n){if(Qo(e)||Mc(e)){const o=this._getAllProxyEmitters(e);for(const s of o)this.stopListening(s,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,o){const s=n[de];return s&&s[o]?s[o].emitter:null}(this,jf(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:zf}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{On[i]=zf.prototype[i]});class P5 extends fe(){constructor(e,t){super(),Ce(this,jf(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),fe().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){fe().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function jf(i,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=P())}(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}function Ff(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function Ct(i){return Object.prototype.toString.call(i)=="[object Text]"}function Bc(i){return Object.prototype.toString.apply(i)=="[object Range]"}function Vf(i){return i&&i.parentNode?i.offsetParent===_.document.body?null:i.offsetParent:null}const Hf=["top","right","bottom","left","width","height"];class Ve{constructor(e){const t=Bc(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),ju(e)||t)if(t){const n=Ve.getDomRangeRects(e);Nc(this,Ve.getBoundingRect(n))}else Nc(this,e.getBoundingClientRect());else if(Mc(e)){const{innerWidth:n,innerHeight:o}=e;Nc(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Nc(this,e)}clone(){return new Ve(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const n=new Ve(t);return n._source=this._source,n}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(Uf(e))return t;let n,o=e,s=e.parentNode||e.commonAncestorContainer;for(;s&&!Uf(s);){const d=((c=s)instanceof HTMLElement?c.ownerDocument.defaultView.getComputedStyle(c).overflow:"visible")==="visible";o instanceof HTMLElement&&$f(o)==="absolute"&&(n=o);const h=$f(s);if(d||n&&(h==="relative"&&d||h!=="relative")){o=s,s=s.parentNode;continue}const p=new Ve(s),f=t.getIntersection(p);if(!f)return null;f.getArea()<t.getArea()&&(t=f),o=s,s=s.parentNode}var c;return t}isEqual(e){for(const t of Hf)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=_.window,n=this.clone().moveBy(e,t);if(ju(n._source)){const o=Vf(n._source);o&&function(s,c){const d=new Ve(c),h=Ff(c);let p=0,f=0;p-=d.left,f-=d.top,p+=c.scrollLeft,f+=c.scrollTop,p-=h.left,f-=h.top,s.moveBy(p,f)}(n,o)}return n}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(Mc(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const s=Ff(e);t=e.offsetWidth-e.clientWidth-s.left-s.right,n=e.offsetHeight-e.clientHeight-s.top-s.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new Ve(o));else{let o=e.startContainer;Ct(o)&&(o=o.parentNode);const s=new Ve(o.getBoundingClientRect());s.right=s.left,s.width=0,t.push(s)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Ve(t))}}function Nc(i,e){for(const t of Hf)i[t]=e[t]}function Uf(i){return!!ju(i)&&i===i.ownerDocument.body}function ju(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}function $f(i){return i instanceof HTMLElement?i.ownerDocument.defaultView.getComputedStyle(i).position:"static"}class ft{constructor(e,t){ft._observerInstance||ft._createObserver(),this._element=e,this._callback=t,ft._addElementCallback(e,t),ft._observerInstance.observe(e)}get element(){return this._element}destroy(){ft._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){ft._elementCallbacks||(ft._elementCallbacks=new Map);let n=ft._elementCallbacks.get(e);n||(n=new Set,ft._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=ft._getElementCallbacks(e);n&&(n.delete(t),n.size||(ft._elementCallbacks.delete(e),ft._observerInstance.unobserve(e))),ft._elementCallbacks&&!ft._elementCallbacks.size&&(ft._observerInstance=null,ft._elementCallbacks=null)}static _getElementCallbacks(e){return ft._elementCallbacks?ft._elementCallbacks.get(e):null}static _createObserver(){ft._observerInstance=new _.window.ResizeObserver(e=>{for(const t of e){const n=ft._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}ft._observerInstance=null,ft._elementCallbacks=null;const Fu=ft;function qf(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}function Br(i){return e=>e+i}function Qs(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function Gf(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function Zs(i){return i&&i.nodeType===Node.COMMENT_NODE}function Mi(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}function Pc({element:i,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:s}){Ei(e)&&(e=e()),Ei(n)&&(n=n());const c=Vf(i),d=function(v){v=Object.assign({top:0,bottom:0,left:0,right:0},v);const E=new Ve(_.window);return E.top+=v.top,E.height-=v.top,E.bottom-=v.bottom,E.height-=v.bottom,E}(s),h=new Ve(i),p=Wf(e,d);let f;if(!p||!d.getIntersection(p))return null;const w={targetRect:p,elementRect:h,positionedElementAncestor:c,viewportRect:d};if(n||o){if(n){const v=Wf(n,d);v&&(w.limiterRect=v)}f=function(v,E){const{elementRect:S}=E,I=S.getArea(),N=v.map(G=>new Kf(G,E)).filter(G=>!!G.name);let L=0,H=null;for(const G of N){const{limiterIntersectionArea:X,viewportIntersectionArea:me}=G;if(X===I)return G;const Be=me**2+X**2;Be>L&&(L=Be,H=G)}return H}(t,w)}else f=new Kf(t[0],w);return f}function Wf(i,e){const t=new Ve(i).getVisible();return t?t.getIntersection(e):null}class Kf{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!n)return;const{left:o,top:s,name:c,config:d}=n;this.name=c,this.config=d,this._positioningFunctionCoordinates={left:o,top:s},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function Yf(i){const e=i.parentNode;e&&e.removeChild(i)}function O5({window:i,rect:e,alignToTop:t,forceScroll:n,viewportOffset:o}){const s=e.clone().moveBy(0,o.bottom),c=e.clone().moveBy(0,-o.top),d=new Ve(i).excludeScrollbarsAndBorders(),h=t&&n,p=[c,s].every(S=>d.contains(S));let{scrollX:f,scrollY:w}=i;const v=f,E=w;h?w-=d.top-e.top+o.top:p||(Zf(c,d)?w-=d.top-e.top+o.top:Qf(s,d)&&(w+=t?e.top-d.top-o.top:e.bottom-d.bottom+o.bottom)),p||(Jf(e,d)?f-=d.left-e.left+o.left:Xf(e,d)&&(f+=e.right-d.right+o.right)),f==v&&w===E||i.scrollTo(f,w)}function L5({parent:i,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:o=0,limiterElement:s}){const c=Vu(i),d=t&&n;let h,p,f;const w=s||c.document.body;for(;i!=w;)p=e(),h=new Ve(i).excludeScrollbarsAndBorders(),f=h.contains(p),d?i.scrollTop-=h.top-p.top+o:f||(Zf(p,h)?i.scrollTop-=h.top-p.top+o:Qf(p,h)&&(i.scrollTop+=t?p.top-h.top-o:p.bottom-h.bottom+o)),f||(Jf(p,h)?i.scrollLeft-=h.left-p.left+o:Xf(p,h)&&(i.scrollLeft+=p.right-h.right+o)),i=i.parentNode}function Qf(i,e){return i.bottom>e.bottom}function Zf(i,e){return i.top<e.top}function Jf(i,e){return i.left<e.left}function Xf(i,e){return i.right>e.right}function Vu(i){return Bc(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function R5(i){if(Bc(i)){let e=i.commonAncestorContainer;return Ct(e)&&(e=e.parentNode),e}return i.parentNode}function ek(i,e){const t=Vu(i),n=new Ve(i);if(t===e)return n;{let o=t;for(;o!=e;){const s=o.frameElement,c=new Ve(s).excludeScrollbarsAndBorders();n.moveBy(c.left,c.top),o=o.parent}}return n}const z5={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},j5={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},tk={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},Ue=function(){const i={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)i[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;return Object.assign(i,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),i}(),F5=Object.fromEntries(Object.entries(Ue).map(([i,e])=>{let t;return t=e in tk?tk[e]:i.charAt(0).toUpperCase()+i.slice(1),[e,t]}));function Nr(i){let e;if(typeof i=="string"){if(e=Ue[i.toLowerCase()],!e)throw new B("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?Ue.alt:0)+(i.ctrlKey?Ue.ctrl:0)+(i.shiftKey?Ue.shift:0)+(i.metaKey?Ue.cmd:0);return e}function Js(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Nr(t.slice(0,-1));const n=Nr(t);return(C.isMac||C.isiOS)&&n==Ue.ctrl?Ue.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Oc(i){let e=Js(i);return Object.entries(C.isMac||C.isiOS?z5:j5).reduce((t,[n,o])=>(e&Ue[n]&&(e&=~Ue[n],t+=o),t),"")+(e?F5[e]:"")}function Hu(i,e){const t=e==="ltr";switch(i){case Ue.arrowleft:return t?"left":"right";case Ue.arrowright:return t?"right":"left";case Ue.arrowup:return"up";case Ue.arrowdown:return"down"}}function rt(i){return Array.isArray(i)?i:[i]}const Uu=function(i,e,t){(t!==void 0&&!Us(i[e],t)||t===void 0&&!(e in i))&&Ec(i,e,t)},nk=function(i){return function(e,t,n){for(var o=-1,s=Object(e),c=n(e),d=c.length;d--;){var h=c[++o];if(t(s[h],h,s)===!1)break}return e}}(),V5=function(i){return lt(i)&&Tc(i)},ok=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},H5=function(i){return Tr(i,Mr(i))},U5=function(i,e,t,n,o,s,c){var d=ok(i,t),h=ok(e,t),p=c.get(h);if(p)Uu(i,t,p);else{var f=void 0,w=f===void 0;if(w){var v=Yt(h),E=!v&&Gs(h),S=!v&&!E&&Su(h);f=h,v||E||S?Yt(d)?f=d:V5(d)?f=mf(d):E?(w=!1,f=gf(h,!0)):S?(w=!1,f=Sf(h,!0)):f=[]:Cn(h)||Dc(h)?(f=d,Dc(d)?f=H5(d):Ie(d)&&!Ei(d)||(f=If(h))):w=!1}w&&(c.set(h,f),o(f,h,n,s,c),c.delete(h)),Uu(i,t,f)}},$5=function i(e,t,n,o,s){e!==t&&nk(t,function(c,d){if(s||(s=new Sr),Ie(c))U5(e,t,d,n,i,o,s);else{var h=void 0;h===void 0&&(h=c),Uu(e,d,h)}},Mr)},Zo=function(i){return i},q5=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var ik=Math.max;const G5=function(i,e,t){return e=ik(e===void 0?i.length-1:e,0),function(){for(var n=arguments,o=-1,s=ik(n.length-e,0),c=Array(s);++o<s;)c[o]=n[e+o];o=-1;for(var d=Array(e+1);++o<e;)d[o]=n[o];return d[e]=t(c),q5(i,this,d)}},W5=function(i){return function(){return i}},K5=xc?function(i,e){return xc(i,"toString",{configurable:!0,enumerable:!1,value:W5(e),writable:!0})}:Zo;var Y5=Date.now;const Q5=function(i){var e=0,t=0;return function(){var n=Y5(),o=16-(n-t);if(t=n,o>0){if(++e>=800)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(K5),Z5=function(i,e){return Q5(G5(i,e,Zo),i+"")},J5=function(i,e,t){if(!Ie(t))return!1;var n=typeof e;return!!(n=="number"?Tc(t)&&Sc(e,t.length):n=="string"&&e in t)&&Us(t[e],i)},rk=function(i){return Z5(function(e,t){var n=-1,o=t.length,s=o>1?t[o-1]:void 0,c=o>2?t[2]:void 0;for(s=i.length>3&&typeof s=="function"?(o--,s):void 0,c&&J5(t[0],t[1],c)&&(s=o<3?void 0:s,o=1),e=Object(e);++n<o;){var d=t[n];d&&i(e,d,n,s)}return e})},$u=rk(function(i,e,t){$5(i,e,t)});function X5(i,e,t=1,n){if(typeof t!="number")throw new B("translation-service-quantity-not-a-number",null,{quantity:t});const o=n||_.window.CKEDITOR_TRANSLATIONS,s=function(f){return Object.keys(f).length}(o);s===1&&(i=Object.keys(o)[0]);const c=e.id||e.string;if(s===0||!function(f,w,v){return!!v[f]&&!!v[f].dictionary[w]}(i,c,o))return t!==1?e.plural:e.string;const d=o[i].dictionary,h=o[i].getPluralForm||(f=>f===1?0:1),p=d[c];return typeof p=="string"?p:p[Number(h(t))]}_.window.CKEDITOR_TRANSLATIONS||(_.window.CKEDITOR_TRANSLATIONS={});const eS=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function sk(i){return eS.includes(i)?"rtl":"ltr"}class tS{constructor({uiLanguage:e="en",contentLanguage:t,translations:n}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=sk(this.uiLanguage),this.contentLanguageDirection=sk(this.contentLanguage),this.translations=function(o){return Array.isArray(o)?o.reduce((s,c)=>$u(s,c)):o}(n),this.t=(o,s)=>this._t(o,s)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=rt(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,s){return o.replace(/%(\d+)/g,(c,d)=>d<s.length?s[d]:c)}(X5(this.uiLanguage,e,n,this.translations),t)}}class Gn extends fe(){constructor(e={},t={}){super();const n=se(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new B("collection-add-item-invalid-index",this);let n=0;for(const o of e){const s=this._getItemIdBeforeAdding(o),c=t+n;this._items.splice(c,0,o),this._itemMap.set(s,o),this.fire("add",o,c),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new B("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new B("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,s,c)=>{const d=t._bindToCollection==this,h=t._bindToInternalToExternalMap.get(s);if(d&&h)this._bindToExternalToInternalMap.set(s,h),this._bindToInternalToExternalMap.set(h,s);else{const p=e(s);if(!p)return void this._skippedIndexesFromExternal.push(c);let f=c;for(const w of this._skippedIndexesFromExternal)c>w&&f--;for(const w of t._skippedIndexesFromExternal)f>=w&&f++;this._bindToExternalToInternalMap.set(s,p),this._bindToInternalToExternalMap.set(p,s),this.add(p,f);for(let w=0;w<t._skippedIndexesFromExternal.length;w++)f<=t._skippedIndexesFromExternal[w]&&t._skippedIndexesFromExternal[w]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,s,c)=>{const d=this._bindToExternalToInternalMap.get(s);d&&this.remove(d),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((h,p)=>(c<p&&h.push(p-1),c>p&&h.push(p),h),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new B("collection-add-invalid-id",this);if(this.get(n))throw new B("collection-add-item-already-exists",this)}else e[t]=n=P();return n}_remove(e){let t,n,o,s=!1;const c=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),s=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],s=!o,o&&(n=o[c])):(o=e,n=o[c],t=this._items.indexOf(o),s=t==-1||!this._itemMap.get(n)),s)throw new B("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const d=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(d),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Vt(i){const e=i.next();return e.done?null:e.value}class Lt extends On(ze()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new B("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class en{constructor(){this._listener=new(On())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Nr(n),n)})}set(e,t,n={}){const o=Js(e),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(c,d)=>{t(d,()=>{d.preventDefault(),d.stopPropagation(),c.stop()}),c.return=!0},{priority:s})}press(e){return!!this._listener.fire("_keydown:"+Nr(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function yo(i){return se(i)?new Map(i):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(i)}function qu(i,e){let t;function n(...o){n.cancel(),t=setTimeout(()=>i(...o),e)}return n.cancel=()=>{clearTimeout(t)},n}function Gu(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(e));var t}function Wu(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const nS=function(){const i=new RegExp("\\p{Regional_Indicator}{2}","u").source,e="(?:"+[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")].map(t=>t.source).join("|")+")";return new RegExp(`${i}|${e}(?:‍${e})*`,"ug")}();function ak(i,e){const t=String(i).matchAll(nS);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class Ln extends Gn{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new B("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const o of e)n.delegate(o).to(t);this.on("add",(n,o)=>{for(const s of e)o.delegate(s).to(t)}),this.on("remove",(n,o)=>{for(const s of e)o.stopDelegating(s,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}remove(e){return super.remove(e)}}class Wn extends fe(){constructor(e){super(),Object.assign(this,uk(dk(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new B("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)Rc(n)?yield n:Ku(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,o)=>new oS({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:o}),if:(n,o,s)=>new ck({observable:e,emitter:t,attribute:n,valueIfTrue:o,callback:s})}}static extend(e,t){if(e._isRendered)throw new B("template-extend-render",[this,e]);mk(e,uk(dk(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new B("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Lc(this.text)?this._bindToObservable({schema:this.text,updater:iS(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const o in this.attributes){const s=t.getAttribute(o),c=this.attributes[o];n&&(n.attributes[o]=s);const d=fk(c)?c[0].ns:null;if(Lc(c)){const h=fk(c)?c[0].value:c;n&&kk(o)&&h.unshift(s),this._bindToObservable({schema:h,updater:rS(t,o,d),data:e})}else if(o=="style"&&typeof c[0]!="string")this._renderStyleAttribute(c[0],e);else{n&&s&&kk(o)&&c.unshift(s);const h=c.map(p=>p&&p.value||p).reduce((p,f)=>p.concat(f),[]).reduce(pk,"");Pr(h)||t.setAttributeNS(d,o,h)}}}_renderStyleAttribute(e,t){const n=t.node;for(const o in e){const s=e[o];Lc(s)?this._bindToObservable({schema:[s],updater:sS(n,o),data:t}):n.style[o]=s}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,o=e.isApplying;let s=0;for(const c of this.children)if(Yu(c)){if(!o){c.setParent(t);for(const d of c)n.appendChild(d.element)}}else if(Rc(c))o||(c.isRendered||c.render(),n.appendChild(c.element));else if(Qo(c))n.appendChild(c);else if(o){const d={children:[],bindings:[],attributes:{}};e.revertData.children.push(d),c._renderNode({intoFragment:!1,node:n.childNodes[s++],isApplying:!0,revertData:d})}else n.appendChild(c.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(o=>{const[s,c]=t.split("@");return o.activateDomEventListener(s,c,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const o=n.revertData;lk(e,t,n);const s=e.filter(c=>!Pr(c)).filter(c=>c.observable).map(c=>c.activateAttributeListener(e,t,n));o&&o.bindings.push(s)}_revertTemplateFromNode(e,t){for(const o of t.bindings)for(const s of o)s();if(t.text)return void(e.textContent=t.text);const n=e;for(const o in t.attributes){const s=t.attributes[o];s===null?n.removeAttribute(o):n.setAttribute(o,s)}for(let o=0;o<t.children.length;++o)this._revertTemplateFromNode(n.childNodes[o],t.children[o])}}class Xs{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const o=()=>lk(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,o),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,o)}}}class oS extends Xs{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const o=(s,c)=>{t&&!c.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(c):this.observable.fire(this.eventNameOrFunction,c))};return this.emitter.listenTo(n.node,e,o),()=>{this.emitter.stopListening(n.node,e,o)}}}class ck extends Xs{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!Pr(super.getValue(e))&&(this.valueIfTrue||!0)}}function Lc(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(Lc):i instanceof Xs)}function lk(i,e,{node:t}){const n=function(s,c){return s.map(d=>d instanceof Xs?d.getValue(c):d)}(i,t);let o;o=i.length==1&&i[0]instanceof ck?n[0]:n.reduce(pk,""),Pr(o)?e.remove():e.set(o)}function iS(i){return{set(e){i.textContent=e},remove(){i.textContent=""}}}function rS(i,e,t){return{set(n){i.setAttributeNS(t,e,n)},remove(){i.removeAttributeNS(t,e)}}}function sS(i,e){return{set(t){i.style[e]=t},remove(){i.style[e]=null}}}function dk(i){return zu(i,e=>{if(e&&(e instanceof Xs||Ku(e)||Rc(e)||Yu(e)))return e})}function uk(i){if(typeof i=="string"?i=function(e){return{text:[e]}}(i):i.text&&function(e){e.text=rt(e.text)}(i),i.on&&(i.eventListeners=function(e){for(const t in e)hk(e,t);return e}(i.on),delete i.on),!i.text){i.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=rt(t[n].value)),hk(t,n)}(i.attributes);const e=[];if(i.children)if(Yu(i.children))e.push(i.children);else for(const t of i.children)Ku(t)||Rc(t)||Qo(t)?e.push(t):e.push(new Wn(t));i.children=e}return i}function hk(i,e){i[e]=rt(i[e])}function pk(i,e){return Pr(e)?i:Pr(i)?e:`${i} ${e}`}function gk(i,e){for(const t in e)i[t]?i[t].push(...e[t]):i[t]=e[t]}function mk(i,e){if(e.attributes&&(i.attributes||(i.attributes={}),gk(i.attributes,e.attributes)),e.eventListeners&&(i.eventListeners||(i.eventListeners={}),gk(i.eventListeners,e.eventListeners)),e.text&&i.text.push(...e.text),e.children&&e.children.length){if(i.children.length!=e.children.length)throw new B("ui-template-extend-children-mismatch",i);let t=0;for(const n of e.children)mk(i.children[t++],n)}}function Pr(i){return!i&&i!==0}function Rc(i){return i instanceof ve}function Ku(i){return i instanceof Wn}function Yu(i){return i instanceof Ln}function fk(i){return Ie(i[0])&&i[0].ns}function kk(i){return i=="class"||i=="style"}var aS=g(5072),ue=g.n(aS),bk=g(7718),cS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(bk.A,cS),bk.A.locals;class ve extends On(ze()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new Gn,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Wn.bind(this,this)}createCollection(e){const t=new Ln(e);return this._viewCollections.add(t),t}registerChild(e){se(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){se(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Wn(e)}extendTemplate(e){Wn.extend(this.template,e)}render(){if(this.isRendered)throw new B("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function zc({emitter:i,activator:e,callback:t,contextElements:n}){i.listenTo(document,"mousedown",(o,s)=>{if(!e())return;const c=typeof s.composedPath=="function"?s.composedPath():[],d=typeof n=="function"?n():n;for(const h of d)if(h.contains(s.target)||c.includes(h))return;t()})}function Qu(i){return class extends i{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function jc({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}function lS({keystrokeHandler:i,focusTracker:e,gridItems:t,numberOfColumns:n,uiLanguageDirection:o}){const s=typeof n=="number"?()=>n:n;function c(p){return f=>{const w=t.find(S=>S.element===e.focusedElement),v=t.getIndex(w),E=p(v,t);t.get(E).focus(),f.stopPropagation(),f.preventDefault()}}function d(p,f){return p===f-1?0:p+1}function h(p,f){return p===0?f-1:p-1}i.set("arrowright",c((p,f)=>o==="rtl"?h(p,f.length):d(p,f.length))),i.set("arrowleft",c((p,f)=>o==="rtl"?d(p,f.length):h(p,f.length))),i.set("arrowup",c((p,f)=>{let w=p-s();return w<0&&(w=p+s()*Math.floor(f.length/s()),w>f.length-1&&(w-=s())),w})),i.set("arrowdown",c((p,f)=>{let w=p+s();return w>f.length-1&&(w=p%s()),w}))}class ae extends ze(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",wk,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",wk),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function wk(i){i.return=!1,i.stop()}class Fe extends ze(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const n=e.model.document.selection,o=n.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(n);(e.isReadOnly||this._isEnabledBasedOnSelection&&!o)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",_k,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",_k),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function _k(i){i.return=!1,i.stop()}class Ak extends Fe{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){$(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class Ck extends fe(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,s]of n)this._contextPlugins.set(o,s),this._contextPlugins.set(s,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new B("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,s=this._context;(function S(I,N=new Set){I.forEach(L=>{h(L)&&(N.has(L)||(N.add(L),L.pluginName&&!o._availablePlugins.has(L.pluginName)&&o._availablePlugins.set(L.pluginName,L),L.requires&&S(L.requires,N)))})})(e),v(e);const c=[...function S(I,N=new Set){return I.map(L=>h(L)?L:o._availablePlugins.get(L)).reduce((L,H)=>N.has(H)?L:(N.add(H),H.requires&&(v(H.requires,H),S(H.requires,N).forEach(G=>L.add(G))),L.add(H)),new Set)}(e.filter(S=>!f(S,t)))];(function(S,I){for(const N of I){if(typeof N!="function")throw new B("plugincollection-replace-plugin-invalid-type",null,{pluginItem:N});const L=N.pluginName;if(!L)throw new B("plugincollection-replace-plugin-missing-name",null,{pluginItem:N});if(N.requires&&N.requires.length)throw new B("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:L});const H=o._availablePlugins.get(L);if(!H)throw new B("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:L});const G=S.indexOf(H);if(G===-1){if(o._contextPlugins.has(H))return;throw new B("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:L})}if(H.requires&&H.requires.length)throw new B("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:L});S.splice(G,1,N),o._availablePlugins.set(L,N)}})(c,n);const d=function(S){return S.map(I=>{let N=o._contextPlugins.get(I);return N=N||new I(s),o._add(I,N),N})}(c);return E(d,"init").then(()=>E(d,"afterInit")).then(()=>d);function h(S){return typeof S=="function"}function p(S){return h(S)&&!!S.isContextPlugin}function f(S,I){return I.some(N=>N===S||w(S)===N||w(N)===S)}function w(S){return h(S)?S.pluginName||S.name:S}function v(S,I=null){S.map(N=>h(N)?N:o._availablePlugins.get(N)||N).forEach(N=>{(function(L,H){if(!h(L))throw H?new B("plugincollection-soft-required",s,{missingPlugin:L,requiredBy:w(H)}):new B("plugincollection-plugin-not-found",s,{plugin:L})})(N,I),function(L,H){if(p(H)&&!p(L))throw new B("plugincollection-context-required",s,{plugin:w(L),requiredBy:w(H)})}(N,I),function(L,H){if(H&&f(L,t))throw new B("plugincollection-required",s,{plugin:w(L),requiredBy:w(H)})}(N,I)})}function E(S,I){return S.reduce((N,L)=>L[I]?o._contextPlugins.has(L)?N:N.then(L[I].bind(L)):N,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new B("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class vk{constructor(e){this._contextOwner=null;const{translations:t,...n}=e||{};this.config=new Lf(n,this.constructor.defaultConfig);const o=this.constructor.builtinPlugins;this.config.define("plugins",o),this.plugins=new Ck(this,o);const s=this.config.get("language")||{};this.locale=new tS({uiLanguage:typeof s=="string"?s:s.ui,contentLanguage:this.config.get("language.content"),translations:t}),this.t=this.locale.t,this.editors=new Gn}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new B("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new B("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new B("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class Fc extends ze(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var yk=g(1920),dS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(yk.A,dS),yk.A.locals;const Vc=new WeakMap;let xk=!1;function Ek({view:i,element:e,text:t,isDirectHost:n=!0,keepOnFocus:o=!1}){const s=i.document;function c(d){Vc.get(s).set(e,{text:d,isDirectHost:n,keepOnFocus:o,hostElement:n?e:null}),i.change(h=>Zu(s,h))}Vc.has(s)||(Vc.set(s,new Map),s.registerPostFixer(d=>Zu(s,d)),s.on("change:isComposing",()=>{i.change(d=>Zu(s,d))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(d,h,p)=>{c(p)}),e.placeholder?c(e.placeholder):t&&c(t),t&&function(){xk||V("enableplaceholder-deprecated-text-option"),xk=!0}()}function uS(i,e){return!e.hasClass("ck-placeholder")&&(i.addClass("ck-placeholder",e),!0)}function hS(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function pS(i,e){if(!i.isAttached()||Array.from(i.getChildren()).some(s=>!s.is("uiElement")))return!1;const n=i.document,o=n.selection.anchor;return(!n.isComposing||!o||o.parent!==i)&&(!!e||!n.isFocused||!!o&&o.parent!==i)}function Zu(i,e){const t=Vc.get(i),n=[];let o=!1;for(const[s,c]of t)c.isDirectHost&&(n.push(s),Dk(e,s,c)&&(o=!0));for(const[s,c]of t){if(c.isDirectHost)continue;const d=gS(s);d&&(n.includes(d)||(c.hostElement=d,Dk(e,s,c)&&(o=!0)))}return o}function Dk(i,e,t){const{text:n,isDirectHost:o,hostElement:s}=t;let c=!1;return s.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,s),c=!0),(o||e.childCount==1)&&pS(s,t.keepOnFocus)?uS(i,s)&&(c=!0):hS(i,s)&&(c=!0),c}function gS(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Bi{is(){throw new Error("is() method is abstract")}}const Sk=function(i){return Ru(i,4)};class Ni extends fe(Bi){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new B("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=re(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Sk(this);return delete e.parent,e}}Ni.prototype.is=function(i){return i==="node"||i==="view:node"};class tt extends Ni{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof tt&&(this===e||this.data===e.data)}_clone(){return new tt(this.document,this.data)}}tt.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class so extends Bi{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new B("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new B("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}so.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class ao{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=Tk(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const s=Tk(n,o);s&&t.push({element:n,pattern:o,match:s})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Tk(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const s=new Set(o.getAttributeKeys());return Cn(n)?(n.style!==void 0&&V("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&V("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),Ju(n,s,c=>o.getAttribute(c))}(e.attributes,i),!t.attributes)||e.classes&&(t.classes=function(n,o){return Ju(n,o.getClassNames(),()=>{})}(e.classes,i),!t.classes)||e.styles&&(t.styles=function(n,o){return Ju(n,o.getStyleNames(!0),s=>o.getStyle(s))}(e.styles,i),!t.styles)?null:t}function Ju(i,e,t){const n=function(c){return Array.isArray(c)?c.map(d=>Cn(d)?(d.key!==void 0&&d.value!==void 0||V("matcher-pattern-missing-key-or-value",d),[d.key,d.value]):[d,!0]):Cn(c)?Object.entries(c):[[c,!0]]}(i),o=Array.from(e),s=[];if(n.forEach(([c,d])=>{o.forEach(h=>{(function(p,f){return p===!0||p===f||p instanceof RegExp&&f.match(p)})(c,h)&&function(p,f,w){if(p===!0)return!0;const v=w(f);return p===v||p instanceof RegExp&&!!String(v).match(p)}(d,h,t)&&s.push(h)})}),n.length&&!(s.length<n.length))return s}const Hc=function(i){return typeof i=="symbol"||lt(i)&&ln(i)=="[object Symbol]"};var mS=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fS=/^\w*$/;const Xu=function(i,e){if(Yt(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!Hc(i))||fS.test(i)||!mS.test(i)||e!=null&&i in Object(e)};function eh(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],s=t.cache;if(s.has(o))return s.get(o);var c=i.apply(this,n);return t.cache=s.set(o,c)||s,c};return t.cache=new(eh.Cache||yc),t}eh.Cache=yc;const kS=eh,bS=function(i){var e=kS(i,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e};var wS=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_S=/\\(\\)?/g,AS=bS(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(wS,function(t,n,o,s){e.push(o?s.replace(_S,"$1"):n||t)}),e});const CS=AS,vS=function(i,e){for(var t=-1,n=i==null?0:i.length,o=Array(n);++t<n;)o[t]=e(i[t],t,i);return o};var Ik=_e?_e.prototype:void 0,Mk=Ik?Ik.toString:void 0;const yS=function i(e){if(typeof e=="string")return e;if(Yt(e))return vS(e,i)+"";if(Hc(e))return Mk?Mk.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},th=function(i){return i==null?"":yS(i)},Uc=function(i,e){return Yt(i)?i:Xu(i,e)?[i]:CS(th(i))},xS=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0},Or=function(i){if(typeof i=="string"||Hc(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e},nh=function(i,e){for(var t=0,n=(e=Uc(e,i)).length;i!=null&&t<n;)i=i[Or(e[t++])];return t&&t==n?i:void 0},Bk=function(i,e,t){var n=-1,o=i.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(o);++n<o;)s[n]=i[n+e];return s},ES=function(i,e){return e.length<2?i:nh(i,Bk(e,0,-1))},DS=function(i,e){return e=Uc(e,i),(i=ES(i,e))==null||delete i[Or(xS(e))]},SS=function(i,e){return i==null||DS(i,e)},ea=function(i,e,t){var n=i==null?void 0:nh(i,e);return n===void 0?t:n},TS=function(i,e,t,n){if(!Ie(i))return i;for(var o=-1,s=(e=Uc(e,i)).length,c=s-1,d=i;d!=null&&++o<s;){var h=Or(e[o]),p=t;if(h==="__proto__"||h==="constructor"||h==="prototype")return i;if(o!=c){var f=d[h];(p=void 0)==void 0&&(p=Ie(f)?f:Sc(e[o+1])?[]:{})}yu(d,h,p),d=d[h]}return i},IS=function(i,e,t){return i==null?i:TS(i,e,t)};class oh{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=function(n){let o=null,s=0,c=0,d=null;const h=new Map;if(n==="")return h;n.charAt(n.length-1)!=";"&&(n+=";");for(let p=0;p<n.length;p++){const f=n.charAt(p);if(o===null)switch(f){case":":d||(d=n.substr(s,p-s),c=p+1);break;case'"':case"'":o=f;break;case";":{const w=n.substr(c,p-c);d&&h.set(d.trim(),w.trim()),d=null,s=p+1;break}}else f===o&&(o=null)}return h}(e);for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(Ie(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=ih(e);SS(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Ie(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([t])=>t)}clear(){this._styles={}}getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=ea(this._styles,n);o&&!Object.keys(o).length&&this.remove(n)}}class MS{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(Ie(t))rh(n,ih(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:s,value:c}=o(t);rh(n,s,c)}else rh(n,e,t)}getNormalized(e,t){if(!e)return $u({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return ea(t,n);const o=n(e,t);if(o)return o}return ea(t,ih(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const s=this.getNormalized(o,e);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...t,...Object.keys(e)]);return Array.from(n)}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function ih(i){return i.replace("-",".")}function rh(i,e,t){let n=t;Ie(t)&&(n=$u({},ea(i,e),t)),IS(i,e,n)}class vn extends Ni{constructor(e,t,n,o){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(s){const c=yo(s);for(const[d,h]of c)h===null?c.delete(d):typeof h!="string"&&c.set(d,String(h));return c}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");Nk(this._classes,s),this._attrs.delete("class")}this._styles=new oh(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof vn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new ao(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,c){return typeof c=="string"?[new tt(s,c)]:(se(c)||(c=[c]),Array.from(c).map(d=>typeof d=="string"?new tt(s,d):d instanceof so?new tt(s,d.data):d))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?Nk(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of rt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of rt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of rt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Nk(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}vn.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class ta extends vn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=BS}}function BS(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}ta.prototype.is=function(i,e){return e?e===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class $c extends ze(ta){constructor(e,t,n,o){super(e,t,n,o),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",s=>s&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}$c.prototype.is=function(i,e){return e?e===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const Pk=Symbol("rootName");class Ok extends $c{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Pk)}set rootName(e){this._setCustomProperty(Pk,e)}set _name(e){this.name=e}}Ok.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Pi{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new B("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new B("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=he._createAt(e.startPosition):this._position=he._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof tt){if(e.isAtEnd)return this._position=he._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof vn){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new he(o,0);return this._position=e,this._formatReturnValue("elementStart",o,t,e,1)}if(o instanceof tt){if(this.singleCharacters)return e=new he(o,0),this._position=e,this._next();let s,c=o.data.length;return o==this._boundaryEndParent?(c=this.boundaries.end.offset,s=new so(o,0,c),e=he._createAfter(s)):(s=new so(o,0,o.data.length),e.offset++),this._position=e,this._formatReturnValue("text",s,t,e,c)}if(typeof o=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const c=new so(n,e.offset,s);return e.offset+=s,this._position=e,this._formatReturnValue("text",c,t,e,s)}return e=he._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof tt){if(e.isAtStart)return this._position=he._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof vn)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new he(o,o.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof tt){if(this.singleCharacters)return e=new he(o,o.data.length),this._position=e,this._previous();let s,c=o.data.length;if(o==this._boundaryStartParent){const d=this.boundaries.start.offset;s=new so(o,d,o.data.length-d),c=s.data.length,e=he._createBefore(s)}else s=new so(o,0,o.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",s,t,e,c)}if(typeof o=="string"){let s;if(this.singleCharacters)s=1;else{const d=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=e.offset-d}e.offset-=s;const c=new so(n,e.offset,s);return this._position=e,this._formatReturnValue("text",c,t,e,s)}return e=he._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,s){return t instanceof so&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=he._createAfter(t.textNode):(o=he._createAfter(t.textNode),this._position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=he._createBefore(t.textNode):(o=he._createBefore(t.textNode),this._position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:s}}}}class he extends Bi{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof $c);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=he._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Pi(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=re(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Pi(e)}clone(){return new he(this.parent,this.offset)}static _createAt(e,t){if(e instanceof he)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new B("view-createpositionat-offset-required",n)}return new he(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new he(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new B("view-position-after-root",e,{root:e});return new he(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new he(e.textNode,e.offsetInText);if(!e.parent)throw new B("view-position-before-root",e,{root:e});return new he(e.parent,e.index)}}he.prototype.is=function(i){return i==="position"||i==="view:position"};class De extends Bi{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Pi({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(qc,{direction:"backward"}),t=this.end.getLastMatchingPosition(qc);return e.parent.is("$text")&&e.isAtStart&&(e=he._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=he._createAfter(t.parent)),new De(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(qc);if(e.isAfter(this.end)||e.isEqual(this.end))return new De(e,e);let t=this.end.getLastMatchingPosition(qc,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new he(n,0)),o&&o.is("$text")&&(t=new he(o,o.data.length)),new De(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new De(this.start,e.start)),this.containsPosition(e.end)&&t.push(new De(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new De(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Pi(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new De(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Pi(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Pi(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new he(e,t),new he(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(he._createBefore(e),t)}}function qc(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}De.prototype.is=function(i){return i==="range"||i==="view:range"};class Kn extends fe(Bi){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=ge(this.getRanges());if(t!=ge(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(o);else if(t instanceof Kn||t instanceof sh)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof De)this._setRanges([t],o&&o.backward),this._setFakeOptions(o);else if(t instanceof he)this._setRanges([new De(t)]),this._setFakeOptions(o);else if(t instanceof Ni){const s=!!o&&!!o.backward;let c;if(n===void 0)throw new B("view-selection-setto-required-second-parameter",this);c=n=="in"?De._createIn(t):n=="on"?De._createOn(t):new De(he._createAt(t,n)),this._setRanges([c],s),this._setFakeOptions(o)}else{if(!se(t))throw new B("view-selection-setto-not-selectable",this);this._setRanges(t,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new B("view-selection-setfocus-no-ranges",this);const n=he._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new De(n,o),!0):this._addRange(new De(o,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof De))throw new B("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new B("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new De(e.start,e.end))}}Kn.prototype.is=function(i){return i==="selection"||i==="view:selection"};class sh extends fe(Bi){constructor(...e){super(),this._selection=new Kn,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}sh.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class Lr extends F{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const ah=Symbol("bubbling contexts");function ch(i){return class extends i{fire(e,...t){try{const n=e instanceof F?e:new F(this,e),o=lh(this);if(!o.size)return;if(na(n,"capturing",this),Rr(o,"$capture",n,...t))return n.return;const s=n.startRange||this.selection.getFirstRange(),c=s?s.getContainedElement():null,d=!!c&&!!Lk(o,c);let h=c||function(p){if(!p)return null;const f=p.start.parent,w=p.end.parent,v=f.getPath(),E=w.getPath();return v.length>E.length?f:w}(s);if(na(n,"atTarget",h),!d){if(Rr(o,"$text",n,...t))return n.return;na(n,"bubbling",h)}for(;h;){if(h.is("rootElement")){if(Rr(o,"$root",n,...t))return n.return}else if(h.is("element")&&Rr(o,h.name,n,...t))return n.return;if(Rr(o,h,n,...t))return n.return;h=h.parent,na(n,"bubbling",h)}return na(n,"bubbling",this),Rr(o,"$document",n,...t),n.return}catch(n){B.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const o=rt(n.context||"$document"),s=lh(this);for(const c of o){let d=s.get(c);d||(d=new(fe()),s.set(c,d)),this.listenTo(d,e,t,n)}}_removeEventListener(e,t){const n=lh(this);for(const o of n.values())this.stopListening(o,e,t)}}}{const i=ch(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{ch[e]=i.prototype[e]})}function na(i,e,t){i instanceof Lr&&(i._eventPhase=e,i._currentTarget=t)}function Rr(i,e,t,...n){const o=typeof e=="string"?i.get(e):Lk(i,e);return!!o&&(o.fire(t,...n),t.stop.called)}function Lk(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function lh(i){return i[ah]||(i[ah]=new Map),i[ah]}class Gc extends ch(ze()){constructor(e){super(),this._postFixers=new Set,this.selection=new sh,this.roots=new Gn({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.forEach(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class dh extends vn{constructor(e,t,n,o){super(e,t,n,o),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=NS}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new B("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}dh.DEFAULT_PRIORITY=10;const oa=dh;function NS(){if(uh(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(uh(i)>1)return null;i=i.parent}return!i||uh(i)>1?null:this.childCount}function uh(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}dh.prototype.is=function(i,e){return e?e===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class hh extends vn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=PS}_insertChild(e,t){if(t&&(t instanceof Ni||Array.from(t).length>0))throw new B("view-emptyelement-cannot-add",[this,t]);return 0}}function PS(){return null}hh.prototype.is=function(i,e){return e?e===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Wc extends vn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=LS}_insertChild(e,t){if(t&&(t instanceof Ni||Array.from(t).length>0))throw new B("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function OS(i){i.document.on("arrowKey",(e,t)=>function(n,o,s){if(o.keyCode==Ue.arrowright){const c=o.domTarget.ownerDocument.defaultView.getSelection(),d=c.rangeCount==1&&c.getRangeAt(0).collapsed;if(d||o.shiftKey){const h=c.focusNode,p=c.focusOffset,f=s.domPositionToView(h,p);if(f===null)return;let w=!1;const v=f.getLastMatchingPosition(E=>(E.item.is("uiElement")&&(w=!0),!(!E.item.is("uiElement")&&!E.item.is("attributeElement"))));if(w){const E=s.viewPositionToDom(v);d?c.collapse(E.parent,E.offset):c.extend(E.parent,E.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function LS(){return null}Wc.prototype.is=function(i,e){return e?e===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class ph extends vn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=RS}_insertChild(e,t){if(t&&(t instanceof Ni||Array.from(t).length>0))throw new B("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function RS(){return null}ph.prototype.is=function(i,e){return e?e===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Oi extends fe(Bi){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,c){return typeof c=="string"?[new tt(s,c)]:(se(c)||(c=[c]),Array.from(c).map(d=>typeof d=="string"?new tt(s,d):d instanceof so?new tt(s,d.data):d))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Oi.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class Rk{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Oi(this.document,e)}createText(e){return new tt(this.document,e)}createAttributeElement(e,t,n={}){const o=new oa(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let s=null;Cn(n)?o=n:s=n;const c=new ta(this.document,e,t,s);return o.renderUnsafeAttributes&&c._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),c}createEditableElement(e,t,n={}){const o=new $c(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new hh(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new Wc(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const s=new ph(this.document,e,t);return n&&(s.render=n),o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Cn(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof he?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new B("view-writer-break-non-container-element",this.document);if(!t.parent)throw new B("view-writer-break-root",this.document);if(e.isAtStart)return he._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(he._createAfter(t),n);const o=new De(e,he._createAt(t,"end")),s=new he(n,0);this.move(o,s)}return he._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const c=n.parent,d=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new he(c,d))}const o=n.getChild(t-1),s=n.getChild(t);if(!o||!s)return e;if(o.is("$text")&&s.is("$text"))return jk(o,s);if(o.is("attributeElement")&&s.is("attributeElement")&&o.isSimilar(s)){const c=o.childCount;return o._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new he(o,c))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new B("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),s=o instanceof tt?he._createAt(o,"end"):he._createAt(t,"end");return this.move(De._createIn(n),he._createAt(t,"end")),this.remove(De._createOn(n)),s}insert(e,t){Fk(t=se(t)?[...t]:[t],this.document);const n=t.reduce((c,d)=>{const h=c[c.length-1],p=!d.is("uiElement");return h&&h.breakAttributes==p?h.nodes.push(d):c.push({breakAttributes:p,nodes:[d]}),c},[]);let o=null,s=e;for(const{nodes:c,breakAttributes:d}of n){const h=this._insertNodes(s,c,d);o||(o=h.start),s=h.end}return o?new De(o,s):new De(e)}remove(e){const t=e instanceof De?e:De._createOn(e);if(ia(t,this.document),t.isCollapsed)return new Oi(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),s=n.parent,c=o.offset-n.offset,d=s._removeChildren(n.offset,c);for(const p of d)this._removeFromClonedElementsGroup(p);const h=this.mergeAttributes(n);return t.start=h,t.end=h.clone(),new Oi(this.document,d)}clear(e,t){ia(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const s=o.item;let c;if(s.is("element")&&t.isSimilar(s))c=De._createOn(s);else if(!o.nextPosition.isAfter(e.start)&&s.is("$textProxy")){const d=s.getAncestors().find(h=>h.is("element")&&t.isSimilar(h));d&&(c=De._createIn(d))}c&&(c.end.isAfter(e.end)&&(c.end=e.end),c.start.isBefore(e.start)&&(c.start=e.start),this.remove(c))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,s=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-s}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof oa))throw new B("view-writer-wrap-invalid-attribute",this.document);if(ia(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(c=>!c.is("uiElement")))&&(o=o.getLastMatchingPosition(c=>c.item.is("uiElement"))),o=this._wrapPosition(o,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new De(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof oa))throw new B("view-writer-unwrap-invalid-attribute",this.document);if(ia(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,c=this._unwrapChildren(s,n.offset,o.offset,t),d=this.mergeAttributes(c.start);d.isEqual(c.start)||c.end.offset--;const h=this.mergeAttributes(c.end);return new De(d,h)}rename(e,t){const n=new ta(this.document,e,t.getAttributes());return this.insert(he._createAfter(t),n),this.move(De._createIn(t),he._createAt(n,0)),this.remove(De._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return he._createAt(e,t)}createPositionAfter(e){return he._createAfter(e)}createPositionBefore(e){return he._createBefore(e)}createRange(e,t){return new De(e,t)}createRangeOn(e){return De._createOn(e)}createRangeIn(e){return De._createIn(e)}createSelection(...e){return new Kn(...e)}createSlot(e="children"){if(!this._slotFactory)throw new B("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,s;if(o=n?gh(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new B("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(e,!0):e.parent.is("$text")?mh(e):e;const c=o._insertChild(s.offset,t);for(const f of t)this._addToClonedElementsGroup(f);const d=s.getShiftedBy(c),h=this.mergeAttributes(s);h.isEqual(s)||d.offset--;const p=this.mergeAttributes(d);return new De(h,p)}_wrapChildren(e,t,n,o){let s=t;const c=[];for(;s<n;){const h=e.getChild(s),p=h.is("$text"),f=h.is("attributeElement");if(f&&this._wrapAttributeElement(o,h))c.push(new he(e,s));else if(p||!f||zS(o,h)){const w=o._clone();h._remove(),w._appendChild(h),e._insertChild(s,w),this._addToClonedElementsGroup(w),c.push(new he(e,s))}else this._wrapChildren(h,0,h.childCount,o);s++}let d=0;for(const h of c)h.offset-=d,h.offset!=t&&(this.mergeAttributes(h).isEqual(h)||(d++,n--));return De._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let s=t;const c=[];for(;s<n;){const h=e.getChild(s);if(h.is("attributeElement"))if(h.isSimilar(o)){const p=h.getChildren(),f=h.childCount;h._remove(),e._insertChild(s,p),this._removeFromClonedElementsGroup(h),c.push(new he(e,s),new he(e,s+f)),s+=f,n+=f-1}else this._unwrapAttributeElement(o,h)?(c.push(new he(e,s),new he(e,s+1)),s++):(this._unwrapChildren(h,0,h.childCount,o),s++);else s++}let d=0;for(const h of c)h.offset-=d,!(h.offset==t||h.offset==n)&&(this.mergeAttributes(h).isEqual(h)||(d++,n--));return De._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,c=this._wrapChildren(s,n.offset,o.offset,t),d=this.mergeAttributes(c.start);d.isEqual(c.start)||c.end.offset--;const h=this.mergeAttributes(c.end);return new De(d,h)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return zk(e.clone());e.parent.is("$text")&&(e=mh(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new De(e,e.getShiftedBy(1));this.wrap(o,t);const s=new he(n.parent,n.index);n._remove();const c=s.nodeBefore,d=s.nodeAfter;return c instanceof tt&&d instanceof tt?jk(c,d):zk(s)}_wrapAttributeElement(e,t){if(!Vk(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Vk(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(ia(e,this.document),e.isCollapsed){const h=this._breakAttributes(e.start,t);return new De(h,h)}const s=this._breakAttributes(o,t),c=s.parent.childCount,d=this._breakAttributes(n,t);return s.offset+=s.parent.childCount-c,new De(d,s)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new B("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new B("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new B("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&fh(o.parent)||fh(o))return e.clone();if(o.is("$text"))return this._breakAttributes(mh(e),t);if(n==o.childCount){const s=new he(o.parent,o.index+1);return this._breakAttributes(s,t)}if(n===0){const s=new he(o.parent,o.index);return this._breakAttributes(s,t)}{const s=o.index+1,c=o._clone();o.parent._insertChild(s,c),this._addToClonedElementsGroup(c);const d=o.childCount-n,h=o._removeChildren(n,d);c._appendChild(h);const p=new he(o.parent,s);return this._breakAttributes(p,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function gh(i){let e=i.parent;for(;!fh(e);){if(!e)return;e=e.parent}return e}function zS(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function zk(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new he(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new he(t,0):i}function mh(i){if(i.offset==i.parent.data.length)return new he(i.parent.parent,i.parent.index+1);if(i.offset===0)return new he(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new tt(i.root.document,e)),new he(i.parent.parent,i.parent.index+1)}function jk(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new he(i,t)}const jS=[tt,oa,ta,hh,ph,Wc];function Fk(i,e){for(const t of i){if(!jS.some(n=>t instanceof n))throw new B("view-writer-insert-invalid-node-type",e);t.is("$text")||Fk(t.getChildren(),e)}}function fh(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function ia(i,e){const t=gh(i.start),n=gh(i.end);if(!t||!n||t!==n)throw new B("view-writer-invalid-range-container",e)}function Vk(i,e){return i.id===null&&e.id===null}const Hk=i=>i.createTextNode(" "),Uk=i=>{const e=i.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},$k=i=>{const e=i.createElement("br");return e.dataset.ckeFiller="true",e},Yn=7,ra="⁠".repeat(Yn);function yn(i){return typeof i=="string"?i.substr(0,Yn)===ra:Ct(i)&&i.data.substr(0,Yn)===ra}function zr(i){return i.data.length==Yn&&yn(i)}function qk(i){const e=typeof i=="string"?i:i.data;return yn(i)?e.slice(Yn):e}function FS(i,e){if(e.keyCode==Ue.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;yn(n)&&o<=Yn&&t.collapse(n,0)}}}var Gk=g(7526),VS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(Gk.A,VS),Gk.A.locals;class HS extends ze(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),C.isBlink&&!C.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new B("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!C.isAndroid)return;let e=null;const t=!(C.isBlink&&!C.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=he._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;yn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Wk(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.childNodes),o=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),s=this._diffNodeLists(n,o),c=this._findUpdateActions(s,n,o,US);if(c.indexOf("update")!==-1){const d={equal:0,insert:0,delete:0};for(const h of c)if(h==="update"){const p=d.equal+d.insert,f=d.equal+d.delete,w=e.getChild(p);!w||w.is("uiElement")||w.is("rawElement")||this._updateElementMappings(w,n[f]),Yf(o[p]),d.equal++}else d[h]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?he._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Ct(t.parent)&&yn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!yn(e))throw new B("view-renderer-filler-was-lost",this);zr(e)?e.remove():e.data=e.data.substr(Yn),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(c){if(c.getAttribute("contenteditable")=="false")return!1;const d=c.findAncestor(h=>h.hasAttribute("contenteditable"));return!d||d.getAttribute("contenteditable")=="true"}(t))return!1;const o=e.nodeBefore,s=e.nodeAfter;return!(o instanceof tt||s instanceof tt)&&!!(n!==t.getFillerOffset()||o&&o.is("element","br"))&&(!C.isAndroid||!o&&!s)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let o=this.domConverter.viewToDom(e).data;const s=t.inlineFillerPosition;s&&s.parent==e.parent&&s.offset==e.index&&(o=ra+o),Kk(n,o)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(s=>s.name),o=e.getAttributeKeys();for(const s of o)this.domConverter.setDomElementAttribute(t,s,e.getAttribute(s),e);for(const s of n)e.hasAttribute(s)||this.domConverter.removeDomElementAttribute(t,s)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(C.isAndroid){let w=null;for(const v of Array.from(n.childNodes)){if(w&&Ct(w)&&Ct(v)){n.normalize();break}w=v}}const o=t.inlineFillerPosition,s=n.childNodes,c=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&Wk(n.ownerDocument,c,o.offset);const d=this._diffNodeLists(s,c),h=this._findUpdateActions(d,s,c,$S);let p=0;const f=new Set;for(const w of h)w==="delete"?(f.add(s[p]),Yf(s[p])):w!=="equal"&&w!=="update"||p++;p=0;for(const w of h)w==="insert"?(Gf(n,p,c[p]),p++):w==="update"?(Kk(s[p],c[p].data),p++):w==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(c[p])),p++);for(const w of f)w.parentNode||this.domConverter.unbindDomElement(w)}_diffNodeLists(e,t){return e=function(n,o){const s=Array.from(n);return s.length==0||!o||s[s.length-1]==o&&s.pop(),s}(e,this._fakeSelectionContainer),M(e,t,qS.bind(null,this.domConverter))}_findUpdateActions(e,t,n,o){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let s=[],c=[],d=[];const h={equal:0,insert:0,delete:0};for(const p of e)p==="insert"?d.push(n[h.equal+h.insert]):p==="delete"?c.push(t[h.equal+h.delete]):(s=s.concat(M(c,d,o).map(f=>f==="equal"?"update":f)),s.push("equal"),c=[],d=[]),h[p]++;return s.concat(M(c,d,o).map(p=>p==="equal"?"update":p))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(C.isBlink&&!C.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&C.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(c){const d=c.createElement("div");return d.className="ck-fake-selection-container",Object.assign(d.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),d.textContent=" ",d}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const o=t.getSelection(),s=t.createRange();o.removeAllRanges(),s.selectNodeContents(n),o.addRange(s)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(n.parent,n.offset,o.parent,o.offset),C.isGecko&&function(s,c){let d=s.parent,h=s.offset;if(Ct(d)&&zr(d)&&(h=Qs(d)+1,d=d.parentNode),d.nodeType!=Node.ELEMENT_NODE||h!=d.childNodes.length-1)return;const p=d.childNodes[h];p&&p.tagName=="BR"&&c.addRange(c.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Wk(i,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(Ct(o))return o.data=ra+o.data,o;{const s=i.createTextNode(ra);return Array.isArray(e)?n.splice(t,0,s):Gf(e,t,s),s}}function US(i,e){return Qo(i)&&Qo(e)&&!Ct(i)&&!Ct(e)&&!Zs(i)&&!Zs(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function $S(i,e){return Qo(i)&&Qo(e)&&Ct(i)&&Ct(e)}function qS(i,e,t){return e===t||(Ct(e)&&Ct(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}function Kk(i,e){const t=i.data;if(t==e)return;const n=A(t,e);for(const o of n)o.type==="insert"?i.insertData(o.index,o.values.join("")):i.deleteData(o.index,o.howMany)}const GS=$k(_.document),WS=Hk(_.document),KS=Uk(_.document),Kc="data-ck-unsafe-attribute-",Yk="data-ck-unsafe-element";class Yc{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new ao,this._inlineObjectElementMatcher=new ao,this._elementsWithTemporaryCustomProperties=new Set,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?_.document:_.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Kn(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)o.appendChild(s[0]);const c=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),d=[];let h;for(;h=c.nextNode();)d.push(h);for(const p of d){for(const w of p.getAttributeNames())this.setDomElementAttribute(p,w,p.getAttribute(w));const f=p.tagName.toLowerCase();this._shouldRenameElement(f)&&(Jk(f),p.replaceWith(this._createReplacementDomElement(f,p)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{const n=e;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let o;if(n.is("documentFragment"))o=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(o,n);else{if(n.is("uiElement"))return o=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),t.bind&&this.bindElements(o,n),o;this._shouldRenameElement(n.name)?(Jk(n.name),o=this._createReplacementDomElement(n.name)):o=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(o,this),t.bind&&this.bindElements(o,n);for(const s of n.getAttributeKeys())this.setDomElementAttribute(o,s,n.getAttribute(s),n)}if(t.withChildren!==!1)for(const s of this.viewChildrenToDom(n,t))o instanceof HTMLTemplateElement?o.content.appendChild(s):o.appendChild(s);return o}}setDomElementAttribute(e,t,n,o){const s=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);s||V("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),function(c){try{_.document.createAttribute(c)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!s?e.removeAttribute(t):e.hasAttribute(Kc+t)&&s&&e.removeAttribute(Kc+t),e.setAttribute(s?t:Kc+t,n)):V("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n})}removeDomElementAttribute(e,t){t!=Yk&&(e.removeAttribute(t),e.removeAttribute(Kc+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const s of e.getChildren()){n===o&&(yield this._getBlockFiller());const c=s.is("element")&&!!s.getCustomProperty("dataPipeline:transparentRendering")&&!Vt(s.getAttributes());c&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t):(c&&V("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return yn(n)&&(o+=Yn),{parent:n,offset:o}}{let n,o,s;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;s=n.childNodes[0]}else{const c=e.nodeBefore;if(o=c.is("$text")?this.findCorrespondingDomText(c):this.mapViewToDom(c),!o)return null;n=o.parentNode,s=o.nextSibling}return Ct(s)&&yn(s)?{parent:s,offset:Yn}:{parent:n,offset:o?Qs(o)+1:0}}}domToView(e,t={}){const n=[],o=this._domToView(e,t,n),s=o.next().value;return s?(o.next(),this._processDomInlineNodes(null,n,t),s.is("$text")&&s.data.length==0?null:s):null}*domChildrenToView(e,t={},n=[]){let o=[];o=e instanceof HTMLTemplateElement?[...e.content.childNodes]:[...e.childNodes];for(let s=0;s<o.length;s++){const c=o[s],d=this._domToView(c,t,n),h=d.next().value;h!==null&&(this._isBlockViewElement(h)&&this._processDomInlineNodes(e,n,t),yield h,d.next())}this._processDomInlineNodes(e,n,t)}domSelectionToView(e){if(function(o){if(!C.isGecko||!o.rangeCount)return!1;const s=o.getRangeAt(0).startContainer;try{Object.prototype.toString.call(s)}catch{return!0}return!1}(e))return new Kn([]);if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;Ct(o)&&(o=o.parentNode);const s=this.fakeSelectionToView(o);if(s)return s}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const s=e.getRangeAt(o),c=this.domRangeToView(s);c&&n.push(c)}return new Kn(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new De(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Qs(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return he._createBefore(n);if(Ct(e)){if(zr(e))return this.domPositionToView(e.parentNode,Qs(e));const o=this.findCorrespondingViewText(e);let s=t;return o?(yn(e)&&(s-=Yn,s=s<0?0:s),new he(o,s)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new he(o,0)}else{const o=e.childNodes[t-1];if(Ct(o)&&zr(o)||o&&this.isBlockFiller(o))return this.domPositionToView(o.parentNode,Qs(o));const s=Ct(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(s&&s.parent)return new he(s.parent,s.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(zr(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const s=o.nextSibling;return s instanceof tt?s:null}}else{const o=this.mapDomToView(e.parentNode);if(o){const s=o.getChild(0);return s instanceof tt?s:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=_.window,s=[];Qk(t,c=>{const{scrollLeft:d,scrollTop:h}=c;s.push([d,h])}),t.focus(),Qk(t,c=>{const[d,h]=s.shift();c.scrollLeft=d,c.scrollTop=h}),_.window.scrollTo(n,o)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(t);n&&n.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(GS):!(e.tagName!=="BR"||!Zk(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(KS)||function(t,n){return t.isEqualNode(WS)&&Zk(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=function(n){const o=[];let s=n;for(;s&&s.nodeType!=Node.DOCUMENT_NODE;)o.unshift(s),s=s.parentNode;return o}(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_clearTemporaryCustomProperties(){for(const e of this._elementsWithTemporaryCustomProperties)e._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Hk(this._domDocument);case"markedNbsp":return Uk(this._domDocument);case"br":return $k(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Ct(e)&&yn(e)&&t<Yn||this.isElement(e)&&yn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(e,t,n){if(this.isBlockFiller(e))return null;const o=this.getHostViewElement(e);if(o)return o;if(Zs(e)&&t.skipComments)return null;if(Ct(e)){if(zr(e))return null;{const s=e.data;if(s==="")return null;const c=new tt(this.document,s);return n.push(c),c}}{let s=this.mapDomToView(e);if(s)return this._isInlineObjectElement(s)&&n.push(s),s;if(this.isDocumentFragment(e))s=new Oi(this.document),t.bind&&this.bindDocumentFragments(e,s);else{s=this._createViewElement(e,t),t.bind&&this.bindElements(e,s);const d=e.attributes;if(d)for(let h=d.length,p=0;p<h;p++)s._setAttribute(d[p].name,d[p].value);if(this._isViewElementWithRawContent(s,t))return s._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(s)||n.push(s),s;if(Zs(e))return s._setCustomProperty("$rawContent",e.data),s}yield s;const c=[];if(t.withChildren!==!1)for(const d of this.domChildrenToView(e,t,c))s._appendChild(d);if(this._isInlineObjectElement(s))n.push(s);else for(const d of c)n.push(d)}}_processDomInlineNodes(e,t,n){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let o=!1;for(let s=0;s<t.length;s++){const c=t[s];if(!c.is("$text")){o=!1;continue}let d,h=!1;if(YS(c,this.preElements))d=qk(c.data);else{d=c.data.replace(/[ \n\t\r]{1,}/g," "),h=/[^\S\u00A0]/.test(d.charAt(d.length-1));const p=s>0?t[s-1]:null,f=s+1<t.length?t[s+1]:null,w=!p||p.is("element")&&p.name=="br"||o,v=!f&&!yn(c.data);n.withChildren!==!1&&(w&&(d=d.replace(/^ /,"")),v&&(d=d.replace(/ $/,""))),d=qk(d),d=d.replace(/ \u00A0/g,"  ");const E=f&&f.is("element")&&f.name!="br",S=f&&f.is("$text")&&f.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(d)||!f||E||S)&&(d=d.replace(/\u00A0$/," ")),(w||p&&p.is("element")&&p.name!="br")&&(d=d.replace(/^\u00A0/," "))}d.length==0&&c.parent?(c._remove(),t.splice(s,1),s--):(c._data=d,o=h)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const n=new Pi({startPosition:t?he._createAfter(e):he._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element","br"))return null;if(this._isInlineObjectElement(o.item))return o.item;if(o.item.is("containerElement"))return null;if(o.item.is("$textProxy"))return o.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(Zs(e))return new Wc(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new vn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Yk,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function YS(i,e){return i.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function Qk(i,e){let t=i;for(;t;)e(t),t=t.parentElement}function Zk(i,e){const t=i.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Jk(i){i==="script"&&V("domconverter-unsafe-script-element-detected"),i==="style"&&V("domconverter-unsafe-style-element-detected")}class co extends On(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Xk=rk(function(i,e){Tr(e,Mr(e),i)});class jr{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Xk(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Jo extends co{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new jr(this.view,t,n))}}class QS extends Jo{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Nr(this)}};this.fire(e.type,e,t)}}const kh=function(){return we.Date.now()};var ZS=/\s/;const JS=function(i){for(var e=i.length;e--&&ZS.test(i.charAt(e)););return e};var XS=/^\s+/;const eT=function(i){return i&&i.slice(0,JS(i)+1).replace(XS,"")};var tT=/^[-+]0x[0-9a-f]+$/i,nT=/^0b[01]+$/i,oT=/^0o[0-7]+$/i,iT=parseInt;const eb=function(i){if(typeof i=="number")return i;if(Hc(i))return NaN;if(Ie(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=Ie(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=eT(i);var t=nT.test(i);return t||oT.test(i)?iT(i.slice(2),t?2:8):tT.test(i)?NaN:+i};var rT=Math.max,sT=Math.min;const Fr=function(i,e,t){var n,o,s,c,d,h,p=0,f=!1,w=!1,v=!0;if(typeof i!="function")throw new TypeError("Expected a function");function E(H){var G=n,X=o;return n=o=void 0,p=H,c=i.apply(X,G)}function S(H){var G=H-h;return h===void 0||G>=e||G<0||w&&H-p>=s}function I(){var H=kh();if(S(H))return N(H);d=setTimeout(I,function(G){var X=e-(G-h);return w?sT(X,s-(G-p)):X}(H))}function N(H){return d=void 0,v&&n?E(H):(n=o=void 0,c)}function L(){var H=kh(),G=S(H);if(n=arguments,o=this,h=H,G){if(d===void 0)return function(X){return p=X,d=setTimeout(I,e),f?E(X):c}(h);if(w)return clearTimeout(d),d=setTimeout(I,e),E(h)}return d===void 0&&(d=setTimeout(I,e)),c}return e=eb(e)||0,Ie(t)&&(f=!!t.leading,s=(w="maxWait"in t)?rT(eb(t.maxWait)||0,e):s,v="trailing"in t?!!t.trailing:v),L.cancel=function(){d!==void 0&&clearTimeout(d),p=0,n=h=o=d=void 0},L.flush=function(){return d===void 0?c:N(kh())},L};class aT extends co{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Fr(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Kn(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Ue.arrowleft&&e!=Ue.arrowup||n.setTo(n.getFirstPosition()),e!=Ue.arrowright&&e!=Ue.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}const cT=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},lT=function(i){return this.__data__.has(i)};function Qc(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new yc;++e<t;)this.add(i[e])}Qc.prototype.add=Qc.prototype.push=cT,Qc.prototype.has=lT;const dT=Qc,uT=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1},hT=function(i,e){return i.has(e)},tb=function(i,e,t,n,o,s){var c=1&t,d=i.length,h=e.length;if(d!=h&&!(c&&h>d))return!1;var p=s.get(i),f=s.get(e);if(p&&f)return p==e&&f==i;var w=-1,v=!0,E=2&t?new dT:void 0;for(s.set(i,e),s.set(e,i);++w<d;){var S=i[w],I=e[w];if(n)var N=c?n(I,S,w,e,i,s):n(S,I,w,i,e,s);if(N!==void 0){if(N)continue;v=!1;break}if(E){if(!uT(e,function(L,H){if(!hT(E,H)&&(S===L||o(S,L,t,n,s)))return E.push(H)})){v=!1;break}}else if(S!==I&&!o(S,I,t,n,s)){v=!1;break}}return s.delete(i),s.delete(e),v},pT=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n,o){t[++e]=[o,n]}),t},gT=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t};var nb=_e?_e.prototype:void 0,bh=nb?nb.valueOf:void 0;const mT=function(i,e,t,n,o,s,c){switch(t){case"[object DataView]":if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=e.byteLength||!s(new Ic(i),new Ic(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Us(+i,+e);case"[object Error]":return i.name==e.name&&i.message==e.message;case"[object RegExp]":case"[object String]":return i==e+"";case"[object Map]":var d=pT;case"[object Set]":var h=1&n;if(d||(d=gT),i.size!=e.size&&!h)return!1;var p=c.get(i);if(p)return p==e;n|=2,c.set(i,e);var f=tb(d(i),d(e),n,o,s,c);return c.delete(i),f;case"[object Symbol]":if(bh)return bh.call(i)==bh.call(e)}return!1};var fT=Object.prototype.hasOwnProperty;const kT=function(i,e,t,n,o,s){var c=1&t,d=Mu(i),h=d.length;if(h!=Mu(e).length&&!c)return!1;for(var p=h;p--;){var f=d[p];if(!(c?f in e:fT.call(e,f)))return!1}var w=s.get(i),v=s.get(e);if(w&&v)return w==e&&v==i;var E=!0;s.set(i,e),s.set(e,i);for(var S=c;++p<h;){var I=i[f=d[p]],N=e[f];if(n)var L=c?n(N,I,f,e,i,s):n(I,N,f,i,e,s);if(!(L===void 0?I===N||o(I,N,t,n,s):L)){E=!1;break}S||(S=f=="constructor")}if(E&&!S){var H=i.constructor,G=e.constructor;H==G||!("constructor"in i)||!("constructor"in e)||typeof H=="function"&&H instanceof H&&typeof G=="function"&&G instanceof G||(E=!1)}return s.delete(i),s.delete(e),E};var ob="[object Arguments]",ib="[object Array]",Zc="[object Object]",rb=Object.prototype.hasOwnProperty;const bT=function(i,e,t,n,o,s){var c=Yt(i),d=Yt(e),h=c?ib:Ys(i),p=d?ib:Ys(e),f=(h=h==ob?Zc:h)==Zc,w=(p=p==ob?Zc:p)==Zc,v=h==p;if(v&&Gs(i)){if(!Gs(e))return!1;c=!0,f=!1}if(v&&!f)return s||(s=new Sr),c||Su(i)?tb(i,e,t,n,o,s):mT(i,e,h,t,n,o,s);if(!(1&t)){var E=f&&rb.call(i,"__wrapped__"),S=w&&rb.call(e,"__wrapped__");if(E||S){var I=E?i.value():i,N=S?e.value():e;return s||(s=new Sr),o(I,N,t,n,s)}}return!!v&&(s||(s=new Sr),kT(i,e,t,n,o,s))},Jc=function i(e,t,n,o,s){return e===t||(e==null||t==null||!lt(e)&&!lt(t)?e!=e&&t!=t:bT(e,t,n,o,i,s))},wT=function(i,e,t){var n=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return n===void 0?Jc(i,e,void 0,t):!!n};class sb extends co{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,o=new Set;for(const c of e){const d=t.mapDomToView(c.target);d&&(d.is("uiElement")||d.is("rawElement")||c.type!=="childList"||this._isBogusBrMutation(c)||o.add(d))}for(const c of e){const d=t.mapDomToView(c.target);if((!d||!d.is("uiElement")&&!d.is("rawElement"))&&c.type==="characterData"){const h=t.findCorrespondingViewText(c.target);h&&!o.has(h.parent)?n.add(h):!h&&yn(c.target)&&o.add(t.mapDomToView(c.target.parentNode))}}let s=!1;for(const c of n)s=!0,this.renderer.markToSync("text",c);for(const c of o){const d=t.mapViewToDom(c),h=Array.from(c.getChildren()),p=Array.from(t.domChildrenToView(d,{withChildren:!1}));wT(h,p,_T)||(s=!0,this.renderer.markToSync("children",c))}s&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function _T(i,e){if(!Array.isArray(i))return i===e||!(!i.is("$text")||!e.is("$text"))&&i.data===e.data}class Xc extends Jo{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,o)=>{const s=t.selection.editableElement;s!==null&&s!==o.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class AT extends co{constructor(e){super(e),this.mutationObserver=e.getObserver(sb),this.focusObserver=e.getObserver(Xc),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Fr(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Fr(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(o,s)=>{this.document.isComposing&&!C.isAndroid||(this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(o)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(o))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class CT extends Jo{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class ab{constructor(e,t={}){this._files=t.cacheFiles?cb(e):null,this._native=e}get files(){return this._files||(this._files=cb(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function cb(i){const e=Array.from(i.files||[]),t=Array.from(i.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class vT extends Jo{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,o=n.document;let s=null,c=null,d=[];if(e.dataTransfer&&(s=new ab(e.dataTransfer)),e.data!==null?c=e.data:s&&(c=s.getData("text/plain")),o.selection.isFake)d=Array.from(o.selection.getRanges());else if(t.length)d=t.map(h=>{const p=n.domConverter.domPositionToView(h.startContainer,h.startOffset),f=n.domConverter.domPositionToView(h.endContainer,h.endOffset);return p?n.createRange(p,f):f?n.createRange(f):void 0}).filter(h=>!!h);else if(C.isAndroid){const h=e.target.ownerDocument.defaultView.getSelection();d=Array.from(n.domConverter.domSelectionToView(h).getRanges())}if(C.isAndroid&&e.inputType=="insertCompositionText"&&c&&c.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(d[0].end)]});else if(e.inputType=="insertText"&&c&&c.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:o.to(s=>s.preventDefault())}}]})}}function $w(i,e,t){return(n,o)=>{const s=new Ve(i);if(s.width<L4||s.height<O4)return null;let c;c=e.position==="inside"?s.bottom-o.height:s.bottom-o.height/2,c-=e.verticalOffset;const d=t(s,o),h=n.clone().moveTo(d,c).getIntersection(o.clone().moveTo(d,c)).getVisible();return!h||h.getArea()<o.getArea()?null:{top:c,left:d,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function qw(i){const e=i.config.get("ui.poweredBy"),t=e&&e.position||"border";return{position:t,label:R4,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:i.locale.contentLanguageDirection==="ltr"?"right":"left",...e}}var Gw=g(1587),F4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(Gw.A,F4),Gw.A.locals;const Ww={POLITE:"polite",ASSERTIVE:"assertive"};class V4{constructor(e){this.editor=e,e.once("ready",()=>{for(const t of Object.values(Ww))this.announce("",t)})}announce(e,t=Ww.POLITE){const n=this.editor;if(!n.ui.view)return;this.view||(this.view=new H4(n.locale),n.ui.view.body.add(this.view));const{politeness:o,isUnsafeHTML:s}=typeof t=="string"?{politeness:t}:t;let c=this.view.regionViews.find(d=>d.politeness===o);c||(c=new U4(n,o),this.view.regionViews.add(c)),c.announce({announcement:e,isUnsafeHTML:s})}}class H4 extends ve{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class U4 extends ve{constructor(e,t){super(e.locale),this.setTemplate({tag:"div",attributes:{role:"region","aria-live":t,"aria-relevant":"additions"},children:[{tag:"ul",attributes:{class:["ck","ck-aria-live-region-list"]}}]}),e.on("destroy",()=>{this._pruneAnnouncementsInterval!==null&&(clearInterval(this._pruneAnnouncementsInterval),this._pruneAnnouncementsInterval=null)}),this.politeness=t,this._domConverter=e.data.htmlProcessor.domConverter,this._pruneAnnouncementsInterval=setInterval(()=>{this.element&&this._listElement.firstChild&&this._listElement.firstChild.remove()},5e3)}announce({announcement:e,isUnsafeHTML:t}){if(!e.trim().length)return;const n=document.createElement("li");t?this._domConverter.setContentOf(n,e):n.innerText=e,this._listElement.appendChild(n)}get _listElement(){return this.element.querySelector("ul")}}class $4 extends ze(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new w4(e),this.focusTracker=new Lt,this.tooltipManager=new P4(e),this.poweredBy=new z4(e),this.ariaLiveAnnouncer=new V4(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,o;e.keystrokes.set("Alt+F10",(s,c)=>{const d=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(d)&&!Array.from(t.domRoots.values()).includes(d)&&(n=d);const h=this._getCurrentFocusedToolbarDefinition();h&&o||(o=this._getFocusableCandidateToolbarDefinitions());for(let p=0;p<o.length;p++){const f=o.shift();if(o.push(f),f!==h&&this._focusFocusableCandidateToolbar(f)){h&&h.options.afterBlur&&h.options.afterBlur();break}}c()}),e.keystrokes.set("Esc",(s,c)=>{const d=this._getCurrentFocusedToolbarDefinition();d&&(n?(n.focus(),n=null):e.editing.view.focus(),d.options.afterBlur&&d.options.afterBlur(),c())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:o}=t;(Mi(n.element)||o.beforeFocus)&&e.push(t)}return e.sort((t,n)=>Kw(t)-Kw(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!Mi(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const n={top:0,bottom:0,left:0,right:0,...this.viewportOffset};t.viewportOffset.top+=n.top,t.viewportOffset.bottom+=n.bottom,t.viewportOffset.left+=n.left,t.viewportOffset.right+=n.right}}function Kw(i){const{toolbarView:e,options:t}=i;let n=10;return Mi(e.element)&&n--,t.isContextual&&n--,n}var Yw=g(5931),q4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(Yw.A,q4),Yw.A.locals;class G4 extends ve{constructor(e){super(e),this.body=new HI(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class W4 extends G4{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new il;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class K4 extends ve{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(o=>{const s=e.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",s),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",s)})}e.isRenderingInProgress?function n(o){e.once("change:isRenderingInProgress",(s,c,d)=>{d?n(o):t(o)})}(this):t(this)}}class Y4 extends K4{constructor(e,t,n,o={}){super(e,t,n);const s=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>s("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}class Qw extends Fc{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Zw extends ze(){constructor(e,t){super(),t&&Xk(this,t),e&&this.set(e)}}var Jw=g(6841),Q4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(Jw.A,Q4),Jw.A.locals;var Xw=g(726),Z4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(Xw.A,Z4),Xw.A.locals;const ml=Br("px");class fl extends ae{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new B("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new B("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new B("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Gr(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new J4(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const s=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[s,o])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new X4(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class J4 extends ve{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Lt,this.buttonPrevView=this._createButtonView(t("Previous"),Le.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),Le.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new Ye(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class X4 extends ve{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",ml),left:n.to("left",ml),width:n.to("width",ml),height:n.to("height",ml)}},children:this.content}),this.on("change:numberOfPanels",(o,s,c,d)=>{c>d?this._addPanels(c-d):this._removePanels(d-c),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new ve;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:o}=new Ve(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:o})}}}var e_=g(8016),eM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(e_.A,eM),e_.A.locals;const Wr=Br("px");class tM extends ve{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Wn({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?Wr(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new Wn({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?Wr(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",n=>n&&Wr(n)),bottom:t.to("_stickyBottomOffset",n=>n&&Wr(n)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(_.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new Ve(this.limiterElement);let t=e.getVisible();if(t){const n=new Ve(_.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,t=t.getIntersection(n)}if(t&&e.top<t.top){const n=t.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const o=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-o>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(o):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=Wr(-_.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=Wr(-_.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new Ve(this.contentPanelElement)}}class nM extends cl{constructor(e,t){const n=e.t,o=Object.assign({},{showResetButton:!0,showIcon:!0,creator:ul},t);super(e,o.creator),this.label=t.label,this._viewConfig=o,this._viewConfig.showIcon&&(this.iconView=new ei,this.iconView.content=Le.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new Ye(e),this.resetButtonView.set({label:n("Clear"),icon:Le.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",s=>!s),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class oM extends ve{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class iM extends ve{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new Lt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new zn({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var t_=/[\\^$.*+?()[\]{}|]/g,rM=RegExp(t_.source);const n_=function(i){return(i=th(i))&&rM.test(i)?i.replace(t_,"\\$&"):i};var o_=g(9381),sM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(o_.A,sM),o_.A.locals;class aM extends ve{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new Lt,this.keystrokes=new en,this.resultsView=new iM(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new oM,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new zn({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:o,totalItemsCount:s})=>{this.resultsCount=o,this.totalItemsCount=s}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(n_(e),"ig"):null,n=this.filteredView.filter(t);this.fire("search",{query:e,...n})}_createSearchTextQueryView(){const e=new nM(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function n(o,{query:s,resultsCount:c,totalItemsCount:d}){return typeof o=="function"?o(s,c,d):o}this.on("search",(o,s)=>{if(s.resultsCount)t.set({isVisible:!1});else{const c=this._config.infoView&&this._config.infoView.text;let d,h;s.totalItemsCount?c&&c.notFound?(d=c.notFound.primary,h=c.notFound.secondary):(d=e("No results found"),h=""):c&&c.noSearchableItems?(d=c.noSearchableItems.primary,h=c.noSearchableItems.secondary):(d=e("No searchable items"),h=""),t.set({primaryText:n(d,s),secondaryText:n(h,s),isVisible:!0})}})}}var i_=g(5169),cM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(i_.A,cM),i_.A.locals;class fa extends aM{constructor(e,t){super(e,t),this._config=t;const n=Br("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const o=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[o.if("isVisible","ck-hidden",s=>!s),o.to("_position",s=>`ck-search__results_${s}`)],style:{width:o.to("_width",n)}}}),this.focusTracker.on("change:isFocused",(s,c,d)=>{this._updateResultsVisibility(),d?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(s,c)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,c())}),this.listenTo(_.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(s,{value:c})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=c,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new Ve(this.queryView.fieldView.element).width;const e=fa._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:fa.defaultResultsPositions});this.resultsView._position=e?e.name:"s"}_updateResultsVisibility(){const e=this._config.queryMinChars===void 0?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=e}}fa.defaultResultsPositions=[i=>({top:i.bottom,left:i.left,name:"s"}),(i,e)=>({top:i.top-e.height,left:i.left,name:"n"})],fa._getOptimalPosition=Pc;var r_=g(2859),lM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(r_.A,lM),r_.A.locals;var s_=g(6047),dM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(s_.A,dM),s_.A.locals;var a_=g(8604),uM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(a_.A,uM),a_.A.locals;var c_=g(6050),hM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(c_.A,hM),c_.A.locals;class pM extends Ye{constructor(e){super(e);const t=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":t.to("isOn")},on:{mouseenter:t.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new ei;return e.content=al,e.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),e}}var l_=g(3835),gM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(l_.A,gM),l_.A.locals;class Vh extends qr{constructor(e,t){super(e);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(t)}}const ka={toggleMenusAndFocusItemsOnHover(i){i.on("menu:mouseenter",e=>{if(i.isOpen){for(const t of i.menus){const n=e.path[0],o=n instanceof Vh&&n.children.first===t;t.isOpen=(e.path.includes(t)||o)&&t.isEnabled}e.source.focus()}})},focusCycleMenusOnArrows(i){const e=i.locale.uiLanguageDirection==="rtl";function t(n,o){const s=i.children.getIndex(n),c=n.isOpen,d=i.children.length,h=i.children.get((s+d+o)%d);n.isOpen=!1,c&&(h.isOpen=!0),h.buttonView.focus()}i.on("menu:arrowright",n=>{t(n.source,e?-1:1)}),i.on("menu:arrowleft",n=>{t(n.source,e?1:-1)})},closeMenusWhenTheBarCloses(i){i.on("change:isOpen",()=>{i.isOpen||i.menus.forEach(e=>{e.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(i){i.on("menu:change:isOpen",(e,t,n)=>{n&&i.menus.filter(o=>e.source.parentMenuView===o.parentMenuView&&e.source!==o&&o.isOpen).forEach(o=>{o.isOpen=!1})})},closeOnClickOutside(i){zc({emitter:i,activator:()=>i.isOpen,callback:()=>i.close(),contextElements:()=>i.children.map(e=>e.element)})}},Fi={openAndFocusPanelOnArrowDownKey(i){i.keystrokes.set("arrowdown",(e,t)=>{i.focusTracker.focusedElement===i.buttonView.element&&(i.isOpen||(i.isOpen=!0),i.panelView.focus(),t())})},openOnArrowRightKey(i){const e=i.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";i.keystrokes.set(e,(t,n)=>{i.focusTracker.focusedElement===i.buttonView.element&&i.isEnabled&&(i.isOpen||(i.isOpen=!0),i.panelView.focus(),n())})},openOnButtonClick(i){i.buttonView.on("execute",()=>{i.isOpen=!0,i.panelView.focus()})},toggleOnButtonClick(i){i.buttonView.on("execute",()=>{i.isOpen=!i.isOpen,i.isOpen&&i.panelView.focus()})},closeOnArrowLeftKey(i){const e=i.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";i.keystrokes.set(e,(t,n)=>{i.isOpen&&(i.isOpen=!1,i.focus(),n())})},closeOnEscKey(i){i.keystrokes.set("esc",(e,t)=>{i.isOpen&&(i.isOpen=!1,i.focus(),t())})},closeOnParentClose(i){i.parentMenuView.on("change:isOpen",(e,t,n)=>{n||e.source!==i.parentMenuView||(i.isOpen=!1)})}},mM={southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,e)=>({top:i.bottom,left:i.left-e.width+i.width,name:"sw"}),northEast:(i,e)=>({top:i.top-e.height,left:i.left,name:"ne"}),northWest:(i,e)=>({top:i.top-e.height,left:i.left-e.width+i.width,name:"nw"}),eastSouth:i=>({top:i.top,left:i.right-5,name:"es"}),eastNorth:(i,e)=>({top:i.top-e.height,left:i.right-5,name:"en"}),westSouth:(i,e)=>({top:i.top,left:i.left-e.width+5,name:"ws"}),westNorth:(i,e)=>({top:i.top-e.height,left:i.left-e.width+5,name:"wn"})},fM=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function kM({normalizedConfig:i,locale:e,componentFactory:t}){const n=Qn(i);return function(o,s){const c=s.removeItems,d=[];s.items=s.items.filter(({menuId:h})=>!c.includes(h)||(d.push(h),!1)),Kr(s.items,h=>{h.groups=h.groups.filter(({groupId:p})=>!c.includes(p)||(d.push(p),!1));for(const p of h.groups)p.items=p.items.filter(f=>{const w=h_(f);return!c.includes(w)||(d.push(w),!1)})});for(const h of c)d.includes(h)||V("menu-bar-item-could-not-be-removed",{menuBarConfig:o,itemName:h})}(i,n),function(o,s){const c=s.addItems,d=[];for(const h of c){const p=_M(h.position),f=AM(h.position);if(bM(h))if(f){const w=s.items.findIndex(v=>v.menuId===f);w!=-1?p==="before"?(s.items.splice(w,0,h.menu),d.push(h)):p==="after"&&(s.items.splice(w+1,0,h.menu),d.push(h)):d_(s,h.menu,f,p)&&d.push(h)}else p==="start"?(s.items.unshift(h.menu),d.push(h)):p==="end"&&(s.items.push(h.menu),d.push(h));else wM(h)?Kr(s.items,w=>{if(w.menuId===f)p==="start"?(w.groups.unshift(h.group),d.push(h)):p==="end"&&(w.groups.push(h.group),d.push(h));else{const v=w.groups.findIndex(E=>E.groupId===f);v!==-1&&(p==="before"?(w.groups.splice(v,0,h.group),d.push(h)):p==="after"&&(w.groups.splice(v+1,0,h.group),d.push(h)))}}):d_(s,h.item,f,p)&&d.push(h)}for(const h of c)d.includes(h)||V("menu-bar-item-could-not-be-added",{menuBarConfig:o,addedItemConfig:h})}(i,n),function(o,s,c){Kr(s.items,d=>{for(const h of d.groups)h.items=h.items.filter(p=>{const f=typeof p=="string"&&!c.has(p);return f&&!s.isUsingDefaultConfig&&V("menu-bar-item-unavailable",{menuBarConfig:o,parentMenuConfig:Qn(d),componentName:p}),!f})})}(i,n,t),u_(i,n),function(o,s){const c=s.t,d={File:c({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:c({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:c({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:c({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:c({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:c({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:c({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:c({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:c({string:"Font",id:"MENU_BAR_MENU_FONT"})};Kr(o.items,h=>{h.label in d&&(h.label=d[h.label])})}(n,e),n}function d_(i,e,t,n){let o=!1;return Kr(i.items,s=>{for(const{groupId:c,items:d}of s.groups){if(o)return;if(c===t)n==="start"?(d.unshift(e),o=!0):n==="end"&&(d.push(e),o=!0);else{const h=d.findIndex(p=>h_(p)===t);h!==-1&&(n==="before"?(d.splice(h,0,e),o=!0):n==="after"&&(d.splice(h+1,0,e),o=!0))}}}),o}function u_(i,e){const t=e.isUsingDefaultConfig;let n=!1;e.items=e.items.filter(o=>!!o.groups.length||(Hh(i,o,t),!1)),e.items.length?(Kr(e.items,o=>{o.groups=o.groups.filter(s=>!!s.items.length||(n=!0,!1));for(const s of o.groups)s.items=s.items.filter(c=>!(p_(c)&&!c.groups.length)||(Hh(i,c,t),n=!0,!1))}),n&&u_(i,e)):Hh(i,i,t)}function Hh(i,e,t){t||V("menu-bar-menu-empty",{menuBarConfig:i,emptyMenuConfig:e})}function Kr(i,e){if(Array.isArray(i))for(const n of i)t(n);function t(n){e(n);for(const o of n.groups)for(const s of o.items)p_(s)&&t(s)}}function bM(i){return typeof i=="object"&&"menu"in i}function wM(i){return typeof i=="object"&&"group"in i}function _M(i){return i.startsWith("start")?"start":i.startsWith("end")?"end":i.startsWith("after")?"after":"before"}function AM(i){const e=i.match(/^[^:]+:(.+)/);return e?e[1]:null}function h_(i){return typeof i=="string"?i:i.menuId}function p_(i){return typeof i=="object"&&"menuId"in i}function CM(i,e){const t=e.element;i.ui.focusTracker.add(t),i.keystrokes.listenTo(t);const n=function(o){let s;return s="items"in o&&o.items?{items:o.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1,...o}:{items:Qn(fM),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0,...o},s}(i.config.get("menuBar")||{});e.fillFromConfig(n,i.ui.componentFactory),i.keystrokes.set("Esc",(o,s)=>{t.contains(i.ui.focusTracker.focusedElement)&&(i.editing.view.focus(),s())}),i.keystrokes.set("Alt+F9",(o,s)=>{t.contains(i.ui.focusTracker.focusedElement)||(e.focus(),s())})}var g_=g(5306),vM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(g_.A,vM),g_.A.locals;class yM extends ve{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",t.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),t.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:t.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(e=1){this.children.length&&(e===1?this.children.first.focus():this.children.last.focus())}}var m_=g(5842),xM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(m_.A,xM),m_.A.locals;class kl extends ve{constructor(e){super(e);const t=this.bindTemplate;this.buttonView=new pM(e),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new yM(e),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new en,this.focusTracker=new Lt,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",t.to("class"),t.if("isEnabled","ck-disabled",n=>!n),t.if("parentMenuView","ck-menu-bar__menu_top-level",n=>!n)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),Fi.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(Fi.openOnButtonClick(this),Fi.openOnArrowRightKey(this),Fi.closeOnArrowLeftKey(this),Fi.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),Fi.openAndFocusPanelOnArrowDownKey(this),Fi.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(e,t)=>{this.fire("arrowright"),t()}),this.keystrokes.set("arrowleft",(e,t)=>{this.fire("arrowleft"),t()})}_repositionPanelOnOpen(){this.on("change:isOpen",(e,t,n)=>{if(!n)return;const o=kl._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=o?o.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:e,southWest:t,northEast:n,northWest:o,westSouth:s,eastSouth:c,westNorth:d,eastNorth:h}=mM;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[c,h,s,d]:[e,t,n,o]:this.parentMenuView?[s,d,c,h]:[t,e,o,n]}}kl._getOptimalPosition=Pc;const ba=kl;class Uh extends Oh{constructor(e){super(e),this.role="menu"}}var f_=g(5519),EM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(f_.A,EM),f_.A.locals;class Xn extends Ye{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class k_ extends uw{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var b_=g(3779),DM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(b_.A,DM),b_.A.locals;const w_=["mouseenter","arrowleft","arrowright","change:isOpen"];class SM extends ve{constructor(e){super(e),this.menus=[];const t=e.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":t("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(e,t){const n=kM({normalizedConfig:e,locale:this.locale,componentFactory:t}).items.map(o=>this._createMenu({componentFactory:t,menuDefinition:o}));this.children.addMany(n)}render(){super.render(),ka.toggleMenusAndFocusItemsOnHover(this),ka.closeMenusWhenTheBarCloses(this),ka.closeMenuWhenAnotherOnTheSameLevelOpens(this),ka.focusCycleMenusOnArrows(this),ka.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const e of this.children)e.isOpen=!1}registerMenu(e,t=null){t?(e.delegate(...w_).to(t),e.parentMenuView=t):e.delegate(...w_).to(this,n=>"menu:"+n),e._attachBehaviors(),this.menus.push(e)}_createMenu({componentFactory:e,menuDefinition:t,parentMenuView:n}){const o=this.locale,s=new ba(o);return this.registerMenu(s,n),s.buttonView.set({label:t.label}),s.once("change:isOpen",()=>{const c=new Uh(o);c.ariaLabel=t.label,s.panelView.children.add(c),c.items.addMany(this._createMenuItems({menuDefinition:t,parentMenuView:s,componentFactory:e}))}),s}_createMenuItems({menuDefinition:e,parentMenuView:t,componentFactory:n}){const o=this.locale,s=[];for(const c of e.groups){for(const d of c.items){const h=new Vh(o,t);if(Ie(d))h.children.add(this._createMenu({componentFactory:n,menuDefinition:d,parentMenuView:t}));else{const p=this._createMenuItemContentFromFactory({componentName:d,componentFactory:n,parentMenuView:t});if(!p)continue;h.children.add(p)}s.push(h)}c!==e.groups[e.groups.length-1]&&s.push(new Ph(o))}return s}_createMenuItemContentFromFactory({componentName:e,parentMenuView:t,componentFactory:n}){const o=n.create(e);return o instanceof ba||o instanceof Xn||o instanceof k_?(this._registerMenuTree(o,t),o.on("execute",()=>{this.close()}),o):(V("menu-bar-component-unsupported",{componentName:e,componentView:o}),null)}_registerMenuTree(e,t){if(!(e instanceof ba))return void e.delegate("mouseenter").to(t);this.registerMenu(e,t);const n=e.panelView.children.filter(s=>s instanceof Uh)[0];if(!n)return void e.delegate("mouseenter").to(t);const o=n.items.filter(s=>s instanceof qr);for(const s of o)this._registerMenuTree(s.children.get(0),e)}_setupIsOpenUpdater(){let e;this.on("menu:change:isOpen",(t,n,o)=>{clearTimeout(e),o?this.isOpen=!0:e=setTimeout(()=>{this.isOpen=Array.from(this.children).some(s=>s.isOpen)},0)})}}class TM extends $4{constructor(e,t){super(e),this.view=t,this._toolbarConfig=ww(e.config.get("toolbar")),this._elementReplacer=new le,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,o=t.editing.view,s=n.editable,c=o.document.getRoot();s.name=c.rootName,n.render();const d=s.element;this.setEditableElement(s.name,d),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(d),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),n.menuBarView&&CM(t,n.menuBarView),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),o=e.sourceElement;let s;const c=e.config.get("placeholder");c&&(s=typeof c=="string"?c:c[this.view.editable.name]),!s&&o&&o.tagName.toLowerCase()==="textarea"&&(s=o.getAttribute("placeholder")),s&&(n.placeholder=s),Ek({view:t,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,n){const o=this.view.stickyPanel;if(o.isSticky){const s=new Ve(o.element).height;t.viewportOffset.top+=s}else{const s=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(o,"change:isSticky",s),setTimeout(()=>{this.stopListening(o,"change:isSticky",s)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const e=this.view.stickyPanel,t=this.editor.plugins.get("Dialog");t.on("show",()=>{const n=t.view;n.on("moveTo",(o,s)=>{if(!e.isSticky||n.wasMoved)return;const c=new Ve(e.contentPanelElement);s[1]<c.bottom+zh.defaultOffset&&(s[1]=c.bottom+zh.defaultOffset)},{priority:"high"})},{priority:"low"})}}var __=g(3394),IM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(__.A,IM),__.A.locals;class MM extends W4{constructor(e,t,n={}){super(e),this.stickyPanel=new tM(e),this.toolbar=new Nh(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new SM(e)),this.editable=new Y4(e,t)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class A_{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const n="error"in t?t.error:t.reason;n instanceof Error&&this._handleError(n,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(n=>n!==t)}_fire(e,...t){const n=this._listeners[e]||[];for(const o of n)o.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function $h(i,e=new Set){const t=[i],n=new Set;let o=0;for(;t.length>o;){const s=t[o++];if(!n.has(s)&&BM(s)&&!e.has(s))if(n.add(s),Symbol.iterator in s)try{for(const c of s)t.push(c)}catch{}else for(const c in s)c!=="defaultValue"&&t.push(s[c])}return n}function BM(i){const e=Object.prototype.toString.call(i),t=typeof i;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||i==null||i._watchdogExcluded||i instanceof EventTarget||i instanceof Event)}function C_(i,e,t=new Set){if(i===e&&typeof(n=i)=="object"&&n!==null)return!0;var n;const o=$h(i,t),s=$h(e,t);for(const c of o)if(s.has(c))return!0;return!1}class v_ extends A_{constructor(e,t={}){super(t),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=gl(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(n,o)=>e.create(n,o)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],n=this._config.rootsAttributes||{},o={};for(const[c,d]of Object.entries(this._data.roots))d.isLoaded?(e[c]="",o[c]=n[c]||{}):t.push(c);const s={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:o,_watchdogInitialData:this._data};return delete s.initialData,s.extraPlugins.push(NM),this._initUsingData?this.create(e,s,s.context):Ii(this._elementOrData)?this.create(this._elementOrData,s,s.context):this.create(this._editables,s,s.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,n){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=n,this._creator(e,this._config))).then(o=>{this._editor=o,o.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=o.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(d=>d.isAttached()&&d.rootName!="$graveyard"),{plugins:n}=e,o=n.has("CommentsRepository")&&n.get("CommentsRepository"),s=n.has("TrackChanges")&&n.get("TrackChanges"),c={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(d=>{c.roots[d.rootName]={content:JSON.stringify(Array.from(d.getChildren())),attributes:JSON.stringify(Array.from(d.getAttributes())),isLoaded:d._isLoaded}});for(const d of e.model.markers)d._affectsData&&(c.markers[d.name]={rangeJSON:d.getRange().toJSON(),usingOperation:d._managedUsingOperations,affectsData:d._affectsData});return o&&(c.commentThreads=JSON.stringify(o.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),s&&(c.suggestions=JSON.stringify(s.getSuggestions({toJSON:!0,skipNotAttached:!0}))),c}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(t);n&&(e[t]=n)}return e}_isErrorComingFromThisItem(e){return C_(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return zu(e,(t,n)=>Ii(t)||n==="context"?t:void 0)}}class NM{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const n=e.createElement(t.name,t.attributes);if(t.children)for(const o of t.children)n._appendChild(this._createNode(e,o));return n}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([n,{content:o,attributes:s}])=>{const c=JSON.parse(o),d=JSON.parse(s),h=t.model.document.getRoot(n);for(const[p,f]of d)e.setAttribute(p,f,h);for(const p of c){const f=this._createNode(e,p);e.insert(f,h,"end")}}),Object.entries(this._data.markers).forEach(([n,o])=>{const{document:s}=t.model,{rangeJSON:{start:c,end:d},...h}=o,p=s.getRoot(c.root),f=e.createPositionFromPath(p,c.path,c.stickiness),w=e.createPositionFromPath(p,d.path,d.stickiness),v=e.createRange(f,w);e.addMarker(n,{range:v,...h})})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(n=>{const o=this.editor.config.get("collaboration.channelId"),s=this.editor.plugins.get("CommentsRepository");s.hasCommentThread(n.threadId)&&s.getCommentThread(n.threadId).remove(),s.addCommentThread({channelId:o,...n})}),t.forEach(n=>{const o=this.editor.plugins.get("TrackChangesEditing");o.hasSuggestion(n.id)?o.getSuggestion(n.id).attributes=n.attributes:o.addSuggestionData(n)})}}const wa=Symbol("MainQueueId");class PM{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const n=e===wa;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const o=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(wa),this._queues.get(e)])).then(t),s=o.catch(()=>{});return this._queues.set(e,s),o.finally(()=>{this._activeActions--,this._queues.get(e)===s&&this._activeActions===0&&this._onEmptyCallbacks.forEach(c=>c())})}}function y_(i){return Array.isArray(i)?i:[i]}class bl extends Mh(LI){constructor(e,t={}){if(!wl(e)&&t.initialData!==void 0)throw new B("editor-create-initial-data",null);super(t),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(c){return wl(c)?(d=c,d instanceof HTMLTextAreaElement?d.value:d.innerHTML):c;var d}(e)),wl(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=this.config.get("menuBar"),s=new MM(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:o.isVisible});this.ui=new TM(this,s),function(c){if(!Ei(c.updateSourceElement))throw new B("attachtoform-missing-elementapi-interface",c);const d=c.sourceElement;if(function(h){return!!h&&h.tagName.toLowerCase()==="textarea"}(d)&&d.form){let h;const p=d.form,f=()=>c.updateSourceElement();Ei(p.submit)&&(h=p.submit,p.submit=()=>{f(),h.apply(p)}),p.addEventListener("submit",f),c.on("destroy",()=>{p.removeEventListener("submit",f),h&&(p.submit=h)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const o=new this(e,t);n(o.initPlugins().then(()=>o.ui.init(wl(e)?e:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}bl.Context=vk,bl.EditorWatchdog=v_,bl.ContextWatchdog=class extends A_{constructor(i,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new PM,this._watchdogConfig=e,this._creator=t=>i.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(i){this._creator=i}setDestructor(i){this._destructor=i}get context(){return this._context}create(i={}){return this._actionQueues.enqueue(wa,()=>(this._contextConfig=i,this._create()))}getItem(i){return this._getWatchdog(i)._item}getItemState(i){return this._getWatchdog(i).state}add(i){const e=y_(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return n=new v_(null,this._watchdogConfig),n.setCreator(t.creator),n._setExcludedProperties(this._contextProps),t.destructor&&n.setDestructor(t.destructor),this._watchdogs.set(t.id,n),n.on("error",(o,{error:s,causesRestart:c})=>{this._fire("itemError",{itemId:t.id,error:s}),c&&this._actionQueues.enqueue(t.id,()=>new Promise(d=>{const h=()=>{n.off("restart",h),this._fire("itemRestart",{itemId:t.id}),d()};n.on("restart",h)}))}),n.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(i){const e=y_(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const n=this._getWatchdog(t);return this._watchdogs.delete(t),n.destroy()})))}destroy(){return this._actionQueues.enqueue(wa,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(wa,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(i=>{console.error("An error happened during destroying the context or items.",i)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(i=>(this._context=i,this._contextProps=$h(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const i=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(i))})}_getWatchdog(i){const e=this._watchdogs.get(i);if(!e)throw new Error(`Item with the given id was not registered: ${i}.`);return e}_isErrorComingFromThisItem(i){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(i))return!1;return C_(this._context,i.context)}};const OM=bl;function wl(i){return Ii(i)}class x_{constructor(e,t=20){this._batch=null,this.model=e,this._size=0,this.limit=t,this._isLocked=!1,this._changeCallback=(n,o)=>{o.isLocal&&o.isUndoable&&o!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch({isTyping:!0})),this._batch}get size(){return this._size}input(e){this._size+=e,this._size>=this.limit&&this._reset(!0)}get isLocked(){return this._isLocked}lock(){this._isLocked=!0}unlock(){this._isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(e=!1){this.isLocked&&!e||(this._batch=null,this._size=0)}}class LM extends Fe{constructor(e,t){super(e),this._buffer=new x_(e.model,t),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){const t=this.editor.model,n=t.document,o=e.text||"",s=o.length;let c=n.selection;if(e.selection?c=e.selection:e.range&&(c=t.createSelection(e.range)),!t.canEditAt(c))return;const d=e.resultRange;t.enqueueChange(this._buffer.batch,h=>{this._buffer.lock();const p=Array.from(n.selection.getAttributes());t.deleteContent(c),o&&t.insertContent(h.createText(o,p),c),d?h.setSelection(d):c.is("documentSelection")||h.setSelection(c),this._buffer.unlock(),this._buffer.input(s)})}}const E_=["insertText","insertReplacementText"];class RM extends co{constructor(e){super(e),this.focusObserver=e.getObserver(Xc),C.isAndroid&&E_.push("insertCompositionText");const t=e.document;t.on("beforeinput",(n,o)=>{if(!this.isEnabled)return;const{data:s,targetRanges:c,inputType:d,domEvent:h}=o;if(!E_.includes(d))return;this.focusObserver.flush();const p=new F(t,"insertText");t.fire(p,new jr(e,h,{text:s,selection:e.createSelection(c)})),p.stop.called&&n.stop()}),t.on("compositionend",(n,{data:o,domEvent:s})=>{this.isEnabled&&!C.isAndroid&&o&&t.fire("insertText",new jr(e,s,{text:o,selection:t.selection}))},{priority:"lowest"})}observe(){}stopObserving(){}}class D_ extends ae{static get pluginName(){return"Input"}init(){const e=this.editor,t=e.model,n=e.editing.view,o=t.document.selection;n.addObserver(RM);const s=new LM(e,e.config.get("typing.undoStep")||20);e.commands.add("insertText",s),e.commands.add("input",s),this.listenTo(n.document,"insertText",(c,d)=>{n.document.isComposing||d.preventDefault();const{text:h,selection:p,resultRange:f}=d,w=Array.from(p.getRanges()).map(S=>e.editing.mapper.toModelRange(S));let v=h;if(C.isAndroid){const S=Array.from(w[0].getItems()).reduce((I,N)=>I+(N.is("$textProxy")?N.data:""),"");S&&(S.length<=v.length?v.startsWith(S)&&(v=v.substring(S.length),w[0].start=w[0].start.getShiftedBy(S.length)):S.startsWith(v)&&(w[0].start=w[0].start.getShiftedBy(v.length),v=""))}const E={text:v,selection:t.createSelection(w)};f&&(E.resultRange=e.editing.mapper.toModelRange(f)),e.execute("insertText",E),n.scrollToTheSelection()}),C.isAndroid?this.listenTo(n.document,"keydown",(c,d)=>{!o.isCollapsed&&d.keyCode==229&&n.document.isComposing&&S_(t,s)}):this.listenTo(n.document,"compositionstart",()=>{o.isCollapsed||S_(t,s)})}}function S_(i,e){if(!e.isEnabled)return;const t=e.buffer;t.lock(),i.enqueueChange(t.batch,()=>{i.deleteContent(i.document.selection)}),t.unlock()}class T_ extends Fe{constructor(e,t){super(e),this.direction=t,this._buffer=new x_(e.model,e.config.get("typing.undoStep")),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}execute(e={}){const t=this.editor.model,n=t.document;t.enqueueChange(this._buffer.batch,o=>{this._buffer.lock();const s=o.createSelection(e.selection||n.selection);if(!t.canEditAt(s))return;const c=e.sequence||1,d=s.isCollapsed;if(s.isCollapsed&&t.modifySelection(s,{direction:this.direction,unit:e.unit,treatEmojiAsSingleUnit:!0}),this._shouldEntireContentBeReplacedWithParagraph(c))return void this._replaceEntireContentWithParagraph(o);if(this._shouldReplaceFirstBlockWithParagraph(s,c))return void this.editor.execute("paragraph",{selection:s});if(s.isCollapsed)return;let h=0;s.getFirstRange().getMinimalFlatRanges().forEach(p=>{h+=ge(p.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),t.deleteContent(s,{doNotResetEntireContent:d,direction:this.direction}),this._buffer.input(h),o.setSelection(s),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(e){if(e>1)return!1;const t=this.editor.model,n=t.document.selection,o=t.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(o))||!t.schema.checkChild(o,"paragraph"))return!1;const s=o.getChild(0);return!s||!s.is("element","paragraph")}_replaceEntireContentWithParagraph(e){const t=this.editor.model,n=t.document.selection,o=t.schema.getLimitElement(n),s=e.createElement("paragraph");e.remove(e.createRangeIn(o)),e.insert(s,o),e.setSelection(s,0)}_shouldReplaceFirstBlockWithParagraph(e,t){const n=this.editor.model;if(t>1||this.direction!="backward"||!e.isCollapsed)return!1;const o=e.getFirstPosition(),s=n.schema.getLimitElement(o),c=s.getChild(0);return o.parent==c&&!!e.containsEntireContent(c)&&!!n.schema.checkChild(s,"paragraph")&&c.name!="paragraph"}}const I_="word",ti="selection",Yr="backward",_a="forward",M_={deleteContent:{unit:ti,direction:Yr},deleteContentBackward:{unit:"codePoint",direction:Yr},deleteWordBackward:{unit:I_,direction:Yr},deleteHardLineBackward:{unit:ti,direction:Yr},deleteSoftLineBackward:{unit:ti,direction:Yr},deleteContentForward:{unit:"character",direction:_a},deleteWordForward:{unit:I_,direction:_a},deleteHardLineForward:{unit:ti,direction:_a},deleteSoftLineForward:{unit:ti,direction:_a}};class zM extends co{constructor(e){super(e);const t=e.document;let n=0;t.on("keydown",()=>{n++}),t.on("keyup",()=>{n=0}),t.on("beforeinput",(o,s)=>{if(!this.isEnabled)return;const{targetRanges:c,domEvent:d,inputType:h}=s,p=M_[h];if(!p)return;const f={direction:p.direction,unit:p.unit,sequence:n};f.unit==ti&&(f.selectionToRemove=e.createSelection(c[0])),h==="deleteContentBackward"&&(C.isAndroid&&(f.sequence=1),function(v){if(v.length!=1||v[0].isCollapsed)return!1;const E=v[0].getWalker({direction:"backward",singleCharacters:!0,ignoreElementEnd:!0});let S=0;for(const{nextPosition:I,item:N}of E){if(I.parent.is("$text")){const L=I.parent.data,H=I.offset;if(Gu(L,H)||Wu(L,H)||ak(L,H))continue;S++}else(N.is("containerElement")||N.is("emptyElement"))&&S++;if(S>1)return!0}return!1}(c)&&(f.unit=ti,f.selectionToRemove=e.createSelection(c)));const w=new Lr(t,"delete",c[0]);t.fire(w,new jr(e,d,f)),w.stop.called&&o.stop()}),C.isBlink&&function(o){const s=o.view,c=s.document;let d=null,h=!1;function p(w){return w==Ue.backspace||w==Ue.delete}function f(w){return w==Ue.backspace?Yr:_a}c.on("keydown",(w,{keyCode:v})=>{d=v,h=!1}),c.on("keyup",(w,{keyCode:v,domEvent:E})=>{const S=c.selection,I=o.isEnabled&&v==d&&p(v)&&!S.isCollapsed&&!h;if(d=null,I){const N=S.getFirstRange(),L=new Lr(c,"delete",N),H={unit:ti,direction:f(v),selectionToRemove:S};c.fire(L,new jr(s,E,H))}}),c.on("beforeinput",(w,{inputType:v})=>{const E=M_[v];p(d)&&E&&E.direction==f(d)&&(h=!0)},{priority:"high"}),c.on("beforeinput",(w,{inputType:v,data:E})=>{d==Ue.delete&&v=="insertText"&&E==""&&w.stop()},{priority:"high"})}(this)}observe(){}stopObserving(){}}class Mo extends ae{static get pluginName(){return"Delete"}init(){const e=this.editor,t=e.editing.view,n=t.document,o=e.model.document;t.addObserver(zM),this._undoOnBackspace=!1;const s=new T_(e,"forward");e.commands.add("deleteForward",s),e.commands.add("forwardDelete",s),e.commands.add("delete",new T_(e,"backward")),this.listenTo(n,"delete",(c,d)=>{n.isComposing||d.preventDefault();const{direction:h,sequence:p,selectionToRemove:f,unit:w}=d,v=h==="forward"?"deleteForward":"delete",E={sequence:p};if(w=="selection"){const S=Array.from(f.getRanges()).map(I=>e.editing.mapper.toModelRange(I));E.selection=e.model.createSelection(S)}else E.unit=w;e.execute(v,E),t.scrollToTheSelection()},{priority:"low"}),this.editor.plugins.has("UndoEditing")&&(this.listenTo(n,"delete",(c,d)=>{this._undoOnBackspace&&d.direction=="backward"&&d.sequence==1&&d.unit=="codePoint"&&(this._undoOnBackspace=!1,e.execute("undo"),d.preventDefault(),c.stop())},{context:"$capture"}),this.listenTo(o,"change",()=>{this._undoOnBackspace=!1}))}requestUndoOnBackspace(){this.editor.plugins.has("UndoEditing")&&(this._undoOnBackspace=!0)}}class jM extends ae{static get requires(){return[D_,Mo]}static get pluginName(){return"Typing"}}function B_(i,e){let t=i.start;return{text:Array.from(i.getWalker({ignoreElementEnd:!1})).reduce((n,{item:o})=>o.is("$text")||o.is("$textProxy")?n+o.data:(t=e.createPositionAfter(o),""),""),range:e.createRange(t,i.end)}}class N_ extends ze(){constructor(e,t){super(),this.model=e,this.testCallback=t,this._hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(e.document.selection),this.stopListening(e.document))}),this._startListening()}get hasMatch(){return this._hasMatch}_startListening(){const e=this.model.document;this.listenTo(e.selection,"change:range",(t,{directChange:n})=>{n&&(e.selection.isCollapsed?this._evaluateTextBeforeSelection("selection"):this.hasMatch&&(this.fire("unmatched"),this._hasMatch=!1))}),this.listenTo(e,"change:data",(t,n)=>{!n.isUndo&&n.isLocal&&this._evaluateTextBeforeSelection("data",{batch:n})})}_evaluateTextBeforeSelection(e,t={}){const n=this.model,o=n.document.selection,s=n.createRange(n.createPositionAt(o.focus.parent,0),o.focus),{text:c,range:d}=B_(s,n),h=this.testCallback(c);if(!h&&this.hasMatch&&this.fire("unmatched"),this._hasMatch=!!h,h){const p=Object.assign(t,{text:c,range:d});typeof h=="object"&&Object.assign(p,h),this.fire(`matched:${e}`,p)}}}class P_ extends ae{static get pluginName(){return"TwoStepCaretMovement"}constructor(e){super(e),this._isNextGravityRestorationSkipped=!1,this.attributes=new Set,this._overrideUid=null}init(){const e=this.editor,t=e.model,n=e.editing.view,o=e.locale,s=t.document.selection;this.listenTo(n.document,"arrowKey",(c,d)=>{if(!s.isCollapsed||d.shiftKey||d.altKey||d.ctrlKey)return;const h=d.keyCode==Ue.arrowright,p=d.keyCode==Ue.arrowleft;if(!h&&!p)return;const f=o.contentLanguageDirection;let w=!1;w=f==="ltr"&&h||f==="rtl"&&p?this._handleForwardMovement(d):this._handleBackwardMovement(d),w===!0&&c.stop()},{context:"$text",priority:"highest"}),this.listenTo(s,"change:range",(c,d)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!d.directChange&&Fn(s.getFirstPosition(),this.attributes)||this._restoreGravity())}),this._enableClickingAfterNode(),this._enableInsertContentSelectionAttributesFixer(),this._handleDeleteContentAfterNode()}registerAttribute(e){this.attributes.add(e)}_handleForwardMovement(e){const t=this.attributes,n=this.editor.model,o=n.document.selection,s=o.getFirstPosition();return!this._isGravityOverridden&&(!s.isAtStart||!Bo(o,t))&&!!Fn(s,t)&&(Ca(e),Bo(o,t)&&Fn(s,t,!0)?Aa(n,t):this._overrideGravity(),!0)}_handleBackwardMovement(e){const t=this.attributes,n=this.editor.model,o=n.document.selection,s=o.getFirstPosition();return this._isGravityOverridden?(Ca(e),this._restoreGravity(),Fn(s,t,!0)?Aa(n,t):_l(n,t,s),!0):s.isAtStart?!!Bo(o,t)&&(Ca(e),_l(n,t,s),!0):!Bo(o,t)&&Fn(s,t,!0)?(Ca(e),_l(n,t,s),!0):!!O_(s,t)&&(s.isAtEnd&&!Bo(o,t)&&Fn(s,t)?(Ca(e),_l(n,t,s),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1))}_enableClickingAfterNode(){const e=this.editor,t=e.model,n=t.document.selection,o=e.editing.view.document;e.editing.view.addObserver(Th);let s=!1;this.listenTo(o,"mousedown",()=>{s=!0}),this.listenTo(o,"selectionChange",()=>{const c=this.attributes;if(!s||(s=!1,!n.isCollapsed)||!Bo(n,c))return;const d=n.getFirstPosition();Fn(d,c)&&(d.isAtStart||Fn(d,c,!0)?Aa(t,c):this._isGravityOverridden||this._overrideGravity())})}_enableInsertContentSelectionAttributesFixer(){const e=this.editor.model,t=e.document.selection,n=this.attributes;this.listenTo(e,"insertContent",()=>{const o=t.getFirstPosition();Bo(t,n)&&Fn(o,n)&&Aa(e,n)},{priority:"low"})}_handleDeleteContentAfterNode(){const e=this.editor,t=e.model,n=t.document.selection,o=e.editing.view;let s=!1,c=!1;this.listenTo(o.document,"delete",(d,h)=>{s=h.direction==="backward"},{priority:"high"}),this.listenTo(t,"deleteContent",()=>{if(!s)return;const d=n.getFirstPosition();c=Bo(n,this.attributes)&&!O_(d,this.attributes)},{priority:"high"}),this.listenTo(t,"deleteContent",()=>{s&&(s=!1,c||e.model.enqueueChange(()=>{const d=n.getFirstPosition();Bo(n,this.attributes)&&Fn(d,this.attributes)&&(d.isAtStart||Fn(d,this.attributes,!0)?Aa(t,this.attributes):this._isGravityOverridden||this._overrideGravity())}))},{priority:"low"})}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(e=>e.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(e=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function Bo(i,e){for(const t of e)if(i.hasAttribute(t))return!0;return!1}function _l(i,e,t){const n=t.nodeBefore;i.change(o=>{if(n){const s=[],c=i.schema.isObject(n)&&i.schema.isInline(n);for(const[d,h]of n.getAttributes())!i.schema.checkAttribute("$text",d)||c&&i.schema.getAttributeProperties(d).copyFromObject===!1||s.push([d,h]);o.setSelectionAttribute(s)}else o.removeSelectionAttribute(e)})}function Aa(i,e){i.change(t=>{t.removeSelectionAttribute(e)})}function Ca(i){i.preventDefault()}function O_(i,e){return Fn(i.getShiftedBy(-1),e)}function Fn(i,e,t=!1){const{nodeBefore:n,nodeAfter:o}=i;for(const s of e){const c=n?n.getAttribute(s):void 0,d=o?o.getAttribute(s):void 0;if((!t||c!==void 0&&d!==void 0)&&d!==c)return!0}return!1}const L_={copyright:{from:"(c)",to:"©"},registeredTrademark:{from:"(r)",to:"®"},trademark:{from:"(tm)",to:"™"},oneHalf:{from:/(^|[^/a-z0-9])(1\/2)([^/a-z0-9])$/i,to:[null,"½",null]},oneThird:{from:/(^|[^/a-z0-9])(1\/3)([^/a-z0-9])$/i,to:[null,"⅓",null]},twoThirds:{from:/(^|[^/a-z0-9])(2\/3)([^/a-z0-9])$/i,to:[null,"⅔",null]},oneForth:{from:/(^|[^/a-z0-9])(1\/4)([^/a-z0-9])$/i,to:[null,"¼",null]},threeQuarters:{from:/(^|[^/a-z0-9])(3\/4)([^/a-z0-9])$/i,to:[null,"¾",null]},lessThanOrEqual:{from:"<=",to:"≤"},greaterThanOrEqual:{from:">=",to:"≥"},notEqual:{from:"!=",to:"≠"},arrowLeft:{from:"<-",to:"←"},arrowRight:{from:"->",to:"→"},horizontalEllipsis:{from:"...",to:"…"},enDash:{from:/(^| )(--)( )$/,to:[null,"–",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"—",null]},quotesPrimary:{from:Qr('"'),to:[null,"“",null,"”"]},quotesSecondary:{from:Qr("'"),to:[null,"‘",null,"’"]},quotesPrimaryEnGb:{from:Qr("'"),to:[null,"‘",null,"’"]},quotesSecondaryEnGb:{from:Qr('"'),to:[null,"“",null,"”"]},quotesPrimaryPl:{from:Qr('"'),to:[null,"„",null,"”"]},quotesSecondaryPl:{from:Qr("'"),to:[null,"‚",null,"’"]}},R_={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},FM=["symbols","mathematical","typography","quotes"];function VM(i){return typeof i=="string"?new RegExp(`(${n_(i)})$`):i}function HM(i){return typeof i=="string"?()=>[i]:i instanceof Array?()=>i:i}function UM(i){return(i.textNode?i.textNode:i.nodeAfter).getAttributes()}function Qr(i){return new RegExp(`(^|\\s)(${i})([^${i}]*)(${i})$`)}function Al(i,e,t,n){return n.createRange(z_(i,e,t,!0,n),z_(i,e,t,!1,n))}function z_(i,e,t,n,o){let s=i.textNode||(n?i.nodeBefore:i.nodeAfter),c=null;for(;s&&s.getAttribute(e)==t;)c=s,s=n?s.previousSibling:s.nextSibling;return c?o.createPositionAt(c,n?"before":"after"):i}function ni(i,e,t,n){let o,s=null;typeof n=="function"?o=n:(s=i.commands.get(n),o=()=>{i.execute(n)}),i.model.document.on("change:data",(c,d)=>{if(s&&!s.isEnabled||!e.isEnabled)return;const h=Vt(i.model.document.selection.getRanges());if(!h.isCollapsed||d.isUndo||!d.isLocal)return;const p=Array.from(i.model.document.differ.getChanges()),f=p[0];if(p.length!=1||f.type!=="insert"||f.name!="$text"||f.length!=1)return;const w=f.position.parent;if(w.is("element","codeBlock")||w.is("element","listItem")&&typeof n!="function"&&!["numberedList","bulletedList","todoList"].includes(n)||s&&s.value===!0)return;const v=w.getChild(0),E=i.model.createRangeOn(v);if(!E.containsRange(h)&&!h.end.isEqual(E.end))return;const S=t.exec(v.data.substr(0,h.end.offset));S&&i.model.enqueueChange(I=>{const N=I.createPositionAt(w,0),L=I.createPositionAt(w,S[0].length),H=new En(N,L);if(o({match:S})!==!1){I.remove(H);const G=i.model.document.selection.getFirstRange(),X=I.createRangeIn(w);!w.isEmpty||X.isEqual(G)||X.containsRange(G,!0)||I.remove(w)}H.detach(),i.model.enqueueChange(()=>{i.plugins.get("Delete").requestUndoOnBackspace()})})})}function Zr(i,e,t,n){let o,s;t instanceof RegExp?o=t:s=t,s=s||(c=>{let d;const h=[],p=[];for(;(d=o.exec(c))!==null&&!(d&&d.length<4);){let{index:f,1:w,2:v,3:E}=d;const S=w+v+E;f+=d[0].length-S.length;const I=[f,f+w.length],N=[f+w.length+v.length,f+w.length+v.length+E.length];h.push(I),h.push(N),p.push([f+w.length,f+w.length+v.length])}return{remove:h,format:p}}),i.model.document.on("change:data",(c,d)=>{if(d.isUndo||!d.isLocal||!e.isEnabled)return;const h=i.model,p=h.document.selection;if(!p.isCollapsed)return;const f=Array.from(h.document.differ.getChanges()),w=f[0];if(f.length!=1||w.type!=="insert"||w.name!="$text"||w.length!=1)return;const v=p.focus,E=v.parent,{text:S,range:I}=function(G,X){let me=G.start;return{text:Array.from(G.getItems()).reduce((Pe,st)=>!st.is("$text")&&!st.is("$textProxy")||st.getAttribute("code")?(me=X.createPositionAfter(st),""):Pe+st.data,""),range:X.createRange(me,G.end)}}(h.createRange(h.createPositionAt(E,0),v),h),N=s(S),L=j_(I.start,N.format,h),H=j_(I.start,N.remove,h);L.length&&H.length&&h.enqueueChange(G=>{if(n(G,L)!==!1){for(const X of H.reverse())G.remove(X);h.enqueueChange(()=>{i.plugins.get("Delete").requestUndoOnBackspace()})}})})}function j_(i,e,t){return e.filter(n=>n[0]!==void 0&&n[1]!==void 0).map(n=>t.createRange(i.getShiftedBy(n[0]),i.getShiftedBy(n[1])))}function Cl(i,e){return(t,n)=>{if(!i.commands.get(e).isEnabled)return!1;const o=i.model.schema.getValidRanges(n,e);for(const s of o)t.setAttribute(e,!0,s);t.removeSelectionAttribute(e)}}class F_ extends Fe{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,n=t.document.selection,o=e.forceValue===void 0?!this.value:e.forceValue;t.change(s=>{if(n.isCollapsed)o?s.setSelectionAttribute(this.attributeKey,!0):s.removeSelectionAttribute(this.attributeKey);else{const c=t.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const d of c)o?s.setAttribute(this.attributeKey,o,d):s.removeAttribute(this.attributeKey,d)}})}_getValueFromFirstAllowedNode(){const e=this.editor.model,t=e.schema,n=e.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const o of n.getRanges())for(const s of o.getItems())if(t.checkAttribute(s,this.attributeKey))return s.hasAttribute(this.attributeKey);return!1}}const Jr="bold";class $M extends ae{static get pluginName(){return"BoldEditing"}init(){const e=this.editor,t=this.editor.t;e.model.schema.extend("$text",{allowAttributes:Jr}),e.model.schema.setAttributeProperties(Jr,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:Jr,view:"strong",upcastAlso:["b",n=>{const o=n.getStyle("font-weight");return o&&(o=="bold"||Number(o)>=600)?{name:!0,styles:["font-weight"]}:null}]}),e.commands.add(Jr,new F_(e,Jr)),e.keystrokes.set("CTRL+B",Jr),e.accessibility.addKeystrokeInfos({keystrokes:[{label:t("Bold text"),keystroke:"CTRL+B"}]})}}function V_({editor:i,commandName:e,plugin:t,icon:n,label:o,keystroke:s}){return c=>{const d=i.commands.get(e),h=new c(i.locale);return h.set({label:o,icon:n,keystroke:s,isToggleable:!0}),h.bind("isEnabled").to(d,"isEnabled"),t.listenTo(h,"execute",()=>{i.execute(e),i.editing.view.focus()}),h}}const vl="bold";class qM extends ae{static get pluginName(){return"BoldUI"}init(){const e=this.editor,t=e.locale.t,n=e.commands.get(vl),o=V_({editor:e,commandName:vl,plugin:this,icon:Le.bold,label:t("Bold"),keystroke:"CTRL+B"});e.ui.componentFactory.add(vl,()=>{const s=o(Ye);return s.set({tooltip:!0}),s.bind("isOn").to(n,"value"),s}),e.ui.componentFactory.add("menuBar:"+vl,()=>o(Xn))}}var H_=g(2165),GM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(H_.A,GM),H_.A.locals;const Xr="italic";class WM extends ae{static get pluginName(){return"ItalicEditing"}init(){const e=this.editor,t=this.editor.t;e.model.schema.extend("$text",{allowAttributes:Xr}),e.model.schema.setAttributeProperties(Xr,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:Xr,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),e.commands.add(Xr,new F_(e,Xr)),e.keystrokes.set("CTRL+I",Xr),e.accessibility.addKeystrokeInfos({keystrokes:[{label:t("Italic text"),keystroke:"CTRL+I"}]})}}const yl="italic";class KM extends ae{static get pluginName(){return"ItalicUI"}init(){const e=this.editor,t=e.commands.get(yl),n=e.locale.t,o=V_({editor:e,commandName:yl,plugin:this,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",label:n("Italic")});e.ui.componentFactory.add(yl,()=>{const s=o(Ye);return s.set({tooltip:!0}),s.bind("isOn").to(t,"value"),s}),e.ui.componentFactory.add("menuBar:"+yl,()=>o(Xn))}}function*U_(i,e){for(const t of e)t&&i.getAttributeProperties(t[0]).copyOnEnter&&(yield t)}class YM extends Fe{execute(){this.editor.model.change(e=>{this.enterBlock(e),this.fire("afterExecute",{writer:e})})}enterBlock(e){const t=this.editor.model,n=t.document.selection,o=t.schema,s=n.isCollapsed,c=n.getFirstRange(),d=c.start.parent,h=c.end.parent;if(o.isLimit(d)||o.isLimit(h))return s||d!=h||t.deleteContent(n),!1;if(s){const p=U_(e.model.schema,n.getAttributes());return $_(e,c.start),e.setSelectionAttribute(p),!0}{const p=!(c.start.isAtStart&&c.end.isAtEnd),f=d==h;if(t.deleteContent(n,{leaveUnmerged:p}),p){if(f)return $_(e,n.focus),!0;e.setSelection(h,0)}}return!1}}function $_(i,e){i.split(e),i.setSelection(e.parent.nextSibling,0)}const QM={insertParagraph:{isSoft:!1},insertLineBreak:{isSoft:!0}};class q_ extends co{constructor(e){super(e);const t=this.document;let n=!1;t.on("keydown",(o,s)=>{n=s.shiftKey}),t.on("beforeinput",(o,s)=>{if(!this.isEnabled)return;let c=s.inputType;C.isSafari&&n&&c=="insertParagraph"&&(c="insertLineBreak");const d=s.domEvent,h=QM[c];if(!h)return;const p=new Lr(t,"enter",s.targetRanges[0]);t.fire(p,new jr(e,d,{isSoft:h.isSoft})),p.stop.called&&o.stop()})}observe(){}stopObserving(){}}class xl extends ae{static get pluginName(){return"Enter"}init(){const e=this.editor,t=e.editing.view,n=t.document,o=this.editor.t;t.addObserver(q_),e.commands.add("enter",new YM(e)),this.listenTo(n,"enter",(s,c)=>{n.isComposing||c.preventDefault(),c.isSoft||(e.execute("enter"),t.scrollToTheSelection())},{priority:"low"}),e.accessibility.addKeystrokeInfos({keystrokes:[{label:o("Insert a hard break (a new paragraph)"),keystroke:"Enter"}]})}}class ZM extends Fe{execute(){const e=this.editor.model,t=e.document;e.change(n=>{(function(o,s,c){const d=c.isCollapsed,h=c.getFirstRange(),p=h.start.parent,f=h.end.parent,w=p==f;if(d){const v=U_(o.schema,c.getAttributes());G_(o,s,h.end),s.removeSelectionAttribute(c.getAttributeKeys()),s.setSelectionAttribute(v)}else{const v=!(h.start.isAtStart&&h.end.isAtEnd);o.deleteContent(c,{leaveUnmerged:v}),w?G_(o,s,c.focus):v&&s.setSelection(f,0)}})(e,n,t.selection),this.fire("afterExecute",{writer:n})})}refresh(){const e=this.editor.model,t=e.document;this.isEnabled=function(n,o){if(o.rangeCount>1)return!1;const s=o.anchor;if(!s||!n.checkChild(s,"softBreak"))return!1;const c=o.getFirstRange(),d=c.start.parent,h=c.end.parent;return!((qh(d,n)||qh(h,n))&&d!==h)}(e.schema,t.selection)}}function G_(i,e,t){const n=e.createElement("softBreak");i.insertContent(n,t),e.setSelection(n,"after")}function qh(i,e){return!i.is("rootElement")&&(e.isLimit(i)||qh(i.parent,e))}class JM extends ae{static get pluginName(){return"ShiftEnter"}init(){const e=this.editor,t=e.model.schema,n=e.conversion,o=e.editing.view,s=o.document,c=this.editor.t;t.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(d,{writer:h})=>h.createEmptyElement("br")}),o.addObserver(q_),e.commands.add("shiftEnter",new ZM(e)),this.listenTo(s,"enter",(d,h)=>{s.isComposing||h.preventDefault(),h.isSoft&&(e.execute("shiftEnter"),o.scrollToTheSelection())},{priority:"low"}),e.accessibility.addKeystrokeInfos({keystrokes:[{label:c("Insert a soft break (a <code>&lt;br&gt;</code> element)"),keystroke:"Shift+Enter"}]})}}class XM extends Fe{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,n=t.schema,o=t.document.selection,s=Array.from(o.getSelectedBlocks()),c=e.forceValue===void 0?!this.value:e.forceValue;t.change(d=>{if(c){const h=s.filter(p=>El(p)||K_(n,p));this._applyQuote(d,h)}else this._removeQuote(d,s.filter(El))})}_getValue(){const e=Vt(this.editor.model.document.selection.getSelectedBlocks());return!(!e||!El(e))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,n=Vt(e.getSelectedBlocks());return!!n&&K_(t,n)}_removeQuote(e,t){W_(e,t).reverse().forEach(n=>{if(n.start.isAtStart&&n.end.isAtEnd)return void e.unwrap(n.start.parent);if(n.start.isAtStart){const s=e.createPositionBefore(n.start.parent);return void e.move(n,s)}n.end.isAtEnd||e.split(n.end);const o=e.createPositionAfter(n.end.parent);e.move(n,o)})}_applyQuote(e,t){const n=[];W_(e,t).reverse().forEach(o=>{let s=El(o.start);s||(s=e.createElement("blockQuote"),e.wrap(o,s)),n.push(s)}),n.reverse().reduce((o,s)=>o.nextSibling==s?(e.merge(e.createPositionAfter(o)),o):s)}}function El(i){return i.parent.name=="blockQuote"?i.parent:null}function W_(i,e){let t,n=0;const o=[];for(;n<e.length;){const s=e[n],c=e[n+1];t||(t=i.createPositionBefore(s)),c&&s.nextSibling==c||(o.push(i.createRange(t,i.createPositionAfter(s))),t=null),n++}return o}function K_(i,e){const t=i.checkChild(e.parent,"blockQuote"),n=i.checkChild(["$root","blockQuote"],e);return t&&n}class eB extends ae{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[xl,Mo]}init(){const e=this.editor,t=e.model.schema;e.commands.add("blockQuote",new XM(e)),t.register("blockQuote",{inheritAllFrom:"$container"}),e.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),e.model.document.registerPostFixer(c=>{const d=e.model.document.differ.getChanges();for(const h of d)if(h.type=="insert"){const p=h.position.nodeAfter;if(!p)continue;if(p.is("element","blockQuote")&&p.isEmpty)return c.remove(p),!0;if(p.is("element","blockQuote")&&!t.checkChild(h.position,p))return c.unwrap(p),!0;if(p.is("element")){const f=c.createRangeIn(p);for(const w of f.getItems())if(w.is("element","blockQuote")&&!t.checkChild(c.createPositionBefore(w),w))return c.unwrap(w),!0}}else if(h.type=="remove"){const p=h.position.parent;if(p.is("element","blockQuote")&&p.isEmpty)return c.remove(p),!0}return!1});const n=this.editor.editing.view.document,o=e.model.document.selection,s=e.commands.get("blockQuote");this.listenTo(n,"enter",(c,d)=>{!o.isCollapsed||!s.value||o.getLastPosition().parent.isEmpty&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),d.preventDefault(),c.stop())},{context:"blockquote"}),this.listenTo(n,"delete",(c,d)=>{if(d.direction!="backward"||!o.isCollapsed||!s.value)return;const h=o.getLastPosition().parent;h.isEmpty&&!h.previousSibling&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),d.preventDefault(),c.stop())},{context:"blockquote"})}}var Y_=g(9394),tB={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ue()(Y_.A,tB),Y_.A.locals;class nB extends ae{static get pluginName(){return"BlockQuoteUI"}init(){const e=this.editor,t=e.commands.get("blockQuote");e.ui.componentFactory.add("blockQuote",()=>{const n=this._createButton(Ye);return n.set({tooltip:!0}),n.bind("isOn").to(t,"value"),n}),e.ui.componentFactory.add("menuBar:blockQuote",()=>this._createButton(Xn))}_createButton(e){const t=this.editor,n=t.locale,o=t.commands.get("blockQuote"),s=new e(t.locale),c=n.t;return s.set({label:c("Block quote"),icon:Le.quote,isToggleable:!0}),s.bind("isEnabled").to(o,"isEnabled"),this.listenTo(s,"execute",()=>{t.execute("blockQuote"),t.editing.view.focus()}),s}}const oB={autoRefresh:!0},Q_=36e5;class Gh extends ze(){constructor(e,t={}){if(super(),!e)throw new B("token-missing-token-url",this);t.initValue&&this._validateTokenValue(t.initValue),this.set("value",t.initValue),this._refresh=typeof e=="function"?e:()=>{return n=e,new Promise((o,s)=>{const c=new XMLHttpRequest;c.open("GET",n),c.addEventListener("load",()=>{const d=c.status,h=c.response;return d<200||d>299?s(new B("token-cannot-download-new-token",null)):o(h)}),c.addEventListener("error",()=>s(new Error("Network Error"))),c.addEventListener("abort",()=>s(new Error("Abort"))),c.send()});var n},this._options={...oB,...t}}init(){return new Promise((e,t)=>{this.value?(this._options.autoRefresh&&this._registerRefreshTokenTimeout(),e(this)):this.refreshToken().then(e).catch(t)})}refreshToken(){return this._refresh().then(e=>(this._validateTokenValue(e),this.set("value",e),this._options.autoRefresh&&this._registerRefreshTokenTimeout(),this))}destroy(){clearTimeout(this._tokenRefreshTimeout)}_validateTokenValue(e){const t=typeof e=="string",n=!/^".*"$/.test(e),o=t&&e.split(".").length===3;if(!n||!o)throw new B("token-not-in-jwt-format",this)}_registerRefreshTokenTimeout(){const e=this._getTokenRefreshTimeoutTime();clearTimeout(this._tokenRefreshTimeout),this._tokenRefreshTimeout=setTimeout(()=>{this.refreshToken()},e)}_getTokenRefreshTimeoutTime(){try{const[,e]=this.value.split("."),{exp:t}=JSON.parse(atob(e));return t?Math.floor((1e3*t-Date.now())/2):Q_}catch{return Q_}}static create(e,t={}){return new Gh(e,t).init()}}const Wh=/^data:(\S*?);base64,/;class iB extends fe(){constructor(e,t,n){if(super(),!e)throw new B("fileuploader-missing-file",null);if(!t)throw new B("fileuploader-missing-token",null);if(!n)throw new B("fileuploader-missing-api-address",null);this.file=function(o){if(typeof o!="string")return!1;const s=o.match(Wh);return!(!s||!s.length)}(e)?function(o,s=512){try{const c=o.match(Wh)[1],d=atob(o.replace(Wh,"")),h=[];for(let p=0;p<d.length;p+=s){const f=d.slice(p,p+s),w=new Array(f.length);for(let v=0;v<f.length;v++)w[v]=f.charCodeAt(v);h.push(new Uint8Array(w))}return new Blob(h,{type:c})}catch{throw new B("fileuploader-decoding-image-data-error",null)}}(e):e,this._token=t,this._apiAddress=n}onProgress(e){return this.on("progress",(t,n)=>e(n)),this}onError(e){return this.once("error",(t,n)=>e(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const e=new XMLHttpRequest;e.open("POST",this._apiAddress),e.setRequestHeader("Authorization",this._token.value),e.responseType="json",this.xhr=e}_attachXHRListeners(){const e=this.xhr,t=n=>()=>this.fire("error",n);e.addEventListener("error",t("Network Error")),e.addEventListener("abort",t("Abort")),e.upload&&e.upload.addEventListener("progress",n=>{n.lengthComputable&&this.fire("progress",{total:n.total,uploaded:n.loaded})}),e.addEventListener("load",()=>{const n=e.status,o=e.response;if(n<200||n>299)return this.fire("error",o.message||o.error)})}_sendRequest(){const e=new FormData,t=this.xhr;return e.append("file",this.file),new Promise((n,o)=>{t.addEventListener("load",()=>{const s=t.status,c=t.response;return s<200||s>299?c.message?o(new B("fileuploader-uploading-data-failed",this,{message:c.message})):o(c.error):n(c)}),t.addEventListener("error",()=>o(new Error("Network Error"))),t.addEventListener("abort",()=>o(new Error("Abort"))),t.send(e)})}}class rB{constructor(e,t){if(!e)throw new B("uploadgateway-missing-token",null);if(!t)throw new B("uploadgateway-missing-api-address",null);this._token=e,this._apiAddress=t}upload(e){return new iB(e,this._token,this._apiAddress)}}class sB extends Fc{static get pluginName(){return"CloudServicesCore"}createToken(e,t){return new Gh(e,t)}createUploadGateway(e,t){return new rB(e,t)}}class va extends Jo{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function n(o){return(s,c)=>{c.preventDefault();const d=c.dropRange?[c.dropRange]:null,h=new F(t,o);t.fire(h,{dataTransfer:c.dataTransfer,method:s.name,targetRanges:d,target:c.target,domEvent:c.domEvent}),h.stop.called&&c.stopPropagation()}}this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",o={dataTransfer:new ab(t,{cacheFiles:n})};e.type!="drop"&&e.type!="dragover"||(o.dropRange=function(s,c){const d=c.target.ownerDocument,h=c.clientX,p=c.clientY;let f;return d.caretRangeFromPoint&&d.caretRangeFromPoint(h,p)?f=d.caretRangeFromPoint(h,p):c.rangeParent&&(f=d.createRange(),f.setStart(c.rangeParent,c.rangeOffset),f.collapse(!0)),f?s.domConverter.domRangeToView(f):null}(this.view,e)),this.fire(e.type,e,o)}}const Z_=["figcaption","li"],J_=["ol","ul"];function X_(i){if(i.is("$text")||i.is("$textProxy"))return i.data;if(i.is("element","img")&&i.hasAttribute("alt"))return i.getAttribute("alt");if(i.is("element","br"))return`
`;let e="",t=null;for(const n of i.getChildren())e+=aB(n,t)+X_(n),t=n;return e}function aB(i,e){return e?i.is("element","li")&&!i.isEmpty&&i.getChild(0).is("containerElement")||J_.includes(i.name)&&J_.includes(e.name)?`

`:i.is("containerElement")||e.is("containerElement")?Z_.includes(i.name)||Z_.includes(e.name)?`
`:`

 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(r,a){(function(l,u){r.exports=u(gq)})(self,l=>(()=>{var u={976:_=>{_.exports=l}},g={};function b(_){var m=g[_];if(m!==void 0)return m.exports;var y=g[_]={exports:{}};return u[_](y,y.exports,b),y.exports}b.d=(_,m)=>{for(var y in m)b.o(m,y)&&!b.o(_,y)&&Object.defineProperty(_,y,{enumerable:!0,get:m[y]})},b.o=(_,m)=>Object.prototype.hasOwnProperty.call(_,m);var k={};return(()=>{b.d(k,{default:()=>Jt});var _=b(976);const m=function(pe){var Re=typeof pe;return pe!=null&&(Re=="object"||Re=="function")},y=typeof cs=="object"&&cs&&cs.Object===Object&&cs;var C=typeof self=="object"&&self&&self.Object===Object&&self;const x=y||C||Function("return this")(),A=function(){return x.Date.now()};var D=/\s/;const T=function(pe){for(var Re=pe.length;Re--&&D.test(pe.charAt(Re)););return Re};var M=/^\s+/;const O=function(pe){return pe&&pe.slice(0,T(pe)+1).replace(M,"")},F=x.Symbol;var z=Object.prototype,P=z.hasOwnProperty,R=z.toString,$=F?F.toStringTag:void 0;const q=function(pe){var Re=P.call(pe,$),Ie=pe[$];try{pe[$]=void 0;var ct=!0}catch{}var Ft=R.call(pe);return ct&&(Re?pe[$]=Ie:delete pe[$]),Ft};var B=Object.prototype.toString;const V=function(pe){return B.call(pe)};var W=F?F.toStringTag:void 0;const J=function(pe){return pe==null?pe===void 0?"[object Undefined]":"[object Null]":W&&W in Object(pe)?q(pe):V(pe)},ce=function(pe){return pe!=null&&typeof pe=="object"},te=function(pe){return typeof pe=="symbol"||ce(pe)&&J(pe)=="[object Symbol]"};var de=/^[-+]0x[0-9a-f]+$/i,Ee=/^0b[01]+$/i,xe=/^0o[0-7]+$/i,be=parseInt;const fe=function(pe){if(typeof pe=="number")return pe;if(te(pe))return NaN;if(m(pe)){var Re=typeof pe.valueOf=="function"?pe.valueOf():pe;pe=m(Re)?Re+"":Re}if(typeof pe!="string")return pe===0?pe:+pe;pe=O(pe);var Ie=Ee.test(pe);return Ie||xe.test(pe)?be(pe.slice(2),Ie?2:8):de.test(pe)?NaN:+pe};var Ce=Math.max,Ot=Math.min;const wn=function(pe,Re,Ie){var ct,Ft,an,Xt,wt,cn,ze=0,j=!1,U=!1,Z=!0;if(typeof pe!="function")throw new TypeError("Expected a function");function oe(ee){var ke=ct,we=Ft;return ct=Ft=void 0,ze=ee,Xt=pe.apply(we,ke)}function ie(ee){return ze=ee,wt=setTimeout(ge,Re),j?oe(ee):Xt}function le(ee){var ke=ee-cn;return cn===void 0||ke>=Re||ke<0||U&&ee-ze>=an}function ge(){var ee=A();if(le(ee))return re(ee);wt=setTimeout(ge,function(ke){var we=Re-(ke-cn);return U?Ot(we,an-(ke-ze)):we}(ee))}function re(ee){return wt=void 0,Z&&ct?oe(ee):(ct=Ft=void 0,Xt)}function se(){var ee=A(),ke=le(ee);if(ct=arguments,Ft=this,cn=ee,ke){if(wt===void 0)return ie(cn);if(U)return clearTimeout(wt),wt=setTimeout(ge,Re),oe(cn)}return wt===void 0&&(wt=setTimeout(ge,Re)),Xt}return Re=fe(Re)||0,m(Ie)&&(j=!!Ie.leading,an=(U="maxWait"in Ie)?Ce(fe(Ie.maxWait)||0,Re):an,Z="trailing"in Ie?!!Ie.trailing:Z),se.cancel=function(){wt!==void 0&&clearTimeout(wt),ze=0,ct=cn=Ft=wt=void 0},se.flush=function(){return wt===void 0?Xt:re(A())},se},sn=(0,_.defineComponent)({name:"Ckeditor",model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,required:!0},config:{type:Object,default:()=>({})},modelValue:{type:String,default:""},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1},disableTwoWayDataBinding:{type:Boolean,default:!1}},emits:["ready","destroy","blur","focus","input","update:modelValue"],data:()=>({instance:null,lastEditorData:null}),watch:{modelValue(pe){this.instance&&pe!==this.lastEditorData&&this.instance.data.set(pe)},disabled(pe){pe?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},created(){const{CKEDITOR_VERSION:pe}=window;if(pe){const[Re]=pe.split(".").map(Number);Re<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},mounted(){const pe=Object.assign({},this.config);this.modelValue&&(pe.initialData=this.modelValue),this.editor.create(this.$el,pe).then(Re=>{this.instance=(0,_.markRaw)(Re),this.setUpEditorEvents(),this.modelValue!==pe.initialData&&Re.data.set(this.modelValue),this.disabled&&Re.enableReadOnlyMode("Integration Sample"),this.$emit("ready",Re)}).catch(Re=>{console.error(Re)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},methods:{setUpEditorEvents(){const pe=this.instance,Re=wn(Ie=>{if(this.disableTwoWayDataBinding)return;const ct=this.lastEditorData=pe.data.get();this.$emit("update:modelValue",ct,Ie,pe),this.$emit("input",ct,Ie,pe)},300,{leading:!0});pe.model.document.on("change:data",Re),pe.editing.view.document.on("focus",Ie=>{this.$emit("focus",Ie,pe)}),pe.editing.view.document.on("blur",Ie=>{this.$emit("blur",Ie,pe)})}},render(){return(0,_.h)(this.tagName)}});if(!_.version||!_.version.startsWith("3."))throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Jt={install(pe){pe.component("Ckeditor",sn)},component:sn}})(),k=k.default})())})(cD);var mq=cD.exports;const fq=Nm(mq);ZV({resolve:r=>Object.assign({"./Pages/auth/LoginPage.vue":kH,"./Pages/client/ClientKategoriBerita.vue":GH,"./Pages/client/ClientPage.vue":oU,"./Pages/client/ClientPostingPage.vue":lU,"./Pages/kategori/KategoriIndexPage.vue":YU,"./Pages/postingan/BuatPostinganBaruPage.vue":a$,"./Pages/postingan/EditPostinganPage.vue":k$,"./Pages/postingan/SemuaPostinganPage.vue":M$})[`./Pages/${r}.vue`],setup({el:r,App:a,props:l,plugin:u}){eE({render:()=>ar(a,l)}).use(u).use(pq,aD).use(fq).mount(r)}})});export default kq();