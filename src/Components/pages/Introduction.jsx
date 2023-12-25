import React from "react";
import { blob } from "../svg/ImageImport.jsx";
import { easeIn, motion } from "framer-motion";
import clsx from "clsx";

const A = () => {
  return (
    <>
      {/* this is <a/> */}
      <motion.span
        className="white-stroke cursor-pointer text-3xl font-bold text-transparent"
        whileHover={{ color: "#fff" }}
      >
        &lt;a/&zwnj;&gt;
      </motion.span>
    </>
  );
};

const Blobs = () => {
  const rotate = 360;
  const initial = [0, 90, 180];
  const transition = "-45%";
  return (
    <>
      <div className="pointer-events-none">
        <motion.img
          className="absolute left-0 top-0 w-[500px]"
          src={blob}
          alt="spinning blob"
          initial={{
            x: transition,
            y: transition,
            rotateZ: initial[0],
          }}
          animate={{ rotateZ: initial[0] + rotate }}
          transition={{ ease: "linear", duration: 11, repeat: Infinity }}
        />
        <motion.img
          className="absolute left-0 top-0 w-[500px]"
          src={blob}
          alt="spinning blob"
          initial={{
            x: transition,
            y: transition,
            rotateZ: initial[1],
          }}
          animate={{ rotateZ: initial[1] + rotate }}
          transition={{ ease: "linear", duration: 23, repeat: Infinity }}
        />
        <motion.img
          className="absolute left-0 top-0 w-[500px]"
          src={blob}
          alt="spinning blob"
          initial={{
            x: transition,
            y: transition,
            rotateZ: initial[2],
          }}
          animate={{ rotateZ: initial[2] + rotate }}
          transition={{ ease: "linear", duration: 17, repeat: Infinity }}
        />
      </div>
    </>
  );
};

const CircleLine = () => {
  const Circle = ({ color }) => {
    const stroke = `outline-${color}`;
    return (
      <motion.div
        className={clsx(
          "aspect-square w-4 cursor-pointer rounded-full outline outline-1",
          stroke,
        )}
      ></motion.div>
    );
  };
  return (
    <div className="absolute right-8 top-4 flex w-0 flex-col gap-2">
      {/* uses tailwind config color */}
      <Circle color="white" />
      <Circle color="red" />
      <Circle color="yellow" />
      <Circle color="green" />
      <Circle color="blue" />
      <Circle color="purple" />
    </div>
  );
};

const Navigation = () => {
  const highlightBox = {
    hovered: { height: "25%" },
  };

  const Button = ({ title, highlight }) => {
    return (
      <>
        <div>
          <motion.div className="relative cursor-pointer" whileHover="hovered">
            <span className="text-xl">{title}</span>
            <motion.div
              className={clsx(
                "absolute bottom-[-0.25rem] left-[0.5rem] -z-10 h-2/3 w-full opacity-40",
                `${highlight}`,
              )}
              variants={highlightBox}
            />
          </motion.div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="flex justify-between p-4">
        <A />
        <div className="mr-12 flex gap-12">
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
      {/* Header */}
      <Blobs />
      <CircleLine />
      <Navigation />
      {/* centre */}
      <div className="bg-white" />
    </div>
  );
};

export default Introduction;
