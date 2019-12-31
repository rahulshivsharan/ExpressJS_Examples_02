var express = require("express");
var service = express.Router();
var cors = require("cors");
var dao = require("./dao");

/*
	Apply basic CORS to a specific service,
	where all the origin can access.
*/
service.get("/hi",cors(),function(req,resp,next){
	var obj = {
		"message" : "Hi, this is attendance service"
	}
	resp.json(obj);
});

service.get("/:empId",function(req,resp,next){
	var obj = {}
	var empId = req.params.empId;
	empId = parseInt(empId);
	var date = req.body.date;
	try{
		dao.ConnectionPool.getInstance().then(function(){		
			dao.getAttendanceByDate(empId,date).then(function(rows){				
				obj["data"] = rows;
				resp.json(obj);
			}).catch(function(err){				
				console.log(err);
				obj["error"] = err;
				resp.json(obj);
			});
		}).catch(function(error){			
			obj["error"] = error.toString();		
			resp.json(obj);
		});
	}catch(err){
		resp.json({
			"error" : err.toString()
		});
	}	
	
	
});

module.exports = service;