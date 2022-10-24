import cn from 'classnames'
import { useState } from 'react'

interface IKeypad {
	className?: string
}

const keypadButtons = [
	{ digit: '1', text: '', disabled: true },
	{ digit: '2', text: 'abc' },
	{ digit: '3', text: 'def' },
	{ digit: '4', text: 'ghi' },
	{ digit: '5', text: 'jkl' },
	{ digit: '6', text: 'mno' },
	{ digit: '7', text: 'pqrs' },
	{ digit: '8', text: 'tuv' },
	{ digit: '9', text: 'wxyz' },
	{ digit: '*', text: '', disabled: true },
	{ digit: '0', text: '+', disabled: true },
	{ digit: '#', text: '' }
]

const Keypad = ({ className }: IKeypad) => {
	const [value, setValue] = useState('')

	return (
		<div className={cn(className, 'grid grid-rows-4 grid-cols-3 gap-4')}>
			{keypadButtons.map(({ digit, text, disabled }, index) => (
				<button
					key={`keypad-button-${index}`}
					type='button'
					className='inline-flex flex-row flex-nowrap justify-center items-end gap-2 text-gray-100 bg-gray-900 p-4 rounded-xl'
					disabled={disabled}
					onClick={() => {
						setValue(index === keypadButtons.length - 1 ? value.slice(0, -1) : value + digit)
					}}
				>
					{digit && <span className='text-4xl pointer-events-none'>{digit}</span>}
					{text && <span className='text-lg pointer-events-none'>{text}</span>}
				</button>
			))}

			{value && <h3>{value}</h3>}
		</div>
	)
}

export default Keypad
