import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  // inside store redux makes a global state oblect like
  //   state = {
  //            counter: { count: 0 },
  //            xyz: { xyzState: 1 }
  //           }
  // this name "counter"   come from the keys you define in the reducer object when creating the store.

  const dispatch = useDispatch();

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>➕</button>
      <button onClick={() => dispatch(decrement())}>➖</button>
    </>
  );
}

export default Counter;

// “In dispatch, we don’t pass an action object manually, we just call a function like increment() — why?”
//

//  🛠️ In Traditional Redux (Before Redux Toolkit), You used to write actions manually like this:

// actions.js

// export const increment = () => ({
//   type: INCREMENT,
// });

// And then in component:
// dispatch(increment()); // returns { type: "INCREMENT" }
// So here, increment() was a function that returned a plain action object.

// 🚀 In Redux Toolkit (RTK), When you create a slice using createSlice(), it automatically generates these action creators for you.
// RTK automatically creates this for you behind the scenes:
// const increment = () => ({
//   type: "counter/increment"
// });
