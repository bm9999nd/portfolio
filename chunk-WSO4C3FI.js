import{a as b}from"./chunk-EGR4O454.js";import{a as P}from"./chunk-F2FYFGYM.js";import{e as R,h as V,i as U,k as $}from"./chunk-GEVSECSP.js";import{$a as B,Gb as Q,Ha as u,Hb as O,Ia as c,Ja as E,Jb as L,Ma as s,Na as l,Nb as F,Oa as p,Pa as C,Qa as y,R as _,Ta as k,Ua as I,Ya as j,Za as T,_a as z,bb as g,cb as x,db as D,fb as H,gb as M,hb as N,ib as d,u as w,ua as h,xa as r,ya as f}from"./chunk-ZQOFQKCB.js";var K=e=>[e];function W(e,t){if(e&1&&(C(0),s(1,"h3",6)(2,"a",7),g(3),l()(),y()),e&2){let m=t.$implicit;r(2),c("href",d(2,K,m.path),h),r(),D(" ",m.title," ")}}var q=(()=>{let t=class t{constructor(o){this.home=o}};t.\u0275fac=function(i){return new(i||t)(f(A))},t.\u0275cmp=_({type:t,selectors:[["app-selector"]],standalone:!0,features:[M],decls:6,vars:2,consts:[[1,"container","justify-content-center","d-grid"],[1,"position-relative","ms-2"],[1,"position-absolute","h-100","align-content-center","end-100"],["type","button","name","back",1,"btn","btn-lg","fw-medium","rounded-circle","border-0",3,"click"],[1,"bi","bi-chevron-left"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb-0","fst-normal","fs-6"],[1,"future-btn","fw-medium",3,"href"]],template:function(i,n){i&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),k("click",function(){return n.home.learned=!1}),p(4,"i",4),l()(),u(5,W,4,4,"ng-container",5),l()()),i&2&&(r(5),c("ngForOf",n.home.routes)("ngForTrackBy",n.home.app.tracker))},dependencies:[F,O]});let e=t;return e})();var Y=["runImg"],Z=()=>({height:"60%"}),ee=e=>({"opacity-0":e}),te=e=>({"opacity-0 z-n1":e}),ne=e=>({"z-0":e}),ie=e=>({left:e});function oe(e,t){if(e&1&&(C(0),s(1,"div",15),p(2,"img",16),l(),y()),e&2){let m=t.$implicit,o=t.index;r(2),j("alt","",m.title," logo'"),c("src",m.img,h)("ngStyle",d(4,ie,o*100+"px"))}}function re(e,t){if(e&1&&(s(0,"div",12)(1,"div",13,0),u(3,oe,3,6,"ng-container",14),l()()),e&2){let m=I();r(3),c("ngForOf",m.skillSet)("ngForTrackBy",m.app.tracker)}}var A=(()=>{let t=class t{constructor(o,i,n){this.app=o,this.skills=i,this.video=n,this.routes=$.filter(a=>a.path!=""&&typeof a.title<"u"),this.learned=!1,this.videoFile=this.video.videos[1],this.profile=U,this.app.navigator.isBrowser&&(o.navigator.initImportDefault(),o.navigator.getFont.orbitron(),this.app.router.events.pipe(w(a=>a instanceof R)).subscribe(a=>{this.videoFile=this.video.videos[1]}))}get skillSet(){let o=this.skills.skills,i=[],n=0;return o.forEach(a=>{a.values.forEach(S=>{n+=1;let v={id:n};v.img=S.img,v.title=S.title,v.set=!0,i.push(v)})}),i}};t.\u0275fac=function(i){return new(i||t)(f(V),f(P),f(b))},t.\u0275cmp=_({type:t,selectors:[["app-home"]],viewQuery:function(i,n){if(i&1&&T(Y,5),i&2){let a;z(a=B())&&(n.runImg=a.first)}},standalone:!0,features:[H([b,P]),M],decls:19,vars:15,consts:[["runImg",""],[3,"video"],[1,"position-relative","w-100","justify-content-center","align-content-end"],[1,"container","justify-content-center","d-flex"],[1,"text-center","fw-bolder","display-3","font-orbitron","d-block"],[1,"d-block"],[1,"position-relative"],[1,"container","justify-content-center","d-grid","my-3","mb-5"],[1,"ts-1s"],["type","button","name","learnMore",1,"btn","btn-lg","border-0","blink",3,"click","ngClass"],[1,"ts-1s",3,"ngClass"],[1,"position-absolute","top-0","z-n1",3,"ngClass"],[1,"position-absolute","bottom-0","w-100","d-none"],[1,"d-flex","justify-content-between"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"position-absolute","bottom-0"],["loading","lazy",1,"object-fit-contain","icon-size","bg-transparent","position-absolute","bottom-0",3,"src","alt","ngStyle"]],template:function(i,n){i&1&&(p(0,"api-bg-video",1),u(1,re,4,2,"ng-template"),s(2,"div",2)(3,"div",3)(4,"h1",4)(5,"span",5),g(6),l(),s(7,"span",5),g(8),l(),p(9,"hr"),l()()(),s(10,"div",6)(11,"div",7)(12,"div",8)(13,"button",9),k("click",function(){return n.learned=!0}),s(14,"h2"),g(15," Learn More... "),l()()(),s(16,"div",10)(17,"div",11),p(18,"app-selector"),l()()()()),i&2&&(c("video",n.videoFile),r(2),E(N(8,Z)),r(4),x(n.profile.names.first),r(2),x(n.profile.names.last),r(5),c("ngClass",d(9,ee,n.learned)),r(3),c("ngClass",d(11,te,!n.learned)),r(),c("ngClass",d(13,ne,n.learned)))},dependencies:[F,Q,O,L,b,q],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;width:100vw;height:100vh;overflow:hidden;transition:all .25s ease-in-out;background-color:#000;position:relative;z-index:-2}a[_ngcontent-%COMP%]:not([href]){text-decoration:none}.ts-1s[_ngcontent-%COMP%]{transition:all 1s ease-in-out}.section-title[_ngcontent-%COMP%]{color:#daa520;border-bottom:3px solid orangered;padding-bottom:.25em;margin-block:.25em;display:inline-block}.section-title[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-top:1em}.future-btn[_ngcontent-%COMP%]{text-decoration:none;display:block;color:#9cbefd;padding:1rem;margin:0;text-align:center;transition:all .5s ease-in-out;border:1px solid rgba(123,166,245,.15);background-color:#7ba6f559}.future-btn[_ngcontent-%COMP%]:hover{background-color:#445f92;color:#f5f5f5}[class*=anim-][_ngcontent-%COMP%]{transition:all 1s ease-in-out;transform:translate(-100%);opacity:0%}[class*=anim-].show[_ngcontent-%COMP%]{transform:translate(0);opacity:100%}.font-orbitron[_ngcontent-%COMP%]{font-family:Orbitron,sans-serif;font-optical-sizing:auto;color:#9cbefd;text-shadow:rgba(123,166,245,.9) 0px 0px 35px}hr[_ngcontent-%COMP%]{border-width:5px;border-color:#445f92;opacity:1}.blink[_ngcontent-%COMP%]{color:#9cbefd;animation:_ngcontent-%COMP%_blink 2.5s ease-in-out infinite}@keyframes _ngcontent-%COMP%_blink{0%{filter:brightness(.5)}50%{filter:brightness(1.5)}to{filter:brightness(.5)}}.icon-size[_ngcontent-%COMP%]{height:100px;width:100px}@keyframes _ngcontent-%COMP%_loop1{0%{left:100%}to{left:-100%}}@keyframes _ngcontent-%COMP%_loop2{0%{left:50%}to{left:-150%}}.h-loop[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd){animation:_ngcontent-%COMP%_loop1 5s linear infinite}.h-loop[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2n){animation:_ngcontent-%COMP%_loop2 5s linear infinite}"]});let e=t;return e})();export{A as HomeComponent};
