import cn from 'classnames'

interface IOtherSuggestions {
	className?: string
	words: string[]
}

const OtherSuggestions = ({ className, words }: IOtherSuggestions) => {
	return (
		<div className={cn(className, 'flex flex-row flex-nowrap justify-start items-center bg-gray-200 p-2 rounded-lg')}>
			{words.map((word, index) => (
				<span
					key={`other-suggestions-word-${index}`}
					className='text-center text-sm border-x-[1px] border-x-gray-300 first:border-l-0 last:border-r-0 py-1 px-2'
				>
					{word}
				</span>
			))}
			<span
					key={`other-suggestions-word-last`}
					className='text-center text-sm border-x-[1px] border-x-gray-300 first:border-l-0 last:border-r-0 py-1 px-2'
				>
					...
				</span>
		</div>
	)
}

export default OtherSuggestions
