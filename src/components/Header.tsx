import { Link } from 'react-router-dom'
import { Switch } from '@/components/ui/switch'
import darkMode from '@/store/darkMode'

import { useEffect } from 'react'

const Header = () => {
	const { dark, changeTheme } = darkMode()


	useEffect(() => {
		if (dark) {
			document.querySelector('html')?.classList.add('dark')
		} else {
			document.querySelector('html')?.classList.remove('dark')
		}
	}, [dark])

	const handleChange = () => changeTheme()

	return (
		<header>
			<h1 className='text-5xl flex justify-between mx-3 md:justify-evenly items-center mb-9 md:mb-6 mt-4 font-bold text-slate-800 dark:text-slate-200'>
				<Link to='/' className='font-body'>
					notes🗒️
				</Link>
				<div className='flex items-center gap-2'>
					<Switch checked={dark} onCheckedChange={handleChange} />
					<svg className='h-8 w-8 dark:hidden' viewBox='0 0 24 24' fill='none'>
						<path
							d='M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z'
							stroke='#1e293b'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<svg
						className='hidden h-8 w-8 dark:block'
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							d='M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z'
							stroke='#e2e8f0'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</h1>
		</header>
	)
}

export default Header
