import{j as r,l as a,m as l,n as o,o as c}from"./chunk-K3XZN7GI.js";var $=(e=1e3,n=500)=>{let s={duration:e,delay:n};return[l("false",a({opacity:0,display:"none"})),l("true",a({opacity:1})),c("false => true",r("{{duration}}ms {{delay}}ms ease-in-out",o([a({opacity:0}),a({opacity:1})])),{params:s}),c("true => false",r("{{duration}}ms {{delay}}ms ease-in-out",o([a({opacity:1}),a({opacity:0})])),{params:s})]},w=(e=1e3,n,s=0)=>{let i=`${e}ms ease-in-out`,y=n=="right"?"100vw":"-100vw",m="0",t=(p,f)=>{let u=a({transform:`translateX(${y})`,opacity:"0%",width:"0%"}),h=a({transform:`translateX(${m+(s<=1?s*100:1)}%)`,opacity:"inherit",width:"inherit"}),x=a({transform:`translateX(${m})`,opacity:"inherit",width:"inherit"}),d;switch(p){case"min":d=u;break;case"mid":d=h;break;case"max":d=x;break}return f!=null&&(d.offset=f),d};return[l("true",t("max")),l("false",t("min")),c("false => true",[s!=0?r(i,o([t("min",0),t("mid",.8),t("max",1)])):r(i,o([t("min",0),t("max",1)]))]),c("true => false",[s!=0?r(i,o([t("max",0),t("mid",.2),t("min",1)])):r(i,o([t("max",0),t("min",1)]))])]};var b=e=>{let n=e=="top"||e=="bottom"?"1,0,0":"0,1,0",s=-90,i=s*.5,y=0,m={delay:100,duration:500},t=l("false",a({transformOrigin:e,transform:`rotate3d(${n}, ${y}deg)`,filter:"brightness(1)"}),{params:m}),p=l("true",a({transformOrigin:e,transform:`rotate3d(${n}, ${s}deg)`,filter:"brightness(0.3)"}),{params:m}),f=r("{{duration}}ms {{delay}}ms",o([p.styles,a({transform:`rotate3d(${n}, ${i}deg)`,filter:"brightness(0.5)"}),a({transform:`rotate3d(${n}, ${-i}deg)`,filter:"brightness(1)"}),t.styles])),u=r("{{duration}}ms {{delay}}ms"),h=c("false => *",u,{params:m}),x=c("* => false",f,{params:m});return[t,p,h,x]};export{$ as a,w as b,b as c};
