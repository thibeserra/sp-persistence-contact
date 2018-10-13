const dao = require('./uf-dao.js')

class UfBusiness {
  list() {
    return dao.list()
  }

  byId(id) {
    return dao.byId(id)
  }
}

module.exports = new UfBusiness();