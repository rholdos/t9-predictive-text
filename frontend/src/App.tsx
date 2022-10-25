import Display from 'components/Display'
import Header from 'components/Header'
import Keypad from 'components/Keypad'
import Legend from 'components/Legend'
import Suggestions from 'components/Suggestions'

const App = () => {
	const suggestedWords = ['den', 'debora', 'debounce', 'deno', 'dinosaur', 'doggo', 'doberman']

	return (
		<>
			<Header className='text-xl p-4 mb-40' />
			<main className='w-6/12 flex flex-col flex-nowrap justify-center gap-4 mx-auto'>
				<Display />
				<Suggestions words={suggestedWords} />
				<Keypad />
			</main>
			<aside>
				<Legend />
			</aside>
		</>
	)
}

export default App
