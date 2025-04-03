import { useState } from "react";
import CounterAppWithUseState from "./CounterAppWithUseState";
import CounterAppWithUseReducer from "./CounterAppWithUseReducer";

function App() {
  return (
    <>
      <CounterAppWithUseState />
      <CounterAppWithUseReducer />
    </>
  );
}

export default App;
