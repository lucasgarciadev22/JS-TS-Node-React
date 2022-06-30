import express,{Request, Response, NextFunction} from 'express' ;
import usersRoute from './routes/users.routes';

const app = express();

app.use(usersRoute);//using created route

//creating routes in express callback -> (request, response, next)
app.get('/status', (req: Request, res: Response, next: NextFunction)=>{
  res.status(200).send({foo: 'Teste!'})
});

//listening port 3000 localhost
app.listen(3000, ()=>{
  console.log('App running in localhost 3000...');
});

