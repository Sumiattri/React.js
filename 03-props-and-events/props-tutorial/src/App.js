import Greetings from "./components/greetings";
const Users = ["user1", "user2"];
const UserObj = { hobby: "bikes", age: 10 };
function App() {
  return (
    <>
      <Greetings
        firstName="Aryan"
        lastName="Rao"
        age={21}
        user={Users[0]}
        User={UserObj}
      />
      <Greetings
        firstName="Sumit"
        lastName="Attri"
        user={Users[1]}
        User={UserObj}
      />
    </>
  );
}

export default App;
