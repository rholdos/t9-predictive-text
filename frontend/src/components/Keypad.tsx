import { ReactComponent as AsteriskIcon } from 'assets/icons/asterisk.svg'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg'
import { ReactComponent as SpacebarIcon } from 'assets/icons/spacebar.svg'
import cn from 'classnames'
import { useCallback, useEffect, useState } from 'react'

const DIGIT_INSERT_DELAY = 300

const keypadButtons = [
	{ digit: '1', text: <SpacebarIcon /> },
	{ digit: '2', text: 'abc' },
	{ digit: '3', text: 'def' },
	{ digit: '4', text: 'ghi' },
	{ digit: '5', text: 'jkl' },
	{ digit: '6', text: 'mno' },
	{ digit: '7', text: 'pqrs' },
	{ digit: '8', text: 'tuv' },
	{ digit: '9', text: 'wxyz' },
	{ digit: <AsteriskIcon />, disabled: true },
	{ digit: '0', disabled: true },
	{ digit: <DeleteIcon /> }
]

interface IKeypad {
	input: string
	output: string
	handleInputChange: (value: string) => void
	handleInputLetterChange: (value?: string) => void
	handleOutputChange: (value: string) => void
	handleClearSuggestions: () => void
}

const Keypad = ({ input, output, handleInputChange, handleInputLetterChange, handleOutputChange, handleClearSuggestions }: IKeypad) => {
	const [pressedKey, setPressedKey] = useState<{ digit: string; letter: string } | undefined>(undefined)
	const [lastPressedKey, setLastPressedKey] = useState<{ digit: string; letter: string } | undefined>(undefined)

	const handleDeleteDigit = useCallback(() => {
		handleInputChange(input.slice(0, -1))
	}, [input, handleInputChange])

	const handleAddSpace = useCallback(() => {
		handleInputChange('')
		handleClearSuggestions()
		handleOutputChange(output + ' ')
	}, [output, handleInputChange, handleOutputChange, handleClearSuggestions])

	const handleAddDigitInvoke = useCallback(
		(digit: string) => {
			const button = keypadButtons.find((button) => button.digit === digit)
			if (!button) return
			const buttonDigit = button.digit as string
			const buttonLetters = (button.text as string).split('')

			if (!pressedKey) {
				const firstLetter = buttonLetters[0]
				setPressedKey({ digit: buttonDigit, letter: firstLetter })
			} else if (pressedKey.digit === digit) {
				const nextLetter = buttonLetters[buttonLetters.indexOf(pressedKey.letter) + 1] || buttonLetters[0]
				setPressedKey({ digit: buttonDigit, letter: nextLetter })
			} else {
				const firstLetter = buttonLetters[0]
				setPressedKey({ digit: buttonDigit, letter: firstLetter })
			}
		},
		[pressedKey]
	)

	const handleAddDigit = useCallback(
		(key: typeof pressedKey) => {
			if (!key) return
			setLastPressedKey(undefined)
			handleInputLetterChange(undefined)
			handleInputChange(input + key.digit)
			handleOutputChange(output + key.letter)
		},
		[input, output, handleInputLetterChange, handleInputChange, handleOutputChange]
	)

	useEffect(() => {
		if (!pressedKey) return

		let timeoutRef: number | undefined

		handleInputLetterChange(pressedKey.letter)

		if (!lastPressedKey) {
			setLastPressedKey(pressedKey)
			timeoutRef = setTimeout(() => handleAddDigit(pressedKey), DIGIT_INSERT_DELAY)
		} else if (lastPressedKey.digit === pressedKey.digit) {
			setLastPressedKey(pressedKey)
			clearTimeout(timeoutRef)
			timeoutRef = setTimeout(() => handleAddDigit(pressedKey), DIGIT_INSERT_DELAY)
		} else {
			handleAddDigit(lastPressedKey)
			setLastPressedKey(pressedKey)
			timeoutRef = setTimeout(() => handleAddDigit(pressedKey), DIGIT_INSERT_DELAY)
		}

		return () => {
			clearTimeout(timeoutRef)
		}
	}, [pressedKey])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.code === 'Backspace') handleDeleteDigit()
			if (event.code === 'Digit1') handleAddSpace()
			if (new RegExp('^Digit[2-9]$').test(event.code)) handleAddDigitInvoke(event.key)
		}

		window.document.addEventListener('keydown', handleKeyDown)
		return () => {
			window.document.removeEventListener('keydown', handleKeyDown)
		}
	}, [handleDeleteDigit, handleAddSpace, handleAddDigitInvoke])

	return (
		<div className={'grid grid-rows-4 grid-cols-3 gap-1'}>
			{keypadButtons.map(({ digit, text, disabled }, index) => (
				<button
					key={`keypad-button-${index}`}
					id={`keypad-button-${index}`}
					type='button'
					disabled={disabled}
					onClick={() => {
						switch (index) {
							case keypadButtons.length - 1:
								handleDeleteDigit()
								break
							case 0:
								handleAddSpace()
								break
							default:
								handleAddDigitInvoke(digit as string)
								break
						}
					}}
					className={cn(
						{ 'inline-flex flex-row flex-nowrap justify-center items-baseline gap-1.5 text-gray-100 bg-gray-700 p-3 rounded-lg': true },
						{ 'transition-colors hover:bg-gray-600 focus:bg-gray-600 focus:outline-none active:bg-gray-500 active:outline-none': !disabled }
					)}
				>
					{digit && <span className='text-2xl leading-none pointer-events-none'>{digit}</span>}
					{text && <span className='text-md leading-none pointer-events-none'>{text}</span>}
				</button>
			))}
		</div>
	)
}

export default Keypad
