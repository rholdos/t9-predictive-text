import { ReactComponent as AsteriskIcon } from 'assets/icons/asterisk.svg'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg'
import { ReactComponent as SpacebarIcon } from 'assets/icons/spacebar.svg'
import { useCallback, useEffect } from 'react'

interface IKeypad {
	input: string
	onInputChange: (value: string) => void
}

const Keypad = ({ input, onInputChange }: IKeypad) => {
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

	const handleAddDigit = useCallback(
		(digit: string) => {
			onInputChange(input + digit)
		},
		[input, onInputChange]
	)

	const handleDeleteDigit = useCallback(() => {
		onInputChange(input.slice(0, -1))
	}, [input, onInputChange])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (new RegExp('^Digit[1-9]$').test(event.code)) handleAddDigit(event.key.toString())
			if (event.code === 'Backspace') handleDeleteDigit()
		}

		window.document.addEventListener('keydown', handleKeyDown)
		return () => {
			window.document.removeEventListener('keydown', handleKeyDown)
		}
	}, [input, handleAddDigit, handleDeleteDigit])

	return (
		<div className={'grid grid-rows-4 grid-cols-3 gap-4'}>
			{keypadButtons.map(({ digit, text, disabled }, index) => (
				<button
					key={`keypad-button-${index}`}
					type='button'
					disabled={disabled}
					onClick={() =>
						index === keypadButtons.length - 1 ? handleDeleteDigit() : handleAddDigit(digit as string)
					}
					className='inline-flex flex-row flex-nowrap justify-center items-baseline gap-2 text-gray-100 bg-gray-900 p-4 rounded-xl'
				>
					{digit && <span className='text-4xl leading-none pointer-events-none'>{digit}</span>}
					{text && <span className='text-xl leading-none pointer-events-none'>{text}</span>}
				</button>
			))}
		</div>
	)
}

export default Keypad
