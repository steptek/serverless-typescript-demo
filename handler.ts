declare var exports: any;
declare var require: NodeRequire;

const ep = require('./src/endpoint/default-srv');
import awsServerlessExpress = require('aws-serverless-express');
import helloHandler = require('./src/handlers/hello-handler');
const offersEP = require('./src/endpoint/offers-api');

console.log("Starting lambda function..")
const srv = awsServerlessExpress.createServer(offersEP);
exports.ads = (event, context) => awsServerlessExpress.proxy(srv, event, context)
exports.hello = helloHandler;