var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');

var app = express();

// Point to the compiled JS files (from JSX). In this case, the gulp compile task
// put compiled js files in dist folder
var WEB_DIR_PATH = path.join(__dirname, '../../dist');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(WEB_DIR_PATH));

// Redirect root to serve the index.html.
// index.html has a hook to React
app.get('/', function(req, res) {
  res.sendFile(WEB_DIR_PATH + "/index.html");
});

// For other url path, we can implement REST API as normal. Below is example.
app.use('/users', users);

module.exports = app;
