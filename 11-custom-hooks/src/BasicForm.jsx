import useLocalStorage from "./hooks/useLocalStorage";
function BasicForm() {
  const [firstname, setFirstname] = useLocalStorage("firstname", ""); // destructuring of state,setState to firstname,setFirstname
  const [lastname, setLastName] = useLocalStorage("lastname", "");
  return (
    <div>
      <h1>form</h1>
      <form>
        <label htmlFor="firstname">firstname: </label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="lastname">lastname: </label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
      </form>
      <p>firstName:{firstname}</p>
      <p>lastname:{lastname}</p>
    </div>
  );
}

export default BasicForm;
