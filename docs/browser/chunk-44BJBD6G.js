import{a as j,b as rt,c as ct,d as P,r as lt,s as dt}from"./chunk-SEYZPM5E.js";import{c as st,d as I,f as y,g as T,h as O}from"./chunk-IX6G3U3V.js";import{c as ot}from"./chunk-CTHCLFOV.js";import{B as at,a as et,q as nt,r as it}from"./chunk-LVFXDDXL.js";import{Db as K,Fb as X,Gb as Y,Hb as G,Ib as w,Mb as C,Nb as B,Ob as D,Qb as R,S as F,Sb as E,Ua as _,Va as c,X as L,Xa as H,Xb as M,_ as A,aa as m,ba as z,bb as Q,f as d,fa as x,ha as k,ib as U,jc as J,mb as S,na as N,nb as Z,oa as V,ta as f,tb as $,va as q,wc as tt,xb as g,yb as b,zb as W}from"./chunk-SRRR5EYJ.js";import{a as h}from"./chunk-7CGTOI24.js";function pt(s,i){if(s&1){let p=K();g(0,"div",1)(1,"button",2),Y("click",function(){N(p);let e=w();return V(e.action())}),R(2),b()()}if(s&2){let p=w();_(2),E(" ",p.data.action," ")}}var ft=["label"];function _t(s,i){}var bt=Math.pow(2,31)-1,v=class{constructor(i,p){this._overlayRef=p,this._afterDismissed=new d,this._afterOpened=new d,this._onAction=new d,this._dismissedByAction=!1,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,bt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},mt=new A("MatSnackBarData"),u=class{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}},vt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=k({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0});let s=i;return s})(),kt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=k({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0});let s=i;return s})(),gt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=k({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0});let s=i;return s})(),yt=(()=>{let i=class i{constructor(t,e){this.snackBarRef=t,this.data=e}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}};i.\u0275fac=function(e){return new(e||i)(c(v),c(mt))},i.\u0275cmp=x({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[M],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(g(0,"div",0),R(1),b(),S(2,pt,3,1,"div",1)),e&2&&(_(),E(" ",n.data.message,`
`),_(),$(n.hasAction?2:-1))},dependencies:[ot,vt,kt,gt],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0});let s=i;return s})(),At={snackBarState:st("state",[T("void, hidden",y({transform:"scale(0.8)",opacity:0})),T("visible",y({transform:"scale(1)",opacity:1})),O("* => visible",I("150ms cubic-bezier(0, 0, 0.2, 1)")),O("* => void, * => hidden",I("75ms cubic-bezier(0.4, 0.0, 1, 1)",y({opacity:0})))])},xt=0,St=(()=>{let i=class i extends ct{constructor(t,e,n,a,o){super(),this._ngZone=t,this._elementRef=e,this._changeDetectorRef=n,this._platform=a,this.snackBarConfig=o,this._document=z(tt),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new d,this._onExit=new d,this._onEnter=new d,this._animationState="void",this._liveElementId=`mat-snack-bar-container-live-${xt++}`,this.attachDomPortal=r=>{this._assertNotAttached();let l=this._portalOutlet.attachDomPortal(r);return this._afterPortalAttached(),l},o.politeness==="assertive"&&!o.announcementMessage?this._live="assertive":o.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}onAnimationEnd(t){let{fromState:e,toState:n}=t;if((n==="void"&&e!=="void"||n==="hidden")&&this._completeExit(),n==="visible"){let a=this._onEnter;this._ngZone.run(()=>{a.next(),a.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(o=>t.classList.add(o)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,a="mdc-snackbar__label";n.classList.toggle(a,!n.querySelector(`.${a}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let a=e[n],o=a.getAttribute("aria-owns");this._trackedModals.add(a),o?o.indexOf(t)===-1&&a.setAttribute("aria-owns",o+" "+t):a.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),e=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&e){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(n=document.activeElement),t.removeAttribute("aria-hidden"),e.appendChild(t),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}};i.\u0275fac=function(e){return new(e||i)(c(Q),c(q),c(J),c(et),c(u))},i.\u0275cmp=x({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&(C(P,7),C(ft,7)),e&2){let a;B(a=D())&&(n._portalOutlet=a.first),B(a=D())&&(n._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:1,hostBindings:function(e,n){e&1&&G("@state.done",function(o){return n.onAnimationEnd(o)}),e&2&&X("@state",n._animationState)},standalone:!0,features:[U,M],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(g(0,"div",1)(1,"div",2,0)(3,"div",3),S(4,_t,0,0,"ng-template",4),b(),W(5,"div"),b()()),e&2&&(_(5),Z("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[P],styles:[".mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}.cdk-high-contrast-active .mat-mdc-snackbar-surface{outline:solid 1px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color);border-radius:var(--mdc-snackbar-container-shape);background-color:var(--mdc-snackbar-container-color)}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font);font-size:var(--mdc-snackbar-supporting-text-size);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"],encapsulation:2,data:{animation:[At.snackBarState]}});let s=i;return s})();function wt(){return new u}var Ct=new A("mat-snack-bar-default-options",{providedIn:"root",factory:wt}),ne=(()=>{let i=class i{get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(t,e,n,a,o,r){this._overlay=t,this._live=e,this._injector=n,this._breakpointObserver=a,this._parentSnackBar=o,this._defaultConfig=r,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=yt,this.snackBarContainerComponent=St,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let a=h(h({},this._defaultConfig),n);return a.data={message:t,action:e},a.announcementMessage===t&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,a=f.create({parent:n||this._injector,providers:[{provide:u,useValue:e}]}),o=new j(this.snackBarContainerComponent,e.viewContainerRef,a),r=t.attach(o);return r.instance.snackBarConfig=e,r.instance}_attach(t,e){let n=h(h(h({},new u),this._defaultConfig),e),a=this._createOverlay(n),o=this._attachSnackBarContainer(a,n),r=new v(o,a);if(t instanceof H){let l=new rt(t,null,{$implicit:n.data,snackBarRef:r});r.instance=o.attachTemplatePortal(l)}else{let l=this._createInjector(n,r),ht=new j(t,void 0,l),ut=o.attachComponentPortal(ht);r.instance=ut.instance}return this._breakpointObserver.observe(it.HandsetPortrait).pipe(F(a.detachments())).subscribe(l=>{a.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration))}_createOverlay(t){let e=new lt;e.direction=t.direction;let n=this._overlay.position().global(),a=t.direction==="rtl",o=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!a||t.horizontalPosition==="end"&&a,r=!o&&t.horizontalPosition!=="center";return o?n.left("0"):r?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return f.create({parent:n||this._injector,providers:[{provide:v,useValue:e},{provide:mt,useValue:t.data}]})}};i.\u0275fac=function(e){return new(e||i)(m(dt),m(at),m(f),m(nt),m(i,12),m(Ct))},i.\u0275prov=L({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();export{ne as a};
