//Globals
/* -------------------------------------------------------------------*/
// use the query params to pass the api name and url
var urlSearchParams = new URLSearchParams(window.location.search);
var queryParams = Object.fromEntries(urlSearchParams.entries());
// get the params for the function profile_rest()
var esriRestUrl 	= queryParams['esriRestUrl'];
var esriRestName 	= queryParams['esriRestName'];
var getCounts 		= queryParams['getCounts']; //'exact', 'approx', null

//set the connection name
var connName 		= `ESRI Rest Data Sources: ${esriRestName}`;
// set the connection description text
var connDesc  		= 'ESRI Rest Web Data Connector (WDC) to gather REST data sources and metadata';
// selec tthe servie types of interest
var service_types 	= ['MapServer', 'FeatureServer'];

//array of columns to include in output data
var columnList = [
					'api_rest_name','api_rest_url','api_directory', 'api_service', 		//general api/service level properties
					'api_service_type',
					
					'dataset_name', 'dataset_id', 'dataset_url', 'dataset_type',   		//general dataset level properties
					'dataset_description', 'dataset_capabilities',
					
					'dataset_geometryType', 'dataset_geometryField', 					//dataset level spatial properties
					'dataset_extent', 'dataset_sourceSpatialReference', 
					'dataset_supportsDatumTransformation', 

					'dataset_currentVersion', 'dataset_supportedQueryFormats', 			//dataset level request properties
					'dataset_maxRecordCount', 'dataset_supportsPagination', 
					'dataset_supportsAdvancedQueries', 'dataset_useStandardizedQueries', 
					'dataset_supportsHavingClause','dataset_supportsCountDistinct', 
					'dataset_supportsOrderBy', 'dataset_supportsDistinct', 
					'dataset_supportsTrueCurve','dataset_supportsReturningQueryExtent',
					'dataset_supportsQueryWithDistance','dataset_supportsSqlExpression',

					 
					'dataset_dateFieldsTimeReference',  								//other dataset level properties
					'dataset_copyrightText', 
					'dataset_isDataVersioned',
					'dataset_hasAttachments',
					'dataset_supportsStatistics',
					'dataset_supportsCoordinatesQuantization'
				  ];

// if getCounts is true, append a column to the output schema
if (getCounts){
	columnList.push('dataset_totalRecords');
	console.log('getCount = "true"');
}; 

// default value for N/A or values undefined in each response
const null_default = 'N/A || Undefined';

//Create the connector object
var myConnector = tableau.makeConnector();
/* -------------------------------------------------------------------*/


async function getDataSrcMetadata() {

	// list the data sources 	
	var dataSrcsArray = await list_rest_data_sources();
	
	// output array
	let outputArray = [];
	
	// get dataset metadata
	for (let t = 0; t < (dataSrcsArray).length; t++) {
		let ds = dataSrcsArray[t];
		var newRow = {};
		
		if (getCounts){
			// attempt to get a feature/record count
			try {
					/*a where of 1=1 is an exact count
					A where of 9999=9999 is faster but approximates counts, v:10.81+ only*/
					var wc = '1=1';
					if (getCounts == 'approx'){
						wc = '9999=9999';
					};
					
					let tableRecCntQryUrl = `${ds['dataset_url']}/query?where=${wc}&returnCountOnly=true&f=json`;  
					let jsonRespCnt = await rest_request(tableRecCntQryUrl);
					if(jsonRespCnt['count'] || jsonRespCnt['count'] == 0){
						newRow[`dataset_totalRecords`] = jsonRespCnt['count'];
					}else{
						newRow[`dataset_count`] = 'N/A || method failed or unsupported';
					}
			}catch(err){
				newRow[`dataset_count`] = 'N/A || method failed or unsupported';
				// if failed, don't request again
				//getCounts = false;
			}
		}
		
		// get dataset/service definition
		let tableMetaUrl = `${ds['dataset_url']}?f=json`;
		let jsonResp = await rest_request(tableMetaUrl);
			
		
		// insert the server/dataset ID properties
		Object.keys(ds)
			.forEach(key => newRow[key] = ds[key]);
		

		// insert all dataset metadata properties
		// iterate the json keys to create a new row of properties for each	
		Object.keys(jsonResp).forEach(function(key) {
			value = jsonResp[key] ;
			
			var col_name = key.replace(/[^a-zA-Z]/g, "_");		
			if (isPrimitive(value)){
				if (value == null){
					newRow[`dataset_${col_name}`] = null_default;
				}else if (typeof(value) == "boolean"){
					var bool_value = value == 'true';
					if(bool_value){
						newRow[`dataset_${col_name}`] = 'true';
					}else{
						newRow[`dataset_${col_name}`] = 'false';
					}					
				}else{
					newRow[`dataset_${col_name}`] = value;
				}
			}else if (Array.isArray(value)){
				// do nothing
				//newRow[`dataset_${col_name}`] = value.toString();
			}else if (typeof(value) == "object"){
				try {
					newRow[`dataset_${col_name}`] = JSON.stringify(value);
				}
				catch(err) {
					//do nothing
				}
			}
		})
		
		// attribute remaining nulls
		for (let c = 0; c < (columnList).length; c++) {
			let col = columnList[c];
			
			if ((!(newRow[col])) && (!(newRow[col] == 0))) {
				newRow[col] = null_default;
			}
		}
	
		outputArray.push(newRow);	
	}
	return (outputArray);
}

set_conn_props(getDataSrcMetadata, columnList); 

$(document).ready(function() {

	// Create event listeners for when the user submits the form
	$("#submitButton").click(
		function() {
			
			// name the data source name in Tableau	
			tableau.connectionName = connName; 	
			// send the connector object to Tableau
			tableau.submit(); 
		}
	);
});