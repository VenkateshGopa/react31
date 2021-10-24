import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
  name: "cart",
  initialState: {
    posts:[],
    users:[]
  },
  reducers: {
    replaceposts(state, actions){
        state.posts= actions.payload.posts
    } ,
    replaceusers(state, actions){
        state.users= actions.payload.users
    } 
  },
});
export const postactions = postSlice.actions;
export default postSlice;
