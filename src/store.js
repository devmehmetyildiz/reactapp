import { configureStore } from '@reduxjs/toolkit'
import navbarslice  from './slice/navbarslice'

export default configureStore({
  reducer: {
      navbarredux:navbarslice,
  },
})