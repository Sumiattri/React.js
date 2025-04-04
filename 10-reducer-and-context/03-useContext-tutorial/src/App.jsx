// to avoid prop-drilling we use context

// to do so, we wrapps the component and its child component in context-wrapper
// then we put put data(function,state,etc) in that wrapper
// then it can be accessed throughout the components without prop drilling

// how to use context
// step 1 : import createContext from react
// step 2 : create a context outside the component(function)
// step 3 : wrap application in context.Provider

import MyComponent from "./MyComponent";
import { createContext } from "react";
// we could have also created the context in main.js inspite of app.js as app.js is also a child of main.js

const MyAppContext = createContext();
// export const MyAppContext = createContext();
// above line if we want to create and export the context at the same time

function App() {
  function myFunc() {
    console.log("Hello from myFunc");
  }
  return (
    <MyAppContext.Provider
      value={{ key1: "value1", key2: "value2", someFunc: myFunc }}
    >
      <div
        style={{
          padding: "2rem",
          margin: "2rem",
          backgroundColor: "#C8E4B2",
          borderRadius: "10px",
          height: "1000vh",
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1>APP</h1>
        <MyComponent />
      </div>
    </MyAppContext.Provider>
  );
}

export default App;
export { MyAppContext };
