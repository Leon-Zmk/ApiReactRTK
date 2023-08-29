import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';


const initialState={
    user:null,
    token:null,
    email:null,
}

export const authSlice=createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        addUser:(state,{payload}) =>{
            state.user=payload.user;
            state.token=payload.token;
            state.email=payload.email;
            Cookies.set("name",JSON.stringify(payload.user));
            Cookies.set("token",payload.token);
            Cookies.set("email",JSON.stringify(payload.email));
        },
        removeUser:(state,{payload})=>{
            state.user=null;
            state.token=null;
            state.email=null;
            Cookies.remove("name");
            Cookies.remove("token");
            Cookies.remove("email");
        }
    }
})

export const {addUser,removeUser}=authSlice.actions;
export default authSlice.reducer