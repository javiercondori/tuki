"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[775],{8555:(p,c,l)=>{l.d(c,{r:()=>e});var d=l(5289),r=l(698);class e{constructor(){this.id=0,this.entidad=new d.$,this.tipo="",this.nombre="",this.descripcion="",this.estado="ACTIVO",this.saldo=0,this.establecimiento=new r.A}}},5289:(p,c,l)=>{l.d(c,{$:()=>d});class d{constructor(){this.id=0,this.nombre="",this.direccion="",this.telefono=""}}},3297:(p,c,l)=>{l.d(c,{y:()=>d});class d{constructor(){this.id=0,this.sid=0,this.str="",this.sstr="",this.dec=0,this.sdec=0,this.date=new Date,this.sdate=new Date,this.ordersby=[],this.limit=0,this.offset=0}}},3775:(p,c,l)=>{l.r(c),l.d(c,{LiquidacionModule:()=>V});var d=l(6814),r=l(7664),e=l(4946);let b=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#i=this.\u0275cmp=e.Xpm({type:a,selectors:[["liquidacion-main"]],decls:1,vars:0,template:function(o,i){1&o&&e._UZ(0,"router-outlet")},dependencies:[r.lC],encapsulation:2})}return a})();var m=l(3297),h=l(2848),f=l(1106),_=l(3259),N=l(707),g=l(9324);class C{constructor(){this.id=0,this.concepto="",this.orden=0,this.tipo="c"}}class q{constructor(){this.id=0,this.concepto=new C,this.cantidad=0,this.peso=0,this.precio=0,this.total=0}}var E=l(8555);class v{constructor(){this.cuenta=new E.r,this.id=0,this.fechatra=new Date,this.fechareg=new Date,this.cantidad=0,this.peso=0,this.precio=0,this.totalbruto=0,this.totalneto=0,this.promedio=0,this.descuento=0,this.descuentopcien=0,this.detalledescuento=[]}}var w=l(3714),u=l(95),A=l(7841),Z=l(1532),L=l(548),T=l(7213);const U=["spboletas"];function M(a,G){if(1&a&&(e.TgZ(0,"span",2)(1,"label",6),e._uU(2,"Cuenta:"),e.qZA(),e.TgZ(3,"span",7),e._uU(4),e.qZA()()),2&a){const t=e.oxw();e.xp6(4),e.lnq("",t.salidapollo.cuenta.entidad.id," - ",t.salidapollo.cuenta.entidad.nombre," ",t.salidapollo.cuenta.entidad.direccion,"")}}const F=function(){return{width:"50vw"}},B=function(){return{"960px":"75vw"}};let z=(()=>{class a{constructor(t,o){this.dataservice=t,this.confirmService=o,this.selectEvent=new e.vpe,this.display=!1,this.salidapollo=new L.x,this.spreport={content:[],columns:[{field:"id",columnName:"Id"},{field:"fechatra",columnName:"Fecha",type:"date"},{field:"cuenta.nombre",columnName:"Cliente"},{field:"nroboleta",columnName:"Nro Boleta"},{field:"total",columnName:"Cant Pollos",align:"right"},{field:"pesoneto",columnName:"Peso Neto",align:"right"},{field:"vehiculo",columnName:"Vehiculo"},{actions:[{iconclass:"material-symbols-outlined",iconname:"check_circle",event:"select",condition:i=>!0}]}]}}open(t){this.spreport.content=[],this.getData(t),this.display=!0}close(){}spReportEvent(t){"select"===t.event&&(this.display=!1,this.selectEvent.emit(t.row))}getData(t){var o=new m.y;o.id=t,o.ordersby=["salidapollo.fechatra asc"],this.dataservice.postdata("/plgalpon/liquidacion/r/spbyliq",o).subscribe(i=>{this.spreport.content=i})}static#e=this.\u0275fac=function(o){return new(o||a)(e.Y36(h.D),e.Y36(f.I))};static#i=this.\u0275cmp=e.Xpm({type:a,selectors:[["balanza-select"]],viewQuery:function(o,i){if(1&o&&e.Gf(U,5),2&o){let n;e.iGM(n=e.CRH())&&(i.spboletas=n.first)}},outputs:{selectEvent:"selectEvent"},decls:7,vars:11,consts:[["header","Formulario Salida de pollo",3,"visible","modal","breakpoints","draggable","resizable","visibleChange","onHide"],[1,"p-fluid","grid"],[1,"p-field","col-12","md:col-12","form-group"],["class","p-field col-12 md:col-12 form-group",4,"ngIf"],["id","prnmort",1,"mo-panel-content"],[3,"data","action"],["for","entidaddata"],[1,"input-control-info"]],template:function(o,i){1&o&&(e.TgZ(0,"p-dialog",0),e.NdJ("visibleChange",function(s){return i.display=s})("onHide",function(){return i.close()}),e.TgZ(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div"),e.YNc(4,M,5,3,"span",3),e.TgZ(5,"div",4)(6,"mo-report",5),e.NdJ("action",function(s){return i.spReportEvent(s)}),e.qZA()()()()()),2&o&&(e.Akn(e.DdM(9,F)),e.Q6J("visible",i.display)("modal",!0)("breakpoints",e.DdM(10,B))("draggable",!1)("resizable",!0),e.xp6(4),e.Q6J("ngIf",0!==i.salidapollo.cuenta.id),e.xp6(2),e.Q6J("data",i.spreport))},dependencies:[d.O5,g.t,T.V],encapsulation:2})}return a})();const J=["balanzaselect"],D=["liqdescuentos"];let P=(()=>{class a{constructor(t,o){this.dataservice=t,this.confirmservice=o,this.formEvent=new e.vpe,this.display=!1,this.liquidacion=new v,this.reportbalanza={content:[],columns:[{field:"id",columnName:"Id"},{field:"nroboleta",columnName:"Nro Boleta"},{field:"fechatra",columnName:"Fecha",type:"date"},{field:"cuenta.nombre",columnName:"Cuenta"},{field:"total",columnName:"Nro Pollos"},{field:"pesoneto",columnName:"Peso"},{field:"vehiculo",columnName:"Vehiculo"},{actions:[{iconname:"delete_forever",iconclass:"material-symbols-outlined",event:"delete",condition:i=>!0}]}]},this.descuentos={content:[],columns:[{editable:!1,field:"id",columnName:"ID"},{editable:!0,field:"concepto.concepto",columnName:"Concepto",input:{type:"autocomplete",path:"/plgalpon/liquidacion/r/conceptos",columns:["id","concepto","tipo"]}},{editable:!0,field:"cantidad",columnName:"Cant.",input:{type:"numeric",precision:"15",scale:"2"}},{editable:!0,field:"peso",columnName:"Peso",input:{type:"numeric",precision:"15",scale:"2"}},{editable:!0,field:"precio",columnName:"Precio",input:{type:"numeric",precision:"15",scale:"2"}},{editable:!1,field:"total",columnName:"Total"}]}}open(){this.display=!0,this.liquidacion=new v}update(t){this.getdata(t.id),this.display=!0}salir(){this.display=!1,this.formEvent.emit()}onSelectedFechatra(t){this.save()}onPrecioEvent(t){this.save()}descuentosEnterValue(t){"concepto.concepto"===t.field?(mosetfieldvalue(this.liquidacion.detalledescuento[t.row],"concepto.id",t.value.id),mosetfieldvalue(this.liquidacion.detalledescuento[t.row],"concepto.concepto",t.value.concepto),mosetfieldvalue(this.liquidacion.detalledescuento[t.row],"concepto.tipo",t.value.tipo)):mosetfieldvalue(this.liquidacion.detalledescuento[t.row],t.field,t.value);let o=this.liquidacion.detalledescuento[t.row];if(!(0==this.liquidacion.id||0==o.concepto.id||"c"==o.concepto.tipo&&0==o.cantidad||"p"==o.concepto.tipo&&0==o.peso||0==o.precio)){let i=new v;i.id=this.liquidacion.id,i.detalledescuento.push(new q),i.detalledescuento[0].id=o.id,i.detalledescuento[0].concepto.id=o.concepto.id,i.detalledescuento[0].cantidad=o.cantidad,i.detalledescuento[0].peso=o.peso,i.detalledescuento[0].precio=o.precio,this.dataservice.postdata("/plgalpon/liquidacion/w/savedescuentos",i).subscribe(n=>{this.liquidacion.id=n.id,this.liquidacion.fechatra=n.fechatra,this.liquidacion.cantidad=n.cantidad,this.liquidacion.peso=n.peso,this.liquidacion.totalneto=n.totalneto,this.liquidacion.totalbruto=n.totalbruto,this.liquidacion.promedio=n.promedio,this.liquidacion.precio=n.precio,this.liquidacion.descuento=n.descuento,this.liquidacion.descuentopcien=n.descuentopcien,this.liquidacion.detalledescuento[t.row]=n.detalledescuento[0],this.liqdescuentos.addRow(new q,"id")})}}spEvent(t){"delete"===t.event&&this.confirmservice.setconfirm({message:"Eliminar Boleta Nro '"+t.row.nroboleta+"' ?",accept:()=>{this.dataservice.postdata("/plgalpon/liquidacion/w/deleteboleta",t.row).subscribe(n=>{this.getdata(this.liquidacion.id)})}})}balanzaSelectOpen(){this.balanzaselect.open(0)}balanzaSelectEvent(t){this.addboleta(t)}getdata(t){var o=new m.y;o.ordersby=["salidapollo.fechatra desc"],o.id=t,this.dataservice.postdata("/plgalpon/liquidacion/r/spbyliqid",o).subscribe(i=>{this.reportbalanza.content=i}),this.dataservice.getdata("/plgalpon/liquidacion/r/liqbyid",{id:t}).subscribe(i=>{this.liquidacion=i,this.liquidacion.fechatra=new Date(this.liquidacion.fechatra),this.liquidacion.detalledescuento.push(new q),this.liqdescuentos.updateData(this.liquidacion.detalledescuento)})}save(){this.dataservice.postdata("/plgalpon/liquidacion/w/save",this.liquidacion).subscribe(t=>{this.getdata(t.id)})}addboleta(t){0!=this.liquidacion.id&&(t.liquidacion_id=this.liquidacion.id,this.dataservice.postdata("/plgalpon/liquidacion/w/addboleta",t).subscribe(o=>{this.getdata(this.liquidacion.id)}))}static#e=this.\u0275fac=function(o){return new(o||a)(e.Y36(h.D),e.Y36(f.I))};static#i=this.\u0275cmp=e.Xpm({type:a,selectors:[["liquidacion-form"]],viewQuery:function(o,i){if(1&o&&(e.Gf(J,5),e.Gf(D,5)),2&o){let n;e.iGM(n=e.CRH())&&(i.balanzaselect=n.first),e.iGM(n=e.CRH())&&(i.liqdescuentos=n.first)}},outputs:{formEvent:"formEvent"},decls:81,vars:16,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pTooltip","Imprimir","printSectionId","prnmort","ngxPrint","","styleSheetFile","assets/css/print.css",1,"mo-button"],[1,"material-symbols-outlined"],["pTooltip","Agregar Boleta de Balanza",1,"mo-button",3,"click"],["pTooltip","Salir",1,"mo-button",3,"click"],["id","prnmort",1,"mo-panel-content"],[1,"col-12","md:col-6"],[1,"p-fluid","grid"],[1,"p-field","col-12","md:col-3","form-group"],[1,"input-control-info"],[1,"p-field","col-12","md:col-9"],[1,"p-field","col-12","md:col-5","form-group"],["type","text","id","galnombre","pInputText","",1,"input-control",3,"ngModel","ngModelChange","change"],[1,"p-field","col-12","md:col-7","form-group"],["for","fechatra"],["dateFormat","dd MM yy","appendTo","body",1,"input-control",3,"ngModel","ngModelChange","onSelect"],[1,"p-field","col-12","md:col-4","form-group"],[1,"col-12","md:col-6",3,"hidden"],[3,"data","action"],[3,"hidden"],[3,"data","hidden","cellEnterValueEvent"],["liqdescuentos",""],[3,"selectEvent"],["balanzaselect",""]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),e._uU(7,"Formulario de Liquidaci\xf3n"),e.qZA()(),e.TgZ(8,"div",6)(9,"button",7)(10,"i",8),e._uU(11,"print"),e.qZA()(),e.TgZ(12,"button",9),e.NdJ("click",function(){return i.balanzaSelectOpen()}),e.TgZ(13,"i",8),e._uU(14,"weight"),e.qZA()(),e.TgZ(15,"button",10),e.NdJ("click",function(){return i.salir()}),e.TgZ(16,"i",8),e._uU(17,"arrow_back"),e.qZA()()()(),e.TgZ(18,"div",11)(19,"div",1)(20,"div",12)(21,"div",13)(22,"div",14)(23,"label"),e._uU(24,"Nro:"),e.qZA(),e.TgZ(25,"span",15),e._uU(26),e.qZA()(),e._UZ(27,"div",16),e.TgZ(28,"div",17)(29,"label"),e._uU(30,"Precio (Bs/Kg):"),e.qZA(),e.TgZ(31,"input",18),e.NdJ("ngModelChange",function(s){return i.liquidacion.precio=s})("change",function(s){return i.onPrecioEvent(s)}),e.qZA()(),e.TgZ(32,"div",19)(33,"label",20),e._uU(34,"Fecha:"),e.qZA(),e.TgZ(35,"p-calendar",21),e.NdJ("ngModelChange",function(s){return i.liquidacion.fechatra=s})("onSelect",function(s){return i.onSelectedFechatra(s)}),e.qZA()(),e.TgZ(36,"div",22)(37,"label"),e._uU(38,"Cant Pollos:"),e.qZA(),e.TgZ(39,"span",15),e._uU(40),e.qZA()(),e.TgZ(41,"div",22)(42,"label"),e._uU(43,"Peso (Kg):"),e.qZA(),e.TgZ(44,"span",15),e._uU(45),e.qZA()(),e.TgZ(46,"div",22)(47,"label"),e._uU(48,"Promedio (Kg/Cant):"),e.qZA(),e.TgZ(49,"span",15),e._uU(50),e.qZA()(),e.TgZ(51,"div",22)(52,"label"),e._uU(53,"Total bruto (Bs):"),e.qZA(),e.TgZ(54,"span",15),e._uU(55),e.qZA()(),e.TgZ(56,"div",22)(57,"label"),e._uU(58,"Descuento (Bs):"),e.qZA(),e.TgZ(59,"span",15),e._uU(60),e.qZA()(),e.TgZ(61,"div",22)(62,"label"),e._uU(63,"Descuento (%):"),e.qZA(),e.TgZ(64,"span",15),e._uU(65),e.qZA()(),e.TgZ(66,"div",22)(67,"label"),e._uU(68,"Total Neto (Bs):"),e.qZA(),e.TgZ(69,"span",15),e._uU(70),e.qZA()()()(),e.TgZ(71,"div",23)(72,"h3"),e._uU(73,"Boletas Balanza:"),e.qZA(),e.TgZ(74,"mo-report",24),e.NdJ("action",function(s){return i.spEvent(s)}),e.qZA()()(),e.TgZ(75,"h3",25),e._uU(76,"Descuentos:"),e.qZA(),e.TgZ(77,"mo-dataeditor",26,27),e.NdJ("cellEnterValueEvent",function(s){return i.descuentosEnterValue(s)}),e.qZA()()()()()(),e.TgZ(79,"balanza-select",28,29),e.NdJ("selectEvent",function(s){return i.balanzaSelectEvent(s)}),e.qZA()),2&o&&(e.Q6J("hidden",!i.display),e.xp6(26),e.Oqu(i.liquidacion.id),e.xp6(5),e.Q6J("ngModel",i.liquidacion.precio),e.xp6(4),e.Q6J("ngModel",i.liquidacion.fechatra),e.xp6(5),e.Oqu(i.liquidacion.cantidad),e.xp6(5),e.Oqu(i.liquidacion.peso),e.xp6(5),e.Oqu(i.liquidacion.promedio),e.xp6(5),e.Oqu(i.liquidacion.totalbruto),e.xp6(5),e.Oqu(i.liquidacion.descuento),e.xp6(5),e.Oqu(i.liquidacion.descuentopcien),e.xp6(5),e.Oqu(i.liquidacion.totalneto),e.xp6(1),e.Q6J("hidden",0==i.liquidacion.id),e.xp6(3),e.Q6J("data",i.reportbalanza),e.xp6(1),e.Q6J("hidden",0==i.liquidacion.id),e.xp6(2),e.Q6J("data",i.descuentos)("hidden",0==i.liquidacion.id))},dependencies:[_.u,w.o,u.Fj,u.JJ,u.On,g.t,A.q,Z.f,z],encapsulation:2})}return a})();const S=["liqform"],I=[{path:"",component:b,children:[{path:"",component:(()=>{class a{constructor(t,o){this.dataservice=t,this.confirmservice=o,this.display=!0,this.report={content:[],columns:[{field:"id",columnName:"Liq."},{field:"cuenta.nombre",columnName:"Cliente"},{field:"fechatra",columnName:"fecha",type:"date"},{field:"cantidad",columnName:"Nro Pollos",align:"right"},{field:"peso",columnName:"Peso total (Kg)"},{field:"promedio",columnName:"Promedio (Kg)"},{field:"precio",columnName:"Precio Bs/Kg"},{field:"totalbruto",columnName:"Bruto(Bs)"},{field:"descuento",columnName:"Descuento(Bs)"},{field:"totalneto",columnName:"Neto(Bs)",align:"right"},{actions:[{iconclass:"material-symbols-outlined",iconname:"edit_note",event:"modify",condition:i=>!0},{iconname:"upload",iconclass:"material-symbols-outlined",event:"finish",condition:i=>"PENDIENTE"==i.estado},{iconname:"scan_delete",iconclass:"material-symbols-outlined",event:"anular",condition:i=>"REALIZADO"==i.estado},{iconname:"delete",iconclass:"material-symbols-outlined",event:"delete",condition:i=>"PENDIENTE"==i.estado}]}],rows:{class:"pendiente",condition:i=>"PENDIENTE"===i.estado}}}ngOnInit(){this.getdata()}openNewLiqForm(){this.display=!1,this.liqform.open()}liqformEvent(t){this.getdata(),this.display=!0}reportEvent(t){switch(t.event){case"modify":this.display=!1,this.liqform.update(t.row);break;case"delete":this.confirmservice.setconfirm({message:"Eliminar Liquidacion Nro '"+t.row.id+"' ?",accept:()=>{this.dataservice.postdata("/plgalpon/liquidacion/d/deleteliq",t.row).subscribe(s=>{this.getdata()})}});break;case"anular":this.confirmservice.setconfirm({message:"Anular Liquidacion Nro '"+t.row.id+"' ?",accept:()=>{this.dataservice.postdata("/plgalpon/liquidacion/d/anularliq",t.row).subscribe(s=>{this.getdata()})}});break;case"finish":this.confirmservice.setconfirm({message:"Finalizar liquidacion Nro "+t.row.id+" ?",accept:()=>{this.dataservice.postdata("/plgalpon/liquidacion/w/finish",t.row).subscribe(s=>{this.getdata()})}})}}getdata(){var t=new m.y;t.ordersby=["liquidacion.fechatra asc"],this.dataservice.postdata("/plgalpon/liquidacion/r/liq",t).subscribe(o=>{this.report.content=o})}static#e=this.\u0275fac=function(o){return new(o||a)(e.Y36(h.D),e.Y36(f.I))};static#i=this.\u0275cmp=e.Xpm({type:a,selectors:[["liquidacion-manage"]],viewQuery:function(o,i){if(1&o&&e.Gf(S,5),2&o){let n;e.iGM(n=e.CRH())&&(i.liqform=n.first)}},decls:18,vars:2,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second","form-group"],["pButton","","pRipple","","type","button","icon","pi pi-plus","pTooltip","Registrar Nueva Liquidacion",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[1,"form-group"],["for","entidaddata"],[1,"input-control-info"],[3,"data","action"],[3,"formEvent"],["liqform",""]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),e._uU(7,"Liquidaciones Pollo Vivo"),e.qZA()(),e.TgZ(8,"div",6)(9,"button",7),e.NdJ("click",function(){return i.openNewLiqForm()}),e.qZA()()(),e.TgZ(10,"div",8)(11,"span",9)(12,"label",10),e._uU(13,"Entidad:"),e.qZA(),e._UZ(14,"span",11),e.qZA(),e.TgZ(15,"mo-report",12),e.NdJ("action",function(s){return i.reportEvent(s)}),e.qZA()()()()()(),e.TgZ(16,"liquidacion-form",13,14),e.NdJ("formEvent",function(s){return i.liqformEvent(s)}),e.qZA()),2&o&&(e.Q6J("hidden",!i.display),e.xp6(15),e.Q6J("data",i.report))},dependencies:[_.u,N.Hq,g.t,P],encapsulation:2})}return a})()},{path:"**",redirectTo:""}]}];let O=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#i=this.\u0275mod=e.oAB({type:a});static#t=this.\u0275inj=e.cJS({imports:[r.Bz.forChild(I),r.Bz]})}return a})();var y=l(4553),Q=l(4858),R=l(8368);let V=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#i=this.\u0275mod=e.oAB({type:a});static#t=this.\u0275inj=e.cJS({imports:[d.ez,O,R.U,y.W,y.W,Q.V,T.S,u.UX,Z._8]})}return a})()}}]);