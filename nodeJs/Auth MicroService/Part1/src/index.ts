import express from 'express';
import usersRoute from './routes/users.routes';
import statusRoute from './routes/status.route';


const app = express();
//adding middleware for sending content type :
app.use(express.json)
app.use(express.urlencoded({extended: true}))
app.use(usersRoute);//using created route

//creating routes in express callback -> (request, response, next)
// app.get('/status', (req: Request, res: Response, next: NextFunction)=>{
//   res.status(200).send({foo: 'Teste!'})
// });

//simplified status route imported 
app.use(statusRoute);
//listening port 3000 localhost
app.listen(3000, () => {
  console.log('App running in localhost 3000...');
});

