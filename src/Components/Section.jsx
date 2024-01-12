import clsx from "clsx";
import React from "react";

const Section = ({ children, classname, id }) => {
  return (
    <div
      className={clsx("relative flex h-[100vh] w-full flex-col", classname)}
      id={id}
    >
      {children}
    </div>
  );
};

export default Section;
