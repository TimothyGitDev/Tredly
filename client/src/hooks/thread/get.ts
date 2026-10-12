import { IThread } from '@/@types/threads.types'
import { threadApi } from '@/api/thread.api'

export const get = async (): Promise<IThread[]> => {
	const data = await threadApi.getThreads()
	return data
}
