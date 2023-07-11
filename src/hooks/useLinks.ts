import { useEffect } from 'react'
import { useActions } from './useActions'

const useLinks = () => {
	const { fetchLinks } = useActions()

	useEffect(() => {
		fetchLinks()
	}, [])
}

export default useLinks
