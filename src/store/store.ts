import { benefitsReducer } from '@/features/benefits/benefits.slice'
import { linksReducer } from '@/features/links/links.slice'
import { sidebarReducer } from '@/features/sidebar/sidebar.slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		benefits: benefitsReducer,
		links: linksReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
