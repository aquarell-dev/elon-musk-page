import { createSlice } from '@reduxjs/toolkit'
import { SidebarInitialState } from './sidebar.types'

const initialState: SidebarInitialState = { open: false }

export const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		openSidebar: state => {
			state.open = true
		},
		closeSidebar: state => {
			state.open = false
		},
		toggleSidebar: state => {
			state.open != state.open
		}
	}
})

export const sidebarReducer = sidebarSlice.reducer
export const sidebarActions = sidebarSlice.actions
