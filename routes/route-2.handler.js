module.exports = {
  method: 'GET',
  path: '/test2',
  handler: (req, res) => {
    res.send({ route: 'route-2'})
  },
  metadata: {
    metadata: {
      decription: 'Teste 2',
      parameters: [],
      responses: {}
    }
  }
}