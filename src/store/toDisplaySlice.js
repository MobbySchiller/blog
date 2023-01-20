import { createSlice } from '@reduxjs/toolkit'

const toDisplaySlice = createSlice({
    name: 'toDisplay',
    initialState: {
        toDisplay: []
    },
    reducers: {
        setToDisplay: (state, action) => {
            state.toDisplay = action.payload
        }
    }
})

export const { setToDisplay } = toDisplaySlice.actions
export default toDisplaySlice