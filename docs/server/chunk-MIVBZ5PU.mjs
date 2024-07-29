import './polyfills.server.mjs';
import{b as J}from"./chunk-RKTZXAEF.mjs";import{a as z}from"./chunk-4MUONASU.mjs";import{A as q,b as F,d as g,f as S,g as E,h as V,k,l as x,m as I,o as N,p as L,q as O,r as B,s as T,u as G,x as D,y as R,z as j}from"./chunk-MJVBBUFZ.mjs";import{a as U,b as W,c as A,g as H}from"./chunk-H2KYOXOE.mjs";import"./chunk-WBEOKIC4.mjs";import{o as _,q as M}from"./chunk-MOBMO3SR.mjs";import"./chunk-UTEJNEE6.mjs";import{Ab as t,Bb as s,Ib as d,Qc as C,Sb as i,Tc as y,Ub as f,Wa as o,Xa as P,Zb as v,_b as w,fa as h,jb as u,ob as b,qb as n,zb as e}from"./chunk-HY47MGUS.mjs";import"./chunk-KXIJJ5ZC.mjs";var K=()=>["/auth/login"],Q=()=>["/auth/registration"];function X(m,a){m&1&&(e(0,"mat-error",20),i(1," Both passwords must match "),t())}var he=(()=>{let a=class a{constructor(c){this.formBuilder=c,this.isViewPasswordEnabled=u(!1),this.isViewConfirmPasswordEnabled=u(!1),this.changePasswordForm=new V({})}ngOnInit(){this.setUpchangePasswordForm()}setUpchangePasswordForm(){this.changePasswordForm=this.formBuilder.group({password:["",[g.required]],confirmPassword:["",[g.required]]})}toggleViewPassword(){this.isViewPasswordEnabled()?this.isViewPasswordEnabled.set(!1):this.isViewPasswordEnabled.set(!0)}toggleViewConfirmPassword(){this.isViewConfirmPasswordEnabled()?this.isViewConfirmPasswordEnabled.set(!1):this.isViewConfirmPasswordEnabled.set(!0)}get areSamePassword(){return!this.changePasswordForm.get("password")?.value||!this.changePasswordForm.get("confirmPassword")?.value?!0:this.changePasswordForm.get("password")?.touched&&this.changePasswordForm.get("confirmPassword")?.touched?this.changePasswordForm.get("password")?.value==this.changePasswordForm.get("confirmPassword")?.value:!0}onSubmit(){this.areSamePassword&&console.log("val",this.changePasswordForm.value)}};a.\u0275fac=function(l){return new(l||a)(P(N))},a.\u0275cmp=h({type:a,selectors:[["app-change-password"]],standalone:!0,features:[v],decls:37,vars:14,consts:[[1,"change-password-container"],[1,"p-3"],[1,"my-2"],[3,"keyup.enter","formGroup"],[1,"row"],[1,"col-12","mb-1"],["appearance","outline"],["matInput","","placeholder","Write your Password","formControlName","password",3,"type"],["matSuffix","",3,"click"],[1,"d-flex","mt-1"],[3,"control","propertyLabel"],[1,"col-12"],["matInput","","placeholder","Write your Password","formControlName","confirmPassword",3,"type"],["class","d-flex mt-1 error-msg",4,"ngIf"],[1,"col-6"],[1,"col-6","d-flex","justify-content-end"],["mat-button","",3,"routerLink"],[1,"row","mt-5"],["mat-flat-button","","color","primary","type","submit",3,"click"],[1,"my-2","d-flex","justify-content-center"],[1,"d-flex","mt-1","error-msg"]],template:function(l,r){l&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),i(4,"Change Password"),t()(),e(5,"form",3),d("keyup.enter",function(){return r.onSubmit()}),e(6,"div",4)(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),i(10,"Password"),t(),s(11,"input",7),e(12,"mat-icon",8),d("click",function(){return r.toggleViewPassword()}),i(13),t(),e(14,"mat-error",9),s(15,"validation-message",10),t()()(),e(16,"div",11)(17,"mat-form-field",6)(18,"mat-label"),i(19,"Confirm Password"),t(),s(20,"input",12),e(21,"mat-icon",8),d("click",function(){return r.toggleViewConfirmPassword()}),i(22),t(),e(23,"mat-error",9),s(24,"validation-message",10),t()()(),b(25,X,2,0,"mat-error",13),s(26,"div",14),e(27,"div",15)(28,"button",16),i(29,"Sign in!"),t()()(),e(30,"div",17)(31,"button",18),d("click",function(){return r.onSubmit()}),i(32," Submit "),t(),e(33,"p",19),i(34,"OR"),t(),e(35,"button",16),i(36," Need an account? Sign up! "),t()()()()()),l&2&&(o(5),n("formGroup",r.changePasswordForm),o(6),n("type",r.isViewPasswordEnabled()?"text":"password"),o(2),f(" ",r.isViewPasswordEnabled()?"visibility_off":"visibility"," "),o(2),n("control",r.changePasswordForm.controls.password)("propertyLabel","Password"),o(5),n("type",r.isViewConfirmPasswordEnabled()?"text":"password"),o(2),f(" ",r.isViewConfirmPasswordEnabled()?"visibility_off":"visibility"," "),o(2),n("control",r.changePasswordForm.controls.confirmPassword)("propertyLabel","Confirm Password"),o(),n("ngIf",!r.areSamePassword),o(3),n("routerLink",w(12,K)),o(7),n("routerLink",w(13,Q)))},dependencies:[R,D,B,T,G,q,j,W,U,z,H,A,L,k,F,S,E,O,x,I,M,_,J,y,C],styles:[".change-password-container[_ngcontent-%COMP%]     .mat-mdc-form-field{width:100%}.change-password-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-icon{cursor:pointer}.change-password-container[_ngcontent-%COMP%]     .mat-mdc-button-base{border-radius:10px}.change-password-container[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%]{font-size:.75rem;line-height:1rem}"]});let m=a;return m})();export{he as ChangePasswordComponent};
