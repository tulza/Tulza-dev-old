import React, { useEffect } from "react";
import Section from "../Section";
import HighlightedText from "../highlightedText";
import VisibleInView from "../VisibleInView";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const targetSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetSectionRef,
    offset: ["end end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <>
      <motion.div
        className="sticky top-0 h-10 w-full bg-white"
        style={{ scaleX: scrollYProgress }}
      />
      <div
        className="relative flex h-[200vh] w-full flex-col"
        ref={targetSectionRef}
      >
        <div className="sticky top-0 grid h-[100vh] p-20 ">
          <VisibleInView amount={1} className="justify-self-end">
            <HighlightedText
              text="&lt;About me/&zwnj;&gt;"
              className="mr-30 text-4xl"
              color="blue"
            />
          </VisibleInView>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
