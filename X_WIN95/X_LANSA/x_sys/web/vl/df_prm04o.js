﻿LANSA.addComponent({id:"DF_PRM04O",ot:"rp",tp:"Reusable Part",de:"\OC=5250 Prompter - 4 - Tree View",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"XDEPTMENT",ft:"A",ln:4,dc:0,lb:"Department",h1:"Department",h2:"Code",h3:"",de:"Department",dv:"",ia:["FE"]},F3:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:" ",de:"Identification",dv:"",ia:["FE"]},F4:{nm:"DF_ELTX",ft:"A",ln:255,dc:0,lb:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h1:{"ENG":"Enter","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h2:{"ENG":"Text","FRA":"Text","JPN":""}[cL],h3:"",de:{"ENG":"Enter Text","FRA":"Texte","JPN":"ﾃｷｽﾄ入力"}[cL],dv:"",
ia:["LC","FE"]},F5:{nm:"DF_ELTXTL",ft:"A",ln:255,dc:0,lb:{"ENG":"Text","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h1:{"ENG":"Text","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],h2:"",h3:"",de:{"ENG":"Text","FRA":"Texte","JPN":"ﾃｷｽﾄ"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"DF_ELURL",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["LC","FE"]},F7:{nm:"LISTCOUNT",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Entries .......","FRA":"Entrées . . . .","JPN":"Entries ......."}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"Number"}[cL],
h2:{"ENG":"of Entrys","FRA":"d´Entrées","JPN":"of Entrys"}[cL],h3:" ",de:{"ENG":"Number of entries in a browse list","FRA":"Liste, nombre d´entrées ds liste BROWSE","JPN":"Number of entries in a browse list"}[cL],dv:0,ia:["FE","RB"]},F8:{nm:"XDEPTDESC",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"Description...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"Description"}[cL],h3:" ",
de:{"ENG":"Department Description","FRA":"Département","JPN":"Department Description"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"XSURNAME",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:"",de:"Surname",dv:"",ia:["FE","LC"]},F10:{nm:"XGIVENAME",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"VF_AC017O",fd:Fd,mt:{uInitialize:{},AddEntry:{ps:{"uDepartment":{pt:"i"},"uEmployee":{pt:"i"},"uDescription":{pt:"i"},"ParentItem":
{pt:"i"}}},uShow:{ps:{"Top":{pt:"i"},"Left":{pt:"i"},"Height":{pt:"i"},"Width":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("DF_PRM04O",Fd);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("ROW","PRIM_TBLO","Row");var C2=this.cR("COLUMN","PRIM_TBLO","Column");var C3=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C4=this.cR("LIST","PRIM_LIST");var C5=this.cR("GCOLUMN1","PRIM_LIST","String");var C6=this.cR("GCOLUMN2","PRIM_LIST","String");var C7=this.cR("GCOLUMN3","PRIM_LIST","String");
C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setColumn(C2);C3.setManage(C4);C3.setParent(C0);C3.setRow(C1);C3.iC();C4.setDisplayPosition(1);C4.setHeight(191);C4.setLeft(0);C4.setParent(this);C4.setTabPosition(1);C4.setTop(0);C4.setWidth(256);C4.setRowHeight(22);C4.setRowLines(false);C4.setColumnLines(false);C4.iC();C5.setDisplayPosition(1);C5.setParent(C4);C5.setSource(f.F4);C5.setColumnWidth(80);C5.setColumnCaptionType("CAPTION");
C5.setColumnCaption("Dept");C5.iC();C6.setDisplayPosition(2);C6.setParent(C4);C6.setSource(f.F5);C6.setColumnWidth(50);C6.setColumnCaptionType("CAPTION");C6.setColumnReadOnly(false);C6.setColumnCaption("Employee");C6.iC();C7.setDisplayPosition(3);C7.setParent(C4);C7.setSource(f.F6);C7.setColumnWidth(100);C7.setColumnCaptionType("CAPTION");C7.setColumnReadOnly(false);C7.setColumnUnits("PROPORTION");C7.setColumnCaption("Description");C7.iC();C4.aH("ITEMGOTFOCUS",this,e2);this.setHeight(193);this.setWidth(258);
this.setLayoutManager(C0);var li=this.aL("DF_PRM04O");li.DEPEMPLIST=l.cLT({"XDEPTMENT":f.F2,"XDEPTDESC":f.F8,"XEMPLOYID":f.F3,"XSURNAME":f.F9,"XGIVENAME":f.F10},f.F7);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var li=this.LIST.DF_PRM04O,f=this.FLD.DF_PRM04O,r=l.mR(this,cO,"uInitialize",50);var C0=r.cDR("FINDALL_DEPTEMP","DF_PRMDSO","FINDALL_DEPTEMP");var C1=r.cD("C1");C0.iC();C0.aH("COMPLETED",this,e1);r.ln=50;{r.ln=56;C0.mthEXECUTE({},{LIST:{"DEPEMPLIST":li.DEPEMPLIST}});}r.ln=73;r.e();
function e1(sender,Ps){var r=l.eR(this,cO,"#FindAll_DeptEmp.Completed",58);r.ln=58;{r.ln=61;{var l1=li.DEPEMPLIST.selectList();while(l1.step()){r.ln=63;if(l.s.eq(f.F3.get(),"")){r.ln=65;C1=r.sR("C1",cO.mthADDENTRY.call(this,f.F2.get(),"",f.F8.get()));}else{r.ln=68;cO.mthADDENTRY.call(this,f.F2.get(),f.F3.get(),l.add(l.cat(f.F9.get()," "),f.F10.get()),C1);}r.ln=70;}l1.end();}}r.ln=71;r.e();}};cO.mthADDENTRY=function(p0,p1,p2,p3){var f=this.FLD.DF_PRM04O,m=this.REF,r=l.mR(this,cO,"AddEntry",74);var P0=r.cP("UDEPARTMENT","PRIM_ALPH");
var P1=r.cP("UEMPLOYEE","PRIM_ALPH");var P2=r.cP("UDESCRIPTION","PRIM_ALPH");var P3=r.cPD("PARENTITEM");var P4=r.cPD("RESULT");P0.set(p0);P1.set((p1===u)?(""):(p1));P2.set(p2);P3=(p3===u)?(null):(p3);P4=null;r.ln=74;{r.ln=81;f.F4.set(P0.get());r.ln=82;f.F5.set(P1.get());r.ln=83;f.F6.set(P2.get());r.ln=85;m.LIST.addEntry();r.ln=87;m.LIST.getCurrentItem().setParentItem(P3);r.ln=88;P4=r.sR("P4",m.LIST.getCurrentItem());}r.ln=90;return r.rR(P4);};cO.mthUSHOW=function(p0,p1,p2,p3){var f=this.FLD.DF_PRM04O,m=this.REF,r=l.mR(this,cO,"uShow",96);
var P0=r.cPF("TOP",Fd.F1.Dc);var P1=r.cPF("LEFT",Fd.F1.Dc);var P2=r.cPF("HEIGHT",Fd.F1.Dc);var P3=r.cPF("WIDTH",Fd.F1.Dc);P0.set((p0===u)?(-999999):(p0));P1.set((p1===u)?(-999999):(p1));P2.set((p2===u)?(-999999):(p2));P3.set((p3===u)?(-999999):(p3));var C0=r.cF("PROMPTDEPTMENT",Fd.F2.Dc);var C1=r.cF("PROMPTEMPLOYEE",Fd.F3.Dc);C0.iC();C1.iC();r.ln=96;{r.ln=101;this.REF.AVFRAMEWORKMANAGER.mthAVRECORDTRACE(this,"uShow starts");r.ln=103;this.mthUGET5250FIELD(this.getUPROMPT5250FIELD(),this.getUPROMPT5250INDEX(),C0,u);
r.ln=104;this.mthUGET5250FIELD("EMPLOYEE",u,C1,u);r.ln=106;{var l1=m.LIST.selectList();while(l1.step()){r.ln=107;if(l.and(l.s.eq(C0.get(),f.F4.get()),l.s.eq(C1.get(),f.F5.get()))){r.ln=108;m.LIST.getCurrentItem().setFocus(true);r.ln=109;break;}r.ln=111;}l1.end();}r.ln=113;this.setVisible(true);r.ln=114;this.mthSHOWPOPUP(P1.get(),P0.get(),"ABSOLUTE",u,u);}r.ln=116;r.e();};function e2(sender,Ps){var f=this.FLD.DF_PRM04O,r=l.eR(this,cO,"#List.ItemGotFocus",123);r.ln=123;{r.ln=125;this.mthUSET5250FIELD(this.getUPROMPT5250FIELD(),f.F4.get(),u,this.getUPROMPT5250INDEX());
r.ln=127;this.mthUSET5250FIELD("EMPLOYEE",f.F5.get(),u,u);r.ln=130;this.mthUHIDE();}r.ln=132;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XDEPTMENT"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC017O"],rp:["PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_WEB.DataRequest","PRIM_FLD"],
dp:["PRIM_LIST.ListItem"]});