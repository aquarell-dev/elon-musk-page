import { createSlice } from '@reduxjs/toolkit'
import { fetchLinks } from './links.thunk'
import { LinksInitialState } from './links.types'

const initialState: LinksInitialState = {
	links: [],
	status: null
}

export const linksSlice = createSlice({
	name: 'links',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchLinks.pending, state => {
			state.status = 'pending'
		})

		builder.addCase(fetchLinks.fulfilled, (state, action) => {
			state.status = 'fullfilled'
			state.links = action.payload
		})

		builder.addCase(fetchLinks.rejected, state => {
			state.status = 'rejected'
		})
	}
})

export const linksReducer = linksSlice.reducer
export const linksActions = { fetchLinks, ...linksSlice.actions }
