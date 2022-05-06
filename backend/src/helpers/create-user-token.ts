import jwt from 'jsonwebtoken'
import { UserInterface } from '../models/User'
import { Request, Response } from 'express'

async function createToken (user : UserInterface, req : Request, res : Response) : Promise<Response>{

    const token = jwt.sign({
        name : user.name,
        id : user._id
    }, 'secret')


    return res.status(200).json({
        message : "authenticated",
        token : token,
        user : user
    })
}
export default createToken