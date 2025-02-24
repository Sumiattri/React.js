import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // function handleNameChange(e) {
  //   // console.log(e.target.value);

  //   setUsername(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("HEllo", username);
    console.log("Your password is", password);
  }

  return (
    <>
      <h1>Sumit Attri</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          value={username}
          // onChange={handleNameChange}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          id="password"
          value={password} // onChange={handleNameChange}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
