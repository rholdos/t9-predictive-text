import phoneBgImage from 'assets/images/phone-bg.png'
import cn from 'classnames'
import { ReactNode } from 'react'

interface IPhone {
	content?: ReactNode
	keyboard?: ReactNode
}

const Phone = ({ content, keyboard }: IPhone) => {
	return (
		<div
			className={cn(
				{ 'relative w-[380px] h-[720px]': true },
				{ 'border-[10px] border-solid border-black rounded-[40px] shadow-lg shadow-primary/5': true },
				{ 'bg-no-repeat bg-center bg-cover': true }
			)}
			style={{ backgroundImage: `url('${phoneBgImage}')` }}
		>
			{/* Lock button */}
			<span className={'absolute top-[20%] right-[-14px] z-10 w-1 h-20 bg-black rounded-r-lg'} />
			{/* Volume buttons */}
			<span className={'absolute top-[15%] left-[-14px] z-10 w-1 h-14 bg-black rounded-l-lg'} />
			<span className={'absolute top-[25%] left-[-14px] z-10 w-1 h-14 bg-black rounded-l-lg'} />
			{/* Notch */}
			<span
				className={cn(
					{ 'absolute top-[-1px] left-1/2 -translate-x-1/2 z-10 w-[60%] h-8 bg-black rounded-b-[20px]': true },
					{ 'before:absolute before:top-1 before:left-4 before:z-20 before:w-5 before:h-5': true },
					{ 'before:bg-black before:border-[3px] before:border-solid before:border-gray-900 before:rounded-full': true }
				)}
			/>
			{/* Home */}
			<span className={'absolute bottom-2 left-1/2 -translate-x-1/2 z-10 w-1/3 h-1 bg-white/90 rounded-full'} />
			{/* Display */}
			<div className='w-full h-full flex flex-col flex-nowrap bg-gray-900 pt-10 p-1 rounded-[29px]'>{content}</div>
			<div className='absolute bottom-0 left-0 right-0 h-1/2 flex flex-col flex-nowrap'>{keyboard}</div>
		</div>
	)
}

export default Phone
