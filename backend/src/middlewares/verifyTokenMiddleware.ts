import { Request, Response, NextFunction} from 'express'
import  jwt from 'jsonwebtoken'
import getToken from '../helpers/get-token'

export default function verifyTokenMiddleware (req : Request, res : Response, next : NextFunction){

    if(!req.headers.authorization){
        return res.status(401).json({ message : 'invalid token'})
    }
    const token = getToken(req)
    if(!token){
        return res.status(401).json({ message : 'not authorized'})
    }
    try{
        const verified = jwt.verify(token, 'secret')
        next()
    }catch(err){
        res.status(400).json({ message : 'invalid token'})
    }
    
}
