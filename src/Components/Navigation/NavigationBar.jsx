import React from "react";
import { highlightBox } from "../framer-variant";
import { motion } from "framer-motion";
import clsx from "clsx";
import A from "./A";
import NavButton from "./NavButton";

const NavigationBar = () => {
  return (
    <>
      <div className="flex justify-between p-4">
        <A />
        <div className="invisible mr-12 flex gap-12 md:visible">
          <NavButton title="About me" highlight="bg-blue" href="#about-me" />
          <NavButton title="Projects" highlight="bg-green" href="#projects" />
          <NavButton title="Contacts" highlight="bg-yellow" href="#contacts" />
          <NavButton title="Resume" highlight="bg-purple" href="" />
        </div>
      </div>
    </>
  );
};

const MobileNavigation = () => {
  return;
};
export default NavigationBar;
