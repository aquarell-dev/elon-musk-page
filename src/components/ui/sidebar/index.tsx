import useLinks from '@/hooks/useLinks'
import { FC } from 'react'

const Sidebar: FC = () => {
	const { links, loading } = useLinks()

	return <div>Sidebar</div>
}

export default Sidebar
