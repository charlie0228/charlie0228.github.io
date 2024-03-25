import{O as m,ap as p,aq as ee,E as g,ak as ae,W as te,Z as b,a as n,C as V,I as o,G as I,J as D,K as ne,L as _,M as L,N as T,S as z,ar as N,as as R,ah as F,at as le,V as C,au as k,av as E,F as P,D as ie,a8 as se,H as de,aw as ce,a9 as ue,aa as re,ax as ve,ay as oe,ac as me,ad as ge,ae as ye,az as fe,af as ke,ag as be,aA as Ce,j as x,aB as Ve,aC as Ie,aD as Ae}from"./CHfRfl6t.js";import{V as M}from"./D2HfFsf0.js";function A(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return m()({name:t??p(ee(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i},...g()},setup(a,c){let{slots:l}=c;return()=>{var d;return ae(a.tag,{class:[e,a.class],style:a.style},(d=l.default)==null?void 0:d.call(l))}}})}const he=m()({name:"VCardActions",props:g(),setup(e,i){let{slots:t}=i;return te({VBtn:{slim:!0,variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Se=A("v-card-subtitle"),Pe=A("v-card-title"),xe=V({start:Boolean,end:Boolean,icon:o,image:String,text:String,...g(),...I(),...D(),...ne(),..._(),...L(),...T({variant:"flat"})},"VAvatar"),B=m()({name:"VAvatar",props:xe(),setup(e,i){let{slots:t}=i;const{themeClasses:a}=z(e),{colorClasses:c,colorStyles:l,variantClasses:d}=N(e),{densityClasses:r}=R(e),{roundedClasses:v}=F(e),{sizeClasses:u,sizeStyles:s}=le(e);return b(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,r.value,v.value,u.value,d.value,e.class],style:[l.value,s.value,e.style]},{default:()=>[t.default?n(k,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?n(M,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(C,{key:"icon",icon:e.icon},null):e.text,E(!1,"v-avatar")]})),{}}}),Be=V({appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:[String,Number],title:[String,Number],...g(),...I()},"VCardItem"),De=m()({name:"VCardItem",props:Be(),setup(e,i){let{slots:t}=i;return b(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),c=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),d=!!(l||t.append),r=!!(e.title!=null||t.title),v=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(P,null,[e.prependAvatar&&n(B,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(C,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[r&&n(Pe,{key:"title"},{default:()=>{var s;return[((s=t.title)==null?void 0:s.call(t))??e.title]}}),v&&n(Se,{key:"subtitle"},{default:()=>{var s;return[((s=t.subtitle)==null?void 0:s.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),d&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(P,null,[e.appendIcon&&n(C,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(B,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),_e=A("v-card-text"),Le=V({appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ie(),...g(),...I(),...se(),...de(),...ce(),...ue(),...re(),...D(),...ve(),..._(),...L(),...T({variant:"elevated"})},"VCard"),Ne=m()({name:"VCard",directives:{Ripple:oe},props:Le(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:c}=z(e),{borderClasses:l}=me(e),{colorClasses:d,colorStyles:r,variantClasses:v}=N(e),{densityClasses:u}=R(e),{dimensionStyles:s}=ge(e),{elevationClasses:O}=ye(e),{loaderClasses:j}=fe(e),{locationStyles:w}=ke(e),{positionClasses:H}=be(e),{roundedClasses:q}=F(e),y=Ce(e,t),G=x(()=>e.link!==!1&&y.isLink.value),f=x(()=>!e.disabled&&e.link!==!1&&(e.link||y.isClickable.value));return b(()=>{const J=G.value?"a":e.tag,K=!!(a.title||e.title!=null),W=!!(a.subtitle||e.subtitle!=null),Z=K||W,Q=!!(a.append||e.appendAvatar||e.appendIcon),U=!!(a.prepend||e.prependAvatar||e.prependIcon),X=!!(a.image||e.image),Y=Z||U||Q,$=!!(a.text||e.text!=null);return Ve(n(J,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":f.value},c.value,l.value,d.value,u.value,O.value,j.value,H.value,q.value,v.value,e.class],style:[r.value,s.value,w.value,e.style],href:y.href.value,onClick:f.value&&y.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var h;return[X&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(M,{key:"image-img",cover:!0,src:e.image},null)]),n(Ae,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),Y&&n(De,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),$&&n(_e,{key:"text"},{default:()=>{var S;return[((S=a.text)==null?void 0:S.call(a))??e.text]}}),(h=a.default)==null?void 0:h.call(a),a.actions&&n(he,null,{default:a.actions}),E(f.value,"v-card")]}}),[[Ie("ripple"),f.value&&e.ripple]])}),{}}});export{Ne as V,B as a};
