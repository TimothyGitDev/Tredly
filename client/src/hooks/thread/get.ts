import { IThread } from '@/@types/threads.types'
import { threadApi } from '@/api/thread.api'

export const get = async (): Promise<IThread[]> => {
	return threadApi.getThreads()
}
