import React, { Fragment } from "react";
import AnimatedText from "../AnimatedText";
import CursorOverlay from "../CursorOverlay";
import NavigationBar from "../Navigation/NavigationBar";
import Introduction from "./Introduction";
import Section from "../Section";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";

const Home = () => {
  return (
    <Fragment>
      <Introduction />
      <AboutMe />
      <MyProjects />
    </Fragment>
  );
};

export default Home;
