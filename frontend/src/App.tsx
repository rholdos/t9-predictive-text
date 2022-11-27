import Display from 'components/Display'
import Keypad from 'components/Keypad'
import Legend from 'components/Legend'
import Phone from 'components/Phone'
import Suggestions from 'components/Suggestions'
import axios from 'lib/axios'
import { useState } from 'react'

const App = () => {
	const [input, setInput] = useState<string>('')
	const [inputLetter, setInputLetter] = useState<string | undefined>(undefined)
	const [output, setOutput] = useState<string>('')
	const [suggestions, setSuggestions] = useState<string[]>([])

	const handleInputChange = (value: string) => {
		if (!value) {
			setInput('')
			setSuggestions([])
			setOutput(`${output.trim()} `)
		} else {
			setInput(value)
			fetchSuggestions(value)
		}
	}

	const handleInputLetterChange = (value?: string) => {
		setInputLetter(value || undefined)
	}

	const handleOutputChange = (value: string) => {
		setOutput(value)
	}

	const fetchSuggestions = async (input: string) => {
		const response = await axios.post('/', { input: input })
		const suggestions: string[] = response.data.suggestions
		if (suggestions.length) {
			setSuggestions(suggestions)
		}
	}

	const handleInsertSuggestion = (suggestedWord: string) => {
		const words = output.split(' ')

		let newOutput = ''
		words.forEach((word, index) => (newOutput += `${index === words.length - 1 ? suggestedWord : word} `))

		setInput('')
		setSuggestions([])
		setOutput(newOutput)
	}

	const handleClearSuggestions = () => {
		setSuggestions([])
	}

	const handleClear = () => {
		setInput('')
		setSuggestions([])
		setOutput('')
	}

	return (
		<main className='w-full max-w-[1200px] h-full flex flex-row flex-wrap justify-evenly items-center gap-8 mx-auto'>
			<Phone
				content={<Display input={input} inputLetter={inputLetter} output={output} handleClear={handleClear} />}
				keyboard={
					<>
						<Suggestions words={suggestions} handleInsertSuggestion={handleInsertSuggestion} />
						<Keypad
							input={input}
							output={output}
							handleInputChange={handleInputChange}
							handleInputLetterChange={handleInputLetterChange}
							handleOutputChange={handleOutputChange}
							handleClearSuggestions={handleClearSuggestions}
						/>
					</>
				}
			/>
			<Legend />
		</main>
	)
}

export default App
