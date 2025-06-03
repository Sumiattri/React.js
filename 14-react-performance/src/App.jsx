import FirstChild from "./ReactMemoExample/FirstChild";
import ExtraComponent from "./ReactMemoExample/ExtraComponent";

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
      <FirstChild>
        <ExtraComponent />
      </FirstChild>
    </div>
  );
}

export default App;
