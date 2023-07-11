import { benefitsActions } from '@/features/benefits/benefits.slice'
import { linksActions } from '@/features/links/links.slice'
import { sidebarActions } from '@/features/sidebar/sidebar.slice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const actions = {
	...sidebarActions,
	...benefitsActions,
	...linksActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(actions, dispatch)
}
