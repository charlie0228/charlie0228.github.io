import{A as m,aC as Z,aD as ee,l as g,ao as ae,H as te,M as b,a as n,k as V,I as o,n as A,s as D,v as ne,x as L,y as T,z,E as N,aE as R,aF as E,ak as F,aG as le,$ as C,aH as M,Y as x,aI as I,m as ie,ab as de,q as se,aJ as ce,ac as ue,ad as re,aK as ve,aL as oe,af as me,ag as ge,ah as ye,aM as ke,ai as fe,aj as be,aN as Ce,K as B,aO as Ie,aP as Ve,aQ as Ae}from"./entry.CtH8PHFK.js";import{V as H}from"./VImg.X64AwwPY.js";function h(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return m()({name:t??Z(ee(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i},...g()},setup(a,c){let{slots:l}=c;return()=>{var s;return ae(a.tag,{class:[e,a.class],style:a.style},(s=l.default)==null?void 0:s.call(l))}}})}const he=m()({name:"VCardActions",props:g(),setup(e,i){let{slots:t}=i;return te({VBtn:{slim:!0,variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Se=h("v-card-subtitle"),Pe=h("v-card-title"),xe=V({start:Boolean,end:Boolean,icon:o,image:String,text:String,...g(),...A(),...D(),...ne(),...L(),...T(),...z({variant:"flat"})},"VAvatar"),_=m()({name:"VAvatar",props:xe(),setup(e,i){let{slots:t}=i;const{themeClasses:a}=N(e),{colorClasses:c,colorStyles:l,variantClasses:s}=R(e),{densityClasses:r}=E(e),{roundedClasses:v}=F(e),{sizeClasses:u,sizeStyles:d}=le(e);return b(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,r.value,v.value,u.value,s.value,e.class],style:[l.value,d.value,e.style]},{default:()=>{var y;return[e.image?n(H,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(C,{key:"icon",icon:e.icon},null):((y=t.default)==null?void 0:y.call(t))??e.text,M(!1,"v-avatar")]}})),{}}}),Be=V({appendAvatar:String,appendIcon:o,prependAvatar:String,prependIcon:o,subtitle:[String,Number],title:[String,Number],...g(),...A()},"VCardItem"),_e=m()({name:"VCardItem",props:Be(),setup(e,i){let{slots:t}=i;return b(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),c=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),s=!!(l||t.append),r=!!(e.title!=null||t.title),v=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(I,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(x,null,[e.prependAvatar&&n(_,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(C,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[r&&n(Pe,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),v&&n(Se,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),s&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(I,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(x,null,[e.appendIcon&&n(C,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(_,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),De=h("v-card-text"),Le=V({appendAvatar:String,appendIcon:o,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:o,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ie(),...g(),...A(),...de(),...se(),...ce(),...ue(),...re(),...D(),...ve(),...L(),...T(),...z({variant:"elevated"})},"VCard"),Ne=m()({name:"VCard",directives:{Ripple:oe},props:Le(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:c}=N(e),{borderClasses:l}=me(e),{colorClasses:s,colorStyles:r,variantClasses:v}=R(e),{densityClasses:u}=E(e),{dimensionStyles:d}=ge(e),{elevationClasses:y}=ye(e),{loaderClasses:O}=ke(e),{locationStyles:j}=fe(e),{positionClasses:K}=be(e),{roundedClasses:p}=F(e),k=Ce(e,t),q=B(()=>e.link!==!1&&k.isLink.value),f=B(()=>!e.disabled&&e.link!==!1&&(e.link||k.isClickable.value));return b(()=>{const w=q.value?"a":e.tag,G=!!(a.title||e.title!=null),J=!!(a.subtitle||e.subtitle!=null),Q=G||J,Y=!!(a.append||e.appendAvatar||e.appendIcon),$=!!(a.prepend||e.prependAvatar||e.prependIcon),U=!!(a.image||e.image),W=Q||$||Y,X=!!(a.text||e.text!=null);return Ie(n(w,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":f.value},c.value,l.value,s.value,u.value,y.value,O.value,K.value,p.value,v.value,e.class],style:[r.value,d.value,j.value,e.style],href:k.href.value,onClick:f.value&&k.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var S;return[U&&n("div",{key:"image",class:"v-card__image"},[a.image?n(I,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(H,{key:"image-img",cover:!0,src:e.image},null)]),n(Ae,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),W&&n(_e,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),X&&n(De,{key:"text"},{default:()=>{var P;return[((P=a.text)==null?void 0:P.call(a))??e.text]}}),(S=a.default)==null?void 0:S.call(a),a.actions&&n(he,null,{default:a.actions}),M(f.value,"v-card")]}}),[[Ve("ripple"),f.value&&e.ripple]])}),{}}});export{Ne as V};