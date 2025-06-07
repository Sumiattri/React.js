import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const response = await axios.get("http://localhost:8001/todos");
  console.log(response);
  return response.data;
});

export const addTodos = createAsyncThunk("todos/add", async (title) => {
  const response = await axios.post("http://localhost:8001/todos", {
    title: title,
    completed: false,
  });
  console.log(response);
  return response.data;
});

export const deleteTodos = createAsyncThunk("todos/delete", async ({ id }) => {
  await axios.delete(`http://localhost:8001/todos/${id}`);
  return { id };
});
export const toggleTodos = createAsyncThunk(
  "todos/toggle",
  async ({ id, completed }) => {
    const response = await axios.patch(`http://localhost:8001/todos/${id}`, {
      completed: !completed,
    });
    return response.data;
  }
);

const todosSlice = createSlice({
  initialState: {
    todos: [],
  },
  name: "todos",
  extraReducers: (builders) => {
    builders.addCase(fetchTodos.pending, (state, action) => {
      console.log("fetchTodos,pending...");
    });
    builders.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("fetchTodos,fullfilled");
      console.log(action.payload);
      state.todos = action.payload;
    });
    builders.addCase(fetchTodos.rejected, (state, action) => {
      console.log("fetchTodos,rejected....");
      console.log(action.error);
    });
    builders.addCase(addTodos.pending, (state, action) => {
      console.log("pending...");
    });
    builders.addCase(addTodos.fulfilled, (state, action) => {
      console.log("fullfilled");

      state.todos.push(action.payload);
    });
    builders.addCase(addTodos.rejected, (state, action) => {
      console.log("rejected....");
    });
    builders.addCase(deleteTodos.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    });
    builders.addCase(toggleTodos.fulfilled, (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = action.payload.completed;
        }
      });
    });
  },
});
export default todosSlice.reducer;
