﻿LANSA.addComponent({id:"XDODEPT",nm:"xDODepartment",ot:"rp",tp:"Reusable Part",de:"Department Object",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F2:{nm:"XDEPTDESC",an:"xDepartmentDescription",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"説明....","LLL":"Description...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"説明","LLL":"Description"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門説明","LLL":"Department Description"}[cL],
dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{Identifier:{da:"rw"},Description:{da:"rw"}},mt:{PopulateFromJSON:{ps:{"Element":{pt:"i"}}},SaveAsJSON:{ps:{"Array":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDODEPT",Fd);this.aLF({"XDEPTMENT":f.F1,"XDEPTDESC":f.F2});}});cO.mthPOPULATEFROMJSON=function(p0){var f=this.FLD.XDODEPT,r=l.mR(this,cO,"PopulateFromJSON",13);var P0=r.cPD("ELEMENT");P0=p0;r.ln=13;{r.ln=17;f.F1.set(P0.getItem("deptment").mthASSTRING());r.ln=18;f.F2.set(P0.getItem("deptdesc").mthASSTRING());
}r.ln=20;r.e();};cO.mthSAVEASJSON=function(p0){var f=this.FLD.XDODEPT,r=l.mR(this,cO,"SaveAsJSON",22);var P0=r.cPD("ARRAY");P0=p0;var C0=r.cD("C0");var C1=r.cD("C1");var C2=r.cD("C2");r.ln=22;{r.ln=32;C0=r.sR("C0",P0.mthINSERTOBJECT());r.ln=34;C0.mthINSERTSTRING("deptment",f.F1.get());r.ln=35;C0.mthINSERTSTRING("deptdesc",f.F2.get());}r.ln=37;r.e();};cO.getIDENTIFIER=function(){var f=this.FLD.XDODEPT;return f.F1.get();};cO.setIDENTIFIER=function(v){var f=this.FLD.XDODEPT;f.F1.set(v);};cO.getDESCRIPTION=function()
{var f=this.FLD.XDODEPT;return f.F2.get();};cO.setDESCRIPTION=function(v){var f=this.FLD.XDODEPT;f.F2.set(v);};},{rp:["PRIM_OBJT"],dp:["PRIM_WEB.JsonObject","PRIM_WEB.JsonArray"]});