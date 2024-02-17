import{y as m,ar as $,as as ee,j as y,ah as ae,F as te,K as b,a as n,i as V,I as o,k as A,n as D,q as ne,s as T,v as L,x as z,C as N,at as F,au as R,ad as E,av as le,Z as C,aw as j,W as x,ax as I,m as ie,a4 as se,l as de,ay as ce,a5 as ue,a6 as re,az as ve,aA as oe,a8 as me,a9 as ye,aa as ge,aB as ke,ab as fe,ac as be,aC as Ce,H as B,aD as Ie,aE as Ve,aF as Ae}from"./entry.vw3tAz1s.js";import{V as w}from"./VImg.ju-a5aRN.js";function h(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return m()({name:t??$(ee(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i},...y()},setup(a,c){let{slots:l}=c;return()=>{var d;return ae(a.tag,{class:[e,a.class],style:a.style},(d=l.default)==null?void 0:d.call(l))}}})}const he=m()({name:"VCardActions",props:y(),setup(e,i){let{slots:t}=i;return te({VBtn:{slim:!0,variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Se=h("v-card-subtitle"),Pe=h("v-card-title"),xe=V({start:Boolean,end:Boolean,icon:o,image:String,text:String,...y(),...A(),...D(),...ne(),...T(),...L(),...z({variant:"flat"})},"VAvatar"),_=m()({name:"VAvatar",props:xe(),setup(e,i){let{slots:t}=i;const{themeClasses:a}=N(e),{colorClasses:c,colorStyles:l,variantClasses:d}=F(e),{densityClasses:r}=R(e),{roundedClasses:v}=E(e),{sizeClasses:u,sizeStyles:s}=le(e);return b(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,r.value,v.value,u.value,d.value,e.class],style:[l.value,s.value,e.style]},{default:()=>{var g;return[e.image?n(w,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(C,{key:"icon",icon:e.icon},null):((g=t.default)==null?void 0:g.call(t))??e.text,j(!1,"v-avatar")]}})),{}}}),Be=V({appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:[String,Number],title:[String,Number],...y(),...A()},"VCardItem"),_e=m()({name:"VCardItem",props:Be(),setup(e,i){let{slots:t}=i;return b(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),c=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),d=!!(l||t.append),r=!!(e.title!=null||t.title),v=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(I,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(x,null,[e.prependAvatar&&n(_,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(C,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[r&&n(Pe,{key:"title"},{default:()=>{var s;return[((s=t.title)==null?void 0:s.call(t))??e.title]}}),v&&n(Se,{key:"subtitle"},{default:()=>{var s;return[((s=t.subtitle)==null?void 0:s.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),d&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(I,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(x,null,[e.appendIcon&&n(C,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(_,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),De=h("v-card-text"),Te=V({appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ie(),...y(),...A(),...se(),...de(),...ce(),...ue(),...re(),...D(),...ve(),...T(),...L(),...z({variant:"elevated"})},"VCard"),Ne=m()({name:"VCard",directives:{Ripple:oe},props:Te(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:c}=N(e),{borderClasses:l}=me(e),{colorClasses:d,colorStyles:r,variantClasses:v}=F(e),{densityClasses:u}=R(e),{dimensionStyles:s}=ye(e),{elevationClasses:g}=ge(e),{loaderClasses:H}=ke(e),{locationStyles:M}=fe(e),{positionClasses:O}=be(e),{roundedClasses:p}=E(e),k=Ce(e,t),q=B(()=>e.link!==!1&&k.isLink.value),f=B(()=>!e.disabled&&e.link!==!1&&(e.link||k.isClickable.value));return b(()=>{const K=q.value?"a":e.tag,W=!!(a.title||e.title!=null),Z=!!(a.subtitle||e.subtitle!=null),G=W||Z,J=!!(a.append||e.appendAvatar||e.appendIcon),Q=!!(a.prepend||e.prependAvatar||e.prependIcon),U=!!(a.image||e.image),X=G||Q||J,Y=!!(a.text||e.text!=null);return Ie(n(K,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":f.value},c.value,l.value,d.value,u.value,g.value,H.value,O.value,p.value,v.value,e.class],style:[r.value,s.value,M.value,e.style],href:k.href.value,onClick:f.value&&k.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var S;return[U&&n("div",{key:"image",class:"v-card__image"},[a.image?n(I,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(w,{key:"image-img",cover:!0,src:e.image},null)]),n(Ae,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),X&&n(_e,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),Y&&n(De,{key:"text"},{default:()=>{var P;return[((P=a.text)==null?void 0:P.call(a))??e.text]}}),(S=a.default)==null?void 0:S.call(a),a.actions&&n(he,null,{default:a.actions}),j(f.value,"v-card")]}}),[[Ve("ripple"),f.value&&e.ripple]])}),{}}});export{Ne as V};
