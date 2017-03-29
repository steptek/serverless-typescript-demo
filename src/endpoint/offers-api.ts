declare var require: NodeRequire;
declare var module: NodeModule;
declare var process: NodeJS.Process;

const express = require('express');
const router = express.Router();
const logger = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression')
const endpoint: any = express();
console.log("[Started] offers endpoint.")
endpoint.use(logger('dev'));
endpoint.use(bodyParser.json());
endpoint.use(bodyParser.urlencoded({ extended: false }));
endpoint.use(compression())
endpoint.use('/offers',
    router.get('/', (req, res, next) => {
        var term = req.param('term');
        console.log("[API] searching for: " +  term);
        switch (term) {
            case 'cars': {
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
                break;
            }
            case 'houses': {
                res.json(
                    [{
                        "location": "rosemont",
                        "surface": "100",
                        "price": "210k",
                        "available": "Yes"
                    }, {
                        "location": "villeray",
                        "surface": "150",
                        "price": "240k",
                        "available": "Yes"
                    }
                    ]);
                break;
            }
            default: {
                res.json({ "info": "You have to define a search term" });
            }
        }
    })
);
module.exports = endpoint;
