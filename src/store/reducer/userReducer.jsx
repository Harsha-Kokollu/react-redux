import { createSlice } from '@reduxjs/toolkit' // collection of reducers, initial states
import { userList } from '../../data/usersData'

const userSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload
      const updateUserData = state.find((user) => user.id == id)
      if (updateUserData) {
        updateUserData.name = name
        updateUserData.email = email
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload
      const deleUser = state.find((user) => user.id === id)
      if (deleUser) {
        return state.filter((f) => f.id !== id)
      }
    },
  },
})

export const { addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer
