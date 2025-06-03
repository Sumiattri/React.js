import { memo } from "react";

function SecondChild({ state1 }) {
  console.log("Second child rendered");

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px 5px",
        backgroundColor: state1 ? "green" : "red",
        margin: "10px",
      }}
    >
      <p>container for state 1 </p>
    </div>
  );
}

export default memo(SecondChild);
// what we have done above is called exporting memoized version of SecondChild, by use of react memo.
// by doing so, react remembers the result of each render of SecondChild and uses these results directly inspite of rendering
// SecondcChild each time its parent renders. Secondchild will not re-render untill and unless its prop changes(state1 in above case)
//or its own state changes
