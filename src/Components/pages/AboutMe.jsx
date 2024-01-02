import React, { useEffect, useState } from "react";
import HighlightedText from "../highlightedText";
import VisibleInView from "../VisibleInView";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const [x, setx] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setx(latest * 100 - 33.3);
  });

  return (
    <>
      <div className="flex h-[300vh] w-full flex-col" ref={ref}>
        <div className="sticky top-0 flex h-[100vh] flex-col overflow-hidden p-20">
          <VisibleInView amount={1} className="self-end">
            <HighlightedText
              text="&lt;About me/&zwnj;&gt;"
              className="mr-30 text-4xl"
              color="blue"
            />
          </VisibleInView>
          <div className="grid h-full w-full place-items-center">
            <VisibleInView>
              <motion.div
                className="flex gap-[150px]"
                animate={{ x: `${x}%` }}
                transition={{ ease: "easeInOut", delay: 0, duration: 0 }}
              >
                <InfoBox />
                <InfoBox />
                <InfoBox />
              </motion.div>
            </VisibleInView>
          </div>
          <ProgressBar scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </>
  );
};

const InfoBox = () => {
  return (
    <>
      <div className="h-[400px] w-[400px] outline"></div>
    </>
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
