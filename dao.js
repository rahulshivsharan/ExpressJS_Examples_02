var Promise = require("promise");
var oracledb = require("oracledb");
var dbConfig = require("./db-config");


var dbPool = dbPool;

module.exports = {
	'ConnectionPool' : (getDBPool)(),
	'getAttendanceByDate' : getAttendanceByDate		
}; 


/*
	Method 'getDBPool' is an Singleton Pattern implementation,
	where an singleton 'INSTANCE' object of connection-pool is created.
*/
function getDBPool(){	
	var INSTANCE = undefined;
	
	if(INSTANCE === undefined){		
		INSTANCE = oracledb.createPool(dbConfig);
	}

	return{
		getInstance : function(){			
			return INSTANCE;
		}
	}

};

function getAttendanceByDate(empId,dateString){
	var fn = fn;
	return new Promise(fn);
	
	function fn(resolve,reject){
		var con = undefined;

		// callback functions defined below
		var queryFn = queryCallback;
		var successCallback = successCallback;
		var errorCallback = errorCallback;
		var connectionCallback = connectionCallback;
		var closeConnectionCallback = closeConnectionCallback;
		var exceptionCallback = exceptionCallback;

		oracledb.getConnection()
				.then(queryCallback)
				.then(successCallback,errorCallback)
				.then(connectionCallback)
				.then(closeConnectionCallback)
				.catch(exceptionCallback);	

		function queryCallback(c){
			console.log("\n\nExecuting.......................");
			con = c;
			var sql = 	"select "+ 
							"b.name as Name, "+ 
							"to_char(a.log_time,'DD-MM-YYYY HH24:MI') as log_time "+
						"from " +
						  "Rahul.TBL_ATTENDANCE a, "+
						  "Rahul.TBL_EMPLOYEE b " +
						"where " +
						  "a.emp_id = b.id " +
						  "and a.EMP_ID = :id "+
						  "and to_char(a.log_time, 'DD-MM-YYYY') = :dt";
		
			return con.execute(sql,
								[empId,dateString],
								{
           						 	"outFormat" : oracledb.OBJECT
          						});
		}; // end of queryCallbacl

		function successCallback(result){
			console.log("Query Executed");
			resolve(result.rows);
		}

		function errorCallback(err){
			console.log("Error Occurred in 'getAttendanceByDate' ",err);
			reject(err);
		}

		function connectionCallback(){			
			if(con !== undefined){		
				console.log("Connection getting closed !!!");		
				return con.close();
			}
		}

		function closeConnectionCallback(){
			console.log("Connection Closed");
		}

		function exceptionCallback(err){
			console.log("Error Occurred in 'getAttendanceByDate' ",err);
		} 
	} // end of fn
}