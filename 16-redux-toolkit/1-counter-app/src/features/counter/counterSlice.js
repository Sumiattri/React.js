import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

//why increment and decrement are exported as counterSlice.actions

// ⸻

// 🧱 Suppose you write this slice:

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: 0,
//   reducers: {
//     increment: (state) => state + 1,
//     decrement: (state) => state - 1,
//   }
// });

// ⸻

// 1️⃣ What Redux Toolkit does for you:

// When you write the above code, Redux Toolkit secretly does this in the background:

// a. Creates Action Types:

// "counter/increment"
// "counter/decrement"

// b. Creates Action Creator Functions:

// These are functions that return action objects:

// function increment() {
//   return { type: 'counter/increment' };
// }

// function decrement() {
//   return { type: 'counter/decrement' };
// }

// So instead of you writing these by hand, Redux Toolkit gives them to you automatically like this:

// counterSlice.actions.increment
// counterSlice.actions.decrement

// ⸻

// 2️⃣ So what is counterSlice.actions?

// It’s just an object that looks like this:

// {
//   increment: function () { return { type: 'counter/increment' } },
//   decrement: function () { return { type: 'counter/decrement' } }
// }

// So when you write:

// export const { increment, decrement } = counterSlice.actions;

// You’re simply pulling those two functions out from that object so you can use them in your app.

// ⸻

// 3️⃣ Why do we need these functions?

// Because we need to dispatch actions like this in our components:

// dispatch(increment());
// dispatch(decrement());

// These action creators return action objects like { type: 'counter/increment' } which go to the reducer to update the state.

// ⸻

// 🧠 Think of it like:

// If Redux was a pizza shop 🍕:
// 	•	createSlice() is like defining the menu and kitchen
// 	•	actions are the order slips (“Make one increment pizza!”)
// 	•	dispatch(increment()) is sending the order to the kitchen
// 	•	The reducer is the chef who updates the pizza counter

// ⸻

// Let me know if you want a complete working example to see this in code. It’ll click instantly. 😄
