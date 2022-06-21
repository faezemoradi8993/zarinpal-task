import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
  response: [],
  status: 'idle',
  errorMessage: null,
}

// First, create the thunk
export const addUser = createAsyncThunk('users/addUser', async (data) => {
  const response = await fetch("https://test.com/api/users/testadd", data)
  return response.data
})
//create the slice
export const productSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [addUser.fulfilled]: (state, action) => {
      state.response = action.payload
      state.status = action.status
    },
    [addUser.pending]: (state, action) => {
      state.response = action.payload
      state.status = action.status
    },
    [addUser.rejected]: (state, action) => {
      state.response = action.payload
      state.status = action.status
      state.errorMessage = action.error.message
    }
  }
})