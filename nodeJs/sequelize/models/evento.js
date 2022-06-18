const Sequelize = require ('sequelize')
const sequelize = require ('../database')

//creating objects that sequeliz will use inside tables of DB
const Evento = sequelize.define('evento',{
  nome: {
    type: Sequelize.STRING
  },
})

module.exports = Evento;

const Participante = require('./participante')
//relating tables in evento_participante (connection object)
Evento.belongsToMany(Participante, {through: 'evento_participante'});