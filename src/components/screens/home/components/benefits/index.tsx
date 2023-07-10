import { Benefit } from '@/types/benefit.types'
import { FC } from 'react'

const benefits: Benefit[] = [
	{
		id: 1,
		benefit: {
			top: 'мы',
			middle: '1',
			bottom: 'на рынке'
		}
	},
	{
		id: 2,
		benefit: {
			top: 'гарантируем',
			middle: '50%',
			bottom: 'безопасность'
		}
	},
	{
		id: 3,
		benefit: {
			top: 'календарик за',
			middle: '2001',
			bottom: 'в подарок'
		}
	},
	{
		id: 4,
		benefit: {
			top: 'путешествие',
			middle: '597',
			bottom: 'дней'
		}
	}
]

const Benefits: FC = () => {
	return (
		<div className='grid grid-cols-2 gap-4'>
			{benefits.slice(0, 4).map(({ benefit: { middle, top, bottom }, id }) => (
				<div
					key={id}
					className='bg-white bg-opacity-[0.02] p-1 w-48 h-48 text-xl text-center grid grid-rows-[1fr_auto_1fr]'
				>
					<p>{top}</p>
					<p className='font-medium text-5xl'>{middle}</p>
					<p>{bottom}</p>
				</div>
			))}
		</div>
	)
}

export default Benefits
