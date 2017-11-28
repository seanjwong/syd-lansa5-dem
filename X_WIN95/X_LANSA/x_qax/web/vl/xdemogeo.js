﻿LANSA.addComponent({id:"XDEMOGEO",nm:"xDemoGeolocationControl",ot:"rp",tp:"Reusable Part",de:"Mobile Device Geolocation Control",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMOLATI",an:"xDemoLatitude",ft:"P",ln:12,dc:9,ec:"1",lb:"Latitude",h1:"Latitude",h2:"",h3:"",de:"Latitude",dv:0,ia:["ASQN"]},F2:{nm:"XDEMOLONG",an:"xDemoLongitude",ft:"P",ln:12,dc:9,ec:"1",lb:"Longitude",h1:"Longitude",h2:"",h3:"",de:"Longitude",
dv:0,ia:["ASQN"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{Maptype:{da:"na"}},mt:{GetCurrentLocation:{},SetLocation:{ps:{"Latitude":{pt:"i"},"Longitude":{pt:"i"}}}},ev:{LocationChanged:{ps:{"Latitude":{pt:"i"},"Longitude":{pt:"i"}}},Failed:{}},co:function(){cO.aN.call(this);this.aF("XDEMOGEO",Fd);var C0=this.cR("LOCATION","PRIM_WEB","Geolocation");var C1=this.cR("MAP","XGOOGLE03");var C2=this.cR("LAYOUT1","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");
var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");C0.iC();C1.setDisplayPosition(1);C1.setHeight(281);C1.setLeft(0);C1.setParent(this);C1.setTabPosition(1);C1.setTabStop(false);C1.setTop(0);C1.setWidth(409);C1.setMAPTYPE("HYBRID");C1.setZOOM(13);C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(1);C4.setParent(C2);C4.iC();C5.setColumn(C3);C5.setManage(C1);C5.setParent(C2);C5.setRow(C4);C5.iC();C0.aH("REFRESHED",this,e1);C1.aH("CENTERCHANGED",this,e2);this.setDisplayPosition(1);
this.setHeight(281);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(409);this.setLayoutManager(C2);}});cO.mthSETMAPTYPE=function(p0){var m=this.REF,r=l.pR(this,cO,"SetMapType",27);var P0=r.cP("MAPTYPE","PRIM_STR");P0.set(p0);r.ln=27;{r.ln=30;m.MAP.setMAPTYPE(P0.get());}r.ln=32;r.e();};function e1(sender,Ps){var f=this.FLD.XDEMOGEO,m=this.REF,r=l.eR(this,cO,"#location.Refreshed",38);r.ln=38;{r.ln=40;if(l.s.eq(m.LOCATION.getErrorCode(),"NONE")){r.ln=42;f.F1.set(m.LOCATION.getLatitude());
r.ln=44;f.F2.set(m.LOCATION.getLongitude());r.ln=46;m.MAP.mthCENTER(m.LOCATION.getLatitude(),m.LOCATION.getLongitude());}else{r.ln=50;this.fE("FAILED");}}r.ln=54;r.e();};function e2(sender,Ps){var f=this.FLD.XDEMOGEO,r=l.eR(this,cO,"#Map.CenterChanged",56);var P0=Ps.r("LATITUDE");var P1=Ps.r("LONGITUDE");r.ln=56;{r.ln=58;f.F1.set(P0.get());r.ln=60;f.F2.set(P1.get());r.ln=62;{var eP=l.ePs();eP.cF("LATITUDE",Fd.F1.Dc);eP.cF("LONGITUDE",Fd.F2.Dc);eP.r("LATITUDE").set(f.F1.get());eP.r("LONGITUDE").set(f.F2.get());
this.fE("LOCATIONCHANGED",eP);eP.e();}}r.ln=64;r.e();};cO.mthGETCURRENTLOCATION=function(){var m=this.REF,r=l.mR(this,cO,"GetCurrentLocation",70);r.ln=70;{r.ln=72;m.LOCATION.mthREFRESH();}r.ln=74;r.e();};cO.mthSETLOCATION=function(p0,p1){var f=this.FLD.XDEMOGEO,m=this.REF,r=l.mR(this,cO,"SetLocation",76);var P0=r.cPF("LATITUDE",Fd.F1.Dc);var P1=r.cPF("LONGITUDE",Fd.F2.Dc);P0.set(p0);P1.set(p1);r.ln=76;{r.ln=80;f.F1.set(l.n.Bound(P0.get(),-85,85));r.ln=82;f.F2.set(l.n.Bound(P1.get(),-180,180));r.ln=84;
m.MAP.mthCENTER(f.F1.get(),f.F2.get());}r.ln=86;r.e();};cO.setMAPTYPE=function(v){this.mthSETMAPTYPE(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOLATI"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XDEMOLONG"});}},{rc:["XGOOGLE03"],rp:["PRIM_PANL","PRIM_WEB.Geolocation","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_FLD"]});