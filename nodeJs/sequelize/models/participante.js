const Sequelize = require ('sequelize')
const sequelize = require ('../database')

//creating objects that sequeliz will use inside tables of DB
const Participante = sequelize.define('participante',{
  nome: {
    type: Sequelize.STRING
  },
})

module.exports = Participante;

const Evento = require('./evento')
//relating tables in evento_participante (connection object)
Participante.belongsToMany(Evento, {through: 'evento_participante'});