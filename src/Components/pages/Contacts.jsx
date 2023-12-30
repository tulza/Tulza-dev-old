import React, { useRef } from "react";
import Section from "../Section";
import HighlightedText from "../highlightedText";
import VisibleInView from "../VisibleInView";
import { motion, useInView } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "../svg/ImageImport.jsx";
import { contactsIconVar } from "../framer-variant.js";

const Contacts = () => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const contentIsInView = useInView(contentRef, { amount: 0.9 });

  return (
    <Section>
      <motion.div
        className="ml-30 m-10 flex h-full flex-col rounded-lg p-10 outline"
        ref={ref}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={isInView ? { duration: 0.5 } : { duration: 0.2 }}
      >
        <HighlightedText
          text="&lt;Contact me!/&zwnj;&gt;"
          className="justify-self-start text-4xl"
          color="yellow"
        />
        <motion.div
          className="flex h-full flex-col items-center justify-center gap-5"
          ref={contentRef}
          animate={contentIsInView ? "visible" : "hidden"}
          transition={
            contentIsInView
              ? { duration: 0.5, staggerChildren: 0.25 }
              : { duration: 0.2 }
          }
        >
          <div className="flex gap-10">
            <motion.img src={GithubIcon} variants={contactsIconVar} />
            <motion.img src={LinkedinIcon} variants={contactsIconVar} />
          </div>
          <motion.div
            className="flex h-[350px] w-[1000px] flex-col gap-10 p-8 outline"
            variants={contactsIconVar}
          >
            <div className="h-[80px] w-full outline"></div>
            <div className="grid w-full grid-cols-2 gap-10">
              <div className="h-[80px] outline"></div>
              <div className="h-[80px] outline"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Contacts;
