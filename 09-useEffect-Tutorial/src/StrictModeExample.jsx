// when use strcict mode, then the code execution flow on component mount happens something like below:

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

const StrictModeExample = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      const response = await fetch(URL, { signal: signal });
      if (!(response.status >= 200 && response.status <= 299)) {
        setIsError(true);
        setErrorMsg(`${response.status} Error`);
        setIsLoading(false);
        return;
      }
      const data = await response.json();
      console.log(data);
      setData(data);
      setIsLoading(false);
    }
    fetchData();
    return () => {
      console.log("Aborting request");

      controller.abort();
      console.log("Request aborted");
    };
  }, []); // Effect runs only once

  if (isLoading) {
    return <h1>Please wait while loading...</h1>;
  }
  if (isError) {
    return <h1>{errorMsg}</h1>;
  }

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

export default StrictModeExample;
