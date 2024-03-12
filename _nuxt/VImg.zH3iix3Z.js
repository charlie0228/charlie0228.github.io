import{B,D as $,a7 as K,N as D,ac as X,Y as W,a as r,j as R,aj as Y,$ as E,aD as Q,aE as Z,aF as H,H as p,aa as ee,X as te,ag as ne,aG as re,T as h,r as ae,l as T,aH as se,a1 as ie,aI as le,aA as O,aB as oe,F as ue,aJ as ce,aK as de}from"./entry.W-iIX5Z4.js";function ve(e){return{aspectStyles:R(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const A=B({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...$(),...K()},"VResponsive"),U=D()({name:"VResponsive",props:A(),setup(e,l){let{slots:a}=l;const{aspectStyles:n}=ve(e),{dimensionStyles:c}=X(e);return W(()=>{var d;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(d=a.additional)==null?void 0:d.call(a),a.default&&r("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),ge=B({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),I=(e,l)=>{let{slots:a}=l;const{transition:n,disabled:c,group:d,...f}=e,{component:v=d?Q:Z,...S}=typeof n=="object"?n:{};return Y(v,E(typeof n=="string"?{name:c?"":n}:S,typeof n=="string"?{}:{disabled:c,group:d},f),a)};function me(e,l){if(!H)return;const a=l.modifiers||{},n=l.value,{handler:c,options:d}=typeof n=="object"?n:{handler:n,options:{}},f=new IntersectionObserver(function(){var g;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],S=arguments.length>1?arguments[1]:void 0;const s=(g=e._observe)==null?void 0:g[l.instance.$.uid];if(!s)return;const i=v.some(y=>y.isIntersecting);c&&(!a.quiet||s.init)&&(!a.once||i||s.init)&&c(i,v,S),i&&a.once?q(e,l):s.init=!0},d);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:f},f.observe(e)}function q(e,l){var n;const a=(n=e._observe)==null?void 0:n[l.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const fe={mounted:me,unmounted:q},Se=fe,ye=B({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...A(),...$(),...p(),...ge()},"VImg"),be=D()({name:"VImg",directives:{intersect:Se},props:ye(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:a,slots:n}=l;const{backgroundColorClasses:c,backgroundColorStyles:d}=ee(te(e,"color")),{roundedClasses:f}=ne(e),v=re("VImg"),S=h(""),s=ae(),i=h(e.eager?"loading":"idle"),g=h(),y=h(),u=R(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=R(()=>u.value.aspect||g.value/y.value||0);T(()=>e.src,()=>{z(i.value!=="idle")}),T(_,(t,o)=>{!t&&o&&s.value&&b(s.value)}),se(()=>z());function z(t){if(!(e.eager&&t)&&!(H&&!t&&!e.eager)){if(i.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,b(o,null)}u.value.src&&ie(()=>{var o;a("loadstart",((o=s.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var m;if(!v.isUnmounted)if((m=s.value)!=null&&m.complete){if(s.value.naturalWidth||j(),i.value==="error")return;_.value||b(s.value,null),i.value==="loading"&&C()}else _.value||b(s.value),k()})})}}function C(){var t;v.isUnmounted||(k(),b(s.value),i.value="loaded",a("load",((t=s.value)==null?void 0:t.currentSrc)||u.value.src))}function j(){var t;v.isUnmounted||(i.value="error",a("error",((t=s.value)==null?void 0:t.currentSrc)||u.value.src))}function k(){const t=s.value;t&&(S.value=t.currentSrc||t.src)}let P=-1;le(()=>{clearTimeout(P)});function b(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{if(clearTimeout(P),v.isUnmounted)return;const{naturalHeight:N,naturalWidth:F}=t;N||F?(g.value=F,y.value=N):!t.complete&&i.value==="loading"&&o!=null?P=window.setTimeout(m,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,y.value=1)};m()}const w=R(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),x=()=>{var m;if(!u.value.src||i.value==="idle")return null;const t=r("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:C,onError:j},null),o=(m=n.sources)==null?void 0:m.call(n);return r(I,{transition:e.transition,appear:!0},{default:()=>[O(o?r("picture",{class:"v-img__picture"},[o,t]):t,[[de,i.value==="loaded"]])]})},M=()=>r(I,{transition:e.transition},{default:()=>[u.value.lazySrc&&i.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),G=()=>n.placeholder?r(I,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,L=()=>n.error?r(I,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,J=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=h(!1);{const t=T(_,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),t())})}return W(()=>{const t=U.filterProps(e);return O(r(U,E({class:["v-img",{"v-img--booting":!V.value},c.value,f.value,e.class],style:[{width:ce(e.width==="auto"?g.value:e.width)},d.value,e.style]},t,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(ue,null,[r(x,null,null),r(M,null,null),r(J,null,null),r(G,null,null),r(L,null,null)]),default:n.default}),[[oe("intersect"),{handler:z,options:e.options},null,{once:!0}]])}),{currentSrc:S,image:s,state:i,naturalWidth:g,naturalHeight:y}}});export{be as V};
