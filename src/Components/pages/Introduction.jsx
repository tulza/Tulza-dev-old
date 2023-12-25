import React from "react";
import { blob } from "../svg/ImageImport.jsx";
import { easeIn, motion } from "framer-motion";

const Blobs = () => {
  return (
    <>
      <motion.img
        src={blob}
        className="top-0 left-0 translate-x-[-50%] translate-y-[-50%] absolute w-[40%]"
        alt="spinning blob"
        initial={{y?}}
        animate={{ rotateZ: 360 }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      />
    </>
  );
};

const Introduction = () => {
  return (
    <div className="relative h-[100vh] w-full">
      <Blobs />
    </div>
  );
};

export default Introduction;
