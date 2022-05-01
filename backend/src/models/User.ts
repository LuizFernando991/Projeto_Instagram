import mongoose from '../db/conn'
import { Schema, Document } from 'mongoose'

export interface UserInterface extends Document {
    name: string
    email: string
    password: string
    imageProfile?: string
}

const UserSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true
    },
    imageProfile : {
        type: String,
        required: true,
        default: ''
    }
})

export default mongoose.model<UserInterface>('User', UserSchema)