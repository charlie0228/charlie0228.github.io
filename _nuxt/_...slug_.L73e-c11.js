import x from"./ContentRenderer.-Z8cQn3B.js";import f from"./ContentDoc.a5i-ra9f.js";import{u as h}from"./dayjs.qBkXUpve.js";import{d as g,o as d,c as y,w as l,b as e,X as b,_ as k,f as s,t as n,a as o,$ as c,V as v,p as C,g as A}from"./entry.tdvre0OL.js";import{_ as V}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./ContentRendererMarkdown.vue.QIAQR254.js";import"./index.1dSrIji7.js";import"./preview.b7AeIeff.js";import"./ContentQuery.Fys0V2MI.js";import"./asyncData.vwRrcdxI.js";import"./query._8phEkSJ.js";const B=a=>(C("data-v-e9a754c8"),a=a(),A(),a),D={class:"text-h5 text-lg-h4"},I={key:0,class:"text-red"},w={class:"d-flex flex-column flex-lg-row pb-2 text-body-2 text-grey-darken-1"},N={class:"d-flex mr-3",title:"文章建立日期"},S=["datetime"],Y={class:"d-flex",title:"文章最後更新日期"},j=["datetime"],M={class:"d-flex pb-3 text-body-2 text-grey-darken-1"},T={class:"d-flex flex-column align-center justify-center h-100 text-grey"},E=B(()=>e("span",{class:"text-body-1"},"文章建構中或是已被刪除",-1)),F=g({__name:"[...slug]",setup(a){const m=h();function r(i,_="YYYY-MM-DD"){return m(i).format(_)}return(i,_)=>{const p=x,u=f;return d(),y(u,null,{default:l(({doc:t})=>[e("article",null,[e("h1",D,[t._draft?(d(),b("span",I,"[草稿] ")):k("",!0),s(" "+n(t.title),1)]),e("div",w,[e("span",N,[o(c,{icon:"mdi-calendar-blank mr-1"}),s(" 發佈於 "),e("time",{class:"ml-1",datetime:t.customCreatedAt||t.createdAt},n(t.customCreatedAt?r(t.customCreatedAt):r(t.createdAt)),9,S)]),e("span",Y,[o(c,{icon:"mdi-update mr-1"}),s(" 最後更新於 "),e("time",{class:"ml-1",datetime:t.updatedAt},n(r(t.updatedAt)),9,j)])]),e("div",M,[o(c,{icon:"mdi-clock-outline mr-1"}),s(" "+n(t.readingTime.text),1)]),o(p,{value:t},null,8,["value"])])]),"not-found":l(()=>[e("div",T,[o(c,{class:"text-h1 mb-3",icon:"mdi-tools"}),E,o(v,{class:"mt-3",color:"grey",variant:"tonal",to:"/"},{default:l(()=>[s(" 回到首頁 ")]),_:1})])]),_:1})}}}),P=V(F,[["__scopeId","data-v-e9a754c8"]]);export{P as default};
