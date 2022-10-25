import { useEffect, useRef } from 'react'

interface ISuggestions {
	words: string[]
	onAcceptWord: (value: string) => void
}

const Suggestions = ({ words, onAcceptWord }: ISuggestions) => {
	const firstSuggestionButton = useRef<HTMLButtonElement>(null)

	const handleClick = (word: string) => {
		onAcceptWord(word)
	}

	/* TODO: Check if works - Focus button with first suggestion whenever words changes */
	useEffect(() => {
		firstSuggestionButton.current?.focus()
	}, [words])

	return (
		<div className={'text-gray-900 bg-gray-200 rounded-xl'}>
			<div className={'grid grid-rows-1 grid-cols-3'}>
				{words.slice(0, 3).map((word, index) => (
					<button
						key={`suggestions-main-word-${index}`}
						type='button'
						onClick={() => handleClick(word)}
						className='text-center text-lg border-x-[1px] border-gray-300 first:border-l-0 last:border-r-0 p-2'
						ref={index === 0 ? firstSuggestionButton : undefined}
					>
						{word}
					</button>
				))}
			</div>
			<div className={'grid grid-rows-1 grid-cols-5 border-t-[2px] border-gray-300'}>
				{words.slice(3).map((word, index) => (
					<button
						key={`suggestions-other-word-${index}`}
						type='button'
						onClick={() => handleClick(word)}
						className='text-center text-sm border-x-[1px] border-gray-300 first:border-l-0 last:border-r-0 p-2'
					>
						{word}
					</button>
				))}
			</div>
		</div>
	)
}

export default Suggestions
