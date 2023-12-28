import React from "react";
import Section from "../Section";
import ProjectBox from "../ProjectBox";

const AboutMe = () => {
  return (
    <Section>
      <div className="flex justify-end">
        <div className="m-4 text-3xl">&lt;About me/&zwnj;&gt;</div>
      </div>
      <ProjectBox />
    </Section>
  );
};

export default AboutMe;
