import express from 'express'
import UserController from '../controllers/UserController'
import registerMiddleware from '../middlewares/registeMiddleware'
import singupMiddleware from '../middlewares/singupMiddleware'


const router = express.Router()

router.post('/register', registerMiddleware, UserController.registerUser)
router.post('/login', singupMiddleware, UserController.singUp)
router.get('/:username', UserController.getUserByUsername)


export default router