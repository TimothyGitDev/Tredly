import { prisma } from '../../../prisma/lib/prisma'

export class ThreadService {
	async createThread(title: string, content: string, authorId: string) {
		const newThread = await prisma.thread.create({
			data: {
				title,
				content,
				authorId,
			},
		})
		return {
			message: 'Пост успешно создан',
			thread: newThread,
		}
	}
}
