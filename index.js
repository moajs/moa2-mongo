global.debug = require('debug')('moa2');

var app = require('moa2')(__dirname + '/config')

debug($config)
debug($middlewares)
debug($global_middlewares)

app.start(4000);