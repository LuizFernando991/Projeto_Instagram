import express from 'express'
import StorieController from '../controllers/StorieController'
import imageUpload from '../helpers/image-upload'
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware'



const router = express.Router()

router.post('/createstorie', verifyTokenMiddleware, imageUpload.single('image'), StorieController.createStorie)


export default router