'use strict'

const mongoose = require('mongoose')

var connectionString, options

const env = process.env.NODE_ENV || "development";
const config = $config.database[env]


const port = config.port
var db = config.db
var host

const isDebug = config.is_debug

if (isDebug) {
  log('提醒:debug状态连接数据库:')
  host = config.host
} else {
  log('警告:非debug状态连接数据库:')
  host = config.host
}

connectionString = 'mongodb://' + host + ':' + port + '/' + db + ''

options = {
  db: {
    native_parser: true
  },
  server: {
    auto_reconnect: true,
    poolSize: 5
  }
}

log(connectionString)

mongoose.connect(connectionString, options, function (err, res) {
  if (err) {
    log('[mongoose log] Error connecting to: ', +connectionString + '. ' + err)
    return process.exit(1)
  } else {
    return log('[mongoose log] Successfully connected to: ', +connectionString)
  }
})

db = mongoose.connection

db.on('error', console.error.bind(console, 'mongoose connection error:'))

db.once('open', function () {
  return log('mongoose open success')
})

module.exports = db
