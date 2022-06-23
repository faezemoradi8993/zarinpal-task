import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import productReducer from "../slices/productSlice"
import userReducer from "../slices/userSlice"

const persistConfig = {
  key: 'root',
  storage,
}

const store = configureStore({ reducer: { products: persistReducer(persistConfig, productReducer), users: persistReducer(persistConfig, userReducer) } })

export const persistor = persistStore(store)
export default store