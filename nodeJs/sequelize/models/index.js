//creating index to the tables using sequelize
const sequelize = require('../database')

const models = {
  evento: require('./evento'),
  participante: require('./participante'),
  sequelize: sequelize
}

module.exports = models;