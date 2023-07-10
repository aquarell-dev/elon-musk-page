import { cn } from '@/utils'
import { FC, PropsWithChildren } from 'react'

const Container: FC<
	PropsWithChildren<{ paddingContainer?: boolean; additionalStyles?: string }>
> = ({ children, paddingContainer, additionalStyles }) => {
	return (
		<div
			className={cn(
				paddingContainer
					? 'px-4 md:px-16 lg:px-[12.5%] xl:px-[19.3%]'
					: 'mx-4 md:mx-16 lg:mx-[12.5%] xl:mx-[19.3%]',
				additionalStyles
			)}
		>
			{children}
		</div>
	)
}

export default Container
