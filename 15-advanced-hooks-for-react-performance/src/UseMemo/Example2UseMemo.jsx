import { useState } from "react";
import DisplayFruits from "./DisplayFruits";
import { useMemo } from "react";

function Example2UseMemo() {
  const [userName, setUserName] = useState("");
  //   const fruits = [
  //     { fruitName: "apple", emoji: "🍎" },
  //     { fruitName: "orange", emoji: "🍊" },
  //     { fruitName: "banana", emoji: "🍌" },
  //   ];
  const fruits = useMemo(() => {
    return [
      { fruitName: "apple", emoji: "🍎" },
      { fruitName: "orange", emoji: "🍊" },
      { fruitName: "banana", emoji: "🍌" },
    ];
  }, []);

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <DisplayFruits fruits={fruits} />
      {/* even if we are using memoized export at DisplayFruits, it renders every
      time Example2 renders, cause fruits is an array means a reffernce type
      data-type, means every time component renders, a new refernce is created
      means a mew array is created So , on each render, a new fruits prop is
      passes to DisplayFruits and that's why it render too along with Example2.
      To avoid it we will use useMemo 
      	It remembers the array between renders.
	•	It only re-creates the array if the dependency array changes (in this case [], so it never re-creates).
	•	So fruits keeps the same reference every time — no unnecessary re-renders in child components like DisplayFruits.
      */}
    </div>
  );
}

export default Example2UseMemo;
