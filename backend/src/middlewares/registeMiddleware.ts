import { Response, Request, NextFunction } from 'express'

export default function registerMiddleware(req: Request, res: Response, next: NextFunction) {
    const { name, email, password, confirmPassword } = req.body
    // Validade if all data is not empty
    if(!name){
        return res.status(422).json({ message : 'name is required'})
    }
    if(!email){
        return res.status(422).json({ message : 'email is required'})
    }
    if(!password){
        return res.status(422).json({ message : 'password is required'})
    }
    if(!confirmPassword){
        return res.status(422).json({ message : 'confirmPassword is required'})
    }
    if(password !== confirmPassword){
        return res.status(422).json({ message : 'password must match with confirmPassword'})
    }
    next()
}