export class ApiError extends Error {
	constructor(message: string, public status: number) {
		super(message)
	}
}

export class NetworkError extends Error {
	constructor(message = 'Нет соединения') {
		super(message)
		this.name = 'NetworkError'
	}
}
