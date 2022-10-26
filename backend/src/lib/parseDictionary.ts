import { once } from 'node:events'
import { createReadStream } from 'node:fs'
import { createInterface } from 'node:readline'
// import Trie from './trie'

const parseDictionary = async () => {
	try {
		const rl = createInterface({
			input: createReadStream('src/assets/dictionary.txt'),
			crlfDelay: Infinity
		})
		rl.on('line', (line) => {
			/* TODO: push words to some const via Trie class */
		})
		await once(rl, 'close')
		console.log('SUCCESS: File processed')
	} catch (error) {
		console.error('ERROR: File processing failed', error)
	}
}

export default parseDictionary