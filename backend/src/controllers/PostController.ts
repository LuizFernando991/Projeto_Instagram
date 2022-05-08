import { Request, Response } from 'express'
import getUserByToken from '../helpers/get-user-by-token'
import getToken from '../helpers/get-token'
import Post from '../models/Post'
import User from '../models/User'

export default class PostController {

    public static async createPost(req: Request, res: Response) : Promise<Response> {
        
        const { description }: { description : string } = req.body
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
            description,
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

    public static async getAllPostsUser(req: Request, res:Response) : Promise<Response> {

        const { userId }: {userId: string} = req.body
        if(!userId){
            return res.status(422).json({message : 'user id is required'})
        }
        
        try{
            const allPosts = await Post.find({postedBy : userId }).populate("postedBy", ["name", "username", "imageProfile"])
                .populate("postLikes", ["name", "username", "imageProfile"])
                .populate("postComments.postedBy", ["name", "username", "imageProfile"]) //postcomments
            return res.status(200).json({allPosts})
        }catch(err) {
            console.log(err)
            return res.status(500).json({message : 'internal error'})
        }

    }

    public static async getPost(req: Request, res:Response) : Promise<Response> {
        const postId = req.params.id
        if(!postId){
            return res.status(422).json({message : 'post id is required'})
        }
        const post = await Post.findById(postId).populate("postedBy", ["name", "username", "imageProfile"])
            .populate("postLikes", ["name", "username", "imageProfile"])
            .populate("postComments.postedBy", ["name", "username", "imageProfile"]) // postcomments
        if(!post){
            return res.status(404).json({ message : 'post not found' })
        }
        return res.status(200).json({ post })
    }

    public static async getFollowingPosts(req: Request, res:Response)  { 
        //get user
        const token = getToken(req)
        if(!token){
            return res.status(422).json({ message : 'invalid token' })
        }
        const user = await getUserByToken(token, res)
        if(!user){
            return res.status(422).json({ message : 'invalid token' })
        }
        //pagination
        const NumPage = req.query['page']
        const limitPerpage = 10
        let page : number , offset : number, next : boolean
        if(!NumPage || NumPage === '1') {
            page = 1
            offset = 0
        }else {
            if(typeof(NumPage) === 'string'){
                page = parseInt(NumPage)
                offset = (page - 1)*limitPerpage
            }else{
                page = 1
                offset = 0
            }
        }
        const numberOfFollowingPosts = await Post.find({ postedBy : {$in: user.following}}).count()
        if(offset + limitPerpage < numberOfFollowingPosts){
            next = true
        }else{
            next = false
        }
        //return posts
        const followingPosts = await Post.find({ postedBy : {$in: user.following}}, null, { limit : limitPerpage, skip : offset}).sort('-createdAt')

        return res.status(200).json({followingPosts, nextPage : next})
    }

    public static async like(req: Request, res:Response) : Promise<Response> {
        const { postId } : {postId : string} = req.body
        if(!postId){
            return res.status(422).json({ message : 'postId is required' })
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
        try{
            
            const newPost = await Post.findByIdAndUpdate(postId, {
                $addToSet: {postLikes: user._id} //addToSet verify if user already liked the post
            },{
                new:true
            }).populate("postedBy", ["name", "username", "imageProfile"])
                .populate("postLikes", ["name", "username", "imageProfile"])
                .populate("postComments.postedBy", ["name", "username", "imageProfile"])
            //sending notificate

            if(newPost){
                const postedUser = newPost.postedBy
                const notificate = {
                    notificationType: 'like',
                    notificationBy: user._id,
                    createdAt: new Date()
                }
                await User.findByIdAndUpdate(postedUser, {
                    $push: {notifications: notificate}
                }, { new : true})
            }
            return res.status(200).json({ newPost })
        }catch(err) {
            return res.status(500).json({message : 'internal error'})
        }
    }

    public static async unlike(req: Request, res:Response) : Promise<Response> {
        const { postId } : {postId : string} = req.body
        if(!postId){
            return res.status(422).json({ message : 'postId is required' })
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
        try{
            
            const newPost = await Post.findByIdAndUpdate(postId, {
                $pull: {postLikes: user._id} 
            },{
                new:true
            }).populate("postedBy", ["name", "username", "imageProfile"])
                .populate("postLikes", ["name", "username", "imageProfile"])
                .populate("postComments.postedBy", ["name", "username", "imageProfile"])
            return res.status(200).json({ newPost })
        }catch(err) {
            console.log(err)
            return res.status(500).json({message : 'internal error'})
        }
    }

    public static async comment(req: Request, res:Response) : Promise<Response> {
        const { text, postId } : { text : string, postId : string } = req.body
        //get user
        const token = getToken(req)
        if(!token){
            return res.status(422).json({ message : 'invalid token' })
        }
        const user = await getUserByToken(token, res)
        if(!user){
            return res.status(422).json({ message : 'invalid token' })
        }
        const comment = {
            text : text,
            postedBy : user._id
        }
        try{  
            const newPost = await Post.findByIdAndUpdate(postId, {
                $push: {postComments: comment}
            },{
                new:true
            }).populate("postedBy", ["_id", "name", "username", "imageProfile"])
                .populate("postLikes", ["name", "username", "imageProfile"])
                .populate("postComments.postedBy", ["name", "username", "imageProfile"])

            //sending notificate

            if(newPost){
                const postedUser = newPost.postedBy
                const notificate = {
                    notificationType: 'comment',
                    notificationBy: user._id,
                    createdAt: new Date()
                }
                await User.findByIdAndUpdate(postedUser, {
                    $push: {notifications: notificate}
                }, { new : true})
            }
            return res.status(200).json({ newPost })
        }catch(err) {
            return res.status(500).json({message : 'internal error'})
        }
        
    }

    public static async deleteComment(req: Request, res:Response)  {
        const { commentId } : { commentId : string} = req.body
        //get user
        const token = getToken(req)
        if(!token){
            return res.status(422).json({ message : 'invalid token' })
        }
        const user = await getUserByToken(token, res)
        if(!user){
            return res.status(422).json({ message : 'invalid token' })
        }
        //get post 
        const post = await Post.findOne({ postComments : {$elemMatch: {_id : commentId}} })
        if(!post){
            return res.status(404).json({ message : 'comment id not found' })
        }
        if(user._id.toString() !== post.postedBy.toString()){
            return res.status(401).json({ message : 'unauthorized'})
        }
        try{
            const newPost = await Post.findByIdAndUpdate(post._id, {
                $pull: {postComments : {_id : commentId}} 
            }, { new : true}).populate("postedBy", ["name", "username", "imageProfile"])
                .populate("postLikes", ["name", "username", "imageProfile"])
                .populate("postComments.postedBy", ["name", "username", "imageProfile"])
            return res.status(200).json({ newPost })
        }catch(err) {
            return res.status(500).json({message : 'internal error'})
        }
    }

    public static async deletePost(req: Request, res:Response) : Promise<Response> {
        const { postId } : {postId : string} = req.body
        if(!postId){
            return res.status(422).json({ message : 'postId is required' })
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
        //get post
        const post = await Post.findOne({ _id : postId })
        if(!post){
            return res.status(404).json({ message : 'post not found' })
        }
        //check if user is owner of post
        if(user._id.toString() !== post.postedBy.toString()){
            return res.status(401).json({ message : 'unauthorized' })
        }
        try{
            post.remove()
            //delete post images
            return res.status(200).json({ message : 'post deleted'})
        }catch(err) {
            return res.status(500).json({ message : 'internal error'})
        }
    }
}