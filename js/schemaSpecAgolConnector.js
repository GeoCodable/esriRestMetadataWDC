//Globals
/* -------------------------------------------------------------------*/
// use the query params to pass the api name and url
var urlSearchParams = new URLSearchParams(window.location.search);
var queryParams = Object.fromEntries(urlSearchParams.entries());
// get the parmas for the function profile_rest()
var schemaSpecUrl 	= queryParams['schemaSpecUrl'];
var specQuery 		= queryParams['esriRestName'];
var connName		= queryParams['connName'];

if (!(specQuery)){
	specQuery = 'query?where=1=1&outFields=*&f=json';
}

if (!(connName)){
	connName = 'schemaSpec';
}

(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [
			{	id: 'OBJECTID', 
				dataType: tableau.dataTypeEnum.string 
			}, {		
				id: 'column_alias', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'column_defaultValue', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'column_editable', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'column_length', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'column_name', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'column_nullable', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'column_type', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'domain_codedValues', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'domain_description', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'domain_name', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'domain_range', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'domain_type', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'column_description', 
				dataType: tableau.dataTypeEnum.string 
			}, {
				id: 'column_mandatory', 
				dataType: tableau.dataTypeEnum.string
			}, {
				id: 'parent_schema_id', 
				dataType: tableau.dataTypeEnum.string 
			}

		];

        var tableSchema = {
            id: connName,
            alias: "Schema Specification/data structure definition",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

	
    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON(`${schemaSpecUrl}/${specQuery}` , function(resp) {
            var feat = resp.features,
                tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
					'OBJECTID': feat[i].attributes.OBJECTID ,
					'column_alias': feat[i].attributes.column_alias ,
					'column_defaultValue': feat[i].attributes.column_defaultValue ,
					'column_editable': feat[i].attributes.column_editable ,
					'column_length': feat[i].attributes.column_length ,
					'column_name': feat[i].attributes.column_name ,
					'column_nullable': feat[i].attributes.column_nullable ,
					'column_type': feat[i].attributes.column_type ,
					'domain_codedValues': feat[i].attributes.domain_codedValues ,
					'domain_description': feat[i].attributes.domain_description ,
					'domain_name': feat[i].attributes.domain_name ,
					'domain_range': feat[i].attributes.domain_range ,
					'domain_type': feat[i].attributes.domain_type ,
					'column_description': feat[i].attributes.column_description ,
					'column_mandatory': feat[i].attributes.column_mandatory ,
					'parent_schema_id': feat[i].attributes.parent_schema_id ,

                    
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = connName; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
