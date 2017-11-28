﻿LANSA.addComponent({id:"DF_T3101O",ot:"rp",tp:"Reusable Part",de:"\OC=VLF_ONE Spool File Example Filter",tl:14015000},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_OBJ",ft:"A",ln:10,dc:0,lb:{"ENG":"Object Name","FRA":"Nom d´Objet","JPN":"Object Name"}[cL],h1:{"ENG":"Object","FRA":"Nom","JPN":"Object"}[cL],h2:{"ENG":"Name","FRA":"Objet","JPN":"Name"}[cL],h3:" ",de:{"ENG":"Standard OBJECT NAME (S/38 or AS/400)","FRA":"Nom d´Objet Standard (S/38 ou AS/400)","JPN":"Standard OBJECT NAME (S/38 or AS/400)"}[cL],
dv:"",ia:["VN"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F3:{nm:"VF_ELOBJ",ft:"A",ln:10,dc:0,lb:{"ENG":"Identifier","FRA":"LANSA Object Na","JPN":"LANSA Object Na"}[cL],h1:"LANSA",h2:"Object",h3:{"ENG":"Identifier","FRA":"Name","JPN":"Name"}[cL],
de:{"ENG":"LANSA Object Identifier","FRA":"LANSA Object Name","JPN":"LANSA Object Name"}[cL],dv:"",ia:["FE"]},F4:{nm:"VF_ELTXTM",ft:"A",ln:50,dc:0,lb:"Standard medium",h1:"Standard",h2:"Medium",h3:"Text",de:"Standard medium Text",dv:"",ia:["FE"]},F5:{nm:"QUEUE_LIBRARY",ft:"A",ln:10,dc:0,lb:"Queue_Library",h1:"Queue_Library",h2:"",h3:"",de:"Queue_Library",dv:""},F6:{nm:"QUEUE_NAME",ft:"A",ln:10,dc:0,lb:"Queue_Name",h1:"Queue_Name",h2:"",h3:"",de:"Queue_Name",dv:""},F7:{nm:"QUEUE_DESCRIPTION",ft:"A",
ln:60,dc:0,lb:"Queue_Description",h1:"Queue_Description",h2:"",h3:"",de:"Queue_Description",dv:""},F8:{nm:"LOPNGNAM",ft:"A",ln:10,dc:0,lb:"LOPNGNam",h1:"LOPNGNam",h2:"",h3:"",de:"Spool File Name",dv:""},F9:{nm:"LOPNGJOB",ft:"A",ln:10,dc:0,lb:"LOPNGJob",h1:"LOPNGJob",h2:"",h3:"",de:"Job Name",dv:""},F10:{nm:"LOPNGUSR",ft:"A",ln:10,dc:0,lb:"LOPNGUsr",h1:"LOPNGUsr",h2:"",h3:"",de:"User Name",dv:""},F11:{nm:"LOPNGJNO",ft:"A",ln:6,dc:0,lb:"LOPNGJno",h1:"LOPNGJno",h2:"",h3:"",de:"Job Number",dv:""},F12:
{nm:"LOPNGSNO",ft:"A",ln:4,dc:0,lb:"LOPNGsno",h1:"LOPNGsno",h2:"",h3:"",de:"Spool File Number",dv:""},F13:{nm:"LOPNGTPG",ft:"P",ln:7,dc:0,lb:"LOPNGTpg",h1:"LOPNGTpg",h2:"",h3:"",de:"Total Pages",dv:0},F14:{nm:"LOPNGCPG",ft:"P",ln:7,dc:0,lb:"LOPNGCpg",h1:"LOPNGCpg",h2:"",h3:"",de:"Current Page",dv:0},F15:{nm:"LOPNGLPR",ft:"P",ln:7,dc:0,lb:"LOPNGLpr",h1:"LOPNGLpr",h2:"",h3:"",de:"Copies Left to Print",dv:0},F16:{nm:"LOPNGQUE",ft:"A",ln:10,dc:0,lb:"LOPNGQue",h1:"LOPNGQue",h2:"",h3:"",de:"Queue Name",
dv:""},F17:{nm:"LOPNGLIB",ft:"A",ln:10,dc:0,lb:"LOPNGLib",h1:"LOPNGLib",h2:"",h3:"",de:"Queue Library",dv:""},F18:{nm:"LOPNGUDT",ft:"A",ln:10,dc:0,lb:"LOPNGUdt",h1:"LOPNGUdt",h2:"",h3:"",de:"User Data",dv:""},F19:{nm:"LOPNGSTS",ft:"A",ln:10,dc:0,lb:"LOPNGSts",h1:"LOPNGSts",h2:"",h3:"",de:"Status",dv:""},F20:{nm:"LOPNGFRM",ft:"A",ln:10,dc:0,lb:"LOPNGFrm",h1:"LOPNGFrm",h2:"",h3:"",de:"Form Type",dv:""},F21:{nm:"LOPNGPTY",ft:"A",ln:2,dc:0,lb:"LOPNGPty",h1:"LOPNGPty",h2:"",h3:"",de:"Priority",dv:""},
F22:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,mt:{uInitialize:{},LoadVirtualClipBoardfromServer:{},LoadVisibleListFromVirtualClipboard:{},LoadSpoolFileList:
{}},co:function(){cO.aN.call(this);var f=this.aF("DF_T3101O",Fd);var C0=this.cR("VISIBLEOUTPUTQUEUELIST","PRIM_LIST","DropDown");var C1=this.cR("COLUMNSTD_OBJ1","PRIM_LIST","String");var C2=this.cR("COLUMNVF_ELOBJ1","PRIM_LIST","String");var C3=this.cR("COLUMNVF_ELTXTM1","PRIM_LIST","String");var C4=this.cR("REFRESHBUTTON","PRIM_PHBN");var C5=this.cR("REFRESHMENU","PRIM_PPNL","Menu");var C6=this.cR("REFRESHQUEUES","PRIM_PPNL","MenuItem");var C7=this.cR("REFRESHFILES","PRIM_PPNL","MenuItem");var C8=this.cF("CURRENTQUEUENAME",Fd.F1.Dc);
var C9=this.cF("CURRENTLIBRARYNAME",Fd.F1.Dc);C0.setParent(this);C0.setDisplayPosition(1);C0.setTabPosition(1);C0.setHeight(25);C0.setLeft(8);C0.setTop(8);C0.setWidth(369);C0.setColumnHeaderHeight(20);C0.setColumnLines(false);C0.setRowLines(false);C0.setRowHeight(20);C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setSource(f.F1);C1.setColumnCaptionType("CAPTION");C1.setColumnCaption("Name");C1.setCellHeight(0);C1.setColumnCaptionAlign("LEFT");C1.setColumnWidth(78);C1.setSortOnClick(true);C1.iC();
C2.setDisplayPosition(2);C2.setParent(C0);C2.setSource(f.F3);C2.setColumnCaptionType("CAPTION");C2.setColumnCaption("Library");C2.setColumnCaptionAlign("LEFT");C2.setColumnWidth(86);C2.setSortOnClick(true);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.setSource(f.F4);C3.setColumnCaption("Description");C3.setColumnCaptionAlign("LEFT");C3.setColumnCaptionType("CAPTION");C3.setSortOnClick(true);C3.setColumnUnits("PROPORTION");C3.iC();C4.setParent(this);C4.setCaption("Refresh");C4.setDisplayPosition(2);
C4.setTabPosition(2);C4.setLeft(392);C4.setTop(8);C4.setWidth(113);C4.setMenuPopup(C5);C4.iC();C5.setLeft(392);C5.setTop(33);C5.setMenuSizing("POPUP");C5.iC();C6.setCaption("Print Queues");C6.setDisplayPosition(2);C6.setParent(C5);C6.setTabPosition(1);C6.setTop(25);C6.setWidth(148);C6.iC();C7.setCaption("Spool Files");C7.setDisplayPosition(1);C7.setParent(C5);C7.setTabPosition(2);C7.setWidth(148);C7.iC();C8.aD();C8.iC();C9.aD();C9.iC();C0.aH("ITEMGOTSELECTION",this,e4);C6.aH("CLICK",this,e1);C7.aH("CLICK",this,e2);
this.setHeight(45);this.setWidth(761);var li=this.aL("DF_T3101O");li.OUTPUTQUEUES=l.cLT({"QUEUE_LIBRARY":f.F5,"QUEUE_NAME":f.F6,"QUEUE_DESCRIPTION":f.F7},null);li.SPOOLFILEDETAILS=l.cLT({"LOPNGNAM":f.F8,"LOPNGJOB":f.F9,"LOPNGUSR":f.F10,"LOPNGJNO":f.F11,"LOPNGSNO":f.F12,"LOPNGTPG":f.F13,"LOPNGCPG":f.F14,"LOPNGLPR":f.F15,"LOPNGQUE":f.F16,"LOPNGLIB":f.F17,"LOPNGUDT":f.F18,"LOPNGSTS":f.F19,"LOPNGFRM":f.F20,"LOPNGPTY":f.F21},null);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",39);
var C0=r.cF("QUEUESINCLIPBOARD",Fd.F2.Dc);C0.iC();r.ln=39;{r.ln=43;this.setAVALLOWLOCATIONCHANGE(false);r.ln=44;this.setAVFILTERLOCATION("TOP");r.ln=46;this.REF.AVFRAMEWORKMANAGER.mthAVRESTOREVALUE("OUTQ","CURRENTQUEUE",u,u,u,u,u,m.CURRENTQUEUENAME,u,u,"QPRINT",u);r.ln=47;this.REF.AVFRAMEWORKMANAGER.mthAVRESTOREVALUE("OUTQ","CURRENTLIBRARY",u,u,u,u,u,m.CURRENTLIBRARYNAME,u,u,"QGPL",u);r.ln=49;this.REF.AVFRAMEWORKMANAGER.mthAVRESTOREVALUE("OUTQ","TOTAL",u,u,u,u,u,u,C0,u,u,u);r.ln=51;if(l.n.gt(C0.get(),0))
{r.ln=52;this.mthLOADVISIBLELISTFROMVIRTUALCLIPBOARD();r.ln=53;this.mthAVGOTOFREESTATE();}else{r.ln=55;this.mthLOADVIRTUALCLIPBOARDFROMSERVER();}r.ln=58;m.REFRESHQUEUES.setImage(this.REF.AVFRAMEWORKMANAGER.mthAVGETIMAGEREFERENCE("PRINT_OUTLINE.PNG","T","SMALL",false));r.ln=60;m.REFRESHFILES.setImage(this.REF.AVFRAMEWORKMANAGER.mthAVGETIMAGEREFERENCE("FOLDER_OUTLINE.PNG","T","SMALL",false));}r.ln=62;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#RefreshQueues.Click",65);r.ln=65;{r.ln=67;this.mthLOADVIRTUALCLIPBOARDFROMSERVER();
}r.ln=69;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#RefreshFiles.Click",72);r.ln=72;{r.ln=74;this.mthLOADSPOOLFILELIST();}r.ln=76;r.e();};cO.mthLOADVIRTUALCLIPBOARDFROMSERVER=function(){var li=this.LIST.DF_T3101O,f=this.FLD.DF_T3101O,r=l.mR(this,cO,"LoadVirtualClipBoardfromServer",80);var C0=r.cDR("GET_OUTPUTQUEUELIST","DF_T31DSO","GET_OUTPUTQUEUELIST");C0.iC();C0.aH("COMPLETED",this,e3);C0.aH("FAILED",this,e3);r.ln=80;{r.ln=89;li.OUTPUTQUEUES.clearList();r.ln=91;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);
r.ln=93;this.mthAVGOTOBUSYSTATE("Loading output queue list",false,u);r.ln=95;C0.mthEXECUTEASYNC({},{LIST:{"OUTPUTQUEUES":li.OUTPUTQUEUES}});}r.ln=119;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#Get_OutputQueueList.Completed #Get_OutputQueueList.Failed",98);var C1=r.cF("INSTANCE",Fd.F2.Dc);C1.iC();r.ln=98;{r.ln=102;if((this.REF.AVFRAMEWORKMANAGER!=null)){r.ln=104;{var l1=li.OUTPUTQUEUES.selectList();while(l1.step()){r.ln=105;C1.set(l.add(C1.get(),1));r.ln=106;this.REF.AVFRAMEWORKMANAGER.mthAVSAVEVALUE("OUTQ","NAME",u,u,u,u,C1.get(),f.F6.get(),u,u,u);
r.ln=107;this.REF.AVFRAMEWORKMANAGER.mthAVSAVEVALUE("OUTQ","LIBRARY",u,u,u,u,C1.get(),f.F5.get(),u,u,u);r.ln=108;this.REF.AVFRAMEWORKMANAGER.mthAVSAVEVALUE("OUTQ","DESCRIPTION",u,u,u,u,C1.get(),f.F7.get(),u,u,u);r.ln=109;}l1.end();}r.ln=111;this.REF.AVFRAMEWORKMANAGER.mthAVSAVEVALUE("OUTQ","TOTAL",u,u,u,u,u,u,C1.get(),u,u);r.ln=112;this.mthLOADVISIBLELISTFROMVIRTUALCLIPBOARD();r.ln=113;this.mthAVGOTOFREESTATE();}}r.ln=117;r.e();}};cO.mthLOADVISIBLELISTFROMVIRTUALCLIPBOARD=function(){var f=this.FLD.DF_T3101O,m=this.REF,r=l.mR(this,cO,"LoadVisibleListFromVirtualClipboard",124);
var C0=r.cF("QUEUESINCLIPBOARD",Fd.F2.Dc);var C1=r.cF("INSTANCE",Fd.F2.Dc);var C2=r.cR("QUEUESELECTED","PRIM_BOLN");C0.iC();C1.iC();C2.iC();r.ln=124;{r.ln=130;this.REF.AVFRAMEWORKMANAGER.mthAVRESTOREVALUE("OUTQ","TOTAL",u,u,u,u,u,u,C0,u,u,u);r.ln=132;m.VISIBLEOUTPUTQUEUELIST.clearList();r.ln=134;for(var i1=1,s1=1,t1=l.tI(C0.get());C1.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=136;this.REF.AVFRAMEWORKMANAGER.mthAVRESTOREVALUE("OUTQ","NAME",u,u,u,u,C1.get(),f.F1,u,u,u,u);r.ln=137;
this.REF.AVFRAMEWORKMANAGER.mthAVRESTOREVALUE("OUTQ","LIBRARY",u,u,u,u,C1.get(),f.F3,u,u,u,u);r.ln=138;this.REF.AVFRAMEWORKMANAGER.mthAVRESTOREVALUE("OUTQ","DESCRIPTION",u,u,u,u,C1.get(),f.F4,u,u,u,u);r.ln=140;m.VISIBLEOUTPUTQUEUELIST.addEntry();r.ln=142;if(l.and(l.s.eq(f.F1.get(),m.CURRENTQUEUENAME.get()),l.s.eq(f.F3.get(),m.CURRENTLIBRARYNAME.get()))){r.ln=143;m.VISIBLEOUTPUTQUEUELIST.getCurrentItem().setSelected(true);r.ln=144;C2.set(true);}}r.ln=149;if(l.tB(C2.get())){r.ln=150;this.mthLOADSPOOLFILELIST();
}}r.ln=153;r.e();};function e4(sender,Ps){var f=this.FLD.DF_T3101O,m=this.REF,r=l.eR(this,cO,"#VisibleOutputQueueList.ItemGotSelection",156);r.ln=156;{r.ln=158;f.F22.set(lIO=m.VISIBLEOUTPUTQUEUELIST.getEntry(m.VISIBLEOUTPUTQUEUELIST.getCurrentItem().getEntry()));r.ln=160;m.CURRENTQUEUENAME.set(f.F1.get());r.ln=161;m.CURRENTLIBRARYNAME.set(f.F3.get());r.ln=163;this.REF.AVFRAMEWORKMANAGER.mthAVSAVEVALUE("OUTQ","CURRENTQUEUE",u,u,u,u,u,m.CURRENTQUEUENAME.get(),u,u,u);r.ln=164;this.REF.AVFRAMEWORKMANAGER.mthAVSAVEVALUE("OUTQ","CURRENTLIBRARY",u,u,u,u,u,m.CURRENTLIBRARYNAME.get(),u,u,u);
r.ln=166;this.mthLOADSPOOLFILELIST();}r.ln=168;r.e();};cO.mthLOADSPOOLFILELIST=function(){var li=this.LIST.DF_T3101O,f=this.FLD.DF_T3101O,m=this.REF,r=l.mR(this,cO,"LoadSpoolFileList",171);var C0=r.cDR("GET_SPOOLFILELIST","DF_T31DSO","GET_SPOOLFILELIST");C0.iC();C0.aH("COMPLETED",this,e5);C0.aH("FAILED",this,e5);r.ln=171;{r.ln=195;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=197;this.mthAVGOTOBUSYSTATE("Loading Spool File Names",false,u);r.ln=199;li.SPOOLFILEDETAILS.clearList();r.ln=201;
C0.mthEXECUTEASYNC({FLD:{"UACTION":"QU","ULIBRARY":m.CURRENTLIBRARYNAME.get(),"UQUEUE":m.CURRENTQUEUENAME.get(),"UMAXIMUM":300}},{LIST:{"SPOOLFILEDETAILS":li.SPOOLFILEDETAILS}});r.ln=203;this.REF.AVLISTMANAGER.mthCLEARLIST(u,u);}r.ln=231;r.e();function e5(sender,Ps){var r=l.eR(this,cO,"#Get_SpoolFileList.Completed #Get_SpoolFileList.Failed",206);var C1=r.cF("INDEX",Fd.F2.Dc);C1.iC();r.ln=206;{r.ln=210;if((this.REF.AVFRAMEWORKMANAGER!=null)){r.ln=212;this.REF.AVFRAMEWORKMANAGER.mthAVRECEIVESYSTEMMESSAGEQUEUE(this,u);
r.ln=214;{var l1=li.SPOOLFILEDETAILS.selectList();while(l1.step()){r.ln=216;C1.set(l.add(C1.get(),1));r.ln=218;this.REF.AVLISTMANAGER.mthADDTOLIST(f.F8.get(),f.F12.get(),u,u,u,u,u,C1.get(),u,u,u,u,u,u,u,u,u,u,u,u,f.F10.get(),f.F9.get(),f.F11.get(),f.F18.get(),f.F19.get(),f.F20.get(),u,u,u,u,f.F13.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);r.ln=220;}l1.end();}r.ln=222;li.SPOOLFILEDETAILS.clearList();r.ln=224;this.mthAVGOTOFREESTATE();}}r.ln=228;r.e();}};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};
l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_OBJ"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);};},{rc:["VF_AC007O"],rp:["PRIM_LIST.DropDown","PRIM_LIST.String","PRIM_PHBN","PRIM_PPNL.Menu","PRIM_PPNL.MenuItem","PRIM_FLD","PRIM_WEB.DataRequest"],dp:["PRIM_BOLN"]});