//Selecting all values from tables

const { participante } = require('./models');
const models = require('./models')

async function select(){
  console.log('\n');

  //Eventos
  const eventos = await models.evento.findAll()
  eventos.forEach((evento) => {
    console.log('Evento: ',evento.nome);
  });

  console.log('\n');

  //Participantes
  const participantes = await models.participante.findAll()
  participantes.forEach((participante) => {
    console.log('Participante:', participante.nome);
  });

  console.log('\n');

  //Eventos_participantes
  const eventos_participantes = await models.evento.findAll({
    //including existing realtion evento -> participante 
    include: [{ model: models.participante}]
  })
  eventos_participantes.forEach((evento) => { 
    console.log('Evento: ', evento.nome)
    evento.participantes.forEach((participante) => { 
      console.log('----> Participante: ', participante.nome);
    })
  })
  console.log('\n');

  await models.sequelize.close()
}
select();