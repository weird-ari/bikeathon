var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,l;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function $(){return g("")}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e){t.value=null==e?"":e}function w(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function _(t,e,n){t.classList[n?"add":"remove"](e)}function S(t){l=t}function k(){if(!l)throw new Error("Function called outside component initialization");return l}function E(t){k().$$.on_mount.push(t)}function M(){const t=k();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}function T(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const I=[],P=[],j=[],O=[],V=Promise.resolve();let A=!1;function C(){A||(A=!0,V.then(B))}function D(t){j.push(t)}const L=new Set;let N=0;function B(){const t=l;do{for(;N<I.length;){const t=I[N];N++,S(t),R(t.$$)}for(S(null),I.length=0,N=0;P.length;)P.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];L.has(e)||(L.add(e),e())}j.length=0}while(I.length);for(;O.length;)O.pop()();A=!1,L.clear(),S(t)}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const q=new Set;let F;function z(){F={r:0,c:[],p:F}}function U(){F.r||r(F.c),F=F.p}function J(t,e){t&&t.i&&(q.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),F.c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function Y(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],a=e[s];if(a){for(const t in i)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function W(t){return"object"==typeof t&&null!==t?t:{}}function G(t){t&&t.c()}function H(t,e,o,i){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,o),i||D((()=>{const e=l.map(n).filter(s);c?c.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(D)}function K(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,n,s,i,a,c,u,f=[-1]){const d=l;S(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};u&&u(h.root);let g=!1;if(h.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),g&&function(t,e){-1===t.$$.dirty[0]&&(I.push(t),C(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],h.update(),g=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();n.intro&&J(e.$$.fragment),H(e,n.target,n.anchor,n.customElement),B()}S(d)}class Z{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const tt=[];function et(t,e){return{subscribe:nt(t,e).subscribe}}function nt(e,n=t){let o;const r=new Set;function s(t){if(i(e,t)&&(e=t,o)){const t=!tt.length;for(const t of r)t[1](),tt.push(t,e);if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const l=[i,a];return r.add(l),1===r.size&&(o=n(s)||t),i(e),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}function ot(e,n,o){const i=!Array.isArray(e),a=i?[e]:e,l=n.length<2;return et(o,(e=>{let o=!1;const c=[];let u=0,f=t;const p=()=>{if(u)return;f();const o=n(i?c[0]:c,e);l?e(o):f=s(o)?o:t},d=a.map(((e,n)=>function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(e,(t=>{c[n]=t,u&=~(1<<n),o&&p()}),(()=>{u|=1<<n}))));return o=!0,p(),function(){r(d),f()}}))}function rt(t){let n,o,r;const s=[t[2]];var i=t[0];function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(a()),n.$on("routeEvent",t[7])),{c(){n&&G(n.$$.fragment),o=$()},m(t,e){n&&H(n,t,e),f(t,o,e),r=!0},p(t,e){const r=4&e?Y(s,[W(t[2])]):{};if(i!==(i=t[0])){if(n){z();const t=n;X(t.$$.fragment,1,0,(()=>{K(t,1)})),U()}i?(n=new i(a()),n.$on("routeEvent",t[7]),G(n.$$.fragment),J(n.$$.fragment,1),H(n,o.parentNode,o)):n=null}else i&&n.$set(r)},i(t){r||(n&&J(n.$$.fragment,t),r=!0)},o(t){n&&X(n.$$.fragment,t),r=!1},d(t){t&&p(o),n&&K(n,t)}}}function st(t){let n,o,r;const s=[{params:t[1]},t[2]];var i=t[0];function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(a()),n.$on("routeEvent",t[6])),{c(){n&&G(n.$$.fragment),o=$()},m(t,e){n&&H(n,t,e),f(t,o,e),r=!0},p(t,e){const r=6&e?Y(s,[2&e&&{params:t[1]},4&e&&W(t[2])]):{};if(i!==(i=t[0])){if(n){z();const t=n;X(t.$$.fragment,1,0,(()=>{K(t,1)})),U()}i?(n=new i(a()),n.$on("routeEvent",t[6]),G(n.$$.fragment),J(n.$$.fragment,1),H(n,o.parentNode,o)):n=null}else i&&n.$set(r)},i(t){r||(n&&J(n.$$.fragment,t),r=!0)},o(t){n&&X(n.$$.fragment,t),r=!1},d(t){t&&p(o),n&&K(n,t)}}}function it(t){let e,n,o,r;const s=[st,rt],i=[];function a(t,e){return t[1]?0:1}return e=a(t),n=i[e]=s[e](t),{c(){n.c(),o=$()},m(t,n){i[e].m(t,n),f(t,o,n),r=!0},p(t,[r]){let l=e;e=a(t),e===l?i[e].p(t,r):(z(),X(i[l],1,1,(()=>{i[l]=null})),U(),n=i[e],n?n.p(t,r):(n=i[e]=s[e](t),n.c()),J(n,1),n.m(o.parentNode,o))},i(t){r||(J(n),r=!0)},o(t){X(n),r=!1},d(t){i[e].d(t),t&&p(o)}}}function at(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const lt=et(null,(function(t){t(at());const e=()=>{t(at())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));ot(lt,(t=>t.location)),ot(lt,(t=>t.querystring));const ct=nt(void 0);function ut(t,e,n){let{routes:o={}}=e,{prefix:r=""}=e,{restoreScrollState:s=!1}=e;class i{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,s,i=[],a="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)"*"===(n=r[0])?(i.push("wild"),a+="/(.*)"):":"===n?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),a+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(a+=(~o?"?":"")+"\\"+r.substring(s))):a+="/"+r;return{keys:i,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(t){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const a=[];o instanceof Map?o.forEach(((t,e)=>{a.push(new i(e,t))})):Object.keys(o).forEach((t=>{a.push(new i(t,o[t]))}));let l=null,c=null,u={};const f=M();async function p(t,e){await(C(),V),f(t,e)}let d=null,h=null;var g;s&&(h=t=>{d=t.state&&(t.state.__svelte_spa_router_scrollY||t.state.__svelte_spa_router_scrollX)?t.state:null},window.addEventListener("popstate",h),g=()=>{var t;(t=d)?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)},k().$$.after_update.push(g));let m=null,$=null;const b=lt.subscribe((async t=>{m=t;let e=0;for(;e<a.length;){const o=a[e].match(t.location);if(!o){e++;continue}const r={route:a[e].path,location:t.location,querystring:t.querystring,userData:a[e].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await a[e].checkConditions(r))return n(0,l=null),$=null,void p("conditionsFailed",r);p("routeLoading",Object.assign({},r));const s=a[e].component;if($!=s){s.loading?(n(0,l=s.loading),$=s,n(1,c=s.loadingParams),n(2,u={}),p("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:c}))):(n(0,l=null),$=null);const e=await s();if(t!=m)return;n(0,l=e&&e.default||e),$=s}return o&&"object"==typeof o&&Object.keys(o).length?n(1,c=o):n(1,c=null),n(2,u=a[e].props),void p("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:c})).then((()=>{ct.set(c)}))}n(0,l=null),$=null,ct.set(void 0)}));return function(t){k().$$.on_destroy.push(t)}((()=>{b(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[l,c,u,o,r,s,function(e){T.call(this,t,e)},function(e){T.call(this,t,e)}]}class ft extends Z{constructor(t){super(),Q(this,t,ut,it,i,{routes:3,prefix:4,restoreScrollState:5})}}function pt(t,e,n){const o=t.slice();return o[23]=e[n][0],o[24]=e[n][1],o[25]=e,o[26]=n,o}function dt(t,e,n){const o=t.slice();return o[27]=e[n],o}function ht(t){let e,n,o,r,s,i=t[4][t[27]]+"";function a(){return t[13](t[27])}return{c(){e=h("button"),n=g(i),o=m(),v(e,"class","add svelte-1y5lx8i")},m(t,i){f(t,e,i),u(e,n),u(e,o),r||(s=b(e,"click",a),r=!0)},p(e,n){t=e},d(t){t&&p(e),r=!1,s()}}}function gt(t){let e,n,o,s,i,a,l,c,d=(t[4][t[23]]||t[23]+":")+"";function $(){t[15].call(i,t[23])}return{c(){e=h("setting"),n=h("descriptor"),o=g(d),s=m(),i=h("input"),a=m(),v(n,"class","svelte-1y5lx8i"),v(i,"type","text"),v(i,"class","svelte-1y5lx8i"),v(e,"class","svelte-1y5lx8i")},m(r,p){f(r,e,p),u(e,n),u(n,o),u(e,s),u(e,i),x(i,t[2][t[23]]),u(e,a),l||(c=[b(i,"input",$),b(i,"change",t[16])],l=!0)},p(e,n){t=e,4&n&&d!==(d=(t[4][t[23]]||t[23]+":")+"")&&y(o,d),4&n&&i.value!==t[2][t[23]]&&x(i,t[2][t[23]])},d(t){t&&p(e),l=!1,r(c)}}}function mt(e){let n,o,s,i,a,l,c,$,w,_,S,k,E,M,T,I,P,j,O,V,A,C,D,L,N,B,R=Math.floor(e[1]/36e5)+"",q=(Math.floor(e[1]/6e4)%60).toString().padStart(2,"0")+"",F=(Math.floor(e[1]/1e3)%60).toString().padStart(2,"0")+"",z=["Prime","1000","2000","3000"],U=[];for(let t=0;t<4;t+=1)U[t]=ht(dt(e,z,t));let J=Object.entries(e[2]),X=[];for(let t=0;t<J.length;t+=1)X[t]=gt(pt(e,J,t));return{c(){n=h("settings"),o=h("section"),s=g(R),i=g("\r\n        :\r\n        "),a=g(q),l=g("\r\n        :\r\n        "),c=g(F),$=m(),w=h("section"),_=h("input"),S=m(),k=h("button"),k.textContent="START",E=m(),M=h("section"),T=h("button"),T.textContent="PAUSE",I=m(),P=h("button"),P.textContent="UNPAUSE",j=m(),O=h("section");for(let t=0;t<4;t+=1)U[t].c();V=m(),A=h("section"),C=h("input"),D=m(),L=h("section");for(let t=0;t<X.length;t+=1)X[t].c();v(o,"class","svelte-1y5lx8i"),v(_,"type","text"),v(_,"class","svelte-1y5lx8i"),v(k,"class","start svelte-1y5lx8i"),v(w,"class","svelte-1y5lx8i"),v(T,"class","pause svelte-1y5lx8i"),v(P,"class","unpause svelte-1y5lx8i"),v(M,"class","svelte-1y5lx8i"),v(O,"class","addButtons svelte-1y5lx8i"),v(C,"type","text"),v(C,"class","svelte-1y5lx8i"),v(A,"class","svelte-1y5lx8i"),v(L,"class","svelte-1y5lx8i"),v(n,"class","svelte-1y5lx8i")},m(t,r){f(t,n,r),u(n,o),u(o,s),u(o,i),u(o,a),u(o,l),u(o,c),u(n,$),u(n,w),u(w,_),x(_,e[3]),u(w,S),u(w,k),u(n,E),u(n,M),u(M,T),u(M,I),u(M,P),u(n,j),u(n,O);for(let t=0;t<4;t+=1)U[t].m(O,null);u(n,V),u(n,A),u(A,C),x(C,e[0]),u(n,D),u(n,L);for(let t=0;t<X.length;t+=1)X[t].m(L,null);N||(B=[b(_,"input",e[12]),b(k,"click",e[9]),b(T,"click",e[6]),b(P,"click",e[7]),b(C,"input",e[14])],N=!0)},p(t,[e]){if(2&e&&R!==(R=Math.floor(t[1]/36e5)+"")&&y(s,R),2&e&&q!==(q=(Math.floor(t[1]/6e4)%60).toString().padStart(2,"0")+"")&&y(a,q),2&e&&F!==(F=(Math.floor(t[1]/1e3)%60).toString().padStart(2,"0")+"")&&y(c,F),8&e&&_.value!==t[3]&&x(_,t[3]),272&e){let n;for(z=["Prime","1000","2000","3000"],n=0;n<4;n+=1){const o=dt(t,z,n);U[n]?U[n].p(o,e):(U[n]=ht(o),U[n].c(),U[n].m(O,null))}for(;n<4;n+=1)U[n].d(1)}if(1&e&&C.value!==t[0]&&x(C,t[0]),52&e){let n;for(J=Object.entries(t[2]),n=0;n<J.length;n+=1){const o=pt(t,J,n);X[n]?X[n].p(o,e):(X[n]=gt(o),X[n].c(),X[n].m(L,null))}for(;n<X.length;n+=1)X[n].d(1);X.length=J.length}},i:t,o:t,d(t){t&&p(n),d(U,t),d(X,t),N=!1,r(B)}}}function $t(t,e,n){let o,r=16648848e5,s=0,i=0,a=Date.now(),l={channel:"stanz",primeValue:15,t1Value:15,t2Value:30,t3Value:75};function c(t){n(2,l=t),localStorage.setItem("bikeathonSettings",JSON.stringify(l))}function u(t){n(10,s=t),localStorage.setItem("bikeathonPauseStartTime",s)}function f(t){n(0,r=Math.trunc(t)),localStorage.setItem("bikeathonTargetTime",r)}function p(t){f(r+t)}function d(t){if(i){let e=0;"Prime"===t?e=l.primeValue:"1000"===t?e=l.t1Value:"2000"===t?e=l.t2Value:"3000"===t&&(e=l.t3Value),p(1e3*parseFloat(e))}}E((()=>{const t=setInterval((()=>{n(11,a=Date.now())}),100);return()=>{clearInterval(t)}})),n(2,l=JSON.parse(localStorage.getItem("bikeathonSettings"))||l),n(0,r=parseInt(localStorage.getItem("bikeathonTargetTime"))||r),n(10,s=parseInt(localStorage.getItem("bikeathonPauseStartTime"))||s),c(l),f(r),u(s),o&&o.disconnect(),o=new window.tmi.Client({channels:[l.channel.toLowerCase()]}),o.connect().then((()=>console.log("CONNECTED"))),o.on("message",(async(t,e,n,o)=>{})),o.on("subscription",((t,e,n,o,r)=>{console.log(r),d(r["msg-param-sub-plan"])})),o.on("resub",((t,e,n,o,r,s)=>{console.log(r),d(r["msg-param-sub-plan"])})),o.on("subgift",((t,e,n,o,r,s)=>{console.log(s),d(s["msg-param-sub-plan"])}));let h=3600;return t.$$.update=()=>{3073&t.$$.dirty&&n(1,i=s?Math.max(r-s,0):Math.max(r-a,0))},[r,i,l,h,{channel:"Twitch channel:",primeValue:"Value of Prime Sub:",t1Value:"Value of Tier 1 Sub:",t2Value:"Value of Tier 2 Sub:",t3Value:"Value of Tier 3 Sub:",Prime:"Add Prime",1e3:"Add Sub",2e3:"Add T2",3e3:"Add T3"},c,function(){s||u(Date.now())},function(){s&&(p(Date.now()-s),u(0))},d,function(){console.log(h),f(Date.now()+1e3*h)},s,a,function(){h=this.value,n(3,h)},t=>d(t),function(){r=this.value,n(0,r)},function(t){l[t]=this.value,n(2,l)},()=>{c(l)}]}class bt extends Z{constructor(t){super(),Q(this,t,$t,mt,i,{})}}function vt(e){let n,o,r,s,i,a,l,d,$,b,x,S,k,E,M,T,I,P,j,O,V,A=Math.floor(e[1]/36e5)+"",C=(Math.floor(e[1]/6e4)%60).toString().padStart(2,"0")+"",D=(Math.floor(e[1]/1e3)%60).toString().padStart(2,"0")+"";return{c(){n=h("main"),o=h("box"),r=h("time"),s=h("segment"),i=g(A),a=m(),l=g(":\r\n            "),d=h("segment"),$=g(C),b=m(),x=g(":\r\n            "),S=h("segment"),k=g(D),E=m(),M=h("animation"),T=h("img"),P=m(),j=h("img"),v(s,"class","hours svelte-1axh7dg"),v(d,"class","svelte-1axh7dg"),v(S,"class","seconds svelte-1axh7dg"),v(r,"class","svelte-1axh7dg"),v(T,"class","peepo svelte-1axh7dg"),v(T,"alt","peepoBike"),c(T.src,I=e[1]?e[0]?"peepoBike.png":"peepoBike.gif":"PeepoFinish.webp")||v(T,"src",I),w(T,"right",e[2]+"rem"),v(j,"class","animation-background svelte-1axh7dg"),v(j,"alt","landscape background"),c(j.src,O="bg.png")||v(j,"src","bg.png"),_(j,"paused",e[0]||!e[1]),v(M,"class","svelte-1axh7dg"),v(o,"id","timerbox"),v(o,"style",V=(e[1]>3e5?"":"animation-name: blinking;")+" animation-duration:"+Math.max(e[1]/6e4,1)+"s"),v(o,"class","svelte-1axh7dg"),_(o,"finished",0===e[1]),v(n,"class","svelte-1axh7dg")},m(t,e){f(t,n,e),u(n,o),u(o,r),u(r,s),u(s,i),u(s,a),u(r,l),u(r,d),u(d,$),u(d,b),u(r,x),u(r,S),u(S,k),u(o,E),u(o,M),u(M,T),u(M,P),u(M,j)},p(t,[e]){2&e&&A!==(A=Math.floor(t[1]/36e5)+"")&&y(i,A),2&e&&C!==(C=(Math.floor(t[1]/6e4)%60).toString().padStart(2,"0")+"")&&y($,C),2&e&&D!==(D=(Math.floor(t[1]/1e3)%60).toString().padStart(2,"0")+"")&&y(k,D),3&e&&!c(T.src,I=t[1]?t[0]?"peepoBike.png":"peepoBike.gif":"PeepoFinish.webp")&&v(T,"src",I),4&e&&w(T,"right",t[2]+"rem"),3&e&&_(j,"paused",t[0]||!t[1]),2&e&&V!==(V=(t[1]>3e5?"":"animation-name: blinking;")+" animation-duration:"+Math.max(t[1]/6e4,1)+"s")&&v(o,"style",V),2&e&&_(o,"finished",0===t[1])},i:t,o:t,d(t){t&&p(n)}}}function yt(t,e,n){let o=0,r=0,s=0,i=Date.now();function a(){n(3,o=parseInt(localStorage.getItem("bikeathonTargetTime"))),n(0,r=parseInt(localStorage.getItem("bikeathonPauseStartTime")))}E((()=>{const t=setInterval((()=>{n(4,i=Date.now())}),100);return()=>{clearInterval(t)}})),window.addEventListener("storage",(()=>{a()})),a();let l=0;return setInterval((()=>{if(!r&&s){let t=l+(Math.random()-.5);n(2,l=Math.max(Math.min(15,t),-15))}}),100),t.$$.update=()=>{25&t.$$.dirty&&n(1,s=r?Math.max(o-r,0):Math.max(o-i,0))},[r,s,l,o,i]}class xt extends Z{constructor(t){super(),Q(this,t,yt,vt,i,{})}}function wt(e){let n,o,r;return o=new ft({props:{routes:{"/settings":bt,"/timer":xt}}}),{c(){n=h("main"),G(o.$$.fragment),v(n,"class","svelte-8ea0qk")},m(t,e){f(t,n,e),H(o,n,null),r=!0},p:t,i(t){r||(J(o.$$.fragment,t),r=!0)},o(t){X(o.$$.fragment,t),r=!1},d(t){t&&p(n),K(o)}}}return new class extends Z{constructor(t){super(),Q(this,t,null,wt,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
