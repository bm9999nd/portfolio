import{a as u}from"./chunk-BHY45R2F.js";import{a as J}from"./chunk-HY3Z5A2P.js";import{a as B}from"./chunk-Z5CTVPSG.js";import{e as I,m as b,o as M}from"./chunk-6OK34WVZ.js";import{j as P,k as F,r as j}from"./chunk-2MAJLZGB.js";import{$ as x,$a as p,Ab as w,Bb as C,Ia as y,Ja as k,Ma as r,Na as d,Za as l,cb as o,db as i,eb as g,fb as f,gb as _,nb as m,vb as h,wb as s,xb as E,yb as v,zb as T}from"./chunk-CG42RDK3.js";function D(e,n){if(e&1&&(o(0,"span",15),s(1),i()),e&2){let t=n.$implicit;r(),v(" ",t,", ")}}function N(e,n){if(e&1&&(o(0,"span",15),s(1),i()),e&2){let t=n.$implicit;r(),v(" ",t,", ")}}function O(e,n){if(e&1&&(o(0,"span",15),s(1),i()),e&2){let t=n.$implicit;r(),v(" ",t,", ")}}function z(e,n){if(e&1&&(o(0,"span",15),s(1),i()),e&2){let t=n.$implicit;r(),v(" ",t,", ")}}function U(e,n){if(e&1&&(o(0,"div",16)(1,"span",10),s(2,"URL : "),i(),o(3,"span"),s(4),i()()),e&2){let t=m().$implicit;r(4),E(t.url)}}function W(e,n){if(e&1&&(o(0,"li",15),s(1),i()),e&2){let t=n.$implicit;r(),T(" ",t.name," (",t.year,"). ")}}function R(e,n){if(e&1&&(o(0,"div",9)(1,"div",10),s(2,"Clients : "),i(),o(3,"ul"),l(4,W,2,2,"li",11),i()()),e&2){let t=m().$implicit,a=m();r(4),p("ngForOf",t.clients)("ngForTrackBy",a.app.tracker)}}function G(e,n){if(e&1&&(f(0),o(1,"div",19)(2,"a",20),g(3,"img",21),i()(),_()),e&2){let t=n.$implicit,a=m(3).$implicit;r(2),p("href",t,y),r(),p("src",t,y)("alt",a.title)}}function Q(e,n){if(e&1&&(f(0),l(1,G,4,3,"ng-container",5),_()),e&2){let t=m(2).$implicit,a=m();r(),p("ngForOf",t.images)("ngForTrackBy",a.app.tracker)}}function H(e,n){if(e&1&&(o(0,"div",9)(1,"div",10,0),s(3,"Images : "),i(),o(4,"div",17),l(5,Q,2,2,"ng-container",18),i()()),e&2){let t=h(2),a=m(2);r(5),p("ngIf",a.app.navigator.visibleInScreen(t))}}function V(e,n){if(e&1&&(f(0),g(1,"iframe",22),_()),e&2){let t=n.$implicit;r(),p("src",t,k)}}function q(e,n){if(e&1&&(f(0),l(1,V,2,1,"ng-container",5),_()),e&2){let t=m(2).$implicit,a=m();r(),p("ngForOf",t.videos)("ngForTrackBy",a.app.tracker)}}function Z(e,n){if(e&1&&(o(0,"div",9)(1,"div",10,1),s(3,"Videos : "),i(),l(4,q,2,2,"ng-container",18),i()),e&2){let t=h(2),a=m(2);r(4),p("ngIf",a.app.navigator.visibleInScreen(t))}}function K(e,n){if(e&1&&(f(0),o(1,"div",6)(2,"div",7)(3,"h3",8),s(4),i()(),o(5,"div",9)(6,"span",10),s(7,"Platform : "),i(),l(8,D,2,1,"span",11),i(),o(9,"div",9)(10,"span",10),s(11,"Database : "),i(),l(12,N,2,1,"span",11),i(),o(13,"div",9)(14,"span",10),s(15,"Language : "),i(),l(16,O,2,1,"span",11),i(),o(17,"div",9)(18,"span",10),s(19,"Framework : "),i(),l(20,z,2,1,"span",11),i(),o(21,"a",12),l(22,U,5,1,"div",13),i(),l(23,R,5,2,"div",14)(24,H,6,1,"div",14)(25,Z,5,1,"div",14),i(),_()),e&2){let t=n.$implicit,a=m();r(4),v(" ",t.title," "),r(4),p("ngForOf",t.platform)("ngForTrackBy",a.app.tracker),r(4),p("ngForOf",t.database)("ngForTrackBy",a.app.tracker),r(4),p("ngForOf",t.language)("ngForTrackBy",a.app.tracker),r(4),p("ngForOf",t.framework)("ngForTrackBy",a.app.tracker),r(),p("href",t.url,y)("title",t.title),r(),p("ngIf",t.url!=null),r(),p("ngIf",t.clients.length>0),r(),p("ngIf",t.images!=null),r(),p("ngIf",t.videos!=null)}}var A=(()=>{let n=class n{constructor(a,c){this.app=a,this.sanitize=c,this.projects=[{title:"Heavy Weight Scale Application",clients:[{name:"PT Merangkai Artha Nusantara",year:2008},{name:"PT Sawit Mas Nusantara",year:2015},{name:"PT Era Sawit Perkasa",year:2019}],platform:["Desktop"],database:["MS Access","SQL Server","MySQL","Google Sheets"],language:["Visual Basic","C#","Javascript","CSS3"],framework:["WinForm .Net","AngularJS","ElectronJS"]},{title:"Business Accounting Software",clients:[{name:"PT Sawit Mas Nusantara",year:2017},{name:"PT Era Sawit Perkasa",year:2019}],platform:["Desktop"],database:["MySQL","Google Sheets"],language:["C#","Javascript","CSS3"],framework:["WinForm .Net","AngularJS","ElectronJS"]},{title:"Employee Payroll System",clients:[{name:"PT Sawit Mas Nusantara",year:2018}],platform:["Desktop"],database:["MySQL","Google Sheets"],language:["C#","Javascript","CSS3"],framework:["WinForm .Net"]},{title:"Inventory Management Software",clients:[{name:"PT Sawit Mas Nusantara",year:2018}],platform:["Desktop"],database:["MySQL","Google Sheets"],language:["Javascript","CSS3"],framework:["AngularJS","ElectronJS"]},{title:"Money Counter",clients:[{name:"PT Sawit Mas Nusantara",year:2020}],platform:["Mobile"],database:["Local Storage"],language:["Javascript","Typescript","CSS3","Scss"],framework:["Angular","Bootstrap","Ionic/Capacitor"],url:"https://bm9999nd.github.io/mobile/",images:["assets/cash-web.jpg","assets/mobile-web.png"]},{title:"Landing Page",clients:[{name:"Ahza Pratama Motor",year:2023}],platform:["Website","Responsive"],database:["Google Sheets"],language:["Javascript","Typescript","CSS3","Scss"],framework:["Angular","Bootstrap","ExpressJs"],url:"https://rs472a.github.io/static/view",videos:[this.safeUrl("https://www.youtube.com/embed/hT_wZq90sRE")]},{title:"Loan Calculator",clients:[],platform:["Website","Responsive"],database:["-"],language:["Javascript","CSS3"],framework:["Angular","Bootstrap","ExpressJs"],url:"https://bm9999nd.github.io/app/app/calc/bank/credit"},{title:"HTML Paint Test",clients:[],platform:["Website","Responsive"],database:["-"],language:["Javascript","CSS3"],framework:["Angular","Bootstrap","ExpressJs"],url:"https://bm9999nd.github.io/app/app/paint/paint"},{title:"HTML Game Test",clients:[],platform:["Website","Responsive"],database:["-"],language:["Javascript","CSS3"],framework:["Jquery","Bootstrap","ExpressJs"],videos:[this.safeUrl("https://www.youtube.com/embed/GdzffpHBDzM")]}]}safeUrl(a){return this.sanitize.bypassSecurityTrustResourceUrl(a)}};n.\u0275fac=function(c){return new(c||n)(d(b),d(I))},n.\u0275cmp=x({type:n,selectors:[["app-projects"]],standalone:!0,features:[C],decls:5,vars:2,consts:[["images",""],["videos",""],[1,"mb-3","bg-black","p-3","rounded","bg-opacity-75"],[1,"section-title"],[1,"row","gap-3","mx-0","justify-content-center"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-md-5","col-lg-3","p-3","border","rounded","bg-body-tertiary","anim-left"],[1,"text-center"],[1,"mb-1","pb-2","border-bottom","border-secondary-subtle"],[1,"mb-1","gap-2","small"],[1,"fw-medium"],["class","",4,"ngFor","ngForOf","ngForTrackBy"],["target","_blank",1,"link-offset-3",3,"href","title"],["class","mb-1 gap-2 small text-truncate",4,"ngIf"],["class","mb-1 gap-2 small",4,"ngIf"],[1,""],[1,"mb-1","gap-2","small","text-truncate"],[1,"row"],[4,"ngIf"],[1,"col"],["target","_blank",3,"href"],[1,"img-thumbnail","border-0","bg-transparent",3,"src","alt"],["frameborder","0","width","100%","height","100%","allowfullscreen","",3,"src"]],template:function(c,S){c&1&&(o(0,"section",2)(1,"h2",3),s(2,"Projects"),i(),o(3,"div",4),l(4,K,26,15,"ng-container",5),i()()),c&2&&(r(4),p("ngForOf",S.projects)("ngForTrackBy",S.app.tracker))},dependencies:[j,P,F]});let e=n;return e})();var se=(()=>{let n=class n{constructor(a,c){this.app=a,this.video=c,a.videoExist=!0}};n.\u0275fac=function(c){return new(c||n)(d(b),d(u))},n.\u0275cmp=x({type:n,selectors:[["app-cv"]],standalone:!0,features:[w([u]),C],decls:11,vars:2,consts:[[3,"video","opacity"],[1,"container","overflow-auto"],[1,"my-5"]],template:function(c,S){c&1&&(g(0,"api-bg-video",0),o(1,"div")(2,"div",1),g(3,"app-profile")(4,"hr",2)(5,"app-skills")(6,"hr",2)(7,"app-projects")(8,"hr",2)(9,"app-works")(10,"hr",2),i()()),c&2&&p("video",S.video.videos[0])("opacity",!0)},dependencies:[M,B,A,J,u]});let e=n;return e})();export{se as CvComponent};
