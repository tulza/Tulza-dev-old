import React from "react";
import { motion } from "framer-motion";

const A = () => {
  return (
    <>
      {/* this is <a/> */}
      <motion.span
        className="white-stroke  cursor-pointer whitespace-nowrap text-3xl font-bold text-transparent"
        whileHover={{ color: "#fff" }}
      >
        &lt;a/&zwnj;&gt;
      </motion.span>
    </>
  );
};

export default A;
