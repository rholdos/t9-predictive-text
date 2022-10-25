import cn from 'classnames'

interface ISuggestions {
	className?: string
	words: string[]
}

const Suggestions = ({ className, words }: ISuggestions) => {
	return (
		<div className={cn(className, 'text-gray-900 bg-gray-200 rounded-xl')}>
			<div className={'grid grid-rows-1 grid-cols-3'}>
				{words.slice(0, 3).map((word, index) => (
					<button
						autoFocus={index === 0}
						key={`suggestions-main-word-${index}`}
						type='button'
						onClick={() => console.log('TODO: accept suggestion')}
						className='text-center text-lg border-x-[1px] border-gray-300 first:border-l-0 last:border-r-0 p-2'
					>
						{word}
					</button>
				))}
			</div>
			<div className={'grid grid-rows-1 grid-cols-5 border-t-[2px] border-gray-300'}>
				{words.slice(3).map((word, index) => (
					<button
						key={`suggestions-other-word-${index}`}
						type='button'
						onClick={() => console.log('TODO: accept suggestion')}
						className='text-center text-sm border-x-[1px] border-gray-300 first:border-l-0 last:border-r-0 p-2'
					>
						{word}
					</button>
				))}
			</div>
		</div>
	)
}

export default Suggestions
