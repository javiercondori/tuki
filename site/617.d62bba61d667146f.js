"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[617],{6617:(x,u,a)=>{a.r(u),a.d(u,{ExistenciaModule:()=>v});var t=a(6814),l=a(7664),i=a(4946),c=a(2655);let f=(()=>{class s{constructor(){}ngOnInit(){this.items=[{label:"Almacen"},{label:"Inventario"}],this.home={icon:"pi pi-home",routerLink:"/"}}static#t=this.\u0275fac=function(m){return new(m||s)};static#n=this.\u0275cmp=i.Xpm({type:s,selectors:[["app-inventario-main"]],decls:2,vars:2,consts:[[3,"model","home"]],template:function(m,h){1&m&&i._UZ(0,"p-breadcrumb",0)(1,"router-outlet"),2&m&&i.Q6J("model",h.items)("home",h.home)},dependencies:[l.lC,c.a],encapsulation:2})}return s})();var _=a(7757),p=a(9324);const O=[{path:"",component:f,children:[{path:"",component:(()=>{class s{constructor(g){this.dataService=g,this.report={content:[],columns:[{field:"producto.id",columnName:"PrO ID"},{field:"producto.tipo.nombre",columnName:"Tipo"},{field:"producto.nombre",columnName:"Nombre"},{field:"saldo",columnName:"Existencia",align:"right"}]}}ngOnInit(){this.getdata()}saveForm(){this.getdata()}getdata(){this.dataService.getdata("/almacen/stock",{}).subscribe(g=>{this.report.content=g})}static#t=this.\u0275fac=function(m){return new(m||s)(i.Y36(_.D))};static#n=this.\u0275cmp=i.Xpm({type:s,selectors:[["app-inventario-saldos"]],decls:10,vars:1,consts:[[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-panel-content"],[3,"data"]],template:function(m,h){1&m&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),i._uU(7,"Existencia de productos"),i.qZA()()(),i.TgZ(8,"div",6),i._UZ(9,"mo-report",7),i.qZA()()()()()),2&m&&(i.xp6(9),i.Q6J("data",h.report))},dependencies:[p.t],encapsulation:2})}return s})()},{path:"**",redirectTo:""}]}];let E=(()=>{class s{static#t=this.\u0275fac=function(m){return new(m||s)};static#n=this.\u0275mod=i.oAB({type:s});static#o=this.\u0275inj=i.cJS({imports:[l.Bz.forChild(O),l.Bz]})}return s})();var C=a(8368),P=a(4553);let v=(()=>{class s{static#t=this.\u0275fac=function(m){return new(m||s)};static#n=this.\u0275mod=i.oAB({type:s});static#o=this.\u0275inj=i.cJS({imports:[t.ez,E,C.U,P.W]})}return s})()},9324:(x,u,a)=>{a.d(u,{t:()=>I});var t=a(4946),l=a(6814),i=a(4621),c=a(2415),f=a(7635);function _(o,d){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.data.caption)}}function p(o,d){if(1&o&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&o){const n=t.oxw(),e=n.index,r=n.$implicit,T=t.oxw();t.Udp("text-align",T.data.columns[e].align),t.xp6(1),t.hij("",r.columnName," ")}}function M(o,d){1&o&&t._UZ(0,"th",5)}function O(o,d){if(1&o&&(t.ynx(0),t.YNc(1,p,2,3,"th",3),t.YNc(2,M,1,0,"th",4),t.BQk()),2&o){const n=d.$implicit;t.xp6(1),t.Q6J("ngIf",n.field),t.xp6(1),t.Q6J("ngIf",!n.field)}}function E(o,d){if(1&o&&(t.ynx(0),t.TgZ(1,"td",5),t._uU(2),t.qZA(),t.BQk()),2&o){const n=d.$implicit,e=t.oxw(2);t.xp6(1),t.Udp("text-align",n.align),t.uIk("colspan",n.colspan),t.xp6(1),t.hij("",e.data.foot.content[n.index]," ")}}function C(o,d){if(1&o&&(t.TgZ(0,"tfoot")(1,"tr"),t.YNc(2,E,3,4,"ng-container",2),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.data.foot.cols)}}function P(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const n=t.oxw().index,e=t.oxw().index,r=t.oxw();t.Udp("text-align",r.data.columns[n].align),t.xp6(1),t.Oqu(r.getfieldvalue(e,n))}}function v(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"dateFormat"),t.qZA()),2&o){const n=t.oxw().index,e=t.oxw().index,r=t.oxw();t.Udp("text-align",r.data.columns[n].align),t.xp6(1),t.Oqu(t.lcZ(2,3,r.getfieldvalue(e,n)))}}function s(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"datetimeFormat"),t.qZA()),2&o){const n=t.oxw().index,e=t.oxw().index,r=t.oxw();t.Udp("text-align",r.data.columns[n].align),t.xp6(1),t.Oqu(t.lcZ(2,3,r.getfieldvalue(e,n)))}}function y(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"periodmonthFormat"),t.qZA()),2&o){const n=t.oxw().index,e=t.oxw().index,r=t.oxw();t.Udp("text-align",r.data.columns[n].align),t.xp6(1),t.Oqu(t.lcZ(2,3,r.getfieldvalue(e,n)))}}function g(o,d){if(1&o){const n=t.EpF();t.TgZ(0,"a",12),t.NdJ("click",function(r){t.CHM(n);const T=t.oxw().$implicit,D=t.oxw(3).$implicit,Z=t.oxw();return t.KtG(Z.actionEvent(r,D,T.event))}),t.TgZ(1,"span"),t._uU(2),t.qZA()()}if(2&o){const n=t.oxw().$implicit;t.xp6(1),t.Tol(n.iconclass),t.xp6(1),t.Oqu(n.iconname)}}function m(o,d){if(1&o&&(t.ynx(0),t.YNc(1,g,3,4,"a",11),t.BQk()),2&o){const n=d.$implicit,e=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf",n.condition(e))}}function h(o,d){if(1&o&&(t.TgZ(0,"td",9)(1,"div",10),t.YNc(2,m,2,1,"ng-container",2),t.qZA()()),2&o){const n=t.oxw().index,e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",e.data.columns[n].actions)}}function A(o,d){if(1&o&&(t.ynx(0),t.YNc(1,P,2,3,"td",7),t.YNc(2,v,3,5,"td",7),t.YNc(3,s,3,5,"td",7),t.YNc(4,y,3,5,"td",7),t.YNc(5,h,3,1,"td",8),t.BQk()),2&o){const n=d.index,e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.data.columns[n].field&&void 0===e.data.columns[n].type),t.xp6(1),t.Q6J("ngIf",e.data.columns[n].field&&"date"===e.data.columns[n].type),t.xp6(1),t.Q6J("ngIf",e.data.columns[n].field&&"datetime"===e.data.columns[n].type),t.xp6(1),t.Q6J("ngIf",e.data.columns[n].field&&"periodmonth"===e.data.columns[n].type),t.xp6(1),t.Q6J("ngIf",!e.data.columns[n].field)}}function U(o,d){if(1&o&&(t.ynx(0),t.TgZ(1,"tr",6),t.YNc(2,A,6,5,"ng-container",2),t.qZA(),t.BQk()),2&o){const n=d.$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngClass",e.data.rows.condition(n)?e.data.rows.class:""),t.xp6(1),t.Q6J("ngForOf",e.data.columns)}}let I=(()=>{class o{constructor(){this.fielddefault={align:"left"},this.rows={class:"",condition:n=>!1},this.action=new t.vpe}ngOnInit(){for(let n of this.data.columns)void 0!==n.field&&mosetdefaults(this.fielddefault,n);void 0===this.data.rows&&(this.data.rows=this.rows)}getfieldvalue(n,e){return mogetfieldvalue(this.data.content[n],this.data.columns[e].field)}actionEvent(n,e,r){n.preventDefault(),this.action.emit({event:r,row:e})}static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["mo-report"]],inputs:{data:"data"},outputs:{action:"action"},decls:9,vars:4,consts:[[1,"customers"],[4,"ngIf"],[4,"ngFor","ngForOf"],["scope","col",3,"text-align",4,"ngIf"],["scope","col",4,"ngIf"],["scope","col"],[3,"ngClass"],[3,"text-align",4,"ngIf"],["style","padding: 0;",4,"ngIf"],[2,"padding","0"],[1,"mo-reportactions"],["href","#",3,"click",4,"ngIf"],["href","#",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"table",0)(1,"caption"),t.YNc(2,_,2,1,"ng-container",1),t.qZA(),t.TgZ(3,"thead")(4,"tr"),t.YNc(5,O,3,2,"ng-container",2),t.qZA()(),t.YNc(6,C,3,1,"tfoot",1),t.TgZ(7,"tbody"),t.YNc(8,U,3,2,"ng-container",2),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngIf",r.data.caption),t.xp6(3),t.Q6J("ngForOf",r.data.columns),t.xp6(1),t.Q6J("ngIf",r.data.foot),t.xp6(2),t.Q6J("ngForOf",r.data.content))},dependencies:[l.mk,l.sg,l.O5,i.L,c.E,f.v],styles:[".customers[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.customers[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.4em;color:#3e3e3e;font-weight:700}.customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #f2f2f2}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;text-align:center;background-color:#464646;color:#fff}.customers[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{padding-top:2px;padding-bottom:2px;color:#383838;font-weight:700}"]})}return o})()},4553:(x,u,a)=>{a.d(u,{W:()=>c});var t=a(6814),l=a(9177),i=a(4946);let c=(()=>{class f{static#t=this.\u0275fac=function(M){return new(M||f)};static#n=this.\u0275mod=i.oAB({type:f});static#o=this.\u0275inj=i.cJS({imports:[t.ez,l.A]})}return f})()},2415:(x,u,a)=>{a.d(u,{E:()=>i});var t=a(4946),l=a(6814);let i=(()=>{class c{constructor(_){this.datePipe=_}transform(_,...p){return this.datePipe.transform(_,"dd/MM/yyyy")}static#t=this.\u0275fac=function(p){return new(p||c)(t.Y36(l.uU,16))};static#n=this.\u0275pipe=t.Yjl({name:"dateFormat",type:c,pure:!0})}return c})()},4621:(x,u,a)=>{a.d(u,{L:()=>i});var t=a(4946),l=a(6814);let i=(()=>{class c{constructor(_){this.datePipe=_}transform(_,...p){return this.datePipe.transform(_,"dd/MM/yyyy H:mm:ss")}static#t=this.\u0275fac=function(p){return new(p||c)(t.Y36(l.uU,16))};static#n=this.\u0275pipe=t.Yjl({name:"datetimeFormat",type:c,pure:!0})}return c})()},9177:(x,u,a)=>{a.d(u,{A:()=>i});var t=a(6814),l=a(4946);let i=(()=>{class c{static#t=this.\u0275fac=function(p){return new(p||c)};static#n=this.\u0275mod=l.oAB({type:c});static#o=this.\u0275inj=l.cJS({providers:[t.uU],imports:[t.ez]})}return c})()},7635:(x,u,a)=>{a.d(u,{v:()=>i});var t=a(4946),l=a(6814);let i=(()=>{class c{constructor(_){this.datePipe=_}transform(_,...p){return this.datePipe.transform(_,"MM/yyyy")}static#t=this.\u0275fac=function(p){return new(p||c)(t.Y36(l.uU,16))};static#n=this.\u0275pipe=t.Yjl({name:"periodmonthFormat",type:c,pure:!0})}return c})()}}]);