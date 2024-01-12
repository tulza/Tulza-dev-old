import React, { useRef } from "react";
import Section from "../Section";
import HighlightedText from "../Text/HighlightedText.jsx";
import { motion, useInView } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "../svg/ImageImport.jsx";
import { contactsIconVar } from "../framer-variant.js";

const Contacts = () => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const contentIsInView = useInView(contentRef, { amount: 0.3 });

  return (
    <Section id="contacts">
      <motion.div
        className=" flex h-full flex-col justify-center p-10 "
        ref={ref}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={isInView ? { duration: 0.5 } : { duration: 0.2 }}
      >
        <div className=" flex h-full flex-col justify-center rounded-lg p-10 pt-20 outline">
          <HighlightedText
            text="&lt;Contact me!/&zwnj;&gt;"
            className="justify-self-start text-4xl"
            color="yellow"
          />
          <motion.div
            className="m-20 flex h-full items-center justify-evenly gap-40"
            ref={contentRef}
            animate={contentIsInView ? "visible" : "hidden"}
            transition={
              contentIsInView
                ? { duration: 0.5, staggerChildren: 0.25 }
                : { duration: 0.2 }
            }
          >
            <div className="flex flex-col gap-12">
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
            </div>
            <EmailForms />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

const EmailForms = ({ text }) => {
  return (
    <>
      <motion.div
        className="flex w-[1000px] flex-col gap-8 rounded-lg px-8"
        variants={contactsIconVar}
      >
        <div className="grid w-full grid-cols-2 gap-16 rounded-lg">
          <InputField text="First name" />
          <InputField text="Last name" />
        </div>
        <InputField text="Email" />
        <div className="flex h-[100px] flex-col gap-2 font-bold">
          <p className="text-white">Message</p>
          <input
            className="h-[60px] border-b-4 bg-black pl-4"
            placeholder="Hello!"
          ></input>
        </div>
        <button
          value="Send"
          className="h-[60px] w-min self-end rounded-lg px-10 font-bold outline transition-colors hover:bg-white hover:text-black"
        >
          Send
        </button>
      </motion.div>
    </>
  );
};

const InputField = ({ text, placeholder }) => {
  return (
    <>
      <div className="flex h-[100px] flex-col gap-2 font-bold">
        <p className="text-white">{text}</p>
        <input
          className="h-[60px] rounded-lg !bg-black pl-4 outline "
          placeholder={placeholder}
        ></input>
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
        <img className="w-[80px]" src={image} />
        <p className="whitespace-nowrap">{text}</p>
      </motion.a>
    </>
  );
};

export default Contacts;
