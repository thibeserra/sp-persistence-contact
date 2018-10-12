const uf_routes = {
  name: 'uf_routes_plugin',
  version: '1.0.0',
  register: async (server, options) => {
    server.route([{  
      method: 'GET',
      path: '/uf',
      handler: function(request, reply) {
        return reply.response('uf routes').code(200)
      }
    }]);
  }
}

module.exports = uf_routes;