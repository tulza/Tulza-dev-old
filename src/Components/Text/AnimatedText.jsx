import clsx from "clsx";
import { useInView, motion } from "framer-motion";
import React, { Fragment, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const AnimatedText = ({
  text,
  className,
  applyEachChar,
  variants,
  stagger,
  delay,
  transition,
  condition,
  type,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  stagger = stagger ? stagger : 0.01;
  delay = delay ? delay : 0.01;
  transition = transition ? transition : null;
  // if null it will strictly equal
  condition = condition === false ? false : true;
  return (
    <p className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView && condition ? "visible" : "hidden"}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {text.split(" ").map((word, i) => {
          {
            /* React doesn't like fragment not having a key*/
          }

          return (
            <Fragment key={uuidv4()}>
              {[...word].map((char) => {
                return (
                  <ReturnText
                    text={char}
                    variants={variants}
                    applyEachChar={applyEachChar}
                    transition={transition}
                    key={uuidv4()}
                  />
                );
              })}
              {/* only add spaces between words */}
              {i + 1 === text.split(" ").length ? (
                ""
              ) : (
                <span key={uuidv4()}>&nbsp;</span>
              )}
            </Fragment>
          );
        })}
      </motion.span>
    </p>
  );
};

const ReturnText = ({ text, variants, applyEachChar, transition }) => {
  return (
    <motion.span
      variants={variants}
      className={clsx("inline-block", applyEachChar)}
      transition={transition}
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;
