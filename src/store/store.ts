import { benefitsReducer } from '@/features/benefits/benefits.slice'
import { sidebarReducer } from '@/features/sidebar/sidebar.slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		benefits: benefitsReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
