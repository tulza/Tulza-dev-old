import React from "react";
import Section from "../Section";
import HighlightedText from "../highlightedText";

const AboutMe = () => {
  return (
    <div className="relative flex h-[200vh] w-full flex-col">
      <div className="sticky top-0 grid h-[100vh] p-20 ">
        <HighlightedText
          text="&lt;About me/&zwnj;&gt;"
          className="mr-30 justify-self-end text-4xl"
          color="blue"
        />
      </div>
    </div>
  );
};

export default AboutMe;
