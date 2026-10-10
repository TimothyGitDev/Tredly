import 'dotenv/config'
import express from 'express'
import { errorMiddleware } from './modules/auth/auth.errorMiddleware'
import { router as authRouter } from './modules/auth/auth.route'
import { router as threadRouter } from './modules/thread/thread.route'

const app = express()
app.use(express.json())

function main() {
	app.use('/auth', authRouter)
	app.use('/thread', threadRouter)
	app.use(errorMiddleware)

	app.listen(process.env.PORT || 3000, () => {
		console.log(`Server is running on ${process.env.PORT} port`)
	})
}

main()
