import { TokenStorage } from '@/services/secureStore'
import { ApiError } from './errors'

const API_URL = process.env.EXPO_PUBLIC_URL_SERVER

export async function request<T>(
	path: string,
	options: RequestInit & { skipAuth?: boolean }
): Promise<T> {
	const { skipAuth, ...init } = options
	const token = skipAuth ? null : await TokenStorage.getToken()

	const res = await fetch(`${API_URL}${path}`, {
		...init,
		headers: {
			'Content-Type': 'application/json',
			...(token && { Authorization: `Bearer ${token}` }),
			...init.headers,
		},
	})
	const data = await res.json()

	if (!res.ok) {
		throw new ApiError(data.message || 'Ошибка запроса', res.status)
	}

	return data as T
}
