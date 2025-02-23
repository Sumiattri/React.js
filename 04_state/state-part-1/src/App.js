import React from "react";
import SimpleStateExample from "./SimpleStateExample";
import Counter from "./counter";
import StateExampleArray from "./StateExampleArray";
import StateExampleObjects from "./StateExampleObjects";

function App() {
  return (
    <>
      <SimpleStateExample />
      <Counter /> <br /> <br />
      <StateExampleArray /> <br /> <br />
      <StateExampleObjects />
    </>
  );
}

export default App;
