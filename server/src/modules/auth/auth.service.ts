import argon2 from 'argon2'
import { prisma } from '../../../prisma/lib/prisma'
import { AppError } from '../../utils/AppError'
import { generateToken } from './auth.generateToken'

export class AuthService {
	async register(username: string, password: string) {
		const candidate = await prisma.user.findUnique({
			where: {
				username,
			},
		})
		if (candidate) {
			throw new AppError('Username уже занят', 400)
		}
		const hashPassword = await argon2.hash(password, {
			type: argon2.argon2id,
		})
		const newUser = await prisma.user.create({
			data: {
				username,
				password: hashPassword,
			},
			select: {
				id: true,
				username: true,
				avatar: true,
				createdAt: true,
			},
		})

		const JWTtoken = generateToken({ id: newUser.id })
		return {
			message: 'Вы успешно зарегистрированы',
			user: newUser,
			token: JWTtoken,
		}
	}
	async login(username: string, password: string) {
		const user = await prisma.user.findUnique({
			where: {
				username,
			},
			select: {
				id: true,
				username: true,
				avatar: true,
				createdAt: true,
				password: true,
			},
		})
		if (!user) {
			throw new AppError('Неверные данные', 401)
		}
		const isValid = await argon2.verify(user.password, password)
		if (isValid) {
			const JWTtoken = generateToken({ id: user.id })
			return {
				message: 'Вы успешно залогинены',
				user: {
					id: user.id,
					username: user.username,
					avatar: user.avatar,
					createdAt: user.createdAt,
				},
				token: JWTtoken,
			}
		} else {
			throw new AppError('Неверные данные', 401)
		}
	}
}
