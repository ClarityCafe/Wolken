const Handler = require('./lib/Handler');
const Constants = require('./lib/Constants');

function Wolken (options) {
    return new Handler(options);
}

Wolken.Handler = Handler;
Wolken.Constants = Constants;

module.exports = Wolken;