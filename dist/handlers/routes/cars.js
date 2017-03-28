var express = require('express');
var router = express.Router();
var basePath = process.env.NODE_ENV === 'production' ? process.env.basePath : '';
router.get('/', function (req, res, next) {
    res.json({ cars: ['volvo'] });
});
module.exports = router;
