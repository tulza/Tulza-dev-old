import { motion } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";
import InputRange from "./InputRange";
import clsx from "clsx";

const Template = () => {
  const [rotate, setRotate] = useState(0);
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [enbRandom, setEnbRandom] = useState(false);

  const HandleRandom = () => {
    const chaos = 1500;
    setRotate(parseInt(Math.random() * 2 * chaos - chaos));
    setx(parseInt(Math.random() * 2 * chaos - chaos));
    sety(parseInt(Math.random() * 2 * chaos - chaos));
  };

  // randomised pos and rotation of :3
  const timeoutId = (() => {
    if (!enbRandom) return;
    setTimeout(() => {
      HandleRandom();
    }, 100);
  })();

  return (
    <Fragment>
      <div className="flex flex-col justify-center text-white gap-4">
        <motion.div
          animate={{
            rotate,
            x,
            y,
          }}
          className="radical-limination-circle outline-dashed w-[200px]  outline-white flex justify-center items-center aspect-square text-white p-8 rounded-full"
        >
          <h1 className="text-5xl">:3</h1>
        </motion.div>
        <InputRange value={rotate} set={setRotate} />
        <InputRange value={x} set={setx} />
        <InputRange value={y} set={sety} />
        <button
          className="bg-secondary px-4 py-2 rounded inline-block"
          onClick={() => {
            setRotate(0);
            setx(0);
            sety(0);
          }}
        >
          Reset
        </button>
        <button
          className="bg-secondary px-4 py-2 rounded inline-block"
          onClick={() => {
            HandleRandom();
          }}
        >
          Random
        </button>
        <button
          className={clsx(
            " px-4 py-2 rounded inline-block",
            enbRandom ? "bg-secondary" : "bg-red-500"
          )}
          onClick={() => {
            setEnbRandom(!enbRandom);
          }}
        >
          Enable random {enbRandom ? "On" : "Off"}
        </button>
      </div>
    </Fragment>
  );
};

export default Template;
