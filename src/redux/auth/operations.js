import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiContacts, clearToken, setToken } from "../../../config/api";



export const registerThunk = createAsyncThunk("register", async(credentials, thunkAPI) => {
    try{
        const { data } = await apiContacts.post("/users/signup", credentials);
        setToken(data.token);
        return data;
    }catch(e){
        return thunkAPI.rejectWithValue(e.message);
    }
})



export const loginThunk = createAsyncThunk("login", async(credentials, thunkAPI) => {
    try{
        const { data } = await apiContacts.post("/users/login", credentials);
        setToken(data.token)

        return data;
    }catch(e){
        return thunkAPI.rejectWithValue(e.message);
    }
});



export const logoutThunk = createAsyncThunk("logout", async(credentials, thunkAPI) => {
    try{
        await apiContacts.post("/users/logout");
        clearToken();
    }catch(e){
        return thunkAPI.rejectWithValue(e.message);
    }
})


export const getMeThunk = createAsyncThunk("getMe", async (_, thunkAPI) => { 
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
        return thunkAPI.rejectWithValue("Token is not found");
    }
    try {
        setToken(savedToken); 
        const { data } = await apiContacts.get("/users/current");
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});