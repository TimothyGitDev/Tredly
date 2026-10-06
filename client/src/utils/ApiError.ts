import { HttpError } from './HttpError'

export class ApiError extends HttpError {
	constructor(message: string, status: number) {
		super(message, status)
		this.name = 'ApiError'
	}
}
