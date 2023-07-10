import { cn } from '@/utils'
import { FC, PropsWithChildren } from 'react'

type AngledBorderProps = PropsWithChildren<{
	additionalBlockStyles?: string
}>

const AngledBorder: FC<AngledBorderProps> = ({
	children,
	additionalBlockStyles
}) => {
	return (
		<div className={cn('relative', additionalBlockStyles)}>
			<div className='absolute w-[2px] h-3 top-0 right-0 bg-white' />
			<div className='absolute w-3 h-[2px] top-0 right-0 bg-white' />
			<div className='absolute w-[2px] h-3 bottom-0 right-0 bg-white' />
			<div className='absolute w-3 h-[2px] bottom-0 right-0 bg-white' />
			<div className='absolute w-[2px] h-3 top-0 left-0 bg-white' />
			<div className='absolute w-3 h-[2px] top-0 left-0 bg-white' />
			<div className='absolute w-[2px] h-3 bottom-0 left-0 bg-white' />
			<div className='absolute w-3 h-[2px] bottom-0 left-0 bg-white' />
			{children}
		</div>
	)
}

export default AngledBorder
