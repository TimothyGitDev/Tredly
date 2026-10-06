import { NextFunction, Request, Response } from 'express'
import { AuthService } from './auth.service'

const authService = new AuthService()

export const authController = {
	async register(req: Request, res: Response, next: NextFunction) {
		try {
			const { username, password } = req.body
			const response = await authService.register(username, password)
			res.status(201).json(response)
		} catch (error) {
			next(error)
		}
	},
	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const { username, password } = req.body
			const response = await authService.login(username, password)
			res.status(201).json(response)
		} catch (error) {
			next(error)
		}
	},
}
