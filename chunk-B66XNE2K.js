import{A as O,B as l,C as P,D as m,E as Y,G as w,I as x,J,K as L,L as F,M as T,N,P as S,Q as b,R as D,S as j,T as B,U as y,aa as k,c as h,g as E,j as a,k as v,l as c,m as s,q as r,r as o,s as I,t as g,u,v as A,y as d,z as _}from"./chunk-Q2WN7XK2.js";var U=t=>({"fw-bold":t});function W(t,n){if(t&1&&(g(0),l(1),u()),t&2){let e=d().$implicit,i=d();a(),m(" ",i.renderDate(e.dateEnd)," ")}}function H(t,n){if(t&1&&(g(0),l(1),F(2,"date"),u()),t&2){let e=d().$implicit,i=d();a(),m(" ",T(2,1,i.renderDate(e.dateEnd),"yyyy MMMM")," ")}}function q(t,n){if(t&1&&(g(0),r(1,"div",11),l(2),o(),u()),t&2){let e=n.$implicit;a(2),m(" ",e," ")}}function R(t,n){if(t&1&&(r(0,"div")(1,"div",6)(2,"div",7),l(3,"Tools"),o(),r(4,"div",8),c(5,q,3,1,"ng-container",3),o()()()),t&2){let e=d().$implicit,i=d();a(5),s("ngForOf",e.tools)("ngForTrackBy",i.app.tracker)}}function V(t,n){if(t&1&&(g(0),r(1,"div",4)(2,"h3",5),l(3),o(),r(4,"div")(5,"div",6)(6,"div",7),l(7,"Start"),o(),r(8,"div",8),l(9),F(10,"date"),o()(),r(11,"div",6)(12,"div",7),l(13,"End"),o(),r(14,"div",9),c(15,W,2,1,"ng-container",10)(16,H,3,4,"ng-container",10),r(17,"span"),l(18),o()()()(),r(19,"div")(20,"div",6)(21,"div",7),l(22,"Last Role"),o(),r(23,"div",8),l(24),o()()(),c(25,R,6,2,"div",10),o(),u()),t&2){let e=n.$implicit,i=d();a(3),m(" ",e.company," "),a(6),m(" ",T(10,8,e.dateStart,"yyyy MMMM")," "),a(5),s("ngClass",x(11,U,i.getType(i.renderDate(e.dateEnd))=="string")),a(),s("ngIf",i.getType(i.renderDate(e.dateEnd))=="string"),a(),s("ngIf",i.getType(i.renderDate(e.dateEnd))!="string"),a(2),m(" (",i.dateDiff(e.dateStart,e.dateEnd)," years of experience) "),a(6),m(" ",e.lastPosition," "),a(),s("ngIf",e.tools!=null)}}var lt=(()=>{let n=class n{constructor(i){this.app=i,this.works=[{company:"PT Matahari Studio",dateStart:new Date(2003,10,1),dateEnd:new Date(2004,7,1),lastPosition:"3D Modeller",tools:["3DSMax"]},{company:"PT Polaris Advertising",dateStart:new Date(2004,10,1),dateEnd:new Date(2005,4,1),lastPosition:"3D Animator",tools:["3DSMax","Adobe Photoshop"]},{company:"PT Merangkai Artha Nusantara",dateStart:new Date(2006,3,1),dateEnd:new Date(2012,11,1),lastPosition:"Software Engineer",tools:["MS Access","MS Excel","SQL Server","Visual Basic","C#"]},{company:"PT Sawit Mas Nusantara",dateStart:new Date(2013,0,1),dateEnd:new Date,lastPosition:"System & Software Engineer",tools:["MySQL","Google Sheets","Google Script App","JQuery","Angular JS","Electron JS","Express JS","Ionic/Capacitor"]}]}dateDiff(i,p=new Date){let f=p.getTime()-i.getTime(),C=Math.round(f/(1e3*3600*24));return Number((C/360).toFixed(1))}renderDate(i){return i.toDateString()!=new Date().toDateString()?i:"Current"}getType(i){return typeof i}};n.\u0275fac=function(p){return new(p||n)(v(k))},n.\u0275cmp=h({type:n,selectors:[["app-works"]],standalone:!0,features:[w],decls:5,vars:2,consts:[[1,"mb-3","bg-black","p-3","rounded","bg-opacity-75"],[1,"section-title"],[1,"gap-3","justify-content-center","border"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-3","border-bottom","bg-body-tertiary","anim-left"],[1,"d-inline-block","pb-2","border-bottom","border-warning","border-2"],[1,"row"],[1,"col-2","col-md-1"],[1,"col"],[1,"col",3,"ngClass"],[4,"ngIf"],[1,"badge","bg-warning","bg-opacity-25","text-light","m-1"]],template:function(p,f){p&1&&(r(0,"section",0)(1,"h1",1),l(2,"Recent Works"),o(),r(3,"div",2),c(4,V,26,13,"ng-container",3),o()()),p&2&&(a(4),s("ngForOf",f.works)("ngForTrackBy",f.app.tracker))},dependencies:[y,S,b,D,B]});let t=n;return t})();var K=t=>({arr:t}),X=(t,n)=>({"fst-italic text-muted bg-body-tertiary":t,"text-light bg-body-secondary":n}),Z=(t,n,e)=>({"text-bg-danger":t,"text-bg-warning":n,"text-bg-success":e});function tt(t,n){if(t&1&&(g(0),A(1,6),u()),t&2){let e=n.$implicit;d(2);let i=O(6);a(),s("ngTemplateOutlet",i)("ngTemplateOutletContext",x(2,K,e))}}function et(t,n){if(t&1&&(g(0),r(1,"li",5)(2,"h5"),l(3),o(),r(4,"ul",3),c(5,tt,2,4,"ng-container",4),o()(),u()),t&2){let e=n.$implicit,i=d();a(3),P(e.sub),a(2),s("ngForOf",e.values)("ngForTrackBy",i.app.tracker)}}function it(t,n){if(t&1&&(g(0),l(1),u()),t&2){let e=d().arr;a(),m(" ",e.past," Years Ago ")}}function nt(t,n){t&1&&(g(0),l(1," Current "),u())}function at(t,n){if(t&1&&(r(0,"li",7)(1,"div",8)(2,"a",9),I(3,"img",10),o(),r(4,"div",11)(5,"a",12),l(6),o()(),r(7,"div",13)(8,"b"),l(9),o(),l(10),o(),r(11,"div",14)(12,"div",15),c(13,it,2,1,"ng-container",16)(14,nt,2,0,"ng-container",16),o()()()()),t&2){let e=n.arr;s("ngClass",J(12,X,e.past>=2,e.past<2)),a(2),_("href",e.img,E),a(),_("srcset",e.img),_("alt",e.title),a(2),_("href",e.url,E),a(),m(" ",e.title," "),a(3),Y("",e.from," - ",e.until,""),a(),m(" (",e.due," Years Experience) "),a(2),s("ngClass",L(15,Z,e.past>=2,e.past>1&&e.past<2,e.past<=1)),a(),s("ngIf",e.past>1),a(),s("ngIf",e.past<=1)}}var dt=(()=>{let n=class n{constructor(i){this.app=i,this.skills=[{sub:"Databases",values:[{title:"MySQL",img:"https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png",url:"https://www.mysql.com/",from:2012,until:2016,due:4,past:this.dateDiff(2016)},{title:"Google Sheets",img:"https://assets-global.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d61_646e04919c3fa7c2380ae837_Google_Sheets_logo_(2014-2020).svg.png",url:"https://www.google.com/sheets/about/",from:2012,until:new Date().getFullYear(),due:this.dateDiff(2012,1,1),past:this.dateDiff()},{title:"JSON Database",img:"https://i0.wp.com/dbaontap.com/wp-content/uploads/2015/11/json-logo.png?ssl=1",url:"https://www.mongodb.com/",from:2017,until:new Date().getFullYear(),due:this.dateDiff(2017,1,1),past:this.dateDiff()}]},{sub:"Platform : Desktop",values:[{title:".Net 3.5+",img:"https://winaero.com/blog/wp-content/uploads/2018/06/net-framework-icon.png",url:"https://dotnet.microsoft.com/en-us/download/dotnet-framework/net35-sp1",from:2010,until:2015,due:5,past:this.dateDiff(2015)},{title:"Electron JS",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/256px-Electron_Software_Framework_Logo.svg.png",url:"https://www.electronjs.org/",from:2018,until:2020,due:2,past:this.dateDiff(2020)}]},{sub:"Platform : Mobile",values:[{title:"Ionic / Capacitor",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ionic-logo-landscape.svg/1200px-Ionic-logo-landscape.svg.png",url:"https://ionicframework.com/",from:2020,until:2023,due:3,past:this.dateDiff(2023)}]},{sub:"BackEnd",values:[{title:"ASP.Net@4.2",img:"https://sbr-technologies.com/wp-content/uploads/2021/06/asp-net-logo.png",url:"https://learn.microsoft.com/id-id/aspnet/overview",from:2014,until:2018,due:4,past:this.dateDiff(2018)},{title:"Express JS",img:"https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",url:"https://expressjs.com/",from:2018,until:new Date().getFullYear(),due:this.dateDiff(2018,1,1),past:this.dateDiff()}]},{sub:"FrontEnd",values:[{title:"HTML5",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",url:"https://developer.mozilla.org/en-US/docs/Glossary/HTML5",from:2019,until:new Date().getFullYear(),due:this.dateDiff(2019,1,1),past:this.dateDiff()},{title:"JQuery",img:"https://miro.medium.com/v2/resize:fit:860/0*eFomJUFua8tuqe8g.png",url:"https://jquery.com/",from:2018,until:new Date().getFullYear(),due:this.dateDiff(2018,1,1),past:this.dateDiff()},{title:"AngularJS@1.8.2",img:"https://www.tlimsweb.com/wp-content/uploads/2017/01/AngularJS-LOGO.png",url:"https://angularjs.org/",from:2019,until:new Date().getFullYear(),due:this.dateDiff(2019,1,1),past:this.dateDiff()},{title:"Angular@17.8.3",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",url:"https://angular.dev/",from:2021,until:new Date().getFullYear(),due:this.dateDiff(2021,1,1),past:this.dateDiff()}]},{sub:"Scripting | Coding",values:[{title:"Visual Basic",img:"https://lms.syam-ok.unm.ac.id/pluginfile.php/860953/course/overviewfiles/visual-basic-net.jpg",url:"https://learn.microsoft.com/en-us/visualstudio/get-started/visual-basic/?view=vs-2022",from:2010,until:2011,due:1,past:this.dateDiff(2011)},{title:"C#",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/800px-C_Sharp_Logo_2023.svg.png",url:"https://learn.microsoft.com/en-us/dotnet/csharp/",from:2011,until:2018,due:7,past:this.dateDiff(2018)},{title:"Google Script App",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/800px-Google_Apps_Script.svg.png",url:"https://www.google.com/script/start/",from:2014,until:new Date().getFullYear(),due:this.dateDiff(2016,1,1),past:this.dateDiff()},{title:"Javascript",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",url:"https://www.javascript.com/",from:2017,until:new Date().getFullYear(),due:this.dateDiff(2017,1,1),past:this.dateDiff()},{title:"Typescript",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",url:"https://www.typescriptlang.org/",from:2021,until:new Date().getFullYear(),due:this.dateDiff(2021,1,1),past:this.dateDiff()}]},{sub:"Styles",values:[{title:"CSS3",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",url:"https://en.wikipedia.org/wiki/CSS",until:new Date().getFullYear(),from:2017,due:this.dateDiff(2017,1,1),past:this.dateDiff()},{title:"Sass",img:"https://sass-lang.com/assets/img/logos/logo.svg",url:"https://sass-lang.com/",until:new Date().getFullYear(),from:2023,due:this.dateDiff(2023,1,1),past:this.dateDiff()},{title:"Bootstrap",img:"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",url:"https://getbootstrap.com/docs/5.3/getting-started/introduction/",until:new Date().getFullYear(),from:2019,due:this.dateDiff(2019,1,1),past:this.dateDiff()}]}]}dateDiff(i=new Date().getFullYear(),p=1,f=1){let C=new Date(i,p-1,f),M=new Date().getTime()-C.getTime(),G=Math.round(M/(1e3*3600*24));return Number((G/360).toFixed(1))}};n.\u0275fac=function(p){return new(p||n)(v(k))},n.\u0275cmp=h({type:n,selectors:[["app-skills"]],standalone:!0,features:[w],decls:7,vars:2,consts:[["skill",""],[1,"mb-3","p-3","rounded","bg-black","bg-opacity-75"],[1,"section-title"],[1,"list-group"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"list-group-item","border-0","mb-3","rounded","bg-transparent","anim-left"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"list-group-item","anim-left",3,"ngClass"],[1,"row","gap-2","align-items-baseline"],["tabindex","-1",1,"col","col-md-2",3,"href"],["loading","lazy",1,"img-thumbnail","rounded","border-0","icon-img","bg-transparent",3,"srcset","alt"],[1,"col-8","col-md-3"],["tabindex","-1",1,"link-offset-3",3,"href"],[1,"col-8","col-md-5"],[1,"col","col-md","text-end"],[1,"badge","text-bg-success",3,"ngClass"],[4,"ngIf"]],template:function(p,f){p&1&&(r(0,"section",1)(1,"h1",2),l(2,"Skills"),o(),r(3,"ul",3),c(4,et,6,3,"ng-container",4),o(),c(5,at,15,19,"ng-template",null,0,N),o()),p&2&&(a(4),s("ngForOf",f.skills)("ngForTrackBy",f.app.tracker))},dependencies:[y,S,b,D,j],styles:[".icon-img[_ngcontent-%COMP%]{--sz: 70px;width:var(--sz);height:var(--sz);object-fit:contain}"]});let t=n;return t})();export{lt as a,dt as b};
