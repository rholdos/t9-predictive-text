import Header from 'components/Header'
import Keypad from 'components/Keypad'
import OtherSuggestions from 'components/OtherSuggestions'
import Suggestions from 'components/Suggestions'

const App = () => {
	const suggestedWords = ['den', 'debora', 'debounce']
	const otherSuggestedWords = ['deno', 'dinosaur', 'doggo', 'doberman']

	return (
		<>
			<Header className='text-xl p-4 mb-40' />
			<main className='w-6/12 flex flex-col flex-nowrap justify-center gap-4 mx-auto'>
				<Suggestions words={suggestedWords} />
				<Keypad />
				<OtherSuggestions words={otherSuggestedWords} />
			</main>
		</>
	)
}

export default App
