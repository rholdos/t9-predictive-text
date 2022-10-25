import cn from 'classnames'

interface IDisplay {
	className?: string
}

const Display = ({ className }: IDisplay) => {
	return (
		<>
			<textarea className={cn(className, 'text-gray-900 bg-gray-200 p-2 rounded-lg')} rows={1} value='85634875' readOnly />
			<textarea className={cn(className, 'text-gray-900 bg-gray-200 p-2 rounded-lg')} rows={3} value='Display' readOnly />
		</>
	)
}

export default Display
