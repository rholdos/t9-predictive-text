import KiwiLogoImage from 'assets/images/kiwi-logo.svg'
import cn from 'classnames'

const Header = () => {
	return (
		<header
			className={cn(
				{ 'relative z-10': true },
				{ 'flex flex-row flex-nowrap justify-between items-center gap-8 p-4 shadow-lg shadow-black/50': true },
				{ 'animate-header': true }
			)}
		>
			<img src={KiwiLogoImage} alt='Kiwi.com logo' className='w-28' />
			<h1 className='inline-flex flex-col flex-wrap gap-2 text-center text-md leading-none text-gray-100 px-4'>
				<span>Senior JS Developer</span>
				<hr className='border-primary -mx-4' />
				<span>T9 Task</span>
			</h1>
		</header>
	)
}

export default Header
