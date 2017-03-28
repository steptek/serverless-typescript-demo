declare var require: any;
declare var module: any;

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression')
console.log(11111111);
const endpoint:any = express();
console.log(22222);
const carList = require('./../handlers/routes/cars');
endpoint.use(logger('dev'));
endpoint.use(bodyParser.json());
endpoint.use(bodyParser.urlencoded({ extended: false }));
endpoint.use(compression())
endpoint.use('/cars', carList);
module.exports = endpoint;
