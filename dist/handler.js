var awsServerlessExpress = require('aws-serverless-express');
var carsHandler = require('./handlers/cars-handler');
var helloHandler = require('./handlers/hello-handler');
var server = awsServerlessExpress.createServer(carsHandler);
exports.cars = function (event, context) { return awsServerlessExpress.proxy(server, event, context); };
exports.hello = helloHandler;
