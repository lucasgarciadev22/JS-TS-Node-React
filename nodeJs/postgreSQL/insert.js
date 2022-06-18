const db = require('./database')

async function insertData(){
  await db.connect()

  //passing values as parameters -> $ 
  const queryEvento = "INSERT INTO evento (nome) VALUES ($1)"
  
  //linking $parameters to [arrays] inside called query
  await db.query(queryEvento, ['Encontro de Node'])
  await db.query(queryEvento, ['Encontro de PostgreSQL'])
  
  //passing values as parameters -> $ 
  const queryParticipante = "INSERT INTO participante (nome) VALUES ($1)"
  
  await db.query(queryParticipante, ['Carlos'])
  await db.query(queryParticipante, ['Augusto'])
  await db.query(queryParticipante, ['Jessy'])
  await db.query(queryParticipante, ['Gustav'])

  //using parameters previously created -> $
  const queryEventoParticipante = 
  "INSERT INTO evento_participante (evento_id, participante_id) VALUES ($1,$2)"
  await db.query(queryEventoParticipante, [1,1])
  await db.query(queryEventoParticipante, [1,2])
  await db.query(queryEventoParticipante, [1,3])
  
  await db.query(queryEventoParticipante, [2,3])
  await db.query(queryEventoParticipante, [2,4])

  await db.end()
  console.log('Inserted Data!');
}
insertData();