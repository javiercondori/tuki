"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[347],{8555:(T,g,r)=>{r.d(g,{r:()=>t});var d=r(5289),v=r(698);class t{constructor(){this.id=0,this.entidad=new d.$,this.tipo="",this.nombre="",this.descripcion="",this.estado="ACTIVO",this.saldo=0,this.establecimiento=new v.A}}},5289:(T,g,r)=>{r.d(g,{$:()=>d});class d{constructor(){this.id=0,this.nombre="",this.direccion="",this.telefono=""}}},3297:(T,g,r)=>{r.d(g,{y:()=>d});class d{constructor(){this.id=0,this.sid=0,this.str="",this.sstr="",this.dec=0,this.sdec=0,this.date=new Date,this.sdate=new Date,this.ordersby=[],this.orderby="",this.limit=0,this.offset=0,this.ordertype=""}}},8223:(T,g,r)=>{r.d(g,{c:()=>d});class d{constructor(){this.id=0,this.vdate=new Date,this.doccode=0,this.vtype="",this.fechatra=new Date,this.agreement="",this.comment="",this.description="",this.amount=0,this.literal="",this.username="",this.estab_id=0}}},9347:(T,g,r)=>{r.r(g),r.d(g,{CuentaModule:()=>mt});var d=r(6814),v=r(7664),t=r(4946);let m=(()=>{class i{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-cuenta-main"]],decls:1,vars:0,template:function(o,n){1&o&&t._UZ(0,"router-outlet")},dependencies:[v.lC],encapsulation:2})}return i})();var f=r(8555),c=r(5289),l=r(3297),h=r(2316),u=r(7757),b=r(1106),y=r(3259),N=r(707),E=r(3714),C=r(9324),S=r(7492),w=r(8481),p=r(95),R=r(2105),Z=r(7213);function D(i,_){1&i&&(t.TgZ(0,"small",20),t._uU(1," No v\xe1\u013aido"),t.qZA())}function I(i,_){1&i&&(t.TgZ(0,"small",20),t._uU(1," No v\xe1\u013aido"),t.qZA())}const F=function(){return{width:"70vw"}},M=function(){return{"960px":"75vw"}};let q=(()=>{class i{constructor(e,o){this.formBuilder=e,this.dataService=o,this.formEvent=new t.vpe,this.display=!1,this.cuenta=new f.r,this.tipos=[],this.estados=[],this.establecimientos=[],this.form=this.formBuilder.group({nombre:["",p.kI.required],descripcion:["",p.kI.required],tipo:["",p.kI.required],establecimiento:[{},p.kI.required],estado:["",p.kI.required]})}ngOnInit(){this.getEstablecimientos(),this.getTipos(),this.getEstados()}openForm(e){this.form.reset(),this.cuenta=e,this.establecimientos.forEach(o=>{o.id===this.cuenta.establecimiento.id&&(this.cuenta.establecimiento=o)}),this.form.controls.establecimiento.setValue(this.establecimientos[0]),this.form.controls.nombre.setValue(this.cuenta.nombre),this.form.controls.descripcion.setValue(this.cuenta.descripcion),this.form.controls.tipo.setValue(this.cuenta.tipo),this.form.controls.estado.setValue(this.cuenta.estado),this.form.controls.establecimiento.setValue(this.cuenta.establecimiento),this.display=!0}submit(){let e=this.form.getRawValue();this.cuenta.nombre=e.nombre,this.cuenta.descripcion=e.descripcion,this.cuenta.estado=e.estado,this.cuenta.tipo=e.tipo,this.cuenta.establecimiento=e.establecimiento,this.dataService.postdata("/inicio/cuenta",this.cuenta).subscribe(o=>{this.display=!1,this.formEvent.emit()})}getEstablecimientos(){this.dataService.getdata("/inicio/cuenta/establecimientos",{}).subscribe(e=>{this.establecimientos=e})}getTipos(){this.dataService.getdata("/inicio/cuenta/tipos",{}).subscribe(e=>{this.tipos=e})}getEstados(){this.dataService.getdata("/inicio/cuenta/estados",{}).subscribe(e=>{this.estados=e})}get nombre(){return this.form.get("nombre")}get descripcion(){return this.form.get("descripcion")}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(p.QS),t.Y36(u.D))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["cuenta-form"]],outputs:{formEvent:"formEvent"},decls:37,vars:19,consts:[["header","Formulario de Cuenta",3,"visible","modal","breakpoints","draggable","resizable","visibleChange"],[3,"formGroup","submit"],[1,"p-fluid","grid"],[1,"p-field","col-12","md:col-12"],[1,"p-float-label"],["type","text","id","entidad","pInputText","","disabled","",3,"value"],["for","entidad"],["type","text","id","nombre","pInputText","","formControlName","nombre"],["for","nombre"],["class","p-error",4,"ngIf"],["type","text","id","descripcion","pInputText","","formControlName","descripcion"],["for","descripcion"],["appendTo","body","formControlName","tipo",3,"options"],["for","tipo"],["id","estado","appendTo","body","formControlName","estado",3,"options"],["for","estado"],["id","establecimiento","appendTo","body","optionLabel","nombre","formControlName","establecimiento",3,"options"],["for","establecimiento"],["type","submit","label","Guardar","styleClass","p-button-text",3,"disabled"],["type","button","label","Salir","styleClass","p-button-text",3,"click"],[1,"p-error"]],template:function(o,n){1&o&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(s){return n.display=s}),t.TgZ(1,"form",1),t.NdJ("submit",function(){return n.submit()}),t.TgZ(2,"div",2)(3,"div",3)(4,"span",4),t._UZ(5,"input",5),t.TgZ(6,"label",6),t._uU(7,"Entidad::"),t.qZA()()(),t.TgZ(8,"div",3)(9,"span",4),t._UZ(10,"input",7),t.TgZ(11,"label",8),t._uU(12,"Nombre:"),t.qZA(),t.YNc(13,D,2,0,"small",9),t.qZA()(),t.TgZ(14,"div",3)(15,"span",4),t._UZ(16,"input",10),t.TgZ(17,"label",11),t._uU(18,"Descripcion:"),t.qZA(),t.YNc(19,I,2,0,"small",9),t.qZA()(),t.TgZ(20,"div",3)(21,"span",4),t._UZ(22,"p-dropdown",12),t.TgZ(23,"label",13),t._uU(24,"Tipo:"),t.qZA()()(),t.TgZ(25,"div",3)(26,"span",4),t._UZ(27,"p-dropdown",14),t.TgZ(28,"label",15),t._uU(29,"Estado:"),t.qZA()()(),t.TgZ(30,"div",3)(31,"span",4),t._UZ(32,"p-dropdown",16),t.TgZ(33,"label",17),t._uU(34,"Establecimiento:"),t.qZA()()()(),t._UZ(35,"p-button",18),t.TgZ(36,"p-button",19),t.NdJ("click",function(){return n.display=!1}),t.qZA()()()),2&o&&(t.Akn(t.DdM(17,F)),t.Q6J("visible",n.display)("modal",!0)("breakpoints",t.DdM(18,M))("draggable",!1)("resizable",!0),t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(4),t.cQ8("value","",n.cuenta.entidad.id," | ",n.cuenta.entidad.nombre," | ",n.cuenta.entidad.direccion,""),t.xp6(8),t.Q6J("ngIf",(null==n.nombre?null:n.nombre.invalid)&&((null==n.nombre?null:n.nombre.dirty)||(null==n.nombre?null:n.nombre.touched))),t.xp6(6),t.Q6J("ngIf",(null==n.descripcion?null:n.descripcion.invalid)&&((null==n.descripcion?null:n.descripcion.dirty)||(null==n.descripcion?null:n.descripcion.touched))),t.xp6(3),t.Q6J("options",n.tipos),t.xp6(5),t.Q6J("options",n.estados),t.xp6(5),t.Q6J("options",n.establecimientos),t.xp6(3),t.Q6J("disabled",n.form.invalid))},dependencies:[d.O5,N.zx,E.o,R.Lt,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,Z.V],encapsulation:2})}return i})();var O=r(8223);class Q{constructor(){this.id=0,this.account=new f.r,this.accountrel=new f.r,this.detail="",this.amount=0,this.voucher=new O.c,this.fechatra=new Date}}var J=r(1532);const P=function(){return{width:"50vw"}},k=function(){return{"500px":"50vw"}};let G=(()=>{class i{constructor(e){this.dataService=e,this.display=!1,this.voucherdetail=new Q,this.formEvent=new t.vpe}open(e){this.voucherdetail=e,this.display=!0}onSelectedDate(e){this.voucherdetail.fechatra=e}onSave(){this.dataService.postdata("/inicio/voucher/savetransdate",this.voucherdetail).subscribe(e=>{this.display=!1,this.formEvent.emit("save")})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u.D))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["voucher-transactiondate"]],outputs:{formEvent:"formEvent"},decls:7,vars:10,consts:[["header"," ",3,"visible","modal","breakpoints","draggable","resizable","visibleChange"],[1,"grid"],[1,"col-12","form-group"],["for","transid"],["dateFormat","dd MM yy","appendTo","body",3,"ngModel","ngModelChange","onSelect"],["type","button","label","Guardar","styleClass","p-button-text",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(s){return n.display=s}),t.TgZ(1,"div",1)(2,"div",2)(3,"label",3),t._uU(4,"Fecha transacci\xf3n:"),t.qZA(),t.TgZ(5,"p-calendar",4),t.NdJ("ngModelChange",function(s){return n.voucherdetail.fechatra=s})("onSelect",function(s){return n.onSelectedDate(s)}),t.qZA()(),t.TgZ(6,"p-button",5),t.NdJ("click",function(){return n.onSave()}),t.qZA()()()),2&o&&(t.Akn(t.DdM(8,P)),t.Q6J("visible",n.display)("modal",!0)("breakpoints",t.DdM(9,k))("draggable",!0)("resizable",!1),t.xp6(5),t.Q6J("ngModel",n.voucherdetail.fechatra))},dependencies:[p.JJ,p.On,Z.V,J.f,N.zx],encapsulation:2})}return i})();var A=r(9920);const V=["transdate"];let U=(()=>{class i{constructor(e,o){this.dataService=e,this.confirmService=o,this.reportEvent=new t.vpe,this.display=!1,this.cuenta=new f.r,this.data={content:[],columns:[{field:"voucherdetail.voucher.id",columnName:"Com.Id"},{field:"voucherdetail.fechatra",columnName:"F.Trans",type:"datetime"},{field:"voucherdetail.voucher.vdate",columnName:"F.Reg",type:"datetime"},{field:"voucherdetail.voucher.doccode",columnName:"Nro Nota"},{field:"voucherdetail.voucher.vtype",columnName:"Nota"},{field:"voucherdetail.accountrel.nombre",columnName:"Cuenta"},{field:"voucherdetail.voucher.agreement",columnName:"Conformidad"},{field:"voucherdetail.detail",columnName:"detalle"},{field:"voucherdetail.voucher.description",columnName:"Descripci\xf3n"},{field:"monto",columnName:"Monto",align:"right"},{field:"saldo",columnName:"Saldo",align:"right"},{actions:[{iconname:"event",iconclass:"material-icons-round",event:"updatedate",condition:n=>!0}]}]}}ngOnInit(){}open(e){this.cuenta=e,this.display=!0,this.getdata()}reportAction(e){"updatedate"===e.event&&this.transdate.open(e.row.voucherdetail)}transdateEvent(e){this.getdata()}salir(){this.display=!1,this.reportEvent.emit("salir")}getdata(){var e=new l.y;e.ordersby=["voucherdetail.fechatra"],e.ordertype="asc",e.id=this.cuenta.id,this.dataService.postdata("/inicio/cuenta/transacciones",e).subscribe(o=>{this.data.content=o})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u.D),t.Y36(b.I))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["cuenta-transaccion-report"]],viewQuery:function(o,n){if(1&o&&t.Gf(V,7),2&o){let a;t.iGM(a=t.CRH())&&(n.transdate=a.first)}},outputs:{reportEvent:"reportEvent"},decls:29,vars:6,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pTooltip","Imprimir","printSectionId","holahola","ngxPrint","","styleSheetFile","assets/css/print.css",1,"mo-button"],[1,"material-icons-outlined","mo-icons-center"],["pTooltip","Atr\xe1s",1,"mo-button",3,"click"],["id","holahola",1,"mo-panel-content"],[1,"form-group"],[1,"input-control-info"],[3,"data","action"],[3,"formEvent"],["transdate",""]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Transacciones de Cuenta"),t.qZA()(),t.TgZ(8,"div",6)(9,"button",7)(10,"i",8),t._uU(11,"print"),t.qZA()(),t.TgZ(12,"button",9),t.NdJ("click",function(){return n.salir()}),t.TgZ(13,"i",8),t._uU(14,"arrow_back"),t.qZA()()()(),t.TgZ(15,"div",10)(16,"div",11)(17,"label"),t._uU(18,"Entidad:"),t.qZA(),t.TgZ(19,"span",12),t._uU(20),t.qZA()(),t.TgZ(21,"div",11)(22,"label"),t._uU(23,"Cuenta:"),t.qZA(),t.TgZ(24,"span",12),t._uU(25),t.qZA()(),t.TgZ(26,"mo-report",13),t.NdJ("action",function(s){return n.reportAction(s)}),t.qZA(),t.TgZ(27,"voucher-transactiondate",14,15),t.NdJ("formEvent",function(s){return n.transdateEvent(s)}),t.qZA()()()()()()),2&o&&(t.Q6J("hidden",!n.display),t.xp6(20),t.AsE("",n.cuenta.entidad.id," - ",n.cuenta.entidad.nombre,""),t.xp6(5),t.AsE("",n.cuenta.id," - ",n.cuenta.nombre,""),t.xp6(1),t.Q6J("data",n.data))},dependencies:[y.u,C.t,G,A.I],encapsulation:2})}return i})();const L=["pagination"],x=["trreport"],B=["form"];let Y=(()=>{class i{constructor(e,o){this.dataService=e,this.confirmService=o,this.reportdata=new l.y,this.display=!0,this.entidad=new c.$,this.data={content:[],columns:[{field:"id",columnName:"Id"},{field:"establecimiento.nombre",columnName:"Establecimiento"},{field:"estado",columnName:"Estado"},{field:"tipo",columnName:"Tipo"},{field:"nombre",columnName:"Nombre"},{field:"descripcion",columnName:"Descrip."},{field:"saldo",columnName:"Saldo",align:"right"},{actions:[{iconclass:"pi pi-search",event:"search",condition:n=>!0},{iconclass:"pi pi-pencil",event:"update",condition:n=>!0},{iconclass:"pi pi-trash",event:"delete",condition:n=>!0}]}]},this.entidadconfig={path:"/all/entidad/byentidad",columns:["id","nombre","direccion"]}}ngOnInit(){this.reportdata.limit=20,this.reportdata.offset=0}openNewForm(){let e=new f.r;e.entidad=this.entidad,this.form.openForm(e)}openUpdateForm(e){e.entidad=this.entidad,this.form.openForm(e)}formEvent(e){this.getdata()}getdata(){this.reportdata.orderby="id",this.reportdata.ordertype="desc",this.reportdata.id=this.entidad.id,this.dataService.postdata("/inicio/cuenta/report",this.reportdata).subscribe(e=>{this.data.content=e.list;let o=new h.n;o.total=e.total,o.limit=this.reportdata.limit,this.pagination.update(o)})}autocompleteSelected(e){this.entidad=e,this.getdata()}tableAction(e){switch(e.event){case"search":this.display=!1,this.trreport.open(e.row);break;case"delete":this.confirmService.setconfirm({message:"Eliminar CUENTA '"+e.row.id+"'?",accept:()=>{this.dataService.postdata("/inicio/cuenta/delete",e.row).subscribe(n=>{this.getdata()})}});break;case"update":this.openUpdateForm(e.row)}}reportEvent(e){this.display=!0}onChangePage(e){this.reportdata.limit=e.limit,this.reportdata.offset=e.offset,this.getdata()}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u.D),t.Y36(b.I))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["cuenta-manage"]],viewQuery:function(o,n){if(1&o&&(t.Gf(L,7),t.Gf(x,7),t.Gf(B,7)),2&o){let a;t.iGM(a=t.CRH())&&(n.pagination=a.first),t.iGM(a=t.CRH())&&(n.trreport=a.first),t.iGM(a=t.CRH())&&(n.form=a.first)}},decls:25,vars:7,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["for","entidad"],["id","entidad",3,"config","itemSelected"],["pButton","","pRipple","","type","button","icon","pi pi-plus","pTooltip","Registrar Transporte",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[1,"p-float-label"],["type","text","id","entidaddata","pInputText","","disabled","",3,"value"],["for","entidaddata"],[3,"data","action"],[3,"changePage"],["pagination",""],[3,"reportEvent"],["trreport",""],[3,"formEvent"],["form",""]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7),t.qZA()(),t.TgZ(8,"div",6)(9,"label",7),t._uU(10,"Buscar entidad:"),t.qZA(),t.TgZ(11,"mo-autocomplete",8),t.NdJ("itemSelected",function(s){return n.autocompleteSelected(s)}),t.qZA(),t.TgZ(12,"button",9),t.NdJ("click",function(){return n.openNewForm()}),t.qZA()()(),t.TgZ(13,"div",10)(14,"span",11),t._UZ(15,"input",12),t.TgZ(16,"label",13),t._uU(17,"Entidad"),t.qZA()(),t.TgZ(18,"mo-report",14),t.NdJ("action",function(s){return n.tableAction(s)}),t.qZA(),t.TgZ(19,"mo-pagination",15,16),t.NdJ("changePage",function(s){return n.onChangePage(s)}),t.qZA()()()()()(),t.TgZ(21,"cuenta-transaccion-report",17,18),t.NdJ("reportEvent",function(s){return n.reportEvent(s)}),t.qZA(),t.TgZ(23,"cuenta-form",19,20),t.NdJ("formEvent",function(s){return n.formEvent(s)}),t.qZA()),2&o&&(t.Q6J("hidden",!n.display),t.xp6(7),t.lnq("Entidad: ",n.entidad.id," | ",n.entidad.nombre," | ",n.entidad.direccion,""),t.xp6(4),t.Q6J("config",n.entidadconfig),t.xp6(4),t.Q6J("value",n.entidad.id+" | "+n.entidad.nombre+" | "+n.entidad.direccion),t.xp6(3),t.Q6J("data",n.data))},dependencies:[y.u,N.Hq,E.o,C.t,S.J,w.r,q,U],encapsulation:2})}return i})();function H(i,_){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"mo-report",16),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("data",e.gastos)}}function $(i,_){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"mo-report",16),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("data",e.ventas)}}const z=function(i,_){return{"mo-font-color-pos":i,"mo-font-color-neg":_}};let W=(()=>{class i{constructor(e){this.dataService=e,this.reportEvent=new t.vpe,this.display=!1,this.cuenta=new f.r,this.gastos={caption:"Resumen de Gastos",content:[],columns:[{field:"catalogo.id",columnName:"ID CAT"},{field:"catalogo.nombre",columnName:"GASTO"},{field:"total",columnName:"TOTAL",align:"right"}],foot:{content:["TOTAL GASTOS",0],cols:[{colspan:"2",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}},this.entregas={caption:"Resumen entregas",content:[],columns:[{field:"productotipo.id",columnName:"ID"},{field:"productotipo.nombre",columnName:"Tipo"},{field:"total",columnName:"TOTAL",align:"right"}],foot:{content:["TOTAL ENTREGAS",0],cols:[{colspan:"2",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}},this.ventas={caption:"Ventas",content:[],columns:[{field:"producto.id",columnName:"ID"},{field:"producto.nombre",columnName:"Producto"},{field:"cantidad",columnName:"Cantidad",align:"right"},{field:"total",columnName:"TOTAL",align:"right"}],foot:{content:["TOTAL VENTAS",0],cols:[{colspan:"3",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}}}ngOnInit(){}open(e){this.cuenta=e,this.display=!0,this.getdata()}onExit(){this.display=!1,this.reportEvent.emit("salir")}getdata(){this.dataService.getdata("/inicio/cuenta/report/gastosummary",{id:this.cuenta.id}).subscribe(e=>{this.gastos.content=e,this.gastos.foot.content[1]=this.gastos.content.map(o=>o.total).reduce(function(o,n){return o+n})}),this.dataService.getdata("/inicio/cuenta/report/productotiposummary",{id:this.cuenta.id}).subscribe(e=>{this.entregas.content=e,this.entregas.foot.content[1]=this.entregas.content.map(o=>o.total).reduce(function(o,n){return o+n})}),this.dataService.getdata("/inicio/cuenta/report/ventassummary",{id:this.cuenta.id}).subscribe(e=>{this.ventas.content=e,this.ventas.foot.content[1]=this.ventas.content.map(o=>o.total).reduce(function(o,n){return o+n})})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u.D))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["cuenta-report-resumen"]],outputs:{reportEvent:"reportEvent"},decls:35,vars:14,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pTooltip","Imprimir","printSectionId","creportresumen","ngxPrint","","styleSheetFile","assets/css/print.css",1,"mo-button"],[1,"material-icons-outlined","mo-icons-center"],["pTooltip","Atr\xe1s",1,"mo-button",3,"click"],["id","creportresumen",1,"mo-panel-content"],[1,"form-group"],[1,"input-control-info"],[1,"input-control-info",3,"ngClass"],[4,"ngIf"],[3,"hidden"],[3,"data"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Resumen de Cuenta"),t.qZA()(),t.TgZ(8,"div",6)(9,"button",7)(10,"i",8),t._uU(11,"print"),t.qZA()(),t.TgZ(12,"button",9),t.NdJ("click",function(){return n.onExit()}),t.TgZ(13,"i",8),t._uU(14,"arrow_back"),t.qZA()()()(),t.TgZ(15,"div",10)(16,"div",11)(17,"label"),t._uU(18,"Entidad:"),t.qZA(),t.TgZ(19,"span",12),t._uU(20),t.qZA()(),t.TgZ(21,"div",11)(22,"label"),t._uU(23,"Cuenta:"),t.qZA(),t.TgZ(24,"span",12),t._uU(25),t.qZA()(),t.TgZ(26,"div",11)(27,"label"),t._uU(28,"SALDO CUENTA:"),t.qZA(),t.TgZ(29,"span",13),t._uU(30),t.qZA()(),t.YNc(31,H,2,1,"div",14),t.TgZ(32,"div",15),t._UZ(33,"mo-report",16),t.qZA(),t.YNc(34,$,2,1,"div",14),t.qZA()()()()()),2&o&&(t.Q6J("hidden",!n.display),t.xp6(20),t.AsE("",n.cuenta.entidad.id," - ",n.cuenta.entidad.nombre,""),t.xp6(5),t.AsE("",n.cuenta.id," - ",n.cuenta.nombre,""),t.xp6(4),t.Q6J("ngClass",t.WLB(11,z,n.cuenta.saldo>=0,n.cuenta.saldo<0)),t.xp6(1),t.Oqu(n.cuenta.saldo),t.xp6(1),t.Q6J("ngIf",0!==n.gastos.content.length),t.xp6(1),t.Q6J("hidden",0===n.entregas.content.length),t.xp6(1),t.Q6J("data",n.entregas),t.xp6(1),t.Q6J("ngIf",0!==n.ventas.content.length))},dependencies:[d.mk,d.O5,y.u,C.t,A.I],encapsulation:2})}return i})();function X(i,_){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"mo-report",16),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("data",e.gastos)}}function j(i,_){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"mo-report",16),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("data",e.ventas)}}const K=function(i,_){return{"mo-font-color-pos":i,"mo-font-color-neg":_}};let tt=(()=>{class i{constructor(e){this.dataService=e,this.reportEvent=new t.vpe,this.display=!1,this.cuenta=new f.r,this.gastos={caption:"Detalle de Gastos",content:[],columns:[{field:"catalogo.id",columnName:"ID CAT"},{field:"catalogo.nombre",columnName:"GASTO"},{field:"detalle",columnName:"Detalle"},{field:"cantidad",columnName:"Cantidad",align:"right"},{field:"pu",columnName:"PU",align:"right"},{field:"total",columnName:"TOTAL",align:"right"}],foot:{content:["TOTAL GASTOS",0],cols:[{colspan:"5",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}},this.entregas={caption:"Notas de Entrega",content:[],columns:[{field:"nota.transporte.fecha",columnName:"Fecha",type:"datetime"},{field:"nota.transporte.conductor",columnName:"Transporte"},{field:"nota.cuenta.nombre",columnName:"Cuenta"},{field:"notadetalle.producto.nombre",columnName:"Producto"},{field:"notadetalle.cantidad",columnName:"Cantidad",align:"right"},{field:"notadetalle.pu",columnName:"Pu",align:"right"},{field:"notadetalle.total",columnName:"TOTAL",align:"right"}],foot:{content:["TOTAL ENTREGAS",0],cols:[{colspan:"6",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}},this.ventas={caption:"Ventas",content:[],columns:[{field:"nota.transporte.fecha",columnName:"Fecha",type:"datetime"},{field:"nota.transporte.conductor",columnName:"Transporte"},{field:"nota.cuenta.nombre",columnName:"Cuenta"},{field:"notadetalle.producto.nombre",columnName:"Producto"},{field:"notadetalle.cantidad",columnName:"Cantidad",align:"right"},{field:"notadetalle.pu",columnName:"Pu",align:"right"},{field:"notadetalle.total",columnName:"TOTAL",align:"right"}],foot:{content:["TOTAL VENTAS",0],cols:[{colspan:"6",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}}}ngOnInit(){}open(e){this.cuenta=e,this.display=!0,this.getdata()}onExit(){this.display=!1,this.reportEvent.emit("salir")}getdata(){this.dataService.getdata("/inicio/cuenta/report/gastos",{id:this.cuenta.id}).subscribe(e=>{this.gastos.content=e,this.gastos.foot.content[1]=this.gastos.content.map(o=>o.total).reduce(function(o,n){return o+n})}),this.dataService.getdata("/inicio/cuenta/report/entregas",{id:this.cuenta.id}).subscribe(e=>{this.entregas.content=e,this.entregas.foot.content[1]=this.entregas.content.map(o=>o.notadetalle.total).reduce(function(o,n){return o+n})}),this.dataService.getdata("/inicio/cuenta/report/ventas",{id:this.cuenta.id}).subscribe(e=>{this.ventas.content=e,this.ventas.foot.content[1]=this.ventas.content.map(o=>o.notadetalle.total).reduce(function(o,n){return o+n})})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u.D))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["cuenta-report-detalle"]],outputs:{reportEvent:"reportEvent"},decls:35,vars:14,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pTooltip","Imprimir","printSectionId","creportdetalle","ngxPrint","","styleSheetFile","assets/css/print.css",1,"mo-button"],[1,"material-icons-outlined","mo-icons-center"],["pTooltip","Atr\xe1s",1,"mo-button",3,"click"],["id","creportdetalle",1,"mo-panel-content"],[1,"form-group"],[1,"input-control-info"],[1,"input-control-info",3,"ngClass"],[4,"ngIf"],[3,"hidden"],[3,"data"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Resumen de Cuenta"),t.qZA()(),t.TgZ(8,"div",6)(9,"button",7)(10,"i",8),t._uU(11,"print"),t.qZA()(),t.TgZ(12,"button",9),t.NdJ("click",function(){return n.onExit()}),t.TgZ(13,"i",8),t._uU(14,"arrow_back"),t.qZA()()()(),t.TgZ(15,"div",10)(16,"div",11)(17,"label"),t._uU(18,"Entidad:"),t.qZA(),t.TgZ(19,"span",12),t._uU(20),t.qZA()(),t.TgZ(21,"div",11)(22,"label"),t._uU(23,"Cuenta:"),t.qZA(),t.TgZ(24,"span",12),t._uU(25),t.qZA()(),t.TgZ(26,"div",11)(27,"label"),t._uU(28,"SALDO CUENTA:"),t.qZA(),t.TgZ(29,"span",13),t._uU(30),t.qZA()(),t.YNc(31,X,2,1,"div",14),t.TgZ(32,"div",15),t._UZ(33,"mo-report",16),t.qZA(),t.YNc(34,j,2,1,"div",14),t.qZA()()()()()),2&o&&(t.Q6J("hidden",!n.display),t.xp6(20),t.AsE("",n.cuenta.entidad.id," - ",n.cuenta.entidad.nombre,""),t.xp6(5),t.AsE("",n.cuenta.id," - ",n.cuenta.nombre,""),t.xp6(4),t.Q6J("ngClass",t.WLB(11,K,n.cuenta.saldo>=0,n.cuenta.saldo<0)),t.xp6(1),t.Oqu(n.cuenta.saldo),t.xp6(1),t.Q6J("ngIf",0!==n.gastos.content.length),t.xp6(1),t.Q6J("hidden",0===n.entregas.content.length),t.xp6(1),t.Q6J("data",n.entregas),t.xp6(1),t.Q6J("ngIf",0!==n.ventas.content.length))},dependencies:[d.mk,d.O5,y.u,C.t,A.I],encapsulation:2})}return i})();const et=["pagination"],nt=["transactions"],ot=["resumen"],it=["detalle"];function at(i,_){if(1&i&&(t.TgZ(0,"div",18)(1,"label"),t._uU(2,"Entidad:"),t.qZA(),t.TgZ(3,"span",19),t._uU(4),t.qZA()()),2&i){const e=t.oxw();t.xp6(4),t.AsE("",e.entidad.id," - ",e.entidad.nombre,"")}}const rt=[{path:"",component:m,children:[{path:"",component:Y},{path:"report",component:(()=>{class i{constructor(e,o){this.dataService=e,this.confirmService=o,this.display=!0,this.entidad=new c.$,this.reportdata=new l.y,this.data={content:[],columns:[{field:"id",columnName:"Id"},{field:"estado",columnName:"Estado"},{field:"tipo",columnName:"Tipo"},{field:"nombre",columnName:"Nombre"},{field:"descripcion",columnName:"Descrip."},{field:"saldo",columnName:"Saldo",align:"right"},{actions:[{iconclass:"material-icons-outlined",iconname:"summarize",event:"summarize",condition:n=>!0},{iconclass:"material-icons-outlined",iconname:"description",event:"detail",condition:n=>!0},{iconclass:"material-icons-outlined",iconname:"receipt_long",event:"transactions",condition:n=>!0}]}]},this.entidadconfig={path:"/all/entidad/byentidad",columns:["id","nombre","direccion"]}}ngOnInit(){this.reportdata.limit=20,this.reportdata.offset=0}onAutocompleteSelected(e){this.entidad=e,this.getdata()}onActionReport(e){switch(e.event){case"transactions":this.display=!1,this.transactions.open(e.row);break;case"summarize":this.display=!1,this.resumen.open(e.row);break;case"detail":this.display=!1,this.detalle.open(e.row)}console.log("onActionReport",e)}onReportEvent(e){this.display=!0}onReportResumenEvent(e){this.display=!0}onReportDetalleEvent(e){this.display=!0}onChangePage(e){this.reportdata.limit=e.limit,this.reportdata.offset=e.offset,this.getdata()}getdata(){this.reportdata.orderby="id",this.reportdata.ordertype="desc",this.reportdata.id=this.entidad.id,this.dataService.postdata("/inicio/cuenta/report",this.reportdata).subscribe(e=>{this.data.content=e.list;let o=new h.n;o.total=e.total,o.limit=this.reportdata.limit,this.pagination.update(o)})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u.D),t.Y36(b.I))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-cuenta-reports"]],viewQuery:function(o,n){if(1&o&&(t.Gf(et,7),t.Gf(nt,7),t.Gf(ot,7),t.Gf(it,7)),2&o){let a;t.iGM(a=t.CRH())&&(n.pagination=a.first),t.iGM(a=t.CRH())&&(n.transactions=a.first),t.iGM(a=t.CRH())&&(n.resumen=a.first),t.iGM(a=t.CRH())&&(n.detalle=a.first)}},decls:23,vars:4,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["for","entidad"],["id","entidad",3,"config","itemSelected"],[1,"mo-panel-content"],["class","form-group",4,"ngIf"],[3,"data","action"],[3,"changePage"],["pagination",""],[3,"reportEvent"],["transactions",""],["resumen",""],["detalle",""],[1,"form-group"],[1,"input-control-info"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Listado de cuentas"),t.qZA()(),t.TgZ(8,"div",6)(9,"label",7),t._uU(10,"Buscar por entidad:"),t.qZA(),t.TgZ(11,"mo-autocomplete",8),t.NdJ("itemSelected",function(s){return n.onAutocompleteSelected(s)}),t.qZA()()(),t.TgZ(12,"div",9),t.YNc(13,at,5,2,"div",10),t.TgZ(14,"mo-report",11),t.NdJ("action",function(s){return n.onActionReport(s)}),t.qZA(),t.TgZ(15,"mo-pagination",12,13),t.NdJ("changePage",function(s){return n.onChangePage(s)}),t.qZA()()()()()(),t.TgZ(17,"cuenta-transaccion-report",14,15),t.NdJ("reportEvent",function(s){return n.onReportEvent(s)}),t.qZA(),t.TgZ(19,"cuenta-report-resumen",14,16),t.NdJ("reportEvent",function(s){return n.onReportResumenEvent(s)}),t.qZA(),t.TgZ(21,"cuenta-report-detalle",14,17),t.NdJ("reportEvent",function(s){return n.onReportDetalleEvent(s)}),t.qZA()),2&o&&(t.Q6J("hidden",!n.display),t.xp6(11),t.Q6J("config",n.entidadconfig),t.xp6(2),t.Q6J("ngIf",0!==n.entidad.id),t.xp6(1),t.Q6J("data",n.data))},dependencies:[d.O5,C.t,S.J,w.r,U,W,tt],encapsulation:2})}return i})()},{path:"**",redirectTo:""}]}];let st=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[v.Bz.forChild(rt),v.Bz]})}return i})();var ct=r(8368),lt=r(2454),dt=r(4553),ut=r(9373);let pt=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[d.ez,p.u5,Z.S,J._8]})}return i})(),mt=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[d.ez,st,ct.U,dt.W,lt.q,pt,p.UX,Z.S,A.K,ut.V]})}return i})()},9920:(T,g,r)=>{r.d(g,{I:()=>v,K:()=>t});var d=r(4946);let v=(()=>{class m{constructor(){this._printStyle=[],this.previewOnly=!1,this.useExistingCss=!1,this.printDelay=0,this._styleSheetFile=""}set printStyle(c){for(let l in c)c.hasOwnProperty(l)&&this._printStyle.push((l+JSON.stringify(c[l])).replace(/['"]+/g,""));this.returnStyleValues()}returnStyleValues(){return`<style> ${this._printStyle.join(" ").replace(/,/g,";")} </style>`}set styleSheetFile(c){let l=function(h){return`<link rel="stylesheet" type="text/css" href="${h}">`};if(-1!==c.indexOf(",")){const h=c.split(",");for(let u of h)this._styleSheetFile=this._styleSheetFile+l(u)}else this._styleSheetFile=l(c)}returnStyleSheetLinkTags(){return this._styleSheetFile}getElementTag(c){const l=[],h=document.getElementsByTagName(c);for(let u=0;u<h.length;u++)l.push(h[u].outerHTML);return l.join("\r\n")}getFormData(c){for(var l=0;l<c.length;l++)c[l].defaultValue=c[l].value,c[l].checked&&(c[l].defaultChecked=!0)}getHtmlContents(){let c=document.getElementById(this.printSectionId),l=c.getElementsByTagName("input");this.getFormData(l);let h=c.getElementsByTagName("textarea");return this.getFormData(h),c.innerHTML}print(){let c,l,h="",u="";const b=this.getElementTag("base");this.useExistingCss&&(h=this.getElementTag("style"),u=this.getElementTag("link")),c=this.getHtmlContents(),l=window.open("","_blank","top=0,left=0,height=auto,width=auto"),l.document.open(),l.document.write(`\n      <html>\n        <head>\n          <title>${this.printTitle?this.printTitle:""}</title>\n          ${b}\n          ${this.returnStyleValues()}\n          ${this.returnStyleSheetLinkTags()}\n          ${h}\n          ${u}\n        </head>\n        <body>\n          ${c}\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              ${this.previewOnly?"":`setTimeout(function() {\n                closeWindow(window.print());\n              }, ${this.printDelay});`}\n            }\n            function closeWindow(){\n                window.close();\n            }\n            window.addEventListener('load', triggerPrint, false);\n          <\/script>\n        </body>\n      </html>`),l.document.close()}}return m.\u0275fac=function(c){return new(c||m)},m.\u0275dir=d.lG2({type:m,selectors:[["button","ngxPrint",""]],hostBindings:function(c,l){1&c&&d.NdJ("click",function(){return l.print()})},inputs:{previewOnly:"previewOnly",printSectionId:"printSectionId",printTitle:"printTitle",useExistingCss:"useExistingCss",printDelay:"printDelay",printStyle:"printStyle",styleSheetFile:"styleSheetFile"}}),m})(),t=(()=>{class m{}return m.\u0275fac=function(c){return new(c||m)},m.\u0275mod=d.oAB({type:m}),m.\u0275inj=d.cJS({}),m})()}}]);