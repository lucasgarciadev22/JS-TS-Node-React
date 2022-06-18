const Sequelize = require('sequelize')
const models = require('./models')
const Op = Sequelize.Op //-> operators : see more at docs.sequelizejs.com

async function select() {

  //Rule #1 -> list only Nodejs events
  //Rule #2 -> inside this event, list just people without letter 
  // 'o' in their names

  const eventos_participantes = await models.evento.findAll({
    where: {
      nome: {
        [Op.like]: '%Nodejs%' //-> criteria
      }
    }, include: [
      {
        model: models.participante,
        where: {
          nome: {
            [Op.notLike]: '%o%' //-> criteria
        },
        }
      }
    ]
  })
  eventos_participantes.forEach((evento) => { 
    console.log('Evento: ', evento.nome)
    eventos_participantes.forEach((participante) => {
      console.log('---> Participante: ', participante.nome);
    })
  })

  console.log('\n')

  await models.sequelize.close()
}

select();