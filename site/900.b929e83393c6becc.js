"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[900],{9709:(f,l,c)=>{c.d(l,{U:()=>r});var t=c(8196);class r{constructor(){this.id=0,this.nombre="",this.comentario="",this.tipo=new t.o,this.estado="ACTIVO",this.facprn="1",this.orden=1}}},8196:(f,l,c)=>{c.d(l,{o:()=>t});class t{constructor(){this.id=0,this.nombre=""}}},1900:(f,l,c)=>{c.r(l),c.d(l,{ExistenciasModule:()=>P});var t=c(6814),r=c(7664),_=c(9709),i=c(4946),p=c(2848),m=c(1106),u=c(9324),g=c(7492),x=c(7841);const h=["ordeneditor"],M=[{path:"",component:(()=>{class d{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(a){return new(a||d)};static#n=this.\u0275cmp=i.Xpm({type:d,selectors:[["app-existencias-main"]],decls:1,vars:0,template:function(a,o){1&a&&i._UZ(0,"router-outlet")},dependencies:[r.lC],encapsulation:2})}return d})(),children:[{path:"",component:(()=>{class d{constructor(n,a){this.dataService=n,this.confirmService=a,this.display=!0,this.producto=new _.U,this.dataFindProducto={path:"/almacen/stock/r/productos",columns:["id","nombre"]},this.saldos={content:[],columns:[{field:"entradaorden.orden",columnName:"Ord",editable:!0,input:{type:"numeric",precision:"17",scale:"4"}},{field:"nota.cuenta.nombre",columnName:"Cuenta",editable:!1},{field:"fecha",columnName:"Fecha",type:"datetime",editable:!1},{field:"cantidad",columnName:"Cantidad",editable:!1},{field:"pu",columnName:"Pu",editable:!1},{field:"existencia.saldo",columnName:"Saldo",align:"right",editable:!1}]},this.historial={content:[],columns:[{field:"nota.cuenta.nombre",columnName:"Cuenta"},{field:"fecha",columnName:"Fecha",type:"datetime"},{field:"cantidad",columnName:"Cantidad"},{field:"pu",columnName:"Pu"},{field:"existencia.saldo",columnName:"Saldo",align:"right"}],foot:{content:["TOTAL SALDO:",0],cols:[{colspan:"4",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}}}ngOnInit(){}findProductoSelected(n){this.producto=n,this.getsaldos(),this.gethistorial()}cellEnterValue(n){mosetfieldvalue(this.saldos.content[n.row],n.field,n.value),this.dataService.postdata("/almacen/stock/w/changeorden",this.saldos.content[n.row]).subscribe(o=>{this.getsaldos()})}getsaldos(){this.dataService.getdata("/almacen/stock/r/saldos",{id:this.producto.id}).subscribe(n=>{this.saldos.content=n,this.ordeneditor.updateData(this.saldos.content)})}gethistorial(){this.dataService.getdata("/almacen/stock/r/historial",{id:this.producto.id}).subscribe(n=>{this.historial.content=n})}static#t=this.\u0275fac=function(a){return new(a||d)(i.Y36(p.D),i.Y36(m.I))};static#n=this.\u0275cmp=i.Xpm({type:d,selectors:[["app-existencias-historial"]],viewQuery:function(a,o){if(1&a&&i.Gf(h,7),2&a){let e;i.iGM(e=i.CRH())&&(o.ordeneditor=e.first)}},decls:16,vars:4,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second","form-group"],["for","entidad"],["id","producto",3,"config","itemSelected"],[1,"mo-panel-content"],[3,"data","cellEnterValueEvent"],["ordeneditor",""],[3,"data"]],template:function(a,o){1&a&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),i._uU(7,"Historial de existencias:"),i.qZA()(),i.TgZ(8,"div",6)(9,"label",7),i._uU(10,"Buscar Producto:"),i.qZA(),i.TgZ(11,"mo-autocomplete",8),i.NdJ("itemSelected",function(s){return o.findProductoSelected(s)}),i.qZA()()(),i.TgZ(12,"div",9)(13,"mo-dataeditor",10,11),i.NdJ("cellEnterValueEvent",function(s){return o.cellEnterValue(s)}),i.qZA(),i._UZ(15,"mo-report",12),i.qZA()()()()()),2&a&&(i.Q6J("hidden",!o.display),i.xp6(11),i.Q6J("config",o.dataFindProducto),i.xp6(2),i.Q6J("data",o.saldos),i.xp6(2),i.Q6J("data",o.historial))},dependencies:[u.t,g.J,x.q],encapsulation:2})}return d})()},{path:"**",redirectTo:""}]}];let C=(()=>{class d{static#t=this.\u0275fac=function(a){return new(a||d)};static#n=this.\u0275mod=i.oAB({type:d});static#o=this.\u0275inj=i.cJS({imports:[r.Bz.forChild(M),r.Bz]})}return d})();var v=c(8368),O=c(4553),E=c(2454),T=c(4858);let P=(()=>{class d{static#t=this.\u0275fac=function(a){return new(a||d)};static#n=this.\u0275mod=i.oAB({type:d});static#o=this.\u0275inj=i.cJS({imports:[t.ez,C,v.U,O.W,E.q,T.V]})}return d})()},9324:(f,l,c)=>{c.d(l,{t:()=>A});var t=c(4946),r=c(6814),_=c(4621),i=c(2415),p=c(7635);function m(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.data.caption)}}function u(n,a){if(1&n&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&n){const o=t.oxw(),e=o.index,s=o.$implicit,Z=t.oxw();t.Udp("text-align",Z.data.columns[e].align),t.xp6(1),t.hij("",s.columnName," ")}}function g(n,a){1&n&&t._UZ(0,"th",5)}function x(n,a){if(1&n&&(t.ynx(0),t.YNc(1,u,2,3,"th",3),t.YNc(2,g,1,0,"th",4),t.BQk()),2&n){const o=a.$implicit;t.xp6(1),t.Q6J("ngIf",o.field),t.xp6(1),t.Q6J("ngIf",!o.field)}}function h(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"td",5),t._uU(2),t.qZA(),t.BQk()),2&n){const o=a.$implicit,e=t.oxw(2);t.xp6(1),t.Udp("text-align",o.align),t.uIk("colspan",o.colspan),t.xp6(1),t.hij("",e.data.foot.content[o.index]," ")}}function w(n,a){if(1&n&&(t.TgZ(0,"tfoot")(1,"tr"),t.YNc(2,h,3,4,"ng-container",2),t.qZA()()),2&n){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.data.foot.cols)}}function y(n,a){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const o=t.oxw().index,e=t.oxw().index,s=t.oxw();t.Udp("text-align",s.data.columns[o].align),t.xp6(1),t.Oqu(s.getfieldvalue(e,o))}}function M(n,a){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"dateFormat"),t.qZA()),2&n){const o=t.oxw().index,e=t.oxw().index,s=t.oxw();t.Udp("text-align",s.data.columns[o].align),t.xp6(1),t.Oqu(t.lcZ(2,3,s.getfieldvalue(e,o)))}}function C(n,a){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"datetimeFormat"),t.qZA()),2&n){const o=t.oxw().index,e=t.oxw().index,s=t.oxw();t.Udp("text-align",s.data.columns[o].align),t.xp6(1),t.Oqu(t.lcZ(2,3,s.getfieldvalue(e,o)))}}function v(n,a){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"periodmonthFormat"),t.qZA()),2&n){const o=t.oxw().index,e=t.oxw().index,s=t.oxw();t.Udp("text-align",s.data.columns[o].align),t.xp6(1),t.Oqu(t.lcZ(2,3,s.getfieldvalue(e,o)))}}function O(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"a",12),t.NdJ("click",function(s){t.CHM(o);const Z=t.oxw().$implicit,U=t.oxw(3).$implicit,I=t.oxw();return t.KtG(I.actionEvent(s,U,Z.event))}),t.TgZ(1,"i"),t._uU(2),t.qZA()()}if(2&n){const o=t.oxw().$implicit;t.xp6(1),t.Tol(o.iconclass),t.xp6(1),t.Oqu(o.iconname)}}function E(n,a){if(1&n&&(t.ynx(0),t.YNc(1,O,3,4,"a",11),t.BQk()),2&n){const o=a.$implicit,e=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf",o.condition(e))}}function T(n,a){if(1&n&&(t.TgZ(0,"td",9)(1,"div",10),t.YNc(2,E,2,1,"ng-container",2),t.qZA()()),2&n){const o=t.oxw().index,e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",e.data.columns[o].actions)}}function P(n,a){if(1&n&&(t.ynx(0),t.YNc(1,y,2,3,"td",7),t.YNc(2,M,3,5,"td",7),t.YNc(3,C,3,5,"td",7),t.YNc(4,v,3,5,"td",7),t.YNc(5,T,3,1,"td",8),t.BQk()),2&n){const o=a.index,e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.data.columns[o].field&&void 0===e.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",e.data.columns[o].field&&"date"===e.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",e.data.columns[o].field&&"datetime"===e.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",e.data.columns[o].field&&"periodmonth"===e.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",!e.data.columns[o].field)}}function d(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"tr",6),t.YNc(2,P,6,5,"ng-container",2),t.qZA(),t.BQk()),2&n){const o=a.$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngClass",void 0!==e.data.rowclass?e.data.rowclass(o,e.data.val):e.data.rows.condition(o)?e.data.rows.class:""),t.xp6(1),t.Q6J("ngForOf",e.data.columns)}}let A=(()=>{class n{constructor(){this.fielddefault={align:"left"},this.rows={class:"",condition:o=>!1},this.action=new t.vpe}ngOnInit(){for(let o of this.data.columns)void 0!==o.field&&mosetdefaults(this.fielddefault,o);void 0===this.data.rows&&(this.data.rows=this.rows)}getfieldvalue(o,e){return mogetfieldvalue(this.data.content[o],this.data.columns[e].field)}actionEvent(o,e,s){o.preventDefault(),this.action.emit({event:s,row:e})}static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["mo-report"]],inputs:{data:"data"},outputs:{action:"action"},decls:9,vars:4,consts:[[1,"customers"],[4,"ngIf"],[4,"ngFor","ngForOf"],["scope","col",3,"text-align",4,"ngIf"],["scope","col",4,"ngIf"],["scope","col"],[3,"ngClass"],[3,"text-align",4,"ngIf"],["style","padding: 0;",4,"ngIf"],[2,"padding","0"],[1,"mo-reportactions"],["href","#",3,"click",4,"ngIf"],["href","#",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"table",0)(1,"caption"),t.YNc(2,m,2,1,"ng-container",1),t.qZA(),t.TgZ(3,"thead")(4,"tr"),t.YNc(5,x,3,2,"ng-container",2),t.qZA()(),t.YNc(6,w,3,1,"tfoot",1),t.TgZ(7,"tbody"),t.YNc(8,d,3,2,"ng-container",2),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngIf",s.data.caption),t.xp6(3),t.Q6J("ngForOf",s.data.columns),t.xp6(1),t.Q6J("ngIf",s.data.foot),t.xp6(2),t.Q6J("ngForOf",s.data.content))},dependencies:[r.mk,r.sg,r.O5,_.L,i.E,p.v],styles:[".customers[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.customers[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.4em;color:#3e3e3e;font-weight:700}.customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #f2f2f2}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;text-align:center;background-color:#464646;color:#fff}.customers[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{padding-top:2px;padding-bottom:2px;color:#383838;font-weight:700}"]})}return n})()},4553:(f,l,c)=>{c.d(l,{W:()=>i});var t=c(6814),r=c(9177),_=c(4946);let i=(()=>{class p{static#t=this.\u0275fac=function(g){return new(g||p)};static#n=this.\u0275mod=_.oAB({type:p});static#o=this.\u0275inj=_.cJS({imports:[t.ez,r.A]})}return p})()},7635:(f,l,c)=>{c.d(l,{v:()=>_});var t=c(4946),r=c(6814);let _=(()=>{class i{constructor(m){this.datePipe=m}transform(m,...u){return this.datePipe.transform(m,"MM/yyyy")}static#t=this.\u0275fac=function(u){return new(u||i)(t.Y36(r.uU,16))};static#n=this.\u0275pipe=t.Yjl({name:"periodmonthFormat",type:i,pure:!0})}return i})()}}]);