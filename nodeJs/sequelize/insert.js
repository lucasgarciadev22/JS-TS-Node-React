const models = require('./models')

async function insert(){

  //Evento -> inserting values inside object keys on table
  const eventoNode = await models.evento.create({nome: 'Encontro de Nodejs'})
  const eventoPostgres = await models.evento.create({nome: 'Encontro de Postgresql'})

  //Participante -> inserting values inside object keys on table
  const carlos = await models.participante.create({nome: 'Carlos'})
  const augusto = await models.participante.create({nome: 'Augusto'})
  const janaina = await models.participante.create({nome: 'Janaína'})
  const rafael = await models.participante.create({nome: 'Rafael'})

  //Evento_participante -> setting values into relation table
  await eventoNode.setParticipantes([carlos,augusto,janaina]) 
  await eventoPostgres.setParticipantes([janaina,rafael]) 
  
  await models.sequelize.close()

  console.log('Inserted Data!');
}
insert();