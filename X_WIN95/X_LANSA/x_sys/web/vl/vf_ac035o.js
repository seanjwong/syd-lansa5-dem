﻿LANSA.addComponent({id:"VF_AC035O",ot:"rp",tp:"Reusable Part",de:"\OC=VLF-ONE Ancestor Instance List Pane",tl:14015000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",pt:{ParentPanel:{da:"rw"},avListManager:{da:"rw"},avFrameworkManager:{da:"rw"},VF_UM041OManager:{da:"rw"},TreeItem:{da:"rw"},DataItem:{da:"rw"},avHandlesOwnSelection:{da:"rw"}},mt:{uInitialize:{},uCreateorUpdateDisplay:{},uHandleInstanceListColumnChange:{ps:{"uColumnDefinition":{pt:"i"}}},uHandleInstanceListColumnSortChange:{},uTerminate:
{},uRefreshVisibleSelectedState:{},uRefreshVisibleCurrentState:{},uShowCommandMenu:{ps:{"IgnoreCommandEnablement":{pt:"i"}}},uShowTreeExpandedState:{},uShowTreeCollapsedState:{},uContains:{ps:{"UpperCaseWords":{pt:"i"}}}},co:function(){cO.aN.call(this);this.cD("PARENTPANEL");this.cD("AVLISTMANAGER");this.cD("AVFRAMEWORKMANAGER");this.cD("VF_UM041OMANAGER");this.cD("TREEITEM");this.cD("DATAITEM");var C6=this.cR("AVHANDLESOWNSELECTION","PRIM_BOLN");C6.iC();this.setDisplayPosition(1);this.setTabPosition(1);
this.setWidth(383);this.setLeft(0);this.setTop(0);this.setTabStop(false);}});cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",30);r.ln=30;{}r.ln=32;r.e();};cO.mthUCREATEORUPDATEDISPLAY=function(){var r=l.mR(this,cO,"uCreateorUpdateDisplay",35);r.ln=35;{}r.ln=37;r.e();};cO.mthUHANDLEINSTANCELISTCOLUMNCHANGE=function(p0){var r=l.mR(this,cO,"uHandleInstanceListColumnChange",40);var P0=r.cPD("UCOLUMNDEFINITION");P0=p0;r.ln=40;{}r.ln=43;r.e();};cO.mthUHANDLEINSTANCELISTCOLUMNSORTCHANGE=function()
{var r=l.mR(this,cO,"uHandleInstanceListColumnSortChange",46);r.ln=46;{}r.ln=48;r.e();};cO.mthUTERMINATE=function(){var r=l.mR(this,cO,"uTerminate",51);r.ln=51;{}r.ln=53;r.e();};cO.mthUREFRESHVISIBLESELECTEDSTATE=function(){var r=l.mR(this,cO,"uRefreshVisibleSelectedState",56);r.ln=56;{}r.ln=58;r.e();};cO.mthUREFRESHVISIBLECURRENTSTATE=function(){var r=l.mR(this,cO,"uRefreshVisibleCurrentState",61);r.ln=61;{}r.ln=63;r.e();};cO.mthUSHOWCOMMANDMENU=function(p0){var m=this.REF,r=l.mR(this,cO,"uShowCommandMenu",66);
var P0=r.cP("IGNORECOMMANDENABLEMENT","PRIM_BOLN");P0.set((p0===u)?(false):(p0));r.ln=66;{r.ln=69;if((m.DATAITEM!=null)){r.ln=70;m.DATAITEM.getAVBUSINESSOBJECTREFERENCE().mthZINT_SHOWCOMMANDHANDLERCHOICEMENU(m.VF_UM041OMANAGER,"",P0.get());}}r.ln=73;r.e();};cO.mthUSHOWTREEEXPANDEDSTATE=function(){var r=l.mR(this,cO,"uShowTreeExpandedState",76);r.ln=76;{}r.ln=78;r.e();};cO.mthUSHOWTREECOLLAPSEDSTATE=function(){var r=l.mR(this,cO,"uShowTreeCollapsedState",81);r.ln=81;{}r.ln=83;r.e();};cO.mthUCONTAINS=function(p0)
{var r=l.mR(this,cO,"uContains",86);var P0=r.cPD("UPPERCASEWORDS");var P1=r.cP("FOUND","PRIM_BOLN");P0=p0;r.ln=86;{r.ln=90;P1.set(false);}r.ln=92;return r.rV(P1.get());};cO.getPARENTPANEL=function(){return this.REF.PARENTPANEL;};cO.setPARENTPANEL=function(v){this.srPARENTPANEL(v);};cO.getAVLISTMANAGER=function(){return this.REF.AVLISTMANAGER;};cO.setAVLISTMANAGER=function(v){this.srAVLISTMANAGER(v);};cO.getAVFRAMEWORKMANAGER=function(){return this.REF.AVFRAMEWORKMANAGER;};cO.setAVFRAMEWORKMANAGER=function(v)
{this.srAVFRAMEWORKMANAGER(v);};cO.getVF_UM041OMANAGER=function(){return this.REF.VF_UM041OMANAGER;};cO.setVF_UM041OMANAGER=function(v){this.srVF_UM041OMANAGER(v);};cO.getTREEITEM=function(){return this.REF.TREEITEM;};cO.setTREEITEM=function(v){this.srTREEITEM(v);};cO.getDATAITEM=function(){return this.REF.DATAITEM;};cO.setDATAITEM=function(v){this.srDATAITEM(v);};cO.getAVHANDLESOWNSELECTION=function(){return this.REF.AVHANDLESOWNSELECTION.get();};cO.setAVHANDLESOWNSELECTION=function(v){this.REF.AVHANDLESOWNSELECTION.set(v);
};cO.srPARENTPANEL=function(rn){this.sR("PARENTPANEL",rn);};cO.srAVLISTMANAGER=function(rn){this.sR("AVLISTMANAGER",rn);};cO.srAVFRAMEWORKMANAGER=function(rn){this.sR("AVFRAMEWORKMANAGER",rn);};cO.srVF_UM041OMANAGER=function(rn){this.sR("VF_UM041OMANAGER",rn);};cO.srTREEITEM=function(rn){this.sR("TREEITEM",rn);};cO.srDATAITEM=function(rn){this.sR("DATAITEM",rn);};},{rp:["PRIM_PANL","PRIM_BOLN"],dc:["VF_LM002O","VF_SY100O","VF_UM041O","VF_LM003O"],dp:["PRIM_PANL","PRIM_TREE.TreeItem"]});