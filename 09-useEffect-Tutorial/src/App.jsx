import { useState } from "react";

import CleanupFunctionDemo from "./CleanupFunctionDemo";
import ExampleUseEffect from "./ExampleUseEffect";
import FetchDataExample from "./FetchDataExample";
import MouseMoveEvent from "./MouseMoveEvent";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      {/* uncomment the  components while revising  */}
      {/* <ExampleUseEffect /> */}
      <br />
      {/* <FetchDataExample /> */}
      <br />
      {/* <div style={{ margin: "1rem", fontSize: "25px" }}>
        <label htmlFor="showcomponent">ShowComponent</label>
        <input
          type="checkbox"
          id="showcomponent"
          checked={showComponent}
          onChange={() => setShowComponent(!showComponent)}
        />
      </div>
      {showComponent && <CleanupFunctionDemo />} */}
      {/* shorthand for ternary Operator =>  {showComponent ? <CleanupFunctionDemo /> : null} */}
      <br />
      <div style={{ margin: "1rem", fontSize: "25px" }}>
        <label htmlFor="showcomponent">ShowComponent</label>
        <input
          type="checkbox"
          id="showcomponent"
          checked={showComponent}
          onChange={() => setShowComponent(!showComponent)}
        />
      </div>
      {showComponent && <MouseMoveEvent />}
    </>
  );
}

export default App;
