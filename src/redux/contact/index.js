import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetContact = createAsyncThunk("Form/get", async () => {
  return await axios.get(`${API_URL}/form`).then((response) => response.data);
});

const ContactSlice = createSlice({
  name: "Form",
  initialState: {
    getContact: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetContact.pending]: (state, action) => {
      state.getContact.loading = true;
    },
    [GetContact.fulfilled]: (state, action) => {
      state.getContact.Error = false;
      state.getContact.Success = true;
      state.getContact.Loading = false;
      state.getContact.Data = action.payload;
    },
    [GetContact.rejected]: (state, action) => {
      state.getContact.Error = true;
      state.getContact.Success = false;
      state.getContact.Loading = false;
      state.getContact.Data = [];
    },
  },
});

export const {} = ContactSlice.actions;
export default ContactSlice.reducer;
