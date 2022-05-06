import express from 'express'
import UserController from '../controllers/UserController'
import imageUpload from '../helpers/image-upload'
import registerMiddleware from '../middlewares/registeMiddleware'
import loginMiddleware from '../middlewares/loginMiddleware'
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware'
import editUserMiddleware from '../middlewares/editUserMiddleware'


const router = express.Router()

router.post('/register', registerMiddleware, UserController.registerUser)
router.post('/login', loginMiddleware, UserController.login)
router.post('/searchuser', verifyTokenMiddleware, UserController.searchUser)
router.put('/follow', verifyTokenMiddleware, UserController.follow)
router.put('/clearnotifications', verifyTokenMiddleware, UserController.clearNotifications)
router.put('/unfollow', verifyTokenMiddleware, UserController.unFollow)
router.put('/changepassword', verifyTokenMiddleware, UserController.changePassword)
router.put('/edituser', verifyTokenMiddleware, editUserMiddleware, UserController.editUser)
router.put('/imageprofile', verifyTokenMiddleware, imageUpload.single('image'), UserController.imageProfileUpdate)
router.get('/currentuser', verifyTokenMiddleware, UserController.getUserByToken)
router.get('/:username', UserController.getUserByUsername)


export default router