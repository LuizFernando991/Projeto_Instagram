import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'
import createToken from '../helpers/create-user-token'
import getToken from '../helpers/get-token'
import getUserByToken from '../helpers/get-user-by-token'

export default class UserController { 

    public static async registerUser(req: Request, res: Response) : Promise<Response> {
        const { name, username, email, password } : {name: string, username: string, email: string, password: string }= req.body    
        //Validate if user already exists
        const userEmailExists = await User.findOne({email : email})
        if(userEmailExists){
            return res.status(422).json({message : 'email already used'})
        }
        const userUserNameExists = await User.findOne({username : username})
        if(userUserNameExists){
            return res.status(422).json({message : 'username already used'})
        }
        // Encrypting password before save in db    
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password.trim(), salt)
        //Create new User
        const user = new User({
            name: name.trim(),
            username: username.trim(),
            email: email.trim(),
            password: passwordHash,
            imageProfile: '',
            following: [],
            followers: [],
        })
        try {
            await user.save()
            //Return token to front-end
            return createToken(user, req, res)
        }catch(err) {
            console.log(err)
            return res.status(500).json({ message : 'internal error'})
        }
    }

    public static async singUp(req: Request, res: Response) : Promise<Response> {
        const { email, password } : {email: string, password: string} = req.body
        //Check if user exists
        const user = await User.findOne({ email : email })
        if(!user){
            return res.status(422).json({message : 'user not found'})
        }
        //Check password
        const checkPassword = bcrypt.compare(password, user.password)
        if(!checkPassword){
            return res.status(422).json({message : 'wrong password'})
        }
        return createToken(user, req, res)
    }

    public static async getUserByUsername(req: Request, res: Response) : Promise<Response> {
        const username : string = req.params.username
        const user = await User.findOne({ username : username }).select('-password -email')
            .populate("followers", ["username", "name", "imageProfile"])
            .populate("following", ["username", "name", "imageProfile"])

        if(!user){
            return res.status(404).json({ message : 'user not found'})
        }
        return res.status(200).json({ user })
    }

    public static async follow(req: Request, res: Response) : Promise<Response> {
        const { userId } : { userId : string } = req.body
        if(!userId ){
            return res.status(422).json({ message : 'user id or username is required'})
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
        if(user._id.toString() === userId){
            return res.status(422).json({ message : 'user can not follow yourself'})
        }
        try{
            //updating followed user
            const followedUser = await User.findByIdAndUpdate(userId, {
                $addToSet: {followers: user._id} 
            },{
                new:true
            }).select('-password -email')
                .populate("followers", ["username", "name", "imageProfile"])
                .populate("following", ["username", "name", "imageProfile"])
            if(!followedUser){
                return res.status(422).json({ message : 'user followed not found' })
            }
            //updating follower user
            const followerUser = await User.findByIdAndUpdate(user._id, {
                $addToSet: {following: userId} 
            },{
                new:true
            }).select('-password -email')
                .populate("followers", ["username", "name", "imageProfile"])
                .populate("following", ["username", "name", "imageProfile"])
            return res.status(200).json({ followedUser })
        }catch(err) {
            return res.status(500).json({message : 'internal error'})
        }
    }

    public static async unFollow(req: Request, res: Response) : Promise<Response> {
        const { userId } : { userId : string } = req.body
        if(!userId ){
            return res.status(422).json({ message : 'user id or username is required'})
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
        if(user._id.toString() === userId){
            return res.status(422).json({ message : 'user can not unfollow yourself'})
        }
        try{
            //updating followed user
            const followedUser = await User.findByIdAndUpdate(userId, {
                $pull: {followers: user._id} 
            },{
                new:true
            }).select('-password -email')
                .populate("followers", ["username", "name", "imageProfile"])
                .populate("following", ["username", "name", "imageProfile"])
            if(!followedUser){
                return res.status(422).json({ message : 'user followed not found' })
            }
            //updating follower user
            const followerUser = await User.findByIdAndUpdate(user._id, {
                $pull: {following: userId} 
            },{
                new:true
            }).select('-password -email')
                .populate("followers", ["username", "name", "imageProfile"])
                .populate("following", ["username", "name", "imageProfile"])
            return res.status(200).json({ followedUser })
        }catch(err) {
            return res.status(500).json({message : 'internal error'})
        }
    }

}