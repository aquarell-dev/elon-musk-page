import AbsoluteCentered from '@/components/ui/absolute-centered'
import { NextPage } from 'next'

const NotFound: NextPage = () => {
	return (
		<AbsoluteCentered>
			<h3 className='text-5xl text-center'>404</h3>
			<p className='text-center text-xl'>
				Страничка не{' '}
				<span className='text-indigo-700 font-medium'>найдена</span>
			</p>
		</AbsoluteCentered>
	)
}

export default NotFound
