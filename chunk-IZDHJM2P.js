import{a as M,b as I}from"./chunk-B66XNE2K.js";import{A as G,B as s,C as k,D as C,E as K,F as Z,G as Q,H as x,L as D,M as R,N as X,O as P,Q as ee,R as te,S as ne,T as ie,U as oe,_ as O,a as B,aa as re,b as J,c as L,d as U,e as W,f as Y,g as E,j as r,k as u,l as v,m as p,o as q,p as z,q as i,r as n,s as f,t as b,u as _,v as y,w as V,x as $,y as j}from"./chunk-Q2WN7XK2.js";var ae=function(e){return e.pdf="pdf",e.html="html",e.image="image",e.json="json",e.rawhtml="raw-html",e}(ae||{}),le=(()=>{let t=class t{constructor(o){this.document=o}PDFfromHTML(o,m){let a=m+(m.includes("pdf")?"":".pdf"),l=this.document.querySelector(o),g=l.clientWidth,h=l.clientHeight,d=15,F=g+d*2,w=F*1.5+d*2,H=g,N=h,ce=Math.ceil(h/w)-1;html2canvas(l).then(function(me){let A=me.toDataURL("image/jpeg",1),S=new jspdf.jsPDF({orientation:"portrait",unit:"pt",format:[F,w]});S.addImage(A,"JPG",d,d,H,N);for(let T=1;T<=ce;T++)S.addPage(F,w),S.addImage(A,"JPG",d,-(w*T)+d*4,H,N);S.save(a)})}printPDF(o){let m=this.document,a=[],l={},g=m.querySelector("#"+o),h=m.createElement("script");h.src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",m.head.querySelectorAll("link").forEach(d=>{a.push(d.href),g.append(d)}),m.head.querySelectorAll("style").forEach(d=>{l=d.innerHTML,g.append(d)}),g.append(h),printJS({printable:g.outerHTML,type:ae.rawhtml,css:a,style:l,base64:!0,showModal:!0,targetStyles:["*"]})}};t.\u0275fac=function(m){return new(m||t)(J(P))},t.\u0275prov=B({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var pe=()=>({title:"Contact",css:"bg-wheat color-base"}),ge=()=>({title:"Skills",css:"bg-wheat color-base"}),fe=()=>({title:"Profile",css:"bg-base color-wheat"}),ue=()=>({title:"Experience",css:"bg-base color-wheat"});function he(e,t){if(e&1&&(b(0),i(1,"div",35)(2,"div",36),f(3,"i"),i(4,"a",37),s(5),n()()(),_()),e&2){let c=t.$implicit;r(3),q(c.icon),r(),p("href",c.url,E),r(),C(" ",c.value," ")}}function ve(e,t){if(e&1&&(b(0),i(1,"div",38)(2,"div",39),f(3,"img",40),i(4,"small",41),s(5),n()()(),_()),e&2){let c=t.$implicit;r(3),p("src",c.img,E)("alt",c.title),r(2),k(c.title)}}function be(e,t){if(e&1&&(b(0),s(1),D(2,"date"),_()),e&2){let c=j().$implicit;r(),C(" ",R(2,1,c.dateEnd,"yyyy"),") ")}}function _e(e,t){e&1&&(b(0),i(1,"span",46),s(2,"Now"),n(),s(3,") "),_())}function Ce(e,t){if(e&1&&(b(0),i(1,"div",42)(2,"div",43),s(3),D(4,"date"),v(5,be,3,4,"ng-container",44)(6,_e,4,0,"ng-container",44),n(),i(7,"div",45)(8,"i"),s(9),n()()(),_()),e&2){let c=t.$implicit,o=j();r(3),K(" ",c.company," (",R(4,5,c.dateStart,"yyyy")," - "),r(2),p("ngIf",!o.thisYear(c.dateEnd)),r(),p("ngIf",o.thisYear(c.dateEnd)),r(3),C(" ",c.lastPosition," ")}}function ye(e,t){if(e&1&&(i(0,"h3"),s(1),n()),e&2){let c=t.title,o=t.css;z("",o," py-2 fw-bolder text-center rounded-pill text-uppercase"),r(),C(" ",c," ")}}var Te=(()=>{let t=class t{constructor(o,m,a,l,g,h,d){this.document=o,this.el=m,this.print=a,this.app=l,this.profile=g,this.skills=h,this.works=d}thisYear(o){return o.getFullYear()==new Date().getFullYear()}lastJob(){let o=this.works.works;return o[o.length-1]}listSkills(){let o=[];return this.skills.skills.forEach(a=>{a.values.forEach(l=>{o.push({img:l.img,title:l.title})})}),o}};t.\u0275fac=function(m){return new(m||t)(u(P),u(Y),u(le),u(re),u(O),u(I),u(M))},t.\u0275cmp=L({type:t,selectors:[["app-resume"]],standalone:!0,features:[Z([O,I,M]),Q],decls:60,vars:23,consts:[["sub",""],["data-bs-theme","light"],[1,"container","my-3","d-print-none"],[1,"justify-content-center","d-flex"],["type","button",1,"btn","btn-primary","px-5",3,"click"],[1,"bi","bi-printer-fill"],[1,"container","justify-content-center","d-flex"],["id","printable",1,"paper-a4"],["id","left",1,"base-grid"],[1,"d-flex","mb-5","ms-3"],[1,"mb-3","sub"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"d-flex","mb-4","w-100"],[1,"mb-3","ms-3","sub"],[1,"row","align-items-baseline","ms-3"],["id","topName",1,"position-absolute"],[1,"row","mx-0","align-items-center","bg-wheat","rounded-pill","rounded-end-0"],[1,"col-auto","p-3"],[1,"rounded-circle",3,"src","alt"],[1,"col"],[1,"color-base","display-4","fw-bolder","gap-2"],[1,"ms-5"],[1,"color-base","text-uppercase","h5"],[1,"content"],[1,"position-absolute"],[1,"d-grid","mb-3"],[1,"mb-1"],[1,"sub"],[1,"text-body","ms-5","small"],[1,"d-grid"],[1,"text-body","ms-5"],["id","right",1,"base-grid"],[1,"text-center","mb-5","d-print-none"],["target","_blank","href","https://marketplace.canva.com/EAFd-rhqdbU/1/0/1131w/canva-putih-%26-hijau-tua-modern-koki-surat-lamaran-kerja-Kc_mGgkZYto.jpg",1,"link-offset-3"],[1,"mb-2","ms-5","small"],[1,""],[1,"text-decoration-none","text-light","ms-1",3,"href"],[1,"col-6","mb-2"],[1,"hstack"],[1,"object-fit-cover","rounded-circle","bg-light",3,"src","alt"],[1,"ms-1"],[1,"mb-2"],[1,"fw-semibold"],[4,"ngIf"],[1,"text-danger","ms-3"],[1,"fst-italic"]],template:function(m,a){if(m&1){let l=V();i(0,"section",1)(1,"div",2)(2,"div",3)(3,"button",4),$("click",function(){return U(l),W(a.print.printPDF("printable"))}),f(4,"i",5),s(5," Print "),n()()(),i(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div")(11,"div",10),y(12,11),n(),v(13,he,6,4,"ng-container",12),n()(),i(14,"div",13)(15,"div")(16,"div",14),y(17,11),n(),i(18,"div",15),v(19,ve,6,3,"ng-container",12),n()()()(),i(20,"div",16)(21,"div",17)(22,"div",18),f(23,"img",19),n(),i(24,"div",20)(25,"h1",21)(26,"div"),s(27),n(),i(28,"div",22),s(29),n()(),i(30,"h2",23),s(31),n()()(),f(32,"br"),i(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",28),y(38,11),n()(),i(39,"div",29)(40,"p"),s(41," Starting from my curiosity on creating Macro Excel VBA to create Desktop App in Visual Basic itself, I managed to create RS232 connector plugin for the company's Heavy Weight Scale machine and create an application for the company without spending a lot of penny. "),n(),i(42,"p"),s(43," My search continued to NodeJS, website development and then immediately fell in love when I first met AngularJS. "),n(),i(44,"p"),s(45," However, over time I also began to realize that there was a dangerous gap in the framework and then continued to explore the Angular Framework until now. "),n()()(),i(46,"div",30)(47,"div",27)(48,"div",28),y(49,11),n()(),i(50,"div",31),v(51,Ce,10,8,"ng-container",12),n()()()()(),f(52,"div",32),n()(),f(53,"br"),i(54,"footer",33)(55,"a",34),s(56," HTML Template Reference from Canva Image "),n()(),f(57,"br"),n(),v(58,ye,2,4,"ng-template",null,0,X)}if(m&2){let l=G(59);r(12),p("ngTemplateOutlet",l)("ngTemplateOutletContext",x(19,pe)),r(),p("ngForOf",a.profile.profile.contact)("ngForTrackBy",a.app.tracker),r(4),p("ngTemplateOutlet",l)("ngTemplateOutletContext",x(20,ge)),r(2),p("ngForOf",a.listSkills())("ngForTrackBy",a.app.tracker),r(4),p("src",a.profile.profile.img,E)("alt",a.profile.profile.name),r(4),k(a.profile.profile.names.first),r(2),k(a.profile.profile.names.last),r(2),C(" ",a.lastJob().lastPosition," "),r(7),p("ngTemplateOutlet",l)("ngTemplateOutletContext",x(21,fe)),r(11),p("ngTemplateOutlet",l)("ngTemplateOutletContext",x(22,ue)),r(2),p("ngForOf",a.works.works)("ngForTrackBy",a.app.tracker)}},dependencies:[oe,ee,te,ne,ie],styles:[".paper-a4[_ngcontent-%COMP%]{width:21cm;height:29.7cm;background-color:#f5f5f5;color:#f5f5f5;position:relative}.bg-wheat[_ngcontent-%COMP%]{background-color:#f5f5f5}.bg-base[_ngcontent-%COMP%]{background-color:#323d4d}.color-wheat[_ngcontent-%COMP%]{color:#f5f5f5}.color-base[_ngcontent-%COMP%]{color:#323d4d}#topName[_ngcontent-%COMP%]{top:calc(5% + 2rem);right:0;width:85%}#topName[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%}#topName[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{width:57%;right:10%}.base-grid[_ngcontent-%COMP%]{position:absolute;top:5%;height:90%;background-color:#323d4d}.base-grid#left[_ngcontent-%COMP%]{left:0;width:40%;padding-top:40%;border-top-right-radius:1rem;border-bottom-right-radius:1rem}.base-grid#right[_ngcontent-%COMP%]{right:0;width:5%;border-top-left-radius:1rem;border-bottom-left-radius:1rem}.sub[_ngcontent-%COMP%]{width:250px!important}.sub[_ngcontent-%COMP%] + .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px;height:15px}@media print{@page{size:A4;margin:0}body[_ngcontent-%COMP%]{margin:0}.paper-a4[_ngcontent-%COMP%]{width:100%;height:100vh}}"]});let e=t;return e})();export{Te as ResumeComponent};
