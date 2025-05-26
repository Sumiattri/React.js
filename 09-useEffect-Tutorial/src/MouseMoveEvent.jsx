import React from "react";
import { useState, useEffect } from "react";

// practical usecase of Cleanup function inside useEffect

function MouseMoveEvent() {
  const [mouseposition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    console.log(e);

    console.log({ x: e.clientX, y: e.clientY });

    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <p>X:{mouseposition.x}</p>
      <p>Y: {mouseposition.y}</p>
    </div>
  );
}
// if we don't remove the event listener Using cleanup function, our event Listner will work even after our component is unmounted
// cause event Listner are addded to the document object and not the component itself when we use document.addEventListener
// so when we unmount the component, it will still be there in the document object and will cause memory leak
// and also cause performance issues

export default MouseMoveEvent;
