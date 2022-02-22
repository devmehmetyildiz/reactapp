import { createSlice } from '@reduxjs/toolkit'

export const navbarslice = createSlice({
  name: 'navbartool',
  initialState: {
    collapse: false,
    image : false
  },
  reducers: {
    tooglecollapse: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes      
      state.collapse = !state.collapse;
      console.log('state: ', state);
    },    
  },
})

// Action creators are generated for each case reducer function
export const { tooglecollapse } = navbarslice.actions

export default navbarslice.reducer