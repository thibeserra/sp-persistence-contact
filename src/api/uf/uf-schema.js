const Joi = require('joi')

module.exports.byId = {
  params: {
    id: Joi.number().min(1).required()
  }
}