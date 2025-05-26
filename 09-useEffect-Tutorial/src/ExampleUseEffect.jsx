import { useEffect, useState } from "react";

//useEffect (a hook)=> for => fetch data from api,eventListeners, other side effects
// with useEffect ✅ You can do things like:
// •	fetch data
// •	set up event listeners
// •	start a timer or interval
// •	focus an input
// before react 16 => we used => class based components => which has =>react life cycle  methods =>like => componentDidMount
// useEffect in present provide functionality of componentDidMount and other life cycle methods

// useEffect is called everytime, whenever our coponent is rendered or re-rendered
// useEffect => CAN take two arguments => 1st is the calklback function and 2nd is dependency array(optional)

// if dependency array is a empty array [ ], then useEffect wiil be called only once at initial render of our component
// if dependency array has some value, then useEffect will be called only when that value changes

function ExampleUseEffect() {
  console.log("component rendered");

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  }, [counter1]);

  return (
    <>
      <div>
        <p>counter1 : {counter1}</p>
        <button onClick={() => setCounter1((prevState) => prevState + 1)}>
          Increase Counter
        </button>
        <br />
        <p>counter2 : {counter2}</p>
        <button onClick={() => setCounter2((prevState) => prevState + 1)}>
          Increase Counter
        </button>
      </div>
    </>
  );
}

export default ExampleUseEffect;
