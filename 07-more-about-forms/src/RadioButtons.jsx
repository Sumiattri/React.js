import React from "react";
import { useState } from "react";

function RadioButtons() {
  const [gender, setGender] = useState("");
  return (
    <div className="App">
      <h1>Radio buttons</h1>
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={() => {
          setGender("male");
        }}
        checked={gender === "male"}
        id="male"
      />

      <br />

      <label htmlFor="female">Female</label>
      <input
        type="radio"
        onChange={() => {
          setGender("female");
        }}
        id="female"
        checked={gender === "female"}
      />

      <br />

      <label htmlFor="others">Others</label>
      <input
        type="radio"
        onChange={() => {
          setGender("others");
        }}
        checked={gender === "others"}
        id="others"
      />
    </div>
  );
}

export default RadioButtons;
