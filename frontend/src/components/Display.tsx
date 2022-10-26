import cn from 'classnames'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg'

interface IDisplay {
	input: string
	output: string
	onClear: () => void
}

const Display = ({ input, output, onClear }: IDisplay) => {
	return (
		<>
			{/* Intro message */}
			<div
				className={cn(
					{ 'self-start relative w-[35%] ml-1': true },
					{ 'before:absolute before:z-10 before:bottom-1.5 before:-left-1 before:w-4 before:h-4 before:bg-primary before:rounded-br-2xl': true },
					{ 'after:absolute after:z-10 after:bottom-1.5 after:-left-2 after:w-2 after:h-4 after:bg-gray-900 after:rounded-br-2xl': true },
					{ 'animate-introMessage': true }
				)}
			>
				<textarea
					value={'Start typing ...'}
					rows={1}
					disabled
					className='w-full text-sm text-gray-900 bg-primary pl-4 pr-2 py-1.5 rounded-2xl resize-none'
				/>
			</div>
			{/* Output */}
			<div
				className={cn(
					{ 'self-end relative w-[70%] mr-1': true },
					{ 'before:absolute before:z-10 before:bottom-1.5 before:-right-1 before:w-4 before:h-4 before:bg-gray-700 before:rounded-bl-2xl': true },
					{ 'after:absolute after:z-10 after:bottom-1.5 after:-right-2 after:w-2 after:h-4 after:bg-gray-900 after:rounded-bl-2xl': true },
					{ 'animate-outputMessage': true }
				)}
			>
				<textarea value={output} rows={7} disabled className='w-full text-sm text-gray-100 bg-gray-700 pl-3 pr-4 py-2 rounded-2xl resize-none' />
			</div>
			{/* Input */}
			<div className='flex flex-row flex-nowrap items-center gap-2 mt-auto'>
				<textarea value={input} rows={1} disabled className='flex-grow text-gray-100 bg-gray-700 py-1.5 px-3 rounded-2xl resize-none' />
				<button
					onClick={onClear}
					className={cn(
						{ 'flex-shrink-0 inline-flex text-lg text-gray-900 bg-primary p-2 rounded-full': true },
						{ 'transition-colors hover:bg-primary-light focus:bg-primary-light focus:outline-none': true }
					)}
				>
					<DeleteIcon className='-translate-x-px' />
				</button>
			</div>
		</>
	)
}

export default Display
