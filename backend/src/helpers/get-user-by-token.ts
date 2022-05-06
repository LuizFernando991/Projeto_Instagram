import { Response } from 'express'
import User, { UserInterface } from '../models/User'
import jwt from 'jsonwebtoken'

interface JwtPayload{
    name : string
    id : string
}
async function getUserByToken (token : string , res : Response, withPassword=false, withPopulate=false ) : Promise<UserInterface|void> { 
    const { id } = jwt.verify(token, 'secret') as JwtPayload
    let user 
    if(withPassword){
        user = await User.findOne({ _id : id })
    }else if(withPopulate){
        user = await User.findOne({ _id : id }).select('-password')
        .populate("followers", ["username", "name", "imageProfile"])
        .populate("following", ["username", "name", "imageProfile"])
    }else{
        user = await User.findOne({ _id : id }).select('-password')
    }
    if(user){
        return user
    }
    return
}

export default getUserByToken