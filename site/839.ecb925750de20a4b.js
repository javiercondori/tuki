"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[839],{2743:(E,c,e)=>{e.d(c,{F:()=>m});var n=e(8555),t=e(8223);class m{constructor(){this.id=0,this.originAccount=new n.r,this.destinationAccount=new n.r,this.voucher=new t.c}}},8223:(E,c,e)=>{e.d(c,{c:()=>n});class n{constructor(){this.id=0,this.vdate=new Date,this.doccode=0,this.vtype="",this.agreement="",this.comment="",this.description="",this.amount=0,this.literal=""}}},4963:(E,c,e)=>{e.d(c,{a:()=>v});var n=e(4946),t=e(95),m=e(8555),_=e(2743),g=e(7757),Z=e(707),l=e(3714),T=e(6218),u=e(2105);let v=(()=>{class h{constructor(a,p){this.formBuilder=a,this.dataService=p,this.formEvent=new n.vpe,this.currCuenta=new m.r,this.display=!1,this.cajas=[],this.path="",this.transfer=new _.F,this.form=this.formBuilder.group({monto:["",t.kI.required],conformidad:["",t.kI.required],comentario:["",t.kI.required],caja:[{},t.kI.required]})}open(a,p){this.form.reset(),this.getCajas(),this.path=p,this.transfer=a,this.currCuenta="INGRESO"===this.transfer.voucher.vtype?this.transfer.originAccount:this.transfer.destinationAccount,this.display=!0}submit(){let a=this.form.getRawValue();this.transfer.voucher.amount=a.monto,this.transfer.voucher.agreement=a.conformidad,this.transfer.voucher.comment=a.comentario,"INGRESO"===this.transfer.voucher.vtype?this.transfer.destinationAccount.id=a.caja.id:this.transfer.originAccount.id=a.caja.id,this.dataService.postdata(this.path,this.transfer).subscribe(p=>{this.display=!1,this.formEvent.emit("ok")})}salir(){this.display=!1,this.formEvent.emit("salir")}getCajas(){this.dataService.getdata("/caja/ingreso/cajas",{}).subscribe(a=>{this.cajas=a})}get monto(){return this.form.get("monto")}get conformidad(){return this.form.get("conformidad")}get comentario(){return this.form.get("comentario")}static#t=this.\u0275fac=function(p){return new(p||h)(n.Y36(t.QS),n.Y36(g.D))};static#n=this.\u0275cmp=n.Xpm({type:h,selectors:[["comprobante-form"]],outputs:{formEvent:"formEvent"},decls:40,vars:6,consts:[[1,"mo-panel-content",3,"hidden"],[3,"formGroup","submit"],[1,"p-fluid","grid"],[1,"p-field","col-12"],[1,"p-float-label"],["appendTo","body","optionLabel","nombre","formControlName","caja","id","caja",3,"options"],["for","caja"],["type","text","id","entidad","pInputText","","disabled","",3,"value"],["for","entidad"],["type","text","id","cuenta","pInputText","","disabled","",3,"value"],["for","cuenta"],["type","text","id","monto","pInputText","","formControlName","monto"],["for","monto"],["type","text","id","conformidad","pInputText","","formControlName","conformidad"],["for","conformidad"],["id","comentario","pInputTextarea","","formControlName","comentario"],["for","comentario"],["type","submit","label","Guardar","styleClass","p-button-text",3,"disabled"],["type","button","label","Salir","styleClass","p-button-text",3,"click"]],template:function(p,d){1&p&&(n.TgZ(0,"div",0)(1,"form",1),n.NdJ("submit",function(){return d.submit()}),n.TgZ(2,"div",2)(3,"div",3)(4,"span",4),n._UZ(5,"p-dropdown",5),n.TgZ(6,"label",6),n._uU(7,"CAJA:"),n.qZA()()(),n.TgZ(8,"div",3)(9,"span",4)(10,"span",4),n._UZ(11,"input",7),n.TgZ(12,"label",8),n._uU(13,"Entidad:"),n.qZA()()()(),n.TgZ(14,"div",3)(15,"span",4)(16,"span",4),n._UZ(17,"input",9),n.TgZ(18,"label",10),n._uU(19,"Cuenta:"),n.qZA()()()(),n.TgZ(20,"div",3)(21,"span",4)(22,"span",4),n._UZ(23,"input",11),n.TgZ(24,"label",12),n._uU(25,"Monto:"),n.qZA()()()(),n.TgZ(26,"div",3)(27,"span",4)(28,"span",4),n._UZ(29,"input",13),n.TgZ(30,"label",14),n._uU(31,"Conformidad:"),n.qZA()()()(),n.TgZ(32,"div",3)(33,"span",4)(34,"span",4),n._UZ(35,"textarea",15),n.TgZ(36,"label",16),n._uU(37,"Comentario:"),n.qZA()()()(),n._UZ(38,"p-button",17),n.TgZ(39,"p-button",18),n.NdJ("click",function(){return d.salir()}),n.qZA()()()()),2&p&&(n.Q6J("hidden",!d.display),n.xp6(1),n.Q6J("formGroup",d.form),n.xp6(4),n.Q6J("options",d.cajas),n.xp6(6),n.Q6J("value",d.currCuenta.entidad.id+" - "+d.currCuenta.entidad.nombre),n.xp6(6),n.Q6J("value",d.currCuenta.id+" - "+d.currCuenta.nombre),n.xp6(21),n.Q6J("disabled",d.form.invalid))},dependencies:[t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,Z.zx,l.o,T.g,u.Lt],encapsulation:2})}return h})()},1749:(E,c,e)=>{e.d(c,{_:()=>T});var n=e(6814),t=e(95),m=e(707),_=e(2105),g=e(3714),Z=e(6218),l=e(4946);let T=(()=>{class u{static#t=this.\u0275fac=function(b){return new(b||u)};static#n=this.\u0275mod=l.oAB({type:u});static#e=this.\u0275inj=l.cJS({imports:[n.ez,t.UX,m.hJ,g.j,Z.A,_.kW]})}return u})()},4131:(E,c,e)=>{e.d(c,{Z:()=>D});var n=e(8555),t=e(4946),m=e(7757),_=e(9324),g=e(1532),Z=e(2105),l=e(95),T=e(2743),u=e(6814),v=e(7213),h=e(707),b=e(9920);function a(s,O){if(1&s&&(t.TgZ(0,"table",3)(1,"tr")(2,"td",6)(3,"h2"),t._uU(4),t.qZA()()(),t.TgZ(5,"tr")(6,"td"),t._uU(7),t.qZA(),t._UZ(8,"td"),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"tr")(13,"th"),t._uU(14,"Cuenta:"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Descripci\xf3n:"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Monto"),t.qZA()(),t.TgZ(19,"tr")(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td",7),t._uU(25),t.qZA()()()),2&s){const o=t.oxw();t.xp6(4),t.AsE("COMPROBANTE DE ",o.transfer.voucher.vtype," #",o.transfer.voucher.doccode,""),t.xp6(3),t.AsE("Entidad: ",o.transfer.originAccount.entidad.id," | ",o.transfer.originAccount.entidad.nombre,""),t.xp6(3),t.hij("Fecha: ",t.lcZ(11,9,o.transfer.voucher.vdate),""),t.xp6(11),t.AsE("",o.transfer.originAccount.id," | ",o.transfer.originAccount.nombre,""),t.xp6(2),t.Oqu(o.transfer.voucher.description),t.xp6(2),t.Oqu(o.transfer.voucher.amount)}}function p(s,O){if(1&s&&(t.TgZ(0,"table",3)(1,"tr")(2,"td",6)(3,"h2"),t._uU(4),t.qZA()()(),t.TgZ(5,"tr")(6,"td"),t._uU(7),t.qZA(),t._UZ(8,"td"),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"tr")(13,"th"),t._uU(14,"Cuenta:"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Comentario:"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Monto"),t.qZA()(),t.TgZ(19,"tr")(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td",7),t._uU(25),t.qZA()()()),2&s){const o=t.oxw();t.xp6(4),t.AsE("COMPROBANTE DE ",o.transfer.voucher.vtype," #",o.transfer.voucher.doccode,""),t.xp6(3),t.AsE("Entidad: ",o.transfer.destinationAccount.entidad.id," | ",o.transfer.destinationAccount.entidad.nombre,""),t.xp6(3),t.hij("Fecha: ",t.lcZ(11,9,o.transfer.voucher.vdate),""),t.xp6(11),t.AsE("",o.transfer.destinationAccount.id," | ",o.transfer.destinationAccount.nombre,""),t.xp6(2),t.Oqu(o.transfer.voucher.description),t.xp6(2),t.Oqu(o.transfer.voucher.amount)}}const d=function(){return{width:"70vw"}},C=function(){return{"960px":"75vw"}};let U=(()=>{class s{constructor(o){this.dataService=o,this.transfer=new T.F,this.display=!1,this.formSaveEvent=new t.vpe}ngOnInit(){}open(o){this.dataService.getdata(o.url,{id:o.id}).subscribe(r=>{this.display=!0,this.transfer=r})}static#t=this.\u0275fac=function(r){return new(r||s)(t.Y36(m.D))};static#n=this.\u0275cmp=t.Xpm({type:s,selectors:[["comprobanteview"]],outputs:{formSaveEvent:"formSaveEvent"},decls:24,vars:13,consts:[["header"," ",3,"visible","modal","breakpoints","draggable","resizable","visibleChange"],["id","print-section"],["style","width:100%",4,"ngIf"],[2,"width","100%"],[1,"center"],["pButton","","printSectionId","print-section","ngxPrint","","styleSheetFile","assets/css/print.css"],["colspan","3",1,"test"],[1,"right"]],template:function(r,i){1&r&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(f){return i.display=f}),t.TgZ(1,"div",1),t.YNc(2,a,26,11,"table",2),t.YNc(3,p,26,11,"table",2),t._UZ(4,"br"),t.TgZ(5,"span"),t._uU(6),t.qZA(),t._UZ(7,"br")(8,"br"),t.TgZ(9,"table",3)(10,"tr")(11,"td",4),t._uU(12,"__________________________"),t.qZA(),t.TgZ(13,"td",4),t._uU(14,"__________________________"),t.qZA()(),t.TgZ(15,"tr")(16,"td",4),t._uU(17,"Molino"),t.qZA(),t.TgZ(18,"td",4),t._uU(19,"Conformidad: "),t._UZ(20,"br"),t._uU(21),t.qZA()()()(),t.TgZ(22,"button",5),t._uU(23,"Imprimir"),t.qZA()()),2&r&&(t.Akn(t.DdM(11,d)),t.Q6J("visible",i.display)("modal",!0)("breakpoints",t.DdM(12,C))("draggable",!1)("resizable",!0),t.xp6(2),t.Q6J("ngIf","INGRESO"===i.transfer.voucher.vtype),t.xp6(1),t.Q6J("ngIf","EGRESO"===i.transfer.voucher.vtype),t.xp6(3),t.hij("SON: ",i.transfer.voucher.literal,""),t.xp6(15),t.hij(" ",i.transfer.voucher.agreement,""))},dependencies:[u.O5,v.V,h.Hq,b.I,u.uU],encapsulation:2})}return s})();const M=["comprobante"];let D=(()=>{class s{constructor(o){this.dataService=o,this.currentDate=new Date,this.currentCaja=new n.r,this.cajaList=[],this.list=[],this.datatransfers={content:[],columns:[{field:"voucher.id",columnName:"Id"},{field:"destinationAccount.nombre",columnName:"Caja"},{field:"voucher.description",columnName:"Descripci\xf3n"},{field:"voucher.status",columnName:"Estado"},{field:"voucher.agreement",columnName:"Conformidad"},{field:"voucher.amount",columnName:"Monto",align:"right"},{actions:[{iconclass:"pi pi-print",event:"view",condition:r=>!0}]}]}}ngOnInit(){this.datatransfers.columns[1]="INGRESO"===this.config.type?{field:"destinationAccount.nombre",columnName:"Caja"}:{field:"originAccount.nombre",columnName:"Caja"},this.dataService.getdata(this.config.path+"/cajas",{}).subscribe(r=>{this.cajaList=r,this.currentCaja=this.cajaList[0],this.getdata()})}actionReport(o){this.comprobante.open({url:this.config.path+"/comprobante",id:o.row.voucher.id})}onChangeCaja(o){}onSelectedDate(o){this.currentDate=o,this.getdata()}getdata(){this.dataService.getdata(this.config.path+"/report",{date:this.currentDate}).subscribe(o=>{this.datatransfers.content=o})}static#t=this.\u0275fac=function(r){return new(r||s)(t.Y36(m.D))};static#n=this.\u0275cmp=t.Xpm({type:s,selectors:[["transfer-report"]],viewQuery:function(r,i){if(1&r&&t.Gf(M,7),2&r){let A;t.iGM(A=t.CRH())&&(i.comprobante=A.first)}},inputs:{config:"config"},decls:12,vars:3,consts:[[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["appendTo","body","optionLabel","nombre","id","caja",3,"options","onChange"],["dateFormat","dd MM yy","inputId","dateformat","appendTo","body",3,"ngModel","ngModelChange","onSelect"],[1,"mo-panel-content"],[3,"data","action"],["comprobante",""]],template:function(r,i){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Comprobante de caja"),t.qZA()(),t.TgZ(5,"div",3)(6,"p-dropdown",4),t.NdJ("onChange",function(f){return i.onChangeCaja(f)}),t.qZA(),t.TgZ(7,"p-calendar",5),t.NdJ("ngModelChange",function(f){return i.currentDate=f})("onSelect",function(f){return i.onSelectedDate(f)}),t.qZA()()(),t.TgZ(8,"div",6)(9,"mo-report",7),t.NdJ("action",function(f){return i.actionReport(f)}),t.qZA()(),t._UZ(10,"comprobanteview",null,8),t.qZA()),2&r&&(t.xp6(6),t.Q6J("options",i.cajaList),t.xp6(1),t.Q6J("ngModel",i.currentDate),t.xp6(2),t.Q6J("data",i.datatransfers))},dependencies:[_.t,g.f,Z.Lt,l.JJ,l.On,U],encapsulation:2})}return s})()},8989:(E,c,e)=>{e.d(c,{y:()=>b});var n=e(6814),t=e(9177),m=e(4553),_=e(1532),g=e(2105),Z=e(95),l=e(7213),T=e(707),u=e(9920),v=e(4946);let h=(()=>{class a{static#t=this.\u0275fac=function(C){return new(C||a)};static#n=this.\u0275mod=v.oAB({type:a});static#e=this.\u0275inj=v.cJS({imports:[n.ez,l.S,T.hJ,u.K]})}return a})(),b=(()=>{class a{static#t=this.\u0275fac=function(C){return new(C||a)};static#n=this.\u0275mod=v.oAB({type:a});static#e=this.\u0275inj=v.cJS({imports:[n.ez,t.A,m.W,_._8,g.kW,Z.u5,h]})}return a})()}}]);