import { Request, Response } from 'express'
import Storie from '../models/Storie'
import getUserByToken from '../helpers/get-user-by-token'
import getToken from '../helpers/get-token'


export default class StorieController {
    
    public static async createStorie(req: Request, res: Response) {
        const image : any = req.file
        if(!image){
            return res.status(422).json({ message : 'image is required' })
        }
        //get user
        const token = getToken(req)
        if(!token){
            return res.status(422).json({ message : 'invalid token' })
        }
        const user = await getUserByToken(token, res)
        if(!user){
            return res.status(422).json({ message : 'invalid token' })
        }
        //get current date
        let data = new Date()
        data.setHours(data.getHours()+24)

        const storie = new Storie({
            image: image.filename,
            postedBy: user._id,
            visualizedBy: [],
            expiresAt: data,
        })
        try{
            const newStorie = await storie.save()
            return res.status(200).json({  storie : newStorie})
        }catch(err){
            console.log(err)
            return res.status(500).json({ message : 'internal error'})
        }

        
    }
    
}