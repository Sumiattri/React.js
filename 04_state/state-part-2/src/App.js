import { useState } from "react";
import Users from "./Users";

function App() {
  console.log("App Rendererd");

  const [users, setUsers] = useState([
    { id: 1, firstName: "Sumit", lastName: "Attri", age: 21 },
    { id: 2, firstName: "Aryan", lastName: "Rao", age: 21 },
    { id: 3, firstName: "Amulya", lastName: "Bhardwaj", age: 20 },
  ]);
  function increaseAge(id) {
    // console.log(id);
    // console.log("Age Increasesd");

    // let newState = [];
    // for (let user of users) {
    //   if (user.id === id) {
    //     newState.push({ ...user, age: user.age + 1 });
    //   } else {
    //     newState.push(user);
    //   }
    // }
    // setUsers(newState);

    //react developer way

    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }
  function deleteUser(id) {
    // let newState = [];
    // for (let user of users) {
    //   if (user.id !== id) {
    //     newState.push(user);
    //   }
    // }
    // setUsers(newState);

    // setUsers((prevState)=>{
    //   return prevState.filter((user)=>{
    //     return user.id!==id;
    //   });
    // })

    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  }

  return (
    <div className="App">
      <h1>State Example</h1>
      <Users
        usersProp={users}
        increaseAge={increaseAge}
        deleteUser={deleteUser}
      />
      {/* in above case, we are passing usersProp as a props which will  contain "users" State*/}
    </div>
  );
}

export default App;
