import React from "react";
import { blob } from "../svg/ImageImport.jsx";
import { easeIn, motion } from "framer-motion";
import clsx from "clsx";

const Blobs = () => {
  const rotate = 360;
  const initial = [0, 90, 180];
  const transition = -45;
  return (
    <>
      <div className="pointer-events-none">
        <motion.img
          className="absolute left-0 top-0 w-[40%] translate-x-[-50%] translate-y-[-50%] rotate-90"
          src={blob}
          alt="spinning blob"
          initial={{
            x: `${transition}%`,
            y: `${transition}%`,
            rotateZ: initial[0],
          }}
          animate={{ rotateZ: initial[0] + rotate }}
          transition={{ ease: "linear", duration: 11, repeat: Infinity }}
        />
        <motion.img
          className="absolute left-0 top-0 w-[40%] translate-x-[-50%] translate-y-[-50%]"
          src={blob}
          alt="spinning blob"
          initial={{
            x: `${transition}%`,
            y: `${transition}%`,
            rotateZ: initial[1],
          }}
          animate={{ rotateZ: initial[1] + rotate }}
          transition={{ ease: "linear", duration: 23, repeat: Infinity }}
        />
        <motion.img
          className="absolute left-0 top-0 w-[40%] translate-x-[-50%] translate-y-[-50%]"
          src={blob}
          alt="spinning blob"
          initial={{
            x: `${transition}%`,
            y: `${transition}%`,
            rotateZ: initial[2],
          }}
          animate={{ rotateZ: initial[2] + rotate }}
          transition={{ ease: "linear", duration: 17, repeat: Infinity }}
        />
      </div>
    </>
  );
};
const A = () => {
  return (
    <>
      {/* this is <a/> */}
      <span className="white-stroke text-3xl font-bold text-transparent">
        &lt;a/&zwnj;&gt;
      </span>
    </>
  );
};

const Navigation = () => {
  const Button = ({ title, highlight }) => {
    return (
      <>
        <div>
          <div className="relative cursor-pointer">
            <span className="text-xl">{title}</span>
            <div
              className={clsx(
                "absolute bottom-[-0.25rem] left-[0.5rem] -z-10 h-2/3 w-full opacity-40",
                `${highlight}`,
              )}
            />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="flex justify-between p-4">
        <A />
        <div className="mr-8 flex gap-12">
          <Button title="About me" highlight="bg-blue" />
          <Button title="Education" highlight="bg-yellow" />
          <Button title="Projects" highlight="bg-green" />
          <Button title="Resume" highlight="bg-purple" />
        </div>
      </div>
    </>
  );
};

const Introduction = () => {
  return (
    <div className="relative h-[100vh] w-full">
      <Blobs />
      <Navigation />
    </div>
  );
};

export default Introduction;
