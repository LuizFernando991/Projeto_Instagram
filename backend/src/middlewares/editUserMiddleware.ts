import { Response, Request, NextFunction } from 'express'

export default function registerMiddleware(req: Request, res: Response, next: NextFunction) {
    const { name, email, username } = req.body
    // Validade if all data is not empty
    if(!name){
        return res.status(422).json({ message : 'name is required'})
    }
    if(!username){
        return res.status(422).json({ message : 'name is required'})
    }
    if(!email){
        return res.status(422).json({ message : 'email is required'})
    }
    next()
}