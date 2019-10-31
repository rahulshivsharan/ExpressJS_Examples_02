var express = require("express");
var path = require("path");
var routes = require("./routes")
var demoService = require("./services")
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
  The perpose behind this line is to include 
  libraries in your html, hence I have kept 'node_modules' as all the libraries
  are installed in this folder. We can also use our own folder, but that I need to 
  copy all the required libraries from node_modules to the new folder.
*/
app.use(express.static('node_modules'));

app.use('/', routes); // all the routes for static htmls are defined
app.use('/demo', demoService); // all the rest services are defined


app.use(function(req,resp,next){
  var err = new Error("Not Found");
	err.status = 404;
	next(err);
});


// error handler
// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error');
});


/*
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: {}
  });
});
*/
module.exports = app;
