import { NextFunction, Request, Response, Router } from "express";
import {StatusCodes} from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) =>{
  
  //sending user infos:

  //by name
  const users = [{userName: 'Lucas'}];
  res.status(StatusCodes.OK).send(users);
});
  //by id
usersRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
  const uuid = req.params.uuid;
  res.status(StatusCodes.OK).send({uuid});
})

export default usersRoute;