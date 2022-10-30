import cors from 'cors'
import express, { Express, json, Request, Response } from 'express'
import parseDictionaryFileIntoTrie from 'lib/parse-dictionary'

const PORT = 3000
const DICTIONARY_FILE = 'src/assets/dictionary-en.txt'
const SUGGESTIONS_DEPTH = 5
const MAX_SUGGESTIONS = 25

const app: Express = express()

app.use(cors({ origin: ['http://localhost:8000', 'http://127.0.0.1:8000'] }))
app.use(json())

app.post('/', (req: Request, res: Response) => {
	req.setTimeout(10000)

	const { input } = req.body

	if (!input) {
		return res.status(500).send({ error: 'Input not provided' })
	}

	if (typeof input !== 'string') {
		return res.status(500).send({ error: "Input must be type of 'string'" })
	}

	try {
		const suggestions: string[] = app.get('dictionaryTrie').getSuggestions(input, SUGGESTIONS_DEPTH)
		return res.status(200).send({ suggestions: suggestions.slice(0, MAX_SUGGESTIONS) })
	} catch (error) {
		return res.status(500).send({ error: error })
	}
})

app.listen(PORT, async () => {
	app.set('dictionaryTrie', await parseDictionaryFileIntoTrie(DICTIONARY_FILE))
	console.log(`\nServer is up and running at http://localhost:${PORT}\n`)
})
