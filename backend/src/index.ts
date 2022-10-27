import cors from 'cors'
import express, { Express, json, Request, Response } from 'express'
import parseDictionary from 'lib/parse-dictionary'

const PORT = 3000

const app: Express = express()

app.use(json())
app.use(cors({ origin: ['http://localhost:8000', 'http://127.0.0.1:8000'] }))

app.get('/', (req: Request, res: Response) => {
	res.status(200).send('Express server')
})

app.post('/', (req: Request, res: Response) => {
	const { input } = req.body

	if (typeof input === 'string' && input.length > 1) {
		// const output = window.dictionary.getSuggestions(input, 5)
		res.status(200).send({
			output: input
		})
	}
})

app.listen(PORT, async () => {
	console.log(`\n`)
	console.log(`Server is up and running at http://localhost:${PORT}`)
	console.log(`\n`)

	const dictionaryTrie = await parseDictionary()

	console.log(`Results: ${dictionaryTrie.getSuggestions('223', 5)}`)
})
