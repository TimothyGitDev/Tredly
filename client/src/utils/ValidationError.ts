import { HttpError } from './HttpError'

export class ValidationError extends HttpError {
	constructor(message: string, status: number) {
		super(message, status)
		this.name = 'ValidationError'
	}
}
