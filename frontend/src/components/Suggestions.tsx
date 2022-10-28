import cn from 'classnames'
import { useEffect, useRef } from 'react'

interface ISuggestions {
	words: string[]
	onWordClick: (value: string) => void
}

const Suggestions = ({ words, onWordClick }: ISuggestions) => {
	const component = useRef<HTMLDivElement>(null)

	const handleClick = (word: string) => {
		onWordClick(word)
	}

	useEffect(() => {
		const buttons = Array.from(component.current?.querySelectorAll('button') || [])
		if (!buttons.length) return

		buttons[0]?.focus()

		const handleKeyDown = (event: KeyboardEvent) => {
			if (!['ArrowLeft', 'ArrowRight'].includes(event.code)) return

			const focusedButton = buttons.filter((button) => button === document.activeElement)[0]
			const focusedButtonIndex = buttons.indexOf(focusedButton)

			if (!focusedButton) {
				buttons[0]?.focus()
			} else {
				if (event.code === 'ArrowLeft') buttons[focusedButtonIndex - 1]?.focus()
				if (event.code === 'ArrowRight') buttons[focusedButtonIndex + 1]?.focus()
			}
		}

		window.document.addEventListener('keydown', handleKeyDown)
		return () => {
			window.document.removeEventListener('keydown', handleKeyDown)
		}
	}, [words])

	return (
		<div
			ref={component}
			className={cn(
				{ 'relative border-b-[1px] border-gray-600 -mx-2': true },
				{ 'before:absolute before:z-10 before:top-0 before:bottom-0 before:left-0 before:w-8 before:bg-gradient-to-r before:from-gray-800': true },
				{ 'after:absolute after:z-10 after:top-0 after:bottom-0 after:right-0 after:w-8 after:bg-gradient-to-l after:from-gray-800': true }
			)}
		>
			<div className='min-h-[41px] flex flex-row flex-nowrap px-2 overflow-hidden'>
				{words.map((word, index) => (
					<button
						key={`suggestions-word-${index}`}
						type='button'
						onClick={() => handleClick(word)}
						className={cn(
							{ 'relative flex-grow text-center whitespace-nowrap text-md text-gray-100 bg-gray-800 p-2 border-r-[1px] last:border-r-0 border-gray-600': true },
							{ 'transition-colors hover:bg-primary/20 hover:z-20 focus:bg-primary/20 focus:outline-none focus:z-20': true }
						)}
					>
						{word}
					</button>
				))}
			</div>
		</div>
	)
}

export default Suggestions
