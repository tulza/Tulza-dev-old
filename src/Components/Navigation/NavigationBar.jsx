import React from "react";
import A from "./A";
import NavButton from "./NavButton";

const NavigationBar = () => {
  return (
    <>
      <div className="flex justify-between p-4">
        <A />
        <div className="invisible mr-12 flex gap-12 md:visible">
          <NavButton title="About me" highlight="bg-blue" href="#about-me" />
          <NavButton title="Projects" highlight="bg-green" href="#projects" />
          <NavButton title="Contacts" highlight="bg-yellow" href="#contacts" />
          <NavButton title="Resume" highlight="bg-purple" href="" />
        </div>
      </div>
    </>
  );
};

// const MobileNavigation = () => {
//   return (
//     <div className="m-4 grid h-10 justify-self-end">
//       <div className="h-1 w-10 bg-white" />
//       <div className="h-1 w-10 bg-white" />
//       <div className="h-1 w-10 bg-white" />
//     </div>
//   );
// };
export default NavigationBar;
