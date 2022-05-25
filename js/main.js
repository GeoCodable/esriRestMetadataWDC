/*
function checks if a given val of an Object() is equal 
to Object(value). If the value is equal then the value 
is primitive else not primitive (string, boolean, number, null).
*/
function isPrimitive(val) {
	if(val === Object(val)) {
		return false;
	} else {
		return true;
	};
};

async function rest_request(prepedUrl) {
	/*
	function to fetch/get data from a prepared api query 
	and return a json object while error handling
	returns: json reponse object
	*/
	try {
		response = await fetch(prepedUrl, {method: "GET", mode:'cors'});
		if(!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		} else {
			jsonResp = await response.json();
			return jsonResp
		};
	} catch(err) {
		console.log(err);
	};
};

async function get_dir_services(esriRestUrl, folder) {
	/* 	
	function parses dataset metadata from an ESRI REST API  
	returns: and array of json objects representing 
	individual datasets and corresponding metadata 
	*/
	//temp array to hold table data	
	var tempTblArray = [];
	// set the dir path
	var dir = '';
	if(folder == 'services') {
		dir = 'services';
	} else {
		dir = `services/${folder}`;
	};
	
	// get server defs
	let dirMetaUrl = `${esriRestUrl}/${dir}?f=json`;
	let jsonResp = await rest_request(dirMetaUrl);
	var svr_def = await jsonResp['services'];
	// check for services, if none, 
	// exit early 
	if(svr_def.length == 0) {
		return [];
	};
	
	// iterate service paths
	for(let i = 0; i < (svr_def).length; i++) {
		if(service_types.includes(svr_def[i]['type'])) {
			// get the service name
			let services_name = `${(svr_def[i]['name'])} (${(svr_def[i]['type'])})`;
			// get the service type ex. (FeatureServer or MapServer)
			let service_type = svr_def[i]['type'];
			// set the service url
			let srv_url = `${esriRestUrl}/${folder}/${(svr_def[i]['name'])}/${(svr_def[i]['type'])}`;
			// set the service definition url
			let serviceUrl = `${srv_url}?f=json`;
			// get the service definition as a json object
			let svc_def = await rest_request(serviceUrl);
			// set the types of data sources to iterate
			var dsTypes = ['layers', 'tables'];
			// itreate the services by type and append the 
			// resulting metadata to the tempTblArray or output
			for(let i = 0; i < dsTypes.length; i++) {
				let dsType = dsTypes[i];
				if(svc_def[dsType]) {
					for(let i = 0; i < (svc_def[dsType]).length; i++) {
						let dsName = svc_def[dsType][i]['name'];
						let dsId = svc_def[dsType][i]['id'];
						let ds_url = `${srv_url}/${dsId}`;
						tempTblArray.push({
							'api_rest_name': esriRestName,
							'api_rest_url': esriRestUrl,
							'api_directory': folder,
							'api_service': services_name,
							'api_service_type': service_type,
							'dataset_type': dsType.substring(0, dsType.length - 1),
							'dataset_name': dsName,
							'dataset_id': dsId,
							'dataset_url': ds_url
						});
					};
				};
			};
		};
	};
	return tempTblArray;
};

async function list_rest_data_sources() {
	/*	
	function lists out data sources from an ESRI REST 
	API and calls get_dir_services to return dataset 
	level metadata as a single array of json objects.
	returns: An array of json objects representing 
	individul dataset locations inlcuding full URL's
	and corrisponding metadata for each.
	*/
	// temp array to hold table data
	var dataSrcsArray = [];
	// get rest properties
	let restMetaUrl = `${esriRestUrl}/services?f=json`;
	let svcs_root = await rest_request(restMetaUrl);
	// get data sources in the 'services' root directory
	if(('services' in svcs_root) && ((svcs_root['services']).length > 0)) {
		// get the dataset level metadata and add it to the table/array
		var newTblData = await get_dir_services(esriRestUrl, 'services');
		dataSrcsArray.push.apply(dataSrcsArray, newTblData);

	};
	// iterate the sub folders to get data sources in each
	if(('folders' in svcs_root) && ((svcs_root['folders']).length > 0)) {
		for(let i = 0; i < (svcs_root['folders']).length; i++) {
			// set folder name
			var fldr = svcs_root['folders'][i];
			// get the dataset level metadata and add it to the table/array
			var newTblData = await get_dir_services(esriRestUrl, fldr);
			dataSrcsArray.push.apply(dataSrcsArray, newTblData);
		};
	};
	return dataSrcsArray;
};

async function set_conn_props(parseDataCallback, columnList) {
	// Define the tableau connector schema
	myConnector.getSchema = function(schemaCallback) {
		var cols = [];
		/*iterate the list of defined columns to add each 
		to the tabelau connection schema*/
		for(let c = 0; c < (columnList).length; c++) {
			let col = columnList[c];
			/*
			column prefixes are used to id what level/scope the metadata
			belongs to:  
			 		'api_' pertains to REST endpoint scope, 
					'dataset_' pertains to individual dataset, 
					'column_' is a column property within a dataset,
					'domain_' is an ESRI domain related to a column
			*/
			let prefixes = ['api_', 'dataset_', 'column', 'domain_'];
			// set the description text value for each column
			for(let p = 0; p < (prefixes).length; p++) {
				let pf = prefixes[p];
				let pfScope = pf.substring(0, pf.length - 1);
				var desc = ''
				if(col.startsWith(pf)) {
					let orig_name = col.replace(pf, '');
					desc = `ESRI REST ${pfScope} property: ${orig_name}. See ESRI documentation for more info: https://developers.arcgis.com/rest/services-reference/enterprise`;
				} else {
					desc = `ESRI REST server info: ${col}`;
				};
			};
			
			// add the column definition to the col array/schema
			cols.push({
						id: col,
						alias: col,
						description: desc,
						dataType: tableau.dataTypeEnum.string
					  });
		};
		
		// declare the table schema object
		var tableSchema = {
			id: connName.replace(/[^a-zA-Z]/g, ""),
			alias: connName,
			description: connDesc,
			columns: cols
		};
		
		schemaCallback([tableSchema]);
	};
	
	// fetch all metadata from the ESRI REST server
	myConnector.getData = async function(table, doneCallback) {
		// return data array
		var tableData = await parseDataCallback();
		table.appendRows(tableData);
		doneCallback();
	};
	tableau.registerConnector(myConnector);
};