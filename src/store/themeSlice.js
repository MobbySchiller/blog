import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDark: false
    },
    reducers: {
        setLight: (state) => {
            state.isDark = false
        },
        setDark: (state) => {
            state.isDark = true
        }
    }
})

export const { setLight, setDark } = themeSlice.actions
export default themeSlice