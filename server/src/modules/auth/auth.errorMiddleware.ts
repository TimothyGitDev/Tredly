import { NextFunction, Request, Response } from 'express'
import { HttpError } from '../../utils/HttpError'

export function errorMiddleware(
	err: unknown,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (err instanceof HttpError) {
		return res.status(err.status).json({ message: err.message })
	}

	console.log(err)
	return res.status(500).json({ message: 'Ошибка на сервере' })
}
