import{V as B,_ as L,a as T}from"./VPagination.rdl4Zrtc.js";import{d as b,h as E,i as I,j as _,k as N,A as P,l as R,u as $,o as s,m as u,e as t,a as d,V as D,f as j,t as x,q as g,F as h,n as q,w as F,c as S,s as G}from"./entry.k2IQvVt3.js";import{u as M}from"./useDefaultQuery.LIV1fGgn.js";import{u as O}from"./query.PDHhcGC4.js";import{t as A}from"./VChip.rZx-E4rX.js";import{_ as v}from"./lodash.Nh-0PTrx.js";import{_ as Q}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./index.I2tPxzMn.js";import"./VCard.G4KpLNsb.js";import"./VImg.5b2atURo.js";import"./preview.ECaUsZrR.js";const U={key:0,class:"text-h6 px-1 mb-3"},Y={key:0,class:"marked-year text-h2 font-weight-black text-blue-lighten-4"},z=b({__name:"index",async setup(H){let l,f;const o=E(),y=I(),n=_(()=>o.params.tag),i=_(()=>o.params.page?Number.parseInt(o.params.page):1),{queryArticles:C}=M(),{data:k}=([l,f]=N(()=>O(`tag=${n.value}&page=${i.value}`,()=>C(n.value))),l=await l,f(),l),m=v.chunk(k.value,P),V=_(()=>m[i.value-1]||[]),w=_(()=>v.chain(V.value).groupBy(e=>e.year).mapValues(e=>v.chain(e).sortBy("timestamp").last().value().path).value());return R([()=>o.params.tag,()=>o.params.page],e=>{var c;const[r,p]=e;if(r===void 0||((c=k.value)==null?void 0:c.length)===0)return y.push("/");if(p===void 0||p==="1"||i.value>m.length)return y.push(A(n.value))},{immediate:!0}),$({title:""}),(e,r)=>{const p=T,c=L;return s(),u(h,null,[t(n)?(s(),u("div",U,[d(D,{icon:"mdi-tag-search-outline mr-1"}),j(" "+x(t(n).split("-").join(" ")),1)])):g("",!0),(s(!0),u(h,null,q(t(V),a=>(s(),u(h,{key:a.path},[t(w)[a.year]===a.path?(s(),u("div",Y,x(a.year),1)):g("",!0),d(p,{article:a},null,8,["article"])],64))),128)),d(c,null,{default:F(()=>[t(m).length>1?(s(),S(B,{key:0,rounded:"","model-value":t(i),length:t(m).length,"onUpdate:modelValue":r[0]||(r[0]=a=>("navigateTo"in e?e.navigateTo:t(G))(`${("tagLink"in e?e.tagLink:t(A))(t(n))}/page/${a}`))},null,8,["model-value","length"])):g("",!0)]),_:1})],64)}}}),re=Q(z,[["__scopeId","data-v-37859683"]]);export{re as default};
