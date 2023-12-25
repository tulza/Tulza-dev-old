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
} from "./src/Components/svg/ImageImport";

const IconSlide = () => {
  return (
    <div className="relative flex">
      <img src={itemFrame} className="absolute w-[200px]" />
      <img src={itemFrame} className="absolute w-[200px]" />
    </div>
  );
};

export default IconSlide;
