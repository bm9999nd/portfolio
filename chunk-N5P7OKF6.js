import{a as u}from"./chunk-H5TINC5P.js";import{a as x}from"./chunk-KM3DJ7IT.js";import"./chunk-TAHC4OSM.js";import"./chunk-5IC5DNT2.js";import{h as Q,n as R,o as V,q as L}from"./chunk-LYXANSDQ.js";import{$a as s,Fa as _,Ja as a,Ka as p,Wa as d,Ya as m,Z as v,Za as w,_b as O,ab as l,bb as f,cb as b,db as C,dc as N,hb as E,hc as k,jb as j,lb as I,mb as T,nb as B,pb as g,qb as P,rb as z,tb as D,ub as y,vb as H,wb as M,z as S}from"./chunk-XSK66XXE.js";var G=t=>[t];function J(t,e){if(t&1&&(b(0),s(1,"h3",2)(2,"a",3),g(3),l()(),C()),t&2){let c=e.$implicit;a(2),m("href",M(2,G,c.path),_),a(),z(" ",c.title," ")}}var U=(()=>{let e=class e{constructor(i){this.home=i}};e.\u0275fac=function(n){return new(n||e)(p($))},e.\u0275cmp=v({type:e,selectors:[["app-selector"]],standalone:!0,features:[y],decls:2,vars:2,consts:[[1,"container","justify-content-center","d-grid"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb-0","fst-normal","fs-6"],[1,"future-btn","fw-medium",3,"href"]],template:function(n,o){n&1&&(s(0,"div",0),d(1,J,4,4,"ng-container",1),l()),n&2&&(a(),m("ngForOf",o.home.routes)("ngForTrackBy",o.home.app.tracker))},dependencies:[k,O]});let t=e;return t})();var W=["runImg"],X=()=>({height:"55%"}),Y=t=>({left:t});function Z(t,e){if(t&1&&(b(0),s(1,"div",12),f(2,"img",13),l(),C()),t&2){let c=e.$implicit,i=e.index;a(2),j("alt","",c.title," logo'"),m("src",c.img,_)("ngStyle",M(4,Y,i*100+"px"))}}function tt(t,e){if(t&1&&(s(0,"div",9)(1,"div",10,0),d(3,Z,3,6,"ng-container",11),l()()),t&2){let c=E();a(3),m("ngForOf",c.skillSet)("ngForTrackBy",c.app.tracker)}}var $=(()=>{let e=class e{constructor(i,n,o){this.app=i,this.skills=n,this.video=o,this.routes=L.filter(r=>r.path!=""&&typeof r.title<"u"),this.videoFile=this.video.videos[1],this.profile=V,this.app.navigator.isBrowser&&(i.videoExist=!0,i.footerFixed=!0,i.navigator.getFont.orbitron(),this.app.router.events.pipe(S(r=>r instanceof Q)).subscribe(r=>{this.videoFile=this.video.videos[1]}))}get skillSet(){let i=this.skills.skills,n=[],o=0;return i.forEach(r=>{r.values.forEach(F=>{o+=1;let h={id:o};h.img=F.img,h.title=F.title,h.set=!0,n.push(h)})}),n}};e.\u0275fac=function(n){return new(n||e)(p(R),p(x),p(u))},e.\u0275cmp=v({type:e,selectors:[["app-home"]],viewQuery:function(n,o){if(n&1&&I(W,5),n&2){let r;T(r=B())&&(o.runImg=r.first)}},standalone:!0,features:[D([u,x]),y],decls:14,vars:6,consts:[["runImg",""],[3,"video"],[1,"position-relative","w-100","align-items-center","justify-content-center","align-content-end"],[1,"container","justify-content-center","d-flex"],[1,"text-center","fw-bolder","display-3","font-orbitron","d-block"],[1,"d-block"],[1,"position-relative"],[1,"container","justify-content-center","d-grid","my-3","mb-5"],[1,"ts-1s"],[1,"position-absolute","bottom-0","w-100","d-none"],[1,"d-flex","justify-content-between"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"position-absolute","bottom-0"],["loading","lazy",1,"object-fit-contain","icon-size","bg-transparent","position-absolute","bottom-0",3,"src","alt","ngStyle"]],template:function(n,o){n&1&&(f(0,"api-bg-video",1),d(1,tt,4,2,"ng-template"),s(2,"div",2)(3,"div",3)(4,"h1",4)(5,"span",5),g(6),l(),s(7,"span",5),g(8),l(),f(9,"hr"),l()()(),s(10,"div",6)(11,"div",7)(12,"div",8),f(13,"app-selector"),l()()()),n&2&&(m("video",o.videoFile),a(2),w(H(5,X)),a(4),P(o.profile.names.first),a(2),P(o.profile.names.last))},dependencies:[k,O,N,u,U],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;width:100vw;height:100vh;overflow:hidden;transition:all .25s ease-in-out}a[_ngcontent-%COMP%]:not([href]){text-decoration:none}.ts-1s[_ngcontent-%COMP%]{transition:all 1s ease-in-out}.hover[_ngcontent-%COMP%]:hover{background-color:#f5f5f526}.section-title[_ngcontent-%COMP%]{color:#daa520;border-bottom:3px solid orangered;padding-bottom:.25em;margin-block:.25em;display:inline-block}.section-title[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-top:1em}.disabled[_ngcontent-%COMP%], .disabled[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none;opacity:.7}.future-btn[_ngcontent-%COMP%]{text-decoration:none;display:block;color:#9cbefd;padding:1rem;margin:0;text-align:center;transition:all .5s ease-in-out;border:1px solid rgba(123,166,245,.15);background-color:#7ba6f559}.future-btn[_ngcontent-%COMP%]:hover{background-color:#445f92;color:#f5f5f5}.font-orbitron[_ngcontent-%COMP%]{font-family:Orbitron,sans-serif;font-optical-sizing:auto;color:#9cbefd;text-shadow:rgba(123,166,245,.9) 0px 0px 35px}hr[_ngcontent-%COMP%]{border-width:5px;border-color:#445f92;opacity:1}.blink[_ngcontent-%COMP%]{color:#9cbefd;animation:_ngcontent-%COMP%_blink 2.5s ease-in-out infinite}@keyframes _ngcontent-%COMP%_blink{0%{filter:brightness(.5)}50%{filter:brightness(1.5)}to{filter:brightness(.5)}}.icon-size[_ngcontent-%COMP%]{height:100px;width:100px}@keyframes _ngcontent-%COMP%_loop1{0%{left:100%}to{left:-100%}}@keyframes _ngcontent-%COMP%_loop2{0%{left:50%}to{left:-150%}}.h-loop[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(odd){animation:_ngcontent-%COMP%_loop1 5s linear infinite}.h-loop[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2n){animation:_ngcontent-%COMP%_loop2 5s linear infinite}"]});let t=e;return t})();export{$ as HomeComponent};
