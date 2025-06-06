import Greetings from "./components/Greetings";

function App() {
  function handleClick(e) {
    console.log("You clicked me");
    const btn = e.target;
    console.log(btn);

    if (btn.textContent === "Click me") {
      btn.textContent = "You Clicked me";
    } else {
      btn.textContent = "Click me";
    }
  }

  function handleClick2(firstName, lastName) {
    console.log("You clicked Button 2", firstName, lastName);
  }
  function handleClick3(e) {
    const Attri = e.target;
    console.log(Attri);
    if (Attri.textContent === "Sumit Attri") {
      Attri.textContent = "You Clicked Attri";
    } else {
      Attri.textContent = "Sumit Attri";
    }
  }

  //wrapper function
  // function wrapperfunction() {
  //   handleClick2("Sumit", "Attri");
  // }

  // onClick works only to html tags, we can't directly use them on react components like on Greetings below

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      <br /> <br />
      {/* <button onClick={wrapperfunction}>Click me 2</button> */}
      {/* now inspite of giving refrence in this wrapper function here, which will then call handleClick2 function and then we'll pass
      the arguments in handleClick2 function, we can directly use arrow function like below  */}
      <button
        onClick={(e) => {
          e.target.textContent = "You Clicked button 2";
          handleClick2("Sumit", "Attri");
        }}
      >
        Click me 2
      </button>
      <br />
      <Greetings onClick={handleClick3} />
      {/* onClick will be passed as a prop to Greetings element which will be a function handleclick, that we can access in Greetings components
      and use onClick on this prop, Note: onClick is just a prop here, so it can have any name */}
    </div>
  );
}

export default App;
