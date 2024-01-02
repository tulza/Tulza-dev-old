import React, { Fragment } from "react";
import Introduction from "./Introduction";
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
