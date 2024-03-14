import { configureStore } from "@reduxjs/toolkit"
import AddCart from '../Store/Slice/Slice'
import checkout  from "./Slice/Slice2";
import User from "./Slice/User";
const store = configureStore({
    reducer: {
        cart: AddCart,
        buynow: checkout,
        user:User,
    }
})
export default store;