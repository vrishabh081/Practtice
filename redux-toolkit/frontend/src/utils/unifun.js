import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Functions-
export const uniFun = (type) => {
    return createAsyncThunk(type, async ({method, url, data}) => {
        try{
            const res = await axios({
                method,
                url: `http://localhost:8000/${url}`,
                data
            })
            return res.data
        }
        catch(error){
            throw error
        }
    })
}