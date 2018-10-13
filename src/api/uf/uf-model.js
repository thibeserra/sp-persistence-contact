const Sequelize = require('sequelize')
const database = require('../../../database.js')

const Uf = database.sapriConnection.define('uf', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  descricao: {
    type: Sequelize.STRING(60),
    allowNull: false
  } 
}, {
  tableName: 'uf',
})  

Uf.sync({force: false})
  .then(() => {
    console.log('created schema: Uf')
  })

module.exports = Uf