import cn from 'classnames'

interface IHeader {
	className?: string
}

const Header = ({ className }: IHeader) => {
	return (
		<header className={cn(className, 'flex flex-row flex-nowrap justify-between align-middle gap-10')}>
			<h1>Kiwi</h1>
			<h2>T9 Task - Senior JS</h2>
		</header>
	)
}

export default Header
