import { createSlice } from "@reduxjs/toolkit";
import { handleAsyncThunkAction } from "../utils/handleAsyncThunkFun";
import { addTodo, deleteTodo, getTodoList, updateTodo } from "../utils/asyncFun";

// Initial state-
const initState = {
    todos: [],
    isLoading: false,
    isError: false,
    todoStatus: ""
}

// Reducer function-
const todoSlice = createSlice({
    name: "todo",
    initialState: initState,
    reducers: {
        mutateTodos : (state, {payload}) => {
            state.todos.forEach((el) => el.id === payload.todo.id && (el.task = payload.value))
        }
    },
    extraReducers: (builder) => {
        handleAsyncThunkAction(builder, addTodo, (state) => state.todoStatus = "Added Successfully")
        handleAsyncThunkAction(builder, getTodoList, (state, payload) => state.todos = payload)
        handleAsyncThunkAction(builder, updateTodo, (state) => state.todoStatus = "Updated Successfully")
        handleAsyncThunkAction(builder, deleteTodo, (state) => state.todoStatus = "Delete Successfully")
    }
})

export const {mutateTodos} = todoSlice.actions
export default todoSlice.reducer