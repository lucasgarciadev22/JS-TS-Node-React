const db = require ('./database')

async function listData(){
  await db.connect()
  var result

  //events
  result = await db.query("SELECT * FROM evento")
  console.log("EVENTOS");
  console.log(result.rows);
  //participantes
  result = await db.query("SELECT * FROM participante")
  console.log("PARTICIPANTE");
  console.log(result.rows);
  //eventos_participantes
  result = await db.query("SELECT e.nome AS evento, p.nome AS participante FROM evento AS e, participante AS p, evento_participante ep WHERE ep.evento_id= e.id AND participante_id = p.id")
  console.log("EVENTOS_PARTICIPANTES");
  console.log(result.rows);

}
listData();