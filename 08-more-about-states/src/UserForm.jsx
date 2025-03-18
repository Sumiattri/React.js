import React from "react";
import { useState } from "react";
import DisplayFullName from "./DisplayFullName";

function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  return (
    <>
      <form>
        <label htmlFor="firstName">Firstname : </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="firstName">Lastname : </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </form>
      <p> firstname : {firstName}</p>
      <p>lastname: {lastName}</p>
      <p>
        fullname : <DisplayFullName fullName={fullName} />
      </p>
    </>
  );
}

export default UserForm;
