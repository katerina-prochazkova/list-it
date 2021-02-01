<xsl:stylesheet
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:fo="http://www.w3.org/1999/XSL/Format"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns:x="http://www.jirsak.org/2020/XSLT-service"
        version="3.0">
    <xsl:output encoding="UTF-8" method="xml" media-type="application/pdf" x:file-name="seznam.pdf"/>
    <xsl:template match="/">
        <fo:root>
            <fo:layout-master-set>
                <fo:simple-page-master master-name="page"
                                       page-height="297mm"
                                       page-width="210mm"
                                       margin="10mm">
                    <fo:region-body column-count="2"/>
                </fo:simple-page-master>
            </fo:layout-master-set>
            <fo:page-sequence master-reference="page" font-family="Jost" font-size="11pt" font-weight="500">
                <fo:flow flow-name="xsl-region-body">
                    <xsl:apply-templates select="/json/nazev"/>
                    <xsl:apply-templates select="/json/kategorie"/>
                </fo:flow>
            </fo:page-sequence>
        </fo:root>
    </xsl:template>
    <xsl:template match="/json/nazev">
        <fo:block font-weight="bold" font-size="12pt" margin-bottom="3mm">List it!</fo:block>
        <fo:block color="grey" text-align="center" margin-bottom="5mm" font-size="18pt" border-width="1mm" border-style="solid" border-color="grey"
                  padding="2mm" span="all">
            <xsl:value-of select="."/>
        </fo:block>
    </xsl:template>
    <xsl:template match="/json/kategorie">
        <xsl:if test="exists(polozky)">
            <xsl:apply-templates select="nazev"/>
            <fo:list-block>
                <xsl:apply-templates select="polozky[not(koupeno = 'true')]"/>
                <xsl:apply-templates select="polozky[koupeno = 'true']"/>
            </fo:list-block>
        </xsl:if>
    </xsl:template>
    <xsl:template match="/json/kategorie/nazev">
        <fo:block text-align="left" font-size="14pt" font-weight="bold" margin-top="3mm" margin-bottom="1mm" keep-with-next="always">
            <xsl:value-of select="upper-case(.)"/>
        </fo:block>
    </xsl:template>
    <xsl:template match="/json/kategorie/polozky[not(koupeno = 'true')]">
        <fo:list-item margin-bottom="1mm">
            <fo:list-item-label>
                <fo:block>
                    <fo:instream-foreign-object>
                        <svg:svg viewBox="0 0 448 512" width="16" height="16">
                            <svg:path fill="grey"
                                      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></svg:path>
                        </svg:svg>
                    </fo:instream-foreign-object>
                </fo:block>
            </fo:list-item-label>
            <xsl:next-match/>
        </fo:list-item>
    </xsl:template>
    <xsl:template match="/json/kategorie/polozky[koupeno='true']">
        <fo:list-item margin-bottom="1mm">
            <fo:list-item-label>
                <fo:block>
                    <fo:instream-foreign-object>
                        <svg:svg viewBox="0 0 448 512" width="16" height="16">
                            <svg:path fill="grey"
                                      d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></svg:path>
                        </svg:svg>
                    </fo:instream-foreign-object>
                </fo:block>
            </fo:list-item-label>
            <xsl:next-match/>
        </fo:list-item>
    </xsl:template>
    <xsl:template match="/json/kategorie/polozky" priority="-1">
        <fo:list-item-body start-indent="6.5mm">
            <fo:block text-align="start" margin-top="1.2mm">
                <xsl:if test="exists(mnozstvi)">
                    <xsl:attribute name="text-align-last">justify</xsl:attribute>
                </xsl:if>
                <xsl:value-of select="nazev"/>
                <xsl:if test="exists(mnozstvi) and not(mnozstvi = '')">
                    <fo:leader leader-pattern="dots" leader-alignment="reference-area"/>
                    <xsl:value-of select="mnozstvi"/>
                </xsl:if>
            </fo:block>
        </fo:list-item-body>
    </xsl:template>
</xsl:stylesheet>
