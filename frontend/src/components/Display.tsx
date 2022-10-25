interface IDisplay {
	input: string
	output: string
}

const Display = ({ input, output }: IDisplay) => {
	return (
		<>
			<textarea
				className={'text-gray-900 bg-gray-200 p-2 rounded-lg resize-none'}
				value={input}
				rows={1}
				readOnly
			/>
			<textarea
				className={'text-gray-900 bg-gray-200 p-2 rounded-lg resize-none'}
				value={output}
				rows={5}
				readOnly
			/>
		</>
	)
}

export default Display
