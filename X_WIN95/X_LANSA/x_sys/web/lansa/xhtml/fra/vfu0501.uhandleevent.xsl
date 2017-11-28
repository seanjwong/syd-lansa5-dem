<?xml version="1.0" encoding="UTF-8"?><!--Web application : VFU0501 Default WAM filter--><!--Web routine : UHandleEvent--><!--Timestamp : 2005-01-31T11:46:55+10:00--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design"><xsl:import href="std_keys.xsl"></xsl:import><xsl:import href="vlf_layout.xsl"></xsl:import><xsl:import href="ub_pushb1.xsl"></xsl:import><xsl:import href="ub_pushb2.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="no"></xsl:output><xsl:template match="/"><xsl:comment> Web application : VFU0501             Default WAM filter</xsl:comment><xsl:comment> Web routine     : UHandleEvent</xsl:comment><xsl:call-template name="layout"></xsl:call-template></xsl:template><xsl:template match="/lxml:data"><div class="hidden"><xsl:comment></xsl:comment><xsl:comment /></div><script>
      var VF_UseBackGroundColor = "<xsl:value-of select="key('field-value', 'BACKCOLOR')"></xsl:value-of>";
      </script><table data-style="margin-top: 5px; width: 100%; height: 100%;"><tbody><tr><td valign="top"><iframe data-style="height:100%; width:100%;" src="{key('field-value', 'SRCRADPAD')}" frameborder="no"><xsl:comment></xsl:comment><xsl:text> </xsl:text></iframe></td></tr><tr><td data-style="height: 28px;" valign="middle"><xsl:call-template name="ub_pushb1"></xsl:call-template><xsl:call-template name="ub_pushb2"></xsl:call-template><xsl:comment></xsl:comment><xsl:comment /></td></tr></tbody></table></xsl:template></xsl:transform>