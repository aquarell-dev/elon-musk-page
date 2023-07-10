import { sidebarReducer } from '@/features/sidebar/sidebar.slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
