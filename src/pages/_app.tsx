import Layout from '@/components/layouts/layout'
import { store } from '@/store/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { Provider } from 'react-redux'

const App: FC<AppProps> = props => {
	const { Component, pageProps } = props

	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default App
