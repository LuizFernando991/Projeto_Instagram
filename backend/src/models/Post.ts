import mongoose from '../db/conn'
import { Schema, Document, ObjectId } from 'mongoose'
import User from './User'

export interface PostCommentsInface {
    text: string
    postedBy: ObjectId
}

export interface PostInterface extends Document {
    description: string
    images: Array<string>
    postedBy: ObjectId
    postLikes: Array<ObjectId>
    postComments: Array<PostCommentsInface>
    
}

const PostSchema = new Schema({
    description: {
        type: String,
    },
    images: [{
        type: String,
        required: true,
    }],
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    postLikes: [{
        type: Schema.Types.ObjectId,
        ref: User
    }],
    postComments: [{
        text: String,
        postedBy: {
            type: Schema.Types.ObjectId,
            ref: User
        }
    }]
}, {timestamps : true})

export default mongoose.model<PostInterface>('Post', PostSchema)