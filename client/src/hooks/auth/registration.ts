import { authApi } from '@/api/auth.api'
import { TokenStorage, UserStorage } from '@/services/secureStore'

export const registration = async (username: string, password: string) => {
	const data = await authApi.register(username, password)
	await TokenStorage.setToken(data.token)
	await UserStorage.setUser(data.user)
	return data
}
