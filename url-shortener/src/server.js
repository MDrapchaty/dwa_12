//connections 

var express = require('express');
var body_parser = require('body-parser');
var app = express();
var logger = require('../lib/logger');
/*
const debug = require('debug')('my-namespace');  
const name = 'my-app'  ;
debug('booting %s', name);
*/



var port = 3000;

//test

//use external api.js for routes, all routes have pre of /api
app.use('/api', require('../routes/api.js')(express));

//listen runs server
app.listen(port, function(){
	console.log('server active on ', port);
	console.log(process.env.DEBUG);
});

module.exports = app;