import { configureStore } from '@reduxjs/toolkit'
import hamburgerSlice from './hamburgerSlice'
import themeSlice from './themeSlice'
import fetchedDataSlice from './fetchedDataSlice'

export default configureStore({
  reducer: {
    hamburger: hamburgerSlice.reducer,
    theme: themeSlice.reducer,
    fetchedData: fetchedDataSlice.reducer
  },
})