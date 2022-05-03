import express from 'express'
import PostController from '../controllers/PostController'
import imageUpload from '../helpers/image-upload'
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware'


const router = express.Router()

router.post('/create', verifyTokenMiddleware, imageUpload.array('images'), PostController.createPost)
router.get('/alluserposts', PostController.getAllPostsUser)
router.get('/:id', PostController.getPost)
router.put('/like', verifyTokenMiddleware, PostController.like)
router.put('/unlike', verifyTokenMiddleware, PostController.unlike)
router.delete('/delete', verifyTokenMiddleware, PostController.deletePost)


export default router