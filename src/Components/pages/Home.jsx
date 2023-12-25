import React, { Fragment } from "react";
import AnimatedText from "../AnimatedText";
import CursorOverlay from "../CursorOverlay";
import NavigationBar from "../Navigation/NavigationBar";
import Introduction from "./Introduction";
const variants = {
  hidden: { x: 10 },
  visible: { x: 0 },
};
const Home = () => {
  return (
    <Fragment>
      <Introduction />
    </Fragment>
  );
};

export default Home;
