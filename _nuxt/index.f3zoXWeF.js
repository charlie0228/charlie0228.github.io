import{V as C,_ as w,a as V}from"./VPagination.Mo1MZ_iw.js";import{d as B,h as E,i as P,j as p,k as R,A as T,l as b,u as D,o as n,m as u,F as i,n as I,e as a,a as g,w as N,c as q,q as h,t as F,s as L}from"./entry.W-iIX5Z4.js";import{u as S}from"./useDefaultQuery.EeHsbTGE.js";import{u as $}from"./query.6jnD6sI_.js";import{_ as c}from"./lodash.tXEAdh1D.js";import{_ as j}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./index.ycaPxcKG.js";import"./VChip.rVTDyXtD.js";import"./VCard.EEO4BU5Y.js";import"./VImg.zH3iix3Z.js";import"./preview.i0qUx_Ly.js";const G={key:0,class:"marked-year text-h2 font-weight-black text-blue-lighten-4"},M=B({__name:"index",async setup(O){let o,_;const l=E(),y=P(),s=p(()=>l.params.page?Number.parseInt(l.params.page):1),{queryArticles:f}=S(),{data:v}=([o,_]=R(()=>$(`page=${s.value}`,()=>f())),o=await o,_(),o),r=c.chunk(v.value,T),d=p(()=>r[s.value-1]||[]),k=p(()=>c.chain(d.value).groupBy(e=>e.year).mapValues(e=>c.chain(e).sortBy("timestamp").last().value().path).value());return b(()=>l.params.page,e=>{if(e===void 0||e==="1"||s.value>r.length)return y.push("/")},{immediate:!0}),D({title:""}),(e,m)=>{const x=V,A=w;return n(),u(i,null,[(n(!0),u(i,null,I(a(d),t=>(n(),u(i,{key:t.path},[a(k)[t.year]===t.path?(n(),u("div",G,F(t.year),1)):h("",!0),g(x,{article:t},null,8,["article"])],64))),128)),g(A,null,{default:N(()=>[a(r).length>1?(n(),q(C,{key:0,rounded:"","model-value":a(s),length:a(r).length,"onUpdate:modelValue":m[0]||(m[0]=t=>("navigateTo"in e?e.navigateTo:a(L))(`/page/${t}`))},null,8,["model-value","length"])):h("",!0)]),_:1})],64)}}}),te=j(M,[["__scopeId","data-v-0e7c7cc5"]]);export{te as default};