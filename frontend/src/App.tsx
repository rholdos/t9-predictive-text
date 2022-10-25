import Display from 'components/Display'
import Header from 'components/Header'
import Keypad from 'components/Keypad'
import Legend from 'components/Legend'
import Phone from 'components/Phone'
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
			<Header />
			<main className='max-w-[1200px] flex flex-row flex-nowrap justify-evenly items-center gap-8 mx-auto'>
				<Legend />
				<Phone
					content={<Display input={input} output={output} />}
					keyboard={
						<>
							<Suggestions words={suggestedWords} onAcceptWord={handleAcceptWord} />
							<Keypad input={input} onInputChange={handleInputChange} />
						</>
					}
				/>
			</main>
		</>
	)
}

export default App
