var app = require('moa2')(__dirname + '/config')

debug($config)
debug($middlewares)

app.start(4000);