//Globals
/* -------------------------------------------------------------------*/
// use the query params to pass the api name and url
var urlSearchParams = new URLSearchParams(window.location.search);
var queryParams = Object.fromEntries(urlSearchParams.entries());
// get the parmas for the function profile_rest()
var esriRestUrl 	= queryParams['esriRestUrl'];
var esriRestName 	= queryParams['esriRestName'];

//set the connection name
var connName 		= `ESRI Rest Data Schemas: ${esriRestName}`;
// set the connection description text
var connDesc  		= 'ESRI Rest Web Data Connector (WDC) to gather REST data schemas and data source metadata';
// select the servie types of interest
var service_types 	= ['MapServer', 'FeatureServer'];


//array of columns to include in output data
var columnList = [ 
					//'api_rest_name','api_rest_url','api_directory', 				//general api/service level properties
					//'api_service', 'api_service_type',
					
					'dataset_url', 'dataset_name',  								//general dataset level properties
					
					'column_alias','column_defaultValue','column_editable',			//general column level properties
					'column_length','column_name','column_nullable', 
					'column_type',
					
					'domain_type', 'domain_name', 'domain_description',				//column level domain properties
					'domain_codedValues', 'domain_range'		
				]

// null default
const null_default = 'N/A || Undefined';

//Create the connector object
var myConnector = tableau.makeConnector();
/* -------------------------------------------------------------------*/


async function getDataSrcSchemas() {

	// list the data sources 	
	var dataSrcsArray = await list_rest_data_sources();
	
	// output array
	let outputArray = [];
	
	// get dataset schemas
	for (let t = 0; t < (dataSrcsArray).length; t++) {
		let ds = dataSrcsArray[t];
				
		// get server definition
		let tableMetaUrl = `${ds['dataset_url']}?f=json`;
		let jsonResp = await rest_request(tableMetaUrl);
		
		// iterate the fields to create a new row (json object) of properties 
		var fields = await jsonResp['fields'];
		if (Array.isArray(fields)){
			for (let f = 0; f < (fields).length; f++) {
				let newRow = {};
				let field = fields[f];
				
				// insert the dataset properties
				Object.keys(ds)
					.forEach(key => newRow[key] = ds[key]);
				
				// insert all field properties
				Object.keys(field)
					.forEach(key => newRow[`column_${key}`] = field[key]);	
					
				// break out the field domain properties
				if(field.hasOwnProperty('domain')){
					if (field['domain'] != null && typeof(field['domain']) == 'object'){
						
						for (let [key, value] of Object.entries(field['domain'])) {
							if (value != null && typeof(value) == 'object'){
								newRow[`domain_${key}`] = JSON.stringify(value);
							
							}else{
								newRow[`domain_${key}`] = value;
							};
						};
					};
				};	
				
				// ensure values are converted to strings 
				for (let [key, value] of Object.entries(newRow)) {
					if (isPrimitive(value)){
						if (value == null){
							newRow[key] = null_default;
						}else if (typeof(value) == "boolean"){
							var bool_value = value == 'true';
							if(bool_value){
								newRow[key] = 'true';
							}else{
								newRow[key] = 'false';
							};					
						}
					}else if (Array.isArray(value)){
						// do nothing
						//newRow[key] = value.toString();
					}else if (typeof(value) == "object"){
						try {
							newRow[key] = JSON.stringify(value);
						}
						catch(err) {
							//do nothing
						};
					};					
				};
				
				// attribute remaining nulls
				for (let c = 0; c < (columnList).length; c++) {
					let col = columnList[c];
					if (col == 'column_name'){
						newRow[col] = (newRow[col]).toUpperCase();
					}
					if ((!(newRow[col])) && (!(newRow[col] == 0))) {
						newRow[col] = null_default;
					};
				};
				outputArray.push(newRow);	
			};
		};
	};	

	return (outputArray);
};

set_conn_props(getDataSrcSchemas, columnList); 

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
