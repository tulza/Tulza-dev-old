import React, { useEffect, useState } from "react";
import HighlightedText from "../Text/HighlightedText";
import VisibleInView from "../VisibleInView";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import MeSection from "./aboutMeSection/MeSection";
import SkillSection from "./aboutMeSection/SkillSection";
import EducationSection from "./aboutMeSection/EducationSection";

const AboutMe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // !! This is manual input
  const [state, setState] = useState(0);

  const configItemsCount = 3;
  const boxWidth = 600;
  const gap = 500;
  const calcTranslate = boxWidth + gap;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    for (let i = 1; i < configItemsCount + 1; i++) {
      if (latest <= i / configItemsCount) {
        return setState(configItemsCount - i);
      }
    }
  });

  return (
    <>
      <div className="flex h-[300vh] w-full flex-col" ref={ref} id="about-me">
        <div className="sticky top-0 flex h-[100vh] flex-col overflow-hidden p-20">
          <VisibleInView amount={1} className="self-end">
            <HighlightedText
              text="&lt;About me/&zwnj;&gt;"
              className="mr-30 text-4xl"
              color="blue"
            />
          </VisibleInView>
          <div className="grid h-full w-full place-items-center">
            <div
              className={clsx(
                `relative grid w-[${boxWidth}px] grid-flow-col items-center`,
              )}
            >
              <motion.div
                className="flex items-center gap-[500px]"
                animate={{ x: -calcTranslate * state }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.75,
                  type: "spring",
                  damping: 15,
                }}
              >
                <StateWrapper state={0} currState={state}>
                  <div className={"flex w-[600px]"}>
                    <MeSection activate={state == 0} />
                  </div>
                </StateWrapper>
                <StateWrapper state={1} currState={state}>
                  <div className={"flex w-[600px] "}>
                    <EducationSection activate={state == 1} />
                  </div>
                </StateWrapper>
                <StateWrapper state={2} currState={state}>
                  <div className={"w-[600px]"}>
                    <SkillSection activate={state == 2} />
                  </div>
                </StateWrapper>
              </motion.div>
            </div>
          </div>
          <ProgressBar scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </>
  );
};

const StateWrapper = ({ state, currState, children }) => {
  return (
    <motion.div
      animate={state == currState ? { opacity: 1 } : { opacity: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const ProgressBar = ({ scrollYProgress }) => {
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (0.9 > latest) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  return (
    <motion.div
      className="absolute bottom-0 left-0 z-10 w-full overflow-hidden"
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="h-3 bg-white"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  );
};

export default AboutMe;
