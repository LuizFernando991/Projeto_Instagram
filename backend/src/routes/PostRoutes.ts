import express from 'express'
import PostController from '../controllers/PostController'
import imageUpload from '../helpers/image-upload'
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware'


const router = express.Router()

router.post('/create', verifyTokenMiddleware, imageUpload.array('images'), PostController.createPost)


export default router