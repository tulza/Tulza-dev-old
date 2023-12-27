import React, { Fragment } from "react";
import AnimatedText from "../AnimatedText";
import CursorOverlay from "../CursorOverlay";
import NavigationBar from "../Navigation/NavigationBar";
import Introduction from "./Introduction";
import Section from "../Section";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
const variants = {
  hidden: { x: 10 },
  visible: { x: 0 },
};

const Home = () => {
  return (
    <Fragment>
      <Introduction />
      <AboutMe />
    </Fragment>
  );
};

export default Home;
