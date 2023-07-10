import { cn } from '@/utils'
import { FC, PropsWithChildren } from 'react'

const AbsoluteInset: FC<
	PropsWithChildren<{ additionalClassnames?: string }>
> = ({ children, additionalClassnames }) => {
	return (
		<div className={cn('absolute inset-x-0 inset-y-0', additionalClassnames)}>
			{children}
		</div>
	)
}

export default AbsoluteInset
