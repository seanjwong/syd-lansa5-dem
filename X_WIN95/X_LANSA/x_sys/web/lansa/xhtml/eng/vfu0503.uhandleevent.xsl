<?xml version="1.0" encoding="UTF-8"?><!--Web application : VFU0503 WAM Shipped Filter Default - Complex--><!--Web routine : UHandleEvent--><!--Timestamp : 2005-01-31T19:26:45+10:00--><xsl:transform version="1.0" exclude-result-prefixes="lxml" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:import href="std_keys.xsl"></xsl:import><xsl:import href="vlf_layout.xsl"></xsl:import><xsl:import href="ub_pushb1.xsl"></xsl:import><xsl:import href="ub_pushb2.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="no"></xsl:output><xsl:template match="/"><xsl:comment> Web application : VFU0503             WAM Shipped Filter Default - Complex</xsl:comment><xsl:comment> Web routine     : UHandleEvent</xsl:comment><xsl:call-template name="layout"></xsl:call-template></xsl:template><xsl:template match="/lxml:data"><div class="hidden"><xsl:comment></xsl:comment><xsl:comment /></div><span data-style="margin-left:5px; margin-top:4px; font:menu"><xsl:value-of select="key('field-value', 'FUNTITLE')"></xsl:value-of><xsl:comment></xsl:comment><xsl:comment /></span><table><tbody><tr><td valign="top"><table><tbody><tr><td><select size="1" name="mock_select"><option value="1" checked="checked">CCCCCCCCCCCCCCC</option><option value="2">BBBBBBBBBBBBBBB</option><option value="3">AAAAAAAAAAAAAAA</option></select></td></tr><tr><td><input checked="-1" type="checkbox" value="on" />Accusam enim at </td></tr><tr><td><select size="2" name="mock_select"><option value="1">9999999999</option><option value="2">8888</option><option value="2">7777</option></select></td></tr><tr><td><input value="Iriure Dignissim" /></td></tr></tbody></table></td><td valign="top"><div data-style="background:window; padding:3px; border:2px inset; height: 110px; width: 140px; overflow-y:scroll"><div><img data-style="padding-left:1px;" src="{/lxml:data/lxml:context/lxml:images-path}/vf_ic3019.gif" /><span data-style="padding-left:3px;">In molestie dolore</span></div><div><img src="{/lxml:data/lxml:context/lxml:images-path}/vf_ic3029.gif" /><span data-style="padding-left:3px;">Luptatum commodo</span></div><div><span data-style="padding-left:13px;">Accussam hendreri</span></div><div><span data-style="padding-left:13px;">Sit exerci vel et</span></div><div><span data-style="padding-left:13px;">Volputate velit</span></div><div><img data-style="padding-left:1px;" src="{/lxml:data/lxml:context/lxml:images-path}/vf_ic3019.gif" /><span data-style="padding-left:3px;">Te eusimod vel</span></div><div><img src="{/lxml:data/lxml:context/lxml:images-path}/vf_ic3029.gif" /><span data-style="padding-left:3px;">Alea jacta est</span></div><div><span data-style="padding-left:13px;">Veni vidi vinci</span></div></div></td></tr></tbody></table><xsl:call-template name="ub_pushb1"></xsl:call-template><xsl:call-template name="ub_pushb2"></xsl:call-template><br /></xsl:template></xsl:transform>