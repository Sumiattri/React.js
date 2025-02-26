import React from "react";
import { useState } from "react";

// function HandleMultipleInputs() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");

//   return (
//     <div>
//       <form>
//         <div>
//           <label htmlFor="">FirstName : </label>
//           <br />
//           <input
//             type="text"
//             value={firstName}
//             onChange={(e) => {
//               return setFirstName(e.target.value);
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="">LastName : </label>
//           <br />
//           <input
//             type="text"
//             value={lastName}
//             onChange={(e) => {
//               return setLastName(e.target.value);
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="">Password : </label>
//           <br />
//           <input
//             type="text"
//             value={password}
//             onChange={(e) => {
//               return setPassword(e.target.value);
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="">Email : </label>
//           <br />
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => {
//               return setEmail(e.target.value);
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="">Address : </label>
//           <br />
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => {
//               return setAddress(e.target.value);
//             }}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="">Phone : </label>
//           <br />
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => {
//               return setPhone(e.target.value);
//             }}
//           />
//         </div>
//         <br />
//       </form>
//     </div>
//   );
// }
function HandleMultipleInputs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    address: "",
    phone: "",
  });
  const { firstName, lastName, password, email, address, phone } = formData; // Destructuring of State Object

  function handleChange(e) {
    // console.log(e.target.id);
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value }; //The square brackets ([]) around e.target.id are used for computed property names in JavaScript.
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">FirstName : </label>
        <br />
        <input
          type="text"
          value={firstName}
          onChange={handleChange}
          id="firstName"
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastName">LastName : </label>
        <br />
        <input
          type="text"
          value={lastName}
          onChange={handleChange}
          id="lastName"
        />
      </div>
      <br />
      <div>
        <label htmlFor="password">Password : </label>
        <br />
        <input
          type="text"
          value={password}
          onChange={handleChange}
          id="password"
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email : </label>
        <br />
        <input type="text" value={email} onChange={handleChange} id="email" />
      </div>
      <br />
      <div>
        <label htmlFor="address">Address : </label>
        <br />
        <input
          type="text"
          value={address}
          onChange={handleChange}
          id="address"
        />
      </div>
      <br />
      <div>
        <label htmlFor="phone">Phone : </label>
        <br />
        <input type="text" value={phone} onChange={handleChange} id="phone" />
      </div>
      <br />
      <button>Submit</button>
    </form>
  );
}

export default HandleMultipleInputs;
