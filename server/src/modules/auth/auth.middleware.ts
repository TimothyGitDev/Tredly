import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { AppError } from '../../utils/AppError'

export const middlewareAuth = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const header = req.headers.authorization
	if (!header || !header.startsWith('Bearer')) {
		throw new AppError('Нету токена', 401)
	}
	const token = header?.split(' ')[1]
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		;(req as any).user = decoded
		next()
	} catch (error) {
		next(new AppError('Не валидный токен', 401))
	}
}
