var express = require('express');
var registerRoutes = require('./register-route')
const swaggerUi = require('swagger-ui-express');
 
 

 
var app = express();
 
// app.use(bodyParser.json());
const swaggerOps = {
  swagger: '2.0',
  info: {
    title: 'Demo',
    description: 'API Demo'
  },
  produces: ["application/json"],
  host: 'localhost:8000',
  basePath: "/",
  paths: {}
}

registerRoutes(app, swaggerOps)


//  Cria o endpoint do swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOps));

 

app.listen(3000)









