import React from "react";
import { highlightBox } from "../framer-variant";
import { motion } from "framer-motion";
import clsx from "clsx";

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

export default NavButton;
