var express = require("express");
var router = express.Router();
var path = require('path');

router.get("/",function(req,resp,next){
	resp.sendFile(path.join(__dirname+'/view/index.html'));
});

router.get("/pageOne",function(req,resp,next){
	resp.sendFile(path.join(__dirname+'/view/pageOne.html'));
});

router.get("/pageTwo",function(req,resp,next){
	resp.sendFile(path.join(__dirname+'/view/pageTwo.html'));
});

module.exports = router;