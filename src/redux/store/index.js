import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import dataReducer from "../slices/dataSlice"

const persistConfig = {
  key: 'root',
  storage,
}

const store = configureStore({ reducer: { data: persistReducer(persistConfig, dataReducer) } })

export const persistor = persistStore(store)
export default store