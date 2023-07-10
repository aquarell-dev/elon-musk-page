import AbsoluteCentered from '@/components/ui/absolute-centered'
import { NextPage } from 'next'

const InternalError: NextPage = () => {
	return (
		<AbsoluteCentered>
			<h3 className='text-5xl text-center'>500</h3>
			<p className='text-center text-xl'>
				Произошла какая-то{' '}
				<span className='text-indigo-700 font-medium'>ошибка</span>
			</p>
		</AbsoluteCentered>
	)
}

export default InternalError
