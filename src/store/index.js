import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../slices/productSlice"
import userReducer from "../slices/userSlice"

const store = configureStore({ reducer: { products: productReducer, users: userReducer } })

export default store