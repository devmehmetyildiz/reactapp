import { configureStore } from '@reduxjs/toolkit'
import navbarslice  from './slice/navbarslice'
import userReducer from './slice/userSlice'

export default configureStore({
  reducer: {
      navbarredux:navbarslice,
      user:userReducer
  },
})