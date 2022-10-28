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

class Trie {
	public words: string[]
	public nodes: { [key: number]: Trie }

	public constructor() {
		this.words = []
		this.nodes = {}
	}

	public insert(word: string) {
		const nodeToAddWordTo = traverseNodes(this)
		addWordToNode(nodeToAddWordTo, word)

		function traverseNodes(node: Trie) {
			let i = 0

			// Traverse existing nodes
			for (i; i < word.length; i++) {
				const digit = T9Keys[word[i]]
				if (Object.prototype.hasOwnProperty.call(node.nodes, digit)) {
					node = node.nodes[digit]
				} else break
			}

			// If reached end, continue and create new nodes
			for (i; i < word.length; i++) {
				const digit = T9Keys[word[i]]
				node.nodes[digit] = new Trie()
				node = node.nodes[digit]
			}

			return node
		}

		function addWordToNode(node: Trie, word: string) {
			node.words.push(word)
		}
	}

	public getSuggestions(input: string, suggestionDepth: number) {
		let node: Trie = this
		let results: string[] = []

		// Traverse nodes according to user input and return the last one
		for (let i = 0; i < input.length; i++) {
			const digit = parseInt(input[i])
			if (!Object.prototype.hasOwnProperty.call(node.nodes, digit)) break
			node = node.nodes[digit]
		}

		// Add all the words from found node to the results
		results = results.concat(node.words)

		// If deeper results are required
		// -> then: traverse down every possible branch from the point we previously arrived at, adding words to the results and stopping on specified depth
		// -> else: return shallowResults
		return suggestionDepth > 0 ? results.concat(getDeeperSuggestions(node, suggestionDepth)) : results

		function getDeeperSuggestions(node: Trie, maxDepth: number) {
			// suggestions is an array with (maxDepth) sub-arrays, Traverse function fills in with results
			let suggestions: string[][] = []
			while (suggestions.length < maxDepth) suggestions.push([])
			traverse(node, 0)

			// Sort words in each level individually by word length, put shorter words first
			suggestions = suggestions.map((level) => level.sort((a, b) => b.length - a.length))

			// suggestions is an array of arrays of words. Merge into 1 array and return
			return suggestions.reduce((results, level) => results.concat(level), [])

			function traverse(node: Trie, depth: number) {
				if (depth !== 0 && depth <= maxDepth) suggestions[depth - 1] = suggestions[depth - 1].concat(node.words)
				if (depth === maxDepth) return
				for (const nodeKey in node.nodes) traverse(node.nodes[nodeKey], depth + 1)
			}
		}
	}
}

export default Trie
