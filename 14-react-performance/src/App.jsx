import FirstChild from "./FirstChild";

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
      <FirstChild />
    </div>
  );
}

export default App;
