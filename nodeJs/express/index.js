console.log('Node OK!');

const express = require('express') //make express available
const bodyParser = require('body-parser')//body info middleware to get body info to save inside user info
const userRoute = require('./routes/userRoute') //creating user route


const app = express()
app.use(bodyParser.urlencoded({extended: false}))//put middleware here
const port = 3000//enable localhost

userRoute(app)
//get http method -> req - defines require function / res defines resolve function
app.get('/', (req, res) => res.send('Hello from Express!'))

app.listen(port, () => console.log('Running API in localhost 3000'))

