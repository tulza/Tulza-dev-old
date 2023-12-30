import React from "react";
import Section from "../Section";
import HighlightedText from "../highlightedText";
import VisibleInView from "../VisibleInView";

const AboutMe = () => {
  return (
    <div className="relative flex h-[200vh] w-full flex-col">
      <div className="sticky top-0 grid h-[100vh] p-20 ">
        <VisibleInView amount={1} className="justify-self-end">
          <HighlightedText
            text="&lt;About me/&zwnj;&gt;"
            className="mr-30 text-4xl"
            color="blue"
          />
        </VisibleInView>
      </div>
    </div>
  );
};

export default AboutMe;
