import { request } from './request'

type ThreadResponse = {
	message: string
	thread: any
}

export const threadApi = {
	async createThread(title: string, content: string): Promise<ThreadResponse> {
		return await request('/thread/create', {
			method: 'POST',

			body: JSON.stringify({ title, content }),
		})
	},
}
