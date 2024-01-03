import { createSlice, nanoid } from "@reduxjs/toolkit";

const initState = {
    todos : [{key: "value1", id: 1}]
}
const todoSlice = createSlice({
    name: "Todo",
    initialState: initState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {key: action.payload, id: nanoid()};
            state.todos.push(newTodo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((el) => el.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);

            if (todoToUpdate) {
                todoToUpdate.key = text;
            }
        },
    }
})

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer;