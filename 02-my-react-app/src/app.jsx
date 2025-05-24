// import React from "react";    // importing this manually is not needed after this update

import Greetings from "./components/Greetings";
function App() {
  return (
    <>
      <Greetings />
    </>
  );
}

//    <></>  => these are called react fragements and are added to avoid extra container like div cause you can't render two elements
// like h1 and p wihout a container like div

export default App;
