module.exports = {  
  home: __dirname,
  // db_debug: true,

  // middlewares:{
  //
  // },
  
  routes:[{
    path: __dirname,
    folder: 'app/routes'
  }],
  
  database: {
    "development": {
      'host': '127.0.0.1',
      'port': '27017',
      'db': 'moa2-development',
      'is_debug': true
     },
     "test": {
      'host': '127.0.0.1',
      'port': '27017',
      'db': 'moa2-test',
      'is_debug': true
     },
     "production": {
      'host': '127.0.0.1',
      'port': '27017',
      'db': 'moa2-production',
      'is_debug': false
     }
  }
}