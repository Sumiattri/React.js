// IN react we cann't use normal variable to change the UI like in below example

// function SimpleStateExample() {
//   let firstName = "Sumit";
//   function handleNameChange() {
//     firstName = "Aryan";
//     console.log(firstName);
//   }
//   return (
//     <>
//       <h1>{firstName}</h1>
//       <button onClick={handleNameChange}>
//         Click here to change the above name
//       </button>
//     </>
//   );
// }

//In above example, we changed the firstName from Sumit to Aryan when handleNameChange is called on click event on button,
//  but it is not changed on Web page UI

//useState --> a hook
//useState(defaultValues)--> returns array-->[StateValue,functionToUpdateThatStateValue]

//state->intialValue, state->changedValue ==> when state changes, react renders our component and then UI changes

import { useState } from "react";
function SimpleStateExample() {
  console.log("component rendered");
  // const returnedArray = useState("Harshit");
  // let firstName = returnedArray[0];
  // const functionToUpdatefirstName = returnedArray[1];
  // function handleNameChange() {
  //   functionToUpdatefirstName("Aryan");
  // }

  const [firstName, setfirstName] = useState("Harshit");
  function handleNameChange() {
    if (firstName === "Harshit") {
      setfirstName("Aryan");
    } else {
      setfirstName("Harshit");
    }
  }
  return (
    <>
      <h1>{firstName}</h1>
      <button onClick={handleNameChange}>Click to change the Name</button>
    </>
  );
}

export default SimpleStateExample;
