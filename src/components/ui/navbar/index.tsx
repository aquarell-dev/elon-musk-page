import Logo from '@/assets/images/logo.png'
import Container from '@/components/ui/container'
import Image from 'next/image'
import { FC } from 'react'
import AngledBorder from '../angled-border'
import SidebarButton from '../sidebar-button'
import Links from './links'

const Navbar: FC = () => {
	return (
		<div className='border-b border-[#878282] bg-[#0a0500] bg-opacity-20 relative z-20 overflow-hidden'>
			<Container paddingContainer>
				<div className='flex justify-between items-center'>
					<AngledBorder>
						<Image
							className='pt-2 pb-4 md:pt-5 md:pb-7 px-4 md:px-8 border border-[#878282] w-[200px] lg:w-full'
							src={Logo}
							alt='SpaceX'
						/>
					</AngledBorder>
					<Links />
					<SidebarButton size={30} />
				</div>
			</Container>
		</div>
	)
}

export default Navbar
