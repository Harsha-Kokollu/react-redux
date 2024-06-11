import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducer/userReducer'

export default configureStore({
  reducer: {
    users: UserReducer, // this is the key value we can access in any component
  },
})
