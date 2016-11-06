// connections
const express = require('express');
// const body_parser = require('body-parser');
const app = express();
// const logger = require('../lib/logger');
/*
const debug = require('debug')('my-namespace');
const name = 'my-app'  ;
debug('booting %s', name);
*/


const port = 3000;


// use external api.js for routes, all routes have pre of /api
app.use('/api', require('../routes/api.js')(express));

// listen runs server
app.listen(port);

module.exports = app;
