import React from "react";
import AnimatedText from "../../Text/AnimatedText";
import { animateChar } from "../../framer-variant";

const MeSection = ({ activate }) => {
  return (
    <div>
      <p className="text-3xl">Hello, I'm Tulza! 👋</p>
      I'm a second-year university student on a self-taught journey in web
      development. My passion lies in the world of UI/UX design, and animation
      to create a better user experience on the web.
    </div>
  );
};

export default MeSection;
