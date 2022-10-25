import cn from 'classnames'
import { useEffect, useState } from 'react'
import { ReactComponent as AsteriskIcon } from 'assets/icons/asterisk.svg'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg'

interface IKeypad {
	className?: string
}

const keypadButtons = [
	{ digit: '1', disabled: true },
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

const Keypad = ({ className }: IKeypad) => {
	const [value, setValue] = useState('')

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (new RegExp('^Digit[2-9]$').test(event.code)) setValue(value + event.key.toString())
			if (event.code === 'Backspace') setValue(value.slice(0, -1))
		}

		window.document.addEventListener('keydown', handleKeyDown)
		return () => {
			window.document.removeEventListener('keydown', handleKeyDown)
		}
	}, [value])

	return (
		<div className={cn(className, 'grid grid-rows-4 grid-cols-3 gap-4')}>
			{keypadButtons.map(({ digit, text, disabled }, index) => (
				<button
					key={`keypad-button-${index}`}
					type='button'
					className='inline-flex flex-row flex-nowrap justify-center items-baseline gap-2 text-gray-100 bg-gray-900 p-4 rounded-xl'
					disabled={disabled}
					onClick={() => setValue(index === keypadButtons.length - 1 ? value.slice(0, -1) : value + digit)}
				>
					{digit && <span className='text-4xl leading-none pointer-events-none'>{digit}</span>}
					{text && <span className='text-xl leading-none pointer-events-none'>{text}</span>}
				</button>
			))}

			{value && <h3>{value}</h3>}
		</div>
	)
}

export default Keypad
