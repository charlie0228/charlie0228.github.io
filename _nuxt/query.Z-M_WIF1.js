import{aJ as k,r as w,S as A,W as R,aF as B,aK as P,l as L,aL as T,aM as j,e as q,al as F,aN as I,a4 as y,a2 as M,a5 as Q,aO as H,_ as K}from"./entry.SC3u8evS.js";import{u as O,h as C}from"./preview.xGNhMJHP.js";const N=r=>r==="defer"||r===!1;function ee(...r){var v;const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[e,i,a={}]=r;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=T(),t=()=>null,c=()=>s.isHydrating?s.payload.data[e]:s.static.data[e];a.server=a.server??!0,a.default=a.default??t,a.getCachedData=a.getCachedData??c,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??k.deep,a.dedupe=a.dedupe??"cancel";const u=()=>![null,void 0].includes(a.getCachedData(e));if(!s._asyncData[e]||!a.immediate){(v=s.payload._errors)[e]??(v[e]=null);const f=a.deep?w:A;s._asyncData[e]={data:f(a.getCachedData(e)??a.default()),pending:w(!u()),error:R(s.payload._errors,e),status:w("idle")}}const o={...s._asyncData[e]};o.refresh=o.execute=(f={})=>{if(s._asyncDataPromises[e]){if(N(f.dedupe??a.dedupe))return s._asyncDataPromises[e];s._asyncDataPromises[e].cancelled=!0}if((f._initial||s.isHydrating&&f._initial!==!1)&&u())return Promise.resolve(a.getCachedData(e));o.pending.value=!0,o.status.value="pending";const p=new Promise((l,d)=>{try{l(i(s))}catch(S){d(S)}}).then(l=>{if(p.cancelled)return s._asyncDataPromises[e];let d=l;a.transform&&(d=a.transform(l)),a.pick&&(d=U(d,a.pick)),s.payload.data[e]=d,o.data.value=d,o.error.value=null,o.status.value="success"}).catch(l=>{if(p.cancelled)return s._asyncDataPromises[e];o.error.value=j(l),o.data.value=q(a.default()),o.status.value="error"}).finally(()=>{p.cancelled||(o.pending.value=!1,delete s._asyncDataPromises[e])});return s._asyncDataPromises[e]=p,s._asyncDataPromises[e]};const m=()=>o.refresh({_initial:!0}),g=a.server!==!1&&s.payload.serverRendered;{const f=F();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const l=f._nuxtOnBeforeMountCbs;f&&(B(()=>{l.forEach(d=>{d()}),l.splice(0,l.length)}),P(()=>l.splice(0,l.length)))}g&&s.isHydrating&&(o.error.value||u())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):f&&(s.payload.serverRendered&&s.isHydrating||a.lazy)&&a.immediate?f._nuxtOnBeforeMountCbs.push(m):a.immediate&&m(),a.watch&&L(a.watch,()=>o.refresh());const p=s.hook("app:data:refresh",async l=>{(!l||l.includes(e))&&await o.refresh()});f&&P(p)}const D=Promise.resolve(s._asyncDataPromises[e]).then(()=>o);return Object.assign(D,o),D}function U(r,n){const e={};for(const i of n)e[i]=r[i];return e}const b=(r,n)=>n.split(".").reduce((e,i)=>e&&e[i],r),_=(r,n)=>Object.keys(r).filter(n).reduce((e,i)=>Object.assign(e,{[i]:r[i]}),{}),te=r=>n=>r&&r.length?_(n,e=>!r.includes(e)):n,re=r=>n=>Array.isArray(n)?n.map(e=>r(e)):r(n),$=r=>{const n=[],e=[];for(const i of r)["$","_"].includes(i)?n.push(i):e.push(i);return{prefixes:n,properties:e}},ne=(r=[])=>n=>{if(r.length===0||!n)return n;const{prefixes:e,properties:i}=$(r);return _(n,a=>!i.includes(a)&&!e.includes(a[0]))},ae=(r=[])=>n=>{if(r.length===0||!n)return n;const{prefixes:e,properties:i}=$(r);return _(n,a=>i.includes(a)||e.includes(a[0]))},se=(r,n)=>{const e=new Intl.Collator(n.$locale,{numeric:n.$numeric,caseFirst:n.$caseFirst,sensitivity:n.$sensitivity}),i=Object.keys(n).filter(a=>!a.startsWith("$"));for(const a of i)r=r.sort((s,t)=>{const c=[b(s,a),b(t,a)].map(u=>{if(u!==null)return u instanceof Date?u.toISOString():u});return n[a]===-1&&c.reverse(),e.compare(c[0],c[1])});return r},ie=(r,n="Expected an array")=>{if(!Array.isArray(r))throw new TypeError(n)},h=r=>Array.isArray(r)?r:[void 0,null].includes(r)?[]:[r],z=["sort","where","only","without"];function W(r,n={}){const e={};for(const t of Object.keys(n.initialParams||{}))e[t]=z.includes(t)?h(n.initialParams[t]):n.initialParams[t];const i=(t,c=u=>u)=>(...u)=>(e[t]=c(...u),s),a=t=>{var c;return n.legacy?t!=null&&t.surround?t.surround:t&&(t!=null&&t.dirConfig&&(t.result={_path:(c=t.dirConfig)==null?void 0:c._path,...t.result,_dir:t.dirConfig}),t!=null&&t._path||Array.isArray(t)||!Object.prototype.hasOwnProperty.call(t,"result")?t:t==null?void 0:t.result):t},s={params:()=>({...e,...e.where?{where:[...h(e.where)]}:{},...e.sort?{sort:[...h(e.sort)]}:{}}),only:i("only",h),without:i("without",h),where:i("where",t=>[...h(e.where),...h(t)]),sort:i("sort",t=>[...h(e.sort),...h(t)]),limit:i("limit",t=>parseInt(String(t),10)),skip:i("skip",t=>parseInt(String(t),10)),find:()=>r(s).then(a),findOne:()=>r(i("first")(!0)).then(a),count:()=>r(i("count")(!0)).then(a),locale:t=>s.where({_locale:t}),withSurround:i("surround",(t,c)=>({query:t,...c})),withDirConfig:()=>i("dirConfig")(!0)};return n.legacy&&(s.findSurround=(t,c)=>s.withSurround(t,c).find().then(a)),s}function E(r){return JSON.stringify(r,G)}function G(r,n){return n instanceof RegExp?`--REGEX ${n.toString()}`:n}const J=r=>{let n=E(r);return n=typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n),n=n.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(n.match(/.{1,100}/g)||[]).join("/")},x=r=>I(r,y().public.content.api.baseURL),oe=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},V=()=>{const{experimental:r}=y().public.content;return r.clientDB?!0:O().isEnabled()},X=()=>async r=>{const{content:n}=y().public,e=r.params(),i=n.experimental.stripQueryParameters?x(`/query/${`${C(e)}.${n.integrity}`}/${J(e)}.json`):x(`/query/${C(e)}.${n.integrity}.json`);if(V())return(await K(()=>import("./client-db.TqxP2pHu.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(t=>t.useContentDatabase())).fetch(r);const a=await $fetch(i,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:E(e),previewToken:O().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};function ce(r,...n){const{content:e}=y().public,i=W(X(),{initialParams:typeof r!="string"?r:{},legacy:!0});let a;typeof r=="string"&&(a=M(Q(r,...n)));const s=i.params;return i.params=()=>{var c,u,o;const t=s();return a&&(t.where=t.where||[],t.first&&(t.where||[]).length===0?t.where.push({_path:H(a)}):t.where.push({_path:new RegExp(`^${a.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=t.sort)!=null&&c.length||(t.sort=[{_file:1,$numeric:!0}]),e.locales.length&&((o=(u=t.where)==null?void 0:u.find(g=>g._locale))!=null&&o._locale||(t.where=t.where||[],t.where.push({_locale:e.defaultLocale}))),t},i}export{oe as a,ie as b,h as c,se as d,J as e,re as f,b as g,ne as h,ae as i,E as j,W as k,te as o,ce as q,V as s,ee as u,x as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.TqxP2pHu.js","./entry.SC3u8evS.js","./entry.KlBBaYr5.css","./index.1dSrIji7.js","./preview.xGNhMJHP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
