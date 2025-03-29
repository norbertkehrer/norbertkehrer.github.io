const documents =
  [
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a2210303.pdf",
      "Title": "ID6TUMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA22-1030-03",
      "FirstPage": "S/390 Parallel Enterprise Server - Generation 6IBM System Overview  Level 03a, February 8, 2001 GA22-1030-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a2278324.pdf",
      "Title": "Principles of Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7832-04",
      "FirstPage": "z/Architecture\u0001\u0002\u0003\u00AEPrinciples of OperationSA22-7832-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a2278325.pdf",
      "Title": "IBM z/Architecture Principles of Operation",
      "Author": "IBM Corporation",
      "Subject": "This publication provides, for reference purposes, a detailed description of z/Architecture.\u2122",
      "DocumentNumber": "SA22-7832-05",
      "FirstPage": "z/Architecture\u0002\u0003\u0004\u00AEPrinciples of OperationSA22-7832-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a2278712.pdf",
      "Title": "IBM z/Architecture Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7871-02",
      "FirstPage": "SA22-7871-02z/ArchitectureIBMrReference Summary"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a2314520.pdf",
      "Title": "GPFS: Administration and Programming Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1452-00",
      "FirstPage": "GeneralParallelFileSystemVersion4Release1AdministrationandProgrammingReferenceSA23-1452-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a2322320.pdf",
      "Title": "Preliminary Decimal-Floating-Point Architecture",
      "Author": "Lundvall",
      "Subject": "Preliminary Decimal-Floating-Point Architecture",
      "DocumentNumber": "SA23-2232-00",
      "FirstPage": "SA23-2232-00z/Architecture\u0002\u0003\u0004\u00AEPreliminary Decimal-Floating-Point ArchitectureNovember, 2006"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a2322738.pdf",
      "Title": "IBM PE for Linux: PAMI Prog. Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2273-08",
      "FirstPage": "ParallelEnvironmentRuntimeEditionforLinuxVersion1Release3PAMIProgrammingGuideSA23-2273-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a7604060.pdf",
      "Title": "Installation Procedure [Word Pro - A7604060.lwp]",
      "Author": "jacarson",
      "Subject": "",
      "DocumentNumber": "GA76-0406-00",
      "FirstPage": "Installation ProcedureStep 1. Plan for Installation1.First-level Installation requirements: - Exclusive access to  your "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a7604061.pdf",
      "Title": "z/VM V5R3.0 Summary for Automated Installation and Service (DVD Installation)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA76-0406-00",
      "FirstPage": "\u00A9 Copyright International Business Machines Corporation 1991, 2007.  All rights reserved. This edition replaces GA76-040"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a7604062.pdf",
      "Title": "z/VM V5R4.0 Summary for Automated Installation and Service (DVD Installation)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA76-0406-01",
      "FirstPage": "\u00A9 Copyright International Business Machines Corporation 1991, 2008.  All rights reserved. This edition replaces GA76-040"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a7604070.pdf",
      "Title": "Installation Procedure [Word Pro - A7604070.lwp]",
      "Author": "jacarson",
      "Subject": "",
      "DocumentNumber": "GA76-0407-00",
      "FirstPage": "Installation ProcedureStep 1. Plan for Installation1.Second-level installation- The installation userid on  your first-l"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a7604072.pdf",
      "Title": "z/VM V5R4.0 Summary for Automated Installation and Service (Tape Installation)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA76-0407-01",
      "FirstPage": "Installation Procedure Important: This document contains summarized steps for installing and servicing version 5 release"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ab0in022.pdf",
      "Title": "Installing, Managing, and Using the Online Library",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC31-8311-47",
      "FirstPage": "IBMOnlineLibraryInstalling,Managing,andUsingtheOnlineLibraryGC31-8311-47\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/adma1a03.pdf",
      "Title": "ADMA1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0867-01",
      "FirstPage": " GDDM IBM Base Application Programming Guide Version 3 Release 2    SC33-0867-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admb1a03.pdf",
      "Title": "ADMB1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0868-01",
      "FirstPage": " GDDM IBM Base Application Programming Reference Version 3 Release 2    SC33-0868-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admb1a04.pdf",
      "Title": "IBM GDDM Base Application Programming Reference",
      "Author": "",
      "Subject": "IBM GDDM",
      "DocumentNumber": "SC33-0868-02",
      "FirstPage": " GDDM IBM Base Application Programming Reference Version 3 Release 2    SC33-0868-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admc1a00.pdf",
      "Title": "GDDM-PGF V2R1.3 Interactive Chart Utility",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0328-01",
      "FirstPage": " GDDM-PGFIBM Interactive Chart Utility Version 2 Release 1.3    SC33-0328-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admd1a03.pdf",
      "Title": "GDDM V3R2 Messages",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0869-01",
      "FirstPage": "GDDMIBM MessagesVersion 3 Release 2    SC33-0869-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admd2a03.pdf",
      "Title": "GDDM V3R2 Diagnosis",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0870-01",
      "FirstPage": "GDDM IBM DiagnosisVersion 3 Release 2    SC33-0870-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admg1a04.pdf",
      "Title": "ADMG1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC33-0866-02",
      "FirstPage": "GDDM IBM General InformationVersion 3 Release 2    GC33-0866-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admg1a05.pdf",
      "Title": "IBM GDDM General Information",
      "Author": "",
      "Subject": "IBM GDDM",
      "DocumentNumber": "GC33-0866-03",
      "FirstPage": "GDDM IBM General InformationVersion 3 Release 2    GC33-0866-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admk1a00.pdf",
      "Title": "ADMK1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0334-00",
      "FirstPage": "IBM GDDM-GKS Programming Guide and Reference    SC33-0334-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admp1a02.pdf",
      "Title": "ADMP1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0333-01",
      "FirstPage": "GDDM-PGF IBM Programming Reference Version 2 Release 1.3    SC33-0333-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admp3a00.pdf",
      "Title": "GDDM-PGF V2R1.3 Vector Symbol Editor",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0330-01",
      "FirstPage": " GDDM-PGFIBM Vector Symbol EditorVersion 2 Release 1.3    SC33-0330-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admp4a01.pdf",
      "Title": "ADMP4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0913-01",
      "FirstPage": " GDDM-PGFIBM Application Programming GuideVersion 2 Release 1.3    SC33-0913-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/adms4a00.pdf",
      "Title": "ADMS4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC33-1801-01",
      "FirstPage": "GDDMIBM GDDM/MVS Program DirectoryVersion 3 Release 2    GC33-1801-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/adms7a04.pdf",
      "Title": "ADMS7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0871-01",
      "FirstPage": " GDDM IBM System Customization and Administration Version 3 Release 2    SC33-0871-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/adms7a05.pdf",
      "Title": "IBM GDDM System Customization and Administration",
      "Author": "",
      "Subject": "IBM GDDM",
      "DocumentNumber": "SC33-0871-02",
      "FirstPage": " GDDM IBM System Customization and Administration Version 3 Release 2    SC33-0871-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admu1a03.pdf",
      "Title": "ADMU1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0875-01",
      "FirstPage": "GDDMIBM User's Guide Version 3 Release 2    SC33-0875-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admu3a03.pdf",
      "Title": "ADMU3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0920-01",
      "FirstPage": "GDDM IBM Using the Image Symbol EditorVersion 3 Release 2    SC33-0920-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admu4a00.pdf",
      "Title": "GDDM-PGF V2R1.3 OPS User\u0027s Guide\t",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-1776-00",
      "FirstPage": " GDDM-PGFIBM OPSUser\u2019s GuideVersion 2 Release 1.3    SC33-1776-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admv0a02.pdf",
      "Title": "ADMV0MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0479-02",
      "FirstPage": "GDDM-IVUIBM Image View Utility Version 1 Release 1.3    SC33-0479-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aio3l000.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GI11-9493-00",
      "FirstPage": "Licensed Program Specifications InfoprintXT Version 3 Release 1.0 for z/OS, Program Number 5655-O15"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aio3u001.pdf",
      "Title": "IBM Infoprint XT V3R1 for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GI11-9492-01",
      "FirstPage": "z/OSInfoprintXTforz/OSVersion3,Release1.0GI11-9492-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ajva1110.pdf",
      "Title": "AJVA1110",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9828-00",
      "FirstPage": "IBM Program Directory for IBM 31-bit SDK for z/OS, Java Technology Edition V7.0.0 Program Number5655-W43FMIDs HVJA700"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ajva1111.pdf",
      "Title": "AJVA1111",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9828-01",
      "FirstPage": "IBM Program Directory for IBM 31-bit SDK for z/OS, Java Technology Edition V7.R1.M0 Program Number5655-W43FMIDs HJVA710"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ajvb1110.pdf",
      "Title": "AJVB1110",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9829-00",
      "FirstPage": " IBM Program Directory for IBM 64-bit SDK for z/OS, Java Technology Edition V7.0.0 Program Number5655-W44FMIDs HVJB700"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ajvb1111.pdf",
      "Title": "AJVB1111",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9829-01",
      "FirstPage": "IBM Program Directory for IBM 64-bit SDK for z/OS, Java Technology Edition V7.R1.M0 Program Number5655-W44FMIDs HJVB710"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ajvc0110.pdf",
      "Title": "Installation and User\u0027s Guide: Installation and User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0696-00",
      "FirstPage": "JZOSBatchLauncherandToolkitfunctioninIBMJavaSE7SDKsforz/OSInstallationandUser\u0027sGuideSA38-0696-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ant3r101.pdf",
      "Title": "z/OS V2R1.0 DFSMS Advanced Copy Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6847-01",
      "FirstPage": "z/OSDFSMSAdvancedCopyServicesVersion2Release1SC23-6847-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/antgar20.pdf",
      "Title": "OS/390 V2R10.0 DFSMS Advanced Copy Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC35-0395-00",
      "FirstPage": "OS/390DFSMSAdvancedCopyServicesRelease10SC35-0395-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/antgr190.pdf",
      "Title": "z/OS V1R13.0 DFSMS Advanced Copy Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC35-0428-19",
      "FirstPage": "z/OSDFSMSAdvancedCopyServicesSC35-0428-19\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aokfa100.pdf",
      "Title": " IBM Print Transforms from AFP for Infoprint Server for z/OS V1.1",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "IBMPrintTransformsfromAFPforInfoprintServerforz/OSVersion1.1G325-2634-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aokfa102.pdf",
      "Title": " IBM Print Transforms from AFP for Infoprint Server for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "PrintTransformsfromAFPforInfoprintServerforz/OSVersion1Release1G325-2634-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aokla100.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "LicensedProgramSpecifications\u0002\u0003\u0004IBMPrintTransformfromAFPtoPCLforInfoprintServerforz/OSVersion1Release1,ProgramNumber5655"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aoklb100.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "LicensedProgramSpecifications\u0002\u0003\u0004IBMPrintTransformfromAFPtoPDFforInfoprintServerforz/OSVersion1Release1,ProgramNumber5655"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aoklc100.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "LicensedProgramSpecifications\u0002\u0003\u0004IBMPrintTransformfromAFPtoPostScriptforInfoprintServerforz/OSVersion1Release1,ProgramNum"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1c000.pdf",
      "Title": "z/OS V2R1.0 Infoprint Server Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0691-00",
      "FirstPage": "z/OSInfoprintServerCustomizationSA38-0691-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1i000.pdf",
      "Title": "z/OS V2R1.0 Infoprint Server Introduction",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0692-00",
      "FirstPage": "z/OSInfoprintServerIntroductionSA38-0692-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1m000.pdf",
      "Title": "z/OS V2R1.0 Infoprint Server Messages and Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0927-00",
      "FirstPage": "z/OSInfoprintServerMessagesandDiagnosisGA32-0927-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1o000.pdf",
      "Title": "z/OS V2R1.0 Infoprint Server Operation and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0693-00",
      "FirstPage": "z/OSInfoprintServerOperationandAdministrationSA38-0693-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1pi00.pdf",
      "Title": "z/OS V2R1.0 Infoprint Server Printer Inventory for PSF",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0694-00",
      "FirstPage": "z/OSInfoprintServerPrinterInventoryforPSFSA38-0694-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1v000.pdf",
      "Title": "z/OS V2R1.0 Infoprint Server User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0695-00",
      "FirstPage": "z/OSInfoprintServerUser\u0027sGuideSA38-0695-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop2lt20.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "LicensedProgramSpecifications\u0002\u0003\u0004IBMInfoprintTransformstoAFPVersion2Release3forz/OS,ProgramNumber5655-N60IBM\u00AEInfoprintTra"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop2ta20.pdf",
      "Title": "IBM Infoprint Transforms to AFP V2.3 for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "IBMInfoprintTransformstoAFPforz/OSVersion2Release3G550-0443-05\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aopc0220.pdf",
      "Title": "OS/390 V2R10 Infoprint Server Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "OS/390InfoprintServerCustomizationG544-5694-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aopi0220.pdf",
      "Title": "OS/390 V2R10 Infoprint Server Introduction",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "OS/390InfoprintServerIntroductionG544-5696-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aopm0220.pdf",
      "Title": "OS/390 V2R10 Infoprint Server Messages and Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "OS/390InfoprintServerMessagesandDiagnosisG544-5690-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aopo0220.pdf",
      "Title": "OS/390 V2R10 Infoprint Server Operation and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "OS/390InfoprintServerOperationandAdministrationS544-5693-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aopv0220.pdf",
      "Title": "OS/390 V2R10 Infoprint Server User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "OS/390InfoprintServerUser\u2019sGuideS544-5692-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmg1003.pdf",
      "Title": "FN1GIMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC26-4943-03",
      "FirstPage": "High Level Assembler for MVS\uF6DA \u0026 VM \u0026 VSEIBM General InformationRelease 4    GC26-4943-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmg1021.pdf",
      "Title": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSE: General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-4943-06",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEGeneralInformationVersion1Release6GC26-4943-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmi1003.pdf",
      "Title": "FN1ICMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-3494-02",
      "FirstPage": "High Level Assembler for MVS\uF6DA \u0026 VM \u0026 VSEIBM Installation and Customization GuideRelease 4    SC26-3494-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmi1021.pdf",
      "Title": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSE: Installation and Customization Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-3494-05",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEInstallationandCustomizationGuideVersion1Release6SC26-3494-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmp1003.pdf",
      "Title": "FN1PGMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-4941-03",
      "FirstPage": "High Level Assembler for MVS\uF6DA \u0026 VM \u0026 VSEIBM Programmer\u2019s GuideRelease 4    SC26-4941-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmp1021.pdf",
      "Title": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSE: Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-4941-06",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEProgrammer\u0027sGuideVersion1Release6SC26-4941-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmr1003.pdf",
      "Title": "FN1LRMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-4940-03",
      "FirstPage": "High Level Assembler for MVS\uF6DA \u0026 VM \u0026 VSEIBM Language ReferenceRelease 4    SC26-4940-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmr1010.pdf",
      "Title": "High Level Assembler for MVS \u0026 VM \u0026 VSE Language Reference",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-4940-04",
      "FirstPage": " High Level Assembler for MVS \u0026 VM \u0026 VSEIBM Language ReferenceRelease 5    SC26-4940-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmr1020.pdf",
      "Title": "HLASM: V1R6 Language Ref",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-4940-05",
      "FirstPage": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSELanguage Reference Release 6  SC26-4940-05  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmr1021.pdf",
      "Title": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSE: Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-4940-06",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSELanguageReferenceVersion1Release6SC26-4940-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtic06.pdf",
      "Title": "FN2ICMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC26-8711-06",
      "FirstPage": "High Level Assembler for MVS \u0026 VM \u0026 VSEIBM Toolkit Feature Installationand Customization GuideRelease 4    GC26-8711-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtic21.pdf",
      "Title": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSE: Toolkit Feature Installation and Customization Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-8711-06",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEToolkitFeatureInstallationandCustomizationGuideVersion1Release6GC26-8711-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtis02.pdf",
      "Title": "FN1DRMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC26-8712-02",
      "FirstPage": " High Level Assemblerfor MVS\uF6DA \u0026 VM \u0026 VSEIBM Toolkit FeatureInteractive Debug FacilityReference SummaryRelease 3    GC26-"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtis03.pdf",
      "Title": "FN1DRMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC26-8712-03",
      "FirstPage": "High Level Assemblerfor MVS\uF6DA \u0026 VM \u0026 VSEIBM Toolkit FeatureInteractive Debug FacilityReference SummaryRelease 4    GC26-8"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtis21.pdf",
      "Title": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSE: IDF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-8712-06",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEIDFReferenceSummaryVersion1Release6GC26-8712-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtiu04.pdf",
      "Title": "FN1DUMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC26-8709-04",
      "FirstPage": "High Level Assembler for MVS\uF6DA \u0026 VM \u0026 VSEIBM Toolkit FeatureInteractive Debug Facility User\u2019s GuideRelease 4    GC26-8709"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtiu21.pdf",
      "Title": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSE: Toolkit Feature Interactive Debug Facility User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-8709-07",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEToolkitFeatureInteractiveDebugFacilityUser\u0027sGuideVersion1Release6GC26-8709-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtug08.pdf",
      "Title": "FN1UGMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC26-8710-07",
      "FirstPage": "High Level Assembler for MVS\uF6DA \u0026 VM \u0026 VSEIBM Toolkit Feature User\u2019s GuideRelease 4    GC26-8710-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtug21.pdf",
      "Title": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSE: Toolkit Feature User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-8710-10",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEToolkitFeatureUser\u0027sGuideVersion1Release6GC26-8710-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asspre10.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-6696-02",
      "FirstPage": "OS/390UNIXSystemServicesParallelEnvironment:MPIProgrammingandSubroutineReferenceSC33-6696-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asumyb10.pdf",
      "Title": "ASUMYMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5874-00",
      "FirstPage": " OS/390\uF6DAIBM Encina Transactional RPCSupport for IMS    SC24-5874-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/azfic101.pdf",
      "Title": "IBM Multi-Factor Authentication for z/OS Installation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8447-01",
      "FirstPage": "z/OSIBMMulti-FactorAuthenticationforz/OSInstallationandCustomizationVersion1Release1SC27-8447-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/azfug100.pdf",
      "Title": "IBM Multi-Factor Authentication for z/OS User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8448-00",
      "FirstPage": "z/OSIBMMulti-FactorAuthenticationforz/OSUser\u0027sGuideVersion1Release1SC27-8448-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/b107037b.pdf",
      "Title": "IOCP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SB10-7037-11",
      "FirstPage": "SystemzInput/OutputConfigurationProgramUser\u0027sGuideforICPIOCPSB10-7037-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bbncfg71.pdf",
      "Title": "IBM WebSphere Application Server OEM Edition for z/OS Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0631-01",
      "FirstPage": "IBMWebSphereApplicationServerOEMEditionforz/OSConfigurationGuideVersion7.0.xGA32-0631-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bbncfg76.pdf",
      "Title": "IBM WebSphere Application Server OEM Edition for z/OS Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0631-06",
      "FirstPage": "IBMWebSphereApplicationServerOEMEditionforz/OSConfigurationGuideVersion7.0.xGA32-0631-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtcom03.pdf",
      "Title": "BDTA6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1744-02",
      "FirstPage": " OS/390IBM Bulk Data TransferCommands    SC28-1744-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtfil02.pdf",
      "Title": "BDTA5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1743-01",
      "FirstPage": "OS/390IBM Bulk Data Transfer File-to-File Transaction Guide    SC28-1743-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtist05.pdf",
      "Title": "BDTA4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1742-04",
      "FirstPage": "OS/390IBM Bulk Data TransferInstallationVersion 2 Release 6    SC28-1742-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtmac10.pdf",
      "Title": "BDTA7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1745-04",
      "FirstPage": "OS/390IBM Bulk Data TransferMessages and CodesVersion 2 Release 8    SC28-1745-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtovr03.pdf",
      "Title": "BDTA3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1741-01",
      "FirstPage": "OS/390 V2R4.0 BDT OverviewIBM Bulk Data Transfer Overview    GC28-1741"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtza410.pdf",
      "Title": "z/OS BDT Installation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7582-00",
      "FirstPage": "z/OSBulkDataTransferInstallationVersion2Release1SC14-7582-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtza510.pdf",
      "Title": "z/OS BDT File-to-File Transaction Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7583-00",
      "FirstPage": "z/OSBulkDataTransferFile-to-FileTransactionGuideVersion2Release1SC14-7583-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtza620.pdf",
      "Title": "z/OS BDT Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7584-00",
      "FirstPage": "z/OSBulkDataTransferCommandsVersion2Release1SC14-7584-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtza730.pdf",
      "Title": "z/OS BDT Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7585-00",
      "FirstPage": "z/OSBulkDataTransferMessagesandCodesVersion2Release1SC14-7585-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtza810.pdf",
      "Title": "z/OS BDT Diagnosis Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7586-00",
      "FirstPage": "z/OSBulkDataTransferDiagnosisReferenceVersion2Release1SC14-7586-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1b200.pdf",
      "Title": "z/OS V2R1.0 C Curses",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0690-00",
      "FirstPage": "z/OSCCursesVersion2Release1SA38-0690-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1cd01.pdf",
      "Title": "z/OS V2R1.0 UNIX System Services Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2280-01",
      "FirstPage": "z/OSUNIXSystemServicesCommandReferenceVersion2Release1SA23-2280-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1cd10.pdf",
      "Title": "z/OS V2R2 UNIX System Services Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2280-02",
      "FirstPage": "z/OSUNIXSystemServicesCommandReferenceVersion2Release2SA23-2280-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1fr00.pdf",
      "Title": "z/OS V2R1.0 UNIX System Services File System Interface Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2285-00",
      "FirstPage": "z/OSUNIXSystemServicesFileSystemInterfaceReferenceVersion2Release1SA23-2285-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1mc01.pdf",
      "Title": "z/OS V2R1.0 UNIX System Services Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2284-01",
      "FirstPage": "z/OSUNIXSystemServicesMessagesandCodesVersion2Release1SA23-2284-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1pg00.pdf",
      "Title": "z/OS V2R1.0 UNIX System Services Planning",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0884-00",
      "FirstPage": "z/OSUNIXSystemServicesPlanningVersion2Release1GA32-0884-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1pt01.pdf",
      "Title": "z/OS V2R1.0 UNIX System Services Programming Tools",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2282-01",
      "FirstPage": "z/OSUNIXSystemServicesProgrammingToolsVersion2Release1SA23-2282-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1rx00.pdf",
      "Title": "z/OS V2R1.0 Using REXX and z/OS UNIX System Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2283-00",
      "FirstPage": "z/OSUsingREXXandz/OSUNIXSystemServicesVersion2Release1SA23-2283-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1ug00.pdf",
      "Title": "z/OS V2R1.0 UNIX System Services User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2279-00",
      "FirstPage": "z/OSUNIXSystemServicesUser\u0027sGuideVersion2Release1SA23-2279-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx2cr01.pdf",
      "Title": "z/OS V2R1.0 UNIX System Services Programming: Assembler Callable Services Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2281-01",
      "FirstPage": "z/OSUNIXSystemServicesProgramming:AssemblerCallableServicesReferenceVersion2Release1SA23-2281-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxa4091.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1891-10",
      "FirstPage": "OS/390UNIXSystemServicesUser\u2019sGuideSC28-1891-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxa5091.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1892-11",
      "FirstPage": "OS/390UNIXSystemServicesCommandReferenceSC28-1892-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxa6071.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1904-08",
      "FirstPage": "OS/390UNIXSystemServicesProgrammingToolsSC28-1904-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxa8091.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1908-10",
      "FirstPage": "OS/390UNIXSystemServicesMessagesandCodesSC28-1908-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxb1091.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1899-10",
      "FirstPage": "OS/390UNIXSystemServicesProgramming:AssemblerCallableServicesReferenceSC28-1899-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxb20b1.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1890-11",
      "FirstPage": "OS/390UNIXSystemServicesPlanningSC28-1890-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxb5080.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1909-08",
      "FirstPage": "OS/390UNIXSystemServicesFileSystemInterfaceReferenceSC28-1909-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxb6060.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1905-06",
      "FirstPage": "OS/390UsingREXXandOS/390UNIXSystemServicesSC28-1905-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxbb100.pdf",
      "Title": "z/OS V1R1.0 C Curses",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7820-00",
      "FirstPage": "z/OSCCursesSA22-7820-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxbbm01.pdf",
      "Title": "BPXBBMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1907-01",
      "FirstPage": "OS/390IBM C Curses    SC28-1907-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxza520.pdf",
      "Title": "z/OS V1R3.0 UNIX System Services Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7802-02",
      "FirstPage": "z/OSUNIXSystemServicesCommandReferenceSA22-7802-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxza5b0.pdf",
      "Title": "z/OS V1R12.0 UNIX System Services Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7802-13",
      "FirstPage": "z/OSUNIXSystemServicesCommandReferenceSA22-7802-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxza5c0.pdf",
      "Title": "z/OS V1R12.0 UNIX System Services Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7802-13",
      "FirstPage": "z/OSUNIXSystemServicesCommandReferenceSA22-7802-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxza630.pdf",
      "Title": "z/OS V1R6.0 UNIX System Services Programming Tools",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7805-03",
      "FirstPage": "z/OSUNIX System Services Programming Tools   SA22-7805-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb110.pdf",
      "Title": "z/OS V1R2.0 UNIX System Services Programming: Assembler Callable Services Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7803-01",
      "FirstPage": "z/OSUNIXSystemServicesProgramming:AssemblerCallableServicesReferenceSA22-7803-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb2a0.pdf",
      "Title": "z/OS V1R11.0 UNIX System Services Planning",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7800-16",
      "FirstPage": "z/OSUNIXSystemServicesPlanningGA22-7800-16\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb630.pdf",
      "Title": "z/OS V1R4.0 Using REXX and z/OS UNIX System Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7806-03",
      "FirstPage": "z/OSUsingREXXandz/OSUNIXSystemServicesSA22-7806-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb690.pdf",
      "Title": "z/OS V1R11.0 Using REXX and z/OS UNIX System Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7806-12",
      "FirstPage": "z/OSUsing REXX and z/OS UNIX System Services    SA22-7806-12  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb6b0.pdf",
      "Title": "z/OS V1R13.0 Using REXX and z/OS UNIX System Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7806-14",
      "FirstPage": "z/OSUsingREXXandz/OSUNIXSystemServicesSA22-7806-14\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2370320.pdf",
      "Title": "GPFS: Advanced Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-7032-00",
      "FirstPage": "GeneralParallelFileSystemVersion4Release1AdvancedAdministrationGuideSC23-7032-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2746210.pdf",
      "Title": "Enterprise PL/I for z/OS Licensed Program Specifications",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-4621-00",
      "FirstPage": "Enterprise PL/I for z/OSLicensed Program SpecificationsVersion5 Release1GC27-4621-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2746211.pdf",
      "Title": "Enterprise PL/I for z/OS Licensed Program Specifications",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-4621-01",
      "FirstPage": "Enterprise PL/I for z/OSLicensed Program SpecificationsVersion5 Release2GC27-4621-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2746212.pdf",
      "Title": "Licensed Program Specifications",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-4621-02",
      "FirstPage": "Enterprise PL/I for z/OSVersion 5 Release 3Licensed Program SpecificationsIBMGC27-4621-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2761185.pdf",
      "Title": "IBM Wave for z/VM V1.1 Administration and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6118-05",
      "FirstPage": "IBMWaveIBMWaveforz/VM:AdministrationandCustomizationVersion1Release1SC27-6118-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2761186.pdf",
      "Title": "IBM Wave for z/VM V1.2 Administration and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6118-06",
      "FirstPage": "IBMWaveIBMWaveforz/VM:AdministrationandCustomizationVersion1Release2SC27-6118-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2761193.pdf",
      "Title": "IBM Wave for z/VM V1.1 User Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6119-03",
      "FirstPage": "IBMWaveIBMWaveforz/VM:UserGuideandReferenceVersion1Release1SC27-6119-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2761195.pdf",
      "Title": "IBM Wave for z/VM V1.1 User Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6119-05",
      "FirstPage": "IBMWaveIBMWaveforz/VM:UserGuideandReferenceVersion1Release1SC27-6119-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2761196.pdf",
      "Title": "IBM Wave for z/VM V1.2 User Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6119-06",
      "FirstPage": "IBMWaveIBMWaveforz/VM:UserGuideandReferenceVersion1Release2SC27-6119-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2789300.pdf",
      "Title": "Enterprise PL/I for z/OS V5.1 Compiler and Runtime Migration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-8930-00",
      "FirstPage": "Enterprise PL/I for z/OSCompiler and Run-Time Migration GuideVersion5 Release1GC27-8930-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2789301.pdf",
      "Title": "Enterprise PL/I for z/OS V5.2 Compiler and Runtime Migration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-8930-01",
      "FirstPage": "Enterprise PL/I for z/OSCompiler and Run-Time Migration GuideVersion 5 Release 2 Modification 4GC27-8930-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2789302.pdf",
      "Title": "Compiler and Run-Time Migration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-8930-02",
      "FirstPage": "Enterprise PL/I for z/OSVersion 5 Release 3Compiler and Run-Time Migration GuideIBMGC27-8930-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2789400.pdf",
      "Title": "Enterprise PL/I for z/OS Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8940-00",
      "FirstPage": "Enterprise PL/I for z/OSPL/I for AIXEnterprise PL/I for z/OSLanguage ReferenceVersion5 Release1SC27-8940-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2789401.pdf",
      "Title": "Enterprise PL/I for z/OS Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8940-01",
      "FirstPage": "Enterprise PL/I for z/OSPL/I for AIXIBM Developer for z Systems PL/I for windowsLanguage ReferenceVersion 5 Release 2 Mo"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2789500.pdf",
      "Title": "Enterprise PL/I for z/OS Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-8950-00",
      "FirstPage": "Enterprise PL/I for z/OSIBM Rational Developer for z systems PL/I for WindowsMessages and CodesVersion5 Release1GC27-895"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2789501.pdf",
      "Title": "Enterprise PL/I for z/OS Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-8950-01",
      "FirstPage": "Enterprise PL/I for z/OSIBM Developer for z Systems PL/I for WindowsMessages and CodesVersion 5 Release 2 Modification 4"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c3168055.pdf",
      "Title": "HA3Z5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-6805-05",
      "FirstPage": "Data Stream and Object Architectures\u0001\u0002\u0003 Image Object Content ArchitectureReference    SC31-6805-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334170.pdf",
      "Title": "Enterprise PL/I for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC43-3417-00",
      "FirstPage": "EnterprisePL/Iforz/OSPL/IforAIXRationalDeveloperforSystemzPL/IforWindows\u8A00\u8A9E\u89E3\u8AAC\u66F8\u30D0\u30FC\u30B8\u30E7\u30F35\u30EA\u30EA\u30FC\u30B91SC43-3417-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334171.pdf",
      "Title": "Enterprise PL/I for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC43-3417-01",
      "FirstPage": "EnterprisePL/Iforz/OSPL/IforAIXIBMDeveloperforzSystemsPL/IforWindows\u8A00\u8A9E\u89E3\u8AAC\u66F8\u30D0\u30FC\u30B8\u30E7\u30F35\u30EA\u30EA\u30FC\u30B92SC43-3417-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334172.pdf",
      "Title": "\u8A00\u8A9E\u89E3\u8AAC\u66F8",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC43-3417-02",
      "FirstPage": "Enterprise PL/I for z/OS\u30D0\u30FC\u30B8\u30E7\u30F3 5 \u30EA\u30EA\u30FC\u30B9 3\u8A00\u8A9E\u89E3\u8AAC\u66F8IBMSC43-3417-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334180.pdf",
      "Title": "Enterprise PL/I for z/OS bZWRh",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC43-3418-00",
      "FirstPage": "EnterprisePL/Iforz/OSRationalDeveloperforSystemzPL/IforWindows\u30E1\u30C3\u30BB\u30FC\u30B8\u304A\u3088\u3073\u30B3\u30FC\u30C9\u30D0\u30FC\u30B8\u30E7\u30F35\u30EA\u30EA\u30FC\u30B91GC43-3418-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334181.pdf",
      "Title": "Enterprise PL/I for z/OS bZWRh",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC43-3418-01",
      "FirstPage": "EnterprisePL/Iforz/OSIBMDeveloperforzSystemsPL/IforWindows\u30E1\u30C3\u30BB\u30FC\u30B8\u304A\u3088\u3073\u30B3\u30FC\u30C9\u30D0\u30FC\u30B8\u30E7\u30F35\u30EA\u30EA\u30FC\u30B92GC43-3418-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334182.pdf",
      "Title": "\u30E1\u30C3\u30BB\u30FC\u30B8\u304A\u3088\u3073\u30B3\u30FC\u30C9",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC43-3418-02",
      "FirstPage": "Enterprise PL/I for z/OSIBM Developer for z/OS PL/I for Windows\u30D0\u30FC\u30B8\u30E7\u30F3 5 \u30EA\u30EA\u30FC\u30B9 3\u30E1\u30C3\u30BB\u30FC\u30B8\u304A\u3088\u3073\u30B3\u30FC\u30C9IBMGC43-3418-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334190.pdf",
      "Title": "Enterprise PL/I for z/OS vOOEKCh",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC43-3419-00",
      "FirstPage": "EnterprisePL/Iforz/OS\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30FB\u30AC\u30A4\u30C9\u30D0\u30FC\u30B8\u30E7\u30F35\u30EA\u30EA\u30FC\u30B91GC43-3419-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334191.pdf",
      "Title": "Enterprise PL/I for z/OS vOOEKCh",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC43-3419-01",
      "FirstPage": "EnterprisePL/Iforz/OS\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30FB\u30AC\u30A4\u30C9\u30D0\u30FC\u30B8\u30E7\u30F35\u30EA\u30EA\u30FC\u30B92GC43-3419-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334192.pdf",
      "Title": "\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30FB\u30AC\u30A4\u30C9",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC43-3419-02",
      "FirstPage": "Enterprise PL/I for z/OS\u30D0\u30FC\u30B8\u30E7\u30F3 5 \u30EA\u30EA\u30FC\u30B9 3\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30FB\u30AC\u30A4\u30C9IBMGC43-3419-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334200.pdf",
      "Title": "Enterprise PL/I for z/OS V51 RpCC COVEKCh",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC43-3420-00",
      "FirstPage": "EnterprisePL/Iforz/OS\u30B3\u30F3\u30D1\u30A4\u30E9\u30FC\u304A\u3088\u3073\u30E9\u30F3\u30BF\u30A4\u30E0 \u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u30FB\u30AC\u30A4\u30C9\u30D0\u30FC\u30B8\u30E7\u30F35\u30EA\u30EA\u30FC\u30B91GC43-3420-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334201.pdf",
      "Title": "Enterprise PL/I for z/OS V52 RpCC COVEKCh",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC43-3420-01",
      "FirstPage": "EnterprisePL/Iforz/OS\u30B3\u30F3\u30D1\u30A4\u30E9\u30FC\u304A\u3088\u3073\u30E9\u30F3\u30BF\u30A4\u30E0 \u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u30FB\u30AC\u30A4\u30C9\u30D0\u30FC\u30B8\u30E7\u30F35\u30EA\u30EA\u30FC\u30B92GC43-3420-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c4334202.pdf",
      "Title": "\u30B3\u30F3\u30D1\u30A4\u30E9\u30FC\u304A\u3088\u3073\u30E9\u30F3\u30BF\u30A4\u30E0 \u79FB\u884C\u30AC\u30A4\u30C9",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC43-3420-02",
      "FirstPage": "Enterprise PL/I for z/OS\u30D0\u30FC\u30B8\u30E7\u30F3 5 \u30EA\u30EA\u30FC\u30B9 3\u30B3\u30F3\u30D1\u30A4\u30E9\u30FC\u304A\u3088\u3073\u30E9\u30F3\u30BF\u30A4\u30E0 \u79FB\u884C\u30AC\u30A4\u30C9IBMGC43-3420-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbb1d201.pdf",
      "Title": "z/OS: DWARF/ELF Extensions Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7312-01",
      "FirstPage": "z/OSDWARF/ELFExtensionsLibraryReferenceVersion2Release1SC14-7312-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbb1d210.pdf",
      "Title": "DWARF/ELF Extensions Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7312-02",
      "FirstPage": "z/OSDWARF/ELFExtensionsLibraryReferenceVersion2Release2SC14-7312-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbb1l201.pdf",
      "Title": "z/OS V2R1.0 Common Debug Architecture Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7311-01",
      "FirstPage": "z/OSCommonDebugArchitectureLibraryReferenceVersion2Release1SC14-7311-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbb1l210.pdf",
      "Title": "z/OS V2R2 Common Debug Architecture Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7311-02",
      "FirstPage": "z/OSCommonDebugArchitectureLibraryReferenceVersion2Release2SC14-7311-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbb1u200.pdf",
      "Title": "Common Debug Architecture User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7310-00",
      "FirstPage": "z/OSCommonDebugArchitectureUser\u0027sGuideSC14-7310-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbb1u210.pdf",
      "Title": "z/OS V2R2 Common Debug Architecture User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7310-01",
      "FirstPage": "z/OSCommonDebugArchitectureUser\u0027sGuideVersion2Release2SC14-7310-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1d200.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC14-7305-00",
      "FirstPage": "z/OSXLC/C\u002B\u002BMessagesVersion2Release1GC14-7305-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1d201.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC14-7305-01",
      "FirstPage": "z/OSXLC/C\u002B\u002BMessagesVersion2Release1GC14-7305-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1d210.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC14-7305-02",
      "FirstPage": "z/OSXLC/C\u002B\u002BMessagesVersion2Release2GC14-7305-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1d211.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC14-7305-03",
      "FirstPage": "z/OSXLC/C\u002B\u002BMessagesVersion2Release2GC14-7305-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1l200.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7308-00",
      "FirstPage": "z/OSXLC/C\u002B\u002BLanguageReferenceSC14-7308-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1l201.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7308-01",
      "FirstPage": "z/OSXLC/C\u002B\u002BLanguageReferenceVersion2Release1.1SC14-7308-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1l210.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7308-02",
      "FirstPage": "z/OSXLC/C\u002B\u002BLanguageReferenceVersion2Release2SC14-7308-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1l215.pdf",
      "Title": "z/OS XL C/C\u002B\u002B Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7308-07",
      "FirstPage": "z/OSXLC/C\u002B\u002BLanguageReferenceVersion2Release2SC14-7308-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1m200.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B Compiler and Runtime Migration Guide for the Application Programmer",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC14-7306-00",
      "FirstPage": "z/OSXLC/C\u002B\u002BCompilerandRuntimeMigrationGuidefortheApplicationProgrammerVersion2Release1GC14-7306-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1m201.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B Compiler and Runtime Migration Guide for the Application Programmer",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC14-7306-01",
      "FirstPage": "z/OSXLC/C\u002B\u002BCompilerandRuntimeMigrationGuidefortheApplicationProgrammerVersion2Release1GC14-7306-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1m210.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Compiler and Runtime Migration Guide for the Application Programmer",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC14-7306-02",
      "FirstPage": "z/OSXLC/C\u002B\u002BCompilerandRuntimeMigrationGuidefortheApplicationProgrammerVersion2Release2GC14-7306-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1m211.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Compiler and Runtime Migration Guide for the Application Programmer",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC14-7306-03",
      "FirstPage": "z/OSXLC/C\u002B\u002BCompilerandRuntimeMigrationGuidefortheApplicationProgrammerVersion2Release2GC14-7306-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1p200.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7315-00",
      "FirstPage": "z/OSXLC/C\u002B\u002BProgrammingGuideVersion2Release1SC14-7315-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1p201.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7315-01",
      "FirstPage": "z/OSXLC/C\u002B\u002BProgrammingGuideVersion2Release1SC14-7315-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1p210.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7315-02",
      "FirstPage": "z/OSXLC/C\u002B\u002BProgrammingGuideVersion2Release2SC14-7315-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1p216.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7315-08",
      "FirstPage": "z/OSXLC/C\u002B\u002BProgrammingGuideVersion2Release2SC14-7315-08IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1s200.pdf",
      "Title": "Standard C\u002B\u002B Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7309-00",
      "FirstPage": "z/OSStandardC\u002B\u002BLibraryReferenceVersion2Release1SC14-7309-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1u200.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7307-00",
      "FirstPage": "z/OSXLC/C\u002B\u002BUser\u2019sGuideVersion2Release1SC14-7307-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1u201.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7307-01",
      "FirstPage": "z/OSXLC/C\u002B\u002BUser\u2019sGuideVersion2Release1SC14-7307-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1u210.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7307-02",
      "FirstPage": "z/OSXLC/C\u002B\u002BUser\u2019sGuideVersion2Release2SC14-7307-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1u215.pdf",
      "Title": "z/OS XL C/C\u002B\u002B User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7307-07",
      "FirstPage": "z/OSXLC/C\u002B\u002BUser\u2019sGuideVersion2Release2SC14-7307-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1z200.pdf",
      "Title": "HLB7791",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI13-3013-00",
      "FirstPage": " IBMProgram Directory forXL C/C\u002B\u002B V2R1M1 web deliverable for z/OSProgram Number5650-ZOSFMIDs HLB7791, JLB7792, HTV7791, "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbccr010.pdf",
      "Title": "CLSR390D",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC09-2364-04",
      "FirstPage": " OS/390\u00C9\u00C2\u00D4 C/C\u002B\u002BIBM Open Class Library Reference     SC09-2364-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcdg180.pdf",
      "Title": "z/OS V1R12.0  XL C/C\u002B\u002B Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC09-4819-08",
      "FirstPage": "z/OSXLC/C\u002B\u002BMessagesGC09-4819-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcdg190.pdf",
      "Title": "z/OS V1R13.0  XL C/C\u002B\u002B Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC09-4819-09",
      "FirstPage": "z/OSXLC/C\u002B\u002BMessagesGC09-4819-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcdt031.pdf",
      "Title": "DBT05MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC09-2137-07",
      "FirstPage": "IBM Debug ToolUser\u0027s Guide and ReferenceRelease 2    SC09-2137-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcdt040.pdf",
      "Title": "Debug Tool User\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-2137-08",
      "FirstPage": "DebugToolUser\u2019sGuideandReferenceRelease2SC09-2137-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcit100.pdf",
      "Title": "IBM Open Class Library Transition Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4948-01",
      "FirstPage": "IBMOpenClassLibraryTransitionGuideSC09-4948-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbclr030.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC09-2360-05",
      "FirstPage": "OS/390C/C\u002B\u002BLanguageReferenceSC09-2360-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbclr110.pdf",
      "Title": "C/C\u002B\u002B Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4815-01",
      "FirstPage": "C/C\u002B\u002BLanguageReferenceSC09-4815-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbclr1a0.pdf",
      "Title": "z/OS V1R12.0 XL C/C\u002B\u002B Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4815-10",
      "FirstPage": "z/OSXLC/C\u002B\u002BLanguageReferenceSC09-4815-10\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbclr1b0.pdf",
      "Title": "z/OS V1R13.0 XL C/C\u002B\u002B Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4815-11",
      "FirstPage": "z/OSXLC/C\u002B\u002BLanguageReferenceSC09-4815-11\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcmg030.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC09-2359-05",
      "FirstPage": "OS/390C/C\u002B\u002BCompilerandRun-TimeMigrationGuideSC09-2359-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcmg190.pdf",
      "Title": "z/OS V1R12.0 XL C/C\u002B\u002B Compiler and Run-Time Migration Guide for the Application Programmer",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC09-4913-08",
      "FirstPage": "z/OSXLC/C\u002B\u002BCompilerandRun-TimeMigrationGuidefortheApplicationProgrammerGC09-4913-08\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcmg1b0.pdf",
      "Title": "z/OS V1R13.0 XL C/C\u002B\u002B Compiler and Run-Time Migration Guide for the Application Programmer",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC09-4913-10",
      "FirstPage": "z/OSXLC/C\u002B\u002BCompilerandRun-TimeMigrationGuidefortheApplicationProgrammerGC09-4913-10\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcocu03.pdf",
      "Title": "CLSU370",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC09-2363-03",
      "FirstPage": " OS/390\u00C9\u00C2\u00D4 C/C\u002B\u002BIBM Open Class Library User\u0027s Guide     SC09-2363-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcpg120.pdf",
      "Title": "z/OS V1R3.0 C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4765-02",
      "FirstPage": "z/OSC/C\u002B\u002BProgrammingGuideSC09-4765-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcpg160.pdf",
      "Title": "z/OS V1R7.0 XL C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4765-06",
      "FirstPage": "z/OSXL C/C\u002B\u002BProgramming Guide SC09-4765-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcpg1a0.pdf",
      "Title": "z/OS V1R11.0 XL C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4765-10",
      "FirstPage": "z/OSXL C/C\u002B\u002BProgramming Guide   SC09-4765-10  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcpg1b0.pdf",
      "Title": "z/OS V1R12.0 XL C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4765-11",
      "FirstPage": "z/OSXLC/C\u002B\u002BProgrammingGuideSC09-4765-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcsl130.pdf",
      "Title": "Standard C\u002B\u002B Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4949-04",
      "FirstPage": "z/OSStandardC\u002B\u002BLibraryReferenceSC09-4949-04\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcsl140.pdf",
      "Title": "Standard C\u002B\u002B Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4949-05",
      "FirstPage": "z/OSStandardC\u002B\u002BLibraryReferenceSC09-4949-05\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcug030.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC09-2361-06",
      "FirstPage": "OS/390C/C\u002B\u002BUser\u2019sGuideSC09-2361-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcug110.pdf",
      "Title": "z/OS V1R2.0 C/C\u002B\u002B User\u2122s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4767-01",
      "FirstPage": "z/OSC/C\u002B\u002BUser\u2019sGuideSC09-4767-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcug170.pdf",
      "Title": "z/OS V1R10.0  XL C/C\u002B\u002B User\u2019s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4767-07",
      "FirstPage": "z/OSXL C/C\u002B\u002BUser\u2019s Guide SC09-4767-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcug180.pdf",
      "Title": "z/OS V1R11.0  XL C/C\u002B\u002B User\u62AF Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4767-08",
      "FirstPage": "z/OSXL C/C\u002B\u002BUser\u2019s Guide SC09-4767-08  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcug190.pdf",
      "Title": "z/OS V1R12.0  XL C/C\u002B\u002B User\u62AF Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4767-09",
      "FirstPage": "z/OSXLC/C\u002B\u002BUser\u2019sGuideSC09-4767-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcug1b0.pdf",
      "Title": "z/OS V1R13.0  XL C/C\u002B\u002B User\u62AF Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4767-11",
      "FirstPage": "z/OSXLC/C\u002B\u002BUser\u2019sGuideSC09-4767-11\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbd2me00.pdf",
      "Title": "z/OS V2R1.0 and z/VM V6R2.0 HCD Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2668-00",
      "FirstPage": "z/OSandz/VMHardwareConfigurationDefinitionMessagesSC34-2668-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbd2ug00.pdf",
      "Title": "z/OS V2R1.0 HCD User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2669-00",
      "FirstPage": "z/OSHardwareConfigurationDefinitionUser\u0027sGuideVersion2Release1SC34-2669-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbd2ug01.pdf",
      "Title": "z/OS V2R1.0 HCD User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2669-01",
      "FirstPage": "z/OSHardwareConfigurationDefinitionUser\u0027sGuideVersion2Release1SC34-2669-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbd5m121.pdf",
      "Title": "OS/390 V2R10.0 HCD Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1849-06",
      "FirstPage": "OS/390HardwareConfigurationDefinitionMessagesGC28-1849-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbd5s120.pdf",
      "Title": "OS/390 V2R10.0 HCD Scenarios",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC28-1850-05",
      "FirstPage": "OS/390HardwareConfigurationDefinitionScenariosSC28-1850-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbd5u120.pdf",
      "Title": "OS/390 V2R10.0 HCD User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC28-1848-04",
      "FirstPage": "OS/390HardwareConfigurationDefinitionUser\u2019sGuideSC28-1848-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ccr1u201.pdf",
      "Title": "z/OS V2R1.0 Metal C Programming Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7313-01",
      "FirstPage": "z/OSMetalCProgrammingGuideandReferenceVersion2Release1SC14-7313-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ccr1u210.pdf",
      "Title": "z/OS V2R2 Metal C Programming Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7313-02",
      "FirstPage": "z/OSMetalCProgrammingGuideandReferenceVersion2Release2SC14-7313-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ccrug130.pdf",
      "Title": "z/OS V1R12.0 Metal C Programming Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2225-03",
      "FirstPage": "z/OSMetalCProgrammingGuideandReferenceSA23-2225-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cds2a100.pdf",
      "Title": "z/OS OCSF Application Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7513-00",
      "FirstPage": "z/OSOpenCryptographicServicesFacilityApplicationProgrammingVersion2Release1SC14-7513-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cds2a200.pdf",
      "Title": "z/OS OCSF Module Developer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7514-00",
      "FirstPage": "z/OSOpenCryptographicServicesFacilityServiceProviderModuleDeveloper\u2019sGuideandReferenceVersion2Release1SC14-7514-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cdsdgr31.pdf",
      "Title": "OS/390 [Word Pro - Cdsa1mst.lwp]",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5875-04",
      "FirstPage": "OS/390\u00AE                                                                                                                 "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee11201.pdf",
      "Title": "z/OS V2R1.0 Language Environment Debugging Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0908-01",
      "FirstPage": "z/OSLanguageEnvironmentDebuggingGuideVersion2Release1GA32-0908-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee12201.pdf",
      "Title": "z/OS V2R1.0 Language Environment Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0682-01",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingGuideVersion2Release1SA38-0682-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee13200.pdf",
      "Title": "z/OS Language Environment Programming Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0683-00",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingReferenceVersion2Release1SA38-0683-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee14200.pdf",
      "Title": "z/OS V2R1.0 Language Environment Writing ILC Applications",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0684-00",
      "FirstPage": "z/OSLanguageEnvironmentWritingInterlanguageCommunicationApplicationsVersion2Release1SA38-0684-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee15201.pdf",
      "Title": "z/OS V2R1.0 Language Environment Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0685-01",
      "FirstPage": "z/OSLanguageEnvironmentCustomizationVersion2Release1SA38-0685-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee16200.pdf",
      "Title": "z/OS V2R1.0 Language Environment Runtime Application Migration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0912-00",
      "FirstPage": "z/OSLanguageEnvironmentRuntimeApplicationMigrationGuideVersion2Release1GA32-0912-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee18200.pdf",
      "Title": "z/OS V2R1.0 Language Environment Concepts Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0687-00",
      "FirstPage": "z/OSLanguageEnvironmentConceptsGuideVersion2Release1SA38-0687-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee19202.pdf",
      "Title": "z/OS V2R1.0 Language Environment Runtime Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0686-02",
      "FirstPage": "z/OSLanguageEnvironmentRuntimeMessagesVersion2Release1SA38-0686-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee1m200.pdf",
      "Title": "z/OS V2R1.0 Language Environment Programming Guide for 64-bit Virtual Addressing Mode",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0689-00",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingGuidefor64-bitVirtualAddressingModeVersion2Release1SA38-0689-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee1v202.pdf",
      "Title": "z/OS V2R1.0 Language Environment Vendor Interfaces",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0688-02",
      "FirstPage": "z/OSLanguageEnvironmentVendorInterfacesVersion2Release1SA38-0688-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea2030.pdf",
      "Title": "CEEA2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1939-09",
      "FirstPage": "OS/390IBM Language Environment for OS/390 \u0026 VM Programming Guide    SC28-1939-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea21c0.pdf",
      "Title": "z/OS V1R13.0 Language Environment Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7561-12",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingGuideSA22-7561-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea31c0.pdf",
      "Title": "z/OS V1R13.0 Language Environment Programming Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7562-13",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingReferenceSA22-7562-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea6030.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1944-09",
      "FirstPage": "OS/390LanguageEnvironmentforOS/390\u0026VMRun-TimeMigrationGuideSC28-1944-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceeam110.pdf",
      "Title": "z/OS V1R7.0 Language Environment Programming Guide for 64-bit Virtual Addressing Mode",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7569-01",
      "FirstPage": "z/OSLanguage Environment Programming Guide for 64-bit Virtual Addressing Mode   SA22-7569-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceeam160.pdf",
      "Title": "z/OS V1R13.0 Language Environment Programming Guide for 64-bit Virtual Addressing Mode",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7569-06",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingGuidefor64-bitVirtualAddressingModeSA22-7569-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceev1001.pdf",
      "Title": "CEEV1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1152-09",
      "FirstPage": "OS/390IBM Language Environment for OS/390 \u0026 VM Vendor Interfaces    SY28-1152-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceq2a100.pdf",
      "Title": "z/OS Integrated Security Services Open Cryptographic Enhanced Plug-ins Application Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7568-00",
      "FirstPage": "z/OSIntegratedSecurityServicesOpenCryptographicEnhancedPlug-insApplicationProgrammingVersion2Release1SC14-7568-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cfz2ug00.pdf",
      "Title": "z/OS V2R1 Common Information Model User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2671-00",
      "FirstPage": "z/OSCommonInformationModelUser\u0027sGuideVersion2Release1SC34-2671-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cp9co000.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-7253-00",
      "FirstPage": "OS/390NetworkFileSystemCustomizationandOperationSC26-7253-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cp9ptg00.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-7255-00",
      "FirstPage": "OS/390NetworkFileSystemPerformanceTuningGuideSC26-7255-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cp9ug000.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-7254-00",
      "FirstPage": "OS/390NetworkFileSystemUser\u2019sGuideSC26-7254-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cpn2co00.pdf",
      "Title": "z/OS V2R1.0 Network File System Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6883-00",
      "FirstPage": "z/OSNetworkFileSystemGuideandReferenceVersion2Release1SC23-6883-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cpn2co10.pdf",
      "Title": "z/OS V2R2 Network File System Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6883-01",
      "FirstPage": "z/OSNetworkFileSystemGuideandReferenceVersion2Release2SC23-6883-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cpp2ud30.pdf",
      "Title": "ServerPac: Using the Installation Dialog",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7815-03",
      "FirstPage": "ServerPacUsingtheInstallationDialogDialogLevel:14(March2002)SA22-7815-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csda1101.pdf",
      "Title": "Encryption Facility",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1349-01",
      "FirstPage": "IBM Encryption Facility for z/OSIBM Encryption Facility for z/OS: User\u2019s Guide Version 1 Release 1.0 SA23-1349-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csdd1126.pdf",
      "Title": "IBM Encryption Facility for z/OS: Using Encryption Facility for OpenPGP",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2230-06",
      "FirstPage": "EncryptionFacilityforz/OSUsingEncryptionFacilityforOpenPGPVersion1Release2SA23-2230-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csde1123.pdf",
      "Title": "IBM Encryption Facility for z/OS: Planning and Customizing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2229-03",
      "FirstPage": "EncryptionFacilityforz/OSPlanningandCustomizingVersion1Release2SA23-2229-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csdf1201.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA76-0419-01",
      "FirstPage": "LicensedProgramSpecifications\u0001\u0002\u0003IBMEncryptionFacilityforz/OSV1.2\u2013ProgramNumber5655-P97IBMEncryptionFacilityforz/OS\u00AEisdes"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c200.pdf",
      "Title": "z/OS ICSF System Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7507-00",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilitySystemProgrammer\u0027sGuideVersion2Release1SC14-7507-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c211.pdf",
      "Title": "z/OS ICSF System Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7507-03",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilitySystemProgrammer\u0027sGuideVersion2Release1SC14-7507-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c311.pdf",
      "Title": "z/OS ICSF Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7506-03",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityAdministrator\u0027sGuideVersion2Release1SC14-7506-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c411.pdf",
      "Title": "z/OS ICSF Application Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7508-03",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityApplicationProgrammer\u0027sGuideVersion2Release1SC14-7508-03\u0001"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c511.pdf",
      "Title": "z/OS ICSF Overview",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7505-03",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityOverviewVersion2Release1SC14-7505-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c710.pdf",
      "Title": "z/OS ICSF Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7509-02",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityMessagesVersion2Release1SC14-7509-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2ca10.pdf",
      "Title": "z/OS ICSF Writing PKCS #11 Applications",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7510-01",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityWritingPKCS#11ApplicationsVersion2Release1SC14-7510-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csfb2za2.pdf",
      "Title": "z/OS V1R13 System Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7520-16",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilitySystemProgrammer\u0027sGuideSA22-7520-16\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csfb3za2.pdf",
      "Title": "z/OS V1R13 ICSF Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7521-16",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityAdministrator\u0027sGuideSA22-7521-16\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csfb4za2.pdf",
      "Title": "z/OS V1R13 ICSF Application Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7522-15",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityApplicationProgrammer\u0027sGuideSA22-7522-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csfb5za2.pdf",
      "Title": "z/OS V1R13.0 ICSF Overview",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7519-15",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityOverviewSA22-7519-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csfb7za2.pdf",
      "Title": "z/OS V1R13.0 ICSF Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7523-15",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityMessagesSA22-7523-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csfbaz40.pdf",
      "Title": "z/OS V1R13 ICSF Writing PKCS #11 Applications",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2231-04",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityWritingPKCS#11ApplicationsSA23-2231-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csfspg21.pdf",
      "Title": "OS/390 V2R10.0 ICSF System Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-3974-08",
      "FirstPage": "OS/390IntegratedCryptographicServiceFacilitySystemProgrammer\u2019sGuideSC23-3974-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csftku11.pdf",
      "Title": "OS/390 V2R10.0 ICSF TKE Workstation User\u0027s Guide 2000",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7430-02",
      "FirstPage": "OS/390ICSFTrustedKeyEntryWorkstationUser\u2019sGuide2000GA22-7430-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cunpde00.pdf",
      "Title": "CUNPDE00",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI10-9760-00",
      "FirstPage": "IBMProgram Directory forOS/390 V2 R8/R9/R10 support for UnicodeProgram Number5647-A01FMID HUNI2A0for Use withOS/390 V2 R"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/da8ebi14.pdf",
      "Title": "OS/390: e-business Integration Test (ebIT) Report April 2001 edition",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7461-04",
      "FirstPage": "OS/390e-businessIntegrationTest(ebIT)ReportApril2001editionSA22-7461-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dat3gu00.pdf",
      "Title": "z/OS V2R1.0 DFSMStvs Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC52-1388-00",
      "FirstPage": "z/OSDFSMStvsAdministrationGuideVersion2Release1GC52-1388-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dat3pg00.pdf",
      "Title": "z/OS V2R1.0 DFSMStvs Planning and Operating Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6877-00",
      "FirstPage": "z/OSDFSMStvsPlanningandOperatingGuideVersion2Release1SC23-6877-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/desu6002.pdf",
      "Title": "DB2 Text Extender Administration and Programming",
      "Author": "IBM",
      "Subject": "DB2 for OS/390 V6 RML",
      "DocumentNumber": "SC26-9651-01",
      "FirstPage": "DB2UniversalDatabaseforOS/390TextExtenderAdministrationandProgrammingVersion6SC26-9651-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfhp3p08.pdf",
      "Title": "CICS TS for z/OS: CICS Application Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-5993-08",
      "FirstPage": "CICS\u00AE Transaction Server for z/OS\u2122CICS Application Programming Guide Version 2 Release 2 SC34-5993-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfhwe704.pdf",
      "Title": "CICS TS for VSE/ESA: Enhancements Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC34-5763-04",
      "FirstPage": "CICS\u00AETransactionServerforVSE/ESA\u2122EnhancementsGuideRelease1GC34-5763-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsadbe4.pdf",
      "Title": "Administration Guide: Database Manager",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9419-04",
      "FirstPage": "IMSAdministration Guide: Database Manager Version 7 SC26-9419-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsapce3.pdf",
      "Title": "Application Programming: EXEC DLI Commands for CICS and IMS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9424-03",
      "FirstPage": "IMSApplication Programming: EXEC DLI Commands for CICS and IMS Version 7 SC26-9424-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsapde3.pdf",
      "Title": "Application Programming: Database Manager",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9422-03",
      "FirstPage": "IMSApplication Programming: Database Manager Version 7 SC26-9422-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsapge2.pdf",
      "Title": "Application Programming: Design Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9423-02",
      "FirstPage": "IMSApplication Programming: Design Guide Version 7 SC26-9423-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsapte4.pdf",
      "Title": "Application Programming: Transaction Manager",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9425-04",
      "FirstPage": "IMSApplication Programming: Transaction Manager Version 7 SC26-9425-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsas1e3.pdf",
      "Title": "Administration Guide: System",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9420-03",
      "FirstPage": "IMSAdministration Guide: System Version 7 SC26-9420-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsatme3.pdf",
      "Title": "Administration Guide: Transaction Manager",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9421-03",
      "FirstPage": "IMSAdministration Guide: Transaction Manager Version 7 SC26-9421-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfscg1e4.pdf",
      "Title": "Customization Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9427-04",
      "FirstPage": "IMSCustomization Guide Version 7 SC26-9427-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfscqbe3.pdf",
      "Title": "CQS/BPE Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9426-03",
      "FirstPage": "IMSCommon Queue Server and Base Primitive Environment Guide and Reference Version 7 SC26-9426-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfscr1e4.pdf",
      "Title": "Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9436-04",
      "FirstPage": "IMSCommand Reference Version 7 SC26-9436-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsdbre3.pdf",
      "Title": "DBRC Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9428-03",
      "FirstPage": "IMSDBRC Guide and Reference Version 7 SC26-9428-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsdbrg1.pdf",
      "Title": "DBRC Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC18-7818-00",
      "FirstPage": "IMSDatabase Recovery Control (DBRC) Guide and Reference Version 9 SC18-7818-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsiive4.pdf",
      "Title": "Installation Volume 1: Installation and Verification",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-9429-04",
      "FirstPage": "IMSInstallation Volume 1: Installation and Verification Version 7 GC26-9429-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsiivg1.pdf",
      "Title": "Installation Volume 1: Installation Verification",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC18-7822-00",
      "FirstPage": "IMSInstallation Volume 1: Installation Verification Version 9 GC18-7822-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsisde5.pdf",
      "Title": "Installation Volume 2: System Definition and Tailoring",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-9430-05",
      "FirstPage": "IMSInstallation Volume 2: System Definition and Tailoring Version 7 GC26-9430-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsisdg1.pdf",
      "Title": "Installation Volume 2: System Definition and Tailoring",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC18-7823-00",
      "FirstPage": "IMSInstallation Volume 2: System Definition and Tailoring Version 9 GC18-7823-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsjgre4.pdf",
      "Title": "IMS Java Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-0832-04",
      "FirstPage": "IMSIMS Java Guide and Reference Version 7 SC27-0832-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsmc1e6.pdf",
      "Title": "Messages and Codes Volume 1",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-9433-05",
      "FirstPage": "IMSMessages and Codes Volume 1 Version 7 GC26-9433-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsmc2e6.pdf",
      "Title": "Messages and Codes Volume 2",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-1120-05",
      "FirstPage": "IMSMessages and Codes Volume 2 Version 7 GC27-1120-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsmige3.pdf",
      "Title": "Master Index and Glossary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9432-03",
      "FirstPage": "IMSMaster Index and Glossary Version 7 SC26-9432-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsog1e3.pdf",
      "Title": "Operations Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9435-03",
      "FirstPage": "IMSOperations Guide Version 7 SC26-9435-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsotme4.pdf",
      "Title": "Open Transaction Manager Access Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9434-04",
      "FirstPage": "IMSOpen Transaction Manager Access Guide and Reference Version 7 SC26-9434-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsrpge3.pdf",
      "Title": "Release Planning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-9437-04",
      "FirstPage": "IMSRelease Planning Guide Version 7 GC26-9437-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsrpgg2.pdf",
      "Title": "Release Planning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC17-7831-01",
      "FirstPage": "IMSRelease Planning Guide Version 9 GC17-7831-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfss40e1.pdf",
      "Title": "Sample Operating Procedures",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9438-01",
      "FirstPage": "IMSVersion7SampleOperatingProceduresSC26-9438-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfssoce3.pdf",
      "Title": "Summary of Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9439-03",
      "FirstPage": "IMSSummary of Operator Commands Version 7 SC26-9439-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsurde3.pdf",
      "Title": "Utilities Reference: Database Manager and Transaction Manager",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9440-03",
      "FirstPage": "IMSUtilities Reference: Database and Transaction Manager Version 7 SC26-9440-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsurse3.pdf",
      "Title": "Utilities Reference: System",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9441-03",
      "FirstPage": "IMSUtilities Reference: System Version 7 SC26-9441-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1310.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY27-7612-00",
      "FirstPage": "OS/390DFSMSrmmDiagnosisGuideSY27-7612-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1a110.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-7332-00",
      "FirstPage": "OS/390DFSMSrmmApplicationProgrammingInterfaceSC26-7332-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1c111.pdf",
      "Title": "OS/390 V2R10.0 DFSMS: Managing Catalogs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7338-01",
      "FirstPage": "OS/390DFSMS:ManagingCatalogsSC26-7338-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1c410.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-7327-00",
      "FirstPage": "OS/390DFSMSdfpCheckpoint/RestartSC26-7327-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1c711.pdf",
      "Title": "OS/390 V2R10.0 DFSMS Installation Exits",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7392-01",
      "FirstPage": "OS/390DFSMSInstallationExitsSC26-7392-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1c811.pdf",
      "Title": "OS/390 V2R10 DFSMSrmm Implementation and Customization Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7334-01",
      "FirstPage": "OS/390DFSMSrmmImplementationandCustomizationGuideSC26-7334-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1d411.pdf",
      "Title": "OS/390 V2R10.0 DFSMS: Using Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7339-01",
      "FirstPage": "OS/390DFSMS:UsingDataSetsSC26-7339-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1d511.pdf",
      "Title": "OS/390 V2R10.0 DFSMS Macro Instructions for Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7337-01",
      "FirstPage": "OS/390DFSMSMacroInstructionsforDataSetsSC26-7337-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1di00.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-7344-00",
      "FirstPage": "OS/390DFSMSIntroductionSC26-7344-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1g110.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY27-7610-00",
      "FirstPage": "OS/390DFSMSdfpDiagnosisGuideSY27-7610-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1i211.pdf",
      "Title": "OS/390 V2R10.0 DFSMS Access Method Services for Catalogs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7326-01",
      "FirstPage": "OS/390DFSMSAccessMethodServicesforCatalogsSC26-7326-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1i420.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC35-0385-00",
      "FirstPage": "OS/390DFSMShsmImplementationandCustomizationGuideRelease10GC35-0385-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1i510.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-7340-00",
      "FirstPage": "OS/390DFSMS:UsingtheInteractiveStorageManagementFacilitySC26-7340-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1i611.pdf",
      "Title": "OS/390 V2R10.0 DFSMS: Implementing System-Managed Storage",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7336-01",
      "FirstPage": "OS/390DFSMS:ImplementingSystem-ManagedStorageSC26-7336-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1m311.pdf",
      "Title": "OS/390 V2R10.0 DFSMS: Using Magnetic Tapes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7341-01",
      "FirstPage": "OS/390DFSMS:UsingMagneticTapesSC26-7341-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1m710.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC35-0386-00",
      "FirstPage": "OS/390DFSMShsmDataRecoveryScenariosRelease10GC35-0386-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1mn01.pdf",
      "Title": "OS/390 V2R10.0 DFSMS Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7329-01",
      "FirstPage": "OS/390DFSMSMigrationSC26-7329-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1o110.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC35-0390-00",
      "FirstPage": "OS/390ObjectAccessMethodApplicationProgrammer\u2019sReferenceRelease10SC35-0390-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1o220.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC35-0391-00",
      "FirstPage": "OS/390ObjectAccessMethodPlanning,Installation,andStorageAdministrationGuideforObjectSupportRelease10SC35-0391-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1o321.pdf",
      "Title": "OS/390 V2R10.0 OAM PISA for Tape Libraries",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC35-0392-01",
      "FirstPage": "OS/390DFSMSObjectAccessMethodPlanning,Installation,andStorageAdministrationGuideforTapeLibrariesSC35-0392-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1q201.pdf",
      "Title": "NAVQ3MST",
      "Author": "HOWELLW ",
      "Subject": "",
      "DocumentNumber": "SC26-7194-01",
      "FirstPage": " DFSMS/MVS Version 1 Release 5IBM NaviQuest User\u0027s Guide    SC26-7194-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1r111.pdf",
      "Title": "OS/390 V2R10.0 DFSMSdfp Diagnosis Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SY27-7611-01",
      "FirstPage": "OS/390DFSMSdfpDiagnosisReferenceSY27-7611-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1r220.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC35-0394-00",
      "FirstPage": "OS/390DFSMSdssStorageAdministrationReferenceRelease10SC35-0394-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1r311.pdf",
      "Title": "OS/390 V2R10.0 DFSMSrmm Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7333-01",
      "FirstPage": "OS/390DFSMSrmmGuideandReferenceSC26-7333-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1rr00.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-7335-00",
      "FirstPage": "OS/390DFSMSrmmReportingSC26-7335-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1s211.pdf",
      "Title": "OS/390 V2R10.0 DFSMSdfp Storage Administration Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7331-01",
      "FirstPage": "OS/390DFSMSdfpStorageAdministrationReferenceSC26-7331-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1s311.pdf",
      "Title": "OS/390 V2R10.0 DFSMSdfp Advanced Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7330-01",
      "FirstPage": "OS/390DFSMSdfpAdvancedServicesSC26-7330-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1s420.pdf",
      "Title": "OS/390 V2R10.0 DFSMShsm Storage Administration Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC35-0389-00",
      "FirstPage": "OS/390DFSMShsmStorageAdministrationReferenceRelease10SC35-0389-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1s620.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC35-0388-00",
      "FirstPage": "OS/390DFSMShsmStorageAdministrationGuideRelease10SC35-0388-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1u111.pdf",
      "Title": "OS/390 V2R10.0 DFSMSdfp Utilities",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7343-01",
      "FirstPage": "OS/390DFSMSdfpUtilitiesSC26-7343-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1u220.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC35-0393-00",
      "FirstPage": "OS/390DFSMSdssStorageAdministrationGuideRelease10SC35-0393-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1u320.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC35-0387-00",
      "FirstPage": "OS/390DFSMShsmManagingYourOwnDataRelease10SC35-0387-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1v110.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-7342-00",
      "FirstPage": "OS/390DFSMS:UsingtheVolumeMountAnalyzerSC26-7342-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1v402.pdf",
      "Title": "DA2V4MAS",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-4905-01",
      "FirstPage": "  DFSMS/MVS Version 1 Release 2Access Method Servicesfor VSAM Catalogs  SC26-4905-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1x110.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SX35-5052-00",
      "FirstPage": "OS/390DFSMShsmStorageAdministrationReferenceSummaryRelease10SX35-5052-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2d401.pdf",
      "Title": "z/OS V1R1.0 DFSMS: Using Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7410-01",
      "FirstPage": "z/OSDFSMS:UsingDataSetsRelease1SC26-7410-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2d430.pdf",
      "Title": "z/OS V1R6.0 DFSMS: Using Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7410-04",
      "FirstPage": "z/OSDFSMS: Using Data Sets SC26-7410-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2d4a0.pdf",
      "Title": "z/OS V1R13 DFSMS Using Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7410-11",
      "FirstPage": "z/OSDFSMSUsingDataSetsSC26-7410-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2i200.pdf",
      "Title": "z/OS V1R1.0 DFSMS Access Method Services for Catalogs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7394-00",
      "FirstPage": "z/OSDFSMSAccessMethodServicesforCatalogsRelease1SC26-7394-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2i240.pdf",
      "Title": "z/OS V1R7.0 DFSMS Access Method Services for Catalogs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7394-04",
      "FirstPage": "z/OSDFSMS Access Method Services for Catalogs   SC26-7394-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2i250.pdf",
      "Title": "z/OS V1R8.0 DFSMS AMS for Catalogs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7394-05",
      "FirstPage": "z/OSDFSMS Access Method Services for Catalogs   SC26-7394-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2i251.pdf",
      "Title": "z/OS V1R8.0 DFSMS AMS for Catalogs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7394-06",
      "FirstPage": "z/OSDFSMS Access Method Services for Catalogs   SC26-7394-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2r160.pdf",
      "Title": "z/OS V1R9.0 DFSMSdfp Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GY27-7618-08",
      "FirstPage": "z/OSDFSMSdfp Diagnosis    GY27-7618-08  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2s250.pdf",
      "Title": "z/OS V1R8.0 DFSMS Storage Administration Reference (for DFSMShsm, DFSMSdss, DFSMSdfp)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7402-06",
      "FirstPage": "z/OSDFSMS Storage Administration Reference SC26-7402-06  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2s270.pdf",
      "Title": "z/OS V1R10.0 DFSMS Storage Administration Reference (for DFSMSdfp, DFSMSdss, DFSMShsm)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7402-10",
      "FirstPage": "z/OSDFSMS Storage Administration Reference (for DFSMSdfp, DFSMSdss, DFSMShsm) SC26-7402-10  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2u120.pdf",
      "Title": "z/OS V1R7.0 DFSMSdfp Utilities",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7414-03",
      "FirstPage": "z/OSDFSMSdfp Utilities   SC26-7414-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2u130.pdf",
      "Title": "z/OS V1R8.0 DFSMSdfp Utilities",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7414-04",
      "FirstPage": "z/OSDFSMSdfp Utilities   SC26-7414-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2u250.pdf",
      "Title": "z/OS V1R8.0 DFSMSdss Storage Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC35-0423-07",
      "FirstPage": "z/OSDFSMSdss Storage Administration Guide SC35-0423-07  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2u270.pdf",
      "Title": "z/OS V1R10.0 DFSMSdss Storage Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC35-0423-10",
      "FirstPage": "z/OSDFSMSdss Storage Administration Guide    SC35-0423-10  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2u2a0.pdf",
      "Title": "z/OS V1R13.0 DFSMSdss Storage Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC35-0423-15",
      "FirstPage": "z/OSDFSMSdssStorageAdministrationSC35-0423-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3a100.pdf",
      "Title": "z/OS V2R1.0 DFSMSrmm Application Programming Interface",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6872-00",
      "FirstPage": "z/OSDFSMSrmmApplicationProgrammingInterfaceVersion2Release1SC23-6872-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3c101.pdf",
      "Title": "z/OS V2R1.0 DFSMS Managing Catalogs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6853-01",
      "FirstPage": "z/OSDFSMSManagingCatalogsVersion2Release1SC23-6853-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3c400.pdf",
      "Title": "z/OS V2R1.0 DFSMSdfp Checkpoint/Restart",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6862-00",
      "FirstPage": "z/OSDFSMSdfpCheckpoint/RestartVersion2Release1SC23-6862-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3c701.pdf",
      "Title": "z/OS V2R1.0 DFSMS Installation Exits",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6850-01",
      "FirstPage": "z/OSDFSMSInstallationExitsVersion2Release1SC23-6850-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3c800.pdf",
      "Title": "z/OS V2R1.0 DFSMSrmm Implementation and Customization Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6874-00",
      "FirstPage": "z/OSDFSMSrmmImplementationandCustomizationGuideVersion2Release1SC23-6874-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3d400.pdf",
      "Title": "z/OS DFSMS Using Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6855-00",
      "FirstPage": "z/OSDFSMSUsingDataSetsVersion2Release1SC23-6855-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3d402.pdf",
      "Title": "z/OS DFSMS Using Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6855-02",
      "FirstPage": "z/OSDFSMSUsingDataSetsVersion2Release1SC23-6855-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3d410.pdf",
      "Title": "z/OS DFSMS Using Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6855-03",
      "FirstPage": "z/OSDFSMSUsingDataSetsVersion2Release2SC23-6855-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3d502.pdf",
      "Title": "z/OS V2R1.0 DFSMS Macro Instructions for Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6852-02",
      "FirstPage": "z/OSDFSMSMacroInstructionsforDataSetsVersion2Release1SC23-6852-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3da01.pdf",
      "Title": "ARCMAST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC14-7504-01",
      "FirstPage": " z/OS V2R1.0IBM DFSMShsm Data Areas    GC14-7504-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3di00.pdf",
      "Title": "z/OS V2R1.0 DFSMS Introduction V2R1.0 DFSMS Introduction",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6851-00",
      "FirstPage": "z/OSDFSMSIntroductionVersion2Release1SC23-6851-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3g300.pdf",
      "Title": "z/OS V2R1.0 DFSMSrmm Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6876-00",
      "FirstPage": "z/OSDFSMSrmmDiagnosisGuideVersion2Release1SC23-6876-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3g503.pdf",
      "Title": "z/OS V2R1.0 DFSMS Using the New Functions",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6857-03",
      "FirstPage": "z/OSDFSMSUsingtheNewFunctionsVersion2Release1SC23-6857-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3i201.pdf",
      "Title": "z/OS V2R1.0 DFSMS Access Method Services Commandsz/OS V2R1 DFSMS AMS Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6846-01",
      "FirstPage": "z/OSDFSMSAccessMethodServicesCommandsVersion2Release1SC23-6846-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3i401.pdf",
      "Title": "z/OS V2R1.0 DFSMShsm Implementation and Customization Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6869-01",
      "FirstPage": "z/OSDFSMShsmImplementationandCustomizationGuideVersion2Release1SC23-6869-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3i500.pdf",
      "Title": "z/OS V2R1.0 DFSMS Using ISMF",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6856-00",
      "FirstPage": "z/OSDFSMSUsingtheInteractiveStorageManagementFacilityVersion2Release1SC23-6856-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3i600.pdf",
      "Title": "z/OS V2R1.0 DFSMS Implementing System-Managed Storage",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6849-00",
      "FirstPage": "z/OSDFSMSImplementingSystem-ManagedStorageVersion2Release1SC23-6849-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3j100.pdf",
      "Title": "z/OS V2R1.0 DFSMS Software Support for IBM System Storage TS1140, TS1130, and TS1120 Tape Drives (3592)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6854-00",
      "FirstPage": "z/OSDFSMSSoftwareSupportforIBMSystemStorageTS1140,TS1130,andTS1120TapeDrives(3592)Version2Release1SC23-6854-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3m300.pdf",
      "Title": "z/OS V2R1.0 DFSMS Using Magnetic Tapes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6858-00",
      "FirstPage": "z/OSDFSMSUsingMagneticTapesVersion2Release1SC23-6858-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3m500.pdf",
      "Title": "z/OS V2R1.0 DFSMS Distributed FileManager Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6848-00",
      "FirstPage": "z/OSDFSMSDistributedFileManagerGuideandReferenceVersion2Release1SC23-6848-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3o100.pdf",
      "Title": "z/OS V2R1.0 DFSMS OAM Application Programmer\u2122s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6865-00",
      "FirstPage": "z/OSDFSMSObjectAccessMethodApplicationProgrammer\u2019sReferenceVersion2Release1SC23-6865-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3o200.pdf",
      "Title": "z/OS V2R1.0 DFSMS OAM Planning, Installation, and Storage Administration Guide for Object Support",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6866-00",
      "FirstPage": "z/OSDFSMSObjectAccessMethodPlanning,Installation,andStorageAdministrationGuideforObjectSupportVersion2Release1SC23-6866-"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3o300.pdf",
      "Title": "z/OS V2R1.0 DFSMS OAM Planning, Installation, and Storage Administration Guide for Tape Libraries",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6867-00",
      "FirstPage": "z/OSDFSMSObjectAccessMethodPlanning,Installation,andStorageAdministrationGuideforTapeLibrariesVersion2Release1SC23-6867-"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3r100.pdf",
      "Title": "z/OS V2R1.0 DFSMSdfp Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6863-00",
      "FirstPage": "z/OSDFSMSdfpDiagnosisVersion2Release1SC23-6863-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3r300.pdf",
      "Title": "z/OS V2R1.0 DFSMSrmm Managing and Using Removable Media",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6873-00",
      "FirstPage": "z/OSDFSMSrmmManagingandUsingRemovableMediaVersion2Release1SC23-6873-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3r400.pdf",
      "Title": "z/OS V2R1.0 DFSMShsm Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC52-1387-00",
      "FirstPage": "z/OSDFSMShsmDiagnosisVersion2Release1GC52-1387-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3rr00.pdf",
      "Title": "z/OS V2R1.0 DFSMSrmm Reporting",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6875-00",
      "FirstPage": "z/OSDFSMSrmmReportingVersion2Release1SC23-6875-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3s201.pdf",
      "Title": "z/OS V2R1.0 DFSMSdfp Storage Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6860-01",
      "FirstPage": "z/OSDFSMSdfpStorageAdministrationVersion2Release1SC23-6860-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3s301.pdf",
      "Title": "z/OS V2R1.0 DFSMSdfp Advanced Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6861-01",
      "FirstPage": "z/OSDFSMSdfpAdvancedServicesVersion2Release1SC23-6861-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3s602.pdf",
      "Title": "z/OS V2R1.0 DFSMShsm Storage Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6871-02",
      "FirstPage": "z/OSDFSMShsmStorageAdministrationVersion2Release1SC23-6871-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3u100.pdf",
      "Title": "z/OS V2R1.0 DFSMSdfp Utilities",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6864-00",
      "FirstPage": "z/OSDFSMSdfpUtilitiesVersion2Release1SC23-6864-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3u201.pdf",
      "Title": "z/OS V2R1.0 DFSMSdss Storage Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6868-01",
      "FirstPage": "z/OSDFSMSdssStorageAdministrationVersion2Release1SC23-6868-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3u202.pdf",
      "Title": "z/OS V2R1.0 DFSMSdss Storage Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6868-02",
      "FirstPage": "z/OSDFSMSdssStorageAdministrationVersion2Release1SC23-6868-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3u300.pdf",
      "Title": "z/OS V2R1.0 DFSMShsm Managing Your Own Data",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6870-00",
      "FirstPage": "z/OSDFSMShsmManagingYourOwnDataVersion2Release1SC23-6870-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3v100.pdf",
      "Title": "z/OS V2R1.0 DFSMS Using the Volume Mount Analyzer",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6859-00",
      "FirstPage": "z/OSDFSMSUsingtheVolumeMountAnalyzerVersion2Release1SC23-6859-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgtm2600.pdf",
      "Title": "DA4M6MAS",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC27-0806-00",
      "FirstPage": "OS/390 DFSMSIBM Program ManagementVersion 2 Release 10    SC27-0806-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dmba6001.pdf",
      "Title": "DB2 Image, Audio, and Video Extenders Administration and Programming",
      "Author": "IBM",
      "Subject": "DB2 for OS/390 V6 RML",
      "DocumentNumber": "SC26-9650-00",
      "FirstPage": "DB2UniversalDatabaseforOS/390Image,Audio,andVideoExtendersAdministrationandProgrammingVersion6SC26-9650-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dpr1cg00.pdf",
      "Title": "z/OS V2R2 HTTP Server User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8417-00",
      "FirstPage": "IBMHTTPServer-PoweredbyApacheVersion9SC27-8417-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsnag0g3.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-9003-02",
      "FirstPage": " DB2 Universal Database for OS/390IBM Administration GuideVersion 6    SC26-9003-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsnap0g3.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-9004-02",
      "FirstPage": " DB2 Universal Database for OS/390IBM Application Programmingand SQL GuideVersion 6    SC26-9004-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsncr0g3.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-9006-02",
      "FirstPage": " DB2 Universal Database for OS/390IBM Command ReferenceVersion 6    SC26-9006-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsnds0g3.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-9007-02",
      "FirstPage": " DB2 Universal Database for OS/390IBM Data Sharing:Planning and AdministrationVersion 6    SC26-9007-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsnig0g3.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC26-9008-02",
      "FirstPage": " DB2 Universal Database for OS/390IBM Installation GuideVersion 6    GC26-9008-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsnjv0g3.pdf",
      "Title": "DB2 UDB for OS/390: Application Programming Guide and Reference for Java\u003Csup\u003E\u017D\u003Creset\u003E",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9018-02",
      "FirstPage": "DB2UniversalDatabaseforOS/390ApplicationProgrammingGuideandReferenceFORJAVA\u2122Version6SC26-9018-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsnmc0g3.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC26-9011-02",
      "FirstPage": " DB2 Universal Database for OS/390IBM Messages and CodesVersion 6    GC26-9011-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsnod0g3.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-9005-02",
      "FirstPage": " DB2 Universal Database for OS/390IBM ODBC Guide and ReferenceVersion 6    SC26-9005-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsnrg0g3.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-9013-03",
      "FirstPage": " DB2 Universal Database for OS/390IBM Release Planning GuideVersion 6    SC26-9013-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsnsq0g3.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-9014-02",
      "FirstPage": " DB2 Universal Database for OS/390IBM SQL ReferenceVersion 6    SC26-9014-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsnud0g1.pdf",
      "Title": "DB2 Reference for Remote DRDA Requesters and Servers",
      "Author": "IBM",
      "Subject": "DB2 for OS/390",
      "DocumentNumber": "SC26-9012-00",
      "FirstPage": "DB2 Universal Database for OS/390IBMReference for Remote DRDARequesters and ServersVersion 6    SC26-9012-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dsnug0g3.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-9015-02",
      "FirstPage": " DB2 Universal Database for OS/390IBM Utility Guide and ReferenceVersion 6    SC26-9015-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9ar007.pdf",
      "Title": "9PO07SM",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7201-07",
      "FirstPage": " Enterprise Systems Architecture/390IBM Principles of Operation    SA22-7201-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9ar008.pdf",
      "Title": "9PO08SM",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7201-08",
      "FirstPage": " Enterprise Systems Architecture/390IBM Principles of Operation    SA22-7201-08"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9ar900.pdf",
      "Title": "REF94MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7209-04",
      "FirstPage": "  Enterprise SystemsArchitecture/390IBM Reference Summary    SA22-7209-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr000.pdf",
      "Title": "ZPO00SM",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7832-00",
      "FirstPage": " z/ArchitectureIBM Principles of Operation    SA22-7832-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr001.pdf",
      "Title": "ZPO01SM",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7832-01",
      "FirstPage": " z/ArchitectureIBM Principles of Operation    SA22-7832-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr002.pdf",
      "Title": "ZPO02SM",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7832-02",
      "FirstPage": " z/ArchitectureIBM Principles of Operation    SA22-7832-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr003.pdf",
      "Title": "DZ9ZR003",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7832-03",
      "FirstPage": " z/ArchitectureIBM Principles of Operation    SA22-7832-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr006.pdf",
      "Title": "The z/Architecture Principles of Operation",
      "Author": "IBM Corporation",
      "Subject": "This publication provides, for reference purposes, a detailed z/Architecture\u2122 description.",
      "DocumentNumber": "SA22-7832-06",
      "FirstPage": "z/Architecture\u0002\u0003\u0004\u00AEPrinciples of OperationSA22-7832-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr007.pdf",
      "Title": "z/Architecture Principles of Operation",
      "Author": "IBM Corporation",
      "Subject": "z/Architecture",
      "DocumentNumber": "SA22-7832-07",
      "FirstPage": "\u0002\u0003\u0004\u00AEz/ArchitecturePrinciples of OperationSA22-7832-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zs001.pdf",
      "Title": "REFZ1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7871-01",
      "FirstPage": "  z/ArchitectureIBM Reference Summary    SA22-7871-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zs005.pdf",
      "Title": "IBM z/Architecture Reference Summary",
      "Author": "IBM Corporation",
      "Subject": "z/Architecture",
      "DocumentNumber": "SA22-7871-05",
      "FirstPage": "SA22-7871-05 z/ArchitectureIBMrReference Summary"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p612.pdf",
      "Title": "E0SP6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1963-07",
      "FirstPage": "  OS/390Parallel Sysplex Test ReportGC28-1963-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p620.pdf",
      "Title": "E0S1P620",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1963-15",
      "FirstPage": "OS/390IBM Parallel Sysplex Test Report    GC28-1963-15"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p624.pdf",
      "Title": "OS/390 Parallel Sysplex Test Report",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1963-19",
      "FirstPage": "OS/390ParallelSysplexTestReportR9\u002BR10GC28-1963-19\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s2p100.pdf",
      "Title": "z/OS V1R1.0 Parallel Sysplex Overview",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7661-00",
      "FirstPage": "z/OSParallelSysplexOverview:IntroducingDataSharingandParallelisminaSysplexSA22-7661-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s2p603.pdf",
      "Title": "z/OS Parallel Sysplex Test Report",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7663-03",
      "FirstPage": "z/OSParallelSysplexTestReportV1R1\u002BV1R2SA22-7663-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s2p607.pdf",
      "Title": "z/OS V1R3.0-V1R4.0 Parallel Sysplex Test Report",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7663-07",
      "FirstPage": "z/OSParallelSysplexTestReportVersion1Release3\u0026Version1Release4SA22-7663-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1a151.pdf",
      "Title": "E0ZA1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1725-10",
      "FirstPage": "OS/390IBM Introduction and Release GuideRelease 10    GC28-1725-10"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1a242.pdf",
      "Title": "OS/390 V2R10.0 Planning for Installation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1726-11",
      "FirstPage": "OS/390PlanningforInstallationRelease10GC28-1726-11IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1a341.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1727-12",
      "FirstPage": "OS/390InformationRoadmapRelease10GC28-1727-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1a440.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1499-09",
      "FirstPage": "OS/390SummaryofMessageChangesGC28-1499-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1j102.pdf",
      "Title": "E0ZJ1COL",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1987-02",
      "FirstPage": " OS/390IBM BookManager READ/MVSHints and Tips    GC28-1987-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1l131.pdf",
      "Title": "E0ZF1LPS",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "Licensed ProgramIBMSpecificationsOS/390 Version 2 Release 10Program Number 5647-A01OS/390\uF6DA is an operating system consis"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1nl00.pdf",
      "Title": "Hot topic: Language Environmentand migrationby Eric BustaThis issue of OS/390 Hot Topicsaddresses Language Environment and mig",
      "Author": "PeteG",
      "Subject": "hottopic",
      "DocumentNumber": "SC28-1298-03",
      "FirstPage": "page 1Language Environmentand migrationby Eric BustaThis issue of OS/390 Hot Topicsaddresses Language Environmentand mig"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1nl01.pdf",
      "Title": "Hot topic: Welcome to the second edition ofour Hot Topics Newsletter!We enjoyed putting the first onetogether, and are gratif",
      "Author": "PeteG",
      "Subject": "hottopic2",
      "DocumentNumber": "",
      "FirstPage": "page 1Welcome to the second edition ofour Hot Topics Newsletter!We enjoyed putting the first onetogether, and are gratif"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1nl02.pdf",
      "Title": "Hot topic: Downward compatibility in Language Environment - Problem solved!",
      "Author": "PeteG",
      "Subject": "hottopic2",
      "DocumentNumber": "GA22-7431-02",
      "FirstPage": "Downward compatibility in Language Environment - Problem solved!"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p100.pdf",
      "Title": "zSeries Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-00",
      "FirstPage": "z/OSzSeries Platform Test Report Version 1 Release 6 SA22-7997-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p120.pdf",
      "Title": "zSeries Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-02",
      "FirstPage": "z/OSzSeries Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 7 SA22-7997-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p130.pdf",
      "Title": "zSeries Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-03",
      "FirstPage": "z/OSzSeries Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 7 SA22-7997-03  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p140.pdf",
      "Title": "zSeries Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-04",
      "FirstPage": "z/OSzSeries Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 8 SA22-7997-04  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p150.pdf",
      "Title": "System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-05",
      "FirstPage": "z/OSSystem z Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 8  SA22-7997-05  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p160.pdf",
      "Title": "z/OS V1R9.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-06",
      "FirstPage": "z/OSSystem z Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 9  SA22-7997-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p161.pdf",
      "Title": "z/OS V1R9.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-07",
      "FirstPage": "z/OSSystem z Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 9  SA22-7997-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p170.pdf",
      "Title": "z/OS V1R10.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-08",
      "FirstPage": "z/OSSystem z Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 10  SA22-7997-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p171.pdf",
      "Title": "z/OS V1R10.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-09",
      "FirstPage": "z/OSSystemzPlatformTestReportforz/OSandLinuxVirtualServersz/OSVersion1Release10SA22-7997-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p180.pdf",
      "Title": "z/OS V1R11.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-10",
      "FirstPage": "z/OSSystemzPlatformTestReportforz/OSandLinuxVirtualServersz/OSVersion1Release11SA22-7997-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p181.pdf",
      "Title": "z/OS V1R11.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-11",
      "FirstPage": "z/OSSystemzPlatformTestReportforz/OSandLinuxVirtualServersz/OSVersion1Release11SA22-7997-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p191.pdf",
      "Title": "z/OS V1R12.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-13",
      "FirstPage": "z/OSSystemzPlatformTestReportforz/OSandLinuxVirtualServersz/OSVersion1Release12SA22-7997-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1q101.pdf",
      "Title": "z/OS Migration to the IBM System z9",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1348-01",
      "FirstPage": "z/OSMigration to the IBM System z9 Version 1 Releases 7, 6, 5, and 4 SA23-1348-01  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1x100.pdf",
      "Title": "z/OS Font Collection",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-1048-00",
      "FirstPage": "z/OSFontCollectionVersion2Release1GA32-1048-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2b1b1.pdf",
      "Title": "z/OS V1R12.0 Planning for Installation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7504-24",
      "FirstPage": "z/OSPlanningforInstallationVersion1Release12GA22-7504-24\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2b1c0.pdf",
      "Title": "z/OS V1R13.0 Planning for Installation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7504-25",
      "FirstPage": "z/OSPlanningforInstallationVersion1Release13GA22-7504-25\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2e180.pdf",
      "Title": "z/OS V1R13.0 Planning for Multilevel Security and the Common Criteria",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7509-13",
      "FirstPage": "z/OSPlanningforMultilevelSecurityandtheCommonCriteriaGA22-7509-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2k101.pdf",
      "Title": "z/OS Problem Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6844-01",
      "FirstPage": "z/OSProblemManagementVersion2Release1SC23-6844-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2l140.pdf",
      "Title": "IBM Health Checker for z/OS User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7994-09",
      "FirstPage": "z/OSIBMHealthCheckerforz/OSUser\u2019sGuideVersion1Release11SA22-7994-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2l160.pdf",
      "Title": "IBM Health Checker for z/OS V1R13 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7994-12",
      "FirstPage": "z/OSIBMHealthCheckerforz/OSV1R13User\u0027sGuideVersion1Release13SA22-7994-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2l161.pdf",
      "Title": "IBM Health Checker for z/OS V1R13 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7994-13",
      "FirstPage": "z/OSIBMHealthCheckerforz/OSV1R13User\u0027sGuideVersion1Release13SA22-7994-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2m103.pdf",
      "Title": "z/OS V1R4.0 Migration (from OS/390 V2R10.0)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7499-02",
      "FirstPage": "z/OSMigration Version 1 Release 4 GA22-7499-02   Migration path covered in this document: from OS/390 Version 2 Release "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2m121.pdf",
      "Title": "z/OS V1R6.0 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7499-06",
      "FirstPage": "z/OSMigration Version 1 Release 6 GA22-7499-06   \u201CWhen behaviors aren\u2019t the same anymore,  Migration actions are called "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2m141.pdf",
      "Title": "z/OS V1R8.0 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7499-10",
      "FirstPage": "z/OSMigration Version 1 Release 8  GA22-7499-10   \u201CWhen behaviors aren\u2019t the same anymore, Migration actions are called "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2m151.pdf",
      "Title": "z/OS V1R9.0 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7499-12",
      "FirstPage": "z/OSMigration Version 1 Release 9  GA22-7499-12   \u201CWhen behaviors aren\u2019t the same anymore, Migration actions are called "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2m161.pdf",
      "Title": "z/OS V1R10.0 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7499-14",
      "FirstPage": "z/OSMigration Version 1 Release 10  GA22-7499-14   \u201CWhen behaviors aren\u2019t the same anymore, Migration actions are called"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2m171.pdf",
      "Title": "z/OS V1R11.0 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7499-16",
      "FirstPage": "z/OSMigrationVersion1Release11GA22-7499-16\u201CWhenbehaviorsaren\u2019tthesameanymore,Migrationactionsarecalledfor.\u201D\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2m180.pdf",
      "Title": "z/OS V1R12.0 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7499-17",
      "FirstPage": "z/OSMigrationVersion1Release12GA22-7499-17\u201CWhenbehaviorsaren\u0027tthesameanymore,Migrationactionsarecalledfor.\u201D\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2m191.pdf",
      "Title": "z/OS V1R13 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7499-20",
      "FirstPage": "z/OSMigrationVersion1Release13GA22-7499-20\u201CWhenbehaviorsaren\u0027tthesameanymore,Migrationactionsarecalledfor.\u201D\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2m192.pdf",
      "Title": "z/OS V1R13 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7499-21",
      "FirstPage": "z/OSMigrationVersion1Release13GA22-7499-21\u201CWhenbehaviorsaren\u0027tthesameanymore,Migrationactionsarecalledfor.\u201D\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n100.pdf",
      "Title": "z/OS V1R1.0 Hot Topics Newsletter",
      "Author": "Kerry B",
      "Subject": "newhot2001",
      "DocumentNumber": "GA22-7501-00",
      "FirstPage": "Based on OS/390\u00AE, z/OS deliversinnovative technology that is tightlyintegrated with the z900 hardwareand licensed intern"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n120.pdf",
      "Title": "z/OS V1R3.0 Hot Topics Newsletter",
      "Author": "IBM Corp Dept 55JA -  MHV User Technologies",
      "Subject": "A z/OS and OS/390 Newsletter",
      "DocumentNumber": "",
      "FirstPage": "A word from Paul Loftus       zSeries . . .           a key to tomorrow\u2019s e-business\u201CWith zSeries weare committed todeli"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n130.pdf",
      "Title": "z/OS V1R4.0 Hot Topics Newsletter",
      "Author": "Bondi",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "Security: New challenges, building on a solid base BY LINDA DISTEL Security has been a major focus for zSeries starting "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n132.pdf",
      "Title": "z/OS V1R4.0 Hot Topics Newsletter",
      "Author": "Tracy Bondi",
      "Subject": "IBM Pub",
      "DocumentNumber": "",
      "FirstPage": "August 2003 - Issue 9 In this issue...XML Toolkit64-bitMigrationWebSphereand much more! Bringingthe tools to youTOPICSHO"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n140.pdf",
      "Title": "z/OS V1R5.0 Hot Topics Newsletter",
      "Author": "Tracy Bondi",
      "Subject": "IBM Pub",
      "DocumentNumber": "",
      "FirstPage": "February 2004 - Issue 10 In this issue...IBM Health CheckerCustomer feedbackServerPac \u0026 SystemPacand much more... Marna "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n150.pdf",
      "Title": "z/OS V1R6.0 Hot Topics Newsletter",
      "Author": "Tracy Bondi",
      "Subject": "IBM Pub",
      "DocumentNumber": "",
      "FirstPage": "August 2004 - Issue 11 In this issue...Infrastructure simpli\uFB01cationMettle TestzAAP it!EWLMDynamic VIPAsand much more... "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n151.pdf",
      "Title": "z/OS V1R6.0 Hot Topics Newsletter",
      "Author": "Tracy Bondi",
      "Subject": "IBM Pub",
      "DocumentNumber": "",
      "FirstPage": "A treasure trove of February 2005 - Issue 12 In this issue...Vita-meata-vegamin for z/OS Handling diverse workloadsz/OS "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n160.pdf",
      "Title": "z/OS V1R7.0 Hot Topics Newsletter",
      "Author": "Tracy Bondi",
      "Subject": "IBM Pub",
      "DocumentNumber": "",
      "FirstPage": "August 2005 - Issue 13 TOPICS HOT A z/OS NewsletterWarp speed ahead!In this issue...GDPSIBM Health Checker for z/OSRestr"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n161.pdf",
      "Title": "Hot Topics",
      "Author": "Tracy Bondi",
      "Subject": "IBM Pub",
      "DocumentNumber": "",
      "FirstPage": "February 2006 - Issue 14 TOPICS HOT A z/OS Newsletterz/OS:Simply secureIn this issue\u2026SecurityOMEGAMONEncryption Facility"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n170.pdf",
      "Title": "Hot Topics",
      "Author": "Tracy Bondi",
      "Subject": "IBM Pub",
      "DocumentNumber": "",
      "FirstPage": "August 2006 - Issue 15 TOPICS HOT A z/OS NewsletterMaking a splash with z/OS!In this issue...zIIP Encryption Coupling fa"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n171.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "In this issue... Daylight Saving Time and your installation IMS DLIModel utility DB2 and DFSORT Recommendations for:  St"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n180.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "Also in this issue: Simplify your systems management   and security:     SMF and System Logger  Encryption Facility for "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n181.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "August 2007\u2014issue 17Gita Berg IBM Senior Technical Staff MemberAlso in this issue: Migration for z/OS V1R9  Diagnosis to"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n190.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA22-7499-13",
      "FirstPage": "Gita Berg IBM Senior Technical Staff MemberIn this issue: Migration actions  The dawn of EAV Unlocking the power   of Sy"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n191.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "march 2009\u2014issue 20John EellsIBM System z Software DesignerFirst in a series:Also in this issue:    Sail away with SOA  "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n1a0.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "AUGUST 2009\u2014iSSUe 21"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n1a1.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "march 2010\u2014issue 22Nothing gets past z/OS!In this issue: security and auditingSaheem GranadosSoftware Designer :  System"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2nl04.pdf",
      "Title": "newhot2001",
      "Author": "Kerry B",
      "Subject": "newhot2001",
      "DocumentNumber": "",
      "FirstPage": "Tom Rosamilia bids farewell...I\u2019d like to inform you that I\u2019veaccepted a new position as VicePresident, Worldwide DataMa"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2nl08.pdf",
      "Title": "Hot Topics: Migrating to z/OS64-bitServerPacWLMEIM and much more!",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "Thinkingaboutmigrating?In this issue...Migrating to z/OS64-bitServerPacWLMEIMand much more!February 2003 - Issue 8 TOPIC"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2t101.pdf",
      "Title": "z/OS Migration to the IBM System z10",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2242-01",
      "FirstPage": "z/OSMigration to the IBM System z10 Version 1 Releases 9, 8, and 7  SA23-2242-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3a100.pdf",
      "Title": "z/OS Introduction and Release Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0887-00",
      "FirstPage": "z/OSIntroductionandReleaseGuideVersion2Release1GA32-0887-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3a101.pdf",
      "Title": "z/OS Introduction and Release Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0887-01",
      "FirstPage": "z/OSIntroductionandReleaseGuideVersion2Release1GA32-0887-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3a112.pdf",
      "Title": "z/OS V2R2 Introduction and Release Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0887-04",
      "FirstPage": "z/OSIntroductionandReleaseGuideVersion2Release2GA32-0887-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3a113.pdf",
      "Title": "z/OS Introduction and Release Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0887-05",
      "FirstPage": "z/OSIntroductionandReleaseGuideVersion2Release2GA32-0887-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3b100.pdf",
      "Title": "z/OS V2R1 Planning for Installation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0890-00",
      "FirstPage": "z/OSPlanningforInstallationVersion2GA32-0890-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3b102.pdf",
      "Title": "z/OS Planning for Installation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0890-02",
      "FirstPage": "z/OSPlanningforInstallationVersion2Release1GA32-0890-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3b111.pdf",
      "Title": "z/OS V2R2 Planning for Installation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0890-04",
      "FirstPage": "z/OSPlanningforInstallationVersion2Release2GA32-0890-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3c100.pdf",
      "Title": "z/OS Information Roadmap",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2299-00",
      "FirstPage": "z/OSz/OSInformationRoadmapVersion2Release1SA23-2299-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3e100.pdf",
      "Title": "z/OS Planning for Multilevel Security and the Common Criteria",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0891-00",
      "FirstPage": "z/OSPlanningforMultilevelSecurityandtheCommonCriteriaVersion2Release1GA32-0891-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3e110.pdf",
      "Title": "z/OS Planning for Multilevel Security and the Common Criteria",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0891-01",
      "FirstPage": "z/OSPlanning for Multilevel Security and theCommon CriteriaVersion2 Release2GA32-0891-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3f101.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "LicensedProgramSpecifications\u0001\u0002\u0003z/OSVersion2Release1\u2013ProgramNumber5650-ZOSz/OS\u00AEisanadvanced-technology,enterprise-widese"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3h305.pdf",
      "Title": "z/OS Summary of Message and Interface Changes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2300-05",
      "FirstPage": "z/OSSummaryofMessageandInterfaceChangesVersion2Release1SA23-2300-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3i100.pdf",
      "Title": "z/OS Planning for Sub-Capacity Pricing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2301-00",
      "FirstPage": "z/OSPlanningforSub-CapacityPricingVersion2Release1SA23-2301-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3l100.pdf",
      "Title": "IBM Health Checker for z/OS: User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6843-00",
      "FirstPage": "z/OSIBMHealthCheckerforz/OSV2R1User\u0027sGuideVersion2Release1SC23-6843-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3l102.pdf",
      "Title": "IBM Health Checker for z/OS User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6843-02",
      "FirstPage": "z/OSIBMHealthCheckerforz/OSV2R1User\u0027sGuideVersion2Release1SC23-6843-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3m100.pdf",
      "Title": "z/OS Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0889-00",
      "FirstPage": "z/OSMigrationfromz/OSV1R13andz/OSV1R12toz/OSV2R1Version2GA32-0889-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3m102.pdf",
      "Title": "z/OS Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0889-02",
      "FirstPage": "z/OSMigrationfromz/OSV1R13andz/OSV1R12toz/OSV2R1Version2Release1GA32-0889-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3m104.pdf",
      "Title": "z/OS Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0889-04",
      "FirstPage": "z/OSMigrationfromz/OSV1R13andz/OSV1R12toz/OSV2R1Version2Release1GA32-0889-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3m110.pdf",
      "Title": "z/OS V2R2 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0889-05",
      "FirstPage": "z/OSMigrationfromz/OSV2R1andz/OSV1R13toz/OSV2R2Version2Release2GA32-0889-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3m112.pdf",
      "Title": "z/OS V2R2 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0889-07",
      "FirstPage": "z/OSMigrationfromz/OSV2R1andz/OSV1R13toz/OSV2R2Version2Release2GA32-0889-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0zpdz00.pdf",
      "Title": "E0ZPDZ00",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9848-00",
      "FirstPage": " IBMProgram DirectoryFor CBPDO Installation and ServerPac Referencez/OSV2.1.0Program Number5650-ZOS CBPDO Level SMC1310 "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0zpdz10.pdf",
      "Title": "E0ZPDZ10",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9848-01",
      "FirstPage": " IBMProgram DirectoryFor CBPDO Installation and ServerPac Referencez/OSV2.2.0Program Number5650-ZOS CBPDO Level SMC1510 "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0zpdz20.pdf",
      "Title": "E0ZPDZ20",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9848-02",
      "FirstPage": " IBMProgram DirectoryFor CBPDO Installation and ServerPac Referencez/OSVersion 2 Release 3Program Number5650-ZOS CBPDO L"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0zpdz30.pdf",
      "Title": "IEAP1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9848-03",
      "FirstPage": " IBMProgram DirectoryFor CBPDO Installation and ServerPac Referencez/OSVersion 2 Release 4Program Number5650-ZOS CBPDO L"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0zpdz40.pdf",
      "Title": "E0ZPDZ00",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9848-04",
      "FirstPage": " IBMProgram DirectoryFor CBPDO Installation and ServerPac Referencez/OSVersion 2 Release 5Program Number5650-ZOS CBPDO L"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ebrscl19.pdf",
      "Title": "EBRSCL19",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC23-3414-16",
      "FirstPage": " Softcopy Librarian\u0002\u0003\u0004 User\u0027s GuideV4.3 for Windows    GC23-3414-16"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/edc1b200.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B Runtime Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7314-00",
      "FirstPage": "z/OSXLC/C\u002B\u002BRuntimeLibraryReferenceVersion2Release1SC14-7314-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/edc1b201.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B Runtime Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7314-01",
      "FirstPage": "z/OSXLC/C\u002B\u002BRuntimeLibraryReferenceVersion2Release1SC14-7314-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/edc1b210.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Runtime Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7314-02",
      "FirstPage": "z/OSXLC/C\u002B\u002BRuntimeLibraryReferenceVersion2Release2SC14-7314-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/edc1b215.pdf",
      "Title": "z/OS XL C/C\u002B\u002B Runtime Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7314-07",
      "FirstPage": "z/OSXLC/C\u002B\u002BRuntimeLibraryReferenceVersion2Release2SC14-7314-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/edclb031.pdf",
      "Title": "EDCLB031",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1663-08",
      "FirstPage": "OS/390IBM C/C\u002B\u002B Run-Time Library Reference    SC28-1663-08"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/edclb160.pdf",
      "Title": "z/OS V1R7.0 XL C/C\u002B\u002B Run-Time Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7821-07",
      "FirstPage": "z/OSXL C/C\u002B\u002BRun-Time Library Reference SA22-7821-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/edclb1b0.pdf",
      "Title": "z/OS V1R12.0 XL C/C\u002B\u002B Run-Time Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7821-12",
      "FirstPage": "z/OSXLC/C\u002B\u002BRun-TimeLibraryReferenceSA22-7821-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/edclb1c0.pdf",
      "Title": "z/OS V1R13.0 XL C/C\u002B\u002B Run-Time Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7821-13",
      "FirstPage": "z/OSXLC/C\u002B\u002BRun-TimeLibraryReferenceSA22-7821-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eeq2ug01.pdf",
      "Title": "z/OS V2R1.0 and z/VM V6R2.0 HCM User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2670-01",
      "FirstPage": "z/OSandz/VMHardwareConfigurationManagerUser\u0027sGuideVersion2Release1SC34-2670-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eeque130.pdf",
      "Title": "OS/390 V2R10.0 HCM User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-6595-03",
      "FirstPage": "OS/390HardwareConfigurationManagerUser\u2019sGuideSC33-6595-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eim2a100.pdf",
      "Title": "z/OS V2R1.0 Integrated Security Services Enterprise Identity Mapping (EIM) Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2297-00",
      "FirstPage": "z/OSIntegratedSecurityServicesEnterpriseIdentityMapping(EIM)GuideandReferenceVersion2Release1SA23-2297-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/envg0000.pdf",
      "Title": "Automation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8853-00",
      "FirstPage": "Tivoli\u00AENetView\u00AEforz/OS\u2122AutomationGuideVersion5Release1SC31-8853-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eox01m05.pdf",
      "Title": "EOX01MST",
      "Author": "BATCH5  ",
      "Subject": "",
      "DocumentNumber": "GC38-2032-00",
      "FirstPage": " BookManager READ/MVS andBookManager BUILD/MVSGeneral InformationRelease 3Document Number GC38-2032-00March 6, 1998"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eox02m05.pdf",
      "Title": "EOX02MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC38-2033-00",
      "FirstPage": "  BookManager READ/MVSGetting Started and Command SummaryRelease 3SC38-2033-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eox03m07.pdf",
      "Title": "BookManager READ/MVS V1R3: Displaying Online Books",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC38-2034-00",
      "FirstPage": "  BookManager READ/MVSDisplaying Online BooksRelease 3SC38-2034-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eox04m07.pdf",
      "Title": "EOX04MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC38-2035-00",
      "FirstPage": "  BookManager READ/MVSInstallation Planning and CustomizationRelease 3SC38-2035-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eoy04m05.pdf",
      "Title": "EOY04MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": " BookManager BUILD/MVSInstallation Planning and CustomizationRelease 2Document Number SC38-2037-0March 6, 1998"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eph3z100.pdf",
      "Title": "Library Server: Getting Started  V4R0.0",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GI11-9481-00",
      "FirstPage": "LibraryServer:GettingStartedGI11-9481-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ephm2m00.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC34-3105-00",
      "FirstPage": "IBMBookManagerBookServerforWorldWideWebforMVS/ESA:GettingStartedVersion2Release1SC34-3105-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ephm2m01.pdf",
      "Title": "EPHM2M00",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "   "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/epw1a103.pdf",
      "Title": "OS/390 FFST/MVS V1R2.0 Operations Guide",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8604-01",
      "FirstPage": "  FFST Operations GuideFFST/MVSFFST/VMSC31-8604-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eqa3cg00.pdf",
      "Title": "Debug Tool Version 3 Release 1 Customization Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC18-7174-00",
      "FirstPage": "DebugToolforz/OSandOS/390CustomizationGuideVersion3Release1SC18-7174-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eqa3cs00.pdf",
      "Title": "Debug Tool Version 3 Release 1 Commands Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC18-7187-00",
      "FirstPage": "DebugToolforz/OSandOS/390CommandsSummaryVersion3Release1SC18-7187-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eqa3cu00.pdf",
      "Title": "Debug Tool Utilities and Advanced Functions: Coverage Utility User\u0027s Guide and Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC18-7173-00",
      "FirstPage": "DebugToolUtilitiesandAdvancedFunctionsforz/OSandOS/390CoverageUtilityUser\u2019sGuideandMessagesVersion3Release1SC18-7173-00I"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eqa3rm00.pdf",
      "Title": "Debug Tool Version 3 Release 1 Reference and Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC18-7172-00",
      "FirstPage": "DebugToolforz/OSandOS/390ReferenceandMessagesVersion3Release1SC18-7172-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eqa3ug00.pdf",
      "Title": "Debug Tool Version 3 Release 1 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC18-7171-00",
      "FirstPage": "DebugToolforz/OSandOS/390User\u2019sGuideVersion3Release1SC18-7171-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erb2me00.pdf",
      "Title": "z/OS V2R1.0 RMF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2666-00",
      "FirstPage": "z/OSResourceMeasurementFacilityMessagesandCodesVersion2Release1SC34-2666-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erb2pg01.pdf",
      "Title": "z/OS V2R1.0 RMF Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2667-01",
      "FirstPage": "z/OSResourceMeasurementFacilityProgrammer\u0027sGuideVersion2Release1SC34-2667-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erb2ra01.pdf",
      "Title": "z/OS V2R1.0 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2665-01",
      "FirstPage": "z/OSResourceMeasurementFacilityReportAnalysisVersion2Release1SC34-2665-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erb2rs00.pdf",
      "Title": "z/OS V2R1.0 RMF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SX33-9034-00",
      "FirstPage": "z/OSResourceMeasurementFacilityReferenceSummaryVersion2Release1SX33-9034-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erb2ug01.pdf",
      "Title": "z/OS V2R1.0 RMF User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2664-01",
      "FirstPage": "z/OSResourceMeasurementFacilityUser\u0027sGuideVersion2Release1SC34-2664-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbdge00.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-6592-02",
      "FirstPage": "OS/390ResourceMeasurementFacilityDiagnosisGuideSC33-6592-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbnfe20.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1986-11",
      "FirstPage": "OS/390ResourceMeasurementFacilityNewsFLASHSC28-1986-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbpge10.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1952-05",
      "FirstPage": "OS/390ResourceMeasurementFacilityProgrammer\u2019sGuideSC28-1952-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbpme10.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1951-04",
      "FirstPage": "OS/390ResourceMeasurementFacilityPerformanceManagementGuideSC28-1951-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbree12.pdf",
      "Title": "OS/390 V2R10.0 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC28-1950-07",
      "FirstPage": "OS/390ResourceMeasurementFacilityReportAnalysisSC28-1950-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbuge12.pdf",
      "Title": "OS/390 V2R10.0 RMF User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC28-1949-07",
      "FirstPage": "OS/390ResourceMeasurementFacilityUser\u2019sGuideSC28-1949-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpg30.pdf",
      "Title": "z/OS V1R5.0 RMF Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7994-04",
      "FirstPage": "z/OSResource Measurement Facility Programmer\u2019s Guide SC33-7994-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzra41.pdf",
      "Title": "z/OS V1R6.0 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7991-09",
      "FirstPage": "z/OSResource Measurement Facility Report Analysis SC33-7991-09  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzrab0.pdf",
      "Title": "z/OS V1R13.0 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7991-19",
      "FirstPage": "z/OSResourceMeasurementFacilityReportAnalysisVersion1Release13SC33-7991-19\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euv2b200.pdf",
      "Title": "z/OS V2R1.0 Integrated Security Services Network Authentication Service Programing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6787-00",
      "FirstPage": "z/OSIntegratedSecurityServicesNetworkAuthenticationServiceProgrammingVersion2Release1SC23-6787-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euv2b300.pdf",
      "Title": "z/OS V2R1.0 Integrated Security Services Network Authentication Service Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6786-00",
      "FirstPage": "z/OSIntegratedSecurityServicesNetworkAuthenticationServiceAdministrationVersion2Release1SC23-6786-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvb3a20.pdf",
      "Title": "V1R4.0 Network Authentication Service Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-5926-02",
      "FirstPage": "z/OSSecurityServerNetworkAuthenticationServiceAdministrationSC24-5926-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmaa10.pdf",
      "Title": "EUVMAMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1584-05",
      "FirstPage": " OS/390\uF6DAIBM DCEAdministration Guide    SC28-1584-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmda10.pdf",
      "Title": "EUVMDMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1590-04",
      "FirstPage": "OS/390\uF6DAIBM DCEApplication Development ReferenceVolumes 1 and 2    SC28-1590-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmfa20.pdf",
      "Title": "EUVMFMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1583-06",
      "FirstPage": "OS/390\uF6DAIBM DCE Configuring and Getting Started    SC28-1583-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmga20.pdf",
      "Title": "EUVMGMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1591-07",
      "FirstPage": "OS/390\uF6DAIBM DCEMessages and Codes    SC28-1591-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmia10.pdf",
      "Title": "EUVMIMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1581-02",
      "FirstPage": " OS/390\uF6DAIBM DCEIntroduction    GC28-1581-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmka10.pdf",
      "Title": "EUVMKMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1585-04",
      "FirstPage": " OS/390\uF6DAIBM DCECommand Reference    SC28-1585-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmna05.pdf",
      "Title": "EUVMNMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1587-03",
      "FirstPage": " OS/390IBM DCEApplication Development Guide:Introduction and Style    SC28-1587-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmra10.pdf",
      "Title": "EUVMRMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1589-03",
      "FirstPage": " OS/390\uF6DAIBM DCEApplication Development Guide:Directory Services    SC28-1589-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmta20.pdf",
      "Title": "EUVMTMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1582-05",
      "FirstPage": "OS/390\uF6DAIBM DCEPlanning    SC28-1582-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmua10.pdf",
      "Title": "EUVMUMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1586-01",
      "FirstPage": "OS/390\uF6DAIBM DCEUser\u0027s Guide    SC28-1586-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ewx1c105.pdf",
      "Title": "EWXC1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1735-03",
      "FirstPage": " OS/390IBM LANRESConfiguration Filesand Commands    SC28-1735-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ewx1c205.pdf",
      "Title": "EWXC2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1736-03",
      "FirstPage": " OS/390IBM LANRESInstallation Guide    GC28-1736-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eyua1b01.pdf",
      "Title": "CICS Transaction Server: CICSPlex SM Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC34-6471-01",
      "FirstPage": "CICS Transaction Server for z/OSCICSPlex SM Messages and Codes Version 3 Release 1 GC34-6471-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b310.pdf",
      "Title": "z/OS V1R2.0 CS: IP Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8775-01",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationGuideVersion1Release2SC31-8775-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b341.pdf",
      "Title": "z/OS V1R6.0 CS: IP Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8775-06",
      "FirstPage": "z/OS Communications ServerIP Configuration Guide Version 1 Release 6 SC31-8775-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b351.pdf",
      "Title": "z/OS V1R7.0 Comm Svr: IP Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8775-08",
      "FirstPage": "z/OS Communications ServerIP Configuration Guide Version 1 Release 7 SC31-8775-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b451.pdf",
      "Title": "z/OS V1R7.0 Comm Svr: IP Configuration Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8776-09",
      "FirstPage": "z/OS Communications ServerIP Configuration Reference Version 1 Release 7 SC31-8776-09  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b481.pdf",
      "Title": "z/OS V1R10.0 Comm Svr: IP Configuration Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8776-15",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationReferenceVersion1Release10SC31-8776-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b950.pdf",
      "Title": "z/OS V1R7.0 Comm Svr: IP User\u0027s Guide and Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8780-05",
      "FirstPage": "z/OS Communications ServerIP User\u2019s Guide and Commands Version 1 Release 7 SC31-8780-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b970.pdf",
      "Title": "z/OS V1R9.0 Comm Svr: IP User\u0027s Guide and Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8780-07",
      "FirstPage": "z/OS Communications ServerIP User\u2019s Guide and Commands Version 1 Release 9  SC31-8780-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b9a1.pdf",
      "Title": "z/OS V1R13.0 Comm Svr: IP User\u0027s Guide and Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8780-11",
      "FirstPage": "z/OSCommunicationsServerIPUser\u0027sGuideandCommandsVersion1Release13SC31-8780-11\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1d370.pdf",
      "Title": "z/OS V1R9.0 Comm Svr: IP Programmer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8787-09",
      "FirstPage": "z/OS Communications ServerIP Programmer\u2019s Guide and Reference Version 1 Release 9  SC31-8787-09  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1d410.pdf",
      "Title": "z/OS V1R2.0 CS: IP Application Programming Interface Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8788-01",
      "FirstPage": "z/OSCommunicationsServerIPApplicationProgrammingInterfaceGuideVersion1Release2SC31-8788-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1d930.pdf",
      "Title": "z/OS V1R12.0 Comm Svr: SNA Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8829-03",
      "FirstPage": "z/OSCommunicationsServerSNAProgrammingVersion1Release12SC31-8829-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1g140.pdf",
      "Title": "z/OS V1R9.0 Comm Svr: IP CICS Sockets Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8807-04",
      "FirstPage": "z/OS Communications ServerIP CICS Sockets Guide Version 1 Release 9  SC31-8807-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b300.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3650-00",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationGuideVersion2Release1SC27-3650-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b303.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3650-03",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationGuideVersion2Release1SC27-3650-03\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b403.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Configuration Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3651-03",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationReferenceVersion2Release1SC27-3651-03\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b501.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Network Implementation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3672-01",
      "FirstPage": "z/OSCommunicationsServerSNANetworkImplementationGuideVersion2Release1SC27-3672-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b602.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Resource Definition Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3675-02",
      "FirstPage": "z/OSCommunicationsServerSNAResourceDefinitionReferenceVersion2Release1SC27-3675-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b702.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3673-02",
      "FirstPage": "z/OSCommunicationsServerSNAOperationVersion2Release1SC27-3673-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b801.pdf",
      "Title": "z/OS V2R1.0 Communications Server: Quick Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3665-01",
      "FirstPage": "z/OSCommunicationsServerQuickReferenceVersion2Release1SC27-3665-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b900.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP User\u0027s Guide and Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3662-00",
      "FirstPage": "z/OSCommunicationsServerIPUser\u0027sGuideandCommandsVersion2Release1SC27-3662-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c202.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP System Administrator\u0027s Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3661-02",
      "FirstPage": "z/OSCommunicationsServerIPSystemAdministrator\u0027sCommandsVersion2Release1SC27-3661-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c300.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Diagnosis Vol 1, Techniques and Procedures",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-3667-00",
      "FirstPage": "z/OSCommunicationsServerSNADiagnosisVolume1:TechniquesandProceduresVersion2Release1GC27-3667-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c401.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Diagnosis Vol 2, FFST Dumps and the VIT",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-3668-01",
      "FirstPage": "z/OSCommunicationsServerSNADiagnosisVolume2:FFSTDumpsandtheVITVersion2Release1GC27-3668-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c502.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-3652-02",
      "FirstPage": "z/OSCommunicationsServerIPDiagnosisGuideVersion2Release1GC27-3652-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c602.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3671-02",
      "FirstPage": "z/OSCommunicationsServerSNAMessagesVersion2Release1SC27-3671-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c700.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Messages Volume 1 (EZA)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3654-00",
      "FirstPage": "z/OSCommunicationsServerIPMessages:Volume1(EZA)Version2Release1SC27-3654-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c801.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Messages Volume 2 (EZB, EZD)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3655-01",
      "FirstPage": "z/OSCommunicationsServerIPMessages:Volume2(EZB,EZD)Version2Release1SC27-3655-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c900.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Messages Volume 3 (EZY)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3656-00",
      "FirstPage": "z/OSCommunicationsServerIPMessages:Volume3(EZY)Version2Release1SC27-3656-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d101.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Messages Volume 4 (EZZ, SNM)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3657-01",
      "FirstPage": "z/OSCommunicationsServerIPMessages:Volume4(EZZ,SNM)Version2Release1SC27-3657-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d203.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP and SNA Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3648-03",
      "FirstPage": "z/OSCommunicationsServerIPandSNACodesVersion2Release1SC27-3648-03\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d302.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Programmer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3659-02",
      "FirstPage": "z/OSCommunicationsServerIPProgrammer\u0027sGuideandReferenceVersion2Release1SC27-3659-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d400.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Sockets Application Programming Interface Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3660-00",
      "FirstPage": "z/OSCommunicationsServerIPSocketsApplicationProgrammingInterfaceGuideandReferenceVersion2Release1SC27-3660-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d700.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3666-00",
      "FirstPage": "z/OSCommunicationsServerSNACustomizationVersion2Release1SC27-3666-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d800.pdf",
      "Title": "z/OS V2R1.0 Communications Server: CMIP Services and Topology Agent Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3646-00",
      "FirstPage": "z/OSCommunicationsServerCMIPServicesandTopologyAgentGuideVersion2Release1SC27-3646-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d900.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3674-00",
      "FirstPage": "z/OSCommunicationsServerSNAProgrammingVersion2Release1SC27-3674-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2e100.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP IMS Sockets Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3653-00",
      "FirstPage": "z/OSCommunicationsServerIPIMSSocketsGuideVersion2Release1SC27-3653-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2e700.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Resource Definition Samples",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3676-00",
      "FirstPage": "z/OSCommunicationsServerSNAResourceDefinitionSamplesVersion2Release1SC27-3676-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2e800.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Programmer\u0027s LU 6.2 Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3670-00",
      "FirstPage": "z/OSCommunicationsServerSNAProgrammer\u0027sLU6.2ReferenceVersion2Release1SC27-3670-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2e900.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Programmer\u0027s LU 6.2 Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3669-00",
      "FirstPage": "z/OSCommunicationsServerSNAProgrammer\u0027sLU6.2GuideVersion2Release1SC27-3669-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2f100.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IPv6 Network and Appl Design Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3663-00",
      "FirstPage": "z/OSCommunicationsServerIPv6NetworkandApplicationDesignGuideVersion2Release1SC27-3663-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2f203.pdf",
      "Title": "z/OS V2R1.0 Communications Server: New Function Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-3664-03",
      "FirstPage": "z/OSCommunicationsServerNewFunctionSummaryVersion2Release1GC27-3664-03\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2f300.pdf",
      "Title": "z/OS V2R1.0 Communications Server: ACF/TAP Trace Analysis Handbook",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-3645-00",
      "FirstPage": "z/OSCommunicationsServerACF/TAPTraceAnalysisHandbookVersion2Release1GC27-3645-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2g100.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP CICS Sockets Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3649-00",
      "FirstPage": "z/OSCommunicationsServerIPCICSSocketsGuideVersion2Release1SC27-3649-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2g200.pdf",
      "Title": "z/OS V2R1.0 Communications Server: CSM Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3647-00",
      "FirstPage": "z/OSCommunicationsServerCSMGuideVersion2Release1SC27-3647-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2g300.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Network Print Facility",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3658-00",
      "FirstPage": "z/OSCommunicationsServerIPNetworkPrintFacilityVersion2Release1SC27-3658-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1aa2020.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC31-8514-03",
      "FirstPage": "OS/390SecureWayCommunicationsServerIPUser\u2019sGuideVersion2Release8GC31-8514-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1aa2032.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC31-8514-06",
      "FirstPage": "OS/390IBMCommunicationsServerIPUser\u2019sGuideVersion2Release10GC31-8514-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ab5001.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC31-8676-01",
      "FirstPage": "OS/390eNetworkCommunicationsServerHighSpeedAccessServicesUser\u2019sGuideVersion2Release6GC31-8676-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1af2100.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8575-00",
      "FirstPage": " OS/390 eNetwork Communications Server\u00C9\u00C2\u00D4 CSM GuideVersion 2 Release 5    SC31-8575-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1af4011.pdf",
      "Title": "OS/390 V2R10.0 IBM CS: IP Configuration Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8726-02",
      "FirstPage": "OS/390IBMCommunicationsServerIPConfigurationReferenceVersion2Release10SC31-8726-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1af7031.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8725-01",
      "FirstPage": "OS/390IBMCommunicationsServerIPConfigurationGuideVersion2Release10SC31-8725-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1af7032.pdf",
      "Title": "OS/390 IBM Communications Server: IP Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8725-02",
      "FirstPage": "OS/390IBMCommunicationsServerIPConfigurationGuideVersion2Release10SC31-8725-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ah1031.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8565-05",
      "FirstPage": "OS/390IBMCommunicationsServerSNAResourceDefinitionReferenceVersion2Release10SC31-8565-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ah2031.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8563-04",
      "FirstPage": "OS/390IBMCommunicationsServerSNANetworkImplementationGuideVersion2Release10SC31-8563-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ah8000.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8566-00",
      "FirstPage": "OS390eNetworkCommunicationsServerSNAResourceDefinitionSamplesVersion2Release5SC31-8566-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ai4200.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8577-00",
      "FirstPage": "OS/390eNetworkCommunicationsServerAnyNet:GuidetoSocketsoverSNAVersion2Release5SC31-8577-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1am1031.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8567-05",
      "FirstPage": "OS/390IBMCommunicationsServerSNAOperationVersion2Release10SC31-8567-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1am4031.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8569-05",
      "FirstPage": "OS/390IBMCommunicationsServerSNAMessagesVersion2Release10SC31-8569-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1am4231.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8570-05",
      "FirstPage": "OS/390IBMCommunicationsServerIPMessages:Volume2(EZB)Version2Release10SC31-8570-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ap1021.pdf",
      "Title": "OS/390 V2R10.0 IBM CS: SNA Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8573-03",
      "FirstPage": "OS/390IBMCommunicationsServerSNAProgrammingVersion2Release10SC31-8573-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ap2100.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8568-00",
      "FirstPage": " OS/390 eNetwork Communications Server\u00C9\u00C2\u00D4 SNA Programmers LU 6.2 ReferenceVersion 2 Release 5    SC31-8568-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ap6000.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8578-00",
      "FirstPage": "OS/390eNetworkCommunicationsServerAnyNet:GuidetoSNAoverTCP/IPVersion2Release5SC31-8578-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1aq0041.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SX75-0121-05",
      "FirstPage": "OS/390IBMCommunicationsServerQuickReferenceVersion2Release10SX75-0121-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ar1000.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC31-8619-00",
      "FirstPage": " OS/390 eNetwork Communications Server\u00C9\u00C2\u00D4 APPC Application Suite User\u0027s GuideVersion 2 Release 5    GC31-8619-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1au0011.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8576-03",
      "FirstPage": "OS/390IBMCommunicationsServerCMIPServicesandTopologyAgentGuideVersion2Release10SC31-8576-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ax1131.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8571-05",
      "FirstPage": "OS/390IBMCommunicationsServerIPandSNACodesVersion2Release10SC31-8571-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1gwte00.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "IBMWebTrafficExpressforMultiplatformsUser\u2019sGuideVersion1.0IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcx2d300.pdf",
      "Title": "z/OS V2R1.0 Distributed File Service Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6885-00",
      "FirstPage": "z/OSDistributedFileServiceMessagesandCodesVersion2Release1SC23-6885-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcx2d400.pdf",
      "Title": "z/OS V2R1.0 Distributed File Service SMB Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6886-00",
      "FirstPage": "z/OSDistributedFileServiceSMBAdministrationVersion2Release1SC23-6886-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcx2d500.pdf",
      "Title": "z/OS V2R1.0 Distributed File Service zFS Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-6887-00",
      "FirstPage": "z/OSDistributedFileServicezFSAdministrationVersion2Release1SA23-6887-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcxd5a40.pdf",
      "Title": "z/OS V1R6.0 Distributed File Service zFS Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-5989-04",
      "FirstPage": "z/OSDistributed File Service zSeries File System Administration SC24-5989-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcxm6a30.pdf",
      "Title": "IOEA1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1720-07",
      "FirstPage": "OS/390\uF6DAIBM Distributed File Service DFSAdministration Guide and Reference    SC28-1720-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcxm8a30.pdf",
      "Title": "IOEA3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1722-06",
      "FirstPage": "OS/390\uF6DAIBM Distributed File Service DFSConfiguring and Getting Started    SC28-1722-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcxm9a41.pdf",
      "Title": "Distributed File Service SMB Administration Guide and Reference [Word Pro - ioea6mst.lwp]",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5882-03",
      "FirstPage": "7;\u0017\u001B!\u0018\u00AE,Q[\\ZQJ]\\ML\b.QTM\b;MZ^QKM\b;5*)LUQVQ[\\ZI\\QWV\b/]QLM\bIVL\b:MNMZMVKM                                                   "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcxmaa40.pdf",
      "Title": "IOEA5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1724-07",
      "FirstPage": "OS/390\uF6DAIBM Distributed File ServiceMessages and Codes    SC28-1724-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fot1zo00.pdf",
      "Title": "z/OS V2.2 OpenSSH User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6806-00",
      "FirstPage": "z/OSz/OSOpenSSHUser\u0027sGuideVersion2Release2SC27-6806-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fot1zo01.pdf",
      "Title": "z/OS V2.2 OpenSSH User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6806-01",
      "FirstPage": "z/OSz/OS OpenSSH User\u0027s GuideVersion2 Release2SC27-6806-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fpra1a05.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC23-0460-09",
      "FirstPage": " VM Performance Reporting FacilityIBM User\u0027s Guide and ReferenceVersion 1 Release 2.2    SC23-0460-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fzaa2010.pdf",
      "Title": "KIJL0MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5848-01",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM TCP/IP Function Level 320User\u0027s GuideVersion 2 Release 4.0    SC24-5"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fzad3010.pdf",
      "Title": "KDPL0MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC24-5851-01",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM TCP/IP Function Level 320Diagnosis GuideVersion 2 Release 4.0    GC2"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fzae0010.pdf",
      "Title": "KILL0MST",
      "Author": "TERRYW  ",
      "Subject": "",
      "DocumentNumber": "SC24-5847-01",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM TCP/IP Function Level 320Planning and CustomizationVersion 2 Release"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fzam3010.pdf",
      "Title": "KINL0MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC24-5850-01",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM TCP/IP Function Level 320Messages and CodesVersion 2 Release 4.0    "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fzap4010.pdf",
      "Title": "KIML0MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5849-01",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM TCP/IP Function Level 320Programmer\u0027s ReferenceVersion 2 Release 4.0"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gim1a201.pdf",
      "Title": "ServerPac: Using the Installation Dialog",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2278-01",
      "FirstPage": "ServerPacUsingtheInstallationDialogDialogLevel:26SA23-2278-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gim1a212.pdf",
      "Title": "ServerPac: Using the Installation Dialog",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2278-04",
      "FirstPage": "ServerPacUsingtheInstallationDialogDialogLevel:27SA23-2278-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gim3cm01.pdf",
      "Title": "SMP/E V3R6.0 for z/OS V2R1.0 Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2275-01",
      "FirstPage": "SMP/Eforz/OSCommandsSA23-2275-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gim3md01.pdf",
      "Title": "SMP/E V3R6.0 for z/OS V2R1.0 Messages, Codes, and Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0883-01",
      "FirstPage": "SMP/Eforz/OSMessages,Codes,andDiagnosisGA32-0883-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gim3rf01.pdf",
      "Title": "SMP/E V3R6.0 for z/OS V2R1.0 Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2276-01",
      "FirstPage": "SMP/Eforz/OSReferenceSA23-2276-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gim3ug01.pdf",
      "Title": "SMP/E V3R6.0 for z/OS V2R1 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2277-01",
      "FirstPage": "SMP/Eforz/OSUser\u0027sGuideSA23-2277-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimcmd71.pdf",
      "Title": "GIMC4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1805-06",
      "FirstPage": "OS/390IBM SMP/E Commands    SC28-1805-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimdgd71.pdf",
      "Title": "GIMC1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1737-06",
      "FirstPage": "OS/390IBM SMP/E Diagnosis Guide    SC28-1737-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimmsg72.pdf",
      "Title": "GIMC2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1738-07",
      "FirstPage": "OS/390IBM SMP/E Messages and Codes    SC28-1738-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimpkg71.pdf",
      "Title": "GIMPRMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC23-3695-09",
      "FirstPage": " Software DeliveryIBM Standard Packaging Rules forMVS-Based Products    SC23-3695-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimpkg80.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC23-3695-10",
      "FirstPage": " Software DeliveryIBM Standard Packaging Rules forz/OS-Based Products    SC23-3695-10"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimref71.pdf",
      "Title": "GIMC5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1806-06",
      "FirstPage": "OS/390IBM SMP/E Reference    SC28-1806-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimrfr42.pdf",
      "Title": "SMP/E V3R5.0 for z/OS V1R12.0 Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7772-14",
      "FirstPage": "SMP/Eforz/OSReferenceSA22-7772-14\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimugd71.pdf",
      "Title": "GIMC3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1740-06",
      "FirstPage": "OS/390IBM SMP/E User\u0027s Guide    SC28-1740-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimusr40.pdf",
      "Title": "SMP/E V3R5.0 for z/OS V1R10.0 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7773-13",
      "FirstPage": "IBM SMP/E for z/OSUser\u2019s Guide    SA22-7773-13  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimusr41.pdf",
      "Title": "SMP/E V3R5.0 for z/OS V1R11.0 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7773-14",
      "FirstPage": "IBM SMP/E for z/OSUser\u2019s Guide    SA22-7773-14  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimusr42.pdf",
      "Title": "SMP/E V3R5.0 for z/OS V1R12.0 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7773-15",
      "FirstPage": "SMP/Eforz/OSUser\u0027sGuideSA22-7773-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimusr51.pdf",
      "Title": "SMP/E V3R6.0 for z/OS V1R13.0 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7773-17",
      "FirstPage": "SMP/Eforz/OSUser\u0027sGuideSA22-7773-17\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gldaga30.pdf",
      "Title": "EUVMEMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5861-05",
      "FirstPage": "OS/390\uF6DAIBM SecureWay\uF6DA Security ServerLDAP ServerAdministration and Usage Guide    SC24-5861-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/glp2a100.pdf",
      "Title": "z/OS V2R1.0 IBM Tivoli Directory Server Client Programming for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2295-00",
      "FirstPage": "z/OSIBMTivoliDirectoryServerClientProgrammingforz/OSVersion2Release1SA23-2295-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/glp2a200.pdf",
      "Title": "z/OS V2R1.0 IBM Tivoli Directory Server Administration and Use for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-6788-00",
      "FirstPage": "z/OSIBMTivoliDirectoryServerAdministrationandUseforz/OSVersion2Release1SA23-6788-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/glp2a300.pdf",
      "Title": "z/OS V2R1.0 IBM Tivoli Directory Server Plug-in Reference for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA76-0169-00",
      "FirstPage": "z/OSIBMTivoliDirectoryServerPlug-inReferenceforz/OSVersion2Release1SA76-0169-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/glp2a400.pdf",
      "Title": "z/OS V2R1.0 IBM Tivoli Directory Server Messages and Codes for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2296-00",
      "FirstPage": "z/OSIBMTivoliDirectoryServerMessagesandCodesforz/OSVersion2Release1SA23-2296-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gos1a601.pdf",
      "Title": "GOSA6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1995-01",
      "FirstPage": " OS/390Place graphic in thisarea.  Outline iskeyline only.  DO NOT PRINT.IBM SOMobjectsObject Services    SC28-1995-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gos1b201.pdf",
      "Title": "GOSB2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1997-01",
      "FirstPage": " OS/390IBM SOMobjectsProgrammer\u0027s Reference,Volume 1    SC28-1997-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gos1b501.pdf",
      "Title": "GOSB5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1851-01",
      "FirstPage": " OS/390IBM SOMobjectsConfiguration andAdministration Guide    GC28-1851-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gos1b601.pdf",
      "Title": "GOSB6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA22-7248-01",
      "FirstPage": " OS/390IBM SOMobjectsGetting Started    GA22-7248-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gos1b701.pdf",
      "Title": "GOSB7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1996-01",
      "FirstPage": " OS/390IBM SOMobjectsMessages, Codes and Diagnosis    SC28-1996-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gsk2aa00.pdf",
      "Title": "z/OS V2R1.0 System SSL Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7495-00",
      "FirstPage": "z/OSCryptographicServicesSystemSecureSocketsLayerProgrammingVersion2Release1SC14-7495-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gxl3z101.pdf",
      "Title": "z/OS V2R1.0 XML System Services User\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0681-01",
      "FirstPage": "z/OSXMLSystemServicesUser\u0027sGuideandReferenceVersion2Release1SA38-0681-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/h1981606.pdf",
      "Title": "IBM Compiler and Library for REXX on System z V1 R4 User\u2122s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SH19-8160-06",
      "FirstPage": "IBMCompilerandLibraryforREXXonSystemzUser\u2019sGuideandReferenceVersion1Release4SH19-8160-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/h1981793.pdf",
      "Title": "IBM Compiler and Library for REXX on System z V1 R4 Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SH19-8179-03",
      "FirstPage": "IBMCompilerandLibraryforREXXonSystemzDiagnosisGuideVersion1Release4SH19-8179-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1a130.pdf",
      "Title": "HASA1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1796-06",
      "FirstPage": "OS/390IBM JES2 Messages    GC28-1796-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1a230.pdf",
      "Title": "HASA2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1790-05",
      "FirstPage": "OS/390IBM JES2 Commands    GC28-1790-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1a330.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1791-07",
      "FirstPage": "OS/390JES2InitializationandTuningGuideSC28-1791-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1a431.pdf",
      "Title": "HASA4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1792-07",
      "FirstPage": "OS/390IBM JES2 Initialization and Tuning Reference    SC28-1792-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1a730.pdf",
      "Title": "HASA7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1086-06",
      "FirstPage": "OS/390IBM JES2 Diagnosis    SY28-1086-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1a810.pdf",
      "Title": "HASA8MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1794-03",
      "FirstPage": "OS/390IBM JES2 Introduction    GC28-1794-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1b320.pdf",
      "Title": "HASB3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GX22-0041-06",
      "FirstPage": "OS/390IBM JES2 Commands Summary    GX22-0041-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1c120.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1793-04",
      "FirstPage": "OS/390JES2InstallationExitsSC28-1793-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1c231.pdf",
      "Title": "HASC2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1795-08",
      "FirstPage": "OS/390IBM JES2 Macros    SC28-1795-08"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1d130.pdf",
      "Title": "HASD1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1096-07",
      "FirstPage": "OS/390IBM JES2 Data Areas,Volume 1 ($ALINDEX - $EVT)    SY28-1096-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1d230.pdf",
      "Title": "HASD2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1097-07",
      "FirstPage": "OS/390IBM JES2 Data Areas,Volume 2 ($FCLWORK - $OUTWORK)    SY28-1097-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1d330.pdf",
      "Title": "HASD3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1098-07",
      "FirstPage": "OS/390IBM JES2 Data Areas,Volume 3 ($PADDR - $XRQ)    SY28-1098-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has1e140.pdf",
      "Title": "HASE1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1797-07",
      "FirstPage": "OS/390IBM JES2 Migration    GC28-1797-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2a620.pdf",
      "Title": "Network Job Entry (NJE) Formats and Protocols",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7539-02",
      "FirstPage": "Network Job EntryFormats and Protocols SA22-7539-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2a900.pdf",
      "Title": "HAS2A900",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-0997-00",
      "FirstPage": " z/OSIBM JES2 Data AreasVolume 1    GA32-0997-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2b200.pdf",
      "Title": "HAS2B200",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-0998-00",
      "FirstPage": " z/OSIBM JES2 Data AreasVolume 2    GA32-0998-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2c800.pdf",
      "Title": "HAS2C800",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-0999-00",
      "FirstPage": " z/OSIBM JES2 Data AreasVolume 3    GA32-0999-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2d400.pdf",
      "Title": "HAS2D400",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-1000-00",
      "FirstPage": " z/OSIBM JES2 Data AreasVolume 4    GA32-1000-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2f500.pdf",
      "Title": "HAS2F500",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-1001-00",
      "FirstPage": " z/OSIBM JES2 Data AreasVolume 5    GA32-1001-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2q000.pdf",
      "Title": "z/OS V2R1.0 JES2 Macros",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0996-00",
      "FirstPage": "z/OSJES2MacrosVersion2Release1SA32-0996-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2r900.pdf",
      "Title": "z/OS V2R1.0 JES2 Installation Exits",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0995-00",
      "FirstPage": "z/OSJES2InstallationExitsVersion2Release1SA32-0995-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2s800.pdf",
      "Title": "z/OS V2R1.0 JES2 Introduction",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0994-00",
      "FirstPage": "z/OSJES2IntroductionVersion2Release1SA32-0994-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2t700.pdf",
      "Title": "z/OS V2R1.0 JES2 Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0993-00",
      "FirstPage": "z/OSJES2DiagnosisVersion2Release1GA32-0993-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2u600.pdf",
      "Title": "z/OS V2R1.0 JES2 Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0992-00",
      "FirstPage": "z/OSJES2InitializationandTuningReferenceVersion2Release1SA32-0992-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2v500.pdf",
      "Title": "z/OS V2R1.0 JES2 Initialization and Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0991-00",
      "FirstPage": "z/OSJES2InitializationandTuningGuideVersion2Release1SA32-0991-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2w400.pdf",
      "Title": "z/OS V2R1.0 JES2 Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0990-00",
      "FirstPage": "z/OSJES2CommandsVersion2Release1SA32-0990-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2x301.pdf",
      "Title": "z/OS V2R1.0 JES2 Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0989-01",
      "FirstPage": "z/OSJES2MessagesVersion2Release1SA32-0989-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2y200.pdf",
      "Title": "Network Job Entry (NJE) Formats and Protocols",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0672-00",
      "FirstPage": "z/OSNetworkJobEntry(NJE)FormatsandProtocolsVersion2Release1SA38-0672-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2z100.pdf",
      "Title": "z/OS JES Application Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0987-00",
      "FirstPage": "z/OSJESApplicationProgrammingVersion2Release1SA32-0987-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsb4b10.pdf",
      "Title": "z/VM: CP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6119-02",
      "FirstPage": "z/VMCP Messages and Codes version 5 release 2 GC24-6119-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsb4c20.pdf",
      "Title": "z/VM: CP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6177-04",
      "FirstPage": "z/VMCPMessagesandCodesVersion6Release3GC24-6177-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsb5c20.pdf",
      "Title": "z/VM V6.3 CMS and REXX/VM Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6161-02",
      "FirstPage": "z/VMCMSandREXX/VMMessagesandCodesVersion6Release3GC24-6161-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsb5c31.pdf",
      "Title": "z/VM V6.4 CMS and REXX/VM Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6161-04",
      "FirstPage": "z/VMCMS and REXX/VM Messages and CodesVersion6 Release4GC24-6161-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsb6c20.pdf",
      "Title": "z/VM V6.3 Other Components Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6207-02",
      "FirstPage": "z/VMOtherComponentsMessagesandCodesVersion6Release3GC24-6207-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsc6a10.pdf",
      "Title": "HCPA3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC24-5837-01",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM VMSES/E Introductionand ReferenceVersion 2 Release 4.0    GC24-5837-"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsc6b10.pdf",
      "Title": "z/VM: VMSES/E Introduction and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6130-01",
      "FirstPage": "z/VMVMSES/E Introduction and Reference version 5 release 2 GC24-6130-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsc6c10.pdf",
      "Title": "z/VM: VMSES/E Introduction and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6243-01",
      "FirstPage": "z/VMVMSES/EIntroductionandReferenceversion6release2GC24-6243-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsc6c20.pdf",
      "Title": "z/VM V6.3 VMSES/E Introduction and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6243-02",
      "FirstPage": "z/VMVMSES/EIntroductionandReferenceVersion6Release3GC24-6243-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsc9b20.pdf",
      "Title": "z/VM: Connectivity",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6080-04",
      "FirstPage": "z/VMConnectivity version 5 release 3  SC24-6080-04  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsc9c10.pdf",
      "Title": "z/VM: Connectivity",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6174-02",
      "FirstPage": "z/VMConnectivityversion6release2SC24-6174-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd0b10.pdf",
      "Title": "z/VM: CMS Application Development Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6069-01",
      "FirstPage": "z/VMCMS Application Development Guide version 5 release 2 SC24-6069-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd0c10.pdf",
      "Title": "z/VM: CMS Application Development Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6162-01",
      "FirstPage": "z/VMCMSApplicationDevelopmentGuideversion6release2SC24-6162-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd1a10.pdf",
      "Title": "DMSA4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5762-03",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM CMS Application Development ReferenceVersion 2 Release 4.0    SC24-5"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd2a10.pdf",
      "Title": "DMSA5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5763-01",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM CMS Application Development Guidefor Assembler Version 2 Release 4.0"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd2b00.pdf",
      "Title": "z/VM: CMS Application Development Guide for Assembler",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6070-00",
      "FirstPage": "z/VMCMS Application Development Guide for Assembler Version 5 Release 1.0 SC24-6070-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd2c10.pdf",
      "Title": "z/VM: CMS Application Development Guide for Assembler",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6163-01",
      "FirstPage": "z/VMCMSApplicationDevelopmentGuideforAssemblerversion6release2SC24-6163-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd7c20.pdf",
      "Title": "z/VM V6.3 CMS User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6173-02",
      "FirstPage": "z/VMCMSUser\u0027sGuideVersion6Release3SC24-6173-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd8b10.pdf",
      "Title": "z/VM: CMS Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6073-01",
      "FirstPage": "z/VMCMS Commands and Utilities Reference version 5 release 2 SC24-6073-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd8c20.pdf",
      "Title": "z/VM V6.3 CMS Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6166-03",
      "FirstPage": "z/VMCMSCommandsandUtilitiesReferenceVersion6Release3SC24-6166-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd9c00.pdf",
      "Title": "z/VM: XEDIT User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6245-00",
      "FirstPage": "z/VMXEDITUser\u2019sGuideversion6release1SC24-6245-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse0c00.pdf",
      "Title": "z/VM: XEDIT Commands and Macros Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6244-00",
      "FirstPage": "z/VMXEDITCommandsandMacrosReferenceversion6release1SC24-6244-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse2a10.pdf",
      "Title": "DMSB1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5770-03",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM REXX/VM ReferenceVersion 2 Release 4.0    SC24-5770-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse2c30.pdf",
      "Title": "z/VM V6.4 REXX/VM Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6221-02",
      "FirstPage": "z/VMREXX/VM ReferenceVersion6 Release4SC24-6221-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4a11.pdf",
      "Title": "HCPB7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5773-04",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM CP Command and Utility ReferenceVersion 2 Release 4.0    SC24-5773-0"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4b11.pdf",
      "Title": "z/VM: CP Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6081-03",
      "FirstPage": "z/VMCP Commands and Utilities Reference version 5 release 2 SC24-6081-03  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4b20.pdf",
      "Title": "z/VM: CP Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6081-04",
      "FirstPage": "z/VMCP Commands and Utilities Reference version 5 release 3  SC24-6081-04  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4b21.pdf",
      "Title": "z/VM: CP Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6081-05",
      "FirstPage": "z/VMCP Commands and Utilities Reference version 5 release 3  SC24-6081-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4b31.pdf",
      "Title": "z/VM: CP Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6081-07",
      "FirstPage": "z/VMCP Commands and Utilities Reference version 5 release 4  SC24-6081-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4c10.pdf",
      "Title": "z/VM: CP Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6175-02",
      "FirstPage": "z/VMCPCommandsandUtilitiesReferenceversion6release2SC24-6175-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4c20.pdf",
      "Title": "z/VM V6.3 CP Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6175-04",
      "FirstPage": "z/VMCPCommandsandUtilitiesReferenceVersion6Release3SC24-6175-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4c21.pdf",
      "Title": "z/VM V6.3 CP Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6175-05",
      "FirstPage": "z/VMCPCommandsandUtilitiesReferenceVersion6Release3SC24-6175-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse5a10.pdf",
      "Title": "HCPB4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5760-03",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM CP Programming ServicesVersion 2 Release 4.0    SC24-5760-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse5b11.pdf",
      "Title": "z/VM: CP Programming Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6084-02",
      "FirstPage": "z/VMCP Programming Services version 5 release 2 SC24-6084-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse5b21.pdf",
      "Title": "z/VM: CP Programming Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6084-04",
      "FirstPage": "z/VMCP Programming Services version 5 release 3  SC24-6084-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse6a11.pdf",
      "Title": "HCPA5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5750-04",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM Planning and AdministrationVersion 2 Release 4.0    SC24-5750-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse7b10.pdf",
      "Title": "z/VM: Running Guest Operating Systems",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6115-01",
      "FirstPage": "z/VMRunning Guest Operating Systems version 5 release 2 SC24-6115-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse7b30.pdf",
      "Title": "z/VM: Running Guest Operating Systems",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6115-03",
      "FirstPage": "z/VMRunning Guest Operating Systems version 5 release 4  SC24-6115-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse8b11.pdf",
      "Title": "z/VM: Virtual Machine Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6128-02",
      "FirstPage": "z/VMVirtual Machine Operation version 5 release 2 SC24-6128-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse9a10.pdf",
      "Title": "HCPA8MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC24-5839-01",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM Conversion Guide and NotebookVersion 2 Release 4.0    GC24-5839-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf1a10.pdf",
      "Title": "HCPA4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC24-5838-01",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM Service GuideVersion 2 Release 4.0    GC24-5838-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf1c20.pdf",
      "Title": "z/VM V6.3 Service Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6247-01",
      "FirstPage": "z/VMServiceGuideVersion6Release3GC24-6247-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf1c30.pdf",
      "Title": "z/VM V6.4 Service Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6247-02",
      "FirstPage": "z/VMService GuideVersion6 Release4GC24-6247-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf2a10.pdf",
      "Title": "HCPB1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5758-02",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM System OperationVersion 2 Release 4.0    SC24-5758-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf2b10.pdf",
      "Title": "z/VM: System Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6121-01",
      "FirstPage": "z/VMSystem Operation version 5 release 2 SC24-6121-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf2b20.pdf",
      "Title": "z/VM: System Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6121-02",
      "FirstPage": "z/VMSystem Operation version 5 release 3  SC24-6121-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf2b30.pdf",
      "Title": "z/VM: System Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6121-03",
      "FirstPage": "z/VMSystem Operation version 5 release 4  SC24-6121-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf3a10.pdf",
      "Title": "HCPC0MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC24-5841-01",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM System Messages and CodesVersion 2 Release 4.0    GC24-5841-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf8a21.pdf",
      "Title": "z/VM: General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-5944-01",
      "FirstPage": "z/VMGeneralInformationVersion3Release1.0GC24-5944-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf8b11.pdf",
      "Title": "z/VM: General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6095-04",
      "FirstPage": "z/VM built on IBM Virtualization TechnologyGeneral Information version 5 release 2 GC24-6095-04  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf8b22.pdf",
      "Title": "z/VM: General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6095-07",
      "FirstPage": "z/VM built on IBM Virtualization TechnologyGeneral Information version 5 release 3  GC24-6095-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf8c10.pdf",
      "Title": "z/VM: General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6193-02",
      "FirstPage": "z/VMGeneralInformationversion6release2GC24-6193-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf8c25.pdf",
      "Title": "z/VM V6.3 General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6193-10",
      "FirstPage": "z/VMGeneral InformationVersion6 Release3GC24-6193-10IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf8c30.pdf",
      "Title": "z/VM V6.4 General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6193-12",
      "FirstPage": "z/VMGeneral InformationVersion6 Release4GC24-6193-12IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf9c10.pdf",
      "Title": "z/VM: Migration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6201-02",
      "FirstPage": "z/VMMigrationGuideversion6release2GC24-6201-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0b10.pdf",
      "Title": "z/VM: CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6083-02",
      "FirstPage": "z/VMCP Planning and Administration version 5 release 2 SC24-6083-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0b11.pdf",
      "Title": "z/VM: CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6083-03",
      "FirstPage": "z/VMCP Planning and Administration version 5 release 2 SC24-6083-03  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0b21.pdf",
      "Title": "z/VM: CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6083-05",
      "FirstPage": "z/VMCP Planning and Administration version 5 release 3  SC24-6083-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0b30.pdf",
      "Title": "z/VM: CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6083-06",
      "FirstPage": "z/VMCP Planning and Administration version 5 release 4  SC24-6083-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0c10.pdf",
      "Title": "z/VM: CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6178-02",
      "FirstPage": "z/VMCPPlanningandAdministrationversion6release2SC24-6178-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0c20.pdf",
      "Title": "z/VM V6.3 CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6178-05",
      "FirstPage": "z/VMCPPlanningandAdministrationVersion6Release3SC24-6178-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0c30.pdf",
      "Title": "z/VM V6.4 CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6178-10",
      "FirstPage": "z/VMCP Planning and AdministrationVersion6 Release4SC24-6178-10IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0c33.pdf",
      "Title": "z/VM V6.4 CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6178-13",
      "FirstPage": "z/VMCP Planning and AdministrationVersion6 Release4SC24-6178-13IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg2b10.pdf",
      "Title": "z/VM: CMS Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6078-01",
      "FirstPage": "z/VMCMS Planning and Administration version 5 release 2 SC24-6078-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg4a00.pdf",
      "Title": "z/VM: Saved Segments Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6056-00",
      "FirstPage": "z/VM\u2122SavedSegmentsPlanningandAdministrationVersion4Release3.0SC24-6056-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg4b10.pdf",
      "Title": "z/VM: Saved Segments Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6116-01",
      "FirstPage": "z/VMSaved Segments Planning and Administration version 5 release 2 SC24-6116-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg4c20.pdf",
      "Title": "z/VM V6.3 Saved Segments Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6229-02",
      "FirstPage": "z/VMSavedSegmentsPlanningandAdministrationVersion6Release3SC24-6229-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg5b10.pdf",
      "Title": "HCSG5B10",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-6076-01",
      "FirstPage": " z/VMIBM CMS Pipelines Referenceversion 5 release 2    SC24-6076-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsh1b10.pdf",
      "Title": "HCSH1B10",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-6077-01",
      "FirstPage": " z/VMIBM CMS Pipelines User\u2019s Guideversion 5 release 2    SC24-6077-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi1a20.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5952-00",
      "FirstPage": " z/VMIBM PerformanceVersion 3 Release 1.0    SC24-5952-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi1a60.pdf",
      "Title": "Performance",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-5999-03",
      "FirstPage": "z/VMPerformanceVersion4Release4.0SC24-5999-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi1b00.pdf",
      "Title": "z/VM: Performance",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6109-00",
      "FirstPage": "z/VMPerformance Version 5 Release 1.0 SC24-6109-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi1b10.pdf",
      "Title": "z/VM: Performance",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6109-01",
      "FirstPage": "z/VMPerformance version 5 release 2 SC24-6109-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi1b11.pdf",
      "Title": "z/VM: Performance",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6109-02",
      "FirstPage": "z/VMPerformance version 5 release 2 SC24-6109-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi1b21.pdf",
      "Title": "z/VM: Performance",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6109-04",
      "FirstPage": "z/VMPerformance version 5 release 3  SC24-6109-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi1c21.pdf",
      "Title": "z/VM V6.3 Performance",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6208-05",
      "FirstPage": "z/VMPerformanceVersion6Release3SC24-6208-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi1c23.pdf",
      "Title": "z/VM V6.3 Performance",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6208-07",
      "FirstPage": "z/VMPerformanceVersion6 Release3SC24-6208-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi3c10.pdf",
      "Title": "z/VM: CMS File Pool Planning, Administration, and Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6167-01",
      "FirstPage": "z/VMCMSFilePoolPlanning,Administration,andOperationversion6release2SC24-6167-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsj0c30.pdf",
      "Title": "PIPUG",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-6252-00",
      "FirstPage": " z/VM\u00C9\u00C2\u00D4 CMS PipelinesUser\u2019s Guide and ReferenceVersion 6 Release 4    SC24-6252-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk1a10.pdf",
      "Title": "HCPC6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SX24-5290-03",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM Quick ReferenceVersion 2 Release 4.0    SX24-5290-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk2b01.pdf",
      "Title": "z/VM: Guide for Automated Installation and Service",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6099-01",
      "FirstPage": "z/VMGuide for Automated Installation and Service Version 5 Release 1 GC24-6099-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk2b10.pdf",
      "Title": "z/VM: Guide for Automated Installation and Service",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6099-02",
      "FirstPage": "z/VMGuide for Automated Installation and Service version 5 release 2 GC24-6099-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk2b30.pdf",
      "Title": "z/VM: Guide for Automated Installation and Service",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6099-05",
      "FirstPage": "z/VMGuide for Automated Installation and Service version 5 release 4  GC24-6099-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk2c00.pdf",
      "Title": "z/VM: Guide for Automated Installation and Service",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6197-00",
      "FirstPage": "z/VMGuideforAutomatedInstallationandServiceversion6release1GC24-6197-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk2c10.pdf",
      "Title": "z/VM: Installation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6246-00",
      "FirstPage": "z/VM \uFFFD\uFFFD\uFFFD Installation Guide version6release2 GC24-6246-00 "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk2c20.pdf",
      "Title": "z/VM V6.3 Installation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6246-01",
      "FirstPage": "z/VMInstallationGuideVersion6Release3GC24-6246-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk2c31.pdf",
      "Title": "z/VM V6.4 Installation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6246-04",
      "FirstPage": "z/VMInstallation GuideVersion6 Release4GC24-6246-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk3a00.pdf",
      "Title": "z/VM: TCP/IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6023-00",
      "FirstPage": "z/VM\u2122TCP/IPLevel420DiagnosisGuideVersion4Release2.0GC24-6023-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk3a10.pdf",
      "Title": "z/VM: TCP/IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6023-01",
      "FirstPage": "z/VM\u2122TCP/IPLevel430DiagnosisGuideVersion4Release3.0GC24-6023-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk3a20.pdf",
      "Title": "z/VM: TCP/IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6023-02",
      "FirstPage": "z/VMTCP/IPDiagnosisGuideVersion4Release4.0GC24-6023-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk3b00.pdf",
      "Title": "z/VM: TCP/IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6123-00",
      "FirstPage": "z/VMTCP/IP Diagnosis Guide Version 5 Release 1.0 GC24-6123-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk3b10.pdf",
      "Title": "z/VM: TCP/IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6123-01",
      "FirstPage": "z/VMTCP/IP Diagnosis Guide version 5 release 2 GC24-6123-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk3b20.pdf",
      "Title": "z/VM: TCP/IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6123-02",
      "FirstPage": "z/VMTCP/IP Diagnosis Guide version 5 release 3  GC24-6123-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk3b31.pdf",
      "Title": "z/VM: TCP/IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6123-04",
      "FirstPage": "z/VMTCP/IP Diagnosis Guide version 5 release 4  GC24-6123-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk3c01.pdf",
      "Title": "z/VM: TCP/IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6235-01",
      "FirstPage": "z/VMTCP/IPDiagnosisGuideversion6release1GC24-6235-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk3c10.pdf",
      "Title": "z/VM: TCP/IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6235-02",
      "FirstPage": "z/VMTCP/IPDiagnosisGuideversion6release2GC24-6235-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk3c20.pdf",
      "Title": "z/VM V6.3 TCP/IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6235-04",
      "FirstPage": "z/VMTCP/IPDiagnosisGuideVersion6Release3GC24-6235-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk3c30.pdf",
      "Title": "z/VM V6.4 TCP/IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6235-05",
      "FirstPage": "z/VMTCP/IP Diagnosis GuideVersion6 Release4GC24-6235-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk4a00.pdf",
      "Title": "z/VM: TCP/IP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6022-00",
      "FirstPage": "z/VM\u2122TCP/IPLevel420MessagesandCodesVersion4Release2.0GC24-6022-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk4a10.pdf",
      "Title": "z/VM: TCP/IP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6022-01",
      "FirstPage": "z/VM\u2122TCP/IPLevel430MessagesandCodesVersion4Release3.0GC24-6022-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk4a20.pdf",
      "Title": "z/VM: TCP/IP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6022-03",
      "FirstPage": "z/VMTCP/IPMessagesandCodesVersion4Release4.0GC24-6022-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk4b00.pdf",
      "Title": "z/VM: TCP/IP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6124-00",
      "FirstPage": "z/VMTCP/IP Messages and Codes Version 5 Release 1.0 GC24-6124-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk4b10.pdf",
      "Title": "z/VM: TCP/IP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6124-01",
      "FirstPage": "z/VMTCP/IP Messages and Codes version 5 release 2 GC24-6124-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk4b20.pdf",
      "Title": "z/VM: TCP/IP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6124-02",
      "FirstPage": "z/VMTCP/IP Messages and Codes version 5 release 3  GC24-6124-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk4b31.pdf",
      "Title": "z/VM: TCP/IP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6124-04",
      "FirstPage": "z/VMTCP/IP Messages and Codes version 5 release 4  GC24-6124-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk4c01.pdf",
      "Title": "z/VM: TCP/IP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6237-01",
      "FirstPage": "z/VMTCP/IPMessagesandCodesversion6release1GC24-6237-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk4c10.pdf",
      "Title": "z/VM: TCP/IP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6237-02",
      "FirstPage": "z/VMTCP/IPMessagesandCodesversion6release2GC24-6237-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk4c20.pdf",
      "Title": "z/VM V6.3 TCP/IP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6237-04",
      "FirstPage": "z/VMTCP/IPMessagesandCodesVersion6Release3GC24-6237-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk4c30.pdf",
      "Title": "z/VM V6.4 TCP/IP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6237-08",
      "FirstPage": "z/VMTCP/IP Messages and CodesVersion6 Release4GC24-6237-08IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk5a00.pdf",
      "Title": "z/VM: TCP/IP Level 420 Planning and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6019-00",
      "FirstPage": "z/VM\u2122TCP/IPLevel420PlanningandCustomizationVersion4Release2.0SC24-6019-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk5a10.pdf",
      "Title": "z/VM: TCP/IP Planning and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6019-01",
      "FirstPage": "z/VM\u2122TCP/IPLevel430PlanningandCustomizationVersion4Release3.0SC24-6019-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk5a20.pdf",
      "Title": "z/VM: TCP/IP Planning and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6019-02",
      "FirstPage": "z/VMTCP/IPPlanningandCustomizationVersion4Release4.0SC24-6019-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk5b00.pdf",
      "Title": "z/VM: TCP/IP Planning and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6125-00",
      "FirstPage": "z/VMTCP/IP Planning and Customization Version 5 Release 1.0 SC24-6125-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk5b10.pdf",
      "Title": "z/VM: TCP/IP Planning and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6125-01",
      "FirstPage": "z/VMTCP/IP Planning and Customization version 5 release 2 SC24-6125-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk5b20.pdf",
      "Title": "z/VM: TCP/IP Planning and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6125-03",
      "FirstPage": "z/VMTCP/IP Planning and Customization version 5 release 3  SC24-6125-03  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk5b31.pdf",
      "Title": "z/VM: TCP/IP Planning and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6125-05",
      "FirstPage": "z/VMTCP/IP Planning and Customization version 5 release 4  SC24-6125-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk5c01.pdf",
      "Title": "z/VM: TCP/IP Planning and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6238-01",
      "FirstPage": "z/VMTCP/IPPlanningandCustomizationversion6release1SC24-6238-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk5c10.pdf",
      "Title": "z/VM: TCP/IP Planning and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6238-02",
      "FirstPage": "z/VMTCP/IPPlanningandCustomizationversion6release2SC24-6238-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk5c20.pdf",
      "Title": "z/VM V6.3 TCP/IP Planning and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6238-04",
      "FirstPage": "z/VMTCP/IPPlanningandCustomizationVersion6Release3SC24-6238-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk5c30.pdf",
      "Title": "z/VM V6.4 TCP/IP Planning and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6238-08",
      "FirstPage": "z/VMTCP/IP Planning and CustomizationVersion6 Release4SC24-6238-08IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk6a00.pdf",
      "Title": "z/VM: TCP/IP Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6021-00",
      "FirstPage": "z/VM\u2122TCP/IPLevel420Programmer\u2019sReferenceVersion4Release2.0SC24-6021-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk6a10.pdf",
      "Title": "z/VM: TCP/IP Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6021-01",
      "FirstPage": "z/VM\u2122TCP/IPLevel430Programmer\u2019sReferenceVersion4Release3.0SC24-6021-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk6a20.pdf",
      "Title": "z/VM: TCP/IP Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6021-02",
      "FirstPage": "z/VMTCP/IPProgrammer\u2019sReferenceVersion4Release4.0SC24-6021-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk6b00.pdf",
      "Title": "z/VM: TCP/IP Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6126-00",
      "FirstPage": "z/VMTCP/IP Programmer\u2019s Reference Version 5 Release 1.0 SC24-6126-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk6b20.pdf",
      "Title": "z/VM: TCP/IP Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6126-01",
      "FirstPage": "z/VMTCP/IP Programmer\u2019s Reference version 5 release 3  SC24-6126-01  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk6b30.pdf",
      "Title": "z/VM: TCP/IP Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6126-02",
      "FirstPage": "z/VMTCP/IP Programmer\u2019s Reference version 5 release 4  SC24-6126-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk6c01.pdf",
      "Title": "z/VM: TCP/IP Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6239-01",
      "FirstPage": "z/VMTCP/IPProgrammer\u0027sReferenceversion6release1SC24-6239-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk6c10.pdf",
      "Title": "z/VM: TCP/IP Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6239-02",
      "FirstPage": "z/VMTCP/IPProgrammer\u0027sReferenceversion6release2SC24-6239-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk6c20.pdf",
      "Title": "z/VM V6.3 TCP/IP Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6239-03",
      "FirstPage": "z/VMTCP/IPProgrammer\u0027sReferenceVersion6Release3SC24-6239-03\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk6c30.pdf",
      "Title": "z/VM V6.4 TCP/IP Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6239-05",
      "FirstPage": "z/VMTCP/IP Programmer\u0027s ReferenceVersion6 Release4SC24-6239-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk7a00.pdf",
      "Title": "z/VM: TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6020-00",
      "FirstPage": "z/VM\u2122TCP/IPLevel420User\u2019sGuideVersion4Release2.0SC24-6020-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk7a10.pdf",
      "Title": "z/VM: TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6020-01",
      "FirstPage": "z/VM\u2122TCP/IPLevel430User\u2019sGuideVersion4Release3.0SC24-6020-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk7a20.pdf",
      "Title": "z/VM: TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6020-02",
      "FirstPage": "z/VMTCP/IPUser\u2019sGuideVersion4Release4.0SC24-6020-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk7b00.pdf",
      "Title": "z/VM: TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6127-00",
      "FirstPage": "z/VMTCP/IP User\u2019s Guide Version 5 Release 1.0 SC24-6127-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk7b10.pdf",
      "Title": "z/VM: TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6127-01",
      "FirstPage": "z/VMTCP/IP User\u2019s Guide version 5 release 2 SC24-6127-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk7b20.pdf",
      "Title": "z/VM: TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6127-03",
      "FirstPage": "z/VMTCP/IP User\u2019s Guide version 5 release 3  SC24-6127-03  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk7b30.pdf",
      "Title": "z/VM: TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6127-04",
      "FirstPage": "z/VMTCP/IP User\u2019s Guide version 5 release 4  SC24-6127-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk7c01.pdf",
      "Title": "z/VM: TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6240-01",
      "FirstPage": "z/VMTCP/IPUser\u0027sGuideversion6release1SC24-6240-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk7c10.pdf",
      "Title": "z/VM: TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6240-02",
      "FirstPage": "z/VMTCP/IPUser\u0027sGuideversion6release2SC24-6240-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk7c20.pdf",
      "Title": "z/VM V6.3 TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6240-04",
      "FirstPage": "z/VMTCP/IPUser\u0027sGuideVersion6Release3SC24-6240-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk7c30.pdf",
      "Title": "z/VM V6.4 TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6240-07",
      "FirstPage": "z/VMTCP/IP User\u0027s GuideVersion6 Release4SC24-6240-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk8b20.pdf",
      "Title": "z/VM: TCP/IP LDAP Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6140-00",
      "FirstPage": "z/VMTCP/IP LDAP Administration Guide version 5 release 3  SC24-6140-00  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk8b30.pdf",
      "Title": "z/VM: TCP/IP LDAP Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6140-01",
      "FirstPage": "z/VMTCP/IP LDAP Administration Guide version 5 release 4  SC24-6140-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk8c00.pdf",
      "Title": "z/VM: TCP/IP LDAP Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6236-00",
      "FirstPage": "z/VMTCP/IPLDAPAdministrationGuideversion6release1SC24-6236-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk8c10.pdf",
      "Title": "z/VM: TCP/IP LDAP Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6236-01",
      "FirstPage": "z/VMTCP/IPLDAPAdministrationGuideversion6release2SC24-6236-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk8c20.pdf",
      "Title": "z/VM V6.3 TCP/IP LDAP Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6236-02",
      "FirstPage": "z/VMTCP/IPLDAPAdministrationGuideVersion6Release3SC24-6236-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk8c30.pdf",
      "Title": "z/VM V6.4 TCP/IP LDAP Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6236-03",
      "FirstPage": "z/VMTCP/IP LDAP Administration GuideVersion6 Release4SC24-6236-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl1a20.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-6027-02",
      "FirstPage": " z/VM\uF6DBIBM Performance Reporting FacilityFunction Level 410Version 4 Release 3.0    SC24-6027-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl3b30.pdf",
      "Title": "z/VM: Directory Maintenance Facility Tailoring and Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6135-04",
      "FirstPage": "z/VMDirectory Maintenance Facility Tailoring and Administration Guide version 5 release 4  SC24-6135-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl4b30.pdf",
      "Title": "z/VM: Directory Maintenance Facility Commands Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6133-05",
      "FirstPage": "z/VMDirectory Maintenance Facility Commands Reference version 5 release 4  SC24-6133-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl4c10.pdf",
      "Title": "z/VM: Directory Maintenance Facility Commands Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6188-02",
      "FirstPage": "z/VMDirectoryMaintenanceFacilityCommandsReferenceversion6release2SC24-6188-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl7b10.pdf",
      "Title": "z/VM: Performance Toolkit",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6136-02",
      "FirstPage": "z/VMPerformance Toolkit version 5 release 2 SC24-6136-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl8c23.pdf",
      "Title": "z/VM V6.3 Systems Management Application Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6234-08",
      "FirstPage": "z/VMSystemsManagementApplicationProgrammingVersion6Release3SC24-6234-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl8c25.pdf",
      "Title": "z/VM V6.3 Systems Management Application Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6234-10",
      "FirstPage": "z/VMSystems ManagementApplication ProgrammingVersion6 Release3SC24-6234-10IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl8c31.pdf",
      "Title": "z/VM V6.4 Systems Management Application Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6234-12",
      "FirstPage": "z/VMSystems ManagementApplication ProgrammingVersion6 Release4SC24-6234-12IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl8c32.pdf",
      "Title": "z/VM V6.4 Systems Management Application Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6234-13",
      "FirstPage": "z/VMSystems ManagementApplication ProgrammingVersion6 Release4SC24-6234-13IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl9c30.pdf",
      "Title": "z/VM V6.4 Glossary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6195-05",
      "FirstPage": "z/VMGlossaryVersion6 Release4GC24-6195-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsm7c30.pdf",
      "Title": "z/VM V6.4 Performance Toolkit Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6209-07",
      "FirstPage": "z/VMPerformance Toolkit GuideVersion6 Release4SC24-6209-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcso2c22.pdf",
      "Title": "Enabling z/VM for OpenStack",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6249-03",
      "FirstPage": "z/VMEnabling z/VM for OpenStack(Support for OpenStack Juno Release)Version6 Release3SC24-6249-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcso4c20.pdf",
      "Title": "z/VM V6.3 Enabling z/VM for OpenStack (Support for OpenStack Liberty Release)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6251-00",
      "FirstPage": "z/VMEnabling z/VM for OpenStack(Support for OpenStack Liberty Release)Version6 Release3SC24-6251-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcso4c30.pdf",
      "Title": "z/VM V6.4 Enabling z/VM for OpenStack (Support for OpenStack Liberty Release)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6251-01",
      "FirstPage": "z/VMEnabling z/VM for OpenStack(Support for OpenStack Liberty Release)Version6 Release4SC24-6251-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcso5c30.pdf",
      "Title": "z/VM V6.4 Enabling z/VM for OpenStack (Support for OpenStack Newton Release)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6253-00",
      "FirstPage": "z/VMEnabling z/VM for OpenStack(Support for OpenStack Newton Release)Version6 Release4SC24-6253-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsp2b10.pdf",
      "Title": "z/VM: OpenExtensions User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6108-01",
      "FirstPage": "z/VMOpenExtensions User\u2019s Guide version 5 release 2 SC24-6108-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsp6a10.pdf",
      "Title": "HCPE9MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5672-01",
      "FirstPage": " Virtual Machine/Enterprise Systems ArchitectureIBM CP Exit CustomizationVersion 2 Release 4.0    SC24-5672-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcss0b30.pdf",
      "Title": "z/VM: Secure Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6158-00",
      "FirstPage": "z/VMSecure Configuration Guide version 5 release 4  SC24-6158-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsx0b00.pdf",
      "Title": "z/VM: Getting Started with Linux on zSeries",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6096-00",
      "FirstPage": "z/VMGetting Started with Linux on zSeries Version 5 Release 1.0 SC24-6096-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsx0b10.pdf",
      "Title": "z/VM: Getting Started with Linux on System z9 and zSeries",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6096-01",
      "FirstPage": "z/VMGetting Started with Linux on System z9 and zSeries version 5 release 2 SC24-6096-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsx0b20.pdf",
      "Title": "z/VM: Getting Started with Linux on System z",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6096-02",
      "FirstPage": "z/VMGetting Started with Linux on System z version 5 release 3  SC24-6096-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsx0c10.pdf",
      "Title": "z/VM: Getting Started with Linux on System z",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6194-01",
      "FirstPage": "z/VMGettingStartedwithLinuxonSystemzversion6release2SC24-6194-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hlcrug21.pdf",
      "Title": "IBM Softcopy Reader User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-3164-21",
      "FirstPage": "IBM\u00AEIBM Softcopy Reader User\u2019s Guide Version 3 Release 8  SC34-3164-21  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1025860.pdf",
      "Title": "APOLLO",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI10-2586-00",
      "FirstPage": " IBMProgram Directory forCICS Transaction Server for z/OSV3.1.0Program Number5655-M15FMID HCI6400for Use withz/OS  Docum"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1191800.pdf",
      "Title": "HADB510",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9180-00",
      "FirstPage": " IBMProgram Directory forIBM Enterprise COBOL for z/OSV05.01.00Program Number5655-W32FMIDs HADB510, JADB511, JADB512, JA"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1345340.pdf",
      "Title": "H270510",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI13-4534-00",
      "FirstPage": " IBMProgram Directory forIBM Enterprise PL/I for z/OSV05.01.00Program Number5655-PL5FMIDs H270510, J270511for Use withz/"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1345341.pdf",
      "Title": "H270520",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI13-4534-01",
      "FirstPage": "IBMProgram Directory forIBM Enterprise PL/I for z/OSV05.02.00Program Number5655-PL5FMIDs H270520, J270521for Use withz/O"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1345342.pdf",
      "Title": "H270530",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI13-4534-02",
      "FirstPage": " IBMProgram Directory forIBM Enterprise PL/I for z/OSV05.03.00Program Number5655-PL5FMIDs H270530, J270531for Use withz/"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1345360.pdf",
      "Title": "Enterprise PL/I for z/OS Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GI13-4536-00",
      "FirstPage": "Enterprise PL/I for z/OSProgramming GuideVersion5 Release1GI13-4536-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1345361.pdf",
      "Title": "Enterprise PL/I for z/OS Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GI13-4536-01",
      "FirstPage": "Enterprise PL/I for z/OSProgramming GuideVersion 5 Release 2 Modification 4GI13-4536-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1347040.pdf",
      "Title": "H270520E",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI13-4704-00",
      "FirstPage": "IBMProgram Directory forIBM Enterprise PL/I Value Unit Edition for z/OSV05.02.00Program Number5655-EPLFMIDs H270520, J27"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1347041.pdf",
      "Title": "H270530E",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI13-4704-01",
      "FirstPage": " IBMProgram Directory forIBM Enterprise PL/I Value Unit Edition for z/OSV05.03.00Program Number5655-EPLFMIDs H270530, J2"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat1a140.pdf",
      "Title": "IATA1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1799-10",
      "FirstPage": "OS/390IBM JES3 Migration    GC28-1799-10"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat1a230.pdf",
      "Title": "IATA2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GX22-0042-09",
      "FirstPage": "OS/390IBM JES3 Commands Summary    GX22-0042-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat1a340.pdf",
      "Title": "IATA3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1090-09",
      "FirstPage": "OS/390IBM JES3 Diagnosis    SY28-1090-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat1a640.pdf",
      "Title": "IATA6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1802-09",
      "FirstPage": "OS/390IBM JES3 Initialization and Tuning Guide    SC28-1802-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat1a710.pdf",
      "Title": "IATA7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1808-02",
      "FirstPage": " OS/390IBM JES3 Introduction    GC28-1808-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat1a840.pdf",
      "Title": "IATA8MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1803-07",
      "FirstPage": "OS/390IBM JES3 Initialization and Tuning Reference    SC28-1803-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat1b140.pdf",
      "Title": "IATB1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1089-09",
      "FirstPage": "OS/390IBM JES3 Customization    SY28-1089-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat1b240.pdf",
      "Title": "IATB2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1804-09",
      "FirstPage": "OS/390IBM JES3 Messages    GC28-1804-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat1b340.pdf",
      "Title": "IATB3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1798-09",
      "FirstPage": "OS/390IBM JES3 Commands    GC28-1798-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat1b430.pdf",
      "Title": "IATB4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1092-07",
      "FirstPage": "OS/390IBM JES3 Diagnosis Reference    SY28-1092-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat1d130.pdf",
      "Title": "IATD1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1179-08",
      "FirstPage": "OS/390IBM JES3 Data Areas,Volume 1 (IATYARL - IATYIDVS)    SY28-1179-08"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2c300.pdf",
      "Title": "IAT2C300",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-1013-00",
      "FirstPage": " z/OSJES3Data AreasVolume 3Document Number GA32-1013-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2f800.pdf",
      "Title": "z/OS V2R1.0 JES3 Diagnosis Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-1009-00",
      "FirstPage": "z/OSJES3DiagnosisReferenceVersion2Release1GA32-1009-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2g700.pdf",
      "Title": "z/OS V2R1.0 JES3 Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1008-00",
      "FirstPage": "z/OSJES3CommandsVersion2Release1SA32-1008-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2h600.pdf",
      "Title": "z/OS V2R1.0 JES3 Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1007-00",
      "FirstPage": "z/OSJES3MessagesVersion2Release1SA32-1007-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2j500.pdf",
      "Title": "z/OS V2R1.0 JES3 Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1006-00",
      "FirstPage": "z/OSJES3CustomizationVersion2Release1SA32-1006-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2k400.pdf",
      "Title": "z/OS V2R1.0 JES3 Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1005-00",
      "FirstPage": "z/OSJES3InitializationandTuningReferenceVersion2Release1SA32-1005-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2m300.pdf",
      "Title": "z/OS V2R1.0 JES3 Introduction",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1004-00",
      "FirstPage": "z/OSJES3IntroductionVersion2Release1SA32-1004-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2n200.pdf",
      "Title": "z/OS V2R1.0 JES3 Initialization and Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1003-00",
      "FirstPage": "z/OSJES3InitializationandTuningGuideVersion2Release1SA32-1003-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2p100.pdf",
      "Title": "z/OS V2R1.0 JES3 Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-1002-00",
      "FirstPage": "z/OSJES3DiagnosisVersion2Release1GA32-1002-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2q100.pdf",
      "Title": "IAT2A100",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-1011-00",
      "FirstPage": " z/OSJES3Data AreasVolume 1Document Number GA32-1011-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2r200.pdf",
      "Title": "IAT2B200",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-1012-00",
      "FirstPage": " z/OSJES3Data AreasVolume 2Document Number GA32-1012-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ibm3dg01.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC27-1459-01",
      "FirstPage": " Enterprise PL/I for z/OS and OS/390IBM Diagnosis GuideVersion 3 Release 2.0    GC27-1459-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ibm3lr10.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC27-1460-02",
      "FirstPage": " Enterprise PL/I for z/OS and OS/390IBM Language ReferenceVersion 3 Release 2.0    SC27-1460-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ibm3mc10.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC27-1461-02",
      "FirstPage": " Enterprise PL/I for z/OS and OS/390IBM Messages and CodesVersion 3 Release 2.0    SC27-1461-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ibm3mg01.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC27-1458-01",
      "FirstPage": " Enterprise PL/I for z/OS and OS/390IBM Compiler and Run-Time Migration GuideVersion 3 Release 2    GC27-1458-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ibm3pg10.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC27-1457-02",
      "FirstPage": " Enterprise PL/I for z/OS and OS/390IBM Programming GuideVersion 3 Release 2.0    SC27-1457-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ibmsm110.pdf",
      "Title": "P41M1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-9474-01",
      "FirstPage": "IBM VisualAge PL/I for OS/390IBM Compiler and Run-Time Migration GuideVersion 2 Release 2.1    SC26-9474-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1ca10.pdf",
      "Title": "z/OS V1R6.0 DFSORT Application Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7523-01",
      "FirstPage": "z/OSDFSORT Application Programming Guide SC26-7523-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1ca40.pdf",
      "Title": "z/OS V1R11.0 DFSORT Application Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7523-04",
      "FirstPage": "z/OSDFSORTApplicationProgrammingGuideSC26-7523-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1ca61.pdf",
      "Title": "z/OS V1R13.0 DFSORT Application Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7523-07",
      "FirstPage": "z/OSDFSORTApplicationProgrammingGuideSC26-7523-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1cg40.pdf",
      "Title": "z/OS V1R11.0 DFSORT: Getting Started",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7527-04",
      "FirstPage": "z/OSDFSORT:GettingStartedSC26-7527-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1cg60.pdf",
      "Title": "z/OS V1R13.0 DFSORT: Getting Started",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7527-06",
      "FirstPage": "z/OSDFSORT:GettingStartedSC26-7527-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1ci11.pdf",
      "Title": "z/OS V1R10.0 DFSORT Installation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7524-02",
      "FirstPage": "z/OSDFSORT Installation and Customization   SC26-7524-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1ci20.pdf",
      "Title": "z/OS V1R12.0 DFSORT Installation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7524-03",
      "FirstPage": "z/OSDFSORTInstallationandCustomizationSC26-7524-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1cm40.pdf",
      "Title": "z/OS V1R11.0 DFSORT Messages, Codes and Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7525-04",
      "FirstPage": "z/OSDFSORTMessages,CodesandDiagnosisGuideSC26-7525-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1cm60.pdf",
      "Title": "z/OS V1R13.0 DFSORT Messages, Codes and Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7525-06",
      "FirstPage": "z/OSDFSORTMessages,CodesandDiagnosisGuideSC26-7525-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1ct10.pdf",
      "Title": "z/OS V1R10.0 DFSORT Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7526-01",
      "FirstPage": "z/OSDFSORT Tuning Guide    SC26-7526-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1ct20.pdf",
      "Title": "z/OS V1R12.0 DFSORT Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7526-02",
      "FirstPage": "z/OSDFSORTTuningGuideSC26-7526-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2ca00.pdf",
      "Title": "z/OS V2R1.0 DFSORT Application Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6878-00",
      "FirstPage": "z/OSDFSORTApplicationProgrammingGuideVersion2Release1SC23-6878-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2ca10.pdf",
      "Title": "z/OS V2R2 DFSORT Application Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6878-01",
      "FirstPage": "z/OSDFSORTApplicationProgrammingGuideVersion2Release2SC23-6878-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2ca11.pdf",
      "Title": "z/OS V2R2 DFSORT Application Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6878-02",
      "FirstPage": "z/OSDFSORT Application Programming GuideVersion2 Release2SC23-6878-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2cg00.pdf",
      "Title": "z/OS V2R1.0 DFSORT: Getting Started",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6880-00",
      "FirstPage": "z/OSDFSORT:GettingStartedVersion2Release1SC23-6880-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2cg10.pdf",
      "Title": "z/OS V2R2 DFSORT: Getting Started",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6880-01",
      "FirstPage": "z/OSDFSORT:GettingStartedVersion2Release2SC23-6880-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2ci00.pdf",
      "Title": "z/OS V2R1.0 DFSORT Installation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6881-00",
      "FirstPage": "z/OSDFSORTInstallationandCustomizationVersion2Release1SC23-6881-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2ci10.pdf",
      "Title": "z/OS V2R2 DFSORT Installation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6881-01",
      "FirstPage": "z/OSDFSORTInstallationandCustomizationVersion2Release2SC23-6881-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2cm00.pdf",
      "Title": "z/OS V2R1.0 DFSORT Messages, Codes and Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6879-00",
      "FirstPage": "z/OSDFSORTMessages,CodesandDiagnosisGuideVersion2Release1SC23-6879-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2cm10.pdf",
      "Title": "z/OS V2R2 DFSORT Messages, Codes and Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6879-01",
      "FirstPage": "z/OSDFSORTMessages,CodesandDiagnosisGuideVersion2Release2SC23-6879-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2ct00.pdf",
      "Title": "z/OS V2R1.0 DFSORT Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6882-00",
      "FirstPage": "z/OSDFSORTTuningGuideVersion2Release1SC23-6882-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2ct10.pdf",
      "Title": "z/OS V2R2 DFSORT Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6882-01",
      "FirstPage": "z/OSDFSORTTuningGuideVersion2Release2SC23-6882-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iceca108.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-4035-20",
      "FirstPage": "DFSORTApplicationProgrammingGuideRelease14SC33-4035-20IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iceca109.pdf",
      "Title": "DFSORT R14 Application Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-4035-21",
      "FirstPage": "DFSORTApplicationProgrammingGuideRelease14SC33-4035-21\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/icecg204.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-4109-08",
      "FirstPage": "DFSORTGettingStartedwithDFSORTRelease14SC26-4109-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iceci106.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-4034-19",
      "FirstPage": "DFSORTInstallationandCustomizationRelease14SC33-4034-19IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/icecm107.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-7050-04",
      "FirstPage": "DFSORTMessages,CodesandDiagnosisGuideRelease14SC26-7050-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/icecr114.pdf",
      "Title": "DFSORT Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SX33-8001-14",
      "FirstPage": "DFSORTReferenceSummaryRelease14SX33-8001-14\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a120.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1917-07",
      "FirstPage": "OS/390SecureWaySecurityServerRACFGeneralUser\u2019sGuideSC28-1917-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a221.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1913-08",
      "FirstPage": "OS/390SecureWaySecurityServerRACFSystemProgrammer\u2019sGuideSC28-1913-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a321.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1914-08",
      "FirstPage": "OS/390SecureWaySecurityServerRACFMacrosandInterfacesSC28-1914-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a421.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1919-08",
      "FirstPage": "OS/390SecureWaySecurityServerRACFCommandLanguageReferenceSC28-1919-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a510.pdf",
      "Title": "ICHA5MST",
      "Author": "Paola Coda",
      "Subject": "",
      "DocumentNumber": "GC28-1912-06",
      "FirstPage": " OS/390IBM Security Server (RACF)Introduction    GC28-1912-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a520.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1912-07",
      "FirstPage": "OS/390SecureWaySecurityServerRACFIntroductionGC28-1912-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a621.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1918-08",
      "FirstPage": "OS/390SecureWaySecurityServerRACFMessagesandCodesSC28-1918-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a721.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1915-08",
      "FirstPage": "OS/390SecureWaySecurityServerRACFSecurityAdministrator\u2019sGuideSC28-1915-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a820.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1916-07",
      "FirstPage": "OS/390SecureWaySecurityServerRACFAuditor\u2019sGuideSC28-1916-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1b221.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY27-2639-08",
      "FirstPage": "OS/390SecureWaySecurityServerRACFDiagnosisGuideSY27-2639-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1c421.pdf",
      "Title": "ICHC4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY27-2640-08",
      "FirstPage": "OS/390IBM SecureWay Security Server RACFData Areas    SY27-2640-08"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1c610.pdf",
      "Title": "ICHC6MST",
      "Author": "Paola Coda",
      "Subject": "",
      "DocumentNumber": "GC28-1922-06",
      "FirstPage": " OS/390IBM Security ServerExternal Security Interface(RACROUTE) Macro Reference    GC28-1922-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1c620.pdf",
      "Title": "ICHC6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1922-07",
      "FirstPage": "OS/390IBM SecureWay Security ServerExternal Security Interface(RACROUTE) Macro Reference    GC28-1922-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1d121.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1921-08",
      "FirstPage": "OS/390SecureWaySecurityServerRACFCallableServicesGC28-1921-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1m121.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1920-08",
      "FirstPage": "OS/390SecureWaySecurityServerRACFMigrationGC28-1920-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a100.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF General User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2298-00",
      "FirstPage": "z/OSSecurityServerRACFGeneralUser\u0027sGuideVersion2Release1SA23-2298-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a200.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF System Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2287-00",
      "FirstPage": "z/OSSecurityServerRACFSystemProgrammer\u0027sGuideVersion2Release1SA23-2287-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a300.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF Macros and Interfaces",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2288-00",
      "FirstPage": "z/OSSecurityServerRACFMacrosandInterfacesVersion2Release1SA23-2288-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a400.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF Command Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2292-00",
      "FirstPage": "z/OSSecurityServerRACFCommandLanguageReferenceVersion2Release1SA23-2292-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a600.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2291-00",
      "FirstPage": "z/OSSecurityServerRACFMessagesandCodesVersion2Release1SA23-2291-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a700.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF Security Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2289-00",
      "FirstPage": "z/OSSecurityServerRACFSecurityAdministrator\u0027sGuideVersion2Release1SA23-2289-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a800.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF Auditor\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2290-00",
      "FirstPage": "z/OSSecurityServerRACFAuditor\u0027sGuideVersion2Release1SA23-2290-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2b200.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0886-00",
      "FirstPage": "z/OSSecurityServerRACFDiagnosisGuideVersion2Release1GA32-0886-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2c400.pdf",
      "Title": "ICH2C400",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-0885-00",
      "FirstPage": "z/OSIBM Security Server RACFData Areas    GA32-0885-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2c600.pdf",
      "Title": "z/OS V2R1.0 Security Server RACROUTE Macro Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2294-00",
      "FirstPage": "z/OSSecurityServerRACROUTEMacroReferenceVersion2Release1SA23-2294-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2d100.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF Callable Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2293-00",
      "FirstPage": "z/OSSecurityServerRACFCallableServicesVersion2Release1SA23-2293-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza330.pdf",
      "Title": "z/OS V1R4.0 Security Server RACF Macros and Interfaces",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7682-03",
      "FirstPage": "z/OSSecurityServerRACFMacrosandInterfacesSA22-7682-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza460.pdf",
      "Title": "z/OS V1R7.0 Security Server RACF Command Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7687-08",
      "FirstPage": "z/OSSecurity Server RACF Command Language Reference   SA22-7687-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza780.pdf",
      "Title": "z/OS V1R9.0 Security Server RACF Security Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7683-11",
      "FirstPage": "z/OSSecurity Server RACF Security Administrator\u2019s Guide    SA22-7683-11  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza7a0.pdf",
      "Title": "z/OS V1R11.0 Security Server RACF Security Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7683-13",
      "FirstPage": "z/OSSecurityServerRACFSecurityAdministrator\u2019sGuideSA22-7683-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza7b0.pdf",
      "Title": "z/OS V1R12.0 Security Server RACF Security Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7683-14",
      "FirstPage": "z/OSSecurityServerRACFSecurityAdministrator\u0027sGuideSA22-7683-14\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza7c0.pdf",
      "Title": "z/OS V1R13.0 Security Server RACF Security Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7683-15",
      "FirstPage": "z/OSSecurityServerRACFSecurityAdministrator\u0027sGuideSA22-7683-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza8b0.pdf",
      "Title": "z/OS V1R12.0 Security Server RACF Auditor\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7684-12",
      "FirstPage": "z/OSSecurityServerRACFAuditor\u0027sGuideSA22-7684-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichzd180.pdf",
      "Title": "z/OS V1R9.0 Security Server RACF Callable Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7691-11",
      "FirstPage": "z/OSSecurity Server RACF Callable Services   SA22-7691-11  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ick4020f.pdf",
      "Title": "Device Support Facilities User\u0027s Guide and Reference, Release 17",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC35-0033-32",
      "FirstPage": "Device Support FacilitiesUser\u2019s Guide and Reference Release 17 GC35-0033-32  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ick4020n.pdf",
      "Title": "ICKDSF R17 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC35-0033-40",
      "FirstPage": "DeviceSupportFacilities(ICKDSF)User\u0027sGuideandReferenceRelease17GC35-0033-40\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1a121.pdf",
      "Title": "IEAA1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1764-09",
      "FirstPage": "OS/390IBM MVS Programming: AuthorizedAssembler Services Reference, Volume 1(ALESERV-DYNALLOC)    GC28-1764-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1a241.pdf",
      "Title": "IEAA2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1765-12",
      "FirstPage": "OS/390IBM MVS Programming: AuthorizedAssembler Services Reference, Volume 2(ENFREQ-IXGWRITE)    GC28-1765-12"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1a242.pdf",
      "Title": "OS/390 V2R10.0 MVS Auth Assm Services Reference ENF-IXG",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1765-13",
      "FirstPage": "OS/390MVSProgramming:AuthorizedAssemblerServicesReference,Volume2(ENFREQ-IXGWRITE)GC28-1765-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1a331.pdf",
      "Title": "IEAA3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1766-08",
      "FirstPage": "OS/390IBM MVS Programming: AuthorizedAssembler Services Reference, Volume 3(LLACOPY-SDUMPX)    GC28-1766-08"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1a421.pdf",
      "Title": "IEAA4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1767-09",
      "FirstPage": "OS/390IBM MVS Programming: AuthorizedAssembler Services Reference, Volume 4(SETFRR-WTOR)    GC28-1767-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1a511.pdf",
      "Title": "IEAA5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1769-05",
      "FirstPage": "OS/390IBM MVS Programming: ExtendedAddressability Guide    GC28-1769-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1a631.pdf",
      "Title": "IEAA6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1762-09",
      "FirstPage": "OS/390IBM MVS Programming: Assembler ServicesGuide    GC28-1762-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1a741.pdf",
      "Title": "IEAA7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1910-11",
      "FirstPage": "OS/390IBM MVS Programming: Assembler ServicesReference    GC28-1910-11"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1a841.pdf",
      "Title": "IEAA8MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1763-11",
      "FirstPage": "OS/390IBM MVS Programming: AuthorizedAssembler Services Guide    GC28-1763-11"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1a842.pdf",
      "Title": "OS/390 V2R10.0 MVS Auth Assembler Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1763-12",
      "FirstPage": "OS/390MVSProgramming:AuthorizedAssemblerServicesGuideGC28-1763-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1b530.pdf",
      "Title": "IEAB5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1758-07",
      "FirstPage": "OS/390IBM MVS JCL User\u0027s Guide    GC28-1758-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1b540.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1758-08",
      "FirstPage": "OS/390MVSJCLUser\u2019sGuideGC28-1758-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1b640.pdf",
      "Title": "IEAB6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1757-09",
      "FirstPage": "OS/390IBM MVS JCL Reference    GC28-1757-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1c112.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1768-07",
      "FirstPage": "OS/390MVSProgramming:CallableServicesforHigh-LevelLanguagesGC28-1768-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1c320.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1775-05",
      "FirstPage": "OS/390MVSProgramming:WritingTransactionProgramsforAPPC/MVSGC28-1775-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1c409.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1807-06",
      "FirstPage": "OS/390MVSPlanning:APPC/MVSManagementGC28-1807-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1c540.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1754-09",
      "FirstPage": "OS/390MVSInteractiveProblemControlSystem(IPCS)CommandsGC28-1754-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1c611.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1756-05",
      "FirstPage": "OS/390MVSInteractiveProblemControlSystem(IPCS)User\u2019sGuideGC28-1756-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1c721.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1755-06",
      "FirstPage": "OS/390MVSInteractiveProblemControlSystem(IPCS)CustomizationGC28-1755-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1d140.pdf",
      "Title": "IEAD1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1164-09",
      "FirstPage": "OS/390IBM MVS Data Areas,Volume 1 (ABEP - DALT)    SY28-1164-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1d142.pdf",
      "Title": "IEAD1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1164-11",
      "FirstPage": "OS/390IBM MVS Data Areas,Volume 1 (ABEP - DALT)    SY28-1164-11"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1d240.pdf",
      "Title": "IEAD2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1165-09",
      "FirstPage": "OS/390IBM MVS Data Areas,Volume 2 (DCCB - ITZYRETC)    SY28-1165-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1d242.pdf",
      "Title": "IEAD2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1165-11",
      "FirstPage": "OS/390IBM MVS Data Areas,Volume 2 (DCCB - ITZYRETC)    SY28-1165-11"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1d342.pdf",
      "Title": "IEAD3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1166-11",
      "FirstPage": "OS/390IBM MVS Data Areas,Volume 3 (IVT - RCWK)    SY28-1166-11"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1d440.pdf",
      "Title": "IEAD4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1167-09",
      "FirstPage": "OS/390IBM MVS Data Areas,Volume 4 (RD - SRRA)    SY28-1167-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1d442.pdf",
      "Title": "IEAD4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1167-11",
      "FirstPage": "OS/390IBM MVS Data Areas,Volume 4 (RD - SRRA)    SY28-1167-11"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1d540.pdf",
      "Title": "IEAD5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1168-09",
      "FirstPage": "OS/390IBM MVS Data Areas,Volume 5 (SSAG - XTLST)    SY28-1168-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1d542.pdf",
      "Title": "IEAD5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1168-11",
      "FirstPage": "OS/390IBM MVS Data Areas,Volume 5 (SSAG - XTLST)    SY28-1168-11"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1e131.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1751-09",
      "FirstPage": "OS/390MVSInitializationandTuningGuideSC28-1751-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1e241.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1752-12",
      "FirstPage": "OS/390MVSInitializationandTuningReferenceSC28-1752-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1e242.pdf",
      "Title": "OS/390 V2R10.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC28-1752-13",
      "FirstPage": "OS/390MVSInitializationandTuningReferenceSC28-1752-13IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1e432.pdf",
      "Title": "OS/390 V2R10.0 MVS Installation Exits",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC28-1753-09",
      "FirstPage": "OS/390MVSInstallationExitsSC28-1753-09IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1e510.pdf",
      "Title": "IEAE5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1911-03",
      "FirstPage": "OS/390IBM MVS Using theFunctional Subsystem Interface    SC28-1911-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1e841.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1747-11",
      "FirstPage": "OS/390MVSConversionNotebookGC28-1747-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1f141.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1779-10",
      "FirstPage": "OS/390MVSSettingUpaSysplexGC28-1779-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1f230.pdf",
      "Title": "IEAF2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1789-07",
      "FirstPage": "OS/390IBM MVS Using the Subsystem Interface    SC28-1789-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1g141.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1781-11",
      "FirstPage": "OS/390MVSSystemCommandsGC28-1781-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1g142.pdf",
      "Title": "OS/390 V2R10.0 MVS System Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1781-12",
      "FirstPage": "OS/390MVSSystemCommandsGC28-1781-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1g241.pdf",
      "Title": "IEAG2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1783-12",
      "FirstPage": "OS/390IBM MVS System Management Facilities(SMF)    GC28-1783-12"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1g320.pdf",
      "Title": "IEAG3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1760-07",
      "FirstPage": " OS/390IBM MVS Planning: Operations    GC28-1760-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1g330.pdf",
      "Title": "OS/390 V2R10.0 MVS Planning: Operations",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1760-08",
      "FirstPage": "OS/390MVSPlanning:OperationsGC28-1760-08IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1g430.pdf",
      "Title": "IEAG4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1759-08",
      "FirstPage": "OS/390IBM MVS Planning: Global ResourceSerialization    GC28-1759-08"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1g431.pdf",
      "Title": "OS/390 V2R10.0 MVS Planning: Global Resource Serialization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1759-09",
      "FirstPage": "OS/390MVSPlanning:GlobalResourceSerializationGC28-1759-09IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1g510.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1782-02",
      "FirstPage": "OS/390MVSSystemDataSetDefinitionGC28-1782-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1g602.pdf",
      "Title": "IEAG6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1748-01",
      "FirstPage": " OS/390IBM MVS Device Validation Support    GC28-1748-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h131.pdf",
      "Title": "IEA1H131",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1784-11",
      "FirstPage": "OS/390IBM MVS System MessagesVolume 1 (ABA - ASA)    GC28-1784-11"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h142.pdf",
      "Title": "OS/390 V2R10.0 MVS System Messages, Vol 1 (ABA-ASA)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1784-14",
      "FirstPage": "OS/390MVSSystemMessagesVolume1(ABA-ASA)GC28-1784-14IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h231.pdf",
      "Title": "IEA1H231",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1785-11",
      "FirstPage": "OS/390IBM MVS System MessagesVolume 2 (ASB - EZM)    GC28-1785-11"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h242.pdf",
      "Title": "OS/390 V2R10.0 MVS System Messages, Vol 2 (ASB-ERB)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1785-14",
      "FirstPage": "OS/390MVSSystemMessagesVolume2(ASB-ERB)GC28-1785-14\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h243.pdf",
      "Title": "OS/390 V2R10.0 MVS System Messages, Vol 2 (ASB-ERB)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1785-15",
      "FirstPage": "OS/390MVSSystemMessagesVolume2(ASB-ERB)GC28-1785-15IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h341.pdf",
      "Title": "IEA1H341",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1786-12",
      "FirstPage": "OS/390IBM MVS System MessagesVolume 3 (GDE - IEB)    GC28-1786-12"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h352.pdf",
      "Title": "OS/390 V2R10.0 MVS System Messages, Vol 3 (EWX-IEB)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1786-15",
      "FirstPage": "OS/390MVSSystemMessagesVolume3(EWX-IEB)GC28-1786-15IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h353.pdf",
      "Title": "OS/390 V2R10.0 MVS System Messages, Vol 3 (EWX-IEB)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1786-16",
      "FirstPage": "OS/390MVSSystemMessagesVolume3(EWX-IEB)GC28-1786-16IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h441.pdf",
      "Title": "IEA1H441",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1787-12",
      "FirstPage": "OS/390IBM MVS System MessagesVolume 4 (IEC - IFD)    GC28-1787-12"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h451.pdf",
      "Title": "IEA1H451",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1787-14",
      "FirstPage": "OS/390IBM MVS System MessagesVolume 4 (IEC - IFD)    GC28-1787-14"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h541.pdf",
      "Title": "IEA1H541",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1788-12",
      "FirstPage": "OS/390IBM MVS System MessagesVolume 5 (IGD - IZP)    GC28-1788-12"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h551.pdf",
      "Title": "IEA1H551",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1788-14",
      "FirstPage": "OS/390IBM MVS System MessagesVolume 5 (IGD - IZP)    GC28-1788-14"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h552.pdf",
      "Title": "OS/390 V2R10.0 MVS System Messages, Vol 5 (IGD-IZP)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1788-15",
      "FirstPage": "OS/390MVSSystemMessagesVolume5(IGD-IZP)GC28-1788-15IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h641.pdf",
      "Title": "IEA1H641",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1749-12",
      "FirstPage": "OS/390IBM MVS Dump Output Messages    GC28-1749-12"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h642.pdf",
      "Title": "OS/390 V2R10.0 MVS Dump Output Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1749-13",
      "FirstPage": "OS/390MVSDumpOutputMessagesGC28-1749-13IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h707.pdf",
      "Title": "IEAH7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1780-04",
      "FirstPage": " OS/390IBM MVS System Codes    GC28-1780-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h741.pdf",
      "Title": "IEA1H741",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1780-14",
      "FirstPage": "OS/390IBM MVS System Codes    GC28-1780-14"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h742.pdf",
      "Title": "OS/390 V2R10.0 MVS System Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1780-15",
      "FirstPage": "OS/390MVSSystemCodesGC28-1780-15IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h842.pdf",
      "Title": "OS/390 V2R10.0 MVS Routing and Descriptor Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1778-14",
      "FirstPage": "OS/390MVSRoutingandDescriptorCodesGC28-1778-14IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1h844.pdf",
      "Title": "OS/390 V2R10.0 MVS Routing and Descriptor Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1778-16",
      "FirstPage": "OS/390MVSRoutingandDescriptorCodesGC28-1778-16IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1i110.pdf",
      "Title": "IEAI1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1777-05",
      "FirstPage": "OS/390IBM MVS Recovery and Reconfiguration Guide    GC28-1777-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1i120.pdf",
      "Title": "OS/390 V2R10.0 MVS Recovery and Reconfiguration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1777-06",
      "FirstPage": "OS/390MVSRecoveryandReconfigurationGuideGC28-1777-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1i641.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1771-10",
      "FirstPage": "OS/390MVSProgramming:SysplexServicesGuideGC28-1771-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1i741.pdf",
      "Title": "IEAI7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1772-10",
      "FirstPage": "OS/390IBM MVS Programming:Sysplex Services Reference    GC28-1772-10"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1i810.pdf",
      "Title": "IEAI8MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1770-03",
      "FirstPage": " OS/390IBM MVS Programming:JES Common Coupling Services    GC28-1770-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1k505.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1774-03",
      "FirstPage": "OS/390MVSProgramming:WritingServersforAPPC/MVSGC28-1774-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1m305.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1776-03",
      "FirstPage": "OS/390MVSProgramming:WritingTransactionSchedulersforAPPC/MVSGC28-1776-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1n141.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1739-08",
      "FirstPage": "OS/390MVSProgramming:ResourceRecoveryGC28-1739-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1pd08.pdf",
      "Title": "IEAP1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI10-4001-08",
      "FirstPage": "IBMProgram DirectoryOS/390Version 2 Release 10For CBPDO Installation and ServerPac ReferenceRelease 10Program Number5647"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1q204.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1729-03",
      "FirstPage": "OS/390MVSProgramming:ProductRegistrationGC28-1729-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1r110.pdf",
      "Title": "IEAQ3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1730-07",
      "FirstPage": "OS/390IBM MVS Product Management    GC28-1730-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1v004.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1082-03",
      "FirstPage": "OS/390MVSDiagnosis:ProceduresSY28-1082-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1v141.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1085-09",
      "FirstPage": "OS/390MVSDiagnosis:ToolsandServiceAidsSY28-1085-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1v231.pdf",
      "Title": "IEAV2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1084-09",
      "FirstPage": "OS/390IBM MVS Diagnosis: Reference    SY28-1084-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1w141.pdf",
      "Title": "IEAW1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1761-13",
      "FirstPage": "OS/390IBM MVS Planning: Workload Management    GC28-1761-13"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1w230.pdf",
      "Title": "IEAW2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1773-08",
      "FirstPage": "OS/390IBM MVS Programming: WorkloadManagement Services    GC28-1773-08"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2a490.pdf",
      "Title": "z/OS V1R11.0 MVS Authorized Assembler Services Reference SET-WTO",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7612-11",
      "FirstPage": "z/OSMVS Programming: Authorized Assembler Services Reference, Volume 4 (SET-WTO) SA22-7612-11  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2b250.pdf",
      "Title": "z/OS V1R7.0 MVS Program Management: Advanced Facilities",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7644-05",
      "FirstPage": "z/OSMVS Program Management: Advanced Facilities   SA22-7644-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2b270.pdf",
      "Title": "z/OS V1R9.0 MVS Program Management: Advanced Facilities",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7644-07",
      "FirstPage": "z/OSMVS Program Management: Advanced Facilities    SA22-7644-07  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2b510.pdf",
      "Title": "z/OS V1R2.0 MVS JCL User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7598-01",
      "FirstPage": "z/OSMVSJCLUser\u2019sGuideSA22-7598-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2b540.pdf",
      "Title": "z/OS V1R6.0 MVS JCL User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7598-04",
      "FirstPage": "z/OSMVS JCL User\u2019s Guide   SA22-7598-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2b620.pdf",
      "Title": "z/OS V1R3.0 MVS JCL Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7597-02",
      "FirstPage": "z/OSMVSJCLReferenceSA22-7597-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2b650.pdf",
      "Title": "z/OS V1R6.0 MVS JCL Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7597-08",
      "FirstPage": "z/OSMVS JCL Reference   SA22-7597-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2b661.pdf",
      "Title": "z/OS V1R7.0 MVS JCL Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7597-10",
      "FirstPage": "z/OSMVS JCL Reference   SA22-7597-10  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2c610.pdf",
      "Title": "z/OS V1R2.0 MVS IPCS User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7596-01",
      "FirstPage": "z/OSMVSInteractiveProblemControlSystem(IPCS)User\u2019sGuideSA22-7596-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2c710.pdf",
      "Title": "z/OS V1R2.0 MVS IPCS Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7595-01",
      "FirstPage": "z/OSMVSInteractiveProblemControlSystem(IPCS)CustomizationSA22-7595-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2e2a1.pdf",
      "Title": "z/OS V1R11.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7592-20",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceSA22-7592-20\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2e2c1.pdf",
      "Title": "z/OS V1R13.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7592-23",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceSA22-7592-23\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2e2c2.pdf",
      "Title": "z/OS V1R13.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7592-24",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceSA22-7592-24\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2g270.pdf",
      "Title": "z/OS V1R8.0 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7630-13",
      "FirstPage": "z/OSMVS System Management Facilities (SMF)   SA22-7630-13  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2g271.pdf",
      "Title": "z/OS V1R8.0 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7630-14",
      "FirstPage": "z/OSMVS System Management Facilities (SMF)    SA22-7630-14  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2g281.pdf",
      "Title": "z/OS V1R9.0 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7630-16",
      "FirstPage": "z/OSMVS System Management Facilities (SMF)    SA22-7630-16  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2g500.pdf",
      "Title": "z/OS V1R1.0 MVS System Data Set Definition",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7629-00",
      "FirstPage": "z/OSMVSSystemDataSetDefinitionSA22-7629-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2g820.pdf",
      "Title": "z/OS V1R3.0 HCD Planning",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7525-02",
      "FirstPage": "z/OSHardwareConfigurationDefinitionPlanningGA22-7525-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2h792.pdf",
      "Title": "z/OS V1R10.0 MVS System Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7626-19",
      "FirstPage": "z/OSMVS System Codes    SA22-7626-19  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2i731.pdf",
      "Title": "z/OS V1R4.0 MVS Sysplex Services Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7618-04",
      "FirstPage": "z/OSMVS Programming: Sysplex Services Reference   SA22-7618-04   \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2i800.pdf",
      "Title": "z/OS V1R1.0 MVS JES Common Coupling Services",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7615-00",
      "FirstPage": "z/OSIBM MVS Programming:JES Common Coupling Services    SA22-7615-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2m761.pdf",
      "Title": "z/OS V1R7.0 MVS System Messages, Vol 7 (IEB-IEE)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7637-11",
      "FirstPage": "z/OSMVS System Messages Volume 7 (IEB - IEE)   SA22-7637-11  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2r100.pdf",
      "Title": "z/OS V1R1.0 MVS Product Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7603-00",
      "FirstPage": "z/OSMVSProductManagementSA22-7603-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2un20.pdf",
      "Title": "z/OS support for Unicode\u003Csup\u003E\u017D\u003Creset\u003E: Using Conversion Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7649-02",
      "FirstPage": "z/OSSupportforUnicode\u2122:UsingConversionServicesSA22-7649-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2un41.pdf",
      "Title": "z/OS Support for Unicode\u003Ctm_macro\u003E: Using Conversion Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7649-05",
      "FirstPage": "z/OSSupport for Unicode\u2122: Using Conversion Services SA22-7649-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w131.pdf",
      "Title": "z/OS V1R4.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7602-05",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementSA22-7602-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w1c0.pdf",
      "Title": "z/OS V1R13.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7602-20",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementVersion1Release13SA22-7602-20\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w2c0.pdf",
      "Title": "z/OS V1R13.0 MVS Programming: Workload Management Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7619-21",
      "FirstPage": "z/OSMVSProgramming:WorkloadManagementServicesVersion1Release13SA22-7619-21\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a100.pdf",
      "Title": "z/OS V2R1.0 MVS Authorized Assembler Services Reference ALE-DYN",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1372-00",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesReference,Volume1(ALE-DYN)Version2Release1SA23-1372-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a201.pdf",
      "Title": "z/OS V2R1.0 MVS Authorized Assembler Services Reference EDT-IXG",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1373-01",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesReference,Volume2(EDT-IXG)Version2Release1SA23-1373-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a301.pdf",
      "Title": "z/OS V2R1.0 MVS Authorized Assembler Services Reference LLA-SDU",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1374-01",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesReference,Volume3(LLA-SDU)Version2Release1SA23-1374-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a400.pdf",
      "Title": "z/OS V2R1.0 MVS Authorized Assembler Services Reference SET-WTO",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1375-00",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesReference,Volume4(SET-WTO)Version2Release1SA23-1375-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a500.pdf",
      "Title": "z/OS V2R1.0 MVS Extended Addressability Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1394-00",
      "FirstPage": "z/OSMVSProgramming:ExtendedAddressabilityGuideVersion2Release1SA23-1394-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a601.pdf",
      "Title": "z/OS V2R1.0 MVS Assembler Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1368-01",
      "FirstPage": "z/OSMVSProgramming:AssemblerServicesGuideVersion2Release1SA23-1368-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a700.pdf",
      "Title": "z/OS V2R1.0 MVS Assembler Services Reference ABE-HSP",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1369-00",
      "FirstPage": "z/OSMVSProgramming:AssemblerServicesReference,Volume1(ABE-HSP)Version2Release1SA23-1369-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a802.pdf",
      "Title": "z/OS V2R1.0 MVS Authorized Assembler Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1371-02",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesGuideVersion2Release1SA23-1371-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a901.pdf",
      "Title": "z/OS V2R1.0 MVS Assembler Services Reference IAR-XCT",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1370-01",
      "FirstPage": "z/OSMVSProgramming:AssemblerServicesReference,Volume2(IAR-XCT)Version2Release1SA23-1370-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3b100.pdf",
      "Title": "z/OS V2R1.0 MVS Program Management: User\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1393-00",
      "FirstPage": "z/OSMVSProgramManagement:User\u0027sGuideandReferenceVersion2Release1SA23-1393-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3b200.pdf",
      "Title": "z/OS V2R1 MVS Program Management: Advanced Facilities",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1392-00",
      "FirstPage": "z/OSMVSProgramManagement:AdvancedFacilitiesVersion2Release1SA23-1392-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3b500.pdf",
      "Title": "z/OS V2R1.0 MVS JCL User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1386-00",
      "FirstPage": "z/OSMVSJCLUser\u0027sGuideVersion2Release1SA23-1386-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3b601.pdf",
      "Title": "z/OS V2R1.0 MVS JCL Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1385-01",
      "FirstPage": "z/OSMVSJCLReferenceVersion2Release1SA23-1385-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3b611.pdf",
      "Title": "z/OS V2R2 MVS JCL Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1385-03",
      "FirstPage": "z/OSMVS JCL ReferenceVersion2 Release2SA23-1385-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c102.pdf",
      "Title": "z/OS V2R1.0 MVS Callable Services for HLL",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1377-02",
      "FirstPage": "z/OSMVSProgramming:CallableServicesforHigh-LevelLanguagesVersion2Release1SA23-1377-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c300.pdf",
      "Title": "z/OS V2R1.0 MVS Writing TPs for APPC/MVS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1397-00",
      "FirstPage": "z/OSMVSProgramming:WritingTransactionProgramsforAPPC/MVSVersion2Release1SA23-1397-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c400.pdf",
      "Title": "z/OS V2R1.0 MVS Planning: APPC/MVS Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1388-00",
      "FirstPage": "z/OSMVSPlanning:APPC/MVSManagementVersion2Release1SA23-1388-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c501.pdf",
      "Title": "z/OS V2R1.0 MVS IPCS Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1382-01",
      "FirstPage": "z/OSMVSInteractiveProblemControlSystem(IPCS)CommandsVersion2Release1SA23-1382-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c600.pdf",
      "Title": "z/OS V2R1.0 MVS IPCS User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1384-00",
      "FirstPage": "z/OSMVSInteractiveProblemControlSystem(IPCS)User\u0027sGuideVersion2Release1SA23-1384-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c700.pdf",
      "Title": "z/OS V2R1.0 MVS IPCS Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1383-00",
      "FirstPage": "z/OSMVSInteractiveProblemControlSystem(IPCS)CustomizationVersion2Release1SA23-1383-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c800.pdf",
      "Title": "z/OS V2R1.0 MVS Writing Transaction Schedulers for APPC/MVS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1398-00",
      "FirstPage": "z/OSMVSProgramming:WritingTransactionSchedulersforAPPC/MVSVersion2Release1SA23-1398-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3d102.pdf",
      "Title": "z/OS V2R1 MVS Data Areas Volume 1 (ABEP - DCQ)",
      "Author": "IBM Corporation",
      "Subject": "z/OS V2R1 MVS Data Areas Volume 1 (ABEP - DCQ)",
      "DocumentNumber": "GA32-0935-02",
      "FirstPage": " z/OS V2R1MVS Data AreasVolume 1 (ABEP - DCQ)Document Number GA32-0935-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3d202.pdf",
      "Title": "z/OS V2R1 MVS Data Areas Volume 2 (DDRCOM -IEFALCXT)",
      "Author": "IBM Corporation",
      "Subject": "z/OS V2R1 MVS Data Areas Volume 2 (DDRCOM -IEFALCXT)",
      "DocumentNumber": "GA32-0936-02",
      "FirstPage": " z/OS V2R1MVS Data AreasVolume 2 (DDRCOM -IEFALCXT)Document Number GA32-0936-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3d302.pdf",
      "Title": "z/OS V2R1 MVS Data Areas Volume 3 (IEFALCXT -IRARENF1)",
      "Author": "IBM Corporation",
      "Subject": "z/OS V2R1 MVS Data Areas Volume 3 (IEFALCXT -IRARENF1)",
      "DocumentNumber": "GA32-0937-02",
      "FirstPage": " z/OS V2R1MVS Data AreasVolume 3 (IEFALCXT -IRARENF1)Document Number GA32-0937-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3d402.pdf",
      "Title": "IBM z/OSV2R1 MVS Data Areas Volume 4 (IRARMCTZ -LCT)",
      "Author": "IBM Corporation",
      "Subject": "IBM z/OSV2R1 MVS Data Areas Volume 4 (IRARMCTZ -LCT)",
      "DocumentNumber": "GA32-0938-02",
      "FirstPage": " z/OSV2R1MVS Data AreasVolume 4 (IRARMCTZ -LCT)Document Number GA32-0938-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3d502.pdf",
      "Title": "z/OSV2R1 MVS Data Areas Volume 5 (LDA -SJRSP)",
      "Author": "IBM Corporation",
      "Subject": "z/OSV2R1 MVS Data Areas Volume 5 (LDA -SJRSP)",
      "DocumentNumber": "GA32-0939-02",
      "FirstPage": " z/OSV2R1MVS Data AreasVolume 5 (LDA -SJRSP)Document Number GA32-0939-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3d602.pdf",
      "Title": "z/OSV2R1 MVS Data Areas Volume 6 (SJRUP -XTLST)",
      "Author": "IBM Corporation",
      "Subject": "z/OSV2R1 MVS Data Areas Volume 6 (SJRUP -XTLST)",
      "DocumentNumber": "GA32-0940-02",
      "FirstPage": " z/OSV2R1MVS Data AreasVolume 6(SJRUP -XTLST)Document Number GA32-0940-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e100.pdf",
      "Title": "z/OS V2R1.0 MVS Initialization and Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1379-00",
      "FirstPage": "z/OSMVSInitializationandTuningGuideVersion2Release1SA23-1379-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e203.pdf",
      "Title": "z/OS V2R1.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1380-03",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceVersion2Release1SA23-1380-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e204.pdf",
      "Title": "z/OS V2R1.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1380-04",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceVersion2Release1SA23-1380-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e213.pdf",
      "Title": "z/OS MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1380-08",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceVersion2Release2SA23-1380-08IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e400.pdf",
      "Title": "z/OS V2R1.0 MVS Installation Exits",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1381-00",
      "FirstPage": "z/OSMVSInstallationExitsVersion2Release1SA23-1381-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e500.pdf",
      "Title": "z/OS V2R1.0 MVS Using the Functional Subsystem Interface",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0678-00",
      "FirstPage": "z/OSz/OSMVSUsingtheFunctionalSubsystemInterfaceVersion2Release1SA38-0678-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3f100.pdf",
      "Title": "z/OS V2R1.0 MVS Setting Up a Sysplex",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1399-00",
      "FirstPage": "z/OSMVSSettingUpaSysplexVersion2Release1SA23-1399-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3f101.pdf",
      "Title": "z/OS V2R1.0 MVS Setting Up a Sysplex",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1399-01",
      "FirstPage": "z/OSMVSSettingUpaSysplexVersion2Release1SA23-1399-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3f131.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GX22-0040-10",
      "FirstPage": "OS/390MVSSystemCommandsSummaryGX22-0040-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3f201.pdf",
      "Title": "z/OS V2R1.0 MVS Using the Subsystem Interface",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0679-01",
      "FirstPage": "z/OSMVSUsingtheSubsystemInterfaceVersion2Release1SA38-0679-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g100.pdf",
      "Title": "z/OS V2R1.0 MVS System Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0666-00",
      "FirstPage": "z/OSMVSSystemCommandsVersion2Release1SA38-0666-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g102.pdf",
      "Title": "z/OS V2R1.0 MVS System Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0666-02",
      "FirstPage": "z/OSMVSSystemCommandsVersion2Release1SA38-0666-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g200.pdf",
      "Title": "z/OS V2R1.0 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-0667-00",
      "FirstPage": "z/OSMVSSystemManagementFacilities(SMF)Version2Release1SA23-0667-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g202.pdf",
      "Title": "z/OS V2R1.0 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0667-02",
      "FirstPage": "z/OSMVSSystemManagementFacilities(SMF)Version2Release1SA38-0667-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g203.pdf",
      "Title": "z/OS V2R1.0 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0667-03",
      "FirstPage": "z/OSMVSSystemManagementFacilities(SMF)Version2Release1SA38-0667-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g211.pdf",
      "Title": "z/OS V2R2 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0667-05",
      "FirstPage": "z/OSMVS System Management Facilities (SMF)Version2 Release2SA38-0667-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g300.pdf",
      "Title": "z/OS V2R1.0 MVS Planning: Operations",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1390-00",
      "FirstPage": "z/OSMVSPlanning:OperationsVersion2Release1SA23-1390-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g400.pdf",
      "Title": "z/OS V2R1.0 MVS Planning: Global Resource Serialization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1389-00",
      "FirstPage": "z/OSMVSPlanning:GlobalResourceSerializationVersion2Release1SA23-1389-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g600.pdf",
      "Title": "z/OS V2R1.0 MVS Device Validation Support",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0697-00",
      "FirstPage": "z/OSMVSDeviceValidationSupportVersion2Release1SA38-0697-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g800.pdf",
      "Title": "z/OS V2R1.0 HCD Planning",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0907-00",
      "FirstPage": "z/OSHardwareConfigurationDefinitionPlanningVersion2Release1GA32-0907-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3h600.pdf",
      "Title": "z/OS V2R1.0 MVS Dump Output Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1378-00",
      "FirstPage": "z/OSMVSDumpOutputMessagesVersion2Release1SA23-1378-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3h700.pdf",
      "Title": "z/OS V2R1.0 MVS System Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0665-00",
      "FirstPage": "z/OSMVSSystemCodesVersion2Release1SA38-0665-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3i601.pdf",
      "Title": "z/OS V2R1.0 MVS Sysplex Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1400-01",
      "FirstPage": "z/OSMVSProgramming:SysplexServicesGuideVersion2Release1SA23-1400-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3i701.pdf",
      "Title": "z/OS V2R1.0 MVS Sysplex Services Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0658-00",
      "FirstPage": "z/OSMVSProgramming:SysplexServicesReferenceVersion2Release1SA38-0658-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3i800.pdf",
      "Title": "z/OS V2R1.0 MVS JES Common Coupling Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1387-00",
      "FirstPage": "z/OSMVSProgramming:JESCommonCouplingServicesVersion2Release1SA23-1387-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3k500.pdf",
      "Title": "z/OS V2R1.0 MVS Writing Servers for APPC/MVS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1396-00",
      "FirstPage": "z/OSMVSProgramming:WritingServersforAPPC/MVSVersion2Release1SA23-1396-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m103.pdf",
      "Title": "z/OS V2R1.0 MVS System Messages, Vol 1 (ABA-AOM)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0668-03",
      "FirstPage": "z/OSMVSSystemMessagesVolume1(ABA-AOM)Version2Release1SA38-0668-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m203.pdf",
      "Title": "z/OS V2R1.0 MVS System Messages, Vol 2 (ARC-ASA)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0669-03",
      "FirstPage": "z/OSMVSSystemMessagesVolume2(ARC-ASA)Version2Release1SA38-0669-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m301.pdf",
      "Title": "z/OS V2R1.0 MVS System Messages, Vol 3 (ASB-BPX)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0670-01",
      "FirstPage": "z/OSMVSSystemMessagesVolume3(ASB-BPX)Version2Release1SA38-0670-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m401.pdf",
      "Title": "z/OS V2R1.0 MVS System Messages, Vol 4 (CBD-DMO)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0671-01",
      "FirstPage": "z/OSMVSSystemMessagesVolume4(CBD-DMO)Version2Release1SA38-0671-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m501.pdf",
      "Title": "z/OS V2R1.0 MVS System Messages, Vol 5 (EDG-GFS)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0672-01",
      "FirstPage": "z/OSSystemMessagesVolume5(EDG-GFS)Version2Release1SA38-0672-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m602.pdf",
      "Title": "z/OS V2R1.0 MVS System Messages, Vol 6 (GOS-IEA)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0673-02",
      "FirstPage": "z/OSMVSSystemMessagesVolume6(GOS-IEA)Version2Release1SA38-0673-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m702.pdf",
      "Title": "z/OS V2R1.0 MVS System Messages, Vol 7 (IEB-IEE)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0674-02",
      "FirstPage": "z/OSMVSSystemMessagesVolume7(IEB-IEE)Version2Release1SA38-0674-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m802.pdf",
      "Title": "z/OS V2R1.0 MVS System Messages, Vol 8 (IEF-IGD)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0675-02",
      "FirstPage": "z/OSMVSSystemMessagesVolume8(IEF-IGD)Version2Release1SA38-0675-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m903.pdf",
      "Title": "z/OS V2R1.0 MVS System Messages, Vol 9 (IGF-IWM)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0676-03",
      "FirstPage": "z/OSMVSSystemMessagesVolume9(IGF-IWM)Version2Release1SA38-0676-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3ma02.pdf",
      "Title": "z/OS V2R1.0 MVS System Messages, Vol 10 (IXC-IZP)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0677-02",
      "FirstPage": "z/OSMVSSystemMessagesVolume10(IXC-IZP)Version2Release1SA38-0677-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3n100.pdf",
      "Title": "z/OS V2R1.0 MVS Programming: Resource Recovery",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1395-00",
      "FirstPage": "z/OSMVSProgramming:ResourceRecoveryVersion2Release1SA23-1395-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3n500.pdf",
      "Title": "z/OS V2R1.0 Batch Runtime Planning and User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1376-00",
      "FirstPage": "z/OSz/OSBatchRuntime:PlanningandUser\u0027sGuideVersion2Release1SA23-1376-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3q200.pdf",
      "Title": "z/OS V2R1.0 MVS Programming: Product Registration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0698-00",
      "FirstPage": "z/OSMVSProgramming:ProductRegistrationVersion2Release1SA38-0698-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3r100.pdf",
      "Title": "z/OS V2R1.0 MVS Product Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7603-00",
      "FirstPage": "z/OSMVSProductManagementVersion2Release1SA22-7603-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3u100.pdf",
      "Title": "z/OS V2R1.0 MVS Capacity Provisioning User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2661-00",
      "FirstPage": "z/OSMVSCapacityProvisioningUser\u0027sGuideVersion2Release1SC34-2661-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3u110.pdf",
      "Title": "z/OS V2R2 MVS Capacity Provisioning User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2661-01",
      "FirstPage": "z/OSMVSCapacityProvisioningUser\u0027sGuideVersion2Release2SC34-2661-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3un00.pdf",
      "Title": "z/OS V2R1.0 Unicode Services User\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0680-00",
      "FirstPage": "z/OSUnicodeServicesUser\u0027sGuideandReferenceVersion2Release1SA38-0680-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3v102.pdf",
      "Title": "z/OS V2R1.0 MVS Diagnosis: Tools and Service Aids",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0905-02",
      "FirstPage": "z/OSMVSDiagnosis:ToolsandServiceAidsVersion2Release1GA32-0905-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3v202.pdf",
      "Title": "z/OS V2R1.0 MVS Diagnosis: Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0904-02",
      "FirstPage": "z/OSMVSDiagnosis:ReferenceVersion2Release1GA32-0904-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3w100.pdf",
      "Title": "z/OS V2R1.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2662-00",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementVersion2Release1SC34-2662-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3w101.pdf",
      "Title": "z/OS V2R1.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2662-01",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementVersion2Release1SC34-2662-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3w102.pdf",
      "Title": "z/OS V2R1.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2662-02",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementVersion2Release1SC34-2662-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3w201.pdf",
      "Title": "z/OS V2R1.0 MVS Programming: Workload Management Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2663-01",
      "FirstPage": "z/OSMVSProgramming:WorkloadManagementServicesVersion2Release1SC34-2663-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iesvoe00.pdf",
      "Title": "FE6CMMM1",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-6731-00",
      "FirstPage": " IBM VSE/Enterprise Systems ArchitectureVSE Central FunctionsIBM VSE/VSAM CommandsVersion 6 Release 4    SC33-6731-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ifc5g01.pdf",
      "Title": "IFCMSTRU",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC35-0151-01",
      "FirstPage": " Environmental Record Editing andPrinting Program (EREP)IBM User\u2019s GuideRelease 3.5.0    GC35-0151-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ifc5g101.pdf",
      "Title": "IFCMSTRU",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC35-0151-01",
      "FirstPage": " Environmental Record Editing andPrinting Program (EREP)IBM User\u2019s GuideRelease 3.5.0    GC35-0151-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ifc5g103.pdf",
      "Title": "EREP V3R5 User\u2122s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC35-0151-03",
      "FirstPage": "EnvironmentalRecordEditingandPrintingProgram(EREP)User\u2019sGuideVersion3Release5GC35-0151-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ifc5r106.pdf",
      "Title": "EREP V3R5 Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC35-0152-06",
      "FirstPage": "EnvironmentalRecordEditingandPrintingProgram(EREP)ReferenceVersion3Release5GC35-0152-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/igyic202.pdf",
      "Title": "IGYC1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC26-9045-02",
      "FirstPage": "COBOL for OS/390 \u0026 VMIBM Customization under OS/390Version 2 Release 2    GC26-9045-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/igylp202.pdf",
      "Title": "IGYP1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "Licensed ProgramIBMSpecificationsIBM COBOL for OS/390 \u0026 VMVersion 2 Release 2Program Number 5648-A25IBM COBOL for OS/390"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/igylr205.pdf",
      "Title": "IGYL1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-9046-04",
      "FirstPage": "COBOL for OS/390\uF6DA \u0026 VMCOBOL Set for AIX\uF6DAVisualAge\uF6DA COBOLIBMLanguage Reference SC26-9046-04COBOL for OS/390\uF6DA \u0026 VMCOBOL Se"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/igymg202.pdf",
      "Title": "IGYM1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC26-4764-05",
      "FirstPage": "COBOL for OS/390 \u0026 VMCOBOL for MVS \u0026 VMIBM Compiler and Run-Time Migration Guide    GC26-4764-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/igypg205.pdf",
      "Title": "Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-9049-05",
      "FirstPage": "COBOLforOS/390\u0026VMProgrammingGuideVersion2Release2SC26-9049-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2a200.pdf",
      "Title": "z/OS V2R1.0 TSO/E REXX Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0972-00",
      "FirstPage": "z/OSTSO/EREXXReferenceVersion2Release1SA32-0972-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2b200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Programming Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0973-00",
      "FirstPage": "z/OSTSO/EProgrammingServicesVersion2Release1SA32-0973-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2e200.pdf",
      "Title": "z/OS V2R1.0 TSO/E System Programming Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0974-00",
      "FirstPage": "z/OSTSO/ESystemProgrammingCommandReferenceVersion2Release1SA32-0974-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2f200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Guide to the Server-Requester Programming Interface",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0980-00",
      "FirstPage": "z/OSTSO/EGuidetotheServer-RequesterProgrammingInterfaceVersion2Release1SA32-0980-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2g200.pdf",
      "Title": "z/OS V2R1.0 TSO/E REXX User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0982-00",
      "FirstPage": "z/OSTSO/EREXXUser\u0027sGuideVersion2Release1SA32-0982-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2h200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0976-00",
      "FirstPage": "z/OSTSO/ECustomizationVersion2Release1SA32-0976-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2i200.pdf",
      "Title": "z/OS V2R1.0 TSO/E CLISTs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0978-00",
      "FirstPage": "z/OSTSO/ECLISTsVersion2Release1SA32-0978-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2j200.pdf",
      "Title": "z/OS V2R1.0 TSO/E General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0979-00",
      "FirstPage": "z/OSTSO/EGeneralInformationVersion2Release1SA32-0979-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2k200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0981-00",
      "FirstPage": "z/OSTSO/EProgrammingGuideVersion2Release1SA32-0981-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2l200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0975-00",
      "FirstPage": "z/OSTSO/ECommandReferenceVersion2Release1SA32-0975-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2m200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0970-00",
      "FirstPage": "z/OSTSO/EMessagesVersion2Release1SA32-0970-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2n200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0977-00",
      "FirstPage": "z/OSTSO/EAdministrationVersion2Release1SA32-0977-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2o200.pdf",
      "Title": "z/OS V2R1.0 TSO/E User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0971-00",
      "FirstPage": "z/OSTSO/EUser\u0027sGuideVersion2Release1SA32-0971-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2p200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Primer",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0984-00",
      "FirstPage": "z/OSTSO/EPrimerVersion2Release1SA32-0984-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2q200.pdf",
      "Title": "IKJ2Q200",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-0983-00",
      "FirstPage": " z/OSTSO System Diagnosis: Data AreasDocument Number GA32-0983-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3a110.pdf",
      "Title": "IKJA1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1966-01",
      "FirstPage": "OS/390IBM TSO/EAdministration    SC28-1966-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3a330.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1975-05",
      "FirstPage": "OS/390TSO/EREXXReferenceSC28-1975-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3b330.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1964-04",
      "FirstPage": "OS/390TSO/EGeneralInformationGC28-1964-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3b430.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1965-04",
      "FirstPage": "OS/390TSO/ECustomizationSC28-1965-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3b620.pdf",
      "Title": "IKJB6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1970-02",
      "FirstPage": "OS/390IBM TSO/EProgramming Guide    SC28-1970-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3b720.pdf",
      "Title": "IKJB7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1971-04",
      "FirstPage": "OS/390IBM TSO/EProgramming Services    SC28-1971-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3b820.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1973-04",
      "FirstPage": "OS/390TSO/ECLISTsSC28-1973-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3c110.pdf",
      "Title": "IKJC1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1976-02",
      "FirstPage": "OS/390IBM TSO/EGuide to the Server-RequesterProgramming Interface    SC28-1976-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3c220.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1968-03",
      "FirstPage": "OS/390TSO/EUser\u2019sGuideSC28-1968-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3c310.pdf",
      "Title": "IKJC3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1974-02",
      "FirstPage": "OS/390IBM TSO/EREXX User\u0027s Guide    SC28-1974-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3c420.pdf",
      "Title": "IKJC4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1972-04",
      "FirstPage": "OS/390IBM TSO/ESystem ProgrammingCommand Reference    SC28-1972-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3c530.pdf",
      "Title": "IKJC5MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1969-05",
      "FirstPage": "OS/390IBM TSO/ECommand Reference    SC28-1969-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3d210.pdf",
      "Title": "IKJD2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-6678-01",
      "FirstPage": "OS/390IBM TSO/ESystem Diagnosis: Data Areas    SC33-6678-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3m130.pdf",
      "Title": "IKJM1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1978-05",
      "FirstPage": "OS/390IBM TSO/E Messages    GC28-1978-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj3p110.pdf",
      "Title": "IKJP1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1967-02",
      "FirstPage": "OS/390IBM TSO/E Primer    GC28-1967-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4a3a0.pdf",
      "Title": "z/OS V1R13.0 TSO/E REXX Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7790-10",
      "FirstPage": "z/OSTSO/EREXXReferenceSA22-7790-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4b320.pdf",
      "Title": "z/OS V1R3.0 TSO/E General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7784-02",
      "FirstPage": "z/OSTSO/EGeneralInformationSA22-7784-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4b820.pdf",
      "Title": "z/OS V1R4.0 TSO/E CLISTs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7781-02",
      "FirstPage": "z/OSTSO/ECLISTsSA22-7781-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4b860.pdf",
      "Title": "z/OS V1R12.0 TSO/E CLISTs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7781-06",
      "FirstPage": "z/OSTSO/ECLISTsSA22-7781-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4c220.pdf",
      "Title": "z/OS V1R3.0 TSO/E User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7794-02",
      "FirstPage": "z/OSTSO/EUser\u2019sGuideSA22-7794-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4c240.pdf",
      "Title": "z/OS V1R10.0 TSO/E User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7794-04",
      "FirstPage": "z/OSTSO/E User\u2019s Guide    SA22-7794-04  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4c310.pdf",
      "Title": "z/OS V1R2.0 TSO/E REXX User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7791-01",
      "FirstPage": "z/OSTSO/EREXXUser\u2019sGuideSA22-7791-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iky2a100.pdf",
      "Title": "z/OS V2R1.0 Cryptographic Services PKI Services Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2286-00",
      "FirstPage": "z/OSCryptographicServicesPKIServicesGuideandReferenceVersion2Release1SA23-2286-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/imoa1a20.pdf",
      "Title": "No Job Name",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SH12-6387-03",
      "FirstPage": "OS/390TextSearch:InstallationandAdministrationfortheTextSearchEngineVersion2.10SH12-6387-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/imqa1a20.pdf",
      "Title": "No Job Name",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SH12-6360-03",
      "FirstPage": "OS/390TextSearch:NetQuestionSolutionVersion2.10SH12-6360-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/imwziu19.pdf",
      "Title": "HTTP Server Planning, Installing, and Using",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4826-10",
      "FirstPage": "z/OSHTTPServerPlanning,Installing,andUsingVersion5.3SC34-4826-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ing4a600.pdf",
      "Title": "System Automation for z/OS: Defining Automation Policy",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2717-00",
      "FirstPage": "SystemAutomationforz/OSDefiningAutomationPolicyVersion3Release5SC34-2717-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ing4c600.pdf",
      "Title": "System Automation for z/OS: Operator\u0027s Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2720-00",
      "FirstPage": "SystemAutomationforz/OSOperator\u0027sCommandsVersion3Release5SC34-2720-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ing4e600.pdf",
      "Title": "System Automation for z/OS: End-to-End Automation Adapter",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2750-00",
      "FirstPage": "SystemAutomationforz/OSEnd-to-EndAutomationAdapterVersion3Release5SC34-2750-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ing4g600.pdf",
      "Title": "System Automation for z/OS: User\u2019s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2718-00",
      "FirstPage": "SystemAutomationforz/OSUser\u2019sGuideVersion3Release5SC34-2718-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ing4i600.pdf",
      "Title": "System Automation for z/OS:   Planning and Installation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2716-00",
      "FirstPage": "SystemAutomationforz/OSPlanningandInstallationVersion3Release5SC34-2716-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ing4k600.pdf",
      "Title": "System Automation for z/OS: Monitoring Agent Configuration and User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2751-00",
      "FirstPage": "SystemAutomationforz/OSMonitoringAgentConfigurationandUser\u0027sGuideVersion3Release5SC34-2751-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ing4m600.pdf",
      "Title": "System Automation for z/OS Messages and Codes:",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2719-00",
      "FirstPage": "SystemAutomationforz/OSMessagesandCodesVersion3Release5SC34-2719-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ing4p600.pdf",
      "Title": "System Automation for z/OS:   Customizing and Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2715-00",
      "FirstPage": "SystemAutomationforz/OSCustomizingandProgrammingVersion3Release5SC34-2715-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ing4r600.pdf",
      "Title": "System Automation for z/OS:   Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2748-00",
      "FirstPage": "SystemAutomationforz/OSProgrammer\u0027sReferenceVersion3Release5SC34-2748-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ing4t600.pdf",
      "Title": "System Automation for z/OS: TWS Automation Programmer\u2019s Reference and Operator\u2019s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2749-00",
      "FirstPage": "SystemAutomationforz/OSTWSAutomationProgrammer\u2019sReferenceandOperator\u2019sGuideVersion3Release5SC34-2749-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ing4u600.pdf",
      "Title": "Product Automation Programmer\u2019s Reference and Operator\u2019s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2714-00",
      "FirstPage": "SystemAutomationforz/OSProductAutomationProgrammer\u2019sReferenceandOperator\u2019sGuideVersion3Release5SC34-2714-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/inqq7a20.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SH12-6295-05",
      "FirstPage": "TextSearch:ProgrammingtheTextSearchEngineVersion2.10SH12-6295-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioa2dp20.pdf",
      "Title": "System z10 OSA-Express3 ICC Dual-Port Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2266-02",
      "FirstPage": "Systemz10OpenSystemsAdapter-Express3IntegratedConsoleControllerDual-PortUser\u0027sGuideSA23-2266-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioa2m120.pdf",
      "Title": "System z9 and zSeries z890 and z990 OSA-ICC User|mJs Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7990-01",
      "FirstPage": "System z9 and Eserver zSeries z890 and z990Open Systems Adapter-Express Integrated Console Controller User\u2019s Guide SA22-"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioa2sf00.pdf",
      "Title": "zSeries OSA/SF on the Hardware Management Console",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7580-00",
      "FirstPage": "zEnterpriseSystemOpenSystemsAdapter/SupportFacilityontheHardwareManagementConsoleSC14-7580-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioa2sp00.pdf",
      "Title": "OSA-Express ICC 3215 Support",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2247-00",
      "FirstPage": "System zOpen Systems Adapter-Express Integrated Console Controller 3215 Support SA23-2247-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioa2z1c0.pdf",
      "Title": "OSA-Express Customer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7935-15",
      "FirstPage": "zEnterpriseSystemandSystemz10OpenSystemsAdapter-ExpressCustomer\u0027sGuideandReferenceSA22-7935-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioasug09.pdf",
      "Title": "IOAU6MST",
      "Author": "RESNIK  ",
      "Subject": "",
      "DocumentNumber": "SC28-1855-06",
      "FirstPage": " OS/390IBM Open Systems AdapterSupport Facility User\u0027s GuideFor OSA-2    SC28-1855-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ipeoue20.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-6697-02",
      "FirstPage": "OS/390UNIXSystemServicesParallelEnvironment:OperationandUseSC33-6697-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf1cs10.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1623-03",
      "FirstPage": "OS/390SDSFCustomizationandSecuritySC28-1623-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf1gr20.pdf",
      "Title": "OS/390 V2R10.0 SDSF Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC28-1622-04",
      "FirstPage": "OS/390SDSFGuideandReferenceSC28-1622-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs10.pdf",
      "Title": "z/OS V1R2.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-01",
      "FirstPage": "z/OSSDSFOperationandCustomizationSA22-7670-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs20.pdf",
      "Title": "z/OS V1R3.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-02",
      "FirstPage": "z/OSSDSFOperationandCustomizationSA22-7670-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs31.pdf",
      "Title": "z/OS V1R4.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-04",
      "FirstPage": "z/OSSDSF Operation and Customization   SA22-7670-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs42.pdf",
      "Title": "z/OS V1R5.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-07",
      "FirstPage": "z/OSSDSF Operation and Customization   SA22-7670-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs50.pdf",
      "Title": "z/OS V1R7.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-08",
      "FirstPage": "z/OSSDSF Operation and Customization   SA22-7670-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs60.pdf",
      "Title": "z/OS V1R8.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-09",
      "FirstPage": "z/OSSDSF Operation and Customization   SA22-7670-09  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs70.pdf",
      "Title": "z/OS V1R9.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-10",
      "FirstPage": "z/OSSDSF Operation and Customization    SA22-7670-10  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs80.pdf",
      "Title": "z/OS V1R10.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-11",
      "FirstPage": "z/OSSDSF Operation and Customization    SA22-7670-11  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs90.pdf",
      "Title": "z/OS V1R11.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-12",
      "FirstPage": "z/OSSDSFOperationandCustomizationSA22-7670-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4csa0.pdf",
      "Title": "z/OS V1R12.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-14",
      "FirstPage": "z/OSSDSFOperationandCustomizationSA22-7670-14\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4csb0.pdf",
      "Title": "z/OS V1R13.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-15",
      "FirstPage": "z/OSSDSFOperationandCustomizationSA22-7670-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf5cs00.pdf",
      "Title": "z/OS V2R1.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2274-00",
      "FirstPage": "z/OSSDSFOperationandCustomizationVersion2Release1SA23-2274-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf5cs01.pdf",
      "Title": "z/OS V2R1.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2274-01",
      "FirstPage": "z/OSSDSF Operation and CustomizationVersion2 Release1SA23-2274-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf5cs10.pdf",
      "Title": "z/OS V2R2 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2274-02",
      "FirstPage": "z/OSSDSFOperationandCustomizationVersion2Release2SA23-2274-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2dg00.pdf",
      "Title": "z/OS V2R1.0 ISPF Dialog Developer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3619-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogDeveloper\u0027sGuideandReferencez/OSVersion2Release1.0SC19-3619-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2dt00.pdf",
      "Title": "z/OS V2R1.0 ISPF DTL Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3620-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogTagLanguageGuideandReferencez/OSVersion2Release1.0SC19-3620-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2em00.pdf",
      "Title": "z/OS V2R1.0 ISPF Edit and Edit Macros",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3621-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)EditandEditMacrosz/OSVersion2Release1.0SC19-3621-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2mc00.pdf",
      "Title": "z/OS V2R1.0 ISPF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3622-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)MessagesandCodesz/OSVersion2Release1.0SC19-3622-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2pc00.pdf",
      "Title": "z/OS V2R1.0 ISPF Planning and Customizing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC19-3623-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)PlanningandCustomizingz/OSVersion2ReleaseGC19-3623-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2pc10.pdf",
      "Title": "z/OS V2R2 ISPF Planning and Customizing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC19-3623-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)PlanningandCustomizingz/OSVersion2Release2GC19-3623-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2rs00.pdf",
      "Title": "z/OS V2R1.0 ISPF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3624-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ReferenceSummaryz/OSVersion2Release1.0SC19-3624-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2sc00.pdf",
      "Title": "z/OS V2R1.0 ISPF SCLM Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3625-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)SoftwareConfigurationandLibraryManager(SCLM)GuideandReferencez/OSVersion2Rele"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2sg00.pdf",
      "Title": "z/OS V2R1.0 ISPF Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3626-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ServicesGuidez/OSVersion2Release1.0SC19-3626-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2u200.pdf",
      "Title": "z/OS V2R1.0 ISPF User\u0027s Guide Vol II",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3628-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u0027sGuideVolumeIIz/OSVersion2Release1.0SC19-3628-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2ug00.pdf",
      "Title": "z/OS V2R1.0 ISPF User\u0027s Guide Vol I",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3627-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u0027sGuideVolumeIz/OSVersion2Release1.0SC19-3627-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispdgd04.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1273-04",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogDeveloper\u2019sGuideandReferenceOS/390Version2Release10.0SC28-1273-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispedt04.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1312-04",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)EditandEditMacrosOS/390Version2Release10.0SC28-1312-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispfac04.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1317-04",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)LibraryManagementFacilityOS/390Version2Release10.0SC28-1317-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispfrs10.pdf",
      "Title": "z/OS V1R2.0 ISPF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4816-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ReferenceSummaryz/OSVersion1Release2.0SC34-4816-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispmes04.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1326-04",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)MessagesandCodesOS/390Version2Release10.0GC28-1326-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isppla04.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1298-04",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)PlanningandCustomizingOS/390Version2Release10.0SC28-1298-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isppmd01.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC34-4750-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)SoftwareConfigurationandLibraryManager(SCLM)Developer\u2019sandProjectManager\u2019sGui"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispref04.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1308-04",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ReferenceSummaryOS/390Version2Release10.0SC28-1308-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isprfr04.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1320-04",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)SoftwareConfigurationandLibraryManager(SCLM)ReferenceOS/390Version2Release10."
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispser04.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1272-04",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ServicesGuideOS/390Version2Release10.0SC28-1272-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isptag04.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1219-04",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogTagLanguageGuideandReferenceOS/390Version2Release10.0SC28-1219-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispus200.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC34-4792-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u2019sGuideVolumeIIVersion2Release10.0SC34-4792-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispusg00.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC34-4791-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u2019sGuideVolumeIVersion2Release10.0SC34-4791-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzdg80.pdf",
      "Title": "z/OS V1R11.0 ISPF Dialog Developer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4821-08",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogDeveloper\u2019sGuideandReferencez/OSVersion1Release11.0SC34-4821-08\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzdg90.pdf",
      "Title": "z/OS V1R13.0 ISPF Dialog Developer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4821-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogDeveloper\u0027sGuideandReferencez/OSVersion1Release13.0SC34-4821-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzdt80.pdf",
      "Title": "z/OS V1R11.0 ISPF DTL Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4824-08",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogTagLanguageGuideandReferencez/OSVersion1Release11.0SC34-4824-08\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzdt90.pdf",
      "Title": "z/OS V1R13.0 ISPF DTL Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4824-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogTagLanguageGuideandReferencez/OSVersion1Release13.0SC34-4824-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzem00.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC34-4820-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)EditandEditMacrosz/OSVersion1Release1.0SC34-4820-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzem80.pdf",
      "Title": "z/OS V1R11.0 ISPF Edit and Edit Macros",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4820-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)EditandEditMacrosz/OSVersion1Release11.0SC34-4820-09\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzem90.pdf",
      "Title": "z/OS V1R13.0 ISPF Edit and Edit Macros",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4820-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)EditandEditMacrosz/OSVersion1Release13.0SC34-4820-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzmc80.pdf",
      "Title": "z/OS V1R11.0 ISPF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4815-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)MessagesandCodesz/OSVersion1Release11.0SC34-4815-09\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzmc90.pdf",
      "Title": "z/OS V1R13.0 ISPF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4815-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)MessagesandCodesz/OSVersion1Release13.0SC34-4815-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzpc80.pdf",
      "Title": "z/OS V1R11.0 ISPF Planning and Customizing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC34-4814-08",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)PlanningandCustomizingz/OSVersion1Release11.0GC34-4814-08\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzpc90.pdf",
      "Title": "z/OS V1R13.0 ISPF Planning and Customizing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC34-4814-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)PlanningandCustomizingz/OSVersion1Release13.0GC34-4814-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzrs80.pdf",
      "Title": "z/OS V1R11.0 ISPF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4816-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ReferenceSummaryz/OSVersion1Release11.0SC34-4816-09\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzrs90.pdf",
      "Title": "z/OS V1R13.0 ISPF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4816-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ReferenceSummaryz/OSVersion1Release13.0SC34-4816-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzsc80.pdf",
      "Title": "z/OS V1R11.0 ISPF SCLM Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4817-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)SoftwareConfigurationandLibraryManager(SCLM)GuideandReferencez/OSVersion1Rele"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzsc90.pdf",
      "Title": "z/OS V1R13.0 ISPF SCLM Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4817-11",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)SoftwareConfigurationandLibraryManager(SCLM)GuideandReferencez/OSVersion1Rele"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzsg80.pdf",
      "Title": "z/OS V1R11.0 ISPF Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4819-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ServicesGuidez/OSVersion1Release11.0SC34-4819-09\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzsg90.pdf",
      "Title": "z/OS V1R13.0 ISPF Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4819-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ServicesGuidez/OSVersion1Release13.0SC34-4819-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzu280.pdf",
      "Title": "z/OS V1R11.0 ISPF User\u0027s Guide Vol II",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4823-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u2019sGuideVolumeIIz/OSVersion1Release11.0SC34-4823-09\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzu290.pdf",
      "Title": "z/OS V1R13.0 ISPF User\u0027s Guide Vol II",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4823-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u0027sGuideVolumeIIz/OSVersion1Release13.0SC34-4823-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzug60.pdf",
      "Title": "z/OS V1R9.0 ISPF User\u0027s Guide Vol I",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4822-06",
      "FirstPage": "Interactive System Productivity Facility (ISPF)User\u2019s Guide Volume I z/OS Version 1 Release 9.0 SC34-4822-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzug80.pdf",
      "Title": "z/OS V1R11.0 ISPF User\u0027s Guide Vol I",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4822-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u2019sGuideVolumeIz/OSVersion1Release11.0SC34-4822-09\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzug90.pdf",
      "Title": "z/OS V1R13.0 ISPF User\u0027s Guide Vol I",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4822-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u0027sGuideVolumeIz/OSVersion1Release13.0SC34-4822-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/izu23140.pdf",
      "Title": "IBM z/OSMF V2R1 Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0657-04",
      "FirstPage": "z/OSIBMz/OSManagementFacilityConfigurationGuideVersion2Release1SA38-0657-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/izu27140.pdf",
      "Title": "IBM z/OSMF V2R1 Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1066-04",
      "FirstPage": "z/OSIBMz/OSManagementFacilityProgrammingGuideVersion2Release1SA32-1066-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/izu27200.pdf",
      "Title": "IBM z/OSMF V2R2 Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8420-00",
      "FirstPage": "z/OSIBMz/OSManagementFacilityProgrammingGuideVersion2Release2SC27-8420-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/izuz3110.pdf",
      "Title": "z/OSMF: Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0652-03",
      "FirstPage": "z/OSIBMz/OSManagementFacilityConfigurationGuideVersion1Release12SA38-0652-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/izuz3120.pdf",
      "Title": "z/OSMF Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0652-05",
      "FirstPage": "z/OSIBMz/OSManagementFacilityConfigurationGuideVersion1Release13SA38-0652-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/izuza100.pdf",
      "Title": "IZUZA100",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-2886-00",
      "FirstPage": " IBMProgram Directory forz/OS Management FacilityV1.11.0Program Number5655-S28FMID HSMA110for Use withz/OS V1.10.0 or hi"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/sa227209.pdf",
      "Title": "REFMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7209-02",
      "FirstPage": "  Enterprise SystemsArchitecture/390IBM Reference Summary    SA22-7209-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/x2660200.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SX26-6020-00",
      "FirstPage": "OS/390DFSMSrmmCommandReferenceSummarySX26-6020-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a2278324.pdf",
      "Title": "Principles of Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7832-04",
      "FirstPage": "z/Architecture\u0001\u0002\u0003\u00AEPrinciples of OperationSA22-7832-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a2314520.pdf",
      "Title": "GPFS: Administration and Programming Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1452-00",
      "FirstPage": "GeneralParallelFileSystemVersion4Release1AdministrationandProgrammingReferenceSA23-1452-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/a2322320.pdf",
      "Title": "Preliminary Decimal-Floating-Point Architecture",
      "Author": "Lundvall",
      "Subject": "Preliminary Decimal-Floating-Point Architecture",
      "DocumentNumber": "SA23-2232-00",
      "FirstPage": "SA23-2232-00z/Architecture\u0002\u0003\u0004\u00AEPreliminary Decimal-Floating-Point ArchitectureNovember, 2006"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ab0in022.pdf",
      "Title": "Installing, Managing, and Using the Online Library",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC31-8311-47",
      "FirstPage": "IBMOnlineLibraryInstalling,Managing,andUsingtheOnlineLibraryGC31-8311-47\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admd1a03.pdf",
      "Title": "GDDM V3R2 Messages",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-0869-01",
      "FirstPage": "GDDMIBM MessagesVersion 3 Release 2    SC33-0869-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/admg1a05.pdf",
      "Title": "IBM GDDM General Information",
      "Author": "",
      "Subject": "IBM GDDM",
      "DocumentNumber": "GC33-0866-03",
      "FirstPage": "GDDMIBM General InformationVersion 3 Release 2    GC33-0866-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ajva1110.pdf",
      "Title": "AJVA1110",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9828-00",
      "FirstPage": " IBMProgram Directory forIBM 31-bit SDK for z/OS, Java Technology EditionV7.0.0Program Number5655-W43FMIDs HVJA700for Us"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ajvb1110.pdf",
      "Title": "AJVB1110",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9829-00",
      "FirstPage": " IBMProgram Directory forIBM 64-bit SDK for z/OS, Java Technology EditionV7.0.0Program Number5655-W44FMIDs HVJB700for Us"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ajvc0110.pdf",
      "Title": "Installation and User\u0027s Guide: Installation and User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0696-00",
      "FirstPage": "JZOSBatchLauncherandToolkitfunctioninIBMJavaSE7SDKsforz/OSInstallationandUser\u0027sGuideSA38-0696-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/am11da06.pdf",
      "Title": "MD2DMSTR",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-3124-02",
      "FirstPage": " Thiskeylineindicatessizeandpositionofgraphiconly,keylinedoesnotprint. MVS/ESA Storage Management LibraryManaging DataSC"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/am11gr07.pdf",
      "Title": "MD2GMSTR",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-3125-02",
      "FirstPage": " Thiskeylineindicatessizeandpositionofgraphiconly,keylinedoesnotprint. MVS/ESA Storage Management LibraryManaging Storag"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/am11ld04.pdf",
      "Title": "MD2LMSTR",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-3126-02",
      "FirstPage": " Thiskeylineindicatessizeandpositionofgraphiconly,keylinedoesnotprint. MVS/ESA Storage Management LibraryLeading a Stora"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ant3r110.pdf",
      "Title": "z/OS V2R2 DFSMS Advanced Copy Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6847-02",
      "FirstPage": "z/OSDFSMSAdvancedCopyServicesVersion2Release2SC23-6847-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aokfa100.pdf",
      "Title": " IBM Print Transforms from AFP for Infoprint Server for z/OS V1.1",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "IBMPrintTransformsfromAFPforInfoprintServerforz/OSVersion1.1G325-2634-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aokla100.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "LicensedProgramSpecifications\u0002\u0003\u0004IBMPrintTransformfromAFPtoPCLforInfoprintServerforz/OSVersion1Release1,ProgramNumber5655"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aoklb100.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "LicensedProgramSpecifications\u0002\u0003\u0004IBMPrintTransformfromAFPtoPDFforInfoprintServerforz/OSVersion1Release1,ProgramNumber5655"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aoklc100.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "LicensedProgramSpecifications\u0002\u0003\u0004IBMPrintTransformfromAFPtoPostScriptforInfoprintServerforz/OSVersion1Release1,ProgramNum"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1c010.pdf",
      "Title": "z/OS V2R2 Infoprint Server Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0691-01",
      "FirstPage": "z/OSInfoprintServerCustomizationVersion2Release2.0SA38-0691-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1i010.pdf",
      "Title": "z/OS V2R2 Infoprint Server Introduction",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0692-01",
      "FirstPage": "z/OSInfoprintServerIntroductionVersion2Release2.0SA38-0692-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1m010.pdf",
      "Title": "z/OS V2R2 Infoprint Server Messages and Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0927-01",
      "FirstPage": "z/OSInfoprintServerMessagesandDiagnosisVersion2Release2.0GA32-0927-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1o010.pdf",
      "Title": "z/OS V2R2 Infoprint Server Operation and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0693-01",
      "FirstPage": "z/OSInfoprintServerOperationandAdministrationVersion2Release2.0SA38-0693-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1pi10.pdf",
      "Title": "z/OS V2R2 Infoprint Server Printer Inventory for PSF",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0694-01",
      "FirstPage": "z/OSInfoprintServerPrinterInventoryforPSFVersion2Release2.0SA38-0694-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop1v010.pdf",
      "Title": "z/OS V2R2 Infoprint Server User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0695-01",
      "FirstPage": "z/OSInfoprintServerUser\u0027sGuideVersion2Release2.0SA38-0695-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop2lt20.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "LicensedProgramSpecifications\u0002\u0003\u0004IBMInfoprintTransformstoAFPVersion2Release3forz/OS,ProgramNumber5655-N60IBM\u00AEInfoprintTra"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aop2ta20.pdf",
      "Title": "IBM Infoprint Transforms to AFP V2.3 for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "IBMInfoprintTransformstoAFPforz/OSVersion2Release3G550-0443-05\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aps4ac40.pdf",
      "Title": "PSF V4R5 for z/OS: ACIF User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "PrintServicesFacilityAFPConversionandIndexingFacilityUser\u2019sGuideS550-0436-04\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aps4cu40.pdf",
      "Title": "PSF V4R5 for z/OS: Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "PrintServicesFacilityforz/OSCustomizationVersion4,Release5.0S550-0427-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aps4dg40.pdf",
      "Title": "PSF V4R5 for z/OS: Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "PrintServicesFacilityforz/OSDiagnosisVersion4,Release5.0G550-0428-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aps4dp40.pdf",
      "Title": "PSF V4R5 for z/OS: AFP Download Plus",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "PrintServicesFacilityforz/OSAFPDownloadPlusVersion4,Release5.0S550-0433-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aps4dw40.pdf",
      "Title": "PSF V4R5 for z/OS: Download for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "PrintServicesFacilityforz/OSDownloadforz/OSVersion4,Release5.0S550-0429-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aps4in40.pdf",
      "Title": "PSF V4R5 for z/OS: Introduction",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "PrintServicesFacilityforz/OSIntroductionVersion4,Release5.0G550-0430-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aps4mg40.pdf",
      "Title": "PSF V4R5 for z/OS: Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "PrintServicesFacilityforz/OSMessagesandCodesVersion4,Release5.0G550-0432-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/aps4ug40.pdf",
      "Title": "PSF V4R5 for z/OS: User\u2122s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "PrintServicesFacilityforz/OSUser\u2019sGuideVersion4,Release5.0S550-0435-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/apsb0430.pdf",
      "Title": "PSF V4R4 for z/OS: Security Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "PrintServicesFacilityforz/OSSecurityGuideVersion4,Release4.0S550-0434-03\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/apsl9430.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "LicensedProgramSpecifications\u0002\u0003\u0004PrintServicesFacilityVersion4Release4.0forz/OS,ProgramNumber5655-M32PrintServicesFacilit"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmg1022.pdf",
      "Title": "HLASM V1R6 General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-4943-07",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEGeneralInformationVersion1Release6GC26-4943-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmi1022.pdf",
      "Title": "HLASM V1R6 Installation and Customization Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-3494-06",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEInstallationandCustomizationGuideVersion1Release6SC26-3494-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmp1010.pdf",
      "Title": "High Level Assembler for MVS \u0026 VM \u0026 VSE Programmer\u0027s Guide",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-4941-04",
      "FirstPage": " High Level Assembler for MVS \u0026 VM \u0026 VSEIBM Programmer\u2019s GuideRelease 5    SC26-4941-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmp1021.pdf",
      "Title": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSE: Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-4941-06",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEProgrammer\u0027sGuideVersion1Release6SC26-4941-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmp1022.pdf",
      "Title": "HLASM V1R6 Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-4941-07",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEProgrammer\u0027sGuideVersion1Release6SC26-4941-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmr1020.pdf",
      "Title": "HLASM: V1R6 Language Ref",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-4940-05",
      "FirstPage": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSELanguage Reference Release 6  SC26-4940-05  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmr1021.pdf",
      "Title": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSE: Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-4940-06",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSELanguageReferenceVersion1Release6SC26-4940-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmr1022.pdf",
      "Title": "HLASM V1R6 Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-4940-07",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSELanguageReferenceVersion1Release6SC26-4940-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtic22.pdf",
      "Title": "HLASM V1R6 Toolkit Feature Installation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-8711-10",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEToolkitFeatureInstallationandCustomizationGuideVersion1Release6GC26-8711-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtis22.pdf",
      "Title": "HLASM V1R6 Toolkit Feature Debug Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-8712-07",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEIDFReferenceSummaryVersion1Release6GC26-8712-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtiu22.pdf",
      "Title": "HLASM V1R6 Toolkit Feature Interactive Debug Facility User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-8709-08",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEToolkitFeatureInteractiveDebugFacilityUser\u0027sGuideVersion1Release6GC26-8709-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtug21.pdf",
      "Title": "High Level Assembler for z/OS \u0026 z/VM \u0026 z/VSE: Toolkit Feature User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-8710-10",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEToolkitFeatureUser\u0027sGuideVersion1Release6GC26-8710-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asmtug22.pdf",
      "Title": "HLASM V1R6 Toolkit Feature User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC26-8710-11",
      "FirstPage": "HighLevelAssemblerforz/OS\u0026z/VM\u0026z/VSEToolkitFeatureUser\u0027sGuideVersion1Release6GC26-8710-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/asumva10.pdf",
      "Title": "ASUMVMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5833-02",
      "FirstPage": " OS/390\uF6DAIBM DCE Application SupportProgramming Guide    SC24-5833-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/azfic101.pdf",
      "Title": "IBM Multi-Factor Authentication for z/OS Installation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8447-01",
      "FirstPage": "z/OSIBMMulti-FactorAuthenticationforz/OSInstallationandCustomizationVersion1Release1SC27-8447-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/azfug100.pdf",
      "Title": "IBM Multi-Factor Authentication for z/OS User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8448-00",
      "FirstPage": "z/OSIBMMulti-FactorAuthenticationforz/OSUser\u0027sGuideVersion1Release1SC27-8448-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/azkag100.pdf",
      "Title": "IBM z/OS Platform for Apache Spark v1.1.0 Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8451-00",
      "FirstPage": "IBMz/OSPlatformforApacheSparkAdministrator\u0027sGuideVersion1Release1SC27-8451-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/azkic100.pdf",
      "Title": "IBM z/OS Platform for Apache Spark v1.1.0 Installation and Customization Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8449-00",
      "FirstPage": "IBMz/OSPlatformforApacheSparkInstallationandCustomizationGuideVersion1Release1SC27-8449-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/azkmd100.pdf",
      "Title": "IBM z/OS Platform for Apache Spark v1.1.0 Solutions Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8452-00",
      "FirstPage": "IBMz/OSPlatformforApacheSparkSolutionsGuideVersion1Release1SC27-8452-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/azkpd100.pdf",
      "Title": "AZKPD100",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI13-4318-00",
      "FirstPage": " IBMProgram Directory forIBM z/OS Platform for Apache SparkV1.1.0Program Number5655-AABFMIDs HSPK110, HMDS110for Use wit"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/azkug100.pdf",
      "Title": "IBM z/OS Platform for Apache Spark v1.1.0 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8450-00",
      "FirstPage": "IBMz/OSPlatformforApacheSparkUser\u0027sGuideVersion1Release1SC27-8450-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/b107037b.pdf",
      "Title": "IOCP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SB10-7037-11",
      "FirstPage": "SystemzInput/OutputConfigurationProgramUser\u0027sGuideforICPIOCPSB10-7037-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bbncfg76.pdf",
      "Title": "IBM WebSphere Application Server OEM Edition for z/OS Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0631-06",
      "FirstPage": "IBMWebSphereApplicationServerOEMEditionforz/OSConfigurationGuideVersion7.0.xGA32-0631-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtza410.pdf",
      "Title": "z/OS BDT Installation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7582-00",
      "FirstPage": "z/OSBulkDataTransferInstallationVersion2Release1SC14-7582-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtza510.pdf",
      "Title": "z/OS BDT File-to-File Transaction Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7583-00",
      "FirstPage": "z/OSBulkDataTransferFile-to-FileTransactionGuideVersion2Release1SC14-7583-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtza620.pdf",
      "Title": "z/OS BDT Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7584-00",
      "FirstPage": "z/OSBulkDataTransferCommandsVersion2Release1SC14-7584-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtza730.pdf",
      "Title": "z/OS BDT Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7585-00",
      "FirstPage": "z/OSBulkDataTransferMessagesandCodesVersion2Release1SC14-7585-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bdtza810.pdf",
      "Title": "z/OS BDT Diagnosis Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7586-00",
      "FirstPage": "z/OSBulkDataTransferDiagnosisReferenceVersion2Release1SC14-7586-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1b200.pdf",
      "Title": "z/OS V2R1.0 C Curses",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0690-00",
      "FirstPage": "z/OSCCursesVersion2Release1SA38-0690-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1cd10.pdf",
      "Title": "z/OS V2R2 UNIX System Services Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2280-02",
      "FirstPage": "z/OSUNIXSystemServicesCommandReferenceVersion2Release2SA23-2280-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1fr10.pdf",
      "Title": "z/OS V2R2 UNIX System Services File System Interface Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2285-01",
      "FirstPage": "z/OSUNIXSystemServicesFileSystemInterfaceReferenceVersion2Release2SA23-2285-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1mc10.pdf",
      "Title": "z/OS V2R2 UNIX System Services Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2284-02",
      "FirstPage": "z/OSUNIXSystemServicesMessagesandCodesVersion2Release2SA23-2284-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1pg00.pdf",
      "Title": "z/OS V2R1.0 UNIX System Services Planning",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0884-00",
      "FirstPage": "z/OSUNIXSystemServicesPlanningVersion2Release1GA32-0884-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1pg11.pdf",
      "Title": "z/OS V2R2 UNIX System Services Planning",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0884-02",
      "FirstPage": "z/OSUNIXSystemServicesPlanningVersion2Release2GA32-0884-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1pt01.pdf",
      "Title": "z/OS V2R1.0 UNIX System Services Programming Tools",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2282-01",
      "FirstPage": "z/OSUNIXSystemServicesProgrammingToolsVersion2Release1SA23-2282-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1rx00.pdf",
      "Title": "z/OS V2R1.0 Using REXX and z/OS UNIX System Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2283-00",
      "FirstPage": "z/OSUsingREXXandz/OSUNIXSystemServicesVersion2Release1SA23-2283-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1rx10.pdf",
      "Title": "z/OS V2R2 Using REXX and z/OS UNIX System Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2283-01",
      "FirstPage": "z/OSUsingREXXandz/OSUNIXSystemServicesVersion2Release2SA23-2283-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1ug00.pdf",
      "Title": "z/OS V2R1.0 UNIX System Services User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2279-00",
      "FirstPage": "z/OSUNIXSystemServicesUser\u0027sGuideVersion2Release1SA23-2279-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx1ug10.pdf",
      "Title": "z/OS V2R2 UNIX System Services User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2279-01",
      "FirstPage": "z/OSUNIXSystemServicesUser\u0027sGuideVersion2Release2SA23-2279-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpx2cr11.pdf",
      "Title": "z/OS V2R2 UNIX System Services Programming: Assembler Callable Services Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2281-03",
      "FirstPage": "z/OSUNIXSystemServicesProgramming:AssemblerCallableServicesReferenceVersion2Release2SA23-2281-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxza630.pdf",
      "Title": "z/OS V1R6.0 UNIX System Services Programming Tools",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7805-03",
      "FirstPage": "z/OSUNIX System Services Programming Tools   SA22-7805-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxza870.pdf",
      "Title": "z/OS V1R8.0 UNIX System Services Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7807-07",
      "FirstPage": "z/OSUNIX System Services Messages and Codes   SA22-7807-07  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb110.pdf",
      "Title": "z/OS V1R2.0 UNIX System Services Programming: Assembler Callable Services Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7803-01",
      "FirstPage": "z/OSUNIXSystemServicesProgramming:AssemblerCallableServicesReferenceSA22-7803-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb240.pdf",
      "Title": "z/OS V1R5.0 UNIX System Services Planning",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7800-05",
      "FirstPage": "z/OSUNIX System Services Planning   GA22-7800-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb280.pdf",
      "Title": "z/OS V1R9.0 UNIX System Services Planning",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7800-12",
      "FirstPage": "z/OSUNIX System Services Planning    GA22-7800-12  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb2a0.pdf",
      "Title": "z/OS V1R11.0 UNIX System Services Planning",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7800-16",
      "FirstPage": "z/OSUNIXSystemServicesPlanningGA22-7800-16\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb690.pdf",
      "Title": "z/OS V1R11.0 Using REXX and z/OS UNIX System Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7806-12",
      "FirstPage": "z/OSUsing REXX and z/OS UNIX System Services    SA22-7806-12  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb6a0.pdf",
      "Title": "z/OS V1R12.0 Using REXX and z/OS UNIX System Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7806-13",
      "FirstPage": "z/OSUsingREXXandz/OSUNIXSystemServicesSA22-7806-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/bpxzb6b0.pdf",
      "Title": "z/OS V1R13.0 Using REXX and z/OS UNIX System Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7806-14",
      "FirstPage": "z/OSUsingREXXandz/OSUNIXSystemServicesSA22-7806-14\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2370320.pdf",
      "Title": "GPFS: Advanced Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-7032-00",
      "FirstPage": "GeneralParallelFileSystemVersion4Release1AdvancedAdministrationGuideSC23-7032-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2643999.pdf",
      "Title": "KBXL9MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-4399-09",
      "FirstPage": "Common Programming InterfaceCommunications CPI-C ReferenceVersion 2.1    SC26-4399-09"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2761185.pdf",
      "Title": "IBM Wave for z/VM V1.1 Administration and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6118-05",
      "FirstPage": "IBMWaveIBMWaveforz/VM:AdministrationandCustomizationVersion1Release1SC27-6118-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/c2761195.pdf",
      "Title": "IBM Wave for z/VM V1.1 User Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6119-05",
      "FirstPage": "IBMWaveIBMWaveforz/VM:UserGuideandReferenceVersion1Release1SC27-6119-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbb1d210.pdf",
      "Title": "DWARF/ELF Extensions Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7312-02",
      "FirstPage": "z/OSDWARF/ELFExtensionsLibraryReferenceVersion2Release2SC14-7312-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbb1l210.pdf",
      "Title": "z/OS V2R2 Common Debug Architecture Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7311-02",
      "FirstPage": "z/OSCommonDebugArchitectureLibraryReferenceVersion2Release2SC14-7311-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbb1u210.pdf",
      "Title": "z/OS V2R2 Common Debug Architecture User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7310-01",
      "FirstPage": "z/OSCommonDebugArchitectureUser\u0027sGuideVersion2Release2SC14-7310-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1d211.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC14-7305-03",
      "FirstPage": "z/OSXLC/C\u002B\u002BMessagesVersion2Release2GC14-7305-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1l210.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7308-02",
      "FirstPage": "z/OSXLC/C\u002B\u002BLanguageReferenceVersion2Release2SC14-7308-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1l215.pdf",
      "Title": "z/OS XL C/C\u002B\u002B Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7308-07",
      "FirstPage": "z/OSXLC/C\u002B\u002BLanguageReferenceVersion2Release2SC14-7308-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1m211.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Compiler and Runtime Migration Guide for the Application Programmer",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC14-7306-03",
      "FirstPage": "z/OSXLC/C\u002B\u002BCompilerandRuntimeMigrationGuidefortheApplicationProgrammerVersion2Release2GC14-7306-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1p201.pdf",
      "Title": "z/OS V2R1.0 XL C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7315-01",
      "FirstPage": "z/OSXLC/C\u002B\u002BProgrammingGuideVersion2Release1SC14-7315-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1p210.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7315-02",
      "FirstPage": "z/OSXLC/C\u002B\u002BProgrammingGuideVersion2Release2SC14-7315-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1p216.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7315-08",
      "FirstPage": "z/OSXLC/C\u002B\u002BProgrammingGuideVersion2Release2SC14-7315-08IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1s200.pdf",
      "Title": "Standard C\u002B\u002B Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7309-00",
      "FirstPage": "z/OSStandardC\u002B\u002BLibraryReferenceVersion2Release1SC14-7309-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1u210.pdf",
      "Title": "z/OS V2R2 XL C/C\u002B\u002B User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7307-02",
      "FirstPage": "z/OSXLC/C\u002B\u002BUser\u2019sGuideVersion2Release2SC14-7307-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbc1u215.pdf",
      "Title": "z/OS XL C/C\u002B\u002B User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7307-07",
      "FirstPage": "z/OSXLC/C\u002B\u002BUser\u2019sGuideVersion2Release2SC14-7307-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbccl110.pdf",
      "Title": "C/C\u002B\u002B Legacy Classes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-7652-01",
      "FirstPage": "C/C\u002B\u002B Legacy Class Libraries Reference SC09-7652-01   \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcit100.pdf",
      "Title": "IBM Open Class Library Transition Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4948-01",
      "FirstPage": "IBMOpenClassLibraryTransitionGuideSC09-4948-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcpg130.pdf",
      "Title": "z/OS V1R4.0 C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4765-03",
      "FirstPage": "z/OSC/C\u002B\u002BProgrammingGuideSC09-4765-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcpg1a0.pdf",
      "Title": "z/OS V1R11.0 XL C/C\u002B\u002B Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4765-10",
      "FirstPage": "z/OSXL C/C\u002B\u002BProgramming Guide   SC09-4765-10  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcug160.pdf",
      "Title": "z/OS V1R9.0  XL C/C\u002B\u002B User\u2019s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4767-06",
      "FirstPage": "z/OSXL C/C\u002B\u002BUser\u2019s Guide SC09-4767-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbcug170.pdf",
      "Title": "z/OS V1R10.0  XL C/C\u002B\u002B User\u2019s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC09-4767-07",
      "FirstPage": "z/OSXL C/C\u002B\u002BUser\u2019s Guide SC09-4767-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbd2me12.pdf",
      "Title": "z/OS V2R2 and z/VM V6R2.0 HCD Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2668-03",
      "FirstPage": "z/OSandz/VMHardwareConfigurationDefinitionMessagesVersion2Release2SC34-2668-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbd2ug00.pdf",
      "Title": "z/OS V2R1.0 HCD User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2669-00",
      "FirstPage": "z/OSHardwareConfigurationDefinitionUser\u0027sGuideVersion2Release1SC34-2669-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cbd2ug12.pdf",
      "Title": "z/OS V2R2 HCD User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2669-04",
      "FirstPage": "z/OSHardwareConfigurationDefinitionUser\u0027sGuideVersion2Release2SC34-2669-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cds2a101.pdf",
      "Title": "z/OS OCSF Application Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7513-01",
      "FirstPage": "z/OSOpenCryptographicServicesFacilityApplicationProgrammingVersion2Release2SC14-7513-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cds2a200.pdf",
      "Title": "z/OS OCSF Module Developer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7514-00",
      "FirstPage": "z/OSOpenCryptographicServicesFacilityServiceProviderModuleDeveloper\u2019sGuideandReferenceVersion2Release1SC14-7514-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee11211.pdf",
      "Title": "z/OS V2R2 Language Environment Debugging Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0908-03",
      "FirstPage": "z/OSLanguage EnvironmentDebugging GuideVersion2 Release2GA32-0908-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee12210.pdf",
      "Title": "z/OS V2R2 Language Environment Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0682-02",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingGuideVersion2Release2SA38-0682-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee13200.pdf",
      "Title": "z/OS Language Environment Programming Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0683-00",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingReferenceVersion2Release1SA38-0683-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee13211.pdf",
      "Title": "z/OS Language Environment Programming Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0683-02",
      "FirstPage": "z/OSLanguage EnvironmentProgramming ReferenceVersion2 Release2SA38-0683-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee14200.pdf",
      "Title": "z/OS V2R1.0 Language Environment Writing ILC Applications",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0684-00",
      "FirstPage": "z/OSLanguageEnvironmentWritingInterlanguageCommunicationApplicationsVersion2Release1SA38-0684-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee15201.pdf",
      "Title": "z/OS V2R1.0 Language Environment Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0685-01",
      "FirstPage": "z/OSLanguageEnvironmentCustomizationVersion2Release1SA38-0685-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee16200.pdf",
      "Title": "z/OS V2R1.0 Language Environment Runtime Application Migration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0912-00",
      "FirstPage": "z/OSLanguageEnvironmentRuntimeApplicationMigrationGuideVersion2Release1GA32-0912-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee18200.pdf",
      "Title": "z/OS V2R1.0 Language Environment Concepts Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0687-00",
      "FirstPage": "z/OSLanguageEnvironmentConceptsGuideVersion2Release1SA38-0687-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee19211.pdf",
      "Title": "z/OS V2R2 Language Environment Runtime Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0686-04",
      "FirstPage": "z/OSLanguage EnvironmentRuntime MessagesVersion2 Release2SA38-0686-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee1m200.pdf",
      "Title": "z/OS V2R1.0 Language Environment Programming Guide for 64-bit Virtual Addressing Mode",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0689-00",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingGuidefor64-bitVirtualAddressingModeVersion2Release1SA38-0689-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cee1v210.pdf",
      "Title": "z/OS V2R2 Language Environment Vendor Interfaces",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0688-03",
      "FirstPage": "z/OSLanguageEnvironmentVendorInterfacesVersion2Release2SA38-0688-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea1180.pdf",
      "Title": "z/OS V1R9.0 Language Environment Debugging Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7560-08",
      "FirstPage": "z/OSLanguage Environment Debugging Guide GA22-7560-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea2170.pdf",
      "Title": "z/OS V1R8.0 Language Environment Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7561-07",
      "FirstPage": "z/OSLanguage Environment Programming Guide SA22-7561-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea2180.pdf",
      "Title": "z/OS V1R9.0 Language Environment Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7561-08",
      "FirstPage": "z/OSLanguage Environment Programming Guide SA22-7561-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea21b0.pdf",
      "Title": "z/OS V1R12.0 Language Environment Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7561-11",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingGuideSA22-7561-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea21c0.pdf",
      "Title": "z/OS V1R13.0 Language Environment Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7561-12",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingGuideSA22-7561-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea3180.pdf",
      "Title": "z/OS V1R9.0 Language Environment Programming Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7562-09",
      "FirstPage": "z/OSLanguage Environment Programming Reference   SA22-7562-09  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea31c0.pdf",
      "Title": "z/OS V1R13.0 Language Environment Programming Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7562-13",
      "FirstPage": "z/OSLanguageEnvironmentProgrammingReferenceSA22-7562-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceea8160.pdf",
      "Title": "z/OS V1R7.0 Language Environment Concepts Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7567-06",
      "FirstPage": "z/OSLanguage Environment Concepts Guide   SA22-7567-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceev1160.pdf",
      "Title": "z/OS V1R7.0 Language Environment Vendor Interfaces",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7568-06",
      "FirstPage": "z/OSLanguage Environment Vendor Interfaces   SA22-7568-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ceq2a100.pdf",
      "Title": "z/OS Integrated Security Services Open Cryptographic Enhanced Plug-ins Application Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7568-00",
      "FirstPage": "z/OSIntegratedSecurityServicesOpenCryptographicEnhancedPlug-insApplicationProgrammingVersion2Release1SC14-7568-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cfz2ug00.pdf",
      "Title": "z/OS V2R1 Common Information Model User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2671-00",
      "FirstPage": "z/OSCommonInformationModelUser\u0027sGuideVersion2Release1SC34-2671-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cfz2ug10.pdf",
      "Title": "z/OS V2R2 Common Information Model User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2671-01",
      "FirstPage": "z/OSCommonInformationModelUser\u0027sGuideVersion2Release2SC34-2671-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cpn1pt11.pdf",
      "Title": "z/OS V1R2.0 Network File System Performance Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7418-02",
      "FirstPage": "z/OSNetworkFileSystemPerformanceTuningGuideSC26-7418-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cpn1pt20.pdf",
      "Title": "z/OS V1R5.0 Network File System Performance Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7418-03",
      "FirstPage": "z/OSNetwork File System Performance Tuning Guide SC26-7418-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cpn2co00.pdf",
      "Title": "z/OS V2R1.0 Network File System Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6883-00",
      "FirstPage": "z/OSNetworkFileSystemGuideandReferenceVersion2Release1SC23-6883-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cpn2co10.pdf",
      "Title": "z/OS V2R2 Network File System Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6883-01",
      "FirstPage": "z/OSNetworkFileSystemGuideandReferenceVersion2Release2SC23-6883-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cpn2co11.pdf",
      "Title": "z/OS V2R2 Network File System Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6883-02",
      "FirstPage": "z/OSNetwork File SystemGuide and ReferenceVersion2 Release2SC23-6883-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csda1104.pdf",
      "Title": "IBM Encryption Facility for z/OS: User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1349-04",
      "FirstPage": "Encryption Facility for z/OSUser\u2019s GuideVersion 1 Release 2SA23-1349-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csdd1127.pdf",
      "Title": "IBM Encryption Facility for z/OS: Using Encryption Facility for OpenPGP",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2230-07",
      "FirstPage": "EncryptionFacilityforz/OSUsingEncryptionFacilityforOpenPGPVersion1Release2SA23-2230-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csde1123.pdf",
      "Title": "IBM Encryption Facility for z/OS: Planning and Customizing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2229-03",
      "FirstPage": "EncryptionFacilityforz/OSPlanningandCustomizingVersion1Release2SA23-2229-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c200.pdf",
      "Title": "z/OS ICSF System Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7507-00",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilitySystemProgrammer\u0027sGuideVersion2Release1SC14-7507-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c211.pdf",
      "Title": "z/OS ICSF System Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7507-03",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilitySystemProgrammer\u0027sGuideVersion2Release1SC14-7507-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c311.pdf",
      "Title": "z/OS ICSF Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7506-03",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityAdministrator\u0027sGuideVersion2Release1SC14-7506-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c411.pdf",
      "Title": "z/OS ICSF Application Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7508-03",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityApplicationProgrammer\u0027sGuideVersion2Release1SC14-7508-03\u0001"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c500.pdf",
      "Title": "z/OS ICSF Overview",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7505-00",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityOverviewVersion2Release1SC14-7505-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c511.pdf",
      "Title": "z/OS ICSF Overview",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7505-03",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityOverviewVersion2Release1SC14-7505-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2c710.pdf",
      "Title": "z/OS ICSF Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7509-02",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityMessagesVersion2Release1SC14-7509-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csf2ca10.pdf",
      "Title": "z/OS ICSF Writing PKCS #11 Applications",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7510-01",
      "FirstPage": "z/OSCryptographicServicesIntegratedCryptographicServiceFacilityWritingPKCS#11ApplicationsVersion2Release1SC14-7510-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csfadm10.pdf",
      "Title": "CSFB3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC23-3975-05",
      "FirstPage": "OS/390Integrated Cryptographic Service FacilityIBM Administrator\u0027s Guide    SC23-3975-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csfb3z50.pdf",
      "Title": "z/OS V1R6.0 ICSF Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7521-07",
      "FirstPage": "z/OS Cryptographic Services Integrated Cryptographic Service FacilityAdministrator\u2019s Guide   SA22-7521-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csfb4z82.pdf",
      "Title": "z/OS V1R9.0 ICSF Application Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7522-11",
      "FirstPage": "z/OS Cryptographic Services Integrated Cryptographic Service FacilityApplication Programmer\u2019s Guide SA22-7522-11  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csfspg11.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC23-3974-06",
      "FirstPage": "OS/390IntegratedCryptographicServiceFacilitySystemProgrammer\u2019sGuideSC23-3974-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/csqzaw15.pdf",
      "Title": "Using Java",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-6591-02",
      "FirstPage": "WebSphere MQUsing Java Version 6.0  SC34-6591-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/cunpde00.pdf",
      "Title": "CUNPDE00",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI10-9760-00",
      "FirstPage": "IBMProgram Directory forOS/390 V2 R8/R9/R10 support for UnicodeProgram Number5647-A01FMID HUNI2A0for Use withOS/390 V2 R"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/da61a106.pdf",
      "Title": "$DOC",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1251-08",
      "FirstPage": " 1998 February Place graphic in thisarea.  Outline iskeyline only.  DO NOT PRINT.IBM The Year 2000 and 2-Digit Dates:A G"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dat3gu00.pdf",
      "Title": "z/OS V2R1.0 DFSMStvs Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC52-1388-00",
      "FirstPage": "z/OSDFSMStvsAdministrationGuideVersion2Release1GC52-1388-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dat3pg00.pdf",
      "Title": "z/OS V2R1.0 DFSMStvs Planning and Operating Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6877-00",
      "FirstPage": "z/OSDFSMStvsPlanningandOperatingGuideVersion2Release1SC23-6877-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dat3pg10.pdf",
      "Title": "z/OS V2R2 DFSMStvs Planning and Operating Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6877-01",
      "FirstPage": "z/OSDFSMStvsPlanningandOperatingGuideVersion2Release2SC23-6877-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfht400.pdf",
      "Title": "CICS Transaction Server: CICS IMS Database Control Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-5711-00",
      "FirstPage": "CICS\u00AETransactionServerforz/OS\u2122CICSIMSDatabaseControlGuideVersion2Release1SC34-5711-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfhtm00.pdf",
      "Title": "CICS External Interfaces Guide",
      "Author": "",
      "Subject": "CICS Transaction Server for OS/390",
      "DocumentNumber": "SC33-1944-01",
      "FirstPage": "CICS\u00AETransactionServerforOS/390\u00AECICSExternalInterfacesGuideSC33-1944-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfhwe704.pdf",
      "Title": "CICS TS for VSE/ESA: Enhancements Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC34-5763-04",
      "FirstPage": "CICS\u00AETransactionServerforVSE/ESA\u2122EnhancementsGuideRelease1GC34-5763-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dfsct1g2.pdf",
      "Title": "IMS Connect Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC18-9287-01",
      "FirstPage": "IMSIMS Connect Guide and Reference Version 9 SC18-9287-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1es00.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-7318-00",
      "FirstPage": "DFSMS/MVSSoftwareSupportforIBMEnterpriseStorageServerSC26-7318-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1g206.pdf",
      "Title": "DA5G2MAS",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC26-4900-05",
      "FirstPage": " DFSMS/MVS Version 1 Release 4IBM General Information    GC26-4900-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1i606.pdf",
      "Title": "DA6I6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-3123-05",
      "FirstPage": " DFSMS/MVS Version 1 Release 5IBM Implementing System-Managed Storage    SC26-3123-05"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt1m303.pdf",
      "Title": "DA3M3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC26-4923-02",
      "FirstPage": " DFSMS/MVS Version 1 Release 5IBM Using Magnetic Tapes    SC26-4923-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2c400.pdf",
      "Title": "z/OS V1R1.0 DFSMSdfp Checkpoint/Restart",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7401-00",
      "FirstPage": "z/OSDFSMSdfpCheckpoint/RestartRelease1SC26-7401-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2d430.pdf",
      "Title": "z/OS V1R6.0 DFSMS: Using Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7410-04",
      "FirstPage": "z/OSDFSMS: Using Data Sets SC26-7410-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2i640.pdf",
      "Title": "z/OS V1R8.0 DFSMS Implementing System-Managed Storage",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7407-04",
      "FirstPage": "z/OSDFSMS Implementing System-Managed Storage SC26-7407-04  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2o311.pdf",
      "Title": "z/OS V1R3.0 z/OS DFSMS OAM PISA for Tape Libraries",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC35-0427-02",
      "FirstPage": "z/OSDFSMSObjectAccessMethodPlanning,Installation,andStorageAdministrationGuideforTapeLibrariesSC35-0427-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2s400.pdf",
      "Title": "z/OS V1R1.0 DFSMShsm Storage Administration Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC35-0422-00",
      "FirstPage": "z/OSDFSMShsmStorageAdministrationReferenceRelease1SC35-0422-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt2u2a0.pdf",
      "Title": "z/OS V1R13.0 DFSMSdss Storage Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC35-0423-15",
      "FirstPage": "z/OSDFSMSdssStorageAdministrationSC35-0423-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3a111.pdf",
      "Title": "z/OS V2R2 DFSMSrmm Application Programming Interface",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6872-01",
      "FirstPage": "z/OSDFSMSrmmApplicationProgrammingInterfaceVersion2Release2SC23-6872-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3c110.pdf",
      "Title": "z/OS V2R2 DFSMS Managing Catalogs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6853-02",
      "FirstPage": "z/OSDFSMSManagingCatalogsVersion2Release2SC23-6853-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3c400.pdf",
      "Title": "z/OS V2R1.0 DFSMSdfp Checkpoint/Restart",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6862-00",
      "FirstPage": "z/OSDFSMSdfpCheckpoint/RestartVersion2Release1SC23-6862-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3c710.pdf",
      "Title": "z/OS V2R2 DFSMS Installation Exits",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6850-02",
      "FirstPage": "z/OSDFSMSInstallationExitsVersion2Release2SC23-6850-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3c811.pdf",
      "Title": "z/OS V2R2 DFSMSrmm Implementation and Customization Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6874-01",
      "FirstPage": "z/OSDFSMSrmmImplementationandCustomizationGuideVersion2Release2SC23-6874-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3d400.pdf",
      "Title": "z/OS DFSMS Using Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6855-00",
      "FirstPage": "z/OSDFSMSUsingDataSetsVersion2Release1SC23-6855-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3d410.pdf",
      "Title": "z/OS DFSMS Using Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6855-03",
      "FirstPage": "z/OSDFSMSUsingDataSetsVersion2Release2SC23-6855-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3d510.pdf",
      "Title": "z/OS V2R2 DFSMS Macro Instructions for Data Sets",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6852-03",
      "FirstPage": "z/OSDFSMSMacroInstructionsforDataSetsVersion2Release2SC23-6852-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3da10.pdf",
      "Title": "z/OS DFSMShsm Data Areas",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC14-7504-02",
      "FirstPage": "z/OSDFSMShsmDataAreasVersion2Release2GC14-7504-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3di00.pdf",
      "Title": "z/OS V2R1.0 DFSMS Introduction V2R1.0 DFSMS Introduction",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6851-00",
      "FirstPage": "z/OSDFSMSIntroductionVersion2Release1SC23-6851-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3g310.pdf",
      "Title": "z/OS V2R2 DFSMSrmm Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6876-01",
      "FirstPage": "z/OSDFSMSrmmDiagnosisGuideVersion2Release2SC23-6876-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3g510.pdf",
      "Title": "z/OS V2R2 DFSMS Using the New Functions",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6857-04",
      "FirstPage": "z/OSDFSMSUsingtheNewFunctionsVersion2Release2SC23-6857-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3i210.pdf",
      "Title": "z/OS V2R2 DFSMS Access Method Services Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6846-02",
      "FirstPage": "z/OSDFSMSAccessMethodServicesCommandsVersion2Release2SC23-6846-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3i410.pdf",
      "Title": "z/OS V2R2 DFSMShsm Implementation and Customization Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6869-02",
      "FirstPage": "z/OSDFSMShsmImplementationandCustomizationGuideVersion2Release2SC23-6869-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3i510.pdf",
      "Title": "z/OS V2R2 DFSMS Using ISMF",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6856-01",
      "FirstPage": "z/OSDFSMSUsingtheInteractiveStorageManagementFacilityVersion2Release2SC23-6856-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3i610.pdf",
      "Title": "z/OS V2R2 DFSMS Implementing System-Managed Storage",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6849-01",
      "FirstPage": "z/OSDFSMSImplementingSystem-ManagedStorageVersion2Release2SC23-6849-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3j100.pdf",
      "Title": "z/OS V2R1.0 DFSMS Software Support for IBM System Storage TS1140, TS1130, and TS1120 Tape Drives (3592)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6854-00",
      "FirstPage": "z/OSDFSMSSoftwareSupportforIBMSystemStorageTS1140,TS1130,andTS1120TapeDrives(3592)Version2Release1SC23-6854-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3m310.pdf",
      "Title": "z/OS V2R2 DFSMS Using Magnetic Tapes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6858-01",
      "FirstPage": "z/OSDFSMSUsingMagneticTapesVersion2Release2SC23-6858-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3m500.pdf",
      "Title": "z/OS V2R1.0 DFSMS Distributed FileManager Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6848-00",
      "FirstPage": "z/OSDFSMSDistributedFileManagerGuideandReferenceVersion2Release1SC23-6848-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3o110.pdf",
      "Title": "z/OS V2R2 DFSMS OAM Application Programmer\u0027s Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6865-01",
      "FirstPage": "z/OSDFSMSObjectAccessMethodApplicationProgrammer\u2019sReferenceVersion2Release2SC23-6865-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3o210.pdf",
      "Title": "z/OS V2R2 DFSMS OAM Planning, Installation, and Storage Administration Guide for Object Support",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6866-01",
      "FirstPage": "z/OSDFSMSObjectAccessMethodPlanning,Installation,andStorageAdministrationGuideforObjectSupportVersion2Release2SC23-6866-"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3o310.pdf",
      "Title": "z/OS V2R2 DFSMS OAM Planning, Installation, and Storage Administration Guide for Tape Libraries",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6867-01",
      "FirstPage": "z/OSDFSMSObjectAccessMethodPlanning,Installation,andStorageAdministrationGuideforTapeLibrariesVersion2Release2SC23-6867-"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3r110.pdf",
      "Title": "z/OS V2R2 DFSMSdfp Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6863-01",
      "FirstPage": "z/OSDFSMSdfpDiagnosisVersion2Release2SC23-6863-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3r310.pdf",
      "Title": "z/OS V2R2 DFSMSrmm Managing and Using Removable Media",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6873-01",
      "FirstPage": "z/OSDFSMSrmmManagingandUsingRemovableMediaVersion2Release2SC23-6873-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3r410.pdf",
      "Title": "z/OS V2R2 DFSMShsm Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC52-1387-01",
      "FirstPage": "z/OSDFSMShsmDiagnosisVersion2Release2GC52-1387-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3rr10.pdf",
      "Title": "z/OS V2R2 DFSMSrmm Reporting",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6875-01",
      "FirstPage": "z/OSDFSMSrmmReportingVersion2Release2SC23-6875-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3s201.pdf",
      "Title": "z/OS V2R1.0 DFSMSdfp Storage Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6860-01",
      "FirstPage": "z/OSDFSMSdfpStorageAdministrationVersion2Release1SC23-6860-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3s210.pdf",
      "Title": "z/OS V2R2 DFSMSdfp Storage Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6860-02",
      "FirstPage": "z/OSDFSMSdfpStorageAdministrationVersion2Release2SC23-6860-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3s310.pdf",
      "Title": "z/OS V2R2 DFSMSdfp Advanced Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6861-02",
      "FirstPage": "z/OSDFSMSdfpAdvancedServicesVersion2Release2SC23-6861-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3s611.pdf",
      "Title": "z/OS V2R2 DFSMShsm Storage Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6871-04",
      "FirstPage": "z/OSDFSMShsm Storage AdministrationVersion2 Release2SC23-6871-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3u110.pdf",
      "Title": "z/OS V2R2 DFSMSdfp Utilities",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6864-01",
      "FirstPage": "z/OSDFSMSdfpUtilitiesVersion2Release2SC23-6864-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3u211.pdf",
      "Title": "z/OS V2R2 DFSMSdss Storage Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6868-04",
      "FirstPage": "z/OSDFSMSdss Storage AdministrationVersion2 Release2SC23-6868-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3u311.pdf",
      "Title": "z/OS V2R2 DFSMShsm Managing Your Own Data",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6870-02",
      "FirstPage": "z/OSDFSMShsm Managing Your Own DataVersion2 Release2SC23-6870-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dgt3v110.pdf",
      "Title": "z/OS V2R2 DFSMS Using the Volume Mount Analyzer",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6859-01",
      "FirstPage": "z/OSDFSMSUsingtheVolumeMountAnalyzerVersion2Release2SC23-6859-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dpr1cg00.pdf",
      "Title": "z/OS V2R2 HTTP Server User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8417-00",
      "FirstPage": "IBMHTTPServer-PoweredbyApacheVersion9SC27-8417-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dpr1cg01.pdf",
      "Title": "z/OS V2R2 HTTP Server User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8417-01",
      "FirstPage": "IBM HTTP Server - Powered by ApacheVersion9SC27-8417-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9ar008.pdf",
      "Title": "9PO08SM",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7201-08",
      "FirstPage": " Enterprise Systems Architecture/390IBM Principles of Operation    SA22-7201-08"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr000.pdf",
      "Title": "ZPO00SM",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7832-00",
      "FirstPage": " z/ArchitectureIBM Principles of Operation    SA22-7832-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr001.pdf",
      "Title": "ZPO01SM",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7832-01",
      "FirstPage": " z/ArchitectureIBM Principles of Operation    SA22-7832-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr002.pdf",
      "Title": "ZPO02SM",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7832-02",
      "FirstPage": " z/ArchitectureIBM Principles of Operation    SA22-7832-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr003.pdf",
      "Title": "DZ9ZR003",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7832-03",
      "FirstPage": " z/ArchitectureIBM Principles of Operation    SA22-7832-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr006.pdf",
      "Title": "The z/Architecture Principles of Operation",
      "Author": "IBM Corporation",
      "Subject": "This publication provides, for reference purposes, a detailed z/Architecture\u2122 description.",
      "DocumentNumber": "SA22-7832-06",
      "FirstPage": "z/Architecture\u0002\u0003\u0004\u00AEPrinciples of OperationSA22-7832-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr007.pdf",
      "Title": "z/Architecture Principles of Operation",
      "Author": "IBM Corporation",
      "Subject": "z/Architecture",
      "DocumentNumber": "SA22-7832-07",
      "FirstPage": "\u0002\u0003\u0004\u00AEz/ArchitecturePrinciples of OperationSA22-7832-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zr010.pdf",
      "Title": "z/Architecture Principles of Operation",
      "Author": "IBM Corporation",
      "Subject": "z/Architecture",
      "DocumentNumber": "SA22-7832-10",
      "FirstPage": "IBMrz/ArchitecturePrinciples of OperationSA22-7832-10"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/dz9zs008.pdf",
      "Title": "IBM z/Architecture Reference Summary",
      "Author": "IBM Corporation",
      "Subject": "z/Architecture",
      "DocumentNumber": "SA22-7871-08",
      "FirstPage": "SA22-7871-08 z/ArchitectureIBMrReference SummarySA22-7871-08.book  Page i  Thursday, February 19, 2015  3:46 PM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p130.pdf",
      "Title": "E0SP1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1860-06",
      "FirstPage": "OS/390IBM Parallel Sysplex Overview:Introducing Data Sharing andParallelism in a Sysplex    GC28-1860-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p407.pdf",
      "Title": "E0SP4MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1863-03",
      "FirstPage": " OS/390IBM Parallel Sysplex ApplicationMigration    GC28-1863-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p603.pdf",
      "Title": "E0S1P600",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1236-02",
      "FirstPage": "  System/390 MVSParallel Sysplex Test ReportGC28-1236-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p607.pdf",
      "Title": "E0S1P600",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1963-03",
      "FirstPage": "  OS/390Parallel Sysplex Test ReportGC28-1963-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p612.pdf",
      "Title": "E0SP6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1963-07",
      "FirstPage": "  OS/390Parallel Sysplex Test ReportGC28-1963-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p616.pdf",
      "Title": "E0SP6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1963-11",
      "FirstPage": " OS/390IBM Parallel Sysplex Test Report    GC28-1963-11"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p620.pdf",
      "Title": "E0S1P620",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1963-15",
      "FirstPage": "OS/390IBM Parallel Sysplex Test Report    GC28-1963-15"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p624.pdf",
      "Title": "OS/390 Parallel Sysplex Test Report",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1963-19",
      "FirstPage": "OS/390ParallelSysplexTestReportR9\u002BR10GC28-1963-19\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p701.pdf",
      "Title": "E0SP7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA22-7286-00",
      "FirstPage": "  IBMOS/390Parallel Sysplex RecoveryGA22-7286-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s1p702.pdf",
      "Title": "z/OS V1R8.0 System z Parallel Sysplex Recovery",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7286-01",
      "FirstPage": "z/OSSystem z Parallel Sysplex Recovery    GA22-7286-01  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s2p603.pdf",
      "Title": "z/OS Parallel Sysplex Test Report",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7663-03",
      "FirstPage": "z/OSParallelSysplexTestReportV1R1\u002BV1R2SA22-7663-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s2p607.pdf",
      "Title": "z/OS V1R3.0-V1R4.0 Parallel Sysplex Test Report",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7663-07",
      "FirstPage": "z/OSParallelSysplexTestReportVersion1Release3\u0026Version1Release4SA22-7663-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0s2p609.pdf",
      "Title": "z/OS V1R4.0 Parallel Sysplex Test Report",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7663-09",
      "FirstPage": "z/OSParallel Sysplex Test Report Version 1 Release 4 SA22-7663-09  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1a430.pdf",
      "Title": "E0ZH3MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1499-08",
      "FirstPage": " OS/390Summary of Message ChangesGC28-1499-08"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1nl02.pdf",
      "Title": "Hot topic: Downward compatibility in Language Environment - Problem solved!",
      "Author": "PeteG",
      "Subject": "hottopic2",
      "DocumentNumber": "GA22-7431-02",
      "FirstPage": "Downward compatibility in Language Environment - Problem solved!"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p100.pdf",
      "Title": "zSeries Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-00",
      "FirstPage": "z/OSzSeries Platform Test Report Version 1 Release 6 SA22-7997-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p110.pdf",
      "Title": "zSeries Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-01",
      "FirstPage": "z/OSzSeries Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 6 SA22-7997-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p120.pdf",
      "Title": "zSeries Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-02",
      "FirstPage": "z/OSzSeries Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 7 SA22-7997-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p130.pdf",
      "Title": "zSeries Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-03",
      "FirstPage": "z/OSzSeries Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 7 SA22-7997-03  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p140.pdf",
      "Title": "zSeries Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-04",
      "FirstPage": "z/OSzSeries Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 8 SA22-7997-04  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p150.pdf",
      "Title": "System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-05",
      "FirstPage": "z/OSSystem z Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 8  SA22-7997-05  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p160.pdf",
      "Title": "z/OS V1R9.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-06",
      "FirstPage": "z/OSSystem z Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 9  SA22-7997-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p161.pdf",
      "Title": "z/OS V1R9.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-07",
      "FirstPage": "z/OSSystem z Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 9  SA22-7997-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p170.pdf",
      "Title": "z/OS V1R10.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-08",
      "FirstPage": "z/OSSystem z Platform Test Report for z/OS and Linux Virtual Servers Version 1 Release 10  SA22-7997-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p171.pdf",
      "Title": "z/OS V1R10.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-09",
      "FirstPage": "z/OSSystemzPlatformTestReportforz/OSandLinuxVirtualServersz/OSVersion1Release10SA22-7997-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p180.pdf",
      "Title": "z/OS V1R11.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-10",
      "FirstPage": "z/OSSystemzPlatformTestReportforz/OSandLinuxVirtualServersz/OSVersion1Release11SA22-7997-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p181.pdf",
      "Title": "z/OS V1R11.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-11",
      "FirstPage": "z/OSSystemzPlatformTestReportforz/OSandLinuxVirtualServersz/OSVersion1Release11SA22-7997-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p190.pdf",
      "Title": "z/OS V1R12.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-12",
      "FirstPage": "z/OSSystemzPlatformTestReportforz/OSandLinuxVirtualServersz/OSVersion1Release12SA22-7997-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p191.pdf",
      "Title": "z/OS V1R12.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-13",
      "FirstPage": "z/OSSystemzPlatformTestReportforz/OSandLinuxVirtualServersz/OSVersion1Release12SA22-7997-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p1a1.pdf",
      "Title": "z/OS V1R13.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-15",
      "FirstPage": "z/OSSystemzPlatformTestReportforz/OSandLinuxVirtualServersz/OSVersion1Release13SA22-7997-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1p1a2.pdf",
      "Title": "z/OS V1R13.0 System z Platform Test Report for z/OS and Linux Virtual Servers",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7997-16",
      "FirstPage": "z/OSSystemzPlatformTestReportforz/OSandLinuxVirtualServersz/OSVersion1Release13SA22-7997-16\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1r100.pdf",
      "Title": "zSeries Linux Virtual Servers Platform Evaluation Test",
      "Author": "IBM_USER",
      "Subject": "",
      "DocumentNumber": "SA23-2236-00",
      "FirstPage": "z/OSWebSphere Integration Test (WIT) Version 1 Release 8, December 2006    SA23-2236-00  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1r111.pdf",
      "Title": "Chapter1 WIT Environment Overview",
      "Author": "H. Michael everett",
      "Subject": "",
      "DocumentNumber": "SA23-2236-02",
      "FirstPage": "z/OSWebSphere Integration Test (WIT) Version 1 Release 9, June 2007    SA23-2236-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z1x100.pdf",
      "Title": "z/OS Font Collection",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-1048-00",
      "FirstPage": "z/OSFontCollectionVersion2Release1GA32-1048-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2e111.pdf",
      "Title": "z/OS V1R6.0 Planning for Multilevel Security and the Common Criteria",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7509-02",
      "FirstPage": "z/OSPlanning for Multilevel Security and the Common Criteria   GA22-7509-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2e140.pdf",
      "Title": "z/OS V1R9.0 Planning for Multilevel Security and the Common Criteria",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7509-07",
      "FirstPage": "z/OSPlanning for Multilevel Security and the Common Criteria    GA22-7509-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2e151.pdf",
      "Title": "z/OS V1R10.0 Planning for Multilevel Security and the Common Criteria",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7509-09",
      "FirstPage": "z/OSPlanningforMultilevelSecurityandtheCommonCriteriaGA22-7509-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2i110.pdf",
      "Title": "z/OS V1R7 Planning for Subcapacity Pricing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7999-01",
      "FirstPage": "z/OSPlanning for Subcapacity Pricing   SA22-7999-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2i120.pdf",
      "Title": "z/OS V1R8 Planning for Subcapacity Pricing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7999-02",
      "FirstPage": "z/OSPlanning for Subcapacity Pricing   SA22-7999-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2k110.pdf",
      "Title": "z/OS Problem Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6844-02",
      "FirstPage": "z/OSProblemManagementVersion2Release2SC23-6844-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2l140.pdf",
      "Title": "IBM Health Checker for z/OS User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7994-09",
      "FirstPage": "z/OSIBMHealthCheckerforz/OSUser\u2019sGuideVersion1Release11SA22-7994-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2l160.pdf",
      "Title": "IBM Health Checker for z/OS V1R13 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7994-12",
      "FirstPage": "z/OSIBMHealthCheckerforz/OSV1R13User\u0027sGuideVersion1Release13SA22-7994-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2l161.pdf",
      "Title": "IBM Health Checker for z/OS V1R13 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7994-13",
      "FirstPage": "z/OSIBMHealthCheckerforz/OSV1R13User\u0027sGuideVersion1Release13SA22-7994-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2m191.pdf",
      "Title": "z/OS V1R13 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7499-20",
      "FirstPage": "z/OSMigrationVersion1Release13GA22-7499-20\u201CWhenbehaviorsaren\u0027tthesameanymore,Migrationactionsarecalledfor.\u201D\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n110.pdf",
      "Title": "z/OS V1R2 Hot Topics Newsletter",
      "Author": "Kerry B",
      "Subject": "newhot2001",
      "DocumentNumber": "",
      "FirstPage": "Tom Rosamilia bids farewell...I\u2019d like to inform you that I\u2019veaccepted a new position as VicePresident, Worldwide DataMa"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n151.pdf",
      "Title": "z/OS V1R6.0 Hot Topics Newsletter",
      "Author": "Tracy Bondi",
      "Subject": "IBM Pub",
      "DocumentNumber": "",
      "FirstPage": "A treasure trove of February 2005 - Issue 12 In this issue...Vita-meata-vegamin for z/OS Handling diverse workloadsz/OS "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n171.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "In this issue... Daylight Saving Time and your installation IMS DLIModel utility DB2 and DFSORT Recommendations for:  St"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n180.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "Also in this issue: Simplify your systems management   and security:     SMF and System Logger  Encryption Facility for "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n190.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA22-7499-13",
      "FirstPage": "Gita Berg IBM Senior Technical Staff MemberIn this issue: Migration actions  The dawn of EAV Unlocking the power   of Sy"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n191.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "march 2009\u2014issue 20John EellsIBM System z Software DesignerFirst in a series:Also in this issue:    Sail away with SOA  "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2n1a0.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "AUGUST 2009\u2014iSSUe 21"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2nl04.pdf",
      "Title": "newhot2001",
      "Author": "Kerry B",
      "Subject": "newhot2001",
      "DocumentNumber": "",
      "FirstPage": "Tom Rosamilia bids farewell...I\u2019d like to inform you that I\u2019veaccepted a new position as VicePresident, Worldwide DataMa"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z2w120.pdf",
      "Title": "z/OS V1R4.0 Planning for Workload License Charges",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7506-04",
      "FirstPage": "z/OSPlanningforWorkloadLicenseChargesSA22-7506-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3a100.pdf",
      "Title": "z/OS Introduction and Release Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0887-00",
      "FirstPage": "z/OSIntroductionandReleaseGuideVersion2Release1GA32-0887-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3a117.pdf",
      "Title": "z/OS Introduction and Release Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0887-08",
      "FirstPage": "z/OSIntroductionandReleaseGuideVersion2Release2GA32-0887-08IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3b113.pdf",
      "Title": "z/OS Planning for Installation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0890-06",
      "FirstPage": "z/OSPlanningforInstallationVersion2Release2GA32-0890-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3c110.pdf",
      "Title": "z/OS V2R2 Information Roadmap",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2299-01",
      "FirstPage": "z/OSz/OSInformationRoadmapVersion2Release2SA23-2299-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3e110.pdf",
      "Title": "z/OS Planning for Multilevel Security and the Common Criteria",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0891-01",
      "FirstPage": "z/OSPlanning for Multilevel Security and theCommon CriteriaVersion2 Release2GA32-0891-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3f113.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "Licensed ProgramSpecificationsIBMz/OS Version 2 Release 2 \u2013 Program Number 5650-ZOSz/OS\u00AEis an advanced-technology, enter"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3h310.pdf",
      "Title": "z/OS V2R2 Summary of Message and Interface Changes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2300-06",
      "FirstPage": "z/OSSummaryofMessageandInterfaceChangesVersion2Release2SA23-2300-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3h317.pdf",
      "Title": "z/OS Summary of Message and Interface Changes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2300-13",
      "FirstPage": "z/OSSummary of Message and InterfaceChangesVersion 2 Release 2SA23-2300-13IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3i110.pdf",
      "Title": "z/OS V2R2 Planning for Sub-Capacity Pricing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2301-01",
      "FirstPage": "z/OSPlanningforSub-CapacityPricingVersion2Release2SA23-2301-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3l100.pdf",
      "Title": "IBM Health Checker for z/OS: User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6843-00",
      "FirstPage": "z/OSIBMHealthCheckerforz/OSV2R1User\u0027sGuideVersion2Release1SC23-6843-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3l113.pdf",
      "Title": "IBM Health Checker for z/OS User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6843-05",
      "FirstPage": "z/OSIBMHealthCheckerforz/OSV2R2User\u0027sGuideVersion2Release2SC23-6843-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3m100.pdf",
      "Title": "z/OS Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0889-00",
      "FirstPage": "z/OSMigrationfromz/OSV1R13andz/OSV1R12toz/OSV2R1Version2GA32-0889-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3m102.pdf",
      "Title": "z/OS Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0889-02",
      "FirstPage": "z/OSMigrationfromz/OSV1R13andz/OSV1R12toz/OSV2R1Version2Release1GA32-0889-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3m110.pdf",
      "Title": "z/OS V2R2 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0889-05",
      "FirstPage": "z/OSMigrationfromz/OSV2R1andz/OSV1R13toz/OSV2R2Version2Release2GA32-0889-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0z3m113.pdf",
      "Title": "z/OS V2R2 Migration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0889-08",
      "FirstPage": "z/OSMigrationfromz/OSV2R1andz/OSV1R13toz/OSV2R2Version2Release2GA32-0889-08IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0zpdz00.pdf",
      "Title": "E0ZPDZ00",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9848-00",
      "FirstPage": " IBMProgram DirectoryFor CBPDO Installation and ServerPac Referencez/OSV2.1.0Program Number5650-ZOS CBPDO Level SMC1310 "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0zpdz10.pdf",
      "Title": "E0ZPDZ10",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9848-01",
      "FirstPage": " IBMProgram DirectoryFor CBPDO Installation and ServerPac Referencez/OSV2.2.0Program Number5650-ZOS CBPDO Level SMC1510 "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e0zpdz50.pdf",
      "Title": "E0ZPDZ00",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI11-9848-05",
      "FirstPage": " IBMProgram DirectoryFor CBPDO Installation and ServerPac Referencez/OSVersion 2 Release 5Program Number5650-ZOS CBPDO L"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e131b104.pdf",
      "Title": "E13B1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1733-03",
      "FirstPage": " OS/390IBM LAN ServerInstallation Guide    GC28-1733-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/e131b205.pdf",
      "Title": "E13B2MST",
      "Author": "JPORTER ",
      "Subject": "",
      "DocumentNumber": "SC28-1731-04",
      "FirstPage": " OS/390 LAN Server GuideVersion 2 Release 5Document Number SC28-1731-04"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ebrscl20.pdf",
      "Title": "IBM Softcopy Librarian: User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC23-3414-17",
      "FirstPage": "SoftcopyLibrarianUser\u0027sGuideVersion5GC23-3414-17\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/edc1b215.pdf",
      "Title": "z/OS XL C/C\u002B\u002B Runtime Library Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7314-07",
      "FirstPage": "z/OSXLC/C\u002B\u002BRuntimeLibraryReferenceVersion2Release2SC14-7314-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/edclb110.pdf",
      "Title": "EDCLBMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7821-01",
      "FirstPage": "z/OSIBM C/C\u002B\u002B Run-Time Library Reference    SA22-7821-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eeq2ug12.pdf",
      "Title": "z/OS V2R2 and z/VM V6R2.0 HCM User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2670-04",
      "FirstPage": "z/OSandz/VMHardwareConfigurationManagerUser\u0027sGuideVersion2Release2SC34-2670-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eim2a100.pdf",
      "Title": "z/OS V2R1.0 Integrated Security Services Enterprise Identity Mapping (EIM) Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2297-00",
      "FirstPage": "z/OSIntegratedSecurityServicesEnterpriseIdentityMapping(EIM)GuideandReferenceVersion2Release1SA23-2297-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eima1100.pdf",
      "Title": "z/OS V1R4.0 Security Server Enterprise Identity Mapping (EIM) Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7875-00",
      "FirstPage": "z/OSSecurityServerEnterpriseIdentityMapping(EIM)GuideandReferenceSA22-7875-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eox01m05.pdf",
      "Title": "EOX01MST",
      "Author": "BATCH5  ",
      "Subject": "",
      "DocumentNumber": "GC38-2032-00",
      "FirstPage": " BookManager READ/MVS andBookManager BUILD/MVSGeneral InformationRelease 3Document Number GC38-2032-00March 6, 1998"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eox02m05.pdf",
      "Title": "EOX02MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC38-2033-00",
      "FirstPage": "  BookManager READ/MVSGetting Started and Command SummaryRelease 3SC38-2033-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eox03m07.pdf",
      "Title": "BookManager READ/MVS V1R3: Displaying Online Books",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC38-2034-00",
      "FirstPage": "  BookManager READ/MVSDisplaying Online BooksRelease 3SC38-2034-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eox04m07.pdf",
      "Title": "EOX04MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC38-2035-00",
      "FirstPage": "  BookManager READ/MVSInstallation Planning and CustomizationRelease 3SC38-2035-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/eph3z100.pdf",
      "Title": "Library Server: Getting Started  V4R0.0",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GI11-9481-00",
      "FirstPage": "LibraryServer:GettingStartedGI11-9481-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erb2me10.pdf",
      "Title": "z/OS V2R2 RMF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2666-01",
      "FirstPage": "z/OSResourceMeasurementFacilityMessagesandCodesVersion2Release2SC34-2666-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erb2pg11.pdf",
      "Title": "z/OS V2R2 RMF Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2667-03",
      "FirstPage": "z/OSResourceMeasurementFacilityProgrammer\u0027sGuideVersion2Release2SC34-2667-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erb2ra11.pdf",
      "Title": "z/OS V2R2 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2665-03",
      "FirstPage": "z/OSResourceMeasurementFacilityReportAnalysisVersion2Release2SC34-2665-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erb2ug00.pdf",
      "Title": "z/OS V2R1.0 RMF User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2664-00",
      "FirstPage": "z/OSResourceMeasurementFacilityUser\u0027sGuideVersion2Release1SC34-2664-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erb2ug11.pdf",
      "Title": "z/OS V2R2 RMF User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2664-03",
      "FirstPage": "z/OSResourceMeasurementFacilityUser\u0027sGuideVersion2Release2SC34-2664-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbpme00.pdf",
      "Title": "ERBA9MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1951-03",
      "FirstPage": "OS/390IBM Resource Measurement FacilityPerformance Management Guide    SC28-1951-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzme60.pdf",
      "Title": "z/OS V1R9.0 RMF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7993-09",
      "FirstPage": "z/OSResource Measurement Facility Messages and Codes   SC33-7993-09  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzme70.pdf",
      "Title": "z/OS V1R10.0 RMF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7993-10",
      "FirstPage": "z/OSResource Measurement Facility Messages and Codes Version 1 Release 10  SC33-7993-10  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzme80.pdf",
      "Title": "z/OS V1R11.0 RMF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7993-11",
      "FirstPage": "z/OSResourceMeasurementFacilityMessagesandCodesVersion1Release11SC33-7993-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzme90.pdf",
      "Title": "z/OS V1R12.0 RMF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7993-12",
      "FirstPage": "z/OSResourceMeasurementFacilityMessagesandCodesVersion1Release12SC33-7993-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzmea0.pdf",
      "Title": "z/OS V1R13.0 RMF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7993-13",
      "FirstPage": "z/OSResourceMeasurementFacilityMessagesandCodesVersion1Release13SC33-7993-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpg71.pdf",
      "Title": "z/OS V1R9.0 RMF Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7994-09",
      "FirstPage": "z/OSResource Measurement Facility Programmer\u2019s Guide   SC33-7994-09  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpg80.pdf",
      "Title": "z/OS V1R10.0 RMF Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7994-10",
      "FirstPage": "z/OSResource Measurement Facility Programmer\u2019s Guide Version 1 Release 10  SC33-7994-10  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpg90.pdf",
      "Title": "z/OS V1R11.0 RMF Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7994-11",
      "FirstPage": "z/OSResourceMeasurementFacilityProgrammer\u2019sGuideVersion1Release11SC33-7994-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpga0.pdf",
      "Title": "z/OS V1R12.0 RMF Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7994-13",
      "FirstPage": "z/OSResourceMeasurementFacilityProgrammer\u0027sGuideVersion1Release12SC33-7994-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpgb0.pdf",
      "Title": "z/OS V1R13.0 RMF Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7994-14",
      "FirstPage": "z/OSResourceMeasurementFacilityProgrammer\u0027sGuideVersion1Release13SC33-7994-14\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpm00.pdf",
      "Title": "z/OS V1R1.0 RMF Performance Management Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7992-00",
      "FirstPage": "z/OSResourceMeasurementFacilityPerformanceManagementGuideSC33-7992-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpm30.pdf",
      "Title": "z/OS V1R6.0 RMF Performance Management Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7992-03",
      "FirstPage": "z/OSResource Measurement Facility Performance Management Guide SC33-7992-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpm60.pdf",
      "Title": "z/OS V1R9.0 RMF Performance Management Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7992-07",
      "FirstPage": "z/OSResource Measurement Facility Performance Management Guide   SC33-7992-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpm70.pdf",
      "Title": "z/OS V1R10.0 RMF Performance Management Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7992-08",
      "FirstPage": "z/OSResource Measurement Facility Performance Management Guide Version 1 Release 10  SC33-7992-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpm80.pdf",
      "Title": "z/OS V1R11.0 RMF Performance Management Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7992-09",
      "FirstPage": "z/OSResourceMeasurementFacilityPerformanceManagementGuideVersion1Release11SC33-7992-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzpm90.pdf",
      "Title": "z/OS V1R12.0 RMF Performance Management Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7992-10",
      "FirstPage": "z/OSResourceMeasurementFacilityPerformanceManagementGuideVersion1Release12SC33-7992-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzra23.pdf",
      "Title": "z/OS V1R4 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7991-05",
      "FirstPage": "z/OSResourceMeasurementFacilityReportAnalysisSC33-7991-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzra41.pdf",
      "Title": "z/OS V1R6.0 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7991-09",
      "FirstPage": "z/OSResource Measurement Facility Report Analysis SC33-7991-09  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzra71.pdf",
      "Title": "z/OS V1R9.0 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7991-13",
      "FirstPage": "z/OSResource Measurement Facility Report Analysis   SC33-7991-13  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzra81.pdf",
      "Title": "z/OS V1R10.0 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7991-15",
      "FirstPage": "z/OSResourceMeasurementFacilityReportAnalysisVersion1Release10SC33-7991-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzra90.pdf",
      "Title": "z/OS V1R11.0 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7991-16",
      "FirstPage": "z/OSResourceMeasurementFacilityReportAnalysisVersion1Release11SC33-7991-16\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzra91.pdf",
      "Title": "z/OS V1R11.0 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7991-17",
      "FirstPage": "z/OSResourceMeasurementFacilityReportAnalysisVersion1Release11SC33-7991-17\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzraa0.pdf",
      "Title": "z/OS V1R12.0 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7991-18",
      "FirstPage": "z/OSResourceMeasurementFacilityReportAnalysisVersion1Release12SC33-7991-18\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzrab0.pdf",
      "Title": "z/OS V1R13.0 RMF Report Analysis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7991-19",
      "FirstPage": "z/OSResourceMeasurementFacilityReportAnalysisVersion1Release13SC33-7991-19\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzrs30.pdf",
      "Title": "z/OS V1R8.0 RMF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SX33-9033-03",
      "FirstPage": "z/OS Resource Measurement Facility Reference Summary SX33-9033-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzrs40.pdf",
      "Title": "z/OS V1R12.0 RMF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SX33-9033-04",
      "FirstPage": "z/OSResourceMeasurementFacilityReferenceSummaryVersion1Release12SX33-9033-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzrs50.pdf",
      "Title": "z/OS V1R13.0 RMF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SX33-9033-05",
      "FirstPage": "z/OSResourceMeasurementFacilityReferenceSummaryVersion1Release13SX33-9033-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzug21.pdf",
      "Title": "z/OS V1R4.0 RMF User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7990-03",
      "FirstPage": "z/OSResourceMeasurementFacilityUser\u2019sGuideSC33-7990-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzug71.pdf",
      "Title": "z/OS V1R9.0 RMF User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7990-13",
      "FirstPage": "z/OSResource Measurement Facility User\u2019s Guide   SC33-7990-13  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzug81.pdf",
      "Title": "z/OS V1R10.0 RMF User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7990-15",
      "FirstPage": "z/OSResourceMeasurementFacilityUser\u2019sGuideVersion1Release10SC33-7990-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzug90.pdf",
      "Title": "z/OS V1R11.0 RMF User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7990-16",
      "FirstPage": "z/OSResourceMeasurementFacilityUser\u2019sGuideVersion1Release11SC33-7990-16\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzuga0.pdf",
      "Title": "z/OS V1R12.0 RMF User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7990-18",
      "FirstPage": "z/OSResourceMeasurementFacilityUser\u0027sGuideVersion1Release12SC33-7990-18\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/erbzugb0.pdf",
      "Title": "z/OS V1R13.0 RMF User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7990-19",
      "FirstPage": "z/OSResourceMeasurementFacilityUser\u0027sGuideVersion1Release13SC33-7990-19\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euv2b210.pdf",
      "Title": "z/OS V2R2 Integrated Security Services Network Authentication Service Programing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6787-01",
      "FirstPage": "z/OSIntegratedSecurityServicesNetworkAuthenticationServiceProgrammingVersion2Release2SC23-6787-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euv2b310.pdf",
      "Title": "z/OS V2R2 Integrated Security Services Network Authentication Service Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6786-01",
      "FirstPage": "z/OSIntegratedSecurityServicesNetworkAuthenticationServiceAdministrationVersion2Release2SC23-6786-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euva5a00.pdf",
      "Title": "EUVMNMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5907-00",
      "FirstPage": "z/OSIBM DCEApplication Development Guide:Introduction and Style    SC24-5907-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euva8a00.pdf",
      "Title": "EUVMFMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5910-00",
      "FirstPage": "z/OSIBM DCE Configuring and Getting Started    SC24-5910-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvb3a20.pdf",
      "Title": "V1R4.0 Network Authentication Service Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-5926-02",
      "FirstPage": "z/OSSecurityServerNetworkAuthenticationServiceAdministrationSC24-5926-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmfa20.pdf",
      "Title": "EUVMFMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1583-06",
      "FirstPage": "OS/390\uF6DAIBM DCE Configuring and Getting Started    SC28-1583-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/euvmia10.pdf",
      "Title": "EUVMIMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1581-02",
      "FirstPage": " OS/390\uF6DAIBM DCEIntroduction    GC28-1581-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b300.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8775-00",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationGuideVersion1Release1SC31-8775-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b320.pdf",
      "Title": "z/OS V1R4.0 CS: IP Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8775-02",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationGuideVersion1Release4SC31-8775-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b370.pdf",
      "Title": "z/OS V1R9.0 Comm Svr: IP Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8775-11",
      "FirstPage": "z/OS Communications ServerIP Configuration Guide Version 1 Release 9  SC31-8775-11  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b400.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8776-00",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationReferenceVersion1Release1SC31-8776-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b481.pdf",
      "Title": "z/OS V1R10.0 Comm Svr: IP Configuration Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8776-15",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationReferenceVersion1Release10SC31-8776-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1b500.pdf",
      "Title": "z/OS V1R1.0 CS: SNA Network Implementation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8777-00",
      "FirstPage": "z/OSCommunicationsServerSNANetworkImplementationGuideVersion1Release1SC31-8777-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1c290.pdf",
      "Title": "z/OS V1R12.0 Comm Svr: IP Sys Admin Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8781-10",
      "FirstPage": "z/OSCommunicationsServerIPSystemAdministrator\u2019sCommandsVersion1Release12SC31-8781-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1c500.pdf",
      "Title": "z/OS V1R1.0 CS: IP Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC31-8782-00",
      "FirstPage": "z/OSCommunicationsServerIPDiagnosisGuideVersion1Release1GC31-8782-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1c560.pdf",
      "Title": "z/OS V1R8.0 Comm Svr: IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC31-8782-07",
      "FirstPage": "z/OS Communications ServerIP Diagnosis Guide Version 1 Release 8 GC31-8782-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1c5a0.pdf",
      "Title": "z/OS V1R12.0 Comm Svr: IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC31-8782-11",
      "FirstPage": "z/OSCommunicationsServerIPDiagnosisGuideVersion1Release12GC31-8782-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1c5b1.pdf",
      "Title": "z/OS V1R13.0 Comm Svr: IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC31-8782-13",
      "FirstPage": "z/OSCommunicationsServerIPDiagnosisGuideVersion1Release13GC31-8782-13\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1d290.pdf",
      "Title": "z/OS V1R11.0 Comm Svr: IP and SNA Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8791-09",
      "FirstPage": "z/OSCommunicationsServerIPandSNACodesVersion1Release11SC31-8791-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1d490.pdf",
      "Title": "z/OS V1R12.0 Comm Svr: IP Sockets Application Programming Interface Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8788-09",
      "FirstPage": "z/OSCommunicationsServerIPSocketsApplicationProgrammingInterfaceGuideandReferenceVersion1Release12SC31-8788-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a1f130.pdf",
      "Title": "z/OS V1R7.0 Comm Srv: IPv6 Network and Appl Design Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC31-8885-03",
      "FirstPage": "z/OS Communications ServerIPv6 Network and Application Design Guide Version 1 Release 7 SC31-8885-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b300.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3650-00",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationGuideVersion2Release1SC27-3650-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b303.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3650-03",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationGuideVersion2Release1SC27-3650-03\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b313.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3650-07",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationGuideVersion2Release2SC27-3650-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b413.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP Configuration Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3651-07",
      "FirstPage": "z/OSCommunicationsServerIPConfigurationReferenceVersion2Release2SC27-3651-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b511.pdf",
      "Title": "z/OS V2R2.0 Communications Server: SNA Network Implementation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3672-03",
      "FirstPage": "z/OSCommunicationsServerSNANetworkImplementationGuideVersion2Release2SC27-3672-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b513.pdf",
      "Title": "z/OS V2R2.0 Communications Server: SNA Network Implementation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3672-05",
      "FirstPage": "z/OSCommunicationsServerSNANetworkImplementationGuideVersion2Release2SC27-3672-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b613.pdf",
      "Title": "z/OS V2R2.0 Communications Server: SNA Resource Definition Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3675-06",
      "FirstPage": "z/OSCommunicationsServerSNAResourceDefinitionReferenceVersion2Release2SC27-3675-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b713.pdf",
      "Title": "z/OS V2R2.0 Communications Server: SNA Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3673-06",
      "FirstPage": "z/OSCommunicationsServerSNAOperationVersion2Release2SC27-3673-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b813.pdf",
      "Title": "z/OS V2R2.0 Communications Server: Quick Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3665-05",
      "FirstPage": "z/OSCommunicationsServerQuickReferenceVersion2Release2SC27-3665-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2b911.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP User\u0027s Guide and Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3662-02",
      "FirstPage": "z/OSCommunicationsServerIPUser\u0027sGuideandCommandsVersion2Release2SC27-3662-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c213.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP System Administrator\u0027s Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3661-06",
      "FirstPage": "z/OSCommunicationsServerIPSystemAdministrator\u0027sCommandsVersion2Release2SC27-3661-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c310.pdf",
      "Title": "z/OS V2R2.0 Communications Server: SNA Diagnosis Vol 1, Techniques and Procedures",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-3667-01",
      "FirstPage": "z/OSCommunicationsServerSNADiagnosisVolume1:TechniquesandProceduresVersion2Release2GC27-3667-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c312.pdf",
      "Title": "z/OS V2R2.0 Communications Server: SNA Diagnosis Vol 1, Techniques and Procedures",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-3667-03",
      "FirstPage": "z/OSCommunicationsServerSNADiagnosisVolume1:TechniquesandProceduresVersion2Release2GC27-3667-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c413.pdf",
      "Title": "z/OS V2R2.0 Communications Server: SNA Diagnosis Vol 2, FFST Dumps and the VIT",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-3668-05",
      "FirstPage": "z/OSCommunicationsServerSNADiagnosisVolume2:FFSTDumpsandtheVITVersion2Release2GC27-3668-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c513.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-3652-06",
      "FirstPage": "z/OSCommunicationsServerIPDiagnosisGuideVersion2Release2GC27-3652-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c613.pdf",
      "Title": "z/OS V2R2.0 Communications Server: SNA Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3671-06",
      "FirstPage": "z/OSCommunicationsServerSNAMessagesVersion2Release2SC27-3671-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c711.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP Messages Volume 1 (EZA)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3654-02",
      "FirstPage": "z/OSCommunicationsServerIPMessages:Volume1(EZA)Version2Release2SC27-3654-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c810.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP Messages Volume 2 (EZB, EZD)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3655-02",
      "FirstPage": "z/OSCommunicationsServerIPMessages:Volume2(EZB,EZD)Version2Release2SC27-3655-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2c900.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Messages Volume 3 (EZY)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3656-00",
      "FirstPage": "z/OSCommunicationsServerIPMessages:Volume3(EZY)Version2Release1SC27-3656-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d112.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP Messages Volume 4 (EZZ, SNM)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3657-04",
      "FirstPage": "z/OSCommunicationsServerIPMessages:Volume4(EZZ,SNM)Version2Release2SC27-3657-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d212.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP and SNA Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3648-06",
      "FirstPage": "CommunicationsServerIPandSNACodesVersion2Release2SC27-3648-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d313.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP Programmer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3659-06",
      "FirstPage": "z/OSCommunicationsServerIPProgrammer\u0027sGuideandReferenceVersion2Release2SC27-3659-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d400.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Sockets Application Programming Interface Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3660-00",
      "FirstPage": "z/OSCommunicationsServerIPSocketsApplicationProgrammingInterfaceGuideandReferenceVersion2Release1SC27-3660-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d410.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP Sockets Application Programming Interface Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3660-01",
      "FirstPage": "z/OSCommunicationsServerIPSocketsApplicationProgrammingInterfaceGuideandReferenceVersion2Release2SC27-3660-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d701.pdf",
      "Title": "z/OS V2R2.0 Communications Server: SNA Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3666-01",
      "FirstPage": "z/OSCommunicationsServerSNACustomizationVersion2Release2SC27-3666-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d800.pdf",
      "Title": "z/OS V2R1.0 Communications Server: CMIP Services and Topology Agent Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3646-00",
      "FirstPage": "z/OSCommunicationsServerCMIPServicesandTopologyAgentGuideVersion2Release1SC27-3646-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2d900.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3674-00",
      "FirstPage": "z/OSCommunicationsServerSNAProgrammingVersion2Release1SC27-3674-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2e100.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP IMS Sockets Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3653-00",
      "FirstPage": "z/OSCommunicationsServerIPIMSSocketsGuideVersion2Release1SC27-3653-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2e700.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Resource Definition Samples",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3676-00",
      "FirstPage": "z/OSCommunicationsServerSNAResourceDefinitionSamplesVersion2Release1SC27-3676-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2e800.pdf",
      "Title": "z/OS V2R1.0 Communications Server: SNA Programmer\u0027s LU 6.2 Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3670-00",
      "FirstPage": "z/OSCommunicationsServerSNAProgrammer\u0027sLU6.2ReferenceVersion2Release1SC27-3670-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2e910.pdf",
      "Title": "z/OS V2R2.0 Communications Server: SNA Programmer\u0027s LU 6.2 Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3669-01",
      "FirstPage": "z/OSCommunicationsServerSNAProgrammer\u0027sLU6.2GuideVersion2Release2SC27-3669-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2f110.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IPv6 Network and Appl Design Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3663-01",
      "FirstPage": "z/OSCommunicationsServerIPv6NetworkandApplicationDesignGuideVersion2Release2SC27-3663-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2f213.pdf",
      "Title": "z/OS V2R2.0 Communications Server: New Function Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-3664-07",
      "FirstPage": "z/OSCommunicationsServerNewFunctionSummaryVersion2Release2GC27-3664-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2f300.pdf",
      "Title": "z/OS V2R1.0 Communications Server: ACF/TAP Trace Analysis Handbook",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC27-3645-00",
      "FirstPage": "z/OSCommunicationsServerACF/TAPTraceAnalysisHandbookVersion2Release1GC27-3645-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2g110.pdf",
      "Title": "z/OS V2R2.0 Communications Server: IP CICS Sockets Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3649-01",
      "FirstPage": "z/OSCommunicationsServerIPCICSSocketsGuideVersion2Release2SC27-3649-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2g210.pdf",
      "Title": "z/OS V2R2.0 Communications Server: CSM Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3647-01",
      "FirstPage": "z/OSCommunicationsServerCSMGuideVersion2Release2SC27-3647-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1a2g300.pdf",
      "Title": "z/OS V2R1.0 Communications Server: IP Network Print Facility",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-3658-00",
      "FirstPage": "z/OSCommunicationsServerIPNetworkPrintFacilityVersion2Release1SC27-3658-00\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1af7020.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8513-03",
      "FirstPage": "OS/390SecureWayCommunicationsServerIPConfigurationVersion2Release8SC31-8513-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ah2030.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8563-04",
      "FirstPage": "OS/390IBMCommunicationsServerSNANetworkImplementationGuideVersion2Release10SC31-8563-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/f1ay9120.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC31-8521-03",
      "FirstPage": "OS/390SecureWayCommunicationsServerIPDiagnosisGuideVersion2Release8SC31-8521-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcx2d310.pdf",
      "Title": "z/OS V2R2 Distributed File Service Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6885-01",
      "FirstPage": "z/OSDistributedFileServiceMessagesandCodesVersion2Release2SC23-6885-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcx2d410.pdf",
      "Title": "z/OS V2R2 Distributed File Service SMB Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6886-01",
      "FirstPage": "z/OSDistributedFileServiceSMBAdministrationVersion2Release2SC23-6886-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcx2d500.pdf",
      "Title": "z/OS V2R1.0 Distributed File Service zFS Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-6887-00",
      "FirstPage": "z/OSDistributedFileServicezFSAdministrationVersion2Release1SA23-6887-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fcx2d510.pdf",
      "Title": "z/OS V2R2 Distributed File Service zFS Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6887-01",
      "FirstPage": "z/OSDistributedFileServicezFSAdministrationVersion2Release2SC23-6887-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fhxdba00.pdf",
      "Title": "FHXDBAMM",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SH24-5011-01",
      "FirstPage": " IBM Data Language/I Disk Operating System/Virtual Storage (DL/I DOS/VS)IBM Data Base AdministrationVersion 1 Release 7 "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fot1zo00.pdf",
      "Title": "z/OS V2.2 OpenSSH User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6806-00",
      "FirstPage": "z/OSz/OSOpenSSHUser\u0027sGuideVersion2Release2SC27-6806-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fot1zo01.pdf",
      "Title": "z/OS V2.2 OpenSSH User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6806-01",
      "FirstPage": "z/OSz/OS OpenSSH User\u0027s GuideVersion2 Release2SC27-6806-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/fzaa4a00.pdf",
      "Title": "z/VM: TCP/IP User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-5982-00",
      "FirstPage": "z/VMTCP/IPLevel3A0User\u2019sGuideVersion3Release1.0SC24-5982-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gim1a214.pdf",
      "Title": "ServerPac: Using the Installation Dialog",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2278-06",
      "FirstPage": "ServerPacUsingtheInstallationDialogDialogLevel:27SA23-2278-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gim3cm13.pdf",
      "Title": "SMP/E V3R6.0 for z/OS V2R2.0 Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2275-05",
      "FirstPage": "SMP/Eforz/OSCommandsSA23-2275-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gim3md12.pdf",
      "Title": "SMP/E V3R6.0 for z/OS V2R2.0 Messages, Codes, and Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0883-04",
      "FirstPage": "SMP/Eforz/OSMessages,Codes,andDiagnosisGA32-0883-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gim3rf02.pdf",
      "Title": "SMP/E Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2276-02",
      "FirstPage": "SMP/Eforz/OSReferenceSA23-2276-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gim3ug02.pdf",
      "Title": "SMP/E V3R6.0 for z/OS V2R2 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2277-02",
      "FirstPage": "SMP/Eforz/OSUser\u0027sGuideSA23-2277-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimpkg80.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC23-3695-10",
      "FirstPage": " Software DeliveryIBM Standard Packaging Rules forz/OS-Based Products    SC23-3695-10"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gimusr51.pdf",
      "Title": "SMP/E V3R6.0 for z/OS V1R13.0 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7773-17",
      "FirstPage": "SMP/Eforz/OSUser\u0027sGuideSA22-7773-17\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/glda2a31.pdf",
      "Title": "z/OS LDAP Server Administration and Use",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-5923-06",
      "FirstPage": "z/OSIntegrated Security Services LDAP Server Administration and Use SC24-5923-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/glp2a110.pdf",
      "Title": "z/OS V2R2 IBM Tivoli Directory Server Client Programming for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2295-01",
      "FirstPage": "z/OSIBMTivoliDirectoryServerClientProgrammingforz/OSVersion2Release2SA23-2295-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/glp2a210.pdf",
      "Title": "z/OS V2R2 IBM Tivoli Directory Server Administration and Use for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6788-01",
      "FirstPage": "z/OSIBMTivoliDirectoryServerAdministrationandUseforz/OSVersion2Release2SC23-6788-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/glp2a300.pdf",
      "Title": "z/OS V2R1.0 IBM Tivoli Directory Server Plug-in Reference for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA76-0169-00",
      "FirstPage": "z/OSIBMTivoliDirectoryServerPlug-inReferenceforz/OSVersion2Release1SA76-0169-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/glp2a410.pdf",
      "Title": "z/OS V2R2 IBM Tivoli Directory Server Messages and Codes for z/OS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2296-01",
      "FirstPage": "z/OSIBMTivoliDirectoryServerMessagesandCodesforz/OSVersion2Release2SA23-2296-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gos1b201.pdf",
      "Title": "GOSB2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1997-01",
      "FirstPage": " OS/390IBM SOMobjectsProgrammer\u0027s Reference,Volume 1    SC28-1997-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gsk2aa00.pdf",
      "Title": "z/OS V2R1.0 System SSL Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7495-00",
      "FirstPage": "z/OSCryptographicServicesSystemSecureSocketsLayerProgrammingVersion2Release1SC14-7495-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gsk2aa10.pdf",
      "Title": "z/OS V2R2 System SSL Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7495-01",
      "FirstPage": "z/OSCryptographicServicesSystemSecureSocketsLayerProgrammingVersion2Release2SC14-7495-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/gska1a10.pdf",
      "Title": "System SSL Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-5901-01",
      "FirstPage": "z/OSSystemSecureSocketsLayerProgrammingSC24-5901-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/h1981606.pdf",
      "Title": "IBM Compiler and Library for REXX on System z V1 R4 User\u2122s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SH19-8160-06",
      "FirstPage": "IBMCompilerandLibraryforREXXonSystemzUser\u2019sGuideandReferenceVersion1Release4SH19-8160-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/h1981793.pdf",
      "Title": "IBM Compiler and Library for REXX on System z V1 R4 Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SH19-8179-03",
      "FirstPage": "IBMCompilerandLibraryforREXXonSystemzDiagnosisGuideVersion1Release4SH19-8179-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2a390.pdf",
      "Title": "z/OS V1R12.0 JES2 Initialization and Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7532-10",
      "FirstPage": "z/OSJES2InitializationandTuningGuideSA22-7532-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2a860.pdf",
      "Title": "z/OS V1R9.0 JES2 Introduction",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7535-06",
      "FirstPage": "z/OSJES2 Introduction SA22-7535-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2a910.pdf",
      "Title": "z/OS JES2 Data Areas Volume 1",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0997-01",
      "FirstPage": "z/OSJES2DataAreasVolume1Version2Release2GA32-0997-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2q010.pdf",
      "Title": "z/OS V2R2 JES2 Macros",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0996-01",
      "FirstPage": "z/OSJES2MacrosVersion2Release2SA32-0996-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2r910.pdf",
      "Title": "z/OS V2R2 JES2 Installation Exits",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0995-01",
      "FirstPage": "z/OSJES2InstallationExitsVersion2Release2SA32-0995-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2r911.pdf",
      "Title": "z/OS V2R2 JES2 Installation Exits",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0995-02",
      "FirstPage": "z/OSJES2 Installation ExitsVersion2 Release2SA32-0995-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2s800.pdf",
      "Title": "z/OS V2R1.0 JES2 Introduction",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0994-00",
      "FirstPage": "z/OSJES2IntroductionVersion2Release1SA32-0994-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2t700.pdf",
      "Title": "z/OS V2R1.0 JES2 Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0993-00",
      "FirstPage": "z/OSJES2DiagnosisVersion2Release1GA32-0993-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2u611.pdf",
      "Title": "z/OS V2R2 JES2 Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0992-02",
      "FirstPage": "z/OSJES2 Initialization and Tuning ReferenceVersion2 Release2SA32-0992-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2v511.pdf",
      "Title": "z/OS V2R2 JES2 Initialization and Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0991-02",
      "FirstPage": "z/OSJES2 Initialization and Tuning GuideVersion2 Release2SA32-0991-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2w411.pdf",
      "Title": "z/OS V2R2 JES2 Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0990-02",
      "FirstPage": "z/OSJES2 CommandsVersion2 Release2SA32-0990-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2x311.pdf",
      "Title": "z/OS V2R2 JES2 Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0989-03",
      "FirstPage": "z/OSJES2 MessagesVersion2 Release2SA32-0989-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2y200.pdf",
      "Title": "Network Job Entry (NJE) Formats and Protocols",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0672-00",
      "FirstPage": "z/OSNetworkJobEntry(NJE)FormatsandProtocolsVersion2Release1SA38-0672-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2y211.pdf",
      "Title": "V2R2 Network Job Entry (NJE) Formats and Protocols",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0988-02",
      "FirstPage": "z/OSNetwork Job Entry (NJE) Formats andProtocolsVersion2 Release2SA32-0988-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/has2z110.pdf",
      "Title": "z/OS V2R2 JES Application Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0987-01",
      "FirstPage": "z/OSJESApplicationProgrammingVersion2Release2SA32-0987-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsa5c31.pdf",
      "Title": "z/VM V6.4 Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6187-07",
      "FirstPage": "z/VMDiagnosis GuideVersion6 Release4GC24-6187-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsb4b10.pdf",
      "Title": "z/VM: CP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6119-02",
      "FirstPage": "z/VMCP Messages and Codes version 5 release 2 GC24-6119-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsb4c20.pdf",
      "Title": "z/VM: CP Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6177-04",
      "FirstPage": "z/VMCPMessagesandCodesVersion6Release3GC24-6177-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsb5c20.pdf",
      "Title": "z/VM V6.3 CMS and REXX/VM Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6161-02",
      "FirstPage": "z/VMCMSandREXX/VMMessagesandCodesVersion6Release3GC24-6161-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsb6c20.pdf",
      "Title": "z/VM V6.3 Other Components Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6207-02",
      "FirstPage": "z/VMOtherComponentsMessagesandCodesVersion6Release3GC24-6207-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsc6b10.pdf",
      "Title": "z/VM: VMSES/E Introduction and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6130-01",
      "FirstPage": "z/VMVMSES/E Introduction and Reference version 5 release 2 GC24-6130-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsc6c10.pdf",
      "Title": "z/VM: VMSES/E Introduction and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6243-01",
      "FirstPage": "z/VMVMSES/EIntroductionandReferenceversion6release2GC24-6243-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsc6c20.pdf",
      "Title": "z/VM V6.3 VMSES/E Introduction and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6243-02",
      "FirstPage": "z/VMVMSES/EIntroductionandReferenceVersion6Release3GC24-6243-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsc9c10.pdf",
      "Title": "z/VM: Connectivity",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6174-02",
      "FirstPage": "z/VMConnectivityversion6release2SC24-6174-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd0c10.pdf",
      "Title": "z/VM: CMS Application Development Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6162-01",
      "FirstPage": "z/VMCMSApplicationDevelopmentGuideversion6release2SC24-6162-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd2c10.pdf",
      "Title": "z/VM: CMS Application Development Guide for Assembler",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6163-01",
      "FirstPage": "z/VMCMSApplicationDevelopmentGuideforAssemblerversion6release2SC24-6163-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd7c20.pdf",
      "Title": "z/VM V6.3 CMS User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6173-02",
      "FirstPage": "z/VMCMSUser\u0027sGuideVersion6Release3SC24-6173-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd9a20.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-5972-00",
      "FirstPage": " z/VMIBM XEDIT User\u0027s GuideVersion 3 Release 1.0    SC24-5972-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd9b10.pdf",
      "Title": "HCSD9B10",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-6132-01",
      "FirstPage": " z/VMIBM XEDIT User\u0027s Guideversion 5 release 2    SC24-6132-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsd9c00.pdf",
      "Title": "z/VM: XEDIT User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6245-00",
      "FirstPage": "z/VMXEDITUser\u2019sGuideversion6release1SC24-6245-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse0a20.pdf",
      "Title": "z/VM: XEDIT Command and Macro Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-5973-00",
      "FirstPage": "z/VMXEDITCommandandMacroReferenceVersion3Release1.0SC24-5973-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4b21.pdf",
      "Title": "z/VM: CP Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6081-05",
      "FirstPage": "z/VMCP Commands and Utilities Reference version 5 release 3  SC24-6081-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4c10.pdf",
      "Title": "z/VM: CP Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6175-02",
      "FirstPage": "z/VMCPCommandsandUtilitiesReferenceversion6release2SC24-6175-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4c20.pdf",
      "Title": "z/VM V6.3 CP Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6175-04",
      "FirstPage": "z/VMCPCommandsandUtilitiesReferenceVersion6Release3SC24-6175-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse4c21.pdf",
      "Title": "z/VM V6.3 CP Commands and Utilities Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6175-05",
      "FirstPage": "z/VMCPCommandsandUtilitiesReferenceVersion6Release3SC24-6175-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse5b21.pdf",
      "Title": "z/VM: CP Programming Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6084-04",
      "FirstPage": "z/VMCP Programming Services version 5 release 3  SC24-6084-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse7b10.pdf",
      "Title": "z/VM: Running Guest Operating Systems",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6115-01",
      "FirstPage": "z/VMRunning Guest Operating Systems version 5 release 2 SC24-6115-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse8a20.pdf",
      "Title": "z/VM: Virtual Machine Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-5955-00",
      "FirstPage": "z/VMVirtualMachineOperationVersion3Release1.0SC24-5955-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcse8b11.pdf",
      "Title": "z/VM: Virtual Machine Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6128-02",
      "FirstPage": "z/VMVirtual Machine Operation version 5 release 2 SC24-6128-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf1c20.pdf",
      "Title": "z/VM V6.3 Service Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6247-01",
      "FirstPage": "z/VMServiceGuideVersion6Release3GC24-6247-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf2b10.pdf",
      "Title": "z/VM: System Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6121-01",
      "FirstPage": "z/VMSystem Operation version 5 release 2 SC24-6121-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf2b20.pdf",
      "Title": "z/VM: System Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6121-02",
      "FirstPage": "z/VMSystem Operation version 5 release 3  SC24-6121-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf2b30.pdf",
      "Title": "z/VM: System Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6121-03",
      "FirstPage": "z/VMSystem Operation version 5 release 4  SC24-6121-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf8b11.pdf",
      "Title": "z/VM: General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6095-04",
      "FirstPage": "z/VM built on IBM Virtualization TechnologyGeneral Information version 5 release 2 GC24-6095-04  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf8b22.pdf",
      "Title": "z/VM: General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6095-07",
      "FirstPage": "z/VM built on IBM Virtualization TechnologyGeneral Information version 5 release 3  GC24-6095-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf8c10.pdf",
      "Title": "z/VM: General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6193-02",
      "FirstPage": "z/VMGeneralInformationversion6release2GC24-6193-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsf9c10.pdf",
      "Title": "z/VM: Migration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6201-02",
      "FirstPage": "z/VMMigrationGuideversion6release2GC24-6201-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0b10.pdf",
      "Title": "z/VM: CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6083-02",
      "FirstPage": "z/VMCP Planning and Administration version 5 release 2 SC24-6083-02  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0b11.pdf",
      "Title": "z/VM: CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6083-03",
      "FirstPage": "z/VMCP Planning and Administration version 5 release 2 SC24-6083-03  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0b21.pdf",
      "Title": "z/VM: CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6083-05",
      "FirstPage": "z/VMCP Planning and Administration version 5 release 3  SC24-6083-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0b30.pdf",
      "Title": "z/VM: CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6083-06",
      "FirstPage": "z/VMCP Planning and Administration version 5 release 4  SC24-6083-06  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg0c10.pdf",
      "Title": "z/VM: CP Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6178-02",
      "FirstPage": "z/VMCPPlanningandAdministrationversion6release2SC24-6178-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg2b10.pdf",
      "Title": "z/VM: CMS Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6078-01",
      "FirstPage": "z/VMCMS Planning and Administration version 5 release 2 SC24-6078-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg4a00.pdf",
      "Title": "z/VM: Saved Segments Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6056-00",
      "FirstPage": "z/VM\u2122SavedSegmentsPlanningandAdministrationVersion4Release3.0SC24-6056-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg4b10.pdf",
      "Title": "z/VM: Saved Segments Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6116-01",
      "FirstPage": "z/VMSaved Segments Planning and Administration version 5 release 2 SC24-6116-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsg4c20.pdf",
      "Title": "z/VM V6.3 Saved Segments Planning and Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6229-02",
      "FirstPage": "z/VMSavedSegmentsPlanningandAdministrationVersion6Release3SC24-6229-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsh1b10.pdf",
      "Title": "HCSH1B10",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC24-6077-01",
      "FirstPage": " z/VMIBM CMS Pipelines User\u2019s Guideversion 5 release 2    SC24-6077-01"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi1b11.pdf",
      "Title": "z/VM: Performance",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6109-02",
      "FirstPage": "z/VMPerformance version 5 release 2 SC24-6109-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi1c21.pdf",
      "Title": "z/VM V6.3 Performance",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6208-05",
      "FirstPage": "z/VMPerformanceVersion6Release3SC24-6208-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsi3c10.pdf",
      "Title": "z/VM: CMS File Pool Planning, Administration, and Operation",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6167-01",
      "FirstPage": "z/VMCMSFilePoolPlanning,Administration,andOperationversion6release2SC24-6167-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk2c00.pdf",
      "Title": "z/VM: Guide for Automated Installation and Service",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6197-00",
      "FirstPage": "z/VMGuideforAutomatedInstallationandServiceversion6release1GC24-6197-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk2c10.pdf",
      "Title": "z/VM: Installation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6246-00",
      "FirstPage": "z/VM \uFFFD\uFFFD\uFFFD Installation Guide version6release2 GC24-6246-00 "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk2c20.pdf",
      "Title": "z/VM V6.3 Installation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6246-01",
      "FirstPage": "z/VMInstallationGuideVersion6Release3GC24-6246-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsk2c31.pdf",
      "Title": "z/VM V6.4 Installation Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC24-6246-04",
      "FirstPage": "z/VMInstallation GuideVersion6 Release4GC24-6246-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl3c20.pdf",
      "Title": "z/VM V6.3 Directory Maintenance Facility Tailoring and Administration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6190-03",
      "FirstPage": "z/VMDirectoryMaintenanceFacilityTailoringandAdministrationGuideVersion6Release3SC24-6190-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl4c10.pdf",
      "Title": "z/VM: Directory Maintenance Facility Commands Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6188-02",
      "FirstPage": "z/VMDirectoryMaintenanceFacilityCommandsReferenceversion6release2SC24-6188-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl7b00.pdf",
      "Title": "z/VM: Performance Toolkit",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6136-00",
      "FirstPage": "z/VMPerformance Toolkit Version 5 Release 1.0 SC24-6136-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsl8c31.pdf",
      "Title": "z/VM V6.4 Systems Management Application Programming",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6234-12",
      "FirstPage": "z/VMSystems ManagementApplication ProgrammingVersion6 Release4SC24-6234-12IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsm7c30.pdf",
      "Title": "z/VM V6.4 Performance Toolkit Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6209-07",
      "FirstPage": "z/VMPerformance Toolkit GuideVersion6 Release4SC24-6209-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcso4c20.pdf",
      "Title": "z/VM V6.3 Enabling z/VM for OpenStack (Support for OpenStack Liberty Release)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6251-00",
      "FirstPage": "z/VMEnabling z/VM for OpenStack(Support for OpenStack Liberty Release)Version6 Release3SC24-6251-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcso5c30.pdf",
      "Title": "z/VM V6.4 Enabling z/VM for OpenStack (Support for OpenStack Newton Release)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6253-00",
      "FirstPage": "z/VMEnabling z/VM for OpenStack(Support for OpenStack Newton Release)Version6 Release4SC24-6253-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcss0b30.pdf",
      "Title": "z/VM: Secure Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6158-00",
      "FirstPage": "z/VMSecure Configuration Guide version 5 release 4  SC24-6158-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcss0c00.pdf",
      "Title": "z/VM: Secure Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6230-00",
      "FirstPage": "z/VMSecureConfigurationGuideversion6release1SC24-6230-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsx0b10.pdf",
      "Title": "z/VM: Getting Started with Linux on System z9 and zSeries",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6096-01",
      "FirstPage": "z/VMGetting Started with Linux on System z9 and zSeries version 5 release 2 SC24-6096-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsx0b20.pdf",
      "Title": "z/VM: Getting Started with Linux on System z",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6096-02",
      "FirstPage": "z/VMGetting Started with Linux on System z version 5 release 3  SC24-6096-02  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hcsx0c10.pdf",
      "Title": "z/VM: Getting Started with Linux on System z",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC24-6194-01",
      "FirstPage": "z/VMGettingStartedwithLinuxonSystemzversion6release2SC24-6194-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hkc3z100.pdf",
      "Title": "IBM Knowledge Center for z/OS Configuration and User Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-6805-00",
      "FirstPage": "z/OSIBMKnowledgeCenterforz/OSConfigurationandUserGuideVersion2Release2SC27-6805-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/hlcrug21.pdf",
      "Title": "IBM Softcopy Reader User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-3164-21",
      "FirstPage": "IBM\u00AEIBM Softcopy Reader User\u2019s Guide Version 3 Release 8  SC34-3164-21  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1006707.pdf",
      "Title": "IEAP1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI10-0670-07",
      "FirstPage": " IBMProgram DirectoryFor CBPDO Installation and ServerPac Referencez/OSV1.7.0Program Number5694-A01 CBPDO Level SMC0527 "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1191811.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "LicensedProgramSpecifications\u0002\u0003\u0004EnterpriseCOBOLforz/OS,Version5Release1Modification1\u2013ProgramNumber5655-W32IBM\u00AEEnterprise"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1191812.pdf",
      "Title": "Enterprise COBOL for z/OS, V5.2 Licensed Program Specifications",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GI11-9181-02",
      "FirstPage": "EnterpriseCOBOLforz/OSLicensedProgramSpecificationsVersion5.2GI11-9181-02\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1345320.pdf",
      "Title": "Enterprise COBOL for z/OS, V6.1 Licensed Program Specifications",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GI13-4532-00",
      "FirstPage": "Enterprise COBOL for z/OSLicensed Program SpecificationsVersion6.1GI13-4532-00IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1345321.pdf",
      "Title": "Enterprise COBOL for z/OS, V6.2 Licensed Program Specifications",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GI13-4532-01",
      "FirstPage": "Enterprise COBOL for z/OSLicensed Program SpecificationsVersion6.2GI13-4532-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/i1345322.pdf",
      "Title": "Licensed Program Specifications",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI13-4532-02",
      "FirstPage": "Enterprise COBOL for z/OSVersion 6.3Licensed Program Speci\uFB01cationsIBMGI13-4532-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2a880.pdf",
      "Title": "z/OS V1R11.0 JES3 Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7550-08",
      "FirstPage": "z/OSJES3 Initialization and Tuning Reference    SA22-7550-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2f810.pdf",
      "Title": "z/OS V2R2 JES3 Diagnosis Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-1009-01",
      "FirstPage": "z/OSJES3DiagnosisReferenceVersion2Release2GA32-1009-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2g710.pdf",
      "Title": "z/OS V2R2 JES3 Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1008-01",
      "FirstPage": "z/OSJES3CommandsVersion2Release2SA32-1008-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2h611.pdf",
      "Title": "z/OS V2R2 JES3 Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1007-02",
      "FirstPage": "z/OSJES3 MessagesVersion2 Release2SA32-1007-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2j510.pdf",
      "Title": "z/OS V2R2 JES3 Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1006-01",
      "FirstPage": "z/OSJES3CustomizationVersion2Release2SA32-1006-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2k410.pdf",
      "Title": "z/OS V2R2 JES3 Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1005-01",
      "FirstPage": "z/OSJES3InitializationandTuningReferenceVersion2Release2SA32-1005-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2m300.pdf",
      "Title": "z/OS V2R1.0 JES3 Introduction",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1004-00",
      "FirstPage": "z/OSJES3IntroductionVersion2Release1SA32-1004-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2n211.pdf",
      "Title": "z/OS V2R2 JES3 Initialization and Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-1003-02",
      "FirstPage": "z/OSJES3 Initialization and Tuning GuideVersion2 Release2SA32-1003-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2p110.pdf",
      "Title": "z/OS V2R2 JES3 Diagnosis",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-1002-01",
      "FirstPage": "z/OSJES3DiagnosisVersion2Release2GA32-1002-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2q110.pdf",
      "Title": "z/OS JES3 Data Areas Volume 1",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-1011-01",
      "FirstPage": "z/OSJES3DataAreasVolume1Version2Release2GA32-1011-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iat2r210.pdf",
      "Title": "z/OS JES3 Data Areas Volume 2",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-1012-01",
      "FirstPage": "z/OSJES3DataAreasVolume2Version2Release2GA32-1012-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ib6pug13.pdf",
      "Title": "Page Printer Formatting Aid: User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "",
      "FirstPage": "Page Printer Formatting AidUser\u0027s GuideVersion 1, Release 1.0S544-5284-13IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ibm3lr40.pdf",
      "Title": "Enterprise PL/I for z/OS: Enterprise PL/I Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-1460-05",
      "FirstPage": "Enterprise PL/I for z/OS PL/I for AIX WebSphere Developer for zSeries PL/I for WindowsLanguage Reference SC27-1460-05  \u0001"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice1cg60.pdf",
      "Title": "z/OS V1R13.0 DFSORT: Getting Started",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC26-7527-06",
      "FirstPage": "z/OSDFSORT:GettingStartedSC26-7527-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2ca10.pdf",
      "Title": "z/OS V2R2 DFSORT Application Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6878-01",
      "FirstPage": "z/OSDFSORTApplicationProgrammingGuideVersion2Release2SC23-6878-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2ca11.pdf",
      "Title": "z/OS V2R2 DFSORT Application Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6878-02",
      "FirstPage": "z/OSDFSORT Application Programming GuideVersion2 Release2SC23-6878-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2cg10.pdf",
      "Title": "z/OS V2R2 DFSORT: Getting Started",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6880-01",
      "FirstPage": "z/OSDFSORT:GettingStartedVersion2Release2SC23-6880-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2ci11.pdf",
      "Title": "z/OS V2R2 DFSORT Installation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6881-02",
      "FirstPage": "z/OSDFSORT Installation and CustomizationVersion2 Release2SC23-6881-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2cm11.pdf",
      "Title": "z/OS V2R2 DFSORT Messages, Codes and Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6879-02",
      "FirstPage": "z/OSDFSORT Messages, Codes and DiagnosisGuideVersion2 Release2SC23-6879-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ice2ct10.pdf",
      "Title": "z/OS V2R2 DFSORT Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC23-6882-01",
      "FirstPage": "z/OSDFSORTTuningGuideVersion2Release2SC23-6882-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a421.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1919-08",
      "FirstPage": "OS/390SecureWaySecurityServerRACFCommandLanguageReferenceSC28-1919-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a510.pdf",
      "Title": "ICHA5MST",
      "Author": "Paola Coda",
      "Subject": "",
      "DocumentNumber": "GC28-1912-06",
      "FirstPage": " OS/390IBM Security Server (RACF)Introduction    GC28-1912-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1a721.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1915-08",
      "FirstPage": "OS/390SecureWaySecurityServerRACFSecurityAdministrator\u2019sGuideSC28-1915-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1c610.pdf",
      "Title": "ICHC6MST",
      "Author": "Paola Coda",
      "Subject": "",
      "DocumentNumber": "GC28-1922-06",
      "FirstPage": " OS/390IBM Security ServerExternal Security Interface(RACROUTE) Macro Reference    GC28-1922-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1d121.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1921-08",
      "FirstPage": "OS/390SecureWaySecurityServerRACFCallableServicesGC28-1921-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich1o110.pdf",
      "Title": "EUVMBMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1938-03",
      "FirstPage": " OS/390\uF6DAIBM Security Server (DCE)Overview    GC28-1938-03"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a100.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF General User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2298-00",
      "FirstPage": "z/OSSecurityServerRACFGeneralUser\u0027sGuideVersion2Release1SA23-2298-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a111.pdf",
      "Title": "z/OS Security Server RACF General User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2298-02",
      "FirstPage": "z/OSSecurityServerRACFGeneralUser\u0027sGuideVersion2Release2SA23-2298-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a212.pdf",
      "Title": "z/OS Security Server RACF System Programmer\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2287-03",
      "FirstPage": "z/OSSecurityServerRACFSystemProgrammer\u0027sGuideVersion2Release2SA23-2287-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a300.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF Macros and Interfaces",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2288-00",
      "FirstPage": "z/OSSecurityServerRACFMacrosandInterfacesVersion2Release1SA23-2288-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a312.pdf",
      "Title": "z/OS Security Server RACF Macros and Interfaces",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2288-03",
      "FirstPage": "z/OSSecurityServerRACFMacrosandInterfacesVersion2Release2SA23-2288-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a400.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF Command Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2292-00",
      "FirstPage": "z/OSSecurityServerRACFCommandLanguageReferenceVersion2Release1SA23-2292-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a412.pdf",
      "Title": "z/OS Security Server RACF Command Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2292-03",
      "FirstPage": "z/OSSecurityServerRACFCommandLanguageReferenceVersion2Release2SA23-2292-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a612.pdf",
      "Title": "z/OS Security Server RACF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2291-03",
      "FirstPage": "z/OSSecurityServerRACFMessagesandCodesVersion2Release2SA23-2291-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a700.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF Security Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2289-00",
      "FirstPage": "z/OSSecurityServerRACFSecurityAdministrator\u0027sGuideVersion2Release1SA23-2289-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a712.pdf",
      "Title": "z/OS Security Server RACF Security Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2289-03",
      "FirstPage": "z/OSSecurityServerRACFSecurityAdministrator\u0027sGuideVersion2Release2SA23-2289-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a800.pdf",
      "Title": "z/OS V2R1.0 Security Server RACF Auditor\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2290-00",
      "FirstPage": "z/OSSecurityServerRACFAuditor\u0027sGuideVersion2Release1SA23-2290-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2a811.pdf",
      "Title": "z/OS Security Server RACF Auditor\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2290-02",
      "FirstPage": "z/OSSecurityServerRACFAuditor\u0027sGuideVersion2Release2SA23-2290-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2b210.pdf",
      "Title": "z/OS V2R2 Security Server RACF Diagnosis Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0886-01",
      "FirstPage": "z/OSSecurityServerRACFDiagnosisGuideVersion2Release2GA32-0886-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2c411.pdf",
      "Title": "ICH2C411",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-0885-02",
      "FirstPage": "z/OSIBM Security Server RACFData Areas    GA32-0885-02"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2c612.pdf",
      "Title": "z/OS Security Server RACROUTE Macro Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2294-03",
      "FirstPage": "z/OSSecurityServerRACFRACROUTEMacroReferenceVersion2Release2SA23-2294-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ich2d112.pdf",
      "Title": "z/OS Security Server RACF Callable Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2293-03",
      "FirstPage": "z/OSSecurityServerRACFCallableServicesVersion2Release2SA23-2293-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/icha1a00.pdf",
      "Title": "EUVMBMST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC24-5921-00",
      "FirstPage": "z/OSIBM SecureWay\uF6DA Security ServerDCE Overview    GC24-5921-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza330.pdf",
      "Title": "z/OS V1R4.0 Security Server RACF Macros and Interfaces",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7682-03",
      "FirstPage": "z/OSSecurityServerRACFMacrosandInterfacesSA22-7682-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza3a0.pdf",
      "Title": "z/OS V1R11 Security Server RACF Macros and Interfaces",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7682-13",
      "FirstPage": "z/OSSecurity Server RACF Macros and Interfaces SA22-7682-13  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza460.pdf",
      "Title": "z/OS V1R7.0 Security Server RACF Command Language Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7687-08",
      "FirstPage": "z/OSSecurity Server RACF Command Language Reference   SA22-7687-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza750.pdf",
      "Title": "z/OS V1R6.0 Security Server RACF Security Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7683-05",
      "FirstPage": "z/OSSecurity Server RACF Security Administrator\u2019s Guide   SA22-7683-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza780.pdf",
      "Title": "z/OS V1R9.0 Security Server RACF Security Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7683-11",
      "FirstPage": "z/OSSecurity Server RACF Security Administrator\u2019s Guide    SA22-7683-11  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza7b0.pdf",
      "Title": "z/OS V1R12.0 Security Server RACF Security Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7683-14",
      "FirstPage": "z/OSSecurityServerRACFSecurityAdministrator\u0027sGuideSA22-7683-14\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza7c0.pdf",
      "Title": "z/OS V1R13.0 Security Server RACF Security Administrator\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7683-15",
      "FirstPage": "z/OSSecurityServerRACFSecurityAdministrator\u0027sGuideSA22-7683-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichza8b0.pdf",
      "Title": "z/OS V1R12.0 Security Server RACF Auditor\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7684-12",
      "FirstPage": "z/OSSecurityServerRACFAuditor\u0027sGuideSA22-7684-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichzc4c0.pdf",
      "Title": "ICHZC4C0",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA22-7680-13",
      "FirstPage": " z/OSIBM Security Server RACFData Areas    GA22-7680-13"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ichzd180.pdf",
      "Title": "z/OS V1R9.0 Security Server RACF Callable Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7691-11",
      "FirstPage": "z/OSSecurity Server RACF Callable Services   SA22-7691-11  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ick4020o.pdf",
      "Title": "ICKDSF R17 User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC35-0033-41",
      "FirstPage": "DeviceSupportFacilities(ICKDSF)User\u0027sGuideandReferenceRelease17GC35-0033-41\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1c610.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1756-04",
      "FirstPage": "OS/390MVSInteractiveProblemControlSystem(IPCS)User\u2019sGuideGC28-1756-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1e130.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1751-08",
      "FirstPage": "OS/390MVSInitializationandTuningGuideSC28-1751-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1e131.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1751-09",
      "FirstPage": "OS/390MVSInitializationandTuningGuideSC28-1751-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1f230.pdf",
      "Title": "IEAF2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC28-1789-07",
      "FirstPage": "OS/390IBM MVS Using the Subsystem Interface    SC28-1789-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1g241.pdf",
      "Title": "IEAG2MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1783-12",
      "FirstPage": "OS/390IBM MVS System Management Facilities(SMF)    GC28-1783-12"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1i120.pdf",
      "Title": "OS/390 V2R10.0 MVS Recovery and Reconfiguration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC28-1777-06",
      "FirstPage": "OS/390MVSRecoveryandReconfigurationGuideGC28-1777-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1v130.pdf",
      "Title": "IEAV1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SY28-1085-07",
      "FirstPage": "OS/390IBM MVS Diagnosis:Tools and Service Aids    SY28-1085-07"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea1w140.pdf",
      "Title": "IEAW1MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1761-12",
      "FirstPage": "OS/390IBM MVS Planning: Workload Management    GC28-1761-12"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2a530.pdf",
      "Title": "z/OS V1R5.0 MVS Extended Addressability Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7614-03",
      "FirstPage": "z/OSMVS Programming: Extended Addressability Guide   SA22-7614-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2a570.pdf",
      "Title": "z/OS V1R11.0 MVS Extended Addressability Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7614-07",
      "FirstPage": "z/OSMVS Programming: Extended Addressability Guide    SA22-7614-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2a600.pdf",
      "Title": "z/OS V1R1.0 MVS Assembler Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7605-00",
      "FirstPage": "z/OSMVSProgramming:AssemblerServicesGuideSA22-7605-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2a660.pdf",
      "Title": "z/OS V1R8.0 MVS Assembler Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7605-07",
      "FirstPage": "z/OSMVS Programming: Assembler Services Guide   SA22-7605-07  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2a820.pdf",
      "Title": "z/OS V1R3.0 MVS Auth Assembler Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7608-02",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesGuideSA22-7608-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2b510.pdf",
      "Title": "z/OS V1R2.0 MVS JCL User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7598-01",
      "FirstPage": "z/OSMVSJCLUser\u2019sGuideSA22-7598-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2b540.pdf",
      "Title": "z/OS V1R6.0 MVS JCL User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7598-04",
      "FirstPage": "z/OSMVS JCL User\u2019s Guide   SA22-7598-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2b600.pdf",
      "Title": "IEAB6MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7597-00",
      "FirstPage": "z/OSIBM MVS JCL Reference    SA22-7597-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2b6b1.pdf",
      "Title": "z/OS V1R13.0 MVS JCL Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7597-16",
      "FirstPage": "z/OSMVSJCLReferenceSA22-7597-16\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2c5a0.pdf",
      "Title": "z/OS V1R11.0 MVS IPCS Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7594-10",
      "FirstPage": "z/OSMVS Interactive Problem Control System (IPCS) Commands    SA22-7594-10  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2d240.pdf",
      "Title": "IEA2D240",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA22-7582-06",
      "FirstPage": "z/OSIBM MVS Data Areas,Volume 2 (DCCB - ITZYRETC)    GA22-7582-06"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2e170.pdf",
      "Title": "z/OS V1R12.0 MVS Initialization and Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7591-08",
      "FirstPage": "z/OSMVSInitializationandTuningGuideSA22-7591-08\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2e280.pdf",
      "Title": "z/OS V1R9.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7592-15",
      "FirstPage": "z/OSMVS Initialization and Tuning Reference   SA22-7592-15  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2e2a1.pdf",
      "Title": "z/OS V1R11.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7592-20",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceSA22-7592-20\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2e2c1.pdf",
      "Title": "z/OS V1R13.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7592-23",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceSA22-7592-23\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2e2c2.pdf",
      "Title": "z/OS V1R13.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7592-24",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceSA22-7592-24\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2g131.pdf",
      "Title": "z/OS V1R4.0 MVS System Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7627-05",
      "FirstPage": "z/OSMVSSystemCommandsSA22-7627-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2g1c0.pdf",
      "Title": "z/OS V1R13.0 MVS System Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7627-26",
      "FirstPage": "z/OSMVSSystemCommandsSA22-7627-26\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2g232.pdf",
      "Title": "z/OS V1R4.0 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7630-06",
      "FirstPage": "z/OSMVSSystemManagementFacilities(SMF)SA22-7630-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2g233.pdf",
      "Title": "z/OS V1R4.0 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7630-07",
      "FirstPage": "z/OSMVS System Management Facilities (SMF)   SA22-7630-07   \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2g250.pdf",
      "Title": "z/OS V1R6.0 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7630-09",
      "FirstPage": "z/OSMVS System Management Facilities (SMF)   SA22-7630-09  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2g440.pdf",
      "Title": "z/OS V1R7.0 MVS Planning: Global Resource Serialization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7600-04",
      "FirstPage": "z/OSMVS Planning: Global Resource Serialization   SA22-7600-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2h792.pdf",
      "Title": "z/OS V1R10.0 MVS System Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7626-19",
      "FirstPage": "z/OSMVS System Codes    SA22-7626-19  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2i731.pdf",
      "Title": "z/OS V1R4.0 MVS Sysplex Services Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7618-04",
      "FirstPage": "z/OSMVS Programming: Sysplex Services Reference   SA22-7618-04   \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2m1b0.pdf",
      "Title": "z/OS V1R12.0 MVS System Messages, Vol 1 (ABA-AOM)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7631-21",
      "FirstPage": "z/OSMVSSystemMessagesVolume1(ABA-AOM)SA22-7631-21\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2m1c1.pdf",
      "Title": "z/OS V1R13.0 MVS System Messages, Vol 1 (ABA-AOM)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7631-24",
      "FirstPage": "z/OSMVSSystemMessagesVolume1(ABA-AOM)SA22-7631-24\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2m700.pdf",
      "Title": "z/OS V1R1.0 MVS System Messages, Vol 7 (IEB-IEE)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7637-00",
      "FirstPage": "z/OSMVSSystemMessagesVolume7(IEB-IEE)SA22-7637-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2n511.pdf",
      "Title": "",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2270-01",
      "FirstPage": "z/OSz/OSBatchRuntime:PlanningandUser\u0027sGuideSA23-2270-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2p1c0.pdf",
      "Title": "IEA2P1C0",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GI10-0670-13",
      "FirstPage": " IBMProgram DirectoryFor CBPDO Installation and ServerPac Referencez/OSV1.13.0Program Number5694-A01 CBPDO Level SMC1115"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2u110.pdf",
      "Title": "z/OS MVS Capacity Provisioning User|mJs Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-8299-01",
      "FirstPage": "z/OSMVS Capacity Provisioning User\u0027s Guide Version 1 Release 10  SC33-8299-01  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2u130.pdf",
      "Title": "z/OS V1R12.0 MVS Capacity Provisioning User|mJs Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-8299-04",
      "FirstPage": "z/OSMVSCapacityProvisioningUser\u0027sGuideVersion1Release12SC33-8299-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2u141.pdf",
      "Title": "z/OS V1R13.0 MVS Capacity Provisioning User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-8299-06",
      "FirstPage": "z/OSMVSCapacityProvisioningUser\u0027sGuideVersion1Release13SC33-8299-06\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2un30.pdf",
      "Title": "z/OS support for Unicode\u003Ctm_macro\u003E: Using Conversion Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7649-03",
      "FirstPage": "z/OSSupport for Unicode\u2122: Using Conversion Services SA22-7649-03  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2un41.pdf",
      "Title": "z/OS Support for Unicode\u003Ctm_macro\u003E: Using Conversion Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7649-05",
      "FirstPage": "z/OSSupport for Unicode\u2122: Using Conversion Services SA22-7649-05  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2v132.pdf",
      "Title": "z/OS V1R4.0 MVS Diagnosis: Tools and Service Aids",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7589-05",
      "FirstPage": "z/OSMVS Diagnosis: Tools and Service Aids   GA22-7589-05   \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2v170.pdf",
      "Title": "z/OS V1R8.0 MVS Diagnosis: Tools and Service Aids",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7589-10",
      "FirstPage": "z/OSMVS Diagnosis: Tools and Service Aids   GA22-7589-10  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2v1c0.pdf",
      "Title": "z/OS V1R13.0 MVS Diagnosis: Tools and Service Aids",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA22-7589-17",
      "FirstPage": "z/OSMVSDiagnosis:ToolsandServiceAidsGA22-7589-17\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w100.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7602-00",
      "FirstPage": " z/OSIBM MVS Planning: Workload Management    SA22-7602-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w110.pdf",
      "Title": "z/OS V1R2.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7602-02",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementSA22-7602-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w131.pdf",
      "Title": "z/OS V1R4.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7602-05",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementSA22-7602-05\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w170.pdf",
      "Title": "z/OS MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7602-12",
      "FirstPage": "z/OSMVS Planning: Workload Management   SA22-7602-12  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w181.pdf",
      "Title": "z/OS V1R9.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7602-15",
      "FirstPage": "z/OSMVS Planning: Workload Management    SA22-7602-15  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w1a0.pdf",
      "Title": "z/OS V1R11.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7602-18",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementVersion1Release11SA22-7602-18\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w1b0.pdf",
      "Title": "z/OS V1R12.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7602-19",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementVersion1Release12SA22-7602-19\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w1c0.pdf",
      "Title": "z/OS V1R13.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7602-20",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementVersion1Release13SA22-7602-20\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w2b0.pdf",
      "Title": "z/OS V1R12.0 MVS Programming: Workload Management Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7619-20",
      "FirstPage": "z/OSMVSProgramming:WorkloadManagementServicesVersion1Release12SA22-7619-20\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea2w2c0.pdf",
      "Title": "z/OS V1R13.0 MVS Programming: Workload Management Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7619-21",
      "FirstPage": "z/OSMVSProgramming:WorkloadManagementServicesVersion1Release13SA22-7619-21\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a110.pdf",
      "Title": "z/OS V2R2 MVS Authorized Assembler Services Reference ALE-DYN",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1372-01",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesReference,Volume1(ALE-DYN)Version2Release2SA23-1372-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a212.pdf",
      "Title": "z/OS V2R2 MVS Authorized Assembler Services Reference EDT-IXG",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1373-04",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesReference,Volume2(EDT-IXG)Version2Release2SA23-1373-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a310.pdf",
      "Title": "z/OS V2R2 MVS Authorized Assembler Services Reference LLA-SDU",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1374-02",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesReference,Volume3(LLA-SDU)Version2Release2SA23-1374-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a410.pdf",
      "Title": "z/OS V2R2 MVS Authorized Assembler Services Reference SET-WTO",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1375-01",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesReference,Volume4(SET-WTO)Version2Release2SA23-1375-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a510.pdf",
      "Title": "z/OS V2R2 MVS Extended Addressability Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1394-01",
      "FirstPage": "z/OSMVSProgramming:ExtendedAddressabilityGuideVersion2Release2SA23-1394-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a600.pdf",
      "Title": "z/OS V2R1.0 MVS Assembler Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1368-00",
      "FirstPage": "z/OSMVSProgramming:AssemblerServicesGuideVersion2Release1SA23-1368-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a611.pdf",
      "Title": "z/OS V2R2 MVS Assembler Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1368-03",
      "FirstPage": "z/OSMVS Programming: Assembler ServicesGuideVersion2 Release2SA23-1368-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a710.pdf",
      "Title": "z/OS V2R2 MVS Assembler Services Reference ABE-HSP",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1369-01",
      "FirstPage": "z/OSMVSProgramming:AssemblerServicesReference,Volume1(ABE-HSP)Version2Release2SA23-1369-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a801.pdf",
      "Title": "z/OS V2R1.0 MVS Authorized Assembler Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1371-01",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesGuideVersion2Release1SA23-1371-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a812.pdf",
      "Title": "z/OS V2R2 MVS Authorized Assembler Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1371-05",
      "FirstPage": "z/OSMVSProgramming:AuthorizedAssemblerServicesGuideVersion2Release2SA23-1371-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3a911.pdf",
      "Title": "z/OS V2R2 MVS Assembler Services Reference IAR-XCT",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1370-03",
      "FirstPage": "z/OSMVS Programming: Assembler ServicesReference, Volume 2 (IAR-XCT)Version2 Release2SA23-1370-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3b110.pdf",
      "Title": "z/OS V2R2 MVS Program Management: User\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1393-01",
      "FirstPage": "z/OSMVSProgramManagement:User\u0027sGuideandReferenceVersion2Release2SA23-1393-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3b210.pdf",
      "Title": "z/OS V2R2 MVS Program Management: Advanced Facilities",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1392-01",
      "FirstPage": "z/OSMVSProgramManagement:AdvancedFacilitiesVersion2Release2SA23-1392-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3b510.pdf",
      "Title": "z/OS V2R2 MVS JCL User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1386-01",
      "FirstPage": "z/OSMVSJCLUser\u0027sGuideVersion2Release2SA23-1386-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3b601.pdf",
      "Title": "z/OS V2R1.0 MVS JCL Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1385-01",
      "FirstPage": "z/OSMVSJCLReferenceVersion2Release1SA23-1385-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3b611.pdf",
      "Title": "z/OS V2R2 MVS JCL Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1385-03",
      "FirstPage": "z/OSMVS JCL ReferenceVersion2 Release2SA23-1385-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c115.pdf",
      "Title": "z/OS MVS Callable Services for HLL",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1377-08",
      "FirstPage": "z/OSMVSProgramming:CallableServicesforHigh-LevelLanguagesVersion2Release2SA23-1377-08IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c300.pdf",
      "Title": "z/OS V2R1.0 MVS Writing TPs for APPC/MVS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1397-00",
      "FirstPage": "z/OSMVSProgramming:WritingTransactionProgramsforAPPC/MVSVersion2Release1SA23-1397-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c400.pdf",
      "Title": "z/OS V2R1.0 MVS Planning: APPC/MVS Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1388-00",
      "FirstPage": "z/OSMVSPlanning:APPC/MVSManagementVersion2Release1SA23-1388-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c511.pdf",
      "Title": "z/OS V2R2 MVS IPCS Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1382-03",
      "FirstPage": "z/OSMVSInteractiveProblemControlSystem(IPCS)CommandsVersion2Release2SA23-1382-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c600.pdf",
      "Title": "z/OS V2R1.0 MVS IPCS User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1384-00",
      "FirstPage": "z/OSMVSInteractiveProblemControlSystem(IPCS)User\u0027sGuideVersion2Release1SA23-1384-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c711.pdf",
      "Title": "z/OS V2R2 MVS IPCS Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1383-01",
      "FirstPage": "z/OSMVSInteractiveProblemControlSystem(IPCS)CustomizationVersion2Release2SA23-1383-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3c800.pdf",
      "Title": "z/OS V2R1.0 MVS Writing Transaction Schedulers for APPC/MVS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1398-00",
      "FirstPage": "z/OSMVSProgramming:WritingTransactionSchedulersforAPPC/MVSVersion2Release1SA23-1398-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3d110.pdf",
      "Title": "z/OS V2R2 MVS Data Areas  Volume 1 (ABE - IAX)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0935-03",
      "FirstPage": "z/OSV2R2MVSDataAreasVolume1(ABE-IAX)Version2Release2GA32-0935-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3d210.pdf",
      "Title": "z/OS V2R2 MVS Data Areas  Volume 2 (IAX - ISG)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0936-03",
      "FirstPage": "z/OSV2R2MVSDataAreasVolume2(IAX-ISG)Version2Release2GA32-0936-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3d310.pdf",
      "Title": "z/OS V2R2 MVS Data Areas    Volume 3 (ITK - SCE)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0937-03",
      "FirstPage": "z/OSV2R2MVSDataAreasVolume3(ITK-SCE)Version2Release2GA32-0937-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3d410.pdf",
      "Title": "z/OS V2R2 MVS Data Areas   Volume 4 (SCF - XTL)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0938-03",
      "FirstPage": "z/OSV2R2MVSDataAreasVolume4(SCF-XTL)Version2Release2GA32-0938-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3d601.pdf",
      "Title": "IBM z/OS V2R1 MVS Data Areas Volume 6 (May 2014)",
      "Author": "IBM",
      "Subject": "IBM z/OS V2R1 MVS Data Areas Volume 6 (May 2014)",
      "DocumentNumber": "GA32-0940-01",
      "FirstPage": " z/OSMVS Data AreasVolume 6Document Number GA32-0940-01 Note Before using this information and the product it supports, "
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e111.pdf",
      "Title": "z/OS V2R2 MVS Initialization and Tuning Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1379-02",
      "FirstPage": "z/OSMVS Initialization and Tuning GuideVersion2 Release2SA23-1379-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e201.pdf",
      "Title": "z/OS V2R1.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1380-01",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceVersion2Release1SA23-1380-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e203.pdf",
      "Title": "z/OS V2R1.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1380-03",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceVersion2Release1SA23-1380-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e204.pdf",
      "Title": "z/OS V2R1.0 MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1380-04",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceVersion2Release1SA23-1380-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e214.pdf",
      "Title": "z/OS MVS Initialization and Tuning Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1380-09",
      "FirstPage": "z/OSMVSInitializationandTuningReferenceVersion2Release2SA23-1380-09IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e412.pdf",
      "Title": "z/OS V2R2 MVS Installation Exits",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1381-03",
      "FirstPage": "z/OSMVSInstallationExitsVersion2Release2SA23-1381-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3e500.pdf",
      "Title": "z/OS V2R1.0 MVS Using the Functional Subsystem Interface",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0678-00",
      "FirstPage": "z/OSz/OSMVSUsingtheFunctionalSubsystemInterfaceVersion2Release1SA38-0678-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3f100.pdf",
      "Title": "z/OS V2R1.0 MVS Setting Up a Sysplex",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1399-00",
      "FirstPage": "z/OSMVSSettingUpaSysplexVersion2Release1SA23-1399-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3f111.pdf",
      "Title": "z/OS V2R2 MVS Setting Up a Sysplex",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1399-03",
      "FirstPage": "z/OSMVS Setting Up a SysplexVersion2 Release2SA23-1399-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3f200.pdf",
      "Title": "z/OS V2R1.0 MVS Using the Subsystem Interface",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0679-00",
      "FirstPage": "z/OSMVSUsingtheSubsystemInterfaceVersion2Release1SA38-0679-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3f211.pdf",
      "Title": "z/OS MVS Using the Subsystem Interface",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0679-03",
      "FirstPage": "z/OSMVSUsingtheSubsystemInterfaceVersion2Release2SA38-0679-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g100.pdf",
      "Title": "z/OS V2R1.0 MVS System Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0666-00",
      "FirstPage": "z/OSMVSSystemCommandsVersion2Release1SA38-0666-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g114.pdf",
      "Title": "z/OS MVS System Commands",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0666-07",
      "FirstPage": "z/OSMVSSystemCommandsVersion2Release2SA38-0666-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g202.pdf",
      "Title": "z/OS V2R1.0 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0667-02",
      "FirstPage": "z/OSMVSSystemManagementFacilities(SMF)Version2Release1SA38-0667-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g203.pdf",
      "Title": "z/OS V2R1.0 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0667-03",
      "FirstPage": "z/OSMVSSystemManagementFacilities(SMF)Version2Release1SA38-0667-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g211.pdf",
      "Title": "z/OS V2R2 MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0667-05",
      "FirstPage": "z/OSMVS System Management Facilities (SMF)Version2 Release2SA38-0667-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g215.pdf",
      "Title": "z/OS MVS System Management Facilities (SMF)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0667-09",
      "FirstPage": "z/OSMVSSystemManagementFacilities(SMF)Version2Release2SA38-0667-09IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g310.pdf",
      "Title": "z/OS V2R2 MVS Planning: Operations",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1390-01",
      "FirstPage": "z/OSMVSPlanning:OperationsVersion2Release2SA23-1390-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g410.pdf",
      "Title": "z/OS V2R2 MVS Planning: Global Resource Serialization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1389-01",
      "FirstPage": "z/OSMVSPlanning:GlobalResourceSerializationVersion2Release2SA23-1389-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g610.pdf",
      "Title": "z/OS V2R2 MVS Device Validation Support",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0697-01",
      "FirstPage": "z/OSMVSDeviceValidationSupportVersion2Release2SA38-0697-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3g811.pdf",
      "Title": "z/OS V2R2 HCD Planning",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0907-02",
      "FirstPage": "z/OSHardwareConfigurationDefinitionPlanningVersion2Release2GA32-0907-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3h610.pdf",
      "Title": "z/OS V2R2 MVS Dump Output Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1378-01",
      "FirstPage": "z/OSMVSDumpOutputMessagesVersion2Release2SA23-1378-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3h712.pdf",
      "Title": "z/OS V2R2 MVS System Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0665-03",
      "FirstPage": "z/OSMVSSystemCodesVersion2Release2SA38-0665-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3i611.pdf",
      "Title": "z/OS V2R2 MVS Sysplex Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1400-03",
      "FirstPage": "z/OSMVSProgramming:SysplexServicesGuideVersion2Release2SA23-1400-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3i710.pdf",
      "Title": "z/OS V2R2 MVS Sysplex Services Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0658-02",
      "FirstPage": "z/OSMVSProgramming:SysplexServicesReferenceVersion2Release2SA38-0658-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3i800.pdf",
      "Title": "z/OS V2R1.0 MVS JES Common Coupling Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1387-00",
      "FirstPage": "z/OSMVSProgramming:JESCommonCouplingServicesVersion2Release1SA23-1387-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3k500.pdf",
      "Title": "z/OS V2R1.0 MVS Writing Servers for APPC/MVS",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1396-00",
      "FirstPage": "z/OSMVSProgramming:WritingServersforAPPC/MVSVersion2Release1SA23-1396-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m110.pdf",
      "Title": "z/OS V2R2 MVS System Messages, Vol 1 (ABA-AOM)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0668-04",
      "FirstPage": "z/OSMVSSystemMessagesVolume1(ABA-AOM)Version2Release2SA38-0668-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m211.pdf",
      "Title": "z/OS V2R2 MVS System Messages, Vol 2 (ARC-ASA)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0669-05",
      "FirstPage": "z/OSMVS System Messages Volume 2 (ARC -ASA)Version2 Release2SA38-0669-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m311.pdf",
      "Title": "z/OS V2R2 MVS System Messages, Vol 3 (ASB-BPX)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0670-03",
      "FirstPage": "z/OSMVSSystemMessagesVolume3(ASB-BPX)Version2Release2SA38-0670-03IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m412.pdf",
      "Title": "z/OS V2R2 MVS System Messages, Vol 4 (CBD-DMO)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0671-04",
      "FirstPage": "z/OSMVSSystemMessagesVolume4(CBD-DMO)Version2Release2SA38-0671-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m613.pdf",
      "Title": "z/OS MVS System Messages, Vol 6 (GOS-IEA)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0673-06",
      "FirstPage": "z/OSMVSSystemMessagesVolume6(GOS-IEA)Version2Release2SA38-0673-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m713.pdf",
      "Title": "z/OS MVS System Messages, Vol 7 (IEB-IEE)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0674-06",
      "FirstPage": "z/OSMVSSystemMessagesVolume7(IEB-IEE)Version2Release2SA38-0674-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m815.pdf",
      "Title": "z/OS MVS System Messages, Vol 8 (IEF-IGD)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0675-08",
      "FirstPage": "z/OSMVSSystemMessagesVolume8(IEF-IGD)Version2Release2SA38-0675-08IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3m913.pdf",
      "Title": "z/OS MVS System Messages, Vol 9 (IGF-IWM)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0676-07",
      "FirstPage": "z/OSMVSSystemMessagesVolume9(IGF-IWM)Version2Release2SA38-0676-07IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3ma11.pdf",
      "Title": "z/OS V2R2 MVS System Messages, Vol 10 (IXC-IZP)",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0677-04",
      "FirstPage": "z/OSMVS System Messages Volume 10 (IXC -IZP)Version2 Release2SA38-0677-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3n111.pdf",
      "Title": "z/OS V2R2 MVS Programming: Resource Recovery",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1395-02",
      "FirstPage": "z/OSMVSProgramming:ResourceRecoveryVersion2Release2SA23-1395-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3n500.pdf",
      "Title": "z/OS V2R1.0 Batch Runtime Planning and User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1376-00",
      "FirstPage": "z/OSz/OSBatchRuntime:PlanningandUser\u0027sGuideVersion2Release1SA23-1376-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3q200.pdf",
      "Title": "z/OS V2R1.0 MVS Programming: Product Registration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0698-00",
      "FirstPage": "z/OSMVSProgramming:ProductRegistrationVersion2Release1SA38-0698-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3r110.pdf",
      "Title": "z/OS V2R2 MVS Product Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-1391-01",
      "FirstPage": "z/OSMVSProductManagementVersion2Release2SA23-1391-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3u100.pdf",
      "Title": "z/OS V2R1.0 MVS Capacity Provisioning User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2661-00",
      "FirstPage": "z/OSMVSCapacityProvisioningUser\u0027sGuideVersion2Release1SC34-2661-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3u110.pdf",
      "Title": "z/OS V2R2 MVS Capacity Provisioning User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2661-01",
      "FirstPage": "z/OSMVSCapacityProvisioningUser\u0027sGuideVersion2Release2SC34-2661-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3un10.pdf",
      "Title": "z/OS V2R2 Unicode Services User\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0680-01",
      "FirstPage": "z/OSUnicodeServicesUser\u0027sGuideandReferenceVersion2Release2SA38-0680-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3v112.pdf",
      "Title": "z/OS V2R2 MVS Diagnosis: Tools and Service Aids",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0905-05",
      "FirstPage": "z/OSMVSDiagnosis:ToolsandServiceAidsVersion2Release2GA32-0905-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3v212.pdf",
      "Title": "z/OS V2R2 MVS Diagnosis: Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0904-05",
      "FirstPage": "z/OSMVSDiagnosis:ReferenceVersion2Release2GA32-0904-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3w101.pdf",
      "Title": "z/OS V2R1.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2662-01",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementVersion2Release1SC34-2662-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3w102.pdf",
      "Title": "z/OS V2R1.0 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2662-02",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementVersion2Release1SC34-2662-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3w110.pdf",
      "Title": "z/OS V2R2 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2662-03",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementVersion2Release2SC34-2662-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3w112.pdf",
      "Title": "z/OS V2R2 MVS Planning: Workload Management",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2662-05",
      "FirstPage": "z/OSMVSPlanning:WorkloadManagementVersion2Release2SC34-2662-05IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3w201.pdf",
      "Title": "z/OS V2R1.0 MVS Programming: Workload Management Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2663-01",
      "FirstPage": "z/OSMVSProgramming:WorkloadManagementServicesVersion2Release1SC34-2663-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea3w212.pdf",
      "Title": "z/OS V2R2 MVS Programming: Workload Management Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-2663-04",
      "FirstPage": "z/OSMVSProgramming:WorkloadManagementServicesVersion2Release2SC34-2663-04IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iea5j700.pdf",
      "Title": "IEAJ7MST",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GC28-1470-00",
      "FirstPage": " MVSIBM Programming: Hiperbatch Guide    GC28-1470-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ifc5g104.pdf",
      "Title": "EREP V3R5 User\u2122s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC35-0151-04",
      "FirstPage": "EnvironmentalRecordEditingandPrintingProgram(EREP)User\u2019sGuideVersion3Release5GC35-0151-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ifc5r107.pdf",
      "Title": "EREP V3R5 Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC35-0152-07",
      "FirstPage": "EnvironmentalRecordEditingandPrintingProgram(EREP)ReferenceVersion3Release5GC35-0152-07\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2a200.pdf",
      "Title": "z/OS V2R1.0 TSO/E REXX Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0972-00",
      "FirstPage": "z/OSTSO/EREXXReferenceVersion2Release1SA32-0972-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2a211.pdf",
      "Title": "z/OS V2R2 TSO/E REXX Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0972-02",
      "FirstPage": "z/OSTSO/E REXX ReferenceVersion2 Release2SA32-0972-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2b200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Programming Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0973-00",
      "FirstPage": "z/OSTSO/EProgrammingServicesVersion2Release1SA32-0973-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2b210.pdf",
      "Title": "z/OS V2R2 TSO/E Programming Services",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0973-01",
      "FirstPage": "z/OSTSO/EProgrammingServicesVersion2Release2SA32-0973-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2e200.pdf",
      "Title": "z/OS V2R1.0 TSO/E System Programming Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0974-00",
      "FirstPage": "z/OSTSO/ESystemProgrammingCommandReferenceVersion2Release1SA32-0974-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2e210.pdf",
      "Title": "z/OS V2R2 TSO/E System Programming Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0974-01",
      "FirstPage": "z/OSTSO/ESystemProgrammingCommandReferenceVersion2Release2SA32-0974-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2f200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Guide to the Server-Requester Programming Interface",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0980-00",
      "FirstPage": "z/OSTSO/EGuidetotheServer-RequesterProgrammingInterfaceVersion2Release1SA32-0980-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2g200.pdf",
      "Title": "z/OS V2R1.0 TSO/E REXX User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0982-00",
      "FirstPage": "z/OSTSO/EREXXUser\u0027sGuideVersion2Release1SA32-0982-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2h200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0976-00",
      "FirstPage": "z/OSTSO/ECustomizationVersion2Release1SA32-0976-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2h211.pdf",
      "Title": "z/OS V2R2 TSO/E Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0976-02",
      "FirstPage": "z/OSTSO/E CustomizationVersion2 Release2SA32-0976-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2i210.pdf",
      "Title": "z/OS V2R2 TSO/E CLISTs",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0978-01",
      "FirstPage": "z/OSTSO/ECLISTsVersion2Release2SA32-0978-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2j200.pdf",
      "Title": "z/OS V2R1.0 TSO/E General Information",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0979-00",
      "FirstPage": "z/OSTSO/EGeneralInformationVersion2Release1SA32-0979-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2k200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0981-00",
      "FirstPage": "z/OSTSO/EProgrammingGuideVersion2Release1SA32-0981-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2k210.pdf",
      "Title": "z/OS V2R2 TSO/E Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0981-01",
      "FirstPage": "z/OSTSO/EProgrammingGuideVersion2Release2SA32-0981-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2l200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0975-00",
      "FirstPage": "z/OSTSO/ECommandReferenceVersion2Release1SA32-0975-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2l210.pdf",
      "Title": "z/OS V2R2 TSO/E Command Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0975-01",
      "FirstPage": "z/OSTSO/ECommandReferenceVersion2Release2SA32-0975-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2m200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0970-00",
      "FirstPage": "z/OSTSO/EMessagesVersion2Release1SA32-0970-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2m211.pdf",
      "Title": "z/OS TSO/E Messages",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0970-02",
      "FirstPage": "z/OSTSO/EMessagesVersion2Release2SA32-0970-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2n200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Administration",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0977-00",
      "FirstPage": "z/OSTSO/EAdministrationVersion2Release1SA32-0977-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2o200.pdf",
      "Title": "z/OS V2R1.0 TSO/E User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0971-00",
      "FirstPage": "z/OSTSO/EUser\u0027sGuideVersion2Release1SA32-0971-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2p200.pdf",
      "Title": "z/OS V2R1.0 TSO/E Primer",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA32-0984-00",
      "FirstPage": "z/OSTSO/EPrimerVersion2Release1SA32-0984-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2q200.pdf",
      "Title": "IKJ2Q200",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "GA32-0983-00",
      "FirstPage": " z/OSTSO System Diagnosis: Data AreasDocument Number GA32-0983-00"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj2q210.pdf",
      "Title": "z/OS V2R2 TSO/E System Diagnosis: Data Areas",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GA32-0983-01",
      "FirstPage": "z/OSV2R2TSO/ESystemDiagnosis:DataAreasVersion2Release2GA32-0983-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4a310.pdf",
      "Title": "z/OS V1R2.0 TSO/E REXX Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7790-01",
      "FirstPage": "z/OSTSO/EREXXReferenceSA22-7790-01IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4a370.pdf",
      "Title": "z/OS V1R8.0 TSO/E REXX Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7790-07",
      "FirstPage": "z/OSTSO/E REXX Reference   SA22-7790-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4a380.pdf",
      "Title": "z/OS V1R11.0 TSO/E REXX Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7790-08",
      "FirstPage": "z/OSTSO/E REXX Reference    SA22-7790-08  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4a3a0.pdf",
      "Title": "z/OS V1R13.0 TSO/E REXX Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7790-10",
      "FirstPage": "z/OSTSO/EREXXReferenceSA22-7790-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4b4c0.pdf",
      "Title": "z/OS V1R13.0 TSO/E Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7783-12",
      "FirstPage": "z/OSTSO/ECustomizationSA22-7783-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikj4c310.pdf",
      "Title": "z/OS V1R2.0 TSO/E REXX User\u0027s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7791-01",
      "FirstPage": "z/OSTSO/EREXXUser\u2019sGuideSA22-7791-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/iky2a111.pdf",
      "Title": "z/OS V2R2 Cryptographic Services PKI Services Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2286-02",
      "FirstPage": "z/OSCryptographicServicesPKIServicesGuideandReferenceVersion2Release2SA23-2286-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ikyza180.pdf",
      "Title": "z/OS V1R11.0 Cryptographic Services PKI Services Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7693-11",
      "FirstPage": "z/OSCryptographicServicesPKIServicesGuideandReferenceSA22-7693-11\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/imwziu19.pdf",
      "Title": "HTTP Server Planning, Installing, and Using",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4826-10",
      "FirstPage": "z/OSHTTPServerPlanning,Installing,andUsingVersion5.3SC34-4826-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ingppe20.pdf",
      "Title": "System Automation for z/OS: OPC Automation Programmer\u2122s Reference and Operator\u2122s Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC33-7046-05",
      "FirstPage": "System Automation for z/OSOPC Automation Programmer\u2019s Reference and Operator\u2019s Guide Version 2 Release 3 SC33-7046-05  \u0001"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioa2dp20.pdf",
      "Title": "System z10 OSA-Express3 ICC Dual-Port Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2266-02",
      "FirstPage": "Systemz10OpenSystemsAdapter-Express3IntegratedConsoleControllerDual-PortUser\u0027sGuideSA23-2266-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioa2m120.pdf",
      "Title": "System z9 and zSeries z890 and z990 OSA-ICC User|mJs Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7990-01",
      "FirstPage": "System z9 and Eserver zSeries z890 and z990Open Systems Adapter-Express Integrated Console Controller User\u2019s Guide SA22-"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioa2sf20.pdf",
      "Title": "z Systems OSA/SF on the Hardware Management Console",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC14-7580-02",
      "FirstPage": "z SystemsOpen Systems Adapter/Support Facility onthe Hardware Management ConsoleSC14-7580-02IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioa2sp00.pdf",
      "Title": "OSA-Express ICC 3215 Support",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2247-00",
      "FirstPage": "System zOpen Systems Adapter-Express Integrated Console Controller 3215 Support SA23-2247-00  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioa2z1e0.pdf",
      "Title": "OSA-Express Customer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7935-17",
      "FirstPage": "zSystemsOpenSystemsAdapter-ExpressCustomer\u0027sGuideandReferenceSA22-7935-17\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ioaexp03.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SA22-7403-03",
      "FirstPage": "S/390OpenSystemsAdapter-ExpressCustomer\u2019sGuideandReferenceSA22-7403-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ipeoue20.pdf",
      "Title": "",
      "Author": "",
      "Subject": "",
      "DocumentNumber": "SC33-6697-02",
      "FirstPage": "OS/390UNIXSystemServicesParallelEnvironment:OperationandUseSC33-6697-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs10.pdf",
      "Title": "z/OS V1R2.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-01",
      "FirstPage": "z/OSSDSFOperationandCustomizationSA22-7670-01\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs20.pdf",
      "Title": "z/OS V1R3.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-02",
      "FirstPage": "z/OSSDSFOperationandCustomizationSA22-7670-02\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs31.pdf",
      "Title": "z/OS V1R4.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-04",
      "FirstPage": "z/OSSDSF Operation and Customization   SA22-7670-04  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs42.pdf",
      "Title": "z/OS V1R5.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-07",
      "FirstPage": "z/OSSDSF Operation and Customization   SA22-7670-07  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs50.pdf",
      "Title": "z/OS V1R7.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-08",
      "FirstPage": "z/OSSDSF Operation and Customization   SA22-7670-08  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs60.pdf",
      "Title": "z/OS V1R8.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-09",
      "FirstPage": "z/OSSDSF Operation and Customization   SA22-7670-09  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs70.pdf",
      "Title": "z/OS V1R9.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-10",
      "FirstPage": "z/OSSDSF Operation and Customization    SA22-7670-10  \u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs80.pdf",
      "Title": "z/OS V1R10.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-11",
      "FirstPage": "z/OSSDSF Operation and Customization    SA22-7670-11  \u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs90.pdf",
      "Title": "z/OS V1R11.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-12",
      "FirstPage": "z/OSSDSFOperationandCustomizationSA22-7670-12\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4cs91.pdf",
      "Title": "z/OS V1R11.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-13",
      "FirstPage": "z/OSSDSFOperationandCustomizationSA22-7670-13\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4csa0.pdf",
      "Title": "z/OS V1R12.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-14",
      "FirstPage": "z/OSSDSFOperationandCustomizationSA22-7670-14\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf4csb0.pdf",
      "Title": "z/OS V1R13.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA22-7670-15",
      "FirstPage": "z/OSSDSFOperationandCustomizationSA22-7670-15\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf5cs00.pdf",
      "Title": "z/OS V2R1.0 SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2274-00",
      "FirstPage": "z/OSSDSFOperationandCustomizationVersion2Release1SA23-2274-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isf5cs14.pdf",
      "Title": "z/OS SDSF Operation and Customization",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA23-2274-09",
      "FirstPage": "z/OSSDSFOperationandCustomizationVersion2Release2SA23-2274-09IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2dg00.pdf",
      "Title": "z/OS V2R1.0 ISPF Dialog Developer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3619-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogDeveloper\u0027sGuideandReferencez/OSVersion2Release1.0SC19-3619-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2dg10.pdf",
      "Title": "z/OS V2R2 ISPF Dialog Developer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3619-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogDeveloper\u0027sGuideandReferencez/OSVersion2Release2SC19-3619-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2dt00.pdf",
      "Title": "z/OS V2R1.0 ISPF DTL Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3620-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogTagLanguageGuideandReferencez/OSVersion2Release1.0SC19-3620-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2dt10.pdf",
      "Title": "z/OS V2R2 ISPF DTL Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3620-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogTagLanguageGuideandReferencez/OSVersion2Release2SC19-3620-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2em00.pdf",
      "Title": "z/OS V2R1.0 ISPF Edit and Edit Macros",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3621-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)EditandEditMacrosz/OSVersion2Release1.0SC19-3621-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2em10.pdf",
      "Title": "z/OS V2R2 ISPF Edit and Edit Macros",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3621-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)EditandEditMacrosz/OSVersion2Release2SC19-3621-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2mc00.pdf",
      "Title": "z/OS V2R1.0 ISPF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3622-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)MessagesandCodesz/OSVersion2Release1.0SC19-3622-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2mc10.pdf",
      "Title": "z/OS V2R2 ISPF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3622-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)MessagesandCodesz/OSVersion2Release2SC19-3622-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2pc00.pdf",
      "Title": "z/OS V2R1.0 ISPF Planning and Customizing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC19-3623-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)PlanningandCustomizingz/OSVersion2ReleaseGC19-3623-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2pc10.pdf",
      "Title": "z/OS V2R2 ISPF Planning and Customizing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC19-3623-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)PlanningandCustomizingz/OSVersion2Release2GC19-3623-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2rs00.pdf",
      "Title": "z/OS V2R1.0 ISPF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3624-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ReferenceSummaryz/OSVersion2Release1.0SC19-3624-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2rs10.pdf",
      "Title": "z/OS V2R2 ISPF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3624-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ReferenceSummaryz/OSVersion2Release2SC19-3624-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2sc00.pdf",
      "Title": "z/OS V2R1.0 ISPF SCLM Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3625-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)SoftwareConfigurationandLibraryManager(SCLM)GuideandReferencez/OSVersion2Rele"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2sc10.pdf",
      "Title": "z/OS V2R2 ISPF SCLM Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3625-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)SoftwareConfigurationandLibraryManager(SCLM)GuideandReferencez/OSVersion2Rele"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2sg00.pdf",
      "Title": "z/OS V2R1.0 ISPF Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3626-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ServicesGuidez/OSVersion2Release1.0SC19-3626-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2sg10.pdf",
      "Title": "z/OS V2R2 ISPF Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3626-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ServicesGuidez/OSVersion2Release2SC19-3626-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2u200.pdf",
      "Title": "z/OS V2R1.0 ISPF User\u0027s Guide Vol II",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3628-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u0027sGuideVolumeIIz/OSVersion2Release1.0SC19-3628-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2u210.pdf",
      "Title": "z/OS V2R2 ISPF User\u0027s Guide Vol II",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3628-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u0027sGuideVolumeIIz/OSVersion2Release2SC19-3628-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2ug00.pdf",
      "Title": "z/OS V2R1.0 ISPF User\u0027s Guide Vol I",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3627-00",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u0027sGuideVolumeIz/OSVersion2Release1.0SC19-3627-00\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/isp2ug10.pdf",
      "Title": "z/OS V2R2 ISPF User\u0027s Guide Vol I",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC19-3627-01",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u0027sGuideVolumeIz/OSVersion2Release2SC19-3627-01\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzdg80.pdf",
      "Title": "z/OS V1R11.0 ISPF Dialog Developer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4821-08",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogDeveloper\u2019sGuideandReferencez/OSVersion1Release11.0SC34-4821-08\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzdg90.pdf",
      "Title": "z/OS V1R13.0 ISPF Dialog Developer\u0027s Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4821-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogDeveloper\u0027sGuideandReferencez/OSVersion1Release13.0SC34-4821-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzdt90.pdf",
      "Title": "z/OS V1R13.0 ISPF DTL Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4824-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)DialogTagLanguageGuideandReferencez/OSVersion1Release13.0SC34-4824-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzem80.pdf",
      "Title": "z/OS V1R11.0 ISPF Edit and Edit Macros",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4820-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)EditandEditMacrosz/OSVersion1Release11.0SC34-4820-09\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzem90.pdf",
      "Title": "z/OS V1R13.0 ISPF Edit and Edit Macros",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4820-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)EditandEditMacrosz/OSVersion1Release13.0SC34-4820-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzmc90.pdf",
      "Title": "z/OS V1R13.0 ISPF Messages and Codes",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4815-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)MessagesandCodesz/OSVersion1Release13.0SC34-4815-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzpc90.pdf",
      "Title": "z/OS V1R13.0 ISPF Planning and Customizing",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "GC34-4814-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)PlanningandCustomizingz/OSVersion1Release13.0GC34-4814-09\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzrs90.pdf",
      "Title": "z/OS V1R13.0 ISPF Reference Summary",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4816-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ReferenceSummaryz/OSVersion1Release13.0SC34-4816-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzsc90.pdf",
      "Title": "z/OS V1R13.0 ISPF SCLM Guide and Reference",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4817-11",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)SoftwareConfigurationandLibraryManager(SCLM)GuideandReferencez/OSVersion1Rele"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzsg80.pdf",
      "Title": "z/OS V1R11.0 ISPF Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4819-09",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ServicesGuidez/OSVersion1Release11.0SC34-4819-09\u0002\u0003\u0004"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzsg90.pdf",
      "Title": "z/OS V1R13.0 ISPF Services Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4819-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)ServicesGuidez/OSVersion1Release13.0SC34-4819-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzu290.pdf",
      "Title": "z/OS V1R13.0 ISPF User\u0027s Guide Vol II",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4823-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u0027sGuideVolumeIIz/OSVersion1Release13.0SC34-4823-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/ispzug90.pdf",
      "Title": "z/OS V1R13.0 ISPF User\u0027s Guide Vol I",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC34-4822-10",
      "FirstPage": "InteractiveSystemProductivityFacility(ISPF)User\u0027sGuideVolumeIz/OSVersion1Release13.0SC34-4822-10\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/izu23140.pdf",
      "Title": "IBM z/OSMF V2R1 Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0657-04",
      "FirstPage": "z/OSIBMz/OSManagementFacilityConfigurationGuideVersion2Release1SA38-0657-04\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/izu27215.pdf",
      "Title": "IBM z/OSMF Programming Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SC27-8420-06",
      "FirstPage": "z/OSIBM z/OS Management FacilityProgramming GuideVersion2 Release2SC27-8420-06IBM"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/izuz3110.pdf",
      "Title": "z/OSMF: Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0652-03",
      "FirstPage": "z/OSIBMz/OSManagementFacilityConfigurationGuideVersion1Release12SA38-0652-03\u0001\u0002\u0003"
    },
    {
      "Url": "https://publibz.boulder.ibm.com/epubs/pdf/izuz3120.pdf",
      "Title": "z/OSMF Configuration Guide",
      "Author": "IBM",
      "Subject": "",
      "DocumentNumber": "SA38-0652-05",
      "FirstPage": "z/OSIBMz/OSManagementFacilityConfigurationGuideVersion1Release13SA38-0652-05\u0001\u0002\u0003"
    }
  ];

console.log(`
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>IBM documentation</title>
    <style>
      body {
        color: lightGreen;
        background-color: #000011;
      }
      table td, table tr {
        vertical-align: top;
      }
      a {
        color: green;
      }
      h1 {
        color: green;
      }
    </style>
  </head>
  <body>
    <h1>IBM documentation</h1>
    <table>
`);

for (let index = 0; index < documents.length; index++) {
  const doc = documents[index];
  console.log(`
      <tr>
      <td><details>
      <summary>${generateTitle(doc.Title, doc.FirstPage)} <a href="${doc.Url}">[PDF]</a></summary>
      <ul>
      <li>Title: ${doc.Title}<br>
      <li>Author: ${doc.Author}<br>
      <li>Subject: ${doc.Subject}<br>
      <li>Document number: ${doc.DocumentNumber}<br>
      <li>FirstPage: ${doc.FirstPage}<br>
      <li>Url: <a href="${doc.Url}">${doc.Url}</a><br>
      </ul>
      </details></td>
      </tr>`);

};

console.log(`
    </table>
  </body>
</html>
`);


function generateTitle(title, firstPage) {
  let ti = title.trim();
  if (ti === "") {
    ti = firstPage;
  };
  if (/^[A-Z0-9]+$/.test(ti)) {
    ti = firstPage + " [" + ti + "]";
  };
  ti = ti.replaceAll("\u0001", " ");
  ti = ti.replaceAll("\u0002", " ");
  ti = ti.replaceAll("\u0003", " ");
  ti = ti.replaceAll("\u0004", " ");

  let tiNew = "";
  for (let index = 0; index < ti.length; index++) {
    let char = ti.charAt(index);
    if (char.charCodeAt(0) > 0xff) {
      char = " ";
    };
    tiNew += char;
  };
  ti = tiNew.trim();
  if (ti === "") {
    ti = firstPage;
  };
  return ti;
};




