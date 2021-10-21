// =================================================================
//                         Requires
// =================================================================
var express = require('express');
var middleware = require('./middleware');
var app = express();
var hash = require('object-hash');


// =================================================================
//                           Routes
// =================================================================
app.get('/ping', (req, res, next) => {
  res.status(200).json({
    ok: true,
    message: 'pong'
  })
});

app.post('/estampillado', 
  [middleware.verifyToken, middleware.validateParams], 
  (req, res, next) => {
    res.status(200).json({
      ok: true,
      message: 'OK',
      hash: hash(req.data)
    })
});

// =================================================================
//                          Exports
// =================================================================
module.exports = app;