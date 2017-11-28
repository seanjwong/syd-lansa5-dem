<?xml version="1.0" encoding="UTF-8"?><!--(c) 2012, 2014 LANSA--><!--jqMobile Standard Messages--><!--$Workfile:: std_messages.xsl $--><!--$UTCDate:: 2014-04-08 05:55:09Z $--><!--$Revision:: 10 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_types.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:template name="messages"><xsl:param name="hideIf" select="false()"></xsl:param><xsl:param name="swatch" select="'e'"></xsl:param><xsl:choose><xsl:when test="not($hideIf)"><xsl:if test="/lxml:data/lxml:messages/lxml:message"><ul><xsl:attribute name="class"><xsl:text>lstd_messages ui-bar</xsl:text><xsl:if test="$swatch != ''"> ui-bar-<xsl:value-of select="$swatch"></xsl:value-of></xsl:if></xsl:attribute><xsl:for-each select="/lxml:data/lxml:messages/lxml:message"><li><xsl:value-of select="."></xsl:value-of></li></xsl:for-each><xsl:comment /></ul></xsl:if></xsl:when></xsl:choose></xsl:template></xsl:transform>