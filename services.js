var express = require("express");
var demoService = express.Router();
var cors = require("cors");

/*
	Apply basic CORS to a specific service,
	where all the origin can access.
*/
demoService.get("/hi",cors(),function(req,resp,next){
	var obj = {
		"message" : "hi This is Express"
	}
	resp.json(obj);
});

demoService.get("/hi/:msg",function(req,resp,next){
	var obj = {
		"message" : req.params.msg
	}
	resp.json(obj);
});

module.exports = demoService;