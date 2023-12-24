import { createSlice } from "@reduxjs/toolkit";
import { uniFun } from "./src/utils/unifun";

const initState = {
    todos: [],
    isLoading: false,
    isError: false,
    todoStatus: ""
}

// Functions-
// export const addTodo = createAsyncThunk("todo/addTodo", async (data) => {
//     try{
//         const res = await axios.post("http://localhost:8000/todos", {...data, status: false});
//         console.log(res);
//     }
//     catch(error){
//         throw error
//     }
// })

// export const getTodoList = createAsyncThunk("todo/getTodoList", async (data) => {
//     try{
//         const res = await axios.get("http://localhost:8000/todos");
//         return res.data
//     }
//     catch(error){
//         throw error
//     }
// })

// export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
//     try{
//         const res = await axios.delete(`http://localhost:8000/todos/${id}`);
//         return res.data
//     }
//     catch(error){
//         throw error
//     }
// })

export const addTodo = uniFun("todo/addTodo");
export const getTodoList = uniFun("todo/getTodoList");
export const deleteTodo = uniFun("todo/deleteTodo");

const todoSlice = createSlice({
    name: "todo",
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        // Add Todo-
        builder.addCase(addTodo.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.todoStatus = "Added Successfully"
        })
        builder.addCase(addTodo.rejected, (state) => {
            state.isLoading = false;
            state.isError = true
        })

        // Get Todo List-
        builder.addCase(getTodoList.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getTodoList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.todos = action.payload
        })
        builder.addCase(getTodoList.rejected, (state) => {
            state.isLoading = false;
            state.isError = true
        })

        // Delete Todo-
        builder.addCase(deleteTodo.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        builder.addCase(deleteTodo.rejected, (state) => {
            state.isLoading = false;
            state.isError = true
        })
    }
})

export default todoSlice.reducer