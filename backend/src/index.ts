import express, { Express, Request, Response } from 'express'

const PORT = 3000

const app: Express = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
	res.status(200).send('Express server')
})

app.get('/api', (req: Request, res: Response) => {
	res.json({ message: 'Hello from server API' })
})

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`)
})
