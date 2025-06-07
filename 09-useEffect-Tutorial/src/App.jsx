import { useState } from "react";

import CleanupFunctionDemo from "./CleanupFunctionDemo";
import ExampleUseEffect from "./ExampleUseEffect";
import FetchDataExample from "./FetchDataExample";
import MouseMoveEvent from "./MouseMoveEvent";
import AbortFtechRequest from "./AbortFetchRequest";
import AbortFetchRequest from "./AbortFetchRequest";
import StrictModeExample from "./StrictModeExample";
import AutomaticFocus from "./AutomaticFocus";

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
      {/* <div style={{ margin: "1rem", fontSize: "25px" }}>
        <label htmlFor="showcomponent">ShowComponent</label>
        <input
          type="checkbox"
          id="showcomponent"
          checked={showComponent}
          onChange={() => setShowComponent(!showComponent)}
        />
      </div>
      {showComponent && <MouseMoveEvent />} */}
      <br />
      {/* <div style={{ margin: "1rem", fontSize: "25px" }}>
        <label htmlFor="showcomponent">Show Component</label>
        <input
          type="checkbox"
          checked={showComponent}
          id="showcomponent"
          onChange={() => setShowComponent(!showComponent)}
        />
      </div>
      {showComponent && <AbortFetchRequest />} */}
      <br />
      {/* <div style={{ margin: "1rem", fontSize: "25px" }}>
        <label htmlFor="showcomponent">Show Component</label>
        <input
          type="checkbox"
          checked={showComponent}
          id="showcomponent"
          onChange={() => setShowComponent(!showComponent)}
        />
      </div>
      {showComponent && <StrictModeExample />} */}
      <br />
      <AutomaticFocus />
    </>
  );
}

export default App;
