import React from "react";
import Section from "../Section";
import HighlightedText from "../highlightedText";

const Contacts = () => {
  return (
    <Section>
      <div className="ml-30 m-20 grid place-items-center">
        <HighlightedText
          text="&lt;Contacts/&zwnj;&gt;"
          className="justify-self-start text-4xl"
          color="yellow"
        />
      </div>
    </Section>
  );
};

export default Contacts;
