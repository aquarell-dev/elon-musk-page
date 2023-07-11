import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Benefit } from './benefits.types'

export const benefitsSlice = createSlice({
	name: 'benefits',
	initialState: {
		benefits: [] as Benefit[]
	},
	reducers: {
		setBenefits: (state, action: PayloadAction<Benefit[]>) => {
			state.benefits = action.payload
		}
	}
})

export const benefitsReducer = benefitsSlice.reducer
export const benefitsActions = benefitsSlice.actions
