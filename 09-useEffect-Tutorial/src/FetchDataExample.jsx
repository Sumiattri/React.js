import { useEffect, useState } from "react";
import User from "./User";

const URL = "https://jsonplaceholder.typicode.com/users";

function FetchDataExample() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  //   Using Fetch API(promises based)

  // useEffect(() => {
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  //  Using Async Await

  async function fetchData() {
    const response = await fetch(URL);
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
  useEffect(() => {
    fetchData();
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

export default FetchDataExample;
