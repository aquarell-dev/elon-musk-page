import AbsoluteInset from '@/components/ui/absolute-inset'
import Container from '@/components/ui/container'
import { FC } from 'react'
import Benefits from './components/benefits'
import StartJourney from './components/start-journey'

const Home: FC = () => {
	return (
		<AbsoluteInset additionalClassnames='z-10'>
			<Container additionalStyles='h-full'>
				<div className='flex flex-col space-y-16 md:space-y-0 md:flex-row justify-center md:justify-between items-center h-full '>
					<StartJourney />
					<Benefits />
				</div>
			</Container>
		</AbsoluteInset>
	)
}

export default Home
