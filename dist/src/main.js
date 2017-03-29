var carAPI = require('./handlers/cars-handler');
var debug = require('debug')('slsexpress:server');
var http = require('http');
var port = normalizePort(process.env.PORT || '3000');
carAPI.set('port', port);
var srv = http.createServer(carAPI);
srv.listen(port);
srv.on('error', onError);
srv.on('listening', onListening);
// checks port value.
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
function onError(error) {
    if (error || error.syscall !== 'listen') {
        throw error;
    }
}
function onListening() {
    var addr = srv.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Running..');
    debug('Listening on ' + bind);
}
