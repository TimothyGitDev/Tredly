import { IUser } from '@/@types/user.types'
import { request } from './request'

type AuthResponse = {
	user: IUser
	token: string
}

export const authApi = {
	async login(username: string, password: string): Promise<AuthResponse> {
		return await request<AuthResponse>('/auth/login', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			skipAuth: true,
		})
	},

	async register(username: string, password: string): Promise<AuthResponse> {
		return await request<AuthResponse>('/auth/registration', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			skipAuth: true,
		})
	},
}
