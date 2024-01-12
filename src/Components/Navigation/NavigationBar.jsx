import React from "react";
import { highlightBox } from "../framer-variant";
import { motion } from "framer-motion";
import clsx from "clsx";

const A = () => {
  return (
    <>
      {/* this is <a/> */}
      <motion.span
        className="white-stroke  cursor-pointer text-3xl font-bold text-transparent"
        whileHover={{ color: "#fff" }}
      >
        &lt;a/&zwnj;&gt;
      </motion.span>
    </>
  );
};

const NavigationBar = () => {
  return (
    <>
      <div className="flex justify-between p-4">
        <A />
        <div className="mr-12 flex gap-12">
          <NavButton title="About me" highlight="bg-blue" href="#about-me" />
          <NavButton title="Projects" highlight="bg-green" href="#projects" />
          <NavButton title="Contacts" highlight="bg-yellow" href="#contacts" />
          <NavButton title="Resume" highlight="bg-purple" href="" />
        </div>
      </div>
    </>
  );
};

const NavButton = ({ title, highlight, href }) => {
  return (
    <>
      <a href={href}>
        <div>
          <motion.div className="relative cursor-pointer" whileHover="hovered">
            <span className="text-xl">{title}</span>
            <motion.div
              className={clsx(
                "absolute bottom-[-0.25rem] left-[0.5rem] -z-10 h-2/3 w-full opacity-40",
                `${highlight}`,
              )}
              variants={highlightBox}
            />
          </motion.div>
        </div>
      </a>
    </>
  );
};
export default NavigationBar;
