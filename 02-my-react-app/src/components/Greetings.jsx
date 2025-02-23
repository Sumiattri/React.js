import "./Greetings.css";

function Greetings() {
  const firstName = (name) => name.toUpperCase();
  const name = "Sumit";
  // const cssStyles = {
  //   backgroundColor: "lightblue", // we can't use background-color here in jsx css, CamelCase is used here in css
  //   fontFamily: "sans-serif",
  //   margin: "1rem",
  //   padding: "1rem",
  // };
  const isdarkMode = true;

  return (
    <div className={`container ${isdarkMode ? "bg-black" : ""}`}>
      {/* we can also use style = {cssStyles} here as attribute in above div and then use the css written in  the above cssStyles object */}
      <h1>Hello, {firstName("sumit")}</h1>
      <h2>Hello, {name}</h2>
      {/* these {}, are to use JS here in JSX */}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, iste.
      </p>
      <h2>Form</h2>
      <form action="">
        <label htmlFor="name">First Name</label>
        <input type="text" id="name" />
      </form>
    </div>
  );
}

export default Greetings;
