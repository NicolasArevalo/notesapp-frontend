import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AddNote from '@/components/AddNote'

const Layout = ({
	children,
	aside,
}: {
	children: React.ReactNode
	aside: boolean
}) => {
	return (
		<div className='block'>
			<Header />
			<main className='px-2 md:w-1/2 mx-auto'>{children}</main>
			<aside
				className={
					aside
						? 'absolute bottom-4 lg:bottom-10 right-4 lg:right-10'
						: 'hidden bottom-4 lg:bottom-10 right-4 lg:right-10'
				}
			>
				<AddNote />
			</aside>
			<Footer />
		</div>
	)
}

export default Layout
