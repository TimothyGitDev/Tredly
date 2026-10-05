import express from 'express'
import { authController } from './auth.controller'

const router = express.Router()
const registerRoute = authController.register
const loginRoute = authController.login

router.post('/registration', registerRoute)
router.post('/login', loginRoute)

export { router }
