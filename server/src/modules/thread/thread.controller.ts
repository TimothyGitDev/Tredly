import { NextFunction, Request, Response } from 'express'
import { ThreadService } from './thread.service'

const threadService = new ThreadService()

export const threadController = {
	async createThread(req: Request, res: Response, next: NextFunction) {
		try {
			const { title, content } = req.body

			const response = await threadService.createThread(
				title,
				content,
				req.user!.id
			)
			res.status(201).json(response)
		} catch (error) {
			next(error)
		}
	},
}
