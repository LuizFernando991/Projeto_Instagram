import mongoose from '../db/conn'
import { Schema, Document, ObjectId } from 'mongoose'

export interface UserInterface extends Document {
    select: any
    _id: ObjectId
    name: string
    username: string
    email: string
    password: string
    imageProfile?: string
    followers: Array<ObjectId>
    following: Array<ObjectId>
    notifications: Array<ObjectId>
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
    email: {
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
    },
    followers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    notifications : [{
        notificationType : String,
        createdAt: Date,
        notificationBy: {
            type : Schema.Types.ObjectId,
            ref: "User"
        }
    }]
    
}, {timestamps : true})

export default mongoose.model<UserInterface>('User', UserSchema)