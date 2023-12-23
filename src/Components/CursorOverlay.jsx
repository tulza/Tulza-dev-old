import React, { useEffect, useState } from "react";

const CursorOverlay = () => {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      The mouse is at position{" "}
      <b>
        ({mousePos.x}, {mousePos.y})
      </b>
    </div>
  );
};

export default CursorOverlay;
