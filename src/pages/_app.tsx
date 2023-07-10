import Layout from '@/components/layouts/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'

const App: FC<AppProps> = props => {
	const { Component, pageProps } = props

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default App
