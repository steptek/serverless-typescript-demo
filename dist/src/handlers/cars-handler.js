var express = require('express');
var path = require('path');
var router = express.Router();
var logger = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');
var endpoint = express();
endpoint.use(logger('dev'));
endpoint.use(bodyParser.json());
endpoint.use(bodyParser.urlencoded({ extended: false }));
endpoint.use(compression());
endpoint.use('/cars', router.get('/', function (req, res, next) {
    res.json([{
            "brand": "Toyota",
            "model": "Camery",
            "year": "2011",
            "condition": "Awesome"
        }, {
            "brand": "Ford",
            "model": "Highlux",
            "year": "2009",
            "condition": "Poor"
        }
    ]);
}));
module.exports = endpoint;
