import cn from 'classnames'

interface ISuggestions {
	className?: string
	words: string[]
}

const Suggestions = ({ className, words }: ISuggestions) => {
	return (
		<div className={cn(className, 'grid grid-rows-1 grid-cols-3 bg-gray-200 p-2 rounded-lg')}>
			{words.map((word, index) => (
				<span
					key={`suggestions-word-${index}`}
					className='text-center text-lg border-x-[1px] border-x-gray-300 first:border-l-0 last:border-r-0 py-1 px-2'
				>
					{word}
				</span>
			))}
		</div>
	)
}

export default Suggestions

// className='w-28 flex flex-row flex-nowrap justify-center items-end gap-2 text-gray-100 bg-gray-900 p-4 rounded-xl'
