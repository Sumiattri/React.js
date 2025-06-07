import Child from "./Child";

function MyComponent() {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#9ED2BE",
        borderRadius: "10px",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1>MYComponent</h1>
      <Child />
    </div>
  );
}

export default MyComponent;
