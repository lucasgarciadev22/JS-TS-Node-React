const models = require('./models')

async function create(){
  await models.sequelize.sync({force:true})
  await models.sequelize.close()

  console.log('Database syncing OK!');
}

create();
