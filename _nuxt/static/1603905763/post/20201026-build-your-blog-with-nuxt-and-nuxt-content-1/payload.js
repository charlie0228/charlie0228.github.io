__NUXT_JSONP__("/post/20201026-build-your-blog-with-nuxt-and-nuxt-content-1", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U){return {data:[{page:{slug:"20201026-build-your-blog-with-nuxt-and-nuxt-content-1",title:n,description:n,customCreatedAt:F,toc:[{id:q,depth:r,text:q},{id:N,depth:r,text:K},{id:J,depth:r,text:G},{id:p,depth:r,text:p}],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:"轉職工程師至今也已經過了一年多了，也開始興起想要記錄自己學習歷程的想法。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"「不如就架設一個技術部落格吧！」，我對自己這樣說。有了這個念頭之後，便開始去尋找到底哪裡適合架設部落格。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"一般常見的網誌平台，例如 "},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.pixnet.net\u002F",rel:[l,i,j],target:k},children:[{type:a,value:"痞客邦"}]},{type:a,value:" 或是 "},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.blogger.com\u002F",rel:[l,i,j],target:k},children:[{type:a,value:"Blogger.com"}]},{type:a,value:"，對於做為技術部落格來說，似乎不是那樣的合適，想來想去，那還是自己架設好了。"}]},{type:a,value:c},{type:b,tag:s,props:{id:q},children:[{type:b,tag:g,props:{href:"#%E9%9D%9C%E6%85%8B%E7%B6%B2%E7%AB%99",ariaHidden:t,tabIndex:u},children:[{type:b,tag:d,props:{className:[w,v]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"考量到 SEO，一開始就選擇要做 SSR (Server-Side Rendering) 為主的網站；另外考量到自己可能三天打魚，兩天曬網的個性，一開始還是先不用要去租用虛擬主機或是 VPS，好了，於是就決定把部落格架在 "},{type:b,tag:g,props:{href:"https:\u002F\u002Fpages.github.com\u002F",rel:[l,i,j],target:k},children:[{type:a,value:"GitHub Pages"}]},{type:a,value:" 啦！"}]},{type:a,value:c},{type:b,tag:s,props:{id:N},children:[{type:b,tag:g,props:{href:"#which-cms",ariaHidden:t,tabIndex:u},children:[{type:b,tag:d,props:{className:[w,v]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"在 GitHub Pages 上面架設部落格有很多選擇，常見的有 "},{type:b,tag:g,props:{href:"https:\u002F\u002Fhexo.io\u002F",rel:[l,i,j],target:k},children:[{type:a,value:"Hexo"}]},{type:a,value:D},{type:b,tag:g,props:{href:"https:\u002F\u002Fgohugo.io\u002F",rel:[l,i,j],target:k},children:[{type:a,value:"Hugo"}]},{type:a,value:D},{type:b,tag:g,props:{href:"https:\u002F\u002Fvuepress.vuejs.org\u002F",rel:[l,i,j],target:k},children:[{type:a,value:"Vuepress"}]},{type:a,value:D},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.gatsbyjs.com\u002F",rel:[l,i,j],target:k},children:[{type:a,value:"Gatsby"}]},{type:a,value:" 等，不過不知道是自己天生反骨還是怎樣，想說為了練功 (讓自己有第一篇文章可以寫)，剛好現在公司的專案是 Nuxt.js 架設的，那就乾脆使用 "},{type:b,tag:g,props:{href:"https:\u002F\u002Fnuxtjs.org\u002F",rel:[l,i,j],target:k},children:[{type:a,value:"Nuxt.js"}]},{type:a,value:" 搭配它的 plugin： "},{type:b,tag:g,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org\u002F",rel:[l,i,j],target:k},children:[{type:a,value:"nuxt\u002Fcontent"}]},{type:a,value:"，產生靜態頁面，可以放在 GitHub Pages 上，自己來搭建一個部落格吧！"}]},{type:a,value:c},{type:b,tag:s,props:{id:J},children:[{type:b,tag:g,props:{href:"#what-is-nuxtjs--nuxtcontent",ariaHidden:t,tabIndex:u},children:[{type:b,tag:d,props:{className:[w,v]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Nuxt.js 是一個以 Vue.js library 為核心的 SSR 解決方案，而 nuxt\u002Fcontent 則是一個可以作為一個類似 Git-based Headless CMS 的 Nuxt.js Plugin。"}]},{type:a,value:c},{type:b,tag:s,props:{id:p},children:[{type:b,tag:g,props:{href:"#%E9%96%8B%E5%A7%8B%E5%BB%BA%E7%AB%8B%E9%83%A8%E8%90%BD%E6%A0%BC%E5%B0%88%E6%A1%88",ariaHidden:t,tabIndex:u},children:[{type:b,tag:d,props:{className:[w,v]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"這邊是透過 "},{type:b,tag:h,props:{},children:[{type:a,value:"create-nuxt-app"}]},{type:a,value:" 的方式進行 Nuxt.js 專案的建立"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[y,E]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"npx create-nuxt-app "},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"\u003C"}]},{type:a,value:"project-name"},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:"\u003E"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"設定的部分我就不贅述了，主要就照著 cli 上面的問題一步一步建立就好，不過為了良好的 coding 習慣，建議可以把 ESlint、Prettier 與 StyleLint 一起安裝，讓自己的程式碼更有規範。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"在操作的時候可能在 cli 裡面有看到問說要不要安裝 "},{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:"，這邊說的 "},{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:" 其實就是我們所說的 nuxt\u002Fcontent，如果這邊忘記選擇沒關係，建立好專案之後，在專案的跟目錄底下在下以下指令："}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:"Yarn:"}]}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[y,E]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"yarn"}]},{type:a,value:x},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"add"}]},{type:a,value:L}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:"NPM:"}]}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[y,E]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"npm"}]},{type:a,value:x},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:"install"}]},{type:a,value:L}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"最後在 "},{type:b,tag:h,props:{},children:[{type:a,value:U}]},{type:a,value:" 裡面設定使用 "},{type:b,tag:h,props:{},children:[{type:a,value:"@nuxt\u002Fcontent"}]},{type:a,value:" 就大功告成啦！"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:d,props:{className:["filename"]},children:[{type:a,value:U}]},{type:b,tag:C,props:{className:[y,"language-js"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:O}]},{type:a,value:"\n  modules"},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:P}]},{type:a,value:x},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:"["}]},{type:a,value:Q},{type:b,tag:d,props:{className:[e,"string"]},children:[{type:a,value:"'@nuxt\u002Fcontent'"}]},{type:a,value:R},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:"]"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:","}]},{type:a,value:"\n  content"},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:P}]},{type:a,value:x},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:O}]},{type:a,value:Q},{type:b,tag:d,props:{className:[e,"comment"]},children:[{type:a,value:"\u002F\u002F Options"}]},{type:a,value:R},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:S}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:S}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"之後可以先試試看在 Terminal 中輸入 "},{type:b,tag:h,props:{},children:[{type:a,value:"npm run dev"}]},{type:a,value:" 試試看專案可不可以正常啟動，如果都沒問題就表示有成功安裝啦！"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"之後再來教大家如何進行 Nuxt.js 靜態頁面的編譯與 nuxt\u002Fcontent 的設定。"}]}]},dir:"\u002Fpost",path:T,extension:".md",createdAt:M,updatedAt:M}}],fetch:[{category:{"2020":{"9":[{title:n,customCreatedAt:F,path:T},{title:"Example",customCreatedAt:"2020-10-13T17:43:29.000Z",path:"\u002Fpost\u002Fexample"}]}},categoryYear:["2020"],categoryYearMonthMap:["2020.9"]}],mutations:[["page-meta\u002FUPDATE_PAGE_META",{title:n,description:n}]]}}("text","element","\n","span","token","p","a","code","noopener","noreferrer","_blank","nofollow","punctuation","利用 Nuxt.js 與 nuxt\u002Fcontent 搭建部落格 (1)","operator","開始建立部落格專案","靜態網站",2,"h2","true",-1,"icon-link","icon"," ","line-numbers","function","div","nuxt-content-highlight","pre","、","language-bash","2020-10-26T14:36:12.000Z","What is Nuxt.js & nuxt\u002Fcontent","Content","strong","what-is-nuxtjs--nuxtcontent","Which CMS"," @nuxt\u002Fcontent\n","2020-10-28T17:21:59.976Z","which-cms","{",":","\n    ","\n  ","}","\u002Fpost\u002F20201026-build-your-blog-with-nuxt-and-nuxt-content-1","nuxt.config.js")));