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
	async getThreads() {
		const threads = await prisma.thread.findMany({
			orderBy: { createdAt: 'desc' },
			select: {
				id: true,
				title: true,
				content: true,
				createdAt: true,
				author: {
					select: {
						id: true,
						username: true,
						avatar: true,
					},
				},
			},
		})

		return threads
	}
}
