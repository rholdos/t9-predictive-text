import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg'
import keyboardButtonSmallImage from 'assets/images/keyboard-button-small.png'
import keyboardButtonLargeImage from 'assets/images/keyboard-button-large.png'
import { ReactNode } from 'react'
import cn from 'classnames'

const Legend = () => {
	const KeyButton = ({ size, btnText, text }: { size: 'small' | 'large'; btnText: ReactNode; text?: ReactNode }) => (
		<div className='flex flex-row flex-nowrap items-center gap-2'>
			<button
				type='button'
				className={cn(
					'relative h-16 flex flex-row flex-nowrap justify-center items-center',
					{ 'w-16': size === 'small' },
					{ 'w-36': size === 'large' }
				)}
				style={{
					backgroundImage: `url('${size === 'large' ? keyboardButtonLargeImage : keyboardButtonSmallImage}')`,
					backgroundSize: 'contain'
				}}
				disabled={true}
			>
				<span className='text-xl font-medium text-gray-900'>{btnText}</span>
			</button>
			{text && <span className='text-md'>{text}</span>}
		</div>
	)

	return (
		<div className='inline-block text-gray-100 bg-gray-900 p-4 rounded-xl m-4'>
			<h3 className='text-lg mb-4'>Keyboard controls</h3>
			<ul className='flex flex-col flex-nowrap justify-start items-start gap-2'>
				<li>
					<KeyButton size='small' btnText='1' text='Insert space' />
				</li>
				<li className='flex flex-row flex-nowrap gap-2'>
					<KeyButton size='small' btnText='2' text='-' />
					<KeyButton size='small' btnText='9' text='Insert digit' />
				</li>
				<li>
					<KeyButton size='small' btnText={<DeleteIcon />} text='Delete last digit' />
				</li>
				<li>
					<KeyButton size='large' btnText='Space' text='Insert suggestion' />
				</li>
			</ul>
		</div>
	)
}

export default Legend
