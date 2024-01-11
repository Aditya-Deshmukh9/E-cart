import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        increaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
        },
    },
});



export const getTotal = state =>
    state.cart.items.reduce((total, item) => total + item.price * 75 * item.quantity, 0);


export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer