﻿LANSA.addComponent({id:"XDEMOW_34",nm:"xDemoWebImageViewerSample",ot:"wp",tp:"Web Page",de:"Image Viewer",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cA("GDATA","XDEMO_30");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("ROW_2","PRIM_TBLO","Row");var C4=this.cR("ROW_3","PRIM_TBLO","Row");var C5=this.cR("ROW_4","PRIM_TBLO","Row");var C6=this.cR("ROW_5","PRIM_TBLO","Row");var C7=this.cR("COLUMN","PRIM_TBLO","Column");
var C8=this.cR("COLUMN_2","PRIM_TBLO","Column");var C9=this.cR("COLUMN_3","PRIM_TBLO","Column");var C10=this.cR("COLUMN_4","PRIM_TBLO","Column");var C11=this.cR("COLUMN_5","PRIM_TBLO","Column");var C12=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C13=this.cR("IMAGEVIEWER","XDEMOW_2");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.iC();C5.setDisplayPosition(4);
C5.setParent(C1);C5.iC();C6.setDisplayPosition(5);C6.setParent(C1);C6.iC();C7.setDisplayPosition(1);C7.setParent(C1);C7.iC();C8.setDisplayPosition(2);C8.setParent(C1);C8.iC();C9.setDisplayPosition(3);C9.setParent(C1);C9.iC();C10.setDisplayPosition(4);C10.setParent(C1);C10.iC();C11.setDisplayPosition(5);C11.setParent(C1);C11.iC();C12.setColumn(C7);C12.setManage(C13);C12.setParent(C1);C12.setRow(C2);C12.setColumnSpan(5);C12.setRowSpan(5);C12.iC();C13.setParent(this);C13.setHeight(800);C13.setWidth(1200);
C13.iC();C0.aH("PREPARED",this,e1);this.setLayoutManager(C1);this.setTheme(l.THEME().get("2015DEEPPURPLE"));}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gData.Prepared",25);r.ln=25;{r.ln=28;{var l1=m.GDATA.ref.getEMPLOYEES().cI();while(l1.step()){var EMPLOYEE=r.sR("EMPLOYEE",l1.item());r.ln=30;m.IMAGEVIEWER.mthADD(EMPLOYEE.getTHUMBNAIL());r.ln=32;}l1.end();r.dR("EMPLOYEE");}r.ln=34;m.IMAGEVIEWER.mthACTIVATEIMAGE(1);}r.ln=36;r.e();};},{rc:["XDEMO_30","XDEMOW_2"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item"]
});