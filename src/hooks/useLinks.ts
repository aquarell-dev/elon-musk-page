import { useEffect, useState } from 'react'

export type Link = { link: string; id: number; href: string }

const f: Promise<Link[]> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([
			{ id: 1, link: 'Главная', href: '/' },
			{ id: 2, link: 'Технология', href: '/technologies' },
			{ id: 3, link: 'График Полетов', href: '/flight-schedule' },
			{ id: 4, link: 'Гарантии', href: '/guarantees' },
			{ id: 5, link: 'О Компании', href: '/about' },
			{ id: 6, link: 'Контакты', href: '/contacts' }
		])
	}, 600)
})

const useLinks = () => {
	const [links, setLinks] = useState<Link[]>([])

	useEffect(() => {
		f.then(setLinks)
	}, [])

	return { links, loading: !links }
}

export default useLinks
