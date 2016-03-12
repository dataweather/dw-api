var Hapi = require('hapi')
var Good = require('good')

var server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 8000
})

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Data Weather!')
  }
})

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
      reply('Hello, ' + encodeURIComponent(request.params.name) + '!')
  }
})

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      args: [{ log: '*', response: '*' }]
    }]
  }
}, function (err) {
  if (err) {
    throw err
  }

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri)
  })

})
