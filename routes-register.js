var dir = require('node-dir')

const routes = {
  name: 'routes_plugin',
  version: '1.0.0',
  register: async (server, options) => {
    dir.readFiles(`${__dirname}/src/api`, function(err, content, filename, next) {
      if(filename.includes('-routes.js')) {
        console.log('registered route: ', filename);
        server.register(require(filename))
      }
      next(); 
    });
  }
}
module.exports = routes