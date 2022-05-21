import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading:false,
    users:[],
    errMessage: null,
    activeUser: null
     
}



const userSlice =  createSlice({
    name:"user",
    initialState,
    reducers:{
       
        getUsersFetch: (state,action) => {
            state.isLoading = true;
        },
        getUsersSuccess: (state, action) => {
            state.isLoading =  false;
            state.users = [...state.users, ...action.payload]
        },
        getUsersFailure: (state, action)=> {
            state.isLoading = false;
            state.errMessage = action.payload;
        },
        getUserFetch: (state,action) => {
            state.isLoading = true;
        },
        getUserSuccess: (state, action) => {
            state.isLoading =  false;
            state.activeUser = action.payload;
        },
        getUserFailure: (state, action)=> {
            state.isLoading = false;
            state.errMessage = action.payload;
        },
        deleteUser: (state,action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    }

})


export const getUsers = state => state.usersData.users;
export default userSlice.reducer;
export const {getUsersFailure,getUsersFetch,getUsersSuccess,getUserFailure,getUserFetch,getUserSuccess,deleteUser} = userSlice.actions;