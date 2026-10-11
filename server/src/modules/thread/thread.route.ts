import express from 'express'
import { middlewareAuth } from '../auth/auth.middleware'
import { threadController } from './thread.controller'

const router = express.Router()

router.post('/create', middlewareAuth, threadController.createThread)
router.get('/getThreads', middlewareAuth, threadController.getThreads)

export { router }
