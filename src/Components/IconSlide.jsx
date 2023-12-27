import React from "react";
import {
  itemFrame,
  CSSLogo,
  HTMLLogo,
  JSLogo,
  ReactLogo,
  TailwindLogo,
  Framer,
  FigmaLogo,
} from "./svg/ImageImport";
import { v4 as uuidv4 } from "uuid";

const Frame = ({ icon }) => {
  return (
    <div className="relative flex w-[200px] items-center justify-center">
      <img src={icon} className="absolute w-[75px]" />
      <img src={itemFrame} className="absolute -z-10 w-[200px]" />
    </div>
  );
};
const icons = [
  CSSLogo,
  HTMLLogo,
  JSLogo,
  ReactLogo,
  TailwindLogo,
  Framer,
  FigmaLogo,
];

const IconSlide = () => {
  return (
    <>
      {icons.map((icon) => {
        return <Frame icon={icon} key={uuidv4()} />;
      })}
    </>
  );
};

export default IconSlide;
