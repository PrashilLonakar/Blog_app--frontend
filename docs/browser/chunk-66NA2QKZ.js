import{a as b,b as Q,c as j,d as q,e as K,f as W,g as G,h as J,i as U,j as X,k as Y,l as Z,m as tt,n as et}from"./chunk-JTHHA2R2.js";import"./chunk-DW3FZY2E.js";import"./chunk-SEYZPM5E.js";import{a as z}from"./chunk-J7MB7LBM.js";import{A as O,r as P,x as R,y as A,z as N}from"./chunk-4OJ6TMYK.js";import"./chunk-IX6G3U3V.js";import{a as k,b as V,g as $}from"./chunk-CTHCLFOV.js";import"./chunk-LVFXDDXL.js";import{d as F,g as B,j as I}from"./chunk-5NDPCXT6.js";import{Ab as d,Bb as u,Db as S,Gb as M,Ic as x,Mb as H,Nb as D,Ob as v,Qb as m,Rb as h,Ua as l,Va as g,Xb as E,Yb as L,Zb as T,fa as w,mb as p,na as _,oa as y,ob as c,xb as a,yb as n,zb as f}from"./chunk-SRRR5EYJ.js";import"./chunk-7CGTOI24.js";var nt=()=>[5,10,20],ot=t=>["/admin/post/edit",t];function at(t,e){t&1&&(a(0,"th",15),m(1,"No."),n())}function mt(t,e){if(t&1&&(a(0,"td",16),m(1),n()),t&2){let s=e.$implicit;l(),h(s.position)}}function rt(t,e){t&1&&(a(0,"th",15),m(1,"Name"),n())}function lt(t,e){if(t&1&&(a(0,"td",16),m(1),n()),t&2){let s=e.$implicit;l(),h(s.name)}}function st(t,e){t&1&&(a(0,"th",15),m(1,"Weight"),n())}function pt(t,e){if(t&1&&(a(0,"td",16),m(1),n()),t&2){let s=e.$implicit;l(),h(s.weight)}}function ct(t,e){t&1&&(a(0,"th",15),m(1,"Symbol"),n())}function dt(t,e){if(t&1&&(a(0,"td",16),m(1),n()),t&2){let s=e.$implicit;l(),h(s.symbol)}}function ut(t,e){t&1&&(a(0,"th",15),m(1,"Action"),n())}function ft(t,e){if(t&1&&(a(0,"td",16)(1,"mat-icon",17),m(2,"edit"),n()()),t&2){let s=e.$implicit;l(),c("routerLink",T(1,ot,s.position))}}function ht(t,e){t&1&&f(0,"tr",18)}function Ct(t,e){t&1&&f(0,"tr",19)}var At=(()=>{let e=class e{constructor(o,i){this.titleService=o,this.route=i,this.pageName="",this.breadCrumbs=[],this.buttonContent={},this.isBthShow=!1,this.displayedColumns=["position","name","weight","symbol","action"],this.dataSource=new et(bt)}ngOnInit(){this.route.data.subscribe(o=>{let i=o.title;i&&(this.pageName=i,this.titleService.setTitle(i)),o.breadcrumbs&&(this.breadCrumbs=o.breadcrumbs),o.btnData&&(this.buttonContent=o.btnData),o.isBtnData&&(this.isBthShow=o.isBtnData)})}ngAfterViewInit(){this.dataSource.paginator=this.paginator}applyFilter(o){let i=o.target.value;this.dataSource.filter=i.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}};e.\u0275fac=function(i){return new(i||e)(g(F),g(B))},e.\u0275cmp=w({type:e,selectors:[["app-list"]],viewQuery:function(i,r){if(i&1&&H(b,5),i&2){let C;D(C=v())&&(r.paginator=C.first)}},standalone:!0,features:[E],decls:26,vars:9,consts:[["input",""],[3,"title","breadCrumbsArr","btn","isBtnShow"],[1,"mat-elevation-z8"],["matInput","","placeholder","Ex. Mia",3,"keyup"],["mat-table","",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","weight"],["matColumnDef","symbol"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"text-success","edit",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(i,r){if(i&1){let C=S();f(0,"sub-header",1),a(1,"div",2)(2,"mat-form-field")(3,"mat-label"),m(4,"Filter"),n(),a(5,"input",3,0),M("keyup",function(it){return _(C),y(r.applyFilter(it))}),n()(),a(7,"table",4),d(8,5),p(9,at,2,0,"th",6)(10,mt,2,1,"td",7),u(),d(11,8),p(12,rt,2,0,"th",6)(13,lt,2,1,"td",7),u(),d(14,9),p(15,st,2,0,"th",6)(16,pt,2,1,"td",7),u(),d(17,10),p(18,ct,2,0,"th",6)(19,dt,2,1,"td",7),u(),d(20,11),p(21,ut,2,0,"th",6)(22,ft,3,3,"td",7),u(),p(23,ht,1,0,"tr",12)(24,Ct,1,0,"tr",13),n(),f(25,"mat-paginator",14),n()}i&2&&(c("title",r.pageName)("breadCrumbsArr",r.breadCrumbs)("btn",r.buttonContent)("isBtnShow",r.isBthShow),l(7),c("dataSource",r.dataSource),l(16),c("matHeaderRowDef",r.displayedColumns),l(),c("matRowDefColumns",r.displayedColumns),l(),c("pageSizeOptions",L(8,nt)))},dependencies:[z,x,Q,b,tt,j,K,U,W,q,X,G,J,Y,Z,O,N,R,P,A,V,k,$,I],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:25%}.edit[_ngcontent-%COMP%]{cursor:pointer}"]});let t=e;return t})(),bt=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H",action:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He",action:"H"},{position:3,name:"Lithium",weight:6.941,symbol:"Li",action:"H"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be",action:"H"},{position:5,name:"Boron",weight:10.811,symbol:"B",action:"H"},{position:6,name:"Carbon",weight:12.0107,symbol:"C",action:"H"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N",action:"H"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O",action:"H"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F",action:"H"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne",action:"H"},{position:11,name:"Sodium",weight:22.9897,symbol:"Na",action:"H"},{position:12,name:"Magnesium",weight:24.305,symbol:"Mg",action:"H"},{position:13,name:"Aluminum",weight:26.9815,symbol:"Al",action:"H"},{position:14,name:"Silicon",weight:28.0855,symbol:"Si",action:"H"},{position:15,name:"Phosphorus",weight:30.9738,symbol:"P",action:"H"},{position:16,name:"Sulfur",weight:32.065,symbol:"S",action:"H"},{position:17,name:"Chlorine",weight:35.453,symbol:"Cl",action:"H"},{position:18,name:"Argon",weight:39.948,symbol:"Ar",action:"H"},{position:19,name:"Potassium",weight:39.0983,symbol:"K",action:"H"},{position:20,name:"Calcium",weight:40.078,symbol:"Ca",action:"H"}];export{At as ListComponent};
