import Display from 'components/Display'
import Header from 'components/Header'
import Keypad from 'components/Keypad'
import Legend from 'components/Legend'
import Phone from 'components/Phone'
import Suggestions from 'components/Suggestions'
import axios from 'lib/axios'
import { useEffect, useState } from 'react'

const App = () => {
	const [input, setInput] = useState<string>('')
	const [output, setOutput] = useState<string>('')
	const [suggestions, setSuggestions] = useState<string[]>([])

	const handleInputChange = (value: string) => {
		setInput(value)
		if (value.endsWith('1')) setOutput(`${output} `)
	}

	const handleClear = () => {
		setInput('')
		setOutput('')
	}

	const handleAcceptWord = (value: string) => {
		setOutput(output.length === 0 ? value : `${output} ${value}`)
	}

	const fetchT9Output = async (input: string) => {
		const { data } = await axios.post('/', { input: input })
		setOutput(data.output)
	}

	useEffect(() => {
		fetchT9Output(input)
	}, [input])

	useEffect(() => {
		setSuggestions(['den', 'debora', 'debounce', 'deno', 'dinosaur', 'doggo', 'doberman', 'doberman', 'doberman', 'doberman'])
	}, [])

	return (
		<>
			<Header />
			<main className='max-w-[1200px] flex flex-row flex-wrap justify-evenly items-center gap-8 my-16 mx-auto'>
				<Phone
					content={<Display input={input} output={output} onClear={handleClear} />}
					keyboard={
						<>
							<Suggestions words={suggestions} onAcceptWord={handleAcceptWord} />
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
