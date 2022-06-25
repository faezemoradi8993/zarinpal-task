import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const postData = createAsyncThunk("postData", async (payload) => {
    console.log("https://".concat(payload?.endPoint));
        const response = await axios.post("https://"+payload?.endPoint, payload.data)
        return response?.data
})