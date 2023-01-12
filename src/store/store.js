import { configureStore } from '@reduxjs/toolkit'
import hamburgerSlice from './hamburgerSlice'

export default configureStore({
  reducer: {
    hamburger: hamburgerSlice.reducer
  },
})