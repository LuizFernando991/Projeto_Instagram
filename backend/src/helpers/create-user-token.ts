import jwt from 'jsonwebtoken'
import { UserInterface } from '../models/User'
import { Request, Response } from 'express'

async function createToken (user : UserInterface, req : Request, res : Response) : Promise<Response>{

    const token = jwt.sign({
        name : user.name,
        id : user._id
    }, 'secret')

    const authenticatedUser = {
        _id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
        imageProfile: user.imageProfile,
    }

    return res.status(200).json({
        message : "authenticated",
        token : token,
        user : authenticatedUser
    })
}
export default createToken