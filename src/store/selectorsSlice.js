import { createSlice } from '@reduxjs/toolkit'

const selectorsSlice = createSlice({
    name: 'selectors',
    initialState: {
        category: 'all'
    },
    reducers: {
        setCategory: (state, action) => {
            const { value } = action.payload
            state.category = value
        }
    }
})

export const { setCategory } = selectorsSlice.actions
export default selectorsSlice