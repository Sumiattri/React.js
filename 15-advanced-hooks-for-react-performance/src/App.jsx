import Example1UseMemo from "./UseMemo/Example1UseMemo";
import Example2UseMemo from "./UseMemo/Example2UseMemo";

function App() {
  return (
    <div
      style={{
        height: "50vh", // full height of viewport
        display: "flex",
        justifyContent: "center", // horizontal center
        alignItems: "center", // vertical center
      }}
    >
      {/* <Example1UseMemo /> */}
      <Example2UseMemo />
    </div>
  );
}

export default App;
