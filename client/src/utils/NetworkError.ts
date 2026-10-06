export class NetworkError extends Error {
	constructor(message = 'Нет соеденения') {
		super(message)
		this.name = 'NetworkError'
	}
}
