import React from "react";
import { blob } from "../svg/ImageImport.jsx";
import { motion } from "framer-motion";
import clsx from "clsx";
import Section from "../Section.jsx";
import SlideInOutText from "../Text/SlideInOutText.jsx";
import AnimatedText from "../Text/AnimatedText.jsx";
import NavigationBar from "../Navigation/NavigationBar.jsx";
import { highlightBox } from "../framer-variant.js";
import { animateChar } from "../framer-variant.js";
import VisibleInView from "../VisibleInView.jsx";
import * as toolsData from "../../data.json";

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

const CornerMarker = () => {
  return (
    <div className="absolute bottom-5 right-5 h-[80px] w-[150px] rounded-[0_0_50px_0] border-b-[10px] border-r-[10px]"></div>
  );
};

const Introduction = () => {
  return (
    <Section>
      {/* Header */}
      <div>
        <Blobs />
        <CircleLine />
        <CornerMarker />
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
              variants={animateChar}
              stagger={0.05}
            />
            <motion.div whileHover="hovered" className="pointer-events-auto">
              <AnimatedText
                text="Tulza"
                className="absolute right-1 top-1 z-10 cursor-pointer text-[100px]"
                variants={animateChar}
                stagger={0.1}
                delay={0.75}
              />
              <VisibleInView amount={1} delay={1} duration={0.25}>
                <motion.div
                  className="pointer-events-none absolute bottom-0 right-0 h-1/2 translate-x-[3rem] bg-blue text-[100px] text-transparent opacity-40"
                  variants={highlightBox}
                >
                  {/* text here so that the highlight matches the text width */}
                  Tulza
                </motion.div>
              </VisibleInView>
            </motion.div>
          </div>
          {/* Small text */}
          <div className="relative flex text-2xl">
            <AnimatedText
              className="text-2xl"
              text="Passionate in UX/UI Design working with"
              variants={animateChar}
              stagger={0.025}
              delay={1}
            />
            {/* slide in out text */}
            <VisibleInView delay={2}>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.25 }}
              >
                <SlideInOutText data={toolsData.tools} />
              </motion.span>
            </VisibleInView>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Introduction;
