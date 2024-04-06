import { createSlice } from "@reduxjs/toolkit";
import showErrorToast from "../../helpers/ErrorHandlerPopup";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        cartItems : {},
        totalAmount : 0
    },
    reducers : {
        addToCart : (state, {payload}) => {
            if(state.cartItems[payload.name]){
                state.cartItems[payload.name].cnt += 1;
            } else {
                state.cartItems[payload.name] = {amount: payload.price, cnt: 1, id: payload.id} 
            }
        },
        removeFromCart : (state, {payload}) => {
            if(state.cartItems[payload.name].cnt === 0){
                showErrorToast("Can't order negative juice.Want to make a shake yourself 😊");
                return ;
            } else {
                state.cartItems[payload.name].cnt -= 1;
            }
        },
        calculateTotalAmount : (state) => {
            let amountArray = Object.keys(state.cartItems).map(item => state.cartItems[item].cnt*state.cartItems[item].amount);
            state.totalAmount = amountArray.reduce((total,current) => total+current, 0);
        }
    }
});

export const {addToCart, removeFromCart, calculateTotalAmount} = cartSlice.actions;
export default cartSlice.reducer;