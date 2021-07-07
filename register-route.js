var glob = require("glob")
const path = require('path')

function registerEndpoints(app, swaggerOps) {
  //  Pega todos os endpoints declarados
  const routes = glob.sync(path.join(__dirname, './routes/**/*.handler.js'))
  for (const routePath of routes) {
    const route = require(routePath)
    const { method, path, metadata, handler } = route
    const methodName = method.toLocaleLowerCase()
    //  Incrementa no objeto swagger o metadata do swagger
    swaggerOps.paths[path] = {
      [methodName]: metadata
    }

    //  Invoca o objeto do express para registrar a rota
    app[methodName].apply(app, [path, handler])
  }
}

module.exports = registerEndpoints