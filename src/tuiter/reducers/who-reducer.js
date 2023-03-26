import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/who.json"

const whoSlice = createSlice({
 name: "who",
 initialState: whoArray     // initialize the reducer's state

});

export default whoSlice.reducer;