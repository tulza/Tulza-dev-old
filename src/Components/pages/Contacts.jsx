import React, { useRef } from "react";
import Section from "../Section";
import HighlightedText from "../highlightedText";
import VisibleInView from "../VisibleInView";
import { motion, useInView } from "framer-motion";
import { GithubIcon, LinkedinIcon, EmailIcon } from "../svg/ImageImport.jsx";
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
          className="mx-40 flex h-full items-center justify-evenly gap-40"
          ref={contentRef}
          animate={contentIsInView ? "visible" : "hidden"}
          transition={
            contentIsInView
              ? { duration: 0.5, staggerChildren: 0.25 }
              : { duration: 0.2 }
          }
        >
          <div className="flex flex-col gap-10 ">
            <SocialIcons
              image={GithubIcon}
              text="Tulza"
              link="#"
              variants={contactsIconVar}
            />
            <SocialIcons
              image={LinkedinIcon}
              text="---"
              link="#"
              variants={contactsIconVar}
            />
            <SocialIcons
              image={EmailIcon}
              text="---@gmail.com"
              link="#"
              variants={contactsIconVar}
            />
          </div>
          <InputForms />
        </motion.div>
      </motion.div>
    </Section>
  );
};

const InputForms = ({ text }) => {
  return (
    <>
      <motion.div
        className="grid w-[1000px] gap-10 rounded-lg p-8 pb-20"
        variants={contactsIconVar}
      >
        <div className="grid w-full grid-cols-2 gap-16 rounded-lg">
          <InputField text="First name" />
          <InputField text="Last name" />
        </div>
        <InputField text="Email" />
        <InputField text="Message" />
        <button
          value="submit"
          className="h-[60px] w-min justify-self-end rounded-lg px-10 font-bold outline"
        >
          summit
        </button>
      </motion.div>
    </>
  );
};

const InputField = ({ text }) => {
  return (
    <>
      <div className="flex h-[100px] flex-col gap-2 font-bold">
        <p className="text-white">{text}</p>
        <input className="h-[60px] rounded-lg bg-black pl-4 outline"></input>
      </div>
    </>
  );
};

const SocialIcons = ({ text, image, link, variants }) => {
  return (
    <>
      <motion.a
        href={link}
        variants={variants}
        className="flex items-center gap-10 text-3xl font-bold"
      >
        <img className="w-[75px]" src={image} />
        <p>{text}</p>
      </motion.a>
    </>
  );
};

export default Contacts;
