"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[309],{8309:(w,f,r)=>{r.r(f),r.d(f,{VentaagalponModule:()=>Mt});var d=r(6814),c=r(7664),t=r(4946);let v=(()=>{class i{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["ventaagalpon-main"]],decls:1,vars:0,template:function(n,a){1&n&&t._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2})}return i})();var m=r(5413),h=r(7757),b=r(1106),p=r(3259),u=r(95),x=r(156),T=r(9324),y=r(1532),I=r(7213),C=r(6084),A=r(707),S=r(6130),L=r(2898),F=r(2772),Z=r(9715),D=r(7492);let P=(()=>{class i{constructor(e){this.dataService=e,this.galpon=new Z.e,this.list=[],this.dataresumen={content:[],columns:[{field:"notatipo",columnName:"Tipos"},{field:"producto.id",columnName:"ID"},{field:"producto.nombre",columnName:"Producto"},{field:"cantidad",columnName:"Cantidad"}],foot:{content:["TOTAL",0],cols:[{colspan:"2",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}},this.findcuentacfg={path:"/ventas/ventaagalpon/byentidad",columns:["id","nombre"]},this.columns=[{field:"nota.id",columnName:"ID"},{field:"nota.fechapendiente",columnName:"F.Pedido",type:"datetime"},{field:"nota.tipo",columnName:"Tipo"},{field:"notadetalle.producto.nombre",columnName:"Producto"},{field:"notadetalle.cantidad",columnName:"Cantidad"},{field:"nota.estado",columnName:"Estado"}]}ngOnInit(){}updateData(e){this.galpon.cuenta=e,this.getGalpon(),this.getData()}getGalpon(){this.dataService.getdata("/ventas/ventaagalpon/galpon",{id:this.galpon.cuenta.id}).subscribe(e=>{this.galpon=e})}getData(){this.dataService.getdata("/ventas/ventaagalpon/resumenalimento",{id:this.galpon.cuenta.id}).subscribe(e=>{this.dataresumen.content=e,this.dataresumen.foot.content[1]=this.dataresumen.content.reduce((n,a)=>"ENTREGA"===a.notatipo?n+a.cantidad:n-a.cantidad,0)}),this.dataService.getdata("/ventas/ventaagalpon/galponnotas",{id:this.galpon.cuenta.id}).subscribe(e=>{this.list=e})}tableAction(e){}cuentaSelected(e){this.galpon.cuenta=e,this.getGalpon(),this.getData()}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(h.D))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["galpondetalle"]],decls:29,vars:11,consts:[[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["for","entidad"],[3,"config","itemSelected"],[1,"p-fluid","grid","mo-panel-content"],[1,"p-field","col-12","md:col-12","form-group"],[1,"input-control"],[1,"p-field","col-12","md:col-12"],[3,"data"],[3,"datatable","columns","action"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Detalle de entregas"),t.qZA()(),t.TgZ(5,"div",3)(6,"label",4),t._uU(7,"Buscar entidad:"),t.qZA(),t.TgZ(8,"mo-autocomplete",5),t.NdJ("itemSelected",function(s){return a.cuentaSelected(s)}),t.qZA()()(),t.TgZ(9,"div",6)(10,"div",7)(11,"label"),t._uU(12,"Entidad:"),t.qZA(),t.TgZ(13,"span",8),t._uU(14),t.qZA()(),t.TgZ(15,"div",7)(16,"label"),t._uU(17,"Cuenta:"),t.qZA(),t.TgZ(18,"span",8),t._uU(19),t.qZA()(),t.TgZ(20,"div",7)(21,"label"),t._uU(22,"Cantidad:"),t.qZA(),t.TgZ(23,"span",8),t._uU(24),t.qZA()(),t.TgZ(25,"div",9),t._UZ(26,"mo-report",10),t.qZA(),t.TgZ(27,"div",9)(28,"mo-table",11),t.NdJ("action",function(s){return a.tableAction(s)}),t.qZA()()()()),2&n&&(t.xp6(8),t.Q6J("config",a.findcuentacfg),t.xp6(6),t.lnq("",a.galpon.cuenta.entidad.id," | ",a.galpon.cuenta.entidad.nombre," | ",a.galpon.cuenta.entidad.direccion,""),t.xp6(5),t.lnq("",a.galpon.cuenta.id," | ",a.galpon.cuenta.nombre," | ",a.galpon.cuenta.descripcion,""),t.xp6(5),t.Oqu(a.galpon.cantidad),t.xp6(2),t.Q6J("data",a.dataresumen),t.xp6(2),t.Q6J("datatable",a.list)("columns",a.columns))},dependencies:[x.I,D.J,T.t],encapsulation:2})}return i})();const N=["respform"],V=["notaform"],R=["notamanage"],B=["galpondetalle"];let H=(()=>{class i{constructor(e,n){this.formBuilder=e,this.dataService=n,this.ruta="/ventas/ventaagalpon",this.display=!1,this.transporte=new m.e,this.formEvent=new t.vpe}ngOnInit(){}salir(){this.display=!1,this.formEvent.emit({})}newForm(e){this.transporte=e,this.respform.open(this.transporte),this.display=!0}updateForm(e){this.transporte=e,this.display=!0,this.respform.open(this.transporte),this.clearNotaForm()}onNotaFormEvent(e){switch(e.action){case"found":this.galpondetalle.updateData(e.data);break;case"update":this.galpondetalle.updateData(e.data.cuenta)}this.notamanage.update(this.transporte.id)}onNotaManageEvent(e){switch(e.action){case"update":this.nform.updateForm(e.value.nota),this.galpondetalle.updateData(e.value.nota.cuenta);break;case"delete":this.clearNotaForm()}}onRespFormEvent(e){this.transporte=e;let n=new C.Q;n.transporte=this.transporte,this.nform.newForm(n),this.notamanage.update(this.transporte.id)}clearNotaForm(){let e=new C.Q;e.transporte=this.transporte,this.nform.newForm(e),this.notamanage.update(this.transporte.id)}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(u.QS),t.Y36(h.D))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["ventaagalpon-form"]],viewQuery:function(n,a){if(1&n&&(t.Gf(N,7),t.Gf(V,7),t.Gf(R,7),t.Gf(B,7)),2&n){let o;t.iGM(o=t.CRH())&&(a.respform=o.first),t.iGM(o=t.CRH())&&(a.nform=o.first),t.iGM(o=t.CRH())&&(a.notamanage=o.first),t.iGM(o=t.CRH())&&(a.galpondetalle=o.first)}},outputs:{formEvent:"formEvent"},decls:36,vars:5,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-6"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pButton","","pRipple","","type","button","icon","pi pi-arrow-left","pTooltip","Salir",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[3,"path","formEvent"],["respform",""],[1,"card",3,"hidden"],[3,"path","notaFormEvent"],["notaform",""],["path","/ventas/ventaagalpon",3,"notaManageEvent"],["notamanage",""],["galpondetalle",""]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Registro Transporte"),t.qZA()(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return a.salir()}),t.qZA()()(),t.TgZ(10,"div",8)(11,"resp-form",9,10),t.NdJ("formEvent",function(s){return a.onRespFormEvent(s)}),t.qZA()()(),t.TgZ(13,"div",11)(14,"div",4)(15,"div",5)(16,"h3"),t._uU(17,"Programaci\xf3n de pedido"),t.qZA()(),t.TgZ(18,"div",6)(19,"button",7),t.NdJ("click",function(){return a.salir()}),t.qZA()()(),t.TgZ(20,"div",8)(21,"nota-form",12,13),t.NdJ("notaFormEvent",function(s){return a.onNotaFormEvent(s)}),t.qZA()()(),t.TgZ(23,"div",11)(24,"div",4)(25,"div",5)(26,"h2"),t._uU(27,"Programa"),t.qZA()(),t.TgZ(28,"div",6)(29,"button",7),t.NdJ("click",function(){return a.salir()}),t.qZA()()(),t.TgZ(30,"div",8)(31,"notas-manage",14,15),t.NdJ("notaManageEvent",function(s){return a.onNotaManageEvent(s)}),t.qZA()()()(),t.TgZ(33,"div",2),t._UZ(34,"galpondetalle",null,16),t.qZA()()()),2&n&&(t.Q6J("hidden",!a.display),t.xp6(11),t.Q6J("path",a.ruta),t.xp6(2),t.Q6J("hidden",0===a.transporte.id),t.xp6(8),t.Q6J("path",a.ruta),t.xp6(2),t.Q6J("hidden",0===a.transporte.id))},dependencies:[p.u,A.Hq,S.T,L.k,F.Z,P],encapsulation:2})}return i})();const O=["form"];function Q(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10)(4,"div",11)(5,"div",12)(6,"h2"),t._uU(7,"Entregas a Galpones"),t.qZA()(),t.TgZ(8,"div",13)(9,"button",14),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.openTransporteProddia())}),t.TgZ(10,"i",15),t._uU(11,"local_shipping"),t.qZA()(),t.TgZ(12,"button",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.openProddia())}),t.TgZ(13,"i",15),t._uU(14,"event_available"),t.qZA()(),t.TgZ(15,"button",17),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.open())}),t.TgZ(16,"i",15),t._uU(17,"add_circle_outline"),t.qZA()(),t.TgZ(18,"p-calendar",18),t.NdJ("ngModelChange",function(a){t.CHM(e);const o=t.oxw();return t.KtG(o.currentDate=a)})("onSelect",function(a){t.CHM(e);const o=t.oxw();return t.KtG(o.onSelectedDate(a))}),t.qZA()()(),t.TgZ(19,"div",19)(20,"mo-report",20),t.NdJ("action",function(a){t.CHM(e);const o=t.oxw();return t.KtG(o.tableAction(a))}),t.qZA()()()()()()}if(2&i){const e=t.oxw();t.xp6(18),t.Q6J("ngModel",e.currentDate),t.xp6(2),t.Q6J("data",e.data)}}const k=function(){return{width:"50vw"}},J=[{path:"",component:v,children:[{path:"",component:(()=>{class i{constructor(e,n){this.dataService=e,this.confirmService=n,this.path="/ventas/ventaagalpon",this.displayProducciondia=!1,this.proddia={content:[],columns:[{field:"producto.nombre",columnName:"Producto"},{field:"cantidad",columnName:"Cantidad",align:"right"}],foot:{content:["TOTAL",0],cols:[{colspan:"1",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}},this.displayProducciontransporte=!1,this.produccionTransportedia=[],this.display=!0,this.currentDate=new Date,this.data={content:[],rows:{class:"pendiente",condition:a=>"PENDIENTE"===a.estado},columns:[{field:"id",columnName:"Id"},{field:"fecha",columnName:"Fecha",type:"date"},{field:"conductor",columnName:"Conductor"},{field:"comentario",columnName:"Comentario"},{field:"estado",columnName:"Estado"},{field:"cantidad",columnName:"Alimento",align:"right"},{actions:[{iconname:"delete_forever",iconclass:"material-icons-round",event:"delete",condition:a=>"PENDIENTE"==a.estado},{iconname:"arrow_forward",iconclass:"material-icons-outlined mo-icons-center",event:"modify",condition:a=>!0}]}]},this.columnsProduccionTransporte=[{field:"transporte.conductor",columnName:"Transporte"},{field:"producto.nombre",columnName:"Producto"},{field:"cantidad",columnName:"Cantidad",align:"right"}]}ngOnInit(){this.getdata()}getdata(){this.dataService.getdata(this.path+"/transporte",{date:this.currentDate}).subscribe(e=>{this.data.content=e})}open(){this.display=!1,this.form.newForm(new m.e)}onSelectedDate(e){this.currentDate=e,this.getdata()}tableAction(e){switch(e.event){case"modify":this.display=!1,this.form.updateForm(e.row);break;case"delete":this.confirmService.setconfirm({message:"Eliminar '"+e.row.id+"'?",accept:()=>{this.dataService.deletedata(this.path+"/respdelete",{id:e.row.id}).subscribe(a=>{this.getdata()})}})}}formEvent(e){this.display=!0,this.getdata()}openProddia(){this.dataService.getdata(this.path+"/producciondia",{date:this.currentDate}).subscribe(e=>{this.proddia.content=e,this.proddia.foot.content[1]=this.proddia.content.map(n=>n.cantidad).reduce(function(n,a){return n+a})}),this.displayProducciondia=!0}openTransporteProddia(){this.dataService.getdata(this.path+"/transproddia",{date:this.currentDate}).subscribe(e=>{this.produccionTransportedia=e}),this.displayProducciontransporte=!0}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(h.D),t.Y36(b.I))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["ventaagalpon-manage"]],viewQuery:function(n,a){if(1&n&&t.Gf(O,7),2&n){let o;t.iGM(o=t.CRH())&&(a.form=o.first)}},decls:7,vars:14,consts:[["class","mo-layout-content",4,"ngIf"],[3,"formEvent"],["form",""],["header","Produccion dia",3,"visible","modal","visibleChange"],[3,"data"],["header","Produccion por Transporte",3,"visible","modal","visibleChange"],[3,"datatable","columns"],[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pTooltip","Produccion por transporte dia",1,"mo-button",3,"click"],[1,"material-icons-outlined","mo-icons-center"],["pTooltip","Produccion d\xeda",1,"mo-button",3,"click"],["pTooltip","Registrar Transporte",1,"mo-button",3,"click"],["dateFormat","dd MM yy","inputId","dateformat",3,"ngModel","ngModelChange","onSelect"],[1,"mo-panel-content"],[3,"data","action"]],template:function(n,a){1&n&&(t.YNc(0,Q,21,2,"div",0),t.TgZ(1,"ventaagalpon-form",1,2),t.NdJ("formEvent",function(s){return a.formEvent(s)}),t.qZA(),t.TgZ(3,"p-dialog",3),t.NdJ("visibleChange",function(s){return a.displayProducciondia=s}),t._UZ(4,"mo-report",4),t.qZA(),t.TgZ(5,"p-dialog",5),t.NdJ("visibleChange",function(s){return a.displayProducciontransporte=s}),t._UZ(6,"mo-table",6),t.qZA()),2&n&&(t.Q6J("ngIf",a.display),t.xp6(3),t.Akn(t.DdM(12,k)),t.Q6J("visible",a.displayProducciondia)("modal",!0),t.xp6(1),t.Q6J("data",a.proddia),t.xp6(1),t.Akn(t.DdM(13,k)),t.Q6J("visible",a.displayProducciontransporte)("modal",!0),t.xp6(1),t.Q6J("datatable",a.produccionTransportedia)("columns",a.columnsProduccionTransporte))},dependencies:[d.O5,p.u,u.JJ,u.On,x.I,T.t,y.f,I.V,H],encapsulation:2})}return i})()},{path:"**",redirectTo:""}]}];let U=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(J),c.Bz]})}return i})();var G=r(8368),$=r(3092),q=r(961),M=r(5219),z=r(2537),K=r(4562),W=r(4480);let bt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=t.oAB({type:i});static \u0275inj=t.cJS({imports:[d.ez,c.Bz,M.m8,W.T,p.z,z.w,K.X,c.Bz,M.m8,p.z]})}return i})();var xt=r(1494),Tt=r(4553),yt=r(9604),It=r(7090),Ct=r(7163),kt=r(1310);let Mt=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[d.ez,U,G.U,$.$,q.q,xt.l,Tt.W,yt.w,It.$,Ct.o,kt.H,y._8,u.UX,u.u5,bt,I.S]})}return i})()},1494:(w,f,r)=>{r.d(f,{l:()=>v});var d=r(6814),c=r(3500),t=r(4946);let v=(()=>{class m{static#t=this.\u0275fac=function(p){return new(p||m)};static#e=this.\u0275mod=t.oAB({type:m});static#n=this.\u0275inj=t.cJS({imports:[d.ez,c.K]})}return m})()}}]);