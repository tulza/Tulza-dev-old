import React, { Fragment } from "react";
import AnimatedText from "../AnimatedText";
import CursorOverlay from "../CursorOverlay";
import NavigationBar from "../Navigation/NavigationBar";
import Introduction from "./Introduction";
import Section from "../Section";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <Fragment>
      <Introduction />
      <AboutMe />
      <MyProjects />
      <Contacts />
    </Fragment>
  );
};

export default Home;
