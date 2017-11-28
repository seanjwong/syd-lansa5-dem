﻿LANSA.addComponent({id:"VF_UM995O",ot:"rp",tp:"Reusable Part",de:"\OC=VLF-ONE Usage stats",tl:14015000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var c1=l.cDec("125.53");var Fd={F1:{nm:"VF_ELSTNA",ft:"A",ln:256,dc:0,lb:"Routine Name",h1:"Routine",h2:"Name",h3:"",de:"Routine Name",dv:"",ia:["FE"]},F2:{nm:"VF_ELSTEX",ft:"I",ln:4,dc:0,ec:"P",lb:"Executions",h1:"Executions",h2:"",h3:"",de:"Executions",dv:0,ia:["FE","RB"]},F3:{nm:"VF_ELSTME",ft:"I",ln:4,dc:0,ec:"P",
lb:{"ENG":"Mean","FRA":"Elapsed Mean","JPN":"Elapsed Mean"}[cL],h1:{"ENG":"Mean","FRA":"Elapsed","JPN":"Elapsed"}[cL],h2:{"ENG":"","FRA":"Mean","JPN":"Mean"}[cL],h3:"",de:{"ENG":"Mean","FRA":"Elapsed Mean","JPN":"Elapsed Mean"}[cL],dv:0,ia:["FE","RB"]},F4:{nm:"VF_ELSTMX",ft:"I",ln:4,dc:0,ec:"P",lb:{"ENG":"Maximum","FRA":"Elapsed Maximum","JPN":"Elapsed Maximum"}[cL],h1:{"ENG":"Maximum","FRA":"Elapsed","JPN":"Elapsed"}[cL],h2:{"ENG":"","FRA":"Maximum","JPN":"Maximum"}[cL],h3:"",de:{"ENG":"Maximum","FRA":"Elapsed Maximum","JPN":"Elapsed Maximum"}[cL],
dv:0,ia:["FE","RB"]},F5:{nm:"VF_ELSTMI",ft:"I",ln:4,dc:0,ec:"P",lb:{"ENG":"Minimum","FRA":"Elapsed Minimum","JPN":"Elapsed Minimum"}[cL],h1:{"ENG":"Minimum","FRA":"Elapsed","JPN":"Elapsed"}[cL],h2:{"ENG":"","FRA":"Minimum","JPN":"Minimum"}[cL],h3:"",de:{"ENG":"Minimum","FRA":"Elapsed Minimum","JPN":"Elapsed Minimum"}[cL],dv:0,ia:["FE","RB"]},F6:{nm:"VF_ELSTTT",ft:"I",ln:4,dc:0,ec:"P",lb:{"ENG":"Total","FRA":"Elapsed Maximum","JPN":"Elapsed Maximum"}[cL],h1:{"ENG":"Total","FRA":"Elapsed","JPN":"Elapsed"}[cL],
h2:{"ENG":"Total","FRA":"Maximum","JPN":"Maximum"}[cL],h3:"",de:{"ENG":"Total","FRA":"Elapsed Maximum","JPN":"Elapsed Maximum"}[cL],dv:0,ia:["FE","RB"]},F7:{nm:"VF_ELURL",ft:"A",ln:256,dc:0,lb:"URL",h1:"URL",h2:"",h3:"",de:"URL",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PPNL",fd:Fd,mt:{zInt_AddItem:{ps:{"Stat":{pt:"i"},"IsSubItem":{pt:"i"}}},zInt_Display:{}},co:function(){cO.aN.call(this);var f=this.aF("VF_UM995O",Fd);var C0=this.cA("USYSTEMCOMMON","VF_SY001X");var C1=this.cA("USYSTEM","VF_SY001O");
var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C3=this.cR("ATTACHITEM1","PRIM_ATLI");var C4=this.cR("ATTACHITEM2","PRIM_ATLI");var C5=this.cR("TOP_PANEL","PRIM_PANL");var C6=this.cR("CLEARBUTTON","PRIM_PHBN");var C7=this.cR("STATS","PRIM_LIST");var C8=this.cR("COLUMNVF_ELSTNA1","PRIM_LIST","String");var C9=this.cR("COLUMNVF_ELSTEX1","PRIM_LIST","Number");var C10=this.cR("COLUMNVF_ELSTME1","PRIM_LIST","Number");var C11=this.cR("COLUMNVF_ELSTMX1","PRIM_LIST","Number");var C12=this.cR("COLUMNVF_ELSTMI1","PRIM_LIST","Number");
var C13=this.cR("COLUMNVF_ELSTTT1","PRIM_LIST","Number");var C14=this.cR("COLUMNVF_ELURL1","PRIM_LIST","String");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setManage(C7);C3.setParent(C2);C3.setAttachment("CENTER");C3.setMarginLeft(4);C3.setMarginTop(4);C3.setMarginBottom(4);C3.setMarginRight(4);C3.iC();C4.setManage(C5);C4.setParent(C2);C4.setAttachment("TOP");C4.iC();C5.setParent(this);C5.setDisplayPosition(2);C5.setTabPosition(2);C5.setLeft(0);
C5.setTop(0);C5.setWidth(898);C5.setHeight(30);C5.iC();C6.setCaption("Clear and Restart Stats");C6.setParent(C5);C6.setDisplayPosition(1);C6.setTabPosition(1);C6.setHeight(22);C6.setWidth(168);C6.setTop(6);C6.setLeft(9);C6.iC();C7.setDisplayPosition(1);C7.setParent(this);C7.setTabPosition(1);C7.setHeight(260);C7.setLeft(4);C7.setTop(34);C7.setWidth(890);C7.iC();C8.setDisplayPosition(7);C8.setParent(C7);C8.setSource(f.F1);C8.setColumnUnits("PROPORTION");C8.setColumnWidth(c1);C8.setSortOnClick(true);
C8.setSortAsColumn(C14);C8.iC();C9.setDisplayPosition(1);C9.setIncrement(1);C9.setParent(C7);C9.setSource(f.F2);C9.setWrap(false);C9.setColumnWidth(93);C9.setSortOnClick(true);C9.iC();C10.setDisplayPosition(3);C10.setIncrement(1);C10.setParent(C7);C10.setSource(f.F3);C10.setWrap(false);C10.setColumnWidth(102);C10.setSortOnClick(true);C10.iC();C11.setDisplayPosition(4);C11.setIncrement(1);C11.setParent(C7);C11.setSource(f.F4);C11.setWrap(false);C11.setColumnWidth(114);C11.setSortOnClick(true);C11.iC();
C12.setDisplayPosition(5);C12.setIncrement(1);C12.setParent(C7);C12.setSource(f.F5);C12.setWrap(false);C12.setColumnWidth(126);C12.setSortOnClick(true);C12.iC();C13.setDisplayPosition(2);C13.setIncrement(1);C13.setParent(C7);C13.setSource(f.F6);C13.setWrap(false);C13.setColumnWidth(96);C13.setSortOnClick(true);C13.iC();C14.setDisplayPosition(6);C14.setParent(C7);C14.setSource(f.F7);C14.setColumnVisible(false);C14.iC();C6.aH("CLICK",this,e1);this.setLeft(0);this.setTop(0);this.setLayoutManager(C2);
this.setTouchMove("BOTH");this.setTouchSize("ALL");this.setWidth(900);this.setHeight(300);}});cO.mthZINT_ADDITEM=function(p0,p1){var f=this.FLD.VF_UM995O,m=this.REF,r=l.mR(this,cO,"zInt_AddItem",28);var P0=r.cPD("STAT");var P1=r.cP("ISSUBITEM","PRIM_BOLN");P0=p0;P1.set(p1);r.ln=28;{r.ln=32;if(l.tB(P1.get())){r.ln=33;f.F1.set(l.cat("   ",P0.getTRACKINGKEY()));}else{r.ln=35;f.F1.set(P0.getTRACKINGKEY());}r.ln=38;f.F7.set(P0.getTRACKINGKEY());r.ln=40;f.F2.set(P0.getEXECUTIONS());r.ln=42;f.F6.set(P0.getTOTALALLELAPSEDTIMES());
r.ln=44;if(l.n.eq(f.F2.get(),0)){r.ln=45;f.F3.set(0);}else{r.ln=47;f.F3.set(l.div(P0.getTOTALALLELAPSEDTIMES(),f.F2.get()));}r.ln=50;f.F4.set(P0.getSLOWESTELAPSED());r.ln=52;f.F5.set(P0.getFASTESTELAPSED());r.ln=54;m.STATS.addEntry();}r.ln=57;r.e();};cO.mthZINT_DISPLAY=function(){var m=this.REF,r=l.mR(this,cO,"zInt_Display",61);r.ln=61;{r.ln=63;this.setStyle(m.USYSTEM.ref.getCURRENTTHEME().getBORDERSALLROUND());r.ln=65;m.STATS.clearList();r.ln=67;{var l1=m.USYSTEMCOMMON.ref.getEXECUTIONTRACKINGSTACK().cI();
while(l1.step()){var STAT=r.sR("STAT",l1.item());r.ln=69;this.mthZINT_ADDITEM(STAT,false);r.ln=71;if((STAT.getSUBEXECUTIONTRACKINGSTACK()!=null)){r.ln=72;{var l2=STAT.getSUBEXECUTIONTRACKINGSTACK().cI();while(l2.step()){var SUBSTAT=r.sR("SUBSTAT",l2.item());r.ln=74;this.mthZINT_ADDITEM(SUBSTAT,true);r.ln=76;}l2.end();r.dR("SUBSTAT");}}r.ln=79;}l1.end();r.dR("STAT");}r.ln=81;this.mthSHOWPOPUP(u,u,u,u,u);}r.ln=83;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ClearButton.Click",86);
r.ln=86;{r.ln=88;m.USYSTEMCOMMON.ref.getEXECUTIONTRACKINGSTACK().mthREMOVEALL();r.ln=90;m.STATS.clearList();}r.ln=92;r.e();};},{rc:["VF_SY001X","VF_SY001O"],rp:["PRIM_PPNL","PRIM_ATLM","PRIM_ATLI","PRIM_PANL","PRIM_PHBN","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.Number"]});