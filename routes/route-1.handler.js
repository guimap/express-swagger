module.exports = {
  method: 'GET',
  path: '/test1',
  handler: (req, res) => {
    res.send({ route: 'route-1'})
  },
  metadata: {
    decription: 'Teste 1',
    parameters: [],
    responses: {}
  }
}