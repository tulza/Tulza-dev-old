import React, { Fragment } from "react";
import AnimatedText from "../AnimatedText";
import CursorOverlay from "../CursorOverlay";
import NavigationBar from "../Navigation/NavigationBar";
const variants = {
  hidden: { x: 10 },
  visible: { x: 0 },
};
const Home = () => {
  return (
    <Fragment>
      {/*anim text template 
      <AnimatedText text="hello" stagger={0.05} variants={variants} /> 
      */}
      <div className="Container h-[3000px] bg-background">
        <NavigationBar />
      </div>
    </Fragment>
  );
};

export default Home;
