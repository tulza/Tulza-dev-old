import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const transition = {
  duration: 0.25,
  ease: "easeInOut",
};

const SlideInOutText = ({ data }) => {
  const iconList = [...data].map((n) => {
    return [n.name, n.color];
  });
  const [text, setText] = useState([iconList[0], iconList[0]]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setText([iconList[index], iconList[(index + 1) % iconList.length]]);
    // console.log(text);
  }, [index]);

  const handleNextItem = () => {
    setIndex(() => {
      // console.log((index + 1) % iconList.length);
      return (index + 1) % iconList.length;
    });
  };

  return (
    <div className="w-0 whitespace-nowrap ">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ y: "-60%", opacity: 0 }}
        transition={transition}
        key={uuidv4()}
      >
        <p style={{ color: `var(--${text[0][1]})` }}>&nbsp;{text[0][0]}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: "-100%", opacity: 1 }}
        transition={transition}
        key={uuidv4()}
        onAnimationComplete={() => {
          setTimeout(() => {
            console.log("next");
            handleNextItem();
          }, 1000);
        }}
      >
        <p style={{ color: `var(--${text[1][1]})` }}>&nbsp;{text[1][0]}</p>
      </motion.div>
    </div>
  );
};

export default SlideInOutText;
