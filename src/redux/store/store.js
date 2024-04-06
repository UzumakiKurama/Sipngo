import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import userDetailsReducer from "../features/userDetailsSlice";
import cartReducer from "../features/cartSlice";

export default configureStore({
  reducer:{
    user : userReducer,
    userDetails : userDetailsReducer,
    cart: cartReducer,
  }  
});