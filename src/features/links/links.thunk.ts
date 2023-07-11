import { defaultAxios } from '@/utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Link } from './links.types'

export const fetchLinks = createAsyncThunk(
	'links/fetchLinks',
	async (_, { rejectWithValue }) => {
		try {
			const r = await defaultAxios.get<Link[]>('links')

			return r.data
		} catch (e) {
			return rejectWithValue(null)
		}
	}
)
