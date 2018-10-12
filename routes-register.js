var dir = require('node-dir')

const routes = {
  name: 'routes_plugin',
  version: '1.0.0',
  register: async (server, options) => {
    dir.readFiles(`${__dirname}/src/api`, function(err, content, filename, next) {
      console.log('registered route: ', filename);
      if(filename.includes('-routes.js')) {
        server.register(require(filename))
      }
      next(); 
    });
  }
}
module.exports = routes