import{g as A,h as P}from"./chunk-7CCFAIAN.js";import{Hb as F,Ia as p,Ja as l,Jb as b,Kb as T,Lb as E,Ma as n,Na as r,Oa as C,Pa as g,Qa as s,Qb as w,R as x,Ua as d,bb as a,cb as _,db as u,gb as y,ua as v,va as h,ya as o,za as f}from"./chunk-YPYCD2D2.js";function k(e,t){if(e&1&&C(0,"p",15),e&2){let i=t.$implicit;l("innerHTML",i,v)}}function I(e,t){if(e&1&&(g(0),n(1,"span"),a(2),r(),s()),e&2){let i=d().$implicit;o(2),_(i.name)}}function B(e,t){if(e&1&&(g(0),n(1,"a",19),a(2),r(),s()),e&2){let i=d().$implicit;o(),l("href",i.url?i.url:null,h),o(),u(" ",i.name," ")}}function O(e,t){if(e&1&&(g(0)(1,16),p(2,I,3,1,"ng-container",17)(3,B,3,2,"ng-container",18),s(),n(4,"span"),a(5,","),r(),s()),e&2){let i=t.$implicit;o(),l("ngSwitch",!i.url),o(),l("ngSwitchCase",!0)}}function M(e,t){if(e&1&&(n(0,"li",7)(1,"article")(2,"div",8)(3,"h5",9),a(4),r(),n(5,"small",10),a(6," 3 days ago "),r()(),n(7,"div",11),p(8,k,1,1,"p",12),n(9,"i")(10,"small",13),a(11," Third-Party Scripts : "),p(12,O,6,2,"ng-container",14),r()()()()()),e&2){let i=t.$implicit,m=d(2);o(4),_(i.name),o(4),l("ngForOf",i.detail),o(4),l("ngForOf",i.related)("ngForTrackBy",m.app.tracker)}}function D(e,t){if(e&1&&(n(0,"li",4)(1,"h2",5),a(2),r(),n(3,"ul",2),p(4,M,13,4,"li",6),r()()),e&2){let i=t.$implicit,m=d();o(2),u(" ",i.group," "),o(2),l("ngForOf",i.items)("ngForTrackBy",m.app.tracker)}}var L=(()=>{let t=class t{constructor(m,c){this.navigator=m,this.app=c,this.list=[{group:"Device Access",items:[{name:"Camera",detail:["Used for <i>Photo/Selfie App</i> and even as a <b>Product Barcode Scanner</b>.","Please allow any notification to use camera for testing camera device."],related:[{name:"Self"},{name:"html5-qrcode",url:"https://qrcode.minhazav.dev/"}]},{name:"Location"},{name:"Printer Port",related:[{name:"Print PDF",url:"https://printjs.crabbly.com/"}]},{name:"Serial Port (RS232)",related:[{name:"Node SerialPort (server/app)",url:"https://serialport.io/"}]},{name:"USB"}]},{group:"Google APIS",items:[{name:"Authorize"},{name:"Google Sheets"},{name:"Google Maps"}]},{group:"Facebook User",items:[{name:"Authorize"}]}],m.initBootstrap(!0,!1)}};t.\u0275fac=function(c){return new(c||t)(f(A),f(P))},t.\u0275cmp=x({type:t,selectors:[["app-apis"]],standalone:!0,features:[y],decls:17,vars:2,consts:[[1,"bg-body"],[1,"container"],[1,"list-group"],["class","list-group-item border-0 bg-transparent ",4,"ngFor","ngForOf","ngForTrackBy"],[1,"list-group-item","border-0","bg-transparent"],[1,"section-title"],["class","list-group-item list-group-item-action flex-column align-items-start",4,"ngFor","ngForOf","ngForTrackBy"],[1,"list-group-item","list-group-item-action","flex-column","align-items-start"],[1,"d-flex","w-100","justify-content-between"],[1,"mb-1"],[1,"d-none"],[1,"ms-2"],["class","mb-1",3,"innerHTML",4,"ngFor","ngForOf"],[1,"text-muted"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb-1",3,"innerHTML"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["target","_blank","rel","noopener nofollow",1,"link-offset-2",3,"href"]],template:function(c,S){c&1&&(n(0,"section",0)(1,"div",1)(2,"div")(3,"h1"),a(4,"(WIP) My API's"),r(),n(5,"article")(6,"p"),a(7," Below is a collection of "),n(8,"strong"),a(9," API's "),n(10,"i")(11,"em"),a(12," (Application Programming Interface) "),r()()(),a(13," that I have worked on before. "),r()()(),n(14,"div")(15,"ul",2),p(16,D,5,3,"li",3),r()()()()),c&2&&(o(16),l("ngForOf",S.list)("ngForTrackBy",S.app.tracker))},dependencies:[w,F,b,T,E]});let e=t;return e})();export{L as ApisComponent};
