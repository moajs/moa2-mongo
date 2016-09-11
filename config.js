module.exports = {  
  home: __dirname,
  // db_debug: true,
  middlewares:[
    'compress',
    'bodyparser',
    'json',
    'serve',
    'api',
    'views',
    'favicon'
  ],
  
  routes:[{
    path: __dirname,
    folder: 'app/routes'
  }]


}