import React from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const { data } = useFetch();
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
