import { NextFunction, Request, Response } from 'express'
import { AppError } from '../../utils/AppError'

export function errorMiddleware(
	err: unknown,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (err instanceof AppError) {
		return res.status(err.status).json({ message: err.message })
	}

	console.log(err)
	return res.status(500).json({ message: 'Ошибка на сервере' })
}
