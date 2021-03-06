const UfController = require('./uf-controller');
const Validator = require('./uf-schema');
const controller = new UfController();

const uf_routes = {
  name: 'uf_routes_plugin',
  version: '1.0.0',
  register: async (server, options) => {
    server.bind(controller)
    server.route([{  
      method: 'GET',
      path: '/uf',
      config: {
        description: 'list all ufs',
        tags: ['api'],
        handler: controller.list
      }
    }, {
      method: 'GET',
      path: '/uf/{id}',
      config: {
        description: 'find uf by id',
        tags: ['api'],
        handler: controller.byId,
        validate: Validator.byId
      }
    }]);
  }
}

module.exports = uf_routes;