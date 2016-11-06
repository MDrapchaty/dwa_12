<<<<<<< HEAD
const winston = require('winston');
=======
//using winston to log into a file
var winston = require('winston');
winston.emitErrs = true;
>>>>>>> master

winston.emitErrs = true;

const logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'debug',
      filename: 'all-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
  ],
  exitOnError: false,
});

module.exports = logger;
module.exports.stream = {
  write: (message) => {
    logger.info(message);
  },
};

<<<<<<< HEAD

/*  debug loggin can be turned on by uncommenting this conditional
if (process.env.DEBUG = true) {
  logger.debug('Debug is on');
} else {
console.log("debug is off");
=======
// by changing this value to false you can turn off the debug results
 if(process.env.DEBUG=true){
    logger.debug("Debug is on");
 }else{
    console.log("debug is off");
>>>>>>> master
 }
*/
// logger.log("info", "File: was found");
