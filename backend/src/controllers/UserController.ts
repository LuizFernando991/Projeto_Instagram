import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'
import createToken from '../helpers/create-user-token'
import getToken from '../helpers/get-token'

export default class UserController { 

    public static async registerUser(req: Request, res: Response) : Promise<Response>{
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

    public static async singUp(req: Request, res: Response) : Promise<Response>{
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
}