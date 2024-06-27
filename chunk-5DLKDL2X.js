import{m as A}from"./chunk-UHD3QEGW.js";import{$a as v,Bb as T,Ea as w,Ia as a,Ja as b,Ua as d,Wa as s,Wb as I,Xb as Y,Yb as M,Z as _,Za as l,_a as n,ab as m,bb as g,bc as O,cb as k,dc as j,fb as f,ib as c,nb as D,ob as r,pb as S,qb as h,rb as x,tb as C,vb as y,wb as F,xb as E}from"./chunk-B23K2YXN.js";var N=e=>({arr:e}),G=(e,i)=>({"fst-italic text-muted bg-body-tertiary":e,"text-light bg-body-secondary":i}),B=(e,i,t)=>({"text-bg-danger":e,"text-bg-warning":i,"text-bg-success":t});function U(e,i){if(e&1&&(m(0),k(1,6),g()),e&2){let t=i.$implicit;f(2);let o=D(6);a(),s("ngTemplateOutlet",o)("ngTemplateOutletContext",y(2,N,t))}}function H(e,i){if(e&1&&(m(0),l(1,"li",5)(2,"h3"),r(3),n(),l(4,"ul",3),m(5),d(6,U,2,4,"ng-container",4),g(),n()(),g()),e&2){let t=i.$implicit,o=f();a(3),S(t.sub),a(3),s("ngForOf",t.values)("ngForTrackBy",o.app.tracker)}}function P(e,i){if(e&1&&(m(0),r(1),g()),e&2){let t=f().arr;a(),h(" ",t.past," Years Ago ")}}function q(e,i){e&1&&(m(0),r(1," Current "),g())}function Q(e,i){if(e&1&&(l(0,"li",7)(1,"div",8)(2,"a",9),v(3,"img",10),n(),l(4,"div",11)(5,"a",12),r(6),n()(),l(7,"div",13)(8,"b"),r(9),n(),r(10),n(),l(11,"div",14)(12,"div",15),d(13,P,2,1,"ng-container",16)(14,q,2,0,"ng-container",16),n()()()()),e&2){let t=i.arr;s("ngClass",F(13,G,t.past>=2,t.past<2)),a(2),c("href",t.img,w),a(),c("srcset",t.img),c("alt",t.title),a(2),c("href",t.url,w),s("title",t.title),a(),h(" ",t.title," "),a(3),x("",t.from," - ",t.until,""),a(),h(" (",t.due," Years of Experience) "),a(2),s("ngClass",E(16,B,t.past>=2,t.past>1&&t.past<2,t.past<=1)),a(),s("ngIf",t.past>1),a(),s("ngIf",t.past<=1)}}var X=(()=>{let i=class i{constructor(o){this.app=o,this.skills=[{sub:"Databases",values:[{title:"MySQL",img:"https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png",url:"https://www.mysql.com/",from:2012,until:2016,due:4,past:this.dateDiff(2016)},{title:"Google Sheets",img:"https://assets-global.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d61_646e04919c3fa7c2380ae837_Google_Sheets_logo_(2014-2020).svg.png",url:"https://www.google.com/sheets/about/",from:2012,until:new Date().getFullYear(),due:this.dateDiff(2012,1,1),past:this.dateDiff()},{title:"JSON Database",img:"https://i0.wp.com/dbaontap.com/wp-content/uploads/2015/11/json-logo.png?ssl=1",url:"https://www.mongodb.com/",from:2017,until:new Date().getFullYear(),due:this.dateDiff(2017,1,1),past:this.dateDiff()}]},{sub:"Platform : Desktop",values:[{title:".Net 3.5+",img:"https://winaero.com/blog/wp-content/uploads/2018/06/net-framework-icon.png",url:"https://dotnet.microsoft.com/en-us/download/dotnet-framework/net35-sp1",from:2010,until:2015,due:5,past:this.dateDiff(2015)},{title:"Electron JS",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/256px-Electron_Software_Framework_Logo.svg.png",url:"https://www.electronjs.org/",from:2018,until:2020,due:2,past:this.dateDiff(2020)}]},{sub:"Platform : Mobile",values:[{title:"Ionic / Capacitor",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ionic-logo-landscape.svg/1200px-Ionic-logo-landscape.svg.png",url:"https://ionicframework.com/",from:2020,until:2023,due:3,past:this.dateDiff(2023)}]},{sub:"BackEnd",values:[{title:"ASP.Net@4.2",img:"https://sbr-technologies.com/wp-content/uploads/2021/06/asp-net-logo.png",url:"https://learn.microsoft.com/id-id/aspnet/overview",from:2014,until:2018,due:4,past:this.dateDiff(2018)},{title:"Express JS",img:"https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",url:"https://expressjs.com/",from:2018,until:new Date().getFullYear(),due:this.dateDiff(2018,1,1),past:this.dateDiff()}]},{sub:"FrontEnd",values:[{title:"HTML5",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",url:"https://developer.mozilla.org/en-US/docs/Glossary/HTML5",from:2019,until:new Date().getFullYear(),due:this.dateDiff(2019,1,1),past:this.dateDiff()},{title:"JQuery",img:"https://miro.medium.com/v2/resize:fit:860/0*eFomJUFua8tuqe8g.png",url:"https://jquery.com/",from:2018,until:new Date().getFullYear(),due:this.dateDiff(2018,1,1),past:this.dateDiff()},{title:"AngularJS",img:"https://www.tlimsweb.com/wp-content/uploads/2017/01/AngularJS-LOGO.png",url:"https://angularjs.org/",from:2018,until:2021,due:3,past:this.dateDiff()},{title:"Angular 17+",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",url:"https://angular.dev/",from:2021,until:new Date().getFullYear(),due:this.dateDiff(2021,1,1),past:this.dateDiff()}]},{sub:"Scripting | Coding",values:[{title:"Visual Basic",img:"https://lms.syam-ok.unm.ac.id/pluginfile.php/860953/course/overviewfiles/visual-basic-net.jpg",url:"https://learn.microsoft.com/en-us/visualstudio/get-started/visual-basic/?view=vs-2022",from:2010,until:2011,due:1,past:this.dateDiff(2011)},{title:"C#",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/800px-C_Sharp_Logo_2023.svg.png",url:"https://learn.microsoft.com/en-us/dotnet/csharp/",from:2011,until:2018,due:7,past:this.dateDiff(2018)},{title:"Google Script App",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/800px-Google_Apps_Script.svg.png",url:"https://www.google.com/script/start/",from:2014,until:new Date().getFullYear(),due:this.dateDiff(2016,1,1),past:this.dateDiff()},{title:"Javascript",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",url:"https://www.javascript.com/",from:2017,until:new Date().getFullYear(),due:this.dateDiff(2017,1,1),past:this.dateDiff()},{title:"Typescript",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",url:"https://www.typescriptlang.org/",from:2021,until:new Date().getFullYear(),due:this.dateDiff(2021,1,1),past:this.dateDiff()}]},{sub:"Styles",values:[{title:"CSS3",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",url:"https://en.wikipedia.org/wiki/CSS",until:new Date().getFullYear(),from:2017,due:this.dateDiff(2017,1,1),past:this.dateDiff()},{title:"Sass",img:"https://sass-lang.com/assets/img/logos/logo.svg",url:"https://sass-lang.com/",until:new Date().getFullYear(),from:2023,due:this.dateDiff(2023,1,1),past:this.dateDiff()},{title:"Bootstrap",img:"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",url:"https://getbootstrap.com/docs/5.3/getting-started/introduction/",until:new Date().getFullYear(),from:2019,due:this.dateDiff(2019,1,1),past:this.dateDiff()}]}]}dateDiff(o=new Date().getFullYear(),p=1,u=1){let L=new Date(o,p-1,u),J=new Date().getTime()-L.getTime(),z=Math.round(J/(1e3*3600*24));return Number((z/360).toFixed(1))}};i.\u0275fac=function(p){return new(p||i)(b(A))},i.\u0275cmp=_({type:i,selectors:[["app-skills"]],standalone:!0,features:[C],decls:7,vars:2,consts:[["skill",""],[1,"mb-3","p-3","rounded","bg-black","bg-opacity-75"],[1,"section-title"],[1,"list-group"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"list-group-item","border-0","mb-3","rounded","bg-transparent","anim-left"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"list-group-item","anim-left",3,"ngClass"],[1,"row","gap-2","align-items-baseline"],["target","_blank","tabindex","-1",1,"col","col-md-2",3,"href"],["loading","lazy",1,"img-thumbnail","rounded","border-0","icon-img","bg-transparent",3,"srcset","alt"],[1,"col-8","col-md-3"],["target","_blank","rel","noopener","tabindex","-1",1,"link-offset-3",3,"href","title"],[1,"col-8","col-md-5"],[1,"col","col-md","text-end"],[1,"badge","text-bg-success",3,"ngClass"],[4,"ngIf"]],template:function(p,u){p&1&&(l(0,"section",1)(1,"h2",2),r(2,"Skills"),n(),l(3,"ul",3),d(4,H,7,3,"ng-container",4),n(),d(5,Q,15,20,"ng-template",null,0,T),n()),p&2&&(a(4),s("ngForOf",u.skills)("ngForTrackBy",u.app.tracker))},dependencies:[j,I,Y,M,O],styles:[".icon-img[_ngcontent-%COMP%]{--sz: 70px;width:var(--sz);height:var(--sz);object-fit:contain}"]});let e=i;return e})();export{X as a};
