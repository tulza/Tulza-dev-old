import { delay, easeInOut, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { projectBoxPopUp } from "./framer-variant";
import { getTagColor } from "../../tagsColor";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { urlShortening } from "./svg/projectImage";
import { useRef } from "react";

const TagBox = ({ tags }) => {
  const duration = 15;
  // get width of the tags to see if scrolling is needed
  const ref = useRef(null);
  const [needScroll, setNeedScroll] = useState(false);
  useEffect(() => {
    setNeedScroll(() => {
      if (ref.current.offsetWidth > 475) {
        return true;
      }
      return false;
    });
  });
  const visibleTags = needScroll ? [...tags, "//", ...tags, "//"] : tags;
  return (
    <>
      <motion.div
        // pr-4 added to the end to smoothen animation due to gap
        className="flex gap-4 pr-4"
        ref={ref}
        animate={needScroll ? { x: "-50%" } : ""}
        transition={
          needScroll
            ? {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
              }
            : null
        }
      >
        {visibleTags.map((tag) => {
          const color = getTagColor(tag);
          return (
            <div
              key={uuidv4()}
              className={clsx(
                "whitespace-nowrap rounded-full p-1 px-4 outline",
              )}
              style={{ outlineColor: `var(--${color})` }}
            >
              {tag}
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

const ProjectBox = ({ title, image, tags }) => {
  const [visible, setVisible] = useState(false);
  tags = tags ? tags : [];

  return (
    <motion.div
      className="relative flex h-[300px] w-[500px] flex-col justify-end overflow-hidden rounded-[10px] outline outline-white"
      variants={projectBoxPopUp}
    >
      <p className="absolute top-0 m-2 rounded-full bg-black p-2 outline">
        {title}
      </p>
      <img src={urlShortening} className="absolute -z-10" />
      <motion.div>
        <div className="grid h-[100px] w-[500px] grid-rows-2 items-center rounded-[10px] bg-black p-2 px-4 outline outline-white">
          <TagBox tags={tags} />
          <motion.div
            className="relative grid h-[30px] w-[30px] cursor-pointer items-center pl-2 outline outline-white"
            initial={{ borderRadius: 15 }}
            whileHover={{ width: 100, borderRadius: 10 }}
            transition={{ ease: "easeInOut" }}
            onHoverStart={() => {
              setVisible(!visible);
            }}
            onHoverEnd={() => {
              setVisible(!visible);
            }}
          >
            <motion.div
              className="pointer-events-none"
              initial={{ opacity: 0 }}
              transition={
                visible ? { duration: 0.5, delay: 0.2 } : { duration: 0.15 }
              }
              animate={visible ? { opacity: 1 } : { opacity: 0 }}
            >
              github
            </motion.div>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-[7px] scale-125"
            >
              <path
                d="M14 4L7.75 0.391561V7.60844L14 4ZM0 4.625H8.375V3.375H0V4.625Z"
                fill="white"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectBox;
