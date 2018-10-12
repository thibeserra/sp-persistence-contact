class UfController {

 async list(request, reply) {
    const options = {
      headers: request.headers,
      payload: request.payload
    }
    
    try {
      return await reply.response(options).code(200)
    } catch(e) {
      return reply.response(e.error).code(e.statusCode)
    }
  }

  async byId(request, reply) {
    const options = {
      headers: request.headers,
      params: request.params,
      payload: request.payload
    }
    
    try {
      return await reply.response(options).code(200)
    } catch(e) {
      return reply.response(e.error).code(e.statusCode)
    }
  }
}
module.exports = UfController;