import mongoose from '../db/conn'
import { Schema, Document, ObjectId } from 'mongoose'

export interface UserInterface extends Document {
    _id: ObjectId
    name: string
    username: string
    email: string
    password: string
    imageProfile?: string
}

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    imageProfile: {
        type: String,
        default: ''
    }
}, {timestamps : true})

export default mongoose.model<UserInterface>('User', UserSchema)