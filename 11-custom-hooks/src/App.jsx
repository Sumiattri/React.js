import React from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      {data &&
        data.map((user) => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
            </div>
          );
        })}
    </>
  );
}

export default App;
