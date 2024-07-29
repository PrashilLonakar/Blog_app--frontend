import './polyfills.server.mjs';
import{b as Y}from"./chunk-3F22X2WI.mjs";import{a as U}from"./chunk-ETY7J6CU.mjs";import{a as H}from"./chunk-GCB2FELP.mjs";import{a as R,b as q}from"./chunk-RKTZXAEF.mjs";import"./chunk-XHRENCHR.mjs";import{A as G,b as C,d as l,f as F,g as B,h as _,k as w,l as I,m as N,o as k,p as D,q as E,r as A,s as T,x as L,y as j,z as x}from"./chunk-MJVBBUFZ.mjs";import{b as O,c as V,g as P}from"./chunk-H2KYOXOE.mjs";import"./chunk-WBEOKIC4.mjs";import{h as y,k as M,q as S}from"./chunk-MOBMO3SR.mjs";import"./chunk-UTEJNEE6.mjs";import{Ab as n,Bb as m,Ib as f,Sb as u,Tc as v,Wa as p,Xa as a,Zb as g,fa as b,jb as h,qb as s,zb as o}from"./chunk-HY47MGUS.mjs";import"./chunk-KXIJJ5ZC.mjs";var ft=(()=>{let r=class r{constructor(i,e,t,c){this.titleService=i,this.route=e,this.formBuilder=t,this.snackBar=c,this.pageName="",this.breadCrumbs=[],this.buttonContent={},this.isBthShow=!1,this.isSubmit=h(!1),this.categoryForm=new _({})}ngOnInit(){let i=[];this.setUpcategoryForm(i),this.route.data.subscribe(e=>{let t=e.title;t&&(this.pageName=t,this.titleService.setTitle(t)),e.breadcrumbs&&(this.breadCrumbs=e.breadcrumbs),e.btnData&&(this.buttonContent=e.btnData),e.isBtnData&&(this.isBthShow=e.isBtnData)})}setUpcategoryForm(i){this.categoryForm=this.formBuilder.group({title:["",[l.required,l.maxLength(100)]],description:[i?.description?i.description:"",[l.required,l.maxLength(2e3)]]})}onSubmit(){if(this.isSubmit.set(!0),R.showFieldsError(this.categoryForm)){this.categoryForm.markAllAsTouched();return}console.log("val",this.categoryForm.value)}};r.\u0275fac=function(e){return new(e||r)(a(y),a(M),a(k),a(H))},r.\u0275cmp=b({type:r,selectors:[["app-add-edit"]],standalone:!0,features:[g],decls:23,vars:9,consts:[[3,"title","breadCrumbsArr","btn","isBtnShow"],[3,"keyup.enter","formGroup"],[1,"form-container"],[1,"row","mb-1"],[1,"col-12"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Your title","formControlName","title"],[1,"d-flex","mt-1"],[3,"control","propertyLabel"],[1,"row","mb-3"],["matInput","","placeholder","Yours description","formControlName","description"],[1,"row","mb-1","btn-submit"],[1,"col-12","d-flex","justify-content-end"],["mat-flat-button","","color","primary","type","submit",3,"click"]],template:function(e,t){e&1&&(m(0,"sub-header",0),o(1,"form",1),f("keyup.enter",function(){return t.onSubmit()}),o(2,"div",2)(3,"div",3)(4,"div",4)(5,"mat-form-field",5)(6,"mat-label"),u(7,"Title"),n(),m(8,"input",6),o(9,"mat-error",7),m(10,"validation-message",8),n()()()(),o(11,"div",9)(12,"div",4)(13,"mat-form-field",5)(14,"mat-label"),u(15,"Description"),n(),m(16,"textarea",10),o(17,"mat-error",7),m(18,"validation-message",8),n()()()()(),o(19,"div",11)(20,"div",12)(21,"button",13),f("click",function(){return t.onSubmit()}),u(22," Submit "),n()()()()),e&2&&(s("title",t.pageName)("breadCrumbsArr",t.breadCrumbs)("btn",t.buttonContent)("isBtnShow",t.isBthShow),p(),s("formGroup",t.categoryForm),p(9),s("control",t.categoryForm.controls.title)("propertyLabel","Title"),p(8),s("control",t.categoryForm.controls.description)("propertyLabel","Description"))},dependencies:[U,G,x,L,A,T,j,q,D,w,C,F,B,E,I,N,S,O,P,V,v,Y],styles:[".form-container[_ngcontent-%COMP%]{margin-bottom:5rem}.btn-submit[_ngcontent-%COMP%]{position:fixed;bottom:25px;right:25px}.btn-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:10px}"]});let d=r;return d})();export{ft as AddEditComponent};
