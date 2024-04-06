import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:"", 
    password:"", 
    user_name:"", 
    phone_no:"", 
    user_location:""
}

const userDetails = createSlice({
    name : "userDetails",
    initialState,
    reducers:{
        setUserDetails : (state, {payload , type}) => {
            console.log(payload);
            state.email = payload.data.email;
            state.password = payload.data.password;
            state.user_name = payload.data.name;
            state.phone_no = payload.data.phoneNumber;
            state.user_location = payload.data.location;
        }
    }
})

export const {setUserDetails} = userDetails.actions;
export default userDetails.reducer;