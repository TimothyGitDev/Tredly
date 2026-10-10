import { threadApi } from '@/api/thread.api'

export const create = async (title: string, content: string) => {
	const data = await threadApi.createThread(title, content)

	return data
}
