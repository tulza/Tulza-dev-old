import * as iconData from "../../data.json";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const transition = {
  repeat: Infinity,
  duration: 0.5,
  ease: "easeInOut",
};

const SlideInOutText = () => {
  const data = iconData.icons;
  const iconList = [...data].map((n) => {
    return n.name;
  });
  const [text, setText] = useState([iconList[0], iconList[0]]);
  const [index, setIndex] = useState(0);
  setTimeout(() => {
    setText([iconList[0], iconList[1]]);
  }, 1000);
  return (
    <div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ y: "-60%", opacity: 0 }}
        transition={transition}
      >
        <p>&nbsp;{text[0]}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: "-100%", opacity: 1 }}
        transition={transition}
        OnAnimationRepeat={() => {}}
      >
        <p>&nbsp;{text[1]}</p>
      </motion.div>
    </div>
  );
};

export default SlideInOutText;
