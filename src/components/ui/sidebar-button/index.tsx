import { cn } from '@/utils'
import { FC } from 'react'
import { IconBaseProps } from 'react-icons'
import { FiMenu, FiX } from 'react-icons/fi'

const SidebarButton: FC<{ additionalClassnames?: string } & IconBaseProps> = ({
	additionalClassnames,
	...rest
}) => {
	const open = false

	return (
		<div
			className={cn(
				'2xl:hidden transition duration-300 ease-in-out hover:text-gray-300 cursor-pointer',
				additionalClassnames
			)}
		>
			{open ? <FiX {...rest} /> : <FiMenu {...rest} />}
		</div>
	)
}

export default SidebarButton
