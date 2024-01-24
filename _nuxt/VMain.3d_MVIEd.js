import{_ as de}from"./nuxt-link.XwpLhRHj.js";import{k as _,l as P,x as E,A as S,D as M,M as T,a as i,b7 as ve,aR as D,ao as O,aD as fe,m as Y,q,s as U,y as G,ae as j,L as I,af as J,ah as W,ak as K,E as X,G as b,K as v,H as me,aI as H,aV as C,r as Q,b8 as ge,W as A,aa as Z,aU as he,a6 as ye,b9 as ee,B as be,ba as _e,bb as te,O as Se,bc as xe,d as ae,o as R,c as ne,w,f as N,t as oe,e as se,bd as pe,V as F,b as $,J as Be,p as Te,g as Ve,X as ke,a1 as Ce,Y as we,be as Ie}from"./entry.tdvre0OL.js";import{V as Pe}from"./VImg.7wO8eo2O.js";import{_ as Ee}from"./SocialMedia.j_T7kTjw.js";import{u as Le}from"./dayjs.qBkXUpve.js";import"./VRow.aCDu010Z.js";import{_ as le}from"./_plugin-vue_export-helper.x3n3nnut.js";const Ae=_({fluid:{type:Boolean,default:!1},...P(),...E()},"VContainer"),He=S()({name:"VContainer",props:Ae(),setup(e,r){let{slots:t}=r;const{rtlClasses:o}=M();return T(()=>i(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},o.value,e.class],style:e.style},t)),{}}}),Ne=_({text:String,...P(),...E()},"VToolbarTitle"),Re=S()({name:"VToolbarTitle",props:Ne(),setup(e,r){let{slots:t}=r;return T(()=>{const o=!!(t.default||t.text||e.text);return i(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[o&&i("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),$e=_({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function y(e,r,t){return S()({name:e,props:$e({mode:t,origin:r}),setup(o,l){let{slots:s}=l;const a={onBeforeEnter(n){o.origin&&(n.style.transformOrigin=o.origin)},onLeave(n){if(o.leaveAbsolute){const{offsetTop:f,offsetLeft:m,offsetWidth:u,offsetHeight:g}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${f}px`,n.style.left=`${m}px`,n.style.width=`${u}px`,n.style.height=`${g}px`}o.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(o.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:f,top:m,left:u,width:g,height:h}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=f||"",n.style.top=m||"",n.style.left=u||"",n.style.width=g||"",n.style.height=h||""}}};return()=>{const n=o.group?ve:D;return O(n,{name:o.disabled?"":e,css:!o.disabled,...o.group?void 0:{mode:o.mode},...o.disabled?{}:a},s.default)}}})}function ie(e,r){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return S()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(o,l){let{slots:s}=l;return()=>O(D,{name:o.disabled?"":e,css:!o.disabled,...o.disabled?{}:r},s.default)}})}function re(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=fe(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const n=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const f=`${a[o]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=n.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=f})},onAfterEnter:s,onEnterCancelled:s,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[o]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:l,onLeaveCancelled:l};function l(a){e&&a._parent&&a._parent.classList.remove(e),s(a)}function s(a){const n=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,n!=null&&(a.style[t]=n),delete a._initialStyle}}y("fab-transition","center center","out-in");y("dialog-bottom-transition");y("dialog-top-transition");y("fade-transition");y("scale-transition");y("scroll-x-transition");y("scroll-x-reverse-transition");y("scroll-y-transition");y("scroll-y-reverse-transition");y("slide-x-transition");y("slide-x-reverse-transition");y("slide-y-transition");y("slide-y-reverse-transition");const Fe=ie("expand-transition",re());ie("expand-x-transition",re("",!0));const ze=[null,"prominent","default","comfortable","compact"],ue=_({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ze.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Y(),...P(),...q(),...U(),...E({tag:"header"}),...G()},"VToolbar"),z=S()({name:"VToolbar",props:ue(),setup(e,r){var c;let{slots:t}=r;const{backgroundColorClasses:o,backgroundColorStyles:l}=j(I(e,"color")),{borderClasses:s}=J(e),{elevationClasses:a}=W(e),{roundedClasses:n}=K(e),{themeClasses:f}=X(e),{rtlClasses:m}=M(),u=b(!!(e.extended||(c=t.extension)!=null&&c.call(t))),g=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=v(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return me({VBtn:{variant:"text"}}),T(()=>{var d;const x=!!(e.title||t.title),B=!!(t.image||e.image),L=(d=t.extension)==null?void 0:d.call(t);return u.value=!!(e.extended||L),i(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,s.value,a.value,n.value,f.value,m.value,e.class],style:[l.value,e.style]},{default:()=>[B&&i("div",{key:"image",class:"v-toolbar__image"},[t.image?i(H,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):i(Pe,{key:"image-img",cover:!0,src:e.image},null)]),i(H,{defaults:{VTabs:{height:C(g.value)}}},{default:()=>{var p,V,k;return[i("div",{class:"v-toolbar__content",style:{height:C(g.value)}},[t.prepend&&i("div",{class:"v-toolbar__prepend"},[(p=t.prepend)==null?void 0:p.call(t)]),x&&i(Re,{key:"title",text:e.title},{text:t.title}),(V=t.default)==null?void 0:V.call(t),t.append&&i("div",{class:"v-toolbar__append"},[(k=t.append)==null?void 0:k.call(t)])])]}}),i(H,{defaults:{VTabs:{height:C(h.value)}}},{default:()=>[i(Fe,null,{default:()=>[u.value&&i("div",{class:"v-toolbar__extension",style:{height:C(h.value)}},[L])]})]})]})}),{contentHeight:g,extensionHeight:h}}}),Me=_({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function De(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=r;let o=0;const l=Q(null),s=b(0),a=b(0),n=b(0),f=b(!1),m=b(!1),u=v(()=>Number(e.scrollThreshold)),g=v(()=>ge((u.value-s.value)/u.value||0)),h=()=>{const c=l.value;!c||t&&!t.value||(o=s.value,s.value="window"in c?c.pageYOffset:c.scrollTop,m.value=s.value<o,n.value=Math.abs(s.value-u.value))};return A(m,()=>{a.value=a.value||s.value}),A(f,()=>{a.value=0}),Z(()=>{A(()=>e.scrollTarget,c=>{var B;const x=c?document.querySelector(c):window;x&&x!==l.value&&((B=l.value)==null||B.removeEventListener("scroll",h),l.value=x,l.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),he(()=>{var c;(c=l.value)==null||c.removeEventListener("scroll",h)}),t&&A(t,h,{immediate:!0}),{scrollThreshold:u,currentScroll:s,currentThreshold:n,isScrollActive:f,scrollRatio:g,isScrollingUp:m,savedScroll:a}}function ce(){const e=b(!1);return Z(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:ye(e)}}const Oe=_({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ue(),...ee(),...Me(),height:{type:[Number,String],default:64}},"VAppBar"),Ye=S()({name:"VAppBar",props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:t}=r;const o=Q(),l=be(e,"modelValue"),s=v(()=>{var p;const d=new Set(((p=e.scrollBehavior)==null?void 0:p.split(" "))??[]);return{hide:d.has("hide"),inverted:d.has("inverted"),collapse:d.has("collapse"),elevate:d.has("elevate"),fadeImage:d.has("fade-image")}}),a=v(()=>{const d=s.value;return d.hide||d.inverted||d.collapse||d.elevate||d.fadeImage||!l.value}),{currentScroll:n,scrollThreshold:f,isScrollingUp:m,scrollRatio:u}=De(e,{canScroll:a}),g=v(()=>e.collapse||s.value.collapse&&(s.value.inverted?u.value>0:u.value===0)),h=v(()=>e.flat||s.value.elevate&&(s.value.inverted?n.value>0:n.value===0)),c=v(()=>s.value.fadeImage?s.value.inverted?1-u.value:u.value:void 0),x=v(()=>{var V,k;if(s.value.hide&&s.value.inverted)return 0;const d=((V=o.value)==null?void 0:V.contentHeight)??0,p=((k=o.value)==null?void 0:k.extensionHeight)??0;return d+p});_e(v(()=>!!e.scrollBehavior),()=>{xe(()=>{s.value.hide?s.value.inverted?l.value=n.value>f.value:l.value=m.value||n.value<f.value:l.value=!0})});const{ssrBootStyles:B}=ce(),{layoutItemStyles:L}=te({id:e.name,order:v(()=>parseInt(e.order,10)),position:I(e,"location"),layoutSize:x,elementSize:b(void 0),active:l,absolute:I(e,"absolute")});return T(()=>{const d=z.filterProps(e);return i(z,Se({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...L.value,"--v-toolbar-image-opacity":c.value,height:void 0,...B.value},e.style]},d,{collapse:g.value,flat:h.value}),t)}),{}}}),qe=$("span",{class:"d-none d-lg-inline ml-2 text-surface-variant text-caption"},"一個不務正業的藥師，誤打誤撞來當了前端工程師。斜槓工程師的人生！",-1),Ue=ae({__name:"Header",setup(e){return(r,t)=>{const o=de;return R(),ne(Ye,{"scroll-behavior":"hide",elevation:2},{title:w(()=>[i(o,{to:"/",class:"text-decoration-none text-h6 text-black"},{default:w(()=>[N(oe(se(pe)),1)]),_:1}),qe]),append:w(()=>[i(F,{color:"black",icon:"mdi-hand-coin-outline",to:"/donate"}),i(F,{color:"black",icon:"mdi-information-outline",to:"/about"})]),_:1})}}}),Ge=_({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Y(),...P(),...q(),...ee(),...U(),...E({tag:"footer"}),...G()},"VFooter"),je=S()({name:"VFooter",props:Ge(),setup(e,r){let{slots:t}=r;const{themeClasses:o}=X(e),{backgroundColorClasses:l,backgroundColorStyles:s}=j(I(e,"color")),{borderClasses:a}=J(e),{elevationClasses:n}=W(e),{roundedClasses:f}=K(e),m=b(32),{resizeRef:u}=Be(c=>{c.length&&(m.value=c[0].target.clientHeight)}),g=v(()=>e.height==="auto"?m.value:parseInt(e.height,10)),{layoutItemStyles:h}=te({id:e.name,order:v(()=>parseInt(e.order,10)),position:v(()=>"bottom"),layoutSize:g,elementSize:v(()=>e.height==="auto"?void 0:g.value),active:v(()=>e.app),absolute:I(e,"absolute")});return T(()=>i(e.tag,{ref:u,class:["v-footer",o.value,l.value,a.value,n.value,f.value,e.class],style:[s.value,e.app?h.value:{height:C(e.height)},e.style]},t)),{}}}),Je=e=>(Te("data-v-2cc6f5d1"),e=e(),Ve(),e),We={class:"mt-2"},Ke=Je(()=>$("a",{href:"https://github.com/charlie0228",target:"_blank"},"AzureBlue",-1)),Xe=ae({__name:"Footer",setup(e){const t=Le()().format("YYYY");return(o,l)=>{const s=Ee;return R(),ne(je,{class:"bg-grey-lighten-3"},{default:w(()=>[i(He,null,{default:w(()=>[i(s),$("div",We,[N(" Copyright 2020-"+oe(se(t))+" - ",1),Ke,N(" ALL RIGHTS RESERVED. ")])]),_:1})]),_:1})}}}),Qe=le(Xe,[["__scopeId","data-v-2cc6f5d1"]]),Ze={};function et(e,r){const t=Ue,o=Qe;return R(),ke(we,null,[i(t),Ce(e.$slots,"default"),i(o)],64)}const ut=le(Ze,[["render",et]]),tt=_({scrollable:Boolean,...P(),...E({tag:"main"})},"VMain"),ct=S()({name:"VMain",props:tt(),setup(e,r){let{slots:t}=r;const{mainStyles:o}=Ie(),{ssrBootStyles:l}=ce();return T(()=>i(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,l.value,e.style]},{default:()=>{var s,a;return[e.scrollable?i("div",{class:"v-main__scroller"},[(s=t.default)==null?void 0:s.call(t)]):(a=t.default)==null?void 0:a.call(t)]}})),{}}});export{He as V,ut as _,ct as a};
