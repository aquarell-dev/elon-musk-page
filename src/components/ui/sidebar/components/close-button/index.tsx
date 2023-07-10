import { useActions } from '@/hooks/useActions'
import { FC } from 'react'
import { FiX } from 'react-icons/fi'

const CloseButton: FC = () => {
	const { closeSidebar } = useActions()

	return (
		<div className='absolute right-1 top-1 transition duration-300 ease-in-out hover:text-gray-300 cursor-pointer'>
			<FiX size={24} onClick={() => closeSidebar()} />
		</div>
	)
}

export default CloseButton
