import Line from '@/assets/images/line.png'
import AngledBorder from '@/components/ui/angled-border'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'
import styles from './styles/start-journey.module.css'

const StartJourney: FC<HTMLAttributes<HTMLButtonElement>> = props => {
	const { className, ...rest } = props

	return (
		<div className='flex w-1/2 justify-center md:justify-start'>
			<AngledBorder
				additionalBlockStyles='h-fit md:mt-48'
				additionalClassnames='z-20'
				displayedSides={['bottom-left', 'top-right']}
			>
				<button
					className={cn(
						'px-4 py-2 w-64 bg-[#16151d] hover:bg-[#19191c] transition duration-300 ease-in-out',
						styles.button,
						className
					)}
					{...rest}
				>
					Начать путешествие
				</button>
			</AngledBorder>
			<img src={Line.src} width={330} className='mt-[230px] hidden' />
		</div>
	)
}

export default StartJourney
