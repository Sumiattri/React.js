// function User({ userDetails }) {
//   return (
//     <>
//       <div className="main">
//         <p>First Name : {userDetails.firstName}</p>
//         <p>Last Name : {userDetails.lastName}</p>
//         <p>Age : {userDetails.age}</p>
//       </div>
//     </>
//   );
// }

function User({ firstName, lastName, age, id, increaseAge, deleteUser }) {
  console.log("User Rendered");

  return (
    <>
      <div className="main">
        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Age : {age}</p>
        <p>ID : {id}</p>
        <button onClick={() => increaseAge(id)}>Increase Age</button>
        <button onClick={() => deleteUser(id)}>Delete User</button>
      </div>
    </>
  );
}
export default User;
