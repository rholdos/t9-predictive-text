import Display from 'components/Display'
import Header from 'components/Header'
import Keypad from 'components/Keypad'
import Legend from 'components/Legend'
import Phone from 'components/Phone'
import Suggestions from 'components/Suggestions'
import axios from 'lib/axios'
import { useState } from 'react'

const App = () => {
	const [input, setInput] = useState<string>('')
	const [output, setOutput] = useState<string>('')
	const [suggestions, setSuggestions] = useState<string[]>([])

	const handleInputChange = (value: string) => {
		if (!value) {
			setInput('')
			setSuggestions([])
		} else if (value.endsWith('1')) {
			setOutput(`${output} `)
		} else {
			setInput(value)
			fetchSuggestions(value)
		}
	}

	const fetchSuggestions = async (input: string) => {
		const response = await axios.post('/', { input: input })
		const suggestions: string[] = response.data.suggestions
		if (suggestions.length) {
			setSuggestions(suggestions)
		}
	}

	const handleInsertSuggestion = (value: string) => {
		setOutput(output.length === 0 ? value : `${output} ${value}`)
		setInput('')
		setSuggestions([])
	}

	const handleClear = () => {
		setInput('')
		setSuggestions([])
		setOutput('')
	}

	return (
		<>
			<Header />
			<main className='max-w-[1200px] flex flex-row flex-wrap justify-evenly items-center gap-8 my-16 mx-auto'>
				<Phone
					content={<Display input={input} output={output} onClear={handleClear} />}
					keyboard={
						<>
							<Suggestions words={suggestions} onWordClick={handleInsertSuggestion} />
							<Keypad input={input} onInputChange={handleInputChange} />
						</>
					}
				/>
				<Legend />
			</main>
		</>
	)
}

export default App
