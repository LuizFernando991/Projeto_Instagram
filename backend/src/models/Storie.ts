import mongoose from '../db/conn'
import { Schema, Document, ObjectId } from 'mongoose'
import User from './User'


export interface StorieInterface extends Document {
    _id: ObjectId
    images: String
    postedBy: ObjectId
    visualizedBy: Array<ObjectId>
}

const StorieSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    visualizedBy:[{
        type: Schema.Types.ObjectId,
        ref: User
    }],
    expiresAt: {
        type: Date,
        required: true
    }
}, {timestamps : true})

export default mongoose.model<StorieInterface>('Storie', StorieSchema)