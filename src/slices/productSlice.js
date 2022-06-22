import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
//  import the thunk
import { addProduct } from '../api'


//create the slice
const initialState = {
    products: [{ productname: "کتاب", count: 5 },],
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.fulfilled, (state, action) => {
                // const { requestId } = action.meta
                // if (
                //     state.loading === 'pending' &&
                //     state.currentRequestId === requestId
                // ) {
                    state.loading = 'idle'
                    state.products = [...state.users, (action?.meta?.arg)]
                    state.currentRequestId = undefined
                // }
            })
            .addCase(addProduct.pending, (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                    state.currentRequestId = action.meta.requestId
                    state.products.push(action.meta.arg)
                }
            })
            .addCase(addProduct.rejected, (state, action) => {
                const { requestId } = action.meta.requestId
                // if (
                //     state.loading === 'pending' &&
                //     state.currentRequestId === requestId
                // ) {
                    state.loading = 'idle'
                    state.error = action?.error
                    state.currentRequestId = undefined
                    toast.error(action?.error?.message)
                // }
            })
    }
})
export default productSlice.reducer