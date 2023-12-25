import { motion, transform } from "framer-motion";
import React, { useState } from "react";

const SlideInOutText = () => {
  const transition = {
    repeat: Infinity,
    duration: 0.5,
    ease: "easeInOut",
    repeatDelay: 3,
  };

  const [text, setText] = useState(["React", "React"]);
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
      >
        <p>&nbsp;{text[1]}</p>
      </motion.div>
    </div>
  );
};

export default SlideInOutText;
