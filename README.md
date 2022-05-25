# Web Data Connector for ESRI REST API Metadata  
Collection of Tableau Web Data Connectors (WDC) that enables tableau to read metadata and data structures/schemas from nearly any accessible ESRI REST server or portal. Data services include 'MapServer' and 'FeatureServer' only. Data sources are returned to Tableau with corresponding metadata and/or data structure/schemas to provide documentation of published service data structures and properties. Please note that these properties represent the published REST service properties and may not represent the underlying data structure with the source database.

- Connector in the collection:
  - [dataSourceMetadata WDC](#datasourcemetadata-wdc)
  - [dataSchemas WDC](#dataschemas-wdc)

## [dataSourceMetadata WDC:](https://ahamptonga.github.io/esriRestMetadataWebDataConnector/dataSourceMetadata)

### Description: 
Tableau Web Data Connector (WDC) that returns a list of data sources available on an ESRI REST
server or portal server.  Data sources are listed alongside dataset level metadata properties.  

### Relationships:
The resulting Tableau data source table can be joined **to** the [dataSchemas WDC](#dataschemas-wdc) data source table using the 'dataset_url' column as a foreign key (FK).  

### WDC Schema/Data Structure:
<details>
  <summary>Click to view dataSourceMetadata WDC Schema</summary>  

 <table>
 <tbody><tr >
  <td width="276" style="height:15.0pt;width:207pt;
  font-size:11.0pt;color:white;font-weight:700;text-decoration:none;text-underline-style:
  none;text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#4472C4;mso-pattern:#4472C4 none">ID</td>
  <td width="52" style="width:39pt;font-size:11.0pt;color:white;
  font-weight:700;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#4472C4;mso-pattern:#4472C4 none">TYPE</td>
  <td width="96" style="width:72pt;font-size:11.0pt;color:white;
  font-weight:700;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#4472C4;mso-pattern:#4472C4 none">Primary Key</td>
  <td width="95" style="width:71pt;font-size:11.0pt;color:white;
  font-weight:700;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:.5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:
  none;background:#4472C4;mso-pattern:#4472C4 none">Foreign Key</td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">api_rest_name</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">api_rest_url</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">api_directory</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">api_service</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">api_service_type</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_name</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_id</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_url</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none">(PK)</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_type</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_description</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_capabilities</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_geometryType</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_geometryField</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_extent</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_sourceSpatialReference</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_supportsDatumTransformation</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_currentVersion</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_supportedQueryFormats</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_maxRecordCount</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_supportsPagination</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_supportsAdvancedQueries</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_useStandardizedQueries</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_supportsHavingClause</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_supportsCountDistinct</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_supportsOrderBy</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_supportsDistinct</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_supportsTrueCurve</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_supportsReturningQueryExtent</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_supportsQueryWithDistance</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_supportsSqlExpression</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_dateFieldsTimeReference</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_copyrightText</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_isDataVersioned</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_hasAttachments</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_supportsStatistics</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_supportsCoordinatesQuantization</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr >
  <td style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_totalRecords</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
</tbody></table>

 </details>  
  
### Query Parameters: 
- **"esriRestUrl" *(Required)***  
  - The *"esriRestUrl"* query parameters allow users to publish a WDC specific to a given ESRI REST API by providing the URL as a parameter.  
    - Example: 'esriRestUrl=https://cartowfs.nationalmap.gov/arcgis/rest'  
 
- **"esriRestName" *(Required)***  
  - A WDC name is also provided via the *"esriRestName"* parameter.  Naming the WDC allows data source organization within Tableau/Tableau Server and tracking of multiple WDC's spanning different ERSI REST API's. 
    - Example: 'esriRestName=The National Map'  

- **"getCounts" *(Optional)***  
  - *"getCounts"* can be set to obtain record counts during the metadata collection *if* the method is available to the service.  The *"getCounts"* parameter is optional with the allowed values/methods of 'exact' or 'approx'.  The 'approx' method returns an estimated record count, but
is slightly more efficient than the 'exact method which returns an accurate total.  
    - Example: 'getCounts=exact'  
    - Example: 'getCounts=approx'  

  - Additional info on record counts:  
    - [the approx method *(where=9999=9999)* is ***only** available with REST services
with version 10.8.1 or higher.*](https://developers.arcgis.com/rest/services-reference/enterprise/query-feature-service-layer-.htm#:~:text=Non%2Dhosted%20feature%20services%20published,and%20isDataArchived%20as%20false.)  
    - [See the ESRI REST documentation for more on returning record counts](https://developers.arcgis.com/rest/services-reference/enterprise/query-feature-service-layer-.htm#:~:text=true%20%7C%20false-,returnCountOnly,-If%20true%2C%20the)  

#### Example URL with query parameters:
```
../esriRestMetadataWebDataConnector/dataSourceMetadata?esriRestUrl=https://cartowfs.nationalmap.gov/arcgis/rest&esriRestName=The National Map&getCounts=exact
```
### How to use Web Data Connectors: 
- For complete steps on adding data to Tableau via a Web Data Connector, reference the [Connect to the data source](https://help.tableau.com/current/pro/desktop/en-us/examples_web_data_connector.htm#:~:text=on%20Tableau%20Public.-,Connect%20to%20the%20data%20source,-Start%20Tableau%20and)
section in Tableau's official documentation. 



## [dataSchemas WDC:](https://ahamptonga.github.io/esriRestMetadataWebDataConnector/dataSchemas)

### Description: 
Tableau Web Data Connector (WDC) that returns the ESRI/ArcGIS field/column definitions and metadata by column name and data source URL.  The returned values represent the ESRI field/column definitions applied to the service level including the data types, aliases, permissions, constraints, and domain properties.  Please note that these properties represent the published service properties and may not represent the underlying data structure with the source database. 

### Relationships:
The [dataSourceMetadata WDC](#datasourcemetadata-wdc) can be joined **to** the resulting Tableau data source table using the 'dataset_url' column as a foreign key (FK). 

### WDC Schema/Data Structure:
<details>
  <summary>Click to view dataSchemas WDC Schema</summary>  

<table>
<tbody><tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" width="143" style="height:15.0pt;
  width:107pt;font-size:11.0pt;color:white;font-weight:700;text-decoration:
  none;text-underline-style:none;text-line-through:none;font-family:Calibri, sans-serif;
  border-top:.5pt solid #8EA9DB;border-right:none;border-bottom:.5pt solid #8EA9DB;
  border-left:.5pt solid #8EA9DB;background:#4472C4;mso-pattern:#4472C4 none">ID</td>
  <td  align="left" width="52" style="width:39pt;font-size:11.0pt;
  color:white;font-weight:700;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#4472C4;mso-pattern:#4472C4 none">TYPE</td>
  <td  align="left" width="96" style="width:72pt;font-size:11.0pt;
  color:white;font-weight:700;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#4472C4;mso-pattern:#4472C4 none">Primary Key</td>
  <td  align="left" width="221" style="width:166pt;font-size:11.0pt;
  color:white;font-weight:700;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:.5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:
  none;background:#4472C4;mso-pattern:#4472C4 none">Foreign Key</td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">dataset_url</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:.5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:
  none;background:#D9E1F2;mso-pattern:#D9E1F2 none">(FK) - dataSourceMetadata WDC)</td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">dataset_name</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">column_alias</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">column_defaultValue</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">column_editable</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">column_length</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">column_name</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">column_nullable</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">column_type</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">domain_type</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">domain_name</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">domain_description</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">domain_codedValues</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none;box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none;background:#D9E1F2;
  mso-pattern:#D9E1F2 none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none;
  background:#D9E1F2;mso-pattern:#D9E1F2 none"></td>
 </tr>
 <tr height="20" style="height:15.0pt;box-sizing: border-box">
  <td height="20"  align="left" style="height:15.0pt;font-size:11.0pt;
  color:black;font-weight:400;text-decoration:none;text-underline-style:none;
  text-line-through:none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:.5pt solid #8EA9DB;
  box-sizing: border-box">domain_range</td>
  <td  align="left" style="font-size:11.0pt;color:black;
  font-weight:400;text-decoration:none;text-underline-style:none;text-line-through:
  none;font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;
  border-right:none;border-bottom:.5pt solid #8EA9DB;border-left:none;
  box-sizing: border-box">string</td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  none;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
  <td  style="font-size:11.0pt;color:black;font-weight:400;
  text-decoration:none;text-underline-style:none;text-line-through:none;
  font-family:Calibri, sans-serif;border-top:.5pt solid #8EA9DB;border-right:
  .5pt solid #8EA9DB;border-bottom:.5pt solid #8EA9DB;border-left:none"></td>
 </tr>
</tbody></table>

 </details>  
 
### Query Parameters: 
- **"esriRestUrl" *(Required)***  
  - The *"esriRestUrl"* query parameters allow users to publish a WDC specific to a given ESRI REST API by providing the URL as a parameter.  
    - Example: 'esriRestUrl=https://cartowfs.nationalmap.gov/arcgis/rest'  
 
- **"esriRestName" *(Required)***  
  - A WDC name is also provided via the *"esriRestName"* parameter.  Naming the WDC allows data source organization within Tableau/Tableau Server and tracking of multiple WDC's spanning different ERSI REST API's. 
    - Example: 'esriRestName=The National Map'  

#### Example URL with query parameters:
```
../esriRestMetadataWebDataConnector/dataSchemas?esriRestUrl=https://cartowfs.nationalmap.gov/arcgis/rest&esriRestName=The National Map
```
### How to use Web Data Connectors: 
- For complete steps on adding data to Tableau via a Web Data Connector, reference the [Connect to the data source](https://help.tableau.com/current/pro/desktop/en-us/examples_web_data_connector.htm#:~:text=on%20Tableau%20Public.-,Connect%20to%20the%20data%20source,-Start%20Tableau%20and)
section in Tableau's official documentation.





