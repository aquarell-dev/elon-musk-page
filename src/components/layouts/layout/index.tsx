import Navbar from '@/components/ui/navbar'
import Sidebar from '@/components/ui/sidebar'
import useLinks from '@/hooks/useLinks'
import { Montserrat } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

const montserrat = Montserrat({ subsets: ['cyrillic', 'cyrillic-ext'] })

const Layout: FC<PropsWithChildren> = ({ children }) => {
	useLinks()

	return (
		<main style={montserrat.style}>
			<Navbar />
			<Sidebar />
			{children}
		</main>
	)
}

export default Layout
