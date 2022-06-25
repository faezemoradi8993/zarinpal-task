import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
//  import the thunk
import { postData } from '../../api'


//create the slice
const initialState = {
    data: [],
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
}
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postData.fulfilled, (state, action) => {
                const { requestId } = action?.meta
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = 'idle'
                    state.currentRequestId = undefined
                    toast.success("done!")
                }
            })
            .addCase(postData.pending, (state, action) => {
                const { requestId, arg } = action?.meta
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                    state.currentRequestId = requestId
                    state.data = [...state.data, arg.data]
                }
            })
            .addCase(postData.rejected, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = 'idle'
                    state.error = action.error
                    state.currentRequestId = undefined
                    toast.error(action?.error?.message)
                }
            })
    }
})
export default dataSlice.reducer