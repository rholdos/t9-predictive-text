import express, { Express, Request, Response } from 'express'

const PORT = 3000

const app: Express = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
	res.status(200).send('Express server')
})

app.post('/convert', (req: Request, res: Response) => {
	res.status(200).send({
		message: 'POST request /convert'
	})
})

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`)
})
