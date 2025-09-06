import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'counter',
  initialState:{
    value:JSON.parse(localStorage.getItem('currentUserInfo')) || null,
    chatuser:null,
  },

  reducers: {

  userInfo:(state,action)=>{
     state.value=action.payload      
  },
  selectChatuserInfo:(state,action)=>{
    state.chatuser = action.payload
  },

  },
})

// Action creators are generated for each case reducer function
export const { userInfo } = userInfoSlice.actions

export default userInfoSlice.reducer