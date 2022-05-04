import { Request, Response } from 'express'
import Storie from '../models/Storie'
import getUserByToken from '../helpers/get-user-by-token'
import getToken from '../helpers/get-token'


export default class StorieController {

    public static async createStorie(req: Request, res: Response) : Promise<Response> {
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

    public static async getUserStories(req: Request, res: Response) : Promise<Response> {
        const userId : string = req.params.id
        if(!userId){
            return res.status(422).json({ message : 'user id is required'})
        }
        const userStories = await Storie.find({ postedBy : userId})
            .populate("postedBy", ["name", "username", "imageProfile"])
            .populate("visualizedBy", ["name", "username", "imageProfile"])
        return res.status(200).json({ stories : userStories })

    }

    public static async deleteStorie(req: Request, res: Response) : Promise<Response> {
        const { storieId } : { storieId : string} = req.body
        if(!storieId){
            return res.status(422).json({ message : 'storie id is required' })
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
        //get storie
        const post = await Storie.findOne({ _id : storieId })
        if(!post){
            return res.status(404).json({ message : 'storie not found' })
        }
        //check if user is owner of storie
        if(user._id.toString() !== post.postedBy.toString()){
            return res.status(401).json({ message : 'unauthorized' })
        }
        try{
            post.remove()
            return res.status(200).json({ message : 'storie deleted'})
        }catch(err) {
            return res.status(500).json({ message : 'internal error'})
        }
    }
    
}