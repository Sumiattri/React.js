import { useState } from "react";
import CounterAppWithUseState from "./CounterAppWithUseState";
import CounterAppWithUseReducer from "./CounterAppWithUseReducer";

function App() {
  return (
    <>
      <CounterAppWithUseState />
      <hr />
      <CounterAppWithUseReducer />
    </>
  );
}

export default App;
