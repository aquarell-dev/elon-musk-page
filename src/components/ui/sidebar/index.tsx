import Logo from '@/assets/images/logo.png'
import { useActions } from '@/hooks/useActions'
import { useOutside } from '@/hooks/useOutside'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, useRef } from 'react'
import Links from '../navbar/links'
import CloseButton from './components/close-button'

const Sidebar: FC = () => {
	const ref = useRef<HTMLDivElement>(null)

	const { open } = useTypedSelector(state => state.sidebar)
	const { closeSidebar } = useActions()

	useOutside(ref, () => closeSidebar())

	return (
		<div
			className={cn(
				'absolute top-0 min-h-screen overflow-hidden bg-zinc-900 z-[9999]',
				'transition duration-300 ease-in-out',
				'w-screen sm:w-1/2 md:w-96',
				'py-8 px-10',
				open ? '' : '-translate-x-full'
			)}
			ref={ref}
		>
			<CloseButton />
			<div className='flex flex-col items-center space-y-24'>
				<Image src={Logo} alt='SpaceX' className='w-[300px] sm:w-full' />
				<Links />
			</div>
		</div>
	)
}

export default Sidebar
