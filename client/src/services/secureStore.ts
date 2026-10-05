import { IUser } from '@/@types/user.types'
import * as SecureStore from 'expo-secure-store'

const TOKEN_KEY = 'auth_token'
const USER_KEY = 'user_key'

export const TokenStorage = {
	async getToken() {
		return SecureStore.getItemAsync(TOKEN_KEY)
	},

	async setToken(token: string) {
		await SecureStore.setItemAsync(TOKEN_KEY, token)
	},

	async removeToken() {
		await SecureStore.deleteItemAsync(TOKEN_KEY)
	},
}

export const UserStorage = {
	async getUser(): Promise<IUser | null> {
		const raw = await SecureStore.getItemAsync(USER_KEY)
		if (!raw) return null
		return JSON.parse(raw) as IUser
	},

	async setUser(user: IUser) {
		await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user))
	},

	async logout() {
		await SecureStore.deleteItemAsync(USER_KEY)
		await SecureStore.deleteItemAsync(TOKEN_KEY)
	},
}
