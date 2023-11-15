import{c as S,b as g,u as $,i as ft,g as x,f as G,e as P,h as gt,o as T,j as _t,l as Ft,H as $t,D as zt,s as bt,k as Kt,d as yt}from"./vidstack-4c4227d4-5daa9c9e.js";import{_ as Ut}from"./app-58c204aa.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;const R=window,D=R.trustedTypes,dt=D?D.createPolicy("lit-html",{createHTML:s=>s}):void 0,Y="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+w,Wt=`<${xt}>`,L=document,M=()=>L.createComment(""),B=s=>s===null||typeof s!="object"&&typeof s!="function",wt=Array.isArray,Zt=s=>wt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",J=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,ut=/>/g,k=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,mt=/"/g,kt=/^(?:script|style|textarea|title)$/i,Jt=s=>(t,...e)=>({jh:s,strings:t,values:e}),r=Jt(1),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),pt=new WeakMap,C=L.createTreeWalker(L,129,null,!1);function Ct(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(t):t}const Yt=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",a=E;for(let u=0;u<e;u++){const l=s[u];let d,h,c=-1,v=0;for(;v<l.length&&(a.lastIndex=v,h=a.exec(l),h!==null);)v=a.lastIndex,a===E?h[1]==="!--"?a=ct:h[1]!==void 0?a=ut:h[2]!==void 0?(kt.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=k):h[3]!==void 0&&(a=k):a===k?h[0]===">"?(a=o??E,c=-1):h[1]===void 0?c=-2:(c=a.lastIndex-h[2].length,d=h[1],a=h[3]===void 0?k:h[3]==='"'?mt:ht):a===mt||a===ht?a=k:a===ct||a===ut?a=E:(a=k,o=void 0);const y=a===k&&s[u+1].startsWith("/>")?" ":"";n+=a===E?l+Wt:c>=0?(i.push(d),l.slice(0,c)+Y+l.slice(c)+w+y):l+w+(c===-2?(i.push(void 0),u):y)}return[Ct(s,n+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class I{constructor({strings:t,jh:e},i){let o;this.parts=[];let n=0,a=0;const u=t.length-1,l=this.parts,[d,h]=Yt(t,e);if(this.el=I.createElement(d,i),C.currentNode=this.el.content,e===2){const c=this.el.content,v=c.firstChild;v.remove(),c.append(...v.childNodes)}for(;(o=C.nextNode())!==null&&l.length<u;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const v of o.getAttributeNames())if(v.endsWith(Y)||v.startsWith(w)){const y=h[a++];if(c.push(v),y!==void 0){const Qt=o.getAttribute(y.toLowerCase()+Y).split(w),q=/([.?@])?(.*)/.exec(y);l.push({type:1,index:n,name:q[2],strings:Qt,ctor:q[1]==="."?te:q[1]==="?"?se:q[1]==="@"?ie:F})}else l.push({type:6,index:n})}for(const v of c)o.removeAttribute(v)}if(kt.test(o.tagName)){const c=o.textContent.split(w),v=c.length-1;if(v>0){o.textContent=D?D.emptyScript:"";for(let y=0;y<v;y++)o.append(c[y],M()),C.nextNode(),l.push({type:2,index:++n});o.append(c[v],M())}}}else if(o.nodeType===8)if(o.data===xt)l.push({type:2,index:n});else{let c=-1;for(;(c=o.data.indexOf(w,c+1))!==-1;)l.push({type:7,index:n}),c+=w.length-1}n++}}static createElement(t,e){const i=L.createElement("template");return i.innerHTML=t,i}}function N(s,t,e=s,i){var o,n,a,u;if(t===A)return t;let l=i!==void 0?(o=e.lh)===null||o===void 0?void 0:o[i]:e.qh;const d=B(t)?void 0:t.uh;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l.vh)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(s),l.wh(s,e,i)),i!==void 0?((a=(u=e).lh)!==null&&a!==void 0?a:u.lh=[])[i]=l:e.qh=l),l!==void 0&&(t=N(s,l.xh(s,t.values),l,i)),t}class Xt{constructor(t,e){this.mh=[],this.kh=void 0,this.nh=t,this.dh=e}get parentNode(){return this.dh.parentNode}get eh(){return this.dh.eh}u(t){var e;const{el:{content:i},parts:o}=this.nh,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:L).importNode(i,!0);C.currentNode=n;let a=C.nextNode(),u=0,l=0,d=o[0];for(;d!==void 0;){if(u===d.index){let h;d.type===2?h=new O(a,a.nextSibling,this,t):d.type===1?h=new d.ctor(a,d.name,d.strings,this,t):d.type===6&&(h=new oe(a,this,t)),this.mh.push(h),d=o[++l]}u!==(d==null?void 0:d.index)&&(a=C.nextNode(),u++)}return C.currentNode=L,n}v(t){let e=0;for(const i of this.mh)i!==void 0&&(i.strings!==void 0?(i.fh(t,i,e),e+=i.strings.length-2):i.fh(t[e])),e++}}class O{constructor(t,e,i,o){var n;this.type=2,this.ch=p,this.kh=void 0,this.gh=t,this.hh=e,this.dh=i,this.options=o,this.oh=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get eh(){var t,e;return(e=(t=this.dh)===null||t===void 0?void 0:t.eh)!==null&&e!==void 0?e:this.oh}get parentNode(){let t=this.gh.parentNode;const e=this.dh;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this.gh}get endNode(){return this.hh}fh(t,e=this){t=N(this,t,e),B(t)?t===p||t==null||t===""?(this.ch!==p&&this.ih(),this.ch=p):t!==this.ch&&t!==A&&this.ph(t):t.jh!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Zt(t)?this.T(t):this.ph(t)}k(t){return this.gh.parentNode.insertBefore(t,this.hh)}$(t){this.ch!==t&&(this.ih(),this.ch=this.k(t))}ph(t){this.ch!==p&&B(this.ch)?this.gh.nextSibling.data=t:this.$(L.createTextNode(t)),this.ch=t}g(t){var e;const{values:i,jh:o}=t,n=typeof o=="number"?this.rh(t):(o.el===void 0&&(o.el=I.createElement(Ct(o.h,o.h[0]),this.options)),o);if(((e=this.ch)===null||e===void 0?void 0:e.nh)===n)this.ch.v(i);else{const a=new Xt(n,this),u=a.u(this.options);a.v(i),this.$(u),this.ch=a}}rh(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new I(t)),e}T(t){wt(this.ch)||(this.ch=[],this.ih());const e=this.ch;let i,o=0;for(const n of t)o===e.length?e.push(i=new O(this.k(M()),this.k(M()),this,this.options)):i=e[o],i.fh(n),o++;o<e.length&&(this.ih(i&&i.hh.nextSibling,o),e.length=o)}ih(t=this.gh.nextSibling,e){var i;for((i=this.sh)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this.hh;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this.dh===void 0&&(this.oh=t,(e=this.sh)===null||e===void 0||e.call(this,t))}}class F{constructor(t,e,i,o,n){this.type=1,this.ch=p,this.kh=void 0,this.element=t,this.name=e,this.dh=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this.ch=Array(i.length-1).fill(new String),this.strings=i):this.ch=p}get tagName(){return this.element.tagName}get eh(){return this.dh.eh}fh(t,e=this,i,o){const n=this.strings;let a=!1;if(n===void 0)t=N(this,t,e,0),a=!B(t)||t!==this.ch&&t!==A,a&&(this.ch=t);else{const u=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=N(this,u[i+l],e,l),d===A&&(d=this.ch[l]),a||(a=!B(d)||d!==this.ch[l]),d===p?t=p:t!==p&&(t+=(d??"")+n[l+1]),this.ch[l]=d}a&&!o&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class te extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const ee=D?D.emptyScript:"";class se extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,ee):this.element.removeAttribute(this.name)}}class ie extends F{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}fh(t,e=this){var i;if((t=(i=N(this,t,e,0))!==null&&i!==void 0?i:p)===A)return;const o=this.ch,n=t===p&&o!==p||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==p&&(o===p||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this.ch=t}handleEvent(t){var e,i;typeof this.ch=="function"?this.ch.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this.ch.handleEvent(t)}}class oe{constructor(t,e,i){this.element=t,this.type=6,this.kh=void 0,this.dh=e,this.options=i}get eh(){return this.dh.eh}fh(t){N(this,t)}}const vt=R.litHtmlPolyfillSupport;vt==null||vt(I,O),((Z=R.litHtmlVersions)!==null&&Z!==void 0?Z:R.litHtmlVersions=[]).push("2.8.0");const St=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let a=n.th;if(a===void 0){const u=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n.th=a=new O(t.insertBefore(M(),u),u,void 0,e??{})}return a.fh(s),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=s=>(...t)=>({uh:s,values:t});class Tt{constructor(t){}get eh(){return this.dh.eh}wh(t,e,i){this.Kj=t,this.dh=e,this.Mj=i}xh(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=(s,t)=>{var e,i;const o=s.kh;if(o===void 0)return!1;for(const n of o)(i=(e=n).vh)===null||i===void 0||i.call(e,t,!1),j(n,t);return!0},Q=s=>{let t,e;do{if((t=s.dh)===void 0)break;e=t.kh,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},Dt=s=>{for(let t;t=s.dh;s=t){let e=t.kh;if(e===void 0)t.kh=e=new Set;else if(e.has(s))break;e.add(s),re(t)}};function ae(s){this.kh!==void 0?(Q(this),this.dh=s,Dt(this)):this.dh=s}function le(s,t=!1,e=0){const i=this.ch,o=this.kh;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)j(i[n],!1),Q(i[n]);else i!=null&&(j(i,!1),Q(i));else j(this,s)}const re=s=>{var t,e,i,o;s.type==it.CHILD&&((t=(i=s).sh)!==null&&t!==void 0||(i.sh=le),(e=(o=s).Lj)!==null&&e!==void 0||(o.Lj=ae))};class de extends Tt{constructor(){super(...arguments),this.kh=void 0}wh(t,e,i){super.wh(t,e,i),Dt(this),this.isConnected=t.eh}vh(t,e=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)===null||i===void 0||i.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),e&&(j(this,t),Q(this))}setValue(t){if(ne(this.Kj))this.Kj.fh(t,this);else{const e=[...this.Kj.ch];e[this.Mj]=t,this.Kj.fh(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=s=>s??p;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class X extends Tt{constructor(t){if(super(t),this.et=p,t.type!==it.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this.ft=void 0,this.et=t;if(t===A)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={jh:this.constructor.resultType,strings:e,values:[]}}}X.directiveName="unsafeHTML",X.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tt extends X{}tt.directiveName="unsafeSVG",tt.resultType=2;const ce=Lt(tt);class ue extends de{constructor(t){super(t),this._g=null,this.Vb=null,this.$g=!1,this.$g=t.type===it.ATTRIBUTE}render(t){this._g!==t&&(this._g=t,this.disconnected(),this.isConnected&&this.ah());const e=this._g();return this.$g?At(e):e}reconnected(){this.ah()}disconnected(){var t;this.$g||this.setValue(null),(t=this.Vb)==null||t.call(this),this.Vb=null}ah(){this._g&&(this.Vb=P(this.kd.bind(this)))}kd(){var t;this.setValue((t=this._g)==null?void 0:t.call(this))}}const b=Lt(ue);function f(s){return b(S(s))}class Nt extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=St(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){var t;(t=this.rootPart)==null||t.setConnected(!1),this.rootPart=null}}class Et{constructor(t,e){this.elements=new Set,this.fc=gt(this.qa.bind(this)),this.bh=t,this.fg=e}connect(){this.qa();const t=new MutationObserver(this.fc);t.observe(this.bh,{childList:!0}),T(()=>t.disconnect()),T(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){t instanceof Node?(e.textContent="",e.append(t)):St(t,e),e.style.display||(e.style.display="contents");const i=e.firstElementChild;if(!i)return;const o=e.getAttribute("data-class");o&&i.classList.add(...o.split(" "))}qa(){for(const t of this.bh.querySelectorAll("slot"))t.hasAttribute("name")&&this.elements.add(t);this.fg(this.elements)}}let he=0,H="data-slot-id";class jt{constructor(t){this.fc=gt(this.qa.bind(this)),this.bh=t,this.slots=new Et(t,this.qa.bind(this))}connect(){this.slots.connect(),this.qa();const t=new MutationObserver(this.fc);t.observe(this.bh,{childList:!0}),T(()=>t.disconnect())}qa(){for(const t of this.bh.children){if(t.nodeType!==1)continue;const e=t.getAttribute("slot");if(!e)continue;t.style.display="none";let i=t.getAttribute(H);i||t.setAttribute(H,i=++he+"");for(const o of this.slots.elements){if(o.getAttribute("name")!==e||o.getAttribute(H)===i)continue;const n=document.importNode(t,!0);e.includes("-icon")&&n.classList.add("vds-icon"),n.style.display="",n.removeAttribute("slot"),this.slots.assign(n,o),o.setAttribute(H,i)}}}}function z({label:s,icon:t}){return r`
    <media-menu-button class="vds-menu-button">
      <slot name="menu-arrow-left-icon" data-class="vds-menu-button-close-icon"></slot>
      <slot name="${t}-icon" data-class="vds-menu-button-icon"></slot>
      <span class="vds-menu-button-label">${b(s)}</span>
      <span class="vds-menu-button-hint" data-part="hint"></span>
      <slot name="menu-arrow-right-icon" data-class="vds-menu-button-open-icon"></slot>
    </media-menu-button>
  `}function m(s,t){return f(()=>x(s,t))}function V({tooltip:s}){const{translations:t}=g(),{paused:e}=$().$state,i=f(()=>x(t,e()?"Play":"Pause"));return r`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button class="vds-play-button vds-button" aria-label=${i}>
          <slot name="play-icon" data-class="vds-play-icon"></slot>
          <slot name="pause-icon" data-class="vds-pause-icon"></slot>
          <slot name="replay-icon" data-class="vds-replay-icon"></slot>
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-play-tooltip-text">${m(t,"Play")}</span>
        <span class="vds-pause-tooltip-text">${m(t,"Pause")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function K({tooltip:s}){const{translations:t}=g(),{muted:e}=$().$state,i=f(()=>x(t,(e(),"Unmute")));return r`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button class="vds-mute-button vds-button" aria-label=${i}>
          <slot name="mute-icon" data-class="vds-mute-icon"></slot>
          <slot name="volume-low-icon" data-class="vds-volume-low-icon"></slot>
          <slot name="volume-high-icon" data-class="vds-volume-high-icon"></slot>
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-mute-tooltip-text">${m(t,"Unmute")}</span>
        <span class="vds-unmute-tooltip-text">${m(t,"Mute")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function U({tooltip:s}){const{translations:t}=g(),{textTrack:e}=$().$state,i=f(()=>x(t,e()?"Closed-Captions Off":"Closed-Captions On"));return r`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button class="vds-caption-button vds-button" aria-label=${i}>
          <slot name="cc-on-icon" data-class="vds-cc-on-icon"></slot>
          <slot name="cc-off-icon" data-class="vds-cc-off-icon"></slot>
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-cc-on-tooltip-text">${m(t,"Closed-Captions Off")}</span>
        <span class="vds-cc-off-tooltip-text">${m(t,"Closed-Captions On")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function me(){const{translations:s}=g(),{pictureInPicture:t}=$().$state,e=f(()=>x(s,t()?"Exit PiP":"Enter PiP"));return r`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button class="vds-pip-button vds-button" aria-label=${e}>
          <slot name="pip-enter-icon" data-class="vds-pip-enter-icon"></slot>
          <slot name="pip-exit-icon" data-class="vds-pip-exit-icon"></slot>
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${m(s,"Enter PiP")}</span>
        <span class="vds-pip-exit-tooltip-text">${m(s,"Exit PiP")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Pt({tooltip:s}){const{translations:t}=g(),{fullscreen:e}=$().$state,i=f(()=>x(t,e()?"Exit Fullscreen":"Enter Fullscreen"));return r`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button class="vds-fullscreen-button vds-button" aria-label=${i}>
          <slot name="fs-enter-icon" data-class="vds-fs-enter-icon"></slot>
          <slot name="fs-exit-icon" data-class="vds-fs-exit-icon"></slot>
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-fs-enter-tooltip-text">${m(t,"Enter Fullscreen")}</span>
        <span class="vds-fs-exit-tooltip-text">${m(t,"Exit Fullscreen")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function _({seconds:s,tooltip:t}){const{translations:e}=g(),i=s>=0?"Seek Forward":"Seek Backward",o=m(e,i);return r`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${s}
          aria-label=${o}
        >
          ${s>=0?r`<slot name="seek-forward-icon"></slot>`:r`<slot name="seek-backward-icon"></slot>`}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${m(e,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function Mt(){const{translations:s}=g(),t=m(s,"Volume");return r`
    <media-volume-slider class="vds-volume-slider vds-slider" aria-label=${t}>
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function W(){const{smQueryList:s,thumbnails:t,translations:e}=g(),i=m(e,"Seek");return r`
    <media-time-slider class="vds-time-slider vds-slider" aria-label=${i}>
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${b(s.$matches)}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          src=${b(t)}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Bt(){const{translations:s}=g(),{live:t}=$().$state,e=m(s,"Skip To Live"),i=m(s,"LIVE");return t()?r`
    <media-live-button class="vds-live-button" aria-label=${e}>
      <span class="vds-live-button-text">${i}</span>
    </media-live-button
  `:null}function pe(){return r`
    <div class="vds-time-group">
      <media-time class="vds-time" type="current"></media-time>
      <div class="vds-time-divider">/</div>
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function ot(){const{live:s}=$().$state;return s()?Bt():pe()}function It(s,t){return r`
    <media-menu-portal .container=${s} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function Ot({placement:s,tooltip:t,portal:e}){const{viewType:i}=$().$state,{translations:o,smQueryList:n,thumbnails:a,menuContainer:u,noModal:l,menuGroup:d}=g(),h=S(()=>l()?G(s):n.matches?null:G(s)),c=S(()=>!n.matches&&d()==="bottom"&&i()==="video"?26:0),v=r`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${b(h)}
      offset=${b(c)}
    >
      <media-chapters-radio-group
        class="vds-chapters-radio-group vds-radio-group"
        thumbnails=${b(a)}
      >
        <template>
          <media-radio class="vds-chapter-radio vds-radio">
            <media-thumbnail class="vds-thumbnail"></media-thumbnail>
            <div class="vds-chapter-radio-content">
              <span class="vds-chapter-radio-label" data-part="label"></span>
              <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
              <span class="vds-chapter-radio-duration" data-part="duration"></span>
            </div>
          </media-radio>
        </template>
      </media-chapters-radio-group>
    </media-menu-items>
  `;return r`
    <!-- Chapters Menu -->
    <media-menu class="vds-chapters-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${m(o,"Chapters")}
          >
            <slot name="menu-chapters-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${ft(t)?b(t):t}
        >
          ${m(o,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${e?It(u,v):v}
    </media-menu>
  `}function Vt({placement:s,portal:t,tooltip:e}){const{viewType:i}=$().$state,{translations:o,smQueryList:n,menuContainer:a,noModal:u,menuGroup:l}=g(),d=S(()=>u()?G(s):n.matches?null:G(s)),h=S(()=>!n.matches&&l()==="bottom"&&i()==="video"?26:0),c=r`
    <media-menu-items
      class="vds-settings-menu-items vds-menu-items"
      placement=${b(d)}
      offset=${b(h)}
    >
      ${ve()}${fe()}${ge()}${$e()}
    </media-menu-items>
  `;return r`
    <media-menu class="vds-settings-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${m(o,"Settings")}
          >
            <slot name="menu-settings-icon" data-class="vds-rotate-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${ft(e)?b(e):e}
        >
          ${m(o,"Settings")}
        </media-tooltip-content>
      </media-tooltip>
      ${t?It(a,c):c}
    </media-menu>
  `}function ve(){const{translations:s}=g();return r`
    <!-- Audio Menu -->
    <media-menu class="vds-audio-menu vds-menu">
      ${z({label:()=>x(s,"Audio"),icon:"menu-audio"})}
      <media-menu-items class="vds-menu-items">
        <media-audio-radio-group
          class="vds-audio-radio-group vds-radio-group"
          empty-label=${m(s,"Default")}
        >
          <template>
            <media-radio class="vds-audio-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-audio-radio-group>
      </media-menu-items>
    </media-menu>
  `}function fe(){const{translations:s}=g();return r`
    <!-- Speed Menu -->
    <media-menu class="vds-speed-menu vds-menu">
      ${z({label:()=>x(s,"Speed"),icon:"menu-speed"})}
      <media-menu-items class="vds-menu-items">
        <media-speed-radio-group
          class="vds-speed-radio-group vds-radio-group"
          normal-label=${m(s,"Normal")}
        >
          <template>
            <media-radio class="vds-speed-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-speed-radio-group>
      </media-menu-items>
    </media-menu>
  `}function ge(){const{translations:s}=g();return r`
    <!-- Quality Menu -->
    <media-menu class="vds-quality-menu vds-menu">
      ${z({label:()=>x(s,"Quality"),icon:"menu-quality"})}
      <media-menu-items class="vds-menu-items">
        <media-quality-radio-group
          class="vds-quality-radio-group vds-radio-group"
          auto-label=${m(s,"Auto")}
        >
          <template>
            <media-radio class="vds-quality-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
              <span class="vds-radio-hint" data-part="bitrate"></span>
            </media-radio>
          </template>
        </media-quality-radio-group>
      </media-menu-items>
    </media-menu>
  `}function $e(){const{translations:s}=g();return r`
    <!-- Captions Menu -->
    <media-menu class="vds-captions-menu vds-menu">
      ${z({label:()=>x(s,"Captions"),icon:"menu-captions"})}
      <media-menu-items class="vds-menu-items">
        <media-captions-radio-group
          class="vds-captions-radio-group vds-radio-group"
          off-label=${m(s,"Off")}
        >
          <template>
            <media-radio class="vds-caption-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-captions-radio-group>
      </media-menu-items>
    </media-menu>
  `}function qt(s){let t=document.querySelector(`body > .${s}`);return t||(t=document.createElement("div"),t.style.display="contents",t.classList.add(s),document.body.append(t)),t}function be({name:s,class:t,state:e,paths:i}){return r`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${At(s??e)}
  >
    ${_t(i)?ce(i):b(i)}
  </svg>`}class ye{constructor(t){this.Oj={},this.Pj=!1,this.bh=t,this.slots=new Et(t,this.Qj.bind(this))}connect(){this.slots.connect(),T(this.disconnect.bind(this))}load(){this.Sa().then(t=>{this.Oj=t,this.Pj=!0,this.Qj()})}disconnect(){for(const{slot:t}of this.Rj())t.textContent=""}*Rj(){for(const t of Object.keys(this.Oj)){const e=`${t}-icon`;for(const i of this.slots.elements)i.name===e&&(yield{icon:this.Oj[t],slot:i})}}Qj(){if(this.Pj)for(const{icon:t,slot:e}of this.Rj())this.slots.assign(t,e)}}class xe extends ye{connect(){const t=this.Jj();t&&(super.connect(),t.$state.canLoad()?this.load():Ft(t,"can-load",()=>this.load(),{once:!0}))}Jj(){let t=this.bh.parentElement;for(;t&&t.localName!=="media-player";)t=t.parentElement;return t}}class Ht extends xe{async Sa(){const t=(await Ut(()=>import("./vidstack-0d51c467-b60f272c.js"),[])).icons,e={};for(const i of Object.keys(t))e[i]=be({name:i,paths:t[i]});return e}}function we(){return r`
    <media-captions class="vds-captions"></media-captions>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">${W()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${_({seconds:-10,tooltip:"top start"})}
        ${V({tooltip:"top"})}${_({tooltip:"top",seconds:10})}
        ${f(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${K({tooltip:"top"})}
        ${Mt()}${U({tooltip:"top"})} ${Gt()}
      </media-controls-group>
    </media-controls>
  `}function ke(){return r`
    <media-captions class="vds-captions"></media-captions>
    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        ${f(Ce)}
        ${K({tooltip:"top start"})}${f(Bt)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${U({tooltip:"top"})}${Gt()}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${W()}</media-controls-group>

      ${f(Se)}${f(Le)}
    </media-controls>
  `}function Ce(){const{live:s,canSeek:t}=$().$state;return s()&&!t()?V({tooltip:"top start"}):null}function Se(){const{live:s}=$().$state;return s()?null:r`
        <media-controls-group class="vds-controls-group">
          <media-time class="vds-time" type="current"></media-time>
          <div class="vds-controls-spacer"></div>
          <media-time class="vds-time" type="duration"></media-time>
        </media-controls-group>
      `}function Le(){const{canSeek:s}=$().$state;return s()?r`
        <media-controls-group class="vds-controls-group">
          <div class="vds-controls-spacer"></div>
          ${_({seconds:-10,tooltip:"top"})}
          ${V({tooltip:"top"})}
          ${_({tooltip:"top",seconds:10})}
          <div class="vds-controls-spacer"></div>
        </media-controls-group>
      `:null}function Gt(){const s="top end";return r`
    ${Ot({tooltip:"top",placement:s,portal:!0})}
    ${Vt({tooltip:"top end",placement:s,portal:!0})}
  `}const lt=class lt extends $t(Nt,zt){onSetup(){this.forwardKeepAlive=!1,this.B=$(),this.classList.add("vds-audio-layout"),this.menuContainer=qt("vds-audio-layout"),P(()=>{this.menuContainer&&bt(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),T(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){P(()=>{this.$props.customIcons()?new jt(this).connect():new Ht(this).connect()})}N(){const{streamType:t}=this.B.$state;return this.isMatch&&t()!=="unknown"?this.isSmallLayout?ke():we():null}render(){return r`${f(this.N.bind(this))}`}};lt.tagName="media-audio-layout";let et=lt;function Te(){return r`
    ${Rt()}${nt()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      ${f(Ae)}

      <div class="vds-controls-spacer"></div>

      <media-controls-group class="vds-controls-group">${W()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${V({tooltip:"top start"})}
        ${K({tooltip:"top"})}${Mt()}
        ${f(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${U({tooltip:"top"})}${f(De)}
        ${me()} ${Pt({tooltip:"top end"})}
      </media-controls-group>
    </media-controls>
  `}function De(){const{menuGroup:s}=g();return s()==="bottom"?at():null}function Ae(){const{menuGroup:s}=g(),t=s()==="top"?r`
            <div class="vds-controls-spacer"></div>
            ${at()}
          `:null;return r`
    <media-controls-group class="vds-controls-group">${t}</media-controls-group>
  `}function Ne(){return r`
    ${Rt()}${nt()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        <div class="vds-controls-spacer"></div>
        ${U({tooltip:"bottom"})}
        ${at()}${K({tooltip:"bottom end"})}
      </media-controls-group>

      <div class="vds-controls-group">${V({tooltip:"top"})}</div>

      <media-controls-group class="vds-controls-group">
        ${f(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        <div class="vds-controls-spacer"></div>
        ${Pt({tooltip:"top end"})}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${W()}</media-controls-group>
    </media-controls>

    ${f(Ee)}
  `}function Ee(){const{duration:s}=$().$state;return s()===0?null:r`
    <div class="vds-start-duration">
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function nt(){return r`
    <div class="vds-buffering-indicator">
      <svg class="vds-buffering-icon" fill="none" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="vds-buffering-track" cx="60" cy="60" r="54" stroke="currentColor"></circle>
        <circle
          class="vds-buffering-track-fill"
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
        ></circle>
      </svg>
    </div>
  `}function at(){const{menuGroup:s,smQueryList:t}=g(),e=()=>s()==="top"||t.matches?"bottom":"top",i=S(()=>`${e()} ${s()==="top"?"end":"center"}`),o=S(()=>`${e()} end`);return r`
    ${Ot({tooltip:i,placement:o,portal:!0})}
    ${Vt({tooltip:i,placement:o,portal:!0})}
  `}function Rt(){return r`
    <div class="vds-gestures">
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:controls"></media-gesture>
      <media-gesture
        class="vds-gesture"
        event="dblpointerup"
        action="toggle:fullscreen"
      ></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
    </div>
  `}const rt=class rt extends $t(Nt,Kt){onSetup(){this.forwardKeepAlive=!1,this.B=$(),this.classList.add("vds-video-layout"),this.menuContainer=qt("vds-video-layout"),P(()=>{this.menuContainer&&bt(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),T(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){P(()=>{this.$props.customIcons()?new jt(this).connect():new Ht(this).connect()})}N(){const{streamType:t}=this.B.$state;return this.isMatch?t()==="unknown"?nt():this.isSmallLayout?Ne():Te():null}render(){return r`${f(this.N.bind(this))}`}};rt.tagName="media-video-layout";let st=rt;yt(et);yt(st);
