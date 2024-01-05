import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const CursorOverlay = () => {
  const [mousePos, setMousePos] = useState({});
  const width = 25;
  const variant = {
    default: { x: mousePos.x - width / 2, y: mousePos.y - width / 2 },
  };
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos]);

  return (
    <motion.div
      className="fixed aspect-square rounded-full bg-white"
      animate="default"
      variants={variant}
      key="mouse"
      style={{
        width: `${width}px`,
      }}
    />
  );
};
export default CursorOverlay;
