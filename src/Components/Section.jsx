import clsx from "clsx";
import React from "react";

const Section = ({ children, classname }) => {
  return (
    <div className={clsx("relative flex h-[100vh] w-full flex-col", classname)}>
      {children}
    </div>
  );
};

export default Section;
