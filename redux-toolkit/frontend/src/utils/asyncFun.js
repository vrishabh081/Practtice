import { uniFun } from "./unifun";

// Handle async function-
export const addTodo = uniFun("todo/addTodo");
export const getTodoList = uniFun("todo/getTodoList");
export const updateTodo = uniFun("todo/updateTodo");
export const deleteTodo = uniFun("todo/deleteTodo");