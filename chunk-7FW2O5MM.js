import{A as h,E as p,G as R,L as k,O as g,Q as A,Sa as W,Sb as j,T as m,Ub as L,W as D,Y as T,a as M,da as F,j as S,ma as U,n as v,o as P,r as c,ta as I,tc as O,u as N,v as b,x as w,y,z as u}from"./chunk-TKQFSGRA.js";var E="Service workers are disabled or not supported by this browser";function K(r){return b(()=>P(new Error(r)))}var d=class{constructor(e){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=K(E);else{let t=w(e,"controllerchange").pipe(c(()=>e.controller)),s=b(()=>v(e.controller)),i=N(s,t);this.worker=i.pipe(h(l=>!!l)),this.registration=this.worker.pipe(g(()=>e.getRegistration()));let C=w(e,"message").pipe(c(l=>l.data)).pipe(h(l=>l&&l.type)).pipe(k());C.connect(),this.events=C}}postMessage(e,n){return this.worker.pipe(p(1),A(t=>{t.postMessage(M({action:e},n))})).toPromise().then(()=>{})}postMessageWithOperation(e,n,t){let s=this.waitForOperationCompleted(t),i=this.postMessage(e,n);return Promise.all([i,s]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let n;return typeof e=="string"?n=t=>t.type===e:n=t=>e.includes(t.type),this.events.pipe(h(n))}nextEventOfType(e){return this.eventsOfType(e).pipe(p(1))}waitForOperationCompleted(e){return this.eventsOfType("OPERATION_COMPLETED").pipe(h(n=>n.nonce===e),p(1),c(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},Z=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,this.pushManager=null,this.subscriptionChanges=new S,!t.isEnabled){this.messages=u,this.notificationClicks=u,this.subscription=u;return}this.messages=this.sw.eventsOfType("PUSH").pipe(c(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(c(i=>i.data)),this.pushManager=this.sw.registration.pipe(c(i=>i.pushManager));let s=this.pushManager.pipe(g(i=>i.getSubscription()));this.subscription=y(s,this.subscriptionChanges)}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(E));let s={userVisibleOnly:!0},i=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),a=new Uint8Array(new ArrayBuffer(i.length));for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return s.applicationServerKey=a,this.pushManager.pipe(g(o=>o.subscribe(s)),p(1)).toPromise().then(o=>(this.subscriptionChanges.next(o),o))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(E));let t=s=>{if(s===null)throw new Error("Not subscribed to push notifications.");return s.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(p(1),g(t)).toPromise()}decodeBase64(t){return atob(t)}};e.\u0275fac=function(s){return new(s||e)(T(d))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})(),x=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=u,this.unrecoverable=u;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(E));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(E));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}};e.\u0275fac=function(s){return new(s||e)(T(d))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let r=e;return r})();var V=new D("");function G(r,e,n,t){return()=>{if(!(O(t)&&"serviceWorker"in navigator&&n.enabled!==!1))return;navigator.serviceWorker.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})});let s;if(typeof n.registrationStrategy=="function")s=n.registrationStrategy();else{let[a,...o]=(n.registrationStrategy||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":s=v(null);break;case"registerWithDelay":s=_(+o[0]||0);break;case"registerWhenStable":s=o[0]?y(B(r),_(+o[0])):B(r);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${n.registrationStrategy}`)}}r.get(W).runOutsideAngular(()=>s.pipe(p(1)).subscribe(()=>navigator.serviceWorker.register(e,{scope:n.scope}).catch(a=>console.error("Service worker registration failed with:",a))))}}function _(r){return v(null).pipe(R(r))}function B(r){return r.get(L).isStable.pipe(h(n=>n))}function H(r,e){return new d(O(e)&&r.enabled!==!1?navigator.serviceWorker:void 0)}var f=class{};function ne(r,e={}){return F([Z,x,{provide:V,useValue:r},{provide:f,useValue:e},{provide:d,useFactory:H,deps:[f,I]},{provide:j,useFactory:G,deps:[U,V,f,I],multi:!0}])}export{Z as a,ne as b};