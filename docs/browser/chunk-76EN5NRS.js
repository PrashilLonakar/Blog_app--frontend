import{a as W,b as q,c as G,d as K,e as Q,f as V,g as X}from"./chunk-ULNLV2SK.js";import{a as J}from"./chunk-J7MB7LBM.js";import{a as z,b as H,d as R,e as P,g as O}from"./chunk-CTHCLFOV.js";import{a as D,b as U,c as B,d as F,e as E,f as x,g as A,h as N,i as j}from"./chunk-HQVBUQVU.js";import"./chunk-LVFXDDXL.js";import{d as y,g as L,j as T}from"./chunk-5NDPCXT6.js";import{$b as w,Gb as h,Hc as I,Ic as M,Qb as r,Ra as v,Rb as u,Sb as k,Ua as n,Va as m,Xb as g,Yb as d,Zb as S,_b as _,fa as C,mb as f,ob as p,tb as b,xb as o,yb as a,zb as c}from"./chunk-SRRR5EYJ.js";import"./chunk-7CGTOI24.js";var Z=i=>["/posts/detail",i],$=()=>["fas","thumbs-up"],tt=()=>["far","thumbs-up"],et=()=>["fas","thumbs-down"],it=()=>["far","thumbs-down"];function nt(i,l){i&1&&c(0,"fa-icon",17),i&2&&p("icon",d(1,$))}function ot(i,l){i&1&&c(0,"fa-icon",17),i&2&&p("icon",d(1,tt))}function at(i,l){i&1&&c(0,"fa-icon",17),i&2&&p("icon",d(1,et))}function lt(i,l){i&1&&c(0,"fa-icon",17),i&2&&p("icon",d(1,it))}var yt=(()=>{let l=class l{constructor(e,s,t){this.titleService=e,this.route=s,this.pageName="",this.breadCrumbs=[],this.buttonContent={},this.isBthShow=!1,this.post={},t.addIcons(Q,X,K,V)}ngOnInit(){this.settingSubHeader(),this.post={id:3,firstName:"Shiba Inu",userName:"Dog Breed",userImg:"",postImg:"https://material.angular.io/assets/img/examples/shiba2.jpg",date:"2022-03-25",title:"Why Shiba Inu",description:`The Shiba Inu is the smallest of the six original and distinct spitz
        breeds of dog from Japan. A small, agile dog that copes very well with
        mountainous terrain, the Shiba Inu was originally bred for hunting.`,isLiked:!1,likeCount:1,isUnLiked:!1,unlikeCount:0}}settingSubHeader(){this.route.data.subscribe(e=>{let s=e.title;s&&(this.pageName=s,this.titleService.setTitle(s)),e.breadcrumbs&&(this.breadCrumbs=e.breadcrumbs),e.btnData&&(this.buttonContent=e.btnData),e.isBtnData&&(this.isBthShow=e.isBtnData)})}onLike(e){e.isLiked?(e.isLiked=!1,e.likeCount-=1):(e.isLiked=!0,e.likeCount+=1,e.isUnLiked&&(e.isUnLiked=!1,e.unlikeCount-=1))}onUnlike(e){e.isUnLiked?(e.isUnLiked=!1,e.unlikeCount-=1):(e.isUnLiked=!0,e.unlikeCount+=1,e.isLiked&&(e.isLiked=!1,e.likeCount-=1))}};l.\u0275fac=function(s){return new(s||l)(m(y),m(L),m(W))},l.\u0275cmp=C({type:l,selectors:[["app-detail"]],standalone:!0,features:[g],decls:36,vars:20,consts:[[3,"title","breadCrumbsArr","btn","isBtnShow"],[1,"container"],[1,"row"],[1,"col-12","post-detail-container"],["appearance","outlined",1,"example-card","mb-5","mat-elevation-z8","post-content"],[1,"post-header"],["mat-card-avatar","",1,"user-profile-img"],[1,"user-profile-icon"],["mat-card-image","","alt","Photo of a Shiba Inu",3,"src"],[1,"mt-3","post-text-content"],[1,"post-date","fw-normal"],["mat-button","",1,"post-title","fw-bold","ps-0",3,"routerLink"],[1,"post-description"],[1,"post-actions"],[1,"d-flex","gap-3"],[1,"d-flex","like-content"],["mat-mini-fab","","color","basic",1,"btn-like",3,"click"],[3,"icon"],[1,"like-count","d-flex","justify-content-center","align-items-center"],[1,"d-flex","unlike-content"],["mat-mini-fab","","color","basic",1,"btn-unlike",3,"click"],[1,"unlike-count","d-flex","justify-content-center","align-items-center"]],template:function(s,t){s&1&&(c(0,"sub-header",0),o(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-card",4)(5,"mat-card-header",5)(6,"div",6)(7,"mat-icon",7),r(8,"account_circle"),a()(),o(9,"mat-card-title"),r(10),a(),o(11,"mat-card-subtitle"),r(12),a()(),c(13,"img",8),o(14,"mat-card-content",9)(15,"p",10),r(16),_(17,"date"),a(),o(18,"a",11),r(19),a(),o(20,"p",12),r(21),a()(),o(22,"mat-card-actions",13)(23,"div",14)(24,"div",15)(25,"button",16),h("click",function(){return t.onLike(t.post)}),f(26,nt,1,2,"fa-icon",17)(27,ot,1,2,"fa-icon",17),a(),o(28,"span",18),r(29),a()(),o(30,"div",19)(31,"button",20),h("click",function(){return t.onUnlike(t.post)}),f(32,at,1,2,"fa-icon",17)(33,lt,1,2,"fa-icon",17),a(),o(34,"span",21),r(35),a()()()()()()()()),s&2&&(p("title",t.pageName)("breadCrumbsArr",t.breadCrumbs)("btn",t.buttonContent)("isBtnShow",t.isBthShow),n(10),u(t.post==null?null:t.post.firstName),n(2),u(t.post==null?null:t.post.userName),n(),p("src",t.post==null?null:t.post.postImg,v),n(3),k(" ",w(17,15,t.post==null?null:t.post.date,"short")," "),n(2),p("routerLink",S(18,Z,t.post==null?null:t.post.id)),n(),u(t.post==null?null:t.post.title),n(2),k(" ",t.post==null?null:t.post.description," "),n(5),b(t.post!=null&&t.post.isLiked?26:27),n(3),u(t.post!=null&&t.post.likeCount?t.post==null?null:t.post.likeCount:0),n(3),b(t.post!=null&&t.post.isUnLiked?32:33),n(3),u(t.post!=null&&t.post.unlikeCount?t.post==null?null:t.post.unlikeCount:0))},dependencies:[J,j,D,E,N,B,x,A,F,U,O,R,P,H,z,M,I,G,q,T],styles:[".post-detail-container{height:calc(100vh - 174px);overflow-y:auto}  .post-detail-container .post-content .post-header .user-profile-icon{font-size:40px;width:40px;height:40px}  .post-detail-container .post-content .post-text-content .post-title{font-size:1.75rem;color:var(--primary-dark-0)}  .post-detail-container .post-content .post-text-content .post-title a:hover{cursor:pointer;text-decoration:underline}  .post-detail-container .post-content .post-actions .like-content .mdc-fab,   .post-detail-container .post-content .post-actions .unlike-content .mdc-fab{background-color:transparent;border-radius:50%;box-shadow:none}  .post-detail-container .post-content .post-actions .like-content .mdc-fab .svg-inline--fa,   .post-detail-container .post-content .post-actions .unlike-content .mdc-fab .svg-inline--fa{width:30px;height:30px}  .post-detail-container .post-content .post-actions .like-content .btn-like,   .post-detail-container .post-content .post-actions .like-content .btn-unlike,   .post-detail-container .post-content .post-actions .unlike-content .btn-like,   .post-detail-container .post-content .post-actions .unlike-content .btn-unlike{cursor:pointer;color:var(--primary-dark-0)}  .post-detail-container .post-content .post-actions .like-content .like-count,   .post-detail-container .post-content .post-actions .like-content .unlike-count,   .post-detail-container .post-content .post-actions .unlike-content .like-count,   .post-detail-container .post-content .post-actions .unlike-content .unlike-count{width:30px;height:40px;font-size:22px;color:var(--primary-dark-0)}[_ngcontent-%COMP%]::-webkit-scrollbar{width:.25em;height:.25em}"]});let i=l;return i})();export{yt as DetailComponent};
