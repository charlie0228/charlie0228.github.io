import{_ as J}from"./nuxt-link.lpYsO-iy.js";import{B as v,D as f,K as b,N as h,Q as L,Y as y,a,C as D,G as $,H as M,L as z,aa as Y,X as C,ab as j,ad as A,ag as G,R as U,T as B,j as i,U as Z,au as S,aI as _,d as p,o as I,c as q,w as g,f as T,t as K,e as O,bk as ee,x as w,b as P,bl as te,W as ae,bm as oe,p as ne,g as le,m as se,a2 as ie,F as re,v as ce,ba as ue,bn as de}from"./entry._AweH9pq.js";import{b as me,u as _e}from"./index.E0HFIeVV.js";import{V as ge}from"./VImg.BjLxLOAY.js";import{_ as ve}from"./SocialMedia.HX66Waf3.js";import"./VRow.Nx0qwcM8.js";import{_ as Q}from"./_plugin-vue_export-helper.x3n3nnut.js";const fe=v({fluid:{type:Boolean,default:!1},...f(),...b()},"VContainer"),be=h()({name:"VContainer",props:fe(),setup(e,n){let{slots:t}=n;const{rtlClasses:o}=L();return y(()=>a(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},o.value,e.class],style:e.style},t)),{}}}),he=v({text:String,...f(),...b()},"VToolbarTitle"),ye=h()({name:"VToolbarTitle",props:he(),setup(e,n){let{slots:t}=n;return y(()=>{const o=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[o&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),xe=[null,"prominent","default","comfortable","compact"],Ve=v({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>xe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...D(),...f(),...$(),...M(),...b({tag:"header"}),...z()},"VToolbar"),ke=h()({name:"VToolbar",props:Ve(),setup(e,n){var m;let{slots:t}=n;const{backgroundColorClasses:o,backgroundColorStyles:l}=Y(C(e,"color")),{borderClasses:s}=j(e),{elevationClasses:r}=A(e),{roundedClasses:V}=G(e),{themeClasses:k}=U(e),{rtlClasses:x}=L(),u=B(!!(e.extended||(m=t.extension)!=null&&m.call(t))),c=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=i(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Z({VBtn:{variant:"text"}}),y(()=>{var R;const W=!!(e.title||t.title),X=!!(t.image||e.image),N=(R=t.extension)==null?void 0:R.call(t);return u.value=!!(e.extended||N),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,s.value,r.value,V.value,k.value,x.value,e.class],style:[l.value,e.style]},{default:()=>[X&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(S,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(ge,{key:"image-img",cover:!0,src:e.image},null)]),a(S,{defaults:{VTabs:{height:_(c.value)}}},{default:()=>{var H,E,F;return[a("div",{class:"v-toolbar__content",style:{height:_(c.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(H=t.prepend)==null?void 0:H.call(t)]),W&&a(ye,{key:"title",text:e.title},{text:t.title}),(E=t.default)==null?void 0:E.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(F=t.append)==null?void 0:F.call(t)])])]}}),a(S,{defaults:{VTabs:{height:_(d.value)}}},{default:()=>[a(me,null,{default:()=>[u.value&&a("div",{class:"v-toolbar__extension",style:{height:_(d.value)}},[N])]})]})]})}),{contentHeight:c,extensionHeight:d}}}),Se=P("span",{class:"d-none d-lg-inline ml-2 text-surface-variant text-caption"},"一個不務正業的藥師，誤打誤撞來當了前端工程師。斜槓工程師的人生！",-1),Ce=p({__name:"Header",setup(e){return(n,t)=>{const o=J;return I(),q(ke,{"scroll-behavior":"hide",elevation:2,color:"white"},{title:g(()=>[a(o,{to:"/",class:"text-decoration-none text-h6 text-black"},{default:g(()=>[T(K(O(ee)),1)]),_:1}),Se]),append:g(()=>[a(w,{color:"black",icon:"mdi-hand-coin-outline",to:"/donate"}),a(w,{color:"black",icon:"mdi-information-outline",to:"/about"})]),_:1})}}}),Te=v({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...D(),...f(),...$(),...te(),...M(),...b({tag:"footer"}),...z()},"VFooter"),Be=h()({name:"VFooter",props:Te(),setup(e,n){let{slots:t}=n;const{themeClasses:o}=U(e),{backgroundColorClasses:l,backgroundColorStyles:s}=Y(C(e,"color")),{borderClasses:r}=j(e),{elevationClasses:V}=A(e),{roundedClasses:k}=G(e),x=B(32),{resizeRef:u}=ae(m=>{m.length&&(x.value=m[0].target.clientHeight)}),c=i(()=>e.height==="auto"?x.value:parseInt(e.height,10)),{layoutItemStyles:d}=oe({id:e.name,order:i(()=>parseInt(e.order,10)),position:i(()=>"bottom"),layoutSize:c,elementSize:i(()=>e.height==="auto"?void 0:c.value),active:i(()=>e.app),absolute:C(e,"absolute")});return y(()=>a(e.tag,{ref:u,class:["v-footer",o.value,l.value,r.value,V.value,k.value,e.class],style:[s.value,e.app?d.value:{height:_(e.height)},e.style]},t)),{}}}),Ie=e=>(ne("data-v-2cc6f5d1"),e=e(),le(),e),Pe={class:"mt-2"},Ne=Ie(()=>P("a",{href:"https://github.com/charlie0228",target:"_blank"},"AzureBlue",-1)),Re=p({__name:"Footer",setup(e){const t=_e()().format("YYYY");return(o,l)=>{const s=ve;return I(),q(Be,{class:"bg-grey-lighten-3"},{default:g(()=>[a(be,null,{default:g(()=>[a(s),P("div",Pe,[T(" Copyright 2020-"+K(O(t))+" - ",1),Ne,T(" ALL RIGHTS RESERVED. ")])]),_:1})]),_:1})}}}),He=Q(Re,[["__scopeId","data-v-2cc6f5d1"]]),Ee={};function Fe(e,n){const t=Ce,o=He;return I(),se(re,null,[a(t),ie(e.$slots,"default",{},void 0,!0),a(o)],64)}const Ge=Q(Ee,[["render",Fe],["__scopeId","data-v-107f60ed"]]);function we(){const e=B(!1);return ce(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:i(()=>e.value?void 0:{transition:"none !important"}),isBooted:ue(e)}}const Le=v({scrollable:Boolean,...f(),...b({tag:"main"})},"VMain"),Ue=h()({name:"VMain",props:Le(),setup(e,n){let{slots:t}=n;const{mainStyles:o}=de(),{ssrBootStyles:l}=we();return y(()=>a(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,l.value,e.style]},{default:()=>{var s,r;return[e.scrollable?a("div",{class:"v-main__scroller"},[(s=t.default)==null?void 0:s.call(t)]):(r=t.default)==null?void 0:r.call(t)]}})),{}}});export{be as V,Ge as _,Ue as a};