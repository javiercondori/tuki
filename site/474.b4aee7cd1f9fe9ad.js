"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[474],{8555:(h,u,a)=>{a.d(u,{r:()=>n});var t=a(5289),m=a(698);class n{constructor(){this.id=0,this.entidad=new t.$,this.tipo="",this.nombre="",this.descripcion="",this.estado="ACTIVO",this.saldo=0,this.establecimiento=new m.A}}},5289:(h,u,a)=>{a.d(u,{$:()=>t});class t{constructor(){this.id=0,this.nombre="",this.direccion="",this.telefono=""}}},2743:(h,u,a)=>{a.d(u,{F:()=>n});var t=a(8555),m=a(8223);class n{constructor(){this.id=0,this.originAccount=new t.r,this.destinationAccount=new t.r,this.voucher=new m.c}}},3297:(h,u,a)=>{a.d(u,{y:()=>t});class t{constructor(){this.id=0,this.sid=0,this.str="",this.sstr="",this.dec=0,this.sdec=0,this.date=new Date,this.sdate=new Date,this.ordersby=[],this.limit=0,this.offset=0}}},8223:(h,u,a)=>{a.d(u,{c:()=>t});class t{constructor(){this.id=0,this.vdate=new Date,this.doccode=0,this.vtype="",this.fechatra=new Date,this.agreement="",this.comment="",this.description="",this.amount=0,this.literal="",this.username="",this.estab_id=0}}},9324:(h,u,a)=>{a.d(u,{t:()=>P});var t=a(4946),m=a(6814),n=a(4621),_=a(2415),x=a(7635);function g(c,l){if(1&c&&(t.ynx(0),t._uU(1),t.BQk()),2&c){const o=t.oxw();t.xp6(1),t.Oqu(o.data.caption)}}function v(c,l){if(1&c&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&c){const o=t.oxw(),s=o.index,i=o.$implicit,M=t.oxw();t.Udp("text-align",M.data.columns[s].align),t.xp6(1),t.hij("",i.columnName," ")}}function C(c,l){1&c&&t._UZ(0,"th",5)}function T(c,l){if(1&c&&(t.ynx(0),t.YNc(1,v,2,3,"th",3),t.YNc(2,C,1,0,"th",4),t.BQk()),2&c){const o=l.$implicit;t.xp6(1),t.Q6J("ngIf",o.field),t.xp6(1),t.Q6J("ngIf",!o.field)}}function Z(c,l){if(1&c&&(t.ynx(0),t.TgZ(1,"td",5),t._uU(2),t.qZA(),t.BQk()),2&c){const o=l.$implicit,s=t.oxw(2);t.xp6(1),t.Udp("text-align",o.align),t.uIk("colspan",o.colspan),t.xp6(1),t.hij("",s.data.foot.content[o.index]," ")}}function p(c,l){if(1&c&&(t.TgZ(0,"tfoot")(1,"tr"),t.YNc(2,Z,3,4,"ng-container",2),t.qZA()()),2&c){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.data.foot.cols)}}function A(c,l){if(1&c&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&c){const o=t.oxw().index,s=t.oxw().index,i=t.oxw();t.Udp("text-align",i.data.columns[o].align),t.xp6(1),t.Oqu(i.getfieldvalue(s,o))}}function O(c,l){if(1&c&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"dateFormat"),t.qZA()),2&c){const o=t.oxw().index,s=t.oxw().index,i=t.oxw();t.Udp("text-align",i.data.columns[o].align),t.xp6(1),t.Oqu(t.lcZ(2,3,i.getfieldvalue(s,o)))}}function w(c,l){if(1&c&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"datetimeFormat"),t.qZA()),2&c){const o=t.oxw().index,s=t.oxw().index,i=t.oxw();t.Udp("text-align",i.data.columns[o].align),t.xp6(1),t.Oqu(t.lcZ(2,3,i.getfieldvalue(s,o)))}}function y(c,l){if(1&c&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"periodmonthFormat"),t.qZA()),2&c){const o=t.oxw().index,s=t.oxw().index,i=t.oxw();t.Udp("text-align",i.data.columns[o].align),t.xp6(1),t.Oqu(t.lcZ(2,3,i.getfieldvalue(s,o)))}}function E(c,l){if(1&c){const o=t.EpF();t.TgZ(0,"a",12),t.NdJ("click",function(i){t.CHM(o);const M=t.oxw().$implicit,e=t.oxw(3).$implicit,r=t.oxw();return t.KtG(r.actionEvent(i,e,M.event))}),t.TgZ(1,"i"),t._uU(2),t.qZA()()}if(2&c){const o=t.oxw().$implicit;t.xp6(1),t.Tol(o.iconclass),t.xp6(1),t.Oqu(o.iconname)}}function b(c,l){if(1&c&&(t.ynx(0),t.YNc(1,E,3,4,"a",11),t.BQk()),2&c){const o=l.$implicit,s=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf",o.condition(s))}}function B(c,l){if(1&c&&(t.TgZ(0,"td",9)(1,"div",10),t.YNc(2,b,2,1,"ng-container",2),t.qZA()()),2&c){const o=t.oxw().index,s=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",s.data.columns[o].actions)}}function U(c,l){if(1&c&&(t.ynx(0),t.YNc(1,A,2,3,"td",7),t.YNc(2,O,3,5,"td",7),t.YNc(3,w,3,5,"td",7),t.YNc(4,y,3,5,"td",7),t.YNc(5,B,3,1,"td",8),t.BQk()),2&c){const o=l.index,s=t.oxw(2);t.xp6(1),t.Q6J("ngIf",s.data.columns[o].field&&void 0===s.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",s.data.columns[o].field&&"date"===s.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",s.data.columns[o].field&&"datetime"===s.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",s.data.columns[o].field&&"periodmonth"===s.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",!s.data.columns[o].field)}}function I(c,l){if(1&c&&(t.ynx(0),t.TgZ(1,"tr",6),t.YNc(2,U,6,5,"ng-container",2),t.qZA(),t.BQk()),2&c){const o=l.$implicit,s=t.oxw();t.xp6(1),t.Q6J("ngClass",void 0!==s.data.rowclass?s.data.rowclass(o,s.data.val):s.data.rows.condition(o)?s.data.rows.class:""),t.xp6(1),t.Q6J("ngForOf",s.data.columns)}}let P=(()=>{class c{constructor(){this.fielddefault={align:"left"},this.rows={class:"",condition:o=>!1},this.action=new t.vpe}ngOnInit(){for(let o of this.data.columns)void 0!==o.field&&mosetdefaults(this.fielddefault,o);void 0===this.data.rows&&(this.data.rows=this.rows)}getfieldvalue(o,s){return mogetfieldvalue(this.data.content[o],this.data.columns[s].field)}actionEvent(o,s,i){o.preventDefault(),this.action.emit({event:i,row:s})}static#t=this.\u0275fac=function(s){return new(s||c)};static#n=this.\u0275cmp=t.Xpm({type:c,selectors:[["mo-report"]],inputs:{data:"data"},outputs:{action:"action"},decls:9,vars:4,consts:[[1,"customers"],[4,"ngIf"],[4,"ngFor","ngForOf"],["scope","col",3,"text-align",4,"ngIf"],["scope","col",4,"ngIf"],["scope","col"],[3,"ngClass"],[3,"text-align",4,"ngIf"],["style","padding: 0;",4,"ngIf"],[2,"padding","0"],[1,"mo-reportactions"],["href","#",3,"click",4,"ngIf"],["href","#",3,"click"]],template:function(s,i){1&s&&(t.TgZ(0,"table",0)(1,"caption"),t.YNc(2,g,2,1,"ng-container",1),t.qZA(),t.TgZ(3,"thead")(4,"tr"),t.YNc(5,T,3,2,"ng-container",2),t.qZA()(),t.YNc(6,p,3,1,"tfoot",1),t.TgZ(7,"tbody"),t.YNc(8,I,3,2,"ng-container",2),t.qZA()()),2&s&&(t.xp6(2),t.Q6J("ngIf",i.data.caption),t.xp6(3),t.Q6J("ngForOf",i.data.columns),t.xp6(1),t.Q6J("ngIf",i.data.foot),t.xp6(2),t.Q6J("ngForOf",i.data.content))},dependencies:[m.mk,m.sg,m.O5,n.L,_.E,x.v],styles:[".customers[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.customers[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.4em;color:#3e3e3e;font-weight:700}.customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #f2f2f2}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;text-align:center;background-color:#464646;color:#fff}.customers[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{padding-top:2px;padding-bottom:2px;color:#383838;font-weight:700}"]})}return c})()},4553:(h,u,a)=>{a.d(u,{W:()=>_});var t=a(6814),m=a(9177),n=a(4946);let _=(()=>{class x{static#t=this.\u0275fac=function(C){return new(C||x)};static#n=this.\u0275mod=n.oAB({type:x});static#o=this.\u0275inj=n.cJS({imports:[t.ez,m.A]})}return x})()},8474:(h,u,a)=>{a.r(u),a.d(u,{BaccountsModule:()=>s});var t=a(6814),m=a(7664),n=a(4946);let _=(()=>{class i{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(r){return new(r||i)};static#n=this.\u0275cmp=n.Xpm({type:i,selectors:[["baccounts-main"]],decls:1,vars:0,template:function(r,d){1&r&&n._UZ(0,"router-outlet")},dependencies:[m.lC],encapsulation:2})}return i})();var x=a(3297),g=a(2848),v=a(1106),C=a(3259),T=a(707),Z=a(9324),p=a(95),A=a(2743),O=a(3714),w=a(7492);function y(i,M){if(1&i){const e=n.EpF();n.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2"),n._uU(7,"Transferencia Entre Cuentas"),n.qZA()(),n.TgZ(8,"div",7)(9,"button",8),n.NdJ("click",function(){n.CHM(e);const d=n.oxw();return n.KtG(d.salir())}),n.qZA()()(),n.TgZ(10,"div",9)(11,"form",10),n.NdJ("submit",function(){n.CHM(e);const d=n.oxw();return n.KtG(d.submit())}),n.TgZ(12,"div",11)(13,"div",12)(14,"span",13)(15,"mo-autocomplete",14),n.NdJ("itemSelected",function(d){n.CHM(e);const f=n.oxw();return n.KtG(f.originAccountSelected(d))}),n.qZA()()(),n.TgZ(16,"div",15)(17,"span",13),n._UZ(18,"input",16),n.TgZ(19,"label",17),n._uU(20,"Cuenta origen:"),n.qZA()()(),n.TgZ(21,"div",18),n._uU(22),n.qZA(),n.TgZ(23,"div",12)(24,"span",13)(25,"mo-autocomplete",14),n.NdJ("itemSelected",function(d){n.CHM(e);const f=n.oxw();return n.KtG(f.destinationAccountSelected(d))}),n.qZA()()(),n.TgZ(26,"div",15)(27,"span",13),n._UZ(28,"input",19),n.TgZ(29,"label",20),n._uU(30,"Cuenta Destino:"),n.qZA()()(),n.TgZ(31,"div",18),n._uU(32),n.qZA(),n.TgZ(33,"div",21)(34,"span",13),n._UZ(35,"input",22),n.TgZ(36,"label",23),n._uU(37,"Detalle:"),n.qZA()()(),n.TgZ(38,"div",21)(39,"span",13),n._UZ(40,"input",24),n.TgZ(41,"label",25),n._uU(42,"Monto:"),n.qZA()()()(),n._UZ(43,"p-button",26),n.TgZ(44,"p-button",27),n.NdJ("click",function(){n.CHM(e);const d=n.oxw();return n.KtG(d.salir())}),n.qZA()()()()()()()}if(2&i){const e=n.oxw();n.xp6(11),n.Q6J("formGroup",e.form),n.xp6(4),n.Q6J("config",e.originAccount),n.xp6(7),n.HOy(" Cuenta: ",e.transfer.originAccount.id,"|",e.transfer.originAccount.nombre," entidad: ",e.transfer.originAccount.entidad.id,"|",e.transfer.originAccount.entidad.nombre," "),n.xp6(3),n.Q6J("config",e.destinationAccount),n.xp6(7),n.HOy(" Cuenta: ",e.transfer.destinationAccount.id,"|",e.transfer.destinationAccount.nombre," entidad: ",e.transfer.destinationAccount.entidad.id,"|",e.transfer.destinationAccount.entidad.nombre," "),n.xp6(11),n.Q6J("disabled",e.form.invalid)}}let E=(()=>{class i{constructor(e,r,d){this.formBuilder=e,this.dataService=r,this.confirmService=d,this.formEvent=new n.vpe,this.display=!1,this.transfer=new A.F,this.originAccount={path:"/transfer/baccount/w/oriaccounts",columns:["id","nombre","entidad.id","entidad.nombre"]},this.destinationAccount={path:"/transfer/baccount/w/dstaccounts",columns:["id","nombre","entidad.id","entidad.nombre"]},this.form=this.formBuilder.group({oaccount:[{value:0,disabled:!0}],daccount:[{value:0,disabled:!0},p.kI.required],comment:["",p.kI.required],amount:["0",p.kI.required]})}ngOnInit(){}open(e){this.form.reset(),this.form.controls.oaccount.setValue("0"),this.form.controls.daccount.setValue("0"),this.form.controls.comment.setValue(""),this.form.controls.amount.setValue(""),this.display=!0}salir(){this.formEvent.emit("salir"),this.display=!1}originAccountSelected(e){this.transfer.originAccount=e,this.form.controls.oaccount.setValue(this.transfer.originAccount.id)}destinationAccountSelected(e){this.transfer.destinationAccount=e,this.form.controls.daccount.setValue(this.transfer.destinationAccount.id)}submit(){let e=new A.F,r=this.form.getRawValue();e.originAccount.id=r.oaccount,e.destinationAccount.id=r.daccount,e.voucher.comment=r.comment,e.voucher.amount=r.amount,this.confirmService.setconfirm({message:"Procesar la transaccion ?",accept:()=>{this.dataService.postdata("/transfer/baccount/w",e).subscribe(f=>{this.display=!1,this.formEvent.emit("save")})}})}get comment(){return this.form.get("comment")}get amount(){return this.form.get("amount")}static#t=this.\u0275fac=function(r){return new(r||i)(n.Y36(p.QS),n.Y36(g.D),n.Y36(v.I))};static#n=this.\u0275cmp=n.Xpm({type:i,selectors:[["baccounts-form"]],outputs:{formEvent:"formEvent"},decls:1,vars:1,consts:[["class","mo-layout-content",4,"ngIf"],[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pButton","","pRipple","","type","button","icon","pi pi-arrow-left","pTooltip","Salir",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[3,"formGroup","submit"],[1,"p-fluid","grid"],[1,"p-field","col-12","md:col-2"],[1,"p-float-label"],[3,"config","itemSelected"],[1,"p-field","col-12","md:col-1"],["id","oaccount","type","text","pInputText","","formControlName","oaccount"],["for","oaccount"],[1,"p-field","col-12","md:col-9"],["id","daccount","type","text","pInputText","","formControlName","daccount"],["for","daccount"],[1,"p-field","col-12","md:col-12"],["id","detalle","type","text","pInputText","","formControlName","comment"],["for","detalle"],["id","amount","type","text","pInputText","","formControlName","amount"],["for","amount"],["type","submit","label","Guardar","styleClass","p-button-text",3,"disabled"],["type","button","label","Salir","styleClass","p-button-text",3,"click"]],template:function(r,d){1&r&&n.YNc(0,y,45,12,"div",0),2&r&&n.Q6J("ngIf",d.display)},dependencies:[t.O5,C.u,T.Hq,T.zx,O.o,p._Y,p.Fj,p.JJ,p.JL,w.J,p.sg,p.u],encapsulation:2})}return i})();const b=["form"];function B(i,M){if(1&i){const e=n.EpF();n.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"div",8)(6,"h2"),n._uU(7,"Transferencias Entre Cuentas"),n.qZA()(),n.TgZ(8,"div",9)(9,"button",10),n.NdJ("click",function(){n.CHM(e);const d=n.oxw();return n.KtG(d.openForm())}),n.qZA()()(),n.TgZ(10,"div",11)(11,"mo-report",12),n.NdJ("action",function(d){n.CHM(e);const f=n.oxw();return n.KtG(f.tableAction(d))}),n.qZA()()()()()()}if(2&i){const e=n.oxw();n.xp6(11),n.Q6J("data",e.report)}}const I=[{path:"",component:_,children:[{path:"",component:(()=>{class i{constructor(e,r){this.dataService=e,this.confirmService=r,this.display=!0,this.currentDate=new Date,this.report={content:[],columns:[{field:"voucher.id",columnName:"Id"},{field:"voucher.vdate",columnName:"FECHA",type:"date"},{field:"originAccount.id",columnName:"Cta. Origen"},{field:"originAccount.nombre",columnName:"Cuenta Origen"},{field:"destinationAccount.id",columnName:"Cta. Dest."},{field:"destinationAccount.nombre",columnName:"Cuenta Destino"},{field:"voucher.description",columnName:"Detalle"},{field:"voucher.amount",columnName:"Monto",align:"right"},{actions:[{iconclass:"pi pi-trash",event:"anular",condition:d=>!0}]}]}}ngOnInit(){this.getdata()}saveForm(){this.getdata()}getdata(){let e=new x.y;e.date=new Date,e.limit=30,e.ordersby=["vo.id desc"],this.dataService.postdata("/transfer/baccount/r/report",e).subscribe(r=>{this.report.content=r})}tableAction(e){"anular"===e.event&&this.confirmService.setconfirm({message:"Eliminar transaccion Nro '"+e.row.voucher.id+"'?",accept:()=>{this.dataService.postdata("/transfer/baccount/d/anular",e.row).subscribe(d=>{this.getdata()})}})}formEvent(e){this.display=!0,this.getdata()}openForm(){this.display=!1,this.form.open({})}static#t=this.\u0275fac=function(r){return new(r||i)(n.Y36(g.D),n.Y36(v.I))};static#n=this.\u0275cmp=n.Xpm({type:i,selectors:[["baccounts-manage"]],viewQuery:function(r,d){if(1&r&&n.Gf(b,7),2&r){let f;n.iGM(f=n.CRH())&&(d.form=f.first)}},decls:3,vars:1,consts:[["class","mo-layout-content",4,"ngIf"],[3,"formEvent"],["form",""],[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pButton","","pRipple","","type","button","icon","pi pi-plus","pTooltip","Registrar nueva Transferencia",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[3,"data","action"]],template:function(r,d){1&r&&(n.YNc(0,B,12,1,"div",0),n.TgZ(1,"baccounts-form",1,2),n.NdJ("formEvent",function(D){return d.formEvent(D)}),n.qZA()),2&r&&n.Q6J("ngIf",d.display)},dependencies:[t.O5,C.u,T.Hq,Z.t,E],encapsulation:2})}return i})()},{path:"**",redirectTo:""}]}];let P=(()=>{class i{static#t=this.\u0275fac=function(r){return new(r||i)};static#n=this.\u0275mod=n.oAB({type:i});static#o=this.\u0275inj=n.cJS({imports:[m.Bz.forChild(I),m.Bz]})}return i})();var c=a(8368),l=a(2454),o=a(4553);let s=(()=>{class i{static#t=this.\u0275fac=function(r){return new(r||i)};static#n=this.\u0275mod=n.oAB({type:i});static#o=this.\u0275inj=n.cJS({imports:[t.ez,P,c.U,o.W,l.q,p.UX]})}return i})()},7635:(h,u,a)=>{a.d(u,{v:()=>n});var t=a(4946),m=a(6814);let n=(()=>{class _{constructor(g){this.datePipe=g}transform(g,...v){return this.datePipe.transform(g,"MM/yyyy")}static#t=this.\u0275fac=function(v){return new(v||_)(t.Y36(m.uU,16))};static#n=this.\u0275pipe=t.Yjl({name:"periodmonthFormat",type:_,pure:!0})}return _})()}}]);