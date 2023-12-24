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
  isError: false,
  authStatus: ""
};

// Async Thunk Action-

// Register-
export const registerUser = createAsyncThunk("auth/registerUser", async (userData) => {
  try {
    const res = await axios.post("http://localhost:8000/users", userData);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const loginUser = createAsyncThunk("auth/loginUser", async (userData) => {
    try{
        const res = await axios.get("http://localhost:8000/users");
        const findUser = res.data.find((el) => el.email === userData.email && el.password === userData.password);
        if(findUser){
            return res.data
        }
    }
    catch(error){
        throw error
    }
})



const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Handle extra reducers for the async thunk action

    // Register-
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.authStatus = "Successfully sign up";
      state.isLoading = false;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Login-
    builder.addCase(loginUser.pending, (state) => {
        state.isLoading = true;
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if(action.payload){
            state.authStatus = "Successfully logged in"
        }
    })
    builder.addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true
    })
  }
});

export default authSlice.reducer;



























// // login-
// builder.addCase(loginUser.pending, (state) => {
//     state.isLoading = true;
//     state.isError = false;
//   });
//   builder.addCase(loginUser.fulfilled, (state, action) => {
//     state.authStatus = "Successfully logged in";
//     state.isLoading = false;
//     localStorage.setItem("user", JSON.stringify(action.payload))
//   });
//   builder.addCase(loginUser.rejected, (state) => {
//     state.isLoading = false;
//     state.isError = true;
//   });