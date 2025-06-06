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
  },
});
export default todosSlice.reducer;
