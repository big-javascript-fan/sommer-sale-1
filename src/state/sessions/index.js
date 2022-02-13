/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = { data: {} }

export const SessionsSlice = createSlice({
  name: 'Sessions',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const user = action.payload.data
      if (!state)
      	state = initialState
      state.data = { ...state.data, user }
      window.localStorage.setItem('user', user)
    },
  },
})

// Actions
export const { updateProfile } = SessionsSlice.actions

// Thunks
export const updateProfileAsync = (data) => async (dispatch) => {  
  dispatch(updateProfile(data))
}

export default SessionsSlice.reducer
