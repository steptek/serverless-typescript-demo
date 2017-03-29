declare var require: NodeRequire;
declare var module: NodeModule;
declare var process: NodeJS.Process;

import ep = require('./offers-api');
const debug = require('debug')('slsexpress:server');
const http = require('http');
const port = validatePort(process.env.PORT || '3000');
ep.set('port', port);

const server = http.createServer(ep);
server.listen(port);
server.on('error', onError);
server.on('listening', () => {
        var addr = server.address();
        var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
        console.log("Offers endpoint running on : " + bind);
    debug('Listening on ' + bind);
});


function validatePort(val) {
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
module.exports = server;