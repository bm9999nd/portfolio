import{b as U}from"./chunk-HAFC2AKO.js";import{o as G,y as B}from"./chunk-32IH35UF.js";import{i as j,j as L,k as J,p as z,s as N}from"./chunk-55OMQSUZ.js";import{$ as D,Bb as I,Db as O,Eb as Y,Fb as M,Ja as b,Lb as A,Na as a,Oa as S,_a as g,ab as s,db as r,eb as o,fb as y,gb as d,hb as c,ib as C,ob as h,pa as x,pb as f,vb as F,wb as p,xb as E,yb as w,zb as T}from"./chunk-RKFLU5LM.js";var R=e=>({arr:e}),$=(e,i)=>({"fst-italic text-muted bg-body-tertiary":e,"text-light bg-body-secondary":i}),V=(e,i,t)=>({"text-bg-danger":e,"text-bg-warning":i,"text-bg-success":t});function K(e,i){if(e&1&&(d(0),C(1,7),c()),e&2){let t=i.$implicit;h(2);let l=F(6);a(),s("ngTemplateOutlet",l)("ngTemplateOutletContext",O(2,R,t))}}function W(e,i){if(e&1&&(d(0),r(1,"li",5)(2,"h3",6),p(3),o(),r(4,"ul",3),d(5),g(6,K,2,4,"ng-container",4),c(),o()(),c()),e&2){let t=i.$implicit,l=h();a(),s("@fadeX",t.scrolled),a(2),E(t.sub),a(3),s("ngForOf",t.values)("ngForTrackBy",l.app.tracker)}}function Z(e,i){if(e&1&&(d(0),p(1),c()),e&2){let t=h().arr;a(),w(" ",t.past," Years Ago ")}}function tt(e,i){e&1&&(d(0),p(1," Current "),c())}function et(e,i){if(e&1&&(r(0,"li",8)(1,"div",9)(2,"a",10),y(3,"img",11),o(),r(4,"div",12)(5,"a",13),p(6),o()(),r(7,"div",14)(8,"b"),p(9),o(),p(10),o(),r(11,"div",15)(12,"div",16),g(13,Z,2,1,"ng-container",17)(14,tt,2,0,"ng-container",17),o()()()()),e&2){let t=i.arr;s("@fadeX",t.scrolled)("ngClass",Y(14,$,t.past>=2,t.past<2)),a(2),f("href",t.img,b),a(),f("srcset",t.img),f("alt",t.title),a(2),f("href",t.url,b),s("title",t.title),a(),w(" ",t.title," "),a(3),T("",t.from," - ",t.until,""),a(),w(" (",t.due," Years of Experience) "),a(2),s("ngClass",M(17,V,t.past>=2,t.past>1&&t.past<2,t.past<=1)),a(),s("ngIf",t.past>1),a(),s("ngIf",t.past<=1)}}var rt=(()=>{let i=class i{constructor(l,n){this.app=l,this.el=n,this.skills=[{sub:"Databases",scrolled:!1,values:[{title:"MySQL",img:"https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png",url:"https://www.mysql.com/",from:2012,until:2016,due:4,past:this.dateDiff(2016),scrolled:!1},{title:"Google Sheets",img:"https://assets-global.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d61_646e04919c3fa7c2380ae837_Google_Sheets_logo_(2014-2020).svg.png",url:"https://www.google.com/sheets/about/",from:2012,until:new Date().getFullYear(),due:this.dateDiff(2012,1,1),past:this.dateDiff(),scrolled:!1},{title:"JSON Database",img:"https://i0.wp.com/dbaontap.com/wp-content/uploads/2015/11/json-logo.png?ssl=1",url:"https://www.mongodb.com/",from:2017,until:new Date().getFullYear(),due:this.dateDiff(2017,1,1),past:this.dateDiff(),scrolled:!1}]},{sub:"Platform : Desktop",scrolled:!1,values:[{title:".Net 3.5+",img:"https://winaero.com/blog/wp-content/uploads/2018/06/net-framework-icon.png",url:"https://dotnet.microsoft.com/en-us/download/dotnet-framework/net35-sp1",from:2010,until:2015,due:5,past:this.dateDiff(2015),scrolled:!1},{title:"Electron JS",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/256px-Electron_Software_Framework_Logo.svg.png",url:"https://www.electronjs.org/",from:2018,until:2020,due:2,past:this.dateDiff(2020),scrolled:!1}]},{sub:"Platform : Mobile",scrolled:!1,values:[{title:"Ionic / Capacitor",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ionic-logo-landscape.svg/1200px-Ionic-logo-landscape.svg.png",url:"https://ionicframework.com/",from:2020,until:2023,due:3,past:this.dateDiff(2023),scrolled:!1}]},{sub:"BackEnd",scrolled:!1,values:[{title:"ASP.Net@4.2",img:"https://sbr-technologies.com/wp-content/uploads/2021/06/asp-net-logo.png",url:"https://learn.microsoft.com/id-id/aspnet/overview",from:2014,until:2018,due:4,past:this.dateDiff(2018),scrolled:!1},{title:"Express JS",img:"https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",url:"https://expressjs.com/",from:2018,until:new Date().getFullYear(),due:this.dateDiff(2018,1,1),past:this.dateDiff(),scrolled:!1}]},{sub:"FrontEnd",scrolled:!1,values:[{title:"HTML5",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",url:"https://developer.mozilla.org/en-US/docs/Glossary/HTML5",from:2019,until:new Date().getFullYear(),due:this.dateDiff(2019,1,1),past:this.dateDiff(),scrolled:!1},{title:"JQuery",img:"https://miro.medium.com/v2/resize:fit:860/0*eFomJUFua8tuqe8g.png",url:"https://jquery.com/",from:2018,until:new Date().getFullYear(),due:this.dateDiff(2018,1,1),past:this.dateDiff(),scrolled:!1},{title:"AngularJS",img:"https://www.tlimsweb.com/wp-content/uploads/2017/01/AngularJS-LOGO.png",url:"https://angularjs.org/",from:2018,until:2021,due:3,past:this.dateDiff(2021),scrolled:!1},{title:"Angular",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",url:"https://angular.dev/",from:2021,until:new Date().getFullYear(),due:this.dateDiff(2021,1,1),past:this.dateDiff(),scrolled:!1}]},{sub:"Scripting | Coding",scrolled:!1,values:[{title:"Visual Basic",img:"https://lms.syam-ok.unm.ac.id/pluginfile.php/860953/course/overviewfiles/visual-basic-net.jpg",url:"https://learn.microsoft.com/en-us/visualstudio/get-started/visual-basic/?view=vs-2022",from:2010,until:2011,due:1,past:this.dateDiff(2011),scrolled:!1},{title:"C#",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/800px-C_Sharp_Logo_2023.svg.png",url:"https://learn.microsoft.com/en-us/dotnet/csharp/",from:2011,until:2018,due:7,past:this.dateDiff(2018),scrolled:!1},{title:"Google Script App",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/800px-Google_Apps_Script.svg.png",url:"https://www.google.com/script/start/",from:2014,until:new Date().getFullYear(),due:this.dateDiff(2016,1,1),past:this.dateDiff(),scrolled:!1},{title:"Javascript",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",url:"https://www.javascript.com/",from:2017,until:new Date().getFullYear(),due:this.dateDiff(2017,1,1),past:this.dateDiff(),scrolled:!1},{title:"Typescript",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",url:"https://www.typescriptlang.org/",from:2021,until:new Date().getFullYear(),due:this.dateDiff(2021,1,1),past:this.dateDiff(),scrolled:!1}]},{sub:"Styles",scrolled:!1,values:[{title:"CSS3",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",url:"https://en.wikipedia.org/wiki/CSS",until:new Date().getFullYear(),from:2017,due:this.dateDiff(2017,1,1),past:this.dateDiff(),scrolled:!1},{title:"Sass",img:"https://sass-lang.com/assets/img/logos/logo.svg",url:"https://sass-lang.com/",until:new Date().getFullYear(),from:2023,due:this.dateDiff(2023,1,1),past:this.dateDiff(),scrolled:!1},{title:"Bootstrap",img:"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",url:"https://getbootstrap.com/docs/5.3/getting-started/introduction/",until:new Date().getFullYear(),from:2019,due:this.dateDiff(2019,1,1),past:this.dateDiff(),scrolled:!1}]}]}dateDiff(l=new Date().getFullYear(),n=1,m=1){let k=new Date(l,n-1,m),u=new Date().getTime()-k.getTime(),_=Math.round(u/(1e3*3600*24));return Number((_/360).toFixed(1))}ngOnInit(){this.app.onScroll.subscribe(l=>{this.el.nativeElement.querySelectorAll(".title").forEach((u,_)=>{let v=this.skills[_],q=this.app.navigator.visibleOnScroll(u,l,.2);v.scrolled=q,u.parentElement.querySelectorAll(".data").forEach((H,P)=>{let X=v.values[P],Q=this.app.navigator.visibleOnScroll(H,l,.2);X.scrolled=Q})})})}};i.\u0275fac=function(n){return new(n||i)(S(B),S(x))},i.\u0275cmp=D({type:i,selectors:[["app-skills"]],standalone:!0,features:[I],decls:7,vars:2,consts:[["skill",""],[1,"mb-3","p-3","rounded","bg-black","bg-opacity-75"],[1,"section-title"],[1,"list-group"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"list-group-item","border-0","mb-3","rounded","bg-transparent","anim-left"],[1,"title"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"list-group-item","data","anim-left",3,"ngClass"],[1,"row","gap-2","align-items-baseline"],["target","_blank","tabindex","-1",1,"col","col-md-2",3,"href"],["loading","lazy",1,"img-thumbnail","rounded","border-0","icon-img","bg-transparent",3,"srcset","alt"],[1,"col-8","col-md-3"],["target","_blank","rel","noopener","tabindex","-1",1,"link-offset-3",3,"href","title"],[1,"col-8","col-md-5"],[1,"col","col-md","text-end"],[1,"badge","text-bg-success",3,"ngClass"],[4,"ngIf"]],template:function(n,m){n&1&&(r(0,"section",1)(1,"h2",2),p(2,"Skills"),o(),r(3,"ul",3),g(4,W,7,4,"ng-container",4),o(),g(5,et,15,21,"ng-template",null,0,A),o()),n&2&&(a(4),s("ngForOf",m.skills)("ngForTrackBy",m.app.tracker))},dependencies:[N,j,L,J,z],styles:[".icon-img[_ngcontent-%COMP%]{--sz: 70px;width:var(--sz);height:var(--sz);object-fit:contain}"],data:{animation:[G("fadeX",U(1e3,"left",.15))]}});let e=i;return e})();export{rt as a};
