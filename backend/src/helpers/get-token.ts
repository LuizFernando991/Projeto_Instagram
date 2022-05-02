import { Request } from 'express'

export default function getToken (req : Request){
    const authHeader = req.headers.authorization
    const token = authHeader?.split(" ")[1]
    return token
}