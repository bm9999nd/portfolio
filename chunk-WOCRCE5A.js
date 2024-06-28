import{m as J}from"./chunk-ONV72DY5.js";import{$a as A,Bb as M,Cb as x,Ia as p,Ja as _,Lb as z,R as O,Ua as y,V as S,Wa as m,Xb as B,Yb as L,Z as w,Za as a,Zb as U,_a as s,ab as F,bb as D,cb as C,cc as q,d as I,db as V,ea as g,eb as v,ec as $,fa as f,fb as j,fc as Y,g as E,ka as G,kc as H,la as k,nb as b,ob as l,pb as R,qb as T,tb as K,vb as h,wb as P,zb as N}from"./chunk-E5UOUWHV.js";var Q=(()=>{let i=class i{constructor(e){this.navigator=e,this.eventOnInit=new k,this.eventSignedIn=new k,this.inited={gapi:!1,gis:!1},e.importTag({type:"script",src:"https://apis.google.com/js/api.js",onload:()=>this.onImport("gapi")}),e.importTag({type:"script",src:"https://accounts.google.com/gsi/client",onload:()=>this.onImport("gis")})}get enabled(){return this.inited.gapi&&this.inited.gis}set auth(e){this._auth=e,typeof gapi<"u"&&e.apiKey!=""&&this.onloadGapi(e),typeof google<"u"&&e.clientId!=""&&this.onloadGis(e)}onImport(e){let o=this._auth;if(!(typeof o>"u"))switch(e){case"gapi":this.onloadGapi(o);break;case"gis":this.onloadGis(o);break}}onloadGapi(e){let o=()=>this.initializeGapiClient(e);try{gapi.load("client",o)}catch(n){console.log(n)}}initializeGapiClient(e){return I(this,null,function*(){yield gapi.client.init({apiKey:e.apiKey,discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"]}),this.inited.gapi=!0,this.onLoaded()})}onloadGis(e){let o=["https://www.googleapis.com/auth/spreadsheets.readonly","https://www.googleapis.com/auth/spreadsheets"];try{this.tokenClient=google.accounts.oauth2.initTokenClient({client_id:e.clientId,scope:o.join(" "),callback:""}),this.inited.gis=!0,this.onLoaded()}catch(n){console.log(n)}}onLoaded(){this.eventOnInit.emit(this.inited)}signIn(){if(!this.enabled){alert("Script not loaded yet!");return}this.tokenClient.callback=e=>I(this,null,function*(){if(e.error!==void 0)throw this.eventSignedIn.emit({status:!1,result:e.error}),e;let o={access_token:e.access_token,expires_in:e.expires_in,token_type:e.token_type,scope:e.scope.split(" ")};this.eventSignedIn.emit({status:!0,result:o})}),this.tokenClient.requestAccessToken({prompt:""})}signOut(){let e=gapi.client.getToken();e!==null&&(google.accounts.oauth2.revoke(e.access_token),gapi.client.setToken(""))}getBatch(e,o){return new E(n=>{gapi.client.sheets.spreadsheets.values.batchGet({spreadsheetId:e,dateTimeRenderOption:"FORMATTED_STRING",valueRenderOption:"UNFORMATTED_VALUE",ranges:o}).then(r=>{n.next(r.result),n.complete()}).catch(r=>{n.error(r)})})}listToObject(e){let o=[];e[0].forEach(r=>{let d=r.toLowerCase().replace(/\s/g,"");o.push(d)});let n=[];return e.forEach((r,d)=>{if(d==0)return;let u={id:d};r.forEach((X,Z)=>{u[o[Z]]=X}),n.push(u)}),n}};i.\u0275fac=function(o){return new(o||i)(S(H))},i.\u0275prov=O({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();var W=t=>({bool:t}),te=t=>({disabled:t}),ie=t=>({name:"Bearer",value:t}),ne=t=>({name:"Access Token",value:t}),oe=t=>({name:"Expires",value:t}),ae=(t,i)=>({"bi-check text-success":t,"bi-x text-danger":i});function se(t,i){if(t&1&&(F(0),a(1,"li",22),l(2),s(),D()),t&2){let c=i.$implicit;p(2),T(" ",c," ")}}function re(t,i){if(t&1&&(a(0,"section",17)(1,"h2"),l(2,"Result :"),s(),a(3,"div"),C(4,9)(5,9)(6,9),N(7,"number"),a(8,"div",5)(9,"div",18),l(10," Scopes: "),s(),a(11,"ul"),y(12,se,3,1,"ng-container",19),s()()(),a(13,"div",20)(14,"a",21),l(15," Continue "),s()()()),t&2){let c=j(),e=b(30);p(4),m("ngTemplateOutlet",e)("ngTemplateOutletContext",h(12,ie,c.token.token_type)),p(),m("ngTemplateOutlet",e)("ngTemplateOutletContext",h(14,ne,c.token.access_token)),p(),m("ngTemplateOutlet",e)("ngTemplateOutletContext",h(16,oe,M(7,8,c.token.expires_in,"1.0","id-ID")+" seconds")),p(6),m("ngForOf",c.token.scope)("ngForTrackBy",c.app.tracker)}}function le(t,i){if(t&1&&(a(0,"div",5)(1,"div",18),l(2),s(),a(3,"div",23),l(4),s()()),t&2){let c=i.name,e=i.value;p(2),T("",c," :"),p(2),R(e)}}function ce(t,i){if(t&1&&A(0,"i",24),t&2){let c=i.bool;m("ngClass",P(1,ae,c,!c))}}var Ie=(()=>{let i=class i{constructor(e,o,n,r){this.el=e,this.app=o,this.gs=n,this.cd=r,this.auth={apiKey:"",clientId:"",useOauth:!1},this.plugin={gapi:!1,gis:!1}}ngOnInit(){this.onEvents()}onEvents(){this.gs.eventOnInit.subscribe(e=>{this.plugin.gapi=e.gapi,e.gis&&this.gs.signIn(),this.cd.detectChanges()}),this.gs.eventSignedIn.subscribe(e=>{this.plugin.gis=e.status,e.status&&(this.token=e.result),this.cd.detectChanges()})}onAuthorize(e){e.preventDefault(),this.gs.auth={apiKey:this.auth.apiKey,clientId:this.auth.clientId,storageName:"gtoken"}}};i.\u0275fac=function(o){return new(o||i)(_(G),_(J),_(Q),_(z))},i.\u0275cmp=w({type:i,selectors:[["app-gsheets"]],standalone:!0,features:[K],decls:33,vars:12,consts:[["tokenResult",""],["check",""],[1,"container"],["href","https://console.cloud.google.com/apis/credentials","rel","noopener","target","_blank","title","Google Cloud APIS Credentials page"],[3,"submit"],[1,"mb-3"],["for","api"],[1,"hstack"],["type","text","name","api","id","api","title","API Key","required","","placeholder","Insert Google API Key...",1,"form-control",3,"input"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"form-check"],["type","checkbox","name","oauth2","id","oauth2","title","Enable OAuth2 Mode",1,"form-check-input",3,"input"],["for","oauth2",1,"form-check-label"],["type","text","name","clientid","id","clientid","title","Client ID","placeholder","Insert User Client ID...",1,"form-control",3,"input","ngClass"],[1,"justify-content-center","d-flex"],["type","submit","name","connect","id","connect",1,"btn","btn-primary"],["class","border rounded p-3 my-3",4,"ngIf"],[1,"border","rounded","p-3","my-3"],[1,"fw-medium"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-end"],["href","",1,"btn","btn-primary","disabled"],[1,"text-truncate"],[1,"ms-3","text-truncate"],[1,"bi",3,"ngClass"]],template:function(o,n){if(o&1){let r=V();a(0,"section",2)(1,"h1"),l(2,"API Authorization"),s(),a(3,"article")(4,"p"),l(5,"This section is to test the connection of your API key."),s(),a(6,"p"),l(7," You can create/select your API here : "),a(8,"a",3),l(9," Google Cloud APIS (Credentials) "),s()()(),a(10,"form",4),v("submit",function(u){return g(r),f(n.onAuthorize(u))}),a(11,"div",5)(12,"label",6),l(13,"API Key"),s(),a(14,"div",7)(15,"input",8),v("input",function(u){return g(r),f(n.auth.apiKey=n.app.navigator.inputValue(u,"string"))}),s(),C(16,9),s()(),a(17,"div",5)(18,"div",10)(19,"input",11),v("input",function(u){return g(r),f(n.auth.useOauth=n.app.navigator.inputValue(u,"bool"))}),s(),a(20,"label",12),l(21,"Client ID"),s()(),a(22,"div",7)(23,"input",13),v("input",function(u){return g(r),f(n.auth.clientId=n.app.navigator.inputValue(u,"string"))}),s(),C(24,9),s()(),a(25,"div",14)(26,"button",15),l(27," Connect "),s()()(),y(28,re,16,18,"section",16),s(),y(29,le,5,2,"ng-template",null,0,x)(31,ce,1,4,"ng-template",null,1,x)}if(o&2){let r=b(32);p(16),m("ngTemplateOutlet",r)("ngTemplateOutletContext",h(6,W,n.plugin.gapi)),p(7),m("ngClass",h(8,te,!n.auth.useOauth)),p(),m("ngTemplateOutlet",r)("ngTemplateOutletContext",h(10,W,n.plugin.gis)),p(4),m("ngIf",n.token!=null)}},dependencies:[Y,B,L,U,q,$]});let t=i;return t})();export{Ie as GsheetsComponent};
