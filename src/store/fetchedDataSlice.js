import { createSlice } from '@reduxjs/toolkit'

const fetchedDataSlice = createSlice({
    name: 'fetchedData',
    initialState: {
        data: ''
    },
    reducers: {
        setData: (state, action) => {
            const { data } = action.payload
            state.data = data
        }
    }
})

export const { setData } = fetchedDataSlice.actions
export default fetchedDataSlice