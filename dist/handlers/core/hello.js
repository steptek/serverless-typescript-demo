"use strict";
var aws_sdk_1 = require("aws-sdk");
var uuid = require("uuid");
function hello(event, context, callback) {
    callback(undefined, {
        statusCode: 200,
        headers: {},
        body: "Go Serverless v1.0!"
    });
}
exports.hello = hello;
function dataReceiver(event, context, callback) {
    console.log('Context : ' + JSON.stringify(context));
    // load AWS Kinesis
    var kinesis = new aws_sdk_1.Kinesis();
    var data = event.data;
    var partitionKey = uuid.v1();
    var params = {
        Data: data,
        PartitionKey: partitionKey,
        StreamName: process.env.KINESIS_STREAM
    };
    console.log("Sending to Kinesis current_time (ms): " + Date.now());
    kinesis.putRecord(params).promise().then(function (data) {
        callback(undefined, { message: 'Data successfully written to Kinesis stream "data-receiver"' });
    }).catch(function (err) {
        callback(err, undefined);
    });
}
exports.dataReceiver = dataReceiver;
function logger(event, context, callback) {
    // print out the event information on the console (so that we can see it in the CloudWatch logs)
    console.log("Kinesis current_time (ms): " + Date.now());
    console.log("The following data was written to the Kinesis stream \"data-receiver\":\n" + JSON.stringify(event.Records[0].kinesis, null, 2));
    callback(undefined, { event: event });
}
exports.logger = logger;
