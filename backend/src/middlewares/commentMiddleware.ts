import { Response, Request, NextFunction } from 'express'

export default function commentMiddleware(req: Request, res: Response, next: NextFunction) {
    const { text, postId } : { text : string, postId : string }= req.body
    if(!postId){
        return res.status(422).json({ message : 'postId is required' })
    }
    if(!text){
        return res.status(422).json({ message : 'description is required' })
    }
    next()
}