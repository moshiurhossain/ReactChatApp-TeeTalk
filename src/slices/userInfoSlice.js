import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'counter',
  initialState:{
    value:JSON.parse(localStorage.getItem('currentUserInfo'))
  },
  // initialState: {
  //   value: 0,
  // },
  reducers: {

  userInfo:(state,action)=>{
     state.value=action.payload      
  }

  },
})

// Action creators are generated for each case reducer function
export const { userInfo } = userInfoSlice.actions

export default userInfoSlice.reducer