import express from 'express'
import StorieController from '../controllers/StorieController'
import imageUpload from '../helpers/image-upload'
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware'



const router = express.Router()

router.post('/createstorie', verifyTokenMiddleware, imageUpload.single('image'), StorieController.createStorie)
router.get('/followingstories', StorieController.getFollowingStories)
router.get('/user/:id', StorieController.getUserStories)
router.put('/visualizestorie', verifyTokenMiddleware, StorieController.visualizateStorie)
router.delete('/deletestorie', verifyTokenMiddleware, StorieController.deleteStorie)


export default router