import { createSlice } from '@reduxjs/toolkit'

export const checkout = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        product: (state, action) => {
            state.push(action.payload)
        },
        reproduct: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },

    }
})
export const { product,reproduct } = checkout.actions;
export default checkout.reducer;