﻿LANSA.addComponent({id:"XAATHEME",nm:"xAssessorTheme",ot:"th",tp:"Theme",de:"Assessor Theme",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_THM",co:function(){cO.aN.call(this);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("MENUBAR","PRIM_THM","DrawStyle");var C2=this.cR("MENUBARSTYLE","PRIM_VS","Style");var C3=this.cR("MENUBARBACKGROUNDBRUSH","PRIM_VS","SolidBrush");var C4=this.cR("POPUPMENUSTYLE","PRIM_VS","Style");var C5=this.cR("POPUPMENUBORDER","PRIM_VS","SolidBrush");var C6=this.cR("POPUPMENUBACKGROUND","PRIM_VS","SolidBrush");
var C7=this.cR("POPUPMENUDROPSHADOW","PRIM_VS","DropShadow");var C8=this.cR("POPUP","PRIM_THM","DrawStyle");var C9=this.cR("POPUPSTYLE","PRIM_VS","Style");var C10=this.cR("BRUSH10","PRIM_VS","SolidBrush");var C11=this.cR("DROPSHADOW2","PRIM_VS","DropShadow");var C12=this.cR("POPUPBORDER","PRIM_VS","SolidBrush");var C13=this.cR("EDIT","PRIM_THM","DrawStyle");var C14=this.cR("STYLE2","PRIM_VS","Style");var C15=this.cR("BRUSH15","PRIM_VS","SolidBrush");var C16=this.cR("BRUSH2","PRIM_VS","SolidBrush");
var C17=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C18=this.cR("PUSHBUTTON","PRIM_THM","DrawStyle");var C19=this.cR("PUSHBUTTONSTYLE","PRIM_VS","Style");var C20=this.cR("BRUSH6","PRIM_VS","SolidBrush");var C21=this.cR("PUSHBUTTONBACKGROUND","PRIM_VS","SolidBrush");var C22=this.cR("PUSHBUTTONBORDER","PRIM_VS","SolidBrush");var C23=this.cR("PUSHBUTTONMOUSEOVER","PRIM_VS","Style");var C24=this.cR("PUSHBUTTONMOUSEOVERBACKGROUND","PRIM_VS","SolidBrush");var C25=this.cR("PUSHBUTTONFOCUSED","PRIM_VS","Style");
var C26=this.cR("PUSHBUTTONFOCUSBACKGROUND","PRIM_VS","SolidBrush");var C27=this.cR("PUSHBUTTONFOCUSBORDER","PRIM_VS","SolidBrush");var C28=this.cR("PUSHBUTTONPRESSED","PRIM_VS","Style");var C29=this.cR("BRUSH23","PRIM_VS","SolidBrush");var C30=this.cR("BRUSH16","PRIM_VS","SolidBrush");var C31=this.cR("BRUSH5","PRIM_VS","SolidBrush");var C32=this.cR("STYLE5","PRIM_VS","Style");var C33=this.cR("BRUSH27","PRIM_VS","SolidBrush");var C34=this.cR("KEYPAD","PRIM_THM","DrawStyle");var C35=this.cR("STYLE6","PRIM_VS","Style");
var C36=this.cR("BRUSH12","PRIM_VS","SolidBrush");var C37=this.cR("BRUSH11","PRIM_VS","SolidBrush");var C38=this.cR("BRUSH9","PRIM_VS","SolidBrush");var C39=this.cR("TOOLBARBUTTON","PRIM_THM","DrawStyle");var C40=this.cR("TOOLBARBUTTONMOUSEOVER","PRIM_VS","Style");var C41=this.cR("TOOLBARBUTTONMOUSEOVERBACKGROUND","PRIM_VS","SolidBrush");var C42=this.cR("TOOLBARBUTTONFOCUSED","PRIM_VS","Style");var C43=this.cR("TOOLBARBUTTONFOCUSBACKGROUND","PRIM_VS","SolidBrush");var C44=this.cR("TOOLBARBUTTONFOCUSBORDER","PRIM_VS","SolidBrush");
var C45=this.cR("TOOLBARBUTTONPRESSED","PRIM_VS","Style");var C46=this.cR("TOOLBARBUTTONPRESSEDBACKGROUND","PRIM_VS","SolidBrush");var C47=this.cR("KEYPADSTYLE","PRIM_VS","Style");var C48=this.cR("BRUSH22","PRIM_VS","SolidBrush");var C49=this.cR("BRUSH7","PRIM_VS","SolidBrush");var C50=this.cR("KEYPADBACKGROUND","PRIM_VS","SolidBrush");var C51=this.cR("KEYPADBORDER","PRIM_VS","SolidBrush");var C52=this.cR("KEYPADPRESSED","PRIM_VS","Style");var C53=this.cR("BRUSH26","PRIM_VS","SolidBrush");var C54=this.cR("BRUSH25","PRIM_VS","SolidBrush");
var C55=this.cR("BRUSH8","PRIM_VS","SolidBrush");var C56=this.cR("STYLE8","PRIM_VS","Style");var C57=this.cR("MENUITEM","PRIM_THM","DrawStyle");var C58=this.cR("MENUITEMMOUSEOVER","PRIM_VS","Style");var C59=this.cR("MENUITEMMOUSEBACKGROUND","PRIM_VS","SolidBrush");var C60=this.cR("TITLE","PRIM_THM","DrawStyle");var C61=this.cR("TITLESTYLE","PRIM_VS","Style");var C62=this.cR("TITLESTYLEFOREGROUND","PRIM_VS","SolidBrush");var C63=this.cR("HEADING1","PRIM_THM","DrawStyle");var C64=this.cR("HEADING1STYLE","PRIM_VS","Style");
var C65=this.cR("HEADING1FOREGROUND","PRIM_VS","SolidBrush");var C66=this.cR("HEADING2","PRIM_THM","DrawStyle");var C67=this.cR("HEADING2STYLE","PRIM_VS","Style");var C68=this.cR("HEADING2FOREGROUND","PRIM_VS","SolidBrush");var C69=this.cR("HEADING3","PRIM_THM","DrawStyle");var C70=this.cR("HEADING3STYLE","PRIM_VS","Style");var C71=this.cR("HEADING3FOREGROUND","PRIM_VS","SolidBrush");var C72=this.cR("LIGHTTITLE","PRIM_THM","DrawStyle");var C73=this.cR("LIGHTTITLESTYLE","PRIM_VS","Style");var C74=this.cR("LIGHTTITLEBACKGROUND","PRIM_VS","SolidBrush");
var C75=this.cR("LIGHTTITLEFOREGROUND","PRIM_VS","SolidBrush");var C76=this.cR("MEDIUMTITLE","PRIM_THM","DrawStyle");var C77=this.cR("MEDIUMTITLESTYLE","PRIM_VS","Style");var C78=this.cR("MEDIUMTITLEBACKGROUND","PRIM_VS","SolidBrush");var C79=this.cR("MEDIUMTITLEFOREGROUND","PRIM_VS","SolidBrush");var C80=this.cR("DARKTITLE","PRIM_THM","DrawStyle");var C81=this.cR("DARKTITLESTYLE","PRIM_VS","Style");var C82=this.cR("DARKTITLEFOREGROUND","PRIM_VS","SolidBrush");var C83=this.cR("DARKTITLEBACKGROUND","PRIM_VS","SolidBrush");
var C84=this.cR("HEADING1WHITE","PRIM_THM","DrawStyle");var C85=this.cR("STYLE3","PRIM_VS","Style");var C86=this.cR("BRUSH3","PRIM_VS","SolidBrush");var C87=this.cR("HEADING2WHITE","PRIM_THM","DrawStyle");var C88=this.cR("STYLE4","PRIM_VS","Style");var C89=this.cR("BRUSH4","PRIM_VS","SolidBrush");var C90=this.cR("FIELDLABEL","PRIM_THM","DrawStyle");var C91=this.cR("STYLE7","PRIM_VS","Style");var C92=this.cR("BRUSH14","PRIM_VS","SolidBrush");var C93=this.cR("BRUSH13","PRIM_VS","SolidBrush");var C94=this.cR("TOOLBARBUTTON2","PRIM_THM","DrawStyle");
var C95=this.cR("STYLE9","PRIM_VS","Style");var C96=this.cR("BRUSH18","PRIM_VS","SolidBrush");var C97=this.cR("BRUSH17","PRIM_VS","SolidBrush");var C98=this.cR("STYLE10","PRIM_VS","Style");var C99=this.cR("PUSHBUTTONDISABLED","PRIM_THM","DrawStyle");var C100=this.cR("STYLE11","PRIM_VS","Style");var C101=this.cR("BRUSH21","PRIM_VS","SolidBrush");var C102=this.cR("BRUSH20","PRIM_VS","SolidBrush");var C103=this.cR("BRUSH19","PRIM_VS","SolidBrush");C0.setFaceName("Segoe UI");C0.setFontSize(12);C0.setFontUnits("PIXEL");
C0.setCornerBottomLeft(0);C0.setCornerBottomRight(0);C0.setCornerTopLeft(0);C0.setCornerTopRight(0);C0.iC();C1.setStyle(C2);C1.iC();C2.setBackgroundBrush(C3);C2.iC();C3.setColor("THEME300");C3.iC();C4.setBackgroundBrush(C6);C4.setBorderBottom(1);C4.setBorderRight(1);C4.setBorderLeft(1);C4.setBorderTop(1);C4.setCornerBottomLeft(0);C4.setCornerBottomRight(0);C4.setCornerTopLeft(0);C4.setCornerTopRight(0);C4.setBorderBrush(C5);C4.setEffect(C7);C4.iC();C5.setColor("THEMEBORDER");C5.iC();C6.setColor("WHITE");
C6.iC();C7.iC();C8.setStyle(C9);C8.iC();C9.setBorderBottom(0);C9.setBorderRight(0);C9.setBorderLeft(0);C9.setBorderTop(0);C9.setCornerBottomLeft(0);C9.setCornerBottomRight(0);C9.setCornerTopLeft(0);C9.setCornerTopRight(0);C9.setEffect(C11);C9.setBackgroundBrush(C10);C9.iC();C10.setColor("WHITE");C10.setOpacity(0);C10.iC();C11.setOpacity(0);C11.iC();C12.setColor("THEMEBORDER");C12.iC();C13.setStyle(C14);C13.iC();C14.setBorderBottom(1);C14.setBorderLeft(1);C14.setBorderRight(1);C14.setBorderTop(1);
C14.setCornerBottomLeft(3);C14.setCornerBottomRight(3);C14.setCornerTopLeft(3);C14.setCornerTopRight(3);C14.setBackgroundBrush(C17);C14.setForegroundBrush(C16);C14.setBorderBrush(C15);C14.setFontSize(150);C14.setFontUnits("PERCENT");C14.iC();C15.setColor("THEME900");C15.iC();C16.setColor("THEMETEXT");C16.iC();C17.setColor("WHITE");C17.iC();C18.setStyle(C19);C18.setMouseOverStyle(C19);C18.setFocusedStyle(C19);C18.setSelectedStyle(C19);C18.setPressedStyle(C32);C18.iC();C19.setBackgroundBrush(C21);C19.setBorderBottom(1);
C19.setBorderLeft(1);C19.setBorderRight(1);C19.setBorderTop(1);C19.setBorderBrush(C22);C19.setCornerBottomLeft(4);C19.setCornerBottomRight(4);C19.setCornerTopLeft(4);C19.setCornerTopRight(4);C19.setForegroundBrush(C20);C19.setFontSize(150);C19.setFontUnits("PERCENT");C19.iC();C20.setColor("WHITE");C20.iC();C21.setColor("0:0:0");C21.setOpacity(30);C21.iC();C22.setColor("0:0:0");C22.setOpacity(90);C22.iC();C23.setBackgroundBrush(C24);C23.iC();C24.setColor("THEME200");C24.iC();C25.setBackgroundBrush(C26);
C25.setBorderBrush(C27);C25.iC();C26.setColor("THEME200");C26.iC();C27.setColor("THEME300");C27.iC();C28.setBackgroundBrush(C31);C28.setBorderBrush(C30);C28.setFontSize(150);C28.setFontUnits("PERCENT");C28.setForegroundBrush(C29);C28.setCornerBottomLeft(4);C28.setCornerBottomRight(4);C28.setCornerTopLeft(4);C28.setCornerTopRight(4);C28.iC();C29.setColor("WHITE");C29.iC();C30.setColor("0:0:0");C30.iC();C31.setColor("0:0:0");C31.iC();C32.setBackgroundBrush(C33);C32.iC();C33.setColor("0:0:0");C33.setOpacity(50);
C33.iC();C34.setPressedStyle(C52);C34.setStyle(C47);C34.setMouseOverStyle(C47);C34.setFocusedStyle(C47);C34.setSelectedStyle(C47);C34.setFocusedInactiveStyle(C35);C34.setSelectedInactiveStyle(C35);C34.iC();C35.setBackgroundBrush(C38);C35.setCornerBottomLeft(99);C35.setCornerBottomRight(99);C35.setCornerTopLeft(99);C35.setCornerTopRight(99);C35.setForegroundBrush(C37);C35.setBorderBottom(1);C35.setBorderBrush(C36);C35.setBorderLeft(1);C35.setBorderRight(1);C35.setBorderTop(1);C35.setFontSize(250);
C35.setFontUnits("PERCENT");C35.iC();C36.setColor("THEMEBORDER");C36.iC();C37.setColor("THEMEBORDER");C37.iC();C38.setColor("THEMEDISABLED");C38.iC();C39.setPressedStyle(C45);C39.setStyle(C56);C39.iC();C40.setBackgroundBrush(C41);C40.iC();C41.setColor("THEME200");C41.iC();C42.setBackgroundBrush(C43);C42.setBorderBrush(C44);C42.iC();C43.setColor("THEME200");C43.iC();C44.setColor("THEME300");C44.iC();C45.setBackgroundBrush(C46);C45.setFontSize(95);C45.setFontUnits("PERCENT");C45.iC();C46.setColor("THEME300");
C46.iC();C47.setBackgroundBrush(C50);C47.setBorderBrush(C51);C47.setCornerBottomLeft(99);C47.setCornerBottomRight(99);C47.setCornerTopLeft(99);C47.setCornerTopRight(99);C47.setBorderBottom(1);C47.setBorderLeft(1);C47.setBorderRight(1);C47.setBorderTop(1);C47.setFontSize(250);C47.setFontUnits("PERCENT");C47.setForegroundBrush(C49);C47.setBold(false);C47.iC();C48.setColor("THEME900");C48.iC();C49.setColor("WHITE");C49.iC();C50.setColor("0:0:0");C50.setOpacity(15);C50.iC();C51.setColor("WHITE");C51.setOpacity(65);
C51.iC();C52.setBackgroundBrush(C53);C52.setBorderBrush(C54);C52.setCornerBottomLeft(99);C52.setCornerBottomRight(99);C52.setCornerTopLeft(99);C52.setCornerTopRight(99);C52.setBorderBottom(1);C52.setBorderLeft(1);C52.setBorderRight(1);C52.setBorderTop(1);C52.setForegroundBrush(C55);C52.setFontSize(250);C52.setFontUnits("PERCENT");C52.setBold(true);C52.iC();C53.setColor("THEMELINE");C53.iC();C54.setColor("0:0:0");C54.iC();C55.setColor("WHITE");C55.iC();C56.setFontSize(95);C56.setFontUnits("PERCENT");
C56.iC();C57.setMouseOverStyle(C58);C57.iC();C58.setBackgroundBrush(C59);C58.iC();C59.setColor("THEME200");C59.iC();C60.setStyle(C61);C60.iC();C61.setForegroundBrush(C62);C61.setFontSize(180);C61.setFontUnits("PERCENT");C61.iC();C62.setColor("WHITE");C62.iC();C63.setStyle(C64);C63.iC();C64.setForegroundBrush(C65);C64.setFontSize(160);C64.setFontUnits("PERCENT");C64.iC();C65.setColor("THEME900");C65.iC();C66.setStyle(C67);C66.iC();C67.setForegroundBrush(C68);C67.setFontSize(140);C67.setFontUnits("PERCENT");
C67.iC();C68.setColor("THEME900");C68.iC();C69.setStyle(C70);C69.iC();C70.setForegroundBrush(C71);C70.setFontSize(120);C70.setFontUnits("PERCENT");C70.iC();C71.setColor("THEME900");C71.iC();C72.setStyle(C73);C72.iC();C73.setBackgroundBrush(C74);C73.setForegroundBrush(C75);C73.iC();C74.setColor("THEME300");C74.iC();C75.setColor("THEME700");C75.iC();C76.setStyle(C77);C76.iC();C77.setForegroundBrush(C79);C77.setBackgroundBrush(C78);C77.iC();C78.setColor("THEME500");C78.iC();C79.setColor("WHITE");C79.iC();
C80.setStyle(C81);C80.iC();C81.setBackgroundBrush(C83);C81.setForegroundBrush(C82);C81.iC();C82.setColor("WHITE");C82.iC();C83.setColor("THEME700");C83.iC();C84.setStyle(C85);C84.iC();C85.setFontSize(160);C85.setFontUnits("PERCENT");C85.setForegroundBrush(C86);C85.iC();C86.setColor("WHITE");C86.iC();C87.setStyle(C88);C87.iC();C88.setFontSize(140);C88.setFontUnits("PERCENT");C88.setForegroundBrush(C89);C88.iC();C89.setColor("WHITE");C89.iC();C90.setStyle(C91);C90.iC();C91.setForegroundBrush(C93);C91.setUnderline(false);
C91.setFontSize(120);C91.setFontUnits("PERCENT");C91.setBorderBottom(0);C91.setBorderBrush(C92);C91.setBorderLeft(0);C91.setBorderRight(0);C91.setBorderTop(0);C91.setBold(false);C91.iC();C92.setColor("THEME900");C92.iC();C93.setColor("THEME900");C93.iC();C94.setPressedStyle(C95);C94.setStyle(C98);C94.iC();C95.setFontSize(150);C95.setFontUnits("PERCENT");C95.setBackgroundBrush(C97);C95.setForegroundBrush(C96);C95.setCornerBottomLeft(4);C95.setCornerBottomRight(4);C95.setCornerTopLeft(4);C95.setCornerTopRight(4);
C95.iC();C96.setColor("WHITE");C96.iC();C97.setColor("THEME900");C97.setOpacity(20);C97.iC();C98.setFontSize(150);C98.setFontUnits("PERCENT");C98.setCornerBottomLeft(4);C98.setCornerBottomRight(4);C98.setCornerTopLeft(4);C98.setCornerTopRight(4);C98.iC();C99.setStyle(C100);C99.setMouseOverStyle(C100);C99.setFocusedStyle(C100);C99.setPressedStyle(C100);C99.iC();C100.setBackgroundBrush(C103);C100.setCornerBottomLeft(2);C100.setCornerBottomRight(2);C100.setCornerTopLeft(2);C100.setCornerTopRight(2);
C100.setBorderBottom(1);C100.setBorderLeft(1);C100.setBorderRight(1);C100.setBorderTop(1);C100.setBorderBrush(C102);C100.setForegroundBrush(C101);C100.iC();C101.setColor("THEMEBORDER");C101.iC();C102.setColor("THEMEBORDER");C102.iC();C103.setColor("THEMEDISABLED");C103.iC();this.setBaseTheme("2015BLUE");this.setStyle(C0);}});},{rp:["PRIM_THM","PRIM_VS.Style","PRIM_THM.DrawStyle","PRIM_VS.SolidBrush","PRIM_VS.DropShadow"]});