require('dotenv').config()
let Hapi = require('hapi')
const routes = require('./routes-register.js')

//create a server with a host and port
let server = new Hapi.Server({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 9000
})  

async function start() {
  //start your server
  try {
    await server.register(routes)
    await server.start(e => {
      if(e) {
        throw e;
      }
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  }

  console.log('Server running at: ', server.info.uri)
}

start()