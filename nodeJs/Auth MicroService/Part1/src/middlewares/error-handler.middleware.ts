import { NextFunction, Request, Response } from "express";
import {StatusCodes} from "http-status-codes";
import DatabaseError from "../models/errors/database.error.model";

//using this error handler to treat the code errors

function errorHandler(error: any, req: Request, res: Response, next: NextFunction){
  
  if (error instanceof DatabaseError) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }else {

    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export default errorHandler;