import './polyfills.server.mjs';
import{b as de}from"./chunk-DAESZDSX.mjs";import{b as ue}from"./chunk-3F22X2WI.mjs";import{a as pe}from"./chunk-ETY7J6CU.mjs";import{a as me}from"./chunk-GCB2FELP.mjs";import{a as V,b as se}from"./chunk-RKTZXAEF.mjs";import"./chunk-XHRENCHR.mjs";import{A as re,b as R,d as w,f as q,g as G,h as U,k as Q,l as Y,m as H,o as W,p as K,q as J,r as X,s as Z,u as $,x as ee,y as te,z as ie}from"./chunk-MJVBBUFZ.mjs";import{a as oe,b as ne,c as ae,g as le}from"./chunk-H2KYOXOE.mjs";import"./chunk-WBEOKIC4.mjs";import{h as O,k as A,q as j}from"./chunk-MOBMO3SR.mjs";import"./chunk-UTEJNEE6.mjs";import{Ab as o,Bb as l,Fb as y,Ib as v,Kb as S,Ob as k,Pb as N,Qb as x,Qc as L,Rb as T,Sb as s,Ta as M,Tb as B,Tc as z,Ub as F,Wa as n,Xa as b,Zb as D,fa as E,jb as g,na as u,oa as c,ob as C,qb as d,sb as I,vb as P,zb as r}from"./chunk-HY47MGUS.mjs";import"./chunk-KXIJJ5ZC.mjs";var ce=["fileInput"];function fe(m,p){m&1&&(r(0,"mat-icon"),s(1,"upload"),o(),r(2,"p"),s(3,"Upload your Profile pic"),o())}function ve(m,p){if(m&1){let f=y();r(0,"div"),l(1,"img",24),r(2,"p")(3,"span",25),s(4),o(),s(5),o(),r(6,"mat-icon",26),v("click",function(){u(f);let i=S(2);return c(i.removeImage())}),s(7,"delete"),o()()}if(m&2){let f=S(2);n(),d("src",f.imagePreview(),M),n(3),B(f.imageName()),n(),F(" (",f.fileSize()," KB) ")}}function he(m,p){if(m&1&&(r(0,"div"),C(1,ve,8,3,"div",23),o()),m&2){let f=S();n(),d("ngIf",f.selectedFile||f.imagePreview)}}var Ge=(()=>{let p=class p{constructor(t,i,e,a){this.titleService=t,this.route=i,this.formBuilder=e,this.snackBar=a,this.pageName="",this.breadCrumbs=[],this.buttonContent={},this.isBthShow=!1,this.imageName=g(""),this.fileSize=g(0),this.uploadProgress=g(0),this.imagePreview=g(""),this.selectedFile=null,this.uploadSuccess=!1,this.uploadError=!1,this.isSubmit=g(!1),this.isViewPasswordEnabled=g(!1),this.foods=[{value:"steak-0",viewValue:"Steak"},{value:"pizza-1",viewValue:"Pizza"},{value:"tacos-2",viewValue:"Tacos"}],this.userForm=new U({})}ngOnInit(){let t=[];this.setUpuserForm(t),this.route.data.subscribe(i=>{let e=i.title;e&&(this.pageName=e,this.titleService.setTitle(e)),i.breadcrumbs&&(this.breadCrumbs=i.breadcrumbs),i.btnData&&(this.buttonContent=i.btnData),i.isBtnData&&(this.isBthShow=i.isBtnData)})}setUpuserForm(t){this.userForm=this.formBuilder.group({firstname:["",[w.required,w.maxLength(100)]],lastname:["",[w.required,w.maxLength(100)]],email:["",[w.required,V.emailValidator]],profilePic:[t?.profilePic?t.profilePic:""],password:[t?.password?t.password:"",w.required]})}onFileChange(t){let i=t.target.files[0];this.uploadFile(i)}onFileDrop(t){t.preventDefault();let i=t.dataTransfer?.files[0];this.uploadFile(i)}onDragOver(t){t.preventDefault()}uploadFile(t){if(t&&t.type.startsWith("image/")){this.selectedFile=t,this.fileSize.set(Math.round(t.size/1024));let i=new FileReader;i.onload=e=>{this.imagePreview.set(e.target?.result)},i.readAsDataURL(t),this.uploadSuccess=!0,this.uploadError=!1,this.imageName.set(t.name)}else this.uploadSuccess=!1,this.uploadError=!0,this.snackBar.open("Only image files are supported!","Close",{duration:3e3,panelClass:"error"})}removeImage(){this.selectedFile=null,this.imageName.set(""),this.fileSize.set(0),this.imagePreview.set(""),this.uploadSuccess=!1,this.uploadError=!1,this.uploadProgress.set(0)}toggleViewPassword(){this.isViewPasswordEnabled()?this.isViewPasswordEnabled.set(!1):this.isViewPasswordEnabled.set(!0)}onSubmit(){if(this.isSubmit.set(!0),V.showFieldsError(this.userForm)){this.userForm.markAllAsTouched();return}console.log("val",this.userForm.value)}};p.\u0275fac=function(i){return new(i||p)(b(O),b(A),b(W),b(me))},p.\u0275cmp=E({type:p,selectors:[["app-profile-setting"]],viewQuery:function(i,e){if(i&1&&k(ce,5),i&2){let a;N(a=x())&&(e.fileInput=a.first)}},standalone:!0,features:[D],decls:49,vars:22,consts:[["fileInput",""],[1,"container-fluid"],[3,"title","breadCrumbsArr","btn","isBtnShow","classname"],[1,"w-100","d-flex","justify-content-center",3,"keyup.enter","formGroup"],[1,"form-container","w-99"],[1,"row","mb-3"],[1,"col-12","file-upload-wrapper-col"],[1,"file-upload-wrapper",3,"drop","dragover"],["type","file","accept","image/*","hidden","","formControlName","profilePic",3,"change"],[1,"file-dropper",3,"click"],[1,"row","mb-1"],[1,"col-6"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Your first name","formControlName","firstname"],[1,"d-flex","mt-1"],[3,"control","propertyLabel"],["matInput","","placeholder","Your last name","formControlName","lastname"],["matInput","","placeholder","Your email","formControlName","email"],["matInput","","placeholder","Write your Password","formControlName","password",3,"type"],["matSuffix","",3,"click"],[1,"row","mb-1","btn-submit"],[1,"col-12","d-flex","justify-content-end"],["mat-flat-button","","color","primary","type","submit",3,"click"],[4,"ngIf"],["alt","Image Preview",1,"image-preview",3,"src"],[1,"image-name"],[1,"delete-icon",3,"click"]],template:function(i,e){if(i&1){let a=y();l(0,"navbar"),r(1,"div",1),l(2,"sub-header",2),r(3,"form",3),v("keyup.enter",function(){return u(a),c(e.onSubmit())}),r(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),v("drop",function(h){return u(a),c(e.onFileDrop(h))})("dragover",function(h){return u(a),c(e.onDragOver(h))}),r(8,"input",8,0),v("change",function(h){return u(a),c(e.onFileChange(h))}),o(),r(10,"div",9),v("click",function(){u(a);let h=T(9);return c(h.click())}),C(11,fe,4,0)(12,he,2,1,"div"),o()()()(),r(13,"div",10)(14,"div",11)(15,"mat-form-field",12)(16,"mat-label"),s(17,"First Name"),o(),l(18,"input",13),r(19,"mat-error",14),l(20,"validation-message",15),o()()(),r(21,"div",11)(22,"mat-form-field",12)(23,"mat-label"),s(24,"Last Name"),o(),l(25,"input",16),r(26,"mat-error",14),l(27,"validation-message",15),o()()()(),r(28,"div",10)(29,"div",11)(30,"mat-form-field",12)(31,"mat-label"),s(32,"Email"),o(),l(33,"input",17),r(34,"mat-error",14),l(35,"validation-message",15),o()()(),r(36,"div",11)(37,"mat-form-field",12)(38,"mat-label"),s(39,"Password"),o(),l(40,"input",18),r(41,"mat-icon",19),v("click",function(){return u(a),c(e.toggleViewPassword())}),s(42),o(),r(43,"mat-error",14),l(44,"validation-message",15),o()()()()(),r(45,"div",20)(46,"div",21)(47,"button",22),v("click",function(){return u(a),c(e.onSubmit())}),s(48," Submit "),o()()()()()}i&2&&(n(2),d("title",e.pageName)("breadCrumbsArr",e.breadCrumbs)("btn",e.buttonContent)("isBtnShow",e.isBthShow)("classname","w-99"),n(),d("formGroup",e.userForm),n(4),I("success",e.uploadSuccess)("error",e.uploadError),n(4),P(e.imagePreview()?-1:11),n(),P(e.imageName()?12:-1),n(8),d("control",e.userForm.controls.firstname)("propertyLabel","First name"),n(7),d("control",e.userForm.controls.lastname)("propertyLabel","Last name"),n(8),d("control",e.userForm.controls.email)("propertyLabel","email"),n(5),d("type",e.isViewPasswordEnabled()?"text":"password"),n(2),F(" ",e.isViewPasswordEnabled()?"visibility_off":"visibility"," "),n(2),d("control",e.userForm.controls.password)("propertyLabel","Password"))},dependencies:[pe,re,ie,ee,X,Z,$,te,se,K,Q,R,q,G,J,Y,H,j,ne,oe,le,ae,z,L,ue,de],styles:[".form-container[_ngcontent-%COMP%]{margin-bottom:5rem}.btn-submit[_ngcontent-%COMP%]{position:fixed;bottom:25px;right:25px}.btn-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:10px}.w-99[_ngcontent-%COMP%]{width:99%}"]});let m=p;return m})();export{Ge as ProfileSettingComponent};
