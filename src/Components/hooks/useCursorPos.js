import React, { useEffect, useState } from "react";

const useCursorPos = () => {
  const [CursorPos, setCursorPos] = useState({
    x: undefined,
    y: undefined,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return CursorPos;
};

export default useCursorPos;
