import Navbar from '@/components/ui/navbar'
import { Montserrat } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

const montserrat = Montserrat({ subsets: ['cyrillic', 'cyrillic-ext'] })

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main style={montserrat.style}>
			<Navbar />
			{children}
		</main>
	)
}

export default Layout
