import React, { Fragment, useEffect, useState } from "react";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import Contacts from "./Contacts";
import useWindowSize from "../hooks/useWindowSize";
import useCursorPos from "../hooks/useCursorPos";
import CursorOverlay from "../CursorOverlay";

const Home = () => {
  return (
    <Fragment>
      {/* <CursorOverlay /> */}
      <Introduction />
      <AboutMe />
      <MyProjects />
      <Contacts />
    </Fragment>
  );
};

export default Home;
