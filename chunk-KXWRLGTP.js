import{b as L,c as O,d as M,e as B,s as N}from"./chunk-KRURZHYN.js";import"./chunk-PCDOS7DP.js";import{$a as i,Ea as x,Fa as y,Ja as o,Ka as _,Wa as p,Ya as l,Z as C,ab as r,bb as g,bc as k,cb as f,cc as A,db as u,dc as I,ec as E,fc as P,gb as T,hb as c,kc as w,pc as H,rb as a,sb as S,tb as h,wb as b,yb as F}from"./chunk-BBICLZFX.js";var $=e=>[e];function j(e,n){if(e&1&&g(0,"p",18),e&2){let t=n.$implicit;l("innerHTML",t,x)}}function D(e,n){if(e&1&&(i(0,"div"),g(1,"br"),i(2,"span"),a(3,"API Test :"),r(),a(4," \xA0 "),g(5,"a",19),r()),e&2){let t=c().$implicit,m=c(3);o(5),l("routerLink",F(4,$,t.routerLink))("relativeTo",m.active)("title",t.name)("innerHTML",t.name,x)}}function z(e,n){if(e&1&&(f(0),i(1,"span"),a(2),r(),u()),e&2){let t=c().$implicit;o(2),S(t.name)}}function R(e,n){if(e&1&&(f(0),i(1,"a",23),a(2),r(),u()),e&2){let t=c().$implicit;o(),l("href",t.url?t.url:null,y),o(),h(" ",t.name," ")}}function U(e,n){if(e&1&&(f(0)(1,20),p(2,z,3,1,"ng-container",21)(3,R,3,2,"ng-container",22),u(),i(4,"span"),a(5,","),r(),u()),e&2){let t=n.$implicit;o(),l("ngSwitch",!t.url),o(),l("ngSwitchCase",!0)}}function G(e,n){if(e&1&&(i(0,"li",9)(1,"article")(2,"div",10)(3,"h3",11),a(4),r(),i(5,"small",12),a(6," 3 days ago "),r()(),i(7,"div",13),p(8,j,1,1,"p",14)(9,D,6,6,"div",15),i(10,"i")(11,"small",16),a(12," Third-Party Scripts : "),p(13,U,6,2,"ng-container",17),r()()()()()),e&2){let t=n.$implicit,m=c(3);o(4),S(t.name),o(4),l("ngForOf",t.detail),o(),l("ngIf",t.routerLink!=null),o(4),l("ngForOf",t.related)("ngForTrackBy",m.app.tracker)}}function q(e,n){if(e&1&&(i(0,"li",6)(1,"h2",7),a(2),r(),i(3,"ul",4),p(4,G,14,5,"li",8),r()()),e&2){let t=n.$implicit,m=c(2);o(2),h(" ",t.group," "),o(2),l("ngForOf",t.items)("ngForTrackBy",m.app.tracker)}}function W(e,n){if(e&1&&(i(0,"div",3)(1,"div")(2,"h1"),a(3,"(WIP) My API's"),r(),i(4,"article")(5,"p"),a(6," Below is a collection of "),i(7,"strong"),a(8," API's "),i(9,"i")(10,"em"),a(11," (Application Programming Interface) "),r()()(),a(12," that I have worked on before. "),r()()(),i(13,"div")(14,"ul",4),p(15,q,5,3,"li",5),r()()()),e&2){let t=c();o(15),l("ngForOf",t.list)("ngForTrackBy",t.app.tracker)}}var J=[{group:"Web Components",items:[{name:"Typing Effects",detail:["Self made keyboard typing effect."],routerLink:"fx-type"}]},{group:"Device Access",items:[{name:"Camera",detail:["Used for <i>Photo/Selfie App</i> and even as a <b>Product Barcode Scanner</b>.","Please allow any notification to use camera for testing camera device."],routerLink:"camera",related:[{name:"Self"},{name:"html5-qrcode",url:"https://qrcode.minhazav.dev/"}]},{name:"Location"},{name:"Printer Port",related:[{name:"Print PDF",url:"https://printjs.crabbly.com/"}]},{name:"Serial Port (RS232)",related:[{name:"Node SerialPort (server/app)",url:"https://serialport.io/"}]},{name:"USB"}]},{group:"Google APIS",items:[{name:"Google Sheets",routerLink:"gsheets"},{name:"Google Maps"}]},{group:"Facebook User",items:[{name:"Authorize"}]}],te=(()=>{let n=class n{constructor(m,s,d,v){this.navigator=m,this.router=s,this.active=d,this.app=v,this.list=J}ngOnInit(){let m=this.router.url.substring(1).split("/");this.onTest=m.length>=2}};n.\u0275fac=function(s){return new(s||n)(_(H),_(M),_(L),_(N))},n.\u0275cmp=C({type:n,selectors:[["app-apis"]],standalone:!0,features:[b],decls:3,vars:1,consts:[[1,"bg-body"],["class","container",4,"ngIf"],[3,"activate","deactivate"],[1,"container"],[1,"list-group"],["class","list-group-item border-0 bg-transparent ",4,"ngFor","ngForOf","ngForTrackBy"],[1,"list-group-item","border-0","bg-transparent"],[1,"section-title"],["class","list-group-item list-group-item-action flex-column align-items-start",4,"ngFor","ngForOf","ngForTrackBy"],[1,"list-group-item","list-group-item-action","flex-column","align-items-start"],[1,"d-flex","w-100","justify-content-between"],[1,"mb-1"],[1,"d-none"],[1,"ms-2"],["class","mb-1",3,"innerHTML",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"text-muted"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb-1",3,"innerHTML"],[1,"btn","btn-sm","btn-primary",3,"routerLink","relativeTo","title","innerHTML"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["target","_blank","rel","noopener nofollow",1,"link-offset-2",3,"href"]],template:function(s,d){s&1&&(i(0,"section",0),p(1,W,16,2,"div",1),i(2,"router-outlet",2),T("activate",function(){return d.onTest=!0})("deactivate",function(){return d.onTest=!1}),r()()),s&2&&(o(),l("ngIf",!d.onTest))},dependencies:[w,k,A,I,E,P,B,O]});let e=n;return e})();export{te as ApisComponent};
