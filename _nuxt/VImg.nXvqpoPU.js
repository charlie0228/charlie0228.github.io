import{i as T,j as E,a4 as K,y as F,a9 as Q,K as $,a as r,H as R,ag as X,M as D,aB as Y,aC as H,n as Z,a7 as p,J as ee,ad as te,aD as ne,E as b,r as re,T as C,aE as ae,O as se,aF as ie,ay as U,az as le,W as oe,aG as ue,aH as ce}from"./entry.WbkLwLdk.js";function de(e){return{aspectStyles:R(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const M=T({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...E(),...K()},"VResponsive"),W=F()({name:"VResponsive",props:M(),setup(e,l){let{slots:a}=l;const{aspectStyles:n}=de(e),{dimensionStyles:c}=Q(e);return $(()=>{var v;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(v=a.additional)==null?void 0:v.call(a),a.default&&r("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),ve=T({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),z=(e,l)=>{let{slots:a}=l;const{transition:n,disabled:c,...v}=e,{component:f=Y,...d}=typeof n=="object"?n:{};return X(f,D(typeof n=="string"?{name:c?"":n}:d,v,{disabled:c}),a)};function ge(e,l){if(!H)return;const a=l.modifiers||{},n=l.value,{handler:c,options:v}=typeof n=="object"?n:{handler:n,options:{}},f=new IntersectionObserver(function(){var g;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=arguments.length>1?arguments[1]:void 0;const s=(g=e._observe)==null?void 0:g[l.instance.$.uid];if(!s)return;const i=d.some(S=>S.isIntersecting);c&&(!a.quiet||s.init)&&(!a.once||i||s.init)&&c(i,d,h),i&&a.once?q(e,l):s.init=!0},v);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:f},f.observe(e)}function q(e,l){var n;const a=(n=e._observe)==null?void 0:n[l.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const me={mounted:ge,unmounted:q},fe=me,Se=T({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...M(),...E(),...Z(),...ve()},"VImg"),_e=F()({name:"VImg",directives:{intersect:fe},props:Se(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:a,slots:n}=l;const{backgroundColorClasses:c,backgroundColorStyles:v}=p(ee(e,"color")),{roundedClasses:f}=te(e),d=ne("VImg"),h=b(""),s=re(),i=b(e.eager?"loading":"idle"),g=b(),S=b(),u=R(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),y=R(()=>u.value.aspect||g.value/S.value||0);C(()=>e.src,()=>{I(i.value!=="idle")}),C(y,(t,o)=>{!t&&o&&s.value&&_(s.value)}),ae(()=>I());function I(t){if(!(e.eager&&t)&&!(H&&!t&&!e.eager)){if(i.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,_(o,null)}u.value.src&&se(()=>{var o;a("loadstart",((o=s.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var m;if(!d.isUnmounted)if((m=s.value)!=null&&m.complete){if(s.value.naturalWidth||w(),i.value==="error")return;y.value||_(s.value,null),i.value==="loading"&&k()}else y.value||_(s.value),B()})})}}function k(){var t;d.isUnmounted||(B(),_(s.value),i.value="loaded",a("load",((t=s.value)==null?void 0:t.currentSrc)||u.value.src))}function w(){var t;d.isUnmounted||(i.value="error",a("error",((t=s.value)==null?void 0:t.currentSrc)||u.value.src))}function B(){const t=s.value;t&&(h.value=t.currentSrc||t.src)}let P=-1;ie(()=>{clearTimeout(P)});function _(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{if(clearTimeout(P),d.isUnmounted)return;const{naturalHeight:O,naturalWidth:N}=t;O||N?(g.value=N,S.value=O):!t.complete&&i.value==="loading"&&o!=null?P=window.setTimeout(m,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,S.value=1)};m()}const V=R(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),x=()=>{var m;if(!u.value.src||i.value==="idle")return null;const t=r("img",{class:["v-img__img",V.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:k,onError:w},null),o=(m=n.sources)==null?void 0:m.call(n);return r(z,{transition:e.transition,appear:!0},{default:()=>[U(o?r("picture",{class:"v-img__picture"},[o,t]):t,[[ce,i.value==="loaded"]])]})},A=()=>r(z,{transition:e.transition},{default:()=>[u.value.lazySrc&&i.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",V.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),L=()=>n.placeholder?r(z,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,G=()=>n.error?r(z,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,J=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=b(!1);{const t=C(y,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),t())})}return $(()=>{const t=W.filterProps(e);return U(r(W,D({class:["v-img",{"v-img--booting":!j.value},c.value,f.value,e.class],style:[{width:ue(e.width==="auto"?g.value:e.width)},v.value,e.style]},t,{aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(oe,null,[r(x,null,null),r(A,null,null),r(J,null,null),r(L,null,null),r(G,null,null)]),default:n.default}),[[le("intersect"),{handler:I,options:e.options},null,{once:!0}]])}),{currentSrc:h,image:s,state:i,naturalWidth:g,naturalHeight:S}}});export{_e as V};
