import React, { useEffect, useState } from "react";
import Section from "../Section";
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

  return (
    <>
      <div className="flex h-[300vh] w-full flex-col" ref={ref}>
        <div className="sticky top-0 flex h-[100vh] flex-col p-20 ">
          <VisibleInView amount={1} className="self-end">
            <HighlightedText
              text="&lt;About me/&zwnj;&gt;"
              className="mr-30 text-4xl"
              color="blue"
            />
          </VisibleInView>
          <ProgressBar scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </>
  );
};

const ProgressBar = ({ scrollYProgress }) => {
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
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
