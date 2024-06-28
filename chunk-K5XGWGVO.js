import{$a as r,Ja as c,Ka as k,Rb as V,Va as C,Wb as j,Xa as s,Xb as D,Yb as M,Z as S,Zb as O,_a as o,_b as N,ab as d,bb as p,cb as _,d as g,ea as f,eb as x,ec as B,fa as v,fb as b,gb as u,jc as U,la as T,nb as m,ob as I,pb as y,sb as h,xb as F}from"./chunk-7GEQBHU3.js";var P=(t,n,e,a)=>({"bi-mic":t,"bi-mic-mute":n,"bi-camera-video":e,"bi-camera-video-off":a});function q(t,n){if(t&1){let e=x();p(0),o(1,"div",4)(2,"button",5),b("click",function(){f(e);let i=u();return v(i.permit.track())}),m(3," Ask Device Permission "),r()(),_()}}function K(t,n){if(t&1){let e=x();p(0),o(1,"div",11)(2,"button",12),b("click",function(){let i=f(e).$implicit,l=u(3);return v(l.startTrack(i))}),d(3,"i",13),o(4,"span",14),m(5),r()()(),_()}if(t&2){let e=n.$implicit;c(2),s("name",e.id)("title",e.label),c(),s("ngClass",F(4,P,e.kind=="audio"&&!e.muted,e.kind=="audio"&&e.muted,e.kind=="video"&&!e.muted,e.kind=="video"&&e.muted)),c(2),I(e.label)}}function L(t,n){if(t&1){let e=x();p(0),o(1,"div",7)(2,"div",8)(3,"button",9),b("click",function(){f(e);let i=u(2);return v(i.tracks=void 0)}),d(4,"i",10),r()(),C(5,K,6,9,"ng-container",3),r(),_()}if(t&2){let e=u(2);c(5),s("ngForOf",e.tracks)("ngForTrackBy",e.tracker)}}function R(t,n){if(t&1){let e=x();p(0),o(1,"div",15)(2,"div",16),d(3,"video",17),r(),o(4,"div",18)(5,"button",19),b("click",function(){f(e);let i=u(2);return v(i.stopTrack())}),d(6,"i",20),r()()(),_()}if(t&2){let e=u(2);c(3),s("srcObject",e.lastStream)}}function z(t,n){if(t&1&&(p(0),C(1,L,6,2,"ng-container",6)(2,R,7,1,"ng-container",6),_()),t&2){let e=u();c(),s("ngIf",e.lastStream===void 0),c(),s("ngIf",e.lastStream!==void 0)}}function G(t,n){if(t&1&&(p(0),o(1,"div",21)(2,"div",22)(3,"span",23),m(4,"Kind"),r(),o(5,"span",14),m(6),r()(),o(7,"div",22)(8,"span",23),m(9,"Id"),r(),o(10,"span",14),m(11),r()(),o(12,"div",22)(13,"span",23),m(14,"Label"),r(),o(15,"span",14),m(16),r()()(),_()),t&2){let e=n.$implicit;c(6),y(": ",e.kind,""),c(5),y(": ",e.deviceId,""),c(5),y(": ",e.label,"")}}var $=(()=>{let n=class n{constructor(a,i,l){this.document=a,this.nav=i,this.el=l,this.window=this.document.defaultView,this.permit={screen:()=>g(this,null,function*(){this.screenCast=yield this.devices.getDisplayMedia()}),media:()=>g(this,null,function*(){this.media=yield this.devices.enumerateDevices()}),track:()=>g(this,null,function*(){let w=yield this.devices.getUserMedia({video:!0,audio:!0});this.tracks=w.getTracks(),this.tracks.forEach(E=>{E.stop()})})}}ngOnInit(){return g(this,null,function*(){if(!this.nav.isBrowser)return;let a=this.el.nativeElement;this.videoEl=a.querySelector("video"),this.devices=this.window.navigator.mediaDevices})}startTrack(a){return g(this,null,function*(){let i=a.getConstraints(),l=a.getSettings(),w=a.getCapabilities(),E=i.deviceId;this.lastStream=yield this.devices.getUserMedia({video:{deviceId:a.id}})})}stopTrack(){return g(this,null,function*(){this.lastStream.getTracks()[0].stop(),this.lastStream=void 0})}tracker(a,i){return i}};n.\u0275fac=function(i){return new(i||n)(k(V),k(U),k(T))},n.\u0275cmp=S({type:n,selectors:[["api-camera"]],standalone:!0,features:[h],decls:8,vars:5,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"d-none"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"justify-content-center","d-flex"],["type","button","name","permission","title","Ask Device Permission",1,"btn","btn-primary",3,"click"],[4,"ngIf"],[1,"mb-3","row","mx-0","align-items-baseline","justify-content-center"],[1,"col-auto","col-sm-1"],["type","button","name","back","title","back",1,"btn","btn-secondary",3,"click"],[1,"bi","bi-box-arrow-left"],[1,"col-sm-3","col-md-4"],[1,"btn","hover","text-truncate","w-100","rounded-0","border-warning","border-0","border-bottom","border-2",3,"click","name","title"],[1,"bi","me-3",3,"ngClass"],[1,"col"],[1,"position-relative"],[1,"rounded"],["autoplay","","loop","","muted","",3,"srcObject"],[1,"d-flex","justify-content-center"],["type","button","name","stop","title","stop",1,"btn","btn-danger",3,"click"],[1,"bi","bi-stop-fill"],[1,"mb-3"],[1,"row"],[1,"col-1"]],template:function(i,l){i&1&&(d(0,"br"),p(1,0),C(2,q,4,0,"ng-container",1)(3,z,3,2,"ng-container",1),_(),o(4,"div",2)(5,"h1"),m(6,"Media Info :"),r(),C(7,G,17,3,"ng-container",3),r()),i&2&&(c(),s("ngSwitch",l.tracks!=null),c(),s("ngSwitchCase",!1),c(),s("ngSwitchCase",!0),c(4),s("ngForOf",l.media)("ngForTrackBy",l.tracker))},dependencies:[B,j,D,M,O,N]});let t=n;return t})();var Z=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=S({type:n,selectors:[["app-camera"]],standalone:!0,features:[h],decls:2,vars:0,consts:[[1,"d-flex","justify-content-center","align-items-center"]],template:function(i,l){i&1&&(o(0,"div",0),d(1,"api-camera"),r())},dependencies:[$]});let t=n;return t})();export{Z as CameraComponent};
