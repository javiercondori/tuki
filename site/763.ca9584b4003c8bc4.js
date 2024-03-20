"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[763],{8196:(f,l,o)=>{o.d(l,{o:()=>s});class s{constructor(){this.id=0,this.nombre=""}}},318:(f,l,o)=>{o.r(l),o.d(l,{ProductotipoModule:()=>J});var s=o(6814),c=o(7664),t=o(4946),a=o(2655);let b=(()=>{class n{constructor(){}ngOnInit(){this.items=[{label:"Almacen"},{label:"Tipo de Producto"}],this.home={icon:"pi pi-home",routerLink:"/"}}static#t=this.\u0275fac=function(e){return new(e||n)};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["productotipo-main"]],decls:2,vars:2,consts:[[3,"model","home"]],template:function(e,i){1&e&&t._UZ(0,"p-breadcrumb",0)(1,"router-outlet"),2&e&&t.Q6J("model",i.items)("home",i.home)},dependencies:[c.lC,a.a],encapsulation:2})}return n})();var m=o(7757),u=o(1106),y=o(3259),v=o(707),P=o(9324),d=o(95),_=o(8196),M=o(3714),g=o(7213);function T(n,O){1&n&&(t.TgZ(0,"small",12),t._uU(1,"Nombre no v\xe1lido"),t.qZA())}const C=function(){return{width:"70vw"}},E=function(){return{"960px":"75vw"}};let F=(()=>{class n{constructor(r,e){this.formBuilder=r,this.dataService=e,this.productotipo=new _.o,this.display=!1,this.formEvent=new t.vpe,this.form=this.formBuilder.group({id:[{value:0,disabled:!0}],nombre:["",d.kI.required]})}ngOnInit(){}newForm(){this.form.reset(),this.form.controls.id.setValue(this.productotipo.id),this.display=!0}updateform(r){this.form.controls.id.setValue(r.id),this.form.controls.nombre.setValue(r.nombre),this.display=!0}submit(){let r=this.form.getRawValue();this.dataService.postdata("/almacen/productotipo",r).subscribe(e=>{this.display=!1,this.formEvent.emit()})}get nombre(){return this.form.get("nombre")}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(d.QS),t.Y36(m.D))};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["productotipo-form"]],outputs:{formEvent:"formEvent"},decls:16,vars:12,consts:[["header","Datos Producto",3,"visible","modal","breakpoints","draggable","resizable","visibleChange"],[3,"formGroup","submit"],[1,"p-fluid","grid"],[1,"p-field","col-12","md:col-12"],[1,"p-float-label"],["type","text","id","productoid","pInputText","","formControlName","id"],["for","productoid"],["type","text","id","nombre","pInputText","","formControlName","nombre"],["for","nombre"],["class","p-error",4,"ngIf"],["type","submit","label","Guardar","styleClass","p-button-text",3,"disabled"],["type","button","label","Salir","styleClass","p-button-text",3,"click"],[1,"p-error"]],template:function(e,i){1&e&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(h){return i.display=h}),t.TgZ(1,"form",1),t.NdJ("submit",function(){return i.submit()}),t.TgZ(2,"div",2)(3,"div",3)(4,"span",4),t._UZ(5,"input",5),t.TgZ(6,"label",6),t._uU(7,"ID:"),t.qZA()()(),t.TgZ(8,"div",3)(9,"span",4),t._UZ(10,"input",7),t.TgZ(11,"label",8),t._uU(12,"Nombre:"),t.qZA(),t.YNc(13,T,2,0,"small",9),t.qZA()()(),t._UZ(14,"p-button",10),t.TgZ(15,"p-button",11),t.NdJ("click",function(){return i.display=!1}),t.qZA()()()),2&e&&(t.Akn(t.DdM(10,C)),t.Q6J("visible",i.display)("modal",!0)("breakpoints",t.DdM(11,E))("draggable",!1)("resizable",!0),t.xp6(1),t.Q6J("formGroup",i.form),t.xp6(12),t.Q6J("ngIf",(null==i.nombre?null:i.nombre.invalid)&&((null==i.nombre?null:i.nombre.dirty)||(null==i.nombre?null:i.nombre.touched))),t.xp6(1),t.Q6J("disabled",i.form.invalid))},dependencies:[s.O5,v.zx,M.o,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,g.V],encapsulation:2})}return n})();const Z=["form"],A=[{path:"",component:b,children:[{path:"",component:(()=>{class n{constructor(r,e){this.dataService=r,this.confirmService=e,this.report={content:[],columns:[{field:"id",columnName:"Id"},{field:"nombre",columnName:"Nombre"},{field:"comentario",columnName:"Comentario"},{field:"estado",columnName:"Estado"},{field:"factorinventario",columnName:"Factor"},{actions:[{iconclass:"pi pi-pencil",event:"modify",condition:i=>!0},{iconclass:"pi pi-trash",event:"delete",condition:i=>!0}]}]}}ngOnInit(){this.getdata()}openNewForm(){this.form.newForm()}openModifyForm(r){this.form.updateform(r)}saveForm(){this.getdata()}getdata(){this.dataService.getdata("/almacen/productotipo",{}).subscribe(r=>{this.report.content=r})}tableAction(r){switch(r.event){case"modify":this.openModifyForm(r.row);break;case"delete":this.confirmService.setconfirm({message:"Eliminar el Tipo Producto '"+r.row.nombre+"'?",accept:()=>{this.dataService.deletedata("/almacen/productotipo",{id:r.row.id}).subscribe(i=>{this.getdata()})}})}}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(m.D),t.Y36(u.I))};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["productotipo-manage"]],viewQuery:function(e,i){if(1&e&&t.Gf(Z,7),2&e){let p;t.iGM(p=t.CRH())&&(i.form=p.first)}},decls:14,vars:1,consts:[[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pButton","","pRipple","","type","button","icon","pi pi-plus","pTooltip","Registrar nuevo Producto",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[3,"data","action"],[3,"formEvent"],["form",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Listado de Productos"),t.qZA()(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return i.openNewForm()}),t.qZA()()(),t.TgZ(10,"div",8)(11,"mo-report",9),t.NdJ("action",function(h){return i.tableAction(h)}),t.qZA()()()()(),t.TgZ(12,"productotipo-form",10,11),t.NdJ("formEvent",function(){return i.saveForm()}),t.qZA()()),2&e&&(t.xp6(11),t.Q6J("data",i.report))},dependencies:[y.u,v.Hq,P.t,F],encapsulation:2})}return n})()},{path:"**",redirectTo:""}]}];let D=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#o=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(A),c.Bz]})}return n})();var N=o(8368),U=o(4553);let J=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#o=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[s.ez,D,N.U,U.W,d.UX,g.S]})}return n})()},2415:(f,l,o)=>{o.d(l,{E:()=>t});var s=o(4946),c=o(6814);let t=(()=>{class a{constructor(m){this.datePipe=m}transform(m,...u){return this.datePipe.transform(m,"dd/MM/yyyy")}static#t=this.\u0275fac=function(u){return new(u||a)(s.Y36(c.uU,16))};static#o=this.\u0275pipe=s.Yjl({name:"dateFormat",type:a,pure:!0})}return a})()},4621:(f,l,o)=>{o.d(l,{L:()=>t});var s=o(4946),c=o(6814);let t=(()=>{class a{constructor(m){this.datePipe=m}transform(m,...u){return this.datePipe.transform(m,"dd/MM/yyyy H:mm:ss")}static#t=this.\u0275fac=function(u){return new(u||a)(s.Y36(c.uU,16))};static#o=this.\u0275pipe=s.Yjl({name:"datetimeFormat",type:a,pure:!0})}return a})()},9177:(f,l,o)=>{o.d(l,{A:()=>t});var s=o(6814),c=o(4946);let t=(()=>{class a{static#t=this.\u0275fac=function(u){return new(u||a)};static#o=this.\u0275mod=c.oAB({type:a});static#e=this.\u0275inj=c.cJS({providers:[s.uU],imports:[s.ez]})}return a})()}}]);