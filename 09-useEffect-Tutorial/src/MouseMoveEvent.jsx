import React from "react";
import { useState, useEffect } from "react";

function MouseMoveEvent() {
  const [mouseposition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
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

export default MouseMoveEvent;
