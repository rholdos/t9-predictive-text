import cn from 'classnames'
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg'

interface IDisplay {
	input: string
	inputLetter?: string
	output: string
	handleClear: () => void
}

const Display = ({ input, inputLetter, output, handleClear }: IDisplay) => {
	return (
		<>
			{/* Intro message */}
			<div
				className={cn(
					{ 'self-start relative ml-1': true },
					{ 'before:absolute before:z-10 before:bottom-1.5 before:-left-1 before:w-4 before:h-4 before:bg-primary before:rounded-br-2xl': true },
					{ 'after:absolute after:z-10 after:bottom-1.5 after:-left-2 after:w-2 after:h-4 after:bg-gray-900 after:rounded-br-2xl': true },
					{ 'animate-introMessage': true }
				)}
			>
				<textarea
					value='Hi there! Start typing …'
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
				<span
					className={cn(
						{ 'absolute z-10 bottom-4 right-4 text-2xl text-gray-100': true },
						{ 'transition ease-out duration-50': true },
						{ 'translate-y-4 opacity-0': !inputLetter },
						{ 'translate-y-0 opacity-100': inputLetter }
					)}
				>
					{inputLetter}
				</span>
			</div>
			{/* Input */}
			<div className='flex flex-row flex-nowrap items-center gap-2 mt-auto'>
				<textarea value={input} rows={1} disabled className='flex-grow text-gray-100 bg-gray-700 py-1.5 px-3 rounded-2xl resize-none' />
				<button
					onClick={handleClear}
					className={cn(
						{ 'group relative flex-shrink-0 inline-flex text-lg text-gray-900 bg-primary p-2 rounded-full': true },
						{ 'transition-colors hover:bg-primary-light focus:bg-primary-light focus:outline-none': true }
					)}
				>
					<DeleteIcon className='-translate-x-px' />
					<span
						className={cn(
							{ 'absolute top-0 right-0 text-sm whitespace-nowrap text-gray-200 bg-primary/50 px-4 py-1 rounded-xl pointer-events-none': true },
							{ 'after:absolute after:top-full after:left:1/2 after:w-0 after:h-0 after:-ml-1': true },
							{ 'after:border-4 after:border-transparent after:border-t-primary/50': true },
							{ 'transition ease-in duration-200 -translate-y-8 opacity-0 group-hover:-translate-y-9 group-hover:opacity-100': true }
						)}
					>
						Clear all fields
					</span>
				</button>
			</div>
		</>
	)
}

export default Display
