import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const response = await axios.get("http://localhost:8001/todos");
  console.log(response);
  return response.data;
});

const todosSlice = createSlice({
  initialState: [],
  name: "todos",
  extraReducers: (builders) => {
    builders.addCase(fetchTodos.pending, (state, action) => {
      console.log("pending...");
    });
    builders.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("fullfilled");
      console.log(action.payload);
    });
    builders.addCase(fetchTodos.rejected, (state, action) => {
      console.log("rejected....");
      console.log(action.error);
    });
  },
});
export default todosSlice.reducer;
