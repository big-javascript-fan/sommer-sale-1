import { configureStore } from '@reduxjs/toolkit'
import sessionReducer from './sessions'

export default configureStore({
  reducer: {
    sessions: sessionReducer,
  },
})