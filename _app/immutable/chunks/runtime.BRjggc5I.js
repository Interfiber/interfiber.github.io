var Dn=Array.isArray,On=Array.from,kn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Nn=Object.prototype,In=Array.prototype,$t=Object.getPrototypeOf;const Pn=()=>{};function bn(t){return t()}function Zt(t){for(var n=0;n<t.length;n++)t[n]()}const E=2,dt=4,j=8,st=16,m=32,W=64,tt=128,D=256,G=512,h=1024,x=2048,U=4096,P=8192,b=16384,Wt=32768,yt=65536,Cn=1<<17,zt=1<<19,Et=1<<20,ct=Symbol("$state"),Fn=Symbol("legacy props");function wt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function qn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Ln(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Yn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Mn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let z=!1;function jn(){z=!0}function ut(t){return{f:0,v:t,reactions:null,equals:wt,version:0}}function Un(t){return ln(ut(t))}function Hn(t,n=!1){var e;const r=ut(t);return n||(r.equals=Tt),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function ln(t){return o!==null&&o.f&E&&(T===null?wn([t]):T.push(t)),t}function Bn(t,n){return o!==null&&it()&&o.f&(E|st)&&(T===null||!T.includes(t))&&en(),sn(t,n)}function sn(t,n){return t.equals(n)||(t.v=n,t.version=jt(),mt(t,x),it()&&a!==null&&a.f&h&&!(a.f&m)&&(v!==null&&v.includes(t)?(g(a,x),X(a)):A===null?Tn([t]):A.push(t))),n}function mt(t,n){var r=t.reactions;if(r!==null)for(var e=it(),l=r.length,s=0;s<l;s++){var u=r[s],i=u.f;i&x||!e&&u===a||(g(u,n),i&(h|D)&&(i&E?mt(u,U):X(u)))}}function gt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}const Vn=1,Gn=2,Kn=4,$n=8,Zn=16,Wn=1,zn=2,un="[",an="[!",on="]",At={},Jn=Symbol();let S=!1;function Qn(t){S=t}let w;function q(t){if(t===null)throw gt(),At;return w=t}function Xn(){return q(O(w))}function tr(t){if(S){if(O(w)!==null)throw gt(),At;w=t}}function nr(t=1){if(S){for(var n=t,r=w;n--;)r=O(r);w=r}}function rr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===un||r===an)&&(t+=1)}var e=O(n);n.remove(),n=e}}var vt,xt,Rt;function er(){if(vt===void 0){vt=window;var t=Element.prototype,n=Node.prototype;xt=_t(n,"firstChild").get,Rt=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return xt.call(t)}function O(t){return Rt.call(t)}function lr(t,n){if(!S)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),q(e),e}return q(r),r}function sr(t,n){if(!S){var r=rt(t);return r instanceof Comment&&r.data===""?O(r):r}return w}function ur(t,n=1,r=!1){let e=S?w:t;for(var l;n--;)l=e,e=O(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var u=nt();return e===null?l==null||l.after(u):e.before(u),q(u),u}return q(e),e}function ar(t){t.textContent=""}function fn(t){var n=E|x;a===null?n|=D:a.f|=Et;var r=o!==null&&o.f&E?o:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??a};return r!==null&&(r.children??(r.children=[])).push(e),e}function or(t){const n=fn(t);return n.equals=Tt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&E?at(e):F(e)}}}function _n(t){for(var n=t.parent;n!==null;){if(!(n.f&E))return n;n=n.parent}return null}function Dt(t){var n,r=a;Z(_n(t));try{St(t),n=Ut(t)}finally{Z(r)}return n}function Ot(t){var n=Dt(t),r=(k||t.f&D)&&t.deps!==null?U:h;g(t,r),t.equals(n)||(t.v=n,t.version=jt())}function at(t){St(t),M(t,0),g(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function kt(t){a===null&&o===null&&tn(),o!==null&&o.f&D&&Xt(),ot&&Qt()}function cn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function C(t,n,r,e=!0){var l=(t&W)!==0,s=a,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=N;try{pt(!0),Q(u),u.f|=Wt}catch(_){throw F(u),_}finally{pt(i)}}else n!==null&&X(u);var p=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Et)===0;if(!p&&!l&&e&&(s!==null&&cn(u,s),o!==null&&o.f&E)){var d=o;(d.children??(d.children=[])).push(u)}return u}function ir(t){const n=C(j,null,!1);return g(n,h),n.teardown=t,n}function fr(t){kt();var n=a!==null&&(a.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:a,reaction:o})}else{var e=Nt(t);return e}}function _r(t){return kt(),vn(t)}function cr(t){const n=C(W,t,!0);return()=>{F(n)}}function Nt(t){return C(dt,t,!1)}function vn(t){return C(j,t,!0)}function vr(t){return pn(t)}function pn(t,n=0){return C(j|st|n,t,!0)}function pr(t,n=!0){return C(j|m,t,!0,n)}function It(t){var n=t.teardown;if(n!==null){const r=ot,e=o;ht(!0),$(null);try{n.call(null)}finally{ht(r),$(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)at(n[r])}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function hn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:O(e);e.remove(),e=s}r=!0}bt(t,n&&!r),Pt(t),M(t,0),g(t,b);var u=t.transitions;if(u!==null)for(const p of u)p.stop();It(t);var i=t.parent;i!==null&&i.first!==null&&Ct(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ct(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function hr(t,n){var r=[];Ft(t,r,!0),dn(r,()=>{F(t),n&&n()})}function dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ft(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&yt)!==0||(e.f&m)!==0;Ft(e,n,s?r:!1),e=l}}}function dr(t){qt(t,!0)}function qt(t,n){if(t.f&P){H(t)&&Q(t),t.f^=P;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&m)!==0;qt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let K=!1,et=[];function Lt(){K=!1;const t=et.slice();et=[],Zt(t)}function yr(t){K||(K=!0,queueMicrotask(Lt)),et.push(t)}function yn(){K&&Lt()}const Yt=0,En=1;let B=!1,V=Yt,L=!1,Y=null,N=!1,ot=!1;function pt(t){N=t}function ht(t){ot=t}let R=[],I=0;let o=null;function $(t){o=t}let a=null;function Z(t){a=t}let T=null;function wn(t){T=t}let v=null,y=0,A=null;function Tn(t){A=t}let Mt=0,k=!1,f=null;function jt(){return++Mt}function it(){return!z||f!==null&&f.l===null}function H(t){var u,i;var n=t.f;if(n&x)return!0;if(n&U){var r=t.deps,e=(n&D)!==0;if(r!==null){var l;if(n&G){for(l=0;l<r.length;l++)((u=r[l]).reactions??(u.reactions=[])).push(t);t.f^=G}for(l=0;l<r.length;l++){var s=r[l];if(H(s)&&Ot(s),e&&a!==null&&!k&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}e||g(t,h)}return!1}function mn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw B=!1,t}function gn(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&tt)===0)}function J(t,n,r,e){if(B){if(r===null&&(B=!1),gn(n))throw t;return}r!==null&&(B=!0);{mn(t,n);return}}function Ut(t){var ft;var n=v,r=y,e=A,l=o,s=k,u=T,i=f,p=t.f;v=null,y=0,A=null,o=p&(m|W)?null:t,k=!N&&(p&D)!==0,T=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(M(t,y),_!==null&&y>0)for(_.length=y+v.length,c=0;c<v.length;c++)_[y+c]=v[c];else t.deps=_=v;if(!k)for(c=y;c<_.length;c++)((ft=_[c]).reactions??(ft.reactions=[])).push(t)}else _!==null&&y<_.length&&(M(t,y),_.length=y);return d}finally{v=n,y=r,A=e,o=l,k=s,T=u,f=i}}function An(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&E&&(v===null||!v.includes(n))&&(g(n,U),n.f&(D|G)||(n.f^=G),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)An(t,r[e])}function Q(t){var n=t.f;if(!(n&b)){g(t,h);var r=a,e=f;a=t;try{n&st?hn(t):bt(t),Pt(t),It(t);var l=Ut(t);t.teardown=typeof l=="function"?l:null,t.version=Mt}catch(s){J(s,t,r,e||t.ctx)}finally{a=r}}}function Ht(){if(I>1e3){I=0;try{nn()}catch(t){if(Y!==null)J(t,Y,null);else throw t}}I++}function Bt(t){var n=t.length;if(n!==0){Ht();var r=N;N=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];Vt(l,s),xn(s)}}finally{N=r}}}function xn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|P)))try{H(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ct(e):e.fn=null))}catch(l){J(l,e,null,e.ctx)}}}function Rn(){if(L=!1,I>1001)return;const t=R;R=[],Bt(t),L||(I=0,Y=null)}function X(t){V===Yt&&(L||(L=!0,queueMicrotask(Rn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|m)){if(!(r&h))return;n.f^=h}}R.push(n)}function Vt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&m)!==0,u=s&&(l&h)!==0,i=r.next;if(!u&&!(l&P))if(l&j){if(s)r.f^=h;else try{H(r)&&Q(r)}catch(c){J(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&dt&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Vt(p,n)}function Gt(t){var n=V,r=R;try{Ht();const l=[];V=En,R=l,L=!1,Bt(r);var e=t==null?void 0:t();return yn(),(R.length>0||l.length>0)&&Gt(),I=0,Y=null,e}finally{V=n,R=r}}async function Er(){await Promise.resolve(),Gt()}function wr(t){var _;var n=t.f,r=(n&E)!==0;if(r&&n&b){var e=Dt(t);return at(t),e}if(o!==null){T!==null&&T.includes(t)&&rn();var l=o.deps;v===null&&l!==null&&l[y]===t?y++:v===null?v=[t]:v.push(t),A!==null&&a!==null&&a.f&h&&!(a.f&m)&&A.includes(t)&&(g(a,x),X(a))}else if(r&&t.deps===null)for(var s=t,u=s.parent,i=s;u!==null;)if(u.f&E){var p=u;i=p,u=p.parent}else{var d=u;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(s=t,H(s)&&Ot(s)),t.v}function Tr(t){const n=o;try{return o=null,t()}finally{o=n}}const Sn=~(x|U|h);function g(t,n){t.f=t.f&Sn|n}function mr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function gr(t){const n=f;if(n!==null){const u=n.e;if(u!==null){var r=a,e=o;n.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];Z(s.effect),$(s.reaction),Nt(s.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Ar(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{ct as $,nt as A,rt as B,a as C,zn as D,yt as E,Xn as F,q as G,kn as H,$ as I,Z as J,Dn as K,o as L,er as M,un as N,O,At as P,Qn as Q,on as R,gt as S,Wn as T,qn as U,ar as V,On as W,cr as X,ir as Y,Hn as Z,Bn as _,pr as a,Nn as a0,In as a1,ut as a2,Yn as a3,Jn as a4,_t as a5,Mn as a6,an as a7,rr as a8,dr as a9,hr as aa,Nt as ab,vn as ac,yr as ad,Ln as ae,Cn as af,Kn as ag,Tt as ah,m as ai,W as aj,Vn as ak,z as al,Gn as am,$n as an,Fn as ao,or as ap,Zn as aq,Gt as ar,Er as as,Un as at,Jt as au,pn as b,Pn as c,F as d,jn as e,sr as f,w as g,S as h,gr as i,fr as j,f as k,Tr as l,wr as m,nr as n,bn as o,mr as p,Ar as q,Zt as r,fn as s,vr as t,_r as u,lr as v,tr as w,ur as x,$t as y,Kt as z};
