import { once } from 'node:events'
import { createReadStream, existsSync } from 'node:fs'
import { createInterface } from 'node:readline'
import Trie from './trie'

const parseDictionaryFileIntoTrie = async (filePath: string) => {
	const dictionaryTrie = new Trie()

	if (!existsSync(filePath)) throw new Error('Dictionary file not found')

	const rl = createInterface({
		input: createReadStream(filePath),
		crlfDelay: Infinity
	})

	rl.on('line', (line) => dictionaryTrie.insert(line))

	await once(rl, 'close')

	return dictionaryTrie
}

export default parseDictionaryFileIntoTrie
