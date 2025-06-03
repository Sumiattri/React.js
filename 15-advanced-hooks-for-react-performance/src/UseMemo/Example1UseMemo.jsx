import { useState } from "react";
import { fibonacci } from "./fibonacci";
import useTime from "./useTime";
import { useMemo } from "react";

function Example1UseMemo() {
  const time = useTime();

  const [selectedNumber, setSelectedNumber] = useState("");

  const fibarray = useMemo(() => {
    console.log("hii");

    const result = [];
    for (let i = 1; i <= selectedNumber; i++) {
      result.push(fibonacci(i));
    }
    return result;
  }, [selectedNumber]);

  return (
    <div>
      {time.toString()}
      <br />
      <input
        type="number"
        value={selectedNumber}
        onChange={(e) => setSelectedNumber(e.target.value)}
        name="ejslc"
      />
      {selectedNumber > 0 && (
        <div>
          <h1> First {selectedNumber} fibonacci numbers are:</h1>
          {fibarray.join(",")}
        </div>
      )}
    </div>
  );
}

export default Example1UseMemo;
