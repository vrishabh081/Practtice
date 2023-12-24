// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {
    name: "",
    email: "",
    password: ""
  },
  isLoading: false,
  isError: false
};

// Generic Async Thunk Action Generator
const createAsyncThunkAction = (typePrefix, apiEndpoint) => {
  return createAsyncThunk(`auth/${typePrefix}`, async (requestData) => {
    try {
      const res = await axios.post(apiEndpoint, requestData);
      return res.data;
    } catch (error) {
      throw error;
    }
  });
};

// Generic Reducer Handling Function
const handleAsyncThunkAction = (builder, action, stateUpdater) => {
  builder.addCase(action.pending, (state) => {
    state.isLoading = true;
    state.isError = false;
  });
  builder.addCase(action.fulfilled, (state, action) => {
    stateUpdater(state, action.payload);
    state.isLoading = false;
  });
  builder.addCase(action.rejected, (state) => {
    state.isLoading = false;
    state.isError = true;
  });
};

// Async Thunk Actions
export const registerUser = createAsyncThunkAction("registerUser", "http://localhost:8000/users");
export const loginUser = createAsyncThunkAction("loginUser", "http://localhost:8000/login");

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle extra reducers for the registerUser async thunk action
    handleAsyncThunkAction(builder, registerUser, (state, payload) => {
      state.user = payload;
    });

    // Handle extra reducers for the loginUser async thunk action
    handleAsyncThunkAction(builder, loginUser, (state, payload) => {
      state.user = payload;
    });
  }
});

export { registerUser, loginUser };
export default authSlice.reducer;