import { cn } from '@/utils'
import { FC, PropsWithChildren } from 'react'

const Container: FC<
	PropsWithChildren<{ paddingContainer?: boolean; additionalStyles?: string }>
> = ({ children, paddingContainer, additionalStyles }) => {
	return (
		<div
			className={cn(
				paddingContainer ? 'px-[19.3%]' : 'mx-[19.3%]',
				additionalStyles
			)}
		>
			{children}
		</div>
	)
}

export default Container
