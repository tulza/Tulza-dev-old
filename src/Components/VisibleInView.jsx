import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

/**
 *
 * @param {string} amount (amount*100)% of the component needed to be visible
 * @param {string} duration time in seconds to turn visible
 * @param {code} children the code that is wrapped around
 * @returns this will wrap the component and turn visible when (amount*100)% of the component is visible
 */
const VisibleInView = ({ amount, children, duration, delay, className }) => {
  amount = amount ? amount : 0.5;
  duration = duration ? duration : 0.5;
  delay = delay ? delay : 0;
  const ref = useRef(null);
  const IsInView = useInView(ref, { amount: amount });
  return (
    <motion.div
      className={clsx("h-min w-min", className)}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={IsInView ? { opacity: 1 } : { opacity: 0 }}
      transition={
        IsInView
          ? { duration: duration, delay: delay }
          : { duration: 0, delay: 0 }
      }
    >
      {children}
    </motion.div>
  );
};

export default VisibleInView;
