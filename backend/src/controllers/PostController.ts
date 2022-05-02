import { Request, Response } from 'express'
import getUserByToken from '../helpers/get-user-by-token'
import getToken from '../helpers/get-token'
import Post from '../models/Post'

export default class PostController {

    public static async createPost(req: Request, res: Response) : Promise<Response> {
        
        const { title } = req.body
        const images : any = req.files

        if(!images || images.length ===0){
            return res.status(422).json({ message : 'image is required' })
        }
        //Get user from token
        const token = getToken(req)
        if(!token){
            return res.status(401).json({ message : 'unauthorized'})
        }
        const user = await getUserByToken(token, res)
        //Images strings on array
        const post = new Post({
            title,
            images: [],
            postedBy: user?._id,
            postLikes: [],
            postComments: [],
        })

        images.map((image: { filename: string }) =>{
            post.images.push(image.filename)
        })
        try{
            const newPost = await post.save()
            return res.status(200).json({ message : "post successfully added", post : newPost})
        }catch(err){
            return res.status(500).json({ message : 'internal error'})
        }

    }

}