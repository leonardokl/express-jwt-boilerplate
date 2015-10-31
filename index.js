var express = require('express');
var mongoose = require('mongoose');
var bluebird = require('bluebird');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var debug = require('debug')('MASTER');
var configDb = require('./config/database.js');
var port = process.env.PORT || 8080;
var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
mongoose.connect(configDb.url);
mongoose.Promise = bluebird.Promise;
mongoose.set("debug", true);

app.get('/', function (req, res) {
    res.status(200).json('api');
});

require('./routes')(router);
app.use('/api/', router);

app.listen(port);
console.log(`Connected to: ${port}`);
