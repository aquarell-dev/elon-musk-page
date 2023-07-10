import { cn } from '@/utils'
import React, { FC } from 'react'
import { AngledBorderProps } from './side.types'
import { defaultSides } from './sides'

const AngledBorder: FC<AngledBorderProps> = ({
	children,
	additionalBlockStyles,
	displayedSides = ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
	additionalClassnames
}) => {
	return (
		<div className={cn('relative', additionalBlockStyles)}>
			{displayedSides.map((side, idx) => {
				const [firstClassname, secondClassname] = defaultSides[side]

				return (
					<React.Fragment key={idx}>
						<div className={cn(firstClassname, additionalClassnames)} />
						<div className={cn(secondClassname, additionalClassnames)} />
					</React.Fragment>
				)
			})}
			{children}
		</div>
	)
}

export default AngledBorder
