import React from "react";
import Section from "../Section";
import HighlightedText from "../highlightedText";

const AboutMe = () => {
  return (
    <Section>
      <div className="flex justify-end">
        <HighlightedText
          text="&lt;About me/&zwnj;&gt;"
          className="mr-4 text-4xl"
          color="blue"
        />
      </div>
    </Section>
  );
};

export default AboutMe;
