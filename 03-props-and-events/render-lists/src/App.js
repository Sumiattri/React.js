import User from "./components/User";

const users = [
  { id: 1, firstName: "Sumit", lastName: "Attri" },
  { id: 2, firstName: "Aryan", lastName: "Rao" },
  { id: 3, firstName: "Amulya", lastName: "Bhardwaj" },
];
function App() {
  return (
    <div className="App">
      {/* <User
        id={users[0].id}
        firstName={users[0].firstName}
        lastName={users[0].lastName}
      />
      <User
        id={users[1].id}
        firstName={users[1].firstName}
        lastName={users[0].lastName}
      />
      <User
        id={users[2].id}
        firstName={users[2].firstName}
        lastName={users[0].lastName}
      /> */}
      {/* now, inspite of manually rendering User component each time and passing props can be hectic in large scale apps
      so, we use map function */}
      {users.map((user) => (
        <User
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          key={user.id}
          // here key prop is to help react to distinguih between elements while rendering them from a list or array by map() and maintain efficiency
          // it is compulsary and if our list is static we can also do key ={index}, by paasing index as a parameter in map,
          // cause index of every element is unique and remains same in case of static list
        />
      ))}
      {/* we can also send all the props at once like below */}

      {/*   
      {users.map((user) => (
           <User {...user} key ={user.id}/>
      ))} 
       */}
    </div>
  );
}

export default App;
