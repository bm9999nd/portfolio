import{d as i,f as a,g as r,h as s,i as o}from"./chunk-5IC5DNT2.js";var w=(e=1e3)=>[r("true",a({opacity:1,display:"inherit"})),r("false",a({opacity:0,display:"none"})),o("false => true",[a({opacity:0}),i(`${e}ms ${e}ms ease-in-out`,a({opacity:1}))]),o("true => false",[a({opacity:1}),i(`${e}ms ease-in-out`,a({opacity:0}))])],k=(e=1e3,f,m=0)=>{let p=`${e}ms ease-in-out`,y=f=="right"?"100vw":"-100vw",c="0",t=(u,l)=>{let d=a({transform:`translateX(${y})`,opacity:"0%",width:"0%"}),x=a({transform:`translateX(${c+(m<=1?m*100:1)}%)`,opacity:"inherit",width:"inherit"}),h=a({transform:`translateX(${c})`,opacity:"inherit",width:"inherit"}),n;switch(u){case"min":n=d;break;case"mid":n=x;break;case"max":n=h;break}return l!=null&&(n.offset=l),n};return[r("true",t("max")),r("false",t("min")),o("false => true",[m!=0?i(p,s([t("min",0),t("mid",.8),t("max",1)])):i(p,s([t("min",0),t("max",1)]))]),o("true => false",[m!=0?i(p,s([t("max",0),t("mid",.2),t("min",1)])):i(p,s([t("max",0),t("min",1)]))])]};export{w as a,k as b};
