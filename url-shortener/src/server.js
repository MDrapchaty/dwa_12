//connections 

var express = require('express');
var body_parser = require('body-parser');
var app = express();


const debug = require('debug')('my-namespace');  
const name = 'my-app'  ;
debug('booting %s', name);


var winston = require('winston');
winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            
            level: 'debug',
            filename: 'all-logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false

        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};




//logger.log("info", "File: was found");
logger.debug("This is a log");



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