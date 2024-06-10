import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	campers: [],
	favorites: JSON.parse(localStorage.getItem('favorites')) || [],
	status: 'idle',
	error: null,
}

export const fetchCampers = createAsyncThunk(
	'campers/fetchCampers',
	async (page = 1) => {
		const response = await axios.get(
			`${import.meta.env.VITE_MOCKAPI}?page=${page}`
		)
		return response.data
	}
)

const campersSlice = createSlice({
	name: 'campers',
	initialState,
	reducers: {
		toggleFavorite: (state, action) => {
			const camper = action.payload
			const index = state.favorites.findIndex(fav => fav._id === camper._id)
			if (index >= 0) {
				state.favorites.splice(index, 1)
			} else {
				state.favorites.push(camper)
			}
			localStorage.setItem('favorites', JSON.stringify(state.favorites))
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCampers.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchCampers.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.campers = action.payload
			})
			.addCase(fetchCampers.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export const { toggleFavorite } = campersSlice.actions

export default campersSlice.reducer
