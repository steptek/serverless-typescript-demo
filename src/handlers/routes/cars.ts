declare var require: any;
declare var module: any;
declare var process: any;

var express = require('express');
var router = express.Router();
var basePath: any = process.env.NODE_ENV === 'production' ? process.env.basePath : '';

router.get('/', (req, res, next) => {
    res.json({ cars: ['volvo'] }
    );
});

module.exports = router;