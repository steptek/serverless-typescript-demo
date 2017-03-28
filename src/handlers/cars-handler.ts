declare var require: any;
declare var module: any;

declare var require: any;
declare var module: any;
declare var process: any;
var express = require('express');
var path = require('path');
var router = express.Router();
var logger = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression')
const endpoint: any = express();
endpoint.use(logger('dev'));
endpoint.use(bodyParser.json());
endpoint.use(bodyParser.urlencoded({ extended: false }));
endpoint.use(compression())
endpoint.use('/cars',
    router.get('/', (req, res, next) => {
        res.json(
            [{
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
    })
);
module.exports = endpoint;
