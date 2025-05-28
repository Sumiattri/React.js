import React from "react";
import { useState, useEffect } from "react";

function useFetch(URL) {
  const [data, setData] = useState(null);

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
