import './polyfills.server.mjs';
import{a as p,b as y,d as T,e as _,f as L}from"./chunk-CD65TKIC.mjs";import"./chunk-2PY6GT4H.mjs";import{m as C,n as E}from"./chunk-MOBMO3SR.mjs";import"./chunk-UTEJNEE6.mjs";import{dc as c,jc as a,kc as R,lc as m,oc as g,rc as h}from"./chunk-HY47MGUS.mjs";import"./chunk-KXIJJ5ZC.mjs";async function*u(e,n,i,t=""){for(let r of e){let{path:o,redirectTo:l,loadChildren:w,children:f}=r;if(o===void 0)continue;let s=A(t,o);if(l!==void 0){yield{route:s,success:!1,redirect:!0};continue}if(/[:*]/.test(o)){yield{route:s,success:!1,redirect:!1};continue}if(yield{route:s,success:!0,redirect:!1},f?.length&&(yield*u(f,n,i,s)),w){let d=await C(r,n,i).toPromise();if(d){let{routes:P,injector:S=i}=d;yield*u(P,n,S,s)}}}}async function*F(e,n){let i=g(h,"server",[{provide:p,useValue:{document:n,url:""}},{provide:c,useFactory:()=>{class t extends c{ignoredLogs=new Set(["Angular is running in development mode."]);log(o){this.ignoredLogs.has(o)||super.log(o)}}return new t}},...y])();try{let t;N(e)?t=await e():t=(await i.bootstrapModule(e)).injector.get(a),await R(t);let r=t.injector,o=r.get(E);if(o.config.length===0)yield{route:"",success:!0,redirect:!1};else{let l=r.get(m);yield*u(o.config,l,r)}}finally{i.destroy()}}function N(e){return typeof e=="function"&&!("\u0275mod"in e)}function A(...e){return e.filter(Boolean).join("/")}export{F as extractRoutes,L as renderApplication,_ as renderModule,c as \u0275Console,T as \u0275SERVER_CONTEXT};
