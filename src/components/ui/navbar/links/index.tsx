import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { cn } from '@/utils'
import Link from 'next/link'
import { FC } from 'react'

const Links: FC<{ horizontal?: boolean }> = ({ horizontal }) => {
	const { links, status } = useTypedSelector(state => state.links)

	const { closeSidebar } = useActions()

	return (
		<ul
			className={cn(
				'p-0 m-0 list-none',
				horizontal ? 'hidden 2xl:flex space-x-4' : 'flex flex-col space-y-2'
			)}
		>
			{status !== 'pending' &&
				links.map(link => (
					<li key={link.id} onClick={() => closeSidebar()}>
						<Link href={link.href ?? '/'}>
							<p
								className={cn(
									'transition duration-300 ease-in-out',
									'hover:text-slate-300 cursor-pointer hover:underline underline-slate-300',
									horizontal ? 'text-sm 3xl:text-lg' : 'text-center text-lg'
								)}
							>
								{link.link}
							</p>
						</Link>
					</li>
				))}
		</ul>
	)
}

export default Links
