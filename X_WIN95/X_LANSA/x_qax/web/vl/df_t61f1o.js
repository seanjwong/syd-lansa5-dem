﻿LANSA.addComponent({id:"DF_T61F1O",ot:"rp",tp:"Reusable Part",de:"\OC=Multiple Instances Filter",tl:14015000},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC007O",mt:{uInitialize:{}},co:function(){cO.aN.call(this);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEM1","PRIM_ATLI");var C2=this.cR("ATTACHITEM3","PRIM_ATLI");var C3=this.cR("ABOUT","PRIM_LABL");var C4=this.cR("FILLAGAIN","PRIM_PHBN");C0.iC();C1.setParent(C0);C1.setAttachment("CENTER");C1.setMarginBottom(4);C1.setMarginLeft(4);
C1.setMarginTop(4);C1.setMarginRight(4);C1.setManage(C3);C1.iC();C2.setParent(C0);C2.setAttachment("BOTTOM");C2.setMarginBottom(4);C2.setMarginLeft(4);C2.setMarginTop(4);C2.setMarginRight(4);C2.setManage(C4);C2.iC();C3.setParent(this);C3.setHeight(432);C3.setWidth(289);C3.setDisplayPosition(1);C3.setTabPosition(1);C3.setTabStop(false);C3.setLeft(4);C3.setTop(4);C3.iC();C4.setParent(this);C4.setDisplayPosition(2);C4.setTabPosition(2);C4.setLeft(4);C4.setTop(444);C4.setWidth(289);C4.setCaption("Reload Instance List");
C4.iC();C4.aH("CLICK",this,e1);this.setWidth(297);this.setLayoutManager(C0);this.setHeight(473);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",29);var C0=r.cR("DOUBLECR","PRIM_ALPH");C0.iC();r.ln=29;{r.ln=34;C0.set(l.cat(l.n.AsUnicodeString(10),l.n.AsUnicodeString(10)));r.ln=37;cA.mthUINITIALIZE.call(this);r.ln=40;m.ABOUT.set(l.cat(C0.get(),"This is VL resusable part DF_T61F1O."));r.ln=42;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"On this business object's 'Command Display' tab there is an VLF-ONE option 'Maximum Instances Concurrently Open'. It defaults to 1 for all business objects. It has a maximum value of 9.")));
r.ln=44;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"This maximum value is specified by the designer. It defines how many instance list items can be concurrently open in their associated command handlers. In this example it is set to 5.")));r.ln=46;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"You can tell that this feature is activated because of the numeric spin button that has appeared on the top right of the instance list.")));r.ln=48;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"The spin button allows end users to dynamically control the maximum number of open instances allowed - up to the maximum the application designer decided to allow. If you change it to 3 (say) then you should be able to have up to 3 command handlers concurrently open.")));
r.ln=50;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"Click on some test instances in the instance list on the right to open the 'Details' command handler for more information.")));r.ln=54;this.setAVFILTERLOCATION("LEFT");r.ln=55;this.setAVALLOWLOCATIONCHANGE(false);r.ln=58;this.REF.AVFRAMEWORKMANAGER.mthAVEMULATEINSTANCELISTSEARCH(50,this.REF.ASSOCIATEDVF_FR003O,"Instance");}r.ln=60;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#FillAgain.Click",63);r.ln=63;{r.ln=67;this.REF.AVFRAMEWORKMANAGER.mthAVEMULATEINSTANCELISTSEARCH(50,this.REF.ASSOCIATEDVF_FR003O,"Instance");
}r.ln=70;r.e();};cO.srASSOCIATEDVF_FR003O=function(rn){cA.srASSOCIATEDVF_FR003O.call(this,rn);};cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC007O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_PHBN"],dp:["PRIM_ALPH"]});