import { Response, Request, NextFunction } from 'express'

export default function registerMiddleware(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body
    // Validade if all data is not empty   
    if(!email){
        return res.status(422).json({ message : 'email is required'})
    }
    if(!password){
        return res.status(422).json({ message : 'password is required'})
    } 
    next()
}