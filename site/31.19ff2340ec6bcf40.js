"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[31],{7031:(j,m,r)=>{r.r(m),r.d(m,{EgresoModule:()=>N});var d=r(6814),c=r(7664),t=r(4946);let p=(()=>{class e{constructor(){}ngOnInit(){this.items=[{label:"Caja"},{label:"Egresos"}],this.home={icon:"pi pi-home",routerLink:"/"}}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-egreso-main"]],decls:1,vars:0,template:function(o,s){1&o&&t._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2})}return e})();var u=r(2743),f=r(7757),g=r(7492),h=r(9324),v=r(4963);const E=["form"];let y=(()=>{class e{constructor(n){this.dataService=n,this.display=!0,this.findcuentaconfig={path:"/caja/egreso/entidades",columns:["id","nombre","direccion"]},this.cuentas={content:[],columns:[{field:"id",columnName:"Id"},{field:"nombre",columnName:"Nombre"},{field:"descripcion",columnName:"Descripcion"},{field:"saldo",columnName:"Saldo",align:"right"},{actions:[{iconclass:"pi pi-arrow-circle-right",event:"cobranza",condition:o=>!0}]}]},this.transfer=new u.F}ngOnInit(){}findCuentasEvent(n){this.transfer.destinationAccount.entidad=n,this.dataService.getdata("/caja/egreso/cuentas",{id:this.transfer.destinationAccount.entidad.id}).subscribe(o=>{this.cuentas.content=o})}tableAction(n){this.display=!1,this.transfer.voucher.vtype="EGRESO",this.transfer.destinationAccount=n.row,this.form.open(this.transfer,"/caja/egreso")}formEvent(n){this.display=!0}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(f.D))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["egreso-form"]],viewQuery:function(o,s){if(1&o&&t.Gf(E,7),2&o){let i;t.iGM(i=t.CRH())&&(s.form=i.first)}},decls:20,vars:3,consts:[[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],[1,"mo-panel-content",3,"hidden"],[1,"p-fluid","grid"],[1,"p-field","col-12"],[1,"p-float-label"],["id","buscar",3,"config","itemSelected"],["for","buscar"],[3,"data","action"],[3,"formEvent"],["form",""]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Desembolso"),t.qZA()(),t._UZ(8,"div",6),t.qZA(),t.TgZ(9,"div",7)(10,"div",8)(11,"div",9)(12,"span",10)(13,"mo-autocomplete",11),t.NdJ("itemSelected",function(a){return s.findCuentasEvent(a)}),t.qZA(),t.TgZ(14,"label",12),t._uU(15,"Buscar Entidad:"),t.qZA()()(),t.TgZ(16,"div",9)(17,"mo-report",13),t.NdJ("action",function(a){return s.tableAction(a)}),t.qZA()()()(),t.TgZ(18,"comprobante-form",14,15),t.NdJ("formEvent",function(a){return s.formEvent(a)}),t.qZA()()()()()),2&o&&(t.xp6(9),t.Q6J("hidden",!s.display),t.xp6(4),t.Q6J("config",s.findcuentaconfig),t.xp6(4),t.Q6J("data",s.cuentas))},dependencies:[g.J,h.t,v.a],encapsulation:2})}return e})(),C=(()=>{class e{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["egreso-manage"]],decls:1,vars:0,template:function(o,s){1&o&&t._UZ(0,"egreso-form")},dependencies:[y],encapsulation:2})}return e})();var Z=r(4131);let l=(()=>{class e{constructor(){this.reportconfig={path:"/caja/egreso",type:"EGRESO"}}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-egreso-report"]],decls:4,vars:1,consts:[[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[3,"config"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"transfer-report",3),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("config",s.reportconfig))},dependencies:[Z.Z],encapsulation:2})}return e})();const A=[{path:"",component:p,children:[{path:"",component:C},{path:"report",component:l},{path:"gasto",component:l},{path:"**",redirectTo:""}]}];let T=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(A),c.Bz]})}return e})();var F=r(8368),J=r(961),S=r(1749),b=r(8989),M=r(4553);let N=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[d.ez,T,b.y,F.U,J.q,M.W,S._]})}return e})()}}]);