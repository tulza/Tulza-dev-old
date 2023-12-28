import { easeInOut, motion } from "framer-motion";
import React from "react";

const ProjectBox = () => {
  return (
    <div className="flex h-[325px] w-[500px] items-end rounded-[10px] outline outline-white">
      <div className="grid h-[100px] w-[500px] grid-rows-2 items-center rounded-[10px] p-2 outline outline-white">
        <div>asd</div>
        <motion.div
          className="relative grid h-[30px] w-[30px] items-center rounded-full outline outline-white"
          whileHover={{ width: 100 }}
          transition={{ ease: "easeInOut" }}
        >
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 scale-125"
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
