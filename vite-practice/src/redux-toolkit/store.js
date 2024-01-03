import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer";

const store = configureStore({
    reducer: {
        reducer: todoReducer
    }
})

export default store;