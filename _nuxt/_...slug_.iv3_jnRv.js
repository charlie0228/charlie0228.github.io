import{_ as x}from"./PageTocMenu.KFjAtYx0.js";import h from"./ContentRenderer.e5VU87YE.js";import g from"./ContentDoc.NRfk9osX.js";import{u as y}from"./dayjs.pnllSXNk.js";import{d as b,o as l,c as v,w as _,b as e,U as k,Y as C,f as s,t as n,a as o,Z as c,V as A,p as V,g as B}from"./entry.vw3tAz1s.js";import{_ as D}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./ContentQuery.qM6O7hNi.js";import"./query.3fjpYHku.js";import"./preview.CDXYA4Cq.js";import"./lodash.1OC-RLuA.js";import"./index.wNKP7FUq.js";import"./VCard.kc6YOhoX.js";import"./VImg.ju-a5aRN.js";import"./ContentRendererMarkdown.vue.N5ZrtUaL.js";import"./index.1dSrIji7.js";const I=a=>(V("data-v-e3ecd3fe"),a=a(),B(),a),Y={class:"pb-lg-12"},w={class:"text-h5 text-lg-h4"},N={key:0,class:"text-red"},S={class:"d-flex flex-column flex-lg-row pb-2 text-body-2 text-grey-darken-1"},j={class:"d-flex mr-3",title:"文章建立日期"},M=["datetime"],T={class:"d-flex",title:"文章最後更新日期"},E=["datetime"],F={class:"d-flex pb-3 text-body-2 text-grey-darken-1"},P={class:"d-flex flex-column align-center justify-center h-100 text-grey"},R=I(()=>e("span",{class:"text-body-1"},"文章建構中或是已被刪除",-1)),U=b({__name:"[...slug]",setup(a){const d=y();function r(i,m="YYYY-MM-DD"){return d(i).format(m)}return(i,m)=>{const p=x,u=h,f=g;return l(),v(f,null,{default:_(({doc:t})=>[e("article",Y,[e("h1",w,[t._draft?(l(),k("span",N,"[草稿] ")):C("",!0),s(" "+n(t.title),1)]),e("div",S,[e("span",j,[o(c,{icon:"mdi-calendar-blank mr-1"}),s(" 發佈於 "),e("time",{class:"ml-1",datetime:t.customCreatedAt||t.createdAt},n(t.customCreatedAt?r(t.customCreatedAt):r(t.createdAt)),9,M)]),e("span",T,[o(c,{icon:"mdi-update mr-1"}),s(" 最後更新於 "),e("time",{class:"ml-1",datetime:t.updatedAt},n(r(t.updatedAt)),9,E)])]),e("div",F,[o(c,{icon:"mdi-clock-outline mr-1"}),s(" "+n(t.readingTime.text),1)]),o(p,{class:"mb-3","use-observer":!1}),o(u,{class:"text-body-1",value:t},null,8,["value"])])]),"not-found":_(()=>[e("div",P,[o(c,{class:"text-h1 mb-3",icon:"mdi-tools"}),R,o(A,{class:"mt-3",color:"grey",variant:"tonal",to:"/"},{default:_(()=>[s(" 回到首頁 ")]),_:1})])]),_:1})}}}),ot=D(U,[["__scopeId","data-v-e3ecd3fe"]]);export{ot as default};
