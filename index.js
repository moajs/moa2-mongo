global.debug = require('debug')('moa2');

var app = require('moa2')(__dirname + '/config')

debug($config)
debug($global_middlewares)
debug($middlewares)
debug($controllers)
debug($models)

// app.start(4000);
module.exports = app