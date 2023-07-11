import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FC } from 'react'

const Benefits: FC = () => {
	const { benefits } = useTypedSelector(state => state.benefits)

	return (
		<div className='grid grid-cols-2 gap-4'>
			{benefits.slice(0, 4).map(({ benefit: { middle, top, bottom }, id }) => (
				<div
					key={id}
					className='bg-white bg-opacity-[0.02] p-1 w-28 h-28 xl:w-36 xl:h-36 2xl:w-48 2xl:h-48 text-sm xl:text-[16px] 2xl:text-lg 3xl:text-xl text-center grid grid-rows-[1fr_auto_1fr]'
				>
					<p>{top}</p>
					<p className='font-medium text-lg xl:text-xl 2xl:text-4xl 3xl:text-5xl'>
						{middle}
					</p>
					<p>{bottom}</p>
				</div>
			))}
		</div>
	)
}

export default Benefits
