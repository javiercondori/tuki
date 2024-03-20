"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[38],{8555:(u,c,s)=>{s.d(c,{r:()=>t});var l=s(5289),m=s(698);class t{constructor(){this.id=0,this.entidad=new l.$,this.tipo="",this.nombre="",this.descripcion="",this.estado="ACTIVO",this.saldo=0,this.establecimiento=new m.A}}},5289:(u,c,s)=>{s.d(c,{$:()=>l});class l{constructor(){this.id=0,this.nombre="",this.direccion="",this.telefono=""}}},1038:(u,c,s)=>{s.r(c),s.d(c,{GastoscuentasModule:()=>B});var l=s(6814),m=s(7664),t=s(4946),p=s(2655);let C=(()=>{class n{constructor(){}ngOnInit(){this.items=[{label:"Gastos"},{label:"Cuentas"}],this.home={icon:"pi pi-home",routerLink:"/"}}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["gcuentas-main"]],decls:2,vars:2,consts:[[3,"model","home"]],template:function(i,e){1&i&&t._UZ(0,"p-breadcrumb",0)(1,"router-outlet"),2&i&&t.Q6J("model",e.items)("home",e.home)},dependencies:[m.lC,p.a],encapsulation:2})}return n})();var f=s(7757),T=s(1106),Z=s(3259),g=s(707),y=s(9324),a=s(95),h=s(8555),G=s(3714),S=s(7492),v=s(7213);function A(n,b){if(1&n){const o=t.EpF();t.TgZ(0,"div",15)(1,"span",5)(2,"mo-autocomplete",16),t.NdJ("itemSelected",function(e){t.CHM(o);const r=t.oxw();return t.KtG(r.autocompleteSelected(e))}),t.qZA()()()}if(2&n){const o=t.oxw();t.xp6(2),t.Q6J("config",o.entidadconfig)}}function F(n,b){1&n&&(t.TgZ(0,"small",17),t._uU(1," No v\xe1\u013aido"),t.qZA())}function N(n,b){1&n&&(t.TgZ(0,"small",17),t._uU(1," No v\xe1\u013aido"),t.qZA())}const J=function(){return{width:"70vw"}},M=function(){return{"960px":"75vw"}};let _=(()=>{class n{constructor(o,i){this.formBuilder=o,this.dataService=i,this.formSaveEvent=new t.vpe,this.display=!1,this.cuentagastos=new h.r,this.entidadconfig={path:"/proveedores/proveedor/entidades",columns:["id","nombre","direccion"]},this.form=this.formBuilder.group({nombre:["",a.kI.required],descripcion:["",a.kI.required]})}ngOnInit(){}newForm(){this.form.reset(),this.cuentagastos=new h.r,this.display=!0}updateform(o){this.cuentagastos=o,this.form.controls.nombre.setValue(o.nombre),this.form.controls.descripcion.setValue(o.descripcion),this.display=!0}submit(){let o=this.form.getRawValue();this.cuentagastos.nombre=o.nombre,this.cuentagastos.descripcion=o.descripcion,this.dataService.postdata("/gastos/cuentas",this.cuentagastos).subscribe(i=>{this.display=!1,this.formSaveEvent.emit()})}get nombre(){return this.form.get("nombre")}get descripcion(){return this.form.get("descripcion")}autocompleteSelected(o){this.cuentagastos.entidad=o}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(a.QS),t.Y36(f.D))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["gcuentas-form"]],outputs:{formSaveEvent:"formSaveEvent"},decls:23,vars:15,consts:[["header","Registro Cuenta de Gastos",3,"visible","modal","breakpoints","draggable","resizable","visibleChange"],[3,"formGroup","submit"],[1,"p-fluid","grid"],["class","p-field col-12",4,"ngIf"],[1,"p-field","col-12","md:col-12"],[1,"p-float-label"],["type","text","id","entidaddata","pInputText","","disabled","",3,"value"],["for","entidadnombre"],["type","text","id","provnombre","pInputText","","formControlName","nombre"],["for","provnombre"],["class","p-error",4,"ngIf"],["type","text","id","provdescripcion","pInputText","","formControlName","descripcion"],["for","provdescripcion"],["type","submit","label","Guardar","styleClass","p-button-text",3,"disabled"],["type","button","label","Salir","styleClass","p-button-text",3,"click"],[1,"p-field","col-12"],[3,"config","itemSelected"],[1,"p-error"]],template:function(i,e){1&i&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(d){return e.display=d}),t.TgZ(1,"form",1),t.NdJ("submit",function(){return e.submit()}),t.TgZ(2,"div",2),t.YNc(3,A,3,1,"div",3),t.TgZ(4,"div",4)(5,"span",5),t._UZ(6,"input",6),t.TgZ(7,"label",7),t._uU(8,"Entidad"),t.qZA()()(),t.TgZ(9,"div",4)(10,"span",5),t._UZ(11,"input",8),t.TgZ(12,"label",9),t._uU(13,"Nombre:"),t.qZA(),t.YNc(14,F,2,0,"small",10),t.qZA()(),t.TgZ(15,"div",4)(16,"span",5),t._UZ(17,"input",11),t.TgZ(18,"label",12),t._uU(19,"Descripcion:"),t.qZA(),t.YNc(20,N,2,0,"small",10),t.qZA()()(),t._UZ(21,"p-button",13),t.TgZ(22,"p-button",14),t.NdJ("click",function(){return e.display=!1}),t.qZA()()()),2&i&&(t.Akn(t.DdM(13,J)),t.Q6J("visible",e.display)("modal",!0)("breakpoints",t.DdM(14,M))("draggable",!1)("resizable",!0),t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(2),t.Q6J("ngIf",0===e.cuentagastos.id),t.xp6(3),t.Q6J("value",e.cuentagastos.entidad.id+" | "+e.cuentagastos.entidad.nombre+" | "+e.cuentagastos.entidad.direccion),t.xp6(8),t.Q6J("ngIf",(null==e.nombre?null:e.nombre.invalid)&&((null==e.nombre?null:e.nombre.dirty)||(null==e.nombre?null:e.nombre.touched))),t.xp6(6),t.Q6J("ngIf",(null==e.descripcion?null:e.descripcion.invalid)&&((null==e.descripcion?null:e.descripcion.dirty)||(null==e.descripcion?null:e.descripcion.touched))),t.xp6(1),t.Q6J("disabled",e.form.invalid||0===e.cuentagastos.entidad.id))},dependencies:[l.O5,g.zx,G.o,a._Y,a.Fj,a.JJ,a.JL,S.J,a.sg,a.u,v.V],encapsulation:2})}return n})();const E=["form"],I=[{path:"",component:C,children:[{path:"",component:(()=>{class n{constructor(o,i){this.dataService=o,this.confirmService=i,this.report={content:[],columns:[{field:"id",columnName:"Id"},{field:"nombre",columnName:"Nombre"},{field:"descripcion",columnName:"Descripcion"},{field:"estado",columnName:"Estado"},{field:"saldo",columnName:"Saldo",align:"right"},{actions:[{iconclass:"pi pi-pencil",event:"modify",condition:e=>!0},{iconclass:"pi pi-trash",event:"delete",condition:e=>!0}]}]}}ngOnInit(){this.getdata()}openNewForm(){this.form.newForm()}openModifyForm(o){this.form.updateform(o)}saveForm(){this.getdata()}getdata(){this.dataService.getdata("/gastos/cuentas",{}).subscribe(o=>{this.report.content=o})}tableAction(o){switch(o.event){case"modify":this.openModifyForm(o.row);break;case"delete":this.confirmService.setconfirm({message:"Eliminar el Cuenta de Gastos '"+o.row.nombre+"'?",accept:()=>{this.dataService.deletedata("/gastos/cuentas",{id:o.row.id}).subscribe(e=>{this.getdata()})}})}}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(f.D),t.Y36(T.I))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["gcuentas-manage"]],viewQuery:function(i,e){if(1&i&&t.Gf(E,7),2&i){let r;t.iGM(r=t.CRH())&&(e.form=r.first)}},decls:14,vars:1,consts:[[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pButton","","pRipple","","type","button","icon","pi pi-plus","pTooltip","Nueva Cuena de Gastos",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[3,"data","action"],[3,"formSaveEvent"],["form",""]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Cuentas de Gastos"),t.qZA()(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return e.openNewForm()}),t.qZA()()(),t.TgZ(10,"div",8)(11,"mo-report",9),t.NdJ("action",function(d){return e.tableAction(d)}),t.qZA()()()()(),t.TgZ(12,"gcuentas-form",10,11),t.NdJ("formSaveEvent",function(){return e.saveForm()}),t.qZA()()),2&i&&(t.xp6(11),t.Q6J("data",e.report))},dependencies:[Z.u,g.Hq,y.t,_],encapsulation:2})}return n})()},{path:"**",redirectTo:""}]}];let U=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(I),m.Bz]})}return n})();var w=s(8368),Q=s(2454),D=s(4553);let B=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[l.ez,U,w.U,D.W,Q.q,a.UX,v.S]})}return n})()}}]);