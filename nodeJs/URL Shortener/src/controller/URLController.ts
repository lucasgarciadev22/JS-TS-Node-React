import { Request, Response } from 'express'
import { URLModel } from "../database/model/URL";
import shortId from  'shortid'
import { config } from "../config/Constants";

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    //get original URL, check if exists
    const {originURL} = req.body
    const url = await URLModel.findOne({originURL})
    if (url) {
      Response.json(url)
      return
    }
    //generate new URL hash
    const hash = shortId.generate()
    //save shortURL on DB
    const shortURL = `${config.API_URL}/${hash}`
    const newUrl = await URLModel.create({hash, shortURL,originURL})
    //return URL saved values
    response.json({newUrl})
  }

  public async redirect(req: Request, res: Response): Promise<void> {
   //URL get hash
    const {hash} = req.params
   //find original URL by hash
    const url = await URLModel.findOne({hash})
    if (url) {
      //redirect to original URL
     response.redirect(url.originURL)
     return 
    }
    response.status(400).json({error: 'URL not found'})
  }
}