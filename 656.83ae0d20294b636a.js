"use strict";(self.webpackChunkng_matero=self.webpackChunkng_matero||[]).push([[656],{5656:(b,s,e)=>{e.r(s),e.d(s,{BajasModule:()=>J});var A=e(2209),T=e(6814),U=e(4643),c=e(2787),i=e(6223),t=e(5879),C=e(3680),h=e(2296),f=e(5195),r=e(1545),d=e(8034),p=e(4170),q=e(4516),B=e(8525);function _(a,n){1&a&&t._uU(0,"Datos Generales")}function M(a,n){1&a&&t._uU(0,"Datos seg\xfan el tipo de donaci\xf3n")}const j=[{path:"add",component:(()=>{class a{constructor(o){this._formBuilder=o,this.firstFormGroup=this._formBuilder.group({firstCtrl:["",i.kI.required]}),this.secondFormGroup=this._formBuilder.group({}),this.isLinear=!1,this.asigna_notaria=!0,this.selectedStatus="En proceso"}onGuardar(){}onCancelar(){}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(i.qu))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-add"]],decls:105,vars:12,consts:[["headerPosition","bottom","orientation","vertical",3,"linear"],["stepper",""],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],[1,"row","form-field-full"],[1,"col-md-4"],["matInput","","name","oficio_solicita","title","oficio_solicita","value","SP20220001 "],["matInput","","name","num_solicitud","title","num_solicitud","value","1"],["name","selectedStatus","title","selectedStatus",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["value","3"],[1,"col-md-12"],["matInput","","name","motivo_finalidad","title","motivo_finalidad"],["matInput","","name","cuenta_predial","title","cuenta_predial","value",""],["matInput","","name","abogado_quien_lleva","title","abogado_quien_lleva","value",""],["value","En proceso"],["value","Opci\xf3n 1"],["value","Opci\xf3n 2"],["matInput","","name","fecha_publicacion_dof","title","fecha_publicacion_dof","value","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["matInput","","name","fecha_acuerdo","title","fecha_acuerdo","value","",3,"matDatepicker"],["picker2",""],["matInput","","name","vencimiento_plazo","title","vencimiento_plazo","value","",3,"matDatepicker"],["picker3",""],["mat-raised-button","","color","primary","matStepperNext",""],[1,"col-md-6"],["matInput","","name","donatario","title","donatario","value",""],["mat-raised-button","","color","warn","matStepperPrevious",""]],template:function(o,l){if(1&o&&(t.TgZ(0,"h2"),t._uU(1,"REGISTRO DE GESTI\xd3N BAJA"),t.qZA(),t.TgZ(2,"mat-card")(3,"mat-card-content")(4,"mat-stepper",0,1)(6,"mat-step",2)(7,"form",3),t.YNc(8,_,1,0,"ng-template",4),t.TgZ(9,"div",5)(10,"div",6)(11,"mat-form-field")(12,"mat-label"),t._uU(13,"Oficio que solicita:"),t.qZA(),t._UZ(14,"input",7),t.qZA()(),t.TgZ(15,"div",6)(16,"mat-form-field")(17,"mat-label"),t._uU(18,"N\xfamero de solicitud:"),t.qZA(),t._UZ(19,"input",8),t.qZA()(),t.TgZ(20,"div",6)(21,"mat-form-field")(22,"mat-label"),t._uU(23,"Tipo:"),t.qZA(),t.TgZ(24,"mat-select",9),t.NdJ("ngModelChange",function(m){return l.selectedStatus=m}),t.TgZ(25,"mat-option",10),t._uU(26,"Donaci\xf3n "),t.qZA(),t.TgZ(27,"mat-option",11),t._uU(28,"Permuta"),t.qZA(),t.TgZ(29,"mat-option",12),t._uU(30,"Venta"),t.qZA()()()(),t.TgZ(31,"div",13)(32,"mat-form-field")(33,"mat-label"),t._uU(34,"Motivo o finalidad:"),t.qZA(),t._UZ(35,"textarea",14),t.qZA()(),t.TgZ(36,"div",6)(37,"mat-form-field")(38,"mat-label"),t._uU(39,"Cuenta Predial:"),t.qZA(),t._UZ(40,"input",15),t.qZA()(),t.TgZ(41,"div",6)(42,"mat-form-field")(43,"mat-label"),t._uU(44,"Abogado quien lleva:"),t.qZA(),t._UZ(45,"input",16),t.qZA()(),t.TgZ(46,"div",6)(47,"mat-form-field")(48,"mat-label"),t._uU(49,"Estatus:"),t.qZA(),t.TgZ(50,"mat-select",9),t.NdJ("ngModelChange",function(m){return l.selectedStatus=m}),t.TgZ(51,"mat-option",17),t._uU(52,"En proceso"),t.qZA(),t.TgZ(53,"mat-option",18),t._uU(54,"Opci\xf3n 1"),t.qZA(),t.TgZ(55,"mat-option",19),t._uU(56,"Opci\xf3n 2"),t.qZA()()()(),t.TgZ(57,"div",6)(58,"mat-form-field")(59,"mat-label"),t._uU(60,"Fecha de publicaci\xf3n en el DOF:"),t.qZA(),t._UZ(61,"input",20)(62,"mat-datepicker-toggle",21)(63,"mat-datepicker",null,22),t.qZA()(),t.TgZ(65,"div",6)(66,"mat-form-field")(67,"mat-label"),t._uU(68,"Fecha de acuerdo:"),t.qZA(),t._UZ(69,"input",23)(70,"mat-datepicker-toggle",21)(71,"mat-datepicker",null,24),t.qZA()(),t.TgZ(73,"div",6)(74,"mat-form-field")(75,"mat-label"),t._uU(76,"Vencimiento del plazo:"),t.qZA(),t._UZ(77,"input",25)(78,"mat-datepicker-toggle",21)(79,"mat-datepicker",null,26),t.qZA()()()(),t.TgZ(81,"button",27),t._uU(82,"Confirmar"),t.qZA()(),t.TgZ(83,"mat-step",2),t.YNc(84,M,1,0,"ng-template",4),t.TgZ(85,"div",5)(86,"div",28)(87,"mat-form-field")(88,"mat-label"),t._uU(89,"Nombre del Nonatorio:"),t.qZA(),t._UZ(90,"input",29),t.qZA()(),t.TgZ(91,"div",28)(92,"mat-form-field")(93,"mat-label"),t._uU(94,"Nombre del Donatario:"),t.qZA(),t._UZ(95,"input",29),t.qZA()(),t.TgZ(96,"div",13)(97,"mat-form-field")(98,"mat-label"),t._uU(99,"Detalle de la baja"),t.qZA(),t._UZ(100,"textarea",14),t.qZA()(),t.TgZ(101,"button",30),t._uU(102,"Regresar"),t.qZA(),t.TgZ(103,"button",27),t._uU(104,"Confirmar"),t.qZA()()()()()()),2&o){const u=t.MAs(64),m=t.MAs(72),v=t.MAs(80);t.xp6(4),t.Q6J("linear",l.isLinear),t.xp6(2),t.Q6J("stepControl",l.firstFormGroup),t.xp6(1),t.Q6J("formGroup",l.firstFormGroup),t.xp6(17),t.Q6J("ngModel",l.selectedStatus),t.xp6(26),t.Q6J("ngModel",l.selectedStatus),t.xp6(11),t.Q6J("matDatepicker",u),t.xp6(1),t.Q6J("for",u),t.xp6(7),t.Q6J("matDatepicker",m),t.xp6(1),t.Q6J("for",m),t.xp6(7),t.Q6J("matDatepicker",v),t.xp6(1),t.Q6J("for",v),t.xp6(5),t.Q6J("stepControl",l.secondFormGroup)}},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.On,C.ey,h.lW,f.a8,f.dn,r.C0,r.VY,r.Vq,r.Ic,r.fd,d.Mq,d.hl,d.nW,p.KE,p.hX,p.R9,q.Nt,B.gD]}),a})()},{path:"",component:(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-lista"]],decls:2,vars:0,template:function(o,l){1&o&&(t.TgZ(0,"p"),t._uU(1,"lista works!"),t.qZA())}}),a})()}];let F=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.Bz.forChild(j),c.Bz]}),a})(),J=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[A.m,F,U.HT,T.ez]}),a})()}}]);