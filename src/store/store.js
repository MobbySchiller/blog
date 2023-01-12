import { configureStore } from '@reduxjs/toolkit'
import hamburgerSlice from './hamburgerSlice'
import themeSlice from './themeSlice'

export default configureStore({
  reducer: {
    hamburger: hamburgerSlice.reducer,
    theme: themeSlice.reducer
  },
})