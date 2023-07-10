import AbsoluteInset from '@/components/ui/absolute-inset'
import Container from '@/components/ui/container'
import { FC } from 'react'
import Benefits from './components/benefits'
import StartJourney from './components/start-journey'

const Home: FC = () => {
	return (
		<AbsoluteInset>
			<Container additionalStyles='h-full'>
				<div className='flex justify-between items-center h-full '>
					<StartJourney />
					<Benefits />
				</div>
			</Container>
		</AbsoluteInset>
	)
}

export default Home
