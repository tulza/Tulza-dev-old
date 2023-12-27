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
  const Button = ({ title, highlight }) => {
    return (
      <>
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
      </>
    );
  };
  return (
    <>
      <div className="flex justify-between p-4">
        <A />
        <div className="mr-12 flex gap-12">
          <Button title="About me" highlight="bg-blue" />
          <Button title="Education" highlight="bg-yellow" />
          <Button title="Projects" highlight="bg-green" />
          <Button title="Resume" highlight="bg-purple" />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
