export type IThread = {
	id: string
	title: string
	author: {
		id: string
		username: string
		avatar?: string
	}
	content: string
	createdAt: Date
}
