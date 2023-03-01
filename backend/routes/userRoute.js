import express from 'express'
import middlewareController from '../controllers/middlewareController.js'
import userController from '../controllers/userController.js'

const userRouter = express.Router()
//, middlewareController.verifyToken
userRouter.get('/', userController.getAllUser)
userRouter.get('/:id', userController.getUser)
userRouter.put('/:id', userController.updateUser)
userRouter.delete('/:id', middlewareController.verifyTokenAdmin, userController.deleteUser)

export default userRouter