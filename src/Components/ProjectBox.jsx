import { motion } from "framer-motion";
import React from "react";

const ProjectBox = () => {
  return (
    <div className="flex h-[325px] w-[500px] justify-end outline outline-white">
      <div className="justify-endh-[100px] flex w-[500px] outline outline-white">
        <motion.div className="h-[30px] w-[30px] outline outline-white">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 4L7.75 0.391561V7.60844L14 4ZM0 4.625H8.375V3.375H0V4.625Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectBox;