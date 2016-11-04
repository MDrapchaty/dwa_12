//using winston to log into a file
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

// by changing this value to false you can turn off the debug results
 if(process.env.DEBUG=true){
    logger.debug("Debug is on");
 }else{
    console.log("debug is off");
 }

//logger.log("info", "File: was found");


