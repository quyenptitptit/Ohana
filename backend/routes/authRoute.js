import express from "express";
import authController from "../controllers/authController.js";
import middlewareController from "../controllers/middlewareController.js";

const authRouter = express.Router()

authRouter.post('/register', authController.registerUser)
authRouter.post('/login', authController.loginUser)
authRouter.post('/refresh', authController.refreshToken)
authRouter.post('/logout', middlewareController.verifyToken, authController.userLoggout)
// authRouter.post('/sendEmail', authController.sendEmail)

export default authRouter