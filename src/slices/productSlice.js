import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
  response: [],
  status: 'idle',
  errorMessage: null,
}

// First, create the thunk
export const addProduct = createAsyncThunk('products/addProduct', async (data) => {
  const response = await fetch("https://test.com/api/product/testadd", data)
  return response.data
})

//create the slice
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [addProduct.fulfilled]: (state, action) => {
      state.response = action.payload
      state.status = action.status
    },
    [addProduct.pending]: (state, action) => {
      state.response = action.payload
      state.status = action.status
    },
    [addProduct.rejected]: (state, action) => {
      state.response = action.payload
      state.status = action.status
      state.errorMessage = action.error.message
    }
  },

})