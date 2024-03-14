import { createSlice } from '@reduxjs/toolkit'

export const AddCart = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addtocart: (state, action) => {
            state.push(action.payload)
        },
        removecart: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
       
       

    }
})
export const { addtocart, removecart,product } = AddCart.actions;
export default AddCart.reducer;