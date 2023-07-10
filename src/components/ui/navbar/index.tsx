import Logo from '@/assets/images/logo.png'
import Container from '@/components/ui/container'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import AngledBorder from '../angled-border'

export const links: { link: string; id: number; href: string }[] = [
	{ id: 1, link: 'Главная', href: '/' },
	{ id: 2, link: 'Технология', href: '/technologies' },
	{ id: 3, link: 'График Полетов', href: '/flight-schedule' },
	{ id: 4, link: 'Гарантии', href: '/guarantees' },
	{ id: 5, link: 'О Компании', href: '/about' },
	{ id: 6, link: 'Контакты', href: '/contacts' }
]

const Navbar: FC = () => {
	return (
		<div className='border-b border-[#878282] bg-[#0a0500] bg-opacity-20'>
			<Container paddingContainer>
				<div className='flex justify-between items-center'>
					<AngledBorder>
						<Image
							className='pt-5 pb-7 px-8 border border-[#878282]'
							src={Logo}
							alt='SpaceX'
						/>
					</AngledBorder>
					<ul className='p-0 m-0 overflow-hidden list-none flex space-x-4'>
						{links.map(link => (
							<li key={link.id}>
								<Link href={link.href}>
									<p className='transition duration-300 ease-in-out hover:text-slate-300 cursor-pointer hover:underline underline-slate-300'>
										{link.link}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</div>
	)
}

export default Navbar
