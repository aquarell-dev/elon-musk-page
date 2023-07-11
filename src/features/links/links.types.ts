export type Link = { link: string; id: number; href: string }

export type LinksInitialState = {
	links: Link[]
	status: 'pending' | 'fullfilled' | 'rejected' | null
	error?: string
}
