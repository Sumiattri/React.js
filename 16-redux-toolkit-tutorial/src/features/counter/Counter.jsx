import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
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
