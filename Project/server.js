// set up ======================================================================
var express = require('express');
var app = express();                        // create  app w/ express
var mongoose = require('mongoose')          // mongoose for mongodb
var path = require('path');
var port     = process.env.PORT || 3000;    // set the port
var database = require('./config/database');// load the database config
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

 // configuration ===============================================================
    mongoose.connect(database.url);     // connect to mongoDB database

    app.use(express.static(__dirname + '/public'));                 // set the static files location 
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

    // routes ======================================================================
    require('./app/routes.js')(app);

    // listen (start app with node server.js) ======================================
    app.listen(port);
    console.log("App listening on port " + port);
