import { createSlice } from '@reduxjs/toolkit'

const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState: {
        navIsActive: false
    },
    reducers: {
        change: (state) => {
            const { navIsActive } = state
            state.navIsActive = !navIsActive
            console.log(state.navIsActive)
        }
    }
})

export const { change } = hamburgerSlice.actions
export default hamburgerSlice