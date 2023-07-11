import { benefitsActions } from '@/features/benefits/benefits.slice'
import { sidebarActions } from '@/features/sidebar/sidebar.slice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const actions = {
	...sidebarActions,
	...benefitsActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(actions, dispatch)
}
