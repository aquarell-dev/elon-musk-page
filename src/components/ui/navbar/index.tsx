import Logo from '@/assets/images/logo.png'
import Container from '@/components/ui/container'
import Image from 'next/image'
import { FC } from 'react'
import AngledBorder from '../angled-border'

export const links = [
	'Главная',
	'Технология',
	'График Полетов',
	'Гарантии',
	'О Компании',
	'Контакты'
]

const Navbar: FC = () => {
	return (
		<div className='border-b border-[#878282] bg-[#0a0500] bg-opacity-20'>
			<Container paddingContainer>
				<div className='flex space-x-36 items-center'>
					<AngledBorder>
						<div className='relative pt-5 pb-7 px-8 outline outline-[0.1px] outline-[#878282]'>
							<Image src={Logo} alt='SpaceX' />
						</div>
					</AngledBorder>
					<ul className='p-0 m-0 overflow-hidden list-none flex space-x-4'>
						{links.map((link, idx) => (
							<li key={idx}>
								<p className='transition duration-300 ease-in-out hover:text-slate-300 cursor-pointer hover:underline underline-slate-300'>
									{link}
								</p>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</div>
	)
}

export default Navbar
