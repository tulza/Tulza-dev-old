import React, { Fragment, useRef } from "react";
import ProjectBox from "../ProjectBox";
import { motion, useInView } from "framer-motion";
import Section from "../Section";
import HighlightedText from "../highlightedText";
import {
  urlShortening,
  adviceGenComp,
  ageClacComp,
  solitaireGame,
} from "../svg/projectImage";

const MyProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const stagger = 0.1;
  return (
    <Section classname="grid items-center">
      <motion.div className="m-20 grid place-items-center gap-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={
            isInView ? { duration: 0.5, delay: 0.1 } : { duration: 0 }
          }
        >
          <HighlightedText
            text="&lt;My Projects/&zwnj;&gt;"
            className="text-4xl"
            color="green"
          />
        </motion.div>
        <motion.div
          className="flex translate-x-20 gap-10"
          initial="hidden"
          transition={
            isInView
              ? { staggerChildren: stagger }
              : { duration: 0, staggerChildren: 0 }
          }
          animate={isInView ? "visible" : "hidden"}
        >
          {/*1-3 projects */}
          <ProjectBox
            title="Web-portfolio"
            tags={[
              "React",
              "Javascript",
              "Tailwind",
              "Framer motion",
              "html/css",
            ]}
          />
          <ProjectBox
            title="URL-shortening-API-page"
            image={urlShortening}
            tags={[
              "React",
              "Javascript",
              "Tailwind",
              "Responsive",
              "Post api",
              "html/css",
            ]}
          />
          <ProjectBox
            title="Age-calculator-app"
            image={ageClacComp}
            tags={["html/css", "Javascript", "Responsive"]}
          />
        </motion.div>
        <motion.div
          className="flex -translate-x-20 gap-10"
          initial="hidden"
          exit="hidden"
          transition={
            isInView
              ? {
                  staggerChildren: stagger,
                  staggerDirection: -1,
                  delayChildren: stagger * 3,
                }
              : { duration: 0 }
          }
          animate={isInView ? "visible" : "hidden"}
        >
          {/*4-6 projects */}
          <ProjectBox
            image={adviceGenComp}
            title="Advice generator app"
            tags={["html/css", "Javascript", "RestAPI"]}
          />
          <ProjectBox
            title="Solitaire lite"
            tags={["Python", "Turtle"]}
            image={solitaireGame}
          />
          <ProjectBox title="Stray-Artist" tags={["Unity", "C#"]} />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default MyProjects;
