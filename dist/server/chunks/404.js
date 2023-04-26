"use strict";
exports.id = 404;
exports.ids = [404];
exports.modules = {

/***/ 23690:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ St)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react_, 2);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
var match = __webpack_require__(58118);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(71147);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(41464);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.js
var keyboard = __webpack_require__(21550);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.js
var bugs = __webpack_require__(65410);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.js
var use_id = __webpack_require__(26304);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var use_server_handoff_complete = __webpack_require__(75650);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/hidden.js
var internal_hidden = __webpack_require__(29042);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/focus-management.js
var focus_management = __webpack_require__(3110);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(62264);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var use_latest_value = __webpack_require__(94612);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-window-event.js
function s(e,r,n){let o=(0,use_latest_value/* useLatestValue */.E)(r);(0,react_.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var use_tab_direction_s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(use_tab_direction_s||{});function use_tab_direction_n(){let e=(0,react_.useRef)(0);return s("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var use_is_mounted = __webpack_require__(23984);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/owner.js
var owner = __webpack_require__(61506);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-owner.js
function use_owner_n(...e){return (0,react_.useMemo)(()=>(0,owner/* getOwnerDocument */.r)(...e),[...e])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js
function use_event_listener_E(n,e,a,t){let i=(0,use_latest_value/* useLatestValue */.E)(a);(0,react_.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/micro-task.js
var micro_task = __webpack_require__(38571);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-watch.js
function m(u,t){let e=(0,react_.useRef)([]),r=(0,use_event/* useEvent */.z)(u);(0,react_.useEffect)(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t])}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
var use_disposables = __webpack_require__(88060);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let n=new Set;for(let e of t.current)e.current instanceof HTMLElement&&n.add(e.current);return n}let J="div";var h=(r=>(r[r.None=1]="None",r[r.InitialFocus=2]="InitialFocus",r[r.TabLock=4]="TabLock",r[r.FocusLock=8]="FocusLock",r[r.RestoreFocus=16]="RestoreFocus",r[r.All=30]="All",r))(h||{});function X(t,n){let e=(0,react_.useRef)(null),o=(0,use_sync_refs/* useSyncRefs */.T)(e,n),{initialFocus:u,containers:i,features:r=30,...l}=t;(0,use_server_handoff_complete/* useServerHandoffComplete */.H)()||(r=1);let m=use_owner_n(e);Q({ownerDocument:m},Boolean(r&16));let c=Y({ownerDocument:m,container:e,initialFocus:u},Boolean(r&2));Z({ownerDocument:m,container:e,containers:i,previousActiveElement:c},Boolean(r&8));let v=use_tab_direction_n(),R=(0,use_event/* useEvent */.z)(s=>{let T=e.current;if(!T)return;(B=>B())(()=>{(0,match/* match */.E)(v.current,{[use_tab_direction_s.Forwards]:()=>{(0,focus_management/* focusIn */.jA)(T,focus_management/* Focus.First */.TO.First,{skipElements:[s.relatedTarget]})},[use_tab_direction_s.Backwards]:()=>{(0,focus_management/* focusIn */.jA)(T,focus_management/* Focus.Last */.TO.Last,{skipElements:[s.relatedTarget]})}})})}),_=(0,use_disposables/* useDisposables */.G)(),H=(0,react_.useRef)(!1),j={ref:o,onKeyDown(s){s.key=="Tab"&&(H.current=!0,_.requestAnimationFrame(()=>{H.current=!1}))},onBlur(s){let T=P(i);e.current instanceof HTMLElement&&T.add(e.current);let E=s.relatedTarget;E instanceof HTMLElement&&E.dataset.headlessuiFocusGuard!=="true"&&(S(T,E)||(H.current?(0,focus_management/* focusIn */.jA)(e.current,(0,match/* match */.E)(v.current,{[use_tab_direction_s.Forwards]:()=>focus_management/* Focus.Next */.TO.Next,[use_tab_direction_s.Backwards]:()=>focus_management/* Focus.Previous */.TO.Previous})|focus_management/* Focus.WrapAround */.TO.WrapAround,{relativeTo:s.target}):s.target instanceof HTMLElement&&(0,focus_management/* focusElement */.C5)(s.target)))}};return react_.createElement(react_.Fragment,null,Boolean(r&4)&&react_.createElement(internal_hidden/* Hidden */._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:internal_hidden/* Features.Focusable */.A.Focusable}),(0,render/* render */.sY)({ourProps:j,theirProps:l,defaultTag:J,name:"FocusTrap"}),Boolean(r&4)&&react_.createElement(internal_hidden/* Hidden */._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:internal_hidden/* Features.Focusable */.A.Focusable}))}let z=(0,render/* forwardRefWithAs */.yV)(X),ye=Object.assign(z,{features:h}),a=[];if(typeof window!="undefined"&&typeof document!="undefined"){let t=function(n){n.target instanceof HTMLElement&&n.target!==document.body&&a[0]!==n.target&&(a.unshift(n.target),a=a.filter(e=>e!=null&&e.isConnected),a.splice(10))};var handle=t;window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})}function D(t=!0){let n=(0,react_.useRef)(a.slice());return m(([e],[o])=>{o===!0&&e===!1&&(0,micro_task/* microTask */.Y)(()=>{n.current.splice(0)}),o===!1&&e===!0&&(n.current=a.slice())},[t,a,n]),(0,use_event/* useEvent */.z)(()=>{var e;return(e=n.current.find(o=>o!=null&&o.isConnected))!=null?e:null})}function Q({ownerDocument:t},n){let e=D(n);m(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&(0,focus_management/* focusElement */.C5)(e())},[n]);let o=(0,react_.useRef)(!1);(0,react_.useEffect)(()=>(o.current=!1,()=>{o.current=!0,(0,micro_task/* microTask */.Y)(()=>{o.current&&(0,focus_management/* focusElement */.C5)(e())})}),[])}function Y({ownerDocument:t,container:n,initialFocus:e},o){let u=(0,react_.useRef)(null),i=(0,use_is_mounted/* useIsMounted */.t)();return m(()=>{if(!o)return;let r=n.current;r&&(0,micro_task/* microTask */.Y)(()=>{if(!i.current)return;let l=t==null?void 0:t.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===l){u.current=l;return}}else if(r.contains(l)){u.current=l;return}e!=null&&e.current?(0,focus_management/* focusElement */.C5)(e.current):(0,focus_management/* focusIn */.jA)(r,focus_management/* Focus.First */.TO.First)===focus_management/* FocusResult.Error */.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),u.current=t==null?void 0:t.activeElement})},[o]),u}function Z({ownerDocument:t,container:n,containers:e,previousActiveElement:o},u){let i=(0,use_is_mounted/* useIsMounted */.t)();use_event_listener_E(t==null?void 0:t.defaultView,"focus",r=>{if(!u||!i.current)return;let l=P(e);n.current instanceof HTMLElement&&l.add(n.current);let m=o.current;if(!m)return;let c=r.target;c&&c instanceof HTMLElement?S(l,c)?(o.current=c,(0,focus_management/* focusElement */.C5)(c)):(r.preventDefault(),r.stopPropagation(),(0,focus_management/* focusElement */.C5)(m)):(0,focus_management/* focusElement */.C5)(o.current)},!0)}function S(t,n){for(let e of t)if(e.contains(n))return!0;return!1}

// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(98704);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var use_iso_morphic_effect = __webpack_require__(13652);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/portal-force-root.js
let e=(0,react_.createContext)(!1);function portal_force_root_l(){return (0,react_.useContext)(e)}function portal_force_root_P(o){return react_.createElement(e.Provider,{value:o.force},o.children)}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/env.js
var env = __webpack_require__(63957);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/portal/portal.js
function H(u){let a=portal_force_root_l(),o=(0,react_.useContext)(c),e=use_owner_n(u),[l,n]=(0,react_.useState)(()=>{if(!a&&o!==null||env/* env.isServer */.O.isServer)return null;let t=e==null?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(e===null)return null;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)});return (0,react_.useEffect)(()=>{l!==null&&(e!=null&&e.body.contains(l)||e==null||e.body.appendChild(l))},[l,e]),(0,react_.useEffect)(()=>{a||o!==null&&n(o.current)},[o,n,a]),l}let O=react_.Fragment;function _(u,a){let o=u,e=(0,react_.useRef)(null),l=(0,use_sync_refs/* useSyncRefs */.T)((0,use_sync_refs/* optionalRef */.h)(p=>{e.current=p}),a),n=use_owner_n(e),t=H(e),[r]=(0,react_.useState)(()=>{var p;return env/* env.isServer */.O.isServer?null:(p=n==null?void 0:n.createElement("div"))!=null?p:null}),y=(0,use_server_handoff_complete/* useServerHandoffComplete */.H)(),f=(0,react_.useRef)(!1);return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{if(f.current=!1,!(!t||!r))return t.contains(r)||(r.setAttribute("data-headlessui-portal",""),t.appendChild(r)),()=>{f.current=!0,(0,micro_task/* microTask */.Y)(()=>{var p;f.current&&(!t||!r||(r instanceof Node&&t.contains(r)&&t.removeChild(r),t.childNodes.length<=0&&((p=t.parentElement)==null||p.removeChild(t))))})}},[t,r]),y?!t||!r?null:(0,server_rendering_stub_.createPortal)((0,render/* render */.sY)({ourProps:{ref:l},theirProps:o,defaultTag:O,name:"Portal"}),r):null}let F=react_.Fragment,c=(0,react_.createContext)(null);function U(u,a){let{target:o,...e}=u,n={ref:(0,use_sync_refs/* useSyncRefs */.T)(a)};return react_.createElement(c.Provider,{value:o},(0,render/* render */.sY)({ourProps:n,theirProps:e,defaultTag:F,name:"Popover.Group"}))}let portal_S=(0,render/* forwardRefWithAs */.yV)(_),j=(0,render/* forwardRefWithAs */.yV)(U),portal_te=Object.assign(portal_S,{Group:j});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/description/description.js
let d=(0,react_.createContext)(null);function f(){let r=(0,react_.useContext)(d);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,f),t}return r}function M(){let[r,t]=(0,react_.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react_.useMemo)(()=>function(e){let i=(0,use_event/* useEvent */.z)(s=>(t(o=>[...o,s]),()=>t(o=>{let p=o.slice(),c=p.indexOf(s);return c!==-1&&p.splice(c,1),p}))),n=(0,react_.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react_.createElement(d.Provider,{value:n},e.children)},[t])]}let description_S="p";function description_h(r,t){let a=(0,use_id/* useId */.M)(),{id:e=`headlessui-description-${a}`,...i}=r,n=f(),s=(0,use_sync_refs/* useSyncRefs */.T)(t);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>n.register(e),[e,n.register]);let o={ref:s,...n.props,id:e};return (0,render/* render */.sY)({ourProps:o,theirProps:i,slot:n.slot||{},defaultTag:description_S,name:n.name||"Description"})}let y=(0,render/* forwardRefWithAs */.yV)(description_h),b=Object.assign(y,{});

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
var open_closed = __webpack_require__(97844);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/stack-context.js
let stack_context_a=(0,react_.createContext)(()=>{});stack_context_a.displayName="StackContext";var stack_context_s=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(stack_context_s||{});function x(){return (0,react_.useContext)(stack_context_a)}function stack_context_M({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=x(),o=(0,use_event/* useEvent */.z)((...t)=>{r==null||r(...t),l(...t)});return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{let t=u===void 0||u===!0;return t&&o(0,e,n),()=>{t&&o(1,e,n)}},[o,e,n,u]),react_.createElement(stack_context_a.Provider,{value:o},i)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-document-event.js
function use_document_event_d(e,r,n){let o=(0,use_latest_value/* useLatestValue */.E)(r);(0,react_.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function L(m,E,c=!0){let i=(0,react_.useRef)(!1);(0,react_.useEffect)(()=>{requestAnimationFrame(()=>{i.current=c})},[c]);function f(e,o){if(!i.current||e.defaultPrevented)return;let l=function r(t){return typeof t=="function"?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(m),n=o(e);if(n!==null&&n.getRootNode().contains(n)){for(let r of l){if(r===null)continue;let t=r instanceof HTMLElement?r:r.current;if(t!=null&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return!(0,focus_management/* isFocusableElement */.sP)(n,focus_management/* FocusableMode.Loose */.tJ.Loose)&&n.tabIndex!==-1&&e.preventDefault(),E(e,n)}}let u=(0,react_.useRef)(null);use_document_event_d("mousedown",e=>{var o,l;i.current&&(u.current=((l=(o=e.composedPath)==null?void 0:o.call(e))==null?void 0:l[0])||e.target)},!0),use_document_event_d("click",e=>{u.current&&(f(e,()=>u.current),u.current=null)},!0),use_document_event_d("blur",e=>f(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
function i(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const useSyncExternalStoreShimClient_d=typeof Object.is=="function"?Object.is:i,{useState:u,useEffect:useSyncExternalStoreShimClient_h,useLayoutEffect:useSyncExternalStoreShimClient_f,useDebugValue:p}=react_namespaceObject;let useSyncExternalStoreShimClient_S=(/* unused pure expression or super */ null && (!1)),useSyncExternalStoreShimClient_=(/* unused pure expression or super */ null && (!1));function useSyncExternalStoreShimClient_y(e,t,c){const a=t(),[{inst:n},o]=u({inst:{value:a,getSnapshot:t}});return useSyncExternalStoreShimClient_f(()=>{n.value=a,n.getSnapshot=t,r(n)&&o({inst:n})},[e,a,t]),useSyncExternalStoreShimClient_h(()=>(r(n)&&o({inst:n}),e(()=>{r(n)&&o({inst:n})})),[e]),p(a),a}function r(e){const t=e.getSnapshot,c=e.value;try{const a=t();return!useSyncExternalStoreShimClient_d(c,a)}catch{return!0}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t(r,e,n){return e()}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
const use_sync_external_store_shim_r=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",use_sync_external_store_shim_s=!use_sync_external_store_shim_r,use_sync_external_store_shim_c=use_sync_external_store_shim_s?t:useSyncExternalStoreShimClient_y,use_sync_external_store_shim_a="useSyncExternalStore" in react_namespaceObject?(n=>n.useSyncExternalStore)(react_namespaceObject):use_sync_external_store_shim_c;

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-store.js
function use_store_S(t){return use_sync_external_store_shim_a(t.subscribe,t.getSnapshot,t.getSnapshot)}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.js
var disposables = __webpack_require__(2698);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/store.js
function store_a(o,r){let t=o(),n=new Set;return{getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()))}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function adjust_scrollbar_padding_c(){let o;return{before({doc:e}){var l;let n=e.documentElement;o=((l=e.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:e,d:n}){let t=e.documentElement,l=t.clientWidth-t.offsetWidth,r=o-l;n.style(t,"paddingRight",`${r}px`)}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/platform.js
function platform_t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function platform_i(){return/Android/gi.test(window.navigator.userAgent)}function n(){return platform_t()||platform_i()}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function handle_ios_locking_p(){if(!platform_t())return{};let o;return{before(){o=window.pageYOffset},after({doc:r,d:l,meta:s}){function i(e){return s.containers.flatMap(t=>t()).some(t=>t.contains(e))}l.style(r.body,"marginTop",`-${o}px`),window.scrollTo(0,0);let n=null;l.addEventListener(r,"click",e=>{if(e.target instanceof HTMLElement)try{let t=e.target.closest("a");if(!t)return;let{hash:c}=new URL(t.href),a=r.querySelector(c);a&&!i(a)&&(n=a)}catch{}},!0),l.addEventListener(r,"touchmove",e=>{e.target instanceof HTMLElement&&!i(e.target)&&e.preventDefault()},{passive:!1}),l.add(()=>{window.scrollTo(0,window.pageYOffset+o),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)})}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l(){return{before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden")}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function overflow_store_m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let overflow_store_a=store_a(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:(0,disposables/* disposables */.k)(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:overflow_store_m(t)},c=[handle_ios_locking_p(),adjust_scrollbar_padding_c(),l()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});overflow_store_a.subscribe(()=>{let e=overflow_store_a.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&overflow_store_a.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&overflow_store_a.dispatch("TEARDOWN",t)}});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function use_document_overflow_p(e,r,n){let f=use_store_S(overflow_store_a),o=e?f.get(e):void 0,i=o?o.count>0:!1;return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{if(!(!e||!r))return overflow_store_a.dispatch("PUSH",e,n),()=>overflow_store_a.dispatch("POP",e,n)},[r,e]),i}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-inert.js
let use_inert_u=new Map,use_inert_t=new Map;function use_inert_h(r,l=!0){(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{var o;if(!l)return;let e=typeof r=="function"?r():r.current;if(!e)return;function a(){var d;if(!e)return;let i=(d=use_inert_t.get(e))!=null?d:1;if(i===1?use_inert_t.delete(e):use_inert_t.set(e,i-1),i!==1)return;let n=use_inert_u.get(e);n&&(n["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,use_inert_u.delete(e))}let f=(o=use_inert_t.get(e))!=null?o:0;return use_inert_t.set(e,f+1),f!==0||(use_inert_u.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),a},[r,l])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Se=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Se||{}),Fe=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Fe||{});let ke={[0](t,e){return t.titleId===e.id?t:{...t,titleId:e.id}}},dialog_M=(0,react_.createContext)(null);dialog_M.displayName="DialogContext";function dialog_S(t){let e=(0,react_.useContext)(dialog_M);if(e===null){let o=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,dialog_S),o}return e}function xe(t,e,o=()=>[document.body]){use_document_overflow_p(t,e,s=>{var n;return{containers:[...(n=s.containers)!=null?n:[],o]}})}function _e(t,e){return (0,match/* match */.E)(e.type,ke,t,e)}let Me="div",He=render/* Features.RenderStrategy */.AN.RenderStrategy|render/* Features.Static */.AN.Static;function Ie(t,e){let o=(0,use_id/* useId */.M)(),{id:s=`headlessui-dialog-${o}`,open:n,onClose:l,initialFocus:d,__demoMode:c=!1,...D}=t,[P,F]=(0,react_.useState)(0),i=(0,open_closed/* useOpenClosed */.oJ)();n===void 0&&i!==null&&(n=(i&open_closed/* State.Open */.ZM.Open)===open_closed/* State.Open */.ZM.Open);let m=(0,react_.useRef)(null),Q=(0,use_sync_refs/* useSyncRefs */.T)(m,e),y=(0,react_.useRef)(null),p=use_owner_n(m),U=t.hasOwnProperty("open")||i!==null,N=t.hasOwnProperty("onClose");if(!U&&!N)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!U)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!N)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof n!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let u=n?0:1,[E,Z]=(0,react_.useReducer)(_e,{titleId:null,descriptionId:null,panelRef:(0,react_.createRef)()}),A=(0,use_event/* useEvent */.z)(()=>l(!1)),Y=(0,use_event/* useEvent */.z)(r=>Z({type:0,id:r})),k=(0,use_server_handoff_complete/* useServerHandoffComplete */.H)()?c?!1:u===0:!1,x=P>1,$=(0,react_.useContext)(dialog_M)!==null,ee=x?"parent":"leaf",W=i!==null?(i&open_closed/* State.Closing */.ZM.Closing)===open_closed/* State.Closing */.ZM.Closing:!1,te=(()=>$||W?!1:k)(),oe=(0,react_.useCallback)(()=>{var r,f;return(f=Array.from((r=p==null?void 0:p.querySelectorAll("body > *"))!=null?r:[]).find(a=>a.id==="headlessui-portal-root"?!1:a.contains(y.current)&&a instanceof HTMLElement))!=null?f:null},[y]);use_inert_h(oe,te);let re=(()=>x?!0:k)(),ne=(0,react_.useCallback)(()=>{var r,f;return(f=Array.from((r=p==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?r:[]).find(a=>a.contains(y.current)&&a instanceof HTMLElement))!=null?f:null},[y]);use_inert_h(ne,re);let H=(0,use_event/* useEvent */.z)(()=>{var f,a;return[...Array.from((f=p==null?void 0:p.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?f:[]).filter(T=>!(T===document.body||T===document.head||!(T instanceof HTMLElement)||T.contains(y.current)||E.panelRef.current&&T.contains(E.panelRef.current))),(a=E.panelRef.current)!=null?a:m.current]}),le=(()=>!(!k||x))();L(()=>H(),A,le);let ae=(()=>!(x||u!==0))();use_event_listener_E(p==null?void 0:p.defaultView,"keydown",r=>{ae&&(r.defaultPrevented||r.key===keyboard/* Keys.Escape */.R.Escape&&(r.preventDefault(),r.stopPropagation(),A()))});let ie=(()=>!(W||u!==0||$))();xe(p,ie,H),(0,react_.useEffect)(()=>{if(u!==0||!m.current)return;let r=new ResizeObserver(f=>{for(let a of f){let T=a.target.getBoundingClientRect();T.x===0&&T.y===0&&T.width===0&&T.height===0&&A()}});return r.observe(m.current),()=>r.disconnect()},[u,m,A]);let[se,pe]=M(),de=(0,react_.useMemo)(()=>[{dialogState:u,close:A,setTitleId:Y},E],[u,E,A,Y]),J=(0,react_.useMemo)(()=>({open:u===0}),[u]),ue={ref:Q,id:s,role:"dialog","aria-modal":u===0?!0:void 0,"aria-labelledby":E.titleId,"aria-describedby":se};return react_.createElement(stack_context_M,{type:"Dialog",enabled:u===0,element:m,onUpdate:(0,use_event/* useEvent */.z)((r,f)=>{f==="Dialog"&&(0,match/* match */.E)(r,{[stack_context_s.Add]:()=>F(a=>a+1),[stack_context_s.Remove]:()=>F(a=>a-1)})})},react_.createElement(portal_force_root_P,{force:!0},react_.createElement(portal_te,null,react_.createElement(dialog_M.Provider,{value:de},react_.createElement(portal_te.Group,{target:m},react_.createElement(portal_force_root_P,{force:!1},react_.createElement(pe,{slot:J,name:"Dialog.Description"},react_.createElement(ye,{initialFocus:d,containers:H,features:k?(0,match/* match */.E)(ee,{parent:ye.features.RestoreFocus,leaf:ye.features.All&~ye.features.FocusLock}):ye.features.None},(0,render/* render */.sY)({ourProps:ue,theirProps:D,slot:J,defaultTag:Me,features:He,visible:u===0,name:"Dialog"})))))))),react_.createElement(internal_hidden/* Hidden */._,{features:internal_hidden/* Features.Hidden */.A.Hidden,ref:y}))}let we="div";function Be(t,e){let o=(0,use_id/* useId */.M)(),{id:s=`headlessui-dialog-overlay-${o}`,...n}=t,[{dialogState:l,close:d}]=dialog_S("Dialog.Overlay"),c=(0,use_sync_refs/* useSyncRefs */.T)(e),D=(0,use_event/* useEvent */.z)(i=>{if(i.target===i.currentTarget){if((0,bugs/* isDisabledReactIssue7711 */.P)(i.currentTarget))return i.preventDefault();i.preventDefault(),i.stopPropagation(),d()}}),P=(0,react_.useMemo)(()=>({open:l===0}),[l]);return (0,render/* render */.sY)({ourProps:{ref:c,id:s,"aria-hidden":!0,onClick:D},theirProps:n,slot:P,defaultTag:we,name:"Dialog.Overlay"})}let Ge="div";function Ue(t,e){let o=(0,use_id/* useId */.M)(),{id:s=`headlessui-dialog-backdrop-${o}`,...n}=t,[{dialogState:l},d]=dialog_S("Dialog.Backdrop"),c=(0,use_sync_refs/* useSyncRefs */.T)(e);(0,react_.useEffect)(()=>{if(d.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[d.panelRef]);let D=(0,react_.useMemo)(()=>({open:l===0}),[l]);return react_.createElement(portal_force_root_P,{force:!0},react_.createElement(portal_te,null,(0,render/* render */.sY)({ourProps:{ref:c,id:s,"aria-hidden":!0},theirProps:n,slot:D,defaultTag:Ge,name:"Dialog.Backdrop"})))}let Ne="div";function Ye(t,e){let o=(0,use_id/* useId */.M)(),{id:s=`headlessui-dialog-panel-${o}`,...n}=t,[{dialogState:l},d]=dialog_S("Dialog.Panel"),c=(0,use_sync_refs/* useSyncRefs */.T)(e,d.panelRef),D=(0,react_.useMemo)(()=>({open:l===0}),[l]),P=(0,use_event/* useEvent */.z)(i=>{i.stopPropagation()});return (0,render/* render */.sY)({ourProps:{ref:c,id:s,onClick:P},theirProps:n,slot:D,defaultTag:Ne,name:"Dialog.Panel"})}let $e="h2";function We(t,e){let o=(0,use_id/* useId */.M)(),{id:s=`headlessui-dialog-title-${o}`,...n}=t,[{dialogState:l,setTitleId:d}]=dialog_S("Dialog.Title"),c=(0,use_sync_refs/* useSyncRefs */.T)(e);(0,react_.useEffect)(()=>(d(s),()=>d(null)),[s,d]);let D=(0,react_.useMemo)(()=>({open:l===0}),[l]);return (0,render/* render */.sY)({ourProps:{ref:c,id:s},theirProps:n,slot:D,defaultTag:$e,name:"Dialog.Title"})}let Je=(0,render/* forwardRefWithAs */.yV)(Ie),Xe=(0,render/* forwardRefWithAs */.yV)(Ue),je=(0,render/* forwardRefWithAs */.yV)(Ye),Ke=(0,render/* forwardRefWithAs */.yV)(Be),Ve=(0,render/* forwardRefWithAs */.yV)(We),St=Object.assign(Je,{Backdrop:Xe,Panel:je,Overlay:Ke,Title:Ve,Description:b});


/***/ }),

/***/ 86235:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ tt)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(71147);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
var open_closed = __webpack_require__(97844);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
var match = __webpack_require__(58118);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var use_is_mounted = __webpack_require__(23984);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var use_iso_morphic_effect = __webpack_require__(13652);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var use_latest_value = __webpack_require__(94612);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var use_server_handoff_complete = __webpack_require__(75650);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(41464);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/once.js
function once_l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.js
var disposables = __webpack_require__(2698);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d(t,...e){t&&e.length>0&&t.classList.add(...e)}function v(t,...e){t&&e.length>0&&t.classList.remove(...e)}function F(t,e){let n=(0,disposables/* disposables */.k)();if(!t)return n.dispose;let{transitionDuration:m,transitionDelay:o}=getComputedStyle(t),[u,p]=[m,o].map(a=>{let[r=0]=a.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,f)=>f-i);return r}),l=u+p;if(l!==0){n.group(r=>{r.setTimeout(()=>{e(),r.dispose()},l),r.addEventListener(t,"transitionrun",i=>{i.target===i.currentTarget&&r.dispose()})});let a=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),a())})}else e();return n.add(()=>e()),n.dispose}function y(t,e,n,m){let o=n?"enter":"leave",u=(0,disposables/* disposables */.k)(),p=m!==void 0?once_l(m):()=>{};o==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let l=(0,match/* match */.E)(o,{enter:()=>e.enter,leave:()=>e.leave}),a=(0,match/* match */.E)(o,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=(0,match/* match */.E)(o,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),d(t,...l,...r),u.nextFrame(()=>{v(t,...r),d(t,...a),F(t,()=>(v(t,...l),d(t,...e.entered),p()))}),u.dispose}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
var use_disposables = __webpack_require__(88060);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-transition.js
function D({container:i,direction:t,classes:o,onStart:s,onStop:u}){let a=(0,use_is_mounted/* useIsMounted */.t)(),c=(0,use_disposables/* useDisposables */.G)(),r=(0,use_latest_value/* useLatestValue */.E)(t);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{let e=(0,disposables/* disposables */.k)();c.add(e.dispose);let n=i.current;if(n&&r.current!=="idle"&&a.current)return e.dispose(),s.current(r.current),e.add(y(n,o.current,r.current==="enter",()=>{e.dispose(),u.current(r.current)})),e.dispose},[t])}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(62264);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/class-names.js
var class_names = __webpack_require__(53018);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/env.js
var env = __webpack_require__(63957);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-flags.js
function b(g=0){let[t,l]=(0,react_.useState)(g),u=(0,react_.useCallback)(e=>l(a=>a|e),[t]),n=(0,react_.useCallback)(e=>Boolean(t&e),[t]),o=(0,react_.useCallback)(e=>l(a=>a&~e),[l]),s=(0,react_.useCallback)(e=>l(a=>a^e),[l]);return{flags:t,addFlag:u,hasFlag:n,removeFlag:o,toggleFlag:s}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js
function S(n=""){return n.split(" ").filter(t=>t.trim().length>1)}let A=(0,react_.createContext)(null);A.displayName="TransitionContext";var Ee=(r=>(r.Visible="visible",r.Hidden="hidden",r))(Ee||{});function be(){let n=(0,react_.useContext)(A);if(n===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return n}function Se(){let n=(0,react_.useContext)(I);if(n===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return n}let I=(0,react_.createContext)(null);I.displayName="NestingContext";function _(n){return"children"in n?_(n.children):n.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ne(n,t){let r=(0,use_latest_value/* useLatestValue */.E)(n),o=(0,react_.useRef)([]),y=(0,use_is_mounted/* useIsMounted */.t)(),N=(0,use_disposables/* useDisposables */.G)(),p=(0,use_event/* useEvent */.z)((s,e=render/* RenderStrategy.Hidden */.l4.Hidden)=>{let a=o.current.findIndex(({el:i})=>i===s);a!==-1&&((0,match/* match */.E)(e,{[render/* RenderStrategy.Unmount */.l4.Unmount](){o.current.splice(a,1)},[render/* RenderStrategy.Hidden */.l4.Hidden](){o.current[a].state="hidden"}}),N.microTask(()=>{var i;!_(o)&&y.current&&((i=r.current)==null||i.call(r))}))}),x=(0,use_event/* useEvent */.z)(s=>{let e=o.current.find(({el:a})=>a===s);return e?e.state!=="visible"&&(e.state="visible"):o.current.push({el:s,state:"visible"}),()=>p(s,render/* RenderStrategy.Unmount */.l4.Unmount)}),m=(0,react_.useRef)([]),c=(0,react_.useRef)(Promise.resolve()),u=(0,react_.useRef)({enter:[],leave:[],idle:[]}),h=(0,use_event/* useEvent */.z)((s,e,a)=>{m.current.splice(0),t&&(t.chains.current[e]=t.chains.current[e].filter(([i])=>i!==s)),t==null||t.chains.current[e].push([s,new Promise(i=>{m.current.push(i)})]),t==null||t.chains.current[e].push([s,new Promise(i=>{Promise.all(u.current[e].map(([l,T])=>T)).then(()=>i())})]),e==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>a(e)):a(e)}),v=(0,use_event/* useEvent */.z)((s,e,a)=>{Promise.all(u.current[e].splice(0).map(([i,l])=>l)).then(()=>{var i;(i=m.current.shift())==null||i()}).then(()=>a(e))});return (0,react_.useMemo)(()=>({children:o,register:x,unregister:p,onStart:h,onStop:v,wait:c,chains:u}),[x,p,o,h,v,u,c])}function xe(){}let Pe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function re(n){var r;let t={};for(let o of Pe)t[o]=(r=n[o])!=null?r:xe;return t}function Re(n){let t=(0,react_.useRef)(re(n));return (0,react_.useEffect)(()=>{t.current=re(n)},[n]),t}let ye="div",ie=render/* Features.RenderStrategy */.AN.RenderStrategy;function Ne(n,t){let{beforeEnter:r,afterEnter:o,beforeLeave:y,afterLeave:N,enter:p,enterFrom:x,enterTo:m,entered:c,leave:u,leaveFrom:h,leaveTo:v,...s}=n,e=(0,react_.useRef)(null),a=(0,use_sync_refs/* useSyncRefs */.T)(e,t),i=s.unmount?render/* RenderStrategy.Unmount */.l4.Unmount:render/* RenderStrategy.Hidden */.l4.Hidden,{show:l,appear:T,initial:se}=be(),[g,M]=(0,react_.useState)(l?"visible":"hidden"),z=Se(),{register:F,unregister:L}=z,U=(0,react_.useRef)(null);(0,react_.useEffect)(()=>F(e),[F,e]),(0,react_.useEffect)(()=>{if(i===render/* RenderStrategy.Hidden */.l4.Hidden&&e.current){if(l&&g!=="visible"){M("visible");return}return (0,match/* match */.E)(g,{["hidden"]:()=>L(e),["visible"]:()=>F(e)})}},[g,e,F,L,l,i]);let j=(0,use_latest_value/* useLatestValue */.E)({enter:S(p),enterFrom:S(x),enterTo:S(m),entered:S(c),leave:S(u),leaveFrom:S(h),leaveTo:S(v)}),w=Re({beforeEnter:r,afterEnter:o,beforeLeave:y,afterLeave:N}),k=(0,use_server_handoff_complete/* useServerHandoffComplete */.H)();(0,react_.useEffect)(()=>{if(k&&g==="visible"&&e.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[e,g,k]);let G=se&&!T,ae=(()=>!k||G||U.current===l?"idle":l?"enter":"leave")(),H=b(0),le=(0,use_event/* useEvent */.z)(C=>(0,match/* match */.E)(C,{enter:()=>{H.addFlag(open_closed/* State.Opening */.ZM.Opening),w.current.beforeEnter()},leave:()=>{H.addFlag(open_closed/* State.Closing */.ZM.Closing),w.current.beforeLeave()},idle:()=>{}})),ue=(0,use_event/* useEvent */.z)(C=>(0,match/* match */.E)(C,{enter:()=>{H.removeFlag(open_closed/* State.Opening */.ZM.Opening),w.current.afterEnter()},leave:()=>{H.removeFlag(open_closed/* State.Closing */.ZM.Closing),w.current.afterLeave()},idle:()=>{}})),O=ne(()=>{M("hidden"),L(e)},z);D({container:e,classes:j,direction:ae,onStart:(0,use_latest_value/* useLatestValue */.E)(C=>{O.onStart(e,C,le)}),onStop:(0,use_latest_value/* useLatestValue */.E)(C=>{O.onStop(e,C,ue),C==="leave"&&!_(O)&&(M("hidden"),L(e))})}),(0,react_.useEffect)(()=>{G&&(i===render/* RenderStrategy.Hidden */.l4.Hidden?U.current=null:U.current=l)},[l,G,g]);let B=s,Te={ref:a};return T&&l&&env/* env.isServer */.O.isServer&&(B={...B,className:(0,class_names/* classNames */.A)(s.className,...j.current.enter,...j.current.enterFrom)}),react_.createElement(I.Provider,{value:O},react_.createElement(open_closed/* OpenClosedProvider */.up,{value:(0,match/* match */.E)(g,{["visible"]:open_closed/* State.Open */.ZM.Open,["hidden"]:open_closed/* State.Closed */.ZM.Closed})|H.flags},(0,render/* render */.sY)({ourProps:Te,theirProps:B,defaultTag:ye,features:ie,visible:g==="visible",name:"Transition.Child"})))}function He(n,t){let{show:r,appear:o=!1,unmount:y,...N}=n,p=(0,react_.useRef)(null),x=(0,use_sync_refs/* useSyncRefs */.T)(p,t);(0,use_server_handoff_complete/* useServerHandoffComplete */.H)();let m=(0,open_closed/* useOpenClosed */.oJ)();if(r===void 0&&m!==null&&(r=(m&open_closed/* State.Open */.ZM.Open)===open_closed/* State.Open */.ZM.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,u]=(0,react_.useState)(r?"visible":"hidden"),h=ne(()=>{u("hidden")}),[v,s]=(0,react_.useState)(!0),e=(0,react_.useRef)([r]);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{v!==!1&&e.current[e.current.length-1]!==r&&(e.current.push(r),s(!1))},[e,r]);let a=(0,react_.useMemo)(()=>({show:r,appear:o,initial:v}),[r,o,v]);(0,react_.useEffect)(()=>{if(r)u("visible");else if(!_(h))u("hidden");else{let l=p.current;if(!l)return;let T=l.getBoundingClientRect();T.x===0&&T.y===0&&T.width===0&&T.height===0&&u("hidden")}},[r,h]);let i={unmount:y};return react_.createElement(I.Provider,{value:h},react_.createElement(A.Provider,{value:a},(0,render/* render */.sY)({ourProps:{...i,as:react_.Fragment,children:react_.createElement(oe,{ref:x,...i,...N})},theirProps:{},defaultTag:react_.Fragment,features:ie,visible:c==="visible",name:"Transition"})))}function De(n,t){let r=(0,react_.useContext)(A)!==null,o=(0,open_closed/* useOpenClosed */.oJ)()!==null;return react_.createElement(react_.Fragment,null,!r&&o?react_.createElement(q,{ref:t,...n}):react_.createElement(oe,{ref:t,...n}))}let q=(0,render/* forwardRefWithAs */.yV)(He),oe=(0,render/* forwardRefWithAs */.yV)(Ne),Fe=(0,render/* forwardRefWithAs */.yV)(De),tt=Object.assign(q,{Child:Fe,Root:q});


/***/ }),

/***/ 88060:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2698);
function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__/* .disposables */ .k);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}


/***/ }),

/***/ 23984:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13652);
function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__/* .useIsoMorphicEffect */ .e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}


/***/ }),

/***/ 2698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38571);
function o(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return (0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__/* .microTask */ .Y)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a})})},group(e){let t=o();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}},dispose(){for(let e of n.splice(0))e()}};return r}


/***/ })

};
;