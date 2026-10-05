import { authApi } from '@/api/auth.api'
import { TokenStorage, UserStorage } from '@/services/secureStore'
import { router } from 'expo-router'

export const login = async (username: string, password: string) => {
	const data = await authApi.login(username, password)

	await TokenStorage.setToken(data.token)
	await UserStorage.setUser(data.user)

	router.replace('/(app)')
}
