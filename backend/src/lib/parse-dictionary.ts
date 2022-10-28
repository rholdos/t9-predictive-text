import { once } from 'node:events'
import { createReadStream } from 'node:fs'
import { createInterface } from 'node:readline'
import Trie from './trie'

const parseDictionary = async () => {
	const dictionaryTrie = new Trie()

	try {
		const rl = createInterface({
			input: createReadStream('src/assets/dictionary-en.txt'),
			crlfDelay: Infinity
		})
		rl.on('line', (line) => dictionaryTrie.insert(line))
		await once(rl, 'close')
	} catch (error) {
		console.error('ERROR: Dictionary file processing failed')
		console.error(error)
	}

	return dictionaryTrie
}

export default parseDictionary
