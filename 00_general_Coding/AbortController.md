What is AbortController in JavaScript?

AbortController is a built-in JavaScript API that allows you to abort (cancel) fetch requests or any other async operations that support abort signals. It helps prevent unnecessary API calls, memory leaks, and “state update on unmounted component” errors in React.

⸻

Understanding AbortController with Fetch

The AbortController API provides a way to create and manage an “abort signal”, which you can pass to fetch(). If you later decide to cancel the request, you call abort(), and the request stops.

Key Components: 1. AbortController → Creates an instance that controls the abortion of requests. 2. controller.signal → A signal that is passed to fetch() so it knows it can be aborted. 3. controller.abort() → Used to cancel the request when needed.

⸻

Example of AbortController in JavaScript

Here’s how AbortController works in a simple fetch request:

const controller = new AbortController(); // Create an instance
const signal = controller.signal; // Get the signal

fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => {
if (error.name === "AbortError") {
console.log("Fetch request was aborted!");
} else {
console.error("Fetch error:", error);
}
});

// Simulate aborting the request after 1 second
setTimeout(() => {
controller.abort(); // Cancels the fetch request
console.log("Request aborted!");
}, 1000);

⸻

How It Works 1. Create an AbortController instance → const controller = new AbortController(); 2. Pass controller.signal to fetch() → This tells fetch that it can be aborted. 3. Call controller.abort() when needed → Cancels the request before it completes. 4. Handle the aborted request inside .catch():
• If the request was aborted, it throws an error with error.name === "AbortError".

⸻

Why is AbortController Useful in React?
• Prevents API calls when the component unmounts (avoiding memory leaks).
• Cancels old requests when a new one starts (e.g., searching in real-time).
• Optimizes network usage (reduces unnecessary requests).

⸻

Using AbortController in React (useEffect)

Here’s an example where we cancel a request if the component unmounts:

import { useEffect, useState } from "react";

const DataFetcher = () => {
const [data, setData] = useState(null);

useEffect(() => {
const controller = new AbortController(); // Create controller
const signal = controller.signal; // Get signal

    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch request was aborted!");
        } else {
          console.error("Fetch error:", error);
        }
      });

    return () => {
      controller.abort(); // Cleanup: abort fetch if component unmounts
    };

}, []);

return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

⸻

Summary

✅ AbortController helps manage and cancel network requests.
✅ controller.signal is passed to fetch() to allow abortion.
✅ controller.abort() stops the request when needed.
✅ Useful in React for handling component unmounts & avoiding memory leaks.

Let me know if anything is unclear! 🚀
