import{a as C,b as $,c as j,d as q,e as Y,f as G,g as J,h as K,i as U,j as W,k as X,l as Z,m as ee,n as te}from"./chunk-JTHHA2R2.js";import"./chunk-DW3FZY2E.js";import"./chunk-SEYZPM5E.js";import{a as Q}from"./chunk-J7MB7LBM.js";import{A,r as B,x as O,y as P,z as N}from"./chunk-4OJ6TMYK.js";import"./chunk-IX6G3U3V.js";import{a as k,b as V,g as z}from"./chunk-CTHCLFOV.js";import"./chunk-LVFXDDXL.js";import{d as F,g as I,j as R}from"./chunk-5NDPCXT6.js";import{Ab as u,Bb as f,Db as S,Gb as b,Ic as x,Mb as w,Nb as D,Ob as v,Qb as m,Rb as h,Ua as l,Va as g,Xb as L,Yb as E,Zb as T,fa as _,mb as p,na as H,oa as M,ob as d,xb as o,yb as a,zb as c}from"./chunk-SRRR5EYJ.js";import"./chunk-7CGTOI24.js";var ne=()=>[5,10,20],ae=e=>["/admin/user/edit",e];function oe(e,t){e&1&&(o(0,"th",14),m(1,"First Name"),a())}function re(e,t){if(e&1&&(o(0,"td",15),m(1),a()),e&2){let s=t.$implicit;l(),h(s.firstname)}}function me(e,t){e&1&&(o(0,"th",14),m(1,"Last Name"),a())}function le(e,t){if(e&1&&(o(0,"td",15),m(1),a()),e&2){let s=t.$implicit;l(),h(s.lastname)}}function se(e,t){e&1&&(o(0,"th",14),m(1,"Email"),a())}function de(e,t){if(e&1&&(o(0,"td",15),m(1),a()),e&2){let s=t.$implicit;l(),h(s.email)}}function pe(e,t){e&1&&(o(0,"th",14),m(1,"Action"),a())}function ce(e,t){if(e&1&&(o(0,"td",15)(1,"mat-icon",16),m(2,"edit"),a()()),e&2){let s=t.$implicit;l(),d("routerLink",T(1,ae,s.id))}}function ue(e,t){e&1&&c(0,"tr",17)}function fe(e,t){e&1&&c(0,"tr",18)}var Be=(()=>{let t=class t{constructor(n,i){this.titleService=n,this.route=i,this.pageName="",this.breadCrumbs=[],this.buttonContent={},this.isBthShow=!1,this.displayedColumns=["firstname","lastname","email","action"],this.dataSource=new te(ye)}ngOnInit(){this.route.data.subscribe(n=>{let i=n.title;i&&(this.pageName=i,this.titleService.setTitle(i)),n.breadcrumbs&&(this.breadCrumbs=n.breadcrumbs),n.btnData&&(this.buttonContent=n.btnData),n.isBtnData&&(this.isBthShow=n.isBtnData)})}ngAfterViewInit(){this.dataSource.paginator=this.paginator}applyFilter(n){let i=n.target.value;this.dataSource.filter=i.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}};t.\u0275fac=function(i){return new(i||t)(g(F),g(I))},t.\u0275cmp=_({type:t,selectors:[["app-list"]],viewQuery:function(i,r){if(i&1&&w(C,5),i&2){let y;D(y=v())&&(r.paginator=y.first)}},standalone:!0,features:[L],decls:23,vars:9,consts:[["input",""],[3,"title","breadCrumbsArr","btn","isBtnShow"],[1,"mat-elevation-z8"],["matInput","","placeholder","Your search",3,"keyup"],["mat-table","",3,"dataSource"],["matColumnDef","firstname"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","lastname"],["matColumnDef","email"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"text-success","edit",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(i,r){if(i&1){let y=S();c(0,"sub-header",1),o(1,"div",2)(2,"mat-form-field")(3,"mat-label"),m(4,"Search user"),a(),o(5,"input",3,0),b("keyup",function(ie){return H(y),M(r.applyFilter(ie))}),a()(),o(7,"table",4),u(8,5),p(9,oe,2,0,"th",6)(10,re,2,1,"td",7),f(),u(11,8),p(12,me,2,0,"th",6)(13,le,2,1,"td",7),f(),u(14,9),p(15,se,2,0,"th",6)(16,de,2,1,"td",7),f(),u(17,10),p(18,pe,2,0,"th",6)(19,ce,3,3,"td",7),f(),p(20,ue,1,0,"tr",11)(21,fe,1,0,"tr",12),a(),c(22,"mat-paginator",13),a()}i&2&&(d("title",r.pageName)("breadCrumbsArr",r.breadCrumbs)("btn",r.buttonContent)("isBtnShow",r.isBthShow),l(7),d("dataSource",r.dataSource),l(13),d("matHeaderRowDef",r.displayedColumns),l(),d("matRowDefColumns",r.displayedColumns),l(),d("pageSizeOptions",E(8,ne)))},dependencies:[Q,x,$,C,ee,j,Y,U,G,q,W,J,K,X,Z,A,N,O,B,P,V,k,z,R],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:25%}.edit[_ngcontent-%COMP%]{cursor:pointer}"]});let e=t;return e})(),ye=[{id:1,firstname:"Hydrogen",lastname:"Hydrogen",email:"Hydrogen@yopmail.com",action:"H"},{id:2,firstname:"Helium",lastname:"Hydrogen",email:"Hydrogen@yopmail.com",action:"H"},{id:3,firstname:"Lithium",lastname:"Hydrogen",email:"Hydrogen@yopmail.com",action:"H"},{id:4,firstname:"Beryllium",lastname:"Hydrogen",email:"Hydrogen@yopmail.com",action:"H"},{id:5,firstname:"Boron",lastname:"Hydrogen",email:"Hydrogen@yopmail.com",action:"H"},{id:6,firstname:"Carbon",lastname:"Hydrogen",email:"Hydrogen@yopmail.com",action:"H"},{id:7,firstname:"Nitrogen",lastname:"Hydrogen",email:"Hydrogen@yopmail.com",action:"H"},{id:8,firstname:"Oxygen",lastname:"Hydrogen",email:"Hydrogen@yopmail.com",action:"H"},{id:9,firstname:"Fluorine",lastname:"Hydrogen",email:"Hydrogen@yopmail.com",action:"H"},{id:10,firstname:"Neon",lastname:"Hydrogen",email:"Hydrogen@yopmail.com",action:"H"},{id:11,firstname:"Sodium",lastname:"Hydrogen",email:"Hydrogen@yopmail.com",action:"H"}];export{Be as ListComponent};
