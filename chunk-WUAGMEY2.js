import{T as d,Xb as m,Y as p,dc as f,ta as h,tc as u}from"./chunk-TKQFSGRA.js";var y={name:"api",version:"0.0.1",peerDependencies:{"@angular/common":"^17.3.0","@angular/core":"^17.3.0"},dependencies:{tslib:"^2.3.0"},sideEffects:!1};var g=function(r){return r.pdf="pdf",r.html="html",r.image="image",r.json="json",r.rawhtml="raw-html",r}(g||{}),Y=(()=>{let c=class c{constructor(t,e){this.platformId=t,this.document=e,this.isDevMode=m(),this.isBrowser=u(this.platformId),this.angular={version:y.peerDependencies["@angular/core"]},this.links={bootstrapIcon:{type:"link",src:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"},bootstrap:{type:"link",src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",integrity:"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",crossorigin:"anonymous"}},this.scripts={bootstrap:{type:"script",src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",crossorigin:"anonymous"},jsPdf:{type:"script",src:"https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"},html2canvas:{type:"script",src:"https://html2canvas.hertzen.com/dist/html2canvas.js"}},this.getFont={montserrat:()=>{this.importTag({type:"link",rel:"stylesheet",src:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"})},orbitron:()=>{this.importTag({type:"link",rel:"preconnect",src:"https://fonts.googleapis.com"}),this.importTag({type:"link",rel:"preconnect",src:"https://fonts.gstatic.com"}),this.importTag({type:"link",rel:"stylesheet",src:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap"})}}}initBootstrap(t=!0,e=!1){t&&(this.importTag({type:"link",src:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",rel:"stylesheet"}),this.importTag({type:"link",src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",rel:"stylesheet",crossorigin:"anonymous",integrity:"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"})),e&&this.importTag({type:"script",src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",crossorigin:"anonymous",integrity:"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"})}importTag(t,e="head"){if(!this.isBrowser)return;let s=!1,a=t.type=="link"?"href":"src";if(this.document.querySelectorAll(t.type).forEach(o=>{let l=o.attributes.getNamedItem(a);!s&&l!=null&&l?.value==t.src&&(s=!0)}),s)return;let n;switch(t.type){case"link":n=this.document.createElement("link"),n.rel="stylesheet",n.href=t.src;break;case"script":n=this.document.createElement("script"),n.src=t.src;break}typeof t.crossorigin<"u"&&(n.crossOrigin=t.crossorigin,n.integrity=t.integrity),typeof t.rel<"u"&&n.setAttribute("rel",t.rel),typeof t.onload<"u"&&(n.onload=t.onload),e=="head"?this.document.head.querySelector("link[rel=icon]").after(n):this.document.body.append(n)}changeFavicon(t){this.document.head.querySelectorAll("link").forEach(e=>{e.getAttribute("href")=="favicon.ico"&&e.setAttribute("href",t)})}visibleInScreen(t){if(!this.isBrowser)return;let e=t.ownerDocument.defaultView,s=t.getBoundingClientRect();return s.top>=0&&s.left>=0&&s.bottom<=(e.innerHeight||document.documentElement.clientHeight)&&s.right<=(e.innerWidth||document.documentElement.clientWidth)}visibleOnScroll(t,e,s=1){let o=t.ownerDocument.defaultView.document.body.getBoundingClientRect().height,l=o*s,i=e.scrollTop,b=t.getBoundingClientRect().top,j=i+b-o-l;return i>=j}setInterval(t,e,s=0){this.isBrowser&&(t&&clearInterval(t),t=setInterval(e,s))}inputValue(t,e="string"){let s=t.target;switch(e){case"string":return s.value;case"bool":return s.checked;default:return null}}tracker(t,e){return e}printPDF(t){let e=this.document,s=[],a={};this.importTag({type:"link",src:"https://printjs-4de6.kxcdn.com/print.min.css"}),this.importTag({type:"script",src:"https://printjs-4de6.kxcdn.com/print.min.js",onload:()=>n()});function n(){let o=e.querySelector("#"+t),l=e.createElement("script");l.src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",e.head.querySelectorAll("link").forEach(i=>{s.push(i.href),o.append(i)}),e.head.querySelectorAll("style").forEach(i=>{a=i.innerHTML,o.append(i)}),o.append(l),printJS({printable:o.outerHTML,type:g.rawhtml,css:s,style:a,base64:!1,showModal:!0,targetStyles:["*"]})}}};c.\u0275fac=function(e){return new(e||c)(p(h),p(f))},c.\u0275prov=d({token:c,factory:c.\u0275fac,providedIn:"root"});let r=c;return r})();export{Y as a};
