import React from "react";
import { useState, useEffect } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const URL = "https://jsonplaceholder.typicode.com/users";
  async function fetchData() {
    const response = await fetch(URL);
    const resData = await response.json();
    setData(resData);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return { data: data };
}

export default useFetch;
