import { default as HomeScreen } from '@/components/screens/home'
import { Benefit } from '@/features/benefits/benefits.types'
import { useActions } from '@/hooks/useActions'
import { defaultAxios } from '@/utils'
import { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'

type HomeProps = {
	benefits: Benefit[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async context => {
	const r = await defaultAxios.get<Benefit[]>('benefits/')

	return {
		props: {
			benefits: r.data
		},
		revalidate: 300
	}
}

const Home: NextPage<HomeProps> = ({ benefits }) => {
	const { setBenefits } = useActions()

	useEffect(() => {
		setBenefits(benefits)
	}, [])

	return <HomeScreen />
}

export default Home
