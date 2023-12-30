import { delay, easeInOut, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { projectBoxPopUp } from "./framer-variant";
import { getTagColor } from "./tagsColor";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
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
  const [OnHoverButton, setHoverButton] = useState(false);
  const [OnHoverImage, setHoverImage] = useState(false);
  tags = tags ? tags : [];

  return (
    <motion.div
      className="relative flex h-[300px] w-[500px] flex-col justify-end overflow-hidden rounded-[10px] outline outline-white"
      variants={projectBoxPopUp}
    >
      <p className="absolute top-0 m-2 rounded-full bg-black p-2 outline">
        {title}
      </p>
      <motion.div
        className="absolute right-0 top-0 m-2 flex aspect-square h-10 w-10 cursor-pointer place-items-center rounded-full bg-black p-2 outline"
        onHoverStart={() => {
          setHoverImage(true);
        }}
        onHoverEnd={() => {
          setHoverImage(false);
        }}
        whileHover={{ scale: 1.1 }}
      >
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_134_232" fill="white">
            <path d="M0 25H30C41.0457 25 50 33.9543 50 45V75H20C8.9543 75 0 66.0457 0 55V25Z" />
          </mask>
          <path
            d="M0 25H50H0ZM50 85H20C3.43146 85 -10 71.5685 -10 55H10C10 60.5228 14.4772 65 20 65H50V85ZM20 85C3.43146 85 -10 71.5685 -10 55V25H10V55C10 60.5228 14.4772 65 20 65V85ZM50 25V75V25Z"
            fill="white"
            mask="url(#path-1-inside-1_134_232)"
          />
          <mask id="path-3-inside-2_134_232" fill="white">
            <path d="M25 0H55C66.0457 0 75 8.95431 75 20V50H45C33.9543 50 25 41.0457 25 30V0Z" />
          </mask>
          <path
            d="M25 -10H55C71.5685 -10 85 3.43146 85 20H65C65 14.4772 60.5228 10 55 10H25V-10ZM75 50H25H75ZM25 50V0V50ZM55 -10C71.5685 -10 85 3.43146 85 20V50H65V20C65 14.4772 60.5228 10 55 10V-10Z"
            fill="white"
            mask="url(#path-3-inside-2_134_232)"
          />
        </svg>
      </motion.div>
      <img src={image} className="absolute -z-10" />
      <motion.div>
        {/* footer - tags, and links */}
        <motion.div
          className="h-[100px] w-[500px] overflow-hidden rounded-[10px] outline outline-white"
          animate={OnHoverImage ? { height: 0 } : {}}
        >
          <motion.div className="grid h-[100px] grid-rows-2 items-center bg-black p-2 px-4">
            <TagBox tags={tags} />
            <motion.div
              className="relative grid h-[30px] w-[30px] cursor-pointer items-center pl-2 outline outline-white"
              initial={{ borderRadius: 15 }}
              whileHover={{ width: 100, borderRadius: 10 }}
              transition={{ ease: "easeInOut" }}
              onHoverStart={() => {
                setHoverButton(true);
              }}
              onHoverEnd={() => {
                setHoverButton(false);
              }}
            >
              <motion.div
                className="pointer-events-none"
                initial={{ opacity: 0 }}
                transition={
                  OnHoverButton
                    ? { duration: 0.5, delay: 0.2 }
                    : { duration: 0.15 }
                }
                animate={OnHoverButton ? { opacity: 1 } : { opacity: 0 }}
              >
                github
              </motion.div>
              {/* arrow */}
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
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectBox;
