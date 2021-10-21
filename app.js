// =================================================================
//                          Requires
// =================================================================
var express = require('express');
var bodyParser = require('body-parser');
var PORT = require('./config').PORT;


// =================================================================
//                      Init variables
// =================================================================
var app = express();

// =================================================================
//                        CORS
// =================================================================
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

// Body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =================================================================
//                           Routes
// =================================================================
var routes = require('./routes');
app.use('/', routes);

// =================================================================
//                          Listen
// =================================================================
app.listen(PORT, () => {
  console.log('Express Server - Port ' + PORT + ': \x1b[32m%s\x1b[0m', 'ONLINE');
});