import { Response } from 'express'
import User, { UserInterface } from '../models/User'
import jwt from 'jsonwebtoken'

interface JwtPayload{
    name : string
    id : string
}
async function getUserByToken (token : string , res : Response, withPassword=false ) : Promise<UserInterface|void> { 
    const { id } = jwt.verify(token, 'secret') as JwtPayload
    let user 
    if(withPassword){
        user = await User.findOne({ _id : id })
    }else{
        user = await User.findOne({ _id : id }).select('-password')
    }
    if(user){
        return user
    }
    return
}

export default getUserByToken