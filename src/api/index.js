import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'
axios.defaults.baseURL = "https://test.com/api/";

//product
export const addProduct = createAsyncThunk('products/addProduct', async (formData) => {
    if (formData) {
        const response = await axios.post("product/testadd", formData)
        return response?.data
    } else return null

    //  "response.data" in "slice extrareducers" is accessable  with "action.payload" 
})

//user
export const addUser = createAsyncThunk('users/addUser', async (formData) => {
    if (formData) {
        const response = await axios.post("users/testadd", formData)
        return response?.data
    } else return null
})