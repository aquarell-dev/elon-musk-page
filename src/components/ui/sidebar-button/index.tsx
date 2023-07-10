import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { cn } from '@/utils'
import { FC } from 'react'
import { IconBaseProps } from 'react-icons'
import { FiMenu, FiX } from 'react-icons/fi'

const SidebarButton: FC<{ additionalClassnames?: string } & IconBaseProps> = ({
	additionalClassnames,
	...rest
}) => {
	const { open } = useTypedSelector(state => state.sidebar)
	const { openSidebar, closeSidebar } = useActions()

	return (
		<div
			className={cn(
				'2xl:hidden cursor-pointer transition duration-300 ease-in-out hover:text-gray-300',
				additionalClassnames
			)}
		>
			{open ? (
				<FiX {...rest} onClick={() => closeSidebar()} />
			) : (
				<FiMenu {...rest} onClick={() => openSidebar()} />
			)}
		</div>
	)
}

export default SidebarButton
