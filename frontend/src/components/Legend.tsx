import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow-right.svg'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg'
import keyboardButtonLargeImage from 'assets/images/keyboard-button-large.png'
import keyboardButtonSmallImage from 'assets/images/keyboard-button-small.png'
import cn from 'classnames'
import { ReactNode } from 'react'

const Legend = () => {
	const KeyButton = ({ size, btnText, text }: { size: 'small' | 'large'; btnText: ReactNode; text?: ReactNode }) => (
		<div className='flex flex-row flex-nowrap items-center gap-2'>
			<button
				type='button'
				className={cn(
					'flex-shrink-0 relative h-12 flex flex-row flex-nowrap justify-center items-center bg-left-top bg-no-repeat bg-contain',
					{ 'w-12': size === 'small' },
					{ 'w-28': size === 'large' }
				)}
				style={{ backgroundImage: `url('${size === 'large' ? keyboardButtonLargeImage : keyboardButtonSmallImage}')` }}
				disabled={true}
			>
				<span className={cn('text-md text-gray-900', { 'text-lg': typeof btnText === 'number' })}>{btnText}</span>
			</button>
			{text && <span className='text-md leading-5 text-gray-100'>{text}</span>}
		</div>
	)

	return (
		<div className='sm:order-first relative w-[380px] h-auto bg-gray-100/25 backdrop-blur-md p-6 rounded-2xl animate-legend'>
			<h3 className='text-center text-md leading-none text-gray-100'>Keyboard controls</h3>
			<hr className='border-gray-100/25 my-4 -mx-2' />
			<ul className='flex flex-col flex-nowrap justify-start items-start gap-2'>
				<li>
					<KeyButton size='small' btnText={1} text='Insert space' />
				</li>
				<li className='flex flex-row flex-nowrap gap-2'>
					<KeyButton size='small' btnText={2} text='-' />
					<KeyButton size='small' btnText={9} text='Insert digit' />
				</li>
				<li>
					<KeyButton size='small' btnText={<DeleteIcon className='text-xl' />} text='Delete last digit' />
				</li>
				<li className='flex flex-row flex-nowrap gap-2'>
					<KeyButton size='small' btnText={<ArrowLeftIcon />} />
					<KeyButton size='small' btnText={<ArrowRightIcon />} text='Navigate between suggestions' />
				</li>
				<li>
					<KeyButton size='large' btnText='Space' text='Insert suggestion' />
				</li>
			</ul>
			<div className='animate-legendText'>
				<hr className='border-gray-100/25 my-4 -mx-2' />
				<h3 className='text-center text-sm leading-none text-gray-100'>Or interact with mouse / cursor</h3>
			</div>
		</div>
	)
}

export default Legend
