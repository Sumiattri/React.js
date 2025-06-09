import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
  { id: 1, title: "do-nothing", completed: false },
  { id: 2, title: "do-everything", completed: true },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
    toggleTodo: (state, action) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});
export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
