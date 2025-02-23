import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function StateExampleArray() {
  const [fruits, setFruits] = useState(["apple", "mango", "banana"]);
  function addFruit() {
    // setFruits(["New Fruit"]);   //if we do write this line of code, it will replace the previous elements of fruits array with "New Fruit"

    // setFruits([...fruits, "New Fruit"]);    // this is correct way

    //we can aslo write the above line of code like below using callback which is most optimal
    setFruits((previousState) => [...previousState, "New Fruit"]);
  }
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={uuidv4()}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add fruit</button>
    </>
  );
}

export default StateExampleArray;
