import React from "react";
import { blob, itemFrame } from "../svg/ImageImport.jsx";
import { easeIn, motion } from "framer-motion";
import clsx from "clsx";
import Section from "../Section.jsx";
import AnimatedText from "../AnimatedText.jsx";
import SlideInOutText from "../SlideInOutText.jsx";
import NavigationBar from "../Navigation/NavigationBar.jsx";
import { highlightBox } from "../framer-variant.js";

const Blobs = () => {
  const rotate = 360;
  const initial = [30, 90, 180];
  const transition = "-45%";
  return (
    <>
      <div className="pointer-events-none">
        <motion.img
          className="absolute left-0 top-0 w-[450px]"
          src={blob}
          alt="spinning blob"
          initial={{
            x: transition,
            y: transition,
            rotateZ: initial[0],
          }}
          animate={{ rotateZ: initial[0] + rotate }}
          transition={{ ease: "linear", duration: 11, repeat: Infinity }}
        />
        <motion.img
          className="absolute left-0 top-0 w-[475px]"
          src={blob}
          alt="spinning blob"
          initial={{
            x: transition,
            y: transition,
            rotateZ: initial[1],
          }}
          animate={{ rotateZ: initial[1] + rotate }}
          transition={{ ease: "linear", duration: 23, repeat: Infinity }}
        />
        <motion.img
          className="absolute left-0 top-0 w-[500px]"
          src={blob}
          alt="spinning blob"
          initial={{
            x: transition,
            y: transition,
            rotateZ: initial[2],
          }}
          animate={{ rotateZ: initial[2] + rotate }}
          transition={{ ease: "linear", duration: 17, repeat: Infinity }}
        />
      </div>
    </>
  );
};

const CircleLine = () => {
  const Circle = ({ stroke, fill }) => {
    return (
      <motion.div
        className={clsx(
          "border-1 aspect-square w-4 rounded-full border bg-transparent",
          stroke,
        )}
        whileHover={{ backgroundColor: fill }}
        transition={{ duration: 0.05, restDelta: 1, restSpeed: 1 }}
      />
    );
  };
  return (
    <div className="absolute right-8 top-4 flex w-0 flex-col gap-2">
      {/* uses tailwind config color */}
      <Circle stroke="border-white" fill="#ffffff" />
      <Circle stroke="border-red" fill="#c95454" />
      <Circle stroke="border-yellow" fill="#c9af54" />
      <Circle stroke="border-green" fill="#79c954" />
      <Circle stroke="border-blue" fill="#54a6c9" />
      <Circle stroke="border-purple" fill="#9554c9" />
    </div>
  );
};

const Introduction = () => {
  const animation = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 20, opacity: 0 },
  };
  return (
    <Section>
      {/* Header */}
      <div>
        <Blobs />
        <CircleLine />
        <NavigationBar />
      </div>
      {/* centre */}
      <div className=" flex h-full items-center justify-center">
        {/* Text */}
        <div>
          {/* big text */}
          <div className="relative">
            <AnimatedText
              text="Hello I'm Tulza"
              className="text-[100px]"
              applyEachChar="text-transparent white-stroke"
              variants={animation}
              stagger={0.05}
            />
            <motion.div whileHover="hovered" className="pointer-events-auto">
              <AnimatedText
                text="Tulza"
                className="absolute right-1 top-1 z-10 cursor-pointer text-[100px]"
                variants={animation}
                stagger={0.1}
                delay={0.75}
              />
              <motion.div
                className="pointer-events-none absolute bottom-0 right-0 h-1/2 translate-x-[3rem] bg-blue text-[100px] text-transparent opacity-40"
                variants={highlightBox}
              >
                {/* text here so that the highlight matches the text width */}
                Tulza
              </motion.div>
            </motion.div>
          </div>
          {/* Small text */}
          <div className="flex text-2xl">
            <AnimatedText
              className="text-2xl"
              text="Passionate in UX/UI Design working with"
              variants={animation}
              stagger={0.025}
              delay={1}
            />
            {/* slide in out text */}
            <motion.span
              className="flex items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <SlideInOutText />
            </motion.span>
          </div>
          <div className="relative flex">
            <img src={itemFrame} className="absolute w-[200px]" />
            <img src={itemFrame} className="absolute w-[200px]" />
          </div>
          {/* <div className="absolute left-0 w-[100vw] outline"></div> */}
        </div>
      </div>
    </Section>
  );
};

export default Introduction;