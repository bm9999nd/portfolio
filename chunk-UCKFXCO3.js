import{t as C,w as O}from"./chunk-2XMUMPYT.js";import"./chunk-4MNFZP5U.js";import{$a as o,Cb as v,Ha as d,Ia as p,Ma as r,Na as f,Za as g,aa as l,db as c,eb as s,fb as h,fc as F,gb as u,hb as y,nc as j}from"./chunk-FTRD6JFR.js";function S(n,t){if(n&1&&(u(0),c(1,"div",3)(2,"a",4),h(3,"img",5)(4,"h4",6),s()(),y()),n&2){let a=t.$implicit;r(2),o("href",a.path,p),r(),o("src",a.data.img,p)("alt",a.title),r(),o("innerHTML",a.title,d)}}var E=(()=>{let t=class t{constructor(e){this.app=e,this.projects=[],e.footerFixed=!1}ngOnInit(){O.filter(e=>e.path?.includes("projects/"))?.forEach(e=>{let i=JSON.parse(JSON.stringify(e));i.path=e.path,this.projects.push(i)})}};t.\u0275fac=function(i){return new(i||t)(f(C))},t.\u0275cmp=l({type:t,selectors:[["app-projects"]],standalone:!0,features:[v],decls:3,vars:2,consts:[[1,"w-100","h-100","d-grid","justify-content-center","align-items-center"],[1,"row"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col"],[1,"btn",3,"href"],["loading","lazy","width","300","height","300",1,"img-thumbnail","border-0","rounded-circle",3,"src","alt"],[1,"p-3",3,"innerHTML"]],template:function(i,m){i&1&&(c(0,"section",0)(1,"div",1),g(2,S,5,4,"ng-container",2),s()()),i&2&&(r(2),o("ngForOf",m.projects)("ngForTrackBy",m.app.tracker))},dependencies:[j,F]});let n=t;return n})();export{E as ProjectsComponent};
