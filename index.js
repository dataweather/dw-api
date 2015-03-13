var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Data Weather!');
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
      reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
  }
});

server.start();
