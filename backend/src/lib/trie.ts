/* eslint-disable @typescript-eslint/no-this-alias */

// prettier-ignore
const T9Keys: { [key: string]: number } = {
	a: 2, b: 2, c: 2,
	d: 3, e: 3, f: 3,
	g: 4, h: 4, i: 4,
	j: 5, k: 5, l: 5,
	m: 6, n: 6, o: 6,
	p: 7, q: 7, r: 7, s: 7,
	t: 8, u: 8, v: 8,
	w: 9, x: 9, y: 9, z: 9
}

interface IWord {
	frequency: number
	phrase: string
}

class Trie {
	public children: { [key: number]: Trie }
	public words: IWord[]

	public constructor() {
		this.children = {}
		this.words = []
	}

	insert(word: IWord) {
		const traverseAddingNodes = (node: Trie) => {
			Object.values(T9Keys).forEach((digit) => {
				if (Object.prototype.hasOwnProperty.call(node.children, digit)) {
					node = node.children[digit]
				} else {
					return
				}
			})
			Object.values(T9Keys).forEach((digit) => {
				node.children[digit] = new Trie()
				node = node.children[digit]
			})
			console.log(node)
			return node
		}

		const insertWordIntoListByFrequency = (wordsList: IWord[], wordToInsert: IWord) => {
			if (wordsList.length === 0) {
				wordsList.push(wordToInsert)
			} else {
				let i = 0
				while (i < wordsList.length) {
					i++
					const comparedFrequency = wordsList[i].frequency
					const insertFrequency = wordToInsert.frequency
					if (insertFrequency >= comparedFrequency) {
						wordsList.splice(i, 0, wordToInsert)
						return
					}
				}
				wordsList.splice(i + 1, 0, wordToInsert)
			}
		}

		const nodeToInsertWordInto = traverseAddingNodes(this)
		insertWordIntoListByFrequency(nodeToInsertWordInto.words, word)
	}

	getSuggestions(input: string, suggestionDepth: number) {
		const getDeeperSuggestions = (root: Trie, maxDepth: number) => {
			const deepResults: IWord[][] = []

			const traverse = (root: Trie, depth: number) => {
				if (depth <= 0 || depth > maxDepth) return
				if (depth > 0 && depth <= maxDepth) {
					deepResults[depth - 1] = [...deepResults[depth - 1], ...root.words]
				}
				Object.values(root?.children).forEach((child) => traverse(child, depth + 1))
			}

			while (deepResults.length < maxDepth) deepResults.push([])
			traverse(root, 0)

			deepResults.map((result) => result.sort((a, b) => b.frequency - a.frequency))
			deepResults.map((result) => result.map((word) => word.phrase))

			return deepResults
		}

		let node: Trie = this
		input.split('').forEach((digit) => (node = node?.children[parseInt(digit)]))

		const shallowResults = node?.words.map(({ phrase }) => phrase) || []
		const deepResults = getDeeperSuggestions(node, suggestionDepth)
		return suggestionDepth > 0 ? [...shallowResults, ...deepResults] : shallowResults
	}
}

export default Trie
