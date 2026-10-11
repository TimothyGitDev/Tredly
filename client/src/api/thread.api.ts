import { IThread } from '@/@types/threads.types'
import { request } from './request'

type ThreadResponse = {
	message: string
	thread: IThread
}

export const threadApi = {
	async createThread(title: string, content: string): Promise<ThreadResponse> {
		return await request('/thread/create', {
			method: 'POST',

			body: JSON.stringify({ title, content }),
		})
	},

	async getThreads(): Promise<IThread> {
		return await request('/thread/getThreads', {
			method: 'GET',
		})
	},
}
