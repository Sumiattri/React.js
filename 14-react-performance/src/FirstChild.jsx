import { useState } from "react";
import SecondChild from "./SecondChild";

function FirstChild() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <form action="">
        <label htmlFor="state1">State 1 checkbox</label>
        <input
          type="checkbox"
          value={state1}
          onChange={() => {
            setState1(!state1);
          }}
          id="state1"
        />
        <label htmlFor="state2">State 2 checkbox</label>
        <input
          type="checkbox"
          value={state2}
          onChange={() => [setState2(!state2)]}
          id="state2"
        />
      </form>
      <SecondChild state1={state1} />
    </div>
  );
}

export default FirstChild;
