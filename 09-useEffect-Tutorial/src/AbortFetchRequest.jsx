import { useEffect, useState } from "react";
import User from "./User";

const URL = "https://jsonplaceholder.typicode.com/users";

function AbortFetchRequest() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    console.log(controller);

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
  }, []);

  if (isLoading) {
    return <h1>Please wait while loading...</h1>;
  }
  if (isError) {
    return <h1>{errorMsg}</h1>;
  }

  return (
    <>
      {/* {data.map((user) => (
        <p key={user.id}>
          {user.name} <br /> {user.address.city} <br /> {user.company.bs}
        </p>
      ))} */}

      {data.map((user) => {
        return <User key={user.id} {...user} />;
      })}
    </>
  );
}

export default AbortFetchRequest;
//
