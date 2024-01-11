import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './fetures/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})