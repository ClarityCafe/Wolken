const Handler = require('./lib/Handler');
const Constants = require('./lib/Constants');
const Wolken = Handler;

Wolken.Handler = Handler;
Wolken.Constants = Constants;

module.exports = Wolken;