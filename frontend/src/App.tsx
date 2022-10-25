import Display from 'components/Display'
import Header from 'components/Header'
import Keypad from 'components/Keypad'
import Legend from 'components/Legend'
import Suggestions from 'components/Suggestions'
import { useState } from 'react'

const App = () => {
	const [input, setInput] = useState('')
	const [output, setOutput] = useState('')

	const suggestedWords = ['den', 'debora', 'debounce', 'deno', 'dinosaur', 'doggo', 'doberman']

	const handleAcceptWord = (value: string) => {
		setOutput(output.length === 0 ? value : `${output} ${value}`)
	}

	const handleInputChange = (value: string) => {
		setInput(value)
		if (value.endsWith('1')) setOutput(`${output} `)
	}

	return (
		<>
			<Header className='text-xl p-4 mb-40' />
			<main className='w-6/12 flex flex-col flex-nowrap justify-center gap-4 mx-auto'>
				<Display input={input} output={output} />
				<Suggestions words={suggestedWords} onAcceptWord={handleAcceptWord} />
				<Keypad input={input} onInputChange={handleInputChange} />
			</main>
			<aside>
				<Legend />
			</aside>
		</>
	)
}

export default App
