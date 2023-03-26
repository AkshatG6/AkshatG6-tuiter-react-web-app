import { createSlice } from "@reduxjs/toolkit";
import users from "../data/users.json"

const profileReducer = createSlice({
     name: "users",
     initialState: users,     // initialize the reducer's state
    reducers: {
        changeUserInfo(state,action) {
            // state.firstName = action.payload.firstName;
            // state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.website = action.payload.website;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const {changeUserInfo} = profileReducer.actions;
export default profileReducer.reducer;