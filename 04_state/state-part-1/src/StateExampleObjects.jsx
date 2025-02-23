import { useState } from "react";

function StateExampleObjects() {
  const [person, setPerson] = useState({
    id: 1,
    firstName: "Sumit",
    lastName: "Attri",
    email: "attri@google.com",
    age: 21,
  });
  function changeAge() {
    //setPerson({ ...person, age: person.age + 1 }); // by doing ....person inside the object that we are passing to setPerson function,
    // we are copying all the elements of person object and then we are updating age, it is basic js concept of copying object in a new obj
    setPerson((prevState) => ({ ...prevState, age: prevState.age + 1 }));
  }

  return (
    <>
      <div>
        <p>FirstName: {person.firstName}</p>
        <p>LastName: {person.lastName}</p>
        <p>Email: {person.email}</p>
        <p>Age:{person.age}</p>
        <button onClick={changeAge}>Increase Age</button>
      </div>
    </>
  );
}

export default StateExampleObjects;
