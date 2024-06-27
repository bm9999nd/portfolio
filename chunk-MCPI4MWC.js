import{m as P}from"./chunk-2IWA6ZLQ.js";import{Bb as A,Ia as m,Ja as f,Kb as V,R as w,Ua as C,V as S,Wa as u,Wb as x,Yb as D,Z as E,Za as s,_a as r,bc as j,cb as v,d as y,db as O,dc as K,ea as d,eb as g,fa as h,g as b,ic as F,la as _,nb as k,ob as p,tb as G,vb as I}from"./chunk-B23K2YXN.js";var N=(()=>{let o=class o{constructor(e){this.navigator=e,this.eventOnInit=new _,this.eventSignedIn=new _,this.inited={gapi:!1,gis:!1},e.importTag({type:"script",src:"https://apis.google.com/js/api.js",onload:()=>this.onImport("gapi")}),e.importTag({type:"script",src:"https://accounts.google.com/gsi/client",onload:()=>this.onImport("gis")})}get enabled(){return this.inited.gapi&&this.inited.gis}set auth(e){this._auth=e,typeof gapi<"u"&&e.apiKey!=""&&this.onloadGapi(e),typeof google<"u"&&e.clientId!=""&&this.onloadGis(e)}onImport(e){let i=this._auth;if(!(typeof i>"u"))switch(e){case"gapi":this.onloadGapi(i);break;case"gis":this.onloadGis(i);break}}onloadGapi(e){let i=()=>this.initializeGapiClient(e);try{gapi.load("client",i)}catch(t){console.log(t)}}initializeGapiClient(e){return y(this,null,function*(){yield gapi.client.init({apiKey:e.apiKey,discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"]}),this.inited.gapi=!0,this.onLoaded()})}onloadGis(e){let i=["https://www.googleapis.com/auth/spreadsheets.readonly","https://www.googleapis.com/auth/spreadsheets"];try{this.tokenClient=google.accounts.oauth2.initTokenClient({client_id:e.clientId,scope:i.join(" "),callback:""}),this.inited.gis=!0,this.onLoaded()}catch(t){console.log(t)}}onLoaded(){this.eventOnInit.emit(this.inited)}signIn(){if(!this.enabled){alert("Script not loaded yet!");return}this.tokenClient.callback=e=>y(this,null,function*(){if(e.error!==void 0)throw this.eventSignedIn.emit(!1),e;this.eventSignedIn.emit(!0)}),this.tokenClient.requestAccessToken({prompt:""})}signOut(){let e=gapi.client.getToken();e!==null&&(google.accounts.oauth2.revoke(e.access_token),gapi.client.setToken(""))}getBatch(e,i){return new b(t=>{gapi.client.sheets.spreadsheets.values.batchGet({spreadsheetId:e,dateTimeRenderOption:"FORMATTED_STRING",valueRenderOption:"UNFORMATTED_VALUE",ranges:i}).then(a=>{t.next(a.result),t.complete()}).catch(a=>{t.error(a)})})}listToObject(e){let i=[];e[0].forEach(a=>{let c=a.toLowerCase().replace(/\s/g,"");i.push(c)});let t=[];return e.forEach((a,c)=>{if(c==0)return;let l={id:c};a.forEach((L,M)=>{l[i[M]]=L}),t.push(l)}),t}};o.\u0275fac=function(i){return new(i||o)(S(F))},o.\u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"});let n=o;return n})();var R=n=>({bool:n}),U=n=>({disabled:n});function q(n,o){n&1&&(s(0,"span"),p(1," Loaded "),r())}function B(n,o){n&1&&(s(0,"span"),p(1," X "),r())}function X(n,o){if(n&1&&C(0,q,2,0,"span",10)(1,B,2,0,"span",10),n&2){let T=o.bool;u("ngIf",T),m(),u("ngIf",!T)}}var oe=(()=>{let o=class o{constructor(e,i,t){this.app=e,this.gs=i,this.cd=t,this.auth={apiKey:"",clientId:"",useOauth:!1},this.plugin={gapi:!1,gis:!1}}ngOnInit(){this.gs.eventOnInit.subscribe(e=>{this.plugin.gapi=e.gapi,this.plugin.gis=e.gis,this.cd.detectChanges()}),this.gs.eventSignedIn.subscribe(e=>{console.log(e)})}onAuthorize(e){e.preventDefault(),this.gs.auth={apiKey:this.auth.apiKey,clientId:this.auth.clientId,storageName:"gtoken"}}};o.\u0275fac=function(i){return new(i||o)(f(P),f(N),f(V))},o.\u0275cmp=E({type:o,selectors:[["app-gsheets"]],standalone:!0,features:[G],decls:26,vars:11,consts:[["check",""],["href","https://console.cloud.google.com/apis/credentials","rel","noopener","target","_blank","title","Google Cloud APIS Credentials page"],[3,"submit"],["for","api"],["type","text","name","api","id","api","title","API Key","required","","placeholder","Insert Google API Key...",3,"input"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["for","oauth2"],["type","checkbox","name","oauth2","id","oauth2","title","Enable OAuth2 Mode",3,"input"],["type","text","name","clientid","id","clientid","title","Client ID","placeholder","Insert User Client ID...",3,"input","ngClass"],["type","submit","name","connect","id","connect"],[4,"ngIf"]],template:function(i,t){if(i&1){let a=O();s(0,"section")(1,"h1"),p(2,"API Authorization"),r(),s(3,"article")(4,"p"),p(5,"This section is to test the connection of your API key."),r(),s(6,"p"),p(7," You can create/select your API here : "),s(8,"a",1),p(9," Google Cloud APIS (Credentials) "),r()()(),s(10,"form",2),g("submit",function(l){return d(a),h(t.onAuthorize(l))}),s(11,"div")(12,"label",3),p(13,"API Key"),r(),s(14,"input",4),g("input",function(l){return d(a),h(t.auth.apiKey=t.app.navigator.inputValue(l,"string"))}),r(),v(15,5),r(),s(16,"div")(17,"label",6),p(18,"Client ID"),r(),s(19,"input",7),g("input",function(l){return d(a),h(t.auth.useOauth=t.app.navigator.inputValue(l,"bool"))}),r(),s(20,"input",8),g("input",function(l){return d(a),h(t.auth.clientId=t.app.navigator.inputValue(l,"string"))}),r(),v(21,5),r(),s(22,"button",9),p(23," Test Connection "),r()()(),C(24,X,2,2,"ng-template",null,0,A)}if(i&2){let a=k(25);m(15),u("ngTemplateOutlet",a)("ngTemplateOutletContext",I(5,R,t.plugin.gapi)),m(5),u("ngClass",I(7,U,!t.auth.useOauth)),m(),u("ngTemplateOutlet",a)("ngTemplateOutletContext",I(9,R,t.plugin.gis))}},dependencies:[K,x,D,j]});let n=o;return n})();export{oe as GsheetsComponent};
