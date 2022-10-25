import KiwiLogoImage from 'assets/images/kiwi-logo.svg'

const Header = () => {
	return (
		<header
			className={
				'flex flex-row flex-nowrap justify-between items-center gap-8 backdrop-blur-md backdrop-brightness-110 p-4 shadow-lg shadow-black/50 mb-16'
			}
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
