import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

const VisibleInView = ({ amount, children, duration }) => {
  amount = amount ? amount : 0.5;
  duration = duration ? duration : 0.5;

  const ref = useRef(null);
  const IsInView = useInView(ref, { amount: amount });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={IsInView ? { opacity: 1 } : { opacity: 0 }}
      transition={IsInView ? { duration: duration } : { duration: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default VisibleInView;
