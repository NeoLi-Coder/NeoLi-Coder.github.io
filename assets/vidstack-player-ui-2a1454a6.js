import{C as N,m as ss,F as es,o as Zt,r as nt,n as Rt,t as Vt,p as Pt,H as e,q as as,G as is,P as ns,u as H,e as n,T as cs,v as kt,w as os,x as hs,y as rs,c as ms,z as ls,A as us,B as ps,E as gs,I as xs,J as ds,K as Ns,S as Hs,L as Ts,N as Ls,O as fs,Q as bs,R as Cs,U as vs,V as ys,W as $s,j as Gt,X as qs,Y as Is,Z as Ss,_ as As,$ as Qs,a0 as ws,a1 as Et,a2 as Os,a3 as Ks,a4 as Bs,a5 as Js,a6 as Fs,a7 as js,a8 as zs,a9 as Ds,aa as _t,s as o,l as Us,ab as Mt,d as s}from"./vidstack-4c4227d4-5daa9c9e.js";import"./app-58c204aa.js";class Ws extends N{onAttach(t){ss(t,"pointer-events","auto")}}class Xs extends N{constructor(){super(),new es}onConnect(t){Zt(nt(()=>{if(!this.connectScope)return;this.wc();const a=Rt(Vt);Zt(()=>{const i=this.vc();i&&a.pc(i)})}))}wc(){const t=this.vc(),a=Rt(Vt);t&&a.oc(t)}vc(){var t;return((t=this.el.firstElementChild)==null?void 0:t.getAttribute("role"))==="button"?this.el.firstElementChild:this.el}}class Ys extends Pt{}const ct=class ct extends e(HTMLElement,as){};ct.tagName="media-captions";let T=ct;const ot=class ot extends e(HTMLElement,is){};ot.tagName="media-gesture";let L=ot;const ht=class ht extends e(HTMLElement,ns){constructor(){super(...arguments),this.I=document.createElement("img")}onSetup(){this.B=H(),this.$state.img.set(this.I)}onConnect(){const{src:t,alt:a}=this.$state,{crossorigin:i}=this.B.$state;this.I.parentNode!==this&&this.prepend(this.I),n(()=>{o(this.I,"src",t()),o(this.I,"alt",a()),o(this.I,"crossorigin",i())})}};ht.tagName="media-poster";let f=ht;const Zs=Mt('<img loading="eager" decoding="async" aria-hidden="true">'),rt=class rt extends e(HTMLElement,cs){constructor(){super(...arguments),this.I=this.J()}onSetup(){this.B=H(),this.$state.img.set(this.I)}onConnect(){const{src:t}=this.$state,{crossorigin:a}=this.B.$props;this.I.parentNode!==this&&this.prepend(this.I),n(()=>{o(this.I,"src",t()),o(this.I,"crossorigin",a())})}J(){return kt(Zs)}};rt.tagName="media-thumbnail";let g=rt;const mt=class mt extends e(HTMLElement,os){onConnect(){n(()=>{this.textContent=this.$state.timeText()})}};mt.tagName="media-time";let b=mt;const lt=class lt extends e(HTMLElement,hs){};lt.tagName="media-controls";let C=lt;const ut=class ut extends e(HTMLElement,Ws){};ut.tagName="media-controls-group";let v=ut;class Rs extends N{}const pt=class pt extends e(HTMLElement,Rs){constructor(){super(...arguments),this.K=rs(""),this.L=ms(()=>{const{title:t,started:a}=this.B.$state;return a()&&this.K()||t()})}onSetup(){this.B=H()}onConnect(){ls(this.B.textTracks,"chapters",t=>{if(!t){this.K.set("");return}const a=()=>{const i=t==null?void 0:t.activeCues[0];this.K.set((i==null?void 0:i.text)||"")};a(),Us(t,"cue-change",a)}),n(()=>{this.textContent=this.L()})}};pt.tagName="media-chapter-title";let y=pt;const gt=class gt extends N{};gt.props={when:""};let $=gt;const xt=class xt extends e(HTMLElement,$){onSetup(){this.query=us.create(this.$props.when)}onConnect(){n(this.M.bind(this))}M(){const t=this.firstElementChild,a=(t==null?void 0:t.localName)==="template",i=t instanceof HTMLElement;if(!this.query.matches){if(a)for(const c of this.children)c.localName!=="template"&&c.remove();else i&&(t.style.display="none");return}a?this.append(t.cloneNode(!0)):i&&(t.style.display="")}};xt.tagName="media-layout";let q=xt;const dt=class dt extends e(HTMLElement,ps){};dt.tagName="media-play-button";let I=dt;const Nt=class Nt extends e(HTMLElement,gs){};Nt.tagName="media-mute-button";let S=Nt;const Ht=class Ht extends e(HTMLElement,xs){};Ht.tagName="media-caption-button";let A=Ht;const Tt=class Tt extends e(HTMLElement,ds){};Tt.tagName="media-fullscreen-button";let Q=Tt;const Lt=class Lt extends e(HTMLElement,Ns){};Lt.tagName="media-pip-button";let w=Lt;const ft=class ft extends e(HTMLElement,Hs){};ft.tagName="media-seek-button";let O=ft;const bt=class bt extends e(HTMLElement,Ts){};bt.tagName="media-toggle-button";let K=bt;const Ct=class Ct extends e(HTMLElement,Ls){};Ct.tagName="media-live-button";let B=Ct;const vt=class vt extends e(HTMLElement,fs){};vt.tagName="media-tooltip";let J=vt;const yt=class yt extends e(HTMLElement,Xs){onConnect(){this.style.display="contents"}};yt.tagName="media-tooltip-trigger";let F=yt;const $t=class $t extends e(HTMLElement,bs){};$t.tagName="media-tooltip-content";let j=$t;function u(h,t){nt(()=>{if(!h.connectScope)return;const a=h.querySelector("template");a&&n(()=>{const i=h.getOptions();_t(a,i.length,(c,l)=>{const{label:r,value:p}=i[l],m=c.querySelector('[data-part="label"]');c.setAttribute("value",p),m&&(Gt(r)?m.textContent=r:n(()=>{m.textContent=r()})),t==null||t(c,i[l],l)})})})}const qt=class qt extends e(HTMLElement,Cs){onConnect(){u(this)}};qt.tagName="media-audio-radio-group";let z=qt;const It=class It extends e(HTMLElement,vs){onConnect(){u(this)}};It.tagName="media-captions-radio-group";let D=It;const St=class St extends e(HTMLElement,ys){};St.tagName="media-menu";let U=St;const At=class At extends e(HTMLElement,Pt){};At.tagName="media-menu-button";let W=At;const x=class x extends e(HTMLElement,$s){};x.tagName="media-menu-portal",x.attrs={disabled:{converter(t){return Gt(t)?t:t!==null}}};let X=x;const Qt=class Qt extends e(HTMLElement,Ys){};Qt.tagName="media-menu-item";let Y=Qt;const wt=class wt extends e(HTMLElement,qs){};wt.tagName="media-menu-items";let Z=wt;const Ot=class Ot extends e(HTMLElement,Is){onConnect(){u(this,(t,a)=>{const{cue:i,startTime:c,duration:l}=a,r=t.querySelector(".vds-thumbnail,media-thumbnail"),p=t.querySelector('[data-part="start-time"]'),m=t.querySelector('[data-part="duration"]');p&&(p.textContent=c),m&&(m.textContent=l),r&&(r.setAttribute("time",i.startTime+""),n(()=>{const{thumbnails:ts}=this.$props;r.setAttribute("src",ts())}))})}};Ot.tagName="media-chapters-radio-group";let R=Ot;const Kt=class Kt extends e(HTMLElement,Ss){onConnect(){u(this)}};Kt.tagName="media-speed-radio-group";let V=Kt;const Bt=class Bt extends e(HTMLElement,As){onConnect(){u(this,(t,a)=>{const i=a.bitrate,c=t.querySelector('[data-part="bitrate"]');i&&c&&n(()=>{c.textContent=i()||""})})}};Bt.tagName="media-quality-radio-group";let P=Bt;const Jt=class Jt extends e(HTMLElement,Qs){};Jt.tagName="media-radio";let k=Jt;const Ft=class Ft extends e(HTMLElement,ws){};Ft.tagName="media-radio-group";let G=Ft;const jt=class jt extends e(HTMLElement,Et){};jt.tagName="media-slider";let E=jt;const zt=class zt extends g{onSetup(){super.onSetup(),this.O=Os(Et.state)}onConnect(){super.onConnect(),n(this.P.bind(this))}P(){const{duration:t}=this.B.$state;this.time=this.O.pointerRate()*t()}};zt.tagName="media-slider-thumbnail";let _=zt;const d=class d extends e(HTMLElement,Ks){onConnect(){n(()=>{this.textContent=this.getValueText()})}};d.tagName="media-slider-value",d.attrs={padMinutes:{converter:Bs}};let M=d;const Vs=Mt('<video muted playsinline preload="none" style="max-width: unset;"></video>'),Dt=class Dt extends e(HTMLElement,Js){constructor(){super(...arguments),this.Q=this.H()}onSetup(){this.B=H(),this.$state.video.set(this.Q)}onConnect(){const{crossorigin:t,canLoad:a}=this.B.$state,{src:i}=this.$state;this.Q.parentNode!==this&&this.prepend(this.Q),n(()=>{o(this.Q,"src",i()),o(this.Q,"crossorigin",t()),o(this.Q,"preload",a()?"auto":"none")})}H(){return kt(Vs)}};Dt.tagName="media-slider-video";let tt=Dt;const Ut=class Ut extends e(HTMLElement,Fs){};Ut.tagName="media-time-slider";let st=Ut;const Wt=class Wt extends e(HTMLElement,js){};Wt.tagName="media-slider-preview";let et=Wt;const Xt=class Xt extends e(HTMLElement,zs){};Xt.tagName="media-volume-slider";let at=Xt;const Yt=class Yt extends e(HTMLElement,Ds){constructor(){super(...arguments),this.R=null}onConnect(){nt(()=>{if(!this.connectScope)return;const t=this.querySelector("template");t&&(this.R=t,n(this.S.bind(this)))})}S(){if(!this.R)return;const t=_t(this.R,this.cues.length||1);this.setRefs(t)}};Yt.tagName="media-slider-chapters";let it=Yt;s(q);s(C);s(v);s(f);s(A);s(Q);s(S);s(w);s(I);s(O);s(K);s(E);s(at);s(st);s(it);s(et);s(M);s(_);s(tt);s(U);s(W);s(X);s(Z);s(Y);s(z);s(D);s(V);s(P);s(R);s(G);s(k);s(J);s(F);s(j);s(L);s(g);s(T);s(B);s(b);s(y);
