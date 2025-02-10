import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiContacts, clearToken, setToken } from "../../../config/api";



export const registerThunk = createAsyncThunk("register", async (credentials, thunkAPI) => {
    try {
        const { data } = await apiContacts.post("/users/signup", credentials);
        setToken(data.token); 
        return { user: data.user, token: data.token }; 
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});



export const loginThunk = createAsyncThunk("login", async (credentials, thunkAPI) => {
    try {
        const { data } = await apiContacts.post("/users/login", credentials);
        setToken(data.token);
        return { user: data.user, token: data.token }; 
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
        return thunkAPI.rejectWithValue("No token found");
    }

    try {
        setToken(token); // ✅ Устанавливаем токен
        const { data } = await apiContacts.get("/contacts");
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});


export const logoutThunk = createAsyncThunk("logout", async (_, thunkAPI) => {
    try {
        await apiContacts.post("/users/logout");
        clearToken(); 
        return { user: null, token: null }; 
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});


export const getMeThunk = createAsyncThunk("getMe", async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
        return thunkAPI.rejectWithValue("Token is missing"); 
    }

    try {
        setToken(token); 
        const { data } = await apiContacts.get("/users/current");
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
