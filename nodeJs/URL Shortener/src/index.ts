import { URLController } from './controller/URLController'
import express, { Request, Response } from 'express'
import { MongoConnection } from 'database/MongoConnection'

const api = express()
api.use(express.json)

const database = new MongoConnection()
database.connect()


// api.get('/test', (req: Request, res: Response) => {
  //   res.json({ sucess: true })
  // })
  
const urlController = new URLController()
api.get('/:hash', urlController.redirect)

api.post('/shorten', urlController.shorten)

api.listen(5000, () => console.log('Express listening')) 
