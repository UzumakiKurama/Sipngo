import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uid : ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser : (state, { payload } ) => {
            state.userId = payload.uid;
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

