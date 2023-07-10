import useLinks from '@/hooks/useLinks'
import Link from 'next/link'
import { FC } from 'react'

const Links: FC = () => {
	const { links, loading } = useLinks()

	return (
		<ul className='hidden 2xl:flex space-x-4 p-0 m-0 list-none'>
			{!loading &&
				links.map(link => (
					<li key={link.id}>
						<Link href={link.href}>
							<p className='transition text-sm 3xl:text-lg duration-300 ease-in-out hover:text-slate-300 cursor-pointer hover:underline underline-slate-300'>
								{link.link}
							</p>
						</Link>
					</li>
				))}
		</ul>
	)
}

export default Links
