declare var exports: any;
const awsServerlessExpress = require('aws-serverless-express');
const carsHandler = require('./handlers/cars-handler');
const helloHandler = require('./handlers/hello-handler');
const server = awsServerlessExpress.createServer(carsHandler);
exports.cars = (event, context) => awsServerlessExpress.proxy(server, event, context)
exports.hello = helloHandler;
