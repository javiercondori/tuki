"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[839],{8555:(E,p,n)=>{n.d(p,{r:()=>t});var e=n(5289),a=n(698);class t{constructor(){this.id=0,this.entidad=new e.$,this.tipo="",this.nombre="",this.descripcion="",this.estado="ACTIVO",this.saldo=0,this.establecimiento=new a.A}}},5289:(E,p,n)=>{n.d(p,{$:()=>e});class e{constructor(){this.id=0,this.nombre="",this.direccion="",this.telefono=""}}},2743:(E,p,n)=>{n.d(p,{F:()=>t});var e=n(8555),a=n(8223);class t{constructor(){this.id=0,this.originAccount=new e.r,this.destinationAccount=new e.r,this.voucher=new a.c}}},3297:(E,p,n)=>{n.d(p,{y:()=>e});class e{constructor(){this.id=0,this.sid=0,this.str="",this.sstr="",this.dec=0,this.sdec=0,this.date=new Date,this.sdate=new Date,this.ordersby=[],this.limit=0,this.offset=0}}},8223:(E,p,n)=>{n.d(p,{c:()=>e});class e{constructor(){this.id=0,this.vdate=new Date,this.doccode=0,this.vtype="",this.fechatra=new Date,this.agreement="",this.comment="",this.description="",this.amount=0,this.literal="",this.username="",this.estab_id=0}}},4963:(E,p,n)=>{n.d(p,{a:()=>_});var e=n(4946),a=n(95),t=n(8555),s=n(2743),v=n(2848),r=n(1106),i=n(707),d=n(3714),h=n(6218),f=n(2105),Z=n(1532);const y=function(){return{standalone:!0}};let _=(()=>{class D{constructor(l,C,m){this.formBuilder=l,this.dataService=C,this.confirmService=m,this.formEvent=new e.vpe,this.currCuenta=new t.r,this.display=!1,this.cajas=[],this.path="",this.transfer=new s.F,this.form=this.formBuilder.group({monto:["",a.kI.required],conformidad:["",a.kI.required],comentario:[""],caja:[{},a.kI.required]})}open(l,C){this.form.reset(),this.path=C,this.transfer=l,this.currCuenta="INGRESO"===this.transfer.voucher.vtype?this.transfer.originAccount:this.transfer.destinationAccount,this.getCajas(),this.display=!0}submit(){let l=this.form.getRawValue();this.transfer.voucher.amount=l.monto,this.transfer.voucher.agreement=l.conformidad,this.transfer.voucher.comment=l.comentario,"INGRESO"===this.transfer.voucher.vtype?this.transfer.destinationAccount.id=l.caja.id:this.transfer.originAccount.id=l.caja.id,this.confirmService.setconfirm({message:"Procesar la transaccion '"+this.transfer.voucher.vtype+"'?",accept:()=>{this.dataService.postdata(this.path+"/w",this.transfer).subscribe(m=>{this.display=!1,this.formEvent.emit("ok")})}})}salir(){this.display=!1,this.formEvent.emit("salir")}getCajas(){this.dataService.getdata(this.path+"/r/cajas",{}).subscribe(l=>{this.cajas=l})}onSelectedDate(l){this.transfer.fechatra=l}get monto(){return this.form.get("monto")}get conformidad(){return this.form.get("conformidad")}get comentario(){return this.form.get("comentario")}static#t=this.\u0275fac=function(C){return new(C||D)(e.Y36(a.QS),e.Y36(v.D),e.Y36(r.I))};static#e=this.\u0275cmp=e.Xpm({type:D,selectors:[["comprobante-form"]],outputs:{formEvent:"formEvent"},decls:40,vars:12,consts:[[1,"mo-panel-content",3,"hidden"],[3,"formGroup","submit"],[1,"p-fluid","grid"],[1,"p-field","col-12","form-group"],[1,"input-control-info"],[1,"p-field","col-7","form-group"],["for","cuenta"],[1,"p-field","col-5","form-group"],["for","caja"],["appendTo","body","optionLabel","nombre","formControlName","caja","id","caja",1,"input-control",3,"options"],["dateFormat","dd MM yy",3,"ngModel","ngModelOptions","ngModelChange","onSelect"],["for","monto"],["type","text","id","monto","pInputText","","formControlName","monto",1,"input-control"],["for","conformidad"],["type","text","id","conformidad","pInputText","","formControlName","conformidad",1,"input-control"],["for","comentario"],["id","comentario","pInputTextarea","","formControlName","comentario"],["type","submit","label","Guardar","styleClass","p-button-text",3,"disabled"],["type","button","label","Salir","styleClass","p-button-text",3,"click"]],template:function(C,m){1&C&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("submit",function(){return m.submit()}),e.TgZ(2,"div",2)(3,"div",3)(4,"label"),e._uU(5,"Entidad:"),e.qZA(),e.TgZ(6,"span",4),e._uU(7),e.qZA()(),e.TgZ(8,"div",5)(9,"label",6),e._uU(10,"Cuenta:"),e.qZA(),e.TgZ(11,"span",4),e._uU(12),e.qZA()(),e.TgZ(13,"div",7)(14,"label",6),e._uU(15,"Saldo cuenta:"),e.qZA(),e.TgZ(16,"span",4),e._uU(17),e.qZA()(),e.TgZ(18,"div",7)(19,"label",8),e._uU(20,"Caja(*):"),e.qZA(),e._UZ(21,"p-dropdown",9),e.qZA(),e.TgZ(22,"div",5)(23,"label",8),e._uU(24,"Fecha transacci\xf3n:"),e.qZA(),e.TgZ(25,"p-calendar",10),e.NdJ("ngModelChange",function(b){return m.transfer.fechatra=b})("onSelect",function(b){return m.onSelectedDate(b)}),e.qZA()(),e.TgZ(26,"div",3)(27,"label",11),e._uU(28,"Monto(*):"),e.qZA(),e._UZ(29,"input",12),e.qZA(),e.TgZ(30,"div",3)(31,"label",13),e._uU(32,"Conformidad(*):"),e.qZA(),e._UZ(33,"input",14),e.qZA(),e.TgZ(34,"div",3)(35,"label",15),e._uU(36,"Comentario(*):"),e.qZA(),e._UZ(37,"textarea",16),e.qZA(),e._UZ(38,"p-button",17),e.TgZ(39,"p-button",18),e.NdJ("click",function(){return m.salir()}),e.qZA()()()()),2&C&&(e.Q6J("hidden",!m.display),e.xp6(1),e.Q6J("formGroup",m.form),e.xp6(6),e.AsE("",m.currCuenta.entidad.id," - ",m.currCuenta.entidad.nombre,""),e.xp6(5),e.AsE("",m.currCuenta.id," - ",m.currCuenta.nombre,""),e.xp6(5),e.Oqu(m.currCuenta.saldo),e.xp6(4),e.Q6J("options",m.cajas),e.xp6(4),e.Q6J("ngModel",m.transfer.fechatra)("ngModelOptions",e.DdM(11,y)),e.xp6(13),e.Q6J("disabled",m.form.invalid))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,i.zx,d.o,h.g,f.Lt,Z.f,a.On],encapsulation:2})}return D})()},1749:(E,p,n)=>{n.d(p,{_:()=>h});var e=n(6814),a=n(95),t=n(707),s=n(2105),v=n(3714),r=n(6218),i=n(1532),d=n(4946);let h=(()=>{class f{static#t=this.\u0275fac=function(_){return new(_||f)};static#e=this.\u0275mod=d.oAB({type:f});static#n=this.\u0275inj=d.cJS({imports:[e.ez,a.UX,t.hJ,v.j,r.A,s.kW,i._8,a.u5]})}return f})()},4131:(E,p,n)=>{n.d(p,{Z:()=>U});var e=n(8555),a=n(3297),t=n(4946),s=n(2848),v=n(1106),r=n(9324),i=n(1532),d=n(2105),h=n(95),f=n(2743),Z=n(6814),y=n(7213),_=n(707),D=n(9920);function O(g,S){if(1&g&&(t.TgZ(0,"table",3)(1,"tr")(2,"td",6)(3,"h2"),t._uU(4),t.qZA()()(),t.TgZ(5,"tr")(6,"td"),t._uU(7),t.qZA(),t._UZ(8,"td"),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"tr")(13,"th"),t._uU(14,"Cuenta:"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Descripci\xf3n:"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Monto"),t.qZA()(),t.TgZ(19,"tr")(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td",7),t._uU(25),t.qZA()()()),2&g){const o=t.oxw();t.xp6(4),t.AsE("COMPROBANTE DE ",o.transfer.voucher.vtype," #",o.transfer.voucher.doccode,""),t.xp6(3),t.AsE("Entidad: ",o.transfer.originAccount.entidad.id," | ",o.transfer.originAccount.entidad.nombre,""),t.xp6(3),t.hij("Fecha: ",t.lcZ(11,9,o.transfer.voucher.vdate),""),t.xp6(11),t.AsE("",o.transfer.originAccount.id," | ",o.transfer.originAccount.nombre,""),t.xp6(2),t.Oqu(o.transfer.voucher.description),t.xp6(2),t.Oqu(o.transfer.voucher.amount)}}function l(g,S){if(1&g&&(t.TgZ(0,"table",3)(1,"tr")(2,"td",6)(3,"h2"),t._uU(4),t.qZA()()(),t.TgZ(5,"tr")(6,"td"),t._uU(7),t.qZA(),t._UZ(8,"td"),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"tr")(13,"th"),t._uU(14,"Cuenta:"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Comentario:"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Monto"),t.qZA()(),t.TgZ(19,"tr")(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td",7),t._uU(25),t.qZA()()()),2&g){const o=t.oxw();t.xp6(4),t.AsE("COMPROBANTE DE ",o.transfer.voucher.vtype," #",o.transfer.voucher.doccode,""),t.xp6(3),t.AsE("Entidad: ",o.transfer.destinationAccount.entidad.id," | ",o.transfer.destinationAccount.entidad.nombre,""),t.xp6(3),t.hij("Fecha: ",t.lcZ(11,9,o.transfer.voucher.vdate),""),t.xp6(11),t.AsE("",o.transfer.destinationAccount.id," | ",o.transfer.destinationAccount.nombre,""),t.xp6(2),t.Oqu(o.transfer.voucher.description),t.xp6(2),t.Oqu(o.transfer.voucher.amount)}}const C=function(){return{width:"70vw"}},m=function(){return{"960px":"75vw"}};let M=(()=>{class g{constructor(o){this.dataService=o,this.transfer=new f.F,this.display=!1,this.formSaveEvent=new t.vpe}ngOnInit(){}open(o){this.dataService.getdata(o.url,{id:o.id}).subscribe(c=>{this.display=!0,this.transfer=c})}static#t=this.\u0275fac=function(c){return new(c||g)(t.Y36(s.D))};static#e=this.\u0275cmp=t.Xpm({type:g,selectors:[["comprobanteview"]],outputs:{formSaveEvent:"formSaveEvent"},decls:24,vars:14,consts:[["header"," ",3,"visible","modal","breakpoints","draggable","resizable","visibleChange"],["id","print-section"],["style","width:100%",4,"ngIf"],[2,"width","100%"],[1,"center"],["pButton","","printSectionId","print-section","ngxPrint","","styleSheetFile","assets/css/print.css"],["colspan","3",1,"test"],[1,"right"]],template:function(c,u){1&c&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(T){return u.display=T}),t.TgZ(1,"div",1),t.YNc(2,O,26,11,"table",2),t.YNc(3,l,26,11,"table",2),t._UZ(4,"br"),t.TgZ(5,"span"),t._uU(6),t.qZA(),t._UZ(7,"br")(8,"br"),t.TgZ(9,"table",3)(10,"tr")(11,"td",4),t._uU(12,"__________________________"),t.qZA(),t.TgZ(13,"td",4),t._uU(14,"__________________________"),t.qZA()(),t.TgZ(15,"tr")(16,"td",4),t._uU(17),t.qZA(),t.TgZ(18,"td",4),t._uU(19,"Conformidad: "),t._UZ(20,"br"),t._uU(21),t.qZA()()()(),t.TgZ(22,"button",5),t._uU(23,"Imprimir"),t.qZA()()),2&c&&(t.Akn(t.DdM(12,C)),t.Q6J("visible",u.display)("modal",!0)("breakpoints",t.DdM(13,m))("draggable",!1)("resizable",!0),t.xp6(2),t.Q6J("ngIf","INGRESO"===u.transfer.voucher.vtype),t.xp6(1),t.Q6J("ngIf","EGRESO"===u.transfer.voucher.vtype),t.xp6(3),t.hij("SON: ",u.transfer.voucher.literal,""),t.xp6(11),t.Oqu(u.transfer.voucher.username),t.xp6(4),t.hij(" ",u.transfer.voucher.agreement,""))},dependencies:[Z.O5,y.V,_.Hq,D.I,Z.uU],encapsulation:2})}return g})();const b=["comprobante"];let U=(()=>{class g{constructor(o,c){this.dataService=o,this.confirmService=c,this.currentDate=new Date,this.currentCaja=new e.r,this.cajaList=[],this.list=[],this.datatransfers={content:[],columns:[{field:"voucher.id",columnName:"Id"},{field:"destinationAccount.nombre",columnName:"Caja"},{field:"originAccount.nombre",columnName:"Cta"},{field:"voucher.description",columnName:"Descripci\xf3n"},{field:"voucher.status",columnName:"Estado"},{field:"voucher.agreement",columnName:"Conformidad"},{field:"voucher.amount",columnName:"Monto",align:"right"},{actions:[{iconclass:"pi pi-trash",event:"anular",condition:u=>!0},{iconclass:"pi pi-print",event:"view",condition:u=>!0}]}]}}ngOnInit(){this.datatransfers.columns[1]="INGRESO"===this.config.type?{field:"destinationAccount.nombre",columnName:"Caja"}:{field:"originAccount.nombre",columnName:"Caja"},this.dataService.getdata(this.config.path+"/r/cajas",{}).subscribe(c=>{this.cajaList=c,this.currentCaja=this.cajaList[0],this.getdata()})}actionReport(o){switch(o.event){case"anular":this.confirmService.setconfirm({message:"Eliminar transaccion Nro '"+o.row.voucher.id+"'?",accept:()=>{this.dataService.postdata(this.config.path+"/d/anular",o.row).subscribe(u=>{this.getdata()})}});break;case"view":this.comprobante.open({url:this.config.path+"/r/comprobante",id:o.row.voucher.id})}}onChangeCaja(o){}onSelectedDate(o){this.currentDate=o,this.getdata()}getdata(){let o=new a.y;o.date=this.currentDate,o.ordersby=["vo.id desc"],this.dataService.postdata(this.config.path+"/r/report",o).subscribe(c=>{this.datatransfers.content=c})}static#t=this.\u0275fac=function(c){return new(c||g)(t.Y36(s.D),t.Y36(v.I))};static#e=this.\u0275cmp=t.Xpm({type:g,selectors:[["transfer-report"]],viewQuery:function(c,u){if(1&c&&t.Gf(b,7),2&c){let A;t.iGM(A=t.CRH())&&(u.comprobante=A.first)}},inputs:{config:"config"},decls:12,vars:3,consts:[[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["appendTo","body","optionLabel","nombre","id","caja",3,"options","onChange"],["dateFormat","dd MM yy","inputId","dateformat","appendTo","body",3,"ngModel","ngModelChange","onSelect"],[1,"mo-panel-content"],[3,"data","action"],["comprobante",""]],template:function(c,u){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Comprobante de caja"),t.qZA()(),t.TgZ(5,"div",3)(6,"p-dropdown",4),t.NdJ("onChange",function(T){return u.onChangeCaja(T)}),t.qZA(),t.TgZ(7,"p-calendar",5),t.NdJ("ngModelChange",function(T){return u.currentDate=T})("onSelect",function(T){return u.onSelectedDate(T)}),t.qZA()()(),t.TgZ(8,"div",6)(9,"mo-report",7),t.NdJ("action",function(T){return u.actionReport(T)}),t.qZA()(),t._UZ(10,"comprobanteview",null,8),t.qZA()),2&c&&(t.xp6(6),t.Q6J("options",u.cajaList),t.xp6(1),t.Q6J("ngModel",u.currentDate),t.xp6(2),t.Q6J("data",u.datatransfers))},dependencies:[r.t,i.f,d.Lt,h.JJ,h.On,M],encapsulation:2})}return g})()},8989:(E,p,n)=>{n.d(p,{y:()=>y});var e=n(6814),a=n(9177),t=n(4553),s=n(1532),v=n(2105),r=n(95),i=n(7213),d=n(707),h=n(9920),f=n(4946);let Z=(()=>{class _{static#t=this.\u0275fac=function(l){return new(l||_)};static#e=this.\u0275mod=f.oAB({type:_});static#n=this.\u0275inj=f.cJS({imports:[e.ez,i.S,d.hJ,h.K]})}return _})(),y=(()=>{class _{static#t=this.\u0275fac=function(l){return new(l||_)};static#e=this.\u0275mod=f.oAB({type:_});static#n=this.\u0275inj=f.cJS({imports:[e.ez,a.A,t.W,s._8,v.kW,r.u5,Z]})}return _})()},9920:(E,p,n)=>{n.d(p,{I:()=>a,K:()=>t});var e=n(4946);let a=(()=>{class s{constructor(){this._printStyle=[],this.previewOnly=!1,this.useExistingCss=!1,this.printDelay=0,this._styleSheetFile=""}set printStyle(r){for(let i in r)r.hasOwnProperty(i)&&this._printStyle.push((i+JSON.stringify(r[i])).replace(/['"]+/g,""));this.returnStyleValues()}returnStyleValues(){return`<style> ${this._printStyle.join(" ").replace(/,/g,";")} </style>`}set styleSheetFile(r){let i=function(d){return`<link rel="stylesheet" type="text/css" href="${d}">`};if(-1!==r.indexOf(",")){const d=r.split(",");for(let h of d)this._styleSheetFile=this._styleSheetFile+i(h)}else this._styleSheetFile=i(r)}returnStyleSheetLinkTags(){return this._styleSheetFile}getElementTag(r){const i=[],d=document.getElementsByTagName(r);for(let h=0;h<d.length;h++)i.push(d[h].outerHTML);return i.join("\r\n")}getFormData(r){for(var i=0;i<r.length;i++)r[i].defaultValue=r[i].value,r[i].checked&&(r[i].defaultChecked=!0)}getHtmlContents(){let r=document.getElementById(this.printSectionId),i=r.getElementsByTagName("input");this.getFormData(i);let d=r.getElementsByTagName("textarea");return this.getFormData(d),r.innerHTML}print(){let r,i,d="",h="";const f=this.getElementTag("base");this.useExistingCss&&(d=this.getElementTag("style"),h=this.getElementTag("link")),r=this.getHtmlContents(),i=window.open("","_blank","top=0,left=0,height=auto,width=auto"),i.document.open(),i.document.write(`\n      <html>\n        <head>\n          <title>${this.printTitle?this.printTitle:""}</title>\n          ${f}\n          ${this.returnStyleValues()}\n          ${this.returnStyleSheetLinkTags()}\n          ${d}\n          ${h}\n        </head>\n        <body>\n          ${r}\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              ${this.previewOnly?"":`setTimeout(function() {\n                closeWindow(window.print());\n              }, ${this.printDelay});`}\n            }\n            function closeWindow(){\n                window.close();\n            }\n            window.addEventListener('load', triggerPrint, false);\n          <\/script>\n        </body>\n      </html>`),i.document.close()}}return s.\u0275fac=function(r){return new(r||s)},s.\u0275dir=e.lG2({type:s,selectors:[["button","ngxPrint",""]],hostBindings:function(r,i){1&r&&e.NdJ("click",function(){return i.print()})},inputs:{previewOnly:"previewOnly",printSectionId:"printSectionId",printTitle:"printTitle",useExistingCss:"useExistingCss",printDelay:"printDelay",printStyle:"printStyle",styleSheetFile:"styleSheetFile"}}),s})(),t=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({}),s})()}}]);