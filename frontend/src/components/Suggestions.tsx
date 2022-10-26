import cn from 'classnames'
import { useEffect, useRef } from 'react'

interface ISuggestions {
	words: string[]
	onAcceptWord: (value: string) => void
}

const Suggestions = ({ words, onAcceptWord }: ISuggestions) => {
	const component = useRef<HTMLDivElement>(null)

	const handleClick = (word: string) => {
		onAcceptWord(word)
	}

	useEffect(() => {
		const allButtons = Array.from(component.current?.querySelectorAll('button') || [])
		if (!allButtons.length) return

		const handleKeyDown = (event: KeyboardEvent) => {
			if (!['ArrowLeft', 'ArrowRight'].includes(event.code)) return

			const focusedButton = allButtons.filter((button) => button === document.activeElement)[0]
			const focusedButtonIndex = allButtons.indexOf(focusedButton)

			if (!focusedButton) {
				allButtons[0]?.focus()
			} else {
				if (event.code === 'ArrowLeft') allButtons[focusedButtonIndex - 1]?.focus()
				if (event.code === 'ArrowRight') allButtons[focusedButtonIndex + 1]?.focus()
			}
		}

		window.document.addEventListener('keydown', handleKeyDown)
		return () => {
			window.document.removeEventListener('keydown', handleKeyDown)
		}
	}, [words])

	return (
		<div ref={component}>
			<div className={'grid grid-rows-1 grid-cols-3'}>
				{words.slice(0, 3).map((word, index) => (
					<button
						key={`suggestions-primary-word-${index}`}
						type='button'
						onClick={() => handleClick(word)}
						className={cn(
							{ 'text-center text-md text-gray-100 p-2 border-r-[1px] last:border-r-0 border-gray-600': true },
							{ 'transition-colors hover:bg-primary/20 focus:bg-primary/20 focus:outline-none': true }
						)}
					>
						{word}
					</button>
				))}
			</div>
			{words.length > 3 && (
				<div className='flex flex-row flex-nowrap border-t-[1px] border-gray-600 overflow-hidden'>
					{words.slice(3).map((word, index) => (
						<button
							key={`suggestions-secondary-word-${index}`}
							type='button'
							onClick={() => handleClick(word)}
							className={cn(
								{ 'text-center text-sm text-gray-100 p-2 border-r-[1px] last:border-r-0 border-gray-600': true },
								{ 'transition-colors hover:bg-primary/20 focus:bg-primary/20 focus:outline-none': true }
							)}
						>
							{word}
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default Suggestions
