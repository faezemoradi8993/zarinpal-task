import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
//  import the thunk
import { addUser } from '../../api'


//create the slice
const initialState = {
    users: [],
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addUser.fulfilled, (state, action) => {
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
            .addCase(addUser.pending, (state, action) => {
                const { requestId,arg } = action?.meta
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                    state.currentRequestId =requestId
                    state.users = [...state.users, arg]
                }
            })
            .addCase(addUser.rejected, (state, action) => {
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
export default userSlice.reducer