import { login } from './login'
import { registration } from './registration'

export const useAuth = () => {
	login
	registration

	return { login, registration }
}
