// when use strcict mode, then the code execution flow on component mount happeents something like below:

// // 1. component mount
// // 2. useEffect callback runs
// // 3. cleanup function runs
// // 4. useEffect callback runs

// hence the callback function inside useEffect will run twice

// Using the AbortController API to abort fetch requests in useEffect actually helps
// to solve the problem of double execution of the callback function in React Strict Mode (development mode).

//	When Strict Mode runs the effect twice, the cleanup function is invoked before the second effect,
//  and the AbortController.abort() ensures that the fetch request is properly aborted.

import { useState, useEffect } from "react";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController instance
    const signal = controller.signal; // Get the signal to pass to fetch

    // Fetch request with AbortController signal
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch request aborted!");
        } else {
          console.error("Fetch error:", error);
        }
      });

    // Cleanup function to abort the fetch if component unmounts or re-renders
    return () => {
      controller.abort(); // Abort the fetch request if unmounted or re-rendered
    };
  }, []); // Effect runs only once

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};
