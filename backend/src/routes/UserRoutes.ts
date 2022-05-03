import express from 'express'
import UserController from '../controllers/UserController'
import registerMiddleware from '../middlewares/registeMiddleware'
import singupMiddleware from '../middlewares/singupMiddleware'
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware'


const router = express.Router()

router.post('/register', registerMiddleware, UserController.registerUser)
router.post('/login', singupMiddleware, UserController.singUp)
router.put('/follow', verifyTokenMiddleware, UserController.follow)
router.put('/unfollow', verifyTokenMiddleware, UserController.unFollow)
router.get('/:username', UserController.getUserByUsername)


export default router