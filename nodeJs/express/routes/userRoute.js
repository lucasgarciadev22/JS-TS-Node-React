const fs = require('fs')
const {join} = require('path')//native node modules

const filePath = join(__dirname, 'users.json')//find  users file directory

//read users file or return empty array
const getUsers = () => {
  const data = fs.existsSync(filePath)
  ? fs.readFileSync(filePath)
  :[]

  try {
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users,null,'\t'))// '\t' create table

//passing into app
const userRoute = (app) => {
  app.route('/users/:id?')

  //#region  GET Method
  .get((req, res)=> {
    const users = getUsers()

    res.send({users})
  })
  //#endregion
  //#region  POST Method...
  .post((req, res)=> {
    const users = getUsers()

    users.push(req.body)//push body info inside a new user from request
    saveUser(users)//save into DB

    res.status(201).send('OK') //send messages confirming its all right!
  })
  //#endregion
  //#region  PUT Method...
  .put((req, res)=> {
    const users = getUsers()

    saveUser(users.map(user =>{
      if (user.id === req.params.id){ //acessing original api user id
        return{
          ...user,
          ...req.body//-> new user info for updating
        }
      }
      return user
    }))
    res.status(200).send('OK')
  })
  //#endregion
  .delete((req, res)=> {
    const users = getUsers()
    //save all users except the filtered users = excluded!
    saveUser(users.filter(user => user.id !== req.params.id))

    res.status(200).send('OK')
  })
}

module.exports = userRoute