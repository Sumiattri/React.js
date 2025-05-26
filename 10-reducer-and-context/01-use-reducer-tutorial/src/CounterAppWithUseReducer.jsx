import { useReducer } from "react";

// useReducer is a hook that is used to manage complex state logic in React applications.
// useReducer also returns a array like useState having two elements , first one is the state and second one
// is the function to update the state whose default name is dispatch

// in dispatch function we pass an object as an argument which is called action
// in action we define the type of action we want to perform by "type" key whose value is anything  logical to the action
// we want to perform

// useReducer also takes two arguments
// 1. reducer function which takes two arguments state and action
// 2. initial state which is the initial value of the state

// when we call the dispatch function we pass an action object to it, then it automatically calls the reducer function

function CounterAppWithUseReducer() {
  const initialState = { counter: 0 };
  const reducer = (state, action) => {
    if (action.type === "increment") {
      return { ...state, counter: state.counter + 1 };
    }
    if (action.type === "reset") {
      return { ...state, counter: 0 };
    }
    if (action.type === "decrement") {
      return { ...state, counter: state.counter - 1 };
    }
    // throw new Error("Unknown action type");

    // if we don't want to throw an error we can just return the state
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useReducer Tutorial</h1>
      <hr />
      <h2>Counter Application</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <h1>{state.counter}</h1>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          Decrease
        </button>
      </form>
    </div>
  );
}

export default CounterAppWithUseReducer;
