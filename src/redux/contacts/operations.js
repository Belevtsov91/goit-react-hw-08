
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiContacts } from "../../../config/api";




export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token; 

    if (!token) {
      return thunkAPI.rejectWithValue("No token found. Please log in again.");
    }

    try {
      apiContacts.defaults.headers.common.Authorization = `Bearer ${token}`; 
      const { data } = await apiContacts.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContactsThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      await apiContacts.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await apiContacts.post("contacts", contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
