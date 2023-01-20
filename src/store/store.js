import { configureStore } from '@reduxjs/toolkit'
import hamburgerSlice from './hamburgerSlice'
import themeSlice from './themeSlice'
import fetchedDataSlice from './fetchedDataSlice'
import selectorsSlice from './selectorsSlice'
import toDisplaySlice from './toDisplaySlice'

export default configureStore({
  reducer: {
    hamburger: hamburgerSlice.reducer,
    theme: themeSlice.reducer,
    fetchedData: fetchedDataSlice.reducer,
    selectors: selectorsSlice.reducer,
    toDisplay: toDisplaySlice.reducer
  },
})